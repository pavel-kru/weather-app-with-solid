const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: { 1000: '1000' },
    },
    colors: {
      ...colors,
      'main-bg': '#49e6ff1c',
      'day-card-bg': '#ffffff',
    },
    fontFamily: { Roboto: 'Roboto' },
    hueRotate: { '-30': `-30deg` },
    skew: { '-12': `-12deg` },
    backgroundImage: {
      clouds: "url('/src/assets/clouds.jpg')",
      'sun-path': "url('/src/assets/day_path.svg')",
    },
  },
  plugins: [],
};
