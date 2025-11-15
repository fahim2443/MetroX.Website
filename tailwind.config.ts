import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans Bengali", "system-ui", "sans-serif"],
      },
      colors: {
        metro: {
          primary: "#1c5cff",
          secondary: "#ffbe0b",
          dark: "#050c1a",
          light: "#f5f8ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
