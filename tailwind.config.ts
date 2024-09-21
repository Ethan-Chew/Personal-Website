import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
        lightgrey: "var(--lightgrey)",
        divider: "#2C2C2C",
        darkbtngrey: "#2C2C2C",
        darkbtnhover: "#1E1E1E",
      },
      fontSize: {
        "6.5xl": "4rem",
      }
    },
  },
  plugins: [],
};
export default config;
