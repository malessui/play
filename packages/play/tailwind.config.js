const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        highlight: {
          remove: "#1b0204",
          add: "#132d03",
          line: "#0d2f4a",
        },
        blue: {
          light: "#56CCF2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
