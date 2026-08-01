import type { NextConfig } from 'next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import { REDIRECTS } from './src/data/redirects';
import { AFFILIATE_HOST_ALLOWLIST } from './src/config/affiliate-security';
import {
  CRAWLER_RESOURCE_CDN_CACHE_CONTROL,
  DYNAMIC_HTML_CDN_CACHE_CONTROL,
} from './src/config/cache-policy';

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
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://*.adtrafficquality.google https://static.cloudflareinsights.com",
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
    return REDIRECTS;
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
          { key: 'Vercel-CDN-Cache-Control', value: DYNAMIC_HTML_CDN_CACHE_CONTROL },
          { key: 'Cloudflare-CDN-Cache-Control', value: DYNAMIC_HTML_CDN_CACHE_CONTROL },
        ],
      },
      {
        source: '/grant/:path*',
        headers: [
          { key: 'Cloudflare-CDN-Cache-Control', value: DYNAMIC_HTML_CDN_CACHE_CONTROL },
        ],
      },
      {
        source: '/:crawlerResource(sitemap.xml|robots.txt)',
        headers: [
          { key: 'Cloudflare-CDN-Cache-Control', value: CRAWLER_RESOURCE_CDN_CACHE_CONTROL },
        ],
      },
    ];
  },
};

export default nextConfig;
