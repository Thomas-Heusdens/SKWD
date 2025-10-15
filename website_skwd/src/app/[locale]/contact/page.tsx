import ContactClient from './ContactClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    nl: {
      title: 'Contactformulier - SKWD',
      description:
        'Heeft u binnenkort een feest, receptie of evenement en zoekt u enthousiaste studenten? Neem via deze pagina contact op met ons team.',
      ogDescription:
        'Neem contact op met SKWD — wij helpen u met gemotiveerde studenten voor horeca, logistiek en evenementen.',
      url: 'https://skwd.be/nl/contacteer-ons',
    },
    fr: {
      title: 'Formulaire de contact - SKWD',
      description:
        "Vous organisez un événement et recherchez des étudiants motivés ? Contactez notre équipe via cette page.",
      ogDescription:
        "Contactez SKWD — votre partenaire pour le personnel étudiant en logistique, horeca et événements.",
      url: 'https://skwd.be/fr/contactez-nous',
    },
    en: {
      title: 'Contact Form - SKWD',
      description:
        'Organizing an event or reception? Contact SKWD to find enthusiastic students for your team.',
      ogDescription:
        'Contact SKWD — your Belgian staffing partner for hospitality and logistics support.',
      url: 'https://skwd.be/en/contact-us',
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: '/images/og-contact.jpg',
    width: 1200,
    height: 630,
    alt: 'SKWD contact form preview',
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
        en: 'https://skwd.be/en/contact-us',
        fr: 'https://skwd.be/fr/contactez-nous',
        nl: 'https://skwd.be/nl/contacteer-ons',
      },
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
