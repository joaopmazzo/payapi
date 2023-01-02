/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    color: {
      "mazzo-color": "#f42",
      primary: {
        "dark-pink": "#ba4270",
        "link-water-white": "#fbfcfe",
      },
      secondary: {
        "san-juan-blue": "#36536b",
        "mirage-blue": "#1b262f",
        "charm-pink": "#da6d97",
        "ligth-san-juan-blue": "#6c8294",
      },
    },
    extend: {
      fontFamily: {
        "public-sans": ['"Public Sans"', "sans-serif"],
        "dm-serif-display": ['"DM Serif Display"', "sans-serif"],
      },
    },
  },
  plugins: [],
};