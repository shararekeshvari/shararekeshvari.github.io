import type { Metadata } from "next";

import { Portfolio } from "@/components/portfolio";
import { defaultLocale } from "@/data/portfolio";
import { createPortfolioMetadata, createStructuredData } from "@/lib/portfolio-seo";

export const metadata: Metadata = createPortfolioMetadata(defaultLocale);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createStructuredData(defaultLocale)).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio locale={defaultLocale} />
    </>
  );
}
