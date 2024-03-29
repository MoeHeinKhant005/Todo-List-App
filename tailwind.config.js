/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2a9d8f',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}