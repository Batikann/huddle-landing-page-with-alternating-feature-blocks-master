/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        openSans:"'Open Sans', sans-serif"
      },
      colors:{
        pinkk:"hsl(322, 100%, 66%)",
        v_pale_cyan:"hsl(193, 100%, 96%)",
        v_dark_cyan:"hsl(192, 100%, 9%)",
        grayish_blue:"hsl(208, 11%, 55%)"

      },
      backgroundImage:{
        'hero-desktop':"url('/dist/images/bg-hero-desktop.svg')"
      }
    },
  },
  plugins: [],
}
