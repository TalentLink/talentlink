/** @type {import('next').NextConfig} */
const nextConfig = {
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
