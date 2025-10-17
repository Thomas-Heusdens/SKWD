import { languages } from '@/i18n/settings';
import AboutClient from './AboutClient';

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'À propos de nous - SKWD',
      description:
        "Découvrez qui nous sommes et comment l'équipe SKWD relie étudiants motivés et entreprises pour des événements réussis en Belgique.",
      ogDescription:
        "Découvrez SKWD : une agence belge spécialisée dans le staffing événementiel et la mise en relation entre étudiants et entreprises.",
      url: 'https://skwd.be/fr/a-propos',
    },
    nl: {
      title: 'Over ons - SKWD',
      description:
        'Kom meer te weten over ons en hoe het SKWD-team studenten en bedrijven verbindt voor succesvolle evenementen in België.',
      ogDescription:
        'Ontdek SKWD: een Belgisch bureau dat zich richt op event staffing en het verbinden van studenten en bedrijven.',
      url: 'https://skwd.be/nl/over-ons',
    },
    en: {
      title: 'About Us - SKWD',
      description:
        'Learn more about SKWD and how our team connects motivated students and businesses for successful events across Belgium.',
      ogDescription:
        'Discover SKWD: a Belgian event staffing agency connecting students and businesses for unforgettable experiences.',
      url: 'https://skwd.be/en/about-us',
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;
  const siteUrl = 'https://skwd.be';

  const ogImage = {
    url: `${siteUrl}/images/og-about.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD About Us preview image',
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
        en: 'https://skwd.be/en/about-us',
        fr: 'https://skwd.be/fr/a-propos',
        nl: 'https://skwd.be/nl/over-ons',
      },
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}