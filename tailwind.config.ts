import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      "darkmode-nav": "#171922",
      "darkmode-page": "#1b202b",
      "darkmode-text": "#EAEAEA",
      "darkmode-btnbg-hover": "#4A5568",
      "darkmode-btnbg": "#333740",
      "darkmode-bg": "#262A34",
      "darkmode-projbtn": "#1B1E23",

      "lightmode-nav": "#EEF2F6",
      "lightmode-page": "#FFFFFF",
      "lightmode-text": "#1A1F29",
      "lightmode-btnbg-hover": "#E2E8F0",
      "lightmode-btnbg": "#EEF2F6"
    }
  },
  plugins: [],
}
export default config
