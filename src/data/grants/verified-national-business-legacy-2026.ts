import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedNationalBusinessLegacyGrants2026: Grant[] = [
  {
    slug: 'it-donyu-hojokin',
    title: 'デジタル化・AI導入補助金2026（旧・IT導入補助金）',
    organization: '中小企業庁・中小機構',
    type: 'national',
    maxAmount: '通常枠は最大450万円',
    maxAmountNum: 450,
    category: 'employment',
    prefecture: '全国',
    tags: ['IT導入', 'AI導入', '中小企業', 'デジタル化'],
    eligibility: '中小企業・小規模事業者等が、自社の課題やニーズに合ったITツールを導入し、労働生産性の向上に取り組む場合に対象です。申請枠ごとに対象者、対象経費、補助率が異なります。',
    targetOccupation: '中小企業・小規模事業者・個人事業主',
    applicationPeriod: '2026年3月30日10:00から交付申請受付。通常枠3次締切は2026年7月21日17:00',
    deadlineDate: '2026-07-21',
    description: '中小企業・小規模事業者等のデジタル化・AI導入を支援する補助金です。通常枠では、1プロセス以上は5万円以上150万円未満、4プロセス以上は150万円以上450万円以下が補助対象額として設定されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>デジタル化・AI導入補助金2026は、中小企業・小規模事業者等が自社の課題に合うITツールを導入する経費の一部を補助し、労働生産性の向上を支援する制度です。</p>'
      },
      {
        heading: '通常枠の補助額',
        content: '<p>通常枠の補助率は1/2以内または要件により2/3以内です。補助額は、1プロセス以上で5万円以上150万円未満、4プロセス以上で150万円以上450万円以下です。</p>'
      },
      {
        heading: '締切',
        content: '<p>公式スケジュールでは、通常枠3次締切分の締切日は2026年7月21日17時です。以降の募集回は公式サイトで随時更新されるため、申請前に必ず最新スケジュールを確認してください。</p>'
      }
    ],
    officialUrl: 'https://it-shien.smrj.go.jp/applicant/subsidy/normal/',
    sourceName: 'デジタル化・AI導入補助金2026 公式サイト',
    sourceUrls: [
      'https://it-shien.smrj.go.jp/',
      'https://it-shien.smrj.go.jp/applicant/subsidy/normal/',
      'https://it-shien.smrj.go.jp/schedule/'
    ],
    sourceNote: '公式サイトで制度名称、通常枠の補助目的・対象者・補助額、通常枠3次締切2026年7月21日17時を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'monozukuri-hojokin',
    title: 'ものづくり補助金（第23次公募・受付終了）',
    organization: '中小企業庁・ものづくり補助金事務局',
    type: 'national',
    maxAmount: '公募回・申請枠・従業員数により異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['設備投資', '新製品開発', '中小企業', '受付終了'],
    eligibility: '中小企業・小規模事業者等が、生産性向上に資する革新的な新製品・新サービス開発や海外需要開拓を目的とした設備投資・システム導入を行う場合に対象となる補助金です。公募回ごとに要件が異なります。',
    targetOccupation: '中小企業・小規模事業者',
    applicationPeriod: '第23次公募は2026年5月8日17:00で申請締切済み',
    deadlineDate: '2026-05-08',
    description: 'ものづくり補助金は、中小企業・小規模事業者等の革新的な新製品・新サービス開発や設備投資を支援する補助金です。現行確認時点では第23次公募の申請締切が2026年5月8日17時で終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ものづくり補助金は、製造業に限らず、商業・サービス業を含む中小企業・小規模事業者等の革新的な取り組みを支援する補助金です。</p>'
      },
      {
        heading: '第23次公募の締切',
        content: '<p>公式公募要領ページでは、第23次公募の公募開始日が2026年2月6日、申請開始日が2026年4月3日17時、申請締切日が2026年5月8日17時と案内されています。</p>'
      },
      {
        heading: '注意点',
        content: '<p>第23次公募は受付終了済みです。次回以降の公募が公表された場合は、補助上限、補助率、申請要件、締切日を公式サイトで再確認してください。</p>'
      }
    ],
    officialUrl: 'https://portal.monodukuri-hojo.jp/about.html',
    sourceName: 'ものづくり補助金公式ホームページ 公募要領',
    sourceUrls: [
      'https://portal.monodukuri-hojo.jp/',
      'https://portal.monodukuri-hojo.jp/about.html',
      'https://seisansei.smrj.go.jp/subsidy_info/manufacturing_subsidy.html'
    ],
    sourceNote: '公式公募要領ページで第23次公募の申請締切2026年5月8日17時を確認。中小機構の補助金活用ナビで制度概要を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chouki-yuuryou-reform',
    title: '長期優良住宅化リフォーム推進事業（令和7年度受付終了）',
    organization: '国土交通省',
    type: 'national',
    maxAmount: '令和7年度は最大210万円相当（型・加算により異なる）',
    maxAmountNum: 210,
    category: 'housing',
    prefecture: '全国',
    tags: ['リフォーム', '長期優良住宅', '受付終了', '国土交通省'],
    eligibility: '令和7年度事業では、既存住宅の長寿命化・省エネ化等に資する性能向上リフォーム等を行う住宅が対象でした。申請者は施工業者または買取再販業者で、一般消費者が直接申請する制度ではありません。',
    applicationPeriod: '令和7年度の交付申請は締切済み。令和8年度は本事業を実施しないと公式案内あり',
    deadlineDate: '2025-11-14',
    description: '既存住宅の長寿命化、省エネ化、子育てしやすい生活環境整備等に資するリフォームを支援する国土交通省の事業です。令和7年度の交付申請は締め切られており、公式サイトでは令和8年度は実施しないと案内されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長期優良住宅化リフォーム推進事業は、既存住宅ストックの質の向上、子育てしやすい環境、防災性・レジリエンス性の向上に資するリフォームを支援する事業です。</p>'
      },
      {
        heading: '令和7年度の補助上限',
        content: '<p>令和7年度の公式概要では、評価基準型・提案型は1住戸につき80万円、認定長期優良住宅型は1住戸につき160万円が補助限度額です。三世代同居対応改修工事、若者・子育て世帯の改修、既存住宅購入後の改修などは50万円を上限に加算されます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>公式サイトは、令和7年度の交付申請は締め切り済みで、令和8年度は本事業を実施しないと案内しています。令和7年度の最終交付申請期間は2025年11月14日17時まででした。</p>'
      }
    ],
    officialUrl: 'https://r07.choki-reform.mlit.go.jp/',
    sourceName: '令和7年度 長期優良住宅化リフォーム推進事業 公式サイト',
    sourceUrls: [
      'https://r07.choki-reform.mlit.go.jp/',
      'https://r07.choki-reform.mlit.go.jp/overview/overview.html',
      'https://r07.choki-reform.mlit.go.jp/procedure/regist.html',
      'https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk4_000194.html'
    ],
    sourceNote: '令和7年度公式サイトで交付申請締切済み、令和8年度は本事業を実施しないこと、補助限度額、2025年11月14日17時の最終交付申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
