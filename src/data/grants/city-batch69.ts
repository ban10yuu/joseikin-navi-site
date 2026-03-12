import { Grant } from '@/lib/types';

const cities = [
  { name: '鎌ケ谷市', pref: '千葉県', prefix: 'kamagaya-', url: 'https://www.city.kamagaya.chiba.jp/', desc: '鎌ケ谷市は千葉県北西部に位置し、新京成線・東武野田線・北総線が交差する交通の要衝です。梨の産地としても知られ、北海道日本ハムファイターズの2軍施設があります。' },
  { name: '富里市', pref: '千葉県', prefix: 'tomisato-', url: 'https://www.city.tomisato.lg.jp/', desc: '富里市は千葉県北部に位置し、成田空港に隣接する都市です。スイカの名産地として知られ、毎年「富里スイカロードレース」が開催されています。' },
  { name: '袖ケ浦市', pref: '千葉県', prefix: 'sodegaura-', url: 'https://www.city.sodegaura.lg.jp/', desc: '袖ケ浦市は千葉県中西部の東京湾岸に位置し、東京湾アクアラインの千葉県側に近い都市です。袖ケ浦海浜公園やドイツ村など観光スポットも豊富です。' },
  { name: '印西市', pref: '千葉県', prefix: 'inzai-', url: 'https://www.city.inzai.lg.jp/', desc: '印西市は千葉県北部に位置し、千葉ニュータウンの中核都市として発展しています。「住みよさランキング」で全国トップクラスの評価を受ける人気の住宅都市です。' },
  { name: '白井市', pref: '千葉県', prefix: 'shiroi-', url: 'https://www.city.shiroi.chiba.jp/', desc: '白井市は千葉県北西部に位置し、北総線で都心へ約40分のアクセスです。梨の産地として有名で「しろいの梨」はブランド化されています。' },
  { name: '四街道市', pref: '千葉県', prefix: 'yotsukaido-', url: 'https://www.city.yotsukaido.chiba.jp/', desc: '四街道市は千葉県北部に位置し、JR総武本線で千葉駅まで約10分、東京方面へのアクセスも良好です。住宅都市として発展し、緑豊かな住環境が特徴です。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}childcare-subsidy`, title: `${c.name} 保育料軽減補助金`, amount: '最大月額3万円', amountNum: 3, elig: `${c.name}に住所を有し認可外保育施設を利用する児童の保護者`, period: '通年', descr: `${c.name}が実施する保育料軽減補助金です。認可外施設の利用料を月額最大3万円補助します。`, tags: [c.name, '保育料軽減', '補助金'],
      s1: `<p>${c.name} 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>${c.desc}</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の課税状況に応じて決定</span>されます。</p>`,
      s2: `<p>${c.name}に住民登録があり認可外保育施設を利用する保護者が対象です。</p><div class="summary-box" data-title="申請書類"><p>施設利用証明書</p><p>保育料領収書</p><p>課税証明書</p><p>本人確認書類</p></div><p>${c.name}役所こども課に<span class="marker">四半期ごとに申請</span>します。</p>`,
      s3: `<p>市民税所得割額に応じて<strong>月額最大3万円</strong>が支給されます。</p><p><span class="marker">無償化制度との調整</span>があります。</p><div class="note-box">${c.name}では認可保育所の整備にも力を入れています。</div>` },
    { cat: 'childcare', slug: `${c.prefix}birth-bonus`, title: `${c.name} 出産祝い金`, amount: '最大10万円', amountNum: 10, elig: `${c.name}に住所を有し出産した方`, period: '出産後6か月以内', descr: `${c.name}が実施する出産祝い金です。出産に際し最大10万円を支給します。`, tags: [c.name, '出産祝い金', '給付金'],
      s1: `<p>${c.name} 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>${c.desc}少子化対策として出産世帯への経済的支援を行っています。</p><p>支給額は<strong>第1子5万円、第2子7万円、第3子以降10万円</strong>です。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="申請要件"><p>出産日に${c.name}に住民登録</p><p>出産後6か月以内に申請</p><p>市税滞納なし</p></div><p>${c.name}役所こども課で<span class="marker">出生届提出時に手続き</span>できます。母子手帳と口座情報をご持参ください。</p>`,
      s3: `<p><strong>第1子5万円、第2子7万円、第3子以降10万円</strong>。多胎児は各子に支給。</p><p><span class="marker">申請期限は出産後6か月</span>です。</p><div class="highlight-box">国の出産育児一時金や千葉県の給付金と併せて受給できます。</div>` },
    { cat: 'housing', slug: `${c.prefix}newlywed-rent`, title: `${c.name} 結婚新生活支援補助金`, amount: '最大60万円', amountNum: 60, elig: `${c.name}で新生活を始める新婚世帯（夫婦ともに39歳以下）`, period: '毎年4月〜翌年3月', descr: `${c.name}が実施する結婚新生活支援補助金です。新婚世帯の家賃や引越し費用を最大60万円補助します。`, tags: [c.name, '結婚新生活', '補助金'],
      s1: `<p>${c.name} 結婚新生活支援補助金は、<span class="marker">新婚世帯の新生活スタートアップ費用</span>を支援する制度です。</p><p>若い世帯の定住を促進するため、結婚に伴う家賃・引越し費用・住宅取得費用を補助しています。</p><p>補助額は<strong>29歳以下は最大60万円、30〜39歳は最大30万円</strong>です。<span class="marker-green">家賃・引越し費用が対象</span>。</p>`,
      s2: `<div class="summary-box" data-title="主な要件"><p>夫婦ともに39歳以下</p><p>世帯合計所得500万円未満</p><p>${c.name}に婚姻後の住所を有すること</p><p>当該年度中の婚姻届出</p></div><p>${c.name}役所市民課に申請書と<span class="marker">婚姻届提出後に速やかに申請</span>してください。</p>`,
      s3: `<p>29歳以下は<strong>最大60万円</strong>、30〜39歳は<strong>最大30万円</strong>。</p><p><span class="marker">住宅手当を受給中の場合はその分を差引き</span>。</p><div class="note-box">国の「結婚新生活支援事業」を活用した補助金です。他の住宅補助との併用は窓口でご相談ください。</div>` },
    { cat: 'medical', slug: `${c.prefix}disability-medical`, title: `${c.name} 重度障がい者医療費助成`, amount: '医療費自己負担なし', amountNum: 0, elig: `${c.name}に住所を有する重度障がい者`, period: '通年', descr: `${c.name}が実施する重度障がい者医療費助成です。医療費の自己負担分を助成します。`, tags: [c.name, '障がい者医療', '助成'],
      s1: `<p>${c.name} 重度障がい者医療費助成は、<span class="marker">重度の障がいをお持ちの方</span>の医療費自己負担を助成する制度です。</p><p>障がいの有無にかかわらず安心して暮らせるまちづくりを推進しています。</p><p><span class="marker-green">保険診療の自己負担分が助成</span>されます。通院・入院ともに対象。</p>`,
      s2: `<div class="summary-box" data-title="対象者"><p>身体障害者手帳1・2級</p><p>療育手帳A（重度）</p><p>精神障害者保健福祉手帳1級</p></div><p>${c.name}役所障害福祉課で受給者証を申請します。<span class="marker">受給者証を医療機関窓口で提示</span>して受診。</p>`,
      s3: `<p>保険診療の<strong>自己負担分が全額助成</strong>。食事代等は対象外。</p><p><span class="marker">所得制限あり</span>。高所得者は対象外の場合も。</p><div class="note-box">県外受診は償還払い方式です。受給者証は毎年更新が必要です。</div>` },
    { cat: 'education', slug: `${c.prefix}school-lunch`, title: `${c.name} 学校給食費補助制度`, amount: '給食費の一部補助', amountNum: 0, elig: `${c.name}立小中学校に通う児童・生徒の保護者`, period: '毎年4月（自動適用）', descr: `${c.name}が実施する学校給食費補助制度です。物価高騰対策として給食費の一部を補助します。`, tags: [c.name, '給食費', '補助'],
      s1: `<p>${c.name} 学校給食費補助制度は、<span class="marker">市立小中学校の給食費</span>の一部を市が負担する制度です。</p><p>物価高騰の中、保護者の負担を軽減し、すべての子どもが栄養バランスの良い給食を安心して食べられる環境を維持しています。</p><p><strong>給食費の一部を市が補助</strong>します。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="補助の仕組み"><p>特別な申請手続きは不要</p><p>給食費の請求時に補助分が差し引かれます</p><p>就学援助世帯は引き続き全額免除</p></div><p>在校生は自動適用。<span class="marker">転入の場合も通学開始月から適用</span>です。</p>`,
      s3: `<p>給食費の値上げ分を市が吸収する形で<strong>保護者の実質負担を据え置き</strong>ます。</p><p><span class="marker">就学援助世帯は従来通り全額免除</span>。</p><div class="highlight-box">${c.name}では地元産食材の活用や食育にも力を入れています。</div>` },
    { cat: 'employment', slug: `${c.prefix}sme-support`, title: `${c.name} 中小企業支援補助金`, amount: '最大100万円', amountNum: 100, elig: `${c.name}内に事業所を有する中小企業者`, period: '毎年4月〜12月', descr: `${c.name}が実施する中小企業支援補助金です。設備投資やDX推進に最大100万円を補助します。`, tags: [c.name, '中小企業', '補助金'],
      s1: `<p>${c.name} 中小企業支援補助金は、<span class="marker">市内中小企業の設備投資やDX推進</span>を支援する制度です。</p><p>企業の競争力強化と地域経済の活性化を目的に、設備投資にかかる費用の一部を補助しています。</p><p>補助率は<strong>対象経費の1/3以内、最大100万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="主な要件"><p>市内に主たる事業所を有する中小企業者</p><p>設備投資額が50万円以上</p><p>市税滞納なし</p></div><p>${c.name}商工観光課に<span class="marker">設備導入前に申請が必要</span>です。</p>`,
      s3: `<p>対象経費の1/3以内で<strong>最大100万円</strong>。</p><p><span class="marker">交付は設備導入・支払完了後</span>。事業完了報告が必要です。</p><div class="note-box">国のIT導入補助金等と組み合わせることも可能です。商工会議所にご相談ください。</div>` },
    { cat: 'nursing', slug: `${c.prefix}nursing-equipment`, title: `${c.name} 介護用品支給事業`, amount: '年額6万円相当', amountNum: 6, elig: `${c.name}に住所を有し在宅で要介護3以上の方を介護する家族`, period: '通年', descr: `${c.name}が実施する介護用品支給事業です。年額6万円相当の介護用品を支給します。`, tags: [c.name, '介護用品', '支給'],
      s1: `<p>${c.name} 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護する家族</span>に介護用品を支給する制度です。</p><p>紙おむつ等の日常的に必要な費用を市が負担し、在宅介護の継続を支えます。</p><p>支給額は<strong>年額6万円相当</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="必要書類"><p>申請書</p><p>要介護認定結果通知書</p><p>介護者の身分証明書</p></div><p>${c.name}役所介護保険課で<span class="marker">年度ごとに申請</span>します。</p>`,
      s3: `<p><strong>年額6万円相当</strong>のカタログ方式支給です。</p><p><span class="marker">入院・施設入所中は対象外</span>。在宅介護限定。</p><div class="note-box">介護保険の福祉用具制度と併用可能です。</div>` },
    { cat: 'living', slug: `${c.prefix}elderly-support`, title: `${c.name} 高齢者見守り支援事業`, amount: '無料（市費負担）', amountNum: 0, elig: `${c.name}に住所を有する65歳以上の一人暮らし高齢者等`, period: '通年', descr: `${c.name}が実施する高齢者見守り支援事業です。緊急通報装置の貸与や安否確認を行います。`, tags: [c.name, '高齢者見守り', '支援'],
      s1: `<p>${c.name} 高齢者見守り支援事業は、<span class="marker">一人暮らし高齢者の安全・安心</span>を確保するための事業です。</p><p>緊急通報装置の貸与や配食サービスを通じた安否確認で、孤独死の防止と地域の見守りネットワークを構築しています。</p><p><span class="marker-green">利用料は無料（市費負担）</span>です。</p>`,
      s2: `<div class="summary-box" data-title="対象者"><p>65歳以上の一人暮らし高齢者</p><p>高齢者のみの世帯</p><p>日中独居の高齢者</p></div><p>${c.name}高齢福祉課または地域包括支援センターに申請。<span class="marker">緊急連絡先2名の登録</span>が必要です。</p>`,
      s3: `<p>緊急通報装置の設置・利用料は<strong>市が全額負担</strong>。</p><p><span class="marker">月1回の安否確認コール</span>も実施。</p><div class="highlight-box">${c.name}では配食サービスやふれあいサロンなど高齢者の生活支援を幅広く展開しています。</div>` },
    { cat: 'disaster', slug: `${c.prefix}bousai-equipment`, title: `${c.name} 住宅用防災設備補助金`, amount: '最大5万円', amountNum: 5, elig: `${c.name}に住所を有する世帯`, period: '毎年4月〜翌年2月', descr: `${c.name}が実施する住宅用防災設備補助金です。感震ブレーカーや蓄電池の設置に最大5万円を補助します。`, tags: [c.name, '防災設備', '補助金'],
      s1: `<p>${c.name} 住宅用防災設備補助金は、<span class="marker">住宅の防災設備設置</span>を支援する制度です。</p><p>地震・台風などの災害に備え、家庭レベルでの防災力向上を図るため、各種設備の設置費用を補助しています。</p><p>補助額は<strong>設備費用の1/2以内、最大5万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象設備"><p>感震ブレーカー</p><p>雨水貯留タンク（100L以上）</p><p>家庭用蓄電池</p></div><p>${c.name}防災課に<span class="marker">設置前に申請</span>。1世帯1設備につき1回限り。</p>`,
      s3: `<p>設置費用の1/2以内で<strong>上限5万円</strong>。</p><p><span class="marker">設置完了後に実績報告書を提出</span>。</p><div class="note-box">${c.name}ではハザードマップの配布や防災訓練の実施支援も行っています。</div>` },
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

export const cityGrantsBatch69: Grant[] = cities.flatMap(c => genGrants(c));
