'use client';

import { useTranslation } from '@/lib/i18n';

export default function ContactClient() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('contact_title')}</h1>
      <p style={{ marginBottom: '1.5rem' }}>{t('contact_description')}</p>
    </main>
  );
}