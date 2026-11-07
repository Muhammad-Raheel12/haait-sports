import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import QuoteCta from "@/components/QuoteCta";
import JsonLd from "@/components/JsonLd";
import { faqGroups } from "@/data/faqs";
import { faqLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ: Ordering Custom Team Uniforms",
  description:
    "Answers about minimum order quantity, samples, design, production time, private label, payment and worldwide shipping for custom team uniforms.",
  path: "/faq/",
  keywords: ["custom uniform faq", "uniform minimum order", "jersey sample time"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd(faqGroups.flatMap((g) => g.items))} />
      <PageHeader
        title="Frequently asked questions"
        intro="Everything buyers usually ask before placing a first order. Can’t find your answer? Message us and we’ll reply within one working day."
        crumbs={[{ name: "FAQ", path: "/faq/" }]}
      />
      <section className="container max-w-4xl space-y-16 py-16 md:py-24">
        {faqGroups.map((g) => (
          <div key={g.title}>
            <h2 className="mb-6 text-[2rem]">{g.title}</h2>
            <FaqList items={g.items} />
          </div>
        ))}
      </section>
      <QuoteCta heading="Still have a question?" />
    </>
  );
}
