'use client';

import { useTranslation } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('welcome')}</h1>
    </main>
  );
}