import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us & Request a Quote",
  description: `Request a quote for custom team uniforms. Email us, message us on WhatsApp, or send your design through our form for a reply within one working day.`,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Request a quote"
        intro="Tell us what you need and we’ll reply with pricing and a free mockup, usually within one working day."
        crumbs={[{ name: "Contact", path: "/contact/" }]}
      />
      <section className="container grid gap-14 py-16 md:py-24 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <ContactForm />
        </div>
        <aside className="space-y-8">
          <div>
            <h2 className="text-2xl">Email</h2>
            <a href={`mailto:${site.contact.email}`} className="mt-1 block text-lg text-pylon-dark underline underline-offset-4">{site.contact.email}</a>
          </div>
          <div>
            <h2 className="text-2xl">Phone and WhatsApp</h2>
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="mt-1 block text-lg hover:text-pylon-dark">{site.contact.phone}</a>
            <a href={`https://wa.me/${site.contact.whatsapp}`} rel="noopener" className="mt-1 block font-semibold text-turf underline underline-offset-4 hover:text-pylon-dark">Message us on WhatsApp</a>
          </div>
          <div>
            <h2 className="text-2xl">Factory address</h2>
            <address className="mt-1 not-italic text-navy/80">
              {site.legalName}<br />{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}<br />{site.address.country}
            </address>
          </div>
          <div>
            <h2 className="text-2xl">Office hours</h2>
            <p className="mt-1 text-navy/80">{site.contact.hours}</p>
          </div>
        </aside>
      </section>
      {site.address.mapEmbedUrl && (
        <section aria-label="Map" className="container pb-20">
          <iframe
            src={site.address.mapEmbedUrl}
            title={`Map showing ${site.name}`}
            className="h-96 w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      )}
    </>
  );
}
