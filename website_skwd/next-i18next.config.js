/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: './src/locales',
};

module.exports = i18nConfig;