import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import QuoteCta from "@/components/QuoteCta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Order Custom Uniforms: MOQ, Samples & Shipping",
  description: `How to order custom team uniforms: minimum order ${site.ordering.moq}, samples in ${site.ordering.sampleTime}, production times, payment and worldwide shipping.`,
  path: "/how-to-order/",
  keywords: ["how to order custom uniforms", "uniform MOQ", "custom jersey lead time", "uniform shipping"],
});

const steps = [
  { title: "Send your enquiry", text: "Tell us the sport, quantity, colors and deadline. Attach your logo or any reference images." },
  { title: "Receive a quote and mockup", text: "We send pricing per piece and a digital mockup, usually within one working day." },
  { title: "Approve the design", text: "Request changes until the mockup is right. Then confirm the order and send your size and name roster." },
  { title: "Approve a physical sample", text: `We produce a sample in ${site.ordering.sampleTime} and ship it to you, or send detailed photos and video if time is short.` },
  { title: "Production", text: `After sample approval and the deposit, bulk production takes ${site.ordering.productionTime}.` },
  { title: "Inspection and shipping", text: "We send photos of the finished order, you pay the balance, and we ship door-to-door with tracking." },
];

const terms = [
  { label: "Minimum order", value: `${site.ordering.moq}. Sizes, names and numbers can be mixed.` },
  { label: "Samples", value: `${site.ordering.sampleTime}. Sample cost is credited against your bulk order.` },
  { label: "Production time", value: site.ordering.productionTime },
  { label: "Payment", value: "50% deposit to start production, balance before shipping. Bank transfer (T/T) and other methods by agreement." },
  { label: "Shipping", value: `${site.ordering.shipping}. Air delivery usually takes 3–7 days.` },
  { label: "Re-orders", value: "Patterns and artwork are kept on file, so re-orders and add-on players are quick." },
];

export default function HowToOrderPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to order custom team uniforms",
          step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
        }}
      />
      <PageHeader
        title="How to order custom uniforms"
        intro="Ordering directly from our factory is simple. Here’s every step, with the minimums, timelines and terms you’ll need to plan your season."
        crumbs={[{ name: "How to order", path: "/how-to-order/" }]}
      />

      <section className="container py-16 md:py-24">
        <h2>Six steps from enquiry to delivery</h2>
        <ol className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-display text-6xl font-extrabold leading-none text-pylon">{i + 1}</span>
              <h3 className="mt-3">{s.title}</h3>
              <p className="mt-2 text-navy/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2>Order terms</h2>
            <p className="mt-4 text-lg text-steel">The essentials at a glance. Large or repeat programs may qualify for different terms.</p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {terms.map((t) => (
              <div key={t.label} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr]">
                <dt className="font-bold">{t.label}</dt>
                <dd className="text-navy/80">{t.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="max-w-prose">
          <h2>Planning for the season?</h2>
          <p className="mt-5 text-lg text-navy/80">
            Allow eight to ten weeks before your first game. That covers design, sampling, production and air shipping with a little room to spare.
            Read our <Link href="/blog/how-to-order-custom-team-uniforms/" className="font-semibold text-pylon-dark underline underline-offset-4">guide to ordering team uniforms</Link> for
            tips on artwork, rosters and import duties, or check the <Link href="/faq/" className="font-semibold text-pylon-dark underline underline-offset-4">FAQ</Link>.
          </p>
        </div>
      </section>

      <QuoteCta heading="Ready to start your order?" />
    </>
  );
}
