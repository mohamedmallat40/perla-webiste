"use client";

import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { I18nProvider } from "@react-aria/i18n";

import { fontSans, fontMono, fontArabic } from "@/config/fonts";
import { useTranslations } from "@/hooks/use-translation";
import { Navbar } from "@/components/navbar";

import { Spinner } from "@heroui/spinner";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState("en");

  const { t } = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Arabic font and RTL direction
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;
    const body = document.body;

    if (locale === "ar") {
      // Set Arabic locale attributes
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");

      // Apply Arabic font classes
      body.classList.add("font-arabic", "arabic-locale");
      body.classList.remove("font-sans");

      // Force Arabic font through CSS variables
      body.style.setProperty(
        "--font-family-override",
        'var(--font-arabic), "Cairo", sans-serif',
      );
    } else {
      // Set LTR for other languages
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", locale);

      // Remove Arabic font classes
      body.classList.remove("font-arabic", "arabic-locale");
      body.classList.add("font-sans");

      // Reset font override
      body.style.removeProperty("--font-family-override");
    }
  }, [locale, mounted]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner color="warning" label="Loading..." />
      </div>
    );
  }

  return (
    <I18nProvider locale={locale}>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider>
          <div
            className={`${fontSans.variable} ${fontMono.variable} ${fontArabic.variable}`}
          >
            <Navbar setLocale={setLocale} /> {/* Pass setLocale to Navbar */}
            <Component {...pageProps} />
          </div>
        </NextThemesProvider>
      </HeroUIProvider>
    </I18nProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  arabic: fontArabic.style.fontFamily,
};
