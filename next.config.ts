import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static exports
  basePath: process.env.NODE_ENV === "production" ? "/next-profile" : "",
  images: {
    unoptimized: true, // Required for static export
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static 404 page generation
  staticPageGenerationTimeout: 0,
};

export default nextConfig;
