import { Grant } from '@/lib/types';

const cities = [
  { name: '岐阜市', pref: '岐阜県', prefix: 'gifu-', desc: '岐阜市は岐阜県の県庁所在地で、金華山と長良川に象徴される城下町です。長良川の鵜飼いは1300年以上の伝統を持ち、織田信長の天下布武の拠点としても知られます。' },
  { name: '大垣市', pref: '岐阜県', prefix: 'ogaki-', desc: '大垣市は豊富な地下水に恵まれた「水の都」で、松尾芭蕉の奥の細道むすびの地です。IT産業の集積と歴史的な水文化が共存する岐阜県西部の中核都市です。' },
  { name: '高山市', pref: '岐阜県', prefix: 'takayama-', desc: '高山市は日本一面積が広い市で、飛騨の小京都と呼ばれる古い町並みと高山祭で有名です。飛騨牛や朴葉味噌など独自の食文化も魅力のインバウンド人気都市です。' },
  { name: '多治見市', pref: '岐阜県', prefix: 'tajimi-', desc: '多治見市は美濃焼の産地として1300年以上の歴史を持つ陶磁器の街です。国内最高気温を記録したこともある夏の暑さでも知られています。' },
  { name: '関市', pref: '岐阜県', prefix: 'seki-', desc: '関市は「刃物のまち」として世界的に有名で、鎌倉時代から続く刀鍛冶の伝統を受け継いでいます。モネの池やせきてらすなど新たな観光資源も注目されています。' },
  { name: '中津川市', pref: '岐阜県', prefix: 'nakatsugawa-', desc: '中津川市は中山道の宿場町として栄えた歴史を持ち、栗きんとんや五平餅で知られるグルメの街です。リニア中央新幹線の岐阜県駅が建設予定の注目都市です。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}twin-support`, title: `${c.name} 多胎児家庭支援事業`, amount: '最大10万円', amountNum: 10, elig: `${c.name}に住所を有し多胎児（双子以上）を養育する世帯`, period: '出生後1年以内', descr: `${c.name}が実施する多胎児家庭支援事業です。双子以上を育てる家庭に育児用品購入費や家事支援サービスを最大10万円支給します。`, tags: [c.name, '多胎児支援', '子育て', '岐阜県', '育児支援'],
      s1: `<p>${c.name}多胎児家庭支援事業は、<span class="marker">双子・三つ子等の多胎児を育てる家庭</span>を支援する制度です。</p><p>${c.desc}</p><p>多胎育児は身体的・精神的負担が大きく、育児用品も倍以上必要になります。<strong>最大10万円</strong>の支援で<span class="marker-green">育児用品やヘルパーサービス</span>に活用できます。</p>`,
      s2: `<p>${c.name}に住民登録があり多胎児を養育する世帯が対象です。</p><div class="summary-box" data-title="支援内容"><p>育児用品購入費の補助（チャイルドシート等）</p><p>家事・育児ヘルパー派遣</p><p>タクシー利用券の交付</p><p>おむつ等消耗品の支給</p></div><p>${c.name}子ども政策課に<span class="marker">出生届提出後に申請</span>してください。</p>`,
      s3: `<p>育児用品購入費・ヘルパー利用費等を合わせて<strong>最大10万円</strong>まで支援。</p><p><span class="marker">双子は10万円、三つ子以上は15万円</span>に増額されます。</p><div class="note-box">多胎児家庭向けの交流会やピアサポートも${c.name}で実施しています。孤立を防ぐ支援を大切にしています。</div>` },
    { cat: 'housing', slug: `${c.prefix}youth-rent`, title: `${c.name} 若者世帯家賃補助制度`, amount: '最大月額2万円', amountNum: 24, elig: `${c.name}に転入した39歳以下の方で賃貸住宅に居住する方`, period: '毎年4月〜6月', descr: `${c.name}が実施する若者世帯家賃補助制度です。転入した若者世帯の家賃を最大月額2万円、最長2年間補助します。`, tags: [c.name, '家賃補助', '若者', '岐阜県', '移住促進'],
      s1: `<p>${c.name}若者世帯家賃補助制度は、<span class="marker">市外から転入した39歳以下の若者世帯</span>の家賃負担を軽減する制度です。</p><p>若者の定住促進と地域の活力維持を目的に、住居費の一部を補助します。結婚を機に${c.name}への転入を検討されている方にも好評です。</p><p>補助額は<strong>家賃の1/2以内、月額最大2万円（最長2年間）</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>申請者が39歳以下</p><p>${c.name}への転入日から1年以内</p><p>民間賃貸住宅に居住</p><p>世帯全員の市税滞納なし</p></div><p>${c.name}定住推進課に<span class="marker">転入後1年以内に申請</span>してください。毎年度の更新手続きが必要です。</p>`,
      s3: `<p>家賃の1/2以内で<strong>月額最大2万円</strong>。最長2年間で合計最大48万円の支援。</p><p><span class="marker">公営住宅・社宅は対象外</span>です。</p><div class="highlight-box">岐阜県の移住支援金制度と併用可能です。東京圏からの移住者は最大100万円の支援金もあります。</div>` },
    { cat: 'medical', slug: `${c.prefix}maternity-dental`, title: `${c.name} 妊産婦歯科健診助成`, amount: '無料（全額助成）', amountNum: 0, elig: `${c.name}に住所を有する妊産婦`, period: '通年', descr: `${c.name}が実施する妊産婦歯科健診助成です。妊娠中および産後1年以内の歯科健診を無料で受けられます。`, tags: [c.name, '妊産婦歯科', '健診', '岐阜県', 'マタニティ'],
      s1: `<p>${c.name}妊産婦歯科健診助成は、<span class="marker">妊娠中および産後1年以内の方</span>の歯科健診費用を全額助成する制度です。</p><p>妊娠中はホルモンバランスの変化で歯周病リスクが高まります。歯周病は早産・低体重児出産のリスク因子とされており、口腔ケアは母子の健康に重要です。</p><p><span class="marker-green">受診費用は無料</span>で、指定歯科医院で受けられます。</p>`,
      s2: `<div class="summary-box" data-title="健診内容"><p>口腔内検査（むし歯・歯周病チェック）</p><p>歯石除去（1回分）</p><p>ブラッシング指導</p><p>フッ素塗布</p></div><p>母子健康手帳交付時に受診票を配布。<span class="marker">${c.name}指定歯科医院に予約</span>して受診してください。</p>`,
      s3: `<p>健診費用は<strong>全額${c.name}が負担</strong>。妊娠中1回、産後1回の計2回まで。</p><p><span class="marker">治療が必要な場合は通常の保険診療</span>となります。</p><div class="note-box">安定期（妊娠5〜7か月）の受診が推奨されますが、体調に合わせて受診時期をお選びください。</div>` },
    { cat: 'education', slug: `${c.prefix}tradition-craft`, title: `${c.name} 伝統工芸後継者育成助成金`, amount: '最大月額10万円', amountNum: 120, elig: `${c.name}内の伝統工芸事業所で修業を開始する方`, period: '毎年4月〜5月', descr: `${c.name}が実施する伝統工芸後継者育成助成金です。地域の伝統工芸技術を学ぶ研修生に月額最大10万円を助成します。`, tags: [c.name, '伝統工芸', '後継者育成', '岐阜県', '人材育成'],
      s1: `<p>${c.name}伝統工芸後継者育成助成金は、<span class="marker">地域の伝統工芸技術を次世代に継承</span>するための人材育成制度です。</p><p>岐阜県は美濃焼・飛騨の家具・関の刃物など多彩な伝統工芸品の産地です。後継者不足が深刻な課題となっており、修業中の生活費を助成して参入障壁を下げます。</p><p>助成額は<strong>月額最大10万円、最長3年間</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>${c.name}指定の伝統工芸事業所での修業</p><p>原則40歳未満の方</p><p>修業に専念できること（副業制限あり）</p><p>修業終了後に${c.name}内で活動する意思</p></div><p>${c.name}産業振興課に<span class="marker">修業開始前に申請</span>。師匠（親方）の推薦書が必要です。</p>`,
      s3: `<p><strong>月額最大10万円</strong>を最長3年間支給。修業先への交通費も別途支給の場合あり。</p><p><span class="marker">半年ごとの修業報告</span>が必要です。</p><div class="highlight-box">国の「伝統的工芸品産業支援補助金」と連携しています。修了後の独立開業支援もあります。</div>` },
    { cat: 'employment', slug: `${c.prefix}shop-renovation`, title: `${c.name} 商店街店舗改装補助金`, amount: '最大80万円', amountNum: 80, elig: `${c.name}内の商店街で新規出店または店舗改装を行う事業者`, period: '毎年4月〜10月', descr: `${c.name}が実施する商店街店舗改装補助金です。商店街活性化のため新規出店・改装費用を最大80万円補助します。`, tags: [c.name, '商店街', '店舗改装', '岐阜県', '地域活性化'],
      s1: `<p>${c.name}商店街店舗改装補助金は、<span class="marker">市内商店街での新規出店や既存店舗の改装</span>を支援する制度です。</p><p>商店街のにぎわいを取り戻し、歩いて楽しいまちづくりを推進します。空き店舗の解消と新たな商業者の参入を促進する重要な制度です。</p><p>補助額は<strong>工事費の1/2以内、最大80万円</strong>です。<span class="marker-green">新規出店者は上限100万円</span>に増額。</p>`,
      s2: `<div class="summary-box" data-title="対象経費"><p>店舗の内装・外装工事費</p><p>看板・サイン設置費</p><p>設備工事費（電気・水道等）</p><p>バリアフリー化工事費</p></div><p>${c.name}商工観光課に<span class="marker">工事着手前に申請</span>してください。商店街組合の推薦が必要です。</p>`,
      s3: `<p>工事費の1/2以内で<strong>最大80万円</strong>（新規出店は100万円）。5年間の営業継続が条件。</p><p><span class="marker">市内業者による施工</span>が必須です。</p><div class="note-box">国の小規模事業者持続化補助金と併用できる場合があります。事前に${c.name}商工会議所にご相談ください。</div>` },
    { cat: 'nursing', slug: `${c.prefix}family-care-leave`, title: `${c.name} 家族介護者支援金`, amount: '最大年間12万円', amountNum: 12, elig: `${c.name}に住所を有し在宅で要介護3以上の家族を介護する方`, period: '通年', descr: `${c.name}が実施する家族介護者支援金です。在宅で重度の家族を介護する方に年間最大12万円を支給します。`, tags: [c.name, '家族介護', '支援金', '岐阜県', '在宅介護'],
      s1: `<p>${c.name}家族介護者支援金は、<span class="marker">在宅で要介護3以上の家族を介護している方</span>の負担を軽減する制度です。</p><p>介護離職や介護疲れが社会問題となる中、在宅介護を続ける家族を経済的に支援します。介護者自身の心身のケアにも使える支援金です。</p><p>支給額は<strong>月額1万円、年間最大12万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="支給要件"><p>要介護3以上の家族と同居し主に介護</p><p>介護保険の施設サービスを利用していない</p><p>${c.name}に6か月以上居住</p><p>市民税非課税世帯</p></div><p>${c.name}介護保険課に<span class="marker">認定通知後に申請</span>。年1回の更新手続きが必要です。</p>`,
      s3: `<p><strong>月額1万円</strong>を支給。要介護4以上は月額1.2万円に増額。</p><p><span class="marker">ショートステイ利用月も支給対象</span>（長期入所は除く）。</p><div class="note-box">${c.name}では介護者交流カフェや相談窓口も設置しています。一人で抱え込まずにぜひご利用ください。</div>` },
    { cat: 'living', slug: `${c.prefix}disaster-stockpile`, title: `${c.name} 家庭防災備蓄品購入補助`, amount: '最大1万円', amountNum: 1, elig: `${c.name}に住所を有する世帯`, period: '毎年6月〜11月', descr: `${c.name}が実施する防災備蓄品購入補助です。家庭での防災備蓄品の購入費を最大1万円補助します。`, tags: [c.name, '防災備蓄', '補助金', '岐阜県', '災害対策'],
      s1: `<p>${c.name}家庭防災備蓄品購入補助は、<span class="marker">各家庭の防災備蓄品の整備</span>を支援する制度です。</p><p>南海トラフ地震等の大規模災害に備え、最低3日分の備蓄を各家庭で準備することが推奨されています。備蓄品の購入費用を補助して防災意識の向上を図ります。</p><p>補助額は<strong>購入費の1/2以内、最大1万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象備蓄品"><p>非常食・保存水（3日分以上）</p><p>携帯トイレ・簡易トイレ</p><p>防災ラジオ・ランタン</p><p>家具転倒防止器具</p></div><p>${c.name}防災対策課に<span class="marker">購入後のレシートを添えて申請</span>してください。オンライン申請も可能です。</p>`,
      s3: `<p>購入費の1/2以内で<strong>最大1万円</strong>。1世帯年1回まで。</p><p><span class="marker">防災訓練参加者は5,000円の上乗せ</span>があります。</p><div class="highlight-box">内閣府は最低3日分（推奨1週間分）の食料・水の備蓄を呼びかけています。この機会に備蓄を見直しましょう。</div>` },
    { cat: 'disaster', slug: `${c.prefix}fire-alarm`, title: `${c.name} 住宅用火災警報器設置補助`, amount: '最大1万円', amountNum: 1, elig: `${c.name}に住所を有する65歳以上のひとり暮らし世帯`, period: '通年', descr: `${c.name}が実施する住宅用火災警報器設置補助です。高齢者世帯への警報器設置費を最大1万円補助します。`, tags: [c.name, '火災警報器', '高齢者', '岐阜県', '防火'],
      s1: `<p>${c.name}住宅用火災警報器設置補助は、<span class="marker">65歳以上のひとり暮らし世帯</span>に火災警報器の設置・交換費用を助成する制度です。</p><p>住宅火災による死者の7割以上が65歳以上の高齢者です。設置義務化から10年以上経過し、電池切れや本体の経年劣化で交換が必要な時期を迎えています。</p><p>補助額は<strong>購入・設置費の全額、最大1万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>65歳以上のひとり暮らし世帯</p><p>高齢者のみの世帯も可</p><p>市民税非課税世帯</p><p>既存警報器の交換も対象</p></div><p>${c.name}消防本部予防課に<span class="marker">申請書を提出</span>。地域の消防団員が設置を手伝う場合もあります。</p>`,
      s3: `<p>購入・設置費の全額で<strong>最大1万円</strong>。寝室と台所への設置が推奨。</p><p><span class="marker">設置から10年経過した警報器</span>は交換時期です。</p><div class="note-box">火災警報器は全ての住宅に設置が義務付けられています。設置後も月1回のテストボタンによる動作確認を行いましょう。</div>` },
    { cat: 'medical', slug: `${c.prefix}dental-checkup-child`, title: `${c.name} 小児歯科検診・フッ素塗布助成`, amount: '無料（年2回まで）', amountNum: 0, elig: `${c.name}に住所を有する1歳6か月〜小学校入学前の子ども`, period: '通年', descr: `${c.name}が実施する小児歯科検診・フッ素塗布助成です。幼児の歯科検診とフッ素塗布を年2回まで無料で受けられます。`, tags: [c.name, '小児歯科', 'フッ素塗布', '岐阜県', '子どもの健康'],
      s1: `<p>${c.name}小児歯科検診・フッ素塗布助成は、<span class="marker">就学前の子どもの歯科検診とフッ素塗布</span>を無料で実施する制度です。</p><p>乳歯のむし歯は永久歯の発育にも影響します。定期的な検診とフッ素塗布で子どもの歯の健康を守ります。岐阜県歯科医師会と連携した取り組みです。</p><p><span class="marker-green">年2回まで完全無料</span>で受けられます。</p>`,
      s2: `<div class="summary-box" data-title="検診内容"><p>歯科医師によるむし歯・歯並びチェック</p><p>フッ素塗布（トレー法）</p><p>ブラッシング指導（保護者向け）</p><p>食生活アドバイス</p></div><p>母子健康手帳に同封の受診票を使い、<span class="marker">${c.name}指定歯科医院に予約</span>して受診してください。</p>`,
      s3: `<p>歯科検診＋フッ素塗布が<strong>年2回まで無料</strong>。通常1回3,000〜5,000円相当。</p><p><span class="marker">指定歯科医院以外での受診は自費</span>になります。</p><div class="note-box">3歳までにむし歯のない子は、その後もむし歯になりにくいとされています。早期からの予防習慣が大切です。</div>` },
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

export const cityGrantsBatch76: Grant[] = cities.flatMap(c => genGrants(c));
