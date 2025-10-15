import I18nProvider from '@/components/I18nProvider';
import { languages } from '@/i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Accueil - SKWD',
      description:
        "Découvrez SKWD, l'agence belge qui relie étudiants motivés et entreprises pour des événements réussis en Belgique.",
      ogDescription:
        "Découvrez SKWD, votre partenaire pour des événements réussis en Belgique. Une agence spécialisée dans le staffing événementiel étudiant.",
      url: 'https://skwd.be/fr',
    },
    nl: {
      title: 'Startpagina - SKWD',
      description:
        'Ontdek SKWD, het Belgische bureau dat studenten en bedrijven verbindt voor succesvolle evenementen in België.',
      ogDescription:
        'Ontdek SKWD, jouw partner voor geslaagde evenementen in België. Gespecialiseerd in studentenevenementen en staffing.',
      url: 'https://skwd.be/nl',  
    },
    en: {
      title: 'Home - SKWD',
      description:
        'Discover SKWD, the Belgian agency connecting motivated students and businesses for successful events across Belgium.',
      ogDescription:
        'SKWD is your partner for successful events in Belgium — connecting students and companies through reliable event staffing.',
      url: 'https://skwd.be/en',
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: '/images/og-home.jpg',
    width: 1200,
    height: 630,
    alt: 'SKWD homepage preview image',
  };

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: `https://skwd.be/${locale}`,
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
      canonical: `https://skwd.be/${locale}`,
      languages: {
        en: 'https://skwd.be/en',
        fr: 'https://skwd.be/fr',
        nl: 'https://skwd.be/nl',
      },
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nProvider>{children}</I18nProvider>;
}