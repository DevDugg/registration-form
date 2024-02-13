import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        WHITE: "rgba(242, 242, 242, 1)",
        BLACK: "rgba(39, 39, 39, 1)",
        ACCENT: "#FEC00F",
        BLACK35: "rgba(39, 39, 39, .35)",
        WHITE35: "rgba(242, 242, 242, .35)",
      },
      fontFamily: {
        BEBAS: ["--BEBAS", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
