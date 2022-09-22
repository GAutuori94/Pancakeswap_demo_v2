/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ghost: {
          "0%": { opacity: "0.9" },
          "50%": { opacity: "0.1" },
          "100%": { opacity: "0.9" },
        },
        float: {
          "0%": { transform: "translate(0px)" },
          "50%": { transform: "translate(10px, 5px)" },
          "100%": { transform: "translate(0px)" },
        },
      },
      animation: {
        ghosting: "ghost 2s ease-in-out infinite",
        floating: "float 3s ease-in-out 1s infinite",
      },
    },
  },
  plugins: [],
};
