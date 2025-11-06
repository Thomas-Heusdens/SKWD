import { languages } from '@/i18n/settings';
import FaqClient from './FaqClient';

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
      title: 'Questions fréquentes - SKWD',
      seoTitle: 'Questions fréquentes',
      ogTitle:
        'Questions fréquentes – Découvrez les réponses aux questions les plus posées par nos étudiants et partenaires',
      description:
        'Des réponses à vos questions sur le travail chez SKWD : inscription, planning, rémunération et support. Votre question ne s’y trouve pas ? N’hésitez pas à nous contacter.',
      ogDescription:
        'FAQ : tout sur les jobs étudiants chez SKWD — candidature, planning, travail.',
      url: `${siteUrl}/fr/faq`,
    },
    nl: {
      title: 'Veelgestelde vragen - SKWD',
      seoTitle: 'Veelgestelde vragen',
      ogTitle:
        'Veelgestelde vragen – Ontdek de antwoorden op de vragen die studenten en bedrijven het vaakst stellen',
      description:
        'Antwoorden op je vragen over werken bij SKWD: inschrijven, planning, verloning en support. Staat je vraag er niet bij? Neem gerust contact op.',
      ogDescription:
        'FAQ: alles over studentjobs bij SKWD — solliciteren, planning, werken.',
      url: `${siteUrl}/nl/veelgestelde-vragen`,
    },
    en: {
      title: 'Frequently asked questions - SKWD',
      seoTitle: 'Frequently asked questions',
      ogTitle:
        'Frequently asked questions – Find out what our users ask most and learn more about working with SKWD',
      description:
        'Answers to your questions about working at SKWD: registration, scheduling, payment, and support. Don’t see your question listed? Feel free to contact us.',
      ogDescription:
        'FAQ: everything about student jobs at SKWD — applying, scheduling, working.',
      url: `${siteUrl}/en/faq`,
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
        en: `${siteUrl}/en/faq`,
        fr: `${siteUrl}/fr/faq`,
        nl: `${siteUrl}/nl/veelgestelde-vragen`,
      },
    },
  };
}

export default function FaqPage() {
  return <FaqClient />;
}