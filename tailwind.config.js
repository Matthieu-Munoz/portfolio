/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cad3c5",
          200: "#a5b7ab",
          300: "#819b95",
          400: "#617f81",
          500: "#45636d",
          600: "#2f4858",
        },
        secondary: {
          100: "#537970",
          200: "#47706d",
          300: "#3d6669",
          400: "#365c65",
          500: "#3c4e49",
          600: "#324d4f",
        },
        beige: {
          100: "#eae8df",
          200: "#fef0e7",
        },
      },
      keyframes: {
        toggleOn: {
          "0%": { transform: "translateX(0) rotate(0)" },
          "100%": { transform: "translateX(1.4rem) rotate(360deg)" },
        },
        toggleOff: {
          "0%": { transform: "translateX(1.4rem) rotate(360deg)" },
          "100%": { transform: "translateX(0) rotate(0)" },
        },
      },
      animation: {
        toggleOn: "toggleOn 0.2s normal forwards",
        toggleOff: "toggleOff 0.2s normal forwards",
      },
    },
  },

  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addVariant }) {
      addVariant("menu-active-link", ".menu-active-link &");
    },
  ],
}
