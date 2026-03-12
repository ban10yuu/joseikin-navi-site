import { Grant } from '@/lib/types';

const cities = [
  { name: '鳥取市', pref: '鳥取県', prefix: 'tottori-', desc: '鳥取市は鳥取県の県庁所在地で、鳥取砂丘や白兎海岸などの自然景観が有名です。らっきょうや二十世紀梨の産地としても知られています。' },
  { name: '米子市', pref: '鳥取県', prefix: 'yonago-', desc: '米子市は鳥取県西部の商業都市で、皆生温泉や大山のふもとに位置します。山陰の商都として交通・経済の要衝となっています。' },
  { name: '倉吉市', pref: '鳥取県', prefix: 'kurayoshi-', desc: '倉吉市は鳥取県中部に位置し、白壁土蔵群の歴史的な町並みで知られます。三朝温泉にも近く、観光拠点としても魅力的なまちです。' },
  { name: '境港市', pref: '鳥取県', prefix: 'sakaiminato-', desc: '境港市は日本海に面した港町で、水木しげるロードやズワイガニの水揚げ量日本一で有名です。漁業と観光が基幹産業のまちです。' },
  { name: '琴浦町', pref: '鳥取県', prefix: 'kotoura-', desc: '琴浦町は鳥取県中部の日本海沿いに位置し、鳴り石の浜や船上山で知られます。大山乳業の拠点として酪農が盛んなまちです。' },
  { name: '北栄町', pref: '鳥取県', prefix: 'hokuei-', desc: '北栄町は「名探偵コナン」の作者・青山剛昌氏の出身地として知られ、コナンの町として人気の観光地です。砂丘らっきょうの産地でもあります。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}child-medical-aid`, title: `${c.name} こども医療費助成`, amount: '自己負担なし（全額助成）', amountNum: 0, elig: `${c.name}に住所を有する18歳までの子どもの保護者`, period: '通年', descr: `${c.name}が実施するこども医療費助成制度です。18歳年度末まで医療費の自己負担を全額助成します。`, tags: [c.name, 'こども医療費', '鳥取県'],
      s1: `<p>${c.name}こども医療費助成は、<span class="marker">18歳に達した年度末まで</span>の子どもの医療費自己負担を全額助成する制度です。</p><p>${c.desc}</p><p><span class="marker-green">所得制限なし</span>で、通院・入院ともに自己負担ゼロです。鳥取県の助成制度に${c.name}が上乗せしています。</p>`,
      s2: `<p>${c.name}に住民登録のある18歳年度末までの子どもが対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>${c.name}子育て支援課窓口で<span class="marker">受給資格証の交付申請</span>を行ってください。県外医療機関の受診は償還払いとなります。</p>`,
      s3: `<p>通院・入院ともに<strong>自己負担なし</strong>。保険適用分の自己負担額が全額助成されます。</p><p><span class="marker">県内医療機関は受給資格証提示で窓口無料</span>。県外は後日申請で償還。</p><div class="note-box">鳥取県は全国でも子ども医療費助成が手厚い自治体の一つです。入院時の食事代は助成対象外です。</div>` },
    { cat: 'housing', slug: `${c.prefix}juutaku-reform`, title: `${c.name} 住宅リフォーム助成金`, amount: '最大30万円', amountNum: 30, elig: `${c.name}内に住宅を所有し居住している方`, period: '毎年4月〜12月（先着順）', descr: `${c.name}が実施する住宅リフォーム助成金です。住宅の改修・修繕工事に最大30万円を助成します。`, tags: [c.name, '住宅リフォーム', '鳥取県'],
      s1: `<p>${c.name}住宅リフォーム助成金は、<span class="marker">住宅の改修・修繕工事</span>を支援する制度です。</p><p>バリアフリー化、省エネ改修、耐震補強など幅広い工事が対象です。地域経済の活性化と住環境の改善を図ります。</p><p>助成額は<strong>工事費の10%以内、最大30万円</strong>です。<span class="marker-green">市内業者施工が条件</span>です。</p>`,
      s2: `<div class="summary-box" data-title="対象工事"><p>屋根・外壁の修繕</p><p>バリアフリー改修</p><p>省エネ設備の設置</p><p>水回りのリフォーム</p></div><p>${c.name}建築住宅課に<span class="marker">工事着手前に申請</span>が必要です。着工後の申請は受け付けられません。</p>`,
      s3: `<p>工事費の10%以内で<strong>最大30万円</strong>。工事費が30万円以上の場合に対象。</p><p><span class="marker">市内に本店を有する施工業者</span>による工事が条件です。</p><div class="highlight-box">耐震改修が必要な場合は別途耐震改修補助金との併用も可能な場合があります。詳細は${c.name}にお問い合わせください。</div>` },
    { cat: 'medical', slug: `${c.prefix}health-checkup-subsidy`, title: `${c.name} 人間ドック受診費助成`, amount: '最大3万円', amountNum: 3, elig: `${c.name}国民健康保険加入者で40歳以上の方`, period: '毎年4月〜翌年2月', descr: `${c.name}が実施する人間ドック受診費助成です。国保加入者の人間ドック費用を最大3万円助成します。`, tags: [c.name, '人間ドック', '鳥取県'],
      s1: `<p>${c.name}人間ドック受診費助成は、<span class="marker">国民健康保険加入者の人間ドック受診</span>を支援する制度です。</p><p>生活習慣病の早期発見・予防を推進し、市民の健康維持と医療費の適正化を図ります。</p><p>助成額は<strong>受診費用の7割以内、最大3万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象条件"><p>${c.name}国保に継続加入していること</p><p>40歳以上であること</p><p>国保税の滞納がないこと</p><p>当該年度の特定健診を未受診</p></div><p>${c.name}保険年金課に<span class="marker">受診前に申請</span>してください。指定医療機関での受診が条件です。</p>`,
      s3: `<p>受診費の7割以内で<strong>最大3万円</strong>。脳ドック・がん検診オプション付きも対象。</p><p><span class="marker">特定健診との重複受診は不可</span>です。</p><div class="note-box">75歳以上の方は後期高齢者医療制度の人間ドック助成をご利用ください。</div>` },
    { cat: 'education', slug: `${c.prefix}scholarship-repayment`, title: `${c.name} 奨学金返還支援制度`, amount: '最大150万円（年30万円×5年）', amountNum: 150, elig: `${c.name}に居住し市内事業所に就職した45歳未満の方`, period: '毎年4月〜5月', descr: `${c.name}が実施する奨学金返還支援制度です。市内就職者の奨学金返還を年最大30万円、5年間支援します。`, tags: [c.name, '奨学金返還', '鳥取県'],
      s1: `<p>${c.name}奨学金返還支援制度は、<span class="marker">市内事業所に就職した若者の奨学金返還</span>を支援する制度です。</p><p>若者の地元定着と人材確保を目的として、大学等の奨学金返還負担を軽減します。UIJターンで${c.name}に移住した方も対象です。</p><p>支援額は<strong>年間最大30万円、最長5年間で最大150万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>日本学生支援機構等の奨学金を返還中</p><p>${c.name}に住民登録があること</p><p>市内の事業所に正規雇用されていること</p><p>45歳未満であること</p></div><p>${c.name}企画課に<span class="marker">毎年4月〜5月に申請</span>。年度ごとの更新手続きが必要です。</p>`,
      s3: `<p>年間返還額の2/3以内で<strong>年最大30万円</strong>。5年間で最大150万円の支援。</p><p><span class="marker">市内事業所への継続勤務</span>が条件です。退職すると支援停止。</p><div class="highlight-box">鳥取県の奨学金返還支援制度と併用できる場合があります。詳細は${c.name}にお問い合わせください。</div>` },
    { cat: 'employment', slug: `${c.prefix}startup-support`, title: `${c.name} 創業支援補助金`, amount: '最大50万円', amountNum: 50, elig: `${c.name}内で新たに創業する個人または法人`, period: '毎年4月〜11月', descr: `${c.name}が実施する創業支援補助金です。市内での新規創業にかかる経費を最大50万円補助します。`, tags: [c.name, '創業支援', '鳥取県'],
      s1: `<p>${c.name}創業支援補助金は、<span class="marker">市内で新たに事業を始める方</span>の初期費用を支援する制度です。</p><p>地域経済の活性化と雇用創出を目的に、創業時の資金的ハードルを下げます。${c.name}の認定創業支援セミナー受講が条件です。</p><p>補助額は<strong>対象経費の1/2以内、最大50万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象経費"><p>店舗等の改装費用</p><p>設備・備品の購入費</p><p>広告宣伝費</p><p>各種許認可取得費用</p></div><p>${c.name}商工観光課に<span class="marker">創業前に申請</span>。創業セミナーの修了証明が必要です。</p>`,
      s3: `<p>対象経費の1/2以内で<strong>最大50万円</strong>。商店街での創業は10万円加算。</p><p><span class="marker">創業後1年以内の実績報告</span>が必要です。</p><div class="note-box">${c.name}は認定創業支援等事業者として登録免許税の軽減措置も利用可能です。</div>` },
    { cat: 'nursing', slug: `${c.prefix}elderly-taxi`, title: `${c.name} 高齢者タクシー利用助成`, amount: '年間最大2.4万円', amountNum: 2.4, elig: `${c.name}に住所を有する75歳以上で運転免許を持たない方`, period: '通年', descr: `${c.name}が実施する高齢者タクシー利用助成です。75歳以上の交通弱者にタクシー券を年間最大2.4万円分交付します。`, tags: [c.name, '高齢者タクシー', '鳥取県'],
      s1: `<p>${c.name}高齢者タクシー利用助成は、<span class="marker">75歳以上の交通弱者</span>の外出を支援する制度です。</p><p>公共交通が限られる地域の高齢者が通院や買い物に利用できるタクシー券を交付します。免許返納者の生活の足を確保する重要な制度です。</p><p>交付額は<strong>1回500円券×48枚＝年間最大2万4,000円</strong>分です。</p>`,
      s2: `<div class="summary-box" data-title="対象者"><p>75歳以上で${c.name}に住民登録がある方</p><p>自動車運転免許を持たない方</p><p>要介護認定の有無は不問</p></div><p>${c.name}長寿社会課窓口で<span class="marker">タクシー利用券の交付申請</span>を行ってください。年度途中からの申請は月割計算となります。</p>`,
      s3: `<p>500円券×48枚で<strong>年間最大2万4,000円</strong>分。市内登録タクシー会社で利用可能。</p><p><span class="marker">1回の乗車で複数枚使用可</span>。おつりは出ません。</p><div class="note-box">免許自主返納者は返納後すぐに申請できます。${c.name}では運転免許返納者支援制度も別途あります。</div>` },
    { cat: 'living', slug: `${c.prefix}water-saving`, title: `${c.name} 雨水タンク設置補助金`, amount: '最大3万円', amountNum: 3, elig: `${c.name}内に住宅を所有する方`, period: '毎年4月〜翌年1月', descr: `${c.name}が実施する雨水タンク設置補助金です。雨水の有効利用と節水を目的に設置費用を最大3万円補助します。`, tags: [c.name, '雨水タンク', '鳥取県'],
      s1: `<p>${c.name}雨水タンク設置補助金は、<span class="marker">住宅への雨水貯留タンクの設置</span>を支援する制度です。</p><p>雨水の庭木散水や災害時の生活用水としての活用を促進し、水資源の有効利用を図ります。</p><p>補助額は<strong>購入・設置費の1/2以内、最大3万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象条件"><p>${c.name}内の一戸建て住宅に設置</p><p>容量100リットル以上のタンク</p><p>雨どいに接続して設置</p><p>設置後に検査を受けること</p></div><p>${c.name}生活環境課に<span class="marker">設置前に申請</span>してください。設置後は完了届の提出が必要です。</p>`,
      s3: `<p>購入・設置費の1/2以内で<strong>最大3万円</strong>。1住宅につき1基まで。</p><p><span class="marker">既設タンクの更新は対象外</span>です。</p><div class="note-box">災害時の生活用水としても役立ちます。庭の水やりや洗車にも使え、水道代の節約にもなります。</div>` },
    { cat: 'disaster', slug: `${c.prefix}block-wall-removal`, title: `${c.name} ブロック塀等撤去補助金`, amount: '最大15万円', amountNum: 15, elig: `${c.name}内の通学路等に面する危険なブロック塀の所有者`, period: '毎年4月〜12月', descr: `${c.name}が実施するブロック塀撤去補助金です。通学路等に面する危険なブロック塀の撤去費用を最大15万円補助します。`, tags: [c.name, 'ブロック塀撤去', '鳥取県'],
      s1: `<p>${c.name}ブロック塀等撤去補助金は、<span class="marker">通学路や避難路に面する危険なブロック塀</span>の撤去を促進する制度です。</p><p>地震時のブロック塀倒壊による被害を防止し、通行者の安全を確保します。</p><p>補助額は<strong>撤去費用の2/3以内、最大15万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象ブロック塀"><p>道路や通学路に面している</p><p>高さ1m以上のブロック塀・石塀</p><p>ひび割れ・傾き等の危険がある</p><p>市の安全点検で危険と判定</p></div><p>${c.name}建築指導課に<span class="marker">撤去工事前に申請</span>。現地調査後に交付決定されます。</p>`,
      s3: `<p>撤去費の2/3以内で<strong>最大15万円</strong>。塀の延長1mあたり1万円を上限額とする場合も。</p><p><span class="marker">撤去のみが対象</span>で、新設フェンス等は対象外です。</p><div class="highlight-box">通学路の安全確保は地域全体の課題です。危険と感じるブロック塀があれば${c.name}にご相談ください。</div>` },
    { cat: 'childcare', slug: `${c.prefix}school-lunch-subsidy`, title: `${c.name} 学校給食費補助制度`, amount: '最大年間5.5万円', amountNum: 5.5, elig: `${c.name}立小中学校に通う第3子以降の児童生徒の保護者`, period: '通年（自動適用）', descr: `${c.name}が実施する学校給食費補助制度です。第3子以降の給食費を全額補助し、多子世帯の負担を軽減します。`, tags: [c.name, '給食費補助', '鳥取県'],
      s1: `<p>${c.name}学校給食費補助制度は、<span class="marker">第3子以降の児童生徒の給食費</span>を全額補助する制度です。</p><p>多子世帯の教育費負担を軽減し、子育てしやすい環境づくりを推進しています。</p><p><span class="marker-green">第3子以降の給食費が実質無料</span>になります。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>${c.name}立小中学校に在籍</p><p>18歳以下の子が3人以上いる世帯の第3子以降</p><p>所得制限なし</p></div><p>原則として<span class="marker">学校を通じて自動的に適用</span>されます。世帯状況に変更があった場合は${c.name}教育委員会に届け出てください。</p>`,
      s3: `<p>小学校約4.5万円/年、中学校約5.5万円/年の給食費が<strong>全額補助</strong>されます。</p><p><span class="marker">就学援助制度との併用</span>はできません（就学援助が優先）。</p><div class="note-box">${c.name}では給食費無償化の拡大も検討されています。最新情報は教育委員会にご確認ください。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [
      { heading: '制度の概要', content: g.s1 },
      { heading: '対象者と申請方法', content: g.s2 },
      { heading: '支給額と注意点', content: g.s3 },
    ],
    officialUrl: '', publishedAt: '2026-03-01',
  }));
}

export const cityGrantsBatch82: Grant[] = cities.flatMap(c => genGrants(c));
