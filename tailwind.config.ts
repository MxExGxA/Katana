import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-red": "#C02929",
        "main-dark": "#1B1D1C",
        "main-white": "#FFFFFF",
      },
      fontFamily: {
        reggae: ["Reggae One", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
        podkova: ["Podkova", "serif"],
        mashan: ["Ma Shan Zheng", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
