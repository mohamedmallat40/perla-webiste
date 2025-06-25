import React from "react";
import Head from "next/head";

interface AdvancedSEOProps {
  page?: "home" | "services" | "technologies" | "about";
  title?: string;
  description?: string;
  canonicalUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  page = "home",
  title,
  description,
  canonicalUrl = "https://perla-it.com",
  breadcrumbs = [],
}) => {
  // Advanced Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "@id": "https://perla-it.com/#organization",
    name: "PERLA Code Innovators",
    alternateName: ["PERLA CI", "PERLA IT", "PERLA Group"],
    url: "https://perla-it.com",
    logo: {
      "@type": "ImageObject",
      url: "https://perla-it.com/logo.png",
      width: 200,
      height: 200,
    },
    foundingDate: "2019",
    founders: [
      {
        "@type": "Person",
        name: "Mohamed Mallat",
        jobTitle: "Founder & CEO",
      },
    ],
    numberOfEmployees: "2-10",
    slogan: "Expert Web Development to Drive Your Business Growth",
    description:
      "Leading software development company in Tunisia specializing in AI integration, web development, and mobile app solutions with 5+ years of experience serving clients globally.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AV Hedi Khfacha 2023",
      addressLocality: "Ariana",
      addressRegion: "Tunis",
      postalCode: "2080",
      addressCountry: "TN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+216-58-891-477",
        contactType: "customer service",
        availableLanguage: ["English", "French", "Arabic"],
        areaServed: ["TN", "SA", "AE", "US", "FR", "BE"],
      },
      {
        "@type": "ContactPoint",
        email: "mo.mallat@perla-it.com",
        contactType: "customer service",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/100257723",
      "https://calendly.com/mohamedmallat40",
    ],
    serviceType: [
      "Web Development",
      "AI Integration",
      "Mobile App Development",
      "Custom Software Development",
      "Digital Transformation",
      "Business Automation",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Tunisia",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "Country",
        name: "Belgium",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 14,
      reviewCount: 14,
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Lode Schoors",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody:
          "Without a doubt the best team I have worked with here at Upwork. Team of talented developers with great potentials.",
      },
    ],
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://perla-it.com/#localbusiness",
    name: "PERLA Code Innovators",
    image: "https://perla-it.com/og-image.png",
    telephone: "+216-58-891-477",
    email: "mo.mallat@perla-it.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AV Hedi Khfacha 2023",
      addressLocality: "Ariana",
      addressRegion: "Tunis",
      postalCode: "2080",
      addressCountry: "TN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.8064948,
      longitude: 10.1815316,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };

  // Services Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PERLA Code Innovators Services",
    description: "Comprehensive software development services",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "AI Development",
        description: "Custom AI solutions and machine learning implementations",
        provider: {
          "@id": "https://perla-it.com/#organization",
        },
        areaServed: "Worldwide",
        serviceType: "Software Development",
      },
      {
        "@type": "Service",
        position: 2,
        name: "AI Integration",
        description:
          "Integration of AI technologies like ChatGPT, DeepSeek, and Gemini",
        provider: {
          "@id": "https://perla-it.com/#organization",
        },
        areaServed: "Worldwide",
        serviceType: "Software Development",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Web Development",
        description:
          "Modern, scalable web applications using Next.js, React, and cutting-edge technologies",
        provider: {
          "@id": "https://perla-it.com/#organization",
        },
        areaServed: "Worldwide",
        serviceType: "Software Development",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Mobile Apps",
        description: "Native mobile applications for iOS and Android platforms",
        provider: {
          "@id": "https://perla-it.com/#organization",
        },
        areaServed: "Worldwide",
        serviceType: "Software Development",
      },
    ],
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does PERLA Code Innovators offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer AI development, AI integration, web development, and mobile app development services. Our expertise includes Next.js, React, Node.js, TypeScript, and AI technologies like ChatGPT and machine learning.",
        },
      },
      {
        "@type": "Question",
        name: "Where is PERLA Code Innovators located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are located in Ariana, Tunis, Tunisia, but we serve clients globally including Saudi Arabia, United States, France, and Belgium.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact PERLA Code Innovators?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact us via email at mo.mallat@perla-it.com, phone at +216 58 891 477, or schedule a meeting through our Calendly link.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does PERLA specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in modern web technologies including Next.js, React, Node.js, TypeScript, TailwindCSS, AI frameworks, and mobile development for iOS and Android.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: breadcrumb.name,
            item: breadcrumb.url,
          })),
        }
      : null;

  // WebSite Schema with Search Action
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://perla-it.com/#website",
    url: "https://perla-it.com",
    name: "PERLA Code Innovators",
    description: "Expert Web Development & AI Solutions",
    publisher: {
      "@id": "https://perla-it.com/#organization",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://perla-it.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: ["en", "fr", "ar"],
  };

  return (
    <Head>
      {/* Enhanced Title & Meta Tags */}
      <title>
        {title ||
          "PERLA Code Innovators - Expert Web Development & AI Solutions | Tunisia"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Leading software development company in Tunisia ⭐ 5+ years experience ⭐ AI integration, web development, mobile apps ⭐ Serving clients globally ⭐ Next.js, React experts"
        }
      />

      {/* Advanced Keywords */}
      <meta
        name="keywords"
        content="web development Tunisia, AI development Tunisia, mobile app development Tunis, Next.js developers, React development, software company Tunisia, AI integration services, custom web applications, business automation, digital transformation, startup MVP development, Ariana developers, North Africa tech, PERLA Code Innovators"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang for International SEO */}
      <link rel="alternate" hrefLang="en" href="https://perla-it.com" />
      <link rel="alternate" hrefLang="fr" href="https://perla-it.com?lang=fr" />
      <link rel="alternate" hrefLang="ar" href="https://perla-it.com?lang=ar" />
      <link rel="alternate" hrefLang="x-default" href="https://perla-it.com" />

      {/* Enhanced Open Graph */}
      <meta
        property="og:title"
        content={
          title ||
          "PERLA Code Innovators - Expert Web Development & AI Solutions"
        }
      />
      <meta
        property="og:description"
        content={
          description ||
          "Leading software development company in Tunisia with 5+ years experience. Specializing in AI integration, web development, and mobile apps."
        }
      />
      <meta
        property="og:image"
        content="https://perla-it.com/og-image-enhanced.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="PERLA Code Innovators - Expert Web Development Team"
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PERLA Code Innovators" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="ar_TN" />

      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@perla_it" />
      <meta name="twitter:creator" content="@perla_it" />
      <meta
        name="twitter:title"
        content={
          title ||
          "PERLA Code Innovators - Expert Web Development & AI Solutions"
        }
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Leading software development company in Tunisia with 5+ years experience."
        }
      />
      <meta
        name="twitter:image"
        content="https://perla-it.com/og-image-enhanced.png"
      />
      <meta
        name="twitter:image:alt"
        content="PERLA Code Innovators - Expert Web Development Team"
      />

      {/* LinkedIn Specific */}
      <meta property="og:image:type" content="image/png" />
      <meta name="linkedin:owner" content="100257723" />

      {/* Mobile & App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="PERLA CI" />

      {/* Business Information for Local SEO */}
      <meta name="geo.region" content="TN-11" />
      <meta name="geo.placename" content="Ariana, Tunis, Tunisia" />
      <meta name="geo.position" content="36.8064948;10.1815316" />
      <meta name="ICBM" content="36.8064948, 10.1815316" />
      <meta name="DC.title" content="PERLA Code Innovators" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="PERLA Code Innovators" />
      <meta
        name="copyright"
        content="© 2024 PERLA Code Innovators. All rights reserved."
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />

      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </Head>
  );
};
