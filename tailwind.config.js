import { n7BorderColors, n7Colors } from './src/colors/index.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        n7: n7Colors,
      },
      borderColor: n7BorderColors,
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
