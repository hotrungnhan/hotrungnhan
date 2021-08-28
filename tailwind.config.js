module.exports = {
  important: false,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '0 4px 30px rgb(0 0 0 / 50%)',
      },
      inset: {
        '-1/5': '-20%',
        '-1/6': '-16.67%',
        '-1/7': '-14.28%',
        '-1/8': '-10.25%',
        '1/5': '20%',
        '1/6': '16.67%',
        '1/7': '14.28%',
        '1/8': '10.25%',
      },
      width: {
        'fit-content': 'fit-content',
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '384': '94rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
