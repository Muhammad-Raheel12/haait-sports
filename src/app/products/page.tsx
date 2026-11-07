import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import QuoteCta from "@/components/QuoteCta";
import JsonLd from "@/components/JsonLd";
import { products } from "@/data/products";
import { productItems } from "@/data/product-items";
import { site } from "@/config/site";
import { categoryImage } from "@/lib/images";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

const sportList = products.map((p) => p.short.toLowerCase());

export const metadata: Metadata = pageMetadata({
  title: "Custom Team Uniforms & Sportswear Products",
  description: `Custom ${sportList.slice(0, 5).join(", ")} and more team uniforms, made to order in your design from ${site.ordering.moq}. Shipped worldwide.`,
  path: "/products/",
  keywords: ["custom team uniforms", "sportswear manufacturer products", "team uniform supplier", "wholesale sports uniforms"],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Custom team uniforms",
          url: absoluteUrl("/products/"),
          hasPart: products.map((p) => ({ "@type": "WebPage", name: p.name, url: absoluteUrl(`/products/${p.slug}/`) })),
        }}
      />
      <PageHeader
        eyebrow={`${products.length} sports · made to order`}
        title="Custom team uniforms"
        intro={`Made to order in your design and colors, from ${site.ordering.moq}. Choose a sport to see every style, fabric, decoration option and size.`}
        crumbs={[{ name: "Products", path: "/products/" }]}
      />

      <section className="container py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} image={categoryImage(p.slug)} styles={productItems[p.slug]?.length} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* Full style index: one crawlable link to every product page. */}
      <section aria-labelledby="all-styles" className="bg-chalk py-16 md:py-24">
        <div className="container">
          <p className="eyebrow">Full catalog</p>
          <h2 id="all-styles" className="mt-4">Every style we make</h2>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.slug}>
                <h3 className="text-xl">
                  <Link href={`/products/${p.slug}/`} className="hover:text-pylon-dark">{p.name}</Link>
                </h3>
                <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                  {(productItems[p.slug] ?? []).map((it) => (
                    <li key={it.slug}>
                      <Link href={`/products/${p.slug}/${it.slug}/`} className="text-navy/75 hover:text-pylon-dark hover:underline">{it.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 max-w-prose rounded-2xl bg-white p-8 ring-1 ring-line">
            <h2 className="text-[2rem]">Don’t see your sport?</h2>
            <p className="mt-4 text-navy/80">
              We also produce lacrosse, cheerleading, wrestling, netball and cycling uniforms, plus training wear and fan merchandise.
              If it’s a cut-and-sew sports garment, we can most likely make it. Send us a reference photo and we’ll quote it.
            </p>
          </div>
        </div>
      </section>
      <QuoteCta heading="Request pricing for your sport" />
    </>
  );
}
