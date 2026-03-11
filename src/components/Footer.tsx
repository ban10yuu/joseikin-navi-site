import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';

const categories = Object.entries(CATEGORY_LABELS);

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-blue-700 flex items-center justify-center text-white font-bold text-xs">助</div>
              <span className="text-base font-bold text-white">助成金ナビ</span>
            </Link>
            <p className="text-sm leading-relaxed">
              国・自治体・民間団体の助成金・補助金情報を掲載。あなたに合った支援制度が見つかるサイトです。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">カテゴリ</h3>
            <ul className="space-y-1">
              {categories.map(([key, label]) => (
                <li key={key}>
                  <Link href={`/category/${key}/`} className="text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">主要地域</h3>
            <ul className="space-y-1">
              {['北海道', '東京都', '神奈川県', '愛知県', '大阪府', '京都府', '兵庫県', '福岡県', '沖縄県'].map((pref) => (
                <li key={pref}>
                  <Link href={`/prefecture/${encodeURIComponent(pref)}/`} className="text-sm hover:text-white transition-colors">
                    {pref}の助成金
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-2 mt-4 text-sm">サイト情報</h3>
            <ul className="space-y-1">
              <li><Link href="/grants/" className="text-sm hover:text-white transition-colors">助成金一覧</Link></li>
              <li><Link href="/guide/" className="text-sm hover:text-white transition-colors">申請ガイド</Link></li>
              <li><Link href="/faq/" className="text-sm hover:text-white transition-colors">よくある質問</Link></li>
              <li><Link href="/subscribe/" className="text-sm hover:text-white transition-colors">メール登録</Link></li>
              <li><Link href="/privacy/" className="text-sm hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/contact/" className="text-sm hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        {/* 関連サイト */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <h3 className="text-white font-semibold mb-2 text-sm">関連サイト</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-6">
            <a href="https://manga-matome-site.vercel.app" target="_blank" rel="noopener" className="text-sm text-gray-400 hover:text-white transition-colors">マンガ考察ラボ</a>
            <a href="https://anime-review-site.vercel.app" target="_blank" rel="noopener" className="text-sm text-gray-400 hover:text-white transition-colors">Anime Review Lab</a>
            <a href="https://ai-tools-site-dusky.vercel.app" target="_blank" rel="noopener" className="text-sm text-gray-400 hover:text-white transition-colors">AIツールラボ</a>
            <a href="https://vod-navi-site.vercel.app" target="_blank" rel="noopener" className="text-sm text-gray-400 hover:text-white transition-colors">動画配信ナビ</a>
            <a href="https://fukusen-lab.vercel.app" target="_blank" rel="noopener" className="text-sm text-gray-400 hover:text-white transition-colors">伏線回収ラボ</a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 助成金ナビ</p>
          <p className="mt-1">※当サイトの情報は一般的な情報提供を目的としており、個別の申請に関する助言ではありません。最新情報は各公式サイトをご確認ください。</p>
        </div>
      </div>
    </footer>
  );
}
