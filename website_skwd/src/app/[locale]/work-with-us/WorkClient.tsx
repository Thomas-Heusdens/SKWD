'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import CardSwap, { Card } from '@/components/CardSwap';
import InfoCard from '@/components/InfoCard';
import useIsMobile from '@/hooks/useIsMobile';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import { useState } from 'react';
import { ReceiptText, Users, Mail, Clock8, Zap, Truck, UtensilsCrossed, BrainCog, HeartHandshake } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import InfoCardStep from '@/components/InfoCardStep';

export default function WorkWithUsClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';

  const isMobile = useIsMobile(1024);
  const [activeSector, setActiveSector] = useState('hospitality');

  const siteUrl = 'https://skwd.vercel.app';
  const pageUrl =
    locale === 'fr'
      ? `${siteUrl}/fr/collaborer-avec-nous`
      : locale === 'nl'
      ? `${siteUrl}/nl/werk-met-ons`
      : `${siteUrl}/en/work-with-us`;

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

  // --- WorkWithUsPage ---
  const workWithUsPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#workwithuspage`,
    url: pageUrl,

    headline:
      locale === 'fr'
        ? 'La bonne personne au bon endroit, au bon moment.'
        : locale === 'nl'
        ? 'De juiste persoon op de juiste plaats, op het juiste moment.'
        : 'The right person in the right place, at the right time.',

    name:
      locale === 'fr'
        ? 'Travailler avec nous - SKWD'
        : locale === 'nl'
        ? 'Werk met ons - SKWD'
        : 'Work with us - SKWD',

    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: { '@id': `${siteUrl}/#organization` },
    inLanguage: locale,
    mainEntityOfPage: { '@id': `${siteUrl}/#organization` },

    description:
      locale === 'fr'
        ? "Découvrez comment collaborer avec SKWD pour vos événements. Nous mettons en relation entreprises et étudiants motivés pour des missions de qualité."
        : locale === 'nl'
        ? 'Ontdek hoe uw bedrijf met SKWD kan samenwerken voor evenementen. Wij verbinden ondernemingen met gemotiveerde studenten.'
        : 'Discover how to collaborate with SKWD for your events. We connect motivated students with companies for efficient, high-quality staffing.',
    about: {
      '@type': 'Service',
      name:
        locale === 'fr'
          ? 'Collaboration B2B avec SKWD'
          : locale === 'nl'
          ? 'B2B-samenwerking met SKWD'
          : 'B2B collaboration with SKWD',
      serviceType:
        locale === 'fr'
          ? "Mise à disposition d'étudiants pour événements et services logistiques"
          : locale === 'nl'
          ? 'Levering van studenten voor evenementen en logistieke ondersteuning'
          : 'Providing student workers for events and logistics support',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'BE',
      availableLanguage: ['English', 'French', 'Dutch'],
      offers: {
        '@type': 'Offer',
        url: pageUrl,
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'EUR',
        },
        eligibleCustomerType: 'Business',
        description:
          locale === 'fr'
            ? "Services de staffing étudiant pour les entreprises, agences et organisateurs d'événements."
            : locale === 'nl'
            ? 'Studentenuitzenddiensten voor bedrijven, agentschappen en evenementenorganisatoren.'
            : 'Student staffing services for companies, agencies, and event organizers.',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organization, webSite, workWithUsPage]),
        }}
      />
      <main id="main-content">
        {/* ===== HERO SECTION ===== */}
        <header
          id="work-hero"
          aria-label="Work with us hero section"
          className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center text-center lg:text-left overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 opacity-10">
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="section-container flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-8 max-w-xl z-10 h-full py-12 lg:py-0">
            <AnimatedContent distance={40} duration={1.2}>
              <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                <span className="block">
                  {(() => {
                    const words = t('work_hero_title_part1').split(' ');
                    const last = words.pop();
                    return (
                      <>
                        {words.join(' ')}{' '}
                        <span className="text-skwd-text-highlight">{last}</span>
                      </>
                    );
                  })()}
                </span>

                <span className="block">
                  {(() => {
                    const words = t('work_hero_title_part2').split(' ');
                    const last = words.pop();
                    return (
                      <>
                        {words.join(' ')}{' '}
                        <span className="text-skwd-text-highlight">{last}</span>
                      </>
                    );
                  })()}
                </span>

                <span className="block">
                  {(() => {
                    const words = t('work_hero_title_part3').split(' ');
                    const last = words.pop();
                    return (
                      <>
                        {words.join(' ')}{' '}
                        <span className="text-skwd-text-highlight">{last}</span>
                      </>
                    );
                  })()}
                </span>
              </h1>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.3}>
              <p className="text-base sm:text-lg font-light text-white/80 max-w-lg leading-relaxed">
                {t('work_hero_description')}
              </p>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.5}>
              <Link
                href={`/${locale}/${localizedRoutes.contact[locale]}`}
                className="px-6 py-3 bg-skwd-button text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                {t('work_hero_cta')}
              </Link>
            </AnimatedContent>
          </div>

          <div className="relative hidden lg:flex w-1/2 min-h-screen">
            <Image
              src="/images/work-hero.JPG"
              alt="Work with SKWD hero image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-skwd-dark-blue/70 pointer-events-none" />
          </div>
        </header>

        {/* ===== STEP-BY-STEP SECTION ===== */}
        <section
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="py-14 md:py-20 text-white"
        >
          <div className="section-container grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE: TITLE + TEXT */}
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left justify-center">
              <AnimatedContent distance={40} duration={1.2}>
                <h2
                  id="how-it-works-heading"
                  className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center"
                >
                  {(() => {
                    const words = t('work_steps_title').split(' ');
                    return (
                      <>
                        <span className="text-white">
                          {words.slice(0, -2).join(' ')}
                        </span>{' '}
                        <span className="text-skwd-text-highlight">
                          {words.slice(-2).join(' ')}
                        </span>
                      </>
                    );
                  })()}
                </h2>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2}>
                <p className="text-sm md:text-base font-light max-w-md">
                  {t('work_steps_description')}
                </p>
              </AnimatedContent>
            </div>

            {/* RIGHT SIDE: CARDS */}
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
                      <Image
                        src="/images/Tile2.png"
                        fill
                        alt="pattern"
                        className="w-full h-full object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                    <div className="relative z-10 ml-4 mt-3">
                      <h3 className="font-light">{t('work_step_1')}</h3>
                      <div className="inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <Mail className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl mt-6">{t('work_steps_1_title')}</h2>
                      <p className="mt-2 max-w-[75%] font-light text-sm md:text-base">
                        {t('work_steps_1_description')}
                      </p>
                    </div>
                  </Card>

                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image
                        src="/images/Tile4.png"
                        fill
                        alt="pattern"
                        className="w-full h-full object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                    <div className="relative z-10 ml-4 mt-3">
                      <h3 className="font-light">{t('work_step_2')}</h3>
                      <div className="inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <ReceiptText className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl mt-6">{t('work_steps_2_title')}</h2>
                      <p className="mt-2 max-w-[75%] font-light text-sm md:text-base">
                        {t('work_steps_2_description')}
                      </p>
                    </div>
                  </Card>

                  <Card>
                    <div className="absolute inset-0 z-0 opacity-10">
                      <Image
                        src="/images/Tile6.png"
                        fill
                        alt="pattern"
                        className="w-full h-full object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                    <div className="relative z-10 ml-4 mt-3">
                      <h3 className="font-light">{t('work_step_3')}</h3>
                      <div className="inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl mt-6">{t('work_steps_3_title')}</h2>
                      <p className="mt-2 max-w-[75%] font-light text-sm md:text-base">
                        {t('work_steps_3_description')}
                      </p>
                    </div>
                  </Card>
                </CardSwap>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                    <InfoCardStep
                      stepLabel="work_step_1"
                      cardTitle="work_steps_1_title"
                      cardDescription="work_steps_1_description"
                      icon={Mail}
                      patternOverlaySrc="/images/Tile2.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>

                  <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                    <InfoCardStep
                      stepLabel="work_step_2"
                      cardTitle="work_steps_2_title"
                      cardDescription="work_steps_2_description"
                      icon={ReceiptText}
                      patternOverlaySrc="/images/Tile4.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>

                  <AnimatedContent distance={40} duration={1.2} delay={0.4}>
                    <InfoCardStep
                      stepLabel="work_step_3"
                      cardTitle="work_steps_3_title"
                      cardDescription="work_steps_3_description"
                      icon={Users}
                      patternOverlaySrc="/images/Tile6.png"
                      color="skwd-blue"
                    />
                  </AnimatedContent>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== WHY WORK WITH STUDENTS ===== */}
        <section id="why-students" aria-labelledby="why-students-heading" className="py-14 md:py-20 bg-skwd-blue text-white">
          <div className="section-container">
            <header className="text-center mb-6 md:mb-10">
              <AnimatedContent distance={40} duration={1.2}>
                <h2 id="why-students-heading" className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center">
                  {(() => {
                    const words = t('work_why_title').split(' ');
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
                  {t('work_why_description')}
                </p>
              </AnimatedContent>

            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedContent distance={40} duration={1.2} delay={0.4}>
                <InfoCard cardTitle="work_why_card1_title" cardDescription="work_why_card1_description" icon={Zap} patternOverlaySrc="/images/Tile2.png" color="skwd-dark-blue" />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <InfoCard cardTitle="work_why_card2_title" cardDescription="work_why_card2_description" icon={Clock8} patternOverlaySrc="/images/Tile3.png" color="skwd-dark-blue" />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                <InfoCard cardTitle="work_why_card3_title" cardDescription="work_why_card3_description" icon={BrainCog} patternOverlaySrc="/images/Tile4.png" color="skwd-dark-blue" />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                <InfoCard cardTitle="work_why_card4_title" cardDescription="work_why_card4_description" icon={HeartHandshake} patternOverlaySrc="/images/Tile1.png" color="skwd-dark-blue" />
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* ===== OUR SERVICES ===== */}
        <section id="our-services" aria-labelledby="our-services-heading" className="py-14 md:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-6 section-container">
            <AnimatedContent distance={40} duration={1.2}>
              <h2 id="work-services-heading" className="text-2xl md:text-3xl text-center font-semibold mb-2 md:mb-4">
                <span className="text-white">{t('work_services_title').split(' ').slice(0, -2).join(' ')}</span>
                {' '}
                <span className="text-skwd-text-highlight">{t('work_services_title').split(' ').slice(-2).join(' ')}</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.3}>
              <p className="mb-6 md:mb-10 text-center text-sm md:text-base text-white/80 font-light">
                {t('work_services_description')}
              </p>
            </AnimatedContent>

            {/* Mobile Toggle Menu - Only visible below md */}
            <div className="lg:hidden flex justify-center mb-8">
              <AnimatedContent distance={40} duration={1.2} delay={0.4}>
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
                    {t('work_services_title1')}
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
                    {t('work_services_title2')}
                  </button>
                </div>
              </AnimatedContent>
            </div>

            <AnimatedContent distance={40} duration={1.2} delay={0.5}>
              {/* Left Card — Hospitality */}      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-[1000px]:gap-12">
                <article
                  aria-labelledby="work-services-card1-title"
                  className={`group relative rounded-2xl overflow-hidden shadow-lg aspect-square ${
                    activeSector === 'hospitality' ? 'block' : 'hidden'
                  } lg:block`}
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
                    <span className="bg-white/15 backdrop-blur-sm p-3 md:p-4 rounded-full hidden sm:block">
                      <UtensilsCrossed className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                    </span>

                    <h3 id="work_services-card1-title" className="hidden sm:block text-2xl font-semibold text-white">
                      {t('work_services_card1_title')}
                    </h3>

                    <p className="text-white/90 font-light text-sm md:text-base max-w-sm">
                      {t('work_services_card1_description')}
                    </p>
                  </div>
                </article>

                {/* Right Card — Logistics */}
                <article
                  aria-labelledby="work-services-card2-title"
                  className={`group relative rounded-2xl overflow-hidden shadow-lg aspect-square ${
                    activeSector === 'logistics' ? 'block' : 'hidden'
                  } lg:block`}
                >
                  <Image
                    src="/images/Logistiek.jpg"              
                    alt="logistics image"                                   
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                  <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center gap-4">
                    <span className="bg-white/15 backdrop-blur-sm p-3 md:p-4 rounded-full hidden sm:block">
                      <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                    </span>

                    <h3 id="work-services-card2-title" className="hidden sm:block text-2xl font-semibold text-white">
                      {t('work_services_card2_title')}
                    </h3>

                    <p className="text-white/90 text-sm md:text-base font-light max-w-sm">
                      {t('work_services_card2_description')}
                    </p>
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