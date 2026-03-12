import { Grant } from '@/lib/types';

export const cityGrantsBatch43: Grant[] = [
  // ────────────────────────────────────────────────
  // 江戸川区（東京都）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'edogawa-childcare-subsidy',
    title: '江戸川区 子育て支援給付金',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '児童1人あたり月額1万3,000円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江戸川区', '子育て支援', '給付金'],
    eligibility: '江戸川区に住所を有し、0歳から中学校卒業までの児童を養育する保護者',
    applicationPeriod: '通年',
    description: '江戸川区が独自に実施する子育て支援給付金です。国の児童手当に上乗せして、区独自の給付金が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 子育て支援給付金は、<span class="marker">0歳から中学校卒業までの児童を養育する保護者</span>に対し、区独自の給付金を支給する制度です。</p><p>江戸川区は東京23区の東端に位置し、荒川と江戸川に挟まれた水と緑のまちです。人口約70万人を擁し、23区内でも特に子育て世帯が多い区として知られています。かつて「私立幼稚園の補助金が手厚い」ことで有名でしたが、現在も独自の子育て支援策を数多く展開しています。</p><p><span class="marker-green">所得制限なしで、江戸川区に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江戸川区に住民登録があり、対象年齢の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保護者の本人確認書類（マイナンバーカード等）</p><p>児童の健康保険証</p><p>振込先口座情報</p></div><p>江戸川区役所子育て支援課の窓口またはオンラインで申請できます。出生届や転入届の提出と同時に手続きを済ませるのがスムーズです。<strong>申請月の翌月分から支給が開始</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は児童1人あたり<strong>月額1万3,000円</strong>が目安です（年齢区分により異なる場合があります）。国の児童手当とあわせて受給できます。</p><p><span class="marker">支給は年3回（6月・10月・2月）にまとめて振り込まれます</span>。毎年6月に現況届の提出が必要です。</p><div class="note-box">江戸川区から転出した場合は転出月の翌月から支給が停止されます。転出届と同時に受給資格喪失届の手続きを行ってください。公務員の方は勤務先での手続きが必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-birth-bonus',
    title: '江戸川区 出産祝い金',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江戸川区', '出産祝い金', '給付金'],
    eligibility: '江戸川区に住所を有し、出産した方（出生児の住所が江戸川区にあること）',
    applicationPeriod: '出生日から1年以内',
    description: '江戸川区が実施する出産祝い金制度です。出産した世帯に対し、第1子5万円、第2子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 出産祝い金は、<span class="marker">区内で出生した児童の保護者</span>に対し、お祝い金を支給する制度です。</p><p>東京23区の中でも出生数が多い江戸川区は、出産・子育てしやすい環境づくりに力を入れてきました。葛西臨海公園をはじめとする広大な公園や、充実した保育施設が若い世帯を惹きつけています。この祝い金制度は、出産に伴う経済的負担を軽減する施策の一つです。</p><p><span class="marker-green">第1子は5万円、第2子以降は10万円と、多子世帯ほど手厚い支給</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出生日に江戸川区に住所を有し、出生した児童と同居している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出生届受理証明書または母子健康手帳</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>江戸川区役所子育て支援課の窓口で申請します。<strong>出生日から1年以内に申請</strong>する必要がありますので、出生届の提出時にあわせて手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。双子の場合は2人分が支給されます。</p><p><span class="marker">申請から約1か月後に指定口座へ振り込まれます</span>。東京都の出産応援事業（赤ちゃんファースト）とも併用が可能です。</p><div class="highlight-box">江戸川区では出産祝い金のほかにも、妊婦面接時のギフト券配布や産後ケア事業など、妊娠期から産後までの切れ目ない支援を実施しています。区のホームページで最新情報をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-housing-purchase',
    title: '江戸川区 住宅取得支援助成金',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江戸川区', '住宅取得', '助成金'],
    eligibility: '江戸川区内に新たに住宅を取得する子育て世帯・若年夫婦世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '江戸川区が実施する住宅取得支援助成金です。子育て世帯等が区内に住宅を取得する際に最大50万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 住宅取得支援助成金は、<span class="marker">子育て世帯や若年夫婦世帯が区内に住宅を購入する際</span>の費用を一部助成する制度です。</p><p>江戸川区は都心へのアクセスに優れながら比較的住宅価格が抑えられたエリアとして、初めてのマイホーム購入先に選ばれることが多い区です。荒川や旧江戸川沿いの景観、総合レクリエーション公園などの充実した住環境が魅力です。</p><p><strong>助成上限は50万円</strong>で、<span class="marker-green">省エネ性能の高い住宅を取得する場合は加算措置</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>18歳未満の子どもがいる世帯、または夫婦ともに39歳以下の世帯</p><p>新たに江戸川区内に住宅を取得すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>区税の滞納がないこと</p></div><p>江戸川区役所住宅課に申請書と売買契約書の写し、住民票などを提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。契約前に窓口で事前相談を受けることをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>基本30万円</strong>で、ZEH水準の省エネ住宅の場合は<strong>最大50万円</strong>まで加算されます。</p><p><span class="marker">新築・中古ともに対象ですが、中古住宅は一定の耐震性能を満たす必要</span>があります。</p><div class="note-box">住宅ローン減税や国のこどもエコすまい支援事業など、他の支援制度と併用が可能です。ただし、投資用物件やセカンドハウスの取得は対象外です。5年以内に転出した場合は助成金の返還が求められる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-newlywed-rent',
    title: '江戸川区 新婚世帯家賃補助制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '月額最大3万円（最長2年間）',
    maxAmountNum: 72,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江戸川区', '新婚家賃補助', '助成金'],
    eligibility: '婚姻届提出から1年以内で、江戸川区内の賃貸住宅に居住する新婚世帯',
    applicationPeriod: '通年（婚姻届提出から1年以内）',
    description: '江戸川区が実施する新婚世帯家賃補助制度です。区内に住む新婚世帯の家賃を月額最大3万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 新婚世帯家賃補助制度は、<span class="marker">婚姻届を提出してから1年以内の新婚世帯</span>が区内の賃貸住宅に居住する場合、家賃の一部を補助する制度です。</p><p>江戸川区は子育て支援だけでなく、結婚を機に区内に定住する若い世帯への支援にも取り組んでいます。都営新宿線やJR総武線沿線を中心に比較的手頃な家賃帯の住宅が多く、新生活のスタートに適したエリアです。</p><p><span class="marker-green">夫婦ともに39歳以下であることが条件で、世帯年収に上限</span>が設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届を提出してから1年以内であること</p><p>夫婦ともに39歳以下であること</p><p>世帯の合計年収が一定額以下であること</p><p>江戸川区内の民間賃貸住宅に居住していること</p></div><p>江戸川区役所住宅課に婚姻届受理証明書、賃貸契約書の写し、所得証明書などを提出します。</p><p><span class="marker">公営住宅や社宅に居住している場合は対象外</span>です。申請後の審査には約1か月かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>月額最大3万円で、最長2年間（合計最大72万円）</strong>が支給されます。実際の家賃から住宅手当等を差し引いた額が補助対象です。</p><p><span class="marker">補助期間中に区外に転出した場合は、転出月の翌月以降の補助が停止</span>されます。</p><div class="highlight-box">国の結婚新生活支援事業を活用した制度です。引越し費用についても最大で一定額の補助が受けられる場合がありますので、詳しくは江戸川区の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-disability-medical',
    title: '江戸川区 心身障害者医療費助成制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['江戸川区', '障害者医療', '助成金'],
    eligibility: '江戸川区に住所を有し、身体障害者手帳1・2級、愛の手帳1・2度等を所持する方',
    applicationPeriod: '通年',
    description: '江戸川区が実施する心身障害者医療費助成制度です。重度の障害がある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 心身障害者医療費助成制度は、<span class="marker">重度の身体障害・知的障害がある方</span>の保険診療にかかる自己負担分を助成する制度です。</p><p>江戸川区は障害者福祉にも力を入れており、区内のバリアフリー整備や福祉施設の充実を進めています。この制度により、障害のある方が安心して医療を受けられる環境を整えています。</p><p><span class="marker-green">身体障害者手帳1・2級、愛の手帳（療育手帳）1・2度のいずれかを持つ方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江戸川区に住民登録があり、対象の手帳を所持している方が対象です（65歳以上で新規に手帳を取得した場合を除く）。</p><div class="summary-box" data-title="申請に必要なもの"><p>身体障害者手帳または愛の手帳</p><p>健康保険証</p><p>本人確認書類</p><p>マイナンバーがわかる書類</p></div><p>江戸川区役所障害者福祉課の窓口で申請します。申請後、<strong>「心身障害者医療費受給者証（マル障）」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>原則として全額助成</strong>されます。住民税課税者は一部自己負担が生じる場合があります。</p><p><span class="marker">都内の医療機関ではマル障の受給者証を提示することで窓口負担が軽減</span>されます。都外受診の場合は償還払いとなります。</p><div class="note-box">所得が一定額を超える場合は助成の対象外となります。入院時の食事療養費や差額ベッド代は対象外です。他の医療費助成制度（ひとり親等）との併用はできませんので、有利な制度を選択してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-scholarship',
    title: '江戸川区 奨学資金貸付制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '月額最大5万円（無利子）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '東京都',
    tags: ['江戸川区', '奨学金', '教育支援'],
    eligibility: '江戸川区に住所を有する高校生・大学生等の保護者で、経済的理由により修学が困難な方',
    applicationPeriod: '毎年4月〜5月（年度途中も相談可）',
    description: '江戸川区が実施する奨学資金貸付制度です。経済的に修学が困難な生徒・学生に無利子で奨学金を貸し付けます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 奨学資金貸付制度は、<span class="marker">経済的な理由により高校・大学等への修学が困難な生徒・学生</span>に対し、無利子で奨学金を貸し付ける制度です。</p><p>江戸川区は23区最大級の面積を持ち、多くの家庭が暮らす住宅地区です。教育に対する意識が高い一方で、経済的理由で進学を断念するケースもあり、そうした生徒・学生を支援する目的で本制度が設けられています。</p><p><span class="marker-green">無利子での貸付であり、卒業後に計画的に返還する仕組み</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>江戸川区内に6か月以上継続して住所を有すること</p><p>高等学校、大学、専修学校等に在学中または進学予定であること</p><p>経済的理由により修学が困難と認められること</p><p>連帯保証人を立てられること</p></div><p>江戸川区教育委員会教育推進課に申請書と所得証明書、在学証明書等を提出します。</p><p><span class="marker">募集は毎年4月〜5月ですが、家計急変等の場合は年度途中の相談も受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸付額は<strong>高校生で月額1万8,000円程度、大学生で月額5万円程度</strong>が上限です（学校種別により異なります）。入学時の一時金も別途貸付を受けられます。</p><p><span class="marker">卒業後6か月の据置期間を経て、最長10年で返還</span>していきます。返還金は後輩の奨学金に充てられます。</p><div class="highlight-box">日本学生支援機構（JASSO）の奨学金との併用も可能ですが、貸付型同士の場合は返還額の合計に注意が必要です。給付型の奨学金がある場合はそちらを優先して検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-sme-support',
    title: '江戸川区 中小企業融資あっせん制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '最大2,000万円（利子補給あり）',
    maxAmountNum: 2000,
    category: 'employment',
    prefecture: '東京都',
    tags: ['江戸川区', '中小企業支援', '融資'],
    eligibility: '江戸川区内に事業所を有する中小企業者・個人事業主',
    applicationPeriod: '通年',
    description: '江戸川区が実施する中小企業融資あっせん制度です。区内の中小企業に低利の融資をあっせんし、利子の一部を補給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 中小企業融資あっせん制度は、<span class="marker">区内で事業を営む中小企業者や個人事業主</span>に対し、取扱金融機関を通じた低利融資をあっせんする制度です。</p><p>江戸川区は製造業や小売業の中小企業が多く集まるエリアです。特に金属加工や食品製造などの町工場が健在で、こうした地元産業を金融面から支える役割を担っています。区が利子の一部を補給するため、通常より有利な条件で資金調達ができます。</p><p><strong>融資限度額は最大2,000万円</strong>で、<span class="marker-green">運転資金・設備資金のいずれにも利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>江戸川区内に事業所を有する中小企業者であること</p><p>同一事業を1年以上継続して営んでいること</p><p>区税・事業税を滞納していないこと</p><p>東京信用保証協会の保証対象であること</p></div><p>江戸川区役所産業振興課に申請書を提出し、あっせん書の交付を受けた後、取扱金融機関に融資を申し込みます。</p><p><span class="marker">事前に区の経営相談員による面談が必要</span>です。事業計画や資金使途について確認が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>融資限度額は資金用途により異なり、<strong>運転資金で最大1,500万円、設備資金で最大2,000万円</strong>です。返済期間は最長7年です。</p><p><span class="marker">区が利子の一部を補給するため、実質的な金利負担は年0.2%程度</span>に抑えられます（経済状況により変動）。</p><div class="note-box">信用保証料についても区が一部を補助しています。ただし、既に借入金の返済が滞っている場合は利用できません。創業間もない事業者向けには別途「創業資金融資」メニューもありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-nursing-equipment',
    title: '江戸川区 介護用品支給事業',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '年間6万円相当の介護用品',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['江戸川区', '介護用品', '支給'],
    eligibility: '江戸川区に住所を有し、要介護4・5の認定を受けた高齢者を在宅で介護する家族',
    applicationPeriod: '通年',
    description: '江戸川区が実施する介護用品支給事業です。在宅で重度の要介護者を介護する家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつや尿取りパッドなどの介護用品を支給する制度です。</p><p>江戸川区は高齢化が進む中、在宅介護の支援に力を入れています。介護者の負担を少しでも軽減するため、毎月必要となる消耗品の費用を区が負担しています。</p><p><span class="marker-green">市民税非課税世帯には優先的に手厚い支給</span>が行われます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江戸川区に住民登録があり、以下の要件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けた65歳以上の方を介護していること</p><p>被介護者が在宅で生活していること（施設入所者は対象外）</p><p>被介護者の属する世帯が市民税非課税であること</p></div><p>江戸川区役所介護保険課に申請書と介護保険被保険者証を提出します。<strong>申請が認められると、毎月自宅に介護用品が配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間6万円相当</strong>の介護用品（紙おむつ・尿取りパッド・清拭剤など）です。月ごとにカタログから必要な商品を選択できます。</p><p><span class="marker">入院中は支給が一時停止となります</span>。退院後に再開の届出が必要です。</p><div class="highlight-box">江戸川区では介護用品の支給に加えて、家族介護者向けのリフレッシュ事業（介護者交流会・介護教室）も実施しています。介護の悩みを一人で抱え込まず、まずは地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'edogawa-elderly-support',
    title: '江戸川区 高齢者見守り・生活支援事業',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '月額最大1万円相当のサービス',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '東京都',
    tags: ['江戸川区', '高齢者支援', '生活支援'],
    eligibility: '江戸川区に住所を有する65歳以上のひとり暮らし高齢者または高齢者のみ世帯',
    applicationPeriod: '通年',
    description: '江戸川区が実施する高齢者見守り・生活支援事業です。ひとり暮らし高齢者等に対し、見守りや日常生活の支援サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 高齢者見守り・生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、定期的な見守り訪問や日常生活の支援サービスを提供する制度です。</p><p>江戸川区では約5万人のひとり暮らし高齢者が生活しており、孤立防止と安心した暮らしの確保が重要な課題です。民生委員やNPO法人と連携し、地域全体で高齢者を見守る体制を構築しています。</p><p><span class="marker-green">配食サービス・緊急通報システム・訪問理美容サービスなど、多彩なメニュー</span>が用意されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江戸川区に住民登録がある65歳以上のひとり暮らし高齢者、または高齢者のみの世帯が対象です。</p><div class="summary-box" data-title="主なサービス内容"><p>配食サービス（安否確認を兼ねた食事の配達）</p><p>緊急通報システム（ペンダント型の通報装置）</p><p>訪問理美容サービス（外出困難な方向け）</p><p>軽度な日常生活援助（電球交換・ゴミ出し支援等）</p></div><p>お住まいの地域を管轄する<strong>熟年相談室（地域包括支援センター）</strong>に相談・申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>サービスにより<strong>無料〜月額1万円相当</strong>の内容が提供されます。配食サービスは1食あたり数百円の自己負担が必要な場合があります。</p><p><span class="marker">緊急通報システムは無料で設置でき、24時間365日の対応が可能</span>です。ボタンを押すだけで民間の受信センターにつながります。</p><div class="note-box">介護保険のサービスを利用中の方でも、本事業のサービスと併用が可能です。ただし、同種のサービスが重複する場合は調整が行われます。まずは熟年相談室にお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 青森市（青森県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'aomori-city-childcare-subsidy',
    title: '青森市 子育て応援手当',
    organization: '青森市',
    type: 'local',
    maxAmount: '児童1人あたり年額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['青森市', '子育て支援', '給付金'],
    eligibility: '青森市に住所を有し、小学校入学前の児童を養育する保護者',
    applicationPeriod: '通年',
    description: '青森市が実施する子育て応援手当です。小学校入学前の児童を養育する世帯に年額3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 子育て応援手当は、<span class="marker">小学校入学前（0歳〜5歳）の児童を養育する保護者</span>に対し、子育てに要する費用を支援する制度です。</p><p>青森市は本州最北端の県庁所在地として、ねぶた祭や八甲田山などで知られる文化と自然が豊かな都市です。冬季の厳しい気候のもとでの子育てには特有の出費も多く、暖房費や防寒具の費用がかさみます。この手当はそうした負担を軽減するために設けられました。</p><p><span class="marker-green">所得制限なしで、対象児童がいるすべての世帯に支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>青森市に住民登録があり、小学校入学前の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保護者の本人確認書類</p><p>児童の健康保険証</p><p>振込先口座情報</p></div><p>青森市役所子育て支援課の窓口または郵送で申請します。出生届や転入届と同時に手続きするのがスムーズです。<strong>申請月の翌月から支給対象</strong>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は児童1人あたり<strong>年額3万円</strong>です。10月頃に一括で振り込まれます。</p><p><span class="marker">青森市から転出した場合は転出月までの月割りで精算</span>されます。転出届の提出時に受給資格喪失届も忘れずに行ってください。</p><div class="note-box">国の児童手当とは別の制度であり、併用が可能です。児童手当の手続きとあわせて申請すると漏れがありません。年度途中に出生した場合は月割りで計算されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-birth-bonus',
    title: '青森市 出産・子育て応援給付金',
    organization: '青森市',
    type: 'local',
    maxAmount: '出産応援5万円＋子育て応援5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['青森市', '出産応援', '給付金'],
    eligibility: '青森市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '青森市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>青森市では、安心して妊娠・出産・子育てができる環境づくりを目指しています。ねぶたの情熱が息づくこの街で、新しい命の誕生を地域全体で祝い支える取り組みです。伴走型相談支援と一体的に実施されています。</p><p><span class="marker-green">すべての妊婦・子育て世帯が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時：保健師等との面談後、出産応援給付金（5万円）を申請</p><p>②出生届出後：産後の面談後、子育て応援給付金（5万円）を申請</p></div><p>青森市役所元気プラザまたは各支所の保健師面談を受けた上で申請します。面談では妊娠・出産・子育てに関する相談も受けられます。</p><p><span class="marker">面談を受けることが給付の条件</span>です。面談は予約制となっていますので、事前にお電話ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援給付金5万円＋子育て応援給付金5万円の合計10万円</strong>です。双子以上の場合、子育て応援給付金は児童数に応じて加算されます。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">この給付金は国の「出産・子育て応援交付金」事業に基づくものです。他の自治体で既に同様の給付金を受給している場合は重複して受給できません。里帰り出産の場合は住所地の青森市に申請してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-housing-eco',
    title: '青森市 住宅省エネ改修補助金',
    organization: '青森市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '青森県',
    tags: ['青森市', '省エネ改修', '補助金'],
    eligibility: '青森市内に住所を有し、自己居住用住宅の省エネ改修を行う方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '青森市が実施する住宅省エネ改修補助金です。断熱改修や高効率設備導入に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 住宅省エネ改修補助金は、<span class="marker">既存住宅の断熱性能向上や高効率給湯設備の導入</span>にかかる費用を補助する制度です。</p><p>青森市は日本有数の豪雪地帯であり、冬季の暖房費が家計に大きな負担をかけています。住宅の断熱性能を高めることで暖房エネルギーの消費を抑え、光熱費の削減とCO₂排出量の低減を同時に実現することを目指しています。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">窓の断熱改修と壁・天井の断熱改修を組み合わせるとさらに効果的</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（二重窓・複層ガラスへの交換等）</p><p>外壁・屋根・天井・床の断熱改修</p><p>高効率給湯器（エコキュート等）の設置</p><p>LED照明への全面交換</p></div><p>青森市役所都市整備部建築指導課に申請書と見積書、工事内容がわかる図面等を提出します。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した工事は補助の対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。窓の断熱改修のみの場合は上限15万円となります。</p><p><span class="marker">年度内に工事が完了し、実績報告書を提出する必要</span>があります。年度をまたぐ工事は対象外です。</p><div class="note-box">国の住宅省エネキャンペーン（先進的窓リノベ事業等）との併用が可能な場合がありますが、補助対象工事が重複する部分は差し引かれます。窓口で事前に確認しましょう。青森市の厳しい冬を快適に過ごすためにも、断熱改修は費用対効果の高い投資です。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-senior-dental',
    title: '青森市 高齢者歯科健診・治療費助成',
    organization: '青森市',
    type: 'local',
    maxAmount: '健診無料・治療費一部助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '青森県',
    tags: ['青森市', '高齢者歯科', '助成金'],
    eligibility: '青森市に住所を有する75歳以上の後期高齢者医療被保険者',
    applicationPeriod: '通年',
    description: '青森市が実施する高齢者歯科健診・治療費助成制度です。75歳以上の高齢者に無料の歯科健診と治療費の一部助成を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 高齢者歯科健診・治療費助成は、<span class="marker">75歳以上の後期高齢者医療被保険者</span>を対象に、歯科健診を無料で実施し、必要に応じて治療費の一部を助成する制度です。</p><p>青森県は歯の健康に関する指標が全国的に課題とされており、青森市でも口腔ケアの重要性を啓発する取り組みを強化しています。高齢者の口腔機能の維持は全身の健康につながり、フレイル予防にも効果があります。</p><p><span class="marker-green">年1回の歯科健診が無料で受けられ、市内の指定歯科医院で実施</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>青森市に住民登録がある75歳以上の方（後期高齢者医療制度加入者）が対象です。</p><div class="summary-box" data-title="利用の流れ"><p>市から届く受診券を受け取る</p><p>市内の指定歯科医院に予約する</p><p>受診券と保険証を持参して受診する</p><p>治療が必要な場合は引き続き受診</p></div><p>歯科健診については<strong>事前の申請は不要</strong>で、受診券が届いたら直接歯科医院に予約してください。治療費助成は健診後に窓口で案内されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>歯科健診は自己負担なしで無料</strong>です。健診の結果、治療が必要な場合は通常の保険診療で治療を受けられます。</p><p><span class="marker">低所得世帯の方は治療費の自己負担分についても減免制度</span>が利用できる場合があります。</p><div class="highlight-box">口腔機能の低下は誤嚥性肺炎のリスクを高めます。青森市では歯科健診とあわせて口腔機能向上プログラムも実施しています。お口の健康を守ることが全身の健康維持につながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-school-lunch',
    title: '青森市 学校給食費助成制度',
    organization: '青森市',
    type: 'local',
    maxAmount: '給食費の全額または一部を助成',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '青森県',
    tags: ['青森市', '学校給食', '助成金'],
    eligibility: '青森市立小中学校に在籍する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中も受付可）',
    description: '青森市が実施する学校給食費助成制度です。経済的に困窮する世帯の給食費を全額または一部助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 学校給食費助成制度は、<span class="marker">経済的な理由で給食費の負担が困難な世帯</span>に対し、学校給食費の全額または一部を助成する制度です。</p><p>青森市の学校給食は、りんごやホタテなど地元食材を積極的に取り入れた栄養バランスの取れたメニューが特長です。すべての子どもが安心して給食を食べられるよう、経済的な理由で給食費を負担できない家庭を支援しています。</p><p><span class="marker-green">就学援助制度の認定を受けた世帯は給食費が全額助成</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受給している世帯</p><p>就学援助の認定を受けた世帯（準要保護世帯）</p><p>第3子以降の児童生徒を養育する多子世帯</p></div><p>就学援助の申請とあわせて、学校を通じて青森市教育委員会に申請します。必要書類は申請書と所得関係書類です。</p><p><span class="marker">年度途中の転入や家計急変にも随時対応</span>しています。学校の事務室または教育委員会にご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>就学援助認定世帯は<strong>給食費の全額が助成</strong>されます。小学校で年間約5万円、中学校で年間約6万円程度の負担が軽減されます。</p><p><span class="marker">多子世帯支援として第3子以降の給食費についても軽減措置</span>が講じられています。</p><div class="note-box">給食費の助成は就学援助制度の一部として実施されています。給食費以外にも学用品費や修学旅行費の支給を受けられる場合がありますので、就学援助制度全体の内容をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-uij-turn',
    title: '青森市 UIJターン就職支援金',
    organization: '青森市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '青森県',
    tags: ['青森市', 'UIJターン', '支援金'],
    eligibility: '東京圏から青森市へUIJターン就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '青森市が実施するUIJターン就職支援金です。東京圏から青森市へ移住し就職した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 UIJターン就職支援金は、<span class="marker">東京23区に在住または東京圏から東京23区に通勤していた方が青森市に移住し就職</span>した場合に支給される支援金です。</p><p>青森市は四季折々の祭りと豊かな食文化が魅力の街です。ねぶた祭には毎年300万人を超える観光客が訪れます。近年はIT企業のサテライトオフィス誘致にも力を入れており、テレワーク移住の受け入れ体制も整っています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円の加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または通勤していたこと</p><p>青森市に転入後3か月以上1年以内に申請すること</p><p>青森県のマッチングサイト掲載企業への就職またはテレワークでの就業</p><p>5年以上継続して青森市に居住する意思があること</p></div><p>青森市役所経済部商工業政策課に申請書と必要書類を提出します。<strong>転入届提出後3か月以上経過してから</strong>申請が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子どもがいる場合は子ども加算があります。</p><p><span class="marker">5年以内に青森市から転出した場合は支援金の全額または半額を返還</span>する必要があります。</p><div class="note-box">テレワーク移住の場合も、所属企業の業務を青森市内で行う場合は対象となります。青森市では移住希望者向けのオンライン相談や現地見学ツアーも実施しています。まずは「あおもり暮らし」サポートセンターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-nursing-home-reform',
    title: '青森市 介護保険住宅改修費支給',
    organization: '青森市',
    type: 'local',
    maxAmount: '最大20万円（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '青森県',
    tags: ['青森市', '介護リフォーム', '住宅改修'],
    eligibility: '青森市に住所を有し、要支援・要介護認定を受けた方',
    applicationPeriod: '通年',
    description: '青森市が実施する介護保険住宅改修費支給制度です。要介護者の自宅をバリアフリー化する改修工事に最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 介護保険住宅改修費支給は、<span class="marker">要支援または要介護の認定を受けた方が自宅のバリアフリー化改修を行う際</span>に、費用の一部を支給する制度です。</p><p>青森市は積雪寒冷地であり、冬季は玄関周りの凍結による転倒リスクが高く、住宅のバリアフリー化は特に重要です。手すりの設置や段差の解消など、日常生活の安全を確保するための改修工事が対象です。</p><p><strong>上限は20万円</strong>で、<span class="marker-green">自己負担は所得に応じて1割〜3割</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置等）</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取り替え</p><p>洋式便器への便器の取り替え</p></div><p>青森市役所介護保険課に事前申請書、工事見積書、改修箇所の写真等を提出します。担当ケアマネジャーが理由書を作成します。</p><p><span class="marker">必ず工事着手前に事前申請が必要</span>です。事前申請なしに行った工事は支給の対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給限度額は<strong>被保険者1人につき20万円</strong>です。自己負担割合（1割〜3割）を除いた額が支給されます。1割負担の場合、実質最大18万円の支給です。</p><p><span class="marker">要介護度が3段階以上上がった場合や転居した場合は、再度20万円の枠が利用</span>できます。</p><div class="highlight-box">青森市の冬は積雪が多く、玄関や廊下の段差解消は転倒事故の防止に直結します。ケアマネジャーと相談して、生活動線に合った改修計画を立てましょう。福祉用具の貸与・購入とあわせて利用すると効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-energy-support',
    title: '青森市 冬季エネルギー支援給付金',
    organization: '青森市',
    type: 'local',
    maxAmount: '1世帯あたり3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '青森県',
    tags: ['青森市', 'エネルギー支援', '給付金'],
    eligibility: '青森市に住所を有する住民税非課税世帯',
    applicationPeriod: '毎年11月〜翌年2月',
    description: '青森市が実施する冬季エネルギー支援給付金です。住民税非課税世帯に対し暖房費等の負担軽減のため3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 冬季エネルギー支援給付金は、<span class="marker">住民税非課税世帯に対して、冬季の暖房費等のエネルギー費用の負担を軽減</span>するための給付金です。</p><p>青森市は年間降雪量が世界的にも有数の豪雪都市です。冬季（11月〜3月）の暖房費は家計に大きな負担となり、灯油代や電気代だけで月数万円に達することも珍しくありません。特に低所得世帯にとって冬のエネルギー費用は深刻な問題です。</p><p><span class="marker-green">対象世帯には確認書が郵送され、返送するだけで給付を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>基準日時点で青森市に住民登録があり、世帯全員が住民税非課税である世帯が対象です。</p><div class="summary-box" data-title="手続きの流れ"><p>対象世帯に確認書が届く</p><p>内容を確認して返送する</p><p>審査後、指定口座に振り込まれる</p></div><p>確認書が届いた世帯は記載内容を確認し、返送するだけで手続きが完了します。<strong>確認書が届かない場合でも要件を満たす方は申請可能</strong>ですので、青森市役所福祉政策課にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり3万円</strong>です。世帯人数にかかわらず定額です。</p><p><span class="marker">確認書の返送期限を過ぎると給付が受けられなくなります</span>ので、届いたら早めに手続きしてください。</p><div class="note-box">生活保護世帯には別途冬季加算が支給されるため、本給付金の対象外となります。DV避難中の方で住民票を移していない場合は特例措置がありますので、窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-seismic-diagnosis',
    title: '青森市 木造住宅耐震診断助成事業',
    organization: '青森市',
    type: 'local',
    maxAmount: '診断費用の全額助成（自己負担なし）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '青森県',
    tags: ['青森市', '耐震診断', '助成金'],
    eligibility: '青森市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '青森市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額助成する制度です。</p><p>青森市は日本海溝沿いの地震や内陸直下型地震のリスクがあり、旧耐震基準の住宅の安全性確認は喫緊の課題です。この制度では、市が派遣する耐震診断士が無料で診断を行います。</p><p><span class="marker-green">自己負担なしで専門家による耐震診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>青森市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>地上2階建て以下であること</p><p>在来軸組構法またはツーバイフォー構法であること</p></div><p>青森市役所都市整備部建築指導課に申請書を提出します。申請後、市が耐震診断士を派遣します。</p><p><span class="marker">毎年度の受付件数に限りがありますので、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額を青森市が負担</strong>するため、所有者の自己負担はありません。診断には約2〜3時間かかります。</p><p><span class="marker">診断の結果、耐震性が不足していると判定された場合は、別途「耐震改修補助金」の制度</span>も利用できます。</p><div class="note-box">耐震診断は住宅の安全性を確認する第一歩です。診断結果に基づいて、必要に応じて耐震改修工事を検討しましょう。青森市では耐震改修工事にも補助制度（上限100万円程度）を設けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 盛岡市（岩手県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'morioka-childcare-subsidy',
    title: '盛岡市 子育て支援助成金',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '児童1人あたり年額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['盛岡市', '子育て支援', '助成金'],
    eligibility: '盛岡市に住所を有し、小学校入学前の児童を養育する保護者',
    applicationPeriod: '通年',
    description: '盛岡市が実施する子育て支援助成金です。小学校入学前の児童を養育する世帯に年額3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 子育て支援助成金は、<span class="marker">小学校入学前（0歳〜5歳）の児童を養育する保護者</span>に対し、子育てにかかる費用を支援する制度です。</p><p>盛岡市は岩手県の県庁所在地で、北上川・中津川・雫石川の3つの川が流れる水の都として知られています。盛岡三大麺（わんこそば・冷麺・じゃじゃ麺）で有名なこの街は、NYタイムズの「2023年に行くべき52か所」にも選ばれました。子育て環境の充実にも力を入れています。</p><p><span class="marker-green">所得制限なしで、対象児童がいるすべての世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>盛岡市に住民登録があり、小学校入学前の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保護者の本人確認書類</p><p>児童の健康保険証</p><p>振込先口座情報</p></div><p>盛岡市役所子ども未来部の窓口または郵送で申請できます。出生届・転入届と同時に手続きを行うとスムーズです。<strong>申請月の翌月分から支給対象</strong>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は児童1人あたり<strong>年額3万円</strong>です。年度末にまとめて振り込まれます。</p><p><span class="marker">盛岡市から転出した場合は月割りで精算</span>されます。転出届と同時に受給資格喪失届を提出してください。</p><div class="note-box">国の児童手当との併用が可能です。盛岡市ではこのほかにも、子育て世代包括支援センター「にこさぽ」での相談支援や、一時預かり保育の助成など、多彩な子育て支援を展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-parenting-allowance',
    title: '盛岡市 多子世帯子育て応援金',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '第3子以降1人あたり10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['盛岡市', '多子世帯', '応援金'],
    eligibility: '盛岡市に住所を有し、第3子以降の児童が出生した世帯',
    applicationPeriod: '出生日から6か月以内',
    description: '盛岡市が実施する多子世帯子育て応援金です。第3子以降の児童が出生した世帯に1人あたり10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 多子世帯子育て応援金は、<span class="marker">第3子以降の児童が出生した世帯</span>に対し、子育て応援金を支給する制度です。</p><p>盛岡市は少子化対策の一環として、多子世帯への経済的支援を強化しています。3人以上の子どもを育てる家庭は出費が多く、出産に伴う費用やベビー用品の購入費が家計の大きな負担になります。この応援金はそうした負担を軽減するために設けられました。</p><p><span class="marker-green">第3子以降の児童1人あたり10万円が支給され、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>盛岡市に住民登録があること</p><p>第3子以降の児童が出生したこと</p><p>出生した児童と同居し養育していること</p><p>出生日から6か月以内に申請すること</p></div><p>盛岡市役所子ども未来部に申請書、母子健康手帳の写し、口座情報を提出します。</p><p><span class="marker">「第3子以降」のカウントは18歳年度末までの児童が対象</span>です。上の子が大学生などで既に18歳年度末を過ぎている場合はカウントに含まれません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は第3子以降の児童<strong>1人あたり10万円</strong>です。双子以上の場合は人数分が支給されます。</p><p><span class="marker">申請期限は出生日から6か月以内です</span>。期限を過ぎると受給できませんのでご注意ください。</p><div class="highlight-box">盛岡市では多子世帯への支援として、保育料の軽減（第2子半額・第3子以降無料）や、放課後児童クラブの利用料減免なども実施しています。複数の制度を組み合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-vacant-house',
    title: '盛岡市 空き家活用リフォーム補助金',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '岩手県',
    tags: ['盛岡市', '空き家活用', '補助金'],
    eligibility: '盛岡市内の空き家を取得し、居住用にリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '盛岡市が実施する空き家活用リフォーム補助金です。空き家を取得してリフォームする方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 空き家活用リフォーム補助金は、<span class="marker">盛岡市内の空き家を取得し、自ら居住するためにリフォーム工事を行う方</span>を対象に、費用の一部を補助する制度です。</p><p>盛岡市では人口減少に伴い空き家が増加しており、その利活用が重要な課題となっています。盛岡城跡や中津川沿いの風情ある街並みを維持するためにも、空き家の有効活用は欠かせません。この制度は空き家の解消と定住促進を同時に図るものです。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">市外からの移住者にはさらに加算</span>がある場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>盛岡市の空き家バンクに登録されている物件を取得すること</p><p>取得後にリフォームを行い自ら居住すること</p><p>5年以上継続して居住する意思があること</p><p>市税の滞納がないこと</p></div><p>盛岡市役所都市整備部住宅政策課に申請書、売買契約書の写し、工事見積書等を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定を受けてからリフォーム工事に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限50万円</strong>です。市外からの移住者の場合は上乗せ加算がある場合があります。</p><p><span class="marker">5年以内に当該住宅から転居した場合は、補助金の一部を返還</span>する必要があります。</p><div class="note-box">空き家バンクに登録されている物件の情報は盛岡市のホームページで確認できます。物件見学の調整は住宅政策課が仲介しますので、気になる物件があればお気軽にお問い合わせください。既存の住宅ローン減税との併用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-infertility',
    title: '盛岡市 不妊治療費助成制度',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '岩手県',
    tags: ['盛岡市', '不妊治療', '助成金'],
    eligibility: '盛岡市に住所を有し、不妊治療を受けている夫婦またはカップル',
    applicationPeriod: '通年（治療終了日の翌日から6か月以内）',
    description: '盛岡市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し、1回あたり最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 不妊治療費助成制度は、<span class="marker">不妊治療（体外受精・顕微授精等）を受けている夫婦やカップル</span>に対し、保険適用後の自己負担分を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、それでもなお自己負担が大きい場合があります。盛岡市では、子どもを望む方々が経済的な理由であきらめることがないよう、治療費の一部を助成しています。</p><p><span class="marker-green">保険適用の不妊治療に加え、先進医療として実施される治療も助成対象</span>となる場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦またはカップルのいずれかが盛岡市に住民登録があること</p><p>保険適用の不妊治療を受けていること</p><p>市税の滞納がないこと</p><p>治療終了日の翌日から6か月以内に申請すること</p></div><p>盛岡市保健所健康増進課に申請書、医療機関発行の証明書、領収書等を提出します。</p><p><span class="marker">所得制限は設けられておらず、すべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分に対し、<strong>1回の治療あたり最大10万円</strong>です。年度内の回数制限が設けられている場合があります。</p><p><span class="marker">岩手県の不妊治療費助成制度との併用が可能</span>ですが、助成額の合計が自己負担額を超えることはできません。</p><div class="highlight-box">盛岡市では不妊治療費の助成に加えて、不妊専門相談センターでのカウンセリングも無料で利用できます。治療に関する不安や悩みを専門の相談員に相談できますので、お気軽にご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-afterschool',
    title: '盛岡市 放課後児童クラブ利用料助成',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '月額最大5,000円の減免',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '岩手県',
    tags: ['盛岡市', '放課後児童クラブ', '助成金'],
    eligibility: '盛岡市内の放課後児童クラブを利用する児童の保護者で、所得が一定以下の方',
    applicationPeriod: '通年',
    description: '盛岡市が実施する放課後児童クラブ利用料助成制度です。低所得世帯の利用料を月額最大5,000円減免します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 放課後児童クラブ利用料助成は、<span class="marker">市内の放課後児童クラブ（学童保育）を利用する低所得世帯</span>の利用料を軽減する制度です。</p><p>盛岡市には約80か所の放課後児童クラブがあり、共働き家庭やひとり親家庭の小学生の放課後の居場所として重要な役割を担っています。利用料が家計の負担とならないよう、所得に応じた減免措置を設けています。</p><p><span class="marker-green">住民税非課税世帯は利用料が全額免除、その他の低所得世帯も一部減免</span>の対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>盛岡市内の放課後児童クラブを利用する小学生の保護者で、世帯の所得が一定基準以下の方が対象です。</p><div class="summary-box" data-title="減免の区分"><p>住民税非課税世帯：利用料全額免除</p><p>住民税均等割のみ課税世帯：月額5,000円減免</p><p>ひとり親世帯：上記に加え優遇措置あり</p><p>多子世帯（第2子以降）：利用料半額</p></div><p>利用している放課後児童クラブを通じて、盛岡市子ども未来部に申請します。<strong>所得証明書の提出</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>住民税非課税世帯は<strong>利用料が全額免除</strong>されます。その他の低所得世帯は月額最大5,000円の減免です。</p><p><span class="marker">年度ごとの申請が必要で、毎年4月に更新手続き</span>を行います。年度途中の申請も受け付けています。</p><div class="note-box">放課後児童クラブの利用料は施設によって異なります（月額5,000円〜10,000円程度）。減免申請は各クラブの利用申込みとあわせて行えます。長期休業期間（夏休み等）の利用料についても同様に減免が適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-women-startup',
    title: '盛岡市 女性起業支援補助金',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '岩手県',
    tags: ['盛岡市', '女性起業', '補助金'],
    eligibility: '盛岡市内で新たに起業する女性、または起業後1年以内の女性事業者',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '盛岡市が実施する女性起業支援補助金です。市内で起業する女性に対し最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 女性起業支援補助金は、<span class="marker">盛岡市内で新たに事業を立ち上げる女性</span>を対象に、起業にかかる初期費用を補助する制度です。</p><p>盛岡市は女性の活躍推進に力を入れており、女性ならではの視点を活かした事業の創出を後押ししています。カフェ・雑貨店・エステサロンなどの店舗開業から、ITやコンサルティングなどの専門サービスまで、幅広い業種が対象です。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は50万円</strong>です。<span class="marker-green">起業に関するセミナー受講や専門家の伴走支援も受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>盛岡市内で起業する（または起業後1年以内の）女性であること</p><p>市の起業支援セミナーを受講済みであること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p></div><p>盛岡市役所商工労働部産業振興課に事業計画書と申請書を提出します。書類審査とプレゼンテーションが行われます。</p><p><span class="marker">盛岡市産業支援センターで無料の起業相談が受けられます</span>。事業計画の策定から経営のアドバイスまで、専門家がサポートします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。店舗改装費、設備購入費、広告宣伝費、法人設立費用などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定後に経費を支出してください。</p><div class="highlight-box">盛岡市では女性起業家向けのネットワーキングイベントや先輩起業家との交流会も定期的に開催しています。起業前の情報収集や人脈づくりに活用しましょう。人件費や運転資金は補助対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-nursing-equipment',
    title: '盛岡市 介護用品支給事業',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '月額6,250円相当の介護用品',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '岩手県',
    tags: ['盛岡市', '介護用品', '支給'],
    eligibility: '盛岡市に住所を有し、要介護4・5の認定を受けた高齢者を在宅で介護する家族',
    applicationPeriod: '通年',
    description: '盛岡市が実施する介護用品支給事業です。在宅で要介護4・5の方を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつや尿取りパッドなどの介護用品を支給する制度です。</p><p>盛岡市は在宅介護を支えるさまざまなサービスを提供しています。介護者の経済的・精神的な負担を軽減し、住み慣れた自宅での生活を続けられるよう支援することが本事業の目的です。</p><p><span class="marker-green">住民税非課税世帯の方が優先的に対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>盛岡市に住民登録があり、以下の要件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の65歳以上の方を在宅で介護していること</p><p>被介護者が在宅で生活していること</p><p>被介護者の世帯が住民税非課税であること</p></div><p>盛岡市役所長寿社会課に申請書と介護保険被保険者証を提出します。<strong>認定後は毎月自宅に介護用品が配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>月額6,250円相当</strong>の介護用品です。紙おむつ・尿取りパッド・使い捨て手袋等から選択できます。</p><p><span class="marker">入院中や施設入所中は支給が停止</span>されます。退院・退所後に再開届を提出してください。</p><div class="highlight-box">盛岡市では介護用品の支給のほか、介護者向けのリフレッシュ事業（温泉入浴券の交付等）や介護者交流会も実施しています。介護の負担を一人で抱え込まず、地域包括支援センターに相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-migration-bonus',
    title: '盛岡市 移住定住促進奨励金',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '岩手県',
    tags: ['盛岡市', '移住定住', '奨励金'],
    eligibility: '盛岡市外から盛岡市に移住し、定住する意思のある方',
    applicationPeriod: '通年（転入後1年以内）',
    description: '盛岡市が実施する移住定住促進奨励金です。盛岡市へ移住した方に最大30万円の奨励金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 移住定住促進奨励金は、<span class="marker">盛岡市外から新たに盛岡市に移住し定住する方</span>に対し、奨励金を支給する制度です。</p><p>NYタイムズで「2023年に行くべき52か所」の第2位に選ばれた盛岡市は、歴史的な街並みと現代的なカルチャーが融合する魅力的な都市です。北上川の清流と岩手山の雄大な景観に囲まれ、食文化も豊かで、移住先として注目を集めています。</p><p><span class="marker-green">単身15万円、世帯30万円が支給され、子育て世帯にはさらに加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>盛岡市外に1年以上居住していた方が新たに盛岡市に転入すること</p><p>転入後1年以内に申請すること</p><p>5年以上盛岡市に居住する意思があること</p><p>盛岡市内で就業または就学していること</p></div><p>盛岡市役所まちづくり推進課に申請書、住民票、就業証明書等を提出します。</p><p><span class="marker">転入届提出後3か月以上経過してから申請が可能</span>です。オンライン申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身15万円、世帯30万円</strong>です。18歳未満の子どもがいる場合は1人あたり5万円の加算があります。</p><p><span class="marker">5年以内に盛岡市から転出した場合は奨励金の返還</span>が求められます。</p><div class="note-box">国の移住支援金（東京圏からの移住者対象）と併用できる場合があります。盛岡市では移住者向けの住まい相談や暮らし体験ツアーも実施していますので、移住を検討中の方はまず盛岡市の移住相談窓口にご連絡ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-bousai-equipment',
    title: '盛岡市 家庭用防災設備設置補助金',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '岩手県',
    tags: ['盛岡市', '防災設備', '補助金'],
    eligibility: '盛岡市内に住所を有し、家庭用防災設備を設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '盛岡市が実施する家庭用防災設備設置補助金です。感震ブレーカーや家具転倒防止器具等の設置に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 家庭用防災設備設置補助金は、<span class="marker">家庭内の防災設備（感震ブレーカー・家具転倒防止器具・ガラス飛散防止フィルム等）</span>の設置にかかる費用を補助する制度です。</p><p>盛岡市は東日本大震災の経験を踏まえ、家庭レベルでの防災対策の重要性を認識しています。地震による通電火災の防止や家具の転倒防止は、命を守るための基本的な備えです。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">高齢者のみ世帯や障害者世帯には優先的に補助</span>が適用されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>ガラス飛散防止フィルム</p><p>家庭用蓄電池（防災用）</p></div><p>盛岡市役所危機管理防災課に申請書と見積書・カタログ等を提出します。</p><p><span class="marker">設置工事の前に申請が必要</span>です。自分で設置できる器具については、購入前に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。複数の設備をまとめて申請することも可能です。</p><p><span class="marker">1世帯1回限りの補助</span>です。過去にこの補助金を利用した世帯は再度申請できません。</p><div class="note-box">盛岡市では防災設備の補助に加えて、防災士の資格取得支援や地域防災訓練への助成も行っています。家庭での備えと地域での備えをあわせて進めることで、災害に強いまちづくりにつながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 秋田市（秋田県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'akita-city-childcare-subsidy',
    title: '秋田市 子育て世帯生活支援特別給付金',
    organization: '秋田市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['秋田市', '子育て支援', '給付金'],
    eligibility: '秋田市に住所を有し、住民税非課税世帯等で18歳未満の児童を養育する保護者',
    applicationPeriod: '通年（該当年度内）',
    description: '秋田市が実施する子育て世帯生活支援特別給付金です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 子育て世帯生活支援特別給付金は、<span class="marker">住民税非課税世帯等の低所得の子育て世帯</span>に対し、生活支援のための給付金を支給する制度です。</p><p>秋田市は竿燈まつりや千秋公園の桜で知られる美しい都市です。日本海側の気候で冬は積雪が多く、暖房費や防寒衣料の出費が家計に影響します。物価高騰の影響を受けやすい低所得の子育て世帯を重点的に支援しています。</p><p><span class="marker-green">ひとり親世帯は特に手厚い支援対象とされ、迅速な給付</span>が行われます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>住民税均等割が非課税の世帯で児童を養育する保護者</p><p>ひとり親世帯で児童扶養手当を受給している方</p><p>家計急変により住民税非課税相当となった世帯</p></div><p>児童扶養手当受給者は<strong>申請不要で自動的に支給</strong>されます。その他の対象者は秋田市役所子ども未来部に申請書と所得関係書類を提出してください。</p><p><span class="marker">家計急変の場合は収入の減少を証明する書類が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。18歳の年度末までの児童が対象です。</p><p><span class="marker">他の自治体で同様の給付金を受給している場合は重複受給できません</span>。</p><div class="note-box">本給付金は非課税であり、所得税・住民税の課税対象にはなりません。また、生活保護の収入認定からも除外されます。申請期限は年度末までですので、対象となる方は忘れずに手続きしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-daycare-support',
    title: '秋田市 保育料軽減事業',
    organization: '秋田市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['秋田市', '保育料軽減', '子育て支援'],
    eligibility: '秋田市内の認可保育所・認定こども園等に児童を預けている保護者',
    applicationPeriod: '通年（入園時に自動適用）',
    description: '秋田市が実施する保育料軽減事業です。多子世帯の保育料を第2子半額、第3子以降無料に軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 保育料軽減事業は、<span class="marker">認可保育所・認定こども園・小規模保育事業所等を利用する多子世帯</span>の保育料を軽減する制度です。</p><p>秋田市は全国学力テストで常にトップクラスの成績を誇る教育先進地域です。子どもの育ちを社会全体で支えるという理念のもと、保育料の負担軽減にも積極的に取り組んでいます。3歳未満児の保育料は所得に応じて設定されますが、多子世帯には大幅な軽減措置が適用されます。</p><p><span class="marker-green">第2子は保育料半額、第3子以降は保育料無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>秋田市内の認可保育施設を利用する0歳〜2歳児の保護者が対象です（3歳以上は幼児教育・保育の無償化により無料）。</p><div class="summary-box" data-title="軽減内容"><p>第1子：通常の保育料（所得に応じた額）</p><p>第2子：保育料の半額</p><p>第3子以降：保育料無料</p><p>住民税非課税世帯：全員無料</p></div><p>保育所等の入所申込み時に<strong>自動的に適用</strong>されるため、別途の申請は不要です。きょうだいの在籍状況は市が確認します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子の保育料は<strong>通常額の半額</strong>、第3子以降は<strong>無料</strong>です。「第何子」のカウントは小学校就学前の児童で行います。</p><p><span class="marker">年度途中にきょうだいが卒園した場合、カウントが変わる可能性</span>がありますので、変更届を確認してください。</p><div class="highlight-box">秋田市では保育料軽減に加えて、病児保育や一時預かりの利用料助成も行っています。「あきたっ子すこやかサポート」として、子育てのさまざまな場面を支える総合的な支援策を展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-barrier-free',
    title: '秋田市 住宅バリアフリー改修補助金',
    organization: '秋田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '秋田県',
    tags: ['秋田市', 'バリアフリー', '補助金'],
    eligibility: '秋田市内に住所を有し、自宅のバリアフリー改修を行う高齢者・障害者のいる世帯',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '秋田市が実施する住宅バリアフリー改修補助金です。高齢者・障害者のいる世帯の住宅改修に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 住宅バリアフリー改修補助金は、<span class="marker">65歳以上の高齢者や障害のある方がいる世帯</span>が自宅のバリアフリー化工事を行う際に、費用の一部を補助する制度です。</p><p>秋田市は高齢化率が全国平均を上回っており、住み慣れた自宅で安全に暮らし続けるための住環境整備が重要な課題です。特に冬季は積雪による足元の危険が増すため、室内のバリアフリー化は安全対策として欠かせません。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">介護保険の住宅改修費と併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの設置（階段・廊下・浴室等）</p><p>床の段差解消（スロープ・かさ上げ）</p><p>滑りにくい床材への変更</p><p>浴室・トイレの改修（洋式化等）</p><p>廊下や間口の拡張</p></div><p>秋田市役所長寿福祉課に申請書、工事見積書、施工箇所の写真等を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定後に工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。工事費が10万円未満の場合は対象外です。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と併用できますが、同一箇所の重複補助はできません</span>。</p><div class="note-box">秋田市内に本店を有する施工業者への発注が条件です。工事完了後は実績報告書と工事完了写真の提出が必要です。年度内に工事が完了しない場合は繰越が認められない場合がありますので、計画的に進めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-mental-health',
    title: '秋田市 こころの健康相談・治療費助成',
    organization: '秋田市',
    type: 'local',
    maxAmount: '通院医療費の自己負担を1割に軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '秋田県',
    tags: ['秋田市', 'メンタルヘルス', '医療費助成'],
    eligibility: '秋田市に住所を有し、精神疾患の通院治療を受けている方',
    applicationPeriod: '通年',
    description: '秋田市が実施するこころの健康相談・治療費助成制度です。精神疾患の通院治療費の自己負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 こころの健康相談・治療費助成は、<span class="marker">精神疾患により通院治療を受けている方</span>の医療費自己負担を軽減する制度です。</p><p>秋田市は自殺予防対策に全国に先駆けて取り組んできた自治体として知られています。こころの健康を守るためには早期の相談と継続的な治療が重要であり、経済的な理由で治療を中断することがないよう支援しています。</p><p><span class="marker-green">自立支援医療（精神通院医療）の制度により、自己負担が3割から1割に軽減</span>されます。さらに秋田市独自の上乗せ助成があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>秋田市に住民登録があり、精神疾患で継続的に通院治療を受けている方が対象です。</p><div class="summary-box" data-title="対象となる精神疾患"><p>統合失調症・気分障害（うつ病・双極性障害）</p><p>不安障害・パニック障害</p><p>てんかん</p><p>発達障害（自閉スペクトラム症等）</p><p>その他精神科医師が認める精神疾患</p></div><p>秋田市保健所に申請書と主治医の診断書（意見書）を提出します。<strong>申請から受給者証の交付まで約1〜2か月</strong>かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>自立支援医療の認定を受けると、<strong>通院医療費の自己負担が1割に軽減</strong>されます。さらに所得に応じた月額上限額が設定されます。</p><p><span class="marker">市民税非課税世帯の場合、月額上限2,500円で通院治療が可能</span>です。</p><div class="highlight-box">秋田市では通院費助成のほか、無料の「こころの健康相談」を毎月実施しています。精神科医やカウンセラーに相談できますので、一人で悩まず早めにご利用ください。秋田市保健所（☎018-883-1180）で予約を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-scholarship',
    title: '秋田市 奨学金返還支援補助金',
    organization: '秋田市',
    type: 'local',
    maxAmount: '年間最大18万円（最長5年間）',
    maxAmountNum: 18,
    category: 'education',
    prefecture: '秋田県',
    tags: ['秋田市', '奨学金返還', '補助金'],
    eligibility: '秋田市内に居住し就業する奨学金返還中の若者（概ね35歳以下）',
    applicationPeriod: '毎年4月〜6月',
    description: '秋田市が実施する奨学金返還支援補助金です。秋田市に居住・就業する若者の奨学金返還額の一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 奨学金返還支援補助金は、<span class="marker">秋田市内に居住し就業する若者の奨学金返還額の一部</span>を補助する制度です。</p><p>秋田市は若年層の県外流出が深刻な課題となっています。大学卒業後に奨学金の返還を抱える若者が秋田市で働くことを選択するインセンティブとして、この補助制度が設けられました。秋田市に住み続けることで奨学金の負担を軽減できます。</p><p>補助額は年間の返還額の2分の1以内で、<strong>年間最大18万円、最長5年間で最大90万円</strong>です。<span class="marker-green">UIJターン者には加算措置</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>秋田市内に住所を有し居住していること</p><p>秋田市内の事業所で正規雇用で就業していること</p><p>日本学生支援機構等の奨学金を返還中であること</p><p>申請時に概ね35歳以下であること</p></div><p>秋田市役所企画財政部人口減少・移住定住対策課に申請書、奨学金返還証明書、在職証明書等を提出します。</p><p><span class="marker">募集は毎年4月〜6月で、審査の上交付が決定</span>されます。定員がありますので早めに申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は年間返還額の2分の1以内で、<strong>年間最大18万円</strong>です。最長5年間にわたり補助が受けられます。</p><p><span class="marker">補助期間中に秋田市から転出した場合や離職した場合は、補助が終了</span>します。</p><div class="note-box">秋田県の奨学金返還助成制度との併用が可能な場合がありますので、県の窓口にも確認してください。本補助金は課税対象の雑所得となりますので、確定申告の際にはご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-telework-bonus',
    title: '秋田市 テレワーク移住支援金',
    organization: '秋田市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '秋田県',
    tags: ['秋田市', 'テレワーク', '移住支援'],
    eligibility: '東京圏からテレワークで秋田市に移住した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '秋田市が実施するテレワーク移住支援金です。東京圏からテレワークで秋田市に移住した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 テレワーク移住支援金は、<span class="marker">東京圏に所在する企業に勤務しながらテレワークで秋田市に移住した方</span>に支給される支援金です。</p><p>秋田市はコロナ禍以降のテレワーク普及を追い風に、リモートワーカーの受け入れに積極的に取り組んでいます。千秋公園やにぎわい交流館AUなどコワーキングスペースも整備され、自然豊かな環境で仕事ができる魅力を打ち出しています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円の加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前に東京圏（東京都・埼玉県・千葉県・神奈川県の一部）に在住していたこと</p><p>所属企業がテレワークでの勤務を認めていること</p><p>秋田市に転入後3か月以上1年以内に申請すること</p><p>5年以上秋田市に居住する意思があること</p></div><p>秋田市役所人口減少・移住定住対策課に申請書、テレワーク勤務証明書、住民票等を提出します。</p><p><span class="marker">フリーランスやリモート副業の方は対象外</span>となる場合があります。事前に窓口で確認してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。子ども加算（18歳未満1人あたり100万円）もあります。</p><p><span class="marker">5年以内に秋田市から転出した場合は支援金の全額または半額を返還</span>する必要があります。</p><div class="highlight-box">秋田市ではテレワーク移住者向けに「お試し移住」プログラム（最大2週間の宿泊費助成）も実施しています。まずは秋田での暮らしを体験してから移住を決めることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-nursing-home-reform',
    title: '秋田市 高齢者住宅改修支援事業',
    organization: '秋田市',
    type: 'local',
    maxAmount: '最大20万円（介護保険適用）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '秋田県',
    tags: ['秋田市', '高齢者住宅改修', '介護保険'],
    eligibility: '秋田市に住所を有し、要支援・要介護認定を受けた方',
    applicationPeriod: '通年',
    description: '秋田市が実施する高齢者住宅改修支援事業です。要介護者の自宅バリアフリー化に介護保険から最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 高齢者住宅改修支援事業は、<span class="marker">要支援または要介護の認定を受けた方が住み慣れた自宅で安全に暮らし続ける</span>ために、住宅のバリアフリー改修費用を支給する制度です。</p><p>秋田市は冬季の積雪と低温が厳しい地域であり、住宅内での転倒事故のリスクが高い傾向にあります。手すりの設置や段差解消など、日常動作の安全を確保するための改修が特に重要です。</p><p><strong>支給上限は20万円</strong>で、<span class="marker-green">自己負担は所得に応じて1割〜3割</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの取り付け（玄関・階段・浴室・トイレ等）</p><p>段差の解消（敷居の撤去・スロープ設置等）</p><p>滑り防止の床材変更</p><p>引き戸等への扉の取り替え</p><p>洋式便器への便器の取り替え</p></div><p>担当のケアマネジャーに相談の上、秋田市役所介護保険課に事前申請を行います。ケアマネジャーが「住宅改修が必要な理由書」を作成します。</p><p><span class="marker">必ず工事着手前に事前申請が必要</span>です。事前申請なしの工事は支給対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給上限は<strong>被保険者1人あたり20万円</strong>です。1割負担の場合、実質最大18万円の支給となります。</p><p><span class="marker">要介護度が3段階以上上がった場合や転居した場合は、改めて20万円の枠を利用</span>できます。</p><div class="note-box">秋田市では介護保険の住宅改修に加え、市独自のバリアフリー改修補助金（上限30万円）も併用できる場合があります。ただし同一工事への重複補助はできません。工事内容の振り分けについてはケアマネジャーにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-elderly-support',
    title: '秋田市 高齢者除雪支援事業',
    organization: '秋田市',
    type: 'local',
    maxAmount: '1シーズン最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '秋田県',
    tags: ['秋田市', '除雪支援', '高齢者'],
    eligibility: '秋田市に住所を有する65歳以上のひとり暮らし高齢者または高齢者のみ世帯で、除雪が困難な方',
    applicationPeriod: '毎年10月〜翌年3月',
    description: '秋田市が実施する高齢者除雪支援事業です。除雪が困難な高齢者世帯に除雪費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 高齢者除雪支援事業は、<span class="marker">自力での除雪が困難な高齢者世帯</span>に対し、屋根の雪下ろしや玄関前の除雪にかかる費用を助成する制度です。</p><p>秋田市は年間降雪量が3メートルを超えることもある全国有数の豪雪都市です。高齢者にとって屋根の雪下ろしは命に関わる危険な作業であり、転落事故や過労による健康被害が毎年報告されています。この事業は高齢者の安全と暮らしを守るための重要な施策です。</p><p><span class="marker-green">住民税非課税世帯は助成額が増額</span>される優遇措置があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>65歳以上のひとり暮らし高齢者世帯</p><p>65歳以上の高齢者のみの世帯</p><p>障害者のみの世帯</p><p>上記世帯で除雪作業が困難と認められること</p></div><p>秋田市役所長寿福祉課または各地域の民生委員に相談・申請します。</p><p><span class="marker">毎年10月から翌年3月まで受付</span>しています。降雪前に余裕をもって申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1シーズン（12月〜3月）あたり最大3万円</strong>です。屋根の雪下ろし1回あたり数千円の助成が受けられます。</p><p><span class="marker">助成は業者による除雪作業が対象で、自力で行う場合は対象外</span>です。市が連携する除雪業者を紹介することも可能です。</p><div class="highlight-box">秋田市では除雪支援のほかにも、「雪んこ隊」による高齢者宅の除雪ボランティア活動も展開しています。近年は除雪ロボットの実証実験も行われており、雪国の暮らしを支える新たな取り組みが進んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-seismic-diagnosis',
    title: '秋田市 木造住宅耐震診断助成事業',
    organization: '秋田市',
    type: 'local',
    maxAmount: '診断費用の全額助成',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '秋田県',
    tags: ['秋田市', '耐震診断', '助成金'],
    eligibility: '秋田市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '秋田市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>秋田市は2017年の秋田県内陸部を震源とする地震など、近年も地震被害を経験しています。積雪荷重が大きい秋田市の住宅は、地震時に屋根の雪の重みが加わるため、耐震性の確認がより重要です。</p><p><span class="marker-green">市が派遣する耐震診断士が無料で診断を行い、報告書を作成</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>秋田市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>地上2階建て以下の戸建て住宅であること</p><p>過去にこの制度で診断を受けていないこと</p></div><p>秋田市役所都市整備部建築指導課に申請書を提出します。申請後、市から耐震診断士が派遣されます。</p><p><span class="marker">毎年度の受付件数に上限があるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額を秋田市が負担</strong>するため、所有者の自己負担はありません。診断には2〜3時間程度かかります。</p><p><span class="marker">診断結果で耐震性が不足と判定された場合は、耐震改修工事の補助制度（上限100万円）</span>も利用できます。</p><div class="note-box">秋田市は豪雪地帯のため、屋根の積雪荷重を考慮した耐震診断が行われます。築40年以上の住宅にお住まいの方は、まず耐震診断で現状を確認されることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 山形市（山形県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'yamagata-city-childcare-subsidy',
    title: '山形市 子育て世帯応援給付金',
    organization: '山形市',
    type: 'local',
    maxAmount: '児童1人あたり3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '山形県',
    tags: ['山形市', '子育て支援', '給付金'],
    eligibility: '山形市に住所を有し、18歳未満の児童を養育する住民税非課税世帯等の保護者',
    applicationPeriod: '通年（該当年度内）',
    description: '山形市が実施する子育て世帯応援給付金です。低所得の子育て世帯に児童1人あたり3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 子育て世帯応援給付金は、<span class="marker">住民税非課税世帯等の低所得の子育て世帯</span>に対し、物価高騰による生活への影響を緩和するための給付金です。</p><p>山形市は蔵王連峰を望む城下町で、さくらんぼやラ・フランスの産地として知られています。花笠まつりが彩る夏と、厳しい冬の寒さの中で子育てする家庭を経済面から支えます。</p><p><span class="marker-green">対象世帯には確認書が届き、返送するだけで給付を受けられる簡便な手続き</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>住民税均等割が非課税の世帯で児童を養育する方</p><p>ひとり親世帯で児童扶養手当を受給中の方</p><p>家計急変により住民税非課税相当となった世帯</p></div><p>対象世帯には山形市役所こども未来部から確認書が届きます。内容を確認のうえ返送してください。</p><p><span class="marker">家計急変の場合は別途申請が必要</span>です。収入の減少を示す書類を添えて申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり3万円</strong>です。18歳の年度末までの児童が対象となります。</p><p><span class="marker">確認書の返送期限を過ぎると給付が受けられなくなります</span>ので、届いたら速やかに手続きしてください。</p><div class="note-box">本給付金は非課税で、所得税や住民税の課税対象にはなりません。生活保護の収入認定からも除外されます。他の自治体で同様の給付金を既に受給している場合は重複受給できません。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-birth-bonus',
    title: '山形市 出産祝金制度',
    organization: '山形市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '山形県',
    tags: ['山形市', '出産祝金', '給付金'],
    eligibility: '山形市に住所を有し、第3子以降の児童が出生した世帯',
    applicationPeriod: '出生日から6か月以内',
    description: '山形市が実施する出産祝金制度です。第3子以降の児童が出生した世帯に10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 出産祝金制度は、<span class="marker">第3子以降の児童が出生した世帯</span>に対し、出産を祝い子育てを応援するための祝金を支給する制度です。</p><p>山形市は「子育てするなら山形市」を合言葉に、多子世帯への支援を強化しています。さくらんぼの実がたわわに実るように、子どもたちの成長を見守る地域ぐるみの子育て支援に取り組んでいます。</p><p><span class="marker-green">第3子以降の出生時に1人あたり10万円が支給され、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>山形市に住民登録があること</p><p>第3子以降の児童が出生したこと</p><p>出生児童と同居し養育していること</p><p>出生日から6か月以内に申請すること</p></div><p>山形市役所こども未来部に申請書、母子健康手帳の写し、口座情報を提出します。</p><p><span class="marker">「第3子以降」のカウントは18歳年度末までの児童で数えます</span>。上の子が19歳以上の場合はカウントに含まれません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は第3子以降の児童<strong>1人あたり10万円</strong>です。双子以上の出産の場合は人数分が支給されます。</p><p><span class="marker">申請期限は出生日から6か月以内</span>です。期限後の申請は受け付けられません。</p><div class="highlight-box">山形市では出産祝金のほか、多子世帯の保育料軽減（第3子以降無料）や副食費の補助も実施しています。さらに「やまがた子育て応援パスポート」を提示すると、協賛店舗で割引やサービスが受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-housing-eco',
    title: '山形市 住宅省エネルギー改修補助金',
    organization: '山形市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '山形県',
    tags: ['山形市', '省エネ改修', '補助金'],
    eligibility: '山形市内に住所を有し、住宅の省エネルギー改修を行う方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '山形市が実施する住宅省エネルギー改修補助金です。住宅の断熱改修や高効率設備の導入に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 住宅省エネルギー改修補助金は、<span class="marker">既存住宅の断熱性能の向上や高効率設備への更新</span>にかかる費用を補助する制度です。</p><p>山形市は盆地特有の気候で、夏は暑く冬は寒い寒暖差の激しい地域です。特に冬季の暖房エネルギー消費が大きく、住宅の断熱性能を高めることは光熱費の削減に直結します。山形市は「やまがた省エネ健康住宅」の普及にも取り組んでいます。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">窓の断熱と壁断熱を組み合わせるとより高い効果</span>が期待できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（内窓設置・複層ガラス化等）</p><p>外壁・屋根・床の断熱改修</p><p>高効率給湯器（エコキュート・エネファーム等）の設置</p><p>太陽光発電設備・蓄電池の設置</p></div><p>山形市役所まちづくり推進部建築指導課に申請書、工事見積書、図面等を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。複数の工事を組み合わせた場合もトータルで30万円が上限となります。</p><p><span class="marker">年度内に工事を完了し、実績報告書を提出する必要</span>があります。</p><div class="note-box">国の住宅省エネキャンペーン（先進的窓リノベ事業等）との併用が可能な場合がありますが、補助対象費用が重複する部分は差し引かれます。山形市の厳しい冬を快適に乗り切るためにも、断熱改修は投資対効果の高い選択です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-disability-medical',
    title: '山形市 重度心身障害者医療費助成',
    organization: '山形市',
    type: 'local',
    maxAmount: '医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '山形県',
    tags: ['山形市', '障害者医療', '助成金'],
    eligibility: '山形市に住所を有し、身体障害者手帳1・2級または療育手帳A所持者',
    applicationPeriod: '通年',
    description: '山形市が実施する重度心身障害者医療費助成制度です。重度障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 重度心身障害者医療費助成は、<span class="marker">重度の身体障害または知的障害のある方</span>の保険診療にかかる自己負担分を助成する制度です。</p><p>山形市は障害のある方が安心して暮らせる地域づくりを進めており、医療費の負担を軽減することで、必要な治療を受けやすい環境を整えています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A（最重度・重度）のいずれかを持つ方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山形市に住民登録があり、対象の手帳を所持している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>身体障害者手帳または療育手帳</p><p>健康保険証</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>山形市役所障がい福祉課の窓口で申請します。申請後、<strong>「重度心身障害者医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>助成されます</strong>。一部自己負担（通院1回あたり数百円程度）が生じる場合があります。</p><p><span class="marker">山形県内の医療機関では医療証を提示することで窓口負担が軽減</span>されます。県外受診の場合は償還払いとなります。</p><div class="highlight-box">所得が一定額を超える場合は助成対象外となります。入院時の食事療養費や差額ベッド代、保険適用外の費用は対象外です。精神障害者保健福祉手帳1級の方も対象に含まれますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-school-lunch',
    title: '山形市 学校給食費無償化事業',
    organization: '山形市',
    type: 'local',
    maxAmount: '給食費の全額無償化',
    maxAmountNum: 6,
    category: 'education',
    prefecture: '山形県',
    tags: ['山形市', '給食費無償化', '教育支援'],
    eligibility: '山形市立小中学校に在籍するすべての児童生徒',
    applicationPeriod: '申請不要（自動適用）',
    description: '山形市が実施する学校給食費無償化事業です。市立小中学校の給食費を全額無償化しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 学校給食費無償化事業は、<span class="marker">山形市立小中学校に通うすべての児童生徒</span>の学校給食費を全額無償化する制度です。</p><p>山形市は「食育のまち」を掲げ、地産地消の食材を使った栄養バランスの取れた給食を提供しています。山形産のつや姫（お米）やだだちゃ豆、さくらんぼなど、地元の恵みが給食に活かされています。すべての子どもが安心して給食を食べられるよう、所得制限なしで無償化しています。</p><p><span class="marker-green">申請は不要で、在籍しているすべての児童生徒に自動的に適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山形市立小中学校に在籍するすべての児童生徒が対象です。</p><div class="summary-box" data-title="無償化の内容"><p>小学校の給食費：年間約5万円相当が無料</p><p>中学校の給食費：年間約6万円相当が無料</p><p>所得制限なし・申請不要</p></div><p>保護者による申請手続きは<strong>一切不要</strong>です。在籍する児童生徒全員に自動的に適用されますので、学校からの特別な通知もありません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>給食費の全額が無償</strong>です。保護者の負担はありません。小学校で年間約5万円、中学校で年間約6万円の軽減効果があります。</p><p><span class="marker">私立学校やインターナショナルスクールに通学している場合は本制度の対象外</span>です。</p><div class="note-box">アレルギー等の理由で給食の一部を食べられない場合でも、代替食の提供を行っています。食物アレルギーがある場合は入学時に学校にお申し出ください。年度途中の転入生も、転入後すぐに無償化が適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-sme-support',
    title: '山形市 中小企業経営強化補助金',
    organization: '山形市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '山形県',
    tags: ['山形市', '中小企業支援', '補助金'],
    eligibility: '山形市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '山形市が実施する中小企業経営強化補助金です。IT導入や設備投資など経営強化に取り組む中小企業に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 中小企業経営強化補助金は、<span class="marker">経営の生産性向上やデジタル化に取り組む市内の中小企業</span>に対し、設備投資やIT導入にかかる費用を補助する制度です。</p><p>山形市は鋳物産業や精密機械、食品加工など多彩な製造業が集積する産業都市です。DX推進や省力化投資が求められる中、中小企業の経営基盤強化を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">IT導入やDX推進に関する経費は補助率が3分の2に優遇</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>生産性向上のための設備導入費</p><p>業務効率化のためのITツール・ソフトウェア導入費</p><p>新商品開発や販路開拓にかかる経費</p><p>人材育成・研修にかかる経費</p></div><p>山形市役所商工観光部産業政策課に事業計画書と申請書を提出します。審査では経営強化の効果が評価されます。</p><p><span class="marker">山形商工会議所の経営指導員との事前相談が推奨</span>されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。DX関連は3分の2以内に優遇されます。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定後に経費を支出してください。</p><div class="note-box">国のものづくり補助金やIT導入補助金との併用はできません（同一経費への重複補助不可）。ただし、異なる経費であれば国と市の補助金をそれぞれ活用することが可能です。人件費や運転資金は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-nursing-equipment',
    title: '山形市 介護用品支給事業',
    organization: '山形市',
    type: 'local',
    maxAmount: '月額6,250円相当の介護用品',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '山形県',
    tags: ['山形市', '介護用品', '支給'],
    eligibility: '山形市に住所を有し、要介護4・5の認定を受けた高齢者を在宅で介護する家族',
    applicationPeriod: '通年',
    description: '山形市が実施する介護用品支給事業です。在宅で要介護4・5の方を介護する家族に紙おむつ等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 介護用品支給事業は、<span class="marker">要介護4または5の認定を受けた高齢者を在宅で介護している家族</span>に対し、紙おむつや尿取りパッド等の介護用品を支給する制度です。</p><p>山形市は在宅介護を支える地域包括ケアシステムの構築を進めています。介護者の経済的負担を軽減し、できるだけ長く住み慣れた自宅で暮らし続けられるよう支援しています。</p><p><span class="marker-green">住民税非課税世帯の方が対象で、毎月自宅に介護用品が届けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山形市に住民登録があり、以下の要件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けた65歳以上の方を在宅で介護していること</p><p>被介護者が在宅で生活していること（施設入所者は対象外）</p><p>被介護者の属する世帯が住民税非課税であること</p></div><p>山形市役所長寿支援課に申請書と介護保険被保険者証を提出します。<strong>申請後、毎月カタログから選んだ介護用品が配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>月額6,250円相当</strong>の介護用品です。紙おむつ・尿取りパッド・使い捨て手袋・清拭剤等から選択できます。</p><p><span class="marker">入院中や短期入所中は支給が停止</span>されます。退院後に再開届を提出してください。</p><div class="highlight-box">山形市では介護用品の支給に加えて、介護者リフレッシュ事業（温泉入浴補助券の交付等）や介護者交流会も開催しています。介護の悩みを共有できる仲間づくりの場としてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-energy-support',
    title: '山形市 冬季灯油購入助成金',
    organization: '山形市',
    type: 'local',
    maxAmount: '1世帯あたり1万円',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '山形県',
    tags: ['山形市', '灯油助成', '生活支援'],
    eligibility: '山形市に住所を有する住民税非課税のひとり暮らし高齢者等の世帯',
    applicationPeriod: '毎年11月〜翌年2月',
    description: '山形市が実施する冬季灯油購入助成金です。低所得の高齢者世帯等に灯油購入費として1万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 冬季灯油購入助成金は、<span class="marker">住民税非課税の高齢者世帯や障害者世帯</span>に対し、冬季の灯油購入費の一部を助成する制度です。</p><p>山形市は盆地特有の気候で、冬季は氷点下まで気温が下がり、灯油ストーブが暖房の主力です。灯油価格の高騰は低所得世帯の生活を直撃するため、この助成金で暖房費の負担を軽減しています。</p><p><span class="marker-green">対象世帯には案内が届き、簡単な手続きで助成金を受け取れます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>65歳以上のひとり暮らし高齢者で住民税非課税の方</p><p>65歳以上の高齢者のみの世帯で住民税非課税の方</p><p>障害者のみの世帯で住民税非課税の方</p><p>ひとり親世帯で住民税非課税の方</p></div><p>山形市役所生活福祉課に申請書を提出します。対象と見込まれる世帯には案内文書が届きます。</p><p><span class="marker">申請期間は毎年11月〜翌年2月末</span>です。届いた案内に従って申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1世帯あたり1万円</strong>です。世帯人数にかかわらず定額です。</p><p><span class="marker">申請期限を過ぎると助成を受けられなくなります</span>ので、届いたらお早めに手続きしてください。</p><div class="note-box">生活保護世帯には別途冬季加算が支給されるため、本助成の対象外です。灯油のほかエアコンやガスファンヒーターなどの暖房費にも充てることができます。山形市社会福祉協議会による「福祉灯油」の支援も別途ありますので、あわせてご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-bousai-equipment',
    title: '山形市 家庭用防災資機材購入補助金',
    organization: '山形市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'disaster',
    prefecture: '山形県',
    tags: ['山形市', '防災資機材', '補助金'],
    eligibility: '山形市内に住所を有し、家庭用防災資機材を購入する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '山形市が実施する家庭用防災資機材購入補助金です。感震ブレーカーや家具転倒防止器具等の購入に最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 家庭用防災資機材購入補助金は、<span class="marker">地震や災害に備えて家庭用の防災資機材を購入する方</span>に対し、費用の一部を補助する制度です。</p><p>山形市は2019年の山形県沖地震で被害を経験しており、家庭レベルでの防災対策の重要性が改めて認識されました。感震ブレーカーや家具転倒防止器具の設置は、地震時の火災や圧死を防ぐ効果的な対策です。</p><p>補助率は購入費の2分の1以内で、<strong>上限は3万円</strong>です。<span class="marker-green">高齢者世帯や障害者世帯には優先的に補助</span>が適用されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象資機材"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>ガラス飛散防止フィルム</p><p>非常用発電機・蓄電池</p></div><p>山形市役所防災対策課に申請書と購入予定品のカタログ等を提出します。</p><p><span class="marker">購入前の申請が必要</span>です。既に購入済みの資機材は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1以内で、<strong>上限3万円</strong>です。複数の資機材をまとめて申請することも可能です。</p><p><span class="marker">1世帯1回限りの補助</span>です。過去に補助を受けた世帯は再度申請できません。</p><div class="note-box">山形市では防災資機材の補助に加えて、自主防災組織の活動助成や防災リーダー育成研修も実施しています。「自助・共助・公助」のうち、まずは家庭での備え（自助）を充実させることが重要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 福島市（福島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'fukushima-city-childcare-subsidy',
    title: '福島市 子育て世帯応援手当',
    organization: '福島市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['福島市', '子育て支援', '給付金'],
    eligibility: '福島市に住所を有し、18歳未満の児童を養育する保護者',
    applicationPeriod: '通年（該当年度内）',
    description: '福島市が実施する子育て世帯応援手当です。物価高騰対策として児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 子育て世帯応援手当は、<span class="marker">18歳未満の児童を養育するすべての世帯</span>に対し、物価高騰の影響を緩和するための給付金を支給する制度です。</p><p>福島市は信夫山と阿武隈川に抱かれた福島県の県庁所在地です。花見山の桃源郷のような美しい風景と、飯坂温泉・土湯温泉・高湯温泉の3つの名湯で知られています。東日本大震災からの復興を進める中、子育て世帯への手厚い支援を続けています。</p><p><span class="marker-green">所得制限なしで、対象児童がいるすべての世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>福島市に住民登録がある18歳未満の児童の保護者</p><p>児童手当受給者は申請不要（プッシュ型給付）</p><p>高校生のみの世帯等は申請が必要</p></div><p>児童手当受給者には<strong>申請不要で自動的に支給</strong>されます。高校生世代のみの世帯等は、福島市役所こども政策課に申請書を提出してください。</p><p><span class="marker">給付を辞退する場合は辞退届の提出が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。18歳の年度末までの児童が対象です。</p><p><span class="marker">他の自治体で同様の給付金を受給している場合は重複受給できません</span>。</p><div class="note-box">本給付金は非課税であり、所得税・住民税の課税対象にはなりません。生活保護の収入認定からも除外されます。福島市では震災復興支援と子育て支援を両立させる施策を継続して実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-parenting-allowance',
    title: '福島市 子育て応援金（出産・子育て応援交付金）',
    organization: '福島市',
    type: 'local',
    maxAmount: '出産応援5万円＋子育て応援5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['福島市', '出産応援', '子育て応援金'],
    eligibility: '福島市に住所を有する妊婦および出産した方',
    applicationPeriod: '通年（妊娠届出時・出産後）',
    description: '福島市が実施する子育て応援金（出産・子育て応援交付金）です。妊娠届出時に5万円、出産後に5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 子育て応援金は、<span class="marker">妊娠届出時に出産応援金5万円、出産後に子育て応援金5万円</span>の合計10万円を支給する制度です。</p><p>福島市は伴走型相談支援と経済的支援を一体的に行い、妊娠期から子育て期まで切れ目のないサポートを提供しています。花見山の桜のように、一人ひとりの親子が花開くよう、温かい支援体制が整っています。</p><p><span class="marker-green">すべての妊婦・子育て世帯が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付の流れ"><p>①妊娠届出時：保健師等との面談後、出産応援金（5万円）を申請</p><p>②出産後：赤ちゃん訪問時の面談後、子育て応援金（5万円）を申請</p></div><p>妊娠届出時に福島市保健福祉センターで面談を受け、出産応援金を申請します。出産後は赤ちゃん訪問（新生児訪問）時に面談を受けた上で子育て応援金を申請します。</p><p><span class="marker">面談を受けることが給付の条件</span>です。面談では子育ての不安や困りごとについても相談できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>出産応援金5万円＋子育て応援金5万円の合計10万円</strong>です。多胎の場合、子育て応援金は児童数に応じて加算されます。</p><p><span class="marker">申請から1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">福島市では出産・子育て応援金に加え、産後ケア事業（ショートステイ・デイケア・訪問型）も充実しています。産後の体調回復や育児に不安がある場合は、気軽に利用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-housing-purchase',
    title: '福島市 定住促進住宅取得支援事業',
    organization: '福島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '福島県',
    tags: ['福島市', '住宅取得', '補助金'],
    eligibility: '福島市内に住宅を取得して定住する方（市外からの移住者を優遇）',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '福島市が実施する定住促進住宅取得支援事業です。市内に住宅を取得して定住する方に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 定住促進住宅取得支援事業は、<span class="marker">福島市内に新たに住宅を取得して定住する方</span>を対象に、住宅取得費用の一部を補助する制度です。</p><p>福島市は東日本大震災と原発事故以降、定住人口の回復に力を入れてきました。信夫山からの絶景や飯坂温泉の湯けむりなど、豊かな暮らしの魅力を発信しながら、移住・定住を促進しています。</p><p><strong>基本額は50万円</strong>で、子育て世帯や市外からの移住者にはさらに加算があり、<span class="marker-green">最大100万円の補助</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>福島市内に新築または中古住宅を取得すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>世帯主が40歳以下であること（一部緩和措置あり）</p><p>市税の滞納がないこと</p></div><p>福島市役所定住交流課に申請書、売買契約書の写し、住民票等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。事前の相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>基本50万円</strong>です。以下の加算措置があります。</p><p><span class="marker">市外からの移住者：＋20万円、子育て世帯（18歳未満の子あり）：＋20万円、ZEH住宅：＋10万円</span>で最大100万円です。</p><div class="note-box">5年以内に福島市から転出した場合は、補助金の全額または一部を返還する必要があります。中古住宅の場合は築年数や耐震性能に関する要件があります。福島市では移住体験ツアーや住宅見学会も開催していますので、まずは情報収集からお始めください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-senior-dental',
    title: '福島市 高齢者歯科口腔健診・治療費助成',
    organization: '福島市',
    type: 'local',
    maxAmount: '健診無料・治療費一部助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '福島県',
    tags: ['福島市', '高齢者歯科', '助成金'],
    eligibility: '福島市に住所を有する75歳以上の方',
    applicationPeriod: '通年',
    description: '福島市が実施する高齢者歯科口腔健診・治療費助成制度です。75歳以上の高齢者に無料の歯科健診を実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 高齢者歯科口腔健診・治療費助成は、<span class="marker">75歳以上の後期高齢者医療被保険者</span>を対象に、歯科口腔健診を無料で実施し、口腔機能の維持・向上を支援する制度です。</p><p>福島市は「健康ふくしま21計画」のもと、高齢者の健康寿命延伸に取り組んでいます。口腔機能の低下は食事・会話の質の低下だけでなく、誤嚥性肺炎や認知症のリスクを高めることがわかっており、定期的な歯科健診の重要性が高まっています。</p><p><span class="marker-green">年1回の歯科口腔健診が無料で受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福島市に住民登録がある75歳以上の方（後期高齢者医療制度加入者）が対象です。</p><div class="summary-box" data-title="利用の流れ"><p>市から届く受診券を確認する</p><p>市内の指定歯科医院に予約する</p><p>受診券と後期高齢者医療被保険者証を持参する</p><p>健診結果をもとに必要に応じて治療を受ける</p></div><p>歯科口腔健診は<strong>事前の申請不要</strong>です。受診券が届いたら指定歯科医院に予約してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>歯科口腔健診は自己負担なしで無料</strong>です。健診では虫歯・歯周病のチェック、口腔機能（飲み込み・噛む力）の評価が行われます。</p><p><span class="marker">健診の結果、治療が必要な場合は保険診療で治療を受けられます</span>。低所得者向けの医療費減免制度もあります。</p><div class="highlight-box">福島市では歯科健診に加え、口腔体操やオーラルフレイル予防の講座も各地域で開催しています。「お口の健康」は全身の健康の入口です。毎食後の歯磨きとあわせて、年1回の歯科健診を習慣づけましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-afterschool',
    title: '福島市 放課後子ども教室推進事業',
    organization: '福島市',
    type: 'local',
    maxAmount: '利用料無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '福島県',
    tags: ['福島市', '放課後教室', '教育支援'],
    eligibility: '福島市立小学校に在籍する児童',
    applicationPeriod: '毎年4月（年度途中も受付）',
    description: '福島市が実施する放課後子ども教室推進事業です。放課後の安全な居場所で学習支援や体験活動を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 放課後子ども教室推進事業は、<span class="marker">放課後や週末に小学校施設を活用し、子どもたちに安全な居場所と学習・体験の機会</span>を提供する事業です。</p><p>福島市は東日本大震災後、子どもたちの安全な遊び場の確保が課題となりました。この事業は地域住民のボランティアの協力を得て、学校の余裕教室や体育館で学習支援・スポーツ・文化活動などを行っています。</p><p><span class="marker-green">利用料は無料で、福島市立小学校に在籍するすべての児童が参加できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福島市立小学校に在籍する児童が対象です。</p><div class="summary-box" data-title="活動内容"><p>宿題や自主学習の見守り・学習支援</p><p>スポーツ・レクリエーション活動</p><p>工作・料理などの体験活動</p><p>地域の方々との交流活動</p></div><p>参加を希望する場合は、学校を通じて配布される参加申込書を提出します。<strong>年度途中からの参加も可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>参加費は<strong>原則無料</strong>です。材料費や保険料として年間数百円程度の実費負担がある場合があります。</p><p><span class="marker">開催日時は学校や地域によって異なります</span>ので、各学校の放課後子ども教室のスケジュールをご確認ください。</p><div class="note-box">放課後子ども教室は放課後児童クラブ（学童保育）とは異なる事業です。児童クラブは就労等の要件があり有料ですが、放課後子ども教室は全児童が参加でき無料です。両方に登録して使い分けることも可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-uij-turn',
    title: '福島市 UIJターン移住支援金',
    organization: '福島市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '福島県',
    tags: ['福島市', 'UIJターン', '移住支援金'],
    eligibility: '東京圏から福島市に移住し就業・創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '福島市が実施するUIJターン移住支援金です。東京圏から福島市に移住し就業・創業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 UIJターン移住支援金は、<span class="marker">東京23区に在住または東京圏から東京23区へ通勤していた方が福島市に移住し就業・創業</span>した場合に支給される支援金です。</p><p>福島市は花見山や飯坂温泉など、豊かな自然と温泉に恵まれた暮らしやすい街です。新幹線で東京から約90分というアクセスの良さも魅力で、テレワーク移住や二拠点居住の候補地としても注目されています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円の加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または通勤していたこと</p><p>福島市に転入後3か月以上1年以内に申請すること</p><p>福島県のマッチングサイト掲載企業への就職、創業、またはテレワーク</p><p>5年以上福島市に居住する意思があること</p></div><p>福島市役所定住交流課に申請書と必要書類を提出します。<strong>転入届提出後3か月以上経過してから</strong>申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。子ども加算（18歳未満1人あたり100万円）もあります。</p><p><span class="marker">5年以内に福島市から転出した場合は支援金の全額または半額を返還</span>する必要があります。</p><div class="highlight-box">福島市ではUIJターン移住者向けに「ふくしま暮らし体験」プログラムも実施しています。最大1週間の滞在で、福島市での暮らしをリアルに体験できます。オンラインでの移住相談も随時受付中です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-nursing-home-reform',
    title: '福島市 介護保険住宅改修費支給',
    organization: '福島市',
    type: 'local',
    maxAmount: '最大20万円（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '福島県',
    tags: ['福島市', '介護リフォーム', '住宅改修'],
    eligibility: '福島市に住所を有し、要支援・要介護認定を受けた方',
    applicationPeriod: '通年',
    description: '福島市が実施する介護保険住宅改修費支給制度です。要介護者の自宅バリアフリー化に最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 介護保険住宅改修費支給は、<span class="marker">要支援または要介護認定を受けた方が自宅のバリアフリー化を行う際</span>に、改修費用を支給する制度です。</p><p>福島市は盆地気候で冬の寒さが厳しく、高齢者の住宅内での転倒事故が多い地域です。暖かい部屋と寒い廊下の温度差によるヒートショックの防止や、浴室・トイレの安全確保が重要です。</p><p><strong>支給上限は20万円</strong>で、<span class="marker-green">自己負担は所得に応じて1割〜3割</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの取り付け（廊下・階段・浴室・トイレ等）</p><p>段差の解消（スロープ設置・敷居撤去等）</p><p>滑り防止のための床材の変更</p><p>引き戸等への扉の取り替え</p><p>洋式便器への便器の取り替え</p></div><p>ケアマネジャーに相談の上、福島市役所介護保険課に事前申請を行います。ケアマネジャーが理由書を作成します。</p><p><span class="marker">必ず工事着手前に事前申請が必要</span>です。事前申請なしの工事は支給対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給上限は<strong>被保険者1人あたり20万円</strong>です。自己負担割合（1割〜3割）を差し引いた額が支給されます。1割負担の場合は最大18万円の支給です。</p><p><span class="marker">要介護度が3段階以上上がった場合や転居した場合は、再度20万円の枠が利用可能</span>です。</p><div class="note-box">福島市では介護保険の住宅改修に加え、市独自の住宅バリアフリー改修補助（要件あり）との併用が可能な場合があります。工事の分け方については担当ケアマネジャーと事前に相談し、効率的な改修計画を立てましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-migration-bonus',
    title: '福島市 ふくしま移住・定住応援金',
    organization: '福島市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '福島県',
    tags: ['福島市', '移住定住', '応援金'],
    eligibility: '福島市外から福島市に移住し、定住する意思のある方',
    applicationPeriod: '通年（転入後1年以内）',
    description: '福島市が実施するふくしま移住・定住応援金です。市外から移住した方に最大30万円の応援金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 ふくしま移住・定住応援金は、<span class="marker">福島市外から新たに福島市に移住し定住する方</span>に対し、応援金を支給する制度です。</p><p>福島市は「ももりん（桃）」に象徴される果物の宝庫で、花見山の桃源郷や飯坂温泉など暮らしの豊かさが際立つ都市です。東日本大震災からの復興が進む中、新しい住民を温かく迎え入れる取り組みとして本制度が設けられました。</p><p><span class="marker-green">単身15万円、世帯30万円が支給され、子ども加算もあります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>福島市外に1年以上居住していた方が新たに転入すること</p><p>転入後1年以内に申請すること</p><p>5年以上福島市に居住する意思があること</p><p>福島市内で就業・就学または就農していること</p></div><p>福島市役所定住交流課に申請書、住民票、就業証明書等を提出します。</p><p><span class="marker">転入届提出後3か月以上経過してから申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身15万円、世帯30万円</strong>です。18歳未満の子どもがいる場合は1人あたり5万円の加算があります。</p><p><span class="marker">5年以内に福島市から転出した場合は応援金の返還</span>が求められます。</p><div class="highlight-box">福島市では移住者向けに「住まい・仕事・暮らし」のワンストップ相談窓口を設けています。空き家バンクの物件紹介やハローワークとの連携による就職支援など、移住後の生活を総合的にサポートします。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-seismic-diagnosis',
    title: '福島市 木造住宅耐震診断助成事業',
    organization: '福島市',
    type: 'local',
    maxAmount: '診断費用の全額助成',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '福島県',
    tags: ['福島市', '耐震診断', '助成金'],
    eligibility: '福島市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '福島市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を全額助成する制度です。</p><p>福島市は2011年の東日本大震災で震度6弱を記録し、多くの住宅が被害を受けました。その後も2021年、2022年と福島県沖を震源とする大きな地震が相次いでいます。旧耐震基準の住宅の耐震性を確認し、必要な対策を講じることが急務です。</p><p><span class="marker-green">市が耐震診断士を派遣し、無料で診断を実施</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>福島市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>地上2階建て以下の戸建て住宅であること</p><p>過去にこの制度で耐震診断を受けていないこと</p></div><p>福島市役所建築指導課に申請書を提出します。申請後、市が耐震診断士を派遣して無料で診断を行います。</p><p><span class="marker">年度ごとの受付件数に限りがあるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額を福島市が負担</strong>するため、自己負担はありません。診断には2〜3時間程度かかります。</p><p><span class="marker">診断結果で耐震性が不足と判定された場合は、耐震改修工事の補助制度（上限100万円程度）</span>を利用して改修工事を行うことができます。</p><div class="note-box">福島市は度重なる地震を経験しており、耐震対策の重要性は他地域以上に高いといえます。特に旧耐震基準の住宅にお住まいの方は、まず耐震診断で現状を把握されることを強くおすすめします。診断結果が良好であっても、家具の固定などの室内安全対策も併せて行いましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
];
