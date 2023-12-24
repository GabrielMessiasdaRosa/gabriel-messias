import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar-hide"),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#f6e2e7",
              100: "#e7b7c4",
              200: "#d8889d",
              300: "#c85875",
              400: "#bc3458",
              500: "#b0103a",
              600: "#a90e34",
              700: "#a00c2c",
              800: "#970925",
              900: "#870518",
              DEFAULT: "#b0103a",
              foreground: "#000000",
            },
            focus: "#b0103a",
          },
        },
      },
    }),
  ],
};
export default config;
