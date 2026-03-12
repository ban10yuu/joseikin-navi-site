import { Grant } from '@/lib/types';

export const cityGrantsBatch54: Grant[] = [
  // ────────────────────────────────────────────────
  // 高崎市（群馬県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'takasaki-childcare-subsidy',
    title: '高崎市 保育料軽減助成金',
    organization: '高崎市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['高崎市', '保育料軽減', '助成金'],
    eligibility: '高崎市に住所を有し、認可保育所・認定こども園等に在園する児童の保護者',
    applicationPeriod: '通年',
    description: '高崎市が実施する保育料軽減助成金です。第2子以降の保育料を無料化し、多子世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する第2子以降の児童</span>の保育料を無料にする制度です。</p><p>北関東最大級の都市である高崎市は、上越・北陸新幹線の分岐点に位置し、交通の要衝として発展してきました。共働き世帯の増加に対応し、保育料の負担軽減を通じて子育て環境の充実を図っています。</p><p><span class="marker-green">所得制限なし、第1子の年齢制限もなく、第2子以降は完全無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高崎市に住民登録があり、認可保育施設を利用する第2子以降の児童の保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>地域型保育事業（小規模保育・家庭的保育等）</p></div><p>保育料の軽減は<strong>原則として自動適用</strong>されます。施設利用開始時の入所申請書に兄弟情報を記載することで、市が該当を確認します。</p><p><span class="marker">年度途中で兄弟構成に変更があった場合は、速やかに高崎市こども家庭課へ届け出てください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。国の制度では第1子の年齢に制限がありますが、高崎市では独自に拡充し、第1子の年齢にかかわらず第2子以降を無料としています。</p><p><span class="marker">3歳児クラス以上は国の幼児教育・保育無償化により全員無料</span>です。この制度は主に0〜2歳児クラスの第2子以降に大きなメリットがあります。</p><div class="note-box">認可外保育施設は本制度の対象外ですが、別途「認可外保育施設利用助成」が用意されています。給食費（副食費）は保育料とは別に実費負担が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-birth-bonus',
    title: '高崎市 出産祝金制度',
    organization: '高崎市',
    type: 'local',
    maxAmount: '第3子以降5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['高崎市', '出産祝金', '子育て支援'],
    eligibility: '高崎市に住所を有し、第3子以降の子どもを出産した方',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '高崎市が実施する出産祝金制度です。第3子以降の出産に対して祝金5万円を支給し、多子世帯を応援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 出産祝金制度は、<span class="marker">第3子以降の子どもを出産した世帯に対して祝金5万円を支給</span>する制度です。</p><p>だるまの生産量日本一を誇る高崎市は、「縁起のよい街」として知られ、子どもの誕生を地域全体で祝う文化が根づいています。多子世帯の経済的負担を少しでも軽減し、安心して子どもを産み育てられるまちづくりを目指しています。</p><p><span class="marker-green">国の出産育児一時金（50万円）に上乗せして受け取ることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高崎市に住民登録があり、第3子以降の子どもを出産した母親（または保護者）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市役所窓口またはHPよりダウンロード）</p><p>母子健康手帳</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>高崎市役所こども家庭課の窓口で申請します。<strong>出生届の提出後から生後6か月以内</strong>に手続きしてください。郵送での申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第3子以降1人につき5万円</strong>です。双子以上の場合、対象児それぞれに支給されます。</p><p><span class="marker">申請期限は出生日から6か月以内</span>です。期限を過ぎると受給できなくなりますのでご注意ください。</p><div class="highlight-box">高崎市では出産祝金のほか、妊婦健康診査の公費負担（14回分）、産後ケア事業、子育てSOSサービスなど、出産前後の切れ目ない支援を行っています。高崎市版ネウボラ「子育てなんでもセンター」でワンストップで相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-housing-purchase',
    title: '高崎市 住宅取得支援補助金',
    organization: '高崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['高崎市', '住宅取得', '補助金'],
    eligibility: '高崎市内に新たに住宅を取得する若年世帯・子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '高崎市が実施する住宅取得支援補助金です。若年世帯や子育て世帯の住宅取得費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または購入する若年世帯・子育て世帯</span>に対して費用の一部を補助する制度です。</p><p>高崎市は東京から新幹線で約50分という好アクセスを誇り、近年ベッドタウンとしての需要も高まっています。定住促進を目的として、住宅取得時の初期費用を軽減する本制度を設けています。</p><p>基本補助額は30万円で、<strong>市外からの転入の場合は20万円が加算され最大50万円</strong>となります。<span class="marker-green">新築・中古住宅いずれも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>申請者が40歳未満、または18歳未満の子どもがいる世帯</p><p>高崎市内に住宅を新築・購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>高崎市役所住宅課に申請書と必要書類（売買契約書写し・住民票・登記事項証明書等）を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。引渡し前の事前相談も受け付けていますので、早めにお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。市外からの転入世帯には20万円が加算され、<strong>最大50万円</strong>が支給されます。</p><p><span class="marker">5年以内に市外へ転出した場合は、補助金の返還を求められる場合があります</span>。長期的な居住計画を立てた上で申請しましょう。</p><div class="note-box">投資用物件や別荘は対象外です。すまい給付金や住宅ローン控除など国の制度と併用可能ですので、あわせて活用することで住宅取得の総コストを大幅に抑えられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-infertility',
    title: '高崎市 不妊治療費助成事業',
    organization: '高崎市',
    type: 'local',
    maxAmount: '最大30万円（年間）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '群馬県',
    tags: ['高崎市', '不妊治療', '助成金'],
    eligibility: '高崎市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から6か月以内）',
    description: '高崎市が実施する不妊治療費助成事業です。体外受精・顕微授精等の特定不妊治療にかかる費用を年間最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 不妊治療費助成事業は、<span class="marker">保険適用後の自己負担分および保険適用外の先進医療</span>にかかる費用を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、治療回数や方法によっては依然として高額な自己負担が発生します。高崎市では、安心して治療を続けられるよう、国・県の制度に上乗せした独自の助成を行っています。</p><p><span class="marker-green">事実婚のカップルも対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の少なくとも一方が高崎市に住民登録があり、医療機関で不妊治療を受けていることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市HPよりダウンロード可）</p><p>医療機関の受診等証明書</p><p>領収書の写し</p><p>夫婦の住民票</p><p>健康保険証の写し</p></div><p>高崎市保健所健康課の窓口に申請書類一式を提出します。<strong>治療が終了した日から6か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分および先進医療にかかる費用について、<strong>年間上限30万円</strong>を助成します。</p><p><span class="marker">1回の治療周期ごとではなく、年度単位での申請</span>となります。年度をまたぐ治療の場合は、治療終了日の属する年度で申請してください。</p><div class="highlight-box">高崎市では不妊専門相談窓口も設置しています。治療に関する不安や費用の相談も受け付けていますので、助成制度の利用とあわせて活用してください。群馬県の不妊治療助成と併用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-scholarship',
    title: '高崎市 奨学金制度',
    organization: '高崎市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '群馬県',
    tags: ['高崎市', '奨学金', '教育支援'],
    eligibility: '高崎市に住所を有する方の子どもで、高校・大学等に進学または在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '高崎市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円の奨学金を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対して奨学金を貸与する制度です。</p><p>高崎市には高崎経済大学をはじめ複数の高等教育機関があり、教育都市としての側面も持っています。将来を担う若者の学びを支えるため、無利子での奨学金貸与を行っています。</p><p>貸与月額は高校生1.5万円、大学生等3万円で、<span class="marker-green">返済時の利子は一切かかりません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が高崎市に住所を有すること</p><p>高等学校・大学・短大・専門学校等に在学または進学予定であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が一定以上であること</p></div><p>毎年3月〜4月に高崎市教育委員会教育総務課へ申請書類を提出します。在学する学校長の推薦が必要です。</p><p><span class="marker">募集枠に限りがあるため、選考により採用者が決定</span>されます。家計状況と学業成績を総合的に審査します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生1.5万円、大学生等3万円</strong>です。年額に換算すると大学生で最大36万円となります。</p><p><span class="marker">卒業後1年間の据置期間の後、10年以内に返還</span>する必要があります。無利子のため、借りた金額と同額を返済するだけで済みます。</p><div class="note-box">日本学生支援機構（JASSO）の奨学金との併用は可能ですが、他の地方自治体の奨学金との併用はできない場合があります。申請前に確認してください。返還が困難になった場合は、猶予制度もありますので早めに相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-sme-support',
    title: '高崎市 中小企業経営支援補助金',
    organization: '高崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '群馬県',
    tags: ['高崎市', '中小企業支援', '補助金'],
    eligibility: '高崎市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '高崎市が実施する中小企業経営支援補助金です。販路開拓や生産性向上に取り組む中小企業に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 中小企業経営支援補助金は、<span class="marker">市内の中小企業が行う販路開拓・生産性向上の取り組み</span>に対して費用の一部を補助する制度です。</p><p>高崎市は関越・上信越・北関東の3つの自動車道が交差する交通結節点であり、物流拠点として多くの中小企業が集積しています。展示会出展、ECサイト構築、業務効率化ツールの導入など、幅広い経費が対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>高崎市内に事業所（本店または支店）を有すること</p><p>中小企業基本法に定める中小企業者であること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p></div><p>高崎市役所商工振興課に申請書と事業計画書を提出します。</p><p><span class="marker">申請は事業実施前に行う必要があります</span>。交付決定を受けてから対象経費を支出してください。高崎商工会議所でも申請の相談に応じています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。展示会出展費、広告宣伝費、IT導入費用、専門家への相談費用などが対象となります。</p><p><span class="marker">人件費、飲食費、車両購入費は対象外</span>です。対象経費の範囲は事前に確認しましょう。</p><div class="highlight-box">高崎市では本補助金のほか、小規模事業者向けの低利融資制度や、事業承継支援事業も実施しています。複数の支援策を組み合わせることで、経営基盤をより強化できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-nursing-equipment',
    title: '高崎市 在宅介護用品支給事業',
    organization: '高崎市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '群馬県',
    tags: ['高崎市', '介護用品', '在宅介護'],
    eligibility: '高崎市に住所を有する要介護4・5の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '高崎市が実施する在宅介護用品支給事業です。在宅で重度要介護者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 在宅介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた方を在宅で介護する家族</span>に対して、紙おむつなどの介護用品を支給する制度です。</p><p>高齢化が進む中、高崎市では在宅介護を支える家族の負担軽減を図るため、日常的に使用する介護用品の支給を行っています。紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などが対象です。</p><p><span class="marker-green">市民税非課税世帯の方は自己負担なしで利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高崎市に住民登録があり、要介護4・5の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市役所窓口で配布）</p><p>対象者の介護保険被保険者証</p><p>申請者の本人確認書類</p></div><p>高崎市役所長寿社会課または各支所の窓口で申請します。<strong>担当のケアマネジャーを通じての申請も可能</strong>です。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>となります。在宅介護に戻った時点で改めて申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額5,000円相当の介護用品が支給され、<strong>年間で最大6万円相当</strong>となります。カタログから必要な用品を選択する方式です。</p><p><span class="marker">課税世帯の場合は一部自己負担（1割程度）が発生</span>します。非課税世帯は自己負担なしです。</p><div class="note-box">介護保険の福祉用具貸与・購入とは別の制度です。おむつ代の医療費控除を受ける場合は、医師の「おむつ使用証明書」が必要です。詳しくは市の窓口またはケアマネジャーにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-elderly-support',
    title: '高崎市 高齢者あんしん見守り事業',
    organization: '高崎市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '群馬県',
    tags: ['高崎市', '高齢者見守り', '生活支援'],
    eligibility: '高崎市に住所を有する65歳以上のひとり暮らし高齢者または高齢者のみ世帯',
    applicationPeriod: '通年',
    description: '高崎市が実施する高齢者あんしん見守り事業です。ひとり暮らし高齢者等に緊急通報装置を無料で貸与し、安全な在宅生活を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 高齢者あんしん見守り事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみ世帯</span>に緊急通報装置を無料で貸与する制度です。</p><p>高崎市は都市部と農村部が混在する広域都市で、高齢者の孤立防止が課題となっています。緊急時にボタンひとつで消防署や協力員に通報できる装置を設置し、24時間体制で安心を提供します。</p><p><span class="marker-green">装置の設置費用・月額利用料ともに無料</span>で利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>高崎市に住民登録がある65歳以上の方</p><p>ひとり暮らし、または高齢者のみの世帯</p><p>慢性疾患等により日常生活上注意が必要な方</p></div><p>高崎市役所長寿社会課または各地域の地域包括支援センターで申請を受け付けています。</p><p>申請時に<strong>近隣の協力員（緊急時に駆けつける方）を1〜2名</strong>登録する必要があります。<span class="marker">民生委員や地域包括支援センターに相談すると、協力員の確保もサポートしてもらえます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与・設置・月額利用料がすべて無料</strong>です。ペンダント型の携帯用ボタンも併せて貸与されます。</p><p><span class="marker">固定電話回線が必要な機種と、携帯回線対応の機種があります</span>。固定電話がない場合も利用可能ですので、申請時にご相談ください。</p><div class="highlight-box">緊急通報装置のほか、高崎市では「高齢者等あんしんネットワーク」として、郵便局や新聞販売店、コンビニなどの民間事業者とも連携し、日常の見守り体制を構築しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-seismic-diagnosis',
    title: '高崎市 木造住宅耐震診断助成事業',
    organization: '高崎市',
    type: 'local',
    maxAmount: '診断費用の全額補助',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '群馬県',
    tags: ['高崎市', '耐震診断', '防災'],
    eligibility: '高崎市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '高崎市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で受けられる制度です。</p><p>群馬県は関東平野の北西部に位置し、活断層も存在します。高崎市では南海トラフ巨大地震や首都直下地震の発生に備え、旧耐震基準の木造住宅の安全性を確認する耐震診断の費用を全額補助しています。</p><p><span class="marker-green">診断にかかる自己負担はゼロで、市が派遣する耐震診断士が調査を行います</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>高崎市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>住宅の所有者または居住者が申請すること</p></div><p>高崎市役所建築指導課に申請書を提出します。申請後、市が委託する耐震診断士が現地調査を行い、診断結果を報告します。</p><p><span class="marker">診断は1〜2時間程度で、立ち会いが必要</span>です。日程は事前に調整します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断にかかる費用は全額市が負担</strong>します。通常5〜10万円程度かかる診断費用を自己負担なしで受けられます。</p><p><span class="marker">診断の結果、耐震性が不足していると判明した場合は、別途「耐震改修補助金」（上限100万円程度）</span>も利用できます。</p><div class="note-box">鉄骨造・RC造の住宅や、店舗・事務所専用の建物は対象外です。増改築により混構造となっている場合は事前にご相談ください。診断結果は建物の売買時にも活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 釧路市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kushiro-childcare-subsidy',
    title: '釧路市 保育料多子軽減助成金',
    organization: '釧路市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['釧路市', '保育料軽減', '助成金'],
    eligibility: '釧路市に住所を有し、認可保育所等に在園する多子世帯の児童の保護者',
    applicationPeriod: '通年',
    description: '釧路市が実施する保育料多子軽減助成金です。多子世帯の保育料負担を軽減し、子育てしやすい環境を整備します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 保育料多子軽減助成金は、<span class="marker">認可保育所・認定こども園等を利用する多子世帯の保育料</span>を軽減する制度です。</p><p>太平洋に面し釧路湿原を擁する釧路市は、道東の拠点都市として水産業と観光業が盛んです。冷涼な気候が特徴ですが、夏涼しく過ごしやすいまちとしてワーケーション需要も高まっています。少子化対策として保育料の多子軽減に力を入れています。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>釧路市に住民登録があり、認可保育施設を利用している多子世帯の保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>地域型保育事業（小規模保育等）</p></div><p>保育料の軽減は<strong>原則として入所時の申請内容に基づき自動適用</strong>されます。兄弟情報に変更があった場合は、釧路市こども育成課に届け出てください。</p><p><span class="marker">0〜2歳児クラスが主な対象</span>で、3歳児クラス以上は国の幼児教育・保育無償化により全員無料です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は保育料が半額、第3子以降は全額免除</strong>されます。国の制度を拡充し、第1子の年齢にかかわらず軽減が適用されます。</p><p><span class="marker">認可外保育施設を利用する場合は、別途「認可外保育施設利用者支援」の対象</span>となる場合があります。</p><div class="note-box">副食費（おかず・おやつ代）は保育料とは別に実費負担となります。ただし、年収360万円未満相当世帯や第3子以降の児童は副食費も免除されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-birth-bonus',
    title: '釧路市 出産・子育て応援給付金',
    organization: '釧路市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['釧路市', '出産応援', '給付金'],
    eligibility: '釧路市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '釧路市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出産後に5万円（子育て応援給付金）の合計10万円</span>を支給する制度です。</p><p>釧路市は広大な釧路湿原とタンチョウヅルの生息地として知られる自然豊かな都市です。出産にかかる経済的負担を軽減するとともに、妊娠期からの伴走型相談支援とセットで、切れ目のないサポートを提供しています。</p><p><span class="marker-green">所得制限なし、第何子でも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>釧路市に住民登録のある妊婦および出産した方が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>妊娠届出時：保健師等の面談を受け、出産応援給付金5万円を申請</p><p>出産後：赤ちゃん訪問等の面談を受け、子育て応援給付金5万円を申請</p></div><p>釧路市保健福祉部健康推進課または各保健センターで面談を受けた後、<strong>申請書と振込先口座情報を提出</strong>します。</p><p><span class="marker">面談の受講が給付金受給の条件</span>です。妊娠・出産に関する不安や質問にも相談員が対応します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。申請から概ね1か月程度で指定口座に振り込まれます。</p><p><span class="marker">他の自治体で既に同種の給付金を受給済みの場合は、釧路市での重複受給はできません</span>。転入前の自治体での受給状況をご確認ください。</p><div class="highlight-box">この給付金は国の「出産・子育て応援交付金」事業に基づくもので、全国共通の制度です。釧路市では伴走型相談支援の充実に特に力を入れており、産後うつの予防や育児の孤立防止にもつなげています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-newlywed-rent',
    title: '釧路市 結婚新生活支援補助金',
    organization: '釧路市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '北海道',
    tags: ['釧路市', '結婚新生活', '家賃補助'],
    eligibility: '釧路市内で新たに婚姻届を提出し、市内に居住する世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '釧路市が実施する結婚新生活支援補助金です。新婚世帯の住居費・引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 結婚新生活支援補助金は、<span class="marker">新たに婚姻届を提出した世帯の住居費や引越費用</span>を補助する制度です。</p><p>釧路市は道東最大の都市ですが、若年層の流出と少子化が課題となっています。結婚を機に市内で新生活をスタートするカップルの経済的負担を軽減し、定住を促進する狙いがあります。</p><p>補助上限は<strong>夫婦ともに29歳以下の場合は60万円、それ以外は30万円</strong>です。<span class="marker-green">家賃、敷金・礼金、共益費、引越業者への支払いが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届を提出した日の属する年度内に申請すること</p><p>夫婦の所得合計が500万円未満であること</p><p>釧路市内に居住していること</p><p>夫婦の双方または一方が39歳以下であること</p></div><p>釧路市役所市民生活課に申請書と必要書類（婚姻届受理証明書、賃貸借契約書、引越費用の領収書等）を提出します。</p><p><span class="marker">婚姻届提出日から年度末までに申請が必要</span>です。年度をまたぐ場合は翌年度分として申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助上限は<strong>夫婦ともに29歳以下の場合60万円、いずれか30歳以上の場合30万円</strong>です。住居費と引越費用の実費が対象です。</p><p><span class="marker">勤務先から住宅手当を受けている場合は、手当分を差し引いた額が補助対象</span>となります。</p><div class="note-box">持ち家の住宅ローンも住居費として対象になります。ただし、土地のみの購入費は対象外です。親族が所有する物件への入居は対象外となる場合がありますので、事前にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-disability-medical',
    title: '釧路市 重度障がい者医療費助成制度',
    organization: '釧路市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['釧路市', '障がい者医療', '助成金'],
    eligibility: '釧路市に住所を有する重度の障がいをお持ちの方',
    applicationPeriod: '通年',
    description: '釧路市が実施する重度障がい者医療費助成制度です。重度の障がいをお持ちの方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 重度障がい者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A判定、精神障害者保健福祉手帳1級</span>をお持ちの方の医療費を助成する制度です。</p><p>釧路市では障がいのある方が安心して医療を受けられるよう、保険診療における自己負担分を全額助成しています。道東エリアの医療拠点として、障がい福祉の充実にも取り組んでいます。</p><p><span class="marker-green">通院・入院・調剤すべてが助成対象</span>で、北海道内の医療機関では窓口での自己負担がなくなります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>釧路市に住民登録があり、以下の障害者手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A判定（重度）</p><p>精神障害者保健福祉手帳1級</p><p>内部障害3級（心臓・腎臓・呼吸器等）</p></div><p>釧路市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、振込先口座情報が必要です。<strong>「重度心身障害者医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。北海道内の医療機関では受給者証を提示するだけで窓口負担がゼロになります。</p><p><span class="marker">道外の医療機関を受診した場合は、一旦自己負担分を支払い後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">65歳以上で新たに障害者手帳を取得した方は、後期高齢者医療制度への加入が必要となる場合があります。保険適用外の費用（差額ベッド代、文書料など）は助成対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-school-lunch',
    title: '釧路市 学校給食費助成事業',
    organization: '釧路市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '北海道',
    tags: ['釧路市', '学校給食', '教育支援'],
    eligibility: '釧路市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '釧路市が実施する学校給食費助成事業です。多子世帯の経済的負担を軽減するため、第3子以降の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 学校給食費助成事業は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>水産業が盛んな釧路市の学校給食には、地元で水揚げされたサンマやタラなど新鮮な海の幸が使用されることも多く、食育の場としても大切にされています。多子世帯の給食費負担を軽減することで、安心して学校生活を送れる環境を整えています。</p><p><span class="marker-green">所得制限なしで、第3子以降のすべての児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>釧路市立小中学校に在籍する児童生徒のうち、保護者が扶養する子の中で第3子以降に該当する子どもが対象です。</p><div class="summary-box" data-title="申請の流れ"><p>毎年度始めに学校を通じて案内を配布</p><p>申請書に必要事項を記入し学校に提出</p><p>市教育委員会が審査・認定</p></div><p>釧路市教育委員会学校教育部学校教育課に申請します。<strong>兄姉の在学状況にかかわらず、扶養する子のうち第3子以降であれば対象</strong>となります。</p><p><span class="marker">年度途中の転入や出生により第3子以降に該当した場合も随時申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額免除</strong>されます。小学校で月額約4,500円、中学校で月額約5,200円が免除の目安です。</p><p><span class="marker">就学援助制度の給食費支給を受けている場合は重複適用されません</span>。いずれか有利な方が適用されます。</p><div class="highlight-box">釧路市では給食費助成のほか、就学援助制度（学用品費・修学旅行費等）も充実しています。経済的にお困りの世帯は、第1子・第2子も含めて就学援助をご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-telework-bonus',
    title: '釧路市 テレワーク移住促進補助金',
    organization: '釧路市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '北海道',
    tags: ['釧路市', 'テレワーク', '移住支援'],
    eligibility: '釧路市外から移住し、テレワークで就業を継続する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '釧路市が実施するテレワーク移住促進補助金です。市外から移住しテレワークで就業する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 テレワーク移住促進補助金は、<span class="marker">市外から釧路市に移住し、テレワークで現在の仕事を継続する方</span>に対して移住にかかる費用を補助する制度です。</p><p>「日本一涼しいまち」として夏のワーケーション需要が高まる釧路市は、テレワーカーの移住先としても注目されています。釧路湿原や阿寒湖など世界レベルの自然環境と、都市機能を兼ね備えた魅力を活かし、移住促進に取り組んでいます。</p><p>補助額は<strong>単身30万円、世帯50万円</strong>です。<span class="marker-green">転居費用、住居初期費用（敷金・礼金等）が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>釧路市外から市内に転入すること</p><p>テレワークにより現在の勤務先での就業を継続すること</p><p>転入後3年以上居住する意思があること</p><p>勤務先がテレワークを認めていることの証明書を提出できること</p></div><p>釧路市役所都市経営課に申請書と必要書類を提出します。</p><p><span class="marker">転入日から6か月以内に申請が必要</span>です。事前相談も受け付けていますので、移住前のタイミングでお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>単身世帯30万円、複数人世帯50万円</strong>です。転居費用と住居初期費用の実費が対象となります。</p><p><span class="marker">3年以内に釧路市から転出した場合は、補助金の返還を求められます</span>。長期的な居住計画を立てた上で申請しましょう。</p><div class="note-box">フリーランスの方も、釧路市外の企業等からの業務委託を継続する場合は対象となります。釧路市では無料のコワーキングスペースお試し利用やワーケーション体験プログラムも提供していますので、移住前にぜひ体験してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-nursing-home-reform',
    title: '釧路市 高齢者住宅改修助成事業',
    organization: '釧路市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['釧路市', '介護リフォーム', '補助金'],
    eligibility: '釧路市に住所を有する要介護・要支援認定を受けた方の居住する住宅',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '釧路市が実施する高齢者住宅改修助成事業です。介護が必要な高齢者の住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 高齢者住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方が居住する住宅のバリアフリー改修</span>に対して費用の一部を助成する制度です。</p><p>釧路市は冬季の積雪や路面凍結により、高齢者の自宅内外での転倒リスクが高い地域です。手すりの設置、段差の解消、滑り止め付きの床材への変更など、安全な住環境の整備を支援しています。</p><p>介護保険の住宅改修費（上限20万円）に加えて、<strong>市独自の上乗せ助成として最大30万円</strong>が利用できます。<span class="marker-green">介護保険と合わせて最大50万円の改修費用をカバー</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器への取替え</p></div><p>釧路市役所介護高齢課に申請書とケアマネジャーの理由書、工事見積書を提出します。</p><p><span class="marker">必ず工事着手前に申請してください</span>。ケアマネジャーと相談のうえ、必要な改修内容を決めてから申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。介護保険の住宅改修費と合わせて利用することで、より充実した改修が可能です。</p><p><span class="marker">世帯の所得状況に応じて自己負担割合が異なります</span>。非課税世帯は自己負担が軽減されます。</p><div class="note-box">新築・増築工事や、介護とは無関係のリフォーム（美観目的の改修等）は対象外です。釧路市の厳しい冬に対応するため、玄関まわりの融雪設備設置を組み合わせる方も多いですが、融雪設備は別の補助制度をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-energy-support',
    title: '釧路市 冬季暖房費助成金',
    organization: '釧路市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '北海道',
    tags: ['釧路市', '暖房費', '生活支援'],
    eligibility: '釧路市に住所を有する住民税非課税世帯',
    applicationPeriod: '毎年10月〜翌年3月',
    description: '釧路市が実施する冬季暖房費助成金です。低所得世帯の冬季の暖房費負担を軽減するため最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 冬季暖房費助成金は、<span class="marker">住民税非課税世帯を対象に、冬季の暖房にかかる費用の一部</span>を助成する制度です。</p><p>釧路市は北海道の中でも冬が長く、暖房なしでは生活できない地域です。灯油やガスなどの暖房費は家計に大きな負担となるため、特に経済的に厳しい世帯に対して暖房費を助成し、健康で安心な冬の暮らしを支えています。</p><p><span class="marker-green">灯油・ガス・電気など暖房の種類を問わず利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>釧路市に住民登録があり、世帯全員が住民税非課税である世帯が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市から対象者に郵送される場合あり）</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>釧路市役所生活福祉課の窓口または郵送で申請します。<strong>対象世帯には市から案内が届く場合があります</strong>が、届かない場合でも要件を満たしていれば申請可能です。</p><p><span class="marker">申請期間は毎年10月から翌年3月まで</span>です。早めに手続きを済ませましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり最大3万円</strong>です。世帯人数や暖房の種類にかかわらず定額での支給となります。</p><p><span class="marker">生活保護受給世帯は冬季加算が別途支給されるため、本制度の対象外</span>となります。</p><div class="highlight-box">釧路市では暖房費助成のほか、灯油の一括購入あっせん制度も実施しています。地域で共同購入することで単価を抑えることができます。省エネ家電の購入補助制度と組み合わせると、長期的な暖房費削減にもつながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-bousai-equipment',
    title: '釧路市 住宅用防災設備設置補助金',
    organization: '釧路市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['釧路市', '防災設備', '補助金'],
    eligibility: '釧路市内に住宅を所有し、防災設備を設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '釧路市が実施する住宅用防災設備設置補助金です。住宅用火災警報器や感震ブレーカー等の設置費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 住宅用防災設備設置補助金は、<span class="marker">住宅用火災警報器、感震ブレーカー、消火器等の防災設備の設置</span>に対して費用の一部を補助する制度です。</p><p>釧路市は過去に幾度もの大地震を経験しており、2003年の十勝沖地震でも大きな被害を受けました。地震による通電火災を防ぐ感震ブレーカーや、早期発見に有効な火災警報器の普及を促進し、市民の安全を守っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">高齢者世帯は優先的に対応</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>住宅用火災警報器（煙式・熱式）</p><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>住宅用消火器</p><p>防炎カーテン・防炎じゅうたん</p></div><p>釧路市消防本部予防課に申請書と見積書を提出します。</p><p><span class="marker">設置工事の着手前に申請が必要</span>です。交付決定後に設備を購入・設置してください。DIYで設置可能な製品も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。複数の防災設備を組み合わせて申請することも可能です。</p><p><span class="marker">同一住宅につき1回限りの利用</span>です。過去に同じ補助を受けた住宅は対象外となります。</p><div class="note-box">住宅用火災警報器は消防法により全住宅への設置が義務化されています。設置義務を果たしていない住宅はこの機会に設置しましょう。電池切れの警報器の交換費用も補助対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 帯広市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'obihiro-childcare-subsidy',
    title: '帯広市 保育料助成事業',
    organization: '帯広市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['帯広市', '保育料助成', '子育て支援'],
    eligibility: '帯広市に住所を有し、認可保育所等に在園する第2子以降の児童の保護者',
    applicationPeriod: '通年',
    description: '帯広市が実施する保育料助成事業です。第2子以降の保育料を無料化し、多子世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 保育料助成事業は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する第2子以降の児童</span>の保育料を無料にする制度です。</p><p>十勝平野の中心に位置する帯広市は、日本有数の農業地帯として知られ、「十勝晴れ」と呼ばれる澄んだ青空のもと、ばんえい競馬やスイーツのまちとしても親しまれています。子育て世帯が安心して暮らせるよう、保育料の負担軽減に積極的に取り組んでいます。</p><p><span class="marker-green">第1子の年齢にかかわらず、第2子以降は保育料完全無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>帯広市に住民登録があり、認可保育施設を利用する第2子以降の児童の保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業・家庭的保育事業</p></div><p>入所時の申請内容に基づき<strong>原則として自動適用</strong>されます。世帯の兄弟構成に変更があった場合は、帯広市こども課に届け出てください。</p><p><span class="marker">主に0〜2歳児クラスの保育料に大きなメリット</span>があります。3歳児クラス以上は国の無償化により全員無料です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。国の基準を超える独自の拡充措置です。</p><p><span class="marker">副食費（おかず・おやつ代）は保育料とは別に実費が必要</span>です。ただし、年収360万円未満相当世帯や第3子以降は副食費も免除対象です。</p><div class="note-box">認可外保育施設については本制度の直接の対象外ですが、帯広市では認可外保育施設利用者への別途補助制度もあります。詳しくは帯広市こども課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-birth-bonus',
    title: '帯広市 出産・子育て応援給付金',
    organization: '帯広市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['帯広市', '出産応援', '給付金'],
    eligibility: '帯広市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '帯広市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円の合計10万円</span>を支給する制度です。</p><p>帯広市は「子育てにやさしいまち」をスローガンに掲げ、食と農の恵みを活かした子育て環境づくりを推進しています。この給付金は経済的支援と伴走型相談支援を組み合わせ、妊娠期から子育て期にかけて切れ目のないサポートを提供します。</p><p><span class="marker-green">所得制限はなく、第何子でも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>帯広市に住民登録のある妊婦および出産した方が対象です。</p><div class="summary-box" data-title="受給までの流れ"><p>妊娠届出時：保健師との面談後、出産応援給付金5万円を申請</p><p>出産後：こんにちは赤ちゃん訪問等の面談後、子育て応援給付金5万円を申請</p></div><p>帯広市保健福祉センターまたは各地区の保健推進室で面談を受け、<strong>申請書と口座情報を提出</strong>します。</p><p><span class="marker">面談の受講が給付の条件</span>です。妊娠・出産・育児に関する相談も面談時にできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>が支給されます。</p><p><span class="marker">他自治体で同種の給付金を受給済みの場合は重複受給できません</span>。転入前の受給状況を確認してください。</p><div class="highlight-box">帯広市では伴走型相談支援として、妊娠届出時・妊娠8か月頃・出産後の3回にわたり面談の機会を設けています。十勝の大地で安心して子育てできるよう、地域の子育て資源（子育て支援センター、ファミリーサポート等）の紹介も行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-housing-purchase',
    title: '帯広市 住宅取得促進補助金',
    organization: '帯広市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '北海道',
    tags: ['帯広市', '住宅取得', '補助金'],
    eligibility: '帯広市内に住宅を新築または購入する若年世帯・子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '帯広市が実施する住宅取得促進補助金です。若年世帯や子育て世帯の住宅取得を最大40万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 住宅取得促進補助金は、<span class="marker">市内に住宅を新築・購入する若年世帯や子育て世帯</span>に対して住宅取得費用の一部を補助する制度です。</p><p>帯広市は広大な十勝平野の中心として、ゆとりある住環境が魅力です。土地価格が比較的手ごろなことから、一戸建てのマイホームを実現しやすい地域でもあります。若い世代の定住促進を目的とした本制度で、住宅取得のハードルをさらに下げています。</p><p>基本補助額は20万円で、<strong>市外からの転入加算20万円を加えて最大40万円</strong>です。<span class="marker-green">新築・中古いずれも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>申請者が40歳未満、または18歳未満の子どもがいる世帯</p><p>帯広市内に住宅を新築・購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>帯広市役所都市建設部建築開発課に申請書と必要書類を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内の申請が必要</span>です。不動産売買契約書、住民票、登記事項証明書等が必要となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>です。市外から転入する世帯には20万円が加算され、<strong>最大40万円</strong>が支給されます。</p><p><span class="marker">5年以内に市外へ転出した場合は補助金の返還対象</span>となります。十勝での長期的な生活を見据えて申請しましょう。</p><div class="note-box">投資用物件・別荘・セカンドハウスは対象外です。帯広市は北海道遺産にも選ばれた「十勝の開拓と農業文化」の地であり、広い庭付き住宅で十勝ライフを満喫する方も多くいます。住宅ローン控除など国の制度と併用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-infertility',
    title: '帯広市 不妊治療費助成事業',
    organization: '帯広市',
    type: 'local',
    maxAmount: '最大20万円（年間）',
    maxAmountNum: 20,
    category: 'medical',
    prefecture: '北海道',
    tags: ['帯広市', '不妊治療', '助成金'],
    eligibility: '帯広市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から6か月以内）',
    description: '帯広市が実施する不妊治療費助成事業です。特定不妊治療にかかる自己負担分を年間最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 不妊治療費助成事業は、<span class="marker">保険適用後の自己負担分や保険適用外の先進医療費</span>を助成する制度です。</p><p>帯広市は十勝エリアの不妊治療拠点として、帯広厚生病院をはじめとする医療機関が充実しています。保険適用後もなお残る自己負担分を軽減し、治療を続けやすい環境を整えています。</p><p><span class="marker-green">事実婚のカップルも対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の少なくとも一方が帯広市に住民登録があることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市HPよりダウンロード可）</p><p>医療機関の受診等証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>帯広市保健福祉部健康推進課に申請書類を提出します。<strong>治療終了日から6か月以内</strong>に申請してください。</p><p><span class="marker">北海道の特定不妊治療助成と併用可能</span>です。両方の制度を利用して自己負担を最小限に抑えましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分等について、<strong>年間上限20万円</strong>を助成します。</p><p><span class="marker">年度単位（4月〜翌年3月）での申請</span>となります。複数回の治療を行った場合はまとめて申請可能です。</p><div class="highlight-box">帯広市では不妊に関する専門相談窓口「おびひろ妊活サポート」を設けています。治療費だけでなく、精神的な悩みや仕事との両立についても相談できます。男性不妊の検査・治療も助成対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-scholarship',
    title: '帯広市 奨学金貸付制度',
    organization: '帯広市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '北海道',
    tags: ['帯広市', '奨学金', '教育支援'],
    eligibility: '帯広市に住所を有する方の子どもで、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '帯広市が実施する奨学金貸付制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 奨学金貸付制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対して無利子で奨学金を貸与する制度です。</p><p>帯広市には帯広畜産大学をはじめ、農業・畜産に特化した教育機関が集まっています。地元で学ぶ学生だけでなく、市外の大学等に進学する学生も対象とし、十勝の未来を担う人材の育成を応援しています。</p><p>貸与月額は高校生1.5万円、大学生等3万円で、<span class="marker-green">返済時の利子は一切かかりません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が帯広市に住所を有すること</p><p>高校・大学・短大・専門学校等に在学または進学予定であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が基準以上であること</p></div><p>毎年3〜4月に帯広市教育委員会学校教育課へ申請します。学校長の推薦が必要です。</p><p><span class="marker">選考により採用者が決定されるため、申請すれば必ず採用されるわけではありません</span>。家計状況と成績を総合的に審査します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生1.5万円、大学生等3万円</strong>です。年額換算で大学生は最大36万円になります。</p><p><span class="marker">卒業後1年の据置期間を経て、10年以内に無利子で返還</span>していただきます。</p><div class="note-box">JASSO（日本学生支援機構）の奨学金との併用は可能です。ただし、北海道の奨学金など他の地方自治体の奨学金との併用制限がある場合があります。返還が困難になった場合は猶予制度がありますので、早めにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-sme-support',
    title: '帯広市 中小企業振興補助金',
    organization: '帯広市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '北海道',
    tags: ['帯広市', '中小企業', '補助金'],
    eligibility: '帯広市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '帯広市が実施する中小企業振興補助金です。販路開拓やIT導入に取り組む中小企業に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 中小企業振興補助金は、<span class="marker">市内の中小企業が行う販路開拓・IT導入・人材育成</span>に対して費用の一部を補助する制度です。</p><p>帯広市は十勝の農畜産物を活用した食品加工業をはじめ、多様な中小企業が地域経済を支えています。十勝の食材を全国・海外に発信する展示会出展や、生産性向上のためのデジタル化投資などを後押しします。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>帯広市内に事業所を有する中小企業者であること</p><p>中小企業基本法に定める中小企業に該当すること</p><p>市税の滞納がないこと</p></div><p>帯広市役所経済部商業労働課に申請書と事業計画書を提出します。</p><p><span class="marker">事業実施前に申請が必要</span>です。帯広商工会議所や十勝産業振興センターでも申請に関する相談を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。展示会出展費、HP制作費、IT機器導入費、研修参加費などが対象です。</p><p><span class="marker">人件費、飲食費、汎用性の高い物品（パソコン本体等）は対象外</span>です。</p><div class="highlight-box">帯広市は「フードバレーとかち」構想のもと、食関連産業の集積を推進しています。食品加工や農業IT（スマート農業）分野での取り組みは特に歓迎されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-nursing-equipment',
    title: '帯広市 在宅介護用品給付事業',
    organization: '帯広市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['帯広市', '介護用品', '在宅介護'],
    eligibility: '帯広市に住所を有する要介護3以上の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '帯広市が実施する在宅介護用品給付事業です。在宅で要介護者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 在宅介護用品給付事業は、<span class="marker">要介護3以上の認定を受けた方を在宅で介護する家族</span>に対し、紙おむつなどの介護用品を支給する制度です。</p><p>帯広市は広大な十勝平野に住宅が点在するため、訪問介護サービスの移動距離が長くなりがちです。在宅介護を続ける家族の負担を少しでも軽減するため、日常的に必要な介護用品の支給を行っています。</p><p><span class="marker-green">住民税非課税世帯は自己負担なし</span>で利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>帯広市に住民登録があり、要介護3〜5の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤・ウェットシート</p></div><p>帯広市役所介護保険課の窓口で申請します。<strong>ケアマネジャーを通じての代理申請も可能</strong>です。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>です。退院・退所後に改めて申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額5,000円相当の介護用品を支給し、<strong>年間で最大6万円相当</strong>です。カタログから必要な品を選択する方式です。</p><p><span class="marker">課税世帯の場合は1割程度の自己負担</span>が発生します。非課税世帯は自己負担なしです。</p><div class="note-box">介護保険の福祉用具貸与（車いす、特殊寝台等）とは別の制度です。また、おむつ代は確定申告で医療費控除の対象になる場合があります（医師のおむつ使用証明書が必要）。詳しくは市の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-elderly-support',
    title: '帯広市 高齢者外出支援事業',
    organization: '帯広市',
    type: 'local',
    maxAmount: 'バス回数券1万円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '北海道',
    tags: ['帯広市', '高齢者外出支援', '生活支援'],
    eligibility: '帯広市に住所を有する70歳以上の方',
    applicationPeriod: '毎年4月〜（年度ごとに申請）',
    description: '帯広市が実施する高齢者外出支援事業です。70歳以上の方にバス回数券等を交付し、外出・社会参加を促進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 高齢者外出支援事業は、<span class="marker">70歳以上の高齢者にバス回数券やタクシー利用券を交付</span>し、外出を支援する制度です。</p><p>十勝平野に広がる帯広市は、冬季の降雪や路面凍結により高齢者の外出が難しくなりがちです。公共交通を利用しやすくすることで、通院や買い物、地域活動への参加を促し、健康維持と介護予防につなげています。</p><p><span class="marker-green">バス回数券またはタクシー利用券のいずれかを選択</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>帯広市に住民登録がある70歳以上の方</p><p>自動車運転免許証を保有していないこと（返納者含む）</p></div><p>帯広市役所高齢者福祉課の窓口で申請します。本人確認書類を持参してください。</p><p>免許返納者は<strong>運転経歴証明書の提示</strong>により対象となります。<span class="marker">毎年度の更新手続きが必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>バス回数券1万円分またはタクシー利用券1万円分</strong>を年1回交付します。</p><p><span class="marker">年度内に使い切れなかった回数券は翌年度に繰り越せません</span>。計画的に利用しましょう。</p><div class="highlight-box">帯広市では高齢者外出支援のほか、デマンド交通（予約制乗合バス）の運行エリア拡大にも取り組んでいます。買い物支援や通院支援と組み合わせることで、車がなくても不便なく暮らせるまちを目指しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-seismic-diagnosis',
    title: '帯広市 木造住宅耐震診断助成事業',
    organization: '帯広市',
    type: 'local',
    maxAmount: '診断費用の全額補助',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['帯広市', '耐震診断', '防災'],
    eligibility: '帯広市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月（予算に達し次第終了）',
    description: '帯広市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で受けられる制度です。</p><p>十勝地方は2003年の十勝沖地震（M8.0）で大きな被害を受けた地震多発地域です。帯広市では旧耐震基準の木造住宅の安全性を確認するため、耐震診断の費用を全額補助しています。</p><p><span class="marker-green">自己負担なしで専門家による耐震診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>帯広市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>所有者本人が居住していること</p></div><p>帯広市役所都市建設部建築開発課に申請書を提出します。申請後、市が委託する耐震診断士が現地調査を行います。</p><p><span class="marker">診断には1〜2時間程度かかり、居住者の立ち会いが必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用の全額を市が負担</strong>します。通常5〜10万円程度の費用が無料になります。</p><p><span class="marker">診断結果で耐震性不足が判明した場合は、別途「耐震改修補助金」</span>も利用できます。改修費用の一部が補助されます。</p><div class="note-box">十勝地方は冬季の凍結・融解による地盤変動も住宅に影響を与えることがあります。耐震診断は地震対策だけでなく、住宅の総合的な健康診断としても有効です。鉄骨造・RC造の建物は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 苫小牧市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tomakomai-childcare-subsidy',
    title: '苫小牧市 保育料多子軽減事業',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['苫小牧市', '保育料軽減', '子育て支援'],
    eligibility: '苫小牧市に住所を有し、認可保育所等に在園する多子世帯の児童の保護者',
    applicationPeriod: '通年',
    description: '苫小牧市が実施する保育料多子軽減事業です。多子世帯の保育料を軽減し、子育てしやすいまちづくりを推進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 保育料多子軽減事業は、<span class="marker">認可保育所・認定こども園等を利用する多子世帯の保育料</span>を軽減する制度です。</p><p>苫小牧市は太平洋に面した北海道の工業都市で、製紙業を中心とした産業と苫小牧港による物流が盛んです。アイスホッケーの街としても知られ、スポーツ環境も充実しています。働く世帯の子育て負担を軽減するため、保育料の多子軽減を実施しています。</p><p><span class="marker-green">第2子は半額、第3子以降は無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>苫小牧市に住民登録があり、認可保育施設を利用する多子世帯の保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>地域型保育事業</p></div><p>保育料の軽減は<strong>入所申請時の情報に基づき原則として自動適用</strong>されます。</p><p><span class="marker">兄弟構成に変更があった場合は苫小牧市こども育成課に届け出てください</span>。0〜2歳児クラスが主な対象で、3歳以上は国の無償化で全員無料です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は保育料半額、第3子以降は全額免除</strong>です。国制度を拡充し、第1子の年齢にかかわらず適用されます。</p><p><span class="marker">副食費は保育料とは別途実費が必要</span>ですが、年収360万円未満相当世帯や第3子以降は副食費も免除対象です。</p><div class="note-box">認可外保育施設については別途支援制度がある場合があります。苫小牧市こども育成課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-birth-bonus',
    title: '苫小牧市 出産・子育て応援給付金',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['苫小牧市', '出産応援', '給付金'],
    eligibility: '苫小牧市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '苫小牧市が実施する出産・子育て応援給付金です。妊娠届出時と出産後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円の合計10万円</span>を支給する制度です。</p><p>苫小牧市は北海道の海の玄関口として発展し、新千歳空港にも近い交通利便性の高い都市です。伴走型相談支援と経済的支援を組み合わせ、妊娠期から子育て期まで切れ目のないサポートを提供しています。</p><p><span class="marker-green">所得制限なし、第何子でも受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>苫小牧市に住民登録のある妊婦および出産した方が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時：保健師等の面談後、出産応援給付金5万円を申請</p><p>出産後：赤ちゃん訪問時等の面談後、子育て応援給付金5万円を申請</p></div><p>苫小牧市健康こども部健康支援課で面談を受け、<strong>申請書と振込先口座情報を提出</strong>します。</p><p><span class="marker">面談の受講が受給の条件</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援5万円＋子育て応援5万円＝合計10万円</strong>です。申請から約1か月で振込されます。</p><p><span class="marker">他自治体で同種の給付金を受給済みの方は重複受給できません</span>。</p><div class="highlight-box">苫小牧市では「とまこまい子育て応援プラザ」を拠点に、子育て支援センター、一時預かり、ファミリーサポートなど総合的な支援を行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-newlywed-rent',
    title: '苫小牧市 結婚新生活支援補助金',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '北海道',
    tags: ['苫小牧市', '結婚新生活', '家賃補助'],
    eligibility: '苫小牧市内で新たに婚姻届を提出し、市内に居住する世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '苫小牧市が実施する結婚新生活支援補助金です。新婚世帯の住居費・引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 結婚新生活支援補助金は、<span class="marker">新たに婚姻した世帯の住居費や引越費用</span>に対して補助を行う制度です。</p><p>苫小牧市は製紙・自動車関連産業が集積する工業都市で、若い労働力の確保が地域活性化の鍵となっています。結婚を機に市内で新生活を始めるカップルを経済的に応援し、定住促進につなげています。</p><p><strong>夫婦ともに29歳以下は上限60万円、それ以外は上限30万円</strong>です。<span class="marker-green">家賃、敷金・礼金、引越費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出日の属する年度内に申請すること</p><p>夫婦の所得合計が500万円未満であること</p><p>苫小牧市内に居住していること</p><p>夫婦の双方または一方が39歳以下であること</p></div><p>苫小牧市役所市民生活部市民課に申請書と必要書類を提出します。</p><p><span class="marker">婚姻届提出から年度末までに申請が必要</span>です。賃貸借契約書や引越費用の領収書を準備してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>29歳以下の夫婦は上限60万円、30歳以上を含む場合は上限30万円</strong>です。住居費と引越費用の合算額が対象です。</p><p><span class="marker">勤務先から住宅手当を受けている場合は、その分を差し引いた額が対象</span>です。</p><div class="note-box">親族所有の物件への入居は対象外となる場合があります。住宅ローンによるマイホーム購入も住居費として認められます（土地のみの購入費は除く）。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-disability-medical',
    title: '苫小牧市 重度障がい者医療費助成制度',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['苫小牧市', '障がい者医療', '助成金'],
    eligibility: '苫小牧市に住所を有する重度の障がいをお持ちの方',
    applicationPeriod: '通年',
    description: '苫小牧市が実施する重度障がい者医療費助成制度です。重度障がいのある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 重度障がい者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A判定、精神障害者保健福祉手帳1級</span>の方の医療費を助成する制度です。</p><p>苫小牧市では障がいのある方が経済的な不安なく医療を受けられるよう、保険診療の自己負担分を全額助成しています。苫小牧市立病院を中核とした地域医療体制と連携し、障がい福祉の充実を図っています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>苫小牧市に住民登録がある以下の障害者手帳所持者が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定（重度）</p><p>精神障害者保健福祉手帳1級</p><p>内部障害3級（心臓・腎臓・呼吸器等）</p></div><p>苫小牧市役所福祉部障がい福祉課で申請します。障害者手帳、健康保険証、口座情報が必要です。<strong>受給者証が交付</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。北海道内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">道外受診の場合は、一旦自己負担を支払い後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用は助成対象外です。65歳以上で新たに障害者手帳を取得した方は、後期高齢者医療制度への加入が必要な場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-school-lunch',
    title: '苫小牧市 学校給食費助成事業',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '北海道',
    tags: ['苫小牧市', '学校給食', '教育支援'],
    eligibility: '苫小牧市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '苫小牧市が実施する学校給食費助成事業です。第3子以降の児童生徒の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 学校給食費助成事業は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>苫小牧市の学校給食は地産地消を推進しており、北海道の豊かな食材を活用した栄養バランスのよい給食が提供されています。多子世帯の経済的負担を軽減し、すべての子どもが安心して給食を食べられる環境を整備しています。</p><p><span class="marker-green">所得制限なし、第3子以降のすべての児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>苫小牧市立小中学校に在籍する児童生徒のうち、保護者が扶養する子の中で第3子以降に該当する方が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>年度始めに学校を通じて案内を配布</p><p>申請書を記入し学校に提出</p><p>市教育委員会が審査・認定</p></div><p><strong>兄姉の在学状況にかかわらず、扶養する子の第3子以降が対象</strong>です。</p><p><span class="marker">年度途中の転入でも随時申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額免除</strong>されます。小学校で月額約4,500円、中学校で月額約5,200円程度が目安です。</p><p><span class="marker">就学援助制度の給食費支給と重複適用はされません</span>。より有利な制度が適用されます。</p><div class="highlight-box">苫小牧市では給食費助成のほか、就学援助制度も充実しています。第1子・第2子であっても、経済的にお困りの世帯は就学援助の対象となる場合がありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-telework-bonus',
    title: '苫小牧市 企業立地・テレワーク推進補助金',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '北海道',
    tags: ['苫小牧市', 'テレワーク', '企業支援'],
    eligibility: '苫小牧市内でテレワーク環境を整備する企業、または市外からテレワーク移住する個人',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '苫小牧市が実施する企業立地・テレワーク推進補助金です。テレワーク環境整備や移住にかかる費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 企業立地・テレワーク推進補助金は、<span class="marker">市内でのテレワーク環境整備やサテライトオフィス開設</span>を支援する制度です。</p><p>苫小牧市は新千歳空港から車で約30分、苫小牧港からのフェリー航路も充実した交通拠点です。企業のBCP対策としてのサテライトオフィス開設や、個人のテレワーク移住を後押しし、多様な働き方を推進しています。</p><p><strong>企業向け・個人向けの2つのメニュー</strong>があり、<span class="marker-green">いずれも上限50万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="2つのメニュー"><p>【企業向け】市内にサテライトオフィスを開設する企業：通信環境整備費・設備費等が対象</p><p>【個人向け】市外から移住しテレワークで就業を継続する方：引越費用・住居初期費用が対象</p></div><p>苫小牧市役所産業経済部企業立地推進課に申請書を提出します。</p><p><span class="marker">個人向けは転入日から6か月以内の申請が必要</span>です。企業向けはオフィス開設前に事前相談してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>企業向け・個人向けともに<strong>対象経費の2分の1以内、上限50万円</strong>です。</p><p><span class="marker">個人向けは3年以上の居住意思が条件</span>で、3年以内に転出した場合は返還対象となります。</p><div class="note-box">苫小牧市ではコワーキングスペースの体験利用制度も設けています。移住前にお試しテレワークを体験し、苫小牧での生活を実感してから移住を決める方も増えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-nursing-home-reform',
    title: '苫小牧市 高齢者住宅改修助成事業',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['苫小牧市', '介護リフォーム', '補助金'],
    eligibility: '苫小牧市に住所を有する要介護・要支援認定を受けた方の居住する住宅',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '苫小牧市が実施する高齢者住宅改修助成事業です。要介護高齢者の住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 高齢者住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>を支援する制度です。</p><p>苫小牧市は冬の降雪量は道内では比較的少ないものの、路面凍結により転倒リスクが高くなります。屋内の段差解消や手すり設置を通じて、高齢者が安全に自宅で暮らし続けられるよう支援しています。</p><p>介護保険の住宅改修費（上限20万円）に上乗せし、<strong>市独自で最大30万円を助成</strong>します。<span class="marker-green">合計最大50万円の改修費用をカバー</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消</p><p>床材の変更（滑り防止）</p><p>引き戸等への扉の取替え</p><p>便器の洋式化</p></div><p>苫小牧市役所福祉部介護福祉課にケアマネジャーの理由書・見積書とともに申請します。</p><p><span class="marker">工事着手前の申請が必須</span>です。ケアマネジャーと相談の上、改修計画を作成してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。介護保険の住宅改修費と合わせて利用可能です。</p><p><span class="marker">所得に応じて自己負担割合が異なります</span>。非課税世帯は負担が軽減されます。</p><div class="note-box">新築や増築、介護とは無関係の美観改修は対象外です。苫小牧市では冬場の室内結露対策として断熱改修の相談も受け付けていますが、断熱改修は別途の補助制度をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-energy-support',
    title: '苫小牧市 省エネ家電買替補助金',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '北海道',
    tags: ['苫小牧市', '省エネ', '生活支援'],
    eligibility: '苫小牧市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '苫小牧市が実施する省エネ家電買替補助金です。省エネ性能の高いエアコン・冷蔵庫等への買替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 省エネ家電買替補助金は、<span class="marker">省エネ基準を満たしたエアコン・冷蔵庫・暖房機器への買替え</span>に対して費用の一部を補助する制度です。</p><p>苫小牧市は北海道の中でも冬季の暖房費負担が大きい地域です。省エネ性能の高い家電への買替えを支援することで、家計の光熱費負担を軽減するとともに、CO2排出削減による環境保全にも貢献しています。</p><p>補助額は<strong>購入金額の10%（上限3万円）</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象製品"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（同上）</p><p>暖房機器（省エネ基準達成製品）</p></div><p>苫小牧市役所環境衛生部ゼロカーボン推進課に申請書と領収書・保証書の写しを提出します。</p><p><span class="marker">購入・設置後3か月以内に申請が必要</span>です。市内の家電量販店・販売店で購入した製品に限ります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>購入金額（税込）の10%以内で、上限3万円</strong>です。1世帯1年度あたり1回の利用に限られます。</p><p><span class="marker">古い家電のリサイクル処理を適正に行ったことの証明（家電リサイクル券の写し等）が必要</span>な場合があります。</p><div class="highlight-box">苫小牧市では省エネ家電買替のほか、住宅用太陽光発電設備や蓄電池の設置補助も実施しています。組み合わせることで光熱費を大幅に削減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-bousai-equipment',
    title: '苫小牧市 家庭用防災備蓄品購入補助金',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '最大1万円',
    maxAmountNum: 1,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['苫小牧市', '防災備蓄', '補助金'],
    eligibility: '苫小牧市内に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '苫小牧市が実施する家庭用防災備蓄品購入補助金です。非常食や防災用品の購入費用を最大1万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 家庭用防災備蓄品購入補助金は、<span class="marker">家庭での防災備蓄品（非常食、飲料水、防災ラジオ、簡易トイレ等）の購入費用</span>を補助する制度です。</p><p>2018年の北海道胆振東部地震では苫小牧市でも大規模停電（ブラックアウト）が発生し、防災備蓄の重要性が再認識されました。各家庭での「最低3日分の備え」を推進するため、備蓄品購入費の一部を補助しています。</p><p>補助率は購入費の2分の1で、<strong>上限1万円</strong>です。<span class="marker-green">防災用品全般が幅広く対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災用品"><p>非常食・保存水（賞味期限3年以上）</p><p>防災ラジオ・懐中電灯・モバイルバッテリー</p><p>簡易トイレ・携帯トイレ</p><p>防災ヘルメット・防災リュック</p><p>感震ブレーカー・住宅用消火器</p></div><p>苫小牧市役所市民生活部危機管理室に申請書と領収書を提出します。</p><p><span class="marker">購入後3か月以内に申請が必要</span>です。市内・市外いずれの店舗で購入した製品も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1以内で、<strong>上限1万円</strong>です。1世帯あたり年度内1回の利用に限ります。</p><p><span class="marker">日常使用品（普段の食料品やモバイルバッテリーとしてのみ使う製品）は対象外</span>となる場合があります。防災用途であることが明確な製品を選びましょう。</p><div class="note-box">苫小牧市では「苫小牧市防災ハンドブック」を全戸に配布しています。備蓄品のチェックリストも掲載されていますので、必要な備えを確認してから購入するとよいでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 八戸市（青森県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hachinohe-childcare-subsidy',
    title: '八戸市 保育料軽減助成事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['八戸市', '保育料軽減', '子育て支援'],
    eligibility: '八戸市に住所を有し、認可保育所等に在園する多子世帯の児童の保護者',
    applicationPeriod: '通年',
    description: '八戸市が実施する保育料軽減助成事業です。多子世帯の保育料を軽減し、子育てしやすいまちづくりを推進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 保育料軽減助成事業は、<span class="marker">認可保育所・認定こども園等を利用する多子世帯の保育料</span>を軽減する制度です。</p><p>青森県南東部に位置する八戸市は、太平洋に面した水産業の街として知られています。八戸港は全国有数の水揚量を誇り、イカやサバの水揚げで有名です。共働き世帯を支えるため、保育料の多子軽減を実施しています。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は完全無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八戸市に住民登録があり、認可保育施設を利用する多子世帯の保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>地域型保育事業（小規模保育等）</p></div><p>保育料の軽減は<strong>入所時の情報に基づき原則として自動適用</strong>されます。</p><p><span class="marker">兄弟構成に変更があった場合は八戸市こども未来課に届け出てください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は保育料半額、第3子以降は全額免除</strong>されます。国の基準を上回る独自の拡充措置です。</p><p><span class="marker">0〜2歳児クラスが主な対象</span>で、3歳以上は国の無償化で全員無料です。</p><div class="note-box">副食費は保育料とは別の実費負担です。ただし、低所得世帯や第3子以降は副食費も免除対象となります。認可外保育施設は別途支援制度があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-birth-bonus',
    title: '八戸市 出産・子育て応援給付金',
    organization: '八戸市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['八戸市', '出産応援', '給付金'],
    eligibility: '八戸市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '八戸市が実施する出産・子育て応援給付金です。妊娠届出時と出産後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円の合計10万円</span>を支給する制度です。</p><p>八戸市は種差海岸や蕪島のウミネコ繁殖地など自然に恵まれた港町で、八食センターは市民の台所として親しまれています。伴走型相談支援と経済的支援を組み合わせた包括的な子育て支援を行っています。</p><p><span class="marker-green">所得制限なし、第何子でも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八戸市に住民登録のある妊婦および出産した方が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時：保健師等との面談→出産応援給付金5万円を申請</p><p>出産後：こんにちは赤ちゃん訪問等の面談→子育て応援給付金5万円を申請</p></div><p>八戸市保健所健康づくり推進課で面談を受け、<strong>申請書と口座情報を提出</strong>します。</p><p><span class="marker">面談の受講が受給の必須条件</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援5万円＋子育て応援5万円＝合計10万円</strong>が支給されます。</p><p><span class="marker">転入前の自治体で同種の給付金を受給済みの場合は重複受給できません</span>。</p><div class="highlight-box">八戸市では「はちのへ子育て支援ナビ」アプリを提供しており、子育て関連の制度情報や予防接種スケジュールの管理、近隣の子育て施設マップなどが利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-housing-purchase',
    title: '八戸市 住宅取得支援補助金',
    organization: '八戸市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '青森県',
    tags: ['八戸市', '住宅取得', '補助金'],
    eligibility: '八戸市内に住宅を新築・購入する若年世帯や子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '八戸市が実施する住宅取得支援補助金です。若年世帯・子育て世帯の住宅取得費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築・購入する若年世帯や子育て世帯</span>に対して取得費用の一部を補助する制度です。</p><p>八戸市は青森県第2の都市として、八戸自動車道や東北新幹線の終着駅を擁する交通拠点です。人口減少対策として若い世代の定住を促進するため、住宅取得時の支援を行っています。</p><p>基本補助額は30万円で、<strong>市外からの転入の場合は20万円加算の最大50万円</strong>です。<span class="marker-green">新築・中古住宅いずれも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>申請者が40歳未満、または18歳未満の子どもがいる世帯</p><p>八戸市内に住宅を新築・購入すること</p><p>5年以上の居住意思があること</p><p>市税の滞納がないこと</p></div><p>八戸市役所建築住宅課に申請書と必要書類を提出します。</p><p><span class="marker">住宅引渡し後6か月以内の申請が必要</span>です。売買契約書、住民票、登記事項証明書等を添付してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、市外からの転入世帯は20万円加算され<strong>最大50万円</strong>です。</p><p><span class="marker">5年以内に市外転出した場合は補助金の返還対象</span>となります。</p><div class="note-box">投資用物件や別荘は対象外です。八戸市は太平洋側気候で青森県内では比較的温暖です。住宅ローン控除やすまい給付金など国の制度と併用できますので、あわせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-infertility',
    title: '八戸市 不妊治療費助成事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '最大20万円（年間）',
    maxAmountNum: 20,
    category: 'medical',
    prefecture: '青森県',
    tags: ['八戸市', '不妊治療', '助成金'],
    eligibility: '八戸市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から6か月以内）',
    description: '八戸市が実施する不妊治療費助成事業です。不妊治療にかかる自己負担分を年間最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 不妊治療費助成事業は、<span class="marker">保険適用後の自己負担分や保険適用外の先進医療費</span>を助成する制度です。</p><p>八戸市は八戸市民病院を中心とした地域医療が充実しており、不妊治療にも対応する医療機関があります。保険適用後もなお残る経済的負担を軽減し、安心して治療に専念できる環境を整えています。</p><p><span class="marker-green">事実婚のカップルも対象、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の少なくとも一方が八戸市に住民登録があることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書</p><p>医療機関の受診等証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>八戸市保健所健康づくり推進課に申請します。<strong>治療終了日から6か月以内</strong>が申請期限です。</p><p><span class="marker">青森県の不妊治療助成と併用可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分等について、<strong>年間上限20万円</strong>を助成します。</p><p><span class="marker">年度単位での申請</span>となります。複数回の治療をまとめて申請することも可能です。</p><div class="highlight-box">八戸市では不妊に関する相談窓口を設けています。治療費の不安だけでなく、精神的なサポートも受けられます。男性不妊の検査・治療も対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-scholarship',
    title: '八戸市 奨学金制度',
    organization: '八戸市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '青森県',
    tags: ['八戸市', '奨学金', '教育支援'],
    eligibility: '八戸市に住所を有する方の子どもで、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '八戸市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に無利子で奨学金を貸与する制度です。</p><p>八戸市には八戸工業大学、八戸学院大学など複数の高等教育機関が集積しています。水産業や工業で培われた「ものづくり」の精神を受け継ぐ人材の育成を支援するため、無利子の奨学金貸与を行っています。</p><p>貸与月額は高校生1.5万円、大学生等3万円で、<span class="marker-green">返済時の利子は一切不要</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が八戸市に住所を有すること</p><p>高校・大学・短大・専門学校等に在学または進学予定であること</p><p>経済的理由で修学が困難であること</p><p>成績が基準以上であること</p></div><p>毎年3〜4月に八戸市教育委員会教育総務課へ申請します。学校長の推薦が必要です。</p><p><span class="marker">選考により採用が決定されます</span>。家計と成績を総合的に審査します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生1.5万円、大学生等3万円</strong>です。年額換算で大学生は最大36万円です。</p><p><span class="marker">卒業後1年の据置期間を経て、10年以内に返還</span>します。無利子です。</p><div class="note-box">JASSOの奨学金との併用は可能ですが、他の地方自治体の奨学金との併用は制限される場合があります。返還困難時は猶予制度がありますので、早めにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-sme-support',
    title: '八戸市 中小企業経営革新支援補助金',
    organization: '八戸市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '青森県',
    tags: ['八戸市', '中小企業', '補助金'],
    eligibility: '八戸市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '八戸市が実施する中小企業経営革新支援補助金です。販路開拓や生産性向上に取り組む中小企業に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 中小企業経営革新支援補助金は、<span class="marker">市内の中小企業が行う販路開拓・新製品開発・生産性向上</span>に対して費用の一部を補助する制度です。</p><p>八戸市は水産加工業、鉄鋼業、セメント産業など多様な製造業が集積する青森県最大の工業都市です。八戸港を活用した輸出入や、地元の水産資源を活かした新商品開発など、中小企業の経営革新を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>八戸市内に事業所を有すること</p><p>中小企業基本法に定める中小企業者であること</p><p>市税の滞納がないこと</p><p>経営革新計画書を提出できること</p></div><p>八戸市役所商工労働観光部商工課に申請書と計画書を提出します。</p><p><span class="marker">事業実施前の申請が必要</span>です。八戸商工会議所や八戸圏域テクノロジーセンターでの事前相談もおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。展示会出展費、広告宣伝費、設備費、専門家相談費などが対象です。</p><p><span class="marker">人件費や飲食費は対象外</span>です。</p><div class="highlight-box">八戸市は「八戸ブランド」の確立に力を入れており、地元の水産物やB級グルメ（せんべい汁等）の全国展開を支援しています。地域資源を活用した経営革新は審査で高く評価されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-nursing-equipment',
    title: '八戸市 在宅介護用品支給事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '青森県',
    tags: ['八戸市', '介護用品', '在宅介護'],
    eligibility: '八戸市に住所を有する要介護4・5の方を在宅で介護する家族',
    applicationPeriod: '通年',
    description: '八戸市が実施する在宅介護用品支給事業です。在宅で重度要介護者を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 在宅介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた方を在宅で介護する家族</span>に、紙おむつ等の介護用品を支給する制度です。</p><p>八戸市は高齢化率が全国平均を上回り、在宅介護を担う家族への支援が重要な課題となっています。日常的に使用する介護用品の支給を通じて、介護家族の経済的・身体的負担を軽減しています。</p><p><span class="marker-green">住民税非課税世帯は自己負担なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八戸市に住民登録があり、要介護4・5の方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭シート</p></div><p>八戸市役所高齢福祉課の窓口で申請します。<strong>ケアマネジャー経由の代理申請も可能</strong>です。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額5,000円相当の介護用品を支給し、<strong>年間で最大6万円相当</strong>です。カタログからの選択方式です。</p><p><span class="marker">課税世帯の場合は1割程度の自己負担</span>が発生します。</p><div class="note-box">おむつ代は確定申告で医療費控除の対象となる場合があります（医師のおむつ使用証明書が必要）。介護保険の福祉用具貸与とは別の制度ですのでご安心ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-elderly-support',
    title: '八戸市 高齢者緊急通報システム事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '青森県',
    tags: ['八戸市', '高齢者見守り', '生活支援'],
    eligibility: '八戸市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '八戸市が実施する高齢者緊急通報システム事業です。ひとり暮らし高齢者等に緊急通報装置を無料貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 高齢者緊急通報システム事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみ世帯</span>に緊急通報装置を無料で貸与する制度です。</p><p>八戸市は太平洋に面した広大な市域を持ち、農漁村地域では高齢者のみ世帯が増加しています。急な体調変化や転倒時にボタンひとつで通報できる装置を設置し、24時間の安心を提供しています。</p><p><span class="marker-green">装置の貸与・設置・月額利用料はすべて無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>八戸市に住民登録がある65歳以上の方</p><p>ひとり暮らしまたは高齢者のみ世帯</p><p>慢性疾患等により健康上の不安がある方</p></div><p>八戸市役所高齢福祉課または地域包括支援センターで申請します。</p><p><span class="marker">近隣の協力員（緊急時に駆けつける方）の登録が必要</span>です。民生委員に相談すると協力員の確保をサポートしてもらえます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与・設置・月額利用料がすべて無料</strong>です。ペンダント型のボタンも併せて貸与されます。</p><p><span class="marker">固定電話回線がない場合も携帯回線対応型の装置が利用可能</span>です。</p><div class="highlight-box">八戸市では緊急通報システムに加え、配食サービスによる安否確認事業も実施しています。地域の見守りネットワークと組み合わせて、高齢者の安全を多層的に守っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-seismic-diagnosis',
    title: '八戸市 木造住宅耐震診断助成事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '診断費用の全額補助',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '青森県',
    tags: ['八戸市', '耐震診断', '防災'],
    eligibility: '八戸市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月（予算に達し次第終了）',
    description: '八戸市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で受けられる制度です。</p><p>八戸市は2011年の東日本大震災で震度5強を記録し、住宅の被害も発生しました。また、日本海溝・千島海溝沿いの巨大地震による被害も想定されており、住宅の耐震化は喫緊の課題です。旧耐震基準の木造住宅の安全性を確認するため、耐震診断費用を全額補助しています。</p><p><span class="marker-green">自己負担ゼロで専門家の診断を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>八戸市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p><p>所有者本人が居住していること</p></div><p>八戸市役所建築指導課に申請書を提出します。市が委託する耐震診断士が現地調査を行います。</p><p><span class="marker">診断には1〜2時間程度かかり、立ち会いが必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用の全額を市が負担</strong>します。通常5〜10万円かかる費用が無料です。</p><p><span class="marker">耐震性不足と判明した場合は「耐震改修補助金」（上限100万円程度）</span>も利用できます。</p><div class="note-box">八戸市は東日本大震災の教訓から防災意識が高い地域です。耐震診断は地震対策の第一歩として非常に重要です。鉄骨造・RC造の建物は対象外ですのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 一関市（岩手県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'ichinoseki-childcare-subsidy',
    title: '一関市 保育料軽減助成金',
    organization: '一関市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['一関市', '保育料軽減', '子育て支援'],
    eligibility: '一関市に住所を有し、認可保育所等に在園する多子世帯の児童の保護者',
    applicationPeriod: '通年',
    description: '一関市が実施する保育料軽減助成金です。多子世帯の保育料を軽減し、安心して子育てできる環境を整えます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園等を利用する多子世帯の保育料</span>を軽減する制度です。</p><p>岩手県南部に位置する一関市は、猊鼻渓（げいびけい）や厳美渓（げんびけい）の渓谷美で知られる自然豊かなまちです。「もちの街」としても有名で、独特のもち食文化が300年以上受け継がれています。子育て世帯の定住を促進するため、保育料の多子軽減を実施しています。</p><p><span class="marker-green">第2子は半額、第3子以降は完全無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一関市に住民登録があり、認可保育施設を利用する多子世帯の保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>地域型保育事業</p></div><p>保育料の軽減は<strong>入所時の情報に基づき原則として自動適用</strong>されます。</p><p><span class="marker">兄弟構成に変更があった場合は一関市こども家庭課に届け出てください</span>。0〜2歳児クラスが主な対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は保育料半額、第3子以降は全額免除</strong>です。国制度を拡充した独自措置です。</p><p><span class="marker">副食費は保育料とは別途実費</span>ですが、低所得世帯や第3子以降は副食費も免除対象です。</p><div class="note-box">一関市は広大な市域に保育所が分散しているため、通園距離が長くなるケースもあります。保育料軽減と合わせて、送迎支援制度や病児保育事業もご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-birth-bonus',
    title: '一関市 出産祝金・子育て応援給付金',
    organization: '一関市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['一関市', '出産祝金', '給付金'],
    eligibility: '一関市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '一関市が実施する出産祝金・子育て応援給付金です。妊娠届出時と出産後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 出産祝金・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円の合計10万円</span>を支給する制度です。</p><p>一関市は世界遺産・平泉に隣接し、歴史と文化が息づくまちです。人口減少と少子化が進む中、出産にかかる経済的負担を軽減し、伴走型相談支援と組み合わせた切れ目のない子育てサポートを提供しています。</p><p><span class="marker-green">所得制限なし、第何子でも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一関市に住民登録のある妊婦および出産した方が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時：保健師等との面談後、出産応援給付金5万円を申請</p><p>出産後：新生児訪問等の面談後、子育て応援給付金5万円を申請</p></div><p>一関市健康づくり課または各支所保健福祉課の窓口で面談を受け、<strong>申請書と口座情報を提出</strong>します。</p><p><span class="marker">面談の受講が給付の条件</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援5万円＋子育て応援5万円＝合計10万円</strong>が支給されます。</p><p><span class="marker">他自治体で同種の給付金を受給済みの場合は重複受給できません</span>。</p><div class="highlight-box">一関市では「いちのせき子育て支援センター」を複数箇所に設置しており、親子の交流の場や育児相談、一時預かりなどのサービスを提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-newlywed-rent',
    title: '一関市 結婚新生活支援補助金',
    organization: '一関市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '岩手県',
    tags: ['一関市', '結婚新生活', '家賃補助'],
    eligibility: '一関市内で新たに婚姻届を提出し、市内に居住する世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '一関市が実施する結婚新生活支援補助金です。新婚世帯の住居費・引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 結婚新生活支援補助金は、<span class="marker">新たに婚姻した世帯の住居費や引越費用</span>を補助する制度です。</p><p>一関市は岩手県と宮城県の県境に位置し、東北新幹線の一ノ関駅を擁する交通の要衝です。若者の地元定住と結婚・出産を後押しするため、新婚世帯の新生活にかかる初期費用を支援しています。</p><p><strong>夫婦ともに29歳以下は上限60万円、それ以外は上限30万円</strong>です。<span class="marker-green">家賃、敷金・礼金、引越費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出日の属する年度内に申請すること</p><p>夫婦の所得合計が500万円未満であること</p><p>一関市内に居住していること</p><p>夫婦の双方または一方が39歳以下であること</p></div><p>一関市役所まちづくり推進課に申請書と必要書類を提出します。</p><p><span class="marker">婚姻届提出から年度末までに申請が必要</span>です。賃貸借契約書、引越費用の領収書等を添付してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>29歳以下の夫婦は上限60万円、30歳以上を含む場合は上限30万円</strong>です。</p><p><span class="marker">勤務先からの住宅手当は差し引かれます</span>。持ち家の住宅ローンも住居費として認められます。</p><div class="note-box">一関市は東北新幹線で仙台まで約30分、東京まで約2時間半と通勤・通学の利便性が高い立地です。親族所有物件への入居は対象外となる場合がありますので事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-disability-medical',
    title: '一関市 重度障がい者医療費助成制度',
    organization: '一関市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '岩手県',
    tags: ['一関市', '障がい者医療', '助成金'],
    eligibility: '一関市に住所を有する重度の障がいをお持ちの方',
    applicationPeriod: '通年',
    description: '一関市が実施する重度障がい者医療費助成制度です。重度障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 重度障がい者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A判定、精神障害者保健福祉手帳1級</span>をお持ちの方の医療費を助成する制度です。</p><p>一関市では障がいのある方が経済的な心配なく医療を受けられるよう、保険診療における自己負担分を助成しています。県立磐井病院を中核とした地域医療体制と連携し、障がい福祉の充実を図っています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一関市に住民登録があり、以下の障害者手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定（重度）</p><p>精神障害者保健福祉手帳1級</p><p>内部障害3級（心臓・腎臓等）</p></div><p>一関市役所福祉課の窓口で申請します。障害者手帳、健康保険証、口座情報が必要です。<strong>受給者証が交付</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が助成</strong>されます。岩手県内の医療機関では受給者証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外受診の場合は一旦自己負担を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は対象外です。一関市は広大な市域を持つため、通院が困難な方には移動支援サービスも利用できます。詳しくは市の福祉課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-school-lunch',
    title: '一関市 学校給食費助成事業',
    organization: '一関市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '岩手県',
    tags: ['一関市', '学校給食', '教育支援'],
    eligibility: '一関市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '一関市が実施する学校給食費助成事業です。多子世帯の第3子以降の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 学校給食費助成事業は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>一関市の学校給食は地産地消を推進しており、いわて南牛や地元の野菜、「もちの街」ならではのもち料理が献立に登場することもあります。多子世帯の負担軽減を通じて、すべての子どもが安心して学べる環境を整えています。</p><p><span class="marker-green">所得制限なし、第3子以降のすべての児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一関市立小中学校に在籍する児童生徒のうち、保護者が扶養する子の中で第3子以降の方が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>年度始めに学校から案内を配布</p><p>申請書を記入し学校に提出</p><p>市教育委員会が審査・認定</p></div><p><strong>兄姉の在学状況にかかわらず、扶養する子の第3子以降が対象</strong>となります。</p><p><span class="marker">転入等による年度途中の申請も随時受付</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額免除</strong>されます。小学校で月額約4,300円、中学校で月額約5,000円程度が目安です。</p><p><span class="marker">就学援助制度の給食費支給との重複適用はありません</span>。より有利な制度が適用されます。</p><div class="highlight-box">一関市では給食費助成のほか、就学援助制度（学用品費・修学旅行費等の支給）も充実しています。第1子・第2子であっても経済的にお困りの世帯はご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-telework-bonus',
    title: '一関市 テレワーク移住支援補助金',
    organization: '一関市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '岩手県',
    tags: ['一関市', 'テレワーク', '移住支援'],
    eligibility: '一関市外から移住し、テレワークで就業を継続する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '一関市が実施するテレワーク移住支援補助金です。テレワーク移住者の引越・住居費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 テレワーク移住支援補助金は、<span class="marker">市外から一関市に移住し、テレワークで現在の仕事を継続する方</span>に対して移住費用を補助する制度です。</p><p>一関市は東北新幹線一ノ関駅から東京まで約2時間半とアクセスが良く、テレワーク移住先として注目されています。猊鼻渓や厳美渓の自然美に囲まれた環境で、都会の仕事を続けながらゆとりある暮らしが実現できます。</p><p>補助額は<strong>単身30万円、世帯50万円</strong>です。<span class="marker-green">引越費用と住居初期費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>一関市外から市内に転入すること</p><p>テレワークにより現在の勤務先での就業を継続すること</p><p>転入後3年以上居住する意思があること</p><p>勤務先のテレワーク許可証明を提出できること</p></div><p>一関市役所まちづくり推進部に申請書と必要書類を提出します。</p><p><span class="marker">転入日から6か月以内の申請が必要</span>です。移住前の事前相談も歓迎しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>単身30万円、複数人世帯50万円</strong>です。引越費用・敷金・礼金等の実費が対象です。</p><p><span class="marker">3年以内に転出した場合は補助金の返還が求められます</span>。</p><div class="note-box">フリーランスの方も対象です。一関市では「いちのせきリモートワークステーション」などのコワーキングスペースも整備されています。移住前のお試し滞在制度もありますので、まずは一関での生活を体験してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-nursing-home-reform',
    title: '一関市 高齢者住宅改修助成事業',
    organization: '一関市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '岩手県',
    tags: ['一関市', '介護リフォーム', '補助金'],
    eligibility: '一関市に住所を有する要介護・要支援認定を受けた方の居住する住宅',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '一関市が実施する高齢者住宅改修助成事業です。要介護高齢者の住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 高齢者住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>を支援する制度です。</p><p>一関市は岩手県内でも高齢化率が高く、在宅での安全な暮らしを支える住環境整備が重要な課題です。冬季の積雪・凍結に対応した屋内改修や、段差解消、手すり設置を支援しています。</p><p>介護保険の住宅改修費（上限20万円）に加えて、<strong>市独自で最大30万円を助成</strong>します。<span class="marker-green">合計最大50万円のバリアフリー改修が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消</p><p>床材の変更（滑り防止）</p><p>引き戸等への扉の取替え</p><p>便器の洋式化</p></div><p>一関市役所長寿社会課に申請書とケアマネジャーの理由書・見積書を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。ケアマネジャーと相談のうえ改修計画を作成してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。介護保険の住宅改修費と合わせて利用できます。</p><p><span class="marker">所得に応じて自己負担割合が異なります</span>。非課税世帯は負担軽減されます。</p><div class="note-box">新築・増築、美観目的の改修は対象外です。一関市は広大な市域に住宅が点在するため、改修工事の業者選びには各支所の相談窓口も活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-energy-support',
    title: '一関市 冬季灯油購入助成金',
    organization: '一関市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '岩手県',
    tags: ['一関市', '灯油助成', '生活支援'],
    eligibility: '一関市に住所を有する住民税非課税の高齢者世帯・障がい者世帯・ひとり親世帯',
    applicationPeriod: '毎年11月〜翌年3月',
    description: '一関市が実施する冬季灯油購入助成金です。低所得の高齢者世帯等の冬季暖房費負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 冬季灯油購入助成金は、<span class="marker">住民税非課税の高齢者世帯・障がい者世帯・ひとり親世帯</span>に対して灯油購入費の一部を助成する制度です。</p><p>一関市は岩手県南部の内陸に位置し、冬季は厳しい寒さが続きます。暖房用灯油の価格高騰は家計に大きな打撃を与えるため、経済的に厳しい世帯に対して暖房費を助成し、安全で温かい冬の生活を支えています。</p><p><span class="marker-green">灯油以外の暖房（ガス・電気）の燃料費にも充当可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>65歳以上のみの高齢者世帯（住民税非課税）</p><p>重度障がい者のいる世帯（住民税非課税）</p><p>ひとり親世帯（住民税非課税）</p></div><p>一関市役所生活環境課または各支所の窓口で申請します。対象世帯には<strong>市から案内が届く場合があります</strong>。</p><p><span class="marker">申請期間は毎年11月から翌年3月まで</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり最大2万円</strong>の定額支給です。</p><p><span class="marker">生活保護受給世帯は冬季加算があるため本制度の対象外</span>です。</p><div class="highlight-box">一関市では灯油助成のほか、地域の共同購入による灯油の割引あっせん事業も行っています。省エネ住宅改修補助や薪ストーブ設置補助と組み合わせると、長期的な光熱費削減につながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-bousai-equipment',
    title: '一関市 住宅用防災設備設置補助金',
    organization: '一関市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '岩手県',
    tags: ['一関市', '防災設備', '補助金'],
    eligibility: '一関市内に住宅を所有し、防災設備を設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '一関市が実施する住宅用防災設備設置補助金です。火災警報器や感震ブレーカー等の設置費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 住宅用防災設備設置補助金は、<span class="marker">住宅用火災警報器、感震ブレーカー、消火器等の防災設備の設置</span>に対して費用の一部を補助する制度です。</p><p>一関市は2008年の岩手・宮城内陸地震、2011年の東日本大震災で甚大な被害を受けた経験があります。地震や火災への備えとして、各家庭での防災設備の設置を推進し、市民の安全を守っています。</p><p>補助率は対象経費の2分の1で、<strong>上限5万円</strong>です。<span class="marker-green">高齢者のみ世帯は優先対応</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>住宅用火災警報器（煙式・熱式）</p><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>住宅用消火器</p><p>防炎製品（カーテン・じゅうたん等）</p></div><p>一関市役所消防本部予防課に申請書と見積書を提出します。</p><p><span class="marker">設置前に申請が必要</span>です。交付決定後に設備を購入・設置してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。複数の防災設備をまとめて申請できます。</p><p><span class="marker">同一住宅につき1回限り</span>の利用です。</p><div class="note-box">一関市は過去の震災経験から防災意識が高い地域です。住宅用火災警報器は全住宅に設置義務があります。設置から10年以上経過した警報器は電池切れや感度低下の恐れがありますので、この機会に交換を検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
];
