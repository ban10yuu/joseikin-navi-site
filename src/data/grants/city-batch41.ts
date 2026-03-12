import { Grant } from '@/lib/types';

export const cityGrantsBatch41: Grant[] = [
  // ────────────────────────────────────────────────
  // 大田区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'ota-childcare-subsidy',
    title: '大田区 子育て応援給付金',
    organization: '大田区',
    type: 'local',
    maxAmount: '子ども1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['大田区', '子育て支援', '給付金'],
    eligibility: '大田区に住所を有する0歳から2歳の子どもの保護者',
    applicationPeriod: '通年',
    description: '大田区が実施する子育て応援給付金です。0歳から2歳の子どもを養育する世帯に対し、子ども1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 子育て応援給付金は、<span class="marker">0歳から2歳の子どもを養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>大田区は東京23区の最南端に位置し、羽田空港を擁する国際的な玄関口として知られています。ものづくりの街としても有名で、約3,500の町工場が集積する工業地域と、田園調布や山王といった高級住宅街が共存する多面的な区です。</p><p><span class="marker-green">所得制限なしで、大田区に住むすべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大田区に住民登録がある0歳から2歳の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者（保護者）の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p></div><p>大田区役所子育て支援課の窓口または郵送で申請できます。出生届の提出後、区から案内が届きます。<strong>案内到着後3か月以内</strong>の申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。双子以上の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>ので、案内が届いたら早めに手続きしてください。</p><div class="note-box">生活保護を受給中の方も申請可能です。ただし、他の自治体で同種の給付金を受給済みの場合は対象外となることがあります。転入の場合は、転入届提出後に改めて申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-birth-bonus',
    title: '大田区 出産・子育て応援交付金',
    organization: '大田区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['大田区', '出産支援', '交付金'],
    eligibility: '大田区に住所を有する妊婦および出生した子どもの養育者',
    applicationPeriod: '通年',
    description: '大田区が実施する出産・子育て応援交付金です。妊娠届出時に5万円、出生届出後に5万円、合計最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 出産・子育て応援交付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の経済的支援を行う制度です。</p><p>国の「出産・子育て応援交付金」事業をベースに、大田区が実施しています。妊娠期から子育て期まで切れ目のない支援を目指し、面談等を通じた伴走型相談支援と一体的に運営されています。</p><p><span class="marker-green">すべての妊婦・出産した方が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="交付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に面談（赤ちゃん訪問等）→ 子育て応援給付金5万円</p></div><p>妊娠届出時の面談は大田区の各地域健康課で行います。出生後の面談は赤ちゃん訪問事業と連携して実施されます。</p><p><span class="marker">各面談後にオンラインまたは郵送で申請</span>できます。申請から約1か月で指定口座に振り込まれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>です。多胎の場合、子育て応援給付金は子どもの人数分が支給されます。</p><p><span class="marker">他の自治体で同種の給付金を受給済みの場合は、差額のみの支給</span>となる場合があります。</p><div class="highlight-box">大田区では、この交付金と併せて産前産後ケア事業（宿泊型・デイケア型）も充実させています。妊娠届出時の面談で詳しい案内を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-housing-purchase',
    title: '大田区 住宅取得支援制度',
    organization: '大田区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['大田区', '住宅取得', '助成金'],
    eligibility: '大田区内で新たに住宅を取得する子育て世帯・若年夫婦世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '大田区が実施する住宅取得支援制度です。子育て世帯や若年夫婦世帯が区内で住宅を購入する際に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 住宅取得支援制度は、<span class="marker">子育て世帯や若年夫婦世帯が区内で住宅を取得する際</span>に費用の一部を助成する制度です。</p><p>大田区は羽田空港の国際化に伴い、交通利便性が飛躍的に向上しています。京浜東北線・東急線・京急線など複数の鉄道路線が通り、都心や横浜へのアクセスも良好です。こうした利便性を背景に、子育て世帯の定住を促進するため住宅取得支援を行っています。</p><p><span class="marker-green">新築・中古を問わず、区内の住宅購入が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>大田区内に住宅を取得し、自ら居住すること</p><p>18歳未満の子どもがいる世帯、または夫婦いずれも40歳未満の世帯</p><p>住民税の滞納がないこと</p><p>5年以上継続して居住する意思があること</p></div><p>大田区役所住宅課に申請書と必要書類を提出します。登記簿謄本、売買契約書の写し、住民票などが必要です。</p><p><span class="marker">住宅の引渡しから6か月以内に申請</span>する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>基本額30万円</strong>で、<span class="marker">区内に親世帯が居住している場合は20万円が加算され、最大50万円</span>となります。</p><p>住宅ローンを利用していることが条件の一つとなります。</p><div class="note-box">投資用や賃貸用の住宅は対象外です。5年以内に転出した場合は助成金の返還を求められることがあります。すまい給付金など国の制度との併用が可能ですので、併せてご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-newlywed-rent',
    title: '大田区 新婚世帯家賃助成制度',
    organization: '大田区',
    type: 'local',
    maxAmount: '月額最大3万円（最長2年間）',
    maxAmountNum: 72,
    category: 'housing',
    prefecture: '東京都',
    tags: ['大田区', '新婚家賃', '助成金'],
    eligibility: '大田区内に居住する婚姻届出後1年以内の夫婦世帯',
    applicationPeriod: '通年（婚姻届出から1年以内）',
    description: '大田区が実施する新婚世帯家賃助成制度です。新婚世帯の家賃負担を軽減するため、月額最大3万円を最長2年間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 新婚世帯家賃助成制度は、<span class="marker">婚姻届出後1年以内の新婚世帯</span>に対し、区内の民間賃貸住宅の家賃の一部を助成する制度です。</p><p>大田区は東京23区で最大の面積を持ち、蒲田や大森といった商業エリアから田園調布の住宅地まで、多様な居住環境を提供しています。新婚世帯が安心して区内で新生活をスタートできるよう、家賃負担の軽減を図っています。</p><p>助成額は<strong>月額最大3万円で、最長2年間</strong>です。<span class="marker-green">夫婦いずれも39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大田区内の民間賃貸住宅に居住していること</p><p>婚姻届出から1年以内であること</p><p>夫婦いずれも39歳以下であること</p><p>世帯の合計所得が基準額以下であること</p></div><p>大田区役所住宅課に申請書、婚姻届受理証明書、賃貸借契約書の写し等を提出します。</p><p><span class="marker">婚姻届出日から1年以内に申請</span>する必要があります。申請が遅れても遡及支給はされませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額の家賃と3万円のいずれか低い額</strong>です。最長24か月間の助成が受けられます。</p><p><span class="marker">社宅・公営住宅・親族所有物件は対象外</span>です。家賃に管理費・共益費は含まれません。</p><div class="highlight-box">大田区では新婚世帯向けの区営住宅の優先入居制度もあります。家賃助成と併せて検討することで、住居費の大幅な軽減が可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-disability-medical',
    title: '大田区 心身障害者医療費助成制度',
    organization: '大田区',
    type: 'local',
    maxAmount: '医療費自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['大田区', '障害者医療', '助成金'],
    eligibility: '大田区に住所を有する身体障害者手帳1・2級または愛の手帳1・2度をお持ちの方',
    applicationPeriod: '通年',
    description: '大田区が実施する心身障害者医療費助成制度です。重度の心身障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 心身障害者医療費助成制度（マル障）は、<span class="marker">重度の身体障害または知的障害のある方</span>の医療費自己負担分を助成する東京都と区の共同事業です。</p><p>大田区はバリアフリーのまちづくりを推進しており、蒲田駅周辺をはじめとする主要エリアのアクセシビリティ向上に取り組んでいます。この制度を通じて、障害のある方が安心して医療を受けられる環境を整備しています。</p><p><span class="marker-green">国民健康保険や社会保険の自己負担分が助成の対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級・2級をお持ちの方</p><p>愛の手帳（療育手帳）1度・2度をお持ちの方</p><p>精神障害者保健福祉手帳1級をお持ちの方</p></div><p>大田区役所障害福祉課の窓口で申請できます。障害者手帳と健康保険証をお持ちください。</p><p><span class="marker">65歳以上で新規に手帳を取得した方には所得制限があります</span>。65歳未満で取得済みの方は所得制限なしで継続利用可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>原則全額助成</strong>されます。住民税課税者は1割の自己負担がありますが、住民税非課税の方は自己負担なしです。</p><p><span class="marker">都内の医療機関では「マル障医療証」を提示するだけで窓口負担が軽減</span>されます。都外での受診は償還払いとなります。</p><div class="note-box">入院時の食事代や保険適用外の費用（差額ベッド代等）は助成対象外です。生活保護を受給中の方や後期高齢者医療制度に加入しかつ住民税非課税の方は別制度の対象となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-scholarship',
    title: '大田区 奨学金制度',
    organization: '大田区',
    type: 'local',
    maxAmount: '月額最大2万5千円',
    maxAmountNum: 30,
    category: 'education',
    prefecture: '東京都',
    tags: ['大田区', '奨学金', '教育支援'],
    eligibility: '大田区内に住所を有する高校生・大学生等の保護者で、経済的に支援が必要な方',
    applicationPeriod: '毎年4月〜5月頃',
    description: '大田区が実施する奨学金制度です。経済的な理由で修学が困難な生徒・学生に対し、返済不要の給付型奨学金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 奨学金制度は、<span class="marker">経済的な理由で高校・大学等への修学が困難な生徒・学生</span>に対し、学資金を給付する制度です。</p><p>大田区は産業都市としての側面と住宅都市としての側面を持ち、区内には多様な所得層の世帯が暮らしています。教育の機会均等を実現するため、返済不要の給付型奨学金制度を運営し、意欲ある学生の学びを支援しています。</p><p><span class="marker-green">返済不要の給付型で、高校生から大学院生まで幅広い学生が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大田区内に1年以上住所を有すること</p><p>高校・高専・大学・短大・大学院に在学していること</p><p>成績が一定基準以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて大田区教育委員会で申請を受け付けます。在学証明書、成績証明書、所得証明書等の提出が必要です。</p><p><span class="marker">募集人数に限りがあるため、選考により決定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生：月額8,000円、大学生等：月額25,000円</strong>が目安です。年2回に分けて支給されます。</p><p><span class="marker">日本学生支援機構などの他の奨学金との併用は制限される場合があります</span>。申請前にご確認ください。</p><div class="note-box">奨学金は返済不要の給付型です。ただし、退学・休学した場合は支給が停止されます。成績要件を満たさなくなった場合も同様です。毎年度の継続申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-sme-support',
    title: '大田区 中小企業経営改善助成金',
    organization: '大田区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['大田区', '中小企業支援', '助成金'],
    eligibility: '大田区内に事業所を有する中小企業者',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大田区が実施する中小企業経営改善助成金です。区内の中小企業がDX推進や生産性向上に取り組む際に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 中小企業経営改善助成金は、<span class="marker">区内の中小企業がDX推進や生産性向上に取り組む</span>際の経費を助成する制度です。</p><p>大田区は「ものづくりのまち」として全国に知られ、約3,500の中小製造業が集積しています。高い技術力を持つ町工場が多い一方、デジタル化や設備更新への投資が課題となっています。この助成金は、区内産業の競争力強化を目的としています。</p><p>補助率は対象経費の2分の1で、<strong>上限は50万円</strong>です。<span class="marker-green">IT導入、設備購入、展示会出展など幅広い用途に使えます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>大田区内に主たる事業所を有する中小企業者であること</p><p>区内で1年以上事業を営んでいること</p><p>区税の滞納がないこと</p><p>経営改善計画を策定すること</p></div><p>大田区産業振興協会の窓口で事前相談を行い、大田区役所産業経済部に申請書と経営改善計画を提出します。</p><p><span class="marker">事前に大田区産業振興協会でアドバイザーの経営相談を受けることが推奨</span>されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。IT機器の導入費、ソフトウェア購入費、展示会出展費、広告宣伝費などが対象です。</p><p><span class="marker">交付決定前に契約・支払いした経費は対象外</span>です。必ず交付決定後に事業を開始してください。</p><div class="highlight-box">大田区では、この助成金のほかにも受発注のマッチング支援や技術交流会なども実施しています。大田区産業振興協会が総合的な経営支援の窓口となっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-nursing-equipment',
    title: '大田区 介護用品支給事業',
    organization: '大田区',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['大田区', '介護用品', '支給'],
    eligibility: '大田区に住所を有する要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '大田区が実施する介護用品支給事業です。在宅で重度の要介護者を介護する家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>大田区は高齢化が進む中、在宅介護を支える体制の充実に取り組んでいます。この制度は、介護者の経済的負担を軽減し、在宅での介護継続を支援するものです。介護用品の種類は紙おむつ・尿取りパッド・使い捨て手袋などから選択できます。</p><p><span class="marker-green">住民税非課税世帯の方は自己負担なしで利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>大田区に住所を有する方が在宅で介護していること</p><p>介護を受ける方が要介護4または5の認定を受けていること</p><p>介護を受ける方が在宅で生活していること（入院・入所中は対象外）</p></div><p>大田区役所高齢福祉課またはお住まいの地域の地域包括支援センターで申請できます。介護保険被保険者証をお持ちください。</p><p><span class="marker">申請月の翌月から支給が開始</span>されます。毎月定期的に介護用品が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当の介護用品</strong>を支給します。カタログから必要な商品を選択できます。</p><p><span class="marker">住民税課税世帯の場合は一部自己負担</span>が発生します。非課税世帯は全額支給です。</p><div class="note-box">入院中や施設入所中は支給が停止されます。要介護度が3以下に変更された場合も対象外となります。介護度の変更があった場合は速やかに届け出てください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ota-elderly-support',
    title: '大田区 高齢者見守り・生活支援事業',
    organization: '大田区',
    type: 'local',
    maxAmount: '各種サービス無料〜一部負担',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['大田区', '高齢者支援', '見守り'],
    eligibility: '大田区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '大田区が実施する高齢者見守り・生活支援事業です。ひとり暮らしの高齢者等に対し、配食サービスや緊急通報システムなどを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 高齢者見守り・生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、安心して在宅生活を続けるための各種サービスを提供する事業です。</p><p>大田区は約72万人の人口を擁し、高齢化率は年々上昇しています。特にひとり暮らし高齢者の孤立防止が重要な課題となっており、地域のつながりを活かした見守り体制の構築に力を入れています。</p><p><span class="marker-green">配食サービス、緊急通報システム、電話訪問など多様なメニューを用意</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>配食サービス（安否確認を兼ねた食事の宅配）</p><p>緊急通報システム（ボタン一つで通報できる機器の貸与）</p><p>電話訪問（定期的な安否確認の電話）</p><p>高齢者見守りキーホルダー（緊急時の身元確認用）</p></div><p>大田区役所高齢福祉課または地域の地域包括支援センターで相談・申請できます。</p><p><span class="marker">サービスにより対象要件が異なります</span>ので、まずはお近くの地域包括支援センターにご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり400円程度の自己負担</strong>で利用できます。緊急通報システムは住民税非課税世帯は無料、課税世帯は月額300円程度です。</p><p><span class="marker">サービスの利用にあたっては、民生委員や地域包括支援センターによる状況確認</span>が行われます。</p><div class="note-box">介護保険サービスと併用して利用できます。要介護認定を受けている方は、ケアマネジャーと相談のうえ、必要なサービスを組み合わせてご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 世田谷区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'setagaya-childcare-subsidy',
    title: '世田谷区 子育て利用券（せたがや子育て応援券）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '2万円分の利用券',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['世田谷区', '子育て支援', '利用券'],
    eligibility: '世田谷区に住所を有する0歳から2歳の子どもの保護者',
    applicationPeriod: '通年',
    description: '世田谷区が実施するせたがや子育て応援券です。子育て関連サービスに使える利用券を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 せたがや子育て応援券は、<span class="marker">0歳から2歳の子どもの保護者</span>に対し、子育て関連サービスに使える利用券を交付する制度です。</p><p>世田谷区は東京23区の中で最も人口が多い区で、約92万人が暮らしています。三軒茶屋・下北沢・二子玉川など個性豊かな街が点在し、子育て世帯にも人気の高いエリアです。子育ての孤立化を防ぎ、地域の子育て資源とつなげることを目的としています。</p><p><span class="marker-green">一時預かり、育児相談、親子イベントなど多彩なサービスに利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>世田谷区に住民登録がある0歳から2歳の子どもの保護者が対象です。</p><div class="summary-box" data-title="利用可能なサービス例"><p>一時保育・一時預かり</p><p>産後ケア・育児相談</p><p>親子参加型イベント・講座</p><p>ファミリーサポート事業</p></div><p>出生届や転入届の提出後、世田谷区役所子ども家庭課から案内が届きます。<strong>案内に従い申請</strong>すると利用券が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>交付額は<strong>子ども1人あたり2万円分の利用券</strong>です。500円券×40枚として交付されます。</p><p><span class="marker">利用券には有効期限があり、期限切れの券は使用できません</span>。計画的にご利用ください。</p><div class="note-box">利用できるサービスは世田谷区が指定した登録事業者に限られます。現金への換金はできません。利用券の譲渡・売買も禁止されています。紛失した場合の再発行はできませんので大切に保管してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-daycare-support',
    title: '世田谷区 保育料助成制度',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['世田谷区', '保育料', '助成金'],
    eligibility: '世田谷区内の認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '世田谷区が実施する保育料助成制度です。認可外保育施設を利用する世帯に対し、保育料の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 保育料助成制度は、<span class="marker">認可外保育施設を利用している児童の保護者</span>に対し、保育料の一部を助成する制度です。</p><p>世田谷区は待機児童対策に積極的に取り組んできましたが、認可保育園に入園できずやむを得ず認可外施設を利用している世帯も少なくありません。認可・認可外の保育料格差を軽減し、すべての子どもに質の高い保育を提供するための支援策です。</p><p><span class="marker-green">認証保育所、保育室、保育ママ等が助成の対象施設</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>世田谷区に住民登録があること</p><p>区が指定する認可外保育施設を利用していること</p><p>保育の必要性の認定を受けていること</p><p>住民税の滞納がないこと</p></div><p>世田谷区役所保育認定・調整課に申請書と利用している施設の契約書・領収書を提出します。</p><p><span class="marker">四半期ごとに申請が必要</span>で、各期の終了月の翌月末が申請期限です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>世帯の所得や利用施設の種類に応じて月額最大4万円</strong>です。認可保育園との保育料差額が基準となります。</p><p><span class="marker">幼児教育・保育の無償化（3歳〜5歳）の対象となっている方は、無償化の給付額を差し引いた金額</span>が助成されます。</p><div class="highlight-box">世田谷区では認可保育園の整備を進めるとともに、認可外施設の質の向上にも取り組んでいます。助成対象施設は区のホームページで確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-housing-eco',
    title: '世田谷区 環境配慮型住宅リノベーション補助金',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '東京都',
    tags: ['世田谷区', '省エネ住宅', '補助金'],
    eligibility: '世田谷区内の住宅で省エネ改修工事を行う所有者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '世田谷区が実施する環境配慮型住宅リノベーション補助金です。省エネ改修や断熱工事に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 環境配慮型住宅リノベーション補助金は、<span class="marker">住宅の省エネ改修・断熱工事</span>に対して費用の一部を補助する制度です。</p><p>世田谷区は2050年までに区内のCO2排出量を実質ゼロにする「せたがやゼロカーボンシティ宣言」を掲げています。住宅部門のエネルギー消費削減は重要な取り組みの一つであり、断熱窓への交換や高効率給湯器の導入など、住宅の省エネ性能向上を後押ししています。</p><p>補助率は対象工事費の3分の1で、<strong>上限は40万円</strong>です。<span class="marker-green">太陽光発電設備の導入は別途上乗せ補助あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>窓の断熱改修（内窓設置・二重サッシ化）</p><p>壁・天井・床の断熱材施工</p><p>高効率給湯器への交換（エコキュート等）</p><p>LED照明への一括交換</p></div><p>世田谷区役所環境政策部に申請書・見積書・工事計画書を提出します。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから着工</span>してください。事前着工は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限40万円</strong>です。太陽光発電設備の導入は別途最大20万円が上乗せされます。</p><p><span class="marker">国の「住宅省エネキャンペーン」との併用が可能</span>な場合がありますので、事前に確認してください。</p><div class="note-box">賃貸物件の場合は所有者からの同意書が必要です。マンション共用部分の改修は管理組合での申請となります。工事完了後は省エネ効果の報告が求められる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-barrier-free',
    title: '世田谷区 高齢者住宅バリアフリー化助成',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['世田谷区', 'バリアフリー', '助成金'],
    eligibility: '世田谷区に住所を有する65歳以上の方で、住宅のバリアフリー改修が必要な方',
    applicationPeriod: '通年',
    description: '世田谷区が実施する高齢者住宅バリアフリー化助成です。手すり設置や段差解消等のバリアフリー工事に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 高齢者住宅バリアフリー化助成は、<span class="marker">65歳以上の高齢者が暮らす住宅のバリアフリー改修工事</span>に対して費用の一部を助成する制度です。</p><p>世田谷区の高齢者人口は約19万人で、住み慣れた自宅で安全に暮らし続けるための環境整備が重要な課題です。手すりの設置、段差の解消、浴室の改修など、転倒リスクを低減するためのバリアフリー工事を支援しています。</p><p><span class="marker-green">介護保険の住宅改修費とは別に利用できる、区独自の制度</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事例"><p>手すりの設置（玄関・廊下・浴室・トイレ等）</p><p>床の段差解消</p><p>浴室・トイレの改修</p><p>滑り止め防止加工</p></div><p>世田谷区役所高齢福祉部またはお近くの地域包括支援センターで相談・申請できます。</p><p><span class="marker">工事着手前に理学療法士等による住環境のアセスメント</span>が実施される場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限20万円</strong>です。住民税非課税世帯は助成率が高くなります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）との併用が可能</span>ですので、合わせて最大40万円程度の支援を受けられます。</p><div class="highlight-box">世田谷区ではバリアフリー改修に関する無料相談会も定期的に開催しています。施工業者の紹介や適切な工事内容のアドバイスを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-infertility',
    title: '世田谷区 不妊治療費助成制度',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['世田谷区', '不妊治療', '助成金'],
    eligibility: '世田谷区に住所を有する不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から1年以内）',
    description: '世田谷区が実施する不妊治療費助成制度です。保険適用外の不妊治療にかかる費用の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 不妊治療費助成制度は、<span class="marker">保険適用外の不妊治療（先進医療等）にかかる費用</span>の一部を助成する制度です。</p><p>2022年から体外受精や顕微授精が保険適用となりましたが、保険適用外の先進医療を併用する場合や、保険の回数制限を超えた治療には依然として高額な自己負担が発生します。世田谷区は子どもを望む夫婦を経済面から支援しています。</p><p><span class="marker-green">東京都の不妊治療費助成との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>世田谷区に住民登録がある夫婦（事実婚を含む）</p><p>保険適用外の不妊治療を受けていること</p><p>治療終了日から1年以内に申請すること</p><p>所得が一定基準以下であること</p></div><p>世田谷区役所健康推進課に申請書・医療機関の証明書・領収書を提出します。</p><p><span class="marker">治療1回ごとに申請が必要</span>です。年度内に複数回の治療を行った場合はそれぞれ申請できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大10万円</strong>です。保険適用治療と先進医療の併用にかかる自己負担が対象となります。</p><p><span class="marker">東京都の不妊治療費助成と重複する部分は調整</span>されます。先に東京都の助成を受けた場合は、自己負担の残額が世田谷区の助成対象です。</p><div class="note-box">2022年4月以降に開始した治療が対象です。保険適用の治療のみの場合は本制度の対象外です。治療内容や助成対象の詳細は、世田谷区のホームページまたは窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-school-lunch',
    title: '世田谷区 学校給食費助成制度',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '給食費の全額助成',
    maxAmountNum: 6,
    category: 'education',
    prefecture: '東京都',
    tags: ['世田谷区', '学校給食', '助成金'],
    eligibility: '世田谷区立小中学校に在籍する児童・生徒の保護者',
    applicationPeriod: '通年（学校を通じて手続き）',
    description: '世田谷区が実施する学校給食費助成制度です。区立小中学校の給食費を全額助成し、保護者負担をゼロにしています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 学校給食費助成制度は、<span class="marker">区立小中学校に在籍するすべての児童・生徒</span>の学校給食費を区が全額負担する制度です。</p><p>世田谷区は東京23区最大の人口を誇り、多くの子育て世帯が暮らしています。食材費の高騰が続く中、子育てにかかる経済的負担の軽減と、すべての子どもに栄養バランスの取れた食事を保障するため、給食費の完全無償化に踏み切りました。</p><p><span class="marker-green">所得制限なしで、すべての区立小中学校の児童・生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>世田谷区立小中学校に在籍する児童・生徒の保護者が対象です。</p><div class="summary-box" data-title="制度のポイント"><p>区立小中学校の在籍児童・生徒が対象</p><p>保護者による個別の申請は原則不要</p><p>学校を通じて自動的に適用</p><p>アレルギー対応等で給食を利用しない場合は対象外</p></div><p>特別な申請手続きは不要で、<strong>学校を通じて自動的に給食費が免除</strong>されます。年度途中の転入の場合も、転入先の学校で対応されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>給食費の全額</strong>です。小学校で年間約5万円、中学校で年間約6万円相当の保護者負担がゼロになります。</p><p><span class="marker">私立学校や区外の学校に通学している場合は対象外</span>です。</p><div class="highlight-box">世田谷区の学校給食は地産地消にも取り組んでおり、区内農家の野菜を積極的に活用しています。食育の観点からも充実したプログラムが実施されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-telework-bonus',
    title: '世田谷区 テレワーク環境整備助成金',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['世田谷区', 'テレワーク', '助成金'],
    eligibility: '世田谷区内に事業所を有する中小企業で、テレワーク制度を導入する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '世田谷区が実施するテレワーク環境整備助成金です。中小企業がテレワーク制度を導入する際の環境整備費を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 テレワーク環境整備助成金は、<span class="marker">区内の中小企業がテレワーク制度を新たに導入する</span>際の環境整備にかかる費用を助成する制度です。</p><p>世田谷区は住宅地としての性格が強く、区内で働く人の多くが自宅からテレワークを行える環境にあります。通勤時間の削減によるワークライフバランスの向上と、区内経済の活性化を目指してこの助成制度を設けています。</p><p>補助率は対象経費の2分の1で、<strong>上限は30万円</strong>です。<span class="marker-green">IT機器の購入、クラウドサービスの導入費用等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>世田谷区内に事業所を有する中小企業であること</p><p>テレワーク就業規則を新たに策定すること</p><p>従業員の2割以上がテレワークを実施する計画であること</p><p>区税の滞納がないこと</p></div><p>世田谷区役所産業振興公社に事業計画書と申請書を提出します。</p><p><span class="marker">テレワーク導入前の申請が必須</span>です。導入済みの場合は対象外となりますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。ノートPC・タブレット購入費、VPN構築費、Web会議ツール導入費などが対象です。</p><p><span class="marker">東京都のテレワーク推進助成金との併用は不可</span>です。いずれか有利な制度をお選びください。</p><div class="note-box">個人事業主も対象となりますが、従業員がいることが条件です。機器のリース費用は対象外の場合がありますので、事前にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-nursing-home-reform',
    title: '世田谷区 介護施設整備費補助制度',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['世田谷区', '介護施設', '補助金'],
    eligibility: '世田谷区内で地域密着型介護施設を整備する社会福祉法人等',
    applicationPeriod: '毎年4月〜6月頃（公募制）',
    description: '世田谷区が実施する介護施設整備費補助制度です。地域密着型の小規模介護施設の整備に最大500万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 介護施設整備費補助制度は、<span class="marker">地域密着型の小規模介護施設の新設・改修</span>にかかる費用を補助する制度です。</p><p>世田谷区は高齢者人口が約19万人に達し、介護サービスの需要が年々増加しています。住み慣れた地域で必要な介護サービスを受けられるよう、小規模多機能型居宅介護やグループホームなどの地域密着型施設の整備を推進しています。</p><p><span class="marker-green">国・東京都の補助金に区独自の上乗せ補助を行っています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる施設種別"><p>小規模多機能型居宅介護事業所</p><p>認知症対応型共同生活介護（グループホーム）</p><p>定期巡回・随時対応型訪問介護看護事業所</p><p>看護小規模多機能型居宅介護事業所</p></div><p>毎年度の公募期間中に世田谷区役所高齢福祉部に事業計画書を提出します。</p><p><span class="marker">審査委員会による選考があり、地域ニーズや事業計画の実現可能性が評価</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>区独自の上乗せ補助額は施設種別により異なり、<strong>1施設あたり最大500万円</strong>です。国・都の補助金と合わせて利用できます。</p><p><span class="marker">開設後5年以内に事業を廃止した場合は、補助金の返還</span>が求められます。</p><div class="note-box">世田谷区の介護保険事業計画に基づく整備圏域での開設が条件です。すでに供給が充足しているエリアでは不採択となる場合があります。事前に区の高齢福祉部にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'setagaya-energy-support',
    title: '世田谷区 エネルギー費高騰対策給付金',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '1世帯あたり3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '東京都',
    tags: ['世田谷区', 'エネルギー支援', '給付金'],
    eligibility: '世田谷区に住所を有する住民税非課税世帯等',
    applicationPeriod: '令和7年度中（通知到着後3か月以内）',
    description: '世田谷区が実施するエネルギー費高騰対策給付金です。住民税非課税世帯等に対し、光熱費の負担軽減として1世帯3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 エネルギー費高騰対策給付金は、<span class="marker">エネルギー価格の高騰により家計への影響が大きい住民税非課税世帯等</span>に対し、生活を支援するための給付金です。</p><p>世田谷区は東京23区で最も人口が多く、約92万人の区民が暮らしています。電気・ガス料金の上昇は生活への直接的な影響が大きく、特に低所得世帯への支援が急務となっています。区独自の給付制度として実施しています。</p><p><span class="marker-green">住民税非課税世帯および家計急変世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>世田谷区に住民登録があり、世帯全員の令和6年度住民税が非課税の世帯が主な対象です。</p><div class="summary-box" data-title="申請方法"><p>対象世帯には区から確認書が届く</p><p>確認書に記入・返送するだけで申請完了</p><p>家計急変世帯は別途申請書の提出が必要</p></div><p>確認書が届いたら、記載内容を確認のうえ<strong>3か月以内に返送</strong>してください。届かない場合は世田谷区コールセンターにお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり3万円</strong>です。世帯人数にかかわらず一律の金額です。</p><p><span class="marker">確認書の返送期限を過ぎると受給できません</span>ので、届いたら早めに手続きしてください。</p><div class="note-box">生活保護を受給している世帯も対象です。DV等で住民票を移さずに世田谷区に避難している方は、個別にご相談ください。この給付金は非課税所得として扱われ、年金や各種手当の計算には影響しません。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 渋谷区（東京都）9件: childcare×2, housing, medical, education, employment×2, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'shibuya-childcare-subsidy',
    title: '渋谷区 子育てネウボラ給付金',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '子ども1人あたり10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['渋谷区', '子育て支援', '給付金'],
    eligibility: '渋谷区に住所を有する0歳児の保護者',
    applicationPeriod: '通年（出生届提出後）',
    description: '渋谷区が実施する子育てネウボラ給付金です。渋谷区で出生した子ども1人あたり10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 子育てネウボラ給付金は、<span class="marker">渋谷区に住所を有する0歳児の保護者</span>に対し、出産と子育てを応援するために支給される給付金です。</p><p>渋谷区はフィンランドの「ネウボラ」（妊娠期から就学前までの切れ目ない支援拠点）をモデルに、独自の子育て支援体制を構築しています。スクランブル交差点や原宿・表参道で知られる渋谷区ですが、子育て支援にも先進的に取り組んでいます。</p><p><span class="marker-green">所得制限なしで、すべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>渋谷区に住民登録がある0歳児の保護者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>渋谷区に出生届を提出する</p><p>区の保健師等と面談を受ける</p><p>給付金の申請書を提出する</p><p>約1か月後に指定口座に振込</p></div><p>出生届提出後に渋谷区子ども家庭支援センターから案内が届きます。<strong>面談後に申請書を提出</strong>すると給付を受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり10万円</strong>です。双子以上の場合はそれぞれに支給されます。</p><p><span class="marker">申請には保健師等との面談が必須</span>です。面談は子育ての悩みや必要な支援を確認する機会でもあります。</p><div class="highlight-box">渋谷区では「ネウボラ」の理念に基づき、妊娠届出時から専任の保健師がサポートする体制を整えています。給付金だけでなく、継続的な相談支援も受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-birth-bonus',
    title: '渋谷区 出産・子育て応援交付金',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['渋谷区', '出産支援', '交付金'],
    eligibility: '渋谷区に住所を有する妊婦および出生した子どもの養育者',
    applicationPeriod: '通年',
    description: '渋谷区が実施する出産・子育て応援交付金です。妊娠届出時に5万円、出生届出後に5万円、合計最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 出産・子育て応援交付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の経済的支援を行う国の制度に基づく交付金です。</p><p>渋谷区は都心に位置しながらも、代々木公園や神宮外苑など緑豊かな環境を備えた街です。IT企業が集積するビジネスエリアとしての側面と、子育てしやすい住環境の両立を目指しています。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="交付の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>出生届出後に面談（新生児訪問等）→ 子育て応援給付金5万円</p></div><p>妊娠届出時の面談は渋谷区の各保健相談所で行います。出生後は新生児訪問と連動して面談を実施します。</p><p><span class="marker">各面談後にオンラインまたは郵送で申請</span>できます。約1か月で指定口座に振り込まれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>です。多胎の場合、子育て応援給付金は子どもの人数分支給されます。</p><p><span class="marker">渋谷区独自の子育てネウボラ給付金とは別制度</span>であり、両方を受給できます。</p><div class="note-box">他の自治体で同種の給付金を受給済みの場合は対象外となります。転入の場合は、前住所地での受給状況を確認のうえ申請してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-housing-purchase',
    title: '渋谷区 住み替え支援助成制度',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '最大36万円（月額3万円×12か月）',
    maxAmountNum: 36,
    category: 'housing',
    prefecture: '東京都',
    tags: ['渋谷区', '住み替え支援', '助成金'],
    eligibility: '渋谷区内でより広い住居に住み替える子育て世帯',
    applicationPeriod: '通年',
    description: '渋谷区が実施する住み替え支援助成制度です。子どもの成長に伴い区内でより広い住居に住み替える世帯に家賃差額の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 住み替え支援助成制度は、<span class="marker">子どもの成長に伴い区内でより広い住居へ住み替える子育て世帯</span>に対し、家賃の増加分の一部を助成する制度です。</p><p>渋谷区は都心に位置するため家賃水準が高く、子どもが増えてもスペースの問題で転出を余儀なくされる世帯が少なくありません。この制度は、子育て世帯の区内定住を促進し、コミュニティの維持を図ることを目的としています。</p><p>助成額は<strong>住み替えによる家賃増加分の一部で、月額最大3万円を最長12か月</strong>です。<span class="marker-green">18歳未満の子どもがいる世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>渋谷区内から区内へ住み替えること</p><p>18歳未満の子どもがいる世帯であること</p><p>住み替え後の住居が住み替え前より広いこと</p><p>世帯の所得が基準額以下であること</p></div><p>渋谷区役所住宅政策課に申請書と賃貸借契約書の写し等を提出します。</p><p><span class="marker">住み替え前に事前相談を行うこと</span>が推奨されています。事前の相談なしでも申請は可能ですが、要件の確認のため早めの相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>住み替えによる家賃増加分の2分の1以内で、月額最大3万円</strong>です。最長12か月間の助成が受けられます。</p><p><span class="marker">区外への転出や、持ち家への住み替えは対象外</span>です。あくまで区内の賃貸住宅間の住み替えが対象となります。</p><div class="note-box">礼金・仲介手数料・引越し費用は助成対象外です。住み替え先が親族の所有物件の場合も対象外となります。渋谷区では子育て世帯向けの区営住宅の優先入居制度もありますので、併せてご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-senior-dental',
    title: '渋谷区 高齢者歯科健診・治療費助成',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '健診無料・治療費一部助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['渋谷区', '歯科健診', '高齢者医療'],
    eligibility: '渋谷区に住所を有する65歳以上の方',
    applicationPeriod: '通年',
    description: '渋谷区が実施する高齢者歯科健診・治療費助成です。65歳以上の方の歯科健診を無料で実施し、治療費の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 高齢者歯科健診・治療費助成は、<span class="marker">65歳以上の高齢者の口腔機能の維持・改善</span>を目的とした制度です。</p><p>口腔機能の低下は誤嚥性肺炎や栄養不良のリスクを高め、全身の健康に影響します。渋谷区では「8020運動」（80歳で20本以上の自分の歯を保つ）の推進とともに、高齢者の歯科健診機会を確保し、早期治療につなげる取り組みを行っています。</p><p><span class="marker-green">歯科健診は無料で、年1回受診が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>渋谷区に住民登録がある65歳以上の方が対象です。</p><div class="summary-box" data-title="健診内容"><p>歯と歯ぐきの状態の検査</p><p>口腔機能の評価（嚥下機能等）</p><p>入れ歯の適合検査</p><p>歯科医師によるアドバイス</p></div><p>区内の指定歯科医療機関に直接予約して受診します。<strong>受診時に健康保険証を持参</strong>してください。事前の申請は不要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>歯科健診は<strong>自己負担なし（無料）</strong>です。健診の結果、治療が必要な場合は保険診療の範囲で治療を受けられます。</p><p><span class="marker">住民税非課税の方は治療費の自己負担分の一部が助成</span>される場合があります。窓口でご確認ください。</p><div class="highlight-box">渋谷区では訪問歯科診療（通院困難な高齢者への往診）も実施しています。要介護状態等で通院が難しい方は、渋谷区歯科医師会にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-afterschool',
    title: '渋谷区 放課後クラブ利用料助成',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '月額最大1万円',
    maxAmountNum: 12,
    category: 'education',
    prefecture: '東京都',
    tags: ['渋谷区', '放課後クラブ', '助成金'],
    eligibility: '渋谷区内の民間学童保育を利用する小学生の保護者',
    applicationPeriod: '通年',
    description: '渋谷区が実施する放課後クラブ利用料助成です。民間学童保育を利用する家庭の経済的負担を軽減するため、月額最大1万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 放課後クラブ利用料助成は、<span class="marker">区内の民間学童保育施設を利用する小学生の保護者</span>に対し、利用料の一部を助成する制度です。</p><p>渋谷区では公立の放課後クラブに加え、民間の学童保育施設が多数運営されています。民間施設は公立に比べて利用料が高額になりがちですが、延長保育やプログラムの充実度で選ぶ家庭も多くなっています。</p><p><span class="marker-green">区が認定した民間学童保育施設が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>渋谷区に住民登録がある小学生の保護者であること</p><p>区が認定する民間学童保育施設を利用していること</p><p>保護者が就労等により放課後の保育が必要であること</p><p>所得が一定基準以下であること</p></div><p>渋谷区役所子ども家庭部に申請書と利用施設の契約書・領収書を提出します。</p><p><span class="marker">四半期ごとに領収書を添えて申請</span>する方式です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大1万円</strong>で、世帯の所得に応じて金額が決まります。低所得世帯ほど助成額が高くなります。</p><p><span class="marker">渋谷区の公立放課後クラブとの併用はできません</span>。いずれか一方の利用となります。</p><div class="note-box">助成対象施設は渋谷区のホームページで公開されています。対象外の施設を利用した場合は助成を受けられませんので、事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-sme-support',
    title: '渋谷区 中小企業デジタル化支援助成金',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '東京都',
    tags: ['渋谷区', '中小企業DX', '助成金'],
    eligibility: '渋谷区内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '渋谷区が実施する中小企業デジタル化支援助成金です。IT化・DX推進にかかる経費を最大100万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 中小企業デジタル化支援助成金は、<span class="marker">区内の中小企業がIT化・DXを推進する</span>際にかかる経費を助成する制度です。</p><p>渋谷区はIT企業やスタートアップの集積地として知られ、「ビットバレー」の異名を持つ日本のテクノロジーハブです。一方で、区内には小規模な飲食店や小売店も多く、デジタル化の遅れが経営課題となっています。この助成金はそうした中小企業のDX推進を後押しします。</p><p>補助率は対象経費の3分の2で、<strong>上限は100万円</strong>です。<span class="marker-green">ECサイト構築、POSシステム導入、業務管理ソフト等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となるDX投資例"><p>ECサイトの構築・リニューアル</p><p>クラウド型業務管理システムの導入</p><p>POSレジ・キャッシュレス決済端末の導入</p><p>セキュリティ対策の強化</p></div><p>渋谷区役所産業観光課に事業計画書と申請書を提出します。</p><p><span class="marker">IT専門家による無料の事前アドバイスが受けられます</span>。最適なDX投資の方向性を一緒に検討してから申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限100万円</strong>です。ハードウェア、ソフトウェア、外注費（システム開発・ウェブ制作）が対象です。</p><p><span class="marker">交付決定前の契約・支払いは対象外</span>です。必ず交付決定を受けてから事業を開始してください。</p><div class="highlight-box">渋谷区では「渋谷スタートアップ支援」の一環として、起業支援施設やメンタリングプログラムも提供しています。DX化と合わせてビジネスモデルの革新を検討するのも有効です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-women-startup',
    title: '渋谷区 女性創業支援助成金',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['渋谷区', '女性創業', '助成金'],
    eligibility: '渋谷区内で新たに創業する女性、または創業後1年以内の女性',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '渋谷区が実施する女性創業支援助成金です。女性の起業を支援するため、創業にかかる経費を最大50万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 女性創業支援助成金は、<span class="marker">区内で新たに創業する女性</span>を対象に、創業にかかる初期費用を助成する制度です。</p><p>渋谷区はダイバーシティ推進に力を入れており、女性の活躍推進を重点施策の一つに位置づけています。表参道や代官山といったエリアでは女性起業家が経営するショップやカフェ、サロンが多く、地域の活力を生み出しています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は50万円</strong>です。<span class="marker-green">創業セミナーの受講が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>渋谷区内で創業する女性（または創業後1年以内）</p><p>区指定の創業セミナーを受講済みであること</p><p>事業計画書を提出できること</p><p>区税の滞納がないこと</p></div><p>渋谷区役所産業観光課に事業計画書と申請書を提出します。書類審査およびプレゼンテーション審査が行われます。</p><p><span class="marker">渋谷区の女性起業家ネットワークへの参加機会も提供</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。店舗改装費、設備費、広告宣伝費、ホームページ制作費などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定を受けてから経費の支出を行ってください。</p><div class="note-box">男女共同で創業する場合は、代表者が女性であることが条件です。NPO法人やフリーランスでの創業も対象となります。人件費や日常的な運転資金は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-nursing-equipment',
    title: '渋谷区 介護用品給付事業',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '月額6,000円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['渋谷区', '介護用品', '給付'],
    eligibility: '渋谷区に住所を有する要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '渋谷区が実施する介護用品給付事業です。在宅で要介護高齢者を介護する家族に紙おむつ等の介護用品を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 介護用品給付事業は、<span class="marker">在宅で要介護3以上の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を給付する制度です。</p><p>渋谷区は都心に位置しながらも、ひとり暮らし高齢者や高齢者のみの世帯が増加しています。在宅介護の継続を支援するため、日常的に必要となる消耗品の負担を軽減する取り組みを行っています。</p><p><span class="marker-green">住民税非課税世帯は全額給付、課税世帯は一部自己負担</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付要件"><p>渋谷区に住所を有する方が在宅で介護していること</p><p>介護を受ける方が要介護3以上であること</p><p>介護を受ける方が在宅で生活していること</p><p>紙おむつ等の常時使用が必要であること</p></div><p>渋谷区役所高齢者福祉課またはお近くの地域包括支援センターで申請できます。</p><p><span class="marker">申請月の翌月から給付が開始</span>されます。毎月自宅に介護用品が届けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,000円相当の介護用品</strong>を給付します。紙おむつ、尿取りパッド、清拭剤などから選択できます。</p><p><span class="marker">入院中や施設入所中は給付が停止</span>されます。退院後は改めて届出が必要です。</p><div class="note-box">要介護度が2以下に変更された場合は対象外となります。介護保険で福祉用具のレンタルを利用している方も併用して利用可能です。給付品の種類変更は月ごとに変更届を提出してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shibuya-migration-bonus',
    title: '渋谷区 移住・定住応援給付金',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '東京都',
    tags: ['渋谷区', '定住促進', '給付金'],
    eligibility: '渋谷区に新たに転入し、5年以上定住する意思のある子育て世帯',
    applicationPeriod: '通年（転入後6か月以内）',
    description: '渋谷区が実施する移住・定住応援給付金です。子育て世帯が渋谷区に転入し定住する場合に最大30万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 移住・定住応援給付金は、<span class="marker">18歳未満の子どもがいる世帯が渋谷区に新たに転入し定住する</span>場合に支給される給付金です。</p><p>渋谷区は都心の利便性と多様な文化が魅力ですが、家賃の高さから子育て世帯の転出が課題となっています。この制度は、子育て世帯の転入を促進し、地域コミュニティの活力を維持するために設けられています。</p><p>支給額は<strong>世帯あたり最大30万円</strong>です。<span class="marker-green">子どもの人数に応じて加算があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>渋谷区に新たに転入すること</p><p>18歳未満の子どもがいる世帯であること</p><p>5年以上渋谷区に定住する意思があること</p><p>世帯の所得が一定基準以下であること</p></div><p>渋谷区役所住宅政策課に転入届提出後6か月以内に申請します。賃貸借契約書の写しや所得証明書等の提出が必要です。</p><p><span class="marker">転入届提出日から6か月以内の申請</span>が必要です。期限を過ぎると受給できません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>基本額20万円＋子ども1人につき5万円の加算</strong>で、上限30万円です。</p><p><span class="marker">5年以内に渋谷区から転出した場合は給付金の返還</span>が求められます。</p><div class="note-box">区内での転居（区内→区内の引越し）は対象外です。過去5年以内に渋谷区に住民登録があった方の再転入も対象外となります。持ち家購入による転入の場合は別途「住宅取得支援」制度もご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 中野区（東京都）9件: childcare×2, housing, medical, education, employment, nursing×2, living
  // ────────────────────────────────────────────────
  {
    slug: 'nakano-childcare-subsidy',
    title: '中野区 子育て応援給付金',
    organization: '中野区',
    type: 'local',
    maxAmount: '子ども1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中野区', '子育て支援', '給付金'],
    eligibility: '中野区に住所を有する0歳から2歳の子どもの保護者',
    applicationPeriod: '通年',
    description: '中野区が実施する子育て応援給付金です。0歳から2歳の子どもを養育する世帯に対し、子ども1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 子育て応援給付金は、<span class="marker">0歳から2歳の子どもを養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>中野区は新宿区に隣接する利便性の高いエリアで、中野ブロードウェイやサンモール商店街で知られるサブカルチャーの聖地です。若者や単身者が多いイメージですが、実際には子育て世帯も多く暮らしており、区を挙げて子育て支援の充実に取り組んでいます。</p><p><span class="marker-green">所得制限なしで、中野区に住むすべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>中野区に住民登録がある0歳から2歳の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者（保護者）の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p></div><p>中野区役所子ども教育部から案内が届きますので、必要事項を記入して返送するか、オンラインで申請します。</p><p><strong>案内到着後3か月以内</strong>の申請が必要です。<span class="marker">期限を過ぎると受給できなくなります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。多子世帯はそれぞれの子どもについて受給できます。</p><p><span class="marker">他の自治体で同種の給付金を受給した場合は対象外</span>となることがあります。</p><div class="note-box">この給付金は非課税所得として扱われ、所得税・住民税の計算には含まれません。生活保護受給世帯も申請可能です。使途の制限はありませんので、子育てに必要な用途にお使いいただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-parenting-allowance',
    title: '中野区 子ども養育手当',
    organization: '中野区',
    type: 'local',
    maxAmount: '月額1万3,500円',
    maxAmountNum: 16,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中野区', '児童手当', '養育手当'],
    eligibility: '中野区に住所を有するひとり親世帯の保護者',
    applicationPeriod: '通年',
    description: '中野区が実施する子ども養育手当です。ひとり親世帯の生活安定と子どもの健全育成を目的に月額最大13,500円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 子ども養育手当は、<span class="marker">ひとり親世帯の保護者</span>に対し、子どもの養育にかかる費用の一部を手当として支給する制度です。</p><p>中野区は都心へのアクセスが良く、比較的手頃な家賃で暮らせるエリアとして人気がありますが、ひとり親世帯にとっては依然として生活費の負担が大きい地域です。この手当は国の児童扶養手当に加えて区独自で支給するもので、ひとり親世帯の経済的基盤を補強します。</p><p><span class="marker-green">18歳の年度末までの子どもが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>中野区に住民登録があるひとり親家庭の保護者</p><p>18歳の年度末までの児童を養育していること</p><p>生活保護を受給していないこと</p><p>所得が一定基準以下であること</p></div><p>中野区役所子ども教育部子育て支援課の窓口で申請します。戸籍謄本、所得証明書、住民票などの提出が必要です。</p><p><span class="marker">毎年8月に現況届の提出</span>が必要です。届出を忘れると支給が停止されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり月額13,500円</strong>です。年3回（4月・8月・12月）にまとめて支給されます。</p><p><span class="marker">国の児童扶養手当との併給が可能</span>ですが、所得制限があります。</p><div class="note-box">事実婚状態にある場合は対象外です。児童が児童福祉施設に入所した場合も支給が停止されます。住所変更や婚姻など、状況に変更があった場合は速やかに届け出てください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-newlywed-rent',
    title: '中野区 新婚世帯住居費助成制度',
    organization: '中野区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '東京都',
    tags: ['中野区', '新婚支援', '家賃助成'],
    eligibility: '中野区に住所を有する婚姻届出後1年以内の夫婦で、夫婦の合計所得が一定以下の世帯',
    applicationPeriod: '通年（婚姻届出後1年以内）',
    description: '中野区が実施する新婚世帯住居費助成制度です。新婚世帯の住居費用を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 新婚世帯住居費助成制度は、<span class="marker">婚姻届出後1年以内の新婚世帯</span>に対し、住居の賃借料や引越し費用の一部を助成する制度です。</p><p>中野区は新宿に隣接し、交通利便性が高い一方で、比較的手頃な家賃で暮らせるエリアとして若い世帯に人気があります。結婚を機に中野区に定住し、将来的に子育てもしたいと考えるカップルを支援するための制度です。</p><p>助成額は<strong>最大30万円</strong>です。<span class="marker-green">家賃と引越し費用の両方が助成対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出から1年以内であること</p><p>夫婦ともに39歳以下であること</p><p>中野区に住民登録があること</p><p>夫婦の合計所得が500万円未満であること</p></div><p>中野区役所住宅課に申請書、婚姻届受理証明書、賃貸借契約書の写し等を提出します。</p><p><span class="marker">婚姻届出から1年以内の申請</span>が必要です。期限を過ぎると受給できません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は家賃・共益費と引越し費用を合わせて<strong>最大30万円</strong>です。家賃は実際に支払った額の一部が助成されます。</p><p><span class="marker">公営住宅や社宅、親族所有の物件は対象外</span>です。</p><div class="highlight-box">中野区では区内の不動産会社と連携した「新婚向け住まい相談会」も実施しています。中野区での新生活のスタートに活用してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-mental-health',
    title: '中野区 こころの健康相談・医療費助成',
    organization: '中野区',
    type: 'local',
    maxAmount: '自立支援医療による自己負担軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['中野区', 'メンタルヘルス', '医療費助成'],
    eligibility: '中野区に住所を有する精神疾患で継続的な通院治療が必要な方',
    applicationPeriod: '通年',
    description: '中野区が実施するこころの健康相談・医療費助成事業です。精神疾患の通院治療にかかる医療費の自己負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 こころの健康相談・医療費助成は、<span class="marker">精神疾患で継続的な通院治療を必要とする方</span>の医療費自己負担を軽減する制度です。</p><p>自立支援医療（精神通院医療）制度を活用し、通常3割の医療費自己負担を1割に軽減します。中野区は都心で働く人々のベッドタウンでもあり、ストレスに起因するメンタルヘルスの課題は身近な問題です。区独自の相談支援体制も充実させています。</p><p><span class="marker-green">うつ病、統合失調症、不安障害、発達障害など幅広い精神疾患が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>中野区に住民登録がある方</p><p>精神科・心療内科に通院中の方</p><p>医師が継続的な通院治療を必要と判断した方</p></div><p>中野区役所すこやか福祉センターまたは障害福祉課に申請書、医師の診断書（自立支援医療用）、健康保険証を提出します。</p><p><span class="marker">有効期間は1年間で、毎年更新手続きが必要</span>です。更新は有効期限の3か月前から行えます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>医療費の自己負担が<strong>3割から1割に軽減</strong>されます。さらに所得に応じた月額上限額が設定されており、上限を超える負担は免除されます。</p><p><span class="marker">指定した医療機関・薬局でのみ助成が適用</span>されます。利用する医療機関と薬局は申請時に指定が必要です。</p><div class="note-box">中野区では専門の精神保健福祉士によるこころの健康相談（無料・予約制）も実施しています。医療費助成だけでなく、生活全般の困りごとについても相談できますので、お気軽にすこやか福祉センターにご連絡ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-study-abroad',
    title: '中野区 青少年海外派遣・留学支援事業',
    organization: '中野区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'education',
    prefecture: '東京都',
    tags: ['中野区', '留学支援', '教育'],
    eligibility: '中野区に住所を有する中学生・高校生で、海外留学・派遣プログラムに参加する方',
    applicationPeriod: '毎年4月〜6月頃（公募制）',
    description: '中野区が実施する青少年海外派遣・留学支援事業です。中高生の海外留学費用を最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 青少年海外派遣・留学支援事業は、<span class="marker">中学生・高校生が海外留学や国際交流プログラムに参加する</span>際の費用を助成する制度です。</p><p>中野区は国際交流活動に積極的で、複数の海外友好都市との交流を行っています。次世代を担う青少年のグローバルな視野を育むため、短期留学やホームステイプログラムへの参加を経済面から支援しています。</p><p>助成額は<strong>渡航費・研修費の一部で、最大20万円</strong>です。<span class="marker-green">区が推薦するプログラムのほか、自主的な留学も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>中野区に住民登録がある中学生または高校生</p><p>1週間以上の海外留学・国際交流プログラムに参加すること</p><p>学校長の推薦書または保護者の同意書があること</p><p>帰国後に報告書を提出できること</p></div><p>中野区教育委員会に申請書と留学プログラムの案内等を提出します。選考委員会による審査があります。</p><p><span class="marker">募集人数は毎年10〜20名程度</span>です。応募者多数の場合は選考となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>渡航費・プログラム参加費等の2分の1以内で、最大20万円</strong>です。</p><p><span class="marker">帰国後に体験報告書を区に提出する義務</span>があります。報告会への参加が求められることもあります。</p><div class="highlight-box">中野区では、留学助成のほかにも区内在住の外国人との交流イベントや多文化共生講座なども開催しています。海外に行く前の異文化理解の機会としても活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-uij-turn',
    title: '中野区 UIJターン就職支援助成金',
    organization: '中野区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['中野区', 'UIJターン', '就職支援'],
    eligibility: '地方から中野区に転入し、区内の中小企業に就職した方',
    applicationPeriod: '通年（転入後6か月以内）',
    description: '中野区が実施するUIJターン就職支援助成金です。地方から中野区に転入し区内中小企業に就職した方に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 UIJターン就職支援助成金は、<span class="marker">地方から中野区に転入し、区内の中小企業に正規雇用として就職した方</span>に対し、転居費用等を助成する制度です。</p><p>中野区は中野駅周辺の大規模再開発が進行中で、オフィスビルや商業施設の整備により新たな雇用が生まれています。区内の中小企業の人材確保を支援するとともに、地方からの若い人材の流入を促進することが目的です。</p><p>助成額は<strong>最大20万円</strong>です。<span class="marker-green">引越し費用と初月の家賃が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>東京都・神奈川県・千葉県・埼玉県以外の地域から中野区に転入したこと</p><p>中野区内の中小企業に正規雇用で就職したこと</p><p>転入日から6か月以上中野区に継続居住する意思があること</p><p>就職日が転入日の前後3か月以内であること</p></div><p>中野区役所産業振興課に申請書、雇用契約書の写し、引越し費用の領収書等を提出します。</p><p><span class="marker">転入後6か月以内の申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は引越し費用と家賃1か月分（上限10万円）を合わせて<strong>最大20万円</strong>です。</p><p><span class="marker">就職後6か月以内に離職した場合は助成金の返還</span>が求められます。</p><div class="note-box">大企業への就職は対象外です。中野区の中小企業振興基本条例に定める中小企業者に雇用された場合が対象となります。フリーランス・自営業としての開業は、別途「創業支援制度」をご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-nursing-equipment',
    title: '中野区 介護用品支給事業',
    organization: '中野区',
    type: 'local',
    maxAmount: '月額6,000円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['中野区', '介護用品', '支給'],
    eligibility: '中野区に住所を有する要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '中野区が実施する介護用品支給事業です。在宅で重度の要介護者を介護する家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>中野区では「地域包括ケアシステム」の構築を推進しており、住み慣れた地域で安心して暮らし続けられる体制づくりに取り組んでいます。介護用品の支給は、在宅介護を行う家族の負担を直接的に軽減する重要な支援策の一つです。</p><p><span class="marker-green">住民税非課税世帯は全額支給、課税世帯は一部自己負担</span>での利用となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>中野区に住所を有する方が在宅で介護していること</p><p>介護を受ける方が要介護4または5であること</p><p>介護を受ける方が在宅で生活していること（施設入所・入院中は対象外）</p></div><p>中野区役所介護保険課またはお住まいの地域のすこやか福祉センターで申請できます。</p><p><span class="marker">申請月の翌月から支給が開始</span>され、毎月介護用品が自宅に届けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,000円相当の介護用品</strong>を支給します。紙おむつ、尿取りパッド、使い捨て手袋等から選択できます。</p><p><span class="marker">要介護度が3以下に変更された場合は支給が終了</span>します。</p><div class="note-box">入院中・施設入所中は支給停止となります。退院後は改めて届出が必要です。おむつの使用がない方でも、介護に必要な消耗品として清拭剤や使い捨て手袋を選択できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-nursing-home-reform',
    title: '中野区 介護者リフレッシュ事業',
    organization: '中野区',
    type: 'local',
    maxAmount: '年間最大2万4千円相当',
    maxAmountNum: 2,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['中野区', '介護者支援', 'リフレッシュ'],
    eligibility: '中野区に住所を有する要介護高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '中野区が実施する介護者リフレッシュ事業です。在宅介護者の心身のリフレッシュのため、施術サービスの利用券を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 介護者リフレッシュ事業は、<span class="marker">在宅で要介護高齢者を介護している家族の心身のリフレッシュ</span>を目的とした事業です。</p><p>在宅介護は身体的にも精神的にも大きな負担を伴います。中野区ではケアする人（ケアラー）へのケアも重要と位置づけ、介護者がリフレッシュできる機会を提供しています。マッサージやはり・きゅう等のリラクゼーションサービスの利用券を交付します。</p><p><span class="marker-green">要介護1以上の方を在宅で介護している方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>中野区に住民登録があること</p><p>要介護1以上の高齢者を在宅で常時介護していること</p><p>介護保険施設に入所中の方の家族は対象外</p></div><p>中野区役所介護保険課またはすこやか福祉センターで申請できます。介護保険被保険者証をお持ちください。</p><p><span class="marker">年度ごとの申請が必要</span>です。年度途中の申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大6枚（1枚4,000円相当）の利用券</strong>が交付されます。区が指定した施術所で利用できます。</p><p><span class="marker">利用券の有効期限は当該年度末（3月31日）</span>です。期限切れの券は使用できません。</p><div class="highlight-box">中野区では介護者同士が交流できる「介護者のつどい」も定期的に開催しています。介護の悩みを共有し、情報交換ができる場として多くの方に利用されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nakano-elderly-support',
    title: '中野区 高齢者自立支援住宅改修助成',
    organization: '中野区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '東京都',
    tags: ['中野区', '高齢者支援', '住宅改修'],
    eligibility: '中野区に住所を有する65歳以上の方で、日常生活に支障があり住宅改修が必要な方',
    applicationPeriod: '通年',
    description: '中野区が実施する高齢者自立支援住宅改修助成です。高齢者の自立した生活を支援するための住宅改修費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 高齢者自立支援住宅改修助成は、<span class="marker">65歳以上の高齢者が安全に在宅生活を続けるための住宅改修</span>にかかる費用を助成する制度です。</p><p>中野区の高齢化率は約22%で、ひとり暮らし高齢者の割合も都内で上位に位置しています。転倒・転落事故の予防や日常生活動作の維持のため、住環境の改善を支援することは在宅生活の継続に直結する重要な施策です。</p><p><span class="marker-green">介護保険の住宅改修費とは別に利用できる、区独自の助成制度</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>浴槽の取り替え（またぎ高さの低い浴槽への交換）</p><p>流し・洗面台の取り替え（車いす対応等）</p><p>便器の洋式化（和式から洋式への変更）</p><p>居室の段差解消、手すりの設置</p></div><p>中野区役所介護保険課またはすこやか福祉センターに事前相談のうえ申請します。</p><p><span class="marker">必ず工事着手前に申請し、承認を受けてから着工</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は工事種別ごとに上限が設定されており、<strong>1種別あたり最大20万円</strong>です。住民税非課税世帯は自己負担なし、課税世帯は1割負担です。</p><p><span class="marker">介護保険の住宅改修（上限20万円）との併用が可能</span>です。合わせて利用することで大幅な負担軽減が期待できます。</p><div class="note-box">賃貸住宅の場合は所有者の承諾書が必要です。改修後に機能確認の調査が行われることがあります。工事業者は区内業者に限定されませんが、複数の見積もりを取ることが推奨されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 杉並区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'suginami-childcare-subsidy',
    title: '杉並区 子育て応援券',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大3万円分の利用券',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['杉並区', '子育て応援券', '子育て支援'],
    eligibility: '杉並区に住所を有する0歳から就学前の子どもの保護者',
    applicationPeriod: '通年',
    description: '杉並区が実施する子育て応援券事業です。子育て支援サービスに使える利用券を0歳児に3万円分交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 子育て応援券は、<span class="marker">0歳から就学前の子どもの保護者</span>に対し、子育て支援サービスに使える利用券を交付する制度です。</p><p>杉並区は東京23区の西部に位置し、荻窪・高円寺・阿佐ヶ谷など個性豊かな商店街が連なる住みやすいエリアです。全国に先駆けて2007年から「子育て応援券」制度を導入しており、地域の子育て資源と子育て家庭をつなぐ先進的な取り組みとして知られています。</p><p><span class="marker-green">0歳児は無償で3万円分、1歳〜就学前は有償（1万円で2万円分）で利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>杉並区に住民登録がある0歳から就学前の子どもの保護者が対象です。</p><div class="summary-box" data-title="利用可能なサービス例"><p>一時保育・ベビーシッター</p><p>親子プログラム・育児講座</p><p>産後ケア・ヨガ教室</p><p>子育て相談・読み聞かせ会</p></div><p>出生届や転入届の提出後、杉並区から案内が届きます。<strong>0歳児分は無償で交付</strong>されます。1歳以降は1万円で2万円分の券を購入する形式です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>0歳児は<strong>無償で3万円分（500円券×60枚）</strong>が交付されます。1歳から就学前までは1万円の負担で2万円分の券を購入できます。</p><p><span class="marker">有効期限は交付日の翌年度末（3月31日）</span>です。期限切れの券は使用できません。</p><div class="highlight-box">杉並区の子育て応援券は約500の登録事業者で使えます。一時保育だけでなく、親子カフェや子ども向け音楽教室など、幅広いサービスで利用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-birth-bonus',
    title: '杉並区 出産・子育て応援交付金',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['杉並区', '出産支援', '交付金'],
    eligibility: '杉並区に住所を有する妊婦および出生した子どもの養育者',
    applicationPeriod: '通年',
    description: '杉並区が実施する出産・子育て応援交付金です。妊娠届出時に5万円、出生届出後に5万円、合計最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 出産・子育て応援交付金は、<span class="marker">妊娠届出時に5万円相当、出生届出後に5万円相当</span>の支援を行う国の制度に基づく交付金です。</p><p>杉並区は子育て支援に定評があり、待機児童ゼロの達成や子育て応援券の先駆的導入など、多くの実績を持っています。この交付金は妊娠期からの伴走型支援と一体的に実施されており、すべての妊婦・子育て家庭を支えます。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・出産された方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="交付の流れ"><p>妊娠届出時に保健師と面談 → 出産応援給付金5万円</p><p>出生後の赤ちゃん訪問時に面談 → 子育て応援給付金5万円</p></div><p>妊娠届出は杉並保健所または各保健センターで行います。面談後にオンラインまたは郵送で給付金の申請ができます。</p><p><span class="marker">面談を受けることが給付の条件</span>です。面談では妊娠・出産・子育てに関する情報提供や相談ができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>です。多胎の場合、子育て応援給付金は子どもの人数分です。</p><p><span class="marker">杉並区独自の「子育て応援券」とは別制度</span>で、両方を受けることができます。</p><div class="note-box">他の自治体で同種の給付金を受給済みの場合は対象外です。里帰り出産等で一時的に区外にいる場合でも、杉並区に住民登録があれば申請可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-housing-eco',
    title: '杉並区 低炭素化推進住宅改修助成制度',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '東京都',
    tags: ['杉並区', '省エネ住宅', '助成金'],
    eligibility: '杉並区内の住宅で省エネ改修を行う区民',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '杉並区が実施する低炭素化推進住宅改修助成制度です。住宅の省エネ改修工事に最大25万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 低炭素化推進住宅改修助成制度は、<span class="marker">住宅の断熱性能向上や省エネ設備の導入</span>にかかる費用を助成する制度です。</p><p>杉並区は「杉並区地球温暖化対策実行計画」に基づき、区内のCO2排出量削減を推進しています。住宅部門は区内のエネルギー消費の大きな割合を占めており、断熱改修や高効率設備への更新を促進することで温暖化対策に貢献しています。</p><p>補助率は対象工事費の10%で、<strong>上限は25万円</strong>です。<span class="marker-green">窓の断熱、壁・天井の断熱、高効率給湯器の導入が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>断熱窓への交換・内窓の設置</p><p>壁・天井・床の断熱材施工</p><p>高効率給湯器（エコキュート・エネファーム等）の設置</p><p>太陽光発電システムの設置</p></div><p>杉並区役所環境部環境課に申請書と見積書等を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定通知後に着工してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%以内で、<strong>上限25万円</strong>です。太陽光発電設備の設置は別途上乗せ補助があります。</p><p><span class="marker">国・都の省エネ補助金との併用が可能</span>な場合があります。事前に窓口で確認してください。</p><div class="note-box">新築住宅への設備設置は対象外です。マンション共用部分の改修は管理組合による申請が必要です。工事完了後に写真付きの実績報告書の提出が求められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-vacant-house',
    title: '杉並区 空き家活用支援事業',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['杉並区', '空き家活用', '補助金'],
    eligibility: '杉並区内の空き家を地域貢献型施設に改修・活用する所有者または利用者',
    applicationPeriod: '毎年4月〜7月頃（公募制）',
    description: '杉並区が実施する空き家活用支援事業です。空き家を地域貢献型施設に改修する費用を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 空き家活用支援事業は、<span class="marker">区内の空き家を地域貢献型の施設（子育て支援・高齢者交流・コミュニティスペース等）に改修・活用する</span>際の費用を補助する制度です。</p><p>杉並区は閑静な住宅街が広がる一方、高齢化や相続問題による空き家の増加が課題となっています。空き家を放置すると防災・防犯上のリスクが高まるため、有効活用を促進することで地域の安全性向上とコミュニティの活性化を図っています。</p><p>補助率は改修費の3分の2で、<strong>上限は100万円</strong>です。<span class="marker-green">地域コミュニティへの貢献が活用条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="活用例"><p>子育てひろば・親子カフェ</p><p>高齢者サロン・地域交流スペース</p><p>学習支援・子ども食堂</p><p>地域の防災拠点・コミュニティ農園</p></div><p>杉並区役所都市整備部住宅課に事業計画書と申請書を提出します。審査委員会による選考があります。</p><p><span class="marker">10年以上の活用計画が求められます</span>。短期的な利用は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は改修費の3分の2以内で、<strong>上限100万円</strong>です。建物の安全性確保に必要な耐震改修費も対象に含まれます。</p><p><span class="marker">10年未満で活用を中止した場合は補助金の返還</span>が求められます。</p><div class="highlight-box">杉並区では空き家の所有者と活用希望者のマッチング支援も行っています。「杉並区空き家バンク」に登録することで、活用希望のNPOや地域団体とつながることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-disability-medical',
    title: '杉並区 心身障害者医療費助成制度',
    organization: '杉並区',
    type: 'local',
    maxAmount: '医療費自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['杉並区', '障害者医療', '助成金'],
    eligibility: '杉並区に住所を有する身体障害者手帳1・2級または愛の手帳1・2度をお持ちの方',
    applicationPeriod: '通年',
    description: '杉並区が実施する心身障害者医療費助成制度です。重度の心身障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 心身障害者医療費助成制度（マル障）は、<span class="marker">重度の身体障害または知的障害のある方</span>の医療費自己負担分を助成する東京都と区の共同事業です。</p><p>杉並区はバリアフリー推進計画に基づき、障害のある方が安心して暮らせるまちづくりを進めています。この制度により医療費の負担を軽減し、必要な医療を安心して受けられる環境を整備しています。</p><p><span class="marker-green">保険診療の自己負担分が助成の対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級・2級をお持ちの方</p><p>愛の手帳（療育手帳）1度・2度をお持ちの方</p><p>精神障害者保健福祉手帳1級をお持ちの方</p></div><p>杉並区役所障害者施策課の窓口で申請できます。障害者手帳と健康保険証をご持参ください。</p><p><span class="marker">65歳以上で新たに障害認定を受けた方は所得制限があります</span>。65歳未満で取得済みの方は所得にかかわらず対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>助成</strong>されます。住民税非課税の方は自己負担なし、課税者は1割負担です。</p><p><span class="marker">都内の医療機関ではマル障医療証を提示するだけで窓口負担が軽減</span>されます。</p><div class="note-box">入院時の食事代、差額ベッド代、保険適用外の費用は助成対象外です。都外の医療機関で受診した場合は償還払いとなります。申請から医療証の交付まで約2〜3週間かかります。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-scholarship',
    title: '杉並区 奨学金給付制度',
    organization: '杉並区',
    type: 'local',
    maxAmount: '月額最大2万円',
    maxAmountNum: 24,
    category: 'education',
    prefecture: '東京都',
    tags: ['杉並区', '奨学金', '教育支援'],
    eligibility: '杉並区内に住所を有する高校生・大学生等の保護者で、経済的に支援が必要な方',
    applicationPeriod: '毎年4月〜5月頃',
    description: '杉並区が実施する奨学金給付制度です。経済的な理由で修学が困難な生徒・学生に対し、返済不要の給付型奨学金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 奨学金給付制度は、<span class="marker">経済的な理由で高校・大学等への修学が困難な生徒・学生</span>に対し、学資金を給付する制度です。</p><p>杉並区は教育熱心な街として知られ、区立学校の学力水準は都内でも上位に位置しています。すべての子どもが経済的な理由で学びの機会を失わないよう、返済不要の給付型奨学金制度を設けています。</p><p><span class="marker-green">返済不要の給付型で、学業成績と経済的要件を総合的に審査</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>杉並区に1年以上住所を有すること</p><p>高校・大学・短大・専修学校に在学中または入学予定であること</p><p>学業成績が一定水準以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月〜5月に杉並区教育委員会で申請を受け付けます。在学証明書、成績証明書、住民税課税証明書等が必要です。</p><p><span class="marker">選考により決定されるため、申請者全員が受給できるわけではありません</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生：月額8,000円、大学生等：月額20,000円</strong>が目安です。年2回に分けて支給されます。</p><p><span class="marker">他の給付型奨学金との併給制限がある場合があります</span>。詳細は募集要項でご確認ください。</p><div class="note-box">奨学金は返済不要ですが、退学・休学・留年した場合は支給が停止されます。毎年度の継続審査があり、成績や出席状況が確認されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-telework-bonus',
    title: '杉並区 中小企業テレワーク導入助成金',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['杉並区', 'テレワーク', '助成金'],
    eligibility: '杉並区内に事業所を有する中小企業で、テレワーク制度を新たに導入する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '杉並区が実施する中小企業テレワーク導入助成金です。テレワーク環境の整備費を最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 中小企業テレワーク導入助成金は、<span class="marker">区内の中小企業がテレワーク制度を新たに導入する</span>際の環境整備にかかる費用を助成する制度です。</p><p>杉並区は住宅地が大半を占め、区内で働く人の多くが職住近接の環境にあります。テレワークの普及は通勤負担の軽減だけでなく、区内の昼間人口の増加やコワーキングスペースの利用促進にもつながり、地域経済の活性化に寄与します。</p><p>補助率は対象経費の2分の1で、<strong>上限は20万円</strong>です。<span class="marker-green">通信環境の整備、セキュリティ対策、クラウドサービス導入等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>杉並区内に事業所を有する中小企業であること</p><p>テレワーク就業規則を新たに策定すること</p><p>区税の滞納がないこと</p><p>3か月以上テレワークを継続する計画があること</p></div><p>杉並区役所産業振興センターに申請書と事業計画書を提出します。</p><p><span class="marker">テレワーク導入前の申請が必須</span>です。導入済みの設備の後追い申請は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。PC・タブレット、VPN機器、Web会議システム等が対象です。</p><p><span class="marker">導入後3か月以内に実績報告書の提出</span>が必要です。テレワークの実施状況を報告してください。</p><div class="highlight-box">杉並区産業振興センターでは、テレワーク導入に関する無料セミナーや相談会も実施しています。制度設計から就業規則の策定まで、専門家のアドバイスを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-nursing-home-reform',
    title: '杉並区 認知症高齢者グループホーム整備補助',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['杉並区', 'グループホーム', '補助金'],
    eligibility: '杉並区内で認知症高齢者グループホームを整備する社会福祉法人等',
    applicationPeriod: '毎年4月〜6月頃（公募制）',
    description: '杉並区が実施する認知症高齢者グループホーム整備補助です。グループホームの新設・改修費用を最大500万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 認知症高齢者グループホーム整備補助は、<span class="marker">区内で認知症対応型共同生活介護施設（グループホーム）を新設または改修する</span>事業者に対して、整備費の一部を補助する制度です。</p><p>杉並区は高齢者の約7人に1人が認知症または認知機能の低下が見られるとされ、認知症高齢者が住み慣れた地域で安心して暮らせる環境の整備が急務です。少人数で家庭的な環境を提供するグループホームの増設を積極的に推進しています。</p><p><span class="marker-green">国・東京都の補助金に加えて区独自の上乗せ補助を実施</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象"><p>認知症対応型共同生活介護事業所（グループホーム）の新設</p><p>既存施設の大規模改修・バリアフリー化</p><p>防災設備の強化（スプリンクラー設置等）</p></div><p>杉並区役所高齢者担当部に事業計画書を提出し、公募審査を受けます。</p><p><span class="marker">杉並区介護保険事業計画に定める整備計画に合致している必要</span>があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>区独自の上乗せ補助は<strong>1施設あたり最大500万円</strong>です。国・都の補助金と合わせて利用できます。</p><p><span class="marker">開設後5年以内に事業を廃止した場合は補助金の返還</span>が求められます。</p><div class="note-box">1ユニット9名×2ユニットの18名定員が標準的な規模です。敷地面積や建築基準、消防法の基準を満たす必要があります。用地確保が課題となることが多いため、区の不動産情報提供も活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suginami-migration-bonus',
    title: '杉並区 ファミリー世帯定住支援給付金',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'living',
    prefecture: '東京都',
    tags: ['杉並区', '定住支援', '給付金'],
    eligibility: '杉並区に新たに転入し定住する子育て世帯',
    applicationPeriod: '通年（転入後6か月以内）',
    description: '杉並区が実施するファミリー世帯定住支援給付金です。子育て世帯の杉並区への転入・定住を促進するため最大40万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 ファミリー世帯定住支援給付金は、<span class="marker">18歳未満の子どもがいる世帯が杉並区に新たに転入し定住する</span>場合に支給される給付金です。</p><p>杉並区は「子育てしやすいまち」として高い評価を受けていますが、近年の不動産価格上昇により子育て世帯の転出が懸念されています。この制度は、区外からの子育て世帯の転入を促進し、バランスの取れた人口構成の維持を目指しています。</p><p>支給額は<strong>基本額20万円＋子ども加算</strong>で、<span class="marker-green">最大40万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>杉並区に新たに転入すること（区内転居は対象外）</p><p>18歳未満の子どもがいる世帯であること</p><p>5年以上杉並区に定住する意思があること</p><p>世帯の所得が一定基準以下であること</p></div><p>杉並区役所住宅課に転入届提出後6か月以内に申請します。</p><p><span class="marker">申請時に5年以上の定住に関する誓約書</span>の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>基本額20万円＋子ども1人あたり10万円の加算</strong>で、上限40万円です（子ども2人以上で上限に達します）。</p><p><span class="marker">5年以内に杉並区から転出した場合は給付金の返還</span>が求められます。</p><div class="highlight-box">杉並区では「すぎなみ子育てサイト」を通じて、区内の子育て支援サービスや施設の情報を一元的に提供しています。転入前の情報収集にも活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 豊島区（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'toshima-daycare-support',
    title: '豊島区 認可外保育施設利用料助成',
    organization: '豊島区',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['豊島区', '保育料助成', '子育て支援'],
    eligibility: '豊島区内の認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '豊島区が実施する認可外保育施設利用料助成です。認可外保育施設を利用する世帯の保育料負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 認可外保育施設利用料助成は、<span class="marker">認可外保育施設を利用している児童の保護者</span>に対し、保育料の一部を助成する制度です。</p><p>豊島区は池袋を中心とした商業・文化の拠点であり、かつて「消滅可能性都市」と指摘されたことを契機に、子育て支援の充実に大きく舵を切りました。認可保育園に入園できなかった世帯の負担を軽減し、すべての子どもに良質な保育を保障するための支援策です。</p><p><span class="marker-green">認証保育所、保育ママ、企業主導型保育施設等が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>豊島区に住民登録があること</p><p>区が指定する認可外保育施設を利用していること</p><p>保育の必要性の認定を受けていること</p><p>住民税の滞納がないこと</p></div><p>豊島区役所子育て支援課に申請書と施設の契約書・領収書を提出します。</p><p><span class="marker">四半期ごとの申請</span>で、各期終了月の翌月末が申請期限です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>世帯の所得と利用施設の種類に応じて月額最大4万円</strong>です。</p><p><span class="marker">3歳〜5歳の幼児教育・保育の無償化の給付額を差し引いた金額</span>が助成対象となります。</p><div class="highlight-box">豊島区は「消滅可能性都市」の指摘から大きく変わり、現在は「持続発展都市」を目指しています。待機児童ゼロの達成や、全区立小学校での放課後全児童クラブの設置など、子育て環境の整備が進んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-parenting-allowance',
    title: '豊島区 子ども養育手当',
    organization: '豊島区',
    type: 'local',
    maxAmount: '月額1万3,500円',
    maxAmountNum: 16,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['豊島区', '養育手当', '子育て支援'],
    eligibility: '豊島区に住所を有するひとり親世帯の保護者',
    applicationPeriod: '通年',
    description: '豊島区が実施する子ども養育手当です。ひとり親世帯の経済的安定を図るため、月額最大13,500円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 子ども養育手当は、<span class="marker">ひとり親世帯の保護者</span>に対し、子どもの養育にかかる費用の一部を手当として支給する区独自の制度です。</p><p>豊島区は池袋駅を中心に交通利便性が高い一方、生活コストも高い地域です。特にひとり親世帯にとっては経済的な負担が大きく、国の児童扶養手当に加えて区独自の手当を支給することで、安定した子育て環境を支援しています。</p><p><span class="marker-green">18歳の年度末までの児童を養育するひとり親世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>豊島区に住民登録があるひとり親家庭の保護者</p><p>18歳の年度末までの児童を養育していること</p><p>生活保護を受給していないこと</p><p>所得が一定基準以下であること</p></div><p>豊島区役所子ども家庭部子育て支援課の窓口で申請します。</p><p><span class="marker">毎年8月に現況届の提出が必要</span>です。届出を怠ると支給が停止されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり月額13,500円</strong>です。年3回（4月・8月・12月）にまとめて支給されます。</p><p><span class="marker">国の児童扶養手当との併給が可能</span>ですが、所得制限が適用されます。</p><div class="note-box">事実婚状態にある場合は対象外です。住所変更や婚姻などの変更があった場合は速やかに届出が必要です。児童福祉施設に入所した場合も支給が停止されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-barrier-free',
    title: '豊島区 住宅バリアフリー改修助成制度',
    organization: '豊島区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['豊島区', 'バリアフリー', '助成金'],
    eligibility: '豊島区に住所を有する65歳以上の方または障害のある方で、住宅のバリアフリー改修が必要な方',
    applicationPeriod: '通年',
    description: '豊島区が実施する住宅バリアフリー改修助成制度です。高齢者や障害者の住宅のバリアフリー改修に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 住宅バリアフリー改修助成制度は、<span class="marker">65歳以上の高齢者や障害のある方が暮らす住宅のバリアフリー改修</span>にかかる費用を助成する制度です。</p><p>豊島区は人口密度が日本一高い区として知られ、古いマンションや住宅が密集しています。高齢者や障害のある方が安全に暮らすためには、住宅の段差解消や手すりの設置といったバリアフリー化が不可欠です。介護保険とは別枠の区独自助成として実施しています。</p><p><span class="marker-green">介護保険の住宅改修費と併用可能な区独自の制度</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置（玄関・浴室・トイレ・階段等）</p><p>段差の解消（居室・玄関のかさ上げ等）</p><p>便器の洋式化</p><p>浴室・洗面所の改修</p></div><p>豊島区役所高齢者福祉課または障害福祉課に申請書と見積書を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定後に着工してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限20万円</strong>です。住民税非課税世帯は全額助成、課税世帯は自己負担があります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と併用可能</span>で、合わせて最大40万円程度の支援を受けられます。</p><div class="note-box">賃貸住宅の場合は所有者の同意書が必要です。分譲マンションの共用部分の改修は対象外です。豊島区では無料の住宅改修相談も実施していますので、工事内容の選定にお役立てください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-infertility',
    title: '豊島区 不妊・不育症治療費助成制度',
    organization: '豊島区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['豊島区', '不妊治療', '助成金'],
    eligibility: '豊島区に住所を有する不妊治療・不育症治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から1年以内）',
    description: '豊島区が実施する不妊・不育症治療費助成制度です。保険適用外の不妊・不育症治療にかかる費用の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 不妊・不育症治療費助成制度は、<span class="marker">保険適用外の不妊治療および不育症治療</span>にかかる費用の一部を助成する制度です。</p><p>豊島区はかつて「消滅可能性都市」と指摘されたことをきっかけに、出生率向上に向けた施策を強化しています。不妊治療・不育症治療は精神的にも経済的にも大きな負担を伴うものであり、子どもを望む夫婦を支援する重要な制度です。</p><p><span class="marker-green">東京都の助成制度に上乗せする形で区独自の助成を実施</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>豊島区に住民登録がある夫婦（事実婚を含む）</p><p>保険適用外の不妊治療または不育症治療を受けていること</p><p>治療終了日から1年以内に申請すること</p></div><p>豊島区役所健康推進課に申請書、医療機関の証明書、領収書の写し等を提出します。</p><p><span class="marker">不育症治療も助成対象に含まれている</span>点が特徴です。流産を繰り返すなどの不育症でお悩みの方も活用できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大10万円</strong>です。不妊治療・不育症治療それぞれについて申請可能です。</p><p><span class="marker">東京都の助成制度と併用する場合、自己負担の残額が区の助成対象</span>となります。</p><div class="highlight-box">豊島区では不妊・不育に関する専門相談窓口も設けています。治療の進め方や助成制度の活用方法について、専門スタッフに相談できます。治療開始前の相談も歓迎しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-afterschool',
    title: '豊島区 放課後子ども教室運営事業',
    organization: '豊島区',
    type: 'local',
    maxAmount: '利用料無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['豊島区', '放課後教室', '教育支援'],
    eligibility: '豊島区立小学校に在籍する児童',
    applicationPeriod: '通年（学校を通じて登録）',
    description: '豊島区が実施する放課後子ども教室運営事業です。区立小学校の全児童を対象に、放課後の安全な居場所と多彩な体験活動を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 放課後子ども教室運営事業は、<span class="marker">区立小学校のすべての児童</span>を対象に、放課後の安全な居場所を提供し、多彩な体験活動の機会を設ける事業です。</p><p>豊島区は文化・芸術のまちとしても知られ、放課後子ども教室では学習支援だけでなく、演劇ワークショップや音楽活動、科学実験教室など、区の特色を活かしたプログラムを実施しています。共働き家庭だけでなく、すべての児童が参加できます。</p><p><span class="marker-green">利用料は無料で、全区立小学校で実施</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊島区立小学校に在籍するすべての児童が対象です。</p><div class="summary-box" data-title="活動内容"><p>学習支援（宿題のサポート・自主学習）</p><p>体験活動（科学実験・工作・料理教室等）</p><p>文化・芸術活動（演劇・音楽・絵画等）</p><p>スポーツ活動（校庭・体育館での運動遊び）</p></div><p>学校を通じて年度初めに登録を行います。<strong>特別な申請手続きは不要</strong>で、参加したい日に自由に利用できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用料は<strong>無料</strong>です。一部の特別プログラム（材料費等）では実費負担が生じる場合があります。</p><p><span class="marker">最大午後5時まで利用可能</span>です。延長が必要な場合は、別途「学童クラブ」（有料）への申し込みをご検討ください。</p><div class="note-box">放課後子ども教室は学童クラブ（留守家庭児童向け）とは別事業です。学童クラブは就労要件があり有料ですが、放課後子ども教室は要件なく無料で利用できます。両方を組み合わせて利用することも可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-women-startup',
    title: '豊島区 女性活躍推進創業支援助成金',
    organization: '豊島区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['豊島区', '女性創業', '助成金'],
    eligibility: '豊島区内で新たに創業する女性、または創業後1年以内の女性',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '豊島区が実施する女性活躍推進創業支援助成金です。女性の創業を応援するため、初期費用を最大50万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 女性活躍推進創業支援助成金は、<span class="marker">区内で新たに創業する女性</span>を対象に、創業にかかる初期費用を助成する制度です。</p><p>豊島区は「としま女性活躍推進プラン」に基づき、女性の就業・創業支援に積極的に取り組んでいます。池袋周辺にはコワーキングスペースやインキュベーション施設が充実しており、女性起業家のネットワーク形成にも力を入れています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は50万円</strong>です。<span class="marker-green">区の創業スクールの受講が申請条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>豊島区内で創業する（または創業後1年以内の）女性</p><p>区が実施する創業スクールを受講済みであること</p><p>事業計画書を提出できること</p><p>区税の滞納がないこと</p></div><p>豊島区役所都市政策推進部に事業計画書と申請書を提出します。プレゼンテーション審査が実施されます。</p><p><span class="marker">豊島区ビジネスサポートセンターで無料の創業相談</span>が受けられます。事業計画の策定支援も行っています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。店舗改装費、設備費、広告宣伝費、ホームページ制作費等が対象です。</p><p><span class="marker">交付決定前の経費は対象外</span>です。必ず交付決定を受けてから事業を開始してください。</p><div class="highlight-box">豊島区では「としま女性起業家サロン」を定期開催しており、先輩起業家との交流やビジネスマッチングの機会が得られます。助成金と合わせて活用することで、事業の成功確率を高められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-nursing-equipment',
    title: '豊島区 高齢者紙おむつ等支給事業',
    organization: '豊島区',
    type: 'local',
    maxAmount: '月額6,000円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['豊島区', '介護用品', '支給'],
    eligibility: '豊島区に住所を有する要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '豊島区が実施する高齢者紙おむつ等支給事業です。在宅介護を行う家族の負担を軽減するため、紙おむつ等を月額6,000円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 高齢者紙おむつ等支給事業は、<span class="marker">在宅で要介護3以上の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>豊島区は人口密度日本一の区であり、限られた住空間での在宅介護は家族にとって大きな負担です。介護に必要な消耗品の経済的負担を軽減することで、在宅での介護継続を支援しています。</p><p><span class="marker-green">住民税非課税世帯は全額支給、課税世帯は一部自己負担</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>豊島区に住所を有する方が在宅で介護していること</p><p>介護を受ける方が要介護3以上であること</p><p>介護を受ける方が在宅で生活していること</p><p>紙おむつ等の常時使用が必要であること</p></div><p>豊島区役所高齢者福祉課またはお住まいの地域の高齢者総合相談センターで申請できます。</p><p><span class="marker">申請月の翌月から支給が開始</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,000円相当の介護用品</strong>が支給されます。紙おむつ、尿取りパッド、使い捨て手袋等から選択できます。</p><p><span class="marker">入院中・施設入所中は支給が停止</span>されます。状況変化があった場合は届出が必要です。</p><div class="note-box">要介護度が2以下に変更された場合は支給終了となります。入院中の紙おむつについては、医療機関が提供する場合がありますので入院先にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-energy-support',
    title: '豊島区 生活応援特別給付金',
    organization: '豊島区',
    type: 'local',
    maxAmount: '1世帯あたり3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '東京都',
    tags: ['豊島区', '生活応援', '給付金'],
    eligibility: '豊島区に住所を有する住民税非課税世帯等',
    applicationPeriod: '令和7年度中（通知到着後3か月以内）',
    description: '豊島区が実施する生活応援特別給付金です。物価高騰の影響を受ける住民税非課税世帯等に1世帯3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 生活応援特別給付金は、<span class="marker">物価高騰の影響を強く受ける住民税非課税世帯等</span>に対し、生活を支援するための給付金です。</p><p>豊島区は池袋を中心とした都心エリアであり、生活コストが高い地域です。エネルギー・食料品価格の上昇は特に低所得世帯への影響が大きく、区独自の給付制度として迅速な支援を実施しています。</p><p><span class="marker-green">住民税非課税世帯および家計急変世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊島区に住民登録があり、世帯全員の住民税が非課税の世帯が主な対象です。</p><div class="summary-box" data-title="申請方法"><p>対象世帯には区から確認書が届く</p><p>確認書に記入・返送するだけで完了</p><p>家計急変世帯は別途申請書を提出</p></div><p>確認書を受け取ったら、記載内容を確認のうえ<strong>3か月以内に返送</strong>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり3万円</strong>です。世帯人数にかかわらず一律です。</p><p><span class="marker">確認書の返送期限を過ぎると受給できません</span>ので、届いたら早めに手続きしてください。</p><div class="note-box">生活保護受給世帯も対象です。この給付金は非課税所得として扱われ、他の給付金や年金の計算には影響しません。DV避難者等で住民票を移していない方は個別にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toshima-seismic-diagnosis',
    title: '豊島区 木造住宅耐震診断助成制度',
    organization: '豊島区',
    type: 'local',
    maxAmount: '耐震診断費用の全額助成（上限15万円）',
    maxAmountNum: 15,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['豊島区', '耐震診断', '防災'],
    eligibility: '豊島区内に旧耐震基準の木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '豊島区が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>豊島区は日本一の人口密度を誇る区であり、古い木造住宅が密集する地域も多く残っています。首都直下地震への備えとして、まず住宅の耐震性能を把握することが重要です。区では耐震診断費用を全額助成し、診断のハードルを下げています。</p><p><span class="marker-green">診断費用は全額助成（上限15万円）で、自己負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>豊島区内に所在する木造住宅であること</p><p>1981年5月31日以前に着工（旧耐震基準）されたこと</p><p>地上2階建て以下であること</p><p>所有者自身が居住している住宅であること</p></div><p>豊島区役所建築課に申請書を提出します。区が派遣する耐震診断士が無料で診断を行います。</p><p><span class="marker">申請から診断実施まで約1〜2か月</span>かかります。余裕を持って申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用は<strong>全額助成（上限15万円）</strong>で、所有者の自己負担はありません。</p><p><span class="marker">診断の結果、耐震改修が必要と判定された場合は、別途「耐震改修助成」（最大150万円）</span>を利用できます。</p><div class="highlight-box">豊島区は「木密地域不燃化10年プロジェクト」の対象エリアを抱えており、耐震化・不燃化を重点的に推進しています。耐震診断を受けることで地震保険料の割引が受けられる場合もありますので、保険会社にも確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
