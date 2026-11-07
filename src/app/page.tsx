import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { products } from "@/data/products";
import { productItems } from "@/data/product-items";
import { posts } from "@/data/posts";
import { faqGroups } from "@/data/faqs";
import ProductCard from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import QuoteCta from "@/components/QuoteCta";
import JsonLd from "@/components/JsonLd";
import { Jersey } from "@/components/ProductArt";
import { FieldLines, Glow } from "@/components/PageHeader";
import { categoryImage } from "@/lib/images";
import { absoluteUrl, faqLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Custom Sports Uniform Manufacturer & Exporter",
    description: site.description,
    path: "/",
    keywords: [
      "sports uniform manufacturer",
      "custom team uniforms",
      "uniform exporter",
      "sialkot sportswear manufacturer",
      "american football uniforms manufacturer",
      "soccer uniforms manufacturer",
      "private label sportswear",
    ],
  }),
  // The homepage uses the full title without the "| Brand" suffix template.
  title: { absolute: `Custom Sports Uniform Manufacturer & Exporter | ${site.name}` },
};

const totalStyles = Object.values(productItems).reduce((n, list) => n + list.length, 0);

const stats = [
  { value: site.ordering.moq.split(" ")[0], unit: "pieces", label: "Minimum order per design" },
  { value: site.ordering.sampleTime.split(" ")[0], unit: "days", label: "To a physical sample" },
  { value: String(products.length), unit: "sports", label: "Uniform categories" },
  { value: `${totalStyles}+`, unit: "styles", label: "Ready to customize" },
];

const trust = ["Free design mockup", `MOQ ${site.ordering.moq}`, "Your logo, your label", "Door-to-door shipping"];

const reasons = [
  {
    icon: "M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6",
    title: "One factory, start to finish",
    text: "Cutting, sublimation, twill, embroidery, stitching and packing all happen under one roof. Nothing is subcontracted, so we control quality and timelines.",
  },
  {
    icon: "M12 3v18M17 7.5C17 5.6 14.8 4 12 4S7 5.6 7 7.5 9.2 11 12 11.5s5 1.9 5 4S14.8 20 12 20s-5-1.6-5-3.5",
    title: "Factory-direct pricing",
    text: "You buy from the people who sew the garments. No agents or trading-house margins between you and production.",
  },
  {
    icon: "M4 6h16M4 12h10M4 18h6",
    title: "Low minimums for teams",
    text: `Order from ${site.ordering.moq}, with sizes, names and numbers mixed freely. Re-orders for new players are welcome.`,
  },
  {
    icon: "M5 4h14v16l-7-4-7 4z",
    title: "Private label for brands",
    text: "Your labels, tags and packaging, with full confidentiality on your designs. We never sell or reuse a customer’s artwork.",
  },
];

const steps = [
  { title: "Quote and free mockup", text: "Send your idea. We reply with pricing and a digital design within a day or two." },
  { title: "Physical sample", text: `We make a real sample in ${site.ordering.sampleTime} so you can check fit, color and finish.` },
  { title: "Bulk production", text: `After approval, your order is produced in ${site.ordering.productionTime}.` },
  { title: "Inspection", text: "Every piece is checked against the approved sample before packing." },
  { title: "Worldwide delivery", text: "Door-to-door by air courier, or sea freight for large orders." },
];

const buyers = [
  { title: "Team dealers and distributors", text: "Reliable supply and tiered pricing for repeat programs." },
  { title: "Sportswear brands", text: "Private-label production with your branding on every piece." },
  { title: "Clubs, schools and academies", text: "Complete kits with player names and numbers, packed per player." },
  { title: "Leagues and tournaments", text: "Large multi-team orders delivered on a fixed deadline." },
];

