'use client';

import { useTranslation } from '@/lib/i18n';

export default function FaqClient() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('faq_title')}</h1>
      <p style={{ marginBottom: '1.5rem' }}>{t('faq_description')}</p>
    </main>
  );
}