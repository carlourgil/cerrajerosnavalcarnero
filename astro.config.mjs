// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cerrajerosnavalcarnero.madrid",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => ![
        "/404",
        "/aviso-legal",
        "/politica-privacidad",
        "/politica-cookies",
      ].includes(new URL(page).pathname.replace(/\/+$/, "")),
    }),
  ],
});
