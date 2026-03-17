import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

const withNextIntl = createNextIntlPlugin('./i18n/request.js');
export default withNextIntl(nextConfig);
