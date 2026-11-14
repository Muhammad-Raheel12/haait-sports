import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import QuoteCta from "@/components/QuoteCta";
import JsonLd from "@/components/JsonLd";
import { getPost, posts } from "@/data/posts";
import { site } from "@/config/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return pageMetadata({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}/`,
    keywords: p.keywords,
    type: "article",
    publishedTime: p.date,
    modifiedTime: p.updated ?? p.date,
  });
}

export default async function PostPage({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.updated ?? p.date,
          mainEntityOfPage: absoluteUrl(`/blog/${p.slug}/`),
          author: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
      <PageHeader title={p.title} crumbs={[{ name: "Blog", path: "/blog/" }, { name: p.title, path: `/blog/${p.slug}/` }]}>
        <p className="mt-5 text-white/70">
          Published <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time> by {site.name}
        </p>
      </PageHeader>
      <article className="container prose-body py-16 md:py-20">
        {p.sections.map((s, i) => (
          <section key={i}>
            {s.heading && <h2>{s.heading}</h2>}
            {s.paragraphs.map((t) => <p key={t}>{t}</p>)}
            {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
          </section>
        ))}
        <p className="!mt-12 border-t border-line pt-8">
          Have a question about your own order? <Link href="/contact/" className="font-semibold text-pylon-dark underline underline-offset-4">Ask our team</Link> and get an answer within one working day.
        </p>
      </article>
      <QuoteCta />
    </>
  );
}
