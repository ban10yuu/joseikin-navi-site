import { Grant } from '@/lib/types';

export const cityGrantsBatch55: Grant[] = [
  // ────────────────────────────────────────────────
  // 石巻市（宮城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'ishinomaki-childcare-subsidy',
    title: '石巻市 保育料軽減補助金',
    organization: '石巻市',
    type: 'local',
    maxAmount: '第2子以降保育料無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['石巻市', '保育料', '補助金'],
    eligibility: '石巻市に住所を有し、保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '石巻市が実施する保育料軽減補助金です。第2子以降の保育料を無償化し、多子世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 保育料軽減補助金は、<span class="marker">認可保育所・認定こども園等を利用する第2子以降の保育料</span>を無料化する制度です。</p><p>宮城県北東部に位置する石巻市は、日本有数の水揚げ量を誇る石巻漁港を擁する水産都市です。東日本大震災からの復興を経て、子育て世帯の定住促進に力を入れており、保育料の軽減はその柱の一つとなっています。</p><p><span class="marker-green">第1子の年齢や所得制限にかかわらず、第2子以降の保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>石巻市に住民登録があり、認可保育所・認定こども園・小規模保育事業所等を利用する第2子以降の児童の保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>家庭的保育事業所</p></div><p>原則として保育施設の入所手続き時に自動的に適用されます。<strong>別途の申請は不要</strong>ですが、世帯状況に変更があった場合は石巻市役所子育て支援課へ届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。第1子については国の基準に基づく保育料が適用されます。</p><p><span class="marker">0〜2歳児クラスの第1子の保育料は所得に応じて月額0円〜約3万円程度</span>です。3〜5歳児は幼児教育・保育の無償化により全員無料です。</p><div class="note-box">認可外保育施設を利用している場合は、この制度の対象外となる場合があります。延長保育料や給食費（副食費）は別途負担が必要です。詳しくは石巻市子育て支援課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-birth-bonus',
    title: '石巻市 出産祝い金',
    organization: '石巻市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['石巻市', '出産祝い金', '給付金'],
    eligibility: '石巻市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '石巻市が実施する出産祝い金です。新生児の誕生を祝い、第1子に5万円、第2子以降に10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 出産祝い金は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に、出産を祝い経済的支援を行う給付金制度です。</p><p>石巻市は東日本大震災以降、人口減少が深刻な課題となっています。子育て世帯を応援し、安心して出産・子育てできる環境を整備するため、出産祝い金を支給しています。</p><p>支給額は<strong>第1子が5万円、第2子以降が10万円</strong>です。<span class="marker-green">所得制限は設けられていません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出生時に石巻市に住民登録があること</p><p>出生届を石巻市に提出していること</p><p>出生後も引き続き石巻市に居住する意思があること</p></div><p>出生届の提出後、石巻市役所子育て支援課の窓口で申請します。<strong>生後6か月以内</strong>に申請してください。</p><p><span class="marker">申請時に保護者の本人確認書類と振込先口座情報が必要</span>です。出生届と同時に手続きすると便利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。多胎児（双子・三つ子等）の場合はそれぞれの子について支給されます。</p><p><span class="marker">申請から約1か月後に指定の口座へ振り込まれます</span>。</p><div class="highlight-box">石巻市では出産祝い金のほかにも、妊婦健診費用の助成や産後ケア事業など、妊娠期から子育て期までの切れ目ない支援を行っています。子育て世代包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-housing-purchase',
    title: '石巻市 住宅取得支援補助金',
    organization: '石巻市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '宮城県',
    tags: ['石巻市', '住宅取得', '補助金'],
    eligibility: '石巻市内に新たに住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '石巻市が実施する住宅取得支援補助金です。市内での住宅新築・購入に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または購入する方</span>に対して費用の一部を補助する制度です。</p><p>石巻市は東日本大震災からの復興とともに、新たなまちづくりを進めています。高台移転や災害公営住宅の整備が一段落した今、民間住宅の取得を支援することで定住人口の増加を目指しています。</p><p>基本補助額は<strong>30万円</strong>で、子育て世帯や市外からの転入者には<span class="marker-green">最大20万円の加算があり、合計で最大50万円</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>石巻市内に住宅を新築または購入すること</p><p>取得後に石巻市に住民登録をすること</p><p>市税を滞納していないこと</p><p>5年以上継続して居住する意思があること</p></div><p>石巻市役所住宅課に申請書と必要書類（売買契約書の写し、住民票等）を提出します。</p><p><span class="marker">住宅の引き渡し後6か月以内に申請</span>してください。新築の場合は完成後に申請となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。以下の加算があります。</p><p><span class="marker">子育て世帯加算：10万円（18歳未満の子どもがいる世帯）、転入加算：10万円（市外から転入する方）</span>。合計で最大50万円となります。</p><div class="note-box">中古住宅の購入も対象となりますが、親族間の売買や相続による取得は対象外です。5年以内に転出した場合は補助金の返還を求められることがあります。災害危険区域内での住宅取得は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-infertility',
    title: '石巻市 不妊治療費助成制度',
    organization: '石巻市',
    type: 'local',
    maxAmount: '最大15万円（1回あたり）',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '宮城県',
    tags: ['石巻市', '不妊治療', '助成金'],
    eligibility: '石巻市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後〜年度末まで',
    description: '石巻市が実施する不妊治療費助成制度です。特定不妊治療（体外受精・顕微授精）の費用を1回あたり最大15万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 不妊治療費助成制度は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対して治療費の一部を助成する制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、保険適用外の先進医療や自己負担分は依然として高額です。石巻市では独自の上乗せ助成を行い、子どもを望む夫婦の経済的負担を軽減しています。</p><p><span class="marker-green">保険適用後の自己負担分に加え、先進医療にかかる費用も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>石巻市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の関係にある夫婦が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>特定不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>医療費の領収書の写し</p><p>夫婦の住民票・戸籍謄本</p></div><p>治療が終了した日の属する年度末までに、石巻市役所健康推進課へ申請してください。<strong>1年度あたり2回まで</strong>申請できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大15万円</strong>です。保険適用後の自己負担分と先進医療費の合計が対象となります。</p><p><span class="marker">通算の助成回数に制限がある場合がありますので、事前に確認してください</span>。</p><div class="highlight-box">石巻市では不妊治療費の助成のほか、不妊専門相談やカウンセリングの案内も行っています。まずは石巻市健康推進課にお気軽にご相談ください。宮城県の助成制度と併用できる場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-scholarship',
    title: '石巻市 奨学金制度',
    organization: '石巻市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '宮城県',
    tags: ['石巻市', '奨学金', '教育支援'],
    eligibility: '石巻市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '石巻市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、奨学金を貸与する制度です。</p><p>石巻市は震災復興のなかで、次世代を担う若者の教育を重視してきました。石ノ森萬画館に象徴される文化のまちとして、子どもたちの学びと成長を支える環境整備に取り組んでいます。</p><p>貸与月額は<strong>高校生1.5万円、大学生等3万円</strong>です。<span class="marker-green">無利子での貸与</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>石巻市に住民登録がある世帯の子であること</p><p>高等学校、大学、短大、専門学校等に在学中または入学予定であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が一定水準以上であること</p></div><p>毎年3月〜4月の募集期間に、石巻市教育委員会学校教育課へ申請書を提出します。</p><p><span class="marker">選考は学業成績と家計状況を総合的に審査</span>して行われ、結果は5月頃に通知されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生1.5万円、大学生等3万円</strong>です。返還は卒業後6か月を経過した後、貸与期間の3倍以内の期間で行います。</p><p><span class="marker">石巻市に一定期間居住して就業した場合、返還免除の制度</span>が設けられている場合があります。詳しくは教育委員会にご確認ください。</p><div class="note-box">日本学生支援機構の奨学金など、他の奨学金制度との併用が可能です。ただし、募集人数に限りがあるため、早めの準備をおすすめします。休学・退学した場合は貸与が停止されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-sme-support',
    title: '石巻市 中小企業振興補助金',
    organization: '石巻市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '宮城県',
    tags: ['石巻市', '中小企業', '補助金'],
    eligibility: '石巻市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '石巻市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路拡大に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業の設備投資・販路開拓</span>に対して費用の一部を補助する制度です。</p><p>石巻市は水産加工業を基幹産業とし、震災復興を経て産業構造の多様化が進んでいます。水産業に加えIT・ロボット関連企業の誘致も進めており、地元中小企業の競争力強化が重要な課題となっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">製造業・水産加工業の設備更新から、IT導入・EC販路開拓まで幅広く対応</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>石巻市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>対象経費が20万円以上であること</p></div><p>石巻市役所産業部商工課に事業計画書と申請書を提出します。書類審査のうえ交付決定が行われます。</p><p><span class="marker">必ず事業着手前に申請してください</span>。交付決定前に発注・支払いした経費は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。機械設備費、広告宣伝費、展示会出展費、ECサイト構築費などが対象です。</p><p><span class="marker">年度内に事業を完了し、実績報告書を提出する必要があります</span>。</p><div class="highlight-box">石巻市では中小企業振興補助金のほか、石巻商工会議所や石巻産業創造プラットフォームによる無料の経営相談も利用できます。水産加工業の高度化支援や6次産業化の取り組みにも補助が適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-nursing-equipment',
    title: '石巻市 介護用品支給事業',
    organization: '石巻市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '宮城県',
    tags: ['石巻市', '介護用品', '支給'],
    eligibility: '石巻市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '石巻市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>石巻市は震災を経て高齢化が加速しており、在宅介護を支える施策の充実が重要な課題です。介護用品の費用は月々の出費として大きな負担となるため、現物支給によって家族介護者の経済的負担を軽減しています。</p><p><span class="marker-green">市民税非課税世帯を主な対象として、年間最大10万円相当の介護用品を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>石巻市に住民登録があり、在宅で要介護4または5の認定を受けた高齢者を介護している家族が対象です。</p><div class="summary-box" data-title="対象となる介護用品"><p>紙おむつ（テープ型・パンツ型）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤・ウェットティッシュ</p></div><p>石巻市役所介護保険課または各総合支所福祉課の窓口で申請します。<strong>介護保険被保険者証と要介護認定結果通知書</strong>をお持ちください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間最大10万円相当</strong>の介護用品です。カタログから必要な用品を選び、定期的に自宅へ配送されます。</p><p><span class="marker">入院中や介護施設に入所中の方は対象外</span>です。在宅介護を行っている期間のみ支給を受けられます。</p><div class="note-box">支給の可否や金額は世帯の課税状況や要介護度によって異なります。要介護3以下の方でも、常時おむつを使用している場合は対象となることがあります。担当のケアマネジャーに相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-elderly-support',
    title: '石巻市 高齢者生活支援事業',
    organization: '石巻市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '宮城県',
    tags: ['石巻市', '高齢者支援', '生活支援'],
    eligibility: '石巻市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '石巻市が実施する高齢者生活支援事業です。ひとり暮らし高齢者等に配食サービスや緊急通報装置の貸与を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、日常生活を支援する複数のサービスを提供する制度です。</p><p>石巻市は震災後、高齢化率が急上昇し、ひとり暮らしの高齢者が増加しています。孤立を防ぎ安心して暮らせるよう、配食サービスによる栄養確保と安否確認、緊急通報装置の設置などを包括的に行っています。</p><p><span class="marker-green">配食サービス・緊急通報装置の貸与・除雪支援など、複数のメニューを組み合わせて利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス（昼食・夕食の配達と安否確認）</p><p>緊急通報装置の貸与</p><p>除雪支援（冬期）</p><p>ごみ出し支援</p></div><p>石巻市役所長寿社会課または地域包括支援センターの窓口で申請します。</p><p><span class="marker">サービスの種類ごとに対象要件が異なります</span>ので、まずは地域包括支援センターにご相談ください。民生委員の訪問による状況確認が行われる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>配食サービス</strong>は1食あたり約400円の補助があり、自己負担は300〜400円程度です。週5回まで利用可能です。</p><p><span class="marker">緊急通報装置は月額無料〜数百円程度の自己負担で利用できます</span>。ボタン一つで消防署等につながります。</p><div class="highlight-box">石巻市では復興とともに地域コミュニティの再建も進めています。仮設住宅から復興住宅への移転で地域のつながりが希薄になりがちなため、サロン活動や見守り事業もあわせて活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-seismic-diagnosis',
    title: '石巻市 耐震診断補助制度',
    organization: '石巻市',
    type: 'local',
    maxAmount: '診断費用の自己負担ほぼ無料',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '宮城県',
    tags: ['石巻市', '耐震診断', '防災'],
    eligibility: '石巻市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃',
    description: '石巻市が実施する耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断を自己負担ほぼ無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、耐震診断費用を補助する制度です。</p><p>東日本大震災で甚大な被害を受けた石巻市では、建物の耐震化が最重要課題の一つです。今後発生が想定される宮城県沖地震への備えとして、旧耐震基準の住宅の安全性を無料で確認できる機会を提供しています。</p><p><span class="marker-green">市が派遣する耐震診断士による診断で、自己負担はほぼ無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>石巻市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたものであること</p><p>2階建て以下であること</p><p>在来軸組工法または伝統的工法であること</p></div><p>石巻市役所建築指導課に申請書を提出します。申請後、市が認定した耐震診断士が自宅を訪問し診断を行います。</p><p><span class="marker">診断は通常1〜2時間程度で完了</span>します。建物の図面があればお手元にご準備ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>市がほぼ全額を負担</strong>し、自己負担は数千円程度です。診断結果は報告書として交付されます。</p><p><span class="marker">診断の結果「倒壊の可能性がある」と判定された場合は、耐震改修補助制度（最大100万円程度）も利用可能</span>です。</p><div class="note-box">耐震診断はあくまで建物の安全性を確認するもので、改修義務は発生しません。ただし、震災の教訓を踏まえ、診断結果に基づく改修を強くお勧めします。鉄骨造やRC造の住宅は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 横手市（秋田県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'yokote-childcare-subsidy',
    title: '横手市 保育料軽減補助金',
    organization: '横手市',
    type: 'local',
    maxAmount: '第2子以降保育料無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['横手市', '保育料', '補助金'],
    eligibility: '横手市に住所を有し、保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '横手市が実施する保育料軽減補助金です。第2子以降の保育料を無償化し、多子世帯の子育てを支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 保育料軽減補助金は、<span class="marker">認可保育所・認定こども園等を利用する第2子以降の児童の保育料</span>を無料とする制度です。</p><p>秋田県南東部に位置する横手市は、かまくら祭りや横手やきそばで全国的に知られる街です。少子化対策の一環として保育料の軽減に積極的に取り組んでおり、子育て世帯の経済的負担を大幅に軽減しています。</p><p><span class="marker-green">第1子の年齢を問わず、第2子以降の保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横手市に住民登録があり、認可保育所・認定こども園・小規模保育事業所等を利用する第2子以降の児童の保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>家庭的保育事業所</p></div><p>入所手続き時に自動的に適用されるため、<strong>別途の申請は原則不要</strong>です。世帯構成の変更があった場合は横手市役所子育て支援課へ届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。3〜5歳児はすでに国の無償化制度の対象です。</p><p><span class="marker">0〜2歳児クラスの第1子の保育料は所得に応じて決まり、月額0円〜約3万円程度</span>です。</p><div class="note-box">認可外保育施設は本制度の対象外となる場合があります。延長保育料・副食費は別途負担です。横手市では冬期の送迎が困難な世帯への支援も行っていますので、子育て支援課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-birth-bonus',
    title: '横手市 出産祝い金',
    organization: '横手市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['横手市', '出産祝い金', '給付金'],
    eligibility: '横手市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '横手市が実施する出産祝い金です。出産を祝い、第1子に5万円、第2子に10万円、第3子以降に20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 出産祝い金は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に支給される給付金制度です。</p><p>横手市は秋田県内でも人口減少が顕著な地域であり、出生数の増加に向けた支援を強化しています。特に第3子以降の手厚い支給額は、多子世帯への強いメッセージとなっています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出生時に横手市に住民登録があること</p><p>出生届を横手市に提出していること</p><p>出生後も引き続き横手市に居住する意思があること</p></div><p>出生届の提出後、横手市役所子育て支援課または各地域局市民サービス課で申請します。<strong>生後6か月以内</strong>に申請が必要です。</p><p><span class="marker">保護者の本人確認書類と振込先口座情報を持参してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。多胎児の場合はそれぞれの子について支給されます。</p><p><span class="marker">申請から約1か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">横手市では出産祝い金のほか、子育て応援アプリの提供や子育て支援センターの運営など、包括的な子育て支援を行っています。冬期の豪雪時には子育て世帯向けの除雪支援もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-newlywed-rent',
    title: '横手市 新婚世帯家賃補助金',
    organization: '横手市',
    type: 'local',
    maxAmount: '月額最大2万円（最長3年間）',
    maxAmountNum: 24,
    category: 'housing',
    prefecture: '秋田県',
    tags: ['横手市', '新婚', '家賃補助'],
    eligibility: '横手市内の賃貸住宅に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '横手市が実施する新婚世帯家賃補助金です。新婚世帯の家賃を月額最大2万円、最長3年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 新婚世帯家賃補助金は、<span class="marker">市内の民間賃貸住宅に居住する新婚世帯</span>に対して家賃の一部を補助する制度です。</p><p>横手市は若者の流出と人口減少に歯止めをかけるため、結婚を機とした定住促進に力を入れています。かまくらの温かさで知られる横手で新生活をスタートする若い世帯を、家賃面から支援します。</p><p>補助額は<strong>月額最大2万円で、最長3年間</strong>受給できます。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届の提出日から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>横手市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が一定額以下であること</p><p>市税を滞納していないこと</p></div><p>横手市役所まちづくり推進課に申請書と必要書類（婚姻届受理証明書、賃貸契約書の写し等）を提出します。</p><p><span class="marker">年度ごとに申請が必要</span>です。毎年度の更新手続きを忘れないようにしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>家賃（共益費を除く）から2万円を差し引いた額と2万円のいずれか低い額</strong>です。家賃が4万円以上の場合、月額2万円が上限となります。</p><p><span class="marker">公営住宅や社宅に入居している場合は対象外</span>です。親族が所有する物件も対象外となります。</p><div class="note-box">横手市では新婚世帯向けの住宅取得補助金も別途用意されています。賃貸から持ち家への移行を検討する際には、まちづくり推進課にご相談ください。最長3年間で最大72万円の支援を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-disability-medical',
    title: '横手市 障がい者医療費助成制度',
    organization: '横手市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '秋田県',
    tags: ['横手市', '障がい者医療', '助成金'],
    eligibility: '横手市に住所を有する重度障がい者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '横手市が実施する障がい者医療費助成制度です。重度の障がいがある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 障がい者医療費助成制度は、<span class="marker">重度の障がいがある方の保険診療における自己負担分</span>を助成する制度です。</p><p>横手市は、障がいのある方が安心して医療を受けられるよう、通院・入院・調剤にかかる費用の自己負担分を助成しています。秋田県の福祉医療制度と連携し、手厚い医療費支援を実現しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横手市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級または2級の方</p><p>療育手帳Aの方</p><p>精神障害者保健福祉手帳1級の方</p><p>特別児童扶養手当1級の対象児童</p></div><p>横手市役所福祉課の窓口で申請します。障害者手帳と健康保険証をお持ちください。申請後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。秋田県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦自己負担分を支払い、後日償還払いの手続き</span>が必要です。</p><div class="note-box">一定以上の所得がある場合は対象外となることがあります。保険適用外の費用（差額ベッド代、文書料等）は助成の対象外です。手帳の等級変更があった場合は速やかに届け出てください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-school-lunch',
    title: '横手市 学校給食費補助制度',
    organization: '横手市',
    type: 'local',
    maxAmount: '第3子以降給食費無料',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '秋田県',
    tags: ['横手市', '給食費', '教育支援'],
    eligibility: '横手市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '横手市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 学校給食費補助制度は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額補助する制度です。</p><p>横手市は秋田県有数の農業地帯で、地元産の米や野菜を活かした学校給食に力を入れています。多子世帯の教育費負担を軽減するため、第3子以降の給食費を無料化し、安心して子どもを育てられる環境を整備しています。</p><p><span class="marker-green">所得制限なしで、第3子以降の給食費が全額補助</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>横手市立小中学校に在籍する児童生徒であること</p><p>同一世帯で養育する子のうち第3子以降であること</p><p>上の子の年齢制限は原則なし</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に記入のうえ、学校または横手市教育委員会学校教育課へ提出してください。</p><p><span class="marker">年度途中の転入や出生による第3子該当の場合も随時受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額補助</strong>されます。給食費は小学校で月額約4,500円、中学校で月額約5,000円程度です。</p><p><span class="marker">年間で約5万〜6万円の負担軽減</span>となります。</p><div class="highlight-box">横手市の学校給食は地産地消を推進しており、横手やきそばや増田の内蔵にちなんだ特別メニューも登場します。第1子・第2子の給食費についても、就学援助制度による補助が受けられる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-telework-bonus',
    title: '横手市 テレワーク推進補助金',
    organization: '横手市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '秋田県',
    tags: ['横手市', 'テレワーク', '補助金'],
    eligibility: '横手市内でテレワーク環境を整備する事業者または個人事業主',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '横手市が実施するテレワーク推進補助金です。テレワーク環境の整備に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 テレワーク推進補助金は、<span class="marker">市内でテレワーク環境を新たに整備する事業者・個人事業主</span>に対して費用の一部を補助する制度です。</p><p>豪雪地帯の横手市では、冬期の通勤困難がテレワーク推進の大きな動機となっています。また、首都圏からの移住者がテレワークで働き続けられる環境を整えることで、関係人口の増加と地域経済の活性化を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信環境の整備からサテライトオフィスの設置まで幅広く対応</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>通信回線の導入・増強費用</p><p>テレワーク用機器（PC、モニター等）の購入費</p><p>Web会議システムの導入費用</p><p>サテライトオフィスの設置・改修費用</p></div><p>横手市役所商工観光課に申請書と事業計画書を提出します。</p><p><span class="marker">必ず設備導入前に申請してください</span>。交付決定前に購入・契約した経費は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者につき1回の申請が可能です。</p><p><span class="marker">個人で使用するスマートフォンや家庭用家具は対象外</span>です。業務利用が明確なものに限られます。</p><div class="note-box">横手市ではコワーキングスペースの運営支援も行っています。横手駅前のシェアオフィスなど、手軽にテレワークを始められる施設もありますので、まずはお試し利用から始めてみてはいかがでしょうか。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-nursing-home-reform',
    title: '横手市 介護リフォーム補助金',
    organization: '横手市',
    type: 'local',
    maxAmount: '最大20万円（介護保険と併用可）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '秋田県',
    tags: ['横手市', '介護リフォーム', '補助金'],
    eligibility: '横手市に住所を有し、要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年',
    description: '横手市が実施する介護リフォーム補助金です。高齢者の在宅生活を支えるバリアフリー改修に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 介護リフォーム補助金は、<span class="marker">要介護・要支援認定を受けた方の自宅をバリアフリー化する改修工事</span>に対して費用の一部を補助する制度です。</p><p>横手市は秋田県内でも高齢化率が高く、在宅での介護を支える環境整備が急務です。特に豪雪地帯であるため、冬期の室内での転倒リスク軽減や、玄関まわりの安全対策が重要となっています。</p><p>補助額は対象工事費の一部で、<strong>上限は20万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消・スロープ設置</p><p>滑り防止のための床材変更</p><p>引き戸への変更・トイレの洋式化</p><p>浴室の改修（暖房設備含む）</p></div><p>横手市役所介護保険課に申請書と工事見積書を提出します。担当ケアマネジャーを通じての申請が一般的です。</p><p><span class="marker">工事着手前の申請が必須</span>です。事前にケアマネジャーと改修内容を相談してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の一部で、<strong>上限20万円</strong>です。介護保険の住宅改修費と合わせて最大40万円の支援を受けられます。</p><p><span class="marker">新築や増築は対象外です。既存住宅のバリアフリー改修に限られます</span>。</p><div class="highlight-box">横手市は冬期の室内温度差によるヒートショックのリスクが高い地域です。浴室やトイレへの暖房設備の設置も補助対象となる場合がありますので、介護保険課にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-energy-support',
    title: '横手市 省エネ設備導入補助金',
    organization: '横手市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '秋田県',
    tags: ['横手市', '省エネ', '補助金'],
    eligibility: '横手市内の住宅に省エネ設備を導入する市民',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '横手市が実施する省エネ設備導入補助金です。住宅用太陽光発電やペレットストーブ等の導入に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 省エネ設備導入補助金は、<span class="marker">住宅用太陽光発電システムや木質バイオマスストーブ等</span>の省エネルギー設備を導入する市民に対して費用の一部を補助する制度です。</p><p>横手市は豪雪地帯であり、冬期の暖房費が家計の大きな負担となっています。再生可能エネルギーの活用を促進し、光熱費の削減と環境負荷の低減を同時に目指しています。特にペレットストーブは地元の木質資源を活用できる点で注目されています。</p><p><span class="marker-green">太陽光発電・蓄電池・ペレットストーブ・高効率給湯器など幅広い設備が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：最大10万円</p><p>家庭用蓄電池：最大10万円</p><p>ペレットストーブ・薪ストーブ：最大10万円</p><p>高効率給湯器（エコキュート等）：最大5万円</p></div><p>横手市役所市民生活課に申請書と見積書を提出します。設備ごとに補助額の上限が異なり、<strong>合計で最大15万円</strong>です。</p><p><span class="marker">設備の設置・購入前に申請してください</span>。交付決定前に設置した場合は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設備の種類に応じて異なり、<strong>合計で最大15万円</strong>です。複数の設備を同時に導入する場合も1回の申請で手続きできます。</p><p><span class="marker">先着順で予算に達し次第終了</span>となりますので、早めの申請をおすすめします。</p><div class="note-box">中古設備やリース契約の設備は原則として対象外です。太陽光発電の余剰電力売電と組み合わせることで、実質的な投資回収を早めることができます。設置業者は市内・市外を問いませんが、見積書の提出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokote-bousai-equipment',
    title: '横手市 防災設備整備補助金',
    organization: '横手市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '秋田県',
    tags: ['横手市', '防災設備', '補助金'],
    eligibility: '横手市内の自主防災組織または町内会',
    applicationPeriod: '毎年4月〜11月',
    description: '横手市が実施する防災設備整備補助金です。自主防災組織の防災資機材購入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横手市 防災設備整備補助金は、<span class="marker">市内の自主防災組織や町内会が防災資機材を整備する際</span>に費用の一部を補助する制度です。</p><p>横手市は豪雪に加え、横手川の水害リスクや地震への備えが求められる地域です。地域の防災力を高めるため、自主防災組織による防災資機材の整備を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は10万円</strong>です。<span class="marker-green">発電機、投光器、救助工具セット、防災備蓄品など幅広い品目が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる資機材"><p>発電機・投光器</p><p>救助工具セット（バール・ジャッキ等）</p><p>担架・救急セット</p><p>防災備蓄品（食料・飲料水・毛布等）</p><p>防災倉庫</p></div><p>横手市役所総務課防災危機管理室に申請書と見積書を提出します。自主防災組織の代表者が申請者となります。</p><p><span class="marker">購入前に申請し、交付決定を受けてから購入してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。1団体につき年度内1回の申請が可能です。</p><p><span class="marker">個人での申請は対象外</span>です。必ず自主防災組織または町内会として申請してください。</p><div class="note-box">横手市では防災資機材の整備補助のほか、自主防災組織の結成支援や防災訓練の実施支援も行っています。冬期の大雪時には除雪ボランティアとの連携も重要ですので、普段からの地域のつながりづくりを大切にしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 鶴岡市（山形県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tsuruoka-childcare-subsidy',
    title: '鶴岡市 保育料軽減補助金',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '山形県',
    tags: ['鶴岡市', '保育料', '補助金'],
    eligibility: '鶴岡市に住所を有し、保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '鶴岡市が実施する保育料軽減補助金です。第2子の保育料を半額、第3子以降を無料とし子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 保育料軽減補助金は、<span class="marker">認可保育所・認定こども園等を利用する多子世帯の保育料</span>を軽減する制度です。</p><p>山形県の庄内平野南部に位置する鶴岡市は、ユネスコ食文化創造都市に認定された食の都です。出羽三山や加茂水族館など豊かな文化・自然資源を誇りながら、子育て世帯の定住促進にも力を入れています。</p><p><span class="marker-green">第2子の保育料が半額、第3子以降は無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鶴岡市に住民登録があり、認可保育所等を利用する児童の保護者が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：通常の保育料（所得に応じた額）</p><p>第2子：保育料半額</p><p>第3子以降：保育料無料</p></div><p>保育施設の入所手続き時に自動適用されるため、<strong>別途の申請は原則不要</strong>です。世帯の子どもの数に変更があった場合は鶴岡市役所子育て推進課へ届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は保育料が半額、第3子以降は全額免除</strong>です。3〜5歳児は国の無償化制度により全員無料です。</p><p><span class="marker">0〜2歳児クラスの第1子の保育料は所得に応じて月額0円〜約3万円程度</span>です。</p><div class="note-box">認可外保育施設を利用している場合は本制度の対象外となることがあります。副食費は別途負担ですが、鶴岡市では地元産のだだちゃ豆や庄内米を活かした給食を提供しており、食育にも力を入れています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-birth-bonus',
    title: '鶴岡市 出産祝い金',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降15万円',
    maxAmountNum: 15,
    category: 'childcare',
    prefecture: '山形県',
    tags: ['鶴岡市', '出産祝い金', '給付金'],
    eligibility: '鶴岡市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '鶴岡市が実施する出産祝い金です。第1子に5万円、第2子に10万円、第3子以降に15万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 出産祝い金は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に支給される給付金制度です。</p><p>鶴岡市は広大な面積を持つ山形県随一の都市で、農業・水産業・観光業が基幹産業です。慶應義塾大学先端生命科学研究所の立地によりバイオ産業の集積も進んでおり、次世代を育む環境づくりに力を入れています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降15万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出生時に鶴岡市に住民登録があること</p><p>出生届を鶴岡市に提出していること</p><p>出生後も引き続き鶴岡市に居住する意思があること</p></div><p>出生届提出後に鶴岡市役所子育て推進課または各地域庁舎市民福祉課で申請します。<strong>生後6か月以内</strong>に申請が必要です。</p><p><span class="marker">保護者の本人確認書類と振込先口座情報をお持ちください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降15万円</strong>です。多胎児の場合はそれぞれ支給されます。</p><p><span class="marker">申請から約1か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">鶴岡市では出産祝い金のほか、出産準備金の支給（妊娠届出時5万円相当）や産後ケア事業も実施しています。庄内地域の産科医療体制の維持にも取り組んでおり、安心して出産できる環境を整えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-housing-purchase',
    title: '鶴岡市 住宅取得支援補助金',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '山形県',
    tags: ['鶴岡市', '住宅取得', '補助金'],
    eligibility: '鶴岡市内に新たに住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '鶴岡市が実施する住宅取得支援補助金です。市内での住宅新築・購入に最大60万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または購入する方</span>に対して費用の一部を補助する制度です。</p><p>鶴岡市は山形県最大の面積を持ち、庄内平野の豊かな農地と出羽三山に囲まれた自然環境が魅力です。定住促進と人口減少対策の一環として、住宅取得への手厚い補助制度を設けています。</p><p>基本補助額は<strong>30万円</strong>で、子育て世帯加算や転入者加算により<span class="marker-green">最大60万円</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>鶴岡市内に住宅を新築または購入すること</p><p>取得後に鶴岡市に住民登録をすること</p><p>市税を滞納していないこと</p><p>5年以上継続して居住する意思があること</p></div><p>鶴岡市役所建築課に申請書と必要書類を提出します。売買契約書または建築確認済証の写し、住民票等が必要です。</p><p><span class="marker">住宅の引き渡し後6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。子育て世帯加算（18歳未満の子がいる世帯）15万円、転入者加算15万円があり、合計で最大60万円となります。</p><p><span class="marker">中古住宅の購入も対象ですが、親族間の売買は対象外</span>です。</p><div class="note-box">5年以内に転出した場合は補助金の返還が求められます。鶴岡市では住宅取得補助のほか、空き家バンク登録物件の購入・改修費用の補助制度もあります。移住を検討する方はあわせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-disability-medical',
    title: '鶴岡市 障がい者医療費助成制度',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '山形県',
    tags: ['鶴岡市', '障がい者医療', '助成金'],
    eligibility: '鶴岡市に住所を有する重度障がい者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '鶴岡市が実施する障がい者医療費助成制度です。重度の障がいがある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 障がい者医療費助成制度は、<span class="marker">重度の障がいがある方の保険診療における自己負担分</span>を助成する制度です。</p><p>鶴岡市は「いのち輝くまちづくり」を理念に掲げ、障がいの有無にかかわらず誰もが安心して暮らせる社会の実現を目指しています。山形県の福祉医療制度と連携し、通院・入院・調剤にかかる自己負担分を助成しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鶴岡市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級または2級の方</p><p>療育手帳Aの方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>鶴岡市役所福祉課の窓口で申請します。障害者手帳と健康保険証をお持ちください。申請後、<strong>「重度心身障がい（児）者医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。山形県内の医療機関では医療証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">一定以上の所得がある場合は対象外となることがあります。保険適用外の費用は助成対象外です。手帳の等級変更や転出の際は速やかに届け出てください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-scholarship',
    title: '鶴岡市 奨学金制度',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '月額4万円（大学生）',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '山形県',
    tags: ['鶴岡市', '奨学金', '教育支援'],
    eligibility: '鶴岡市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年2月〜3月',
    description: '鶴岡市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大4万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、奨学金を貸与する制度です。</p><p>鶴岡市は教育を重視する伝統があり、藩校致道館の精神を受け継いでいます。慶應義塾大学先端生命科学研究所など高等教育・研究機関も立地しており、若者の学びを積極的に支援しています。</p><p>貸与月額は<strong>高校生2万円、大学生等4万円</strong>です。<span class="marker-green">無利子での貸与</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>鶴岡市に住民登録がある世帯の子であること</p><p>高等学校、大学、短大、専門学校等に在学中または入学予定であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が良好であること</p></div><p>毎年2月〜3月に鶴岡市教育委員会学校教育課へ申請書を提出します。</p><p><span class="marker">選考は学業成績と家計状況を総合的に審査</span>して行われます。定員に限りがあるため早めの申請を心がけてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生2万円、大学生等4万円</strong>です。返還は卒業後1年を経過した後、貸与期間の3倍以内の期間で行います。</p><p><span class="marker">鶴岡市にUターン就職した場合は返還免除の特例</span>がある場合があります。詳しくは教育委員会にお問い合わせください。</p><div class="highlight-box">鶴岡市では奨学金のほか、高校生の通学費補助や、鶴岡工業高等専門学校との連携による教育支援も行っています。庄内地域全体で若者の学びと定着を応援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-sme-support',
    title: '鶴岡市 中小企業振興補助金',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'employment',
    prefecture: '山形県',
    tags: ['鶴岡市', '中小企業', '補助金'],
    eligibility: '鶴岡市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '鶴岡市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路開拓に最大80万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業の設備投資・販路開拓・新商品開発</span>に対して費用の一部を補助する制度です。</p><p>鶴岡市はユネスコ食文化創造都市として、だだちゃ豆・庄内柿・岩がき等の特産品を活かした食品加工業が盛んです。また、バイオベンチャーの集積地としても注目されており、伝統産業と先端技術の両面で中小企業の競争力強化を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は80万円</strong>です。<span class="marker-green">食品加工業の高度化からIT活用まで幅広い取り組みが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>鶴岡市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>対象経費が30万円以上であること</p></div><p>鶴岡市役所商工課に事業計画書と申請書を提出します。</p><p><span class="marker">必ず事業着手前に申請してください</span>。交付決定前に発注した経費は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限80万円</strong>です。設備購入費、広告宣伝費、展示会出展費、商品開発費などが対象です。</p><p><span class="marker">年度内に事業を完了し、実績報告書を提出する必要があります</span>。</p><div class="note-box">鶴岡市では中小企業振興補助金のほか、鶴岡商工会議所による経営相談や専門家派遣も無料で利用できます。食文化関連の新商品開発や海外販路開拓には特に積極的な支援があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-nursing-equipment',
    title: '鶴岡市 介護用品支給事業',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '山形県',
    tags: ['鶴岡市', '介護用品', '支給'],
    eligibility: '鶴岡市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '鶴岡市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>鶴岡市は広大な市域に高齢者が分散して暮らしており、在宅介護の負担は都市部以上に大きくなりがちです。特に冬期は外出が困難になるため、介護用品の配送サービスは介護者にとって大きな助けとなっています。</p><p><span class="marker-green">市民税非課税世帯を主な対象として、年間最大10万円相当の介護用品を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鶴岡市に住民登録があり、在宅で要介護4・5の認定を受けた高齢者を介護している家族が対象です。</p><div class="summary-box" data-title="対象となる介護用品"><p>紙おむつ（テープ型・パンツ型）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤・消臭剤</p></div><p>鶴岡市役所長寿介護課または各地域庁舎市民福祉課で申請します。<strong>介護保険被保険者証と要介護認定結果</strong>をお持ちください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間最大10万円相当</strong>の介護用品です。カタログから選んだ用品が定期的に自宅へ配送されます。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>です。在宅介護期間のみ支給を受けられます。</p><div class="highlight-box">鶴岡市では介護用品支給のほか、家族介護者向けのリフレッシュ事業（介護者交流会・リラクゼーション等）も実施しています。介護の悩みを一人で抱え込まず、地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-energy-support',
    title: '鶴岡市 省エネ設備導入補助金',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '山形県',
    tags: ['鶴岡市', '省エネ', '補助金'],
    eligibility: '鶴岡市内の住宅に省エネ設備を導入する市民',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '鶴岡市が実施する省エネ設備導入補助金です。住宅用太陽光発電や蓄電池等の導入に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 省エネ設備導入補助金は、<span class="marker">住宅用太陽光発電システム・蓄電池・高効率給湯器等</span>を導入する市民に対して費用の一部を補助する制度です。</p><p>鶴岡市は日本海側気候で冬期の暖房需要が高く、エネルギーコストの削減が家計に直結する課題です。庄内平野の豊かな風力資源や太陽光資源を活かした再生可能エネルギーの普及を推進しています。</p><p><span class="marker-green">太陽光発電・蓄電池・高効率給湯器など複数の設備を組み合わせて最大20万円</span>の補助が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：最大12万円</p><p>家庭用蓄電池：最大10万円</p><p>高効率給湯器（エコキュート等）：最大5万円</p><p>HEMS（家庭用エネルギー管理システム）：最大3万円</p></div><p>鶴岡市役所環境課に申請書と見積書を提出します。<strong>合計で最大20万円</strong>まで補助されます。</p><p><span class="marker">設備の設置前に申請してください</span>。交付決定後に工事を開始する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設備の種類に応じて異なり、<strong>合計で最大20万円</strong>です。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となります。年度初めの申請がおすすめです。</p><div class="note-box">リース契約や中古設備は対象外です。鶴岡市では再生可能エネルギーの導入に加え、住宅の断熱改修にも別途補助制度があります。冬期の光熱費削減には断熱改修との組み合わせが効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuruoka-seismic-diagnosis',
    title: '鶴岡市 耐震診断補助制度',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '診断費用の自己負担ほぼ無料',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '山形県',
    tags: ['鶴岡市', '耐震診断', '防災'],
    eligibility: '鶴岡市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃',
    description: '鶴岡市が実施する耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断を自己負担ほぼ無料で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鶴岡市 耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、耐震診断の費用を補助する制度です。</p><p>鶴岡市は2019年の山形県沖地震でも被害を受けており、建物の耐震化は重要な防災課題です。庄内平野の軟弱地盤による揺れの増幅リスクもあり、旧耐震基準の住宅の安全確認が急がれています。</p><p><span class="marker-green">市が費用の大部分を負担し、自己負担はほぼ無料</span>で耐震診断を受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>鶴岡市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたものであること</p><p>2階建て以下であること</p><p>在来軸組工法または伝統的工法であること</p></div><p>鶴岡市役所建築課に申請書を提出します。市が派遣する耐震診断士が自宅を訪問し診断を行います。</p><p><span class="marker">診断は1〜2時間程度で完了</span>します。建物の図面があればご準備ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>市がほぼ全額を負担</strong>し、自己負担は数千円程度です。</p><p><span class="marker">診断結果に基づく耐震改修工事には別途補助制度（最大100万円程度）が利用可能</span>です。</p><div class="note-box">鶴岡市は日本海側の地震リスクに加え、豪雪による屋根荷重の影響も建物に蓄積されるため、耐震診断を受ける意義は特に大きい地域です。鉄骨造やRC造は対象外です。まずはお気軽に建築課へご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 日立市（茨城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hitachi-childcare-subsidy',
    title: '日立市 保育料軽減補助金',
    organization: '日立市',
    type: 'local',
    maxAmount: '第2子以降保育料無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['日立市', '保育料', '補助金'],
    eligibility: '日立市に住所を有し、保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '日立市が実施する保育料軽減補助金です。第2子以降の保育料を無償化し、子育て世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 保育料軽減補助金は、<span class="marker">認可保育所・認定こども園等を利用する第2子以降の保育料</span>を無料とする制度です。</p><p>茨城県北部に位置する日立市は、日立製作所発祥の地として知られる工業都市です。太平洋に面した温暖な気候と、ものづくりの精神が息づく街で、子育て世帯の定住促進のため保育料の軽減に取り組んでいます。</p><p><span class="marker-green">第1子の年齢を問わず、第2子以降の保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>日立市に住民登録があり、認可保育所等を利用する第2子以降の児童の保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>家庭的保育事業所</p></div><p>入所手続き時に自動的に適用されます。<strong>別途の申請は原則不要</strong>です。世帯状況の変更があった場合は日立市役所子ども施設課へ届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。3〜5歳児は国の無償化制度により全員無料です。</p><p><span class="marker">0〜2歳児クラスの第1子の保育料は世帯所得に応じて月額0円〜約3万円程度</span>です。</p><div class="note-box">認可外保育施設は本制度の対象外となる場合があります。延長保育料・副食費は別途負担が必要です。日立市では駅前保育施設の整備など、通勤利便性の高い保育環境の充実にも取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-birth-bonus',
    title: '日立市 出産祝い金',
    organization: '日立市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['日立市', '出産祝い金', '給付金'],
    eligibility: '日立市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '日立市が実施する出産祝い金です。新生児の誕生を祝い、第1子に5万円、第2子以降に10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 出産祝い金は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に支給される給付金制度です。</p><p>日立市はかつて「企業城下町」として栄え、現在もハイテク製造業の拠点として多くの技術者が暮らしています。少子化に伴う人口減少への対策として、出産を祝い子育て世帯を経済的に支援しています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出生時に日立市に住民登録があること</p><p>出生届を日立市に提出していること</p><p>出生後も引き続き日立市に居住する意思があること</p></div><p>出生届提出後に日立市役所子育て支援課の窓口で申請します。<strong>生後6か月以内</strong>の申請が必要です。</p><p><span class="marker">保護者の本人確認書類と振込先口座情報をご持参ください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。多胎児の場合はそれぞれの子について支給されます。</p><p><span class="marker">申請から約1か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">日立市では出産祝い金のほか、妊婦健診助成や産後ケア事業、子育て支援センターの運営など、切れ目のない子育て支援を行っています。かみね動物園の年間パスポート無料配布など、親子で楽しめる支援もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-newlywed-rent',
    title: '日立市 新婚世帯家賃補助金',
    organization: '日立市',
    type: 'local',
    maxAmount: '月額最大2万円（最長3年間）',
    maxAmountNum: 24,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['日立市', '新婚', '家賃補助'],
    eligibility: '日立市内の賃貸住宅に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '日立市が実施する新婚世帯家賃補助金です。新婚世帯の家賃を月額最大2万円、最長3年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 新婚世帯家賃補助金は、<span class="marker">市内の民間賃貸住宅に居住する新婚世帯</span>に対して家賃の一部を補助する制度です。</p><p>日立市は太平洋に面した風光明媚な街で、日立駅の「シーバーズカフェ」に象徴される海の景観が魅力です。若い世代の定住を促進するため、結婚を機に日立市で新生活を始める世帯を家賃面で支援しています。</p><p>補助額は<strong>月額最大2万円で、最長3年間</strong>受給可能です。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届の提出日から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>日立市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が一定額以下であること</p><p>市税を滞納していないこと</p></div><p>日立市役所都市政策課に申請書と必要書類（婚姻届受理証明書、賃貸契約書の写し等）を提出します。</p><p><span class="marker">年度ごとに更新申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>家賃の一部で月額最大2万円</strong>です。家賃が4万円以上の場合に上限2万円が補助されます。</p><p><span class="marker">公営住宅・社宅・親族所有の物件は対象外</span>です。</p><div class="note-box">日立市では新婚世帯向けの住宅取得補助も別途あります。賃貸から持ち家への移行を検討する際は都市政策課にご相談ください。最長3年間で最大72万円の支援を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-infertility',
    title: '日立市 不妊治療費助成制度',
    organization: '日立市',
    type: 'local',
    maxAmount: '最大10万円（1回あたり）',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['日立市', '不妊治療', '助成金'],
    eligibility: '日立市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後〜年度末まで',
    description: '日立市が実施する不妊治療費助成制度です。特定不妊治療の自己負担分を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 不妊治療費助成制度は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対して治療費の一部を助成する制度です。</p><p>日立市では、子どもを望む夫婦を応援するため、保険適用後の自己負担分に対して独自の上乗せ助成を行っています。茨城県北部は産婦人科の数が限られるため、市外の医療機関での治療費も助成対象としています。</p><p><span class="marker-green">保険適用後の自己負担分と先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>日立市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚関係にある夫婦が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>医療費の領収書の写し</p><p>夫婦の住民票</p></div><p>治療終了日の属する年度末までに、日立市役所健康づくり推進課へ申請します。<strong>年度内2回まで</strong>申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大10万円</strong>です。保険適用後の自己負担分と先進医療費の合計額が対象です。</p><p><span class="marker">茨城県の助成制度と併用できる場合があります</span>。県の助成を先に申請し、残額について市の助成を受ける形となります。</p><div class="note-box">男性不妊治療も助成の対象となります。通院のための交通費は対象外です。治療に関する相談は日立市の保健センターで受け付けていますので、お気軽にご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-school-lunch',
    title: '日立市 学校給食費補助制度',
    organization: '日立市',
    type: 'local',
    maxAmount: '第3子以降給食費無料',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '茨城県',
    tags: ['日立市', '給食費', '教育支援'],
    eligibility: '日立市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '日立市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 学校給食費補助制度は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額補助する制度です。</p><p>日立市は「教育のまち」を掲げ、ICT教育の先進的な取り組みや理科教育の充実で知られています。多子世帯の教育費負担を軽減し、すべての子どもが等しく豊かな学校生活を送れるよう、第3子以降の給食費を無料化しています。</p><p><span class="marker-green">所得制限なしで、第3子以降の給食費が全額補助</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>日立市立小中学校に在籍する児童生徒であること</p><p>同一世帯で養育する子のうち第3子以降であること</p><p>上の子の年齢制限は原則なし</p></div><p>毎年4月に学校を通じて案内されます。申請書に記入のうえ学校または日立市教育委員会学務課へ提出します。</p><p><span class="marker">年度途中の転入や第3子該当の場合も随時受け付け</span>ています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額補助</strong>されます。給食費は小学校で月額約4,500円、中学校で月額約5,200円程度です。</p><p><span class="marker">年間で約5万〜6万円の負担軽減</span>となります。</p><div class="highlight-box">日立市の学校給食は地産地消を推進しており、茨城県産の食材をふんだんに使っています。第1子・第2子の給食費についても就学援助制度による補助があります。食物アレルギー対応も行っていますので、学校にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-telework-bonus',
    title: '日立市 テレワーク推進補助金',
    organization: '日立市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '茨城県',
    tags: ['日立市', 'テレワーク', '補助金'],
    eligibility: '日立市内でテレワーク環境を整備する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '日立市が実施するテレワーク推進補助金です。テレワーク環境整備に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 テレワーク推進補助金は、<span class="marker">市内でテレワーク環境を新たに整備する事業者</span>に対して費用の一部を補助する制度です。</p><p>日立市は日立製作所をはじめとする製造業のまちですが、近年はソフトウェア開発やデジタルサービスの拠点としても発展しています。テレワーク環境の整備により、都心へ通勤せずに働ける選択肢を増やし、UIJターン人材の呼び込みにつなげています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信環境の整備からサテライトオフィスの設置まで対応</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>通信回線の導入・増強費用</p><p>テレワーク用端末（PC・モニター等）の購入費</p><p>Web会議システムの導入費用</p><p>サテライトオフィスの改修費用</p></div><p>日立市役所産業経済部商工振興課に申請書と事業計画書を提出します。</p><p><span class="marker">設備導入前の申請が必須</span>です。交付決定前に購入・契約した経費は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者1回限りの申請です。</p><p><span class="marker">家庭用のPC・スマートフォンなど業務専用でない機器は対象外</span>です。</p><div class="note-box">日立市ではJR常磐線の特急ひたちで東京駅まで約90分のアクセスがあり、週に数日の出社と組み合わせたハイブリッドワークの拠点としても注目されています。市内のコワーキングスペースの情報も商工振興課で案内しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-nursing-home-reform',
    title: '日立市 介護リフォーム補助金',
    organization: '日立市',
    type: 'local',
    maxAmount: '最大20万円（介護保険と併用可）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['日立市', '介護リフォーム', '補助金'],
    eligibility: '日立市に住所を有し、要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年',
    description: '日立市が実施する介護リフォーム補助金です。高齢者の在宅生活を支えるバリアフリー改修に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 介護リフォーム補助金は、<span class="marker">要介護・要支援認定を受けた方の自宅のバリアフリー改修工事</span>に対して費用の一部を補助する制度です。</p><p>日立市は丘陵地に住宅が広がる地形で、坂道や段差が多いのが特徴です。高齢者の在宅生活を安全に送れるよう、住宅内のバリアフリー化を促進しています。</p><p>補助額は<strong>上限20万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）と併用可能で、最大40万円の支援</span>を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消・スロープ設置</p><p>床材の変更（滑り防止）</p><p>引き戸への変更</p><p>トイレの洋式化・浴室改修</p></div><p>日立市役所介護保険課に申請書と工事見積書を提出します。ケアマネジャーを通じての申請が一般的です。</p><p><span class="marker">工事着手前の申請が必須</span>です。事前にケアマネジャーと改修内容をご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の一部で、<strong>上限20万円</strong>です。介護保険の住宅改修費と合わせて最大40万円の支援が受けられます。</p><p><span class="marker">新築・増築は対象外です。既存住宅のバリアフリー改修に限られます</span>。</p><div class="highlight-box">日立市は坂道の多い地形のため、玄関アプローチのスロープ設置や階段への手すり取り付けが特に重要です。茨城県の住宅バリアフリー改修補助と併用できる場合もありますので、介護保険課にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-elderly-support',
    title: '日立市 高齢者生活支援事業',
    organization: '日立市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '茨城県',
    tags: ['日立市', '高齢者支援', '生活支援'],
    eligibility: '日立市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '日立市が実施する高齢者生活支援事業です。ひとり暮らし高齢者等に配食サービスや緊急通報システムを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>の日常生活を支援するサービスを提供する制度です。</p><p>日立市は丘陵地に住宅が点在する地形上、買い物や通院に不便を感じる高齢者が多い地域です。配食サービスによる栄養確保と見守り、緊急通報システムの設置などにより、在宅生活の安心を支えています。</p><p><span class="marker-green">配食サービス・緊急通報システム・ごみ出し支援など複数のメニューを利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス（昼食・夕食の宅配と安否確認）</p><p>緊急通報システムの設置</p><p>ごみ出し支援</p><p>軽度生活援助（掃除・洗濯等）</p></div><p>日立市役所高齢福祉課または地域包括支援センターで申請します。</p><p><span class="marker">サービスの種類ごとに利用要件が異なります</span>ので、まずは地域包括支援センターにご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>配食サービス</strong>は1食あたり約400円の市補助があり、自己負担は300〜400円程度です。週5回まで利用可能です。</p><p><span class="marker">緊急通報システムは月額数百円程度の自己負担で利用でき、24時間対応</span>のコールセンターにつながります。</p><div class="note-box">日立市は海に面した都市のため、津波等の災害時に備えた高齢者の避難支援体制も整備されています。緊急通報システムは災害時にも活用できますので、ぜひご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hitachi-bousai-equipment',
    title: '日立市 防災設備整備補助金',
    organization: '日立市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '茨城県',
    tags: ['日立市', '防災設備', '補助金'],
    eligibility: '日立市内の自主防災組織または町内会',
    applicationPeriod: '毎年4月〜11月',
    description: '日立市が実施する防災設備整備補助金です。自主防災組織の防災資機材購入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>日立市 防災設備整備補助金は、<span class="marker">市内の自主防災組織や町内会が防災資機材を購入する際</span>に費用の一部を補助する制度です。</p><p>日立市は東日本大震災で津波被害を受けた経験があり、地域の防災力強化が最重要課題の一つです。太平洋沿岸部の津波対策に加え、丘陵地の土砂災害リスクにも備える必要があり、地域ごとの防災体制の充実を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は10万円</strong>です。<span class="marker-green">発電機・投光器・救助工具など幅広い品目が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる資機材"><p>発電機・投光器</p><p>救助工具（バール・ジャッキ等）</p><p>担架・応急処置セット</p><p>防災備蓄品（食料・飲料水・毛布等）</p><p>防災倉庫</p></div><p>日立市役所防災対策課に申請書と見積書を提出します。自主防災組織の代表者が申請者となります。</p><p><span class="marker">購入前に申請し、交付決定後に購入してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。1団体につき年度内1回の申請が可能です。</p><p><span class="marker">個人での申請は対象外</span>です。自主防災組織や町内会としての申請が必要です。</p><div class="note-box">日立市では防災資機材の整備補助のほか、津波避難タワーの整備や防災行政無線のデジタル化も進めています。地域の防災訓練への参加を通じて、資機材の使い方を日頃から確認しておくことが大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // つくば市（茨城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tsukuba-childcare-subsidy',
    title: 'つくば市 保育料軽減補助金',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '第2子以降保育料無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['つくば市', '保育料', '補助金'],
    eligibility: 'つくば市に住所を有し、保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: 'つくば市が実施する保育料軽減補助金です。第2子以降の保育料を無償化し、研究学園都市で働く子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 保育料軽減補助金は、<span class="marker">認可保育所・認定こども園等を利用する第2子以降の保育料</span>を無料とする制度です。</p><p>筑波研究学園都市として知られるつくば市は、JAXAや産業技術総合研究所をはじめ300以上の研究機関が集積する国際的な学術都市です。つくばエクスプレスの開業以降、人口増加が続いており、保育ニーズの高まりに対応した手厚い支援を行っています。</p><p><span class="marker-green">第1子の年齢にかかわらず、第2子以降の保育料が無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>つくば市に住民登録があり、認可保育所等を利用する第2子以降の児童の保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>事業所内保育事業所</p></div><p>入所手続き時に自動適用されます。<strong>別途の申請は原則不要</strong>です。世帯状況の変更があった場合はつくば市役所こども政策課へ届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。3〜5歳児は国の無償化制度により全員無料です。</p><p><span class="marker">0〜2歳児クラスの第1子の保育料は世帯所得に応じて月額0円〜約3万円程度</span>です。</p><div class="note-box">つくば市は人口増加に伴い保育所の待機児童対策にも注力しています。認可外保育施設は本制度の対象外となる場合がありますが、認可外保育施設の保育料補助は別制度で対応しています。副食費は別途負担です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-birth-bonus',
    title: 'つくば市 出産祝い金',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['つくば市', '出産祝い金', '給付金'],
    eligibility: 'つくば市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: 'つくば市が実施する出産祝い金です。新生児の誕生を祝い、第1子に5万円、第2子以降に10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 出産祝い金は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に支給される給付金制度です。</p><p>つくば市は茨城県内で最も人口増加率が高い自治体で、若い研究者やエンジニアの家族が多く暮らしています。筑波大学附属病院をはじめとする医療機関が充実しており、安心して出産・子育てできる環境が整っています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出生時につくば市に住民登録があること</p><p>出生届をつくば市に提出していること</p><p>出生後も引き続きつくば市に居住する意思があること</p></div><p>出生届提出後につくば市役所こども政策課または各窓口センターで申請します。<strong>生後6か月以内</strong>の申請が必要です。</p><p><span class="marker">保護者の本人確認書類と振込先口座情報をお持ちください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。多胎児はそれぞれ支給されます。</p><p><span class="marker">申請から約1か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">つくば市では出産祝い金のほか、産前産後ヘルパー派遣事業や、つくば市版ネウボラ（妊娠期から子育て期までの切れ目ない支援）を推進しています。多言語対応の子育て支援サービスもあり、外国人研究者の家族にも対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-housing-purchase',
    title: 'つくば市 住宅取得支援補助金',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['つくば市', '住宅取得', '補助金'],
    eligibility: 'つくば市内に新たに住宅を取得する方（市外からの転入者）',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: 'つくば市が実施する住宅取得支援補助金です。市外からの転入者が市内に住宅を取得する際に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 住宅取得支援補助金は、<span class="marker">市外から転入して市内に住宅を新築または購入する方</span>に対して費用の一部を補助する制度です。</p><p>つくばエクスプレス沿線を中心に急速な宅地開発が進むつくば市ですが、周辺部の活性化も重要な課題です。市全域への定住を促進するため、特に周辺部での住宅取得には加算措置を設けています。</p><p>基本補助額は<strong>30万円</strong>で、子育て世帯加算や特定地域加算により<span class="marker-green">最大50万円</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>つくば市外から転入して住宅を取得すること</p><p>取得後につくば市に住民登録をすること</p><p>市税を滞納していないこと</p><p>5年以上継続して居住する意思があること</p></div><p>つくば市役所都市計画課に申請書と必要書類を提出します。売買契約書や住民票の写しが必要です。</p><p><span class="marker">住宅の引き渡し後6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。子育て世帯加算（18歳未満の子がいる世帯）10万円、つくばエクスプレス沿線外地域加算10万円があり、合計で最大50万円です。</p><p><span class="marker">市内在住者の住み替えは対象外</span>です。市外からの転入が条件となります。</p><div class="note-box">5年以内に転出した場合は補助金の返還を求められます。つくば市は研究機関の任期付き職員が多いため、転勤の可能性がある方は十分にご検討ください。親族間の売買や相続による取得は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-infertility',
    title: 'つくば市 不妊治療費助成制度',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '最大15万円（1回あたり）',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['つくば市', '不妊治療', '助成金'],
    eligibility: 'つくば市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後〜年度末まで',
    description: 'つくば市が実施する不妊治療費助成制度です。特定不妊治療の費用を1回あたり最大15万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 不妊治療費助成制度は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対して治療費の一部を助成する制度です。</p><p>つくば市には筑波大学附属病院をはじめ高度な医療機関が集積しており、不妊治療の環境も整っています。保険適用後の自己負担分に加え、先進医療費にも独自の助成を行い、子どもを望む夫婦を経済的に支えています。</p><p><span class="marker-green">保険適用後の自己負担分と先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>つくば市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚関係にある夫婦が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>医療費の領収書の写し</p><p>夫婦の住民票</p></div><p>治療終了日の属する年度末までに、つくば市役所健康増進課へ申請します。<strong>年度内2回まで</strong>申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大15万円</strong>です。保険適用後の自己負担分と先進医療費の合計が対象となります。</p><p><span class="marker">茨城県の助成制度との併用が可能</span>です。県の助成を先に受け、残額について市の助成を申請する形になります。</p><div class="highlight-box">つくば市は高度医療機関へのアクセスが良く、不妊治療の選択肢も豊富です。つくば市保健センターでは不妊に関する相談も受け付けていますので、治療開始前から気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-scholarship',
    title: 'つくば市 奨学金制度',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '月額4万円（大学生）',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '茨城県',
    tags: ['つくば市', '奨学金', '教育支援'],
    eligibility: 'つくば市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年2月〜4月',
    description: 'つくば市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大4万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、奨学金を貸与する制度です。</p><p>つくば市は筑波大学をはじめ多くの教育・研究機関が立地する「知の拠点」です。次世代の研究者・技術者を育てるため、意欲ある学生の学びを経済面から支えています。</p><p>貸与月額は<strong>高校生2万円、大学生等4万円</strong>です。<span class="marker-green">無利子での貸与</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>つくば市に住民登録がある世帯の子であること</p><p>高等学校、大学、短大、専門学校等に在学中または入学予定であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が良好であること</p></div><p>毎年2月〜4月の募集期間につくば市教育委員会教育総務課へ申請します。</p><p><span class="marker">選考は学業成績と家計状況を総合的に審査</span>して行われ、結果は5月頃に通知されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生2万円、大学生等4万円</strong>です。返還は卒業後1年を経過した後、貸与期間の3倍以内の期間で行います。</p><p><span class="marker">つくば市内に居住して就業した場合の返還免除制度</span>がある場合があります。詳しくは教育委員会にお問い合わせください。</p><div class="note-box">他の奨学金制度との併用は可能です。つくば市には筑波大学の授業料免除制度やTA・RA制度など、大学独自の経済支援も充実していますので、あわせて検討することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-telework-bonus',
    title: 'つくば市 テレワーク推進補助金',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '茨城県',
    tags: ['つくば市', 'テレワーク', '補助金'],
    eligibility: 'つくば市内でテレワーク環境を整備する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: 'つくば市が実施するテレワーク推進補助金です。テレワーク環境の整備に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 テレワーク推進補助金は、<span class="marker">市内でテレワーク環境を新たに整備する事業者</span>に対して費用の一部を補助する制度です。</p><p>つくば市はつくばエクスプレスで秋葉原まで最速45分という交通利便性を誇り、テレワークとオフィスワークを組み合わせた柔軟な働き方の拠点として注目されています。研究機関のスピンオフ企業やスタートアップの進出も相次いでおり、多様な働き方を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">サテライトオフィスの設置やリモートワーク環境の構築が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>通信回線の導入・増強費用</p><p>テレワーク用端末（PC・モニター等）の購入費</p><p>クラウドサービスの導入費用</p><p>サテライトオフィスの設置・改修費用</p></div><p>つくば市役所経済部産業振興課に申請書と事業計画書を提出します。</p><p><span class="marker">設備導入前の申請が必須</span>です。交付決定前の契約・購入は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者1回限りの申請です。</p><p><span class="marker">個人利用のスマートフォンや家具は対象外</span>です。業務利用が明確なものに限られます。</p><div class="note-box">つくば市には研究学園駅周辺のコワーキングスペースやつくばスタートアップパークなど、テレワークに適した施設が充実しています。まずはこれらの施設を体験利用し、自社に合ったテレワーク環境を検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-nursing-equipment',
    title: 'つくば市 介護用品支給事業',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['つくば市', '介護用品', '支給'],
    eligibility: 'つくば市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: 'つくば市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>つくば市は若い世帯が多い一方で、研究学園都市開発初期に移住した世代の高齢化も進んでいます。広い市域に住宅が分散しているため、在宅介護の負担軽減は重要な施策です。</p><p><span class="marker-green">市民税非課税世帯を主な対象に、年間最大10万円相当の介護用品を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>つくば市に住民登録があり、在宅で要介護4・5の認定を受けた高齢者を介護している家族が対象です。</p><div class="summary-box" data-title="対象となる介護用品"><p>紙おむつ（テープ型・パンツ型）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤</p></div><p>つくば市役所高齢福祉課の窓口で申請します。<strong>介護保険被保険者証と要介護認定結果通知書</strong>をお持ちください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間最大10万円相当</strong>の介護用品です。カタログから必要な用品を選び、定期配送されます。</p><p><span class="marker">入院中・施設入所中の方は対象外</span>です。在宅介護期間のみ支給されます。</p><div class="highlight-box">つくば市では介護用品支給のほか、ICTを活用した見守りシステムの導入支援も行っています。研究学園都市の技術力を活かした先進的な介護支援サービスの情報もあわせて地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-elderly-support',
    title: 'つくば市 高齢者生活支援事業',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '茨城県',
    tags: ['つくば市', '高齢者支援', '生活支援'],
    eligibility: 'つくば市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: 'つくば市が実施する高齢者生活支援事業です。ひとり暮らし高齢者等に配食サービスや緊急通報システムを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>の日常生活を支援する複数のサービスを提供する制度です。</p><p>つくば市は広大な面積を持ち、特に周辺部では公共交通機関が限られるため、高齢者の日常生活支援が欠かせません。配食サービスによる栄養管理と見守り、緊急通報システムの設置などを通じて、安心して暮らせる環境を整備しています。</p><p><span class="marker-green">配食サービス・緊急通報システム・外出支援など、複数のメニューを組み合わせて利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス（昼食・夕食の宅配と安否確認）</p><p>緊急通報システムの設置</p><p>外出支援サービス（通院の送迎等）</p><p>ごみ出し支援</p></div><p>つくば市役所高齢福祉課または地域包括支援センターで申請します。</p><p><span class="marker">サービスの種類ごとに利用要件が異なります</span>ので、まずは地域包括支援センターにご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>配食サービス</strong>は1食あたり約400円の補助があり、自己負担は300〜400円程度です。週5回まで利用できます。</p><p><span class="marker">緊急通報システムは月額無料〜数百円程度の自己負担で利用可能</span>です。GPSによる位置情報サービスも付帯しています。</p><div class="note-box">つくば市ではAIを活用したオンデマンド型交通「つくバス」の改善や、自動運転の実証実験も行っています。高齢者の移動支援は今後さらに充実する見込みです。まずはお気軽に地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsukuba-seismic-diagnosis',
    title: 'つくば市 耐震診断補助制度',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '診断費用の自己負担ほぼ無料',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '茨城県',
    tags: ['つくば市', '耐震診断', '防災'],
    eligibility: 'つくば市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃',
    description: 'つくば市が実施する耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断を自己負担ほぼ無料で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>つくば市 耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、耐震診断の費用を補助する制度です。</p><p>つくば市は2011年の東日本大震災で液状化被害を受けた地域もあり、建物の耐震化は重要な防災課題です。研究学園都市の開発初期（1970年代）に建てられた住宅も耐震診断の対象となります。</p><p><span class="marker-green">市が費用の大部分を負担し、自己負担はほぼ無料</span>で診断を受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>つくば市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたものであること</p><p>2階建て以下であること</p><p>在来軸組工法であること</p></div><p>つくば市役所建築指導課に申請書を提出します。市が派遣する耐震診断士が自宅を訪問して診断します。</p><p><span class="marker">診断は1〜2時間程度で完了</span>します。建物の図面があればご準備ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>市がほぼ全額を負担</strong>し、自己負担は数千円程度です。</p><p><span class="marker">診断結果に基づく耐震改修工事には別途補助制度（最大100万円程度）が利用可能</span>です。</p><div class="note-box">つくば市は関東平野に位置し、首都直下地震の影響も想定されています。研究学園都市の開発初期に建てられた公務員宿舎跡地周辺の木造住宅は築40年以上経過しており、早めの耐震診断をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 小山市（栃木県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'oyama-childcare-subsidy',
    title: '小山市 保育料軽減補助金',
    organization: '小山市',
    type: 'local',
    maxAmount: '第2子以降保育料無料',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['小山市', '保育料', '補助金'],
    eligibility: '小山市に住所を有し、保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '小山市が実施する保育料軽減補助金です。第2子以降の保育料を無償化し、子育て世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 保育料軽減補助金は、<span class="marker">認可保育所・認定こども園等を利用する第2子以降の保育料</span>を無料とする制度です。</p><p>栃木県南部に位置する小山市は、JR東北新幹線・宇都宮線・水戸線・両毛線が交差する北関東有数の交通結節点です。東京まで新幹線で約40分というアクセスの良さから、子育て世帯の流入が続いており、保育料の軽減でさらなる定住促進を図っています。</p><p><span class="marker-green">第1子の年齢を問わず、第2子以降の保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>小山市に住民登録があり、認可保育所等を利用する第2子以降の児童の保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>家庭的保育事業所</p></div><p>入所手続き時に自動適用されるため、<strong>別途の申請は原則不要</strong>です。世帯状況の変更があれば小山市役所保育課へ届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。3〜5歳児は国の無償化制度により全員無料です。</p><p><span class="marker">0〜2歳児クラスの第1子の保育料は所得に応じて月額0円〜約3万円程度</span>です。</p><div class="note-box">認可外保育施設は本制度の対象外となる場合があります。延長保育料・副食費は別途負担です。小山市では駅前を中心に保育施設の整備を進めており、通勤の利便性と両立した保育環境を目指しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-birth-bonus',
    title: '小山市 出産祝い金',
    organization: '小山市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['小山市', '出産祝い金', '給付金'],
    eligibility: '小山市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '小山市が実施する出産祝い金です。新生児の誕生を祝い、第1子に5万円、第2子以降に10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 出産祝い金は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に支給される給付金制度です。</p><p>小山市は「若い世代に選ばれるまち」を目指し、子育て支援の充実に取り組んでいます。思川桜や小山評定跡など歴史と自然が調和した住みやすい街で、出産を迎える世帯を経済的に応援しています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出生時に小山市に住民登録があること</p><p>出生届を小山市に提出していること</p><p>出生後も引き続き小山市に居住する意思があること</p></div><p>出生届提出後に小山市役所子育て家庭支援課の窓口で申請します。<strong>生後6か月以内</strong>に申請してください。</p><p><span class="marker">保護者の本人確認書類と振込先口座情報が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。多胎児はそれぞれ支給されます。</p><p><span class="marker">申請から約1か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">小山市では出産祝い金のほか、子育て支援センター「ゆめまち」や産後ケア事業、ファミリーサポートセンターの運営など、妊娠期から子育て期までの包括的な支援を行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-newlywed-rent',
    title: '小山市 新婚世帯家賃補助金',
    organization: '小山市',
    type: 'local',
    maxAmount: '月額最大2万円（最長3年間）',
    maxAmountNum: 24,
    category: 'housing',
    prefecture: '栃木県',
    tags: ['小山市', '新婚', '家賃補助'],
    eligibility: '小山市内の賃貸住宅に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '小山市が実施する新婚世帯家賃補助金です。新婚世帯の家賃を月額最大2万円、最長3年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 新婚世帯家賃補助金は、<span class="marker">市内の民間賃貸住宅に居住する新婚世帯</span>に対して家賃の一部を補助する制度です。</p><p>小山市は東北新幹線の停車駅を持ち、東京通勤圏内にありながら家賃水準が比較的手頃な地域です。結婚を機に小山市で新生活を始める若い世帯に向けて、家賃面での支援を提供しています。</p><p>補助額は<strong>月額最大2万円で、最長3年間</strong>受給できます。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届の提出日から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>小山市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が一定額以下であること</p><p>市税を滞納していないこと</p></div><p>小山市役所建築課に申請書と必要書類（婚姻届受理証明書、賃貸契約書の写し等）を提出します。</p><p><span class="marker">年度ごとに更新申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>家賃の一部で月額最大2万円</strong>です。家賃が4万円以上の場合に上限2万円が補助されます。</p><p><span class="marker">公営住宅・社宅・親族所有の物件は対象外</span>です。</p><div class="note-box">小山市では新婚世帯向けの住宅購入補助金も別途設けています。最長3年間で最大72万円の家賃支援を受けられるため、将来の住宅取得に向けた貯蓄計画にもつながります。詳しくは建築課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-disability-medical',
    title: '小山市 障がい者医療費助成制度',
    organization: '小山市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '栃木県',
    tags: ['小山市', '障がい者医療', '助成金'],
    eligibility: '小山市に住所を有する重度障がい者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '小山市が実施する障がい者医療費助成制度です。重度の障がいがある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 障がい者医療費助成制度は、<span class="marker">重度の障がいがある方の保険診療における自己負担分</span>を助成する制度です。</p><p>小山市は障がい者福祉の充実に力を入れており、栃木県の福祉医療制度と連携して通院・入院・調剤にかかる自己負担分を助成しています。市内には障がい者就労支援施設や福祉作業所も複数あり、医療と生活の両面から支援を行っています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>小山市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級または2級の方</p><p>療育手帳Aの方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>小山市役所社会福祉課の窓口で申請します。障害者手帳と健康保険証をお持ちください。申請後、<strong>「重度心身障害者医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。栃木県内の医療機関では受給資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">一定以上の所得がある場合は対象外となることがあります。保険適用外の費用（差額ベッド代等）は助成対象外です。手帳の等級変更や住所変更の際は速やかに届け出てください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-school-lunch',
    title: '小山市 学校給食費補助制度',
    organization: '小山市',
    type: 'local',
    maxAmount: '第3子以降給食費無料',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '栃木県',
    tags: ['小山市', '給食費', '教育支援'],
    eligibility: '小山市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '小山市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 学校給食費補助制度は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額補助する制度です。</p><p>小山市は地産地消を推進する「おやまブランド」の取り組みが盛んで、学校給食にも栃木県産のお米や野菜がふんだんに使われています。多子世帯の教育費負担を軽減し、すべての子どもが栄養豊かな給食を楽しめる環境を整えています。</p><p><span class="marker-green">所得制限なしで、第3子以降の給食費が全額補助</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>小山市立小中学校に在籍する児童生徒であること</p><p>同一世帯で養育する子のうち第3子以降であること</p><p>上の子の年齢制限は原則なし</p></div><p>毎年4月に学校を通じて案内されます。申請書を学校または小山市教育委員会学校教育課へ提出してください。</p><p><span class="marker">年度途中の転入や世帯状況の変更による該当も随時受け付け</span>ています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額補助</strong>されます。給食費は小学校で月額約4,400円、中学校で月額約5,100円程度です。</p><p><span class="marker">年間で約5万〜6万円の負担軽減</span>となります。</p><div class="highlight-box">小山市の学校給食は「おやま食育の日」を設け、地元農産物を使ったメニューや郷土料理を提供しています。第1子・第2子の給食費についても就学援助制度による補助が受けられる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-sme-support',
    title: '小山市 中小企業振興補助金',
    organization: '小山市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '栃木県',
    tags: ['小山市', '中小企業', '補助金'],
    eligibility: '小山市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '小山市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路開拓に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業の設備投資・販路開拓</span>に対して費用の一部を補助する制度です。</p><p>小山市は北関東有数の工業都市で、自動車部品・電機・食品加工など多様な製造業が集積しています。JRの交通結節点という立地を活かし、物流・流通業も盛んです。地元中小企業の成長を後押しする補助制度として幅広く活用されています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">製造設備の導入からEC販路開拓まで多様な取り組みが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>小山市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>対象経費が20万円以上であること</p></div><p>小山市役所商工観光課に事業計画書と申請書を提出します。</p><p><span class="marker">事業着手前の申請が必須</span>です。交付決定前に発注した経費は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備購入費、広告宣伝費、展示会出展費などが対象です。</p><p><span class="marker">年度内に事業を完了し、実績報告書の提出が必要</span>です。</p><div class="note-box">小山市では中小企業振興補助金のほか、小山商工会議所や金融機関と連携した経営改善支援も行っています。ものづくり企業への専門家派遣や、異業種交流会の開催など、ネットワークづくりの支援もあわせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-nursing-home-reform',
    title: '小山市 介護リフォーム補助金',
    organization: '小山市',
    type: 'local',
    maxAmount: '最大20万円（介護保険と併用可）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '栃木県',
    tags: ['小山市', '介護リフォーム', '補助金'],
    eligibility: '小山市に住所を有し、要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年',
    description: '小山市が実施する介護リフォーム補助金です。高齢者の在宅生活を支えるバリアフリー改修に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 介護リフォーム補助金は、<span class="marker">要介護・要支援認定を受けた方の自宅のバリアフリー改修工事</span>に対して費用の一部を補助する制度です。</p><p>小山市は平坦な地形が多いものの、築年数の経った住宅では段差や狭い廊下が多く、高齢者の在宅生活に支障をきたすケースが増えています。安全で快適な住環境を確保するため、バリアフリー改修を支援しています。</p><p>補助額は<strong>上限20万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）と併用可能</span>で、最大40万円の支援が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消・スロープ設置</p><p>床材の変更（滑り防止）</p><p>引き戸への変更・ドアの拡幅</p><p>トイレの洋式化・浴室改修</p></div><p>小山市役所介護保険課に申請書と工事見積書を提出します。担当ケアマネジャーを通じて申請するのが一般的です。</p><p><span class="marker">工事着手前の申請が必須</span>です。ケアマネジャーと改修内容を事前に相談してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の一部で、<strong>上限20万円</strong>です。介護保険の住宅改修費と合わせて最大40万円の支援が受けられます。</p><p><span class="marker">新築・増築は対象外</span>です。既存住宅のバリアフリー改修に限定されます。</p><div class="highlight-box">小山市では介護リフォーム補助のほか、住宅の耐震改修や省エネ改修との同時施工を検討される方も増えています。複数の補助制度を組み合わせることで、安全で快適な住まいづくりをトータルに支援します。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-energy-support',
    title: '小山市 省エネ設備導入補助金',
    organization: '小山市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '栃木県',
    tags: ['小山市', '省エネ', '補助金'],
    eligibility: '小山市内の住宅に省エネ設備を導入する市民',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '小山市が実施する省エネ設備導入補助金です。住宅用太陽光発電や蓄電池等の導入に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 省エネ設備導入補助金は、<span class="marker">住宅用太陽光発電システム・蓄電池・高効率給湯器等</span>を導入する市民に対して費用の一部を補助する制度です。</p><p>小山市は関東平野の内陸部に位置し、夏は高温、冬は乾燥した気候です。冷暖房の効率化や太陽光発電の導入により、家計の光熱費削減と環境負荷の低減を同時に実現できます。</p><p><span class="marker-green">太陽光発電・蓄電池・高効率給湯器・V2Hなど幅広い設備が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：最大10万円</p><p>家庭用蓄電池：最大10万円</p><p>高効率給湯器（エコキュート等）：最大5万円</p><p>V2H（電気自動車充放電設備）：最大5万円</p></div><p>小山市役所環境課に申請書と見積書を提出します。<strong>合計で最大15万円</strong>の補助です。</p><p><span class="marker">設備の設置前に申請してください</span>。交付決定前に設置した場合は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設備の種類に応じて異なり、<strong>合計で最大15万円</strong>です。</p><p><span class="marker">先着順で予算に達し次第終了</span>となります。早めの申請をおすすめします。</p><div class="note-box">中古設備やリース契約は原則対象外です。小山市は日照条件が良好で太陽光発電の発電効率が高い地域です。国や栃木県の補助制度と併用できる場合がありますので、設置業者や環境課にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'oyama-bousai-equipment',
    title: '小山市 防災設備整備補助金',
    organization: '小山市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '栃木県',
    tags: ['小山市', '防災設備', '補助金'],
    eligibility: '小山市内の自主防災組織または自治会',
    applicationPeriod: '毎年4月〜11月',
    description: '小山市が実施する防災設備整備補助金です。自主防災組織の防災資機材購入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小山市 防災設備整備補助金は、<span class="marker">市内の自主防災組織や自治会が防災資機材を整備する際</span>に費用の一部を補助する制度です。</p><p>小山市は思川・巴波川・田川など複数の河川が流れる地域で、過去に水害被害を受けた経験があります。2015年の関東・東北豪雨では市内で大規模な浸水被害が発生しており、地域の防災力強化は最重要課題です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は10万円</strong>です。<span class="marker-green">発電機・排水ポンプ・土のう袋など水害対策用品も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる資機材"><p>発電機・投光器</p><p>排水ポンプ・土のう袋</p><p>救助工具（バール・ジャッキ等）</p><p>担架・救急セット</p><p>防災備蓄品（食料・飲料水・毛布等）</p></div><p>小山市役所危機管理課に申請書と見積書を提出します。自主防災組織の代表者が申請者となります。</p><p><span class="marker">購入前に申請し、交付決定後に購入してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。1団体につき年度内1回の申請が可能です。</p><p><span class="marker">個人での申請は対象外</span>です。自主防災組織や自治会として申請してください。</p><div class="note-box">小山市では水害対策として洪水ハザードマップの更新や避難所の整備を進めています。自主防災組織の防災訓練には市の職員も協力しますので、排水ポンプの操作訓練なども計画に組み込むことをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
];
