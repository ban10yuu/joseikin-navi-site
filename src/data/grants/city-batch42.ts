import { Grant } from '@/lib/types';

export const cityGrantsBatch42: Grant[] = [
  // ────────────────────────────────────────────────
  // 北区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'kita-childcare-subsidy',
    title: '北区 子育て応援給付金',
    organization: '北区',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['北区', '子育て支援', '給付金'],
    eligibility: '北区に住所を有し、対象年齢の子どもを養育している保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '北区が実施する子育て応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 子育て応援給付金は、<span class="marker">区内に住所を有する子育て世帯</span>に対し、子どもの養育にかかる費用を支援するために給付金を支給する制度です。</p><p>北区は赤羽・王子・十条など下町の温かみとアクセスの良さを兼ね備えた住宅地として、子育て世帯からの人気が高まっています。荒川沿いの豊かな自然環境と充実した公園施設も子育て環境の魅力です。</p><p><span class="marker-green">所得制限は設けられておらず、北区に住む対象世帯すべてが申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北区に住民登録があり、18歳到達後の最初の3月31日までの子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>振込先口座情報</p><p>子どもとの関係を確認できる書類</p></div><p>北区役所子ども未来部の窓口またはオンラインで申請できます。<strong>対象者には案内通知が送付</strong>されますので、届いた案内に従って手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり最大5万円</strong>です。年度ごとの申請となり、申請期限を過ぎると受給できません。</p><p><span class="marker">申請後、審査を経て約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="note-box">他の自治体から転入した場合は、転入日以降に申請が可能です。年度途中に転出した場合の取り扱いについては、北区役所にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-birth-bonus',
    title: '北区 出産・子育て応援事業',
    organization: '北区',
    type: 'local',
    maxAmount: '合計10万円相当',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['北区', '出産祝い金', '子育て応援'],
    eligibility: '北区に住所を有し、出産した方または出産予定の妊婦',
    applicationPeriod: '通年',
    description: '北区が実施する出産・子育て応援事業です。妊娠届出時と出生届出後に合計10万円相当の給付を受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 出産・子育て応援事業は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当、合計10万円相当</span>の経済的支援を行う制度です。</p><p>飛鳥山公園や音無親水公園など、緑豊かな環境に囲まれた北区は、23区の中でも子育て支援に力を入れている自治体の一つです。伴走型相談支援と経済的支援を一体的に提供することで、妊娠期から切れ目のないサポートを実現しています。</p><p><span class="marker-green">すべての妊婦・子育て家庭が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時：保健師等との面談 → 出産応援給付金5万円相当</p><p>②出生届出後：保健師等との面談 → 子育て応援給付金5万円相当</p></div><p>北区の保健センターまたは北区役所で妊娠届を提出する際に、保健師等との面談を受けます。面談終了後、給付の案内があります。</p><p><span class="marker">出生届提出後の面談は、赤ちゃん訪問（こんにちは赤ちゃん訪問）の際に行われます</span>。訪問日程は事前に連絡があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>妊娠届出時5万円相当＋出生届出後5万円相当の合計10万円相当</strong>が給付されます。多胎の場合は出産応援分が増額される場合があります。</p><p><span class="marker">他の自治体で妊娠届を提出し、出産前に北区に転入した場合は、出産応援給付金は前住所地での受給状況を確認</span>のうえ対応します。</p><div class="highlight-box">北区では出産・子育て応援事業のほかにも、妊婦健診の助成や産後ケア事業など、妊娠期から出産後まで一貫した支援体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-housing-purchase',
    title: '北区 親元近居・同居住宅取得助成制度',
    organization: '北区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['北区', '住宅取得', '助成金'],
    eligibility: '北区内で親世帯の近くに住宅を取得する子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '北区が実施する親元近居・同居住宅取得助成制度です。三世代の近居・同居を促進するため、住宅取得費用の一部を最大50万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 親元近居・同居住宅取得助成制度は、<span class="marker">北区内に住む親世帯の近くで住宅を購入する子育て世帯</span>に対し、取得費用の一部を助成する制度です。</p><p>北区は東京メトロ南北線やJR京浜東北線、埼京線など複数路線が利用でき、都心へのアクセスが良好な住宅地です。三世代が近くに住むことで、子育ての相互支援やお年寄りの見守りなど、地域のつながりを強化する狙いがあります。</p><p>助成額は<strong>最大50万円</strong>で、<span class="marker-green">登記費用や仲介手数料なども対象経費に含まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>北区内に1年以上居住している親世帯がいること</p><p>申請者世帯に18歳未満の子どもがいること</p><p>親世帯の住宅から直線距離1.2km以内に住宅を取得すること</p><p>取得する住宅に5年以上居住する意思があること</p></div><p>北区役所まちづくり部住宅課に申請書と必要書類を提出します。住宅の売買契約書、登記事項証明書、親子関係を証明する戸籍謄本などが必要です。</p><p><span class="marker">住宅取得後1年以内に申請する必要があります</span>。取得前の事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は住宅取得にかかる登記費用等の実費で、<strong>上限50万円</strong>です。同居の場合は近居よりも助成額が増額される場合があります。</p><p><span class="marker">新築・中古を問わず、マンション・一戸建ていずれも対象</span>です。ただし、親族間の売買は対象外となります。</p><div class="note-box">助成を受けた後、5年以内に転居した場合は助成金の返還を求められることがあります。長期的な居住計画を立てたうえで申請しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-newlywed-rent',
    title: '北区 新婚・子育て世帯家賃助成制度',
    organization: '北区',
    type: 'local',
    maxAmount: '月額最大3万円（最長3年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '東京都',
    tags: ['北区', '家賃助成', '新婚世帯'],
    eligibility: '北区内の民間賃貸住宅に居住する新婚または子育て世帯',
    applicationPeriod: '毎年4月〜6月（年度ごとに申請）',
    description: '北区が実施する新婚・子育て世帯家賃助成制度です。民間賃貸住宅の家賃を月額最大3万円、最長3年間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 新婚・子育て世帯家賃助成制度は、<span class="marker">区内の民間賃貸住宅に居住する新婚世帯や子育て世帯</span>の家賃負担を軽減する制度です。</p><p>北区は赤羽駅周辺の再開発により利便性が向上し、若い世帯の流入が増加しています。しかし東京都心部の家賃水準は依然として高く、この制度は新婚期や子育て期の家計を支援するものです。</p><p>月額<strong>最大3万円</strong>を<span class="marker-green">最長3年間（36か月）助成</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>北区内の民間賃貸住宅に居住していること</p><p>婚姻届の提出から3年以内、または小学生以下の子どもがいること</p><p>世帯の合計所得が基準額以下であること</p><p>生活保護を受給していないこと</p></div><p>北区役所住宅課の窓口で申請を行います。賃貸借契約書の写し、住民票、所得証明書などが必要です。</p><p><span class="marker">毎年4月から6月の申請受付期間内に手続きが必要</span>です。抽選により対象者が決定する場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>家賃と基準額の差額（上限3万円）</strong>が助成されます。助成期間は最長3年間です。</p><p><span class="marker">年度途中で転居・転出した場合は、その翌月分から助成が停止</span>されます。区内での住み替えの場合は届出により継続できる場合があります。</p><div class="highlight-box">北区では家賃助成のほかにも、ファミリー向け区営住宅や都営住宅の優先入居制度も整備されています。住宅に関する総合的な相談は住宅課で受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-infertility',
    title: '北区 特定不妊治療費助成制度',
    organization: '北区',
    type: 'local',
    maxAmount: '最大30万円（1回の治療あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '東京都',
    tags: ['北区', '不妊治療', '助成金'],
    eligibility: '北区に住所を有し、特定不妊治療を受けている夫婦',
    applicationPeriod: '通年',
    description: '北区が実施する特定不妊治療費助成制度です。体外受精や顕微授精の治療費を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 特定不妊治療費助成制度は、<span class="marker">体外受精および顕微授精（特定不妊治療）</span>を受けている夫婦に対し、治療費の一部を助成する制度です。</p><p>不妊治療は保険適用が拡大されましたが、それでもなお高額な自己負担が発生するケースがあります。北区では、子どもを望む夫婦の経済的な負担を軽減し、安心して治療に専念できるよう独自の上乗せ助成を行っています。</p><p><span class="marker-green">保険適用後の自己負担分に対して、1回の治療あたり最大30万円を助成</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北区に住民登録がある夫婦で、指定医療機関において特定不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>特定不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票（続柄記載）</p><p>戸籍謄本（事実婚の場合は申立書）</p></div><p>北区保健所健康推進課の窓口で申請します。<strong>治療終了日から60日以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療あたり<strong>最大30万円</strong>を助成します。助成回数は治療開始時の妻の年齢により異なります。</p><p><span class="marker">東京都の特定不妊治療費助成事業との併用が可能</span>で、都の助成を受けたうえでさらに北区の助成を受けることができます。</p><div class="note-box">男性不妊治療（精巣内精子採取術など）を行った場合は、別途最大15万円の助成が加算される場合があります。詳しくは北区保健所にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-scholarship',
    title: '北区 奨学資金貸付制度',
    organization: '北区',
    type: 'local',
    maxAmount: '月額最大5万円（大学等）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '東京都',
    tags: ['北区', '奨学金', '教育支援'],
    eligibility: '北区に住所を有する方の子で、高等学校・大学等に在学している方',
    applicationPeriod: '毎年4月〜5月',
    description: '北区が実施する奨学資金貸付制度です。経済的理由で修学が困難な学生に対し、月額最大5万円の奨学金を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 奨学資金貸付制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対し、無利子の奨学金を貸与する制度です。</p><p>北区には赤羽台や王子など文教地区としての歴史があり、教育環境の整備に力を入れてきました。この奨学金制度は、家庭の経済状況にかかわらず意欲ある学生が学び続けられるよう支援するものです。</p><p>貸付額は高校生で月額最大1.8万円、大学生等で<strong>月額最大5万円</strong>です。<span class="marker-green">無利子での貸付のため、返済時の負担が軽減されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が北区に1年以上居住していること</p><p>高等学校・大学・短大・専門学校等に在学中であること</p><p>経済的理由で修学が困難であること</p><p>他の奨学金と重複しないこと（一部併用可能なものあり）</p></div><p>毎年4月から5月にかけて申請を受け付けます。北区教育委員会事務局学校支援課に申請書と成績証明書、所得証明書などを提出します。</p><p><span class="marker">選考は書類審査により行われ、6月頃に結果が通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸付月額は<strong>高校生1.8万円、大学生等5万円</strong>が上限です。入学準備金として別途一時金の貸付もあります。</p><p><span class="marker">卒業後6か月の据置期間を経て、最長10年間で返済</span>します。無利子ですが、正当な理由なく返済が滞った場合は延滞金が発生します。</p><div class="highlight-box">日本学生支援機構（JASSO）の奨学金との併用については、種類により取り扱いが異なります。事前に学校支援課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-sme-support',
    title: '北区 中小企業設備投資助成金',
    organization: '北区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['北区', '中小企業支援', '設備投資'],
    eligibility: '北区内で1年以上事業を営む中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '北区が実施する中小企業設備投資助成金です。生産性向上のための設備投資に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 中小企業設備投資助成金は、<span class="marker">区内の中小企業が行う生産性向上のための設備投資</span>に対して、費用の一部を助成する制度です。</p><p>北区は印刷業をはじめとするものづくり産業が集積する地域で、王子周辺には紙関連企業が多く立地しています。この助成金は、区内中小企業の競争力強化と経営基盤の安定化を目的としています。</p><p>助成率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">IT機器やソフトウェアの導入も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>北区内で1年以上事業を営んでいること</p><p>中小企業基本法に定める中小企業者であること</p><p>区税を滞納していないこと</p><p>同一設備について他の助成金を受けていないこと</p></div><p>北区役所産業振興課に申請書と見積書、事業計画書を提出します。審査では設備投資の必要性と効果が評価されます。</p><p><span class="marker">必ず設備の発注・購入前に申請してください</span>。交付決定前に支出した経費は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。製造設備、計測機器、業務用ソフトウェアなどが対象です。</p><p><span class="marker">設備導入後は実績報告書の提出が必要</span>で、導入効果の確認が行われます。</p><div class="note-box">リース契約や中古品の購入は原則として対象外です。北区では設備投資助成のほかにも、経営相談やセミナーなどの支援メニューも用意されていますので、総合的にご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-nursing-equipment',
    title: '北区 介護用品支給事業',
    organization: '北区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['北区', '介護用品', '支給事業'],
    eligibility: '北区に住所を有し、要介護認定を受けた高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '北区が実施する介護用品支給事業です。在宅で介護を行う家族に対し、紙おむつ等の介護用品を年間最大6万円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 介護用品支給事業は、<span class="marker">在宅で要介護高齢者を介護している家族</span>に対し、紙おむつや尿取りパッドなどの介護用品を支給する制度です。</p><p>北区は高齢化率が23区の中でも高い地域の一つであり、在宅介護を支える施策の充実に取り組んでいます。介護用品の費用は日常的に発生する出費であり、この支給事業は介護者の経済的負担を軽減する役割を果たしています。</p><p><span class="marker-green">月額最大5,000円相当の介護用品を、カタログから選んで受け取ることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北区に住民登録があり、要介護3以上の認定を受けた65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>対象者の介護保険被保険者証の写し</p><p>介護者の本人確認書類</p></div><p>北区役所高齢福祉課の窓口で申請します。申請が認定されると、<strong>指定事業者のカタログ</strong>が届きますので、毎月必要な介護用品を選んで注文します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大5,000円相当（年間最大6万円相当）</strong>の介護用品が支給されます。紙おむつ、尿取りパッド、清拭剤、使い捨て手袋などが対象です。</p><p><span class="marker">施設入所中や入院中の方は対象外</span>です。在宅介護をしている期間のみ支給されます。</p><div class="note-box">要介護度の変更があった場合は再申請が必要です。また、北区では介護用品支給のほかにも、介護者向けのリフレッシュ事業や相談窓口も設けていますのでご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kita-elderly-support',
    title: '北区 高齢者自立生活支援事業',
    organization: '北区',
    type: 'local',
    maxAmount: '月額最大1万円相当のサービス',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '東京都',
    tags: ['北区', '高齢者支援', '生活支援'],
    eligibility: '北区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '北区が実施する高齢者自立生活支援事業です。ひとり暮らしの高齢者等に対し、配食サービスや家事援助など月額最大1万円相当の生活支援を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 高齢者自立生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、日常生活を支援するサービスを提供する制度です。</p><p>北区は赤羽や十条などに商店街が残る下町の雰囲気が特徴ですが、一方で高齢者の単身世帯も増加しています。配食サービス、家事援助、緊急通報装置の設置など、在宅生活を安心して続けるための多彩なメニューを用意しています。</p><p><span class="marker-green">介護保険の要介護認定を受けていない方でも利用できるサービスがあります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>配食サービス（安否確認つき）</p><p>軽度家事援助（掃除・洗濯・買い物など）</p><p>緊急通報装置の設置</p><p>電話による安否確認・相談</p></div><p>北区の地域包括支援センターまたは高齢福祉課に相談・申請します。ケアマネジャー等の訪問により、必要なサービスが決定されます。</p><p><span class="marker">まずはお住まいの地域の地域包括支援センターにご連絡ください</span>。ご本人だけでなく、ご家族からの相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>サービスの種類により利用料は異なりますが、<strong>配食サービスは1食あたり数百円の自己負担</strong>で利用できます。月額では最大1万円相当のサービスが受けられます。</p><p><span class="marker">一部サービスには所得に応じた自己負担が発生</span>します。生活保護世帯は自己負担が免除される場合があります。</p><div class="highlight-box">北区では高齢者見守りネットワーク事業も実施しており、新聞配達や宅配業者などの民間事業者と連携して、異変の早期発見に努めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 荒川区（東京都）9件: childcare×2, housing×2, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'arakawa-childcare-subsidy',
    title: '荒川区 子育て世帯応援給付金',
    organization: '荒川区',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['荒川区', '子育て支援', '給付金'],
    eligibility: '荒川区に住所を有し、18歳以下の子どもを養育している保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '荒川区が実施する子育て世帯応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 子育て世帯応援給付金は、<span class="marker">区内に住所を有する子育て世帯</span>に対し、子どもの養育にかかる費用を支援するために給付金を支給する制度です。</p><p>荒川区は面積が23区で2番目に小さく、都電荒川線やあらかわ遊園など下町情緒あふれる地域です。コンパクトな区域に充実した子育て施設が集まっており、きめ細やかな子育て支援で知られています。</p><p><span class="marker-green">所得制限なし。荒川区に住む対象世帯すべてが申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>荒川区に住民登録があり、18歳到達後の最初の3月31日までの子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>振込先口座情報</p><p>子どもとの関係を確認できる書類</p></div><p>荒川区役所子育て支援課の窓口またはオンラインで申請できます。<strong>対象者には案内通知が郵送</strong>されます。届いた案内に従い手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり最大5万円</strong>です。年度ごとの申請が必要で、申請期限を過ぎると受給できません。</p><p><span class="marker">審査完了後、約1〜2か月で指定口座に振り込まれます</span>。</p><div class="note-box">年度途中に荒川区へ転入した場合は、転入日以降に申請可能です。転出した場合の取り扱いについては、荒川区子育て支援課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-daycare-support',
    title: '荒川区 認証保育所保育料助成制度',
    organization: '荒川区',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['荒川区', '保育料助成', '認証保育所'],
    eligibility: '荒川区に住所を有し、東京都認証保育所に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '荒川区が実施する認証保育所保育料助成制度です。認証保育所の保育料と認可保育所の保育料との差額を月額最大4万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 認証保育所保育料助成制度は、<span class="marker">東京都認証保育所に子どもを預けている保護者</span>に対し、認可保育所との保育料の差額を助成する制度です。</p><p>荒川区は保育施設の整備を積極的に進めていますが、認証保育所を利用する世帯にとっては認可保育所に比べて保育料が高くなるケースがあります。この助成制度により、施設の種類にかかわらず安心して子どもを預けられる環境を実現しています。</p><p>月額<strong>最大4万円</strong>の助成で、<span class="marker-green">世帯の所得に応じて助成額が決定されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>荒川区に住民登録があること</p><p>東京都認証保育所と月極契約で利用していること</p><p>認可保育所への入所申込みを行っていること</p><p>保育料を滞納していないこと</p></div><p>荒川区役所保育課に申請書と認証保育所の契約書・領収書を提出します。</p><p><span class="marker">四半期ごとにまとめて申請する方式</span>です。各四半期の申請期限までに必要書類を揃えてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は認証保育所の保育料と、仮に認可保育所に入所した場合の保育料との差額で、<strong>月額上限4万円</strong>です。</p><p><span class="marker">認可保育所の保育料は世帯の住民税額をもとに算定</span>されるため、所得が低い世帯ほど助成額が大きくなる傾向があります。</p><div class="highlight-box">荒川区では、認証保育所のほかにも保育ママ（家庭的保育事業）利用者への助成も行っています。保育に関するご相談は荒川区保育課へお気軽にどうぞ。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-housing-eco',
    title: '荒川区 住宅エコ助成制度',
    organization: '荒川区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '東京都',
    tags: ['荒川区', '省エネ', '住宅助成'],
    eligibility: '荒川区内の住宅に省エネルギー設備を導入する区民',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '荒川区が実施する住宅エコ助成制度です。太陽光発電や高効率給湯器など省エネ設備の導入に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 住宅エコ助成制度は、<span class="marker">区内の住宅に太陽光発電システムや高効率給湯器などの省エネ設備を導入</span>する場合に、費用の一部を助成する制度です。</p><p>荒川区は「環境先進都市あらかわ」を掲げ、脱炭素社会の実現に向けた取り組みを推進しています。区民の省エネ意識の向上と住宅のエネルギー効率改善を図るため、多様な設備を助成対象としています。</p><p><span class="marker-green">太陽光発電、蓄電池、高断熱窓など複数の設備を同時に申請することも可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象設備と助成額"><p>太陽光発電システム：最大15万円</p><p>家庭用蓄電池：最大10万円</p><p>高効率給湯器（エコキュートなど）：最大5万円</p><p>窓の断熱改修：最大10万円</p></div><p>荒川区役所環境課に申請書と見積書を提出します。設置工事の契約書や設備の仕様書も必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定を受ける前に工事を始めた場合は助成の対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備ごとに助成額が定められており、<strong>複数設備を合わせて最大30万円</strong>が上限です。</p><p><span class="marker">国や東京都の補助金との併用が可能</span>ですが、対象経費の合計が助成額の合計を下回る場合は調整が行われます。</p><div class="note-box">中古住宅への設備導入も対象です。マンションの場合は管理組合の承認が必要となるケースがありますので、事前に確認してください。申請は先着順で予算枠に達し次第終了します。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-barrier-free',
    title: '荒川区 バリアフリー住宅改修助成制度',
    organization: '荒川区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['荒川区', 'バリアフリー', '住宅改修'],
    eligibility: '荒川区に住所を有する65歳以上の高齢者または障害のある方がいる世帯',
    applicationPeriod: '通年',
    description: '荒川区が実施するバリアフリー住宅改修助成制度です。高齢者や障害者が暮らしやすいよう住宅のバリアフリー化工事に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 バリアフリー住宅改修助成制度は、<span class="marker">高齢者や障害のある方が安全に暮らせるよう、住宅のバリアフリー改修</span>を行う場合に費用の一部を助成する制度です。</p><p>荒川区は古くからの木造住宅密集地域が多く、住宅のバリアフリー化は重要な課題です。手すりの設置や段差の解消、浴室・トイレの改修など、日常生活の安全性向上に資する工事が対象となります。</p><p>助成率は対象工事費の一部で、<strong>上限20万円</strong>です。<span class="marker-green">介護保険の住宅改修費とは別に利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置など）</p><p>床材の変更（滑りにくい素材へ）</p><p>浴室・トイレの改修</p><p>引き戸等への扉の取替え</p></div><p>荒川区役所高齢者福祉課または障害者福祉課に申請します。改修工事の見積書と施工箇所の写真が必要です。</p><p><span class="marker">工事着手前に申請が必要です</span>。ケアマネジャーや地域包括支援センターに事前相談すると、適切な改修内容のアドバイスを受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限20万円</strong>です。所得に応じた自己負担割合が設定されています。</p><p><span class="marker">介護保険の住宅改修費（上限20万円の9割支給）との併用が可能</span>なため、合わせて利用することでより大規模な改修が実施できます。</p><div class="highlight-box">荒川区では住宅改修助成のほかにも、住宅設備改善（浴槽の取替えや流し・洗面台の取替えなど）についても助成制度があります。対象設備については高齢者福祉課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-school-lunch',
    title: '荒川区 学校給食費助成事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '給食費全額助成',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['荒川区', '給食費', '教育支援'],
    eligibility: '荒川区立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '通年（自動適用）',
    description: '荒川区が実施する学校給食費助成事業です。区立小中学校の給食費を全額助成し、保護者の負担をゼロにしています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 学校給食費助成事業は、<span class="marker">区立小中学校に在籍するすべての児童生徒</span>の学校給食費を区が全額負担する制度です。</p><p>荒川区は子育てしやすい街づくりの一環として、保護者の教育費負担の軽減に取り組んでいます。学校給食は栄養バランスの取れた食事を提供する重要な役割を担っており、費用面の心配なく安心して利用できる環境を実現しました。</p><p><span class="marker-green">所得制限なし。区立小中学校に在籍するすべての児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>荒川区立小学校・中学校に在籍する児童生徒の保護者が対象です。</p><div class="summary-box" data-title="制度の特徴"><p>申請手続きは不要（自動適用）</p><p>所得制限なし</p><p>小学校・中学校ともに対象</p><p>通常の学校給食が対象（特別な行事食等を除く）</p></div><p><strong>個別の申請手続きは原則不要</strong>で、区立小中学校に在籍していれば自動的に給食費が全額助成されます。</p><p><span class="marker">転入した場合も、区立学校への編入手続きが完了すれば自動的に適用</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>学校給食費が全額助成</strong>されます。小学校で月額約4,500円、中学校で月額約5,300円程度の保護者負担がゼロになります。</p><p><span class="marker">私立学校や国立学校に通学している場合は対象外</span>です。区立学校に在籍していることが条件です。</p><div class="note-box">アレルギー対応食や宗教的な理由による食事の配慮についても、各学校で対応しています。給食に関するご相談は、通学先の学校または荒川区教育委員会学務課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-telework-bonus',
    title: '荒川区 テレワーク環境整備助成金',
    organization: '荒川区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '東京都',
    tags: ['荒川区', 'テレワーク', '助成金'],
    eligibility: '荒川区内に事業所を有する中小企業で、テレワーク制度を導入する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '荒川区が実施するテレワーク環境整備助成金です。中小企業のテレワーク導入にかかる経費を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 テレワーク環境整備助成金は、<span class="marker">区内の中小企業がテレワーク制度を新たに導入・拡充</span>する際にかかる環境整備費用を助成する制度です。</p><p>荒川区は下町の商店街や中小の製造業が集まる地域ですが、IT環境の整備により多様な働き方の実現を支援しています。テレワークの導入は、従業員のワークライフバランス向上や、災害時のBCP対策としても有効です。</p><p>助成率は対象経費の2分の1以内で、<strong>上限10万円</strong>です。<span class="marker-green">テレワーク用のPC、通信機器、ソフトウェアなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>荒川区内に事業所（本社・支店等）を有すること</p><p>中小企業基本法に定める中小企業者であること</p><p>テレワークに関する就業規則等を整備すること</p><p>区税を滞納していないこと</p></div><p>荒川区役所産業経済部経営支援課に申請書と見積書を提出します。テレワーク規程のドラフトやICT環境の整備計画も必要です。</p><p><span class="marker">機器購入やサービス契約の前に申請が必要</span>です。交付決定を受けてから導入を進めてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。ノートPC、Web会議用カメラ・マイク、VPNソフトウェア等が対象です。</p><p><span class="marker">テレワーク実施後は実績報告書の提出が必要</span>で、実際にテレワークを実施したことを証明する勤怠記録等の提示が求められます。</p><div class="note-box">個人事業主も対象です。ただし、自宅を事業所としている場合の自宅用機器は対象外となる場合があります。東京都のテレワーク助成金との併用可否は事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-nursing-home-reform',
    title: '荒川区 介護保険住宅改修支援事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '最大18万円（介護保険給付分）',
    maxAmountNum: 18,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['荒川区', '介護保険', '住宅改修'],
    eligibility: '荒川区に住所を有し、要介護・要支援認定を受けた方',
    applicationPeriod: '通年',
    description: '荒川区が実施する介護保険住宅改修支援事業です。要介護・要支援認定を受けた方の住宅改修費を最大18万円（保険給付分）支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 介護保険住宅改修支援事業は、<span class="marker">要介護または要支援の認定を受けた方が、自宅で安全に生活するために住宅を改修</span>する場合の費用を支援する制度です。</p><p>荒川区は木造住宅密集地域が多く、古い住宅での段差やバリアが高齢者の生活の妨げとなるケースがあります。介護保険を活用した住宅改修により、住み慣れた自宅で安心して暮らし続けられる環境づくりを支援しています。</p><p>対象工事費の上限は20万円で、<span class="marker-green">1割〜3割の自己負担で利用でき、保険給付分として最大18万円が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取り付け</p><p>段差の解消</p><p>滑り防止・移動の円滑化のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器等への便器の取替え</p></div><p>担当のケアマネジャーに相談のうえ、<strong>事前に荒川区介護保険課に申請</strong>します。工事完了後に領収書等を提出して保険給付を受けます。</p><p><span class="marker">必ず工事前に事前申請が必要</span>です。事前申請なしに工事を行った場合は給付対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の上限は<strong>20万円（1人1回限り）</strong>で、自己負担は所得に応じて1割〜3割です。保険給付分として最大18万円が支給されます。</p><p><span class="marker">要介護度が3段階以上重くなった場合や、転居した場合は再度20万円まで利用可能</span>です。</p><div class="highlight-box">荒川区では介護保険の住宅改修に加え、独自のバリアフリー住宅改修助成制度もあります。併用することでより充実した改修が可能です。ケアマネジャーにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-energy-support',
    title: '荒川区 省エネ家電買替助成事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '東京都',
    tags: ['荒川区', '省エネ', '家電買替'],
    eligibility: '荒川区に住所を有する区民',
    applicationPeriod: '毎年6月〜翌年1月（予算に達し次第終了）',
    description: '荒川区が実施する省エネ家電買替助成事業です。古い家電を省エネ性能の高い製品に買い替える場合に最大3万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 省エネ家電買替助成事業は、<span class="marker">エアコンや冷蔵庫などの家電製品を省エネ性能の高い製品に買い替える</span>場合に、購入費用の一部を助成する制度です。</p><p>荒川区は家庭のCO2排出削減を目指し、区民の省エネ行動を経済的に後押ししています。古い家電を最新の省エネ家電に買い替えることで、電気代の節約と環境負荷の低減を同時に実現できます。</p><p><span class="marker-green">エアコン・冷蔵庫が主な対象で、統一省エネラベル4つ星以上の製品が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成額の目安"><p>エアコン：購入額の10%（上限1.5万円）</p><p>冷蔵庫：購入額の10%（上限2万円）</p><p>合計上限：3万円</p></div><p>荒川区役所環境清掃部環境課に申請書と購入時のレシート・保証書の写しを提出します。</p><p><span class="marker">購入後3か月以内に申請が必要</span>です。古い家電の適正処分（家電リサイクル法に基づく処分）を証明するリサイクル券の写しも求められます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は購入費用の10%以内で、<strong>エアコン上限1.5万円、冷蔵庫上限2万円、合計上限3万円</strong>です。</p><p><span class="marker">統一省エネラベル4つ星以上の製品であることが条件</span>です。中古品やネットオークションでの購入は対象外です。</p><div class="note-box">1世帯あたり年度内1回の利用に限られます。毎年度予算に限りがあるため、早めの申請をおすすめします。LED照明器具の買替えについても、別途助成制度がある場合がありますので環境課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'arakawa-bousai-equipment',
    title: '荒川区 防災用品あっせん事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '購入費用の最大50%（上限5万円）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['荒川区', '防災', '防災用品'],
    eligibility: '荒川区に住所を有する区民または区内の事業者',
    applicationPeriod: '通年',
    description: '荒川区が実施する防災用品あっせん事業です。家庭用消火器や感震ブレーカーなどの防災用品購入費を最大50%助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 防災用品あっせん事業は、<span class="marker">区民の防災対策を促進するため、家庭用消火器や感震ブレーカーなどの防災用品</span>の購入費用を助成する制度です。</p><p>荒川区は荒川や隅田川に囲まれた低地に位置し、水害リスクへの備えが求められる地域です。また木造住宅密集地域も多く、地震時の火災対策としても防災用品の備えが重要です。区では家庭や事業所における防災力の向上を後押ししています。</p><p><span class="marker-green">家具転倒防止器具や感震ブレーカーなど、命を守る防災用品が割引価格で購入可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象防災用品"><p>家庭用消火器：あっせん価格で販売</p><p>感震ブレーカー：購入費の一部助成</p><p>家具転倒防止器具：無料取付サービスあり</p><p>防災ラジオ：あっせん価格で販売</p></div><p>荒川区役所防災課の窓口で申込みます。品目により、あっせん（割引販売）と助成（費用補助）の2種類があります。</p><p><span class="marker">感震ブレーカーの設置助成は事前申請が必要</span>です。設置後に領収書を提出して助成金を受け取ります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>品目ごとに助成率・助成額が異なります。感震ブレーカーは購入・設置費の<strong>最大50%（上限5万円）</strong>が助成されます。</p><p><span class="marker">高齢者世帯や障害者世帯には家具転倒防止器具の無料取付サービス</span>があります。対象となる方は防災課にご相談ください。</p><div class="note-box">防災用品のあっせんは年間を通じて行っていますが、一部品目は在庫がなくなり次第終了します。荒川区ではマイ・タイムラインの作成支援や防災訓練も定期的に実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 板橋区（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'itabashi-childcare-subsidy',
    title: '板橋区 子育て応援給付金',
    organization: '板橋区',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['板橋区', '子育て支援', '給付金'],
    eligibility: '板橋区に住所を有し、18歳以下の子どもを養育している保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '板橋区が実施する子育て応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 子育て応援給付金は、<span class="marker">区内に住所を有する子育て世帯</span>に対し、養育費用の一部として給付金を支給する制度です。</p><p>板橋区は中山道の板橋宿として歴史があり、現在は都営三田線や東武東上線沿線の住宅地として発展しています。赤塚植物園や東京大仏（乗蓮寺）など緑豊かなスポットも多く、子育てにやさしい街として人気があります。</p><p><span class="marker-green">所得制限なし。板橋区に住む対象世帯すべてが申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>板橋区に住民登録があり、18歳到達後の最初の3月31日までの子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>振込先口座情報</p><p>子どもとの関係を確認できる書類</p></div><p>板橋区役所子ども家庭総合支援センターの窓口またはオンラインで申請できます。<strong>対象者には個別に案内通知が送付</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり最大5万円</strong>です。年度ごとの申請が必要です。</p><p><span class="marker">審査完了後、約1〜2か月で指定口座に振り込まれます</span>。</p><div class="note-box">板橋区では子育て応援給付金のほかにも、多子世帯への独自支援策を実施しています。詳しくは板橋区子ども家庭部にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-parenting-allowance',
    title: '板橋区 多子世帯養育支援手当',
    organization: '板橋区',
    type: 'local',
    maxAmount: '第3子以降 月額最大1.5万円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['板橋区', '多子世帯', '養育手当'],
    eligibility: '板橋区に住所を有し、18歳以下の子どもを3人以上養育している保護者',
    applicationPeriod: '通年',
    description: '板橋区が実施する多子世帯養育支援手当です。第3子以降の子ども1人につき月額最大1.5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 多子世帯養育支援手当は、<span class="marker">18歳以下の子どもを3人以上養育している世帯</span>に対し、第3子以降の子ども1人につき月額手当を支給する制度です。</p><p>板橋区は高島平団地をはじめとする大規模住宅地があり、ファミリー層に人気のエリアです。子どもが多い世帯ほど経済的負担が増すため、多子世帯への独自の経済支援を行うことで、安心して子育てできる環境を整備しています。</p><p>第3子以降の子ども1人あたり<strong>月額最大1.5万円</strong>が支給されます。<span class="marker-green">所得に応じて支給額が変動します</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>板橋区に住民登録があること</p><p>18歳以下の子どもを3人以上養育していること</p><p>申請者と子どもが同一世帯であること</p><p>生活保護を受給していないこと</p></div><p>板橋区役所子ども家庭部子ども政策課に申請書と戸籍謄本、所得証明書を提出します。</p><p><span class="marker">現況届の提出が毎年必要</span>です。届出を怠ると支給が停止されることがありますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の子ども1人につき<strong>月額最大1.5万円</strong>です。世帯所得に応じて全額支給と一部支給があります。</p><p><span class="marker">毎年6月に現況届の提出が求められ、受給資格の確認</span>が行われます。</p><div class="highlight-box">板橋区では多子世帯への支援として、保育料の軽減（第2子半額・第3子以降無料）や、区立施設の利用料割引なども実施しています。複数の支援制度を組み合わせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-housing-purchase',
    title: '板橋区 ファミリー世帯住宅取得助成制度',
    organization: '板橋区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['板橋区', '住宅取得', '助成金'],
    eligibility: '板橋区内に住宅を取得するファミリー世帯（18歳未満の子どもがいる世帯）',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '板橋区が実施するファミリー世帯住宅取得助成制度です。区内で住宅を取得するファミリー世帯に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 ファミリー世帯住宅取得助成制度は、<span class="marker">区内に住宅を購入するファミリー世帯</span>に対し、登記費用等の一部を助成する制度です。</p><p>板橋区は23区の中でも比較的手頃な住宅価格帯にあり、成増や志村坂上周辺を中心にマンション開発が活発です。この制度は子育て世帯の定住を促進し、地域コミュニティの活性化を目的としています。</p><p>助成額は<strong>最大50万円</strong>で、<span class="marker-green">新築・中古・マンション・一戸建てを問わず対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>板橋区内に住宅を取得すること（新築・中古問わず）</p><p>申請者世帯に18歳未満の子どもがいること</p><p>取得する住宅に5年以上居住する意思があること</p><p>区税を滞納していないこと</p></div><p>板橋区役所都市整備部住宅政策課に申請書、売買契約書、登記事項証明書、住民票などを提出します。</p><p><span class="marker">住宅取得後1年以内に申請が必要</span>です。取得前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は登記費用等の実費で、<strong>上限50万円</strong>です。子どもの数に応じた加算がある場合もあります。</p><p><span class="marker">5年以内に転出した場合は、助成金の返還を求められる</span>ことがあります。長期的に板橋区で暮らす計画を立てたうえで申請しましょう。</p><div class="note-box">親族間の売買や、事業用物件の取得は対象外です。板橋区では住宅取得に関する無料相談会も開催していますので、住宅政策課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-disability-medical',
    title: '板橋区 障害者医療費助成制度（心身障害者医療費助成）',
    organization: '板橋区',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['板橋区', '障害者医療', '助成金'],
    eligibility: '板橋区に住所を有し、身体障害者手帳1・2級または愛の手帳1・2度をお持ちの方',
    applicationPeriod: '通年',
    description: '板橋区が実施する障害者医療費助成制度（心身障害者医療費助成）です。重度の障害がある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 障害者医療費助成制度は、<span class="marker">身体障害者手帳1・2級または愛の手帳（療育手帳）1・2度</span>をお持ちの方に対し、保険診療の自己負担分を全額助成する制度です。</p><p>板橋区は障害福祉サービスの充実に積極的に取り組んでおり、区内には障害者支援施設やグループホームなどが多数整備されています。この医療費助成は、障害のある方が経済的な心配なく医療を受けられるようにする重要な支援策です。</p><p><span class="marker-green">入院・通院ともに保険診療の自己負担分が全額助成されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>板橋区に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級または2級の方</p><p>愛の手帳（療育手帳）1度または2度の方</p><p>精神障害者保健福祉手帳1級の方（一部制限あり）</p></div><p>板橋区役所障がい政策課の窓口で申請します。障害者手帳、健康保険証、本人確認書類が必要です。<strong>「心身障害者医療費受給者証（マル障）」</strong>が交付されます。</p><p><span class="marker">65歳以上で新たに障害認定を受けた方は、後期高齢者医療制度への加入が条件</span>となる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。通院・入院ともに窓口負担はありません。</p><p><span class="marker">住民税課税者は一部自己負担（1割負担、月額上限あり）が発生</span>する場合があります。住民税非課税の方は自己負担なしです。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料など）は助成対象外です。また、入院時の食事療養費の一部は自己負担となります。所得制限を超える場合は助成対象外となることがありますので、詳しくは障がい政策課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-afterschool',
    title: '板橋区 放課後子ども教室事業',
    organization: '板橋区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['板橋区', '放課後教室', '教育支援'],
    eligibility: '板橋区立小学校に通う児童',
    applicationPeriod: '通年（年度初めに登録）',
    description: '板橋区が実施する放課後子ども教室事業です。区立小学校の施設を利用し、放課後の安全な居場所と学習・体験活動の機会を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 放課後子ども教室事業は、<span class="marker">区立小学校の校庭や教室を活用し、放課後に安全で充実した居場所</span>を提供する事業です。</p><p>板橋区は光学機器産業をはじめとするものづくりの街でもあり、科学実験教室など特色ある体験プログラムも取り入れています。保護者の就労支援だけでなく、子どもたちの学びと遊びの環境を充実させることを目的としています。</p><p><span class="marker-green">参加費は無料で、区立小学校に通う全児童が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="活動内容"><p>宿題・自主学習のサポート</p><p>スポーツ・文化活動</p><p>地域ボランティアによる体験教室</p><p>読書活動・工作教室など</p></div><p>年度初めに各学校を通じて配布される参加申込書に記入し、学校に提出します。</p><p><span class="marker">年度途中からの参加も可能</span>です。各学校の放課後子ども教室コーディネーターにご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>参加費は無料</strong>です。一部の体験教室で材料費が実費でかかることがありますが、基本的な活動はすべて無料で参加できます。</p><p><span class="marker">学童保育（あいキッズ）との併用も可能</span>です。板橋区では全小学校に放課後の居場所を確保しています。</p><div class="highlight-box">板橋区の放課後子ども教室は地域のボランティアスタッフによって支えられています。保護者の方もスタッフとして参加できます。詳しくは板橋区教育委員会生涯学習課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-women-startup',
    title: '板橋区 女性起業支援助成金',
    organization: '板橋区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['板橋区', '女性起業', '助成金'],
    eligibility: '板橋区内で新たに起業する、または起業後1年以内の女性',
    applicationPeriod: '毎年6月〜12月（予算に達し次第終了）',
    description: '板橋区が実施する女性起業支援助成金です。女性の起業・創業を支援するため、初期費用を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 女性起業支援助成金は、<span class="marker">区内で新たに起業する、または起業後1年以内の女性</span>を対象に、創業にかかる初期費用を助成する制度です。</p><p>板橋区は産業支援と女性活躍推進の両面から、女性の起業を積極的に後押ししています。区内には女性起業家向けのシェアオフィスやコワーキングスペースも増えており、起業しやすい環境が整いつつあります。</p><p>助成率は対象経費の2分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">板橋区主催の創業セミナー受講が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>女性であること</p><p>板橋区内で起業する（または起業後1年以内である）こと</p><p>板橋区主催の創業セミナーまたは女性起業講座を受講済みであること</p><p>区税を滞納していないこと</p></div><p>板橋区役所産業経済部産業振興課に事業計画書と申請書を提出します。審査ではビジネスプランの実現可能性が評価されます。</p><p><span class="marker">板橋区立企業活性化センターで無料の起業相談が受けられます</span>。事前に相談してから申請準備を進めるのがおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。店舗内装費、設備費、広告宣伝費、ホームページ作成費などが対象です。</p><p><span class="marker">交付決定前に支出した経費は助成対象外</span>です。必ず交付決定を受けてから経費の支出を行ってください。</p><div class="note-box">人件費や仕入れ費用は対象外です。板橋区では女性起業家同士の交流会やメンター制度も実施しており、起業後のフォローアップ体制も整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-nursing-equipment',
    title: '板橋区 介護用品支給事業',
    organization: '板橋区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['板橋区', '介護用品', '支給事業'],
    eligibility: '板橋区に住所を有し、要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '板橋区が実施する介護用品支給事業です。在宅で介護をする家族に対し、紙おむつ等の介護用品を年間最大6万円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 介護用品支給事業は、<span class="marker">要介護3以上の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>板橋区は高島平団地をはじめとする大規模住宅地を抱え、住民の高齢化が進む地域です。在宅介護を支える施策として、介護用品の経済的負担を軽減し、介護者の負担を和らげることを目的としています。</p><p><span class="marker-green">月額最大5,000円相当の介護用品が、カタログから選んで自宅に届きます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>板橋区に住民登録がある要介護3以上の65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護者の介護保険被保険者証の写し</p><p>介護者の本人確認書類</p></div><p>板橋区役所おとしより保健福祉センターに申請します。認定後、<strong>指定業者のカタログ</strong>が届き、毎月介護用品を選んで注文します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大5,000円相当（年間最大6万円相当）</strong>の介護用品が支給されます。紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などが対象です。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>で、在宅で介護を受けている期間のみ支給されます。</p><div class="note-box">住民税非課税世帯は全額無料、課税世帯は一部自己負担が発生する場合があります。要介護度の変更時は再申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-migration-bonus',
    title: '板橋区 ファミリー世帯定住支援助成金',
    organization: '板橋区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '東京都',
    tags: ['板橋区', '定住支援', '助成金'],
    eligibility: '区外から板橋区に転入し定住するファミリー世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '板橋区が実施するファミリー世帯定住支援助成金です。区外から転入するファミリー世帯の引越し費用等を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 ファミリー世帯定住支援助成金は、<span class="marker">区外から板橋区に転入し、長期的に定住するファミリー世帯</span>に対して、引越し費用等を助成する制度です。</p><p>板橋区は東京23区の中で都心と郊外のバランスが取れたエリアです。池袋まで電車で数分、成増エリアには大型商業施設もあり、子育てしやすい生活環境が整っています。この助成金はファミリー世帯の板橋区への転入と定住を促進するものです。</p><p>助成額は<strong>最大30万円</strong>で、<span class="marker-green">引越し費用や礼金等の初期費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>板橋区外から転入すること</p><p>世帯に18歳未満の子どもがいること</p><p>板橋区内の賃貸住宅または購入住宅に居住すること</p><p>5年以上定住する意思があること</p></div><p>板橋区役所住宅政策課に申請書、転入前後の住民票、賃貸契約書または売買契約書を提出します。</p><p><span class="marker">転入後6か月以内に申請が必要</span>です。期限を過ぎると助成を受けられませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>引越し費用、礼金、仲介手数料等を合算した額の一部が助成され、<strong>上限30万円</strong>です。</p><p><span class="marker">5年以内に板橋区から転出した場合は、助成金の返還を求められる</span>ことがあります。</p><div class="highlight-box">板橋区ではファミリー世帯向けの情報サイトや子育て施設マップも充実しています。転入前に板橋区の子育て環境を知りたい方は、区の窓口やウェブサイトをご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itabashi-seismic-diagnosis',
    title: '板橋区 木造住宅耐震診断助成制度',
    organization: '板橋区',
    type: 'local',
    maxAmount: '耐震診断費用全額助成（無料診断）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['板橋区', '耐震診断', '助成金'],
    eligibility: '板橋区内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '通年',
    description: '板橋区が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅を対象に、無料で耐震診断を実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、無料で耐震診断を行う制度です。</p><p>板橋区内には旧耐震基準で建てられた木造住宅が多く残っており、首都直下地震への備えとして耐震化の促進が急務となっています。この制度は、まず自宅の耐震性能を知ることから始められるよう、診断費用を区が全額負担するものです。</p><p><span class="marker-green">区が派遣する専門家（建築士）が無料で耐震診断を行います</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる建物"><p>板橋区内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>在来軸組工法またはツーバイフォー工法であること</p></div><p>板橋区役所都市整備部建築指導課に申請書を提出します。区が委託する建築士が自宅を訪問し、耐震診断を実施します。</p><p><span class="marker">診断結果は約1か月後に報告書として届きます</span>。診断結果に基づいて、必要な耐震改修のアドバイスも受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額板橋区が負担</strong>します。自己負担はありません。</p><p><span class="marker">耐震診断の結果、改修が必要と判定された場合は、別途耐震改修助成制度（上限150万円）</span>を利用して改修工事の費用助成を受けることができます。</p><div class="note-box">耐震診断は建物の安全性を評価するもので、改修工事を義務づけるものではありません。ただし、診断結果を踏まえて早めの対策を検討することをお勧めします。分譲マンションの耐震診断については別制度がありますので建築指導課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 練馬区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'nerima-childcare-subsidy',
    title: '練馬区 子育てスタート応援金',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['練馬区', '子育て支援', '応援金'],
    eligibility: '練馬区に住所を有し、新たに子どもが生まれた世帯',
    applicationPeriod: '通年（出生後6か月以内に申請）',
    description: '練馬区が実施する子育てスタート応援金です。子どもが生まれた世帯に対し、子育ての初期費用として最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 子育てスタート応援金は、<span class="marker">練馬区に住所を有し、新たに子どもが生まれた世帯</span>に対し、子育ての初期費用を支援するために給付金を支給する制度です。</p><p>練馬区は23区で2番目に人口が多く、石神井公園や光が丘公園など広大な緑地を擁する住宅都市です。また日本のアニメ産業発祥の地としても知られ、ファミリー層に人気の高い地域です。</p><p><span class="marker-green">第1子から対象で、所得制限なく支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>練馬区に住民登録があること</p><p>出生届を提出した子どもを養育していること</p><p>出生後6か月以内に申請すること</p></div><p>練馬区役所こども家庭部子育て支援課の窓口またはオンラインで申請できます。出生届の提出時に案内されます。</p><p><span class="marker">申請者の本人確認書類と振込先口座情報が必要</span>です。申請後、審査を経て約1か月後に支給されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり最大10万円</strong>です。多胎の場合は、出生した子ども1人ごとに支給されます。</p><p><span class="marker">出生後6か月を過ぎると申請できなくなります</span>。出生届と同時に手続きするのがおすすめです。</p><div class="highlight-box">練馬区では子育てスタート応援金のほかにも、出産・子育て応援事業による伴走型支援（保健師等による面談と相談支援）も行っています。安心して子育てできる環境づくりを総合的に進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-birth-bonus',
    title: '練馬区 第3子以降出産祝金',
    organization: '練馬区',
    type: 'local',
    maxAmount: '第3子以降1人あたり20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['練馬区', '出産祝い金', '多子世帯'],
    eligibility: '練馬区に住所を有し、第3子以降の子どもを出産した方',
    applicationPeriod: '通年（出生後6か月以内に申請）',
    description: '練馬区が実施する第3子以降出産祝金です。第3子以降の子どもが生まれた世帯に、子ども1人あたり20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 第3子以降出産祝金は、<span class="marker">第3子以降の子どもが生まれた世帯</span>に対し、お祝い金として20万円を支給する制度です。</p><p>練馬区は23区内で最大級の面積を誇る緑豊かな住宅地であり、多子世帯が暮らしやすい環境が整っています。3人以上の子どもを育てる世帯は経済的負担が大きいため、この出産祝金で家計を後押しします。</p><p><span class="marker-green">所得制限なし。第3子以降であれば支給対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>練馬区に住民登録があり、第3子以降の子どもを出産した方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>練馬区役所こども家庭部子育て支援課に申請書を提出します。<strong>出生後6か月以内</strong>に申請してください。</p><p><span class="marker">「第3子」の数え方は、18歳年度末までの子どもを上から順に数えます</span>。すでに独立した子どもは算定に含まれません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の子ども<strong>1人あたり20万円</strong>が支給されます。双子以上で第3子に該当する場合は、該当する人数分が支給されます。</p><p><span class="marker">申請期限（出生後6か月）を過ぎると受給できません</span>ので、早めの手続きをお勧めします。</p><div class="note-box">練馬区では多子世帯向けの保育料軽減や、区立施設の優先利用なども実施しています。子育てに関する各種制度については、練馬区のウェブサイトや子育て情報誌「ねりま子育てガイド」でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-vacant-house',
    title: '練馬区 空き家活用支援事業',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大100万円（改修費）',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['練馬区', '空き家活用', '補助金'],
    eligibility: '練馬区内の空き家を地域貢献施設として活用する所有者または運営者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '練馬区が実施する空き家活用支援事業です。空き家を地域貢献施設（子育て支援、高齢者交流など）として活用する場合の改修費を最大100万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 空き家活用支援事業は、<span class="marker">区内の空き家を子育て支援施設や高齢者の交流拠点など地域に貢献する施設</span>として活用する場合に、改修費用を助成する制度です。</p><p>練馬区は住宅地が広がる一方で、所有者の高齢化等により空き家が増加傾向にあります。空き家を放置すると防災・防犯・景観上の問題が生じますが、適切に改修・活用することで地域の資源に変えることができます。</p><p>助成額は改修費の2分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">NPO法人や地域団体が運営者となることも可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="活用用途の例"><p>子育てひろば・児童の居場所づくり</p><p>高齢者サロン・多世代交流スペース</p><p>地域の集会所・コミュニティカフェ</p><p>福祉作業所・障害者の活動拠点</p></div><p>練馬区役所都市整備部住宅課に事業計画書と申請書を提出します。空き家の所有者または活用を行う運営者が申請できます。</p><p><span class="marker">改修工事着手前の事前相談・申請が必要</span>です。用途の公益性や地域ニーズとの整合性が審査されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は改修費の2分の1以内で、<strong>上限100万円</strong>です。構造の補修、内装工事、設備工事（空調・トイレ等）が対象です。</p><p><span class="marker">助成を受けた施設は、10年以上継続して地域貢献活動に使用する</span>ことが条件です。途中で用途変更や閉鎖した場合は返還を求められることがあります。</p><div class="highlight-box">練馬区では空き家の所有者向けに無料相談窓口も設けています。「売却するか」「賃貸にするか」「地域活用するか」迷っている方は、まず住宅課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-housing-eco',
    title: '練馬区 住宅省エネ改修助成制度',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['練馬区', '省エネ改修', '住宅助成'],
    eligibility: '練馬区内の住宅に省エネ改修を行う区民',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '練馬区が実施する住宅省エネ改修助成制度です。窓の断熱化や高効率給湯器の導入など省エネ改修工事に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 住宅省エネ改修助成制度は、<span class="marker">区内の住宅で窓の断熱化や高効率給湯器の設置などの省エネルギー改修</span>を行う場合に、工事費用の一部を助成する制度です。</p><p>練馬区は「みどりの風吹くまちビジョン」を掲げ、環境にやさしいまちづくりを推進しています。住宅の断熱性能向上はCO2排出削減だけでなく、光熱費の節約や居住快適性の向上にもつながります。</p><p>助成率は対象工事費の一部で、<strong>上限20万円</strong>です。<span class="marker-green">窓の断熱改修（内窓設置・二重サッシ化）は特に助成率が高く設定</span>されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>窓の断熱改修（内窓設置・ガラス交換）：最大15万円</p><p>高効率給湯器（エコキュート等）設置：最大5万円</p><p>外壁・屋根の断熱工事：最大10万円</p><p>LED照明への一括交換：最大3万円</p></div><p>練馬区役所環境部環境課に申請書と工事見積書を提出します。</p><p><span class="marker">工事着手前の事前申請が必須</span>です。交付決定通知を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備の種類ごとに助成額が定められており、<strong>合計で最大20万円</strong>が上限です。</p><p><span class="marker">国や東京都の省エネ補助金との併用が可能</span>ですが、対象経費の合計から他の補助金を差し引いた額が練馬区の助成額の上限となります。</p><div class="note-box">マンションの場合は管理組合の承認が必要です。賃貸住宅に居住する方は、オーナーの同意書が求められます。申請は先着順で予算に達し次第終了しますので、早めの準備をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-senior-dental',
    title: '練馬区 高齢者歯科健診・治療費助成制度',
    organization: '練馬区',
    type: 'local',
    maxAmount: '健診無料・治療費助成最大1万円',
    maxAmountNum: 1,
    category: 'medical',
    prefecture: '東京都',
    tags: ['練馬区', '歯科健診', '高齢者医療'],
    eligibility: '練馬区に住所を有する75歳以上の方',
    applicationPeriod: '通年',
    description: '練馬区が実施する高齢者歯科健診・治療費助成制度です。75歳以上の方を対象に歯科健診を無料で実施し、治療費の一部を最大1万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 高齢者歯科健診・治療費助成制度は、<span class="marker">75歳以上の高齢者を対象に、歯科健診を無料で実施</span>するとともに、健診後の治療費の一部を助成する制度です。</p><p>口腔機能の低下は全身の健康や栄養状態に大きな影響を及ぼします。練馬区では高齢者の口腔ケアを推進し、誤嚥性肺炎の予防やフレイル対策につなげています。定期的な歯科健診と早期治療により、健康寿命の延伸を目指しています。</p><p><span class="marker-green">歯科健診は完全無料。治療が必要な場合は最大1万円の治療費助成</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="健診の内容"><p>虫歯の有無のチェック</p><p>歯周病の検査</p><p>口腔機能（噛む力・飲み込む力）の評価</p><p>入れ歯の適合チェック</p><p>口腔衛生指導</p></div><p>75歳の誕生日を迎える前に、練馬区から受診券が送付されます。区内の指定歯科医療機関で受診できます。</p><p><span class="marker">受診券が届いたら、有効期間内に指定歯科医院に予約してください</span>。受診券がお手元にない場合は練馬区保健所にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>歯科健診は完全無料</strong>です。健診の結果、治療が必要と判断された場合は、<strong>治療費の自己負担分から最大1万円</strong>が助成されます。</p><p><span class="marker">治療費助成の申請は、健診を受けた歯科医院で直接手続き</span>できます。別途区役所への申請は不要です。</p><div class="note-box">この制度は年度内に1回利用できます。義歯（入れ歯）の作成費用も治療費助成の対象に含まれます。口腔ケアに関する出張講座も地域包括支援センター経由で利用できますのでご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-scholarship',
    title: '練馬区 入学準備金貸付制度',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大50万円（大学等入学時）',
    maxAmountNum: 50,
    category: 'education',
    prefecture: '東京都',
    tags: ['練馬区', '入学準備金', '教育支援'],
    eligibility: '練馬区に住所を有する方の子で、高等学校・大学等に入学が決定した方',
    applicationPeriod: '毎年1月〜3月',
    description: '練馬区が実施する入学準備金貸付制度です。大学等の入学時にかかる費用を最大50万円まで無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 入学準備金貸付制度は、<span class="marker">高等学校・大学・短期大学・専門学校等への入学が決定した方</span>に対し、入学金や制服代等の初期費用を無利子で貸与する制度です。</p><p>練馬区は23区で2番目に人口の多い大規模住宅地であり、多くの子育て世帯が暮らしています。入学時には入学金、制服代、教科書代など一時的に大きな出費が発生するため、この制度で家計の負担を緩和します。</p><p>貸付額は高校で最大25万円、大学等で<strong>最大50万円</strong>です。<span class="marker-green">無利子で貸し付け、卒業後に分割返済</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が練馬区に6か月以上居住していること</p><p>高等学校・大学・短大・専門学校等に入学が決定していること</p><p>経済的理由で入学準備に支障があること</p><p>返済の見込みがあること</p></div><p>毎年1月から3月の申請期間中に練馬区教育委員会学務課に申請します。合格通知書の写し、所得証明書、連帯保証人に関する書類が必要です。</p><p><span class="marker">定員に達した場合は抽選となります</span>。早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸付額は<strong>高校最大25万円、大学等最大50万円</strong>です。入学金、制服・体操服代、教科書代等に充当できます。</p><p><span class="marker">卒業後1年の据置期間を経て、5年以内に分割で返済</span>します。無利子のため返済額は貸付額と同額です。</p><div class="highlight-box">練馬区では入学準備金のほかにも、就学援助制度（小中学生の学用品費・給食費等の支給）を実施しています。教育費全般についてのご相談は学務課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-sme-support',
    title: '練馬区 中小企業経営安定化助成金',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['練馬区', '中小企業支援', '経営安定化'],
    eligibility: '練馬区内で1年以上事業を営む中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '練馬区が実施する中小企業経営安定化助成金です。DX推進や販路開拓にかかる経費を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 中小企業経営安定化助成金は、<span class="marker">区内の中小企業がDX推進、販路開拓、業務効率化</span>のために行う投資に対して、費用の一部を助成する制度です。</p><p>練馬区はアニメーション産業の集積地として知られ、約100のアニメスタジオが所在するクリエイティブな産業風土があります。この助成金は、業種を問わず区内中小企業のデジタル化や新規事業展開を支援するものです。</p><p>助成率は対象経費の2分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">ウェブサイト制作、ECサイト構築、業務管理ソフトの導入なども対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>ホームページ・ECサイトの制作費</p><p>業務効率化ソフトウェアの導入費</p><p>展示会・商談会への出展費</p><p>販促物（パンフレット・チラシ等）の制作費</p></div><p>練馬区役所産業経済部経済課に申請書と見積書を提出します。事業計画の簡単な説明も求められます。</p><p><span class="marker">経費支出前の事前申請が必要</span>です。交付決定後に発注・支出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者あたり年度内1回の利用に限ります。</p><p><span class="marker">助成対象となった取り組みの実績報告書の提出が必要</span>で、導入効果の報告も求められます。</p><div class="note-box">申請は先着順で予算に達し次第終了します。練馬ビジネスサポートセンターでは無料の経営相談も受け付けていますので、申請前にアドバイスを受けることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-nursing-home-reform',
    title: '練馬区 介護保険住宅改修費支給事業',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大18万円（保険給付分）',
    maxAmountNum: 18,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['練馬区', '介護保険', '住宅改修'],
    eligibility: '練馬区に住所を有し、要介護・要支援認定を受けた方',
    applicationPeriod: '通年',
    description: '練馬区が実施する介護保険住宅改修費支給事業です。要介護認定を受けた方の住宅改修費を最大18万円（保険給付分）支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 介護保険住宅改修費支給事業は、<span class="marker">要介護または要支援の認定を受けた方が自宅のバリアフリー化工事</span>を行う場合に、改修費用を介護保険から支給する制度です。</p><p>練馬区は面積が広く、一戸建て住宅の比率が23区内で高い地域です。自宅で安全に暮らし続けるために、手すりの設置や段差解消などのバリアフリー改修が重要です。介護保険を活用することで、少ない自己負担で改修が可能になります。</p><p>対象工事費の上限は20万円で、<span class="marker-green">自己負担1割〜3割を差し引いた最大18万円が保険給付</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修内容"><p>手すりの取り付け</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器等への便器の取替え</p></div><p>担当ケアマネジャーに相談し、<strong>改修工事の前に練馬区介護保険課に事前申請</strong>します。理由書、見積書、改修前の写真が必要です。</p><p><span class="marker">事前申請なしに工事を行った場合は保険給付の対象外</span>です。必ず事前手続きを行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の上限は<strong>20万円</strong>で、自己負担は所得に応じて1割〜3割です。保険給付分は最大18万円です。</p><p><span class="marker">要介護度が3段階以上悪化した場合や転居した場合は、再度20万円の枠が利用可能</span>です。</p><div class="note-box">練馬区では介護保険の住宅改修のほかに、区独自の住宅設備改善助成（浴槽の取替えなど上限約40万円）も実施しています。併用することでより広範な改修が可能です。ケアマネジャーにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nerima-energy-support',
    title: '練馬区 省エネルギー機器等導入助成事業',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '東京都',
    tags: ['練馬区', '省エネ', '機器導入'],
    eligibility: '練馬区に住所を有する区民',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '練馬区が実施する省エネルギー機器等導入助成事業です。太陽光発電や蓄電池、EV充電設備の導入費用を最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 省エネルギー機器等導入助成事業は、<span class="marker">区民が自宅に太陽光発電システムや蓄電池、電気自動車用充電設備</span>を導入する場合に、設置費用の一部を助成する制度です。</p><p>練馬区は「みどりの風吹くまちビジョン」のもと、2050年カーボンニュートラルの実現を目指しています。区内の住宅への再生可能エネルギー導入を推進し、区全体のCO2排出量削減を図ります。</p><p><span class="marker-green">太陽光発電と蓄電池の同時導入で助成額が上乗せされます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象機器と助成額"><p>太陽光発電システム：最大10万円</p><p>家庭用蓄電池：最大10万円</p><p>V2H（EV充電・放電設備）：最大5万円</p><p>高効率給湯器（エネファームなど）：最大5万円</p></div><p>練馬区役所環境部環境課に申請書と見積書を提出します。設備の仕様書や設置場所の図面も必要です。</p><p><span class="marker">機器の設置工事前に申請が必要</span>です。交付決定を受けてから設置を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>機器ごとに助成額が定められており、<strong>複数機器を合わせて最大20万円</strong>が上限です。</p><p><span class="marker">国の補助金（例：ZEH補助金）や東京都の補助金との併用が可能</span>で、組み合わせることで自己負担を大幅に削減できます。</p><div class="highlight-box">練馬区は日照条件が比較的良好な地域で、太陽光発電の導入に適しています。設置前に発電シミュレーションを行い、投資回収の見通しを立てることをおすすめします。区の環境課で導入相談も受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 足立区（東京都）9件: childcare×2, housing, medical, education×2, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'adachi-childcare-subsidy',
    title: '足立区 子育て応援給付金',
    organization: '足立区',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['足立区', '子育て支援', '給付金'],
    eligibility: '足立区に住所を有し、18歳以下の子どもを養育している保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '足立区が実施する子育て応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 子育て応援給付金は、<span class="marker">区内に住所を有する子育て世帯</span>に対し、子どもの養育費用を支援する給付金を支給する制度です。</p><p>足立区は北千住駅周辺の再開発により街の魅力が飛躍的に向上し、大学キャンパスの誘致も進むなど、活気あるまちづくりが進んでいます。西新井大師や舎人公園など歴史と自然が共存する環境も、子育て世帯に人気の理由です。</p><p><span class="marker-green">所得制限なし。足立区に住むすべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>足立区に住民登録があり、18歳到達後の最初の3月31日までの子どもを養育する保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>振込先口座情報</p><p>子どもとの関係を確認できる書類</p></div><p>足立区役所子ども政策課の窓口またはオンラインで申請します。<strong>対象者には案内通知が送付</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり最大5万円</strong>です。年度ごとの申請が必要で、期限を過ぎると受給できません。</p><p><span class="marker">審査完了後、約1〜2か月で指定口座に振り込まれます</span>。</p><div class="note-box">足立区では子育て応援給付金と併せて、子どもの貧困対策にも力を入れています。学習支援や子ども食堂など多様な支援メニューがありますので、必要に応じてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-daycare-support',
    title: '足立区 認証保育所保育料助成制度',
    organization: '足立区',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['足立区', '保育料助成', '認証保育所'],
    eligibility: '足立区に住所を有し、東京都認証保育所に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '足立区が実施する認証保育所保育料助成制度です。認証保育所の保育料と認可保育所の保育料との差額を月額最大4万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 認証保育所保育料助成制度は、<span class="marker">東京都認証保育所に子どもを預けている足立区民</span>に対し、認可保育所との保育料の差額分を助成する制度です。</p><p>足立区は保育待機児童の解消に向けて保育施設の整備を進めていますが、認証保育所を選択する世帯も多くいます。認可保育所との保育料格差を是正し、施設の種類にかかわらず子育てしやすい環境を実現するための制度です。</p><p>月額<strong>最大4万円</strong>の助成で、<span class="marker-green">世帯所得に応じて助成額が決まります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>足立区に住民登録があること</p><p>東京都認証保育所と月極契約していること</p><p>認可保育所への入所申込みを行っていること</p><p>保育料を滞納していないこと</p></div><p>足立区役所子ども施設入園課に申請書と保育所の契約書・領収書を提出します。</p><p><span class="marker">四半期ごとの申請方式</span>です。各期の申請期限にご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は認証保育所と認可保育所の保育料の差額で、<strong>月額上限4万円</strong>です。</p><p><span class="marker">認可保育所の保育料は住民税額をもとに算定</span>されるため、所得状況により助成額が変動します。</p><div class="highlight-box">足立区では認証保育所のほかにも、企業主導型保育施設やベビーシッター利用支援事業など、多様な保育サービスへの助成を行っています。詳しくは子ども施設入園課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-newlywed-rent',
    title: '足立区 新婚世帯住居費助成制度',
    organization: '足立区',
    type: 'local',
    maxAmount: '最大36万円（月3万円×12か月）',
    maxAmountNum: 36,
    category: 'housing',
    prefecture: '東京都',
    tags: ['足立区', '新婚世帯', '家賃助成'],
    eligibility: '足立区に住所を有する婚姻届提出後2年以内の新婚世帯',
    applicationPeriod: '毎年4月〜6月（年度ごとに申請）',
    description: '足立区が実施する新婚世帯住居費助成制度です。新婚世帯の家賃を月額最大3万円、最長12か月間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 新婚世帯住居費助成制度は、<span class="marker">婚姻届の提出から2年以内の新婚世帯</span>に対し、区内の民間賃貸住宅の家賃を月額最大3万円助成する制度です。</p><p>足立区は北千住駅を中心とした再開発で利便性が大幅に向上し、若い世帯の転入が増えています。新婚期は新生活の立ち上げに多くの費用がかかるため、住居費の助成により足立区での新生活をスタートしやすくしています。</p><p>月額<strong>最大3万円</strong>を<span class="marker-green">最長12か月間（合計最大36万円）</span>助成します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>足立区内の民間賃貸住宅に居住していること</p><p>婚姻届の提出から2年以内であること</p><p>夫婦の合計所得が基準額以下であること</p><p>夫婦ともに39歳以下であること</p></div><p>足立区役所住宅課に申請書、婚姻届受理証明書、賃貸借契約書、所得証明書を提出します。</p><p><span class="marker">毎年4月から6月の申請期間中に手続きが必要</span>です。応募多数の場合は抽選となることがあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大3万円（年間最大36万円）</strong>が家賃として助成されます。実際の家賃と基準額の差額が助成額となります。</p><p><span class="marker">助成期間中に足立区から転出した場合は、翌月分から助成が停止</span>されます。</p><div class="note-box">公営住宅や社宅に居住している場合は対象外です。足立区では新婚世帯向けのほかにも、子育て世帯向けの家賃助成制度もありますので、ライフステージの変化に応じて活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-mental-health',
    title: '足立区 こころの健康支援事業',
    organization: '足立区',
    type: 'local',
    maxAmount: '相談・デイケア無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['足立区', 'メンタルヘルス', '健康支援'],
    eligibility: '足立区に住所を有する区民で、こころの健康に不安を抱えている方',
    applicationPeriod: '通年',
    description: '足立区が実施するこころの健康支援事業です。精神保健福祉に関する相談、デイケア、訪問支援等を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 こころの健康支援事業は、<span class="marker">うつ、不安、ストレス、ひきこもりなど、こころの健康に関する悩み</span>を抱える区民を包括的に支援する事業です。</p><p>足立区は「こころとからだの健康づくり」を区政の重要課題と位置づけ、精神保健福祉の充実に取り組んでいます。専門職（精神保健福祉士・保健師・臨床心理士）による相談支援やデイケアプログラムを通じて、回復と社会参加をサポートします。</p><p><span class="marker-green">すべての相談・デイケアプログラムが無料で利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援内容"><p>専門職による個別相談（来所・電話・訪問）</p><p>精神科医師による専門相談（予約制）</p><p>デイケアプログラム（生活リズムの回復、社会参加訓練）</p><p>家族向け相談・家族会の運営</p></div><p>足立保健所または各保健センターに電話または来所で相談できます。<strong>事前予約が必要な相談もあります</strong>ので、まずは電話でお問い合わせください。</p><p><span class="marker">ご本人だけでなく、ご家族や関係者からの相談も受け付けています</span>。秘密は厳守されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>すべての相談・デイケアプログラムは無料</strong>です。ただし、医療機関での受診が必要と判断された場合の医療費は自己負担となります。</p><p><span class="marker">自立支援医療（精神通院医療）の制度を利用すると、通院医療費の自己負担が1割に軽減</span>されます。申請手続きの支援も行っています。</p><div class="highlight-box">足立区では「こころの体温計」（Web上のメンタルヘルスチェック）を提供しています。匿名でストレス度をチェックでき、必要に応じて相談窓口につなぐ仕組みです。24時間利用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-scholarship',
    title: '足立区 給付型奨学金制度',
    organization: '足立区',
    type: 'local',
    maxAmount: '月額最大3万円（返済不要）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '東京都',
    tags: ['足立区', '給付型奨学金', '教育支援'],
    eligibility: '足立区に住所を有する方の子で、大学・短大・専門学校に進学する方',
    applicationPeriod: '毎年11月〜翌年1月',
    description: '足立区が実施する給付型奨学金制度です。経済的に困難な状況にある学生に月額最大3万円の奨学金を返済不要で給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 給付型奨学金制度は、<span class="marker">経済的理由で修学が困難な学生に対し、返済不要の奨学金</span>を支給する制度です。</p><p>足立区は「教育によるまちづくり」を重点施策に掲げ、子どもの貧困対策と教育機会の均等化に力を入れています。この給付型奨学金は、経済的な理由で進学を諦めることなく、意欲ある若者が学び続けられるよう支援するものです。</p><p>月額<strong>最大3万円</strong>の奨学金が<span class="marker-green">返済不要で支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が足立区に1年以上居住していること</p><p>大学・短大・専門学校に進学する（または在学中の）方</p><p>世帯の収入が生活保護基準の1.1倍以内であること</p><p>学業成績が一定基準を満たしていること</p></div><p>毎年11月から翌年1月にかけて募集します。足立区教育委員会学務課に申請書、成績証明書、所得証明書を提出します。</p><p><span class="marker">選考は書類審査と面接により行われます</span>。結果は3月頃に通知されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大3万円（年間36万円）</strong>が返済不要で支給されます。支給期間は正規の修業年限（大学4年など）です。</p><p><span class="marker">毎年度、成績報告書の提出と面談が必要</span>です。成績が著しく低下した場合や休学した場合は支給が停止されることがあります。</p><div class="note-box">日本学生支援機構の給付型奨学金との併用は制限がある場合があります。詳しくは学務課にお問い合わせください。足立区では学習支援事業（無料の学習塾）も実施しており、進学前の学力向上も支援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-school-lunch',
    title: '足立区 学校給食費助成制度',
    organization: '足立区',
    type: 'local',
    maxAmount: '給食費全額助成',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['足立区', '給食費', '教育支援'],
    eligibility: '足立区立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '通年（自動適用）',
    description: '足立区が実施する学校給食費助成制度です。区立小中学校の給食費を全額助成し、保護者の負担をゼロにしています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 学校給食費助成制度は、<span class="marker">区立小中学校に在籍するすべての児童生徒</span>の学校給食費を区が全額負担する制度です。</p><p>足立区は「おいしい給食」で全国的に知られる自治体です。栄養バランスに優れた質の高い給食を提供しており、「足立区の給食レシピ本」は大きな話題を呼びました。この助成制度により、費用を気にすることなくすべての子どもが等しく給食を楽しめます。</p><p><span class="marker-green">所得制限なし。区立小中学校に在籍する全児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>足立区立小学校・中学校に在籍する児童生徒の保護者が対象です。</p><div class="summary-box" data-title="制度の特徴"><p>申請手続き不要（自動適用）</p><p>所得制限なし</p><p>小学校・中学校ともに対象</p><p>特別支援学級の児童生徒も対象</p></div><p><strong>個別の申請手続きは不要</strong>で、区立学校に在籍していれば自動的に給食費が全額助成されます。</p><p><span class="marker">年度途中の転入にも対応しており、区立学校への編入手続きが完了次第自動適用</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>学校給食費が全額助成</strong>されます。小学校で月額約4,500円、中学校で月額約5,500円程度の保護者負担がゼロになります。</p><p><span class="marker">私立学校や国立学校に通学している場合は対象外</span>です。</p><div class="highlight-box">足立区の学校給食は「日本一おいしい給食」を目指し、各校に配置された栄養士が独自のメニューを開発しています。食育の観点からも高く評価されており、子どもの食への関心を高める取り組みが行われています。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-sme-support',
    title: '足立区 ものづくり企業支援助成金',
    organization: '足立区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '東京都',
    tags: ['足立区', 'ものづくり', '企業支援'],
    eligibility: '足立区内で製造業を営む中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '足立区が実施するものづくり企業支援助成金です。区内製造業者の設備投資や新製品開発に最大100万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 ものづくり企業支援助成金は、<span class="marker">区内で製造業を営む中小企業者の設備投資や新製品開発、販路開拓</span>にかかる費用を助成する制度です。</p><p>足立区は都内有数のものづくりの街であり、皮革製品、金属加工、食品製造など多様な製造業が集積しています。近年は高度な技術力を持つ中小企業が新たな分野に挑戦するケースも増えており、この助成金はそうした取り組みを後押しします。</p><p>助成率は対象経費の2分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">新製品開発、設備導入、展示会出展など多様な経費が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>製造設備・検査機器の導入費</p><p>新製品の試作費・金型製作費</p><p>展示会・見本市の出展費</p><p>知的財産権（特許・商標）の出願費</p></div><p>足立区役所産業経済部産業振興課に事業計画書と申請書を提出します。審査会でプレゼンテーションを行う場合もあります。</p><p><span class="marker">経費の支出前に必ず事前申請が必要</span>です。交付決定を受けてから事業を実施してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。審査では技術の新規性、事業の実現可能性、地域経済への波及効果が評価されます。</p><p><span class="marker">事業完了後は実績報告書の提出と成果発表が求められる</span>場合があります。</p><div class="note-box">足立区産業振興センター「あだちメッセ」では、ビジネスマッチングや技術交流のイベントも定期的に開催されています。人件費や運転資金は助成対象外ですのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-nursing-equipment',
    title: '足立区 介護用品給付事業',
    organization: '足立区',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['足立区', '介護用品', '給付事業'],
    eligibility: '足立区に住所を有し、要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '足立区が実施する介護用品給付事業です。在宅介護を行う家族に対し、紙おむつ等の介護用品を年間最大6万円相当まで給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 介護用品給付事業は、<span class="marker">要介護3以上の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を給付する制度です。</p><p>足立区は23区の中でも高齢者人口が多い地域で、在宅介護を支える社会資源の充実が求められています。毎日使用する介護用品の費用は積み重なると大きな負担となるため、この給付事業で介護者の経済的負担を軽減します。</p><p><span class="marker-green">月額最大5,000円相当の介護用品をカタログから選んで受け取ることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>足立区に住民登録がある要介護3以上の65歳以上の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品給付申請書</p><p>要介護者の介護保険被保険者証の写し</p><p>介護者の本人確認書類</p></div><p>足立区役所高齢者施策推進室介護保険課に申請します。認定後、<strong>毎月カタログから介護用品を選んで</strong>自宅に届けてもらうことができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大5,000円相当（年間最大6万円相当）</strong>の介護用品が給付されます。紙おむつ、尿取りパッド、清拭シート、使い捨て手袋などが対象です。</p><p><span class="marker">入院中・施設入所中は対象外</span>で、在宅介護をしている期間のみ給付を受けられます。</p><div class="note-box">足立区では介護用品給付のほかにも、介護者リフレッシュ事業（介護者の心身の疲労を癒すためのサービス）も実施しています。介護に関するお悩みは地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'adachi-elderly-support',
    title: '足立区 高齢者見守り支援事業',
    organization: '足立区',
    type: 'local',
    maxAmount: '無料（見守りサービス）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['足立区', '高齢者見守り', '生活支援'],
    eligibility: '足立区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '足立区が実施する高齢者見守り支援事業です。ひとり暮らしの高齢者等を対象に、定期的な安否確認と生活支援サービスを無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、定期的な安否確認と生活支援を行う事業です。</p><p>足立区は23区内でも高齢化率が高く、ひとり暮らしの高齢者が増加しています。孤立死の防止と安心した在宅生活の継続を目的として、多層的な見守りネットワークを構築しています。</p><p><span class="marker-green">配食サービス、電話訪問、緊急通報装置の設置など、複数のサービスが無料で利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>配食サービス（安否確認兼務）</p><p>電話による定期的な安否確認</p><p>緊急通報装置の無料貸与</p><p>民生委員による訪問見守り</p><p>見守りセンサーの設置</p></div><p>足立区の地域包括支援センターまたは区役所高齢者施策推進室に相談・申請します。</p><p><span class="marker">ご本人だけでなく、離れて暮らすご家族からの申請・相談も可能</span>です。まずは最寄りの地域包括支援センターにお電話ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>見守りサービスは基本的に無料</strong>です。配食サービスは1食あたり数百円の自己負担で利用できます。</p><p><span class="marker">足立区では町会・自治会、商店街、郵便局、新聞配達など民間事業者とも連携した見守りネットワーク</span>を構築しています。</p><div class="highlight-box">足立区の「あんしんネットワーク」では、地域の見守り協力員も募集しています。異変に気づいた場合の連絡先など、地域ぐるみで高齢者を見守る体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 葛飾区（東京都）9件: childcare×2, housing×2, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'katsushika-childcare-subsidy',
    title: '葛飾区 子育て支援給付金',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['葛飾区', '子育て支援', '給付金'],
    eligibility: '葛飾区に住所を有し、18歳以下の子どもを養育している保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '葛飾区が実施する子育て支援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 子育て支援給付金は、<span class="marker">区内に住所を有する子育て世帯</span>に対し、子どもの養育費用を支援する給付金を支給する制度です。</p><p>葛飾区は映画「男はつらいよ」の舞台・柴又帝釈天や、漫画「こちら葛飾区亀有公園前派出所」で全国的に知られる下町情緒あふれる街です。水元公園をはじめとする自然環境と、地域のつながりが強い温かいコミュニティが子育て世帯に支持されています。</p><p><span class="marker-green">所得制限なし。葛飾区に住む対象世帯すべてが申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>葛飾区に住民登録があり、18歳到達後の最初の3月31日までの子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>振込先口座情報</p><p>子どもとの関係を確認できる書類</p></div><p>葛飾区役所子育て支援課の窓口またはオンラインで申請します。<strong>対象者には案内通知が送付</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり最大5万円</strong>です。年度ごとの申請が必要です。</p><p><span class="marker">審査完了後、約1〜2か月で指定口座に振り込まれます</span>。</p><div class="note-box">年度途中に葛飾区へ転入した場合は、転入日以降に申請可能です。葛飾区では子育て情報サイト「かつしか子育てねっと」で各種支援制度の情報をまとめて提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-birth-bonus',
    title: '葛飾区 出産祝い金',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['葛飾区', '出産祝い金', '子育て支援'],
    eligibility: '葛飾区に住所を有し、出産した方',
    applicationPeriod: '通年（出生後6か月以内に申請）',
    description: '葛飾区が実施する出産祝い金です。出産した方に対し、第1子5万円、第2子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 出産祝い金は、<span class="marker">葛飾区で出産した方に対し、お祝い金として現金を支給</span>する制度です。</p><p>葛飾区は出生率の向上と子育て世帯の定住促進を目指し、出産時の経済的支援を独自に実施しています。柴又や亀有などの下町コミュニティが残る葛飾区は、近隣との助け合いの文化が根付いており、子育てしやすい環境として注目されています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限はなく、出産したすべての方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日に葛飾区に住民登録があること</p><p>出生後6か月以内に申請すること</p><p>出生届が受理されていること</p></div><p>葛飾区役所子育て支援課に申請書を提出します。母子健康手帳、申請者の本人確認書類、振込先口座情報が必要です。</p><p><span class="marker">出生届の提出時に窓口で案内されます</span>。同時に手続きすると効率的です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子：5万円、第2子以降：10万円</strong>が支給されます。多胎出産（双子等）の場合は、それぞれの子について支給されます。</p><p><span class="marker">出生後6か月を過ぎると申請できません</span>。出生届とあわせて早めに手続きしましょう。</p><div class="highlight-box">葛飾区では出産祝い金のほかにも、出産・子育て応援事業（伴走型相談支援＋経済的支援）やハッピーマザー出産助成金（入院時の自己負担軽減）なども実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-housing-purchase',
    title: '葛飾区 三世代住宅取得助成制度',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['葛飾区', '三世代住宅', '助成金'],
    eligibility: '葛飾区内に三世代が近居・同居するための住宅を取得する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '葛飾区が実施する三世代住宅取得助成制度です。親・子・孫の三世代が近居または同居するための住宅取得に最大100万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 三世代住宅取得助成制度は、<span class="marker">親・子・孫の三世代が近居または同居するために住宅を取得</span>する場合に、費用の一部を助成する制度です。</p><p>葛飾区は下町の人情味あふれる地域柄から、もともと三世代同居や近居が多い土地柄です。この制度はそうした家族の絆を現代においても支援し、子育てと介護の相互扶助を促進することを目的としています。</p><p>助成額は<strong>最大100万円</strong>で、<span class="marker-green">同居の場合は近居よりも手厚い助成</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成額"><p>三世代同居のための住宅取得：最大100万円</p><p>三世代近居のための住宅取得：最大50万円</p><p>近居の定義：直線距離1.2km以内</p></div><p>葛飾区役所都市整備部住環境整備課に申請書、売買契約書、三世代の関係を示す戸籍謄本を提出します。</p><p><span class="marker">住宅取得後1年以内に申請が必要</span>です。新築・中古・マンション・一戸建ていずれも対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>同居の場合<strong>最大100万円</strong>、近居の場合<strong>最大50万円</strong>が助成されます。登記費用、仲介手数料等が対象経費です。</p><p><span class="marker">5年以上継続して居住する意思があること</span>が条件です。5年以内に転出した場合は返還を求められます。</p><div class="note-box">親族間売買は対象外です。葛飾区では三世代住宅助成のほかにも、高齢者住み替え支援や空き家相談なども行っています。住環境整備課にお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-barrier-free',
    title: '葛飾区 バリアフリー化改修助成制度',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['葛飾区', 'バリアフリー', '住宅改修'],
    eligibility: '葛飾区に住所を有する65歳以上の高齢者または障害のある方がいる世帯',
    applicationPeriod: '通年',
    description: '葛飾区が実施するバリアフリー化改修助成制度です。高齢者や障害のある方の住宅のバリアフリー改修に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 バリアフリー化改修助成制度は、<span class="marker">高齢者や障害のある方が自宅で安全に暮らせるよう、バリアフリー改修工事</span>を行う際に費用の一部を助成する制度です。</p><p>葛飾区は古くからの住宅が多い地域で、段差や狭い廊下など高齢者にとって危険な箇所が残る住宅も少なくありません。手すりの設置や段差解消などの改修により、転倒事故の防止と自立した生活の継続を支援します。</p><p>助成額は<strong>最大20万円</strong>で、<span class="marker-green">介護保険の住宅改修費とは別に利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置等）</p><p>床材の変更（滑りにくい素材へ）</p><p>浴室の改修（またぎの低い浴槽への交換等）</p><p>トイレの改修（洋式便器への交換等）</p></div><p>葛飾区役所高齢者支援課または障害福祉課に申請します。見積書、施工箇所の写真が必要です。</p><p><span class="marker">工事着手前の事前申請が必須</span>です。ケアマネジャーや地域包括支援センターにまずご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限20万円</strong>です。所得に応じて自己負担割合が異なります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と併用できるため、最大で40万円の費用助成</span>を受けることが可能です。</p><div class="highlight-box">葛飾区では住宅のバリアフリー改修の相談を地域包括支援センター（高齢者総合相談センター）で受け付けています。改修内容のアドバイスや施工業者の紹介も行っていますので、お気軽にご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-afterschool',
    title: '葛飾区 放課後子ども教室事業',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['葛飾区', '放課後教室', '教育支援'],
    eligibility: '葛飾区立小学校に通う児童',
    applicationPeriod: '通年（年度初めに登録）',
    description: '葛飾区が実施する放課後子ども教室事業です。区立小学校で放課後の安全な居場所と多彩な体験活動を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 放課後子ども教室事業は、<span class="marker">区立小学校の施設を活用して、放課後に児童の安全な居場所</span>を確保し、学習や体験活動の機会を提供する事業です。</p><p>葛飾区は下町文化が色濃く残る地域で、地域住民による子どもの見守り意識が高いのが特徴です。放課後子ども教室では、地域のボランティアスタッフが中心となって、子どもたちの多様な体験活動をサポートしています。</p><p><span class="marker-green">参加費は無料で、区立小学校に在籍するすべての児童が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な活動内容"><p>宿題タイム・自主学習サポート</p><p>スポーツ活動（校庭遊び・ミニスポーツ）</p><p>工作・折り紙・科学実験などの体験教室</p><p>読み聞かせ・読書活動</p></div><p>年度初めに各学校で配布される登録用紙に記入し提出します。</p><p><span class="marker">年度途中からの登録・参加も可能</span>です。各学校の放課後子ども教室担当者にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>参加費は無料</strong>です。一部体験教室で材料費がかかることがありますが、基本的なプログラムはすべて無料です。</p><p><span class="marker">放課後子ども教室と学童保育（わくわくチャレンジ広場）は併用可能</span>です。</p><div class="note-box">葛飾区の放課後子ども教室は全区立小学校で実施されています。開室時間や活動内容は学校により異なりますので、各校にご確認ください。保護者のボランティア参加も歓迎しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-telework-bonus',
    title: '葛飾区 テレワーク推進助成金',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['葛飾区', 'テレワーク', '助成金'],
    eligibility: '葛飾区内に事業所を有する中小企業で、テレワーク制度を新たに導入する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '葛飾区が実施するテレワーク推進助成金です。中小企業のテレワーク環境整備にかかる経費を最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 テレワーク推進助成金は、<span class="marker">区内の中小企業がテレワーク制度を新規導入・拡充</span>するために必要な環境整備費用を助成する制度です。</p><p>葛飾区は中小の製造業や商店が多い地域ですが、多様な働き方への対応は人材確保にも直結する重要な課題です。テレワーク環境の整備により、従業員の柔軟な働き方を可能にし、企業の競争力強化を支援します。</p><p>助成率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">ICT機器の購入やクラウドサービスの導入費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>テレワーク用ノートPC・タブレット</p><p>Web会議用カメラ・マイク・スピーカー</p><p>VPN・リモートアクセスツールの導入費</p><p>クラウドストレージ・グループウェアの年間利用料</p></div><p>葛飾区役所産業経済課に申請書と見積書を提出します。テレワーク規程の整備状況も確認されます。</p><p><span class="marker">機器購入やサービス契約の前に事前申請が必要</span>です。交付決定後に導入してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者あたり年度内1回の利用に限ります。</p><p><span class="marker">テレワーク導入後は実績報告書の提出が必要</span>で、実際にテレワークを実施したことの証明が求められます。</p><div class="highlight-box">葛飾区では中小企業向けのIT活用セミナーも開催しています。テレワーク導入だけでなく、業務のデジタル化全般について無料で相談できます。産業経済課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-nursing-home-reform',
    title: '葛飾区 介護住宅改修助成事業',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '最大18万円（保険給付分）',
    maxAmountNum: 18,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['葛飾区', '介護保険', '住宅改修'],
    eligibility: '葛飾区に住所を有し、要介護・要支援認定を受けた方',
    applicationPeriod: '通年',
    description: '葛飾区が実施する介護住宅改修助成事業です。要介護認定を受けた方のバリアフリー改修費を最大18万円（保険給付分）支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 介護住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方が自宅で安全に生活するための住宅改修</span>費用を、介護保険から支給する制度です。</p><p>葛飾区は水元公園や中川沿いなど水辺の環境に恵まれた住宅地ですが、古い住宅も多く、バリアフリー化の需要が高い地域です。介護保険を活用して手すりの設置や段差解消を行い、住み慣れた自宅での安全な生活を支援します。</p><p>対象工事費の上限は20万円で、<span class="marker-green">自己負担1割〜3割を除いた最大18万円が保険給付</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの取り付け</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器等への便器の取替え</p></div><p>担当ケアマネジャーに相談し、<strong>改修前に葛飾区介護保険課に事前申請</strong>します。理由書、見積書、写真が必要です。</p><p><span class="marker">事前申請なしの工事は保険給付の対象外</span>です。必ず事前に手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の上限は<strong>20万円</strong>で、自己負担は所得に応じて1割〜3割です。保険給付分は最大18万円です。</p><p><span class="marker">要介護度が3段階以上重くなった場合や転居した場合は、再度20万円の枠が使えます</span>。</p><div class="note-box">葛飾区では介護保険の住宅改修に加え、区独自の住宅設備改善助成（浴槽交換、流し台の改修等）も実施しています。詳しくはケアマネジャーまたは地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-migration-bonus',
    title: '葛飾区 ファミリー世帯定住促進支援金',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '東京都',
    tags: ['葛飾区', '定住促進', '支援金'],
    eligibility: '区外から葛飾区に転入し定住するファミリー世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '葛飾区が実施するファミリー世帯定住促進支援金です。区外から転入するファミリー世帯に引越し費用等を最大30万円支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 ファミリー世帯定住促進支援金は、<span class="marker">区外から葛飾区に転入し、長期的に定住するファミリー世帯</span>に対して引越し費用等を支援する制度です。</p><p>葛飾区は柴又や亀有の下町文化、水元公園の豊かな自然など、暮らしやすい環境が整った地域です。近年は京成線やJR常磐線沿線の利便性も向上しており、ファミリー世帯の転入を促進するためにこの支援金を創設しました。</p><p>支援額は<strong>最大30万円</strong>で、<span class="marker-green">引越し費用、礼金、仲介手数料等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>葛飾区外から転入すること</p><p>世帯に18歳未満の子どもがいること</p><p>葛飾区内の住宅に居住すること（賃貸・持ち家問わず）</p><p>5年以上定住する意思があること</p></div><p>葛飾区役所住環境整備課に申請書、転入前後の住民票、住宅の契約書等を提出します。</p><p><span class="marker">転入後6か月以内の申請が必要</span>です。期限を過ぎると支援を受けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>引越し費用等を合算した額の一部が支援され、<strong>上限30万円</strong>です。</p><p><span class="marker">5年以内に葛飾区から転出した場合は、支援金の返還を求められる</span>ことがあります。</p><div class="highlight-box">葛飾区では子育てファミリー向けの住宅施策として、この定住促進支援金のほかにも、区営住宅の優先入居や三世代住宅取得助成なども実施しています。住まいに関する総合相談は住環境整備課へどうぞ。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'katsushika-bousai-equipment',
    title: '葛飾区 防災用品購入助成事業',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '購入費用の最大50%（上限5万円）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['葛飾区', '防災', '防災用品'],
    eligibility: '葛飾区に住所を有する区民',
    applicationPeriod: '通年',
    description: '葛飾区が実施する防災用品購入助成事業です。感震ブレーカーや家具転倒防止器具などの防災用品購入費を最大50%助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 防災用品購入助成事業は、<span class="marker">区民が自宅の防災対策のために購入する感震ブレーカーや家具転倒防止器具</span>などの費用を助成する制度です。</p><p>葛飾区は荒川・中川・江戸川に囲まれた低地に位置し、水害リスクへの備えが欠かせない地域です。また、首都直下地震に備えた耐震・防火対策も重要です。この助成事業は、各家庭の防災力向上を経済的に支援するものです。</p><p><span class="marker-green">感震ブレーカーの設置には最大50%の助成が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象防災用品"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家具転倒防止器具</p><p>ガラス飛散防止フィルム</p><p>簡易トイレ・非常用トイレ</p></div><p>葛飾区役所地域防災課に申請書と購入予定品の見積書を提出します。品目により事前申請が必要なものと事後申請のものがあります。</p><p><span class="marker">感震ブレーカーは設置前に事前申請が必要</span>です。家具転倒防止器具は購入後の事後申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成率は購入費用の<strong>最大50%（上限5万円）</strong>です。品目により助成率や上限額が異なります。</p><p><span class="marker">高齢者世帯や障害者世帯には家具転倒防止器具の取付作業を無料で行うサービス</span>もあります。</p><div class="note-box">葛飾区はハザードマップで広域の浸水想定区域に含まれる地域があります。水害対策として、止水板の設置助成も別途実施していますので、地域防災課にお問い合わせください。防災訓練やマイ・タイムライン作成講座への参加もおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
