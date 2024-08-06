/** @type {import('tailwindcss').Config} */
const colors =require("tailwindcss/colors")
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:colors.yellow,
        'sub-color': '#999999',
        'main-color': '#333333',
        'bg-color': '#ffffff',
        'bg-color': '#323437',
        'main-color': '#e2b714',
        'caret-color': '#e2b714',
        'sub-color': '#646669',
        'sub-alt-color': '#2c2e31',
        'text-color': '#d1d0c5',
        'error-color': '#ca4754',
        'error-extra-color': '#7e2a33',
        'colorful-error-color': '#ca4754',
        'colorful-error-extra-color': '#7e2a33',
      }
    },
  },
  plugins: [],
}