export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PERLA Code Innovators - Expert Web Development & AI Solutions",
  description:
    "Leading software development company specializing in AI integration, web development, and mobile apps. Transform your business with cutting-edge technology solutions.",
  url: "https://perla-it.com",
  company: "PERLA Code Innovators",
  shortName: "PERLA",
  tagline: "Expert Web Development to Drive Your Business Growth",

  // SEO optimized meta descriptions
  metaDescription:
    "PERLA Code Innovators delivers expert web development, AI integration, and mobile app solutions. 5+ years experience, 14+ successful projects, serving clients globally.",

  // Keywords for better search ranking
  keywords: [
    "web development",
    "AI integration",
    "mobile app development",
    "software development company",
    "Next.js development",
    "React development",
    "custom web solutions",
    "business automation",
    "startup MVP development",
    "digital transformation",
    "Tunisia software company",
    "PERLA Code Innovators",
    "Cairo font development",
    "responsive web design",
  ],

  // Contact information for local SEO
  contact: {
    email: "mo.mallat@perla-it.com",
    phone: "+216 58 891 477",
    address: "AV Hedi Khfacha 2023, Ariana, Tunis, Tunisia",
    calendly: "https://calendly.com/mohamedmallat40",
  },

  // Navigation items
  navItems: [
    {
      label: "navbar_services",
      href: "#services_id",
    },
    {
      label: "navbar_technologies",
      href: "#technologies_id",
    },
    {
      label: "navbar_about",
      href: "#footer_id",
    },
  ],

  // Social links for SEO
  links: {
    linkedin: "https://www.linkedin.com/company/100257723",
    sponsor: "https://www.linkedin.com/company/100257723",
    calendly: "https://calendly.com/mohamedmallat40",
  },

  // Business information for structured data
  business: {
    type: "SoftwareCompany",
    foundingYear: "2019",
    employees: "2-10",
    specialties: [
      "Web Development",
      "AI Integration",
      "Mobile App Development",
      "Custom Software Solutions",
    ],
    serviceAreas: ["Tunisia", "Middle East", "Europe", "North America"],
    languages: ["English", "French", "Arabic", "Dutch"],
  },

  // Open Graph optimized
  ogImage: "/og-image-enhanced.png",
  twitterHandle: "@perla_it",
} as const;
