/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "black-secondary": "#232323",
      "black-main": "#242424",
      gray: "#8a8a8a",
      "gray-dark": "#0c0a09",
      white: "#faf5ff",
      green: "#16a34a",
      yellow: "#eab308",
      red: "#dc2626",
      purple: "#a100ed",
    },
    extend: {},
  },
  plugins: [],
};
