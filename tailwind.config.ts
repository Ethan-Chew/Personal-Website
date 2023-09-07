import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "darkmode-nav": "#171922",
      "darkmode-page": "#1b202b",
      "darkmode-text": "#EAEAEA",
      "darkmode-btnbg-hover": "#E2E8F0",
      "darkmode-btnbg": "#333740",
      

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
