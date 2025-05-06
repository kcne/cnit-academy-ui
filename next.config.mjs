/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // These are all the locales you want to support in your application
    locales: ['en', 'sr'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
