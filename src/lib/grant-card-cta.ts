import type { GrantStatus } from './types.ts';

export function getGrantCardCtaLabel(status: GrantStatus): string {
  if (status === 'open' || status === 'closingSoon') {
    return '対象条件と申請期限を確認';
  }
  if (status === 'closed') {
    return '次回募集・後継制度を確認';
  }
  if (status === 'scheduled') {
    return '募集開始時期と対象条件を確認';
  }
  return '制度の詳細を確認';
}
