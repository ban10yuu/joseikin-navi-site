import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedNationalMiscGrants2026: Grant[] = [
  {
    slug: 'nenkin-seikatsusha-shien-kyuufukin',
    title: '年金生活者支援給付金',
    organization: '厚生労働省・日本年金機構',
    type: 'national',
    maxAmount: '年金に上乗せ（種類・所得で異なる）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '全国',
    tags: ['年金', '低所得者支援', '老齢基礎年金', '障害基礎年金'],
    eligibility: '老齢基礎年金、障害基礎年金、遺族基礎年金を受給し、所得等の要件を満たす方が対象です。',
    applicationPeriod: '対象者への案内後に請求手続き。新たに年金を請求する方は年金請求とあわせて手続き',
    description: '年金生活者支援給付金は、消費税率引上げ分を活用し、年金を含めても所得が低い方の生活を支援するため、年金に上乗せして支給される給付金です。既存の別slugとの互換維持のため、同一制度を公式確認済みデータで置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>年金を含めても所得が低い方の生活を支援するため、年金に上乗せして支給される給付金です。老齢、障害、遺族の3種類があります。</p>'
      },
      {
        heading: '主な支給要件',
        content: '<p>老齢年金生活者支援給付金は、65歳以上で老齢基礎年金を受け、世帯全員が市町村民税非課税で、前年の年金収入等とその他所得の合計が基準以下であることなどが要件です。</p>'
      },
      {
        heading: '請求方法',
        content: '<p>対象となる可能性がある方には、日本年金機構から請求書が送付されます。新たに年金を請求する場合は、年金の請求手続きとあわせて行います。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/nenkinkyuufukin/',
    sourceName: '厚生労働省 年金生活者支援給付金制度',
    sourceUrls: [
      'https://www.mhlw.go.jp/nenkinkyuufukin/',
      'https://www.mhlw.go.jp/nenkinkyuufukin/system.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000143356_00002.html'
    ],
    sourceNote: '制度概要、3種類の給付金、老齢年金生活者支援給付金の主な支給要件を厚生労働省公式ページで確認。既存旧slugのURL互換維持。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sakidori-mado-rinobe',
    title: '先進的窓リノベ2026事業',
    organization: '環境省・経済産業省・国土交通省',
    type: 'national',
    maxAmount: '1戸あたり最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '全国',
    tags: ['窓断熱', '省エネ住宅', '住宅リフォーム', '2026事業'],
    eligibility: '住宅所有者等が、登録事業者に依頼して既存住宅の窓・ドアの断熱改修を行う場合に対象です。申請は補助事業者として登録された事業者が行います。',
    applicationPeriod: '交付申請は2026年12月31日まで。ただし予算上限に達し次第終了',
    deadlineDate: '2026-12-31',
    description: '既存住宅の窓・ドアの断熱性能を高める改修を支援する国の住宅省エネキャンペーン事業です。2026事業では1戸あたり最大100万円が補助上限です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>先進的窓リノベ2026事業は、既存住宅の窓やドアを高断熱化し、住宅の省エネ性能向上と冷暖房費の削減を支援する補助事業です。</p>'
      },
      {
        heading: '補助上限',
        content: '<p>公式サイトでは、1戸あたり最大100万円と案内されています。補助額は、窓・ドアの性能、サイズ、工事内容に応じて定額で決まります。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>交付申請は2026年12月31日までです。ただし、予算上限に達した場合は期限前に終了するため、申請前に公式サイトの予算状況を確認してください。</p>'
      }
    ],
    officialUrl: 'https://window-renovation2026.env.go.jp/',
    sourceName: '先進的窓リノベ2026事業 公式サイト',
    sourceUrls: [
      'https://window-renovation2026.env.go.jp/',
      'https://window-renovation2026.env.go.jp/overview/'
    ],
    sourceNote: '公式サイトで2026事業、補助上限100万円、交付申請期限2026年12月31日、予算上限到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyuutou-shouene-jigyou',
    title: '給湯省エネ2026事業',
    organization: '経済産業省',
    type: 'national',
    maxAmount: '高効率給湯器の種類・性能等により定額補助',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '全国',
    tags: ['高効率給湯器', '省エネ住宅', '住宅リフォーム', '2026事業'],
    eligibility: '住宅に高効率給湯器を導入する住宅所有者等が対象です。申請は登録事業者が行い、対象機器・補助額は機器種別や性能要件により異なります。',
    applicationPeriod: '交付申請は2026年12月31日まで。ただし予算上限に達し次第終了',
    deadlineDate: '2026-12-31',
    description: '家庭部門の省エネを進めるため、高効率給湯器の導入を支援する経済産業省の補助事業です。旧データの2025事業から、現行の2026事業に更新しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>給湯省エネ2026事業は、ヒートポンプ給湯機、ハイブリッド給湯機、家庭用燃料電池など、高効率給湯器の導入を支援する補助事業です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は、対象となる給湯器の種類、性能、加算要件、撤去工事の有無などにより異なります。公式サイトの対象製品情報と補助額表で確認します。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>交付申請は2026年12月31日までです。ただし、予算上限に達した場合は期限前に終了します。</p>'
      }
    ],
    officialUrl: 'https://kyutou-shoene2026.meti.go.jp/',
    sourceName: '給湯省エネ2026事業 公式サイト',
    sourceUrls: ['https://kyutou-shoene2026.meti.go.jp/'],
    sourceNote: '公式サイトで2026事業、対象となる高効率給湯器、申請期限2026年12月31日、予算上限到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sumai-kyuufukin',
    title: 'すまい給付金（申請受付終了）',
    organization: '国土交通省',
    type: 'national',
    maxAmount: '制度終了',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '全国',
    tags: ['住宅取得', '受付終了', '国土交通省'],
    eligibility: '消費税率引上げ時の住宅取得者向け給付制度でしたが、公式サイトで申請受付終了が案内されています。',
    applicationPeriod: '申請受付は2024年3月で終了',
    deadlineDate: '2024-03-31',
    description: 'すまい給付金は、消費税率引上げによる住宅取得者の負担を緩和する制度でした。公式サイトで申請受付終了が案内されているため、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>すまい給付金は、消費税率引上げによる住宅取得者の負担を緩和するため、収入に応じて給付金を支給していた制度です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>公式サイトでは、すまい給付金の申請受付は2024年3月で終了したと案内されています。</p>'
      },
      {
        heading: '後継制度の確認',
        content: '<p>住宅取得・リフォームの支援は、住宅ローン減税、子育てグリーン住宅支援事業、先進的窓リノベ事業、給湯省エネ事業など、現行制度を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_fr4_000059.html',
    sourceName: '国土交通省 すまい給付金について',
    sourceUrls: ['https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_fr4_000059.html'],
    sourceNote: '国土交通省公式ページで令和6年3月の申請受付終了を確認。受付終了月の月末を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kaigo-fukushi-shi-shugaku-shikin',
    title: '介護福祉士修学資金等貸付制度',
    organization: '厚生労働省・都道府県社会福祉協議会等',
    type: 'national',
    maxAmount: '月額5万円以内、入学準備金20万円以内、就職準備金20万円以内等',
    maxAmountNum: 160,
    category: 'nursing',
    prefecture: '全国',
    tags: ['介護福祉士', '修学資金', '返還免除あり'],
    eligibility: '介護福祉士養成施設等で学び、卒業後に指定された地域・施設で介護業務等に従事する意思がある方が対象です。実施主体ごとに募集時期と要件が異なります。',
    applicationPeriod: '都道府県社会福祉協議会等の募集期間による',
    description: '介護福祉士等を目指す方に修学資金等を貸し付ける制度です。卒業後、一定期間介護業務等に従事した場合は返還免除の対象となる場合があります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>介護人材の確保を目的として、介護福祉士養成施設等で学ぶ方に修学資金等を貸し付ける制度です。</p>'
      },
      {
        heading: '貸付内容',
        content: '<p>月額5万円以内の修学資金、入学準備金20万円以内、就職準備金20万円以内などが案内されています。国家試験受験対策費用などが対象になる場合もあります。</p>'
      },
      {
        heading: '申請先',
        content: '<p>募集時期や申請書類は都道府県社会福祉協議会等の実施主体により異なります。進学先や居住地の実施主体で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/newpage_15126.html',
    sourceName: '厚生労働省 介護福祉士修学資金等貸付制度',
    sourceUrls: ['https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/newpage_15126.html'],
    sourceNote: '厚生労働省公式ページで制度概要、貸付内容、返還免除、実施主体による募集を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shougai-kiso-nenkin',
    title: '障害基礎年金',
    organization: '日本年金機構',
    type: 'national',
    maxAmount: '1級は年額1,059,125円、2級は年額847,300円（令和8年4月分から）',
    maxAmountNum: 106,
    category: 'medical',
    prefecture: '全国',
    tags: ['障害年金', '国民年金', '日本年金機構'],
    eligibility: '初診日要件、障害状態要件、保険料納付要件等を満たし、障害等級1級または2級に該当する方が対象です。',
    applicationPeriod: '通年（障害認定日以降等に請求）',
    description: '病気やけがにより法令で定める障害等級1級または2級に該当する場合に、国民年金から支給される年金です。子の加算が付く場合があります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>障害基礎年金は、国民年金加入中などに初診日がある病気やけがで、障害等級1級または2級に該当する場合に支給される年金です。</p>'
      },
      {
        heading: '年金額',
        content: '<p>令和8年4月分からの年金額は、1級が年額1,059,125円、2級が年額847,300円です。対象となる子がいる場合は子の加算があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>年金事務所または市区町村窓口で相談し、初診日証明、診断書、請求書等を準備します。初診日や加入制度により提出先が異なります。</p>'
      }
    ],
    officialUrl: 'https://www.nenkin.go.jp/service/jukyu/seido/shougainenkin/jukyu-yoken/20150514.html',
    sourceName: '日本年金機構 障害基礎年金の受給要件・請求時期・年金額',
    sourceUrls: ['https://www.nenkin.go.jp/service/jukyu/seido/shougainenkin/jukyu-yoken/20150514.html'],
    sourceNote: '日本年金機構公式ページで受給要件、請求時期、令和8年4月分からの年金額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyouiku-kunren-kyuufukin',
    title: '教育訓練給付制度',
    organization: '厚生労働省・ハローワーク',
    type: 'national',
    maxAmount: '講座区分により受講費用の20%から最大80%（上限あり）',
    maxAmountNum: 192,
    category: 'education',
    prefecture: '全国',
    tags: ['教育訓練給付', 'リスキリング', '雇用保険'],
    eligibility: '雇用保険の被保険者期間等の要件を満たし、厚生労働大臣指定の教育訓練講座を受講・修了する方が対象です。',
    applicationPeriod: '講座区分により受講前手続きまたは修了後申請が必要',
    description: '働く方の主体的な能力開発やキャリア形成を支援する雇用保険の給付制度です。一般、特定一般、専門実践の教育訓練給付があります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>教育訓練給付制度は、厚生労働大臣指定の教育訓練講座を受講した場合に、受講費用の一部を支給する雇用保険の給付制度です。</p>'
      },
      {
        heading: '給付率',
        content: '<p>一般教育訓練、特定一般教育訓練、専門実践教育訓練で給付率と上限額が異なります。専門実践教育訓練では要件により受講費用の最大80%が支給される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>講座区分により受講前のキャリアコンサルティングやジョブ・カード作成、受給資格確認が必要です。詳細はハローワークで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html',
    sourceName: '厚生労働省 教育訓練給付制度',
    sourceUrls: ['https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html'],
    sourceNote: '厚生労働省公式ページで教育訓練給付制度の講座区分、給付率、手続き概要を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shoubyou-teatekin',
    title: '傷病手当金',
    organization: '全国健康保険協会等の医療保険者',
    type: 'national',
    maxAmount: '支給開始日前12か月の平均標準報酬日額の3分の2相当',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['健康保険', '休業補償', '傷病手当金'],
    eligibility: '健康保険の被保険者が、業務外の病気やけがの療養のため働けず、給与を受けられないなどの要件を満たす場合に対象です。',
    applicationPeriod: '労務不能であった日ごとに、その翌日から2年以内',
    description: '業務外の病気やけがで働けない健康保険の被保険者に、生活保障として支給される制度です。国民健康保険の通常制度ではなく、加入する医療保険者に確認します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>傷病手当金は、健康保険の被保険者が業務外の病気やけがで仕事を休み、十分な給与を受けられない場合に支給される制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>1日あたりの支給額は、支給開始日前12か月の各月の標準報酬月額を平均した額を30で割った額の3分の2相当です。</p>'
      },
      {
        heading: '支給期間',
        content: '<p>支給期間は、支給開始日から通算して1年6か月です。請求権の時効は、労務不能であった日ごとにその翌日から2年です。</p>'
      }
    ],
    officialUrl: 'https://www.kyoukaikenpo.or.jp/benefit/injury_and_sickness_allowance/index.html',
    sourceName: '全国健康保険協会 傷病手当金',
    sourceUrls: [
      'https://www.kyoukaikenpo.or.jp/benefit/injury_and_sickness_allowance/index.html',
      'https://www.kyoukaikenpo.or.jp/application_form/benefit/001/index.html'
    ],
    sourceNote: '協会けんぽ公式ページで支給要件、支給額、支給期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koutou-gakkou-shuuryou-teido-nintei-shiken-hiyou-josei',
    title: 'ひとり親家庭高等学校卒業程度認定試験合格支援事業',
    organization: 'こども家庭庁・自治体',
    type: 'national',
    maxAmount: '通学等は最大30万円、通信制は最大15万円',
    maxAmountNum: 30,
    category: 'education',
    prefecture: '全国',
    tags: ['ひとり親家庭', '高卒認定', '学び直し'],
    eligibility: 'ひとり親家庭の親または子どもが、高等学校卒業程度認定試験の合格を目指して対象講座を受講する場合に対象です。所得要件等は自治体で確認します。',
    applicationPeriod: '通年または自治体の募集期間による。受講開始前の事前相談・申請が必要',
    description: 'ひとり親家庭の学び直しを支援するため、高等学校卒業程度認定試験の合格を目指す講座の受講費用を自治体が助成する事業です。制度名は「ひとり親家庭学び直し支援事業」として案内されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひとり親家庭の親または子どもが、高等学校卒業程度認定試験の合格を目指す講座を受講する場合に、受講費用の一部を支給する事業です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>こども家庭庁の公式ページでは、高卒認定講座について、通学または通学・通信併用の場合は最大30万円、通信制の場合は最大15万円と案内されています。制度を実施していない自治体では対象外です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>受講開始前に自治体のひとり親支援担当窓口へ相談し、対象講座や支給要件の確認を受けます。事前申請なしの受講は対象外となる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/hitori-oya/goukakushien',
    sourceName: 'こども家庭庁 ひとり親家庭等の自立支援',
    sourceUrls: ['https://www.cfa.go.jp/policies/hitori-oya/goukakushien'],
    sourceNote: 'こども家庭庁公式ページで、ひとり親家庭学び直し支援事業、高卒認定講座の上限額、制度未実施自治体では対象外であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shokugyou-kunren-ukekou-kyuufukin-kyuushokusha',
    title: '職業訓練受講給付金（求職者支援制度）',
    organization: '厚生労働省・ハローワーク',
    type: 'national',
    maxAmount: '月額10万円、通所手当は月上限42,500円、寄宿手当は月10,700円',
    maxAmountNum: 10,
    category: 'education',
    prefecture: '全国',
    tags: ['求職者支援制度', '職業訓練', 'ハローワーク'],
    eligibility: '雇用保険を受給できない求職者等が、ハローワークの支援指示を受けて職業訓練を受講し、収入・資産等の要件を満たす場合に対象です。',
    applicationPeriod: '通年（訓練開始前にハローワークで手続き）',
    description: '求職者支援制度の職業訓練受講給付金です。既存の別slugと同じ制度のため、URL互換維持のため同一内容の公式確認済みデータとして置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>求職者支援制度は、雇用保険を受給できない方等が無料の職業訓練を受講し、要件を満たす場合に生活支援の給付金を受けられる制度です。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>職業訓練受講手当として月額10万円、通所手当として月上限42,500円、寄宿手当として月10,700円が支給されます。収入、資産、出席率などの要件があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地を管轄するハローワークで求職申込み、制度説明、訓練申込み、支給申請を行います。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html',
    sourceName: '厚生労働省 求職者支援制度',
    sourceUrls: ['https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html'],
    sourceNote: '厚生労働省公式ページで制度概要、月額10万円の職業訓練受講給付金、通所手当、寄宿手当、ハローワーク手続きを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kaigo-shokuinn-shoguu-kaizen-joseikin',
    title: '介護職員等処遇改善加算',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '介護報酬の加算制度（事業所の加算区分・サービス種別により異なる）',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '全国',
    tags: ['介護職員', '処遇改善', '介護報酬'],
    eligibility: '介護職員等の処遇改善に取り組み、賃金改善計画やキャリアパス要件等を満たす介護サービス事業所が対象です。',
    applicationPeriod: '毎年度。計画書・実績報告書等を指定権者へ提出',
    description: '介護職員等の賃金改善を目的とする介護報酬の加算制度です。個人が直接申請する助成金ではなく、介護サービス事業所が届出を行う制度として修正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>介護職員等処遇改善加算は、介護職員等の賃金改善を目的に、介護サービス事業所が要件を満たして届出を行う介護報酬上の加算制度です。</p>'
      },
      {
        heading: '対象と金額',
        content: '<p>加算率や支給原資は、サービス種別、加算区分、事業所の賃金改善計画により異なります。個人に定額で直接支給される助成金ではありません。</p>'
      },
      {
        heading: '手続き',
        content: '<p>事業所は処遇改善計画書、体制届、実績報告書等を指定権者へ提出します。年度ごとの通知・様式を厚生労働省公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/shogu-kaizen/',
    sourceName: '厚生労働省 介護職員の処遇改善',
    sourceUrls: [
      'https://www.mhlw.go.jp/shogu-kaizen/',
      'https://www.mhlw.go.jp/shogu-kaizen/download/6_tsuuchi_kihontekikangaekata_jimushoritejun.pdf'
    ],
    sourceNote: '厚生労働省公式ページで介護職員等処遇改善加算の制度概要、届出、計画書・実績報告を確認。個人向け助成金ではないため金額断定を避けた。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
