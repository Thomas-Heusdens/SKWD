import HospitalityClient from './HospitalityClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Secteur Hospitality - SKWD',
      description:
        "Découvrez nos services dans le secteur de l'hospitality : du catering aux activations de marque, nous plaçons les bons profils aux bons endroits.",
      ogDescription:
        "Explorez SKWD, votre partenaire belge pour le staffing hospitality — catering, accueil, service, et plus encore.",
      url: 'https://skwd.be/fr/hospitalite',  
    },
    nl: {
      title: 'Hospitality Sector - SKWD',
      description:
        'Ontdek onze hospitalitydiensten: van catering tot brand activaties, wij zorgen voor de juiste mensen op de juiste plaats.',
      ogDescription:
        'Verken SKWD, jouw Belgische partner voor hospitality staffing — catering, ontvangst, service en meer.',
      url: 'https://skwd.be/nl/hospitality',  
    },
    en: {
      title: 'Hospitality Division - SKWD',
      description:
        'Discover our hospitality services: from catering to brand activations, we place the right people in the right place.',
      ogDescription:
        'Explore SKWD, your Belgian partner for hospitality staffing — catering, brand activation, and premium event service.',
      url: 'https://skwd.be/en/hospitality',  
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: '/images/og-hospitality.jpg',
    width: 1200,
    height: 630,
    alt: 'SKWD hospitality division preview image',
  };

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: `https://skwd.be/${locale}/hospitality`,
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
      canonical: `https://skwd.be/${
        locale === 'fr'
          ? 'fr/hospitalite'
          : locale === 'nl'
          ? 'nl/hospitality'
          : 'en/hospitality'
      }`,
      languages: {
        en: 'https://skwd.be/en/hospitality',
        fr: 'https://skwd.be/fr/hospitalite',
        nl: 'https://skwd.be/nl/hospitality',
      },
    },
  };
}

export default function HospitalityPage() {
  return <HospitalityClient />;
}