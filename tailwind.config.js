/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        "dmSans" : ["DM Sans", "sans-serif"]
      },
      textColor:{
        "OrangRed" : "rgb(254 51 10 / var(--tw-text-opacity))"
      },
      width:{
        350: "350px"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  
}

