import { Grant } from '@/lib/types';

export const cityGrantsBatch4: Grant[] = [
  // ────────────────────────────────────────────────
  // 千代田区（東京都）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'chiyoda-child-medical',
    title: '千代田区 子ども医療費助成制度',
    organization: '千代田区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['千代田区', '子ども医療費', '助成金'],
    eligibility: '千代田区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '千代田区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>千代田区は皇居を擁する都心の区であり、人口は少ないものの子育て支援に手厚いことで知られています。通院・入院・調剤のいずれも助成対象で、<span class="marker-green">所得制限は設けられていません</span>。</p><p>都心で暮らす子育て世帯にとって、医療費の心配なく受診できる安心感は大きなメリットです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>千代田区に住民登録のある子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかるもの</p></div><p>千代田区役所子育て推進課で申請します。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療証（マル乳・マル子・マル青）」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば、医療証を提示するだけで窓口負担はありません。</p><p><span class="marker">都外の医療機関を受診した場合は、一旦自己負担で支払い、後日区役所で払い戻し申請</span>を行います。領収書を必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、健康診断費用など）は助成対象外です。他の公費医療制度との併用はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'chiyoda-housing-assistant',
    title: '千代田区 次世代育成住宅助成',
    organization: '千代田区',
    type: 'local',
    maxAmount: '最大月額8万円',
    maxAmountNum: 96,
    category: 'housing',
    prefecture: '東京都',
    tags: ['千代田区', '住宅助成', '子育て世帯'],
    eligibility: '千代田区内に居住する子育て世帯または新婚世帯で、一定の所得・住宅要件を満たす方',
    targetIncome: '世帯の所得が基準額以下',
    applicationPeriod: '毎年4月頃（年1回募集・抽選）',
    description: '千代田区が実施する次世代育成住宅助成です。子育て世帯や新婚世帯の区内居住を支援するため、家賃の一部を最大月額8万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 次世代育成住宅助成は、<span class="marker">子育て世帯や新婚世帯が千代田区内に住み続けられるよう家賃の一部を助成</span>する制度です。</p><p>千代田区は都心の中でも家賃水準が高い地域ですが、定住人口の回復を図るためにこの独自の助成制度を設けています。助成期間は最長8年間で、<strong>月額最大8万円</strong>の家賃補助が受けられます。</p><p>都心で子育てしたいけれど家賃が心配という世帯にとって、非常に魅力的な制度です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>千代田区内の民間賃貸住宅に居住していること</p><p>小学校修了前の子どもがいる世帯、または婚姻届から2年以内の新婚世帯</p><p>世帯所得が基準額以下であること</p><p>生活保護を受けていないこと</p></div><p>毎年4月頃に募集が行われ、応募者多数の場合は抽選となります。千代田区住宅課に申請書と必要書類を提出してください。</p><p><span class="marker-green">区のホームページや広報紙で募集時期が告知されます</span>ので、見逃さないように注意しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は家賃と基準家賃との差額の一部で、<strong>月額最大8万円</strong>です。助成期間は最長8年間ですが、子どもの成長や所得状況により途中で終了する場合もあります。</p><p><span class="marker">毎年度、所得状況等の報告が必要</span>です。所得が基準を超えた場合は助成が停止されることがあります。</p><div class="highlight-box">千代田区は人口約6.7万人の小さな区ですが、子育て支援の充実度は23区トップクラスです。この住宅助成と合わせて他の子育て支援制度も活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'chiyoda-education-scholarship',
    title: '千代田区 育英資金貸付制度',
    organization: '千代田区',
    type: 'local',
    maxAmount: '月額最大5万円（貸付）',
    maxAmountNum: 60,
    category: 'education',
    prefecture: '東京都',
    tags: ['千代田区', '奨学金', '教育支援'],
    eligibility: '千代田区に住所を有する方の子弟で、高校・大学等に在学中の方',
    applicationPeriod: '毎年4月（年1回募集）',
    description: '千代田区が実施する育英資金貸付制度です。高校・大学等に通う学生に月額最大5万円の奨学金を無利子で貸付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 育英資金貸付制度は、<span class="marker">経済的理由により就学が困難な学生に対し、無利子で奨学金を貸付</span>する制度です。</p><p>高校生には月額2万5千円、大学生等には月額5万円を上限として貸付が行われます。国や東京都の奨学金制度とは別枠で、<span class="marker-green">無利子で返済できる</span>のが特徴です。教育費の負担軽減に大きく貢献する区独自の制度です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が千代田区に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>経済的理由により就学が困難であること</p><p>他の奨学金と併用可能（要確認）</p></div><p>毎年4月に千代田区教育委員会で募集が行われます。申請書・在学証明書・保護者の所得証明書などを提出してください。</p><p>審査を経て貸付が決定され、毎月指定口座に振り込まれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸付月額は<strong>高校生：月額2万5千円以内、大学生等：月額5万円以内</strong>です。卒業後6か月の据え置き期間を経て、最長10年で分割返済します。</p><p><span class="marker">無利子のため、返済総額は借入総額と同額</span>です。延滞した場合は延滞金が発生しますので、計画的な返済を心がけましょう。</p><div class="note-box">この制度は「貸付」であり給付ではありません。返済が必要ですが、無利子である点は大きなメリットです。国の給付型奨学金と合わせて検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 中央区（東京都）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'chuo-child-medical',
    title: '中央区 子ども医療費助成制度',
    organization: '中央区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中央区', '子ども医療費', '助成金'],
    eligibility: '中央区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '中央区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>中央区は銀座・日本橋・築地といった商業エリアで知られますが、近年はタワーマンションの建設が進み子育て世帯が急増しています。通院・入院・調剤のいずれも助成対象で、<span class="marker-green">所得制限なし</span>で全ての対象世帯が利用可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>中央区に住民登録のある子どもの保護者が対象です。子どもが健康保険に加入していることが必要です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかるもの</p></div><p>中央区役所子育て支援課で申請します。出生届や転入届と同時に手続きするのが便利です。「子ども医療証」が交付され、<strong>都内の医療機関であれば窓口負担なし</strong>で受診できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関では医療証の提示だけでOKです。</p><p><span class="marker">都外の医療機関を受診した場合は、償還払い（後日払い戻し）</span>の手続きが必要です。受診日の翌月から2年以内に申請してください。</p><div class="highlight-box">中央区では出産支援として「タクシー利用券」の配布や「新生児誕生祝品」の支給も行っています。子育て支援制度を合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'chuo-housing-reform',
    title: '中央区 住宅リフォーム助成',
    organization: '中央区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['中央区', '住宅リフォーム', '補助金'],
    eligibility: '中央区内に居住し、区内業者によるリフォーム工事を行う方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '中央区が実施する住宅リフォーム助成制度です。区内業者による住宅リフォーム工事費用の一部を最大20万円まで助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 住宅リフォーム助成は、<span class="marker">区民の住環境の向上と区内中小事業者の活性化</span>を目的とした制度です。</p><p>中央区内に所在する住宅のリフォーム工事に対し、工事費の一部を助成します。バリアフリー改修、断熱改修、内装工事など幅広い工事が対象で、<strong>最大20万円</strong>が助成されます。区内業者に依頼することが条件となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>中央区内に住所を有し、区内の住宅に居住していること</p><p>中央区内の施工業者が工事を行うこと</p><p>工事費が10万円以上（税抜）であること</p><p>工事着手前に申請すること</p></div><p>中央区役所住宅課に申請書と見積書を提出します。<span class="marker-green">必ず工事着手前に申請してください</span>。着手後の申請は受け付けられません。</p><p>交付決定後に工事を開始し、完了後に実績報告書を提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の<strong>20%（上限20万円）</strong>です。住民税を滞納していないことが条件です。</p><p><span class="marker">年度内に1回限りの助成</span>で、過去に同制度を利用した場合は申請できない場合があります。予算に達し次第受付終了となるため、早めの申請がおすすめです。</p><div class="note-box">中央区では別途「高齢者住宅設備改修給付」や「住宅修築資金融資あっせん」制度もあります。内容に応じて最適な制度を選びましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'chuo-fertility-treatment',
    title: '中央区 不妊治療費助成制度',
    organization: '中央区',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['中央区', '不妊治療', '医療費助成'],
    eligibility: '中央区に住所を有する夫婦で、保険適用の不妊治療を受けている方',
    applicationPeriod: '通年（治療終了後6か月以内に申請）',
    description: '中央区が実施する不妊治療費助成制度です。保険適用の不妊治療にかかる自己負担分の一部を最大5万円まで助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 不妊治療費助成制度は、<span class="marker">保険適用の不妊治療にかかる自己負担分を助成</span>する区独自の制度です。</p><p>2022年4月から不妊治療に保険が適用されましたが、自己負担額はそれでも大きくなりがちです。中央区ではこの負担を軽減するため、保険適用後の自己負担分に対して<strong>最大5万円</strong>の助成を行っています。体外受精や顕微授精も対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦のいずれかが中央区に住所を有すること</p><p>保険適用の不妊治療を受けていること</p><p>治療終了後6か月以内に申請すること</p></div><p>中央区保健所健康推進課に申請書と医療機関の治療証明書・領収書を提出します。</p><p><span class="marker-green">事実婚のカップルも対象</span>です。申請期限を過ぎないよう、治療が一区切りついたら早めに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大5万円</strong>が助成されます。保険適用の治療であれば、人工授精から高度生殖医療まで幅広く対象です。</p><p><span class="marker">年度内の助成回数に上限はありません</span>が、治療ごとに個別の申請が必要です。医療機関の領収書と治療証明書を忘れずに取得してください。</p><div class="highlight-box">中央区では妊活に関する相談窓口も設けています。費用面だけでなく、精神的なサポートも受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 港区（東京都）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'minato-child-medical',
    title: '港区 子ども医療費助成制度',
    organization: '港区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['港区', '子ども医療費', '助成金'],
    eligibility: '港区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '港区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>港区は六本木・赤坂・青山など華やかなエリアを擁し、大使館が多く国際色豊かな区です。人口増加が続いており、子育て世帯の転入も多いため、この医療費助成は多くの家庭に利用されています。</p><p>通院・入院・調剤が対象で、<span class="marker-green">所得制限なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>港区に住民登録のある子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>個人番号（マイナンバー）がわかるもの</p></div><p>港区役所子ども家庭支援部または各総合支所区民課で申請します。出生届・転入届と同時に手続き可能です。<strong>「子ども医療証」</strong>が交付され、都内の医療機関で保険証と一緒に提示して利用します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関では窓口負担なしで受診できます。</p><p><span class="marker">都外の医療機関を受診した場合は、後日区役所で払い戻し申請</span>が必要です。領収書の原本を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。入院時の食事療養費も自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'minato-education-support',
    title: '港区 就学援助制度',
    organization: '港区',
    type: 'local',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '東京都',
    tags: ['港区', '就学援助', '教育支援'],
    eligibility: '港区立の小中学校に通う児童生徒の保護者で、経済的に困難な方',
    targetIncome: '生活保護基準の1.2倍程度',
    applicationPeriod: '毎年4月（年度途中の申請も可能）',
    description: '港区が実施する就学援助制度です。経済的に困難な家庭の小中学生に学用品費や給食費などを支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 就学援助制度は、<span class="marker">経済的な理由で就学が困難な小中学生の保護者</span>に対し、学用品費・学校給食費・修学旅行費などを支給する制度です。</p><p>港区は平均所得が高い地域として知られますが、すべての家庭が余裕があるわけではありません。この制度は経済的な事情に関わらず子どもが等しく学べる環境を整えるために設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受給している世帯（要保護）</p><p>所得が生活保護基準の約1.2倍以下の世帯（準要保護）</p><p>その他、経済的に困難と認められる世帯</p></div><p>毎年4月に学校を通じて申請案内が配布されます。申請書と所得を証明する書類を学校へ提出します。</p><p><span class="marker-green">年度途中での申請も可能</span>です。失業・離婚などで家計状況が変わった場合は、すぐに学校に相談しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>主な支給項目は以下の通りです。</p><div class="summary-box" data-title="支給される費用"><p>学用品費・通学用品費：年額約11,000〜23,000円</p><p>学校給食費：実費全額</p><p>修学旅行費：実費（上限あり）</p><p>新入学用品費：約50,000〜60,000円</p></div><p><span class="marker">認定は毎年度行われるため、年度ごとの申請が必要</span>です。前年の所得を基に審査されますので、収入に変動があった場合は早めに相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'minato-housing-seismic',
    title: '港区 住宅耐震化助成制度',
    organization: '港区',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'housing',
    prefecture: '東京都',
    tags: ['港区', '耐震改修', '住宅補助'],
    eligibility: '港区内に所在する昭和56年5月以前に建築された住宅の所有者',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '港区が実施する住宅耐震化助成制度です。旧耐震基準で建てられた住宅の耐震改修に最大150万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 住宅耐震化助成制度は、<span class="marker">昭和56年5月以前の旧耐震基準で建てられた住宅の耐震改修</span>を支援する制度です。</p><p>港区は湾岸エリアを含むため液状化リスクもあり、住宅の耐震化は防災上重要な課題です。木造住宅だけでなく、非木造住宅（マンション等）の耐震診断・改修も助成対象に含まれています。改修工事に対し<strong>最大150万円</strong>の助成が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建物の条件"><p>港区内に所在する住宅（戸建て・マンション）</p><p>昭和56年5月31日以前に建築されたもの</p><p>耐震診断の結果、耐震性が不足していると判定されたもの</p></div><p>まず港区の助成による耐震診断を受けることをおすすめします。診断費用も別途助成の対象です。</p><p><span class="marker-green">耐震診断は無料または大幅に助成されます</span>。診断結果を受けて改修計画を策定し、工事着手前に助成の申請を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事に対し<strong>最大150万円</strong>が助成されます。非課税世帯や高齢者のみの世帯には上限の引き上げがある場合もあります。</p><p><span class="marker">必ず工事着手前に助成の申請が必要</span>です。着手後の申請は対象外となりますのでご注意ください。</p><div class="highlight-box">港区では耐震改修だけでなく、建替えや除却にも助成制度があります。建物の状態に応じて最適な選択肢を検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 新宿区（東京都）3件: childcare, medical, living
  // ────────────────────────────────────────────────
  {
    slug: 'shinjuku-child-medical',
    title: '新宿区 子ども医療費助成制度',
    organization: '新宿区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['新宿区', '子ども医療費', '助成金'],
    eligibility: '新宿区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '新宿区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>新宿区は繁華街のイメージが強いですが、実は約35万人の区民が暮らす居住エリアでもあります。通院・入院・調剤のいずれも助成対象で、<span class="marker-green">所得制限はありません</span>。外国籍の方も含め、区内に住民登録のあるすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>新宿区に住民登録のある子どもの保護者が対象です。</p><div class="summary-box" data-title="申請手順"><p>1. 新宿区役所子ども家庭課または特別出張所で申請</p><p>2. 子どもの健康保険証・保護者の本人確認書類を持参</p><p>3. 「子ども医療証」が交付される</p></div><p>出生届や転入届と同時に手続きできます。<strong>都内の医療機関では医療証と保険証を提示</strong>するだけで窓口負担がなくなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。薬局での保険調剤も対象です。</p><p><span class="marker">都外の医療機関を受診した場合は、一旦自己負担で支払い後に区役所で払い戻し</span>を申請します。申請期限は受診日の翌日から5年以内です。</p><div class="note-box">学校でのケガで日本スポーツ振興センターの給付対象となる場合、子ども医療費助成との重複利用はできません。学校にまず確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shinjuku-vaccination-support',
    title: '新宿区 高齢者インフルエンザ予防接種助成',
    organization: '新宿区',
    type: 'local',
    maxAmount: '接種費用の全額または一部を助成',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['新宿区', '予防接種', '高齢者'],
    eligibility: '新宿区に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月末',
    description: '新宿区が実施する高齢者向けインフルエンザ予防接種助成です。65歳以上の区民の接種費用が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 高齢者インフルエンザ予防接種助成は、<span class="marker">65歳以上の区民を対象にインフルエンザワクチンの接種費用を助成</span>する制度です。</p><p>高齢者がインフルエンザに罹患すると肺炎など重症化するリスクが高いため、予防接種は重要な健康管理手段です。新宿区では自己負担を大幅に軽減し、より多くの高齢者が接種できる環境を整えています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>新宿区に住民登録のある65歳以上の方</p><p>60〜64歳で心臓・腎臓・呼吸器等に重い障害のある方</p><p>生活保護受給者は自己負担なし</p></div><p>事前の申請は不要です。区が指定する医療機関に直接予約して接種するだけで助成が適用されます。</p><p><span class="marker-green">接種時に健康保険証や免許証等で住所と年齢を確認します</span>。予診票は医療機関に備え付けてあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>自己負担は<strong>2,500円程度</strong>で、残りは区が助成します（通常の接種費は4,000〜5,000円）。生活保護受給者は無料です。</p><p><span class="marker">助成期間は毎年10月1日〜翌年1月31日</span>です。期間外に接種した場合は全額自己負担となりますので、早めに接種しましょう。</p><div class="highlight-box">新宿区では肺炎球菌ワクチンの定期接種も助成対象です。かかりつけ医に相談して、インフルエンザと合わせて接種を検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shinjuku-senior-living-support',
    title: '新宿区 高齢者見守り支援事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '無料（区の事業）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['新宿区', '高齢者見守り', '生活支援'],
    eligibility: '新宿区に住所を有する65歳以上の一人暮らしの方等',
    applicationPeriod: '通年',
    description: '新宿区が実施する高齢者見守り支援事業です。一人暮らし高齢者等への訪問・電話による安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 高齢者見守り支援事業は、<span class="marker">65歳以上の一人暮らしの方や高齢者のみの世帯を対象</span>に、定期的な訪問や電話連絡による安否確認を行う事業です。</p><p>新宿区は単身世帯が多い地域であり、高齢者の孤立防止は重要な課題です。地域の見守り協力員や社会福祉協議会と連携し、日常的な声かけや安否確認を通じて高齢者の安全を支えています。利用は<span class="marker-green">すべて無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>見守り協力員による定期訪問</p><p>電話による安否確認（希望者に週1〜2回）</p><p>緊急通報システムの貸与</p><p>配食サービスによる安否確認</p></div><p>新宿区の高齢者総合相談センター（地域包括支援センター）に相談・申し込みします。ご本人だけでなく、ご家族からの申し込みも受け付けています。</p><p>民生委員や近隣住民からの紹介でサービスにつながるケースも多いです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>見守り訪問・電話確認は<strong>すべて無料</strong>です。緊急通報システムの貸与も無料で利用できます。</p><p><span class="marker">緊急通報システムは、ボタン一つで消防庁に通報できる機器</span>です。急な体調不良や転倒時にも安心です。設置工事も区が負担します。</p><div class="note-box">見守りサービスはあくまで安否確認であり、介護サービスとは異なります。介護が必要な場合は介護保険サービスの利用を検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 文京区（東京都）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'bunkyo-child-medical',
    title: '文京区 子ども医療費助成制度',
    organization: '文京区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['文京区', '子ども医療費', '助成金'],
    eligibility: '文京区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '文京区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>文京区は東京大学をはじめ多くの教育機関が集まる「文教の街」です。子育て環境の良さから、ファミリー世帯に人気の高い区でもあります。通院・入院・調剤のいずれも対象で、<span class="marker-green">所得制限なし</span>で利用可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>文京区に住民登録のある子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかるもの</p></div><p>文京区役所子ども家庭部子育て支援課、または文京シビックセンター内の窓口で申請します。出生届・転入届と同時に手続き可能です。<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば、医療証の提示で窓口負担はありません。</p><p><span class="marker">都外の医療機関を受診した場合は、償還払い</span>の手続きが必要です。領収書を持参して区役所で申請してください。</p><div class="highlight-box">文京区では「子育て応援メールマガジン」で子育て支援情報を配信しています。医療費助成以外にも役立つ情報が届きます。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'bunkyo-learning-support',
    title: '文京区 学習支援事業',
    organization: '文京区',
    type: 'local',
    maxAmount: '無料（区の事業）',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['文京区', '学習支援', '子どもの学び'],
    eligibility: '文京区に住所を有する一定の所得要件を満たす世帯の中学生・高校生',
    targetIncome: '住民税非課税世帯等',
    applicationPeriod: '毎年4月（年度途中の申し込みも可能）',
    description: '文京区が実施する学習支援事業です。経済的に困難な世帯の中高生に無料の学習塾を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 学習支援事業は、<span class="marker">経済的に困難な世帯の中学生・高校生に対し、無料で学習の場を提供</span>する事業です。</p><p>「文教の街」文京区ならではの取り組みで、家庭の経済状況に左右されず子どもが学べる環境を整えています。大学生ボランティアや塾講師による個別指導が受けられ、<span class="marker-green">受講料はすべて無料</span>です。高校受験対策や定期テスト対策にも対応しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>文京区在住の中学1年生〜高校3年生</p><p>生活保護受給世帯または住民税非課税世帯の子ども</p><p>就学援助を受けている世帯の子ども</p></div><p>文京区社会福祉協議会に申し込みます。区の広報やホームページで募集案内が出されます。</p><p>学習教室は区内の公共施設で週1〜2回開催され、一人ひとりのペースに合わせた個別指導が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>受講料・教材費ともに<strong>すべて無料</strong>です。交通費は自己負担となります。</p><p><span class="marker">定員があるため、申し込み多数の場合は抽選</span>となる場合があります。定員に空きがあれば年度途中の参加も可能です。</p><div class="note-box">この事業は学習塾の代替ではなく、学習習慣の定着や基礎学力の向上を目的としています。高校進学のサポートも行っていますので、進路に悩んでいる場合も相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'bunkyo-housing-reform',
    title: '文京区 住宅修築資金助成',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '東京都',
    tags: ['文京区', '住宅リフォーム', '補助金'],
    eligibility: '文京区内に居住し、区内業者による住宅修築工事を行う方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '文京区が実施する住宅修築資金助成です。区内業者による住宅の修繕・改修工事に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>文京区 住宅修築資金助成は、<span class="marker">区民の住環境の改善と区内中小事業者の支援</span>を目的とした制度です。</p><p>住宅の修繕・改修・模様替えなどの工事に対し、工事費の一部を助成します。屋根や外壁の修繕、キッチン・浴室のリフォーム、バリアフリー改修など幅広い工事が対象で、<strong>最大10万円</strong>が助成されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>文京区に住所を有し、区内の住宅に居住していること</p><p>文京区内の施工業者が工事を行うこと</p><p>工事費が20万円以上（税込）であること</p><p>工事着手前に申請すること</p></div><p>文京区役所住環境課に申請書と工事見積書を提出します。<span class="marker-green">必ず工事開始前に申請が必要</span>です。</p><p>申請から交付決定まで約2〜3週間かかります。決定通知後に工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の<strong>10%（上限10万円）</strong>です。住民税の滞納がないことが条件です。</p><p><span class="marker">同一住宅につき1回限りの助成</span>です。予算枠が限られているため、年度の早い時期に申請するのがおすすめです。</p><div class="note-box">文京区では別途「耐震改修助成」や「高齢者住宅改修費給付」もあります。工事の内容に応じて、より有利な制度がないか確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 台東区（東京都）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'taito-child-medical',
    title: '台東区 子ども医療費助成制度',
    organization: '台東区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['台東区', '子ども医療費', '助成金'],
    eligibility: '台東区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '台東区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>台東区は上野・浅草など観光名所を擁する下町情緒豊かな区です。面積は23区で最も小さいですが、子育て支援の充実度は高く、この医療費助成も<span class="marker-green">所得制限なし</span>で全ての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>台東区に住民登録のある子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかるもの</p></div><p>台東区役所子育て・若者支援課で申請します。出生届・転入届と同時に手続き可能です。<strong>「子ども医療証」</strong>が交付され、都内の医療機関で窓口負担なしで受診できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。調剤（薬局）も対象です。</p><p><span class="marker">都外の医療機関を受診した場合は償還払い</span>の手続きが必要です。受診後に領収書を区役所に持参して申請してください。</p><div class="highlight-box">台東区では赤ちゃん訪問や産後ケアなどの子育て支援サービスも充実しています。医療費助成と合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'taito-startup-support',
    title: '台東区 創業支援補助金',
    organization: '台東区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['台東区', '創業支援', '補助金'],
    eligibility: '台東区内で新たに創業する方、または創業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年5月〜7月頃（年1回）',
    description: '台東区が実施する創業支援補助金です。区内での新規開業にかかる経費の一部を最大20万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 創業支援補助金は、<span class="marker">台東区内で新たに事業を始める方を支援</span>する制度です。</p><p>台東区は古くから商業・製造業が盛んな地域で、現在もものづくりやクリエイティブ産業の事業者が多く集まります。新規開業にかかる店舗取得費・設備購入費・広告宣伝費などの一部が補助され、<strong>上限は20万円</strong>です。起業のハードルを下げる心強い制度です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>台東区内での開業を予定している、または開業後1年未満</p><p>台東区の創業支援セミナー等を受講済みであること</p><p>事業計画書を提出できること</p></div><p>台東区産業振興事業団に申請書と事業計画書を提出します。書類審査とプレゼンテーション審査が行われます。</p><p><span class="marker-green">事前に区の創業相談窓口「台東区ビジネスサポートネットワーク」を利用しておく</span>と、事業計画のブラッシュアップに役立ちます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2、<strong>上限20万円</strong>です。対象経費には店舗賃借料・設備購入費・広告宣伝費・ウェブサイト制作費などが含まれます。</p><p><span class="marker">補助金は後払い方式</span>のため、まず自己資金で立て替える必要があります。事業完了後に実績報告書を提出し、審査を経て補助金が振り込まれます。</p><div class="note-box">台東区では他にも経営相談やセミナーなどの創業支援メニューが充実しています。補助金だけでなく、知識やネットワークも活用して事業を成功に導きましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'taito-senior-meal-service',
    title: '台東区 高齢者配食サービス事業',
    organization: '台東区',
    type: 'local',
    maxAmount: '1食400円の自己負担（残りは区が補助）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['台東区', '高齢者', '配食サービス'],
    eligibility: '台東区に住所を有する65歳以上の一人暮らしの方または高齢者のみ世帯',
    applicationPeriod: '通年',
    description: '台東区が実施する高齢者配食サービス事業です。一人暮らし高齢者等に栄養バランスの良い食事を低価格で届け、安否確認も行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区 高齢者配食サービス事業は、<span class="marker">65歳以上の一人暮らし高齢者等に栄養バランスのとれた食事を自宅に届ける</span>事業です。</p><p>食事の配達だけでなく、配達時の安否確認も兼ねています。下町の温かいコミュニティが特徴の台東区ならではの、<span class="marker-green">食と見守りを一体化</span>させた取り組みです。自己負担は1食あたり400円で、残りは区が補助します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>台東区に住所を有する65歳以上の方</p><p>一人暮らし、または高齢者のみの世帯</p><p>調理が困難で栄養管理が必要な方</p></div><p>台東区役所高齢福祉課または地域包括支援センターに申し込みます。ケアマネジャーを通じての申し込みも可能です。</p><p>利用開始前に区の職員が訪問し、利用の必要性を確認する場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>自己負担は<strong>1食あたり400円</strong>です。昼食または夕食で、週に最大7日まで利用可能です。</p><p><span class="marker">配達時に応答がない場合は、緊急連絡先への連絡や安否確認</span>が行われます。一人暮らしの高齢者にとって、見守り機能は大きな安心材料です。</p><div class="note-box">食事療法が必要な方向けに、減塩食や糖尿病食などの特別食にも対応しています。申し込み時にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 墨田区（東京都）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'sumida-child-medical',
    title: '墨田区 子ども医療費助成制度',
    organization: '墨田区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['墨田区', '子ども医療費', '助成金'],
    eligibility: '墨田区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '墨田区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>墨田区は東京スカイツリーのお膝元であり、下町の雰囲気と現代的な街づくりが融合した地域です。子育て世帯の定住促進にも力を入れており、この医療費助成は<span class="marker-green">所得制限なし</span>で全対象世帯が利用可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>墨田区に住民登録のある子どもの保護者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>1. 墨田区役所子育て支援課または各出張所で申請</p><p>2. 子どもの健康保険証と保護者の本人確認書類を持参</p><p>3. 「子ども医療証」が交付される</p></div><p>出生届や転入届と同時に手続きできます。<strong>都内の医療機関であれば、医療証と保険証の提示で窓口負担なし</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。薬局での保険調剤も対象です。</p><p><span class="marker">都外受診の場合は、一旦窓口で支払い後に区役所で償還払い申請</span>を行ってください。</p><div class="note-box">保険適用外の費用は助成対象外です。また、交通事故など第三者行為による傷病の場合は、区役所に届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sumida-housing-eco-reform',
    title: '墨田区 住宅リフォーム助成制度',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['墨田区', '住宅リフォーム', '補助金'],
    eligibility: '墨田区内に居住し、区内業者によるリフォーム工事を行う方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '墨田区が実施する住宅リフォーム助成制度です。区内業者による住宅リフォーム工事費用の一部を最大20万円まで助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 住宅リフォーム助成制度は、<span class="marker">区民の住環境の向上と区内中小建築業者の活性化</span>を図る制度です。</p><p>墨田区は古い木造住宅も多く残る地域で、住環境の改善ニーズが高いエリアです。内装・外装の改修、設備の更新、バリアフリー化など幅広い工事が対象で、<strong>最大20万円</strong>の助成が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>墨田区に住所を有し、区内の住宅に居住していること</p><p>墨田区内の施工業者に発注する工事であること</p><p>工事費が20万円以上（税抜）であること</p><p>工事着手前に申請すること</p></div><p>墨田区役所都市計画課住宅担当に申請書と見積書を提出します。</p><p><span class="marker-green">工事の着手は必ず交付決定後に行ってください</span>。決定前に着手した工事は助成対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の<strong>10%（上限20万円）</strong>です。住民税を滞納していないことが条件となります。</p><p><span class="marker">同一住宅につき1回限りの助成</span>です。毎年度予算枠が設けられており、先着順で受付終了となります。年度初めに申請するのがおすすめです。</p><div class="highlight-box">墨田区では別途「耐震改修助成」「高齢者住宅改修費給付」もあります。耐震性やバリアフリーが目的の場合は、そちらの制度の方が助成額が大きい場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sumida-small-business-support',
    title: '墨田区 中小企業設備投資補助金',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['墨田区', '中小企業', '設備投資'],
    eligibility: '墨田区内に事業所を有する中小企業者',
    targetOccupation: '中小企業経営者',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '墨田区が実施する中小企業設備投資補助金です。区内の中小企業が行う設備投資に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区 中小企業設備投資補助金は、<span class="marker">区内の中小企業が行う生産性向上のための設備投資</span>を支援する制度です。</p><p>墨田区は伝統的にものづくりの街として知られ、中小の製造業者が多数集まります。機械設備の導入やIT機器の導入など、生産性向上や経営改善に資する設備投資に対し<strong>最大50万円</strong>を補助します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>墨田区内に事業所を有する中小企業者であること</p><p>区内の事業所で使用する設備の購入であること</p><p>導入設備の金額が50万円以上であること</p><p>区税を滞納していないこと</p></div><p>墨田区産業観光部産業振興課に申請書と見積書を提出します。<span class="marker-green">設備の導入前に申請が必要</span>です。</p><p>審査を経て交付決定後、設備を導入し、実績報告書を提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設備投資額の<strong>1/2（上限50万円）</strong>です。製造設備、検査機器、POSシステム、業務用ソフトウェアなど幅広い設備が対象です。</p><p><span class="marker">補助金は後払い方式</span>で、設備導入・支払い完了後に実績報告書を提出し、確認を経て振り込まれます。</p><div class="note-box">墨田区では他にも経営相談や販路開拓支援など、中小企業向けの支援メニューが充実しています。設備投資と合わせて経営力強化を図りましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 江東区（東京都）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'koto-child-medical',
    title: '江東区 子ども医療費助成制度',
    organization: '江東区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江東区', '子ども医療費', '助成金'],
    eligibility: '江東区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '江東区が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>江東区は豊洲・有明などの湾岸エリアの開発が進み、タワーマンションの建設ラッシュで子育て世帯が急増しています。通院・入院・調剤のいずれも助成対象で、<span class="marker-green">所得制限なし</span>で全対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江東区に住民登録のある子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかるもの</p></div><p>江東区役所子育て支援課または各出張所で申請します。出生届・転入届と同時に手続きが可能です。<strong>「子ども医療証」</strong>が交付され、都内医療機関で窓口負担なしで受診できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内医療機関では医療証の提示だけでOKです。</p><p><span class="marker">都外の医療機関を受診した場合は償還払い</span>の手続きが必要です。領収書を保管し、区役所で払い戻し申請してください。</p><div class="highlight-box">江東区は湾岸エリアの病院・クリニックも増えており、子育て世帯にとって医療アクセスも向上しています。かかりつけ医を見つけておくと安心です。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'koto-housing-seismic',
    title: '江東区 木造住宅耐震改修助成',
    organization: '江東区',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江東区', '耐震改修', '住宅補助'],
    eligibility: '江東区内に所在する昭和56年5月以前に建築された木造住宅の所有者',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '江東区が実施する木造住宅耐震改修助成制度です。旧耐震基準で建てられた木造住宅の耐震改修に最大150万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 木造住宅耐震改修助成は、<span class="marker">昭和56年5月以前の旧耐震基準で建てられた木造住宅の耐震改修</span>を支援する制度です。</p><p>江東区は地盤が低い地域も多く、地震による被害リスクが比較的高いエリアです。古い木造住宅の耐震化を進めることで、区民の生命と財産を守ることを目的としています。改修工事に対し<strong>最大150万円</strong>が助成されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建物の条件"><p>江東区内に所在する木造住宅（在来工法2階建て以下）</p><p>昭和56年5月31日以前に建築されたもの</p><p>耐震診断で耐震性が不足していると判定されたもの</p></div><p>まず江東区の無料耐震診断を受けてください。<span class="marker-green">耐震診断は無料</span>で区が派遣する診断士が実施します。</p><p>診断結果に基づいて改修計画を立て、工事着手前に江東区都市整備部建築課に助成を申請します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事に対し<strong>最大150万円</strong>が助成されます。高齢者のみの世帯や住民税非課税世帯には、上限が引き上げられる場合もあります。</p><p><span class="marker">必ず工事契約・着手前に助成申請が必要</span>です。着手後の申請は受け付けられません。</p><div class="note-box">全面改修が難しい場合は、耐震シェルターや防災ベッドの設置に対する助成もあります。まずは耐震診断を受けて、最適な対策を検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'koto-senior-medical',
    title: '江東区 高齢者肺炎球菌ワクチン接種助成',
    organization: '江東区',
    type: 'local',
    maxAmount: '接種費用の一部助成（自己負担1,500円）',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['江東区', '予防接種', '高齢者'],
    eligibility: '江東区に住所を有する65歳以上の方で、過去に肺炎球菌ワクチンを接種したことがない方',
    applicationPeriod: '通年',
    description: '江東区が実施する高齢者向け肺炎球菌ワクチン接種助成です。65歳以上の方の接種費用を助成し、自己負担1,500円で接種できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江東区 高齢者肺炎球菌ワクチン接種助成は、<span class="marker">65歳以上の区民を対象に肺炎球菌ワクチンの接種費用を助成</span>する制度です。</p><p>肺炎は高齢者の死因上位にあり、肺炎球菌ワクチンの接種は予防に効果的です。通常8,000円前後かかる接種費用が、この助成により<strong>自己負担1,500円</strong>で受けられます。江東区では高齢者の健康長寿を推進するため、この助成を行っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>江東区に住民登録のある65歳の方（定期接種対象年度）</p><p>66歳以上で過去に接種歴がない方（任意接種助成）</p><p>生活保護受給者は自己負担なし</p></div><p>定期接種対象者には区から個別に通知が届きます。届いた予診票を持って指定医療機関で接種してください。</p><p><span class="marker-green">事前の申請手続きは不要</span>で、医療機関に直接予約すれば助成が適用されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>自己負担は<strong>1,500円</strong>です。生活保護受給者は無料で接種できます。通常の接種費用（約8,000円）との差額は区が負担します。</p><p><span class="marker">過去に23価肺炎球菌ワクチンを接種したことがある方は助成対象外</span>です。接種歴が不明な場合はかかりつけ医に相談してください。</p><div class="highlight-box">肺炎球菌ワクチンとインフルエンザワクチンの同時接種も可能です。かかりつけ医に相談して、効率よく予防接種を受けましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/',
    publishedAt: '2026-03-11',
  },
];
