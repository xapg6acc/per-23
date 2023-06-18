const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'uk',
    locales: ['en', 'uk'],
    localeDetection: true,
    ns: ['common', 'plural', 'alert', 'form', 'button', 'head'],
    defaultNS: 'common',
    useSuspense: false,
  },
  // react: {
  //   transSupportBasicHtmlNodes: true,
  //   transKeepBasicHtmlNodesFor: ['b', 'br', 'strong', 'a', 'href', 'span'],
  // },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  localePath: path.resolve('./src/language/locales'),
};
