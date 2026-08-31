import type { MetadataRoute } from "next";

import { getLocalePath, locales } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.ir";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteUrl.replace(/\/$/, "");

  return locales.map((locale) => ({
    url: new URL(getLocalePath(locale), `${origin}/`).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
  }));
}
