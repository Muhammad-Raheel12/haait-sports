import Link from "next/link";
import { site } from "@/config/site";
import { FieldLines, Glow } from "./PageHeader";

/** Closing call-to-action band, repeated at the end of most pages. */
export default function QuoteCta({ heading = "Tell us about your team order", product }: { heading?: string; product?: string }) {
  const quoteHref = product ? `/contact/?product=${encodeURIComponent(product)}` : "/contact/";
  const waText = product ? `Hi ${site.name}, I’d like a quote for ${product}.` : `Hi ${site.name}, I’d like a quote for custom uniforms.`;
  return (
    <section className="container py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-white md:px-14 md:py-16">
        <FieldLines />
        <Glow />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="eyebrow-dark">Free quote · Free mockup</p>
            <h2 className="mt-4 text-white">{heading}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Send your sport, quantities and design ideas. You’ll get a detailed quote and a free mockup, usually within one working day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href={quoteHref} className="btn-primary">Request a quote</Link>
            <a href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(waText)}`} className="btn-outline text-white" rel="noopener">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
