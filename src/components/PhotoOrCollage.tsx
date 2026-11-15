import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { productItems } from "@/data/product-items";
import { itemImage, sitePhoto } from "@/lib/images";

/** A style to show in the collage: category slug + item slug from product-items.ts. */
export type CollagePick = { category: string; item: string };

type Props = {
  /** Site photo name without extension, looked up in /public/images/site/ (e.g. "team"). */
  photo: string;
  /** Alt text for the real photo once it exists. */
  alt: string;
  /** Box classes for the real photo (aspect ratio, rounding). */
  className: string;
  /** Hand-picked styles shown until the photo exists. Pick varied colors and sports. */
  picks: CollagePick[];
  /** Positioning classes shared by both versions (e.g. sticky on desktop). */
  wrapperClassName?: string;
  sizes: string;
};

/**
 * Shows a real site photo when one has been added to /public/images/site/, otherwise a grid
 * of hand-picked uniform designs. Dropping in team.jpg or factory.jpg switches the page to the
 * photo automatically, with no code change.
 */
export default function PhotoOrCollage({ photo, alt, className, picks, wrapperClassName = "", sizes }: Props) {
  const src = sitePhoto(photo);
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className} ${wrapperClassName}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  // Skip any pick whose style or card photo no longer exists, so a renamed item can't break the page.
  const cards = picks.flatMap(({ category, item }) => {
    const style = productItems[category]?.find((it) => it.slug === item);
    const image = style ? itemImage(category, item) : null;
    return style && image ? [{ href: `/products/${category}/${item}/`, image, name: style.name }] : [];
  });

  return (
    <figure className={wrapperClassName}>
      <div className="grid grid-cols-2 gap-3">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-chalk">
            <Image src={c.image} alt={`Custom ${c.name}`} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
          </Link>
        ))}
      </div>
      {/* The grid shows a few sports; the link makes sure visitors know about the rest. */}
      <figcaption className="mt-3 text-sm text-steel">
        Some of the uniforms we make ·{" "}
        <Link href="/products/" className="font-semibold text-navy underline-offset-4 hover:text-pylon-dark hover:underline">
          See all {products.length} sports <span aria-hidden="true">→</span>
        </Link>
      </figcaption>
    </figure>
  );
}
