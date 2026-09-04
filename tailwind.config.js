/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'card-bg': '#121212',
        'light-text': '#f5f5f5',
        'red-accent': '#e50914',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
