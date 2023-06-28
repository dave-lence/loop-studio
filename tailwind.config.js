/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
     sm:"480px",
     md:"768px",
     lg:"970px",
     xl:"1440px",
    },
    extend: {
      fontFamily:{
        snas:["Josefin Sans", "sans-serif"],
        alata:["Alata"]
      }
    },
    letterSpacing:{
      widest: ".3rem"
    },
  },
  plugins: [],
}

