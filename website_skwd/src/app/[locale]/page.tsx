'use client';

import { useTranslation } from '@/lib/i18n';
import { useRouter, usePathname } from 'next/navigation';
import { localizedRoutes } from '@/lib/routes';

export default function HomePage() {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const locale = (pathname.split('/')[1] as keyof typeof localizedRoutes.about) || 'en';

  const handleNavigate = () => {
    const aboutPath = localizedRoutes.about[locale];
    router.push(`/${locale}/${aboutPath}`);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('welcome')}</h1>
    </main>
  );
}