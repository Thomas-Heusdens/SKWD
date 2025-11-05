'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import InfoCard from '@/components/InfoCard';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import { BadgeCheck, Clock8, ChefHat, Vote, MousePointer, BookA, BicepsFlexed } from 'lucide-react';
import CardSwap, { Card } from '@/components/CardSwap';
import EmblaCarousel from '@/components/EmblaCarousel';
import SquareMasonry from '@/components/SquareMasonry';
import useIsMobile from '@/hooks/useIsMobile';
import AnimatedContent from '@/components/AnimatedContent';
import InfoCardStep from '@/components/InfoCardStep';

export default function HospitalityClient() {
  const isMobile = useIsMobile(776);
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';

  const siteUrl = 'https://skwd.vercel.app';
  const pageUrl =
    locale === 'fr'
      ? `${siteUrl}/fr/hospitalite`
      : locale === 'nl'
      ? `${siteUrl}/nl/hospitality`
      : `${siteUrl}/en/hospitality`;

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

  // --- HospitalityPage ---
  const hospitalityPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#hospitalitypage`,
    url: pageUrl,

    headline:
      locale === 'fr'
        ? "Secteur de l'hospitalité"
        : locale === 'nl'
        ? 'Sector hospitality'
        : 'Hospitality sector',

    name:
      locale === 'fr'
        ? 'Secteur Hospitalité - SKWD'
        : locale === 'nl'
        ? 'Sector Hospitality - SKWD'
        : 'Hospitality sector - SKWD',

    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntityOfPage: { '@id': `${siteUrl}/#organization` },
    inLanguage: locale,

    description:
      locale === 'fr'
        ? "Découvrez nos services dans le secteur de l'hospitalité : du catering aux activations de marque, nous plaçons les bons profils aux bons endroits."
        : locale === 'nl'
        ? 'Ontdek onze hospitalitydiensten: van catering tot brand activaties, wij zorgen voor de juiste mensen op de juiste plaats.'
        : 'Discover our hospitality services: from catering to brand activations, we place the right people in the right place.',

    about: {
      '@type': 'Service',
      name: 'SKWD Hospitality',
      serviceType: 'Student staffing for hospitality and events',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'BE',
      availableLanguage: ['English', 'French', 'Dutch'],
      description:
        locale === 'fr'
          ? "Nous fournissons des étudiants qualifiés pour l'hospitalité, le catering et les activations de marque à travers la Belgique."
          : locale === 'nl'
          ? 'Wij voorzien gemotiveerde studenten voor hospitality, catering en brand activaties in heel België.'
          : 'We provide skilled student workers for hospitality, catering, and brand activations across Belgium.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:
          locale === 'fr'
            ? "Services d'hospitalité"
            : locale === 'nl'
            ? 'Hospitalitydiensten'
            : 'Hospitality services',
        itemListElement: [
          { '@type': 'Offer', name: t('hospitality_carousel_1_title') },
          { '@type': 'Offer', name: t('hospitality_carousel_2_title') },
          { '@type': 'Offer', name: t('hospitality_carousel_3_title') },
          { '@type': 'Offer', name: t('hospitality_carousel_4_title') },
          { '@type': 'Offer', name: t('hospitality_carousel_5_title') },
        ],
      },
    },
  };

  const carouselSlides = [
    {
      image: '/images/festival.jpeg',
      title: t('hospitality_carousel_1_title'),
      description: t('hospitality_carousel_1_description'),
    },
    {
      image: '/images/wedding.jpeg',
      title: t('hospitality_carousel_2_title'),
      description: t('hospitality_carousel_2_description'),
    },
    {
      image: '/images/Corporate.jpg',
      title: t('hospitality_carousel_3_title'),
      description: t('hospitality_carousel_3_description'),
    },
    {
      image: '/images/Conferenties.jpeg',
      title: t('hospitality_carousel_4_title'),
      description: t('hospitality_carousel_4_description'),
    },
    {
      image: '/images/sport.JPG',
      title: t('hospitality_carousel_5_title'),
      description: t('hospitality_carousel_5_description'),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organization, webSite, hospitalityPage]),
        }}
      />
      <main id="main-content">
        {/* ===== HERO SECTION ===== */}
        <header
          id="hospitality-hero"
          aria-label="Hospitality hero section"
          className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white"
        >
          <Image
            src="/images/hospitality-hero.jpg"
            alt="Hospitality services hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-skwd-dark-blue/70" />

          <div className="relative z-10 text-center max-w-3xl px-6">
            <AnimatedContent distance={40} duration={1.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 md:mb-4 text-center">
                {(() => {
                  const words = t('hospitality_title').split(' ');
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
              <p className="font-light text-sm md:text-base mb-8">{t('hospitality_description')}</p>
            </AnimatedContent>
            <div className="flex justify-center gap-4 flex-wrap">
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <Link
                  href="https://jobs.skwd.be/studentenjob"
                  className="px-6 py-3 bg-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {t('hospitality_cta_apply')}
                </Link>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.6}>
                <Link
                  href={`/${locale}/${localizedRoutes.contact[locale]}`}
                  className="px-6 py-3 bg-white text-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {t('hospitality_cta_contact')}
                </Link>
              </AnimatedContent>
            </div>
          </div>
        </header>

        {/* ===== JOB TYPES SECTION ===== */}
        <section
          id="job-types"
          aria-labelledby="job-types-heading"
          className="relative py-14 md:py-20 px-6 text-white"
        >
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
            />
          </div>
          <div className="section-container text-center">
            <AnimatedContent distance={40} duration={1.2}>
              <h2 id="job-types-heading" className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center">
                {(() => {
                  const words = t('hospitality_jobs_title').split(' ');
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
                {t('hospitality_jobs_description')}
              </p>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.5}>
              <div
                id="job-carousel"
                className="relative w-full overflow-hidden"
                aria-label="Job types carousel"
              >
                <div className="w-full">
                  <EmblaCarousel slides={carouselSlides} />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* ===== EVENT EXPERIENCE SECTION ===== */}
        <section
          id="event-experience"
          aria-labelledby="event-experience-heading"
          className="py-14 md:py-20 bg-skwd-blue text-white"
        >
          <div className="section-container">
            <header className="text-center mb-6 md:mb-10">
              <AnimatedContent distance={40} duration={1.2}>
                <h2 id="event-experience-heading" className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center">
                  {(() => {
                    const words = t('hospitality_event_title').split(' ');
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
                <p className="text-white/90 font-light text-sm md:text-base max-w-xl mx-auto">
                  {t('hospitality_event_description')}
                </p>
              </AnimatedContent>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedContent distance={40} duration={1.2} delay={0.4}>
                <InfoCard cardTitle='hospitality_event_card_title_1' cardDescription='hospitality_event_card_description_1' icon={Clock8} patternOverlaySrc="/images/Tile2.png" color='skwd-dark-blue' />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <InfoCard cardTitle='hospitality_event_card_title_2' cardDescription='hospitality_event_card_description_2' icon={ChefHat} patternOverlaySrc="/images/Tile3.png" color='skwd-dark-blue' />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.6}>
                <InfoCard cardTitle='hospitality_event_card_title_3' cardDescription='hospitality_event_card_description_3' icon={BadgeCheck} patternOverlaySrc="/images/Tile4.png" color='skwd-dark-blue' />
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* ===== APPLY EASILY SECTION ===== */}
        <section id="apply-easy" aria-labelledby="apply-easy-heading" className="py-14 md:py-20 px-6">
          <div className="section-container grid grid-cols-1 max-[1188px]:grid-cols-1 min-[1188px]:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col min-[1188px]:items-start min-[1188px]:text-left items-center text-center justify-center min-[1188px]:justify-start transition-all duration-300">
              <AnimatedContent distance={40} duration={1.2}>
                <h2 id="apply-easy-heading" className="text-3xl md:text-4xl font-semibold mb-12 text-white min-[1188px]:max-w-none max-[1188px]:mb-4">
                  {(() => {
                    const words = t('hospitality_easy_apply_title').split(' ');
                    const middleStart = Math.floor(words.length / 2) - 1;
                    const middleEnd = middleStart + 2;

                    return (
                      <>
                        <span className="text-skwd-text-highlight">
                          {words.slice(0, 3).join(' ')}
                        </span>{' '}
                        <span className="text-white">
                          {words.slice(3, middleStart).join(' ')}
                        </span>{' '}
                        <span className="text-skwd-text-highlight">
                          {words.slice(middleStart, middleEnd).join(' ')}
                        </span>{' '}
                        <span className="text-white">
                          {words.slice(middleEnd).join(' ')}
                        </span>
                      </>
                    );
                  })()}
                </h2>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2}>
                <Link
                  href="https://jobs.skwd.be/studentenjob"
                  className="
                    px-6 py-3 bg-skwd-button text-white rounded-lg font-medium 
                    hover:opacity-90 transition-opacity
                  "
                >
                  {t('hospitality_easy_apply_cta')}
                </Link>
              </AnimatedContent>
            </div>

            {/* RIGHT: ANIMATION / CAROUSEL */}
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
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={4000}
                  pauseOnHover={false}
                >
                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image src="/images/Tile1.png" fill alt="pattern" className="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="ml-4 mt-3 font-light">{t('hospitality_step_1')}</h3>
                      <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <Vote className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl ml-4 mt-6">{t('hospitality_step_1_title')}</h2>
                      <p className="ml-4 mt-2 max-w-[75%] font-light text-sm md:text-base">
                        {t('hospitality_step_1_description')}
                      </p>
                    </div>
                  </Card>

                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image src="/images/Tile6.png" fill alt="pattern" className="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="ml-4 mt-3 font-light">{t('hospitality_step_2')}</h3>
                      <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <MousePointer className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl ml-4 mt-6">{t('hospitality_step_2_title')}</h2>
                      <p className="ml-4 mt-2 max-w-[75%] font-light text-sm md:text-base">
                        {t('hospitality_step_2_description')}
                      </p>
                    </div>
                  </Card>

                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image src="/images/Tile3.png" fill alt="pattern" className="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="ml-4 mt-3 font-light">{t('hospitality_step_3')}</h3>
                      <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <BookA className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl ml-4 mt-6">{t('hospitality_step_3_title')}</h2>
                      <p className="ml-4 mt-2 max-w-[75%] font-light text-sm md:text-base">
                        {t('hospitality_step_3_description')}
                      </p>
                    </div>
                  </Card>

                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image src="/images/Tile2.png" fill alt="pattern" className="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="ml-4 mt-3 font-light">{t('hospitality_step_4')}</h3>
                      <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <BicepsFlexed className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl ml-4 mt-6">{t('hospitality_step_4_title')}</h2>
                      <p className="ml-4 mt-2 max-w-[75%] font-light text-sm md:text-base">
                        {t('hospitality_step_4_description')}
                      </p>
                    </div>
                  </Card>
                </CardSwap>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                    <InfoCardStep
                      stepLabel="hospitality_step_1"
                      cardTitle="hospitality_step_1_title"
                      cardDescription="hospitality_step_1_description"
                      icon={Vote}
                      patternOverlaySrc="/images/Tile1.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>

                  <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                    <InfoCardStep
                      stepLabel="hospitality_step_2"
                      cardTitle="hospitality_step_2_title"
                      cardDescription="hospitality_step_2_description"
                      icon={MousePointer}
                      patternOverlaySrc="/images/Tile6.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>

                  <AnimatedContent distance={40} duration={1.2} delay={0.4}>
                    <InfoCardStep
                      stepLabel="hospitality_step_3"
                      cardTitle="hospitality_step_3_title"
                      cardDescription="hospitality_step_3_description"
                      icon={BookA}
                      patternOverlaySrc="/images/Tile3.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>

                  <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                    <InfoCardStep
                      stepLabel="hospitality_step_4"
                      cardTitle="hospitality_step_4_title"
                      cardDescription="hospitality_step_4_description"
                      icon={BicepsFlexed}
                      patternOverlaySrc="/images/Tile2.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* ===== MASONRY GALLERY SECTION ===== */}
        <section
          id="hospitality-gallery"
          aria-labelledby="hospitality-gallery-heading"
          className="bg-skwd-dark-blue text-white"
        >
          <SquareMasonry
            images={[
              '/images/image1.jpg',
              '/images/image2.JPG',
              '/images/image3.jpg',
              '/images/image4.jpg',
              '/images/image5.jpg',
              '/images/image6.jpg',
              '/images/image7.JPG',
              '/images/image8.jpeg',
              '/images/image9.jpg',
              '/images/image10.jpeg',
              '/images/image11.jpeg',
              '/images/image12.jpeg',
              '/images/image13.jpeg',
              '/images/image14.jpeg',
              '/images/image15.jpeg',
              '/images/image16.jpg',
              '/images/image17.jpeg',
              '/images/image18.jpg',
            ]}
          />
        </section>
      </main>
    </>
  );
}
