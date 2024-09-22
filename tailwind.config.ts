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
        darkbackground: "#212121",
        background: "#f9f9f9",
        darkaccent: "#2DC8C5",
        accent: "#12918F",
        lightgrey: "#474747",
        darkdivider: "#2C2C2C",
        lightdivider: "#EAEAEA",
        darkbtngrey: "#2C2C2C",
        darkbtnhover: "#1E1E1E",
        lightbtngrey: "#EAEAEA",
        lightbtnhover: "#D0D0D0",
      },
      fontSize: {
        "6.5xl": "4rem",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
