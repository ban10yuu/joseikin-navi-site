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
      <h1 className="text-2xl font-black text-slate-800 mb-8">お問い合わせ</h1>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <p className="text-slate-600 mb-6 leading-relaxed">
          助成金ナビに関するご質問・ご要望・掲載情報の修正依頼・広告掲載のお問い合わせ等は、以下のメールアドレスまでお気軽にご連絡ください。
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 text-center mb-6">
          <p className="text-sm text-slate-500 mb-2">メールアドレス</p>
          <a href="mailto:ban10yuu@icloud.com" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            ban10yuu@icloud.com
          </a>
        </div>

        <div className="text-sm text-slate-500 space-y-2">
          <p>※ 通常2〜3営業日以内にご返信いたします。</p>
          <p>※ 個別の助成金申請に関するご相談は、各自治体・担当窓口にお問い合わせください。</p>
          <p>※ 掲載情報に誤りがございましたら、お手数ですがご連絡ください。速やかに修正いたします。</p>
        </div>
      </div>
    </div>
  );
}
