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
      },
    },
  },
  plugins: [],
};
