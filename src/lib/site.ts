const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.github.io";

export const SITE_URL = configuredSiteUrl.replace(/\/$/, "");

export const SITE_NAME = "Sharare Keshvari Portfolio";

export const SITE_DESCRIPTION =
  "Frontend Developer and Information Technology student building responsive React and Next.js product interfaces, including RTL/LTR workflows and reusable component systems.";
