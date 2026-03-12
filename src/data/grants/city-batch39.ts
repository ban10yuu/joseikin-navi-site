import { Grant } from '@/lib/types';

export const cityGrantsBatch39: Grant[] = [
  // ────────────────────────────────────────────────
  // 福岡市（福岡県）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'fukuoka-city-childcare-subsidy',
    title: '福岡市 子育て世帯生活支援特別給付金',
    organization: '福岡市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['福岡市', '子育て支援', '給付金'],
    eligibility: '福岡市に住所を有する住民税非課税世帯等の子育て世帯',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '福岡市が実施する子育て世帯生活支援特別給付金です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 子育て世帯生活支援特別給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、生活の安定を図るために児童1人あたり5万円を支給する制度です。</p><p>九州最大の都市である福岡市は、人口約164万人を擁し、天神・博多エリアを中心に経済活動が盛んな一方、子育て世帯の生活費負担も大きくなっています。食費や光熱費の高騰を受け、低所得の子育て世帯への支援を強化しています。</p><p><span class="marker-green">児童扶養手当受給者は申請不要で自動的に口座へ振り込まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福岡市に住民登録があり、18歳未満の児童（障がい児の場合は20歳未満）を養育する住民税非課税世帯等が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当受給者（ひとり親世帯）</p><p>住民税均等割が非課税の子育て世帯</p><p>家計が急変し住民税非課税相当となった世帯</p></div><p>児童扶養手当受給者は<strong>申請不要</strong>で支給されます。その他の対象世帯は、福岡市こども未来局こども家庭課または各区保健福祉センターで申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり5万円</strong>です。児童が複数いる場合は人数分が支給されます。</p><p><span class="marker">家計急変による申請の場合は、収入がわかる書類（給与明細等）の提出</span>が必要です。審査に1〜2か月程度かかる場合があります。</p><div class="note-box">生活保護を受給している世帯も対象となりますが、収入として認定されない取扱いとなっています。他の自治体で同様の給付金を受給済みの場合は対象外となりますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-birth-bonus',
    title: '福岡市 出産・子育て応援給付金',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['福岡市', '出産祝い', '給付金'],
    eligibility: '福岡市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '福岡市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出産後に5万円（子育て応援給付金）</span>の計10万円を支給する制度です。</p><p>福岡市は全国的にも若い世代の流入が多い都市で、出生率の維持・向上に積極的に取り組んでいます。この給付金は伴走型相談支援とセットで実施されており、妊娠期から出産・育児まで切れ目のないサポートを提供しています。</p><p><span class="marker-green">所得制限はなく、福岡市に住むすべての妊婦・出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付金の流れ"><p>妊娠届出 → 面談 → 出産応援給付金5万円</p><p>出生届出 → 面談 → 子育て応援給付金5万円</p></div><p>妊娠届出時に各区保健福祉センターで保健師等と面談を行い、出産応援給付金の申請をします。出産後はこんにちは赤ちゃん訪問等の面談を経て、子育て応援給付金を申請します。</p><p><span class="marker">それぞれの面談を受けることが支給の条件</span>です。面談では妊娠・出産・育児に関する相談ができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>です。多胎妊娠の場合、子育て応援給付金は児童数分が支給されます。</p><p><span class="marker">申請期限は出産応援給付金が妊娠中、子育て応援給付金が生後4か月頃まで</span>です。期限を過ぎると受給できなくなる場合があります。</p><div class="highlight-box">福岡市では産前・産後サポートとして、産後ケア事業（宿泊型・デイサービス型・訪問型）も充実しています。給付金と合わせて活用することで、安心して出産・育児に臨めます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-housing-purchase',
    title: '福岡市 住宅取得支援補助金',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['福岡市', '住宅取得', '補助金'],
    eligibility: '福岡市内の指定エリアで新たに住宅を取得する子育て世帯・若年世帯',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '福岡市が実施する住宅取得支援補助金です。市内指定エリアでの住宅取得に最大50万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 住宅取得支援補助金は、<span class="marker">市内の居住誘導区域等で新たに住宅を取得する子育て世帯・若年世帯</span>を対象に、住宅取得費用の一部を補助する制度です。</p><p>福岡市は都市の発展が著しく、天神ビッグバンや博多コネクティッドなどの都市再開発が進んでいます。一方で、周辺部の住宅地への若年層の定住促進も重要な政策課題であり、コンパクトシティの実現を目指してこの補助制度が設けられています。</p><p>補助額は条件により異なり、<strong>最大50万円</strong>です。<span class="marker-green">省エネ住宅や三世代同居・近居の場合は加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>福岡市内の居住誘導区域等で住宅を新たに取得すること</p><p>中学生以下の子どもがいる世帯、または夫婦ともに40歳未満の世帯</p><p>市税の滞納がないこと</p><p>取得住宅に5年以上居住する意思があること</p></div><p>福岡市住宅都市局住宅計画課に申請書と必要書類を提出します。売買契約書、住民票、所得証明書などが必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。引渡し前の事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、省エネ性能の高い住宅（ZEH等）の場合は10万円加算、三世代同居・近居の場合はさらに10万円加算され、<strong>最大50万円</strong>となります。</p><p><span class="marker">年度の予算に限りがあるため、先着順で受付終了</span>となることがあります。早めの申請をおすすめします。</p><div class="note-box">投資用物件やセカンドハウスは対象外です。福岡市では住宅ローンの利子補給制度は実施していませんが、福岡県の住宅関連融資制度と併用できる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-newlywed-rent',
    title: '福岡市 新婚世帯住居費支援事業',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['福岡市', '新婚支援', '住居費補助'],
    eligibility: '福岡市内に居住する婚姻届提出後1年以内の新婚世帯',
    applicationPeriod: '毎年4月〜翌年3月',
    description: '福岡市が実施する新婚世帯住居費支援事業です。新婚世帯の住居費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 新婚世帯住居費支援事業は、<span class="marker">婚姻届提出後1年以内の新婚世帯</span>を対象に、住宅取得費用や家賃、引越し費用を補助する制度です。</p><p>福岡市は20〜30代の若い世代が多く暮らす活気ある都市ですが、近年の不動産価格上昇により新生活を始める際の経済的負担が増しています。結婚に伴う住居費用を軽減することで、若年世帯の定住を促進しています。</p><p>補助上限は<strong>30万円</strong>で、<span class="marker-green">夫婦ともに29歳以下の場合は上限60万円に引き上げ</span>られます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出日から1年以内であること</p><p>夫婦の合計所得が500万円未満であること</p><p>福岡市内の住宅に居住していること</p><p>市税の滞納がないこと</p></div><p>福岡市こども未来局こども政策課に申請書と必要書類を提出します。婚姻届受理証明書、住民票、世帯の所得証明書、住居の賃貸契約書（賃貸の場合）などが必要です。</p><p><span class="marker">婚姻届提出日の年度内に申請が必要</span>です。年度をまたぐと申請できなくなる場合がありますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助対象経費は住宅取得費、家賃（敷金・礼金含む）、引越し費用で、<strong>合計上限30万円</strong>です。夫婦ともに29歳以下の場合は上限60万円となります。</p><p><span class="marker">勤務先から住宅手当が支給されている場合は、その分を差し引いた額が補助対象</span>となります。</p><div class="highlight-box">福岡市では新婚世帯向けの市営住宅優先入居制度もあります。住居費支援事業と合わせて検討することで、新生活のスタートをよりスムーズに進められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-infertility',
    title: '福岡市 不妊治療費助成事業',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['福岡市', '不妊治療', '助成金'],
    eligibility: '福岡市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年',
    description: '福岡市が実施する不妊治療費助成事業です。保険適用後の自己負担分について最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、体外受精や顕微授精などの高度な治療では自己負担額が依然として高額です。福岡市は若い世代の定住促進を重要施策に位置づけており、経済的理由で治療をあきらめることがないよう、独自の助成を行っています。</p><p>助成額は1回の治療につき<strong>最大30万円</strong>です。<span class="marker-green">所得制限は撤廃されており、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福岡市に住民登録がある法律上の婚姻関係にある夫婦（事実婚を含む）で、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成事業申請書</p><p>医療機関発行の受診等証明書</p><p>治療費の領収書（原本）</p><p>夫婦の住民票</p><p>健康保険証の写し</p></div><p>福岡市こども未来局こども健康課に申請書類を提出します。<strong>治療終了日の翌日から60日以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき保険適用後の自己負担分で最大30万円</strong>です。通算の助成回数に制限があります。</p><p><span class="marker">先進医療として実施された治療（保険適用外の併用療法）も一部助成対象</span>となる場合があります。詳しくは窓口でご確認ください。</p><div class="note-box">助成の対象は保険適用の特定不妊治療（体外受精・顕微授精等）です。タイミング法や人工授精のみの場合は対象外となります。男性不妊治療も対象に含まれますので、夫婦でご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-scholarship',
    title: '福岡市 給付型奨学金制度',
    organization: '福岡市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '福岡県',
    tags: ['福岡市', '奨学金', '教育支援'],
    eligibility: '福岡市に住所を有する経済的に修学困難な高校生・大学生等',
    applicationPeriod: '毎年4月〜5月',
    description: '福岡市が実施する給付型奨学金制度です。経済的に修学が困難な学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 給付型奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、返済不要の奨学金を給付する制度です。</p><p>アジアの玄関口として国際色豊かな福岡市には、多くの教育機関が集積しています。経済的な理由で進学や学業継続を断念する若者を支援するため、市独自の給付型奨学金制度を運用しています。</p><p>給付額は<strong>高校生が月額1万円、大学生等が月額3万円</strong>です。<span class="marker-green">返済不要で、卒業後の負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>福岡市に住民登録があること</p><p>高等学校、大学、短期大学、専門学校等に在学中であること</p><p>世帯の所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>毎年4月〜5月の募集期間に福岡市教育委員会教育支援課へ申請書を提出します。在学証明書、世帯の所得証明書、成績証明書などが必要です。</p><p><span class="marker">選考は書類審査により行われ、結果は7月頃に通知</span>されます。定員に限りがあるため、書類の不備がないよう注意しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生が月額1万円（年額12万円）、大学生等が月額3万円（年額36万円）</strong>です。年2回に分けて口座に振り込まれます。</p><p><span class="marker">日本学生支援機構の給付型奨学金や他の奨学金との併給が可能</span>な場合がありますので、窓口で確認してください。</p><div class="highlight-box">福岡市では奨学金のほか、入学準備金の貸付制度（無利子）も設けています。高校入学時に10万円、大学入学時に30万円を上限に借りることができ、卒業後に分割返済となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-sme-support',
    title: '福岡市 中小企業デジタル化支援補助金',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['福岡市', '中小企業支援', 'DX補助金'],
    eligibility: '福岡市内に事業所を有する中小企業・小規模事業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '福岡市が実施する中小企業デジタル化支援補助金です。業務効率化やDX推進にかかる経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 中小企業デジタル化支援補助金は、<span class="marker">市内の中小企業・小規模事業者がITツールやデジタル技術を導入する際の費用</span>を補助する制度です。</p><p>福岡市は「エンジニアフレンドリーシティ」を宣言し、スタートアップ支援や先端技術の活用に力を入れています。市内の中小企業がデジタル化を進め、生産性向上や新たなビジネスモデルの構築に取り組むことを後押ししています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は100万円</strong>です。<span class="marker-green">クラウドサービス導入、ECサイト構築、業務管理システムの導入などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>クラウドサービス・SaaS利用料（初年度分）</p><p>ECサイト・ホームページ制作費</p><p>業務管理・会計ソフト等の導入費</p><p>IT関連機器の購入費</p><p>専門家によるコンサルティング費用</p></div><p>福岡市経済観光文化局中小企業振興課に事業計画書と申請書を提出します。審査では事業の具体性と効果の見込みが評価されます。</p><p><span class="marker">申請前にIT専門家による無料相談（福岡市よろず支援拠点）を利用することを推奨</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限100万円</strong>です。補助金は後払い（実績報告後に支給）となります。</p><p><span class="marker">交付決定前に契約・購入した経費は対象外</span>です。必ず交付決定後に事業を開始してください。</p><div class="note-box">単なるパソコンの買い替えや、汎用性の高い家電製品の購入は対象外です。導入するツールがどのように業務効率化につながるかを事業計画書に明記する必要があります。国の「IT導入補助金」との併用はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-nursing-equipment',
    title: '福岡市 介護用品支給事業',
    organization: '福岡市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['福岡市', '介護用品', '支給事業'],
    eligibility: '福岡市に住所を有する要介護4・5の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '福岡市が実施する介護用品支給事業です。在宅で重度要介護者を介護する家庭に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつや尿取りパッドなどの介護用品を支給する制度です。</p><p>福岡市は政令指定都市の中でも高齢化率が比較的低い都市ですが、在宅介護の負担軽減は重要な課題です。介護用品の継続的な購入費用は家計への負担が大きく、この事業により経済的な支援を行っています。</p><p>支給額は<strong>月額6,250円相当</strong>の介護用品です。<span class="marker-green">住民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福岡市に住民登録がある要介護4または5の認定を受けた65歳以上の高齢者を在宅で介護している方で、本人および介護者が住民税非課税である世帯が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>被介護者の介護保険被保険者証の写し</p><p>世帯の課税状況がわかる書類</p></div><p>各区保健福祉センター介護保険担当で申請を行います。申請が承認されると、<strong>毎月カタログから選んだ介護用品が自宅に届けられます</strong>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当</strong>の介護用品（紙おむつ、尿取りパッド、清拭剤、使い捨て手袋など）が支給されます。カタログから自由に組み合わせて選べます。</p><p><span class="marker">入院中や介護施設に入所している期間は支給対象外</span>です。在宅に戻った際に再度申請が必要です。</p><div class="highlight-box">福岡市では介護用品支給のほか、家族介護者向けの交流会や介護技術講習会も開催しています。介護の悩みを共有し、専門家からアドバイスを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuoka-city-elderly-support',
    title: '福岡市 高齢者住み替え支援事業',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '福岡県',
    tags: ['福岡市', '高齢者支援', '住み替え'],
    eligibility: '福岡市に住所を有する65歳以上の方で、バリアフリー住宅への住み替えを希望する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '福岡市が実施する高齢者住み替え支援事業です。高齢者のバリアフリー住宅への住み替え費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 高齢者住み替え支援事業は、<span class="marker">65歳以上の高齢者がバリアフリー対応の住宅に住み替える際の費用</span>を補助する制度です。</p><p>福岡市では高齢者が住み慣れた地域で安全に暮らし続けられるよう、住環境の改善を支援しています。階段のある住宅から段差のないマンションへの住み替えなど、高齢期の身体機能に合った住まいへの移行を後押しします。</p><p>補助上限は<strong>20万円</strong>で、<span class="marker-green">引越し費用、仲介手数料、敷金の一部が補助対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>福岡市内に住所を有する65歳以上の方</p><p>住み替え先がバリアフリー要件を満たす住宅であること</p><p>世帯収入が基準額以下であること</p><p>市税の滞納がないこと</p></div><p>各区保健福祉センターまたは福岡市住宅都市局住宅相談コーナーで申請できます。住み替え先の住宅がバリアフリー要件を満たしているかの確認書類も必要です。</p><p><span class="marker">住み替え前に申請が必要です</span>。住み替え完了後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は引越し費用・仲介手数料・敷金等の合計で、<strong>上限20万円</strong>です。実費が上限を下回る場合は実費が支給されます。</p><p><span class="marker">住み替え先は福岡市内の住宅に限ります</span>。市外への転出を伴う住み替えは対象外です。</p><div class="note-box">福岡市では住み替え支援のほか、高齢者向けの住宅あんしん相談（入居支援・見守り）も実施しています。賃貸住宅を借りにくい高齢者のために、協力不動産店の紹介も行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 熊本市（熊本県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kumamoto-city-childcare-subsidy',
    title: '熊本市 子育て世帯応援給付金',
    organization: '熊本市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '熊本県',
    tags: ['熊本市', '子育て支援', '給付金'],
    eligibility: '熊本市に住所を有する住民税非課税世帯等の子育て世帯',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '熊本市が実施する子育て世帯応援給付金です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 子育て世帯応援給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、児童1人あたり5万円を支給する制度です。</p><p>熊本市は九州の中核都市として約74万人が暮らし、熊本城を中心とした歴史ある城下町です。2016年の熊本地震からの復興を経て、子育て支援の充実にも力を入れています。物価高騰の影響を受ける低所得世帯の子育てを経済面から支えます。</p><p><span class="marker-green">児童扶養手当受給世帯は申請不要で自動的に口座へ振り込まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>熊本市に住民登録があり、18歳未満の児童を養育する住民税非課税世帯等が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当受給者（ひとり親世帯）</p><p>住民税均等割が非課税の子育て世帯</p><p>家計が急変し非課税相当となった世帯</p></div><p>児童扶養手当受給者は<strong>申請不要</strong>です。その他の対象世帯は熊本市こども政策課または各区役所保健こども課で申請してください。収入状況の確認書類が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり5万円</strong>です。対象児童が複数いる場合は人数分が支給されます。</p><p><span class="marker">家計急変での申請は、直近の収入を証明する書類（給与明細、離職票等）の提出</span>が必要です。</p><div class="note-box">本給付金は非課税所得として扱われ、生活保護の収入認定からも除外されます。他の自治体で同種の給付金をすでに受給している場合は対象外となります。申請期限にご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-birth-bonus',
    title: '熊本市 出産・子育て応援給付金',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '熊本県',
    tags: ['熊本市', '出産応援', '給付金'],
    eligibility: '熊本市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '熊本市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 出産・子育て応援給付金は、<span class="marker">妊娠届出時の面談後に5万円、出産後の面談後に5万円</span>の合計10万円を支給する制度です。</p><p>熊本市は「くまもとし版ネウボラ」として、妊娠期から子育て期まで切れ目のない支援体制を構築しています。2016年の熊本地震を経て、子育て世帯が安心して暮らせる環境づくりへの取組みがさらに強化されました。</p><p><span class="marker-green">所得制限はなく、熊本市に住むすべての妊婦・出産世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給の流れ"><p>妊娠届出 → 保健師面談 → 出産応援給付金5万円</p><p>出生届出 → 乳児家庭訪問 → 子育て応援給付金5万円</p></div><p>妊娠届出時に各区役所保健こども課の保健師と面談を行い、出産応援給付金の申請をします。出産後は乳児家庭全戸訪問の面談を経て、子育て応援給付金を申請します。</p><p><span class="marker">面談を受けることが支給の必須条件</span>です。面談では妊娠・出産・子育てに関する不安や悩みの相談ができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援5万円＋子育て応援5万円＝合計10万円</strong>です。双子以上の場合、子育て応援給付金は児童数×5万円です。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>。特に子育て応援給付金は出生後の面談時期を逃さないよう注意してください。</p><div class="highlight-box">熊本市では給付金に加え、産後ケア事業（ショートステイ・デイケア）も実施しています。産後の心身の回復に不安がある方は、助産院や医療機関での産後ケアを利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-housing-eco',
    title: '熊本市 住宅省エネ改修補助金',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '熊本県',
    tags: ['熊本市', '省エネ改修', '補助金'],
    eligibility: '熊本市内に住所を有し、自己居住用住宅の省エネ改修を行う方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '熊本市が実施する住宅省エネ改修補助金です。断熱改修や高効率設備の導入に最大50万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 住宅省エネ改修補助金は、<span class="marker">既存住宅の断熱性能向上や高効率設備への更新工事</span>に対して費用の一部を補助する制度です。</p><p>熊本市は夏の暑さが厳しい盆地特有の気候であり、住宅の断熱性能向上は光熱費削減と快適性向上の両面で大きな効果があります。2050年カーボンニュートラルの実現に向けて、家庭部門のCO2排出削減を推進しています。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">窓の断熱改修、壁・天井の断熱材追加、高効率給湯器の設置などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>窓の断熱改修（内窓設置、複層ガラス化）</p><p>壁・天井・床の断熱材追加</p><p>高効率給湯器（エコキュート等）の設置</p><p>LED照明への一括交換</p><p>太陽光発電システムの設置（蓄電池含む）</p></div><p>熊本市環境局環境政策課に申請書と見積書を提出します。省エネ診断の結果や改修後の性能見込みを記載した書類も必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定前に着工した工事は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限50万円</strong>です。窓の断熱改修は特に費用対効果が高く、多くの申請が寄せられています。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となります。年度初めの早い時期に申請することをおすすめします。</p><div class="note-box">国の「先進的窓リノベ事業」や「給湯省エネ事業」と併用できる場合があります。ただし、同一の工事に対して国と市の補助金の合計が対象経費を超えないよう調整が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-disability-medical',
    title: '熊本市 重度心身障がい者医療費助成制度',
    organization: '熊本市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '熊本県',
    tags: ['熊本市', '障がい者医療', '助成金'],
    eligibility: '熊本市に住所を有する重度の身体障がい者・知的障がい者・精神障がい者',
    applicationPeriod: '通年',
    description: '熊本市が実施する重度心身障がい者医療費助成制度です。重度障がい者の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 重度心身障がい者医療費助成制度は、<span class="marker">重度の障がいを持つ方の医療費自己負担分</span>を助成する制度です。</p><p>熊本市はバリアフリーの街づくりを推進しており、障がい者が安心して医療を受けられる環境整備に取り組んでいます。通院・入院・調剤にかかる保険診療の自己負担分が助成の対象となり、障がい者とその家族の経済的負担を大幅に軽減しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>熊本市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A1またはA2</p><p>精神障害者保健福祉手帳1級</p><p>特別児童扶養手当1級該当の障がい児</p></div><p>各区役所福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類、振込先口座情報が必要です。<strong>「重度心身障がい者医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が助成</strong>されます。熊本県内の医療機関では受給資格者証を提示することで窓口負担が軽減されます。</p><p><span class="marker">一定以上の所得がある場合は助成対象外</span>となりますのでご注意ください。所得基準は世帯構成により異なります。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は対象外です。入院時の食事療養費も自己負担となります。65歳以上で新たに障がい者手帳を取得した場合は、後期高齢者医療制度との調整が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-school-lunch',
    title: '熊本市 学校給食費補助事業',
    organization: '熊本市',
    type: 'local',
    maxAmount: '給食費の全額または一部補助',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '熊本県',
    tags: ['熊本市', '学校給食', '教育支援'],
    eligibility: '熊本市立小中学校に在籍する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '熊本市が実施する学校給食費補助事業です。就学援助制度の一環として、給食費の全額または一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 学校給食費補助事業は、<span class="marker">経済的に困窮している世帯の児童生徒の学校給食費</span>を補助する制度です。就学援助制度の給食費支給として実施されています。</p><p>熊本市は地産地消を推進し、熊本県産の食材を積極的に学校給食に取り入れています。しかし食材費の高騰により給食費の保護者負担が増す中、経済的に困難な世帯の負担を軽減するためにこの補助制度を運用しています。</p><p><span class="marker-green">準要保護世帯（生活保護基準の1.3倍程度の所得以下）まで対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="就学援助の主な支給内容"><p>学校給食費（全額）</p><p>学用品費・通学用品費</p><p>修学旅行費・校外活動費</p><p>新入学用品費</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要事項を記入し、学校または熊本市教育委員会学務課に提出してください。</p><p><span class="marker">年度途中の転入や家計急変の場合も随時受け付けています</span>。所得証明書等の収入がわかる書類が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>認定されると<strong>学校給食費が全額免除</strong>されます。小学校で月額約4,500円、中学校で月額約5,200円程度の負担がなくなります。</p><p><span class="marker">認定の可否は世帯全体の所得で判定</span>され、結果は6月頃に通知されます。</p><div class="highlight-box">熊本市では給食費補助のほか、学用品費（小学校年額約1.1万円、中学校年額約2.2万円）や新入学用品費（小学校約5.4万円、中学校約6.3万円）なども就学援助として支給されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-uij-turn',
    title: '熊本市 UIJターン就職支援事業',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '熊本県',
    tags: ['熊本市', 'UIJターン', '移住就職'],
    eligibility: '東京圏から熊本市へ移住し、対象企業に就職または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '熊本市が実施するUIJターン就職支援事業です。東京圏から移住し就職・創業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 UIJターン就職支援事業は、<span class="marker">東京23区に在住または東京圏から23区に通勤していた方が熊本市に移住し就職・創業</span>した場合に支援金を支給する制度です。</p><p>熊本市はTSMC（台湾積体電路製造）の進出に伴い半導体関連産業の集積が急速に進んでおり、高度人材の確保が喫緊の課題となっています。首都圏からの人材獲得に向けて、移住支援金制度を充実させています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円の加算</span>もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から23区へ通勤していたこと</p><p>熊本市に転入後3か月以上1年以内に申請すること</p><p>熊本県マッチングサイト掲載企業への就業、またはテレワーク・創業</p><p>5年以上継続して熊本市に居住する意思があること</p></div><p>熊本市経済政策課に申請書類を提出します。就業証明書または創業に関する書類が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子ども1人につき100万円が加算されます。</p><p><span class="marker">5年以内に熊本市から転出した場合は支援金の返還</span>が求められます。長期的な生活設計を立てた上で申請しましょう。</p><div class="highlight-box">熊本市では半導体関連企業の集積が進み、エンジニアや技術者の求人が急増しています。UIJターン支援金と合わせて、熊本県の就職マッチングサイトで求人情報を確認することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-nursing-home-reform',
    title: '熊本市 介護保険住宅改修費支給事業',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '熊本県',
    tags: ['熊本市', '介護住宅改修', '支給事業'],
    eligibility: '熊本市に住所を有する要介護・要支援認定を受けた方',
    applicationPeriod: '通年',
    description: '熊本市が実施する介護保険住宅改修費支給事業です。要介護者の自宅のバリアフリー改修に最大20万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 介護保険住宅改修費支給事業は、<span class="marker">要介護または要支援の認定を受けた方が自宅をバリアフリー改修する際</span>に、費用の一部を支給する制度です。</p><p>熊本市では高齢者が住み慣れた自宅で安心して暮らし続けられるよう、在宅介護の環境整備を支援しています。手すりの取り付けや段差の解消など、日常生活の安全性を高める改修工事が対象となります。</p><p>支給上限は<strong>20万円</strong>（うち自己負担1〜3割）で、<span class="marker-green">介護保険の被保険者であれば利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取り付け</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取り替え</p><p>洋式便器等への便器の取り替え</p></div><p>改修工事の前に熊本市介護保険課またはケアマネジャーに相談し、事前申請を行います。工事見積書、改修理由書、工事図面などが必要です。</p><p><span class="marker">必ず工事着手前に事前申請を行ってください</span>。事前申請なく着工した場合は支給対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給上限額は<strong>20万円</strong>で、自己負担割合（1割〜3割）を差し引いた額が支給されます。1割負担の場合、実質的に18万円の補助を受けられます。</p><p><span class="marker">原則として1人につき20万円が生涯の上限</span>です。ただし、要介護度が3段階以上上がった場合や転居した場合は再度利用できます。</p><div class="note-box">改修工事は介護保険の指定事業者でなくても施工可能ですが、ケアマネジャーによる「住宅改修が必要な理由書」の作成が必須です。まずは担当ケアマネジャーに相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-energy-support',
    title: '熊本市 省エネ家電買い替え補助金',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '熊本県',
    tags: ['熊本市', '省エネ', '家電補助'],
    eligibility: '熊本市に住所を有する市民',
    applicationPeriod: '毎年6月〜翌年1月（予算に達し次第終了）',
    description: '熊本市が実施する省エネ家電買い替え補助金です。省エネ性能の高いエアコンや冷蔵庫への買い替えに最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 省エネ家電買い替え補助金は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買い替え</span>に対して費用の一部を補助する制度です。</p><p>盆地特有の厳しい暑さで知られる熊本市では、夏場のエアコン使用が欠かせません。古い家電から省エネ性能の高い製品に買い替えることで、光熱費の削減とCO2排出量の低減を同時に実現できます。</p><p>補助額は購入金額の<strong>10%（上限5万円）</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる家電"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p><p>※いずれも買い替え（古い製品のリサイクルを伴うもの）が条件</p></div><p>熊本市環境局環境政策課に申請書と必要書類を提出します。購入した製品の領収書、家電リサイクル券の写し、製品の省エネ性能がわかるカタログ等が必要です。</p><p><span class="marker">購入後3か月以内に申請</span>してください。市内の販売店での購入が条件となる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入金額（税抜）の10%で、<strong>上限は5万円</strong>です。エアコンと冷蔵庫を同時に買い替える場合はそれぞれ申請できます。</p><p><span class="marker">予算に限りがあるため先着順で終了</span>となります。購入前に受付状況を確認することをおすすめします。</p><div class="note-box">新規購入（買い替えでない場合）は対象外です。古い家電のリサイクル処分を証明する書類が必要ですので、家電リサイクル券は必ず保管してください。業務用の家電は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumamoto-city-seismic-diagnosis',
    title: '熊本市 木造住宅耐震診断補助事業',
    organization: '熊本市',
    type: 'local',
    maxAmount: '診断費用の全額補助（上限あり）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '熊本県',
    tags: ['熊本市', '耐震診断', '防災'],
    eligibility: '熊本市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '熊本市が実施する木造住宅耐震診断補助事業です。旧耐震基準の木造住宅の耐震診断費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 木造住宅耐震診断補助事業は、<span class="marker">1981年5月31日以前に着工された旧耐震基準の木造住宅</span>の耐震診断費用を補助する制度です。</p><p>2016年の熊本地震では震度7が2回観測されるという前例のない被害を経験した熊本市は、住宅の耐震化を最重要政策として推進しています。まず耐震診断で住宅の安全性を確認し、必要に応じて耐震改修へつなげることを目的としています。</p><p><span class="marker-green">診断費用の自己負担はほぼゼロ</span>で、市が費用を全額補助します（上限あり）。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>熊本市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されていること</p><p>2階建て以下の戸建て住宅であること</p><p>過去にこの制度による耐震診断を受けていないこと</p></div><p>熊本市都市建設局建築政策課に申請書を提出します。建築確認通知書または固定資産税課税明細書で建築年を確認できる書類が必要です。</p><p><span class="marker">市が派遣する耐震診断士が現地調査を行います</span>。所有者の立ち会いが必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断にかかる費用を市が全額負担</strong>します（一般的な木造住宅で数万円程度の診断費用が無料）。所有者の自己負担は原則ありません。</p><p><span class="marker">診断の結果、耐震性が不足している場合は耐震改修補助金（別制度）を利用可能</span>です。改修費用の一部が補助されます。</p><div class="highlight-box">熊本市は2016年の熊本地震の教訓から、耐震化率の向上を積極的に推進しています。耐震診断を受けることで住まいの安全性を客観的に把握でき、家族の命を守る第一歩となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 千代田区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'chiyoda-childcare-subsidy',
    title: '千代田区 次世代育成手当',
    organization: '千代田区',
    type: 'local',
    maxAmount: '児童1人あたり月額5,000円',
    maxAmountNum: 6,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['千代田区', '次世代育成', '手当'],
    eligibility: '千代田区に住所を有する高校生相当年齢までの児童を養育する保護者',
    applicationPeriod: '通年',
    description: '千代田区が実施する次世代育成手当です。高校生相当年齢までの児童1人あたり月額5,000円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 次世代育成手当は、<span class="marker">高校生相当年齢（18歳の年度末）までの児童を養育する保護者</span>に対し、児童1人あたり月額5,000円を支給する区独自の手当です。</p><p>千代田区は皇居を擁する都心の中枢区で、居住人口は約6.7万人と23区で最も少ないものの、定住人口の維持・増加に向けた子育て支援策が充実しています。国の児童手当に上乗せする形で、区独自の給付を行っています。</p><p><span class="marker-green">所得制限なしで、千代田区に住むすべての対象世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>千代田区に住民登録がある18歳到達後の最初の3月31日までの児童を養育する保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>次世代育成手当認定請求書</p><p>申請者の本人確認書類</p><p>振込先口座情報</p><p>児童と同居していない場合は養育状況の申立書</p></div><p>千代田区子ども総務課に認定請求書を提出します。出生届や転入届と同時に手続きできます。<strong>申請月の翌月分から支給開始</strong>となりますので、早めに申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり月額5,000円</strong>（年額60,000円）です。年3回（6月・10月・2月）にまとめて口座に振り込まれます。</p><p><span class="marker">国の児童手当とは別に支給されるため、両方を受給可能</span>です。児童手当の申請とは別に次世代育成手当の申請が必要です。</p><div class="note-box">千代田区外へ転出した場合は転出月の翌月から支給が停止されます。児童が施設入所中の場合や里親に委託されている場合は対象外となることがあります。毎年6月に現況届の提出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-birth-bonus',
    title: '千代田区 誕生準備手当',
    organization: '千代田区',
    type: 'local',
    maxAmount: '最大45万円',
    maxAmountNum: 45,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['千代田区', '誕生準備', '出産支援'],
    eligibility: '千代田区に住所を有する妊婦',
    applicationPeriod: '通年',
    description: '千代田区が実施する誕生準備手当です。妊婦1人あたり最大45万円を支給し、出産準備を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 誕生準備手当は、<span class="marker">千代田区に住民登録がある妊婦に対し、出産準備費用として最大45万円</span>を支給する区独自の手当です。</p><p>千代田区は都心部の高い生活コストの中で出産・子育てを行う世帯を手厚く支援しており、この誕生準備手当は全国でもトップクラスの支給額です。国の出産・子育て応援給付金（10万円）に区独自の上乗せ分を加え、妊娠・出産に伴う経済的負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限なしで、千代田区に住むすべての妊婦が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給の流れ"><p>妊娠届出 → 保健師面談 → 出産応援給付金5万円</p><p>出産前面談 → 区独自の誕生準備手当（上乗せ分）</p><p>出生届出 → 面談 → 子育て応援給付金5万円</p></div><p>妊娠届出時に千代田保健所で保健師と面談を行い申請します。面談では妊娠・出産に関する不安の相談や、利用できる制度の案内を受けられます。</p><p><span class="marker">妊娠届出後から出産前までに面談を受けることが条件</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給総額は国の給付金と合わせて<strong>最大45万円</strong>です。出産応援給付金5万円、誕生準備手当（区独自上乗せ分）、子育て応援給付金5万円で構成されています。</p><p><span class="marker">多胎妊娠（双子以上）の場合は子育て応援給付金が児童数分支給</span>されます。</p><div class="highlight-box">千代田区は出産費用助成も別途実施しており、出産にかかった費用のうち健康保険の出産育児一時金を超えた分を助成しています。誕生準備手当と合わせて活用することで、出産費用の大部分をカバーできます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-housing-purchase',
    title: '千代田区 定住促進住宅取得助成制度',
    organization: '千代田区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['千代田区', '住宅取得', '定住促進'],
    eligibility: '千代田区内で新たに住宅を取得するファミリー世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '千代田区が実施する定住促進住宅取得助成制度です。区内での住宅取得に最大100万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 定住促進住宅取得助成制度は、<span class="marker">千代田区内で新たにファミリー向け住宅を取得する世帯</span>に対し、取得費用の一部を助成する制度です。</p><p>千代田区は昼間人口が80万人を超える一方、夜間の居住人口は約6.7万人にとどまります。バブル期の地価高騰で人口が激減した経緯があり、定住人口の回復・維持を重要政策として位置づけています。</p><p>助成上限は<strong>100万円</strong>で、<span class="marker-green">中学生以下の子どもがいる世帯を優先的に支援</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>千代田区内の住宅を新たに取得（購入）すること</p><p>中学生以下の子どもがいる世帯、または夫婦のいずれかが40歳未満の世帯</p><p>取得住宅に10年以上居住する意思があること</p><p>世帯の年間所得が基準額以下であること</p></div><p>千代田区まちづくり推進部住宅課に申請書と必要書類を提出します。売買契約書、住民票、所得証明書、住宅ローンの契約書などが必要です。</p><p><span class="marker">住宅の引き渡し後1年以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は住宅取得費用に応じて決まり、<strong>上限100万円</strong>です。三世代同居・近居の場合は加算される場合があります。</p><p><span class="marker">千代田区は地価が非常に高いため、マンション購入が中心</span>となります。戸建ての取得も対象ですが、面積要件があります。</p><div class="note-box">投資用物件やセカンドハウスは対象外です。10年以内に転出した場合は助成金の一部返還が求められることがあります。千代田区では区営住宅の優先入居制度も別途設けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-newlywed-rent',
    title: '千代田区 新婚世帯住居費助成事業',
    organization: '千代田区',
    type: 'local',
    maxAmount: '月額最大8万円',
    maxAmountNum: 96,
    category: 'housing',
    prefecture: '東京都',
    tags: ['千代田区', '新婚支援', '家賃補助'],
    eligibility: '千代田区内に居住する婚姻届提出後2年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '千代田区が実施する新婚世帯住居費助成事業です。新婚世帯の家賃を月額最大8万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 新婚世帯住居費助成事業は、<span class="marker">婚姻届提出後2年以内の新婚世帯に対し、家賃の一部を月額最大8万円</span>助成する制度です。</p><p>千代田区は都心の中でも家賃水準が極めて高く、若年層のカップルが居住先として選びにくい状況があります。新婚世帯の定住を促進するため、家賃助成という形で経済的な支援を行い、区内の居住人口の維持・増加を図っています。</p><p>助成期間は<strong>最長8年間</strong>で、<span class="marker-green">区内で子どもが生まれた場合は助成期間が延長される優遇措置</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出日から2年以内であること</p><p>夫婦ともに千代田区に住民登録があること</p><p>世帯の合計所得が基準額以下であること</p><p>区内の民間賃貸住宅に居住していること</p></div><p>千代田区まちづくり推進部住宅課に申請書を提出します。婚姻届受理証明書、住民票、所得証明書、賃貸借契約書が必要です。</p><p><span class="marker">申請は婚姻届提出後2年以内に行う必要があります</span>。遡っての助成はできませんので、早めに申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は家賃と所得に応じて算定され、<strong>月額上限8万円</strong>（年額最大96万円）です。助成期間は原則8年間で、段階的に助成額が減額されます。</p><p><span class="marker">区内で出生があった場合、助成期間が最長2年延長</span>される優遇があります。</p><div class="highlight-box">千代田区の家賃助成は23区内でもトップクラスの手厚さです。区内には丸の内・大手町などのビジネス街が近く、通勤利便性も高いため、新婚世帯の住居選択肢として検討する価値があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-senior-dental',
    title: '千代田区 高齢者歯科健診助成事業',
    organization: '千代田区',
    type: 'local',
    maxAmount: '健診費用無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['千代田区', '歯科健診', '高齢者医療'],
    eligibility: '千代田区に住所を有する65歳以上の方',
    applicationPeriod: '通年',
    description: '千代田区が実施する高齢者歯科健診助成事業です。65歳以上の区民の歯科健診費用を無料化します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 高齢者歯科健診助成事業は、<span class="marker">65歳以上の区民が歯科健診を無料で受けられる</span>ようにする制度です。</p><p>口腔の健康は全身の健康に直結しており、特に高齢者にとって歯の喪失は誤嚥性肺炎やフレイル（虚弱）のリスクを高めます。千代田区では「8020運動」（80歳で20本の歯を保つ）を推進し、高齢者の口腔ケアを支援しています。</p><p><span class="marker-green">年1回、区内の指定歯科医療機関で無料の歯科健診を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>千代田区に住民登録がある65歳以上の方が対象です。事前の申請は不要で、指定歯科医療機関に直接予約できます。</p><div class="summary-box" data-title="健診の内容"><p>歯と歯ぐきの状態の確認</p><p>口腔内のがん検診</p><p>かみ合わせ・義歯の状態確認</p><p>口腔衛生指導（ブラッシング指導等）</p><p>嚥下機能の簡易評価</p></div><p>区の広報やホームページで指定医療機関の一覧を確認できます。受診時に<strong>健康保険証と住所確認書類</strong>を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>歯科健診にかかる費用は全額区が負担</strong>し、自己負担はありません。年度内に1回受診できます。</p><p><span class="marker">健診で治療が必要と診断された場合の治療費は通常の保険診療</span>となります。健診と治療は別扱いです。</p><div class="note-box">千代田区では歯科健診のほか、口腔機能向上プログラム（介護予防事業）も実施しています。嚥下機能の低下が気になる方は、健診と合わせてプログラムへの参加も検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-afterschool',
    title: '千代田区 放課後子ども教室事業',
    organization: '千代田区',
    type: 'local',
    maxAmount: '利用料無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['千代田区', '放課後教室', '教育支援'],
    eligibility: '千代田区立小学校に在籍する児童',
    applicationPeriod: '毎年3月〜4月（年度途中の申込みも可）',
    description: '千代田区が実施する放課後子ども教室事業です。区立小学校の児童が放課後に学習・体験活動に無料で参加できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 放課後子ども教室事業は、<span class="marker">区立小学校に在籍する児童が放課後に安全な環境で学習や体験活動に参加できる</span>事業です。</p><p>千代田区は大学や文化施設が集積する文教エリアであり、その地の利を活かした質の高い教育プログラムが特徴です。学習支援だけでなく、科学実験教室や伝統文化体験、英語プログラムなど多彩なメニューが用意されています。</p><p><span class="marker-green">参加費は無料で、すべての区立小学校で実施</span>されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="プログラムの例"><p>学習支援（宿題サポート・自主学習）</p><p>科学実験教室・プログラミング体験</p><p>伝統文化体験（茶道・書道等）</p><p>英語コミュニケーション教室</p><p>スポーツ・レクリエーション活動</p></div><p>毎年3月〜4月に学校を通じて案内が配布されます。参加申込書を学校に提出するだけで利用開始できます。</p><p><span class="marker">年度途中からの参加も受け付けています</span>。転入してきた児童も、手続き後すぐに参加可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>利用料は無料</strong>です。ただし、一部のプログラムで材料費等の実費が発生する場合があります。</p><p><span class="marker">放課後から最大18時まで利用可能</span>で、共働き世帯の放課後の居場所としても機能しています。</p><div class="highlight-box">千代田区の放課後子ども教室は、地域のボランティアや大学生が指導に関わっており、子どもたちに多様な大人との交流の機会を提供しています。学童保育との連携により、切れ目のない放課後支援を実現しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-telework-bonus',
    title: '千代田区 テレワーク環境整備補助金',
    organization: '千代田区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '東京都',
    tags: ['千代田区', 'テレワーク', '補助金'],
    eligibility: '千代田区内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '千代田区が実施するテレワーク環境整備補助金です。テレワーク導入に必要な機器・ツールの費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 テレワーク環境整備補助金は、<span class="marker">区内の中小企業・個人事業主がテレワーク環境を新たに整備する際の費用</span>を補助する制度です。</p><p>千代田区は大手町・丸の内・有楽町をはじめとする日本有数のビジネス街を擁し、約28万人が区内で働いています。多様な働き方の推進と通勤混雑の緩和を目指し、中小企業のテレワーク導入を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限10万円</strong>です。<span class="marker-green">従業員数50人以下の中小企業が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用パソコン・タブレットの購入費</p><p>Web会議用機器（カメラ・マイク等）の購入費</p><p>VPN・クラウドサービスの初期導入費用</p><p>テレワーク関連のセキュリティ対策費用</p></div><p>千代田区地域振興部商工観光課に申請書を提出します。見積書、事業計画書が必要です。</p><p><span class="marker">導入前の事前申請が必要</span>です。交付決定を受けてからの購入・契約が条件となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。1事業者につき1回限りの利用です。</p><p><span class="marker">すでにテレワーク環境が整っている場合の更新・アップグレードは対象外</span>です。新規導入に限ります。</p><div class="note-box">千代田区ではテレワーク補助金のほか、区内のシェアオフィスやコワーキングスペースの利用促進も行っています。テレワーク導入に関する無料相談も実施していますので、まずはお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-nursing-equipment',
    title: '千代田区 介護用品支給事業',
    organization: '千代田区',
    type: 'local',
    maxAmount: '年間最大10万円',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['千代田区', '介護用品', '支給事業'],
    eligibility: '千代田区に住所を有する要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '千代田区が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家庭に年間最大10万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 介護用品支給事業は、<span class="marker">要介護3以上の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>千代田区は都心区としては高齢者の在宅介護を手厚くサポートしており、介護用品の現物支給や配送サービスを通じて、介護者の負担軽減を図っています。対象要件は他区と比較して緩和されており、要介護3から利用可能です。</p><p>支給額は<strong>年間最大10万円相当</strong>です。<span class="marker-green">住民税非課税世帯は全額支給、課税世帯は一部自己負担</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>千代田区に住民登録がある要介護3以上の65歳以上の高齢者を在宅で介護している方が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ型・パンツ型）</p><p>尿取りパッド</p><p>使い捨て清拭タオル</p><p>使い捨て手袋</p><p>防水シーツ</p></div><p>千代田区高齢介護課に申請書を提出します。介護保険被保険者証の写しと世帯の課税状況が確認できる書類が必要です。承認後は<strong>毎月カタログから商品を選んで配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間最大10万円相当</strong>（月額約8,300円相当）です。住民税非課税世帯は自己負担なし、課税世帯は1割の自己負担があります。</p><p><span class="marker">入院中は支給対象外</span>となります。退院後に再度申請が必要です。</p><div class="highlight-box">千代田区では介護用品支給のほか、紙おむつの配送サービスを通じた高齢者の見守り活動も行っています。配送時に安否確認を行い、異常があれば関係機関に連絡する体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chiyoda-migration-bonus',
    title: '千代田区 定住促進支援事業',
    organization: '千代田区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'living',
    prefecture: '東京都',
    tags: ['千代田区', '定住促進', '支援金'],
    eligibility: '千代田区に新たに転入し、5年以上の定住を予定する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '千代田区が実施する定住促進支援事業です。区内に新たに転入する世帯に最大50万円の引越し・初期費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区 定住促進支援事業は、<span class="marker">千代田区に新たに転入し定住する世帯</span>に対し、引越し費用や初期費用の一部を助成する制度です。</p><p>千代田区は日本の政治・経済の中枢でありながら、居住人口は23区で最少です。1990年代に約3.5万人まで減少した人口を回復させるため、様々な定住促進策を展開しており、この支援事業もその一環として実施されています。</p><p>助成上限は<strong>50万円</strong>で、<span class="marker-green">子育て世帯は優先的に支援</span>を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>千代田区に新たに転入すること（区内での転居は対象外）</p><p>5年以上千代田区内に定住する意思があること</p><p>世帯の所得が基準額以下であること</p><p>区税の滞納がないこと</p></div><p>千代田区まちづくり推進部住宅課に申請書と必要書類を提出します。転入届の写し、所得証明書、引越し費用の見積書・領収書が必要です。</p><p><span class="marker">転入後6か月以内に申請する必要があります</span>。事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成対象は引越し費用、仲介手数料、敷金・礼金等の初期費用で、<strong>合計上限50万円</strong>です。</p><p><span class="marker">5年以内に区外に転出した場合は助成金の一部返還</span>が求められることがあります。</p><div class="note-box">千代田区は家賃水準が高い地域ですが、区営住宅や区民住宅の整備も進められています。定住促進支援事業と合わせて、千代田区の住宅施策全体を確認することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 中央区（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'chuo-childcare-subsidy',
    title: '中央区 子育て応援特別給付金',
    organization: '中央区',
    type: 'local',
    maxAmount: '児童1人あたり3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中央区', '子育て支援', '給付金'],
    eligibility: '中央区に住所を有する18歳未満の児童を養育する住民税非課税世帯等',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '中央区が実施する子育て応援特別給付金です。低所得の子育て世帯に児童1人あたり3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 子育て応援特別給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、児童1人あたり3万円を支給する制度です。</p><p>中央区は銀座・日本橋・築地などの商業エリアを擁し、近年はタワーマンションの建設により人口が急増しています。しかし都心の高い生活コストは子育て世帯にとって大きな負担であり、低所得世帯への経済的支援として本給付金を実施しています。</p><p><span class="marker-green">児童扶養手当受給者は申請不要で口座に振り込まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>中央区に住民登録があり、18歳未満の児童を養育する住民税非課税世帯等が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当受給者（ひとり親世帯）</p><p>住民税均等割が非課税の子育て世帯</p><p>家計急変により非課税相当となった世帯</p></div><p>児童扶養手当受給者以外は、中央区子育て支援課に申請書と収入確認書類を提出します。<strong>家計急変の場合は直近の収入を証明する書類</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり3万円</strong>です。児童が複数いる場合は人数分が支給されます。</p><p><span class="marker">他の自治体で同種の給付金をすでに受給している場合は対象外</span>となります。転入前の自治体での受給状況をご確認ください。</p><div class="note-box">本給付金は非課税所得として扱われます。生活保護の収入認定からも除外されますので、生活保護受給世帯も申請可能です。申請期限を過ぎると受給できなくなりますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-daycare-support',
    title: '中央区 認証保育所等保育料助成金',
    organization: '中央区',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中央区', '保育料助成', '認証保育所'],
    eligibility: '中央区に住所を有し、認証保育所等を利用している保護者',
    applicationPeriod: '通年（四半期ごとの申請）',
    description: '中央区が実施する認証保育所等保育料助成金です。認可外保育施設の保育料を月額最大4万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 認証保育所等保育料助成金は、<span class="marker">認証保育所や認可外保育施設を利用している世帯</span>に対し、保育料の一部を助成する制度です。</p><p>中央区は子育て世帯の転入が続いており、保育需要が供給を上回る状況が続いています。認可保育所に入れなかった場合の代替手段として認証保育所等を利用する世帯の経済的負担を軽減することを目的としています。</p><p>助成額は<strong>月額最大4万円</strong>で、<span class="marker-green">認可保育所の保育料との差額分を助成</span>する仕組みです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる施設"><p>東京都認証保育所</p><p>認可外保育施設（届出済みのもの）</p><p>企業主導型保育事業（地域枠）</p></div><p>中央区保育課に四半期ごとに申請書を提出します。保育施設の在籍証明書、保育料の領収書（3か月分）が必要です。</p><p><span class="marker">認可保育所の入所不承諾通知を受けていること</span>が条件です。認可保育所の申込みをしていない場合は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は認証保育所等の保育料と認可保育所の保育料の差額で、<strong>月額上限4万円</strong>（年額最大48万円）です。所得に応じて助成額が変動します。</p><p><span class="marker">幼児教育・保育の無償化対象（3〜5歳児）は無償化給付との調整</span>が行われます。二重給付にならないよう注意が必要です。</p><div class="highlight-box">中央区では保育所の新設や定員増にも取り組んでいます。年度途中の認可保育所の空き情報は区のホームページで随時公開されていますので、転園の可能性もあわせて確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-vacant-house',
    title: '中央区 空き住戸活用支援事業',
    organization: '中央区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['中央区', '空き家活用', 'リフォーム助成'],
    eligibility: '中央区内の空き住戸を活用してリフォームする所有者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '中央区が実施する空き住戸活用支援事業です。空き住戸のリフォーム・活用に最大100万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 空き住戸活用支援事業は、<span class="marker">区内に存在する空き住戸をリフォームして居住用または地域貢献用途に活用する</span>場合に、改修費用の一部を助成する制度です。</p><p>中央区は商業ビルやオフィスビルが多い一方で、築年数の経ったマンションや戸建て住宅に空き住戸が発生しています。都心の貴重な住宅ストックを有効活用し、居住人口の維持と良好な住環境の確保を図ることが目的です。</p><p>助成額は工事費の3分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">子育て世帯や高齢者向けの住宅として活用する場合は優先採択</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる活用形態"><p>空き住戸を自己居住用にリフォームする場合</p><p>賃貸住宅としてリフォームし入居者を募集する場合</p><p>地域のコミュニティスペースとして活用する場合</p></div><p>中央区都市整備部住宅課に事業計画書と申請書を提出します。空き住戸であることの証明（固定資産税課税台帳等）、リフォーム工事の見積書が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。審査の上、交付決定後にリフォーム工事を開始できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額はリフォーム工事費の3分の1以内で、<strong>上限100万円</strong>です。バリアフリー化や省エネ改修を含む場合は加算される場合があります。</p><p><span class="marker">助成を受けた住戸は10年間、承認された用途で使用する必要</span>があります。用途変更には区の承認が必要です。</p><div class="note-box">区分所有マンションの場合は管理組合の承認が必要です。また、建築基準法上の用途変更が伴う場合は別途手続きが必要となります。事前に住宅課への相談をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-mental-health',
    title: '中央区 精神障害者医療費助成制度',
    organization: '中央区',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['中央区', '精神障害', '医療費助成'],
    eligibility: '中央区に住所を有する精神障害者保健福祉手帳1級の方',
    applicationPeriod: '通年',
    description: '中央区が実施する精神障害者医療費助成制度です。精神障害者保健福祉手帳1級の方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 精神障害者医療費助成制度は、<span class="marker">精神障害者保健福祉手帳1級を所持する方</span>の医療費自己負担分を助成する制度です。</p><p>中央区はメンタルヘルスの支援体制の充実に取り組んでおり、精神障がいをお持ちの方が安心して医療を受けられるよう、自立支援医療（精神通院）に加えて区独自の医療費助成を行っています。</p><p><span class="marker-green">通院・入院ともに保険診療の自己負担分が助成の対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>中央区に住民登録があり、精神障害者保健福祉手帳1級を所持している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>精神障害者医療費助成申請書</p><p>精神障害者保健福祉手帳の写し</p><p>健康保険証の写し</p><p>振込先口座情報</p></div><p>中央区福祉保健部障害者福祉課の窓口で申請します。<strong>「心身障害者医療費助成受給者証（マル障）」</strong>が交付されます。都内の医療機関ではこの受給者証を提示することで窓口負担が軽減されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分（住民税非課税者は全額、課税者は1割負担まで軽減）</strong>が助成されます。</p><p><span class="marker">自立支援医療（精神通院）制度の併用により、精神科の通院は原則1割負担</span>に軽減され、さらに本制度でその1割分も助成される場合があります。</p><div class="note-box">精神障害者保健福祉手帳2級・3級の方は本制度の対象外ですが、自立支援医療（精神通院）制度は手帳の等級に関わらず利用可能です。中央区の障害者福祉課で各種制度の案内を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-scholarship',
    title: '中央区 奨学資金制度',
    organization: '中央区',
    type: 'local',
    maxAmount: '月額最大5万円（貸付型）',
    maxAmountNum: 60,
    category: 'education',
    prefecture: '東京都',
    tags: ['中央区', '奨学金', '教育支援'],
    eligibility: '中央区に住所を有する経済的に修学困難な大学生等',
    applicationPeriod: '毎年4月〜5月',
    description: '中央区が実施する奨学資金制度です。経済的に修学が困難な大学生等に月額最大5万円の奨学金を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 奨学資金制度は、<span class="marker">経済的理由により修学が困難な区内在住の大学生・短大生・専門学校生</span>に対し、奨学資金を貸与（無利子）する制度です。</p><p>中央区は銀座や日本橋といった華やかなエリアのイメージがある一方、経済的に進学が困難な世帯も存在します。区独自の奨学資金制度により、学ぶ意欲のある若者を支援し、卒業後に地域社会で活躍する人材の育成を目指しています。</p><p>貸与額は<strong>月額最大5万円（無利子）</strong>で、<span class="marker-green">卒業後10年以内に分割返済</span>する仕組みです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>中央区に1年以上住民登録があること</p><p>大学・短大・専門学校に在学中であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が一定水準以上であること</p><p>他の奨学金を受けていないこと（日本学生支援機構を除く）</p></div><p>毎年4月〜5月に中央区教育委員会庶務課に申請書を提出します。在学証明書、成績証明書、世帯の所得証明書が必要です。</p><p><span class="marker">書類審査と面接により選考</span>されます。定員に限りがありますので、書類に不備がないよう準備しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>月額最大5万円（無利子）</strong>です。年間60万円、4年間で最大240万円の貸与を受けられます。</p><p><span class="marker">卒業後6か月の猶予期間を経て、10年以内に分割返済</span>する必要があります。返済が困難な場合は猶予制度もあります。</p><div class="note-box">中央区内に卒業後も引き続き居住する場合、返済額の一部減免制度がある場合があります。区への定住促進と連動した支援策ですので、詳しくは教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-women-startup',
    title: '中央区 女性起業家支援補助金',
    organization: '中央区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['中央区', '女性起業', '補助金'],
    eligibility: '中央区内で新たに起業する女性、または起業後2年以内の女性事業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '中央区が実施する女性起業家支援補助金です。女性の起業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 女性起業家支援補助金は、<span class="marker">中央区内で新たに起業する女性、または起業後2年以内の女性事業者</span>を対象に、創業費用の一部を補助する制度です。</p><p>中央区は日本橋・銀座といった商業の中心地であり、多くの女性起業家が活躍する可能性を秘めたエリアです。女性ならではの視点を活かしたビジネスの創出を支援し、区内の産業多様化と雇用創出を図っています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限50万円</strong>です。<span class="marker-green">セミナー受講やメンタリング支援もセットで提供</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>店舗・事務所の改装費</p><p>設備・備品の購入費</p><p>広告宣伝・販促費用</p><p>法人設立にかかる諸費用</p><p>ホームページ・ECサイトの制作費</p></div><p>中央区商工観光課に事業計画書と申請書を提出します。審査では事業の独自性、実現可能性、地域への貢献が評価されます。</p><p><span class="marker">区の創業セミナー（女性向け）の受講が申請条件</span>です。セミナーでは事業計画の立て方や資金調達の方法を学べます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。交付決定後に支出した経費が対象となります。</p><p><span class="marker">補助金の交付決定前に支出した経費は対象外</span>です。必ず交付決定を待ってから事業を開始してください。</p><div class="highlight-box">中央区では女性起業家向けのネットワーキングイベントやビジネスマッチングの機会も提供しています。補助金だけでなく、先輩起業家からのメンタリングや専門家による経営相談も無料で利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-nursing-home-reform',
    title: '中央区 高齢者住宅改修給付事業',
    organization: '中央区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['中央区', '住宅改修', '介護支援'],
    eligibility: '中央区に住所を有する65歳以上で、住宅の改修が必要な方',
    applicationPeriod: '通年',
    description: '中央区が実施する高齢者住宅改修給付事業です。高齢者の自宅のバリアフリー改修に最大20万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 高齢者住宅改修給付事業は、<span class="marker">65歳以上の高齢者が自宅で安全に暮らし続けるためのバリアフリー改修</span>を支援する制度です。</p><p>中央区は築年数の経ったマンションも多く、室内の段差や狭い浴室など、高齢者にとって住みにくい住環境が課題となっています。介護保険の住宅改修費とは別枠で、区独自の給付事業を実施しています。</p><p>給付上限は<strong>20万円</strong>で、<span class="marker-green">介護保険の住宅改修費（上限20万円）と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>浴室の改修（浴槽の取り替え、シャワー設置等）</p><p>流し台・洗面台の取り替え</p><p>便器の取り替え（和式→洋式等）</p><p>居室の段差解消工事</p></div><p>中央区高齢者福祉課に申請書と工事見積書を提出します。住宅の状況と改修の必要性を確認する調査が行われます。</p><p><span class="marker">工事着手前の申請が必須</span>です。介護保険の住宅改修とは手続きが異なりますので、事前に窓口で確認してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は対象工事費のうち、<strong>上限20万円</strong>（住民税非課税者は全額、課税者は一部自己負担あり）です。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と合わせると、最大40万円</span>の改修費用を賄えます。</p><div class="note-box">賃貸住宅の場合は家主の承諾が必要です。マンションの場合は管理組合への届出も必要となることがあります。中央区の介護保険課と高齢者福祉課の両方に事前相談をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-elderly-support',
    title: '中央区 ひとり暮らし高齢者見守り支援事業',
    organization: '中央区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['中央区', '高齢者見守り', '生活支援'],
    eligibility: '中央区に住所を有する65歳以上のひとり暮らしの方',
    applicationPeriod: '通年',
    description: '中央区が実施するひとり暮らし高齢者見守り支援事業です。緊急通報システムの設置や定期訪問等を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 ひとり暮らし高齢者見守り支援事業は、<span class="marker">65歳以上でひとり暮らしの高齢者の安全と安心</span>を支える包括的な見守り事業です。</p><p>中央区はタワーマンションが林立する一方で、ひとり暮らしの高齢者が増加しています。都心のマンションは隣人との交流が少なくなりがちで、孤立のリスクが高まっています。緊急通報システムや定期訪問により、異変の早期発見と孤立防止を図っています。</p><p><span class="marker-green">サービスは無料で利用でき、所得に関わらず対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="提供されるサービス"><p>緊急通報システム（ペンダント型）の貸与</p><p>安否確認電話サービス</p><p>民生委員による定期訪問</p><p>配食サービスによる見守り</p><p>IoT機器による見守り（一部対象者）</p></div><p>中央区高齢者福祉課または各地域の地域包括支援センターに申込みます。ひとり暮らしであることの確認後、サービスが開始されます。</p><p><span class="marker">本人以外にも、離れて暮らす家族からの申込みも受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>各種見守りサービスは<strong>無料</strong>で提供されます。緊急通報システムの機器貸与料・通話料も区が負担します。</p><p><span class="marker">緊急通報システムは24時間365日対応のコールセンターにつながり</span>、急病や転倒時にボタンひとつで通報できます。</p><div class="highlight-box">中央区では見守りサービスのほか、「おとしより相談センター」（地域包括支援センター）が区内5か所に設置されています。介護・福祉・医療の相談をワンストップで受けられますので、気軽にご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chuo-bousai-equipment',
    title: '中央区 防災用品あっせん事業',
    organization: '中央区',
    type: 'local',
    maxAmount: '購入費の25%助成（上限あり）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['中央区', '防災用品', '助成'],
    eligibility: '中央区に住所を有する区民',
    applicationPeriod: '通年',
    description: '中央区が実施する防災用品あっせん事業です。防災用品の購入費を25%助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中央区 防災用品あっせん事業は、<span class="marker">区民が防災用品を購入する際に、費用の25%を区が助成</span>する制度です。</p><p>中央区は東京湾に面した低地が多く、地震や津波、高潮などの災害リスクがあるエリアです。また、タワーマンション居住者が多いため、エレベーター停止時の備蓄や避難対策が重要な課題となっています。区民の自助力を高めるため、防災用品の備蓄を推進しています。</p><p><span class="marker-green">カタログから選んだ防災用品を割引価格で購入可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="あっせん品目の例"><p>非常用持出袋セット</p><p>簡易トイレ・携帯トイレ</p><p>防災ラジオ・懐中電灯</p><p>非常食・保存水セット</p><p>家具転倒防止器具</p></div><p>中央区防災危機管理課の窓口またはホームページからカタログを入手し、注文書を提出します。代金は助成分を差し引いた額を直接支払います。</p><p><span class="marker">区民であれば誰でも利用可能</span>で、世帯ごとに年度内に複数回の利用ができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入金額の<strong>25%が区の助成</strong>として差し引かれ、残りの75%を支払います。1回あたりの助成上限は商品により異なります。</p><p><span class="marker">あっせんカタログに掲載されている商品のみが対象</span>です。市販の商品を個別に購入した場合の後からの助成はありません。</p><div class="note-box">中央区ではマンション防災対策として、マンション管理組合向けの防災アドバイザー派遣や、防災訓練の支援も行っています。個人の備蓄と合わせて、マンション全体の防災対策にも取り組むことをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 港区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'minato-childcare-subsidy',
    title: '港区 子育て世帯臨時特別給付金',
    organization: '港区',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['港区', '子育て支援', '給付金'],
    eligibility: '港区に住所を有する住民税非課税世帯等の子育て世帯',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '港区が実施する子育て世帯臨時特別給付金です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 子育て世帯臨時特別給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、児童1人あたり5万円を支給する制度です。</p><p>港区は六本木・赤坂・麻布などの高級住宅地を擁し、平均所得が全国トップクラスの自治体ですが、経済格差も存在しています。すべての子どもが安心して成長できるよう、低所得世帯への支援を手厚く行っています。</p><p><span class="marker-green">児童扶養手当受給世帯は申請不要で自動振込</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>港区に住民登録があり、18歳未満の児童を養育する住民税非課税世帯等が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当受給者（ひとり親世帯）</p><p>住民税均等割が非課税の子育て世帯</p><p>家計急変により非課税相当となった世帯</p></div><p>児童扶養手当受給者以外は、港区子ども家庭支援部子ども家庭課に申請書と収入を確認する書類を提出します。</p><p><span class="marker">家計急変の場合は直近3か月の収入を証明する書類</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり5万円</strong>です。対象児童が複数いる場合は人数分が支給されます。</p><p><span class="marker">他の自治体で同種の給付金を受給済みの方は対象外</span>です。転入前の受給状況をご確認ください。</p><div class="note-box">港区では独自の子育て応援手当（区独自の上乗せ給付）も別途検討されています。最新の情報は港区のホームページや広報みなとで確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-parenting-allowance',
    title: '港区 出産費用助成制度',
    organization: '港区',
    type: 'local',
    maxAmount: '最大81万円',
    maxAmountNum: 81,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['港区', '出産費用', '助成金'],
    eligibility: '港区に住所を有し、出産した方',
    applicationPeriod: '通年（出産後1年以内）',
    description: '港区が実施する出産費用助成制度です。出産にかかった費用のうち健康保険の出産育児一時金を超えた分を最大81万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 出産費用助成制度は、<span class="marker">出産にかかった費用のうち、健康保険の出産育児一時金（50万円）を超えた部分</span>を助成する制度です。</p><p>港区内には大学病院や有名産婦人科が多く、出産費用が全国平均を大幅に上回る傾向にあります。この助成制度により、港区での出産にかかる自己負担を大幅に軽減し、安心して出産に臨める環境を整えています。</p><p>助成上限は<strong>81万円</strong>で、<span class="marker-green">出産育児一時金との合計で最大131万円</span>の支援を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請に必要なもの"><p>出産費用助成申請書</p><p>出産費用の領収書・明細書</p><p>出産育児一時金の支給決定通知書</p><p>母子健康手帳の写し</p><p>振込先口座情報</p></div><p>港区みなと保健所健康推進課に申請書を提出します。出産後1年以内に申請が必要です。</p><p><span class="marker">港区外の医療機関で出産した場合も対象</span>です。海外での出産は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は出産費用から出産育児一時金（50万円）を差し引いた額で、<strong>上限81万円</strong>です。出産費用が50万円以下の場合は助成の対象外です。</p><p><span class="marker">正常分娩・帝王切開ともに対象</span>ですが、帝王切開の場合は保険適用分を除いた自己負担額が算定の基礎となります。</p><div class="highlight-box">港区は出産費用の助成額が23区でもトップクラスです。出産・子育て応援給付金（10万円）とも別の制度として利用でき、手厚い出産支援を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-housing-eco',
    title: '港区 省エネルギー住宅改修助成事業',
    organization: '港区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['港区', '省エネ改修', '助成金'],
    eligibility: '港区内の住宅を所有し、省エネ改修を行う方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '港区が実施する省エネルギー住宅改修助成事業です。住宅の省エネ改修に最大100万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 省エネルギー住宅改修助成事業は、<span class="marker">港区内の住宅に対する省エネ改修工事</span>の費用を助成する制度です。</p><p>港区は2050年までにCO2排出量を実質ゼロにする目標を掲げ、「ゼロカーボンシティ」を宣言しています。家庭部門の省エネルギー化を推進するため、住宅の断熱改修や高効率設備の導入に対して手厚い助成を行っています。</p><p>助成率は対象工事費の3分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">高断熱窓への改修や太陽光発電システムの設置が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>高断熱窓への改修（内窓設置・ガラス交換）</p><p>壁・屋根・天井・床の断熱改修</p><p>太陽光発電システムの設置</p><p>蓄電池システムの設置</p><p>高効率給湯器（エコキュート・エネファーム等）の設置</p></div><p>港区環境リサイクル支援部環境課に申請書と見積書を提出します。工事内容の詳細がわかる図面も必要です。</p><p><span class="marker">工事着手前に申請し、交付決定を受ける必要があります</span>。着工済みの工事は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の3分の1以内で、<strong>上限100万円</strong>です。工事の種類ごとに個別の上限が設定されている場合があります。</p><p><span class="marker">国の省エネ改修補助金との併用は可能ですが、合計が対象経費を超えないよう調整</span>が必要です。</p><div class="note-box">港区ではマンション管理組合を対象とした共用部分の省エネ改修助成も別途実施しています。個人の専有部分は本制度、共用部分は管理組合向け制度と使い分けが可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-barrier-free',
    title: '港区 バリアフリー住宅改修助成事業',
    organization: '港区',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '東京都',
    tags: ['港区', 'バリアフリー', '住宅改修'],
    eligibility: '港区内に住所を有し、住宅のバリアフリー改修を行う高齢者・障がい者世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '港区が実施するバリアフリー住宅改修助成事業です。高齢者・障がい者世帯の住宅バリアフリー化に最大40万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 バリアフリー住宅改修助成事業は、<span class="marker">高齢者または障がいのある方がいる世帯の住宅バリアフリー改修</span>に対して費用の一部を助成する制度です。</p><p>港区はまちのバリアフリー化を積極的に推進しており、公共施設だけでなく個人住宅のバリアフリー化も支援しています。手すりの設置や段差解消、浴室の改修など、日常生活の安全性と快適性を高める工事が対象です。</p><p>助成上限は<strong>40万円</strong>で、<span class="marker-green">介護保険の住宅改修費（上限20万円）とは別枠で利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置等）</p><p>床材の滑り止め加工</p><p>浴室の改修（浴槽交換・手すり設置）</p><p>トイレの改修（洋式化・手すり設置）</p><p>玄関周りのバリアフリー化</p></div><p>港区保健福祉支援部高齢者支援課（高齢者の場合）または障害者福祉課（障がい者の場合）に申請します。</p><p><span class="marker">改修前の住宅調査と改修後の確認検査</span>が行われます。工事着手前の申請が必須です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費のうち、<strong>上限40万円</strong>（住民税非課税世帯は全額、課税世帯は一部自己負担あり）です。</p><p><span class="marker">介護保険の住宅改修費と併用する場合、合計で最大60万円</span>の改修費用を賄えます。対象工事の重複には注意が必要です。</p><div class="highlight-box">港区では住宅改修助成のほか、UR都市機構と連携した高齢者向け住宅の斡旋や、サービス付き高齢者向け住宅の整備促進も行っています。住み替えと改修の両方を検討できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-infertility',
    title: '港区 特定不妊治療費助成事業',
    organization: '港区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '東京都',
    tags: ['港区', '不妊治療', '助成金'],
    eligibility: '港区に住所を有し、特定不妊治療を受けている夫婦',
    applicationPeriod: '通年',
    description: '港区が実施する特定不妊治療費助成事業です。保険適用後の自己負担分を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 特定不妊治療費助成事業は、<span class="marker">体外受精や顕微授精などの特定不妊治療にかかる保険適用後の自己負担分</span>を助成する制度です。</p><p>港区は晩婚化・晩産化の傾向が顕著なエリアであり、不妊治療のニーズが高い地域です。2022年の保険適用後も高額な自己負担が残る特定不妊治療について、区独自の助成を行うことで、子どもを望む夫婦を経済面から支えています。</p><p>助成額は1回の治療につき<strong>最大30万円</strong>です。<span class="marker-green">所得制限は撤廃されており、港区に住むすべての対象者が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>港区に住民登録がある法律上の婚姻関係にある夫婦（事実婚を含む）で、特定不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>特定不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>治療費の領収書（原本）</p><p>夫婦の住民票</p><p>健康保険証の写し</p></div><p>みなと保健所健康推進課に申請書類を提出します。<strong>治療終了日の翌日から60日以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき保険適用後の自己負担分で最大30万円</strong>です。年間の助成回数には上限があります。</p><p><span class="marker">東京都の特定不妊治療費助成制度との併用が可能</span>ですが、助成額の合計が自己負担額を超えないよう調整されます。</p><div class="note-box">港区では不妊治療費助成のほか、不妊・不育に関する専門相談窓口も設置しています。治療に関する悩みや不安について、専門のカウンセラーに無料で相談できます。男性の不妊治療も助成対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-study-abroad',
    title: '港区 海外留学支援奨学金',
    organization: '港区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'education',
    prefecture: '東京都',
    tags: ['港区', '海外留学', '奨学金'],
    eligibility: '港区に住所を有する高校生・大学生で、海外留学を予定している方',
    applicationPeriod: '毎年5月〜7月',
    description: '港区が実施する海外留学支援奨学金です。海外留学にかかる費用を最大50万円支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 海外留学支援奨学金は、<span class="marker">区内在住の高校生・大学生が海外留学する際にかかる費用</span>を支援する給付型奨学金です。</p><p>港区は大使館や外資系企業が集積する国際色豊かなエリアで、「国際力豊かな人材の育成」を重要施策に位置づけています。次世代を担う若者が海外での学びを通じて国際感覚を身につけ、グローバルに活躍できる人材に成長することを支援しています。</p><p>支給額は<strong>最大50万円（返済不要）</strong>で、<span class="marker-green">留学期間1か月以上の正規のプログラムが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>港区に1年以上住民登録があること</p><p>高等学校、大学、短大、専門学校に在学中であること</p><p>海外の教育機関で1か月以上の留学プログラムに参加すること</p><p>学業成績が一定水準以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年5月〜7月の募集期間に港区教育委員会庶務課に申請書を提出します。留学先の受入証明書、語学力を証明する書類が必要です。</p><p><span class="marker">書類審査と面接により選考</span>されます。定員は年間10名程度です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>最大50万円（返済不要）</strong>です。留学期間や渡航先に応じて金額が決定されます。渡航費・学費・滞在費に充てることができます。</p><p><span class="marker">留学終了後に報告書の提出と報告会でのプレゼンテーション</span>が求められます。</p><div class="highlight-box">港区では留学支援奨学金のほか、区立中学校での海外派遣事業や、国際交流イベントなども実施しています。留学前の語学力向上のため、区が提供する無料英語講座の活用もおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-sme-support',
    title: '港区 中小企業支援補助金',
    organization: '港区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '東京都',
    tags: ['港区', '中小企業', '経営支援'],
    eligibility: '港区内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '港区が実施する中小企業支援補助金です。販路開拓や業態転換にかかる経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 中小企業支援補助金は、<span class="marker">区内の中小企業・個人事業主が販路開拓や業態転換を行う際の費用</span>を補助する制度です。</p><p>港区にはIT企業やスタートアップが多く集積する一方、飲食店やサービス業などの中小企業も多数営業しています。経営環境の変化に対応するための新たな取組みを支援し、区内経済の活性化を図っています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限100万円</strong>です。<span class="marker-green">展示会出展、ECサイト構築、新商品開発などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>展示会・商談会への出展費用</p><p>ECサイト・ホームページの制作費</p><p>新商品・新サービスの開発費</p><p>販促物（チラシ・パンフレット等）の制作費</p><p>業態転換に必要な設備投資</p></div><p>港区産業振興課に事業計画書と申請書を提出します。審査では事業の新規性・独自性・実現可能性が評価されます。</p><p><span class="marker">事業実施前の事前申請が必要</span>で、交付決定後に事業を開始します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限100万円</strong>です。補助金は事業完了後の実績報告を経て支給されます。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。見積書の取得は事前に行えますが、契約は交付決定後としてください。</p><div class="note-box">港区では中小企業支援補助金のほか、経営相談（無料）、融資あっせん制度、商店街支援事業なども実施しています。港区産業振興センターでワンストップの経営相談を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-nursing-equipment',
    title: '港区 介護用品支給事業',
    organization: '港区',
    type: 'local',
    maxAmount: '年間最大10万円',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['港区', '介護用品', '支給事業'],
    eligibility: '港区に住所を有する要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '港区が実施する介護用品支給事業です。在宅介護を行う家庭に年間最大10万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 介護用品支給事業は、<span class="marker">要介護3以上の高齢者を在宅で介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>港区は都心の自治体として在宅介護の環境整備に力を入れています。介護用品の購入は日常的な出費として家計への負担が大きく、この事業により介護者の経済的負担を軽減するとともに、在宅介護の継続を支援しています。</p><p>支給額は<strong>年間最大10万円相当</strong>で、<span class="marker-green">紙おむつは自宅への配送または入院先への配送も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>港区に住民登録がある要介護3以上の65歳以上の高齢者を在宅で介護している方が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ型・パンツ型・フラット型）</p><p>尿取りパッド</p><p>使い捨て清拭タオル</p><p>使い捨て手袋</p><p>ドライシャンプー・口腔ケア用品</p></div><p>港区高齢者支援課に申請書を提出します。介護保険被保険者証の写しが必要です。承認後は<strong>カタログから毎月商品を選んで配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間最大10万円相当</strong>（月額約8,300円相当）です。住民税課税世帯は一部自己負担が発生します。</p><p><span class="marker">入院中の方には病院への紙おむつの配送サービスも利用可能</span>です。ただし、配送先は港区内または近隣区の医療機関に限られます。</p><div class="highlight-box">港区では介護用品支給のほか、介護者向けのリフレッシュ事業（マッサージ・ヨガ教室等）も実施しています。介護者自身の心身のケアも大切にしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'minato-energy-support',
    title: '港区 省エネ家電購入助成事業',
    organization: '港区',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '東京都',
    tags: ['港区', '省エネ家電', '助成金'],
    eligibility: '港区に住所を有する区民',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '港区が実施する省エネ家電購入助成事業です。省エネ性能の高い家電への買い替えに最大5万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区 省エネ家電購入助成事業は、<span class="marker">区民が省エネ性能の高いエアコン・冷蔵庫・LED照明に買い替える際の費用</span>を助成する制度です。</p><p>港区は「ゼロカーボンシティ」を宣言し、家庭のエネルギー消費の削減を推進しています。古い家電から最新の省エネ家電に買い替えることで、光熱費の削減と環境負荷の低減を同時に実現できます。</p><p>助成額は購入金額の<strong>20%（上限5万円）</strong>です。<span class="marker-green">統一省エネラベル4つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる家電"><p>エアコン（統一省エネラベル4つ星以上）</p><p>冷蔵庫（統一省エネラベル4つ星以上）</p><p>LED照明器具</p><p>※いずれも買い替え（古い製品の処分を伴うもの）が条件</p></div><p>港区環境リサイクル支援部環境課に申請書を提出します。購入した製品の領収書、省エネ性能がわかるカタログの写し、古い製品のリサイクル処分を証明する書類が必要です。</p><p><span class="marker">購入後60日以内に申請してください</span>。申請が遅れると受付できない場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は購入金額（税抜）の20%で、<strong>上限5万円</strong>です。複数の家電を同時に購入した場合も合計の上限は5万円です。</p><p><span class="marker">先着順で予算に達し次第終了</span>となります。人気の制度のため、年度前半に予算がなくなることがあります。</p><div class="note-box">港区ではこのほか、太陽光発電システムやV2H（Vehicle to Home）の導入助成も実施しています。省エネ家電の買い替えとあわせて、住まい全体のエネルギー効率の向上を検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 新宿区（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'shinjuku-childcare-subsidy',
    title: '新宿区 子育て応援特別手当',
    organization: '新宿区',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['新宿区', '子育て支援', '手当'],
    eligibility: '新宿区に住所を有する住民税非課税世帯等の子育て世帯',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '新宿区が実施する子育て応援特別手当です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 子育て応援特別手当は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、児童1人あたり5万円を支給する制度です。</p><p>新宿区は新宿駅を中心とした日本有数の繁華街・オフィス街を擁する一方、住宅地も多く約35万人が暮らしています。多様な文化背景を持つ住民が多いのも特徴で、外国籍の方を含むすべての子育て世帯への支援を重視しています。</p><p><span class="marker-green">児童扶養手当受給世帯は申請不要で自動的に口座に振り込まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>新宿区に住民登録があり、18歳未満の児童を養育する住民税非課税世帯等が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当受給者（ひとり親世帯）</p><p>住民税均等割が非課税の子育て世帯</p><p>家計急変により非課税相当となった世帯</p></div><p>児童扶養手当受給者以外は、新宿区子ども家庭部子ども家庭課に申請書と収入を証明する書類を提出します。</p><p><span class="marker">多言語（英語・中国語・韓国語・ネパール語等）での案内も用意</span>されています。外国籍の方も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり5万円</strong>です。複数の児童がいる場合は人数分が支給されます。</p><p><span class="marker">他の自治体で同様の給付金をすでに受給している場合は対象外</span>です。転入前の受給状況を確認してください。</p><div class="note-box">新宿区では子育て応援特別手当のほか、区独自の子育て支援制度（病児保育利用料助成、認証保育所保育料助成など）も充実しています。子ども家庭課の窓口で利用可能な制度を一括で案内してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-birth-bonus',
    title: '新宿区 出産・子育て応援給付金',
    organization: '新宿区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['新宿区', '出産応援', '給付金'],
    eligibility: '新宿区に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '新宿区が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出産後に5万円（子育て応援給付金）</span>を支給する制度です。</p><p>新宿区は多文化共生の街として、日本人・外国人を問わずすべての妊産婦をサポートしています。伴走型相談支援と経済的支援を組み合わせ、妊娠・出産・子育てにおける不安を解消します。</p><p><span class="marker-green">所得制限なしで、新宿区に住むすべての妊婦・出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給の流れ"><p>妊娠届出 → 保健師面談 → 出産応援給付金5万円</p><p>出生届出 → 新生児訪問等面談 → 子育て応援給付金5万円</p></div><p>妊娠届出時に新宿区の保健センターで保健師等と面談を行います。面談後にアンケートに回答し、出産応援給付金の申請をします。</p><p><span class="marker">面談は外国語対応が可能で、通訳サービスも利用</span>できます。日本語に不安がある方も安心して相談できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援5万円＋子育て応援5万円＝合計10万円</strong>です。多胎出産の場合、子育て応援給付金は児童数×5万円が支給されます。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>。特に出産後は育児で忙しくなるため、早めの手続きを心がけてください。</p><div class="note-box">新宿区では給付金に加え、産後ケア事業（ショートステイ型・デイサービス型・訪問型）も実施しています。利用料は所得に応じて減額・免除されます。産後うつの予防にも役立ちますので、積極的にご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-housing-purchase',
    title: '新宿区 民間賃貸住宅家賃助成事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'housing',
    prefecture: '東京都',
    tags: ['新宿区', '家賃助成', '住宅支援'],
    eligibility: '新宿区内の民間賃貸住宅に居住する子育て世帯・高齢者世帯等',
    applicationPeriod: '毎年2月〜3月（抽選）',
    description: '新宿区が実施する民間賃貸住宅家賃助成事業です。子育て世帯や高齢者世帯の家賃を月額最大3万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 民間賃貸住宅家賃助成事業は、<span class="marker">区内の民間賃貸住宅に居住する子育て世帯・高齢者世帯・障がい者世帯</span>の家賃を助成する制度です。</p><p>新宿区は交通利便性が高く住みたい街として人気ですが、家賃水準も高いエリアです。定住促進のため、住み続けたい世帯の住居費負担を軽減する家賃助成を実施しています。</p><p>助成額は<strong>月額最大3万円</strong>で、<span class="marker-green">最長5年間の助成</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>子育て世帯（義務教育終了前の子どもがいる世帯）</p><p>高齢者世帯（60歳以上のひとり暮らしまたは高齢者のみの世帯）</p><p>障がい者世帯</p><p>ひとり親世帯</p></div><p>毎年2月〜3月に募集が行われ、申込者多数の場合は<strong>抽選</strong>により決定されます。新宿区都市計画部住宅課に申込書を提出します。</p><p><span class="marker">新宿区に1年以上住民登録があることが条件</span>です。転入直後は申込みできません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は世帯の状況により異なり、<strong>月額最大3万円</strong>です。助成期間は原則5年間（高齢者世帯は更新可能な場合あり）です。</p><p><span class="marker">募集は年1回で、例年倍率が高い人気制度</span>です。必ず当選するわけではない点にご注意ください。</p><div class="highlight-box">新宿区では家賃助成のほか、区営住宅・区民住宅への入居募集も行っています。家賃助成の抽選に落ちた場合でも、公営住宅の申込みを検討してみてください。居住に関する総合相談窓口も設置されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-disability-medical',
    title: '新宿区 心身障害者医療費助成制度',
    organization: '新宿区',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['新宿区', '障害者医療', '助成金'],
    eligibility: '新宿区に住所を有する重度の身体障害者・知的障害者・精神障害者',
    applicationPeriod: '通年',
    description: '新宿区が実施する心身障害者医療費助成制度です。重度障害者の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 心身障害者医療費助成制度（マル障）は、<span class="marker">重度の障害を持つ方の医療費自己負担分</span>を助成する制度です。</p><p>新宿区は障害のある方が地域で安心して暮らせるまちづくりを推進しており、医療費の負担軽減はその重要な柱です。東京都の制度をベースに、区独自の上乗せ措置も行っています。</p><p><span class="marker-green">身体障害者手帳1・2級、愛の手帳1・2度、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>新宿区に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象者"><p>身体障害者手帳1級または2級（内部障害は3級まで）</p><p>愛の手帳（療育手帳）1度または2度</p><p>精神障害者保健福祉手帳1級</p></div><p>新宿区障害者福祉課に申請書を提出します。障害者手帳、健康保険証、本人確認書類が必要です。<strong>「心身障害者医療費助成受給者証（マル障）」</strong>が交付されます。</p><p><span class="marker">都内の医療機関では受給者証を提示することで窓口負担が軽減</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>住民税非課税者は自己負担なし、課税者は1割負担</strong>（マル障医療証利用時）に軽減されます。</p><p><span class="marker">65歳以上で新たに手帳を取得した場合は、後期高齢者医療制度への加入が条件</span>となる場合があります。</p><div class="note-box">保険適用外の費用（差額ベッド代等）は対象外です。自立支援医療（精神通院・更生医療・育成医療）との併用も可能です。各制度の適用順序は区の窓口で確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-school-lunch',
    title: '新宿区 学校給食費補助事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '給食費の全額補助',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '東京都',
    tags: ['新宿区', '学校給食', '教育支援'],
    eligibility: '新宿区立小中学校に在籍する全児童生徒',
    applicationPeriod: '申請不要（自動適用）',
    description: '新宿区が実施する学校給食費補助事業です。区立小中学校の給食費を全額補助し、保護者の負担をゼロにします。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 学校給食費補助事業は、<span class="marker">区立小中学校に在籍するすべての児童生徒の学校給食費を全額補助</span>する制度です。</p><p>新宿区は子育て支援の一環として、所得に関わらずすべての家庭の給食費負担をゼロにする取組みを実施しています。食材費の高騰が続く中、保護者の経済的負担を大幅に軽減し、すべての子どもに栄養バランスの取れた給食を提供しています。</p><p><span class="marker-green">所得制限なし・申請不要で、すべての児童生徒に自動的に適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>新宿区立小学校に在籍する全児童</p><p>新宿区立中学校に在籍する全生徒</p><p>区立特別支援学級の児童生徒を含む</p></div><p><strong>申請は不要</strong>です。区立小中学校に在籍していれば自動的に給食費が補助されます。保護者への給食費の請求は行われません。</p><p><span class="marker">転入してきた場合も特別な手続きなく適用</span>されます。区立学校への編入手続きのみで給食費補助が開始されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>給食費の全額が補助</strong>されます。小学校で年間約5万円、中学校で年間約6万円相当の負担軽減となります。</p><p><span class="marker">区立学校以外（私立学校・国立学校）に通う児童生徒は対象外</span>です。</p><div class="highlight-box">新宿区の学校給食は地産地消にも配慮しており、旬の食材や東京都産の野菜を積極的に使用しています。食育の観点からも充実した給食プログラムが提供されており、保護者からも高い評価を得ています。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-telework-bonus',
    title: '新宿区 テレワーク導入支援補助金',
    organization: '新宿区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['新宿区', 'テレワーク', '補助金'],
    eligibility: '新宿区内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '新宿区が実施するテレワーク導入支援補助金です。テレワーク環境の整備に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 テレワーク導入支援補助金は、<span class="marker">区内の中小企業がテレワーク環境を新たに整備する際の費用</span>を補助する制度です。</p><p>新宿区は日本最大級のターミナル駅・新宿駅を擁し、多数の中小企業が集積するエリアです。通勤ラッシュの緩和と多様な働き方の推進を目指し、中小企業のテレワーク導入を積極的に支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">IT機器の購入からクラウドサービスの導入まで幅広く対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用PC・タブレットの購入費</p><p>Web会議用機器の購入費</p><p>VPN・リモートアクセスツールの導入費</p><p>クラウドサービス利用料（初年度分）</p><p>セキュリティソフト・機器の導入費</p></div><p>新宿区文化観光産業部産業振興課に申請書と事業計画書を提出します。見積書、会社の登記簿謄本が必要です。</p><p><span class="marker">事前申請が必要で、交付決定後に購入・契約</span>してください。決定前の支出は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者につき1回限りの利用となります。</p><p><span class="marker">すでにテレワーク環境が整備済みの場合の機器更新は対象外</span>です。初めてテレワークを導入する場合に限ります。</p><div class="note-box">新宿区では区内のコワーキングスペースやシェアオフィスの利用促進も行っています。テレワーク補助金と合わせて、新宿区ビジネスアシストセンターでの経営相談（無料）も利用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-nursing-home-reform',
    title: '新宿区 住宅設備改修給付事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['新宿区', '住宅改修', '介護支援'],
    eligibility: '新宿区に住所を有する65歳以上で、日常生活の安全確保のため住宅改修が必要な方',
    applicationPeriod: '通年',
    description: '新宿区が実施する住宅設備改修給付事業です。高齢者の自宅の安全設備改修に最大20万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 住宅設備改修給付事業は、<span class="marker">65歳以上の高齢者が自宅で安全に暮らし続けるための住宅設備改修</span>を支援する制度です。</p><p>新宿区は古くからの住宅地も多く、築年数が経過した住宅でのバリアフリー化ニーズが高まっています。介護保険の住宅改修費とは別枠で、区独自の給付事業を実施し、高齢者の在宅生活の安全性を高めています。</p><p>給付上限は<strong>20万円</strong>で、<span class="marker-green">介護保険の住宅改修費（上限20万円）との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>浴槽の取り替え（またぎ高さの低いものへ）</p><p>流し・洗面台の取り替え</p><p>便器の洋式化</p><p>居室の段差解消</p><p>手すりの設置（大規模なもの）</p></div><p>新宿区高齢者支援課に申請書と工事見積書を提出します。事前の住宅調査が行われ、改修の必要性が確認されます。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定後に工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は対象工事費のうち<strong>上限20万円</strong>です。住民税非課税者は自己負担なし、課税者は所得に応じて一部自己負担があります。</p><p><span class="marker">介護保険の住宅改修費と合わせると、最大40万円</span>の改修費用に対して支援を受けられます。ただし、同一工事への重複申請はできません。</p><div class="note-box">賃貸住宅の場合は家主の書面による承諾が必要です。マンションの場合は管理規約により制限がある場合がありますので、管理組合にも確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-migration-bonus',
    title: '新宿区 定住化支援事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '最大36万円（年額）',
    maxAmountNum: 36,
    category: 'living',
    prefecture: '東京都',
    tags: ['新宿区', '定住支援', '家賃助成'],
    eligibility: '新宿区に3年以上居住する子育て世帯で、区内で転居する方',
    applicationPeriod: '毎年2月〜3月（抽選）',
    description: '新宿区が実施する定住化支援事業です。区内で広い住宅に転居する子育て世帯に最大年額36万円の家賃差額を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 定住化支援事業は、<span class="marker">区内に3年以上居住する子育て世帯が、より広い住宅に区内転居する際の家賃差額</span>を助成する制度です。</p><p>新宿区では子どもの成長に伴い住宅が手狭になった世帯が区外に転出するケースが多く、子育て世帯の定住促進が課題となっています。区内でのステップアップ転居を支援することで、住み慣れた地域での子育て継続を可能にしています。</p><p>助成額は転居前後の<strong>家賃差額で月額最大3万円（年額36万円）</strong>です。<span class="marker-green">最長5年間の助成</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>新宿区に3年以上住民登録があること</p><p>義務教育終了前の子どもがいる世帯</p><p>区内の民間賃貸住宅から区内の民間賃貸住宅へ転居すること</p><p>転居先の住宅が転居前より広い（面積増加）こと</p><p>世帯の所得が基準額以下であること</p></div><p>毎年2月〜3月に新宿区都市計画部住宅課で募集します。抽選により当選者が決定されます。</p><p><span class="marker">応募倍率が高い人気制度のため、当選確率は高くありません</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は転居後の家賃と転居前の家賃の差額で、<strong>月額上限3万円（年額最大36万円）</strong>です。助成期間は最長5年間です。</p><p><span class="marker">助成期間中に区外へ転出した場合、助成は終了</span>します。区内での再転居は区の承認が必要です。</p><div class="highlight-box">新宿区では定住化支援事業のほか、子育てファミリー世帯向けの区営住宅も整備しています。家賃助成の抽選に漏れた場合は、公営住宅の入居募集情報もチェックしてみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shinjuku-seismic-diagnosis',
    title: '新宿区 耐震診断助成事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '診断費用の全額補助（木造住宅）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['新宿区', '耐震診断', '防災'],
    eligibility: '新宿区内に旧耐震基準で建築された住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '新宿区が実施する耐震診断助成事業です。旧耐震基準の住宅の耐震診断費用を全額または一部補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新宿区 耐震診断助成事業は、<span class="marker">1981年5月31日以前に建築された旧耐震基準の住宅</span>の耐震診断費用を助成する制度です。</p><p>新宿区は首都直下地震に備え、住宅の耐震化率向上を重要な防災施策と位置づけています。木密地域（木造住宅密集地域）も存在し、地震時の倒壊や火災延焼のリスクに対応するため、まず耐震診断で住宅の安全性を把握することを推進しています。</p><p><span class="marker-green">木造住宅は診断費用が全額補助（自己負担ゼロ）</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建築物"><p>1981年5月31日以前に建築確認を受けた建築物</p><p>木造住宅（全額補助）</p><p>非木造住宅・マンション（一部補助）</p><p>分譲マンション（管理組合として申請）</p></div><p>新宿区都市計画部建築指導課に申請書を提出します。建築確認通知書や固定資産税課税明細書で建築年の確認が必要です。</p><p><span class="marker">木造住宅は区が耐震診断士を派遣して無料で診断</span>を実施します。非木造建築物は診断費用の一部を補助する形式です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>木造住宅：診断費用全額補助</strong>（区が直接診断士を派遣）。非木造住宅・マンション：診断費用の一部（2分の1〜3分の2程度、上限あり）を補助します。</p><p><span class="marker">診断結果が「倒壊する可能性がある」と判定された場合は、耐震改修助成制度（別制度）を利用</span>して改修工事の補助を受けられます。</p><div class="highlight-box">新宿区では耐震診断の結果に基づき、耐震改修（木造住宅：上限150万円）や建替え（上限300万円）の助成制度も用意しています。まずは耐震診断で住まいの安全性を確認することが、防災対策の第一歩です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
