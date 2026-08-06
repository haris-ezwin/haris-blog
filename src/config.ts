// Site-wide content for Haris Samingan's personal site.
// Single source of truth for copy, identity, and SEO.

export interface SEOInfo {
  title: string;
  description: string;
  image: string;
}

export const identity = {
  name: "Haris Samingan",
  handle: "haris.samingan",
  role: "Founder & Educator",
  photo: "/haris.jpg",
  linkedin: "https://sg.linkedin.com/in/haris-samingan",
  email: "haris@ezwin.academy",
  location: "Singapore",
  flag: "🇸🇬",
};

export const siteContent = {
  seo: {
    title: "Haris Samingan",
    description:
      "Writing about AI, education, and the small tuition business I run",
    image: identity.photo,
  } satisfies SEOInfo,
  masthead: identity.name,
  tagline: "Writing about AI, education, and the small tuition business I run",
};
