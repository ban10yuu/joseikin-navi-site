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

const navLink =
  'px-3 py-2 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 rounded-md transition-colors';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showRegions, setShowRegions] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy border-b-4 border-accent shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 rounded-md">
            <div className="w-9 h-9 rounded-md bg-accent flex items-center justify-center text-white font-black text-base shadow-sm">
              助
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-black text-white tracking-wide">助成金ナビ</span>
              <span className="hidden sm:block text-[10px] text-white/60 tracking-widest">国・自治体・民間の支援制度ガイド</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="メインメニュー" className="hidden md:flex items-center gap-0.5">
            <div className="relative" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
              <button
                type="button"
                className={`${navLink} flex items-center gap-1`}
                aria-expanded={showCategories}
                aria-haspopup="true"
                aria-controls="header-category-menu"
                onClick={() => {
                  setShowCategories((current) => !current);
                  setShowRegions(false);
                }}
              >
                カテゴリ
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showCategories && (
                <div id="header-category-menu" className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-xl border-2 border-navy py-1.5 z-50 overflow-hidden">
                  {categories.map(([key, label]) => (
                    <Link key={key} href={`/category/${key}/`} onClick={() => setShowCategories(false)} className="block px-4 py-2 text-sm font-medium text-ink hover:bg-wash hover:text-navy border-l-4 border-transparent hover:border-accent transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setShowRegions(true)} onMouseLeave={() => setShowRegions(false)}>
              <button
                type="button"
                className={`${navLink} flex items-center gap-1`}
                aria-expanded={showRegions}
                aria-haspopup="true"
                aria-controls="header-region-menu"
                onClick={() => {
                  setShowRegions((current) => !current);
                  setShowCategories(false);
                }}
              >
                地域から探す
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showRegions && (
                <div id="header-region-menu" className="absolute top-full right-0 mt-1 w-[480px] bg-card rounded-lg shadow-xl border-2 border-navy p-4 z-50">
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(REGIONS).map(([region, prefs]) => (
                      <div key={region}>
                        <p className="text-xs font-bold text-navy border-b border-line pb-0.5 mb-1.5">{region}</p>
                        <div className="flex flex-wrap gap-1">
                          {prefs.map((pref) => (
                            <Link
                              key={pref}
                              href={`/prefecture/${encodeURIComponent(pref)}/`}
                              onClick={() => setShowRegions(false)}
                              className="text-xs font-medium text-muted hover:text-white hover:bg-navy px-1.5 py-0.5 rounded transition-colors"
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
            <Link href="/grants/" className={navLink}>
              一覧
            </Link>
            <Link href="/guide/" className={navLink}>
              申請ガイド
            </Link>
            <Link
              href="/#home-search-title"
              className="ml-2 px-4 py-2 text-sm font-bold text-white bg-accent hover:bg-accent-deep rounded-md transition-colors shadow-sm"
            >
              制度を探す
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden min-w-11 min-h-11 p-2 text-white hover:bg-white/10 rounded-md" aria-label="メニュー" aria-expanded={isOpen}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="md:hidden border-t border-white/15 bg-navy-deep max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10 rounded-md">
              ホーム
            </Link>
            <p className="px-3 py-1.5 text-xs font-bold text-accent mt-1 tracking-wider">カテゴリ</p>
            {categories.map(([key, label]) => (
              <Link key={key} href={`/category/${key}/`} onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white rounded-md">
                {label}
              </Link>
            ))}
            <p className="px-3 py-1.5 text-xs font-bold text-accent mt-2 tracking-wider">地域から探す</p>
            {Object.entries(REGIONS).map(([region, prefs]) => (
              <div key={region} className="mb-1.5">
                <p className="px-6 py-1 text-xs text-white/50">{region}</p>
                <div className="flex flex-wrap gap-1.5 px-6 pb-1">
                  {prefs.map((pref) => (
                    <Link
                      key={pref}
                      href={`/prefecture/${encodeURIComponent(pref)}/`}
                      onClick={() => setIsOpen(false)}
                      className="text-xs font-medium text-white/85 hover:text-white px-2 py-1 rounded-full border border-white/25 hover:border-accent hover:bg-white/10"
                    >
                      {pref.replace(/[都府県]$/, '')}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/grants/" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10 rounded-md mt-2">
              助成金一覧
            </Link>
            <Link href="/guide/" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10 rounded-md">
              申請ガイド
            </Link>
            <Link href="/faq/" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10 rounded-md">
              よくある質問
            </Link>
            <Link href="/#home-search-title" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 mt-2 text-sm font-bold text-white bg-accent hover:bg-accent-deep rounded-md text-center">
              条件から制度を探す
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
