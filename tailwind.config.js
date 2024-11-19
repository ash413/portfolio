/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for OS-level dark mode detection
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: '#D8EFD3',
        greenish: '#95D2B3',
        darkgreen: '#55AD9B',
        whitish: '#F1F8E8',
        darkwhitish: '#1C2833' // Custom color for dark mode background
      },
    },
  },
  plugins: [],
}