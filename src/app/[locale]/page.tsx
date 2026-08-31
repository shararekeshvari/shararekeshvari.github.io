import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Portfolio } from "@/components/portfolio";
import { isLocale, locales } from "@/data/portfolio";
import { createPortfolioMetadata, createStructuredData } from "@/lib/portfolio-seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return createPortfolioMetadata(locale);
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createStructuredData(locale)).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio locale={locale} />
    </>
  );
}
