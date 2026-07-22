import type { AffiliateOffer, AffiliatePageType } from '@/config/affiliate-offers';
import { AFFILIATE_ISSUED_HTML } from '@/config/affiliate-issued-html';
import { AFFILIATE_LINK_REL } from '@/lib/monetization';
import type { AffiliateIntent, Audience, Purpose } from '@/lib/types';
import AffiliateDisclosure from './AffiliateDisclosure';
import AffiliateIssuedCreative from './AffiliateIssuedCreative';

interface AffiliateRecommendationProps {
  offer: AffiliateOffer;
  pageType: AffiliatePageType;
  placement: string;
  position?: number;
  grantId?: string;
  audience?: Audience;
  purpose?: Purpose;
  contextPurposes?: Purpose[];
  intents?: AffiliateIntent[];
  compact?: boolean;
  compactDisclosure?: boolean;
  lazyCreative?: boolean;
  headingLevel?: 'h2' | 'h3';
}

const OFFER_COPY: Record<string, { eyebrow: string; headline: string; subhead: string }> = {
  'a8-freee-accounting-wiz': {
    eyebrow: '創業・補助金申請後の経理準備に',
    headline: 'クラウド会計で、経費管理をまとめて効率化',
    subhead: '個人事業主・小規模事業者向け',
  },
  'a8-yayoi-accounting-next': {
    eyebrow: '法人の経理・決算準備に',
    headline: '法人向けクラウド会計で、日々の経理を効率化',
    subhead: '法人・事業者向け',
  },
  'a8-makeshop-ecommerce': {
    eyebrow: '販路開拓・EC事業の準備に',
    headline: 'ネットショップの構築と運営をまとめて準備',
    subhead: '事業者・店舗向け',
  },
  'a8-easy-myshop-ecommerce': {
    eyebrow: '小規模ECの立ち上げに',
    headline: 'ネットショップ開設に必要な機能をまとめて確認',
    subhead: '個人事業主・事業者向け',
  },
  'a8-onamae-rental-server': {
    eyebrow: '事業用Webサイトの開設に',
    headline: 'サーバーと独自ドメインをまとめて準備',
    subhead: '個人事業主・事業者向け',
  },
  'a8-shin-rental-server': {
    eyebrow: '事業用Webサイトの運用に',
    headline: '事業サイト向けレンタルサーバーを確認',
    subhead: '個人事業主・事業者向け',
  },
  'a8-kanbei-sign': {
    eyebrow: '契約・見積・発注まわりの整備に',
    headline: '電子契約で、申請準備の書類管理を軽くする',
    subhead: '事業者・団体向け',
  },
  'moshimo-circle-reuse-ai-saas': {
    eyebrow: 'リユース事業の査定業務に',
    headline: 'AI査定サービスで、査定業務の効率化を検討',
    subhead: 'リユース事業者向け',
  },
  'moshimo-gleasin': {
    eyebrow: '出店・店舗開業の立地検討に',
    headline: '商圏と立地の分析サービスを確認',
    subhead: '店舗・事業者向け',
  },
  'moshimo-worldlibrary-childrens-books': {
    eyebrow: '子どもの読書・学びに',
    headline: '世界の絵本が届くギフト定期便',
    subhead: '子育て家庭向け',
  },
  'moshimo-remoful-career': {
    eyebrow: 'リモートワークを軸に仕事を探す方へ',
    headline: 'リモートワーク求人の転職支援を確認',
    subhead: '求職者・転職希望者向け',
  },
  'moshimo-money-life-fp': {
    eyebrow: '住まい・教育費を含む家計相談に',
    headline: 'ファイナンシャルプランナーへの無料相談',
    subhead: '個人・家族向け',
  },
  'moshimo-sakucareer-match': {
    eyebrow: '自分に合う転職支援を探す方へ',
    headline: '転職エージェントとの無料面談を確認',
    subhead: '求職者・転職希望者向け',
  },
  'moshimo-zero-company-formation': {
    eyebrow: '法人設立の手続きを検討している方へ',
    headline: '法人設立支援サービスの内容を確認',
    subhead: '創業者・個人事業主向け',
  },
};

function getOfferCopy(offer: AffiliateOffer) {
  const personalOffer = offer.audiences.some((audience) => ['individual', 'family', 'student', 'jobSeeker'].includes(audience))
    && !offer.audiences.some((audience) => ['soleProprietor', 'business', 'nonprofit', 'localOrganization'].includes(audience));
  return OFFER_COPY[offer.id] ?? {
    eyebrow: personalOffer ? '制度の目的に関連するサービス' : '事業の準備・運営に関連',
    headline: offer.offerName,
    subhead: personalOffer ? '個人・家族向けサービス' : '事業者・団体向けサービス',
  };
}

