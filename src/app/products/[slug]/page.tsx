import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import QuoteCta from "@/components/QuoteCta";
import ProductCard from "@/components/ProductCard";
import ProductItemCard from "@/components/ProductItemCard";
import { ProductVisual } from "@/components/ProductArt";
import JsonLd from "@/components/JsonLd";
import { getProduct, products } from "@/data/products";
import { productItems } from "@/data/product-items";
import { site } from "@/config/site";
import { categoryImage, itemImage } from "@/lib/images";
import { absoluteUrl, faqLd, pageMetadata } from "@/lib/seo";

export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  return pageMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/products/${p.slug}/`,
    keywords: p.keywords,
    image: categoryImage(p.slug) ?? undefined,
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const items = productItems[p.slug] ?? [];
  const quoteHref = `/contact/?product=${encodeURIComponent(p.name)}`;
  const specs = [
    { label: "Minimum order", value: site.ordering.moq },
    ...p.specs,
    { label: "Sample time", value: site.ordering.sampleTime },
    { label: "Production", value: site.ordering.productionTime },
  ];
  const related = products.filter((x) => x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Custom ${p.name} manufacturing`,
          serviceType: p.name,
          description: p.metaDescription,
          url: absoluteUrl(`/products/${p.slug}/`),
          provider: { "@id": `${site.url}/#organization` },
          areaServed: "Worldwide",
        }}
      />
      {items.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${p.name} styles`,
            itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: absoluteUrl(`/products/${p.slug}/${it.slug}/`) })),
          }}
        />
      )}
      {p.faqs.length > 0 && <JsonLd data={faqLd(p.faqs)} />}

      <PageHeader
        eyebrow={`${items.length} styles · MOQ ${site.ordering.moq}`}
        title={`Custom ${p.name}`}
        intro={p.summary}
        crumbs={[{ name: "Products", path: "/products/" }, { name: p.name, path: `/products/${p.slug}/` }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={quoteHref} className="btn-primary">Get a quote</Link>
          {items.length > 0 && <a href="#range" className="btn-outline text-white">See all {items.length} styles</a>}
        </div>
      </PageHeader>

      {items.length > 0 && (
        <section id="range" aria-labelledby="range-title" className="container scroll-mt-24 py-16 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">The range</p>
              <h2 id="range-title" className="mt-4">Our {p.short} range</h2>
            </div>
            <p className="max-w-md text-steel">Every style is made to order in your colors, with your logo, names and numbers. Mix styles in one order.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {items.map((item) => <ProductItemCard key={item.slug} item={item} category={p.slug} image={itemImage(p.slug, item.slug)} />)}
          </div>
        </section>
      )}

      <section className="bg-chalk py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <ProductVisual image={categoryImage(p.slug)} alt={`Custom ${p.name} manufactured to order`} seed={p.slug} label={p.short} sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
            <div className="prose-body mt-10">
              <h2>About our {p.name.toLowerCase()}</h2>
              {p.intro.map((t) => <p key={t}>{t}</p>)}
            </div>
          </div>

          {/* Spec sheet styled like a tech-pack panel */}
          <aside aria-labelledby="spec-title" className="lg:sticky lg:top-24 lg:self-start">
            <div className="stitched rounded-2xl bg-navy p-8 text-white shadow-2xl shadow-navy/20">
              <h2 id="spec-title" className="text-3xl text-white">Spec sheet</h2>
              <dl className="mt-6 divide-y divide-white/15">
                {specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-3">
                    <dt className="text-sm text-white/60">{s.label}</dt>
                    <dd className="font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <Link href={quoteHref} className="btn-primary relative z-10 mt-8 w-full">Request a quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-line p-8">
            <h2 className="text-[2rem]">What we make</h2>
            <ul className="mt-6 space-y-3">
              {p.includes.map((i) => (
                <li key={i} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-pylon" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line p-8">
            <h2 className="text-[2rem]">Fabrics</h2>
            <dl className="mt-6 space-y-4">
              {p.fabrics.map((f) => (
                <div key={f.name}>
                  <dt className="font-bold">{f.name}</dt>
                  <dd className="text-navy/75">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-line p-8">
            <h2 className="text-[2rem]">Decoration</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.decoration.map((d) => (
                <li key={d} className="rounded-full border border-navy/20 bg-chalk px-4 py-1.5 text-[0.95rem]">{d}</li>
              ))}
            </ul>
            <Link href="/custom-uniforms/" className="mt-6 inline-block font-bold text-pylon-dark underline-offset-4 hover:underline">Compare decoration methods →</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="container">
          <p className="eyebrow-dark">Built to last</p>
          <h2 className="mt-4 text-white">Details that make the difference</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {p.features.map((f, i) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-pylon">0{i + 1}</span>
                <h3 className="mt-3 text-white">{f.title}</h3>
                <p className="mt-3 text-white/75">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {p.faqs.length > 0 && (
        <section className="container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4">{p.name}: questions buyers ask</h2>
            </div>
            <FaqList items={p.faqs} />
          </div>
        </section>
      )}

      <section className="bg-chalk py-16 md:py-24">
        <div className="container">
          <h2 className="text-[2rem]">Other uniforms we make</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => <ProductCard key={r.slug} product={r} image={categoryImage(r.slug)} styles={productItems[r.slug]?.length} />)}
          </div>
        </div>
      </section>

      <QuoteCta heading={`Get pricing for custom ${p.name}`} product={p.name} />
    </>
  );
}
