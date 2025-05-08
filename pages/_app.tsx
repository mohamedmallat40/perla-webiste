"use client";

import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { fontSans, fontMono } from "@/config/fonts";
import { useEffect, useState } from "react";
import { I18nProvider } from "@react-aria/i18n";
import { useTranslations } from "@/hooks/use-translation";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState("ar"); // Default locale is Arabic
  
  // Determine if the current locale is RTL (e.g., Arabic)
  const isRTL = locale === "ar";

  const { t } = useTranslations();
  
  useEffect(() => {
    setMounted(true);
    
    // Apply RTL direction to the html element when locale changes
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    
    // You might need to add some specific RTL styles for the entire application
    if (isRTL) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [locale, isRTL]);

  if (!mounted) {
    // You could return a loader or empty state here
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        {/* You can set RTL-specific meta tags if needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {isRTL && <link rel="stylesheet" href="/css/rtl-overrides.css" />}
      </Head>
      <I18nProvider locale={locale}>
        <HeroUIProvider navigate={router.push}>
          <NextThemesProvider>
            <div dir={isRTL ? "rtl" : "ltr"}>
              <Navbar setLocale={setLocale} /> {/* Pass setLocale to Navbar */}
              <Component {...pageProps} />
            </div>
          </NextThemesProvider>
        </HeroUIProvider>
      </I18nProvider>
    </>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};