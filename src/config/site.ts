import { getSiteUrl, isIndexableDeployment } from '@/lib/site-url';

function optionalValue(value: string | undefined): string | null {
  const normalized = value?.trim();
  return normalized ? normalized : null;
}

export const siteConfig = {
  name: optionalValue(process.env.NEXT_PUBLIC_SITE_NAME) ?? '助成金ナビ',
  url: getSiteUrl(),
  indexable: isIndexableDeployment(),
  operatorName: optionalValue(process.env.NEXT_PUBLIC_OPERATOR_NAME),
  contactEmail: optionalValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  analytics: {
    ga4MeasurementId: optionalValue(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) ?? 'G-V11MKY0X3F',
    vercelAnalyticsEnabled: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED !== 'false',
  },
  adsense: {
    clientId: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) ?? 'ca-pub-1611624572831066',
    slotId: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT),
  },
  newsletter: {
    endpoint: optionalValue(process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT),
    senderName: optionalValue(process.env.NEXT_PUBLIC_NEWSLETTER_SENDER_NAME),
    unsubscribeUrl: optionalValue(process.env.NEXT_PUBLIC_NEWSLETTER_UNSUBSCRIBE_URL),
  },
  privacy: {
    policyUpdatedAt: optionalValue(process.env.NEXT_PUBLIC_PRIVACY_UPDATED_AT),
    cookieRetention: optionalValue(process.env.NEXT_PUBLIC_COOKIE_RETENTION),
  },
} as const;

export const isAdsenseEnabled = Boolean(
  siteConfig.adsense.clientId && siteConfig.adsense.slotId
);
