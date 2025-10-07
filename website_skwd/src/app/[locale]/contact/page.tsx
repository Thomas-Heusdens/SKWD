import ContactClient from './ContactClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return {
    title:
      locale === 'fr'
        ? 'Contactez-nous'
        : locale === 'nl'
        ? 'Contacteer ons'
        : 'Contact Us',
    description:
      locale === 'fr'
        ? "Besoin d'aide ou de plus d'informations ? Contactez l'équipe SKWD dès aujourd'hui."
        : locale === 'nl'
        ? "Hulp nodig of meer informatie? Neem vandaag nog contact op met het SKWD-team."
        : "Need help or more information? Contact the SKWD team today.",
  };
}

export default function ContactPage() {
  return <ContactClient />;
}