/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      gold: "#cba456",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        test: "linear-gradient(180deg, #FFDD96 0%, #CB9A40 100%);",
      },
      boxShadow: {
        "3xl": "0 0 30px rgba(136, 136, 136, 0.15)",
        "4xl": "0px 0px 80px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
