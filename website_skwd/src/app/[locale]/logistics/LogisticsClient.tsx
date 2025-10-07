'use client';

import { useTranslation } from '@/lib/i18n';

export default function LogisticsClient() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('logistics_title')}</h1>
      <p style={{ marginBottom: '1.5rem' }}>{t('logistics_description')}</p>
    </main>
  );
}