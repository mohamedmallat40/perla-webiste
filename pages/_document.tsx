import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans, fontArabic } from "@/config/fonts";

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    name: "PERLA Code Innovators",
    alternateName: ["PERLA CI", "PERLA IT", "PERLA Group"],
    description:
      "Leading software development company specializing in AI integration, web development, and mobile apps.",
    url: "https://perla-it.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AV Hedi Khfacha 2023",
      addressLocality: "Ariana",
      addressRegion: "Tunis",
      addressCountry: "Tunisia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+216 58 891 477",
      email: "mo.mallat@perla-it.com",
      contactType: "customer service",
    },
  };

  return (
    <Html lang="en">
      <Head>
        {/* Core Metadata */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="PERLA Code Innovators delivers expert web development, AI integration, and mobile app solutions. 5+ years experience serving clients globally."
        />
        <meta
          name="keywords"
          content="web development, AI integration, mobile app development, Next.js, React, Tunisia, PERLA Code Innovators"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="PERLA Code Innovators - Expert Web Development & AI Solutions"
        />
        <meta
          property="og:description"
          content="Leading software development company specializing in AI integration, web development, and mobile apps."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="PERLA Code Innovators" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://perla-it.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PERLA Code Innovators - Expert Web Development"
        />
        <meta
          name="twitter:description"
          content="Leading software development company specializing in AI integration and web development."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Theme */}
        <meta name="theme-color" content="#ffffff" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

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
