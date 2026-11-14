"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ProductArt from "./ProductArt";

/**
 * Product page image area: one large square photo with thumbnails underneath.
 * With a single photo the thumbnails are hidden; with none it shows the branded artwork.
 * Several photos: swipe on touch screens, or use the left/right arrow keys once the gallery has focus.
 */
export default function ProductGallery({ images, alt, seed, label }: { images: string[]; alt: string; seed: string; label?: string }) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const go = (i: number) => setActive((i + count) % count);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (count < 2) return;
    if (e.key === "ArrowLeft") go(active - 1);
    else if (e.key === "ArrowRight") go(active + 1);
    else return;
    e.preventDefault();
  };
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || count < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    // A clear horizontal swipe changes photo; vertical movement is left to page scrolling.
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(t.clientY - start.y)) go(dx < 0 ? active + 1 : active - 1);
  };

  return (
    <div onKeyDown={onKeyDown}>
      <div
        className="group relative aspect-square touch-pan-y overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pylon"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        {...(count > 1 ? { tabIndex: 0, role: "group", "aria-roledescription": "carousel", "aria-label": `${alt}: photo ${active + 1} of ${count}. Use the arrow keys to change photo.` } : {})}
      >
        {count === 0 ? (
          <ProductArt seed={seed} label={label} />
        ) : (
          <Image
            key={images[active]}
            src={images[active]}
            alt={count > 1 ? `${alt}, view ${active + 1} of ${count}` : alt}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        )}
        {count > 1 && (
          <>
            <ArrowButton side="left" label="Previous photo" onClick={() => go(active - 1)} />
            <ArrowButton side="right" label="Next photo" onClick={() => go(active + 1)} />
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="mt-4 flex flex-wrap justify-center gap-3" aria-label="Product photos">
          {images.map((src, i) => (
            <li key={src} className="w-[calc((100%-2.25rem)/4)] sm:w-[calc((100%-3rem)/5)]">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === active ? "true" : undefined}
                className={`relative block aspect-square w-full overflow-hidden rounded-xl bg-white ring-2 transition focus:outline-none focus-visible:ring-pylon ${
                  i === active ? "ring-pylon" : "ring-white/15 opacity-70 hover:opacity-100 hover:ring-white/40"
                }`}
              >
                <Image src={src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ArrowButton({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 -translate-y-1/2 ${side === "left" ? "left-3" : "right-3"} grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition hover:bg-pylon focus:outline-none focus-visible:ring-2 focus-visible:ring-pylon md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100`}
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d={side === "left" ? "M12.5 4l-6 6 6 6" : "M7.5 4l6 6-6 6"} />
      </svg>
    </button>
  );
}
