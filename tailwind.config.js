module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      lineHeight: {
        12: '3rem',
        13: '3.5rem',
        14: '4rem',
      },
    },
    zIndex: {
      1030: 1030,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
