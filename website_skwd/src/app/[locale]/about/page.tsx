import AboutClient from './AboutClient';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return {
    title:
      locale === 'fr'
        ? 'À propos de nous'
        : locale === 'nl'
        ? 'Over ons'
        : 'About Us',
    description:
      locale === 'fr'
        ? "Découvrez qui nous sommes et comment notre équipe SKWD rend chaque événement unique."
        : locale === 'nl'
        ? "Kom meer te weten over ons en hoe het SKWD-team elk evenement uniek maakt."
        : "Learn more about us and how the SKWD team makes every event unique.",
  };
}

export default function AboutPage() {
  return <AboutClient />;
}