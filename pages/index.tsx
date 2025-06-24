import { useTheme } from "next-themes";

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
import ProjectsShowcase from "./projects/projects-showcase";
import ProjectsShowcase from "./projects/projects-showcase";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const { theme, systemTheme } = useTheme();

  // Get the actual current theme, accounting for system theme
  const currentTheme = theme === "system" ? systemTheme : theme;

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

  return (
    <DefaultLayout>
      <HeroLandingSection />
      <Services />
      <ScrollingBanner shouldPauseOnHover gap="80px">
        {logos.map(({ key, logo }) => (
          <div
            key={key}
            className="flex items-center justify-center text-foreground"
          >
            {logo}
          </div>
        ))}
      </ScrollingBanner>
      <UIUXSection />
      <TachnoSection />
      <TestimonialsSection />
      <AdditionalDetails />
      <Footer />
    </DefaultLayout>
  );
}
