import { Grant } from '@/lib/types';

export const cityGrantsBatch47: Grant[] = [
  // ────────────────────────────────────────────────
  // 高知市（高知県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kochi-city-childcare-subsidy',
    title: '高知市 子育て世帯応援給付金',
    organization: '高知市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '高知県',
    tags: ['高知市', '子育て支援', '給付金'],
    eligibility: '高知市に住所を有し、18歳以下の子どもを養育する世帯',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '高知市が実施する子育て世帯応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 子育て世帯応援給付金は、<span class="marker">18歳以下の子どもを養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>太平洋に面した高知市は、よさこい祭りや桂浜で知られる四国最大の都市です。坂本龍馬ゆかりの地としても有名で、子育て世帯の定住促進に向けた支援策を積極的に展開しています。</p><p><span class="marker-green">所得制限は設けられておらず、高知市に住むすべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高知市に住民登録があり、18歳以下（18歳到達後の最初の3月31日まで）の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類（マイナンバーカード等）</p><p>子どもの健康保険証の写し</p><p>振込先口座の通帳またはキャッシュカードの写し</p></div><p>高知市役所こども政策課の窓口またはオンラインで申請できます。<strong>対象世帯には市から案内通知</strong>が届きますので、届いたら速やかに手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>子ども1人あたり最大5万円</strong>です。子どもの人数に応じて加算される仕組みで、多子世帯ほど手厚い支援となります。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>ので、案内通知が届いたら早めに手続きを行いましょう。</p><div class="note-box">生活保護を受給中の世帯も対象です。他の給付金との併給については、高知市のこども政策課に確認してください。DV被害等で住民登録と異なる住所に居住している場合は、個別に相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-birth-bonus',
    title: '高知市 出産祝い金制度',
    organization: '高知市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '高知県',
    tags: ['高知市', '出産祝い金', '子育て支援'],
    eligibility: '高知市に住所を有し、子どもを出産した方',
    applicationPeriod: '通年（出生届提出後6か月以内）',
    description: '高知市が実施する出産祝い金制度です。出産した世帯に第1子5万円、第3子以降は20万円を支給し、出産・子育てを応援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 出産祝い金制度は、<span class="marker">高知市に住民登録がある方が出産した際に祝い金を支給</span>する制度です。</p><p>高知市は少子化対策と子育て支援の一環として本制度を設けています。かつおのたたきに代表される豊かな食文化と温暖な気候に恵まれた土佐の地で、安心して出産・子育てができる環境づくりを目指しています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。<span class="marker-green">多子世帯ほど手厚い支援を受けられる段階的な給付体系</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高知市に住民登録があり、出産した方（または配偶者）が対象です。出生届の提出とあわせて申請するのが便利です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出生届受理証明書または母子健康手帳</p><p>申請者の本人確認書類</p><p>振込先口座の情報</p></div><p><span class="marker">出生届提出後6か月以内に申請が必要</span>です。高知市役所こども政策課の窓口で手続きできます。<strong>郵送での申請</strong>も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順位に応じて異なります。<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>が指定口座に振り込まれます。</p><p><span class="marker">出生順位は、申請者が養育している18歳以下の子どもの数で判定</span>されます。前婚の子どもも含めてカウントされます。</p><div class="highlight-box">高知市では出産祝い金のほか、妊婦健診費用の助成（14回分）や産後ケア事業も実施しています。妊娠届出時に「こうち出産・子育て応援ギフト」として10万円相当の支給もありますので、あわせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-housing-purchase',
    title: '高知市 住宅取得支援補助金',
    organization: '高知市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '高知県',
    tags: ['高知市', '住宅取得', '補助金'],
    eligibility: '高知市内に新たに住宅を取得する方（新築・中古問わず）',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '高知市が実施する住宅取得支援補助金です。市内に住宅を購入・新築する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 住宅取得支援補助金は、<span class="marker">高知市内に住宅を新築または購入する方</span>に対して、取得費用の一部を補助する制度です。</p><p>高知市は四国南部に位置し、鏡川や筆山などの豊かな自然環境に囲まれた県庁所在地です。定住人口の増加と市街地の活性化を目的に、住宅取得への支援を行っています。</p><p>補助額は住宅取得費の一部で、<strong>上限は50万円</strong>です。<span class="marker-green">子育て世帯や市外からの転入世帯には加算措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>高知市内に住宅を新築・購入し、自ら居住すること</p><p>取得する住宅の床面積が50㎡以上であること</p><p>市税の滞納がないこと</p><p>5年以上継続して高知市に居住する意思があること</p></div><p>高知市役所住宅政策課に申請書と必要書類を提出します。売買契約書または建築請負契約書の写し、住民票などが必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。工事完了前でも事前相談を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>最大30万円</strong>で、以下の加算があります。子育て世帯加算（18歳以下の子どもがいる世帯）は<strong>10万円</strong>、市外からの転入加算は<strong>10万円</strong>です。</p><p><span class="marker">合計で最大50万円の補助を受けることが可能</span>です。新築・中古いずれも対象となります。</p><div class="note-box">投資用物件や別荘としての取得は対象外です。住宅ローンの利用が条件となる場合がありますので、詳細は高知市の窓口にご確認ください。南海トラフ地震に備えた耐震性能を満たす住宅が推奨されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-infertility',
    title: '高知市 不妊治療費助成制度',
    organization: '高知市',
    type: 'local',
    maxAmount: '1回あたり最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '高知県',
    tags: ['高知市', '不妊治療', '助成金'],
    eligibility: '高知市に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後3か月以内に申請）',
    description: '高知市が実施する不妊治療費助成制度です。保険適用後の自己負担分について、1回あたり最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる経済的負担を軽減するため、保険適用後の自己負担分を助成</span>する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、先進医療の併用や複数回の治療など、依然として高額な費用がかかるケースがあります。高知市では、安心して治療に臨めるよう独自の上乗せ助成を行っています。</p><p><span class="marker-green">事実婚のカップルも対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高知市に住民登録がある夫婦（事実婚を含む）で、医療機関において不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>治療費の領収書の写し</p><p>夫婦の住民票（事実婚の場合は戸籍謄本も）</p></div><p><strong>治療が終了した日から3か月以内</strong>に高知市保健所健康増進課へ申請してください。<span class="marker">年度をまたぐ治療の場合は、治療終了日の属する年度内に申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分で、<strong>1回の治療あたり最大30万円</strong>です。体外受精や顕微授精が主な対象となります。</p><p><span class="marker">高知県の不妊治療費助成制度との併用が可能</span>で、両方を活用することでさらに負担を軽減できます。</p><div class="highlight-box">高知市では不妊治療の費用助成だけでなく、不妊専門相談センターによる無料カウンセリングも実施しています。治療に関する不安や悩みを専門のスタッフに相談できますので、お気軽にご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-scholarship',
    title: '高知市 給付型奨学金制度',
    organization: '高知市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '高知県',
    tags: ['高知市', '奨学金', '教育支援'],
    eligibility: '高知市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '高知市が実施する給付型奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 給付型奨学金制度は、<span class="marker">経済的な理由により修学が困難な高校生・大学生等</span>に対し、返済不要の奨学金を給付する制度です。</p><p>高知市は教育の機会均等を重視し、家庭の経済状況にかかわらず意欲ある学生が学び続けられるよう支援しています。坂本龍馬をはじめ多くの人材を輩出してきた土佐の伝統を受け継ぎ、次世代の育成に取り組んでいます。</p><p><span class="marker-green">返済不要の給付型で、他の奨学金との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>高知市に住民登録がある世帯の子どもであること</p><p>高等学校、大学、短大、専門学校等に在学中であること</p><p>世帯の所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>毎年3月から4月にかけて高知市教育委員会学校教育課で募集を行います。申請書、成績証明書、所得証明書等の提出が必要です。</p><p><span class="marker">募集人数に限りがあるため、選考により決定</span>されます。学業成績と家庭の経済状況を総合的に判断します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生が月額1万円、大学生等が月額最大3万円</strong>です。給付期間は在学中の最短修業年限までとなります。</p><p><span class="marker">休学・退学した場合は給付が停止</span>されます。学業成績が著しく低下した場合も同様です。</p><div class="note-box">日本学生支援機構の奨学金や高知県の奨学金との併用は可能ですが、他の市町村の給付型奨学金との併給はできない場合があります。詳しくは高知市教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-sme-support',
    title: '高知市 中小企業振興補助金',
    organization: '高知市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '高知県',
    tags: ['高知市', '中小企業支援', '補助金'],
    eligibility: '高知市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '高知市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路開拓を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う設備投資や販路開拓、生産性向上</span>に要する経費の一部を補助する制度です。</p><p>高知市は、かつおをはじめとする水産加工業や、ゆず・しょうがなどの農産物加工業が盛んな街です。地元産業の活性化と雇用の創出を目的に、中小企業の成長を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">製造業、小売業、サービス業など幅広い業種が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>高知市内に本店または主たる事業所を有する中小企業者</p><p>市税の滞納がないこと</p><p>暴力団等の反社会的勢力でないこと</p><p>対象経費が20万円以上であること</p></div><p>高知市役所商工振興課に事業計画書および申請書を提出します。設備の見積書や販路開拓の計画書も必要です。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず事前に申請し、交付決定を受けてから事業を実施してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。生産設備の購入費、展示会出展費、ECサイト構築費などが対象となります。</p><p><span class="marker">事業完了後に実績報告書の提出が必要</span>で、審査を経て補助金が交付されます。</p><div class="highlight-box">高知市では、この補助金のほか高知県産業振興センターによる経営相談や、よさこい高知マルシェなど地場産品のPRイベントも開催しています。補助金と合わせて活用することで、より効果的な事業展開が期待できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-nursing-equipment',
    title: '高知市 介護用品支給事業',
    organization: '高知市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '高知県',
    tags: ['高知市', '介護用品', '支給事業'],
    eligibility: '高知市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '高知市が実施する介護用品支給事業です。在宅で重度の要介護者を介護する家族に、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する事業です。</p><p>在宅介護を続ける家族の経済的負担は大きく、特に紙おむつや尿取りパッドなどの消耗品にかかる費用は月々相当な額になります。高知市では、介護する家族を支え、住み慣れた地域での生活を継続できるよう支援しています。</p><p><span class="marker-green">市民税非課税世帯を中心に、介護用品の現物支給またはクーポン券の交付</span>を行っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>以下の要件をすべて満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>高知市に住民登録があること</p><p>要介護4または5の認定を受けた65歳以上の方を在宅で介護していること</p><p>被介護者が市民税非課税であること</p><p>被介護者が病院・施設に入所していないこと</p></div><p>高知市役所高齢者支援課の窓口で申請します。介護保険被保険者証と介護者の本人確認書類が必要です。<strong>担当のケアマネジャーを通じて申請</strong>することもできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給は<strong>月額最大約8,000円相当の介護用品</strong>で、年間最大約10万円相当となります。紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などが対象です。</p><p><span class="marker">支給品目はカタログから選択する方式</span>で、必要な用品を組み合わせて受け取ることができます。</p><div class="note-box">入院中や施設入所中は支給が一時停止されます。要介護度が3以下に変更された場合も対象外となります。介護保険の福祉用具購入費（年間10万円上限）とは別の制度ですので、両方を活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-elderly-support',
    title: '高知市 高齢者見守り・生活支援事業',
    organization: '高知市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '高知県',
    tags: ['高知市', '高齢者支援', '見守り'],
    eligibility: '高知市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '高知市が実施する高齢者見守り・生活支援事業です。ひとり暮らし高齢者に緊急通報装置の貸与や配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 高齢者見守り・生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、緊急通報装置の貸与や配食サービスなどを提供する事業です。</p><p>高知市は高齢化率が全国平均を上回る水準で、ひとり暮らしの高齢者も増加しています。住み慣れた地域で安心して暮らし続けられるよう、多面的な生活支援を展開しています。</p><p><span class="marker-green">緊急通報装置の設置費用および月額利用料は市が負担</span>し、24時間体制で高齢者の安全を見守ります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高知市に住民登録がある65歳以上のひとり暮らしの方、または高齢者のみの世帯が主な対象です。</p><div class="summary-box" data-title="主なサービス内容"><p>緊急通報装置の無料貸与（ボタンひとつで消防局に通報）</p><p>配食サービス（安否確認を兼ねた食事の配達）</p><p>乳酸菌飲料配布による訪問見守り</p><p>ふれあい収集（ごみ出しが困難な方への戸別収集）</p></div><p>高知市役所高齢者支援課または<strong>お住まいの地域の地域包括支援センター</strong>で申請・相談ができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置</strong>はボタンを押すだけで消防局に通報でき、設置・利用は無料です。<strong>配食サービス</strong>は1食あたり自己負担400円程度で栄養バランスのとれた食事が届きます。</p><p><span class="marker">サービスの利用にあたっては、地域包括支援センターの職員による訪問調査</span>が行われます。</p><div class="highlight-box">高知市では「あったかふれあいセンター」を市内各所に設置しており、高齢者の居場所づくりや交流活動も行っています。サービスの利用と合わせて、地域とのつながりを維持することが大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-seismic-diagnosis',
    title: '高知市 住宅耐震診断助成事業',
    organization: '高知市',
    type: 'local',
    maxAmount: '診断費用の全額補助（木造住宅）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '高知県',
    tags: ['高知市', '耐震診断', '防災'],
    eligibility: '高知市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '高知市が実施する住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額補助する制度です。</p><p>高知市は南海トラフ巨大地震の想定被害が最も大きい地域のひとつです。太平洋に面した地形から津波被害も懸念されており、住宅の耐震化は市の最重要課題となっています。まず耐震診断を受けることで、住宅の安全性を確認する第一歩を踏み出すことができます。</p><p><span class="marker-green">木造住宅の耐震診断は自己負担なしで受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>高知市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の戸建て住宅であること</p><p>過去にこの事業による耐震診断を受けていないこと</p></div><p>高知市役所建築指導課に申請書を提出します。住宅の建築年を確認できる書類（登記事項証明書等）が必要です。</p><p><span class="marker">市が派遣する耐震診断士が自宅を訪問して診断</span>を行います。所要時間は2〜3時間程度です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額市が負担</strong>するため、申請者の自己負担はありません。診断後、耐震性が不足している場合は改修工事の補助制度（最大100万円）も利用できます。</p><p><span class="marker">南海トラフ地震の発生確率が高まる中、早期の耐震化が強く推奨</span>されています。</p><div class="note-box">鉄骨造やRC造の住宅は本事業の対象外ですが、別途耐震診断の補助制度があります。マンション等の共同住宅については管理組合単位での申請となりますので、高知市の窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 佐賀市（佐賀県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'saga-city-childcare-subsidy',
    title: '佐賀市 保育料軽減助成金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '佐賀県',
    tags: ['佐賀市', '保育料軽減', '助成金'],
    eligibility: '佐賀市に住所を有し、認可保育所等を利用する多子世帯',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '佐賀市が実施する保育料軽減助成金です。第2子は半額、第3子以降は無料とすることで多子世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園等を利用する多子世帯</span>の保育料を軽減する制度です。</p><p>佐賀市は佐賀平野の中心に位置し、有明海ののり養殖や佐賀牛の産地として知られる九州北部の都市です。秋の佐賀インターナショナルバルーンフェスタには世界中から熱気球が集まります。少子化対策として多子世帯への手厚い保育料支援を実施しています。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐賀市に住民登録があり、認可保育所・認定こども園・小規模保育事業所等を利用している世帯が対象です。</p><div class="summary-box" data-title="軽減の対象"><p>第2子：保育料が半額に軽減</p><p>第3子以降：保育料が全額免除（無料）</p><p>年齢制限なし（同一世帯の子どもの出生順でカウント）</p></div><p>保育所等の入所申込時に世帯構成を申告することで自動的に軽減が適用されます。<strong>別途申請は原則不要</strong>ですが、世帯構成に変更があった場合は届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は通常の保育料の半額</strong>に軽減されます。<strong>第3子以降は保育料が完全無料</strong>となり、家計の大幅な負担軽減が期待できます。</p><p><span class="marker">子どもの出生順位は年齢に関係なくカウント</span>されるため、上の子が小学校以上でも第2子・第3子として数えられます。</p><div class="note-box">認可外保育施設は本制度の対象外です。ただし、佐賀市独自の認可外保育施設利用者向け補助制度が別途用意されている場合がありますので、こども未来課にお問い合わせください。3歳以上の幼児教育・保育の無償化とは別の制度です。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-birth-bonus',
    title: '佐賀市 出産応援給付金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '出産1回あたり10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '佐賀県',
    tags: ['佐賀市', '出産応援', '給付金'],
    eligibility: '佐賀市に住所を有し、子どもを出産した方',
    applicationPeriod: '通年（出生届提出後6か月以内）',
    description: '佐賀市が実施する出産応援給付金です。出産した世帯に1回あたり10万円を支給し、出産にかかる費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 出産応援給付金は、<span class="marker">佐賀市に住民登録がある方が出産した際に10万円を支給</span>する制度です。</p><p>佐賀平野に広がる佐賀市は、佐賀城跡を中心とした歴史的な街並みと、IT企業の進出が進む先進的な側面を併せ持つ都市です。出産にかかる経済的負担を軽減し、安心して子どもを産み育てられる環境づくりに取り組んでいます。</p><p><span class="marker-green">所得制限なし、出生順位にかかわらず一律10万円の給付</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐賀市に住民登録があり、出産した方が対象です。出産した方の住民登録が佐賀市にあれば、出産場所は問いません。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産応援給付金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座の情報</p></div><p>佐賀市役所こども家庭課の窓口で申請します。<strong>出生届の提出から6か月以内</strong>に手続きしてください。<span class="marker">郵送申請も可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産1回あたり10万円（多胎児の場合は人数分）</strong>です。双子なら20万円、三つ子なら30万円が支給されます。</p><p><span class="marker">申請期限（出生から6か月以内）を過ぎると受給できなくなります</span>ので、早めの手続きをおすすめします。</p><div class="highlight-box">佐賀市では出産応援給付金のほか、妊娠届出時の面談で「出産・子育て応援ギフト」（国の制度）も支給されます。妊娠届出時に5万円相当、出生届出後に5万円相当の計10万円相当と、本制度の10万円を合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-newlywed-rent',
    title: '佐賀市 新婚世帯家賃補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '月額最大2万円（最長2年間・最大48万円）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '佐賀県',
    tags: ['佐賀市', '新婚世帯', '家賃補助'],
    eligibility: '佐賀市内の賃貸住宅に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '佐賀市が実施する新婚世帯家賃補助金です。新婚世帯の家賃負担を月額最大2万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 新婚世帯家賃補助金は、<span class="marker">婚姻届提出後3年以内の新婚世帯が市内の賃貸住宅に居住する場合</span>、家賃の一部を補助する制度です。</p><p>佐賀市は生活コストが比較的低く、子育て環境も充実した住みやすい街として評価されています。結婚を機に佐賀市での生活をスタートする若い世帯を経済的に支援し、定住を促進しています。</p><p>補助額は<strong>月額最大2万円で、最長2年間</strong>受給できます。<span class="marker-green">夫婦の合計所得が基準額以下の世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届を提出した日から3年以内であること</p><p>夫婦の合計年齢が80歳未満であること（婚姻届提出日時点）</p><p>夫婦の合計所得が500万円未満であること</p><p>佐賀市内の賃貸住宅に居住していること</p></div><p>佐賀市役所企画政策課に申請書を提出します。婚姻届受理証明書、賃貸借契約書の写し、所得証明書などが必要です。</p><p><span class="marker">年度ごとの申請が必要</span>で、毎年4月に更新手続きを行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は家賃から住宅手当等を差し引いた額の一部で、<strong>月額最大2万円</strong>です。最長2年間で<strong>合計最大48万円</strong>の補助を受けられます。</p><p><span class="marker">公営住宅や社宅に居住している場合は対象外</span>です。また、親族が所有する住宅の賃貸も対象外となります。</p><div class="note-box">転居により佐賀市外に住所を移した場合は補助が終了します。夫婦ともに佐賀市に住民登録があることが必要です。引越し費用の補助制度も別途ありますので、あわせて確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-disability-medical',
    title: '佐賀市 障害者医療費助成制度',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '佐賀県',
    tags: ['佐賀市', '障害者医療', '助成金'],
    eligibility: '佐賀市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '佐賀市が実施する障害者医療費助成制度です。重度障害者の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 障害者医療費助成制度は、<span class="marker">重度の障害がある方の医療費自己負担分を助成</span>し、経済的負担を軽減する制度です。</p><p>佐賀市では、障害のある方が安心して医療を受けられるよう、保険診療にかかる自己負担分を全額助成しています。身体障害、知的障害、精神障害のいずれも対象となり、障害者の健康維持と生活の質の向上を支えています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象で、所得に応じた制限があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐賀市に住民登録がある方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A（重度知的障害）</p><p>精神障害者保健福祉手帳1級</p><p>特別児童扶養手当1級の支給対象児童</p></div><p>佐賀市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>所得課税証明書</strong>の提出が必要です。<span class="marker">更新手続きは毎年必要</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。佐賀県内の医療機関であれば受給資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="highlight-box">保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。障害の程度が変更された場合は届出が必要です。佐賀市では障害者の社会参加を支援するさまざまなサービスも提供していますので、障がい福祉課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-school-lunch',
    title: '佐賀市 学校給食費補助制度',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '佐賀県',
    tags: ['佐賀市', '学校給食', '補助金'],
    eligibility: '佐賀市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の転入も対応）',
    description: '佐賀市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額免除し、多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 学校給食費補助制度は、<span class="marker">佐賀市立小中学校に通う第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>佐賀市は食育にも力を入れており、地元産のお米や有明海ののりなど佐賀の食材を積極的に給食に取り入れています。多子世帯の教育費負担を軽減するとともに、すべての子どもに栄養バランスの良い食事を提供しています。</p><p><span class="marker-green">小学校・中学校に在籍する第3子以降の給食費が完全無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐賀市立小中学校に在籍する児童生徒の保護者で、当該児童生徒が第3子以降にあたる方が対象です。</p><div class="summary-box" data-title="カウント方法"><p>同一世帯で養育する18歳以下の子どものうち、年齢の高い方から数えます</p><p>第1子・第2子は対象外（通常の給食費を負担）</p><p>第3子以降が複数いる場合はすべて無料になります</p></div><p>毎年4月に学校を通じて申請書が配布されます。<strong>世帯全員の住民票</strong>と申請書を学校に提出してください。<span class="marker">年度途中に転入した場合も随時受付</span>可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>小学校の給食費は月額約4,500円、中学校は約5,200円</strong>が免除されます。年間で約5万円〜6万円の負担軽減となります。</p><p><span class="marker">就学援助制度の対象となっている場合は、そちらが優先</span>して適用されます（二重受給はできません）。</p><div class="note-box">アレルギー等で代替食を持参している場合の取り扱いは学校にお問い合わせください。私立学校に通う子どもは本制度の対象外ですが、第3子のカウントには含まれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-telework-bonus',
    title: '佐賀市 テレワーク導入支援補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '佐賀県',
    tags: ['佐賀市', 'テレワーク', '補助金'],
    eligibility: '佐賀市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '佐賀市が実施するテレワーク導入支援補助金です。テレワーク環境の整備に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 テレワーク導入支援補助金は、<span class="marker">市内中小企業がテレワーク環境を新たに導入する際の経費</span>を補助する制度です。</p><p>佐賀市はIT企業の進出が進んでおり、佐賀県庁が率先してテレワークを推進するなど、先進的な働き方改革に取り組んでいる地域です。中小企業のテレワーク導入を支援することで、多様な働き方の実現と人材確保を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信機器やクラウドサービスの導入費用が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる経費"><p>テレワーク用パソコン・タブレットの購入費</p><p>Web会議システム・クラウドサービスの導入費</p><p>VPN構築等のセキュリティ対策費</p><p>テレワーク関連の就業規則改定にかかるコンサルティング費</p></div><p>佐賀市役所産業振興課に事業計画書および申請書を提出します。2社以上の見積書が必要です。</p><p><span class="marker">交付決定前に購入・契約した経費は対象外</span>です。必ず事前に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者につき1回の利用に限られます。</p><p><span class="marker">テレワークの実施計画書を提出し、導入後6か月間の実施報告</span>が求められます。</p><div class="highlight-box">佐賀市では、テレワーク補助金のほかサテライトオフィスの誘致・整備も進めています。市内のコワーキングスペース情報も産業振興課で案内していますので、テレワーク導入の参考にしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-nursing-home-reform',
    title: '佐賀市 介護リフォーム補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大20万円（介護保険外の上乗せ分）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '佐賀県',
    tags: ['佐賀市', '介護リフォーム', '補助金'],
    eligibility: '佐賀市に住所を有する要介護・要支援認定者がいる世帯',
    applicationPeriod: '通年',
    description: '佐賀市が実施する介護リフォーム補助金です。介護保険の住宅改修費に加え、市独自の上乗せ補助として最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 介護リフォーム補助金は、<span class="marker">介護保険制度の住宅改修費（上限20万円）に上乗せして、市独自にさらに最大20万円を補助</span>する制度です。</p><p>高齢化が進む佐賀市では、住み慣れた自宅での生活を続けたいという高齢者の希望を支えるため、バリアフリー改修の費用負担を軽減しています。手すりの設置や段差の解消など、日常生活の安全性を高める工事が対象です。</p><p><span class="marker-green">介護保険の住宅改修費と合わせて、最大40万円相当の改修費補助</span>を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐賀市に住民登録がある要介護または要支援の認定を受けた方がいる世帯が対象です。</p><div class="summary-box" data-title="対象となる工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置等）</p><p>滑りにくい床材への変更</p><p>引き戸への取替え・和式トイレの洋式化</p></div><p>佐賀市役所長寿障害課に申請書を提出します。<strong>ケアマネジャーと相談のうえ、理由書を添付</strong>してください。<span class="marker">必ず工事着手前に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市の上乗せ補助は対象工事費の一部で、<strong>上限20万円</strong>です。介護保険の住宅改修費（自己負担1〜3割）と合わせて利用できます。</p><p><span class="marker">市民税非課税世帯は補助率が優遇される場合があります</span>。</p><div class="note-box">新築や全面リフォームは対象外です。介護保険の住宅改修と同一の工事箇所が対象となるため、ケアマネジャーと工事内容を十分に打ち合わせてから申請しましょう。完了後に現地確認が行われます。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-energy-support',
    title: '佐賀市 省エネ家電買換え補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '1台あたり最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '佐賀県',
    tags: ['佐賀市', '省エネ家電', '補助金'],
    eligibility: '佐賀市に住所を有する世帯',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '佐賀市が実施する省エネ家電買換え補助金です。省エネ性能の高い家電への買換えに1台あたり最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 省エネ家電買換え補助金は、<span class="marker">古い家電製品から省エネ性能の高い家電への買換え</span>を促進するため、購入費の一部を補助する制度です。</p><p>佐賀市は脱炭素社会の実現に向けた取り組みを進めており、家庭部門のCO2排出削減を目指しています。エネルギー価格の高騰が続く中、省エネ家電への買換えは環境にも家計にも優しい選択です。</p><p>補助額は購入価格の一定割合で、<strong>1台あたり最大3万円</strong>です。<span class="marker-green">エアコン・冷蔵庫・テレビなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる家電と条件"><p>統一省エネルギーラベル4つ星以上のエアコン</p><p>統一省エネルギーラベル4つ星以上の冷蔵庫</p><p>省エネ基準達成率100%以上のテレビ</p><p>佐賀市内の販売店で購入すること</p></div><p>佐賀市役所環境政策課に領収書と古い家電の引取り証明書を添えて申請します。</p><p><span class="marker">買換え（古い家電の廃棄）が条件</span>で、新規購入のみの場合は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入価格（税抜）の10%以内で、<strong>1台あたり最大3万円</strong>です。1世帯あたり2台まで申請可能です。</p><p><span class="marker">先着順で予算に達し次第終了</span>するため、早めの申請をおすすめします。</p><div class="highlight-box">省エネ家電への買換えにより、年間の電気代が数千円〜数万円節約できるケースもあります。佐賀市では太陽光発電設備やEV充電器の設置補助も別途実施していますので、あわせて検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'saga-city-bousai-equipment',
    title: '佐賀市 家庭用防災用品購入補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '佐賀県',
    tags: ['佐賀市', '防災用品', '補助金'],
    eligibility: '佐賀市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '佐賀市が実施する家庭用防災用品購入補助金です。防災用品の購入費に最大5万円を補助し、家庭の防災力向上を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市 家庭用防災用品購入補助金は、<span class="marker">家庭での防災・減災対策を推進するため、防災用品の購入費用</span>を補助する制度です。</p><p>佐賀市は2019年・2021年に大規模な水害に見舞われるなど、自然災害へのリスクが高い地域です。有明海沿岸部の高潮や筑後川の氾濫など、さまざまな災害に備えるため、家庭単位での防災力強化を支援しています。</p><p>補助率は購入費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">家具の転倒防止器具や蓄電池、防災セットなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐賀市に住民登録がある世帯が対象です。1世帯あたり1回の利用に限られます。</p><div class="summary-box" data-title="対象となる防災用品"><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>家庭用蓄電池・ポータブル電源</p><p>飲料水貯水タンク・非常用浄水器</p><p>防災用ヘルメット・防災リュックセット</p></div><p>佐賀市役所危機管理防災課に領収書と購入品の写真を添えて申請します。<strong>購入後3か月以内</strong>に手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1以内で、<strong>上限5万円</strong>です。複数の防災用品を合算して申請することも可能です。</p><p><span class="marker">食料品・飲料水などの消耗品は対象外</span>です。繰り返し使用できる防災用品・設備が対象となります。</p><div class="note-box">佐賀市では地域の防災訓練への参加や「マイ・タイムライン」（個人の避難行動計画）の作成も推奨しています。防災用品の購入と合わせて、日頃からの備えを心がけましょう。ハザードマップは佐賀市のWebサイトで確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 長崎市（長崎県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'nagasaki-city-childcare-subsidy',
    title: '長崎市 子育て応援手当',
    organization: '長崎市',
    type: 'local',
    maxAmount: '子ども1人あたり年間3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['長崎市', '子育て応援', '手当'],
    eligibility: '長崎市に住所を有し、小学生以下の子どもを養育する世帯',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '長崎市が実施する子育て応援手当です。小学生以下の子どもを養育する世帯に、子ども1人あたり年間3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 子育て応援手当は、<span class="marker">小学生以下（12歳到達後の最初の3月31日まで）の子どもを養育する世帯</span>に対し、子育て費用の一部として年間3万円を支給する制度です。</p><p>長崎市は世界遺産に登録された教会群や出島など、国際的な歴史を持つ港町です。坂が多い独特の地形で知られ、子育て世帯の生活コスト軽減は重要な課題です。ちゃんぽんや卓袱料理に代表される食文化も豊かな街で、安心して子育てができる環境づくりに取り組んでいます。</p><p><span class="marker-green">所得制限なし、すべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長崎市に住民登録があり、小学生以下の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座の情報</p></div><p>対象世帯には長崎市から案内が届きます。<strong>オンライン申請または長崎市こども政策課の窓口</strong>で手続きできます。<span class="marker">案内が届いてから3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり年間3万円</strong>です。子どもが複数いる場合は人数分が支給されます。</p><p><span class="marker">年度の途中で転入した場合は月割りで支給額が調整</span>されます。</p><div class="note-box">本手当は児童手当とは別の制度で、併給が可能です。年度の途中に長崎市外へ転出した場合は、転出月の翌月以降の分は支給されません。DV被害等で住民登録地と居住地が異なる場合は個別にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-birth-bonus',
    title: '長崎市 出産祝い金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['長崎市', '出産祝い金', '子育て支援'],
    eligibility: '長崎市に住所を有し、子どもを出産した方',
    applicationPeriod: '通年（出生届提出後6か月以内）',
    description: '長崎市が実施する出産祝い金です。第1子5万円、第2子以降10万円を支給し、出産を祝福・支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 出産祝い金は、<span class="marker">長崎市に住民登録がある方が出産した際に祝い金を支給</span>する制度です。</p><p>造船業と観光で発展してきた長崎市は、グラバー園や大浦天主堂、原爆資料館など歴史的資産に恵まれた国際色豊かな港町です。人口減少が課題となる中、出産への経済的支援を通じて少子化対策に取り組んでいます。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限なしで、すべての対象世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長崎市に住民登録があり、出産した方（または配偶者）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し（出生届出済証明のページ）</p><p>申請者の本人確認書類</p><p>振込先口座の情報</p></div><p><strong>出生届提出後6か月以内</strong>に長崎市こども政策課の窓口で申請します。各行政センター・地域センターでも受付可能です。<span class="marker">郵送やオンラインでの申請にも対応</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降は一律10万円</strong>です。多胎児の場合は出生児の人数分が支給されます。</p><p><span class="marker">出生順位は、申請時点で申請者が養育している子どもの数でカウント</span>されます。</p><div class="highlight-box">長崎市では出産祝い金のほか、妊婦健診費用の助成や産前産後ヘルパー派遣事業も実施しています。長崎市版ネウボラ「にこにこセンター」では、妊娠期から子育て期までの切れ目のない支援を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-housing-purchase',
    title: '長崎市 住宅取得補助金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '長崎県',
    tags: ['長崎市', '住宅取得', '補助金'],
    eligibility: '長崎市内に新たに住宅を取得し居住する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '長崎市が実施する住宅取得補助金です。市内に住宅を購入・新築する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 住宅取得補助金は、<span class="marker">長崎市内に住宅を新築または購入する方</span>に対して取得費用の一部を補助する制度です。</p><p>長崎市は坂の多い地形で知られ、住宅地の再開発やコンパクトシティの推進に力を入れています。新幹線西九州ルートの開業により交通利便性も向上し、定住促進のための住宅取得支援を強化しています。</p><p>基本補助額に各種加算を含めて<strong>最大50万円</strong>です。<span class="marker-green">市外からの転入者や子育て世帯には優遇加算があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>長崎市内に住宅を新築・購入し、自ら居住すること</p><p>住宅の延べ床面積が50㎡以上であること</p><p>市税の滞納がないこと</p><p>5年以上長崎市に定住する意思があること</p></div><p>長崎市役所住宅政策課に申請書と必要書類を提出します。売買契約書や登記事項証明書の写しが必要です。</p><p><span class="marker">住宅の引渡し日から6か月以内に申請</span>してください。事前相談は随時受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>最大30万円</strong>です。子育て世帯加算（18歳以下の子どもがいる世帯）<strong>10万円</strong>、市外転入加算<strong>10万円</strong>で、最大50万円となります。</p><p><span class="marker">対象地域が限定されている場合がありますので、購入前に対象エリアを確認</span>してください。</p><div class="note-box">投資用物件や別荘は対象外です。長崎市では斜面地の空き家対策にも力を入れており、空き家バンクの利用と組み合わせることで、よりお得に住宅を取得できる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-infertility',
    title: '長崎市 不妊治療費助成制度',
    organization: '長崎市',
    type: 'local',
    maxAmount: '1回あたり最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '長崎県',
    tags: ['長崎市', '不妊治療', '助成金'],
    eligibility: '長崎市に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後3か月以内に申請）',
    description: '長崎市が実施する不妊治療費助成制度です。保険適用後の自己負担分について1回あたり最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 不妊治療費助成制度は、<span class="marker">不妊治療を受ける夫婦・カップルの経済的負担を軽減するため、保険適用後の自己負担分を助成</span>する制度です。</p><p>長崎市は出生率の向上を目指して子育て支援施策の充実に取り組んでおり、不妊治療への支援もその柱のひとつです。保険適用対象外の先進医療や、複数回にわたる治療に伴う高額な費用負担を軽減します。</p><p><span class="marker-green">事実婚のカップルも対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長崎市に住民登録がある夫婦（事実婚を含む）で、指定医療機関において不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療内容証明書</p><p>治療費の領収書の写し</p><p>夫婦の住民票（事実婚は戸籍謄本も）</p></div><p><strong>治療終了日から3か月以内</strong>に長崎市保健所母子保健課へ申請してください。<span class="marker">郵送での申請も受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分で、<strong>1回の治療あたり最大30万円</strong>です。体外受精・顕微授精が主な対象です。</p><p><span class="marker">長崎県の不妊治療費助成制度との併用が可能</span>で、両方を活用することで負担を大幅に軽減できます。</p><div class="note-box">人工授精の費用も一部助成対象となる場合があります。不妊治療と仕事の両立に悩む方向けに、長崎市では両立支援の相談窓口も設けています。治療の経過や費用について不安がある場合は、保健所の相談窓口をご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-school-lunch',
    title: '長崎市 学校給食費助成制度',
    organization: '長崎市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '長崎県',
    tags: ['長崎市', '学校給食', '助成制度'],
    eligibility: '長崎市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の転入も対応）',
    description: '長崎市が実施する学校給食費助成制度です。第3子以降の児童生徒の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 学校給食費助成制度は、<span class="marker">長崎市立小中学校に通う第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>長崎市の学校給食では、長崎ちゃんぽんや皿うどんなど地元の食文化を取り入れたメニューも提供されています。多子世帯の教育費負担を軽減し、すべての子どもが安心して給食を楽しめる環境を整えています。</p><p><span class="marker-green">18歳以下の子どもの出生順位で第3子以降が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長崎市立小中学校に在籍する児童生徒の保護者で、当該児童生徒が第3子以降にあたる方が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>毎年4月に学校から申請書が配布されます</p><p>世帯全員の住民票を添えて学校に提出します</p><p>教育委員会で審査後、認定通知が届きます</p><p>認定された月から給食費が免除されます</p></div><p><span class="marker">年度途中に転入した場合も随時申請が可能</span>です。<strong>長崎市教育委員会学校教育課</strong>に直接提出することもできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>小学校の給食費は月額約4,300円、中学校は約5,000円</strong>が免除されます。年間で約5万円〜6万円の負担軽減です。</p><p><span class="marker">就学援助制度との二重受給はできません</span>。就学援助の対象者は就学援助が優先適用されます。</p><div class="highlight-box">長崎市では食物アレルギーを持つ児童生徒への対応も進めています。給食費の免除に関する質問やアレルギー対応食に関する相談は、各学校の栄養教諭または教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-sme-support',
    title: '長崎市 中小企業設備投資補助金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '長崎県',
    tags: ['長崎市', '中小企業', '設備投資補助'],
    eligibility: '長崎市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '長崎市が実施する中小企業設備投資補助金です。市内中小企業の生産性向上に資する設備投資に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 中小企業設備投資補助金は、<span class="marker">市内の中小企業者が生産性向上や業務効率化のために行う設備投資</span>に対して、費用の一部を補助する制度です。</p><p>長崎市は造船業を基幹産業として発展してきましたが、近年はIT、観光、医療機器など産業の多角化が進んでいます。中小企業の競争力強化と雇用の安定を図るため、設備投資への支援を充実させています。</p><p>補助率は対象経費の3分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">製造業、情報通信業、サービス業など幅広い業種が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備投資"><p>生産設備・加工機械の導入</p><p>業務用ソフトウェア・IT機器の導入</p><p>省エネルギー設備の導入</p><p>品質管理・検査設備の導入</p></div><p>長崎市役所商工振興課に事業計画書および申請書を提出します。設備の見積書（2社以上）と生産性向上計画の説明資料が必要です。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。事前相談のうえ、計画的に申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の1以内で、<strong>上限100万円</strong>です。対象経費は30万円以上の設備投資に限られます。</p><p><span class="marker">事業完了後に実績報告書と支出を証明する書類の提出</span>が必要です。</p><div class="note-box">車両の購入や土地・建物の取得は対象外です。リース契約の場合も補助対象外となります。長崎市商工会議所や長崎県産業振興財団が実施する無料の経営相談と併用することで、より効果的な設備投資計画を立てられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-nursing-equipment',
    title: '長崎市 介護用品購入費助成事業',
    organization: '長崎市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '長崎県',
    tags: ['長崎市', '介護用品', '助成事業'],
    eligibility: '長崎市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '長崎市が実施する介護用品購入費助成事業です。重度の要介護者を在宅で介護する家族に介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 介護用品購入費助成事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に、紙おむつ等の介護用品を支給する事業です。</p><p>坂の街・長崎では、高齢者の在宅生活は地形的にも大きな負担を伴います。長崎市では介護者の経済的・身体的負担を少しでも軽減するため、日常的に消費する介護用品の購入費を助成しています。</p><p><span class="marker-green">住民税非課税世帯の在宅介護者が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>長崎市に住民登録があること</p><p>要介護4または5の認定を受けた65歳以上の方を在宅で介護していること</p><p>被介護者が住民税非課税であること</p><p>被介護者が病院・施設に入所していないこと</p></div><p>長崎市役所高齢者すこやか支援課の窓口で申請します。<strong>担当のケアマネジャーを通じた申請も可能</strong>です。</p><p><span class="marker">申請後、支給決定通知が届いたらカタログから必要な用品を選択</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大約8,500円相当の介護用品</strong>が支給され、年間で最大約10万円相当となります。紙おむつ、尿取りパッド、使い捨て手袋、ウェットタオルなどが対象です。</p><p><span class="marker">入院中や施設入所中は支給が一時停止</span>されます。要介護度が変更された場合は届出が必要です。</p><div class="note-box">介護保険の福祉用具購入費（年間10万円上限）とは別の制度です。長崎市では介護者向けのリフレッシュ事業や介護者交流会も開催しています。介護の悩みをひとりで抱え込まず、地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-energy-support',
    title: '長崎市 省エネ住宅設備導入補助金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '長崎県',
    tags: ['長崎市', '省エネ設備', '補助金'],
    eligibility: '長崎市に住所を有し、自宅に省エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '長崎市が実施する省エネ住宅設備導入補助金です。太陽光発電・蓄電池・高効率給湯器等の導入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 省エネ住宅設備導入補助金は、<span class="marker">自宅に太陽光発電システム・家庭用蓄電池・高効率給湯器等の省エネ設備を導入する方</span>に、費用の一部を補助する制度です。</p><p>長崎市は2050年カーボンニュートラルの実現に向けて、家庭部門のCO2排出削減に取り組んでいます。エネルギー価格の高騰が続く中、省エネ設備の導入は光熱費の節約と環境保全の両面でメリットがあります。</p><p>設備の種類に応じて<strong>最大10万円</strong>が補助されます。<span class="marker-green">複数の設備を同時に導入する場合は合算して申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム（4kW以上）：最大5万円</p><p>家庭用蓄電池：最大5万円</p><p>高効率給湯器（エコキュート等）：最大3万円</p><p>HEMS（家庭用エネルギー管理システム）：最大2万円</p></div><p>長崎市役所環境政策課に申請書と見積書・カタログを提出します。</p><p><span class="marker">設備の設置工事前に申請が必要</span>です。交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設備の種類ごとに定められており、<strong>複数設備の合計で最大10万円</strong>です。1世帯につき1回の利用に限られます。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となりますので、早めの申請をおすすめします。</p><div class="highlight-box">長崎市では、国の「こどもエコすまい支援事業」や県の省エネ補助金との併用が可能な場合があります。複数の補助制度を組み合わせることで、初期費用をさらに抑えられます。詳しくは環境政策課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagasaki-city-seismic-diagnosis',
    title: '長崎市 住宅耐震診断費補助制度',
    organization: '長崎市',
    type: 'local',
    maxAmount: '診断費用の全額補助（木造住宅）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '長崎県',
    tags: ['長崎市', '耐震診断', '防災'],
    eligibility: '長崎市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '長崎市が実施する住宅耐震診断費補助制度です。旧耐震基準の木造住宅の耐震診断費用を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市 住宅耐震診断費補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額補助する制度です。</p><p>長崎市は急峻な斜面地に住宅が密集する独特の市街地構造を持ち、大規模地震が発生した場合の被害が懸念されています。特に古い木造住宅は倒壊リスクが高く、まずは耐震診断で住宅の安全性を確認することが重要です。</p><p><span class="marker-green">木造住宅の耐震診断は自己負担なしで受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>長崎市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法の住宅であること</p><p>過去にこの制度の補助を受けていないこと</p></div><p>長崎市役所建築指導課に申請書を提出します。建築確認通知書や登記事項証明書など建築年を確認できる書類が必要です。</p><p><span class="marker">市が委託する耐震診断士が自宅を訪問して調査</span>を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額市が負担</strong>し、申請者の自己負担はありません。診断後、耐震性不足と判定された場合は耐震改修工事の補助制度（最大100万円程度）も利用できます。</p><p><span class="marker">毎年度の予算枠に限りがあるため、早めの申請をおすすめします</span>。</p><div class="note-box">鉄骨造やRC造の住宅は本制度の対象外です。長崎市は斜面地が多いため、擁壁の安全性確認も重要です。耐震診断と合わせて、がけ地近接危険住宅の移転補助制度についても確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大分市（大分県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'oita-city-childcare-subsidy',
    title: '大分市 子育て世帯支援給付金',
    organization: '大分市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '大分県',
    tags: ['大分市', '子育て支援', '給付金'],
    eligibility: '大分市に住所を有し、18歳以下の子どもを養育する世帯',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '大分市が実施する子育て世帯支援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 子育て世帯支援給付金は、<span class="marker">18歳以下の子どもを養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>大分市は別府湾に面した大分県の県庁所在地で、温泉資源が豊富な街として知られています。関あじ・関さばなどの豊かな食文化に加え、半導体やIT関連産業も集積する東九州の中核都市です。子育て世帯の定住促進に向けた総合的な支援策を展開しています。</p><p><span class="marker-green">所得制限は設けられておらず、すべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大分市に住民登録があり、18歳以下の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座の通帳またはキャッシュカードの写し</p></div><p>対象世帯には大分市から案内通知が届きます。<strong>オンライン申請またはこども家庭課の窓口</strong>で手続きできます。<span class="marker">通知到着後3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>子ども1人あたり最大5万円</strong>です。子どもの人数分が支給されます。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>ので、早めに手続きしましょう。</p><div class="highlight-box">大分市では子育て支援給付金のほか、ファミリー・サポート・センター事業（育児の相互援助）や子育て交流広場「ここにこ」の運営など、多角的な子育て支援を実施しています。給付金と合わせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-birth-bonus',
    title: '大分市 出産祝い金制度',
    organization: '大分市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降30万円',
    maxAmountNum: 30,
    category: 'childcare',
    prefecture: '大分県',
    tags: ['大分市', '出産祝い金', '子育て支援'],
    eligibility: '大分市に住所を有し、子どもを出産した方',
    applicationPeriod: '通年（出生届提出後6か月以内）',
    description: '大分市が実施する出産祝い金制度です。第1子5万円、第3子以降は30万円を支給し、出産を祝福・支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 出産祝い金制度は、<span class="marker">大分市に住民登録がある方が出産した際に祝い金を支給</span>する制度です。</p><p>大分市は「日本一の温泉都市」として名高い別府市に隣接し、自然と都市機能が調和した暮らしやすい街です。特に多子世帯への支援を手厚くしており、第3子以降には30万円という高額な祝い金を設定しています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降30万円</strong>です。<span class="marker-green">所得制限なしで、すべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大分市に住民登録があり、出産した方（または配偶者）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座の情報</p></div><p><strong>出生届提出後6か月以内</strong>に大分市こども家庭課の窓口で申請します。<span class="marker">各支所・出張所でも受付可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順位に応じて段階的に増加します。<strong>第1子5万円、第2子10万円、第3子以降30万円</strong>です。多胎児の場合は出生児の人数分が支給されます。</p><p><span class="marker">出生順位は、申請時点で養育している18歳以下の子どもでカウント</span>されます。</p><div class="note-box">申請期限を過ぎた場合は受給資格を喪失します。大分市外で出産した場合でも、住民登録が大分市にあれば申請可能です。死産の場合は対象外となりますが、出産後にお子さんが亡くなられた場合は対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-newlywed-rent',
    title: '大分市 新婚世帯住居費補助金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '大分県',
    tags: ['大分市', '新婚世帯', '住居費補助'],
    eligibility: '大分市内に居住する婚姻届提出後2年以内の新婚世帯',
    applicationPeriod: '毎年4月〜翌年3月',
    description: '大分市が実施する新婚世帯住居費補助金です。新婚世帯の住居費（家賃・引越し費用等）を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 新婚世帯住居費補助金は、<span class="marker">婚姻届提出後2年以内の新婚世帯が大分市内に居住する場合</span>、住居費の一部を補助する制度です。</p><p>大分市は九州東部の交通の要衝であり、温泉や豊かな食文化に恵まれた住みやすい都市です。結婚を機に新生活をスタートする若い世帯を経済的に支援し、定住促進を図っています。</p><p>補助対象は家賃、敷金・礼金、引越し費用で、<strong>上限は30万円</strong>です。<span class="marker-green">夫婦の合計所得が500万円未満の世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届を提出した日から2年以内であること</p><p>婚姻届提出時に夫婦の合計年齢が80歳未満であること</p><p>夫婦の合計所得が500万円未満であること</p><p>大分市内に居住していること</p></div><p>大分市役所企画課に申請書を提出します。婚姻届受理証明書、賃貸借契約書の写し、引越し費用の領収書などが必要です。</p><p><span class="marker">住宅購入に伴う住居費（住宅ローンの元利返済）も対象</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は住居費（家賃、敷金・礼金、引越し費用、住宅ローンの支払い等）の合計で、<strong>上限30万円</strong>です。</p><p><span class="marker">公営住宅や親族所有の住宅に居住している場合は対象外</span>です。</p><div class="highlight-box">大分市では新婚世帯住居費補助のほか、結婚新生活支援事業として国の制度も活用しています。年度ごとに要件が変更される場合がありますので、最新の情報は大分市の窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-disability-medical',
    title: '大分市 障害者医療費助成制度',
    organization: '大分市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大分県',
    tags: ['大分市', '障害者医療', '助成金'],
    eligibility: '大分市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '大分市が実施する障害者医療費助成制度です。重度障害者の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 障害者医療費助成制度は、<span class="marker">重度の障害がある方の保険診療にかかる自己負担分を助成</span>する制度です。</p><p>大分市は「共生社会の実現」を掲げ、障害の有無にかかわらずすべての市民が安心して生活できる環境づくりに取り組んでいます。医療費の負担軽減により、障害者の健康維持と社会参加を支援しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>で、一定の所得基準を満たす方が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大分市に住民登録がある方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A（重度知的障害）</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳Bの重複障害</p></div><p>大分市役所障害福祉課の窓口で申請します。<strong>障害者手帳、健康保険証、所得証明書</strong>の提出が必要です。<span class="marker">毎年8月に更新手続き</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。大分県内の医療機関であれば受給資格者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は対象外です。一定額以上の所得がある場合は助成対象外となりますので、詳細は障害福祉課にお問い合わせください。障害の等級が変更された場合は届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-scholarship',
    title: '大分市 給付型奨学金制度',
    organization: '大分市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '大分県',
    tags: ['大分市', '奨学金', '教育支援'],
    eligibility: '大分市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '大分市が実施する給付型奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対して、返済不要の奨学金を給付する制度です。</p><p>大分市は大分大学や日本文理大学など複数の高等教育機関が立地する学術都市でもあります。家庭の経済状況に左右されず、意欲ある学生が学び続けられるよう、市独自の給付型奨学金を設けています。</p><p><span class="marker-green">返済不要で、日本学生支援機構の奨学金との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大分市に住民登録がある世帯の子どもであること</p><p>高等学校、大学、短大、専門学校等に在学中であること</p><p>世帯の所得が基準額以下であること</p><p>学業に真摯に取り組んでいること</p></div><p>毎年3月〜4月に大分市教育委員会学校教育課で募集します。申請書、在学証明書、成績証明書、所得証明書の提出が必要です。</p><p><span class="marker">選考は学業成績と家庭の経済状況を総合的に判断</span>して行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生が月額1万円、大学生等が月額最大3万円</strong>です。給付期間は在学する学校の最短修業年限です。</p><p><span class="marker">退学・休学した場合は給付が停止</span>されます。学業成績が著しく低下した場合も同様です。</p><div class="highlight-box">大分市独自の奨学金のほか、大分県育英奨学会の奨学金や各大学の授業料免除制度など、複数の支援制度を組み合わせることも可能です。教育委員会の窓口で自分に合った制度を相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-telework-bonus',
    title: '大分市 テレワーク環境整備補助金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '大分県',
    tags: ['大分市', 'テレワーク', '補助金'],
    eligibility: '大分市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '大分市が実施するテレワーク環境整備補助金です。テレワーク導入に必要な機器・システム等の経費を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 テレワーク環境整備補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する際の経費</span>を補助する制度です。</p><p>大分市は東九州自動車道の整備や大分空港からのアクセス向上に伴い、IT関連企業の進出が増えています。多様な働き方の実現と地方における人材確保を支援するため、テレワーク導入への補助を行っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">通信機器の購入費やクラウドサービスの利用料が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる経費"><p>テレワーク用パソコン・モバイル端末の購入費</p><p>Web会議システム・グループウェアの導入費</p><p>VPN・セキュリティソフトの導入費</p><p>テレワーク関連の社内規程整備にかかる費用</p></div><p>大分市役所商工労働観光部に事業計画書と申請書を提出します。</p><p><span class="marker">交付決定前に購入・契約した経費は補助対象外</span>です。必ず事前に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者につき1回の利用に限られます。</p><p><span class="marker">テレワーク導入後の実施報告書の提出が必要</span>です。実際にテレワークを実施した実績が求められます。</p><div class="note-box">個人事業主も対象となりますが、従業員のいない場合は一部制限があります。大分市では市内にコワーキングスペースの整備も進めており、テレワーク環境の充実に取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-nursing-home-reform',
    title: '大分市 介護住宅改修補助金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大20万円（介護保険外の上乗せ分）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '大分県',
    tags: ['大分市', '介護住宅改修', '補助金'],
    eligibility: '大分市に住所を有する要介護・要支援認定者がいる世帯',
    applicationPeriod: '通年',
    description: '大分市が実施する介護住宅改修補助金です。介護保険の住宅改修費に上乗せし、市独自に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 介護住宅改修補助金は、<span class="marker">介護保険制度の住宅改修費（上限20万円）では賄いきれないバリアフリー改修</span>に対し、市独自の上乗せ補助として最大20万円を支給する制度です。</p><p>大分市は温泉の恵みを活かした健康寿命の延伸に取り組む一方、高齢化に伴う在宅介護の需要も増加しています。住み慣れた自宅での生活を安全に続けられるよう、介護に適した住環境整備を支援しています。</p><p><span class="marker-green">介護保険の住宅改修費と合わせて最大40万円の改修補助</span>を受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大分市に住民登録がある要介護または要支援の認定を受けた方がいる世帯が対象です。</p><div class="summary-box" data-title="対象となる工事"><p>手すりの設置（玄関・廊下・浴室・トイレ等）</p><p>段差の解消（スロープ・踏み台の設置等）</p><p>床材の変更（滑りにくい素材への張替え）</p><p>引き戸への取替え・和式トイレの洋式化</p></div><p>大分市役所長寿福祉課に申請書を提出します。<strong>ケアマネジャーの理由書と改修計画書</strong>の添付が必要です。<span class="marker">工事着手前の申請が必須</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市の上乗せ補助は<strong>上限20万円</strong>です。介護保険の住宅改修費（自己負担1〜3割）とは別に利用できます。</p><p><span class="marker">住民税非課税世帯は補助率が優遇される場合</span>があります。詳細は窓口でご確認ください。</p><div class="highlight-box">大分市では「住宅改修アドバイザー」制度を設けており、改修工事の内容や費用について専門家の助言を無料で受けられます。改修後の生活を見据えた計画を立てるために、ぜひ活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-elderly-support',
    title: '大分市 高齢者生活支援サービス事業',
    organization: '大分市',
    type: 'local',
    maxAmount: '配食サービス1食あたり300円助成等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '大分県',
    tags: ['大分市', '高齢者支援', '生活支援'],
    eligibility: '大分市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '大分市が実施する高齢者生活支援サービス事業です。ひとり暮らし高齢者に配食サービスや緊急通報装置の貸与を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 高齢者生活支援サービス事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、日常生活を支える各種サービスを提供する事業です。</p><p>大分市は温泉と自然に恵まれた環境の中で、高齢者が地域で安心して暮らし続けられる「地域包括ケアシステム」の構築に力を入れています。配食サービスによる安否確認や緊急通報装置の貸与など、見守りと生活支援を組み合わせたサービスを展開しています。</p><p><span class="marker-green">複数のサービスを組み合わせて利用でき、費用は低額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大分市に住民登録がある65歳以上のひとり暮らしの方や、高齢者のみの世帯が対象です。</p><div class="summary-box" data-title="主なサービス内容"><p>配食サービス（栄養バランスのとれた食事を自宅に配達、安否確認付き）</p><p>緊急通報装置の貸与（ペンダント型ボタンで24時間対応）</p><p>家事援助サービス（掃除・洗濯・買い物の支援）</p><p>外出支援サービス（通院等の送迎）</p></div><p>大分市役所長寿福祉課または<strong>お住まいの地域の地域包括支援センター</strong>で申請します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>配食サービス</strong>は1食あたり自己負担300円〜400円程度で利用できます（市が1食あたり約300円を助成）。<strong>緊急通報装置</strong>は設置・利用とも無料です。</p><p><span class="marker">介護保険サービスとの併用が可能</span>ですが、サービス内容が重複する場合は介護保険が優先されます。</p><div class="note-box">各サービスの利用にあたっては、地域包括支援センターの職員による訪問調査が行われます。サービスの種類によっては所得に応じた利用者負担があります。まずはお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oita-city-bousai-equipment',
    title: '大分市 家庭用防災設備購入補助金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '大分県',
    tags: ['大分市', '防災設備', '補助金'],
    eligibility: '大分市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '大分市が実施する家庭用防災設備購入補助金です。家具転倒防止器具や蓄電池等の購入に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市 家庭用防災設備購入補助金は、<span class="marker">家庭での防災・減災対策に必要な設備・用品の購入費用</span>を補助する制度です。</p><p>大分市は別府湾断層帯による地震リスクや、大分川・大野川の洪水リスクなど、複数の自然災害リスクを抱えています。2016年の熊本地震では大分県内でも大きな揺れを観測しました。家庭単位での防災力向上が急務です。</p><p>補助率は購入費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">家具転倒防止器具やポータブル蓄電池などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>家具転倒防止器具（L字金具、突っ張り棒、ストッパー等）</p><p>家庭用ポータブル蓄電池・発電機</p><p>感震ブレーカー（地震時自動遮断装置）</p><p>飲料水貯水タンク・携帯用浄水器</p></div><p>大分市役所防災危機管理課に領収書と製品の写真を添えて申請します。<strong>購入後3か月以内</strong>に申請してください。</p><p><span class="marker">1世帯あたり1回限りの利用</span>に限られます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1以内で、<strong>上限5万円</strong>です。複数品目を合算して申請できます。</p><p><span class="marker">食料品・飲料水などの消耗品は対象外</span>で、繰り返し使用可能な防災設備が対象です。</p><div class="note-box">大分市では「わが家の防災マニュアル」の作成支援や、地域の防災リーダー養成講座も実施しています。防災設備の購入と合わせて、日頃からの避難計画の確認やハザードマップの確認を習慣にしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 宮崎市（宮崎県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'miyazaki-city-childcare-subsidy',
    title: '宮崎市 保育料助成制度',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '宮崎県',
    tags: ['宮崎市', '保育料助成', '子育て支援'],
    eligibility: '宮崎市に住所を有し、認可保育所等を利用する多子世帯',
    applicationPeriod: '通年（年度ごとに自動適用）',
    description: '宮崎市が実施する保育料助成制度です。第2子は保育料半額、第3子以降は無料とすることで多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 保育料助成制度は、<span class="marker">認可保育所・認定こども園等を利用する多子世帯</span>の保育料を軽減する制度です。</p><p>宮崎市は温暖な気候と青島に代表される美しい海岸線が魅力の南九州の中核都市です。プロ野球のキャンプ地としても全国的に知られ、マンゴーやチキン南蛮など独自の食文化も豊かです。子育てしやすい環境づくりの一環として、多子世帯の保育料負担を大幅に軽減しています。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は保育料が完全無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宮崎市に住民登録があり、認可保育施設を利用している世帯で、2人以上の子どもを養育している方が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：通常の保育料を負担</p><p>第2子：保育料が半額に軽減</p><p>第3子以降：保育料が無料</p><p>カウントは同一世帯の18歳以下の子どもで判定</p></div><p>保育所の入所手続きの際に世帯構成を申告することで<strong>自動的に軽減が適用</strong>されます。<span class="marker">別途の申請は原則不要</span>ですが、世帯構成に変更がある場合は届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子の保育料は半額</strong>に、<strong>第3子以降は全額免除</strong>されます。年齢に関係なく子どもの出生順位でカウントされるため、上の子が高校生でも第1子として数えます。</p><p><span class="marker">3歳以上の幼児教育・保育の無償化とは別の制度</span>です。0〜2歳児の保育料が主な軽減対象となります。</p><div class="note-box">認可外保育施設は本制度の直接の対象外ですが、宮崎市では認可外保育施設の利用者向けに別途補助制度を設けている場合があります。詳しくは保育幼稚園課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-birth-bonus',
    title: '宮崎市 出産お祝い金',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '第1子3万円・第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '宮崎県',
    tags: ['宮崎市', '出産祝い金', '子育て支援'],
    eligibility: '宮崎市に住所を有し、子どもを出産した方',
    applicationPeriod: '通年（出生届提出後6か月以内）',
    description: '宮崎市が実施する出産お祝い金です。第1子3万円、第3子以降10万円を支給し、出産・子育てを応援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 出産お祝い金は、<span class="marker">宮崎市に住民登録がある方が出産した際にお祝い金を支給</span>する制度です。</p><p>日照時間が全国トップクラスの宮崎市は、「日本のひなた」として親しまれる温暖な都市です。サーフィンやアウトドアスポーツが盛んで、自然の中でのびのびと子どもを育てられる環境が整っています。出産を祝い、子育てのスタートを応援する祝い金です。</p><p>支給額は<strong>第1子3万円、第2子5万円、第3子以降10万円</strong>です。<span class="marker-green">所得制限なし、すべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宮崎市に住民登録があり、出産した方（または配偶者）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産お祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座の情報</p></div><p><strong>出生届提出後6か月以内</strong>に宮崎市こども家庭課の窓口で申請します。各総合支所でも受付可能です。<span class="marker">郵送での申請も受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順位に応じて異なります。<strong>第1子3万円、第2子5万円、第3子以降10万円</strong>が指定口座に振り込まれます。多胎児の場合は人数分が支給されます。</p><p><span class="marker">出生順位は申請時点で養育している18歳以下の子どもの数でカウント</span>されます。</p><div class="highlight-box">宮崎市では出産お祝い金のほか、妊婦健診14回分の費用助成や産後ケア事業（宿泊型・通所型・訪問型）も実施しています。「みやざき子育てナビ」アプリで各種支援情報をまとめて確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-housing-purchase',
    title: '宮崎市 マイホーム取得支援補助金',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '宮崎県',
    tags: ['宮崎市', '住宅取得', '補助金'],
    eligibility: '宮崎市内に新たに住宅を取得する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '宮崎市が実施するマイホーム取得支援補助金です。市内に住宅を購入・新築する方に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 マイホーム取得支援補助金は、<span class="marker">宮崎市内に住宅を新築または購入する方</span>に対し、取得費用の一部を補助する制度です。</p><p>宮崎市は温暖な気候と自然に恵まれ、生活コストも比較的低い暮らしやすい街です。青島の亜熱帯植物や大淀川の清流など、豊かな環境の中でマイホームを構える世帯を支援しています。</p><p>基本補助額に加算を含めて<strong>最大40万円</strong>です。<span class="marker-green">子育て世帯や市外からの転入世帯には加算あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>宮崎市内に住宅を新築・購入し、自ら居住すること</p><p>取得する住宅の延べ床面積が50㎡以上であること</p><p>市税の滞納がないこと</p><p>5年以上宮崎市に居住する意思があること</p></div><p>宮崎市役所住宅課に申請書と必要書類を提出します。売買契約書または建築請負契約書の写しが必要です。</p><p><span class="marker">住宅の引渡し日から6か月以内に申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>最大20万円</strong>です。子育て世帯加算<strong>10万円</strong>、市外転入加算<strong>10万円</strong>で、合計最大40万円の補助が受けられます。</p><p><span class="marker">投資用物件や別荘は対象外</span>です。また、過去にこの制度の補助を受けた方は再度の利用はできません。</p><div class="note-box">宮崎市は台風の通り道に位置するため、耐風性能の高い住宅の取得が推奨されています。住宅金融支援機構のフラット35（地域連携型）と組み合わせることで、住宅ローン金利の引下げを受けられる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-infertility',
    title: '宮崎市 不妊・不育症治療費助成制度',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '1回あたり最大20万円',
    maxAmountNum: 20,
    category: 'medical',
    prefecture: '宮崎県',
    tags: ['宮崎市', '不妊治療', '不育症', '助成金'],
    eligibility: '宮崎市に住所を有し、不妊・不育症の治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後3か月以内に申請）',
    description: '宮崎市が実施する不妊・不育症治療費助成制度です。保険適用後の自己負担分について1回あたり最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 不妊・不育症治療費助成制度は、<span class="marker">不妊治療および不育症の治療にかかる経済的負担を軽減するため、自己負担分を助成</span>する制度です。</p><p>宮崎市は不妊治療だけでなく、繰り返す流産や死産に悩む不育症への支援も手厚く行っている数少ない自治体のひとつです。子どもを望むすべてのカップルが安心して治療に取り組める環境づくりを進めています。</p><p><span class="marker-green">事実婚のカップルも対象で、不育症治療も助成の範囲に含まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宮崎市に住民登録がある夫婦（事実婚を含む）で、医療機関において不妊・不育症の治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成申請書</p><p>医療機関が発行する治療内容証明書</p><p>治療費の領収書の写し</p><p>夫婦の住民票</p></div><p><strong>治療終了日から3か月以内</strong>に宮崎市保健所健康支援課へ申請します。<span class="marker">不育症治療は検査費用も助成対象</span>に含まれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>不妊治療が1回あたり最大20万円</strong>、<strong>不育症治療が年間最大30万円</strong>です。体外受精・顕微授精・不育症検査・治療が主な対象です。</p><p><span class="marker">宮崎県の不妊治療費助成制度との併用が可能</span>で、両制度を活用することで負担をさらに軽減できます。</p><div class="note-box">宮崎市では不妊・不育症に関する専門相談窓口を設けています。治療の進め方や費用面の不安について、保健師や助産師に相談できます。男性不妊の治療も助成対象となる場合がありますので、詳しくはお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-scholarship-v2',
    title: '宮崎市 奨学金給付制度',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '宮崎県',
    tags: ['宮崎市', '奨学金', '教育支援'],
    eligibility: '宮崎市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '宮崎市が実施する奨学金給付制度です。経済的理由で修学が困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 奨学金給付制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、返済不要の奨学金を給付する制度です。</p><p>宮崎市は宮崎大学や宮崎公立大学などの教育機関が集まる県の中心都市です。温暖な気候と豊かな自然のもと、学生がのびのびと学べる環境を整えるとともに、経済的な壁を取り除く奨学金制度を充実させています。</p><p><span class="marker-green">返済不要の給付型で、他の奨学金との併用も原則可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>宮崎市に住民登録がある世帯の子どもであること</p><p>高等学校、大学、短大、専門学校等に在学または入学予定であること</p><p>世帯の所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>宮崎市教育委員会学校教育課で毎年3月〜4月に募集を行います。申請書、成績証明書、所得証明書等の提出が必要です。</p><p><span class="marker">募集人数に限りがあり、選考のうえ決定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生が月額1万円、大学生等が月額最大3万円</strong>です。給付期間は最短修業年限までです。</p><p><span class="marker">退学・長期休学した場合は給付が停止</span>されます。</p><div class="highlight-box">宮崎市では奨学金のほか、ひとり親世帯の子どもを対象とした学習支援事業も実施しています。宮崎県育英資金や各大学の独自奨学金と組み合わせることで、学費の不安をさらに軽減できます。教育委員会の窓口で最適な組み合わせを相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-telework-bonus',
    title: '宮崎市 テレワーク移住支援補助金',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '宮崎県',
    tags: ['宮崎市', 'テレワーク移住', '補助金'],
    eligibility: '宮崎市へ移住しテレワークで就業する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '宮崎市が実施するテレワーク移住支援補助金です。テレワークで宮崎市に移住する方に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 テレワーク移住支援補助金は、<span class="marker">首都圏等から宮崎市に移住し、テレワークで現在の仕事を継続する方</span>に対して引越し費用等を補助する制度です。</p><p>日照時間が長く温暖な宮崎市は、サーフィンやゴルフなどのアウトドアスポーツが日常的に楽しめるワーケーション先としても人気が高まっています。テレワークの普及により場所を選ばない働き方が広がる中、「宮崎に住みながら東京の仕事をする」ライフスタイルを応援しています。</p><p>補助額は引越し費用等の一部で、<strong>上限は30万円</strong>です。<span class="marker-green">年齢や職種の制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>宮崎市外から宮崎市に新たに転入すること</p><p>テレワーク（在宅勤務等）で所属先の業務を行っていること</p><p>宮崎市に3年以上継続して居住する意思があること</p><p>移住前の勤務先が宮崎市外に所在すること</p></div><p>宮崎市役所企画政策課に申請書と雇用証明書（テレワーク勤務であることの証明）を提出します。</p><p><span class="marker">転入後6か月以内に申請が必要</span>です。転入前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は引越し費用・住居費の一部で、<strong>上限30万円</strong>です。子育て世帯には加算がある場合もあります。</p><p><span class="marker">3年以内に宮崎市から転出した場合は補助金の返還</span>が求められます。</p><div class="highlight-box">宮崎市では移住体験プログラム「ひなた暮らし体験」や、コワーキングスペースの利用支援も実施しています。移住を検討中の方は、まずオンライン移住相談で宮崎市の暮らしについて情報収集することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-nursing-equipment',
    title: '宮崎市 在宅介護用品支給事業',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '宮崎県',
    tags: ['宮崎市', '介護用品', '支給事業'],
    eligibility: '宮崎市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '宮崎市が実施する在宅介護用品支給事業です。重度の要介護者を在宅で介護する家族に介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 在宅介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護する家族</span>に対し、紙おむつ等の介護用品を支給する事業です。</p><p>宮崎市は温暖な気候を活かした高齢者の健康づくりに取り組んでいますが、在宅介護の負担軽減も重要な課題です。日常的に消費する介護用品の費用は家計に大きな影響を与えるため、市が現物支給で支援しています。</p><p><span class="marker-green">住民税非課税世帯を対象に、月額約8,000円相当の介護用品を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>宮崎市に住民登録があること</p><p>要介護4または5の認定を受けた65歳以上の方を在宅で介護していること</p><p>被介護者が住民税非課税であること</p><p>被介護者が病院・施設に入所していないこと</p></div><p>宮崎市役所介護保険課の窓口で申請します。<strong>ケアマネジャーを通じた申請も可能</strong>です。</p><p><span class="marker">申請後、カタログから必要な介護用品を選択</span>し、毎月自宅に届けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大約8,000円相当</strong>の介護用品が支給され、年間で約10万円相当です。紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などから選択できます。</p><p><span class="marker">入院中や施設入所中は支給が一時停止</span>されます。</p><div class="note-box">要介護度が3以下に変更された場合は対象外となります。介護保険の福祉用具購入費（年間10万円上限）とは別の制度です。宮崎市では介護者のためのリフレッシュ事業も実施していますので、地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-elderly-support',
    title: '宮崎市 高齢者生活支援事業',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与・配食サービス等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '宮崎県',
    tags: ['宮崎市', '高齢者支援', '生活支援'],
    eligibility: '宮崎市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '宮崎市が実施する高齢者生活支援事業です。ひとり暮らし高齢者に緊急通報装置の貸与や配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、安心して在宅生活を送るための各種支援サービスを提供する事業です。</p><p>温暖な気候に恵まれた宮崎市は高齢者にとっても暮らしやすい街ですが、ひとり暮らしの高齢者の増加に伴い、見守り体制の強化が求められています。緊急通報装置や配食サービスを通じて、安全で安心な在宅生活をサポートしています。</p><p><span class="marker-green">緊急通報装置の利用は無料で、24時間365日の見守り体制</span>を確保します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宮崎市に住民登録がある65歳以上のひとり暮らしの方、または高齢者のみの世帯が対象です。</p><div class="summary-box" data-title="主なサービス"><p>緊急通報装置の無料貸与（ペンダント型・据置型）</p><p>配食サービス（安否確認付き、1食350円程度）</p><p>軽度生活援助（草取り、電球交換等の日常のお困りごと支援）</p><p>寝具洗濯乾燥サービス（寝具の衛生管理支援）</p></div><p>宮崎市役所介護保険課または<strong>地域包括支援センター</strong>で相談・申請ができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置</strong>は無料で貸与され、ボタンひとつで消防局や協力員に通報できます。<strong>配食サービス</strong>は1食350円程度の自己負担で栄養バランスの良い食事が届きます。</p><p><span class="marker">サービスの利用にあたっては訪問調査による判定</span>が行われます。</p><div class="highlight-box">宮崎市では「地域見守りネットワーク」を構築し、新聞配達員や郵便局員など地域の協力者による見守り活動も行っています。サービスの利用と合わせて、地域のつながりを大切にしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyazaki-city-bousai-equipment',
    title: '宮崎市 防災資機材購入補助金',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大5万円（世帯）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '宮崎県',
    tags: ['宮崎市', '防災資機材', '補助金'],
    eligibility: '宮崎市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '宮崎市が実施する防災資機材購入補助金です。家庭用の防災設備・用品の購入に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎市 防災資機材購入補助金は、<span class="marker">家庭での防災・減災対策に必要な資機材の購入費用</span>を補助する制度です。</p><p>宮崎市は南海トラフ巨大地震による津波被害が懸念される地域であり、台風の通り道にも位置しています。2022年の台風14号では市内で大きな被害が発生しました。家庭レベルでの防災力向上が急務となっています。</p><p>補助率は購入費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">家具転倒防止器具から蓄電池まで幅広い品目が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災資機材"><p>家具転倒防止器具・ガラス飛散防止フィルム</p><p>家庭用ポータブル蓄電池・ソーラーパネル</p><p>防災用テント・防災リュックセット</p><p>感震ブレーカー・非常用浄水器</p></div><p>宮崎市役所危機管理課に領収書と購入品の写真を添えて申請します。</p><p><span class="marker">購入後3か月以内に申請</span>してください。1世帯1回限りの利用です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1以内で、<strong>上限5万円</strong>です。複数品目の合算申請も可能です。</p><p><span class="marker">食料品・飲料水等の消耗品は対象外</span>です。繰り返し使用できる防災資機材が補助対象です。</p><div class="note-box">宮崎市では津波避難タワーの整備や避難訓練の実施、防災マップの配布なども行っています。防災資機材の購入と合わせて、家族で避難場所・避難経路を確認し、「マイ・タイムライン」を作成しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 鹿児島市（鹿児島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kagoshima-city-childcare-subsidy',
    title: '鹿児島市 子育て応援給付金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '子育て応援', '給付金'],
    eligibility: '鹿児島市に住所を有し、18歳以下の子どもを養育する世帯',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '鹿児島市が実施する子育て応援給付金です。子育て世帯に子ども1人あたり最大5万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 子育て応援給付金は、<span class="marker">18歳以下の子どもを養育する世帯</span>に対し、子育て費用の一部を給付する制度です。</p><p>鹿児島市は桜島を擁する南九州最大の都市です。西郷隆盛をはじめ多くの偉人を輩出した歴史ある街で、黒豚や焼酎など豊かな食文化にも恵まれています。天文館を中心とした繁華街の賑わいと、桜島の雄大な自然が共存する鹿児島市で、安心して子育てができるよう支援しています。</p><p><span class="marker-green">所得制限は設けられておらず、すべての対象世帯が給付を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鹿児島市に住民登録があり、18歳以下の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類（マイナンバーカード等）</p><p>子どもの健康保険証の写し</p><p>振込先口座の情報</p></div><p>対象世帯には鹿児島市から案内通知が届きます。<strong>オンライン申請または鹿児島市こども政策課の窓口</strong>で手続きできます。<span class="marker">案内到着後3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>子ども1人あたり最大5万円</strong>で、子どもの人数分が支給されます。</p><p><span class="marker">申請期限を過ぎると受給できません</span>ので、案内が届いたら速やかに手続きしましょう。</p><div class="highlight-box">鹿児島市では子育て応援給付金のほか、親子つどいの広場やファミリー・サポート・センター事業、子育て短期支援事業（ショートステイ）など、多彩な子育て支援サービスを展開しています。「かごしま子育て支援パスポート」も合わせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-birth-bonus',
    title: '鹿児島市 出産祝い金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '出産祝い金', '子育て支援'],
    eligibility: '鹿児島市に住所を有し、子どもを出産した方',
    applicationPeriod: '通年（出生届提出後6か月以内）',
    description: '鹿児島市が実施する出産祝い金です。第1子5万円、第3子以降20万円を支給し、出産・育児を応援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 出産祝い金は、<span class="marker">鹿児島市に住民登録がある方が出産した際に祝い金を支給</span>する制度です。</p><p>鹿児島市は南九州の玄関口として、九州新幹線や鹿児島空港を活用した広域ネットワークの拠点です。桜島を望む錦江湾沿いの暮らしは温暖で穏やかで、子育て環境としても魅力的です。少子化対策の一環として、出産への経済的支援を充実させています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。<span class="marker-green">所得制限なしで、すべての対象世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鹿児島市に住民登録があり、出産した方が対象です。出産場所は市内外を問いません。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座の情報</p></div><p><strong>出生届提出後6か月以内</strong>に鹿児島市こども家庭課の窓口で申請します。各支所でも受付可能です。<span class="marker">オンライン申請にも対応</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順位により異なります。<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。多胎児の場合は人数分が支給されます。</p><p><span class="marker">出生順位は申請時点で養育している18歳以下の子どもの数でカウント</span>されます。</p><div class="note-box">申請期限（出生後6か月以内）を過ぎると受給できなくなります。鹿児島市では産後ケア事業や新生児訪問事業も実施しており、出産後の母子の健康をトータルで支援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-newlywed-rent',
    title: '鹿児島市 新婚世帯新生活支援補助金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '新婚世帯', '新生活支援'],
    eligibility: '鹿児島市内に居住する婚姻届提出後2年以内の新婚世帯',
    applicationPeriod: '毎年4月〜翌年3月',
    description: '鹿児島市が実施する新婚世帯新生活支援補助金です。新婚世帯の住居費・引越し費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 新婚世帯新生活支援補助金は、<span class="marker">婚姻届提出後2年以内の新婚世帯が鹿児島市内に居住する場合</span>、住居費や引越し費用を補助する制度です。</p><p>鹿児島市は桜島の雄大な景観と温泉、黒豚・さつま揚げなどの食文化で知られる魅力的な都市です。新たに結婚した世帯が鹿児島市で新生活を始める際の経済的負担を軽減し、若い世帯の定住を促進しています。</p><p>対象費用は家賃、敷金・礼金、引越し費用で、<strong>上限は30万円</strong>です。<span class="marker-green">夫婦の合計所得が500万円未満の世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届を提出した日から2年以内であること</p><p>婚姻届提出日時点で夫婦の合計年齢が80歳未満であること</p><p>夫婦の合計所得が500万円未満であること</p><p>鹿児島市内に居住していること</p></div><p>鹿児島市役所企画調整課に申請書を提出します。婚姻届受理証明書、賃貸借契約書の写し、引越し費用の領収書等が必要です。</p><p><span class="marker">住宅購入費用（住宅ローン返済額）も対象</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は住居費（家賃、敷金・礼金、住宅ローン支払い）と引越し費用の合計で、<strong>上限30万円</strong>です。</p><p><span class="marker">公営住宅や社宅に居住している場合は対象外</span>です。親族所有の物件も対象外となります。</p><div class="highlight-box">鹿児島市では新婚世帯向けに、市営住宅の優先入居制度や結婚新生活に関する相談窓口も設けています。桜島の灰が気になる方は、降灰の影響が比較的少ない地域の住宅情報も窓口で案内しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-disability-medical',
    title: '鹿児島市 重度障害者医療費助成制度',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '障害者医療', '助成制度'],
    eligibility: '鹿児島市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '鹿児島市が実施する重度障害者医療費助成制度です。重度障害者の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 重度障害者医療費助成制度は、<span class="marker">重度の障害がある方の保険診療にかかる自己負担分を全額助成</span>する制度です。</p><p>鹿児島市は「共に支え合い、誰もが安心して暮らせるまち」を目指し、障害者福祉の充実に取り組んでいます。医療費の負担を軽減することで、重度障害のある方が安心して必要な医療を受けられる環境を整えています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鹿児島市に住民登録がある方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A（A1・A2）</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳B1の重複障害</p></div><p>鹿児島市役所障害福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>本人確認書類と所得証明書</strong>の提出が必要です。<span class="marker">毎年更新手続きが必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。鹿児島県内の医療機関であれば受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関では一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。所得が一定額を超える場合は助成対象外となります。障害の程度に変更があった場合は速やかに届出をしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-school-lunch',
    title: '鹿児島市 学校給食費助成制度',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '第3子以降全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '学校給食費', '助成制度'],
    eligibility: '鹿児島市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の転入も対応）',
    description: '鹿児島市が実施する学校給食費助成制度です。第3子以降の児童生徒の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 学校給食費助成制度は、<span class="marker">鹿児島市立小中学校に通う第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>鹿児島市の学校給食には、黒豚や桜島大根、かつお節など地元の食材がふんだんに使われています。食育の推進とともに、多子世帯の教育費負担を軽減し、すべての子どもが安心して学校生活を送れるよう支援しています。</p><p><span class="marker-green">同一世帯で養育する18歳以下の子どもの出生順位でカウント</span>し、第3子以降が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鹿児島市立小中学校に在籍する児童生徒の保護者で、当該児童生徒が第3子以降にあたる方が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>毎年4月に学校を通じて案内・申請書が配布されます</p><p>世帯全員の住民票を添えて学校に提出</p><p>教育委員会で審査、認定通知を送付</p><p>認定月から給食費の免除が開始</p></div><p><span class="marker">年度途中に転入した場合も随時申請可能</span>です。<strong>鹿児島市教育委員会保健体育課</strong>でも直接受付しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>小学校の給食費は月額約4,400円、中学校は約5,100円</strong>が免除されます。年間で約5万円〜6万円の負担軽減です。</p><p><span class="marker">就学援助制度との二重受給はできません</span>。就学援助の認定を受けている場合はそちらが優先されます。</p><div class="note-box">桜島の降灰の影響で臨時休校になった場合の給食費の取り扱いについては、各学校からのお知らせをご確認ください。アレルギー対応食に関する相談は栄養教諭または保健体育課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-sme-support',
    title: '鹿児島市 中小企業振興補助金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '中小企業支援', '補助金'],
    eligibility: '鹿児島市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '鹿児島市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路開拓に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う設備投資・販路開拓・デジタル化</span>にかかる経費の一部を補助する制度です。</p><p>鹿児島市は焼酎やさつま揚げの製造業、観光関連産業、食品加工業など特色ある中小企業が多く集積する街です。天文館商店街を中心とした商業地区の活性化も含め、地域経済の発展を支える中小企業への支援を強化しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">IT導入やデジタル化に関する投資も補助対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>鹿児島市内に本店または主たる事業所を有する中小企業者</p><p>市税の滞納がないこと</p><p>対象経費が20万円以上であること</p><p>事業計画書を提出できること</p></div><p>鹿児島市役所産業支援課に事業計画書と申請書を提出します。設備の見積書や販路開拓の計画書も必要です。</p><p><span class="marker">交付決定前の支出は補助対象外</span>です。事前に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。生産設備の導入、展示会への出展費用、業務ソフトの導入費などが対象です。</p><p><span class="marker">事業完了後に実績報告書の提出が必要</span>です。</p><div class="highlight-box">鹿児島市では中小企業振興補助金のほか、鹿児島商工会議所と連携した経営相談や、「かごしまデザインアワード」などのプロモーション支援も行っています。焼酎や農産品の海外展開を目指す事業者には、輸出促進の相談窓口もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-nursing-home-reform',
    title: '鹿児島市 高齢者住宅改修助成事業',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大20万円（介護保険外の上乗せ分）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '高齢者住宅改修', '助成事業'],
    eligibility: '鹿児島市に住所を有する要介護・要支援認定者がいる世帯',
    applicationPeriod: '通年',
    description: '鹿児島市が実施する高齢者住宅改修助成事業です。介護保険の住宅改修費に上乗せし、市独自に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 高齢者住宅改修助成事業は、<span class="marker">介護保険の住宅改修費では不足する場合に、市独自の上乗せ助成として最大20万円を支給</span>する制度です。</p><p>鹿児島市は温暖な気候で高齢者にも暮らしやすい街ですが、桜島の降灰による住環境への影響や、古い住宅のバリアフリー化など、住まいに関する課題も多くあります。高齢者が安全に在宅生活を続けられるよう、住宅改修への支援を手厚くしています。</p><p><span class="marker-green">介護保険の住宅改修費（上限20万円）と合わせて最大40万円の改修支援</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鹿児島市に住民登録がある要介護・要支援の認定を受けた方がいる世帯が対象です。</p><div class="summary-box" data-title="対象となる工事"><p>手すりの設置（浴室・トイレ・玄関・階段等）</p><p>段差の解消（スロープの設置、床面のかさ上げ等）</p><p>滑りにくい床材への変更</p><p>和式トイレの洋式化・引き戸への取替え</p></div><p>鹿児島市役所長寿支援課に申請書を提出します。<strong>ケアマネジャーによる理由書と改修計画書</strong>の添付が必要です。<span class="marker">工事着手前の申請が必須</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市の上乗せ助成は<strong>上限20万円</strong>です。介護保険の住宅改修費（自己負担1〜3割）とは別枠で利用できます。</p><p><span class="marker">住民税非課税世帯は助成率が優遇</span>される場合があります。</p><div class="note-box">全面的な改築や新築は対象外です。降灰対策を兼ねた改修（窓の気密性向上等）については対象となる場合がありますので、窓口でご確認ください。工事完了後に現地確認が行われます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-energy-support',
    title: '鹿児島市 省エネ設備導入補助金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '省エネ設備', '補助金'],
    eligibility: '鹿児島市に住所を有し、自宅に省エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '鹿児島市が実施する省エネ設備導入補助金です。太陽光発電・蓄電池・高効率給湯器等の導入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 省エネ設備導入補助金は、<span class="marker">自宅に太陽光発電システムや家庭用蓄電池、高効率給湯器等の省エネ設備を導入する方</span>に、費用の一部を補助する制度です。</p><p>鹿児島市は日照時間が長く太陽光発電に適した環境にあります。2050年カーボンニュートラルの実現と市民の光熱費負担の軽減を目指し、再生可能エネルギーや省エネ設備の普及を促進しています。</p><p>設備の種類に応じて<strong>最大10万円</strong>が補助されます。<span class="marker-green">太陽光発電と蓄電池の同時導入で補助額がアップ</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム（3kW以上）：最大5万円</p><p>家庭用蓄電池（4kWh以上）：最大5万円</p><p>高効率給湯器（エコキュート等）：最大3万円</p><p>V2H（電気自動車用充放電設備）：最大5万円</p></div><p>鹿児島市役所環境政策課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置工事前に申請が必要</span>です。交付決定後に工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設備ごとに定められ、<strong>合計で最大10万円</strong>です。1世帯1回限りの利用です。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となるため、早めの申請をおすすめします。</p><div class="highlight-box">鹿児島市は桜島の降灰があるため、太陽光パネルのメンテナンスが重要です。設備導入時には降灰対策（パネルの傾斜角調整や洗浄方法）も業者に確認しましょう。国や県の補助制度との併用も可能な場合がありますので、環境政策課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kagoshima-city-seismic-diagnosis',
    title: '鹿児島市 住宅耐震診断補助制度',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '診断費用の全額補助（木造住宅）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '耐震診断', '防災'],
    eligibility: '鹿児島市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '鹿児島市が実施する住宅耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断費用を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市 住宅耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額補助する制度です。</p><p>鹿児島市は活火山・桜島を有し、火山性地震や南海トラフ地震のリスクに直面しています。日常的な降灰にさらされる住宅は経年劣化が進みやすく、耐震診断による安全性の確認は特に重要です。</p><p><span class="marker-green">木造住宅の耐震診断は自己負担なしで受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>鹿児島市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の戸建て住宅であること</p><p>過去にこの制度の補助を受けていないこと</p></div><p>鹿児島市役所建築指導課に申請書を提出します。建築年を確認できる書類（登記事項証明書、固定資産税課税明細書等）が必要です。</p><p><span class="marker">市が派遣する耐震診断士が自宅を訪問して調査</span>を行い、後日報告書が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額鹿児島市が負担</strong>するため、自己負担はゼロです。診断後、耐震性が不足と判定された場合は改修補助（最大100万円程度）も利用できます。</p><p><span class="marker">桜島の降灰が住宅の構造に与える影響も診断時に確認</span>できます。</p><div class="note-box">鉄骨造やRC造の住宅は本制度の対象外ですが、別途相談を受け付けています。鹿児島市では「克灰住宅」（降灰対策を施した住宅）の普及にも取り組んでおり、耐震改修と合わせて降灰対策工事を行うことも推奨されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
