import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", lg: "2rem" }, screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        // Brand palette taken from the Haafit Sports logo (public/logo.jpeg).
        navy: { DEFAULT: "#050020", deep: "#03000F", soft: "#1D1740" },
        chalk: "#F7F7F7",
        // pylon = logo gold; dark is a deeper amber that passes contrast for text on white.
        pylon: { DEFAULT: "#F8AF3F", dark: "#8A5800" },
        turf: "#1E6B47",
        steel: "#5B6676",
        line: "#D9DEE5",
      },
      fontFamily: {
        display: ['"Big Shoulders Variable"', '"Arial Narrow"', "Impact", "sans-serif"],
        sans: ['"Public Sans Variable"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};
export default config;
