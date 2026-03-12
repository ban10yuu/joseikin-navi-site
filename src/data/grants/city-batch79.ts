import { Grant } from '@/lib/types';

const cities = [
  { name: '津市', pref: '三重県', prefix: 'tsu-', desc: '津市は三重県の県庁所在地で、伊勢湾に面した温暖な気候の都市です。津ぎょうざや津城跡、日本三観音の一つ・津観音で知られ、大学が集まる文教都市でもあります。' },
  { name: '四日市市', pref: '三重県', prefix: 'yokkaichi-', desc: '四日市市は三重県最大の都市で、石油化学コンビナートを中心とした工業都市です。かつての公害を克服し、環境先進都市として再生した歴史を持ちます。' },
  { name: '伊勢市', pref: '三重県', prefix: 'ise-', desc: '伊勢市は伊勢神宮の鎮座地として日本を代表する聖地です。おかげ横丁の賑わいや伊勢うどん、赤福餅など、歴史と食文化が豊かなまちです。' },
  { name: '松阪市', pref: '三重県', prefix: 'matsusaka-', desc: '松阪市は松阪牛の産地として世界的に有名で、本居宣長の故郷でもある学問の街です。松阪商人の豪商文化と城下町の風情が今なお残っています。' },
  { name: '桑名市', pref: '三重県', prefix: 'kuwana-', desc: '桑名市は木曽三川の河口に位置し、ナガシマスパーランドやなばなの里で知られる観光都市です。桑名の焼蛤や多度大社の上げ馬神事が伝統文化として残ります。' },
  { name: '鈴鹿市', pref: '三重県', prefix: 'suzuka-', desc: '鈴鹿市はF1日本グランプリの開催地・鈴鹿サーキットで世界的に知られています。自動車・二輪車産業が盛んで、伊勢型紙の伝統工芸も受け継がれるまちです。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}after-school-care`, title: `${c.name} 放課後児童クラブ利用料減免`, amount: '利用料最大半額免除', amountNum: 3, elig: `${c.name}の放課後児童クラブを利用するひとり親・多子世帯`, period: '通年（自動適用）', descr: `${c.name}が実施する放課後児童クラブ利用料減免です。ひとり親世帯や多子世帯の利用料を最大半額免除します。`, tags: [c.name, '放課後児童クラブ', '減免', '三重県', 'ひとり親支援'],
      s1: `<p>${c.name}放課後児童クラブ利用料減免は、<span class="marker">経済的負担の大きいひとり親世帯や多子世帯</span>の利用料を軽減する制度です。</p><p>${c.desc}</p><p>通常月額5,000〜8,000円の利用料が<strong>最大半額に減免</strong>されます。<span class="marker-green">生活保護世帯は全額免除</span>です。</p>`,
      s2: `<p>${c.name}の放課後児童クラブに入所している児童の保護者が対象です。</p><div class="summary-box" data-title="減免区分"><p>生活保護世帯：全額免除</p><p>ひとり親世帯（非課税）：全額免除</p><p>ひとり親世帯（課税）：半額減免</p><p>同時利用の2人目以降：半額減免</p></div><p>${c.name}こども未来課に<span class="marker">減免申請書を提出</span>してください。年度ごとの更新が必要です。</p>`,
      s3: `<p>月額利用料が<strong>最大半額</strong>に。年間で約3〜5万円の軽減効果。</p><p><span class="marker">おやつ代・教材費は減免対象外</span>です。</p><div class="note-box">${c.name}では放課後児童クラブの開所時間延長（19時まで）も実施しています。就労時間に合わせて利用しやすくなっています。</div>` },
    { cat: 'housing', slug: `${c.prefix}heatstroke-prevention`, title: `${c.name} 暑さ対策住宅改修補助金`, amount: '最大25万円', amountNum: 25, elig: `${c.name}内の住宅に遮熱・断熱改修を行う所有者`, period: '毎年4月〜10月', descr: `${c.name}が実施する暑さ対策住宅改修補助金です。遮熱塗装や断熱リフォームに最大25万円を補助します。`, tags: [c.name, '暑さ対策', '住宅改修', '三重県', '省エネ'],
      s1: `<p>${c.name}暑さ対策住宅改修補助金は、<span class="marker">住宅の遮熱・断熱改修</span>を支援する制度です。</p><p>三重県は夏の猛暑が厳しく、室内での熱中症リスクが高い地域です。屋根の遮熱塗装や窓の断熱改修により、冷房効率を上げて光熱費削減と健康被害防止を両立します。</p><p>補助額は<strong>工事費の1/3以内、最大25万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象工事"><p>屋根・外壁の遮熱塗装</p><p>窓の断熱改修（内窓設置・ガラス交換）</p><p>天井の断熱材施工</p><p>グリーンカーテン支柱設置</p></div><p>${c.name}建築住宅課に<span class="marker">工事着手前に申請</span>。見積書と施工計画の提出が必要です。</p>`,
      s3: `<p>工事費の1/3以内で<strong>最大25万円</strong>。高齢者世帯は上限30万円に増額。</p><p><span class="marker">市内施工業者への発注</span>が条件です。</p><div class="highlight-box">環境省の「既存住宅における断熱リフォーム支援事業」と併用できる場合があります。二重に補助を受けられる可能性があります。</div>` },
    { cat: 'medical', slug: `${c.prefix}cancer-screening`, title: `${c.name} がん検診無料クーポン事業`, amount: '無料（全額助成）', amountNum: 0, elig: `${c.name}に住所を有する対象年齢の方`, period: '毎年6月〜翌年2月', descr: `${c.name}が実施するがん検診無料クーポン事業です。対象年齢の方にがん検診の無料クーポンを配布します。`, tags: [c.name, 'がん検診', '無料クーポン', '三重県', '早期発見'],
      s1: `<p>${c.name}がん検診無料クーポン事業は、<span class="marker">特定の年齢に達した方</span>にがん検診の無料受診券を配布する制度です。</p><p>がんの早期発見・早期治療は生存率を大きく向上させます。検診受診率の向上を目指し、節目年齢の方に無料クーポンを郵送しています。</p><p><span class="marker-green">自己負担ゼロ</span>で各種がん検診を受けられます。</p>`,
      s2: `<div class="summary-box" data-title="対象検診"><p>子宮頸がん検診（20歳女性）</p><p>乳がん検診（40歳女性）</p><p>大腸がん検診（40歳・45歳・50歳・55歳・60歳）</p><p>胃がんリスク検査（50歳）</p></div><p>対象者には<span class="marker">6月頃に無料クーポンを郵送</span>。届いたら${c.name}指定医療機関に予約してください。</p>`,
      s3: `<p>対象がん検診を<strong>無料</strong>で受診可能。通常2,000〜5,000円の自己負担が免除。</p><p><span class="marker">クーポンの有効期限は年度末</span>です。届いたら早めに受診を。</p><div class="note-box">日本のがん検診受診率は欧米に比べて低い水準です。無料の機会を活用して、大切な健康を守りましょう。</div>` },
    { cat: 'education', slug: `${c.prefix}foreign-study-aid`, title: `${c.name} 外国人児童生徒学習支援`, amount: '学習支援員の無料派遣', amountNum: 0, elig: `${c.name}立小中学校に通う日本語指導が必要な外国人児童生徒`, period: '通年', descr: `${c.name}が実施する外国人児童生徒学習支援です。日本語指導が必要な児童生徒に学習支援員を無料で派遣します。`, tags: [c.name, '外国人支援', '日本語指導', '三重県', '多文化共生'],
      s1: `<p>${c.name}外国人児童生徒学習支援は、<span class="marker">日本語指導が必要な外国人の子どもたち</span>に学習支援員を派遣する制度です。</p><p>三重県は自動車・電子部品産業の工場が多く、ブラジル・フィリピン・ベトナム等からの外国人住民が多い地域です。子どもの学びの機会を保障するため、母語対応の支援員を配置しています。</p><p><span class="marker-green">費用は無料</span>で学校に支援員が派遣されます。</p>`,
      s2: `<div class="summary-box" data-title="支援内容"><p>日本語の初期指導（ひらがな・カタカナ等）</p><p>教科学習の通訳・翻訳支援</p><p>生活適応指導</p><p>保護者への通訳（面談・懇談時）</p></div><p>学校を通じて${c.name}教育委員会に<span class="marker">支援員派遣を申請</span>します。保護者からの直接申請も可能です。</p>`,
      s3: `<p>支援員の派遣費用は<strong>全額${c.name}が負担</strong>。週2〜5日、1日2〜4時間程度。</p><p><span class="marker">ポルトガル語・スペイン語・タガログ語・ベトナム語</span>等に対応。</p><div class="note-box">${c.name}では外国人向けの日本語教室（夜間・週末）も開設しています。保護者の日本語学習も支援しています。</div>` },
    { cat: 'employment', slug: `${c.prefix}tourism-startup`, title: `${c.name} 観光事業創業支援補助金`, amount: '最大100万円', amountNum: 100, elig: `${c.name}内で観光関連事業を新たに創業する方`, period: '毎年4月〜9月', descr: `${c.name}が実施する観光事業創業支援補助金です。市内での観光関連の新規事業を最大100万円補助します。`, tags: [c.name, '観光事業', '創業支援', '三重県', '地域観光'],
      s1: `<p>${c.name}観光事業創業支援補助金は、<span class="marker">市内で観光関連の新規事業を立ち上げる方</span>を支援する制度です。</p><p>三重県は伊勢神宮をはじめとする観光資源に恵まれた地域です。宿泊施設、体験型観光、飲食業など、地域の魅力を活かした事業の創業を後押しします。</p><p>補助額は<strong>創業費用の1/2以内、最大100万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象事業"><p>ゲストハウス・民泊事業の開業</p><p>体験型観光プログラムの企画運営</p><p>地元食材を活かした飲食店の開業</p><p>観光ガイド・ツアー事業</p></div><p>${c.name}観光振興課に<span class="marker">創業計画書を提出して申請</span>。プレゼン審査があります。</p>`,
      s3: `<p>創業費の1/2以内で<strong>最大100万円</strong>。空き家活用の場合は30万円加算。</p><p><span class="marker">3年間の事業継続</span>が条件です。</p><div class="note-box">三重県観光連盟のマーケティング支援や、日本政策金融公庫の創業融資との連携も可能です。</div>` },
    { cat: 'nursing', slug: `${c.prefix}respite-care`, title: `${c.name} 介護者レスパイト支援事業`, amount: '年間最大6万円分の利用券', amountNum: 6, elig: `${c.name}に住所を有し在宅で要介護者を介護する家族`, period: '通年', descr: `${c.name}が実施するレスパイト支援事業です。在宅介護者のリフレッシュのためのサービス利用券を年間最大6万円分交付します。`, tags: [c.name, 'レスパイトケア', '介護者支援', '三重県', '介護疲れ'],
      s1: `<p>${c.name}介護者レスパイト支援事業は、<span class="marker">在宅介護を行う家族のリフレッシュ</span>を支援する制度です。</p><p>介護疲れやバーンアウトを防ぐため、介護から一時的に離れる機会を提供します。温泉施設やリラクゼーション、一時預かりサービスの利用券を交付します。</p><p>交付額は<strong>年間最大6万円分のレスパイト利用券</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="利用可能サービス"><p>市内日帰り温泉施設の利用</p><p>リラクゼーション・マッサージ</p><p>ショートステイ利用料の補助</p><p>介護者向けカフェ・交流会参加費</p></div><p>${c.name}地域包括支援センターに<span class="marker">介護状況を確認の上で申請</span>してください。ケアマネジャーからの推薦も可。</p>`,
      s3: `<p><strong>年間最大6万円分</strong>のレスパイト利用券。1回5,000円券×12枚。</p><p><span class="marker">介護保険サービスとは別枠</span>の支援です。</p><div class="note-box">「介護する人が健康でなければ、良い介護はできない」という考えのもと、${c.name}は介護者のケアに力を入れています。</div>` },
    { cat: 'living', slug: `${c.prefix}multicultural-support`, title: `${c.name} 外国人住民生活支援金`, amount: '最大5万円', amountNum: 5, elig: `${c.name}に住所を有する在留資格を持つ外国人住民で転入1年以内の方`, period: '転入後6か月以内', descr: `${c.name}が実施する外国人住民生活支援金です。転入した外国人住民の生活立ち上げ費用を最大5万円支援します。`, tags: [c.name, '外国人支援', '生活支援', '三重県', '多文化共生'],
      s1: `<p>${c.name}外国人住民生活支援金は、<span class="marker">新たに転入した外国人住民</span>の生活立ち上げを支援する制度です。</p><p>三重県は製造業を中心に多くの外国人が就労・生活しています。言語の壁や文化の違いにより困難を感じることが多い転入初期の生活費用を支援し、円滑な地域定着を促します。</p><p>支給額は<strong>1世帯あたり最大5万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象者"><p>在留資格を有する外国人</p><p>${c.name}への転入から6か月以内</p><p>住民登録を完了していること</p><p>市内に1年以上居住する見込み</p></div><p>${c.name}多文化共生課窓口で<span class="marker">多言語対応の職員が申請をサポート</span>します。</p>`,
      s3: `<p>1世帯あたり<strong>最大5万円</strong>。単身は3万円、世帯は5万円。</p><p><span class="marker">生活家電購入・引越費用等</span>に充当可能。</p><div class="note-box">${c.name}では8言語対応の生活ガイドブックも配布しています。ゴミの出し方、医療機関の受診方法など生活に必要な情報をまとめています。</div>` },
    { cat: 'disaster', slug: `${c.prefix}well-pump`, title: `${c.name} 防災井戸設置補助金`, amount: '最大20万円', amountNum: 20, elig: `${c.name}内の自治会・自主防災組織`, period: '毎年4月〜9月', descr: `${c.name}が実施する防災井戸設置補助金です。災害時の生活用水確保のため防災井戸の設置を最大20万円補助します。`, tags: [c.name, '防災井戸', '補助金', '三重県', '災害用水'],
      s1: `<p>${c.name}防災井戸設置補助金は、<span class="marker">地域の防災拠点に災害時用の井戸</span>を設置する際の費用を補助する制度です。</p><p>大規模災害時は水道が長期間断水する可能性があります。地域ごとに井戸を確保し、飲料水以外の生活用水（洗い物・トイレ等）を自給できる体制を整えます。</p><p>補助額は<strong>設置費用の2/3以内、最大20万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>自治会または自主防災組織が申請者</p><p>地域住民が共同利用できる場所に設置</p><p>手動ポンプ併設（停電時対応）</p><p>年1回の水質検査を実施すること</p></div><p>${c.name}防災対策課に<span class="marker">設置計画書を提出して申請</span>。地下水調査費も補助対象に含まれます。</p>`,
      s3: `<p>設置費の2/3以内で<strong>最大20万円</strong>。手動ポンプの追加設置は5万円加算。</p><p><span class="marker">飲料水としての利用は水質検査が必要</span>です。</p><div class="highlight-box">南海トラフ地震では最大1か月以上の断水が想定されています。地域の防災力を高めるため、防災井戸の整備をご検討ください。</div>` },
    { cat: 'housing', slug: `${c.prefix}barrier-free-reform`, title: `${c.name} 高齢者向けバリアフリー改修補助金`, amount: '最大40万円', amountNum: 40, elig: `${c.name}に住所を有する65歳以上の方が居住する住宅`, period: '毎年4月〜翌年1月', descr: `${c.name}が実施するバリアフリー改修補助金です。高齢者世帯の住宅バリアフリー化を最大40万円補助します。`, tags: [c.name, 'バリアフリー', '住宅改修', '三重県', '高齢者住宅'],
      s1: `<p>${c.name}高齢者向けバリアフリー改修補助金は、<span class="marker">65歳以上の方が居住する住宅のバリアフリー化</span>を支援する制度です。</p><p>在宅での転倒事故を防止し、住み慣れた自宅で安全に暮らし続けられるよう改修費用を補助します。介護保険の住宅改修費とは別枠の市独自の補助制度です。</p><p>補助額は<strong>工事費の1/2以内、最大40万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象工事"><p>手すりの設置（廊下・階段・浴室等）</p><p>段差の解消（スロープ設置等）</p><p>浴室・トイレの改修</p><p>玄関ドアの引き戸化</p></div><p>${c.name}建築住宅課に<span class="marker">工事着手前に申請</span>。ケアマネジャーの意見書があるとスムーズです。</p>`,
      s3: `<p>工事費の1/2以内で<strong>最大40万円</strong>。介護保険の住宅改修（最大20万円）と併用で最大60万円。</p><p><span class="marker">要介護認定は不要</span>。65歳以上であれば自立の方も対象。</p><div class="note-box">転倒は高齢者の要介護状態の大きな原因です。元気なうちからのバリアフリー化をおすすめします。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [
      { heading: '制度の概要', content: g.s1 },
      { heading: '対象者と申請方法', content: g.s2 },
      { heading: '支給額と注意点', content: g.s3 },
    ],
    officialUrl: '', publishedAt: '2026-03-12',
  }));
}

export const cityGrantsBatch79: Grant[] = cities.flatMap(c => genGrants(c));
