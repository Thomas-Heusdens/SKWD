'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import { Users, Building2 } from 'lucide-react';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      {/* ===== HERO SECTION (Main CTA area) ===== */}
      <section
        id="hero"
        aria-label="Main choices for visitors"
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Background split (left & right images) */}
        <div className="absolute inset-0 flex">
          {/* LEFT image */}
          <div className="relative w-1/2 h-full">
            <Image
              src="/images/hero-left.JPG"
              alt="Hospitality services background"
              fill
              sizes="50vw"
              className="object-cover"
              priority
              quality={90}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-skwd-dark-blue/75 z-10" />
          </div>

          {/* RIGHT image */}
          <div className="relative w-1/2 h-full">
            <Image
              src="/images/hero-right.jpeg"
              alt="Logistics services background"
              fill
              sizes="50vw"
              className="object-cover"
              priority
              quality={90}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-skwd-blue/75 z-10" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 section-container grid grid-cols-1 md:grid-cols-2 gap-80 items-center h-full text-white">
          {/* LEFT CARD – Work With Us (Clients) */}
          <article className="flex flex-col items-center gap-4 rounded-2xl">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Users className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl text-center font-semibold">{t('hero_clients_title')}</h2>
            <p className="text-white/90 text-center font-light">{t('hero_clients_description')}</p>
            <button className="mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg cursor-pointer">
              {t('hero_clients_cta')}
            </button>
          </article>

          {/* RIGHT CARD – Work For Us (Students) */}
          <article className="flex flex-col items-center gap-4 p-8 rounded-2xl">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Building2 className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl font-semibold">{t('hero_students_title')}</h2>
            <p className="text-white/90 text-center font-light">{t('hero_students_description')}</p>
            <button className="mt-4 px-5 py-2 bg-skwd-button text-white font-medium rounded-lg cursor-pointer">
              {t('hero_students_cta')}
            </button>
          </article>
        </div>
      </section>

      {/* ===== PROJECT GALLERY / IMPACT SECTION ===== */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="py-16 px-6 section-container">
          <h2 id="projects-heading" className="text-3xl font-semibold mb-4">
            {t('projects_title')}
          </h2>
          <p className="mb-10 text-gray-700 font-light">{t('projects_description')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example project card */}
            <article className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm p-4">
              <div className="relative w-full aspect-video mb-3">
                <Image
                  src="/images/event1.jpg"
                  alt="Event setup with SKWD team"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{t('project1_title')}</h3>
              <p className="text-gray-600 text-sm font-light">{t('project1_tag')}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CEO TESTIMONIAL SECTION ===== */}
      <section
        id="testimony"
        className="bg-skwd-light-blue text-white"
        aria-labelledby="testimony-heading"
      >
        <div className="py-16 px-6 section-container"> 
          <h2 id="testimony-heading" className="text-3xl font-extrabold mb-6">
            "
          </h2>

          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 font-light">{t('ceo_testimony')}</p>
            <footer>
              <div className="relative w-20 h-20 mx-auto mb-3">
                <Image
                  src="/images/ceo.jpg"
                  alt={t('ceo_name')}
                  fill
                  sizes="80px"
                  className="rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">{t('ceo_name')}</p>
              <p className="text-sm opacity-80">{t('ceo_role')}</p>
              <p className="text-sm opacity-60 font-light">{t('ceo_experience')}</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ===== SECONDARY INFO SECTION ===== */}
      <section
        id="two-different-sectors"
        aria-labelledby="sectors-heading"
      >
        <div className="py-16 px-6 section-container"> 
          <h2 id="sectors-heading" className="text-3xl font-semibold mb-4">
            {t('sector_title')}
          </h2>
          <p className="mb-10 text-gray-700 font-light">{t('sector_description')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Info */}
            <article className="flex flex-col gap-3">
              <Image 
                src="/icons/quality.svg" 
                alt="" 
                width={40} 
                height={40}
              />
              <h3 className="text-xl font-medium">{t('sector_card1_title')}</h3>
              <p className="text-gray-600 font-light">{t('sector_card1_description')}</p>
              <button className="mt-3 px-5 py-2 font-medium bg-skwd-button text-white rounded-full">
                {t('sector_card1_cta')}
              </button>
            </article>

            {/* Right Info */}
            <article className="flex flex-col gap-3">
              <Image 
                src="/icons/team.svg" 
                alt="" 
                width={40} 
                height={40}
              />
              <h3 className="text-xl font-medium">{t('sector_card2_title')}</h3>
              <p className="text-gray-600 font-light">{t('sector_card2_description')}</p>
              <button className="mt-3 px-5 py-2 font-medium bg-skwd-button text-white rounded-full">
                {t('sector_card2_cta')}
              </button>
            </article>
          </div>
        </div>
        
      </section>
    </main>
  );
}