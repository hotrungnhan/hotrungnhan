/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poiret-one': ['Poiret One'],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/typography'),
  ],
}
