'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import InfoCard from '@/components/InfoCard';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import { BadgeCheck, Clock8, ChefHat, Vote, MousePointer, BookA, BicepsFlexed } from 'lucide-react';
import CardSwap, { Card } from '@/components/CardSwap';

export default function HospitalityClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';

  return (
    <main id="main-content">
      {/* ===== HERO SECTION ===== */}
      <section
        id="hospitality-hero"
        aria-label="Hospitality hero section"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white"
      >
        {/* Background image */}
        <Image
          src="/images/hospitality-hero.jpg"
          alt="Hospitality services hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-skwd-dark-blue/70" />

        {/* Content overlay */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-center">
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
          <p className="font-light mb-8">{t('hospitality_description')}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {/* Apply button */}
            <Link
              href="https://jobs.skwd.be/hospitality"
              className="px-6 py-3 bg-skwd-button rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t('hospitality_cta_apply')}
            </Link>
            {/* Contact button */}
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
        className="py-20 px-6 text-white"
      >
        <div className="section-container text-center">
          <h2 id="job-types-heading" className="text-4xl font-semibold mb-4 text-center">
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
          <p className="max-w-2xl font-light text-sm mx-auto text-white/90 mb-10">
            {t('hospitality_jobs_description')}
          </p>

          {/* Carousel placeholder */}
          <div
            id="job-carousel"
            className="relative w-full overflow-hidden"
            aria-label="Job types carousel"
          >
            {/* TODO: Replace with your React carousel later */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <article
                  key={i}
                  className="relative rounded-xl overflow-hidden group h-64 cursor-pointer"
                >
                  <Image
                    src={`/images/hospitality-job${i}.jpg`}
                    alt={t(`hospitality_job${i}_alt`)}
                    fill
                    sizes="(max-width:768px)100vw,33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white z-10">
                    <h3 className="text-2xl font-semibold mb-2">
                      {t(`hospitality_job${i}_title`)}
                    </h3>
                    <p className="text-sm text-white/90">
                      {t(`hospitality_job${i}_description`)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVENT EXPERIENCE SECTION ===== */}
      <section
        id="event-experience"
        aria-labelledby="event-experience-heading"
        className="py-20 bg-skwd-blue text-white"
      >
        <div className="section-container">
          <header className="text-center mb-12">
            <h2 id="event-experience-heading" className="text-3xl font-semibold mb-3 text-center">
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
            <p className="text-white/80 max-w-xl mx-auto">
              {t('hospitality_event_description')}
            </p>
          </header>

          {/* InfoCards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard cardTitle='hospitality_event_card_title_1' cardDescription='hospitality_event_card_description_1' icon={Clock8} patternOverlaySrc="/images/Tile2.png" color='skwd-dark-blue' />
            <InfoCard cardTitle='hospitality_event_card_title_2' cardDescription='hospitality_event_card_description_2' icon={ChefHat} patternOverlaySrc="/images/Tile3.png" color='skwd-dark-blue' />
            <InfoCard cardTitle='hospitality_event_card_title_3' cardDescription='hospitality_event_card_description_3' icon={BadgeCheck} patternOverlaySrc="/images/Tile4.png" color='skwd-dark-blue' />
          </div>
        </div>
      </section>

      {/* ===== APPLY EASILY SECTION ===== */}
      <section
        id="apply-easy"
        aria-labelledby="apply-easy-heading"
        className="py-20 px-6"
      >
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side text */}
          <div>
            <h2
              id="apply-easy-heading"
              className="text-4xl font-semibold mb-12 text-white"
            >
              {(() => {
                const words = t('hospitality_easy_apply_title').split(' ');
                const middleStart = Math.floor(words.length / 2) - 1;
                const middleEnd = middleStart + 2;

                return (
                  <>
                    {/* First 3 words highlighted */}
                    <span className="text-skwd-text-highlight">{words.slice(0, 3).join(' ')}</span>{' '}
                    {/* Normal section */}
                    <span className="text-white">{words.slice(3, middleStart).join(' ')}</span>{' '}
                    {/* Highlight two words around the middle */}
                    <span className="text-skwd-text-highlight">{words.slice(middleStart, middleEnd).join(' ')}</span>{' '}
                    {/* Rest normal */}
                    <span className="text-white">{words.slice(middleEnd).join(' ')}</span>
                  </>
                );
              })()}
            </h2>
            <Link
              href="https://jobs.skwd.be/hospitality"
              className="px-6 py-3 bg-skwd-button text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t('hospitality_easy_apply_cta')}
            </Link>
          </div>

          {/* Right side animation placeholder */}
          <div
            aria-label="Animated step-by-step guide"
            className="relative w-full h-[500px] bg-skwd-light-blue rounded-xl flex items-center justify-center overflow-hidden"
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={4000}
              pauseOnHover={false}
            >
              <Card>
                <h3 className='ml-4 mt-3 font-light'>{t('hospitality_step_1')}</h3>
                <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                  <Vote className="w-10 h-10 text-white" />
                </div>
                <h2 className='text-2xl ml-4 mt-6'>{t('hospitality_step_1_title')}</h2>
                <p className='ml-4 mt-2 max-w-[75%] font-light text-sm'>{t('hospitality_step_1_description')}</p>
              </Card>
              <Card>
                <h3 className='ml-4 mt-3 font-light'>{t('hospitality_step_2')}</h3>
                <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                  <MousePointer className="w-10 h-10 text-white" />
                </div>
                <h2 className='text-2xl ml-4 mt-6'>{t('hospitality_step_2_title')}</h2>
                <p className='ml-4 mt-2 max-w-[75%] font-light text-sm'>{t('hospitality_step_2_description')}</p>
              </Card>
              <Card>
                <h3 className='ml-4 mt-3 font-light'>{t('hospitality_step_3')}</h3>
                <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                  <BookA className="w-10 h-10 text-white" />
                </div>
                <h2 className='text-2xl ml-4 mt-6'>{t('hospitality_step_3_title')}</h2>
                <p className='ml-4 mt-2 max-w-[75%] font-light text-sm'>{t('hospitality_step_3_description')}</p>
              </Card>
              <Card>
                <h3 className='ml-4 mt-3 font-light'>{t('hospitality_step_4')}</h3>
                <div className="ml-4 inline-block bg-white/15 backdrop-blur rounded-full p-3 mt-6 flex items-center justify-center">
                  <BicepsFlexed className="w-10 h-10 text-white" />
                </div>
                <h2 className='text-2xl ml-4 mt-6'>{t('hospitality_step_4_title')}</h2>
                <p className='ml-4 mt-2 max-w-[75%] font-light text-sm'>{t('hospitality_step_4_description')}</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>

      {/* ===== MASONRY GALLERY SECTION ===== */}
      <section
        id="hospitality-gallery"
        aria-labelledby="hospitality-gallery-heading"
        className="py-20 bg-skwd-dark-blue text-white"
      >
          {/* Placeholder until React Bits Masonry is implemented */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-0"
            aria-label="Hospitality gallery images"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-[4/3]">
                <Image
                  src={`/images/hospitality-gallery${i}.jpg`}
                  alt={t(`hospitality_gallery${i}_alt`)}
                  fill
                  sizes="(max-width:768px)50vw,33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
      </section>
    </main>
  );
}
