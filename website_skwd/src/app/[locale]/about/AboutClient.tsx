'use client';

import { useTranslation } from '@/lib/i18n';
import Image from 'next/image';
import Stack from "@/components/Stack";
import RollingCounter from '@/components/RollingCounter';
import TeamMemberCard from '@/components/TeamMember';

export default function AboutClient() {
  const { t } = useTranslation();

  const images = [
    { id: 1, img: "/images/planner-2.jpg" },
    { id: 2, img: "/images/team-2.jpeg" },
    { id: 3, img: "/images/planner-1.jpeg" },
    { id: 4, img: "/images/team-hero.jpeg" },
  ];

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
          <div className="absolute inset-0 flex items-center justify-center z-10 group transition-all duration-300">
            <div className="relative">
              {/* Stack replaces the single team image */}
              <Stack
                sendToBackOnClick={true}
                cardDimensions={{ width: 540, height: 360 }}
                cardsData={images}
              />
            </div>
          </div>

          {/* Text overlay container */}
          <div className="relative w-full flex items-center justify-center">
            {/* Outlined foreground text */}
            <h1 className="absolute hover:z-40 -z-10 inset-0 flex flex-col items-center justify-center select-none leading-[0.9] text-center cursor-pointer">
              <span className="block font-extrabold text-white text-[clamp(3rem,10vw,12rem)]">
                YOUR STAFFING
              </span>
              <span className="block font-extrabold text-skwd-text-highlight text-[clamp(3rem,10vw,12rem)]">
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
          <div className="flex justify-between items-center">
            {/* Left border line */}
            <div className="h-16 w-px bg-white rounded-full"></div>

            {/* Example number card */}
            <article className="flex-1 text-center">
              <RollingCounter
                finalValue={2024}
                label={t('about_numbers_established')}
                places={[1000, 100, 10, 1]}
              />
            </article>

            {/* Divider line */}
            <div className="h-16 w-px bg-white rounded-full"></div>

            <article className="flex-1 text-center">
              <RollingCounter
                finalValue={250}
                label={t('about_numbers_students')}
                suffix="+"
                places={[100, 10, 1]}
              />
            </article>

            {/* Divider line */}
            <div className="h-16 w-px bg-white rounded-full"></div>

            <article className="flex-1 text-center">
              <RollingCounter
                finalValue={80}
                label={t('about_numbers_clients')}
                suffix="+"
                places={[10, 1]}
              />
            </article>

            {/* Divider line */}
            <div className="h-16 w-px bg-white rounded-full"></div>

            <article className="flex-1 text-center">
              <RollingCounter
                finalValue={98}
                label={t('about_numbers_fill_rate')}
                suffix="%"
                places={[10, 1]}
              />
            </article>

            {/* Right border line */}
            <div className="h-16 w-px bg-white rounded-full"></div>
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
            <h2 id="team-heading" className="text-4xl mb-4 font-medium text-center">
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
            <p className='font-light text-sm'>{t('about_team_intro_text')}</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <TeamMemberCard
              memberNumber={1}
              imageUrl="/images/ceo.jpeg"
              name="Tommy Ulens"
              linkedinUrl="https://www.linkedin.com/in/tommy-ulens-017747225/"
            />
            
            <TeamMemberCard
              memberNumber={2}
              imageUrl="/images/benjamin.jpeg"
              name="Benjamin Fontenai"
              linkedinUrl="https://www.linkedin.com/in/benjamin-fontenai-a04794236/"
            />

            <TeamMemberCard
              memberNumber={3}
              imageUrl="/images/antoine.jpeg"
              name="Antoine Collin"
              linkedinUrl="https://www.linkedin.com/in/antoine-collin-3937292a5/"
            />

            <TeamMemberCard
              memberNumber={4}
              imageUrl="/images/cintia.jpeg"
              name="Cintia Saliba"
              linkedinUrl="https://www.linkedin.com/in/cintia-saliba/"
            />

            <TeamMemberCard
              memberNumber={5}
              imageUrl="/images/adam.jpg"
              name="Adam Sakhraoui"
              linkedinUrl="https://www.linkedin.com/in/adam-sakhraoui-672281353/"
            />

            <TeamMemberCard
              memberNumber={6}
              imageUrl="/images/thomas.jpg"
              name="Thomas Heusdens"
              linkedinUrl="https://www.linkedin.com/in/thomas-heusdens-0bba19258/"
            />
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
          <h2 className="text-4xl text-center font-semibold">
            {(() => {
              const words = t('about_quote').split(' ');
              const middleStart = Math.floor(words.length / 2) - 1;
              const middleEnd = middleStart + 2;
              const endStart = words.length - 3; // three last words

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
            <h2 id="why-us-heading" className="text-3xl mb-3 text-center font-semibold">
              <span className="text-white">
                {t('about_why_title').split(' ').slice(0, -2).join(' ')}
              </span>{' '}
              <span className="text-skwd-text-highlight">
                {t('about_why_title').split(' ').slice(-2).join(' ')}
              </span>
            </h2>
            <p className='font-light text-sm w-[80%] mx-auto'>{t('about_why_description')}</p>
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
              <h2 id="contact-cta-heading" className="text-3xl mb-2 text-center font-semibold">
                <span className="text-white">
                  {t('about_contact_title').split(' ').slice(0, -2).join(' ')}
                </span>{' '}
                <span className="text-skwd-text-highlight">
                  {t('about_contact_title').split(' ').slice(-2).join(' ')}
                </span>
              </h2>
              <p className='font-light text-sm'>{t('about_contact_description')}</p>
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