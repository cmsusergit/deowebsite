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
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],

  daisyui: {
    themes: ["light", "corporate"],
    base: true,
    styled: true,
  },
};
