'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram, MapPin, Phone, MailPlus } from 'lucide-react';
import { localizedRoutes } from '@/lib/routes';

type LocalizedRouteKey = keyof typeof localizedRoutes;
type Locale = 'en' | 'fr' | 'nl';

export default function Footer() {
  const translations = {
    en: {
      recognition_label: 'Recognition of employment agency:',
      recognition_number: '(Recognition broadcast:',
      quick_links: 'Quick links',
      about_us: 'About us',
      horeca_sector: 'Hospitality sector',
      logistics_sector: 'Logistics sector',
      for_students: 'For students',
      apply: 'Apply',
      faq: 'FAQ',
      contact: 'Contact',
      contact_cta: 'Get in touch',
      privacy_policy: 'Privacy Policy & General Terms',
      made_by: 'Made by',
      work: "Work with us",
      address: "Rue Picard 7/ 204, 1000 Brussels",
    },
    fr: {
      recognition_label: 'Reconnaissance agence intérimaire:',
      recognition_number: '(Reconnaissance intérimaire:',
      quick_links: 'Liens rapides',
      about_us: 'À propos',
      horeca_sector: 'Secteur hospitalité',
      logistics_sector: 'Secteur logistique',
      for_students: 'Pour étudiants',
      apply: 'Postuler',
      faq: 'FAQ',
      contact: 'Contact',
      contact_cta: 'Contactez-nous',
      privacy_policy: 'Politique de Confidentialité & Conditions Générales',
      made_by: 'Créé par',
      work: "Collaborer avec nous",
      address: "Rue Picard 7/ 204, 1000 Bruxelles",
    },
    nl: {
      recognition_label: 'Erkenning uitzendbureau:',
      recognition_number: '(Erkenning uitzend:',
      quick_links: 'Quick links',
      about_us: 'Over ons',
      horeca_sector: 'Hospitality sector',
      logistics_sector: 'Logistiek sector',
      for_students: 'Voor studenten',
      apply: 'Solliciteren',
      faq: 'FAQ',
      contact: 'Contact',
      contact_cta: 'Neem contact op',
      privacy_policy: 'Privacy Policy & Algemene voorwaarden',
      made_by: 'Gemaakt door',
      work: "Werk met ons",
      address: "Picardstraat 7/ 204, 1000 Brussels",
    },
  };

  const pathname = usePathname();
  const localeFromPath = pathname.split('/')[1] as Locale;
  const locale: Locale = ['en', 'fr', 'nl'].includes(localeFromPath) ? localeFromPath : 'en';
  const t = translations[locale];

  const quickLinks = [
    { key: 'about', label: t.about_us },
    { key: 'hospitality', label: t.horeca_sector },
    { key: 'logistics', label: t.logistics_sector },
    { key: 'work', label: t.work },
  ];

  const studentLinks = [
    { key: '', label: t.apply, external: true, url: 'https://jobs.skwd.be/studentenjob' },
    { key: 'faq', label: t.faq, external: false },
  ];

  return (
    <footer className="bg-skwd-blue text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/20">
          {/* Column 1: Logo & Company Info */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="SKWD Logo"
              width={120}
              height={40}
              className="mb-2"
            />
            <div className="text-sm text-white/80 space-y-1">
              <p className="font-light">{t.recognition_label}</p>
              <p className="font-light">{t.recognition_number}</p>
              <p className="font-light">VG.2432/U - W.DISP.2143)</p>
              <p className="font-light">RSZ: 1061808-55</p>
            </div>
            <div className="flex gap-3 mt-2">
              <Link
                href="https://www.linkedin.com/company/skwd-staffing/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/skwd.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.quick_links}</h3>
            <ul className="space-y-2 text-white/80">
              {quickLinks.map((link) => {
                const routeKey = link.key as LocalizedRouteKey;
                const routeObj = localizedRoutes[routeKey];
                const routePath = routeObj[locale];

                return (
                  <li key={link.key}>
                    <Link
                      href={`/${locale}/${routePath}`}
                      className="hover:text-white transition-colors text-sm font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: For Students */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.for_students}</h3>
            <ul className="space-y-2 text-white/80">
              {studentLinks.map((link) => {
                if (link.external) {
                  return (
                    <li key={link.key} className='text-sm'>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors text-sm font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }

                const routeKey = link.key as LocalizedRouteKey;
                const routeObj = localizedRoutes[routeKey];
                const routePath = routeObj[locale];

                return (
                  <li key={link.key}>
                    <Link
                      href={`/${locale}/${routePath}`}
                      className="hover:text-white transition-colors text-sm font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact}</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="text-skwd-button mt-1 w-5 h-5"/>
                <a href='https://www.google.com/maps/place/SKWD/@50.8642498,4.3414631,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3c3e813e7b6a5:0xa201303064b9d786!8m2!3d50.8642464!4d4.344038!16s%2Fg%2F11x2x9sxz2?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="hover:text-white transition-colors font-light">{t.address}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-skwd-button mt-1 w-5 h-5"/>
                <a href="tel:+3221234667" className="hover:text-white transition-colors font-light">
                  +32 2 123 46 67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MailPlus className="text-skwd-button mt-1 w-5 h-5"/>
                <a href="mailto:tommy@skwd.be" className="hover:text-white transition-colors font-light">
                  tommy@skwd.be
                </a>
              </li>
            </ul>
            <Link
                href={`/${locale}/${localizedRoutes.contact[locale]}`}
                className="mt-4 block w-full text-center py-2 bg-skwd-button text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
                {t.contact_cta}
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex gap-4">
            <a href='https://drive.google.com/file/d/1q4IgI4_kSe_T-Gi9vIDLDwGGGeKgjBSt/view' target='_blank' className="hover:text-skwd-text-highlight/70 text-skwd-text-highlight transition-colors">
              {t.privacy_policy}
            </a>
          </div>
          <div className='text-white'>
            {t.made_by}{' '}
            <Link
              href="https://www.linkedin.com/in/thomas-heusdens-0bba19258/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Thomas Heusdens
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}