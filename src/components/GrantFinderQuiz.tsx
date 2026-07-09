'use client';

import { useState, useMemo } from 'react';
import { PREFECTURES } from '@/lib/types';
import { QUIZ_OPTIONS } from '@/lib/documents';
import GrantCard, { GrantCardItem } from './GrantCard';

const prefectures = PREFECTURES.filter((p) => p !== '全国');
const groups = [...new Set(QUIZ_OPTIONS.map((o) => o.group))];

function quizFilterGrants(grants: GrantCardItem[], checked: Set<string>, prefecture: string | null): GrantCardItem[] {
  let result = grants;

  if (prefecture) {
    result = result.filter((g) => g.prefecture === prefecture || g.prefecture === '全国');
  }

  if (checked.size === 0) return result;

  const matchers: ((g: GrantCardItem) => boolean)[] = [];

  if (checked.has('has-children')) matchers.push((g) => g.category === 'childcare');
  if (checked.has('pregnant')) matchers.push((g) =>
    g.category === 'childcare' && (g.title.includes('出産') || g.title.includes('妊') || g.title.includes('育児'))
  );
  if (checked.has('single-parent')) matchers.push((g) =>
    g.title.includes('ひとり親') || g.title.includes('児童扶養') || g.eligibility.includes('ひとり親')
  );
  if (checked.has('elderly')) matchers.push((g) =>
    g.category === 'nursing' || g.title.includes('高齢') || g.title.includes('介護') || g.title.includes('年金')
  );
  if (checked.has('disability')) matchers.push((g) =>
    g.title.includes('障害') || g.title.includes('障がい') || g.eligibility.includes('障害') || g.eligibility.includes('障がい')
  );
  if (checked.has('low-income')) matchers.push((g) =>
    g.category === 'living' || g.title.includes('生活') || g.title.includes('非課税') || g.title.includes('給付金')
  );
  if (checked.has('job-seeking')) matchers.push((g) =>
    g.category === 'employment' || g.title.includes('求職') || g.title.includes('職業訓練') || g.title.includes('雇用')
  );
  if (checked.has('starting-business')) matchers.push((g) =>
    g.title.includes('創業') || g.title.includes('起業') || g.title.includes('事業') || g.title.includes('融資')
  );
  if (checked.has('employed')) matchers.push((g) =>
    g.title.includes('育児休業') || g.title.includes('傷病手当') || g.title.includes('雇用') || g.title.includes('介護休業')
  );
  if (checked.has('housing-purchase')) matchers.push((g) => g.category === 'housing');
  if (checked.has('medical-cost')) matchers.push((g) => g.category === 'medical');
  if (checked.has('education-cost')) matchers.push((g) => g.category === 'education');
  if (checked.has('nursing-care')) matchers.push((g) => g.category === 'nursing');
  if (checked.has('disaster-affected')) matchers.push((g) => g.category === 'disaster');
  if (checked.has('living-support')) matchers.push((g) => g.category === 'living');

  if (matchers.length === 0) return result;

  return result.filter((g) => matchers.some((matcher) => matcher(g)));
}

interface GrantFinderQuizProps {
  grants: GrantCardItem[];
  totalCount: number;
}

export default function GrantFinderQuiz({ grants, totalCount }: GrantFinderQuizProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [prefecture, setPrefecture] = useState<string | null>(null);
  const [showCount, setShowCount] = useState(20);

  const matched = useMemo(
    () => quizFilterGrants(grants, checked, prefecture),
    [grants, checked, prefecture]
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
      <section className="bg-card border-2 border-navy rounded-xl p-5 sm:p-7 shadow-sm">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-white font-black text-sm">
            ?
          </div>
          <h2 className="text-lg font-bold text-navy">あなたに合った助成金を診断</h2>
        </div>
        <p className="text-sm text-muted mb-5">
          当てはまる項目にチェックを入れると、利用できる可能性のある助成金がリアルタイムで絞り込まれます。
          まずは公式確認先を記載した主要制度（{grants.length}件 / 全{totalCount}件）を表示します。
        </p>

        {/* Prefecture */}
        <div className="mb-5">
          <label className="block text-sm font-bold text-navy mb-2">お住まいの地域</label>
          <select
            value={prefecture || ''}
            onChange={(e) => { setPrefecture(e.target.value || null); setShowCount(20); }}
            className="w-full sm:w-64 px-3 py-2.5 text-sm border-2 border-line-strong rounded-lg bg-base text-ink focus:border-navy focus:ring-2 focus:ring-accent focus:outline-none"
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
            <p className="text-sm font-bold text-navy mb-2">{group}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {QUIZ_OPTIONS.filter((o) => o.group === group).map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border-2 cursor-pointer transition-colors text-sm ${
                    checked.has(option.id)
                      ? 'bg-wash border-navy text-navy font-semibold'
                      : 'bg-card border-line text-muted hover:border-line-strong hover:bg-base'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked.has(option.id)}
                    onChange={() => toggle(option.id)}
                    className="w-4 h-4 rounded border-line-strong text-accent focus:ring-accent accent-[#e8702a]"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Result Counter */}
        <div className={`rounded-xl p-4 text-center transition-all ${
          hasAnyFilter ? 'bg-accent-wash border-2 border-accent' : 'bg-base border-2 border-line'
        }`}>
          <p className="text-sm text-muted mb-1">
            {hasAnyFilter ? 'あなたが利用できる可能性のある助成金' : '公式リンク記載の助成金'}
          </p>
          <p className={`text-3xl font-black ${hasAnyFilter ? 'text-accent-deep' : 'text-navy'}`}>
            {matched.length}<span className="text-lg font-semibold text-muted ml-1">件</span>
          </p>
          {hasAnyFilter && (
            <button
              onClick={() => { setChecked(new Set()); setPrefecture(null); setShowCount(20); }}
              className="mt-2 text-xs text-navy hover:text-accent-deep font-bold underline underline-offset-2"
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
        <div className="text-center py-12 bg-card border-2 border-line rounded-xl mt-6">
          <p className="text-ink text-base font-bold mb-1">該当する助成金が見つかりませんでした</p>
          <p className="text-muted text-sm mb-4">条件を変更するか、地域設定を「全国」に戻してお試しください。</p>
          <button
            onClick={() => { setChecked(new Set()); setPrefecture(null); setShowCount(20); }}
            className="text-sm text-navy hover:text-accent-deep font-bold underline underline-offset-2"
          >
            条件をリセットする
          </button>
        </div>
      )}

      {matched.length > showCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowCount((c) => c + 20)}
            className="px-8 py-3 text-sm font-bold text-white bg-navy border-2 border-navy rounded-full hover:bg-navy-soft transition-colors shadow-sm"
          >
            もっと見る（残り{matched.length - showCount}件）
          </button>
        </div>
      )}
    </div>
  );
}
