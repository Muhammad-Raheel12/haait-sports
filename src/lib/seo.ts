import type { Metadata } from "next";
import { site } from "@/config/site";

/** Builds an absolute URL with a trailing slash (matches next.config trailingSlash). */
export const absoluteUrl = (path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${site.url}${withSlash}`;
};

const DEFAULT_OG_IMAGE = "/images/site/og-default.jpg";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path, keywords, image, type = "website", publishedTime, modifiedTime }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const img = image ?? DEFAULT_OG_IMAGE;
  // Only the default share image is known to be 1200×630; product photos are square or 4:3,
  // so for those we let social sites read the real size instead of declaring a wrong one.
  const ogImage = image ? { url: img, alt: title } : { url: img, width: 1200, height: 630, alt: title };
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      locale: "en_US",
      images: [ogImage],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}

/* ---------- JSON-LD structured data ---------- */

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: absoluteUrl("/"),
  logo: `${site.url}/images/site/logo.png`,
  description: site.description,
  foundingDate: String(site.foundingYear),
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.contact.email,
      telephone: site.contact.phone,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  sameAs: Object.values(site.social).filter(Boolean),
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: absoluteUrl("/"),
  publisher: { "@id": `${site.url}/#organization` },
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
