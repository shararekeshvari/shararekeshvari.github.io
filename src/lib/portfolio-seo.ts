import type { Metadata } from "next";

import {
  getLocalePath,
  getPortfolioContent,
  languageAlternates,
  type Locale,
} from "@/data/portfolio";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.ir").replace(
  /\/$/,
  "",
);

export function getAbsoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

export function createPortfolioMetadata(locale: Locale): Metadata {
  const content = getPortfolioContent(locale);
  const canonical = getLocalePath(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: content.metadata.ogLocale,
      url: canonical,
      title: content.metadata.title,
      description: content.metadata.description,
      siteName: "Sharare Keshvari Portfolio",
      images: [
        {
          url: "/images/hero-structure.png",
          width: 1536,
          height: 1024,
          alt: content.metadata.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
      images: ["/images/hero-structure.png"],
    },
  };
}

export function createStructuredData(locale: Locale) {
  const content = getPortfolioContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sharare Keshvari",
    jobTitle: content.structuredData.jobTitle,
    url: getAbsoluteUrl(getLocalePath(locale)),
    email: "mailto:shararekeshvari77@gmail.com",
    sameAs: ["https://github.com/shararekeshvari"],
    address: {
      "@type": "PostalAddress",
      addressCountry: content.structuredData.addressCountry,
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Git",
      "Responsive Design",
      "REST APIs",
      "Figma",
    ],
    knowsLanguage: content.structuredData.knowsLanguage,
  };
}
