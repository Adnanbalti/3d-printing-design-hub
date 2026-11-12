import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#050505", panel: "#0D0E11", brand: "#FF641F", head: "#F8F8F8", body: "#C5CAD3", light: "#F5F4F0", line: "#303238" },
    fontFamily: { display: ["var(--font-head)", "sans-serif"], sans: ["var(--font-inter)", "sans-serif"] },
  } },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
