import { sidebarAffiliates, MOSHIMO_IMPRESSION_URL } from '@/data/affiliates';

export default function AffiliateWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-blue-600">&#9654;</span>
        おすすめ書籍
      </h3>
      <div className="space-y-2.5">
        {sidebarAffiliates.map(af => (
          <a
            key={af.title}
            href={af.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block rounded-lg border border-gray-100 p-3 hover:bg-gray-50 hover:border-gray-200 transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                {af.title}
              </span>
              {af.badge && (
                <span
                  className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: af.color }}
                >
                  {af.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{af.description}</p>
          </a>
        ))}
      </div>
      <p className="text-[9px] text-gray-400 mt-3 text-center">
        ※ 当サイトはアフィリエイトプログラムに参加しています
      </p>
      {/* もしもアフィリエイト インプレッショントラッキング */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={MOSHIMO_IMPRESSION_URL} width={1} height={1} style={{ border: 'none' }} alt="" loading="lazy" />
    </div>
  );
}
