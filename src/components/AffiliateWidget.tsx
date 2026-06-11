import { sidebarAffiliates, MOSHIMO_IMPRESSION_URL } from '@/data/affiliates';

export default function AffiliateWidget() {
  return (
    <div className="bg-card border-[1.5px] border-line rounded-xl p-4">
      <h3 className="text-sm font-bold text-navy mb-3 pb-2 border-b-2 border-accent flex items-center gap-2">
        <span className="text-accent">&#9654;</span>
        おすすめ書籍
      </h3>
      <div className="space-y-2.5">
        {sidebarAffiliates.map(af => (
          <a
            key={af.title}
            href={af.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block rounded-lg border border-line p-3 hover:bg-base hover:border-navy transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-ink group-hover:text-navy transition-colors">
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
            <p className="text-xs text-muted leading-relaxed">{af.description}</p>
          </a>
        ))}
      </div>
      <p className="text-[9px] text-faint mt-3 text-center">
        ※ 当サイトはアフィリエイトプログラムに参加しています
      </p>
      {/* もしもアフィリエイト インプレッショントラッキング */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={MOSHIMO_IMPRESSION_URL} width={1} height={1} style={{ border: 'none' }} alt="" loading="lazy" />
    </div>
  );
}
