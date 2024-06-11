/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "milky-coffee": "#d2b48c",
        "darker-coffee": "#a37c50",
        "darker-hover": "#8c6442",
        "custom-background": "#bdb5b0",
      },
      fontFamily: {
        pagella: ['"Tex Gyre Pagella"', "serif"],
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
