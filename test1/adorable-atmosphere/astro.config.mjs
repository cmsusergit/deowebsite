import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4040,
    host: true,
  },
  integrations: [
    sanity({
      projectId: "9kplpxfq",
      dataset: "testproject",
      useCdn: false,
    }),
    react(),
    tailwind({ config: { applyBaseStyles: false } }),
  ],
});
