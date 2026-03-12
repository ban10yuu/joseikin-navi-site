import { Grant } from '@/lib/types';

export const cityGrantsBatch40: Grant[] = [
  // ────────────────────────────────────────────────
  // 文京区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'bunkyo-childcare-subsidy',
    title: '文京区 認可外保育施設利用助成金',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大月4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['文京区', '保育料助成', '認可外保育'],
    eligibility: '文京区に住所を有し、認可外保育施設を利用している児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '文京区が実施する認可外保育施設利用助成金です。認可外保育施設を利用する世帯に月額最大4万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 認可外保育施設利用助成金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用している世帯</span>の経済的負担を軽減する制度です。</p><p>東京大学やお茶の水女子大学などの教育機関が集まる文京区は、文教地区としての性格が強く、子育て世帯の流入が続いています。認可保育所の待機児童対策として、認可外施設利用者への助成を手厚く行っています。</p><p><span class="marker-green">所得制限なしで、月額最大4万円が助成されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>文京区に住民登録があり、東京都の認可外保育施設指導監督基準を満たす施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用契約書の写し</p><p>保育料の領収書</p><p>保護者の就労証明書</p><p>振込先口座情報</p></div><p>文京区役所幼児保育課の窓口または郵送で申請します。<strong>四半期ごと（3か月分まとめて）の申請</strong>となり、申請期限に注意が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大4万円</strong>で、実際の保育料と認可保育所の保育料との差額を上限とします。</p><p><span class="marker">幼児教育・保育の無償化による給付と併用する場合は、差額分のみが助成対象</span>となります。二重受給にならないよう注意してください。</p><div class="note-box">企業主導型保育施設を利用している場合は、別途企業主導型保育事業の助成金が優先されることがあります。申請前に文京区の窓口で確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-birth-bonus',
    title: '文京区 出産・子育て応援給付金',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['文京区', '出産祝い金', '子育て応援'],
    eligibility: '文京区に住所を有する妊婦および出生した児童の養育者',
    applicationPeriod: '通年',
    description: '文京区が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の給付金を支給する制度です。</p><p>文京区は小石川後楽園や六義園など歴史ある庭園を擁し、落ち着いた住環境が魅力の区です。出版社や大学が多く集まる知的な雰囲気のなかで子育てができる環境が整っています。この給付金は、すべての妊産婦・子育て家庭を経済的に支援します。</p><p><span class="marker-green">伴走型相談支援とセットで提供され、面談を受けることが給付の条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p>妊娠届出は文京区保健サービスセンターで行います。面談後に申請書を提出すると、<strong>出産応援給付金5万円相当</strong>が支給されます。</p><p>出生届出後は、赤ちゃん訪問等の際に面談を受け、<span class="marker">子育て応援給付金5万円相当の申請手続き</span>を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円相当</strong>の給付金が受けられます。出産応援給付金（5万円）と子育て応援給付金（5万円）はそれぞれ別に申請が必要です。</p><p><span class="marker">他の自治体で同様の給付金を受給済みの方は、文京区での重複受給はできません</span>。転入の場合は前住所地での受給状況をご確認ください。</p><div class="highlight-box">文京区では給付金の支給と合わせて、妊娠期から子育て期まで切れ目のない伴走型相談支援を実施しています。育児の不安や悩みを気軽に相談できる体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-housing-purchase',
    title: '文京区 ファミリー世帯住宅取得支援制度',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['文京区', '住宅取得', '子育て世帯'],
    eligibility: '文京区内に住宅を取得する18歳未満の子どもがいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '文京区が実施するファミリー世帯住宅取得支援制度です。区内に住宅を購入する子育て世帯に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 ファミリー世帯住宅取得支援制度は、<span class="marker">18歳未満の子どもがいる世帯が区内に住宅を取得する際</span>に費用の一部を助成する制度です。</p><p>文京区は23区内でも有数の文教地区として知られ、名門校が多く教育環境に恵まれた地域です。一方で住宅価格は高水準にあり、この助成制度は子育て世帯の定住を後押しすることを目的としています。</p><p>助成額は<strong>最大50万円</strong>です。<span class="marker-green">新築・中古を問わず、マンション・戸建てのいずれも対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯であること</p><p>文京区内に住宅を取得し居住すること</p><p>世帯の年間所得が基準額以下であること</p><p>住民税を滞納していないこと</p></div><p>文京区役所住環境課に申請書と売買契約書、住民票等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。期限を過ぎると申請できませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>最大50万円</strong>で、住宅取得費用の一部に充てることができます。子どもの人数に応じた加算がある場合もあります。</p><p><span class="marker">登記簿上の所有者と申請者が一致していること</span>が条件です。共有名義の場合は持分割合に応じて判定されます。</p><div class="note-box">投資目的の住宅や事業用物件は対象外です。住宅ローン減税や国の補助制度との併用は可能ですが、他の区の住宅助成との併用はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-newlywed-rent',
    title: '文京区 新婚世帯家賃助成制度',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大月3万円（最長2年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '東京都',
    tags: ['文京区', '新婚', '家賃助成'],
    eligibility: '文京区内に居住する婚姻届出後2年以内の新婚世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '文京区が実施する新婚世帯家賃助成制度です。区内に居住する新婚世帯に月額最大3万円を最長2年間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 新婚世帯家賃助成制度は、<span class="marker">婚姻届出後2年以内の新婚世帯</span>を対象に、区内の賃貸住宅の家賃を一部助成する制度です。</p><p>文京区は都心へのアクセスが良好でありながら、閑静な住宅街が広がる住みやすい区です。護国寺や根津神社など歴史ある寺社仏閣も多く、落ち着いた環境で新生活を始めたい新婚世帯に人気があります。</p><p>助成額は<strong>月額最大3万円で最長2年間</strong>です。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出後2年以内であること</p><p>夫婦ともに39歳以下であること</p><p>世帯の年間所得が基準額以下であること</p><p>文京区内の民間賃貸住宅に居住していること</p></div><p>文京区役所住環境課に申請書、婚姻届受理証明書、賃貸借契約書の写し等を提出します。</p><p><span class="marker">審査には1〜2か月かかる場合があります</span>。申請が受理された月の翌月分から助成が始まります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大3万円</strong>で、実際の家賃額に応じて決定されます。最長2年間の助成が受けられます。</p><p><span class="marker">区営住宅・都営住宅に居住している場合や、親族が所有する住宅に居住している場合は対象外</span>です。</p><div class="highlight-box">文京区では新婚世帯向けの住まい相談窓口も設けています。引っ越し費用の補助制度と組み合わせられる場合もありますので、窓口で併せてご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-infertility',
    title: '文京区 不妊治療費助成制度',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['文京区', '不妊治療', '助成金'],
    eligibility: '文京区に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '文京区が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、それでもなお自己負担が大きい治療があります。文京区は大学病院や高度医療機関が多く立地しており、質の高い不妊治療を受けやすい環境にあります。この助成制度は、治療費の負担をさらに軽減するものです。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>です。<span class="marker-green">事実婚のカップルも対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>文京区に住民登録がある夫婦またはカップルで、医療機関において不妊治療を受けた方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の証明書（治療内容・費用の明細）</p><p>医療費の領収書の写し</p><p>住民票（夫婦の関係がわかるもの）</p></div><p>文京区役所健康推進課に申請書類を提出します。<strong>治療終了後6か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担額に対し、<strong>1回の治療あたり最大10万円</strong>です。年度内の助成回数に上限があります。</p><p><span class="marker">東京都の不妊治療費助成制度と併用する場合は、合計助成額が自己負担額を超えないよう調整</span>されます。</p><div class="note-box">人工授精、体外受精、顕微授精などが対象となります。文京区には東京大学医学部附属病院をはじめとする高度医療機関が複数あり、専門的な治療を身近に受けられる環境が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-scholarship',
    title: '文京区 奨学資金貸付制度',
    organization: '文京区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '東京都',
    tags: ['文京区', '奨学金', '教育支援'],
    eligibility: '文京区に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月（年度途中の申請も可）',
    description: '文京区が実施する奨学資金貸付制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 奨学資金貸付制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、無利子で奨学資金を貸与する制度です。</p><p>文京区は「文の京（ふみのみやこ）」の名の通り、東京大学、お茶の水女子大学、東京医科歯科大学など数多くの大学が集まる学術の中心地です。この伝統を受け継ぎ、経済的事情にかかわらず学びの機会を保障する奨学金制度を運営しています。</p><p>貸与額は<strong>月額最大3万円</strong>です。<span class="marker-green">無利子のため、返済総額は貸与額と同額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>文京区内に住所を有すること</p><p>高等学校・大学・専門学校等に在学していること</p><p>経済的理由で修学が困難であること</p><p>他の奨学金と併用していないこと（一部例外あり）</p></div><p>文京区教育委員会教育総務課に申請書、在学証明書、所得証明書等を提出します。</p><p><span class="marker">毎年4月〜5月が主な募集期間ですが、家計急変の場合は随時受付</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>月額最大3万円</strong>で、学校種別や通学形態によって金額が異なります。卒業後に無利子で返還します。</p><p><span class="marker">返還は卒業後1年据置き、その後10年以内の分割返還</span>が基本です。経済的困難な場合は返還猶予の申請も可能です。</p><div class="highlight-box">文京区では奨学金のほかに、入学準備金の貸付制度も用意しています。入学時に一時的な費用が必要な場合は、こちらも併せて検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-sme-support',
    title: '文京区 中小企業経営支援助成金',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['文京区', '中小企業支援', '経営改善'],
    eligibility: '文京区内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '文京区が実施する中小企業経営支援助成金です。経営改善やデジタル化の取組みに対し最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 中小企業経営支援助成金は、<span class="marker">区内の中小企業が行う経営改善やデジタル化</span>への取組みを支援する助成制度です。</p><p>文京区には印刷・出版関連の中小企業が多く集積しており、デジタル化への対応が経営上の重要課題となっています。この助成金は、ホームページ制作、業務管理システム導入、販路開拓などの経費を補助します。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>ホームページ制作・リニューアル費用</p><p>業務管理ソフト・POSシステムの導入費</p><p>展示会・商談会への出展費</p><p>ECサイト構築費用</p></div><p>文京区役所経済課に申請書、事業計画書、見積書を提出します。審査後に交付決定の通知が届きます。</p><p><span class="marker">必ず交付決定前に事業を開始しないでください</span>。事前着手した場合は助成対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。同一事業者が複数年度にわたって申請することも可能です。</p><p><span class="marker">実績報告書の提出と経費の証拠書類（請求書・領収書等）の提出が必須</span>です。適正な経理処理を行ってください。</p><div class="note-box">文京区商工会館では、中小企業診断士による無料の経営相談も実施しています。助成金の申請と合わせて活用することで、より効果的な経営改善が見込めます。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-nursing-equipment',
    title: '文京区 介護用品支給事業',
    organization: '文京区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['文京区', '介護用品', '高齢者支援'],
    eligibility: '文京区に住所を有する要介護認定を受けた高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '文京区が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 介護用品支給事業は、<span class="marker">在宅で介護を受けている高齢者のために紙おむつ等の介護用品</span>を支給する制度です。</p><p>文京区は高齢者の在宅介護を支援するさまざまな事業を展開しています。介護用品の費用は日常的な出費として家族の大きな負担となるため、この事業では紙おむつ・尿取りパッド・使い捨て手袋などを現物支給またはカタログ方式で提供します。</p><p>年間<strong>最大6万円相当</strong>の支給です。<span class="marker-green">要介護1以上の認定を受けた方が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>文京区に住民登録がある方で、要介護1以上の認定を受けた65歳以上の高齢者を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書の写し</p><p>本人確認書類</p></div><p>文京区役所介護保険課の窓口で申請します。<strong>担当のケアマネジャーを通じて申請する</strong>こともできます。</p><p><span class="marker">入院中や施設入所中の方は在宅介護に該当しないため対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。月ごとまたは隔月でカタログから必要な用品を選択できます。</p><p><span class="marker">世帯の住民税課税状況によって自己負担額が発生する場合</span>があります。住民税非課税世帯は自己負担なしです。</p><div class="highlight-box">紙おむつの支給は入院中にも適用される場合があります（医師の証明が必要）。詳しくは文京区の介護保険課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'bunkyo-elderly-support',
    title: '文京区 高齢者見守り・緊急通報システム',
    organization: '文京区',
    type: 'local',
    maxAmount: '無料（住民税非課税世帯）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['文京区', '高齢者見守り', '緊急通報'],
    eligibility: '文京区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '文京区が実施する高齢者見守り・緊急通報システムです。ひとり暮らし高齢者に緊急通報装置を貸与し、24時間見守りを行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 高齢者見守り・緊急通報システムは、<span class="marker">ひとり暮らしの高齢者等に緊急通報装置を貸与</span>し、急病や事故の際にボタン一つで通報できる体制を整える制度です。</p><p>文京区は坂の多い地形で知られ、高齢者の外出や日常生活に不安を抱えるケースも少なくありません。このシステムは、自宅でのペンダント型通報機やセンサーによる見守りで、24時間365日の安全を確保します。</p><p><span class="marker-green">住民税非課税世帯は利用料無料で、課税世帯も低額の月額負担</span>で利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>文京区に住民登録がある65歳以上のひとり暮らし高齢者、または高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="サービス内容"><p>緊急通報装置（ペンダント型）の貸与</p><p>24時間対応のコールセンターへの自動接続</p><p>安否確認センサーの設置（希望者）</p><p>定期的な安否確認電話</p></div><p>文京区役所高齢福祉課の窓口で申請します。<strong>地域包括支援センター</strong>を通じての申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>住民税非課税世帯は<strong>利用料無料</strong>、課税世帯は月額数百円程度の負担で利用できます。設置工事費は区が負担します。</p><p><span class="marker">固定電話回線がない場合でも、携帯電話回線を利用したタイプの装置が利用可能</span>です。</p><div class="note-box">緊急通報時は、あらかじめ登録した緊急連絡先（親族・近隣協力員等）にも連絡が入ります。協力員の登録をお願いされますが、登録が難しい場合は区の窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 台東区（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'taito-childcare-subsidy',
    title: '台東区 認可外保育施設利用助成金',
    organization: '台東区',
    type: 'local',
    maxAmount: '最大月4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['台東区', '保育料助成', '認可外保育'],
    eligibility: '台東区に住所を有し、認可外保育施設を利用している児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '台東区が実施する認可外保育施設利用助成金です。認可外保育施設を利用する世帯に月額最大4万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 認可外保育施設利用助成金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用している世帯</span>の経済的負担を軽減する制度です。</p><p>浅草寺や上野恩賜公園など東京を代表する観光地を擁する台東区は、下町情緒が残る住宅地でもあります。観光業や飲食業に従事する共働き世帯が多く、多様な保育ニーズに対応するため認可外施設利用者への助成を行っています。</p><p><span class="marker-green">月額最大4万円が助成され、保育料の負担が大幅に軽減されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>台東区に住民登録があり、都道府県に届出のある認可外保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用契約書の写し</p><p>保育料の領収書</p><p>保護者の就労証明書</p><p>振込先口座情報</p></div><p>台東区役所子育て・若者支援課に申請します。<strong>四半期ごとの事後申請</strong>で、3か月分をまとめて提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大4万円</strong>で、実際に支払った保育料と認可保育所を利用した場合の保育料との差額が上限です。</p><p><span class="marker">無償化の対象となる3〜5歳児は、無償化給付との差額分が助成対象</span>となります。重複受給にはなりません。</p><div class="note-box">ベビーシッター利用の場合は別途「ベビーシッター利用支援事業」が適用される場合があります。利用する保育サービスの種類に応じて、最適な助成制度を台東区の窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-birth-bonus',
    title: '台東区 出産・子育て応援給付金',
    organization: '台東区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['台東区', '出産祝い金', '子育て応援'],
    eligibility: '台東区に住所を有する妊婦および出生した児童の養育者',
    applicationPeriod: '通年',
    description: '台東区が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の給付金を支給する制度です。</p><p>上野や浅草の下町文化が息づく台東区は、東京23区で最も面積が小さい区ですが、地域の結びつきが強く、子育て世帯を地域全体で支える風土があります。この給付金は、すべての妊産婦と子育て家庭を経済的に応援するものです。</p><p><span class="marker-green">伴走型相談支援と一体で実施され、保健師等による面談が給付の条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p>妊娠届出は台東保健所または浅草保健相談センターで行います。面談後に申請書を提出すると、<strong>出産応援給付金5万円相当</strong>が支給されます。</p><p>出生後は、こんにちは赤ちゃん訪問等での面談を経て、<span class="marker">子育て応援給付金の申請手続き</span>を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円相当</strong>が支給されます。出産応援（5万円）と子育て応援（5万円）はそれぞれ別の申請が必要です。</p><p><span class="marker">他自治体で同種の給付金を受給済みの場合は重複受給不可</span>です。転入の方は前住所地での受給状況をご確認ください。</p><div class="highlight-box">台東区では独自の上乗せ給付を検討している場合もあります。最新の情報は台東区の公式サイトまたは子育て支援課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-housing-purchase',
    title: '台東区 子育て世帯住宅取得支援制度',
    organization: '台東区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['台東区', '住宅取得', '子育て世帯'],
    eligibility: '台東区内に住宅を取得する18歳未満の子どもがいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '台東区が実施する子育て世帯住宅取得支援制度です。区内に住宅を購入する子育て世帯に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 子育て世帯住宅取得支援制度は、<span class="marker">18歳未満の子どもがいる世帯が区内に住宅を取得する際</span>に費用の一部を助成する制度です。</p><p>台東区は浅草・上野エリアの観光地としての顔を持つ一方、入谷・根岸・千束など落ち着いた住宅地も広がっています。区の面積は23区で最小ながら、交通利便性に優れ、下町の温かいコミュニティが子育てに適しています。</p><p>助成額は<strong>最大50万円</strong>です。<span class="marker-green">新築・中古ともに対象で、マンション・戸建てを問いません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯であること</p><p>台東区内に住宅を取得し居住すること</p><p>世帯の年間所得が基準額以下であること</p><p>住民税を滞納していないこと</p></div><p>台東区役所住宅課に申請書と売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡しから6か月以内に申請が必要</span>です。引渡し前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>最大50万円</strong>です。住宅取得にかかる諸費用（登記費用、仲介手数料等）も含めた実費に対して助成されます。</p><p><span class="marker">5年以上の居住継続が条件</span>で、短期間で転出した場合は返還を求められることがあります。</p><div class="note-box">台東区は下町ならではの商店街や銭湯が多く残り、子どもの遊び場も充実しています。隅田川沿いの親水公園や上野動物園も身近にあり、子育て環境として根強い人気があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-infertility',
    title: '台東区 不妊治療費助成制度',
    organization: '台東区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['台東区', '不妊治療', '助成金'],
    eligibility: '台東区に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '台東区が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>台東区では少子化対策の一環として、不妊に悩む夫婦やカップルの経済的負担を軽減しています。区内には複数の不妊治療対応クリニックがあり、交通の便が良いため都内各所の専門医療機関への通院も容易です。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>です。<span class="marker-green">事実婚のカップルも対象</span>に含まれます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>台東区に住民登録のある夫婦またはカップルで、医療機関において不妊治療を受けた方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する証明書</p><p>医療費の領収書の写し</p><p>住民票（続柄がわかるもの）</p></div><p>台東区役所子育て・若者支援課に必要書類を提出します。<strong>治療終了後6か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担に対し、<strong>1回あたり最大10万円</strong>です。年度内の助成回数には上限があります。</p><p><span class="marker">東京都の助成制度と併用する場合は、自己負担額を超えない範囲で調整</span>されます。</p><div class="note-box">体外受精・顕微授精・人工授精などが対象です。男性不妊治療も助成対象となる場合があります。詳しい対象範囲は台東区の窓口にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-scholarship',
    title: '台東区 奨学資金貸付制度',
    organization: '台東区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '東京都',
    tags: ['台東区', '奨学金', '教育支援'],
    eligibility: '台東区に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '台東区が実施する奨学資金貸付制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 奨学資金貸付制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、無利子で奨学資金を貸与する制度です。</p><p>台東区は伝統工芸の職人が多く住む地域でもあり、次世代の人材育成を重視しています。東京藝術大学が区内にあることからも、芸術・文化分野の学びを志す学生を含め、幅広い進路の学生を支援しています。</p><p>貸与額は<strong>月額最大3万円</strong>です。<span class="marker-green">無利子で返還でき、返済の負担が抑えられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>台東区内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>経済的理由で修学が困難であること</p><p>学業成績が一定の基準を満たすこと</p></div><p>台東区教育委員会庶務課に申請書、在学証明書、所得証明書等を提出します。</p><p><span class="marker">募集期間は毎年4月〜5月で、応募多数の場合は選考</span>となります。家計急変時の随時募集もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>月額最大3万円</strong>で、学校種別に応じて金額が決まります。卒業後に無利子で返還します。</p><p><span class="marker">卒業後1年間の猶予期間を経て、10年以内に返還</span>するのが基本です。経済的困難時は返還猶予の相談が可能です。</p><div class="highlight-box">台東区では奨学金のほか、入学準備金の一時貸付制度も用意しています。高校・大学入学時のまとまった費用が必要な際に利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-sme-support',
    title: '台東区 中小企業経営支援補助金',
    organization: '台東区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['台東区', '中小企業支援', '経営改善'],
    eligibility: '台東区内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '台東区が実施する中小企業経営支援補助金です。販路開拓やIT導入等の経営改善に対し最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 中小企業経営支援補助金は、<span class="marker">区内中小企業の販路開拓やIT導入等の経営改善</span>を支援する助成制度です。</p><p>台東区はかばん・靴・ジュエリーなどの伝統的な製造業や、浅草を中心とした観光関連産業が盛んです。この補助金は、こうした地場産業のデジタル化や新たな販路開拓を後押しし、伝統と革新の両立を支援します。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>展示会・見本市への出展費用</p><p>ホームページ制作・ECサイト構築費用</p><p>業務効率化のためのIT機器・ソフトウェア導入費</p><p>パンフレット・カタログの制作費</p></div><p>台東区役所産業振興課に申請書と事業計画書を提出します。</p><p><span class="marker">交付決定前の着手は対象外</span>です。必ず交付決定を受けてから事業を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。同一年度に1回の申請が可能です。</p><p><span class="marker">事業完了後に実績報告書と経費証拠書類を提出し、確定検査を受ける必要</span>があります。</p><div class="note-box">台東区では「台東区産業フェア」など区主催の展示商談会も開催しています。補助金と合わせてこうしたイベントを活用することで、効率的な販路開拓が見込めます。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-nursing-equipment',
    title: '台東区 介護用品支給事業',
    organization: '台東区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['台東区', '介護用品', '高齢者支援'],
    eligibility: '台東区に住所を有する要介護認定を受けた高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '台東区が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 介護用品支給事業は、<span class="marker">在宅で介護を受けている高齢者のために紙おむつ等の介護用品</span>を支給する制度です。</p><p>台東区は下町の地域コミュニティが根強く、高齢者を地域で見守る風土があります。在宅介護を選択する家族も多く、日常的に使用する介護用品の費用負担を軽減することで、在宅介護の継続を支援しています。</p><p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。<span class="marker-green">要介護1以上の認定を受けた方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>台東区に住民登録があり、要介護1以上の認定を受けた65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>介護保険被保険者証の写し</p><p>本人確認書類</p></div><p>台東区役所高齢福祉課の窓口で申請します。<strong>担当ケアマネジャーからの申請も可能</strong>です。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>となります。退院・退所後に改めて申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。紙おむつ・尿取りパッド・清拭剤等から選択できます。</p><p><span class="marker">住民税課税状況によって自己負担が発生する場合</span>があります。非課税世帯は自己負担なしです。</p><div class="highlight-box">台東区では介護用品の支給に加え、介護者向けのリフレッシュ事業（介護者のつどい・介護教室等）も実施しています。介護の悩みを共有できる場として活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-elderly-support',
    title: '台東区 高齢者配食サービス事業',
    organization: '台東区',
    type: 'local',
    maxAmount: '1食あたり300円の自己負担',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['台東区', '配食サービス', '高齢者支援'],
    eligibility: '台東区に住所を有する65歳以上のひとり暮らし等の高齢者で、食事の確保が困難な方',
    applicationPeriod: '通年',
    description: '台東区が実施する高齢者配食サービス事業です。食事の確保が困難な高齢者に栄養バランスの取れた食事を配達し、安否確認も行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 高齢者配食サービス事業は、<span class="marker">食事の確保が困難なひとり暮らし等の高齢者</span>に栄養バランスの取れた食事を配達する事業です。</p><p>台東区は古くからの住宅地が多く、高齢化率も23区平均を上回っています。配食サービスは栄養面のサポートだけでなく、配達時の見守り・安否確認機能も担っており、ひとり暮らし高齢者の生活を多角的に支えています。</p><p><span class="marker-green">1食あたり300円程度の自己負担で利用でき、差額は区が補助</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>台東区に住民登録がある65歳以上のひとり暮らし高齢者、または高齢者のみの世帯で、自力での食事の確保が困難な方が対象です。</p><div class="summary-box" data-title="サービス内容"><p>昼食または夕食の配達（週数回）</p><p>栄養バランスを考慮した献立</p><p>配達時の安否確認</p><p>食事制限への一部対応（減塩・刻み食等）</p></div><p>台東区役所高齢福祉課または<strong>地域包括支援センター</strong>で申請します。ケアマネジャーを通じた申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1食あたりの自己負担は<strong>約300円程度</strong>で、残りの費用は区が負担します。利用日数は介護状況等に応じて決定されます。</p><p><span class="marker">配達時に不在が続く場合は、緊急連絡先へ連絡が入ります</span>。見守りの一環として安否確認を兼ねています。</p><div class="note-box">食物アレルギーや宗教上の制限など、特別な配慮が必要な場合は事前に相談してください。台東区では配食サービスのほか、ふれあいサロンでの会食事業も実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'taito-seismic-diagnosis',
    title: '台東区 木造住宅耐震診断助成制度',
    organization: '台東区',
    type: 'local',
    maxAmount: '無料（区が全額負担）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['台東区', '耐震診断', '防災'],
    eligibility: '台東区内に旧耐震基準（1981年5月以前）で建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '台東区が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用を区が全額負担します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で受けられる制度です。</p><p>台東区は木造密集地域が多く残る地域であり、首都直下地震への備えが重要な課題となっています。この制度では、区が費用を全額負担して専門の診断士を派遣し、住宅の耐震性能を評価します。</p><p><span class="marker-green">診断費用は区が全額負担するため、所有者の自己負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建物の条件"><p>台東区内に所在する木造住宅であること</p><p>1981年5月31日以前に建築確認を受けた建物であること</p><p>2階建て以下の戸建住宅であること</p><p>所有者本人が申請すること</p></div><p>台東区役所都市づくり部建築課に申請書を提出します。申請後、区が委託した耐震診断士が現地調査を行います。</p><p><span class="marker">診断結果に基づき、必要に応じて耐震改修の補助制度も利用可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>区が全額負担</strong>します。診断結果は「上部構造評点」として1.0以上（倒壊しにくい）から1.0未満（倒壊の可能性あり）で判定されます。</p><p><span class="marker">評点が1.0未満と判定された場合は、耐震改修補助金（別制度）を活用</span>して改修工事を行うことを強くお勧めします。</p><div class="note-box">耐震診断はあくまで現状の耐震性能を評価するものです。診断の結果に関わらず、家具の転倒防止や非常用持出袋の準備など、日常的な防災対策も併せて行いましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 墨田区（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'sumida-childcare-subsidy',
    title: '墨田区 認可外保育施設利用助成金',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大月4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['墨田区', '保育料助成', '認可外保育'],
    eligibility: '墨田区に住所を有し、認可外保育施設を利用している児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '墨田区が実施する認可外保育施設利用助成金です。認可外保育施設を利用する世帯に月額最大4万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 認可外保育施設利用助成金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用している世帯</span>の経済的負担を軽減する制度です。</p><p>東京スカイツリーのお膝元である墨田区は、再開発による子育て世帯の流入が著しく、保育需要が急増しています。両国国技館やすみだ北斎美術館など文化施設も充実し、ものづくりの伝統を受け継ぐ活気ある下町です。</p><p><span class="marker-green">所得制限なしで、月額最大4万円が助成されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>墨田区に住民登録があり、都の指導監督基準を満たす認可外保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用契約書の写し</p><p>保育料の領収書</p><p>保護者の就労証明書</p><p>振込先口座情報</p></div><p>墨田区役所子ども施設課に申請します。<strong>四半期ごとの事後申請</strong>で、申請期限に注意が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大4万円</strong>で、認可保育所との保育料差額を上限とします。</p><p><span class="marker">幼児教育・保育の無償化対象児は、無償化給付との差額分が助成</span>されます。二重受給にはなりません。</p><div class="note-box">墨田区では「すみだ子育て応援アプリ」を通じて、保育施設の空き情報や各種助成制度の案内を配信しています。アプリの活用も検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-birth-bonus',
    title: '墨田区 出産・子育て応援給付金',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['墨田区', '出産祝い金', '子育て応援'],
    eligibility: '墨田区に住所を有する妊婦および出生した児童の養育者',
    applicationPeriod: '通年',
    description: '墨田区が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の給付金を支給する制度です。</p><p>東京スカイツリーの完成以来、墨田区は急速に発展し、タワーマンションの建設とともに若い子育て世帯が増加しています。下町の温かさと都市的な利便性が共存するこの街で、すべての妊産婦と子育て家庭を経済的にサポートします。</p><p><span class="marker-green">保健師等による伴走型相談支援と一体で提供されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p>妊娠届出は墨田区保健センターで行います。面談を受けた後に申請書を提出すると、<strong>出産応援給付金5万円相当</strong>が支給されます。</p><p>出生後はこんにちは赤ちゃん訪問等の面談を経て、<span class="marker">子育て応援給付金を申請</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円相当</strong>が受けられます。出産応援（5万円）と子育て応援（5万円）は別々に申請が必要です。</p><p><span class="marker">他の自治体で同種の給付を受けた方は重複受給不可</span>です。転入の場合は前住所地の受給状況をご確認ください。</p><div class="highlight-box">墨田区では「すみだ子育てガイドブック」を無料配布しており、出産・育児に関するあらゆる支援制度をまとめて確認できます。母子手帳交付時に受け取れます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-housing-purchase',
    title: '墨田区 子育てファミリー住宅取得支援制度',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['墨田区', '住宅取得', '子育て世帯'],
    eligibility: '墨田区内に住宅を取得する18歳未満の子どもがいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '墨田区が実施する子育てファミリー住宅取得支援制度です。区内に住宅を購入する子育て世帯に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 子育てファミリー住宅取得支援制度は、<span class="marker">18歳未満の子どもがいる世帯が区内に住宅を取得する際</span>に費用の一部を助成する制度です。</p><p>スカイツリー効果で注目を集める墨田区は、新しいマンション開発と歴史ある下町の街並みが共存しています。錦糸町・押上エリアの利便性と、向島・京島の落ち着いた住環境が子育て世帯に人気です。</p><p>助成額は<strong>最大50万円</strong>です。<span class="marker-green">新築・中古ともに対象で、マンション・戸建ていずれも可</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯であること</p><p>墨田区内に住宅を取得し居住すること</p><p>世帯の年間所得が基準額以下であること</p><p>住民税を滞納していないこと</p></div><p>墨田区役所都市計画課に申請書、売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡しから6か月以内に申請が必要</span>です。期限を過ぎると申請できませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>最大50万円</strong>で、住宅取得にかかる費用の一部として支給されます。</p><p><span class="marker">5年以上の居住継続が条件</span>で、短期間で区外転出した場合は返還を求められることがあります。</p><div class="note-box">墨田区では不動産取得税の軽減措置や住宅ローン減税など、国・都の制度との併用が可能です。ものづくりの街ならではのリノベーション物件も豊富ですので、住まい探しの選択肢に加えてみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-infertility',
    title: '墨田区 不妊治療費助成制度',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['墨田区', '不妊治療', '助成金'],
    eligibility: '墨田区に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '墨田区が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>墨田区は近年、再開発に伴い20〜40代の若い世帯が増加しています。不妊に悩むカップルの経済的負担を軽減し、安心して治療に専念できる環境を整えています。区内の医療機関のほか、都内全域の不妊治療施設での治療が助成対象となります。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>です。<span class="marker-green">事実婚のカップルも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>墨田区に住民登録のある夫婦またはカップルで、医療機関で不妊治療を受けた方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の証明書（治療内容・費用明細）</p><p>領収書の写し</p><p>住民票（夫婦の関係がわかるもの）</p></div><p>墨田区役所保健計画課に申請書類を提出します。<strong>治療終了後6か月以内</strong>の申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対し、<strong>1回の治療あたり最大10万円</strong>を助成します。年度内の回数上限があります。</p><p><span class="marker">東京都の助成制度との併用時は、自己負担を超えない範囲で調整</span>されます。</p><div class="note-box">人工授精・体外受精・顕微授精が主な対象です。治療前のカウンセリングや相談は、墨田区保健センターでも受け付けています。精神的なサポートも活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-scholarship',
    title: '墨田区 奨学資金制度',
    organization: '墨田区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '東京都',
    tags: ['墨田区', '奨学金', '教育支援'],
    eligibility: '墨田区に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '墨田区が実施する奨学資金制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 奨学資金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対して無利子で奨学資金を貸与する制度です。</p><p>墨田区は江戸時代から続くものづくりの街であり、職人の技術を次世代に受け継ぐ教育を重視しています。葛飾北斎を輩出した文化的土壌を持つこの地で、すべての若者に学びの機会を保障するための奨学金制度です。</p><p>貸与額は<strong>月額最大3万円</strong>です。<span class="marker-green">無利子のため、将来の返済負担が軽減されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>墨田区内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>経済的理由で修学が困難であること</p><p>学業成績が一定基準を満たすこと</p></div><p>墨田区教育委員会庶務課に申請書、在学証明書、所得証明書を提出します。</p><p><span class="marker">毎年4月〜5月が募集期間で、選考のうえ決定</span>されます。家計急変の場合は随時相談を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>月額最大3万円</strong>で、学校種別によって金額が異なります。卒業後に無利子で返還します。</p><p><span class="marker">卒業後1年の猶予期間を経て、10年以内に分割返還</span>が基本です。経済困難時は返還猶予の相談が可能です。</p><div class="highlight-box">墨田区ではものづくり関連の専門学校に進学する学生への奨励金制度も検討されています。地場産業を支える人材育成に力を入れている墨田区ならではの支援策です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-sme-support',
    title: '墨田区 中小企業経営革新支援補助金',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['墨田区', '中小企業支援', '経営革新'],
    eligibility: '墨田区内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '墨田区が実施する中小企業経営革新支援補助金です。新製品開発や販路開拓等の経営革新に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 中小企業経営革新支援補助金は、<span class="marker">区内中小企業の新製品開発や販路開拓等の経営革新</span>を後押しする助成制度です。</p><p>墨田区は中小製造業の集積地として全国的に知られ、ニット・皮革・金属加工など多彩なものづくり企業が活躍しています。この補助金は、伝統の技術を活かした新商品開発やブランディング、デジタルマーケティングの導入などを支援します。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>新製品・新サービスの開発費用</p><p>展示会・見本市への出展費</p><p>ホームページ・ECサイト制作費</p><p>デザイン・ブランディング費用</p></div><p>墨田区役所産業経済課に申請書と事業計画書を提出します。</p><p><span class="marker">交付決定前の事業着手は対象外</span>です。必ず交付決定を待ってから事業に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。同一年度に1回の申請が可能です。</p><p><span class="marker">事業完了後30日以内に実績報告書を提出する必要</span>があります。経費の証拠書類を適切に保管してください。</p><div class="note-box">墨田区では「すみだモダン」ブランド認証制度も実施しており、区内のものづくり企業の製品をブランド化する取組みを行っています。補助金と合わせて活用することで、販路拡大の相乗効果が期待できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-nursing-equipment',
    title: '墨田区 介護用品支給事業',
    organization: '墨田区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['墨田区', '介護用品', '高齢者支援'],
    eligibility: '墨田区に住所を有する要介護認定を受けた高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '墨田区が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 介護用品支給事業は、<span class="marker">在宅で介護を受けている高齢者のために紙おむつ等の介護用品</span>を支給する制度です。</p><p>墨田区は下町の助け合い精神が根づく地域で、在宅介護を支える家族への支援に力を入れています。紙おむつ・尿取りパッド・清拭剤・使い捨て手袋などの介護用品を、現物支給またはカタログ方式で提供します。</p><p>年間<strong>最大6万円相当</strong>の支給です。<span class="marker-green">要介護1以上の認定を受けた65歳以上の方が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>墨田区に住民登録があり、要介護1以上の認定を受けた65歳以上の高齢者を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>介護保険被保険者証の写し</p><p>本人確認書類</p></div><p>墨田区役所高齢者福祉課の窓口で申請します。<strong>担当のケアマネジャー経由でも申請可能</strong>です。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。毎月カタログから選択する方式です。</p><p><span class="marker">住民税の課税状況に応じて自己負担が発生する場合</span>があります。非課税世帯は全額支給です。</p><div class="highlight-box">墨田区では「介護者リフレッシュ事業」として、在宅介護を行う家族向けのマッサージサービスや交流会も実施しています。心身のリフレッシュにぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-elderly-support',
    title: '墨田区 高齢者見守りネットワーク事業',
    organization: '墨田区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['墨田区', '高齢者見守り', '地域支援'],
    eligibility: '墨田区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '墨田区が実施する高齢者見守りネットワーク事業です。地域全体で高齢者の安全・安心を見守る体制を整備しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 高齢者見守りネットワーク事業は、<span class="marker">ひとり暮らしの高齢者や高齢者のみの世帯</span>を地域全体で見守る仕組みを整える事業です。</p><p>墨田区は昔ながらの長屋文化が残る地域もあり、近所付き合いを通じた自然な見守りの伝統があります。この事業では、民生委員・新聞配達員・郵便局員・宅配事業者など多様な主体と連携し、高齢者の異変を早期に発見・対応する体制を構築しています。</p><p><span class="marker-green">利用料は無料で、申込みにより緊急通報装置の貸与も受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>墨田区に住民登録がある65歳以上のひとり暮らし高齢者、または高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="見守りの内容"><p>緊急通報装置（ペンダント型）の貸与</p><p>定期的な安否確認電話・訪問</p><p>協力事業者による日常的な見守り</p><p>異変時の関係機関への連絡・対応</p></div><p>墨田区役所高齢者福祉課または<strong>地域包括支援センター</strong>で申し込みます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>見守りサービスは<strong>無料</strong>で利用できます。緊急通報装置の利用も住民税非課税世帯は無料、課税世帯は月額数百円の負担です。</p><p><span class="marker">緊急通報時にはあらかじめ登録した緊急連絡先にも連絡</span>が入ります。近親者や近隣の方を協力員として登録しておくとスムーズです。</p><div class="note-box">墨田区では認知症高齢者向けの「見守りキーホルダー」事業も実施しています。万が一の外出先での身元確認に役立ちますので、対象の方はあわせて登録をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sumida-seismic-diagnosis',
    title: '墨田区 木造住宅耐震診断助成制度',
    organization: '墨田区',
    type: 'local',
    maxAmount: '無料（区が全額負担）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['墨田区', '耐震診断', '防災'],
    eligibility: '墨田区内に旧耐震基準（1981年5月以前）で建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '墨田区が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用を区が全額負担します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前に建築された旧耐震基準の木造住宅</span>の耐震診断を無料で受けられる制度です。</p><p>墨田区は木造密集地域が広範囲に残っており、関東大震災や東京大空襲の経験から防災意識が特に高い地域です。首都直下地震に備え、区は住宅の耐震化促進を重要施策として位置づけ、無料の耐震診断を実施しています。</p><p><span class="marker-green">診断費用は区が全額負担し、所有者の自己負担はゼロ</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建物の条件"><p>墨田区内に所在する木造住宅であること</p><p>1981年5月31日以前に建築確認を受けていること</p><p>2階建て以下の在来工法による戸建住宅であること</p><p>所有者本人が申請すること</p></div><p>墨田区役所都市計画部建築指導課に申請します。申請後、区が耐震診断士を派遣して現地調査を実施します。</p><p><span class="marker">診断結果をもとに耐震改修補助金（別制度）の利用も検討</span>できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>区が全額負担</strong>します。上部構造評点で耐震性能が判定され、1.0未満は「倒壊の可能性あり」とされます。</p><p><span class="marker">診断結果が1.0未満の場合は、耐震改修補助金を活用した改修工事を強くおすすめ</span>します。</p><div class="highlight-box">墨田区では耐震診断のほか、ブロック塀の安全点検や家具転倒防止器具の無料取付けサービスも実施しています。総合的な地震対策として併せて活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 江東区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'koto-childcare-subsidy',
    title: '江東区 認可外保育施設利用助成金',
    organization: '江東区',
    type: 'local',
    maxAmount: '最大月5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江東区', '保育料助成', '認可外保育'],
    eligibility: '江東区に住所を有し、認可外保育施設を利用している児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '江東区が実施する認可外保育施設利用助成金です。認可外保育施設を利用する世帯に月額最大5万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 認可外保育施設利用助成金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用している世帯</span>の経済的負担を軽減する制度です。</p><p>豊洲・有明・東雲など臨海部の大規模マンション開発により、江東区は子育て世帯の急増が続いています。保育所の整備が追いつかない地域もあり、認可外施設を利用せざるを得ない世帯への助成を手厚く行っています。</p><p><span class="marker-green">月額最大5万円と、23区内でも充実した助成額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江東区に住民登録があり、都の指導監督基準を満たす認可外保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用契約書の写し</p><p>保育料の領収書</p><p>保護者の就労証明書</p><p>振込先口座情報</p></div><p>江東区役所こども未来部保育課に申請します。<strong>四半期ごとの事後申請</strong>となり、期限内に提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大5万円</strong>で、認可保育所との保育料差額を上限とします。</p><p><span class="marker">3〜5歳児の無償化給付との差額分が助成対象</span>となり、二重受給にはなりません。</p><div class="note-box">江東区は臨海部と内陸部で保育需要の特性が異なります。豊洲・有明エリアは特に待機児童が多い傾向にあり、区は保育所の新設とともに認可外施設利用者への支援を強化しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-birth-bonus',
    title: '江東区 出産・子育て応援給付金',
    organization: '江東区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江東区', '出産祝い金', '子育て応援'],
    eligibility: '江東区に住所を有する妊婦および出生した児童の養育者',
    applicationPeriod: '通年',
    description: '江東区が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の給付金を支給する制度です。</p><p>江東区は豊洲市場の開場やオリンピック施設の整備を経て、臨海部を中心に急速な発展を遂げています。マンション開発に伴い若い子育て世帯が増え続けており、この給付金はすべての妊産婦と子育て家庭を応援するものです。</p><p><span class="marker-green">伴走型相談支援と一体で実施され、面談が給付の条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p>妊娠届出は江東区の各保健相談所で行います。面談後に申請すると、<strong>出産応援給付金5万円相当</strong>が支給されます。</p><p>出生後はこんにちは赤ちゃん訪問等での面談を経て、<span class="marker">子育て応援給付金を申請</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円相当</strong>が支給されます。出産応援・子育て応援はそれぞれ別に申請が必要です。</p><p><span class="marker">他の自治体で同種の給付を受けた方は重複受給不可</span>です。転入時は前住所地の受給状況を確認してください。</p><div class="highlight-box">江東区では「こうとう子育てメッセ」など、子育て支援情報を集約したイベントを定期的に開催しています。給付金以外の支援サービスも多数ありますので、ぜひ活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-housing-purchase',
    title: '江東区 子育て世帯住宅取得支援制度',
    organization: '江東区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江東区', '住宅取得', '子育て世帯'],
    eligibility: '江東区内に住宅を取得する18歳未満の子どもがいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '江東区が実施する子育て世帯住宅取得支援制度です。区内に住宅を購入する子育て世帯に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 子育て世帯住宅取得支援制度は、<span class="marker">18歳未満の子どもがいる世帯が区内に住宅を取得する際</span>に費用の一部を助成する制度です。</p><p>江東区は豊洲・有明・東雲の臨海エリアと、門前仲町・亀戸・大島などの下町エリアが共存する多彩な街です。大規模マンションの供給が続く一方、住宅価格は上昇傾向にあり、子育て世帯の住宅取得を支援するこの制度の重要性が高まっています。</p><p>助成額は<strong>最大50万円</strong>です。<span class="marker-green">新築・中古ともに対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯であること</p><p>江東区内に住宅を取得し居住すること</p><p>世帯の年間所得が基準額以下であること</p><p>住民税を滞納していないこと</p></div><p>江東区役所住宅課に申請書、売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡しから6か月以内に申請</span>してください。期限を過ぎると受理されません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>最大50万円</strong>です。取得した住宅の種類や所在地により、助成額が変わる場合があります。</p><p><span class="marker">一定期間の居住継続が条件</span>で、短期間で転出すると返還を求められることがあります。</p><div class="note-box">江東区臨海部は交通インフラの整備が進み、りんかい線・ゆりかもめ・BRTなど多彩なアクセス手段があります。子育て関連施設も充実しており、住宅取得後の子育て環境としても注目されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-newlywed-rent',
    title: '江東区 新婚世帯家賃助成制度',
    organization: '江東区',
    type: 'local',
    maxAmount: '最大月3万円（最長2年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江東区', '新婚', '家賃助成'],
    eligibility: '江東区内に居住する婚姻届出後2年以内の新婚世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '江東区が実施する新婚世帯家賃助成制度です。区内に居住する新婚世帯に月額最大3万円を最長2年間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 新婚世帯家賃助成制度は、<span class="marker">婚姻届出後2年以内の新婚世帯</span>を対象に、区内の賃貸住宅の家賃を一部助成する制度です。</p><p>江東区は臨海部のタワーマンションから内陸部の落ち着いた住宅街まで、多様な住まいの選択肢があります。交通アクセスの良さと生活利便性を兼ね備え、新婚世帯の新生活スタートに最適な環境を提供しています。</p><p>助成額は<strong>月額最大3万円で最長2年間</strong>です。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出後2年以内であること</p><p>夫婦ともに39歳以下であること</p><p>世帯の年間所得が基準額以下であること</p><p>江東区内の民間賃貸住宅に居住していること</p></div><p>江東区役所住宅課に申請書、婚姻届受理証明書、賃貸借契約書の写し等を提出します。</p><p><span class="marker">申請は先着順で、年度途中でも予算に達した時点で受付終了</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大3万円</strong>で、実際の家賃額に応じて決定されます。最長2年間受給可能です。</p><p><span class="marker">区営住宅・都営住宅に居住している場合や、社宅を利用している場合は対象外</span>です。</p><div class="highlight-box">江東区では結婚新生活支援事業として、引っ越し費用の助成も実施している場合があります。新婚世帯向けの支援制度を複数組み合わせることで、新生活の初期費用負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-infertility',
    title: '江東区 不妊治療費助成制度',
    organization: '江東区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['江東区', '不妊治療', '助成金'],
    eligibility: '江東区に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '江東区が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>江東区は若い世帯の流入が著しく、不妊治療のニーズも高まっています。臨海部を中心とした交通利便性の高さから、都内の専門医療機関への通院もしやすい環境にあります。この助成制度で治療費の負担をさらに軽減します。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>です。<span class="marker-green">事実婚のカップルも対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江東区に住民登録のある夫婦またはカップルで、医療機関において不妊治療を受けた方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の証明書</p><p>領収書の写し</p><p>住民票（続柄がわかるもの）</p></div><p>江東区役所健康推進課に申請書類を提出します。<strong>治療終了後6か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対し、<strong>1回あたり最大10万円</strong>を助成します。年度内の回数上限があります。</p><p><span class="marker">東京都の助成制度との併用時は自己負担を超えない範囲で調整</span>されます。</p><div class="note-box">体外受精・顕微授精・人工授精などが主な対象です。江東区の保健相談所では不妊に関する個別相談も行っていますので、治療に関する不安や悩みは気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-scholarship',
    title: '江東区 奨学資金制度',
    organization: '江東区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '東京都',
    tags: ['江東区', '奨学金', '教育支援'],
    eligibility: '江東区に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '江東区が実施する奨学資金制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 奨学資金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対して、無利子で奨学資金を貸与する制度です。</p><p>江東区は深川・亀戸の歴史ある文教地区と、豊洲・有明の新しい住宅地を抱えています。多様な背景を持つ世帯が暮らすこの区で、経済的事情にかかわらず学びの機会を提供する奨学金制度は重要な役割を果たしています。</p><p>貸与額は<strong>月額最大3万円</strong>です。<span class="marker-green">無利子で返還でき、返済負担が軽減されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>江東区内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>経済的理由で修学が困難であること</p><p>学業成績が一定基準を満たすこと</p></div><p>江東区教育委員会庶務課に申請書、在学証明書、所得証明書を提出します。</p><p><span class="marker">募集期間は毎年4月〜5月で、選考により決定</span>されます。家計急変時は随時受付もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>月額最大3万円</strong>で、学校種別に応じた金額設定です。卒業後に無利子で返還します。</p><p><span class="marker">卒業後1年間の据置期間を経て、10年以内に分割返還</span>が基本です。</p><div class="note-box">江東区では奨学金制度のほか、就学援助制度（小中学生の学用品費・給食費等の支給）も実施しています。お子さまの学齢に合わせて適切な制度をご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-sme-support',
    title: '江東区 中小企業経営支援補助金',
    organization: '江東区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['江東区', '中小企業支援', '経営改善'],
    eligibility: '江東区内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '江東区が実施する中小企業経営支援補助金です。経営改善やデジタル化の取組みに対し最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 中小企業経営支援補助金は、<span class="marker">区内中小企業の経営改善やデジタル化の取組み</span>を支援する助成制度です。</p><p>江東区は臨海部にビッグサイト（東京国際展示場）を擁し、展示会やイベントの一大拠点となっています。内陸部には深川・亀戸を中心に中小の製造業や商店が多く、地域経済の活性化に向けたIT化・販路開拓の支援が求められています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">個人事業主も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>ホームページ・ECサイトの制作費用</p><p>業務管理システム・クラウドサービスの導入費</p><p>展示会・見本市への出展費用</p><p>チラシ・カタログ等の販促物制作費</p></div><p>江東区役所経済課に申請書と事業計画書を提出します。</p><p><span class="marker">交付決定前の事業着手は対象外</span>です。事前に交付決定通知を受けてから着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。年度内1回の申請が可能です。</p><p><span class="marker">事業完了後に実績報告書と経費証拠書類を提出する必要</span>があります。</p><div class="highlight-box">江東区では東京ビッグサイトで開催される展示会への出展に際し、別途「展示会出展助成金」も用意しています。区内の立地メリットを最大限に活かした販路開拓が可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-nursing-equipment',
    title: '江東区 介護用品支給事業',
    organization: '江東区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['江東区', '介護用品', '高齢者支援'],
    eligibility: '江東区に住所を有する要介護認定を受けた高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '江東区が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 介護用品支給事業は、<span class="marker">在宅で介護を受けている高齢者のために紙おむつ等の介護用品</span>を支給する制度です。</p><p>江東区は新旧の住宅地が混在し、高齢化が進む深川・城東地区と若い世帯が多い臨海地区で介護ニーズが異なります。この事業は区全域で在宅介護を行う家族を経済的に支援し、介護の継続を後押しします。</p><p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。<span class="marker-green">要介護1以上の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江東区に住民登録があり、要介護1以上の認定を受けた65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>介護保険被保険者証の写し</p><p>本人確認書類</p></div><p>江東区役所長寿応援課の窓口で申請します。<strong>ケアマネジャーを通じての申請も可能</strong>です。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。紙おむつ・尿取りパッドなどから選択できます。</p><p><span class="marker">住民税課税世帯は一部自己負担が発生する場合</span>があります。非課税世帯は自己負担なしです。</p><div class="note-box">江東区では介護用品の支給のほか、在宅介護者向けの「介護者のつどい」や「家族介護教室」も定期的に開催しています。介護の悩みや不安を共有できる場としてぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koto-elderly-support',
    title: '江東区 高齢者緊急通報システム事業',
    organization: '江東区',
    type: 'local',
    maxAmount: '無料（住民税非課税世帯）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['江東区', '緊急通報', '高齢者見守り'],
    eligibility: '江東区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '江東区が実施する高齢者緊急通報システム事業です。ひとり暮らし高齢者に緊急通報装置を貸与し、24時間対応の見守りを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 高齢者緊急通報システム事業は、<span class="marker">ひとり暮らしの高齢者等に緊急通報装置を貸与</span>し、急病や事故の際に迅速な対応を可能にする制度です。</p><p>江東区は区域が広く、臨海部の高層マンションから下町の長屋まで多様な住環境があります。ひとり暮らしの高齢者の安全を守るため、ボタン一つで24時間対応のコールセンターにつながる緊急通報システムを提供しています。</p><p><span class="marker-green">住民税非課税世帯は無料、課税世帯も低額で利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江東区に住民登録がある65歳以上のひとり暮らし高齢者、または高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="システムの機能"><p>ペンダント型緊急通報ボタン</p><p>24時間対応のコールセンター接続</p><p>安否確認センサー（希望者）</p><p>月1回の安否確認電話</p></div><p>江東区役所長寿応援課または<strong>各地域の長寿サポートセンター</strong>で申し込みます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>住民税非課税世帯は<strong>利用料無料</strong>、課税世帯は月額数百円の自己負担です。設置費用は区が負担します。</p><p><span class="marker">緊急通報時には登録済みの緊急連絡先にも自動で連絡</span>が入ります。親族等の協力員登録をお願いしています。</p><div class="highlight-box">江東区では緊急通報システムのほか、GPS機能付きの見守り端末の貸与事業も実施しています。認知症等で外出時の所在確認が必要な方は、こちらもあわせてご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 品川区（東京都）9件: childcare×2, housing, medical×2, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'shinagawa-childcare-subsidy',
    title: '品川区 認可外保育施設利用助成金',
    organization: '品川区',
    type: 'local',
    maxAmount: '最大月5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['品川区', '保育料助成', '認可外保育'],
    eligibility: '品川区に住所を有し、認可外保育施設を利用している児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '品川区が実施する認可外保育施設利用助成金です。認可外保育施設を利用する世帯に月額最大5万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 認可外保育施設利用助成金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用している世帯</span>の保育料負担を軽減する制度です。</p><p>品川駅・大崎駅周辺の再開発が進む品川区は、ビジネスエリアとしての顔を持ちながら、武蔵小山商店街や戸越銀座商店街など生活感あふれる街並みも健在です。共働き世帯が多く、保育需要に対応するため認可外施設利用者への助成を充実させています。</p><p><span class="marker-green">月額最大5万円と手厚い助成が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>品川区に住民登録があり、都の指導監督基準を満たす認可外保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用契約書の写し</p><p>保育料の領収書</p><p>保護者の就労証明書</p><p>振込先口座情報</p></div><p>品川区役所保育課に申請します。<strong>四半期ごとの事後申請</strong>で、3か月分をまとめて提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大5万円</strong>で、認可保育所との保育料差額を上限とします。</p><p><span class="marker">無償化対象の3〜5歳児は、無償化給付と助成金の合計が実際の保育料を超えない範囲</span>で調整されます。</p><div class="note-box">品川区は「しながわネウボラネットワーク」として、妊娠期から就学前までの切れ目のない子育て支援を展開しています。保育施設選びの相談も受け付けていますので、ぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-birth-bonus',
    title: '品川区 出産・子育て応援給付金',
    organization: '品川区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['品川区', '出産祝い金', '子育て応援'],
    eligibility: '品川区に住所を有する妊婦および出生した児童の養育者',
    applicationPeriod: '通年',
    description: '品川区が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の給付金を支給する制度です。</p><p>品川区はリニア中央新幹線の始発駅として将来性の高いエリアで、子育て世帯の流入が続いています。「しながわネウボラネットワーク」を核とした子育て支援体制のもと、すべての妊産婦と子育て家庭を経済的に支援します。</p><p><span class="marker-green">伴走型の相談支援とセットで提供され、面談が給付要件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p>妊娠届出は品川区の各保健センターで行います。面談後に申請書を提出すると、<strong>出産応援給付金5万円相当</strong>が支給されます。</p><p>出生後は赤ちゃん訪問等での面談を経て、<span class="marker">子育て応援給付金の申請</span>を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円相当</strong>が支給されます。出産応援と子育て応援はそれぞれ別に申請が必要です。</p><p><span class="marker">他自治体で同種の給付金を受け取り済みの場合は重複受給不可</span>です。</p><div class="highlight-box">品川区独自の「しながわっこ」子育て支援策として、各種サービスが充実しています。給付金とあわせて、一時保育・病児保育・ファミリーサポートなどの子育て支援サービスもぜひご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-housing-purchase',
    title: '品川区 住宅取得支援助成金',
    organization: '品川区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['品川区', '住宅取得', '助成金'],
    eligibility: '品川区内に住宅を取得する子育て世帯または若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '品川区が実施する住宅取得支援助成金です。区内に住宅を購入する子育て世帯・若年世帯に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 住宅取得支援助成金は、<span class="marker">子育て世帯や若年世帯が区内に住宅を取得する際</span>に費用の一部を助成する制度です。</p><p>品川区は品川駅の再開発やリニア中央新幹線の開業に向け、不動産価値が上昇しています。大崎・五反田のビジネスエリアから荏原・中延の閑静な住宅街まで、多彩な生活エリアがあり、定住促進のための住宅取得支援を実施しています。</p><p>助成額は<strong>最大50万円</strong>です。<span class="marker-green">新築・中古のいずれも対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯、または夫婦ともに39歳以下の世帯</p><p>品川区内に住宅を取得し居住すること</p><p>世帯の年間所得が基準額以下であること</p><p>住民税を滞納していないこと</p></div><p>品川区役所住宅課に申請書、売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡しから6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>最大50万円</strong>で、住宅取得にかかる費用の一部として支給されます。</p><p><span class="marker">一定期間（5年以上）の居住継続が条件</span>で、短期間で転出した場合は返還義務が生じます。</p><div class="note-box">品川区は東海道品川宿の歴史を持ち、下町の雰囲気を残す北品川・南品川エリアから、再開発が進む天王洲アイルエリアまで多様な住環境を選べます。住まい選びの際は品川区の住宅相談窓口もご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-infertility',
    title: '品川区 不妊治療費助成制度',
    organization: '品川区',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '東京都',
    tags: ['品川区', '不妊治療', '助成金'],
    eligibility: '品川区に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '品川区が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大15万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>品川区は独自の子育て支援策「しながわネウボラ」の一環として、妊娠を望むカップルへの支援にも力を入れています。助成額は1回あたり最大15万円と、都内でも手厚い水準を実現しています。</p><p>助成額は<strong>1回の治療につき最大15万円</strong>です。<span class="marker-green">事実婚のカップルも対象</span>に含まれます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>品川区に住民登録のある夫婦またはカップルで、医療機関で不妊治療を受けた方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の証明書（治療内容・費用明細）</p><p>領収書の写し</p><p>住民票（続柄がわかるもの）</p></div><p>品川区役所健康課に申請書類を提出します。<strong>治療終了後6か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対し、<strong>1回あたり最大15万円</strong>を助成します。年度内の回数上限があります。</p><p><span class="marker">東京都の助成制度と併用する場合は、自己負担を超えない範囲で調整</span>されます。</p><div class="highlight-box">品川区では不妊治療に関する専門相談窓口を設けています。治療費の助成だけでなく、精神的なサポートや情報提供も行っていますので、ぜひお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-senior-dental',
    title: '品川区 高齢者歯科健診助成事業',
    organization: '品川区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['品川区', '歯科健診', '高齢者医療'],
    eligibility: '品川区に住所を有する65歳以上の方',
    applicationPeriod: '通年',
    description: '品川区が実施する高齢者歯科健診助成事業です。65歳以上の区民を対象に無料で歯科健診を実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 高齢者歯科健診助成事業は、<span class="marker">65歳以上の区民を対象に無料で歯科健診</span>を実施する事業です。</p><p>口腔の健康は全身の健康と密接に関係しており、特に高齢者においては誤嚥性肺炎の予防やフレイル対策の観点から歯科健診の重要性が高まっています。品川区では高齢者の口腔ケアを推進し、健康寿命の延伸を目指しています。</p><p><span class="marker-green">区内の指定歯科医療機関で無料で受診できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>品川区に住民登録がある65歳以上の方が対象です。年度内に1回受診できます。</p><div class="summary-box" data-title="健診内容"><p>歯と歯ぐきの状態の確認</p><p>口腔内の粘膜チェック</p><p>噛む力・飲み込む力の評価</p><p>口腔ケアに関するアドバイス</p></div><p>区から届く受診券を持参し、<strong>区内の指定歯科医療機関</strong>で受診します。予約制の場合が多いため事前に電話でご確認ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>歯科健診の費用は<strong>無料</strong>です。健診の結果、治療が必要な場合は通常の保険診療による治療となります。</p><p><span class="marker">健診で発見された虫歯や歯周病の治療費は別途自己負担</span>が必要です。</p><div class="note-box">品川区では歯科健診に加え、口腔機能向上のための教室や訪問歯科診療の支援も行っています。通院が難しい方は、訪問歯科診療についてお住まいの地域の地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-scholarship',
    title: '品川区 奨学資金制度',
    organization: '品川区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '東京都',
    tags: ['品川区', '奨学金', '教育支援'],
    eligibility: '品川区に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '品川区が実施する奨学資金制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 奨学資金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、無利子で奨学資金を貸与する制度です。</p><p>品川区は小中一貫教育の先駆けとして全国的に知られ、教育に対する高い意識を持つ区です。すべての子どもに学びの機会を保障するため、高校・大学等への進学を経済面から支援しています。</p><p>貸与額は<strong>月額最大3万円</strong>です。<span class="marker-green">無利子で将来の返済負担が軽い</span>のが特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>品川区内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>経済的理由で修学が困難であること</p><p>学業成績が一定基準以上であること</p></div><p>品川区教育委員会庶務課に申請書、在学証明書、所得証明書を提出します。</p><p><span class="marker">毎年4月〜5月が主な募集期間で、選考により決定</span>されます。家計急変時は随時相談を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>月額最大3万円</strong>で、学校種別に応じた金額設定です。卒業後に無利子で返還します。</p><p><span class="marker">卒業後1年の据置期間の後、10年以内に分割返還</span>が基本です。</p><div class="note-box">品川区では奨学金のほか、「品川区育英資金」として特に優秀な学生への給付型奨学金も検討されています。最新情報は品川区教育委員会のホームページをご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-sme-support',
    title: '品川区 中小企業経営支援補助金',
    organization: '品川区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['品川区', '中小企業支援', '経営改善'],
    eligibility: '品川区内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '品川区が実施する中小企業経営支援補助金です。経営改善やIT化の取組みに対し最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 中小企業経営支援補助金は、<span class="marker">区内中小企業の経営改善やIT化の取組み</span>を支援する助成制度です。</p><p>品川区は大崎・五反田のIT企業集積地と、荏原・中延の町工場エリアが共存する多彩な産業構造を持っています。この補助金は、ホームページ制作やECサイト構築、業務効率化のためのシステム導入など、デジタル化を中心とした経営改善を後押しします。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>ホームページ・ECサイトの制作費用</p><p>業務管理ソフトウェアの導入費</p><p>展示会・商談会への出展費用</p><p>ブランディング・デザイン費用</p></div><p>品川区役所商業・ものづくり課に申請書と事業計画書を提出します。</p><p><span class="marker">交付決定前に着手した事業は対象外</span>です。必ず事前申請を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。同一年度に1回の申請が可能です。</p><p><span class="marker">実績報告書と経費証拠書類の提出が必須</span>です。適正な経理処理を行ってください。</p><div class="highlight-box">品川区では「品川ビジネスクラブ」を通じた企業間交流や、ものづくり企業向けの技術支援も行っています。補助金と合わせて活用することで、総合的な経営力強化が見込めます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-nursing-equipment',
    title: '品川区 介護用品支給事業',
    organization: '品川区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['品川区', '介護用品', '高齢者支援'],
    eligibility: '品川区に住所を有する要介護認定を受けた高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '品川区が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 介護用品支給事業は、<span class="marker">在宅で介護を受けている高齢者のために紙おむつ等の介護用品</span>を支給する制度です。</p><p>品川区は高齢者福祉に力を入れており、在宅介護を選択する家族を多面的にサポートしています。紙おむつ・尿取りパッド・清拭剤などの日常的に消費する介護用品を、カタログ方式で必要に応じて選択・配送する仕組みを整えています。</p><p>年間<strong>最大6万円相当</strong>の支給です。<span class="marker-green">要介護1以上の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>品川区に住民登録があり、要介護1以上の認定を受けた65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>介護保険被保険者証の写し</p><p>本人確認書類</p></div><p>品川区役所高齢者福祉課または<strong>在宅介護支援センター</strong>の窓口で申請します。ケアマネジャー経由でも申請可能です。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。毎月カタログから必要な用品を選べます。</p><p><span class="marker">住民税の課税状況によって一部自己負担が発生する場合</span>があります。非課税世帯は全額支給です。</p><div class="note-box">品川区では介護用品の支給に加え、家族介護者向けのストレス軽減プログラムや介護技術講習会も実施しています。在宅介護を長く続けるためにも、介護者自身のケアを大切にしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinagawa-elderly-support',
    title: '品川区 高齢者見守りサービス事業',
    organization: '品川区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['品川区', '高齢者見守り', '生活支援'],
    eligibility: '品川区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '品川区が実施する高齢者見守りサービス事業です。ひとり暮らし高齢者を対象に、緊急通報装置の貸与や安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 高齢者見守りサービス事業は、<span class="marker">ひとり暮らしの高齢者や日中独居の高齢者</span>を対象に、緊急通報装置の貸与や安否確認サービスを提供する事業です。</p><p>品川区は再開発が進む一方で、古くからの住宅地も多く残り、高齢者のひとり暮らし世帯が一定数あります。民間事業者や地域ボランティアと連携し、24時間体制の見守りネットワークを構築しています。</p><p><span class="marker-green">緊急通報装置の貸与は住民税非課税世帯は無料、課税世帯も低額負担</span>で利用可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>品川区に住民登録がある65歳以上のひとり暮らし高齢者、または高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="サービス内容"><p>緊急通報装置（ペンダント型）の貸与</p><p>24時間対応のコールセンター</p><p>人感センサーによる見守り（希望者）</p><p>定期的な安否確認連絡</p></div><p>品川区役所高齢者福祉課または<strong>在宅介護支援センター</strong>で申し込みます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>住民税非課税世帯は<strong>無料</strong>で利用でき、課税世帯も月額数百円の自己負担で利用可能です。</p><p><span class="marker">緊急通報時には、コールセンターが状況を確認し、必要に応じて救急車の手配や緊急連絡先への連絡</span>を行います。</p><div class="highlight-box">品川区では見守りサービスのほか、「しながわシニアネット」を通じた高齢者のICT活用支援も行っています。タブレット端末によるテレビ電話での見守りサービスも利用できる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 目黒区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'meguro-childcare-subsidy',
    title: '目黒区 認可外保育施設利用助成金',
    organization: '目黒区',
    type: 'local',
    maxAmount: '最大月4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['目黒区', '保育料助成', '認可外保育'],
    eligibility: '目黒区に住所を有し、認可外保育施設を利用している児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '目黒区が実施する認可外保育施設利用助成金です。認可外保育施設を利用する世帯に月額最大4万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 認可外保育施設利用助成金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用している世帯</span>の保育料負担を軽減する制度です。</p><p>自由が丘や中目黒など洗練された街並みで知られる目黒区は、高い住宅需要と相まって子育て世帯の保育ニーズも高い地域です。認可保育所の増設を進める一方、やむを得ず認可外施設を利用する世帯への経済的支援を充実させています。</p><p><span class="marker-green">月額最大4万円が助成され、保育料の負担が軽減されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>目黒区に住民登録があり、都の指導監督基準を満たす認可外保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用契約書の写し</p><p>保育料の領収書</p><p>保護者の就労証明書</p><p>振込先口座情報</p></div><p>目黒区役所保育課に申請します。<strong>四半期ごとの事後申請</strong>となり、3か月分をまとめて提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大4万円</strong>で、認可保育所との保育料差額を上限とします。</p><p><span class="marker">3〜5歳児の無償化給付との差額分が助成対象</span>で、二重受給にはなりません。</p><div class="note-box">目黒区では「めぐろ子育て応援ナビ」を通じて保育施設の情報や各種助成制度を一元的に案内しています。アプリやウェブサイトでの情報収集もおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-birth-bonus',
    title: '目黒区 出産・子育て応援給付金',
    organization: '目黒区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['目黒区', '出産祝い金', '子育て応援'],
    eligibility: '目黒区に住所を有する妊婦および出生した児童の養育者',
    applicationPeriod: '通年',
    description: '目黒区が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の給付金を支給する制度です。</p><p>目黒区は中目黒・自由が丘・都立大学など人気の住宅エリアを擁し、おしゃれなカフェやショップとともに、子育て世帯にとっても魅力的な街です。この給付金はすべての妊産婦・子育て家庭を対象に、経済面での安心を提供します。</p><p><span class="marker-green">伴走型相談支援と一体で実施され、保健師等との面談が給付条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p>妊娠届出は目黒区の各保健センターで行います。面談後に申請すると、<strong>出産応援給付金5万円相当</strong>が支給されます。</p><p>出生後はこんにちは赤ちゃん訪問等の面談を経て、<span class="marker">子育て応援給付金を申請</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円相当</strong>が受けられます。出産応援と子育て応援はそれぞれ別に申請が必要です。</p><p><span class="marker">他の自治体で同種の給付を受けた方は重複受給不可</span>です。転入時は前住所地の受給状況をご確認ください。</p><div class="highlight-box">目黒区では独自の子育て支援策として「ゆりかご・めぐろ」事業を展開しています。妊娠から出産・育児まで切れ目のないサポートが受けられますので、給付金と合わせてぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-housing-purchase',
    title: '目黒区 子育て世帯住宅取得支援制度',
    organization: '目黒区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['目黒区', '住宅取得', '子育て世帯'],
    eligibility: '目黒区内に住宅を取得する18歳未満の子どもがいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '目黒区が実施する子育て世帯住宅取得支援制度です。区内に住宅を購入する子育て世帯に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 子育て世帯住宅取得支援制度は、<span class="marker">18歳未満の子どもがいる世帯が区内に住宅を取得する際</span>に費用の一部を助成する制度です。</p><p>目黒区は都内でも住宅価格が特に高い地域の一つです。自由が丘や中目黒の洗練された街並み、駒場や碑文谷の閑静な住宅街は、子育て環境として非常に人気があります。この制度は、住宅取得のハードルを下げ、子育て世帯の定住を促進します。</p><p>助成額は<strong>最大50万円</strong>です。<span class="marker-green">新築・中古ともに対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯であること</p><p>目黒区内に住宅を取得し居住すること</p><p>世帯の年間所得が基準額以下であること</p><p>住民税を滞納していないこと</p></div><p>目黒区役所住宅課に申請書、売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡しから6か月以内に申請が必要</span>です。期限厳守でお願いします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>最大50万円</strong>で、住宅取得費用の一部として支給されます。</p><p><span class="marker">一定期間の居住継続が条件</span>で、早期転出時には返還を求められることがあります。</p><div class="note-box">目黒区は駒沢オリンピック公園や林試の森公園など大きな緑地があり、子どもの遊び場にも恵まれています。住宅取得の検討時は、公園や子育て施設へのアクセスも確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-newlywed-rent',
    title: '目黒区 新婚世帯家賃助成制度',
    organization: '目黒区',
    type: 'local',
    maxAmount: '最大月3万円（最長2年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '東京都',
    tags: ['目黒区', '新婚', '家賃助成'],
    eligibility: '目黒区内に居住する婚姻届出後2年以内の新婚世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '目黒区が実施する新婚世帯家賃助成制度です。区内に居住する新婚世帯に月額最大3万円を最長2年間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 新婚世帯家賃助成制度は、<span class="marker">婚姻届出後2年以内の新婚世帯</span>を対象に、区内の賃貸住宅の家賃を一部助成する制度です。</p><p>目黒区は中目黒・祐天寺・学芸大学・自由が丘など、おしゃれで住みやすい街が連なるエリアです。家賃水準は都内でも高めですが、この助成制度により新婚世帯が目黒区で新生活をスタートしやすくなります。</p><p>助成額は<strong>月額最大3万円で最長2年間</strong>です。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出後2年以内であること</p><p>夫婦ともに39歳以下であること</p><p>世帯の年間所得が基準額以下であること</p><p>目黒区内の民間賃貸住宅に居住していること</p></div><p>目黒区役所住宅課に申請書、婚姻届受理証明書、賃貸借契約書の写し等を提出します。</p><p><span class="marker">予算に限りがあるため、年度途中で受付終了となる場合</span>があります。早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大3万円</strong>で、実際の家賃額に基づいて決定されます。最長2年間の助成が受けられます。</p><p><span class="marker">区営・都営住宅や社宅に居住している場合は対象外</span>です。また、親族が所有する物件への居住も対象外となります。</p><div class="highlight-box">目黒区では新婚世帯向けの住まい相談会を定期的に開催しています。家賃助成のほか、引っ越し費用の補助が受けられる場合もありますので、窓口でご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-infertility',
    title: '目黒区 不妊治療費助成制度',
    organization: '目黒区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['目黒区', '不妊治療', '助成金'],
    eligibility: '目黒区に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '目黒区が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>目黒区は30〜40代の働き盛りの世帯が多く住む地域で、晩婚化・晩産化に伴い不妊治療のニーズも高まっています。区内には複数の婦人科クリニックがあり、都心の専門医療機関へのアクセスも良好です。この助成制度で治療費の負担を軽減します。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>です。<span class="marker-green">事実婚のカップルも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>目黒区に住民登録のある夫婦またはカップルで、医療機関で不妊治療を受けた方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の証明書</p><p>領収書の写し</p><p>住民票（続柄がわかるもの）</p></div><p>目黒区役所健康推進課に申請書類を提出します。<strong>治療終了後6か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担に対し、<strong>1回あたり最大10万円</strong>を助成します。年度内の回数上限があります。</p><p><span class="marker">東京都の助成制度との併用時は、自己負担を超えない範囲で調整</span>されます。</p><div class="note-box">体外受精・顕微授精・人工授精などが主な対象です。目黒区では不妊に関する個別相談やセミナーも実施していますので、治療への不安がある方はまず相談窓口をご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-scholarship',
    title: '目黒区 奨学資金制度',
    organization: '目黒区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '東京都',
    tags: ['目黒区', '奨学金', '教育支援'],
    eligibility: '目黒区に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '目黒区が実施する奨学資金制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 奨学資金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対して無利子で奨学資金を貸与する制度です。</p><p>目黒区は東京大学駒場キャンパスや東京工業大学が所在する学術エリアでもあります。教育熱の高い地域性を反映し、経済的な事情にかかわらず学びの機会を保障する奨学金制度を運営しています。</p><p>貸与額は<strong>月額最大3万円</strong>です。<span class="marker-green">無利子のため、返済の負担が抑えられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>目黒区内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>経済的理由で修学が困難であること</p><p>学業成績が一定基準を満たすこと</p></div><p>目黒区教育委員会教育政策課に申請書、在学証明書、所得証明書等を提出します。</p><p><span class="marker">毎年4月〜5月が募集期間で、選考のうえ決定</span>されます。年度途中の家計急変にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>月額最大3万円</strong>で、学校種別に応じた金額です。卒業後に無利子で返還します。</p><p><span class="marker">卒業後1年の据置期間を経て、10年以内に分割返還</span>が基本です。経済困難な場合は返還猶予の相談が可能です。</p><div class="highlight-box">目黒区では高校入学時や大学入学時の一時金貸付制度も用意しています。入学準備のまとまった費用が必要な際は、奨学金制度と合わせてご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-sme-support',
    title: '目黒区 中小企業経営支援補助金',
    organization: '目黒区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['目黒区', '中小企業支援', '経営改善'],
    eligibility: '目黒区内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '目黒区が実施する中小企業経営支援補助金です。経営改善やIT化の取組みに対し最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 中小企業経営支援補助金は、<span class="marker">区内中小企業の経営改善やIT化の取組み</span>を支援する助成制度です。</p><p>目黒区は自由が丘や中目黒を中心にファッション・飲食・デザインなどクリエイティブ関連の事業者が多く集まっています。この補助金は、ホームページやECサイトの制作、業務効率化のためのIT導入、展示会出展など幅広い経営改善活動を支援します。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>ホームページ・ECサイトの制作・リニューアル費</p><p>予約管理システム・POSレジの導入費</p><p>展示会・マルシェへの出展費用</p><p>ブランディング・パッケージデザイン費</p></div><p>目黒区役所産業経済課に申請書と事業計画書を提出します。</p><p><span class="marker">交付決定前に着手した事業は対象外</span>です。事前に申請を済ませてから事業に取りかかってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。年度内1回の申請が可能です。</p><p><span class="marker">事業完了後に実績報告書と領収書等の証拠書類を提出</span>し、確定検査を受ける必要があります。</p><div class="note-box">目黒区では中小企業診断士やITコーディネーターによる無料の経営相談も実施しています。補助金の活用と合わせて、専門家のアドバイスを受けることで事業効果を高められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-nursing-equipment',
    title: '目黒区 介護用品支給事業',
    organization: '目黒区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['目黒区', '介護用品', '高齢者支援'],
    eligibility: '目黒区に住所を有する要介護認定を受けた高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '目黒区が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 介護用品支給事業は、<span class="marker">在宅で介護を受けている高齢者のために紙おむつ等の介護用品</span>を支給する制度です。</p><p>目黒区は比較的高齢化率が低い区ですが、在宅介護を選択する世帯への支援は手厚く整備されています。紙おむつ・尿取りパッド・清拭剤・使い捨て手袋など、介護に必要な消耗品の費用負担を軽減し、在宅介護の継続をサポートします。</p><p>年間<strong>最大6万円相当</strong>の支給です。<span class="marker-green">要介護1以上の認定を受けた方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>目黒区に住民登録があり、要介護1以上の認定を受けた65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>介護保険被保険者証の写し</p><p>本人確認書類</p></div><p>目黒区役所高齢福祉課の窓口で申請します。<strong>担当ケアマネジャーからの申請も可能</strong>です。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>です。退院後に改めて申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大6万円相当</strong>の介護用品が支給されます。毎月カタログから必要な用品を選択できます。</p><p><span class="marker">住民税課税状況により自己負担が発生する場合</span>があります。非課税世帯は全額支給です。</p><div class="highlight-box">目黒区では介護用品の支給のほか、在宅介護家族向けの「ほっとサロン」を各地域で開催しています。同じ立場の方との交流や、介護の悩み相談に活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'meguro-elderly-support',
    title: '目黒区 高齢者見守り・安否確認事業',
    organization: '目黒区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['目黒区', '高齢者見守り', '安否確認'],
    eligibility: '目黒区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '目黒区が実施する高齢者見守り・安否確認事業です。ひとり暮らし高齢者に緊急通報装置の貸与や定期的な安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 高齢者見守り・安否確認事業は、<span class="marker">ひとり暮らしの高齢者や日中独居の高齢者</span>を対象に、緊急通報装置の貸与や安否確認サービスを提供する事業です。</p><p>目黒区は閑静な住宅街が広がり、マンションの単身高齢者も少なくありません。近隣との関わりが希薄になりがちな都市部において、行政・民間・地域が一体となった見守り体制を構築し、高齢者の安全と安心を確保しています。</p><p><span class="marker-green">緊急通報装置の利用は住民税非課税世帯無料、課税世帯も低額</span>で利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>目黒区に住民登録がある65歳以上のひとり暮らし高齢者、または高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="サービス内容"><p>緊急通報装置（ペンダント型）の貸与</p><p>24時間対応のコールセンター接続</p><p>人感センサーによる生活リズム見守り</p><p>乳酸菌飲料配達時の声かけ訪問</p></div><p>目黒区役所高齢福祉課または<strong>各地区の包括支援センター</strong>で申し込みます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>見守りサービスは<strong>無料</strong>で利用できます。緊急通報装置は非課税世帯無料、課税世帯は月額数百円の負担です。</p><p><span class="marker">緊急ボタンを押すと24時間対応のコールセンターにつながり、必要に応じて救急車手配や緊急連絡先への連絡</span>が行われます。</p><div class="note-box">目黒区では見守りサービスのほか、「ふれあいサロン」や「配食サービス」など、ひとり暮らし高齢者の社会的孤立を防ぐ多様な事業を展開しています。お住まいの地域の包括支援センターにお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
];
