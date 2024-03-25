/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.quantcast.com',
        port: '',
        pathname: '*',
      },
    ],
    domains: ['static.quantcast.com'],
  }
};

export default nextConfig;
