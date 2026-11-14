/**
 * Prepares product photos in public/images/products/. Safe to re-run.
 *
 *   npm run optimize-images
 *
 * 1. Convert: .jpg/.jpeg/.png → WebP, originals deleted.
 *      [category]/[item]/N.jpg   product gallery → 1024px wide (never upscaled; square, shown whole)
 *      [category].jpg            category tile   → fitted, see below
 *      [category]/[item].jpg     style card      → fitted, see below
 *
 * Fit: tiles and cards are shown in 4:3 boxes, so they are rendered as exact 4:3 images
 * with the garment found, scaled to the same size and centred: tiles 1200×900 (only 7, shown
 * large), cards 800×600 (10+ per page, sharp at card size and keeps category pages light). Nothing gets cropped and every
 * card looks even. Fit straight from the original JPG: fitting a WebP compresses it twice.
 * WebP tiles/cards that aren't 4:3 yet are fitted too; ones that already are 4:3 are skipped.
 */
import { readdir, stat, unlink, rename } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public/images/products");
const QUALITY = 85;
const SOURCE = /\.(jpe?g|png)$/i;

/** Garment size inside the 4:3 frame. Height is the target; width only limits wide items. */
const FIT_HEIGHT = 0.84;
const FIT_WIDTH = 0.88;
const FIT_SIZE = { 1: [1200, 900], 2: [800, 600] }; // by depth: 1 = tile, 2 = card

async function* walk(dir, pattern) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full, pattern);
    else if (pattern.test(entry.name)) yield full;
  }
}

const depthOf = (file) => path.relative(ROOT, file).split(path.sep).length; // 1 = tile, 2 = card, 3 = gallery

/**
 * Garment bounding box as fractions of the image. The studio background is a smooth grey
 * gradient, so it is flood-filled in from the borders; the garment's outline stops the fill.
 * Soft floor shadows are smooth too, so they count as background.
 */
async function findGarment(file) {
  const N = 256;
  const { data } = await sharp(file).removeAlpha().resize(N, N, { fit: "fill" }).blur(1).raw().toBuffer({ resolveWithObject: true });
  const bg = new Uint8Array(N * N);
  const queue = new Int32Array(N * N);
  let head = 0;
  let tail = 0;
  const seed = (i) => {
    if (!bg[i]) (bg[i] = 1), (queue[tail++] = i);
  };
  for (let k = 0; k < N; k++) seed(k), seed((N - 1) * N + k), seed(k * N), seed(k * N + N - 1);

  const close = (a, b) =>
    Math.abs(data[a * 3] - data[b * 3]) <= 4 && Math.abs(data[a * 3 + 1] - data[b * 3 + 1]) <= 4 && Math.abs(data[a * 3 + 2] - data[b * 3 + 2]) <= 4;
  while (head < tail) {
    const i = queue[head++];
    const x = i % N;
    if (x > 0 && !bg[i - 1] && close(i, i - 1)) seed(i - 1);
    if (x < N - 1 && !bg[i + 1] && close(i, i + 1)) seed(i + 1);
    if (i >= N && !bg[i - N] && close(i, i - N)) seed(i - N);
    if (i < N * (N - 1) && !bg[i + N] && close(i, i + N)) seed(i + N);
  }

  const rows = new Array(N).fill(0);
  const cols = new Array(N).fill(0);
  for (let i = 0; i < N * N; i++) if (!bg[i]) rows[(i / N) | 0]++, cols[i % N]++;
  const MIN = 3; // ignore rows/columns with only a few stray pixels
  const first = (a) => a.findIndex((c) => c >= MIN);
  const last = (a) => a.findLastIndex((c) => c >= MIN);
  if (first(rows) < 0) return null;
  return { left: first(cols) / N, top: first(rows) / N, right: (last(cols) + 1) / N, bottom: (last(rows) + 1) / N };
}

/** Fitted cards keep fine edges (white collars, piping): full-resolution colour and high quality. */
const FIT_WEBP = { quality: 92, smartSubsample: true, effort: 6 };

/** Renders `file` to `out` as W×H with the garment centred and scaled to FIT_HEIGHT (or FIT_WIDTH). */
export async function fit(file, out, [W, H]) {
  const { width: w, height: h } = await sharp(file).metadata();

  const box = await findGarment(file);
  if (!box) return console.warn(`  ! no garment found, skipped: ${file}`), false;
  const gw = (box.right - box.left) * w;
  const gh = (box.bottom - box.top) * h;
  const scale = Math.min((FIT_HEIGHT * H) / gh, (FIT_WIDTH * W) / gw);

  // The part of the source that lands in the W×H frame, centred on the garment.
  const cx = ((box.left + box.right) / 2) * w;
  const cy = ((box.top + box.bottom) / 2) * h;
  const fx = cx - W / 2 / scale;
  const fy = cy - H / 2 / scale;
  const sx = Math.max(0, Math.floor(fx));
  const sy = Math.max(0, Math.floor(fy));
  const ex = Math.min(w, Math.ceil(fx + W / scale));
  const ey = Math.min(h, Math.ceil(fy + H / scale));

  // Where the frame reaches past the photo, the studio background is continued from its edge.
  const padL = Math.max(0, Math.round((sx - fx) * scale));
  const padT = Math.max(0, Math.round((sy - fy) * scale));
  const innerW = Math.min(W - padL, Math.round((ex - sx) * scale));
  const innerH = Math.min(H - padT, Math.round((ey - sy) * scale));

  // Lossless intermediate so the photo is only compressed once, at the end.
  const inner = await sharp(file)
    .extract({ left: sx, top: sy, width: ex - sx, height: ey - sy })
    .resize(innerW, innerH, { fit: "fill", kernel: "lanczos3" })
    .png()
    .toBuffer();
  const tmp = `${out}.tmp`;
  await sharp(inner)
    .extend({ left: padL, top: padT, right: W - padL - innerW, bottom: H - padT - innerH, extendWith: "copy" })
    .webp(FIT_WEBP)
    .toFile(tmp);
  await rename(tmp, out);
  return true;
}

// Run as a script (not when another script imports `fit`).
const isMain = process.argv[1] === fileURLToPath(import.meta.url);

if (isMain) {
  let count = 0;
  let before = 0;
  let after = 0;
  let fitted = 0;
  for await (const file of walk(ROOT, SOURCE)) {
    const out = file.replace(SOURCE, ".webp");
    const size = FIT_SIZE[depthOf(file)];
    if (size && (await fit(file, out, size))) fitted++;
    else await sharp(file).rotate().resize({ width: 1024, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
    before += (await stat(file)).size;
    after += (await stat(out)).size;
    await unlink(file);
    count++;
  }
  const mb = (n) => (n / 1048576).toFixed(1);
  console.log(count ? `Converted ${count} images: ${mb(before)} MB → ${mb(after)} MB` : "Nothing to convert: all product photos are already WebP.");

  for await (const file of walk(ROOT, /\.webp$/i)) {
    const size = FIT_SIZE[depthOf(file)];
    if (!size) continue;
    const { width, height } = await sharp(file).metadata();
    if (Math.abs(width / height - size[0] / size[1]) > 0.01 && (await fit(file, file, size))) fitted++;
  }
  console.log(fitted ? `Fitted ${fitted} tiles/cards to 4:3.` : "Nothing to fit: all tiles and cards are already 4:3.");
}
