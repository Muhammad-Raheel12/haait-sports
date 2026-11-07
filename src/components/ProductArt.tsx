import Image from "next/image";

/**
 * Branded jersey artwork used wherever a product photo hasn't been added yet.
 * The colorway and number are picked from `seed`, so each product looks distinct
 * but stays the same on every build.
 */
const palettes = [
  { bg: "bg-navy", stripe: "rgba(248,175,63,0.10)", shirt: "#F8AF3F", trim: "#050020", num: "#050020", label: "text-pylon" },
  { bg: "bg-pylon", stripe: "rgba(5,0,32,0.08)", shirt: "#050020", trim: "#F8AF3F", num: "#F8AF3F", label: "text-navy" },
  { bg: "bg-navy-soft", stripe: "rgba(255,255,255,0.06)", shirt: "#FFFFFF", trim: "#F8AF3F", num: "#050020", label: "text-pylon" },
] as const;

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

export function Jersey({ shirt, trim, num, number, className = "" }: { shirt: string; trim: string; num: string; number: number; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
      <path d="M62 28l24-8c4 9 9 13 14 13s10-4 14-13l24 8 34 30-20 26-14-8v104H62V76l-14 8-20-26z" fill={shirt} />
      <path d="M86 20c4 9 9 13 14 13s10-4 14-13" fill="none" stroke={trim} strokeWidth="5" />
      <path d="M40 66l14 12M160 66l-14 12" stroke={trim} strokeWidth="5" />
      <text x="100" y="138" textAnchor="middle" fill={num} fontSize="64" fontWeight="800" fontFamily="'Big Shoulders Variable', Impact, sans-serif">
        {number}
      </text>
    </svg>
  );
}

export default function ProductArt({ seed, label }: { seed: string; label?: string }) {
  const h = hash(seed);
  const p = palettes[h % palettes.length];
  return (
    <div
      className={`absolute inset-0 ${p.bg}`}
      style={{ backgroundImage: `repeating-linear-gradient(135deg, ${p.stripe} 0 14px, transparent 14px 28px)` }}
    >
      <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <Jersey shirt={p.shirt} trim={p.trim} num={p.num} number={(h % 98) + 1} className="absolute inset-0 m-auto h-[78%] w-[78%] drop-shadow-xl transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105" />
      {label && <span className={`absolute bottom-3 left-4 font-display text-sm font-extrabold uppercase tracking-[0.18em] ${p.label}`}>{label}</span>}
    </div>
  );
}

/** Real photo when there is one, otherwise the branded artwork. Parent must be `relative` with a size. */
export function ProductVisual({ image, alt, seed, label, sizes, priority = false }: { image: string | null; alt: string; seed: string; label?: string; sizes: string; priority?: boolean }) {
  if (!image) return <ProductArt seed={seed} label={label} />;
  return <Image src={image} alt={alt} fill priority={priority} sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />;
}
