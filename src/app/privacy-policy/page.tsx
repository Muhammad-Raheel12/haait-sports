import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Privacy Policy", description: `How ${site.name} collects and uses information submitted through this website.`, path: "/privacy-policy/" }),
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy policy" crumbs={[{ name: "Privacy policy", path: "/privacy-policy/" }]} />
      <article className="container prose-body py-16 md:py-20">
        <p>This policy explains what information {site.legalName} collects through this website and how it is used. Have it reviewed by a legal advisor for your markets before publishing.</p>
        <h2>Information we collect</h2>
        <p>When you send an enquiry, we receive the details you enter: your name, company, email address, country and message. We do not collect payment information through this website.</p>
        <h2>How we use it</h2>
        <p>We use your details only to reply to your enquiry, prepare quotes and process orders. We do not sell or share your information with third parties for marketing.</p>
        <h2>Form processing</h2>
        <p>Enquiry forms may be delivered through a third-party form service, which processes the submission only to forward it to us.</p>
        <h2>Your rights</h2>
        <p>You can ask us to see, correct or delete the information we hold about you by emailing {site.contact.email}.</p>
        <h2>Contact</h2>
        <p>{site.legalName}, {site.address.street}, {site.address.city}, {site.address.country}. Email: {site.contact.email}</p>
      </article>
    </>
  );
}
