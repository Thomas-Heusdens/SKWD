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
import Carousel from '@/components/Carousel';
import useIsMobile from '@/hooks/useIsMobile';

export default function HospitalityClient() {
  const isMobile = useIsMobile(776);
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';

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

  const carouselItems = [
    {
      step: t('hospitality_step_1'),
      title: t('hospitality_step_1_title'),
      description: t('hospitality_step_1_description'),
      id: 1,
      icon: <Vote className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
    {
      step: t('hospitality_step_2'),
      title: t('hospitality_step_2_title'),
      description: t('hospitality_step_2_description'),
      id: 2,
      icon: <MousePointer className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
    {
      step: t('hospitality_step_3'),
      title: t('hospitality_step_3_title'),
      description: t('hospitality_step_3_description'),
      id: 3,
      icon: <BookA className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
    {
      step: t('hospitality_step_4'),
      title: t('hospitality_step_4_title'),
      description: t('hospitality_step_4_description'),
      id: 4,
      icon: <BicepsFlexed className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] text-white" />,
    },
  ];

  return (
    <main id="main-content">
      {/* ===== HERO SECTION ===== */}
      <section
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
          <p className="font-light text-sm md:text-base mb-8">{t('hospitality_description')}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="https://jobs.skwd.be/hospitality"
              className="px-6 py-3 bg-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t('hospitality_cta_apply')}
            </Link>
            <Link
              href={`/${locale}/${localizedRoutes.contact[locale]}`}
              className="px-6 py-3 bg-white text-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t('hospitality_cta_contact')}
            </Link>
          </div>
        </div>
      </section>

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
          <p className="max-w-2xl font-light text-sm md:text-base mx-auto text-white/90 mb-6 md:mb-10">
            {t('hospitality_jobs_description')}
          </p>

          <div
            id="job-carousel"
            className="relative w-full overflow-hidden"
            aria-label="Job types carousel"
          >
            <div className="w-full">
              <EmblaCarousel slides={carouselSlides} />
            </div>
          </div>
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
            <p className="text-white/90 font-light text-sm md:text-base max-w-xl mx-auto">
              {t('hospitality_event_description')}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard cardTitle='hospitality_event_card_title_1' cardDescription='hospitality_event_card_description_1' icon={Clock8} patternOverlaySrc="/images/Tile2.png" color='skwd-dark-blue' />
            <InfoCard cardTitle='hospitality_event_card_title_2' cardDescription='hospitality_event_card_description_2' icon={ChefHat} patternOverlaySrc="/images/Tile3.png" color='skwd-dark-blue' />
            <InfoCard cardTitle='hospitality_event_card_title_3' cardDescription='hospitality_event_card_description_3' icon={BadgeCheck} patternOverlaySrc="/images/Tile4.png" color='skwd-dark-blue' />
          </div>
        </div>
      </section>

      {/* ===== APPLY EASILY SECTION ===== */}
      <section id="apply-easy" aria-labelledby="apply-easy-heading" className="py-14 md:py-20 px-6">
        <div className="section-container grid grid-cols-1 max-[1188px]:grid-cols-1 min-[1188px]:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col min-[1188px]:items-start min-[1188px]:text-left items-center text-center justify-center min-[1188px]:justify-start transition-all duration-300">
            <h2 id="apply-easy-heading" className="text-3xl md:text-4xl font-semibold mb-12 text-white min-[1188px]:max-w-none max-[1188px]:mb-4"
            >
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

            <Link
              href="https://jobs.skwd.be/hospitality"
              className="
                px-6 py-3 bg-skwd-button text-white rounded-lg font-medium 
                hover:opacity-90 transition-opacity
              "
            >
              {t('hospitality_easy_apply_cta')}
            </Link>
          </div>

          {/* RIGHT: ANIMATION / CAROUSEL */}
          <div
            className={`
              relative bg-skwd-light-blue rounded-xl 
              flex items-center justify-center overflow-hidden
              transition-all duration-300
              ${isMobile ? 'w-full h-auto py-4' : 'h-[490px] w-full'}
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
                    <img
                      src="/images/Tile1.png"
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
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
                    <img
                      src="/images/Tile6.png"
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
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
                    <img
                      src="/images/Tile3.png"
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
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
                    <img
                      src="/images/Tile2.png"
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
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
              <div className="w-full flex justify-center">
                <Carousel
                  items={carouselItems}
                  baseWidth={300}
                  loop
                />
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
            '/images/image2.jpg',
            '/images/image3.jpg',
            '/images/image4.jpg',
            '/images/image5.jpg',
            '/images/image6.jpg',
            '/images/image7.jpg',
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
  );
}
