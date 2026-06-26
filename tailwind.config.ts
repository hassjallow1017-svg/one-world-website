import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand navy — from the actual logo
        primary: {
          DEFAULT: "#1B2A87",
          50:  "#eef0fb",
          100: "#d5d9f5",
          200: "#aab3eb",
          500: "#1B2A87",
          600: "#162275",
          700: "#101a5e",
          900: "#080d30",
        },
        // Accent orange — signal arcs in logo
        accent: "#F97316",
        // Logo red — used in "FINANCIAL SERVICES" tagline and currency symbols
        brand: {
          red: "#DC2626",
          orange: "#F97316",
          amber: "#FBBF24",
          navy: "#1B2A87",
        },
        dark: {
          bg:   "#0a0f2e",
          card: "#141b4d",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "marquee":     "marquee 30s linear infinite",
        "pulse-slow":  "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
