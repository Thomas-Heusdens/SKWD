import HospitalityClient from './HospitalityClient';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return {
    title:
      locale === 'fr'
        ? 'Hospitalité'
        : locale === 'nl'
        ? 'Hospitality'
        : 'Hospitality',
    description:
      locale === 'fr'
        ? "Découvrez nos services d'hospitalité. Contactez l'équipe SKWD pour organiser des expériences inoubliables avec des étudiants motivés!"
        : locale === 'nl'
        ? "Ontdek onze hospitality-diensten. Neem contact op met het SKWD-team om onvergetelijke ervaringen te organiseren met gemotiveerde studenten!"
        : "Discover our hospitality services. Contact the SKWD team to organize unforgettable experiences with motivated students!",
  };
}

export default function HospitalityPage() {
  return <HospitalityClient />;
}