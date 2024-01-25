import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import rosepine from "./src/lib/rose-pine.json";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  markdown: {
    shikiConfig: {
      theme: rosepine,
      wrap: true
    }
  }
});
