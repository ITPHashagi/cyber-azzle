/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      textColor: {
        OrangeRed: "rgb(254 51 10 / var(--tw-text-opacity))",
      },
      backgroundColor: {
        OrangRed: "rgb(254 51 10 / var(--tw-text-opacity))",
      },
      borderColor: {
        OrangeRed: "rgb(254 51 10 / var(--tw-text-opacity))",
      },
      width: {
        350: "350px",
      },
      fontSize: {
        90: ["90px", { lineHeight: "1" }],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("flowbite/plugin")],
};
