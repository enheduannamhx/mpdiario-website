/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        midnight: '#1a1c2c',
        navy: '#2d3142',
        gold: '#c9a227',
        cream: '#f8f5f0',
        slate: '#4a4e69',
        'warm-gray': '#9a8c98',
      },
    },
  },
  plugins: [],
}
