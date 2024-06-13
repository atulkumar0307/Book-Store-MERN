/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      borderWidth: {
        '0.5': '.5px',
        '74':'74px',
        '82':'82px'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}