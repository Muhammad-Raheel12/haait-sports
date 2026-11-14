"use client";

import { useState, useSyncExternalStore } from "react";
import { site } from "@/config/site";
import { products } from "@/data/products";

type Status = "idle" | "sending" | "sent" | "error";

// The query string doesn't change while the form is on screen, so there is nothing to subscribe to.
const noSubscription = () => () => {};
const productFromUrl = () => new URLSearchParams(window.location.search).get("product") ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  // Quote buttons link here with ?product=…, which preselects (or adds) that product.
  // Read from the URL in the browser only; the static HTML is built with no product chosen.
  const fromUrl = useSyncExternalStore(noSubscription, productFromUrl, () => "");
  const [chosen, setChosen] = useState<string | null>(null);
  const product = chosen ?? fromUrl;
  const categoryNames = products.map((p) => p.name);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No form service configured: hand the enquiry to the visitor's email app.
    if (!site.web3formsKey) {
      const body = Array.from(data.entries())
        .filter(([k]) => k !== "botcheck")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    data.append("access_key", site.web3formsKey);
    data.append("subject", `New quote request – ${site.name}`);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg border-2 border-turf bg-turf/5 p-8">
        <h2 className="text-3xl">Quote request sent</h2>
        <p className="mt-3">Thanks. Our sales team will reply to your email within one working day with pricing and next steps.</p>
      </div>
    );
  }

  const field = "mt-1.5 w-full rounded-md border border-line bg-white px-4 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";
  const label = "block text-sm font-semibold";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className={label}>Your name</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="company" className={label}>Company or team <span className="font-normal text-steel">(optional)</span></label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="country" className={label}>Country</label>
        <input id="country" name="country" required autoComplete="country-name" className={field} />
      </div>
      <div>
        <label htmlFor="product" className={label}>Product</label>
        <select id="product" name="product" className={field} value={product} onChange={(e) => setChosen(e.target.value)}>
          <option value="" disabled>Choose a product</option>
          {product && !categoryNames.includes(product) && product !== "Other / several products" && <option>{product}</option>}
          {categoryNames.map((name) => <option key={name}>{name}</option>)}
          <option>Other / several products</option>
        </select>
      </div>
      <div>
        <label htmlFor="quantity" className={label}>Approximate quantity</label>
        <input id="quantity" name="quantity" inputMode="numeric" placeholder={`Minimum ${site.ordering.moq}`} className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Tell us about your order</label>
        <textarea id="message" name="message" rows={5} required placeholder="Sport, colors, decoration, deadline, and a link to your logo or design if you have one." className={field} />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send quote request"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">
            The request didn’t go through. Check your connection and try again, or email {site.contact.email}.
          </p>
        )}
      </div>
    </form>
  );
}
