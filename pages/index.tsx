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

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <DefaultLayout>
      <main role="main">
        {/* Hero Section */}
        <section aria-label="Hero section">
          <HeroLandingSection />
        </section>

        {/* Services Section */}
        <section aria-label="Our services" id="services_id">
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
        <section aria-label="Client testimonials" id="testimonials">
          <TestimonialsSection />
        </section>

        {/* Additional Details Section */}
        <section aria-label="Company details">
          <AdditionalDetails />
        </section>
      </main>

      {/* Footer with contact information */}
      <footer role="contentinfo" id="footer_id">
        <Footer />
      </footer>
    </DefaultLayout>
  );
}
