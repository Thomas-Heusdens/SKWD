import { languages } from '@/i18n/settings';
import ContactClient from './ContactClient';

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
      title: 'Contactez-nous - SKWD',
      seoTitle: 'Contactez-nous',
      ogTitle:
        "Contactez-nous - N’attendez plus et envoyez-nous votre demande pour trouver des étudiants pour votre événement",
      description:
        "Vous organisez une fête, une réception ou un événement et cherchez des étudiants motivés ? Contactez SKWD — nous vous aidons rapidement.",
      ogDescription:
        "Contactez SKWD — des étudiants pour l’horeca, la logistique et les événements.",
      url: `${siteUrl}/fr/contactez-nous`,
    },
    nl: {
      title: 'Contacteer ons - SKWD',
      seoTitle: 'Contacteer ons',
      ogTitle:
        'Contacteer ons - Wacht niet langer en stuur ons uw aanvraag voor studenten op uw evenement',
      description:
        'Plant u een feest, receptie of event en zoekt u gemotiveerde studenten? Neem contact op met SKWD — wij helpen u snel verder.',
      ogDescription:
        'Contacteer SKWD — studenten voor horeca, logistiek en events.',
      url: `${siteUrl}/nl/contacteer-ons`,
    },
    en: {
      title: 'Contact us - SKWD',
      seoTitle: 'Contact us',
      ogTitle:
        "Contact us - Don't wait, send us your request for motivated students at your event",
      description:
        'Planning a party, reception, or event and looking for motivated students? Contact SKWD — we’ll help you right away.',
      ogDescription:
        'Contact SKWD — students for hospitality, logistics, and events.',
      url: `${siteUrl}/en/contact-us`,
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
        en: `${siteUrl}/en/contact-us`,
        fr: `${siteUrl}/fr/contactez-nous`,
        nl: `${siteUrl}/nl/contacteer-ons`,
      },
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}