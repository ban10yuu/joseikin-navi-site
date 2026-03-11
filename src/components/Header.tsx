'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';

const categories = Object.entries(CATEGORY_LABELS);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:shadow-lg transition-shadow">
              助
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800">助成金ナビ</span>
              <span className="hidden sm:inline text-xs text-slate-400 ml-1">Joseikin Navi</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              ホーム
            </Link>
            <div className="relative" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
              <button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1">
                カテゴリ
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showCategories && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                  {categories.map(([key, label]) => (
                    <Link key={key} href={`/category/${key}/`} className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/subscribe/" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              メール登録
            </Link>
            <Link href="/subscribe/" className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full hover:shadow-lg transition-all hover:scale-105">
              無料診断
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" aria-label="メニュー">
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
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 font-medium">
              ホーム
            </Link>
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase">カテゴリ</div>
            {categories.map(([key, label]) => (
              <Link key={key} href={`/category/${key}/`} onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600">
                {label}
              </Link>
            ))}
            <Link href="/subscribe/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 font-medium">
              メール登録
            </Link>
            <Link href="/subscribe/" onClick={() => setIsOpen(false)} className="block mx-3 mt-2 px-4 py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full">
              無料診断を受ける
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
