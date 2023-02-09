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
      backgroundImage: {
        "cicle-patter": "url(bg-pattern-circle.svg)",
      },
      backgroundPosition: {
        "footer-cicle-patter-position": "140% 20%",
        "home-main-cicle-patter-position": "115% -10rem",
        "pricing-main-cicle-patter-position": "120% -38rem",
        "about-cicle-patter-position": "-70% center",
      },
      backgroundSize: {
        "pricing-main-cicle": "55rem",
        "about-cicle": "54rem",
      },
      dropShadow: {
        "schedule-demo-shadow": "10px 10px 25px -10px rgba(54, 83, 107, 0.25)",
      },
    },
  },
  plugins: [],
};
