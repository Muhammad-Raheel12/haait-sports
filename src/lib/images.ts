import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

/**
 * Product photos are optional. When a file is missing these return null (or an
 * empty gallery) and the page shows branded artwork instead.
 * Server-only: reads the /public folder at build time.
 *
 * Where to put photos (all under /public/images/products/):
 *   [category].jpg                 category tile, 1600×1200 (4:3)
 *   [category]/[item].jpg          style card (only this file is used on cards)
 *   [category]/[item]/1.jpg, 2.jpg product page gallery, 1200×1200 (square), shown in number order
 * .jpg, .jpeg, .png and .webp all work.
 */
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];
const PUBLIC = path.join(process.cwd(), "public");

/** Returns the public URL of `base` with whichever supported extension exists. */
function find(base: string): string | null {
  for (const ext of EXTENSIONS) {
    const src = `${base}.${ext}`;
    if (existsSync(path.join(PUBLIC, src))) return src;
  }
  return null;
}

/** Category tile photo. */
export function categoryImage(category: string): string | null {
  return find(`/images/products/${category}`);
}

/** Product page gallery: numbered photos in the item's folder, sorted 1, 2, 3 … 10. */
export function itemGallery(category: string, item: string): string[] {
  const dir = `/images/products/${category}/${item}`;
  let files: string[];
  try {
    files = readdirSync(path.join(PUBLIC, dir));
  } catch {
    return [];
  }
  const pattern = new RegExp(`^(\\d+)\\.(${EXTENSIONS.join("|")})$`, "i");
  return files
    .map((f) => ({ f, m: f.match(pattern) }))
    .filter((x): x is { f: string; m: RegExpMatchArray } => x.m !== null)
    .sort((a, b) => Number(a.m[1]) - Number(b.m[1]))
    .map((x) => `${dir}/${x.f}`);
}

/** Style card photo. Only [category]/[item].jpg is used; gallery and category photos never appear on cards. */
export function itemImage(category: string, item: string): string | null {
  return find(`/images/products/${category}/${item}`);
}
