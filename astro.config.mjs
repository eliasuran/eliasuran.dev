import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eliasuran.dev",
  integrations: [tailwind(), icon(), svelte()],
});
