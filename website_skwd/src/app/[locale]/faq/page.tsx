import { languages } from '@/i18n/settings';
import FaqClient from './FaqClient';

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Questions fréquentes - SKWD',
      description:
        'Trouvez rapidement les réponses à vos questions sur le travail chez SKWD. Une question manquante? Contactez-nous!',
      ogDescription:
        'Découvrez les réponses aux questions fréquentes sur SKWD, les jobs étudiants et le processus de recrutement.',
      url: 'https://skwd.be/fr/faq',
    },
    nl: {
      title: 'Veelgestelde vragen - SKWD',
      description:
        'Vind snel antwoorden op je vragen over werken bij SKWD. Staat je vraag er niet bij? Neem gerust contact met ons op!',
      ogDescription:
        'Ontdek antwoorden op veelgestelde vragen over SKWD, student jobs, sollicitatie en werkplanning.',
      url: 'https://skwd.be/nl/veelgestelde-vragen',
    },
    en: {
      title: 'Frequently Asked Questions - SKWD',
      description:
        'Find quick answers about working at SKWD. Don’t see your question? Feel free to contact us!',
      ogDescription:
        'Learn everything about SKWD student jobs, application process, and work planning.',
      url: 'https://skwd.be/en/faq',
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;
  const siteUrl = 'https://skwd.be';

  const ogImage = {
    url: `${siteUrl}/images/og-faq.png`,
    width: 1200,
    height: 630,
    alt: 'FAQ SKWD preview image',
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
        en: 'https://skwd.be/en/faq',
        fr: 'https://skwd.be/fr/faq',
        nl: 'https://skwd.be/nl/veelgestelde-vragen',
      },
    },
  };
}

export default function FaqPage() {
  return <FaqClient />;
}