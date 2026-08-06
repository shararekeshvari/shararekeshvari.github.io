const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.github.io";

export const SITE_URL = configuredSiteUrl.replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "Frontend Developer and Information Technology student building responsive web interfaces with React, Next.js, and TypeScript.";
