/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#DECEC5",
        secondary: "#BF6262",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "water-color": "#F1B9AD",
      },
      backgroundImage: {
        wave: "url('/images/water.png')",
        halfwave: "url('/images/waterhalf.png')",
      },
      backgroundPosition: {
        "halfwave-bottom": "center bottom", // Adjusted to bottom
      },
    },
  },
  plugins: [],
};
