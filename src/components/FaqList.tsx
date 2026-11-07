/** Accessible accordion built on <details>, so it works without JavaScript. */
export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-navy text-sm leading-none transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-prose text-navy/80">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
