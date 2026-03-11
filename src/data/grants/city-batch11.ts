import { Grant } from '@/lib/types';

export const cityGrantsBatch11: Grant[] = [
  // ────────────────────────────────────────────────
  // 佐賀市（佐賀県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'saga-city-child-medical',
    title: '佐賀市 子ども医療費助成制度',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '佐賀県',
    tags: ['佐賀市', '子ども医療費', '助成金'],
    eligibility: '佐賀市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '佐賀市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>バルーンフェスタで知られる佐賀市は、子育て支援策の充実にも力を入れています。通院・入院・調剤のいずれも助成対象となっており、子育て世帯の経済的負担を軽減しています。</p><p><span class="marker-green">所得制限はなく、佐賀市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐賀市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>佐賀市役所こども家庭課または各支所で申請します。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。佐賀県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-housing-reform',
    title: '佐賀市 住宅リフォーム緊急助成事業',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '佐賀県',
    tags: ['佐賀市', '住宅リフォーム', '補助金'],
    eligibility: '佐賀市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '佐賀市が実施する住宅リフォーム助成事業です。市内業者による改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 住宅リフォーム緊急助成事業は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を助成する制度です。</p><p>住環境の向上と地域経済の活性化を同時に図ることを目的としています。外壁塗装、屋根修繕、トイレ・浴室の改修、バリアフリー化など、幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">佐賀市内に本店を有する施工業者に依頼することが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>佐賀市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>佐賀市役所建築住宅課に申請書を提出します。見積書、工事内容がわかる図面や写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始しないと補助対象になりません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となるため、年度初めの早い段階での申請が有利です。</p><div class="highlight-box">他の住宅関連補助金（耐震改修補助など）との併用が可能な場合があります。複数の制度を組み合わせることで自己負担をさらに抑えることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-startup-support',
    title: '佐賀市 創業支援補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '佐賀県',
    tags: ['佐賀市', '創業支援', '補助金'],
    eligibility: '佐賀市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '佐賀市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 創業支援補助金は、<span class="marker">市内で新たに事業を始める方を対象に、創業に必要な初期費用の一部を補助</span>する制度です。</p><p>佐賀市は地方創生の一環として創業支援に力を入れており、佐賀県産業スマートIDEAプロジェクトとも連携しています。店舗の改装費、設備購入費、広告宣伝費など幅広い経費が補助対象です。</p><p>補助率は対象経費の2/3で、<strong>上限は100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>佐賀市内で新たに創業する個人または法人</p><p>創業後1年以内であること</p><p>佐賀市の認定特定創業支援等事業を受けていること</p><p>市税の滞納がないこと</p></div><p>佐賀市役所産業振興課へ事業計画書とともに申請します。認定特定創業支援等事業（商工会議所のセミナー等）を事前に受講しておく必要があります。</p><p><span class="marker-green">個人事業主・法人いずれも対象</span>です。事業計画の実現可能性を審査のうえ交付が決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2/3で、<strong>上限100万円</strong>です。店舗改装費、機械設備費、広告費、許認可取得費などが対象です。</p><p><span class="marker">人件費や仕入原価は補助対象外</span>です。事業計画と実績報告書の提出が必要で、補助金は原則として事業完了後の精算払いとなります。</p><div class="highlight-box">佐賀市では創業相談窓口を常設しています。事業計画の作成から資金調達まで、無料でアドバイスを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 長崎市（長崎県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'nagasaki-city-child-medical',
    title: '長崎市 子ども医療費助成制度',
    organization: '長崎市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['長崎市', '子ども医療費', '助成金'],
    eligibility: '長崎市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '長崎市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>歴史ある港町・長崎市は、出島や平和公園で知られる国際色豊かな都市です。子育て家庭の医療費の不安を取り除き、安心して子どもを育てられる環境づくりを推進しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長崎市に住民登録のある中学3年生までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>長崎市こども部こども政策課または各地域センターで申請します。出生届や転入届の手続きと一緒に行うと効率的です。<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。長崎県内の医療機関であれば受給者証の提示で窓口負担が発生しません。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払った後に償還払い</span>の手続きが必要です。領収書を忘れずに保管しましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、健康診断など）は助成の対象外です。入院時の食事療養費も自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-fertility-treatment',
    title: '長崎市 不妊治療費助成制度',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '長崎県',
    tags: ['長崎市', '不妊治療', '医療費助成'],
    eligibility: '長崎市に住所を有する夫婦で、保険適用の不妊治療を受けている方',
    applicationPeriod: '通年（治療終了日から60日以内に申請）',
    description: '長崎市が独自に実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 不妊治療費助成制度は、<span class="marker">保険適用の不妊治療にかかる自己負担分を助成</span>する市独自の支援制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、体外受精や顕微授精などは繰り返し治療が必要になることも多く、経済的な負担が大きくなりがちです。長崎市ではこうした負担を軽減するため、1回の治療につき<strong>最大10万円</strong>の助成を行っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦の双方またはいずれかが長崎市に住所を有すること</p><p>保険適用の不妊治療を受けていること</p><p>治療終了日から60日以内に申請すること</p></div><p>長崎市こども部こども政策課で申請します。医療機関の治療証明書、領収書、保険証のコピーが必要です。</p><p><span class="marker-green">事実婚のカップルも対象</span>となっています。申請期限を過ぎると受付できないため、早めの手続きをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大10万円</strong>が助成されます。体外受精・顕微授精など保険適用の高度生殖医療が対象です。</p><p><span class="marker">年度内の助成回数に上限はありません</span>が、治療ごとに個別の申請が必要です。</p><div class="highlight-box">長崎市では不妊・不育症に関する相談窓口を設けています。治療費の不安だけでなく、メンタル面のサポートも受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-housing-seismic',
    title: '長崎市 木造住宅耐震改修補助金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '長崎県',
    tags: ['長崎市', '耐震改修', '補助金'],
    eligibility: '長崎市内に所在する昭和56年5月以前建築の木造住宅の所有者',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '長崎市が実施する木造住宅の耐震改修補助金です。旧耐震基準の住宅の耐震補強工事に最大60万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 木造住宅耐震改修補助金は、<span class="marker">昭和56年5月31日以前に建築された木造住宅の耐震改修工事</span>に対して費用の一部を補助する制度です。</p><p>斜面地が多い長崎市は地形上の特性もあり、地震への備えが特に重要です。旧耐震基準で建てられた住宅を現行基準に適合させるための改修工事を支援し、<strong>市民の安全・安心な暮らし</strong>を守ります。</p><p><span class="marker-green">補助額は最大60万円</span>で、まず耐震診断を受けてから改修工事に進みます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>長崎市内に所在する木造住宅</p><p>昭和56年5月31日以前に建築されたもの</p><p>耐震診断の結果、倒壊の危険性があると判定されたもの</p><p>所有者が居住していること</p></div><p>長崎市建築部建築指導課へ申請書類を提出します。事前に市が実施する無料の耐震診断を受けることができます。</p><p><span class="marker">必ず工事着手前に交付申請を行い、交付決定を受けてから工事を開始</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の<strong>最大60万円</strong>です。耐震診断で倒壊の危険性が「あり」と判定された住宅が対象となります。</p><p><span class="marker">年間の受付件数に限りがある</span>ため、申請は早めに行いましょう。耐震診断から改修工事まで一貫してサポートが受けられます。</p><div class="highlight-box">耐震改修と合わせてバリアフリー化や省エネ改修を行うと、他の補助制度も併用できる可能性があります。総合的なリフォーム計画を立てると効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大分市（大分県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'oita-city-child-medical',
    title: '大分市 子ども医療費助成制度',
    organization: '大分市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大分県',
    tags: ['大分市', '子ども医療費', '助成金'],
    eligibility: '大分市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大分市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>温泉県おおいたの県都・大分市は、別府湾に面した穏やかな気候と豊かな自然が魅力です。子育て世帯が安心して暮らせるよう、医療費の負担軽減に取り組んでいます。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>で、所得制限はありません。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大分市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>大分市役所子育て支援課または各支所で申請します。出生届・転入届と同時に手続きするのが便利です。<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。大分県内の医療機関であれば受給資格証の提示で窓口負担なしで受診できます。</p><p><span class="marker">県外の医療機関では一旦自己負担を支払い、後日償還払い</span>の申請が必要です。領収書をしっかり保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。入院時の食事療養費も自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-startup-support',
    title: '大分市 創業者応援補助金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '大分県',
    tags: ['大分市', '創業支援', '補助金'],
    eligibility: '大分市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '大分市が実施する創業者応援補助金です。市内での新規創業に要する初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 創業者応援補助金は、<span class="marker">市内で新規に創業する方の初期費用を支援</span>する制度です。</p><p>大分市は「おおいたスタートアップ」施策として創業支援に注力しており、商工会議所やインキュベーション施設との連携で起業しやすい環境を整備しています。店舗改装費、設備費、広告宣伝費、許認可取得費など幅広い経費が対象です。</p><p>補助率は対象経費の1/2で、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大分市内で新たに創業する個人または法人</p><p>創業後1年以内であること</p><p>大分市の認定特定創業支援等事業による支援を受けていること</p><p>市税を滞納していないこと</p></div><p>大分市商工労働観光部へ事業計画書と見積書を添えて申請します。事前に商工会議所等の創業セミナーを受講しておく必要があります。</p><p><span class="marker-green">業種の制限はなく、飲食・サービス・IT・製造業など幅広く対象</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、<strong>上限50万円</strong>です。店舗改装費、機械・設備購入費、広告宣伝費などが対象となります。</p><p><span class="marker">補助金は事業完了後の精算払い</span>です。実績報告書の提出が必要ですので、領収書や契約書は必ず保管しておきましょう。</p><div class="highlight-box">大分市では創業無料相談を常時受け付けています。事業計画のブラッシュアップや資金繰りについて専門家からアドバイスを受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-migration-support',
    title: '大分市 移住支援金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '大分県',
    tags: ['大分市', '移住支援', '支援金'],
    eligibility: '東京圏から大分市に移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大分市が実施する移住支援金制度です。東京圏から移住・就業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 移住支援金は、<span class="marker">東京23区在住または東京圏から通勤していた方が大分市に移住</span>し、就業または創業した場合に支給される支援金です。</p><p>温泉・自然・食の豊かさが魅力の大分市への移住を促進する制度で、国と県の共同事業として実施されています。単身の場合は60万円、世帯の場合は<strong>最大100万円</strong>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住前に東京23区に在住、または東京圏から23区に通勤していたこと</p><p>大分市に転入後3か月以上1年以内に申請すること</p><p>大分県のマッチングサイト掲載求人に就業、またはテレワーク・創業すること</p><p>5年以上大分市に居住する意思があること</p></div><p>大分市企画部企画課へ申請します。移住前の住民票の写し、就業証明書、転入届受理証明書等が必要です。</p><p><span class="marker-green">テレワーク移住も対象</span>となっています。東京圏の企業に所属したまま大分市に移住するケースも支援されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身60万円、世帯100万円</strong>です。18歳未満の子どもがいる場合は子ども1人あたり100万円が加算されます。</p><p><span class="marker">5年以内に大分市から転出した場合は返還が求められる</span>ことがあります。長期的な居住を前提とした制度です。</p><div class="note-box">移住前に大分市の移住相談窓口を利用すると、住まいや仕事の情報提供を受けられます。オンライン相談にも対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 宮崎市（宮崎県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'miyazaki-city-child-medical',
    title: '宮崎市 子ども医療費助成制度',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '宮崎県',
    tags: ['宮崎市', '子ども医療費', '助成金'],
    eligibility: '宮崎市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '宮崎市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>日照時間の長さと温暖な気候が魅力の宮崎市は、子育てしやすいまちづくりに積極的に取り組んでいます。通院・入院・調剤のすべてが助成対象で、子育て家庭の医療費の負担を大きく軽減しています。</p><p><span class="marker-green">所得制限はなく、宮崎市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宮崎市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>宮崎市役所こども未来部子育て支援課または各総合支所で申請できます。出生届や転入届と同時に手続きすると効率的です。<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。宮崎県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い後に償還払い</span>の手続きが必要です。領収書を必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。学校でのケガは日本スポーツ振興センターの給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-housing-eco-reform',
    title: '宮崎市 住宅省エネリフォーム補助金',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '宮崎県',
    tags: ['宮崎市', '住宅リフォーム', '省エネ'],
    eligibility: '宮崎市内に所在する住宅の所有者で、省エネ改修工事を行う方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '宮崎市が実施する住宅の省エネリフォーム補助金です。断熱改修や高効率設備の導入に最大30万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 住宅省エネリフォーム補助金は、<span class="marker">既存住宅の断熱性能向上や省エネ設備の導入</span>を支援する制度です。</p><p>温暖な気候の宮崎市ですが、夏場の冷房費用は大きな家計負担となっています。窓の断熱化、遮熱塗装、高効率エアコンへの交換、太陽光発電システムの設置など幅広い工事が対象で、補助率は対象工事費の1/3で<strong>上限は30万円</strong>です。</p><p><span class="marker-green">光熱費の削減と快適な住環境の両立</span>を実現できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>窓の断熱改修（内窓設置・遮熱フィルム等）</p><p>外壁・屋根の断熱塗装・断熱改修</p><p>高効率エアコン・給湯器への交換</p><p>太陽光発電システムの設置</p></div><p>宮崎市建築住宅課に申請書、見積書、工事図面を提出します。市内に本店を有する施工業者に工事を依頼することが条件です。</p><p><span class="marker">必ず工事着手前に申請が必要</span>です。交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の1/3で、<strong>上限30万円</strong>です。工事費が30万円以上の省エネ改修が対象となります。</p><p><span class="marker">先着順で受付し、予算に達し次第終了</span>です。年度後半には予算残額が少なくなることが多いため、早めの申請をおすすめします。</p><div class="highlight-box">国の住宅省エネ補助事業との併用が可能な場合があります。複数制度を組み合わせると、自己負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-scholarship',
    title: '宮崎市 給付型奨学金制度',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '宮崎県',
    tags: ['宮崎市', '奨学金', '教育支援'],
    eligibility: '宮崎市に住所を有する世帯の高校生・大学生で、経済的に修学が困難な方',
    applicationPeriod: '毎年4月〜5月',
    description: '宮崎市が実施する給付型奨学金制度です。経済的に修学が困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 給付型奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生に対して返済不要の奨学金を給付</span>する制度です。</p><p>宮崎市は教育の機会均等を重視し、家庭の経済状況によらず意欲ある学生が学びを続けられるよう支援しています。高校生には月額1万5千円、大学生・短大生・専門学校生には<strong>月額最大3万円</strong>が給付されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が宮崎市内に住所を有すること</p><p>高等学校、大学、短期大学、専門学校等に在学中であること</p><p>学業成績が一定基準を満たすこと</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて宮崎市教育委員会学校教育課で申請を受け付けます。在学証明書、成績証明書、世帯の所得証明書が必要です。</p><p><span class="marker-green">他の奨学金との併給も可能</span>な場合があります。詳細は申請時にご確認ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生：月額1万5千円、大学生等：月額3万円</strong>です。返済の必要はありません。</p><p><span class="marker">毎年度の継続申請が必要</span>です。年度ごとに成績基準と所得基準を満たしているか確認されます。成績が著しく低下した場合は給付が停止されることがあります。</p><div class="note-box">募集人数には限りがあり、選考により決定されます。申請期間を過ぎると受付できないため、期限内に必要書類をそろえて申請しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 鹿児島市（鹿児島県）3件: childcare, medical, living
  // ────────────────────────────────────────────────
  {
    slug: 'kagoshima-city-child-medical',
    title: '鹿児島市 子ども医療費助成制度',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '子ども医療費', '助成金'],
    eligibility: '鹿児島市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '鹿児島市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>桜島を臨む南九州の中核都市・鹿児島市は、子育て支援策の充実に力を入れています。通院・入院・調剤のすべてが助成対象で、高校卒業まで切れ目のない医療費支援を実現しています。</p><p><span class="marker-green">所得制限はなく、鹿児島市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鹿児島市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>鹿児島市役所こども福祉課または各支所で申請します。出生届や転入届と同時に手続きすると便利です。<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。鹿児島県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い後に償還払い</span>の手続きが必要です。領収書を忘れずに保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、健康診断など）は助成対象外です。他の公費医療制度が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-vaccination',
    title: '鹿児島市 高齢者予防接種費用助成',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '自己負担1,000円',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '予防接種', '高齢者'],
    eligibility: '鹿児島市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月（インフルエンザ）',
    description: '鹿児島市が実施する高齢者向け予防接種費用助成制度です。インフルエンザ等の予防接種を自己負担1,000円で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 高齢者予防接種費用助成は、<span class="marker">65歳以上の市民を対象にインフルエンザ・肺炎球菌等の予防接種費用を助成</span>する制度です。</p><p>高齢者は感染症が重症化しやすく、予防接種による感染予防が特に重要です。鹿児島市では接種費用の大部分を公費で負担し、<strong>自己負担1,000円</strong>で予防接種を受けられるようにしています。</p><p><span class="marker-green">生活保護受給者は自己負担なしで接種可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる予防接種"><p>季節性インフルエンザ（10月〜1月）</p><p>高齢者肺炎球菌（通年・対象年齢あり）</p><p>新型コロナウイルス（実施期間中）</p></div><p>事前の申請は不要です。鹿児島市内の協力医療機関に予約し、接種時に保険証等で住所・年齢を確認します。</p><p>市外の医療機関で接種する場合は、事前に鹿児島市保健所へ<strong>「予防接種依頼書」</strong>の発行を依頼してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>自己負担額は<strong>1回1,000円</strong>です。接種費用との差額は鹿児島市が負担します。生活保護世帯は自己負担が免除されます。</p><p><span class="marker">インフルエンザ予防接種の助成期間は10月〜翌年1月末まで</span>です。期間外の接種は全額自己負担となります。</p><div class="highlight-box">予防接種を受ける際は、体調の良い日に接種してください。持病のある方は事前にかかりつけ医に相談しておくと安心です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-migration-support',
    title: '鹿児島市 移住支援金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '移住支援', '支援金'],
    eligibility: '東京圏から鹿児島市に移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '鹿児島市が実施する移住支援金制度です。東京圏から移住・就業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 移住支援金は、<span class="marker">東京23区在住または東京圏から通勤していた方が鹿児島市に移住</span>し、就業または創業した場合に支給される支援金です。</p><p>桜島や温泉など豊かな自然が魅力の鹿児島市は、移住先として人気が高まっています。単身の場合は60万円、世帯の場合は<strong>最大100万円</strong>が支給されます。国と鹿児島県の共同事業として実施されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住前に東京23区に在住、または東京圏から23区に通勤していたこと</p><p>鹿児島市に転入後3か月以上1年以内に申請すること</p><p>鹿児島県のマッチングサイト掲載求人に就業、またはテレワーク・創業すること</p><p>5年以上鹿児島市に居住する意思があること</p></div><p>鹿児島市総合政策部政策推進課へ申請します。移住前の住民票の写し、就業証明書等の書類が必要です。</p><p><span class="marker-green">テレワーク移住も支援対象</span>です。東京圏の会社に所属したまま鹿児島市で暮らすケースにも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身60万円、世帯100万円</strong>です。18歳未満の子どもがいる場合は子ども1人あたり100万円が加算されます。</p><p><span class="marker">5年以内に鹿児島市から転出した場合は返還が必要</span>となることがあります。中長期的に鹿児島市に定住する意思のある方が対象です。</p><div class="note-box">鹿児島市では移住相談窓口を設けており、仕事・住まい・子育て環境などの情報提供を行っています。オンライン相談も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 那覇市（沖縄県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'naha-child-medical',
    title: '那覇市 こども医療費助成制度',
    organization: '那覇市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '沖縄県',
    tags: ['那覇市', '子ども医療費', '助成金'],
    eligibility: '那覇市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '那覇市が実施するこども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 こども医療費助成制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>沖縄県の県庁所在地・那覇市は、首里城やモノレール（ゆいレール）で知られる南国の都市です。子育て世帯が安心して暮らせるよう、医療費の助成制度を充実させています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>で、所得制限はありません。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>那覇市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>那覇市役所こどもみらい部こども家庭課で申請します。出生届や転入届と同時に手続きするのが便利です。<strong>「こども医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。沖縄県内の医療機関であれば受給資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い後に償還払い</span>の手続きが必要です。帰省や旅行先での受診にも対応しています。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、健康診断費など）は助成の対象外です。入院時の食事療養費も自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-housing-reform',
    title: '那覇市 住宅リフォーム支援事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '沖縄県',
    tags: ['那覇市', '住宅リフォーム', '補助金'],
    eligibility: '那覇市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '那覇市が実施する住宅リフォーム支援事業です。市内業者による住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 住宅リフォーム支援事業は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>沖縄特有の台風や塩害による住宅の劣化は避けられない課題です。外壁・屋上防水の補修、浴室・トイレの改修、バリアフリー化など幅広い工事が対象で、住環境の向上と地域の建設業振興を図っています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">那覇市内に本店を有する施工業者への発注が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>那覇市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>那覇市役所まちなみ共創部住宅課に申請書を提出します。見積書、工事内容の図面・写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費20万円未満の場合は補助対象外です。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となります。沖縄は台風シーズン前に申請が集中するため、早めの準備がおすすめです。</p><div class="highlight-box">台風対策としての窓シャッター設置や防水工事も補助対象に含まれる場合があります。見積もり段階で施工業者に確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-startup-support',
    title: '那覇市 創業支援補助金',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '沖縄県',
    tags: ['那覇市', '創業支援', '補助金'],
    eligibility: '那覇市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '那覇市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 創業支援補助金は、<span class="marker">市内で新たに事業を始める方の初期費用の一部を補助</span>する制度です。</p><p>那覇市は観光・サービス業を中心に多様な産業が集積しており、創業の機会にも恵まれています。国際通りやIT津梁パークなど、事業拠点としても魅力的なエリアが揃っています。店舗改装費、設備購入費、広告費など幅広い経費が対象です。</p><p>補助率は対象経費の1/2で、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>那覇市内で新たに創業する個人または法人</p><p>創業後1年以内であること</p><p>那覇市の認定特定創業支援等事業を受けていること</p><p>市税を滞納していないこと</p></div><p>那覇市経済観光部商工農水課へ事業計画書と見積書を添えて申請します。事前に商工会議所等の創業支援セミナーを受講しておく必要があります。</p><p><span class="marker-green">飲食・観光・IT・サービス業など業種制限なし</span>で幅広く対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、<strong>上限50万円</strong>です。店舗改装費、機械設備費、広告費、許認可取得費等が対象です。</p><p><span class="marker">補助金は事業完了後の精算払い</span>です。実績報告書と経費の証拠書類（領収書等）の提出が必要となります。</p><div class="highlight-box">那覇市では創業相談を随時受け付けており、事業計画の作成支援や融資制度の紹介など包括的なサポートが受けられます。まずは気軽に相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
];
