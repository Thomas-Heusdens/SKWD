export const languages = ['en', 'fr', 'nl'] as const;

export const defaultLocale = 'en';

export const i18n = {
  defaultLocale,
  locales: languages,
} as const;