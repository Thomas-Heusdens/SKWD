import { languages } from '@/i18n/settings';
import HospitalityClient from './HospitalityClient';

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Secteur Hospitalité - SKWD',
      description:
        "Découvrez nos services dans le secteur de l'hospitalité : du catering aux activations de marque, nous plaçons les bons profils aux bons endroits.",
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
  const siteUrl = 'https://skwd.be';

  const ogImage = {
    url: `${siteUrl}/images/og-hospitality.png`,
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