import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@sanity/ui', 'sanity', '@sanity/vision'],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
