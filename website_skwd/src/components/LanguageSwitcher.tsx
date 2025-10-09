'use client';

import { useRouter, usePathname } from 'next/navigation';
import { setLanguage } from '@/lib/i18n-config';
import { localizedRoutes } from '@/lib/routes';
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect current locale and path segment
  const segments = pathname.split('/');
  const currentLocale = (segments[1] as 'en' | 'fr' | 'nl') || 'en';
  const currentPath = segments[2] || '';

  const currentLanguage = languages.find((lng) => lng.code === currentLocale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setLanguage(newLocale);
    setIsOpen(false);

    let newPath = `/${newLocale}`;

    // Try to find the matching localized route key for the current path
    for (const key in localizedRoutes) {
      const routeKey = key as keyof typeof localizedRoutes;
      const translations = localizedRoutes[routeKey];
      if (translations[currentLocale] === currentPath) {
        newPath += `/${translations[newLocale as 'en' | 'fr' | 'nl']}`;
        break;
      }
    }

    router.push(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 px-4 h-12 bg-white rounded-full cursor-pointer transition-all hover:bg-gray-50 focus:outline-none"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-gray-700" />
        <span className="text-sm font-medium text-gray-700 uppercase">{currentLanguage.code}</span>
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 bg-white rounded-lg shadow-lg overflow-hidden z-50 min-w-[160px]">
          {languages
            .filter((lng) => lng.code !== currentLocale)
            .map((lng) => (
              <button
                key={lng.code}
                onClick={() => handleLanguageChange(lng.code)}
                className="flex items-center gap-3 w-full px-4 h-12 cursor-pointer transition-colors hover:bg-gray-50 focus:outline-none"
                aria-label={lng.label}
              >
                <span className="text-xl text-black">{lng.flag}</span>
                <span className="text-sm font-medium text-gray-700">{lng.label}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}