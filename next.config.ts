import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // standalone only for self-hosted (Hostinger); Vercel handles its own output
  output: process.env.VERCEL ? undefined : "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
