const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    colors: {
      black: '#080b13',
      white: '#FFFFFF',
      gray: {
        200: '#dcdbda',
      },
    },
    extend: {
      ...defaultTheme,
      fontFamily: {
        custom: ['Gilroy-ExtraBold', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: { cursor: ['hover', 'focus'] },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
};
