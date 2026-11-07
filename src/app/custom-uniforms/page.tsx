import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteCta from "@/components/QuoteCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Uniform Customization: Sublimation, Twill & Embroidery",
  description:
    "Compare uniform decoration methods: dye sublimation, tackle twill, embroidery, screen printing and heat transfer. Free design mockups and private-label options.",
  path: "/custom-uniforms/",
  keywords: ["sublimated uniforms", "tackle twill jerseys", "custom jersey decoration", "private label sportswear"],
});

const methods = [
  {
    name: "Dye sublimation",
    best: "Bold multi-color designs, soccer, basketball, volleyball, esports",
    text: "Ink is bonded into polyester fibers with heat, so the design becomes part of the fabric. It can’t crack, peel or fade, and there’s no extra cost for more colors, gradients or sponsor logos.",
  },
  {
    name: "Tackle twill",
    best: "Classic football, baseball and hockey numbers and lettering",
    text: "Numbers and letters are cut from layered twill fabric and stitched onto the garment. It gives the raised, premium look of college and professional uniforms.",
  },
  {
    name: "Embroidery",
    best: "Crests, logos on caps, jackets and polo shirts",
    text: "Logos are stitched directly with polyester thread. Durable, textured and ideal for smaller logos and outerwear.",
  },
  {
    name: "Screen printing",
    best: "Large runs with one to four colors, practice wear, fan tees",
    text: "Plastisol or water-based inks are printed layer by layer. Cost-effective for high quantities with simple designs.",
  },
  {
    name: "Heat transfer",
    best: "Individual names and numbers, small add-on orders",
    text: "Pre-cut vinyl or printed transfers are pressed on. Fast and flexible for personalization and late roster changes.",
  },
];

const options = [
  { title: "Fit and cut", text: "Youth, men’s, women’s, slim and position-specific cuts, graded to your size chart if you have one." },
  { title: "Collars and trims", text: "V-neck, crew, Y-neck, lace-up and button plackets, with contrast piping and binding." },
  { title: "Fabrics", text: "Mesh, interlock, dazzle, stretch knit and recycled polyester, in weights for every climate." },
  { title: "Private label", text: "Your woven neck labels, hang tags, care labels, polybags and cartons." },
];

export default function CustomUniformsPage() {
  return (
    <>
      <PageHeader
        title="Uniform customization options"
        intro="Every uniform is built from scratch to your design. Here’s how to choose decoration, fabrics and branding, and what each option is best for."
        crumbs={[{ name: "Customization", path: "/custom-uniforms/" }]}
      />

      <section className="container py-16 md:py-24">
        <h2>Decoration methods compared</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-navy">
                <th scope="col" className="w-48 py-3 pr-6 font-display text-xl">Method</th>
                <th scope="col" className="py-3 pr-6 font-display text-xl">How it works</th>
                <th scope="col" className="w-72 py-3 font-display text-xl">Best for</th>
              </tr>
            </thead>
            <tbody>
              {methods.map((m) => (
                <tr key={m.name} className="border-b border-line align-top">
                  <th scope="row" className="py-5 pr-6 font-bold">{m.name}</th>
                  <td className="py-5 pr-6 text-navy/80">{m.text}</td>
                  <td className="py-5 text-navy/80">{m.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-prose text-navy/80">
          Not sure which to choose? Many teams combine methods, for example a sublimated jersey body with tackle twill numbers.
          Our designers will recommend the best option for your sport and budget when you request a quote.
        </p>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="container">
          <h2>Everything else you can customize</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {options.map((o) => (
              <div key={o.title} className="border-t-2 border-navy pt-5">
                <h3>{o.title}</h3>
                <p className="mt-3 text-navy/80">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="max-w-prose">
          <h2>Free design and mockups</h2>
          <p className="mt-5 text-lg text-navy/80">
            Send a logo, a sketch, a photo of a uniform you like, or just your team colors. Our in-house designers create a digital mockup
            showing front, back and sleeves, and revise it until you’re happy. There’s no charge for design work on confirmed orders.
          </p>
        </div>
      </section>

      <QuoteCta heading="Start with a free mockup" />
    </>
  );
}
