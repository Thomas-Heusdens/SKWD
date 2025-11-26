import I18nProvider from '@/components/I18nProvider';
import { languages } from '@/i18n/settings';
import Navbar from '@/components/Navbar';
import { Barlow } from "next/font/google";
import OrientationWarning from '@/components/OrientationWarning';
import "@/app/globals.css";
import LayoutClient from '@/components/LayoutClient';

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800"],
  variable: "--font-barlow",
});

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
      seoTitle: 'Bienvenue chez SKWD – votre partenaire de staffing',
      ogTitle: 'Bienvenue chez SKWD – votre partenaire de staffing pour étudiants et flexi-jobs',
      description:
        "SKWD est votre partenaire de staffing fiable en Belgique pour les étudiants et les flexi-jobs. Jeune, dynamique et flexible.",
      ogDescription:
        "SKWD est votre partenaire fiable en Belgique pour les étudiants et les flexi-jobs. Jeune, dynamique et flexible.",
      url: `${siteUrl}/fr`,
    },
    nl: {
      title: 'Startpagina - SKWD',
      seoTitle: 'Welkom bij SKWD – jouw staffing partner',
      ogTitle: 'Welkom bij SKWD – jouw staffing partner voor studenten en flexis',
      description:
        'SKWD is jouw betrouwbare staffing partner in België voor studenten en flexi’s. Jong, dynamisch en flexibel.',
      ogDescription:
        'SKWD is jouw betrouwbare partner in België voor studenten en flexi’s. Jong, dynamisch en flexibel.',
      url: `${siteUrl}/nl`,
    },
    en: {
      title: 'Home - SKWD',
      seoTitle: 'Welcome to SKWD – your staffing partner',
      ogTitle: 'Welcome to SKWD – your staffing partner for students and flexi workers',
      description:
        'SKWD is your reliable staffing partner in Belgium for students and flexi workers. Young, dynamic, and flexible.',
      ogDescription:
        'SKWD is your reliable partner in Belgium for students and flexi workers. Young, dynamic, and flexible.',
      url: `${siteUrl}/en`,
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: `${siteUrl}/images/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD OpenGraph image',
  };

  const ogLocale =
    locale === 'fr' ? 'fr_BE'
    : locale === 'nl' ? 'nl_BE'
    : 'en';

  const keywords =
    locale === 'fr'
      ? 'staffing étudiant, événementiel, logistique, hospitalité, jobs étudiants, agence d\'intérim, Belgique'
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
      locale: ogLocale,
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
        'fr-BE': `${siteUrl}/fr`,
        'nl-BE': `${siteUrl}/nl`,
        en: `${siteUrl}/en`,
        'x-default': `${siteUrl}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${barlow.variable} antialiased`}>
        <Navbar />
        <OrientationWarning />

        <I18nProvider>
          <LayoutClient>{children}</LayoutClient>
        </I18nProvider>
      </body>
    </html>
  );
}