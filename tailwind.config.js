const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        treetech: {
          50: '#ecfff5',
          100: '#d3ffea',
          200: '#aaffd6',
          300: '#69ffb7',
          400: '#21ff91',
          500: '#00f271',
          600: '#00ca5a',
          700: '#009e49',
          800: '#008242',
          900: '#026536',
          950: '#00391b',
        },
        dark: {
          50: '#949AA7',
          100: '#343848',
          150: '#2C313C',
          200: '#24272E',
          250: '#1B1D23'
        }
      },
      dropShadow: {
        'green': '6px 5px 4px rgba(1, 203, 95, 0.12)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
