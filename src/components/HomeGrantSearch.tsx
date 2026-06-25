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
  const moreHref = category
    ? `/category/${category}/`
    : prefecture
      ? `/prefecture/${encodeURIComponent(prefecture)}/`
      : '/grants/';

  return (
    <section aria-labelledby="home-search-title" className="home-search">
      <div className="home-search-toolbar">
        <div className="min-w-0">
          <p className="text-xs font-bold text-accent-deep mb-1">まず検索</p>
          <h2 id="home-search-title" className="text-xl sm:text-2xl font-black text-navy leading-tight">
            条件に合う制度をその場で絞り込み
          </h2>
        </div>
        <div className="home-search-count">
          <span className="block text-[11px] font-bold text-muted">公式リンクあり</span>
          <span className="text-2xl font-black text-navy">{filtered.length}</span>
          <span className="text-sm font-bold text-muted">件</span>
        </div>
      </div>

      <div className="home-search-controls" role="search" aria-label="助成金検索">
        <div>
          <label htmlFor="home-grant-query" className="block text-sm font-bold text-navy mb-2">
            制度名・対象者・キーワード
          </label>
          <input
            id="home-grant-query"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="例：こども医療費、創業、住宅、奨学金"
            className="home-search-input"
          />
        </div>

        <div>
          <label htmlFor="home-grant-prefecture" className="block text-sm font-bold text-navy mb-2">
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

      <div className="home-search-category" aria-label="カテゴリで絞り込み">
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

      <div className="home-search-results-header">
        <p className="text-sm text-muted">
          {hasFilter ? '絞り込み結果' : '公式リンク確認済みの主要制度'}を表示中
          <span className="ml-2 font-bold text-navy">
            {filtered.length}件
          </span>
          <span className="ml-1 text-faint">/ 公式リンクあり{officialLinkedCount}件・掲載総数{totalCount}件</span>
        </p>
        {hasFilter && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setCategory(null);
              setPrefecture(null);
            }}
            className="text-sm font-bold text-accent-deep underline underline-offset-4 hover:text-navy"
          >
            条件をクリア
          </button>
        )}
      </div>

      {visible.length > 0 ? (
        <div className="home-search-results">
          {visible.map((grant) => (
            <GrantCard key={grant.slug} grant={grant} />
          ))}
        </div>
      ) : (
        <div className="home-search-empty" role="status">
          <p className="font-bold text-navy">該当する制度が見つかりませんでした</p>
          <p className="text-sm text-muted mt-1">キーワードを短くするか、地域・カテゴリを外して確認してください。</p>
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
