import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sharare Keshvari Portfolio",
    short_name: "Sharare Keshvari",
    description: SITE_DESCRIPTION,
    id: "/",
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
