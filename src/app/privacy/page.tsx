import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '助成金ナビのプライバシーポリシー。個人情報の取り扱い、Cookie、Google Analytics、Google AdSenseについて。',
  alternates: {
    canonical: 'https://joseikin-navi-site.vercel.app/privacy/',
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-black text-slate-800 mb-8">プライバシーポリシー</h1>
      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6">
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-2">1. 個人情報の収集と利用</h2>
          <p className="text-slate-600">当サイト「助成金ナビ」（以下「当サイト」）では、メール登録フォームにおいてメールアドレス、お住まいの地域、世帯年収、ご職業の情報をご提供いただく場合があります。これらの情報は、パーソナライズされた助成金情報の配信にのみ使用いたします。</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-2">2. アクセス解析ツール</h2>
          <p className="text-slate-600">当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsはデータの収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p className="text-slate-600">この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。Google Analyticsの利用規約については、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics利用規約</a>をご覧ください。</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-2">3. 広告について</h2>
          <p className="text-slate-600">当サイトでは、第三者配信の広告サービス「Google AdSense」を利用しています。広告配信事業者はユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。Cookieを無効にする設定およびGoogleアドセンスに関する詳細については、<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">広告ポリシー</a>をご覧ください。</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-2">4. アフィリエイトについて</h2>
          <p className="text-slate-600">当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。また、その他のASP（A8.net、もしもアフィリエイト、バリューコマース等）のアフィリエイトプログラムにも参加しています。</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-2">5. 免責事項</h2>
          <p className="text-slate-600">当サイトに掲載された助成金・補助金の情報は、一般的な情報提供を目的としたものであり、個別の申請に関する助言や保証を行うものではありません。情報の正確性には万全を期しておりますが、最新の申請条件・受給額・必要書類等は各公式サイトでご確認ください。当サイトの情報に基づいて行われた行為について、当サイトは一切の責任を負いません。</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-2">6. お問い合わせ</h2>
          <p className="text-slate-600">プライバシーポリシーに関するお問い合わせは、<a href="/contact/" className="text-blue-600 hover:underline">お問い合わせページ</a>よりご連絡ください。</p>
        </section>

        <p className="text-slate-400 text-xs mt-8">制定日: 2026年3月11日</p>
      </div>
    </div>
  );
}
