'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';

const categories = Object.entries(CATEGORY_LABELS);

const REGIONS: Record<string, string[]> = {
  '北海道・東北': ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
  '関東': ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
  '中部': ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県'],
  '近畿': ['滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
  '中国・四国': ['鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県'],
  '九州・沖縄': ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showRegions, setShowRegions] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#1d4ed8] flex items-center justify-center text-white font-bold text-sm">
              助
            </div>
            <span className="text-base font-bold text-gray-900">助成金ナビ</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            <Link href="/" className="px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors">
              ホーム
            </Link>
            <div className="relative" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
              <button className="px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors flex items-center gap-1">
                カテゴリ
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showCategories && (
                <div className="absolute top-full left-0 mt-0.5 w-52 bg-white shadow-lg border border-gray-200 py-1 z-50">
                  {categories.map(([key, label]) => (
                    <Link key={key} href={`/category/${key}/`} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-700">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setShowRegions(true)} onMouseLeave={() => setShowRegions(false)}>
              <button className="px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors flex items-center gap-1">
                地域から探す
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showRegions && (
                <div className="absolute top-full right-0 mt-0.5 w-[480px] bg-white shadow-lg border border-gray-200 p-4 z-50">
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(REGIONS).map(([region, prefs]) => (
                      <div key={region}>
                        <p className="text-xs font-semibold text-gray-400 mb-1">{region}</p>
                        <div className="flex flex-wrap gap-1">
                          {prefs.map((pref) => (
                            <Link
                              key={pref}
                              href={`/prefecture/${encodeURIComponent(pref)}/`}
                              className="text-xs text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-1.5 py-0.5 rounded transition-colors"
                            >
                              {pref.replace(/[都府県]$/, '')}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/subscribe/" className="px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors">
              メール登録
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-500 hover:bg-gray-50 rounded" aria-label="メニュー">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
              ホーム
            </Link>
            <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 mt-1">カテゴリ</p>
            {categories.map(([key, label]) => (
              <Link key={key} href={`/category/${key}/`} onClick={() => setIsOpen(false)} className="block px-6 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
                {label}
              </Link>
            ))}
            <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 mt-2">地域から探す</p>
            {Object.entries(REGIONS).map(([region, prefs]) => (
              <div key={region} className="mb-1">
                <p className="px-6 py-1 text-xs text-gray-400">{region}</p>
                <div className="flex flex-wrap gap-1 px-6 pb-1">
                  {prefs.map((pref) => (
                    <Link
                      key={pref}
                      href={`/prefecture/${encodeURIComponent(pref)}/`}
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-gray-600 hover:text-blue-700 px-1.5 py-0.5 rounded bg-gray-50"
                    >
                      {pref.replace(/[都府県]$/, '')}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/subscribe/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded mt-1">
              メール登録
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
