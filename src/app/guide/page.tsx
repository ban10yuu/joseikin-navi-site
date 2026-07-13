import type { Metadata } from 'next';
import Link from 'next/link';
import GoogleAd from '@/components/GoogleAd';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: '助成金の申請ガイド｜初めての方でも分かる申請の流れと必要書類',
  description:
    '助成金・補助金・給付金の申請方法を初めての方にも分かりやすく解説。申請の流れ、必要書類の準備、審査のポイント、よくある失敗例まで網羅的にご紹介します。',
  alternates: { canonical: toSiteUrl('/guide/') },
};

const steps = [
  {
    num: 1,
    title: '対象となる助成金を探す',
    desc: '対象区分、地域、目的を選んで候補を探します。検索結果は対象可否を確定するものではないため、候補が見つかったら公式情報を確認します。',
    tips: [
      '個人・家族向けと事業者・団体向けを切り替える',
      '都道府県と市区町村の両方を確認する',
      '制度名が分からない場合は目的や対象経費で検索する',
    ],
  },
  {
    num: 2,
    title: '受給条件を確認する',
    desc: '公式募集要項で、対象者、対象地域、対象期間、支援内容を確認します。不明な条件は、実施機関の担当窓口へ確認してください。',
    tips: [
      '基準日と対象期間を確認する',
      '世帯・事業者など対象単位の定義を確認する',
      '掲載ページと公式募集要項に差がある場合は公式情報を優先する',
    ],
  },
  {
    num: 3,
    title: '必要書類を準備する',
    desc: '必要書類は制度ごとに異なります。公式募集要項に記載された書類名、様式、発行時期、原本・写しの指定を確認して準備します。',
    tips: [
      '公式ページから最新の様式を取得する',
      '発行日や対象年度の指定を確認する',
      '原本が必要かコピーでよいかを事前に確認',
    ],
  },
  {
    num: 4,
    title: '申請書を作成・提出する',
    desc: '申請書に必要事項を記入し、必要書類とともに提出します。窓口への持参、郵送、オンライン申請など、制度によって提出方法が異なります。記入ミスは審査の遅延につながるため、丁寧に記入しましょう。',
    tips: [
      '記入例があれば必ず参考にする',
      '押印や電子署名の要否を募集要項で確認する',
      '提出した内容を確認できるよう控えを保存する',
    ],
  },
  {
    num: 5,
    title: '審査結果を待つ',
    desc: '審査方法、結果の通知方法、追加資料への対応期限は制度ごとに異なります。申請後も実施機関からの連絡を確認します。',
    tips: [
      '審査中に住所や口座が変わった場合は速やかに届出',
      '追加書類の提出を求められる場合もある',
      '不採択・不支給時の問い合わせ方法を確認する',
    ],
  },
  {
    num: 6,
    title: '決定後の手続きを確認する',
    desc: '交付・支給の決定後に必要な手続きは制度ごとに異なります。実績報告、証憑の保存、請求手続き、返還条件などを公式文書で確認します。',
    tips: [
      '支払時期と請求手続きの有無を確認する',
      '事業者向け制度は交付決定前の契約・発注可否を確認する',
      '税務上の扱いは制度の担当窓口または税務の専門窓口へ確認する',
    ],
  },
];

const commonDocs = [
  { name: '書類名と様式', detail: '公式募集要項に記載された名称と最新様式か' },
  { name: '対象期間・対象年度', detail: '証明内容が指定された期間・年度に対応しているか' },
  { name: '発行日の条件', detail: '発行日の指定がある場合、その条件を満たしているか' },
  { name: '原本・写しの区別', detail: '原本、写し、電子データのいずれが必要か' },
  { name: '提出方法', detail: '窓口、郵送、電子申請など指定された方法か' },
  { name: '提出期限', detail: '必着・消印有効・システム受付時刻などの指定があるか' },
];

