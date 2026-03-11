import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://joseikin-navi-site.vercel.app'),
  title: {
    default: '助成金ナビ｜国・自治体・民間の助成金・補助金を完全網羅【2026年最新版】',
    template: '%s｜助成金ナビ',
  },
  description:
    '国・都道府県・市区町村・NPO/民間団体の助成金・補助金・給付金を230件以上網羅。子育て・住宅・医療・教育・就職・介護・生活支援・災害など全カテゴリを掲載。世帯年収・地域・職業から受給可能な助成金を無料診断。申請方法・必要書類・受給額まで徹底解説。',
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
    siteName: '助成金ナビ',
    title: '助成金ナビ｜国・自治体・民間の助成金・補助金を完全網羅',
    description: '助成金・補助金・給付金を230件以上網羅。あなたに合った支援制度を無料診断。',
    url: 'https://joseikin-navi-site.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: '助成金ナビ',
    description: '国・自治体・民間の助成金・補助金を完全網羅。無料診断であなたに合った支援制度が見つかる。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://joseikin-navi-site.vercel.app',
  },
  verification: {
    google: 'QNT_EwkmJ039_aVzqr1sKc_hySyn-ZpgLZDtAgxtsNo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1611624572831066" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1611624572831066"
          crossOrigin="anonymous"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V11MKY0X3F" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-V11MKY0X3F');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '助成金ナビ',
              alternateName: 'Joseikin Navi',
              url: 'https://joseikin-navi-site.vercel.app',
              description: '国・自治体・民間団体の助成金・補助金情報を網羅的に掲載するナビゲーションサイト',
              publisher: {
                '@type': 'Organization',
                name: '助成金ナビ',
                url: 'https://joseikin-navi-site.vercel.app',
              },
              inLanguage: 'ja',
            }),
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${notoSansJP.className} antialiased min-h-screen flex flex-col`}>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
