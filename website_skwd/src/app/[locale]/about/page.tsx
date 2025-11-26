import { languages } from '@/i18n/settings';
import AboutClient from './AboutClient';

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
      title: 'À propos de nous - SKWD',
      seoTitle: 'À propos',
      ogTitle: 'À propos - Découvrez notre équipe et la force qui fait le succès de SKWD',
      description:
        "Découvrez SKWD : une agence belge qui met en relation étudiants et entreprises pour des équipes d’événements, d’hospitalité et de logistique, de la sélection au briefing.",
      ogDescription:
        "SKWD : agence belge de staffing événementiel — nous relions les étudiants et les entreprises.",
      url: `${siteUrl}/fr/a-propos`,
    },
    nl: {
      title: 'Over ons - SKWD',
      seoTitle: 'Over ons',
      ogTitle: 'Over ons - Ontmoet ons team en ontdek waarom elk lid onmisbaar is voor SKWD',
      description:
        'Leer SKWD kennen: Belgisch agency dat studenten en bedrijven samenbrengt voor event-, hospitality- en logistieke teams, van selectie tot briefing.',
      ogDescription:
        'SKWD: Belgisch bureau voor event staffing — wij verbinden studenten en bedrijven.',
      url: `${siteUrl}/nl/over-ons`,
    },
    en: {
      title: 'About Us - SKWD',
      seoTitle: 'About us',
      ogTitle: 'About us - Meet our team and discover the people driving SKWD’s success',
      description:
        'Get to know SKWD: a Belgian agency that connects students and businesses for event, hospitality, and logistics teams — from selection to briefing.',
      ogDescription:
        'SKWD: Belgian event staffing agency — we connect students and companies.',
      url: `${siteUrl}/en/about-us`,
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
        en: `${siteUrl}/en/about-us`,
        fr: `${siteUrl}/fr/a-propos`,
        nl: `${siteUrl}/nl/over-ons`,
        'x-default': siteUrl,
      },
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}