/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './apps/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './packages/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './index.html',
  ],
  theme: {
    // fontSize: {
    //   xs: '1rem',
    //   sm: '1.25rem',
    //   base: '1.5rem',
    //   lg: '2rem',
    //   xl: '2.2em',
    //   '2xl': '2.5rem',
    //   '3xl': '2.7rem',
    //   '4xl': '3rem',
    //   '5xl': '3.4rem',
    //   '6xl': '4rem',
    // },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities, addBase, config }) {
      addUtilities(UTILITY_STYLES);
      // base styles
      // https://v1.tailwindcss.com/docs/plugins#adding-base-styles
      // addBase({ h1: config("theme.fontSize.4xl") })
      // media-query
      // https://v1.tailwindcss.com/docs/plugins#referencing-the-user-s-config
      // gradient color (default variants)
      // https://v1.tailwindcss.com/docs/plugins#providing-default-options
      // add compnents media-query
      // https://v1.tailwindcss.com/docs/plugins#css-in-js-syntax
    }),
  ],
};

const UTILITY_STYLES = {
  '.global-layout': {
    'grid-column-start': '2',
    'grid-column-end': '5',
    'grid-row-start': '2',
    'grid-row-end': '4',
    'background-color': '#ebf8fc', // bg-slate-50
    overflow: 'hidden',
    padding: '3rem',
    height: '100%',
  },
  '.link': {},
  '.btn-common': {},
  '.text-clickable': {},
};
