import type { AffiliateIntent, Audience, Purpose } from '@/lib/types';

export type AffiliatePageType = 'home' | 'grant' | 'businessGuide' | 'comparison';
export type AffiliatePartnershipStatus = 'candidate' | 'applied' | 'partnered' | 'suspended';
export type AffiliateClaimReviewStatus = 'reviewed' | 'pending' | 'notRequired';
export type AffiliateReviewMethod = 'automated' | 'human' | 'mixed';

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
  allowSensitiveContexts?: boolean;
  allowedPageTypes: AffiliatePageType[];
  validFrom: string | null;
  validUntil: string | null;
  verifiedAt: string | null;
  disclosureText: string;
  buttonText: string;
  trackingId: string | null;
  externalProgramId: string | null;
  creativeImageUrl: string | null;
  creativeAlt: string | null;
  creativeWidth: number | null;
  creativeHeight: number | null;
  impressionPixelUrl: string | null;
  creativeId: string | null;
  creativeSourceUrl: string | null;
  creativeVerifiedAt: string | null;
  destinationHost: string | null;
  claimReviewStatus: AffiliateClaimReviewStatus;
  verifiedLandingHost?: string | null;
  landingVerifiedAt?: string | null;
  creativeFingerprint?: string | null;
  nextReviewAt?: string | null;
  claimReviewSource?: string | null;
  reviewMethod?: AffiliateReviewMethod | null;
  partnershipStatus: AffiliatePartnershipStatus;
  priority: number;
}

const SENSITIVE_PURPOSES: Purpose[] = ['medical', 'welfare', 'disaster', 'livingSupport'];

