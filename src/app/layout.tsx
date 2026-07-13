import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, isAdsenseEnabled } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: '助成金ナビ｜全ページ公式リンク記載の助成金・補助金検索【2026年版】',
    template: '%s｜助成金ナビ',
  },
  description:
    '国・都道府県・市区町村・NPO/民間団体の助成金・補助金・給付金を、各制度ページの公式リンク記載とあわせて検索できます。子育て・住宅・医療・教育・就職・介護・生活支援・災害などのカテゴリから、申請前に確認すべき公式情報へ誘導します。',
  keywords: [
    '助成金', '補助金', '給付金', '助成金 一覧', '補助金 一覧', '給付金 一覧',
    '助成金 2026', '補助金 2026', '助成金 最新', '補助金 最新',
    '助成金 申請', '補助金 申請方法', '助成金 まとめ', '補助金 まとめ',
    '助成金 検索', '補助金 検索', '助成金 診断',
    'もらえるお金', 'もらえるお金 一覧', '国からもらえるお金',
    '知らないと損する助成金', '知らないと損する補助金',
    '子育て 助成金', '出産 助成金', '出産 給付金', '児童手当',
    '出産育児一時金', '育児休業給付金', '児童扶養手当',
    '住宅 補助金', '住宅 助成金', 'リフォーム 補助金',
    '住居確保給付金', 'すまい給付金', 'ZEH 補助金',
    '医療費 助成', '高額療養費', '難病 助成金',
    '教育 助成金', '奨学金', '教育訓練給付金',
    '起業 助成金', '創業 補助金', 'IT導入補助金',
    '小規模事業者持続化補助金', 'ものづくり補助金',
    '介護 助成金', '介護休業給付金',
    '生活保護', '生活福祉資金', '災害 支援金',
    '東京都 助成金', '大阪府 補助金', '北海道 助成金',
    '自治体 助成金', '都道府県 助成金', '移住 支援金',
    '個人 助成金', '中小企業 補助金', 'フリーランス 助成金',
    'NPO 助成金', '財団 助成金', '民間 助成金',
    '助成金 もらい方', '補助金 条件', '助成金 おすすめ',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: siteConfig.name,
    title: '助成金ナビ｜全ページ公式リンク記載の助成金・補助金検索',
    description: '助成金・補助金・給付金を公式確認先とあわせて探せる無料検索サイト。',
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: '助成金ナビ',
    description: '国・自治体・民間の助成金・補助金を公式確認先とあわせて探せる無料検索サイト。',
  },
  robots: {
    index: siteConfig.indexable,
    follow: siteConfig.indexable,
    googleBot: {
      index: siteConfig.indexable,
      follow: siteConfig.indexable,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'QNT_EwkmJ039_aVzqr1sKc_hySyn-ZpgLZDtAgxtsNo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {isAdsenseEnabled && (
          <>
            <meta name="google-adsense-account" content={siteConfig.adsense.clientId ?? undefined} />
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsense.clientId}`}
              crossOrigin="anonymous"
            />
          </>
        )}
        {siteConfig.analytics.ga4MeasurementId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.ga4MeasurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(siteConfig.analytics.ga4MeasurementId)});`,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteConfig.name,
              alternateName: 'Joseikin Navi',
              url: siteConfig.url,
              description: '国・自治体・民間団体の助成金・補助金情報を公式リンク記載ページとして掲載するナビゲーションサイト',
              ...(siteConfig.operatorName ? {
                publisher: {
                  '@type': 'Organization',
                  name: siteConfig.operatorName,
                  url: siteConfig.url,
                },
              } : {}),
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${siteConfig.url}/grants/?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
              inLanguage: 'ja',
            }),
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-base text-ink">
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {siteConfig.analytics.vercelAnalyticsEnabled && <Analytics />}
      </body>
    </html>
  );
}
