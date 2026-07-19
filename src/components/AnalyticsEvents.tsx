'use client';

import { useEffect } from 'react';
import { ANALYTICS_EVENTS, trackAnalyticsEvent, type AnalyticsEventName, type AnalyticsEventParameters } from '@/lib/analytics';

const PARAMETER_KEYS = ['pageType', 'grantId', 'audience', 'purpose', 'offerId', 'network', 'placement', 'position', 'creativeId', 'format', 'deviceClass', 'experimentVariant'] as const;

function getDeviceClass(): string {
  if (window.innerWidth <= 768) return 'mobile';
  if (window.innerWidth < 1200) return 'tablet';
  return 'desktop';
}

function readEvent(element: HTMLElement, eventName?: string): { name: AnalyticsEventName; parameters: AnalyticsEventParameters } | null {
  const name = (eventName ?? element.dataset.analyticsEvent) as AnalyticsEventName | undefined;
  if (!name || !ANALYTICS_EVENTS.includes(name)) return null;
  const parameters: AnalyticsEventParameters = {};
  for (const key of PARAMETER_KEYS) {
    const value = element.dataset[key];
    if (value) parameters[key] = value;
  }
  parameters.deviceClass ||= getDeviceClass();
  return { name, parameters };
}

function getEventKey(item: { name: AnalyticsEventName; parameters: AnalyticsEventParameters }): string {
  const { pageType = '', grantId = '', offerId = '', placement = '', position = '', creativeId = '', experimentVariant = '' } = item.parameters;
  return `${window.location.pathname}:${item.name}:${pageType}:${grantId}:${offerId}:${placement}:${position}:${creativeId}:${experimentVariant}`;
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const tracked = new Set<string>();
    const impressionTimers = new Map<HTMLElement, number>();

    const trackOnce = (item: { name: AnalyticsEventName; parameters: AnalyticsEventParameters } | null) => {
      if (!item) return;
      const key = getEventKey(item);
      if (tracked.has(key)) return;
      tracked.add(key);
      trackAnalyticsEvent(item.name, item.parameters);
    };

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
        if (!(entry.target instanceof HTMLElement)) continue;
        const element = entry.target;
        const existingTimer = impressionTimers.get(element);
        if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
          if (existingTimer) window.clearTimeout(existingTimer);
          impressionTimers.delete(element);
          continue;
        }
        if (existingTimer) continue;
        const timer = window.setTimeout(() => {
          if (!element.isConnected || element.closest('[data-active="false"]')) {
            impressionTimers.delete(element);
            return;
          }
          if (element.querySelector('[data-creative-load="deferred"]')) {
            impressionTimers.delete(element);
            return;
          }
          trackOnce(readEvent(element, element.dataset.analyticsImpressionEvent));
          observer.unobserve(element);
          impressionTimers.delete(element);
        }, 1000);
        impressionTimers.set(element, timer);
      }
    }, { threshold: [0, 0.5, 1] });

    const registerElement = (element: HTMLElement) => {
      if (element.dataset.analyticsRender === 'true') {
        trackOnce(readEvent(element, element.dataset.analyticsRenderEvent));
      }
      if (element.dataset.analyticsImpression === 'true') observer.observe(element);
    };

    const registerTree = (root: ParentNode) => {
      if (root instanceof HTMLElement) registerElement(root);
      root.querySelectorAll<HTMLElement>('[data-analytics-render="true"], [data-analytics-impression="true"]').forEach(registerElement);
    };

    const mutationObserver = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'attributes' && record.target instanceof HTMLElement && record.target.dataset.creativeLoad === 'loaded') {
          const impression = record.target.closest<HTMLElement>('[data-analytics-impression="true"]');
          if (impression) {
            observer.unobserve(impression);
            observer.observe(impression);
          }
          continue;
        }
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches('[data-analytics-render="true"], [data-analytics-impression="true"]')
            || node.querySelector('[data-analytics-render="true"], [data-analytics-impression="true"]')) {
            registerTree(node);
          }
        });
        record.removedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          const removedElements = [node, ...node.querySelectorAll<HTMLElement>('[data-analytics-impression="true"]')];
          removedElements.forEach((element) => {
            const timer = impressionTimers.get(element);
            if (timer) window.clearTimeout(timer);
            impressionTimers.delete(element);
            observer.unobserve(element);
          });
        });
      }
    });

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);
    registerTree(document);
    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-creative-load'] });
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
      impressionTimers.forEach((timer) => window.clearTimeout(timer));
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
  return null;
}