// A8.netで存在と条件を確認した候補。提携完了・広告リンク取得までは公開しない。
export const AFFILIATE_OFFERS: AffiliateOffer[] = [
  {
    id: 'a8-freee-accounting-wiz', enabled: true, network: 'A8.net', advertiserName: '株式会社Ｗｉｚ',
    offerName: 'クラウド会計ソフト【freee会計】', destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B8111+7NNQMY+3SPO+9FMXR5',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['accounting', 'businessPlanning'], allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-15', validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '046',
    externalProgramId: 's00000017718057',
    creativeImageUrl: 'https://www29.a8.net/svt/bgt?aid=260715061463&wid=002&eno=01&mid=s00000017718057046000&mc=1',
    creativeAlt: 'クラウド会計ソフト freee会計',
    creativeWidth: 300,
    creativeHeight: 250,
    impressionPixelUrl: 'https://www17.a8.net/0.gif?a8mat=4B8111+7NNQMY+3SPO+9FMXR5',
    creativeId: 'a8-freee-accounting-300x250-046',
    creativeSourceUrl: 'https://www29.a8.net/svt/bgt?aid=260715061463&wid=002&eno=01&mid=s00000017718057046000&mc=1',
    creativeVerifiedAt: '2026-07-17', destinationHost: 'px.a8.net', claimReviewStatus: 'reviewed',
    verifiedLandingHost: 'f.012grp.co.jp', landingVerifiedAt: '2026-07-17',
    creativeFingerprint: 'a99783555e35c5aa94452507aa8e8e75d00a6adeab36a3f6ab62d4b9b94b523f',
    nextReviewAt: '2026-08-17', claimReviewSource: 'A8.net広告リンク・広告素材', reviewMethod: 'automated',
    partnershipStatus: 'partnered', priority: 60,
  },
  {
    id: 'a8-yayoi-accounting-next', enabled: true, network: 'A8.net', advertiserName: '弥生株式会社',
    offerName: '法人向けクラウド会計ソフト【弥生会計 Next】',
    destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B82L5+7H3YZE+35XE+639IP',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['accounting', 'expenseManagement', 'payroll', 'businessPlanning'],
    allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation', 'wageIncrease'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-17', validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '023', externalProgramId: 's00000014765001',
    creativeImageUrl: 'https://www26.a8.net/svt/bgt?aid=260717081452&wid=002&eno=01&mid=s00000014765001023000&mc=1',
    creativeAlt: '弥生会計 Next 法人向けクラウド会計ソフト', creativeWidth: 300, creativeHeight: 250,
    impressionPixelUrl: 'https://www13.a8.net/0.gif?a8mat=4B82L5+7H3YZE+35XE+639IP',
    creativeId: 'a8-yayoi-accounting-next-300x250-023',
    creativeSourceUrl: 'https://www26.a8.net/svt/bgt?aid=260717081452&wid=002&eno=01&mid=s00000014765001023000&mc=1',
    creativeVerifiedAt: '2026-07-17', destinationHost: 'px.a8.net', claimReviewStatus: 'reviewed',
    verifiedLandingHost: 'www.yayoi-kk.co.jp', landingVerifiedAt: '2026-07-17',
    creativeFingerprint: '1ce34ff634e80888f3af441b78071ff1994426ef9927bb5e52928943d22ffffe',
    nextReviewAt: '2026-08-17', claimReviewSource: 'A8.net提携情報・支援制度ナビ専用広告素材を2026-07-17に確認',
    reviewMethod: 'mixed', partnershipStatus: 'partnered', priority: 58,
  },
  {
    id: 'a8-makeshop-ecommerce', enabled: true, network: 'A8.net', advertiserName: 'ＧＭＯメイクショップ株式会社',
    offerName: 'ECサイト構築サービス【makeshop】',
    destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B82L1+ECSAMY+KK0+6QMKH',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['ecommerce', 'businessPlanning'],
    allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation', 'regionalRevitalization'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-17', validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '132', externalProgramId: 's00000002664001',
    creativeImageUrl: 'https://www29.a8.net/svt/bgt?aid=260717077868&wid=002&eno=01&mid=s00000002664001132000&mc=1',
    creativeAlt: 'ECサイト構築サービス makeshop', creativeWidth: 300, creativeHeight: 250,
    impressionPixelUrl: 'https://www13.a8.net/0.gif?a8mat=4B82L1+ECSAMY+KK0+6QMKH',
    creativeId: 'a8-makeshop-300x250-132',
    creativeSourceUrl: 'https://www29.a8.net/svt/bgt?aid=260717077868&wid=002&eno=01&mid=s00000002664001132000&mc=1',
    creativeVerifiedAt: '2026-07-17', destinationHost: 'px.a8.net', claimReviewStatus: 'reviewed',
    verifiedLandingHost: 'www.makeshop.jp', landingVerifiedAt: '2026-07-17',
    creativeFingerprint: 'e540b12ff19bec47193a47e98a2aca38b5fcccafbfa9948718f51108104e7715',
    nextReviewAt: '2026-08-17', claimReviewSource: 'A8.net提携情報・支援制度ナビ専用広告素材を2026-07-17に確認',
    reviewMethod: 'mixed', partnershipStatus: 'partnered', priority: 55,
  },
  {
    id: 'a8-easy-myshop-ecommerce', enabled: true, network: 'A8.net', advertiserName: '株式会社システムリサーチ',
    offerName: 'ネットショップ作成サービス【easy myShop】',
    destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B82L1+EDDQ8Q+2W9M+6AZAP',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['ecommerce', 'businessPlanning'],
    allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation', 'regionalRevitalization'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-17', validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '059', externalProgramId: 's00000013513001',
    creativeImageUrl: 'https://www27.a8.net/svt/bgt?aid=260717077869&wid=002&eno=01&mid=s00000013513001059000&mc=1',
    creativeAlt: 'ネットショップ作成サービス easy myShop', creativeWidth: 300, creativeHeight: 250,
    impressionPixelUrl: 'https://www15.a8.net/0.gif?a8mat=4B82L1+EDDQ8Q+2W9M+6AZAP',
    creativeId: 'a8-easy-myshop-300x250-059',
    creativeSourceUrl: 'https://www27.a8.net/svt/bgt?aid=260717077869&wid=002&eno=01&mid=s00000013513001059000&mc=1',
    creativeVerifiedAt: '2026-07-17', destinationHost: 'px.a8.net', claimReviewStatus: 'reviewed',
    verifiedLandingHost: 'www.easy-myshop.jp', landingVerifiedAt: '2026-07-17',
    creativeFingerprint: '6a8fdd33e9ee465ed25ea3d1cd54fb0afa668e033deee23e46f7e33d10d3af68',
    nextReviewAt: '2026-08-17', claimReviewSource: 'A8.net提携情報・支援制度ナビ専用広告素材を2026-07-17に確認',
    reviewMethod: 'mixed', partnershipStatus: 'partnered', priority: 52,
  },
  {
    id: 'a8-onamae-rental-server', enabled: true, network: 'A8.net', advertiserName: 'ＧＭＯインターネット株式会社',
    offerName: 'お名前.com レンタルサーバー',
    destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B82L5+7NNQMY+50+35UAKX',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['cloudStorage', 'ecommerce', 'businessPlanning'],
    allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-17', validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '121', externalProgramId: 's00000000018019',
    creativeImageUrl: 'https://www27.a8.net/svt/bgt?aid=260717081463&wid=002&eno=01&mid=s00000000018019121000&mc=1',
    creativeAlt: 'お名前.com レンタルサーバー', creativeWidth: 300, creativeHeight: 250,
    impressionPixelUrl: 'https://www10.a8.net/0.gif?a8mat=4B82L5+7NNQMY+50+35UAKX',
    creativeId: 'a8-onamae-rental-server-300x250-121',
    creativeSourceUrl: 'https://www27.a8.net/svt/bgt?aid=260717081463&wid=002&eno=01&mid=s00000000018019121000&mc=1',
    creativeVerifiedAt: '2026-07-17', destinationHost: 'px.a8.net', claimReviewStatus: 'reviewed',
    verifiedLandingHost: 'www.onamae-server.com', landingVerifiedAt: '2026-07-17',
    creativeFingerprint: '3becc24c6123c8b5c7afb7c4165635fe9bb5dc91c334e0631af316c0381307f6',
    nextReviewAt: '2026-08-17', claimReviewSource: 'A8.net提携情報・支援制度ナビ専用広告素材を2026-07-17に確認',
    reviewMethod: 'mixed', partnershipStatus: 'partnered', priority: 48,
  },
  {
    id: 'a8-shin-rental-server', enabled: true, network: 'A8.net', advertiserName: 'エックスサーバー株式会社',
    offerName: 'シンレンタルサーバー',
    destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B82L5+7MGVFE+5GDG+609HT',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['cloudStorage', 'ecommerce', 'businessPlanning'],
    allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-17', validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '009', externalProgramId: 's00000025450001',
    creativeImageUrl: 'https://www28.a8.net/svt/bgt?aid=260717081461&wid=002&eno=01&mid=s00000025450001009000&mc=1',
    creativeAlt: 'シンレンタルサーバー', creativeWidth: 300, creativeHeight: 250,
    impressionPixelUrl: 'https://www17.a8.net/0.gif?a8mat=4B82L5+7MGVFE+5GDG+609HT',
    creativeId: 'a8-shin-rental-server-300x250-009',
    creativeSourceUrl: 'https://www28.a8.net/svt/bgt?aid=260717081461&wid=002&eno=01&mid=s00000025450001009000&mc=1',
    creativeVerifiedAt: '2026-07-17', destinationHost: 'px.a8.net', claimReviewStatus: 'reviewed',
    verifiedLandingHost: 'www.shin-server.jp', landingVerifiedAt: '2026-07-17',
    creativeFingerprint: '9dca26f8ea53efa64ce6fc9f0a4f5999ef54795b00da628fdc51903fd0657610',
    nextReviewAt: '2026-08-17', claimReviewSource: 'A8.net提携情報・支援制度ナビ専用広告素材を2026-07-17に確認',
    reviewMethod: 'mixed', partnershipStatus: 'partnered', priority: 46,
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
    externalProgramId: 's00000023202005', creativeImageUrl: null, creativeAlt: null, creativeWidth: null, creativeHeight: null,
    impressionPixelUrl: null, creativeId: null, creativeSourceUrl: null, creativeVerifiedAt: null,
    destinationHost: null, claimReviewStatus: 'pending', partnershipStatus: 'applied', priority: 20,
  },
  {
    // ASPクリエイティブ内の「補助金対象」の根拠範囲を確認できないため、対象表現のない公式素材へ差し替えるまで非公開。
    id: 'a8-kanbei-sign', enabled: false, network: 'A8.net', advertiserName: '株式会社Ｗｉｚ',
    offerName: '電子契約サービス【KANBEI SIGN】', destinationUrl: 'https://px.a8.net/svt/ejp?a8mat=4B8111+81Y55M+3SPO+BEUDPD',
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['electronicContract', 'businessPlanning'], allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: '2026-07-15', validUntil: null, verifiedAt: '2026-07-15',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: '002',
    externalProgramId: 's00000017718069',
    creativeImageUrl: 'https://www23.a8.net/svt/bgt?aid=260715061487&wid=002&eno=01&mid=s00000017718069006000&mc=1',
    creativeAlt: '電子契約サービス KANBEI SIGN',
    creativeWidth: 300,
    creativeHeight: 250,
    impressionPixelUrl: 'https://www11.a8.net/0.gif?a8mat=4B8111+81Y55M+3SPO+BEUDPD',
    creativeId: 'a8-kanbei-sign-300x250-002',
    creativeSourceUrl: 'https://www23.a8.net/svt/bgt?aid=260715061487&wid=002&eno=01&mid=s00000017718069006000&mc=1',
    creativeVerifiedAt: '2026-07-15', destinationHost: 'px.a8.net', claimReviewStatus: 'pending',
    verifiedLandingHost: 'f.012grp.co.jp', landingVerifiedAt: '2026-07-17',
    creativeFingerprint: '1220584a1bc4e270e768402739db34f7f06d11443c9a8d514d9e1771e32ac43b',
    nextReviewAt: '2026-08-17', claimReviewSource: 'ASP素材内の補助金対象表現について根拠範囲の確認待ち', reviewMethod: 'human',
    partnershipStatus: 'partnered',
    priority: 40,
  },
  // もしもアフィリエイトで支援制度ナビから提携申請済み。承認・公式広告素材取得までは公開しない。
  {
    id: 'moshimo-circle-reuse-ai-saas', enabled: false, network: 'もしもアフィリエイト', advertiserName: '株式会社ライフストーリーズ',
    offerName: 'CircleReuse｜リユース事業者向けAI査定SaaS', destinationUrl: null,
    audiences: ['soleProprietor', 'business'],
    intents: ['ecommerce', 'businessPlanning'], allowedPurposes: ['businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: null, validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: null,
    externalProgramId: '7644', creativeImageUrl: null, creativeAlt: null, creativeWidth: null, creativeHeight: null,
    impressionPixelUrl: null, creativeId: null, creativeSourceUrl: null, creativeVerifiedAt: null,
    destinationHost: null, claimReviewStatus: 'pending', partnershipStatus: 'applied', priority: 28,
  },
  {
    id: 'moshimo-spot-jinji', enabled: false, network: 'もしもアフィリエイト', advertiserName: 'スポット人事',
    offerName: 'スポット人事｜地方企業・中小企業向け採用支援', destinationUrl: null,
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['humanResources'], allowedPurposes: ['employment', 'businessGrowth', 'wageIncrease'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: null, validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: null,
    externalProgramId: '7602', creativeImageUrl: null, creativeAlt: null, creativeWidth: null, creativeHeight: null,
    impressionPixelUrl: null, creativeId: null, creativeSourceUrl: null, creativeVerifiedAt: null,
    destinationHost: null, claimReviewStatus: 'pending', partnershipStatus: 'applied', priority: 27,
  },
  {
    id: 'moshimo-gleasin', enabled: false, network: 'もしもアフィリエイト', advertiserName: 'gleasin',
    offerName: 'gleasin｜商圏分析・立地分析ツール', destinationUrl: null,
    audiences: ['soleProprietor', 'business', 'localOrganization'],
    intents: ['businessPlanning'], allowedPurposes: ['startup', 'businessGrowth', 'regionalRevitalization'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: null, validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: null,
    externalProgramId: '7520', creativeImageUrl: null, creativeAlt: null, creativeWidth: null, creativeHeight: null,
    impressionPixelUrl: null, creativeId: null, creativeSourceUrl: null, creativeVerifiedAt: null,
    destinationHost: null, claimReviewStatus: 'pending', partnershipStatus: 'applied', priority: 26,
  },
  {
    id: 'moshimo-sb-payment', enabled: false, network: 'もしもアフィリエイト', advertiserName: 'SBペイメントサービス株式会社',
    offerName: 'SBペイメントサービス｜オンライン決済サービス', destinationUrl: null,
    audiences: ['soleProprietor', 'business', 'nonprofit', 'localOrganization'],
    intents: ['ecommerce', 'pos'], allowedPurposes: ['startup', 'businessGrowth', 'digitalTransformation'],
    blockedPurposes: SENSITIVE_PURPOSES, allowedPageTypes: ['home', 'grant', 'businessGuide'],
    validFrom: null, validUntil: null, verifiedAt: '2026-07-17',
    disclosureText: '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。',
    buttonText: 'サービスを見る', trackingId: null,
    externalProgramId: '3836', creativeImageUrl: null, creativeAlt: null, creativeWidth: null, creativeHeight: null,
    impressionPixelUrl: null, creativeId: null, creativeSourceUrl: null, creativeVerifiedAt: null,
    destinationHost: null, claimReviewStatus: 'pending', partnershipStatus: 'applied', priority: 25,
  },
];
