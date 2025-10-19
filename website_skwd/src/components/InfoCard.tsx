import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface InfoCardProps {
  cardTitle: string;
  cardDescription: string;
  icon: LucideIcon;
  patternOverlaySrc?: string;
  color?: string;
}

export default function InfoCard({ 
  cardTitle,
  cardDescription, 
  icon: Icon, 
  patternOverlaySrc,
  color
}: InfoCardProps) {
  const { t } = useTranslation();
  
  return (
    <article className={`relative p-6 rounded-xl h-full bg-${color} text-white overflow-hidden`}>
      <div className="relative z-10 rounded-full p-3 w-fit bg-skwd-light-blue mb-4">
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      
      {patternOverlaySrc && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={patternOverlaySrc}
            alt="pattern background"
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl mb-2">
          {t(`${cardTitle}`)}
        </h3>
        <p className="text-sm md:text-base font-light opacity-90">
          {t(`${cardDescription}`)}
        </p>
      </div>
    </article>
  );
}