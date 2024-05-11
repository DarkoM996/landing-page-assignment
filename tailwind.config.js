/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        bodoni: ["Bodoni Moda", "bodoni"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
