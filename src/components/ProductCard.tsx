import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductVisual } from "./ProductArt";

export default function ProductCard({ product, image, styles, priority = false }: { product: Product; image: string | null; styles?: number; priority?: boolean }) {
  return (
    <Link
      href={`/products/${product.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-pylon hover:shadow-2xl hover:shadow-navy/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductVisual
          image={image}
          alt={`Custom ${product.name} made by our factory`}
          seed={product.slug}
          label={product.short}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
        />
        {styles ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy shadow">
            {styles} styles
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.5rem] group-hover:text-pylon-dark">{product.name}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] text-steel">{product.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-pylon-dark">
          Explore range
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
