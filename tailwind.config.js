/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Opacity img set for animation-ghosting
        ghost: {
          "0%": { opacity: "0.9" },
          "50%": { opacity: "0.1" },
          "100%": { opacity: "0.9" },
        },
        // Translate img set for animation-floating
        float: {
          "0%": { transform: "translate(0px)" },
          "50%": { transform: "translate(10px, 5px)" },
          "100%": { transform: "translate(0px)" },
        },
      },

      animation: {
        ghosting: "2s ghost ease-in-out infinite",
        floating: "3s ease-in-out infinite none running float",
      },
    },
  },
  plugins: [],
};
