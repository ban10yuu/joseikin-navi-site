'use client';

import { useState } from 'react';
import { PREFECTURES } from '@/lib/types';

type Audience = 'personal' | 'business';

interface PurposeOption {
  label: string;
  query: string;
  category?: string;
}

const PURPOSES: Record<Audience, PurposeOption[]> = {
  personal: [
    { label: '子育て', query: '子育て', category: 'childcare' },
    { label: '住まい', query: '住宅', category: 'housing' },
    { label: '医療・健康', query: '医療', category: 'medical' },
    { label: '学び・教育', query: '教育', category: 'education' },
    { label: '介護・福祉', query: '介護', category: 'nursing' },
    { label: '生活支援', query: '生活', category: 'living' },
  ],
  business: [
    { label: '創業', query: '創業' },
    { label: '雇用', query: '雇用' },
    { label: '設備投資', query: '設備' },
    { label: '省エネ', query: '省エネ' },
    { label: '販路開拓', query: '販路' },
    { label: '地域活性化', query: '地域 活性' },
  ],
};

const prefectures = PREFECTURES.filter((prefecture) => prefecture !== '全国');

interface HomeGrantSearchProps {
  totalCount: number;
  officialLinkedCount: number;
}

function AudienceIcon({ type }: { type: Audience }) {
  if (type === 'personal') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20c.5-4.1 2.7-6.2 6.5-6.2s6 2.1 6.5 6.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V7.5L12 4v16M12 9h8v11M7.5 9.5h1M7.5 13h1M7.5 16.5h1M15.5 12h1M15.5 15.5h1" />
    </svg>
  );
}

export default function HomeGrantSearch({
  totalCount,
  officialLinkedCount,
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

  return (
    <section aria-labelledby="home-search-title" className="home-search home-search-panel">
      <div className="home-search-heading">
        <div>
          <p className="home-search-eyebrow">30秒で検索</p>
          <h2 id="home-search-title" className="text-xl sm:text-2xl font-black text-navy leading-tight">
            地域と目的から探す
          </h2>
        </div>
        <p className="home-search-total">
          公式リンク付き <strong>{officialLinkedCount.toLocaleString('ja-JP')}件</strong>
        </p>
      </div>

      <form action="/grants/" method="get" role="search" aria-label="助成金・補助金を検索">
        <fieldset className="home-search-step">
          <legend className="home-search-step-label">
            <span>1</span> 探したい目的の種類
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
          <p className="home-audience-note">選んだ区分に合わせて、次の目的候補を切り替えます。検索条件には、目的またはキーワードを使います。</p>
        </fieldset>

        <fieldset className="home-search-step">
          <legend className="home-search-step-label">
            <span>2</span> 目的を選んでください
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
            <span>3</span> 地域・キーワードを指定してください
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
                placeholder={audience === 'personal' ? '例：子育て、住宅、奨学金' : '例：創業、設備投資、省エネ'}
                className="home-search-input"
                autoComplete="off"
              />
            </div>
          </div>
        </fieldset>

        {category && <input type="hidden" name="cat" value={category} />}

        <button type="submit" className="home-search-submit">
          この条件で制度を探す
          <span aria-hidden="true">→</span>
        </button>
      </form>

      <p className="home-search-footnote">
        掲載総数{totalCount.toLocaleString('ja-JP')}件。候補を見つけるための検索です。対象条件と受付状況は、各制度の公式ページで最終確認してください。
      </p>
    </section>
  );
}
