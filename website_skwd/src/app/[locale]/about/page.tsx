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
  const siteUrl = 'https://skwd.vercel.app';

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'À propos de nous - SKWD',
      seoTitle: 'À propos',
      ogTitle: 'À propos - Découvrez notre équipe et la force qui fait le succès de SKWD',
      description:
        "Découvrez qui nous sommes et comment l'équipe SKWD relie étudiants motivés et entreprises pour des événements réussis en Belgique.",
      ogDescription:
        "Plongez dans les coulisses de SKWD : une équipe passionnée qui fait le lien entre étudiants motivés et entreprises ambitieuses pour des événements inoubliables.",
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
        'Learn more about SKWD and how our team connects motivated students and businesses for successful events across Belgium.',
      ogDescription:
        'Get to know the SKWD team — the passionate individuals connecting students and companies to create unforgettable event experiences.',
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
        en: `${siteUrl}/en/about-us`,
        fr: `${siteUrl}/fr/a-propos`,
        nl: `${siteUrl}/nl/over-ons`,
      },
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}