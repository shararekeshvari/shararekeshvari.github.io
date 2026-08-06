import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sharare Keshvari · Frontend Developer",
    template: "%s · Sharare Keshvari",
  },
  description: SITE_DESCRIPTION,
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
    title: "Sharare Keshvari · Frontend Developer",
    description: SITE_DESCRIPTION,
    siteName: "Sharare Keshvari Portfolio",
    images: [
      {
        url: "/images/hero-frontend-workspace.webp",
        width: 1536,
        height: 1024,
        alt: "Frontend development workspace for Sharare Keshvari's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharare Keshvari · Frontend Developer",
    description: SITE_DESCRIPTION,
    images: ["/images/hero-frontend-workspace.webp"],
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
