'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import Stack from "@/components/Stack";
import RollingCounter from '@/components/RollingCounter';
import TeamMemberCard from '@/components/TeamMember';
import { CircleQuestionMark, HandCoins, HeartHandshake, TrendingUp, Users } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import { useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';

export default function AboutClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' = ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';
  const [cardDimensions, setCardDimensions] = useState({ width: 540, height: 360 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 330) {
        setCardDimensions({ width: 220, height: 140 });
      } else if (window.innerWidth < 480) {
        setCardDimensions({ width: 260, height: 170 });
      } else if (window.innerWidth < 768) {
        setCardDimensions({ width: 340, height: 220 });
      } else if (window.innerWidth < 1024) {
        setCardDimensions({ width: 440, height: 300 });
      } else {
        setCardDimensions({ width: 540, height: 360 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { id: 1, img: "/images/planner-2.jpg" },
    { id: 2, img: "/images/team-2.jpeg" },
    { id: 3, img: "/images/planner-1.jpeg" },
    { id: 4, img: "/images/team-hero.jpeg" },
  ];

  // --- JSON-LD: build absolute URLs and localized page URL
  const siteUrl = 'https://skwd.vercel.app';
  const pageUrl =
    locale === 'fr'
      ? `${siteUrl}/fr/a-propos`
      : locale === 'nl'
      ? `${siteUrl}/nl/over-ons`
      : `${siteUrl}/en/about-us`;

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

  // --- AboutPage ---
  const aboutPage = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${pageUrl}#aboutpage`,
    url: pageUrl,
    headline: 'YOUR STAFFING AGENCY',
    name:
      locale === 'fr'
        ? 'À propos de nous - SKWD'
        : locale === 'nl'
        ? 'Over ons - SKWD'
        : 'About Us - SKWD',

    isPartOf: { '@id': `${siteUrl}/#website` },
    inLanguage: locale,
    mainEntityOfPage: { '@id': `${siteUrl}/#organization` },
    description:
      locale === 'fr'
        ? "Découvrez qui nous sommes et comment l'équipe SKWD relie étudiants motivés et entreprises pour des événements réussis en Belgique."
        : locale === 'nl'
        ? 'Kom meer te weten over ons en hoe het SKWD-team studenten en bedrijven verbindt voor succesvolle evenementen in België.'
        : 'Learn more about SKWD and how our team connects motivated students and businesses for successful events across Belgium.',
    mainEntity: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'SKWD',
      founder: {
        '@type': 'Person',
        name: 'Tommy Ulens'
      },
      foundingDate: '2024',
        sameAs: [
        'https://www.linkedin.com/company/skwd-staffing/',
        'https://www.instagram.com/skwd.be/?hl=en',
        'https://www.facebook.com/people/SKWD/61562389827787/',
        'https://maps.app.goo.gl/pXp9tQXUyUNWhmJp6',
      ]
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organization, webSite, aboutPage]),
        }}
      />
      <main id="main-content">
        {/* ===== HERO SECTION ===== */}
        <header
          id="about-hero"
          aria-label="About SKWD hero section"
          className="relative w-full min-h-screen flex flex-col items-center justify-center text-center"
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

          <div className="section-container relative z-10 flex flex-col items-center justify-center">
            <AnimatedContent distance={40} duration={1.2}>
              <h1 className="font-extrabold text-white text-3xl sm:text-5xl md:text-6xl leading-tight mb-2">
                YOUR STAFFING <span className="text-skwd-text-highlight">AGENCY</span>
              </h1>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.3}>
              <div className="h-1 w-12 bg-skwd-button rounded-full mx-auto mb-8" />
            </AnimatedContent>
            <AnimatedContent distance={40} duration={1.2} delay={0.5}>
              <div className="flex items-center justify-center w-full max-w-[90vw] md:max-w-[700px]">
                <Stack
                  sendToBackOnClick={true}
                  cardDimensions={cardDimensions}
                  cardsData={images}
                />
              </div>
            </AnimatedContent>
          </div>
        </header>

        {/* AGENCY NUMBERS SECTION */}
        <section
          id="agency-numbers"
          aria-labelledby="agency-numbers-heading"
          className="py-8 bg-skwd-dark-blue text-white"
        >
          <div className="section-container">
            <div className="flex flex-wrap justify-between items-center gap-3 md:gap-0">
              <div className="hidden md:block h-16 w-px bg-white rounded-full"></div>

              <article className="flex-1 text-center min-w-[120px]">
                <RollingCounter
                  finalValue={2024}
                  label={t('about_numbers_established')}
                  places={[1000, 100, 10, 1]}
                />
              </article>

              <div className="hidden md:block h-16 w-px bg-white rounded-full"></div>

              <article className="flex-1 text-center min-w-[120px]">
                <RollingCounter
                  finalValue={350}
                  label={t('about_numbers_students')}
                  suffix="+"
                  places={[100, 10, 1]}
                />
              </article>

              <div className="hidden md:block h-16 w-px bg-white rounded-full"></div>

              <article className="flex-1 text-center min-w-[120px]">
                <RollingCounter
                  finalValue={90}
                  label={t('about_numbers_clients')}
                  suffix="+"
                  places={[10, 1]}
                />
              </article>

              <div className="hidden md:block h-16 w-px bg-white rounded-full"></div>

              <article className="flex-1 text-center min-w-[120px]">
                <RollingCounter
                  finalValue={98}
                  label={t('about_numbers_fill_rate')}
                  suffix="%"
                  places={[10, 1]}
                />
              </article>

              <div className="hidden md:block h-16 w-px bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* ===== TEAM SECTION ===== */}
        <section
          id="team"
          aria-labelledby="team-heading"
          className="pb-20 bg-skwd-dark-blue text-white"
        >
          <div className="section-container">
            <header className="mb-12 text-center mx-auto">
              <AnimatedContent distance={40} duration={1.2} delay={0.1}>
                <h2 id="team-heading" className="text-3xl md:text-4xl mb-4 font-medium text-center">
                  {(() => {
                    const words = t('about_team_intro_headline').split(' ');
                    const lastTwoStart = words.length - 2;
                    return (
                      <>
                        <span className="text-white">{words.slice(0, 3).join(' ')}</span>{' '}
                        <span className="text-skwd-text-highlight">
                          {words.slice(3, 5).join(' ')}
                        </span>{' '}
                        <span className="text-white">
                          {words.slice(5, lastTwoStart).join(' ')}
                        </span>{' '}
                        <span className="text-skwd-text-highlight">
                          {words.slice(lastTwoStart).join(' ')}
                        </span>
                      </>
                    );
                  })()}
                </h2>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                <p className='font-light text-sm md:text-base'>{t('about_team_intro_text')}</p>
              </AnimatedContent>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              <AnimatedContent distance={40} duration={1.2}>
                <TeamMemberCard
                  memberNumber={1}
                  imageUrl="/images/ceo.jpeg"
                  name="Tommy Ulens"
                  linkedinUrl="https://www.linkedin.com/in/tommy-ulens-017747225/"
                />
              </AnimatedContent>
              
              <AnimatedContent distance={40} duration={1.2} delay={0.1}>
                <TeamMemberCard
                  memberNumber={2}
                  imageUrl="/images/benjamin.jpeg"
                  name="Benjamin Fontenai"
                  linkedinUrl="https://www.linkedin.com/in/benjamin-fontenai-a04794236/"
                />
              </AnimatedContent>
              
              <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                <TeamMemberCard
                  memberNumber={3}
                  imageUrl="/images/antoine.jpeg"
                  name="Antoine Collin"
                  linkedinUrl="https://www.linkedin.com/in/antoine-collin-3937292a5/"
                />
              </AnimatedContent>
              
              <AnimatedContent distance={40} duration={1.2}>
                <TeamMemberCard
                  memberNumber={4}
                  imageUrl="/images/cintia.jpeg"
                  name="Cintia Saliba"
                  linkedinUrl="https://www.linkedin.com/in/cintia-saliba/"
                />
              </AnimatedContent>    
              
              <AnimatedContent distance={40} duration={1.2} delay={0.1}>
                <TeamMemberCard
                  memberNumber={5}
                  imageUrl="/images/adam.jpg"
                  name="Adam Sakhraoui"
                  linkedinUrl="https://www.linkedin.com/in/adam-sakhraoui-672281353/"
                />
              </AnimatedContent>    
              
              <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                <TeamMemberCard
                  memberNumber={6}
                  imageUrl="/images/thomas.jpg"
                  name="Thomas Heusdens"
                  linkedinUrl="https://www.linkedin.com/in/thomas-heusdens-0bba19258/"
                />
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* ===== QUOTE / MOTTO SECTION ===== */}
        <section
          id="quote"
          aria-label="Agency motto section"
          className="relative bg-skwd-blue py-14 md:py-20 text-center text-white overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-10">
            <Image  
              src="/images/pattern-bg.png"
              alt="Partern background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative section-container z-10">
            <AnimatedContent distance={40} duration={1.2}>
              <h2 className="text-3xl md:text-4xl text-center font-semibold">
                {(() => {
                  const words = t('about_quote').split(' ');
                  const middleStart = Math.floor(words.length / 2) - 1;
                  const middleEnd = middleStart + 2;
                  const endStart = words.length - 3;

                  return (
                    <>
                      <span className="text-white">
                        {words.slice(0, middleStart).join(' ')}
                      </span>{' '}
                      <span className="text-skwd-text-highlight">
                        {words.slice(middleStart, middleEnd).join(' ')}
                      </span>{' '}
                      <span className="text-white">
                        {words.slice(middleEnd, endStart).join(' ')}
                      </span>{' '}
                      <span className="text-skwd-text-highlight">
                        {words.slice(endStart).join(' ')}
                      </span>
                    </>
                  );
                })()}
              </h2>
            </AnimatedContent>
          </div>
        </section>

        {/* ===== WHY STUDENTS CHOOSE US ===== */}
        <section
          id="why-us"
          aria-labelledby="why-us-heading"
          className="py-14 md:py-20 bg-skwd-dark-blue"
        >
          <div className="section-container">
            <header className="text-center mb-8 md:mb-10">
              <AnimatedContent distance={40} duration={1.2}>
                <h2 id="why-us-heading" className="text-3xl md:text-4xl mb-3 text-center font-semibold">
                  <span className="text-white">
                    {t('about_why_title').split(' ').slice(0, -2).join(' ')}
                  </span>{' '}
                  <span className="text-skwd-text-highlight">
                    {t('about_why_title').split(' ').slice(-2).join(' ')}
                  </span>
                </h2>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.3}>
                <p className='font-light text-sm md:text-base w-[80%] mx-auto'>{t('about_why_description')}</p>
              </AnimatedContent>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedContent distance={40} duration={1.2} delay={0.4}>
                <InfoCard 
                  cardTitle='about_why_card1_title'
                  cardDescription='about_why_card1_description'
                  icon={Users} 
                  patternOverlaySrc='/images/Tile2.png'
                  color='skwd-blue'
                />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.5}>
                <InfoCard 
                  cardTitle='about_why_card2_title'
                  cardDescription='about_why_card2_description'
                  icon={TrendingUp} 
                  patternOverlaySrc='/images/Tile4.png'
                  color='skwd-blue'
                />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                <InfoCard 
                cardTitle='about_why_card3_title'
                cardDescription='about_why_card3_description'
                icon={HandCoins} 
                patternOverlaySrc='/images/Tile3.png'
                color='skwd-blue'
              />
              </AnimatedContent>
              <AnimatedContent distance={40} duration={1.2} delay={0.2}>
                <InfoCard 
                  cardTitle='about_why_card4_title'
                  cardDescription='about_why_card4_description'
                  icon={HeartHandshake} 
                  patternOverlaySrc='/images/Tile5.png'
                  color='skwd-blue'
                />
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* ===== CONTACT CTA SECTION ===== */}
        <section
          id="contact-cta"
          aria-labelledby="contact-cta-heading"
          className="relative bg-skwd-light-blue py-14 md:py-20 text-white"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative section-container flex justify-center z-10">
            <AnimatedContent distance={40} duration={1.2}>
              <div className="bg-skwd-blue p-10 rounded-2xl max-w-xl text-center">
                <header className="mb-6">
                  <div className='bg-white/15 mb-4 inline-block backdrop-blur rounded-full p-4'>
                    <CircleQuestionMark className="w-10 h-10 text-white mx-auto" />
                  </div>
                  <h2 id="contact-cta-heading" className="text-2xl md:text-3xl mb-2 text-center font-semibold">
                    <span className="text-white">
                      {t('about_contact_title').split(' ').slice(0, -2).join(' ')}
                    </span>{' '}
                    <span className="text-skwd-text-highlight">
                      {t('about_contact_title').split(' ').slice(-2).join(' ')}
                    </span>
                  </h2>
                  <p className='font-light text-sm md:text-base'>{t('about_contact_description')}</p>
                </header>

                <div className="flex justify-center gap-4 flex-wrap">
                  <Link
                    href={`/${locale}/${localizedRoutes.faq[locale]}`}
                    className="px-5 py-2 bg-skwd-button text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    {t('about_faq_cta')}
                  </Link>

                  <Link
                    href={`/${locale}/${localizedRoutes.contact[locale]}`}
                    className="px-5 py-2 bg-white text-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    {t('about_contact_cta')}
                  </Link>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>
      </main>
    </>
  );
}