'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import { Building2, UtensilsCrossed, Truck, GraduationCap } from 'lucide-react';
import ProjectsBento from '@/components/ProjectsBento';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import { useState } from 'react';
import useHideDescription from '@/hooks/useHideDescription';
import AnimatedContent from '@/components/AnimatedContent';

export default function HomePage() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' = ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';
  const [activeSector, setActiveSector] = useState('hospitality');
  const hideDescription = useHideDescription();

  // --- JSON-LD: build absolute URLs and localized page URL
  const siteUrl = 'https://skwd.vercel.app/';
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
    publisher: { '@id': `${siteUrl}/#organization` }
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,

    headline:
      locale === 'fr'
        ? 'SKWD – Agence de staffing étudiant reliant des étudiants motivés et des entreprises pour des événements réussis en Belgique.'
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
        ? "Découvrez SKWD, l'agence belge qui relie étudiants motivés et entreprises pour des événements réussis en Belgique."
        : locale === 'nl'
        ? 'Ontdek SKWD, het Belgische agency dat studenten en bedrijven verbindt voor succesvolle evenementen in België.'
        : 'Discover SKWD, the Belgian agency connecting motivated students and businesses for successful events across Belgium.',

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
      <main>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 md:mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  {t('hero_students_cta')}
                </a>
              </AnimatedContent>
            </article>
          </div>
        </header>

        {/* ===== PROJECT GALLERY / IMPACT SECTION ===== */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
            />
          </div>
          <div className="py-14 md:py-20 section-container">
            <AnimatedContent distance={50} duration={1.2}>
              <h2 id="projects-heading" className="text-2xl md:text-3xl text-center font-semibold mb-2 md:mb-4">
                <span className="text-white">{t('projects_title').split(' ').slice(0, -2).join(' ')}</span>
                {' '}
                <span className="text-skwd-text-highlight">{t('projects_title').split(' ').slice(-2).join(' ')}</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent distance={50} duration={1.2} delay={0.3}>
              <p className="mb-6 md:mb-10 text-white text-center text-sm md:text-base font-light">{t('projects_description')}</p>
            </AnimatedContent>
            <AnimatedContent distance={50} duration={1.2} delay={0.3}>
              <ProjectsBento />
            </AnimatedContent>      
          </div>
        </section>

        {/* ===== CEO TESTIMONIAL SECTION ===== */}
        <section
          id="testimony"
          className="bg-skwd-light-blue text-white"
          aria-labelledby="testimony-heading"
        >
          <AnimatedContent distance={50} duration={1.5}>
            <div className="relative py-14 md:py-20 section-container">
              <h2
                id="testimony-heading"
                className="hidden md:block absolute top-5 md:left-4 text-[250px] leading-none text-skwd-text-highlight font-medium select-none pointer-events-none"
              >
                &quot;
              </h2>

              <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 mx-auto">
                
                <div className="relative w-64 h-64 md:w-72 md:h-72 md:order-2 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/ceo.jpeg"
                      alt={t('ceo_name')}
                      fill
                      sizes="(max-width: 768px) 256px, 288px"
                      className="object-cover object-bottom"
                      priority
                    />
                </div>

                <blockquote className="text-left max-w-xl md:mt-20">
                  <p className="text-base md:text-lg mb-6 font-light">{t('ceo_testimony')}</p>
                  <footer className="relative pl-6">
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-skwd-text-highlight rounded-full" />

                    <p className="font-semibold text-sm md:text-base">{t('ceo_name')}</p>
                    <p className="text-sm opacity-80">{t('ceo_role')}</p>
                    <p className="text-sm opacity-60 font-light">{t('ceo_experience')}</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* ===== SECONDARY INFO SECTION ===== */}
        <section
          id="two-different-sectors"
          aria-labelledby="sectors-heading"
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
            />
          </div>
          <div className="py-14 md:py-20 px-6 section-container">
            <AnimatedContent distance={50} duration={1.2}>
              <h2 id="sector-heading" className="text-2xl md:text-3xl text-center font-semibold mb-2 md:mb-4">
                <span className="text-white">{t('sector_title').split(' ').slice(0, -2).join(' ')}</span>
                {' '}
                <span className="text-skwd-text-highlight">{t('sector_title').split(' ').slice(-2).join(' ')}</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent distance={50} duration={1.2} delay={0.3}>
              <p className="mb-6 md:mb-10 text-center text-sm md:text-base text-white/80 font-light">
                {t('sector_description')}
              </p>
            </AnimatedContent>
            <div className="md:hidden flex justify-center mb-8">
              <AnimatedContent distance={50} duration={1.2} delay={0.4}>
                <div className="inline-flex backdrop-blur-sm bg-white/10 rounded-full p-1 gap-1">
                  <button
                    onClick={() => setActiveSector('hospitality')}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      activeSector === 'hospitality'
                        ? 'bg-white text-black'
                        : 'text-white'
                    }`}
                    aria-pressed={activeSector === 'hospitality'}
                  >
                    {t('sector_card1_title')}
                  </button>
                  <button
                    onClick={() => setActiveSector('logistics')}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      activeSector === 'logistics'
                        ? 'bg-white text-black'
                        : 'text-white'
                    }`}
                    aria-pressed={activeSector === 'logistics'}
                  >
                    {t('sector_card2_title')}
                  </button>
                </div>
              </AnimatedContent>
            </div>

            <AnimatedContent distance={50} duration={1.2} delay={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-[1000px]:gap-12">
                {/* Left Card — Hospitality */}
                <article
                  aria-labelledby="sector-card1-title"
                  className={`group relative rounded-2xl overflow-hidden shadow-lg aspect-square ${
                    activeSector === 'hospitality' ? 'block' : 'hidden'
                  } md:block`}
                >
                  <Image
                    src="/images/hospitality.jpeg"            
                    alt="Hospitality image"                                    
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                  <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center gap-4">
                    <span className="bg-white/15 backdrop-blur-sm p-3 md:p-4 rounded-full">
                      <UtensilsCrossed className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                    </span>

                    <h3 id="sector-card1-title" className="text-2xl font-semibold text-white">
                      {t('sector_card1_title')}
                    </h3>

                    <p className="text-white/90 font-light text-sm md:text-base max-w-sm">
                      {t('sector_card1_description')}
                    </p>

                    <Link
                      href={`/${locale}/${localizedRoutes.hospitality[locale]}`}
                      className="inline-block mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                      aria-label={t('sector_card1_cta')}
                    >
                      {t('sector_card1_cta')}
                    </Link>
                  </div>
                </article>

                {/* Right Card — Logistics */}
                <article
                  aria-labelledby="sector-card2-title"
                  className={`group relative rounded-2xl overflow-hidden shadow-lg aspect-square ${
                    activeSector === 'logistics' ? 'block' : 'hidden'
                  } md:block`}
                >
                  <Image
                    src="/images/Logistiek.jpg"              
                    alt="Logistics image"                                   
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                  <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center gap-4">
                    <span className="bg-white/15 backdrop-blur-sm p-3 md:p-4 rounded-full">
                      <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                    </span>

                    <h3 id="sector-card2-title" className="text-2xl font-semibold text-white">
                      {t('sector_card2_title')}
                    </h3>

                    <p className="text-white/90 text-sm md:text-base font-light max-w-sm">
                      {t('sector_card2_description')}
                    </p>

                    <Link
                      href={`/${locale}/${localizedRoutes.logistics[locale]}`}
                      className="inline-block mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                      aria-label={t('sector_card2_cta')}
                    >
                      {t('sector_card2_cta')}
                    </Link>
                  </div>
                </article>
              </div>
            </AnimatedContent>        
          </div>
        </section>
      </main>
    </>
  );
}