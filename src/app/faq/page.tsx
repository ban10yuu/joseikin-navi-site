import type { Metadata } from 'next';
import Link from 'next/link';
import GoogleAd from '@/components/GoogleAd';

export const metadata: Metadata = {
  title: 'よくある質問（FAQ）｜助成金・補助金の申請に関する疑問を解決',
  description:
    '助成金・補助金・給付金に関するよくある質問をまとめました。申請方法、必要書類、受給条件、審査期間など、初めての方でも分かりやすく解説します。',
  alternates: { canonical: 'https://joseikin-navi-site.vercel.app/faq/' },
};

const faqs = [
  {
    q: '助成金・補助金・給付金の違いは何ですか？',
    a: '「助成金」は主に厚生労働省関連で、要件を満たせばほぼ確実に受給できるものが多いです。「補助金」は経済産業省関連が多く、審査があり採択率が限られます。「給付金」は条件を満たせば自動的に支給されるものを指すことが一般的です。いずれも返済不要のお金である点は共通しています。',
  },
  {
    q: '助成金の申請に費用はかかりますか？',
    a: '国や自治体の助成金・補助金の申請自体は無料です。ただし、申請に必要な書類（住民票、所得証明書など）の取得に数百円程度の手数料がかかる場合があります。社会保険労務士やコンサルタントに申請代行を依頼する場合は別途費用が発生します。',
  },
  {
    q: '助成金はどのくらいで受給できますか？',
    a: '制度によって異なりますが、一般的に申請から受給まで1〜3ヶ月程度かかります。児童手当のように毎月支給されるもの、出産育児一時金のように一括で支給されるもの、補助金のように事業完了後に支給されるものなど、支給タイミングは様々です。',
  },
  {
    q: '複数の助成金を同時に受給できますか？',
    a: 'はい、多くの場合は複数の助成金を同時に受給できます。例えば、児童手当と出産育児一時金は同時に受給可能です。ただし、同じ目的・同じ経費に対して複数の補助金を重複して受給することは「二重取り」となり認められないケースがあります。各制度の併給制限を確認しましょう。',
  },
  {
    q: '所得制限がある助成金はどう判断すればいいですか？',
    a: '所得制限は一般的に「前年の所得」または「前年の収入」で判断されます。「所得」と「収入」は異なる概念で、収入から経費や控除を引いたものが所得です。源泉徴収票や確定申告書で確認できます。世帯の所得で判断される場合と、申請者個人の所得で判断される場合があるため、各制度の要件を確認してください。',
  },
  {
    q: '申請に必要な書類は何ですか？',
    a: '制度によって異なりますが、共通して必要になることが多い書類は「本人確認書類（マイナンバーカードなど）」「住民票」「所得証明書（課税証明書）」「振込先口座の通帳コピー」です。当サイトでは各助成金の詳細ページに必要書類チェックリストを掲載していますので、ご活用ください。',
  },
  {
    q: '申請期限を過ぎてしまった場合はどうなりますか？',
    a: '原則として、申請期限を過ぎると受給できません。ただし、出産育児一時金のように申請期限が2年間と長いものや、児童手当のように遡って支給される場合もあります。また、災害関連の給付金は特別に期限が延長されることがあります。できるだけ早めに申請することをおすすめします。',
  },
  {
    q: '自分がどの助成金を受給できるか分かりません',
    a: 'トップページの「助成金診断クイズ」をご利用ください。世帯構成・収入状況・目的などの簡単な質問に答えるだけで、該当する可能性のある助成金が一覧表示されます。また、お住まいの市区町村の窓口に相談するのも有効です。',
  },
  {
    q: '会社員でも受給できる助成金はありますか？',
    a: 'はい、多くの助成金は会社員も対象です。雇用保険に加入していれば「育児休業給付金」「介護休業給付金」「教育訓練給付金」などが利用できます。また「高額療養費制度」「児童手当」「住宅ローン減税」など、雇用形態に関係なく利用できる制度も多数あります。',
  },
  {
    q: 'フリーランス・個人事業主が使える助成金はありますか？',
    a: '「小規模事業者持続化補助金」「IT導入補助金」「事業再構築補助金」など、個人事業主やフリーランスが利用できる助成金は多数あります。また「国民健康保険」の減免制度や「住宅確保給付金」など、生活面の支援制度も利用可能です。確定申告をしていることが前提条件になることが多いです。',
  },
  {
    q: '助成金の情報はどこで最新のものを確認できますか？',
    a: '当サイトでは定期的に情報を更新していますが、最も正確な最新情報は各制度の公式サイトで確認してください。国の制度は厚生労働省・経済産業省・内閣府などのウェブサイト、自治体の制度はお住まいの都道府県・市区町村のウェブサイトで案内されています。',
  },
  {
    q: '助成金の申請を代行してもらうことはできますか？',
    a: '助成金の申請代行は、社会保険労務士（社労士）が行うのが一般的です。補助金の申請サポートは、中小企業診断士や行政書士が対応することもあります。ただし、代行費用として着手金や成功報酬が発生します。まずは自分で申請できないか検討し、複雑な場合にプロに相談するのがおすすめです。',
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span className="mx-1">/</span>
            <span className="text-gray-700">よくある質問</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            よくある質問（FAQ）
          </h1>
          <p className="text-gray-600">
            助成金・補助金・給付金に関するよくある質問をまとめました。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <GoogleAd />

        <div className="space-y-4 mt-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-lg bg-white overflow-hidden"
            >
              <summary className="flex items-start gap-3 px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  Q
                </span>
                <span className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">
                  {faq.q}
                </span>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    A
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        <GoogleAd className="mt-8" />

        {/* CTA */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            あなたに合った助成金を探してみましょう
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            トップページの診断クイズで、受給できる可能性のある助成金が分かります。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              診断クイズを試す
            </Link>
            <Link
              href="/guide/"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 text-sm font-semibold rounded-lg border border-blue-300 hover:bg-blue-50 transition-colors"
            >
              申請ガイドを見る
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
