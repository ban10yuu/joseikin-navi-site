'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { AffiliateOffer } from '@/config/affiliate-offers';
import { PREFECTURES, type AffiliateIntent, type Purpose } from '@/lib/types';
import { HOME_SEARCH_GUIDE_VISUALS } from '@/lib/visual-assets';
import ResponsiveAffiliatePlacement from './ResponsiveAffiliatePlacement';

type Audience = 'personal' | 'business';

interface PurposeOption {
  label: string;
  query: string;
  category?: string;
  purpose?: Purpose;
  intents?: AffiliateIntent[];
}

const PURPOSES: Record<Audience, PurposeOption[]> = {
  personal: [
    { label: '子育て', query: '子育て', category: 'childcare', purpose: 'childcare', intents: ['childrensEducation'] },
    { label: '住まい', query: '住宅', category: 'housing', purpose: 'housing', intents: ['financialPlanning'] },
    { label: '医療・健康', query: '医療', category: 'medical' },
    { label: '学び・教育', query: '教育', category: 'education', purpose: 'education', intents: ['childrensEducation', 'financialPlanning'] },
    { label: '仕事・転職', query: '就職 転職', purpose: 'employment', intents: ['careerConsultation'] },
    { label: '介護・福祉', query: '介護', category: 'nursing' },
    { label: '生活支援', query: '生活', category: 'living' },
  ],
  business: [
    { label: '創業', query: '創業', purpose: 'startup', intents: ['businessPlanning', 'accounting', 'electronicContract'] },
    { label: '雇用', query: '雇用', purpose: 'employment', intents: ['humanResources', 'attendance', 'payroll'] },
    { label: '設備投資', query: '設備', purpose: 'businessGrowth', intents: [] },
    { label: '省エネ', query: '省エネ', purpose: 'energySaving', intents: [] },
    { label: '販路開拓', query: '販路', purpose: 'businessGrowth', intents: ['ecommerce'] },
    { label: '地域活性化', query: '地域 活性', purpose: 'regionalRevitalization', intents: ['tradeAreaAnalysis'] },
  ],
};

const prefectures = PREFECTURES.filter((prefecture) => prefecture !== '全国');

interface HomeGrantSearchProps {
  totalCount: number;
  officialLinkedCount: number;
  personalAffiliateOffers?: AffiliateOffer[];
  businessAffiliateOffers?: AffiliateOffer[];
}

function AudienceIcon({ type }: { type: Audience }) {
  if (type === 'personal') {
    return (
      <svg className="audience-icon-person" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20c.5-4.1 2.7-6.2 6.5-6.2s6 2.1 6.5 6.2" />
      </svg>
    );
  }

  return (
    <svg className="audience-icon-company" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V7.5L12 4v16M12 9h8v11M7.5 9.5h1M7.5 13h1M7.5 16.5h1M15.5 12h1M15.5 15.5h1" />
    </svg>
  );
}

