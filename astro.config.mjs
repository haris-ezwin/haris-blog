import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercel(),
  // The blog index and the profile page both used to live elsewhere.
  redirects: {
    "/blog": "/",
    "/the-longer-version": "/",
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
