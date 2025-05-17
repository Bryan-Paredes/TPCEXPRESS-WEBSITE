// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      API_TOKEN: envField.string({ context: "client", access: "public" }),
    },
  },

  integrations: [react(), tailwind({ applyBaseStyles: false })],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
