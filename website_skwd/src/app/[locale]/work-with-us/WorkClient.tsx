'use client';

import { useTranslation } from '@/lib/i18n';

export default function WorkClient() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('work_title')}</h1>
      <p style={{ marginBottom: '1.5rem' }}>{t('work_description')}</p>
    </main>
  );
}