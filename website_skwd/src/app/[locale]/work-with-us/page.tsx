import WorkClient from './WorkClient';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return {
    title:
      locale === 'fr'
        ? 'Collaborez avec nous'
        : locale === 'nl'
        ? 'Werk met ons samen'
        : 'Work with us',
    description:
      locale === 'fr'
        ? "Besoin d'étudiant au bon endroit et au bon moment ? Contactez l'équipe SKWD pour organiser des événements sans accroc avec des étudiants motivés!"
        : locale === 'nl'
        ? "Studenten nodig op de juiste plaats en het juiste moment? Neem contact op met het SKWD-team om vlekkeloze evenementen te organiseren met gemotiveerde studenten!"
        : "Need students at the right place and the right time? Contact the SKWD team to organize seamless events with motivated students!",
  };
}

export default function WorkPage() {
  return <WorkClient />;
}