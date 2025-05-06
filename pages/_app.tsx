
"use client"; // for newer Next.js

import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
