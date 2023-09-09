/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 i18n: {
  locales: ['en', 'ja', 'es'],
  defaultLocale: 'ja',
 }
}

module.exports = nextConfig
