import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    eyebrow: z.string().optional(),
    socialImage: z.string().optional(),
    socialImageAlt: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
