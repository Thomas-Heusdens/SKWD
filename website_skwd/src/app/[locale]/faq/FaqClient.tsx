'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

interface Question {
  question: string;
  answer: string;
  category: string;
}

export default function FaqClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath)
      ? (localeFromPath as 'en' | 'fr' | 'nl')
      : 'en';

  const siteUrl = 'https://skwd.be';
  const pageUrl =
    locale === 'fr'
      ? `${siteUrl}/fr/faq`
      : locale === 'nl'
      ? `${siteUrl}/nl/veelgestelde-vragen`
      : `${siteUrl}/en/faq`;

  // --- Organization ---
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'SKWD',
    url: siteUrl,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Tommy Ulens'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Picard 7/ 204',
      addressLocality: 'Brussels',
      postalCode: '1000',
      addressCountry: 'BE'
    },
    logo: `${siteUrl}/images/logo-dark.png`,
    sameAs: [
      'https://www.linkedin.com/company/skwd-staffing/',
      'https://www.instagram.com/skwd.be/?hl=en',
      'https://www.facebook.com/people/SKWD/61562389827787/',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+32 476 02 64 39',
        areaServed: 'BE',
        availableLanguage: ['English', 'French', 'Dutch'],
      },
    ],
  };

  // --- WebSite ---
  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'SKWD',
    inLanguage: locale,
    publisher: { '@id': `${siteUrl}/#organization` },
  };

  // --- FAQPage ---
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faqpage`,
    url: pageUrl,
    headline:
      locale === 'fr'
        ? 'Questions fréquentes'
        : locale === 'nl'
        ? 'Veelgestelde vragen'
        : 'Frequently asked questions',
    name:
      locale === 'fr'
        ? 'Questions fréquentes - SKWD'
        : locale === 'nl'
        ? 'Veelgestelde vragen - SKWD'
        : 'Frequently asked questions - SKWD',
    description:
      locale === 'fr'
        ? 'Trouvez rapidement les réponses à vos questions sur le travail chez SKWD. Une question manquante? Contactez-nous!'
        : locale === 'nl'
        ? 'Vind snel antwoorden op je vragen over werken bij SKWD. Staat je vraag er niet bij? Neem gerust contact met ons op!'
        : 'Find quick answers about working at SKWD. Don’t see your question? Feel free to contact us!',
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: [
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Comment puis-je postuler chez SKWD ?'
            : locale === 'nl'
            ? 'Hoe kan ik solliciteren bij SKWD?'
            : 'How can I apply at SKWD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Vous pouvez postuler directement via notre formulaire en ligne.'
              : locale === 'nl'
              ? 'Je kunt direct solliciteren via ons online formulier.'
              : 'You can apply directly through our online form.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Quels types de jobs proposez-vous ?'
            : locale === 'nl'
            ? 'Welke soorten jobs bieden jullie aan?'
            : 'What types of jobs do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? "Nous proposons des postes dans les secteurs de l'hospitalité, de la logistique et des événements."
              : locale === 'nl'
              ? 'Wij bieden functies aan binnen hospitality, logistiek en evenementen.'
              : 'We offer positions in hospitality, logistics, and events.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Les jobs sont-ils adaptés aux étudiants ?'
            : locale === 'nl'
            ? 'Zijn de jobs geschikt voor studenten?'
            : 'Are the jobs suitable for students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Oui, SKWD se spécialise dans les jobs étudiants flexibles adaptés à vos horaires.'
              : locale === 'nl'
              ? 'Ja, SKWD is gespecialiseerd in flexibele studentenjobs die passen bij jouw planning.'
              : 'Yes, SKWD specializes in flexible student jobs that fit your schedule.',
        },
      },
    ],
    inLanguage: locale,
  };

  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqs: Question[] = [
    {
      category: t('faq_category_general'),
      question: t('faq_q_what_is_skwd'),
      answer: t('faq_a_what_is_skwd'),
    },
    {
      category: t('faq_category_general'),
      question: t('faq_q_events_types'),
      answer: t('faq_a_events_types'),
    },
    {
      category: t('faq_category_general'),
      question: t('faq_q_cities_active'),
      answer: t('faq_a_cities_active'),
    },

    {
      category: t('faq_category_registration'),
      question: t('faq_q_register'),
      answer: t('faq_a_register'),
    },
    {
      category: t('faq_category_registration'),
      question: t('faq_q_documents'),
      answer: t('faq_a_documents'),
    },
    {
      category: t('faq_category_registration'),
      question: t('faq_q_minimum_age'),
      answer: t('faq_a_minimum_age'),
    },
    {
      category: t('faq_category_registration'),
      question: t('faq_q_experience'),
      answer: t('faq_a_experience'),
    },

    {
      category: t('faq_category_work'),
      question: t('faq_q_flexibility'),
      answer: t('faq_a_flexibility'),
    },
    {
      category: t('faq_category_work'),
      question: t('faq_q_shift_change'),
      answer: t('faq_a_shift_change'),
    },
    {
      category: t('faq_category_work'),
      question: t('faq_q_register_shift'),
      answer: t('faq_a_register_shift'),
    },
  ];

  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organization, webSite, faqPage]),
        }}
      />
      <main id="main-content">
        <header
          id="faq-hero"
          aria-label="Veelgestelde vragen hero"
          className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center text-white py-16"
        >
          <div className="absolute inset-0 -z-10 opacity-10">
            <img
              src="/images/pattern-bg.png"
              alt="Pattern background"
              className="w-full h-full object-cover"
            />
          </div>
          <AnimatedContent distance={40} duration={1.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-center">
              {(() => {
                const words = t('faq_title').split(' ');
                return (
                  <>
                    <span className="text-white">{words.slice(0, -1).join(' ')}</span>{' '}
                    <span className="text-skwd-text-highlight">{words.slice(-1).join(' ')}</span>
                  </>
                );
              })()}
            </h1>
          </AnimatedContent>
          <AnimatedContent distance={40} duration={1.2} delay={0.3}>
            <p className="max-w-xl text-white/90 font-light text-sm md:text-base">
              {t('faq_description')}
            </p>
          </AnimatedContent>
        </header>

        {/* ===== FAQ SECTION ===== */}
        <section
          id="faq-section"
          aria-labelledby="faq-heading"
          className="pt-14 md:pt-20 pb-6 md:pb-10 bg-skwd-dark-blue text-white"
        >
          <div className="section-container max-w-3xl mx-auto">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <AnimatedContent distance={30} duration={1.2} direction='horizontal'>
                  <h2
                    id={`faq-${category}`}
                    className="text-2xl md:text-3xl font-semibold mb-4"
                  >
                    {(() => {
                      const words = category.split(' ');
                      return (
                        <>
                          <span className="text-white">{words.slice(0, -1).join(' ')}</span>{' '}
                          <span className="text-skwd-text-highlight">{words.slice(-1).join(' ')}</span>
                        </>
                      );
                    })()}
                  </h2>
                </AnimatedContent>
                <div className="border-t border-skwd-text-highlight/50 mb-6" />

                <div role="list">
                  {faqs
                    .filter((f) => f.category === category)
                    .map(({ question, answer }) => {
                      const isOpen = openQuestion === question;
                      return (
                        <article
                          key={question}
                          className="border-b border-white/10"
                          role="listitem"
                        >
                          <header
                            className="flex justify-between items-center py-4 cursor-pointer"
                            onClick={() =>
                              setOpenQuestion(isOpen ? null : question)
                            }
                          >
                            <AnimatedContent distance={40} duration={1.2} delay={0.1} direction='horizontal'>
                              <h3 className="text-base sm:text-lg font-medium">
                                {question}
                              </h3>
                            </AnimatedContent>
                            <AnimatedContent distance={10} duration={1.2} delay={0.1} reverse>
                              <ChevronDown
                                className={`w-5 h-5 transition-transform ${
                                  isOpen ? 'rotate-180 text-skwd-text-highlight' : ''
                                }`}
                              />
                            </AnimatedContent>
                          </header>
                          {isOpen && (
                            <p className="pb-4 text-sm md:text-base text-white/80 font-light leading-relaxed">
                              {answer}
                            </p>
                          )}
                        </article>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}