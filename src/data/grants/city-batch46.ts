import { Grant } from '@/lib/types';

export const cityGrantsBatch46: Grant[] = [
  // ────────────────────────────────────────────────
  // 鳥取市（鳥取県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tottori-city-childcare-subsidy',
    title: '鳥取市 保育料軽減助成金',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '第2子以降 保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '鳥取県',
    tags: ['鳥取市', '保育料軽減', '助成金'],
    eligibility: '鳥取市に住所を有し、認可保育所等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '鳥取市が実施する保育料軽減助成金です。第2子以降の保育料を無料化し、多子世帯の子育て負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園・幼稚園に通う第2子以降の子どもの保育料</span>を無料化する制度です。</p><p>日本で最も人口の少ない県庁所在地である鳥取市は、鳥取砂丘や白兎海岸など豊かな自然に恵まれたコンパクトシティです。子育て環境の充実を最優先課題として掲げており、多子世帯への支援を手厚く行っています。</p><p><span class="marker-green">所得制限はなく、第2子以降であれば保育料が完全無料</span>となります。第1子の年齢制限も撤廃されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鳥取市に住民登録があり、認可保育施設を利用している世帯で、2人以上の子どもがいる保護者が対象です。</p><div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>幼稚園（新制度移行園）</p><p>小規模保育事業所</p></div><p>入所申込時に世帯の子どもの人数を届け出ることで自動適用されます。<strong>別途の申請は原則不要</strong>ですが、きょうだいが別世帯にいる場合は個別に届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。第1子については世帯の所得に応じた通常の保育料が適用されます。</p><p><span class="marker">3歳以上は国の幼児教育無償化と併用され、0〜2歳の第2子以降が本制度の主な対象</span>となります。</p><div class="note-box">認可外保育施設は本制度の対象外ですが、別途「認可外保育施設利用助成」を受けられる場合があります。副食費（おかず代）は保育料とは別に実費負担となりますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-birth-bonus',
    title: '鳥取市 出産祝い金',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '第3子以降 最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '鳥取県',
    tags: ['鳥取市', '出産祝い金', '給付金'],
    eligibility: '鳥取市に住所を有し、第3子以降の子どもが出生した世帯',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '鳥取市が実施する出産祝い金です。第3子以降の出産に対して最大10万円を支給し、多子世帯の出産を応援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 出産祝い金は、<span class="marker">第3子以降の子どもが出生した世帯</span>に対してお祝い金を支給する制度です。</p><p>鳥取市は二十世紀梨の産地として名高く、のどかな田園風景と日本海の海の幸に恵まれた地域です。少子化対策の一環として、多子世帯の経済的負担を軽減し、安心して子どもを産み育てられる環境づくりを推進しています。</p><p>支給額は<strong>第3子で5万円、第4子以降で10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鳥取市に住民登録があり、出生した子どもが第3子以降である世帯の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>出生届受理証明書または母子健康手帳の写し</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>鳥取市役所こども家庭課の窓口で申請します。<strong>出生届提出後6か月以内</strong>に手続きしてください。出生届と同時に申請できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は子どもの出生順位に応じて決まります。<strong>第3子は5万円、第4子以降は10万円</strong>が支給されます。</p><p><span class="marker">出生順位は同一世帯で養育している子どもの人数で判定</span>されます。上の子どもが独立して別世帯となっている場合はカウントされません。</p><div class="highlight-box">鳥取市では出産祝い金のほかに、妊婦健診費用の助成（14回分）や産後ケア事業（宿泊型・通所型）も充実しています。出産前から産後まで切れ目のない支援が受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-housing-purchase',
    title: '鳥取市 住宅取得支援補助金',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '鳥取県',
    tags: ['鳥取市', '住宅取得', '補助金'],
    eligibility: '鳥取市内に新たに住宅を取得する方（転入者加算あり）',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '鳥取市が実施する住宅取得支援補助金です。市内での住宅購入・新築に最大50万円を補助し、定住を促進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 住宅取得支援補助金は、<span class="marker">市内に新たに住宅を取得する方</span>に対して費用の一部を補助する制度です。</p><p>鳥取砂丘に代表される雄大な自然と、都市機能がコンパクトにまとまった暮らしやすさが鳥取市の魅力です。人口減少対策として、市外からの転入者や若年世帯の住宅取得を積極的に支援しています。</p><p>基本補助額は<strong>30万円</strong>で、市外からの転入者は<strong>最大50万円</strong>まで加算されます。<span class="marker-green">中古住宅の取得も補助対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>鳥取市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p><p>申請者または配偶者が40歳以下の場合は加算あり</p></div><p>鳥取市役所都市整備部建築住宅課に申請書と売買契約書（または建築請負契約書）の写しを提出します。</p><p><span class="marker">住宅の引渡しを受けてから6か月以内に申請</span>が必要です。引渡し前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。以下の加算要件に該当する場合は上乗せされます。</p><p><span class="marker">市外からの転入：+10万円、40歳以下の若年世帯：+10万円</span>で最大50万円となります。</p><div class="note-box">投資目的やセカンドハウスとしての住宅取得は対象外です。5年以内に転出した場合は補助金の返還が求められる場合があります。住宅ローン減税など国の制度との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-infertility',
    title: '鳥取市 不妊治療費助成事業',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '最大10万円（1回あたり）',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '鳥取県',
    tags: ['鳥取市', '不妊治療', '助成金'],
    eligibility: '鳥取市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から60日以内）',
    description: '鳥取市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる医療費の自己負担分</span>を軽減するための助成制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、それでも治療回数が重なると経済的負担は大きくなります。鳥取市では県の助成制度に上乗せする形で独自の助成を行い、子どもを望む夫婦を応援しています。</p><p><span class="marker-green">保険適用の体外受精・顕微授精だけでなく、人工授精も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鳥取市に住民登録がある法律上の夫婦（事実婚を含む）で、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書・明細書の写し</p><p>夫婦の住民票（発行3か月以内）</p></div><p>鳥取市役所健康こども部の窓口で申請します。<strong>治療が終了した日から60日以内</strong>に手続きしてください。郵送での申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分に対し、<strong>1回の治療につき最大10万円</strong>です。年間の回数制限は設けていません。</p><p><span class="marker">鳥取県の不妊治療費助成制度との併用が可能</span>で、県の助成を受けた上でさらに市の助成を申請できます。</p><div class="highlight-box">鳥取市では不妊・不育症の専門相談窓口も設置しています。治療に関する悩みや情報収集は、まず相談窓口を活用しましょう。男性不妊治療も助成の対象に含まれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-scholarship',
    title: '鳥取市 奨学金返還支援補助金',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '最大100万円（総額）',
    maxAmountNum: 100,
    category: 'education',
    prefecture: '鳥取県',
    tags: ['鳥取市', '奨学金返還', '補助金'],
    eligibility: '鳥取市に居住し就業している奨学金返還中の若者',
    applicationPeriod: '毎年4月〜5月',
    description: '鳥取市が実施する奨学金返還支援補助金です。市内に定住し働く若者の奨学金返還を最大100万円支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 奨学金返還支援補助金は、<span class="marker">鳥取市内に居住し就業している若者の奨学金返還</span>を支援する制度です。</p><p>鳥取市は若者の地元定着と人口流出の防止を重要課題としています。大学等で借りた奨学金の返還負担を軽減することで、鳥取市での就職・定住を促進しています。鳥取大学や鳥取環境大学の卒業生をはじめ、Uターン・Iターン就職者も対象となります。</p><p>年間最大<strong>18万円</strong>、通算で<strong>最大100万円</strong>が助成されます。<span class="marker-green">正規雇用・非正規雇用を問わず申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>鳥取市内に住民登録があること</p><p>鳥取市内の事業所に就業していること</p><p>日本学生支援機構等の奨学金を返還中であること</p><p>申請年度の4月1日時点で35歳未満であること</p></div><p>鳥取市役所企画推進部に申請書と奨学金の返還証明書を提出します。毎年度の申請が必要です。</p><p><span class="marker">申請期間は毎年4月〜5月頃</span>で、前年度中に返還した金額が助成の対象となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>前年度中に返還した奨学金の額に対し、<strong>年間最大18万円</strong>が助成されます。通算で<strong>最大100万円</strong>まで受給可能です。</p><p><span class="marker">助成期間中に鳥取市外へ転出した場合は、翌年度以降の助成が受けられなくなります</span>。ただし既に受給した分の返還は不要です。</p><div class="note-box">鳥取県の奨学金返還支援制度と市の制度を併用できる場合があります。重複受給の可否は事前に確認してください。公務員は本制度の対象外となることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-sme-support',
    title: '鳥取市 中小企業振興補助金',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '鳥取県',
    tags: ['鳥取市', '中小企業支援', '補助金'],
    eligibility: '鳥取市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '鳥取市が実施する中小企業振興補助金です。設備投資や販路拡大にかかる費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 中小企業振興補助金は、<span class="marker">市内の中小企業が行う設備投資や販路開拓</span>にかかる経費を補助する制度です。</p><p>鳥取市は食品加工業やICT関連産業を中心に、地場産業の振興に力を入れています。二十世紀梨やらっきょうなどの特産品を扱う事業者のブランド化・販路拡大も支援対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">新製品開発、展示会出展、ECサイト構築なども対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>生産設備の導入費</p><p>展示会・商談会への出展費</p><p>ECサイト構築・改修費</p><p>新商品のパッケージデザイン費</p></div><p>鳥取市役所経済観光部商工政策課に事業計画書と申請書を提出します。審査により交付が決定されます。</p><p><span class="marker">交付決定前に着手した事業は補助対象外</span>です。必ず事前申請を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備投資の場合は対象経費が50万円以上の案件に限られます。</p><p><span class="marker">事業完了後に実績報告書と経費の支出を証明する書類を提出</span>する必要があります。補助金は精算払いとなります。</p><div class="highlight-box">鳥取市商工会議所や鳥取県産業振興機構と連携した経営相談も無料で利用できます。補助金申請の前に専門家のアドバイスを受けると、事業計画の精度が向上します。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-nursing-equipment',
    title: '鳥取市 介護用品支給事業',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '鳥取県',
    tags: ['鳥取市', '介護用品', '支給'],
    eligibility: '鳥取市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '鳥取市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対して、紙おむつ等の介護用品を支給する制度です。</p><p>鳥取市は高齢化率が全国平均を上回る地域であり、在宅介護の負担軽減が重要な課題となっています。介護用品の経済的負担を和らげることで、在宅介護の継続を支援しています。</p><p>月額<strong>最大6,250円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯の要介護4・5の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鳥取市に住民登録があり、以下のすべてに該当する方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けていること</p><p>在宅で生活していること（施設入所者は対象外）</p><p>市民税非課税世帯であること</p><p>介護用品（紙おむつ等）を必要としていること</p></div><p>鳥取市役所長寿社会課の窓口で申請します。<strong>介護保険被保険者証</strong>と本人確認書類を持参してください。ケアマネジャーを通じた申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大6,250円相当</strong>の介護用品（紙おむつ・尿取りパッド・使い捨て手袋等）が現物支給またはカタログ方式で提供されます。</p><p><span class="marker">入院中や施設入所中は支給対象外</span>となります。退院・退所後に改めて申請が必要です。</p><div class="note-box">医療保険の「おむつ代の医療費控除」と併用する場合は、本制度で支給された分を除いた金額が控除対象となります。介護保険の福祉用具貸与サービスとは別の制度ですので、併せてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-elderly-support',
    title: '鳥取市 高齢者見守り支援事業',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '鳥取県',
    tags: ['鳥取市', '高齢者見守り', '支援'],
    eligibility: '鳥取市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '鳥取市が実施する高齢者見守り支援事業です。ひとり暮らし高齢者等に緊急通報装置を無料貸与し、安全な在宅生活を支えます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみ世帯</span>に緊急通報装置を無料貸与する制度です。</p><p>鳥取市は中山間地域を多く抱え、高齢者の孤立防止と緊急時の対応が重要な課題です。ボタンひとつで消防や協力者に通報できる装置を貸与することで、ひとり暮らしでも安心して暮らせる環境を整備しています。</p><p><span class="marker-green">装置の設置費・月額利用料ともに原則無料</span>で利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鳥取市に住民登録がある65歳以上の方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象者"><p>ひとり暮らしの高齢者</p><p>高齢者のみの世帯</p><p>日中にひとりになる高齢者</p><p>身体上の不安がある高齢者</p></div><p>鳥取市役所長寿社会課の窓口で申請します。民生委員や地域包括支援センターを通じた申請もできます。設置は<strong>申請から約2週間程度</strong>で完了します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与・設置費用は無料</strong>です。固定電話回線がない場合は携帯電話回線型の装置が貸与されます。</p><p><span class="marker">緊急時にはボタンを押すだけで消防署につながり、同時に近隣の協力員にも連絡</span>が入る仕組みです。</p><div class="highlight-box">鳥取市ではこのほかに、配食サービス（安否確認付き）やふれあい訪問サービスも実施しています。複数の見守りサービスを組み合わせることで、より安心な在宅生活が実現できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-seismic-diagnosis',
    title: '鳥取市 木造住宅耐震診断助成事業',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '診断費用の自己負担 3,000円のみ',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '鳥取県',
    tags: ['鳥取市', '耐震診断', '助成'],
    eligibility: '鳥取市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃',
    description: '鳥取市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を大幅に助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前に着工された木造住宅の耐震診断</span>に対して費用を助成する制度です。</p><p>鳥取市は2000年の鳥取県西部地震を経験しており、住宅の耐震化に対する意識が高い地域です。専門の耐震診断士が自宅を訪問し、建物の安全性を評価します。</p><p>診断費用のうち市が大部分を負担し、<strong>自己負担はわずか3,000円</strong>です。<span class="marker-green">戸建ての木造住宅であれば所得制限なく利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>鳥取市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されていること</p><p>2階建て以下の戸建住宅であること</p><p>過去にこの制度を利用していないこと</p></div><p>鳥取市役所都市整備部建築指導課に申請書を提出します。申請後、市が委託する耐震診断士が訪問日程を調整します。</p><p><span class="marker">診断は約2〜3時間の現地調査</span>で完了し、後日診断結果が報告されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用（通常10万円前後）のうち、<strong>自己負担はわずか3,000円</strong>です。残りは市が負担します。</p><p><span class="marker">診断の結果、耐震性が不足と判定された場合は、耐震改修補助金（最大100万円）の申請</span>も検討できます。</p><div class="note-box">耐震診断は建物の現状を評価するもので、改修工事の義務は発生しません。ただし結果を踏まえて早めの対策を検討することをおすすめします。鉄骨造やRC造の住宅は別制度の対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 松江市（島根県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'matsue-childcare-subsidy',
    title: '松江市 保育料軽減事業',
    organization: '松江市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '島根県',
    tags: ['松江市', '保育料軽減', '助成金'],
    eligibility: '松江市に住所を有し、認可保育施設に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '松江市が実施する保育料軽減事業です。多子世帯の保育料負担を軽減し、第3子以降は完全無料です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 保育料軽減事業は、<span class="marker">認可保育所・認定こども園を利用する世帯の保育料</span>を軽減する制度です。</p><p>宍道湖のほとりに佇む水の都・松江市は、国宝松江城や玉造温泉で知られる歴史と文化の街です。子育て世帯の定住促進を目指し、保育料の独自軽減措置を設けています。</p><p><strong>第2子は半額、第3子以降は保育料無料</strong>です。<span class="marker-green">きょうだいの年齢制限を撤廃しており、上の子が小学生以上でもカウントされます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松江市に住民登録があり、認可保育施設を利用している世帯が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料半額</p><p>第3子以降：保育料無料</p></div><p>保育施設の入所申込時に世帯のきょうだい情報を届け出ることで自動適用されます。<strong>原則として別途の申請は不要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は通常保育料の半額、第3子以降は無料</strong>となります。3〜5歳児は国の幼児教育無償化により保育料が無料ですので、本制度は主に0〜2歳児が対象です。</p><p><span class="marker">住民税非課税世帯はそもそも保育料が無料</span>ですので、本制度と重複適用にはなりません。</p><div class="note-box">認可外保育施設や企業主導型保育は本制度の直接的な対象外ですが、別途「認可外保育施設利用料補助」を設けている場合があります。詳しくは松江市の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-birth-bonus',
    title: '松江市 出産・子育て応援給付金',
    organization: '松江市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '島根県',
    tags: ['松江市', '出産応援', '給付金'],
    eligibility: '松江市に住所を有する妊婦および出産後の保護者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '松江市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出生届出後に5万円（子育て応援給付金）</span>を支給する制度です。</p><p>松江市は小泉八雲（ラフカディオ・ハーン）ゆかりの地であり、落ち着いた城下町の風情と充実した子育て環境を両立させています。国の「出産・子育て応援交付金」事業を活用し、伴走型相談支援とあわせて経済的支援を行っています。</p><p><span class="marker-green">所得制限なし、第1子から対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松江市に住民登録がある妊婦および出産後の保護者が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>②出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p>妊娠届出時および出生届出後に、<strong>松江市の保健師等との面談を受けることが条件</strong>です。面談後に申請書が交付され、振込先口座を届け出ます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円</strong>が2回に分けて支給されます。出産応援給付金（5万円）は妊娠届出後、子育て応援給付金（5万円）は出生届出後にそれぞれ振込まれます。</p><p><span class="marker">他の自治体で出産応援給付金を受給済みの場合は、松江市では子育て応援給付金のみの支給</span>となります。</p><div class="highlight-box">給付金に加えて、保健師・助産師による伴走型相談支援（妊娠届出時・妊娠8か月頃・出生届出後の計3回）も受けられます。子育ての不安や悩みを気軽に相談できる機会です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-newlywed-rent',
    title: '松江市 結婚新生活支援補助金',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '島根県',
    tags: ['松江市', '新婚家賃', '補助金'],
    eligibility: '松江市に住所を有する新婚世帯（婚姻届提出から1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '松江市が実施する結婚新生活支援補助金です。新婚世帯の住居費や引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 結婚新生活支援補助金は、<span class="marker">新婚世帯の住居費（家賃・住宅取得費）や引越費用</span>を補助する制度です。</p><p>水の都として知られる松江市は、宍道湖の夕日や堀川遊覧船など、ロマンチックな雰囲気が漂う城下町です。若い世代の結婚を後押しするため、新生活のスタートにかかる経済的負担を軽減しています。</p><p>補助上限は<strong>夫婦ともに29歳以下で60万円、39歳以下で30万円</strong>です。<span class="marker-green">世帯所得500万円未満の新婚世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届を提出してから1年以内であること</p><p>松江市に住民登録があること</p><p>夫婦の合計所得が500万円未満であること</p><p>夫婦ともに婚姻日時点で39歳以下であること</p></div><p>松江市役所市民生活相談課に申請書と婚姻届受理証明書、住居にかかる契約書等を提出します。</p><p><span class="marker">婚姻届提出日以降に発生した費用が対象</span>です。婚姻届提出前の費用は補助対象外となりますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下の場合は<strong>上限60万円</strong>、30〜39歳の場合は<strong>上限30万円</strong>です。住居費（家賃・敷金・礼金・住宅ローン）と引越費用の合計が対象です。</p><p><span class="marker">勤務先からの住宅手当がある場合は、その分を差し引いた額が補助対象</span>となります。</p><div class="note-box">公営住宅への入居は対象外です。同一年度内の申請に限り、1世帯1回のみ利用可能です。過去にこの制度を利用したことがある方は再度の申請はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-disability-medical',
    title: '松江市 重度障がい者医療費助成制度',
    organization: '松江市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '島根県',
    tags: ['松江市', '障がい者医療', '助成金'],
    eligibility: '松江市に住所を有する重度障がい者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '松江市が実施する重度障がい者医療費助成制度です。重度の障がいをお持ちの方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 重度障がい者医療費助成制度は、<span class="marker">重度の障がいをお持ちの方の保険診療における自己負担分</span>を助成する制度です。</p><p>松江市はバリアフリーのまちづくりにも積極的に取り組んでおり、障がいのある方が安心して医療を受けられる環境の整備を進めています。通院・入院・調剤のすべてが対象です。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松江市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A（重度）</p><p>精神障害者保健福祉手帳1級</p><p>特別児童扶養手当1級該当の障がい児</p></div><p>松江市役所障がい者福祉課の窓口で申請します。<strong>障害者手帳と健康保険証</strong>を持参してください。申請後「福祉医療費受給資格証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。島根県内の医療機関では受給資格証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">入院時の食事療養費の自己負担分は助成対象外です。65歳以上の方は後期高齢者医療制度との調整が行われる場合があります。所得制限が設けられている場合がありますので、詳しくは松江市の窓口にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-school-lunch',
    title: '松江市 学校給食費助成制度',
    organization: '松江市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '島根県',
    tags: ['松江市', '学校給食', '助成金'],
    eligibility: '松江市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中転入も可）',
    description: '松江市が実施する学校給食費助成制度です。第3子以降の児童生徒の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 学校給食費助成制度は、<span class="marker">松江市立小中学校に在籍する第3子以降の児童生徒の学校給食費</span>を全額免除する制度です。</p><p>松江市は地産地消にこだわった学校給食を提供しており、宍道湖産のしじみや島根和牛など地元食材を積極的に取り入れています。多子世帯の教育費負担を軽減し、すべての子どもが栄養バランスのとれた食事を楽しめるようにしています。</p><p><span class="marker-green">所得制限なし、第3子以降であれば給食費が全額無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松江市立小中学校に通う児童生徒の保護者で、その子どもが第3子以降に該当する世帯が対象です。</p><div class="summary-box" data-title="子どもの数え方"><p>同一世帯で扶養している18歳以下の子どもを上から数える</p><p>第3子以降の小中学生が給食費免除の対象</p><p>高校生のきょうだいもカウントに含む</p></div><p>年度初めに学校を通じて申請書が配布されます。<strong>必要事項を記入して学校に提出</strong>してください。年度途中の転入者も随時申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の<strong>学校給食費が全額免除</strong>されます。小学校で年間約5万円、中学校で年間約6万円程度の負担軽減となります。</p><p><span class="marker">就学援助制度を受給している場合は、就学援助で給食費がカバーされるため本制度との重複適用はありません</span>。</p><div class="highlight-box">松江市は食育にも力を入れており、給食を通じた味覚教育や農業体験学習なども実施しています。学校給食は子どもの成長を支える大切な食の機会です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-telework-bonus',
    title: '松江市 テレワーク移住支援補助金',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '島根県',
    tags: ['松江市', 'テレワーク', '移住支援'],
    eligibility: '松江市に移住しテレワークで勤務を継続する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '松江市が実施するテレワーク移住支援補助金です。市外からテレワーク移住する方に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 テレワーク移住支援補助金は、<span class="marker">市外から松江市に移住し、テレワークで現在の勤務先での業務を継続する方</span>を対象に補助金を支給する制度です。</p><p>国宝松江城と宍道湖に囲まれた松江市は、IT産業のRuby City Matsueプロジェクトでも知られ、テレワーク環境の整備が進んでいます。都市部から地方への移住をテレワークという働き方で実現する方を応援しています。</p><p>補助額は<strong>最大30万円</strong>です。<span class="marker-green">引越費用、通信環境整備費、コワーキングスペース利用料が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>松江市外から松江市に転入すること</p><p>テレワークで現在の勤務先の業務を継続すること</p><p>松江市に1年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>松江市役所産業経済部に申請書と勤務先のテレワーク勤務証明書を提出します。</p><p><span class="marker">転入後3か月以内に申請が必要</span>です。転入前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の合計で<strong>最大30万円</strong>です。引越費用、通信環境整備費（Wi-Fi設置等）、コワーキングスペース年間利用料などが含まれます。</p><p><span class="marker">1年以内に松江市から転出した場合は補助金の返還</span>が求められます。</p><div class="note-box">松江市内にはRuby City MATSUEの取り組みの一環として、テレワーク対応のコワーキングスペースが複数整備されています。フリーランスの方は別途「フリーランス移住支援」も確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-nursing-home-reform',
    title: '松江市 高齢者住宅改修支援事業',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '島根県',
    tags: ['松江市', '介護リフォーム', '補助金'],
    eligibility: '松江市に住所を有する要介護・要支援認定を受けた高齢者の世帯',
    applicationPeriod: '通年',
    description: '松江市が実施する高齢者住宅改修支援事業です。介護保険の住宅改修費に上乗せし、最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 高齢者住宅改修支援事業は、<span class="marker">介護保険の住宅改修費（上限20万円）では賄いきれない改修費用</span>に対して、市が独自に上乗せ補助を行う制度です。</p><p>松江市は古い町並みや和風建築が残る歴史的な都市であり、段差の多い住宅で暮らす高齢者も少なくありません。バリアフリー改修を支援することで、住み慣れた自宅での安全な生活継続を後押しします。</p><p><strong>最大30万円</strong>が補助されます。<span class="marker-green">介護保険の住宅改修費との併用が前提</span>の制度です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松江市に住民登録があり、要介護または要支援の認定を受けている方の世帯が対象です。</p><div class="summary-box" data-title="対象工事の例"><p>手すりの設置（階段・浴室・トイレ等）</p><p>段差の解消（スロープ設置等）</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取り替え</p><p>洋式トイレへの変更</p></div><p>まず担当のケアマネジャーに相談し、<strong>松江市役所介護保険課</strong>に申請書を提出します。介護保険の住宅改修と一括で手続きできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>介護保険の住宅改修費（上限20万円、自己負担1〜3割）を利用した上で、さらに<strong>市独自の補助として最大30万円</strong>が加算されます。</p><p><span class="marker">工事着手前の申請が必須</span>です。着工後の申請は受け付けられません。</p><div class="note-box">介護保険の住宅改修を利用していない場合は本制度も利用できません。新築・増築工事は対象外です。住宅改修の計画はケアマネジャーや市の相談員と十分に打ち合わせてから進めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-energy-support',
    title: '松江市 省エネ家電買替補助金',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '島根県',
    tags: ['松江市', '省エネ家電', '補助金'],
    eligibility: '松江市に住所を有する世帯で、省エネ性能の高い家電に買い替える方',
    applicationPeriod: '毎年度（予算に達し次第終了）',
    description: '松江市が実施する省エネ家電買替補助金です。エアコンや冷蔵庫などを省エネ家電に買い替える際に最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 省エネ家電買替補助金は、<span class="marker">省エネ性能の高いエアコン・冷蔵庫などへの買替え</span>に対して費用の一部を補助する制度です。</p><p>宍道湖のほとりに広がる松江市は、豊かな水環境を次世代に引き継ぐため環境保全にも注力しています。省エネ家電への買替えは、家庭の電気代削減とCO2排出削減の両方に効果があります。</p><p>補助額は購入金額に応じて<strong>最大3万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電と補助額"><p>エアコン（統一省エネラベル3つ星以上）：最大2万円</p><p>冷蔵庫（統一省エネラベル3つ星以上）：最大2万円</p><p>LED照明器具への交換：最大1万円</p><p>1世帯あたりの上限：3万円</p></div><p>松江市役所環境保全部に申請書と購入時のレシート・保証書の写しを提出します。</p><p><span class="marker">購入後3か月以内に申請</span>が必要です。市内の販売店で購入した製品が優先対象となる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1世帯あたり<strong>最大3万円</strong>の補助です。複数台購入しても上限は変わりません。</p><p><span class="marker">毎年度予算に限りがあり、先着順で受付終了</span>となります。年度初めの購入・申請がおすすめです。</p><div class="highlight-box">古い家電を新しい省エネ家電に替えるだけで、年間の電気代が1〜2万円程度削減される場合があります。環境にも家計にも優しい選択として、ぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-bousai-equipment',
    title: '松江市 家庭用防災設備購入補助金',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '島根県',
    tags: ['松江市', '防災設備', '補助金'],
    eligibility: '松江市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '松江市が実施する家庭用防災設備購入補助金です。感震ブレーカーや家具固定器具などの防災設備購入を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 家庭用防災設備購入補助金は、<span class="marker">地震や火災に備えた家庭用防災設備の購入費用</span>を補助する制度です。</p><p>松江市は宍道湖沿岸に位置し、地震や水害への備えが重要です。2000年の鳥取県西部地震でも揺れを経験しており、各家庭での防災対策を促進するために補助制度を設けています。</p><p>補助率は購入費の2分の1で、<strong>上限5万円</strong>です。<span class="marker-green">感震ブレーカー、家具固定器具、蓄電池などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>感震ブレーカー（地震時に自動で電源を遮断）</p><p>家具転倒防止器具</p><p>ガラス飛散防止フィルム</p><p>家庭用蓄電池（防災用途）</p><p>住宅用火災警報器（設置義務を超える追加分）</p></div><p>松江市役所防災安全部に申請書と購入品のレシート・カタログ等を提出します。</p><p><span class="marker">購入後2か月以内に申請が必要</span>です。高額な蓄電池は事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1で、<strong>上限5万円</strong>です。1世帯につき年度内1回の利用に限られます。</p><p><span class="marker">業務用や事業所用の設備は対象外</span>で、自宅で使用する防災用品のみが対象です。</p><div class="note-box">松江市では防災設備の補助に加え、地域防災訓練や自主防災組織への支援も行っています。設備を揃えるだけでなく、日頃からの防災意識の向上と訓練への参加が大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 山口市（山口県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'yamaguchi-city-childcare-subsidy',
    title: '山口市 保育料軽減助成金',
    organization: '山口市',
    type: 'local',
    maxAmount: '第2子以降 保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['山口市', '保育料軽減', '助成金'],
    eligibility: '山口市に住所を有し、認可保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年',
    description: '山口市が実施する保育料軽減助成金です。第2子以降の保育料を無料化し、多子世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園に通う第2子以降の子どもの保育料</span>を無料化する制度です。</p><p>「西の京」と称される山口市は、瑠璃光寺五重塔や湯田温泉など歴史的な魅力にあふれた県庁所在地です。子育て世帯が安心して暮らせるまちづくりを推進しており、保育料の大幅な軽減措置を実施しています。</p><p><span class="marker-green">所得制限なし、第2子以降の保育料が完全無料</span>です。きょうだいの年齢制限も設けていません。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山口市に住民登録があり、認可保育施設を利用している世帯が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>幼稚園（新制度移行園）</p><p>小規模保育事業所・家庭的保育事業所</p></div><p>入所申込時にきょうだいの情報を届け出ることで自動的に軽減が適用されます。<strong>原則として個別の申請手続きは不要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額無料</strong>となります。3〜5歳児は国の幼児教育無償化と併用されるため、本制度の主な対象は0〜2歳児です。</p><p><span class="marker">副食費（おかず代）は保育料とは別に実費負担</span>となります。年収360万円未満相当の世帯は副食費も免除される場合があります。</p><div class="note-box">認可外保育施設の利用者には別途「認可外保育施設利用者助成金」制度があります。山口市こども未来部にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-birth-bonus',
    title: '山口市 出産祝い金',
    organization: '山口市',
    type: 'local',
    maxAmount: '第3子以降 最大20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['山口市', '出産祝い金', '給付金'],
    eligibility: '山口市に住所を有し、第3子以降の子どもが出生した世帯',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '山口市が実施する出産祝い金です。第3子以降の出産に対して最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 出産祝い金は、<span class="marker">第3子以降の子どもが出生した世帯</span>に対して祝い金を支給する制度です。</p><p>山口市は大内文化の歴史が色濃く残る街で、子育て環境の充実にも注力しています。湯田温泉エリアでは子育て世帯向けのイベントも多く開催され、コミュニティの温かさが特徴的な地域です。</p><p>支給額は<strong>第3子で10万円、第4子以降で20万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山口市に住民登録があり、出生した子どもが第3子以降である世帯の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>山口市役所こども未来部の窓口で申請します。<strong>出生届提出後6か月以内</strong>に手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第3子で10万円、第4子以降で20万円</strong>です。現金振込で支給されます。</p><p><span class="marker">出生順位は同一世帯で養育している子どもの人数で判定</span>されます。別世帯に独立した子は含まれません。</p><div class="highlight-box">山口市では出産祝い金のほかに、「出産・子育て応援給付金」（妊娠届出時5万円＋出生届出後5万円）も別途支給しています。複数の制度を合わせると、出産時の経済的支援が手厚く受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-housing-purchase',
    title: '山口市 定住促進住宅取得補助金',
    organization: '山口市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '山口県',
    tags: ['山口市', '住宅取得', '補助金'],
    eligibility: '山口市内に新たに住宅を取得し定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '山口市が実施する定住促進住宅取得補助金です。市内での住宅取得に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 定住促進住宅取得補助金は、<span class="marker">山口市内に新たに住宅を取得し定住する方</span>に費用の一部を補助する制度です。</p><p>山口市は県庁所在地でありながら豊かな自然と歴史的景観を兼ね備えた暮らしやすい街です。新幹線が停車する新山口駅からのアクセスも良好で、UターンやIターンの移住先として注目されています。</p><p>基本補助額は<strong>20万円</strong>で、条件に応じて<strong>最大40万円</strong>まで加算されます。<span class="marker-green">中古住宅の取得も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>山口市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p><p>過去にこの制度を利用していないこと</p></div><p>山口市役所都市整備部住宅政策課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅の引渡しを受けた日から6か月以内に申請</span>が必要です。事前相談も歓迎しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>です。市外からの転入者は+10万円、子育て世帯は+10万円が加算され、<strong>最大40万円</strong>となります。</p><p><span class="marker">5年以内に転出した場合は補助金の返還</span>が必要です。投資用物件やセカンドハウスは対象外です。</p><div class="note-box">山口市では住宅取得補助のほかに、空き家バンク物件の購入者向けの改修補助金も別途用意されています。中古住宅の購入を検討する場合は、空き家バンクも合わせてチェックしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-infertility',
    title: '山口市 不妊治療費助成事業',
    organization: '山口市',
    type: 'local',
    maxAmount: '最大5万円（1回あたり）',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '山口県',
    tags: ['山口市', '不妊治療', '助成金'],
    eligibility: '山口市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から90日以内）',
    description: '山口市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して最大5万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を軽減する助成制度です。</p><p>山口市は子どもを望むすべての夫婦を応援するため、県の不妊治療費助成に上乗せする形で独自の助成を実施しています。山口大学医学部附属病院をはじめ、県内の不妊治療専門医療機関との連携も充実しています。</p><p><span class="marker-green">体外受精・顕微授精だけでなく、人工授精やタイミング法も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山口市に住民登録がある法律上の夫婦（事実婚を含む）で、医療機関で不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>山口市役所健康福祉部健康増進課の窓口で申請します。<strong>治療終了日から90日以内</strong>に手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分に対し、<strong>1回の治療につき最大5万円</strong>です。年間の回数制限はありません。</p><p><span class="marker">山口県の助成制度と併用が可能</span>で、県の助成を受けた上でさらに市の助成を申請できます。</p><div class="highlight-box">山口市では不妊・不育症に関する相談窓口を設けています。治療に関する悩みだけでなく、仕事との両立や精神的なサポートについても気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-scholarship',
    title: '山口市 奨学金返還支援補助金',
    organization: '山口市',
    type: 'local',
    maxAmount: '最大72万円（総額）',
    maxAmountNum: 72,
    category: 'education',
    prefecture: '山口県',
    tags: ['山口市', '奨学金返還', '補助金'],
    eligibility: '山口市に居住し就業している奨学金返還中の若者',
    applicationPeriod: '毎年4月〜6月',
    description: '山口市が実施する奨学金返還支援補助金です。市内に定住し働く若者の奨学金返還を最大72万円支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 奨学金返還支援補助金は、<span class="marker">山口市内に居住・就業する若者の奨学金返還</span>を支援する制度です。</p><p>山口大学をはじめとする教育機関が集まる山口市は、卒業後の地元定着を重要課題としています。奨学金返還の負担軽減を通じて、若者の市内就職・定住を促進しています。</p><p>年間最大<strong>12万円</strong>、通算<strong>最大6年間で72万円</strong>が助成されます。<span class="marker-green">正規・非正規雇用を問わず対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>山口市内に住民登録があること</p><p>山口市内の事業所に就業していること</p><p>日本学生支援機構等の奨学金を返還中であること</p><p>申請年度の4月1日時点で35歳未満であること</p></div><p>山口市役所企画経営課に申請書と奨学金返還証明書を提出します。</p><p><span class="marker">毎年度の申請が必要</span>で、前年度中に返還した奨学金額が助成の対象となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>前年度中に返還した奨学金の額に対し、<strong>年間最大12万円</strong>が助成されます。最長6年間で通算<strong>72万円</strong>が上限です。</p><p><span class="marker">助成期間中に山口市外へ転出した場合は翌年度以降の助成が受けられません</span>。すでに受給した分の返還は不要です。</p><div class="note-box">山口県の奨学金返還支援制度との併用が可能な場合があります。重複受給の可否は事前にご確認ください。公務員は対象外となることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-sme-support',
    title: '山口市 中小企業経営革新補助金',
    organization: '山口市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '山口県',
    tags: ['山口市', '中小企業支援', '補助金'],
    eligibility: '山口市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '山口市が実施する中小企業経営革新補助金です。DX推進や新事業展開にかかる費用を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 中小企業経営革新補助金は、<span class="marker">市内の中小企業がDX推進や新事業展開に取り組む際の費用</span>を補助する制度です。</p><p>山口市は県庁所在地として行政・商業の中心地であり、中小企業の経営革新を積極的に支援しています。デジタル技術の導入による生産性向上や、新分野への事業展開を後押しします。</p><p>補助率は対象経費の3分の2以内で、<strong>上限100万円</strong>です。<span class="marker-green">IT導入、ECサイト構築、業務効率化システムの導入などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>業務管理システムの導入費</p><p>ECサイト構築・運用費</p><p>IoT・AI活用のための設備費</p><p>新商品開発に伴う試作費</p></div><p>山口市役所経済産業部商工振興課に事業計画書と申請書を提出します。外部審査員による審査が行われます。</p><p><span class="marker">交付決定前に着手した事業は補助対象外</span>です。必ず事前に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限100万円</strong>です。ただし対象経費が30万円以上の事業に限られます。</p><p><span class="marker">事業完了後の実績報告と経費証拠書類の提出が必要</span>で、精算払いとなります。</p><div class="highlight-box">山口市産業交流財団や山口県よろず支援拠点で無料の経営相談が受けられます。補助金の申請書作成支援も行っていますので、事前に活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-nursing-equipment',
    title: '山口市 在宅介護用品支給事業',
    organization: '山口市',
    type: 'local',
    maxAmount: '月額最大6,500円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '山口県',
    tags: ['山口市', '介護用品', '支給'],
    eligibility: '山口市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '山口市が実施する在宅介護用品支給事業です。紙おむつ等の介護用品を月額最大6,500円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 在宅介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対して、紙おむつ等の介護用品を支給する制度です。</p><p>山口市では住み慣れた地域での在宅生活を支えるため、介護する家族の経済的・身体的負担の軽減に取り組んでいます。湯田温泉地区をはじめとする地域コミュニティとの連携も図りながら、包括的な介護支援を展開しています。</p><p>月額<strong>最大6,500円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山口市に住民登録があり、以下のすべてに該当する方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けていること</p><p>在宅で生活していること</p><p>市民税非課税世帯であること</p><p>紙おむつ等の介護用品を使用していること</p></div><p>山口市役所介護保険課の窓口で申請します。<strong>介護保険被保険者証と本人確認書類</strong>が必要です。ケアマネジャーを通じた申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大6,500円相当</strong>の介護用品が現物支給されます。紙おむつ、尿取りパッド、清拭剤などから選択できます。</p><p><span class="marker">入院中や施設入所中は支給対象外</span>です。退院後に改めて申請してください。</p><div class="note-box">介護保険の福祉用具貸与・購入サービスとは別の制度です。組み合わせて利用することで、在宅介護の負担をより効果的に軽減できます。山口市の地域包括支援センターでも相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-elderly-support',
    title: '山口市 高齢者配食サービス事業',
    organization: '山口市',
    type: 'local',
    maxAmount: '1食あたり200円の自己負担',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '山口県',
    tags: ['山口市', '配食サービス', '高齢者支援'],
    eligibility: '山口市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '山口市が実施する高齢者配食サービス事業です。ひとり暮らし高齢者等に栄養バランスの取れた食事を配達し、安否確認も行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 高齢者配食サービス事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみ世帯</span>に対して、栄養バランスの取れた食事を配達する制度です。</p><p>山口市は中山間地域も広く抱えており、買い物や調理が困難な高齢者の食生活を支援する必要性が高い地域です。配食サービスは食事の提供だけでなく、配達時の見守り・安否確認も兼ねています。</p><p>自己負担は<strong>1食あたり200円程度</strong>で、残りは市が負担します。<span class="marker-green">週5日まで利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山口市に住民登録がある65歳以上の方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象者"><p>ひとり暮らしの高齢者</p><p>高齢者のみの世帯</p><p>調理が困難な状態にある高齢者</p><p>栄養改善が必要と判断された高齢者</p></div><p>山口市役所高齢福祉課の窓口または地域包括支援センターで申請します。<strong>民生委員やケアマネジャーからの相談</strong>でも受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1食あたりの自己負担は<strong>約200円</strong>です。お弁当の実費（約600〜700円程度）との差額を市が補助しています。</p><p><span class="marker">配達時に応答がない場合は緊急連絡先や関係機関に連絡</span>する見守り機能も備えています。</p><div class="highlight-box">食事の内容は管理栄養士が監修しており、減塩食やアレルギー対応食の相談も可能です。山口市では配食サービスのほかに、買い物支援サービスも実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-bousai-equipment',
    title: '山口市 自主防災組織活動補助金',
    organization: '山口市',
    type: 'local',
    maxAmount: '最大20万円（組織あたり）',
    maxAmountNum: 20,
    category: 'disaster',
    prefecture: '山口県',
    tags: ['山口市', '防災活動', '補助金'],
    eligibility: '山口市内の自主防災組織',
    applicationPeriod: '毎年4月〜翌年2月',
    description: '山口市が実施する自主防災組織活動補助金です。防災資機材の購入や防災訓練の費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 自主防災組織活動補助金は、<span class="marker">地域の自主防災組織が行う防災資機材の購入や防災訓練の費用</span>を補助する制度です。</p><p>山口市は過去に豪雨による水害を経験しており、地域の防災力強化が重要課題です。町内会や自治会単位で結成される自主防災組織の活動を支援し、災害に強い地域づくりを進めています。</p><p>補助額は<strong>1組織あたり最大20万円</strong>です。<span class="marker-green">新規結成の場合は設立準備金として別途補助あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる活動・購入品"><p>防災訓練の実施費用（消火訓練、避難訓練等）</p><p>防災資機材の購入（発電機、投光器、救急セット等）</p><p>防災マップ・ハザードマップの作成費</p><p>防災研修会の開催費用</p></div><p>山口市役所防災危機管理課に活動計画書と申請書を提出します。</p><p><span class="marker">年度初めに活動計画を提出し、交付決定を受けてから活動・購入を開始</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の合計で<strong>1組織あたり最大20万円</strong>です。新規結成組織には設立準備金（最大10万円程度）が別途交付される場合があります。</p><p><span class="marker">個人での申請はできません</span>。自主防災組織として市に登録されていることが条件です。</p><div class="note-box">山口市では防災士の養成講座費用の助成も行っています。地域の防災リーダーを育成し、自主防災組織の活動をより実効性のあるものにしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 徳島市（徳島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tokushima-city-childcare-subsidy',
    title: '徳島市 保育料軽減助成金',
    organization: '徳島市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '徳島県',
    tags: ['徳島市', '保育料軽減', '助成金'],
    eligibility: '徳島市に住所を有し、認可保育施設に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '徳島市が実施する保育料軽減助成金です。第2子は半額、第3子以降の保育料を無料化します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園に通う多子世帯の保育料</span>を軽減する制度です。</p><p>阿波おどりの本場として知られる徳島市は、吉野川の恵みを受けた四国の玄関口です。子育て世帯の経済的負担を軽減し、次世代を担う子どもたちが健やかに育つ環境づくりに取り組んでいます。</p><p><strong>第2子は保育料半額、第3子以降は完全無料</strong>です。<span class="marker-green">きょうだいの年齢制限を撤廃し、上の子が小学生以上でもカウント対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>徳島市に住民登録があり、認可保育施設を利用している多子世帯が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料半額</p><p>第3子以降：保育料無料</p></div><p>入所申込時にきょうだい情報を届け出ることで自動適用されます。<strong>別途の申請手続きは原則不要</strong>です。別世帯のきょうだいがいる場合は個別にご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は通常保育料の半額、第3子以降は無料</strong>です。3〜5歳児は国の無償化により保育料がかかりませんので、本制度は主に0〜2歳児が対象です。</p><p><span class="marker">副食費（おかず代）は保育料とは別に実費負担</span>です。年収360万円未満相当の世帯は副食費の免除制度があります。</p><div class="note-box">認可外保育施設の利用者は本制度の対象外ですが、認可外保育施設利用料補助制度をご確認ください。詳しくは徳島市子育て支援課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-birth-bonus',
    title: '徳島市 出産・子育て応援給付金',
    organization: '徳島市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '徳島県',
    tags: ['徳島市', '出産応援', '給付金'],
    eligibility: '徳島市に住所を有する妊婦および出産後の保護者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '徳島市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円</span>を支給する制度です。</p><p>徳島市は阿波おどりで全国的に有名な街であり、眉山から見渡す市街地と吉野川の雄大な景色が特徴です。国の「出産・子育て応援交付金」事業を活用し、経済的支援と伴走型相談支援を一体的に提供しています。</p><p><span class="marker-green">所得制限なし、第1子から対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>徳島市に住民登録がある妊婦および出産後の保護者が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>①妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>②出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p><strong>保健師等との面談を受けることが支給の条件</strong>です。面談後に申請書が交付され、指定口座に振り込まれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円</strong>が2回に分けて支給されます。出産応援給付金5万円と子育て応援給付金5万円です。</p><p><span class="marker">他の自治体で出産応援給付金を受給済みの場合は、徳島市では子育て応援給付金のみの支給</span>となります。</p><div class="highlight-box">給付金とあわせて、保健師による妊娠期から産後までの伴走型相談支援（計3回の面談）も受けられます。徳島市の子育て情報ポータルサイトも合わせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-newlywed-rent',
    title: '徳島市 結婚新生活支援補助金',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '徳島県',
    tags: ['徳島市', '新婚家賃', '補助金'],
    eligibility: '徳島市に住所を有する新婚世帯（婚姻届提出から1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '徳島市が実施する結婚新生活支援補助金です。新婚世帯の住居費・引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 結婚新生活支援補助金は、<span class="marker">新婚世帯の住居費（家賃・住宅購入費）や引越費用</span>を補助する制度です。</p><p>徳島市は藍染めの文化や阿波人形浄瑠璃など独自の伝統文化が息づく街です。若い世代の定住を促進するため、結婚を機に徳島市で新生活を始める夫婦を経済的に支援しています。</p><p>補助上限は<strong>夫婦ともに29歳以下で60万円、39歳以下で30万円</strong>です。<span class="marker-green">世帯所得500万円未満の新婚世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届を提出してから1年以内であること</p><p>徳島市に住民登録があること</p><p>夫婦の合計所得が500万円未満であること</p><p>夫婦ともに婚姻日時点で39歳以下であること</p></div><p>徳島市役所市民生活課に申請書と婚姻届受理証明書、住居に関する契約書等を提出します。</p><p><span class="marker">婚姻届提出日以降に発生した費用が対象</span>です。婚姻届提出前の費用は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下は<strong>上限60万円</strong>、30〜39歳は<strong>上限30万円</strong>です。家賃・敷金・礼金・住宅ローン・引越費用が対象です。</p><p><span class="marker">勤務先からの住宅手当がある場合はその分が差し引かれます</span>。</p><div class="note-box">公営住宅への入居は対象外です。1世帯1回限りの利用で、同一年度内に申請する必要があります。徳島県の結婚支援事業と連携した婚活イベントも実施されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-disability-medical',
    title: '徳島市 重度心身障がい者医療費助成制度',
    organization: '徳島市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '徳島県',
    tags: ['徳島市', '障がい者医療', '助成金'],
    eligibility: '徳島市に住所を有する重度心身障がい者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '徳島市が実施する重度心身障がい者医療費助成制度です。重度の障がいをお持ちの方の医療費自己負担を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 重度心身障がい者医療費助成制度は、<span class="marker">重度の障がいをお持ちの方が保険診療を受けた際の自己負担分</span>を助成する制度です。</p><p>徳島市はユニバーサルデザインのまちづくりを推進しており、障がいのある方が安心して医療を受けられる環境整備に取り組んでいます。通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>徳島市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A（重度）</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳Bの重複障がい</p></div><p>徳島市役所障害福祉課の窓口で申請します。<strong>障害者手帳と健康保険証</strong>を持参してください。「重度心身障害者医療費受給者証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。徳島県内の医療機関では受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">入院時の食事療養費や差額ベッド代は助成対象外です。65歳以上で新たに障害認定を受けた方は、後期高齢者医療制度への加入が必要となる場合があります。詳しくは徳島市の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-school-lunch',
    title: '徳島市 学校給食費支援事業',
    organization: '徳島市',
    type: 'local',
    maxAmount: '給食費の一部助成',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '徳島県',
    tags: ['徳島市', '学校給食', '助成金'],
    eligibility: '徳島市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月',
    description: '徳島市が実施する学校給食費支援事業です。物価高騰に対応し、学校給食費の一部を市が負担します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 学校給食費支援事業は、<span class="marker">物価高騰による保護者負担の増加を軽減するため、学校給食費の一部</span>を市が負担する事業です。</p><p>徳島市の学校給食では、鳴門わかめやすだちなど地元の食材を積極的に活用しています。食材費の高騰に伴う給食の質の低下を防ぎつつ、保護者の負担を増やさないために市が差額を負担しています。</p><p><span class="marker-green">全児童生徒を対象に、所得制限なしで適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>徳島市立小中学校に在籍するすべての児童生徒の保護者が対象です。</p><div class="summary-box" data-title="支援の仕組み"><p>食材費の値上がり分を市が負担</p><p>給食の質・量は維持</p><p>保護者への請求額は据え置き</p></div><p><strong>個別の申請手続きは不要</strong>です。市が一括して対応しますので、保護者の方は通常どおり給食費をお支払いください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>食材費の値上がり分として、<strong>児童生徒1人あたり年間約3,000〜5,000円程度</strong>を市が負担しています。保護者の給食費負担額は据え置きです。</p><p><span class="marker">本事業は物価動向に応じて実施内容が変更される場合</span>があります。最新情報は徳島市教育委員会にご確認ください。</p><div class="highlight-box">徳島市は食育にも力を入れており、地元の漁協や農家と連携した「とくしま食育デー」を定期的に実施しています。給食を通じた子どもたちの食文化の継承も大切にしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-telework-bonus',
    title: '徳島市 サテライトオフィス進出支援補助金',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '徳島県',
    tags: ['徳島市', 'テレワーク', 'サテライトオフィス'],
    eligibility: '徳島市内にサテライトオフィスを開設する企業',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '徳島市が実施するサテライトオフィス進出支援補助金です。テレワーク拠点の開設費用を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 サテライトオフィス進出支援補助金は、<span class="marker">市内にサテライトオフィスやテレワーク拠点を新たに開設する企業</span>に対して費用を補助する制度です。</p><p>徳島県は全国に先駆けてサテライトオフィスの誘致に取り組んでおり、県庁所在地である徳島市も積極的に企業誘致を推進しています。関西圏からのアクセスが良好で、光ファイバー網の整備率も高い通信環境が強みです。</p><p>補助額は<strong>最大100万円</strong>です。<span class="marker-green">オフィス賃料、通信設備費、内装工事費などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>オフィス賃料（最大6か月分）</p><p>通信設備・ネットワーク整備費</p><p>内装工事費・備品購入費</p><p>従業員の移住費用の一部</p></div><p>徳島市役所経済政策課に事業計画書と申請書を提出します。事前に立地場所の相談も受け付けています。</p><p><span class="marker">オフィス開設の3か月前までに事前相談を行う</span>ことが推奨されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の合計で<strong>最大100万円</strong>です。雇用を伴う場合は加算措置がある場合もあります。</p><p><span class="marker">開設後2年以内にオフィスを撤退した場合は補助金の返還</span>が求められます。</p><div class="note-box">徳島市ではお試しサテライトオフィス体験プログラムも実施しており、開設前の短期利用で立地を検討できます。徳島県のサテライトオフィス支援制度との併用も可能な場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-nursing-home-reform',
    title: '徳島市 高齢者住宅バリアフリー改修助成',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'nursing',
    prefecture: '徳島県',
    tags: ['徳島市', '介護リフォーム', '補助金'],
    eligibility: '徳島市に住所を有する要介護・要支援認定を受けた高齢者の世帯',
    applicationPeriod: '通年',
    description: '徳島市が実施する高齢者住宅バリアフリー改修助成です。介護保険の住宅改修費に上乗せして最大25万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 高齢者住宅バリアフリー改修助成は、<span class="marker">介護保険制度の住宅改修費では不足する改修費用</span>に対して市が独自に上乗せ補助を行う制度です。</p><p>徳島市は吉野川沿いに発展した街で、古い木造住宅も多く残っています。段差の多い住宅での生活が困難な高齢者のために、バリアフリー改修を支援して在宅生活の継続を後押しします。</p><p><strong>最大25万円</strong>が補助されます。<span class="marker-green">介護保険の住宅改修費との併用が前提</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>徳島市に住民登録があり、要介護または要支援の認定を受けている方の世帯が対象です。</p><div class="summary-box" data-title="対象工事の例"><p>手すりの設置（玄関・廊下・浴室等）</p><p>段差の解消（スロープ設置等）</p><p>床材の変更（滑り防止）</p><p>引き戸への扉の取替え</p><p>洋式トイレへの変更</p></div><p>担当のケアマネジャーに相談のうえ、<strong>徳島市役所高齢介護課</strong>に申請書を提出します。工事着手前の事前申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>介護保険の住宅改修費（上限20万円）を利用した上で、<strong>市独自の補助として最大25万円</strong>が加算されます。</p><p><span class="marker">工事着手前に申請し、交付決定を受けてから着工する必要</span>があります。</p><div class="note-box">介護保険の住宅改修を利用していることが前提条件です。新築・増築は対象外です。工事内容についてはケアマネジャーと十分に相談し、日常生活の安全性向上につながる計画を立ててください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-energy-support',
    title: '徳島市 省エネ住宅設備導入補助金',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '徳島県',
    tags: ['徳島市', '省エネ住宅', '補助金'],
    eligibility: '徳島市に住所を有する世帯で、太陽光発電や蓄電池を導入する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '徳島市が実施する省エネ住宅設備導入補助金です。太陽光発電システムや蓄電池の導入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 省エネ住宅設備導入補助金は、<span class="marker">住宅への太陽光発電システムや家庭用蓄電池の導入費用</span>を補助する制度です。</p><p>徳島市は日照時間が全国的にも長い地域で、太陽光発電に適した気候条件を備えています。再生可能エネルギーの普及を通じて脱炭素社会の実現と家庭の電気代削減を同時に進めています。</p><p>補助額は設備の種類に応じて<strong>最大10万円</strong>です。<span class="marker-green">太陽光発電と蓄電池のセット導入で加算あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限8万円）</p><p>家庭用蓄電池：上限5万円</p><p>セット導入加算：2万円</p><p>1世帯あたりの上限：10万円</p></div><p>徳島市役所環境政策課に申請書と設置工事の見積書を提出します。</p><p><span class="marker">設備の設置工事前に申請が必要</span>です。交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1世帯あたり<strong>最大10万円</strong>が補助されます。太陽光パネルの容量や蓄電池の容量に応じて補助額が算出されます。</p><p><span class="marker">年度ごとに予算枠が設定されており、先着順で受付終了</span>となる場合があります。</p><div class="highlight-box">太陽光発電で余った電力は電力会社に売電することも可能です。徳島市では「脱炭素先行地域」の取り組みも進めており、省エネ設備導入への機運が高まっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-seismic-diagnosis',
    title: '徳島市 木造住宅耐震診断助成事業',
    organization: '徳島市',
    type: 'local',
    maxAmount: '診断費用の自己負担 3,000円のみ',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '徳島県',
    tags: ['徳島市', '耐震診断', '助成'],
    eligibility: '徳島市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃',
    description: '徳島市が実施する木造住宅耐震診断助成事業です。南海トラフ地震に備え、旧耐震基準の住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前に着工された木造住宅の耐震診断費用</span>を大幅に助成する制度です。</p><p>徳島市は南海トラフ巨大地震の被害想定地域に含まれており、住宅の耐震化は喫緊の課題です。市民の生命と財産を守るため、まず耐震診断で自宅の安全性を確認することを推奨しています。</p><p>自己負担は<strong>わずか3,000円</strong>で、残りの費用は市と県が負担します。<span class="marker-green">所得制限なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>徳島市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されていること</p><p>2階建て以下の戸建住宅であること</p><p>過去にこの制度を利用していないこと</p></div><p>徳島市役所建築指導課に申請書を提出します。申請後、市が派遣する耐震診断士が自宅を訪問します。</p><p><span class="marker">診断は半日程度の現地調査</span>で完了し、約1か月後に結果報告書が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用（通常8〜12万円程度）のうち、<strong>自己負担は3,000円のみ</strong>です。</p><p><span class="marker">診断の結果、耐震性不足と判定された場合は、耐震改修補助金（最大100万円）や建替補助金</span>の制度も利用できます。</p><div class="note-box">南海トラフ地震は今後30年以内に高い確率で発生すると予測されています。まずは耐震診断で自宅の状態を把握し、必要に応じて改修を検討しましょう。マンション等の共同住宅は別制度の対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 高松市（香川県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'takamatsu-childcare-subsidy',
    title: '高松市 保育料軽減助成金',
    organization: '高松市',
    type: 'local',
    maxAmount: '第2子以降 保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '香川県',
    tags: ['高松市', '保育料軽減', '助成金'],
    eligibility: '高松市に住所を有し、認可保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年',
    description: '高松市が実施する保育料軽減助成金です。第2子以降の保育料を無料化し、子育て世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園に通う第2子以降の子どもの保育料</span>を無料化する制度です。</p><p>瀬戸内海に面した高松市は、栗林公園や屋島など風光明媚な景勝地と讃岐うどんの文化で知られる四国の中核都市です。都市機能と自然が調和した暮らしやすい環境のもと、子育て支援の充実に力を入れています。</p><p><span class="marker-green">所得制限なし、第2子以降の保育料が完全無料</span>です。きょうだいの年齢制限も撤廃されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高松市に住民登録があり、認可保育施設を利用している多子世帯が対象です。</p><div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>幼稚園（新制度移行園）</p><p>小規模保育事業所</p></div><p>入所申込時にきょうだい情報を届け出ることで自動適用されます。<strong>原則として個別の申請は不要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額無料</strong>です。3〜5歳児は国の幼児教育無償化により全員が無料ですので、本制度は主に0〜2歳児に適用されます。</p><p><span class="marker">副食費は保育料とは別に実費負担</span>です。年収360万円未満相当の世帯は副食費の免除があります。</p><div class="note-box">認可外保育施設の利用者は別途の補助制度があります。高松市こども園運営課にご確認ください。企業主導型保育施設も本制度の対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-birth-bonus',
    title: '高松市 出産・子育て応援給付金',
    organization: '高松市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '香川県',
    tags: ['高松市', '出産応援', '給付金'],
    eligibility: '高松市に住所を有する妊婦および出産後の保護者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '高松市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円の合計10万円</span>を支給する制度です。</p><p>「うどん県」の県庁所在地である高松市は、瀬戸内海の穏やかな気候と利便性の高い都市機能を兼ね備えています。すべての妊婦・子育て家庭を対象に、経済的支援と伴走型相談支援を一体的に提供しています。</p><p><span class="marker-green">所得制限なし、第1子から対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高松市に住民登録がある妊婦および出産後の保護者が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>①妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>②出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p><strong>面談を受けることが支給の条件</strong>です。面談は高松市保健センターまたは各地域の保健センターで行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円</strong>を2回に分けて支給します。申請書に記載した口座に振り込まれます。</p><p><span class="marker">他の自治体で出産応援給付金を受給済みの場合は、高松市では子育て応援給付金のみ</span>の支給です。</p><div class="highlight-box">高松市では「たかまつ子育てアプリ」を通じて、給付金の案内や子育て関連情報を配信しています。予防接種のスケジュール管理や子育てイベント情報もアプリで確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-housing-purchase',
    title: '高松市 住宅取得支援補助金',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '香川県',
    tags: ['高松市', '住宅取得', '補助金'],
    eligibility: '高松市内に新たに住宅を取得し定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '高松市が実施する住宅取得支援補助金です。市内での住宅購入・新築に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 住宅取得支援補助金は、<span class="marker">高松市内に新たに住宅を取得する方</span>に対して費用の一部を補助する制度です。</p><p>瀬戸大橋で本州と結ばれた高松市は、四国の交通・経済の中心地です。JR高松駅周辺の再開発も進み、都市の利便性と瀬戸内海の自然が共存する魅力的な住環境を備えています。</p><p>基本補助額は<strong>30万円</strong>で、市外からの転入者や子育て世帯には加算があり<strong>最大50万円</strong>です。<span class="marker-green">中古住宅の取得も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>高松市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p><p>過去にこの補助金を利用していないこと</p></div><p>高松市役所都市整備局住宅課に申請書と売買契約書（または建築請負契約書）を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請</span>が必要です。引渡し前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。市外転入者+10万円、子育て世帯（18歳以下の子がいる）+10万円で<strong>最大50万円</strong>です。</p><p><span class="marker">5年以内に転出した場合は補助金の返還</span>が求められます。投資目的やセカンドハウスは対象外です。</p><div class="note-box">高松市では中古住宅のリノベーション補助や空き家バンク物件の購入補助も別途実施しています。新築だけでなく、既存住宅を活用した住まい方もぜひご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-infertility',
    title: '高松市 不妊治療費助成事業',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大10万円（1回あたり）',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '香川県',
    tags: ['高松市', '不妊治療', '助成金'],
    eligibility: '高松市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から90日以内）',
    description: '高松市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる医療費の自己負担分</span>を軽減する助成制度です。</p><p>高松市は四国の中核市として医療環境が充実しており、不妊治療を実施する専門医療機関も複数あります。2022年の保険適用拡大後も残る自己負担を軽減し、子どもを望む夫婦を経済的に支援しています。</p><p><span class="marker-green">体外受精・顕微授精に加え、人工授精も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高松市に住民登録がある法律上の夫婦（事実婚を含む）で、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書・明細書の写し</p><p>夫婦の住民票</p></div><p>高松市保健センターで申請します。<strong>治療終了日から90日以内</strong>に手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分に対し、<strong>1回の治療につき最大10万円</strong>です。年間の回数制限はありません。</p><p><span class="marker">香川県の不妊治療費助成制度との併用が可能</span>で、県と市の両方から助成を受けられます。</p><div class="highlight-box">高松市では不妊・不育症に関する専門相談窓口を設置しています。治療に関する悩みや、仕事との両立についても相談できます。男性不妊治療も助成対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-scholarship',
    title: '高松市 奨学金返還支援補助金',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大90万円（総額）',
    maxAmountNum: 90,
    category: 'education',
    prefecture: '香川県',
    tags: ['高松市', '奨学金返還', '補助金'],
    eligibility: '高松市に居住し就業している奨学金返還中の若者',
    applicationPeriod: '毎年4月〜6月',
    description: '高松市が実施する奨学金返還支援補助金です。市内に定住し働く若者の奨学金返還を最大90万円支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 奨学金返還支援補助金は、<span class="marker">高松市内に居住・就業する若者の奨学金返還</span>を支援する制度です。</p><p>高松市は香川大学や四国学院大学をはじめとする高等教育機関が集まる学術都市でもあり、卒業後の地元定着が課題となっています。奨学金返還の負担軽減を通じて、高松市での就職・定住を促進しています。</p><p>年間最大<strong>15万円</strong>、通算<strong>最大6年間で90万円</strong>が助成されます。<span class="marker-green">正規雇用だけでなく非正規雇用も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>高松市内に住民登録があること</p><p>高松市内の事業所に就業していること</p><p>日本学生支援機構等の奨学金を返還中であること</p><p>申請年度の4月1日時点で35歳未満であること</p></div><p>高松市役所創造都市推進局に申請書と奨学金返還証明書を提出します。</p><p><span class="marker">毎年度の申請が必要</span>で、前年度中に返還した奨学金額に基づいて助成額が決まります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>前年度中に返還した奨学金額に対し、<strong>年間最大15万円</strong>が助成されます。最長6年間で通算<strong>90万円</strong>が上限です。</p><p><span class="marker">助成期間中に高松市外へ転出した場合は翌年度以降の助成は受けられません</span>。受給済みの分の返還は不要です。</p><div class="note-box">香川県の奨学金返還支援制度との併用が可能な場合があります。公務員は本制度の対象外となることがあります。詳しくは高松市の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-sme-support',
    title: '高松市 中小企業DX推進補助金',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '香川県',
    tags: ['高松市', '中小企業DX', '補助金'],
    eligibility: '高松市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '高松市が実施する中小企業DX推進補助金です。デジタル化やIT導入にかかる費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 中小企業DX推進補助金は、<span class="marker">市内の中小企業がデジタル技術を活用した業務効率化や新サービス開発</span>に取り組む際の費用を補助する制度です。</p><p>高松市は四国の経済の中心地として、商業・サービス業を中心に多くの中小企業が集積しています。DX推進を通じた生産性向上と競争力強化を後押しし、地域経済の活性化を図っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">クラウドサービス導入、ECサイト構築、業務管理システムの導入などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費の例"><p>業務管理・顧客管理システムの導入費</p><p>ECサイト構築・運用費</p><p>クラウドサービスの初期導入費</p><p>キャッシュレス決済端末の導入費</p></div><p>高松市役所産業振興課に事業計画書と申請書を提出します。</p><p><span class="marker">交付決定前に着手した事業は補助対象外</span>です。必ず事前に申請し、決定通知を受けてから取り組みを開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。対象経費が20万円以上の事業が対象となります。</p><p><span class="marker">事業完了後に実績報告書と支出証拠書類の提出が必要</span>で、精算払いです。</p><div class="highlight-box">高松商工会議所と連携した無料のIT導入相談やDXセミナーも定期的に開催されています。補助金の活用と合わせて、専門家のアドバイスを受けることで効果的なDX推進が実現できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-nursing-equipment',
    title: '高松市 介護用品支給事業',
    organization: '高松市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '香川県',
    tags: ['高松市', '介護用品', '支給'],
    eligibility: '高松市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '高松市が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に紙おむつ等の介護用品を支給する制度です。</p><p>高松市では住み慣れた地域での在宅生活を支えるため、介護する家族の負担軽減に取り組んでいます。讃岐の温暖な気候と充実した医療環境のもと、高齢者が安心して暮らせる地域包括ケアシステムの構築を進めています。</p><p>月額<strong>最大6,250円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯の要介護4・5の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高松市に住民登録があり、以下のすべてに該当する方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けていること</p><p>在宅で生活していること（施設入所者は対象外）</p><p>市民税非課税世帯であること</p><p>介護用品を必要としていること</p></div><p>高松市役所長寿福祉課で申請します。<strong>介護保険被保険者証と本人確認書類</strong>が必要です。ケアマネジャーを通じた申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大6,250円相当</strong>の介護用品（紙おむつ・尿取りパッド等）が支給されます。カタログから必要な商品を選択する方式です。</p><p><span class="marker">入院中や施設入所中は支給停止</span>となります。退院後に再度申請してください。</p><div class="note-box">介護保険の福祉用具貸与・購入サービスとは別の制度です。併用して活用することで在宅介護の負担をより効果的に軽減できます。高松市の地域包括支援センターでもご相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-elderly-support',
    title: '高松市 高齢者外出支援事業',
    organization: '高松市',
    type: 'local',
    maxAmount: 'バス・電車無料乗車証の交付',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '香川県',
    tags: ['高松市', '高齢者外出支援', '乗車証'],
    eligibility: '高松市に住所を有する70歳以上の方',
    applicationPeriod: '通年',
    description: '高松市が実施する高齢者外出支援事業です。70歳以上の方にバス・電車の無料乗車証を交付し、外出を応援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 高齢者外出支援事業は、<span class="marker">70歳以上の高齢者にコミュニティバスやことでん（高松琴平電気鉄道）の無料乗車証</span>を交付する制度です。</p><p>高松市はことでんや市営バスなどの公共交通網が充実した都市です。高齢者の社会参加と健康増進を促すため、外出の機会を経済的に支援しています。買い物、通院、地域活動への参加など、日常的な外出を後押しします。</p><p><span class="marker-green">所得制限なし、70歳以上の市民全員が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高松市に住民登録がある70歳以上の方が対象です。</p><div class="summary-box" data-title="利用できる交通機関"><p>高松市コミュニティバス</p><p>ことでん（高松琴平電気鉄道）市内区間</p><p>ことでんバス市内路線</p></div><p>高松市役所高齢福祉課の窓口で申請します。<strong>本人確認書類（運転免許証、保険証等）</strong>を持参してください。70歳の誕生月から申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>バス・電車の無料乗車証</strong>が交付されます。対象路線であれば回数の制限なく利用できます。</p><p><span class="marker">JR線やタクシーは本制度の対象外</span>です。また、ことでんの市外区間（琴平方面等）は別途運賃が必要な場合があります。</p><div class="highlight-box">高松市は「コンパクト・プラス・ネットワーク」のまちづくりを推進しており、公共交通の利便性向上に取り組んでいます。高齢者の外出促進は健康寿命の延伸にも効果があることが研究で示されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-bousai-equipment',
    title: '高松市 家庭用防災資機材購入補助金',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '香川県',
    tags: ['高松市', '防災資機材', '補助金'],
    eligibility: '高松市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '高松市が実施する家庭用防災資機材購入補助金です。防災用蓄電池や感震ブレーカー等の購入を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 家庭用防災資機材購入補助金は、<span class="marker">地震や台風などの災害に備えた家庭用防災資機材の購入費用</span>を補助する制度です。</p><p>高松市は瀬戸内海に面し比較的穏やかな気候ですが、南海トラフ地震の被害想定地域に含まれています。各家庭での防災対策の強化を促進するため、防災資機材の購入を経済的に支援しています。</p><p>補助率は購入費の2分の1で、<strong>上限5万円</strong>です。<span class="marker-green">感震ブレーカー、家庭用蓄電池、転倒防止器具などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災資機材"><p>感震ブレーカー</p><p>家庭用蓄電池（ポータブル電源含む）</p><p>家具転倒防止器具・ガラス飛散防止フィルム</p><p>飲料水貯留タンク</p><p>非常用発電機</p></div><p>高松市役所危機管理課に申請書と購入品のレシート等を提出します。</p><p><span class="marker">購入後2か月以内に申請</span>が必要です。1世帯年度内1回限りの利用です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1で、<strong>1世帯あたり上限5万円</strong>です。</p><p><span class="marker">業務用・事業所用の機材は対象外</span>で、自宅で使用する防災用品に限られます。</p><div class="note-box">高松市では地域の自主防災組織への補助金制度も別途設けています。個人での備えに加え、地域全体での防災力向上も重要です。高松市のハザードマップで自宅周辺のリスクを確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 松山市（愛媛県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'matsuyama-childcare-subsidy',
    title: '松山市 保育料軽減助成金',
    organization: '松山市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛媛県',
    tags: ['松山市', '保育料軽減', '助成金'],
    eligibility: '松山市に住所を有し、認可保育施設に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '松山市が実施する保育料軽減助成金です。第2子は半額、第3子以降の保育料を無料化します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 保育料軽減助成金は、<span class="marker">認可保育所・認定こども園に通う多子世帯の保育料</span>を軽減する制度です。</p><p>道後温泉で有名な松山市は、四国最大の都市であり、正岡子規や夏目漱石ゆかりの文学都市でもあります。50万人を超える人口を抱える中核市として、子育て支援の充実に積極的に取り組んでいます。</p><p><strong>第2子は保育料半額、第3子以降は完全無料</strong>です。<span class="marker-green">きょうだいの年齢制限を撤廃し、上の子が小学生以上でもカウント</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松山市に住民登録があり、認可保育施設を利用している世帯が対象です。</p><div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常保育料</p><p>第2子：保育料半額</p><p>第3子以降：保育料無料</p></div><p>入所申込時にきょうだい情報を届け出ることで自動適用されます。<strong>別途の申請手続きは原則不要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子は通常保育料の半額、第3子以降は無料</strong>です。3〜5歳児は国の無償化により保育料がかかりませんので、主に0〜2歳児に適用されます。</p><p><span class="marker">副食費は保育料とは別に実費負担</span>です。年収360万円未満相当の世帯は副食費の免除制度があります。</p><div class="note-box">認可外保育施設の利用者は別途の助成制度があります。松山市保育・幼稚園課にお問い合わせください。待機児童ゼロを目指して保育施設の整備も進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-birth-bonus',
    title: '松山市 出産・子育て応援給付金',
    organization: '松山市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '愛媛県',
    tags: ['松山市', '出産応援', '給付金'],
    eligibility: '松山市に住所を有する妊婦および出産後の保護者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '松山市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後に合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円、出生届出後に5万円の合計10万円</span>を支給する制度です。</p><p>松山城の城下町として栄えた松山市は、道後温泉や坊っちゃん列車など観光名所が豊富な四国最大の都市です。すべての妊婦・子育て家庭に対し、経済的支援と保健師による伴走型相談支援を一体的に提供しています。</p><p><span class="marker-green">所得制限なし、第1子から対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松山市に住民登録がある妊婦および出産後の保護者が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>①妊娠届出時に保健師等と面談 → 出産応援給付金5万円</p><p>②出生届出後に保健師等と面談 → 子育て応援給付金5万円</p></div><p><strong>面談を受けることが支給条件</strong>です。面談は松山市保健所または各地区の保健センターで行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>合計<strong>10万円</strong>が2回に分けて支給されます。指定口座への振込となります。</p><p><span class="marker">他の自治体で出産応援給付金を受給済みの場合は、松山市では子育て応援給付金のみ</span>の支給です。</p><div class="highlight-box">松山市では「まつやま子育て応援アプリ」を提供しており、給付金の案内や子育て関連イベント情報、予防接種スケジュールの管理ができます。妊娠がわかったら、まずアプリをダウンロードしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-newlywed-rent',
    title: '松山市 結婚新生活支援補助金',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '愛媛県',
    tags: ['松山市', '新婚家賃', '補助金'],
    eligibility: '松山市に住所を有する新婚世帯（婚姻届提出から1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '松山市が実施する結婚新生活支援補助金です。新婚世帯の住居費・引越費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 結婚新生活支援補助金は、<span class="marker">新婚世帯の住居費（家賃・住宅購入費）や引越費用</span>を補助する制度です。</p><p>夏目漱石の小説『坊っちゃん』の舞台としても有名な松山市は、温暖な気候と文化的な街並みが魅力の四国最大の都市です。若いカップルが松山で新生活をスタートしやすいよう、住居にかかる経済的負担を軽減しています。</p><p>補助上限は<strong>夫婦ともに29歳以下で60万円、39歳以下で30万円</strong>です。<span class="marker-green">世帯所得500万円未満の新婚世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届を提出してから1年以内であること</p><p>松山市に住民登録があること</p><p>夫婦の合計所得が500万円未満であること</p><p>夫婦ともに婚姻日時点で39歳以下であること</p></div><p>松山市役所市民課に申請書と婚姻届受理証明書、住居に関する契約書等を提出します。</p><p><span class="marker">婚姻届提出日以降に発生した費用のみが対象</span>です。それ以前の費用は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下は<strong>上限60万円</strong>、30〜39歳は<strong>上限30万円</strong>です。家賃・敷金・礼金・住宅ローン・引越費用が対象です。</p><p><span class="marker">勤務先の住宅手当は補助対象額から差し引かれます</span>。</p><div class="note-box">公営住宅入居者は対象外です。1世帯1回限りの利用で、同一年度内の申請が必要です。松山市では婚活支援イベント「愛結び」も定期的に開催されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-disability-medical',
    title: '松山市 重度心身障がい者医療費助成制度',
    organization: '松山市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '愛媛県',
    tags: ['松山市', '障がい者医療', '助成金'],
    eligibility: '松山市に住所を有する重度心身障がい者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '松山市が実施する重度心身障がい者医療費助成制度です。重度障がいのある方の医療費自己負担を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 重度心身障がい者医療費助成制度は、<span class="marker">重度の障がいをお持ちの方の保険診療における自己負担分</span>を助成する制度です。</p><p>四国最大の都市である松山市は、充実した医療体制と福祉サービスを備えています。障がいのある方が経済的な心配なく必要な医療を受けられるよう、通院・入院・調剤のすべてを助成対象としています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松山市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい等級"><p>身体障害者手帳1級または2級</p><p>療育手帳A（重度）</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳Bの重複障がい</p></div><p>松山市役所障がい福祉課の窓口で申請します。<strong>障害者手帳と健康保険証</strong>を持参してください。「重度心身障害者医療費受給者証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。愛媛県内の医療機関では受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">入院時の食事療養費や差額ベッド代は助成対象外です。65歳以上で後期高齢者医療制度に加入している方は、後期高齢者医療との調整が行われる場合があります。詳しくは松山市の窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-school-lunch',
    title: '松山市 学校給食費助成事業',
    organization: '松山市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '愛媛県',
    tags: ['松山市', '学校給食', '助成金'],
    eligibility: '松山市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '松山市が実施する学校給食費助成事業です。第3子以降の児童生徒の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 学校給食費助成事業は、<span class="marker">松山市立小中学校に在籍する第3子以降の児童生徒の学校給食費</span>を全額免除する制度です。</p><p>松山市の学校給食では、みかんやいよかんなど愛媛の特産品や瀬戸内海の新鮮な魚介類を取り入れた「愛媛まるごと給食」を実施しています。多子世帯の教育費負担を軽減し、すべての子どもが充実した食事を楽しめるよう支援しています。</p><p><span class="marker-green">所得制限なし、第3子以降であれば給食費が全額無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松山市立小中学校に通う児童生徒の保護者で、その子どもが第3子以降に該当する世帯が対象です。</p><div class="summary-box" data-title="子どもの数え方"><p>同一世帯で扶養している18歳以下の子どもを上から数える</p><p>第3子以降の小中学生が給食費免除の対象</p><p>高校生以下のきょうだいもカウントに含む</p></div><p>年度初めに学校を通じて申請書が配布されます。<strong>記入して学校に提出</strong>してください。年度途中の転入者も随時申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の<strong>学校給食費が全額免除</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円程度の負担軽減です。</p><p><span class="marker">就学援助制度を受給している場合は、就学援助で給食費がカバーされるため本制度との重複はありません</span>。</p><div class="highlight-box">松山市は「食育推進計画」に基づき、地産地消や食文化の継承に取り組んでいます。学校給食は栄養バランスだけでなく、愛媛の食文化を学ぶ教育の場でもあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-telework-bonus',
    title: '松山市 テレワーク移住支援補助金',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '愛媛県',
    tags: ['松山市', 'テレワーク', '移住支援'],
    eligibility: '松山市に移住しテレワークで勤務を継続する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '松山市が実施するテレワーク移住支援補助金です。テレワーク移住者に引越費用や通信環境整備費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 テレワーク移住支援補助金は、<span class="marker">市外から松山市に移住し、テレワークで勤務を継続する方</span>を対象に補助金を支給する制度です。</p><p>道後温泉や松山城を擁する松山市は、温暖な気候と豊かな文化に恵まれた四国最大の都市です。近年はテレワーク環境の整備にも力を入れており、都市部からの移住先としての人気が高まっています。</p><p>補助額は<strong>最大30万円</strong>です。<span class="marker-green">引越費用、通信環境整備費、コワーキングスペース利用料が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>松山市外から松山市に転入すること</p><p>テレワークで現在の勤務先の業務を継続すること</p><p>松山市に1年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>松山市役所産業経済部に申請書と勤務先のテレワーク勤務証明書を提出します。</p><p><span class="marker">転入後3か月以内に申請</span>してください。事前の移住相談も歓迎しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の合計で<strong>最大30万円</strong>が補助されます。引越費用、通信環境整備費、コワーキングスペースの年間利用料が含まれます。</p><p><span class="marker">1年以内に松山市から転出した場合は補助金の返還</span>が求められます。</p><div class="note-box">松山市内にはテレワーク対応のコワーキングスペースが複数あり、道後温泉近くのワーケーション施設も利用できます。松山市の移住相談窓口「いい、暮らし。まつやま」ではオンライン相談も受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-nursing-home-reform',
    title: '松山市 高齢者住宅改修支援事業',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '愛媛県',
    tags: ['松山市', '介護リフォーム', '補助金'],
    eligibility: '松山市に住所を有する要介護・要支援認定を受けた高齢者の世帯',
    applicationPeriod: '通年',
    description: '松山市が実施する高齢者住宅改修支援事業です。介護保険の住宅改修費に上乗せして最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 高齢者住宅改修支援事業は、<span class="marker">介護保険の住宅改修費（上限20万円）を超える改修費用</span>に対して、市が独自に上乗せ補助を行う制度です。</p><p>松山市は古くからの住宅地が広がる城下町であり、築年数の古い住宅での生活が困難な高齢者も多くいます。バリアフリー改修を支援することで、住み慣れた自宅での安全な生活の継続を応援しています。</p><p><strong>最大30万円</strong>が補助されます。<span class="marker-green">介護保険の住宅改修費との併用が前提</span>の制度です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松山市に住民登録があり、要介護または要支援の認定を受けている方の世帯が対象です。</p><div class="summary-box" data-title="対象工事の例"><p>手すりの設置（浴室・トイレ・階段等）</p><p>段差の解消・スロープの設置</p><p>滑りにくい床材への変更</p><p>引き戸への扉の取替え</p><p>洋式トイレへの変更</p></div><p>担当ケアマネジャーと相談のうえ、<strong>松山市役所介護保険課</strong>に申請書を提出します。工事着手前の事前申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>介護保険の住宅改修費を利用した上で、<strong>市独自の補助として最大30万円</strong>が加算されます。</p><p><span class="marker">工事着手前の申請が必須</span>です。着工後の申請は受け付けられません。</p><div class="note-box">介護保険の住宅改修を利用していない場合は本制度の対象外です。新築・増築工事も対象外です。ケアマネジャーと工事業者で打ち合わせを行い、本人の身体状況に合った改修計画を立てることが重要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-energy-support',
    title: '松山市 省エネ家電買替促進補助金',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '愛媛県',
    tags: ['松山市', '省エネ家電', '補助金'],
    eligibility: '松山市に住所を有する世帯で、省エネ家電に買い替える方',
    applicationPeriod: '毎年度（予算に達し次第終了）',
    description: '松山市が実施する省エネ家電買替促進補助金です。エアコンや冷蔵庫を省エネ家電に買い替える際に最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 省エネ家電買替促進補助金は、<span class="marker">省エネ性能の高いエアコン・冷蔵庫への買替え</span>に対して費用の一部を補助する制度です。</p><p>松山市は瀬戸内海式気候で夏の暑さが厳しく、エアコンの使用による電力消費が大きい地域です。省エネ家電への買替えを促進することで、家庭のCO2排出削減と電気代の節約を同時に実現します。</p><p>補助額は購入金額に応じて<strong>最大3万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電と補助額"><p>エアコン（統一省エネラベル3つ星以上）：最大2万円</p><p>冷蔵庫（統一省エネラベル3つ星以上）：最大2万円</p><p>LED照明への交換：最大1万円</p><p>1世帯あたり上限：3万円</p></div><p>松山市役所環境部に申請書と購入レシート・保証書の写しを提出します。</p><p><span class="marker">購入後3か月以内に申請</span>してください。市内の販売店での購入が推奨されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1世帯あたり<strong>最大3万円</strong>です。複数の家電を買い替えても上限は変わりません。</p><p><span class="marker">毎年度予算に限りがあり、先着順で終了</span>します。年度初めの申請がおすすめです。</p><div class="highlight-box">古い家電（10年以上使用）を最新の省エネ家電に替えると、年間の電気代が1〜3万円程度削減される場合があります。松山市は「ゼロカーボンシティ」を宣言しており、家庭の省エネ対策を積極的に推進しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-seismic-diagnosis',
    title: '松山市 木造住宅耐震診断助成事業',
    organization: '松山市',
    type: 'local',
    maxAmount: '診断費用の自己負担 3,000円のみ',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '愛媛県',
    tags: ['松山市', '耐震診断', '助成'],
    eligibility: '松山市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃',
    description: '松山市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を大幅に助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前に着工された木造住宅の耐震診断費用</span>を大幅に助成する制度です。</p><p>松山市は南海トラフ巨大地震の被害が想定されている地域です。2024年の豊後水道を震源とする地震でも揺れが観測され、住宅の耐震化の重要性が改めて認識されました。まず耐震診断で自宅の安全性を確認しましょう。</p><p>自己負担は<strong>わずか3,000円</strong>で、残りは市と県が負担します。<span class="marker-green">所得制限なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>松山市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されていること</p><p>2階建て以下の戸建住宅であること</p><p>過去にこの制度を利用していないこと</p></div><p>松山市役所建築指導課に申請書を提出します。申請後、市が委託する耐震診断士が自宅を訪問します。</p><p><span class="marker">診断は半日程度の現地調査</span>で完了し、約1か月後に診断結果報告書が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用（通常8〜12万円程度）のうち、<strong>自己負担は3,000円のみ</strong>です。残額は松山市と愛媛県が負担します。</p><p><span class="marker">耐震性不足と診断された場合は、耐震改修補助金（最大100万円）や除却補助金</span>も活用できます。</p><div class="note-box">松山市では「耐震改修促進計画」に基づき、住宅の耐震化率向上を目指しています。南海トラフ地震に備えて、耐震診断→必要に応じた改修→家具固定という段階的な防災対策をおすすめします。マンションは別制度の対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
];
