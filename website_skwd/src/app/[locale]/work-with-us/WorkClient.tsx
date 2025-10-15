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
import { MousePointer, BookA, BicepsFlexed, Vote, Users, Clock8, HandCoins, HeartHandshake, Truck, UtensilsCrossed } from 'lucide-react';
import Carousel from '@/components/Carousel';

export default function WorkWithUsClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';

  const isMobile = useIsMobile(1024);
  const [activeSector, setActiveSector] = useState('hospitality');

  const carouselItems = [
    {
      step: t('work_step_1'),
      title: t('work_steps_1_title'),
      description: t('work_steps_1_description'),
      id: 1,
      icon: <Vote className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
    {
      step: t('work_step_2'),
      title: t('work_steps_2_title'),
      description: t('work_steps_2_description'),
      id: 2,
      icon: <MousePointer className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
    {
      step: t('work_step_3'),
      title: t('work_steps_3_title'),
      description: t('work_steps_3_description'),
      id: 3,
      icon: <BookA className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
    {
      step: t('work_step_4'),
      title: t('work_steps_4_title'),
      description: t('work_steps_4_description'),
      id: 4,
      icon: <BicepsFlexed className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
  ];

  return (
    <main id="main-content">
      {/* ===== HERO SECTION ===== */}
      <section
        id="work-hero"
        aria-label="Work with us hero section"
        className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center text-center lg:text-left overflow-hidden"
      >
        {/* Pattern Background */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/images/pattern-bg.png"
            alt="Pattern background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* LEFT: Content */}
        <div className="section-container flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-8 max-w-xl z-10 h-full py-12 lg:py-0">
          <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            <span className="block text-skwd-text-highlight">
              {t('work_hero_title_part1')}
            </span>
            <span className="block text-white">
              {t('work_hero_title_part2')}
            </span>
            <span className="block text-skwd-text-highlight">
              {t('work_hero_title_part3')}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-lg leading-relaxed">
            {t('work_hero_description')}
          </p>

          <Link
            href={`/${locale}/${localizedRoutes.contact[locale]}`}
            className="px-6 py-3 bg-skwd-button text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {t('work_hero_cta')}
          </Link>
        </div>

        {/* RIGHT: Hero Image (desktop only) */}
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
      </section>

      {/* ===== PARTNERS LOGO SCROLL SECTION ===== */}
      <section
        id="partners"
        aria-label="Our partners"
        className="py-10 bg-skwd-light-blue text-white overflow-hidden"
      >
        <div className="section-container">
          {/* Replace with your scrolling logos component */}
          <div className="flex items-center justify-around gap-12 animate-scroll-x whitespace-nowrap opacity-80">
            <Image src="/images/logos/partner1.png" alt="Partner 1" width={120} height={60} />
            <Image src="/images/logos/partner2.png" alt="Partner 2" width={120} height={60} />
            <Image src="/images/logos/partner3.png" alt="Partner 3" width={120} height={60} />
            <Image src="/images/logos/partner4.png" alt="Partner 4" width={120} height={60} />
            <Image src="/images/logos/partner5.png" alt="Partner 5" width={120} height={60} />
          </div>
        </div>
      </section>

      {/* ===== STEP-BY-STEP SECTION ===== */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="py-14 md:py-20 text-white"
      >
        <div className="section-container grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left justify-center">
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-semibold mb-4">
              {t('work_steps_title')}
            </h2>
            <p className="text-sm md:text-base font-light max-w-md">
              {t('work_steps_description')}
            </p>
          </div>

          <div
            className={`relative bg-skwd-light-blue rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 ${isMobile ? 'w-full h-auto py-4' : 'h-[490px] w-full'} max-[1188px]:w-[520px] max-[1188px]:mx-auto max-[776px]:w-full`}
          >
            {!isMobile ? (
              <CardSwap cardDistance={60} verticalDistance={70} delay={4000} pauseOnHover={false}>
                {/* Example Cards */}
                <Card>
                  <div className="absolute inset-0 z-0 opacity-10">
                    <img src="/images/Tile2.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="relative z-10 ml-4">
                    <h3 className="font-light">{t('work_steps_1')}</h3>
                    <div className="inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                      <Vote className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl mt-6">{t('work_steps_1_title')}</h2>
                    <p className="mt-2 max-w-[75%] font-light text-sm md:text-base">
                      {t('work_steps_1_description')}
                    </p>
                  </div>
                </Card>

                <Card>
                  <div className="absolute inset-0 z-0 opacity-10">
                    <img src="/images/Tile4.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="relative z-10 ml-4">
                    <h3 className="font-light">{t('work_steps_2')}</h3>
                    <div className="inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                      <MousePointer className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl mt-6">{t('work_steps_2_title')}</h2>
                    <p className="mt-2 max-w-[75%] font-light text-sm md:text-base">
                      {t('work_steps_2_description')}
                    </p>
                  </div>
                </Card>

                <Card>
                  <div className="absolute inset-0 z-0 opacity-10">
                    <img src="/images/Tile6.png" alt="" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="relative z-10 ml-4">
                    <h3 className="font-light">{t('work_steps_3')}</h3>
                    <div className="inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                      <BookA className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl mt-6">{t('work_steps_3_title')}</h2>
                    <p className="mt-2 max-w-[75%] font-light text-sm md:text-base">
                      {t('work_steps_3_description')}
                    </p>
                  </div>
                </Card>
              </CardSwap>
            ) : (
              <div className="w-full flex justify-center">
                <Carousel items={carouselItems} baseWidth={300} autoplay autoplayDelay={3000} pauseOnHover loop />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== WHY WORK WITH STUDENTS ===== */}
      <section id="why-students" aria-labelledby="why-students-heading" className="py-14 md:py-20 bg-skwd-blue text-white">
        <div className="section-container">
          <header className="text-center mb-6 md:mb-10">
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
            <p className="text-white/90 font-light text-sm md:text-base max-w-xl mx-auto">
              {t('work_why_description')}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard cardTitle="work_why_card1_title" cardDescription="work_why_card1_description" icon={Users} patternOverlaySrc="/images/Tile2.png" color="skwd-dark-blue" />
            <InfoCard cardTitle="work_why_card2_title" cardDescription="work_why_card2_description" icon={Clock8} patternOverlaySrc="/images/Tile3.png" color="skwd-dark-blue" />
            <InfoCard cardTitle="work_why_card3_title" cardDescription="work_why_card3_description" icon={HandCoins} patternOverlaySrc="/images/Tile4.png" color="skwd-dark-blue" />
            <InfoCard cardTitle="work_why_card4_title" cardDescription="work_why_card4_description" icon={HandCoins} patternOverlaySrc="/images/Tile1.png" color="skwd-dark-blue" />
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
          <h2 id="work-services-heading" className="text-2xl md:text-3xl text-center font-semibold mb-2 md:mb-4">
            <span className="text-white">{t('work_services_title').split(' ').slice(0, -2).join(' ')}</span>
            {' '}
            <span className="text-skwd-text-highlight">{t('work_services_title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="mb-6 md:mb-10 text-center text-sm md:text-base text-white/80 font-light">
            {t('work_services_description')}
          </p>

          {/* Mobile Toggle Menu - Only visible below md */}
          <div className="lg:hidden flex justify-center mb-8">
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
                {t('work_services_card1_title')}
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
                {t('work_services_card2_title')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-[1000px]:gap-12">
            {/* Left Card — Hospitality */}
            <article
              aria-labelledby="work-services-card1-title"
              className={`group relative rounded-2xl overflow-hidden shadow-lg aspect-square ${
                activeSector === 'hospitality' ? 'block' : 'hidden'
              } lg:block`}
            >
              {/* Background image (decorative) */}
              <Image
                src="/images/hospitality.jpeg"            
                alt=""                                    
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />

              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center gap-4">
                {/* Icon */}
                <span className="bg-white/15 backdrop-blur-sm p-3 md:p-4 rounded-full hidden sm:block">
                  <UtensilsCrossed className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                </span>

                {/* Title */}
                <h3 id="work_services-card1-title" className="hidden sm:block text-2xl font-semibold text-white">
                  {t('work_services_card1_title')}
                </h3>

                {/* Description */}
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
              {/* Background image (decorative) */}
              <Image
                src="/images/Logistiek.jpg"              
                alt=""                                   
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />

              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center gap-4">
                {/* Icon */}
                <span className="bg-white/15 backdrop-blur-sm p-3 md:p-4 rounded-full hidden sm:block">
                  <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                </span>

                {/* Title */}
                <h3 id="work-services-card2-title" className="hidden sm:block text-2xl font-semibold text-white">
                  {t('work_services_card2_title')}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm md:text-base font-light max-w-sm">
                  {t('work_services_card2_description')}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}