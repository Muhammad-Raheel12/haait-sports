import { site } from "@/config/site";

export type FaqGroup = { title: string; items: { q: string; a: string }[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Ordering",
    items: [
      {
        q: "What is your minimum order quantity (MOQ)?",
        a: `Our minimum is ${site.ordering.moq}. You can mix sizes, names and numbers within that quantity.`,
      },
      {
        q: "How do I get a price quote?",
        a: "Send your design, quantities and sport through the contact form or WhatsApp. We reply with a detailed quote, usually within one working day.",
      },
      {
        q: "Do you work with distributors and team dealers?",
        a: "Yes. Most of our customers are team dealers, distributors and sportswear brands who resell under their own name. We offer tiered pricing for repeat volume.",
      },
      {
        q: "Can you produce under our own brand (private label)?",
        a: "Yes. We add your woven labels, hang tags, care labels and packaging, and never put our own name on your products.",
      },
    ],
  },
  {
    title: "Design and samples",
    items: [
      {
        q: "Do you provide design services?",
        a: "Our in-house designers prepare free digital mockups from your logo and color ideas, and revise them until you approve.",
      },
      {
        q: "How long does a sample take?",
        a: `Physical samples take ${site.ordering.sampleTime}, plus shipping. Bulk production starts only after you approve the sample.`,
      },
      {
        q: "What file formats do you need for logos?",
        a: "Vector files (AI, EPS, PDF or SVG) give the best results. If you only have a JPG or PNG, our designers can redraw it.",
      },
    ],
  },
  {
    title: "Production and shipping",
    items: [
      {
        q: "How long does production take?",
        a: `Production takes ${site.ordering.productionTime}, depending on quantity and decoration. Rush schedules are possible for some orders.`,
      },
      {
        q: "Which countries do you ship to?",
        a: `We ship worldwide, most often to ${site.ordering.markets.join(", ")}. We use ${site.ordering.shipping}.`,
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfer (T/T), and other methods by agreement. Usually 50% is paid to start production and the balance before shipping.",
      },
      {
        q: "What if there is a problem with my order?",
        a: "Every order is inspected before packing. If anything arrives that doesn’t match the approved sample, contact us with photos and we will remake or credit the affected pieces.",
      },
    ],
  },
];
