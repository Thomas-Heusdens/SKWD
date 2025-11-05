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
  const siteUrl = 'https://skwd.vercel.app/';

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Questions fréquentes - SKWD',
      seoTitle: 'Questions fréquentes',
      ogTitle:
        'Questions fréquentes – Découvrez les réponses aux questions les plus posées par nos étudiants et partenaires',

      description:
        'Trouvez rapidement les réponses à vos questions sur le travail chez SKWD. Une question manquante ? Contactez-nous !',
      ogDescription:
        'Découvrez les réponses aux questions fréquentes sur SKWD, les jobs étudiants et le processus de recrutement.',
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
        'Find quick answers about working at SKWD. Don’t see your question? Feel free to contact us!',
      ogDescription:
        'Learn everything about SKWD student jobs, application process, and work planning.',
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