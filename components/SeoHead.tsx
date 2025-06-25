import React from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  canonical?: string;
  jsonLd?: object;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  ogImage,
  noIndex = false,
  canonical,
  jsonLd,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.company}`
    : siteConfig.name;
  const metaDescription = description || siteConfig.metaDescription;
  const metaKeywords = keywords
    ? keywords.join(", ")
    : siteConfig.keywords.join(", ");
  const imageUrl = ogImage
    ? `${siteConfig.url}${ogImage}`
    : `${siteConfig.url}${siteConfig.ogImage}`;
  const canonicalUrl = canonical || siteConfig.url;

  return (
    <NextHead>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.company} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={imageUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </NextHead>
  );
};

// Pre-configured SEO components for common pages
export const HomeSeo = () => (
  <SeoHead
    title="Expert Web Development & AI Solutions"
    description="Transform your business with cutting-edge web development, AI integration, and mobile app solutions. 5+ years experience serving clients globally."
    keywords={[
      "web development",
      "AI integration",
      "mobile apps",
      "business automation",
    ]}
  />
);

export const ServicesSeo = () => (
  <SeoHead
    title="Web Development & AI Services"
    description="Professional web development, AI integration, mobile app development, and custom software solutions. Expert team with proven track record."
    keywords={[
      "web development services",
      "AI development",
      "mobile app services",
      "custom software",
    ]}
    canonical={`${siteConfig.url}#services_id`}
  />
);

export const TechnologiesSeo = () => (
  <SeoHead
    title="Technologies We Use"
    description="Cutting-edge technologies including Next.js, React, Node.js, TypeScript, AI frameworks, and modern development tools for scalable solutions."
    keywords={[
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "AI frameworks",
      "web technologies",
    ]}
    canonical={`${siteConfig.url}#technologies_id`}
  />
);
