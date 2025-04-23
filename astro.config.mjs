// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      API_TOKEN: envField.string({ context: "client", access: "public" }),
    },
  },
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});
