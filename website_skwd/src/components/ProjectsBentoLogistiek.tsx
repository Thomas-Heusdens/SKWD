'use client';

import { useTranslation } from '@/lib/i18n';
import MagicBento from '@/components/MagicBentoLogistiek';
import { useMemo } from 'react';

export default function ProjectsBento() {
  const { t } = useTranslation();

  const localizedCards = useMemo(
    () => [
      {
        color: '#060010',
        title: t('logistics_carousel_3_title'),
        label: '1',
        image: '/images/orderpicker.jpeg',
      },
      {
        color: '#060010',
        title: t('logistics_carousel_2_title'),
        label: '2',
        image: '/images/parking.jpeg',
      },
      {
        color: '#060010',
        title: t('logistics_carousel_1_title'),
        label: '1',
        image: '/images/Logistiek.jpeg',
      },
      {
        color: '#060010',
        title: t('hospitality_carousel_1_title'),
        label: '6',
        image: '/images/festival.JPG',
      },
      {
        color: '#060010',
        title: t('logistics_carousel_5_title'),
        label: '5',
        image: '/images/débarras.jpg',
      },
      {
        color: '#060010',
        title: t('logistics_carousel_4_title'),
        label: '4',
        image: '/images/driver.jpg',
      },
    ],
    [t]
  );

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <MagicBento
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={45}
        glowColor="20, 20, 168"
        customCards={localizedCards}
      />
    </div>
  );
}