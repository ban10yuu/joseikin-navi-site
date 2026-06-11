import type { Metadata } from 'next';
import Link from 'next/link';
import GoogleAd from '@/components/GoogleAd';

export const metadata: Metadata = {
  title: '助成金の申請ガイド｜初めての方でも分かる申請の流れと必要書類',
  description:
    '助成金・補助金・給付金の申請方法を初めての方にも分かりやすく解説。申請の流れ、必要書類の準備、審査のポイント、よくある失敗例まで網羅的にご紹介します。',
  alternates: { canonical: 'https://joseikin-navi-site.vercel.app/guide/' },
};

const steps = [
  {
    num: 1,
    title: '対象となる助成金を探す',
    desc: 'まずは自分が利用できる助成金を見つけましょう。当サイトのトップページにある「助成金診断クイズ」を使えば、世帯構成・収入状況・目的に応じた助成金が簡単に見つかります。',
    tips: [
      'カテゴリ（子育て・住宅・医療など）から探すのも効果的',
      'お住まいの都道府県の独自制度も忘れずにチェック',
      '複数の助成金を同時に利用できるケースも多い',
    ],
  },
  {
    num: 2,
    title: '受給条件を確認する',
    desc: '助成金には対象者の条件（年齢、所得、世帯構成など）が設定されています。条件を満たしているか事前に確認しましょう。不明な点は各制度の窓口に問い合わせるのが確実です。',
    tips: [
      '所得制限は「収入」ではなく「所得」で判断されることが多い',
      '世帯全体の所得か、申請者個人の所得かを確認',
      '条件ギリギリの場合は窓口に相談してみる',
    ],
  },
  {
    num: 3,
    title: '必要書類を準備する',
    desc: '申請に必要な書類を揃えます。当サイトの各助成金ページには「必要書類チェックリスト」を掲載していますので、活用してください。書類の取得には時間がかかるものもあるため、早めの準備がおすすめです。',
    tips: [
      '住民票・所得証明書はマイナンバーカードでコンビニ取得可能',
      '書類の有効期限（通常3ヶ月以内）に注意',
      '原本が必要かコピーでよいかを事前に確認',
    ],
  },
  {
    num: 4,
    title: '申請書を作成・提出する',
    desc: '申請書に必要事項を記入し、必要書類とともに提出します。窓口への持参、郵送、オンライン申請など、制度によって提出方法が異なります。記入ミスは審査の遅延につながるため、丁寧に記入しましょう。',
    tips: [
      '記入例があれば必ず参考にする',
      '押印が必要な場合はシャチハタ不可のことが多い',
      '提出前にコピーを取っておくと安心',
    ],
  },
  {
    num: 5,
    title: '審査結果を待つ',
    desc: '提出後は審査が行われます。審査期間は制度によって異なり、数日〜数ヶ月かかる場合があります。不備があった場合は修正の連絡が来ますので、迅速に対応しましょう。',
    tips: [
      '審査中に住所や口座が変わった場合は速やかに届出',
      '追加書類の提出を求められる場合もある',
      '不支給の場合は理由を確認し、再申請を検討',
    ],
  },
  {
    num: 6,
    title: '助成金を受給する',
    desc: '審査に通過すると、指定した銀行口座に助成金が振り込まれます。受給後に報告書の提出が必要な制度もありますので、忘れずに対応しましょう。',
    tips: [
      '振込日は制度ごとに異なる（月末・翌月15日など）',
      '補助金は事業完了後の後払いが一般的',
      '確定申告が必要になるケースもあるので要確認',
    ],
  },
];

const commonDocs = [
  { name: '本人確認書類', detail: 'マイナンバーカード、運転免許証、パスポートなど' },
  { name: '住民票の写し', detail: '市区町村の窓口またはコンビニで取得（3ヶ月以内のもの）' },
  { name: '所得証明書（課税証明書）', detail: '市区町村の窓口で取得。前年の所得が記載されたもの' },
  { name: '振込先口座の通帳コピー', detail: '金融機関名・支店名・口座番号・名義が分かるページ' },
  { name: '印鑑', detail: '認印で可の場合が多いがシャチハタ不可の場合あり' },
  { name: '健康保険証', detail: '医療関連の助成金で必要になることが多い' },
];

const mistakes = [
  { title: '申請期限を過ぎてしまう', desc: '助成金には申請期限があります。特に補助金は公募期間が短いため、早めに情報をキャッチしましょう。' },
  { title: '書類の不備・記入ミス', desc: '書類の不備は審査遅延や不支給の原因になります。記入例をよく確認し、提出前にダブルチェックしましょう。' },
  { title: '対象外の経費を申請する', desc: '補助金には対象となる経費が細かく決められています。対象外の経費を含めると全額不支給になるリスクがあります。' },
  { title: '事業開始後に申請する', desc: '多くの補助金は「交付決定前に開始した事業は対象外」です。必ず申請・採択後に事業を開始しましょう。' },
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
            よく必要になる書類一覧
          </h2>
          <div className="bg-card border-2 border-line-strong rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left text-xs font-bold text-white px-4 py-3">書類名</th>
                  <th className="text-left text-xs font-bold text-white px-4 py-3 hidden sm:table-cell">取得方法・備考</th>
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
            2,500件以上の助成金の中から、あなたに合った制度が見つかります。
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
