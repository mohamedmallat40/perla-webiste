import React from "react";
import Head from "next/head";

interface SEOProps {
  page?: "home" | "services" | "technologies" | "about";
  title?: string;
  description?: string;
  canonicalUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  page = "home",
  title,
  description,
  canonicalUrl = "https://perla-it.com",
  breadcrumbs = [],
}) => {
  // Advanced Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://perla-it.com/#organization",
    name: "Perla AI",
    alternateName: ["Perla AI", "PERLA IT", "Perla"],
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
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2, maxValue: 10 },
    slogan: "Expert Web Development to Drive Your Business Growth",
    description:
      "Leading AI-first software company in Tunisia specializing in AI integration, web development, and mobile app solutions with 5+ years of experience serving clients globally.",
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
      ratingCount: 9,
      reviewCount: 9,
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
    name: "Perla AI",
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
    name: "Perla AI Services",
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

  // FAQ Schema — multilingual (EN + FR + AR combined for max coverage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // English
      {
        "@type": "Question",
        name: "What services does Perla AI offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perla AI offers AI development, AI integration (ChatGPT, GPT-4, Gemini, DeepSeek), custom web development with Next.js and React, and native mobile app development for iOS and Android.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Perla AI located and who do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perla AI is headquartered in Ariana, Tunis, Tunisia. We serve clients globally including Saudi Arabia, UAE, United States, France, Belgium, and across the MENA region.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AI development cost with Perla AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project costs vary by scope and complexity. Contact us at mo.mallat@perla-it.com or schedule a free discovery call on Calendly to get a tailored quote for your project.",
        },
      },
      {
        "@type": "Question",
        name: "What is Perla AI's experience and track record?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perla AI has 10+ years of experience, 9 successful projects delivered, and a 4.9/5 rating. We've built enterprise e-learning platforms for Saudi Aramco, AI-powered SaaS products, healthcare platforms, and CRM systems for clients across MENA and Europe.",
        },
      },
      // French
      {
        "@type": "Question",
        name: "Quels services propose Perla AI ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perla AI propose le développement IA, l'intégration IA (ChatGPT, GPT-4, Gemini, DeepSeek), le développement web avec Next.js et React, et le développement d'applications mobiles natives iOS et Android.",
        },
      },
      {
        "@type": "Question",
        name: "Perla AI travaille-t-elle avec des clients en France et en Belgique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, Perla AI travaille avec des clients en France, en Belgique, en Tunisie, en Arabie Saoudite et dans le monde entier. Nous proposons des services à distance avec des équipes francophones disponibles.",
        },
      },
      // Arabic
      {
        "@type": "Question",
        name: "ما هي خدمات Perla AI؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تقدم Perla AI تطوير الذكاء الاصطناعي، ودمج تقنيات الذكاء الاصطناعي (ChatGPT وGPT-4 وGemini وDeepSeek)، وتطوير الويب باستخدام Next.js وReact، وتطوير تطبيقات الجوال الأصلية لنظامي iOS وAndroid.",
        },
      },
      {
        "@type": "Question",
        name: "هل تعمل Perla AI مع العملاء في السعودية والإمارات؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، تعمل Perla AI مع عملاء في المملكة العربية السعودية والإمارات والكويت وتونس وفرنسا وبلجيكا والولايات المتحدة. لدينا خبرة واسعة في تقديم مشاريع لمنطقة الشرق الأوسط وشمال أفريقيا.",
        },
      },
    ],
  };

  // Portfolio ItemList Schema
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://perla-it.com/#portfolio_id",
    name: "Perla AI — Featured Projects Portfolio",
    description: "Case studies and featured projects built by Perla AI",
    url: "https://perla-it.com/#portfolio_id",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "LND — Enterprise E-learning Platform",
        url: "https://perla-it.com/projects/lnd-elearning-platform",
        description: "Secure automated learning platform built for Saudi Aramco with Directus and workflow automation",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wingman — AI Freelancer Matching Platform",
        url: "https://perla-it.com/projects/wingman-ai-matching",
        description: "AI-powered talent matching SaaS with Professional DNA profiling for ExtraExpertise Belgium",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "DNEXT — Commodity Data Analytics Platform",
        url: "https://perla-it.com/projects/dnext-analytics",
        description: "Event-driven AWS analytics platform with Elasticsearch for DNEXT Switzerland",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Yoo Connect — AI CRM & Business Card Platform",
        url: "https://perla-it.com/projects/yoo-connect-crm",
        description: "Cross-platform CRM with Mistral AI OCR for business card digitisation in Saudi Arabia",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "VVTIV — Secure Healthcare Platform for Therapists",
        url: "https://perla-it.com/projects/vvtiv-healthcare",
        description: "Confidential patient management platform with GPT-4 AI support for Belgian therapists",
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
    name: "Perla AI",
    description: "Expert Web Development & AI Solutions",
    publisher: {
      "@id": "https://perla-it.com/#organization",
    },
    inLanguage: ["en", "fr", "ar"],
  };

  return (
    <Head>
      {/* Enhanced Title & Meta Tags */}
      <title>
        {title ||
          "Perla AI - Expert Web Development & AI Solutions | Tunisia"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Perla AI — AI integration, web & mobile development in Tunisia. 10+ years, 9 projects for MENA, Europe & North America. Book a free consultation."
        }
      />

      {/* Advanced Keywords */}
      <meta
        name="keywords"
        content="AI development company Tunisia, AI integration services, ChatGPT integration, machine learning solutions, web development Tunisia, mobile app development Tunis, Next.js developers, React development, software company Tunisia, custom AI applications, business automation AI, digital transformation, startup MVP development, Ariana developers, North Africa tech, Perla AI"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang — locale switching is client-side only, so only en + x-default */}
      <link rel="alternate" hrefLang="en" href="https://perla-it.com" />
      <link rel="alternate" hrefLang="x-default" href="https://perla-it.com" />

      {/* Enhanced Open Graph */}
      <meta
        property="og:title"
        content={
          title ||
          "Perla AI - Expert Web Development & AI Solutions"
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
        content="https://perla-it.com/og-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Perla AI - Expert Web Development Team"
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Perla AI" />
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
          "Perla AI - Expert Web Development & AI Solutions"
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
        content="https://perla-it.com/og-image.png"
      />
      <meta
        name="twitter:image:alt"
        content="Perla AI - Expert Web Development Team"
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
      <meta name="apple-mobile-web-app-title" content="Perla AI" />

      {/* Business Information for Local SEO */}
      <meta name="geo.region" content="TN-11" />
      <meta name="geo.placename" content="Ariana, Tunis, Tunisia" />
      <meta name="geo.position" content="36.8064948;10.1815316" />
      <meta name="ICBM" content="36.8064948, 10.1815316" />
      <meta name="DC.title" content="Perla AI" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Perla AI" />
      <meta
        name="copyright"
        content="© 2026 Perla AI. All rights reserved."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </Head>
  );
};
