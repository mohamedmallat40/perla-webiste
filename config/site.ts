export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PERLA code innovators",
  description: "We code the future togther.",
  navItems: [
    {
      label: "navbar_services",
      href: "services",
    },
    {
      label: "navbar_technologies",
      href: "pricing",
    },
    {
      label: "navbar_about",
      href: "footer",
    },
  ],

  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://www.linkedin.com/in/mohamed-mallat-64192a107/",
  },
} as const; ;
