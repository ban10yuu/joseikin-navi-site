import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';

const categories = Object.entries(CATEGORY_LABELS);

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center text-white font-black text-xs">
                助
              </div>
              <span className="text-lg font-bold text-white">助成金ナビ</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              国・自治体・民間団体の助成金・補助金情報を網羅的に掲載。あなたに合った支援制度が見つかるナビゲーションサイトです。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">カテゴリ</h3>
            <ul className="space-y-2">
              {categories.map(([key, label]) => (
                <li key={key}>
                  <Link href={`/category/${key}/`} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">サイト情報</h3>
            <ul className="space-y-2">
              <li><Link href="/subscribe/" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">無料メール登録</Link></li>
              <li><Link href="/privacy/" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/contact/" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">あなたに合った助成金を探す</h3>
            <p className="text-sm text-slate-400 mb-4">世帯年収・地域・職業から、受給可能な助成金を無料で診断します。</p>
            <Link href="/subscribe/" className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full hover:shadow-lg transition-all">
              無料診断を受ける
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} 助成金ナビ All rights reserved.</p>
          <p className="text-xs text-slate-500">
            ※当サイトの情報は一般的な情報提供を目的としており、個別の申請に関する助言ではありません。最新情報は各公式サイトをご確認ください。
          </p>
        </div>
      </div>
    </footer>
  );
}
