import { Grant } from '@/lib/types';

export const localGrants: Grant[] = [
  // ────────────────────────────────────────────────
  // 東京都 (8 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'tokyo-child-medical',
    title: '東京都 子ども医療費助成制度（マル乳・マル子・マル青）',
    organization: '東京都',
    type: 'local',
    maxAmount: '医療費全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['東京都関連', '子育て関連', '所得制限なし'],
    eligibility: '東京都内に住所がある0歳から18歳までの子どもの保護者が対象です。',
    applicationPeriod: '通年',
    description: '東京都が実施する子ども医療費助成制度は、0歳から18歳（高校生世代）までの子どもの医療費を助成する制度です。2023年4月から高校生世代まで対象が拡大され、より多くの家庭が恩恵を受けられるようになりました。',
    sections: [
      {
        heading: '制度の概要と対象者',
        content: '<p>東京都の子ども医療費助成制度は、<span class="marker">0歳から18歳（18歳到達後最初の3月31日）までの子ども</span>を対象に、医療機関での自己負担分を助成する制度です。</p><p>以前は中学生までが対象でしたが、令和5年4月からは高校生等にも対象が拡大されました。通称「マル乳」「マル子」「マル青」として親しまれています。</p><p>都内に住所を有し、健康保険に加入していることが条件です。生活保護を受けている方は対象外となります。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成内容まとめ"><p>通院・入院ともに保険診療の自己負担分を助成</p><p>薬の処方についても助成対象</p><p>入院時の食事療養費は自己負担</p></div><p>通院の場合、医療機関の窓口でマル乳・マル子・マル青の医療証を提示すれば、<span class="marker-green">保険診療の自己負担分が無料</span>になります。</p><p>ただし、保険適用外の診療（差額ベッド代、文書料など）は助成の対象外です。都外の医療機関を受診した場合は、一旦自己負担した後に区市町村の窓口で払い戻し申請を行います。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>お住まいの区市町村の窓口で申請します。出生届や転入届の提出時にあわせて手続きするのがスムーズです。</p><div class="highlight-box">申請に必要なもの：健康保険証（子ども本人のもの）、申請者の本人確認書類、印鑑（自治体による）</div><p>申請後、<strong>医療証（マル乳・マル子・マル青）</strong>が交届されます。届くまでに受診した場合は、後日払い戻し申請が可能です。</p>'
      },
      {
        heading: '注意点とよくある質問',
        content: '<p>区市町村によって独自の上乗せ制度がある場合があります。たとえば、所得制限を設けない自治体もあれば、一部自己負担がある自治体もあります。</p><p><span class="marker">他の公費医療制度（ひとり親医療費助成など）との併用はできません</span>。優先順位がありますので、窓口で確認しましょう。</p><p>学校内でのケガなどは、日本スポーツ振興センターの災害共済給付が優先される場合があります。</p>'
      },
      {
        heading: 'まとめ',
        content: '<p>東京都の子ども医療費助成制度は、18歳まで医療費の心配を軽減してくれる大変ありがたい制度です。特に小さなお子さんは通院頻度が高いため、家計への負担を大きく軽減してくれます。</p><div class="highlight-box">お子さんが生まれたら、出生届と一緒にすぐに申請するのがおすすめです。転入の場合も速やかに手続きしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.fukushi.metro.tokyo.lg.jp/kodomo/kosodate/josei/index.html',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'tokyo-startup-support',
    title: '東京都創業助成事業',
    organization: '東京都（東京都中小企業振興公社）',
    type: 'local',
    maxAmount: '最大400万円',
    maxAmountNum: 400,
    category: 'employment',
    prefecture: '東京都',
    tags: ['東京都関連', '起業・創業関連', '返済不要'],
    eligibility: '都内で創業予定または創業後5年未満の個人・法人が対象です。TOKYO創業ステーション等の創業支援事業を利用していることが要件となります。',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年4月〜5月頃（年1回）',
    description: '東京都が東京都中小企業振興公社を通じて実施する創業助成事業です。創業にかかる経費の一部を最大400万円まで助成します。返済不要のため、創業期の資金調達として非常に人気があります。',
    sections: [
      {
        heading: '助成金の概要',
        content: '<p>東京都創業助成事業は、都内で新たにビジネスを始める方を支援するための助成金制度です。<span class="marker">最大400万円（助成率2/3）</span>が支給され、返済の必要がありません。</p><p>創業に必要な経費（賃借料、広告費、従業員人件費、設備費など）に充てることができます。毎年非常に人気が高く、倍率も高い助成金です。</p>'
      },
      {
        heading: '対象者の要件',
        content: '<div class="summary-box" data-title="申請要件"><p>都内での創業を計画中、または創業後5年未満</p><p>TOKYO創業ステーション等の創業支援事業を利用済み</p><p>事業計画書の提出が必要</p></div><p>申請にあたっては、<strong>TOKYO創業ステーションのプランコンサルティング</strong>を受けていることなど、一定の創業支援事業の利用実績が必要です。</p><p>事前にセミナー参加や相談を利用しておくことが重要です。思い立ってすぐ申請できるわけではないので、計画的に準備しましょう。</p>'
      },
      {
        heading: '助成対象経費',
        content: '<p>助成対象となる経費は多岐にわたります。以下が主な対象経費です。</p><div class="summary-box" data-title="対象経費一覧"><p>賃借料（オフィス・店舗の賃料）</p><p>広告費（HP制作、チラシ、Web広告など）</p><p>従業員人件費</p><p>器具備品購入費</p><p>産業財産権出願・導入費</p></div><p><span class="marker-green">人件費が対象に含まれている</span>のは大きなポイントです。創業初期の人材確保にかかるコストを軽減できます。</p>'
      },
      {
        heading: '申請から受給までの流れ',
        content: '<p>申請は毎年4月〜5月頃に受付が行われます。書類審査と面接審査を経て、採択が決定されます。</p><p>助成期間は最長2年間で、期間中にかかった対象経費を報告し、確定検査を経て助成金が支払われます。<span class="marker">後払い方式</span>なので、一旦は自己資金で立て替える必要があります。</p><div class="highlight-box">創業融資と組み合わせるのが定番です。日本政策金融公庫の創業融資で資金を確保しつつ、助成金で一部を回収する方法が有効です。</div>'
      },
      {
        heading: '採択率を上げるコツ',
        content: '<p>採択率は例年20〜30%程度と言われています。事業計画書の完成度が合否を左右します。</p><p><strong>市場調査に基づいた根拠のある売上見込み</strong>、差別化ポイント、実現可能性を具体的に記載することが重要です。TOKYO創業ステーションのアドバイザーに事前相談するのがおすすめです。</p>'
      }
    ],
    officialUrl: 'https://startup-station.jp/m2/services/sogyokassei/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokyo-housing-renovation',
    title: '東京都住宅リフォーム助成制度',
    organization: '東京都（各区市町村）',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '東京都',
    tags: ['東京都関連', '住宅関連', 'リフォーム'],
    eligibility: '東京都内の自治体に居住し、住宅のリフォーム工事を行う住宅所有者が対象です。自治体ごとに詳細条件が異なります。',
    applicationPeriod: '通年（予算枠に達し次第終了）',
    description: '東京都内の各区市町村が独自に実施する住宅リフォーム助成制度です。バリアフリー改修、耐震補強、省エネ改修などを対象に、工事費の一部を助成します。区によって助成額や対象工事が異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京都内では、各区市町村がそれぞれ独自の住宅リフォーム助成制度を設けています。<span class="marker">バリアフリー改修、耐震改修、省エネ改修</span>などが主な対象です。</p><p>助成額は自治体によって異なりますが、概ね工事費の10〜20%、上限10万円〜30万円程度が一般的です。</p><p>お住まいの自治体の窓口やホームページで最新情報を確認することをおすすめします。</p>'
      },
      {
        heading: '対象となるリフォーム工事',
        content: '<div class="summary-box" data-title="主な対象工事"><p>手すり設置・段差解消などのバリアフリー改修</p><p>窓の断熱化・外壁断熱などの省エネ改修</p><p>耐震診断・耐震補強工事</p><p>屋根・外壁の塗装や防水工事</p></div><p>注意点として、<span class="marker-green">工事着手前に申請が必要</span>な自治体がほとんどです。先に工事を始めてしまうと助成を受けられない場合があります。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>一般的な流れとしては、まず区市町村の窓口に相談し、申請書類を入手します。見積書や図面を添付して申請し、交付決定を受けてから工事に着手します。</p><p>工事完了後、完了報告書と領収書を提出して検査を受け、助成金が振り込まれます。</p><div class="highlight-box">施工業者を区内業者に限定している自治体もあります。業者選びの際にはこの点も確認しましょう。</div>'
      },
      {
        heading: '区ごとの助成額の例',
        content: '<p><strong>世田谷区</strong>では省エネ改修に最大20万円、<strong>練馬区</strong>ではバリアフリー改修に最大20万円、<strong>品川区</strong>では住宅改善工事に最大20万円など、自治体ごとに金額や条件が異なります。</p><p>複数の助成制度を組み合わせられる場合もありますので、区の窓口で確認することをおすすめします。</p>'
      }
    ],
    officialUrl: 'https://www.metro.tokyo.lg.jp/tosei/hodohappyo/jutaku-reform.html',
    publishedAt: '2026-03-14',
  },
  {
    slug: 'tokyo-private-school-support',
    title: '東京都私立高校授業料軽減助成金',
    organization: '東京都（東京都私学財団）',
    type: 'local',
    maxAmount: '最大48.4万円（年額）',
    maxAmountNum: 48.4,
    category: 'education',
    prefecture: '東京都',
    tags: ['東京都関連', '教育関連', '所得制限あり'],
    eligibility: '東京都内に住所がある私立高校等に通う生徒の保護者で、世帯年収約910万円未満の方が対象です。',
    targetIncome: '世帯年収約910万円未満',
    applicationPeriod: '毎年6月〜7月頃、12月〜1月頃（年2回）',
    description: '東京都が都内在住で私立高校に通う生徒の保護者を対象に実施する授業料軽減助成金です。国の高等学校等就学支援金と合わせて、授業料の実質負担を軽減する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京都の私立高校授業料軽減助成金は、<span class="marker">国の就学支援金に上乗せして都が独自に助成する</span>制度です。世帯年収に応じて助成額が決まります。</p><p>年収約590万円未満の世帯では、国と都の支援を合わせて授業料が実質無償化されるケースもあります。私立高校の学費負担に悩む家庭にとって大きな支えとなっています。</p>'
      },
      {
        heading: '助成額と所得基準',
        content: '<div class="summary-box" data-title="年収目安ごとの助成額"><p>年収約590万円未満：最大48.4万円</p><p>年収約590万円〜約760万円未満：最大33.4万円</p><p>年収約760万円〜約910万円未満：最大13.4万円</p></div><p>所得判定は住民税の課税標準額を基に行われます。共働き世帯の場合は合算して判定されます。</p><p><span class="marker-green">国の就学支援金と合わせると、年収590万円未満の世帯では授業料最大46.1万円が実質無償</span>になります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>在籍する高校を通じて申請します。学校から案内があるので、必要書類を期限内に提出しましょう。</p><div class="highlight-box">必要書類：申請書、住民税課税証明書（マイナンバーで省略可の場合あり）、在学証明書</div><p>支給は年2回に分けて保護者の口座に振り込まれます。入学時に一括で受け取れるわけではないので、一時的に授業料を立て替える必要があります。</p>'
      },
      {
        heading: '関連制度との組み合わせ',
        content: '<p>東京都では授業料のほかにも、<strong>入学支度金貸付制度</strong>（無利子）や、<strong>奨学給付金</strong>（教科書代等）など、複数の支援制度があります。</p><p>対象となる制度を漏れなく活用することで、私立高校の費用負担を大幅に軽減できます。学校の事務局や東京都私学財団に相談しましょう。</p>'
      }
    ],
    officialUrl: 'https://www.shigaku-tokyo.or.jp/parents/scholarship.html',
    publishedAt: '2026-03-16',
  },
  {
    slug: 'tokyo-nursing-care',
    title: '東京都介護職員宿舎借り上げ支援事業',
    organization: '東京都',
    type: 'local',
    maxAmount: '月額最大8.2万円',
    maxAmountNum: 8.2,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['東京都関連', '介護関連', '事業者向け'],
    eligibility: '都内で介護サービスを提供する事業者で、職員用の宿舎を借り上げる事業者が対象です。',
    targetOccupation: '介護事業者',
    applicationPeriod: '毎年4月〜5月頃',
    description: '東京都が介護人材の確保・定着を目的に実施する事業で、介護事業者が職員用の宿舎を借り上げる際の費用を助成します。介護職員の住居費負担を軽減し、離職防止につなげます。',
    sections: [
      {
        heading: '事業の目的と概要',
        content: '<p>東京都は深刻な介護人材不足に対応するため、<span class="marker">介護事業者が職員向けに宿舎を借り上げる費用を助成</span>しています。</p><p>都内は家賃が高いため、住居費の負担が介護職員の離職原因のひとつとなっています。この制度を活用することで、事業者は人材の確保と定着に役立てることができます。</p>'
      },
      {
        heading: '助成内容',
        content: '<div class="summary-box" data-title="助成内容"><p>1戸あたり月額最大82,000円</p><p>助成率：事業者負担額の7/8</p><p>福祉避難所の指定を受けている施設は補助率加算あり</p></div><p>災害時の福祉避難所として指定を受けている事業所は、さらに手厚い助成が受けられるようになっています。</p>'
      },
      {
        heading: '対象となる事業者',
        content: '<p>都内で介護保険サービスを提供している事業者が対象です。<strong>特別養護老人ホーム、介護老人保健施設、訪問介護事業所</strong>などが含まれます。</p><p>借り上げる住宅は、事業所の近隣にある賃貸住宅であることが条件です。職員個人が借りている物件を事業者名義に切り替えることも可能です。</p><div class="highlight-box">福祉避難所の指定を受けることで助成率がアップします。まだ指定を受けていない事業所は併せて検討することをおすすめします。</div>'
      },
      {
        heading: '申請手続き',
        content: '<p>毎年4月〜5月頃に東京都福祉局を通じて申請を受け付けます。事業計画書、賃貸借契約書、職員名簿などの書類が必要です。</p><p>採択後は四半期ごとに実績報告を行い、助成金が交付されます。年度途中の職員の入退去にも対応可能です。</p>'
      }
    ],
    officialUrl: 'https://www.fukushi.metro.tokyo.lg.jp/kourei/shisetu/kaigo-shukusha.html',
    publishedAt: '2026-03-18',
  },
  {
    slug: 'tokyo-disaster-preparedness',
    title: '東京都家庭における蓄電池導入促進事業（災害対策）',
    organization: '東京都',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['東京都関連', '災害対策関連', '省エネ関連'],
    eligibility: '東京都内に住所があり、自宅に太陽光発電設備と蓄電池を導入する個人が対象です。',
    applicationPeriod: '毎年4月〜翌3月（予算枠に達し次第終了）',
    description: '東京都が災害対策と脱炭素化を目的に実施する蓄電池導入への助成事業です。太陽光発電との連携により、停電時の電力確保と日常の電気代削減の両方が期待できます。',
    sections: [
      {
        heading: '事業の背景と概要',
        content: '<p>首都直下地震などの大規模災害に備え、東京都は<span class="marker">家庭での電力自給力向上</span>を推進しています。蓄電池を太陽光発電と組み合わせることで、停電時にも最低限の電力を確保できます。</p><p>環境面では、再生可能エネルギーの自家消費を促進し、CO2排出削減にも貢献します。</p>'
      },
      {
        heading: '助成額と対象設備',
        content: '<div class="summary-box" data-title="助成額"><p>蓄電池：最大120万円（1kWhあたり15万円）</p><p>太陽光発電（新規設置の場合）：別途助成あり</p><p>V2H（電気自動車充放電設備）：最大50万円</p></div><p><span class="marker-green">国の補助金との併用が可能</span>なため、実質的な負担を大幅に抑えることができます。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>設備の設置工事完了後に申請する「事後申請方式」です。設置業者と相談のうえ、必要書類を準備して申請してください。</p><div class="highlight-box">設置業者が申請手続きを代行してくれるケースも多いです。見積りの段階で助成金対応について確認しましょう。</div><p>審査完了後、指定口座に助成金が振り込まれます。申請から交付まで2〜3ヶ月程度かかります。</p>'
      },
      {
        heading: '災害時の活用メリット',
        content: '<p>蓄電池と太陽光発電の組み合わせにより、<strong>停電時でも冷蔵庫や照明、スマートフォンの充電</strong>など、最低限の電力を数日間確保できます。</p><p>特に高齢者や乳幼児のいる家庭では、災害時の在宅避難の選択肢が広がります。平常時は電気代の節約にもなり、一石二鳥の投資と言えます。</p>'
      }
    ],
    officialUrl: 'https://www.kankyo.metro.tokyo.lg.jp/climate/home/chikudenchi.html',
    publishedAt: '2026-03-20',
  },
  {
    slug: 'tokyo-single-parent-housing',
    title: '東京都ひとり親家庭住宅支援助成',
    organization: '東京都（各区市町村）',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 4,
    category: 'living',
    prefecture: '東京都',
    tags: ['東京都関連', 'ひとり親関連', '住宅支援'],
    eligibility: '東京都内に居住する20歳未満の子どもを養育するひとり親家庭の世帯主で、所得が一定基準以下の方が対象です。',
    targetIncome: '所得制限あり（自治体により異なる）',
    applicationPeriod: '通年',
    description: '東京都内の自治体が実施するひとり親家庭向けの住宅支援制度です。家賃の一部を助成することで、ひとり親家庭の生活安定を図ります。区市町村ごとに制度内容が異なりますので、お住まいの自治体にご確認ください。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひとり親家庭は収入が限られる中で、都内の高い家賃が大きな負担となっています。この制度は<span class="marker">ひとり親家庭の住居費を軽減する</span>ことを目的としています。</p><p>自治体によって「ひとり親家庭家賃助成」「住宅費助成」など名称は異なりますが、趣旨は同じです。</p>'
      },
      {
        heading: '助成内容と条件',
        content: '<div class="summary-box" data-title="助成の目安"><p>月額1万円〜4万円程度（自治体により異なる）</p><p>所得制限あり</p><p>民間賃貸住宅に居住していることが条件</p></div><p>公営住宅に入居している場合は対象外となるケースがほとんどです。生活保護の住宅扶助との併給もできません。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>お住まいの区市町村のひとり親支援担当窓口で申請します。児童扶養手当の受給者は手続きがスムーズです。</p><div class="highlight-box">必要書類：ひとり親であることの証明（戸籍謄本等）、賃貸借契約書、所得証明書、住民票</div><p>申請が受理されると、翌月分から助成が開始される自治体が多いです。更新手続きが必要な場合もありますので、年度末には確認しましょう。</p>'
      },
      {
        heading: 'その他のひとり親支援制度',
        content: '<p>住宅支援以外にも、ひとり親家庭向けには<strong>児童扶養手当、ひとり親医療費助成、JR通勤定期の割引</strong>など、様々な支援制度があります。</p><p>複数の制度を組み合わせることで、生活の安定につなげることができます。まずは区市町村のひとり親相談窓口に相談してみましょう。</p>'
      }
    ],
    officialUrl: 'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hitorioya/jutaku.html',
    publishedAt: '2026-03-22',
  },
  {
    slug: 'tokyo-childcare-support',
    title: '東京都ベビーシッター利用支援事業',
    organization: '東京都',
    type: 'local',
    maxAmount: '1時間あたり最大2,500円',
    maxAmountNum: 2500,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['東京都関連', '子育て関連', '保育関連'],
    eligibility: '東京都内に住所があり、保育所等に入所できていない0歳〜5歳児の保護者が対象です。待機児童世帯が優先されます。',
    applicationPeriod: '通年',
    description: '東京都が待機児童対策として実施するベビーシッター利用支援事業です。保育所に入所できない児童の保護者がベビーシッターを利用する際の費用を助成します。1時間あたり最大2,500円の助成で、利用者負担を大幅に軽減します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>保育所の待機児童問題は特に都市部で深刻です。東京都は<span class="marker">保育所に入れない子どもの保護者がベビーシッターを利用する際の費用を助成</span>しています。</p><p>認可保育所の入所が内定するまでの間、または日常的な保育の手段として活用できます。共働き世帯の仕事と育児の両立を強力にサポートする制度です。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成内容"><p>1時間あたり最大2,500円を助成</p><p>月の利用上限：144時間（1日8時間×月18日想定）</p><p>対象年齢：0歳〜5歳（就学前）</p></div><p><span class="marker-green">東京都の認定を受けた事業者のベビーシッターに限定</span>されます。認定事業者リストは東京都のホームページで確認できます。</p>'
      },
      {
        heading: '利用の流れ',
        content: '<p>まずお住まいの区市町村に利用申請を行います。認定を受けたら、認定事業者のベビーシッターを利用し、利用料の一部が助成されます。</p><div class="highlight-box">利用前に必ず区市町村で手続きを済ませてください。事前申請なしの利用は助成対象外となります。</div><p>利用後の精算方法は自治体ごとに異なりますが、多くの場合は月単位で実績報告を提出し、翌月以降に助成金が振り込まれます。</p>'
      },
      {
        heading: '対象外となるケース',
        content: '<p>以下のケースは助成対象外です。認可保育所に既に入所している場合、一時的な利用（リフレッシュ目的など）、都の認定を受けていない事業者の利用などです。</p><p><strong>ファミリーサポートセンター事業</strong>とは別の制度ですので、併用できる場合もあります。詳しくは区市町村の窓口で確認してください。</p>'
      },
      {
        heading: 'まとめ',
        content: '<p>待機児童の保護者にとって、この制度は非常に心強い味方です。特に育休明けに保育所に入れなかったケースでは、仕事復帰の切り札となります。</p><p>利用にあたっては早めに区市町村の窓口に相談し、認定手続きを済ませておくことをおすすめします。</p>'
      }
    ],
    officialUrl: 'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/bs/index.html',
    publishedAt: '2026-03-24',
  },

  // ────────────────────────────────────────────────
  // 大阪府 (5 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'osaka-child-allowance',
    title: '大阪府子ども食費支援事業（第3子以降）',
    organization: '大阪府',
    type: 'local',
    maxAmount: '月額最大1万円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['大阪府関連', '子育て関連', '食費支援'],
    eligibility: '大阪府内に住所がある第3子以降の0歳〜2歳児を養育する保護者が対象です。',
    applicationPeriod: '通年',
    description: '大阪府が第3子以降の子どもがいる家庭を対象に実施する食費支援事業です。月額最大1万円分の米やその他食料品を支給する形で、多子世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>大阪府では多子世帯の経済的負担軽減を目的に、<span class="marker">第3子以降の子どもを養育する世帯に対して食費を支援</span>する事業を実施しています。</p><p>お米のほか、パスタやシリアルなどの食料品も選択できます。毎月届く支援は、日々の食費の助けとなります。</p>'
      },
      {
        heading: '支援の内容',
        content: '<div class="summary-box" data-title="支援内容"><p>月額最大1万円相当の食料品</p><p>お米、パスタ、缶詰等から選択</p><p>対象：第3子以降の0歳〜2歳児</p></div><p>配送は月1回、自宅まで届けてもらえます。品目はカタログから選ぶ形式です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>お住まいの市区町村の窓口またはオンラインで申請できます。出生届の提出時に案内を受けることが多いです。</p><div class="highlight-box">必要書類：申請書、住民票（世帯全員分）、母子健康手帳のコピー</div>'
      },
      {
        heading: '対象外となるケース',
        content: '<p>生活保護受給世帯は別途支援があるため、本事業の対象外となります。また、<strong>第1子・第2子のみの世帯は対象外</strong>です。</p><p>他の自治体の同種の事業との併給は認められません。転入・転出の際は手続きが必要です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/kosodateshien/kodomo-shokuhi/',
    publishedAt: '2026-03-13',
  },
  {
    slug: 'osaka-employment-women',
    title: '大阪府女性活躍推進事業助成金',
    organization: '大阪府',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['大阪府関連', '女性活躍関連', '事業者向け'],
    eligibility: '大阪府内に事業所を有する中小企業で、女性の活躍推進に取り組む事業者が対象です。',
    targetOccupation: '中小企業事業者',
    applicationPeriod: '毎年6月〜8月頃',
    description: '大阪府が中小企業の女性活躍推進を支援するための助成金です。女性管理職の登用や、育児・介護との両立支援制度の整備に取り組む企業に対して、最大60万円を助成します。',
    sections: [
      {
        heading: '助成金の目的',
        content: '<p>大阪府は女性の就業率向上と管理職登用を推進しています。<span class="marker">中小企業における女性活躍推進の取り組みを資金面で支援</span>することが本事業の目的です。</p><p>人材不足に悩む中小企業にとって、女性人材の活用は重要な経営課題です。この助成金を活用して働きやすい職場環境を整備しましょう。</p>'
      },
      {
        heading: '助成対象となる取り組み',
        content: '<div class="summary-box" data-title="対象となる取り組み"><p>女性管理職の登用計画の策定と実行</p><p>テレワーク・時短勤務等の制度整備</p><p>社内研修やメンター制度の導入</p><p>採用活動における女性応募者拡大施策</p></div><p><span class="marker-green">女性管理職比率を一定以上に引き上げる計画がある企業は加点評価</span>されます。</p>'
      },
      {
        heading: '助成額と申請',
        content: '<p>助成率は対象経費の2/3で、上限は60万円です。取り組み内容に応じて複数年にわたる申請も可能です。</p><div class="highlight-box">えるぼし認定やくるみん認定の取得を目指す企業は、他の助成金との併用も検討してみてください。</div>'
      },
      {
        heading: '申請から交付までの流れ',
        content: '<p>まず事業計画を作成し、大阪府の審査を受けます。計画が承認されたら取り組みを実施し、完了報告書を提出して助成金が交付されます。</p><p>計画策定の段階で、<strong>大阪府の女性活躍推進アドバイザー</strong>に無料相談できます。具体的な施策の立案をサポートしてもらえます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/koyotaisaku/joseikatsuyaku/',
    publishedAt: '2026-03-26',
  },
  {
    slug: 'osaka-housing-seismic',
    title: '大阪府住宅耐震化促進事業',
    organization: '大阪府（各市町村）',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['大阪府関連', '耐震関連', '住宅関連'],
    eligibility: '大阪府内に昭和56年以前に建築された木造住宅を所有している方が対象です。',
    applicationPeriod: '通年（予算枠に達し次第終了）',
    description: '大阪府と市町村が連携して実施する住宅の耐震化支援事業です。旧耐震基準で建てられた木造住宅の耐震診断・耐震改修に最大100万円を助成します。南海トラフ地震への備えとして、積極的な活用が推奨されています。',
    sections: [
      {
        heading: '事業の背景',
        content: '<p>南海トラフ地震の発生が懸念される中、大阪府は<span class="marker">旧耐震基準（昭和56年5月以前）の木造住宅の耐震化</span>を強力に推進しています。</p><p>耐震化が進んでいない住宅は倒壊リスクが高く、居住者の命に関わります。費用面がネックとなっている方に、ぜひ活用していただきたい制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<div class="summary-box" data-title="助成内容"><p>耐震診断：無料〜数千円程度（自治体により異なる）</p><p>耐震設計費：最大10万円</p><p>耐震改修工事費：最大100万円</p><p>除却（建替え）費：最大40万円</p></div><p>まずは無料の耐震診断を受けることから始められます。診断だけでも住宅の安全性を確認できます。</p>'
      },
      {
        heading: '申請の手順',
        content: '<p>お住まいの市町村の建築指導課や防災担当課に相談してください。耐震診断→耐震設計→耐震改修の段階的な支援を受けられます。</p><div class="highlight-box">耐震改修工事の着手前に補助金の交付申請が必要です。先に工事を始めてしまうと対象外になりますのでご注意ください。</div>'
      },
      {
        heading: '改修工事の内容例',
        content: '<p>一般的な耐震改修工事には、<strong>筋交いの追加、壁の補強、基礎の補強、屋根の軽量化</strong>などがあります。</p><p>住みながらの工事が可能な場合が多いですが、工事規模によっては仮住まいが必要になることもあります。工期は通常2週間〜1ヶ月程度です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/jutakukenchiku/taishinkazeityou/',
    publishedAt: '2026-04-01',
  },
  {
    slug: 'osaka-senior-medical',
    title: '大阪府後期高齢者医療費助成制度',
    organization: '大阪府後期高齢者医療広域連合',
    type: 'local',
    maxAmount: '医療費自己負担軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['大阪府関連', '高齢者関連', '医療費助成'],
    eligibility: '大阪府内に住所がある75歳以上の方、または65歳以上で一定の障がいがある方が対象です。',
    applicationPeriod: '通年',
    description: '大阪府の後期高齢者医療制度における自己負担軽減制度です。所得に応じて医療費の自己負担割合が軽減されるほか、高額医療費の支給など、高齢者の医療費負担を抑えるための仕組みが整っています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>75歳以上（一定の障がいがある場合は65歳以上）の方は、<span class="marker">後期高齢者医療制度</span>に加入します。大阪府ではこの制度を通じて、所得に応じた医療費の負担軽減が行われています。</p><p>自己負担割合は所得に応じて1割〜3割となっており、低所得者ほど手厚い軽減を受けられます。</p>'
      },
      {
        heading: '自己負担の軽減内容',
        content: '<div class="summary-box" data-title="自己負担割合"><p>一般所得者：1割負担</p><p>一定以上所得者：2割負担</p><p>現役並み所得者：3割負担</p></div><p>さらに、月ごとの医療費が高額になった場合は<span class="marker-green">高額療養費制度</span>が適用され、上限額を超えた分が払い戻されます。</p>'
      },
      {
        heading: '各種減免制度',
        content: '<p>災害や事業の廃止・失業などにより収入が著しく減少した場合、<strong>保険料の減免</strong>を受けることができます。</p><div class="highlight-box">入院時の食事代についても、住民税非課税世帯は減額が適用されます。「限度額適用・標準負担額減額認定証」の申請をお忘れなく。</div>'
      },
      {
        heading: '手続きと窓口',
        content: '<p>75歳の誕生日を迎えると自動的に被保険者証が届きます。特別な手続きは基本的に不要ですが、65歳以上で障がいをお持ちの方は市町村窓口で申請が必要です。</p><p>高額療養費の申請は初回のみ手続きが必要で、以降は自動的に口座に振り込まれます。</p>'
      }
    ],
    officialUrl: 'https://www.kouikirengo-osaka.jp/iryou/',
    publishedAt: '2026-04-05',
  },
  {
    slug: 'osaka-education-scholarship',
    title: '大阪府育英会奨学金（給付型）',
    organization: '大阪府育英会',
    type: 'local',
    maxAmount: '年額最大36万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '大阪府',
    tags: ['大阪府関連', '教育関連', '給付型奨学金'],
    eligibility: '大阪府内に住所がある高校生・大学生等で、経済的理由により修学が困難な方が対象です。',
    targetIncome: '世帯年収約350万円以下',
    applicationPeriod: '毎年4月〜6月頃',
    description: '大阪府育英会が実施する給付型奨学金です。返済不要で、高校生は月額最大3万円、大学生等には別途支給があります。経済的に厳しい家庭の子どもたちの学びを支える制度です。',
    sections: [
      {
        heading: '奨学金の概要',
        content: '<p>大阪府育英会の給付型奨学金は、<span class="marker">返済不要</span>の奨学金です。経済的理由で修学が困難な生徒・学生を対象に、学業に専念できる環境を支援します。</p><p>貸与型と異なり返還の必要がないため、卒業後の経済的負担を心配する必要がありません。</p>'
      },
      {
        heading: '支給額と対象',
        content: '<div class="summary-box" data-title="支給額"><p>高校生：月額最大3万円（年額36万円）</p><p>成績要件：学業成績が一定以上であること</p><p>世帯年収：約350万円以下が目安</p></div><p>家族構成や世帯の特別な事情（ひとり親家庭、多子世帯等）も考慮されます。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>在籍する学校を通じて申請します。学校の奨学金担当に相談し、申請書類を入手してください。</p><div class="highlight-box">申請書類：奨学金申請書、世帯全員の住民票、所得証明書、成績証明書</div><p>選考結果は7月〜8月頃に通知されます。採択された場合、遡って4月分から支給されます。</p>'
      },
      {
        heading: '他の支援制度との併用',
        content: '<p>国の<strong>高校生等奨学給付金</strong>や、大阪府の<strong>授業料無償化制度</strong>と併用できます。複数の制度を活用して教育費の負担を最小限に抑えましょう。</p><p>大学進学時には日本学生支援機構の給付型奨学金への切り替えも可能です。進路指導の先生に早めに相談することをおすすめします。</p>'
      }
    ],
    officialUrl: 'https://www.fu-ikuei.or.jp/scholarship/kyufu/',
    publishedAt: '2026-04-08',
  },

  // ────────────────────────────────────────────────
  // 北海道 (4 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'hokkaido-migration-support',
    title: '北海道移住支援金',
    organization: '北海道',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '北海道',
    tags: ['北海道関連', '移住支援関連', 'UIJターン'],
    eligibility: '東京23区在住者または東京圏から通勤している方で、北海道内の対象市町村に移住し、対象の仕事に就く方が対象です。',
    applicationPeriod: '通年（予算枠に達し次第終了）',
    description: '北海道が東京圏からの移住者を対象に支給する移住支援金です。世帯で最大100万円、単身で最大60万円を支給します。テレワーク移住やマッチングサイトを通じた就職も対象に含まれています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北海道移住支援金は、国の地方創生政策と連携した制度で、<span class="marker">東京圏（東京都・埼玉県・千葉県・神奈川県）からの移住者に支援金を支給</span>します。</p><p>北海道は広大な自然環境と豊かな食文化が魅力で、近年テレワークの普及に伴い移住希望者が増加しています。この支援金は移住の初期費用を軽減する心強い制度です。</p>'
      },
      {
        heading: '支給額と要件',
        content: '<div class="summary-box" data-title="支給額"><p>世帯での移住：最大100万円</p><p>単身での移住：最大60万円</p><p>18歳未満の子ども1人につき最大100万円加算</p></div><p>支給要件として、<span class="marker-green">移住先の市町村に5年以上居住する意思があること</span>が求められます。5年未満で転出した場合は返還が必要になることがあります。</p>'
      },
      {
        heading: '対象となる就業・テレワーク',
        content: '<p>以下のいずれかに該当する必要があります。</p><div class="summary-box" data-title="対象となる要件"><p>北海道のマッチングサイト掲載求人への就職</p><p>テレワークで東京圏の仕事を継続</p><p>北海道内での起業（起業支援金の交付決定を受けていること）</p><p>専門人材としてプロフェッショナル人材事業を利用</p></div><p>テレワーク移住が対象に含まれているのは大きなポイントです。今の仕事を辞めずに北海道暮らしを始められます。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>移住先の市町村に申請します。移住前ではなく、<strong>移住後3ヶ月以上1年以内</strong>に申請する必要があります。</p><div class="highlight-box">移住前に対象市町村かどうか、対象要件を満たすかどうかを必ず確認してください。すべての市町村が対象ではありません。</div><p>審査の結果、支給が決定されると指定の口座に振り込まれます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hokkaido.lg.jp/ss/ckk/ijushienkin.html',
    publishedAt: '2026-03-15',
  },
  {
    slug: 'hokkaido-childcare-support',
    title: '北海道子育て応援事業（第2子以降保育料無償化）',
    organization: '北海道',
    type: 'local',
    maxAmount: '保育料全額無償',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['北海道関連', '子育て関連', '保育料無償化'],
    eligibility: '北海道内に住所がある第2子以降の子どもの保護者で、認可保育所等を利用している方が対象です。',
    applicationPeriod: '通年',
    description: '北海道が独自に実施する第2子以降の保育料無償化事業です。国の制度では3歳未満の保育料は原則有料ですが、北海道では第2子以降について独自に無償化を実施しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>国の幼児教育・保育の無償化制度では、<span class="marker">3歳未満の保育料は住民税非課税世帯を除き有料</span>です。北海道はこれを補完する形で、第2子以降の保育料を独自に無償化しています。</p><p>0歳〜2歳の保育料は月額数万円と高額なため、特に共働き世帯にとって大きな負担軽減となります。</p>'
      },
      {
        heading: '対象と無償化の内容',
        content: '<div class="summary-box" data-title="無償化の対象"><p>第2子以降の0歳〜2歳児の保育料</p><p>認可保育所、認定こども園、小規模保育事業所が対象</p><p>所得制限なし</p></div><p><span class="marker-green">所得に関係なく第2子以降は無償</span>となるのが特徴です。第1子の年齢制限もありません。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>市町村の保育課で保育所の利用申請と同時に手続きします。特別な追加申請は原則不要ですが、自治体によっては確認書類の提出が求められます。</p><div class="highlight-box">認可外保育施設を利用している場合は、別途申請が必要な場合があります。自治体の窓口に確認してください。</div>'
      },
      {
        heading: '注意点',
        content: '<p>給食費（副食費）は無償化の対象外です。また、延長保育料も別途かかります。</p><p>年度途中に転入した場合は、転入先の市町村で改めて手続きが必要です。<strong>保育料の日割り計算</strong>について確認しておきましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hokkaido.lg.jp/hf/kms/hoikuryou-musyouka.html',
    publishedAt: '2026-03-28',
  },
  {
    slug: 'hokkaido-heating-support',
    title: '北海道灯油等燃料費助成制度',
    organization: '北海道（各市町村）',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '北海道',
    tags: ['北海道関連', '生活支援関連', '冬期対策'],
    eligibility: '北海道内の各市町村に住所がある低所得世帯（住民税非課税世帯等）が対象です。',
    targetIncome: '住民税非課税世帯等',
    applicationPeriod: '毎年10月〜12月頃',
    description: '北海道の厳しい冬を乗り越えるための灯油等燃料費助成制度です。低所得世帯を対象に、暖房用燃料費の一部を助成します。市町村ごとに助成額や対象者が異なります。',
    sections: [
      {
        heading: '制度の背景',
        content: '<p>北海道の冬は長く厳しく、暖房費は家計に大きな負担です。特に<span class="marker">灯油価格の高騰時には低所得世帯への影響が深刻</span>になります。</p><p>各市町村では独自に燃料費の助成を行い、住民の冬期の生活を支えています。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成の目安"><p>1世帯あたり1万円〜3万円程度</p><p>灯油購入費・電気代（暖房用）が対象</p><p>現金支給またはクーポン券</p></div><p>自治体によっては灯油の現物支給（配達）を行っているところもあります。</p>'
      },
      {
        heading: '対象世帯と申請',
        content: '<p>住民税非課税世帯、高齢者世帯、障がい者世帯、ひとり親世帯などが主な対象です。<strong>市町村から対象者に通知が届く</strong>場合が多いですが、届かない場合は窓口に確認しましょう。</p><div class="highlight-box">申請時期は冬の到来前（10月〜12月頃）が一般的です。申請を忘れないようにしましょう。</div>'
      },
      {
        heading: '省エネ対策との組み合わせ',
        content: '<p>灯油代を節約するために、<strong>断熱リフォームや高効率暖房機器の導入</strong>を検討するのも一つの方法です。北海道では住宅の断熱改修に対する助成制度もあります。</p><p>長期的な視点で、燃料費助成と断熱改修助成を併用するのが賢い方法です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hokkaido.lg.jp/ss/tkk/touyu-josei.html',
    publishedAt: '2026-04-10',
  },
  {
    slug: 'hokkaido-agriculture-new',
    title: '北海道新規就農者育成総合支援事業',
    organization: '北海道',
    type: 'local',
    maxAmount: '最大150万円（年額）',
    maxAmountNum: 150,
    category: 'employment',
    prefecture: '北海道',
    tags: ['北海道関連', '農業関連', '新規就農'],
    eligibility: '北海道で新たに農業を始める50歳未満の方で、独立自営就農する方が対象です。',
    targetOccupation: '新規就農者',
    applicationPeriod: '毎年2月〜4月頃',
    description: '北海道が新規就農者の育成・定着を支援する事業です。就農初期の経営安定を図るため、最大150万円（年額）を最長5年間支給します。研修期間中の生活費支援も別途あります。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>北海道は日本最大の農業地帯であり、<span class="marker">新規就農者の受け入れを積極的に推進</span>しています。就農初期は収入が不安定になりがちですが、この制度で経営が安定するまでの期間を支援します。</p><p>国の農業次世代人材投資事業と連携した制度で、北海道独自の上乗せ支援もあります。</p>'
      },
      {
        heading: '支援内容',
        content: '<div class="summary-box" data-title="支援内容"><p>経営開始型：年額最大150万円（最長5年間）</p><p>研修型：年額最大150万円（最長2年間）</p><p>就農準備資金：農地取得や機械購入のための融資制度も</p></div><p>夫婦で就農する場合は加算もあります。<span class="marker-green">返済不要の給付型</span>なので、安心して農業に取り組めます。</p>'
      },
      {
        heading: '対象者の要件',
        content: '<p>50歳未満で、独立自営就農すること（親の農地を継ぐ場合は一定の要件あり）が条件です。</p><div class="highlight-box">市町村の農業委員会や農業改良普及センターで「青年等就農計画」の認定を受ける必要があります。計画作成の相談は無料です。</div>'
      },
      {
        heading: '北海道で就農するメリット',
        content: '<p>北海道は<strong>広大な農地、恵まれた気候、充実した支援体制</strong>が揃っています。酪農、畑作、稲作、園芸など多様な農業経営が可能です。</p><p>就農希望者向けの体験研修や農業体験ツアーも定期的に開催されています。まずは現地を訪れて雰囲気を感じてみることをおすすめします。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hokkaido.lg.jp/ns/nsk/shinkishuunou.html',
    publishedAt: '2026-04-15',
  },

  // ────────────────────────────────────────────────
  // 神奈川県 (4 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'kanagawa-child-medical',
    title: '神奈川県小児医療費助成制度',
    organization: '神奈川県（各市町村）',
    type: 'local',
    maxAmount: '医療費助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['神奈川県関連', '子ども医療関連', '所得制限あり'],
    eligibility: '神奈川県内の各市町村に住所がある0歳から中学3年生（一部自治体は18歳）までの子どもの保護者が対象です。',
    applicationPeriod: '通年',
    description: '神奈川県内の各市町村が実施する小児医療費助成制度です。子どもの通院・入院にかかる医療費の自己負担分を助成します。対象年齢や所得制限は市町村によって異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神奈川県では県の補助のもと、<span class="marker">各市町村が独自に小児医療費助成制度を実施</span>しています。対象年齢は市町村によって異なり、中学3年生まで、高校生まで、と様々です。</p><p>横浜市や川崎市など大規模自治体では18歳まで拡大している場合もあります。</p>'
      },
      {
        heading: '主要市町村の制度比較',
        content: '<div class="summary-box" data-title="主要市町村の対象年齢"><p>横浜市：中学3年生まで（所得制限あり）</p><p>川崎市：中学3年生まで（所得制限なし）</p><p>相模原市：中学3年生まで（所得制限あり）</p><p>藤沢市：中学3年生まで（所得制限なし）</p></div><p><span class="marker-green">所得制限の有無は自治体ごとに異なる</span>ため、お住まいの自治体の条件を確認することが大切です。</p>'
      },
      {
        heading: '申請方法と利用方法',
        content: '<p>出生届・転入届の提出時に、あわせて申請手続きを行います。医療証が交付されたら、県内の医療機関で提示するだけで助成を受けられます。</p><div class="highlight-box">県外の医療機関を受診した場合は、後日払い戻し申請が必要です。領収書は必ず保管しておきましょう。</div>'
      },
      {
        heading: '注意事項',
        content: '<p>入院時の食事代、差額ベッド代、予防接種の費用などは<strong>助成の対象外</strong>です。また、他の公費医療制度（ひとり親医療費助成等）と併用することはできません。</p><p>年度ごとに所得審査が行われる自治体では、毎年の更新手続きが必要な場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/cz6/cnt/f6526/',
    publishedAt: '2026-03-17',
  },
  {
    slug: 'kanagawa-barrier-free',
    title: '神奈川県バリアフリー住宅改修助成',
    organization: '神奈川県（各市町村）',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['神奈川県関連', '住宅改修関連', 'バリアフリー'],
    eligibility: '神奈川県内に居住する要介護認定を受けた方、または65歳以上の方の同居家族が対象です。',
    applicationPeriod: '通年',
    description: '神奈川県内の市町村が実施するバリアフリー住宅改修の助成制度です。介護保険の住宅改修費（上限20万円）と組み合わせて利用できる場合もあり、高齢者や障がい者が安心して暮らせる住環境づくりを支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加齢や障がいにより、自宅での生活に支障が生じた場合、<span class="marker">バリアフリー改修にかかる費用の一部を助成</span>する制度です。</p><p>介護保険制度の住宅改修費（自己負担1〜3割、上限20万円）に加えて、市町村独自の助成を受けられるケースがあります。</p>'
      },
      {
        heading: '対象となる改修工事',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取り付け</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>ドアから引き戸への変更</p><p>洋式便器等への取り替え</p></div><p>これらは介護保険の対象工事と同じです。市町村の上乗せ制度では、<span class="marker-green">浴室の改修やスロープの設置</span>なども対象になる場合があります。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>まずケアマネジャーに相談し、改修の必要性を確認します。次に市町村の介護保険課に事前申請を行い、承認を得てから工事に着手します。</p><div class="highlight-box">工事前に必ず事前申請が必要です。事前申請なしで行った工事は助成対象外になります。</div>'
      },
      {
        heading: '費用の目安',
        content: '<p>一般的なバリアフリー改修の費用目安は以下の通りです。手すり設置：3〜10万円、段差解消：5〜15万円、浴室改修：20〜80万円。</p><p>助成金を活用すれば、<strong>自己負担を大幅に抑えて改修が可能</strong>です。まずはケアマネジャーや市町村窓口に相談してみましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/u6s/cnt/f7158/',
    publishedAt: '2026-04-02',
  },
  {
    slug: 'kanagawa-startup-women',
    title: '神奈川県女性起業家支援助成金',
    organization: '神奈川県（かながわ産業振興センター）',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['神奈川県関連', '女性起業関連', '創業支援'],
    eligibility: '神奈川県内で創業予定または創業後3年未満の女性起業家が対象です。',
    targetOccupation: '女性起業家',
    applicationPeriod: '毎年5月〜7月頃',
    description: '神奈川県が女性の起業を支援するための助成金です。ビジネスプランコンテスト形式で選考され、採択者には最大100万円の助成金のほか、専門家によるメンタリング支援も提供されます。',
    sections: [
      {
        heading: '助成金の概要',
        content: '<p>神奈川県では女性の起業を促進するため、<span class="marker">ビジネスプランの審査を通じて優秀な事業に対して助成金を交付</span>しています。</p><p>資金面だけでなく、経営の専門家によるメンタリングやネットワーキングの機会も提供されるため、創業初期の様々な課題を解決する支援を受けられます。</p>'
      },
      {
        heading: '助成内容',
        content: '<div class="summary-box" data-title="助成内容"><p>最優秀賞：100万円</p><p>優秀賞：50万円（複数名）</p><p>全採択者に専門家メンタリング（6ヶ月間）</p></div><p>助成金の使途は広く、<span class="marker-green">設備費、広告費、外注費、研修費</span>など、事業に必要な経費に充てることができます。</p>'
      },
      {
        heading: '応募から選考の流れ',
        content: '<p>書類審査（ビジネスプラン）と面接審査（プレゼンテーション）の2段階で選考が行われます。</p><div class="highlight-box">ビジネスプランの書き方に自信がない方は、かながわ産業振興センターの無料相談を事前に利用することをおすすめします。</div>'
      },
      {
        heading: '過去の採択事例',
        content: '<p>過去には<strong>地域食材を活用した飲食店、子育てママ向けのオンラインサービス、高齢者向けITサポート事業</strong>など、地域課題の解決につながる事業が多く採択されています。</p><p>社会貢献性の高いビジネスプランは評価が高い傾向にあります。自身の経験やスキルを活かした独自性のあるプランを心がけましょう。</p>'
      }
    ],
    officialUrl: 'https://www.kipc.or.jp/seminar/women-startup/',
    publishedAt: '2026-04-18',
  },
  {
    slug: 'kanagawa-disaster-block-wall',
    title: '神奈川県ブロック塀等撤去・改善補助金',
    organization: '神奈川県（各市町村）',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'disaster',
    prefecture: '神奈川県',
    tags: ['神奈川県関連', '災害対策関連', 'ブロック塀'],
    eligibility: '神奈川県内の通学路や避難路に面した危険なブロック塀等の所有者が対象です。',
    applicationPeriod: '通年（予算枠に達し次第終了）',
    description: '地震時のブロック塀倒壊による被害を防ぐため、危険なブロック塀等の撤去・改善に対して補助金を交付する制度です。通学路の安全確保にも寄与する重要な防災対策です。',
    sections: [
      {
        heading: '制度の背景',
        content: '<p>2018年の大阪北部地震では、<span class="marker">ブロック塀の倒壊により通学中の児童が犠牲</span>になる痛ましい事故が発生しました。これを受けて全国的にブロック塀の安全対策が強化されています。</p><p>神奈川県でも各市町村と連携して、危険なブロック塀の撤去・改善を促進しています。</p>'
      },
      {
        heading: '補助金の内容',
        content: '<div class="summary-box" data-title="補助金の目安"><p>撤去費用：最大15万円〜30万円（自治体による）</p><p>フェンス等への改修：最大20万円〜30万円</p><p>補助率：工事費の1/2〜2/3</p></div><p>撤去だけでなく、<span class="marker-green">安全なフェンスや生垣への改修費用も補助対象</span>になります。</p>'
      },
      {
        heading: '対象となるブロック塀',
        content: '<p>通学路や緊急輸送路、避難路に面した高さ80cm以上のブロック塀等が主な対象です。</p><div class="highlight-box">自治体の職員による現地調査で「危険」と判定されたものが対象となります。まずは自治体の窓口に相談してください。</div>'
      },
      {
        heading: '申請の流れ',
        content: '<p>市町村の防災担当課や建築指導課に相談し、現地調査を依頼します。危険と判定されたら、補助金の交付申請を行い、承認後に工事に着手します。</p><p><strong>工事前の申請が必須</strong>ですので、先に業者に依頼してしまわないよう注意してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/cz6/cnt/f537285/',
    publishedAt: '2026-05-01',
  },

  // ────────────────────────────────────────────────
  // 愛知県 (3 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'aichi-childcare-subsidy',
    title: '愛知県多子世帯保育料軽減事業',
    organization: '愛知県',
    type: 'local',
    maxAmount: '保育料半額〜無償',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['愛知県関連', '子育て関連', '多子世帯'],
    eligibility: '愛知県内に住所がある第2子以降の子どもの保護者で、認可保育施設を利用している方が対象です。',
    applicationPeriod: '通年',
    description: '愛知県が実施する多子世帯の保育料軽減事業です。第2子は半額、第3子以降は無償化するなど、子育て世帯の経済的負担を軽減します。国の無償化制度と合わせて、手厚い支援が受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>愛知県は子育て世帯の支援に力を入れており、<span class="marker">多子世帯の保育料を独自に軽減</span>する事業を実施しています。</p><p>国の幼児教育・保育の無償化（3歳以上）に加えて、0歳〜2歳の保育料についても多子世帯向けの軽減措置があります。</p>'
      },
      {
        heading: '軽減内容',
        content: '<div class="summary-box" data-title="保育料軽減"><p>第2子：保育料半額</p><p>第3子以降：保育料無償</p><p>年齢制限なし（第1子が社会人でもカウント）</p></div><p><span class="marker-green">第1子の年齢にかかわらず兄弟姉妹としてカウント</span>される点が大きな特徴です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>保育所の入所申請時に、子どもの人数を申告するだけで自動的に適用されます。特別な追加手続きは原則不要です。</p><div class="highlight-box">認可外保育施設を利用している場合は、別途市町村での申請が必要です。</div>'
      },
      {
        heading: '他の支援制度との併用',
        content: '<p>愛知県では保育料軽減のほかにも、<strong>子ども医療費助成、児童手当、幼稚園の預かり保育無償化</strong>など、子育て支援制度が充実しています。</p><p>すべての制度を漏れなく活用して、子育ての経済的負担を最小限に抑えましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aichi.jp/soshiki/kosodate/hoikuryo-keigen.html',
    publishedAt: '2026-03-19',
  },
  {
    slug: 'aichi-employment-training',
    title: '愛知県職業訓練受講給付金',
    organization: '愛知県',
    type: 'local',
    maxAmount: '月額最大10万円',
    maxAmountNum: 10,
    category: 'education',
    prefecture: '愛知県',
    tags: ['愛知県関連', '職業訓練関連', 'スキルアップ'],
    eligibility: '愛知県内に住所があり、ハローワークの求職者支援訓練を受講する方で、一定の所得要件を満たす方が対象です。',
    targetIncome: '月収8万円以下',
    targetOccupation: '求職者',
    applicationPeriod: '通年（訓練コースの開講に合わせて）',
    description: '愛知県の求職者を対象とした職業訓練受講中の生活支援給付金です。ハローワークの求職者支援訓練を受講しながら、月額最大10万円の生活費を受け取ることができます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>失業中や収入の少ない方がスキルアップのために職業訓練を受ける際、<span class="marker">訓練期間中の生活費を支給</span>する制度です。</p><p>訓練は無料で受講でき、さらに生活費まで支給されるため、安心してスキルアップに専念できます。</p>'
      },
      {
        heading: '給付金の内容',
        content: '<div class="summary-box" data-title="給付金"><p>職業訓練受講手当：月額10万円</p><p>通所手当（交通費）：実費支給</p><p>寄宿手当（遠方の場合）：月額10,700円</p></div><p>支給期間は訓練の受講期間と同じで、概ね3ヶ月〜6ヶ月程度です。</p>'
      },
      {
        heading: '受講できる訓練コース',
        content: '<p>愛知県ではものづくり産業が盛んなため、<strong>製造技術、IT、介護、事務</strong>など多様な訓練コースが用意されています。</p><div class="highlight-box">訓練コースの情報はハローワークの窓口やWebサイトで確認できます。人気コースは定員に達しやすいため、早めの申込みがおすすめです。</div>'
      },
      {
        heading: '申請の流れ',
        content: '<p>まずハローワークで求職申込みを行い、職業相談を受けます。適切な訓練コースが見つかったら、受講申込みと給付金の申請を行います。</p><p><span class="marker-green">訓練開始後は毎月の出席状況の報告が必要</span>です。出席率80%以上を維持しないと給付金が停止される場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aichi.jp/soshiki/shugyo/kunren-kyufu.html',
    publishedAt: '2026-04-20',
  },
  {
    slug: 'aichi-nursing-robot',
    title: '愛知県介護ロボット導入支援事業補助金',
    organization: '愛知県',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'nursing',
    prefecture: '愛知県',
    tags: ['愛知県関連', '介護関連', 'テクノロジー'],
    eligibility: '愛知県内の介護サービス事業所で、介護ロボットやICT機器を導入する事業者が対象です。',
    targetOccupation: '介護事業者',
    applicationPeriod: '毎年5月〜7月頃',
    description: '愛知県が介護現場の負担軽減を目的に実施する介護ロボット・ICT導入支援事業です。移乗支援ロボット、見守りセンサー、記録システムなどの導入費用を最大100万円まで補助します。',
    sections: [
      {
        heading: '事業の背景',
        content: '<p>介護人材不足が深刻化する中、<span class="marker">介護ロボットやICTの活用による業務効率化</span>が注目されています。愛知県はものづくり県としてのノウハウを活かし、介護現場へのテクノロジー導入を推進しています。</p>'
      },
      {
        heading: '補助対象機器',
        content: '<div class="summary-box" data-title="対象機器の例"><p>移乗支援ロボット（装着型・非装着型）</p><p>見守りセンサー・通知システム</p><p>介護記録ソフト・タブレット</p><p>排泄支援機器</p></div><p>1事業所あたり最大100万円（補助率は機器によって異なる）が支給されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>愛知県の介護保険課に事業計画書を提出し、審査を受けます。機器の見積書や導入スケジュールの提出が必要です。</p><div class="highlight-box">メーカーのデモンストレーションを受けてから機器を選定することをおすすめします。愛知県の介護ロボット普及推進センターで体験できます。</div>'
      },
      {
        heading: '導入効果と事例',
        content: '<p>導入事業所からは「<strong>腰痛が減った</strong>」「<strong>夜間の見回り負担が軽減された</strong>」「<strong>記録作成時間が半分になった</strong>」などの声が寄せられています。</p><p>職員の身体的負担の軽減は離職防止にもつながり、結果として介護サービスの質の向上に貢献します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aichi.jp/soshiki/kaigo/robot-hojo.html',
    publishedAt: '2026-05-05',
  },

  // ────────────────────────────────────────────────
  // 福岡県 (3 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'fukuoka-startup-fund',
    title: '福岡県スタートアップ支援助成金',
    organization: '福岡県（福岡県中小企業振興センター）',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['福岡県関連', 'スタートアップ関連', '創業支援'],
    eligibility: '福岡県内で創業予定または創業後3年未満の個人・法人が対象です。革新的なビジネスモデルを持つ事業が優先されます。',
    targetOccupation: '起業家・スタートアップ',
    applicationPeriod: '毎年4月〜6月頃',
    description: '福岡県が「スタートアップ都市」としてのブランド強化の一環で実施する創業支援助成金です。特にIT・テクノロジー分野や社会課題解決型のビジネスに対して、最大200万円の助成金を交付します。',
    sections: [
      {
        heading: '助成金の概要',
        content: '<p>福岡県は「スタートアップ都市」を宣言し、<span class="marker">起業家の集まるエコシステムの構築</span>に力を入れています。この助成金はその柱の一つです。</p><p>福岡市の「Fukuoka Growth Next」や県のインキュベーション施設と連携し、資金面だけでなく総合的な支援を提供します。</p>'
      },
      {
        heading: '助成内容',
        content: '<div class="summary-box" data-title="助成内容"><p>助成額：最大200万円（助成率2/3）</p><p>対象経費：人件費、設備費、広告費、外注費等</p><p>助成期間：最長1年間</p></div><p><span class="marker-green">IT・テクノロジー分野のビジネスは加点評価</span>されます。ソーシャルビジネスも歓迎です。</p>'
      },
      {
        heading: '選考プロセス',
        content: '<p>書類審査とプレゼンテーション審査の2段階で選考されます。ビジネスの革新性、成長可能性、社会的インパクトが評価ポイントです。</p><div class="highlight-box">採択者には助成金のほか、専門家メンタリング、ネットワーキングイベントへの参加、コワーキングスペースの優先利用などの特典があります。</div>'
      },
      {
        heading: '福岡で起業するメリット',
        content: '<p>福岡は<strong>家賃・生活費が東京の約7割、空港から都心まで地下鉄で約10分、アジアへのアクセス良好</strong>と、スタートアップにとって魅力的な条件が揃っています。</p><p>行政の創業支援が手厚く、起業家コミュニティも活発です。Uターン・Iターン起業にも最適な環境です。</p>'
      }
    ],
    officialUrl: 'https://www.joho-fukuoka.or.jp/startup/',
    publishedAt: '2026-03-25',
  },
  {
    slug: 'fukuoka-child-education',
    title: '福岡県放課後児童クラブ利用料助成',
    organization: '福岡県（各市町村）',
    type: 'local',
    maxAmount: '月額最大1万円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['福岡県関連', '学童保育関連', '共働き支援'],
    eligibility: '福岡県内の放課後児童クラブ（学童保育）を利用する小学生の保護者で、低所得世帯が対象です。',
    targetIncome: '住民税非課税世帯・ひとり親世帯',
    applicationPeriod: '毎年4月〜5月頃',
    description: '福岡県が低所得世帯の学童保育利用料の負担を軽減するための助成制度です。放課後児童クラブの利用料が月額最大1万円減額されます。共働き世帯やひとり親世帯の子どもの放課後の居場所づくりを支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>放課後児童クラブ（学童保育）の利用料は月額5,000円〜15,000円程度が一般的ですが、<span class="marker">低所得世帯にとっては大きな負担</span>です。</p><p>福岡県ではこうした世帯の利用料を軽減し、子どもの安全な放課後の居場所を確保することを支援しています。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成内容"><p>住民税非課税世帯：月額最大1万円</p><p>ひとり親世帯：月額最大7,500円</p><p>多子世帯の第2子以降：月額最大5,000円</p></div><p>市町村によって助成額が異なる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>利用しているクラブまたは市町村の窓口で申請します。所得証明書等の書類が必要です。</p><div class="highlight-box">年度ごとに更新手続きが必要です。更新を忘れると助成が途切れてしまいますのでご注意ください。</div>'
      },
      {
        heading: 'まとめ',
        content: '<p>学童保育は共働き世帯やひとり親世帯にとって欠かせないサービスです。費用面がネックで利用をためらっている方は、<strong>この助成制度を活用</strong>してお子さんの放課後の居場所を確保しましょう。</p><p>まずはお住まいの市町村窓口に相談してみてください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukuoka.lg.jp/contents/gakudou-josei.html',
    publishedAt: '2026-04-12',
  },
  {
    slug: 'fukuoka-disaster-flood',
    title: '福岡県水害対策住宅改修支援事業',
    organization: '福岡県',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'disaster',
    prefecture: '福岡県',
    tags: ['福岡県関連', '水害対策関連', '住宅改修'],
    eligibility: '福岡県内の浸水想定区域に住宅を所有する方で、水害対策のための改修工事を行う方が対象です。',
    applicationPeriod: '毎年4月〜翌2月',
    description: '福岡県が水害リスクの高い地域の住宅に対して、止水板の設置や嵩上げ工事などの水害対策改修費用を助成する事業です。近年の豪雨被害の増加を受けて、事前防災対策を推進しています。',
    sections: [
      {
        heading: '事業の背景',
        content: '<p>福岡県は近年、<span class="marker">豪雨による浸水被害が繰り返し発生</span>しています。2017年の九州北部豪雨、2019年・2020年の大雨など、水害は年々深刻化しています。</p><p>被害を未然に防ぐため、住宅の水害対策改修に対して助成を行い、事前防災を推進しています。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成内容"><p>止水板の設置：最大20万円</p><p>床の嵩上げ工事：最大50万円</p><p>ポンプ設備の設置：最大30万円</p><p>補助率：対象経費の1/2</p></div><p>複数の対策を組み合わせる場合は、合計で最大50万円が上限です。</p>'
      },
      {
        heading: '対象地域',
        content: '<p>洪水浸水想定区域や過去に浸水被害のあった地域が対象です。<strong>ハザードマップで浸水区域に指定されている地域</strong>が基本的な対象エリアとなります。</p><div class="highlight-box">お住まいが対象地域かどうかは、市町村のハザードマップで確認するか、県の防災担当課にお問い合わせください。</div>'
      },
      {
        heading: '申請手続き',
        content: '<p>工事着手前に県の担当窓口に申請します。見積書、図面、写真（現状）を添付して提出し、交付決定後に工事に着手してください。</p><p>工事完了後は完了報告と写真提出が必要です。<span class="marker-green">工事前の写真は忘れずに撮影</span>しておきましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukuoka.lg.jp/contents/suigai-jutaku.html',
    publishedAt: '2026-05-10',
  },

  // ────────────────────────────────────────────────
  // 埼玉県 (3 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'saitama-child-support',
    title: '埼玉県多子世帯応援クーポン事業',
    organization: '埼玉県',
    type: 'local',
    maxAmount: '最大10万円分',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['埼玉県関連', '子育て関連', '多子世帯'],
    eligibility: '埼玉県内に住所がある第3子以降の子どもが生まれた世帯の保護者が対象です。',
    applicationPeriod: '通年（出生届提出後）',
    description: '埼玉県が第3子以降の子どもが生まれた世帯に対して、子育て用品の購入に使えるクーポン（最大10万円分）を支給する事業です。おむつやミルク、ベビー用品など幅広い商品に利用できます。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>埼玉県は多子世帯の経済的負担軽減のため、<span class="marker">第3子以降の子どもが生まれた世帯にクーポンを支給</span>しています。</p><p>出産祝いとしての意味合いもあり、出産後すぐに使える実用的な支援です。</p>'
      },
      {
        heading: 'クーポンの内容',
        content: '<div class="summary-box" data-title="クーポン詳細"><p>金額：最大10万円分</p><p>利用可能店舗：県内の登録店舗・オンラインショップ</p><p>利用期限：交付から1年間</p></div><p>おむつ、ミルク、ベビーカー、チャイルドシートなど、<span class="marker-green">子育てに必要な幅広い商品に利用可能</span>です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>出生届の提出後、市町村から案内が届きます。オンラインまたは窓口で申請し、クーポンが郵送されます。</p><div class="highlight-box">クーポンは電子クーポン（アプリ）と紙のクーポンから選択できます。電子クーポンの方が利用可能店舗が多い傾向にあります。</div>'
      },
      {
        heading: '注意事項',
        content: '<p>クーポンの転売・譲渡は禁止されています。また、<strong>換金はできません</strong>。お釣りも出ないため、額面以上の商品を購入する際に利用するのが効率的です。</p><p>利用期限を過ぎたクーポンは無効になりますので、計画的にご利用ください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.saitama.lg.jp/a0607/tashi-coupon.html',
    publishedAt: '2026-03-21',
  },
  {
    slug: 'saitama-housing-eco',
    title: '埼玉県住宅用省エネ設備導入補助金',
    organization: '埼玉県',
    type: 'local',
    maxAmount: '最大35万円',
    maxAmountNum: 35,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['埼玉県関連', '省エネ関連', '住宅設備'],
    eligibility: '埼玉県内に住所がある方で、自宅に省エネ設備（太陽光発電、蓄電池、HEMS等）を新たに設置する方が対象です。',
    applicationPeriod: '毎年4月〜翌2月（予算枠に達し次第終了）',
    description: '埼玉県が住宅の脱炭素化を推進するために実施する省エネ設備導入への補助金制度です。太陽光発電、蓄電池、V2H、HEMSなどの設備導入に対して最大35万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>埼玉県は2050年のカーボンニュートラル実現に向けて、<span class="marker">住宅への省エネ設備導入を積極的に支援</span>しています。</p><p>電気代の高騰が続く中、太陽光発電や蓄電池の導入は家計の光熱費削減にも直結します。環境に優しく、お財布にも優しい投資です。</p>'
      },
      {
        heading: '補助対象設備と金額',
        content: '<div class="summary-box" data-title="補助金額"><p>蓄電池：最大20万円</p><p>V2H（電気自動車充放電設備）：最大15万円</p><p>HEMS（家庭用エネルギー管理システム）：最大2万円</p><p>太陽光発電：国や市町村の補助と併用可</p></div><p><span class="marker-green">国・市町村の補助金と併用可能</span>なため、トータルで大幅なコスト削減が期待できます。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>設備の設置工事完了後に申請する事後申請方式です。領収書、設備の仕様書、工事写真などを添えて申請します。</p><div class="highlight-box">申請は先着順で、予算枠に達した時点で受付が終了します。年度前半に申請するのがおすすめです。</div>'
      },
      {
        heading: '導入効果の目安',
        content: '<p>太陽光発電（4kW）と蓄電池（7kWh）を組み合わせた場合、<strong>年間の電気代を約10〜15万円削減</strong>できるケースが多いです。</p><p>補助金と電気代削減を合わせると、10年程度で投資回収が見込めます。長期的な資産価値の向上にもつながります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.saitama.lg.jp/a0502/shoene-hojo.html',
    publishedAt: '2026-04-22',
  },
  {
    slug: 'saitama-senior-welfare',
    title: '埼玉県高齢者在宅生活支援事業',
    organization: '埼玉県（各市町村）',
    type: 'local',
    maxAmount: '月額最大5万円相当',
    maxAmountNum: 5,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['埼玉県関連', '高齢者支援関連', '在宅介護'],
    eligibility: '埼玉県内に住所がある65歳以上で、要介護認定を受けていないが日常生活に不安のある方が対象です。',
    applicationPeriod: '通年',
    description: '埼玉県が高齢者の在宅生活を支援するための総合的な事業です。配食サービス、緊急通報システム、外出支援など、要介護認定を受けていない高齢者の日常生活をサポートします。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>介護保険の対象にならないけれど、ひとり暮らしや高齢者だけの世帯では日常生活に不安がある——。<span class="marker">そんな高齢者の在宅生活を支える</span>のがこの事業です。</p><p>各市町村が地域の実情に合わせてサービスを提供しています。</p>'
      },
      {
        heading: '利用できるサービス',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス（栄養バランスの取れた食事を定期配達）</p><p>緊急通報システム（ボタンひとつで通報できる機器の貸与）</p><p>外出支援サービス（病院等への送迎）</p><p>軽度生活援助（掃除、買い物代行等）</p></div><p>利用料は所得に応じた負担となり、<span class="marker-green">住民税非課税世帯は無料〜低額</span>で利用できます。</p>'
      },
      {
        heading: '利用申請',
        content: '<p>市町村の高齢者福祉担当窓口や地域包括支援センターに相談してください。生活状況や必要なサービスに応じて、適切な支援プランを提案してもらえます。</p><div class="highlight-box">ご本人だけでなく、離れて暮らすご家族からの相談も受け付けています。まずは電話で相談してみましょう。</div>'
      },
      {
        heading: '介護保険制度との違い',
        content: '<p>介護保険サービスは要介護（要支援）認定を受けた方が対象ですが、この事業は<strong>認定を受けていない方も利用可能</strong>です。</p><p>将来的に介護が必要になる前の「予防」としても有効です。早めにサービスを活用して、住み慣れた地域で安心して暮らし続けましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.saitama.lg.jp/a0603/zaitaku-shien.html',
    publishedAt: '2026-05-15',
  },

  // ────────────────────────────────────────────────
  // 千葉県 (3 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'chiba-child-medical',
    title: '千葉県子ども医療費助成制度',
    organization: '千葉県（各市町村）',
    type: 'local',
    maxAmount: '医療費助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['千葉県関連', '子ども医療関連', '通院・入院'],
    eligibility: '千葉県内に住所がある0歳から高校生世代までの子どもの保護者が対象です。対象年齢は市町村により異なります。',
    applicationPeriod: '通年',
    description: '千葉県内の各市町村が実施する子ども医療費助成制度です。子どもの通院・入院にかかる医療費の自己負担分を助成します。市町村によって対象年齢や自己負担額が異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉県では県の補助のもと、<span class="marker">各市町村が独自に子ども医療費助成制度を運営</span>しています。県の基準では中学3年生までが対象ですが、独自に高校生まで拡大している市町村もあります。</p><p>千葉市、船橋市、柏市など主要都市では対象年齢の拡大が進んでいます。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成内容（一般的な例）"><p>通院：自己負担300円〜無料（市町村による）</p><p>入院：自己負担なし（多くの市町村）</p><p>調剤：自己負担なし</p></div><p>自己負担の有無や金額は市町村によって異なります。<span class="marker-green">お住まいの自治体のホームページで確認</span>してください。</p>'
      },
      {
        heading: '申請と利用方法',
        content: '<p>出生届や転入届の提出時に、市町村窓口で同時に申請するのが一般的です。受給券が交届されたら、県内の医療機関で提示してください。</p><div class="highlight-box">県外の医療機関を受診した場合や、受給券を提示せずに受診した場合は、後日窓口で払い戻し申請ができます。</div>'
      },
      {
        heading: '所得制限について',
        content: '<p>市町村によっては所得制限を設けている場合があります。所得制限を超える世帯でも、<strong>入院に関しては助成対象</strong>としている自治体が多いです。</p><p>近年は所得制限を撤廃する自治体が増えてきています。転居の際には新しい自治体の制度も確認しましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.chiba.lg.jp/jika/kodomo-iryouhi.html',
    publishedAt: '2026-03-23',
  },
  {
    slug: 'chiba-migration-support',
    title: '千葉県移住支援金・起業支援金',
    organization: '千葉県',
    type: 'local',
    maxAmount: '最大100万円（移住）+最大200万円（起業）',
    maxAmountNum: 300,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['千葉県関連', '移住支援関連', '起業支援'],
    eligibility: '東京23区に在住または通勤していた方で、千葉県内の対象市町村に移住して就業・起業する方が対象です。',
    applicationPeriod: '通年（予算枠に達し次第終了）',
    description: '千葉県が東京圏からの移住者を対象に実施する移住支援金・起業支援金です。移住して就業する場合は最大100万円、起業する場合はさらに最大200万円の支援金を受け取ることができます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉県は東京圏に近いながらも自然豊かな環境が魅力です。<span class="marker">テレワークの普及に伴い、千葉県への移住ニーズが高まっています</span>。</p><p>この支援金は、東京23区からの移住者に対して移住の初期費用を支援するものです。起業する場合は追加の支援金も受けられます。</p>'
      },
      {
        heading: '支援金の内容',
        content: '<div class="summary-box" data-title="支援金額"><p>移住支援金（世帯）：最大100万円</p><p>移住支援金（単身）：最大60万円</p><p>18歳未満の子ども1人につき100万円加算</p><p>起業支援金（地域課題解決型ビジネス）：最大200万円</p></div><p>移住支援金と起業支援金は<span class="marker-green">併用可能</span>です。最大で300万円の支援を受けることができます。</p>'
      },
      {
        heading: '対象市町村と要件',
        content: '<p>千葉県内の全市町村が対象ではありません。主に東京圏からの人口流出が課題となっている地域が対象です。</p><div class="highlight-box">対象市町村のリストは千葉県のホームページで公開されています。移住先を検討する際に必ず確認してください。</div><p>テレワークで東京圏の仕事を継続する場合も、移住支援金の対象となります。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>移住後3ヶ月以上1年以内に、移住先の市町村に申請します。<strong>5年以上の居住意思</strong>が求められ、短期間で転出した場合は返還が必要になることがあります。</p><p>起業支援金は別途、県の審査委員会による事業計画の審査があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.chiba.lg.jp/seisaku/ijuu-shienkin.html',
    publishedAt: '2026-04-25',
  },
  {
    slug: 'chiba-elderly-hearing-aid',
    title: '千葉県高齢者補聴器購入助成制度',
    organization: '千葉県（各市町村）',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['千葉県関連', '高齢者支援関連', '補聴器'],
    eligibility: '千葉県内に住所がある65歳以上で、医師から補聴器の使用が必要と認められた方が対象です。',
    applicationPeriod: '通年（予算枠に達し次第終了）',
    description: '千葉県内の市町村が実施する高齢者の補聴器購入費用の助成制度です。加齢性難聴による社会参加の減少やフレイルを予防するため、補聴器の購入費用の一部を助成します。',
    sections: [
      {
        heading: '制度の背景',
        content: '<p>加齢性難聴は認知症のリスク因子のひとつとされています。<span class="marker">補聴器の使用は聴覚のサポートだけでなく、認知機能の維持にも効果が期待</span>されています。</p><p>しかし補聴器は高価で、片耳で5万円〜50万円程度かかります。この助成は高齢者の補聴器購入のハードルを下げるための制度です。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成額の目安"><p>補聴器購入費の一部：最大5万円</p><p>住民税非課税世帯はさらに上乗せの場合あり</p><p>原則1人1回限り</p></div><p>市町村によって助成額や条件が異なります。お住まいの自治体に確認してください。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>まず耳鼻咽喉科で診察を受け、補聴器の必要性を確認する医師の意見書を取得します。その後、市町村窓口に助成金を申請します。</p><div class="highlight-box">補聴器は購入前に十分な試聴を行うことが大切です。認定補聴器技能者のいる店舗での購入をおすすめします。</div>'
      },
      {
        heading: 'まとめ',
        content: '<p>「聞こえにくい」を放置すると、会話が減り、外出が減り、認知機能の低下につながるリスクがあります。<strong>早めの対処が大切</strong>です。</p><p>まずは耳鼻咽喉科で聴力検査を受け、必要に応じて補聴器の使用を検討しましょう。助成制度を活用すれば費用面のハードルも下がります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.chiba.lg.jp/koufuku/hochouki.html',
    publishedAt: '2026-05-20',
  },

  // ────────────────────────────────────────────────
  // 京都府 (3 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'kyoto-traditional-craft',
    title: '京都府伝統産業後継者育成支援事業',
    organization: '京都府',
    type: 'local',
    maxAmount: '月額最大15万円',
    maxAmountNum: 15,
    category: 'employment',
    prefecture: '京都府',
    tags: ['京都府関連', '伝統産業関連', '後継者育成'],
    eligibility: '京都府の伝統産業（西陣織、京焼・清水焼、京友禅等）の後継者として修業する40歳未満の方が対象です。',
    targetOccupation: '伝統産業後継者',
    applicationPeriod: '毎年4月〜6月頃',
    description: '京都府が伝統産業の後継者育成を目的に実施する支援事業です。伝統産業の技術を学ぶ若手に対して、修業期間中の生活費として月額最大15万円を支給します。京都の伝統文化を次世代に継承するための重要な制度です。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>京都府には西陣織、京焼・清水焼、京友禅など<span class="marker">世界に誇る伝統産業が数多くあります</span>。しかし後継者不足は深刻で、技術の断絶が危ぶまれています。</p><p>この事業は、伝統産業の技術を学びたい若手に生活費を支給することで、安心して修業に打ち込める環境を整えるものです。</p>'
      },
      {
        heading: '支援内容',
        content: '<div class="summary-box" data-title="支援内容"><p>研修奨励金：月額最大15万円</p><p>支給期間：最長3年間</p><p>研修先とのマッチング支援あり</p></div><p>修業先の親方や工房への謝金は別途支給される場合もあります。</p>'
      },
      {
        heading: '対象となる伝統産業',
        content: '<p>京都府が指定する伝統産業が対象です。代表的なものとして、<strong>西陣織、京友禅、京焼・清水焼、京仏具、京漆器、京扇子</strong>などがあります。</p><div class="highlight-box">対象産業の一覧は京都府伝統産業課のホームページで確認できます。伝統的工芸品以外の地場産業も一部対象となる場合があります。</div>'
      },
      {
        heading: '申請の流れ',
        content: '<p>まず受け入れ先の工房や親方を見つける必要があります。京都府の伝統産業課やNPO法人が紹介やマッチングをサポートしてくれます。</p><p>受け入れ先が決まったら、研修計画書を作成して京都府に申請します。<span class="marker-green">未経験者でも意欲があれば応募可能</span>です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/senshoku/dentou-koukeisha.html',
    publishedAt: '2026-03-27',
  },
  {
    slug: 'kyoto-machiya-renovation',
    title: '京都府京町家保全・活用支援事業',
    organization: '京都府（京都市）',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'housing',
    prefecture: '京都府',
    tags: ['京都府関連', '京町家関連', '歴史的建造物'],
    eligibility: '京都市内に京町家を所有し、保全・改修を行う個人・法人が対象です。解体ではなく保全・活用が条件です。',
    applicationPeriod: '毎年5月〜7月頃',
    description: '京都の歴史的な景観を形成する京町家の保全と活用を支援する事業です。老朽化した京町家の改修費用を最大500万円まで助成し、解体を防ぎながら現代の生活に合った活用を促進します。',
    sections: [
      {
        heading: '事業の背景',
        content: '<p>京町家は京都の歴史と文化を象徴する建造物ですが、<span class="marker">老朽化や維持管理の負担から年間約800棟のペースで減少</span>しています。</p><p>この事業は京町家の解体を防ぎ、住居やカフェ、ギャラリーなどとして活用することを支援します。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成内容"><p>耐震改修：最大300万円</p><p>防火改修：最大200万円</p><p>バリアフリー改修：最大100万円</p><p>合計上限：500万円</p></div><p>住居としてだけでなく、<span class="marker-green">店舗やゲストハウスなど商業利用も支援対象</span>です。</p>'
      },
      {
        heading: '対象となる京町家',
        content: '<p>京都市が定める「京町家」の定義に該当する建物が対象です。概ね<strong>昭和25年以前に建築された木造の伝統的な町家建築</strong>を指します。</p><div class="highlight-box">京町家に該当するかどうか不明な場合は、京都市の京町家保全活用課に相談してください。現地調査を行ってもらえます。</div>'
      },
      {
        heading: '申請と注意点',
        content: '<p>改修工事の着手前に申請し、審査を経て交付決定を受ける必要があります。工事完了後に実績報告書を提出して助成金が交付されます。</p><p>京町家としての外観や構造を大きく変えてしまう改修は対象外となる場合があります。<span class="marker">伝統的な意匠を活かした改修</span>が求められます。</p>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/tokei/page/0000183472.html',
    publishedAt: '2026-04-28',
  },
  {
    slug: 'kyoto-education-global',
    title: '京都府海外留学支援奨学金',
    organization: '京都府',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'education',
    prefecture: '京都府',
    tags: ['京都府関連', '教育関連', '海外留学'],
    eligibility: '京都府内に住所がある大学生・大学院生で、海外の大学への留学を予定している方が対象です。',
    applicationPeriod: '毎年6月〜8月頃',
    description: '京都府がグローバル人材の育成を目的に実施する海外留学支援奨学金です。返済不要の給付型で、留学にかかる渡航費や学費の一部を最大100万円まで支給します。',
    sections: [
      {
        heading: '奨学金の概要',
        content: '<p>京都府は「学問の都」として、<span class="marker">グローバルに活躍できる人材の育成</span>に力を入れています。この奨学金は返済不要の給付型で、海外留学のハードルを下げることを目的としています。</p>'
      },
      {
        heading: '支給内容',
        content: '<div class="summary-box" data-title="支給内容"><p>渡航費・学費等：最大100万円（一括支給）</p><p>対象期間：3ヶ月以上の留学</p><p>対象国：制限なし</p></div><p>日本学生支援機構の海外留学支援制度との<span class="marker-green">併用が可能</span>な場合もあります。</p>'
      },
      {
        heading: '選考基準',
        content: '<p>学業成績、留学の目的と計画の明確さ、帰国後のキャリアビジョンなどが評価されます。</p><div class="highlight-box">英語力の証明（TOEFL、IELTSなど）が求められる場合があります。出願前に必要なスコアを確認しておきましょう。</div>'
      },
      {
        heading: '申請手続き',
        content: '<p>在籍大学を通じて申請するのが一般的です。大学の国際交流課や留学支援センターに相談してください。</p><p>選考結果は9月頃に通知されます。<strong>採択者数は年間20〜30名程度</strong>と少数精鋭です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/kokusai/ryugaku-shogakukin.html',
    publishedAt: '2026-05-25',
  },

  // ────────────────────────────────────────────────
  // 兵庫県 (3 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'hyogo-disaster-resilience',
    title: '兵庫県住宅耐震化促進事業（ひょうご住まいの耐震化）',
    organization: '兵庫県',
    type: 'local',
    maxAmount: '最大130万円',
    maxAmountNum: 130,
    category: 'disaster',
    prefecture: '兵庫県',
    tags: ['兵庫県関連', '耐震関連', '住宅安全'],
    eligibility: '兵庫県内に昭和56年5月以前に建築された住宅を所有する方が対象です。',
    applicationPeriod: '通年（予算枠に達し次第終了）',
    description: '阪神・淡路大震災の教訓を活かし、兵庫県が住宅の耐震化を強力に推進する事業です。耐震診断は無料、耐震改修には最大130万円の補助が受けられます。震災の経験を持つ兵庫県ならではの手厚い支援制度です。',
    sections: [
      {
        heading: '事業の背景',
        content: '<p>1995年の阪神・淡路大震災では、<span class="marker">死者の約9割が建物の倒壊による圧死・窒息死</span>でした。この教訓を活かし、兵庫県は住宅の耐震化を最重要施策として位置づけています。</p><p>旧耐震基準（昭和56年5月以前）の住宅は、現行基準の住宅に比べて倒壊のリスクが大幅に高いとされています。</p>'
      },
      {
        heading: '補助の内容',
        content: '<div class="summary-box" data-title="補助内容"><p>耐震診断：無料（簡易診断）</p><p>耐震改修計画策定：最大20万円</p><p>耐震改修工事：最大130万円</p><p>シェルター型耐震改修：最大50万円</p></div><p><span class="marker-green">シェルター型（寝室や居間だけを補強する方法）</span>は費用を抑えられるため、フルの耐震改修が難しい場合の選択肢として注目されています。</p>'
      },
      {
        heading: '無料耐震診断',
        content: '<p>まずは無料の簡易耐震診断を受けることをおすすめします。県の登録診断員が自宅を訪問し、建物の安全性を確認します。</p><div class="highlight-box">簡易耐震診断は電話一本で申し込めます。兵庫県住宅建築総合センター（078-232-3312）に連絡してください。</div>'
      },
      {
        heading: '申請手続き',
        content: '<p>耐震改修工事の補助を受けるには、市町の窓口に事前申請が必要です。工事着手前に交付決定を受けてから施工してください。</p><p><strong>確定申告で住宅耐震改修特別控除</strong>（所得税控除）も受けられます。補助金と税制優遇を併用しましょう。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/ks26/jutakutaishin.html',
    publishedAt: '2026-03-29',
  },
  {
    slug: 'hyogo-childcare-center',
    title: '兵庫県認定こども園等運営支援事業',
    organization: '兵庫県',
    type: 'local',
    maxAmount: '施設あたり最大500万円',
    maxAmountNum: 500,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['兵庫県関連', '保育関連', '施設運営支援'],
    eligibility: '兵庫県内で認定こども園、保育所、小規模保育事業所等を運営する事業者が対象です。',
    targetOccupation: '保育事業者',
    applicationPeriod: '毎年4月〜6月頃',
    description: '兵庫県が保育施設の運営を支援するための事業です。保育士の処遇改善、施設の安全対策、ICT導入などにかかる費用を助成します。保育の質の向上と保育士の確保・定着を目指します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>兵庫県は待機児童の解消と保育の質の向上のため、<span class="marker">保育施設の運営をさまざまな角度から支援</span>しています。</p><p>保育士不足は全国的な課題ですが、この事業により保育士の処遇改善や働きやすい環境づくりを促進します。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="主な助成メニュー"><p>保育士の宿舎借り上げ支援：月額最大8.2万円/人</p><p>ICT化推進事業：最大100万円/施設</p><p>安全対策強化（防犯カメラ等）：最大50万円</p><p>保育補助者雇用経費：最大200万円/年</p></div><p>複数のメニューを組み合わせることで、施設あたり最大500万円程度の支援を受けられます。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>兵庫県の保育課に事業計画書を提出して申請します。市町との連携が必要な場合もありますので、まずは所管の市町に相談してください。</p><div class="highlight-box">ICT化推進事業では、登降園管理システム、保育記録の電子化、保護者連絡アプリなどの導入費用が対象です。</div>'
      },
      {
        heading: '保育士確保への効果',
        content: '<p>宿舎借り上げ支援を導入した施設では、<strong>採用応募が1.5倍に増加</strong>したケースも報告されています。</p><p>ICT化により事務作業が効率化され、保育士が子どもと向き合う時間が増えたという声も多く聞かれます。保育の質と働きやすさの両立が実現します。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/hw09/hoiku-shien.html',
    publishedAt: '2026-04-30',
  },
  {
    slug: 'hyogo-medical-infertility',
    title: '兵庫県不妊治療費助成事業',
    organization: '兵庫県',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['兵庫県関連', '不妊治療関連', '医療費助成'],
    eligibility: '兵庫県内に住所がある夫婦（事実婚含む）で、特定不妊治療（体外受精・顕微授精）を受けた方が対象です。',
    applicationPeriod: '通年（治療終了日から60日以内に申請）',
    description: '兵庫県が特定不妊治療（体外受精・顕微授精）を受けた夫婦を対象に実施する医療費助成事業です。2022年4月から不妊治療が保険適用となりましたが、保険適用外の先進医療等については引き続き助成の対象となります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>2022年4月から不妊治療が保険適用となりましたが、<span class="marker">一部の先進医療や保険適用外の治療については自己負担</span>が残ります。兵庫県はこうした費用の一部を助成しています。</p><p>不妊治療は心身ともに負担が大きいものです。経済的な不安を少しでも軽減し、安心して治療に専念できる環境を整えます。</p>'
      },
      {
        heading: '助成の内容',
        content: '<div class="summary-box" data-title="助成内容"><p>先進医療等にかかる自己負担額の一部：1回あたり最大30万円</p><p>助成回数の上限：治療開始時の妻の年齢により異なる</p><p>所得制限：なし</p></div><p>保険適用の治療と先進医療を<span class="marker-green">混合診療として受けた場合の自己負担分</span>が主な助成対象です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>治療終了日から60日以内に、お住まいの市町または県の健康福祉事務所に申請します。</p><div class="highlight-box">必要書類：申請書、医療機関発行の証明書、領収書、住民票、戸籍謄本（事実婚の場合は追加書類あり）</div>'
      },
      {
        heading: '関連する支援制度',
        content: '<p>兵庫県では不妊治療への助成のほか、<strong>不育症の治療費助成</strong>（流産を繰り返す方への支援）も実施しています。</p><p>また、不妊に関する<strong>専門相談窓口</strong>も設置されており、医療面・心理面の相談を無料で受けることができます。一人で悩まずに、まずは相談してみてください。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/kf17/funin-josei.html',
    publishedAt: '2026-05-28',
  },

  // ────────────────────────────────────────────────
  // 広島県 (2 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'hiroshima-migration-family',
    title: '広島県ひろしまファミリー移住支援金',
    organization: '広島県',
    type: 'local',
    maxAmount: '最大130万円',
    maxAmountNum: 130,
    category: 'living',
    prefecture: '広島県',
    tags: ['広島県関連', '移住支援関連', '子育て世帯'],
    eligibility: '東京圏から広島県内に子育て世帯として移住する方が対象です。18歳未満の子どもがいる世帯が優先されます。',
    applicationPeriod: '通年',
    description: '広島県が子育て世帯の移住を特に歓迎するファミリー移住支援金です。通常の移住支援金に加え、子育て支援サービスの情報提供や住居探しのサポートなど、総合的な移住支援を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島県は<span class="marker">子育て環境の充実</span>を移住の大きな魅力として打ち出しています。豊かな自然、温暖な気候、都市機能と自然の近さが特徴です。</p><p>東京圏からの移住者に対して、通常の移住支援金に上乗せして「ファミリー加算」を行っています。</p>'
      },
      {
        heading: '支援金の内容',
        content: '<div class="summary-box" data-title="支援金額"><p>世帯：最大100万円</p><p>18歳未満の子ども1人につき最大30万円加算</p><p>単身：最大60万円</p></div><p><span class="marker-green">子ども3人の世帯なら最大190万円</span>の支援を受けられます。</p>'
      },
      {
        heading: '広島県の子育て環境',
        content: '<p>広島県は<strong>待機児童数が少なく、子ども医療費助成も充実</strong>しています。海・山・川が身近にあり、自然の中で子どもを育てたい家族に人気です。</p><div class="highlight-box">移住体験ツアーも定期的に開催しています。まずは現地を訪れて、生活環境を体感してみてください。</div>'
      },
      {
        heading: '申請の流れ',
        content: '<p>移住先の市町に移住後3ヶ月以上経過してから申請します。テレワーク移住やマッチングサイト経由の就職も対象です。</p><p>移住前の段階から相談できる「ひろしま暮らしサポートセンター」が東京と広島にあります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/soshiki/75/ijuu-shienkin.html',
    publishedAt: '2026-04-03',
  },
  {
    slug: 'hiroshima-education-ict',
    title: '広島県学校ICT環境整備支援事業',
    organization: '広島県',
    type: 'local',
    maxAmount: '1校あたり最大300万円',
    maxAmountNum: 300,
    category: 'education',
    prefecture: '広島県',
    tags: ['広島県関連', '教育ICT関連', '学校支援'],
    eligibility: '広島県内の公立小中学校・高等学校を設置する市町が対象です。',
    applicationPeriod: '毎年4月〜6月頃',
    description: '広島県が県内の学校のICT環境整備を支援する事業です。電子黒板、プログラミング教育用機器、校内ネットワークの強化などに対して、1校あたり最大300万円を補助します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>GIGAスクール構想により一人一台端末が実現しましたが、<span class="marker">学校のICT環境には地域格差がある</span>のが現状です。広島県はこの格差を解消するため、追加の環境整備を支援しています。</p>'
      },
      {
        heading: '補助対象設備',
        content: '<div class="summary-box" data-title="対象設備"><p>大型電子黒板・インタラクティブディスプレイ</p><p>校内Wi-Fi環境の強化・増設</p><p>プログラミング教育用ロボット・キット</p><p>デジタル教材のライセンス費用</p></div><p>補助率は対象経費の1/2で、1校あたり最大300万円です。</p>'
      },
      {
        heading: '申請と選考',
        content: '<p>市町の教育委員会を通じて県に申請します。ICT活用計画の具体性と先進性が選考のポイントです。</p><div class="highlight-box">他の学校のモデルケースとなるような先進的な取り組みには加点評価があります。</div>'
      },
      {
        heading: '期待される効果',
        content: '<p>ICT環境の充実により、<strong>個別最適化された学び</strong>や<strong>協働的な学び</strong>が一層推進されます。</p><p>特に山間部や離島の学校では、オンラインでの他校との交流学習や外部講師の授業参加が容易になり、教育の質の向上が期待されます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/soshiki/247/ict-seibi.html',
    publishedAt: '2026-05-08',
  },

  // ────────────────────────────────────────────────
  // 宮城県 (2 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'miyagi-disaster-reconstruction',
    title: '宮城県被災住宅再建支援事業',
    organization: '宮城県',
    type: 'local',
    maxAmount: '最大300万円',
    maxAmountNum: 300,
    category: 'disaster',
    prefecture: '宮城県',
    tags: ['宮城県関連', '震災復興関連', '住宅再建'],
    eligibility: '東日本大震災等で住宅が全壊・半壊した宮城県内の被災者で、住宅を再建または購入する方が対象です。',
    applicationPeriod: '通年',
    description: '宮城県が東日本大震災等で被災した住民の住宅再建を支援するための事業です。国の被災者生活再建支援金に加えて、県独自の上乗せ支援として最大300万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東日本大震災から10年以上が経過しましたが、<span class="marker">住まいの再建がまだ完了していない被災者</span>もいらっしゃいます。宮城県は国の支援に上乗せする形で、独自の住宅再建支援を行っています。</p><p>その後の災害（台風、豪雨等）で被災した方も対象となる場合があります。</p>'
      },
      {
        heading: '支援金の内容',
        content: '<div class="summary-box" data-title="支援金額"><p>住宅の建設・購入：最大300万円</p><p>住宅の補修：最大200万円</p><p>賃貸住宅への入居（引越費用等）：最大100万円</p></div><p>国の<span class="marker-green">被災者生活再建支援金（最大300万円）と合わせて最大600万円</span>の支援を受けられます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>お住まいの市町村の被災者支援窓口に申請します。り災証明書と住宅の再建を証明する書類（契約書等）が必要です。</p><div class="highlight-box">り災証明書の申請がまだの方は、先に市町村で発行手続きを行ってください。発行には建物の被害調査が必要です。</div>'
      },
      {
        heading: '関連する支援制度',
        content: '<p>住宅再建のほか、<strong>災害復興住宅融資</strong>（住宅金融支援機構）や<strong>住宅ローンの返済猶予</strong>など、金融面の支援も利用できます。</p><p>被災者支援は制度が複雑で分かりにくい面がありますが、市町村の相談窓口やNPOの支援を活用してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.miyagi.jp/soshiki/fukko/jutaku-saiken.html',
    publishedAt: '2026-04-06',
  },
  {
    slug: 'miyagi-employment-fishery',
    title: '宮城県水産業新規就業者支援事業',
    organization: '宮城県',
    type: 'local',
    maxAmount: '月額最大15万円',
    maxAmountNum: 15,
    category: 'employment',
    prefecture: '宮城県',
    tags: ['宮城県関連', '水産業関連', '新規就業'],
    eligibility: '宮城県内で新たに漁業に就業する55歳未満の方が対象です。研修期間中の生活費を支給します。',
    targetOccupation: '新規漁業就業者',
    applicationPeriod: '毎年3月〜5月頃',
    description: '宮城県が水産業の担い手確保を目的に実施する新規就業者支援事業です。漁業の研修期間中に月額最大15万円の生活費を支給し、独立までの期間をサポートします。気仙沼・石巻・塩釜など漁業が盛んな地域での就業を支援します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>宮城県は三陸海岸を有する全国有数の水産県です。しかし<span class="marker">漁業の高齢化と担い手不足</span>が深刻な課題となっています。</p><p>この事業は漁業に興味のある若い世代に研修の機会と生活費を提供し、水産業の次世代を育成するものです。</p>'
      },
      {
        heading: '支援の内容',
        content: '<div class="summary-box" data-title="支援内容"><p>研修期間中の生活費：月額最大15万円</p><p>研修期間：最長3年間</p><p>研修先のマッチング支援</p><p>漁業に必要な免許・資格の取得支援</p></div><p>研修先は県内の漁業協同組合や個人の漁業者です。<span class="marker-green">未経験者でも受け入れ可能な研修先を紹介</span>してもらえます。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>まず宮城県の水産業振興課に相談し、研修先のマッチングを受けます。研修計画が決まったら、給付金の申請手続きを行います。</p><div class="highlight-box">漁業体験イベントも定期的に開催されています。まずは体験してから判断したい方は、県のホームページでイベント情報をチェックしてください。</div>'
      },
      {
        heading: '漁業の魅力と課題',
        content: '<p>宮城県の水産物は<strong>牡蠣、ホタテ、ワカメ、サンマ</strong>など、全国ブランドの産品が豊富です。自然の中で働く充実感は他の職業にはない魅力です。</p><p>一方で、天候に左右される不安定さや、初期投資の大きさといった課題もあります。研修期間中にしっかりと技術と知識を身につけることが大切です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.miyagi.jp/soshiki/suishin/shinki-gyogyou.html',
    publishedAt: '2026-05-12',
  },

  // ────────────────────────────────────────────────
  // 静岡県 (2 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'shizuoka-tea-industry',
    title: '静岡県茶業振興支援事業助成金',
    organization: '静岡県',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '静岡県',
    tags: ['静岡県関連', '茶業関連', '農業振興'],
    eligibility: '静岡県内で茶業を営む生産者・法人で、品質向上や販路拡大に取り組む方が対象です。新規就農者も対象に含まれます。',
    targetOccupation: '茶業生産者',
    applicationPeriod: '毎年4月〜6月頃',
    description: '静岡県が「お茶の都」としての地位を維持・発展させるために実施する茶業振興支援事業です。茶葉の品質向上、有機栽培への転換、6次産業化、海外販路開拓などに取り組む生産者を最大200万円まで助成します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>静岡県は日本一の茶の生産量を誇りますが、<span class="marker">茶の消費量の減少や後継者不足</span>が課題となっています。この事業は茶業の活性化に取り組む生産者を支援するものです。</p><p>品質向上だけでなく、新商品開発や海外市場の開拓なども対象です。</p>'
      },
      {
        heading: '助成対象事業',
        content: '<div class="summary-box" data-title="対象事業"><p>有機栽培・特別栽培への転換</p><p>製茶機械の導入・更新</p><p>新商品（抹茶、和紅茶等）の開発</p><p>海外市場向けのマーケティング・PR</p></div><p>助成率は対象経費の1/2以内、上限200万円です。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>静岡県の茶業農産課に事業計画書を提出して申請します。JA（農協）を通じた申請も可能です。</p><div class="highlight-box">過去の採択事例を参考にしたい方は、県の茶業農産課にお問い合わせください。先進事例の視察も調整してもらえます。</div>'
      },
      {
        heading: '静岡茶の今後',
        content: '<p>健康志向の高まりにより、<strong>抹茶や有機緑茶は世界的に需要が拡大</strong>しています。静岡県の高い技術力と品質を武器に、国内外の新市場を開拓するチャンスです。</p><p>この助成金を活用して、次世代の茶業経営に挑戦してみませんか。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shizuoka.jp/sangyou/sa-340/chagyo-shien.html',
    publishedAt: '2026-04-14',
  },
  {
    slug: 'shizuoka-childcare-nature',
    title: '静岡県森のようちえん活動支援事業',
    organization: '静岡県',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['静岡県関連', '子育て関連', '自然保育'],
    eligibility: '静岡県内で自然体験を取り入れた保育活動（森のようちえん等）を運営または新設する団体が対象です。',
    applicationPeriod: '毎年4月〜5月頃',
    description: '静岡県の豊かな自然を活用した「森のようちえん」活動を支援する事業です。自然の中での保育・幼児教育活動に取り組む団体に対して、運営費や備品購入費を最大50万円まで助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>「森のようちえん」とは、<span class="marker">自然の中での遊びや体験を通じて子どもの成長を促す保育活動</span>の総称です。静岡県は富士山をはじめ豊かな自然環境に恵まれており、こうした活動が盛んです。</p><p>この助成金は、森のようちえんの活動を広げ、質を高めるための支援です。</p>'
      },
      {
        heading: '助成内容',
        content: '<div class="summary-box" data-title="助成内容"><p>運営費（スタッフ人件費、保険料等）：最大30万円</p><p>備品購入費（テント、救急セット等）：最大20万円</p><p>新規開設準備費：追加支援あり</p></div><p>既存団体の活動充実だけでなく、<span class="marker-green">新規開設も積極的に支援</span>しています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>静岡県の自然保育推進担当に事業計画書を提出して申請します。活動の内容、対象年齢、安全管理体制などを記載します。</p><div class="highlight-box">認可保育施設でなくても申請可能です。NPOや任意団体による活動も対象に含まれます。</div>'
      },
      {
        heading: '自然保育の効果',
        content: '<p>研究によると、自然体験が豊富な子どもは<strong>非認知能力（粘り強さ、協調性、創造力）が高い</strong>傾向にあるとされています。</p><p>静岡県では自然保育の認証制度も設けており、質の高い活動を行う団体を認証・公表しています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shizuoka.jp/kousei/ko-130/morinoyouchien.html',
    publishedAt: '2026-05-18',
  },

  // ────────────────────────────────────────────────
  // 新潟県 (2 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'niigata-snow-removal',
    title: '新潟県克雪住宅普及促進事業',
    organization: '新潟県（各市町村）',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '新潟県',
    tags: ['新潟県関連', '雪対策関連', '住宅改修'],
    eligibility: '新潟県内の豪雪地域に住宅を所有する方で、克雪住宅（屋根の雪下ろし不要な住宅）への改修を行う方が対象です。',
    applicationPeriod: '毎年4月〜10月頃',
    description: '新潟県が豪雪地域の住民の安全確保を目的に実施する克雪住宅普及促進事業です。屋根の雪下ろしが不要になる「克雪住宅」への改修費用を最大100万円まで助成します。高齢者世帯の雪下ろし事故防止にも寄与する重要な制度です。',
    sections: [
      {
        heading: '制度の背景',
        content: '<p>新潟県は全国有数の豪雪地帯です。<span class="marker">毎年、屋根の雪下ろし作業中の転落事故が多数発生</span>しており、特に高齢者の安全確保が課題となっています。</p><p>克雪住宅に改修することで、危険な雪下ろし作業をなくし、冬場の安全と快適さを確保できます。</p>'
      },
      {
        heading: '克雪住宅の種類と助成額',
        content: '<div class="summary-box" data-title="克雪住宅の種類"><p>融雪式（屋根に熱源を設置して雪を溶かす）：最大100万円</p><p>落雪式（急勾配の屋根で自然に雪を落とす）：最大80万円</p><p>耐雪式（積雪荷重に耐える構造に補強）：最大80万円</p></div><p>どの方式が適しているかは、住宅の構造や立地条件によって異なります。<span class="marker-green">県の建築士による無料相談</span>も利用できます。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>お住まいの市町村の建設課や克雪対策担当に相談してください。改修工事の着手前に申請が必要です。</p><div class="highlight-box">高齢者世帯（65歳以上のみの世帯）は補助率が上乗せされる場合があります。</div>'
      },
      {
        heading: 'ランニングコスト',
        content: '<p>融雪式は燃料費（灯油やガス）がかかりますが、落雪式や耐雪式はランニングコストがほとんどかかりません。</p><p><strong>長期的なコストも考慮して方式を選択</strong>することをおすすめします。市町村の相談窓口で詳しいアドバイスを受けられます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.niigata.lg.jp/sec/kenchiku/kokusetsujutaku.html',
    publishedAt: '2026-04-16',
  },
  {
    slug: 'niigata-rice-farming',
    title: '新潟県コシヒカリ品質向上支援事業',
    organization: '新潟県',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '新潟県',
    tags: ['新潟県関連', '稲作関連', 'ブランド米'],
    eligibility: '新潟県内でコシヒカリの生産を行う農業者または農業法人で、品質向上・ブランド強化に取り組む方が対象です。',
    targetOccupation: '稲作農家',
    applicationPeriod: '毎年3月〜5月頃',
    description: '新潟県が「コシヒカリの本場」としてのブランド力を維持・強化するために実施する支援事業です。栽培技術の改善、品質管理の高度化、新たな販売チャネルの開拓などに取り組む生産者を最大50万円まで助成します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>新潟県産コシヒカリは日本を代表するブランド米ですが、<span class="marker">他産地との競争激化や気候変動への対応</span>が課題となっています。</p><p>この事業は品質向上と差別化に取り組む生産者を支援し、新潟米のブランド力を強化するものです。</p>'
      },
      {
        heading: '助成対象事業',
        content: '<div class="summary-box" data-title="対象事業"><p>土壌改良・施肥設計の最適化</p><p>高温対策技術の導入</p><p>GAP認証の取得</p><p>直販・EC販売の開拓</p></div><p>助成率は対象経費の1/2以内、上限50万円です。</p>'
      },
      {
        heading: '気候変動への対応',
        content: '<p>近年の夏の高温は米の品質低下の原因となっています。高温耐性品種への転換や、<strong>適期田植え・水管理技術の改善</strong>が重要です。</p><div class="highlight-box">新潟県農業総合研究所の技術指導を無料で受けることができます。最新の栽培技術情報もセミナー等で提供されています。</div>'
      },
      {
        heading: '申請方法',
        content: '<p>JAまたは市町村の農政課を通じて申請します。個人農家でも法人でも申請可能です。</p><p><span class="marker-green">特にGAP認証取得に向けた取り組みは積極的に採択</span>されています。今後の海外輸出にもGAP認証は有利に働きます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.niigata.lg.jp/sec/nosanengei/koshihikari-shien.html',
    publishedAt: '2026-05-22',
  },

  // ────────────────────────────────────────────────
  // 沖縄県 (3 grants)
  // ────────────────────────────────────────────────
  {
    slug: 'okinawa-tourism-employment',
    title: '沖縄県観光人材育成支援事業',
    organization: '沖縄県',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '沖縄県',
    tags: ['沖縄県関連', '観光業関連', '人材育成'],
    eligibility: '沖縄県内の観光関連事業者（ホテル、旅行業、飲食業等）で、従業員のスキルアップに取り組む事業者が対象です。',
    targetOccupation: '観光関連事業者',
    applicationPeriod: '毎年4月〜7月頃',
    description: '沖縄県が観光産業の人材育成を支援するための事業です。語学研修、ホスピタリティ研修、デジタルマーケティング研修など、従業員のスキルアップにかかる費用を最大50万円まで助成します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>沖縄県の基幹産業である観光業は、<span class="marker">インバウンド需要の回復に伴い人材の質の向上</span>が急務となっています。</p><p>この事業は観光関連事業者の従業員研修費用を助成し、沖縄観光の魅力と競争力を高めることを目指しています。</p>'
      },
      {
        heading: '助成対象研修',
        content: '<div class="summary-box" data-title="対象研修"><p>外国語（英語・中国語・韓国語等）研修</p><p>ホスピタリティ・接客サービス研修</p><p>デジタルマーケティング・SNS運用研修</p><p>食品衛生・安全管理研修</p></div><p>助成率は研修費用の2/3以内、1事業者あたり最大50万円です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>沖縄県の観光振興課に事業計画書を提出して申請します。研修の内容、受講者数、期待される効果を具体的に記載してください。</p><div class="highlight-box">業界団体（沖縄観光コンベンションビューロー等）を通じた団体申請も可能です。同業者で合同研修を企画するとコスト効率が良くなります。</div>'
      },
      {
        heading: '沖縄観光の課題と展望',
        content: '<p>沖縄観光は量から質への転換が求められています。<strong>高付加価値な体験型観光やサステナブルツーリズム</strong>への対応が今後の成長の鍵です。</p><p>人材の質の向上は、リピーター獲得と観光客の満足度向上に直結します。この助成金を活用してスタッフのスキルアップに投資しましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.jp/site/bunka-sports/kankoseisaku/jinzai-ikusei.html',
    publishedAt: '2026-03-30',
  },
  {
    slug: 'okinawa-child-poverty',
    title: '沖縄県子どもの貧困対策支援事業',
    organization: '沖縄県',
    type: 'local',
    maxAmount: '最大300万円（団体向け）',
    maxAmountNum: 300,
    category: 'living',
    prefecture: '沖縄県',
    tags: ['沖縄県関連', '子どもの貧困関連', '学習支援'],
    eligibility: '沖縄県内で子どもの貧困対策に取り組むNPO法人、社会福祉法人、一般社団法人等が対象です。',
    applicationPeriod: '毎年4月〜5月頃',
    description: '沖縄県が子どもの貧困問題に対応するために実施する支援事業です。子ども食堂、学習支援教室、居場所づくりなどを運営する団体に対して、運営費を最大300万円まで助成します。',
    sections: [
      {
        heading: '事業の背景',
        content: '<p>沖縄県の子どもの貧困率は全国平均を大きく上回っており、<span class="marker">約3人に1人の子どもが相対的貧困状態にある</span>とされています。</p><p>食事の確保、学習の遅れ、社会的孤立など、様々な課題を抱える子どもたちを支援するため、県は重点的に取り組んでいます。</p>'
      },
      {
        heading: '助成の対象事業',
        content: '<div class="summary-box" data-title="対象事業"><p>子ども食堂の運営（食材費、場所代、ボランティア保険等）</p><p>無料学習支援教室の運営</p><p>子どもの居場所づくり（放課後の安全な居場所）</p><p>生活支援（フードバンク、物資提供等）</p></div><p>既存の活動の拡充だけでなく、<span class="marker-green">新規開設も積極的に支援</span>しています。</p>'
      },
      {
        heading: '助成額と申請',
        content: '<p>1団体あたり最大300万円（助成率10/10）です。年度ごとに申請・報告が必要です。</p><div class="highlight-box">活動実績が少ない団体でも申請可能です。県の担当者が申請書類の作成をサポートしてくれますので、まずは相談してみてください。</div>'
      },
      {
        heading: '沖縄の子ども支援の輪',
        content: '<p>沖縄県内には<strong>300以上の子ども食堂</strong>が運営されており、地域のつながりの中で子どもたちを支える活動が広がっています。</p><p>ボランティアとして参加したい方も歓迎されています。「支えられる側」から「支える側」への循環が生まれることが、この事業の大きな成果です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.jp/site/kodomo/kodomomirai/hinkon-taisaku.html',
    publishedAt: '2026-04-09',
  },
  {
    slug: 'okinawa-housing-typhoon',
    title: '沖縄県住宅防風対策支援事業',
    organization: '沖縄県',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'disaster',
    prefecture: '沖縄県',
    tags: ['沖縄県関連', '台風対策関連', '住宅安全'],
    eligibility: '沖縄県内に住宅を所有する方で、台風対策のための改修工事（防風シャッター、強化ガラス等）を行う方が対象です。',
    applicationPeriod: '毎年4月〜9月頃',
    description: '沖縄県が台風被害の軽減を目的に実施する住宅の防風対策支援事業です。防風シャッター、強化ガラスへの交換、屋根の補強など、台風に備えた住宅改修費用の一部を最大40万円まで助成します。',
    sections: [
      {
        heading: '事業の概要',
        content: '<p>沖縄県は毎年複数の台風が接近・上陸する地域です。<span class="marker">強風による窓ガラスの破損や屋根の飛散</span>が大きな被害をもたらします。</p><p>この事業は住宅の防風性能を高めるための改修費用を助成し、台風被害の軽減を図るものです。</p>'
      },
      {
        heading: '助成対象工事と金額',
        content: '<div class="summary-box" data-title="助成対象"><p>防風シャッターの設置：最大20万円</p><p>強化ガラス・飛散防止フィルムへの交換：最大10万円</p><p>屋根の補強・固定：最大20万円</p><p>合計上限：40万円（補助率1/2）</p></div><p><span class="marker-green">築年数の古い住宅ほど優先的に採択</span>される傾向があります。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>沖縄県の住宅課または市町村の建築指導課に工事計画書を提出します。交付決定後に工事に着手してください。</p><div class="highlight-box">台風シーズン（7月〜10月）前に工事を完了させるため、4月〜5月頃に申請するのが理想的です。</div>'
      },
      {
        heading: '日頃の備えも大切',
        content: '<p>住宅の改修とあわせて、<strong>非常用持ち出し品の準備、ハザードマップの確認、避難場所の把握</strong>など、日頃からの備えも重要です。</p><p>沖縄県は台風への備えの文化が根付いていますが、改めて家族で防災について話し合う機会を持ちましょう。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.jp/site/doboku/jutaku/boufuu-taisaku.html',
    publishedAt: '2026-06-30',
  },
];
