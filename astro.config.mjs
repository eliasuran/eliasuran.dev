import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import rosepine from "./src/lib/rose-pine.json";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eliasuran.dev",
  integrations: [tailwind(), icon(), svelte()],
  markdown: {
    shikiConfig: {
      theme: rosepine,
      wrap: true
    }
  },
  output: "hybrid",
  adapter: vercel()
});
