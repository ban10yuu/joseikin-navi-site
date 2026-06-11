import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';

const categories = Object.entries(CATEGORY_LABELS);

const footerLink = 'text-xs text-white/65 hover:text-white hover:underline underline-offset-2 transition-colors';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/65 mt-16 border-t-4 border-accent">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-3 rounded-md">
              <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-white font-black text-xs">助</div>
              <span className="text-base font-black text-white tracking-wide">助成金ナビ</span>
            </Link>
            <p className="text-xs leading-relaxed text-white/65">
              国・自治体・民間の助成金・補助金情報を掲載。あなたに合った支援制度が見つかるサイトです。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 text-sm border-b border-white/15 pb-1.5">カテゴリ</h3>
            <ul className="space-y-1.5">
              {categories.map(([key, label]) => (
                <li key={key}>
                  <Link href={`/category/${key}/`} className={footerLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 text-sm border-b border-white/15 pb-1.5">サイト情報</h3>
            <ul className="space-y-1.5">
              <li><Link href="/grants/" className={footerLink}>助成金一覧</Link></li>
              <li><Link href="/guide/" className={footerLink}>申請ガイド</Link></li>
              <li><Link href="/faq/" className={footerLink}>よくある質問</Link></li>
              <li><Link href="/subscribe/" className={footerLink}>メール登録</Link></li>
              <li><Link href="/privacy/" className={footerLink}>プライバシーポリシー</Link></li>
              <li><Link href="/contact/" className={footerLink}>お問い合わせ</Link></li>
            </ul>

            {/* 関連サイト */}
            <h3 className="text-white font-bold mb-2 mt-5 text-sm border-b border-white/15 pb-1.5">関連サイト</h3>
            <div className="flex flex-col gap-1.5">
              <a href="https://manga-matome-site.vercel.app" target="_blank" rel="noopener" className={footerLink}>マンガ考察ラボ</a>
              <a href="https://vod-navi-site.vercel.app" target="_blank" rel="noopener" className={footerLink}>動画配信ナビ</a>
              <a href="https://fukusen-lab.vercel.app" target="_blank" rel="noopener" className={footerLink}>伏線回収ラボ</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-5 text-[11px] text-white/50">
          <p>&copy; {new Date().getFullYear()} 助成金ナビ</p>
          <p className="mt-1 leading-relaxed">※当サイトの情報は一般的な情報提供を目的としており、個別の申請に関する助言ではありません。最新情報は各公式サイトをご確認ください。</p>
        </div>
      </div>
    </footer>
  );
}
