import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans, fontArabic } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    name: siteConfig.company,
    alternateName: ["PERLA CI", "PERLA IT", "PERLA Group"],
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    foundingDate: siteConfig.business.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: "AV Hedi Khfacha 2023",
      addressLocality: "Ariana",
      addressRegion: "Tunis",
      addressCountry: "Tunisia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "customer service",
      availableLanguage: siteConfig.business.languages,
    },
    sameAs: [siteConfig.links.linkedin],
    serviceType: siteConfig.business.specialties,
    areaServed: siteConfig.business.serviceAreas,
    numberOfEmployees: siteConfig.business.employees,
    knowsAbout: [
      "Web Development",
      "AI Integration",
      "Mobile Development",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "TailwindCSS",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}#services_id`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Technologies",
        item: `${siteConfig.url}#technologies_id`,
      },
    ],
  };

  return (
    <Html lang="en">
      <Head>
        {/* Enhanced Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.metaDescription} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="author" content={siteConfig.company} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />

        {/* Enhanced Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.metaDescription} />
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.ogImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={siteConfig.tagline} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:site_name" content={siteConfig.company} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="ar_TN" />

        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.metaDescription} />
        <meta
          name="twitter:image"
          content={`${siteConfig.url}${siteConfig.ogImage}`}
        />
        <meta name="twitter:image:alt" content={siteConfig.tagline} />
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
        <meta name="twitter:creator" content={siteConfig.twitterHandle} />

        {/* Business Information */}
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunis, Tunisia" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />

        {/* Mobile & App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content={siteConfig.shortName}
        />

        {/* Theme & Colors */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Cairo Font for Arabic */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="English" />
        <meta name="classification" content="Business" />
        <meta name="category" content="Software Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
      </Head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontArabic.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
