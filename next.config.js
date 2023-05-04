/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/talentlink/' : '',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/question/question-0',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
