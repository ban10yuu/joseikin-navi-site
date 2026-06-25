import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-25';

export const verifiedNationalDeadlineFixes2026: Grant[] = [
  {
    slug: 'kodomo-ecosumai-shien',
    title: 'こどもエコすまい支援事業（受付終了）',
    organization: '国土交通省',
    type: 'national',
    maxAmount: '受付終了',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '全国',
    tags: ['住宅支援', '省エネ住宅', '受付終了', '国土交通省'],
    eligibility: '新規の交付申請・交付申請の予約受付は終了しています。現在は後継・関連する住宅省エネ支援制度を確認してください。',
    applicationPeriod: '2023年9月28日に予算上限到達のため受付終了',
    deadlineDate: '2023-09-28',
    description: 'こどもエコすまい支援事業は、子育て世帯・若者夫婦世帯等の省エネ住宅取得や省エネリフォームを支援した国土交通省の制度です。予算に対する補助金申請額が100%に達したため、2023年9月28日に申請受付を終了しています。',
    sections: [
      {
        heading: '現在の受付状況',
        content: '<p>国土交通省は、こどもエコすまい支援事業の予算に対する補助金申請額が100%になったため、2023年9月28日時点で申請受付を終了したと公表しています。新規申請はできません。</p>'
      },
      {
        heading: '制度の位置づけ',
        content: '<p>本制度は、住宅省エネ2023キャンペーンの一部として、省エネ性能の高い新築住宅や省エネリフォームを支援した制度です。関連する現行制度は国土交通省・住宅省エネキャンペーンの最新案内を確認してください。</p>'
      },
      {
        heading: '申請済み案件の注意',
        content: '<p>受付終了間際に提出された申請は審査に時間を要する場合があり、提出内容に不備がある場合は訂正期限を超過すると却下されます。受付終了後に却下された場合は再提出できないと案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.mlit.go.jp/report/press/house04_hh_001191.html',
    sourceName: '国土交通省 こどもエコすまい支援事業の申請受付終了',
    sourceUrls: [
      'https://www.mlit.go.jp/report/press/house04_hh_001191.html',
      'https://www.mlit.go.jp/report/press/content/001633172.pdf',
      'https://www.mlit.go.jp/report/press/content/001621720.pdf'
    ],
    sourceNote: '国土交通省の報道発表で、2023年9月28日時点で予算上限100%に達し申請受付を終了したことを確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'jigyou-saikouchiku-hojokin',
    title: '事業再構築補助金（第13回公募・応募受付終了）',
    organization: '中小企業庁・中小機構',
    type: 'national',
    maxAmount: '応募受付終了',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['中小企業支援', '事業転換', '受付終了', '中小企業庁'],
    eligibility: '第13回公募の応募申請受付は終了しています。採択後の交付申請・補助事業実施・実績報告等は対象事業者向けの手続きとして継続しています。',
    targetOccupation: '第13回公募に応募済み、または採択・交付決定を受けた事業者向け手続きが中心です。',
    applicationPeriod: '第13回公募期間: 2025年1月10日〜2025年3月26日18:00',
    deadlineDate: '2025-03-26',
    description: '事業再構築補助金は、中小企業等の新市場進出や事業転換を支援した補助金です。第13回公募の応募期間は2025年1月10日から2025年3月26日18:00までで、新規の応募受付は終了しています。',
    sections: [
      {
        heading: '現在の受付状況',
        content: '<p>第13回公募要領では、公募期間は2025年1月10日から2025年3月26日18:00までとされています。2026年6月25日時点では、新規の応募申請ではなく、採択後の交付申請や補助事業実施、実績報告などの手続き案内が中心です。</p>'
      },
      {
        heading: '第13回公募の位置づけ',
        content: '<p>第13回公募は、成長分野進出枠やコロナ回復加速化枠などの事業類型で実施されました。応募申請の締切後も、採択された事業者には交付申請、補助事業実施、実績報告、事業化状況報告などの期限があります。</p>'
      },
      {
        heading: '代替制度の確認',
        content: '<p>新たな事業分野への進出を検討する場合は、中小企業庁・ミラサポPlus等で公表される現行の補助金情報を確認してください。名称が似た補助金でも公募回、補助対象、期限が異なります。</p>'
      }
    ],
    officialUrl: 'https://jigyou-saikouchiku.go.jp/oubo.html',
    sourceName: '事業再構築補助金 公式サイト 第13回公募要領・応募申請',
    sourceUrls: [
      'https://jigyou-saikouchiku.go.jp/oubo.html',
      'https://jigyou-saikouchiku.go.jp/schedule.html',
      'https://jigyou-saikouchiku.go.jp/pdf/koubo.pdf'
    ],
    sourceNote: '第13回公募要領で公募期間が2025年1月10日から2025年3月26日18:00までであることを確認。公式サイトは採択後手続き向けに継続公開中。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'juuminzei-hikazei-setai-kyuufukin',
    title: '住民税非課税世帯等向け給付（自治体実施）',
    organization: '内閣府・市区町村',
    type: 'national',
    maxAmount: '自治体の事業ごとに異なる',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '全国',
    tags: ['低所得世帯支援', '物価高騰対策', '市区町村', '自治体給付'],
    eligibility: '国の重点支援地方交付金等を活用し、市区町村が実施する給付事業ごとに対象世帯や基準日が定められます。住民税非課税世帯、均等割のみ課税世帯、低所得の子育て世帯など、対象は事業により異なります。',
    targetIncome: '市区町村の給付事業ごとに異なる。',
    applicationPeriod: '自治体ごとに異なる（市区町村の案内を確認）',
    description: '物価高騰の影響を受ける低所得世帯等への給付は、内閣府の重点支援地方交付金などを活用して、各市区町村が地域の実情に応じて実施します。全国一律の単一給付ではないため、対象者・給付額・申請期限は自治体ごとに確認が必要です。',
    sections: [
      {
        heading: '制度の現在地',
        content: '<p>内閣府は、物価高騰対応重点支援地方創生臨時交付金により、地方公共団体が地域の実情に応じて生活者や事業者を支援できる仕組みを設けています。低所得世帯向けの給付も、この交付金を活用した自治体事業として実施されます。</p>'
      },
      {
        heading: '対象者と給付額',
        content: '<p>対象世帯、給付額、基準日、申請方法は自治体ごとの実施計画・給付事業により異なります。住民税非課税世帯や均等割のみ課税世帯、こども加算などが設定される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請の要否や期限は市区町村の案内に従います。確認書の返送が必要な場合、申請書提出が必要な場合、プッシュ型で支給される場合があります。住民票のある自治体の公式サイトを確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.chisou.go.jp/tiiki/rinjikoufukin/juutenshien.html',
    sourceName: '内閣府 地方創生推進事務局 物価高騰対応重点支援地方創生臨時交付金',
    sourceUrls: [
      'https://www.chisou.go.jp/tiiki/rinjikoufukin/juutenshien.html',
      'https://www.chisou.go.jp/tiiki/rinjikoufukin/juutenshien/jigyouichiran.html',
      'https://www5.cao.go.jp/keizai1/bukkahikazei/index.html'
    ],
    sourceNote: '現行の低所得世帯向け支援は重点支援地方交付金を活用した自治体実施事業として確認。旧・電力・ガス・食料品等価格高騰緊急支援給付金は内閣府ページで申請受付終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
];
