'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import i18n, { setLanguage } from '@/lib/i18n-config';

export default function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pathLocale = pathname.split('/')[1] || 'en';

  // --- make sure i18n starts in the right language ---
  if (i18n.language !== pathLocale) {
    // this happens before React paints anything
    i18n.changeLanguage(pathLocale);
  }

  return <>{children}</>;
}