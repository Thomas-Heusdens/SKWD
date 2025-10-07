import FaqClient from './FaqClient';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return {
    title:
      locale === 'fr'
        ? 'Foire aux questions'
        : locale === 'nl'
        ? 'Veelgestelde vragen'
        : 'Frequently Asked Questions',
    description:
      locale === 'fr'
        ? "Des questions? Consultez la FAQ de SKWD pour trouver des réponses aux questions courantes."
        : locale === 'nl'
        ? "Vragen? Bekijk de FAQ van SKWD voor antwoorden op veelgestelde vragen."
        : "Questions? Check out SKWD's FAQ for answers to common questions.",
  };
}

export default function FaqPage() {
  return <FaqClient />;
}