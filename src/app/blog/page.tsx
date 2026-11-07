import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteCta from "@/components/QuoteCta";
import { posts } from "@/data/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Team Uniform Guides & Buying Advice",
  description: "Practical guides for buying custom team uniforms: decoration methods, fabrics, sizing, ordering timelines and shipping.",
  path: "/blog/",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader title="Guides for uniform buyers" intro="Practical advice from the factory floor on choosing, designing and ordering team uniforms." crumbs={[{ name: "Blog", path: "/blog/" }]} />
      <section className="container max-w-4xl py-16 md:py-24">
        <ul className="divide-y divide-line border-y border-line">
          {sorted.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}/`} className="group block py-8">
                <time dateTime={p.date} className="text-sm text-steel">{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                <h2 className="mt-2 text-[2rem] group-hover:text-pylon-dark">{p.title}</h2>
                <p className="mt-3 max-w-prose text-navy/75">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <QuoteCta />
    </>
  );
}
