import Image from "next/image";
import { site } from "@/config/site";

/**
 * Brand logo (images in /public/images/site/).
 * Header: shield + name as text (the stacked logo is unreadable at header height).
 * `full` shows the complete stacked logo on its own light tile (footer).
 */
export default function Logo({ full = false }: { full?: boolean }) {
  if (full) {
    return (
      <Image src="/images/site/logo-full.jpg" alt={site.name} width={820} height={790} className="h-auto w-40 rounded-xl bg-chalk p-3" />
    );
  }
  return (
    <span className="flex items-center gap-2.5">
      {/* multiply blends the logo's off-white background into the white header */}
      <Image src="/images/site/logo-emblem.jpg" alt="" width={470} height={670} priority className="h-12 w-auto shrink-0 mix-blend-multiply" />
      <span className="font-display text-[1.6rem] font-extrabold uppercase leading-none tracking-wide text-navy">{site.name}</span>
    </span>
  );
}
