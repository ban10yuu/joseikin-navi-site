import type { AffiliateIntent, Audience, Purpose } from '@/lib/types';

export type AffiliatePageType = 'home' | 'grant' | 'businessGuide' | 'comparison';
export type AffiliatePartnershipStatus = 'candidate' | 'applied' | 'partnered' | 'suspended';

export interface AffiliateOffer {
  id: string;
  enabled: boolean;
  network: string;
  advertiserName: string;
  offerName: string;
  destinationUrl: string | null;
  audiences: Audience[];
  intents: AffiliateIntent[];
  allowedPurposes: Purpose[];
  blockedPurposes: Purpose[];
  allowedPageTypes: AffiliatePageType[];
  validFrom: string | null;
  validUntil: string | null;
  verifiedAt: string | null;
  disclosureText: string;
  buttonText: string;
  trackingId: string | null;
  externalProgramId: string | null;
  partnershipStatus: AffiliatePartnershipStatus;
  priority: number;
}

const SENSITIVE_PURPOSES: Purpose[] = ['medical', 'welfare', 'disaster', 'livingSupport'];

// A8.netで存在と条件を確認した候補。提携完了・広告リンク取得までは公開しない。
export const AFFILIATE_OFFERS: AffiliateOffer[] = [
  {
    id: 'a8-freee-accounting-wiz', enabled: true, network: 'A8.net', advertiserName: '株式会社Ｗｉｚ',
    offerName: 'クラウド会計ソフト【freee会計】', destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B8111+7NNQMY+3SPO+9FL80Y',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['accounting', 'businessPlanning'], allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-15', validUntil: null, verifiedAt: '2026-07-15',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '038',
    externalProgramId: 's00000017718057', partnershipStatus: 'partnered', priority: 30,
  },
  {
    id: 'a8-smaregi-timecard', enabled: false, network: 'A8.net', advertiserName: '株式会社スマレジ',
    offerName: 'クラウド勤怠管理【スマレジ・タイムカード】', destinationUrl: null,
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['attendance', 'payroll', 'humanResources'], allowedPurposes: ['businessGrowth', 'digitalTransformation', 'wageIncrease'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: null, validUntil: null, verifiedAt: '2026-07-15',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: null,
    externalProgramId: 's00000023202005', partnershipStatus: 'applied', priority: 20,
  },
  {
    id: 'a8-kanbei-sign', enabled: true, network: 'A8.net', advertiserName: '株式会社Ｗｉｚ',
    offerName: '電子契約サービス【KANBEI SIGN】', destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B8111+81Y55M+3SPO+BETIUA',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['electronicContract'], allowedPurposes: ['businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-15', validUntil: null, verifiedAt: '2026-07-15',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '002',
    externalProgramId: 's00000017718069', partnershipStatus: 'partnered', priority: 10,
  },
];
