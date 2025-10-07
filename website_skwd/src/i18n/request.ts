import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? 'en'; // Replace 'en' with your default locale if needed
  return {
    locale: resolvedLocale,
    messages: (await import(`../locales/${resolvedLocale}/common.json`)).default
  };
});