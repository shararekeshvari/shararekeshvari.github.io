import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    qualities: [75, 80],
    unoptimized: true,
  },
};

export default nextConfig;
