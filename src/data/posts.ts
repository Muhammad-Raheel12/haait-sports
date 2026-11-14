import { site } from "@/config/site";

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
  {
    slug: "team-uniform-fabrics-explained",
    title: "Team uniform fabrics: mesh vs interlock vs dazzle",
    description:
      "Which fabric should your team uniforms use? Compare mesh, interlock, dazzle, stretch knit and recycled polyester on comfort, durability and print quality.",
    date: "2026-11-14",
    keywords: ["uniform fabric types", "jersey fabric", "mesh vs interlock", "dazzle fabric", "sublimation fabric"],
    sections: [
      {
        paragraphs: [
          "Two jerseys can share the same design and still feel completely different on the field. The difference is the fabric. Almost every modern team uniform is made from polyester, but the way that polyester is knitted changes how it breathes, stretches, takes a print and survives a season. Here is what each common option is good for.",
        ],
      },
      {
        heading: "Why polyester, almost always",
        paragraphs: [
          "Polyester dries fast, keeps its shape after hundreds of washes and doesn’t shrink like cotton. It is also the only fiber dye sublimation bonds with, so any uniform with an all-over printed design has to be polyester. The choice that matters is the knit and the weight.",
        ],
      },
      {
        heading: "Mesh: maximum airflow",
        paragraphs: [
          "Mesh has small open holes knitted into the fabric. It is the coolest option, which is why it is used for football practice jerseys, basketball, side panels and underarm inserts on hot-weather kits.",
          "The trade-off is print detail: very fine lines and small text can break up over the holes. For detailed designs, use mesh only in panels and a smoother knit on the front and back.",
        ],
      },
      {
        heading: "Interlock: the best surface for printing",
        paragraphs: [
          "Interlock is a tight, smooth double knit with a soft, almost matte face. It gives the sharpest sublimated prints, so it is the usual choice for soccer, volleyball and any design with gradients, photos or small sponsor logos. It is slightly warmer than mesh, so lighter weights are used for summer sports.",
        ],
      },
      {
        heading: "Dazzle: the classic sheen",
        paragraphs: [
          "Dazzle has a shiny, slightly ribbed surface that catches stadium lights. It is the traditional look for American football and basketball uniforms, and it pairs well with tackle twill numbers. It is tougher than mesh but less breathable, so it is often combined with mesh panels.",
        ],
      },
      {
        heading: "Stretch knit: fit that moves",
        paragraphs: [
          "Stretch knits blend polyester with spandex so the garment moves with the player. They are used for football pants, volleyball sets, compression pieces and fitted women’s cuts, anywhere a close fit matters more than airflow.",
        ],
      },
      {
        heading: "Recycled polyester",
        paragraphs: [
          "Recycled polyester performs like standard polyester and takes sublimation the same way. If your club or brand has sustainability goals, ask for it at the quote stage, because availability can depend on the knit and color you choose.",
        ],
      },
      {
        heading: "Quick guide by sport",
        paragraphs: [],
        list: [
          "American football: dazzle or mesh body, stretch knit pants.",
          "Soccer: lightweight interlock for sharp prints, mesh panels for hot climates.",
          "Basketball: mesh or dazzle, often reversible for practice.",
          "Baseball: interlock or mesh with button-front construction.",
          "Ice hockey: heavier mesh or interlock that stands up to contact.",
          "Volleyball: stretch knit or light interlock for a fitted cut.",
        ],
      },
      {
        heading: "Ask for fabric swatches with your sample",
        paragraphs: [
          "Photos can’t show weight, stretch or how a fabric feels against skin. Ask your manufacturer to send swatches with the physical sample, and let a few players try the sample on before you approve bulk production.",
        ],
      },
    ],
  },
  {
    slug: "how-to-collect-team-uniform-sizes",
    title: "How to collect team uniform sizes (and avoid costly reorders)",
    description:
      "A practical system for collecting player sizes for custom team uniforms: size charts, try-on sessions, youth and women’s cuts, rosters and spares.",
    date: "2026-11-14",
    keywords: ["team uniform sizing", "uniform size chart", "jersey sizing guide", "team roster sizes"],
    sections: [
      {
        paragraphs: [
          "Wrong sizes are the most common reason a custom uniform order goes badly. Because every jersey is printed or stitched with a name and number, a size mistake can’t simply be swapped from stock; the piece has to be made again. A little organisation before you order avoids almost all of it.",
        ],
      },
      {
        heading: "1. Use the manufacturer’s size chart, not a store’s",
        paragraphs: [
          "Sizes are not standard between brands. A large from one factory can fit like a medium from another. Ask for the exact size chart of the style you are ordering, with chest width, body length and, for pants and shorts, waist and inseam.",
        ],
      },
      {
        heading: "2. Measure, don’t guess",
        paragraphs: [
          "Ask players to measure a jersey that fits them well while it lies flat: armpit to armpit for chest width, and the top of the shoulder to the hem for length. Comparing a garment to the chart is more reliable than measuring the body, and much more reliable than asking for a usual size.",
        ],
      },
      {
        heading: "3. Hold a try-on session if you can",
        paragraphs: [
          "For larger teams, ask whether a size set is available: one sample in each size. Players try them on at practice and you record the result. It takes an hour and removes most of the guesswork.",
        ],
      },
      {
        heading: "4. Get the cut right as well as the size",
        paragraphs: ["Many styles come in more than one cut. Confirm for each player:"],
        list: [
          "Youth or adult sizing (youth sizes are not just smaller adult sizes).",
          "Men’s or women’s cut, which differ in shoulder width, waist and length.",
          "Position-specific cuts where they exist, such as lineman and skill cuts in football.",
          "Short or pant length preferences, such as inseam for basketball shorts.",
        ],
      },
      {
        heading: "5. Put it all in one roster",
        paragraphs: [
          "Use a single spreadsheet with one row per player: name as it should be printed, number, cut, and a size for every garment in the set. Double-check spellings and duplicate numbers before sending it. One clear file is much safer than sizes spread across emails and chat messages.",
        ],
      },
      {
        heading: "6. Order a few spares",
        paragraphs: [
          `Add a few blank or numbered spares in the most common sizes for new players, growth spurts and damage during the season. Sizes, names and numbers can be mixed freely within the minimum order of ${site.ordering.moq}, so spares rarely change the price much, and they are far cheaper than a separate small reorder later.`,
        ],
      },
    ],
  },
  {
    slug: "private-label-sportswear-for-dealers-and-brands",
    title: "Private label team uniforms: a guide for dealers and brands",
    description:
      "How team dealers and sportswear brands work with a uniform factory under their own label: branding, samples, pricing, quality control and repeat orders.",
    date: "2026-11-14",
    keywords: ["private label sportswear", "private label team uniforms", "uniform manufacturer for dealers", "sportswear OEM"],
    sections: [
      {
        paragraphs: [
          "Many of the team uniforms sold by local dealers and sportswear brands are made by independent factories and sold under the dealer’s own name. This is private label manufacturing. Done well, it lets a small brand offer custom uniforms in every major sport without owning a factory. Here is how the relationship usually works and what to check.",
        ],
      },
      {
        heading: "What private label covers",
        paragraphs: ["The factory makes the garments, and everything the end customer sees carries your brand:"],
        list: [
          "Woven neck labels or printed neck labels with your logo",
          "Hang tags and care labels",
          "Branded polybags and cartons",
          "No factory branding anywhere on the product",
        ],
      },
      {
        heading: "Start with a product range, not a single order",
        paragraphs: [
          "Decide which sports and styles you want to offer, then sample them as a set. A consistent range, with the same fabrics, fit and finishing quality across sports, is what makes a private label brand feel established. Many dealers start with their two or three best-selling sports and add more once the first orders go well.",
        ],
      },
      {
        heading: "Samples are your quality standard",
        paragraphs: [
          `Approve a physical sample for each style before you sell it. Samples typically take ${site.ordering.sampleTime}. Keep an approved sample of every style: it becomes the reference the factory matches on every future order, and the standard you can point to if anything is ever off.`,
        ],
      },
      {
        heading: "How pricing usually works",
        paragraphs: [
          "Factory prices depend on the style, fabric, decoration method and quantity. Ask for tiered pricing, where the unit price falls as your annual or per-order volume grows. Payment is commonly split, with a deposit to start production and the balance before shipping, so build that into your cash flow.",
        ],
      },
      {
        heading: "Plan around lead times",
        paragraphs: [
          `Bulk production typically takes ${site.ordering.productionTime}, plus shipping. Team sports are seasonal, so the dealers who do best place orders well before each season starts and keep the factory informed about expected volumes.`,
        ],
      },
      {
        heading: "Questions to ask a potential factory",
        paragraphs: [],
        list: [
          "Is everything made in-house, or are parts subcontracted?",
          "Can you match my existing size chart?",
          "How is each order inspected before packing?",
          "What happens if pieces don’t match the approved sample?",
          "Can you ship directly to my customers when needed?",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
