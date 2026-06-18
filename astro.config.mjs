// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // SSG. Set real domain for correct sitemap/canonical URLs.
  site: "https://hasibu.africa",
  output: "static",
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});