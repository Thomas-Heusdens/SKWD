'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function AboutClient() {
  const { t } = useTranslation();

  return (
    <main id="main-content">
      {/* ===== HERO SECTION ===== */}
      <section
        id="about-hero"
        aria-label="About SKWD hero section"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      >
        {/* ===== Background pattern ===== */}
        <div className="absolute inset-0 -z-20 opacity-10">
          <Image
            src="/images/pattern-bg.png"
            alt="Pattern background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ===== Section content container ===== */}
        <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
          {/* Centered team image with dark overlay */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 peer-hover:z-20 transition-all duration-300 group">
            <div className="relative">
              <Image
                src="/images/team-hero.jpeg"
                alt={t('about_team_photo_alt')}
                width={538}
                height={360}
                className="object-cover rounded-lg shadow-lg"
                priority
              />
              {/* Dark overlay ON TOP of the image - hidden on hover */}
              <div className="absolute inset-0 bg-black/40 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Invisible hover trigger layer */}
          <div className="absolute inset-0 flex items-center justify-center z-30 peer pointer-events-none">
            <div 
              className="w-[538px] h-[360px] pointer-events-auto cursor-pointer"
              onMouseEnter={(e) => {
                const imageContainer = e.currentTarget.parentElement?.parentElement?.querySelector('.group');
                imageContainer?.classList.add('!z-20');
              }}
              onMouseLeave={(e) => {
                const imageContainer = e.currentTarget.parentElement?.parentElement?.querySelector('.group');
                imageContainer?.classList.remove('!z-20');
              }}
            ></div>
          </div>

          {/* Text overlay container */}
          <div className="relative w-full flex items-center justify-center">
            {/* Filled background text */}
            <p className="absolute -z-11 inset-0 flex flex-col items-center justify-center select-none leading-[0.9] text-center">
              <span className="block font-extrabold text-white text-[clamp(3rem,10vw,12rem)] [-webkit-text-stroke:2px_white] [text-stroke:2px_white]">
                YOUR STAFFING
              </span>
              <span className="block font-extrabold text-skwd-text-highlight text-[clamp(3rem,10vw,12rem)] [-webkit-text-stroke:2px_#FE5F55] [text-stroke:2px_#FE5F55]">
                AGENCY
              </span>
            </p>

            {/* Outlined foreground text */}
            <h1 className="absolute z-10 inset-0 flex flex-col items-center justify-center select-none leading-[0.9] text-center pointer-events-none">
              <span className="block font-extrabold text-transparent text-[clamp(3rem,10vw,12rem)] [-webkit-text-stroke:2px_white] [text-stroke:2px_white]">
                YOUR STAFFING
              </span>
              <span className="block font-extrabold text-transparent text-[clamp(3rem,10vw,12rem)] [-webkit-text-stroke:2px_#FE5F55] [text-stroke:2px_#FE5F55]">
                AGENCY
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===== AGENCY NUMBERS SECTION ===== */}
      <section
        id="agency-numbers"
        aria-labelledby="agency-numbers-heading"
        className="py-8 bg-skwd-dark-blue text-white"
      >
        <div className="section-container">

          <div className="flex flex-wrap justify-center items-center divide-x divide-white">
            {/* Example number card */}
            <article className="px-8 text-center">
              <p className="text-5xl font-extrabold">2019</p>
              <p className="text-sm tracking-wide font-light">
                {t('about_numbers_established')}
              </p>
            </article>

            <article className="px-8 text-center">
              <p className="text-5xl font-extrabold">250+</p>
              <p className="text-sm tracking-wide font-light">
                {t('about_numbers_students')}
              </p>
            </article>

            <article className="px-8 text-center">
              <p className="text-5xl font-extrabold">80+</p>
              <p className="text-sm tracking-wide font-light">
                {t('about_numbers_clients')}
              </p>
            </article>

            <article className="px-8 text-center">
              <p className="text-5xl font-extrabold">98%</p>
              <p className="text-sm tracking-wide font-light">
                {t('about_numbers_fill_rate')}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section
        id="team"
        aria-labelledby="team-heading"
        className="pb-20 bg-skwd-dark-blue text-gray-800"
      >
        <div className="section-container">
          <header className="mb-12 text-center mx-auto">
            <h2
              id="team-heading"
              className="text-4xl mb-4"
              dangerouslySetInnerHTML={{ __html: t('about_team_intro_headline') }}
            />
            <p>{t('about_team_intro_text')}</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <article
              aria-label={t('about_team_member_name_1')}
              className="flex flex-col items-center text-center"
            >
              <figure>
                <Image
                  src="/images/team-member1.jpg"
                  alt="Tommy Ulens"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <figcaption className="mt-4">
                  <p className="text-lg font-medium">Tommy Ulens</p>
                  <p className="text-sm opacity-80">{t('about_team_member_role_1')}</p>
                  <p className="text-sm mt-2">{t('about_team_member_desc_1')}</p>
                  <a
                    href={t('about_team_member_linkedin_1')}
                    aria-label="Tommy Ulens LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-skwd-blue"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </figcaption>
              </figure>
            </article>
          </div>
        </div>
      </section>

      {/* ===== QUOTE / MOTTO SECTION ===== */}
      <section
        id="quote"
        aria-label="Agency motto section"
        className="relative bg-skwd-blue py-20 text-center text-white"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/pattern-bg.png"
            alt="Partern background"
            fill
            className="object-cover"
          />
        </div>
        <div className="section-container">
          <h2 className="text-4xl">{t('about_quote')}</h2>
        </div>
      </section>

      {/* ===== WHY STUDENTS CHOOSE US ===== */}
      <section
        id="why-us"
        aria-labelledby="why-us-heading"
        className="py-20 bg-skwd-dark-blue"
      >
        <div className="section-container">
          <header className="text-center mb-12">
            <h2 id="why-us-heading" className="text-3xl mb-3">
              {t('about_why_title')}
            </h2>
            <p>{t('about_why_description')}</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example card */}
            <article className="relative p-6 rounded-xl bg-skwd-blue text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/pattern-overlay.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-3">{/* Icon placeholder */}</div>
                <h3 className="text-xl mb-2">{t('about_why_card1_title')}</h3>
                <p className="text-sm opacity-90">{t('about_why_card1_description')}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA SECTION ===== */}
      <section
        id="contact-cta"
        aria-labelledby="contact-cta-heading"
        className="relative bg-skwd-light-blue py-24 text-white"
      >
        {/* Pattern background full opacity */}
        <div className="absolute inset-0">
          <Image
            src="/images/pattern-bg.png"
            alt="Pattern background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative section-container flex justify-center z-10">
          <div className="bg-skwd-blue p-10 rounded-2xl max-w-lg text-center">
            <header className="mb-6">
              <h2 id="contact-cta-heading" className="text-3xl mb-2">
                {t('about_contact_title')}
              </h2>
              <p>{t('about_contact_description')}</p>
            </header>

            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-5 py-2 bg-skwd-button text-white rounded-lg">
                {t('about_faq_cta')}
              </button>
              <button className="px-5 py-2 bg-white text-skwd-button rounded-lg">
                {t('about_contact_cta')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}