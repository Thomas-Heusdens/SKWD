'use client';

import { useRouter, usePathname } from 'next/navigation';
import { setLanguage } from '@/lib/i18n-config';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'nl', label: 'Nederlands' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // change language right now so UI re-renders immediately
    setLanguage(newLocale);

    // build new path and navigate
    const newPath = pathname.replace(/^\/(en|fr|nl)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select onChange={handleChange} value={pathname.split('/')[1] || 'en'}>
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.label}
        </option>
      ))}
    </select>
  );
}