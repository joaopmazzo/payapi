/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colort: {
        "primary-dark-pink": "#ba4270",
        "primary-link-water-white": "#fbfcfe",
        "secondary-san-juan-blue": "#36536b",
        "secondary-mirage-blue": "#1b262f",
        "secondary-charm-pink": "#da6d97",
        "secondary-ligth-san-juan-blue": "#6c8294",
      },
    },
  },
  plugins: [],
};
