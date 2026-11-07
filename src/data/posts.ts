/**
 * Blog articles. Each becomes /blog/[slug]/.
 * Publishing helpful articles regularly is one of the most reliable ways to
 * grow organic traffic. Target one clear search question per article.
 */
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  updated?: string;
  keywords: string[];
  sections: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "sublimation-vs-tackle-twill",
    title: "Sublimation vs tackle twill: which is right for your team uniforms?",
    description:
      "Compare sublimated and tackle twill uniforms on cost, durability, weight and look, and learn when to combine both on the same jersey.",
    date: "2026-10-01",
    keywords: ["sublimation vs tackle twill", "sublimated jerseys", "tackle twill jerseys"],
    sections: [
      {
        paragraphs: [
          "The two most common ways to decorate team uniforms are dye sublimation and tackle twill. Both produce professional results, but they suit different teams, budgets and sports. Here’s how to choose.",
        ],
      },
      {
        heading: "How sublimation works",
        paragraphs: [
          "Your design is printed onto transfer paper, then heat and pressure turn the ink into a gas that bonds with the polyester fibers. The color becomes part of the fabric, so it can’t crack, peel or fade in the wash.",
          "Because the whole garment is printed, there is no extra cost for more colors, gradients, patterns or sponsor logos.",
        ],
      },
      {
        heading: "How tackle twill works",
        paragraphs: [
          "Numbers, names and logos are cut from layers of polyester twill fabric and stitched onto the jersey with a zigzag edge. It’s the traditional look of college and professional football, baseball and hockey.",
          "Twill adds weight and cost with every layer and color, but it gives a raised, premium feel that many programs want for game uniforms.",
        ],
      },
      {
        heading: "Quick comparison",
        paragraphs: [],
        list: [
          "Cost: sublimation is usually cheaper, especially for multi-color designs.",
          "Weight: sublimated jerseys are lighter and more breathable.",
          "Durability: both last for seasons; sublimation never peels, twill can be repaired.",
          "Look: sublimation suits bold modern designs; twill suits classic uniforms.",
          "Lead time: sublimation is typically faster to produce.",
        ],
      },
      {
        heading: "Combining both",
        paragraphs: [
          "Many teams choose a sublimated jersey body with tackle twill numbers and names. You get unlimited design freedom and the classic stitched look where it’s most visible. Ask for a sample of each so your players can compare in person.",
        ],
      },
    ],
  },
  {
    slug: "how-to-order-custom-team-uniforms",
    title: "How to order custom team uniforms from a manufacturer",
    description:
      "A step-by-step guide to ordering custom uniforms directly from a factory: preparing artwork, rosters, samples, lead times and shipping.",
    date: "2026-10-15",
    keywords: ["order custom team uniforms", "uniform manufacturer", "custom jersey MOQ"],
    sections: [
      {
        paragraphs: [
          "Buying uniforms directly from a manufacturer costs less than buying through several middlemen, but it takes a little more planning. Follow these steps and your order will arrive on time and exactly as designed.",
        ],
      },
      {
        heading: "1. Start early",
        paragraphs: [
          "Allow eight to ten weeks before your first game: about two weeks for design and sampling, three to five weeks for production, and up to a week for air shipping.",
        ],
      },
      {
        heading: "2. Prepare your artwork",
        paragraphs: [
          "Collect your logo in vector format (AI, EPS, PDF or SVG) and your team color codes. If you don’t have vector files, the manufacturer’s designers can usually redraw your logo.",
        ],
      },
      {
        heading: "3. Build your roster",
        paragraphs: ["Create a simple spreadsheet with one row per player:"],
        list: ["Player name as it should appear", "Number", "Size for each garment", "Any special notes, such as a captain’s patch"],
      },
      {
        heading: "4. Approve a sample",
        paragraphs: [
          "Always approve a physical sample before bulk production. Check fit, color, print sharpness and stitching. Small changes are easy at this stage and expensive later.",
        ],
      },
      {
        heading: "5. Plan shipping and duties",
        paragraphs: [
          "Air courier is fastest for most team orders. For large or repeat orders, sea freight lowers the cost. Check your country’s import duty rules for apparel so the landed cost has no surprises.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
