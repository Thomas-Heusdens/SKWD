import LogisticsClient from './LogisticsClient';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return {
    title:
      locale === 'fr'
        ? 'Logistique'
        : locale === 'nl'
        ? 'Logistiek'
        : 'Logistics',
    description:
      locale === 'fr'
        ? "Découvrez nos services de logistique. Contactez l'équipe SKWD pour organiser des événements sans faille avec des étudiants motivés!"
        : locale === 'nl'
        ? "Ontdek onze logistieke diensten. Neem contact op met het SKWD-team om vlekkeloze evenementen te organiseren met gemotiveerde studenten!"
        : "Discover our logistics services. Contact the SKWD team to organize seamless events with motivated students!",
  };
}

export default function LogisticsPage() {
  return <LogisticsClient />;
}