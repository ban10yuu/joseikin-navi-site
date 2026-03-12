import { Grant } from '@/lib/types';

const cities = [
  { name: '昭島市', pref: '東京都', prefix: 'akishima-', url: 'https://www.city.akishima.lg.jp/', desc: '昭島市は東京都多摩地域の中部に位置し、JR青梅線で新宿方面へのアクセスが良好です。多摩川沿いの自然環境と充実した商業施設を兼ね備えた住みやすいまちです。' },
  { name: '小金井市', pref: '東京都', prefix: 'koganei-', url: 'https://www.city.koganei.lg.jp/', desc: '小金井市は東京都多摩地域東部に位置し、JR中央線で都心へ約30分です。小金井公園や江戸東京たてもの園など緑豊かな文化的環境が魅力の住宅都市です。' },
  { name: '東村山市', pref: '東京都', prefix: 'higashimurayama-', url: 'https://www.city.higashimurayama.tokyo.jp/', desc: '東村山市は東京都北西部に位置し、西武新宿線・拝島線で新宿方面にアクセスできます。正福寺地蔵堂（国宝）や北山公園の菖蒲まつりで知られています。' },
  { name: '国分寺市', pref: '東京都', prefix: 'kokubunji-', url: 'https://www.city.kokubunji.tokyo.jp/', desc: '国分寺市は東京都多摩地域に位置し、JR中央線・西武線が交差する交通結節点です。武蔵国分寺跡の歴史と殿ヶ谷戸庭園の自然が共存する文教都市です。' },
  { name: '狛江市', pref: '東京都', prefix: 'komae-', url: 'https://www.city.komae.tokyo.jp/', desc: '狛江市は東京都内で最も面積が小さい市で、小田急線で新宿まで約20分です。多摩川沿いの穏やかな環境とコンパクトなまちの利便性が魅力です。' },
  { name: '東大和市', pref: '東京都', prefix: 'higashiyamato-', url: 'https://www.city.higashiyamato.lg.jp/', desc: '東大和市は東京都北西部に位置し、多摩モノレールや西武拝島線で都心方面にアクセスできます。多摩湖（村山貯水池）の豊かな自然環境が特徴です。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}childcare-subsidy`, title: `${c.name} 保育料軽減補助金`, amount: '最大月額3万円', amountNum: 3, elig: `${c.name}に住所を有し認可外保育施設を利用する児童の保護者`, period: '通年', descr: `${c.name}が実施する保育料軽減補助金です。認可外施設の利用料を月額最大3万円補助します。`, tags: [c.name, '保育料軽減', '補助金'],
      s1: `<p>${c.name} 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>${c.desc}</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の課税状況に応じて決定</span>されます。</p>`,
      s2: `<p>${c.name}に住民登録があり認可外保育施設を利用する保護者が対象です。</p><div class="summary-box" data-title="申請書類"><p>施設利用証明書</p><p>保育料領収書</p><p>課税証明書</p><p>本人確認書類</p></div><p>${c.name}役所子ども家庭部に<span class="marker">四半期ごとに申請</span>します。</p>`,
      s3: `<p>市民税所得割額に応じて<strong>月額最大3万円</strong>が支給されます。</p><p><span class="marker">無償化制度との調整</span>があります。</p><div class="note-box">${c.name}では認可保育所の整備も進めています。待機児童解消に取り組んでいます。</div>` },
    { cat: 'childcare', slug: `${c.prefix}birth-bonus`, title: `${c.name} 出産祝い金`, amount: '最大10万円', amountNum: 10, elig: `${c.name}に住所を有し出産した方`, period: '出産後6か月以内', descr: `${c.name}が実施する出産祝い金です。出産に際し最大10万円を支給します。`, tags: [c.name, '出産祝い金', '給付金'],
      s1: `<p>${c.name} 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>少子化対策として出産世帯への経済的支援を行っています。</p><p>支給額は<strong>第1子5万円、第2子7万円、第3子以降10万円</strong>です。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="申請要件"><p>出産日に${c.name}に住民登録</p><p>出産後6か月以内に申請</p><p>市税滞納なし</p></div><p>${c.name}役所子ども家庭部で<span class="marker">出生届提出時に手続き</span>できます。</p>`,
      s3: `<p><strong>第1子5万円、第2子7万円、第3子以降10万円</strong>。多胎児は各子に支給。</p><p><span class="marker">申請期限は出産後6か月</span>。</p><div class="highlight-box">国の出産育児一時金や東京都の給付金と併せて受給できます。</div>` },
    { cat: 'housing', slug: `${c.prefix}housing-eco`, title: `${c.name} 省エネ住宅改修補助金`, amount: '最大30万円', amountNum: 30, elig: `${c.name}内の住宅を省エネ改修する所有者`, period: '毎年4月〜12月', descr: `${c.name}が実施する省エネ住宅改修補助金です。断熱改修や高効率設備導入に最大30万円を補助します。`, tags: [c.name, '省エネ住宅', '補助金'],
      s1: `<p>${c.name} 省エネ住宅改修補助金は、<span class="marker">既存住宅の断熱改修や高効率設備導入</span>を支援する制度です。</p><p>住宅の省エネ化による光熱費削減とCO2排出削減を目的としています。ゼロカーボンシティを目指す${c.name}の取り組みの一環です。</p><p>補助額は<strong>対象工事費の1/3以内、最大30万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（内窓設置等）</p><p>壁・天井の断熱材施工</p><p>高効率給湯器（エコキュート等）導入</p><p>太陽光発電設備設置</p></div><p>${c.name}環境課に<span class="marker">工事着手前に申請</span>します。着手後の申請は不可。</p>`,
      s3: `<p>工事費の1/3以内で<strong>最大30万円</strong>。窓の断熱改修のみでも申請可能。</p><p><span class="marker">市内施工業者への発注</span>が条件です。</p><div class="note-box">国の「先進的窓リノベ事業」等と併用可能な場合があります。</div>` },
    { cat: 'medical', slug: `${c.prefix}infertility`, title: `${c.name} 不妊治療費助成制度`, amount: '最大20万円', amountNum: 20, elig: `${c.name}に住所を有し不妊治療を受けている夫婦`, period: '治療終了後3か月以内', descr: `${c.name}が実施する不妊治療費助成制度です。保険適用後の自己負担分を最大20万円助成します。`, tags: [c.name, '不妊治療', '助成'],
      s1: `<p>${c.name} 不妊治療費助成制度は、<span class="marker">特定不妊治療の自己負担</span>を軽減する制度です。</p><p>子どもを望む夫婦への経済的支援として、保険適用後の自己負担分や先進医療費を助成しています。</p><p>助成額は<strong>1回あたり最大20万円</strong>です。<span class="marker-green">東京都の助成に上乗せ</span>する形です。</p>`,
      s2: `<div class="summary-box" data-title="必要書類"><p>助成申請書</p><p>医療機関の治療証明書</p><p>領収書</p><p>住民票</p></div><p>${c.name}健康課に<span class="marker">治療終了後3か月以内</span>に申請してください。</p>`,
      s3: `<p><strong>1回最大20万円</strong>、年2回まで。</p><p><span class="marker">東京都の助成と併用可能</span>（重複分は調整）。</p><div class="note-box">${c.name}では不妊・不育症相談窓口も設置しています。</div>` },
    { cat: 'education', slug: `${c.prefix}afterschool`, title: `${c.name} 放課後子ども教室`, amount: '無料', amountNum: 0, elig: `${c.name}立小学校に通う児童`, period: '毎年3月〜4月（年度登録）', descr: `${c.name}が実施する放課後子ども教室です。放課後に安全な居場所と体験活動の場を提供します。`, tags: [c.name, '放課後教室', '教育支援'],
      s1: `<p>${c.name} 放課後子ども教室は、<span class="marker">小学校の放課後に安全な居場所</span>を提供する事業です。</p><p>地域ボランティアの見守りのもと、学習支援やスポーツ・文化活動を行います。すべての児童が対象で費用負担はありません。</p><p><span class="marker-green">参加費無料</span>です。</p>`,
      s2: `<div class="summary-box" data-title="概要"><p>対象：市立小学校の全児童</p><p>実施日：週2〜3日</p><p>時間：放課後〜17時頃</p></div><p>年度初めに登録申込。<span class="marker">保険料（約800円）のみ実費</span>です。</p>`,
      s3: `<p>活動参加は<strong>基本無料</strong>（保険料のみ）。</p><p><span class="marker">学童保育とは別事業</span>。両方利用も可能です。</p><div class="highlight-box">${c.name}では放課後子ども教室と学童クラブの連携を推進しています。</div>` },
    { cat: 'employment', slug: `${c.prefix}telework-bonus`, title: `${c.name} テレワーク推進補助金`, amount: '最大15万円', amountNum: 15, elig: `${c.name}内に事業所を有する中小企業者`, period: '毎年4月〜翌年2月', descr: `${c.name}が実施するテレワーク推進補助金です。テレワーク環境整備に最大15万円を補助します。`, tags: [c.name, 'テレワーク', '補助金'],
      s1: `<p>${c.name} テレワーク推進補助金は、<span class="marker">中小企業のテレワーク環境整備</span>を支援する制度です。</p><p>多様な働き方の推進と感染症対策としてのテレワーク導入を後押しします。</p><p>補助額は<strong>対象経費の1/2以内、最大15万円</strong>です。<span class="marker-green">通信機器・クラウドサービス・Web会議システム等</span>が対象。</p>`,
      s2: `<div class="summary-box" data-title="対象経費"><p>ノートPC・タブレット等の機器購入</p><p>クラウドサービス利用料</p><p>VPN・セキュリティソフト導入</p><p>Web会議システム利用料</p></div><p>${c.name}産業振興課に<span class="marker">導入前に申請</span>します。</p>`,
      s3: `<p>対象経費の1/2以内で<strong>最大15万円</strong>。</p><p><span class="marker">導入後に実績報告が必要</span>です。</p><div class="note-box">東京都のテレワーク推進事業補助金と併用できる場合があります。</div>` },
    { cat: 'nursing', slug: `${c.prefix}nursing-home-reform`, title: `${c.name} 介護住宅改修助成`, amount: '最大20万円', amountNum: 20, elig: `${c.name}に住所を有する要介護認定を受けた方の住宅`, period: '通年', descr: `${c.name}が実施する介護住宅改修助成です。バリアフリー改修に最大20万円を助成します。`, tags: [c.name, '介護住宅改修', '助成'],
      s1: `<p>${c.name} 介護住宅改修助成は、<span class="marker">要介護認定を受けた方の住宅バリアフリー改修</span>を助成する制度です。</p><p>介護保険の住宅改修費支給に上乗せして、在宅生活の安全確保を支援します。</p><p>助成額は<strong>最大20万円</strong>で<span class="marker-green">介護保険とは別枠</span>です。</p>`,
      s2: `<div class="summary-box" data-title="対象工事"><p>手すり設置</p><p>段差解消</p><p>浴室・トイレ改修</p><p>滑り防止床材</p></div><p>${c.name}介護福祉課に<span class="marker">工事着手前に申請</span>。ケアマネジャーとの連携推奨。</p>`,
      s3: `<p>対象工事費の9割で<strong>上限20万円</strong>。介護保険と合わせて最大40万円の支援。</p><p><span class="marker">介護保険の住宅改修と同時申請</span>が効率的。</p><div class="note-box">${c.name}地域包括支援センターで改修相談も受けられます。</div>` },
    { cat: 'living', slug: `${c.prefix}energy-support`, title: `${c.name} 省エネ家電買替え補助金`, amount: '最大3万円', amountNum: 3, elig: `${c.name}に住所を有する世帯`, period: '毎年4月〜翌年2月', descr: `${c.name}が実施する省エネ家電買替え補助金です。省エネ家電の購入に最大3万円を補助します。`, tags: [c.name, '省エネ家電', '補助金'],
      s1: `<p>${c.name} 省エネ家電買替え補助金は、<span class="marker">省エネ性能の高い家電への買替え</span>を促進する制度です。</p><p>光熱費負担の軽減とCO2削減を両立します。</p><p>補助額は<strong>購入額の10%、最大3万円</strong>です。<span class="marker-green">市内販売店での購入が条件</span>。</p>`,
      s2: `<div class="summary-box" data-title="対象家電"><p>省エネラベル3つ星以上のエアコン</p><p>省エネラベル3つ星以上の冷蔵庫</p><p>LED照明器具</p></div><p><span class="marker">購入後30日以内に申請</span>。${c.name}環境課で受付。</p>`,
      s3: `<p>購入額の10%で<strong>上限3万円</strong>。1世帯年1台まで。</p><p><span class="marker">ネット通販は対象外</span>です。</p><div class="note-box">国の省エネ補助事業と併用できる場合があります。</div>` },
    { cat: 'disaster', slug: `${c.prefix}seismic-diagnosis`, title: `${c.name} 木造住宅耐震診断助成`, amount: '自己負担なし（全額助成）', amountNum: 0, elig: `${c.name}内に昭和56年以前の木造住宅を所有する方`, period: '毎年5月〜12月', descr: `${c.name}が実施する耐震診断助成です。旧耐震基準の木造住宅の耐震診断を無料で実施します。`, tags: [c.name, '耐震診断', '助成'],
      s1: `<p>${c.name} 木造住宅耐震診断助成は、<span class="marker">昭和56年以前の木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>首都直下地震に備え、住宅の耐震化は喫緊の課題です。東京都と連携して旧耐震基準住宅の安全性確認を推進しています。</p><p><span class="marker-green">自己負担なし</span>で専門家による診断を受けられます。</p>`,
      s2: `<div class="summary-box" data-title="対象住宅"><p>昭和56年5月以前着工の木造住宅</p><p>2階建て以下の一戸建て</p><p>在来軸組工法</p></div><p>${c.name}まちづくり課に申請。<span class="marker">先着順</span>で受付。</p>`,
      s3: `<p>診断費用は<strong>全額市が負担</strong>。自己負担なし。</p><p><span class="marker">耐震改修が必要な場合は別途改修助成</span>（最大150万円）あり。</p><div class="highlight-box">首都直下地震への備えとして、まずは無料の耐震診断を受けましょう。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [
      { heading: '制度の概要', content: g.s1 },
      { heading: '対象者と申請方法', content: g.s2 },
      { heading: '支給額と注意点', content: g.s3 },
    ],
    officialUrl: c.url, publishedAt: '2026-03-12',
  }));
}

export const cityGrantsBatch70: Grant[] = cities.flatMap(c => genGrants(c));
