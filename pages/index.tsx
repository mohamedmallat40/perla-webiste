import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
import { SeoHead } from "@/components/SeoHead";
import { siteConfig } from "@/config/site";

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
    },
    {
      key: "proxym-it",
      logo: currentTheme === "dark" ? proxymLight : proxymDark,
    },
    {
      key: "dnext",
      logo: currentTheme === "dark" ? dnextLight : dnextDark,
    },
    {
      key: "aramco",
      logo: aramco,
    },
    {
      key: "extraexpertise",
      logo: extraexpertise,
    },
    {
      key: "zacta",
      logo: zacta,
    },
    {
      key: "tawazi",
      logo: currentTheme === "dark" ? tawazi : tawazi_dark,
    },
  ];

  // Structured data for homepage
  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.name,
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    mainEntity: {
      "@type": "SoftwareCompany",
      name: siteConfig.company,
      description: siteConfig.metaDescription,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        contactType: "customer service",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "AV Hedi Khfacha 2023",
        addressLocality: "Ariana",
        addressRegion: "Tunis",
        addressCountry: "Tunisia",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "14",
      },
      offers: {
        "@type": "AggregateOffer",
        offerCount: "4",
        lowPrice: "500",
        highPrice: "50000",
        priceCurrency: "USD",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <DefaultLayout>
      <SeoHead
        title="Expert Web Development & AI Solutions"
        description="PERLA Code Innovators delivers cutting-edge web development, AI integration, and mobile app solutions. 5+ years experience, 14+ successful projects, serving clients globally in Tunisia and beyond."
        keywords={[
          "web development Tunisia",
          "AI integration services",
          "mobile app development",
          "Next.js development",
          "React development",
          "custom software solutions",
          "business automation",
          "PERLA Code Innovators",
          "Tunis web development",
          "startup MVP development",
        ]}
        jsonLd={homepageJsonLd}
      />

      <main role="main">
        {/* Hero Section with optimized headings */}
        <section
          aria-label="Hero section"
          itemScope
          itemType="https://schema.org/SoftwareCompany"
        >
          <HeroLandingSection />
        </section>

        {/* Services Section */}
        <section
          aria-label="Our services"
          id="services_id"
          itemScope
          itemType="https://schema.org/Service"
        >
          <Services />
        </section>

        {/* Client Logos Section */}
        <section aria-label="Our trusted clients">
          <ScrollingBanner shouldPauseOnHover gap="80px">
            {logos.map(({ key, logo }) => (
              <div
                key={key}
                className="flex items-center justify-center text-foreground"
                role="img"
                aria-label={`${key} client logo`}
              >
                {logo}
              </div>
            ))}
          </ScrollingBanner>
        </section>

        {/* UI/UX Section */}
        <section aria-label="UI/UX capabilities">
          <UIUXSection />
        </section>

        {/* Technologies Section */}
        <section aria-label="Technologies we use" id="technologies_id">
          <TachnoSection />
        </section>

        {/* Testimonials Section */}
        <section
          aria-label="Client testimonials"
          id="testimonials"
          itemScope
          itemType="https://schema.org/Review"
        >
          <TestimonialsSection />
        </section>

        {/* Additional Details Section */}
        <section aria-label="Company details">
          <AdditionalDetails />
        </section>
      </main>

      {/* Footer with contact information */}
      <footer
        role="contentinfo"
        id="footer_id"
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <Footer />
      </footer>
    </DefaultLayout>
  );
}

// Export static props for better SEO
export async function getStaticProps() {
  return {
    props: {
      // This helps with SEO by providing static generation
    },
    // Revalidate every hour
    revalidate: 3600,
  };
}