const decoration = [
  { name: "Dye sublimation", text: "Unlimited colors and gradients printed into the fabric. Never cracks or peels." },
  { name: "Tackle twill", text: "Layered, stitched numbers and names for the classic game-day look." },
  { name: "Embroidery", text: "Crests, sponsor logos and badges stitched for a premium finish." },
  { name: "Screen printing", text: "Sharp, cost-effective spot colors for practice wear and bulk orders." },
  { name: "Woven patches", text: "Fine-detail crests and labels sewn on or heat-applied." },
  { name: "Heat transfers", text: "Player names and numbers applied quickly for mixed-size rosters." },
];

export default function HomePage() {
  const faqs = faqGroups.flatMap((g) => g.items).slice(0, 5);
  const sports = products.map((p) => p.short);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Uniform categories",
          itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: absoluteUrl(`/products/${p.slug}/`) })),
        }}
      />
      <JsonLd data={faqLd(faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <FieldLines />
        <Glow />
        <div className="container relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow-dark">Factory-direct from {site.address.city}, {site.address.country}</p>
            <h1 className="mt-6 text-white" style={{ fontSize: "clamp(2.75rem, 5.4vw, 5rem)" }}>
              <span className="hero-line">Custom sports uniforms,</span>
              <span className="hero-line">made in your colors,</span>
              <span className="hero-line">shipped <span className="hl">worldwide.</span></span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-white/80">
              {site.name} manufactures custom American football, soccer, baseball, basketball, ice hockey and rugby uniforms for dealers, sportswear brands and clubs in{" "}
              {site.ordering.markets.slice(0, 4).join(", ")} and beyond.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Get a free quote</Link>
              <Link href="/products/" className="btn-outline text-white">Browse {totalStyles}+ styles</Link>
            </div>
            <ul className="mt-10 grid max-w-xl gap-x-6 gap-y-3 text-sm text-white/80 sm:grid-cols-2">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 rounded-full bg-pylon p-1 text-navy" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 10.5l4 4 8-9" /></svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Jersey stack */}
          <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-md">
            <div className="absolute inset-[8%] rounded-full border border-white/10" />
            <div className="absolute inset-[22%] rounded-full border border-dashed border-pylon/30" />
            <div className="float absolute left-0 top-[14%] w-[48%] rounded-3xl bg-navy-soft p-4 shadow-2xl ring-1 ring-white/10" style={{ ["--r" as string]: "-8deg" }}>
              <Jersey shirt="#FFFFFF" trim="#F8AF3F" num="#050020" number={7} />
            </div>
            <div className="float absolute right-0 top-[6%] w-[46%] rounded-3xl bg-pylon p-4 shadow-2xl" style={{ ["--r" as string]: "7deg", animationDelay: "-2s" }}>
              <Jersey shirt="#050020" trim="#F8AF3F" num="#F8AF3F" number={10} />
            </div>
            <div className="float absolute bottom-[2%] left-[24%] w-[52%] rounded-3xl bg-white p-4 shadow-2xl" style={{ ["--r" as string]: "-2deg", animationDelay: "-4s" }}>
              <Jersey shirt="#F8AF3F" trim="#050020" num="#050020" number={23} />
            </div>
          </div>
        </div>
      </section>

      {/* Sports ticker */}
      <div className="marquee overflow-hidden border-y border-navy/10 bg-pylon py-4 text-navy-deep" aria-label={`Sports we make uniforms for: ${sports.join(", ")}`}>
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((n) => (
            <ul key={n} className="flex shrink-0 items-center">
              {[...sports, ...sports].map((s, i) => (
                <li key={`${s}-${i}`} className="flex items-center gap-8 pr-8 font-display text-2xl font-extrabold uppercase tracking-wide">
                  {s}
                  <span className="text-navy/40">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section aria-label="Ordering at a glance" className="container py-14 md:py-16">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col rounded-2xl border border-line bg-chalk p-6">
              <dt className="order-2 mt-2 text-sm text-steel">{s.label}</dt>
              <dd className="font-display text-5xl font-extrabold leading-none text-navy">
                {s.value} <span className="text-2xl text-pylon-dark">{s.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Products */}
      <section className="container pb-20 md:pb-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Our range</p>
            <h2 className="mt-4">Uniforms for every <span className="text-pylon-dark">team sport</span></h2>
            <p className="mt-4 text-lg text-steel">
              Every uniform is made to order in your colors and design, in sizes from youth to adult 5XL.
            </p>
          </div>
          <Link href="/products/" className="btn-dark self-start md:self-auto">View all products</Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} image={categoryImage(p.slug)} styles={productItems[p.slug]?.length} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-chalk py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">Why {site.name}</p>
            <h2 className="mt-4">Why teams and brands buy direct from us</h2>
            <p className="mt-5 text-lg text-steel">
              We’ve been manufacturing team uniforms in {site.address.city}, {site.address.country}, one of the world’s great sports-goods
              cities, since {site.foundingYear}. Buying direct means better prices, faster answers and one partner responsible for your order.
            </p>
            <Link href="/about/" className="mt-6 inline-block font-bold text-pylon-dark underline-offset-4 hover:underline">More about our company →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-line transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-pylon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={r.icon} /></svg>
                </span>
                <h3 className="mt-5">{r.title}</h3>
                <p className="mt-3 text-navy/75">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4">From idea to delivery in five steps</h2>
          <p className="mt-4 text-lg text-steel">A clear process with an approval at every stage, so your order arrives exactly as designed.</p>
        </div>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          <div aria-hidden="true" className="absolute left-7 right-7 top-7 hidden h-0.5 bg-gradient-to-r from-pylon via-pylon/60 to-pylon/10 md:block" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-navy font-display text-2xl font-extrabold text-pylon ring-8 ring-white">{i + 1}</span>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-[0.98rem] text-navy/75">{s.text}</p>
            </li>
          ))}
        </ol>
        <Link href="/how-to-order/" className="btn-dark mt-12">Read the full ordering guide</Link>
      </section>

      {/* Who we serve */}
      <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
        <FieldLines />
        <Glow />
        <div className="container relative">
          <p className="eyebrow-dark">Who we serve</p>
          <h2 className="mt-4 max-w-2xl text-white">Who we make uniforms for</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buyers.map((b, i) => (
              <li key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:border-pylon/60 hover:bg-white/[0.07]">
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-pylon">0{i + 1}</span>
                <h3 className="mt-3 text-xl text-white">{b.title}</h3>
                <p className="mt-3 text-white/70">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Customization */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Customization</p>
            <h2 className="mt-4">Sublimation, tackle twill, embroidery and more</h2>
            <p className="mt-5 text-lg text-steel">
              Choose the decoration that suits your sport and budget. Our designers prepare a free mockup and advise on fabric, fit and finish before anything is made.
            </p>
            <Link href="/custom-uniforms/" className="btn-dark mt-8">Explore customization</Link>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {decoration.map((d, i) => (
              <li key={d.name} className={`rounded-2xl p-7 ${i % 3 === 0 ? "bg-navy text-white" : i % 3 === 1 ? "bg-pylon text-navy-deep" : "bg-chalk"}`}>
                <h3 className={`text-2xl ${i % 3 === 0 ? "text-white" : ""}`}>{d.name}</h3>
                <p className={`mt-3 ${i % 3 === 0 ? "text-white/75" : "text-navy/80"}`}>{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-chalk py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4">Common questions</h2>
            <p className="mt-4 text-lg text-steel">Quick answers for first-time buyers.</p>
            <Link href="/faq/" className="mt-6 inline-block font-bold text-pylon-dark underline-offset-4 hover:underline">See all FAQs →</Link>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      {/* Blog */}
      <section className="container pt-20 md:pt-28">
        <p className="eyebrow">Buyer guides</p>
        <h2 className="mt-4">Guides for uniform buyers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}/`} className="group block rounded-2xl border border-line p-7 transition hover:-translate-y-1 hover:border-pylon hover:shadow-xl hover:shadow-navy/5">
              <time dateTime={p.date} className="text-sm text-steel">{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
              <h3 className="mt-3 group-hover:text-pylon-dark">{p.title}</h3>
              <p className="mt-3 text-navy/75">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold group-hover:text-pylon-dark">Read guide <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
