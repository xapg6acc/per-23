const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'uk',
    locales: ['en', 'uk', 'es', 'de'],
    localeDetection: true,
    ns: ['common', 'plural', 'alert', 'form', 'button', 'head', 'cv', 'orders'],
    // defaultNS: 'common',
    useSuspense: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['b', 'br', 'strong', 'a', 'href', 'span'],
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  trailingSlash: true,
  localePath: path.resolve('./src/old/language/locales'),
};
