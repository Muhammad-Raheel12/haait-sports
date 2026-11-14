# Sports uniform manufacturer website (Next.js 14, static export)

A fast, SEO-ready static website for a custom team-uniform manufacturer and exporter.
Built with Next.js 14 App Router, TypeScript and Tailwind CSS. `npm run build` outputs plain HTML to `/out`.

## 1. Run it locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # creates the static site in /out
npm start          # preview the built /out folder
```

## 2. Make it yours (in this order)

1. **`src/config/site.ts`** – company name, domain, email, phone, WhatsApp, address, MOQ, lead times, social links.
   Everything on the site (titles, footer, contact page, structured data, sitemap) reads from here.
2. **Images** – replace the placeholder JPGs in `public/images/` with real photos, keeping the same file names:
   - `public/images/site/team.jpg` (1600×1200, About page), `factory.jpg` (1200×1500, Manufacturing page)
   - `public/images/site/og-default.jpg` (1200×630) – shown when links are shared on social media
   - `public/images/site/logo.png` (square, 512×512) – used by Google for your organization
   - `public/images/products/<product-slug>.jpg` – category tile, one per product (front view)
   - `public/images/products/<product-slug>/<item-slug>.jpg` – style card (front view)
   - `public/images/products/<product-slug>/<item-slug>/1.jpg, 2.jpg …` – product page gallery (square)
   Static export does not optimize images for you. After adding product photos (any .jpg/.png, any size), run `npm run optimize-images`: it converts them to WebP and deletes the originals, and fits tiles (1200×900) and cards (800×600) to 4:3 with the garment centred. Keep your original photos outside `public/` (this repo uses `image-sources/`).
3. **Logo** – edit `src/components/Logo.tsx` to use your logo file.
4. **Colors** – edit the palette in `tailwind.config.ts`.
5. **Content** – products: `src/data/products.ts`; FAQs: `src/data/faqs.ts`; blog: `src/data/posts.ts`.
   Review every factual claim (founding story, factory details, ethical-production statements, payment terms) and make sure it’s true for your company.
6. **Contact form** – get a free access key at https://web3forms.com and paste it into `web3formsKey`. Until then, the form opens the visitor’s email app.

## 3. Deploy

Upload the contents of `/out` to any static host:
- **Vercel / Netlify / Cloudflare Pages**: connect the repo, build command `npm run build`, output directory `out`.
- **cPanel / shared hosting**: run `npm run build` locally and upload the contents of `out/` to `public_html/`.

## 4. SEO checklist after launch

- Set the real domain in `site.url` **before** building (canonical URLs, sitemap and Open Graph depend on it).
- Add the site to **Google Search Console** and **Bing Webmaster Tools**, paste their verification codes into `site.verification`, rebuild, then submit `https://yourdomain.com/sitemap.xml`.
- Create a **Google Business Profile** for the factory using the exact same name, address and phone as the site.
- Publish a new helpful article in `src/data/posts.ts` every 2–4 weeks targeting one buyer question each (e.g. "football jersey sizing chart", "how long do sublimated jerseys last").
- List the business on B2B directories your buyers use and link back to the site; quality backlinks are the biggest ranking factor you control after content.
- Replace placeholder photos with real factory and product photos; original images help both trust and image search.

## What’s built in

- Unique title, description, canonical URL, Open Graph and Twitter tags on every page
- JSON-LD structured data: Organization, WebSite, BreadcrumbList, FAQPage, Service, HowTo, Article
- Auto-generated `sitemap.xml`, `robots.txt` and web manifest
- Self-hosted fonts (no Google Fonts request), minimal JavaScript, semantic HTML, skip link, keyboard-friendly menus, reduced-motion support
- Floating WhatsApp button and quote form for B2B leads

## Project structure

```
src/
  app/                 pages (App Router) + sitemap.ts, robots.ts, manifest.ts
  components/          Header, Footer, ContactForm, ProductCard, FaqList, PageHeader, ...
  config/site.ts       ← your company details
  data/                products, FAQs, blog posts
  lib/seo.ts           metadata + structured data helpers
public/images/         replace placeholders with real photos
```
