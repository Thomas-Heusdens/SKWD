'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import i18n from '@/lib/i18n-config';

export default function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pathLocale = pathname.split('/')[1] || 'en';

  if (i18n.language !== pathLocale) {
    i18n.changeLanguage(pathLocale);
  }

  return <>{children}</>;
}