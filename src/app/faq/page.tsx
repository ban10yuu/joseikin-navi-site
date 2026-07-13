import type { Metadata } from 'next';
import Link from 'next/link';
import GoogleAd from '@/components/GoogleAd';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: 'よくある質問（FAQ）｜助成金・補助金の申請に関する疑問を解決',
  description:
    '助成金・補助金・給付金に関するよくある質問をまとめました。申請方法、必要書類、受給条件、審査期間など、初めての方でも分かりやすく解説します。',
  alternates: { canonical: toSiteUrl('/faq/') },
};

const FAQ_CHECKED_AT = '2026-07-13';
const FAQ_SOURCE = '各制度の公式募集要項・実施機関の担当窓口（制度ごとに異なります）';

const faqs = [
  {
    q: '助成金・補助金・給付金の違いは何ですか？',
    a: '名称だけで、実施機関、審査方法、返済の要否を一律に判断することはできません。給付、補助、貸付、減免など制度種別も異なるため、公式募集要項の「支援内容」と「返還・返済」の記載をご確認ください。',
  },
  {
    q: '助成金の申請に費用はかかりますか？',
    a: '申請手数料、証明書の取得費、外部支援者への報酬などは制度や申請方法によって異なります。費用が発生するかは、公式募集要項と依頼先の契約条件をご確認ください。',
  },
  {
    q: '助成金はどのくらいで受給できますか？',
    a: '審査期間と支給時期は制度ごとに異なります。交付決定前に支出できない制度や、実績報告後に支払われる制度もあるため、公式募集要項のスケジュールをご確認ください。',
  },
  {
    q: '複数の助成金を同時に受給できますか？',
    a: '併用できるかは制度ごとに異なります。同じ経費や同じ目的への重複支援を制限する制度もあるため、双方の公式募集要項または担当窓口でご確認ください。',
  },
  {
    q: '所得制限がある助成金はどう判断すればいいですか？',
    a: '判定対象となる年、所得・収入の定義、世帯の範囲、控除の扱いは制度ごとに異なります。公式募集要項の所得要件を確認し、不明な場合は担当窓口へお問い合わせください。',
  },
  {
    q: '申請に必要な書類は何ですか？',
    a: '必要書類は制度ごとに異なります。当サイトでは公式資料に記載がない書類を推測して案内しません。申請時点の公式募集要項または申請窓口でご確認ください。',
  },
  {
    q: '申請期限を過ぎてしまった場合はどうなりますか？',
    a: '期限後の受付、遡及、次回募集の有無は制度ごとに異なります。掲載ページの表示だけで判断せず、実施機関の公式ページまたは担当窓口でご確認ください。',
  },
  {
    q: '自分がどの助成金を受給できるか分かりません',
    a: '制度一覧で対象区分、地域、目的を選び、候補を絞り込めます。検索結果は対象可否を保証するものではないため、候補が見つかったら公式募集要項で条件をご確認ください。自治体の相談窓口へ確認する方法もあります。',
  },
  {
    q: '会社員でも受給できる助成金はありますか？',
    a: '会社員を対象に含む制度もありますが、雇用保険の加入状況、世帯、年齢、地域などの要件は制度ごとに異なります。現在の募集状況と対象条件を公式情報でご確認ください。',
  },
  {
    q: 'フリーランス・個人事業主が使える助成金はありますか？',
    a: '個人事業主やフリーランスを対象に含む制度もあります。事業実態、所在地、事業期間、対象経費などの要件や現在の公募状況は、各制度の公式募集要項でご確認ください。',
  },
  {
    q: '助成金の情報はどこで最新のものを確認できますか？',
    a: '制度の実施機関が公開する公式ページ、募集要項、交付要綱をご確認ください。当サイトの確認日以降に内容が変わる場合があるため、申請直前に再確認してください。',
  },
  {
    q: '助成金の申請を代行してもらうことはできますか？',
    a: '依頼できる業務範囲や必要な資格は、制度と依頼内容によって異なります。実施機関が代理申請を認めているか確認し、依頼先の資格、業務範囲、費用、契約条件をご確認ください。',
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="bg-navy py-10 sm:py-14 border-b-4 border-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white hover:underline underline-offset-2">ホーム</Link>
            <span className="mx-1">/</span>
            <span className="text-white/85">よくある質問</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-wide">
            よくある質問（FAQ）
          </h1>
          <p className="text-white/80">
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
              className="group border-[1.5px] border-line rounded-xl bg-card overflow-hidden open:border-navy"
            >
              <summary className="flex items-start gap-3 px-5 py-4 cursor-pointer hover:bg-wash transition-colors">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  Q
                </span>
                <span className="text-sm sm:text-base font-bold text-navy leading-relaxed">
                  {faq.q}
                </span>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-line">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    A
                  </span>
                  <p className="text-sm text-ink leading-relaxed">
                    {faq.a}
                  </p>
                </div>
                <p className="mt-3 pl-10 text-xs leading-relaxed text-faint">最終確認日：{FAQ_CHECKED_AT}<br />確認先：{FAQ_SOURCE}</p>
              </div>
            </details>
          ))}
        </div>

        <GoogleAd className="mt-8" />

        {/* CTA */}
        <div className="mt-10 bg-card border-2 border-navy rounded-xl p-6 text-center shadow-sm">
          <h2 className="text-lg font-bold text-navy mb-2">
            あなたに合った助成金を探してみましょう
          </h2>
          <p className="text-sm text-muted mb-4">
            地域と目的で候補を絞り、各制度の公式情報を確認できます。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/grants/"
              className="inline-block px-6 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-accent-deep transition-colors shadow-sm"
            >
              制度を探す
            </Link>
            <Link
              href="/guide/"
              className="inline-block px-6 py-2.5 bg-card text-navy text-sm font-bold rounded-lg border-2 border-navy hover:bg-wash transition-colors"
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
