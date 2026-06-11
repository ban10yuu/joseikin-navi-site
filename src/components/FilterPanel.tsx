'use client';

import { GrantCategory, GrantType, CATEGORY_LABELS, TYPE_LABELS, PREFECTURES } from '@/lib/types';

interface FilterPanelProps {
  selectedCategory: GrantCategory | null;
  selectedType: GrantType | null;
  selectedPrefecture: string | null;
  searchQuery: string;
  onCategoryChange: (cat: GrantCategory | null) => void;
  onTypeChange: (type: GrantType | null) => void;
  onPrefectureChange: (pref: string | null) => void;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

const categories = Object.entries(CATEGORY_LABELS) as [GrantCategory, string][];
const types = Object.entries(TYPE_LABELS) as [GrantType, string][];

export default function FilterPanel({
  selectedCategory,
  selectedType,
  selectedPrefecture,
  searchQuery,
  onCategoryChange,
  onTypeChange,
  onPrefectureChange,
  onSearchChange,
  totalCount,
  filteredCount,
}: FilterPanelProps) {
  const hasFilter = selectedCategory || selectedType || selectedPrefecture || searchQuery;

  return (
    <div className="bg-card rounded-xl border-2 border-navy p-5 shadow-sm">
      {/* Search */}
      <div className="relative mb-5">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="助成金名、キーワードで検索..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-line-strong bg-base text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-navy transition-all"
        />
      </div>

      {/* Type Filter */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-navy tracking-wider mb-2">制度の種類</h4>
        <div className="flex flex-wrap gap-2">
          {types.map(([key, label]) => (
            <button
              key={key}
              onClick={() => onTypeChange(selectedType === key ? null : key)}
              className={`filter-chip ${selectedType === key ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-navy tracking-wider mb-2">カテゴリ</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map(([key, label]) => (
            <button
              key={key}
              onClick={() => onCategoryChange(selectedCategory === key ? null : key)}
              className={`filter-chip ${selectedCategory === key ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Prefecture Filter */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-navy tracking-wider mb-2">地域</h4>
        <select
          value={selectedPrefecture || ''}
          onChange={(e) => onPrefectureChange(e.target.value || null)}
          className="w-full px-3 py-2.5 rounded-lg border-2 border-line-strong bg-base text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-navy"
        >
          <option value="">すべての地域</option>
          {PREFECTURES.map((pref) => (
            <option key={pref} value={pref}>{pref}</option>
          ))}
        </select>
      </div>

      {/* Results Count & Clear */}
      <div className="flex items-center justify-between pt-3 border-t border-line">
        <p className="text-sm text-muted">
          <span className="font-black text-accent-deep text-base">{filteredCount}</span>
          <span className="text-faint"> / {totalCount}件</span>
        </p>
        {hasFilter && (
          <button
            onClick={() => {
              onCategoryChange(null);
              onTypeChange(null);
              onPrefectureChange(null);
              onSearchChange('');
            }}
            className="text-xs text-accent-deep hover:text-accent font-bold underline underline-offset-2"
          >
            フィルタをクリア
          </button>
        )}
      </div>
    </div>
  );
}
