import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteURL = site ?? new URL("https://haris.ezwin.academy");
  const sitemapURL = new URL("/sitemap.xml", siteURL);

  return new Response(
    [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${sitemapURL.href}`, ``].join(
      "\n",
    ),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
