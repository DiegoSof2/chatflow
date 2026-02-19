import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  build: {
    inlineStylesheets: "always", // CSS inline no HTML → elimina request bloqueante
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
