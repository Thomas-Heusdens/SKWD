'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import { Building2, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import useHideDescription from '@/hooks/useHideDescription';
import AnimatedContent from '@/components/AnimatedContent';

export default function HomePage() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' = ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';
  const hideDescription = useHideDescription();

  // --- JSON-LD: build absolute URLs and localized page URL
  const siteUrl = 'https://skwd.be';
  const pageUrl =
    locale === 'en' ? `${siteUrl}/en`
    : locale === 'fr' ? `${siteUrl}/fr`
    : `${siteUrl}/nl`;

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
        ? 'Agence d\'intérim étudiant reliant des étudiants motivés et des entreprises pour des événements réussis en Belgique.'
        : locale === 'nl'
        ? 'Uitzendkantoor voor studenten dat gemotiveerde studenten en bedrijven verbindt voor succesvolle evenementen in België.'
        : 'Student staffing agency connecting motivated students with professional events and businesses across Belgium.',
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
    publisher: { '@id': `${siteUrl}/#organization` }
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,

    headline:
      locale === 'fr'
        ? 'SKWD – Agence d\'intérim étudiant reliant des étudiants motivés et des entreprises pour des événements réussis en Belgique.'
        : locale === 'nl'
        ? 'SKWD – Uitzendkantoor voor studenten dat gemotiveerde studenten en bedrijven verbindt voor succesvolle evenementen in België.'
        : 'SKWD – Student staffing agency connecting motivated students with professional events and businesses across Belgium.',

    name:
      locale === 'fr'
        ? 'Accueil - SKWD'
        : locale === 'nl'
        ? 'Startpagina - SKWD'
        : 'Home - SKWD',

    description:
      locale === 'fr'
        ? "SKWD est votre partenaire fiable en Belgique pour les étudiants et les flexi-jobs. Jeune, dynamique et flexible."
        : locale === 'nl'
        ? 'SKWD is jouw betrouwbare partner in België voor studenten en flexi’s. Jong, dynamisch en flexibel.'
        : 'SKWD is your reliable partner in Belgium for students and flexi workers. Young, dynamic, and flexible.',

    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: { '@id': `${siteUrl}/#organization` },
    inLanguage: locale,
    mainEntityOfPage: { '@id': `${siteUrl}/#organization` },
  };

  return (
    <>
      {/* JSON-LD for SEO (Organization + WebSite + WebPage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organization, webSite, webPage]),
        }}
      />
      <main className='h-screen overflow-hidden'>
        {/* ===== HERO SECTION (Main CTA area) ===== */}
        <header
          id="hero"
          aria-label="Main choices for visitors"
          className="relative w-full h-screen overflow-hidden"
        >
          <h1 className="sr-only">
            {t('home_main_title')}
          </h1>
          <div className="absolute inset-0 flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
              <Image
                src="/images/hero-left.JPG"
                alt="Hospitality services background"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-skwd-dark-blue/75 z-10" />
            </div>

            <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
              <Image
                src="/images/hero-right.jpeg"
                alt="Logistics services background"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-skwd-blue/75 z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 section-container grid grid-cols-1 md:grid-cols-2 gap-80 max-[1077px]:gap-40 max-[900px]:gap-20 max-[768px]:gap-0 items-center h-full text-white">
            <article className="flex flex-col items-center gap-2 md:gap-4">
              <AnimatedContent distance={40} duration={1.2}>
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-full">
                  <Building2 className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                <h2 className="text-2xl md:text-3xl text-center font-semibold">
                  {t('hero_clients_title')}
                </h2>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <p
                  className={`text-white/90 text-sm md:text-base text-center font-light transition-opacity duration-200 ${
                    hideDescription ? 'hidden' : 'block'
                  }`}
                >
                  {t('hero_clients_description')}
                </p>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.7}>
                <Link
                  href={`/${locale}/${localizedRoutes.work[locale]}`}
                  className="inline-block mt-2 md:mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  {t('hero_clients_cta')}
                </Link>
              </AnimatedContent>
            </article>

            <article className="flex flex-col items-center gap-2 md:gap-4">
              <AnimatedContent distance={40} duration={1.2}>
                <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-full">
                  <GraduationCap className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                <h2 className="text-2xl md:text-3xl text-center font-semibold">
                  {t('hero_students_title')}
                </h2>
              </AnimatedContent>    
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <p
                  className={`text-white/90 text-sm md:text-base text-center font-light transition-opacity duration-200 ${
                    hideDescription ? 'hidden' : 'block'
                  }`}
                >
                  {t('hero_students_description')}
                </p>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.7}>
                <a
                  href="https://jobs.skwd.be/studentenjob"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 md:mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  {t('hero_students_cta')}
                </a>
              </AnimatedContent>
            </article>
          </div>
        </header>
      </main>
    </>
  );
}