import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsEvents from '@/components/AnalyticsEvents';
import { siteConfig, isAdsenseEnabled } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: '助成金ナビ｜地域と目的から支援制度を探す',
    template: '%s｜助成金ナビ',
  },
  description:
    '国・自治体・民間団体の公式情報をもとに、対象、支援内容、申請期限、確認先を整理。地域、対象者、目的、制度種別から支援制度を探せます。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: siteConfig.name,
    title: '助成金ナビ｜地域と目的から支援制度を探す',
    description: '公式情報をもとに整理した支援制度を、地域、対象者、目的から探せます。',
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: '助成金ナビ',
    description: '公式情報をもとに整理した支援制度を、地域、対象者、目的から探せます。',
  },
  robots: {
    index: siteConfig.indexable,
    follow: true,
    googleBot: {
      index: siteConfig.indexable,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: siteConfig.googleSiteVerification ? { google: siteConfig.googleSiteVerification } : undefined,
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
      <body className="antialiased min-h-screen flex flex-col bg-surface text-ink">
        {siteConfig.analytics.ga4MeasurementId && <AnalyticsEvents />}
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
