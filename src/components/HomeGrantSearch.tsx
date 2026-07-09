'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CATEGORY_LABELS, GrantCategory, PREFECTURES } from '@/lib/types';
import { matchesSearchText } from '@/lib/search';
import GrantCard, { GrantCardItem } from './GrantCard';

const categories = Object.entries(CATEGORY_LABELS) as [GrantCategory, string][];
const prefectures = PREFECTURES.filter((pref) => pref !== '全国');

const quickSearches: { label: string; query: string; category?: GrantCategory; prefecture?: string }[] = [
  { label: '子ども医療', query: 'こども 医療費', category: 'childcare' },
  { label: '兵庫県', query: '', prefecture: '兵庫県' },
  { label: '創業・事業', query: '創業 事業', category: 'employment' },
  { label: '住宅支援', query: '住宅', category: 'housing' },
  { label: '教育費', query: '奨学 教育', category: 'education' },
];

interface HomeGrantSearchProps {
  grants: GrantCardItem[];
  totalCount: number;
  officialLinkedCount: number;
}

export default function HomeGrantSearch({
  grants,
  totalCount,
  officialLinkedCount,
}: HomeGrantSearchProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<GrantCategory | null>(null);
  const [prefecture, setPrefecture] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return grants.filter((grant) => {
      if (category && grant.category !== category) return false;
      if (prefecture && grant.prefecture !== prefecture && grant.prefecture !== '全国') return false;
      if (query && !matchesSearchText(grant.searchText || '', query)) return false;
      return true;
    });
  }, [category, grants, prefecture, query]);

  const visible = filtered.slice(0, 8);
  const hasFilter = Boolean(query || category || prefecture);
  const moreParams = new URLSearchParams();
  if (query.trim()) moreParams.set('q', query.trim());
  if (category) moreParams.set('cat', category);
  if (prefecture) moreParams.set('pref', prefecture);
  const moreQuery = moreParams.toString();
  const moreHref = moreQuery ? `/grants/?${moreQuery}` : '/grants/';

  const clearFilters = () => {
    setQuery('');
    setCategory(null);
    setPrefecture(null);
  };

  const activeFilters = [
    query.trim()
      ? {
          key: 'query',
          label: `キーワード: ${query.trim()}`,
          onRemove: () => setQuery(''),
        }
      : null,
    prefecture
      ? {
          key: 'prefecture',
          label: `地域: ${prefecture}`,
          onRemove: () => setPrefecture(null),
        }
      : null,
    category
      ? {
          key: 'category',
          label: `カテゴリ: ${CATEGORY_LABELS[category]}`,
          onRemove: () => setCategory(null),
        }
      : null,
  ].filter((item): item is { key: string; label: string; onRemove: () => void } => Boolean(item));

  return (
    <section aria-labelledby="home-search-title" className="home-search">
      <div className="home-search-toolbar">
        <div className="min-w-0">
          <p className="home-search-eyebrow">公式情報から探す</p>
          <h2 id="home-search-title" className="text-xl sm:text-2xl font-black text-navy leading-tight">
            使える制度を絞り込む
          </h2>
        </div>
        <div className="home-search-count" aria-live="polite">
          <span className="block text-[11px] font-bold text-muted">公式リンク記載</span>
          <span className="text-2xl font-black text-navy">{filtered.length}</span>
          <span className="text-sm font-bold text-muted">件</span>
        </div>
      </div>

      <div className="home-search-controls" role="search" aria-label="助成金検索">
        <div className="home-search-field home-search-field-primary">
          <label htmlFor="home-grant-query" className="home-search-label">
            制度名・対象者・キーワード
          </label>
          <input
            id="home-grant-query"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="例：こども医療費、創業、住宅、奨学金"
            className="home-search-input"
            autoComplete="off"
          />
        </div>

        <div className="home-search-field">
          <label htmlFor="home-grant-prefecture" className="home-search-label">
            地域
          </label>
          <select
            id="home-grant-prefecture"
            value={prefecture || ''}
            onChange={(event) => setPrefecture(event.target.value || null)}
            className="home-search-select"
          >
            <option value="">全国から探す</option>
            {prefectures.map((pref) => (
              <option key={pref} value={pref}>
                {pref}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={`home-search-active ${activeFilters.length === 0 ? 'is-empty' : ''}`} aria-label="選択中の条件">
        <span className="home-search-active-label">選択中</span>
        {activeFilters.length > 0 ? (
          activeFilters.map((item) => (
            <button
              key={item.key}
              type="button"
              className="home-search-active-chip"
              onClick={item.onRemove}
              aria-label={`${item.label}を解除`}
            >
              <span>{item.label}</span>
              <span aria-hidden="true" className="home-search-active-remove">×</span>
            </button>
          ))
        ) : (
          <span className="home-search-active-default">全国・全カテゴリ・公式リンク記載</span>
        )}
      </div>

      <div className="home-search-category" aria-label="カテゴリで絞り込み">
        <button
          type="button"
          aria-pressed={category === null}
          onClick={() => setCategory(null)}
          className={`filter-chip ${category === null ? 'active' : ''}`}
        >
          すべて
        </button>
        {categories.map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={category === key}
            onClick={() => setCategory(category === key ? null : key)}
            className={`filter-chip ${category === key ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeFilters.length === 0 && (
        <div className="home-search-quick" aria-label="よく使われる検索">
          <span className="text-xs font-bold text-muted">よく探される条件</span>
          {quickSearches.map((item) => (
            <button
              key={item.label}
              type="button"
              className="home-search-quick-button"
              onClick={() => {
                setQuery(item.query);
                setCategory(item.category || null);
                setPrefecture(item.prefecture || null);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <div className="home-search-results-header">
        <p className="home-search-result-copy">
          <span className="home-search-result-label">{hasFilter ? '該当候補' : '主要制度'}</span>
          <span className="home-search-result-number">{filtered.length}</span>
          <span className="home-search-result-meta">全ページ公式リンク記載 {officialLinkedCount}件 / 掲載総数{totalCount}件</span>
        </p>
        {hasFilter && (
          <button
            type="button"
            onClick={clearFilters}
            className="home-search-clear"
          >
            条件をクリア
          </button>
        )}
      </div>

      {visible.length > 0 ? (
        <div className={`home-search-results ${visible.length === 1 ? 'is-single' : ''}`}>
          {visible.map((grant) => (
            <GrantCard key={grant.slug} grant={grant} />
          ))}
        </div>
      ) : (
        <div className="home-search-empty" role="status">
          <p className="font-bold text-navy">該当する制度が見つかりませんでした</p>
          <p className="text-sm text-muted mt-1">キーワードを短くするか、地域・カテゴリを外して確認してください。</p>
          <button type="button" className="home-search-empty-button" onClick={clearFilters}>
            条件をリセット
          </button>
        </div>
      )}

      {filtered.length > visible.length && (
        <div className="mt-6 text-center">
          <Link
            href={moreHref}
            className="inline-flex min-h-11 items-center rounded-lg border-2 border-navy bg-card px-5 py-2 text-sm font-bold text-navy transition-colors hover:bg-wash"
          >
            一覧ページでさらに見る（残り{filtered.length - visible.length}件）
          </Link>
        </div>
      )}
    </section>
  );
}
