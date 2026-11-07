/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a fully static site in /out that can be hosted anywhere.
  output: "export",
  // Every URL ends in "/" so static hosts serve /about/index.html cleanly.
  trailingSlash: true,
  // Image optimization needs a server; for a static export images are served as-is.
  // Keep your images compressed (WebP/JPG under ~250 KB) before adding them.
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
