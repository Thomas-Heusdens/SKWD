'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type LocalizedRouteKey = keyof typeof localizedRoutes;
type Locale = 'en' | 'fr' | 'nl';

export default function Navbar() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as Locale) || 'en';

  const navLinks = [
    { key: 'about', label: { en: 'About', fr: 'À propos', nl: 'Over ons' } },
    { key: 'hospitality', label: { en: 'Hospitality', fr: 'Hospitalité', nl: 'Hospitality' } },
    { key: 'logistics', label: { en: 'Logistics', fr: 'Logistique', nl: 'Logistiek' } },
    { key: 'work', label: { en: 'Work with us', fr: 'Collaborer avec nous', nl: 'Werk met ons' } },
    { key: 'faq', label: { en: 'FAQ', fr: 'FAQ', nl: 'Veelgestelde vragen' } },
    { key: 'contact', label: { en: 'Contact', fr: 'Contact', nl: 'Contact' } },
  ];

  return (
    <nav
      className="
        fixed top-6 left-1/2 transform -translate-x-1/2
        flex items-center justify-between
        w-[90%] max-w-6xl
        px-2.5 py-2
        rounded-[100px]
        backdrop-blur-sm bg-white/10 shadow-sm
        z-50
      "
    >
      {/* Logo */}
      <Link
        href={`/${locale}`}
        className="flex items-center gap-2 bg-skwd-light-blue rounded-[50px] p-3"
      >
        <div className="relative w-16 h-6">
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

      {/* Navigation + language switcher */}
      <div className="flex items-center gap-6">
        {navLinks.map((link) => {
          const routeKey = link.key as LocalizedRouteKey;
          const routeObj = localizedRoutes[routeKey];
          const routePath = routeObj[locale];

          return (
            <Link
              key={link.key}
              href={`/${locale}/${routePath}`}
              className={`
                font-light transition-colors
                hover:text-gray-300
                ${pathname.includes(routePath)
                  ? 'font-semibold text-white'
                  : 'text-white'}
              `}
            >
              {link.label[locale]}
            </Link>
          );
        })}

        {/* Language switcher (aligned to the right) */}
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}