import { Grant } from '@/lib/types';

export const cityGrantsBatch48: Grant[] = [
  // ────────────────────────────────────────────────
  // 那覇市（沖縄県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'naha-childcare-subsidy',
    title: '那覇市 保育料軽減助成制度',
    organization: '那覇市',
    type: 'local',
    maxAmount: '第2子以降無料・第1子半額',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '沖縄県',
    tags: ['那覇市', '保育料', '助成金'],
    eligibility: '那覇市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '那覇市が実施する保育料軽減助成制度です。多子世帯を中心に保育料の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する世帯</span>を対象に、保育料の負担を軽減する制度です。</p><p>沖縄県の県庁所在地である那覇市は、首里城や国際通りを擁する観光と経済の中心地です。出生率が全国平均を上回る沖縄ならではの子育て支援として、多子世帯への手厚い軽減措置を設けています。</p><p><span class="marker-green">3歳未満児についても第2子以降は保育料が無料となり、第1子も所得に応じた軽減があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>那覇市に住民登録があり、認可保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>3〜5歳児：幼児教育・保育の無償化により全員無料</p><p>0〜2歳児 第1子：所得に応じた保育料（市独自の軽減あり）</p><p>0〜2歳児 第2子以降：無料</p></div><p>保育所等の入所申請時に自動的に判定されるため、<strong>別途の申請は原則不要</strong>です。所得の変動等で軽減区分が変わる場合は那覇市こどもみらい課へご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>0〜2歳の第1子について、那覇市独自の保育料軽減により<strong>国基準より低い保育料額表を適用</strong>しています。第2子以降は年齢を問わず無料です。</p><p><span class="marker">認可外保育施設を利用している場合は、別途「認可外保育施設利用料補助」制度</span>の対象となる場合があります。</p><div class="note-box">住民税非課税世帯は0〜2歳児も含めて保育料が無料です。年度途中の転入の場合は、前住所地の課税証明書が必要になることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-birth-bonus',
    title: '那覇市 出産応援給付金',
    organization: '那覇市',
    type: 'local',
    maxAmount: '妊婦5万円＋出産後5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '沖縄県',
    tags: ['那覇市', '出産祝い金', '給付金'],
    eligibility: '那覇市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '那覇市が実施する出産応援給付金です。妊娠届出時と出産後にそれぞれ5万円相当が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 出産応援給付金は、<span class="marker">妊娠届出時に5万円相当、出産後に5万円相当</span>の計10万円相当を支給する国の「出産・子育て応援交付金」事業に基づく制度です。</p><p>那覇市は沖縄県の人口の約23%が集中する都市で、核家族世帯の増加に伴い出産・子育てへの経済的支援の重要性が高まっています。本制度は経済的支援と伴走型相談支援を一体的に提供します。</p><p><span class="marker-green">所得制限なしで、那覇市に住むすべての妊婦・出産後の養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時に保健師等と面談→出産応援給付金（5万円相当）の申請</p><p>②出生届出後に面談→子育て応援給付金（5万円相当）の申請</p></div><p>那覇市保健所または各支所の窓口で妊娠届出・出生届出時に面談を受け、申請書を提出します。</p><p><span class="marker">面談の実施が給付の条件</span>となっていますので、届出時に必ず面談を受けてください。<strong>振込先口座情報と本人確認書類</strong>を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円相当</strong>が支給されます。多胎妊娠の場合、子育て応援給付金は子ども1人につき5万円です。</p><p><span class="marker">申請期限は原則として届出日から3か月以内</span>です。届出後に転出した場合は、届出時の自治体に申請してください。</p><div class="highlight-box">那覇市では給付金のほかに、妊娠期から子育て期にわたる「伴走型相談支援」を実施しています。子育ての悩みや不安を保健師に相談できますので、積極的に活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-housing-purchase',
    title: '那覇市 住宅取得支援補助金',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '沖縄県',
    tags: ['那覇市', '住宅取得', '補助金'],
    eligibility: '那覇市内に新たに住宅を取得する子育て世帯・若年世帯',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '那覇市が実施する住宅取得支援補助金です。市内に住宅を取得する子育て世帯・若年世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または購入する子育て世帯・若年世帯</span>に対して取得費用の一部を補助する制度です。</p><p>那覇市は地価が沖縄県内で最も高く、住宅取得のハードルが高い地域です。若い世代や子育て世帯の市内定住を促進するため、住宅取得にかかる費用を支援しています。</p><p>補助額は<strong>最大50万円</strong>で、<span class="marker-green">省エネ住宅や中古住宅の取得にも対応</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>那覇市内に住宅を新築・購入すること</p><p>申請者が40歳未満、または18歳未満の子どもがいる世帯であること</p><p>市税を滞納していないこと</p><p>5年以上継続して那覇市に居住する意思があること</p></div><p>那覇市役所まちなみ共創部住宅課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。契約前に事前相談を行うことをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>最大30万円</strong>で、省エネ住宅や多子世帯などの加算要件を満たすと<strong>最大50万円</strong>になります。</p><p><span class="marker">年間予算枠に限りがあり、先着順で受付終了</span>となります。年度始めの申請が有利です。</p><div class="note-box">投資用物件や別荘としての取得は対象外です。5年以内に那覇市から転出した場合は補助金の返還を求められることがありますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-infertility',
    title: '那覇市 不妊治療費助成事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '沖縄県',
    tags: ['那覇市', '不妊治療', '助成金'],
    eligibility: '那覇市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後の申請）',
    description: '那覇市が実施する不妊治療費助成事業です。特定不妊治療の自己負担額を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 不妊治療費助成事業は、<span class="marker">体外受精・顕微授精などの特定不妊治療を受ける夫婦</span>に対して、治療費の自己負担分を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、保険適用外の先進医療や自費診療部分については依然として高額な負担が生じます。那覇市では独自の上乗せ助成を行い、治療を希望するご夫婦を支援しています。</p><p><span class="marker-green">保険適用後の自己負担分に加え、先進医療の費用も一部助成対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>那覇市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>領収書の写し</p><p>夫婦の住民票・戸籍謄本</p></div><p>那覇市保健所健康増進課に申請します。<strong>治療が終了した日から起算して60日以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大30万円</strong>が助成されます。保険適用分の自己負担額と先進医療費の合計から助成額を算定します。</p><p><span class="marker">助成回数には上限があり、治療開始時の妻の年齢が40歳未満は通算6回、40歳以上43歳未満は通算3回</span>まで利用できます。</p><div class="note-box">43歳以上で治療を開始した場合は助成対象外です。沖縄県の同種の助成制度との併用については那覇市の窓口にご確認ください。男性不妊治療についても助成対象となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-scholarship',
    title: '那覇市 給付型奨学金制度',
    organization: '那覇市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '沖縄県',
    tags: ['那覇市', '奨学金', '教育支援'],
    eligibility: '那覇市に住所を有する世帯の大学生・専門学校生等',
    applicationPeriod: '毎年3月〜4月',
    description: '那覇市が実施する給付型奨学金制度です。経済的理由で修学困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 給付型奨学金制度は、<span class="marker">経済的な理由で大学等への修学が困難な学生</span>に対し、返還不要の奨学金を給付する制度です。</p><p>沖縄県は全国でも大学進学率がやや低い水準にあり、那覇市は独自の給付型奨学金によって学びの機会の格差解消に取り組んでいます。県外の大学へ進学する学生も多い沖縄では、生活費負担の軽減が大きな意味を持ちます。</p><p><span class="marker-green">返還不要の給付型であり、他の奨学金との併給も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>那覇市に引き続き1年以上住所を有する世帯の学生であること</p><p>大学・短大・専門学校等に在学または進学予定であること</p><p>世帯所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>毎年3月〜4月に那覇市教育委員会で申請を受け付けます。在学証明書、成績証明書、世帯の所得証明書などの提出が必要です。</p><p><span class="marker">選考により採用者が決定されるため、申請すれば必ず受給できるわけではありません</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>大学生：月額3万円、専門学校生：月額2万円</strong>が目安です。給付期間は正規の修業年限内です。</p><p><span class="marker">留年や退学の場合は給付が停止されます</span>。成績や在学状況について年度ごとに確認が行われます。</p><div class="highlight-box">日本学生支援機構の給付型奨学金や那覇市以外の奨学金とも併給可能です。複数の制度を組み合わせることで、経済的な不安を軽減して学業に専念できる環境が整います。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-sme-support',
    title: '那覇市 中小企業振興補助金',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '沖縄県',
    tags: ['那覇市', '中小企業支援', '補助金'],
    eligibility: '那覇市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '那覇市が実施する中小企業振興補助金です。販路開拓やIT化推進にかかる経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う販路開拓・IT化推進・人材育成</span>にかかる経費を補助する制度です。</p><p>那覇市は沖縄県経済の中枢であり、観光関連産業を中心に多くの中小企業が事業を展開しています。国際通りをはじめとする商業エリアの活性化や、デジタル化への対応を後押しする制度として活用されています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">展示会出展費、ホームページ制作費、社員研修費などが対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>那覇市内に事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>同一事業で他の補助金を受けていないこと</p><p>事業計画書を提出できること</p></div><p>那覇市役所商工農水課に事業計画書と申請書を提出します。審査により採否が決定されます。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>です。計画段階から事前に相談することをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。販路開拓（展示会出展費等）、IT化（ホームページ制作・業務システム導入等）、人材育成（研修費等）が主な対象です。</p><p><span class="marker">年度内に事業を完了し、実績報告書を提出する必要があります</span>。計画通りに実施できなかった場合は補助額が減額される場合があります。</p><div class="note-box">那覇市商工会議所や沖縄県よろず支援拠点でも経営相談を受けられます。補助金申請のアドバイスも受けられますので、申請前に活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-nursing-equipment',
    title: '那覇市 介護用品支給事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '沖縄県',
    tags: ['那覇市', '介護用品', '支給事業'],
    eligibility: '那覇市に住所を有し、要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '那覇市が実施する介護用品支給事業です。在宅で重度要介護者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>那覇市は高齢化率が沖縄県内でも比較的高い都市で、在宅介護を担うご家族の経済的負担を軽減することを目的としています。沖縄の温暖な気候は高齢者の健康にプラスですが、介護用品の消耗は避けられません。</p><p><span class="marker-green">市民税非課税世帯が対象で、月額6,250円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>那覇市に住所を有する要介護4または5の方を在宅で介護していること</p><p>要介護者および介護者の属する世帯が市民税非課税であること</p><p>要介護者が病院・施設に入院・入所していないこと</p></div><p>那覇市役所ちゃーがんじゅう課（地域包括ケア推進課）に申請書を提出します。</p><p><strong>担当のケアマネジャーを通じた申請</strong>も可能です。<span class="marker">申請月から支給開始</span>となりますので、早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当の介護用品（紙おむつ・尿取りパッド・使い捨て手袋等）</strong>がカタログから選択して支給されます。</p><p><span class="marker">入院や施設入所により在宅介護でなくなった場合は支給が停止</span>されます。状況の変化があった場合は速やかに届け出てください。</p><div class="note-box">介護保険の居宅サービスとの併用が可能です。ほかにも那覇市では介護者のリフレッシュ事業や介護相談窓口を設けていますので、介護の負担を感じたら早めにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-elderly-support',
    title: '那覇市 高齢者外出支援事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '年間1万円相当',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '沖縄県',
    tags: ['那覇市', '高齢者支援', '外出支援'],
    eligibility: '那覇市に住所を有する70歳以上の高齢者',
    applicationPeriod: '毎年4月〜（年度内随時）',
    description: '那覇市が実施する高齢者外出支援事業です。70歳以上の高齢者にバス・モノレール乗車券等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 高齢者外出支援事業は、<span class="marker">70歳以上の高齢者の社会参加と健康維持</span>を目的に、公共交通機関の乗車券等を支給する制度です。</p><p>那覇市は沖縄都市モノレール（ゆいレール）や路線バスが市内交通の柱です。外出機会の確保は高齢者の閉じこもり予防やフレイル対策に効果的であり、那覇市では公共交通利用を支援することで健康寿命の延伸を図っています。</p><p><span class="marker-green">モノレール・バスの乗車券またはタクシー利用券から選択できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>那覇市に住民登録のある70歳以上の方が対象です。</p><div class="summary-box" data-title="選択できる乗車券等"><p>ゆいレール・バス共通乗車券</p><p>タクシー利用券</p><p>その他市が指定する交通サービス利用券</p></div><p>那覇市役所ちゃーがんじゅう課または各支所の窓口で申請します。<strong>本人確認書類（運転免許証・保険証等）</strong>を持参してください。</p><p><span class="marker">年度ごとの申請が必要です</span>。誕生月に合わせた案内が届く場合もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>1万円相当の乗車券・利用券</strong>が支給されます。利用期間は当該年度末までです。</p><p><span class="marker">未使用分の繰り越しや換金はできません</span>。年度内に使い切るよう計画的にご利用ください。</p><div class="highlight-box">那覇市では、ゆいレール沿線のまちづくりと一体で高齢者の外出環境の整備を進めています。買い物や通院だけでなく、地域のサークル活動や文化施設への外出にもご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'naha-seismic-diagnosis',
    title: '那覇市 木造住宅耐震診断助成事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '診断費用の全額（上限あり）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '沖縄県',
    tags: ['那覇市', '耐震診断', '防災'],
    eligibility: '那覇市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '那覇市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>那覇市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>沖縄県は台風対策としてRC造（鉄筋コンクリート造）の住宅が多い地域ですが、一部に木造住宅も存在します。南海トラフ巨大地震のリスクもあり、那覇市は木造住宅の耐震化を推進しています。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断を受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>那覇市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>所有者本人が居住していること</p></div><p>那覇市役所建築指導課に申請書を提出します。申請後、市が認定した耐震診断士が自宅を訪問して診断を行います。</p><p><span class="marker">診断結果をもとに、必要に応じて耐震改修補助の案内</span>も受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は原則として全額助成（自己負担なし）</strong>です。市が指定する耐震診断士が実施します。</p><p><span class="marker">診断の結果、耐震性が不足している場合は耐震改修工事の補助制度</span>（別途申請）も利用できます。</p><div class="note-box">RC造やSRC造の住宅は本事業の対象外です。マンション等の共同住宅については別途の耐震診断補助制度がありますので那覇市の窓口にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 旭川市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'asahikawa-childcare-subsidy',
    title: '旭川市 保育料軽減助成制度',
    organization: '旭川市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['旭川市', '保育料', '助成金'],
    eligibility: '旭川市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '旭川市が実施する保育料軽減助成制度です。多子世帯を中心に保育料の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する世帯</span>の保育料を軽減する制度です。</p><p>北海道第2の都市である旭川市は、旭山動物園や大雪山連峰の美しい景観で知られています。冬季の厳しい寒さの中でも安心して子育てできる環境づくりの一環として、保育料の負担軽減に取り組んでいます。</p><p><span class="marker-green">0〜2歳児の第2子以降は保育料が無料となり、第1子も市独自の軽減措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>旭川市に住民登録があり、認可保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>3〜5歳児：幼児教育・保育の無償化により全員無料</p><p>0〜2歳児 第1子：所得に応じた保育料（市独自の軽減あり）</p><p>0〜2歳児 第2子以降：無料</p></div><p>保育施設の入所申請時に自動的に判定されるため、<strong>別途の申請は原則不要</strong>です。世帯状況の変更がある場合は旭川市子育て支援部へご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>0〜2歳の第1子について、旭川市独自の軽減により<strong>国基準より低い保育料額表を適用</strong>しています。第2子以降は無料です。</p><p><span class="marker">認可外保育施設を利用している場合は、別途「認可外保育施設利用料補助」制度</span>が適用される場合があります。</p><div class="note-box">住民税非課税世帯は年齢・子どもの順番を問わず保育料が無料です。年度途中の転入時は前住所地の課税情報が必要になる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-birth-bonus',
    title: '旭川市 出産・子育て応援給付金',
    organization: '旭川市',
    type: 'local',
    maxAmount: '妊婦5万円＋出産後5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['旭川市', '出産祝い金', '給付金'],
    eligibility: '旭川市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '旭川市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円</span>の計10万円を支給する制度です。</p><p>旭川市は広大な北海道の内陸部に位置し、冬季は氷点下20度を下回ることもある厳しい気候です。妊娠期から出産・育児期にわたる経済的支援と、保健師による伴走型相談支援を一体的に提供し、安心して子育てできる環境を整えています。</p><p><span class="marker-green">所得制限なしで、旭川市に住むすべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時に保健師と面談→出産応援給付金（5万円）の申請</p><p>②出生届出後に面談→子育て応援給付金（5万円）の申請</p></div><p>旭川市保健所または各地域センターの窓口で面談を受け、申請書を提出します。</p><p><span class="marker">面談の実施が給付の必須条件</span>です。<strong>本人確認書類と振込先口座情報</strong>をお持ちください。冬季は移動が大変な場合、電話やオンラインでの面談にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎妊娠の場合、子育て応援給付金は子ども1人につき5万円です。</p><p><span class="marker">申請期限は届出日から原則3か月以内</span>です。届出後に市外へ転出した場合は届出時の自治体で申請してください。</p><div class="highlight-box">旭川市では給付金のほかに、妊娠期から子育て期を通じた「伴走型相談支援」を実施しています。冬季の子育ての不安や産後うつの予防にも対応していますので、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-newlywed-rent',
    title: '旭川市 結婚新生活支援事業',
    organization: '旭川市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '北海道',
    tags: ['旭川市', '新婚家賃', '補助金'],
    eligibility: '旭川市で新生活を始める新婚世帯（夫婦ともに39歳以下）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '旭川市が実施する結婚新生活支援事業です。新婚世帯の住居費や引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 結婚新生活支援事業は、<span class="marker">新たに婚姻届を提出した夫婦の住居費（家賃・住宅取得費）や引越費用</span>を補助する制度です。</p><p>北海道第2の都市である旭川市は、家具製造業が盛んで住環境の整った街として知られています。若い世代の市内定住を促進するため、結婚を機に新生活をスタートする世帯を経済的に支援しています。</p><p>夫婦ともに29歳以下の場合<strong>最大60万円</strong>、30〜39歳の場合<strong>最大30万円</strong>が補助されます。<span class="marker-green">家賃だけでなく住宅購入費や引越費用も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届を提出した日の年齢が夫婦ともに39歳以下であること</p><p>世帯所得が500万円未満であること</p><p>旭川市内に住居を定めていること</p><p>市税を滞納していないこと</p></div><p>旭川市役所市民生活課に申請書と婚姻届受理証明書、賃貸契約書または売買契約書等を提出します。</p><p><span class="marker">婚姻届提出日から1年以内に申請が必要</span>です。対象となる費用の領収書は必ず保管してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助上限は<strong>夫婦ともに29歳以下：60万円、30〜39歳を含む場合：30万円</strong>です。家賃、敷金・礼金、住宅購入費、引越業者への支払いが対象です。</p><p><span class="marker">年間の予算枠に限りがあり、先着順で受付終了</span>となります。婚姻届を出したら早めに申請しましょう。</p><div class="note-box">勤務先からの住宅手当が支給されている場合は、手当額を差し引いた額が補助対象です。生活保護世帯の方は対象外となります。旭川市は冬季の暖房費負担が大きいため、住居費補助は特に有効です。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-disability-medical',
    title: '旭川市 重度障害者医療費助成制度',
    organization: '旭川市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['旭川市', '障害者医療', '助成金'],
    eligibility: '旭川市に住所を有する重度の障害がある方',
    applicationPeriod: '通年',
    description: '旭川市が実施する重度障害者医療費助成制度です。重度の障害がある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 重度障害者医療費助成制度は、<span class="marker">身体障害者手帳1級・2級、療育手帳A判定、精神障害者保健福祉手帳1級</span>の方を対象に、保険診療の自己負担分を助成する制度です。</p><p>旭川市は北海道の中核市として、医療大学や複数の基幹病院を有する医療環境の充実した都市です。障害のある方が安心して医療を受けられるよう、自己負担の軽減を行っています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象で、自己負担は原則無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定</p><p>精神障害者保健福祉手帳1級</p><p>内部障害（心臓・腎臓等）3級の一部</p></div><p>旭川市役所障害福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類を持参してください。</p><p>申請後、<strong>「重度心身障害者医療費受給者証」</strong>が交付されます。<span class="marker">医療機関の窓口で受給者証を提示するだけ</span>で助成が適用されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>全額助成（窓口負担なし）</strong>となります。北海道内の医療機関では受給者証の提示で完結します。</p><p><span class="marker">道外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。65歳以上で新たに障害者手帳を取得した場合は後期高齢者医療制度への加入が必要となる場合がありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-school-lunch',
    title: '旭川市 学校給食費助成制度',
    organization: '旭川市',
    type: 'local',
    maxAmount: '給食費の全額または一部',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '北海道',
    tags: ['旭川市', '給食費', '教育支援'],
    eligibility: '旭川市立小中学校に在籍する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '旭川市が実施する学校給食費助成制度です。経済的な理由で給食費の支払いが困難な世帯に助成を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 学校給食費助成制度は、<span class="marker">経済的な理由で学校給食費の支払いが困難な世帯</span>に対し、給食費の全額または一部を助成する制度です。</p><p>旭川市は北海道の内陸部に位置し、地元の農畜産物を活用した学校給食で知られています。大雪山系の清冽な水と北海道産の食材を使った栄養豊富な給食を、経済的な理由で食べられない子どもが出ないよう支援しています。</p><p><span class="marker-green">就学援助制度の一環として給食費が全額支給されるほか、多子世帯向けの独自軽減策も用意</span>されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>就学援助認定世帯（準要保護）：給食費全額支給</p><p>生活保護世帯（要保護）：給食費全額支給</p><p>第3子以降の児童生徒：市独自の軽減措置あり</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要事項を記入し、学校または旭川市教育委員会学校教育部に提出してください。</p><p><span class="marker">年度途中の転入や家計急変の場合も随時申請を受け付けています</span>。所得がわかる書類の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>就学援助認定世帯は<strong>学校給食費の全額が支給</strong>されます。小学校で年間約5万円、中学校で年間約6万円程度の負担軽減となります。</p><p><span class="marker">認定の可否は世帯全体の所得で判定され、結果は6月頃に通知</span>されます。不認定でも家計急変等があれば再申請可能です。</p><div class="highlight-box">旭川市では給食費のほか、学用品費・修学旅行費・通学費なども就学援助の対象です。特に冬季の通学にかかる防寒着やスキー用品についても支援がありますので、詳しくは学校または教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-telework-bonus',
    title: '旭川市 テレワーク導入支援補助金',
    organization: '旭川市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '北海道',
    tags: ['旭川市', 'テレワーク', '補助金'],
    eligibility: '旭川市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '旭川市が実施するテレワーク導入支援補助金です。中小企業のテレワーク環境整備にかかる費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 テレワーク導入支援補助金は、<span class="marker">市内の中小企業者がテレワーク環境を新たに整備する際</span>の費用を補助する制度です。</p><p>北海道第2の都市でありながら、冬季の積雪や低温による通勤困難はビジネス上の大きな課題です。テレワークの導入は、従業員の通勤負担軽減と生産性向上の両面で効果が期待されており、旭川市はその普及を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信機器、ソフトウェア、クラウドサービスの導入費用が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>旭川市内に事業所を有する中小企業者であること</p><p>新たにテレワークを導入すること</p><p>テレワーク実施計画書を提出できること</p><p>市税を滞納していないこと</p></div><p>旭川市役所経済部産業振興課に申請書とテレワーク実施計画書を提出します。</p><p><span class="marker">交付決定前に購入・契約した経費は対象外</span>です。導入を検討している段階で事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。パソコン、ウェブカメラ、VPN機器、クラウドサービス初期費用、セキュリティソフト等が対象です。</p><p><span class="marker">導入後にテレワークの実施状況報告書の提出が必要</span>です。実績が確認できない場合は補助金の返還を求められることがあります。</p><div class="note-box">個人事業主も対象です。テレワーク導入に関する無料相談は旭川商工会議所でも受けられます。冬季の除雪困難時にも業務を継続できる体制づくりにぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-nursing-home-reform',
    title: '旭川市 介護住宅改修助成事業',
    organization: '旭川市',
    type: 'local',
    maxAmount: '最大20万円（介護保険併用）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['旭川市', '介護住宅改修', '助成金'],
    eligibility: '旭川市に住所を有し、要介護・要支援認定を受けた方の住宅を改修する方',
    applicationPeriod: '通年',
    description: '旭川市が実施する介護住宅改修助成事業です。バリアフリー改修工事に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 介護住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>に対して費用の一部を助成する制度です。</p><p>旭川市は冬季に大量の積雪があり、住宅内外の段差や滑りやすい床が高齢者にとって大きなリスクとなります。手すりの設置や段差解消、浴室の改修などにより、在宅生活の安全性を高めることが本制度の目的です。</p><p><span class="marker-green">介護保険の住宅改修費（上限20万円）に加えて、市独自の上乗せ助成を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの設置（玄関・廊下・浴室・トイレ等）</p><p>床段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取り替え</p><p>洋式便器への取り替え</p></div><p>旭川市役所介護保険課または担当のケアマネジャーに相談のうえ、工事着手前に申請書を提出します。</p><p><span class="marker">必ず工事着手前に申請が必要</span>です。完了後に事後報告書と領収書を提出して精算します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>介護保険の住宅改修費は<strong>対象工事費の9割（上限20万円の9割＝18万円）</strong>が支給されます。旭川市独自の上乗せにより、さらに自己負担が軽減される場合があります。</p><p><span class="marker">1人につき通算20万円が上限</span>で、転居や要介護度が3段階以上上がった場合は再度利用できます。</p><div class="highlight-box">旭川市では冬季の凍結対策として、玄関の風除室設置や融雪設備に対する別途の補助制度もあります。高齢者の冬場の転倒予防には住宅改修が非常に効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-energy-support',
    title: '旭川市 省エネ設備導入補助金',
    organization: '旭川市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '北海道',
    tags: ['旭川市', '省エネ', '補助金'],
    eligibility: '旭川市内に住所を有し、省エネ設備を導入する市民',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '旭川市が実施する省エネ設備導入補助金です。太陽光発電や高効率給湯器の導入に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 省エネ設備導入補助金は、<span class="marker">住宅への太陽光発電システム・蓄電池・高効率給湯器等の省エネ設備導入</span>に対して費用の一部を補助する制度です。</p><p>旭川市は冬季の暖房費が全国でもトップクラスに高い地域です。省エネ設備の普及によりエネルギーコストの削減と二酸化炭素排出量の削減を同時に実現することを目指しています。</p><p><span class="marker-green">太陽光発電、蓄電池、エネファーム、エコキュートなど複数の設備が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：上限10万円</p><p>家庭用蓄電池：上限10万円</p><p>高効率給湯器（エコキュート等）：上限5万円</p><p>太陽光＋蓄電池の同時導入：上限20万円</p></div><p>旭川市役所環境部環境総務課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置工事着手前に申請が必要</span>です。交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>複数の設備を同時に導入する場合は合算して<strong>最大20万円</strong>まで補助されます。設備の種類により個別の上限額が設定されています。</p><p><span class="marker">予算に限りがあるため、先着順で受付終了</span>となります。年度始めの早い段階での申請がおすすめです。</p><div class="note-box">中古品の購入やリース契約は対象外となる場合があります。旭川市の冬季はマイナス20度を下回ることもあり、高効率暖房設備の導入は光熱費の大幅な削減につながります。国の補助金との併用が可能な場合もありますので事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-bousai-equipment',
    title: '旭川市 防災設備設置補助金',
    organization: '旭川市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['旭川市', '防災設備', '補助金'],
    eligibility: '旭川市内に住宅を所有する市民',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '旭川市が実施する防災設備設置補助金です。住宅の防災設備設置にかかる費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 防災設備設置補助金は、<span class="marker">住宅への感震ブレーカー・家具転倒防止器具・防火設備等の設置</span>にかかる費用を補助する制度です。</p><p>旭川市は冬季の暖房使用に伴う火災リスクが高く、また積雪による建物被害も懸念される地域です。住宅の防災力を高めることで、市民の安全・安心な暮らしを支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は10万円</strong>です。<span class="marker-green">感震ブレーカーや住宅用火災警報器の更新も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>感震ブレーカー</p><p>家具転倒防止器具（固定金具・突っ張り棒等）</p><p>住宅用火災警報器の設置・更新</p><p>ガラス飛散防止フィルム</p></div><p>旭川市役所防災安全部危機管理課に申請書と見積書を提出します。</p><p><span class="marker">設備の購入・設置前に申請が必要</span>です。設置完了後に実績報告書と領収書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。複数の設備を同時に設置する場合は合算できます。</p><p><span class="marker">1世帯につき1回の利用が原則</span>です。予算に限りがあり先着順での受付となります。</p><div class="note-box">旭川市は冬季に暖房器具を長時間使用するため、火災予防が特に重要です。住宅用火災警報器は設置から10年以上経過している場合は交換を推奨しています。町内会単位でのまとめ買いについては別途相談に応じています。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 函館市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hakodate-childcare-subsidy',
    title: '函館市 保育料軽減助成制度',
    organization: '函館市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['函館市', '保育料', '助成金'],
    eligibility: '函館市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '函館市が実施する保育料軽減助成制度です。多子世帯を中心に保育料の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する世帯</span>の保育料を軽減する制度です。</p><p>函館山の夜景と異国情緒ある街並みで知られる函館市は、北海道でも有数の観光都市です。少子化対策として子育て世帯の経済的負担を軽減し、市内への定住促進を図っています。</p><p><span class="marker-green">0〜2歳児の第2子以降は保育料が無料で、第1子にも市独自の軽減措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>函館市に住民登録があり、認可保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>3〜5歳児：幼児教育・保育の無償化により全員無料</p><p>0〜2歳児 第1子：所得に応じた保育料（市独自の軽減あり）</p><p>0〜2歳児 第2子以降：無料</p></div><p>保育施設の入所申請時に自動判定されるため、<strong>別途の申請は原則不要</strong>です。世帯構成や所得の変動がある場合は函館市子ども未来部にご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>0〜2歳の第1子について、函館市独自の軽減により<strong>国基準より低い保育料が適用</strong>されます。第2子以降は年齢を問わず無料です。</p><p><span class="marker">認可外保育施設利用者には別途の補助制度が適用される場合があります</span>。</p><div class="note-box">住民税非課税世帯はすべての子どもの保育料が無料です。函館市では保育士確保にも力を入れており、待機児童の解消と保育の質の向上を同時に推進しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-birth-bonus',
    title: '函館市 出産・子育て応援給付金',
    organization: '函館市',
    type: 'local',
    maxAmount: '妊婦5万円＋出産後5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['函館市', '出産祝い金', '給付金'],
    eligibility: '函館市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '函館市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円</span>の計10万円を支給する制度です。</p><p>函館市は五稜郭や函館朝市で全国的に知られる港町で、異国文化が根付くユニークな街です。人口減少の課題に対応するため、妊娠期から切れ目のない支援を提供し、安心して出産・子育てできる環境を整備しています。</p><p><span class="marker-green">所得制限なしで、函館市に住むすべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時に保健師と面談→出産応援給付金（5万円）の申請</p><p>②出生届出後に面談→子育て応援給付金（5万円）の申請</p></div><p>函館市保健所または各支所の窓口で面談を受け、申請書を提出します。</p><p><span class="marker">面談の実施が給付の条件</span>です。<strong>本人確認書類と振込先口座情報</strong>をお持ちください。冬季の移動が困難な場合は電話やオンラインでの面談にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎妊娠の場合は子ども1人につき子育て応援給付金5万円が加算されます。</p><p><span class="marker">申請期限は届出日から原則3か月以内</span>です。届出後の転出の場合は届出時の自治体で申請してください。</p><div class="highlight-box">函館市では給付金のほか、保健師による「伴走型相談支援」を妊娠期から子育て期にかけて実施しています。産後ケア事業や子育てサロンなど、函館市の子育て資源を紹介してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-housing-purchase',
    title: '函館市 住宅取得支援補助金',
    organization: '函館市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '北海道',
    tags: ['函館市', '住宅取得', '補助金'],
    eligibility: '函館市内に新たに住宅を取得する子育て世帯・移住者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '函館市が実施する住宅取得支援補助金です。市内に住宅を取得する子育て世帯・移住者に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または購入する子育て世帯や市外からの移住者</span>に対して取得費用の一部を補助する制度です。</p><p>函館山の麓に広がる函館市は、歴史的な街並みと豊かな海の幸で知られ、移住先としても人気があります。人口減少対策として定住人口の増加を目指し、住宅取得への支援を充実させています。</p><p>基本補助額に加え、子育て世帯や市外からの転入者には加算があり<strong>最大50万円</strong>が補助されます。<span class="marker-green">中古住宅の取得も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>函館市内に住宅を新築・購入すること</p><p>子育て世帯（18歳未満の子どもがいる）または市外からの転入者であること</p><p>市税を滞納していないこと</p><p>5年以上継続して函館市に居住する意思があること</p></div><p>函館市役所都市建設部住宅課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。事前相談を受け付けていますので、購入前にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>最大30万円</strong>で、子育て世帯加算・移住者加算を含めて<strong>最大50万円</strong>となります。新築・中古を問いません。</p><p><span class="marker">年間予算に限りがあり先着順で受付終了</span>となります。年度初めの申請をおすすめします。</p><div class="note-box">別荘や投資用物件としての取得は対象外です。5年以内に函館市から転出した場合は補助金の返還を求められます。函館市では空き家バンク制度も運営しており、中古住宅の物件探しにも活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-disability-medical',
    title: '函館市 重度障害者医療費助成制度',
    organization: '函館市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['函館市', '障害者医療', '助成金'],
    eligibility: '函館市に住所を有する重度の障害がある方',
    applicationPeriod: '通年',
    description: '函館市が実施する重度障害者医療費助成制度です。重度の障害がある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 重度障害者医療費助成制度は、<span class="marker">身体障害者手帳1級・2級、療育手帳A判定、精神障害者保健福祉手帳1級</span>の方を対象に、保険診療の自己負担分を助成する制度です。</p><p>函館市は北海道南部の中核市として、函館五稜郭病院をはじめ充実した医療機関が集積しています。障害のある方が経済的な不安なく適切な医療を受けられるよう、自己負担分を全額助成しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象で、窓口負担が原則無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定</p><p>精神障害者保健福祉手帳1級</p><p>内部障害（心臓・腎臓等）3級の一部</p></div><p>函館市役所保健福祉部障がい保健福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類を持参してください。</p><p>申請後、<strong>「重度心身障害者医療費受給者証」</strong>が交付されます。<span class="marker">北海道内の医療機関では受給者証の提示で窓口負担がなくなります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>全額助成</strong>されます。北海道内の医療機関であれば現物給付（窓口無料）で対応されます。</p><p><span class="marker">道外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>で助成を受けます。領収書を保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は対象外です。函館市では障害者の地域生活を支援する相談窓口も設置していますので、医療以外の困りごとについてもお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-scholarship',
    title: '函館市 給付型奨学金制度',
    organization: '函館市',
    type: 'local',
    maxAmount: '月額2万円',
    maxAmountNum: 24,
    category: 'education',
    prefecture: '北海道',
    tags: ['函館市', '奨学金', '教育支援'],
    eligibility: '函館市に住所を有する世帯の大学生・専門学校生等',
    applicationPeriod: '毎年3月〜4月',
    description: '函館市が実施する給付型奨学金制度です。経済的理由で修学困難な学生に月額最大2万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 給付型奨学金制度は、<span class="marker">経済的な理由で大学等への修学が困難な学生</span>に対し、返還不要の奨学金を給付する制度です。</p><p>函館市には公立はこだて未来大学をはじめ複数の高等教育機関があり、学術・研究の街としての側面も持っています。地元学生の修学を支援し、将来の地域人材を育成することを目的としています。</p><p><span class="marker-green">返還不要の給付型であり、日本学生支援機構等の奨学金との併給も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>函館市に引き続き1年以上住所を有する世帯の学生であること</p><p>大学・短大・専門学校等に在学または進学予定であること</p><p>世帯所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>毎年3月〜4月に函館市教育委員会で申請を受け付けます。在学証明書、成績証明書、世帯の所得証明書等の提出が必要です。</p><p><span class="marker">採用人数に限りがあるため、選考により採用が決定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>月額2万円</strong>で、給付期間は正規の修業年限内（大学4年間等）です。</p><p><span class="marker">留年や退学の場合は給付が停止</span>されます。年度ごとに成績・在学状況の確認があります。</p><div class="highlight-box">函館市では奨学金のほか、大学等の学費減免制度の相談窓口も設けています。公立はこだて未来大学への進学を考えている方には、大学独自の授業料減免制度もあわせて活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-sme-support',
    title: '函館市 中小企業販路拡大補助金',
    organization: '函館市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '北海道',
    tags: ['函館市', '中小企業支援', '補助金'],
    eligibility: '函館市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '函館市が実施する中小企業販路拡大補助金です。展示会出展や商談会参加にかかる費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 中小企業販路拡大補助金は、<span class="marker">市内中小企業者が行う展示会出展・商談会参加・ECサイト構築</span>等の販路開拓にかかる費用を補助する制度です。</p><p>函館市は水産加工業や食品製造業が盛んで、函館朝市に代表される海産物ブランドは全国的に知られています。地域産品の販路拡大を後押しし、市内経済の活性化を図ることが本制度の目的です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">海外展示会への出展も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>展示会・商談会の出展料・ブース設営費</p><p>旅費・輸送費</p><p>販促物の制作費</p><p>ECサイトの構築・改修費</p></div><p>函館市役所経済部商業振興課に事業計画書と申請書を提出します。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>です。参加を予定している展示会等の情報を添えて事前に相談してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。年度内に事業を完了し実績報告書を提出する必要があります。</p><p><span class="marker">同一年度内に1事業者1回の利用が原則</span>です。予算に限りがあり先着順で受付終了となります。</p><div class="note-box">函館商工会議所や北海道中小企業総合支援センターでも経営支援を受けられます。函館ブランドを活かした販路拡大は審査でも高く評価される傾向がありますので、地域資源を活用した計画づくりが有効です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-nursing-home-reform',
    title: '函館市 介護住宅改修助成事業',
    organization: '函館市',
    type: 'local',
    maxAmount: '最大20万円（介護保険併用）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['函館市', '介護住宅改修', '助成金'],
    eligibility: '函館市に住所を有し、要介護・要支援認定を受けた方の住宅を改修する方',
    applicationPeriod: '通年',
    description: '函館市が実施する介護住宅改修助成事業です。バリアフリー改修工事に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 介護住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>に対し、費用の一部を助成する制度です。</p><p>函館市は坂道が多い街として知られ、高齢者にとって住宅内外の移動に困難が生じやすい環境です。手すりの設置や段差解消、浴室改修などを通じて在宅生活の安全性を確保することが目的です。</p><p><span class="marker-green">介護保険の住宅改修費（上限20万円）に加えて市独自の上乗せ助成があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの設置（廊下・階段・浴室・トイレ等）</p><p>床段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取り替え</p><p>洋式便器への取り替え</p></div><p>函館市役所介護保険課または担当ケアマネジャーに相談のうえ、工事着手前に申請書を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。完了後に実績報告書と領収書を提出して精算となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>介護保険の住宅改修費として<strong>対象工事費の9割（上限20万円の9割＝18万円）</strong>が支給されます。函館市の上乗せにより自己負担がさらに軽減される場合があります。</p><p><span class="marker">1人につき通算20万円が上限</span>で、転居や要介護度が3段階以上上がった場合は再度利用可能です。</p><div class="highlight-box">函館市は坂道が多い街のため、玄関のスロープ設置や手すり取り付けの需要が特に高くなっています。冬季の凍結対策として玄関の融雪設備なども検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-elderly-support',
    title: '函館市 高齢者外出支援事業',
    organization: '函館市',
    type: 'local',
    maxAmount: '年間1万2千円相当',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '北海道',
    tags: ['函館市', '高齢者支援', '外出支援'],
    eligibility: '函館市に住所を有する70歳以上の高齢者',
    applicationPeriod: '毎年4月〜（年度内随時）',
    description: '函館市が実施する高齢者外出支援事業です。70歳以上の高齢者にバス・市電の乗車券等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 高齢者外出支援事業は、<span class="marker">70歳以上の高齢者の社会参加と健康維持</span>を目的に、公共交通機関の乗車券等を支給する制度です。</p><p>函館市は坂道が多く、高齢者の外出には公共交通機関の利用が不可欠です。路面電車（函館市電）とバス路線を活用し、高齢者の閉じこもり予防と介護予防につなげています。</p><p><span class="marker-green">函館市電・バス共通乗車券またはタクシー利用券から選択</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>函館市に住民登録のある70歳以上の方が対象です。</p><div class="summary-box" data-title="選択できる乗車券等"><p>函館市電・バス共通乗車券</p><p>タクシー利用券</p></div><p>函館市役所保健福祉部高齢福祉課または各支所の窓口で申請します。<strong>本人確認書類</strong>を持参してください。</p><p><span class="marker">年度ごとの申請が必要</span>です。対象年齢に達した方には個別に案内が届く場合もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>1万2千円相当の乗車券・利用券</strong>が支給されます。利用期間は当該年度末までです。</p><p><span class="marker">未使用分の繰り越しや換金はできません</span>。期限内に計画的にご利用ください。</p><div class="highlight-box">函館市電は観光名所を結ぶ便利な交通手段です。函館山のふもとや朝市エリアへのアクセスにも使えますので、日常の買い物だけでなく余暇活動にもご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-seismic-diagnosis',
    title: '函館市 木造住宅耐震診断助成事業',
    organization: '函館市',
    type: 'local',
    maxAmount: '診断費用の全額（上限あり）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['函館市', '耐震診断', '防災'],
    eligibility: '函館市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '函館市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>函館市は過去に北海道南西沖地震（1993年）の影響を受けた地域であり、地震への備えが重要です。歴史的建造物が多い西部地区をはじめ、築年数の経った木造住宅の耐震化を推進しています。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断を受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>函館市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>所有者本人が居住していること</p></div><p>函館市役所都市建設部建築行政課に申請書を提出します。申請後、市が認定した耐震診断士が訪問して診断を行います。</p><p><span class="marker">診断結果に基づき、耐震改修補助への案内</span>も受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は原則として自己負担なし</strong>で受けられます。市が指定する耐震診断士が実施します。</p><p><span class="marker">診断の結果、耐震性が不足している場合は耐震改修補助制度</span>（別途申請）も利用できます。</p><div class="note-box">函館市の西部地区には歴史的建造物が多く、文化財の保存と耐震化の両立が課題となっています。木造住宅のほか、RC造マンション等の耐震診断については別途の補助制度がありますので窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // いわき市（福島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'iwaki-childcare-subsidy',
    title: 'いわき市 保育料軽減助成制度',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['いわき市', '保育料', '助成金'],
    eligibility: 'いわき市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: 'いわき市が実施する保育料軽減助成制度です。多子世帯を中心に保育料の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する世帯</span>の保育料を軽減する制度です。</p><p>福島県の浜通りに位置するいわき市は、東日本大震災からの復興を遂げ、スパリゾートハワイアンズで知られる東北有数の都市です。子育て世帯の定住促進に向け、保育料の負担軽減に力を入れています。</p><p><span class="marker-green">0〜2歳児の第2子以降は保育料が無料で、第1子にも市独自の軽減措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>いわき市に住民登録があり、認可保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>3〜5歳児：幼児教育・保育の無償化により全員無料</p><p>0〜2歳児 第1子：所得に応じた保育料（市独自の軽減あり）</p><p>0〜2歳児 第2子以降：無料</p></div><p>保育施設の入所申請時に自動判定されるため、<strong>別途の申請は原則不要</strong>です。世帯状況の変更がある場合はいわき市こどもみらい部にご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>0〜2歳の第1子について、いわき市独自の軽減により<strong>国基準より低い保育料が適用</strong>されます。第2子以降は無料です。</p><p><span class="marker">認可外保育施設を利用している場合は別途の補助制度が適用される場合があります</span>。</p><div class="note-box">住民税非課税世帯はすべての子どもの保育料が無料です。いわき市は震災復興とともに子育て支援の充実を図っており、保育施設の整備も進んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-birth-bonus',
    title: 'いわき市 出産・子育て応援給付金',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '妊婦5万円＋出産後5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['いわき市', '出産祝い金', '給付金'],
    eligibility: 'いわき市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: 'いわき市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円</span>の計10万円を支給する制度です。</p><p>いわき市は福島県最大の面積を持つ広域都市で、太平洋に面した温暖な気候が特徴です。東日本大震災からの復興とともに、次世代を担う子どもたちを育む環境づくりに注力しています。</p><p><span class="marker-green">所得制限なしで、いわき市に住むすべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時に保健師と面談→出産応援給付金（5万円）の申請</p><p>②出生届出後に面談→子育て応援給付金（5万円）の申請</p></div><p>いわき市保健所または各支所の窓口で面談を受け、申請書を提出します。</p><p><span class="marker">面談が給付の必須条件</span>です。<strong>本人確認書類と振込先口座情報</strong>をお持ちください。広域都市のため、最寄りの支所での手続きが便利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎の場合、子育て応援給付金は子ども1人あたり5万円です。</p><p><span class="marker">申請期限は届出日から原則3か月以内</span>です。届出後に転出した場合は届出時の自治体で申請してください。</p><div class="highlight-box">いわき市では給付金に加え、妊娠期から子育て期を通じた「伴走型相談支援」を実施しています。地域の子育てサロンや産後ケア事業の情報も提供されますので、ぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-newlywed-rent',
    title: 'いわき市 結婚新生活支援事業',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '福島県',
    tags: ['いわき市', '新婚家賃', '補助金'],
    eligibility: 'いわき市で新生活を始める新婚世帯（夫婦ともに39歳以下）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: 'いわき市が実施する結婚新生活支援事業です。新婚世帯の住居費や引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 結婚新生活支援事業は、<span class="marker">新たに婚姻届を提出した夫婦の住居費（家賃・住宅取得費）や引越費用</span>を補助する制度です。</p><p>太平洋沿いに広がるいわき市は、温暖な気候と豊かな自然に恵まれた暮らしやすい都市です。震災復興を経て若い世代の定住を促進するため、結婚を機に新生活をスタートする世帯を手厚く支援しています。</p><p>夫婦ともに29歳以下で<strong>最大60万円</strong>、30〜39歳で<strong>最大30万円</strong>が補助されます。<span class="marker-green">家賃だけでなく住宅購入費・引越費用も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届を提出した日の年齢が夫婦ともに39歳以下であること</p><p>世帯所得が500万円未満であること</p><p>いわき市内に住居を定めていること</p><p>市税を滞納していないこと</p></div><p>いわき市役所市民協働部に申請書と婚姻届受理証明書、賃貸契約書等を提出します。</p><p><span class="marker">婚姻届提出日から1年以内に申請が必要</span>です。対象経費の領収書を保管しておいてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助上限は<strong>夫婦ともに29歳以下：60万円、30〜39歳を含む場合：30万円</strong>です。家賃、敷金・礼金、住宅購入費、引越費用が対象です。</p><p><span class="marker">年間予算に限りがあり先着順で受付終了</span>となります。婚姻届提出後は早めに申請しましょう。</p><div class="note-box">勤務先からの住宅手当は差し引かれます。生活保護世帯は対象外です。いわき市は市域が広いため、地区によって賃貸相場が大きく異なります。住まい探しにはいわき市の空き家バンクもご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-infertility',
    title: 'いわき市 不妊治療費助成事業',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '福島県',
    tags: ['いわき市', '不妊治療', '助成金'],
    eligibility: 'いわき市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後の申請）',
    description: 'いわき市が実施する不妊治療費助成事業です。特定不妊治療の自己負担額を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 不妊治療費助成事業は、<span class="marker">体外受精・顕微授精などの特定不妊治療を受ける夫婦</span>に対して、治療費の自己負担分を助成する制度です。</p><p>いわき市は福島県浜通りの中心都市として、地域の医療体制の充実に取り組んでいます。保険適用外の先進医療費など、不妊治療にかかる経済的負担を軽減し、子どもを望むご夫婦を支援します。</p><p><span class="marker-green">保険適用後の自己負担分に加え、先進医療費も一部助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>いわき市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票・戸籍謄本</p></div><p>いわき市保健所に申請します。<strong>治療終了日から60日以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大30万円</strong>が助成されます。保険適用分の自己負担額と先進医療費が対象です。</p><p><span class="marker">助成回数は治療開始時の妻の年齢により、40歳未満は通算6回、40〜43歳未満は通算3回</span>が上限です。</p><div class="note-box">43歳以上で治療を開始した場合は対象外です。福島県の助成制度との併用については窓口でご確認ください。いわき市内の不妊治療対応医療機関の情報も保健所で案内しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-school-lunch',
    title: 'いわき市 学校給食費助成制度',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '給食費の全額または一部',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '福島県',
    tags: ['いわき市', '給食費', '教育支援'],
    eligibility: 'いわき市立小中学校に在籍する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: 'いわき市が実施する学校給食費助成制度です。経済的な理由で給食費の支払いが困難な世帯に助成を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 学校給食費助成制度は、<span class="marker">経済的な理由で学校給食費の支払いが困難な世帯</span>に対し、給食費を助成する制度です。</p><p>いわき市は福島県沿岸部に位置し、新鮮な海の幸と地元農産物を活用した学校給食が提供されています。すべての子どもが栄養バランスの取れた食事を安心して食べられるよう、経済的に厳しい世帯を支援しています。</p><p><span class="marker-green">就学援助制度の認定世帯は給食費が全額支給されるほか、多子世帯向けの軽減策も用意</span>されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>就学援助認定世帯（準要保護）：給食費全額支給</p><p>生活保護世帯（要保護）：給食費全額支給</p><p>第3子以降の児童生徒：市独自の軽減措置あり</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に記入し、学校またはいわき市教育委員会に提出してください。</p><p><span class="marker">年度途中の転入や家計急変も随時申請を受け付けています</span>。所得証明書の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>就学援助認定世帯は<strong>給食費の全額が支給</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円程度の負担軽減となります。</p><p><span class="marker">認定は世帯全体の所得で判定され、結果は6月頃に通知</span>されます。不認定でも家計急変があれば再申請可能です。</p><div class="highlight-box">いわき市では給食費のほか、学用品費や修学旅行費も就学援助の対象です。震災以降、子どもの食育にも力を入れており、地元産食材を活用した特色ある給食が提供されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-telework-bonus',
    title: 'いわき市 テレワーク導入支援補助金',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '福島県',
    tags: ['いわき市', 'テレワーク', '補助金'],
    eligibility: 'いわき市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: 'いわき市が実施するテレワーク導入支援補助金です。中小企業のテレワーク環境整備に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 テレワーク導入支援補助金は、<span class="marker">市内の中小企業者がテレワーク環境を新たに整備する際</span>の費用を補助する制度です。</p><p>いわき市は広大な市域を持ち、事業所間の移動距離が長いことが特徴です。テレワークの導入は通勤時間の削減だけでなく、災害時のBCP（事業継続計画）対策としても有効であり、市として積極的に普及を推進しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信機器、ソフトウェア、クラウドサービスの導入費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>いわき市内に事業所を有する中小企業者であること</p><p>新たにテレワークを導入すること</p><p>テレワーク実施計画書を提出できること</p><p>市税を滞納していないこと</p></div><p>いわき市役所産業振興部商工労政課に申請書と計画書を提出します。</p><p><span class="marker">交付決定前に購入・契約した経費は対象外</span>です。導入を検討している段階で事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。パソコン、通信機器、VPN構築費、クラウドサービス導入費用等が対象です。</p><p><span class="marker">導入後にテレワーク実施状況の報告が必要</span>です。実績が確認できない場合は返還を求められることがあります。</p><div class="note-box">個人事業主も対象です。いわき商工会議所でもテレワーク導入の相談を受けられます。いわき市は広域都市のため、サテライトオフィスの活用と組み合わせることでより効果的なテレワーク体制を構築できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-nursing-equipment',
    title: 'いわき市 介護用品支給事業',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '福島県',
    tags: ['いわき市', '介護用品', '支給事業'],
    eligibility: 'いわき市に住所を有し、要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: 'いわき市が実施する介護用品支給事業です。在宅で重度要介護者を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>いわき市は広い市域に高齢者が分散して居住しており、在宅介護の負担が大きい地域です。介護用品の経済的負担を軽減し、住み慣れた地域での介護継続を支援しています。</p><p><span class="marker-green">市民税非課税世帯が対象で、月額6,250円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>いわき市に住所を有する要介護4または5の方を在宅で介護していること</p><p>要介護者および介護者の属する世帯が市民税非課税であること</p><p>要介護者が病院・施設に入院・入所していないこと</p></div><p>いわき市役所保健福祉部介護保険課または各支所で申請します。</p><p><strong>担当ケアマネジャー経由での申請</strong>も可能です。<span class="marker">申請月から支給が開始</span>されますので、早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当の介護用品（紙おむつ・尿取りパッド・使い捨て手袋等）</strong>をカタログから選んで受け取れます。</p><p><span class="marker">入院や施設入所で在宅介護でなくなった場合は支給停止</span>となります。状況変化は速やかに届け出てください。</p><div class="note-box">介護保険の居宅サービスと併用可能です。いわき市では在宅介護に関する相談窓口として地域包括支援センターを各地区に設置しています。介護の負担を一人で抱え込まず、早めにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-energy-support',
    title: 'いわき市 省エネ設備導入補助金',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '福島県',
    tags: ['いわき市', '省エネ', '補助金'],
    eligibility: 'いわき市内に住所を有し、省エネ設備を導入する市民',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: 'いわき市が実施する省エネ設備導入補助金です。太陽光発電や蓄電池の導入に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 省エネ設備導入補助金は、<span class="marker">住宅への太陽光発電システム・蓄電池・高効率給湯器等の導入</span>に対して費用の一部を補助する制度です。</p><p>いわき市は日照時間が東北地方でもトップクラスに長く、太陽光発電の適地として知られています。再生可能エネルギーの活用による脱炭素社会の実現と、家庭のエネルギーコスト削減を両立させる取り組みです。</p><p><span class="marker-green">太陽光発電、蓄電池、エコキュート等の複数設備が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：上限10万円</p><p>家庭用蓄電池：上限10万円</p><p>高効率給湯器（エコキュート等）：上限5万円</p><p>太陽光＋蓄電池の同時導入：上限20万円</p></div><p>いわき市役所生活環境部環境企画課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置工事着手前に申請が必要</span>です。交付決定後に工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>複数設備の同時導入で合算<strong>最大20万円</strong>まで補助されます。設備の種類ごとに個別の上限額があります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>です。年度初めの申請がおすすめです。</p><div class="note-box">中古品やリース契約は対象外となる場合があります。いわき市は日照条件に恵まれているため、太陽光発電の投資回収が比較的早い地域です。国の補助金との併用が可能な場合もありますので窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-bousai-equipment',
    title: 'いわき市 防災設備設置補助金',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '福島県',
    tags: ['いわき市', '防災設備', '補助金'],
    eligibility: 'いわき市内に住宅を所有する市民',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: 'いわき市が実施する防災設備設置補助金です。住宅の防災設備設置にかかる費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 防災設備設置補助金は、<span class="marker">住宅への感震ブレーカー・家具転倒防止器具・防火設備等の設置</span>にかかる費用を補助する制度です。</p><p>いわき市は東日本大震災で甚大な被害を受けた経験から、住宅の防災力強化に特に力を入れています。地震・津波への備えとして、各家庭での防災設備の普及を推進しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は10万円</strong>です。<span class="marker-green">感震ブレーカーや家具転倒防止器具、住宅用火災警報器などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>感震ブレーカー</p><p>家具転倒防止器具</p><p>住宅用火災警報器の設置・更新</p><p>ガラス飛散防止フィルム</p></div><p>いわき市役所危機管理部防災課に申請書と見積書を提出します。</p><p><span class="marker">設備の購入・設置前に申請が必要</span>です。設置完了後に実績報告書と領収書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。複数設備の同時設置は合算できます。</p><p><span class="marker">1世帯につき1回の利用が原則</span>です。予算に限りがあり先着順です。</p><div class="note-box">いわき市は震災の教訓を活かし、自主防災組織の活動支援や防災訓練の充実にも取り組んでいます。個人の防災設備設置に加え、地域の防災力向上にもご協力ください。津波避難に関する情報はいわき市防災マップで確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 郡山市（福島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'koriyama-childcare-subsidy',
    title: '郡山市 保育料軽減助成制度',
    organization: '郡山市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['郡山市', '保育料', '助成金'],
    eligibility: '郡山市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '郡山市が実施する保育料軽減助成制度です。多子世帯を中心に保育料の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する世帯</span>の保育料を軽減する制度です。</p><p>「経済県都」と呼ばれる郡山市は、福島県の中央に位置し、東北新幹線や東北自動車道の交通拠点として発展してきました。「音楽都市」としても知られ、文化と経済が融合した子育てしやすい街づくりに取り組んでいます。</p><p><span class="marker-green">0〜2歳児の第2子以降は保育料が無料で、第1子にも市独自の軽減措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>郡山市に住民登録があり、認可保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>3〜5歳児：幼児教育・保育の無償化により全員無料</p><p>0〜2歳児 第1子：所得に応じた保育料（市独自の軽減あり）</p><p>0〜2歳児 第2子以降：無料</p></div><p>保育施設の入所申請時に自動判定されるため、<strong>別途の申請は原則不要</strong>です。世帯状況に変更がある場合は郡山市こども部にご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>0〜2歳の第1子は、郡山市独自の軽減により<strong>国基準より低い保育料が適用</strong>されます。第2子以降は無料です。</p><p><span class="marker">認可外保育施設を利用している場合は別途の補助制度が適用される場合があります</span>。</p><div class="note-box">住民税非課税世帯はすべての子どもの保育料が無料です。郡山市は保育施設の整備にも力を入れており、待機児童ゼロを目指した取り組みを進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-birth-bonus',
    title: '郡山市 出産・子育て応援給付金',
    organization: '郡山市',
    type: 'local',
    maxAmount: '妊婦5万円＋出産後5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['郡山市', '出産祝い金', '給付金'],
    eligibility: '郡山市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '郡山市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円</span>の計10万円を支給する制度です。</p><p>郡山市は福島県最大の経済圏を持ち、東北第3の商工業都市として知られています。猪苗代湖や磐梯熱海温泉にも近い自然豊かな環境で、安心して出産・子育てできるよう経済的支援と伴走型相談支援を提供しています。</p><p><span class="marker-green">所得制限なしで、郡山市に住むすべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時に保健師と面談→出産応援給付金（5万円）の申請</p><p>②出生届出後に面談→子育て応援給付金（5万円）の申請</p></div><p>郡山市保健所または各行政センターの窓口で面談を受け、申請書を提出します。</p><p><span class="marker">面談が給付の必須条件</span>です。<strong>本人確認書類と振込先口座情報</strong>をお持ちください。各行政センターでも手続き可能なので、お近くの窓口をご利用ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎の場合は子ども1人あたり5万円が加算されます。</p><p><span class="marker">申請期限は届出日から原則3か月以内</span>です。転出した場合は届出時の自治体で申請してください。</p><div class="highlight-box">郡山市では「ニコニコこども館」をはじめとする子育て支援施設も充実しています。給付金の面談時に、地域の子育てサービス情報も併せて案内されますので、積極的に活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-housing-purchase',
    title: '郡山市 住宅取得支援補助金',
    organization: '郡山市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福島県',
    tags: ['郡山市', '住宅取得', '補助金'],
    eligibility: '郡山市内に新たに住宅を取得する子育て世帯・移住者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '郡山市が実施する住宅取得支援補助金です。市内に住宅を取得する世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または購入する子育て世帯や市外からの移住者</span>に対して費用の一部を補助する制度です。</p><p>郡山市は東北新幹線で東京から約80分とアクセスに優れ、近年は首都圏からのU・Iターン移住者が増加しています。定住人口の確保と地域活力の維持に向け、住宅取得支援を充実させています。</p><p>基本補助に子育て加算や移住加算を加えて<strong>最大50万円</strong>が補助されます。<span class="marker-green">中古住宅の取得や省エネ住宅にも対応</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>郡山市内に住宅を新築・購入すること</p><p>子育て世帯または市外からの転入者であること</p><p>市税を滞納していないこと</p><p>5年以上継続して郡山市に居住する意思があること</p></div><p>郡山市役所建設交通部住宅政策課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。購入前の事前相談を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>最大30万円</strong>で、子育て・移住・省エネ加算を含め<strong>最大50万円</strong>となります。</p><p><span class="marker">年間予算に限りがあり先着順で受付終了</span>です。年度初めの申請がおすすめです。</p><div class="note-box">投資用物件や別荘の取得は対象外です。5年以内に転出した場合は返還を求められます。郡山市は磐梯山や猪苗代湖にもアクセスしやすく、自然豊かな環境での子育てが魅力です。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-infertility',
    title: '郡山市 不妊治療費助成事業',
    organization: '郡山市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '福島県',
    tags: ['郡山市', '不妊治療', '助成金'],
    eligibility: '郡山市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後の申請）',
    description: '郡山市が実施する不妊治療費助成事業です。特定不妊治療の自己負担額を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 不妊治療費助成事業は、<span class="marker">体外受精・顕微授精などの特定不妊治療を受ける夫婦</span>に対し、治療費の自己負担分を助成する制度です。</p><p>郡山市は福島県の医療の中心地として、太田西ノ内病院や星総合病院など充実した医療機関が集まっています。不妊治療の経済的負担を軽減し、子どもを望むご夫婦をサポートします。</p><p><span class="marker-green">保険適用後の自己負担分と先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>郡山市に住民登録がある法律上の婚姻関係にある夫婦または事実婚の方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票・戸籍謄本</p></div><p>郡山市保健所健康づくり課に申請します。<strong>治療終了日から60日以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大30万円</strong>が助成されます。保険適用分の自己負担額と先進医療費が対象です。</p><p><span class="marker">助成回数は妻の年齢により、40歳未満は通算6回、40〜43歳未満は通算3回</span>が上限です。</p><div class="note-box">43歳以上で治療を開始した場合は対象外です。福島県の助成制度との併用について窓口でご確認ください。郡山市は不妊治療に対応する医療機関が複数あり、通院のしやすさも特徴です。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-scholarship',
    title: '郡山市 給付型奨学金制度',
    organization: '郡山市',
    type: 'local',
    maxAmount: '月額3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '福島県',
    tags: ['郡山市', '奨学金', '教育支援'],
    eligibility: '郡山市に住所を有する世帯の大学生・専門学校生等',
    applicationPeriod: '毎年3月〜4月',
    description: '郡山市が実施する給付型奨学金制度です。経済的理由で修学困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 給付型奨学金制度は、<span class="marker">経済的な理由で大学等への修学が困難な学生</span>に対し、返還不要の奨学金を給付する制度です。</p><p>「学都・郡山」を掲げる郡山市には、日本大学工学部や郡山女子大学をはじめ複数の高等教育機関があります。地域の人材育成と若者の学びを支えるため、経済的支援を充実させています。</p><p><span class="marker-green">返還不要の給付型で、他の奨学金との併給も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>郡山市に引き続き1年以上住所を有する世帯の学生であること</p><p>大学・短大・専門学校等に在学または進学予定であること</p><p>世帯所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>毎年3月〜4月に郡山市教育委員会で申請を受け付けます。在学証明書、成績証明書、世帯の所得証明書等が必要です。</p><p><span class="marker">選考により採用が決定されるため、申請が採用を保証するものではありません</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>月額3万円</strong>で、給付期間は正規の修業年限内です。</p><p><span class="marker">留年や退学で給付停止</span>となります。年度ごとに成績・在学状況の確認が行われます。</p><div class="highlight-box">日本学生支援機構の給付型奨学金や他の奨学金と併給可能です。郡山市内の大学に通う場合は通学費も抑えられ、複数の奨学金を組み合わせることで経済的な負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-telework-bonus',
    title: '郡山市 テレワーク移住支援補助金',
    organization: '郡山市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '福島県',
    tags: ['郡山市', 'テレワーク', '移住支援'],
    eligibility: '首都圏等からテレワークで郡山市に移住した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '郡山市が実施するテレワーク移住支援補助金です。テレワークで郡山市に移住した方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 テレワーク移住支援補助金は、<span class="marker">首都圏等の企業に勤務しながらテレワークで郡山市に移住した方</span>に対し、移住にかかる費用を補助する制度です。</p><p>郡山市は東北新幹線で東京駅から約80分と、テレワーク移住に最適な立地です。猪苗代湖や磐梯高原などの自然環境と、都市としての利便性を兼ね備えた暮らしが実現できます。</p><p>補助額は<strong>最大50万円</strong>で、<span class="marker-green">引越費用・住居費・通信環境整備費が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>首都圏等から郡山市に転入すること</p><p>転入前の勤務先でテレワークを継続すること</p><p>郡山市に5年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>郡山市役所政策開発部政策開発課に申請書と雇用証明書等を提出します。</p><p><span class="marker">転入日から1年以内に申請が必要</span>です。移住を検討している段階からオンラインでの事前相談が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>最大50万円</strong>で、引越費用・家賃（上限あり）・通信環境整備費等が対象です。</p><p><span class="marker">5年以内に郡山市から転出した場合は補助金の返還</span>が求められます。長期的な生活プランを立てたうえで申請してください。</p><div class="note-box">郡山市のコワーキングスペースやサテライトオフィスも利用できます。移住体験ツアーも定期的に開催していますので、まずは郡山市の暮らしを体験してみることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-nursing-equipment',
    title: '郡山市 介護用品支給事業',
    organization: '郡山市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '福島県',
    tags: ['郡山市', '介護用品', '支給事業'],
    eligibility: '郡山市に住所を有し、要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '郡山市が実施する介護用品支給事業です。在宅で重度要介護者を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>郡山市は東北有数の中核市として高齢者福祉の充実に取り組んでいます。冬季の寒さが厳しい地域では在宅介護の負担が特に大きく、介護用品の経済的支援は介護継続の重要な下支えとなっています。</p><p><span class="marker-green">市民税非課税世帯が対象で、月額6,250円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>郡山市に住所を有する要介護4または5の方を在宅で介護していること</p><p>要介護者および介護者の属する世帯が市民税非課税であること</p><p>要介護者が病院・施設に入院・入所していないこと</p></div><p>郡山市役所保健福祉部介護保険課または各行政センターで申請します。</p><p><strong>担当ケアマネジャー経由の申請</strong>も可能です。<span class="marker">申請月から支給開始</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当の介護用品（紙おむつ・尿取りパッド・使い捨て手袋等）</strong>をカタログから選択して受け取れます。</p><p><span class="marker">入院や施設入所で在宅介護でなくなった場合は支給停止</span>です。状況変化は速やかに届け出てください。</p><div class="note-box">介護保険の居宅サービスとの併用が可能です。郡山市では地域包括支援センターを各地区に設置しており、介護に関する総合的な相談に対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-elderly-support',
    title: '郡山市 高齢者外出支援事業',
    organization: '郡山市',
    type: 'local',
    maxAmount: '年間1万円相当',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '福島県',
    tags: ['郡山市', '高齢者支援', '外出支援'],
    eligibility: '郡山市に住所を有する70歳以上の高齢者',
    applicationPeriod: '毎年4月〜（年度内随時）',
    description: '郡山市が実施する高齢者外出支援事業です。70歳以上の高齢者にバス乗車券やタクシー券を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 高齢者外出支援事業は、<span class="marker">70歳以上の高齢者の社会参加と健康維持</span>を目的に、バス乗車券やタクシー利用券を支給する制度です。</p><p>郡山市は面積が広く、高齢者の日常の移動手段の確保が課題です。公共交通機関の利用を支援することで、閉じこもり予防や介護予防につなげ、高齢者が活き活きと暮らせる環境をつくっています。</p><p><span class="marker-green">バス乗車券またはタクシー利用券から選択できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>郡山市に住民登録のある70歳以上の方が対象です。</p><div class="summary-box" data-title="選択できる利用券"><p>路線バス乗車券</p><p>タクシー利用券</p></div><p>郡山市役所保健福祉部高齢福祉課または各行政センターの窓口で申請します。<strong>本人確認書類</strong>を持参してください。</p><p><span class="marker">年度ごとの申請が必要</span>です。対象年齢に達した方には案内が届く場合もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>1万円相当の乗車券・利用券</strong>が支給されます。利用期間は当該年度末までです。</p><p><span class="marker">未使用分の繰り越しや換金はできません</span>。年度内に計画的にご利用ください。</p><div class="highlight-box">郡山市では「音楽都市」として市内各所で音楽イベントが開催されています。外出支援券を使って文化活動への参加やお出かけを楽しみ、心身ともに健康な生活を送りましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-bousai-equipment',
    title: '郡山市 防災設備設置補助金',
    organization: '郡山市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '福島県',
    tags: ['郡山市', '防災設備', '補助金'],
    eligibility: '郡山市内に住宅を所有する市民',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '郡山市が実施する防災設備設置補助金です。住宅の防災設備設置にかかる費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 防災設備設置補助金は、<span class="marker">住宅への感震ブレーカー・家具転倒防止器具・防火設備等の設置</span>にかかる費用を補助する制度です。</p><p>郡山市は2019年の台風19号で甚大な水害被害を受けた経験から、住宅の防災力強化に注力しています。地震への備えに加え、水害対策としての設備導入も支援対象に含まれています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は10万円</strong>です。<span class="marker-green">感震ブレーカーや家具転倒防止器具、止水板設置なども対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>感震ブレーカー</p><p>家具転倒防止器具</p><p>住宅用火災警報器の設置・更新</p><p>止水板・防水設備</p></div><p>郡山市役所防災危機管理課に申請書と見積書を提出します。</p><p><span class="marker">設備の購入・設置前に申請が必要</span>です。設置完了後に実績報告書と領収書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。複数設備の同時設置は合算可能です。</p><p><span class="marker">1世帯につき1回の利用が原則</span>で、予算に限りがあり先着順です。</p><div class="note-box">郡山市は令和元年東日本台風の経験を活かし、ハザードマップの更新や避難所の充実にも取り組んでいます。家庭の防災対策と合わせて、お住まいの地域の避難場所や避難経路も確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 川越市（埼玉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kawagoe-childcare-subsidy',
    title: '川越市 保育料軽減助成制度',
    organization: '川越市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['川越市', '保育料', '助成金'],
    eligibility: '川越市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '川越市が実施する保育料軽減助成制度です。多子世帯を中心に保育料の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する世帯</span>の保育料を軽減する制度です。</p><p>「小江戸」の愛称で親しまれる川越市は、蔵造りの町並みと時の鐘が象徴する歴史ある街です。東京都心から30〜40分圏内というアクセスの良さから子育て世帯の人口が増加しており、保育料の負担軽減で子育てしやすい環境を整えています。</p><p><span class="marker-green">0〜2歳児の第2子以降は保育料が無料で、第1子にも市独自の軽減措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川越市に住民登録があり、認可保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>3〜5歳児：幼児教育・保育の無償化により全員無料</p><p>0〜2歳児 第1子：所得に応じた保育料（市独自の軽減あり）</p><p>0〜2歳児 第2子以降：無料</p></div><p>保育施設の入所申請時に自動判定されるため、<strong>別途の申請は原則不要</strong>です。世帯状況の変更は川越市こども未来部にご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>0〜2歳の第1子は、川越市独自の軽減で<strong>国基準より低い保育料が適用</strong>されます。第2子以降は無料です。</p><p><span class="marker">認可外保育施設を利用している場合は別途の補助制度が適用される場合があります</span>。</p><div class="note-box">住民税非課税世帯はすべての子どもの保育料が無料です。川越市は保育施設の新設・増設にも積極的で、待機児童対策を進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-birth-bonus',
    title: '川越市 出産・子育て応援給付金',
    organization: '川越市',
    type: 'local',
    maxAmount: '妊婦5万円＋出産後5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['川越市', '出産祝い金', '給付金'],
    eligibility: '川越市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '川越市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円</span>の計10万円を支給する制度です。</p><p>川越市は埼玉県南西部に位置し、35万人を超える人口を擁する中核市です。歴史的な観光資源と都市機能が調和する街で、子育て世帯の増加に対応して出産・子育て支援を強化しています。</p><p><span class="marker-green">所得制限なしで、川越市に住むすべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時に保健師と面談→出産応援給付金（5万円）の申請</p><p>②出生届出後に面談→子育て応援給付金（5万円）の申請</p></div><p>川越市保健所または各市民センターの窓口で面談を受け、申請書を提出します。</p><p><span class="marker">面談が給付の必須条件</span>です。<strong>本人確認書類と振込先口座情報</strong>を持参してください。市内各所の市民センターでも手続きできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎の場合は子ども1人あたり5万円が加算されます。</p><p><span class="marker">申請期限は届出日から原則3か月以内</span>です。転出した場合は届出時の自治体で申請してください。</p><div class="highlight-box">川越市では出産・子育て応援給付金のほかに、保健師による伴走型相談支援を提供しています。産後ケアや子育てサロンの情報も面談時に案内されますので、ぜひ活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-newlywed-rent',
    title: '川越市 結婚新生活支援事業',
    organization: '川越市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['川越市', '新婚家賃', '補助金'],
    eligibility: '川越市で新生活を始める新婚世帯（夫婦ともに39歳以下）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '川越市が実施する結婚新生活支援事業です。新婚世帯の住居費や引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 結婚新生活支援事業は、<span class="marker">新たに婚姻届を提出した夫婦の住居費（家賃・住宅取得費）や引越費用</span>を補助する制度です。</p><p>川越市は小江戸の町並みと現代的な商業施設が共存する魅力的な街で、都心へのアクセスも良好なため若い世帯に人気があります。結婚を機に川越市で新生活をスタートする世帯を経済的に支援しています。</p><p>夫婦ともに29歳以下で<strong>最大60万円</strong>、30〜39歳で<strong>最大30万円</strong>の補助です。<span class="marker-green">家賃・住宅購入費・引越費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届を提出した日の年齢が夫婦ともに39歳以下であること</p><p>世帯所得が500万円未満であること</p><p>川越市内に住居を定めていること</p><p>市税を滞納していないこと</p></div><p>川越市役所市民部市民課に申請書と婚姻届受理証明書、賃貸契約書等を提出します。</p><p><span class="marker">婚姻届提出日から1年以内に申請が必要</span>です。対象経費の領収書を必ず保管してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助上限は<strong>夫婦ともに29歳以下：60万円、30〜39歳を含む場合：30万円</strong>です。家賃、敷金・礼金、住宅購入費、引越費用が対象です。</p><p><span class="marker">年間予算に限りがあり先着順で受付終了</span>です。婚姻届を出したら早めに申請しましょう。</p><div class="note-box">勤務先からの住宅手当は差し引かれます。生活保護世帯は対象外です。川越市は東武東上線・JR川越線・西武新宿線が乗り入れ、都心通勤に便利な住宅エリアが充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-disability-medical',
    title: '川越市 重度障害者医療費助成制度',
    organization: '川越市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['川越市', '障害者医療', '助成金'],
    eligibility: '川越市に住所を有する重度の障害がある方',
    applicationPeriod: '通年',
    description: '川越市が実施する重度障害者医療費助成制度です。重度の障害がある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 重度障害者医療費助成制度は、<span class="marker">身体障害者手帳1級・2級、療育手帳マルA・A、精神障害者保健福祉手帳1級</span>の方を対象に、保険診療の自己負担分を助成する制度です。</p><p>川越市は中核市として充実した医療・福祉体制を持ち、障害のある方が地域で安心して暮らせる環境づくりを推進しています。医療費の自己負担を軽減し、必要な医療を受けやすくすることが目的です。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象で、窓口負担が原則無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳マルA・A</p><p>精神障害者保健福祉手帳1級</p><p>内部障害3級の一部（65歳未満で取得の場合）</p></div><p>川越市役所障害者福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類を持参してください。</p><p>申請後、<strong>「重度心身障害者医療費受給資格証」</strong>が交付されます。<span class="marker">県内の医療機関で受給資格証を提示すると窓口負担がなくなります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>全額助成</strong>されます。埼玉県内の医療機関では現物給付（窓口無料）で対応されます。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>で助成を受けます。</p><div class="note-box">保険適用外の費用は対象外です。埼玉県の制度として、65歳以上で新たに障害者手帳を取得した場合は一部制限がありますのでご確認ください。川越市は都心の専門医療機関へのアクセスも良好です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-school-lunch',
    title: '川越市 学校給食費助成制度',
    organization: '川越市',
    type: 'local',
    maxAmount: '給食費の全額または一部',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['川越市', '給食費', '教育支援'],
    eligibility: '川越市立小中学校に在籍する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '川越市が実施する学校給食費助成制度です。経済的な理由で給食費の支払いが困難な世帯に助成を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 学校給食費助成制度は、<span class="marker">経済的な理由で学校給食費の支払いが困難な世帯</span>に対し、給食費を助成する制度です。</p><p>川越市は「小江戸」として知られる歴史ある街で、地元のさつまいもや狭山茶など地域の食文化を活かした学校給食が提供されています。すべての子どもが安心して栄養ある食事を取れるよう支援しています。</p><p><span class="marker-green">就学援助制度の認定世帯は給食費全額支給のほか、多子世帯向けの軽減策も用意</span>されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>就学援助認定世帯（準要保護）：給食費全額支給</p><p>生活保護世帯（要保護）：給食費全額支給</p><p>第3子以降の児童生徒：市独自の軽減措置あり</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書を学校または川越市教育委員会学校教育部に提出してください。</p><p><span class="marker">年度途中の転入や家計急変でも随時申請を受け付けています</span>。所得証明書の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>就学援助認定世帯は<strong>給食費の全額が支給</strong>されます。小学校で年間約5万円、中学校で年間約6万円程度の負担軽減です。</p><p><span class="marker">認定は世帯全体の所得で判定、結果は6月頃に通知</span>されます。不認定でも家計急変等で再申請可能です。</p><div class="highlight-box">川越市では給食費のほか、学用品費・修学旅行費・通学費なども就学援助の対象です。地元産食材を活用した「小江戸給食」は食育の一環として子どもたちに好評です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-sme-support',
    title: '川越市 中小企業振興補助金',
    organization: '川越市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['川越市', '中小企業支援', '補助金'],
    eligibility: '川越市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '川越市が実施する中小企業振興補助金です。販路開拓やIT化推進にかかる費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う販路開拓・IT化推進・人材育成</span>にかかる経費を補助する制度です。</p><p>川越市は年間700万人以上の観光客が訪れる「小江戸」として、観光関連産業を中心に多くの中小企業が事業を展開しています。老舗の菓子屋や飲食店から先端IT企業まで、幅広い業種の競争力強化を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">展示会出展費、ECサイト構築費、社員研修費などが対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>川越市内に事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>同一事業で他の補助金を受けていないこと</p><p>事業計画書を提出できること</p></div><p>川越市役所産業観光部産業振興課に事業計画書と申請書を提出します。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>です。計画段階から事前に相談してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。販路開拓、IT化、人材育成が主な対象です。</p><p><span class="marker">年度内に事業を完了し実績報告書を提出する必要</span>があります。計画通りに実施できなかった場合は減額となることがあります。</p><div class="note-box">川越商工会議所でも経営相談を受けられます。観光客向けの新商品開発やインバウンド対応のIT化など、川越の地域特性を活かした事業計画は審査で高く評価されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-nursing-home-reform',
    title: '川越市 介護住宅改修助成事業',
    organization: '川越市',
    type: 'local',
    maxAmount: '最大20万円（介護保険併用）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['川越市', '介護住宅改修', '助成金'],
    eligibility: '川越市に住所を有し、要介護・要支援認定を受けた方の住宅を改修する方',
    applicationPeriod: '通年',
    description: '川越市が実施する介護住宅改修助成事業です。バリアフリー改修工事に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 介護住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>に対して費用の一部を助成する制度です。</p><p>川越市は蔵造りの歴史ある建物が残る一方、古い住宅の段差やバリアの多さが高齢者の在宅生活の課題となっています。手すり設置や段差解消で在宅生活の安全性を向上させることが本制度の目的です。</p><p><span class="marker-green">介護保険の住宅改修費（上限20万円）に加え、市独自の上乗せ助成があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの設置（玄関・廊下・浴室・トイレ等）</p><p>床段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取り替え</p><p>洋式便器への取り替え</p></div><p>川越市役所介護保険課または担当ケアマネジャーに相談のうえ、工事着手前に申請書を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。完了後に実績報告書と領収書を提出して精算します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>介護保険の住宅改修費として<strong>対象工事費の9割（上限20万円の9割＝18万円）</strong>が支給されます。川越市独自の上乗せで自己負担がさらに軽減される場合があります。</p><p><span class="marker">1人につき通算20万円が上限</span>で、転居や要介護度が3段階以上上がった場合は再度利用可能です。</p><div class="highlight-box">川越市の蔵造り地区周辺は古い住宅が多く、バリアフリー改修のニーズが高い地域です。改修工事は市内の登録事業者に依頼する必要がありますので、ケアマネジャーや市の窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-energy-support',
    title: '川越市 省エネ設備導入補助金',
    organization: '川越市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '埼玉県',
    tags: ['川越市', '省エネ', '補助金'],
    eligibility: '川越市内に住所を有し、省エネ設備を導入する市民',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '川越市が実施する省エネ設備導入補助金です。太陽光発電や蓄電池の導入に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 省エネ設備導入補助金は、<span class="marker">住宅への太陽光発電システム・蓄電池・高効率給湯器等の省エネ設備導入</span>に対して費用の一部を補助する制度です。</p><p>川越市はゼロカーボンシティ宣言のもと、2050年までに市内のCO2排出量実質ゼロを目指しています。家庭での再生可能エネルギー活用と省エネ化を推進するため、設備導入を経済的に支援します。</p><p><span class="marker-green">太陽光発電、蓄電池、エコキュート、エネファーム等の複数設備が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：上限10万円</p><p>家庭用蓄電池：上限10万円</p><p>高効率給湯器（エコキュート等）：上限5万円</p><p>太陽光＋蓄電池の同時導入：上限20万円</p></div><p>川越市役所環境部環境政策課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置工事着手前に申請が必要</span>です。交付決定後に工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>複数設備の同時導入で合算<strong>最大20万円</strong>まで補助されます。設備の種類ごとに個別の上限額があります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>です。年度初めの早い時期に申請してください。</p><div class="note-box">中古品やリース契約は対象外の場合があります。川越市は埼玉県内でも夏の気温が高い地域で、省エネ設備の導入は冷房費の削減にも効果的です。国や埼玉県の補助金と併用可能な場合もありますので窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-seismic-diagnosis',
    title: '川越市 木造住宅耐震診断助成事業',
    organization: '川越市',
    type: 'local',
    maxAmount: '診断費用の全額（上限あり）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '埼玉県',
    tags: ['川越市', '耐震診断', '防災'],
    eligibility: '川越市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '川越市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>川越市は蔵造りの歴史的建造物が多い一方、住宅地にも旧耐震基準の木造住宅が数多く残っています。首都直下地震のリスクに備え、住宅の耐震化を推進することが本制度の目的です。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断を受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>川越市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>所有者本人が居住していること</p></div><p>川越市役所都市計画部建築指導課に申請書を提出します。申請後、市が認定した耐震診断士が訪問して診断を行います。</p><p><span class="marker">診断結果に基づき、耐震改修補助への案内</span>も受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は原則として自己負担なし</strong>で受けられます。市が指定する耐震診断士が実施します。</p><p><span class="marker">耐震性不足の場合は耐震改修補助制度（別途申請）</span>も利用できます。</p><div class="note-box">川越市は首都直下地震の想定被害エリアに含まれており、住宅の耐震化は喫緊の課題です。蔵造りの町並み周辺の木造住宅については、景観に配慮した耐震改修のアドバイスも受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
];
