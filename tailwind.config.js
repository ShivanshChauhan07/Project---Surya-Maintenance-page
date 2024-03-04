/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rob: ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/testimonials_bg1.jpg')",
        mall1: "url('/public/images/attendancePic/mall1.jpg')",
        mall2: "url('/public/images/attendancePic/mall2.jpg')",
        mall3: "url('/public/images/attendancePic/mall3.jpg')",
        mall4: "url('/public/images/attendancePic/mall4.jpg')",
        background1: "url('/public/images/attendancePic/background1.jpg')",
      },
      keyframes: {
        moves: {
          from: { translate: "0px 0px" },
          to: { translate: "0px -30px" },
        },
      },
      animation: {
        moves: "moves 1s linear 1 both",
      },
    },
  },
  plugins: [],
};
