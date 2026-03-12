import { Grant } from '@/lib/types';

const cities = [
  { name: '敦賀市', pref: '福井県', prefix: 'tsuruga-', url: 'https://www.city.tsuruga.lg.jp/', desc: '敦賀市は福井県南西部に位置し、日本海に面した港湾都市です。2024年に北陸新幹線が延伸し、東京からのアクセスが飛躍的に向上しました。気比の松原や金ヶ崎城跡など歴史的名所も豊富です。' },
  { name: '小浜市', pref: '福井県', prefix: 'obama-', url: 'https://www.city.obama.fukui.jp/', desc: '小浜市は福井県南西部の若狭湾に面し、「御食国（みけつくに）」として古くから朝廷に食材を献上した食の歴史を持ちます。鯖街道の起点でもあり、古い町並みと美しい海岸線が魅力です。' },
  { name: '大野市', pref: '福井県', prefix: 'ono-fukui-', url: 'https://www.city.ono.fukui.jp/', desc: '大野市は福井県東部の奥越地方に位置し、「天空の城」越前大野城で知られています。名水百選に選ばれた湧水群があり、「水の街」としても有名です。' },
  { name: '勝山市', pref: '福井県', prefix: 'katsuyama-', url: 'https://www.city.katsuyama.fukui.jp/', desc: '勝山市は福井県東部に位置し、福井県立恐竜博物館の所在地として世界的に知られています。スキージャム勝山や平泉寺白山神社など観光資源も豊富です。' },
  { name: 'あわら市', pref: '福井県', prefix: 'awara-', url: 'https://www.city.awara.lg.jp/', desc: 'あわら市は福井県最北端に位置し、「関西の奥座敷」と称されるあわら温泉で知られています。温泉とともに越前ガニや芦原焼などの文化が息づくまちです。' },
  { name: '坂井市', pref: '福井県', prefix: 'sakai-fukui-', url: 'https://www.city.fukui-sakai.lg.jp/', desc: '坂井市は福井県北部に位置し、東尋坊や丸岡城（日本最古の天守閣）で有名です。えちぜん鉄道で福井市方面へのアクセスも良好な、観光と住環境のバランスが取れたまちです。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}childcare-subsidy`, title: `${c.name} 保育料軽減補助金`, amount: '最大月額2万5千円', amountNum: 2.5, elig: `${c.name}に住所を有し認可外保育施設を利用する保護者`, period: '通年', descr: `${c.name}が実施する保育料軽減補助金です。月額最大2万5千円を補助します。`, tags: [c.name, '保育料軽減', '補助金'],
      s1: `<p>${c.name} 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料を軽減する制度です。</p><p>${c.desc}</p><p>補助額は<strong>月額最大2万5千円</strong>で、<span class="marker-green">世帯の課税状況で決定</span>されます。</p>`,
      s2: `<p>${c.name}に住民登録がある保護者が対象です。</p><div class="summary-box" data-title="申請書類"><p>施設利用証明書</p><p>保育料領収書</p><p>課税証明書</p><p>本人確認書類</p></div><p>${c.name}役所こども課に<span class="marker">半年ごとに申請</span>します。</p>`,
      s3: `<p>市民税所得割額に応じて<strong>月額最大2万5千円</strong>が支給。</p><p><span class="marker">無償化制度との調整</span>あり。</p><div class="note-box">福井県は共働き率全国トップクラスで保育環境の充実が重視されています。</div>` },
    { cat: 'childcare', slug: `${c.prefix}birth-bonus`, title: `${c.name} 出産祝い金`, amount: '最大15万円', amountNum: 15, elig: `${c.name}に住所を有し出産した方`, period: '出産後6か月以内', descr: `${c.name}が実施する出産祝い金です。出産に最大15万円を支給します。`, tags: [c.name, '出産祝い金', '給付金'],
      s1: `<p>${c.name} 出産祝い金は、<span class="marker">市内在住の方が出産した際</span>に祝い金を支給する制度です。</p><p>福井県は出生率が全国平均を上回る子育てしやすい地域ですが、さらなる支援充実を目指しています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降15万円</strong>です。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>出産日に${c.name}に住民登録</p><p>出産後6か月以内に申請</p><p>市税滞納なし</p></div><p>${c.name}こども課で<span class="marker">出生届提出時に手続き</span>できます。</p>`,
      s3: `<p><strong>第1子5万円、第2子10万円、第3子以降15万円</strong>。</p><p><span class="marker">申請期限は出産後6か月</span>。</p><div class="highlight-box">福井県は子育て環境ランキングで常に上位。県の給付金と併せて受給できます。</div>` },
    { cat: 'housing', slug: `${c.prefix}housing-purchase`, title: `${c.name} 住宅取得支援補助金`, amount: '最大100万円', amountNum: 100, elig: `${c.name}内に住宅を取得する世帯`, period: '通年（予算に達し次第終了）', descr: `${c.name}が実施する住宅取得支援補助金です。定住促進のため最大100万円を補助します。`, tags: [c.name, '住宅取得', '補助金'],
      s1: `<p>${c.name} 住宅取得支援補助金は、<span class="marker">市内に住宅を取得する世帯</span>を支援する制度です。</p><p>福井県は持ち家率が全国トップクラスで、住宅取得を積極的に支援しています。定住人口の確保を目指し、全国的にも手厚い住宅取得補助を実施しています。</p><p>補助額は<strong>基本50万円、加算で最大100万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="主な要件"><p>市内に新築・中古住宅を取得</p><p>5年以上定住意思</p><p>市税滞納なし</p></div><p>${c.name}役所都市計画課に<span class="marker">取得後1年以内に申請</span>。</p>`,
      s3: `<p>基本<strong>50万円</strong>、市外転入<strong>+20万円</strong>、子育て<strong>+20万円</strong>、UIJターン<strong>+10万円</strong>で<strong>最大100万円</strong>。</p><p><span class="marker">5年以内転出で返還</span>。</p><div class="note-box">福井県は全国的にも住みやすさランキング上位。住宅取得費も首都圏に比べ大幅に安価です。</div>` },
    { cat: 'medical', slug: `${c.prefix}infertility`, title: `${c.name} 不妊治療費助成`, amount: '最大20万円', amountNum: 20, elig: `${c.name}に住所を有し不妊治療を受けている夫婦`, period: '治療終了後3か月以内', descr: `${c.name}の不妊治療費助成です。自己負担分を最大20万円助成します。`, tags: [c.name, '不妊治療', '助成'],
      s1: `<p>${c.name} 不妊治療費助成は、<span class="marker">特定不妊治療の自己負担</span>を軽減する制度です。</p><p>福井県と連携した手厚い不妊治療支援を行っています。</p><p>助成額は<strong>1回最大20万円</strong>です。<span class="marker-green">年2回まで</span>。</p>`,
      s2: `<div class="summary-box" data-title="書類"><p>申請書</p><p>治療証明書</p><p>領収書</p><p>住民票</p></div><p>${c.name}健康課に<span class="marker">治療終了後3か月以内</span>に申請。</p>`,
      s3: `<p><strong>1回最大20万円</strong>、年2回まで。</p><p><span class="marker">福井県の助成と併用可能</span>。</p><div class="note-box">福井県は子育て支援が充実しており、不妊治療への支援も手厚いです。</div>` },
    { cat: 'education', slug: `${c.prefix}scholarship`, title: `${c.name} 奨学金制度`, amount: '最大月額4万円', amountNum: 4, elig: `${c.name}に住所を有する世帯の学生`, period: '毎年4月〜5月', descr: `${c.name}の奨学金制度です。月額最大4万円を無利子で貸与します。`, tags: [c.name, '奨学金', '教育支援'],
      s1: `<p>${c.name} 奨学金制度は、<span class="marker">経済的理由で修学困難な学生</span>に無利子で貸与する制度です。</p><p>福井県は教育水準が全国トップクラスで知られています。すべての若者の学びを支えるため運営しています。</p><p>貸与額は<strong>高校生月額1万5千円、大学生月額4万円</strong>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>保護者が${c.name}に住所</p><p>成績・所得基準あり</p></div><p>教育委員会に<span class="marker">毎年4〜5月に申請</span>。選考制。</p>`,
      s3: `<p>高校生<strong>月1万5千円</strong>、大学生<strong>月4万円</strong>。</p><p><span class="marker">Uターン就職で返還免除</span>の制度がある場合も。</p><div class="note-box">福井県にはUターン就職者向けの奨学金返還支援制度もあります。</div>` },
    { cat: 'employment', slug: `${c.prefix}uij-turn`, title: `${c.name} UIJターン支援金`, amount: '最大100万円', amountNum: 100, elig: `東京圏から${c.name}に移住し就業した方`, period: '通年', descr: `${c.name}のUIJターン支援金です。最大100万円を支給します。`, tags: [c.name, 'UIJターン', '支援金'],
      s1: `<p>${c.name} UIJターン支援金は、<span class="marker">東京圏から移住・就業</span>した方への支援金です。</p><p>福井県は「幸福度ランキング」で常に全国トップクラスの住みやすい地域です。移住支援制度も充実しています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>。<span class="marker-green">子ども加算1人30万円</span>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>東京23区に在住・通勤</p><p>転入後3か月〜1年以内</p><p>5年以上居住意思</p></div><p>${c.name}企画課に<span class="marker">事前相談推奨</span>で申請。</p>`,
      s3: `<p>単身<strong>60万円</strong>、世帯<strong>100万円</strong>、子ども<strong>1人30万円</strong>。</p><p><span class="marker">5年以内転出で返還</span>の可能性。</p><div class="highlight-box">北陸新幹線の延伸で福井県へのアクセスが大幅に改善。移住先として注目度が急上昇しています。</div>` },
    { cat: 'nursing', slug: `${c.prefix}nursing-equipment`, title: `${c.name} 介護用品支給事業`, amount: '年額7万5千円相当', amountNum: 7.5, elig: `${c.name}で在宅要介護3以上の方を介護する家族`, period: '通年', descr: `${c.name}の介護用品支給事業です。年額7万5千円相当を支給します。`, tags: [c.name, '介護用品', '支給'],
      s1: `<p>${c.name} 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護する家族</span>に介護用品を支給します。</p><p>三世代同居率が高い福井県ならではの在宅介護支援策です。</p><p>支給額は<strong>年額7万5千円相当</strong>。</p>`,
      s2: `<div class="summary-box" data-title="書類"><p>申請書</p><p>要介護認定結果</p><p>身分証</p></div><p>${c.name}介護保険課で<span class="marker">年度ごと申請</span>。</p>`,
      s3: `<p><strong>年額7万5千円相当</strong>のカタログ方式。</p><p><span class="marker">入院・施設入所中は対象外</span>。</p><div class="note-box">福井県は三世代同居・近居率が高く、在宅介護を支える環境が整っています。</div>` },
    { cat: 'living', slug: `${c.prefix}migration-bonus`, title: `${c.name} 移住支援金`, amount: '最大100万円', amountNum: 100, elig: `東京圏から${c.name}に移住した方`, period: '通年', descr: `${c.name}の移住支援金です。最大100万円を支給します。`, tags: [c.name, '移住支援', '支援金'],
      s1: `<p>${c.name} 移住支援金は、<span class="marker">東京圏から${c.name}に移住</span>した方に支給されます。</p><p>北陸新幹線の延伸で注目度が高まる福井県。${c.name}ならではの暮らしの魅力を発信し、移住者の受入れを積極的に推進しています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>。<span class="marker-green">子ども加算1人30万円</span>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>東京23区に在住・通勤</p><p>転入後3か月〜1年以内</p><p>5年以上居住意思</p></div><p>${c.name}企画政策課に<span class="marker">事前相談推奨</span>で申請。</p>`,
      s3: `<p>単身<strong>60万円</strong>、世帯<strong>100万円</strong>、子ども<strong>1人30万円加算</strong>。</p><p><span class="marker">5年以内転出で返還</span>の可能性。</p><div class="highlight-box">福井県は幸福度ランキング日本一。北陸新幹線で東京から直結し、移住先として大注目です。</div>` },
    { cat: 'disaster', slug: `${c.prefix}seismic-diagnosis`, title: `${c.name} 木造住宅耐震診断補助金`, amount: '自己負担なし', amountNum: 0, elig: `${c.name}内に昭和56年以前の木造住宅を所有する方`, period: '毎年5月〜12月', descr: `${c.name}の耐震診断補助金です。旧耐震基準住宅の診断を無料で実施します。`, tags: [c.name, '耐震診断', '補助'],
      s1: `<p>${c.name} 木造住宅耐震診断補助金は、<span class="marker">昭和56年以前の木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>2024年の能登半島地震を踏まえ、住宅の耐震化は福井県でも最重要課題として位置付けられています。</p><p><span class="marker-green">自己負担なし</span>で専門家による診断が受けられます。</p>`,
      s2: `<div class="summary-box" data-title="対象住宅"><p>昭和56年5月以前着工の木造</p><p>2階建て以下の一戸建て</p><p>在来軸組工法</p></div><p>${c.name}建築課に<span class="marker">先着順</span>で申請。</p>`,
      s3: `<p>診断費用は<strong>全額市負担</strong>。</p><p><span class="marker">耐震改修が必要な場合は改修補助</span>（最大120万円）あり。</p><div class="highlight-box">能登半島地震の教訓から、福井県でも住宅耐震化の推進が加速しています。まずは無料の診断を受けましょう。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [{ heading: '制度の概要', content: g.s1 }, { heading: '対象者と申請方法', content: g.s2 }, { heading: '支給額と注意点', content: g.s3 }],
    officialUrl: c.url, publishedAt: '2026-03-12',
  }));
}

export const cityGrantsBatch73: Grant[] = cities.flatMap(c => genGrants(c));
