import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** Next.js recommended rules plus Core Web Vitals checks (replaces the old .eslintrc.json). */
const config = [
  ...nextCoreWebVitals,
  { ignores: [".next/", "out/", "node_modules/", "image-sources/", "next-env.d.ts"] },
];

export default config;
