import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteCta from "@/components/QuoteCta";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Manufacturing Process & Quality Control",
  description:
    "See how we manufacture custom team uniforms in-house: design, cutting, sublimation, stitching, inspection and packing, with quality checks at every stage.",
  path: "/manufacturing/",
  keywords: ["uniform manufacturing process", "sportswear factory", "apparel quality control"],
});

const stages = [
  { title: "Pattern and design", text: "Designs are prepared in-house and patterns are graded for every size in your order." },
  { title: "Fabric inspection", text: "Incoming fabric is checked for weight, shade and defects before it reaches the cutting table." },
  { title: "Cutting", text: "Panels are cut in layers with every piece labeled to its size and player." },
  { title: "Sublimation and decoration", text: "Printing, twill, embroidery and screen printing are all done on our own machines." },
  { title: "Stitching", text: "Skilled operators assemble each garment on flatlock, overlock and twin-needle machines." },
  { title: "Final inspection", text: "Every piece is measured and checked against the approved sample." },
  { title: "Packing", text: "Garments are folded, bagged and packed per player or per size, with packing lists." },
];

const checks = [
  "Fabric shade checked against your approved color standard",
  "Measurements checked against the size chart at final inspection",
  "Stitching, seam strength and decoration inspected on every piece",
  "Names and numbers verified against your roster before packing",
  "Photos of finished goods sent to you before shipping",
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHeader
        title="Manufacturing and quality control"
        intro={`Every stage of production happens in our own facility in ${site.address.city}, ${site.address.country}. Here’s how your uniforms are made.`}
        crumbs={[{ name: "Manufacturing", path: "/manufacturing/" }]}
      />

      <section className="container grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-chalk lg:sticky lg:top-24 lg:self-start">
          <Image src="/images/site/factory.jpg" alt="Stitching line at our uniform factory" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2>How your order is made</h2>
          <ol className="mt-10 space-y-0">
            {stages.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-6">
                <span className="font-display text-4xl font-extrabold leading-none text-pylon">{i + 1}</span>
                <div>
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-2 text-navy/80">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-white">Quality checks on every order</h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              Quality problems are cheapest to fix before shipping. That’s why inspection is built into production rather than added at the end.
            </p>
          </div>
          <ul className="space-y-4">
            {checks.map((c) => (
              <li key={c} className="flex gap-4 border-b border-white/15 pb-4">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-pylon" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 10.5l4 4 8-9" /></svg>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="max-w-prose">
          <h2>Responsible production</h2>
          <p className="mt-5 text-lg text-navy/80">
            We pay fair wages, follow local labor law, and keep a safe, well-lit workplace. Recycled polyester fabrics are available on request,
            and we use water-free sublimation printing for most designs. Buyers are welcome to audit our facility or visit in person.
          </p>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
