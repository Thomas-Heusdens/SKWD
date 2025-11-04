'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '@/lib/i18n';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';
import Image from 'next/image';

export default function ContactClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1];
  const locale: 'en' | 'fr' | 'nl' =
    ['en', 'fr', 'nl'].includes(localeFromPath)
      ? (localeFromPath as 'en' | 'fr' | 'nl')
      : 'en';

  const siteUrl = 'https://skwd.be';
  const pageUrl =
    locale === 'fr'
      ? `${siteUrl}/fr/contactez-nous`
      : locale === 'nl'
      ? `${siteUrl}/nl/contacteer-ons`
      : `${siteUrl}/en/contact-us`;

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

  // --- ContactPage ---
  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${pageUrl}#contactpage`,
    url: pageUrl,

    // Visible <h1> text (matches page headline)
    headline:
      locale === 'fr'
        ? 'Formulaire de contact'
        : locale === 'nl'
        ? 'Contact formulier'
        : 'Contact form',

    // Document title (window/tab)
    name:
      locale === 'fr'
        ? 'Contactez-nous - SKWD'
        : locale === 'nl'
        ? 'Contacteer ons - SKWD'
        : 'Contact us - SKWD',

    description:
      locale === 'fr'
        ? "Vous organisez un événement et recherchez des étudiants motivés ? Contactez notre équipe via cette page."
        : locale === 'nl'
        ? 'Heeft u binnenkort een feest, receptie of evenement en zoekt u enthousiaste studenten? Neem via deze pagina contact op met ons team.'
        : 'Organizing an event or reception? Contact SKWD to find enthusiastic students for your team.',

    isPartOf: { '@id': `${siteUrl}/#website` },
    inLanguage: locale,
    mainEntityOfPage: { '@id': `${siteUrl}/#organization` },
    contactType: 'Customer Service',
    mainEntity: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'SKWD',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+32 456 82 45 51',
          contactType: 'Customer Service',
          email: 'info@skwd.be',
          areaServed: 'BE',
          availableLanguage: ['English', 'French', 'Dutch'],
        },
      ],
    },
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: '',
    sector: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (sending) return;
    e.preventDefault();

    // --- Frontend validation ---
    if (!formData.inquiryType || !formData.sector) {
      setValidationError(
        locale === 'fr'
          ? 'Veuillez sélectionner le type de demande et le secteur.'
          : locale === 'nl'
          ? 'Selecteer het type aanvraag en de sector.'
          : 'Please select both inquiry type and sector.'
      );

      setTimeout(() => setValidationError(null), 5000);

      setSuccess(null);
      return;
    }
    setValidationError(null);
    setSending(true);
    setSuccess(null);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      company: formData.company,
      inquiryType: formData.inquiryType,
      sector: formData.sector,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        inquiryType: '',
        sector: '',
        message: '',
      });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSuccess(false);
    } finally {
      setSending(false);
    }
  };

  const inquiryOptions = [
    { value: '', label: t('contact_select') },
    { value: 'collaboration', label: t('contact_option_collaboration') },
    { value: 'question', label: t('contact_option_question') },
    { value: 'student_request', label: t('contact_option_student_request') },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organization, webSite, contactPage]),
        }}
      />
      <main>
        {/* ===== HERO SECTION ===== */}
        <header
          id="contact-hero"
          aria-label={t('contact_hero_aria')}
          className="relative w-full min-h-screen flex items-center py-12 sm:py-16 lg:py-20"
        >
          <div className="absolute inset-0 -z-10 opacity-5">
            <Image
              src="/images/pattern-bg.png"
              alt="Pattern background"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>
          
          <div className="section-container mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
              
              {/* LEFT: Title + Description + Contact Info + Map */}
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="space-y-4">
                  <AnimatedContent distance={40} duration={1.2} direction='horizontal'>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                      {(() => {
                        const words = t('contact_title').split(' ');
                        return (
                          <>
                            <span className="text-white">{words.slice(0, -1).join(' ')}</span>{' '}
                            <span className="text-skwd-text-highlight">{words.slice(-1).join(' ')}</span>
                          </>
                        );
                      })()}
                    </h1>
                  </AnimatedContent>
                  <AnimatedContent distance={30} duration={1.2} delay={0.2} direction='horizontal'>
                    <div className="h-1 w-20 bg-skwd-button rounded-full" />
                  </AnimatedContent>
                </div>

                <AnimatedContent distance={30} duration={1.2} delay={0.3} direction='horizontal'>
                  <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-xl">
                    {t('contact_description')}
                  </p>
                </AnimatedContent>
                
                {/* Contact Information Cards */}
                <AnimatedContent distance={30} duration={1.2} delay={0.5} direction='horizontal'>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {/* Email Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">{t('contact_email')}</h3>
                          <p className="text-sm text-white/70">info@skwd.be</p>
                        </div>
                      </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">{t('contact_phone')}</h3>
                          <p className="text-sm text-white/70">+32 456 82 45 51</p>
                        </div>
                      </div>
                    </div>

                    {/* Address Card - Full Width */}
                    <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">{t('contact_address')}</h3>
                          <p className="text-sm text-white/70">{t('contact_address_name')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
                

                {/* Google Maps Embed */}
                <div className="hidden lg:block rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-2">
                  <iframe
                    title="SKWD Brussels location"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=place_id:ChIJpbbnE-jDw0cRhte5ZDAwAaI`}
                  />
                </div>
              </div>

              {/* RIGHT: Form */}
              <AnimatedContent distance={30} duration={1.2} delay={0.2} reverse direction='horizontal'>
                <div className="w-full">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20">
                    <div className="mb-8 text-center">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {t('contact_form_title')}
                      </h2>
                      <div className="h-1 w-12 bg-skwd-button rounded-full mx-auto" />
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      {/* Full Name */}
                      <div className="form-group">
                        <label htmlFor="fullName" className="block text-sm font-medium text-white/90 mb-2">
                          {t('contact_fullname')} <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                          {t('contact_email')} <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Company */}
                      <div className="form-group">
                        <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                          {t('contact_company')} <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                          placeholder={t('contact_placeholder_company')}
                        />
                      </div>

                      {/* Two Column Layout for Selects on larger screens */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Inquiry Type */}
                        <Listbox value={formData.inquiryType} onChange={(value) => setFormData({...formData, inquiryType: value})}>
                          <div className="relative">
                            <label htmlFor="sector" className="block text-sm font-medium text-white/90 mb-2">
                              {t('contact_inquiry')} <span className="text-red-400">*</span>
                            </label>
                            <Listbox.Button
                              className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-left text-white cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 
                                ${!formData.inquiryType ? 'border-red-500/50' : 'border-white/20'}`}
                            >
                              {inquiryOptions.find(o => o.value === formData.inquiryType)?.label || t('contact_select')}
                              <ChevronDown className="w-5 h-5 text-white/60" />
                            </Listbox.Button>

                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute mt-2 w-full bg-slate-800 border border-white/20 rounded-lg shadow-lg z-10">
                                {inquiryOptions.map((option) => (
                                  <Listbox.Option
                                    key={option.value}
                                    value={option.value}
                                    className={({ active }) =>
                                      `cursor-pointer select-none px-4 py-2 text-white ${
                                        active ? 'bg-blue-500/30' : 'bg-slate-800'
                                      }`
                                    }
                                  >
                                    {option.label}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>

                        {/* Sector */}
                        <Listbox
                          value={formData.sector}
                          onChange={(value) => setFormData({ ...formData, sector: value })}
                        >
                          <div className="relative">
                            <label
                              htmlFor="sector"
                              className="block text-sm font-medium text-white/90 mb-2"
                            >
                              {t('contact_sector')} <span className="text-red-400">*</span>
                            </label>

                            {/* Button */}
                            <Listbox.Button
                              className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-left text-white cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 
                                ${!formData.sector ? 'border-red-500/50' : 'border-white/20'}`}
                            >
                              {formData.sector
                                ? {
                                    hospitality: t('contact_sector_hospitality'),
                                    logistics: t('contact_sector_logistics'),
                                    both: t('contact_sector_both'),
                                  }[formData.sector]
                                : t('contact_select')}
                              <ChevronDown className="w-5 h-5 text-white/60" />
                            </Listbox.Button>

                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute mt-2 w-full bg-slate-800 border border-white/20 rounded-lg shadow-lg z-10 overflow-hidden">
                                <Listbox.Option
                                  key="hospitality"
                                  value="hospitality"
                                  className={({ active }) =>
                                    `cursor-pointer select-none px-4 py-2 text-white ${
                                      active ? 'bg-blue-500/30' : 'bg-slate-800'
                                    }`
                                  }
                                >
                                  {t('contact_sector_hospitality')}
                                </Listbox.Option>

                                <Listbox.Option
                                  key="logistics"
                                  value="logistics"
                                  className={({ active }) =>
                                    `cursor-pointer select-none px-4 py-2 text-white ${
                                      active ? 'bg-blue-500/30' : 'bg-slate-800'
                                    }`
                                  }
                                >
                                  {t('contact_sector_logistics')}
                                </Listbox.Option>

                                <Listbox.Option
                                  key="both"
                                  value="both"
                                  className={({ active }) =>
                                    `cursor-pointer select-none px-4 py-2 text-white ${
                                      active ? 'bg-blue-500/30' : 'bg-slate-800'
                                    }`
                                  }
                                >
                                  {t('contact_sector_both')}
                                </Listbox.Option>
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                          {t('contact_message')} <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder={t('contact_placeholder_inquiry')}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={sending}
                        className={`w-full px-5 py-2 flex items-center justify-center gap-2 
                          bg-skwd-button text-white font-medium rounded-lg 
                          hover:opacity-90 transition-all duration-200 
                          disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {sending ? (
                          <>
                            <svg
                              className="w-5 h-5 animate-spin text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              ></path>
                            </svg>
                          </>
                        ) : (
                          <span>{t('contact_send') || 'Send'}</span>
                        )}
                      </button>
                      {validationError && (
                        <div
                          className="px-5 py-2 rounded-lg border text-center transition-all duration-300 bg-yellow-500/10 border-yellow-500 text-yellow-300"
                        >
                          {validationError}
                        </div>
                      )}
                      {success !== null && (
                        <div
                          className={`px-5 py-2 rounded-lg border text-center transition-all duration-300 ${
                            success
                              ? 'bg-green-500/10 border-green-500 text-green-300'
                              : 'bg-red-500/10 border-red-500 text-red-300'
                          }`}
                        >
                          {success
                            ? t('contact_success_message')
                            : t('contact_error_message')}
                        </div>
                      )}
                    </form>
                  </div>

                  {/* Mobile Map - Visible only on mobile */}
                  <div className="lg:hidden mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                      title="SKWD Brussels location"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Rue+de+la+Science+14,Brussels,Belgium`}
                    ></iframe>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}