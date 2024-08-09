import flowbite from "flowbite-react/tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: '#794904',
        secondary: '#b76f09',
        brownLight: '#d8ccbb',
        brownDark:'#492e02',
        brownGrey: '#b8aa9c',
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    stock: [defaultTheme.fontFamily.sans],
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    flowbite.plugin(),
  ],
};
