import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteCta from "@/components/QuoteCta";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `About Us: Sports Uniform Manufacturer Since ${site.foundingYear}`,
  description: `${site.name} has manufactured and exported custom team uniforms since ${site.foundingYear}. Learn about our factory, our team and the buyers we work with worldwide.`,
  path: "/about/",
  keywords: ["sports uniform manufacturer", "about sportswear exporter", "team uniform factory"],
});

const values = [
  { title: "Straight answers", text: "Clear prices, realistic deadlines, and a quick reply when you ask a question." },
  { title: "Consistency", text: "The tenth re-order should match the first. We keep patterns, colors and artwork on file." },
  { title: "Confidentiality", text: "Your designs are yours. We never sell, show or reuse a customer’s artwork." },
];

export default function AboutPage() {
  const years = new Date().getFullYear() - site.foundingYear;
  return (
    <>
      <PageHeader
        title={`About ${site.name}`}
        intro={`A family of cutters, printers, stitchers and designers making team uniforms in ${site.address.country} for more than ${years} years.`}
        crumbs={[{ name: "About", path: "/about/" }]}
      />

      <section className="container grid gap-14 py-16 md:py-24 lg:grid-cols-2">
        <div className="prose-body">
          <h2 className="!mt-0">Our story</h2>
          <p>
            {site.name} started in {site.foundingYear} as a small stitching unit making jerseys for local clubs. Today we’re a full-service
            manufacturer and exporter of custom sports uniforms, with design, printing, decoration and stitching all in one facility.
          </p>
          <p>
            We make uniforms for American football, soccer, baseball, basketball, ice hockey and volleyball, along with team warm-ups and
            training wear. Our customers are team dealers, distributors, sportswear brands, clubs and schools in {site.ordering.markets.join(", ")}.
          </p>
          <p>
            We’ve grown by doing a few things consistently: answering quickly, matching colors accurately, and delivering when we say we will.
            Most of our business comes from repeat customers and their referrals.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-chalk lg:mt-2">
          <Image src="/images/site/team.jpg" alt={`The ${site.name} team at our factory`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="container">
          <h2>What you can expect from us</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-navy pt-5">
                <h3>{v.title}</h3>
                <p className="mt-3 text-navy/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2>Company information</h2>
        <dl className="mt-8 grid max-w-3xl divide-y divide-line border-y border-line">
          {[
            ["Registered name", site.legalName],
            ["Business type", "Manufacturer and exporter"],
            ["Established", String(site.foundingYear)],
            ["Location", `${site.address.city}, ${site.address.country}`],
            ["Main markets", site.ordering.markets.join(", ")],
            ["Minimum order", site.ordering.moq],
          ].map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr]">
              <dt className="font-bold">{k}</dt>
              <dd className="text-navy/80">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <QuoteCta heading="Let’s make your next uniforms" />
    </>
  );
}
