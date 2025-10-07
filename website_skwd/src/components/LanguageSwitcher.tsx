'use client';

import { useRouter, usePathname } from 'next/navigation';
import { setLanguage } from '@/lib/i18n-config';
import { localizedRoutes } from '@/lib/routes';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'nl', label: 'Nederlands' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect current locale and path segment (e.g. '/fr/a-propos' → locale=fr, path=a-propos)
  const segments = pathname.split('/');
  const currentLocale = (segments[1] as 'en' | 'fr' | 'nl') || 'en';
  const currentPath = segments[2] || ''; // may be undefined for homepage

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLanguage(newLocale);

    let newPath = `/${newLocale}`; // default: homepage

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
    <select onChange={handleChange} value={currentLocale}>
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.label}
        </option>
      ))}
    </select>
  );
}