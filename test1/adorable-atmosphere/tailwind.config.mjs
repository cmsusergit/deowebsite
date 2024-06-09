/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "sans-serif"],
      body: ["poppin"],
      display: ["poppin"],
    },
    extend: {
      keyframes: {
        tilt: {
          "0%,100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },

          "75%": { transform: "rotate(-5deg)" },
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
