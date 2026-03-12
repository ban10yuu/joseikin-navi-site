import { Grant } from '@/lib/types';

export const cityGrantsBatch51: Grant[] = [
  // ────────────────────────────────────────────────
  // 一宮市（愛知県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'ichinomiya-childcare-subsidy',
    title: '一宮市 保育料軽減補助金',
    organization: '一宮市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['一宮市', '保育料', '補助金'],
    eligibility: '一宮市に住所を有し、認可保育施設に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '一宮市が実施する保育料軽減補助金です。第2子以降の保育料が無料化される制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 保育料軽減補助金は、<span class="marker">認可保育施設に通う第2子以降の子ども</span>の保育料を無料化する制度です。</p><p>愛知県北西部に位置する一宮市は、かつて毛織物産業で栄え「繊維の街」として全国的に知られてきました。名古屋市のベッドタウンとしても発展し、七夕まつりで有名なこの街は、子育て世帯が多く暮らす住宅都市です。</p><p><span class="marker-green">第1子の年齢にかかわらず、第2子以降の保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一宮市に住民登録があり、認可保育所・認定こども園・小規模保育事業所に通う子どもの保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>家庭的保育事業所</p></div><p>保育施設の入所申請時に自動的に適用されます。<strong>別途の申請は原則不要</strong>です。認可外保育施設を利用する場合は、一宮市役所子ども家庭部保育課へ個別にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。第1子の保育料は世帯の所得に応じた通常の金額が適用されます。</p><p><span class="marker">3歳以上の幼児教育・保育の無償化制度と併用が可能</span>で、0〜2歳の第2子以降が特に恩恵を受けます。</p><div class="note-box">給食費（副食費）は別途実費負担が必要な場合があります。年収360万円未満相当の世帯や第3子以降は副食費も免除される場合がありますので、詳しくは保育課にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-birth-bonus',
    title: '一宮市 出産祝い金支給事業',
    organization: '一宮市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['一宮市', '出産祝い金', '給付金'],
    eligibility: '一宮市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '一宮市が実施する出産祝い金支給事業です。出産された方に最大10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 出産祝い金支給事業は、<span class="marker">一宮市に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>一宮市は繊維産業の歴史を受け継ぎながら、名古屋駅まで電車で約10分というアクセスの良さから若い世帯にも人気の都市です。市独自の出産祝い金により、出産にかかる経済的負担の軽減を図っています。</p><p><strong>第1子5万円、第2子以降10万円</strong>が支給されます。<span class="marker-green">所得制限はなく、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で一宮市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市役所窓口または市ウェブサイトで入手可）</p><p>母子健康手帳</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>一宮市役所子ども家庭部子育て支援課の窓口で申請します。<span class="marker">出産後6か月以内に申請が必要</span>ですので、出生届の提出時にあわせて手続きするのがおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子が5万円、第2子以降が10万円</strong>です。多胎児（双子・三つ子等）の場合は、それぞれの子どもについて支給されます。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">国の出産・子育て応援交付金（妊娠届出時5万円＋出産届出時5万円）とは別制度のため、あわせて受給することが可能です。一宮市の子育て支援アプリでも申請手続きの案内を確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-housing-purchase',
    title: '一宮市 住宅取得補助金',
    organization: '一宮市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['一宮市', '住宅取得', '補助金'],
    eligibility: '一宮市内に新たに住宅を取得する子育て世帯・若年世帯',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '一宮市が実施する住宅取得補助金です。子育て世帯や若年世帯が市内に住宅を取得する際に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 住宅取得補助金は、<span class="marker">子育て世帯や若年世帯が市内に住宅を取得する際</span>に費用の一部を補助する制度です。</p><p>一宮市は名古屋市中心部へのアクセスが良く、JR尾張一宮駅・名鉄一宮駅の2路線が利用できる交通利便性の高い都市です。定住促進と人口流入を目指し、住宅取得にかかる初期費用を支援しています。</p><p>基本額は30万円で、<strong>市外からの転入の場合は20万円が加算され最大50万円</strong>となります。<span class="marker-green">新築・中古を問わず対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>申請者が40歳未満、または18歳未満の子どもがいる世帯</p><p>一宮市内に住宅を取得し、居住すること</p><p>市税の滞納がないこと</p><p>5年以上継続して居住する意思があること</p></div><p>一宮市役所まちづくり部住宅政策課に申請書と必要書類を提出します。売買契約書、住民票、登記事項証明書などが必要です。</p><p><span class="marker">住宅取得後1年以内に申請してください</span>。予算に限りがあるため、早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額は<strong>30万円</strong>で、市外からの転入世帯には<strong>20万円が加算</strong>されます。</p><p><span class="marker">三世代同居・近居の場合はさらに10万円の加算</span>がある場合があります。詳細は市の窓口でご確認ください。</p><div class="note-box">補助金の申請は1世帯につき1回限りです。投資用や賃貸用の住宅は対象外です。5年以内に転出した場合は補助金の返還を求められる場合がありますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-infertility',
    title: '一宮市 不妊治療費助成事業',
    organization: '一宮市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['一宮市', '不妊治療', '助成金'],
    eligibility: '一宮市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '一宮市が実施する不妊治療費助成事業です。体外受精や顕微授精などの特定不妊治療に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 不妊治療費助成事業は、<span class="marker">保険適用後の自己負担分について市独自の上乗せ助成</span>を行う制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、それでも高額な自己負担が生じるケースがあります。一宮市では保険適用後の自己負担分をさらに軽減し、不妊に悩む夫婦の経済的負担を和らげています。</p><p><strong>1回の治療につき最大30万円</strong>が助成されます。<span class="marker-green">年間の助成回数に制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一宮市に住民登録がある法律上の夫婦またはパートナーが対象です。</p><div class="summary-box" data-title="対象となる治療"><p>体外受精</p><p>顕微授精</p><p>男性不妊治療</p><p>凍結胚移植</p></div><p>一宮市役所子ども家庭部母子保健課に申請書と医療機関が発行する証明書、領収書を提出します。<span class="marker">治療終了後3か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分について、<strong>1回の治療あたり最大30万円</strong>が助成されます。男性不妊治療は別途最大10万円の加算があります。</p><p><span class="marker">愛知県の不妊治療助成制度との併用が可能</span>ですが、助成金の合計が自己負担額を超えないよう調整されます。</p><div class="highlight-box">一宮市では不妊専門相談窓口も設置しています。治療に関する悩みや不安がある方は、助成金の申請とあわせて相談を利用されることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-scholarship',
    title: '一宮市 奨学金給付制度',
    organization: '一宮市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '愛知県',
    tags: ['一宮市', '奨学金', '教育支援'],
    eligibility: '一宮市に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年3月〜4月',
    description: '一宮市が実施する奨学金給付制度です。経済的に修学困難な生徒・学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 奨学金給付制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対して奨学金を給付する制度です。</p><p>一宮市は教育に対する関心が高く、学力向上や教育環境の整備に積極的に取り組んでいます。本制度は返還不要の給付型奨学金で、学ぶ意欲のある若者の将来を支援しています。</p><p><span class="marker-green">返還不要の給付型で、高校生は月額1万円、大学生等は月額3万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>一宮市に住所を有すること</p><p>高等学校、大学、短期大学、専門学校等に在学中であること</p><p>世帯の所得が一定基準以下であること</p><p>学業に意欲的に取り組んでいること</p></div><p>毎年3月から4月にかけて、一宮市教育委員会学校教育課で申請を受け付けます。成績証明書、所得証明書、在学証明書などが必要です。</p><p><span class="marker">他の奨学金との併用は制限される場合があります</span>。事前にご確認ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生が月額1万円、大学生等が月額3万円</strong>です。在学期間中の継続支給が基本です。</p><p><span class="marker">毎年度の継続申請と成績報告が必要</span>です。学業不振の場合は支給が停止されることがあります。</p><div class="note-box">選考は書類審査で行われ、定員に達し次第締め切りとなります。日本学生支援機構の給付型奨学金との併用可否は個別に確認が必要です。卒業後の返還義務はありません。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-sme-support',
    title: '一宮市 中小企業経営支援補助金',
    organization: '一宮市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['一宮市', '中小企業支援', '補助金'],
    eligibility: '一宮市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '一宮市が実施する中小企業経営支援補助金です。設備投資やIT導入にかかる費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 中小企業経営支援補助金は、<span class="marker">市内の中小企業が行う設備投資やIT導入、販路開拓</span>に対して費用の一部を補助する制度です。</p><p>一宮市は繊維産業で培われたものづくりの技術を基盤に、多くの中小企業が活動しています。生産性向上やデジタル化を推進するため、経営革新に取り組む企業を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">製造業だけでなくサービス業・小売業も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>生産設備・機械の導入費用</p><p>IT・デジタルツールの導入費用</p><p>展示会出展・販路開拓にかかる費用</p><p>業務効率化のためのシステム構築費用</p></div><p>一宮市役所経済部商工観光課に事業計画書と申請書を提出します。一宮商工会議所での事前相談も受け付けています。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず交付決定後に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。補助対象経費の合計が20万円以上の事業が対象となります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となるため、年度初めの早期申請がおすすめです。</p><div class="highlight-box">一宮商工会議所では無料の経営相談を実施しており、補助金申請に必要な事業計画書の作成支援も行っています。国の小規模事業者持続化補助金との併用も検討できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-nursing-equipment',
    title: '一宮市 介護用品支給事業',
    organization: '一宮市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '愛知県',
    tags: ['一宮市', '介護用品', '支給'],
    eligibility: '一宮市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '一宮市が実施する介護用品支給事業です。在宅で要介護者を介護する家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対して、紙おむつ等の介護用品を支給する制度です。</p><p>一宮市は高齢化の進行に伴い、在宅介護を支援する施策を充実させています。介護用品の購入は家族にとって大きな経済的負担となるため、日常的に必要な消耗品を現物支給またはクーポンにより支援しています。</p><p><span class="marker-green">市民税非課税世帯を中心に、年間最大10万円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一宮市に住民登録があり、在宅で要介護4・5の認定を受けた方を介護している家族が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤・ドライシャンプー</p><p>使い捨て手袋</p></div><p>一宮市役所福祉部高齢福祉課の窓口で申請します。<strong>介護保険被保険者証</strong>と本人確認書類を持参してください。申請後、定期的に介護用品が届けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の支給上限は<strong>約8,000円相当</strong>で、年間では<strong>最大約10万円相当</strong>の介護用品が支給されます。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。在宅介護を行っている期間のみ支給を受けられます。</p><div class="note-box">支給品目はカタログから選択でき、必要に応じて品目の変更も可能です。介護保険サービスの福祉用具レンタルとは別制度ですので、あわせてご利用いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-elderly-support',
    title: '一宮市 高齢者見守り支援事業',
    organization: '一宮市',
    type: 'local',
    maxAmount: '無料（機器貸与）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '愛知県',
    tags: ['一宮市', '高齢者見守り', '生活支援'],
    eligibility: '一宮市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '一宮市が実施する高齢者見守り支援事業です。ひとり暮らし高齢者等に緊急通報装置の貸与や定期的な安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、緊急通報装置の貸与や安否確認サービスを提供する制度です。</p><p>一宮市は名古屋都市圏の一角として高齢化が進んでおり、地域で安心して暮らし続けられる環境づくりに取り組んでいます。民生委員や地域のボランティアとも連携し、重層的な見守り体制を構築しています。</p><p><span class="marker-green">緊急通報装置の貸与は無料で、24時間対応のコールセンターに接続されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一宮市に住民登録がある65歳以上のひとり暮らしの方、または高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="提供されるサービス"><p>緊急通報装置の無料貸与</p><p>ペンダント型緊急ボタン</p><p>定期的な安否確認電話</p><p>乳酸菌飲料の配達による見守り</p></div><p>一宮市役所福祉部高齢福祉課の窓口で申請します。<strong>本人確認書類と緊急連絡先</strong>の届出が必要です。民生委員を通じた申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与は無料</strong>です。ボタンを押すだけで24時間対応のコールセンターに接続され、必要に応じて救急車の手配や緊急連絡先への通知が行われます。</p><p><span class="marker">固定電話回線が必要な機種と、携帯回線対応の機種</span>があります。ご自宅の通信環境に合わせて選択できます。</p><div class="highlight-box">一宮市では、緊急通報装置のほかにも配食サービスによる見守りや、ICTを活用した見守りシステムの導入も進めています。ご家族が遠方にお住まいの場合でも安心です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-seismic-diagnosis',
    title: '一宮市 木造住宅無料耐震診断',
    organization: '一宮市',
    type: 'local',
    maxAmount: '無料（診断費用全額補助）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '愛知県',
    tags: ['一宮市', '耐震診断', '防災'],
    eligibility: '一宮市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（先着順）',
    description: '一宮市が実施する木造住宅無料耐震診断です。旧耐震基準の木造住宅の耐震性を無料で診断します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 木造住宅無料耐震診断は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、無料で耐震性の診断を行う制度です。</p><p>愛知県は南海トラフ地震の被害想定地域であり、一宮市も液状化のリスクが指摘されています。市では旧耐震基準の住宅の耐震化を促進するため、診断費用を全額負担しています。</p><p><span class="marker-green">専門の耐震診断員が自宅を訪問し、建物の耐震性を総合的に評価</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>一宮市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>在来軸組工法で建築されていること</p></div><p>一宮市役所まちづくり部建築指導課に申請書を提出します。申請後、市が委嘱した耐震診断員が訪問日程を調整します。</p><p><span class="marker">診断は約1〜2時間で完了</span>し、後日診断結果が書面で通知されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>診断費用は全額一宮市が負担</strong>するため、申請者の自己負担はありません。</p><p><span class="marker">診断の結果、耐震性が不足していた場合は、耐震改修工事の補助制度（最大120万円）</span>も利用できます。</p><div class="note-box">耐震診断は建物の現況を確認するものであり、診断だけで耐震性が向上するものではありません。診断結果をもとに、必要に応じて耐震改修を検討してください。鉄骨造やRC造の住宅は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 姫路市（兵庫県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'himeji-childcare-subsidy',
    title: '姫路市 保育料無償化拡充事業',
    organization: '姫路市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['姫路市', '保育料', '無償化'],
    eligibility: '姫路市に住所を有し、認可保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年',
    description: '姫路市が実施する保育料無償化拡充事業です。第2子以降の保育料を全額無償化します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 保育料無償化拡充事業は、<span class="marker">認可保育施設に通う第2子以降の子ども</span>の保育料を無償化する制度です。</p><p>世界遺産・姫路城を擁する姫路市は、播磨地方の中心都市として約53万人の人口を有しています。新日本製鐵（現・日本製鉄）の企業城下町としての顔も持ち、子育て世帯の定住促進に向けて保育料の負担軽減に取り組んでいます。</p><p><span class="marker-green">第1子の年齢制限を撤廃し、第2子以降の保育料を全額無料化</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>姫路市に住民登録があり、認可保育所・認定こども園・小規模保育事業所等に在園する第2子以降の子どもの保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>企業主導型保育事業所（一部）</p></div><p>施設の利用申込時に自動的に適用されるため、<strong>原則として別途の申請は不要</strong>です。認可外保育施設を利用している場合は、姫路市役所こども未来局保育課にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額無償</strong>となります。0〜2歳児クラスの第1子は、世帯の所得に応じた保育料が適用されます。</p><p><span class="marker">3歳以上は国の幼児教育・保育の無償化により全員無料</span>となるため、本制度は主に0〜2歳児クラスの第2子以降に効果を発揮します。</p><div class="note-box">副食費（おかず代）は無償化の対象外で、別途徴収される場合があります。ただし、年収360万円未満相当の世帯や第3子以降は副食費も免除されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-birth-bonus',
    title: '姫路市 出産・子育て応援給付金',
    organization: '姫路市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['姫路市', '出産祝い金', '給付金'],
    eligibility: '姫路市に住所を有し、出産した方',
    applicationPeriod: '出産後4か月以内',
    description: '姫路市が実施する出産・子育て応援給付金です。出産した方に対し最大10万円の給付金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 出産・子育て応援給付金は、<span class="marker">姫路市に住所を有する方が出産した際</span>に給付金を支給する制度です。</p><p>姫路市は姫路城の城下町として栄えた歴史と、製鉄・化学工業を中心とした産業都市としての側面を併せ持つ播磨地方の中核都市です。出産に伴う経済的負担の軽減と、子育て支援の充実を図っています。</p><p><strong>出産応援給付金5万円＋子育て応援給付金5万円で合計10万円</strong>が支給されます。<span class="marker-green">すべての妊産婦が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>姫路市に住民登録がある妊産婦が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時：面談を受けて出産応援給付金5万円の申請</p><p>出生届出後：面談を受けて子育て応援給付金5万円の申請</p><p>申請書と口座情報を提出</p><p>約1〜2か月後に振込</p></div><p>姫路市保健所健康課または各保健センターで面談を受けた後、申請書を提出します。<span class="marker">妊娠届出時・出産後の面談が給付の条件</span>となりますので、必ず面談を受けてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。多胎妊娠の場合、子育て応援給付金は子ども1人につき5万円が支給されます。</p><p><span class="marker">他の自治体で同様の給付金を受け取った場合は対象外</span>となります。転入された方は前住所地での受給状況をご確認ください。</p><div class="highlight-box">姫路市では給付金に加え、産前産後ケア事業（宿泊型・デイサービス型）も実施しています。出産後の育児不安や体調管理についても、保健師に気軽に相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-newlywed-rent',
    title: '姫路市 新婚世帯家賃補助制度',
    organization: '姫路市',
    type: 'local',
    maxAmount: '月額最大3万円（最長3年）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['姫路市', '新婚', '家賃補助'],
    eligibility: '姫路市内の賃貸住宅に居住する婚姻届出から3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '姫路市が実施する新婚世帯家賃補助制度です。市内の賃貸住宅に住む新婚世帯に月額最大3万円の家賃補助を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 新婚世帯家賃補助制度は、<span class="marker">婚姻届出から3年以内の新婚世帯</span>に対して、市内の賃貸住宅の家賃を補助する制度です。</p><p>姫路市は播磨圏域連携中枢都市として、若い世帯の定住促進に力を入れています。結婚を機に新たな生活をスタートする世帯の住居費負担を軽減し、姫路での暮らしを支援します。</p><p>月額最大3万円が<strong>最長3年間</strong>補助されます。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出日から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>姫路市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が500万円未満であること</p><p>市税を滞納していないこと</p></div><p>姫路市役所都市局住宅課に申請書類を提出します。婚姻届受理証明書、賃貸借契約書の写し、所得証明書などが必要です。</p><p><span class="marker">申請月の翌月分から補助が開始</span>されます。遡っての適用はできませんのでお早めにご申請ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の補助額は<strong>家賃（共益費除く）から4万円を差し引いた額で、上限は月額3万円</strong>です。家賃が4万円以下の場合は補助対象外となります。</p><p><span class="marker">補助期間は最長3年間で、婚姻届出から3年を経過した時点で終了</span>します。</p><div class="note-box">公営住宅や社宅にお住まいの場合は対象外です。年度ごとに所得要件の確認が行われ、所得超過の場合は補助が停止されます。姫路市外への転出時も補助は終了します。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-disability-medical',
    title: '姫路市 重度障害者医療費助成制度',
    organization: '姫路市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['姫路市', '障害者医療', '助成金'],
    eligibility: '姫路市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '姫路市が実施する重度障害者医療費助成制度です。重度の障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 重度障害者医療費助成制度は、<span class="marker">重度の障がいのある方の医療費自己負担分</span>を助成する制度です。</p><p>姫路市では、障がいのある方が安心して医療を受けられるよう、兵庫県の福祉医療制度と連携した医療費助成を実施しています。通院・入院のいずれも対象となり、経済的な心配なく治療に専念できる環境を整えています。</p><p><span class="marker-green">一定の所得以下の方は、医療費の自己負担が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>姫路市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳B1判定の重複障害</p></div><p>姫路市役所福祉局障害福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類が必要です。申請後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>兵庫県内の医療機関では受給者証を提示することで、<strong>保険診療の自己負担分が軽減</strong>されます。所得に応じて一部負担金が異なります。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="highlight-box">65歳以上の方は後期高齢者医療制度への加入が条件となる場合があります。また、他の公費負担医療（自立支援医療等）が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-school-lunch',
    title: '姫路市 学校給食費補助事業',
    organization: '姫路市',
    type: 'local',
    maxAmount: '給食費の半額補助',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['姫路市', '給食費', '教育支援'],
    eligibility: '姫路市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '通年（自動適用）',
    description: '姫路市が実施する学校給食費補助事業です。小中学校の給食費の半額を市が補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 学校給食費補助事業は、<span class="marker">市立小中学校に在籍する児童生徒の学校給食費</span>の半額を市が補助する制度です。</p><p>姫路市は播磨地方の中心都市として、教育環境の充実に力を入れています。保護者の負担を軽減し、すべての子どもが栄養バランスの取れた給食を安心して食べられる環境を整えることを目指しています。</p><p><span class="marker-green">所得制限はなく、姫路市立小中学校に在籍するすべての児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>姫路市立小中学校に在籍する児童生徒の保護者が対象です。</p><div class="summary-box" data-title="補助の概要"><p>小学校：給食費月額約4,500円のうち半額を補助</p><p>中学校：給食費月額約5,200円のうち半額を補助</p><p>アレルギー対応食の場合も同様に補助</p></div><p><strong>個別の申請手続きは不要</strong>で、在籍するすべての児童生徒に自動的に適用されます。保護者が負担する給食費は補助後の金額で徴収されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>給食費の半額が補助</strong>され、保護者の負担は小学校で月額約2,250円、中学校で月額約2,600円程度となります。</p><p><span class="marker">就学援助制度の認定を受けている世帯は、残りの自己負担分も全額免除</span>されるため、実質無料となります。</p><div class="note-box">私立学校に在籍する児童生徒は本制度の対象外です。食物アレルギーにより給食の提供を受けていない場合の代替食持参者への補助については、学校を通じてご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-telework-bonus',
    title: '姫路市 テレワーク導入支援補助金',
    organization: '姫路市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['姫路市', 'テレワーク', '補助金'],
    eligibility: '姫路市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '姫路市が実施するテレワーク導入支援補助金です。テレワーク環境の整備費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 テレワーク導入支援補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する際</span>の費用を補助する制度です。</p><p>姫路市は製造業を中心とした産業都市ですが、多様な働き方の推進や人材確保の観点から、テレワークの導入を支援しています。通信機器やソフトウェアの購入費用など、初期投資の負担を軽減します。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">従業員のワークライフバランス向上と生産性向上を同時に実現</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>ノートPC・タブレット端末の購入費</p><p>Web会議システムの導入費</p><p>VPN・セキュリティソフトの導入費</p><p>クラウドサービスの初期導入費</p></div><p>姫路市役所産業局商工労政課に申請書と見積書を提出します。テレワーク導入計画書の作成も必要です。</p><p><span class="marker">交付決定前に購入・契約した経費は対象外</span>です。必ず交付決定を受けてから導入を進めてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者につき1回限りの申請となります。</p><p><span class="marker">導入後6か月間のテレワーク実施報告</span>が求められます。実際に活用していることが確認できない場合は補助金の返還を求められることがあります。</p><div class="highlight-box">姫路市では、テレワーク導入に関するセミナーや相談会も開催しています。就業規則の改定やセキュリティ対策についても専門家に相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-nursing-home-reform',
    title: '姫路市 介護住宅改修補助事業',
    organization: '姫路市',
    type: 'local',
    maxAmount: '最大20万円（介護保険併用可）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['姫路市', '介護住宅改修', '補助金'],
    eligibility: '姫路市に住所を有し、介護保険の要介護・要支援認定を受けた方の同居家族',
    applicationPeriod: '通年',
    description: '姫路市が実施する介護住宅改修補助事業です。要介護者の在宅生活を支えるための住宅改修費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 介護住宅改修補助事業は、<span class="marker">要介護・要支援認定を受けた方が在宅で安全に生活できるよう</span>住宅改修費用を補助する制度です。</p><p>姫路市では介護保険制度の住宅改修費（上限20万円）に加え、市独自の上乗せ補助を行うことで、より安全で快適な住環境の整備を支援しています。高齢化が進む中、在宅介護を支える重要な制度です。</p><p><span class="marker-green">介護保険の住宅改修費と合わせて利用することで、自己負担をさらに軽減</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>姫路市に住民登録があり、介護保険の要介護・要支援認定を受けた方と同居する家族が対象です。</p><div class="summary-box" data-title="対象となる改修工事"><p>手すりの取付け</p><p>段差の解消</p><p>滑り止め床材への変更</p><p>引き戸への扉の交換</p><p>洋式便器への交換</p></div><p>姫路市役所福祉局介護保険課に申請します。ケアマネジャーと相談のうえ、<span class="marker">工事着手前に必ず事前申請</span>を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の補助額は<strong>上限20万円</strong>で、介護保険の住宅改修費（上限20万円・1〜3割自己負担）と合わせて利用できます。</p><p><span class="marker">世帯の所得に応じて補助率が異なります</span>。住民税非課税世帯はより手厚い補助を受けられます。</p><div class="note-box">事前申請なしに着工した場合は補助対象外です。工事完了後は完了届と領収書、施工前後の写真の提出が必要です。新築や増築に伴う工事は対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-energy-support',
    title: '姫路市 省エネ家電買替補助金',
    organization: '姫路市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['姫路市', '省エネ', '補助金'],
    eligibility: '姫路市に住所を有する世帯',
    applicationPeriod: '毎年6月〜翌年1月（予算に達し次第終了）',
    description: '姫路市が実施する省エネ家電買替補助金です。省エネ性能の高い家電への買い替えに最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 省エネ家電買替補助金は、<span class="marker">古い家電製品を省エネ性能の高い製品に買い替える際</span>の費用を補助する制度です。</p><p>姫路市は2050年カーボンニュートラルの実現に向け、家庭部門のCO2排出削減に取り組んでいます。エアコンや冷蔵庫などの大型家電は消費電力が大きく、省エネ製品への買い替えにより大幅な電気代の節約とCO2削減が期待できます。</p><p>補助額は購入金額の10%で、<strong>上限は5万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p><p>LED照明器具</p><p>給湯器（エコキュート等の高効率型）</p></div><p>姫路市役所環境局環境政策課に申請書と領収書、製品のカタログまたは仕様書を提出します。</p><p><span class="marker">古い家電の引き取り証明（リサイクル券等）が必要</span>です。新規購入のみでは対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入金額（税抜）の10%で、<strong>上限5万円</strong>です。1世帯あたり年度内1回の申請が可能です。</p><p><span class="marker">先着順で予算に達し次第終了</span>します。例年申請開始直後に予算枠が埋まる人気の制度です。</p><div class="highlight-box">エアコンを省エネ型に買い替えた場合、年間の電気代が数千円〜1万円以上節約できるケースもあります。補助金に加えて光熱費の削減効果も見込めるため、早めの買い替えを検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-bousai-equipment',
    title: '姫路市 家庭用防災用品購入補助金',
    organization: '姫路市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '兵庫県',
    tags: ['姫路市', '防災用品', '補助金'],
    eligibility: '姫路市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '姫路市が実施する家庭用防災用品購入補助金です。防災用品の購入費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 家庭用防災用品購入補助金は、<span class="marker">家庭での防災対策に必要な用品の購入費用</span>を補助する制度です。</p><p>姫路市は1995年の阪神・淡路大震災で被害を受けた経験を持ち、市民の防災意識は高い地域です。南海トラフ地震への備えとして、各家庭における防災用品の備蓄を推進しています。</p><p>補助率は購入費用の2分の1で、<strong>上限は5万円</strong>です。<span class="marker-green">家具転倒防止器具や感震ブレーカーなども対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災用品"><p>家具転倒防止器具（L型金具、突っ張り棒等）</p><p>感震ブレーカー</p><p>飛散防止フィルム</p><p>非常用蓄電池・ポータブル電源</p><p>防災リュック・非常持出袋セット</p></div><p>姫路市役所危機管理室に申請書と領収書、購入品の写真を提出します。</p><p><span class="marker">購入後3か月以内に申請してください</span>。市内の店舗またはオンラインショップでの購入が対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限5万円</strong>です。1世帯あたり年度内1回の申請が可能です。</p><p><span class="marker">食料品や飲料水などの消耗品は補助対象外</span>です。耐久性のある防災用品・設備のみが対象となります。</p><div class="note-box">姫路市では自主防災組織による防災訓練も推進しており、地域の防災訓練への参加も併せておすすめします。家具転倒防止器具の取付けは、高齢者世帯向けに無料の取付支援サービスも利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 西宮市（兵庫県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'nishinomiya-childcare-subsidy',
    title: '西宮市 保育料軽減補助金',
    organization: '西宮市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['西宮市', '保育料', '補助金'],
    eligibility: '西宮市に住所を有し、認可保育施設に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '西宮市が実施する保育料軽減補助金です。多子世帯の保育料を軽減する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 保育料軽減補助金は、<span class="marker">認可保育施設に通う第2子の保育料を半額、第3子以降を無料</span>とする制度です。</p><p>西宮市は阪急沿線の人気住宅地として知られ、甲子園球場や酒蔵の街「灘五郷」の一角を占める文教都市です。子育て世帯にも人気が高く、待機児童対策とあわせて保育料の負担軽減に取り組んでいます。</p><p><span class="marker-green">国の制度に上乗せして、市独自の保育料軽減を実施</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>西宮市に住民登録があり、認可保育所・認定こども園・小規模保育事業所等に在園する子どもの保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第2子：保育料が半額</p><p>第3子以降：保育料が無料</p><p>ひとり親世帯：第1子から軽減あり</p></div><p>保育施設入所時に自動的に適用されるため、<strong>別途の申請は原則不要</strong>です。認可外保育施設の利用者は西宮市役所こども支援局保育幼稚園事業課へお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は保育料が半額、第3子以降は全額免除</strong>となります。3歳以上は国の無償化により全員無料のため、主に0〜2歳児が対象です。</p><p><span class="marker">きょうだいのカウントは、小学校3年生以下の子どもを対象に数えます</span>。第1子が小学校4年生以上の場合、第2子が第1子としてカウントされる場合があります。</p><div class="note-box">副食費（おかず・おやつ代）は別途徴収されます。年収360万円未満相当の世帯は副食費の免除制度もありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-birth-bonus',
    title: '西宮市 出産祝い金',
    organization: '西宮市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['西宮市', '出産祝い金', '給付金'],
    eligibility: '西宮市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '西宮市が実施する出産祝い金制度です。出産された方に最大10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 出産祝い金は、<span class="marker">西宮市に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>西宮市は「文教住宅都市」を標榜し、教育環境と住環境の充実に定評があります。関西屈指の人気住宅地として子育て世帯の流入が続いており、出産から子育てまでの経済的支援を手厚く行っています。</p><p><strong>子ども1人につき10万円</strong>が支給されます。<span class="marker-green">所得制限なしで、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で西宮市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書</p><p>母子健康手帳</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>西宮市役所こども支援局子育て事業課の窓口で申請します。<span class="marker">出産後6か月以内の申請が必要</span>です。出生届の手続き時にあわせて申請するのが便利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人につき10万円</strong>です。双子の場合は20万円、三つ子の場合は30万円が支給されます。</p><p><span class="marker">申請から概ね1〜2か月で指定口座に振り込まれます</span>。</p><div class="highlight-box">西宮市では出産祝い金のほかにも、産後ケア事業（宿泊型・通所型・訪問型）を実施しています。助産師によるケアや育児相談を低額で利用できますので、出産後の支援としてあわせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-housing-purchase',
    title: '西宮市 子育て世帯住宅取得補助金',
    organization: '西宮市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['西宮市', '住宅取得', '補助金'],
    eligibility: '西宮市内に住宅を取得する18歳未満の子どもがいる世帯',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '西宮市が実施する子育て世帯住宅取得補助金です。市内に住宅を購入する子育て世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 子育て世帯住宅取得補助金は、<span class="marker">18歳未満の子どもがいる世帯が市内に住宅を取得する際</span>に費用の一部を補助する制度です。</p><p>西宮市は大阪と神戸の中間に位置し、阪急・阪神・JRの3路線が利用できる交通利便性の高い都市です。住宅価格が高めの地域でもあるため、子育て世帯の住宅取得を支援し、定住促進を図っています。</p><p>基本額は30万円で、<strong>市外からの転入の場合は20万円加算で最大50万円</strong>です。<span class="marker-green">新築・中古住宅のどちらも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>18歳未満の子どもがいる世帯（妊娠中を含む）</p><p>西宮市内に住宅を取得し、居住すること</p><p>市税の滞納がないこと</p><p>5年以上継続して居住する意思があること</p></div><p>西宮市役所都市局住宅政策課に申請書と必要書類を提出します。売買契約書、登記事項証明書、住民票、戸籍謄本などが必要です。</p><p><span class="marker">住宅取得後1年以内に申請が必要</span>です。予算に限りがあるため早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額は<strong>30万円</strong>で、市外からの転入の場合は<strong>20万円が加算</strong>されます。</p><p><span class="marker">三世代同居・近居の場合はさらに加算がある場合があります</span>。詳細は市の窓口でご確認ください。</p><div class="note-box">投資用・賃貸用物件は対象外です。5年以内に西宮市外へ転出した場合は補助金の返還が求められます。マンション・一戸建てのいずれも対象ですが、住宅の床面積が一定以上であることが条件です。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-infertility',
    title: '西宮市 不妊治療費助成制度',
    organization: '西宮市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['西宮市', '不妊治療', '助成金'],
    eligibility: '西宮市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後6か月以内',
    description: '西宮市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大15万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 不妊治療費助成制度は、<span class="marker">保険適用後の不妊治療にかかる自己負担分</span>を市独自に助成する制度です。</p><p>西宮市は文教住宅都市として、子育て環境の整備に力を入れています。不妊治療は保険適用後も高額な自己負担が生じることがあり、経済的な理由で治療を諦めることがないよう支援を行っています。</p><p><strong>1回の治療につき最大15万円</strong>が助成されます。<span class="marker-green">兵庫県の助成制度との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>西宮市に住民登録がある法律上の夫婦またはパートナーが対象です。</p><div class="summary-box" data-title="対象となる治療"><p>体外受精</p><p>顕微授精</p><p>男性不妊治療</p><p>凍結胚移植</p></div><p>西宮市保健所健康増進課に申請書と医療機関発行の証明書、領収書を提出します。<span class="marker">治療終了後6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分について、<strong>1回の治療あたり最大15万円</strong>が助成されます。</p><p><span class="marker">年間の助成回数は2回までで、通算の助成上限も設定</span>されています。詳細は市の窓口でご確認ください。</p><div class="highlight-box">西宮市では不妊・不育症に関する相談窓口も設けています。治療に関する不安や悩みを抱えている方は、専門の相談員に無料で相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-scholarship',
    title: '西宮市 奨学金制度',
    organization: '西宮市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['西宮市', '奨学金', '教育支援'],
    eligibility: '西宮市に住所を有する高校生・大学生等で、経済的支援を必要とする方',
    applicationPeriod: '毎年3月〜5月',
    description: '西宮市が実施する奨学金制度です。経済的に修学が困難な生徒・学生に月額最大4万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対して返還不要の奨学金を給付する制度です。</p><p>「文教住宅都市」を宣言する西宮市は、教育環境の充実に特に力を入れています。関西学院大学をはじめ多くの教育機関が立地するこの街では、学ぶ意欲のある若者を経済面からしっかり支える体制が整っています。</p><p><span class="marker-green">返還不要の給付型で、高校生は月額2万円、大学生等は月額4万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>西宮市に1年以上住所を有すること</p><p>高等学校、大学、短期大学、専門学校等に在学中であること</p><p>世帯の所得が基準額以下であること</p><p>他の給付型奨学金を受給していないこと</p></div><p>西宮市教育委員会学事課で毎年3月から5月に申請を受け付けます。成績証明書、在学証明書、世帯の所得証明書が必要です。</p><p><span class="marker">選考は書類審査と面接により行われ、定員に達し次第締め切り</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生が月額2万円、大学生等が月額4万円</strong>です。在学期間中、毎年度の継続審査を経て支給されます。</p><p><span class="marker">学業成績が一定水準を下回った場合や、退学した場合は支給が停止</span>されます。</p><div class="note-box">本制度は給付型のため、卒業後の返還義務はありません。ただし、日本学生支援機構の給付型奨学金との併給は原則として認められません。貸与型奨学金との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-sme-support',
    title: '西宮市 中小企業振興補助金',
    organization: '西宮市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['西宮市', '中小企業', '補助金'],
    eligibility: '西宮市内に事業所を有する中小企業者・小規模事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '西宮市が実施する中小企業振興補助金です。販路開拓や設備導入にかかる費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 中小企業振興補助金は、<span class="marker">市内の中小企業・小規模事業者が行う販路開拓や設備導入</span>に対して費用の一部を補助する制度です。</p><p>西宮市は酒造業を源流とする伝統産業から、近年ではIT・サービス業まで多彩な中小企業が活動しています。商工会議所と連携し、事業者の経営改善と成長を支援しています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は30万円</strong>です。<span class="marker-green">展示会出展やECサイト構築なども対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>展示会・商談会への出展費用</p><p>ECサイト・ホームページの構築費用</p><p>新商品開発・試作品制作費用</p><p>業務効率化のためのIT導入費用</p></div><p>西宮市役所産業文化局商工課に申請書と事業計画書を提出します。西宮商工会議所での事前相談も推奨されています。</p><p><span class="marker">交付決定前に着手・支払いした経費は対象外</span>です。申請後、審査を経て交付決定の通知が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限30万円</strong>です。補助対象経費の合計が10万円以上の事業が対象となります。</p><p><span class="marker">事業完了後の実績報告書と領収書の提出が必須</span>です。報告内容に基づいて最終的な補助額が確定します。</p><div class="highlight-box">西宮商工会議所では、補助金申請のサポートだけでなく、経営計画の策定支援や金融相談なども無料で行っています。まずは相談窓口を訪ねてみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-nursing-equipment',
    title: '西宮市 介護用品給付事業',
    organization: '西宮市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['西宮市', '介護用品', '給付'],
    eligibility: '西宮市に住所を有し、在宅で要介護4・5の方を介護している家族',
    applicationPeriod: '通年',
    description: '西宮市が実施する介護用品給付事業です。在宅で介護する家族に紙おむつ等の介護用品を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 介護用品給付事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対して、紙おむつ等の介護用品を給付する制度です。</p><p>西宮市は阪神間の住宅都市として高齢化が進行しており、在宅介護の負担軽減が重要な課題となっています。日常的に消費する介護用品の経済的負担を和らげることで、在宅介護の継続を支援しています。</p><p><span class="marker-green">市民税非課税世帯を対象に、年間最大10万円相当の介護用品が給付</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>西宮市に住民登録があり、在宅で要介護4・5の認定を受けた方を介護する市民税非課税世帯の家族が対象です。</p><div class="summary-box" data-title="給付される介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤</p><p>使い捨てシーツ</p></div><p>西宮市役所健康福祉局高齢介護課の窓口で申請します。<strong>介護保険被保険者証</strong>と介護認定結果通知書を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の給付上限は<strong>約8,500円相当</strong>で、年間では<strong>最大約10万円相当</strong>の介護用品が給付されます。</p><p><span class="marker">入院中や介護施設入所中は対象外</span>です。在宅での介護期間のみ給付を受けられます。</p><div class="note-box">給付品目はカタログから選択する方式で、毎月届けられます。要介護度が変更になった場合は再申請が必要です。介護保険サービスの福祉用具レンタルとは別制度ですので併用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-elderly-support',
    title: '西宮市 高齢者生活支援事業',
    organization: '西宮市',
    type: 'local',
    maxAmount: '無料（各種サービス提供）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['西宮市', '高齢者支援', '生活支援'],
    eligibility: '西宮市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '西宮市が実施する高齢者生活支援事業です。ひとり暮らし高齢者に緊急通報サービスや配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対して、安心して在宅生活を続けるためのサービスを提供する制度です。</p><p>西宮市は阪神間の人気住宅地として、退職後も住み続ける高齢者が多い地域です。阪神・淡路大震災の経験から、地域の見守り体制の整備に特に力を入れており、ICTも活用した多層的な支援を行っています。</p><p><span class="marker-green">緊急通報サービス、配食サービス、安否確認電話など、複数のサービスが利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>西宮市に住民登録がある65歳以上のひとり暮らしの方、高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="提供サービス"><p>緊急通報システム（ボタン1つで通報可能）</p><p>配食サービス（昼食・夕食の配達と安否確認）</p><p>定期的な安否確認電話</p><p>家事援助サービス</p></div><p>西宮市役所健康福祉局高齢介護課または各地域包括支援センターに相談・申請します。<strong>民生委員を通じた申請</strong>も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報システムは無料または低額</strong>で貸与されます。配食サービスは1食あたり数百円の自己負担で利用できます。</p><p><span class="marker">サービスの利用には事前の申請と審査が必要</span>です。所得に応じて自己負担額が異なる場合があります。</p><div class="highlight-box">西宮市では「にしのみや高齢者あんしんダイヤル」を設置しており、高齢者やその家族からの相談を24時間受け付けています。サービスの利用に迷ったら、まずお電話でご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-seismic-diagnosis',
    title: '西宮市 住宅耐震診断補助制度',
    organization: '西宮市',
    type: 'local',
    maxAmount: '最大5万円（診断費用補助）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '兵庫県',
    tags: ['西宮市', '耐震診断', '防災'],
    eligibility: '西宮市内に1981年5月31日以前に建築された住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（先着順）',
    description: '西宮市が実施する住宅耐震診断補助制度です。旧耐震基準の住宅の耐震診断費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 住宅耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された住宅</span>の耐震診断費用を補助する制度です。</p><p>西宮市は1995年の阪神・淡路大震災で甚大な被害を受け、住宅の耐震化は最重要課題の一つです。震災の教訓を活かし、市民の防災意識を高めるとともに、旧耐震基準の住宅の安全確保を推進しています。</p><p>診断費用の一部を補助し、<strong>上限は5万円</strong>です。<span class="marker-green">簡易診断は無料で受けることもできます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>西宮市内に所在する住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>木造・非木造を問わず対象</p><p>分譲マンションの場合は管理組合からの申請</p></div><p>西宮市役所都市局建築指導課に申請書を提出します。事前に市が実施する無料の簡易耐震診断を受けることも可能です。</p><p><span class="marker">診断実施前に必ず申請してください</span>。すでに診断が完了しているものは補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用の2分の1以内で、<strong>上限5万円</strong>が補助されます。木造住宅の場合、市が派遣する専門家による無料の簡易診断も利用可能です。</p><p><span class="marker">耐震改修工事の補助制度（最大130万円）も別途用意</span>されています。診断結果に基づき改修が必要と判定された場合はご活用ください。</p><div class="note-box">阪神・淡路大震災の被災地として、西宮市は耐震化率の向上に積極的に取り組んでいます。築年数の古い住宅をお持ちの方は、まず簡易診断から始めることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 尼崎市（兵庫県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'amagasaki-childcare-subsidy',
    title: '尼崎市 保育料軽減事業',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['尼崎市', '保育料', '補助金'],
    eligibility: '尼崎市に住所を有し、認可保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年',
    description: '尼崎市が実施する保育料軽減事業です。第2子以降の保育料を無償化する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 保育料軽減事業は、<span class="marker">認可保育施設に通う第2子以降の子ども</span>の保育料を無料化する制度です。</p><p>大阪市に隣接する尼崎市は、かつての工業都市から住みやすい街へと変貌を遂げ、近年は転入者が増加傾向にあります。下町情緒あふれる商店街と充実した子育て支援が評価され、子育て世帯にも人気が高まっています。</p><p><span class="marker-green">第1子の年齢にかかわらず、第2子以降の保育料が全額無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>尼崎市に住民登録があり、認可保育所・認定こども園等に在園する第2子以降の子どもの保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>事業所内保育事業所</p></div><p>入所申請時に自動適用されるため、<strong>別途の申請は原則不要</strong>です。認可外保育施設利用の場合は尼崎市役所こども青少年局保育企画課にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。0〜2歳児の第1子は世帯所得に応じた保育料が適用されます。</p><p><span class="marker">3歳以上は国の幼児教育・保育の無償化により全員無料</span>のため、本制度は主に0〜2歳児クラスの第2子以降に適用されます。</p><div class="note-box">副食費は別途徴収される場合があります。年収360万円未満相当の世帯や第3子以降は副食費免除の対象となります。尼崎市の保育所入所案内で詳細をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-birth-bonus',
    title: '尼崎市 出産祝い金給付事業',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['尼崎市', '出産祝い金', '給付金'],
    eligibility: '尼崎市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '尼崎市が実施する出産祝い金給付事業です。出産された方に最大10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 出産祝い金給付事業は、<span class="marker">尼崎市に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>尼崎市は大阪梅田まで電車で約5分という抜群のアクセスを誇りながら、神戸市にも近い利便性の高い都市です。近年「住みたい街ランキング」での評価が急上昇しており、子育て世帯の流入に対応した出産支援を充実させています。</p><p><strong>子ども1人につき10万円</strong>が支給されます。<span class="marker-green">所得制限なしで、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で尼崎市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市役所窓口で配布）</p><p>母子健康手帳</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>尼崎市役所こども青少年局こども家庭支援課の窓口で申請します。<span class="marker">出産後6か月以内に申請が必要</span>です。出生届と同時の手続きが便利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人につき10万円</strong>です。双子の場合は20万円が支給されます。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">尼崎市では出産祝い金に加え、産後ケア事業や新生児訪問事業も充実しています。助産師や保健師による家庭訪問で、育児の悩みを無料で相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-newlywed-rent',
    title: '尼崎市 新婚世帯家賃補助金',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '月額最大3万円（最長3年）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['尼崎市', '新婚', '家賃補助'],
    eligibility: '尼崎市内の賃貸住宅に居住する婚姻届出から2年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '尼崎市が実施する新婚世帯家賃補助金です。市内の賃貸住宅に住む新婚世帯に月額最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 新婚世帯家賃補助金は、<span class="marker">婚姻届出から2年以内の新婚世帯</span>に対して、市内の賃貸住宅の家賃を補助する制度です。</p><p>尼崎市は大阪市や神戸市へのアクセスが抜群で、家賃も阪神間の中では比較的手頃なエリアです。若い世帯の定住を促進するため、新婚期の住居費負担を軽減する支援を行っています。</p><p>月額最大3万円が<strong>最長3年間</strong>補助されます。<span class="marker-green">夫婦の合計所得が一定額未満であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出日から2年以内であること</p><p>夫婦ともに39歳以下であること</p><p>尼崎市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が400万円未満であること</p><p>市税を滞納していないこと</p></div><p>尼崎市役所都市整備局住宅政策課に申請書と必要書類を提出します。婚姻届受理証明書、賃貸借契約書、所得証明書が必要です。</p><p><span class="marker">申請月の翌月から補助が開始</span>されるため、婚姻届出後は早めに申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の補助額は<strong>家賃から3万円を差し引いた額で、上限は月額3万円</strong>です。家賃が3万円以下の場合は対象外です。</p><p><span class="marker">補助期間は最長3年間で、婚姻届出日から3年を超えた場合は終了</span>します。</p><div class="note-box">公営住宅、社宅、親族所有の住宅は対象外です。年度ごとに所得の確認が行われ、要件を満たさなくなった場合は補助が停止されます。尼崎市外に転出した場合も終了です。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-disability-medical',
    title: '尼崎市 重度障害者医療費助成制度',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['尼崎市', '障害者医療', '助成金'],
    eligibility: '尼崎市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '尼崎市が実施する重度障害者医療費助成制度です。重度の障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 重度障害者医療費助成制度は、<span class="marker">重度の障がいのある方が安心して医療を受けられるよう</span>、自己負担分を助成する制度です。</p><p>尼崎市はすべての市民が安心して暮らせるまちづくりを目指し、障がいのある方への医療費助成を兵庫県と連携して実施しています。通院・入院のいずれも対象で、経済的な負担を気にせず治療を受けられる環境を整えています。</p><p><span class="marker-green">所得が一定以下の方は自己負担なしで医療を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>尼崎市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳B1判定の重複障害</p></div><p>尼崎市役所健康福祉局障害福祉課で申請します。障害者手帳、健康保険証、本人確認書類が必要です。申請後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>兵庫県内の医療機関では受給者証を提示することで、<strong>保険診療の自己負担分が助成</strong>されます。所得に応じて一部自己負担が生じる場合があります。</p><p><span class="marker">県外の医療機関では一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書を保管してください。</p><div class="note-box">65歳以上で後期高齢者医療制度に加入する方は、後期高齢者医療制度の被保険者であることが条件となります。自立支援医療などの他の公費負担医療が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-school-lunch',
    title: '尼崎市 学校給食費無償化事業',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '給食費全額無償',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['尼崎市', '給食費', '無償化'],
    eligibility: '尼崎市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '通年（自動適用）',
    description: '尼崎市が実施する学校給食費無償化事業です。市立小中学校の給食費を全額無償化します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 学校給食費無償化事業は、<span class="marker">市立小中学校に在籍するすべての児童生徒の学校給食費</span>を全額無償化する制度です。</p><p>尼崎市は子育て世帯への支援を積極的に拡充しており、学校給食費の全額無償化を実現しました。栄養バランスの取れた給食をすべての子どもが経済的な心配なく食べられることで、子どもの健全な成長を支えています。</p><p><span class="marker-green">所得制限はなく、市立小中学校に在籍するすべての児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>尼崎市立小中学校に在籍する児童生徒の保護者が対象です。</p><div class="summary-box" data-title="無償化の概要"><p>小学校：給食費月額約4,500円が全額無償</p><p>中学校：給食費月額約5,000円が全額無償</p><p>アレルギー対応食も同様に無償</p></div><p><strong>個別の申請手続きは不要</strong>で、在籍するすべての児童生徒に自動的に適用されます。保護者への給食費の請求はありません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>給食費が全額無償</strong>となり、保護者の負担はゼロです。年間で小学校約5.4万円、中学校約6万円の負担軽減となります。</p><p><span class="marker">私立学校や特別支援学校に在籍する児童生徒は本制度の対象外</span>となります。</p><div class="highlight-box">尼崎市の学校給食は地産地消を推進しており、兵庫県産の食材を積極的に使用しています。食育の一環として、子どもたちが地域の食文化に触れる機会にもなっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-telework-bonus',
    title: '尼崎市 テレワーク推進補助金',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['尼崎市', 'テレワーク', '補助金'],
    eligibility: '尼崎市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '尼崎市が実施するテレワーク推進補助金です。テレワーク環境整備に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 テレワーク推進補助金は、<span class="marker">市内の中小企業がテレワーク環境を整備する際</span>の費用を補助する制度です。</p><p>尼崎市は大阪市に隣接する利便性の高い都市ですが、多様な働き方の推進と人材確保の観点から、テレワーク導入を支援しています。製造業が盛んな地域ですが、事務部門やサービス業でのテレワーク活用を促進しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は15万円</strong>です。<span class="marker-green">初めてテレワークを導入する企業が優先</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>ノートPC・タブレットの購入費</p><p>Web会議ツールの導入費</p><p>VPN・セキュリティ対策費</p><p>テレワーク用通信回線整備費</p></div><p>尼崎市役所経済環境局経済部商業課に申請書と見積書を提出します。テレワーク導入計画の策定も求められます。</p><p><span class="marker">交付決定前の購入・契約は補助対象外</span>です。必ず交付決定後に導入してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限15万円</strong>です。1事業者につき1回限りの申請です。</p><p><span class="marker">導入後3か月以上のテレワーク実施実績の報告</span>が求められます。</p><div class="note-box">テレワーク導入に伴う就業規則の改定については、社会保険労務士による無料相談を市が実施しています。セキュリティ対策のガイドラインも市のウェブサイトで公開されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-nursing-home-reform',
    title: '尼崎市 高齢者住宅改修支援事業',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['尼崎市', '介護改修', '補助金'],
    eligibility: '尼崎市に住所を有し、要介護・要支援認定を受けた方の同居家族',
    applicationPeriod: '通年',
    description: '尼崎市が実施する高齢者住宅改修支援事業です。介護に必要な住宅改修費用を最大25万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 高齢者住宅改修支援事業は、<span class="marker">要介護・要支援認定を受けた方の在宅生活を支える</span>ための住宅改修費用を補助する制度です。</p><p>尼崎市は高齢者が住み慣れた地域で安心して暮らし続けられるよう、住環境のバリアフリー化を支援しています。介護保険制度の住宅改修費に市独自の上乗せ補助を行い、より安全な住まいづくりを後押しします。</p><p><span class="marker-green">介護保険の住宅改修費（上限20万円）に加えて、市独自で最大25万円を補助</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>尼崎市に住民登録があり、介護保険の要介護・要支援認定を受けた方の住宅が対象です。</p><div class="summary-box" data-title="対象となる改修工事"><p>手すりの取付け</p><p>段差の解消・スロープ設置</p><p>床材の変更（滑り止め加工）</p><p>扉の改修（引き戸化）</p><p>浴室・トイレの改修</p></div><p>尼崎市役所健康福祉局高齢介護課に事前申請します。ケアマネジャーとの相談のうえ、<span class="marker">工事着手前に必ず申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の補助額は<strong>上限25万円</strong>です。介護保険の住宅改修費と合わせることで、より大規模な改修が可能になります。</p><p><span class="marker">事前申請なしに着工した場合は補助対象外</span>です。施工前後の写真撮影も必須です。</p><div class="highlight-box">尼崎市では住宅改修の相談窓口を設けており、ケアマネジャーだけでなく市のリハビリ専門職による住環境アドバイスも受けられます。最適な改修プランの検討にぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-energy-support',
    title: '尼崎市 省エネ設備導入補助金',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['尼崎市', '省エネ', '補助金'],
    eligibility: '尼崎市に住所を有する世帯',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '尼崎市が実施する省エネ設備導入補助金です。省エネ家電や設備の導入費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 省エネ設備導入補助金は、<span class="marker">家庭での省エネ設備の導入費用</span>を補助する制度です。</p><p>尼崎市は「環境モデル都市」に選定された経験を持ち、脱炭素社会の実現に向けた施策を積極的に展開しています。家庭部門のCO2排出削減のため、省エネ性能の高い家電製品や設備への切り替えを支援しています。</p><p>補助額は購入費用の10〜20%で、<strong>上限は5万円</strong>です。<span class="marker-green">エアコン、冷蔵庫、給湯器などの省エネ型製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>省エネエアコン（統一省エネラベル3つ星以上）</p><p>省エネ冷蔵庫（統一省エネラベル3つ星以上）</p><p>高効率給湯器（エコキュート等）</p><p>LED照明器具</p></div><p>尼崎市役所経済環境局環境部環境創造課に申請書と領収書を提出します。</p><p><span class="marker">古い設備からの買い替えであることを証明するリサイクル券等が必要</span>です。新規購入のみは対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の10〜20%で、<strong>上限5万円</strong>です。設備の種類によって補助率が異なります。1世帯あたり年度内1回の申請が可能です。</p><p><span class="marker">先着順で受付し、予算に達し次第終了</span>します。例年人気の高い制度です。</p><div class="note-box">尼崎市では太陽光発電システムや蓄電池の導入補助も別途実施しています。住宅の省エネ化を総合的に検討される場合は、複数の補助制度を組み合わせてご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-bousai-equipment',
    title: '尼崎市 家庭用防災設備購入補助金',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'disaster',
    prefecture: '兵庫県',
    tags: ['尼崎市', '防災設備', '補助金'],
    eligibility: '尼崎市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '尼崎市が実施する家庭用防災設備購入補助金です。防災設備の購入費用を最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 家庭用防災設備購入補助金は、<span class="marker">家庭での地震・水害等に備えた防災設備の購入費用</span>を補助する制度です。</p><p>尼崎市は武庫川や猪名川に囲まれた低地に位置し、水害リスクへの備えが欠かせません。また、1995年の阪神・淡路大震災で大きな被害を受けた経験から、各家庭での防災対策を推進しています。</p><p>補助率は購入費用の2分の1で、<strong>上限は3万円</strong>です。<span class="marker-green">家具固定器具や感震ブレーカーなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象防災設備"><p>家具転倒防止器具</p><p>感震ブレーカー</p><p>ガラス飛散防止フィルム</p><p>非常用ポータブル電源</p><p>止水板（水害対策）</p></div><p>尼崎市役所危機管理安全局危機管理安全部に申請書と領収書、設置写真を提出します。</p><p><span class="marker">購入後3か月以内に申請が必要</span>です。市内外の店舗での購入が対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限3万円</strong>です。1世帯あたり年度内1回の申請が可能です。</p><p><span class="marker">食料品・飲料水などの消耗品は補助対象外</span>です。設置型・固定型の防災設備に限られます。</p><div class="highlight-box">尼崎市は水害ハザードマップの整備にも力を入れています。補助金を活用して防災設備を整えるとともに、お住まいの地域の災害リスクを確認し、避難計画を立てておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 枚方市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hirakata-childcare-subsidy',
    title: '枚方市 保育料軽減補助金',
    organization: '枚方市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['枚方市', '保育料', '補助金'],
    eligibility: '枚方市に住所を有し、認可保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年',
    description: '枚方市が実施する保育料軽減補助金です。第2子以降の保育料を全額無償化する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 保育料軽減補助金は、<span class="marker">認可保育施設に通う第2子以降の子ども</span>の保育料を全額無償化する制度です。</p><p>枚方市は大阪市と京都市の中間に位置し、京阪電鉄沿線のベッドタウンとして発展してきました。「ひらかたパーク」で知られるこの街は、子育て世帯が多く暮らす住宅都市であり、保育料の負担軽減に力を入れています。</p><p><span class="marker-green">第1子の年齢にかかわらず、第2子以降の保育料が全額無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>枚方市に住民登録があり、認可保育所・認定こども園等に在園する第2子以降の子どもの保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>家庭的保育事業所</p></div><p>保育施設の入所申請時に自動適用されるため、<strong>原則として別途の申請は不要</strong>です。認可外保育施設を利用している場合は枚方市役所子ども未来部保育幼稚園課にご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。0〜2歳児クラスの第1子は世帯所得に応じた保育料が適用されます。</p><p><span class="marker">3歳以上は国の幼児教育・保育の無償化により全員無料</span>のため、本制度は主に0〜2歳児クラスの多子世帯に効果を発揮します。</p><div class="note-box">副食費は別途徴収される場合があります。年収360万円未満相当の世帯や第3子以降は副食費免除の対象です。枚方市の「子育てわくわくサイト」でも最新情報を確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-birth-bonus',
    title: '枚方市 出産祝い金',
    organization: '枚方市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['枚方市', '出産祝い金', '給付金'],
    eligibility: '枚方市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '枚方市が実施する出産祝い金制度です。出産された方に最大10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 出産祝い金は、<span class="marker">枚方市に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>枚方市は京阪電鉄の主要駅が市内に複数あり、大阪市内や京都市内へのアクセスが良好な約40万人の都市です。近年は駅前再開発も進み、子育て世帯の定住促進に向けた出産・子育て支援策を充実させています。</p><p><strong>子ども1人につき10万円</strong>が支給されます。<span class="marker-green">所得制限なしで、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で枚方市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書</p><p>母子健康手帳</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>枚方市役所子ども未来部子ども青少年政策課の窓口で申請します。<span class="marker">出産後6か月以内に申請が必要</span>です。各支所でも受付可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人につき10万円</strong>です。多胎児の場合はそれぞれの子どもについて支給されます。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">枚方市では出産祝い金のほか、妊婦健康診査の公費負担（14回分）や産後ケア事業も実施しています。出産前後のサポートを総合的にご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-housing-purchase',
    title: '枚方市 若年・子育て世帯住宅取得補助金',
    organization: '枚方市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['枚方市', '住宅取得', '補助金'],
    eligibility: '枚方市内に住宅を取得する40歳未満の方または子育て世帯',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '枚方市が実施する若年・子育て世帯住宅取得補助金です。市内に住宅を取得する際に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 若年・子育て世帯住宅取得補助金は、<span class="marker">40歳未満の方や子育て世帯が市内に住宅を取得する際</span>に費用の一部を補助する制度です。</p><p>枚方市は大阪・京都の中間に位置する交通利便性の高い都市ですが、人口減少への対策として若い世帯の定住を促進しています。新築・中古のマイホーム取得を支援し、住みたい街としての魅力を高めています。</p><p>基本額は20万円で、<strong>市外からの転入は20万円加算で最大40万円</strong>です。<span class="marker-green">新築・中古・マンション・一戸建てのいずれも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>申請者が40歳未満、または18歳未満の子どもがいる世帯</p><p>枚方市内に住宅を取得し、居住すること</p><p>市税の滞納がないこと</p><p>5年以上継続して居住する意思があること</p></div><p>枚方市役所都市整備部住宅まちづくり課に申請書と必要書類を提出します。売買契約書、登記事項証明書、住民票が必要です。</p><p><span class="marker">住宅取得後1年以内に申請が必要</span>です。予算枠に限りがあるため早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額は<strong>20万円</strong>で、市外からの転入世帯には<strong>20万円が加算</strong>されます。</p><p><span class="marker">三世代同居・近居の場合はさらに加算がある場合があります</span>。詳細は市の窓口でお問い合わせください。</p><div class="note-box">投資用・賃貸用物件は対象外です。5年以内に転出した場合は補助金の返還を求められることがあります。住宅の床面積や築年数に関する要件がありますので事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-infertility',
    title: '枚方市 不妊治療費助成制度',
    organization: '枚方市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['枚方市', '不妊治療', '助成金'],
    eligibility: '枚方市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後6か月以内',
    description: '枚方市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 不妊治療費助成制度は、<span class="marker">保険適用後の不妊治療にかかる自己負担分</span>を市独自に助成する制度です。</p><p>枚方市では、不妊に悩む夫婦が経済的な理由で治療を断念することがないよう、保険適用後の自己負担分について市独自の助成を行っています。大阪府の助成制度にも上乗せする形で支援しています。</p><p><strong>1回の治療につき最大10万円</strong>が助成されます。<span class="marker-green">大阪府の不妊治療助成との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>枚方市に住民登録がある法律上の夫婦またはパートナーが対象です。</p><div class="summary-box" data-title="対象となる治療"><p>体外受精</p><p>顕微授精</p><p>男性不妊治療</p><p>凍結胚移植</p></div><p>枚方市保健センターに申請書と医療機関発行の証明書、領収書を提出します。<span class="marker">治療終了後6か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分について、<strong>1回の治療あたり最大10万円</strong>が助成されます。</p><p><span class="marker">年間の助成回数には上限があります</span>。通算の助成回数についても市の窓口でご確認ください。</p><div class="highlight-box">枚方市では不妊に関する相談窓口を設置しており、保健師や専門の相談員が対応しています。治療の進め方や助成金の手続きについて、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-scholarship',
    title: '枚方市 奨学金制度',
    organization: '枚方市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '大阪府',
    tags: ['枚方市', '奨学金', '教育支援'],
    eligibility: '枚方市に住所を有する高校生・大学生等で経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '枚方市が実施する奨学金制度です。経済的に修学が困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対して返還不要の奨学金を給付する制度です。</p><p>枚方市は関西外国語大学や大阪歯科大学などの教育機関が立地する文教都市でもあります。学びたい意欲のある若者が経済的な理由であきらめることがないよう、市独自の給付型奨学金制度を運用しています。</p><p><span class="marker-green">返還不要の給付型で、高校生は月額1.5万円、大学生等は月額3万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>枚方市に1年以上住所を有すること</p><p>高等学校、大学、短期大学、専門学校等に在学中であること</p><p>世帯の所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>枚方市教育委員会学校教育課で毎年4月から5月に申請を受け付けます。在学証明書、成績証明書、所得証明書が必要です。</p><p><span class="marker">定員に限りがあるため、選考は書類審査により行われます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生が月額1.5万円、大学生等が月額3万円</strong>です。在学期間中、毎年度の継続審査を経て支給されます。</p><p><span class="marker">学業成績の低下や退学した場合は支給停止</span>となります。年度ごとに成績報告と所得状況の確認が必要です。</p><div class="note-box">本制度は給付型のため、卒業後の返還義務はありません。他の給付型奨学金との併給制限がある場合がありますので、事前にご確認ください。貸与型奨学金との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-sme-support',
    title: '枚方市 中小企業設備投資支援補助金',
    organization: '枚方市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['枚方市', '中小企業', '設備投資'],
    eligibility: '枚方市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '枚方市が実施する中小企業設備投資支援補助金です。生産性向上のための設備投資に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 中小企業設備投資支援補助金は、<span class="marker">市内の中小企業が行う生産性向上のための設備投資</span>に対して費用の一部を補助する制度です。</p><p>枚方市は大阪・京都間に位置する産業都市で、機械金属工業をはじめ多くの中小企業が活動しています。デジタル化や生産性向上への投資を支援し、地域経済の活性化を図っています。</p><p>補助率は対象経費の3分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">製造業だけでなく全業種が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>製造設備・機械の購入費</p><p>IT・デジタルツールの導入費</p><p>省エネ設備の導入費</p><p>生産性向上のためのシステム構築費</p></div><p>枚方市役所観光にぎわい部商工振興課に申請書と事業計画書を提出します。枚方商工会議所での事前相談が推奨されています。</p><p><span class="marker">交付決定前の発注・支払いは補助対象外</span>です。必ず交付決定後に設備導入を進めてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の1以内で、<strong>上限50万円</strong>です。補助対象経費の合計が30万円以上の事業が対象となります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>します。年度初めの申請がおすすめです。</p><div class="highlight-box">枚方商工会議所では経営改善や補助金申請のサポートを無料で行っています。国の「ものづくり補助金」や「IT導入補助金」との併用も検討でき、より大規模な投資が可能になります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-nursing-equipment',
    title: '枚方市 介護用品支給事業',
    organization: '枚方市',
    type: 'local',
    maxAmount: '年間最大9万円相当',
    maxAmountNum: 9,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['枚方市', '介護用品', '支給'],
    eligibility: '枚方市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '枚方市が実施する介護用品支給事業です。在宅で要介護者を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護している家族</span>に対して、紙おむつ等の介護用品を支給する制度です。</p><p>枚方市は高齢化の進行に伴い、在宅介護を支える施策の充実に取り組んでいます。日常的に必要な介護用品の費用負担を軽減し、介護する家族の経済的・精神的な負担を和らげることを目的としています。</p><p><span class="marker-green">市民税非課税世帯を対象に、年間最大9万円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>枚方市に住民登録があり、在宅で要介護3以上の認定を受けた方を介護している市民税非課税世帯の家族が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤・ウェットティッシュ</p><p>使い捨て手袋・防水シーツ</p></div><p>枚方市役所健康福祉部高齢社会室の窓口で申請します。<strong>介護保険被保険者証</strong>と本人確認書類が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の支給上限は<strong>約7,500円相当</strong>で、年間では<strong>最大約9万円相当</strong>の介護用品が支給されます。</p><p><span class="marker">入院中や施設入所中は支給対象外</span>です。在宅での介護期間のみ支給を受けられます。</p><div class="note-box">支給品目はカタログから選択可能で、介護状況の変化に応じて品目の変更もできます。介護保険サービスの福祉用具レンタルとは別制度のため、あわせてご利用いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-elderly-support',
    title: '枚方市 高齢者緊急通報サービス',
    organization: '枚方市',
    type: 'local',
    maxAmount: '無料（機器貸与）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '大阪府',
    tags: ['枚方市', '高齢者見守り', '緊急通報'],
    eligibility: '枚方市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '枚方市が実施する高齢者緊急通報サービスです。ひとり暮らし高齢者に緊急通報装置を無料で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 高齢者緊急通報サービスは、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対して、緊急通報装置を無料で貸与する制度です。</p><p>枚方市は丘陵地に住宅が広がる地形的特徴があり、坂道の多い地域での高齢者の安全確保が課題となっています。ボタン一つで通報できるシステムにより、急な体調不良や転倒時に迅速な対応が可能となります。</p><p><span class="marker-green">緊急通報装置は無料で貸与され、24時間365日対応のコールセンターに接続</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>枚方市に住民登録がある65歳以上のひとり暮らしの方、高齢者のみの世帯の方が対象です。</p><div class="summary-box" data-title="サービス内容"><p>緊急通報装置（据置型）の無料貸与</p><p>ペンダント型緊急ボタン</p><p>24時間対応コールセンター</p><p>人感センサーによる安否確認（一部機種）</p></div><p>枚方市役所健康福祉部高齢社会室の窓口で申請します。<strong>本人確認書類と緊急連絡先の届出</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>装置の貸与は無料</strong>です。緊急ボタンを押すと24時間対応のコールセンターに接続され、状況に応じて救急車の手配や緊急連絡先への通知が行われます。</p><p><span class="marker">固定電話回線または携帯回線が必要</span>です。ご自宅の通信環境をご確認ください。</p><div class="highlight-box">枚方市では緊急通報サービスのほか、配食による見守りサービスや、地域のボランティアによる声かけ訪問活動も展開しています。ご家族が遠方にお住まいでも安心の体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-seismic-diagnosis',
    title: '枚方市 木造住宅耐震診断補助制度',
    organization: '枚方市',
    type: 'local',
    maxAmount: '最大5万円（診断費用補助）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['枚方市', '耐震診断', '防災'],
    eligibility: '枚方市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（先着順）',
    description: '枚方市が実施する木造住宅耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 木造住宅耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を補助する制度です。</p><p>枚方市は2018年の大阪府北部地震で震度6弱を記録し、住宅の耐震化の重要性が改めて認識されました。旧耐震基準の木造住宅について、専門家による耐震診断を受けやすくすることで、住宅の安全確保を推進しています。</p><p>診断費用の一部を補助し、<strong>上限は5万円</strong>です。<span class="marker-green">市による無料の簡易耐震診断も利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>枚方市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p><p>自己所有の住宅であること</p></div><p>枚方市役所都市整備部建築指導課に申請書を提出します。まずは市が実施する無料の簡易耐震診断を受けることをおすすめします。</p><p><span class="marker">診断実施前に申請が必要</span>です。すでに診断を完了したものは対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用の2分の1以内で、<strong>上限5万円</strong>が補助されます。</p><p><span class="marker">耐震改修工事の補助制度（最大100万円）も別途利用可能</span>です。診断結果に基づき改修が必要な場合はご活用ください。</p><div class="note-box">2018年の大阪府北部地震を受け、枚方市は耐震化率の向上に特に力を入れています。ブロック塀の安全点検・撤去補助制度もありますので、住宅だけでなく外構の安全も確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 豊中市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'toyonaka-childcare-subsidy',
    title: '豊中市 保育料軽減補助金',
    organization: '豊中市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['豊中市', '保育料', '補助金'],
    eligibility: '豊中市に住所を有し、認可保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年',
    description: '豊中市が実施する保育料軽減補助金です。第2子以降の保育料を全額無償化する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 保育料軽減補助金は、<span class="marker">認可保育施設に通う第2子以降の子ども</span>の保育料を全額無償化する制度です。</p><p>大阪府北部に位置する豊中市は、大阪国際空港（伊丹空港）が所在し、千里ニュータウンに代表される計画的な住宅開発が進められた文教都市です。教育・子育て環境の充実度が高く、保育料の軽減により多子世帯の経済的負担を軽減しています。</p><p><span class="marker-green">第1子の年齢に関係なく、第2子以降の保育料が全額無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊中市に住民登録があり、認可保育所・認定こども園等に在園する第2子以降の子どもの保護者が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>事業所内保育事業所</p></div><p>入所申請時に自動的に適用されるため、<strong>原則として別途の申請は不要</strong>です。認可外保育施設利用の場合は豊中市役所こども未来部保育幼稚園総務課にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。0〜2歳児クラスの第1子は世帯所得に応じた保育料となります。</p><p><span class="marker">3歳以上は国の幼児教育・保育の無償化で全員無料</span>のため、本制度は0〜2歳児の多子世帯に特に効果的です。</p><div class="note-box">副食費は無償化の対象外で別途徴収されます。ただし、年収360万円未満相当の世帯や第3子以降は副食費も免除の対象です。豊中市の「こそだて情報ナビ」でも最新情報をご確認いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-birth-bonus',
    title: '豊中市 出産・子育て応援給付金',
    organization: '豊中市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['豊中市', '出産祝い金', '給付金'],
    eligibility: '豊中市に住所を有し、出産した方',
    applicationPeriod: '出産後4か月以内',
    description: '豊中市が実施する出産・子育て応援給付金です。出産した方に合計10万円の給付金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 出産・子育て応援給付金は、<span class="marker">豊中市に住所を有する方が妊娠届出・出産した際</span>に給付金を支給する制度です。</p><p>豊中市は千里ニュータウンの開発以来、計画的な街づくりで知られる住宅都市です。大阪梅田へ約15分のアクセスの良さと、緑豊かな住環境を兼ね備え、子育て世帯に人気があります。出産に伴う経済的負担を総合的に支援しています。</p><p><strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>が支給されます。<span class="marker-green">所得制限なしで、すべての妊産婦が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊中市に住民登録がある妊産婦が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時：保健師等との面談後、出産応援給付金5万円の申請</p><p>出生届出後：保健師等との面談後、子育て応援給付金5万円の申請</p><p>申請書と口座情報を提出</p><p>約1〜2か月後に振込</p></div><p>豊中市保健センターで面談を受けた後、申請書を提出します。<span class="marker">面談の受講が給付の条件</span>となりますので、必ず面談を受けてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。多胎妊娠の場合、子育て応援給付金は子ども1人につき5万円が支給されます。</p><p><span class="marker">他の自治体で同様の給付金を受給済みの場合は対象外</span>です。転入された方は前住所地での受給状況をご確認ください。</p><div class="highlight-box">豊中市では妊産婦向けの包括支援センター「とよなかっ子ダイヤル」を設けており、妊娠・出産・子育てに関する相談にワンストップで対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-newlywed-rent',
    title: '豊中市 新婚世帯向け家賃補助制度',
    organization: '豊中市',
    type: 'local',
    maxAmount: '月額最大3万円（最長3年）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['豊中市', '新婚', '家賃補助'],
    eligibility: '豊中市内の賃貸住宅に居住する婚姻届出から3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '豊中市が実施する新婚世帯向け家賃補助制度です。市内の賃貸住宅に住む新婚世帯に月額最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 新婚世帯向け家賃補助制度は、<span class="marker">婚姻届出から3年以内の新婚世帯</span>に対して、市内の賃貸住宅の家賃を補助する制度です。</p><p>豊中市は大阪北部の人気住宅地として、新生活を始める若い世帯にも人気があります。千里中央や豊中駅周辺には商業施設が充実しており、住環境と利便性のバランスが取れた都市です。新婚期の住居費負担を軽減し、豊中での定住を促進しています。</p><p>月額最大3万円が<strong>最長3年間</strong>補助されます。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出日から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>豊中市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が500万円未満であること</p><p>市税を滞納していないこと</p></div><p>豊中市役所都市計画推進部住宅課に申請書類を提出します。婚姻届受理証明書、賃貸借契約書の写し、所得証明書が必要です。</p><p><span class="marker">申請月の翌月から補助開始</span>となるため、早めの申請が有利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の補助額は<strong>家賃（共益費除く）と4万円の差額で、上限は月額3万円</strong>です。家賃が4万円以下の場合は対象外となります。</p><p><span class="marker">補助期間は最長3年間で、婚姻届出日から3年経過時点で終了</span>します。</p><div class="note-box">公営住宅や社宅は対象外です。所得要件は年度ごとに確認が行われ、超過した場合は補助が停止されます。豊中市外への転出時も補助は終了となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-disability-medical',
    title: '豊中市 重度障害者医療費助成制度',
    organization: '豊中市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['豊中市', '障害者医療', '助成金'],
    eligibility: '豊中市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '豊中市が実施する重度障害者医療費助成制度です。重度の障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 重度障害者医療費助成制度は、<span class="marker">重度の障がいのある方が安心して医療を受けられるよう</span>、自己負担分を助成する制度です。</p><p>豊中市は大阪府福祉のまちづくり条例の先進自治体として、障がいのある方が暮らしやすい環境整備に取り組んできました。大阪府の福祉医療制度と連携し、通院・入院にかかる医療費の負担を軽減しています。</p><p><span class="marker-green">1医療機関あたり1日500円以内の自己負担で受診可能</span>です（月2日を限度）。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊中市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定</p><p>精神障害者保健福祉手帳1級</p><p>特定疾患医療受給者証をお持ちの方（一部）</p></div><p>豊中市役所福祉部障害福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類が必要です。申請後、<strong>「医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>大阪府内の医療機関では医療証を提示することで、<strong>1日あたり最大500円（月2日限度）の自己負担</strong>で受診できます。3日目以降は自己負担なしです。</p><p><span class="marker">府外の医療機関で受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="highlight-box">院外処方の場合、薬局での自己負担はありません。入院時の食事療養費は対象外です。他の公費負担医療（自立支援医療等）が適用される場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-school-lunch',
    title: '豊中市 学校給食費補助事業',
    organization: '豊中市',
    type: 'local',
    maxAmount: '給食費の半額補助',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '大阪府',
    tags: ['豊中市', '給食費', '教育支援'],
    eligibility: '豊中市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '通年（自動適用）',
    description: '豊中市が実施する学校給食費補助事業です。小中学校の給食費の半額を市が補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 学校給食費補助事業は、<span class="marker">市立小中学校に在籍する児童生徒の学校給食費</span>の半額を市が補助する制度です。</p><p>豊中市は「教育日本一」を目指す教育先進都市として、学校教育環境の充実に力を入れています。すべての子どもが栄養バランスの取れた給食を安心して食べられるよう、保護者の負担軽減を図っています。</p><p><span class="marker-green">所得制限なしで、豊中市立小中学校に在籍するすべての児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊中市立小中学校に在籍する児童生徒の保護者が対象です。</p><div class="summary-box" data-title="補助の概要"><p>小学校：給食費月額の半額を補助</p><p>中学校：給食費月額の半額を補助</p><p>アレルギー対応食の場合も同様</p></div><p><strong>個別の申請手続きは不要</strong>で、在籍するすべての児童生徒に自動適用されます。保護者には補助後の金額で給食費が徴収されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>給食費の半額が市の補助</strong>により軽減されます。年間で1人あたり約2〜3万円の負担軽減となります。</p><p><span class="marker">就学援助制度の認定を受けている世帯は、残りの自己負担分も免除</span>され、実質無料となります。</p><div class="note-box">私立学校に通う児童生徒は本制度の対象外です。豊中市の学校給食では地元産の食材を積極的に使用しており、食育活動の一環としても位置づけられています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-telework-bonus',
    title: '豊中市 テレワーク環境整備補助金',
    organization: '豊中市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['豊中市', 'テレワーク', '補助金'],
    eligibility: '豊中市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '豊中市が実施するテレワーク環境整備補助金です。テレワーク環境の構築費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 テレワーク環境整備補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに構築する際</span>の費用を補助する制度です。</p><p>豊中市は大阪国際空港に隣接し、千里中央を中心にオフィスビルも多い都市です。大阪市中心部へのアクセスの良さから、テレワークと出社を組み合わせたハイブリッドな働き方を推進する企業が増えています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">従業員の働き方改革を推進する中小企業を支援</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用PC・タブレットの購入費</p><p>Web会議システム・クラウドサービスの導入費</p><p>VPN・セキュリティソフトの導入費</p><p>テレワーク用通信環境整備費</p></div><p>豊中市役所都市活力部産業振興課に申請書と見積書、テレワーク導入計画書を提出します。</p><p><span class="marker">交付決定前に購入・契約した経費は補助対象外</span>です。必ず交付決定を受けてから導入してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者あたり1回限りの申請です。</p><p><span class="marker">テレワーク導入後6か月間の実施報告が必要</span>です。実際のテレワーク実施状況の確認が行われます。</p><div class="highlight-box">豊中商工会議所ではテレワーク導入セミナーやITツール活用講座も開催しています。就業規則の整備やセキュリティポリシーの策定についても専門家に相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-nursing-home-reform',
    title: '豊中市 介護住宅改修補助事業',
    organization: '豊中市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['豊中市', '介護住宅改修', '補助金'],
    eligibility: '豊中市に住所を有し、要介護・要支援認定を受けた方の同居家族',
    applicationPeriod: '通年',
    description: '豊中市が実施する介護住宅改修補助事業です。在宅介護に必要な住宅改修費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 介護住宅改修補助事業は、<span class="marker">要介護・要支援認定を受けた方の在宅生活を支えるため</span>に住宅改修費用を補助する制度です。</p><p>豊中市は千里ニュータウンの開発から半世紀以上が経過し、高齢化への対応が重要な課題です。築年数の古い住宅のバリアフリー化を推進し、高齢者が住み慣れた地域で安心して暮らし続けられるよう支援しています。</p><p><span class="marker-green">介護保険の住宅改修費に加えて、市独自の補助で最大20万円を上乗せ</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊中市に住民登録があり、介護保険の要介護・要支援認定を受けた方の住宅が対象です。</p><div class="summary-box" data-title="対象となる改修工事"><p>手すりの取付け</p><p>段差解消・スロープ設置</p><p>滑り止め床材への変更</p><p>引き戸への変更</p><p>トイレ・浴室の改修</p></div><p>豊中市役所福祉部高齢者支援課に事前申請します。ケアマネジャーと相談のうえ、<span class="marker">工事着手前に必ず申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の補助額は<strong>上限20万円</strong>です。介護保険の住宅改修費（上限20万円・1〜3割自己負担）との併用で、より充実した改修が可能です。</p><p><span class="marker">事前申請なしに着工した場合は補助対象外</span>です。工事完了後の実績報告も必要です。</p><div class="note-box">豊中市では住環境アドバイザー制度があり、リハビリの専門職が自宅を訪問して最適な改修プランを提案してくれます。改修工事を検討する前にぜひご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-energy-support',
    title: '豊中市 省エネ家電購入補助金',
    organization: '豊中市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '大阪府',
    tags: ['豊中市', '省エネ', '補助金'],
    eligibility: '豊中市に住所を有する世帯',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '豊中市が実施する省エネ家電購入補助金です。省エネ性能の高い家電への買い替えに最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 省エネ家電購入補助金は、<span class="marker">省エネ性能の高い家電製品への買い替え費用</span>を補助する制度です。</p><p>豊中市は2050年ゼロカーボンシティを宣言し、家庭部門のCO2排出削減に取り組んでいます。エアコンや冷蔵庫など消費電力の大きい家電の省エネ化を促進し、光熱費の削減と環境保全の両立を目指しています。</p><p>補助額は購入金額の10%で、<strong>上限は5万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p><p>LED照明器具</p><p>高効率給湯器（エコキュート・エネファーム等）</p></div><p>豊中市役所環境部環境政策課に申請書と領収書、製品の仕様書を提出します。</p><p><span class="marker">古い家電からの買い替えを証明するリサイクル券等が必要</span>です。新規購入は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入金額（税抜）の10%で、<strong>上限5万円</strong>です。1世帯あたり年度内1回の申請が可能です。</p><p><span class="marker">毎年人気の高い制度で、先着順に予算が消化されます</span>。申請開始直後に枠が埋まることもありますのでお早めにご検討ください。</p><div class="highlight-box">豊中市では省エネ家電の補助に加え、太陽光パネルや蓄電池の設置補助も実施しています。住宅全体の省エネ化を検討される場合は、複数の補助制度を組み合わせるとより効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-bousai-equipment',
    title: '豊中市 家庭用防災資機材購入補助金',
    organization: '豊中市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['豊中市', '防災資機材', '補助金'],
    eligibility: '豊中市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '豊中市が実施する家庭用防災資機材購入補助金です。防災用品の購入費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 家庭用防災資機材購入補助金は、<span class="marker">家庭での地震・災害に備えた防災資機材の購入費用</span>を補助する制度です。</p><p>豊中市は2018年の大阪府北部地震で震度5強を記録し、住宅の被害や停電・断水が発生した経験があります。この教訓を活かし、各家庭での防災対策を推進しています。家具の転倒防止やポータブル電源の備蓄など、自助の備えを支援します。</p><p>補助率は購入費用の2分の1で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカーや家具固定器具、非常用電源が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災資機材"><p>家具転倒防止器具（L型金具、突っ張り棒等）</p><p>感震ブレーカー</p><p>ガラス飛散防止フィルム</p><p>非常用蓄電池・ポータブル電源</p><p>防災行政無線戸別受信機</p></div><p>豊中市役所危機管理課に申請書と領収書、購入品の写真を提出します。</p><p><span class="marker">購入後3か月以内に申請が必要</span>です。市内外の店舗やオンラインショップでの購入が対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限5万円</strong>です。1世帯あたり年度内1回の申請が可能です。</p><p><span class="marker">食料品・飲料水などの消耗品は対象外</span>で、設置型・耐久型の防災資機材に限られます。</p><div class="note-box">豊中市は2018年の地震を受け、小中学校の体育館へのエアコン設置や備蓄品の充実も進めています。家庭での備えとあわせて、最寄りの避難所やハザードマップの確認もお忘れなく。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
];
