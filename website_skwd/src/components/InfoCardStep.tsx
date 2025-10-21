'use client';

import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface InfoCardStepProps {
  stepLabel: string; // e.g. 'hospitality_step_1'
  cardTitle: string; // e.g. 'hospitality_step_1_title'
  cardDescription: string; // e.g. 'hospitality_step_1_description'
  icon: LucideIcon;
  patternOverlaySrc?: string;
  color?: string; // e.g. 'skwd-light-blue' or 'skwd-dark-blue'
}

export default function InfoCardStep({
  stepLabel,
  cardTitle,
  cardDescription,
  icon: Icon,
  patternOverlaySrc,
  color = 'skwd-light-blue',
}: InfoCardStepProps) {
  const { t } = useTranslation();

  return (
    <article
      className={`relative rounded-xl p-6 text-white overflow-hidden bg-${color} flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]`}
    >
      {/* Pattern overlay */}
      {patternOverlaySrc && (
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src={patternOverlaySrc}
            alt="pattern background"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      <div className="relative z-10">
        {/* Step label */}
        <h3 className="font-light text-sm mb-3">{t(stepLabel)}</h3>

        {/* Icon */}
        <div className="inline-block bg-white/15 backdrop-blur rounded-full p-3 mb-6 flex items-center justify-center">
          <Icon className="w-10 h-10 text-white" />
        </div>

        {/* Title & description */}
        <h2 className="text-2xl mb-2">{t(cardTitle)}</h2>
        <p className="text-sm md:text-base font-light opacity-90">
          {t(cardDescription)}
        </p>
      </div>
    </article>
  );
}