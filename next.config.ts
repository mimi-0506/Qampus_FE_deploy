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
  },
};
export default nextConfig;
