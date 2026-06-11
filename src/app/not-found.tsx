import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-wash border-2 border-navy flex items-center justify-center">
        <span className="text-2xl font-black text-navy">404</span>
      </div>
      <h1 className="text-2xl font-black text-navy mb-3">ページが見つかりません</h1>
      <p className="text-muted mb-8">お探しのページは移動または削除された可能性があります。</p>
      <Link href="/" className="inline-block px-7 py-3 text-sm font-bold text-white bg-accent rounded-lg hover:bg-accent-deep transition-colors shadow-sm">
        ホームに戻る
      </Link>
    </div>
  );
}
