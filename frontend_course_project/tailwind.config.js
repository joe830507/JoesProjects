/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        navbar: '4rem' // or whatever height you want
      }
    }
  },
  plugins: []
}
