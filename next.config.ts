import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This skips ESLint errors during Vercel build
  },
};

export default nextConfig;
