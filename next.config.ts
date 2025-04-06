import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
module.exports = {
  images: {
    domains: ['kr.object.ncloudstorage.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1280, 1960],
  },
  swcMinify: true,
};
export default nextConfig;
