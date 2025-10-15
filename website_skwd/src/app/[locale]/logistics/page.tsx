import LogisticsClient from './LogisticsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

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

  const ogImage = {
    url: '/images/og-logistics.jpg',
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
      url: `https://skwd.be/${locale}/logistics`,
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
      canonical: `https://skwd.be/${locale === 'fr'
        ? 'fr/logistique'
        : locale === 'nl'
        ? 'nl/logistiek'
        : 'en/logistics'}`,
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