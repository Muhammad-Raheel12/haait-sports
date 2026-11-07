import Breadcrumbs from "./Breadcrumbs";

type Props = {
  title: string;
  intro?: string;
  eyebrow?: string;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
};

/** Dark title band used at the top of every inner page. Holds the page’s single H1. */
export default function PageHeader({ title, intro, eyebrow, crumbs, children }: Props) {
  return (
    <header className="relative overflow-hidden bg-navy text-white">
      <FieldLines />
      <Glow />
      <div className="container relative py-14 md:py-20">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="eyebrow-dark mt-6">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-4" : "mt-6"} max-w-4xl text-white`}>{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/80">{intro}</p>}
        {children}
      </div>
    </header>
  );
}

/** Yard-line pattern in the background: a quiet nod to the field. */
export function FieldLines() {
  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-[0.07]" preserveAspectRatio="none">
      <defs>
        <pattern id="yard" width="120" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 0V40" stroke="white" strokeWidth="2" />
          <path d="M60 0v6M60 34v6" stroke="white" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#yard)" />
    </svg>
  );
}

/** Soft gold stadium-light glow for dark bands. */
export function Glow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-pylon/15 blur-[120px]" />
      <div className="absolute -bottom-48 left-1/4 h-[22rem] w-[22rem] rounded-full bg-[#3B2DBA]/30 blur-[120px]" />
    </div>
  );
}
