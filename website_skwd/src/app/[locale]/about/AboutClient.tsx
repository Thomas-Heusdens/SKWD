'use client';

import { useTranslation } from '@/lib/i18n';

export default function AboutClient() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('about_title')}</h1>
      <p style={{ marginBottom: '1.5rem' }}>{t('about_description')}</p>
    </main>
  );
}