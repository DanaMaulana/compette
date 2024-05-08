/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      sans: ['Asap', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark': '#0F1D37',
        'secondary': '#B0C3C9',
        'gold': '#F2AD5F',
        'biru-muda': '#EBFAFC',
        'biru': '#138690'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

