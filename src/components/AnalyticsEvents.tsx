'use client';

import { useEffect } from 'react';
import { ANALYTICS_EVENTS, trackAnalyticsEvent, type AnalyticsEventName, type AnalyticsEventParameters } from '@/lib/analytics';

const PARAMETER_KEYS = ['pageType', 'grantId', 'audience', 'purpose', 'offerId', 'network', 'placement', 'position'] as const;

function readEvent(element: HTMLElement): { name: AnalyticsEventName; parameters: AnalyticsEventParameters } | null {
  const name = element.dataset.analyticsEvent as AnalyticsEventName | undefined;
  if (!name || !ANALYTICS_EVENTS.includes(name)) return null;
  const parameters: AnalyticsEventParameters = {};
  for (const key of PARAMETER_KEYS) {
    const value = element.dataset[key];
    if (value) parameters[key] = value;
  }
  return { name, parameters };
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-analytics-event]') : null;
      if (!target) return;
      const item = readEvent(target);
      if (item) trackAnalyticsEvent(item.name, item.parameters);
    };
    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null;
      if (!form) return;
      const item = readEvent(form);
      if (item) trackAnalyticsEvent(item.name, item.parameters);
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
        const item = readEvent(entry.target);
        if (item) trackAnalyticsEvent(item.name, item.parameters);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.25 });

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);
    document.querySelectorAll<HTMLElement>('[data-analytics-impression="true"]').forEach((element) => observer.observe(element));
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
      observer.disconnect();
    };
  }, []);
  return null;
}
