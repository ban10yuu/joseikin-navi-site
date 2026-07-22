import { getSiteUrl, isIndexableDeployment } from '@/lib/site-url';
import { shouldLoadAdsenseScript, shouldRenderDisplayAd } from '@/lib/monetization';

function optionalValue(value: string | undefined): string | null {
  const normalized = value?.trim();
  return normalized ? normalized : null;
}

// GA4の測定IDは公開情報です。環境変数を設定すれば移行時に上書きできます。
const defaultGa4MeasurementId = 'G-N3WLX1MLYW';

export const siteConfig = {
  name: optionalValue(process.env.NEXT_PUBLIC_SITE_NAME) ?? '助成金ナビ',
  url: getSiteUrl(),
  indexable: isIndexableDeployment(),
  operatorName: optionalValue(process.env.NEXT_PUBLIC_OPERATOR_NAME),
  contactEmail: optionalValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  contactFormUrl: optionalValue(process.env.NEXT_PUBLIC_CONTACT_FORM_URL),
  googleSiteVerification: optionalValue(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION),
  analytics: {
    ga4MeasurementId: optionalValue(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) ?? defaultGa4MeasurementId,
    vercelAnalyticsEnabled: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED === 'true',
  },
  adsense: {
    clientId: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID),
    slotId: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT),
    slots: {
      top: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP),
      inArticle: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE),
      sidebar: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR),
      list: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT_LIST),
      footer: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER),
    },
  },
  newsletter: {
    endpoint: optionalValue(process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT),
    senderName: optionalValue(process.env.NEXT_PUBLIC_NEWSLETTER_SENDER_NAME),
    unsubscribeUrl: optionalValue(process.env.NEXT_PUBLIC_NEWSLETTER_UNSUBSCRIBE_URL),
    includesPromotions: process.env.NEXT_PUBLIC_NEWSLETTER_INCLUDES_PROMOTIONS === 'true',
  },
  privacy: {
    policyUpdatedAt: optionalValue(process.env.NEXT_PUBLIC_PRIVACY_UPDATED_AT) ?? '2026-07-19',
    cookieRetention: optionalValue(process.env.NEXT_PUBLIC_COOKIE_RETENTION),
  },
} as const;

export const isAdsenseVerificationEnabled = shouldLoadAdsenseScript(siteConfig.adsense.clientId);
export const isAdsenseEnabled = shouldRenderDisplayAd(
  siteConfig.adsense.clientId,
  siteConfig.adsense.slotId
    ?? siteConfig.adsense.slots.top
    ?? siteConfig.adsense.slots.inArticle
    ?? siteConfig.adsense.slots.sidebar
    ?? siteConfig.adsense.slots.list
    ?? siteConfig.adsense.slots.footer,
);
