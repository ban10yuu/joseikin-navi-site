import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
        <span className="text-3xl font-black text-blue-600">404</span>
      </div>
      <h1 className="text-2xl font-black text-slate-800 mb-3">ページが見つかりません</h1>
      <p className="text-slate-500 mb-8">お探しのページは移動または削除された可能性があります。</p>
      <Link href="/" className="inline-block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full hover:shadow-lg transition-all">
        ホームに戻る
      </Link>
    </div>
  );
}
