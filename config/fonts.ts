import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Cairo as FontArabic,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontArabic = FontArabic({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
