import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-24 md:py-32">
      <p className="font-display text-[8rem] font-extrabold leading-none text-pylon">404</p>
      <h1 className="mt-4">This page is out of bounds</h1>
      <p className="mt-4 max-w-lg text-lg text-steel">The link may be old or mistyped. Browse our uniforms or send us your enquiry directly.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/products/" className="btn-dark">Browse products</Link>
        <Link href="/contact/" className="btn-primary">Request a quote</Link>
      </div>
    </section>
  );
}
