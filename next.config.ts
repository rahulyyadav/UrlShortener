import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensure static export
  trailingSlash: false, // Prevent Cloudflare from appending a trailing slash
  images: {
    unoptimized: true, // Cloudflare Pages does not support Next.js image optimization
  },
};

export default nextConfig;
