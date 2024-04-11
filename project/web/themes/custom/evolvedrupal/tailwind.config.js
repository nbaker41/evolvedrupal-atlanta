/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,components}/**/*.{js,twig}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': '"Roboto Slab", serif'
      }
    },
  },
  plugins: [],
}

