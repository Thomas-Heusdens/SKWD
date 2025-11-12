'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface TeamMembersCardProps {
  imageUrl: string;
  name: string;
  linkedinUrl1: string;
  linkedinUrl2: string;
  email: string;
}

export default function TeamMembersCard({
  imageUrl,
  name,
  linkedinUrl1,
  linkedinUrl2,
  email
}: TeamMembersCardProps) {
  const { t } = useTranslation();

  return (
    <article
      aria-label={t(`about_team_member_name_adam_thomas`)}
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

        <figcaption className="flex flex-col bg-skwd-blue rounded-b-lg p-4 text-left">
          <p className="text-lg font-medium text-white">{name}</p>
          <p className="text-sm font-light text-skwd-text-highlight">
            {t(`about_team_member_role_5`)}
          </p>
          <a href={`mailto:${email}`} className='text-sm font-light text-white/90'>{email}</a>
          <div className='flex gap-2'>
            <a
                href={linkedinUrl1}
                aria-label="Adam LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1"
            >
                <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
                href={linkedinUrl2}
                aria-label="Thomas LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1"
            >
                <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}