import DefaultLayout from "@/layouts/default";
import Footer from "./footer/footer";
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
} from "./brand-scrooling-banner/logos";
import { useTheme } from "next-themes";

import ScrollingBanner from "./brand-scrooling-banner/scrolling-banner";
import HeroLandingSection from "./hero/hero-section";
import Services from "./services/services";
import AdditionalDetails from "./additional-details/additional-details";
import UIUXSection from "./hero/ui-components-boost";
import TachnoSection from "./technologies/techno";

export default function IndexPage() {
  const { theme } = useTheme();

  const logos = [
    {
      key: "alwasaet",
      logo: alwasaet,
    },
    {
      key: "proxym-it",
      logo: theme === "dark" ? proxymLight : proxymDark,
    },
    {
      key: "dnext",
      logo: theme === "dark" ? dnextLight : dnextDark,
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
      logo: theme === "dark" ? tawazi : tawazi,
    },
  ];

  return (
    <DefaultLayout>
      <HeroLandingSection />
      <Services />
      <section className="mx-auto w-full max-w-6xl px-6 sm:py-32 lg:px-8 ">
        <ScrollingBanner shouldPauseOnHover gap="40px">
          {logos.map(({ key, logo }) => (
            <div
              key={key}
              className="flex items-center justify-center text-foreground"
            >
              {logo}
            </div>
          ))}
        </ScrollingBanner>
      </section>
      <UIUXSection />
      <AdditionalDetails />
      <TachnoSection />
      <Footer />
    </DefaultLayout>
  );
}
