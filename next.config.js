const { i18n } = require('./next-i18next.config');

/** @type {{i18n: {defaultLocale: string, locales: string[], useSuspense: boolean, ns, localeDetection: boolean}}} */
const nextConfig = {
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

module.exports = nextConfig;
