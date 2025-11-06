import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface InfoCardProps {
  cardTitle: string;
  icon: LucideIcon;
  patternOverlaySrc?: string;
  color?: string;
}

export default function InfoSimpleCard({ 
  cardTitle,
  icon: Icon, 
  patternOverlaySrc,
  color = 'skwd-blue'
}: InfoCardProps) {
  const { t } = useTranslation();
  
  return (
    <article
      className={`relative flex flex-col items-center justify-center text-center p-6 rounded-xl h-full bg-${color} text-white overflow-hidden`}
    >
      {/* Icon */}
      <div className="relative z-10 rounded-full p-3 bg-skwd-light-blue mb-4 flex items-center justify-center">
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>

      {/* Background pattern */}
      {patternOverlaySrc && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={patternOverlaySrc}
            alt="pattern background"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      {/* Title */}
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-medium">
          {t(`${cardTitle}`)}
        </h3>
      </div>
    </article>
  );
}