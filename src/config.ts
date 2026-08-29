// Site-wide content for Haris Samingan's personal site.
// Single source of truth for copy, identity, and SEO.

export interface SEOInfo {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  type?: "website" | "profile" | "article";
  publishedTime?: string;
}

export const identity = {
  name: "Haris Samingan",
  handle: "haris.samingan",
  role: "Founder & Educator",
  photo: "/haris.jpg",
  linkedin: "https://sg.linkedin.com/in/haris-samingan",
  location: "Singapore",
  flag: "🇸🇬",
};

export const siteContent = {
  seo: {
    title: "Haris Samingan | Founder & Educator in Singapore",
    description:
      "Haris Samingan is a Singapore founder and educator writing about AI, education, tuition, and building education businesses.",
    image: "/og-image.png",
    imageAlt:
      "Haris Samingan, founder and educator, writing about AI and education",
    type: "profile",
  } satisfies SEOInfo,
  masthead: identity.name,
  tagline: {
    beforeLink: "I run ",
    linkText: "EzWin Academy",
    linkUrl: "https://www.ezwin.academy/",
    afterLink:
      ", a Math tuition business, and write about life, business and education.",
  },
};
