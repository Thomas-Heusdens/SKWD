import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // let /en/_next/*, /fr/_next/*, /nl/_next/* point to /_next/*
      { source: "/:locale(en|fr|nl)/_next/:path*", destination: "/_next/:path*" },
    ];
  },
};

export default nextConfig;