import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? "https://haris.ezwin.academy",
  output: "server",
  adapter: vercel(),
  // The blog index and the profile page both used to live elsewhere.
  redirects: {
    "/blog": "/",
    "/the-longer-version": "/",
  },
});
