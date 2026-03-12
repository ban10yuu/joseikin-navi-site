import { Grant } from '@/lib/types';

export const cityGrantsBatch50: Grant[] = [
  // ────────────────────────────────────────────────
  // 藤沢市（神奈川県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'fujisawa-childcare-subsidy',
    title: '藤沢市 保育料軽減制度',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['藤沢市', '保育料軽減', '子育て支援'],
    eligibility: '藤沢市内の認可保育所・認定こども園等に在園する児童の保護者',
    applicationPeriod: '通年（入園時に自動適用）',
    description: '藤沢市が実施する保育料軽減制度です。多子世帯の保育料負担を大幅に軽減し、子育てしやすい環境を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園・小規模保育事業等に在園する児童</span>の保育料を、きょうだいの人数に応じて軽減する制度です。</p><p>湘南の海と江の島を擁する藤沢市は、温暖な気候と都心へのアクセスの良さから子育て世帯に人気の街です。待機児童対策とあわせて保育料の負担軽減にも力を入れており、多子世帯の経済的負担を大きく和らげています。</p><p><span class="marker-green">国の制度に上乗せして藤沢市独自の軽減措置が設けられており、第2子は半額、第3子以降は無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>藤沢市内の認可保育施設に在園する児童の保護者が対象です。きょうだいの年齢に関わらず、生計を同一にする子どもの人数で判定されます。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料が半額</p><p>第3子以降：保育料が無料</p></div><p>保育料の軽減は入園時の手続きにより<strong>自動的に適用</strong>されます。きょうだいの在園状況に変更があった場合は、藤沢市役所子育て企画課へ届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子の保育料は<strong>通常額の50%に軽減</strong>され、第3子以降は保育料が全額免除となります。年間で数十万円の負担軽減になるケースもあります。</p><p><span class="marker">3歳児クラス以上は幼児教育・保育の無償化により保育料が無料</span>ですが、0〜2歳児クラスの住民税課税世帯が本制度の主な対象です。</p><div class="note-box">給食費や延長保育料、教材費などの実費負担は軽減の対象外です。また、認可外保育施設を利用する場合は別途「認可外保育施設利用助成」の制度をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-birth-bonus',
    title: '藤沢市 出産応援給付金',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['藤沢市', '出産応援', '給付金'],
    eligibility: '藤沢市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年',
    description: '藤沢市が実施する出産応援給付金です。妊娠届出時と出生届出後にそれぞれ給付金が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 出産応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円の合計10万円</span>を支給する制度です。</p><p>湘南エリアの中心都市として発展してきた藤沢市は、子育て世帯の流入が続く活気あるまちです。出産に伴う経済的な負担を軽減し、安心して出産・子育てに臨める環境づくりを進めています。</p><p><span class="marker-green">所得制限はなく、藤沢市に住むすべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>藤沢市に住民登録がある妊婦の方、および出産された方が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円を申請</p><p>出生届出後に面談 → 子育て応援給付金5万円を申請</p></div><p>藤沢市役所子ども健康課または各市民センターで面談を受けた後、申請書を提出します。<strong>面談の実施が給付の条件</strong>となっており、妊娠・出産に関する相談も同時に受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>妊娠届出時に5万円、出生届出後に5万円の合計10万円</strong>です。多胎妊娠の場合でも出産応援給付金は妊婦1人につき5万円です。</p><p><span class="marker">子育て応援給付金は子ども1人につき5万円のため、双子の場合は10万円</span>が支給されます。</p><div class="note-box">他の自治体で同種の給付金を受給済みの場合は、藤沢市での重複受給はできません。転入された方は前住所地での受給状況をご確認ください。申請期限は面談後おおむね3か月以内です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-housing-purchase',
    title: '藤沢市 住宅取得支援補助金',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['藤沢市', '住宅取得', '補助金'],
    eligibility: '藤沢市内に新たに住宅を取得し定住する子育て世帯・若年世帯',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '藤沢市が実施する住宅取得支援補助金です。市内に住宅を購入する子育て世帯・若年世帯に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 住宅取得支援補助金は、<span class="marker">市内に住宅を新規取得する子育て世帯や若年世帯</span>に対して費用の一部を補助する制度です。</p><p>藤沢市は江の島や湘南海岸に代表される魅力的な住環境を有し、東海道線・小田急線で都心へ1時間圏内というアクセスの良さから住宅需要が高い地域です。定住促進と地域の活性化を目的に、マイホーム取得を支援しています。</p><p>補助額は<strong>基本20万円</strong>で、市内業者を利用した場合は<span class="marker-green">10万円が加算され最大30万円</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>藤沢市内に住宅を新規取得（新築・中古）すること</p><p>申請者が40歳未満、または中学生以下の子どもがいる世帯</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>藤沢市役所住宅政策課に申請書、売買契約書の写し、住民票などを提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。転入届の提出と合わせて手続きするとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>基本20万円</strong>です。市内に本店を有する施工業者・不動産業者を利用した場合は10万円が加算されます。</p><p><span class="marker">年間の予算に限りがあるため、先着順で受付終了</span>となる場合があります。住宅購入を検討する段階での事前相談がおすすめです。</p><div class="highlight-box">藤沢市では住宅取得支援のほか、三世代同居・近居支援の補助制度もあります。親世帯が藤沢市内に住んでいる場合は加算措置が適用される場合がありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-infertility',
    title: '藤沢市 不妊治療費助成制度',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['藤沢市', '不妊治療', '助成金'],
    eligibility: '藤沢市に住所を有し、不妊治療を受けている夫婦（事実婚を含む）',
    applicationPeriod: '通年（治療終了日の翌日から1年以内）',
    description: '藤沢市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 不妊治療費助成制度は、<span class="marker">不妊治療（体外受精・顕微授精等）を受けている夫婦</span>に対して、保険適用後の自己負担分を助成する制度です。</p><p>藤沢市は子育てしやすい街づくりの一環として、妊娠前の段階からの支援を充実させています。2022年の不妊治療の保険適用拡大後も、高額な自己負担が残るケースがあるため、市独自の上乗せ助成を実施しています。</p><p><span class="marker-green">事実婚のカップルも対象で、所得制限は設けられていません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の一方または双方が藤沢市に住民登録がある方で、保険適用の不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>保険診療の領収書・明細書</p><p>夫婦の住民票・戸籍謄本</p></div><p>藤沢市役所子ども健康課に申請します。<strong>治療終了日の翌日から1年以内</strong>に手続きしてください。郵送での申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の<strong>自己負担分のうち、1回の治療あたり最大10万円</strong>です。年度内の回数制限はありますが複数回の申請が可能です。</p><p><span class="marker">男性不妊治療も助成の対象</span>で、精子凍結保存等の費用も含まれます。</p><div class="note-box">保険適用外の治療（先進医療を除く自由診療）は助成対象外です。神奈川県の不妊治療支援事業と併用できる場合がありますので、県の制度も合わせてご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-scholarship',
    title: '藤沢市 給付型奨学金制度',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '神奈川県',
    tags: ['藤沢市', '奨学金', '教育支援'],
    eligibility: '藤沢市に住所を有する高校生・大学生等で経済的に修学が困難な方',
    applicationPeriod: '毎年4月〜5月',
    description: '藤沢市が実施する給付型奨学金制度です。経済的に修学が困難な学生に対して月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対して、返還不要の奨学金を給付する制度です。</p><p>藤沢市は教育環境の充実に力を入れており、慶應義塾大学SFCをはじめ多くの教育機関が立地する文教都市としての側面も持っています。経済的な事情に関わらずすべての若者が学び続けられるよう、独自の給付型奨学金を運営しています。</p><p><span class="marker-green">返還不要のため、卒業後の経済的負担を心配せずに学業に専念できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>藤沢市に住所を有すること</p><p>高等学校・大学・短大・専門学校等に在学していること</p><p>経済的に修学が困難であること（所得基準あり）</p><p>学業成績が一定以上であること</p></div><p>毎年4月〜5月に藤沢市教育委員会教育総務課へ申請書を提出します。在学証明書、成績証明書、世帯の収入を証明する書類が必要です。</p><p><span class="marker">選考は書類審査により行われ、結果は6月頃に通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付月額は<strong>高校生1万5千円、大学生等3万円</strong>です。年間で最大36万円の給付となります。</p><p><span class="marker">他の給付型奨学金との併用はできない場合があります</span>が、日本学生支援機構の貸与型奨学金との併用は可能です。</p><div class="highlight-box">毎年度、学業の継続状況と成績の確認が行われます。休学・退学の場合は給付が停止されます。新入生だけでなく在学生も申請可能ですので、年度ごとにご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-sme-support',
    title: '藤沢市 中小企業経営力強化補助金',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['藤沢市', '中小企業', '補助金'],
    eligibility: '藤沢市内に事業所を有する中小企業者・個人事業主',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '藤沢市が実施する中小企業経営力強化補助金です。DX推進や販路拡大等の経営強化に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 中小企業経営力強化補助金は、<span class="marker">市内に事業所を有する中小企業のDX推進・販路拡大・生産性向上</span>の取り組みに対して費用を補助する制度です。</p><p>藤沢市には湘南エリアの商業・サービス業を支える多くの中小企業が集積しています。観光産業から製造業まで多様な業種の経営基盤強化を支援し、地域経済の持続的な発展を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">IT導入、ECサイト構築、展示会出展など幅広い取り組みが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる取り組み"><p>ITシステム・ソフトウェアの導入（DX推進）</p><p>ECサイト構築・Web広告等の販路拡大</p><p>展示会・商談会への出展</p><p>生産設備の導入・更新</p></div><p>藤沢市役所産業労働課に事業計画書と申請書を提出します。商工会議所の経営相談を受けた上での申請が推奨されています。</p><p><span class="marker">交付決定前に着手した事業は対象外</span>です。申請から交付決定まで約1か月を見込んでください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。1事業者につき年度内1回の申請に限られます。</p><p><span class="marker">国や県の類似補助金との併用はできません</span>が、融資制度との組み合わせは可能です。</p><div class="note-box">人件費や光熱水費などの経常経費は補助対象外です。完了報告書の提出が必要で、事業完了後に実績に基づいて補助金が交付されます。藤沢商工会議所の無料経営相談もご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-nursing-equipment',
    title: '藤沢市 介護用品支給事業',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '神奈川県',
    tags: ['藤沢市', '介護用品', '支給事業'],
    eligibility: '藤沢市に住所を有する要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '藤沢市が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 介護用品支給事業は、<span class="marker">在宅で要介護4または5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>藤沢市は高齢者が住み慣れた地域で安心して暮らし続けられるよう、在宅介護を支援するさまざまな施策を展開しています。介護用品の費用は家計への負担が大きいため、現物支給により介護者の経済的負担を軽減します。</p><p><span class="marker-green">市民税非課税世帯は月額6,250円相当まで、課税世帯も一定額の支給を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>藤沢市に住所があり、要介護4・5と認定された65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="支給対象品目"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋・清拭剤</p><p>防水シーツ</p></div><p>藤沢市役所介護保険課、または地域包括支援センターで申請を受け付けています。<strong>介護保険被保険者証</strong>と申請書が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給は月額上限額の範囲内でカタログから<strong>必要な介護用品を選択</strong>する方式です。市民税非課税世帯は月額6,250円相当、課税世帯は月額4,375円相当が上限です。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>となります。在宅での介護が前提です。</p><div class="note-box">支給は申請月の翌月からとなります。要介護度の変更や入院・入所等により対象外となった場合は届出が必要です。ケアマネジャーに相談の上、申請手続きを進めてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-elderly-support',
    title: '藤沢市 高齢者見守り支援事業',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '神奈川県',
    tags: ['藤沢市', '高齢者見守り', '生活支援'],
    eligibility: '藤沢市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '藤沢市が実施する高齢者見守り支援事業です。ひとり暮らしの高齢者に緊急通報装置の貸与や定期的な安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、緊急通報装置の貸与や安否確認を行う制度です。</p><p>藤沢市は湘南の温暖な気候に恵まれ、高齢者にとっても住みやすい街ですが、ひとり暮らしの高齢者が増加する中で、緊急時の対応や日常的な見守りの仕組みが重要になっています。</p><p><span class="marker-green">緊急通報装置はボタンひとつで消防や相談センターに通報でき、24時間365日対応</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>藤沢市に住民登録がある65歳以上のひとり暮らしの方、または高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="提供されるサービス"><p>緊急通報装置の貸与（ペンダント型も選択可能）</p><p>定期的な安否確認電話</p><p>緊急時の駆けつけ対応</p><p>健康・生活に関する相談対応</p></div><p>藤沢市役所高齢者支援課または地域包括支援センターで申請します。<strong>民生委員やケアマネジャーを通じた申請</strong>も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置の<strong>貸与料は無料</strong>です。市民税非課税世帯は通信費の負担もありません。課税世帯は月額数百円の通信費負担が生じる場合があります。</p><p><span class="marker">設置には固定電話回線が必要ですが、携帯電話回線対応の機器も選択可能</span>です。</p><div class="highlight-box">藤沢市では緊急通報装置のほか、配食サービスによる安否確認や、地域のボランティアによる訪問見守りなども実施しています。複数の見守り手段を組み合わせることで、より安心な生活環境をつくれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-seismic-diagnosis',
    title: '藤沢市 木造住宅耐震診断助成制度',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '診断費用の全額助成',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '神奈川県',
    tags: ['藤沢市', '耐震診断', '防災'],
    eligibility: '藤沢市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '藤沢市が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額助成する制度です。</p><p>藤沢市は相模湾に面しており、相模トラフを震源とする大地震のリスクが指摘されています。旧耐震基準の住宅は大規模地震で倒壊するおそれがあるため、まず耐震診断で住宅の安全性を確認することが防災の第一歩です。</p><p><span class="marker-green">診断費用は市が全額負担するため、自己負担なしで耐震性を確認できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>藤沢市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>在来軸組工法で建築されていること</p></div><p>藤沢市役所建築指導課に申請書を提出します。市が派遣する耐震診断士が無料で訪問し、診断を実施します。</p><p><span class="marker">診断は半日程度で完了し、後日診断結果報告書が届きます</span>。建物の図面があればご準備ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額藤沢市が負担</strong>するため、所有者の費用負担はありません。</p><p><span class="marker">耐震診断の結果、改修が必要と判定された場合は別途「耐震改修補助制度」（上限100万円）</span>を利用できます。</p><div class="note-box">鉄骨造やRC造の住宅、店舗併用住宅（店舗部分が半分以上）は対象外です。マンション等の共同住宅については別途「分譲マンション耐震診断補助」の制度がありますので、藤沢市の窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 横須賀市（神奈川県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'yokosuka-childcare-subsidy',
    title: '横須賀市 保育料軽減制度',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['横須賀市', '保育料軽減', '子育て支援'],
    eligibility: '横須賀市内の認可保育所・認定こども園等に在園する児童の保護者',
    applicationPeriod: '通年（入園時に自動適用）',
    description: '横須賀市が実施する保育料軽減制度です。多子世帯の保育料を大幅に軽減し子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園等に在園する児童</span>の保育料を、きょうだいの人数に応じて軽減する制度です。</p><p>三浦半島に位置する横須賀市は、ペリー来航の歴史やヴェルニー公園など港町としての魅力を持つ街です。人口減少対策として子育て支援を重点施策に掲げ、保育料の軽減をはじめとした手厚いサポートを提供しています。</p><p><span class="marker-green">横須賀市独自の上乗せ措置により、第2子は半額、第3子以降は無料</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横須賀市内の認可保育施設に在園する児童の保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料が半額</p><p>第3子以降：保育料が無料</p></div><p>保育料の軽減は<strong>入園時の手続きで自動的に適用</strong>されます。きょうだいの人数は、生計を同一にするすべての子どもで判定します。変更がある場合は横須賀市こども育成部へ届出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子の保育料は<strong>通常額の50%に軽減</strong>、第3子以降は全額免除されます。0〜2歳児クラスの住民税課税世帯が主な対象です。</p><p><span class="marker">3歳以上は幼児教育・保育無償化により保育料が無料</span>です。副食費（おかず代）は実費負担となりますが、年収360万円未満相当の世帯は免除されます。</p><div class="note-box">延長保育料、教材費、行事費等の実費負担は軽減対象外です。横須賀市は「子育てしやすいまちNo.1」を目指し、保育料軽減以外にも多彩な子育て支援策を用意しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-birth-bonus',
    title: '横須賀市 出産・子育て応援給付金',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['横須賀市', '出産応援', '給付金'],
    eligibility: '横須賀市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年',
    description: '横須賀市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出生届出後に5万円（子育て応援給付金）</span>を支給する制度です。</p><p>横須賀市は海に囲まれた自然豊かな環境と、横須賀中央を中心とした都市機能が共存する街です。安心して出産・子育てに臨めるよう、経済的支援と伴走型の相談支援を一体的に実施しています。</p><p><span class="marker-green">所得制限はなく、横須賀市在住のすべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横須賀市に住民登録がある妊婦および出産された方が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>妊娠届出時：保健師等との面談後、出産応援給付金5万円を申請</p><p>出産後：赤ちゃん訪問等での面談後、子育て応援給付金5万円を申請</p></div><p>横須賀市保健所健康づくり課または各行政センターで面談を受け、申請書を提出します。<strong>面談の受講が給付の条件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。</p><p><span class="marker">双子以上の場合は子育て応援給付金が子ども1人につき5万円</span>支給されるため、双子は合計15万円となります。</p><div class="highlight-box">横須賀市では給付金の支給にあわせて「伴走型相談支援」を実施しており、妊娠期から子育て期まで切れ目なく相談できる体制を整えています。不安なことがあれば面談時に何でもご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-newlywed-rent',
    title: '横須賀市 結婚新生活支援事業',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['横須賀市', '新婚世帯', '家賃補助'],
    eligibility: '横須賀市内に居住する新婚世帯（婚姻届提出から1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '横須賀市が実施する結婚新生活支援事業です。新婚世帯の住居費・引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 結婚新生活支援事業は、<span class="marker">新たに婚姻届を提出した世帯の住居費（家賃・敷金・礼金）や引越し費用</span>を補助する制度です。</p><p>横須賀市は人口減少対策の一環として若い世帯の定住を促進しており、結婚を機に横須賀市内で新生活を始める世帯を手厚く支援しています。軍港の街として独特の文化と活気を持つ横須賀での新生活を応援します。</p><p>補助額は<strong>夫婦ともに29歳以下の場合は上限60万円、それ以外は上限30万円</strong>です。<span class="marker-green">家賃だけでなく引越し費用も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届の提出日が申請年度内であること</p><p>夫婦の所得合計が500万円未満であること</p><p>横須賀市内に住居を確保していること</p><p>夫婦ともに婚姻日における年齢が39歳以下であること</p></div><p>横須賀市役所市民部地域コミュニティ課に申請書と添付書類を提出します。賃貸借契約書の写し、引越し費用の領収書などが必要です。</p><p><span class="marker">婚姻届の提出日から1年以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下の場合は<strong>上限60万円</strong>、30〜39歳の場合は<strong>上限30万円</strong>です。家賃、敷金、礼金、共益費、仲介手数料、引越し費用が対象です。</p><p><span class="marker">住宅購入費用は対象外</span>です。あくまで賃貸住宅の費用と引越し費用が補助対象となります。</p><div class="note-box">過去にこの事業の補助を受けた方は再度の申請はできません。また、生活保護を受給中の世帯は対象外となります。横須賀市は横須賀中央エリアのリノベーション物件の紹介なども行っていますので、住まい探しの際はご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-disability-medical',
    title: '横須賀市 重度障害者医療費助成制度',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['横須賀市', '障害者医療', '助成金'],
    eligibility: '横須賀市に住所を有する重度障害者手帳をお持ちの方',
    applicationPeriod: '通年',
    description: '横須賀市が実施する重度障害者医療費助成制度です。重度障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 重度障害者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A1・A2、精神障害者保健福祉手帳1級</span>のいずれかをお持ちの方の医療費自己負担分を助成する制度です。</p><p>横須賀市はバリアフリーの街づくりを推進しており、障害のある方が安心して医療を受けられる環境整備に取り組んでいます。この制度により、通院・入院・調剤の保険診療に係る自己負担が大幅に軽減されます。</p><p><span class="marker-green">所得制限はありますが、多くの対象者が自己負担なしで医療を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横須賀市に住民登録があり、以下のいずれかの手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害の区分"><p>身体障害者手帳 1級・2級</p><p>療育手帳 A1・A2</p><p>精神障害者保健福祉手帳 1級</p><p>身体障害者手帳3級かつ療育手帳B1の重複障害</p></div><p>横須賀市役所障害福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>本人名義の口座情報</strong>をご持参ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。神奈川県内の医療機関では福祉医療証を提示することで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦自己負担分を支払い後日償還払い</span>の手続きが必要です。</p><div class="note-box">65歳以上で新たに障害者手帳を取得した方には、後期高齢者医療制度への加入が求められる場合があります。保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。入院時の食事療養費の自己負担分も対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-school-lunch',
    title: '横須賀市 学校給食費補助制度',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '給食費の全額補助（第3子以降）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '神奈川県',
    tags: ['横須賀市', '学校給食', '教育支援'],
    eligibility: '横須賀市立小中学校に在籍する児童生徒の保護者（多子世帯等）',
    applicationPeriod: '毎年4月（年度当初に案内配布）',
    description: '横須賀市が実施する学校給食費補助制度です。多子世帯の第3子以降の給食費を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 学校給食費補助制度は、<span class="marker">多子世帯の経済的負担を軽減するため、第3子以降の学校給食費</span>を全額補助する制度です。</p><p>横須賀市は「子どもが輝くまち」を目指し、教育環境の充実に力を入れています。カレーの街としても知られる横須賀市の学校給食は栄養バランスに優れた人気のメニューが揃っており、その費用負担を軽減することで子育て世帯を支援しています。</p><p><span class="marker-green">所得制限はなく、第3子以降の給食費が全額補助</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横須賀市立小中学校に在籍する児童生徒のうち、保護者が扶養する18歳以下の子どもの中で第3子以降にあたる児童生徒が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>年度当初に学校を通じて案内が配布される</p><p>対象となる世帯に申請書が届く</p><p>必要事項を記入し学校へ提出</p><p>審査後、給食費の補助が適用される</p></div><p>横須賀市教育委員会学校教育部保健体育課が窓口です。<strong>年度途中の転入の場合も随時申請可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の学校給食費が<strong>全額補助</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円程度の負担軽減となります。</p><p><span class="marker">アレルギー等で給食を喫食しない場合は補助対象外</span>となります。</p><div class="highlight-box">就学援助制度の認定を受けている場合は、給食費が就学援助から支給されるため本制度との重複適用はありません。第1子・第2子についても、今後の制度拡充が検討されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-telework-bonus',
    title: '横須賀市 テレワーク環境整備補助金',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['横須賀市', 'テレワーク', '補助金'],
    eligibility: '横須賀市内に事業所を有する中小企業者でテレワーク環境を新たに整備する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '横須賀市が実施するテレワーク環境整備補助金です。テレワーク導入に必要な設備費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 テレワーク環境整備補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する際の費用</span>を補助する制度です。</p><p>横須賀市は東京都心からやや距離がある立地を逆手に取り、テレワーク推進によるワークライフバランスの向上を地域の強みに変えようとしています。三浦半島の自然環境の中で働ける「ワーケーション」の推進とあわせ、柔軟な働き方を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">VPN機器、Web会議システム、クラウドサービスの導入費用などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>VPN機器・ルーター等の通信機器</p><p>Web会議用のカメラ・マイク・ディスプレイ</p><p>クラウドサービス・グループウェアの初期導入費</p><p>セキュリティソフトの購入費</p></div><p>横須賀市役所経済部商業観光課に申請書と見積書を提出します。</p><p><span class="marker">テレワーク勤務規程の整備が申請の条件</span>となります。就業規則の変更について、社会保険労務士への相談も利用可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者につき1回限りの申請です。</p><p><span class="marker">パソコン本体やスマートフォンの購入費は対象外</span>です。あくまでテレワーク環境の構築に必要な通信機器やソフトウェアが対象となります。</p><div class="note-box">交付決定前に購入・契約した経費は補助対象外です。完了報告書と経費の領収書の提出が必要で、実績に基づいて補助金が交付されます。横須賀市産業振興財団でもテレワーク導入に関する無料相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-nursing-home-reform',
    title: '横須賀市 高齢者住宅改造助成事業',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '神奈川県',
    tags: ['横須賀市', '住宅改造', '介護支援'],
    eligibility: '横須賀市に住所を有する要介護・要支援認定を受けた高齢者がいる世帯',
    applicationPeriod: '通年',
    description: '横須賀市が実施する高齢者住宅改造助成事業です。介護のための住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 高齢者住宅改造助成事業は、<span class="marker">要介護・要支援認定を受けた高齢者が在宅で安全に暮らすための住宅バリアフリー改修</span>に対して費用を助成する制度です。</p><p>横須賀市は坂が多い地形のため、住宅内外の段差解消やバリアフリー化のニーズが特に高い地域です。介護保険の住宅改修費（上限20万円）に上乗せする形で、市独自の助成を行っています。</p><p><span class="marker-green">介護保険の住宅改修費と併用でき、合計で最大50万円の支援を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横須賀市に住民登録があり、要介護・要支援認定を受けた高齢者と同居する世帯が対象です。</p><div class="summary-box" data-title="対象工事の例"><p>手すりの設置</p><p>段差の解消（スロープ設置等）</p><p>浴室・トイレの改修</p><p>引き戸への取替え・床材の変更</p></div><p>横須賀市役所福祉部高齢福祉課またはケアマネジャーを通じて申請します。<strong>工事着手前に申請が必要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一定割合で、<strong>上限30万円</strong>です。所得に応じて助成率が異なります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）を利用した上で、さらに市の助成が受けられます</span>。両制度を合わせると最大50万円の支援となります。</p><div class="highlight-box">工事内容についてはケアマネジャーや理学療法士のアドバイスを受けることをおすすめします。身体状況に合った改修を行うことで、転倒リスクの軽減や介護負担の軽減につながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-energy-support',
    title: '横須賀市 省エネ設備導入助成制度',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '神奈川県',
    tags: ['横須賀市', '省エネ', '助成金'],
    eligibility: '横須賀市内の住宅に省エネ設備を設置する市民',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '横須賀市が実施する省エネ設備導入助成制度です。太陽光発電や蓄電池等の導入に最大15万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 省エネ設備導入助成制度は、<span class="marker">市内の住宅に太陽光発電システム・家庭用蓄電池・エネファーム等</span>の省エネ設備を導入する市民に助成金を交付する制度です。</p><p>横須賀市は2050年カーボンニュートラルの実現を目指しており、家庭部門のCO2排出削減を推進しています。三浦半島の自然環境を守りながら、環境に配慮した暮らしへの転換を支援しています。</p><p><span class="marker-green">複数の設備を同時に導入する場合は助成額を合算でき、最大15万円</span>を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と助成額"><p>太陽光発電システム：1kWあたり1万円（上限5万円）</p><p>家庭用蓄電池：一律5万円</p><p>エネファーム（家庭用燃料電池）：一律5万円</p><p>HEMS（エネルギー管理システム）：一律1万円</p></div><p>横須賀市役所環境政策部環境企画課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置前に申請が必要</span>です。交付決定後に工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は設備の種類ごとに定められており、<strong>複数設備の合計で最大15万円</strong>です。</p><p><span class="marker">リース契約による設置は助成対象外</span>です。自己所有の設備であることが条件となります。</p><div class="note-box">国の補助金（こどもエコすまい支援事業等）や神奈川県の補助金と併用できる場合があります。ただし、補助金の合計が設備費用を超える場合は調整されます。設置後10年間は設備を適切に維持管理する義務があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-bousai-equipment',
    title: '横須賀市 家庭用防災設備補助金',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '神奈川県',
    tags: ['横須賀市', '防災設備', '補助金'],
    eligibility: '横須賀市内に住所を有し、住宅に防災設備を設置する市民',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '横須賀市が実施する家庭用防災設備補助金です。感震ブレーカーや家具転倒防止器具等の設置費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 家庭用防災設備補助金は、<span class="marker">家庭に感震ブレーカー、家具転倒防止器具、ガラス飛散防止フィルム等</span>の防災設備を設置する費用を補助する制度です。</p><p>横須賀市は三浦半島に位置し、相模トラフによる地震や津波のリスクが指摘されています。家庭レベルでの防災対策を推進するため、個人で取り組める防災設備の導入を経済的に支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">高齢者世帯・障害者世帯は補助率が引き上げられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー（揺れを感知して自動的に電気を遮断）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>ガラス飛散防止フィルム</p><p>非常用飲料水貯水タンク</p></div><p>横須賀市役所市民安全部危機管理課に申請書と見積書を提出します。</p><p><span class="marker">設置前の申請が原則</span>ですが、感震ブレーカーについては購入後の申請も受け付けている場合があります。詳細は窓口にご確認ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。高齢者のみの世帯や障害者世帯は補助率が3分の2に引き上げられます。</p><p><span class="marker">1世帯につき年度内1回の申請に限られます</span>。複数の設備をまとめて申請することは可能です。</p><div class="note-box">補助対象は住宅に設置する防災設備に限られます。食料・飲料水の備蓄品や携帯ラジオ等の購入費は対象外です。横須賀市では町内会・自治会単位での防災訓練も積極的に支援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 富士市（静岡県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'fuji-city-childcare-subsidy',
    title: '富士市 保育料軽減制度',
    organization: '富士市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['富士市', '保育料軽減', '子育て支援'],
    eligibility: '富士市内の認可保育所・認定こども園等に在園する児童の保護者',
    applicationPeriod: '通年（入園時に自動適用）',
    description: '富士市が実施する保育料軽減制度です。多子世帯の保育料負担を軽減し子育てしやすい環境を整備します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園・小規模保育事業等に在園する児童</span>の保育料を、きょうだいの人数に応じて軽減する制度です。</p><p>富士山の南麓に広がる富士市は、製紙産業の街として知られるとともに、豊富な湧水や田子の浦の駿河湾越しの富士山の絶景が魅力です。子育て世帯の定住促進に向け、保育料の負担軽減に取り組んでいます。</p><p><span class="marker-green">第2子は半額、第3子以降は無料で、きょうだいの年齢制限なく算定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>富士市内の認可保育施設に在園する児童の保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料が半額</p><p>第3子以降：保育料が無料</p></div><p>保育料の軽減は<strong>入園申込時に自動的に適用</strong>されます。世帯構成の変更がある場合は、富士市役所こども未来課への届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子の保育料は<strong>50%に軽減</strong>、第3子以降は全額免除です。0〜2歳児クラスの住民税課税世帯が主な対象となります。</p><p><span class="marker">3歳以上は幼児教育・保育無償化により保育料が無料</span>です。</p><div class="note-box">給食費や延長保育料、教材費等の実費は軽減対象外です。富士市では企業主導型保育事業の整備も進めており、幅広い保育の選択肢を提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-birth-bonus',
    title: '富士市 出産応援給付金',
    organization: '富士市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['富士市', '出産応援', '給付金'],
    eligibility: '富士市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年',
    description: '富士市が実施する出産応援給付金です。妊娠届出時と出生届出後にそれぞれ給付金が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 出産応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円の合計10万円</span>を支給する制度です。</p><p>富士山のふもとに位置する富士市は、豊かな自然環境の中でのびのびと子育てができる街です。出産にかかる経済的負担を軽減するとともに、妊娠期から保健師等による伴走型の相談支援を行い、安心して出産を迎えられるようサポートしています。</p><p><span class="marker-green">所得制限はなく、富士市在住のすべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>富士市に住民登録がある妊婦および出産された方が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>妊娠届出時に保健師と面談 → 出産応援給付金5万円を申請</p><p>出生届出後に面談 → 子育て応援給付金5万円を申請</p></div><p>富士市フィランセ（健康増進課）または各地区まちづくりセンターで面談を受け、申請書を提出します。<strong>面談の実施が支給の条件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。</p><p><span class="marker">多胎妊娠の場合、子育て応援給付金は子ども1人につき5万円</span>が支給されます。</p><div class="highlight-box">富士市では出産応援ギフトとして地域の特産品カタログギフトの選択肢も用意されている場合があります。面談時に詳しい説明を受けてください。他の自治体で同種の給付金を受給済みの方は重複受給できません。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-housing-purchase',
    title: '富士市 マイホーム取得支援補助金',
    organization: '富士市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['富士市', '住宅取得', '補助金'],
    eligibility: '富士市内に住宅を新規取得し定住する若年世帯・子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '富士市が実施するマイホーム取得支援補助金です。市内に住宅を取得する若年・子育て世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 マイホーム取得支援補助金は、<span class="marker">市内に住宅を新規取得する若年世帯（40歳未満）や子育て世帯</span>に対して費用の一部を補助する制度です。</p><p>富士市は東海道新幹線の新富士駅を擁し、東京・名古屋へのアクセスも良好な住みやすい街です。雄大な富士山の眺望を楽しめる住環境は全国的にも高い評価を受けています。人口減少対策として、若い世帯のマイホーム取得を積極的に後押ししています。</p><p>基本補助額は<strong>30万円</strong>で、市外からの転入や市内業者の利用で加算され<span class="marker-green">最大50万円</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>富士市内に住宅を新規取得（新築・建売・中古）すること</p><p>申請者が40歳未満、または18歳以下の子どもがいる世帯</p><p>取得した住宅に5年以上定住する意思があること</p><p>市税の滞納がないこと</p></div><p>富士市役所住宅政策課に申請書、売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡し後1年以内の申請が必要</span>です。事前相談も受け付けていますので、住宅購入の検討段階でご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。市外からの転入（10万円加算）、市内業者の利用（10万円加算）により最大50万円となります。</p><p><span class="marker">年間の予算枠に限りがあり、先着順で受付終了</span>となります。年度初めのお申し込みがおすすめです。</p><div class="note-box">賃貸住宅への入居は対象外です。住宅ローン減税など国の制度と併用できますので、ファイナンシャルプランナーや金融機関に相談しながら総合的に検討しましょう。富士市では空き家バンクも運営しており、中古住宅の取得にもご活用いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-infertility',
    title: '富士市 不妊治療費助成制度',
    organization: '富士市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '静岡県',
    tags: ['富士市', '不妊治療', '助成金'],
    eligibility: '富士市に住所を有し、不妊治療を受けている夫婦（事実婚を含む）',
    applicationPeriod: '通年（治療終了日から1年以内）',
    description: '富士市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 不妊治療費助成制度は、<span class="marker">体外受精・顕微授精等の不妊治療を受けている夫婦</span>に対して、保険適用後の自己負担分を助成する制度です。</p><p>富士市は子どもを望むご夫婦を支援する施策を充実させています。不妊治療は保険適用後も高額な自己負担が発生することがあり、経済的な理由で治療を諦めることがないよう市独自の助成を行っています。</p><p><span class="marker-green">事実婚のカップルも対象で、治療回数の制限内で複数回の申請が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦のいずれかが富士市に住民登録がある方で、保険適用の不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の治療証明書</p><p>保険診療の領収書・明細書の写し</p><p>住民票・戸籍謄本</p></div><p>富士市フィランセ（健康増進課）に申請書類を提出します。<strong>治療終了日から1年以内</strong>に手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の<strong>自己負担分のうち、1回の治療あたり最大10万円</strong>です。</p><p><span class="marker">先進医療として実施される治療の自己負担分も助成対象</span>となる場合があります。</p><div class="note-box">保険適用外の自由診療は原則として助成対象外です。静岡県の不妊治療支援制度と併用できる場合がありますので、県の制度もあわせてご確認ください。治療に関する相談は富士市の不妊専門相談窓口でも受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-scholarship',
    title: '富士市 給付型奨学金制度',
    organization: '富士市',
    type: 'local',
    maxAmount: '月額最大2万円',
    maxAmountNum: 24,
    category: 'education',
    prefecture: '静岡県',
    tags: ['富士市', '奨学金', '教育支援'],
    eligibility: '富士市に住所を有する高校生・大学生等で経済的に修学が困難な方',
    applicationPeriod: '毎年4月〜5月',
    description: '富士市が実施する給付型奨学金制度です。経済的に修学が困難な学生に月額最大2万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対して返還不要の奨学金を給付する制度です。</p><p>富士市は製紙産業をはじめとするものづくりの街として発展してきた歴史があり、次世代を担う人材の育成に力を入れています。経済的な事情に左右されず、意欲ある若者が学び続けられるよう給付型の奨学金を設けています。</p><p><span class="marker-green">返還不要で、卒業後に借金を抱える心配がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>富士市に住民登録があること</p><p>高校・大学・短大・専門学校等に在学中であること</p><p>世帯の所得が基準額以下であること</p><p>学業成績が良好であること</p></div><p>毎年4月〜5月に富士市教育委員会教育総務課へ申請します。在学証明書、成績証明書、所得証明書等の提出が必要です。</p><p><span class="marker">書類審査と面接により選考が行われ、結果は6月頃に通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付月額は<strong>高校生1万円、大学生等2万円</strong>です。年間で最大24万円の給付となります。</p><p><span class="marker">他の給付型奨学金と併用できない場合があります</span>。貸与型奨学金との併用は可能です。</p><div class="highlight-box">毎年度、学業の継続状況が確認されます。休学・退学の場合は給付が停止されます。富士市では地元企業との連携によるインターンシップ支援も実施しており、キャリア形成と経済的支援の両面から学生をサポートしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-sme-support',
    title: '富士市 中小企業振興補助金',
    organization: '富士市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '静岡県',
    tags: ['富士市', '中小企業', '補助金'],
    eligibility: '富士市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '富士市が実施する中小企業振興補助金です。設備投資や販路開拓等の経営強化に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業の設備投資・販路開拓・DX推進</span>等の取り組みに対して費用を補助する制度です。</p><p>富士市は日本有数の製紙産業の集積地であり、近年は紙パルプ産業の技術を活かしたCNF（セルロースナノファイバー）の研究開発など、新産業創出にも取り組んでいます。市内中小企業の競争力強化を通じて、地域産業全体の活性化を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">製造業だけでなく全業種が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる取り組み"><p>生産設備・機械の導入・更新</p><p>販路開拓のための展示会出展・Web制作</p><p>ITシステム・DXツールの導入</p><p>新商品・新技術の開発</p></div><p>富士市役所産業政策課に事業計画書と申請書を提出します。富士市商工会議所の推薦書があると審査で有利になります。</p><p><span class="marker">交付決定前に着手した事業は補助対象外</span>です。事前の窓口相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。1事業者につき年度内1回の申請に限られます。</p><p><span class="marker">人件費・光熱水費等の経常経費は対象外</span>です。設備購入費、広告宣伝費、外注加工費等が主な対象経費となります。</p><div class="note-box">国や県の類似補助金との併用はできません。完了報告書と領収書等の証拠書類の提出が必要です。富士市産業支援センター「f-Biz」では無料の経営相談も受け付けていますので、事業計画の策定段階からご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-nursing-equipment',
    title: '富士市 介護用品支給事業',
    organization: '富士市',
    type: 'local',
    maxAmount: '月額最大6,000円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '静岡県',
    tags: ['富士市', '介護用品', '支給事業'],
    eligibility: '富士市に住所を有する要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '富士市が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対して、紙おむつ等の介護用品を現物支給する制度です。</p><p>富士市は富士山の伏流水に恵まれた自然豊かな街で、高齢者が住み慣れた地域で安心して暮らし続けられるよう在宅介護の支援に力を入れています。日常的に必要な介護用品を支給することで、介護する家族の経済的・身体的負担を軽減します。</p><p><span class="marker-green">市民税非課税世帯は月額6,000円相当まで、課税世帯も一定額の支給が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>富士市に住民登録があり、要介護4・5の65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="支給対象品目"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤・ウェットシート</p></div><p>富士市役所介護保険課または地域包括支援センターで申請します。<strong>介護保険被保険者証と主治医意見書</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額上限内で<strong>カタログから必要な介護用品を選択</strong>して受け取る方式です。配送料は無料です。</p><p><span class="marker">入院中や介護施設入所中の方は対象外</span>となります。退院後、在宅介護に移行した時点で申請できます。</p><div class="note-box">支給は申請の翌月分からとなります。要介護度が変更された場合や入院・入所した場合は届出が必要です。ケアマネジャーと相談しながら必要な用品をお選びください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-elderly-support',
    title: '富士市 高齢者外出支援事業',
    organization: '富士市',
    type: 'local',
    maxAmount: 'タクシー券年間最大24,000円分',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '静岡県',
    tags: ['富士市', '高齢者外出支援', '生活支援'],
    eligibility: '富士市に住所を有する75歳以上で公共交通の利用が困難な方',
    applicationPeriod: '通年',
    description: '富士市が実施する高齢者外出支援事業です。移動手段に困難のある高齢者にタクシー利用券を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 高齢者外出支援事業は、<span class="marker">75歳以上で公共交通機関の利用が困難な高齢者</span>に対して、タクシー利用券を交付する制度です。</p><p>富士市は南北に長い市域を持ち、特に北部の山間地域では公共交通が限られています。買い物や通院など日常生活に必要な外出を支援することで、高齢者の社会参加と生活の質の維持を目指しています。</p><p><span class="marker-green">年間最大24,000円分のタクシー利用券が交付されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>富士市に住民登録がある75歳以上の方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>運転免許証を保有していない方</p><p>運転免許証を自主返納した方</p><p>身体的な理由で公共交通の利用が困難な方</p></div><p>富士市役所高齢者支援課の窓口で申請します。<strong>身分証明書と印鑑</strong>をご持参ください。運転免許自主返納の場合は運転経歴証明書も必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>タクシー利用券は<strong>1枚500円分で、年間最大48枚（24,000円分）</strong>が交付されます。市内のタクシー会社で利用できます。</p><p><span class="marker">1回の乗車で複数枚の利用券を使用できます</span>が、お釣りは出ません。</p><div class="highlight-box">富士市ではタクシー利用券のほか、コミュニティバスの運行やデマンドタクシーの実証実験なども行っています。お住まいの地域の交通手段については、高齢者支援課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-seismic-diagnosis',
    title: '富士市 木造住宅耐震診断補助事業',
    organization: '富士市',
    type: 'local',
    maxAmount: '診断費用の全額補助',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '静岡県',
    tags: ['富士市', '耐震診断', '防災'],
    eligibility: '富士市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '富士市が実施する木造住宅耐震診断補助事業です。旧耐震基準の木造住宅の耐震診断費用を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 木造住宅耐震診断補助事業は、<span class="marker">1981年5月31日以前に建築された木造住宅</span>の耐震診断費用を全額補助する制度です。</p><p>富士市は南海トラフ巨大地震の想定被害地域に含まれており、富士山の噴火リスクとあわせて防災対策が重要な課題です。静岡県は全国でも先進的な耐震化施策を推進しており、富士市も旧耐震基準住宅の耐震性確認を強力に支援しています。</p><p><span class="marker-green">診断費用は全額市が負担するため、自己負担ゼロで耐震性を確認できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>富士市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された建物であること</p><p>2階建て以下の在来軸組工法であること</p><p>所有者自らが居住していること</p></div><p>富士市役所建築指導課に申請書を提出します。市が委託する耐震診断士が無料で訪問診断を実施します。</p><p><span class="marker">診断には建物の図面があると正確な判定ができます</span>が、図面がない場合も現地調査で対応可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額富士市が負担</strong>し、所有者の自己負担はありません。</p><p><span class="marker">診断結果が基準未満の場合は「耐震改修補助制度」（上限100万円）</span>の利用が可能です。さらに建替えの場合も補助制度があります。</p><div class="note-box">静岡県は「TOUKAI-0」プロジェクトとして耐震化を県全体で推進しています。富士市でも耐震化率の向上を重点目標に掲げており、診断から改修まで一貫した支援体制を整えています。鉄骨造やRC造の住宅は本制度の対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 豊橋市（愛知県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'toyohashi-childcare-subsidy',
    title: '豊橋市 保育料軽減制度',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['豊橋市', '保育料軽減', '子育て支援'],
    eligibility: '豊橋市内の認可保育所・認定こども園等に在園する児童の保護者',
    applicationPeriod: '通年（入園時に自動適用）',
    description: '豊橋市が実施する保育料軽減制度です。多子世帯の保育料負担を軽減し子育てしやすい環境を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園等に在園する児童</span>の保育料を、きょうだいの人数に応じて軽減する制度です。</p><p>東三河地域の中心都市である豊橋市は、路面電車が走る情緒ある街並みと、温暖な気候による農業（キャベツ・大葉の生産量日本一）が特徴です。子育て世帯の定住を促進するため、保育料の負担軽減を積極的に行っています。</p><p><span class="marker-green">第2子は半額、第3子以降は無料で、きょうだいの年齢制限なく判定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊橋市内の認可保育施設に在園する児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料が半額</p><p>第3子以降：保育料が無料</p></div><p>保育料の軽減は<strong>入園時の手続きで自動適用</strong>されます。きょうだい構成に変更があった場合は、豊橋市こども未来部保育課へ届出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子の保育料は<strong>50%に軽減</strong>、第3子以降は全額免除されます。主に0〜2歳児クラスの住民税課税世帯が対象となります。</p><p><span class="marker">3歳以上は幼児教育・保育無償化により保育料が無料</span>です。</p><div class="note-box">給食費・延長保育料・教材費などの実費は軽減対象外です。豊橋市では「のんほいパーク」をはじめとした子育て関連施設の割引制度なども充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-birth-bonus',
    title: '豊橋市 出産・子育て応援給付金',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['豊橋市', '出産応援', '給付金'],
    eligibility: '豊橋市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年',
    description: '豊橋市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円の合計10万円</span>を支給する制度です。</p><p>豊橋市は三河湾に面した温暖な気候と、充実した医療機関のある子育てしやすい街です。出産に伴う経済的負担を軽減し、妊娠期から子育て期にかけて切れ目のない支援を提供しています。</p><p><span class="marker-green">所得制限はなく、豊橋市在住のすべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊橋市に住民登録がある妊婦および出産された方が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円を申請</p><p>出産後に面談（赤ちゃん訪問等） → 子育て応援給付金5万円を申請</p></div><p>豊橋市保健所健康増進課またはこども保健課で面談を受け、申請書を提出します。<strong>面談の受講が給付の条件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。</p><p><span class="marker">多胎の場合は子育て応援給付金が子ども1人あたり5万円</span>支給されます。双子であれば合計15万円です。</p><div class="note-box">他の自治体で同種の給付金を受給済みの場合は重複受給できません。豊橋市では面談時に子育て支援情報の提供や相談対応も行っており、妊娠・出産・子育てに関する不安を解消する機会となっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-newlywed-rent',
    title: '豊橋市 結婚新生活支援事業',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['豊橋市', '新婚世帯', '家賃補助'],
    eligibility: '豊橋市内で新生活を始める新婚世帯（婚姻届提出から1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '豊橋市が実施する結婚新生活支援事業です。新婚世帯の住居費や引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 結婚新生活支援事業は、<span class="marker">新婚世帯の住居費（家賃・敷金・礼金）や引越し費用</span>を補助する制度です。</p><p>豊橋市は東三河の中心都市として商業・文化の拠点であり、路面電車が走るコンパクトで住みやすい街です。若い世帯の定住を促進し、地域の活力維持を図るため、結婚を契機とした新生活のスタートを経済的に支援しています。</p><p><strong>夫婦ともに29歳以下の場合は上限60万円</strong>、それ以外は上限30万円です。<span class="marker-green">家賃だけでなく引越し費用も補助対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届の提出日が申請年度内であること</p><p>夫婦の所得合計が500万円未満であること</p><p>豊橋市内に住居を確保していること</p><p>夫婦ともに婚姻日時点で39歳以下であること</p></div><p>豊橋市役所市民協創部まちなか活性課に申請書と添付書類を提出します。賃貸借契約書、引越し費用の領収書が必要です。</p><p><span class="marker">婚姻届提出日から1年以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下は<strong>上限60万円</strong>、30〜39歳は<strong>上限30万円</strong>です。家賃、敷金、礼金、共益費、仲介手数料、引越し費用が対象となります。</p><p><span class="marker">住宅の購入費用は本事業の対象外</span>です。賃貸住宅の費用に限られます。</p><div class="highlight-box">豊橋市では「まちなか居住」を推進しており、駅周辺への居住を選択した場合に加算措置がある場合があります。新生活の住まい探しには豊橋市の空き家バンクもご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-disability-medical',
    title: '豊橋市 障害者医療費助成制度',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['豊橋市', '障害者医療', '助成金'],
    eligibility: '豊橋市に住所を有し、重度障害者手帳をお持ちの方',
    applicationPeriod: '通年',
    description: '豊橋市が実施する障害者医療費助成制度です。重度障害のある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 障害者医療費助成制度は、<span class="marker">身体障害者手帳1〜3級、療育手帳A・B判定、精神障害者保健福祉手帳1・2級</span>のいずれかをお持ちの方の医療費自己負担分を助成する制度です。</p><p>豊橋市は愛知県の障害者医療費助成制度に上乗せする形で、独自の助成基準を設けています。障害のある方が経済的な心配なく必要な医療を受けられるよう、手厚い支援を行っています。</p><p><span class="marker-green">愛知県内の医療機関では受給者証を提示するだけで窓口負担がなくなります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊橋市に住民登録があり、以下のいずれかの手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害の区分"><p>身体障害者手帳 1〜3級</p><p>療育手帳 A判定・B判定</p><p>精神障害者保健福祉手帳 1・2級</p><p>自閉症状群と診断された方</p></div><p>豊橋市役所障害福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>本人名義の口座情報</strong>をご持参ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。通院・入院・調剤すべてが対象です。</p><p><span class="marker">愛知県外の医療機関で受診した場合は、一旦自己負担分を支払い後日償還払い</span>の手続きが必要です。</p><div class="note-box">所得制限があり、一定以上の所得がある方は助成対象外となる場合があります。保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。入院時の食事代の自己負担についても別途取り扱いがありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-school-lunch',
    title: '豊橋市 学校給食費助成事業',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額助成',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '愛知県',
    tags: ['豊橋市', '学校給食', '教育支援'],
    eligibility: '豊橋市立小中学校に在籍する児童生徒の保護者（多子世帯）',
    applicationPeriod: '毎年4月（年度当初に案内配布）',
    description: '豊橋市が実施する学校給食費助成事業です。多子世帯の第3子以降の給食費を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 学校給食費助成事業は、<span class="marker">多子世帯の経済的負担を軽減するため、第3子以降の学校給食費</span>を全額助成する制度です。</p><p>豊橋市は地元農産物を活かした「食育」にも力を入れており、学校給食では地場産のキャベツや大葉などを積極的に使用しています。栄養バランスに優れた給食を子どもたちが安心して食べられるよう、多子世帯の給食費負担を軽減しています。</p><p><span class="marker-green">所得制限はなく、第3子以降の給食費が全額助成</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊橋市立小中学校に在籍する児童生徒のうち、18歳以下のきょうだいの中で第3子以降にあたる方が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>年度当初に学校を通じて制度の案内が配布される</p><p>対象世帯は申請書を記入して学校へ提出</p><p>豊橋市教育委員会で審査後、給食費の助成が適用される</p></div><p>豊橋市教育委員会保健給食課が窓口です。<strong>年度途中の転入も随時受付</strong>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の学校給食費が<strong>全額助成</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円程度の負担軽減になります。</p><p><span class="marker">アレルギー等で給食を喫食しない日がある場合は、その分は助成対象外</span>となります。</p><div class="note-box">就学援助制度の認定を受けている世帯は、就学援助から給食費が支給されるため本制度との重複適用はありません。豊橋市では今後の給食費無償化の拡大も検討されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-telework-bonus',
    title: '豊橋市 テレワーク導入支援補助金',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['豊橋市', 'テレワーク', '補助金'],
    eligibility: '豊橋市内に事業所を有する中小企業者でテレワークを新たに導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '豊橋市が実施するテレワーク導入支援補助金です。テレワーク環境の構築費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 テレワーク導入支援補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに構築する際の設備・システム導入費用</span>を補助する制度です。</p><p>豊橋市は製造業を中心とした産業が盛んですが、事務部門や営業部門のテレワーク化を推進することで、多様な働き方の実現と人材確保を支援しています。東三河地域の企業の働き方改革を後押しする制度です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">クラウドサービスの初期導入費やセキュリティ対策費も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>VPN機器・Wi-Fiルーター等の通信設備</p><p>Web会議用のカメラ・マイク・スピーカー</p><p>クラウドサービス・グループウェアの初期費用</p><p>セキュリティソフト・UTM機器の導入費</p></div><p>豊橋市役所産業部商工業振興課に申請書と見積書を提出します。</p><p><span class="marker">テレワーク勤務に関する社内規程の整備が条件</span>です。申請前に窓口で事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者1回限りの申請です。</p><p><span class="marker">パソコン・タブレット等の端末購入費は対象外</span>です。通信環境の構築やセキュリティ対策にかかる費用が中心となります。</p><div class="highlight-box">豊橋市では市内にコワーキングスペースの整備も進めており、テレワークの拠点としても活用できます。補助金の申請に必要な事業計画の策定については、豊橋商工会議所で無料相談を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-nursing-home-reform',
    title: '豊橋市 高齢者住宅改造助成事業',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '愛知県',
    tags: ['豊橋市', '住宅改造', '介護支援'],
    eligibility: '豊橋市に住所を有する要介護・要支援認定を受けた高齢者がいる世帯',
    applicationPeriod: '通年',
    description: '豊橋市が実施する高齢者住宅改造助成事業です。介護のためのバリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 高齢者住宅改造助成事業は、<span class="marker">要介護・要支援認定を受けた高齢者が安全に在宅生活を続けるための住宅バリアフリー改修</span>に費用を助成する制度です。</p><p>豊橋市は超高齢社会に対応するため、住み慣れた自宅での生活継続を支援する「地域包括ケアシステム」の構築を進めています。介護保険の住宅改修費に加え、市独自の上乗せ助成を行うことで、より安全な住環境の整備を後押ししています。</p><p><span class="marker-green">介護保険の住宅改修費（上限20万円）と合わせて最大50万円の支援が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊橋市に住民登録があり、要介護・要支援認定を受けた高齢者がいる世帯が対象です。</p><div class="summary-box" data-title="対象工事の例"><p>手すりの設置（廊下・階段・浴室・トイレ等）</p><p>段差の解消（スロープ設置・床のかさ上げ等）</p><p>滑り防止のための床材変更</p><p>引き戸への取替え・洋式便器への取替え</p></div><p>豊橋市役所長寿介護課または担当ケアマネジャーを通じて申請します。<strong>工事着手前の申請が必須</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一定割合で、<strong>上限30万円</strong>です。所得に応じて助成率が変わります。</p><p><span class="marker">介護保険の住宅改修費と併用でき、合計で最大50万円</span>の支援となります。</p><div class="note-box">ケアマネジャーや理学療法士のアドバイスを受け、身体状況に合った改修を計画することが重要です。改修後は完了届と工事写真の提出が必要です。新築・増築工事や、介護とは直接関係のない改修は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-energy-support',
    title: '豊橋市 家庭用省エネ設備導入補助金',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '愛知県',
    tags: ['豊橋市', '省エネ', '補助金'],
    eligibility: '豊橋市内の住宅に省エネ設備を導入する市民',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '豊橋市が実施する家庭用省エネ設備導入補助金です。太陽光発電や蓄電池等の設置に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 家庭用省エネ設備導入補助金は、<span class="marker">市内の住宅に太陽光発電システム・家庭用蓄電池・V2H機器等</span>の省エネ設備を導入する市民に補助金を交付する制度です。</p><p>豊橋市は日照時間が長く、太陽光発電に適した地域です。2050年カーボンニュートラルの実現に向けて、家庭部門のエネルギー消費削減を推進しており、再生可能エネルギーの活用を積極的に支援しています。</p><p><span class="marker-green">複数設備の同時導入で助成額が加算され、最大15万円</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり1.5万円（上限6万円）</p><p>家庭用蓄電池：一律5万円</p><p>V2H（電気自動車充放電設備）：一律5万円</p><p>エネファーム：一律3万円</p></div><p>豊橋市役所環境部環境政策課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置工事前に申請が必要</span>です。交付決定を受けてから工事に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備の種類ごとに補助額が定められており、<strong>複数設備の合計で最大15万円</strong>です。</p><p><span class="marker">リース契約による設置や中古設備は対象外</span>です。新品を購入・設置する場合に限られます。</p><div class="note-box">国の補助金や愛知県の補助金と併用できる場合がありますが、合計額が設備費用を超える場合は調整されます。設置後は適切な維持管理が求められ、処分制限期間（法定耐用年数）内の転売・廃棄は補助金返還の対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-bousai-equipment',
    title: '豊橋市 家庭防災対策補助金',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '愛知県',
    tags: ['豊橋市', '防災対策', '補助金'],
    eligibility: '豊橋市内に住所を有し、住宅に防災設備を設置する市民',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '豊橋市が実施する家庭防災対策補助金です。感震ブレーカーや家具固定器具等の設置費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 家庭防災対策補助金は、<span class="marker">感震ブレーカー・家具転倒防止器具・ガラス飛散防止フィルム等</span>の防災設備を家庭に設置する費用を補助する制度です。</p><p>豊橋市は南海トラフ巨大地震の想定被害地域に含まれており、家庭レベルでの防災対策の重要性が高まっています。特に通電火災を防ぐ感震ブレーカーの設置や、家具の転倒防止措置は命を守る基本的な対策として推奨されています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">65歳以上のみの世帯は補助率が引き上げられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>感震ブレーカー（分電盤型・コンセント型）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>ガラス飛散防止フィルム</p><p>雨水貯留タンク</p></div><p>豊橋市役所防災危機管理課に申請書と見積書を提出します。</p><p><span class="marker">設置前の申請が必要</span>です。交付決定後に設置工事を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。高齢者のみ世帯は対象経費の3分の2まで補助されます。</p><p><span class="marker">1世帯につき年度内1回の申請</span>に限られます。複数の設備をまとめて申請できます。</p><div class="highlight-box">豊橋市では自主防災組織（町内会単位）での防災訓練も盛んに行われています。個人の防災対策とあわせて、地域での助け合いの体制づくりにもご参加ください。防災設備の選び方について市の出前講座も利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 岡崎市（愛知県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'okazaki-childcare-subsidy',
    title: '岡崎市 保育料軽減制度',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['岡崎市', '保育料軽減', '子育て支援'],
    eligibility: '岡崎市内の認可保育所・認定こども園等に在園する児童の保護者',
    applicationPeriod: '通年（入園時に自動適用）',
    description: '岡崎市が実施する保育料軽減制度です。多子世帯の保育料を大幅に軽減し子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園等に在園する児童</span>の保育料を、きょうだいの人数に応じて軽減する制度です。</p><p>徳川家康公生誕の地として知られる岡崎市は、歴史と文化が息づく西三河の中心都市です。岡崎城を中心とした城下町の風情を残しつつ、子育て支援施策の充実により若い世帯にも人気のある街となっています。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は無料で、きょうだいの年齢制限なく算定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡崎市内の認可保育施設に在園する児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料が半額</p><p>第3子以降：保育料が無料</p></div><p>保育料の軽減は<strong>入園時の手続きにより自動適用</strong>されます。きょうだいの人数変更がある場合は、岡崎市こども部保育課へ届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子は保育料が<strong>50%に軽減</strong>、第3子以降は全額免除です。0〜2歳児クラスの住民税課税世帯が主な対象です。</p><p><span class="marker">3歳以上は幼児教育・保育無償化により保育料が無料</span>です。</p><div class="note-box">給食費・延長保育料・教材費等の実費は軽減の対象外です。岡崎市では「おかざきっ子プラン」として総合的な子育て支援計画を策定しており、保育料軽減はその柱のひとつです。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-birth-bonus',
    title: '岡崎市 出産・子育て応援給付金',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['岡崎市', '出産応援', '給付金'],
    eligibility: '岡崎市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年',
    description: '岡崎市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円の合計10万円</span>を支給する制度です。</p><p>岡崎市は八丁味噌の発祥地として知られ、矢作川沿いの豊かな自然と都市機能が調和した住みやすい街です。すべての妊婦・子育て家庭が安心して出産・育児に臨めるよう、経済的支援と相談支援を一体的に提供しています。</p><p><span class="marker-green">所得制限はなく、岡崎市在住のすべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡崎市に住民登録がある妊婦および出産された方が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>妊娠届出時に保健師との面談 → 出産応援給付金5万円を申請</p><p>出産後に面談（赤ちゃん訪問等） → 子育て応援給付金5万円を申請</p></div><p>岡崎市保健所または各地域の保健センターで面談を受け、申請書を提出します。<strong>面談の実施が給付の条件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。</p><p><span class="marker">多胎の場合、子育て応援給付金は子ども1人につき5万円</span>が支給されます。</p><div class="highlight-box">岡崎市では出産応援給付金の支給と合わせて「おかざき子育てナビ」による情報提供も行っています。妊娠・出産・子育てに関するさまざまなサービスをスマートフォンで簡単に検索できますのでご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-housing-purchase',
    title: '岡崎市 住宅取得支援補助金',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['岡崎市', '住宅取得', '補助金'],
    eligibility: '岡崎市内に住宅を新規取得し定住する若年世帯・子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '岡崎市が実施する住宅取得支援補助金です。市内に住宅を購入する若年・子育て世帯に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 住宅取得支援補助金は、<span class="marker">市内に住宅を新規取得する若年世帯（40歳未満）や子育て世帯</span>に対して費用の一部を補助する制度です。</p><p>岡崎市は名古屋市へのアクセスが良好で、岡崎公園や東公園など緑豊かな都市公園が充実した住環境が魅力です。再開発が進む岡崎駅周辺を中心に住宅需要が高まっており、若い世帯のマイホーム取得を積極的に支援しています。</p><p>基本補助額は<strong>20万円</strong>で、市外からの転入加算や三世代同居加算を含め<span class="marker-green">最大40万円</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>岡崎市内に住宅を新規取得（新築・中古）すること</p><p>申請者が40歳未満、または18歳以下の子どもがいる世帯</p><p>取得した住宅に5年以上定住する意思があること</p><p>市税の滞納がないこと</p></div><p>岡崎市役所住宅課に申請書、売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内の申請が必要</span>です。事前の窓口相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>です。市外からの転入（10万円加算）、三世代同居・近居（10万円加算）により最大40万円です。</p><p><span class="marker">年間予算に限りがあるため、先着順で受付終了</span>となります。年度初めのお申し込みを推奨します。</p><div class="note-box">賃貸住宅への入居は対象外です。住宅ローン減税等の国の制度と併用可能です。岡崎市では中心市街地の活性化に向けた「まちなか居住促進」施策も展開していますので、駅周辺での住宅取得を検討中の方はあわせてご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-infertility',
    title: '岡崎市 不妊治療費助成制度',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['岡崎市', '不妊治療', '助成金'],
    eligibility: '岡崎市に住所を有し、不妊治療を受けている夫婦（事実婚を含む）',
    applicationPeriod: '通年（治療終了日の翌日から1年以内）',
    description: '岡崎市が実施する不妊治療費助成制度です。保険適用後の自己負担分に最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 不妊治療費助成制度は、<span class="marker">体外受精・顕微授精等の不妊治療を受けている夫婦</span>に対し、保険適用後の自己負担分を助成する制度です。</p><p>岡崎市は家康公が生まれた城下町として「家族」の大切さを受け継ぐ街です。子どもを望む夫婦が経済的な理由で治療を断念することがないよう、市独自の助成を行い、希望をつなぐ支援を提供しています。</p><p><span class="marker-green">事実婚のカップルも対象で、所得制限は設けられていません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦のいずれかが岡崎市に住民登録がある方で、保険適用の不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の治療証明書</p><p>保険診療の領収書・明細書の写し</p><p>夫婦の住民票</p></div><p>岡崎市保健所健康増進課に申請書類を提出します。<strong>治療終了日の翌日から1年以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の<strong>自己負担分のうち、1回あたり最大10万円</strong>です。年度内の回数制限内で複数回申請可能です。</p><p><span class="marker">男性不妊治療（精液検査・手術等）も助成対象</span>に含まれます。</p><div class="note-box">自由診療（保険適用外の治療）は原則助成対象外です。愛知県の不妊治療費助成事業と併用できる場合がありますので、県の制度もご確認ください。岡崎市保健所では不妊に関する専門相談も無料で受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-scholarship',
    title: '岡崎市 給付型奨学金制度',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '愛知県',
    tags: ['岡崎市', '奨学金', '教育支援'],
    eligibility: '岡崎市に住所を有する高校生・大学生等で経済的に修学が困難な方',
    applicationPeriod: '毎年4月〜5月',
    description: '岡崎市が実施する給付型奨学金制度です。経済的に修学が困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に返還不要の奨学金を給付する制度です。</p><p>岡崎市は古くから「学びの街」として知られ、徳川家康公の教育方針に由来する「大樹寺の教え」の精神が息づいています。愛知教育大学をはじめとした教育機関も立地しており、次世代の人材育成に力を入れています。</p><p><span class="marker-green">返還不要の給付型で、卒業後の返済負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>岡崎市に住民登録があること</p><p>高校・大学・短大・専門学校に在学中であること</p><p>世帯の所得が基準額以下であること</p><p>学業に真摯に取り組んでいること</p></div><p>毎年4月〜5月に岡崎市教育委員会総務課へ申請します。在学証明書、成績証明書、所得証明書の提出が必要です。</p><p><span class="marker">書類審査により選考され、結果は6月頃に通知</span>されます。新入生・在学生とも申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付月額は<strong>高校生1万5千円、大学生等3万円</strong>です。年間で最大36万円の給付となります。</p><p><span class="marker">他の給付型奨学金との併用は制限される場合があります</span>が、貸与型奨学金との併用は可能です。</p><div class="highlight-box">毎年度の学業継続状況の確認があり、休学・退学時は給付停止となります。岡崎市では「将来の岡崎を支える人材を育成する」という理念のもと、Uターン就職した場合の奨学金返還支援制度も別途用意しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-sme-support',
    title: '岡崎市 中小企業経営革新補助金',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['岡崎市', '中小企業', '補助金'],
    eligibility: '岡崎市内に事業所を有する中小企業者・個人事業主',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '岡崎市が実施する中小企業経営革新補助金です。DX推進や新事業展開の取り組みに最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 中小企業経営革新補助金は、<span class="marker">市内に事業所を有する中小企業のDX推進・新事業展開・販路拡大</span>等の経営革新に取り組む費用を補助する制度です。</p><p>岡崎市は自動車関連産業を中心にものづくりが盛んな地域ですが、八丁味噌をはじめとする伝統産業や、商店街を核とした商業も重要な経済基盤です。これらの中小企業の経営力強化を通じて、地域経済全体の底上げを図っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">全業種が対象で、IT活用から設備導入まで幅広い取り組みを支援</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる取り組み"><p>ITシステム・クラウドサービスの導入（DX推進）</p><p>新商品・新サービスの開発</p><p>ECサイト構築・Web広告等の販路開拓</p><p>展示会・商談会への出展</p></div><p>岡崎市役所商工労政課に事業計画書と申請書を提出します。岡崎商工会議所の推薦を受けると審査で有利になります。</p><p><span class="marker">交付決定前に着手した事業は補助対象外</span>です。事前の窓口相談をお勧めします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。1事業者につき年度内1回の申請です。</p><p><span class="marker">人件費・光熱水費等の経常経費は対象外</span>です。設備購入費、広告宣伝費、委託費等が主な対象となります。</p><div class="note-box">国や県の同種補助金との併用はできません。完了報告書の提出と実績確認が必要です。岡崎ビジネスサポートセンター「OKa-Biz」では無料の経営相談を常時受け付けていますので、事業計画の策定にご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-nursing-equipment',
    title: '岡崎市 介護用品支給事業',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '月額最大6,300円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '愛知県',
    tags: ['岡崎市', '介護用品', '支給事業'],
    eligibility: '岡崎市に住所を有する要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '岡崎市が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を現物支給する制度です。</p><p>岡崎市は高齢者が住み慣れた地域で安心して暮らせるよう、在宅介護を支える多様な施策を展開しています。日常的に必要となる介護用品を支給することで、介護する家族の経済的負担を軽減します。</p><p><span class="marker-green">市民税非課税世帯は月額6,300円相当まで支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡崎市に住民登録があり、要介護4・5の65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="支給対象品目"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋・清拭剤</p><p>防水シーツ</p></div><p>岡崎市役所介護保険課または地域包括支援センターで申請します。<strong>介護保険被保険者証</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額上限内で<strong>カタログから必要な介護用品を選択</strong>して受け取る方式です。非課税世帯は月額6,300円相当、課税世帯は月額4,400円相当が上限です。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。在宅での介護が前提となります。</p><div class="note-box">支給は申請の翌月からとなります。要介護度の変更や入院・入所等があった場合は届出が必要です。ケアマネジャーと相談の上、必要な品目をお選びください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-elderly-support',
    title: '岡崎市 高齢者外出支援事業',
    organization: '岡崎市',
    type: 'local',
    maxAmount: 'バス・タクシー券年間最大12,000円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '愛知県',
    tags: ['岡崎市', '高齢者外出支援', '生活支援'],
    eligibility: '岡崎市に住所を有する70歳以上の方',
    applicationPeriod: '通年',
    description: '岡崎市が実施する高齢者外出支援事業です。70歳以上の高齢者にバス・タクシー利用券を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 高齢者外出支援事業は、<span class="marker">70歳以上の高齢者の社会参加と外出機会の確保</span>を目的に、バスまたはタクシーの利用券を交付する制度です。</p><p>岡崎市は市域が広く、特に中山間地域では公共交通が限られるエリアがあります。通院や買い物、趣味活動など日常の外出を支援することで、高齢者の健康維持と閉じこもり防止を図っています。</p><p><span class="marker-green">バス利用券とタクシー利用券のどちらかを選択でき、年間最大12,000円分</span>が交付されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡崎市に住民登録がある70歳以上の方が対象です。</p><div class="summary-box" data-title="利用券の種類"><p>バス利用券：市内路線バス（名鉄バス等）で使用可能</p><p>タクシー利用券：市内のタクシー会社で使用可能</p><p>いずれか一方を選択して申請</p></div><p>岡崎市役所長寿課の窓口または各地区の市民センターで申請します。<strong>本人確認書類と印鑑</strong>をご持参ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大12,000円分</strong>の利用券が交付されます。バス利用券は1枚100円分、タクシー利用券は1枚500円分です。</p><p><span class="marker">利用券は年度内有効で、翌年度への繰り越しはできません</span>。お釣りは出ませんのでご注意ください。</p><div class="highlight-box">岡崎市ではコミュニティバス「まちバス」の運行や、中山間地域でのデマンド交通の実証実験も行っています。お住まいの地域によって最適な交通手段が異なりますので、長寿課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-seismic-diagnosis',
    title: '岡崎市 木造住宅無料耐震診断事業',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '診断費用の全額負担',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '愛知県',
    tags: ['岡崎市', '耐震診断', '防災'],
    eligibility: '岡崎市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '岡崎市が実施する木造住宅無料耐震診断事業です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 木造住宅無料耐震診断事業は、<span class="marker">1981年5月31日以前に建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>岡崎市は南海トラフ巨大地震の発生が懸念される地域であり、矢作川流域の軟弱地盤も一部に存在するため、住宅の耐震化は喫緊の課題です。愛知県の「あいち建築減災プラン」に基づき、旧耐震基準住宅の耐震化を強力に推進しています。</p><p><span class="marker-green">診断費用は全額岡崎市が負担し、所有者の自己負担はゼロ</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>岡崎市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p><p>所有者が居住していること</p></div><p>岡崎市役所建築指導課に申請書を提出します。市が委託する耐震診断士が無料で訪問し、耐震性を調査します。</p><p><span class="marker">診断は2〜3時間程度で、建物の図面があればご準備ください</span>。図面がなくても診断は可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額岡崎市が負担</strong>するため、申請者の費用負担はありません。</p><p><span class="marker">診断結果が基準未満の場合は「耐震改修補助事業」（上限120万円）</span>が利用可能です。除却（建替え）の場合も別途補助があります。</p><div class="note-box">愛知県は全国でもトップクラスの耐震化率を目指しており、岡崎市も診断から改修まで一貫した支援体制を整えています。鉄骨造・RC造の住宅は本事業の対象外ですが、別途相談を受け付けています。まずは無料診断でお住まいの安全性を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 豊田市（愛知県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'toyota-childcare-subsidy',
    title: '豊田市 保育料軽減制度',
    organization: '豊田市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['豊田市', '保育料軽減', '子育て支援'],
    eligibility: '豊田市内の認可保育所・認定こども園等に在園する児童の保護者',
    applicationPeriod: '通年（入園時に自動適用）',
    description: '豊田市が実施する保育料軽減制度です。多子世帯の保育料を大幅に軽減し子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園等に在園する児童</span>の保育料を、きょうだいの人数に応じて軽減する制度です。</p><p>トヨタ自動車の本社が所在する豊田市は、自動車産業を基盤とした豊かな財政力を活かし、子育て支援施策を充実させています。都市部と中山間地域が共存する広大な市域で、すべての子育て世帯が安心して保育を利用できる環境を整備しています。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は無料となる市独自の軽減措置</span>が設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊田市内の認可保育施設に在園する児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料が半額</p><p>第3子以降：保育料が無料</p></div><p>保育料の軽減は<strong>入園手続き時に自動適用</strong>されます。きょうだいの構成に変更がある場合は、豊田市こども部保育課へ届出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子の保育料は<strong>50%に軽減</strong>、第3子以降は全額免除です。0〜2歳児クラスの住民税課税世帯が主な対象となります。</p><p><span class="marker">3歳以上は幼児教育・保育無償化により保育料が無料</span>です。</p><div class="highlight-box">豊田市は企業城下町として働く世帯が多く、延長保育や病児保育の充実にも取り組んでいます。給食費・延長保育料等の実費は軽減対象外ですが、低所得世帯への副食費免除制度もありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-birth-bonus',
    title: '豊田市 出産・子育て応援給付金',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['豊田市', '出産応援', '給付金'],
    eligibility: '豊田市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年',
    description: '豊田市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円の合計10万円</span>を支給する制度です。</p><p>豊田市は自動車産業の世界的な拠点であると同時に、足助の古い町並みや香嵐渓の紅葉など自然豊かな面も持つ魅力的な街です。すべての妊婦・子育て家庭を経済的に支え、安心して出産・育児に臨める環境を提供しています。</p><p><span class="marker-green">所得制限はなく、豊田市在住のすべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊田市に住民登録がある妊婦および出産された方が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円を申請</p><p>出産後に面談（赤ちゃん訪問等） → 子育て応援給付金5万円を申請</p></div><p>豊田市保健部健康政策課または各保健センターで面談を受け、申請書を提出します。<strong>面談の実施が支給の要件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。</p><p><span class="marker">多胎の場合は子育て応援給付金が子ども1人につき5万円</span>支給されます。</p><div class="note-box">他自治体で同種の給付金を受給済みの場合は重複受給できません。豊田市では「とよたっ子プラン」のもと、妊娠期から切れ目のない子育て支援を展開しています。面談時には地域の子育てサービスの紹介も受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-newlywed-rent',
    title: '豊田市 結婚新生活支援事業',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['豊田市', '新婚世帯', '家賃補助'],
    eligibility: '豊田市内で新生活を始める新婚世帯（婚姻届提出から1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '豊田市が実施する結婚新生活支援事業です。新婚世帯の住居費や引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 結婚新生活支援事業は、<span class="marker">新婚世帯の住居費（家賃・敷金・礼金等）や引越し費用</span>を補助する制度です。</p><p>豊田市はトヨタ自動車をはじめとした企業が集積し、働く世代が多く暮らす活力ある街です。結婚を機に豊田市で新生活を始める若い世帯を支援し、次世代を担う人材の定住を促進しています。</p><p><strong>夫婦ともに29歳以下の場合は上限60万円</strong>、それ以外は上限30万円です。<span class="marker-green">住居費に加えて引越し費用も補助対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届の提出日が申請年度内であること</p><p>夫婦の所得合計が500万円未満であること</p><p>豊田市内の住居に居住していること</p><p>夫婦ともに婚姻日時点で39歳以下であること</p></div><p>豊田市役所企画政策部次世代育成課に申請書と添付書類を提出します。賃貸借契約書、引越し費用の領収書が必要です。</p><p><span class="marker">婚姻届提出日から1年以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下は<strong>上限60万円</strong>、30〜39歳は<strong>上限30万円</strong>です。家賃、敷金、礼金、共益費、仲介手数料、引越し費用が対象です。</p><p><span class="marker">住宅購入費用は本事業の対象外</span>です。賃貸住宅の費用と引越し費用に限られます。</p><div class="highlight-box">豊田市は「まちなか」と「中山間地域」の両方で住まいの選択肢があります。中山間地域（足助・旭・稲武等）への移住を選択した場合は、移住支援の加算措置がある制度も別途用意されていますのであわせてご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-disability-medical',
    title: '豊田市 障害者医療費助成制度',
    organization: '豊田市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['豊田市', '障害者医療', '助成金'],
    eligibility: '豊田市に住所を有し、重度障害者手帳をお持ちの方',
    applicationPeriod: '通年',
    description: '豊田市が実施する障害者医療費助成制度です。重度障害のある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 障害者医療費助成制度は、<span class="marker">身体障害者手帳1〜3級、療育手帳A・B判定、精神障害者保健福祉手帳1・2級</span>等をお持ちの方の医療費自己負担分を助成する制度です。</p><p>豊田市は財政力を活かして福祉施策の充実に取り組んでおり、障害のある方が安心して医療を受けられる環境を整えています。愛知県の制度に加え、市独自の上乗せ措置により幅広い障害区分をカバーしています。</p><p><span class="marker-green">愛知県内の医療機関では受給者証の提示で窓口負担がなくなります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊田市に住民登録があり、以下のいずれかの手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害の区分"><p>身体障害者手帳 1〜3級</p><p>療育手帳 A判定・B判定</p><p>精神障害者保健福祉手帳 1・2級</p><p>身体障害者手帳4級の一部（腎臓・進行性筋萎縮症）</p></div><p>豊田市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>口座情報</strong>をご持参ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。通院・入院・調剤すべてが対象です。</p><p><span class="marker">愛知県外の医療機関で受診した場合は、一旦自己負担を支払い後日償還払い</span>の手続きが必要です。</p><div class="note-box">所得制限があり、本人または配偶者・扶養義務者の所得が一定額を超える場合は対象外となることがあります。保険適用外の費用（差額ベッド代、文書料、容器代等）は助成対象外です。65歳以上で新たに手帳を取得した場合は後期高齢者医療制度への加入が必要となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-school-lunch',
    title: '豊田市 学校給食費助成事業',
    organization: '豊田市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額助成',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '愛知県',
    tags: ['豊田市', '学校給食', '教育支援'],
    eligibility: '豊田市立小中学校に在籍する児童生徒の保護者（多子世帯）',
    applicationPeriod: '毎年4月（年度当初に案内配布）',
    description: '豊田市が実施する学校給食費助成事業です。多子世帯の第3子以降の給食費を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 学校給食費助成事業は、<span class="marker">多子世帯の経済的負担を軽減するため、第3子以降の学校給食費</span>を全額助成する制度です。</p><p>豊田市は地産地消の取り組みに力を入れており、学校給食では市内産の米や野菜を積極的に使用しています。「食」を通じた教育と、子育て世帯の負担軽減を両立させる施策として、多子世帯の給食費を助成しています。</p><p><span class="marker-green">所得制限はなく、第3子以降の学校給食費が全額助成</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊田市立小中学校に在籍する児童生徒のうち、18歳以下のきょうだいの中で第3子以降にあたる方が対象です。</p><div class="summary-box" data-title="申請方法"><p>年度当初に学校を通じて案内と申請書が配布される</p><p>必要事項を記入し学校へ提出</p><p>審査後に給食費の助成が適用される</p><p>年度途中の転入も随時申請可能</p></div><p>豊田市教育委員会学校教育課が窓口です。不明な点は各学校の事務室にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の学校給食費が<strong>全額助成</strong>されます。小学校で年間約5万円、中学校で年間約5.8万円程度の負担軽減です。</p><p><span class="marker">食物アレルギー等で給食を喫食しない日がある場合は、その分は助成対象外</span>です。</p><div class="note-box">就学援助制度の認定を受けている世帯は、就学援助から給食費が支給されるため本制度との重複適用はありません。豊田市は今後の給食費無償化の拡大も視野に入れた検討を進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-telework-bonus',
    title: '豊田市 テレワーク環境整備補助金',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['豊田市', 'テレワーク', '補助金'],
    eligibility: '豊田市内に事業所を有する中小企業者でテレワークを新たに導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '豊田市が実施するテレワーク環境整備補助金です。テレワーク導入に必要な費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 テレワーク環境整備補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに構築する際の設備導入費用</span>を補助する制度です。</p><p>豊田市はトヨタ自動車をはじめとする製造業の集積地ですが、間接部門や管理部門でのテレワーク導入が進んでいます。大企業のテレワーク推進に呼応して、取引先の中小企業でもリモートワーク対応が求められるケースが増えており、市として環境整備を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">セキュリティ対策費やクラウド導入費も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>VPN機器・セキュリティ機器の導入</p><p>Web会議システム・グループウェアの初期費用</p><p>クラウドストレージ・業務管理ツールの導入</p><p>モバイルWi-Fiルーターの購入</p></div><p>豊田市役所産業部産業労働課に申請書と見積書を提出します。</p><p><span class="marker">テレワーク勤務規程の策定・届出が条件</span>となります。就業規則の変更についてはテレワーク相談窓口もご利用ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者1回限りの利用です。</p><p><span class="marker">パソコン本体やスマートフォンの購入費は対象外</span>です。通信環境とセキュリティの整備に関する経費が中心です。</p><div class="highlight-box">豊田市では「スマートシティ」の取り組みの一環としてコワーキングスペースの整備も進めています。中山間地域のサテライトオフィスの活用促進とあわせて、多様な働き方の実現を支援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-nursing-home-reform',
    title: '豊田市 高齢者住宅改造助成事業',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '愛知県',
    tags: ['豊田市', '住宅改造', '介護支援'],
    eligibility: '豊田市に住所を有する要介護・要支援認定を受けた高齢者がいる世帯',
    applicationPeriod: '通年',
    description: '豊田市が実施する高齢者住宅改造助成事業です。介護のためのバリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 高齢者住宅改造助成事業は、<span class="marker">要介護・要支援認定を受けた高齢者が安全に在宅生活を続けるための住宅バリアフリー改修</span>に費用を助成する制度です。</p><p>豊田市は広大な市域に都市部と中山間地域が共存しており、特に中山間地域の古い住宅ではバリアフリー化のニーズが高くなっています。介護保険の住宅改修費に上乗せする市独自の助成で、高齢者の在宅生活を支えています。</p><p><span class="marker-green">介護保険の住宅改修費（上限20万円）と併用でき、合わせて最大50万円の支援</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊田市に住民登録があり、要介護・要支援認定を受けた高齢者がいる世帯が対象です。</p><div class="summary-box" data-title="対象工事の例"><p>手すりの設置（玄関・廊下・浴室・トイレ等）</p><p>段差解消（スロープ設置・床のかさ上げ）</p><p>滑り防止のための床材変更</p><p>引き戸への交換・洋式便器への取替え</p></div><p>豊田市役所福祉部高齢福祉課または担当ケアマネジャーを通じて申請します。<strong>工事着手前の申請が必須</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一定割合で、<strong>上限30万円</strong>です。所得に応じて助成率が異なります。</p><p><span class="marker">介護保険の住宅改修費と合わせて最大50万円</span>の支援が可能です。</p><div class="note-box">改修内容はケアマネジャーや作業療法士と相談し、身体状況に適した計画を立てることが重要です。完了届と施工前後の写真の提出が必要です。新築や増築は対象外で、バリアフリー化を目的とした改修工事に限られます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-energy-support',
    title: '豊田市 家庭用省エネ設備導入補助金',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '愛知県',
    tags: ['豊田市', '省エネ', '補助金'],
    eligibility: '豊田市内の住宅に省エネ設備を導入する市民',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '豊田市が実施する家庭用省エネ設備導入補助金です。太陽光発電・蓄電池・V2H等の導入に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 家庭用省エネ設備導入補助金は、<span class="marker">市内の住宅に太陽光発電システム・家庭用蓄電池・V2H・HEMS等</span>の省エネ設備を導入する市民に補助金を交付する制度です。</p><p>豊田市は「環境モデル都市」に選定されており、トヨタ自動車との連携によるスマートシティ「Woven City」構想とも呼応して、脱炭素社会の実現に向けた先進的な取り組みを行っています。家庭での再生可能エネルギー活用を強力に推進しています。</p><p><span class="marker-green">複数設備の同時導入で最大20万円の補助が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限8万円）</p><p>家庭用蓄電池：一律5万円</p><p>V2H（電気自動車用充放電設備）：一律5万円</p><p>HEMS：一律2万円</p></div><p>豊田市役所環境部環境政策課に申請書と見積書を提出します。</p><p><span class="marker">設置工事前に申請が必要</span>です。交付決定を受けてから着工してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備ごとに補助額が定められ、<strong>複数設備の合計で最大20万円</strong>です。太陽光+蓄電池+V2Hの組み合わせが最も補助額が大きくなります。</p><p><span class="marker">リース契約や中古品の設置は対象外</span>です。新品を購入・設置する場合に限ります。</p><div class="highlight-box">豊田市は電気自動車（EV）の普及にも力を入れており、V2H設備の導入によりEVを家庭の蓄電池として活用できます。太陽光発電との組み合わせで、災害時の電力確保にも役立ちます。国や県の補助金との併用も可能ですので、最大限の支援を受けられるよう窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-bousai-equipment',
    title: '豊田市 家庭防災対策補助金',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '愛知県',
    tags: ['豊田市', '防災対策', '補助金'],
    eligibility: '豊田市内に住所を有し、住宅に防災設備を設置する市民',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '豊田市が実施する家庭防災対策補助金です。感震ブレーカーや家具転倒防止器具等の設置費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 家庭防災対策補助金は、<span class="marker">感震ブレーカー・家具転倒防止器具・ガラス飛散防止フィルム・雨水貯留タンク等</span>の防災設備を家庭に設置する費用を補助する制度です。</p><p>豊田市は南海トラフ巨大地震の被害が想定される地域であり、また2023年には矢作川流域で大規模な水害も経験しています。地震・風水害の両面から家庭レベルでの防災対策を促進し、市民の安全を守る取り組みを進めています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">高齢者世帯・障害者世帯は補助率が引き上げられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>感震ブレーカー（揺れを感知して通電を遮断）</p><p>家具転倒防止器具（金具・ベルト・突っ張り棒等）</p><p>ガラス飛散防止フィルム</p><p>雨水貯留タンク（非常用飲料水兼用）</p></div><p>豊田市役所地域振興部防災対策課に申請書と見積書を提出します。</p><p><span class="marker">設置前の申請が原則</span>です。交付決定後に設置工事を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。65歳以上のみ世帯や障害者世帯は対象経費の3分の2まで引き上げられます。</p><p><span class="marker">1世帯につき年度内1回の申請</span>です。複数の設備をまとめて申請可能です。</p><div class="note-box">食料品・飲料水等の備蓄品や、携帯ラジオなどの購入費は対象外です。豊田市では自主防災組織への補助も別途実施しており、地域全体での防災力向上に取り組んでいます。防災設備の選び方や設置方法に関する出前講座も無料で利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
];
