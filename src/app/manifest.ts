import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sharare Keshvari Portfolio",
    short_name: "Sharare Keshvari",
    description:
      "Frontend Developer portfolio featuring React, Next.js, TypeScript, and RTL/LTR product interfaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a09",
    theme_color: "#090a09",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
