import I18nProvider from '@/components/I18nProvider';
import { languages } from '@/i18n/settings';

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
      title: 'Accueil - SKWD',
      seoTitle: 'Bienvenue chez SKWD – Agence d’intérim pour étudiants',
      ogTitle: 'Bienvenue chez SKWD – Agence d’intérim pour étudiants',
      description:
        "Découvrez SKWD, l'agence belge qui relie étudiants motivés et entreprises pour des événements réussis en Belgique.",
      ogDescription:
        "Découvrez SKWD, votre partenaire pour des événements réussis en Belgique. Une agence spécialisée dans le staffing événementiel étudiant.",
      url: `${siteUrl}/fr`,
    },
    nl: {
      title: 'Startpagina - SKWD',
      seoTitle: 'Welkom bij SKWD - Uitzendkantoor voor studenten',
      ogTitle: 'Welkom bij SKWD - Uitzendkantoor voor studenten',
      description:
        'Ontdek SKWD: wij verbinden gemotiveerde studenten met bedrijven voor feilloze events in België. Event staffing, hospitality en logistiek — snel geregeld.',
      ogDescription:
        'Ontdek SKWD — jouw partner voor event staffing met studenten in België.',
      url: `${siteUrl}/nl`,
    },
    en: {
      title: 'Home - SKWD',
      seoTitle: 'Welcome to SKWD – Student staffing agency',
      ogTitle: 'Welcome to SKWD – Student staffing agency',
      description:
        'Discover SKWD, the Belgian agency connecting motivated students and businesses for successful events across Belgium.',
      ogDescription:
        'SKWD is your partner for successful events in Belgium — connecting students and companies through reliable event staffing.',
      url: `${siteUrl}/en`,
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: `${siteUrl}/images/og-home.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD homepage preview image',
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
        en: `${siteUrl}/en`,
        fr: `${siteUrl}/fr`,
        nl: `${siteUrl}/nl`,
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
