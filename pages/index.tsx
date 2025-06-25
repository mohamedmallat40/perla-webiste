import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import {
  alwasaet,
  proxymLight,
  aramco,
  extraexpertise,
  proxymDark,
  zacta,
  dnextDark,
  dnextLight,
  tawazi,
  tawazi_dark,
} from "../components/logos";

import Footer from "./footer/footer";
import ScrollingBanner from "./brand-scrooling-banner/scrolling-banner";
import HeroLandingSection from "./hero/hero-section";
import Services from "./services/services";
import AdditionalDetails from "./additional-details/additional-details";
import UIUXSection from "./hero/ui-components-boost";
import TachnoSection from "./technologies/techno";
import TestimonialsSection from "./testimonials/testimonials";

import DefaultLayout from "@/layouts/default";
import { AdvancedSEO } from "@/components/AdvancedSEO";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";

// Dynamic imports for better performance
const LazyTestimonials = dynamic(() => import("./testimonials/testimonials"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />,
  ssr: false,
});

const LazyAdditionalDetails = dynamic(
  () => import("./additional-details/additional-details"),
  {
    loading: () => (
      <div className="h-64 animate-pulse bg-gray-200 rounded-lg" />
    ),
    ssr: false,
  },
);

export default function IndexPage() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Get the actual current theme, accounting for system theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const logos = [
    {
      key: "alwasaet",
      logo: alwasaet,
      alt: "Alwasaet - Client Logo",
    },
    {
      key: "proxym-it",
      logo: currentTheme === "dark" ? proxymLight : proxymDark,
      alt: "Proxym IT - Technology Partner",
    },
    {
      key: "dnext",
      logo: currentTheme === "dark" ? dnextLight : dnextDark,
      alt: "DNext - Development Partner",
    },
    {
      key: "aramco",
      logo: aramco,
      alt: "Saudi Aramco - Enterprise Client",
    },
    {
      key: "extraexpertise",
      logo: extraexpertise,
      alt: "Extra Expertise - Client Partner",
    },
    {
      key: "zacta",
      logo: zacta,
      alt: "Zacta - Technology Client",
    },
    {
      key: "tawazi",
      logo: currentTheme === "dark" ? tawazi : tawazi_dark,
      alt: "Tawazi - Digital Solutions Client",
    },
  ];

  const breadcrumbs = [{ name: "Home", url: "https://perla-it.com" }];

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <AdvancedSEO
        page="home"
        title="PERLA Code Innovators - Expert Web Development & AI Solutions | Tunisia"
        description="🚀 Leading software development company in Tunisia ⭐ 5+ years experience ⭐ AI integration, web development, mobile apps ⭐ Serving clients globally including Saudi Aramco ⭐ Next.js, React experts in Tunis"
        canonicalUrl="https://perla-it.com"
        breadcrumbs={breadcrumbs}
      />
      <PerformanceOptimizer />

      <DefaultLayout>
        <main role="main" itemScope itemType="https://schema.org/WebPage">
          {/* Hero Section - Critical above-the-fold content */}
          <section
            aria-label="Hero section - Expert web development services"
            itemScope
            itemType="https://schema.org/Organization"
            className="hero-section"
          >
            <meta itemProp="name" content="PERLA Code Innovators" />
            <meta
              itemProp="description"
              content="Expert Web Development to Drive Your Business Growth"
            />
            <meta itemProp="url" content="https://perla-it.com" />
            <HeroLandingSection />
          </section>

          {/* Services Section - High priority content */}
          <section
            aria-label="Our software development services"
            id="services_id"
            itemScope
            itemType="https://schema.org/Service"
          >
            <h2 className="sr-only">
              Professional Software Development Services
            </h2>
            <Services />
          </section>

          {/* Client Logos Section - Social proof */}
          <section
            aria-label="Our trusted clients and partners"
            className="clients-section"
          >
            <h2 className="sr-only">Trusted by Leading Companies</h2>
            <ScrollingBanner shouldPauseOnHover gap="80px">
              {logos.map(({ key, logo, alt }) => (
                <div
                  key={key}
                  className="flex items-center justify-center text-foreground"
                  role="img"
                  aria-label={alt}
                  itemScope
                  itemType="https://schema.org/ImageObject"
                >
                  <meta itemProp="name" content={alt} />
                  <meta
                    itemProp="description"
                    content={`${key} company logo - PERLA client`}
                  />
                  {logo}
                </div>
              ))}
            </ScrollingBanner>
          </section>

          {/* UI/UX Section - Development capabilities */}
          <section
            aria-label="UI/UX development capabilities and modern tools"
            className="capabilities-section"
          >
            <h2 className="sr-only">Modern UI/UX Development Tools</h2>
            <UIUXSection />
          </section>

          {/* Technologies Section - Technical expertise */}
          <section
            aria-label="Technologies we master and use"
            id="technologies_id"
            itemScope
            itemType="https://schema.org/TechArticle"
          >
            <h2 className="sr-only">Technologies We Excel In</h2>
            <meta itemProp="name" content="Technologies We Excel In" />
            <meta
              itemProp="description"
              content="Cutting-edge technologies including Next.js, React, AI frameworks"
            />
            <TachnoSection />
          </section>

          {/* Testimonials Section - Lazy loaded for performance */}
          <section
            aria-label="Client testimonials and reviews"
            id="testimonials"
            itemScope
            itemType="https://schema.org/Review"
            className="testimonials-section"
          >
            <h2 className="sr-only">What Our Clients Say</h2>
            <LazyTestimonials />
          </section>

          {/* Additional Details Section - Lazy loaded */}
          <section
            aria-label="Company details and additional information"
            className="details-section"
          >
            <h2 className="sr-only">Company Information</h2>
            <LazyAdditionalDetails />
          </section>
        </main>

        {/* Footer with comprehensive contact information */}
        <footer
          role="contentinfo"
          id="footer_id"
          itemScope
          itemType="https://schema.org/ContactPoint"
          aria-label="Contact information and company details"
        >
          <meta itemProp="telephone" content="+216-58-891-477" />
          <meta itemProp="email" content="mo.mallat@perla-it.com" />
          <meta
            itemProp="areaServed"
            content="Tunisia, Saudi Arabia, United States, France, Belgium"
          />
          <meta
            itemProp="availableLanguage"
            content="English, French, Arabic"
          />
          <Footer />
        </footer>
      </DefaultLayout>

      {/* Structured Data for Business Hours */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "PERLA Code Innovators - Expert Web Development & AI Solutions",
            description:
              "Leading software development company in Tunisia specializing in AI integration, web development, and mobile apps",
            url: "https://perla-it.com",
            lastReviewed: "2024-12-25",
            reviewedBy: {
              "@type": "Organization",
              name: "PERLA Code Innovators",
            },
            mainContentOfPage: {
              "@type": "WebPageElement",
              cssSelector: "main",
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://perla-it.com/og-image-enhanced.png",
            },
          }),
        }}
      />
    </>
  );
}

// Export for better SEO crawling
export async function getStaticProps() {
  return {
    props: {
      // Pre-computed data for SEO
      pageType: "home",
      lastModified: new Date().toISOString(),
    },
  };
}
