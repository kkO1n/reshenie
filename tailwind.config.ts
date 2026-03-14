import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f6fb",
          100: "#dce6f2",
          200: "#b9cde5",
          300: "#8eadd1",
          400: "#5f87b8",
          500: "#436c9f",
          600: "#335480",
          700: "#284063",
          800: "#213650",
          900: "#1d2e43",
          950: "#121d2d"
        },
        accent: {
          50: "#fcf3f3",
          100: "#f8e5e5",
          200: "#f2cccc",
          300: "#e8a6a6",
          400: "#d76f6f",
          500: "#c24747",
          600: "#ab3434",
          700: "#8e2d2d",
          800: "#762a2a",
          900: "#632727",
          950: "#351111"
        }
      },
      boxShadow: {
        panel: "0 10px 30px -20px rgba(18, 29, 45, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
