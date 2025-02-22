import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensure static export
  trailingSlash: true, // Helps Cloudflare Pages handle routing properly
  images: {
    unoptimized: true, // Cloudflare Pages does not support Next.js image optimization
  },
};

export default nextConfig;
