/**
 * Tests for the garment detection and 4:3 fitting in optimize-images.mjs.
 * Uses synthetic "studio" photos (grey radial gradient, a garment shape, a soft floor shadow)
 * so no real product photos are needed.
 *
 *   npm test
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";
import { findGarment, fit } from "./optimize-images.mjs";

const SIZE = 1024;

/** A square studio photo with a garment rectangle at the given fractions, optionally with a floor shadow. */
async function studioPhoto(file, { left, top, right, bottom, color = "#0b1a4a", shadow = true }) {
  const px = (f) => Math.round(f * SIZE);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
    <defs>
      <radialGradient id="bg" cx="50%" cy="45%" r="70%">
        <stop offset="0%" stop-color="#f2f2f4"/><stop offset="100%" stop-color="#d6d6da"/>
      </radialGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="18"/></filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    ${shadow ? `<ellipse cx="${px((left + right) / 2)}" cy="${px(bottom) + 30}" rx="${px((right - left) / 2)}" ry="14" fill="#9a9aa0" opacity="0.5" filter="url(#blur)"/>` : ""}
    <rect x="${px(left)}" y="${px(top)}" width="${px(right - left)}" height="${px(bottom - top)}" rx="12" fill="${color}"/>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(file);
}

const near = (actual, expected, tolerance, label) =>
  assert.ok(Math.abs(actual - expected) <= tolerance, `${label}: expected ${expected} ± ${tolerance}, got ${actual.toFixed(3)}`);

let dir;
test.before(async () => (dir = await mkdtemp(path.join(tmpdir(), "fit-test-"))));
test.after(() => rm(dir, { recursive: true, force: true }));

test("finds the garment and ignores the soft floor shadow", async () => {
  const file = path.join(dir, "navy.jpg");
  await studioPhoto(file, { left: 0.25, top: 0.12, right: 0.75, bottom: 0.82 });
  const box = await findGarment(file);
  near(box.left, 0.25, 0.015, "left");
  near(box.right, 0.75, 0.015, "right");
  near(box.top, 0.12, 0.015, "top");
  near(box.bottom, 0.82, 0.015, "bottom (shadow must not extend it)");
});

test("finds a white garment on the light studio background", async () => {
  const file = path.join(dir, "white.jpg");
  await studioPhoto(file, { left: 0.3, top: 0.2, right: 0.7, bottom: 0.8, color: "#ffffff" });
  const box = await findGarment(file);
  near(box.left, 0.3, 0.015, "left");
  near(box.bottom, 0.8, 0.015, "bottom");
});

test("fits a tall garment to 84% of the height, centred, at the exact output size", async () => {
  const src = path.join(dir, "tall.jpg");
  const out = path.join(dir, "tall.webp");
  // Off-centre on purpose: the fit should re-centre it.
  await studioPhoto(src, { left: 0.1, top: 0.05, right: 0.5, bottom: 0.9 });
  assert.equal(await fit(src, out, [800, 600]), true);

  const meta = await sharp(out).metadata();
  assert.equal(meta.format, "webp");
  assert.deepEqual([meta.width, meta.height], [800, 600]);

  const box = await findGarment(out);
  near(box.bottom - box.top, 0.84, 0.03, "garment height");
  near((box.left + box.right) / 2, 0.5, 0.02, "horizontal centre");
  near((box.top + box.bottom) / 2, 0.5, 0.02, "vertical centre");
});

test("limits a wide garment to 88% of the width", async () => {
  const src = path.join(dir, "wide.jpg");
  const out = path.join(dir, "wide.webp");
  await studioPhoto(src, { left: 0.04, top: 0.3, right: 0.96, bottom: 0.7 });
  await fit(src, out, [1200, 900]);

  const box = await findGarment(out);
  near(box.right - box.left, 0.88, 0.03, "garment width");
  assert.ok(box.bottom - box.top < 0.84, "height stays under the 84% target");
});

test("skips a photo with no garment instead of producing a bad crop", async () => {
  const src = path.join(dir, "empty.jpg");
  await sharp({ create: { width: 400, height: 400, channels: 3, background: "#e0e0e4" } }).jpeg().toFile(src);
  assert.equal(await fit(src, path.join(dir, "empty.webp"), [800, 600]), false);
});
