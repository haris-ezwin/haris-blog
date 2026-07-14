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
};

export const siteContent = {
  seo: {
    title: "Haris Samingan — Founder & Educator",
    description:
      "I run a tuition business powered by technology and AI. My focus is building an education business that actually helps students learn better.",
    image: identity.photo,
  } satisfies SEOInfo,

  hero: {
    eyebrow: "founder & educator",
    description:
      "I run a tuition business powered by technology and AI. My focus is simple: building an education business that actually helps students learn better.",
    meta: [
      { label: "Now", value: "Building an education business" },
      { label: "Based", value: "Singapore · UTC+8" },
      { label: "Stack", value: "Tech · AI · Education" },
      {
        label: "Running",
        value: "6× a week · goal: 90-min half marathon (21.1km)",
      },
    ],
  },

  about: {
    lead: "I've spent years in education — teaching, coaching, and figuring out what actually makes learning stick.",
    body: "Today I'm focused on running a tuition business and rebuilding it around modern tools. Technology and AI let a small team deliver the kind of personal, high-quality teaching that used to need an army of tutors. That's the bet I'm making, and it's what I think about every day.",
  },

  focus: [
    {
      title: "A modern tuition business",
      body: "Quality teaching as the product. Built to scale without losing the personal touch that makes students improve.",
    },
    {
      title: "Powered by tech & AI",
      body: "Using AI to personalise learning, automate the busywork, and give every student feedback that's usually reserved for one-on-one tutoring.",
    },
    {
      title: "Education as a business",
      body: "Treating education with the rigour of a real company — systems, growth, and outcomes you can measure.",
    },
  ],

};

export const blogPageContent = {
  seo: {
    title: "Writing — Haris Samingan",
    description: "Notes on building an education business.",
    image: identity.photo,
  } satisfies SEOInfo,
  heading: "Notes on building an education business",
};
