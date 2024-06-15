/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redish: {
          DEFAULT : '#FF6969'
        },
        maroon: {
          DEFAULT : '#C80036'
        },
        darkblueish: {
          DEFAULT : '#0C1844'
        },
        whitish: {
          DEFAULT : '#FFF5E1'
        },
      },
    },
  },
  plugins: [],
}