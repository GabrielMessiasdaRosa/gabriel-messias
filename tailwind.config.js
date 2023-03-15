/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "size-150": "150% 150%",
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-50": "50% 50%",
        "pos-100": "100% 100%",
      },
      fontFamily: {
        poiret: ['"Poiret One"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
