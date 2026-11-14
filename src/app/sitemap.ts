import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { products } from "@/data/products";
import { productItems } from "@/data/product-items";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

/**
 * lastModified is only set where we know the real date (blog posts). Stamping every page
 * with the build time teaches Google to ignore lastmod for the whole site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["/", 1],
    ["/products/", 0.9],
    ["/custom-uniforms/", 0.8],
    ["/manufacturing/", 0.7],
    ["/how-to-order/", 0.7],
    ["/about/", 0.7],
    ["/faq/", 0.6],
    ["/contact/", 0.8],
    ["/blog/", 0.6],
    ["/privacy-policy/", 0.2],
  ];
  return [
    ...pages.map(([path, priority]) => ({ url: absoluteUrl(path), priority })),
    ...products.map((p) => ({ url: absoluteUrl(`/products/${p.slug}/`), priority: 0.9 })),
    ...products.flatMap((p) =>
      (productItems[p.slug] ?? []).map((it) => ({ url: absoluteUrl(`/products/${p.slug}/${it.slug}/`), priority: 0.8 })),
    ),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}/`), lastModified: new Date(p.updated ?? p.date), priority: 0.5 })),
  ];
}
