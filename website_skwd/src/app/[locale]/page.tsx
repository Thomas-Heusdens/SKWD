'use client';
import { useTranslation } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('welcome')}</h1>
      <button>{t('cta')}</button>
    </main>
  );
}
