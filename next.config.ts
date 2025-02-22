import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures the project builds as a static site
  distDir: ".vercel/output", // Defines the output directory for Cloudflare Pages
  images: {
    unoptimized: true, // Cloudflare Pages does not support Next.js image optimization
  },
};

export default nextConfig;
