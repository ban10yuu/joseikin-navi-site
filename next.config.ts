import type { NextConfig } from 'next';
import { REDIRECTS } from './src/data/redirects';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return REDIRECTS;
  },
};

export default nextConfig;
