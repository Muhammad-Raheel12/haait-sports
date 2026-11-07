/**
 * Converts product photos in public/images/products/ to WebP and deletes the originals.
 * Safe to re-run: only .jpg/.jpeg/.png files are touched, so already-converted photos are skipped.
 *
 *   npm run optimize-images
 *
 * Sizes (never upscaled):
 *   [category].jpg            category tile   → 1024px wide
 *   [category]/[item].jpg     style card      → 800px wide (cards never display wider)
 *   [category]/[item]/N.jpg   product gallery → 1024px wide
 */
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public/images/products");
const QUALITY = 85;
const SOURCE = /\.(jpe?g|png)$/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (SOURCE.test(entry.name)) yield full;
  }
}

let count = 0;
let before = 0;
let after = 0;

for await (const file of walk(ROOT)) {
  const depth = path.relative(ROOT, file).split(path.sep).length; // 1 = tile, 2 = card, 3 = gallery
  const width = depth === 2 ? 800 : 1024;
  const out = file.replace(SOURCE, ".webp");

  await sharp(file).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
  before += (await stat(file)).size;
  after += (await stat(out)).size;
  await unlink(file);
  count++;
}

const mb = (n) => (n / 1048576).toFixed(1);
console.log(count ? `Converted ${count} images: ${mb(before)} MB → ${mb(after)} MB` : "Nothing to convert: all product photos are already WebP.");
