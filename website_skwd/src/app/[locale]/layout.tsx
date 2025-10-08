import I18nProvider from '@/components/I18nProvider';
import { languages } from "@/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title:
      locale === 'fr'
        ? 'Accueil - SKWD'
        : locale === 'nl'
        ? 'Startpagina - SKWD'
        : 'Home - SKWD',
    description:
      locale === 'fr'
        ? "Découvrez SKWD, l'agence belge qui relie étudiants motivés et entreprises pour des événements réussis."
        : locale === 'nl'
        ? "Ontdek SKWD, het Belgische bureau dat studenten en bedrijven verbindt voor succesvolle evenementen."
        : "Discover SKWD, the Belgian agency connecting motivated students and businesses for successful events.",
    openGraph: {
      title:
        locale === 'fr'
          ? 'Accueil - SKWD'
          : locale === 'nl'
          ? 'Startpagina - SKWD'
          : 'Home - SKWD',
      description:
        locale === 'fr'
          ? "Découvrez SKWD, votre partenaire pour des événements réussis en Belgique."
          : locale === 'nl'
          ? "Ontdek SKWD, jouw partner voor geslaagde evenementen in België."
          : "Discover SKWD, your partner for successful events in Belgium.",
      url: `https://skwd.be/${locale}`,
      siteName: 'SKWD',
      images: [
        {
          url: '/images/og-home.jpg',
          width: 1200,
          height: 630,
          alt: 'SKWD homepage preview',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SKWD - Connecting Students & Events',
      description: 'Discover SKWD, your event partner in Belgium.',
      images: ['/images/og-home.jpg'],
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