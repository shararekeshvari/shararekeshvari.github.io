import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sharare Keshvari · Frontend Developer & IT Student",
    template: "%s · Sharare Keshvari",
  },
  description:
    "Frontend Developer and Information Technology student focused on responsive web interfaces built with React, Next.js, and TypeScript.",
  keywords: [
    "Sharare Keshvari",
    "Frontend Developer",
    "Information Technology Student",
    "Junior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [{ name: "Sharare Keshvari" }],
  creator: "Sharare Keshvari",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Sharare Keshvari · Frontend Developer & IT Student",
    description:
      "Frontend Developer and Information Technology student focused on responsive web interfaces built with React, Next.js, and TypeScript.",
    siteName: "Sharare Keshvari Portfolio",
    images: [
      {
        url: "/images/hero-frontend-workspace.png",
        width: 1536,
        height: 1024,
        alt: "Frontend development workspace for Sharare Keshvari's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharare Keshvari · Frontend Developer & IT Student",
    description:
      "Frontend Developer and IT student focused on responsive interfaces built with React, Next.js, and TypeScript.",
    images: ["/images/hero-frontend-workspace.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
