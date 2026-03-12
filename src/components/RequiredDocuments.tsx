'use client';

import { useState } from 'react';

interface Props {
  documents: string[];
  officialUrl: string;
}

export default function RequiredDocuments({ documents, officialUrl }: Props) {
  const [checkedDocs, setCheckedDocs] = useState<Set<number>>(new Set());

  const toggleDoc = (index: number) => {
    setCheckedDocs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const allChecked = checkedDocs.size === documents.length;
  const progress = documents.length > 0 ? Math.round((checkedDocs.size / documents.length) * 100) : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 my-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-gray-900">申請に必要な書類チェックリスト</h3>
        <span className="text-xs font-medium text-gray-400">
          {checkedDocs.size}/{documents.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            backgroundColor: allChecked ? '#059669' : '#1d4ed8',
          }}
        />
      </div>

      <ul className="space-y-2 mb-5">
        {documents.map((doc, i) => (
          <li key={i}>
            <label className={`flex items-start gap-3 px-3 py-2.5 rounded border cursor-pointer transition-colors text-sm ${
              checkedDocs.has(i)
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}>
              <input
                type="checkbox"
                checked={checkedDocs.has(i)}
                onChange={() => toggleDoc(i)}
                className="w-4 h-4 mt-0.5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 flex-shrink-0"
              />
              <span className={checkedDocs.has(i) ? 'line-through text-emerald-600' : ''}>
                {doc}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {allChecked && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4 text-center">
          <p className="text-sm font-semibold text-emerald-700">
            全ての書類が揃いました！下のボタンから申請に進みましょう。
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        {officialUrl ? (
          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 px-5 py-3 text-sm font-semibold text-white bg-[#1d4ed8] rounded hover:bg-blue-800 transition-colors text-center"
          >
            公式サイトで申請する
          </a>
        ) : (
          <div className="flex-1 px-5 py-3 text-sm font-medium text-gray-600 bg-gray-100 rounded text-center">
            お住まいの市区町村にお問い合わせください
          </div>
        )}
        <button
          onClick={() => setCheckedDocs(new Set())}
          className="px-4 py-3 text-sm font-medium text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
        >
          リセット
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        ※上記は一般的な必要書類の目安です。実際に必要な書類は公式サイトや窓口でご確認ください。
      </p>
    </div>
  );
}
