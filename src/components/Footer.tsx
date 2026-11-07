import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/config/site";
import { products } from "@/data/products";

const company = [
  { href: "/about/", label: "About us" },
  { href: "/manufacturing/", label: "Manufacturing & quality" },
  { href: "/custom-uniforms/", label: "Customization options" },
  { href: "/how-to-order/", label: "How to order" },
  { href: "/faq/", label: "FAQ" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo full />
          <p className="mt-4 max-w-xs">{site.tagline}. Supplying teams, dealers and brands in {site.ordering.markets.length}+ markets since {site.foundingYear}.</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-4">
              {socials.map(([name, url]) => (
                <li key={name}><a href={url} rel="noopener" className="capitalize hover:text-pylon">{name}</a></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="font-sans text-base font-bold text-white">Products</h2>
          <ul className="mt-4 space-y-2">
            {products.map((p) => (
              <li key={p.slug}><Link href={`/products/${p.slug}/`} className="hover:text-pylon">{p.short}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-base font-bold text-white">Company</h2>
          <ul className="mt-4 space-y-2">
            {company.map((c) => (
              <li key={c.href}><Link href={c.href} className="hover:text-pylon">{c.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-base font-bold text-white">Get in touch</h2>
          <address className="mt-4 space-y-2 not-italic">
            <p>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}<br />{site.address.country}</p>
            <p><a href={`mailto:${site.contact.email}`} className="hover:text-pylon">{site.contact.email}</a></p>
            <p><a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-pylon">{site.contact.phone}</a></p>
            <p className="text-sm text-white/55">{site.contact.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <Link href="/privacy-policy/" className="hover:text-pylon">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
