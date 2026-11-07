import Link from "next/link";
import type { ProductItem } from "@/data/product-items";
import { ProductVisual } from "./ProductArt";

export default function ProductItemCard({ item, category, image }: { item: ProductItem; category: string; image: string | null }) {
  return (
    <Link
      href={`/products/${category}/${item.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-pylon hover:shadow-2xl hover:shadow-navy/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductVisual image={image} alt={`Custom ${item.name}`} seed={`${category}/${item.slug}`} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[1.3rem] group-hover:text-pylon-dark">{item.name}</h3>
        <p className="mt-1.5 flex-1 text-[0.92rem] text-steel">{item.detail}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-pylon-dark">
          View details
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
