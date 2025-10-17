import { languages } from '@/i18n/settings';
import LogisticsClient from './LogisticsClient';

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Secteur Logistique - SKWD',
      description:
        "Découvrez nos services dans le secteur de la logistique : de la manutention au transport, nous plaçons les bons profils aux bons endroits.",
      ogDescription:
        "Explorez SKWD, votre partenaire belge pour le staffing logistique — manutention, transport, entrepôt et plus encore.",
      url: 'https://skwd.be/fr/logistique',
    },
    nl: {
      title: 'Logistieke Sector - SKWD',
      description:
        'Ontdek onze logistieke diensten: van opbouw en afbouw tot transport, wij zorgen voor de juiste mensen op de juiste plaats.',
      ogDescription:
        'Verken SKWD, jouw Belgische partner voor logistiek personeel — opbouw, afbouw, magazijnwerk en meer.',
      url: 'https://skwd.be/nl/logistiek',
    },
    en: {
      title: 'Logistics Division - SKWD',
      description:
        'Discover our logistics services: from setup and dismantling to warehouse support, we place the right people in the right place.',
      ogDescription:
        'Explore SKWD, your Belgian partner for logistics staffing — setup, warehouse operations, and event logistics.',
      url: 'https://skwd.be/en/logistics',
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;
  const siteUrl = 'https://skwd.be';

  const ogImage = {
    url: `${siteUrl}/images/og-logistics.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD logistics division preview image',
  };

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: t.url,
      siteName: 'SKWD',
      images: [ogImage],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.ogDescription,
      images: [ogImage.url],
    },
    alternates: {
      canonical: t.url,
      languages: {
        en: 'https://skwd.be/en/logistics',
        fr: 'https://skwd.be/fr/logistique',
        nl: 'https://skwd.be/nl/logistiek',
      },
    },
  };
}

export default function LogisticsPage() {
  return <LogisticsClient />;
}