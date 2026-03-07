"use client";

import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { I18nProvider } from "@react-aria/i18n";

import { fontSans, fontMono, fontArabic } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [locale, setLocale] = useState("en");

  // Handle Arabic font and RTL direction (client-side only — useEffect never runs on server)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (locale === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
      body.classList.add("arabic-locale", "rtl-layout");
      body.classList.remove("ltr-layout");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", locale);
      body.classList.remove("arabic-locale", "rtl-layout");
      body.classList.add("ltr-layout");
    }
  }, [locale]);

  return (
    <I18nProvider locale={locale}>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider defaultTheme="light" attribute="class">
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
