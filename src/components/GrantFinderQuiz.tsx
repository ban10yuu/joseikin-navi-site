'use client';

import { useState, useMemo } from 'react';
import { getAllGrants } from '@/lib/grants';
import { PREFECTURES } from '@/lib/types';
import { QUIZ_OPTIONS, quizFilterGrants } from '@/lib/documents';
import GrantCard from './GrantCard';

const prefectures = PREFECTURES.filter((p) => p !== '全国');
const groups = [...new Set(QUIZ_OPTIONS.map((o) => o.group))];

export default function GrantFinderQuiz() {
  const allGrants = getAllGrants();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [prefecture, setPrefecture] = useState<string | null>(null);
  const [showCount, setShowCount] = useState(20);

  const matched = useMemo(
    () => quizFilterGrants(allGrants, checked, prefecture),
    [allGrants, checked, prefecture]
  );

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setShowCount(20);
  };

  const hasAnyFilter = checked.size > 0 || prefecture !== null;
  const visible = matched.slice(0, showCount);

  return (
    <div>
      <section className="bg-white border border-gray-200 rounded-lg p-5 sm:p-7">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded bg-[#1d4ed8] flex items-center justify-center text-white font-bold text-xs">
            ?
          </div>
          <h2 className="text-lg font-bold text-gray-900">あなたに合った助成金を診断</h2>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          当てはまる項目にチェックを入れると、利用できる可能性のある助成金がリアルタイムで絞り込まれます。
        </p>

        {/* Prefecture */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">お住まいの地域</label>
          <select
            value={prefecture || ''}
            onChange={(e) => { setPrefecture(e.target.value || null); setShowCount(20); }}
            className="w-full sm:w-64 px-3 py-2 text-sm border border-gray-300 rounded bg-white text-gray-800 focus:border-blue-500 focus:outline-none"
          >
            <option value="">全国（地域を選択してください）</option>
            {prefectures.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Checkboxes grouped */}
        {groups.map((group) => (
          <div key={group} className="mb-5">
            <p className="text-sm font-semibold text-gray-700 mb-2">{group}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {QUIZ_OPTIONS.filter((o) => o.group === group).map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded border cursor-pointer transition-colors text-sm ${
                    checked.has(option.id)
                      ? 'bg-blue-50 border-blue-300 text-blue-800'
                      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked.has(option.id)}
                    onChange={() => toggle(option.id)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Result Counter */}
        <div className={`rounded-lg p-4 text-center transition-all ${
          hasAnyFilter ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'
        }`}>
          <p className="text-sm text-gray-500 mb-1">
            {hasAnyFilter ? 'あなたが利用できる可能性のある助成金' : '全助成金'}
          </p>
          <p className={`text-3xl font-black ${hasAnyFilter ? 'text-[#1d4ed8]' : 'text-gray-800'}`}>
            {matched.length}<span className="text-lg font-semibold text-gray-500 ml-1">件</span>
          </p>
          {hasAnyFilter && (
            <button
              onClick={() => { setChecked(new Set()); setPrefecture(null); setShowCount(20); }}
              className="mt-2 text-xs text-red-500 hover:text-red-600 font-medium"
            >
              条件をリセット
            </button>
          )}
        </div>
      </section>

      {/* Grant Results - directly below quiz */}
      <div id="grants" className="mt-6 space-y-4">
        {visible.map((grant) => (
          <GrantCard key={grant.slug} grant={grant} />
        ))}
      </div>

      {visible.length === 0 && hasAnyFilter && (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg mb-2">該当する助成金が見つかりませんでした</p>
          <p className="text-slate-400 text-sm">条件を変更してお試しください</p>
        </div>
      )}

      {matched.length > showCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowCount((c) => c + 20)}
            className="px-8 py-3 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
          >
            もっと見る（残り{matched.length - showCount}件）
          </button>
        </div>
      )}
    </div>
  );
}
