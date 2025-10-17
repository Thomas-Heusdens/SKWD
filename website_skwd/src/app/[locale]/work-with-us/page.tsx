import { languages } from '@/i18n/settings';
import WorkWithUsClient from './WorkClient';

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Travailler avec nous - SKWD',
      description:
        "Découvrez comment collaborer avec SKWD pour vos événements. Nous mettons en relation entreprises et étudiants motivés pour des missions de qualité.",
      ogDescription:
        "Travaillez avec SKWD — votre partenaire belge pour le staffing événementiel. Réservez des étudiants formés pour vos événements.",
      url: 'https://skwd.be/fr/collaborer-avec-nous',
    },
    nl: {
      title: 'Werk met ons - SKWD',
      description:
        'Ontdek hoe uw bedrijf met SKWD kan samenwerken voor evenementen. Wij verbinden ondernemingen met gemotiveerde studenten.',
      ogDescription:
        'Werk samen met SKWD — uw Belgische partner voor event staffing en studentenjobs op maat van uw bedrijf.',
      url: 'https://skwd.be/nl/werk-met-ons',
    },
    en: {
      title: 'Work with us - SKWD',
      description:
        'Discover how to collaborate with SKWD for your events. We connect motivated students with companies for efficient, high-quality staffing.',
      ogDescription:
        'Partner with SKWD — your trusted Belgian staffing agency connecting students and businesses for professional events.',
      url: 'https://skwd.be/en/work-with-us',
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;
  const siteUrl = 'https://skwd.be';

  const ogImage = {
    url: `${siteUrl}/images/og-workwithus.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD Work With Us preview image',
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
        en: 'https://skwd.be/en/work-with-us',
        fr: 'https://skwd.be/fr/collaborer-avec-nous',
        nl: 'https://skwd.be/nl/werk-met-ons',
      },
    },
  };
}

export default function WorkWithUsPage() {
  return <WorkWithUsClient />;
}