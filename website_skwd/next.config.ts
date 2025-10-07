import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // let /en/_next/*, /fr/_next/*, /nl/_next/* point to /_next/*
      { source: "/:locale(en|fr|nl)/_next/:path*", destination: "/_next/:path*" },
      // About localized path
      { source: '/fr/a-propos', destination: '/fr/about' },
      { source: '/nl/over-ons', destination: '/nl/about' },
      { source: '/en/about-us', destination: '/en/about' },
      // Hospitality localized path
      { source: '/fr/hospitalite', destination: '/fr/hospitality' },
      { source: '/nl/hospitality', destination: '/nl/hospitality' },
      { source: '/en/hospitality', destination: '/en/hospitality' },
      // Logistics localized path
      { source: '/fr/logistique', destination: '/fr/logistics' },
      { source: '/nl/logistiek', destination: '/nl/logistics' },
      { source: '/en/logistics', destination: '/en/logistics' },
      // Work With Us localized path
      { source: '/fr/collaborer-avec-nous', destination: '/fr/work-with-us' },
      { source: '/nl/werk-met-ons', destination: '/nl/work-with-us' },
      { source: '/en/work-with-us', destination: '/en/work-with-us' },
      // FAQ localized path
      { source: '/fr/faq', destination: '/fr/faq' },
      { source: '/nl/veelgestelde-vragen', destination: '/nl/faq' },
      { source: '/en/faq', destination: '/en/faq' },
      // Contact localized path
      { source: '/fr/contactez-nous', destination: '/fr/contact' },
      { source: '/nl/contacteer-ons', destination: '/nl/contact' },
      { source: '/en/contact-us', destination: '/en/contact' },
    ];
  },
};

export default nextConfig;