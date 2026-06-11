import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '助成金ナビへのお問い合わせページです。ご質問・ご要望・掲載情報の修正依頼等はこちらからご連絡ください。',
  alternates: {
    canonical: 'https://joseikin-navi-site.vercel.app/contact/',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-black text-navy mb-8 pl-3 border-l-4 border-accent">お問い合わせ</h1>
      <div className="bg-card rounded-xl border-2 border-navy p-6 sm:p-8 shadow-sm">
        <p className="text-ink mb-6 leading-relaxed">
          助成金ナビに関するご質問・ご要望・掲載情報の修正依頼・広告掲載のお問い合わせ等は、以下のメールアドレスまでお気軽にご連絡ください。
        </p>

        <div className="bg-wash border-[1.5px] border-line-strong rounded-xl p-6 text-center mb-6">
          <p className="text-sm text-muted mb-2">メールアドレス</p>
          <a href="mailto:ban10yuu@icloud.com" className="text-xl font-bold text-navy underline underline-offset-4 hover:text-accent-deep transition-colors">
            ban10yuu@icloud.com
          </a>
        </div>

        <div className="text-sm text-muted space-y-2">
          <p>※ 通常2〜3営業日以内にご返信いたします。</p>
          <p>※ 個別の助成金申請に関するご相談は、各自治体・担当窓口にお問い合わせください。</p>
          <p>※ 掲載情報に誤りがございましたら、お手数ですがご連絡ください。速やかに修正いたします。</p>
        </div>
      </div>
    </div>
  );
}
