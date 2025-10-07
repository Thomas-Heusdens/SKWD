'use client';

import { useTranslation } from '@/lib/i18n';

export default function HospitalityClient() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('hospitality_title')}</h1>
      <p style={{ marginBottom: '1.5rem' }}>{t('hospitality_description')}</p>
    </main>
  );
}