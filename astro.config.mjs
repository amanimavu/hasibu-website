// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // SSG. Set real domain for correct sitemap/canonical URLs.
  site: "https://hasibu.africa",

  output: "static",
  integrations: [react(), icon(), sitemap()],

  vite: {
      // Cast: Astro 6 uses rolldown-vite, so @tailwindcss/vite's Plugin type
      // (from a different vite install) doesn't structurally match. Runtime is fine.
      plugins: [/** @type {any} */ (tailwindcss())],
  },

  prefetch: true,

  adapter: node({
    mode: "standalone",
  }),
});