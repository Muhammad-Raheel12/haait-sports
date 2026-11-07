"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { products } from "@/data/products";

const nav = [
  { href: "/products/", label: "Products" },
  { href: "/custom-uniforms/", label: "Customization" },
  { href: "/manufacturing/", label: "Manufacturing" },
  { href: "/how-to-order/", label: "How to order" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  // The desktop dropdown opens on hover/focus via CSS; this hides it after a pick
  // until the pointer leaves or focus re-enters, so it doesn't stay open over the new page.
  const [dropdownDismissed, setDropdownDismissed] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="container flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Home"><Logo /></Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.href === "/products/" ? (
                <li
                  key={item.href}
                  className="group relative"
                  onMouseLeave={() => setDropdownDismissed(false)}
                  onFocus={() => setDropdownDismissed(false)}
                >
                  <Link
                    href={item.href}
                    className={`block rounded px-3 py-2 font-semibold hover:text-pylon-dark ${isActive(item.href) ? "text-pylon-dark" : ""}`}
                    onClick={(e) => {
                      setDropdownDismissed(true);
                      e.currentTarget.blur();
                    }}
                  >
                    {item.label}
                  </Link>
                  <div className={`invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${dropdownDismissed ? "!invisible !opacity-0" : ""}`}>
                    <ul className="rounded-lg border border-line bg-white p-2 shadow-xl shadow-navy/10">
                      {products.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/products/${p.slug}/`}
                            className="block rounded px-3 py-2 hover:bg-chalk hover:text-pylon-dark"
                            onClick={(e) => {
                              setDropdownDismissed(true);
                              e.currentTarget.blur();
                            }}
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={`block rounded px-3 py-2 font-semibold hover:text-pylon-dark ${isActive(item.href) ? "text-pylon-dark" : ""}`}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact/" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">Get a quote</Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <ul className="container py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block border-b border-line py-3 text-lg font-semibold hover:text-pylon-dark">{item.label}</Link>
                {item.href === "/products/" && (
                  <ul className="py-2 pl-4">
                    {products.map((p) => (
                      <li key={p.slug}><Link href={`/products/${p.slug}/`} className="block py-1.5 text-steel hover:text-pylon-dark">{p.name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4"><Link href="/contact/" className="btn-primary w-full">Get a quote</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
