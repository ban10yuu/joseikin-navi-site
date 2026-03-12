'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { getAllGrants } from '@/lib/grants';
import { GrantCategory, GrantType, CATEGORY_LABELS } from '@/lib/types';
import GrantCard from './GrantCard';
import FilterPanel from './FilterPanel';

function readUrlFilters() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  const pref = params.get('pref');
  const q = params.get('q');
  return {
    category: (cat && cat in CATEGORY_LABELS ? cat : null) as GrantCategory | null,
    prefecture: pref || null,
    search: q || '',
  };
}

export default function GrantListClient() {
  const allGrants = getAllGrants();
  const [category, setCategory] = useState<GrantCategory | null>(null);
  const [type, setType] = useState<GrantType | null>(null);
  const [prefecture, setPrefecture] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [showCount, setShowCount] = useState(20);

  const applyUrlFilters = useCallback(() => {
    const f = readUrlFilters();
    if (f.category) setCategory(f.category);
    if (f.prefecture) setPrefecture(f.prefecture);
    if (f.search) setSearch(f.search);
    setShowCount(20);
  }, []);

  useEffect(() => {
    applyUrlFilters();
    window.addEventListener('quiz-filter-applied', applyUrlFilters);
    return () => window.removeEventListener('quiz-filter-applied', applyUrlFilters);
  }, [applyUrlFilters]);

  const filtered = useMemo(() => {
    let result = allGrants;

    if (category) {
      result = result.filter((g) => g.category === category);
    }
    if (type) {
      result = result.filter((g) => g.type === type);
    }
    if (prefecture) {
      result = result.filter(
        (g) => g.prefecture === prefecture || g.prefecture === '全国'
      );
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.tags.some((t) => t.toLowerCase().includes(q)) ||
          g.organization.toLowerCase().includes(q) ||
          g.eligibility.toLowerCase().includes(q)
      );
    }

    return result;
  }, [allGrants, category, type, prefecture, search]);

  const visible = filtered.slice(0, showCount);

  return (
    <div>
      <FilterPanel
        selectedCategory={category}
        selectedType={type}
        selectedPrefecture={prefecture}
        searchQuery={search}
        onCategoryChange={setCategory}
        onTypeChange={setType}
        onPrefectureChange={setPrefecture}
        onSearchChange={setSearch}
        totalCount={allGrants.length}
        filteredCount={filtered.length}
      />

      <div className="mt-6 space-y-4">
        {visible.map((grant) => (
          <GrantCard key={grant.slug} grant={grant} />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg mb-2">該当する助成金が見つかりませんでした</p>
          <p className="text-slate-400 text-sm">検索条件を変更してお試しください</p>
        </div>
      )}

      {filtered.length > showCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowCount((c) => c + 20)}
            className="px-8 py-3 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
          >
            もっと見る（残り{filtered.length - showCount}件）
          </button>
        </div>
      )}
    </div>
  );
}
