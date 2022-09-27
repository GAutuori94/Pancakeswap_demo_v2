/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cardBorder: "#e7e3eb",
        failure: "#ed4b9e",
        primary: "#1fc7d4",
        secondary: "#7645d9",
        text: "#280d5f",
        textSubtle: "#7a6eaa",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        30: "30%",
      },
    },
  },
  plugins: [],
};
