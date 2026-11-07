/**
 * ============================================================
 *  YOUR COMPANY DETAILS — EDIT THIS FILE FIRST
 * ============================================================
 *  Everything here is used across the whole site: header, footer,
 *  contact page, page titles, structured data (JSON-LD) for Google,
 *  sitemap and robots.txt. Replace every placeholder value.
 */
export const site = {
  /** Brand name exactly as you want it to appear in Google. */
  name: "Haafit Sports",
  /** Registered company name (used in the footer and legal pages). */
  legalName: "Haafit Sports",
  /** Short line shown next to the logo and used in descriptions. */
  tagline: "Custom team uniform manufacturer & exporter",
  /** Production domain WITHOUT trailing slash. Must be correct for SEO. */
  url: "https://www.yourdomain.com",
  /** Default description for pages that don’t set their own (150–160 chars). */
  description:
    "Manufacturer and exporter of custom American football, soccer, baseball, basketball and team uniforms. Factory-direct pricing, low MOQs, worldwide shipping.",
  foundingYear: 2010,

  contact: {
    email: "sales@yourdomain.com",
    /** International format, used for tel: links. */
    phone: "+92 309 7616497",
    /** Digits only with country code, used for the WhatsApp link. */
    whatsapp: "923097616497",
    hours: "Mon–Sat, 9:00–18:00 (GMT+5)",
  },

  address: {
    street: "Khadim Ali Rd, Model Town",
    city: "Sialkot",
    region: "Punjab",
    postalCode: "51310",
    /** Full country name, used in on-page copy. */
    country: "Pakistan",
    /** Two-letter ISO code, used in structured data. */
    countryCode: "PK",
    /** Optional: paste a Google Maps "Embed a map" src URL to show a map on the contact page. */
    mapEmbedUrl: "",
  },

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  /**
   * Contact form delivery. The site is static (no server), so the form posts to
   * Web3Forms (free). Get a key at https://web3forms.com and paste it here.
   * If left empty, the form opens the visitor’s email app instead.
   */
  web3formsKey: "",

  /** Ordering facts repeated across the site. Keep them accurate. */
  ordering: {
    moq: "25 pieces per design",
    sampleTime: "7–10 working days",
    productionTime: "3–5 weeks after sample approval",
    shipping: "DHL, FedEx, UPS by air; sea freight for large orders",
    markets: ["United States", "Canada", "United Kingdom", "European Union", "Australia", "Middle East"],
  },

  /** Paste the verification codes Google Search Console / Bing give you. */
  verification: { google: "", bing: "" },
} as const;

export type Site = typeof site;
