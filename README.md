# Haris Samingan

Personal writing site for [haris.ezwin.academy](https://haris.ezwin.academy), built with Astro and deployed on Vercel.

## Development

```sh
npm install
npm run dev
```

The default development URL is `http://localhost:4321`.

## Checks

```sh
npm run build
```

This runs Astro's type and content checks before creating the Vercel server build.

## Content

Blog posts live in `src/content/posts`. Shared identity and search metadata live in `src/config.ts`.

The site includes canonical URLs, Open Graph and Twitter metadata, JSON-LD profile/article data, `robots.txt`, a generated XML sitemap, favicons, and a web app manifest.

Set `SITE_URL` to override the production origin for preview or alternate deployments.
