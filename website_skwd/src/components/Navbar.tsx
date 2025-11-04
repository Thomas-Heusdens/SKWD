'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { localizedRoutes } from '@/lib/routes';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type LocalizedRouteKey = keyof typeof localizedRoutes;
type Locale = 'en' | 'fr' | 'nl';

export default function Navbar() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as Locale) || 'en';
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { key: 'about', label: { en: 'About', fr: 'À propos', nl: 'Over ons' } },
    { key: 'hospitality', label: { en: 'Hospitality', fr: 'Hospitalité', nl: 'Hospitality' } },
    { key: 'logistics', label: { en: 'Logistics', fr: 'Logistique', nl: 'Logistiek' } },
    { key: 'work', label: { en: 'Work with us', fr: 'Travailler avec nous', nl: 'Werk met ons' } },
    { key: 'faq', label: { en: 'FAQ', fr: 'FAQ', nl: 'Veelgestelde vragen' } },
    { key: 'contact', label: { en: 'Contact', fr: 'Contact', nl: 'Contact' } },
  ];

  return (
    <>
      <nav
        className="
          fixed top-4 left-1/2 transform -translate-x-1/2
          flex items-center justify-between
          w-[90%] max-w-6xl
          px-2.5 py-2
          rounded-[100px]
          backdrop-blur-sm bg-white/10 shadow-sm
          z-50 transition-all
        "
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 bg-skwd-light-blue rounded-[50px] p-3"
        >
          <div className="relative w-12 h-4 md:w-16 md:h-6">
            <Image
              src="/images/logo.png"
              alt="SKWD Logo"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden min-[945px]:flex items-center gap-6">
          {navLinks.map((link) => {
            const routeKey = link.key as LocalizedRouteKey;
            const routeObj = localizedRoutes[routeKey];
            const routePath = routeObj[locale];
            const isActive = pathname.includes(routePath);

            return (
              <Link
                key={link.key}
                href={`/${locale}/${routePath}`}
                className={`
                  font-light transition-colors
                  hover:text-gray-300
                  ${isActive ? 'font-semibold text-white' : 'text-white'}
                `}
              >
                {link.label[locale]}
              </Link>
            );
          })}

          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex min-[945px]:hidden items-center gap-3">
          <LanguageSwitcher />
          
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            {menuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 rotate-0" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed left-1/2 transform -translate-x-1/2 top-[80px]
          w-[90%] max-w-6xl rounded-3xl 
          backdrop-blur-md bg-white/10 shadow-lg 
          flex flex-col items-center gap-1 py-4
          transition-all duration-500 ease-in-out
          ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          min-[945px]:hidden
          z-40
        `}
      >
        {navLinks.map((link) => {
          const routeKey = link.key as LocalizedRouteKey;
          const routeObj = localizedRoutes[routeKey];
          const routePath = routeObj[locale];
          const isActive = pathname.includes(routePath);

          return (
            <Link
              key={link.key}
              href={`/${locale}/${routePath}`}
              className={`
                w-full text-center py-3 px-4
                font-light text-base transition-all
                hover:bg-white/10 rounded-xl
                ${isActive ? 'font-semibold text-white bg-white/5' : 'text-white'}
              `}
              onClick={() => setMenuOpen(false)}
            >
              {link.label[locale]}
            </Link>
          );
        })}
      </div>
    </>
  );
}