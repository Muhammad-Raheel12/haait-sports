/**
 * Product categories. Each entry becomes a page at /products/[slug]/.
 * To add a category: copy an entry, change the slug, and add an image at
 * /public/images/products/[slug].jpg (1600×1200 recommended).
 */
export type Product = {
  slug: string;
  name: string;
  /** Short label for menus and cards. */
  short: string;
  /** <title> – keep under ~60 characters. Brand name is appended automatically. */
  metaTitle: string;
  /** Meta description – 140–160 characters, include the main keyword once. */
  metaDescription: string;
  keywords: string[];
  /** One-sentence summary for cards. */
  summary: string;
  intro: string[];
  includes: string[];
  fabrics: { name: string; detail: string }[];
  decoration: string[];
  features: { title: string; detail: string }[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "american-football-uniforms",
    name: "American Football Uniforms",
    short: "American football",
    metaTitle: "Custom American Football Uniforms Manufacturer",
    metaDescription:
      "Factory-direct custom American football uniforms: game jerseys, practice jerseys and football pants in sublimation or tackle twill. Low MOQ, worldwide shipping.",
    keywords: [
      "custom american football uniforms",
      "football jersey manufacturer",
      "tackle twill football jerseys",
      "sublimated football uniforms",
      "football pants manufacturer",
    ],
    summary: "Game and practice jerseys, integrated or traditional pants, built for contact.",
    intro: [
      "American football jerseys take more abuse than any other team garment, so we build them differently. Shoulders are cut to sit over pads without riding up, side panels use four-way stretch so linemen can’t be grabbed easily, and every stress point is double-needle stitched.",
      "We make full uniform sets for high school programs, youth leagues, semi-pro and club teams, and for brands that sell under their own label. Choose fully sublimated designs with unlimited colors, or classic tackle twill numbers and names sewn on by hand.",
    ],
    includes: [
      "Game jerseys (home and away)",
      "Practice jerseys and reversible practice jerseys",
      "Football pants with belt loops or integrated pad pockets",
      "7-on-7 and flag football sets",
      "Matching socks, compression shirts and sideline jackets",
    ],
    fabrics: [
      { name: "Pro-cut spandex body", detail: "Stretch panels that lock tight over shoulder pads." },
      { name: "Heavy dazzle", detail: "The traditional shiny game-jersey finish, colorfast and durable." },
      { name: "Durable mesh", detail: "Open mesh for practice jerseys and hot-weather games." },
      { name: "Four-way stretch knit pants", detail: "Recovery-rated fabric that holds pads in place." },
    ],
    decoration: ["Full sublimation", "Tackle twill (single, double or triple layer)", "Screen printing", "Embroidered patches", "Heat-applied numbers"],
    features: [
      { title: "Cut for pads", detail: "Patterns graded for shoulder pad clearance by position: skill, linebacker and lineman cuts." },
      { title: "Reinforced seams", detail: "Bartacks at the sleeve, neck and side seams where jerseys tear in play." },
      { title: "Rule-ready numbers", detail: "Number sizes set to common league requirements so jerseys pass inspection." },
    ],
    specs: [
      { label: "Sizes", value: "Youth XS – Adult 5XL" },
      { label: "Fits", value: "Lineman, skill, women’s and youth cuts" },
      { label: "Decoration", value: "Sublimation, tackle twill, screen print" },
      { label: "Branding", value: "Your logo on labels, tags and packaging" },
    ],
    faqs: [
      {
        q: "Can you match our existing team colors?",
        a: "Yes. Send Pantone codes or a physical swatch and we dye and print to match, then confirm the color on your sample before production.",
      },
      {
        q: "Do you make football pants with integrated pads?",
        a: "We make pants with integrated pad pockets as well as traditional pants with belt loops. Pads themselves can be sourced on request.",
      },
      {
        q: "What is better for football jerseys, sublimation or tackle twill?",
        a: "Sublimation allows unlimited colors and graphics at no extra cost and never peels. Tackle twill gives the classic stitched look and feel. Many teams use sublimated bodies with twill numbers.",
      },
    ],
  },
  {
    slug: "soccer-uniforms",
    name: "Soccer Uniforms",
    short: "Soccer",
    metaTitle: "Custom Soccer Uniforms & Football Kits Manufacturer",
    metaDescription:
      "Custom soccer uniforms and football kits made to order: sublimated jerseys, shorts, socks and goalkeeper kits for clubs, academies and brands. Low MOQ.",
    keywords: [
      "custom soccer uniforms",
      "soccer jersey manufacturer",
      "football kit manufacturer",
      "sublimated soccer jerseys",
      "goalkeeper kits",
    ],
    summary: "Lightweight sublimated kits for clubs, academies and tournaments.",
    intro: [
      "A good soccer kit should feel like nothing after ninety minutes. We use lightweight, quick-drying knits with laser-cut ventilation where players sweat most, so jerseys stay light in the second half.",
      "Clubs, academies, schools and tournament organizers order complete kits from us: jersey, shorts and socks, plus goalkeeper sets and training wear in the same design so the whole squad matches.",
    ],
    includes: [
      "Match jerseys, short and long sleeve",
      "Shorts with drawcord or elastic waist",
      "Socks with custom bands",
      "Goalkeeper jerseys, padded pants and shorts",
      "Training tops, pinnies and warm-up jackets",
    ],
    fabrics: [
      { name: "Micro-interlock", detail: "Smooth, light and ideal for vivid sublimation." },
      { name: "Bird-eye mesh", detail: "Breathable texture for hot climates and summer leagues." },
      { name: "Recycled polyester", detail: "Made from post-consumer bottles, same performance." },
    ],
    decoration: ["Full sublimation", "Heat-transfer names and numbers", "Silicone badges", "Embroidered crests"],
    features: [
      { title: "Unlimited design", detail: "Sublimation prints any pattern, gradient or sponsor logo at no extra cost per color." },
      { title: "Player personalization", detail: "Individual names and numbers included, sorted and packed per player." },
      { title: "Matching team wear", detail: "Training and travel wear produced in the same run so colors match exactly." },
    ],
    specs: [
      { label: "Sizes", value: "Youth 4 – Adult 4XL" },
      { label: "Fits", value: "Regular, slim and women’s cut" },
      { label: "Weight", value: "From 120 gsm" },
      { label: "Branding", value: "Woven labels, neck prints, custom bags" },
    ],
    faqs: [
      {
        q: "Can we mix sizes and player names in one order?",
        a: "Yes. Send a roster with size, name and number per player and every garment is personalized and labeled individually.",
      },
      {
        q: "Do you offer eco-friendly soccer kits?",
        a: "We offer recycled polyester fabrics that perform the same as standard polyester. Ask for swatches when you request a quote.",
      },
      {
        q: "Can sponsors’ logos be added?",
        a: "Sponsor logos can be sublimated anywhere on the kit at no extra cost, or applied as heat transfers or silicone badges.",
      },
    ],
  },
  {
    slug: "baseball-uniforms",
    name: "Baseball Uniforms",
    short: "Baseball",
    metaTitle: "Custom Baseball Uniforms & Jerseys Manufacturer",
    metaDescription:
      "Custom baseball uniforms made to order: full-button and two-button jerseys, baseball pants and caps in sublimation or tackle twill. Factory-direct pricing.",
    keywords: [
      "custom baseball uniforms",
      "baseball jersey manufacturer",
      "custom baseball pants",
      "tackle twill baseball jerseys",
      "sublimated baseball jerseys",
    ],
    summary: "Button-front jerseys, pinstripes, pants and matching caps.",
    intro: [
      "Baseball has the most traditional look of any team sport, and we respect it: clean button plackets, crisp pinstripes that line up at the seams, and stitched script lettering that looks right from the stands.",
      "We also make modern fully sublimated jerseys for travel ball and tournaments, where bold graphics and lighter fabrics make more sense than classic flannel looks.",
    ],
    includes: [
      "Full-button and two-button jerseys",
      "Pullover and sleeveless jerseys",
      "Baseball pants: knicker, open-bottom and piped",
      "Belts, socks and caps",
      "Batting practice jerseys and cage jackets",
    ],
    fabrics: [
      { name: "Pro-weight double knit", detail: "Classic look for pants and traditional jerseys." },
      { name: "Performance interlock", detail: "Light and smooth for sublimated designs." },
      { name: "Pinstripe knits", detail: "Woven or printed stripes aligned across panels." },
    ],
    decoration: ["Tackle twill script lettering", "Full sublimation", "Embroidery", "Screen printing"],
    features: [
      { title: "Aligned pinstripes", detail: "Patterns cut so stripes meet cleanly at the placket and side seams." },
      { title: "Reinforced pant knees", detail: "Double-layer knees for sliding, on request." },
      { title: "Cap-to-sock matching", detail: "Caps, belts and socks dyed to the same team colors." },
    ],
    specs: [
      { label: "Sizes", value: "Youth XS – Adult 5XL" },
      { label: "Jersey styles", value: "Full-button, two-button, pullover" },
      { label: "Pant styles", value: "Knicker, open-bottom, piped" },
      { label: "Decoration", value: "Twill, sublimation, embroidery" },
    ],
    faqs: [
      {
        q: "Do you make softball uniforms too?",
        a: "Yes. Softball jerseys, pants and shorts are made on the same lines, with women’s cuts available.",
      },
      {
        q: "Can you produce script lettering from our logo?",
        a: "Send your artwork and we digitize it for tackle twill or embroidery, then show you a sewn-out sample before production.",
      },
      {
        q: "Do you make matching caps?",
        a: "We produce fitted and adjustable caps with embroidered logos in the same colors as your uniforms.",
      },
    ],
  },
  {
    slug: "basketball-uniforms",
    name: "Basketball Uniforms",
    short: "Basketball",
    metaTitle: "Custom Basketball Uniforms & Jerseys Manufacturer",
    metaDescription:
      "Custom basketball uniforms made to order: reversible jerseys, shorts and shooting shirts in sublimation or tackle twill. Low MOQ and worldwide delivery.",
    keywords: [
      "custom basketball uniforms",
      "basketball jersey manufacturer",
      "reversible basketball jerseys",
      "sublimated basketball uniforms",
      "basketball shorts manufacturer",
    ],
    summary: "Single and reversible sets, shorts and shooting shirts.",
    intro: [
      "Basketball uniforms are seen up close, under bright lights, so finish quality matters. We use smooth knits that take sublimation sharply, bound armholes that lie flat, and waistbands that hold without twisting.",
      "Order single-sided game sets, reversible jerseys for leagues and camps, or full team packages with shooting shirts and warm-ups for schools, clubs and AAU programs.",
    ],
    includes: [
      "Game jerseys and shorts",
      "Reversible jerseys and reversible sets",
      "Shooting shirts and warm-up tops",
      "Women’s and youth cuts",
      "Matching socks and headbands",
    ],
    fabrics: [
      { name: "Performance mesh", detail: "Breathable and light for indoor play." },
      { name: "Dazzle", detail: "Classic sheen for traditional uniforms." },
      { name: "Interlock knit", detail: "Smooth surface for sharp sublimated graphics." },
    ],
    decoration: ["Full sublimation", "Tackle twill", "Heat-applied numbers", "Embroidered logos"],
    features: [
      { title: "Reversible construction", detail: "Two finished faces with clean seams on both sides." },
      { title: "Flat-bound trim", detail: "Neck and armhole binding that doesn’t roll or chafe." },
      { title: "Secure waistbands", detail: "Wide elastic with internal drawcord, tested for twist." },
    ],
    specs: [
      { label: "Sizes", value: "Youth XS – Adult 5XL" },
      { label: "Styles", value: "Single, reversible, women’s cut" },
      { label: "Short lengths", value: "7″ – 11″ inseam" },
      { label: "Decoration", value: "Sublimation, twill, heat transfer" },
    ],
    faqs: [
      {
        q: "Are reversible jerseys more expensive?",
        a: "Slightly, because they use two layers of fabric and more sewing. They replace a separate practice set, so many leagues save overall.",
      },
      {
        q: "Can you make different short lengths?",
        a: "Yes. Choose any inseam from 7 to 11 inches, and you can mix lengths within one order.",
      },
      {
        q: "Do you supply blank uniforms for dealers?",
        a: "We supply blank and semi-finished stock in core colors for team dealers who decorate locally. Ask us about stock programs.",
      },
    ],
  },
  {
    slug: "ice-hockey-jerseys",
    name: "Ice Hockey Jerseys & Socks",
    short: "Ice hockey",
    metaTitle: "Custom Ice Hockey Jerseys & Socks Manufacturer",
    metaDescription:
      "Custom ice hockey jerseys and socks made to order with fight straps, reinforced elbows and sublimated or twill graphics. For clubs, leagues and brands.",
    keywords: [
      "custom hockey jerseys",
      "ice hockey jersey manufacturer",
      "sublimated hockey jerseys",
      "custom hockey socks",
    ],
    summary: "Game jerseys with fight straps, practice jerseys and matching socks.",
    intro: [
      "Hockey jerseys are cut big to fit over pads and built to take contact, so we use heavier knits, reinforced elbows and shoulders, and fight straps sewn into the back on request.",
      "We supply clubs, beer leagues, junior programs and hockey brands with game jerseys, practice jerseys and knit or sublimated socks in matching colors.",
    ],
    includes: [
      "Game jerseys with optional fight strap",
      "Practice and reversible practice jerseys",
      "Knit and sublimated hockey socks",
      "Goalie-cut jerseys",
    ],
    fabrics: [
      { name: "Pro-weight air knit", detail: "Durable and breathable for game jerseys." },
      { name: "Heavy mesh", detail: "Ventilated back and underarm panels." },
    ],
    decoration: ["Full sublimation", "Tackle twill crests", "Embroidered patches", "Captain letters"],
    features: [
      { title: "Fight strap", detail: "Sewn-in strap with snap closure for leagues that require it." },
      { title: "Reinforced elbows", detail: "Double layers where jerseys wear through on the boards." },
      { title: "Goalie cut", detail: "Larger patterns for goalies, made in the same design." },
    ],
    specs: [
      { label: "Sizes", value: "Youth S – Adult 4XL, goalie cut" },
      { label: "Options", value: "Fight strap, lace-up neck" },
      { label: "Socks", value: "Knit or sublimated" },
      { label: "Decoration", value: "Sublimation, twill, embroidery" },
    ],
    faqs: [
      {
        q: "Can you make lace-up collar jerseys?",
        a: "Yes, lace-up and V-neck collars are both available, along with standard crew necks.",
      },
      {
        q: "Do hockey socks come in matching designs?",
        a: "We sublimate socks to match any jersey design, or knit them in classic stripe patterns.",
      },
    ],
  },
  {
    slug: "volleyball-uniforms",
    name: "Volleyball Uniforms",
    short: "Volleyball",
    metaTitle: "Custom Volleyball Uniforms & Jerseys Manufacturer",
    metaDescription:
      "Custom volleyball uniforms made to order: sublimated jerseys, libero jerseys, shorts and spandex for clubs, schools and beach teams. Low MOQ, fast samples.",
    keywords: ["custom volleyball uniforms", "volleyball jersey manufacturer", "libero jerseys", "sublimated volleyball jerseys"],
    summary: "Indoor and beach sets, including contrasting libero jerseys.",
    intro: [
      "Volleyball players need jerseys that move with every jump and dive. We use lightweight stretch knits with a close athletic fit that stays in place without restricting the arms.",
      "Clubs and schools order full sets with contrasting libero jerseys in the same design, plus shorts, spandex and warm-up tops.",
    ],
    includes: ["Short-sleeve, cap-sleeve and sleeveless jerseys", "Libero jerseys in contrasting colors", "Shorts and spandex", "Beach volleyball tops and bottoms"],
    fabrics: [
      { name: "Stretch interlock", detail: "Close fit with full freedom of movement." },
      { name: "Lightweight mesh", detail: "For hot gyms and beach play." },
    ],
    decoration: ["Full sublimation", "Heat-transfer numbers", "Screen printing"],
    features: [
      { title: "Libero matching", detail: "Libero jerseys produced in the same run with inverted colors." },
      { title: "Women’s and men’s patterns", detail: "Separate patterns, not resized unisex jerseys." },
    ],
    specs: [
      { label: "Sizes", value: "Youth XS – Adult 4XL" },
      { label: "Styles", value: "Indoor, beach, libero" },
      { label: "Decoration", value: "Sublimation, heat transfer" },
    ],
    faqs: [
      {
        q: "Can libero jerseys be ordered in small quantities?",
        a: "Yes. Libero jerseys can be added to a team order in any quantity, even one or two pieces.",
      },
    ],
  },
  {
    slug: "rugby-uniforms",
    name: "Rugby Uniforms",
    short: "Rugby",
    metaTitle: "Custom Rugby Jerseys & Kits Manufacturer",
    metaDescription:
      "Custom rugby jerseys, shorts and socks made to order. Tight-fit and classic cuts with reinforced seams and sublimated designs for clubs and schools.",
    keywords: ["custom rugby jerseys", "rugby kit manufacturer", "sublimated rugby jerseys", "rugby shorts manufacturer"],
    summary: "Tight-fit and classic jerseys built to survive the ruck.",
    intro: [
      "Rugby jerseys are pulled, grabbed and dragged, so seam strength comes first. We use triple-stitched seams, heavy-gauge knits and tight-fit patterns that give opponents less to hold.",
      "We supply clubs, schools, sevens teams and touring sides with full kits, training wear and supporter jerseys in the same design.",
    ],
    includes: ["Match jerseys, tight-fit or classic", "Rugby shorts with reinforced seams", "Socks with custom bands", "Training tops and supporter jerseys"],
    fabrics: [
      { name: "Heavy-gauge knit", detail: "Tear-resistant for contact play." },
      { name: "Compression stretch", detail: "Tight-fit jerseys that are hard to grip." },
    ],
    decoration: ["Full sublimation", "Embroidered crests", "Heat-transfer numbers"],
    features: [
      { title: "Triple-stitched seams", detail: "Extra stitching on shoulders and side seams." },
      { title: "Grip-resistant fabric", detail: "Smooth, tight knit that reduces grab points." },
    ],
    specs: [
      { label: "Sizes", value: "Youth 6 – Adult 5XL" },
      { label: "Fits", value: "Tight-fit, classic" },
      { label: "Decoration", value: "Sublimation, embroidery" },
    ],
    faqs: [
      {
        q: "Can we order supporter jerseys in the same design?",
        a: "Yes. Supporter jerseys are made in a relaxed fit with the same design, often in a lighter fabric for retail sale.",
      },
    ],
  },
  {
    slug: "team-warm-ups-tracksuits",
    name: "Team Warm-Ups & Tracksuits",
    short: "Warm-ups & tracksuits",
    metaTitle: "Custom Team Warm-Ups & Tracksuits Manufacturer",
    metaDescription:
      "Custom team warm-ups, tracksuits, hoodies and sideline jackets made to order in your colors. Matching team wear for clubs, schools and brands.",
    keywords: ["custom team tracksuits", "team warm-ups manufacturer", "custom sideline jackets", "team hoodies manufacturer"],
    summary: "Tracksuits, hoodies and sideline jackets that match your kit.",
    intro: [
      "Team wear is what players wear to and from the game, and it’s often what fans see first. We make tracksuits, hoodies, quarter-zips and sideline jackets in the same colors as your uniforms.",
      "Order team wear alongside your uniforms or on its own. It’s also popular with brands building a retail line of club and fan merchandise.",
    ],
    includes: ["Full-zip tracksuits", "Hoodies and quarter-zips", "Sideline and stadium jackets", "Training shorts and tees"],
    fabrics: [
      { name: "Tricot", detail: "Classic tracksuit fabric with a smooth face." },
      { name: "Fleece-back poly", detail: "Warm, light and easy to sublimate." },
      { name: "Woven taslan", detail: "Wind- and water-resistant for jackets." },
    ],
    decoration: ["Embroidery", "Sublimation", "Screen printing", "Woven patches"],
    features: [
      { title: "Color-matched to uniforms", detail: "Dyed in the same lots as your kit." },
      { title: "Personalization", detail: "Player initials or numbers on each piece." },
    ],
    specs: [
      { label: "Sizes", value: "Youth XS – Adult 5XL" },
      { label: "Decoration", value: "Embroidery, sublimation, print" },
    ],
    faqs: [
      {
        q: "Can team wear be ordered without uniforms?",
        a: "Yes. Team wear can be ordered on its own with the same minimums as uniforms.",
      },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
