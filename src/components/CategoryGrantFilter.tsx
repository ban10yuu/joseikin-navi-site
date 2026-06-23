'use client';

import { useMemo, useState } from 'react';
import { PREFECTURES, TYPE_LABELS, GrantType } from '@/lib/types';
import GrantCard, { GrantCardItem } from './GrantCard';

const types = Object.entries(TYPE_LABELS) as [GrantType, string][];
const prefectures = PREFECTURES.filter((pref) => pref !== '全国');

interface CategoryGrantFilterProps {
  grants: GrantCardItem[];
  categoryLabel: string;
}

export default function CategoryGrantFilter({ grants, categoryLabel }: CategoryGrantFilterProps) {
  const [selectedType, setSelectedType] = useState<GrantType | null>(null);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [showCount, setShowCount] = useState(40);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return grants.filter((grant) => {
      if (selectedType && grant.type !== selectedType) return false;
      if (selectedPrefecture && grant.prefecture !== selectedPrefecture && grant.prefecture !== '全国') return false;
      if (!normalizedQuery) return true;

      const searchableText = grant.searchText || [
        grant.title,
        grant.description,
        grant.organization,
        grant.eligibility,
        grant.prefecture,
        ...(grant.tags || []),
      ].join(' ').toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [grants, query, selectedPrefecture, selectedType]);

  const visibleGrants = filtered.slice(0, showCount);
  const hasFilter = Boolean(selectedType || selectedPrefecture || query.trim());

  function resetFilters() {
    setSelectedType(null);
    setSelectedPrefecture(null);
    setQuery('');
    setShowCount(40);
  }

  return (
    <div className="space-y-5">
      <section className="bg-card rounded-xl border-2 border-navy p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-navy">絞り込み</h2>
            <p className="text-xs text-muted mt-1">
              {categoryLabel}の公式リンクあり制度を、種類・地域・キーワードで絞り込めます。
            </p>
          </div>
          <p className="text-sm text-muted">
            <span className="font-black text-accent-deep text-lg">{filtered.length}</span>
            <span className="text-faint"> / {grants.length}件</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-3 mb-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="制度名、団体名、対象者で検索"
              value={query}
              onChange={(event) => { setQuery(event.target.value); setShowCount(40); }}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-line-strong bg-base text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-navy transition-all"
            />
          </div>

          <select
            value={selectedPrefecture || ''}
            onChange={(event) => { setSelectedPrefecture(event.target.value || null); setShowCount(40); }}
            className="w-full px-3 py-3 rounded-lg border-2 border-line-strong bg-base text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-navy"
          >
            <option value="">すべての地域</option>
            {prefectures.map((prefecture) => (
              <option key={prefecture} value={prefecture}>{prefecture}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {types.map(([type, label]) => (
            <button
              key={type}
              type="button"
              onClick={() => { setSelectedType(selectedType === type ? null : type); setShowCount(40); }}
              className={`filter-chip ${selectedType === type ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
          {hasFilter && (
            <button
              type="button"
              onClick={resetFilters}
              className="ml-auto text-xs text-accent-deep hover:text-accent font-bold underline underline-offset-2"
            >
              クリア
            </button>
          )}
        </div>
      </section>

      <div className="space-y-4">
        {visibleGrants.map((grant) => (
          <GrantCard key={grant.slug} grant={grant} />
        ))}
      </div>

      {visibleGrants.length === 0 && (
        <div className="text-center py-16 bg-card border-2 border-line rounded-xl">
          <p className="text-ink text-lg font-bold mb-2">該当する助成金が見つかりませんでした</p>
          <p className="text-muted text-sm mb-4">条件を変更して再度お試しください。</p>
          <button
            type="button"
            onClick={resetFilters}
            className="text-sm text-navy hover:text-accent-deep font-bold underline underline-offset-2"
          >
            条件をリセットする
          </button>
        </div>
      )}

      {filtered.length > showCount && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setShowCount((count) => count + 40)}
            className="px-8 py-3 text-sm font-bold text-white bg-navy border-2 border-navy rounded-full hover:bg-navy-soft transition-colors shadow-sm"
          >
            もっと見る（残り{filtered.length - showCount}件）
          </button>
        </div>
      )}
    </div>
  );
}
