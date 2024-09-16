import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent1: {
          100: "#fee2d8",
          200: "#fdc5b1",
          300: "#fda889",
          400: "#fc8b62",
          500: "#fb6e3b",
          600: "#c9582f",
          700: "#974223",
          800: "#642c18",
          900: "#32160c",
        },
        accent2: {
          100: "#efd3f7",
          200: "#dfa7f0",
          300: "#cf7ce8",
          400: "#bf50e1",
          500: "#af24d9",
          600: "#8c1dae",
          700: "#691682",
          800: "#460e57",
          900: "#23072b",
        },
        dark: {
          100: "#d7d5d7",
          200: "#aeacaf",
          300: "#868288",
          400: "#5d5960",
          500: "#352f38",
          600: "#2a262d",
          700: "#201c22",
          800: "#151316",
          900: "#0b090b",
        },
        light: {
          100: "#fbfafc",
          200: "#f7f6f8",
          300: "#f4f1f5",
          400: "#f0edf1",
          500: "#ece8ee",
          600: "#bdbabe",
          700: "#8e8b8f",
          800: "#5e5d5f",
          900: "#2f2e30",
        },
        mid: {
          100: "#f4f4f6",
          200: "#e8e8ed",
          300: "#dddde4",
          400: "#d1d1db",
          500: "#c6c6d2",
          600: "#9e9ea8",
          700: "#77777e",
          800: "#4f4f54",
          900: "#28282a",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
