import type { NextConfig } from 'next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import { REDIRECTS } from './src/data/redirects';
import { AFFILIATE_HOST_ALLOWLIST } from './src/config/affiliate-security';
import { getCanonicalHostRedirects } from './src/lib/host-redirect';

initOpenNextCloudflareForDev();

const affiliateImageSources = [
  ...AFFILIATE_HOST_ALLOWLIST.creative,
  ...AFFILIATE_HOST_ALLOWLIST.impression,
].map((host) => `https://${host}`);

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://*.adtrafficquality.google",
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${affiliateImageSources.join(' ')} https://www.google-analytics.com https://pagead2.googlesyndication.com https://*.adtrafficquality.google`,
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://vitals.vercel-insights.com https://pagead2.googlesyndication.com https://*.adtrafficquality.google",
  "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://*.adtrafficquality.google https://www.google.com",
  "upgrade-insecure-requests",
].join('; ');

const nextConfig: NextConfig = {
  trailingSlash: true,
  skipProxyUrlNormalize: true,
  images: { unoptimized: true },
  async redirects() {
    return [...getCanonicalHostRedirects(), ...REDIRECTS];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        source: '/grants/',
        headers: [
          { key: 'Vercel-CDN-Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/grant/:path*',
        headers: [
          { key: 'Cloudflare-CDN-Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;
