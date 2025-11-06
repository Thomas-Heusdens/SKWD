'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface TeamMemberCardProps {
  memberNumber: number;
  imageUrl: string;
  name: string;
  linkedinUrl: string;
}

export default function TeamMemberCard({
  memberNumber,
  imageUrl,
  name,
  linkedinUrl
}: TeamMemberCardProps) {
  const { t } = useTranslation();

  return (
    <article
      aria-label={t(`about_team_member_name_${memberNumber}`)}
      className="flex flex-col"
    >
      <figure className="flex flex-col">
        <div className="relative w-full aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <figcaption className="bg-skwd-blue rounded-b-lg p-4 text-left">
          <p className="text-lg font-medium text-white">{name}</p>
          <p className="text-sm font-light text-skwd-text-highlight">
            {t(`about_team_member_role_${memberNumber}`)}
          </p>
          <a
            href={linkedinUrl}
            aria-label={`${name} LinkedIn`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </figcaption>
      </figure>
    </article>
  );
}