const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n,
  reactStrictMode: false,
};

export default module.exports = {
  nextConfig,
  pageExtensions: ['jsx', 'tsx', 'js', 'ts', 'json', 'md', 'prisma'],
};
