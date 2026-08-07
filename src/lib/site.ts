const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shararekeshvari.github.io";

export const SITE_URL = configuredSiteUrl.replace(/\/$/, "");

export const PERSON_NAME = "Sharare Keshvari";

export const PERSON_EMAIL = "shararekeshvari77@gmail.com";

export const GITHUB_URL = "https://github.com/shararekeshvari";

export const SITE_NAME = `${PERSON_NAME} — Frontend Developer`;

export const SITE_DESCRIPTION =
  "Frontend portfolio of Sharare Keshvari, featuring React, Next.js, TypeScript, Persian RTL interfaces, and product work across accounting, learning, and clinic software.";
