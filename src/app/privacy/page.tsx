import type { Metadata } from 'next';
import { AFFILIATE_OFFERS } from '@/config/affiliate-offers';
import { isAdsenseEnabled, siteConfig } from '@/config/site';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '助成金ナビにおける個人情報、アクセス解析、Cookie、外部サービスの取り扱いを説明します。',
  alternates: { canonical: toSiteUrl('/privacy/') },
};

const enabledAffiliateNetworks = [...new Set(
  AFFILIATE_OFFERS
    .filter((offer) => offer.enabled && offer.destinationUrl && offer.verifiedAt)
    .map((offer) => offer.network),
)];

export default function PrivacyPage() {
  const usesGa4 = Boolean(siteConfig.analytics.ga4MeasurementId);
  const usesVercelAnalytics = siteConfig.analytics.vercelAnalyticsEnabled;
  const usesAnalytics = usesGa4 || usesVercelAnalytics;
  const usesAdvertising = isAdsenseEnabled || enabledAffiliateNetworks.length > 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-black text-navy mb-8 pl-3 border-l-4 border-accent">プライバシーポリシー</h1>
      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6">
        <section>
          <h2 className="text-lg font-bold text-navy mb-2 pb-1 border-b-2 border-line">1. 取得する情報と利用目的</h2>
          {siteConfig.newsletter.endpoint ? (
            <p className="text-ink">新着情報メールへの登録時に、メールアドレスと任意で選択した地域を取得します。登録確認、支援制度の新着・更新情報の配信、配信停止対応のために利用します。</p>
          ) : (
            <p className="text-ink">現在、サイト上で新着情報メールの登録受付は有効化していません。お問い合わせ時に提供された情報は、内容の確認と返信のために利用します。</p>
          )}
        </section>

        {usesAnalytics && (
          <section>
            <h2 className="text-lg font-bold text-navy mb-2 pb-1 border-b-2 border-line">2. アクセス解析</h2>
            <p className="text-ink">サイトの利用状況を把握し、掲載内容や操作性を改善するため、次のアクセス解析サービスを利用しています。</p>
            <ul className="list-disc pl-6 text-ink">
              {usesGa4 && <li>Google Analytics 4</li>}
              {usesVercelAnalytics && <li>Vercel Web Analytics</li>}
            </ul>
            {siteConfig.privacy.cookieRetention && (
              <p className="text-ink">設定上の保存期間：{siteConfig.privacy.cookieRetention}</p>
            )}
          </section>
        )}

        {usesAdvertising && (
          <section>
            <h2 className="text-lg font-bold text-navy mb-2 pb-1 border-b-2 border-line">3. 広告・アフィリエイト</h2>
            {isAdsenseEnabled && <p className="text-ink">Google AdSenseを利用しています。広告配信に伴うデータの取り扱いは、Googleのポリシーをご確認ください。</p>}
            {enabledAffiliateNetworks.length > 0 && (
              <p className="text-ink">利用中のアフィリエイトサービス：{enabledAffiliateNetworks.join('、')}。PRリンク経由で申込みがあった場合、当サイトが紹介料を受け取ることがあります。</p>
            )}
          </section>
        )}

        <section>
          <h2 className="text-lg font-bold text-navy mb-2 pb-1 border-b-2 border-line">{usesAdvertising ? '4' : usesAnalytics ? '3' : '2'}. 外部サービスへの送信</h2>
          <p className="text-ink">上記サービスを有効にしている場合、閲覧したページ、端末・ブラウザに関する情報、Cookie等の識別子が各サービス提供者へ送信されることがあります。メールアドレス、氏名、世帯年収、職業をアクセス解析イベントへ送信しない設計とします。</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2 pb-1 border-b-2 border-line">お問い合わせ</h2>
          <p className="text-ink">本方針や情報の取り扱いに関するご連絡は、<a href="/contact/" className="text-navy font-medium underline underline-offset-2 hover:text-accent-deep">お問い合わせページ</a>をご利用ください。</p>
        </section>

        {siteConfig.privacy.policyUpdatedAt && (
          <p className="text-faint text-xs mt-8">最終更新日：{siteConfig.privacy.policyUpdatedAt}</p>
        )}
      </div>
    </div>
  );
}
