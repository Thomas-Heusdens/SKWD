'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Home } from 'lucide-react';

export default function NotFound() {
  const params = useParams();
  const localeParam = params?.locale;
  const locale: 'en' | 'fr' | 'nl' =
    localeParam === 'fr' ? 'fr' : localeParam === 'nl' ? 'nl' : 'en';

  const messages = {
    en: {
      title: 'Page not found',
      subtitle: "Oops! The page you're looking for doesn’t exist.",
      button: 'Back to home',
    },
    fr: {
      title: 'Page introuvable',
      subtitle: "Oups ! La page que vous cherchez n’existe pas.",
      button: 'Retour à l’accueil',
    },
    nl: {
      title: 'Pagina niet gevonden',
      subtitle: 'Oeps! De pagina die je zoekt bestaat niet.',
      button: 'Terug naar startpagina',
    },
  }[locale];

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center text-white bg-skwd-dark-blue px-6">

      <h1 className="text-5xl font-semibold mb-3 text-skwd-text-highlight">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">{messages.title}</h2>
      <p className="text-white/80 font-light mb-8">{messages.subtitle}</p>

      <Link
        href={`/${locale}`}
        className="flex items-center gap-2 bg-skwd-button px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        <Home className="w-5 h-5" />
        {messages.button}
      </Link>
    </main>
  );
}