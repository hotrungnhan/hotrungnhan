/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        'poiret-one': ['Poiret One'],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwindcss-debug-screens'),
  ],
}
