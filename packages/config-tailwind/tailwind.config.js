/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    'apps/**/*.{js,ts,jsx,tsx}',
    'packages/**/*.{js,ts,jsx,tsx}',
    'app/**/*.{js,ts,jsx,tsx}',
    'pages/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities, addBase, config }) {
      addUtilities(UTILITY_STYLES);
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
