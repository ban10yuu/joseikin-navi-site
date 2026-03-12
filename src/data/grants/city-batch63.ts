import { Grant } from '@/lib/types';

export const cityGrantsBatch63: Grant[] = [
  // ────────────────────────────────────────────────
  // 花巻市（岩手県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hanamaki-childcare-subsidy',
    title: '花巻市 子育て世帯生活支援給付金',
    organization: '花巻市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['花巻市', '子育て支援', '給付金'],
    eligibility: '花巻市に住所を有し、18歳未満の児童を養育する低所得世帯の保護者',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '花巻市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 子育て世帯生活支援給付金は、<span class="marker">物価高騰の影響を受ける低所得の子育て世帯</span>に対し、生活の安定を図るための給付金を支給する制度です。</p><p>宮沢賢治の故郷として知られる花巻市は、豊かな自然と文化に恵まれた岩手県中西部の都市です。花巻温泉郷やイーハトーブの世界観が息づくこの街で、子育て世帯の経済的負担を軽減し、安心して子育てできる環境を目指しています。</p><p><span class="marker-green">児童扶養手当受給世帯や住民税非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>花巻市に住民登録があり、18歳未満（18歳の年度末まで）の児童を養育する保護者のうち、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当を受給しているひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰の影響で家計が急変した世帯</p></div><p>児童扶養手当受給世帯は<strong>申請不要で自動支給</strong>されます。それ以外の世帯は花巻市役所こども課へ申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。複数の児童がいる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯は収入が確認できる書類（給与明細等）の提出が必要</span>です。申請が承認されると、指定口座に振り込まれます。</p><div class="note-box">他の自治体から同趣旨の給付金を受給している場合は、花巻市の給付金は対象外となります。転入・転出の場合は転出先・転入先の自治体と重複しないようご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-birth-bonus',
    title: '花巻市 出産祝い金支給事業',
    organization: '花巻市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['花巻市', '出産祝い金', '子育て支援'],
    eligibility: '花巻市に住所を有し、出産した方',
    applicationPeriod: '通年（出生届提出後）',
    description: '花巻市が実施する出産祝い金支給事業です。お子さまの誕生を祝い、第1子5万円、第2子10万円、第3子以降20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 出産祝い金支給事業は、<span class="marker">新たに誕生したお子さまを祝い、子育てにかかる経済的負担を軽減</span>するために祝い金を支給する制度です。</p><p>花巻市は「イーハトーブ」の理想郷を目指す街として、未来を担う子どもたちの誕生を大切にしています。北上川と豊沢川が流れる肥沃な農地に恵まれ、自然豊かな環境で子育てできる魅力ある街づくりを推進しています。</p><p>支給額は出生順に応じて段階的に増額され、<strong>第3子以降は20万円</strong>です。<span class="marker-green">多子世帯ほど手厚い支援が受けられる仕組み</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>花巻市に住民登録がある方で、出産日時点で花巻市に1年以上居住している（または居住する見込みのある）方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>出生届の受理証明書（または母子健康手帳の写し）</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>花巻市役所こども課の窓口で申請を行います。<span class="marker">出生届提出後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は以下の通りです。<strong>第1子：5万円、第2子：10万円、第3子以降：20万円</strong>。出生順は同一世帯で養育している児童の数で判定されます。</p><p><span class="marker">多胎児（双子・三つ子等）の場合はそれぞれ1人として数えます</span>。双子の場合は2人分が支給されます。</p><div class="highlight-box">花巻市では出産祝い金のほかにも、妊婦健診費用の助成や産後ケア事業など、妊娠・出産・育児を包括的にサポートする体制を整えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-housing-purchase',
    title: '花巻市 住宅取得支援補助金',
    organization: '花巻市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '岩手県',
    tags: ['花巻市', '住宅取得', '補助金'],
    eligibility: '花巻市内に新たに住宅を取得する方（新築・中古購入）',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '花巻市が実施する住宅取得支援補助金です。市内に住宅を新築または購入する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または中古住宅を購入する方</span>に対し、取得費用の一部を補助する制度です。</p><p>花巻市は新花巻駅から東北新幹線でのアクセスも良く、花巻空港も有する交通利便性の高い都市です。宮沢賢治ゆかりの地として文化的な魅力も豊富で、定住促進のために住宅取得を支援しています。</p><p>補助額は基本30万円で、<strong>子育て世帯や市外からの転入世帯には加算</strong>があり、<span class="marker-green">最大50万円の補助が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>花巻市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>花巻市役所建設部都市政策課に申請書および必要書類を提出します。売買契約書や建築確認済証の写しが必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。以下の加算があります。</p><p><span class="marker">子育て世帯加算：10万円、市外からの転入加算：10万円</span>。両方に該当すれば最大50万円となります。</p><div class="note-box">賃貸目的の住宅取得は対象外です。住宅ローンの利用有無は問いません。5年以内に市外へ転出した場合は補助金の返還を求められることがありますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-infertility',
    title: '花巻市 不妊治療費助成事業',
    organization: '花巻市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '岩手県',
    tags: ['花巻市', '不妊治療', '助成金'],
    eligibility: '花巻市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '花巻市が実施する不妊治療費助成事業です。不妊治療にかかる費用の一部を助成し、1回あたり最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減</span>するため、治療費の一部を助成する制度です。</p><p>花巻市では少子化対策の一環として、子どもを望む夫婦を幅広く支援しています。2022年4月から不妊治療が保険適用となりましたが、保険適用外の先進医療や自費診療部分については引き続き高額な負担がかかるため、市独自の助成制度を設けています。</p><p><span class="marker-green">体外受精・顕微授精だけでなく、人工授精やタイミング法の自己負担分も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>花巻市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の受診等証明書</p><p>領収書の原本</p><p>夫婦の住民票</p><p>戸籍謄本（事実婚の場合は誓約書）</p></div><p>花巻市役所健康づくり課に申請します。<span class="marker">治療が終了した日から6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき自己負担額の一部で、上限10万円</strong>です。年度内の回数制限がありますので窓口でご確認ください。</p><p><span class="marker">岩手県の不妊治療費助成制度と併用可能</span>ですが、助成額の合計が実際の自己負担額を超えることはできません。</p><div class="note-box">不妊検査費用への助成制度も別途設けられています。治療開始前の検査段階から利用できますので、早めに市の窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-scholarship',
    title: '花巻市 奨学金貸付制度',
    organization: '花巻市',
    type: 'local',
    maxAmount: '月額最大5万円（貸与）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '岩手県',
    tags: ['花巻市', '奨学金', '教育支援'],
    eligibility: '花巻市に住所を有する世帯の子で、高校・大学等に進学する方',
    applicationPeriod: '毎年2月〜4月',
    description: '花巻市が実施する奨学金貸付制度です。経済的理由で修学が困難な学生に月額最大5万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 奨学金貸付制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、学費の一部を無利子で貸与する制度です。</p><p>宮沢賢治が「世界がぜんたい幸福にならないうちは個人の幸福はあり得ない」と語ったように、花巻市は教育の機会均等を大切にしています。意欲と能力のある学生が経済的理由で進学を諦めることのないよう、この奨学金制度を運用しています。</p><p><span class="marker-green">無利子貸与で、卒業後に返還する仕組み</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募資格"><p>花巻市に住所を有する世帯の子であること</p><p>高校・高専・短大・大学・専修学校に在学または入学予定であること</p><p>学業成績が優秀で、品行方正であること</p><p>経済的理由により修学が困難であること</p></div><p>花巻市教育委員会学務管理課に申請書類を提出します。学校長の推薦書、世帯の所得証明書、成績証明書が必要です。</p><p><span class="marker">募集は毎年2月〜4月頃で、選考は書類審査により行われます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生：月額2万円程度、大学生等：月額最大5万円</strong>です。入学一時金の貸与制度もあります。</p><p><span class="marker">卒業後6か月の据置期間を経て、返還が開始されます</span>。返還期間は貸与期間の3倍以内です。</p><div class="highlight-box">花巻市にUターン就職した場合の返還免除制度も設けられています。地元で働きながら奨学金の負担を軽減できる仕組みです。詳細は教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-sme-support',
    title: '花巻市 中小企業振興補助金',
    organization: '花巻市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '岩手県',
    tags: ['花巻市', '中小企業支援', '補助金'],
    eligibility: '花巻市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '花巻市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路拡大にかかる経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業の設備投資・販路拡大・人材育成</span>に対して費用の一部を補助する制度です。</p><p>花巻市は農業・観光業に加え、製造業や食品加工業も盛んな地域です。花巻温泉郷を活用した観光関連ビジネスや、地元農産物を活かした6次産業化など、多様な事業展開を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">新製品開発・展示会出展・従業員研修など幅広い用途に利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>花巻市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画を提出できること</p></div><p>花巻市役所商工観光部商工労政課に申請書を提出します。事業計画書、見積書、会社概要等の添付が必要です。</p><p><span class="marker">事業実施前に申請・交付決定を受ける必要があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。設備購入費、広告宣伝費、展示会出展費、研修費などが対象です。</p><p><span class="marker">交付決定前に着手した事業は補助対象外</span>となりますのでご注意ください。</p><div class="note-box">花巻市商工会議所でも経営相談や専門家派遣を無料で利用できます。補助金申請と合わせて活用することで、事業効果をさらに高めることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-nursing-equipment',
    title: '花巻市 介護用品支給事業',
    organization: '花巻市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '岩手県',
    tags: ['花巻市', '介護用品', '支給事業'],
    eligibility: '花巻市に住所を有し、要介護認定を受けた在宅高齢者を介護している家族',
    applicationPeriod: '通年',
    description: '花巻市が実施する介護用品支給事業です。在宅で介護を行う家族に対し、紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 介護用品支給事業は、<span class="marker">在宅で要介護高齢者を介護している家族</span>に対し、日常的に使用する介護用品を支給する制度です。</p><p>花巻市では高齢化が進む中、住み慣れた地域で安心して暮らし続けられるよう、在宅介護の支援に取り組んでいます。紙おむつや尿取りパッド、使い捨て手袋などの消耗品にかかる費用は、介護する家族にとって大きな負担です。</p><p><span class="marker-green">要介護3以上の方を在宅で介護している非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>花巻市に住民登録があり、要介護3以上の認定を受けた高齢者を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="支給対象となる介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋・清拭剤</p><p>防水シーツ</p></div><p>花巻市役所長寿福祉課に申請書を提出します。介護保険被保険者証と要介護認定結果通知書が必要です。<span class="marker">毎月定期的に介護用品カタログから選択して受け取る方式</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>月額上限約8,000円相当の介護用品</strong>で、年間最大10万円相当となります。カタログから必要な用品を選択できます。</p><p><span class="marker">入院中や施設入所中の方は在宅介護に該当しないため対象外</span>です。退院後は再度申請できます。</p><div class="note-box">介護保険サービスの福祉用具貸与・購入費支給とは別の制度です。介護保険の限度額に影響しませんので、両方を併用して介護の負担軽減に活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-elderly-support',
    title: '花巻市 高齢者見守り・生活支援事業',
    organization: '花巻市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助ほか',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '岩手県',
    tags: ['花巻市', '高齢者支援', '見守り'],
    eligibility: '花巻市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '花巻市が実施する高齢者見守り・生活支援事業です。ひとり暮らし高齢者等に配食サービスや緊急通報装置の貸与を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 高齢者見守り・生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、見守りを兼ねた生活支援サービスを提供する制度です。</p><p>花巻市は広大な市域を有し、中山間地域では高齢者の孤立が課題となっています。宮沢賢治が愛した花巻の地で、高齢者が安心して暮らし続けられるよう、配食サービスや緊急通報システムなど複数の支援メニューを用意しています。</p><p><span class="marker-green">配食サービスでは安否確認も兼ねており、定期的な見守りが行われます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援メニュー"><p>配食サービス（栄養バランスのとれた食事の配達＋安否確認）</p><p>緊急通報装置の貸与（ボタン一つで消防署へ通報）</p><p>除雪支援（冬季の生活道路確保）</p><p>ごみ出し支援（戸別収集）</p></div><p>花巻市役所長寿福祉課または各総合支所市民サービス課で申請を受け付けています。介護認定の有無にかかわらず利用可能です。</p><p><span class="marker">民生委員の訪問調査を経て、利用が決定されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたりの自己負担が数百円程度</strong>で、差額は市が補助します。週3〜5回の利用が目安です。</p><p><span class="marker">緊急通報装置は無料で貸与され、月額の通信費も市が負担</span>します。24時間対応で、急病や転倒時に迅速な対応が可能です。</p><div class="highlight-box">冬季の除雪支援は花巻市ならではのサービスです。積雪による外出困難を防ぎ、生活道路の安全確保を行います。利用を希望する方は早めに申請してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hanamaki-seismic-diagnosis',
    title: '花巻市 木造住宅耐震診断助成事業',
    organization: '花巻市',
    type: 'local',
    maxAmount: '診断費用の自己負担なし',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '岩手県',
    tags: ['花巻市', '耐震診断', '防災'],
    eligibility: '花巻市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '花巻市が実施する木造住宅耐震診断助成事業です。旧耐震基準で建てられた木造住宅の耐震診断を無料で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>花巻市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額助成する制度です。</p><p>岩手県は2011年の東日本大震災で甚大な被害を受けた地域であり、花巻市でも住宅の耐震化は重要な防災課題です。地震に強い住まいづくりの第一歩として、まず現在の住宅の耐震性能を把握することが大切です。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>花巻市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>階数が2階以下であること</p><p>在来軸組工法で建築された住宅であること</p></div><p>花巻市役所建設部建築課に申請書を提出します。建築時期がわかる書類（登記事項証明書等）を添付してください。</p><p><span class="marker">申請後、市が委託した耐震診断士が自宅を訪問して診断を行います</span>。所要時間は2〜3時間程度です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用は<strong>全額を市が負担するため、自己負担はありません</strong>。診断結果は報告書として提供されます。</p><p><span class="marker">診断の結果、耐震性能が不足していると判定された場合は、耐震改修工事の補助制度</span>も別途利用可能です。</p><div class="note-box">鉄骨造やRC造の住宅、店舗併用住宅（居住部分が半分未満の場合）は対象外です。共同住宅（マンション等）は管理組合からの申請となります。年間の受付件数に限りがありますので、お早めにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hanamaki.iwate.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大崎市（宮城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'osaki-childcare-subsidy',
    title: '大崎市 子育て世帯生活支援給付金',
    organization: '大崎市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['大崎市', '子育て支援', '給付金'],
    eligibility: '大崎市に住所を有し、18歳未満の児童を養育する低所得世帯の保護者',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '大崎市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 子育て世帯生活支援給付金は、<span class="marker">物価高騰の影響を受ける低所得の子育て世帯</span>に対し、生活の安定を図るための給付金を支給する制度です。</p><p>大崎市は宮城県北西部に位置し、「大崎耕土」として世界農業遺産に認定された豊かな農業地帯を有する都市です。鳴子温泉郷や岩出山の城下町など歴史・文化資源にも恵まれ、子育て世帯が安心して暮らせるまちづくりを推進しています。</p><p><span class="marker-green">児童扶養手当受給世帯や住民税非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大崎市に住民登録があり、18歳未満（18歳の年度末まで）の児童を養育する保護者のうち、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当を受給しているひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰の影響で家計が急変した世帯</p></div><p>児童扶養手当受給世帯は<strong>申請不要で自動支給</strong>されます。それ以外の世帯は大崎市役所子育て支援課へ申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。複数の児童がいる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯は直近の収入がわかる書類（給与明細等）の提出が必要</span>です。</p><div class="note-box">他の自治体から同趣旨の給付金を受給している場合は対象外です。大崎市では子育て相談窓口も設置しており、給付金に限らず子育ての困りごと全般についてサポートを受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-birth-bonus',
    title: '大崎市 出産祝い金支給事業',
    organization: '大崎市',
    type: 'local',
    maxAmount: '第1子3万円・第2子5万円・第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['大崎市', '出産祝い金', '子育て支援'],
    eligibility: '大崎市に住所を有し、出産した方',
    applicationPeriod: '通年（出生届提出後）',
    description: '大崎市が実施する出産祝い金支給事業です。お子さまの誕生を祝い、第1子3万円、第2子5万円、第3子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 出産祝い金支給事業は、<span class="marker">お子さまの誕生を祝い、子育てにかかる経済的負担を軽減</span>するために祝い金を支給する制度です。</p><p>世界農業遺産「大崎耕土」の巧みな水管理が支える米どころ大崎市は、自然と共生する暮らしの中で子どもたちの健やかな成長を見守っています。鳴子こけしに代表される伝統工芸と、先進的な子育て支援を両立させる街です。</p><p>支給額は出生順に応じて増額され、<strong>第3子以降は10万円</strong>です。<span class="marker-green">多子世帯を手厚く支援する仕組み</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大崎市に住民登録がある方で、出産日時点で大崎市に住所を有する方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>大崎市役所子育て支援課の窓口で申請を行います。<span class="marker">出生届提出後6か月以内に申請が必要</span>です。各総合支所の市民福祉課でも受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子：3万円、第2子：5万円、第3子以降：10万円</strong>です。出生順は住民票上の同一世帯で養育している児童数で判定されます。</p><p><span class="marker">多胎児の場合はそれぞれの出生順で金額が決まります</span>。双子で第2子・第3子に当たる場合は5万円＋10万円＝15万円が支給されます。</p><div class="note-box">大崎市では出産祝い金のほかに、産後ケア事業（宿泊型・デイサービス型・訪問型）も実施しています。出産後の体調回復や育児相談をサポートしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-newlywed-rent',
    title: '大崎市 新婚世帯家賃補助事業',
    organization: '大崎市',
    type: 'local',
    maxAmount: '月額最大2万円（最長24か月）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '宮城県',
    tags: ['大崎市', '新婚世帯', '家賃補助'],
    eligibility: '大崎市内に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '大崎市が実施する新婚世帯家賃補助事業です。市内の賃貸住宅に居住する新婚世帯に月額最大2万円を最長24か月間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 新婚世帯家賃補助事業は、<span class="marker">婚姻届提出後3年以内の新婚世帯</span>が市内の賃貸住宅に居住する場合に、家賃の一部を補助する制度です。</p><p>大崎市は若者の流出防止と定住促進に力を入れており、新婚世帯の住居費負担を軽減することで、市内での新生活のスタートを後押ししています。鳴子温泉や岩出山など風情ある地域で、新生活を始めるカップルを歓迎しています。</p><p>補助額は<strong>月額最大2万円で、最長24か月間</strong>受給できます。<span class="marker-green">世帯所得が一定額以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出後3年以内であること</p><p>夫婦ともに大崎市内の賃貸住宅に居住していること</p><p>世帯の合計所得が400万円未満であること</p><p>夫婦いずれかが39歳以下であること</p></div><p>大崎市役所まちづくり推進課に申請書を提出します。婚姻届受理証明書、賃貸借契約書の写し、所得証明書が必要です。</p><p><span class="marker">年度ごとに申請が必要で、交付決定後に毎月の家賃支払いを確認して補助が行われます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>実際の家賃から住宅手当等を差し引いた額の一部で、月額上限2万円</strong>です。24か月間で最大48万円の補助が受けられます。</p><p><span class="marker">公営住宅や社宅に居住している場合は対象外</span>です。また、親族が所有する住宅の賃料も対象外となります。</p><div class="highlight-box">大崎市では新婚世帯向けの住宅取得補助も別途用意しています。賃貸から持ち家への移行を考える際には、住宅取得補助との組み合わせも検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-disability-medical',
    title: '大崎市 重度障がい者医療費助成制度',
    organization: '大崎市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '宮城県',
    tags: ['大崎市', '障がい者医療', '助成金'],
    eligibility: '大崎市に住所を有する重度の障がいをお持ちの方',
    applicationPeriod: '通年',
    description: '大崎市が実施する重度障がい者医療費助成制度です。重度の障がいがある方の保険診療の自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 重度障がい者医療費助成制度は、<span class="marker">重度の身体障がい・知的障がい・精神障がいをお持ちの方</span>の医療費自己負担分を助成する制度です。</p><p>大崎市は誰もが安心して暮らせる共生社会の実現を目指し、障がいのある方の医療費負担を軽減しています。通院・入院・調剤のすべてが助成の対象で、継続的な医療を必要とする方の経済的負担を大幅に緩和しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大崎市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい等級"><p>身体障害者手帳 1級・2級</p><p>療育手帳 A</p><p>精神障害者保健福祉手帳 1級</p><p>特別児童扶養手当 1級該当の障がい児</p></div><p>大崎市役所社会福祉課に障害者手帳と健康保険証を持参して申請します。<strong>「重度障害者医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。宮城県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。65歳以上で新たに障がい認定を受けた方は、後期高齢者医療制度との調整が必要な場合がありますので窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-school-lunch',
    title: '大崎市 学校給食費補助事業',
    organization: '大崎市',
    type: 'local',
    maxAmount: '給食費の全額または一部補助',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '宮城県',
    tags: ['大崎市', '学校給食', '教育支援'],
    eligibility: '大崎市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '大崎市が実施する学校給食費補助事業です。世界農業遺産「大崎耕土」の地元産食材を使った給食費の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 学校給食費補助事業は、<span class="marker">市立小中学校に在籍する児童生徒の保護者</span>に対し、学校給食費の一部または全額を補助する制度です。</p><p>大崎市は世界農業遺産「大崎耕土」で生産される良質な米や野菜を学校給食に積極的に取り入れており、地産地消の食育を推進しています。子育て世帯の経済的負担を軽減しながら、地元の恵みを子どもたちに届けています。</p><p><span class="marker-green">第3子以降の給食費は全額補助、それ以外の世帯にも一部補助</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の区分"><p>第3子以降の児童生徒：給食費全額補助</p><p>住民税非課税世帯：給食費全額補助</p><p>就学援助認定世帯：給食費全額補助</p><p>上記以外の世帯：給食費の一部補助（年度により異なる）</p></div><p>大崎市教育委員会学校教育課に申請書を提出します。学校を通じて案内が配布されます。</p><p><span class="marker">第3子以降の全額補助は、同一世帯で学校に通う子どもの人数で判定されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は<strong>月額約4,500円、中学校は約5,200円</strong>が目安です。第3子以降はこの全額が補助されます。</p><p><span class="marker">一部補助の場合は年額で数千円〜1万円程度の補助</span>となります。年度の予算状況により金額が変わることがあります。</p><div class="highlight-box">大崎市の学校給食は「大崎耕土」の米を中心に、地元産の農畜産物を豊富に使用しています。食育の一環として、生産者との交流給食なども実施されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-telework-bonus',
    title: '大崎市 テレワーク移住促進補助金',
    organization: '大崎市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '宮城県',
    tags: ['大崎市', 'テレワーク', '移住支援'],
    eligibility: '大崎市にテレワーク目的で移住した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大崎市が実施するテレワーク移住促進補助金です。テレワークで大崎市に移住した方に通信環境整備費等を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 テレワーク移住促進補助金は、<span class="marker">テレワークを活用して大崎市に移住した方</span>に対し、通信環境やワークスペースの整備費用を補助する制度です。</p><p>鳴子温泉郷を有する大崎市は、温泉付きワーケーション施設も充実しており、リモートワーカーにとって魅力的な環境が整っています。世界農業遺産の田園風景を眺めながら働く新しいライフスタイルを支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">市外からの転入者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>大崎市外から転入後1年以内であること</p><p>テレワークにより市外の企業等に勤務していること</p><p>大崎市に3年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>大崎市役所政策課に申請書と勤務先の在籍証明書、テレワーク勤務を証明する書類を提出します。</p><p><span class="marker">通信環境整備費、オフィス家具購入費、コワーキングスペース利用料などが対象経費</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。光回線工事費、Wi-Fiルーター購入費、デスク・チェア等が含まれます。</p><p><span class="marker">3年以内に市外へ転出した場合は補助金の返還を求められます</span>。</p><div class="note-box">大崎市にはコワーキングスペースやシェアオフィスも整備されています。鳴子温泉郷ではワーケーション向けの宿泊プランを提供する施設もあり、移住前のお試し利用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-nursing-home-reform',
    title: '大崎市 在宅介護住宅改修支援事業',
    organization: '大崎市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '宮城県',
    tags: ['大崎市', '介護', '住宅改修'],
    eligibility: '大崎市に住所を有し、要介護認定を受けた方と同居する家族',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大崎市が実施する在宅介護住宅改修支援事業です。要介護者の在宅介護のための住宅バリアフリー改修に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 在宅介護住宅改修支援事業は、<span class="marker">要介護認定を受けた方が自宅で安全に生活できるよう、住宅のバリアフリー改修</span>に対して費用の一部を補助する制度です。</p><p>大崎市は広い市域に農村地域が広がり、高齢化が進む中で在宅介護の環境整備が重要な課題です。介護保険の住宅改修費（上限20万円）だけでは賄えない大規模な改修を、市独自に上乗せ支援しています。</p><p>補助率は対象工事費の3分の2以内で、<strong>上限は30万円</strong>です。<span class="marker-green">介護保険の住宅改修費と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>手すりの設置</p><p>段差の解消（スロープ設置等）</p><p>床材の変更（滑りにくい素材へ）</p><p>引き戸への扉の取替え</p><p>浴室・トイレの改修</p></div><p>大崎市役所介護保険課に申請書を提出します。ケアマネジャーの意見書、工事見積書、改修箇所の写真が必要です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから着工してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の2以内で、<strong>上限30万円</strong>です。介護保険の住宅改修費（上限20万円）と合わせると最大50万円の支援が受けられます。</p><p><span class="marker">施設入所中の方は在宅介護に該当しないため対象外</span>です。退所して在宅に戻る場合は申請可能です。</p><div class="highlight-box">大崎市では住宅改修のほかに、福祉用具の貸与・購入費支給、訪問介護・通所介護などの在宅サービスも充実しています。ケアマネジャーと相談しながら、最適な組み合わせを検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-energy-support',
    title: '大崎市 エネルギー価格高騰対策支援金',
    organization: '大崎市',
    type: 'local',
    maxAmount: '1世帯あたり最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '宮城県',
    tags: ['大崎市', 'エネルギー支援', '給付金'],
    eligibility: '大崎市に住所を有する住民税非課税世帯等',
    applicationPeriod: '毎年6月〜12月（予算に達し次第終了）',
    description: '大崎市が実施するエネルギー価格高騰対策支援金です。住民税非課税世帯等に対し、光熱費負担軽減のため最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 エネルギー価格高騰対策支援金は、<span class="marker">電気・ガス・灯油等のエネルギー価格高騰の影響を受ける低所得世帯</span>に対し、光熱費の負担を軽減するための支援金を支給する制度です。</p><p>大崎市は宮城県内陸部に位置し、冬季は積雪や厳しい寒さに見舞われます。暖房費は生活に不可欠な支出であり、灯油やガス代の高騰は低所得世帯にとって大きな負担です。特に鳴子地域など山間部では冬季の光熱費が大きくなります。</p><p><span class="marker-green">住民税非課税世帯が対象で、1世帯あたり最大3万円が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大崎市に住民登録があり、世帯全員の住民税均等割が非課税である世帯が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>エネルギー支援金申請書</p><p>世帯主の本人確認書類</p><p>振込先口座情報</p><p>光熱費の請求書または領収書の写し</p></div><p>大崎市役所社会福祉課または各総合支所市民福祉課に申請書を提出します。<span class="marker">郵送での申請も受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり3万円</strong>です。世帯人数にかかわらず一律の支給です。</p><p><span class="marker">生活保護受給世帯は冬季加算で対応されるため、この支援金の対象外</span>となる場合があります。</p><div class="note-box">大崎市では灯油購入費の助成や、高齢者世帯への暖房器具点検サービスなども実施しています。冬季の生活に不安のある方は、市の福祉相談窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaki-bousai-equipment',
    title: '大崎市 家庭用防災設備補助金',
    organization: '大崎市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '宮城県',
    tags: ['大崎市', '防災設備', '補助金'],
    eligibility: '大崎市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '大崎市が実施する家庭用防災設備補助金です。家庭用の防災設備（感震ブレーカー、蓄電池等）の設置に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大崎市 家庭用防災設備補助金は、<span class="marker">地震や風水害に備えた家庭用防災設備の設置</span>に対して費用の一部を補助する制度です。</p><p>大崎市は2011年の東日本大震災で震度6強を記録し、甚大な被害を経験しました。その教訓を踏まえ、各家庭レベルでの防災力向上を推進しています。感震ブレーカーによる通電火災の防止や、家庭用蓄電池による停電対策などを支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカー・家庭用蓄電池・家具固定器具などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家庭用蓄電池（ポータブル電源含む）</p><p>家具転倒防止器具の設置工事</p><p>飛散防止フィルム（窓ガラス用）</p></div><p>大崎市役所防災安全課に申請書と見積書を提出します。設置後の写真報告も必要です。</p><p><span class="marker">設置前に申請し、交付決定を受けてから購入・設置してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。1世帯につき1回の利用に限られます。</p><p><span class="marker">量販店等で購入した製品の設置工事も対象</span>ですが、購入前に必ず申請を済ませてください。</p><div class="note-box">大崎市は「災害に強いまちづくり」を重点施策として掲げています。家庭の防災設備整備と合わせて、非常持出袋の準備やハザードマップの確認、地域の防災訓練への参加もお願いしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaki.miyagi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 名取市（宮城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'natori-childcare-subsidy',
    title: '名取市 子育て世帯生活支援給付金',
    organization: '名取市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['名取市', '子育て支援', '給付金'],
    eligibility: '名取市に住所を有し、18歳未満の児童を養育する低所得世帯の保護者',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '名取市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 子育て世帯生活支援給付金は、<span class="marker">物価高騰の影響を受ける低所得の子育て世帯</span>に対し、生活の安定を図るための給付金を支給する制度です。</p><p>仙台市の南に隣接する名取市は、仙台空港が立地する交通至便の街です。東日本大震災の津波被害から復興を遂げた閖上（ゆりあげ）地区は、新たな街並みが整い、子育て世帯の転入が増加しています。</p><p><span class="marker-green">児童扶養手当受給世帯や住民税非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>名取市に住民登録があり、18歳未満の児童を養育する保護者のうち、以下に該当する方が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当を受給しているひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>家計が急変して収入が減少した世帯</p></div><p>児童扶養手当受給世帯は<strong>申請不要で自動支給</strong>されます。その他の世帯は名取市役所こども支援課で申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。対象児童が複数いる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯は直近の収入を証明できる書類の提出が求められます</span>。</p><div class="note-box">名取市では子育て支援センターや児童センターも充実しています。給付金に関する相談だけでなく、日常的な子育ての悩みについても気軽にご相談いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-birth-bonus',
    title: '名取市 出産祝い金支給事業',
    organization: '名取市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['名取市', '出産祝い金', '子育て支援'],
    eligibility: '名取市に住所を有し、出産した方',
    applicationPeriod: '通年（出生届提出後）',
    description: '名取市が実施する出産祝い金支給事業です。お子さまの誕生を祝い、出生順に応じて最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 出産祝い金支給事業は、<span class="marker">新たに誕生したお子さまを祝い、出産・育児にかかる経済的負担を軽減</span>するための祝い金を支給する制度です。</p><p>名取市は仙台空港のある街として知られ、閖上朝市や名取トレイルセンターなど魅力的な施設も充実しています。震災復興を経て人口が増加傾向にある活気ある街で、出産を迎える家庭を応援しています。</p><p>支給額は出生順に応じて増額され、<strong>第3子以降は20万円</strong>です。<span class="marker-green">多子世帯への手厚い支援</span>が特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>名取市に住民登録がある方で、出産日時点で名取市に住所を有する方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>名取市役所こども支援課の窓口で申請を行います。<span class="marker">出生届提出後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子：5万円、第2子：10万円、第3子以降：20万円</strong>です。出生順は同一世帯で養育している18歳未満の児童数で判定されます。</p><p><span class="marker">多胎児（双子等）の場合はそれぞれ1人として出生順を数えます</span>。</p><div class="highlight-box">名取市では出産祝い金のほかに、産後ケア事業（ショートステイ・デイケア・訪問型）や乳児家庭全戸訪問事業も実施しています。安心して出産・育児ができる体制を整えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-housing-purchase',
    title: '名取市 住宅取得支援補助金',
    organization: '名取市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '宮城県',
    tags: ['名取市', '住宅取得', '補助金'],
    eligibility: '名取市内に新たに住宅を取得する40歳以下の方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '名取市が実施する住宅取得支援補助金です。市内に住宅を新築または購入する若年世帯に最大60万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または中古住宅を購入する若年世帯</span>に対し、取得費用の一部を補助する制度です。</p><p>仙台市に隣接する名取市は、仙台空港アクセス鉄道の開通以降、人口増加が続く活力ある都市です。閖上地区の復興整備も完了し、海と街が共存する魅力ある居住環境を提供しています。若年層の定住促進に力を入れています。</p><p>補助額は基本40万円で、<strong>子育て世帯には加算があり最大60万円</strong>です。<span class="marker-green">40歳以下の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>夫婦いずれかが40歳以下であること</p><p>名取市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>名取市役所都市計画課に申請書と売買契約書、建築確認済証などを提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。事前に窓口でご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>40万円</strong>です。子育て世帯加算（18歳未満の子どもがいる世帯）として<strong>20万円が加算</strong>され、最大60万円となります。</p><p><span class="marker">5年以内に市外へ転出した場合は補助金の返還を求められることがあります</span>。</p><div class="note-box">名取市は仙台空港アクセス鉄道沿線の利便性が高く、仙台市への通勤にも便利です。閖上地区のかわまちてらすなど商業施設も充実しており、子育てファミリーに人気のエリアです。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-infertility',
    title: '名取市 不妊治療費助成事業',
    organization: '名取市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '宮城県',
    tags: ['名取市', '不妊治療', '助成金'],
    eligibility: '名取市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '名取市が実施する不妊治療費助成事業です。不妊治療にかかる費用の一部を助成し、1回あたり最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減</span>するため、保険適用外の治療費の一部を助成する制度です。</p><p>名取市は子育て環境の充実に力を入れており、子どもを望む夫婦への支援もその一環です。2022年4月に不妊治療が保険適用となりましたが、先進医療や一部の自費診療については引き続き高額な負担が生じるため、市独自の助成を行っています。</p><p><span class="marker-green">保険適用外の先進医療にかかる自己負担分が主な助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>名取市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の受診等証明書</p><p>領収書の原本</p><p>夫婦の住民票</p></div><p>名取市役所保健センターに申請します。<span class="marker">治療が終了した日から6か月以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき自己負担額の一部で、上限10万円</strong>です。年度内の助成回数には制限があります。</p><p><span class="marker">宮城県の不妊治療費助成制度との併用が可能</span>ですが、助成額の合計が自己負担額を超えることはできません。</p><div class="note-box">名取市では不妊治療に関するカウンセリングや相談も受け付けています。治療の進め方や費用面の不安など、保健師に気軽にご相談いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-scholarship',
    title: '名取市 奨学金貸付制度',
    organization: '名取市',
    type: 'local',
    maxAmount: '月額最大4万円（貸与）',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '宮城県',
    tags: ['名取市', '奨学金', '教育支援'],
    eligibility: '名取市に住所を有する世帯の子で、高校・大学等に進学する方',
    applicationPeriod: '毎年2月〜4月',
    description: '名取市が実施する奨学金貸付制度です。経済的理由で修学が困難な学生に月額最大4万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 奨学金貸付制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、学費の一部を無利子で貸与する制度です。</p><p>名取市は教育環境の充実にも力を入れており、意欲ある学生が経済的理由で進学を諦めることのないよう支援しています。仙台市内の大学・専門学校へのアクセスも良く、自宅から通学しながら奨学金を利用できる利便性があります。</p><p><span class="marker-green">無利子での貸与で、卒業後に分割返還する仕組み</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募資格"><p>名取市に住所を有する世帯の子であること</p><p>高校・高専・大学・短大・専修学校に在学または入学予定であること</p><p>学業成績が良好であること</p><p>経済的理由により修学が困難であること</p></div><p>名取市教育委員会教育総務課に申請書類を提出します。学校の推薦書、所得証明書が必要です。</p><p><span class="marker">毎年2月から4月に募集があり、選考は書類審査によります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生：月額1.5万円〜2万円、大学生等：月額最大4万円</strong>です。</p><p><span class="marker">卒業後6か月の据置期間を経て、毎月均等で返還</span>します。返還期間は貸与期間の3倍以内です。</p><div class="highlight-box">名取市では日本学生支援機構（JASSO）の奨学金との併用も認めています。必要に応じて複数の奨学金を組み合わせることで、より安定した学生生活を送ることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-sme-support',
    title: '名取市 中小企業振興補助金',
    organization: '名取市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '宮城県',
    tags: ['名取市', '中小企業支援', '補助金'],
    eligibility: '名取市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '名取市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路開拓にかかる経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業の設備投資・販路開拓・人材育成</span>に対して費用の一部を補助する制度です。</p><p>名取市は仙台空港に隣接する立地を活かし、物流関連企業や製造業が集積しています。閖上地区の復興に伴い観光・飲食業も活性化しており、多様な業種の中小企業が成長の機会を得ています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">展示会出展費、新製品開発費、従業員研修費などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>名取市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画を提出できること</p></div><p>名取市役所商工観光課に申請書と事業計画書を提出します。</p><p><span class="marker">事業実施前に申請し、交付決定を受ける必要があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。</p><p><span class="marker">交付決定前に着手した事業は補助対象外</span>となります。計画段階で窓口にご相談ください。</p><div class="note-box">名取市商工会でも経営相談や専門家派遣を無料で利用できます。IT導入支援や事業承継支援なども行っていますので、併せてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-nursing-equipment',
    title: '名取市 介護用品支給事業',
    organization: '名取市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '宮城県',
    tags: ['名取市', '介護用品', '支給事業'],
    eligibility: '名取市に住所を有し、要介護認定を受けた在宅高齢者を介護している家族',
    applicationPeriod: '通年',
    description: '名取市が実施する介護用品支給事業です。在宅で介護を行う家族に紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 介護用品支給事業は、<span class="marker">在宅で要介護高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>名取市は仙台市に隣接するベッドタウンとして発展してきましたが、高齢化の進行に伴い在宅介護の支援ニーズが高まっています。介護用品の消耗品費は月々の家計を圧迫するため、市が費用の一部を負担しています。</p><p><span class="marker-green">要介護3以上の方を在宅で介護している住民税非課税世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給対象となる介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤・おしりふき</p></div><p>名取市役所介護長寿課に申請書と介護保険被保険者証を提出します。</p><p><span class="marker">申請が承認されると、毎月介護用品カタログから必要な用品を選んで受け取れます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>月額上限約8,000円相当で、年間最大10万円相当</strong>です。</p><p><span class="marker">入院中や介護施設に入所中の方は対象外</span>です。退院・退所後に再度申請できます。</p><div class="note-box">介護保険サービスの福祉用具貸与・購入費支給とは別の事業です。両方を併用して介護の負担軽減に活用してください。ケアマネジャーにもご相談いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-elderly-support',
    title: '名取市 高齢者見守りネットワーク事業',
    organization: '名取市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与ほか',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '宮城県',
    tags: ['名取市', '高齢者見守り', '生活支援'],
    eligibility: '名取市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '名取市が実施する高齢者見守りネットワーク事業です。ひとり暮らし高齢者等に緊急通報装置の貸与や配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 高齢者見守りネットワーク事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、見守りと生活支援を行う事業です。</p><p>名取市は東日本大震災の津波で甚大な被害を受けた閖上地区を含む沿岸部で、独居高齢者の安否確認が特に重要な課題です。地域の民生委員や協力事業者と連携した見守りネットワークを構築しています。</p><p><span class="marker-green">緊急通報装置の無料貸与、配食サービス、安否確認訪問が主な支援内容</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援メニュー"><p>緊急通報装置の貸与（ペンダント型・据置型）</p><p>配食サービス（栄養バランスのとれた食事の配達＋安否確認）</p><p>民生委員・協力員による定期訪問</p><p>見守りメールサービス</p></div><p>名取市役所介護長寿課に申請書を提出します。民生委員の意見書が必要な場合があります。</p><p><span class="marker">介護認定の有無にかかわらず65歳以上のひとり暮らし高齢者等が利用可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置は無料で貸与</strong>され、月額の通信費も市が負担します。ボタン一つで消防署や協力員に通報できます。</p><p><span class="marker">配食サービスは1食あたり数百円の自己負担で利用でき、週3〜5回の配達が目安</span>です。</p><div class="highlight-box">名取市では新聞販売店や宅配業者など民間事業者とも見守り協定を締結しています。日常の生活の中で異変に気づく仕組みを整え、高齢者の安全を地域全体で見守っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'natori-seismic-diagnosis',
    title: '名取市 木造住宅耐震診断助成事業',
    organization: '名取市',
    type: 'local',
    maxAmount: '診断費用の自己負担なし',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '宮城県',
    tags: ['名取市', '耐震診断', '防災'],
    eligibility: '名取市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '名取市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断を無料で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名取市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額助成する制度です。</p><p>名取市は2011年の東日本大震災で津波と地震の複合被害を経験しました。沿岸部の復興は進んでいますが、内陸部にも旧耐震基準の住宅が多く残っており、耐震化の促進は引き続き重要な課題です。</p><p><span class="marker-green">市が派遣する耐震診断士による無料の診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>名取市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>階数が2階以下であること</p><p>在来軸組工法または伝統的構法で建築されていること</p></div><p>名取市役所都市計画課に申請書と建築時期がわかる書類を提出します。</p><p><span class="marker">申請後、市が委託した耐震診断士が訪問して調査・診断を行います</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用は<strong>全額を市が負担し、自己負担はありません</strong>。</p><p><span class="marker">診断の結果、耐震性能不足と判定された場合は、耐震改修工事の補助制度も利用可能</span>です。</p><div class="note-box">名取市では耐震改修工事に最大100万円の補助を行う制度もあります。まずは無料の耐震診断を受けて、ご自宅の耐震性能を確認することをおすすめします。年間の受付件数に限りがあるため、お早めにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.natori.miyagi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大仙市（秋田県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'daisen-childcare-subsidy',
    title: '大仙市 子育て世帯生活支援給付金',
    organization: '大仙市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['大仙市', '子育て支援', '給付金'],
    eligibility: '大仙市に住所を有し、18歳未満の児童を養育する低所得世帯の保護者',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '大仙市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 子育て世帯生活支援給付金は、<span class="marker">物価高騰の影響を受ける低所得の子育て世帯</span>に対し、生活の安定を支援する給付金です。</p><p>大仙市は秋田県南東部に位置し、全国花火競技大会（大曲の花火）で知られる街です。雄物川の豊かな水と肥沃な土壌に恵まれた米どころですが、少子高齢化が進む中、子育て世帯への経済的支援に力を入れています。</p><p><span class="marker-green">児童扶養手当受給世帯や住民税非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大仙市に住民登録があり、18歳未満の児童を養育する保護者のうち、低所得の世帯が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当を受給しているひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰の影響で家計が急変した世帯</p></div><p>児童扶養手当受給世帯は<strong>申請不要で自動支給</strong>されます。その他の世帯は大仙市役所子育て支援課へ申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。複数の児童がいる場合はそれぞれに支給されます。</p><p><span class="marker">家計急変世帯は給与明細等の収入を確認できる書類が必要</span>です。</p><div class="note-box">大仙市では子育て支援センターや地域子育て拠点も各地区に設置しています。経済的支援だけでなく、育児の相談や親同士の交流の場としてもご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-birth-bonus',
    title: '大仙市 出産祝い金支給事業',
    organization: '大仙市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['大仙市', '出産祝い金', '子育て支援'],
    eligibility: '大仙市に住所を有し、出産した方',
    applicationPeriod: '通年（出生届提出後）',
    description: '大仙市が実施する出産祝い金支給事業です。少子化対策の一環として、出生順に応じて最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 出産祝い金支給事業は、<span class="marker">お子さまの誕生を祝い、子育てにかかる経済的負担を軽減</span>するための祝い金を支給する制度です。</p><p>大仙市は「大曲の花火」で全国的に知られ、夏の夜空を彩る花火のように子どもたちの未来が輝くことを願い、出産を迎える家庭を応援しています。秋田県内でも人口減少が著しい地域であり、少子化対策として手厚い支援を行っています。</p><p>支給額は出生順に応じて増額され、<strong>第3子以降は20万円</strong>です。<span class="marker-green">秋田県内でもトップクラスの支給水準</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大仙市に住民登録がある方で、出産日時点で大仙市に1年以上居住している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>大仙市役所子育て支援課または各支所市民サービス課で申請できます。<span class="marker">出生届提出後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子：5万円、第2子：10万円、第3子以降：20万円</strong>です。出生順は同一世帯の18歳未満の児童数で判定されます。</p><p><span class="marker">多胎児の場合はそれぞれ1人として出生順を数えます</span>。</p><div class="highlight-box">大仙市では出産祝い金のほかに、おむつ定期便（赤ちゃんの月齢に合わせたおむつの無料配送＋見守り訪問）も実施しています。出産後の育児をトータルでサポートしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-newlywed-rent',
    title: '大仙市 新婚世帯住居費補助事業',
    organization: '大仙市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '秋田県',
    tags: ['大仙市', '新婚世帯', '住居費補助'],
    eligibility: '大仙市内に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '大仙市が実施する新婚世帯住居費補助事業です。新婚世帯の住居費（家賃・引越し費用等）を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 新婚世帯住居費補助事業は、<span class="marker">婚姻届提出後3年以内の新婚世帯</span>に対し、住居にかかる費用の一部を補助する制度です。</p><p>大仙市は大曲の花火大会で有名ですが、日常の暮らしやすさにも定評があります。秋田新幹線の大曲駅を有し交通アクセスも良好で、若い世代の定住促進のために新婚世帯への住居費支援を行っています。</p><p>家賃や引越し費用、住宅取得に伴うリフォーム費用が対象で、<strong>上限は30万円</strong>です。<span class="marker-green">夫婦の合計所得が400万円未満で、いずれかが39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出日が申請年度の4月1日から3月31日の間であること</p><p>夫婦の合計所得が400万円未満であること</p><p>夫婦いずれかが39歳以下であること</p><p>大仙市内に居住していること</p></div><p>大仙市役所まちづくり課に申請書を提出します。婚姻届受理証明書、賃貸借契約書、所得証明書が必要です。</p><p><span class="marker">婚姻届提出から1年以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助対象は<strong>家賃、敷金・礼金、共益費、引越し費用、住宅のリフォーム費用</strong>で、上限30万円です。</p><p><span class="marker">公営住宅の家賃や親族所有の住宅の賃料は対象外</span>です。</p><div class="note-box">大仙市では結婚新生活支援事業として国の補助制度も活用しています。所得要件は国の基準に準じますが、詳細は市の窓口でご確認ください。若い世代の定住を全力で応援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-disability-medical',
    title: '大仙市 重度障がい者医療費助成制度',
    organization: '大仙市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '秋田県',
    tags: ['大仙市', '障がい者医療', '助成金'],
    eligibility: '大仙市に住所を有する重度の障がいをお持ちの方',
    applicationPeriod: '通年',
    description: '大仙市が実施する重度障がい者医療費助成制度です。重度の障がいがある方の保険診療自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 重度障がい者医療費助成制度は、<span class="marker">重度の身体障がい・知的障がい・精神障がいをお持ちの方</span>の医療費自己負担分を助成する制度です。</p><p>大仙市は誰もが安心して暮らせる街づくりを目指し、障がいのある方の医療費負担を軽減しています。広い市域の各地区に医療機関が点在しており、通院・入院ともに助成を受けられます。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大仙市に住民登録がある方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい等級"><p>身体障害者手帳 1級・2級</p><p>療育手帳 A</p><p>精神障害者保健福祉手帳 1級</p></div><p>大仙市役所福祉課に障害者手帳と健康保険証を持参して申請します。<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が助成</strong>されます。秋田県内の医療機関では受給者証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用は助成対象外です。65歳以上で新たに障がい認定を受けた方は、後期高齢者医療制度との調整が必要な場合がありますので窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-school-lunch',
    title: '大仙市 学校給食費無償化事業',
    organization: '大仙市',
    type: 'local',
    maxAmount: '給食費全額無償',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '秋田県',
    tags: ['大仙市', '学校給食', '無償化'],
    eligibility: '大仙市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '申請不要（自動適用）',
    description: '大仙市が実施する学校給食費無償化事業です。市立小中学校の給食費を全額無償とし、子育て世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 学校給食費無償化事業は、<span class="marker">市立小中学校に在籍するすべての児童生徒の給食費を全額無償</span>とする制度です。</p><p>大仙市は秋田県有数の米どころであり、地元産のあきたこまちをはじめ新鮮な農産物を使った学校給食に定評があります。子育て世帯の経済的負担を軽減しながら、「食のまち大仙」の豊かな食文化を子どもたちに伝えています。</p><p><span class="marker-green">所得制限なしで、市立小中学校の全児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大仙市立小中学校に在籍するすべての児童生徒が対象です。</p><div class="summary-box" data-title="制度の特徴"><p>所得制限なし：全世帯が対象</p><p>申請不要：自動的に無償化が適用</p><p>小学校・中学校ともに対象</p><p>アレルギー対応の代替食も対象</p></div><p>保護者による申請手続きは<strong>不要</strong>です。入学・転入時に自動的に適用されます。</p><p><span class="marker">私立学校や特別支援学校（県立）に通う場合は対象外</span>となる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>無償化される金額は<strong>小学校で月額約4,500円、中学校で月額約5,200円</strong>に相当し、年間で約5〜6万円の家計負担が軽減されます。</p><p><span class="marker">転入してきた児童生徒も転入日から無償化の対象</span>となります。</p><div class="highlight-box">大仙市の学校給食は「地産地消率」が高く、地元農家が育てた野菜や米をふんだんに使用しています。給食を通じた食育活動も盛んで、農業体験と連動した学習も行われています。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-telework-bonus',
    title: '大仙市 テレワーク移住支援補助金',
    organization: '大仙市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '秋田県',
    tags: ['大仙市', 'テレワーク', '移住支援'],
    eligibility: '大仙市にテレワーク目的で移住した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大仙市が実施するテレワーク移住支援補助金です。テレワークで大仙市に移住した方に通信環境整備費等を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 テレワーク移住支援補助金は、<span class="marker">テレワークを活用して市外の企業等に勤務しながら大仙市に移住した方</span>に対し、通信環境やワークスペースの整備費用を補助する制度です。</p><p>大仙市は大曲の花火で世界に名を馳せる一方、秋田新幹線で東京から約3時間半とアクセスも良好です。四季折々の自然と温泉に恵まれた環境で、都会と同じ仕事をしながら豊かな暮らしを実現するテレワーク移住を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">市外からの転入者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>大仙市外から転入後1年以内であること</p><p>テレワークにより市外の企業等に勤務していること</p><p>大仙市に3年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>大仙市役所企画部まちづくり課に申請書と在籍証明書等を提出します。</p><p><span class="marker">光回線工事費、Wi-Fi環境整備費、ワーキングチェア購入費などが対象</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。</p><p><span class="marker">3年以内に市外へ転出した場合は補助金の返還が求められます</span>。</p><div class="note-box">大仙市では移住者向けのお試し住宅やコワーキングスペースも用意しています。移住前に現地での暮らしを体験できますので、ぜひご利用ください。大曲の花火を間近で見られるのは大仙市民の特権です。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-nursing-home-reform',
    title: '大仙市 在宅介護住宅改修補助金',
    organization: '大仙市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'nursing',
    prefecture: '秋田県',
    tags: ['大仙市', '介護', '住宅改修'],
    eligibility: '大仙市に住所を有し、要介護認定を受けた方の自宅をバリアフリー改修する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大仙市が実施する在宅介護住宅改修補助金です。要介護者のためのバリアフリー改修に最大25万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 在宅介護住宅改修補助金は、<span class="marker">要介護認定を受けた方が自宅で安全に暮らせるよう、バリアフリー改修工事</span>の費用を補助する制度です。</p><p>大仙市は秋田県の中でも高齢化率が高い地域であり、在宅介護の環境整備が喫緊の課題です。雪国特有の住宅構造（段差が多い、廊下が狭い等）に対応するバリアフリー化を、介護保険に上乗せして支援しています。</p><p>補助率は対象工事費の3分の2以内で、<strong>上限は25万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>手すりの設置（廊下・トイレ・浴室等）</p><p>段差の解消（スロープ設置・床のかさ上げ）</p><p>引き戸への変更</p><p>浴室・トイレの改修</p><p>冬季対策（暖房設備のバリアフリー化）</p></div><p>大仙市役所長寿社会課に申請書と工事見積書を提出します。ケアマネジャーの意見書も必要です。</p><p><span class="marker">必ず工事着手前に申請・交付決定を受けてください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の2以内で、<strong>上限25万円</strong>です。介護保険と合わせると最大45万円の改修支援が受けられます。</p><p><span class="marker">施設入所中の方は対象外</span>ですが、退所して在宅復帰する場合は申請できます。</p><div class="note-box">大仙市は積雪地域のため、冬季の室内ヒートショック対策（脱衣所や浴室の暖房設備）も改修対象に含まれています。高齢者の冬季の事故防止にもつながる重要な取り組みです。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-energy-support',
    title: '大仙市 冬季灯油購入費助成事業',
    organization: '大仙市',
    type: 'local',
    maxAmount: '1世帯あたり最大2万円',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '秋田県',
    tags: ['大仙市', '灯油助成', '冬季支援'],
    eligibility: '大仙市に住所を有する住民税非課税の高齢者世帯・障がい者世帯等',
    applicationPeriod: '毎年11月〜翌年3月',
    description: '大仙市が実施する冬季灯油購入費助成事業です。低所得の高齢者世帯等に暖房用灯油購入費として最大2万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 冬季灯油購入費助成事業は、<span class="marker">冬季の暖房用灯油代が家計の大きな負担となっている低所得世帯</span>に対し、灯油購入費の一部を助成する制度です。</p><p>大仙市は秋田県内陸部に位置し、冬季は豪雪に見舞われることも多く、暖房は生活に欠かせません。灯油価格の高騰は特に低所得の高齢者世帯に大きな影響を与えるため、市独自の助成制度を設けています。</p><p><span class="marker-green">住民税非課税の高齢者世帯・障がい者世帯・ひとり親世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる世帯"><p>65歳以上のみで構成される住民税非課税世帯</p><p>障がい者手帳を持つ方がいる住民税非課税世帯</p><p>ひとり親の住民税非課税世帯</p><p>生活保護受給世帯は対象外</p></div><p>大仙市役所福祉課または各支所市民サービス課に申請書を提出します。</p><p><span class="marker">毎年11月頃から申請受付が開始され、3月末までに申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1世帯あたり2万円</strong>です。灯油購入の領収書等は不要で、対象世帯に一律支給されます。</p><p><span class="marker">生活保護受給世帯は冬季加算で対応されるため、この助成事業の対象外</span>です。</p><div class="highlight-box">大仙市は除雪支援事業も実施しており、高齢者世帯の屋根の雪下ろしや生活道路の確保を支援しています。冬季の灯油助成と合わせて、雪国ならではの生活課題にトータルで対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'daisen-bousai-equipment',
    title: '大仙市 防災資機材整備補助金',
    organization: '大仙市',
    type: 'local',
    maxAmount: '最大10万円（自主防災組織向け）',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '秋田県',
    tags: ['大仙市', '防災', '自主防災'],
    eligibility: '大仙市内の自主防災組織または町内会',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '大仙市が実施する防災資機材整備補助金です。自主防災組織の防災資機材購入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大仙市 防災資機材整備補助金は、<span class="marker">市内の自主防災組織や町内会が防災活動に必要な資機材を整備</span>する際に、購入費用の一部を補助する制度です。</p><p>大仙市は雄物川流域に位置し、豪雨時の洪水や冬季の豪雪による災害リスクを抱えています。地域防災力の向上には、各地区の自主防災組織の活動が不可欠であり、その活動基盤となる資機材の整備を支援しています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は10万円</strong>です。<span class="marker-green">発電機、投光器、担架、救急箱などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の資機材例"><p>発電機・投光器</p><p>担架・救急箱・AED</p><p>防災倉庫・備蓄品保管庫</p><p>炊き出し用具（大型鍋・コンロ等）</p><p>トランシーバー・メガホン</p></div><p>大仙市役所総合防災課に申請書と見積書を提出します。自主防災組織の規約・名簿の添付も必要です。</p><p><span class="marker">購入前に申請し、交付決定を受けてから購入してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限10万円</strong>です。1組織あたり年度内1回の利用が可能です。</p><p><span class="marker">個人での申請はできません。自主防災組織または町内会単位での申請</span>が必要です。</p><div class="note-box">大仙市では自主防災組織の新規結成も支援しています。未結成の地区では、結成に際しての活動マニュアル作成支援や防災訓練の指導も市が行っています。地域の防災力向上にぜひご協力ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.daisen.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 酒田市（山形県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'sakata-childcare-subsidy',
    title: '酒田市 子育て世帯生活支援給付金',
    organization: '酒田市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '山形県',
    tags: ['酒田市', '子育て支援', '給付金'],
    eligibility: '酒田市に住所を有し、18歳未満の児童を養育する低所得世帯の保護者',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '酒田市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 子育て世帯生活支援給付金は、<span class="marker">物価高騰の影響を受ける低所得の子育て世帯</span>に対し、生活の安定を図るための給付金を支給する制度です。</p><p>日本海に面する酒田市は、江戸時代に北前船の寄港地として繁栄し、山居倉庫に代表される歴史的な街並みが残る港町です。庄内平野の豊かな米どころとして知られますが、子育て世帯の経済的支援にも力を注いでいます。</p><p><span class="marker-green">児童扶養手当受給世帯や住民税非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>酒田市に住民登録があり、18歳未満の児童を養育する低所得世帯の保護者が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当を受給しているひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰で家計が急変した世帯</p></div><p>児童扶養手当受給世帯は<strong>申請不要で自動支給</strong>されます。その他の世帯は酒田市役所子育て支援課に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。対象児童が複数いる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯は直近の収入証明書類の提出が求められます</span>。</p><div class="note-box">酒田市は子育て支援施設「キッズドームソライ」をはじめ、遊びと学びの場も充実しています。経済的支援と合わせて、子どもたちの豊かな成長環境を提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-birth-bonus',
    title: '酒田市 出産祝い金支給制度',
    organization: '酒田市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '山形県',
    tags: ['酒田市', '出産祝い金', '子育て支援'],
    eligibility: '酒田市に住所を有し、出産した方',
    applicationPeriod: '通年（出生届提出後）',
    description: '酒田市が実施する出産祝い金支給制度です。出生順に応じて最大20万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 出産祝い金支給制度は、<span class="marker">お子さまの誕生を祝い、出産・育児にかかる経済的負担を軽減</span>するための祝い金を支給する制度です。</p><p>酒田市は最上川の河口に開けた港町で、「おしん」のロケ地としても知られています。山居倉庫の歴史的景観や鳥海山の雄大な自然に囲まれたこの街で、新しい命の誕生を地域全体でお祝いしています。</p><p>支給額は出生順に応じて増額され、<strong>第3子以降は20万円</strong>です。<span class="marker-green">多子世帯ほど手厚い支援</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>酒田市に住民登録がある方で、出産日時点で酒田市に住所を有する方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>酒田市役所子育て支援課の窓口で申請を行います。<span class="marker">出生届提出後6か月以内に申請してください</span>。各総合支所でも受付可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子：5万円、第2子：10万円、第3子以降：20万円</strong>です。</p><p><span class="marker">出生順は同一世帯で養育している18歳未満の児童数で判定</span>されます。多胎児の場合はそれぞれ1人として数えます。</p><div class="highlight-box">酒田市では出産祝い金のほかに、妊婦健診の助成（14回）、産後ケア事業、新生児聴覚検査費助成なども実施しています。妊娠期から切れ目のない支援体制を整えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-housing-purchase',
    title: '酒田市 住宅取得支援補助金',
    organization: '酒田市',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'housing',
    prefecture: '山形県',
    tags: ['酒田市', '住宅取得', '補助金'],
    eligibility: '酒田市内に新たに住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '酒田市が実施する住宅取得支援補助金です。市内に住宅を新築または購入する方に最大80万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 住宅取得支援補助金は、<span class="marker">市内に住宅を新築または中古住宅を購入する方</span>に対し、取得費用の一部を補助する制度です。</p><p>酒田市は日本海に面した庄内地方の中心都市で、鳥海山と最上川に囲まれた豊かな自然環境が魅力です。人口減少対策として定住促進に取り組んでおり、住宅取得への手厚い補助を用意しています。</p><p>基本補助額に各種加算を合わせて<strong>最大80万円</strong>の補助が受けられます。<span class="marker-green">子育て世帯・市外からの転入者・中心市街地での取得に加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>酒田市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>酒田市役所建設部都市デザイン課に申請書を提出します。売買契約書や建築確認済証が必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。加算は以下の通りです。</p><p><span class="marker">子育て世帯加算：20万円、市外転入加算：20万円、中心市街地加算：10万円</span>。すべてに該当すれば最大80万円です。</p><div class="note-box">5年以内に市外へ転出した場合は補助金の返還が必要です。酒田市は庄内空港にも近く、東京方面へのアクセスも確保されています。鳥海山や最上川下りなどの自然アクティビティを楽しみながら暮らせる環境です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-infertility',
    title: '酒田市 不妊治療費助成事業',
    organization: '酒田市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '山形県',
    tags: ['酒田市', '不妊治療', '助成金'],
    eligibility: '酒田市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内）',
    description: '酒田市が実施する不妊治療費助成事業です。不妊治療にかかる保険適用外の費用を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減</span>するため、保険適用外の治療費の一部を助成する制度です。</p><p>酒田市は人口減少・少子化が深刻な課題であり、子どもを望む夫婦への支援を充実させています。庄内地方には高度な不妊治療を行う医療機関が限られるため、市外への通院費も含めた総合的な支援を目指しています。</p><p><span class="marker-green">保険適用外の先進医療や自費診療部分が主な助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>酒田市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の受診証明書</p><p>領収書の原本</p><p>夫婦の住民票</p></div><p>酒田市健康課（健康センター）に申請します。<span class="marker">治療終了日から6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき自己負担額の一部で、上限10万円</strong>です。</p><p><span class="marker">山形県の不妊治療費助成制度との併用が可能</span>ですが、合計が自己負担額を超えることはできません。</p><div class="note-box">酒田市では不妊治療に関する相談窓口も設けています。治療の進め方や費用面の不安について、保健師にご相談いただけます。交通費の補助制度がある場合もありますのでお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-scholarship',
    title: '酒田市 奨学金制度',
    organization: '酒田市',
    type: 'local',
    maxAmount: '月額最大5万円（貸与）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '山形県',
    tags: ['酒田市', '奨学金', '教育支援'],
    eligibility: '酒田市に住所を有する世帯の子で、大学等に進学する方',
    applicationPeriod: '毎年1月〜3月',
    description: '酒田市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大5万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 奨学金制度は、<span class="marker">経済的理由で大学・短大・専門学校等への進学や修学が困難な学生</span>に対し、奨学金を無利子で貸与する制度です。</p><p>酒田市は東北公益文科大学が立地する学園都市としての一面もあり、教育を通じた人材育成に力を入れています。港町として培われた「進取の精神」を受け継ぎ、意欲ある若者の学びを支援しています。</p><p><span class="marker-green">無利子での貸与で、Uターン就職した場合の返還免除制度もあります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募資格"><p>酒田市に住所を有する世帯の子であること</p><p>大学・短大・高専・専修学校に在学または入学予定であること</p><p>学業成績が良好で品行方正であること</p><p>経済的理由により修学が困難であること</p></div><p>酒田市教育委員会管理課に申請書と必要書類を提出します。学校の推薦書、所得証明書が必要です。</p><p><span class="marker">毎年1月〜3月に募集があり、選考は書類審査と面接により行われます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>最大5万円</strong>です。入学時の一時金貸与もあります。</p><p><span class="marker">卒業後1年間の据置期間を経て、最長10年間で返還</span>します。</p><div class="highlight-box">酒田市にUターン就職した場合は奨学金返還の一部が免除される制度があります。地元企業への就職を考えている方は、奨学金の返還負担を大幅に軽減できます。詳細は教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-sme-support',
    title: '酒田市 中小企業経営革新支援補助金',
    organization: '酒田市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '山形県',
    tags: ['酒田市', '中小企業支援', '経営革新'],
    eligibility: '酒田市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '酒田市が実施する中小企業経営革新支援補助金です。経営革新に取り組む市内中小企業に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 中小企業経営革新支援補助金は、<span class="marker">新事業展開・販路拡大・生産性向上などの経営革新に取り組む中小企業</span>に対して費用を補助する制度です。</p><p>酒田市は酒田港を拠点とした物流業、庄内平野の農産物加工業、さらに近年は洋上風力発電関連産業の集積が進んでいます。地元中小企業の競争力強化と新分野進出を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">新製品開発・IT導入・海外展開など幅広い経営革新が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>酒田市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>市税を滞納していないこと</p><p>経営革新計画を策定・提出できること</p></div><p>酒田市役所商工港湾課に申請書と経営革新計画書を提出します。</p><p><span class="marker">事業開始前に申請し、交付決定を受ける必要があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備購入費、広告費、展示会出展費、外部専門家への委託費などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。</p><div class="note-box">酒田商工会議所でも無料の経営相談や専門家派遣を行っています。洋上風力発電のサプライチェーンへの参入支援など、酒田市ならではの産業支援プログラムもありますのでご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-nursing-equipment',
    title: '酒田市 介護用品支給事業',
    organization: '酒田市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '山形県',
    tags: ['酒田市', '介護用品', '支給事業'],
    eligibility: '酒田市に住所を有し、要介護認定を受けた在宅高齢者を介護している家族',
    applicationPeriod: '通年',
    description: '酒田市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 介護用品支給事業は、<span class="marker">在宅で要介護高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>酒田市は山形県庄内地方に位置し、高齢化率が高い地域です。在宅介護を続ける家族の負担を少しでも軽くするため、日常的に使う消耗品の費用を市が支援しています。鳥海山と最上川に囲まれた豊かな自然の中で、高齢者が住み慣れた地域で暮らし続けられるよう取り組んでいます。</p><p><span class="marker-green">要介護3以上の方を在宅で介護している住民税非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給対象となる介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤・ウェットティッシュ</p></div><p>酒田市役所介護保険課に申請書と介護保険被保険者証を提出します。</p><p><span class="marker">承認後、毎月カタログから必要な介護用品を選択して受け取ることができます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>月額上限約8,000円相当で、年間最大10万円相当</strong>の介護用品です。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。退院・退所後に改めて申請できます。</p><div class="note-box">介護保険の福祉用具貸与・購入費支給とは別の制度です。併用することで在宅介護の負担をさらに軽減できます。担当のケアマネジャーにもご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-elderly-support',
    title: '酒田市 高齢者生活支援事業',
    organization: '酒田市',
    type: 'local',
    maxAmount: '配食サービス・除雪支援等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '山形県',
    tags: ['酒田市', '高齢者支援', '生活支援'],
    eligibility: '酒田市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '酒田市が実施する高齢者生活支援事業です。ひとり暮らし高齢者等に配食サービス・緊急通報装置・除雪支援を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、日常生活の支援と見守りを行う事業です。</p><p>酒田市は日本海側に位置し、冬季は強い季節風と積雪に見舞われます。特に高齢者世帯にとって冬の生活は困難を伴うため、配食サービスによる見守り、緊急通報装置の貸与、冬季の除雪支援など、きめ細かなサポートを提供しています。</p><p><span class="marker-green">介護認定の有無にかかわらず、65歳以上のひとり暮らし高齢者等が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援メニュー"><p>配食サービス（安否確認を兼ねた食事の配達）</p><p>緊急通報装置の貸与（24時間対応）</p><p>除雪支援（屋根の雪下ろし・玄関前の除雪）</p><p>外出支援サービス（通院等の送迎）</p></div><p>酒田市役所介護保険課または地域包括支援センターに相談・申請します。</p><p><span class="marker">民生委員による生活状況の確認を経て、利用が決定されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり数百円の自己負担</strong>で利用でき、差額は市が負担します。</p><p><span class="marker">緊急通報装置は無料貸与で、月々の通信費も市が負担</span>します。急病や転倒時にボタン一つで通報できます。</p><div class="highlight-box">酒田市の除雪支援は日本海側の雪国ならではの制度です。屋根の雪下ろしは高齢者にとって危険な作業であり、市が費用を助成して安全を確保しています。毎年11月頃までに申請してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakata-seismic-diagnosis',
    title: '酒田市 木造住宅耐震診断助成事業',
    organization: '酒田市',
    type: 'local',
    maxAmount: '診断費用の自己負担なし',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '山形県',
    tags: ['酒田市', '耐震診断', '防災'],
    eligibility: '酒田市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '酒田市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断を無料で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>酒田市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額助成する制度です。</p><p>酒田市は1964年の新潟地震、2019年の山形県沖地震など、日本海側の地震リスクを抱えています。特に1978年以前に建てられた古い木造住宅は耐震性能が不足している可能性が高く、まず診断を受けて現状を把握することが重要です。</p><p><span class="marker-green">市が派遣する耐震診断士による無料の診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>酒田市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>階数が2階以下であること</p><p>在来軸組工法で建築された住宅であること</p></div><p>酒田市役所建築課に申請書と建築時期がわかる書類を提出します。</p><p><span class="marker">申請後、市が委託した耐震診断士が自宅を訪問して診断を行います</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用は<strong>全額を市が負担し、自己負担はありません</strong>。</p><p><span class="marker">診断の結果、耐震性能不足と判定された場合は、耐震改修工事の補助制度</span>（別途）も利用可能です。</p><div class="note-box">酒田市では2019年の山形県沖地震を教訓に、住宅の耐震化促進に一層力を入れています。耐震改修工事には最大100万円の補助制度があります。まずは無料の耐震診断でご自宅の状態を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakata.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 会津若松市（福島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'aizu-childcare-subsidy',
    title: '会津若松市 子育て世帯生活支援給付金',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['会津若松市', '子育て支援', '給付金'],
    eligibility: '会津若松市に住所を有し、18歳未満の児童を養育する低所得世帯の保護者',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '会津若松市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 子育て世帯生活支援給付金は、<span class="marker">物価高騰の影響を受ける低所得の子育て世帯</span>に対し、生活の安定を支援する給付金を支給する制度です。</p><p>鶴ヶ城を中心とした歴史ある城下町・会津若松市は、「ならぬことはならぬ」の精神で知られる教育熱心な街です。白虎隊に代表される歴史と伝統を誇りながら、現代の子育て世帯への支援にも力を注いでいます。</p><p><span class="marker-green">児童扶養手当受給世帯や住民税非課税世帯が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>会津若松市に住民登録があり、18歳未満の児童を養育する低所得世帯の保護者が対象です。</p><div class="summary-box" data-title="対象となる世帯"><p>児童扶養手当を受給しているひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰の影響で家計が急変した世帯</p></div><p>児童扶養手当受給世帯は<strong>申請不要で自動支給</strong>されます。その他の世帯は会津若松市役所こども家庭課に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。複数の児童がいる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯は収入証明書類の提出が必要</span>です。申請が承認されると、指定口座に振り込まれます。</p><div class="note-box">他の自治体から同趣旨の給付金を受給している場合は対象外です。会津若松市では子育て応援ポータルサイトも運営しており、各種支援制度の情報をまとめて確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-birth-bonus',
    title: '会津若松市 出産祝い金支給事業',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['会津若松市', '出産祝い金', '子育て支援'],
    eligibility: '会津若松市に住所を有し、出産した方',
    applicationPeriod: '通年（出生届提出後）',
    description: '会津若松市が実施する出産祝い金支給事業です。出生順に応じて最大20万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 出産祝い金支給事業は、<span class="marker">お子さまの誕生を祝い、出産・育児にかかる経済的負担を軽減</span>するための祝い金を支給する制度です。</p><p>会津若松市は鶴ヶ城、飯盛山、東山温泉など歴史と文化の薫る城下町です。会津塗や赤べこなどの伝統工芸が息づくこの街で、次世代を担う子どもたちの誕生を地域全体でお祝いしています。少子化対策として多子世帯への手厚い支援を行っています。</p><p>支給額は出生順に応じて増額され、<strong>第3子以降は20万円</strong>です。<span class="marker-green">会津の未来を担う子どもたちの誕生を応援</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>会津若松市に住民登録がある方で、出産日時点で市内に住所を有する方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>会津若松市役所こども家庭課の窓口で申請を行います。<span class="marker">出生届提出後6か月以内に申請してください</span>。北会津支所・河東支所でも受付可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子：5万円、第2子：10万円、第3子以降：20万円</strong>です。</p><p><span class="marker">出生順は同一世帯で養育している18歳未満の児童数で判定</span>されます。</p><div class="highlight-box">会津若松市では出産祝い金に加え、赤ちゃんに会津木綿や赤べこのプレゼントを贈る事業も行っています。会津の伝統文化とともに、温かい気持ちで新しい家族を迎え入れています。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-newlywed-rent',
    title: '会津若松市 新婚世帯家賃補助事業',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '月額最大2万円（最長24か月）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '福島県',
    tags: ['会津若松市', '新婚世帯', '家賃補助'],
    eligibility: '会津若松市内に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '会津若松市が実施する新婚世帯家賃補助事業です。市内の賃貸住宅に居住する新婚世帯に月額最大2万円を最長24か月間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 新婚世帯家賃補助事業は、<span class="marker">婚姻届提出後3年以内の新婚世帯</span>が市内の賃貸住宅に居住する場合に、家賃の一部を補助する制度です。</p><p>会津若松市は歴史ある城下町としての風情を残しながら、ICT関連企業の集積やスマートシティ構想など先進的な街づくりも進めています。若い世代の定住促進のため、新婚生活のスタートを住居費の面から応援しています。</p><p>補助額は<strong>月額最大2万円で、最長24か月間</strong>です。<span class="marker-green">世帯所得が400万円未満で、いずれかが39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出後3年以内であること</p><p>夫婦ともに会津若松市内の賃貸住宅に居住していること</p><p>世帯の合計所得が400万円未満であること</p><p>夫婦いずれかが39歳以下であること</p></div><p>会津若松市役所企画調整課に申請書を提出します。婚姻届受理証明書、賃貸借契約書、所得証明書が必要です。</p><p><span class="marker">年度ごとに申請が必要で、毎月の家賃支払い確認後に補助金が交付されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>家賃から住宅手当等を差し引いた額の一部で、月額上限2万円</strong>です。24か月間で最大48万円の補助が受けられます。</p><p><span class="marker">公営住宅や社宅、親族所有の住宅は対象外</span>です。</p><div class="note-box">会津若松市は東山温泉や芦ノ牧温泉など温泉地も近く、豊かな暮らしが楽しめる街です。家賃補助制度を活用して、歴史と自然に囲まれた新生活をスタートしてみてはいかがでしょうか。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-disability-medical',
    title: '会津若松市 重度障がい者医療費助成制度',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '福島県',
    tags: ['会津若松市', '障がい者医療', '助成金'],
    eligibility: '会津若松市に住所を有する重度の障がいをお持ちの方',
    applicationPeriod: '通年',
    description: '会津若松市が実施する重度障がい者医療費助成制度です。重度の障がいがある方の保険診療自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 重度障がい者医療費助成制度は、<span class="marker">重度の身体障がい・知的障がい・精神障がいをお持ちの方</span>の医療費自己負担分を助成する制度です。</p><p>会津若松市は「ならぬことはならぬ」の精神に代表される義と思いやりの文化を持つ街です。誰もが安心して医療を受けられるよう、障がいのある方の経済的負担を軽減しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>会津若松市に住民登録がある方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい等級"><p>身体障害者手帳 1級・2級</p><p>療育手帳 A</p><p>精神障害者保健福祉手帳 1級</p><p>特別児童扶養手当 1級該当の障がい児</p></div><p>会津若松市役所障がい者支援課に障害者手帳と健康保険証を持参して申請します。<strong>「重度心身障害者医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。福島県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。会津若松市は会津中央病院や竹田綜合病院など医療機関が充実しており、安心して医療を受けられる環境が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-school-lunch',
    title: '会津若松市 学校給食費補助事業',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額補助',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '福島県',
    tags: ['会津若松市', '学校給食', '教育支援'],
    eligibility: '会津若松市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中も可）',
    description: '会津若松市が実施する学校給食費補助事業です。第3子以降の給食費を全額補助するほか、物価高騰に伴う給食費の値上げ分を市が負担します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 学校給食費補助事業は、<span class="marker">市立小中学校に在籍する児童生徒の保護者</span>に対し、学校給食費の負担を軽減する制度です。</p><p>会津若松市は「什の掟」に代表される教育文化の街であり、食育にも力を入れています。会津産のコシヒカリや地元野菜を使った給食を通じて、子どもたちに地域の食文化を伝えながら、保護者の経済的負担も軽減しています。</p><p><span class="marker-green">第3子以降の給食費は全額補助。さらに物価高騰による値上げ分も全世帯で市が負担</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の区分"><p>第3子以降の児童生徒：給食費全額補助</p><p>就学援助認定世帯：給食費全額補助</p><p>全世帯：物価高騰による給食費値上げ分を市が負担</p></div><p>第3子以降の全額補助は会津若松市教育委員会学校教育課に申請が必要です。物価高騰分の負担軽減は申請不要で全世帯に適用されます。</p><p><span class="marker">第3子のカウントは同一世帯で養育する児童生徒の数で判定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は<strong>月額約4,500円、中学校は約5,200円</strong>が目安です。第3子以降はこの全額が補助されます。</p><p><span class="marker">物価高騰対応として、食材費の値上げ分（月額数百円程度）は全世帯で市が負担</span>しています。</p><div class="highlight-box">会津若松市の学校給食では地産地消率の向上に取り組んでおり、会津産の米・野菜・果物を豊富に使用しています。「会津の郷土料理給食」として、こづゆや馬肉料理なども提供されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-telework-bonus',
    title: '会津若松市 テレワーク移住支援補助金',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '福島県',
    tags: ['会津若松市', 'テレワーク', '移住支援'],
    eligibility: '会津若松市にテレワーク目的で移住した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '会津若松市が実施するテレワーク移住支援補助金です。テレワークで市外企業に勤務しながら移住した方に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 テレワーク移住支援補助金は、<span class="marker">テレワークを活用して市外の企業に勤務しながら会津若松市に移住した方</span>の通信環境整備等を補助する制度です。</p><p>会津若松市は「スマートシティ会津若松」として、ICTを活用した先進的な街づくりを進めています。光回線の整備率も高く、テレワークに適したインフラが整っています。歴史ある城下町で働きながら暮らす新しいライフスタイルを支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">市外からの転入者でテレワーク勤務をしている方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>会津若松市外から転入後1年以内であること</p><p>テレワークにより市外の企業等に勤務していること</p><p>会津若松市に3年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>会津若松市役所企画調整課に申請書と在籍証明書等を提出します。</p><p><span class="marker">光回線工事費、Wi-Fi機器、ワーキングデスク・チェア、コワーキングスペース利用料が対象</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。</p><p><span class="marker">3年以内に市外へ転出した場合は補助金の返還が必要</span>です。</p><div class="highlight-box">会津若松市はスマートシティ構想の先進地として、ICT企業のサテライトオフィスやコワーキングスペースも充実しています。鶴ヶ城を眺めながらのリモートワークは、他にはない魅力的な働き方です。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-nursing-home-reform',
    title: '会津若松市 在宅介護住宅改修支援事業',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '福島県',
    tags: ['会津若松市', '介護', '住宅改修'],
    eligibility: '会津若松市に住所を有し、要介護認定を受けた方の住宅をバリアフリー改修する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '会津若松市が実施する在宅介護住宅改修支援事業です。要介護者のバリアフリー改修に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 在宅介護住宅改修支援事業は、<span class="marker">要介護認定を受けた方が自宅で安全に暮らせるよう、バリアフリー改修工事</span>の費用を補助する制度です。</p><p>会津若松市は豪雪地帯であり、冬季の住宅内での転倒やヒートショック防止が高齢者の安全にとって重要です。介護保険の住宅改修費だけでは不足する大規模改修を、市独自に上乗せ支援しています。</p><p>補助率は対象工事費の3分の2以内で、<strong>上限は30万円</strong>です。<span class="marker-green">介護保険の住宅改修費と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>手すりの設置（廊下・階段・浴室・トイレ）</p><p>段差の解消（スロープ設置等）</p><p>引き戸への扉の取替え</p><p>浴室・トイレの改修</p><p>床材の変更（滑りにくい素材への張替え）</p></div><p>会津若松市役所高齢福祉課に申請書と工事見積書を提出します。ケアマネジャーの意見書も必要です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから工事を開始してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の2以内で、<strong>上限30万円</strong>です。介護保険の住宅改修費（上限20万円）と合わせると最大50万円の支援となります。</p><p><span class="marker">施設入所中の方は対象外</span>ですが、退所して在宅復帰する場合は事前申請が可能です。</p><div class="note-box">会津若松市は積雪が多い地域のため、玄関の段差解消やトイレ・脱衣所の暖房設備設置など、冬季対策を含む改修も補助対象です。ケアマネジャーと相談して、最適な改修計画を立てましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-energy-support',
    title: '会津若松市 冬季エネルギー費支援事業',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '1世帯あたり最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '福島県',
    tags: ['会津若松市', 'エネルギー支援', '冬季支援'],
    eligibility: '会津若松市に住所を有する住民税非課税世帯等',
    applicationPeriod: '毎年11月〜翌年3月',
    description: '会津若松市が実施する冬季エネルギー費支援事業です。低所得世帯に暖房費の負担軽減として最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 冬季エネルギー費支援事業は、<span class="marker">冬季の暖房用エネルギー費の高騰が生活を圧迫している低所得世帯</span>に対し、費用の一部を支援する制度です。</p><p>会津若松市は日本有数の豪雪地帯に位置し、11月から4月にかけて長い冬が続きます。灯油・ガス・電気などの暖房費は生活に不可欠な支出であり、低所得世帯にとって大きな負担です。城下町の風情が残る街並みを守りながら、市民の暖かな暮らしを支えています。</p><p><span class="marker-green">住民税非課税世帯に1世帯あたり最大3万円を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>会津若松市に住民登録があり、世帯全員の住民税均等割が非課税である世帯が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>冬季エネルギー費支援金申請書</p><p>世帯主の本人確認書類</p><p>振込先口座情報</p></div><p>会津若松市役所社会福祉課または北会津・河東支所で申請を受け付けます。<span class="marker">郵送での申請も可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり3万円</strong>です。世帯人数にかかわらず一律の支給となります。</p><p><span class="marker">生活保護受給世帯は冬季加算で対応されるため対象外</span>となる場合があります。</p><div class="highlight-box">会津若松市では暖房費支援のほかに、高齢者世帯への除雪支援や灯油の共同購入あっせんなども行っています。豪雪地帯ならではの冬の生活課題に、多角的に取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aizu-bousai-equipment',
    title: '会津若松市 家庭用防災設備補助金',
    organization: '会津若松市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '福島県',
    tags: ['会津若松市', '防災設備', '補助金'],
    eligibility: '会津若松市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '会津若松市が実施する家庭用防災設備補助金です。感震ブレーカーや蓄電池等の家庭用防災設備の設置に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>会津若松市 家庭用防災設備補助金は、<span class="marker">地震・豪雪・風水害に備えた家庭用防災設備の設置</span>に対して費用の一部を補助する制度です。</p><p>会津若松市は2011年の東日本大震災で大きな揺れを経験し、また豪雪や猪苗代湖からの風水害リスクも抱えています。城下町として培われた「備えの精神」を現代に活かし、各家庭レベルでの防災力向上を推進しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカー・家庭用蓄電池・家具固定器具などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家庭用蓄電池・ポータブル電源</p><p>家具転倒防止器具の設置工事</p><p>飛散防止フィルム</p></div><p>会津若松市役所危機管理課に申請書と見積書を提出します。</p><p><span class="marker">設備の購入・設置前に申請し、交付決定を受けてから購入してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。1世帯1回限りです。</p><p><span class="marker">設置後の写真提出による完了報告が必要</span>です。</p><div class="note-box">会津若松市は冬季の停電リスクが高い地域です。家庭用蓄電池は暖房機器の非常用電源としても活用できるため、豪雪地帯ならではの防災対策として注目されています。市の防災メールへの登録もあわせてお願いしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.aizuwakamatsu.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
];
