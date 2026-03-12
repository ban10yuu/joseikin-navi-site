import { Grant } from '@/lib/types';

export const cityGrantsBatch52: Grant[] = [
  // ────────────────────────────────────────────────
  // 東大阪市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'higashiosaka-childcare-subsidy',
    title: '東大阪市 保育料軽減補助金',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '第2子以降 最大月額2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['東大阪市', '保育料軽減', '補助金'],
    eligibility: '東大阪市に住所を有し、認可保育所・認定こども園等に子どもを通わせている多子世帯の保護者',
    applicationPeriod: '通年（年度ごとの申請）',
    description: '東大阪市が実施する保育料軽減補助金です。多子世帯の経済的負担を軽減するため、第2子以降の保育料を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 保育料軽減補助金は、<span class="marker">認可保育所・認定こども園・小規模保育事業所等を利用する多子世帯</span>を対象に、保育料の負担を軽減する制度です。</p><p>中小企業の街として知られる東大阪市は、ラグビーの聖地「花園ラグビー場」を擁し、モノづくりと子育てが両立できる街づくりを推進しています。共働き世帯が多い地域特性を踏まえ、保育料の負担軽減に力を入れています。</p><p><span class="marker-green">第2子は半額、第3子以降は無料となる国の制度に加え、市独自の上乗せ補助が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>東大阪市に住民登録があり、認可保育施設等に在園する子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育料軽減申請書（市指定様式）</p><p>保護者の本人確認書類</p><p>保育施設の在園証明書</p><p>世帯の課税証明書（必要に応じて）</p></div><p>東大阪市役所子どもすこやか部の窓口または各保育施設を通じて申請できます。<strong>年度ごとの更新手続き</strong>が必要ですので、毎年4月の案内をご確認ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の上乗せ補助として、<strong>第2子の保育料が最大月額2万円軽減</strong>されます。第3子以降はさらに手厚い支援があります。</p><p><span class="marker">所得に応じて補助額が異なるため、世帯の課税状況により支給額が変動</span>します。詳細は市の窓口でご確認ください。</p><div class="note-box">認可外保育施設を利用している場合は、別途「認可外保育施設利用料補助金」の対象となる場合があります。幼児教育・保育の無償化制度との併用条件についても事前にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-birth-bonus',
    title: '東大阪市 出産祝い金支給事業',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['東大阪市', '出産祝い金', '給付金'],
    eligibility: '東大阪市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '東大阪市が実施する出産祝い金支給事業です。出産した世帯に対し、子どもの人数に応じて祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 出産祝い金支給事業は、<span class="marker">市内に住所を有する方が出産した際に、祝い金を支給</span>する制度です。</p><p>人口約48万人を擁する東大阪市は、大阪府内でも有数の人口規模を持つ中核市です。モノづくり産業を支える労働力の確保と、子育て世帯の定住促進を目的に、出産時の経済的支援を行っています。</p><p>支給額は<strong>第1子が5万円、第2子以降は10万円</strong>です。<span class="marker-green">所得制限はなく、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>出産日時点で東大阪市に住民登録があること</p><p>出生届が受理されていること</p><p>生後6か月以内に申請すること</p><p>市税の滞納がないこと</p></div><p>出生届の提出時に案内が配布されます。申請書に必要事項を記入し、東大阪市役所子どもすこやか部へ提出してください。</p><p><span class="marker">申請期限は出生日から6か月以内</span>です。期限を過ぎると受給できませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。多胎児（双子・三つ子）の場合はそれぞれの子どもについて支給されます。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。振込先は保護者名義の口座に限られます。</p><div class="highlight-box">国の出産・子育て応援交付金（出産応援ギフト5万円・子育て応援ギフト5万円）とは別の制度です。併用が可能ですので、あわせてご申請ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-housing-purchase',
    title: '東大阪市 子育て世帯住宅取得補助金',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['東大阪市', '住宅取得', '補助金'],
    eligibility: '東大阪市内に住宅を取得する中学生以下の子どもがいる世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '東大阪市が実施する子育て世帯住宅取得補助金です。市内で住宅を購入する子育て世帯に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 子育て世帯住宅取得補助金は、<span class="marker">中学生以下の子どもがいる世帯が市内に住宅を取得する際</span>に費用の一部を補助する制度です。</p><p>東大阪市は大阪市に隣接し、近鉄やJR学研都市線により都心へのアクセスが良好な住宅都市です。中小企業が約6,000社集積するモノづくりの街でありながら、公園や子育て施設も充実しており、子育て環境の整備に力を入れています。</p><p>補助額は<strong>基本額20万円、市外からの転入で10万円加算</strong>です。<span class="marker-green">新築・中古を問わず、自己居住用住宅の取得が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる世帯であること</p><p>取得する住宅が東大阪市内に所在すること</p><p>自己居住用として取得すること</p><p>市税の滞納がないこと</p><p>5年以上居住する意思があること</p></div><p>東大阪市役所建築部住宅政策課に申請書を提出します。売買契約書の写し、住民票、子どもの年齢がわかる書類などが必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。転入の場合は転入届後の申請となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>基本額20万円</strong>です。市外から東大阪市に転入して住宅を取得する場合は<strong>10万円が加算され最大30万円</strong>となります。</p><p><span class="marker">年間の予算枠があり、先着順で受付終了</span>となりますので、早めの申請をおすすめします。</p><div class="note-box">親族間の売買や相続による取得は対象外です。住宅ローン減税など国の制度との併用は可能ですが、他の市の住宅補助制度との重複受給はできません。5年以内に転出した場合は返還を求められることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-disability-medical',
    title: '東大阪市 重度障害者医療費助成制度',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['東大阪市', '障害者医療', '助成金'],
    eligibility: '東大阪市に住所を有する身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級をお持ちの方',
    applicationPeriod: '通年',
    description: '東大阪市が実施する重度障害者医療費助成制度です。重度の障害をお持ちの方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 重度障害者医療費助成制度は、<span class="marker">重度の障害をお持ちの方の保険診療にかかる自己負担分</span>を助成する制度です。</p><p>東大阪市はノーマライゼーションの理念のもと、障害のある方が安心して暮らせる街づくりを推進しています。本制度により、通院・入院・調剤にかかる医療費の負担が大幅に軽減されます。</p><p><span class="marker-green">大阪府の制度に基づき、身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級をお持ちの方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>東大阪市に住民登録があり、以下のいずれかの手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害程度"><p>身体障害者手帳 1級・2級</p><p>療育手帳 A（重度）</p><p>精神障害者保健福祉手帳 1級</p></div><p>東大阪市役所障害施策推進課の窓口で申請します。障害者手帳、健康保険証、本人確認書類をお持ちください。申請後、<strong>「医療証（マル障）」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>大阪府内の医療機関では、医療証を提示することで<strong>1日あたり最大500円（月2回まで）の自己負担</strong>で受診できます。3回目以降の自己負担はありません。</p><p><span class="marker">院外薬局での調剤は自己負担なし</span>です。入院時の食事療養費は自己負担が必要です。</p><div class="note-box">65歳以上で後期高齢者医療制度に加入されている方は、別途窓口でご相談ください。所得制限が設けられている場合がありますので、詳しくは東大阪市の障害施策推進課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-scholarship',
    title: '東大阪市 給付型奨学金制度',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '年額最大12万円',
    maxAmountNum: 12,
    category: 'education',
    prefecture: '大阪府',
    tags: ['東大阪市', '奨学金', '教育支援'],
    eligibility: '東大阪市に住所を有する高校生の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜5月',
    description: '東大阪市が実施する給付型奨学金制度です。経済的に困難な世帯の高校生に返還不要の奨学金を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生</span>に対し、返還不要の奨学金を給付する制度です。</p><p>東大阪市はモノづくりの街として将来の技術者・職人の育成に力を入れています。高校段階での学びを経済的理由で断念することがないよう、市独自の給付型奨学金を設けています。</p><p>給付額は<strong>年額最大12万円</strong>です。<span class="marker-green">返還不要のため、卒業後の経済的負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>東大阪市に住民登録がある高校生の保護者であること</p><p>世帯の所得が市の定める基準額以下であること</p><p>学業成績が一定以上であること</p><p>他の給付型奨学金と重複受給でないこと</p></div><p>毎年4月〜5月に東大阪市教育委員会学校教育推進室へ申請します。在学証明書、成績証明書、世帯の所得証明書などが必要です。</p><p><span class="marker">選考は書類審査により行われ、7月頃に結果が通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>年額最大12万円</strong>で、半期ごとに分割して支給されます。返還の義務はありません。</p><p><span class="marker">給付人数には定員があり、応募者多数の場合は所得の低い世帯が優先</span>されます。</p><div class="highlight-box">大阪府の授業料無償化制度や高等学校等就学支援金と併用が可能です。東大阪市では高校生向けの学習支援教室も開催しており、経済面だけでなく学力面のサポートも充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-sme-support',
    title: '東大阪市 中小企業設備投資補助金',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['東大阪市', '中小企業支援', '設備投資'],
    eligibility: '東大阪市内に事業所を有する中小企業者',
    applicationPeriod: '毎年5月〜12月（予算に達し次第終了）',
    description: '東大阪市が実施する中小企業設備投資補助金です。市内中小企業の生産性向上に資する設備投資を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 中小企業設備投資補助金は、<span class="marker">市内に事業所を有する中小企業の生産性向上に資する設備投資</span>に対して費用の一部を補助する制度です。</p><p>東大阪市は約6,000社の中小企業が集積する「モノづくりの街」です。人工衛星「まいど1号」を打ち上げた実績に代表されるように、高い技術力を誇る企業が多数あります。この補助金は、こうした中小企業の技術力向上と競争力強化を支援するものです。</p><p>補助率は対象経費の3分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">製造業に限らず、サービス業や小売業も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>東大阪市内に事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>50万円以上の設備投資であること</p><p>生産性向上に資する設備であること</p></div><p>東大阪市役所経済部モノづくり支援室に事業計画書と申請書を提出します。設備の見積書と導入計画が必要です。</p><p><span class="marker">必ず設備の発注・購入前に申請してください</span>。交付決定前に発注・購入した設備は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の1以内で、<strong>上限100万円</strong>です。工作機械、検査装置、IT機器、省エネ設備などが対象となります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となります。年度初めの早い時期に申請するのがおすすめです。</p><div class="highlight-box">東大阪市ではこの補助金のほか、技術相談や販路開拓支援、産学連携のマッチングなど、中小企業向けの支援メニューが豊富に用意されています。モノづくり支援室に気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-nursing-equipment',
    title: '東大阪市 在宅介護用品支給事業',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '年額最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['東大阪市', '介護用品', '支給事業'],
    eligibility: '東大阪市に住所を有する要介護3以上の高齢者を在宅で介護する家族',
    applicationPeriod: '通年',
    description: '東大阪市が実施する在宅介護用品支給事業です。在宅で介護を行う家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 在宅介護用品支給事業は、<span class="marker">要介護3以上の高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>東大阪市は高齢化率が大阪府平均を上回る地域であり、在宅介護を支える施策の充実が求められています。介護用品の購入費用は家計への負担が大きいため、本制度により経済的な支援を行っています。</p><p><span class="marker-green">紙おむつ、尿取りパッド、使い捨て手袋などが支給対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>東大阪市に住民登録があり、以下の条件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護3以上の認定を受けた高齢者を在宅で介護していること</p><p>介護を受ける方が市民税非課税世帯であること</p><p>介護を受ける方が病院・施設に入所していないこと</p></div><p>東大阪市役所高齢介護課の窓口で申請します。介護保険被保険者証、要介護認定結果通知書をお持ちください。</p><p><span class="marker">申請後、毎月定期的にカタログから選んだ介護用品が自宅に届けられます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の支給限度額内で介護用品を選択でき、<strong>年間で最大約10万円相当</strong>の介護用品が支給されます。</p><p><span class="marker">入院や施設入所した場合は支給が停止</span>されます。状況が変わった際は速やかに届け出てください。</p><div class="note-box">介護保険サービスの福祉用具貸与・購入費とは別の制度です。要介護度が変更になった場合は再度審査が行われます。詳しくは東大阪市の高齢介護課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-elderly-support',
    title: '東大阪市 高齢者見守り配食サービス',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '1食あたり300円の自己負担で利用可',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '大阪府',
    tags: ['東大阪市', '高齢者見守り', '配食サービス'],
    eligibility: '東大阪市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '東大阪市が実施する高齢者見守り配食サービスです。ひとり暮らしの高齢者等に栄養バランスのよい食事を届けながら安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 高齢者見守り配食サービスは、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみ世帯</span>に対し、栄養バランスのよい食事を自宅に届けながら安否確認を行う制度です。</p><p>東大阪市は密集市街地を多く抱える都市であり、ひとり暮らしの高齢者が増加しています。食事の提供と同時に見守りを行うことで、孤立を防ぎ、安心して在宅生活を続けられるよう支援しています。</p><p><span class="marker-green">配食時にスタッフが直接手渡しすることで、日々の安否確認を兼ねています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用要件"><p>東大阪市に住民登録がある65歳以上の方</p><p>ひとり暮らし、または高齢者のみ世帯であること</p><p>調理が困難な状況にあること</p><p>介護保険施設に入所していないこと</p></div><p>東大阪市役所高齢介護課または地域包括支援センターで申請します。担当者が訪問し、利用の可否を判断します。</p><p><strong>週に最大5回まで</strong>の利用が可能です。昼食または夕食から選べます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用者の自己負担は<strong>1食あたり300円程度</strong>です。残りの費用は市が負担します。</p><p><span class="marker">配食時に不在が続く場合や体調に異変が見られた場合は、緊急連絡先に連絡</span>が入ります。</p><div class="highlight-box">配食サービスのほか、東大阪市では緊急通報装置の貸与や、ふれあい訪問活動なども実施しています。複数の見守りサービスを組み合わせることで、より安心な在宅生活が可能になります。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-seismic-diagnosis',
    title: '東大阪市 木造住宅耐震診断補助金',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['東大阪市', '耐震診断', '補助金'],
    eligibility: '東大阪市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '東大阪市が実施する木造住宅耐震診断補助金です。旧耐震基準の木造住宅の耐震診断費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 木造住宅耐震診断補助金は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を補助する制度です。</p><p>東大阪市は上町断層帯や生駒断層帯に近接しており、大規模地震への備えが重要です。2018年の大阪北部地震でも被害が発生しており、旧耐震基準の住宅の安全性確認が急務となっています。</p><p><strong>耐震診断費用の補助額は最大5万円</strong>です。<span class="marker-green">診断の結果、耐震改修が必要と判定された場合は、別途耐震改修補助金も利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>東大阪市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法の住宅であること</p><p>所有者が自ら居住している住宅であること</p></div><p>東大阪市役所建築部指導監察課に申請書を提出します。建築確認済証や固定資産税課税明細書などで建築年月を確認できる書類が必要です。</p><p><span class="marker">市が派遣する耐震診断技術者が訪問し、診断を実施します</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用のうち、<strong>最大5万円</strong>が補助されます。自己負担は数千円程度で済むケースが多いです。</p><p><span class="marker">診断結果は「安全」「やや危険」「倒壊の危険性あり」などの段階で評価</span>されます。</p><div class="note-box">耐震診断の結果、耐震改修が必要と判定された場合は、東大阪市の耐震改修補助金（最大100万円程度）を利用できます。まずは診断を受けて、住宅の安全性を確認することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 吹田市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'suita-childcare-subsidy',
    title: '吹田市 認可外保育施設利用料補助金',
    organization: '吹田市',
    type: 'local',
    maxAmount: '月額最大2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['吹田市', '保育料補助', '認可外保育'],
    eligibility: '吹田市に住所を有し、認可外保育施設を利用する3歳未満の子どもの保護者',
    applicationPeriod: '通年（四半期ごとの申請）',
    description: '吹田市が実施する認可外保育施設利用料補助金です。認可外保育施設を利用する世帯の保育料負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 認可外保育施設利用料補助金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用する3歳未満の子ども</span>の保護者に対し、保育料の一部を補助する制度です。</p><p>吹田市は万博記念公園や太陽の塔、ガンバ大阪のホームスタジアムで知られる活気ある街です。千里ニュータウンを中心に子育て世帯が多く住んでおり、待機児童対策の一環として本制度を運用しています。</p><p><span class="marker-green">認可保育所の保育料との差額を補填する形で、月額最大2万円が補助</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>吹田市に住民登録があり、保育の必要性が認定されている方で、認可外保育施設を利用する3歳未満の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育料補助金交付申請書</p><p>認可外保育施設の在園証明書</p><p>保育料の領収書</p><p>保育の必要性を証する書類（就労証明書等）</p></div><p>吹田市役所児童部保育幼稚園室に四半期ごとに申請します。<strong>利用月の翌四半期末が申請期限</strong>ですので、忘れずに手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は認可外保育施設の保育料と認可保育所に入所した場合の保育料との差額で、<strong>月額上限2万円</strong>です。</p><p><span class="marker">認可保育所への入所申込みをしていることが利用条件</span>です。入所申込みを取り下げた場合は補助の対象外となります。</p><div class="note-box">幼児教育・保育の無償化制度の対象となる3歳以上の子どもは本制度の対象外です。無償化で対象外となる費用（実費徴収分等）については別途ご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-birth-bonus',
    title: '吹田市 出産・子育て応援給付金',
    organization: '吹田市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['吹田市', '出産応援', '給付金'],
    eligibility: '吹田市に住所を有する妊婦および出産した方',
    applicationPeriod: '妊娠届出時および出生届出後',
    description: '吹田市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出産後に5万円の合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援ギフト5万円、出生届出後に子育て応援ギフト5万円</span>を支給する制度です。</p><p>吹田市は万博記念公園の緑あふれる環境と都心へのアクセスの良さを兼ね備え、子育てに適した住環境が整っています。妊娠期から出産・子育て期まで一貫した支援を行うことで、安心して子どもを産み育てられる環境を目指しています。</p><p><span class="marker-green">伴走型相談支援と組み合わせて実施され、面談を通じた継続的なサポートが受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給の流れ"><p>妊娠届出時に保健センターで面談 → 出産応援ギフト5万円</p><p>妊娠8か月頃にアンケート・面談</p><p>出生届出後に面談（赤ちゃん訪問等） → 子育て応援ギフト5万円</p></div><p>妊娠届出時および出生届出後の面談を経て申請書が交付されます。必要事項を記入して提出してください。</p><p><span class="marker">各面談を受けることが給付の条件</span>です。面談では妊娠・出産・子育てに関する相談もできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円</strong>が支給されます（出産応援ギフト5万円 + 子育て応援ギフト5万円）。</p><p><span class="marker">多胎の場合、子育て応援ギフトは子どもの人数分</span>が支給されます。双子の場合は子育て応援ギフトが10万円になります。</p><div class="highlight-box">本制度は国の「出産・子育て応援交付金事業」に基づくものです。他の自治体から転入された場合は、前住所地での受給状況によって支給額が異なる場合がありますので、吹田市の窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-newlywed-rent',
    title: '吹田市 新婚世帯家賃補助制度',
    organization: '吹田市',
    type: 'local',
    maxAmount: '月額最大2万円（最大36か月）',
    maxAmountNum: 72,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['吹田市', '新婚世帯', '家賃補助'],
    eligibility: '吹田市内の民間賃貸住宅に居住する婚姻届出後3年以内の世帯',
    applicationPeriod: '通年（婚姻届出後3年以内）',
    description: '吹田市が実施する新婚世帯家賃補助制度です。市内の民間賃貸住宅に居住する新婚世帯に月額最大2万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 新婚世帯家賃補助制度は、<span class="marker">婚姻届出後3年以内の新婚世帯が市内の民間賃貸住宅に居住する場合</span>に、家賃の一部を補助する制度です。</p><p>吹田市は千里ニュータウンの再生事業が進み、新しいマンションや商業施設が整備されています。若い世帯の定住を促進するため、新婚期の住居費負担を軽減する本制度を実施しています。</p><p>補助額は<strong>月額最大2万円で、最長36か月間</strong>補助を受けられます。<span class="marker-green">夫婦の合計所得が一定基準以下の世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届出後3年以内であること</p><p>夫婦ともに吹田市に住民登録があること</p><p>市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が基準額以下であること</p><p>市税の滞納がないこと</p></div><p>吹田市役所都市計画部住宅政策室に申請書を提出します。婚姻届受理証明書、賃貸借契約書の写し、所得証明書などが必要です。</p><p><span class="marker">申請は四半期ごとに行い、実績に基づいて補助金が支給</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は家賃（共益費を除く）から一定額を控除した金額で、<strong>月額上限2万円、最長36か月間</strong>です。</p><p><span class="marker">世帯の所得が基準額を超えた場合や、市外に転出した場合は補助が終了</span>します。</p><div class="note-box">公営住宅や社宅に居住している場合は対象外です。また、親族が所有する住宅を賃借している場合も対象外となります。国の結婚新生活支援事業との併用はできませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-infertility',
    title: '吹田市 不妊治療費助成制度',
    organization: '吹田市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['吹田市', '不妊治療', '助成金'],
    eligibility: '吹田市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了日の翌日から6か月以内',
    description: '吹田市が実施する不妊治療費助成制度です。保険適用後の自己負担分を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>吹田市は国立循環器病研究センターをはじめ、高度な医療機関が集積する健康・医療のまちでもあります。2022年4月から不妊治療の保険適用が拡大されましたが、なお残る自己負担を軽減するため、市独自の助成制度を設けています。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>です。<span class="marker-green">体外受精・顕微授精などの生殖補助医療だけでなく、一般不妊治療（タイミング法・人工授精）も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>吹田市に住民登録がある法律上の婚姻をしている夫婦（事実婚を含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票</p><p>戸籍謄本（事実婚の場合は申立書）</p></div><p>吹田市役所健康医療部健康まちづくり室に申請します。<span class="marker">治療が終了した日の翌日から6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分で、<strong>1回の治療につき上限10万円</strong>です。年度内の回数制限があります。</p><p><span class="marker">保険適用外の治療（先進医療等）は助成対象外</span>の場合があります。医療機関にご確認ください。</p><div class="highlight-box">吹田市では不妊治療に関する相談窓口も設けており、治療に伴う精神的な負担についても専門スタッフに相談できます。大阪府の助成制度が利用できる場合は、そちらを優先して申請してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-school-lunch',
    title: '吹田市 学校給食費補助制度',
    organization: '吹田市',
    type: 'local',
    maxAmount: '給食費の全額補助（第3子以降）',
    maxAmountNum: 6,
    category: 'education',
    prefecture: '大阪府',
    tags: ['吹田市', '学校給食', '補助金'],
    eligibility: '吹田市立小中学校に在籍する児童生徒の保護者（第3子以降は全世帯対象）',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '吹田市が実施する学校給食費補助制度です。多子世帯の第3子以降の給食費を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 学校給食費補助制度は、<span class="marker">多子世帯の第3子以降の児童生徒の学校給食費を全額補助</span>する制度です。</p><p>吹田市は「健康・教育創生都市」を掲げ、子どもたちの健全な成長を支える食育に力を入れています。自校調理方式を中心とした温かい給食の提供と合わせ、多子世帯の経済的負担を軽減する本制度を実施しています。</p><p><span class="marker-green">小学校から中学校までの子どもを含めて数え、第3子以降であれば所得制限なしで全額補助</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>吹田市立小中学校に在籍する児童生徒の保護者であること</p><p>小学校1年生〜中学校3年生の子どもを3人以上扶養していること</p><p>第3子以降の子どもが吹田市立小中学校に在籍していること</p></div><p>学校を通じて案内が配布されます。申請書に必要事項を記入し、在籍する学校に提出してください。</p><p><span class="marker">年度途中の転入でも申請可能</span>です。転入時に学校または吹田市教育委員会学校教育部にご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の児童生徒の給食費が<strong>全額補助</strong>されます。小学校の給食費は年額約5万円、中学校は年額約6万円が目安です。</p><p><span class="marker">アレルギー等で給食を停止している場合は、停止期間分の補助はありません</span>。</p><div class="note-box">就学援助制度を利用している世帯は、就学援助で給食費がすでに支給されているため、本制度との重複は調整されます。第1子・第2子についても就学援助の所得要件を満たす場合は、給食費の支援を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-telework-bonus',
    title: '吹田市 テレワーク導入支援補助金',
    organization: '吹田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['吹田市', 'テレワーク', '補助金'],
    eligibility: '吹田市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '吹田市が実施するテレワーク導入支援補助金です。中小企業のテレワーク環境整備にかかる費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 テレワーク導入支援補助金は、<span class="marker">市内に事業所を有する中小企業がテレワーク環境を整備する際</span>の費用を補助する制度です。</p><p>吹田市は大阪梅田から電車で約10分の好立地にあり、ベッドタウンとしての性格と、企業集積地としての側面を併せ持っています。従業員が市内で働きながら暮らせるテレワーク環境の整備を支援し、ワークライフバランスの向上と地域経済の活性化を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">ソフトウェア導入費、通信機器購入費、クラウドサービス利用料などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>吹田市内に事業所を有する中小企業者であること</p><p>テレワーク勤務に関する就業規則等を整備すること</p><p>市税の滞納がないこと</p><p>補助対象経費が10万円以上であること</p></div><p>吹田市役所都市魅力部産業政策室に申請書を提出します。テレワーク導入計画書と見積書が必要です。</p><p><span class="marker">導入前に申請し、交付決定を受けてから経費を支出してください</span>。すでに導入済みの場合は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。パソコン・タブレット、VPN装置、Web会議システム、クラウドサービス（初年度分）などが対象です。</p><p><span class="marker">個人事業主も対象ですが、従業員がいない場合は対象外</span>となることがあります。</p><div class="highlight-box">吹田市では商工会議所と連携してテレワーク導入セミナーや個別相談も実施しています。制度の活用方法や就業規則の整備について事前に相談されることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-nursing-home-reform',
    title: '吹田市 高齢者住宅改修助成事業',
    organization: '吹田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['吹田市', '介護住宅改修', '助成金'],
    eligibility: '吹田市に住所を有する65歳以上の高齢者で、日常生活に支障のある方',
    applicationPeriod: '通年',
    description: '吹田市が実施する高齢者住宅改修助成事業です。高齢者の在宅生活を支えるバリアフリー改修工事を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 高齢者住宅改修助成事業は、<span class="marker">65歳以上の高齢者の在宅生活を支えるためのバリアフリー改修工事</span>に対して費用の一部を助成する制度です。</p><p>吹田市の千里ニュータウンは開発から60年以上が経過し、住民の高齢化と住宅の老朽化が同時に進行しています。手すりの設置、段差の解消、浴室・トイレの改修など、高齢者が安全に暮らし続けるための住宅改修を支援しています。</p><p>助成額は<strong>工事費の一部で上限30万円</strong>です。<span class="marker-green">介護保険の住宅改修費とは別枠で利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>吹田市に住民登録のある65歳以上の方</p><p>日常生活に支障があり、住宅改修が必要と認められること</p><p>世帯の所得が一定基準以下であること</p><p>改修する住宅に居住していること</p></div><p>吹田市役所福祉部高齢福祉課または地域包括支援センターに相談の上、申請します。ケアマネジャーによる住宅改修の必要性の確認が行われます。</p><p><span class="marker">必ず工事前に申請し、事前審査を受けてください</span>。工事完了後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は工事費の一部で、<strong>上限30万円</strong>です。所得に応じて助成率が異なります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と合わせて利用することで、最大50万円の支援</span>が受けられます。</p><div class="note-box">対象工事は手すりの取付け、段差の解消、滑り防止のための床材変更、引き戸への扉の取替え、洋式便器への取替えなどです。新築や増築、美装工事は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-energy-support',
    title: '吹田市 省エネ家電買替補助金',
    organization: '吹田市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '大阪府',
    tags: ['吹田市', '省エネ家電', '補助金'],
    eligibility: '吹田市に住所を有する方',
    applicationPeriod: '毎年6月〜翌年1月（予算に達し次第終了）',
    description: '吹田市が実施する省エネ家電買替補助金です。省エネ性能の高い家電への買替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 省エネ家電買替補助金は、<span class="marker">既存の家電製品を省エネ性能の高い製品に買い替える際</span>の費用を補助する制度です。</p><p>吹田市は「ゼロカーボンシティ」を宣言し、2050年までに温室効果ガスの排出量実質ゼロを目指しています。家庭部門のCO2排出量削減のため、省エネ家電への買替えを促進する本制度を実施しています。</p><p>補助額は<strong>購入費用の一部で上限3万円</strong>です。<span class="marker-green">エアコン、冷蔵庫、LED照明器具が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象製品の要件"><p>統一省エネラベル4つ星以上のエアコン</p><p>統一省エネラベル4つ星以上の冷蔵庫</p><p>LED照明器具（居室用）</p><p>市内の店舗で購入したものであること</p></div><p>吹田市役所環境部環境政策室に申請書を提出します。購入時のレシート・領収書（原本）と、旧製品の処分を証明する書類が必要です。</p><p><span class="marker">旧製品からの買替えが条件で、新規購入は対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>エアコン・冷蔵庫が各2万円、LED照明器具が1万円</strong>で、合計上限3万円です。</p><p><span class="marker">1世帯につき各製品1台まで</span>です。複数台を買い替えても各1台分のみ補助されます。</p><div class="highlight-box">吹田市では太陽光発電設備や蓄電池の設置補助も実施しています。省エネ家電への買替えと合わせて、家庭全体の省エネ対策を進めましょう。国のグリーン住宅ポイント制度との併用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-bousai-equipment',
    title: '吹田市 家庭用防災用品購入補助金',
    organization: '吹田市',
    type: 'local',
    maxAmount: '最大1万円',
    maxAmountNum: 1,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['吹田市', '防災用品', '補助金'],
    eligibility: '吹田市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '吹田市が実施する家庭用防災用品購入補助金です。家庭での防災対策に必要な用品の購入費を最大1万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 家庭用防災用品購入補助金は、<span class="marker">地震や風水害に備えて家庭で防災用品を購入する際</span>の費用を補助する制度です。</p><p>2018年の大阪北部地震では吹田市でも大きな被害が発生し、家庭での防災対策の重要性が改めて認識されました。本制度は、各家庭の自助力を高め、災害への備えを促進することを目的としています。</p><p>補助額は購入費用の2分の1以内で、<strong>上限1万円</strong>です。<span class="marker-green">家具固定器具、簡易トイレ、防災ラジオ、蓄電池・発電機などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災用品"><p>家具転倒防止器具・固定金具</p><p>簡易トイレ・携帯トイレ</p><p>防災用ラジオ・懐中電灯</p><p>ポータブル蓄電池・発電機</p><p>飛散防止フィルム</p></div><p>吹田市役所危機管理室に申請書を提出します。購入時のレシート・領収書と購入品の写真が必要です。</p><p><span class="marker">購入後6か月以内に申請してください</span>。期限を過ぎた場合は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限1万円</strong>です。1世帯につき年度内1回の利用に限られます。</p><p><span class="marker">食料・飲料水の備蓄品は補助対象外</span>です。耐久性のある防災用品が対象となります。</p><div class="note-box">吹田市では防災訓練の参加者に防災グッズを配布することもあります。地域の自主防災組織が実施する防災訓練への参加もおすすめします。ハザードマップで自宅の災害リスクを確認した上で、必要な備えを行いましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 高槻市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'takatsuki-childcare-subsidy',
    title: '高槻市 多子世帯保育料軽減事業',
    organization: '高槻市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['高槻市', '保育料軽減', '多子世帯'],
    eligibility: '高槻市に住所を有し、保育施設等に複数の子どもを通わせている世帯の保護者',
    applicationPeriod: '通年（年度ごとの認定）',
    description: '高槻市が実施する多子世帯保育料軽減事業です。第2子以降の保育料を段階的に軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 多子世帯保育料軽減事業は、<span class="marker">複数の子どもを保育施設に通わせている世帯</span>の保育料を軽減する制度です。</p><p>高槻市は大阪市と京都市のちょうど中間に位置し、JR新快速で大阪駅まで約15分、京都駅まで約12分という抜群のアクセスを誇るベッドタウンです。共働き世帯が多い中、多子世帯の保育料負担を軽減し、安心して子育てできる環境を整えています。</p><p><span class="marker-green">国の制度に加え、市独自の上乗せにより第2子は半額、第3子以降は無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高槻市に住民登録があり、認可保育所・認定こども園・小規模保育施設等に子どもを在園させている保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第2子：保育料半額</p><p>第3子以降：保育料無料</p><p>年齢にかかわらず、生計を一にする子どもを上から順に数えます</p></div><p>保育施設の利用申込みと同時に認定が行われるため、<strong>原則として別途の申請は不要</strong>です。きょうだいの在園状況に変更があった場合は届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子の保育料が半額、第3子以降は無料</strong>となります。保護者の所得に応じた保育料がベースとなります。</p><p><span class="marker">3歳以上の子どもは幼児教育・保育の無償化により保育料は無料</span>です。本制度は主に0〜2歳の子どもに対して効果を発揮します。</p><div class="note-box">認可外保育施設を利用している場合は、別途認可外保育施設利用料補助金の制度をご確認ください。副食費（おかず代）は保育料とは別に実費がかかります。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-birth-bonus',
    title: '高槻市 出産祝い金制度',
    organization: '高槻市',
    type: 'local',
    maxAmount: '第3子以降 10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['高槻市', '出産祝い金', '給付金'],
    eligibility: '高槻市に住所を有し、第3子以降を出産した方',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '高槻市が実施する出産祝い金制度です。第3子以降を出産した世帯に10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 出産祝い金制度は、<span class="marker">第3子以降を出産した世帯に祝い金10万円を支給</span>する制度です。</p><p>高槻市は人口約35万人の中核市で、「子育てするなら高槻」をスローガンに掲げ、子育て支援策を充実させています。摂津峡や今城塚古墳など豊かな歴史・自然環境と、充実した公共施設が子育て世帯から高い評価を得ています。</p><p>支給額は<strong>第3子以降1人につき10万円</strong>です。<span class="marker-green">所得制限はなく、第3子以降を出産したすべての世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>出産日時点で高槻市に住民登録があること</p><p>第3子以降の出産であること（上の子2人以上を養育中であること）</p><p>出生届が受理されていること</p><p>生後6か月以内に申請すること</p></div><p>出生届の提出時に案内が配布されます。高槻市役所子ども未来部に申請書を提出してください。</p><p><span class="marker">上の子の年齢制限はなく、生計を一にする子どもを上から順に数えます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第3子以降1人につき10万円</strong>です。多胎児の場合はそれぞれに支給されます。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">国の出産・子育て応援交付金（出産応援ギフト5万円・子育て応援ギフト5万円）とは別の制度で、併用が可能です。高槻市ではこのほかにも、産後ケア事業や子育て支援センターなど包括的な支援を行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-housing-purchase',
    title: '高槻市 若年世帯住宅取得補助金',
    organization: '高槻市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['高槻市', '住宅取得', '若年世帯'],
    eligibility: '高槻市内に住宅を取得する40歳未満の方がいる世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '高槻市が実施する若年世帯住宅取得補助金です。市内で住宅を購入する若年世帯に最大25万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 若年世帯住宅取得補助金は、<span class="marker">40歳未満の方がいる世帯が市内に住宅を取得する際</span>に費用の一部を補助する制度です。</p><p>高槻市は大阪・京都の中間に位置する利便性の高い街ですが、若年世帯の市外流出が課題となっています。本制度は若い世帯の定住を促進し、地域の活力を維持することを目的としています。</p><p>補助額は<strong>基本額15万円、子育て世帯加算5万円、市外転入加算5万円</strong>です。<span class="marker-green">新築・中古を問わず、自己居住用住宅の取得が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>世帯員に40歳未満の方がいること</p><p>取得する住宅が高槻市内に所在すること</p><p>自己居住用として取得すること</p><p>市税の滞納がないこと</p><p>5年以上居住する意思があること</p></div><p>高槻市役所都市創造部住宅課に申請書を提出します。売買契約書の写し、住民票、年齢確認書類などが必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>基本額15万円</strong>です。子ども（中学生以下）がいる世帯は<strong>5万円加算</strong>、市外から転入する場合は<strong>5万円加算</strong>で、最大25万円となります。</p><p><span class="marker">年間の予算枠があり、先着順で受付終了</span>します。</p><div class="note-box">親族間の売買は対象外です。住宅ローン減税や すまい給付金など国の制度との併用は可能です。5年以内に転出した場合は補助金の返還を求められることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-infertility',
    title: '高槻市 不妊・不育症治療費助成制度',
    organization: '高槻市',
    type: 'local',
    maxAmount: '1回あたり最大5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['高槻市', '不妊治療', '不育症'],
    eligibility: '高槻市に住所を有し、不妊または不育症の治療を受けている夫婦',
    applicationPeriod: '治療終了日から6か月以内',
    description: '高槻市が実施する不妊・不育症治療費助成制度です。不妊治療および不育症治療にかかる費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 不妊・不育症治療費助成制度は、<span class="marker">不妊治療および不育症の治療にかかる自己負担分</span>を助成する制度です。</p><p>高槻市は大阪医科薬科大学病院をはじめとする医療機関が充実した街です。2022年4月からの不妊治療保険適用拡大後も残る自己負担の軽減に加え、不育症（反復流産等）の治療費も助成対象とする独自の制度を設けています。</p><p>助成額は<strong>1回の治療につき最大5万円</strong>です。<span class="marker-green">不育症の検査費用も助成対象に含まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高槻市に住民登録がある法律上の婚姻をしている夫婦（事実婚を含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>医療機関が発行する治療証明書</p><p>領収書の原本</p><p>住民票の写し</p><p>戸籍謄本または事実婚の申立書</p></div><p>高槻市保健所健康づくり推進課に申請します。<span class="marker">治療終了日から6か月以内が申請期限</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>不妊治療・不育症治療の保険適用後の自己負担分について、<strong>1回あたり上限5万円</strong>を助成します。年度内の回数制限がありますので事前にご確認ください。</p><p><span class="marker">先進医療として実施される治療も一部助成対象</span>となる場合があります。</p><div class="note-box">大阪府の不妊・不育症治療費助成制度を利用できる場合は、そちらを優先して申請してください。高槻市の制度は府の助成を受けた上でなお残る自己負担を補填する位置づけです。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-scholarship',
    title: '高槻市 奨学金返還支援補助金',
    organization: '高槻市',
    type: 'local',
    maxAmount: '年間最大18万円（最大3年間）',
    maxAmountNum: 18,
    category: 'education',
    prefecture: '大阪府',
    tags: ['高槻市', '奨学金返還', '補助金'],
    eligibility: '高槻市に住所を有し、奨学金の返還を行っている45歳未満の方',
    applicationPeriod: '毎年4月〜6月',
    description: '高槻市が実施する奨学金返還支援補助金です。市内に居住する若者の奨学金返還を年間最大18万円、最大3年間支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 奨学金返還支援補助金は、<span class="marker">日本学生支援機構等の奨学金を返還している45歳未満の方</span>に対し、返還額の一部を補助する制度です。</p><p>高槻市は大学・大学院への進学率が高い地域ですが、卒業後の奨学金返還が若者の生活設計に大きな影響を与えています。奨学金返還の負担を軽減することで、若い世代の高槻市への定住を促進します。</p><p>補助額は<strong>年間最大18万円で、最長3年間</strong>支給されます。<span class="marker-green">正規・非正規を問わず、就労していれば申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>高槻市に住民登録がある45歳未満の方</p><p>日本学生支援機構等の奨学金を返還中であること</p><p>就労していること（正規・非正規を問わない）</p><p>市税の滞納がないこと</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月〜6月に高槻市教育委員会教育指導部に申請します。奨学金の返還証明書、就労証明書、所得証明書が必要です。</p><p><span class="marker">定員があり、応募多数の場合は抽選</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は前年度の奨学金返還額の2分の1以内で、<strong>年間上限18万円、最長3年間</strong>です。3年間の合計で最大54万円の支援が受けられます。</p><p><span class="marker">年度途中で市外に転出した場合は、翌月分から補助が終了</span>します。</p><div class="highlight-box">高槻市では奨学金返還支援のほか、若者の就職・転職相談、キャリアカウンセリングも実施しています。奨学金返還の負担で住居や子育てに支障がある方は、総合的な相談窓口もご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-sme-support',
    title: '高槻市 中小企業販路開拓支援補助金',
    organization: '高槻市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['高槻市', '中小企業', '販路開拓'],
    eligibility: '高槻市内に事業所を有する中小企業者・個人事業主',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '高槻市が実施する中小企業販路開拓支援補助金です。展示会出展やECサイト構築などの販路開拓費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 中小企業販路開拓支援補助金は、<span class="marker">市内の中小企業が新たな販路を開拓するための取り組み</span>に対して費用の一部を補助する制度です。</p><p>高槻市は大阪・京都の中間に位置する立地を活かし、多様な業種の中小企業が活動しています。展示会・商談会への出展、ECサイトの構築、カタログの制作など、販路拡大に向けた積極的な取り組みを支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">製造業・サービス業・小売業など、業種を問わず申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象経費"><p>展示会・商談会への出展費用</p><p>ECサイト・ホームページの構築費用</p><p>カタログ・パンフレットの制作費用</p><p>市場調査・テストマーケティング費用</p></div><p>高槻市役所産業環境部産業振興課に申請書と事業計画書を提出します。見積書と具体的な販路開拓計画が必要です。</p><p><span class="marker">必ず事業実施前に申請し、交付決定を受けてから経費を支出してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者につき年度内1回の利用に限られます。</p><p><span class="marker">通常の営業活動費（名刺、封筒、日常的な広告宣伝費等）は対象外</span>です。</p><div class="note-box">高槻市商工会議所が実施する経営相談や専門家派遣と併用することで、より効果的な販路開拓が期待できます。国の小規模事業者持続化補助金と内容が重複する場合は調整が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-nursing-home-reform',
    title: '高槻市 高齢者住宅改修助成制度',
    organization: '高槻市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['高槻市', '介護改修', '助成金'],
    eligibility: '高槻市に住所を有する65歳以上で、介護予防のために住宅改修が必要な方',
    applicationPeriod: '通年',
    description: '高槻市が実施する高齢者住宅改修助成制度です。介護予防のためのバリアフリー改修工事を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 高齢者住宅改修助成制度は、<span class="marker">65歳以上の高齢者が安全に在宅生活を続けるためのバリアフリー改修工事</span>に対して費用の一部を助成する制度です。</p><p>高槻市は高齢化率が上昇傾向にあり、住み慣れた自宅で安心して暮らし続けられる環境づくりが重要です。転倒予防のための手すり設置や段差解消など、介護予防に資する住宅改修を支援しています。</p><p>助成額は<strong>対象工事費の一部で上限30万円</strong>です。<span class="marker-green">介護保険の住宅改修費と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取付け</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器等への便器の取替え</p></div><p>高槻市役所健康福祉部長寿介護課または地域包括支援センターに相談の上、申請します。</p><p><span class="marker">工事前の事前申請が必須</span>です。ケアマネジャー等による住宅改修の必要性の確認が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は世帯の所得に応じて工事費の一部が助成され、<strong>上限30万円</strong>です。</p><p><span class="marker">介護保険の住宅改修費（上限20万円の9割）とあわせて利用することで、最大約50万円の住宅改修</span>が可能です。</p><div class="note-box">新築や増築、老朽化に伴う修繕は対象外です。高槻市の地域包括支援センターでは、住宅改修に関する無料相談を実施していますので、まずはお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-elderly-support',
    title: '高槻市 高齢者外出支援サービス事業',
    organization: '高槻市',
    type: 'local',
    maxAmount: 'タクシー券 年間最大2万4千円分',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '大阪府',
    tags: ['高槻市', '高齢者外出支援', 'タクシー券'],
    eligibility: '高槻市に住所を有する75歳以上の方で、公共交通機関の利用が困難な方',
    applicationPeriod: '通年（年度ごとの申請）',
    description: '高槻市が実施する高齢者外出支援サービス事業です。外出が困難な高齢者にタクシー利用券を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 高齢者外出支援サービス事業は、<span class="marker">公共交通機関の利用が困難な75歳以上の高齢者</span>に対し、タクシー利用券を交付する制度です。</p><p>高槻市は北摂山系の丘陵地に市街地が広がっており、坂道が多い地域では高齢者の外出が困難になりがちです。通院や買い物など日常生活に必要な外出を支援し、高齢者の社会参加と健康維持を図っています。</p><p><span class="marker-green">年間最大2万4千円分のタクシー利用券が交付されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用要件"><p>高槻市に住民登録がある75歳以上の方</p><p>公共交通機関の利用が困難であること</p><p>要介護認定を受けている、または身体的に外出困難な方</p><p>施設に入所していないこと</p></div><p>高槻市役所健康福祉部長寿介護課の窓口で申請します。介護保険被保険者証または身体障害者手帳をお持ちください。</p><p><strong>年度ごとの申請</strong>が必要です。4月に一括で利用券が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大48枚（1枚500円、合計2万4千円分）</strong>のタクシー利用券が交付されます。</p><p><span class="marker">1回の乗車で使用できる枚数には上限があります</span>。利用券は高槻市内で営業するタクシー会社で使用できます。</p><div class="highlight-box">高槻市では市営バスの高齢者無料パス制度も実施しています。バスの利用が可能な方はそちらもご活用ください。タクシー利用券は他の人に譲渡できず、年度末で未使用分は失効します。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-bousai-equipment',
    title: '高槻市 住宅用防災設備設置補助金',
    organization: '高槻市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['高槻市', '防災設備', '補助金'],
    eligibility: '高槻市内に住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '高槻市が実施する住宅用防災設備設置補助金です。感震ブレーカーや雨水貯留タンクなどの防災設備設置に最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 住宅用防災設備設置補助金は、<span class="marker">住宅に防災設備を設置する際</span>の費用を補助する制度です。</p><p>2018年の大阪北部地震で高槻市は震度6弱を記録し、住宅被害やブロック塀倒壊など甚大な被害を受けました。この経験を踏まえ、各家庭の防災力を高めるための設備導入を支援しています。</p><p>補助額は設備の購入・設置費用の2分の1以内で、<strong>上限3万円</strong>です。<span class="marker-green">感震ブレーカー、雨水貯留タンク、家具固定工事などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>感震ブレーカー（地震時に自動で電気を遮断する装置）</p><p>雨水貯留タンク（災害時の生活用水確保）</p><p>家具固定工事（専門業者による施工）</p><p>止水板（浸水対策用）</p></div><p>高槻市役所総合戦略部危機管理室に申請書を提出します。設置する設備の見積書と設置予定場所の写真が必要です。</p><p><span class="marker">設備の購入・設置前に申請し、交付決定を受けてから設置してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入・設置費用の2分の1以内で、<strong>上限3万円</strong>です。1世帯につき各設備1基まで申請可能です。</p><p><span class="marker">賃貸住宅の場合は所有者の承諾が必要</span>です。</p><div class="note-box">高槻市は大阪北部地震の教訓から、ブロック塀の撤去・改修補助金（別制度）も実施しています。ハザードマップで自宅の災害リスクを確認し、優先度の高い対策から取り組みましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 倉敷市（岡山県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kurashiki-childcare-subsidy',
    title: '倉敷市 保育料多子軽減補助金',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '第3子以降 保育料無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '岡山県',
    tags: ['倉敷市', '保育料軽減', '多子世帯'],
    eligibility: '倉敷市に住所を有し、保育施設等に3人以上の子どもを通わせている世帯の保護者',
    applicationPeriod: '通年（年度ごとの認定）',
    description: '倉敷市が実施する保育料多子軽減補助金です。第3子以降の保育料を無料化し、多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 保育料多子軽減補助金は、<span class="marker">3人以上の子どもを扶養する世帯の保育料を段階的に軽減</span>する制度です。</p><p>倉敷市は岡山県第2の都市で、倉敷美観地区や瀬戸大橋のたもとの下津井など観光資源に恵まれた街です。水島コンビナートを中心とした産業基盤も強く、子育て世帯の定住促進のため保育料の負担軽減に取り組んでいます。</p><p><span class="marker-green">第2子は半額、第3子以降は保育料が無料</span>となります。年齢にかかわらず、生計を一にする子どもを数えます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>倉敷市に住民登録があり、認可保育所・認定こども園等に在園する子どもの保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料半額</p><p>第3子以降：保育料無料</p></div><p>保育施設の入園申込み時に多子世帯であることを申告してください。<strong>原則として別途の申請は不要</strong>です。</p><p><span class="marker">きょうだいの在園状況や扶養状況に変更があった場合は速やかに届け出てください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降は保育料が全額免除</strong>されます。第2子の保育料は半額となります。</p><p><span class="marker">3歳以上は幼児教育・保育の無償化により保育料は無料</span>ですので、本制度は主に0〜2歳児に適用されます。</p><div class="note-box">副食費（おかず代）は保育料とは別に実費がかかります。ただし、年収360万円未満相当の世帯や第3子以降の子どもは副食費も免除されます。認可外保育施設を利用の場合は別制度をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-birth-bonus',
    title: '倉敷市 出産・子育て応援金',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '岡山県',
    tags: ['倉敷市', '出産応援', '給付金'],
    eligibility: '倉敷市に住所を有する妊婦および出産した方',
    applicationPeriod: '妊娠届出時および出生届出後',
    description: '倉敷市が実施する出産・子育て応援金です。妊娠届出時と出産後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 出産・子育て応援金は、<span class="marker">妊娠届出時に出産応援金5万円、出産後に子育て応援金5万円</span>の合計10万円を支給する制度です。</p><p>倉敷市は岡山県南部に位置し、人口約47万人を擁する中核市です。児島地区はデニムの聖地として知られ、真備地区の復興も進んでいます。妊娠期から子育て期にかけて切れ目のない支援を行い、安心して子どもを産み育てられる環境を整えています。</p><p><span class="marker-green">伴走型相談支援と経済的支援を一体的に実施しています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給の流れ"><p>妊娠届出時に保健師等との面談 → 出産応援金5万円</p><p>妊娠8か月頃のアンケート・面談</p><p>出生届出後の面談（こんにちは赤ちゃん訪問等） → 子育て応援金5万円</p></div><p>各段階の面談を経て、申請書が交付されます。倉敷市役所子ども未来部に提出してください。</p><p><span class="marker">面談の受診が支給の条件</span>です。面談では子育てに関する不安や悩みの相談もできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円</strong>が支給されます。出産応援金5万円は妊娠届出後、子育て応援金5万円は出産後にそれぞれ申請します。</p><p><span class="marker">多胎の場合、子育て応援金は子どもの人数分が支給</span>されます。</p><div class="highlight-box">倉敷市では産後ケア事業（宿泊型・通所型・訪問型）も実施しており、出産後のお母さんの心身のケアと育児サポートを受けられます。応援金と合わせてぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-newlywed-rent',
    title: '倉敷市 新婚生活支援補助金',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '岡山県',
    tags: ['倉敷市', '新婚世帯', '住居費補助'],
    eligibility: '倉敷市内に居住する婚姻届出日時点で夫婦ともに39歳以下の新婚世帯',
    applicationPeriod: '婚姻届出日の属する年度内',
    description: '倉敷市が実施する新婚生活支援補助金です。新婚世帯の住居費・引越し費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 新婚生活支援補助金は、<span class="marker">婚姻届出日時点で夫婦ともに39歳以下の新婚世帯</span>に対し、住居費や引越し費用を補助する制度です。</p><p>倉敷市は美観地区のレトロな街並みと、水島工業地帯の現代的な産業が共存する魅力的な街です。若い世帯の結婚を機とした定住を支援し、地域の活力維持を目指しています。</p><p>補助額は<strong>最大30万円</strong>です。<span class="marker-green">家賃、敷金・礼金、引越し費用、住宅購入費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届出日時点で夫婦ともに39歳以下であること</p><p>夫婦の合計所得が500万円未満であること</p><p>倉敷市内に居住していること</p><p>市税の滞納がないこと</p></div><p>倉敷市役所企画財政部企画経営室に申請書を提出します。婚姻届受理証明書、住民票、賃貸借契約書の写し、所得証明書が必要です。</p><p><span class="marker">婚姻届出日の属する年度内に申請が必要</span>です。年度をまたぐと申請できなくなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は住居費と引越し費用の合計で<strong>最大30万円</strong>です。夫婦ともに29歳以下の場合は<strong>最大60万円</strong>に増額されます。</p><p><span class="marker">住居費には家賃、敷金、礼金、共益費、仲介手数料が含まれます</span>。住宅購入の場合はローンの元利返済額も対象です。</p><div class="note-box">公営住宅に居住している場合や、過去にこの補助金を受給したことがある場合は対象外です。国の結婚新生活支援事業の補助を活用した制度のため、要件は国の基準に準じます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-disability-medical',
    title: '倉敷市 重度障害者医療費助成制度',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '岡山県',
    tags: ['倉敷市', '障害者医療', '助成金'],
    eligibility: '倉敷市に住所を有する身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級をお持ちの方',
    applicationPeriod: '通年',
    description: '倉敷市が実施する重度障害者医療費助成制度です。重度の障害をお持ちの方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 重度障害者医療費助成制度は、<span class="marker">重度の障害をお持ちの方の保険診療にかかる自己負担分</span>を助成する制度です。</p><p>倉敷市は「障害のある人もない人も共に暮らしやすいまちづくり」を掲げ、バリアフリー環境の整備や福祉サービスの充実に力を入れています。医療費の負担を軽減することで、障害のある方が安心して必要な医療を受けられる環境を整えています。</p><p><span class="marker-green">岡山県の制度に基づき、身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級をお持ちの方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>倉敷市に住民登録があり、以下のいずれかの手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害程度"><p>身体障害者手帳 1級・2級</p><p>療育手帳 A（重度）</p><p>精神障害者保健福祉手帳 1級</p></div><p>倉敷市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類をお持ちください。申請後、<strong>「重度心身障害者医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>岡山県内の医療機関では受給資格者証を提示することで、<strong>保険診療の自己負担分が助成</strong>されます。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">所得が一定額を超える方は対象外となる場合があります。65歳以上で後期高齢者医療制度に移行される方は、手続きの変更が必要になることがありますので、事前に倉敷市の窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-school-lunch',
    title: '倉敷市 学校給食費支援事業',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '第3子以降 給食費全額免除',
    maxAmountNum: 6,
    category: 'education',
    prefecture: '岡山県',
    tags: ['倉敷市', '学校給食', '無償化'],
    eligibility: '倉敷市立小中学校に在籍する児童生徒の保護者（第3子以降は全世帯対象）',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '倉敷市が実施する学校給食費支援事業です。多子世帯の第3子以降の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 学校給食費支援事業は、<span class="marker">多子世帯の第3子以降の児童生徒にかかる学校給食費を全額免除</span>する制度です。</p><p>倉敷市は地元産の食材を活用した給食づくりに力を入れており、食育を通じた子どもの健全な成長を支えています。多子世帯の負担軽減のため、第3子以降の給食費を無償化し、子育てしやすい環境を整えています。</p><p><span class="marker-green">小学校1年生から中学校3年生までの子どもを数え、第3子以降の給食費が全額免除</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>倉敷市立小中学校に在籍する児童生徒の保護者であること</p><p>小中学校に通う子どもを含め、扶養する子どもが3人以上いること</p><p>第3子以降の子どもが市立小中学校で給食を喫食していること</p></div><p>年度初めに学校を通じて申請書が配布されます。必要事項を記入し、学校に提出してください。</p><p><span class="marker">年度途中の転入や出生による対象者の変更にも対応</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の児童生徒の<strong>給食費が全額免除</strong>されます。小学校の年間給食費は約4.8万円、中学校は約5.5万円が目安です。</p><p><span class="marker">アレルギー等で給食を一部停止している場合は、停止分は除かれます</span>。</p><div class="highlight-box">倉敷市では就学援助制度も充実しており、経済的にお困りの世帯は給食費以外の学用品費や修学旅行費の支援も受けられます。所得要件を満たす場合は、第1子・第2子の給食費も就学援助で支給されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-telework-bonus',
    title: '倉敷市 テレワーク環境整備補助金',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'employment',
    prefecture: '岡山県',
    tags: ['倉敷市', 'テレワーク', '補助金'],
    eligibility: '倉敷市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '倉敷市が実施するテレワーク環境整備補助金です。中小企業のテレワーク導入にかかる費用を最大15万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 テレワーク環境整備補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する際</span>の費用を補助する制度です。</p><p>倉敷市は水島コンビナートを中心とした工業都市であると同時に、繊維・デニム産業やIT企業も集積しています。多様な働き方を推進し、従業員のワークライフバランス向上と企業の生産性向上を両立するため、テレワーク導入を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は15万円</strong>です。<span class="marker-green">通信機器、ソフトウェア、クラウドサービス導入費用などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用パソコン・タブレットの購入費</p><p>VPN機器・Wi-Fiルーター等の通信機器購入費</p><p>Web会議システム・クラウドサービスの導入費</p><p>テレワーク用セキュリティソフトの購入費</p></div><p>倉敷市役所商工課に申請書とテレワーク導入計画書を提出します。見積書と就業規則の整備計画が必要です。</p><p><span class="marker">テレワーク環境の整備前に申請し、交付決定後に導入してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限15万円</strong>です。1事業者につき1回限りの利用です。</p><p><span class="marker">個人事業主で従業員がいない場合は対象外</span>となる場合があります。</p><div class="note-box">倉敷市商工会議所ではテレワーク導入に関するセミナーや個別相談を実施しています。導入計画の策定段階から相談されることをおすすめします。国のIT導入補助金との併用はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-nursing-equipment',
    title: '倉敷市 在宅介護用品支給事業',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '岡山県',
    tags: ['倉敷市', '介護用品', '支給事業'],
    eligibility: '倉敷市に住所を有する要介護4・5の高齢者を在宅で介護する家族',
    applicationPeriod: '通年',
    description: '倉敷市が実施する在宅介護用品支給事業です。在宅で重度の要介護高齢者を介護する家族に介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 在宅介護用品支給事業は、<span class="marker">要介護4・5の高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>倉敷市は医療・福祉の充実した街として知られ、倉敷中央病院や川崎医科大学附属病院など高度医療機関が集積しています。在宅介護を続ける家族の経済的負担を軽減し、介護と生活の両立を支援しています。</p><p><span class="marker-green">紙おむつ、尿取りパッド、清拭剤、使い捨て手袋などが支給対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>倉敷市に住民登録があり、以下の条件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けた65歳以上の高齢者を在宅で介護していること</p><p>介護を受ける方の属する世帯が市民税非課税であること</p><p>介護を受ける方が病院・施設に入所していないこと</p></div><p>倉敷市役所介護保険課の窓口で申請します。介護保険被保険者証と要介護認定結果通知書が必要です。</p><p><span class="marker">認定後、カタログから必要な介護用品を選び、毎月自宅に届けられます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額の支給限度額は<strong>約6,250円相当</strong>で、年間約7万5千円相当の介護用品が支給されます。</p><p><span class="marker">入院や施設入所した場合は支給が一時停止</span>されます。退院・退所後は届出により支給が再開されます。</p><div class="note-box">介護保険の福祉用具購入費とは別の制度です。要介護度の変更が行われた場合は対象要件を再確認してください。倉敷市では在宅介護者のためのリフレッシュ事業も実施していますので、あわせてご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-energy-support',
    title: '倉敷市 住宅用太陽光発電設備補助金',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '岡山県',
    tags: ['倉敷市', '太陽光発電', '補助金'],
    eligibility: '倉敷市内の住宅に太陽光発電設備を設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '倉敷市が実施する住宅用太陽光発電設備補助金です。住宅への太陽光発電設備の設置費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 住宅用太陽光発電設備補助金は、<span class="marker">市内の住宅に太陽光発電設備を新たに設置する方</span>に対して費用の一部を補助する制度です。</p><p>「晴れの国おかやま」と呼ばれる岡山県は日照時間が長く、太陽光発電に適した地域です。倉敷市はゼロカーボンシティを目指し、家庭での再生可能エネルギーの導入を促進しています。</p><p>補助額は<strong>出力1kWあたり2万円で、上限10万円</strong>です。<span class="marker-green">蓄電池と同時設置の場合は蓄電池分の補助も上乗せ</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>倉敷市内の自己居住用住宅に設置すること</p><p>未使用の太陽光発電設備であること</p><p>電力会社と系統連系（余剰電力の売電契約）を行うこと</p><p>市税の滞納がないこと</p></div><p>倉敷市役所環境政策課に申請書を提出します。設備の見積書、設計図書、電力会社との契約書類が必要です。</p><p><span class="marker">設備の設置工事前に申請し、交付決定を受けてから工事を開始してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>出力1kWあたり2万円、上限10万円</strong>（5kW分まで）です。</p><p><span class="marker">毎年度予算に限りがあり、先着順で受付終了</span>します。年度初めの早い段階での申請をおすすめします。</p><div class="highlight-box">2018年の西日本豪雨で倉敷市真備地区は甚大な被害を受けました。太陽光発電と蓄電池の組み合わせは災害時の非常用電源としても有効です。防災面からも再エネ設備の導入をご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-seismic-diagnosis',
    title: '倉敷市 木造住宅耐震診断費補助金',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '診断費用の全額補助（無料）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '岡山県',
    tags: ['倉敷市', '耐震診断', '補助金'],
    eligibility: '倉敷市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '倉敷市が実施する木造住宅耐震診断費補助金です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 木造住宅耐震診断費補助金は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>倉敷市は2018年の西日本豪雨で甚大な被害を受け、防災意識が高まっています。地震災害に対しても旧耐震基準の住宅の安全性確認が重要であり、まず耐震診断を受けることで住宅の現状を把握できます。</p><p><span class="marker-green">耐震診断にかかる費用は市が全額負担するため、自己負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>倉敷市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法の住宅であること</p><p>所有者が自ら居住している住宅であること</p></div><p>倉敷市役所建築指導課に申請書を提出します。建築年が確認できる書類（固定資産税課税明細書等）が必要です。</p><p><span class="marker">申請後、市の登録を受けた耐震診断士が訪問し、無料で診断を実施</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額市の負担</strong>です。通常5〜10万円程度かかる耐震診断を無料で受けられます。</p><p><span class="marker">診断の結果、耐震性が不足していると判定された場合は、耐震改修補助金（別制度）を利用可能</span>です。</p><div class="note-box">倉敷市は南海トラフ地震の被害想定区域に含まれており、旧耐震基準の住宅は早めの耐震診断をおすすめします。診断結果をもとに、耐震改修や建替えの判断ができます。まずは気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 福山市（広島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'fukuyama-childcare-subsidy',
    title: '福山市 保育料負担軽減補助金',
    organization: '福山市',
    type: 'local',
    maxAmount: '第2子以降 最大月額1.5万円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['福山市', '保育料軽減', '補助金'],
    eligibility: '福山市に住所を有し、保育施設等に複数の子どもを通わせている多子世帯の保護者',
    applicationPeriod: '通年（年度ごとの認定）',
    description: '福山市が実施する保育料負担軽減補助金です。多子世帯の保育料負担を軽減し、子育てを支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 保育料負担軽減補助金は、<span class="marker">複数の子どもを保育施設に通わせている多子世帯</span>の保育料を軽減する制度です。</p><p>福山市は広島県東部に位置する中核市で、「100万本のばらのまち」として知られています。福山城を中心とした歴史あるまちなみと、JFEスチールなどの製造業が共存する産業都市です。共働き世帯への支援策として、保育料の負担軽減に取り組んでいます。</p><p><span class="marker-green">国制度に市独自の上乗せ補助を加え、第2子以降の保育料を大幅に軽減</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福山市に住民登録があり、認可保育所・認定こども園等に在園する子どもの保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第2子：保育料半額（市独自の上乗せ軽減あり）</p><p>第3子以降：保育料無料</p><p>年齢にかかわらず、生計を一にする子どもを数えます</p></div><p>保育施設の利用申込み時に認定されるため、<strong>原則として別途の申請は不要</strong>です。家族構成に変更があった場合は届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の上乗せにより、<strong>第2子の保育料が最大月額1.5万円軽減</strong>されます。第3子以降は無料です。</p><p><span class="marker">3歳以上は幼児教育・保育の無償化により保育料は無料</span>ですので、本制度は主に0〜2歳児に適用されます。</p><div class="note-box">副食費（おかず代）は保育料とは別に実費がかかります。年収360万円未満相当の世帯や第3子以降の子どもは副食費も免除される場合があります。詳しくは福山市のネウボラ推進課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-birth-bonus',
    title: '福山市 出産祝い金支給制度',
    organization: '福山市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['福山市', '出産祝い金', '給付金'],
    eligibility: '福山市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '福山市が実施する出産祝い金支給制度です。出産した世帯に対し、子どもの人数に応じた祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 出産祝い金支給制度は、<span class="marker">市内に住所を有する方が出産した際に、子どもの出生順に応じた祝い金を支給</span>する制度です。</p><p>福山市は人口約45万人の中核市で、広島県東部の中心都市です。鞆の浦の美しい港町や福山城など歴史文化資源に恵まれ、「ばらのまち」として全国に知られています。少子化対策と子育て世帯の定住促進のため、出産時の経済的支援を行っています。</p><p>支給額は<strong>第1子・第2子が5万円、第3子以降は10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>出産日時点で福山市に住民登録があること</p><p>出生届が受理されていること</p><p>生後6か月以内に申請すること</p><p>市税の滞納がないこと</p></div><p>出生届の提出時に案内が配布されます。福山市役所ネウボラ推進課に申請書を提出してください。</p><p><span class="marker">申請期限は出生日から6か月以内</span>です。期限を過ぎると受給できませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子・第2子が各5万円、第3子以降は10万円</strong>です。多胎児はそれぞれの子どもについて支給されます。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">福山市は「ネウボラ（フィンランド語で「相談の場」）」を導入し、妊娠期から子育て期まで一貫した相談支援を行っています。出産祝い金とあわせて、ネウボラ相談員による支援もぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-housing-purchase',
    title: '福山市 子育て世帯住宅取得支援補助金',
    organization: '福山市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '広島県',
    tags: ['福山市', '住宅取得', '子育て世帯'],
    eligibility: '福山市内に住宅を取得する中学生以下の子どもがいる世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '福山市が実施する子育て世帯住宅取得支援補助金です。市内で住宅を購入する子育て世帯に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 子育て世帯住宅取得支援補助金は、<span class="marker">中学生以下の子どもがいる世帯が市内に住宅を新築・購入する際</span>に費用の一部を補助する制度です。</p><p>福山市は瀬戸内海に面した温暖な気候と、新幹線のぞみ停車駅を有する交通利便性が魅力です。子育て世帯の定住を促進するため、住宅取得時の経済的支援を実施しています。</p><p>補助額は<strong>基本額20万円、市外転入加算10万円、多子世帯加算10万円</strong>です。<span class="marker-green">新築・中古・マンションを問わず対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる世帯であること</p><p>取得する住宅が福山市内に所在すること</p><p>自己居住用として取得すること</p><p>市税の滞納がないこと</p><p>5年以上居住する意思があること</p></div><p>福山市役所住宅課に申請書を提出します。売買契約書・建築工事請負契約書の写し、住民票、戸籍の証明書類が必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>基本額20万円</strong>です。市外からの転入で<strong>10万円加算</strong>、子どもが3人以上の多子世帯は<strong>10万円加算</strong>で、最大40万円となります。</p><p><span class="marker">年間の予算枠があり、先着順で受付終了</span>します。</p><div class="note-box">親族間の売買や相続による取得は対象外です。5年以内に転出した場合は返還を求められることがあります。住宅ローン減税や すまい給付金など国の制度との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-infertility',
    title: '福山市 特定不妊治療費助成制度',
    organization: '福山市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '広島県',
    tags: ['福山市', '不妊治療', '助成金'],
    eligibility: '福山市に住所を有し、特定不妊治療を受けている夫婦',
    applicationPeriod: '治療終了日から6か月以内',
    description: '福山市が実施する特定不妊治療費助成制度です。体外受精・顕微授精などの自己負担分を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 特定不妊治療費助成制度は、<span class="marker">体外受精・顕微授精（特定不妊治療）にかかる自己負担分</span>を助成する制度です。</p><p>福山市はネウボラ（子育て世代包括支援センター）を全国に先駆けて導入し、妊娠期からの切れ目のない支援を行っています。不妊治療の経済的負担を軽減し、一人でも多くの方が安心して治療に臨めるよう支援しています。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>です。<span class="marker-green">保険適用後の自己負担分が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福山市に住民登録がある法律上の婚姻をしている夫婦（事実婚を含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>指定医療機関が発行する治療証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票</p><p>戸籍謄本または事実婚の申立書</p></div><p>福山市役所ネウボラ推進課に申請します。<span class="marker">治療終了日の翌日から6か月以内が申請期限</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分について、<strong>1回の治療あたり上限10万円</strong>を助成します。年度内の回数制限がありますのでご確認ください。</p><p><span class="marker">先進医療として実施される治療についても一部助成対象</span>となる場合があります。</p><div class="note-box">広島県の助成制度を利用できる場合はそちらを優先してください。福山市のネウボラ相談員が不妊治療に関する精神的なサポートも行っていますので、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-scholarship',
    title: '福山市 高校生等奨学給付金',
    organization: '福山市',
    type: 'local',
    maxAmount: '年額最大15万円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '広島県',
    tags: ['福山市', '奨学金', '高校生'],
    eligibility: '福山市に住所を有する高校生の保護者で、住民税非課税世帯または生活保護世帯の方',
    applicationPeriod: '毎年7月〜9月',
    description: '福山市が実施する高校生等奨学給付金です。経済的に困難な世帯の高校生に返還不要の奨学金を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 高校生等奨学給付金は、<span class="marker">住民税非課税世帯や生活保護世帯の高校生</span>に対し、教科書費や教材費等の負担を軽減するために返還不要の給付金を支給する制度です。</p><p>福山市は「教育のまち福山」を標榜し、すべての子どもが学びの機会を得られるよう支援しています。鞆の浦学園などの特色ある学校教育と合わせ、高校段階での学習継続を経済面からサポートしています。</p><p>給付額は<strong>世帯の状況に応じて年額最大15万円</strong>です。<span class="marker-green">返還不要の給付型です</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>福山市に住民登録がある高校生の保護者であること</p><p>住民税所得割が非課税であること、または生活保護世帯であること</p><p>高等学校等就学支援金の受給資格を有すること</p></div><p>毎年7月〜9月に福山市教育委員会学校教育部または在学する学校を通じて申請します。課税証明書、在学証明書などが必要です。</p><p><span class="marker">通信制高校に通う場合も対象</span>です。ただし給付額が異なります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は世帯の課税状況や通学形態により異なり、<strong>全日制の場合は年額最大約15万円</strong>です。</p><p><span class="marker">国の高校生等奨学給付金とあわせて支給される制度</span>です。福山市独自の上乗せ分を含みます。</p><div class="highlight-box">高等学校等就学支援金（授業料の実質無償化）とは別の制度で、併用が可能です。福山市では学習支援教室も開催しており、経済的な支援だけでなく学力向上のサポートも充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-telework-bonus',
    title: '福山市 テレワーク推進補助金',
    organization: '福山市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '広島県',
    tags: ['福山市', 'テレワーク', '補助金'],
    eligibility: '福山市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '福山市が実施するテレワーク推進補助金です。中小企業のテレワーク環境構築費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 テレワーク推進補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに構築する際</span>の費用を補助する制度です。</p><p>福山市は新幹線のぞみが停車する交通の要衝で、製造業を中心とした産業都市です。デジタル化の推進と働き方改革を通じて、企業の生産性向上と従業員の生活の質の向上を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">テレワーク用機器の購入費やクラウドサービスの導入費が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用パソコン・タブレットの購入費</p><p>VPN機器・セキュリティ機器の購入費</p><p>Web会議用カメラ・マイクの購入費</p><p>クラウドサービス・グループウェアの導入費</p></div><p>福山市役所経済部産業振興課に申請書と導入計画書を提出します。見積書と就業規則の整備計画が必要です。</p><p><span class="marker">導入前に申請し、交付決定後に機器の購入・サービスの契約を行ってください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者1回限りの利用です。</p><p><span class="marker">導入後3か月以内にテレワーク実施報告書の提出が必要</span>です。実際にテレワークを実施していない場合は返還を求められることがあります。</p><div class="note-box">福山市では「備後圏域テレワーク推進協議会」を通じて、テレワーク導入のノウハウ共有やセミナーも開催しています。まずは情報収集から始めてみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-nursing-equipment',
    title: '福山市 介護用品購入費助成事業',
    organization: '福山市',
    type: 'local',
    maxAmount: '年額最大10万円',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '広島県',
    tags: ['福山市', '介護用品', '助成金'],
    eligibility: '福山市に住所を有する要介護3以上の高齢者を在宅で介護する家族',
    applicationPeriod: '通年',
    description: '福山市が実施する介護用品購入費助成事業です。在宅介護に必要な紙おむつ等の購入費を年額最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 介護用品購入費助成事業は、<span class="marker">要介護3以上の高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品の購入費を助成する制度です。</p><p>福山市は備後地域の中核都市として医療・介護サービスの充実に力を入れています。在宅介護を続ける家族の経済的負担を軽減し、住み慣れた地域で安心して暮らし続けられるよう支援しています。</p><p><span class="marker-green">紙おむつ、尿取りパッド、清拭剤、使い捨て手袋などの購入費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福山市に住民登録があり、以下の条件を満たす方が対象です。</p><div class="summary-box" data-title="助成要件"><p>要介護3以上の認定を受けた65歳以上の高齢者を在宅で介護していること</p><p>介護を受ける方が市民税非課税世帯であること</p><p>介護を受ける方が病院・施設に入所していないこと</p></div><p>福山市役所長寿社会課の窓口で申請します。介護保険被保険者証と介護用品の領収書が必要です。</p><p><span class="marker">四半期ごとにまとめて申請する方式</span>です。領収書は必ず保管しておいてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>介護用品の購入費について、<strong>年額最大10万円</strong>が助成されます。四半期ごとに上限額が設定されています。</p><p><span class="marker">入院や施設入所した期間は助成対象外</span>です。状況の変化があった場合は速やかに届け出てください。</p><div class="note-box">介護保険の福祉用具購入費とは別の制度です。福山市では在宅介護者向けのリフレッシュ事業（介護者のつどい、介護者慰労金など）も実施していますので、あわせてご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-elderly-support',
    title: '福山市 高齢者外出支援事業',
    organization: '福山市',
    type: 'local',
    maxAmount: 'バス・タクシー券 年間最大1万2千円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '広島県',
    tags: ['福山市', '高齢者外出支援', '交通費補助'],
    eligibility: '福山市に住所を有する75歳以上の方',
    applicationPeriod: '通年（年度ごとの申請）',
    description: '福山市が実施する高齢者外出支援事業です。75歳以上の高齢者にバス・タクシーの利用券を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 高齢者外出支援事業は、<span class="marker">75歳以上の高齢者に対し、バスやタクシーの利用券を交付</span>する制度です。</p><p>福山市は東西に広い市域を持ち、中山間地域では公共交通機関が限られるエリアもあります。高齢者の日常的な外出（通院、買い物、社会活動等）を支援し、閉じこもりの防止と健康維持を図っています。</p><p><span class="marker-green">バス回数券またはタクシー利用券のいずれかを選択して受け取れます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用要件"><p>福山市に住民登録がある75歳以上の方</p><p>施設に入所していないこと</p><p>年度内に1回の申請</p></div><p>福山市役所長寿社会課の窓口または各支所で申請します。介護保険被保険者証または健康保険証をお持ちください。</p><p><strong>年度ごとの申請</strong>が必要です。バス回数券とタクシー利用券のどちらかを選択してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大1万2千円分</strong>のバス回数券またはタクシー利用券が交付されます。</p><p><span class="marker">利用券は福山市内で営業するバス会社・タクシー会社で使用可能</span>です。年度末で未使用分は失効します。</p><div class="highlight-box">福山市では「ふくやま乗合タクシー」の運行も行っています。定時定路線のバスが運行していない地域でも、事前予約制の乗合タクシーが利用できますので、外出支援券とあわせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-bousai-equipment',
    title: '福山市 家庭用防災資機材購入補助金',
    organization: '福山市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '広島県',
    tags: ['福山市', '防災資機材', '補助金'],
    eligibility: '福山市内に住宅を所有または居住する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '福山市が実施する家庭用防災資機材購入補助金です。家庭での防災対策に必要な資機材の購入費を最大2万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 家庭用防災資機材購入補助金は、<span class="marker">地震や豪雨災害に備えて家庭で防災資機材を購入する際</span>の費用を補助する制度です。</p><p>福山市は2018年の西日本豪雨で甚大な被害を受けた経験があり、災害への備えの重要性が強く認識されています。各家庭の自助力を高め、災害発生時の被害を最小限に抑えることを目的としています。</p><p>補助額は購入費用の2分の1以内で、<strong>上限2万円</strong>です。<span class="marker-green">感震ブレーカー、止水板、家具固定器具、非常用発電機などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災資機材"><p>感震ブレーカー（地震時自動遮断装置）</p><p>止水板・浸水防止設備</p><p>家具転倒防止器具の設置工事</p><p>ポータブル発電機・蓄電池</p><p>雨水貯留タンク</p></div><p>福山市役所危機管理防災課に申請書を提出します。購入品の見積書または領収書と設置場所の写真が必要です。</p><p><span class="marker">購入・設置前の事前申請が原則</span>ですが、購入後の申請も一部認められています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限2万円</strong>です。1世帯につき年度内1回の利用に限られます。</p><p><span class="marker">食料・飲料水などの消耗品は対象外</span>です。耐久性のある防災資機材が対象となります。</p><div class="note-box">福山市はハザードマップを公開しており、自宅周辺の浸水リスクや土砂災害リスクを確認できます。リスクに応じた防災対策を行い、避難計画とあわせて家庭の防災力を高めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 呉市（広島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kure-childcare-subsidy',
    title: '呉市 保育料軽減支援事業',
    organization: '呉市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['呉市', '保育料軽減', '多子世帯'],
    eligibility: '呉市に住所を有し、保育施設等に複数の子どもを通わせている世帯の保護者',
    applicationPeriod: '通年（年度ごとの認定）',
    description: '呉市が実施する保育料軽減支援事業です。多子世帯の保育料を段階的に軽減し、子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 保育料軽減支援事業は、<span class="marker">複数の子どもを保育施設に通わせている世帯</span>の保育料を段階的に軽減する制度です。</p><p>呉市は広島県南西部に位置し、かつての海軍鎮守府として栄えた歴史ある港町です。大和ミュージアム（呉市海事歴史科学館）や海上自衛隊呉基地で知られていますが、人口減少が課題となっており、子育て世帯の定住促進のため保育料の負担軽減に取り組んでいます。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は保育料無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>呉市に住民登録があり、認可保育所・認定こども園等に在園する子どもの保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料半額</p><p>第3子以降：保育料無料</p></div><p>保育施設の入園申込み時に自動的に認定されるため、<strong>原則として別途の申請は不要</strong>です。</p><p><span class="marker">きょうだいの出生・転出入などにより扶養人数が変わった場合は届出が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は保育料半額、第3子以降は無料</strong>です。年齢にかかわらず、生計を一にする子どもを上から順に数えます。</p><p><span class="marker">3歳以上は幼児教育・保育の無償化により保育料は無料</span>です。本制度は主に0〜2歳児に適用されます。</p><div class="note-box">副食費は保育料とは別に実費がかかりますが、一定の所得以下の世帯や第3子以降の子どもは免除されます。認可外保育施設の利用者は別制度をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-birth-bonus',
    title: '呉市 出産応援給付金',
    organization: '呉市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['呉市', '出産応援', '給付金'],
    eligibility: '呉市に住所を有する妊婦および出産した方',
    applicationPeriod: '妊娠届出時および出生届出後',
    description: '呉市が実施する出産応援給付金です。妊娠届出時と出産後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 出産応援給付金は、<span class="marker">妊娠届出時に5万円、出産後に5万円の合計10万円</span>を支給する制度です。</p><p>呉市は瀬戸内海に面した風光明媚な港町で、造船業の歴史と海軍ゆかりの文化遺産が魅力です。人口減少・少子化への対策として、妊娠から出産・子育てまでの一貫した支援体制を構築しています。</p><p><span class="marker-green">伴走型相談支援と経済的支援を一体的に実施し、妊娠期からの切れ目ない支援を行います</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給の流れ"><p>妊娠届出時に保健師との面談 → 出産応援給付金5万円</p><p>妊娠後期のアンケート・面談</p><p>出産後の面談（こんにちは赤ちゃん訪問等） → 子育て応援給付金5万円</p></div><p>各段階の面談後に申請書が交付されます。呉市役所子育て支援課に提出してください。</p><p><span class="marker">面談の受診が支給の条件</span>です。面談では出産・育児に関する不安の相談もできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円</strong>が支給されます（出産応援5万円 + 子育て応援5万円）。</p><p><span class="marker">多胎の場合、子育て応援給付金は子どもの人数分が支給</span>されます。</p><div class="highlight-box">呉市では産前産後のサポート事業や産後ケア事業（宿泊型・通所型）も実施しています。出産応援給付金と合わせて、呉市独自の子育て支援サービスをぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-newlywed-rent',
    title: '呉市 新婚世帯住居費補助金',
    organization: '呉市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '広島県',
    tags: ['呉市', '新婚世帯', '住居費補助'],
    eligibility: '呉市内に居住する婚姻届出日時点で夫婦ともに39歳以下の新婚世帯',
    applicationPeriod: '婚姻届出日の属する年度内',
    description: '呉市が実施する新婚世帯住居費補助金です。新婚世帯の住居費・引越し費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 新婚世帯住居費補助金は、<span class="marker">婚姻届出日時点で夫婦ともに39歳以下の新婚世帯</span>に対し、住居費や引越し費用を補助する制度です。</p><p>呉市は三方を山に囲まれた天然の良港として発展してきた街で、近年は「呉氏」のゆるキャラで話題となるなど、街のイメージ刷新にも取り組んでいます。若い世帯の定住を促進し、まちの活力を維持するため、新婚期の住居費を支援しています。</p><p>補助額は<strong>最大30万円</strong>です。<span class="marker-green">家賃、敷金・礼金、引越し費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届出日時点で夫婦ともに39歳以下であること</p><p>夫婦の合計所得が500万円未満であること</p><p>呉市内に居住していること</p><p>市税の滞納がないこと</p></div><p>呉市役所企画部地域協働課に申請書を提出します。婚姻届受理証明書、住民票、賃貸借契約書の写し、所得証明書が必要です。</p><p><span class="marker">婚姻届出日の属する年度内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は住居費と引越し費用の合計で<strong>最大30万円</strong>です。夫婦ともに29歳以下の場合は<strong>最大60万円</strong>に増額されます。</p><p><span class="marker">住居費には家賃、敷金、礼金、共益費、仲介手数料が含まれます</span>。住宅購入の場合はローンの元利返済額も対象です。</p><div class="note-box">公営住宅や社宅に居住している場合、親族が所有する住宅を賃借している場合は対象外です。呉市では空き家バンク制度も活用でき、新婚世帯向けの住宅情報も提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-disability-medical',
    title: '呉市 重度障害者医療費助成制度',
    organization: '呉市',
    type: 'local',
    maxAmount: '自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '広島県',
    tags: ['呉市', '障害者医療', '助成金'],
    eligibility: '呉市に住所を有する身体障害者手帳1〜3級、療育手帳A・Bの一部、精神障害者保健福祉手帳1級をお持ちの方',
    applicationPeriod: '通年',
    description: '呉市が実施する重度障害者医療費助成制度です。重度の障害をお持ちの方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 重度障害者医療費助成制度は、<span class="marker">重度の障害をお持ちの方の保険診療にかかる自己負担分</span>を助成する制度です。</p><p>呉市は海上自衛隊基地の所在地として知られる一方、バリアフリーのまちづくりにも力を入れています。障害のある方が安心して医療を受けられるよう、医療費の自己負担を軽減しています。</p><p><span class="marker-green">広島県の制度に基づき、身体障害者手帳1〜3級、療育手帳Aなどをお持ちの方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>呉市に住民登録があり、以下のいずれかの手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害程度"><p>身体障害者手帳 1級〜3級</p><p>療育手帳 A（重度）・一部Bの方</p><p>精神障害者保健福祉手帳 1級</p></div><p>呉市役所福祉保健部障害福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類をお持ちください。申請後、<strong>「重度心身障害者医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>広島県内の医療機関では受給者証を提示することで、<strong>保険診療の自己負担分が助成</strong>されます。一部自己負担が残る場合があります。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">所得制限が設けられている場合があります。65歳以上で後期高齢者医療制度に移行される方は手続きの変更が必要です。入院時の食事療養費は自己負担となります。詳しくは呉市の窓口にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-school-lunch',
    title: '呉市 学校給食費支援制度',
    organization: '呉市',
    type: 'local',
    maxAmount: '第3子以降 給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '広島県',
    tags: ['呉市', '学校給食', '無償化'],
    eligibility: '呉市立小中学校に在籍する児童生徒の保護者（第3子以降は全世帯対象）',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '呉市が実施する学校給食費支援制度です。多子世帯の第3子以降の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 学校給食費支援制度は、<span class="marker">多子世帯の第3子以降の児童生徒の学校給食費を全額免除</span>する制度です。</p><p>呉市は地元の瀬戸内海の魚介類や広島県産の食材を活用した栄養バランスのよい給食を提供しています。「食育のまちくれ」として、給食を通じた食教育を推進するとともに、多子世帯の経済的負担軽減に取り組んでいます。</p><p><span class="marker-green">小学校1年生から中学校3年生までの子どもを数え、第3子以降の給食費が全額免除</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>呉市立小中学校に在籍する児童生徒の保護者であること</p><p>扶養する子ども（小学生以上）が3人以上いること</p><p>第3子以降の子どもが市立小中学校で給食を喫食していること</p></div><p>年度初めに学校を通じて案内が配布されます。申請書に記入して在籍校に提出してください。</p><p><span class="marker">年度途中の転入や対象要件の変更にも対応</span>しています。随時お問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の児童生徒の<strong>給食費が全額免除</strong>されます。小学校の年間給食費は約4.5万円、中学校は約5.2万円が目安です。</p><p><span class="marker">就学援助制度を利用している世帯は、就学援助の給食費支給と調整</span>が行われます。</p><div class="highlight-box">呉市では「くれ食育推進計画」に基づき、地元の食文化を活かした食育を推進しています。給食費の支援と合わせ、食を通じた健全な成長をサポートしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-sme-support',
    title: '呉市 中小企業デジタル化支援補助金',
    organization: '呉市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '広島県',
    tags: ['呉市', '中小企業', 'デジタル化'],
    eligibility: '呉市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '呉市が実施する中小企業デジタル化支援補助金です。業務効率化のためのIT導入費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 中小企業デジタル化支援補助金は、<span class="marker">市内の中小企業が業務効率化・生産性向上のためにITツールを導入する際</span>の費用を補助する制度です。</p><p>呉市は造船業をはじめとした製造業が盛んな地域ですが、デジタル化の遅れが中小企業の課題となっています。本制度は、受発注管理、在庫管理、会計処理などの業務をデジタル化し、経営基盤の強化を支援します。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">業務管理ソフト、ECサイト構築、キャッシュレス決済導入などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>業務管理・会計ソフトウェアの導入費</p><p>ECサイト・ネットショップの構築費</p><p>キャッシュレス決済端末の導入費</p><p>クラウドサービスの初期導入費</p><p>RPAツールの導入費</p></div><p>呉市役所産業部商工振興課に申請書と事業計画書を提出します。見積書と導入による効果の見込みを記載した書類が必要です。</p><p><span class="marker">導入前に申請し、交付決定を受けてから経費を支出してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。1事業者につき1回限りの利用です。</p><p><span class="marker">パソコン本体の購入費は原則対象外</span>ですが、専用端末（POSレジ等）は対象となる場合があります。</p><div class="highlight-box">呉市商工会議所ではIT導入に関する無料の経営相談や専門家派遣を実施しています。自社に最適なITツールの選定から導入後の活用まで、一貫したサポートを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-nursing-home-reform',
    title: '呉市 高齢者住宅改修費助成事業',
    organization: '呉市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'nursing',
    prefecture: '広島県',
    tags: ['呉市', '介護住宅改修', '助成金'],
    eligibility: '呉市に住所を有する65歳以上の高齢者で、住宅改修が必要な方',
    applicationPeriod: '通年',
    description: '呉市が実施する高齢者住宅改修費助成事業です。高齢者の在宅生活を支えるバリアフリー改修工事を最大25万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 高齢者住宅改修費助成事業は、<span class="marker">65歳以上の高齢者の在宅生活を支えるためのバリアフリー改修工事</span>に対して費用の一部を助成する制度です。</p><p>呉市は坂道の多い地形が特徴で、高齢者にとって自宅内の段差や階段も大きな負担となります。手すりの設置、段差の解消、浴室・トイレの改修など、安全に暮らし続けるための住宅改修を支援しています。</p><p>助成額は<strong>対象工事費の一部で上限25万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）とは別枠で利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取付け</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器等への便器の取替え</p></div><p>呉市役所福祉保健部介護保険課または地域包括支援センターに相談の上、申請します。</p><p><span class="marker">工事前の事前申請が必須</span>です。ケアマネジャー等による住宅改修の必要性の確認が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は世帯の所得に応じて工事費の一部が助成され、<strong>上限25万円</strong>です。</p><p><span class="marker">介護保険の住宅改修費とあわせて利用することで、最大約45万円の住宅改修</span>が可能です。</p><div class="note-box">新築・増築工事や美装工事は対象外です。呉市は急傾斜地が多く、玄関周りの手すり設置や段差解消のニーズが高い地域です。地域包括支援センターで無料相談を受け付けていますので、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-energy-support',
    title: '呉市 省エネルギー設備導入補助金',
    organization: '呉市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '広島県',
    tags: ['呉市', '省エネルギー', '補助金'],
    eligibility: '呉市内の住宅に省エネルギー設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '呉市が実施する省エネルギー設備導入補助金です。住宅用太陽光発電設備や蓄電池の導入費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 省エネルギー設備導入補助金は、<span class="marker">市内の住宅に太陽光発電設備や蓄電池などの省エネルギー設備を導入する際</span>の費用を補助する制度です。</p><p>呉市は瀬戸内海沿岸に位置し、温暖な気候と日照に恵まれた太陽光発電に適した地域です。2050年カーボンニュートラルの実現に向け、家庭でのクリーンエネルギーの利用促進を図っています。</p><p>補助額は設備の種類に応じて設定され、<strong>合計上限10万円</strong>です。<span class="marker-green">太陽光発電設備、蓄電池、エネファーム（家庭用燃料電池）が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電設備：1kWあたり2万円（上限7万円）</p><p>家庭用蓄電池：一律5万円</p><p>エネファーム（家庭用燃料電池）：一律5万円</p><p>※合計上限10万円</p></div><p>呉市役所環境部環境政策課に申請書を提出します。設備の見積書、設計図書、電力会社との契約書類が必要です。</p><p><span class="marker">設備の設置工事前に申請し、交付決定を受けてから工事を開始してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>太陽光発電と蓄電池を同時設置する場合、<strong>合計で最大10万円</strong>の補助が受けられます。</p><p><span class="marker">中古品やリース設備は対象外</span>です。新品の設備を購入・設置する場合に限られます。</p><div class="highlight-box">呉市は2018年の西日本豪雨で甚大な被害を受けました。太陽光発電と蓄電池の組み合わせは、災害時の非常用電源としても大きな安心につながります。環境にやさしく、防災にも役立つ設備導入をご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-seismic-diagnosis',
    title: '呉市 住宅耐震診断費用補助金',
    organization: '呉市',
    type: 'local',
    maxAmount: '診断費用の全額補助（無料）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '広島県',
    tags: ['呉市', '耐震診断', '補助金'],
    eligibility: '呉市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '呉市が実施する住宅耐震診断費用補助金です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 住宅耐震診断費用補助金は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>呉市は急傾斜地が多い地形が特徴で、地震による建物被害のリスクが高い地域です。2001年の芸予地震では大きな被害を受けた経験があり、旧耐震基準の住宅の安全性確認を推進しています。</p><p><span class="marker-green">耐震診断にかかる費用は市が全額負担するため、自己負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>呉市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法の住宅であること</p><p>所有者が自ら居住している住宅であること</p></div><p>呉市役所都市部建築指導課に申請書を提出します。建築年が確認できる書類が必要です。</p><p><span class="marker">申請後、市の登録を受けた耐震診断士が訪問し、無料で診断を実施</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額市の負担</strong>です。通常5〜10万円程度かかる診断が無料で受けられます。</p><p><span class="marker">診断の結果、耐震性が不足と判定された場合は、耐震改修補助金（別制度・上限100万円程度）を利用可能</span>です。</p><div class="note-box">呉市は南海トラフ地震の揺れや津波の被害想定区域に含まれています。急傾斜地の住宅は地震による土砂災害のリスクも考慮する必要があります。まずは耐震診断で住宅の現状を把握し、必要な対策を検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
