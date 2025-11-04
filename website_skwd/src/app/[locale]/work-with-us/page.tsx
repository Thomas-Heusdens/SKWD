import { languages } from '@/i18n/settings';
import WorkWithUsClient from './WorkClient';

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
      title: 'Travailler avec nous - SKWD',
      seoTitle: 'Travailler avec nous',
      ogTitle:
        "Travailler avec nous – Découvrez pourquoi collaborer avec les étudiants de SKWD est le bon choix pour vos événements",
      description:
        "Découvrez comment collaborer avec SKWD pour vos événements. Nous mettons en relation entreprises et étudiants motivés pour des missions de qualité.",
      ogDescription:
        "Travaillez avec SKWD — votre partenaire belge pour le staffing événementiel. Réservez des étudiants formés pour vos événements.",
      url: `${siteUrl}/fr/collaborer-avec-nous`,
    },
    nl: {
      title: 'Werk met ons - SKWD',
      seoTitle: 'Werk met ons',
      ogTitle:
        'Werk met ons – Ontdek waarom samenwerken met SKWD-studenten de juiste keuze is voor uw evenement',
      description:
        'Samenwerken met SKWD? We bouwen flexibele studententeams voor uw event of onderneming — van selectie en briefing tot nacalculatie.',
      ogDescription:
        'Werk met SKWD — Belgische partner voor event staffing op maat.',
      url: `${siteUrl}/nl/werk-met-ons`,
    },
    en: {
      title: 'Work with us - SKWD',
      seoTitle: 'Work with us',
      ogTitle:
        'Work with us – Discover why collaborating with SKWD students is the right choice for your event',
      description:
        'Discover how to collaborate with SKWD for your events. We connect motivated students with companies for efficient, high-quality staffing.',
      ogDescription:
        'Partner with SKWD — your trusted Belgian staffing agency connecting students and businesses for professional events.',
      url: `${siteUrl}/en/work-with-us`,
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
        en: `${siteUrl}/en/work-with-us`,
        fr: `${siteUrl}/fr/collaborer-avec-nous`,
        nl: `${siteUrl}/nl/werk-met-ons`,
      },
    },
  };
}

export default function WorkWithUsPage() {
  return <WorkWithUsClient />;
}