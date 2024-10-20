/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3d": "0 8px 20px rgba(0, 0, 0, 0.25)",
        "3xl": "0 15px 25px rgba(0, 0, 0, 0.3)", // New shadow style for more depth
      },
      colors: {
        primary: "#BC9F8B",
        secondary: "#BC9F8B",
        accent: "#d4ba98",
        dark: "#4a403a",
      },
    },
  },
  plugins: [],
};
