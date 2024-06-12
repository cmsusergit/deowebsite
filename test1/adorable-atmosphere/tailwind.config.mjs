import { transformer } from "astro/zod";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      poppin: ["mina", "Poppins", "sans-serif"],
    },
    extend: {
      keyframes: {
        tilt: {
          "0%,100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },

          "75%": { transform: "rotate(-5deg)" },
        },
        gray: {
          "0%": { filter: "grayscale(0)" },
          "100%": { filter: "grayscale(100%)" },
        },

        zoomin: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },

        flip: {
          "0%": { transform: "rotateY(0deg)" },

          "50%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
  daisyui: {
    themes: ["light", "lofi", "autumn", "retro", "corporate"],
    base: true,
    styled: true,
  },
};
