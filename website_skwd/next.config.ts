import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // --- About ---
      { source: '/fr/about', destination: '/fr/a-propos', permanent: true },
      { source: '/nl/about', destination: '/nl/over-ons', permanent: true },
      { source: '/en/about', destination: '/en/about-us', permanent: true },

      // --- Hospitality ---
      { source: '/fr/hospitality', destination: '/fr/hospitalite', permanent: true },

      // --- Logistics ---
      { source: '/fr/logistics', destination: '/fr/logistique', permanent: true },
      { source: '/nl/logistics', destination: '/nl/logistiek', permanent: true },

      // --- Work with us ---
      { source: '/fr/work-with-us', destination: '/fr/travailler-avec-nous', permanent: true },
      { source: '/nl/work-with-us', destination: '/nl/werk-met-ons', permanent: true },

      // --- FAQ ---
      { source: '/nl/faq', destination: '/nl/veelgestelde-vragen', permanent: true },

      // --- Contact ---
      { source: '/fr/contact', destination: '/fr/contactez-nous', permanent: true },
      { source: '/nl/contact', destination: '/nl/contacteer-ons', permanent: true },
      { source: '/en/contact', destination: '/en/contact-us', permanent: true },
    ];
  },
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
      // Logistics localized path
      { source: '/fr/logistique', destination: '/fr/logistics' },
      { source: '/nl/logistiek', destination: '/nl/logistics' },
      // Work With Us localized path
      { source: '/fr/travailler-avec-nous', destination: '/fr/work-with-us' },
      { source: '/nl/werk-met-ons', destination: '/nl/work-with-us' },
      // FAQ localized path
      { source: '/nl/veelgestelde-vragen', destination: '/nl/faq' },
      // Contact localized path
      { source: '/fr/contactez-nous', destination: '/fr/contact' },
      { source: '/nl/contacteer-ons', destination: '/nl/contact' },
      { source: '/en/contact-us', destination: '/en/contact' },
    ];
  },
};

export default nextConfig;