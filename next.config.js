/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: 'localhost:3000',
        pathname: '/img/logos/mark.svg?color=indigo&shade=500',
      },
    ],
  },
};

module.exports = nextConfig;
