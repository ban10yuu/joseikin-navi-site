import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';

const categories = Object.entries(CATEGORY_LABELS);

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-blue-700 flex items-center justify-center text-white font-bold text-[10px]">助</div>
              <span className="text-sm font-bold text-white">助成金ナビ</span>
            </Link>
            <p className="text-xs leading-relaxed">
              国・自治体・民間の助成金・補助金情報を掲載。あなたに合った支援制度が見つかるサイトです。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">カテゴリ</h3>
            <ul className="space-y-0.5">
              {categories.map(([key, label]) => (
                <li key={key}>
                  <Link href={`/category/${key}/`} className="text-xs hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">サイト情報</h3>
            <ul className="space-y-0.5">
              <li><Link href="/grants/" className="text-xs hover:text-white transition-colors">助成金一覧</Link></li>
              <li><Link href="/guide/" className="text-xs hover:text-white transition-colors">申請ガイド</Link></li>
              <li><Link href="/faq/" className="text-xs hover:text-white transition-colors">よくある質問</Link></li>
              <li><Link href="/subscribe/" className="text-xs hover:text-white transition-colors">メール登録</Link></li>
              <li><Link href="/privacy/" className="text-xs hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/contact/" className="text-xs hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>

            {/* 関連サイト */}
            <h3 className="text-white font-semibold mb-1.5 mt-4 text-sm">関連サイト</h3>
            <div className="flex flex-col gap-0.5">
              <a href="https://manga-matome-site.vercel.app" target="_blank" rel="noopener" className="text-xs hover:text-white transition-colors">マンガ考察ラボ</a>
              <a href="https://vod-navi-site.vercel.app" target="_blank" rel="noopener" className="text-xs hover:text-white transition-colors">動画配信ナビ</a>
              <a href="https://fukusen-lab.vercel.app" target="_blank" rel="noopener" className="text-xs hover:text-white transition-colors">伏線回収ラボ</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-[11px] text-gray-500">
          <p>&copy; {new Date().getFullYear()} 助成金ナビ</p>
          <p className="mt-0.5">※当サイトの情報は一般的な情報提供を目的としており、個別の申請に関する助言ではありません。最新情報は各公式サイトをご確認ください。</p>
        </div>
      </div>
    </footer>
  );
}
