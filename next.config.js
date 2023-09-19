const { i18n } = require('./next-i18next.config');

/** @type {{i18n: {defaultLocale: string, locales: string[], useSuspense: boolean, ns, localeDetection: boolean}}} */
const nextConfig = {
  i18n,
};

module.exports = nextConfig;