const mistakes = [
  { title: '申請期限を過ぎてしまう', desc: '締切日だけでなく、締切時刻、必着・消印有効、予算到達による早期終了の記載を公式情報で確認します。' },
  { title: '書類の不備・記入ミス', desc: '書類の不備は審査遅延や不支給の原因になります。記入例をよく確認し、提出前にダブルチェックしましょう。' },
  { title: '対象外の経費を含める', desc: '対象経費、対象外経費、補助率、上限額を公式募集要項で照合します。' },
  { title: '契約・発注の時期を誤る', desc: '交付決定前の契約・発注・支払いが対象になるかは制度ごとに異なります。着手前に募集要項を確認します。' },
];

export default function GuidePage() {
  return (
    <>
      <div className="bg-navy py-10 sm:py-14 border-b-4 border-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white hover:underline underline-offset-2">ホーム</Link>
            <span className="mx-1">/</span>
            <span className="text-white/85">申請ガイド</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-wide">
            助成金の申請ガイド
          </h1>
          <p className="text-white/80">
            初めての方でも安心。助成金・補助金の申請手順を6つのステップで分かりやすく解説します。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <GoogleAd />

        {/* 申請の流れ */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-navy text-white flex items-center justify-center text-sm font-bold">1</span>
            申請の流れ（6ステップ）
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-card border-[1.5px] border-line rounded-xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white font-black text-lg flex items-center justify-center">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ink leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    <div className="bg-wash rounded-lg p-3 border-l-4 border-navy">
                      <p className="text-xs font-bold text-navy mb-1.5">ポイント</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="text-xs text-ink flex items-start gap-1.5">
                            <span className="text-accent-deep font-bold mt-0.5">&#10003;</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <GoogleAd className="mt-8" />

        {/* よく使う書類 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-navy text-white flex items-center justify-center text-sm font-bold">2</span>
            必要書類を確認するときの項目
          </h2>
          <div className="bg-card border-2 border-line-strong rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left text-xs font-bold text-white px-4 py-3">確認項目</th>
                  <th className="text-left text-xs font-bold text-white px-4 py-3 hidden sm:table-cell">確認内容</th>
                </tr>
              </thead>
              <tbody>
                {commonDocs.map((doc, i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="px-4 py-3">
                      <p className="text-sm font-bold text-navy">{doc.name}</p>
                      <p className="text-xs text-muted sm:hidden mt-0.5">{doc.detail}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-ink hidden sm:table-cell">{doc.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* よくある失敗 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center text-sm font-black">!</span>
            よくある失敗例と対策
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mistakes.map((m, i) => (
              <div key={i} className="bg-accent-wash border-[1.5px] border-accent rounded-xl p-4">
                <h3 className="text-sm font-bold text-accent-deep mb-1.5">{m.title}</h3>
                <p className="text-xs text-ink leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <GoogleAd className="mt-8" />

        {/* CTA */}
        <div className="mt-10 bg-card border-2 border-navy rounded-xl p-6 text-center shadow-sm">
          <h2 className="text-lg font-bold text-navy mb-2">
            さっそく助成金を探してみましょう
          </h2>
          <p className="text-sm text-muted mb-4">
            地域と目的を選び、利用できる可能性のある制度を探せます。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-accent-deep transition-colors shadow-sm"
            >
              助成金を探す
            </Link>
            <Link
              href="/faq/"
              className="inline-block px-6 py-2.5 bg-card text-navy text-sm font-bold rounded-lg border-2 border-navy hover:bg-wash transition-colors"
            >
              よくある質問
            </Link>
          </div>
        </div>
      </div>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: '助成金の申請方法',
            description: '助成金・補助金の申請手順を6つのステップで解説',
            step: steps.map((s) => ({
              '@type': 'HowToStep',
              position: s.num,
              name: s.title,
              text: s.desc,
            })),
          }),
        }}
      />
    </>
  );
}
