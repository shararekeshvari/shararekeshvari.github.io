const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.github.io";

export const SITE_URL = configuredSiteUrl.replace(/\/$/, "");

export const SITE_NAME = "Sharare Keshvari Portfolio";

export const SITE_DESCRIPTION =
  "Sharare Keshvari is a Frontend Developer and Information Technology student working with React, Next.js, TypeScript, and RTL interfaces.";
