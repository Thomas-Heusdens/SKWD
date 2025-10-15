'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';

export default function ContactClient() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: '',
    sector: '',
    message: '',
  });

  const inquiryOptions = [
    { value: '', label: t('contact_select') },
    { value: 'collaboration', label: t('contact_option_collaboration') },
    { value: 'question', label: t('contact_option_question') },
    { value: 'student_request', label: t('contact_option_student_request') },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // later: send via API (Resend, Formspree, or custom backend)
  };

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section
        id="contact-hero"
        aria-label={t('contact_hero_aria')}
        className="relative w-full min-h-screen flex items-center py-12 sm:py-16 lg:py-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <img
            src="/images/pattern-bg.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        
        <div className="section-container mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* LEFT: Title + Description + Contact Info + Map */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Title */}
              <div className="space-y-4">
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
                <div className="h-1 w-20 bg-skwd-button rounded-full" />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-xl">
                {t('contact_description')}
              </p>

              {/* Contact Information Cards */}
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
                      <p className="text-sm text-white/70">tommy@skwd.be</p>
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
                      <p className="text-sm text-white/70">+32 2 123 45 67</p>
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

              {/* Google Maps Embed - Hidden on mobile, visible on lg+ */}
              <div className="hidden lg:block rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-2">
                <iframe
                  title="SKWD Brussels location"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Rue+de+la+Science+14,Brussels,Belgium`}
                ></iframe>
              </div>
            </div>

            {/* RIGHT: Form */}
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
                      {t('contact_company')}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
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
                          {t('contact_sector')}
                        </label>
                        <Listbox.Button className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-left text-white cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400">
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
                          {t('contact_sector')}
                        </label>

                        {/* Button */}
                        <Listbox.Button className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-left text-white cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                          {/* Show selected label or default */}
                          {formData.sector
                            ? {
                                hospitality: t('contact_sector_hospitality'),
                                logistics: t('contact_sector_logistics'),
                                both: t('contact_sector_both'),
                              }[formData.sector]
                            : t('contact_select')}
                          <ChevronDown className="w-5 h-5 text-white/60" />
                        </Listbox.Button>

                        {/* Dropdown options */}
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
                    className="w-full px-5 py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    {t('contact_send')}
                  </button>
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
          </div>
        </div>
      </section>
    </main>
  );
}