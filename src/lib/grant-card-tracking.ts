export interface GrantCardTrackingInput {
  pageType?: string;
  placement?: string;
  position?: number;
}

export function buildGrantCardTracking({
  pageType,
  placement,
  position,
}: GrantCardTrackingInput): Record<string, string> {
  return {
    ...(pageType ? { 'data-page-type': pageType } : {}),
    ...(placement ? { 'data-placement': placement } : {}),
    ...(position && position > 0 ? { 'data-position': String(position) } : {}),
  };
}
