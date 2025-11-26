import { languages } from '@/i18n/settings';
import HospitalityClient from './HospitalityClient';

export async function generateStaticParams() {
  return languages.map((lng: (typeof languages)[number]) => ({ locale: lng }));
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
      title: 'Hospitalité - SKWD',
      seoTitle: 'Secteur Hospitalité',
      ogTitle:
        "Secteur Hospitalité – Découvrez toutes les expériences uniques et les différents types de jobs proposés",
      description:
        "Staffing en hospitalité pour le catering, l’accueil et le service. SKWD sélectionne et briefe des étudiants pour une expérience événementielle accueillante.",
      ogDescription:
        "SKWD pour l’hospitalité — catering, accueil, service et activations.",
      url: `${siteUrl}/fr/hospitalite`,
    },
    nl: {
      title: 'Hospitality - SKWD',
      seoTitle: 'Sector Hospitality',
      ogTitle:
        'Sector Hospitality – Ontdek de unieke ervaringen en verschillende soorten jobs waarin je kunt werken',
      description:
        'Hospitality-staffing voor catering, ontvangst en service. SKWD selecteert en brieft studenten voor een gastvrije eventervaring.',
      ogDescription:
        'SKWD voor hospitality — catering, onthaal, service & activaties.',
      url: `${siteUrl}/nl/hospitality`,
    },
    en: {
      title: 'Hospitality - SKWD',
      seoTitle: 'Hospitality sector',
      ogTitle:
        'Hospitality sector – Discover all the unique experiences and different types of jobs you could be working in',
      description:
        'Hospitality staffing for catering, reception, and service. SKWD selects and briefs students for a welcoming event experience.',
      ogDescription:
        'SKWD for hospitality — catering, reception, service & activations.',
      url: `${siteUrl}/en/hospitality`,
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: `${siteUrl}/images/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD OpenGraph image',
  };

  const ogLocale =
    locale === 'fr' ? 'fr_BE'
    : locale === 'nl' ? 'nl_BE'
    : 'en';

  const keywords =
    locale === 'fr'
      ? 'staffing étudiant, événementiel, logistique, hospitalité, jobs étudiants, agence d\'intérim, Belgique'
      : locale === 'nl'
      ? 'studentenwerk, logistiek, hospitality, evenementen, studentenjobs, uitzendbureau, België'
      : 'student staffing, event staffing, logistics, hospitality, student jobs, Belgium';

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: t.url,
      siteName: 'SKWD',
      images: [ogImage],
      locale: ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.ogDescription,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
    keywords,
    alternates: {
      canonical: t.url,
      languages: {
        en: `${siteUrl}/en/hospitality`,
        'fr-BE': `${siteUrl}/fr/hospitalite`,
        'nl-BE': `${siteUrl}/nl/hospitality`,
        'x-default': siteUrl,
      },
    },
  };
}

export default function HospitalityPage() {
  return <HospitalityClient />;
}