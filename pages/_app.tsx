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

      // Apply Arabic font to body and all elements
      body.style.fontFamily = 'var(--font-arabic), "Cairo", sans-serif';
      body.classList.add("arabic-locale", "rtl-layout");
      body.classList.remove("ltr-layout");
    } else {
      // Set LTR for other languages
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", locale);

      // Reset to default font
      body.style.fontFamily = "var(--font-sans), system-ui, sans-serif";
      body.classList.remove("arabic-locale", "rtl-layout");
      body.classList.add("ltr-layout");
    }
  }, [locale, mounted]);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center h-screen"
        style={{
          fontFamily:
            locale === "ar"
              ? 'var(--font-arabic), "Cairo", sans-serif'
              : "var(--font-sans), system-ui, sans-serif",
        }}
      >
        <Spinner
          color="warning"
          label={locale === "ar" ? "جاري التحميل..." : "Loading..."}
        />
      </div>
    );
  }

  return (
    <I18nProvider locale={locale}>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider>
          <div
            className={`${fontSans.variable} ${fontMono.variable} ${fontArabic.variable} ${locale === "ar" ? "rtl-layout arabic-locale" : "ltr-layout"}`}
          >
            <Navbar setLocale={setLocale} />
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
