'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import { Users, Building2, UtensilsCrossed, Truck } from 'lucide-react';
import ProjectsBento from '@/components/ProjectsBento';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';


export default function HomePage() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' = ['en', 'fr', 'nl'].includes(localeFromPath) ? (localeFromPath as 'en' | 'fr' | 'nl') : 'en';


  return (
    <main>
      {/* ===== HERO SECTION (Main CTA area) ===== */}
      <section
        id="hero"
        aria-label="Main choices for visitors"
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Background split (responsive) */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* LEFT image → becomes TOP image on small screens */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/hero-left.JPG"
              alt="Hospitality services background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              quality={90}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-skwd-dark-blue/75 z-10" />
          </div>

          {/* RIGHT image → becomes BOTTOM image on small screens */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/hero-right.jpeg"
              alt="Logistics services background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              quality={90}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-skwd-blue/75 z-10" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 section-container grid grid-cols-1 md:grid-cols-2 gap-80 max-[1077px]:gap-40 max-[900px]:gap-20 max-[768px]:gap-0 items-center h-full text-white">
          {/* LEFT CARD – Work With Us (Clients) */}
          <article className="flex flex-col items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Users className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl text-center font-semibold">{t('hero_clients_title')}</h2>
            <p className="text-white/90 text-center font-light">{t('hero_clients_description')}</p>
            <Link
              href={`/${locale}/${localizedRoutes.work[locale]}`}
              className="inline-block mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('hero_clients_cta')}
            </Link>
          </article>

          {/* RIGHT CARD – Work For Us (Students) */}
          <article className="flex flex-col items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Building2 className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl text-center font-semibold">{t('hero_students_title')}</h2>
            <p className="text-white/90 text-center font-light">{t('hero_students_description')}</p>
            <a
              href="https://jobs.skwd.be/studentenjob"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('hero_students_cta')}
            </a>
          </article>
        </div>
      </section>

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
        <div className="py-20 section-container">
          <h2 id="projects-heading" className="text-3xl text-center font-semibold mb-4">
            <span className="text-white">{t('projects_title').split(' ').slice(0, -2).join(' ')}</span>
            {' '}
            <span className="text-skwd-text-highlight">{t('projects_title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="mb-10 text-white text-center font-light">{t('projects_description')}</p>

          <ProjectsBento />
        </div>
      </section>

      {/* ===== CEO TESTIMONIAL SECTION ===== */}
      <section
        id="testimony"
        className="bg-skwd-light-blue text-white"
        aria-labelledby="testimony-heading"
      >
        <div className="relative py-20 section-container">
          {/* Decorative big quote mark */}
          <h2
            id="testimony-heading"
            className="absolute top-5 md:left-4 text-[250px] leading-none text-skwd-text-highlight font-medium select-none pointer-events-none"
          >
            “
          </h2>

          {/* Flex container for text + image */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 mx-auto">
            {/* Text content */}
            <blockquote className="text-left max-w-xl mt-20">
              <p className="text-lg mb-6 font-light">{t('ceo_testimony')}</p>
              <footer className="relative pl-6">
                {/* Rounded left border */}
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-skwd-text-highlight rounded-full" />

                <p className="font-semibold">{t('ceo_name')}</p>
                <p className="text-sm opacity-80">{t('ceo_role')}</p>
                <p className="text-sm opacity-60 font-light">{t('ceo_experience')}</p>
              </footer>
            </blockquote>

            {/* CEO Image */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/ceo.jpeg"
                alt={t('ceo_name')}
                fill
                sizes="(max-width: 768px) 192px, 288px"
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>
        </div>
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
        <div className="py-20 px-6 section-container">
          <h2 id="sector-heading" className="text-3xl text-center font-semibold mb-4">
            <span className="text-white">{t('sector_title').split(' ').slice(0, -2).join(' ')}</span>
            {' '}
            <span className="text-skwd-text-highlight">{t('sector_title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="mb-10 text-center text-white/80 font-light">
            {t('sector_description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-[1000px]:gap-12">
            {/* Left Card — Hospitality */}
            <article
              aria-labelledby="sector-card1-title"
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-square"
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
                <span className="bg-white/15 backdrop-blur-sm p-4 rounded-full">
                  <UtensilsCrossed className="w-8 h-8 text-white" aria-hidden="true" />
                </span>

                {/* Title */}
                <h3 id="sector-card1-title" className="text-2xl font-semibold text-white">
                  {t('sector_card1_title')}
                </h3>

                {/* Description */}
                <p className="text-white/90 font-light max-w-sm">
                  {t('sector_card1_description')}
                </p>

                {/* CTA */}
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
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-square"
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
                <span className="bg-white/15 backdrop-blur-sm p-4 rounded-full">
                  <Truck className="w-8 h-8 text-white" aria-hidden="true" />
                </span>

                {/* Title */}
                <h3 id="sector-card2-title" className="text-2xl font-semibold text-white">
                  {t('sector_card2_title')}
                </h3>

                {/* Description */}
                <p className="text-white/90 font-light max-w-sm">
                  {t('sector_card2_description')}
                </p>

                {/* CTA */}
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
        </div>
      </section>
    </main>
  );
}