export default function HomeGrantSearch({
  totalCount,
  officialLinkedCount,
  personalAffiliateOffers = [],
  businessAffiliateOffers = [],
}: HomeGrantSearchProps) {
  const [audience, setAudience] = useState<Audience>('personal');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');

  const selectAudience = (nextAudience: Audience) => {
    setAudience(nextAudience);
    setQuery('');
    setCategory('');
    setSelectedPurpose('');
  };

  const selectPurpose = (purpose: PurposeOption) => {
    const isSelected = selectedPurpose === purpose.label;
    setSelectedPurpose(isSelected ? '' : purpose.label);
    setQuery(isSelected ? '' : purpose.query);
    setCategory(isSelected ? '' : purpose.category || '');
  };

  const selectedPurposeOption = PURPOSES[audience].find((item) => item.label === selectedPurpose);
  const audienceAffiliateOffers = audience === 'business' ? businessAffiliateOffers : personalAffiliateOffers;
  const unselectedOffers = audienceAffiliateOffers;
  const contextMatchedAffiliateOffers = selectedPurposeOption
      ? audienceAffiliateOffers.filter((offer) => Boolean(selectedPurposeOption.purpose)
        && Boolean(selectedPurposeOption.intents?.length)
        && offer.allowedPurposes.includes(selectedPurposeOption.purpose as Purpose)
        && selectedPurposeOption.intents?.some((intent) => offer.intents.includes(intent)))
      : unselectedOffers;
  const usesBroadAffiliateFallback = Boolean(selectedPurposeOption && contextMatchedAffiliateOffers.length === 0);
  const selectedAffiliateOffers = (usesBroadAffiliateFallback ? unselectedOffers : contextMatchedAffiliateOffers).slice(0, 8);
  const showContextualAffiliate = selectedAffiliateOffers.length > 0;
  const featuredAffiliateOffers = selectedAffiliateOffers.slice(0, 1);
  const moreAffiliateOffers = selectedAffiliateOffers.slice(1);
  const affiliatePurpose = selectedPurposeOption?.purpose ?? (audience === 'business' ? 'businessGrowth' : 'other');
  const affiliateHeading = usesBroadAffiliateFallback
    ? audience === 'business' ? '事業の準備・運営に関連するサービス' : '個人・家族向けのサービス'
    : selectedPurposeOption ? '選択した目的に関連するサービス' : audience === 'business' ? '事業の準備・運営に関連するサービス' : '暮らし・学びに関連するサービス';
  const affiliateDescription = usesBroadAffiliateFallback
    ? '選択した目的に完全一致する広告が少ないため、個人・家族向けの民間サービス広告を表示しています。制度の利用や申請に必須ではありません。'
    : '民間サービスの広告です。制度の利用や申請に必須ではありません。';

  return (
      <section aria-labelledby="home-search-title" className={`home-search home-search-panel${showContextualAffiliate ? ' has-business-affiliate' : ''}`}>
      <div className="home-search-heading">
        <div>
          <p className="home-search-eyebrow">補助金・助成金・給付金を検索</p>
          <h2 id="home-search-title" className="text-xl sm:text-2xl font-black text-navy leading-tight">
            使える可能性のある制度を探す
          </h2>
        </div>
        <p className="home-search-total">
          公式リンク付き <strong>{officialLinkedCount.toLocaleString('ja-JP')}件</strong>
        </p>
      </div>

      <ol className="home-search-guide" aria-label="制度を探して公式情報を確認するまでの流れ">
        {HOME_SEARCH_GUIDE_VISUALS.map((item, index) => (
          <li key={item.title}>
            <span className="home-search-guide-number">{index + 1}</span>
            {item.visualType === 'audience' ? (
              <span className="home-search-guide-audience" aria-hidden="true">
                <span><AudienceIcon type="personal" /></span>
                <span><AudienceIcon type="business" /></span>
              </span>
            ) : (
              <Image src={item.src} alt="" width={56} height={56} sizes="(max-width: 768px) 38px, 50px" />
            )}
            <span className="home-search-guide-copy">
              <strong>{item.title}</strong>
              <small>{item.description}</small>
            </span>
          </li>
        ))}
      </ol>

      <form action="/grants/" method="get" role="search" aria-label="助成金・補助金を検索" data-analytics-event="search_submit" data-page-type="home">
        <fieldset className="home-search-step">
          <legend className="home-search-step-label">
            <span>1</span> 対象を選択
          </legend>
          <div className="home-audience-switch">
            <button
              type="button"
              aria-pressed={audience === 'personal'}
              className={audience === 'personal' ? 'is-active' : ''}
              onClick={() => selectAudience('personal')}
            >
              <AudienceIcon type="personal" />
              個人・家族向け
            </button>
            <button
              type="button"
              aria-pressed={audience === 'business'}
              className={audience === 'business' ? 'is-active' : ''}
              onClick={() => selectAudience('business')}
            >
              <AudienceIcon type="business" />
              事業者・団体向け
            </button>
          </div>
          <p className="home-audience-note">個人・家族向けと事業者・団体向けを分けて検索します。選択に合わせて目的候補が切り替わります。</p>
        </fieldset>

        <fieldset className="home-search-step">
          <legend className="home-search-step-label">
            <span>2</span> 利用目的を選択
          </legend>
          <div className="home-purpose-list">
            {PURPOSES[audience].map((purpose) => (
              <button
                key={purpose.label}
                type="button"
                aria-pressed={selectedPurpose === purpose.label}
                className={selectedPurpose === purpose.label ? 'is-active' : ''}
                onClick={() => selectPurpose(purpose)}
              >
                {purpose.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="home-search-step">
          <legend className="home-search-step-label">
            <span>3</span> 地域・キーワードを指定
          </legend>
          <div className="home-search-fields">
            <div className="home-search-field">
              <label htmlFor="home-grant-prefecture" className="home-search-label">
                地域
              </label>
              <select
                id="home-grant-prefecture"
                name="pref"
                className="home-search-select"
                defaultValue=""
              >
                <option value="">全国から探す</option>
                {prefectures.map((prefecture) => (
                  <option key={prefecture} value={prefecture}>
                    {prefecture}
                  </option>
                ))}
              </select>
            </div>

            <div className="home-search-field home-search-field-primary">
              <label htmlFor="home-grant-query" className="home-search-label">
                キーワード <span>任意</span>
              </label>
              <input
                id="home-grant-query"
                name="q"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setCategory('');
                  setSelectedPurpose('');
                }}
                placeholder={audience === 'personal' ? '例：子育て、住宅、奨学金、給付金' : '例：創業、設備投資、省エネ、補助金'}
                className="home-search-input"
                autoComplete="off"
              />
            </div>
          </div>
        </fieldset>

        <input type="hidden" name="audience" value={audience === 'personal' ? 'individual' : 'business'} />
        {category && <input type="hidden" name="cat" value={category} />}

        <button type="submit" className="home-search-submit">
          補助金・助成金を検索する
          <span aria-hidden="true">→</span>
        </button>

        {showContextualAffiliate ? (
          <div className="home-business-affiliate">
            <ResponsiveAffiliatePlacement
              key={`featured-${featuredAffiliateOffers.map((offer) => offer.id).join('-')}`}
              offers={featuredAffiliateOffers}
              pageType="home"
              placement="home-featured-rail"
              audience={audience === 'business' ? 'business' : 'individual'}
              purpose={affiliatePurpose}
              className="home-affiliate-placement"
              heading={affiliateHeading}
              description={affiliateDescription}
            />
          </div>
        ) : null}
      </form>

      <p className="home-search-footnote">
        掲載総数{totalCount.toLocaleString('ja-JP')}件。候補を見つけるための検索です。対象条件と受付状況は、各制度の公式ページで最終確認してください。
      </p>

      {moreAffiliateOffers.length > 0 ? (
        <div className="home-affiliate-more">
          <p className="home-affiliate-swipe-hint">横にスワイプして関連サービスを確認できます</p>
          <ResponsiveAffiliatePlacement
            key={`more-${moreAffiliateOffers.map((offer) => offer.id).join('-')}`}
            offers={moreAffiliateOffers}
            pageType="home"
            placement="home-related-row"
            audience={audience === 'business' ? 'business' : 'individual'}
            purpose={affiliatePurpose}
            className="home-affiliate-more-placement"
            visibleCount={3}
            positionOffset={1}
            lazyCreatives
            heading={usesBroadAffiliateFallback ? 'そのほかの個人・家族向けサービス' : 'そのほかの関連サービス'}
            description={usesBroadAffiliateFallback ? '選択した目的に完全一致する広告が少ない場合の補助的なPR枠です。' : '現在選択している対象に関連する民間サービスの広告です。'}
          />
        </div>
      ) : null}
      </section>
  );
}
