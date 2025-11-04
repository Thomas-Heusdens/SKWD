import { languages } from '@/i18n/settings';
import LogisticsClient from './LogisticsClient';

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
      title: 'Secteur Logistique - SKWD',
      seoTitle: 'Secteur Logistique',
      ogTitle:
        'Secteur Logistique – Découvrez toutes les expériences uniques et les différents types de missions dans la logistique événementielle',

      description:
        "Découvrez nos services dans le secteur de la logistique : de la manutention au transport, nous plaçons les bons profils aux bons endroits.",
      ogDescription:
        "Explorez SKWD, votre partenaire belge pour le staffing logistique — manutention, transport, entrepôt et plus encore.",
      url: `${siteUrl}/fr/logistique`,
    },
    nl: {
      title: 'Sector Logistiek - SKWD',
      seoTitle: 'Sector Logistiek',
      ogTitle:
        'Sector Logistiek – Ontdek de unieke ervaringen en verschillende soorten logistieke jobs waarin je kunt werken',
      description:
        'Logistieke support voor events: op- en afbouw, transport en magazijn. SKWD levert de juiste studenten — op tijd, goed gebriefd, inzetklaar.',
      ogDescription:
        'SKWD voor logistiek personeel — opbouw, afbouw, warehouse & transport.',
      url: `${siteUrl}/nl/logistiek`,
    },
    en: {
      title: 'Logistics sector - SKWD',
      seoTitle: 'Logistics sector',
      ogTitle:
        'Logistics sector – Discover all the unique experiences and diverse jobs you could work in within logistics and events',
      description:
        'Discover our logistics services: from setup and dismantling to warehouse support, we place the right people in the right place.',
      ogDescription:
        'Explore SKWD, your Belgian partner for logistics staffing — setup, warehouse operations, and event logistics.',
      url: `${siteUrl}/en/logistics`,
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: `${siteUrl}/images/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD OpenGraph image',
  };

  const keywords =
    locale === 'fr'
      ? 'staffing étudiant, événementiel, logistique, hospitalité, jobs étudiants, agence de staffing, Belgique'
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
      locale,
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
        en: `${siteUrl}/en/logistics`,
        fr: `${siteUrl}/fr/logistique`,
        nl: `${siteUrl}/nl/logistiek`,
      },
    },
  };
}

export default function LogisticsPage() {
  return <LogisticsClient />;
}