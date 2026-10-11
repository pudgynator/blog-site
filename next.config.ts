import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.module.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.module.css",
      },
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
        condition: { not: { path: /\.module\.css$/ } },
      },
    },
  },
};

export default nextConfig;
