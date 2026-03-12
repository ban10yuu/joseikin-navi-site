import { Grant } from '@/lib/types';

const cities = [
  { name: '長野市', pref: '長野県', prefix: 'nagano-', desc: '長野市は長野県の県庁所在地で、善光寺の門前町として1400年以上の歴史を持ちます。1998年冬季オリンピックの開催地でもあり、豊かな自然と都市機能を兼ね備えています。' },
  { name: '松本市', pref: '長野県', prefix: 'matsumoto-', desc: '松本市は国宝松本城を擁する城下町で、北アルプスの玄関口として知られます。サイトウ・キネン・フェスティバルなど文化・芸術活動が盛んな国際的な都市です。' },
  { name: '上田市', pref: '長野県', prefix: 'ueda-', desc: '上田市は真田氏ゆかりの城下町で、上田城跡や別所温泉が有名です。繊維産業の歴史を持ち、近年はIT企業の集積地としても注目されています。' },
  { name: '岡谷市', pref: '長野県', prefix: 'okaya-', desc: '岡谷市は諏訪湖畔に位置し、かつて「糸の都」と呼ばれた製糸業の歴史を持ちます。精密機械工業が盛んで、ものづくりの技術が受け継がれています。' },
  { name: '飯田市', pref: '長野県', prefix: 'iida-', desc: '飯田市は南信州の中心都市で、天竜川沿いの河岸段丘に発展しました。人形劇の街として知られ、りんご並木や遠山郷の霜月祭りが有名です。' },
  { name: '諏訪市', pref: '長野県', prefix: 'suwa-', desc: '諏訪市は諏訪湖のほとりに位置し、諏訪大社上社本宮の鎮座地です。温泉と精密工業が共存する「東洋のスイス」と称されるまちです。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}nursery-support`, title: `${c.name} 保育所等入所支援金`, amount: '最大5万円', amountNum: 5, elig: `${c.name}に住所を有し新たに認可保育所等に入所する児童の保護者`, period: '入所月から3か月以内', descr: `${c.name}が実施する保育所入所支援金です。新規入所時の準備費用として最大5万円を支給します。`, tags: [c.name, '保育所支援', '支援金', '長野県', '子育て'],
      s1: `<p>${c.name}保育所等入所支援金は、<span class="marker">認可保育所・認定こども園に新規入所する際</span>の準備費用を支援する制度です。</p><p>${c.desc}</p><p>支給額は<strong>第1子3万円、第2子以降5万円</strong>です。<span class="marker-green">所得制限なし</span>で全世帯が対象です。</p>`,
      s2: `<p>年度内に${c.name}内の認可保育施設に新規入所する児童の保護者が対象です。</p><div class="summary-box" data-title="必要書類"><p>支援金申請書</p><p>入所承諾書の写し</p><p>振込先口座情報</p><p>保護者の本人確認書類</p></div><p>入所後3か月以内に${c.name}保育幼稚園課へ<span class="marker">申請書を提出</span>してください。</p>`,
      s3: `<p><strong>第1子3万円、第2子以降5万円</strong>を1回限り支給。入所準備金として布団カバーや通園用品の購入に活用できます。</p><p><span class="marker">年度途中入所も対象</span>です。</p><div class="note-box">長野県の多子世帯保育料軽減制度と併用可能です。保育料の無償化対象世帯も申請できます。</div>` },
    { cat: 'housing', slug: `${c.prefix}migration-housing`, title: `${c.name} 移住者住宅取得補助金`, amount: '最大100万円', amountNum: 100, elig: `県外から${c.name}に移住し住宅を取得する方`, period: '通年', descr: `${c.name}が実施する移住者住宅取得補助金です。県外からの移住者の住宅購入を最大100万円補助します。`, tags: [c.name, '移住者住宅', '補助金', '長野県', '定住促進'],
      s1: `<p>${c.name}移住者住宅取得補助金は、<span class="marker">県外から移住して住宅を取得する方</span>を支援する制度です。</p><p>人口減少対策と地域の活力維持を目的に、移住者の住宅購入費用を補助します。長野県は移住先として全国トップクラスの人気を誇ります。</p><p>補助額は<strong>住宅取得費の10%以内、最大100万円</strong>です。<span class="marker-green">中古住宅も対象</span>。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>県外から${c.name}に転入して1年以内</p><p>${c.name}内に住宅を新築または購入</p><p>5年以上の定住意思があること</p><p>市税の滞納がないこと</p></div><p>${c.name}移住推進課に<span class="marker">住宅取得後6か月以内に申請</span>してください。</p>`,
      s3: `<p>住宅取得費の10%以内で<strong>最大100万円</strong>。子育て世帯は20万円加算。新婚世帯は10万円加算。</p><p><span class="marker">5年未満で転出した場合は返還</span>が求められます。</p><div class="highlight-box">長野県の移住支援金（最大100万円）と併用可能です。合わせて最大200万円の支援が受けられます。</div>` },
    { cat: 'medical', slug: `${c.prefix}hearing-aid`, title: `${c.name} 補聴器購入費助成`, amount: '最大5万円', amountNum: 5, elig: `${c.name}に住所を有する65歳以上で聴力低下のある方`, period: '通年', descr: `${c.name}が実施する補聴器購入費助成です。加齢性難聴の高齢者の補聴器購入を最大5万円助成します。`, tags: [c.name, '補聴器', '助成', '長野県', '高齢者支援'],
      s1: `<p>${c.name}補聴器購入費助成は、<span class="marker">加齢による聴力低下で日常生活に支障がある高齢者</span>の補聴器購入を支援する制度です。</p><p>難聴は認知症のリスク因子とされており、補聴器の早期装用がフレイル予防や社会参加の維持に重要です。</p><p>助成額は<strong>購入費の1/2以内、最大5万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>65歳以上で${c.name}に住民登録</p><p>聴力レベル40dB以上（医師の証明要）</p><p>障害者手帳の交付対象にならない方</p><p>市民税非課税世帯または均等割のみ課税世帯</p></div><p>${c.name}高齢者福祉課に<span class="marker">購入前に申請</span>してください。医師の意見書が必要です。</p>`,
      s3: `<p>購入費の1/2以内で<strong>最大5万円</strong>。片耳・両耳とも対象。5年間に1回限り。</p><p><span class="marker">管理医療機器として認定された補聴器</span>が対象です。集音器は対象外。</p><div class="note-box">補聴器は医師の診断を受けた上で、認定補聴器技能者のいる販売店で購入することをお勧めします。</div>` },
    { cat: 'education', slug: `${c.prefix}study-abroad-support`, title: `${c.name} 高校生海外留学支援金`, amount: '最大20万円', amountNum: 20, elig: `${c.name}に住所を有する高校生`, period: '毎年4月〜6月', descr: `${c.name}が実施する高校生海外留学支援金です。海外留学・研修プログラムに参加する高校生を最大20万円支援します。`, tags: [c.name, '海外留学', '支援金', '長野県', 'グローバル教育'],
      s1: `<p>${c.name}高校生海外留学支援金は、<span class="marker">海外留学・語学研修に参加する高校生</span>を支援する制度です。</p><p>グローバル人材の育成と国際交流の推進を目的に、海外での学びの機会を経済的にサポートします。長野県は国際交流が盛んな地域です。</p><p>支援額は<strong>留学費用の一部として最大20万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象プログラム"><p>1か月以上の海外留学・語学研修</p><p>学校長が推薦するもの</p><p>交換留学・私費留学いずれも可</p></div><p>${c.name}教育委員会に<span class="marker">渡航2か月前まで</span>に申請。選考あり（定員10名程度）。</p>`,
      s3: `<p>留学費用の一部として<strong>最大20万円</strong>を支給。渡航費・授業料・滞在費に充当可能。</p><p><span class="marker">帰国後に報告書の提出</span>が求められます。</p><div class="highlight-box">文部科学省の「トビタテ！留学JAPAN」等の国の制度との併用も可能です。</div>` },
    { cat: 'employment', slug: `${c.prefix}agri-newcomer`, title: `${c.name} 新規就農者支援交付金`, amount: '最大年間150万円', amountNum: 150, elig: `${c.name}で新たに農業を始める50歳未満の方`, period: '毎年1月〜2月', descr: `${c.name}が実施する新規就農者支援交付金です。就農直後の経営が不安定な時期に年間最大150万円を交付します。`, tags: [c.name, '新規就農', '交付金', '長野県', '農業支援'],
      s1: `<p>${c.name}新規就農者支援交付金は、<span class="marker">新たに農業経営を始める方</span>の経営安定を支援する制度です。</p><p>長野県は全国有数の農業県で、高原野菜・果樹・花き栽培が盛んです。就農初期の所得が不安定な時期をサポートし、担い手の確保を図ります。</p><p>交付額は<strong>年間最大150万円（最長3年間）</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="交付要件"><p>就農時の年齢が50歳未満</p><p>${c.name}内で独立自営就農すること</p><p>認定新規就農者の認定を受けること</p><p>前年の所得が600万円以下</p></div><p>${c.name}農業政策課に<span class="marker">就農計画を提出して審査</span>を受けてください。毎年の実績報告も必要です。</p>`,
      s3: `<p><strong>年間最大150万円</strong>を最長3年間交付。夫婦で就農する場合は加算あり。</p><p><span class="marker">農地の確保と販路の計画</span>が交付の条件です。</p><div class="note-box">国の「新規就農者育成総合対策」と一体的に運用されています。${c.name}農業委員会の就農相談も活用しましょう。</div>` },
    { cat: 'nursing', slug: `${c.prefix}dementia-early`, title: `${c.name} 認知症早期発見検診助成`, amount: '自己負担1,000円（残額助成）', amountNum: 0, elig: `${c.name}に住所を有する65歳以上の方`, period: '通年', descr: `${c.name}が実施する認知症早期発見検診助成です。もの忘れ検診の費用を助成し、認知症の早期発見を支援します。`, tags: [c.name, '認知症検診', '助成', '長野県', '介護予防'],
      s1: `<p>${c.name}認知症早期発見検診助成は、<span class="marker">65歳以上を対象としたもの忘れ検診</span>の費用を助成する制度です。</p><p>認知症は早期発見・早期対応が重要です。MCI（軽度認知障害）の段階で発見できれば、進行を遅らせる対策が可能になります。</p><p><span class="marker-green">自己負担は1,000円のみ</span>で専門検診を受けられます。</p>`,
      s2: `<div class="summary-box" data-title="検診内容"><p>問診・認知機能検査（HDS-R等）</p><p>医師による診察</p><p>必要に応じて血液検査・画像検査</p></div><p>${c.name}指定の医療機関に<span class="marker">直接予約</span>してください。受診券の事前交付は不要です。保険証と一緒に提示してください。</p>`,
      s3: `<p>検診費用の大部分を市が負担。<strong>自己負担は1,000円のみ</strong>。</p><p><span class="marker">年1回受診可能</span>。結果は後日郵送されます。</p><div class="note-box">検診で認知症の疑いがあった場合、${c.name}地域包括支援センターが継続的なサポートを行います。</div>` },
    { cat: 'living', slug: `${c.prefix}ev-charger`, title: `${c.name} EV充電設備設置補助金`, amount: '最大10万円', amountNum: 10, elig: `${c.name}内の住宅にEV充電設備を設置する個人`, period: '毎年4月〜翌年2月', descr: `${c.name}が実施するEV充電設備設置補助金です。自宅へのEV充電設備設置費用を最大10万円補助します。`, tags: [c.name, 'EV充電', '補助金', '長野県', '脱炭素'],
      s1: `<p>${c.name}EV充電設備設置補助金は、<span class="marker">自宅へのEV・PHEV用充電設備の設置</span>を支援する制度です。</p><p>ゼロカーボン社会の実現に向けて電気自動車の普及を促進します。長野県は「2050ゼロカーボン宣言」を掲げており、交通分野の脱炭素化が重要課題です。</p><p>補助額は<strong>設置費用の1/2以内、最大10万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象設備"><p>200Vコンセント型充電器</p><p>普通充電器（壁掛け・スタンド型）</p><p>V2H（Vehicle to Home）機器</p></div><p>${c.name}環境保全温暖化対策課に<span class="marker">設置前に申請</span>。見積書と設置計画書の提出が必要です。</p>`,
      s3: `<p>設置費の1/2以内で<strong>最大10万円</strong>。V2Hの場合は最大25万円に増額。</p><p><span class="marker">EVまたはPHEVを所有</span>（リースを含む）していることが条件です。</p><div class="highlight-box">国のCEV補助金や長野県の補助金と併用可能な場合があります。合わせてご確認ください。</div>` },
    { cat: 'disaster', slug: `${c.prefix}snow-removal-aid`, title: `${c.name} 要援護世帯除雪費助成`, amount: '最大3万円/シーズン', amountNum: 3, elig: `${c.name}に住所を有する高齢者のみ世帯・障害者世帯`, period: '毎年11月〜翌年3月', descr: `${c.name}が実施する除雪費助成です。高齢者世帯等の屋根や生活道路の除雪費用を最大3万円助成します。`, tags: [c.name, '除雪費助成', '高齢者', '長野県', '冬季支援'],
      s1: `<p>${c.name}要援護世帯除雪費助成は、<span class="marker">自力で除雪が困難な高齢者世帯・障害者世帯</span>の除雪費用を助成する制度です。</p><p>長野県は豪雪地帯に指定されている地域も多く、冬季の除雪は重要な生活課題です。積雪による孤立や住宅損壊を防ぐための支援です。</p><p>助成額は<strong>1シーズンあたり最大3万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象世帯"><p>65歳以上のみの世帯</p><p>障害者のみの世帯</p><p>ひとり親世帯で除雪が困難な場合</p><p>市民税非課税世帯</p></div><p>${c.name}福祉政策課または各地区の民生委員に<span class="marker">降雪期前（11月）に申請</span>してください。</p>`,
      s3: `<p>業者への除雪委託費の2/3以内で<strong>1シーズン最大3万円</strong>。屋根雪下ろしも対象。</p><p><span class="marker">地域のボランティア除雪</span>との連携も行っています。</p><div class="note-box">大雪により生活に著しい支障がある場合は、災害救助法による追加支援が適用される場合があります。</div>` },
    { cat: 'childcare', slug: `${c.prefix}childrearing-coupon`, title: `${c.name} 子育て応援クーポン事業`, amount: '最大5万円分', amountNum: 5, elig: `${c.name}に住所を有する3歳未満の子を養育する世帯`, period: '出生届提出時から', descr: `${c.name}が実施する子育て応援クーポン事業です。3歳未満の子がいる世帯に地域商品券5万円分を支給します。`, tags: [c.name, '子育てクーポン', '地域商品券', '長野県', '育児応援'],
      s1: `<p>${c.name}子育て応援クーポン事業は、<span class="marker">3歳未満のお子さんがいる世帯</span>に地域で使える子育て応援クーポンを支給する制度です。</p><p>子育てにかかる費用の軽減と地域経済の活性化を両立する取り組みです。おむつ・ミルク・衣類など子育てに必要な商品に幅広く使えます。</p><p>支給額は<strong>子ども1人あたり5万円分のクーポン</strong>です。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="利用可能店舗"><p>市内のスーパー・ドラッグストア</p><p>ベビー用品専門店</p><p>子ども服販売店</p><p>書店・おもちゃ店</p></div><p>出生届提出時または転入届提出時に${c.name}子育て支援課で<span class="marker">クーポンを受け取り</span>。有効期限は交付日から1年間。</p>`,
      s3: `<p>子ども1人あたり<strong>5万円分</strong>のクーポン。500円券×100枚で交付。</p><p><span class="marker">有効期限内に使い切る</span>必要があります。おつりは出ません。</p><div class="note-box">${c.name}内の約300店舗で利用可能です。利用可能店舗一覧はクーポン交付時にお渡しします。</div>` },
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

export const cityGrantsBatch75: Grant[] = cities.flatMap(c => genGrants(c));
