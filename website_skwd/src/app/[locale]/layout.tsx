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
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nProvider>{children}</I18nProvider>;
}
