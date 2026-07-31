import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsEvents from '@/components/AnalyticsEvents';
import { siteConfig, isAdsenseVerificationEnabled } from '@/config/site';
import { buildWebsiteJsonLd } from '@/lib/website-jsonld';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '64x64', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    title: siteConfig.name,
  },
  category: 'public assistance search',
  verification: siteConfig.googleSiteVerification ? { google: siteConfig.googleSiteVerification } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {isAdsenseVerificationEnabled && (
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
            __html: JSON.stringify(buildWebsiteJsonLd({
              siteName: siteConfig.name,
              siteUrl: siteConfig.url,
              operatorName: siteConfig.operatorName,
            })),
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
