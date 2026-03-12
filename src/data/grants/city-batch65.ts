import { Grant } from '@/lib/types';

export const cityGrantsBatch65: Grant[] = [
  // ────────────────────────────────────────────────
  // 館林市（群馬県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tatebayashi-childcare-subsidy',
    title: '館林市 子育て支援助成金',
    organization: '館林市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['館林市', '子育て支援', '助成金'],
    eligibility: '館林市に住所を有し、小学校就学前の子どもを養育している保護者',
    applicationPeriod: '通年',
    description: '館林市が実施する子育て支援助成金です。育児用品やチャイルドシートなどの購入費を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 子育て支援助成金は、<span class="marker">小学校就学前の子どもを養育する世帯</span>に対し、育児用品等の購入費用を助成する制度です。</p><p>つつじの名所として全国的に知られる館林市は、分福茶釜で有名な茂林寺など歴史と文化に彩られた街です。近年は子育て世帯の定住促進に力を入れており、経済的な負担軽減を通じて安心して子育てできる環境づくりを推進しています。</p><p><span class="marker-green">チャイルドシート、ベビーカー、学習用品など幅広い品目が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>館林市に住民登録があり、小学校就学前の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市ホームページからダウンロード可）</p><p>購入品の領収書またはレシート</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>館林市役所こども課の窓口で申請を受け付けています。<span class="marker">購入日から6か月以内に申請が必要</span>です。郵送での申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象品目の購入費用の2分の1以内で、<strong>1世帯あたり上限5万円</strong>です。子ども1人につき1回の利用が可能です。</p><p><span class="marker">インターネット通販での購入も対象ですが、領収書の保管が必須</span>です。フリマアプリや個人間取引での購入は対象外となります。</p><div class="note-box">中古品や譲渡品は対象外です。出産祝い品として受け取ったものも助成の対象にはなりません。対象品目の詳細は館林市のホームページで最新情報を確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-birth-bonus',
    title: '館林市 出産祝い金',
    organization: '館林市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['館林市', '出産祝い金', '給付金'],
    eligibility: '館林市に住所を有し、子どもを出産した方',
    applicationPeriod: '出生届提出時',
    description: '館林市が実施する出産祝い金制度です。出産した方に第1子5万円から最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 出産祝い金は、<span class="marker">館林市に住民登録のある方が子どもを出産した際</span>に支給される祝い金です。</p><p>館林市は群馬県東南部に位置し、利根川と渡良瀬川に挟まれた穏やかな平野部に広がる街です。つつじが岡公園をはじめとする花の名所が多く、子育てに適した住環境が整っています。出産にかかる経済的負担を軽減し、安心して子どもを産み育てられる環境を目指しています。</p><p><span class="marker-green">多子世帯ほど支給額が手厚くなる段階制</span>を採用しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で館林市に住民登録があり、出生届を館林市に提出した方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>館林市役所こども課の窓口で、<strong>出生届の提出と同時に申請</strong>できます。<span class="marker">出生日から3か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順に応じて段階的に設定されています。<strong>第1子は5万円、第2子は10万円、第3子以降は20万円</strong>です。</p><p><span class="marker">出生順は同一世帯で養育している子どもの数で判定</span>されます。前の配偶者との子どもも算入されます。</p><div class="note-box">死産の場合は対象外となります。双子以上の多胎出産の場合は、それぞれの出生順に応じた祝い金が支給されます。申請期限を過ぎると受給できませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-housing-purchase',
    title: '館林市 住宅取得補助金',
    organization: '館林市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['館林市', '住宅取得', '補助金'],
    eligibility: '館林市内に新たに住宅を取得し定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '館林市が実施する住宅取得補助金です。市内に住宅を新築または購入して定住する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 住宅取得補助金は、<span class="marker">市内に住宅を新築または購入して定住する方</span>に対し、取得費用の一部を補助する制度です。</p><p>館林市は東武伊勢崎線で都心から約1時間のアクセスで、比較的手頃な地価で住宅を取得できるエリアです。つつじが岡公園や城沼の自然に囲まれた良好な住環境が魅力で、子育て世帯や若年層の定住を促進するためにこの補助制度を設けています。</p><p>基本額は30万円で、<strong>子育て世帯等の加算を含め最大50万円</strong>です。<span class="marker-green">市外からの転入者にはさらに加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>館林市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上定住する意思があること</p><p>市税の滞納がないこと</p><p>申請者が住宅の所有者であること</p></div><p>館林市役所都市建設部住宅課に申請書類を提出します。住宅の登記事項証明書や売買契約書等が必要です。</p><p><span class="marker">住宅の引渡しから1年以内に申請が必要</span>です。事前相談を行っておくとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額は<strong>30万円</strong>です。子育て世帯（中学生以下の子どもがいる世帯）は10万円加算、市外からの転入者は10万円加算で、<strong>最大50万円</strong>となります。</p><p><span class="marker">5年以内に転出した場合は補助金の返還</span>が求められます。定住計画をしっかり立ててから申請しましょう。</p><div class="highlight-box">住宅ローン減税や国のすまい給付金など、他の支援制度と併用可能です。館林市は東北自動車道のICにも近く、車での通勤にも便利な立地です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-infertility',
    title: '館林市 不妊治療費助成事業',
    organization: '館林市',
    type: 'local',
    maxAmount: '最大10万円（1回あたり）',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '群馬県',
    tags: ['館林市', '不妊治療', '助成金'],
    eligibility: '館林市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から6か月以内）',
    description: '館林市が実施する不妊治療費助成事業です。特定不妊治療や一般不妊治療の自己負担分を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減する</span>ための助成制度です。</p><p>保険適用となった体外受精や顕微授精に加え、保険適用外の先進医療にかかる自己負担分についても助成を行っています。館林市は群馬県東部の中核都市として、市民の安心な暮らしを支える医療支援に取り組んでいます。</p><p><span class="marker-green">群馬県の助成制度と併用が可能で、自己負担をさらに軽減</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>館林市に住民登録のある夫婦で、医療機関において不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>医療機関が発行する受診等証明書</p><p>治療費の領収書（原本）</p><p>夫婦の住民票・戸籍謄本</p></div><p>館林市役所健康推進課に申請します。<span class="marker">治療が終了した日の属する年度末までに申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療あたり<strong>自己負担額の一部を上限10万円</strong>まで助成します。年間の回数上限が設けられている場合があります。</p><p><span class="marker">保険適用分は対象外で、自己負担分のみが助成対象</span>となります。高額療養費制度の適用後の金額が基準です。</p><div class="note-box">群馬県の不妊治療費助成制度を先に申請し、県の助成額を差し引いた残額が市の助成対象です。指定医療機関以外での治療も対象となる場合がありますので、事前に窓口にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-scholarship',
    title: '館林市 奨学金制度',
    organization: '館林市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '群馬県',
    tags: ['館林市', '奨学金', '教育支援'],
    eligibility: '館林市に住所を有する世帯の子どもで、高校・大学等に進学する方',
    applicationPeriod: '毎年2月〜4月頃',
    description: '館林市が実施する奨学金制度です。経済的理由で進学が困難な学生に月額最大3万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 奨学金制度は、<span class="marker">経済的な理由により修学が困難な学生</span>に対し、奨学金を貸与する制度です。</p><p>館林市は教育環境の充実に力を入れており、将来を担う若者の進学機会を支えるためにこの奨学金制度を運営しています。地元から巣立つ学生を応援し、学業を通じて地域社会に貢献できる人材の育成を目指しています。</p><p>貸与型の奨学金で、<strong>高校生は月額1.5万円、大学生は月額3万円</strong>です。<span class="marker-green">無利子での貸与</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が館林市に住民登録を有すること</p><p>高等学校、大学、短大、専門学校等に在学または進学予定であること</p><p>経済的理由により修学が困難と認められること</p><p>学業成績が一定以上であること</p></div><p>館林市教育委員会学校教育課に申請書と必要書類を提出します。選考は書類審査により行われます。</p><p><span class="marker">募集は毎年2月頃から開始され、4月上旬が締切</span>です。定員に限りがあるため早めの準備をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生1.5万円、大学生・短大生・専門学校生3万円</strong>です。貸与期間は正規の修業年限内です。</p><p><span class="marker">卒業後6か月の据置期間の後、10年以内に返還</span>する必要があります。無利子なので元金のみの返還です。</p><div class="note-box">日本学生支援機構（JASSO）の奨学金との併用は可能ですが、他の地方自治体の奨学金との併用はできない場合があります。返還が困難になった場合は減額返還や返還猶予の制度もありますので窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-sme-support',
    title: '館林市 中小企業振興補助金',
    organization: '館林市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '群馬県',
    tags: ['館林市', '中小企業支援', '補助金'],
    eligibility: '館林市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '館林市が実施する中小企業振興補助金です。設備投資や販路開拓にかかる経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う設備投資や販路開拓</span>に対して経費の一部を補助する制度です。</p><p>館林市は伝統的に製造業が盛んで、食品加工や精密機器などの中小企業が数多く立地しています。日本一暑い街として知られることもあるこの地で、地域経済を支える中小企業の成長を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">展示会出展費、機械設備導入費、IT化関連費用などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>館林市内に事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>同一年度内に本補助金を受けていないこと</p></div><p>館林市役所経済部商工課に申請書と事業計画書を提出します。審査のうえ交付が決定されます。</p><p><span class="marker">必ず事業着手前に申請してください</span>。交付決定前に発注・支払いした経費は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。設備導入費、展示会出展費、広告宣伝費、ホームページ作成費などが対象になります。</p><p><span class="marker">補助事業の完了後、実績報告書と経費の証拠書類を提出</span>する必要があります。</p><div class="highlight-box">館林商工会議所では、経営相談や各種セミナーを無料で実施しています。補助金の申請にあたっては事前に相談するとよいでしょう。国の小規模事業者持続化補助金との併用はできない場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-nursing-equipment',
    title: '館林市 介護用品支給事業',
    organization: '館林市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '群馬県',
    tags: ['館林市', '介護用品', '支給事業'],
    eligibility: '館林市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '館林市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間6万円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 介護用品支給事業は、<span class="marker">在宅で要介護高齢者を介護している家族</span>に対し、紙おむつなどの介護用品を支給する制度です。</p><p>館林市では高齢者が住み慣れた地域で安心して暮らし続けられるよう、在宅介護を支援する各種サービスを提供しています。介護用品の経済的負担を軽減することで、家族介護の継続をサポートします。</p><p><span class="marker-green">紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などが支給対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>館林市に住民登録があり、在宅で要介護4・5の認定を受けた高齢者を介護している家族が主な対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書</p><p>介護者の本人確認書類</p></div><p>館林市役所高齢者支援課の窓口で申請します。<span class="marker">市民税非課税世帯が優先的に対象</span>となります。申請後、カタログから必要な用品を選択して配送を受けます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給限度額は<strong>年間6万円相当</strong>です。月額に換算すると約5,000円分の介護用品が支給されます。</p><p><span class="marker">入院中や施設入所中は支給対象外</span>となります。在宅介護の期間のみが対象です。</p><div class="note-box">介護保険の福祉用具貸与や購入費支給とは別の制度です。併用が可能ですので、ケアマネジャーに相談して最適な介護サービスの組み合わせを検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-elderly-support',
    title: '館林市 高齢者見守り支援事業',
    organization: '館林市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '群馬県',
    tags: ['館林市', '高齢者見守り', '生活支援'],
    eligibility: '館林市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '館林市が実施する高齢者見守り支援事業です。ひとり暮らし高齢者に緊急通報装置の貸与や定期的な見守りを行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 高齢者見守り支援事業は、<span class="marker">ひとり暮らしの高齢者や高齢者のみの世帯</span>に対し、緊急通報装置の貸与や定期的な安否確認を行う事業です。</p><p>館林市は夏の猛暑が全国ニュースで取り上げられることもある地域で、特にひとり暮らし高齢者の熱中症対策が重要な課題となっています。ボタンひとつで緊急通報ができる装置を貸与し、24時間体制で安否を見守ります。</p><p><span class="marker-green">利用料は市民税非課税世帯の場合は無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>65歳以上のひとり暮らし高齢者</p><p>高齢者のみの世帯の方</p><p>日中独居となる高齢者</p><p>慢性疾患等により常時注意を要する方</p></div><p>館林市役所高齢者支援課に申請書を提出します。民生委員による訪問確認が行われる場合があります。</p><p><span class="marker">申請後、緊急通報装置が自宅に設置され、使い方の説明を受けます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与</strong>のほか、定期的な電話による安否確認も実施しています。ボタンを押すと受信センターにつながり、必要に応じて救急車の手配が行われます。</p><p><span class="marker">装置は貸与品のため、転居や施設入所時には返還</span>が必要です。</p><div class="highlight-box">館林市では民生委員やボランティアによる訪問見守り活動も行っています。緊急通報装置と組み合わせることで、より安心な在宅生活を送ることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tatebayashi-seismic-diagnosis',
    title: '館林市 木造住宅耐震診断助成事業',
    organization: '館林市',
    type: 'local',
    maxAmount: '診断費用の全額（上限あり）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '群馬県',
    tags: ['館林市', '耐震診断', '防災'],
    eligibility: '館林市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '館林市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>館林市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>関東平野に位置する館林市は、地震リスクへの備えが重要な地域です。旧耐震基準の住宅は現行の基準と比べて耐震性能が不足している可能性があり、まずは診断によって建物の強度を把握することが防災の第一歩となります。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>館林市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の戸建住宅であること</p><p>過去にこの制度を利用していないこと</p></div><p>館林市役所都市建設部建築課に申請書を提出します。申請後、市が委託する耐震診断士が自宅を訪問して診断を実施します。</p><p><span class="marker">毎年度の募集戸数に限りがあります</span>。早めの申し込みをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は市が全額負担</strong>し、申請者の自己負担はありません。診断結果に基づいて、補強の必要性や改修方法の助言を受けられます。</p><p><span class="marker">診断の結果、耐震性が不足していると判定された場合は、別途耐震改修補助金</span>を活用して改修工事を行うことができます。</p><div class="note-box">耐震診断は建物の劣化状況も確認しますので、シロアリ被害や基礎のひび割れなども把握できます。診断結果は書面で交付され、耐震改修の参考資料として活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tatebayashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 秩父市（埼玉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'chichibu-childcare-subsidy',
    title: '秩父市 子育て支援助成金',
    organization: '秩父市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['秩父市', '子育て支援', '助成金'],
    eligibility: '秩父市に住所を有し、小学校就学前の子どもを養育している保護者',
    applicationPeriod: '通年',
    description: '秩父市が実施する子育て支援助成金です。育児用品の購入費等を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 子育て支援助成金は、<span class="marker">小学校就学前の子どもを養育する世帯</span>に対し、育児に必要な用品の購入費用を助成する制度です。</p><p>秩父夜祭（ユネスコ無形文化遺産）で知られる秩父市は、武甲山や荒川の渓谷に囲まれた自然豊かな街です。山間部ならではの子育て環境を整備するため、経済面からの支援を充実させています。</p><p><span class="marker-green">おむつ・ミルク代から学習教材まで、幅広い育児関連費用が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>秩父市に住民登録があり、小学校就学前の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市窓口で配布）</p><p>育児用品の領収書またはレシート</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>秩父市役所こども課の窓口で申請を受け付けています。<span class="marker">購入日から6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象品目の購入費用の2分の1以内で、<strong>1世帯あたり年間上限5万円</strong>です。</p><p><span class="marker">オンラインショップでの購入も対象ですが、購入者名と品名が記載された領収書が必要</span>です。</p><div class="note-box">対象品目はベビー用品、チャイルドシート、学習教材など市が指定するカテゴリーに限られます。たばこ・酒類・嗜好品は対象外です。詳細は秩父市のホームページでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-birth-bonus',
    title: '秩父市 出産祝い金',
    organization: '秩父市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降30万円',
    maxAmountNum: 30,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['秩父市', '出産祝い金', '給付金'],
    eligibility: '秩父市に住所を有し、子どもを出産した方',
    applicationPeriod: '出生届提出時',
    description: '秩父市が実施する出産祝い金制度です。出産した方に第1子5万円から最大30万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 出産祝い金は、<span class="marker">秩父市に住民登録のある方が子どもを出産した際</span>に支給される祝い金です。</p><p>秩父市は埼玉県の北西部に位置し、三峯神社や秩父神社など歴史深い社寺が点在する街です。少子化対策と若年世帯の定住促進を目的に、出産時の経済的支援を手厚く行っています。特に第3子以降の支給額が大きく設定されているのが特徴です。</p><p><span class="marker-green">第3子以降は30万円と、県内でもトップクラスの支給額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で秩父市に1年以上住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>秩父市役所こども課の窓口で、<strong>出生届と同時に申請</strong>できます。<span class="marker">出生日から3か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降30万円</strong>です。多子世帯ほど手厚い支給内容となっています。</p><p><span class="marker">出生順は養育している18歳未満の子どもの人数で判定</span>されます。</p><div class="note-box">住民登録が1年未満の場合は対象外となりますのでご注意ください。転入後すぐの出産の場合は、窓口で個別にご相談ください。双子以上の場合はそれぞれに祝い金が支給されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-newlywed-rent',
    title: '秩父市 新婚世帯家賃補助',
    organization: '秩父市',
    type: 'local',
    maxAmount: '月額最大2万円（最長2年間）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['秩父市', '新婚世帯', '家賃補助'],
    eligibility: '秩父市内の賃貸住宅に居住する婚姻届提出後3年以内の夫婦',
    applicationPeriod: '通年',
    description: '秩父市が実施する新婚世帯家賃補助です。新婚世帯の家賃の一部を月額最大2万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 新婚世帯家賃補助は、<span class="marker">婚姻届の提出後3年以内の新婚世帯</span>を対象に、市内の民間賃貸住宅の家賃の一部を補助する制度です。</p><p>秩父市は自然に恵まれた魅力的な居住環境を持ちながらも、若年層の市外流出が課題となっています。新婚期の住居費を支援することで、若い世帯の秩父市への定住を促進し、地域の活力維持を図っています。</p><p><span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>婚姻届の提出日から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>秩父市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が一定額以下であること</p><p>市税の滞納がないこと</p></div><p>秩父市役所地域政策課に申請書と賃貸借契約書の写し、所得証明書を提出します。</p><p><span class="marker">年度ごとに申請が必要</span>で、最長2年間の補助となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた自己負担額に対し、<strong>月額上限2万円</strong>を補助します。最長2年間の合計で最大48万円となります。</p><p><span class="marker">公営住宅や社宅は対象外</span>です。民間の賃貸住宅のみが対象となります。</p><div class="highlight-box">秩父市では新婚世帯向けに、住宅取得補助金との併用はできませんが、市の他の子育て支援制度は利用可能です。秩父の四季折々の自然を楽しみながら新生活を始めてみませんか。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-disability-medical',
    title: '秩父市 障がい者医療費助成制度',
    organization: '秩父市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['秩父市', '障がい者医療', '助成金'],
    eligibility: '秩父市に住所を有する重度心身障がい者',
    applicationPeriod: '通年',
    description: '秩父市が実施する障がい者医療費助成制度です。重度心身障がい者の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 障がい者医療費助成制度は、<span class="marker">重度の心身障がいがある方</span>の医療費自己負担分を助成する制度です。</p><p>秩父市は山間部が多く医療機関へのアクセスに課題がある地域もありますが、障がいのある方が安心して医療を受けられるよう、自己負担分を全額助成しています。通院・入院・調剤のすべてが対象で、経済的な心配なく必要な治療を受けることができます。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳○A・A、精神障害者保健福祉手帳1級が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>秩父市に住民登録があり、以下の障害者手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳○A・A</p><p>精神障害者保健福祉手帳1級</p><p>上記に準ずると認められる方</p></div><p>秩父市役所障がい者福祉課に申請書と障害者手帳、健康保険証を持参して申請します。<span class="marker">65歳以上で新たに障害者手帳を取得した方は一部制限</span>がある場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関では受給資格証を提示することで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は、後日償還払い</span>の手続きが必要です。領収書を必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料など）は助成対象外です。所得制限が設けられている場合がありますので、詳しくは秩父市の窓口にお問い合わせください。生活保護受給者は対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-school-lunch',
    title: '秩父市 学校給食費補助制度',
    organization: '秩父市',
    type: 'local',
    maxAmount: '給食費の半額補助（第3子以降は全額）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['秩父市', '学校給食', '教育支援'],
    eligibility: '秩父市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度ごとに申請）',
    description: '秩父市が実施する学校給食費補助制度です。小中学校の給食費の一部を補助し、第3子以降は全額を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 学校給食費補助制度は、<span class="marker">市立小中学校に通う児童生徒の給食費</span>の一部を補助する制度です。</p><p>秩父市は地産地消の取り組みに力を入れており、秩父地域の新鮮な農産物を使った学校給食が好評です。保護者の経済的負担を軽減するとともに、子どもたちに質の高い食育を提供しています。</p><p><span class="marker-green">第3子以降の児童生徒は給食費が全額無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助内容"><p>第1子・第2子：給食費の半額を補助</p><p>第3子以降：給食費の全額を補助</p><p>就学援助対象者：別途就学援助制度で全額支給</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書を記入し、学校経由で秩父市教育委員会に提出してください。</p><p><span class="marker">子どもの人数は18歳未満の扶養親族の数で判定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は月額約4,500円、中学校は約5,200円が目安です。<strong>第1子・第2子は半額、第3子以降は全額</strong>が補助されます。</p><p><span class="marker">アレルギー対応食の場合も同額の補助</span>が適用されます。</p><div class="note-box">年度途中の転入の場合も随時申請を受け付けています。給食費の滞納がある場合は補助が一時停止される場合がありますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-telework-bonus',
    title: '秩父市 テレワーク移住支援補助金',
    organization: '秩父市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['秩父市', 'テレワーク', '補助金'],
    eligibility: '秩父市に転入しテレワークを行う方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '秩父市が実施するテレワーク移住支援補助金です。テレワークで秩父市に移住する方にコワーキングスペース利用料等を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 テレワーク移住支援補助金は、<span class="marker">テレワークを活用して秩父市に移住する方</span>を対象に、働く環境の整備費用を補助する制度です。</p><p>秩父市は都心から特急で約80分のアクセスながら、豊かな自然に囲まれたワーケーションの適地として注目されています。コワーキングスペースの整備も進んでおり、テレワーカーの受け入れ態勢を強化しています。</p><p><span class="marker-green">通信環境の整備費、コワーキングスペース利用料、引越費用などが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>市外から秩父市に転入した方であること</p><p>所属企業の許可を得てテレワークを実施していること</p><p>秩父市に3年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>秩父市役所地域政策課に申請書と在職証明書、テレワーク実施の証明書類を提出します。</p><p><span class="marker">転入日から1年以内に申請が必要</span>です。事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助対象経費の2分の1以内で、<strong>上限30万円</strong>です。通信回線工事費、コワーキングスペース利用料、デスク・チェア等の購入費が対象です。</p><p><span class="marker">3年以内に秩父市から転出した場合は補助金の返還</span>が求められます。</p><div class="highlight-box">秩父市内にはいくつかのコワーキングスペースがあり、お試し利用も可能です。移住前に秩父市の移住体験プログラムに参加して、現地の暮らしを体験してみるのもおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-nursing-home-reform',
    title: '秩父市 介護住宅改修補助事業',
    organization: '秩父市',
    type: 'local',
    maxAmount: '最大30万円（介護保険と別枠）',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['秩父市', '介護住宅改修', '補助金'],
    eligibility: '秩父市に住所を有し、要介護・要支援認定を受けた方と同居する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '秩父市が実施する介護住宅改修補助事業です。介護保険の住宅改修とは別枠で、バリアフリー工事に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 介護住宅改修補助事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>に対し、介護保険の住宅改修費とは別枠で費用の一部を補助する制度です。</p><p>秩父市は山間部が多く、急な坂道や階段のある住宅も少なくありません。高齢者が安全に在宅生活を続けられるよう、手すりの設置や段差解消、浴室改修などの工事費用を支援しています。</p><p>補助率は対象工事費の3分の2以内で、<strong>上限は30万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取替え</p><p>浴室・トイレの改修</p></div><p>秩父市役所高齢者介護課に申請します。ケアマネジャーの意見書と工事見積書が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した工事は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の2以内で、<strong>上限30万円</strong>です。介護保険の住宅改修費（上限20万円の9割）と合わせると、最大48万円の支援を受けられます。</p><p><span class="marker">市民税非課税世帯が優先</span>されます。所得状況により補助率が変わる場合があります。</p><div class="note-box">新築や増築工事は対象外です。施工業者は秩父市内に限定されませんが、地元業者の利用が推奨されています。改修後の効果についてケアマネジャーの確認を受ける必要があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-energy-support',
    title: '秩父市 省エネ設備導入補助金',
    organization: '秩父市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '埼玉県',
    tags: ['秩父市', '省エネ', '補助金'],
    eligibility: '秩父市に住所を有し、住宅に省エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '秩父市が実施する省エネ設備導入補助金です。太陽光発電やエコキュートなどの導入費用を最大15万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 省エネ設備導入補助金は、<span class="marker">住宅に太陽光発電システムやエコキュートなどの省エネ設備を導入する方</span>に対し、費用の一部を補助する制度です。</p><p>秩父市は冬季の冷え込みが厳しく、暖房費が家計の大きな負担となる地域です。省エネ設備の普及を促進することで、家庭のエネルギーコスト削減と地球温暖化防止の両立を目指しています。</p><p><span class="marker-green">太陽光発電、蓄電池、エコキュート、高効率給湯器などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限8万円）</p><p>家庭用蓄電池：上限10万円</p><p>エコキュート等の高効率給湯器：上限5万円</p></div><p>秩父市役所環境部環境立市推進課に申請書を提出します。設備の仕様書や見積書が必要です。</p><p><span class="marker">設置工事の前に申請が必要</span>です。交付決定後に工事に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備の種類によって補助額が異なり、<strong>複数設備を同時に導入する場合は合算で上限15万円</strong>です。</p><p><span class="marker">過去にこの補助金を利用した方は同一設備での再申請は不可</span>です。</p><div class="note-box">国や埼玉県の補助金と併用可能ですが、補助金の合計が設置費用を超えないことが条件です。太陽光発電については、FIT（固定価格買取制度）やFIP制度との関係を確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chichibu-bousai-equipment',
    title: '秩父市 防災設備設置補助金',
    organization: '秩父市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '埼玉県',
    tags: ['秩父市', '防災設備', '補助金'],
    eligibility: '秩父市に住所を有する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '秩父市が実施する防災設備設置補助金です。感震ブレーカーや家具転倒防止器具の設置費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秩父市 防災設備設置補助金は、<span class="marker">家庭における防災設備の設置費用</span>の一部を補助する制度です。</p><p>秩父市は山間部に位置し、地震に加えて土砂災害のリスクもある地域です。家庭での防災対策を推進するため、感震ブレーカーや家具転倒防止器具、防災用蓄電池などの設置費用を支援しています。</p><p><span class="marker-green">感震ブレーカー、家具転倒防止器具、火災報知器、防災用蓄電池などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー</p><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>住宅用火災警報器</p><p>ガラス飛散防止フィルム</p></div><p>秩父市役所危機管理課に申請書と設備の見積書・領収書を提出します。</p><p><span class="marker">設置後の申請も可能</span>ですが、設置日から6か月以内に限られます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象設備の購入・設置費用の2分の1以内で、<strong>1世帯あたり上限5万円</strong>です。</p><p><span class="marker">賃貸住宅にお住まいの方は、大家の許可を得たうえで申請</span>してください。</p><div class="highlight-box">秩父市では防災設備の設置のほか、地域の防災訓練への参加も推奨しています。自主防災組織が活発に活動しており、地域全体で災害に備える体制づくりが進んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chichibu.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 入間市（埼玉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'iruma-childcare-subsidy',
    title: '入間市 子育て支援助成金',
    organization: '入間市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['入間市', '子育て支援', '助成金'],
    eligibility: '入間市に住所を有し、小学校就学前の子どもを養育している保護者',
    applicationPeriod: '通年',
    description: '入間市が実施する子育て支援助成金です。育児用品やチャイルドシートの購入費を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 子育て支援助成金は、<span class="marker">小学校就学前の子どもを養育する世帯</span>に対し、育児用品等の購入費用を助成する制度です。</p><p>狭山茶の主要産地として知られる入間市は、緑豊かな茶畑の風景と都市的な利便性を併せ持つ街です。ジョンソンタウンなどの個性的な街並みもあり、子育て世帯に人気の住宅地となっています。育児に必要な初期費用を支援し、安心して子育てできる環境を整えています。</p><p><span class="marker-green">チャイルドシート、ベビーベッド、抱っこ紐など幅広い品目が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>入間市に住民登録があり、小学校就学前の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市ホームページからダウンロード可）</p><p>購入品の領収書・レシート</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>入間市役所こども支援課の窓口で申請を受け付けています。<span class="marker">購入日から6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象品目の購入費用の2分の1以内で、<strong>1世帯あたり上限5万円</strong>です。子ども1人につき1回利用できます。</p><p><span class="marker">中古品やフリマアプリでの購入は対象外</span>です。正規の販売店での購入に限ります。</p><div class="note-box">ベビーフードや消耗品（おむつ等）は対象外です。対象品目の一覧は入間市のホームページで最新情報をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-birth-bonus',
    title: '入間市 出産祝い金',
    organization: '入間市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['入間市', '出産祝い金', '給付金'],
    eligibility: '入間市に住所を有し、子どもを出産した方',
    applicationPeriod: '出生届提出時',
    description: '入間市が実施する出産祝い金制度です。出産した方に第1子5万円から最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 出産祝い金は、<span class="marker">入間市に住民登録のある方が子どもを出産した際</span>に支給される祝い金です。</p><p>入間市は西武池袋線で都心から約50分のアクセスで、アウトレットモールやジョンソンタウンなど買い物にも便利な街です。狭山茶の産地として豊かな緑に囲まれながら、子育てに必要な生活インフラも整っています。出産にかかる経済的負担を軽減するためにこの制度を設けています。</p><p><span class="marker-green">多子世帯ほど支給額が増額される段階制</span>を採用しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で入間市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>入間市役所こども支援課の窓口で、<strong>出生届と同時に申請</strong>できます。<span class="marker">出生日から3か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。</p><p><span class="marker">出生順は同一世帯の18歳未満の子どもの数で判定</span>されます。</p><div class="note-box">死産の場合は対象外です。双子以上の多胎出産の場合は、それぞれに祝い金が支給されます。申請期限を過ぎた場合は受給できませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-housing-purchase',
    title: '入間市 住宅取得奨励補助金',
    organization: '入間市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['入間市', '住宅取得', '補助金'],
    eligibility: '入間市内に住宅を新築または購入して定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '入間市が実施する住宅取得奨励補助金です。市内に住宅を取得して定住する方に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 住宅取得奨励補助金は、<span class="marker">市内に住宅を新築または購入して定住する方</span>に対し、取得費用の一部を補助する制度です。</p><p>入間市は都心へのアクセスが良く、三井アウトレットパークやコストコなどの大型商業施設が立地するにぎわいのある街です。一方で、狭山丘陵の豊かな自然も残されており、子育て世帯にとって魅力的な住環境を提供しています。</p><p>基本額は20万円で、<strong>子育て世帯加算等を含め最大40万円</strong>です。<span class="marker-green">市外からの転入者には加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>入間市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上定住する意思があること</p><p>市税の滞納がないこと</p><p>申請者が住宅の所有者であること</p></div><p>入間市役所都市計画課に申請書類を提出します。住宅の登記事項証明書や売買契約書が必要です。</p><p><span class="marker">住宅の引渡しから1年以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額は<strong>20万円</strong>です。子育て世帯（中学生以下の子どもがいる世帯）は10万円加算、市外からの転入者は10万円加算で、<strong>最大40万円</strong>です。</p><p><span class="marker">5年以内に転出した場合は補助金の返還</span>が求められます。</p><div class="highlight-box">入間市は圏央道のICにも近く、車でのアクセスにも優れた立地です。住宅ローン減税など国の支援制度との併用も可能ですので、住宅購入の際はあわせて確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-infertility',
    title: '入間市 不妊治療費助成事業',
    organization: '入間市',
    type: 'local',
    maxAmount: '最大10万円（1回あたり）',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['入間市', '不妊治療', '助成金'],
    eligibility: '入間市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日の属する年度末まで）',
    description: '入間市が実施する不妊治療費助成事業です。不妊治療の自己負担分を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減する</span>ための助成制度です。</p><p>入間市は子育て世帯の住みやすさを重視した街づくりを進めており、妊娠を希望するカップルへの支援も充実させています。保険適用後の自己負担分や、保険適用外の先進医療費について助成を行います。</p><p><span class="marker-green">埼玉県の不妊治療費助成制度と併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>入間市に住民登録のある夫婦で、医療機関において不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>医療機関の受診証明書</p><p>治療費の領収書（原本）</p><p>夫婦の住民票</p></div><p>入間市役所健康福祉センターに申請します。<span class="marker">治療終了日の属する年度末までに申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療あたり<strong>自己負担額の一部を上限10万円</strong>まで助成します。</p><p><span class="marker">保険適用分は対象外で、自己負担分のみが助成対象</span>です。</p><div class="note-box">埼玉県の助成制度を先に利用し、その助成額を差し引いた残額が市の助成対象となります。治療開始前に窓口で制度の詳細を確認しておくことをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-scholarship',
    title: '入間市 奨学金制度',
    organization: '入間市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['入間市', '奨学金', '教育支援'],
    eligibility: '入間市に住所を有する世帯の子どもで、高校・大学等に進学する方',
    applicationPeriod: '毎年2月〜4月頃',
    description: '入間市が実施する奨学金制度です。経済的理由で進学が困難な学生に月額最大3万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 奨学金制度は、<span class="marker">経済的な理由で修学が困難な学生</span>に対し、奨学金を無利子で貸与する制度です。</p><p>入間市は教育環境の整備に力を入れており、市立の小中学校だけでなく、進学を目指す高校生・大学生への支援も充実させています。将来の地域社会を支える人材を育成するため、学ぶ意欲のある学生を経済面からサポートしています。</p><p><strong>高校生は月額1.5万円、大学生・専門学校生は月額3万円</strong>です。<span class="marker-green">無利子での貸与</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が入間市に住民登録を有すること</p><p>高校・大学・短大・専門学校等に在学または進学予定であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が良好であること</p></div><p>入間市教育委員会学校教育課に申請書と所得証明書等を提出します。</p><p><span class="marker">毎年2月頃から募集開始、4月上旬が締切</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は<strong>高校生1.5万円、大学生等3万円</strong>です。正規の修業年限が貸与期間です。</p><p><span class="marker">卒業後6か月の据置期間を経て、10年以内に返還</span>する必要があります。</p><div class="note-box">JASSOの奨学金との併用は可能です。返還が困難になった場合の猶予・減額制度もありますので、困ったときは早めに窓口に相談してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-sme-support',
    title: '入間市 中小企業振興補助金',
    organization: '入間市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['入間市', '中小企業支援', '補助金'],
    eligibility: '入間市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '入間市が実施する中小企業振興補助金です。展示会出展や設備導入にかかる経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業の経営強化</span>を支援する制度です。</p><p>入間市は狭山茶の産地として農業が盛んな一方、工業団地には精密機械や食品加工の企業が集積しています。地域経済を支える中小企業の販路開拓や生産性向上を後押しするため、この補助制度を運営しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">展示会出展費、設備導入費、販促費などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>入間市内に事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p></div><p>入間市役所産業経済課に申請書と事業計画書を提出します。</p><p><span class="marker">事業着手前に申請が必要</span>です。交付決定前の経費は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。</p><p><span class="marker">事業完了後に実績報告書の提出</span>が求められます。</p><div class="highlight-box">入間市商工会では経営相談やセミナーを無料で実施しています。補助金の活用方法について事前に相談するとよいでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-nursing-equipment',
    title: '入間市 介護用品支給事業',
    organization: '入間市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['入間市', '介護用品', '支給事業'],
    eligibility: '入間市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '入間市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間6万円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 介護用品支給事業は、<span class="marker">在宅で要介護高齢者を介護している家族</span>に対し、紙おむつなどの介護用品を支給する制度です。</p><p>入間市は狭山丘陵の自然に囲まれた住宅都市で、高齢者が住み慣れた地域で安心して生活を続けられるよう、在宅介護の支援に力を入れています。介護用品の費用負担を軽減し、家族介護者の負担を和らげます。</p><p><span class="marker-green">紙おむつ、尿取りパッド、清拭剤、使い捨て手袋などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>入間市に住民登録があり、在宅で要介護4・5の認定を受けた高齢者を介護している家族が主な対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書</p><p>介護者の本人確認書類</p></div><p>入間市役所高齢者支援課に申請します。<span class="marker">市民税非課税世帯が優先</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給限度額は<strong>年間6万円相当</strong>です。月額約5,000円分の介護用品が配送されます。</p><p><span class="marker">入院中や施設入所中は対象外</span>となります。</p><div class="note-box">介護保険の福祉用具購入費支給とは別の制度で、併用が可能です。ケアマネジャーに相談して最適なサービスの組み合わせを検討してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-elderly-support',
    title: '入間市 高齢者あんしん見守り事業',
    organization: '入間市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '埼玉県',
    tags: ['入間市', '高齢者見守り', '生活支援'],
    eligibility: '入間市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '入間市が実施する高齢者あんしん見守り事業です。ひとり暮らし高齢者に緊急通報装置の貸与や安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 高齢者あんしん見守り事業は、<span class="marker">ひとり暮らしの高齢者や高齢者のみの世帯</span>に対し、緊急通報装置の貸与や定期的な安否確認サービスを提供する事業です。</p><p>入間市は都心へのアクセスが良い住宅都市として発展してきましたが、高齢化の進展に伴い、ひとり暮らし高齢者の安全確保が重要な課題となっています。24時間体制の見守りにより、安心な在宅生活を支えます。</p><p><span class="marker-green">市民税非課税世帯は利用料無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>65歳以上のひとり暮らし高齢者</p><p>高齢者のみの世帯</p><p>日中独居となる高齢者</p><p>持病があり健康上の不安がある方</p></div><p>入間市役所高齢者支援課に申請書を提出します。</p><p><span class="marker">民生委員の訪問確認を経て、装置が設置</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与</strong>と定期的な電話による安否確認が提供されます。ボタンを押すと受信センターに通報され、必要に応じて救急対応が行われます。</p><p><span class="marker">装置は貸与品のため、転居や施設入所時は返還</span>が必要です。</p><div class="highlight-box">入間市では地域包括支援センターと連携した見守りネットワークも構築されています。ご近所や民生委員による訪問活動と合わせて、多層的な見守りが実現しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iruma-seismic-diagnosis',
    title: '入間市 木造住宅耐震診断助成事業',
    organization: '入間市',
    type: 'local',
    maxAmount: '診断費用の全額（上限5万円）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '埼玉県',
    tags: ['入間市', '耐震診断', '防災'],
    eligibility: '入間市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '入間市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>入間市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>入間市は埼玉県の南西部に位置し、立川断層帯をはじめとする地震リスクへの備えが重要な地域です。旧耐震基準の住宅の安全性を確認し、必要な対策を講じるための第一歩として、無料の耐震診断を実施しています。</p><p><span class="marker-green">市が派遣する耐震診断士による診断を無料で受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>入間市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の戸建住宅であること</p><p>過去に本制度を利用していないこと</p></div><p>入間市役所建築指導課に申請書を提出します。診断士が自宅を訪問して調査します。</p><p><span class="marker">年度ごとの募集戸数に限りがあります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額市が負担</strong>し、自己負担はありません（上限5万円）。</p><p><span class="marker">診断の結果、耐震性不足と判定された場合は、耐震改修補助金を活用</span>して工事を行うことができます。</p><div class="note-box">診断では建物の構造だけでなく、劣化状況も確認されます。結果は報告書として書面で交付され、今後のリフォーム計画の参考資料としても活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.iruma.saitama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 朝霞市（埼玉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'asaka-childcare-subsidy',
    title: '朝霞市 子育て支援助成金',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['朝霞市', '子育て支援', '助成金'],
    eligibility: '朝霞市に住所を有し、小学校就学前の子どもを養育している保護者',
    applicationPeriod: '通年',
    description: '朝霞市が実施する子育て支援助成金です。育児用品の購入費を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 子育て支援助成金は、<span class="marker">小学校就学前の子どもを養育する世帯</span>に対し、育児用品等の購入費用を助成する制度です。</p><p>朝霞市は東武東上線と武蔵野線が交差する交通の利便性に優れた住宅都市で、東京都心まで約20分という好立地にあります。若い子育て世帯の流入が多く、充実した子育て支援策が求められており、育児にかかる初期費用の負担軽減に取り組んでいます。</p><p><span class="marker-green">ベビーカー、チャイルドシート、ベビーベッドなど幅広い育児用品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>朝霞市に住民登録があり、小学校就学前の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市ホームページからダウンロード可）</p><p>購入品の領収書またはレシート</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>朝霞市役所こども未来課の窓口で申請を受け付けています。<span class="marker">購入日から6か月以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象品目の購入費用の2分の1以内で、<strong>1世帯あたり上限5万円</strong>です。</p><p><span class="marker">フリマアプリや個人間取引での購入品は対象外</span>です。</p><div class="note-box">消耗品（おむつ・ミルク等）は対象外です。対象品目の詳細は朝霞市のホームページでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-birth-bonus',
    title: '朝霞市 出産祝い金',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['朝霞市', '出産祝い金', '給付金'],
    eligibility: '朝霞市に住所を有し、子どもを出産した方',
    applicationPeriod: '出生届提出時',
    description: '朝霞市が実施する出産祝い金制度です。出産した方に第1子5万円から最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 出産祝い金は、<span class="marker">朝霞市に住民登録のある方が子どもを出産した際</span>に支給される祝い金です。</p><p>朝霞市は東京都練馬区や板橋区に隣接し、和光市・志木市とともに埼玉県南部の生活圏を形成しています。彩夏祭（朝霞市民まつり）で知られるこの街では、若い世代が安心して子どもを産み育てられる環境づくりに力を入れています。</p><p><span class="marker-green">出生順に応じた段階的な支給額</span>を設定しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で朝霞市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>朝霞市役所こども未来課で、<strong>出生届と同時に申請</strong>が可能です。<span class="marker">出生日から3か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。</p><p><span class="marker">出生順は同一世帯の18歳未満の子どもの数で判定</span>されます。</p><div class="note-box">申請期限を過ぎた場合は受給できません。双子以上の場合はそれぞれに支給されます。詳細は朝霞市こども未来課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-newlywed-rent',
    title: '朝霞市 新婚世帯家賃補助',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '月額最大3万円（最長2年間）',
    maxAmountNum: 72,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['朝霞市', '新婚世帯', '家賃補助'],
    eligibility: '朝霞市内の賃貸住宅に居住する婚姻届提出後3年以内の夫婦',
    applicationPeriod: '通年',
    description: '朝霞市が実施する新婚世帯家賃補助です。新婚世帯の家賃の一部を月額最大3万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 新婚世帯家賃補助は、<span class="marker">婚姻届の提出後3年以内の新婚世帯</span>を対象に、市内の民間賃貸住宅の家賃の一部を補助する制度です。</p><p>朝霞市は東京に近い好立地と比較的手頃な家賃水準から、新婚世帯に人気のエリアです。結婚を機に朝霞市での新生活を始める世帯を応援し、定住を促進するためにこの補助制度を運営しています。</p><p><span class="marker-green">夫婦ともに39歳以下で、世帯合計所得が一定額以下</span>であることが条件です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>婚姻届の提出日から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>朝霞市内の民間賃貸住宅に居住していること</p><p>世帯の合計所得が一定額以下であること</p><p>市税の滞納がないこと</p></div><p>朝霞市役所都市建設部住宅課に申請書と賃貸借契約書の写し等を提出します。</p><p><span class="marker">年度ごとに申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当を差し引いた自己負担額に対し、<strong>月額上限3万円</strong>を補助します。最長2年間で最大72万円です。</p><p><span class="marker">公営住宅や社宅は対象外</span>です。</p><div class="highlight-box">朝霞市は朝霞駐屯地に近い閑静な住宅街が広がり、生活環境の良さが魅力です。子育て支援制度との組み合わせで、長く住み続けられる街としての価値を実感できるでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-disability-medical',
    title: '朝霞市 障がい者医療費助成制度',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['朝霞市', '障がい者医療', '助成金'],
    eligibility: '朝霞市に住所を有する重度心身障がい者',
    applicationPeriod: '通年',
    description: '朝霞市が実施する障がい者医療費助成制度です。重度心身障がい者の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 障がい者医療費助成制度は、<span class="marker">重度の心身障がいがある方</span>の医療費自己負担分を助成する制度です。</p><p>朝霞市は東京に隣接する利便性の高い住宅都市で、市内には複数の医療機関が充実しています。障がいのある方が安心して必要な医療を受けられるよう、保険診療の自己負担分を全額助成しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳○A・A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>朝霞市に住民登録があり、対象の障害者手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳○A・A</p><p>精神障害者保健福祉手帳1級</p></div><p>朝霞市役所障害福祉課に障害者手帳、健康保険証を持参して申請します。<span class="marker">65歳以上で新規取得の場合は制限がある場合があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診は後日償還払い</span>です。領収書を保管してください。</p><div class="note-box">保険適用外の費用は助成対象外です。所得制限がありますので、詳しくは朝霞市の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-school-lunch',
    title: '朝霞市 学校給食費補助制度',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額補助',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['朝霞市', '学校給食', '教育支援'],
    eligibility: '朝霞市立小中学校に在籍する児童生徒の保護者（第3子以降）',
    applicationPeriod: '毎年4月（年度ごと）',
    description: '朝霞市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 学校給食費補助制度は、<span class="marker">市立小中学校に通う第3子以降の児童生徒の給食費</span>を全額補助する制度です。</p><p>朝霞市は多子世帯の経済的負担を軽減するため、学校給食費の補助を実施しています。栄養バランスに配慮した質の高い給食を提供しながら、保護者の負担を軽くし、すべての子どもが安心して学校生活を送れるよう支援しています。</p><p><span class="marker-green">第3子以降は給食費が実質無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象"><p>朝霞市立小中学校に在籍する第3子以降の児童生徒</p><p>第3子の判定は18歳未満の扶養子女の数で判定</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に記入し、学校経由で提出します。</p><p><span class="marker">年度途中の転入者も随時申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費月額約4,500円、中学校月額約5,200円の<strong>全額が補助</strong>されます。</p><p><span class="marker">就学援助制度の対象者は就学援助で給食費が支給されるため、本制度との重複支給はありません</span>。</p><div class="note-box">食物アレルギーで給食を食べない日がある場合も、原則として月額単位での補助です。詳しくは朝霞市教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-telework-bonus',
    title: '朝霞市 テレワーク環境整備補助金',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['朝霞市', 'テレワーク', '補助金'],
    eligibility: '朝霞市に住所を有し、テレワーク環境の整備を行う個人事業主・中小企業',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '朝霞市が実施するテレワーク環境整備補助金です。テレワークに必要な設備導入費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 テレワーク環境整備補助金は、<span class="marker">テレワークに必要な通信環境や設備の整備費用</span>を補助する制度です。</p><p>朝霞市は東京都心へのアクセスが良く、テレワークと通勤を組み合わせた柔軟な働き方に適した立地です。コロナ禍以降もテレワークを継続する企業が増えており、自宅での快適な仕事環境の整備を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限10万円</strong>です。<span class="marker-green">Wi-Fi設備、Web会議用機器、デスク・チェア等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>通信回線の新設・増強費用</p><p>Web会議用カメラ・マイク等の購入費</p><p>テレワーク用デスク・チェアの購入費</p><p>セキュリティソフトの導入費</p></div><p>朝霞市役所産業振興課に申請書と見積書を提出します。</p><p><span class="marker">購入・設置前に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。</p><p><span class="marker">個人使用のパソコン本体は対象外</span>です。テレワークに特化した周辺機器や環境整備に限られます。</p><div class="note-box">1事業者（個人事業主含む）につき1回限りの利用です。国や県の同種の補助金と併用はできない場合がありますので、事前に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-nursing-home-reform',
    title: '朝霞市 高齢者住宅改修補助事業',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '最大20万円（介護保険と別枠）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['朝霞市', '介護住宅改修', '補助金'],
    eligibility: '朝霞市に住所を有し、要介護・要支援認定を受けた方と同居する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '朝霞市が実施する高齢者住宅改修補助事業です。介護保険とは別枠でバリアフリー工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 高齢者住宅改修補助事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>に対し、介護保険とは別枠で補助する制度です。</p><p>朝霞市は戸建住宅やマンションが立ち並ぶ住宅都市で、高齢化に伴うバリアフリー化のニーズが高まっています。手すりの設置、段差解消、浴室改修などの工事費用を支援し、高齢者が安全に暮らせる住環境づくりを推進しています。</p><p>補助率は対象工事費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消</p><p>床材の滑り防止加工</p><p>引き戸への変更</p><p>和式から洋式へのトイレ改修</p></div><p>朝霞市役所長寿はつらつ課に申請します。ケアマネジャーの意見書が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の2分の1以内で、<strong>上限20万円</strong>です。介護保険と合わせて最大38万円の支援が可能です。</p><p><span class="marker">住民税非課税世帯が優先</span>されます。</p><div class="note-box">賃貸住宅の場合は所有者の同意書が必要です。新築・増築工事は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-energy-support',
    title: '朝霞市 省エネ設備導入補助金',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '埼玉県',
    tags: ['朝霞市', '省エネ', '補助金'],
    eligibility: '朝霞市に住所を有し、住宅に省エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '朝霞市が実施する省エネ設備導入補助金です。太陽光発電やエコキュートの導入費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 省エネ設備導入補助金は、<span class="marker">住宅に省エネルギー設備を設置する方</span>に対し、費用の一部を補助する制度です。</p><p>朝霞市は住宅密集地であるため、各家庭のエネルギー消費を削減することが地域全体の環境負荷低減に直結します。太陽光発電や高効率給湯器の普及を促進し、脱炭素社会の実現を目指しています。</p><p><span class="marker-green">太陽光発電、蓄電池、エコキュートなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限7万円）</p><p>家庭用蓄電池：上限7万円</p><p>エコキュート等：上限3万円</p></div><p>朝霞市役所環境推進課に申請書と設備の仕様書を提出します。</p><p><span class="marker">設置工事の着手前に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備ごとに補助額が異なり、<strong>合算で上限10万円</strong>です。</p><p><span class="marker">過去に同一設備で本補助金を利用した方は再申請不可</span>です。</p><div class="note-box">国や埼玉県の補助金と併用可能ですが、合計額が設置費用を超えないことが条件です。設置後の実績報告も必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asaka-bousai-equipment',
    title: '朝霞市 家庭用防災設備設置補助金',
    organization: '朝霞市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '埼玉県',
    tags: ['朝霞市', '防災設備', '補助金'],
    eligibility: '朝霞市に住所を有する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '朝霞市が実施する家庭用防災設備設置補助金です。感震ブレーカーや家具転倒防止器具の設置費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>朝霞市 家庭用防災設備設置補助金は、<span class="marker">家庭内の防災設備の設置費用</span>を補助する制度です。</p><p>朝霞市は住宅密集地域が多く、地震時の通電火災や家具転倒のリスクが懸念されます。家庭レベルでの防災対策を推進し、災害に強い街づくりを目指しています。</p><p><span class="marker-green">感震ブレーカー、家具転倒防止器具、火災警報器、ガラス飛散防止フィルムが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家具転倒防止器具</p><p>住宅用火災警報器</p><p>ガラス飛散防止フィルム</p></div><p>朝霞市役所危機管理室に申請書を提出します。</p><p><span class="marker">設置後の申請も可能</span>（設置日から6か月以内）です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象設備の購入・設置費用の2分の1以内で、<strong>上限5万円</strong>です。</p><p><span class="marker">賃貸住宅の場合は大家の許可が必要</span>です。</p><div class="highlight-box">朝霞市では年に数回、自主防災組織による防災訓練を実施しています。設備の導入とあわせて、日頃からの防災意識の向上も大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.asaka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 野田市（千葉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'noda-childcare-subsidy',
    title: '野田市 子育て支援助成金',
    organization: '野田市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['野田市', '子育て支援', '助成金'],
    eligibility: '野田市に住所を有し、小学校就学前の子どもを養育している保護者',
    applicationPeriod: '通年',
    description: '野田市が実施する子育て支援助成金です。育児用品の購入費等を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 子育て支援助成金は、<span class="marker">小学校就学前の子どもを養育する世帯</span>に対し、育児用品等の購入費用を助成する制度です。</p><p>キッコーマン醤油の発祥地として知られる野田市は、利根川と江戸川に挟まれた自然豊かな街です。清水公園のフィールドアスレチックなど、子どもの遊び場にも恵まれています。子育て世帯の経済的負担を軽減し、安心して育児ができる環境を整えています。</p><p><span class="marker-green">チャイルドシート、ベビーカー、ベビーベッドなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>野田市に住民登録があり、小学校就学前の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書</p><p>購入品の領収書またはレシート</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>野田市役所児童家庭課の窓口で申請を受け付けています。<span class="marker">購入日から6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費用の2分の1以内で、<strong>1世帯あたり上限5万円</strong>です。</p><p><span class="marker">中古品やフリマアプリでの購入は対象外</span>です。</p><div class="note-box">消耗品（おむつ・ミルク等）は対象外です。対象品目の詳細は野田市のホームページでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-birth-bonus',
    title: '野田市 出産祝い金',
    organization: '野田市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['野田市', '出産祝い金', '給付金'],
    eligibility: '野田市に住所を有し、子どもを出産した方',
    applicationPeriod: '出生届提出時',
    description: '野田市が実施する出産祝い金制度です。出産した方に第1子5万円から最大20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 出産祝い金は、<span class="marker">野田市に住民登録のある方が子どもを出産した際</span>に支給される祝い金です。</p><p>野田市は醤油醸造の歴史に彩られた街で、利根運河沿いの風景や清水公園の桜など、穏やかな暮らしが楽しめます。東武アーバンパークラインで柏・大宮方面へのアクセスも良く、子育て世帯に適した住環境です。出産時の経済的負担を軽減するためにこの制度を運営しています。</p><p><span class="marker-green">第3子以降は20万円と手厚い支給額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で野田市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>野田市役所児童家庭課で<strong>出生届と同時に申請</strong>できます。<span class="marker">出生日から3か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。</p><p><span class="marker">出生順は18歳未満の扶養子女の人数で判定</span>されます。</p><div class="note-box">双子以上の場合はそれぞれに支給されます。申請期限を過ぎると受給できません。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-housing-purchase',
    title: '野田市 住宅取得補助金',
    organization: '野田市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['野田市', '住宅取得', '補助金'],
    eligibility: '野田市内に住宅を新築または購入して定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '野田市が実施する住宅取得補助金です。市内に住宅を取得して定住する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 住宅取得補助金は、<span class="marker">市内に住宅を新築または購入して定住する方</span>に対し、取得費用の一部を補助する制度です。</p><p>野田市は千葉県北西部に位置し、東京・埼玉へのアクセスが良好ながら、比較的手頃な価格で一戸建て住宅を取得できるエリアです。利根川や江戸川の水辺環境と、清水公園をはじめとする緑地に恵まれた住環境が魅力です。</p><p>基本額は30万円で、<strong>加算を含め最大50万円</strong>です。<span class="marker-green">子育て世帯加算や市外転入者加算があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>野田市内に住宅を新築または購入すること</p><p>5年以上定住する意思があること</p><p>市税の滞納がないこと</p><p>申請者が住宅の所有者であること</p></div><p>野田市役所都市計画課に申請します。登記事項証明書や売買契約書が必要です。</p><p><span class="marker">引渡しから1年以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額<strong>30万円</strong>に、子育て世帯加算10万円、市外転入者加算10万円で<strong>最大50万円</strong>です。</p><p><span class="marker">5年以内の転出で返還義務</span>が生じます。</p><div class="highlight-box">野田市は圏央道や常磐自動車道へのアクセスも良く、車での生活にも便利です。住宅ローン減税との併用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-infertility',
    title: '野田市 不妊治療費助成事業',
    organization: '野田市',
    type: 'local',
    maxAmount: '最大10万円（1回あたり）',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['野田市', '不妊治療', '助成金'],
    eligibility: '野田市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日の属する年度末まで）',
    description: '野田市が実施する不妊治療費助成事業です。不妊治療の自己負担分を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減する</span>ための助成制度です。</p><p>野田市は豊かな自然環境と都市的利便性を兼ね備えた街で、子育てに適した住環境として人気があります。妊娠を希望するカップルが安心して治療に臨めるよう、保険適用後の自己負担分について助成を行っています。</p><p><span class="marker-green">千葉県の助成制度と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>野田市に住民登録のある夫婦で、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>医療機関の受診証明書</p><p>治療費の領収書</p><p>住民票</p></div><p>野田市役所保健センターに申請します。<span class="marker">治療終了日の属する年度末までに申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療あたり<strong>上限10万円</strong>の助成です。</p><p><span class="marker">千葉県の助成制度を先に利用し、残額が市の助成対象</span>です。</p><div class="note-box">保険適用分は対象外です。治療前に窓口で制度の詳細を確認しておくことをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-scholarship',
    title: '野田市 奨学金制度',
    organization: '野田市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '千葉県',
    tags: ['野田市', '奨学金', '教育支援'],
    eligibility: '野田市に住所を有する世帯の子どもで、高校・大学等に進学する方',
    applicationPeriod: '毎年2月〜4月頃',
    description: '野田市が実施する奨学金制度です。経済的理由で進学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 奨学金制度は、<span class="marker">経済的理由で修学が困難な学生</span>に対し、無利子で奨学金を貸与する制度です。</p><p>野田市は醤油産業の歴史を基盤に発展した街で、教育への投資を通じて地域の未来を支える人材育成に取り組んでいます。学ぶ意欲のある若者を経済面からサポートします。</p><p><strong>高校生月額1.5万円、大学生月額3万円</strong>で、<span class="marker-green">無利子</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が野田市に住民登録を有すること</p><p>高校・大学・専門学校等に在学または進学予定であること</p><p>経済的理由で修学が困難であること</p><p>学業成績が良好であること</p></div><p>野田市教育委員会に申請書を提出します。</p><p><span class="marker">毎年2月頃募集開始、4月上旬締切</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>高校生1.5万円/月、大学生等3万円/月</strong>の無利子貸与です。</p><p><span class="marker">卒業後据置期間を経て10年以内に返還</span>します。</p><div class="note-box">JASSOの奨学金との併用可能です。返還困難時の猶予制度もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-sme-support',
    title: '野田市 中小企業経営支援補助金',
    organization: '野田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['野田市', '中小企業支援', '補助金'],
    eligibility: '野田市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '野田市が実施する中小企業経営支援補助金です。販路開拓や生産性向上にかかる経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 中小企業経営支援補助金は、<span class="marker">市内の中小企業が行う販路開拓や生産性向上</span>の取り組みに対し、経費の一部を補助する制度です。</p><p>野田市はキッコーマンに代表される食品産業をはじめ、製造業や物流業の中小企業が多く立地しています。地域の産業基盤を支える中小企業の経営力強化を後押しするため、この補助制度を運営しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">展示会出展、設備導入、IT化が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>野田市内に事業所を有する中小企業者</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p></div><p>野田市役所商工観光課に申請書を提出します。</p><p><span class="marker">事業着手前に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の2分の1以内で<strong>上限30万円</strong>です。</p><p><span class="marker">完了後に実績報告書の提出</span>が必要です。</p><div class="highlight-box">野田市商工会議所では経営相談やセミナーを実施しています。補助金の活用方法を事前に相談するのがおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-nursing-equipment',
    title: '野田市 介護用品支給事業',
    organization: '野田市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['野田市', '介護用品', '支給事業'],
    eligibility: '野田市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '野田市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等を年間6万円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 介護用品支給事業は、<span class="marker">在宅で要介護高齢者を介護している家族</span>に対し、紙おむつなどの介護用品を支給する制度です。</p><p>野田市は利根川沿いの穏やかな環境で、高齢者が住み慣れた地域で暮らし続けられるよう在宅介護の支援に取り組んでいます。介護用品の費用負担を軽減することで、家族介護者を経済面から支えています。</p><p><span class="marker-green">紙おむつ、尿取りパッド、清拭剤などが支給対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>野田市に住民登録があり、要介護4・5の認定を受けた高齢者を在宅で介護している家族が主な対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書</p><p>介護者の本人確認書類</p></div><p>野田市役所高齢者支援課に申請します。<span class="marker">市民税非課税世帯が優先</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給限度額は<strong>年間6万円相当</strong>です。</p><p><span class="marker">入院中や施設入所中は対象外</span>です。</p><div class="note-box">介護保険の福祉用具購入費とは別の制度で併用可能です。ケアマネジャーに相談して最適なサービスを組み合わせてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-elderly-support',
    title: '野田市 高齢者見守り・生活支援事業',
    organization: '野田市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '千葉県',
    tags: ['野田市', '高齢者見守り', '生活支援'],
    eligibility: '野田市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '野田市が実施する高齢者見守り・生活支援事業です。ひとり暮らし高齢者に緊急通報装置の貸与等を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 高齢者見守り・生活支援事業は、<span class="marker">ひとり暮らしの高齢者や高齢者のみの世帯</span>を対象に、緊急通報装置の貸与や定期的な安否確認を行う事業です。</p><p>野田市は広い市域に住宅が分散しており、ひとり暮らし高齢者の安全確保が重要な課題です。緊急時にボタンひとつで通報できる装置を貸与し、24時間の見守り体制を整えています。</p><p><span class="marker-green">市民税非課税世帯は利用料無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>65歳以上のひとり暮らし高齢者</p><p>高齢者のみの世帯</p><p>日中独居の高齢者</p></div><p>野田市役所高齢者支援課に申請書を提出します。</p><p><span class="marker">民生委員の確認を経て装置が設置</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与</strong>と定期的な安否確認が行われます。</p><p><span class="marker">装置は貸与品のため転居・入所時は返還</span>が必要です。</p><div class="highlight-box">野田市では地域包括支援センターと連携した見守りネットワークも整備されています。お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'noda-seismic-diagnosis',
    title: '野田市 木造住宅耐震診断助成事業',
    organization: '野田市',
    type: 'local',
    maxAmount: '診断費用の全額（上限5万円）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '千葉県',
    tags: ['野田市', '耐震診断', '防災'],
    eligibility: '野田市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '野田市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>野田市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>千葉県北西部に位置する野田市は、東日本大震災で液状化被害を受けた地域もあり、住宅の耐震化が重要な課題です。旧耐震基準の住宅について無料の耐震診断を提供し、住まいの安全性向上を支援しています。</p><p><span class="marker-green">市が派遣する耐震診断士による診断を無料で受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>野田市内に所在する木造住宅</p><p>1981年5月31日以前に着工された住宅</p><p>2階建て以下の戸建住宅</p><p>過去に本制度を利用していないこと</p></div><p>野田市役所建築指導課に申請書を提出します。</p><p><span class="marker">年度ごとの募集戸数に限りがあります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>診断費用は全額市が負担</strong>（上限5万円）で、自己負担はありません。</p><p><span class="marker">診断で耐震性不足と判定された場合は、耐震改修補助金も利用可能</span>です。</p><div class="note-box">液状化リスクが高い地域にお住まいの方は、耐震診断とあわせて地盤の状態も確認することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.noda.chiba.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 成田市（千葉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'narita-childcare-subsidy',
    title: '成田市 子育て支援助成金',
    organization: '成田市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['成田市', '子育て支援', '助成金'],
    eligibility: '成田市に住所を有し、小学校就学前の子どもを養育している保護者',
    applicationPeriod: '通年',
    description: '成田市が実施する子育て支援助成金です。育児用品の購入費を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 子育て支援助成金は、<span class="marker">小学校就学前の子どもを養育する世帯</span>に対し、育児用品等の購入費用を助成する制度です。</p><p>成田国際空港を擁する国際都市・成田市は、空港関連産業の従事者をはじめ多くの子育て世帯が居住しています。成田山新勝寺の門前町としての歴史と、空港都市としての先進性を持つこの街で、安心して育児ができるよう経済的支援を行っています。</p><p><span class="marker-green">チャイルドシート、ベビーカーなど幅広い育児用品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>成田市に住民登録があり、小学校就学前の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書</p><p>購入品の領収書</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>成田市役所子育て支援課の窓口で申請を受け付けています。<span class="marker">購入日から6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費用の2分の1以内で、<strong>1世帯あたり上限5万円</strong>です。</p><p><span class="marker">フリマアプリや個人間取引は対象外</span>です。</p><div class="note-box">消耗品は対象外です。対象品目は成田市のホームページでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-birth-bonus',
    title: '成田市 出産祝い金',
    organization: '成田市',
    type: 'local',
    maxAmount: '第1子10万円・第2子15万円・第3子以降30万円',
    maxAmountNum: 30,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['成田市', '出産祝い金', '給付金'],
    eligibility: '成田市に住所を有し、子どもを出産した方',
    applicationPeriod: '出生届提出時',
    description: '成田市が実施する出産祝い金制度です。出産した方に第1子10万円から最大30万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 出産祝い金は、<span class="marker">成田市に住民登録のある方が子どもを出産した際</span>に支給される祝い金です。</p><p>成田市は国際空港の税収を背景に財政力が高く、子育て支援にも手厚い投資を行っています。出産祝い金も県内でも高水準の金額設定で、第1子から10万円、第3子以降は30万円と充実した支給内容となっています。</p><p><span class="marker-green">空港関連の安定した財政基盤を活かした手厚い支給額</span>が特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日時点で成田市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>成田市役所子育て支援課で<strong>出生届と同時に申請</strong>できます。<span class="marker">出生日から3か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子10万円、第2子15万円、第3子以降30万円</strong>です。県内でもトップクラスの支給水準です。</p><p><span class="marker">出生順は18歳未満の扶養子女の数で判定</span>されます。</p><div class="note-box">双子以上の場合はそれぞれに支給されます。申請期限を過ぎると受給できませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-newlywed-rent',
    title: '成田市 新婚世帯家賃補助',
    organization: '成田市',
    type: 'local',
    maxAmount: '月額最大3万円（最長2年間）',
    maxAmountNum: 72,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['成田市', '新婚世帯', '家賃補助'],
    eligibility: '成田市内の賃貸住宅に居住する婚姻届提出後3年以内の夫婦',
    applicationPeriod: '通年',
    description: '成田市が実施する新婚世帯家賃補助です。新婚世帯の家賃を月額最大3万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 新婚世帯家賃補助は、<span class="marker">婚姻届提出後3年以内の新婚世帯</span>を対象に、市内の民間賃貸住宅の家賃の一部を補助する制度です。</p><p>成田市は空港勤務者をはじめとする若い世代が多く居住するエリアで、JR成田線や京成電鉄で都心へもアクセス可能です。新婚期の住居費を支援することで、成田市での定住を促進しています。</p><p><span class="marker-green">夫婦ともに39歳以下で、世帯所得が一定額以下</span>であることが条件です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届の提出から3年以内</p><p>夫婦ともに39歳以下</p><p>成田市内の民間賃貸住宅に居住</p><p>世帯合計所得が一定額以下</p><p>市税の滞納なし</p></div><p>成田市役所都市計画課に申請書と賃貸借契約書の写し等を提出します。</p><p><span class="marker">年度ごとに申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当を差し引いた額に対し、<strong>月額上限3万円</strong>、最長2年間で最大72万円です。</p><p><span class="marker">公営住宅・社宅は対象外</span>です。</p><div class="highlight-box">成田市は空港関連の雇用が豊富で、若い世代の就業機会に恵まれています。新婚家賃補助と他の子育て支援制度を組み合わせることで、長く安心して暮らせる環境が整います。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-disability-medical',
    title: '成田市 障がい者医療費助成制度',
    organization: '成田市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['成田市', '障がい者医療', '助成金'],
    eligibility: '成田市に住所を有する重度心身障がい者',
    applicationPeriod: '通年',
    description: '成田市が実施する障がい者医療費助成制度です。重度心身障がい者の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 障がい者医療費助成制度は、<span class="marker">重度の心身障がいがある方</span>の医療費自己負担分を全額助成する制度です。</p><p>成田市は国際空港の所在地として多様な背景を持つ住民が暮らす街です。障がいのある方が安心して必要な医療を受けられるよう、保険診療の自己負担分を全額助成しています。市内には成田赤十字病院をはじめとする医療機関が充実しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳○A・A、精神障害者保健福祉手帳1級が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>成田市に住民登録があり、対象の障害者手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="対象障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳○A・A</p><p>精神障害者保健福祉手帳1級</p></div><p>成田市役所障がい者福祉課に障害者手帳と健康保険証を持参して申請します。<span class="marker">65歳以上での新規取得は制限がある場合があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。千葉県内の医療機関では受給資格証の提示で窓口負担ゼロです。</p><p><span class="marker">県外受診は後日償還払い</span>。領収書を保管してください。</p><div class="note-box">保険適用外の費用は対象外です。所得制限がある場合がありますので、詳しくは窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-school-lunch',
    title: '成田市 学校給食費補助制度',
    organization: '成田市',
    type: 'local',
    maxAmount: '給食費全額補助',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '千葉県',
    tags: ['成田市', '学校給食', '教育支援'],
    eligibility: '成田市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度ごと）',
    description: '成田市が実施する学校給食費補助制度です。市立小中学校の給食費を全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 学校給食費補助制度は、<span class="marker">市立小中学校に通うすべての児童生徒の給食費</span>を全額補助する制度です。</p><p>成田市は空港関連の税収に支えられた財政力を活かし、学校給食費の完全無償化を実現しています。成田山新勝寺の門前町として歴史ある街並みと国際空港のモダンさが共存するこの街では、すべての子どもが経済的な心配なく栄養バランスの取れた給食を食べられます。</p><p><span class="marker-green">所得制限なしで全児童生徒が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助内容"><p>成田市立小学校の児童：給食費全額補助</p><p>成田市立中学校の生徒：給食費全額補助</p><p>所得制限なし</p></div><p>毎年4月に学校を通じて案内されます。特別な申請は不要で、<strong>自動的に全額補助が適用</strong>されます。</p><p><span class="marker">年度途中の転入者も転入時点から適用</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費月額約4,500円、中学校月額約5,200円の<strong>全額</strong>が補助されます。保護者の負担はゼロです。</p><p><span class="marker">私立学校に通う児童生徒は対象外</span>です。成田市立の小中学校に限られます。</p><div class="highlight-box">成田市の学校給食では地産地消の取り組みも推進されており、千葉県産の食材を積極的に活用しています。食育の一環として、子どもたちが食の大切さを学ぶ機会も設けられています。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-telework-bonus',
    title: '成田市 テレワーク推進補助金',
    organization: '成田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['成田市', 'テレワーク', '補助金'],
    eligibility: '成田市内に事業所を有する中小企業者で、テレワーク環境を新たに整備する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '成田市が実施するテレワーク推進補助金です。テレワーク環境の整備費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 テレワーク推進補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する費用</span>を補助する制度です。</p><p>成田市は空港都市として国際的なビジネス拠点であり、テレワークの導入は事業継続や従業員の働き方改革に直結します。通信環境の整備やリモートアクセスシステムの導入費用を支援し、柔軟な働き方の普及を促進しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">VPN、クラウドサービス、Web会議システム等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>VPN等のリモートアクセス環境の構築費</p><p>クラウドサービスの初期導入費</p><p>Web会議用機器の購入費</p><p>セキュリティ対策費</p></div><p>成田市役所商工課に申請書と見積書を提出します。</p><p><span class="marker">導入前に申請が必要</span>です。交付決定後に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の2分の1以内で、<strong>上限20万円</strong>です。</p><p><span class="marker">月額課金のサブスクリプション費用は初年度分のみ対象</span>です。</p><div class="note-box">パソコン本体の購入費は対象外です。国や県の同種の補助金との併用は制限される場合がありますので、事前に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-nursing-home-reform',
    title: '成田市 高齢者住宅改修補助事業',
    organization: '成田市',
    type: 'local',
    maxAmount: '最大25万円（介護保険と別枠）',
    maxAmountNum: 25,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['成田市', '介護住宅改修', '補助金'],
    eligibility: '成田市に住所を有し、要介護・要支援認定を受けた方と同居する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '成田市が実施する高齢者住宅改修補助事業です。介護保険とは別枠でバリアフリー工事に最大25万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 高齢者住宅改修補助事業は、<span class="marker">要介護・要支援認定を受けた方が住む住宅のバリアフリー改修</span>に対し、介護保険とは別枠で費用の一部を補助する制度です。</p><p>成田市は空港関連の税収を活用し、高齢者福祉の充実に取り組んでいます。手すりの設置、段差解消、浴室・トイレの改修などを支援し、高齢者が安全に自宅で暮らし続けられる環境づくりを推進しています。</p><p>補助率は対象工事費の2分の1以内で、<strong>上限25万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消</p><p>床材の滑り防止加工</p><p>引き戸への変更</p><p>浴室・トイレのバリアフリー改修</p></div><p>成田市役所高齢者福祉課に申請します。ケアマネジャーの意見書と工事見積書が必要です。</p><p><span class="marker">工事着手前に申請が必須</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事費の2分の1以内で、<strong>上限25万円</strong>です。介護保険と合わせて最大43万円の支援が可能です。</p><p><span class="marker">住民税非課税世帯が優先</span>されます。</p><div class="note-box">新築・増築は対象外です。賃貸住宅の場合は所有者の同意書が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-energy-support',
    title: '成田市 省エネ・再エネ設備導入補助金',
    organization: '成田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '千葉県',
    tags: ['成田市', '省エネ', '補助金'],
    eligibility: '成田市に住所を有し、住宅に省エネ・再エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '成田市が実施する省エネ・再エネ設備導入補助金です。太陽光発電や蓄電池の導入費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 省エネ・再エネ設備導入補助金は、<span class="marker">住宅に太陽光発電システムや蓄電池などの省エネ・再エネ設備を導入する方</span>に対し、費用の一部を補助する制度です。</p><p>成田市は空港による環境負荷を低減するため、市全体で脱炭素の取り組みを推進しています。家庭レベルでの再生可能エネルギーの活用を促し、持続可能な街づくりを目指しています。</p><p><span class="marker-green">太陽光発電、蓄電池、エコキュート、V2Hなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限10万円）</p><p>家庭用蓄電池：上限10万円</p><p>エコキュート等：上限5万円</p><p>V2H（電気自動車充電設備）：上限5万円</p></div><p>成田市役所環境計画課に申請書と仕様書を提出します。</p><p><span class="marker">設置工事着手前に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備の種類によって補助額が異なり、<strong>合算で上限20万円</strong>です。</p><p><span class="marker">過去に同一設備で利用済みの場合は再申請不可</span>です。</p><div class="highlight-box">国や千葉県の補助金と併用可能ですが、合計額が設置費用を超えないことが条件です。成田市の充実した財政力を背景に、県内でも高水準の補助額となっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'narita-bousai-equipment',
    title: '成田市 防災設備設置補助金',
    organization: '成田市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '千葉県',
    tags: ['成田市', '防災設備', '補助金'],
    eligibility: '成田市に住所を有する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '成田市が実施する防災設備設置補助金です。感震ブレーカーや家具転倒防止器具の設置費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>成田市 防災設備設置補助金は、<span class="marker">家庭における防災設備の設置費用</span>を補助する制度です。</p><p>成田市は千葉県北部に位置し、2011年の東日本大震災では液状化や建物被害を経験しました。大規模地震への備えとして、家庭レベルでの防災設備の普及を推進し、災害に強い住環境の実現を目指しています。</p><p><span class="marker-green">感震ブレーカー、家具転倒防止器具、火災警報器、防災用蓄電池が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー</p><p>家具転倒防止器具</p><p>住宅用火災警報器</p><p>ガラス飛散防止フィルム</p><p>防災用蓄電池</p></div><p>成田市役所危機管理課に申請書を提出します。</p><p><span class="marker">設置後の申請も可能</span>（設置日から6か月以内）です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象設備の購入・設置費用の2分の1以内で、<strong>上限5万円</strong>です。</p><p><span class="marker">賃貸住宅の場合は大家の許可が必要</span>です。</p><div class="note-box">成田市では地域防災計画に基づき、各地区で防災訓練も実施しています。設備の導入とともに、日頃の防災意識向上にも努めましょう。空港近隣という特性上、成田市独自の防災体制も整備されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.narita.chiba.jp/',
    publishedAt: '2026-03-12',
  },
];
