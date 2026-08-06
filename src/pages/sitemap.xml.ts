import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const escapeXML = (value: string) =>
  value.replace(
    /[<>&'\"]/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '\"': "&quot;",
      })[character]!,
  );

export const GET: APIRoute = async ({ site }) => {
  const siteURL = site ?? new URL("https://haris.ezwin.academy");
  const posts = await getCollection("posts");
  const urls: { loc: string; lastmod?: string }[] = [
    { loc: new URL("/", siteURL).href },
    ...posts.map((post) => ({
      loc: new URL(`/blog/${post.id}`, siteURL).href,
      lastmod: new Date(post.data.pubDate).toISOString(),
    })),
  ];

  const entries = urls
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${escapeXML(loc)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
