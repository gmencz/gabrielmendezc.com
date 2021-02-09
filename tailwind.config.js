const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./app/**/*.ts",
    "./app/**/*.mdx",
    "./app/**/*.md",
    "./remix.config.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "500px",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
