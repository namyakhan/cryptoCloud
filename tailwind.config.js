/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: "#9900F0",
        blackbg: "#05020A",
        gray: "#D5D5D5",
        darkPurple: "#431c54",
      },
      backgroundImage: {
        stars: "url('/images/stars.svg')",
        // cards: "url('/images/nfts/card.svg')"
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
