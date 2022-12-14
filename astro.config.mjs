import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
// https://astro.build/config
import mdx from "@astrojs/mdx";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
   integrations: [lit(), tailwind(), mdx()],
});
