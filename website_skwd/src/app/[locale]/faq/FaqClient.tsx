'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';
import Image from 'next/image';

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

  const siteUrl = 'https://skwd.vercel.app';
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
    alternateName: 'SKWD Staffing',
    url: siteUrl,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Tommy Ulens',
    },
    description:
      locale === 'fr'
        ? 'SKWD – Agence de staffing étudiant reliant des étudiants motivés et des entreprises pour des événements réussis en Belgique.'
        : locale === 'nl'
        ? 'SKWD – Uitzendkantoor voor studenten dat gemotiveerde studenten en bedrijven verbindt voor succesvolle evenementen in België.'
        : 'SKWD – Student staffing agency connecting motivated students with professional events and businesses across Belgium.',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 2,
      maxValue: 10,
    },
    knowsAbout:
      locale === 'fr'
        ? [
            "Événementiel",
            "Logistique",
            "Hospitalité",
            "Jobs étudiants",
            "Staffing d'événements",
            "Service de catering",
            "Travail étudiant en Belgique"
          ]
        : locale === 'nl'
        ? [
            "Evenementenwerk",
            "Logistiek",
            "Hospitality",
            "Studentenjobs",
            "Event staffing",
            "Cateringdiensten",
            "Studentenwerk in België"
          ]
        : [
            "Event staffing",
            "Logistics",
            "Hospitality",
            "Student jobs",
            "Catering services",
            "Student staffing in Belgium"
          ],
    areaServed: 'BE',
    email: 'info@skwd.be',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Picard 7/204',
      addressLocality: 'Brussels',
      postalCode: '1000',
      addressCountry: 'BE',
    },
    logo: `${siteUrl}/Logo.jpg`,
    sameAs: [
      'https://www.linkedin.com/company/skwd-staffing/',
      'https://www.instagram.com/skwd.be/?hl=en',
      'https://www.facebook.com/people/SKWD/61562389827787/',
      'https://maps.app.goo.gl/pXp9tQXUyUNWhmJp6',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+32 456 82 45 51',
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
    mainEntityOfPage: { '@id': `${siteUrl}/#organization` },
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
            ? 'Qu’est-ce que SKWD ?'
            : locale === 'nl'
            ? 'Wat is SKWD?'
            : 'What is SKWD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? "SKWD est une agence d’intérim dynamique spécialisée dans la mise en relation d’étudiants motivés avec des emplois dans les secteurs de l’hospitalité et de la logistique."
              : locale === 'nl'
              ? 'SKWD is een dynamisch uitzendbureau dat studenten koppelt aan uiteenlopende jobs binnen de hospitality- en logistieke sector.'
              : 'SKWD is a dynamic staffing agency focused on connecting motivated students with job opportunities in the hospitality and logistics sectors.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Quels types d’événements proposez-vous ?'
            : locale === 'nl'
            ? 'Welke soorten evenementen?'
            : 'What types of events do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Nous collaborons avec des festivals, mariages, événements d’entreprise, conférences et événements sportifs. Nous proposons aussi des postes comme chauffeur, order picker, parking boy, steward ou équipe de montage et démontage.'
              : locale === 'nl'
              ? 'We werken samen met festivals, huwelijken, bedrijfsevenementen, conferenties en sportevenementen. Ook functies zoals chauffeur, orderpicker, parkingboy, steward en op- en afbouw van evenementen komen vaak voor.'
              : 'We collaborate with festivals, weddings, corporate events, conferences, and sports events. We also offer positions such as driver, order picker, parking attendant, steward, and event setup or teardown crew.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Dans quelles villes êtes-vous actifs ?'
            : locale === 'nl'
            ? 'In welke steden zijn jullie actief?'
            : 'In which cities are you active?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Nos bureaux sont situés à Bruxelles et à Anvers, mais nos missions couvrent toute la Belgique et parfois même les pays voisins.'
              : locale === 'nl'
              ? 'Onze kantoren bevinden zich in Brussel en Antwerpen, maar onze opdrachten vinden plaats in heel België en soms zelfs in de buurlanden.'
              : 'Our offices are based in Brussels and Antwerp, but our events take place all across Belgium and sometimes even in neighboring countries.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Comment puis-je m’inscrire ?'
            : locale === 'nl'
            ? 'Hoe kan ik mij registreren?'
            : 'How can I register?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Rendez-vous sur https://jobs.skwd.be/studentenjob et suivez les étapes simples pour créer votre profil.'
              : locale === 'nl'
              ? 'Ga naar https://jobs.skwd.be/studentenjob en volg de eenvoudige stappen om je profiel aan te maken.'
              : 'Visit https://jobs.skwd.be/studentenjob and follow the simple steps to create your profile.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Quels documents sont nécessaires ?'
            : locale === 'nl'
            ? 'Welke documenten heb ik nodig?'
            : 'Which documents are required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Un simple CV suffit — l’inscription ne prend que quelques minutes.'
              : locale === 'nl'
              ? 'Enkel je CV! De registratie duurt maar enkele minuten.'
              : 'Just your CV — the registration only takes a few minutes.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Que se passe-t-il après la candidature ?'
            : locale === 'nl'
            ? 'Wat gebeurt er na de sollicitatie?'
            : 'What happens after applying?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Après votre candidature, vous serez invité(e) à une séance d’information. Pour le secteur de l’horeca, une courte formation est ensuite organisée dans nos bureaux, tandis qu’aucune formation n’est requise pour le secteur logistique. Nos séances d’information suivent un cycle fixe : Semaine 1 – Lundi (Infosession Bruxelles), Mardi (Formation Bruxelles), Mercredi (Infosession + Formation Anvers). Semaine 2 – Lundi (Infosession Bruxelles), Mardi (Infosession Malines), Mercredi (Infosession Anvers). Le cycle se répète ensuite en continu.'
              : locale === 'nl'
              ? 'Na je sollicitatie word je uitgenodigd voor een infosessie. Voor de horecasector volgt daarna een korte opleiding op kantoor, terwijl dit voor de logistieke sector niet nodig is. Onze infosessies volgen een vast schema: Week 1 – Maandag (Infosessie Brussel), Dinsdag (Opleiding Brussel), Woensdag (Infosessie + Opleiding Antwerpen). Week 2 – Maandag (Infosessie Brussel), Dinsdag (Infosessie Mechelen), Woensdag (Infosessie Antwerpen). Daarna herhaalt het schema zich voortdurend.'
              : 'After applying, you’ll be invited to an information session. For the hospitality sector, a short in-office training follows, while no training is required for the logistics sector. Our information sessions follow a recurring schedule: Week 1 – Monday (Brussels Info Session), Tuesday (Brussels Training), Wednesday (Antwerp Info + Training). Week 2 – Monday (Brussels Info Session), Tuesday (Mechelen Info Session), Wednesday (Antwerp Info Session). This schedule then repeats continuously.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Quel est l’âge minimum pour postuler ?'
            : locale === 'nl'
            ? 'Wat is de minimumleeftijd?'
            : 'What is the minimum age?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Il faut avoir au moins 18 ans pour postuler.'
              : locale === 'nl'
              ? 'Je moet minstens 18 jaar oud zijn om te kunnen solliciteren.'
              : 'You must be at least 18 years old to apply.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Faut-il de l’expérience ?'
            : locale === 'nl'
            ? 'Is ervaring verplicht?'
            : 'Do I need experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Non, aucune expérience n’est requise — une formation est prévue pour les nouveaux candidats.'
              : locale === 'nl'
              ? 'Nee, ervaring is niet verplicht — je krijgt vooraf een korte opleiding.'
              : 'No, experience is not required — we provide the necessary training for new candidates.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Quelle est la flexibilité du travail ?'
            : locale === 'nl'
            ? 'Hoe flexibel is het werk?'
            : 'How flexible is the work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Vous choisissez vous-même où et quand vous travaillez.'
              : locale === 'nl'
              ? 'Je kiest zelf wanneer en waar je werkt — maximale flexibiliteit.'
              : 'You’re in control — choose when and where you want to work.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Comment annuler ou modifier un shift ?'
            : locale === 'nl'
            ? 'Hoe kan ik een shift annuleren of wijzigen?'
            : 'How can I cancel or change a shift?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Veuillez prévenir votre planificateur au moins 24 heures à l’avance en cas d’annulation ou de changement.'
              : locale === 'nl'
              ? 'Verwittig je planner minstens 24 uur op voorhand als je een shift wilt annuleren of aanpassen.'
              : 'Please notify your planner at least 24 hours in advance if you need to cancel or modify a shift.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Comment postuler à un shift ?'
            : locale === 'nl'
            ? 'Hoe solliciteer ik voor een shift?'
            : 'How do I apply for a shift?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Tout se fait via notre application partenaire Beeple. Nous créons ensemble votre compte lors de la séance d’information.'
              : locale === 'nl'
              ? 'Alles verloopt via onze Beeple-app. Tijdens de infosessie maken we samen je account aan.'
              : 'All scheduling happens through the Beeple app. We’ll help you create your account during the information session.',
        },
      },
      {
        '@type': 'Question',
        name:
          locale === 'fr'
            ? 'Puis-je travailler chez SKWD en tant que flexi-job ?'
            : locale === 'nl'
            ? 'Kan ik ook als flexi bij SKWD werken?'
            : 'Can I work at SKWD as a flexi-job employee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            locale === 'fr'
              ? 'Oui, bien sûr ! Chez SKWD, nous collaborons avec différents statuts : flexi-jobs, étudiants et étudiants indépendants. Toute personne motivée est la bienvenue dans notre équipe.'
              : locale === 'nl'
              ? 'Ja, zeker! Bij SKWD werken we met verschillende statuten: flexi-jobbers, studenten en zelfstandige studenten. Iedereen met de juiste motivatie is welkom om deel uit te maken van ons team.'
              : 'Absolutely! At SKWD, we work with various profiles — flexi-job workers, students, and self-employed students. Anyone motivated is welcome to join our team.',
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
      question: t('faq_q_flexi_possible'),
      answer: t('faq_a_flexi_possible'),
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
      question: t('faq_q_after_application'),
      answer: t('faq_a_after_application'),
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
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
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
            <p className="md:max-w-xl max-w-xs text-white/90 font-light text-sm md:text-base">
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