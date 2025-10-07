import I18nProvider from '@/components/I18nProvider';
import { languages } from "@/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ locale: lng }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title:
      locale === "fr"
        ? "Accueil"
        : locale === "nl"
        ? "Startpagina"
        : "Home",
    description:
      locale === 'fr'
        ? "Découvrez SKWD, votre partenaire événementiel en Belgique. Nous connectons étudiants et entreprises pour des événements réussis."
        : locale === 'nl'
        ? "Ontdek SKWD, jouw eventpartner in België. Wij verbinden studenten en bedrijven voor succesvolle evenementen."
        : "Discover SKWD, your event partner in Belgium. We connect students and companies for successful events.",
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nProvider>{children}</I18nProvider>;
}
