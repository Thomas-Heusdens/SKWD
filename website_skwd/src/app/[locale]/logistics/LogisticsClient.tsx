'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import InfoCard from '@/components/InfoCard';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import { BadgeCheck, Clock8, Vote, MousePointer, BookA, BicepsFlexed } from 'lucide-react';
import CardSwap, { Card } from '@/components/CardSwap';
import EmblaCarousel from '@/components/EmblaCarousel';
import SquareMasonry from '@/components/SquareMasonry';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import InfoCardStep from '@/components/InfoCardStep';

export default function LogisticsClient() {
  const isMobile = useIsMobile(776);
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const siteUrl = 'https://skwd.vercel.app/';
  const pageUrl =
    locale === 'fr'
      ? `${siteUrl}/fr/logistique`
      : locale === 'nl'
      ? `${siteUrl}/nl/logistiek`
      : `${siteUrl}/en/logistics`;

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
      name: 'Tommy Ulens'
    },
    description:
      locale === 'fr'
        ? 'SKWD – Agence de staffing étudiant reliant des étudiants motivés et des entreprises pour des événements réussis en Belgique.'
        : locale === 'nl'
        ? 'SKWD – Uitzendkantoor voor studenten dat gemotiveerde studenten en bedrijven verbindt voor succesvolle evenementen in België.'
        : 'SKWD – Student staffing agency connecting motivated students with professional events and businesses across Belgium.',
    numberOfEmployees: {
      '@type': "QuantitativeValue",
      minValue: 2,
      maxValue: 10
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
    areaServed: "BE",
    email: "info@skwd.be",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Picard 7/204',
      addressLocality: 'Brussels',
      postalCode: '1000',
      addressCountry: 'BE'
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

  // --- LogisticsPage ---
  const logisticsPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#logisticspage`,
    url: pageUrl,

    // Match visible H1
    headline:
      locale === 'fr'
        ? 'Secteur de la logistique'
        : locale === 'nl'
        ? 'Sector logistiek'
        : 'Logistics sector',

    // Match browser tab title
    name:
      locale === 'fr'
        ? 'Secteur Logistique - SKWD'
        : locale === 'nl'
        ? 'Sector Logistiek - SKWD'
        : 'Logistics sector - SKWD',

    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: { '@id': `${siteUrl}/#organization` },
    inLanguage: locale,
    mainEntityOfPage: { '@id': `${siteUrl}/#organization` },

    description:
      locale === 'fr'
        ? "Découvrez nos services dans le secteur de la logistique : de la manutention au transport, nous plaçons les bons profils aux bons endroits."
        : locale === 'nl'
        ? 'Ontdek onze logistieke diensten: van opbouw en afbouw tot transport, wij zorgen voor de juiste mensen op de juiste plaats.'
        : 'Discover our logistics services: from setup and dismantling to warehouse support, we place the right people in the right place.',
    about: {
      '@type': 'Service',
      name: 'SKWD Logistics',
      serviceType: 'Student staffing for logistics and transport',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'BE',
      availableLanguage: ['English', 'French', 'Dutch'],
      description:
        locale === 'fr'
          ? "Nous fournissons des étudiants fiables pour la logistique, le transport et l'assistance en entrepôt à travers la Belgique."
          : locale === 'nl'
          ? 'Wij voorzien betrouwbare studenten voor logistiek, transport en magazijnondersteuning in heel België.'
          : 'We provide reliable student workers for logistics, transport, and warehouse support across Belgium.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:
          locale === 'fr'
            ? 'Services logistiques'
            : locale === 'nl'
            ? 'Logistieke diensten'
            : 'Logistics services',
        itemListElement: [
          { '@type': 'Offer', name: t('logistics_carousel_1_title') },
          { '@type': 'Offer', name: t('logistics_carousel_2_title') },
          { '@type': 'Offer', name: t('logistics_carousel_3_title') },
          { '@type': 'Offer', name: t('logistics_carousel_4_title') },
          { '@type': 'Offer', name: t('logistics_carousel_5_title') },
        ],
      },
    },
  };

  const src = isSmallScreen
    ? '/images/Logistiek-hero2.jpeg'
    : '/images/logistiek3.jpeg';

  const carouselSlides = [
    {
      image: '/images/Logistiek.jpeg',
      title: t('logistics_carousel_1_title'),
      description: t('logistics_carousel_1_description'),
    },
    {
      image: '/images/parking.jpeg',
      title: t('logistics_carousel_2_title'),
      description: t('logistics_carousel_2_description'),
    },
    {
      image: '/images/orderpicker.jpeg',
      title: t('logistics_carousel_3_title'),
      description: t('logistics_carousel_3_description'),
    },
    {
      image: '/images/driver.jpg',
      title: t('logistics_carousel_4_title'),
      description: t('logistics_carousel_4_description'),
    },
    {
      image: '/images/débarras.jpg',
      title: t('logistics_carousel_5_title'),
      description: t('logistics_carousel_5_description'),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organization, webSite, logisticsPage]),
        }}
      />
      <main id="main-content">
        {/* ===== HERO SECTION ===== */}
        <header
          id="logistics-hero"
          aria-label="Logistics hero section"
          className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white"
        >
          <Image
            src={src}
            alt="Logistics services hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-skwd-dark-blue/70" />

          <div className="relative z-10 text-center max-w-3xl px-6">
            <AnimatedContent distance={40} duration={1.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-center">
                {(() => {
                  const words = t('logistics_title').split(' ');
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
              <p className="font-light mb-8 text-sm md:text-base">{t('logistics_description')}</p>
            </AnimatedContent>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <Link
                  href="https://jobs.skwd.be/studentenjob"
                  className="px-6 py-3 bg-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {t('logistics_cta_apply')}
                </Link>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <Link
                  href={`/${locale}/${localizedRoutes.contact[locale]}`}
                  className="px-6 py-3 bg-white text-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {t('logistics_cta_contact')}
                </Link>
              </AnimatedContent>
            </div>
          </div>
        </header>

        {/* ===== JOB TYPES ===== */}
        <section id="job-types" aria-labelledby="job-types-heading" className="relative py-14 md:py-20 px-6 text-white">
          <div className="absolute inset-0 opacity-5">
            <Image src="/images/pattern-bg.png" alt="Pattern background" fill className="object-cover" />
          </div>
          <div className="section-container text-center">
            <AnimatedContent distance={40} duration={1.2}>
              <h2 id="job-types-heading" className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center">
                {(() => {
                  const words = t('logistics_jobs_title').split(' ');
                  return (
                    <>
                      <span className="text-white">{words.slice(0, -1).join(' ')}</span>{' '}
                      <span className="text-skwd-text-highlight">{words.slice(-1).join(' ')}</span>
                    </>
                  );
                })()}
              </h2>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.3}>
              <p className="max-w-2xl font-light text-sm md:text-base mx-auto text-white/90 mb-6 md:mb-10">
                {t('logistics_jobs_description')}
              </p>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.3}>
              <div id="job-carousel" className="relative w-full overflow-hidden" aria-label="Job types carousel">
                <div className="w-full">
                  <EmblaCarousel slides={carouselSlides} />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* ===== EVENT EXPERIENCE ===== */}
        <section id="event-experience" aria-labelledby="event-experience-heading" className="py-14 md:py-20 bg-skwd-blue text-white">
          <div className="section-container">
            <header className="text-center mb-6 md:mb-10">
              <AnimatedContent distance={40} duration={1.2}>
                <h2 id="event-experience-heading" className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center">
                  {(() => {
                    const words = t('logistics_event_title').split(' ');
                    return (
                      <>
                        <span className="text-white">{words.slice(0, -2).join(' ')}</span>{' '}
                        <span className="text-skwd-text-highlight">{words.slice(-2).join(' ')}</span>
                      </>
                    );
                  })()}
                </h2>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                <p className="text-white/90 font-light text-sm md:text-base max-w-xl mx-auto">{t('logistics_event_description')}</p>
              </AnimatedContent>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedContent distance={40} duration={1.2} delay={0.4}>
                <InfoCard cardTitle='logistics_event_card_title_1' cardDescription='logistics_event_card_description_1' icon={Clock8} patternOverlaySrc="/images/Tile2.png" color='skwd-dark-blue' />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <InfoCard cardTitle='logistics_event_card_title_2' cardDescription='logistics_event_card_description_2' icon={BicepsFlexed} patternOverlaySrc="/images/Tile3.png" color='skwd-dark-blue' />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <InfoCard cardTitle='logistics_event_card_title_3' cardDescription='logistics_event_card_description_3' icon={BadgeCheck} patternOverlaySrc="/images/Tile4.png" color='skwd-dark-blue' />
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* ===== APPLY EASILY ===== */}
        <section id="apply-easy" aria-labelledby="apply-easy-heading" className="py-14 md:py-20 px-6">
          <div className="section-container grid grid-cols-1 max-[1188px]:grid-cols-1 min-[1188px]:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col min-[1188px]:items-start min-[1188px]:text-left items-center text-center justify-center min-[1188px]:justify-start transition-all duration-300">
              <AnimatedContent distance={40} duration={1.2}>
                <h2 id="apply-easy-heading" className="text-3xl md:text-4xl font-semibold mb-12 text-white min-[1188px]:max-w-none max-[1188px]:mb-4">
                  {(() => {
                    const words = t('logistics_easy_apply_title').split(' ');
                    const middleStart = Math.floor(words.length / 2) - 1;
                    const middleEnd = middleStart + 2;
                    return (
                      <>
                        <span className="text-skwd-text-highlight">{words.slice(0, 3).join(' ')}</span>{' '}
                        <span className="text-white">{words.slice(3, middleStart).join(' ')}</span>{' '}
                        <span className="text-skwd-text-highlight">{words.slice(middleStart, middleEnd).join(' ')}</span>{' '}
                        <span className="text-white">{words.slice(middleEnd).join(' ')}</span>
                      </>
                    );
                  })()}
                </h2>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2}>
                <Link href="https://jobs.skwd.be/studentenjob" className="px-6 py-3 bg-skwd-button text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                  {t('logistics_easy_apply_cta')}
                </Link>
              </AnimatedContent>
            </div>

            <div
              className={`
                relative rounded-xl 
                flex items-center justify-center overflow-hidden
                transition-all duration-300
                ${isMobile ? 'bg-transparent w-full h-auto py-4' : 'bg-skwd-light-blue h-[490px] w-full'}
                max-[1188px]:w-[520px] max-[1188px]:mx-auto
                max-[776px]:w-full
              `}
            >
              {!isMobile ? (
                <CardSwap cardDistance={60} verticalDistance={70} delay={4000} pauseOnHover={false}>
                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image src="/images/Tile1.png" fill alt="pattern" className="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="ml-4 mt-3 font-light">{t('logistics_step_1')}</h3>
                      <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <Vote className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl ml-4 mt-6">{t('logistics_step_1_title')}</h2>
                      <p className="ml-4 mt-2 max-w-[75%] font-light text-sm md:text-base">{t('logistics_step_1_description')}</p>
                    </div>
                  </Card>

                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image src="/images/Tile6.png" fill alt="pattern" className="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="ml-4 mt-3 font-light">{t('logistics_step_2')}</h3>
                      <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <MousePointer className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl ml-4 mt-6">{t('logistics_step_2_title')}</h2>
                      <p className="ml-4 mt-2 max-w-[75%] font-light text-sm md:text-base">{t('logistics_step_2_description')}</p>
                    </div>
                  </Card>

                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image src="/images/Tile3.png" fill alt="pattern" className="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="ml-4 mt-3 font-light">{t('logistics_step_3')}</h3>
                      <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <BookA className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl ml-4 mt-6">{t('logistics_step_3_title')}</h2>
                      <p className="ml-4 mt-2 max-w-[75%] font-light text-sm md:text-base">{t('logistics_step_3_description')}</p>
                    </div>
                  </Card>
                </CardSwap>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                    <InfoCardStep
                      stepLabel="logistics_step_1"
                      cardTitle="logistics_step_1_title"
                      cardDescription="logistics_step_1_description"
                      icon={Vote}
                      patternOverlaySrc="/images/Tile1.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>

                  <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                    <InfoCardStep
                      stepLabel="logistics_step_2"
                      cardTitle="logistics_step_2_title"
                      cardDescription="logistics_step_2_description"
                      icon={MousePointer}
                      patternOverlaySrc="/images/Tile6.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>

                  <AnimatedContent distance={40} duration={1.2} delay={0.4}>
                    <InfoCardStep
                      stepLabel="logistics_step_3"
                      cardTitle="logistics_step_3_title"
                      cardDescription="logistics_step_3_description"
                      icon={BookA}
                      patternOverlaySrc="/images/Tile3.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== GALLERY ===== */}
        <section id="logistics-gallery" aria-labelledby="logistics-gallery-heading" className="bg-skwd-dark-blue text-white">
          <SquareMasonry
            images={[
              '/images/parking.jpeg',
              '/images/steward2.jpg',
              '/images/Logistiek-hero2.jpeg',
              '/images/Logistiek.jpg',
              '/images/logistiek3.jpeg',
              '/images/steward.jpg',
              '/images/afbraak.jpeg',
              '/images/construction.jpeg',
              '/images/park.jpeg',
              '/images/débarras.jpg',
              '/images/mise-en-place.jpg',
              '/images/debas.jpg',
            ]}
          />
        </section>
      </main>
    </>
  );
}