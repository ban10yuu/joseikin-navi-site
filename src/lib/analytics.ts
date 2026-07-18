export const ANALYTICS_EVENTS = [
  'affiliate_render', 'affiliate_impression', 'affiliate_click', 'official_source_click', 'search_submit', 'filter_apply', 'grant_card_click', 'newsletter_signup', 'correction_request',
] as const;

export type AnalyticsEventName = typeof ANALYTICS_EVENTS[number];
export interface AnalyticsEventParameters {
  pageType?: string;
  grantId?: string;
  audience?: string;
  purpose?: string;
  offerId?: string;
  network?: string;
  placement?: string;
  position?: string;
  creativeId?: string;
  format?: string;
  deviceClass?: string;
  experimentVariant?: string;
}

declare global {
  interface Window { gtag?: (command: 'event', name: AnalyticsEventName, parameters: AnalyticsEventParameters) => void }
}

export function trackAnalyticsEvent(name: AnalyticsEventName, parameters: AnalyticsEventParameters = {}): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, parameters);
}
