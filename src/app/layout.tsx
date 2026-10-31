import type { Metadata, Viewport } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { languageAlternates } from "@/data/portfolio";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sharare Keshvari | Frontend Developer",
  description:
    "Sharare Keshvari builds responsive web experiences with React, Next.js and TypeScript. Explore selected projects and get in touch.",
  keywords: [
    "Sharare Keshvari",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [{ name: "Sharare Keshvari" }],
  creator: "Sharare Keshvari",
  alternates: {
    canonical: "/",
    languages: languageAlternates,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Sharare Keshvari | Frontend Developer",
    description:
      "Sharare Keshvari builds responsive web experiences with React, Next.js and TypeScript. Explore selected projects and get in touch.",
    siteName: "Sharare Keshvari Portfolio",
    images: [
      {
        url: "/images/hero-structure.png",
        width: 1536,
        height: 1024,
        alt: "Dimensional structure used in Sharare Keshvari's frontend portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharare Keshvari | Frontend Developer",
    description:
      "Sharare Keshvari builds responsive web experiences with React, Next.js and TypeScript. Explore selected projects and get in touch.",
    images: ["/images/hero-structure.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0eee5" },
    { media: "(prefers-color-scheme: dark)", color: "#252724" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
