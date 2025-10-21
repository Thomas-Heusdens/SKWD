'use client';

import { useTranslation } from '@/lib/i18n';
import MagicBento from '@/components/MagicBento';
import { useMemo } from 'react';

export default function ProjectsBento() {
  const { t } = useTranslation();

  const localizedCards = useMemo(
    () => [
      {
        color: '#060010',
        title: t('project1_title'),
        description: t('project1_tag'),
        label: '1',
        image: '/images/festival.JPG',
      },
      {
        color: '#060010',
        title: t('project2_title'),
        description: t('project2_tag'),
        label: '2',
        image: '/images/hero-right.jpeg',
      },
      {
        color: '#060010',
        title: t('project3_title'),
        description: t('project3_tag'),
        label: '3',
        image: '/images/wedding.jpeg',
      },
      {
        color: '#060010',
        title: t('project4_title'),
        description: t('project4_tag'),
        label: '4',
        image: '/images/Logistiek.jpeg',
      },
      {
        color: '#060010',
        title: t('project5_title'),
        description: t('project5_tag'),
        label: '5',
        image: '/images/sport.JPG',
      },
      {
        color: '#060010',
        title: t('project6_title'),
        description: t('project6_tag'),
        label: '6',
        image: '/images/team-hero.jpeg',
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