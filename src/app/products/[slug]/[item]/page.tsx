import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteCta from "@/components/QuoteCta";
import ProductItemCard from "@/components/ProductItemCard";
import ProductGallery from "@/components/ProductGallery";
import JsonLd from "@/components/JsonLd";
import { FieldLines, Glow } from "@/components/PageHeader";
import { getProduct, products } from "@/data/products";
import { productItems } from "@/data/product-items";
import { site } from "@/config/site";
import { itemGallery, itemImage } from "@/lib/images";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Params = { params: { slug: string; item: string } };

export const generateStaticParams = () =>
  products.flatMap((p) => (productItems[p.slug] ?? []).map((it) => ({ slug: p.slug, item: it.slug })));

function load({ slug, item }: Params["params"]) {
  const category = getProduct(slug);
  const items = productItems[slug] ?? [];
  const it = items.find((x) => x.slug === item);
  return category && it ? { category, it, items } : null;
}

export function generateMetadata({ params }: Params): Metadata {
  const data = load(params);
  if (!data) return {};
  const { category, it } = data;
  return pageMetadata({
    title: `Custom ${it.name} – ${category.short}`,
    description: it.metaDescription,
    path: `/products/${category.slug}/${it.slug}/`,
    keywords: [`custom ${it.name.toLowerCase()}`, `${it.name.toLowerCase()} manufacturer`, ...category.keywords.slice(0, 3)],
    image: itemGallery(category.slug, it.slug)[0] ?? itemImage(category.slug, it.slug) ?? undefined,
  });
}

export default function ItemPage({ params }: Params) {
  const data = load(params);
  if (!data) notFound();
  const { category, it, items } = data;
  const gallery = itemGallery(category.slug, it.slug);
  const cardImage = itemImage(category.slug, it.slug);
  const photos = gallery.length ? gallery : cardImage ? [cardImage] : [];

  const quoteHref = `/contact/?product=${encodeURIComponent(`${it.name} (${category.name})`)}`;
  const waText = `Hi ${site.name}, I’d like a quote for ${it.name} (${category.name}).`;
  const facts = [
    { label: "Minimum order", value: site.ordering.moq },
    { label: "Sample", value: site.ordering.sampleTime },
    { label: "Bulk production", value: site.ordering.productionTime },
  ];
  const specs = [
    ...category.specs,
    { label: "Minimum order", value: site.ordering.moq },
    { label: "Shipping", value: site.ordering.shipping },
  ];
  // Next styles in the same category, wrapping around so every page links to five siblings.
  const idx = items.findIndex((x) => x.slug === it.slug);
  const more = Array.from({ length: Math.min(5, items.length - 1) }, (_, i) => items[(idx + 1 + i) % items.length]);

  return (
    <>
      {/* No offers/price: made-to-order pricing is quoted per order, so this describes the product without claiming one. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: `Custom ${it.name}`,
          description: it.metaDescription,
          url: absoluteUrl(`/products/${category.slug}/${it.slug}/`),
          category: category.name,
          ...(photos.length ? { image: photos.map((src) => `${site.url}${src}`) } : {}),
          brand: { "@type": "Brand", name: site.name },
          manufacturer: { "@id": `${site.url}/#organization` },
        }}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <FieldLines />
        <Glow />
        <div className="container relative py-12 md:py-16">
          <Breadcrumbs
            items={[
              { name: "Products", path: "/products/" },
              { name: category.name, path: `/products/${category.slug}/` },
              { name: it.name, path: `/products/${category.slug}/${it.slug}/` },
            ]}
          />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <ProductGallery images={photos} alt={`Custom ${it.name} by ${site.name}`} seed={`${category.slug}/${it.slug}`} label={category.short} />
            <div>
              <p className="eyebrow-dark">{category.name}</p>
              <h1 className="mt-4 text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}>Custom {it.name}</h1>
              <p className="mt-5 max-w-xl text-lg text-white/80">{it.detail}</p>
              <ul className="mt-7 space-y-3">
                {it.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-white/90">
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-pylon p-1 text-navy" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 10.5l4 4 8-9" /></svg>
                    {h}
                  </li>
                ))}
              </ul>
              <dl className="mt-8 grid grid-cols-3 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="rounded-xl border border-white/10 bg-white/[0.05] p-3.5">
                    <dt className="text-xs text-white/60">{f.label}</dt>
                    <dd className="mt-1 text-sm font-bold leading-snug">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={quoteHref} className="btn-primary">Get a quote for this style</Link>
                <a href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(waText)}`} className="btn-outline text-white" rel="noopener">
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-12 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">Overview</p>
          <h2 className="mt-4">About the {it.name}</h2>
          <div className="prose-body mt-6">
            {it.description.map((t) => <p key={t}>{t}</p>)}
          </div>

          <h2 className="mt-14 text-[2rem]">Fabric options</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {category.fabrics.map((f) => (
              <div key={f.name} className="rounded-2xl border border-line p-5">
                <dt className="font-bold">{f.name}</dt>
                <dd className="mt-1 text-navy/75">{f.detail}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-14 text-[2rem]">Decoration options</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {category.decoration.map((d) => (
              <li key={d} className="rounded-full border border-navy/20 bg-chalk px-4 py-1.5 text-[0.95rem]">{d}</li>
            ))}
          </ul>
          <Link href="/custom-uniforms/" className="mt-6 inline-block font-bold text-pylon-dark underline-offset-4 hover:underline">Compare decoration methods →</Link>
        </div>

        <aside aria-labelledby="spec-title" className="lg:sticky lg:top-24 lg:self-start">
          <div className="stitched rounded-2xl bg-navy p-8 text-white shadow-2xl shadow-navy/20">
            <h2 id="spec-title" className="text-3xl text-white">Spec sheet</h2>
            <dl className="mt-6 divide-y divide-white/15">
              {specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                  <dt className="text-sm text-white/60">{s.label}</dt>
                  <dd className="font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
            <Link href={quoteHref} className="btn-primary relative z-10 mt-8 w-full">Request a quote</Link>
          </div>
          <Link href={`/products/${category.slug}/`} className="mt-6 block rounded-2xl border border-line p-5 font-bold transition hover:border-pylon hover:text-pylon-dark">
            ← All {category.name.toLowerCase()}
          </Link>
        </aside>
      </section>

      {more.length > 0 && (
        <section className="bg-chalk py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="text-[2rem]">More {category.short} styles</h2>
              <Link href={`/products/${category.slug}/`} className="font-bold text-pylon-dark underline-offset-4 hover:underline">View the full range →</Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {more.map((m) => <ProductItemCard key={m.slug} item={m} category={category.slug} image={itemImage(category.slug, m.slug)} />)}
            </div>
          </div>
        </section>
      )}

      <QuoteCta heading={`Get pricing for the ${it.name}`} product={`${it.name} (${category.name})`} />
    </>
  );
}
