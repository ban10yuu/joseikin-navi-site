import { Grant } from '@/lib/types';

const cities = [
  { name: '逗子市', pref: '神奈川県', prefix: 'zushi-', url: 'https://www.city.zushi.kanagawa.jp/', desc: '逗子市は神奈川県南東部の三浦半島に位置し、逗子海岸で知られる湘南エリアの住宅都市です。JR横須賀線で東京方面へ約1時間のアクセスで、海と山に囲まれた自然豊かな環境が魅力です。' },
  { name: '南足柄市', pref: '神奈川県', prefix: 'minamiashigara-', url: 'https://www.city.minamiashigara.kanagawa.jp/', desc: '南足柄市は神奈川県西部に位置し、足柄山の金太郎伝説で知られるまちです。豊かな自然と温泉資源に恵まれ、大雄山最乗寺は県内有数のパワースポットです。' },
  { name: '綾瀬市', pref: '神奈川県', prefix: 'ayase-', url: 'https://www.city.ayase.kanagawa.jp/', desc: '綾瀬市は神奈川県中央部に位置し、藤沢市・海老名市に隣接する住宅都市です。在日米軍厚木基地の一部が市域にあり、製造業も盛んな地域です。' },
  { name: '三浦市', pref: '神奈川県', prefix: 'miura-', url: 'https://www.city.miura.kanagawa.jp/', desc: '三浦市は三浦半島の最南端に位置し、マグロで有名な三崎港があります。三浦大根やスイカの産地でもあり、海岸線の景観と豊かな食文化が魅力です。' },
  { name: '座間市', pref: '神奈川県', prefix: 'zama-', url: 'https://www.city.zama.kanagawa.jp/', desc: '座間市は神奈川県中央部に位置し、小田急線で新宿方面へのアクセスが良好です。座間のひまわりまつりが有名で、夏には約55万本のひまわりが咲き誇ります。' },
  { name: '海老名市', pref: '神奈川県', prefix: 'ebina-', url: 'https://www.city.ebina.kanagawa.jp/', desc: '海老名市は神奈川県中央部に位置し、小田急線・相鉄線・JR相模線が交差する交通結節点です。ViNA GARDENSなど大規模商業施設の開発が進み、人口増加が続く活気あるまちです。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}childcare-subsidy`, title: `${c.name} 保育料軽減補助金`, amount: '最大月額3万円', amountNum: 3, elig: `${c.name}に住所を有し認可外保育施設を利用する児童の保護者`, period: '通年', descr: `${c.name}が実施する保育料軽減補助金です。認可外施設の利用料を月額最大3万円補助します。`, tags: [c.name, '保育料軽減', '補助金'],
      s1: `<p>${c.name} 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>${c.desc}</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の課税状況に応じて決定</span>されます。</p>`,
      s2: `<p>${c.name}に住民登録があり認可外保育施設を利用する保護者が対象です。</p><div class="summary-box" data-title="申請書類"><p>施設利用証明書</p><p>保育料領収書</p><p>課税証明書</p><p>本人確認書類</p></div><p>${c.name}役所こども課に<span class="marker">四半期ごとに申請</span>します。</p>`,
      s3: `<p>市民税所得割額に応じて<strong>月額最大3万円</strong>が支給されます。</p><p><span class="marker">無償化制度との調整</span>があります。</p><div class="note-box">${c.name}では待機児童解消にも取り組んでいます。</div>` },
    { cat: 'childcare', slug: `${c.prefix}birth-bonus`, title: `${c.name} 出産祝い金`, amount: '最大10万円', amountNum: 10, elig: `${c.name}に住所を有し出産した方`, period: '出産後6か月以内', descr: `${c.name}が実施する出産祝い金です。出産に際し最大10万円を支給します。`, tags: [c.name, '出産祝い金', '給付金'],
      s1: `<p>${c.name} 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>少子化対策として出産世帯への経済的支援を行い、安心して子育てできる環境を整えています。</p><p>支給額は<strong>第1子5万円、第2子7万円、第3子以降10万円</strong>です。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="申請要件"><p>出産日に${c.name}に住民登録</p><p>出産後6か月以内に申請</p><p>市税滞納なし</p></div><p>${c.name}役所こども課で<span class="marker">出生届提出時に手続き</span>できます。</p>`,
      s3: `<p><strong>第1子5万円、第2子7万円、第3子以降10万円</strong>。多胎児は各子に支給。</p><p><span class="marker">申請期限は出産後6か月</span>。</p><div class="highlight-box">国の出産育児一時金や神奈川県の給付金と併せて受給できます。</div>` },
    { cat: 'housing', slug: `${c.prefix}housing-purchase`, title: `${c.name} 住宅取得支援補助金`, amount: '最大50万円', amountNum: 50, elig: `${c.name}内に住宅を取得する子育て・若年世帯`, period: '通年（予算に達し次第終了）', descr: `${c.name}が実施する住宅取得支援補助金です。定住促進のため最大50万円を補助します。`, tags: [c.name, '住宅取得', '補助金'],
      s1: `<p>${c.name} 住宅取得支援補助金は、<span class="marker">市内に住宅を取得する子育て・若年世帯</span>を支援する制度です。</p><p>定住人口の確保を目指し、住宅取得にかかる費用の一部を補助しています。</p><p>補助額は<strong>基本30万円、加算で最大50万円</strong>です。<span class="marker-green">市外からの転入世帯に加算</span>があります。</p>`,
      s2: `<div class="summary-box" data-title="主な要件"><p>市内に新築・中古住宅を取得</p><p>中学生以下の子がいる世帯または夫婦ともに40歳未満</p><p>5年以上定住意思</p><p>市税滞納なし</p></div><p>${c.name}都市計画課に<span class="marker">取得後1年以内に申請</span>。</p>`,
      s3: `<p>基本<strong>30万円</strong>、転入<strong>+10万円</strong>、子育て<strong>+10万円</strong>で<strong>最大50万円</strong>。</p><p><span class="marker">5年以内転出で返還</span>対象です。</p><div class="note-box">住宅ローン減税など国の制度との併用も可能です。</div>` },
    { cat: 'medical', slug: `${c.prefix}infertility`, title: `${c.name} 不妊治療費助成`, amount: '最大15万円', amountNum: 15, elig: `${c.name}に住所を有し不妊治療を受けている夫婦`, period: '治療終了後3か月以内', descr: `${c.name}が実施する不妊治療費助成です。自己負担分を最大15万円助成します。`, tags: [c.name, '不妊治療', '助成'],
      s1: `<p>${c.name} 不妊治療費助成は、<span class="marker">特定不妊治療の自己負担</span>を軽減する制度です。</p><p>子どもを望む夫婦の経済的負担を和らげるため、市独自の助成を行っています。</p><p>助成額は<strong>1回最大15万円</strong>です。<span class="marker-green">年間2回まで</span>。</p>`,
      s2: `<div class="summary-box" data-title="必要書類"><p>助成申請書</p><p>治療証明書</p><p>領収書</p><p>住民票</p></div><p>${c.name}健康づくり課に<span class="marker">治療終了後3か月以内</span>に申請。</p>`,
      s3: `<p><strong>1回最大15万円</strong>、年2回まで。</p><p><span class="marker">神奈川県の助成と併用可能</span>。</p><div class="note-box">不妊・不育症相談窓口も設置しています。</div>` },
    { cat: 'education', slug: `${c.prefix}scholarship`, title: `${c.name} 奨学金制度`, amount: '最大月額4万円', amountNum: 4, elig: `${c.name}に住所を有する世帯の高校生・大学生`, period: '毎年4月〜5月', descr: `${c.name}が実施する奨学金制度です。月額最大4万円を無利子で貸与します。`, tags: [c.name, '奨学金', '教育支援'],
      s1: `<p>${c.name} 奨学金制度は、<span class="marker">経済的理由で修学困難な学生</span>に無利子で奨学金を貸与する制度です。</p><p>すべての若者に学びの機会を保障するため運営しています。</p><p>貸与額は<strong>高校生月額1万5千円、大学生月額4万円</strong>です。<span class="marker-green">無利子</span>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>保護者が${c.name}に住所を有すること</p><p>高校・大学等に在学中</p><p>成績・所得基準を満たすこと</p></div><p>${c.name}教育委員会に<span class="marker">毎年4〜5月に申請</span>。選考制。</p>`,
      s3: `<p>高校生<strong>月1万5千円</strong>、大学生<strong>月4万円</strong>。卒業後に返済。</p><p><span class="marker">他奨学金との併用は原則不可</span>。</p><div class="note-box">国の修学支援制度と合わせて活用できます。</div>` },
    { cat: 'employment', slug: `${c.prefix}women-startup`, title: `${c.name} 女性起業支援補助金`, amount: '最大50万円', amountNum: 50, elig: `${c.name}内で起業する女性`, period: '毎年4月〜9月', descr: `${c.name}が実施する女性起業支援補助金です。開業資金を最大50万円補助します。`, tags: [c.name, '女性起業', '補助金'],
      s1: `<p>${c.name} 女性起業支援補助金は、<span class="marker">市内で新たに起業する女性</span>を支援する制度です。</p><p>女性の社会参画と地域経済活性化を目的に、店舗改装費・設備費・広告宣伝費等を補助しています。</p><p>補助額は<strong>対象経費の2/3以内、最大50万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>市内に事業所を設ける女性</p><p>事業開始から1年以内</p><p>商工会議所の起業セミナー受講</p><p>市税滞納なし</p></div><p>${c.name}商工観光課に<span class="marker">事業計画書と共に申請</span>。審査あり。</p>`,
      s3: `<p>対象経費の2/3以内で<strong>最大50万円</strong>。</p><p><span class="marker">2年間の事業継続が条件</span>。</p><div class="note-box">国の創業補助金との併用も可能です。商工会議所に相談してみてください。</div>` },
    { cat: 'nursing', slug: `${c.prefix}nursing-equipment`, title: `${c.name} 介護用品支給事業`, amount: '年額6万円相当', amountNum: 6, elig: `${c.name}に住所を有し在宅で要介護3以上の方を介護する家族`, period: '通年', descr: `${c.name}が実施する介護用品支給事業です。年額6万円相当の介護用品を支給します。`, tags: [c.name, '介護用品', '支給'],
      s1: `<p>${c.name} 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護する家族</span>に介護用品を支給する制度です。</p><p>紙おむつ等の費用を市が負担し、在宅介護の継続を支えます。</p><p>支給額は<strong>年額6万円相当</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="必要書類"><p>申請書</p><p>要介護認定結果通知書</p><p>介護者の身分証</p></div><p>${c.name}介護保険課で<span class="marker">年度ごとに申請</span>。</p>`,
      s3: `<p><strong>年額6万円相当</strong>のカタログ方式。</p><p><span class="marker">入院・施設入所中は対象外</span>。</p><div class="note-box">介護保険の福祉用具制度と併用可能です。</div>` },
    { cat: 'living', slug: `${c.prefix}migration-bonus`, title: `${c.name} 移住支援金`, amount: '最大100万円', amountNum: 100, elig: `東京圏から${c.name}に移住した方`, period: '通年', descr: `${c.name}が実施する移住支援金です。東京圏からの移住者に最大100万円を支給します。`, tags: [c.name, '移住支援', '支援金'],
      s1: `<p>${c.name} 移住支援金は、<span class="marker">東京23区から${c.name}に移住</span>した方に支給される支援金です。</p><p>人口減少対策・定住促進のため、テレワーク移住にも対応した支援を行っています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>です。<span class="marker-green">子ども加算1人30万円</span>もあります。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>東京23区に在住・通勤していたこと</p><p>転入後3か月〜1年以内に申請</p><p>5年以上居住意思</p></div><p>${c.name}企画政策課に申請。<span class="marker">事前相談推奨</span>。</p>`,
      s3: `<p>単身<strong>60万円</strong>、世帯<strong>100万円</strong>、子ども<strong>1人30万円加算</strong>。</p><p><span class="marker">5年以内転出で返還</span>の可能性。</p><div class="highlight-box">神奈川県は海・山の自然と都市機能が共存する住みやすいエリアです。</div>` },
    { cat: 'disaster', slug: `${c.prefix}seismic-diagnosis`, title: `${c.name} 木造住宅耐震診断助成`, amount: '自己負担なし', amountNum: 0, elig: `${c.name}内に昭和56年以前の木造住宅を所有する方`, period: '毎年5月〜12月', descr: `${c.name}が実施する耐震診断助成です。旧耐震基準住宅の診断を無料で実施します。`, tags: [c.name, '耐震診断', '助成'],
      s1: `<p>${c.name} 木造住宅耐震診断助成は、<span class="marker">昭和56年以前の木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>神奈川県は南関東地震のリスクが高い地域であり、住宅の耐震化は喫緊の課題です。</p><p><span class="marker-green">自己負担なし</span>で専門家による診断を受けられます。</p>`,
      s2: `<div class="summary-box" data-title="対象住宅"><p>昭和56年5月以前着工の木造</p><p>2階建て以下の一戸建て</p><p>在来軸組工法</p></div><p>${c.name}まちづくり課に<span class="marker">先着順</span>で申請。</p>`,
      s3: `<p>診断費用は<strong>全額市が負担</strong>。</p><p><span class="marker">耐震改修が必要な場合は改修助成</span>（最大150万円）あり。</p><div class="highlight-box">大規模地震への備えとして、まず無料の耐震診断を受けましょう。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [{ heading: '制度の概要', content: g.s1 }, { heading: '対象者と申請方法', content: g.s2 }, { heading: '支給額と注意点', content: g.s3 }],
    officialUrl: c.url, publishedAt: '2026-03-12',
  }));
}

export const cityGrantsBatch71: Grant[] = cities.flatMap(c => genGrants(c));
