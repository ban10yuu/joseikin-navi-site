export const DESKTOP_NAVIGATION = [
  { label: '制度を探す', href: '/grants/' },
  { label: '地域から探す', href: '/#regions' },
  { label: '申請前ガイド', href: '/guide/' },
  { label: 'サイトについて', href: '/about/' },
] as const;

export const MOBILE_NAVIGATION = [
  { label: '制度を探す', href: '/grants/' },
  { label: '個人・家族向け', href: '/grants/?audience=individual' },
  { label: '事業者・団体向け', href: '/grants/?audience=business' },
  { label: '地域から探す', href: '/#regions' },
  { label: '申請前ガイド', href: '/guide/' },
  { label: 'よくある質問', href: '/faq/' },
  { label: 'サイトについて', href: '/about/' },
  { label: 'お問い合わせ', href: '/contact/' },
] as const;

export const FOOTER_NAVIGATION = [
  { label: '制度を探す', href: '/grants/' },
  { label: '個人・家族向け', href: '/grants/?audience=individual' },
  { label: '事業者・団体向け', href: '/grants/?audience=business' },
  { label: '地域から探す', href: '/#regions' },
  { label: '申請前ガイド', href: '/guide/' },
  { label: 'よくある質問', href: '/faq/' },
  { label: '運営者情報', href: '/about/' },
  { label: '編集方針', href: '/editorial-policy/' },
  { label: 'AI利用方針', href: '/ai-policy/' },
  { label: '広告掲載方針', href: '/advertising-policy/' },
  { label: 'プライバシーポリシー', href: '/privacy/' },
  { label: '免責事項', href: '/disclaimer/' },
  { label: '訂正・削除依頼', href: '/correction/' },
  { label: 'お問い合わせ', href: '/contact/' },
] as const;
