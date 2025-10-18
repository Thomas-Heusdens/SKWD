import { languages } from '@/i18n/settings';
import HospitalityClient from './HospitalityClient';

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = 'https://skwd.be';

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Secteur Hospitalité - SKWD',
      seoTitle: 'Secteur Hospitalité',
      ogTitle:
        "Secteur Hospitalité – Découvrez toutes les expériences uniques et les différents types de jobs proposés",

      description:
        "Découvrez nos services dans le secteur de l'hospitalité : du catering aux activations de marque, nous plaçons les bons profils aux bons endroits.",
      ogDescription:
        "Explorez SKWD, votre partenaire belge pour le staffing hospitality — catering, accueil, service, et plus encore.",
      url: `${siteUrl}/fr/hospitalite`,
    },
    nl: {
      title: 'Sector Hospitality - SKWD',
      seoTitle: 'Sector Hospitality',
      ogTitle:
        'Sector Hospitality – Ontdek de unieke ervaringen en verschillende soorten jobs waarin je kunt werken',
      description:
        'Ontdek onze hospitalitydiensten: van catering tot brand activaties, wij zorgen voor de juiste mensen op de juiste plaats.',
      ogDescription:
        'Verken SKWD, jouw Belgische partner voor hospitality staffing — catering, ontvangst, service en meer.',
      url: `${siteUrl}/nl/hospitality`,
    },
    en: {
      title: 'Hospitality sector - SKWD',
      seoTitle: 'Hospitality sector',
      ogTitle:
        'Hospitality sector – Discover all the unique experiences and different types of jobs you could be working in',
      description:
        'Discover our hospitality services: from catering to brand activations, we place the right people in the right place.',
      ogDescription:
        'Explore SKWD, your Belgian partner for hospitality staffing — catering, brand activation, and premium event service.',
      url: `${siteUrl}/en/hospitality`,
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: `${siteUrl}/images/og-hospitality.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD hospitality sector preview image',
  };

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: t.url,
      siteName: 'SKWD',
      images: [ogImage],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.ogDescription,
      images: [ogImage.url],
    },
    alternates: {
      canonical: t.url,
      languages: {
        en: `${siteUrl}/en/hospitality`,
        fr: `${siteUrl}/fr/hospitalite`,
        nl: `${siteUrl}/nl/hospitality`,
      },
    },
  };
}

export default function HospitalityPage() {
  return <HospitalityClient />;
}