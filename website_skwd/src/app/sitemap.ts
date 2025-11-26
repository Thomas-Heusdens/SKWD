import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://skwd.be';

  const pages = [
    '/fr',
    '/nl',
    '/en',
    '/fr/a-propos',
    '/nl/over-ons',
    '/en/about-us',
    '/fr/logistique',
    '/nl/logistiek',
    '/en/logistics',
    '/fr/hospitalite',
    '/nl/hospitality',
    '/en/hospitality',
    '/fr/contactez-nous',
    '/nl/contacteer-ons',
    '/en/contact-us',
    '/fr/faq',
    '/nl/veelgestelde-vragen',
    '/en/faq',
    '/fr/travailler-avec-nous',
    '/nl/werk-met-ons',
    '/en/work-with-us',
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority:
      path === '/nl' ? 1.0 :
      path === '/fr' ? 0.9 :
      path === '/en' ? 0.8 :
      0.7
  }));
}