export default function AffiliateRecommendation({ offer, pageType, placement, position = 1, grantId, audience, purpose, contextPurposes = [], intents = [], compact = false, compactDisclosure = false, lazyCreative = false, headingLevel = 'h2' }: AffiliateRecommendationProps) {
  const Heading = headingLevel;
  const copy = getOfferCopy(offer);
  const issuedHtml = AFFILIATE_ISSUED_HTML[offer.id];
  if (!issuedHtml) return null;
  const hasAdvertiserCreative = Boolean(issuedHtml);
  const headingId = `affiliate-${offer.id}-${placement}`.replace(/[^a-zA-Z0-9_-]/g, '-');
  const analyticsAttributes = {
    'data-page-type': pageType,
    'data-grant-id': grantId,
    'data-audience': audience,
    'data-purpose': purpose,
    'data-context-purposes': contextPurposes.join(','),
    'data-context-intents': intents.join(','),
    'data-offer-id': offer.id,
    'data-network': offer.network,
    'data-placement': placement,
    'data-position': String(position),
    'data-creative-id': offer.creativeId ?? undefined,
    'data-format': offer.creativeWidth && offer.creativeHeight ? `${offer.creativeWidth}x${offer.creativeHeight}` : 'text',
    'data-experiment-variant': 'responsive-affiliate-v1',
  };
  return (
    <aside
      className={`affiliate-banner${compact ? ' affiliate-banner--compact' : ''}`}
      data-analytics-render="true"
      data-analytics-render-event="affiliate_render"
      data-analytics-impression="true"
      data-analytics-impression-event="affiliate_impression"
      data-expected-affiliate-url={offer.destinationUrl ?? undefined}
      data-expected-creative-url={offer.creativeImageUrl ?? undefined}
      data-expected-impression-url={offer.impressionPixelUrl ?? undefined}
      aria-labelledby={headingId}
      {...analyticsAttributes}
    >
      {hasAdvertiserCreative ? (
        <>
          <AffiliateDisclosure text={offer.disclosureText} compact={compactDisclosure} />
          <div className="affiliate-creative-context">
            <p className="affiliate-banner-eyebrow">{copy.eyebrow}</p>
            <Heading id={headingId} className="affiliate-banner-headline">{offer.offerName}</Heading>
            <p className="affiliate-banner-subhead">{copy.subhead}</p>
          </div>
          <div className="affiliate-creative-shell">
            <div
              className="affiliate-creative-link"
              aria-hidden="true"
              inert
            >
              <AffiliateIssuedCreative
                offerId={offer.id}
                width={offer.creativeWidth ?? 300}
                height={offer.creativeHeight ?? 250}
                lazy={lazyCreative}
              />
            </div>
            <a
              href={offer.destinationUrl ?? undefined}
              target="_blank"
              rel={AFFILIATE_LINK_REL}
              className="affiliate-creative-overlay"
              tabIndex={-1}
              aria-hidden="true"
              data-analytics-event="affiliate_click"
              {...analyticsAttributes}
              aria-label={`${offer.advertiserName}の${offer.offerName}を見る（PR・新しいタブで開きます）`}
            />
          </div>
          <a
            href={offer.destinationUrl ?? undefined}
            target="_blank"
            rel={AFFILIATE_LINK_REL}
            className="affiliate-creative-cta"
            data-analytics-event="affiliate_click"
            {...analyticsAttributes}
            aria-label={`${offer.buttonText || 'サービスの詳細を見る'}：${offer.advertiserName}（PR・新しいタブで開きます）`}
          >
            {offer.buttonText || 'サービスの詳細を見る'}<span className="sr-only">（PR・新しいタブで開きます）</span><span aria-hidden="true"> ↗</span>
          </a>
          <p className="affiliate-advertiser-note">広告主：{offer.advertiserName}。制度の実施機関ではなく、利用は申請・採択の条件ではありません。補助対象かは公式募集要項でご確認ください。</p>
        </>
      ) : (
        <>
          <div className="affiliate-banner-copy">
            <AffiliateDisclosure text={offer.disclosureText} />
            <p className="affiliate-banner-eyebrow">{copy.eyebrow}</p>
            <Heading id={headingId} className="affiliate-banner-headline">{copy.headline}</Heading>
            <p className="affiliate-banner-subhead">{copy.subhead}</p>
            <p className="affiliate-banner-offer">{offer.offerName}</p>
            <p className="affiliate-banner-meta">広告主：{offer.advertiserName}。広告主は、この掲載制度の実施機関ではありません。サービスの利用は申請・採択の条件ではなく、利用料が現在見ている制度の補助対象経費になることを示すものでもありません。対象経費は公式募集要項でご確認ください。</p>
          </div>

          <a
            href={offer.destinationUrl ?? undefined}
            target="_blank"
            rel={AFFILIATE_LINK_REL}
            className="affiliate-banner-button"
            data-analytics-event="affiliate_click"
            data-page-type={pageType}
            data-grant-id={grantId}
            data-audience={audience}
            data-purpose={purpose}
            data-context-purposes={contextPurposes.join(',')}
            data-offer-id={offer.id}
            data-network={offer.network}
            data-placement={placement}
            data-position={String(position)}
            data-creative-id={offer.creativeId ?? undefined}
            data-format="text"
            data-experiment-variant="responsive-affiliate-v1"
            aria-label={`${offer.buttonText || 'サービスを見る'}：${offer.advertiserName}（PR・新しいタブで開きます）`}
          >
            {offer.buttonText || 'サービスを見る'}<span aria-hidden="true">→</span><span className="sr-only">（PR・新しいタブで開きます）</span>
          </a>
        </>
      )}
    </aside>
  );
}
