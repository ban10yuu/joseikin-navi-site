import { Grant } from '@/lib/types';

export const nationalGrantsNew: Grant[] = [
  {
    slug: 'ninpu-kenkou-shinsa',
    title: '妊婦健康診査費用助成',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '最大14回分（約12万円）',
    maxAmountNum: 12,
    category: 'childcare',
    prefecture: '全国',
    tags: ['出産関連', '妊娠関連', '全国共通'],
    eligibility: '妊娠届出をした妊婦が対象です。お住まいの市区町村で母子健康手帳の交付と同時に受診票が配布されます。',
    applicationPeriod: '通年（妊娠届出時）',
    description: '妊婦が安心して定期健診を受けられるよう、14回分の健診費用を公費で助成する制度です。受診票を医療機関に提出するだけで自己負担が軽減されます。',
    sections: [
      {
        heading: '助成の概要',
        content: '<p>妊婦健康診査は妊娠期間中に<span class="marker">14回程度</span>受けることが推奨されています。この費用を市区町村が公費で助成します。</p><p>助成額は自治体により異なりますが、1回あたり5,000円〜1万円程度で、14回分の合計は約7〜12万円になります。</p><div class="summary-box" data-title="助成回数の目安"><p>妊娠初期〜23週：4週間に1回</p><p>24週〜35週：2週間に1回</p><p>36週〜出産：1週間に1回</p></div>'
      },
      {
        heading: '利用方法',
        content: '<p>妊娠届出時に市区町村の窓口で<span class="marker-green">母子健康手帳と一緒に受診票（補助券）が交付</span>されます。医療機関で受診票を提出すれば、助成額分が差し引かれます。</p><div class="highlight-box">里帰り出産で他の自治体の医療機関を受診した場合は、後から払い戻し申請が可能です。</div>'
      },
      {
        heading: '注意点',
        content: '<p>助成額を超える分は自己負担となります。また、保険適用外の検査（一部のスクリーニング検査など）は対象外の場合があります。</p><p><strong>転居した場合</strong>は、転入先の自治体で新しい受診票に交換してもらう必要があります。旧住所の受診票は使えなくなりますのでご注意ください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/bunya/kodomo/boshi-hoken13/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'youji-kyouiku-hoiku-mushouka',
    title: '幼児教育・保育無償化',
    organization: '内閣府',
    type: 'national',
    maxAmount: '月額最大3.7万円',
    maxAmountNum: 27,
    category: 'childcare',
    prefecture: '全国',
    tags: ['子育て関連', '保育関連', '全国共通'],
    eligibility: '3歳〜5歳の全ての子どもと、住民税非課税世帯の0〜2歳の子どもが対象です。',
    applicationPeriod: '通年（施設利用申請時）',
    description: '2019年10月から開始された制度で、幼稚園・保育所・認定こども園等の利用料が無償化されます。3〜5歳は世帯の所得に関わらず対象となります。',
    sections: [
      {
        heading: '無償化の範囲',
        content: '<div class="summary-box" data-title="対象施設と上限額"><p>認可保育所・認定こども園：全額無償</p><p>幼稚園：月額25,700円まで無償</p><p>幼稚園の預かり保育：月額11,300円まで</p><p>認可外保育施設：月額37,000円まで（3〜5歳）</p></div><p><span class="marker">給食費（食材料費）は無償化の対象外</span>です。ただし、年収360万円未満相当世帯と第3子以降の子どもは、副食費（おかず代）が免除されます。</p>'
      },
      {
        heading: '0〜2歳児の場合',
        content: '<p>0〜2歳児は<span class="marker-green">住民税非課税世帯のみ</span>が無償化の対象です。認可保育所は全額、認可外施設は月額42,000円まで助成されます。</p><div class="highlight-box">住民税非課税世帯でなくても、認可保育所の保育料は世帯年収に応じた負担額に設定されています。</div>'
      },
      {
        heading: '手続き方法',
        content: '<p>認可保育所・認定こども園を利用している場合は、特別な手続きは不要で自動的に無償化が適用されます。</p><p>認可外施設や幼稚園の預かり保育を利用する場合は、お住まいの市区町村で<strong>「施設等利用給付認定」</strong>の申請が必要です。保育の必要性の認定を受けることが条件となります。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/kokoseido/mushouka/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'hitorioya-iryouhi-josei',
    title: 'ひとり親家庭等医療費助成制度',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '医療費の自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['ひとり親支援', '医療費助成', '全国共通'],
    eligibility: 'ひとり親家庭の親と子ども（18歳到達後最初の3月31日まで）が対象です。所得制限があります。',
    applicationPeriod: '通年',
    description: 'ひとり親家庭の親と子どもの医療費自己負担分を助成する制度です。自治体により助成内容は異なりますが、多くの地域で通院・入院とも自己負担が軽減されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひとり親家庭等医療費助成は、<span class="marker">母子家庭・父子家庭の親と子どもの医療費</span>を助成する制度です。自治体によって「マル親」「ひとり親マル福」などの名称があります。</p><p>多くの自治体で保険診療の自己負担分が無料または一部負担金のみとなります。</p>'
      },
      {
        heading: '対象者と所得制限',
        content: '<div class="summary-box" data-title="対象者"><p>母子家庭の母と子</p><p>父子家庭の父と子</p><p>両親のいない児童を養育している養育者</p></div><p>所得制限は<span class="marker-green">児童扶養手当の所得制限に準じている</span>自治体が多いです。詳細はお住まいの市区町村にご確認ください。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>市区町村の窓口で申請し、医療証を受け取ります。必要書類は戸籍謄本、健康保険証、所得証明書などです。</p><div class="highlight-box">児童扶養手当を受給している方は、手続きがスムーズです。離婚後すぐに申請することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shougaiji-fukushi-teate',
    title: '特別児童扶養手当',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '月額最大5.39万円',
    maxAmountNum: 5.39,
    category: 'childcare',
    prefecture: '全国',
    tags: ['障がい児支援', '全国共通', '所得制限あり'],
    eligibility: '20歳未満の障がいのある児童を養育している父母または養育者が対象です。',
    applicationPeriod: '通年',
    description: '精神または身体に障がいのある20歳未満の児童を養育している方に支給される手当です。障がいの程度により1級（月額53,700円）と2級（月額35,760円）に分かれます。',
    sections: [
      {
        heading: '支給額と等級',
        content: '<div class="summary-box" data-title="月額支給額"><p>1級（重度）：53,700円</p><p>2級（中度）：35,760円</p></div><p><span class="marker">障がいの程度</span>は、身体障害者手帳の等級とは異なる独自の基準で判定されます。診断書に基づいて都道府県が認定します。</p>'
      },
      {
        heading: '申請に必要なもの',
        content: '<p>申請は市区町村の窓口で行います。<strong>医師の診断書</strong>（所定の様式）が最も重要な書類です。</p><p>その他、戸籍謄本、住民票、振込先口座の情報、マイナンバーカードが必要です。認定には1〜2ヶ月程度かかります。</p>'
      },
      {
        heading: '注意点',
        content: '<p>所得制限があり、扶養親族の数に応じた限度額を超えると支給停止となります。また、<span class="marker-green">児童が障害者施設に入所している場合は対象外</span>となります。</p><p>毎年8月に「所得状況届」の提出が必要です。提出しないと支給が停止されますのでご注意ください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/bunya/shougaihoken/jidou/huyou.html',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kodomo-ecosumai-shien',
    title: 'こどもエコすまい支援事業',
    organization: '国土交通省',
    type: 'national',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '全国',
    tags: ['住宅購入', '省エネ', 'ZEH'],
    eligibility: 'ZEH水準の新築住宅を取得する子育て世帯・若者夫婦世帯、または省エネリフォームを行う全世帯が対象です。',
    applicationPeriod: '予算枠に達し次第終了',
    description: '子育て世帯・若者夫婦世帯の省エネ住宅取得や、既存住宅の省エネリフォームを支援する補助金制度です。新築は最大100万円、リフォームは最大60万円が補助されます。',
    sections: [
      {
        heading: '補助額と対象',
        content: '<div class="summary-box" data-title="補助額"><p>ZEH水準の新築住宅：100万円/戸</p><p>省エネリフォーム：最大30万円（子育て世帯等は最大60万円）</p></div><p>新築は<span class="marker">子育て世帯（18歳未満の子がいる世帯）</span>または若者夫婦世帯（夫婦いずれかが39歳以下）が対象です。リフォームは全世帯が対象となります。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>申請は<strong>登録された施工業者</strong>が代行して行います。施主自身が直接申請することはできません。</p><div class="highlight-box">住宅メーカーやリフォーム業者に「こどもエコすまい支援事業に対応しているか」を事前に確認しましょう。</div>'
      },
      {
        heading: '他の補助金との併用',
        content: '<p>先進的窓リノベ事業や給湯省エネ事業など、<span class="marker-green">他の省エネ関連補助金と併用可能</span>です。対象工事が異なる場合はそれぞれ申請でき、合計の補助額を最大化できます。</p><p>ただし、同一の工事内容に対する重複申請はできません。</p>'
      }
    ],
    officialUrl: 'https://kodomo-ecosumai.mlit.go.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'jutaku-loan-genzei',
    title: '住宅ローン減税（住宅借入金等特別控除）',
    organization: '国土交通省・財務省',
    type: 'national',
    maxAmount: '最大455万円控除',
    maxAmountNum: 455,
    category: 'housing',
    prefecture: '全国',
    tags: ['住宅ローン', '税額控除', '確定申告'],
    eligibility: '住宅ローンを利用して住宅を新築・取得・増改築した方で、合計所得金額が2,000万円以下の方が対象です。',
    applicationPeriod: '確定申告時（入居翌年の2月〜3月）',
    description: '住宅ローンの年末残高の0.7%が所得税から最大13年間控除される制度です。新築・中古・リフォームいずれも対象で、住宅取得を強力に後押しする最大の税制優遇措置です。',
    sections: [
      {
        heading: '控除額の計算',
        content: '<p>住宅ローンの<span class="marker">年末残高 × 0.7%</span>が所得税から控除されます。控除期間は新築が最大13年間、中古が最大10年間です。</p><div class="summary-box" data-title="借入限度額（新築・2024年入居）"><p>認定長期優良住宅：5,000万円</p><p>ZEH水準省エネ住宅：4,500万円</p><p>省エネ基準適合住宅：4,000万円</p><p>その他の住宅：3,000万円</p></div>'
      },
      {
        heading: '申請方法',
        content: '<p>初年度は<strong>確定申告</strong>が必要です。2年目以降は会社員であれば年末調整で控除を受けられます。</p><p>必要書類は、登記事項証明書、売買契約書、住宅ローンの年末残高等証明書、住民票の写しなどです。</p><div class="highlight-box">初年度の確定申告を忘れると控除を受けられません。入居した翌年の確定申告期間中に必ず手続きしましょう。</div>'
      },
      {
        heading: '注意点',
        content: '<p>2024年以降の入居では、省エネ基準を満たさない新築住宅は<span class="marker-green">原則として対象外</span>になりました。中古住宅の場合は1982年以降の建築であれば対象です。</p><p>ふるさと納税との併用も可能ですが、控除枠に影響する場合がありますので税理士に相談することをおすすめします。</p>'
      }
    ],
    officialUrl: 'https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk2_000017.html',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sakidori-mado-rinobe',
    title: '先進的窓リノベ事業',
    organization: '環境省',
    type: 'national',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'housing',
    prefecture: '全国',
    tags: ['リフォーム', '省エネ', '窓断熱'],
    eligibility: '既存住宅の窓を断熱性能の高い窓に改修する方が対象です。所有者でなくても賃借人も申請可能です。',
    applicationPeriod: '予算枠に達し次第終了',
    description: '既存住宅の窓を高断熱窓に改修する費用を補助する制度です。窓1箇所ごとに補助額が決まり、1戸あたり最大200万円が補助されます。',
    sections: [
      {
        heading: '補助額',
        content: '<p>補助額は窓のサイズと改修方法ごとに定額で決まっています。<span class="marker">1戸あたり最大200万円</span>まで補助されます。</p><div class="summary-box" data-title="補助額の目安（1箇所あたり）"><p>大（2.8m²以上）：内窓設置で約6〜12万円</p><p>中（1.6m²〜2.8m²）：約4〜8万円</p><p>小（0.2m²〜1.6m²）：約2〜5万円</p></div>'
      },
      {
        heading: '対象工事',
        content: '<p>対象となるのは、<span class="marker-green">ガラス交換・内窓設置・外窓交換・ドア交換</span>の4種類です。断熱性能の基準を満たす製品に改修する必要があります。</p><div class="highlight-box">冬の結露や寒さ対策に最も効果が高いのは内窓の設置です。比較的安価で補助率も高いため人気があります。</div>'
      },
      {
        heading: '申請方法と注意',
        content: '<p>登録された施工業者が申請を代行します。工事着手前に「交付申請」を行い、工事完了後に「完了報告」を提出します。</p><p><strong>こどもエコすまい支援事業との併用が可能</strong>です。窓リノベで窓を断熱化し、エコすまいでその他のリフォームを行うことで補助額を最大化できます。</p>'
      }
    ],
    officialUrl: 'https://window-renovation2024.env.go.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shougai-kiso-nenkin',
    title: '障害基礎年金',
    organization: '厚生労働省・日本年金機構',
    type: 'national',
    maxAmount: '年額約100万円（1級）',
    maxAmountNum: 100,
    category: 'medical',
    prefecture: '全国',
    tags: ['障がい者支援', '年金制度', '全国共通'],
    eligibility: '国民年金加入中（または20歳前）に初診日がある病気やケガで、障害等級1級または2級に該当する方が対象です。',
    applicationPeriod: '通年（障害認定日以降）',
    description: '病気やケガにより障害状態になった場合に受給できる年金です。1級は年額約100万円、2級は年額約80万円が支給されます。子どもがいる場合は加算もあります。',
    sections: [
      {
        heading: '支給額',
        content: '<div class="summary-box" data-title="年間支給額（2024年度）"><p>1級：1,020,000円（月額85,000円）</p><p>2級：816,000円（月額68,000円）</p><p>子の加算：1人目・2人目 各234,800円、3人目以降 各78,300円</p></div><p><span class="marker">障害基礎年金は非課税</span>です。所得税・住民税がかかりません。</p>'
      },
      {
        heading: '申請の要件',
        content: '<p>主な要件は、(1)初診日に国民年金の被保険者であること、(2)初診日前に保険料の納付要件を満たしていること、(3)障害認定日に障害等級1級または2級に該当すること、の3つです。</p><p><span class="marker-green">20歳前に初診日がある場合</span>は、保険料の納付要件は問われません（ただし所得制限あり）。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>市区町村の年金窓口または年金事務所で申請します。最も重要な書類は<strong>医師の診断書</strong>です。初診日の証明（受診状況等証明書）も必要です。</p><div class="highlight-box">初診日から1年6ヶ月経過した日（障害認定日）から申請可能です。遡及請求により最大5年分を遡って受給することもできます。</div>'
      }
    ],
    officialUrl: 'https://www.nenkin.go.jp/service/jukyu/shougainenkin/jukyu-yoken/20150401-01.html',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shouji-mansei-tokutei-shippei',
    title: '小児慢性特定疾病医療費助成',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '医療費の自己負担軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['小児医療', '難病支援', '全国共通'],
    eligibility: '18歳未満の児童で、国が指定する小児慢性特定疾病にかかっている方が対象です（引き続き治療が必要な場合は20歳未満まで延長可）。',
    applicationPeriod: '通年',
    description: '子どもの慢性的な疾病の治療にかかる医療費の自己負担を軽減する制度です。対象は788疾病で、所得に応じた月額上限額が設定されます。',
    sections: [
      {
        heading: '対象疾病と助成内容',
        content: '<p>対象となるのは、悪性新生物、慢性腎疾患、慢性心疾患、内分泌疾患など<span class="marker">16疾患群・788疾病</span>です。医療保険の自己負担分が軽減され、所得に応じた月額上限額のみの負担となります。</p><div class="summary-box" data-title="自己負担上限額（月額）"><p>一般所得：5,000円〜10,000円</p><p>低所得：2,500円〜5,000円</p><p>生活保護世帯：0円</p></div>'
      },
      {
        heading: '申請方法',
        content: '<p>お住まいの都道府県・政令指定都市の窓口で申請します。<strong>指定医による医療意見書</strong>が必要です。認定されると「医療受給者証」が交付されます。</p><div class="highlight-box">認定期間は原則1年間で、毎年更新手続きが必要です。期限切れに注意しましょう。</div>'
      },
      {
        heading: '関連する支援',
        content: '<p>小児慢性特定疾病の認定を受けると、医療費助成だけでなく<span class="marker-green">自立支援事業</span>（日常生活用具の給付、相談支援など）も利用できます。</p><p>18歳以降は「指定難病医療費助成制度」への移行が可能な疾病もあります。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000078973.html',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shugaku-enjo',
    title: '就学援助制度',
    organization: '文部科学省',
    type: 'national',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 10,
    category: 'education',
    prefecture: '全国',
    tags: ['教育費支援', '小中学校', '低所得世帯'],
    eligibility: '経済的理由で就学が困難な小中学校に通う児童生徒の保護者が対象です。生活保護世帯に準ずる程度の世帯が対象です。',
    applicationPeriod: '毎年度当初（4月頃）',
    description: '経済的に困難な家庭の小中学生に対し、学用品費・給食費・修学旅行費などを援助する制度です。市区町村が実施し、年収の目安は自治体により異なります。',
    sections: [
      {
        heading: '援助の内容',
        content: '<div class="summary-box" data-title="主な援助項目"><p>学用品費・通学用品費：年額約1〜2.5万円</p><p>給食費：実費支給</p><p>修学旅行費：実費支給</p><p>新入学児童生徒学用品費：約5万円（入学時）</p><p>医療費：学校の健康診断で指摘された疾病の治療費</p></div>'
      },
      {
        heading: '対象世帯の目安',
        content: '<p>対象となる世帯年収の目安は自治体によって異なりますが、<span class="marker">生活保護基準の1.0〜1.3倍程度</span>が一般的です。例えば4人家族の場合、年収350万円前後が目安となる自治体が多いです。</p><p>児童扶養手当を受給している世帯は、ほぼ確実に対象となります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>毎年度初め（4月頃）に学校を通じて申請書が配布されます。<span class="marker-green">学校に直接提出するか、市区町村の教育委員会に申請</span>します。</p><div class="highlight-box">年度途中でも家計の急変（失業・離婚等）があった場合は随時申請可能です。困ったときはすぐに学校や教育委員会に相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.mext.go.jp/a_menu/shotou/career/05010502/017.htm',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'koutou-gakkou-shugaku-shienkin',
    title: '高等学校等就学支援金',
    organization: '文部科学省',
    type: 'national',
    maxAmount: '年額最大39.6万円',
    maxAmountNum: 39.6,
    category: 'education',
    prefecture: '全国',
    tags: ['高校無償化', '全国共通', '所得制限あり'],
    eligibility: '日本国内の高等学校等に在籍する生徒の保護者で、世帯年収が約910万円未満の方が対象です。',
    applicationPeriod: '入学時・毎年7月頃（継続届出）',
    description: '高等学校等の授業料に充てるための支援金です。公立高校の授業料は実質無償化され、私立高校は世帯年収590万円未満の場合に最大396,000円が支給されます。',
    sections: [
      {
        heading: '支給額',
        content: '<div class="summary-box" data-title="年額支給額"><p>公立高校：118,800円（授業料相当額）</p><p>私立高校（年収590万円未満）：396,000円</p><p>私立高校（年収590〜910万円）：118,800円</p></div><p><span class="marker">年収910万円以上の世帯は対象外</span>です。年収の判定は「課税標準額×6%−市町村民税の調整控除額」で行われます。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>入学時に学校を通じて申請します。マイナンバーカードまたはマイナンバー通知カードの写しが必要です。</p><p>支援金は学校に直接支払われるため、<strong>生徒や保護者の口座に振り込まれるわけではありません</strong>。授業料から支援金額が差し引かれる形となります。</p>'
      },
      {
        heading: '注意点',
        content: '<p>毎年7月頃に「収入状況届出」の提出が必要です。<span class="marker-green">提出を忘れると支給が停止</span>されますのでご注意ください。</p><p>通信制高校や高等専門学校（1〜3年生）も対象です。ただし、在籍期間が36月（定時制は48月）を超えると支給されません。</p>'
      }
    ],
    officialUrl: 'https://www.mext.go.jp/a_menu/shotou/mushouka/1342674.htm',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'senmon-jissen-kyouiku-kunren',
    title: '専門実践教育訓練給付金',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '最大224万円',
    maxAmountNum: 224,
    category: 'education',
    prefecture: '全国',
    tags: ['資格取得', '雇用保険', 'キャリアアップ'],
    eligibility: '雇用保険の被保険者期間が3年以上（初回は2年以上）の方が対象です。在職中・離職中いずれも利用可能です。',
    applicationPeriod: '講座開始1ヶ月前までにハローワークで手続き',
    description: '看護師・介護福祉士・IT資格など、専門的な教育訓練の受講費用の最大70%（年間56万円、最長4年で224万円）が支給される制度です。',
    sections: [
      {
        heading: '給付額',
        content: '<p>受講費用の<span class="marker">50%（年間上限40万円）</span>が訓練期間中に支給されます。さらに、資格取得等の目標を達成した場合は追加で20%（年間上限16万円）が支給されます。</p><div class="summary-box" data-title="給付額まとめ"><p>訓練中：受講費用の50%（年間上限40万円）</p><p>目標達成後追加：受講費用の20%（年間上限16万円）</p><p>合計：最大70%（年間上限56万円、最長4年で224万円）</p></div>'
      },
      {
        heading: '対象講座の例',
        content: '<p>対象となるのは厚生労働大臣が指定する講座で、<span class="marker-green">看護師、介護福祉士、保育士、社会福祉士、MBA、IT系資格</span>など幅広い分野が含まれます。</p><div class="highlight-box">ハローワークのHPで「教育訓練給付制度 検索システム」から対象講座を検索できます。</div>'
      },
      {
        heading: '手続きの流れ',
        content: '<p>講座開始の1ヶ月前までにハローワークで「受給資格確認手続き」を行う必要があります。<strong>事前手続きを忘れると給付を受けられません</strong>。</p><p>在職中の方は、キャリアコンサルタントによる「訓練前キャリアコンサルティング」を受けることが必須要件です。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'jigyou-saikouchiku-hojokin',
    title: '事業再構築補助金',
    organization: '経済産業省・中小企業庁',
    type: 'national',
    maxAmount: '最大1.5億円',
    maxAmountNum: 15000,
    category: 'employment',
    prefecture: '全国',
    tags: ['事業者向け', '設備投資', '新分野展開'],
    eligibility: '新分野展開・業態転換・事業転換等に取り組む中小企業・中堅企業が対象です。',
    targetOccupation: '中小企業・中堅企業の経営者',
    applicationPeriod: '公募回ごと（年数回）',
    description: 'ポストコロナ時代の経済社会の変化に対応するため、新分野展開や業態転換等に取り組む中小企業等の挑戦を支援する大型補助金です。',
    sections: [
      {
        heading: '補助額と補助率',
        content: '<div class="summary-box" data-title="主な申請類型"><p>成長枠：最大7,000万円（補助率1/2〜2/3）</p><p>グリーン成長枠：最大1.5億円（補助率1/2〜2/3）</p><p>産業構造転換枠：最大7,000万円（補助率2/3）</p></div><p>従業員数や企業規模によって補助上限額が変わります。<span class="marker">中小企業の方が補助率が高い</span>傾向にあります。</p>'
      },
      {
        heading: '採択のポイント',
        content: '<p>事業計画書の完成度が合否を決めます。<strong>認定経営革新等支援機関</strong>（金融機関、税理士等）と共同で事業計画を策定することが必須です。</p><p>市場分析、競合との差別化、実現可能性のある売上計画を<span class="marker-green">具体的な数字とエビデンス</span>を基に記載する必要があります。</p>'
      },
      {
        heading: '注意点',
        content: '<p>補助金は<strong>後払い</strong>です。事業に必要な資金は一旦自己資金や融資で賄う必要があります。事業完了後に実績報告を行い、確定検査を経て補助金が交付されます。</p><div class="highlight-box">不採択になっても再チャレンジ可能です。フィードバックを活かして事業計画を改善し、次の公募に再申請しましょう。</div>'
      }
    ],
    officialUrl: 'https://jigyou-saikouchiku.go.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'ryouritsu-shien-joseikin',
    title: '両立支援等助成金',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'employment',
    prefecture: '全国',
    tags: ['事業者向け', '育休支援', '介護休業支援'],
    eligibility: '従業員の育児休業や介護休業の取得を促進する事業主が対象です。',
    targetOccupation: '中小企業の事業主',
    applicationPeriod: '通年（支給要件達成後）',
    description: '仕事と育児・介護の両立を支援する事業主に対して支給される助成金です。男性の育休取得促進や介護離職防止に取り組む中小企業を特に支援します。',
    sections: [
      {
        heading: 'コースと支給額',
        content: '<div class="summary-box" data-title="主なコース"><p>出生時両立支援コース（男性育休）：最大60万円</p><p>育児休業等支援コース：最大36万円</p><p>介護離職防止支援コース：最大36万円</p></div><p><span class="marker">中小企業（従業員300人以下）</span>が主な対象です。</p>'
      },
      {
        heading: '男性育休取得の支援',
        content: '<p>出生時両立支援コースでは、<span class="marker-green">男性労働者が育児休業を取得</span>した場合に事業主に助成金が支給されます。代替要員の確保や業務の引継ぎなど、環境整備に取り組む企業を応援します。</p><div class="highlight-box">2022年の育児・介護休業法改正で、男性育休の取得率公表が義務化（従業員1,000人超企業）されました。中小企業も今のうちから取得促進に取り組みましょう。</div>'
      },
      {
        heading: '申請の流れ',
        content: '<p>各コースの支給要件を満たした後に、労働局に申請書類を提出します。就業規則の整備、育休取得実績の証明、代替要員の配置状況などの書類が必要です。</p><p><strong>社会保険労務士に申請を依頼する企業が多い</strong>です。初回は専門家に相談することをおすすめします。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/shokuba_kosodate/ryouritsu01/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'jinzai-kaihatsu-shien-joseikin',
    title: '人材開発支援助成金',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '最大1,000万円',
    maxAmountNum: 1000,
    category: 'employment',
    prefecture: '全国',
    tags: ['事業者向け', '人材育成', '研修費助成'],
    eligibility: '従業員に対して職業訓練を実施する事業主が対象です。雇用保険適用事業所であることが条件です。',
    targetOccupation: '中小企業・大企業の事業主',
    applicationPeriod: '訓練開始1ヶ月前までに計画届提出',
    description: '事業主が従業員に対して行う職業訓練の経費や、訓練期間中の賃金の一部を助成する制度です。DX推進やリスキリングに取り組む企業の人材育成を支援します。',
    sections: [
      {
        heading: '主なコース',
        content: '<div class="summary-box" data-title="コース一覧"><p>人材育成支援コース：OFF-JT訓練への助成</p><p>教育訓練休暇等付与コース：教育訓練休暇制度への助成</p><p>人への投資促進コース：DX・成長分野の訓練への高率助成</p><p>事業展開等リスキリング支援コース：新事業に必要なスキル習得</p></div><p>特に「人への投資促進コース」と「事業展開等リスキリング支援コース」は<span class="marker">助成率が最大75%</span>と高く設定されています。</p>'
      },
      {
        heading: '助成額の計算',
        content: '<p>経費助成と賃金助成の2本立てです。経費助成は<span class="marker-green">訓練にかかった実費の45〜75%</span>、賃金助成は訓練中の賃金の一部が支給されます。</p><p>1事業所あたりの年間支給上限額は最大1,000万円です。中小企業は大企業より助成率が高くなっています。</p>'
      },
      {
        heading: '申請の注意点',
        content: '<p>訓練開始の<strong>1ヶ月前までに「訓練計画届」をハローワーク</strong>に提出する必要があります。事後申請はできません。</p><div class="highlight-box">対象となる訓練は10時間以上のOFF-JTが基本です。eラーニングや通信教育も一部対象になります。</div>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html',
    publishedAt: '2026-03-11',
  },
];
