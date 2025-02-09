import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#1a1a1a',
        darkAccent: '#2d2d2d',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to right, #FF8A2B, #ffd700)',
        'gradient-dark': 'linear-gradient(to right, #2d2d2d, #1a1a1a)',
      }
    },
  },
  plugins: [],
}

export default config