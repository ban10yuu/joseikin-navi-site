import { Grant } from '@/lib/types';

export const cityGrantsBatch66: Grant[] = [
  // ────────────────────────────────────────────────
  // 須賀川市（福島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'sukagawa-childcare-subsidy',
    title: '須賀川市 保育料軽減補助金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大月額2万5千円',
    maxAmountNum: 2.5,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['須賀川市', '保育料軽減', '補助金'],
    eligibility: '須賀川市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '須賀川市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大2万5千円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>須賀川市は福島県中通りの南部に位置し、ウルトラマンの生みの親・円谷英二の出身地として知られる都市です。共働き世帯の増加に対応し、多様な保育ニーズに応えるため、認可保育所以外の施設利用者への支援を充実させています。</p><p>補助額は<strong>月額最大2万5千円</strong>で、<span class="marker-green">世帯の市民税所得割額に応じて補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>須賀川市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>世帯の課税証明書</p><p>保護者の本人確認書類</p></div><p>須賀川市役所こども課の窓口または郵送で申請できます。<span class="marker">四半期ごとの申請が必要</span>で、利用月の翌月以降に領収書を添えて提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は世帯の市民税所得割額に応じて決まり、<strong>月額最大2万5千円</strong>が支給されます。第2子以降はさらに加算がある場合があります。</p><p><span class="marker">企業主導型保育事業を利用している場合は対象外</span>となることがあります。事前にこども課へ確認してください。</p><div class="note-box">幼児教育・保育の無償化制度と併用する場合は、無償化の給付額を差し引いた残額が補助の対象となります。須賀川市では待機児童の解消にも積極的に取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-birth-bonus',
    title: '須賀川市 出産祝い金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['須賀川市', '出産祝い金', '給付金'],
    eligibility: '須賀川市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '須賀川市が実施する出産祝い金です。市内在住の方が出産した際に最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>須賀川市は牡丹園や須賀川市民交流センターtetteなど文化施設が充実したまちです。少子化対策と定住促進の一環として、出産時の経済的支援を行い、安心して子育てできる環境づくりを推進しています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限はなく、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で須賀川市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>須賀川市役所こども課の窓口で申請します。出生届の提出時にあわせて手続きすることをおすすめします。</p><p><span class="marker">申請には母子健康手帳と振込先口座情報が必要</span>です。郵送での申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子は5万円、第2子以降は10万円</strong>が支給されます。多胎児の場合はそれぞれの子に対して支給されます。</p><p><span class="marker">申請期限は出産後6か月以内</span>です。期限を過ぎると受給できなくなりますのでご注意ください。</p><div class="highlight-box">国の出産育児一時金（50万円）や福島県の出産・子育て応援給付金とは別に受給できます。須賀川市では妊娠届出時の面談で各種支援制度の案内も行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-housing-purchase',
    title: '須賀川市 住宅取得支援補助金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福島県',
    tags: ['須賀川市', '住宅取得', '補助金'],
    eligibility: '須賀川市内に新たに住宅を取得する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '須賀川市が実施する住宅取得支援補助金です。定住促進のため、市内に住宅を取得する世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 住宅取得支援補助金は、<span class="marker">市内に新たに住宅を取得する世帯</span>に対して費用の一部を補助する制度です。</p><p>須賀川市は郡山市に隣接し、東北自動車道や東北新幹線へのアクセスが良好な立地です。東日本大震災からの復興を進める中で、定住人口の確保・拡大を目指し住宅取得を支援しています。</p><p>補助額は<strong>基本30万円、市外からの転入で最大50万円</strong>です。<span class="marker-green">子育て世帯への加算</span>も設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>須賀川市内に新築・中古住宅を取得すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>世帯員全員が市税を滞納していないこと</p><p>住宅取得後1年以内に申請すること</p></div><p>須賀川市役所建設部都市計画課に申請書と必要書類を提出します。売買契約書・登記事項証明書が必要です。</p><p><span class="marker">住宅取得前の事前相談をおすすめします</span>。要件確認後に申請に進むとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、市外からの転入は<strong>10万円加算</strong>、子育て世帯（中学生以下の子がいる世帯）は<strong>さらに10万円加算で最大50万円</strong>となります。</p><p><span class="marker">住宅の床面積50㎡以上</span>などの要件があります。詳細は窓口でご確認ください。</p><div class="note-box">住宅ローン減税やすまい給付金など国の制度と併用可能です。須賀川市では空き家バンク制度も運営しており、中古住宅情報も提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-infertility',
    title: '須賀川市 不妊治療費助成事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '福島県',
    tags: ['須賀川市', '不妊治療', '助成金'],
    eligibility: '須賀川市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '須賀川市が実施する不妊治療費助成事業です。保険適用後の自己負担分等を最大15万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 不妊治療費助成事業は、<span class="marker">体外受精・顕微授精などの特定不妊治療</span>にかかる自己負担の一部を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、先進医療や保険適用外の治療はなお高額です。須賀川市では子どもを望む夫婦を経済面から支え、安心して治療に専念できる環境を整えています。</p><p>助成額は<strong>1回の治療につき最大15万円</strong>です。<span class="marker-green">福島県の助成制度に上乗せする形で支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>申請日時点で須賀川市に住民登録がある法律上の婚姻関係にある夫婦（事実婚含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票・戸籍謄本</p></div><p>須賀川市役所健康福祉部健康づくり課に申請します。<span class="marker">治療終了日の翌日から3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分について、<strong>1回の治療あたり最大15万円</strong>を助成します。年間の助成回数は最大2回です。</p><p><span class="marker">福島県の助成制度と併用可能</span>ですが、重複する部分は調整されます。</p><div class="note-box">須賀川市では不妊・不育症に関する相談窓口も設けており、専門の保健師が対応しています。男性不妊治療も助成の対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-scholarship',
    title: '須賀川市 奨学資金貸付制度',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大月額4万円',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '福島県',
    tags: ['須賀川市', '奨学金', '教育支援'],
    eligibility: '須賀川市に住所を有する世帯の高校生・大学生',
    applicationPeriod: '毎年4月〜5月',
    description: '須賀川市が実施する奨学資金貸付制度です。経済的理由で修学困難な学生に月額最大4万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 奨学資金貸付制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生</span>に対し奨学金を無利子で貸与する制度です。</p><p>須賀川市は教育環境の充実に力を入れており、市内にはICT教育を推進する小中学校が多数あります。将来を担う若者への投資として、経済的な理由で進学を諦めることのないよう支援しています。</p><p>貸与額は<strong>高校生月額1万5千円、大学生月額4万円</strong>です。<span class="marker-green">無利子で返済期間も長めに設定</span>されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が須賀川市に住所を有すること</p><p>高等学校・大学等に在学中または進学予定であること</p><p>学業成績が一定基準以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて募集が行われます。須賀川市教育委員会学校教育課に申請書と必要書類を提出してください。</p><p><span class="marker">募集人数に限りがあり、選考が行われます</span>。成績・家計状況を総合的に審査して決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>高校生は<strong>月額1万5千円</strong>、大学生は<strong>月額4万円</strong>が貸与されます。返済は卒業後1年の据置期間を経て開始され、<strong>返済期間は貸与期間の3倍以内</strong>です。</p><p><span class="marker">他の奨学金制度との併用は原則不可</span>です。日本学生支援機構の奨学金とは調整が必要な場合があります。</p><div class="note-box">須賀川市には給付型の奨学金制度は現在ありませんが、国の高等教育の修学支援新制度と併せて活用することで、経済的負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-uij-turn',
    title: '須賀川市 UIJターン就職支援金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '福島県',
    tags: ['須賀川市', 'UIJターン', '支援金'],
    eligibility: '東京圏等から須賀川市に移住し就業した方',
    applicationPeriod: '通年',
    description: '須賀川市が実施するUIJターン就職支援金です。東京圏等から須賀川市に移住して就業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 UIJターン就職支援金は、<span class="marker">東京23区に在住または通勤していた方が須賀川市に移住・就業</span>した場合に支給される支援金です。</p><p>須賀川市は東北新幹線の新白河駅や郡山駅に近く、首都圏からのアクセスが良好です。人口減少対策として、移住促進と地元企業の人材確保を同時に推進するため、国・県の制度に上乗せした独自支援を行っています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>です。<span class="marker-green">テレワークでの移住も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上東京23区に在住または通勤していたこと</p><p>須賀川市に転入後3か月以上1年以内に申請すること</p><p>福島県のマッチングサイト掲載企業に就業またはテレワーク移住であること</p><p>5年以上継続して居住する意思があること</p></div><p>須賀川市役所企画財政部企画政策課に申請書と必要書類を提出します。</p><p><span class="marker">転入届の提出後に申請可能</span>です。事前の相談を推奨しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>単身での移住は<strong>60万円</strong>、世帯での移住は<strong>100万円</strong>が支給されます。18歳未満の子どもがいる場合は<strong>1人あたり30万円の加算</strong>があります。</p><p><span class="marker">5年以内に転出した場合は返還を求められる</span>場合がありますのでご注意ください。</p><div class="highlight-box">福島県は東京圏からの移住支援に積極的に取り組んでおり、須賀川市独自の加算を含めると手厚い支援が受けられます。地元の就職情報は「ふくしまぐらし。」サイトも参考にしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-nursing-equipment',
    title: '須賀川市 介護用品支給事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '年額6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '福島県',
    tags: ['須賀川市', '介護用品', '支給'],
    eligibility: '須賀川市に住所を有し、在宅で要介護3以上の方を介護する家族',
    applicationPeriod: '通年',
    description: '須賀川市が実施する介護用品支給事業です。在宅介護を行う家族に年額6万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護する家族</span>に対し、介護用品を支給する制度です。</p><p>須賀川市は高齢化が進む地域のひとつであり、在宅介護を支える家族の負担軽減が課題となっています。紙おむつなどの日常的に必要な介護用品の費用を軽減することで、在宅介護の継続を支援しています。</p><p>支給額は<strong>年額6万円相当</strong>の介護用品で、<span class="marker-green">紙おむつ・尿取りパッド・使い捨て手袋等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>須賀川市に住民登録があり、要介護3以上の認定を受けた方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書の写し</p><p>介護者の本人確認書類</p></div><p>須賀川市役所長寿福祉課の窓口で申請します。<span class="marker">毎年度の申請が必要</span>です。年度途中の申請は月割りで支給されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>年額6万円相当</strong>の介護用品が支給されます。指定事業者のカタログから商品を選択する方式です。</p><p><span class="marker">入院中や施設入所中は対象外</span>となります。在宅介護の方に限定されます。</p><div class="note-box">介護保険の福祉用具貸与・購入費支給制度と併用可能です。須賀川市では在宅介護者向けの相談窓口や介護者サロンも開催しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-energy-support',
    title: '須賀川市 省エネ家電買替え補助金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '福島県',
    tags: ['須賀川市', '省エネ家電', '補助金'],
    eligibility: '須賀川市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '須賀川市が実施する省エネ家電買替え補助金です。省エネ性能の高い家電への買替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 省エネ家電買替え補助金は、<span class="marker">省エネ性能の高いエアコン・冷蔵庫・LED照明等への買替え</span>を促進する制度です。</p><p>須賀川市は夏の暑さが厳しい内陸部に位置し、冬の暖房需要も大きい地域です。光熱費の負担軽減と温室効果ガス削減を両立するため、省エネ家電への買替えを支援しています。</p><p>補助額は<strong>購入金額の10%、最大3万円</strong>です。<span class="marker-green">市内の販売店で購入した場合に限り対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電"><p>統一省エネラベル3つ星以上のエアコン</p><p>統一省エネラベル3つ星以上の冷蔵庫</p><p>LED照明器具（居室用）</p></div><p>須賀川市に住民登録がある世帯が対象です。市内の家電販売店で対象家電を購入し、領収書と製品の保証書を添えて申請します。</p><p><span class="marker">購入後30日以内に申請</span>が必要です。須賀川市役所生活環境課の窓口で受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入金額（税込）の10%相当額が補助され、<strong>上限は3万円</strong>です。1世帯あたり年間1台までが対象です。</p><p><span class="marker">ネット通販での購入は対象外</span>です。市内経済の活性化も兼ねた制度のため、市内販売店での購入が条件です。</p><div class="note-box">国の省エネ家電購入支援事業や電力会社の節電キャンペーンと併用できる場合があります。古い家電からの買替えで年間数千円〜数万円の電気代削減が見込めます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-seismic-diagnosis',
    title: '須賀川市 木造住宅耐震診断助成事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '自己負担なし（全額助成）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '福島県',
    tags: ['須賀川市', '耐震診断', '助成'],
    eligibility: '須賀川市内に昭和56年以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜11月',
    description: '須賀川市が実施する木造住宅耐震診断助成事業です。昭和56年以前に建築された木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 木造住宅耐震診断助成事業は、<span class="marker">昭和56年5月31日以前に建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>須賀川市は2011年の東日本大震災で大きな被害を受けた地域であり、住宅の耐震化は喫緊の課題です。旧耐震基準で建てられた住宅の安全性を確認し、必要に応じて耐震改修につなげることを目的としています。</p><p><span class="marker-green">市が費用を全額負担するため、自己負担はありません</span>。市が派遣する専門の診断士が現地調査を行います。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>2階建て以下の一戸建て住宅</p><p>在来軸組工法または伝統工法で建てられた住宅</p><p>過去にこの制度による耐震診断を受けていないこと</p></div><p>須賀川市役所建設部建築住宅課に申請書を提出します。申請受付は毎年5月から11月です。</p><p><span class="marker">募集戸数に限りがあるため、先着順</span>での受付となります。早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用は<strong>市が全額負担</strong>するため、申請者の自己負担はありません。診断結果は書面で報告されます。</p><p><span class="marker">耐震改修が必要と判定された場合は、別途耐震改修補助制度</span>を利用できます（最大100万円）。</p><div class="highlight-box">東日本大震災の経験から、須賀川市は住宅の耐震化を重点施策として推進しています。耐震診断を受けた住宅は、耐震改修補助の申請がスムーズに進みます。まずは診断を受けて現状を把握しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 土浦市（茨城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tsuchiura-childcare-subsidy',
    title: '土浦市 保育料軽減補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['土浦市', '保育料軽減', '補助金'],
    eligibility: '土浦市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '土浦市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>土浦市は茨城県南部に位置し、霞ヶ浦の西岸に広がる都市です。日本三大花火のひとつ「土浦全国花火競技大会」で知られ、つくばエクスプレスの開通により首都圏からのアクセスも改善しました。共働き世帯の増加に対応し、保育環境の充実を図っています。</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の所得に応じて補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>土浦市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>世帯の課税証明書</p><p>保護者の本人確認書類</p></div><p>土浦市役所こども福祉課の窓口または郵送で申請できます。<span class="marker">四半期ごとの申請が必要</span>で、利用月の翌月以降に領収書を添えて提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は世帯の市民税所得割額に応じて段階的に設定され、<strong>月額最大3万円</strong>が支給されます。</p><p><span class="marker">認可保育所の空きが出た場合は優先的に入所案内</span>がされます。認可外利用は原則として認可保育所に入所できない間の措置としての支援です。</p><div class="note-box">幼児教育・保育の無償化との調整があります。3歳以上で無償化の対象となっている場合は、無償化の給付額との差額が補助対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-birth-bonus',
    title: '土浦市 出産祝い金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['土浦市', '出産祝い金', '給付金'],
    eligibility: '土浦市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '土浦市が実施する出産祝い金です。市内在住の方の出産に際して最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>土浦市は霞ヶ浦湖畔に広がる自然豊かなまちで、筑波研究学園都市にも近接しています。少子化対策として、出産時の経済的負担を軽減し、子育てしやすい環境の整備を進めています。</p><p>支給額は<strong>第1子5万円、第2子7万円、第3子以降10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で土浦市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>土浦市役所こども福祉課の窓口で申請します。出生届の提出時にあわせて手続きすると便利です。</p><p><span class="marker">母子健康手帳と振込先口座情報を持参</span>してください。郵送申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順位に応じて異なります。<strong>第1子5万円、第2子7万円、第3子以降10万円</strong>です。多胎児の場合はそれぞれの子について支給されます。</p><p><span class="marker">申請期限は出産後6か月以内</span>です。期限を過ぎると申請できませんのでご注意ください。</p><div class="highlight-box">国の出産育児一時金（50万円）や茨城県の出産・子育て応援給付金と併せて受給できます。土浦市では産後ケア事業や新生児訪問事業も実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-newlywed-rent',
    title: '土浦市 結婚新生活支援補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['土浦市', '結婚新生活', '補助金'],
    eligibility: '土浦市で新生活を始める新婚世帯（夫婦ともに39歳以下）',
    applicationPeriod: '毎年4月〜翌年3月',
    description: '土浦市が実施する結婚新生活支援補助金です。新婚世帯の家賃や引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 結婚新生活支援補助金は、<span class="marker">新たに婚姻届を提出した世帯</span>の新生活にかかる費用を支援する制度です。</p><p>土浦市は都心への通勤圏に位置しながら、家賃や住宅価格が比較的手頃な地域です。若い世帯の定住を促進するため、結婚に伴う新生活のスタートアップ費用を補助しています。</p><p>補助額は<strong>夫婦ともに29歳以下の場合最大60万円、30〜39歳の場合最大30万円</strong>です。<span class="marker-green">家賃・引越し費用・住宅取得費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>申請日時点で夫婦ともに39歳以下であること</p><p>世帯の合計所得が500万円未満であること</p><p>土浦市に婚姻後の住所を有すること</p><p>婚姻届の提出日が当該年度中であること</p></div><p>土浦市役所市民生活課に申請書と必要書類を提出します。</p><p><span class="marker">婚姻届提出後に速やかに申請</span>してください。家賃の契約書や引越し費用の領収書が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃（月額家賃−住宅手当等）、引越し費用、住宅購入費用の合計が補助対象で、<strong>29歳以下は最大60万円、30〜39歳は最大30万円</strong>が上限です。</p><p><span class="marker">勤務先から住宅手当を受給している場合はその分を差し引きます</span>。</p><div class="note-box">この制度は国の「結婚新生活支援事業」を活用した補助金です。土浦市に定住して新生活を始める方を応援しています。他の住宅補助との併用については窓口でご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-disability-medical',
    title: '土浦市 重度障がい者医療費助成制度',
    organization: '土浦市',
    type: 'local',
    maxAmount: '医療費自己負担なし',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['土浦市', '障がい者医療', '助成'],
    eligibility: '土浦市に住所を有する重度障がい者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '土浦市が実施する重度障がい者医療費助成制度です。医療費の自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 重度障がい者医療費助成制度は、<span class="marker">重度の障がいをお持ちの方</span>の医療費自己負担を助成する制度です。</p><p>土浦市は障がい者福祉の充実に力を入れており、障がいの有無にかかわらず安心して暮らせるまちづくりを推進しています。医療費の経済的負担を軽減し、必要な医療を受けやすくすることを目的としています。</p><p><span class="marker-green">保険診療にかかる自己負担分が全額助成</span>されます。通院・入院ともに対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>身体障害者手帳1級・2級の方</p><p>療育手帳A（重度）の方</p><p>精神障害者保健福祉手帳1級の方</p><p>65歳以上で後期高齢者医療の障害認定を受けた方</p></div><p>土浦市役所障害福祉課に受給者証の交付を申請します。障害者手帳・健康保険証を持参してください。</p><p><span class="marker">受給者証を医療機関の窓口で提示</span>することで、自己負担なしで医療を受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療にかかる<strong>自己負担分が全額助成</strong>されます。入院時の食事代や差額ベッド代は対象外です。</p><p><span class="marker">所得制限があります</span>。本人の所得が一定額を超える場合は対象外となることがあります。</p><div class="note-box">県外の医療機関を受診した場合は、いったん自己負担分を支払った後、市役所に申請して払い戻しを受ける償還払い方式となります。受給者証は毎年更新が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-school-lunch',
    title: '土浦市 学校給食費補助制度',
    organization: '土浦市',
    type: 'local',
    maxAmount: '給食費の半額補助',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '茨城県',
    tags: ['土浦市', '給食費', '補助'],
    eligibility: '土浦市立小中学校に通う児童・生徒の保護者',
    applicationPeriod: '毎年4月（自動適用）',
    description: '土浦市が実施する学校給食費補助制度です。市立小中学校の給食費を半額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 学校給食費補助制度は、<span class="marker">市立小中学校に通う児童・生徒の給食費</span>を補助する制度です。</p><p>土浦市は子育て支援の充実を重点施策に掲げており、教育費の負担軽減に積極的に取り組んでいます。物価高騰の中、家計への負担を軽減し、すべての子どもが安心して栄養バランスの良い給食を食べられる環境を維持しています。</p><p><strong>給食費の半額を市が負担</strong>します。<span class="marker-green">所得制限はなく全世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>土浦市立小学校・中学校に通う児童・生徒の保護者が対象です。</p><div class="summary-box" data-title="補助の仕組み"><p>特別な申請手続きは不要です</p><p>給食費の請求時に半額が差し引かれた額で請求されます</p><p>就学援助制度の対象者は引き続き全額免除です</p></div><p>在校生は自動的に適用されます。<span class="marker">転入等で年度途中から通学する場合も、通学開始月から適用</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は月額約4,500円のうち<strong>約2,250円が補助</strong>され、中学校は月額約5,200円のうち<strong>約2,600円が補助</strong>されます。</p><p><span class="marker">就学援助制度の対象世帯は従来通り全額免除</span>です。本制度との重複はありません。</p><div class="highlight-box">土浦市では地元産食材の積極活用や食育にも力を入れています。補助制度により、栄養バランスの良い給食を安心して利用できます。アレルギー対応給食にも対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-sme-support',
    title: '土浦市 中小企業設備投資補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '茨城県',
    tags: ['土浦市', '中小企業', '設備投資'],
    eligibility: '土浦市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月',
    description: '土浦市が実施する中小企業設備投資補助金です。生産性向上のための設備投資に最大200万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 中小企業設備投資補助金は、<span class="marker">市内中小企業の生産性向上に資する設備投資</span>を支援する制度です。</p><p>土浦市は製造業や商業が盛んな地域で、中小企業が地域経済の中核を担っています。企業の競争力強化と地域経済の活性化を目的に、設備投資にかかる費用の一部を補助しています。</p><p>補助率は<strong>対象経費の1/3以内、最大200万円</strong>です。<span class="marker-green">製造設備、IT機器、省エネ設備等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>土浦市内に主たる事業所を有する中小企業者</p><p>設備投資額が50万円以上であること</p><p>市税を滞納していないこと</p><p>先端設備等導入計画の認定を受けていること</p></div><p>土浦市役所商工観光課に事前相談の上、申請書を提出します。</p><p><span class="marker">設備導入前に申請が必要</span>です。事後申請は受け付けていませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の1/3以内で<strong>最大200万円</strong>が補助されます。IT導入や省エネ設備の場合は補助率が引き上げられることがあります。</p><p><span class="marker">補助金の交付は設備導入・支払い完了後</span>となります。事業完了報告書の提出が必要です。</p><div class="note-box">国の「ものづくり補助金」や県の「いばらき中小企業グローバル推進事業」等と組み合わせることで、より手厚い支援を受けられる場合があります。まずは商工観光課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-nursing-home-reform',
    title: '土浦市 介護住宅改修助成事業',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['土浦市', '介護住宅改修', '助成'],
    eligibility: '土浦市に住所を有する要介護・要支援認定を受けた方の住宅',
    applicationPeriod: '通年',
    description: '土浦市が実施する介護住宅改修助成事業です。在宅介護に必要な住宅改修に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 介護住宅改修助成事業は、<span class="marker">要介護・要支援認定を受けた方の在宅生活</span>を支えるため、住宅のバリアフリー改修費用を助成する制度です。</p><p>土浦市は高齢化率の上昇に伴い、在宅介護の環境整備を重要課題として位置付けています。住み慣れた自宅で安全に暮らし続けられるよう、介護保険制度と連携した独自の上乗せ助成を行っています。</p><p>助成額は<strong>最大20万円</strong>で、<span class="marker-green">介護保険の住宅改修費支給とは別枠</span>での助成です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>土浦市に住民登録があり、要介護または要支援の認定を受けた方が居住する住宅の改修が対象です。</p><div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取替え</p><p>洋式トイレへの便器の取替え</p></div><p>土浦市役所高齢福祉課に事前に相談し、<span class="marker">工事着手前に申請</span>する必要があります。ケアマネジャーとの相談もおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費用の9割（一定以上所得者は7〜8割）が助成され、<strong>上限は20万円</strong>です。介護保険の住宅改修費支給（上限20万円）と合わせて利用できます。</p><p><span class="marker">介護保険の住宅改修費支給を先に申請</span>し、その上乗せとして本制度を利用するのが一般的です。</p><div class="note-box">改修工事の業者は市内の登録事業者から選択することをおすすめします。土浦市では福祉用具の貸与・購入支援も別途実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-elderly-support',
    title: '土浦市 高齢者見守り支援事業',
    organization: '土浦市',
    type: 'local',
    maxAmount: '無料（市費負担）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '茨城県',
    tags: ['土浦市', '高齢者見守り', '支援'],
    eligibility: '土浦市に住所を有する65歳以上の一人暮らし高齢者等',
    applicationPeriod: '通年',
    description: '土浦市が実施する高齢者見守り支援事業です。一人暮らし高齢者等に緊急通報装置の貸与や定期的な安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 高齢者見守り支援事業は、<span class="marker">一人暮らしの高齢者や高齢者のみ世帯</span>の安全・安心を確保するための事業です。</p><p>土浦市は高齢化の進行に伴い、孤独死や緊急時の対応遅れを防止するため、見守りネットワークの構築に取り組んでいます。緊急通報装置の貸与や配食サービスを通じた安否確認を行っています。</p><p><span class="marker-green">利用料は無料（市費負担）</span>です。緊急時にはボタンひとつで消防署に通報できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>65歳以上の一人暮らし高齢者</p><p>高齢者のみの世帯</p><p>日中独居となる高齢者</p><p>慢性疾患等により日常生活に不安のある方</p></div><p>土浦市役所高齢福祉課または地域包括支援センターに相談・申請します。</p><p><span class="marker">民生委員や近隣の協力者の登録</span>が必要です。緊急時の連絡先として2名以上の登録をお願いしています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置の設置費用・月額利用料は<strong>市が全額負担</strong>します。固定電話回線が必要ですが、回線がない場合は携帯電話型の装置も利用可能です。</p><p><span class="marker">装置の使用にあたっては定期的な動作確認</span>を行います。月1回程度の安否確認コールも実施されます。</p><div class="highlight-box">土浦市では見守り支援のほか、配食サービス（安否確認付き）、ふれあいサロン、シルバー人材センターなど、高齢者の社会参加や生活支援の事業を幅広く展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-bousai-equipment',
    title: '土浦市 住宅用防災設備設置補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '茨城県',
    tags: ['土浦市', '防災設備', '補助金'],
    eligibility: '土浦市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月',
    description: '土浦市が実施する住宅用防災設備設置補助金です。住宅の感震ブレーカーや雨水貯留タンクの設置に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 住宅用防災設備設置補助金は、<span class="marker">地震や水害に備えた住宅の防災設備設置</span>を支援する制度です。</p><p>土浦市は霞ヶ浦に面しており、豪雨時の浸水リスクや地震への備えが重要です。家庭レベルでの防災力を高めるため、感震ブレーカーや雨水貯留タンクなどの設置費用を補助しています。</p><p>補助額は<strong>対象設備費用の1/2以内、最大5万円</strong>です。<span class="marker-green">感震ブレーカー、雨水貯留タンク、防災用井戸ポンプ等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー（分電盤タイプ）</p><p>雨水貯留タンク（100リットル以上）</p><p>家庭用蓄電池（防災用）</p></div><p>土浦市に住民登録がある世帯の世帯主が対象です。土浦市役所防災危機管理課に設置前に申請します。</p><p><span class="marker">設置工事の着手前に申請が必要</span>です。事後申請は受け付けていませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象設備の設置費用（購入費+工事費）の1/2以内で、<strong>上限は5万円</strong>です。1世帯あたり設備の種類ごとに1回限りです。</p><p><span class="marker">設置業者は原則として市内の事業者を利用</span>してください。設置完了後に実績報告書を提出する必要があります。</p><div class="note-box">土浦市ではハザードマップの配布や自主防災組織の支援なども行っています。地域の防災訓練に参加し、日頃から備えを確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 古河市（茨城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'koga-childcare-subsidy',
    title: '古河市 保育料軽減助成金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大月額2万5千円',
    maxAmountNum: 2.5,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['古河市', '保育料軽減', '助成金'],
    eligibility: '古河市に住所を有し、認可外保育施設等を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '古河市が実施する保育料軽減助成金です。認可外保育施設の利用料を月額最大2万5千円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 保育料軽減助成金は、<span class="marker">認可外保育施設等を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>古河市は茨城県西部に位置し、利根川と渡良瀬川の合流点にある歴史ある都市です。JR東北本線（宇都宮線）で東京方面へのアクセスも良く、ベッドタウンとしても発展しています。共働き世帯の増加に対応し、多様な保育ニーズを支援しています。</p><p>助成額は<strong>月額最大2万5千円</strong>で、<span class="marker-green">世帯の課税状況に応じて決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>古河市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用証明書</p><p>保育料の領収書</p><p>課税証明書</p><p>申請者の本人確認書類</p></div><p>古河市役所子ども福祉課に申請します。<span class="marker">年度ごとの申請が必要</span>で、利用実績に基づき助成額が決まります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>世帯の市民税所得割額に応じて助成額が決まり、<strong>月額最大2万5千円</strong>が支給されます。</p><p><span class="marker">保育の必要性の認定を受けていること</span>が前提条件です。育児休業中は対象外となる場合があります。</p><div class="note-box">古河市では認可保育所の整備を進めており、待機児童の解消にも取り組んでいます。認可外施設を利用中に認可保育所の空きが出た場合は、転園の案内があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-daycare-support',
    title: '古河市 一時預かり利用助成事業',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大月額1万円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['古河市', '一時預かり', '助成'],
    eligibility: '古河市に住所を有する未就学児の保護者',
    applicationPeriod: '通年',
    description: '古河市が実施する一時預かり利用助成事業です。保護者のリフレッシュ目的での一時預かり利用に月額最大1万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 一時預かり利用助成事業は、<span class="marker">保護者のリフレッシュや通院等のため</span>に一時預かりを利用する際の費用を助成する制度です。</p><p>古河市は子育て世帯への支援を充実させており、育児の負担軽減を通じた子育てしやすい環境づくりを推進しています。保育所に入所していない家庭でも一時的に子どもを預けられる環境を整えています。</p><p>助成額は<strong>月額最大1万円</strong>で、<span class="marker-green">理由を問わず利用できる</span>のが特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>古河市に住民登録があること</p><p>未就学児を養育していること</p><p>市の一時預かり事業実施施設を利用すること</p></div><p>古河市役所子ども福祉課に登録申請を行い、利用後に実績に基づき助成金が支給されます。</p><p><span class="marker">事前の利用登録が必要</span>です。登録後は予約制で施設を利用できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>一時預かり利用料のうち、<strong>月額最大1万円</strong>が助成されます。利用時間に応じて1日あたりの上限もあります。</p><p><span class="marker">利用日数は月4日程度まで</span>が目安です。緊急時には追加利用も相談可能です。</p><div class="highlight-box">古河市にはファミリーサポートセンター事業もあり、地域の子育て支援者に子どもを預けることもできます。一時預かりとあわせて活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-vacant-house',
    title: '古河市 空き家活用リフォーム補助金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['古河市', '空き家活用', '補助金'],
    eligibility: '古河市の空き家バンク登録物件を取得・賃借しリフォームする方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '古河市が実施する空き家活用リフォーム補助金です。空き家バンク物件のリフォームに最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 空き家活用リフォーム補助金は、<span class="marker">空き家バンクに登録された物件を取得・賃借してリフォーム</span>する方に対し、改修費用の一部を補助する制度です。</p><p>古河市は人口減少に伴い空き家の増加が課題となっています。空き家の有効活用と定住促進を図るため、リフォーム費用を支援し、良好な住環境の確保と地域の活性化を目指しています。</p><p>補助額は<strong>工事費用の1/2以内、最大50万円</strong>です。<span class="marker-green">子育て世帯や市外からの転入世帯には加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>古河市空き家バンクに登録された物件であること</p><p>リフォーム後に居住する意思があること</p><p>市税を滞納していないこと</p><p>リフォーム工事費が30万円以上であること</p></div><p>古河市役所都市計画課に事前相談の上、工事着手前に申請書を提出します。</p><p><span class="marker">工事着手前の申請が必須</span>です。空き家バンクへの登録は所有者が行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>リフォーム工事費用の1/2以内で<strong>基本補助額は最大30万円</strong>です。子育て世帯は<strong>10万円加算</strong>、市外からの転入は<strong>10万円加算</strong>で、<strong>最大50万円</strong>となります。</p><p><span class="marker">工事は市内の業者に発注</span>する必要があります。工事完了後に実績報告書の提出が必要です。</p><div class="note-box">古河市空き家バンクにはウェブサイトから登録・検索できます。空き家の売買・賃貸のマッチングも行っており、移住希望者への相談対応もしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-senior-dental',
    title: '古河市 高齢者歯科健診事業',
    organization: '古河市',
    type: 'local',
    maxAmount: '無料（市費負担）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['古河市', '歯科健診', '高齢者'],
    eligibility: '古河市に住所を有する70歳以上の方',
    applicationPeriod: '毎年6月〜12月',
    description: '古河市が実施する高齢者歯科健診事業です。70歳以上の方を対象に無料で歯科健診を実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 高齢者歯科健診事業は、<span class="marker">70歳以上の高齢者</span>を対象に口腔機能の維持・向上を目的とした歯科健診を無料で実施する制度です。</p><p>口腔の健康は全身の健康と密接に関連しており、特に高齢者にとって誤嚥性肺炎の予防や栄養状態の維持に重要です。古河市では8020運動（80歳で20本の歯を保つ）を推進し、生涯にわたる歯と口の健康づくりを支援しています。</p><p><span class="marker-green">受診費用は全額市が負担</span>します。市内の協力歯科医療機関で受診できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>古河市に住民登録がある70歳以上の方が対象です。</p><div class="summary-box" data-title="健診内容"><p>歯と歯肉の検査</p><p>口腔機能評価（噛む力・飲み込む力）</p><p>歯科保健指導</p><p>入れ歯の状態確認</p></div><p>対象者には受診券が郵送されます。受診券と健康保険証を持参して市内の協力歯科医療機関を受診してください。<span class="marker">予約制の医療機関が多い</span>ため、事前にお電話ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>歯科健診の費用は<strong>全額市が負担</strong>するため、自己負担はありません。治療が必要な場合の治療費は自己負担となります。</p><p><span class="marker">受診期間は毎年6月から12月まで</span>です。期間外の受診はできませんのでご注意ください。</p><div class="note-box">古河市では成人歯科健診（40歳以上）や妊婦歯科健診も実施しています。定期的な歯科健診で口腔の健康を保ちましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-afterschool',
    title: '古河市 放課後子ども教室',
    organization: '古河市',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '茨城県',
    tags: ['古河市', '放課後教室', '教育支援'],
    eligibility: '古河市立小学校に通う児童',
    applicationPeriod: '毎年3月〜4月（年度登録）',
    description: '古河市が実施する放課後子ども教室です。小学校の放課後に地域の大人の見守りのもと、学習・体験活動の場を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 放課後子ども教室は、<span class="marker">小学校の放課後に安全・安心な居場所</span>を提供し、学習やさまざまな体験活動を行う事業です。</p><p>古河市は子どもの健全育成と地域コミュニティの活性化を目指し、地域のボランティアや退職教員等の協力を得て放課後子ども教室を運営しています。学童保育とは異なり、すべての児童が対象で、費用負担もありません。</p><p><span class="marker-green">参加費は無料</span>です。学習支援、スポーツ、文化活動など多彩なプログラムが用意されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="概要"><p>対象：古河市立小学校の全児童</p><p>実施日：週2〜3日（学校により異なる）</p><p>時間：放課後〜17時頃</p><p>場所：各小学校の空き教室・体育館等</p></div><p>年度初めに登録申込を行います。古河市教育委員会生涯学習課で申込書を受け付けています。</p><p><span class="marker">保険料（年間800円程度）のみ実費負担</span>です。活動参加費は無料です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>放課後子ども教室の利用は<strong>基本無料</strong>です。スポーツ安全保険料（年間800円程度）のみ実費負担があります。</p><p><span class="marker">学童保育クラブとは別の事業</span>です。学童保育は就労等で保護者が不在の家庭が対象ですが、放課後子ども教室はすべての児童が対象です。</p><div class="highlight-box">古河市では放課後子ども教室と学童保育クラブの一体的運営を進めており、両方を利用することも可能です。子どもの居場所づくりと多様な体験の場として活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-women-startup',
    title: '古河市 女性起業支援補助金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '茨城県',
    tags: ['古河市', '女性起業', '補助金'],
    eligibility: '古河市内で新たに起業する女性',
    applicationPeriod: '毎年4月〜9月',
    description: '古河市が実施する女性起業支援補助金です。市内で新たに起業する女性に対し開業資金を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 女性起業支援補助金は、<span class="marker">市内で新たに起業する女性</span>に対して開業に必要な経費の一部を補助する制度です。</p><p>古河市は女性の社会参画と地域経済の活性化を目指し、女性起業家の育成に力を入れています。カフェや美容サロン、ネットショップなど、地域のニーズに応えるさまざまな業種での起業を支援しています。</p><p>補助額は<strong>対象経費の2/3以内、最大50万円</strong>です。<span class="marker-green">店舗改装費、設備費、広告宣伝費等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>古河市内に事業所を設ける女性であること</p><p>事業開始から1年以内であること</p><p>商工会議所の起業セミナーを受講していること</p><p>市税を滞納していないこと</p></div><p>古河市役所商工観光課に事業計画書と申請書を提出します。審査会による選考があります。</p><p><span class="marker">申請前に古河商工会議所での事前相談を推奨</span>しています。事業計画の策定支援も受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の2/3以内で<strong>最大50万円</strong>が補助されます。店舗改装費、什器備品費、広告宣伝費、研修費等が対象です。</p><p><span class="marker">補助金の交付後2年間は事業の継続が求められます</span>。廃業した場合は返還の可能性があります。</p><div class="note-box">古河市では起業セミナーの開催や先輩起業家との交流会も実施しています。国の創業補助金や日本政策金融公庫の融資制度との併用も可能ですので、商工会議所に相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-nursing-equipment',
    title: '古河市 介護用品給付事業',
    organization: '古河市',
    type: 'local',
    maxAmount: '年額7万5千円相当',
    maxAmountNum: 7.5,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['古河市', '介護用品', '給付'],
    eligibility: '古河市に住所を有し、在宅で要介護4・5の方を介護する家族',
    applicationPeriod: '通年',
    description: '古河市が実施する介護用品給付事業です。在宅で重度要介護者を介護する家族に年額7万5千円相当の介護用品を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 介護用品給付事業は、<span class="marker">在宅で要介護4・5の方を介護する家族</span>に対し、紙おむつ等の介護用品を給付する制度です。</p><p>古河市は在宅介護を支える家族の負担軽減に取り組んでおり、日常的に必要な介護用品の費用を支援しています。介護離職の防止と在宅介護の継続を支援する施策のひとつです。</p><p>給付額は<strong>年額7万5千円相当</strong>の介護用品で、<span class="marker-green">紙おむつ・尿取りパッド・防水シーツ等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>古河市に住民登録があり、要介護4または5の認定を受けた方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品給付申請書</p><p>要介護認定結果通知書の写し</p><p>介護者の身分証明書</p></div><p>古河市役所高齢福祉課の窓口で申請します。<span class="marker">年度ごとの申請が必要</span>です。年度途中の申請は月割りで給付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>年額7万5千円相当</strong>の介護用品が給付されます。指定事業者から配達される方式です。</p><p><span class="marker">入院中や介護保険施設に入所中は対象外</span>です。在宅介護の方に限定されています。</p><div class="note-box">介護保険の福祉用具貸与や特定福祉用具購入費支給制度と併用可能です。古河市では介護者向けの相談支援や介護者交流サロンも開催しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-migration-bonus',
    title: '古河市 移住支援金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '茨城県',
    tags: ['古河市', '移住支援', '支援金'],
    eligibility: '東京圏から古河市に移住し就業・起業した方',
    applicationPeriod: '通年',
    description: '古河市が実施する移住支援金です。東京圏から古河市に移住して就業または起業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 移住支援金は、<span class="marker">東京23区に在住または通勤していた方が古河市に移住・就業</span>した場合に支給される支援金です。</p><p>古河市はJR東北本線で東京方面へのアクセスが良好で、首都圏の通勤圏にあります。リモートワークの普及により、都心に近いながらも生活費が抑えられる古河市への移住を促進するため、充実した移住支援を行っています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>です。<span class="marker-green">テレワーク移住も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上東京23区に在住・通勤していたこと</p><p>古河市に転入後3か月以上1年以内に申請すること</p><p>茨城県のマッチングサイト掲載企業に就業またはテレワーク移住であること</p><p>5年以上継続居住の意思があること</p></div><p>古河市役所企画課に申請書と必要書類を提出します。</p><p><span class="marker">移住前の事前相談を推奨</span>しています。古河市の移住コンシェルジュが対応します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>単身は<strong>60万円</strong>、世帯は<strong>100万円</strong>が支給されます。18歳未満の子ども1人あたり<strong>30万円の加算</strong>があります。</p><p><span class="marker">5年以内に転出した場合は返還を求められる</span>可能性があります。</p><div class="highlight-box">古河市は東京から約60kmに位置し、JR宇都宮線で上野まで約1時間です。自然環境と都市機能のバランスが良く、子育て世帯にも人気のエリアです。移住相談は随時受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-seismic-diagnosis',
    title: '古河市 木造住宅耐震診断補助金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '茨城県',
    tags: ['古河市', '耐震診断', '補助金'],
    eligibility: '古河市内に昭和56年以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月',
    description: '古河市が実施する木造住宅耐震診断補助金です。旧耐震基準の木造住宅の耐震診断費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 木造住宅耐震診断補助金は、<span class="marker">昭和56年5月31日以前に建築された木造住宅</span>の耐震診断にかかる費用を補助する制度です。</p><p>古河市は利根川流域に位置し、地盤の液状化リスクもある地域です。旧耐震基準で建てられた住宅の安全性を確認し、耐震化を促進するため、診断費用を支援しています。</p><p>補助額は<strong>診断費用の2/3以内、最大5万円</strong>です。<span class="marker-green">市が推薦する耐震診断士が診断</span>を行います。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>2階建て以下の一戸建て住宅</p><p>在来軸組工法で建てられた住宅</p><p>過去にこの補助を受けていないこと</p></div><p>古河市役所建築指導課に申請書を提出します。</p><p><span class="marker">申請受付は先着順</span>で、予算に達し次第終了します。早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用の2/3以内で<strong>最大5万円</strong>が補助されます。一般的な木造住宅の耐震診断費用は8万円〜12万円程度です。</p><p><span class="marker">診断結果を踏まえた耐震改修には別途補助制度</span>があります（最大100万円）。</p><div class="note-box">古河市では無料の耐震相談会も定期的に開催しています。まずは相談会に参加して、ご自宅の耐震性について専門家に相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 足利市（栃木県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'ashikaga-childcare-subsidy',
    title: '足利市 保育料軽減補助金',
    organization: '足利市',
    type: 'local',
    maxAmount: '最大月額2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['足利市', '保育料軽減', '補助金'],
    eligibility: '足利市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '足利市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大2万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>足利市は栃木県南西部に位置し、足利学校や鑁阿寺（ばんなじ）など歴史文化資産に恵まれた都市です。また、あしかがフラワーパークの大藤が世界的に有名です。子育て世帯の支援として、認可外保育施設利用者への補助を実施しています。</p><p>補助額は<strong>月額最大2万円</strong>で、<span class="marker-green">世帯の所得状況に応じて決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>足利市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用する児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>課税証明書</p><p>保護者の本人確認書類</p></div><p>足利市役所こども家庭センターに申請します。<span class="marker">年度ごとの申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>世帯の市民税所得割額に応じて補助額が決まり、<strong>月額最大2万円</strong>が支給されます。</p><p><span class="marker">幼児教育・保育の無償化制度との調整</span>があります。無償化の給付額を差し引いた残額が補助対象です。</p><div class="note-box">足利市では保育所の整備・増設を進めており、認可保育所への入所を希望する方は随時申込みが可能です。こども家庭センターで相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-birth-bonus',
    title: '足利市 出産祝い金',
    organization: '足利市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['足利市', '出産祝い金', '給付金'],
    eligibility: '足利市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '足利市が実施する出産祝い金です。第3子以降の出産に対して最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 出産祝い金は、<span class="marker">市内に住所を有する方が第3子以降を出産した際</span>に祝い金を支給する制度です。</p><p>足利市は少子化対策に力を入れており、多子世帯への支援を充実させています。第3子以降の出産にかかる経済的負担を軽減し、安心して子どもを産み育てられるまちを目指しています。</p><p>支給額は<strong>第3子以降1人あたり10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で足利市に住民登録があること</p><p>第3子以降の出産であること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>足利市役所こども家庭センターの窓口で申請します。</p><p><span class="marker">出生届の提出時にあわせて手続き</span>すると便利です。母子健康手帳と口座情報をご持参ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の出産に対し、<strong>1人あたり10万円</strong>が支給されます。多胎児の場合はそれぞれの子に対して支給されます。</p><p><span class="marker">第1子・第2子は対象外</span>です。出生順位は住民票上の同一世帯の子で判定されます。</p><div class="highlight-box">国の出産育児一時金（50万円）や栃木県の出産・子育て応援給付金と併せて受給できます。足利市では子育てアプリ「あしかが子育てナビ」でも各種支援制度の情報を配信しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-housing-eco',
    title: '足利市 省エネ住宅改修補助金',
    organization: '足利市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '栃木県',
    tags: ['足利市', '省エネ住宅', '補助金'],
    eligibility: '足利市内の住宅の省エネ改修を行う所有者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '足利市が実施する省エネ住宅改修補助金です。断熱改修や高効率設備の導入に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 省エネ住宅改修補助金は、<span class="marker">既存住宅の断熱改修や高効率設備の導入</span>を支援する制度です。</p><p>足利市は内陸性気候で夏は暑く冬は寒い地域です。住宅の断熱性能向上は、快適な住環境の実現と光熱費の削減、さらにCO2排出削減に貢献します。足利市ではゼロカーボンシティを目指し、住宅の省エネ化を推進しています。</p><p>補助額は<strong>対象工事費用の1/3以内、最大30万円</strong>です。<span class="marker-green">窓の断熱改修、壁・天井の断熱材施工、高効率給湯器の導入等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（内窓設置・ガラス交換等）</p><p>壁・天井・床の断熱材施工</p><p>高効率給湯器（エコキュート等）の導入</p><p>太陽光発電設備の設置</p></div><p>足利市に住民登録がある住宅所有者が対象です。足利市役所環境政策課に工事着手前に申請します。</p><p><span class="marker">工事着手前の申請が必須</span>です。着手後の申請は受け付けていません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費用の1/3以内で<strong>最大30万円</strong>が補助されます。窓の断熱改修のみでも申請可能です。</p><p><span class="marker">工事は市内の施工業者に依頼</span>する必要があります。工事完了後に実績報告書を提出してください。</p><div class="note-box">国の「先進的窓リノベ事業」や「給湯省エネ事業」と併用可能な場合があります。複数の補助制度を組み合わせることで、実質的な自己負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-mental-health',
    title: '足利市 こころの健康相談事業',
    organization: '足利市',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '栃木県',
    tags: ['足利市', 'こころの健康', '相談'],
    eligibility: '足利市に住所を有する方',
    applicationPeriod: '通年',
    description: '足利市が実施するこころの健康相談事業です。精神科医や臨床心理士による無料のこころの健康相談を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 こころの健康相談事業は、<span class="marker">メンタルヘルスに不安を抱える方</span>を対象に、専門家による無料の相談を提供する事業です。</p><p>足利市は市民のこころの健康づくりを重要な施策として位置付け、うつ病や不安障害、ストレスに関する相談体制を整備しています。早期発見・早期対応により、深刻化を防ぐことを目的としています。</p><p><span class="marker-green">精神科医・臨床心理士による相談が無料</span>で受けられます。秘密は厳守されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="相談できる内容"><p>気分の落ち込み・不安・不眠</p><p>ストレスへの対処方法</p><p>家族の精神的な問題への対応</p><p>医療機関の受診に関する相談</p></div><p>足利市に住民登録がある方であれば誰でも利用できます。足利市保健センターに電話予約の上、来所相談します。</p><p><span class="marker">月1回の精神科医相談日と、随時の保健師相談</span>を実施しています。電話相談にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>相談は<strong>すべて無料</strong>です。相談内容は秘密厳守で、プライバシーが守られます。</p><p><span class="marker">精神科医の相談日は事前予約制</span>です。1回あたり30分〜1時間程度の相談ができます。</p><div class="highlight-box">足利市では「ゲートキーパー養成研修」も実施しており、身近な人のこころの変化に気づき、声をかけ、必要な支援につなぐ人材の育成にも取り組んでいます。一人で悩まず、まずは相談してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-study-abroad',
    title: '足利市 海外留学支援奨学金',
    organization: '足利市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'education',
    prefecture: '栃木県',
    tags: ['足利市', '留学支援', '奨学金'],
    eligibility: '足利市に住所を有する高校生・大学生で海外留学を予定する方',
    applicationPeriod: '毎年5月〜7月',
    description: '足利市が実施する海外留学支援奨学金です。海外の教育機関への留学を予定する学生に最大30万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 海外留学支援奨学金は、<span class="marker">海外の教育機関への留学を予定する高校生・大学生</span>に対し、留学費用の一部を給付する制度です。</p><p>足利市は日本最古の学校「足利学校」の地として知られ、古くから学問を重んじる伝統があります。グローバル人材の育成を目指し、国際的な視野を持つ若者の育成を支援しています。</p><p>給付額は<strong>最大30万円</strong>で、<span class="marker-green">返済不要の給付型奨学金</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が足利市に住所を有すること</p><p>海外の教育機関で3か月以上学ぶ予定であること</p><p>在学校の推薦があること</p><p>出発前に申請すること</p></div><p>足利市教育委員会学校教育課に申請書と必要書類を提出します。選考により決定されます。</p><p><span class="marker">募集人数は年間5名程度</span>です。申請多数の場合は選考会が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>留学期間に応じて<strong>最大30万円</strong>が給付されます。3か月以上6か月未満は15万円、6か月以上は30万円が目安です。</p><p><span class="marker">留学先は正規の教育機関に限ります</span>。語学学校のみの留学は対象外となる場合があります。</p><div class="note-box">足利市は姉妹都市のスプリングフィールド市（アメリカ）との交流も盛んです。留学後は市の国際交流事業への参加など、経験を地域に還元する活動を期待しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-telework-bonus',
    title: '足利市 テレワーク移住促進補助金',
    organization: '足利市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '栃木県',
    tags: ['足利市', 'テレワーク', '移住'],
    eligibility: '足利市に移住しテレワークで勤務する方',
    applicationPeriod: '通年',
    description: '足利市が実施するテレワーク移住促進補助金です。移住してテレワークを行う方にコワーキング利用料等を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 テレワーク移住促進補助金は、<span class="marker">足利市に移住してテレワークで勤務する方</span>のワーキング環境整備を支援する制度です。</p><p>足利市は東武伊勢崎線やJR両毛線で都心方面へアクセスでき、自然豊かな環境でリモートワークに適しています。テレワーク普及を受け、地方移住を検討する方の受け入れ体制を強化しています。</p><p>補助額は<strong>最大20万円</strong>で、<span class="marker-green">コワーキングスペース利用料・通信環境整備費等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>市外から足利市に転入して1年以内であること</p><p>テレワークにより所属企業等の業務を行っていること</p><p>5年以上継続して居住する意思があること</p><p>市税を滞納していないこと</p></div><p>足利市役所企画政策課に申請書と在宅勤務証明書等を提出します。</p><p><span class="marker">転入後に申請が可能</span>です。移住前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>コワーキングスペース利用料、通信環境整備費（Wi-Fiルーター・回線工事等）を合わせて<strong>最大20万円</strong>が補助されます。</p><p><span class="marker">移住支援金との併用が可能</span>です。両制度を活用すると最大120万円の支援を受けられます。</p><div class="note-box">足利市にはコワーキングスペースが市内数か所にあり、テレワーカー向けのコミュニティも形成されつつあります。足利市移住ポータルサイトで詳しい情報を確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-nursing-home-reform',
    title: '足利市 高齢者住宅改造助成事業',
    organization: '足利市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '栃木県',
    tags: ['足利市', '住宅改造', '高齢者'],
    eligibility: '足利市に住所を有する65歳以上の要支援・要介護認定を受けた方',
    applicationPeriod: '通年',
    description: '足利市が実施する高齢者住宅改造助成事業です。バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 高齢者住宅改造助成事業は、<span class="marker">65歳以上の要支援・要介護認定を受けた方</span>が居住する住宅のバリアフリー改修を助成する制度です。</p><p>足利市は高齢者が住み慣れた地域で安心して暮らし続けられるよう、在宅生活の環境整備に取り組んでいます。介護保険の住宅改修費支給制度に上乗せして、さらなる改修費用を支援します。</p><p>助成額は<strong>最大30万円</strong>で、<span class="marker-green">介護保険の住宅改修とは別枠</span>での助成です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>足利市に住民登録がある65歳以上の方で、要支援または要介護の認定を受けた方の住宅改修が対象です。</p><div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消</p><p>浴室・トイレの改修</p><p>廊下の拡幅</p></div><p>足利市役所高齢福祉課に事前相談の上、<span class="marker">工事着手前に申請</span>してください。ケアマネジャーとの連携をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費用の9割（一定以上所得者は7〜8割）で、<strong>上限30万円</strong>が助成されます。</p><p><span class="marker">介護保険の住宅改修費支給（上限20万円）と合わせて利用</span>すると、合計最大50万円の支援を受けられます。</p><div class="note-box">足利市では住宅改修アドバイザーの派遣も行っています。適切な改修内容の提案を受けられますので、工事の前にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-disaster-prevention',
    title: '足利市 自主防災組織活動支援補助金',
    organization: '足利市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '栃木県',
    tags: ['足利市', '自主防災', '補助金'],
    eligibility: '足利市内の自主防災組織',
    applicationPeriod: '毎年4月〜翌年2月',
    description: '足利市が実施する自主防災組織活動支援補助金です。防災訓練や防災資機材の購入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 自主防災組織活動支援補助金は、<span class="marker">地域の自主防災組織の活動</span>を支援する制度です。</p><p>足利市は2021年の大規模山林火災を経験し、地域の防災力強化の重要性を再認識しました。自治会等を基盤とした自主防災組織の結成と活動の活性化を図るため、活動経費を補助しています。</p><p>補助額は<strong>最大10万円</strong>で、<span class="marker-green">防災訓練の実施費用や防災資機材の購入費等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象活動"><p>防災訓練（避難訓練・初期消火訓練等）の実施</p><p>防災資機材（発電機・投光器・担架等）の購入</p><p>防災研修会の開催</p><p>防災マップの作成</p></div><p>足利市に届出のある自主防災組織が対象です。足利市役所危機管理課に活動計画書と申請書を提出します。</p><p><span class="marker">活動実施前に申請が必要</span>です。新規結成の組織には別途結成補助金もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象活動の経費のうち<strong>最大10万円</strong>が補助されます。防災訓練は年1回以上の実施が求められます。</p><p><span class="marker">活動終了後に実績報告書の提出</span>が必要です。領収書等の証拠書類を保管してください。</p><div class="highlight-box">足利市では出前講座として防災の専門家を地域に派遣する事業も実施しています。自主防災組織の結成がまだの地域は、まず市役所危機管理課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ashikaga-elderly-support',
    title: '足利市 高齢者外出支援事業',
    organization: '足利市',
    type: 'local',
    maxAmount: '年額1万2千円分',
    maxAmountNum: 1.2,
    category: 'living',
    prefecture: '栃木県',
    tags: ['足利市', '高齢者外出', '支援'],
    eligibility: '足利市に住所を有する75歳以上の方',
    applicationPeriod: '毎年4月（年度登録）',
    description: '足利市が実施する高齢者外出支援事業です。75歳以上の方にタクシー券や路線バス回数券を年額1万2千円分交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足利市 高齢者外出支援事業は、<span class="marker">75歳以上の高齢者の外出を支援</span>するため、タクシー利用券や路線バス回数券を交付する制度です。</p><p>足利市は公共交通機関が限られる地域もあり、高齢者の移動手段の確保が課題です。通院や買い物などの日常生活に必要な外出を支援し、閉じこもり防止と社会参加を促進しています。</p><p>交付額は<strong>年額1万2千円分</strong>で、<span class="marker-green">タクシー券または路線バス回数券を選択</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>足利市に住民登録がある75歳以上の方</p><p>自ら運転する自家用車を持っていない方</p><p>市民税非課税世帯の方</p></div><p>足利市役所高齢福祉課の窓口で申請します。本人確認書類を持参してください。</p><p><span class="marker">毎年度の登録が必要</span>です。年度途中の申請は月割りで交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>タクシー券または路線バス回数券が<strong>年額1万2千円分</strong>交付されます。どちらか一方を選択します。</p><p><span class="marker">券の他人への譲渡・転売は禁止</span>です。年度内に使い切れなかった分は翌年度に繰り越せません。</p><div class="note-box">足利市ではデマンド交通（予約制乗合バス）の運行も行っています。高齢者外出支援事業と合わせて活用し、外出の機会を増やしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ashikaga.tochigi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 佐野市（栃木県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'sano-childcare-subsidy',
    title: '佐野市 保育料軽減補助金',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大月額2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['佐野市', '保育料軽減', '補助金'],
    eligibility: '佐野市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '佐野市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大2万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>佐野市は栃木県南西部に位置し、佐野ラーメンやアウトレットモールで知られる都市です。東北自動車道のインターチェンジがあり、交通の利便性が高い一方、子育て環境の充実にも力を入れています。</p><p>補助額は<strong>月額最大2万円</strong>で、<span class="marker-green">世帯の課税状況により補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐野市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用する児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>課税証明書</p><p>保護者の本人確認書類</p></div><p>佐野市役所こども課に申請します。<span class="marker">半年ごとの申請が必要</span>で、実績に基づき補助額が確定します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>世帯の市民税所得割額に応じて補助額が決まり、<strong>月額最大2万円</strong>が支給されます。</p><p><span class="marker">保育の必要性の認定を受けていること</span>が条件です。就労証明書等の提出が必要です。</p><div class="note-box">佐野市では認可保育所の定員増や新規開設を進めており、待機児童ゼロを目指しています。認可外施設利用中に空きが出た場合の転園手続きについてもこども課で案内しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-parenting-allowance',
    title: '佐野市 子育て応援給付金',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['佐野市', '子育て応援', '給付金'],
    eligibility: '佐野市に住所を有する0〜2歳の子を養育する保護者',
    applicationPeriod: '通年',
    description: '佐野市が実施する子育て応援給付金です。0〜2歳の子を養育する世帯に年額最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 子育て応援給付金は、<span class="marker">0歳から2歳の子どもを養育する世帯</span>に対し、子育てにかかる費用の一部を給付する制度です。</p><p>佐野市は子育て世帯への経済的支援を充実させており、乳幼児期の養育にかかる負担を軽減することで、安心して子育てできる環境を整えています。おむつ代やミルク代など日常的な費用の補助を想定しています。</p><p>給付額は<strong>年額最大5万円</strong>で、<span class="marker-green">所得制限はなくすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>佐野市に住民登録があること</p><p>0歳〜2歳の子どもを養育していること</p><p>市税を滞納していないこと</p></div><p>佐野市役所こども課の窓口で申請します。出生届出時に案内されます。</p><p><span class="marker">年度ごとの申請が必要</span>です。子どもが3歳の誕生日を迎えるまでの間、毎年度申請できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象の子ども1人につき<strong>年額5万円</strong>が支給されます。年度途中の場合は月割りとなります。</p><p><span class="marker">申請が遅れると支給開始も遅れます</span>ので、出生届出時の早めの申請をおすすめします。</p><div class="highlight-box">国の児童手当や栃木県の各種子育て支援制度と併せて受給できます。佐野市の子育て情報は「さのっこナビ」アプリでも配信しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-housing-purchase',
    title: '佐野市 定住促進住宅取得補助金',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '栃木県',
    tags: ['佐野市', '住宅取得', '定住促進'],
    eligibility: '佐野市内に住宅を取得し定住する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '佐野市が実施する定住促進住宅取得補助金です。市内に住宅を取得する子育て・若年世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 定住促進住宅取得補助金は、<span class="marker">佐野市内に住宅を取得して定住する世帯</span>に費用の一部を補助する制度です。</p><p>佐野市は東北自動車道の佐野藤岡ICがあり、首都圏へのアクセスが良好です。佐野プレミアム・アウトレットなど商業施設も充実しており、住みやすいまちとしての魅力を高めています。人口減少対策として定住促進を図るため住宅取得を支援しています。</p><p>補助額は<strong>基本30万円、市外転入で最大50万円</strong>です。<span class="marker-green">子育て世帯への加算</span>も設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>佐野市内に新築・中古住宅を取得すること</p><p>中学生以下の子がいる世帯、または夫婦ともに40歳未満の世帯</p><p>5年以上定住する意思があること</p><p>市税を滞納していないこと</p></div><p>佐野市役所都市建設部住宅課に申請書と必要書類を提出します。</p><p><span class="marker">住宅取得後1年以内に申請</span>してください。事前の相談を推奨しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、市外からの転入は<strong>10万円加算</strong>、子育て世帯は<strong>10万円加算</strong>で<strong>最大50万円</strong>となります。</p><p><span class="marker">5年以内に転出した場合は返還</span>を求められることがあります。</p><div class="note-box">佐野市では空き家バンク制度も運営しており、中古住宅の情報も提供しています。住宅ローン減税など国の制度との併用も可能ですので、住宅課に相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-infertility',
    title: '佐野市 不妊治療費助成事業',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '栃木県',
    tags: ['佐野市', '不妊治療', '助成'],
    eligibility: '佐野市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '佐野市が実施する不妊治療費助成事業です。保険適用後の自己負担分等を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 不妊治療費助成事業は、<span class="marker">特定不妊治療（体外受精・顕微授精）</span>の自己負担を軽減する助成制度です。</p><p>佐野市は子どもを望む夫婦を支援するため、不妊治療にかかる費用の一部を助成しています。保険適用後もなお高額となる不妊治療の経済的負担を和らげ、安心して治療を継続できる環境を提供します。</p><p>助成額は<strong>1回の治療につき最大10万円</strong>で、<span class="marker-green">年間2回まで申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐野市に住民登録がある法律上の婚姻関係にある夫婦（事実婚含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の写し</p><p>住民票・戸籍謄本</p></div><p>佐野市健康医療部健康増進課に申請します。<span class="marker">治療終了日から3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分（先進医療含む）に対し、<strong>1回あたり最大10万円</strong>を助成します。年間2回、通算6回まで利用できます。</p><p><span class="marker">栃木県の助成制度と併用可能</span>ですが、重複部分は調整されます。</p><div class="note-box">佐野市では不妊・不育症に関する相談窓口を設けており、保健師による相談対応やピアサポート情報の提供も行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-scholarship',
    title: '佐野市 奨学金返還支援制度',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大年額18万円（最長3年）',
    maxAmountNum: 18,
    category: 'education',
    prefecture: '栃木県',
    tags: ['佐野市', '奨学金返還', '支援'],
    eligibility: '佐野市に居住・就業し、奨学金を返還中の若者（30歳以下）',
    applicationPeriod: '毎年4月〜6月',
    description: '佐野市が実施する奨学金返還支援制度です。市内に居住・就業する若者の奨学金返還を最長3年間支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 奨学金返還支援制度は、<span class="marker">佐野市に居住し市内企業等に就業する若者</span>の奨学金返還負担を軽減する制度です。</p><p>佐野市は若年層の流出防止と地元企業の人材確保を同時に実現するため、奨学金返還の支援を行っています。大学等を卒業後に佐野市に定住して働く若者を応援する独自の制度です。</p><p>支援額は<strong>年額最大18万円を最長3年間（合計最大54万円）</strong>です。<span class="marker-green">日本学生支援機構の奨学金返還が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>佐野市に住民登録があり、30歳以下であること</p><p>佐野市内の事業所に正規雇用されていること</p><p>日本学生支援機構の奨学金を返還中であること</p><p>市税を滞納していないこと</p></div><p>佐野市役所商工観光課に申請書と奨学金返還証明書を提出します。</p><p><span class="marker">毎年4月から6月に募集</span>が行われます。募集人数に限りがありますので早めに申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>前年度に実際に返還した奨学金の額のうち、<strong>年額最大18万円</strong>が支給されます。<strong>最長3年間</strong>利用可能です。</p><p><span class="marker">支給期間中に佐野市外へ転出した場合は支給終了</span>となります。</p><div class="highlight-box">佐野市内には製造業を中心に多くの企業があり、地元就職の選択肢も広がっています。ハローワーク佐野や佐野市の就職情報サイトで求人情報を確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-sme-support',
    title: '佐野市 中小企業DX推進補助金',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '栃木県',
    tags: ['佐野市', 'DX推進', '中小企業'],
    eligibility: '佐野市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜10月',
    description: '佐野市が実施する中小企業DX推進補助金です。業務のデジタル化に取り組む中小企業に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 中小企業DX推進補助金は、<span class="marker">市内中小企業のデジタルトランスフォーメーション</span>を支援する制度です。</p><p>佐野市は製造業や小売業を中心とした中小企業が多く、デジタル化による生産性向上が地域経済の活性化に不可欠です。ITシステムの導入やECサイトの構築など、DXに取り組む事業者を支援しています。</p><p>補助率は<strong>対象経費の2/3以内、最大100万円</strong>です。<span class="marker-green">クラウドサービス導入、ECサイト構築、業務管理システム導入等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象事業例"><p>クラウド型業務管理システムの導入</p><p>ECサイトの構築・リニューアル</p><p>IoT機器の導入による業務効率化</p><p>テレワーク環境の整備</p></div><p>佐野市内に主たる事業所を有する中小企業者が対象です。佐野市役所商工観光課に事業計画書と申請書を提出します。</p><p><span class="marker">事業着手前の申請が必須</span>です。専門家による事前ヒアリングが行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の2/3以内で<strong>最大100万円</strong>が補助されます。ITコーディネーターによる無料の事前コンサルティングも利用できます。</p><p><span class="marker">補助金の交付は事業完了後</span>です。事業完了報告書と経費の証拠書類の提出が必要です。</p><div class="note-box">国のIT導入補助金やものづくり補助金と組み合わせることも検討できます。佐野商工会議所でもDX推進の相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-nursing-equipment',
    title: '佐野市 介護用品支給事業',
    organization: '佐野市',
    type: 'local',
    maxAmount: '年額6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '栃木県',
    tags: ['佐野市', '介護用品', '支給'],
    eligibility: '佐野市に住所を有し、在宅で要介護3以上の方を介護する家族',
    applicationPeriod: '通年',
    description: '佐野市が実施する介護用品支給事業です。在宅で重度要介護者を介護する家族に年額6万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護する家族</span>に介護用品を支給する制度です。</p><p>佐野市は在宅介護の負担軽減を重要施策に掲げ、介護離職の防止と介護者の生活の質の維持に取り組んでいます。日常的に必要な紙おむつ等の費用を市が負担することで、経済的な支援を行います。</p><p>支給額は<strong>年額6万円相当</strong>の介護用品です。<span class="marker-green">紙おむつ・尿取りパッド・使い捨て手袋等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐野市に住民登録があり、要介護3以上の認定を受けた方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定結果通知書の写し</p><p>介護者の本人確認書類</p></div><p>佐野市役所高齢福祉課の窓口で申請します。<span class="marker">年度ごとの申請が必要</span>で、途中申請は月割りです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>年額6万円相当</strong>の介護用品がカタログ方式で支給されます。隔月で商品を選択・配達されます。</p><p><span class="marker">入院・施設入所中は対象外</span>です。在宅介護に限ります。</p><div class="note-box">介護保険の福祉用具貸与や購入費支給と併用可能です。佐野市では介護者向けリフレッシュ事業やケアラーズカフェも開催しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-migration-bonus',
    title: '佐野市 移住・定住応援補助金',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '栃木県',
    tags: ['佐野市', '移住定住', '補助金'],
    eligibility: '東京圏から佐野市に移住し就業・起業した方',
    applicationPeriod: '通年',
    description: '佐野市が実施する移住・定住応援補助金です。東京圏から佐野市に移住した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 移住・定住応援補助金は、<span class="marker">東京圏から佐野市に移住して就業・起業</span>した方に支給される支援金です。</p><p>佐野市は東北自動車道で都心から約1時間と好アクセスでありながら、自然豊かな環境が魅力です。佐野ラーメンやアウトレットなど生活の楽しみも多く、移住先として人気が高まっています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>です。<span class="marker-green">18歳未満の子ども1人あたり30万円の加算</span>もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前に東京23区に在住または通勤していたこと</p><p>佐野市に転入後3か月以上1年以内に申請すること</p><p>栃木県のマッチングサイト掲載企業等に就業すること</p><p>5年以上居住する意思があること</p></div><p>佐野市役所総合政策課に申請書と必要書類を提出します。</p><p><span class="marker">事前の移住相談を推奨</span>しています。佐野市移住コンシェルジュが対応します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>単身は<strong>60万円</strong>、世帯は<strong>100万円</strong>です。子ども加算<strong>1人30万円</strong>もあります。</p><p><span class="marker">5年以内に転出した場合は返還</span>が必要な場合があります。</p><div class="highlight-box">佐野市では移住体験ツアーや空き家見学会なども定期的に開催しています。移住を検討中の方は、まず「さの暮らし」ポータルサイトで情報を収集してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sano-bousai-equipment',
    title: '佐野市 防災資機材整備補助金',
    organization: '佐野市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'disaster',
    prefecture: '栃木県',
    tags: ['佐野市', '防災資機材', '補助金'],
    eligibility: '佐野市内の自治会・自主防災組織',
    applicationPeriod: '毎年4月〜11月',
    description: '佐野市が実施する防災資機材整備補助金です。自治会等の防災資機材購入に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐野市 防災資機材整備補助金は、<span class="marker">自治会や自主防災組織が防災資機材を整備</span>する際の費用を補助する制度です。</p><p>佐野市は2019年の台風19号で甚大な浸水被害を受けた経験があり、地域の防災力強化は喫緊の課題です。自助・共助の力を高めるため、各地域の防災備蓄や資機材の充実を支援しています。</p><p>補助額は<strong>購入費用の2/3以内、最大15万円</strong>です。<span class="marker-green">発電機、投光器、担架、救急セット等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象資機材例"><p>発電機・投光器</p><p>担架・救急セット</p><p>簡易トイレ・飲料水備蓄</p><p>テント・ブルーシート</p></div><p>佐野市内の自治会・自主防災組織が対象です。佐野市役所危機管理課に申請書を提出します。</p><p><span class="marker">購入前の事前申請が必要</span>です。購入後の申請は受け付けていません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>防災資機材の購入費用の2/3以内で<strong>最大15万円</strong>が補助されます。1団体あたり年1回の利用です。</p><p><span class="marker">資機材は適切に保管・管理する</span>必要があります。毎年の活動報告書の提出も求められます。</p><div class="note-box">佐野市では防災訓練の実施支援や防災リーダーの養成研修も行っています。台風19号の教訓を活かし、地域一体となった防災体制の構築を進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sano.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 桐生市（群馬県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kiryu-childcare-subsidy',
    title: '桐生市 保育料軽減補助金',
    organization: '桐生市',
    type: 'local',
    maxAmount: '最大月額2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['桐生市', '保育料軽減', '補助金'],
    eligibility: '桐生市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '桐生市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大2万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>桐生市は群馬県東部に位置し、かつては「西の西陣、東の桐生」と称された織物のまちです。近年は人口減少対策として子育て支援の充実に力を入れており、多様な保育ニーズに応えるため認可外保育施設利用者への補助を実施しています。</p><p>補助額は<strong>月額最大2万円</strong>で、<span class="marker-green">世帯の課税状況に応じて決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>桐生市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用する児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設の利用証明書</p><p>保育料の領収書</p><p>課税証明書</p><p>保護者の本人確認書類</p></div><p>桐生市役所子育て支援課に申請します。<span class="marker">半年ごとの実績報告が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>世帯の市民税所得割額により補助額が決まり、<strong>月額最大2万円</strong>が支給されます。</p><p><span class="marker">幼児教育・保育の無償化との調整</span>があります。無償化の給付額を超える部分が補助対象です。</p><div class="note-box">桐生市では小規模保育事業所の整備も進めており、0〜2歳児の保育受け皿拡大に取り組んでいます。保育に関する相談はこども課へお気軽にどうぞ。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-birth-bonus',
    title: '桐生市 出産祝い金',
    organization: '桐生市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['桐生市', '出産祝い金', '給付金'],
    eligibility: '桐生市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '桐生市が実施する出産祝い金です。市内在住の方の出産に際して最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>桐生市は渡良瀬川沿いに広がる織都（しょくと）として長い歴史を持ちます。桐生織で培われた「ものづくりの精神」を未来へつなぐためにも、次世代を担う子どもたちの誕生を祝い、出産時の経済的支援を行っています。</p><p>支給額は<strong>第1子5万円、第2子7万円、第3子以降10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で桐生市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>桐生市役所子育て支援課の窓口で申請します。出生届提出時に案内があります。</p><p><span class="marker">母子健康手帳と振込先口座情報</span>を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子5万円、第2子7万円、第3子以降10万円</strong>が支給されます。多胎児は各子に支給されます。</p><p><span class="marker">申請期限は出産後6か月以内</span>です。期限超過は受付不可です。</p><div class="highlight-box">国の出産育児一時金や群馬県の出産・子育て応援給付金と併せて受給可能です。桐生市では産後ケア事業（宿泊型・日帰り型）も実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-barrier-free',
    title: '桐生市 バリアフリー住宅改修補助金',
    organization: '桐生市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['桐生市', 'バリアフリー', '住宅改修'],
    eligibility: '桐生市内の住宅をバリアフリー改修する65歳以上の方がいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '桐生市が実施するバリアフリー住宅改修補助金です。高齢者のいる世帯の住宅バリアフリー化に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 バリアフリー住宅改修補助金は、<span class="marker">65歳以上の方がいる世帯の住宅バリアフリー改修</span>を支援する制度です。</p><p>桐生市は高齢化率が県内でも高い水準にあり、高齢者が安全に暮らせる住環境の整備が重要です。手すりの設置や段差の解消など、転倒予防に効果的な改修を支援し、在宅での自立生活の継続を促しています。</p><p>補助額は<strong>対象工事費用の1/2以内、最大20万円</strong>です。<span class="marker-green">手すり設置、段差解消、滑り防止等</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取替え</p><p>浴室・トイレの改修</p></div><p>桐生市に住民登録がある65歳以上の方がいる世帯が対象です。桐生市役所建築住宅課に工事着手前に申請します。</p><p><span class="marker">工事着手前の申請が必須</span>です。工事内容の審査後に交付決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費用の1/2以内で<strong>最大20万円</strong>が補助されます。介護保険の住宅改修費支給とは別枠です。</p><p><span class="marker">工事は市内の施工業者に依頼</span>することが推奨されます。工事完了後に実績報告の提出が必要です。</p><div class="note-box">介護保険の住宅改修費支給（上限20万円）と合わせて最大40万円の支援を受けられます。ケアマネジャーや住宅改修アドバイザーへの相談もおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-disability-medical',
    title: '桐生市 重度障がい者医療費助成',
    organization: '桐生市',
    type: 'local',
    maxAmount: '医療費自己負担なし',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '群馬県',
    tags: ['桐生市', '障がい者医療', '助成'],
    eligibility: '桐生市に住所を有する重度障がい者',
    applicationPeriod: '通年',
    description: '桐生市が実施する重度障がい者医療費助成制度です。医療費の自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 重度障がい者医療費助成は、<span class="marker">重度の障がいをお持ちの方</span>の医療費自己負担を助成する制度です。</p><p>桐生市は障がい者福祉の充実に取り組み、すべての市民が安心して医療を受けられる環境を整えています。群馬県の福祉医療制度に基づき、医療費の経済的負担を軽減します。</p><p><span class="marker-green">保険診療の自己負担分が助成</span>されます。通院・入院ともに対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>身体障害者手帳1級・2級の方</p><p>療育手帳Aの方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>桐生市役所社会福祉課に受給者証の交付を申請します。障害者手帳・健康保険証を持参してください。</p><p><span class="marker">受給者証を医療機関窓口で提示</span>して受診します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の<strong>自己負担分が全額助成</strong>されます。入院時の食事代・差額ベッド代は対象外です。</p><p><span class="marker">所得制限があります</span>。高所得者は対象外となる場合があります。</p><div class="note-box">群馬県外の医療機関では、いったん自己負担分を支払い、後日市役所に申請する償還払い方式となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-school-lunch',
    title: '桐生市 学校給食費助成制度',
    organization: '桐生市',
    type: 'local',
    maxAmount: '第3子以降無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '群馬県',
    tags: ['桐生市', '給食費', '助成'],
    eligibility: '桐生市立小中学校に通う第3子以降の児童・生徒の保護者',
    applicationPeriod: '毎年4月（自動適用）',
    description: '桐生市が実施する学校給食費助成制度です。第3子以降の児童・生徒の給食費を全額免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 学校給食費助成制度は、<span class="marker">市立小中学校に通う第3子以降の児童・生徒</span>の給食費を全額免除する制度です。</p><p>桐生市は多子世帯の経済的負担を軽減するため、第3子以降の給食費を市が全額負担しています。少子化対策として、安心して複数の子どもを育てられる環境を整備しています。</p><p><strong>第3子以降の給食費が無料</strong>となります。<span class="marker-green">所得制限はなく全対象世帯に適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>桐生市立小中学校に通う児童・生徒の保護者</p><p>当該児童・生徒が第3子以降であること</p><p>上の2人の兄姉が18歳未満であること</p></div><p>年度初めに学校を通じて確認が行われます。特別な申請手続きは基本的に不要です。</p><p><span class="marker">転入等の場合は学校教育課に届出</span>してください。年度途中からも適用されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の<strong>給食費が全額免除</strong>されます。小学校は月額約4,300円、中学校は月額約5,000円の免除となります。</p><p><span class="marker">第1子・第2子は通常通り給食費がかかります</span>。就学援助制度の対象世帯は別途全額免除です。</p><div class="highlight-box">桐生市では地元食材を活用した「きりゅう給食」に力を入れています。栄養バランスの良い給食で子どもの健やかな成長を支えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-uij-turn',
    title: '桐生市 UIJターン就職支援金',
    organization: '桐生市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '群馬県',
    tags: ['桐生市', 'UIJターン', '支援金'],
    eligibility: '東京圏から桐生市に移住し就業した方',
    applicationPeriod: '通年',
    description: '桐生市が実施するUIJターン就職支援金です。東京圏から移住し就業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 UIJターン就職支援金は、<span class="marker">東京23区に在住・通勤していた方が桐生市に移住・就業</span>した場合に支給される支援金です。</p><p>桐生市は東武鉄道やJR両毛線で首都圏につながり、かつ赤城山の自然に恵まれた魅力的な地方都市です。「桐生織」に代表される伝統産業から最先端のものづくりまで幅広い産業があり、多様な就業機会を提供しています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>です。<span class="marker-green">テレワーク移住も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前に東京23区に在住または通勤していたこと</p><p>桐生市に転入後3か月以上1年以内に申請すること</p><p>群馬県のマッチングサイト掲載企業等に就業すること</p><p>5年以上居住する意思があること</p></div><p>桐生市役所魅力発信課に申請書と必要書類を提出します。</p><p><span class="marker">移住前の事前相談を推奨</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>単身は<strong>60万円</strong>、世帯は<strong>100万円</strong>です。18歳未満の子ども1人あたり<strong>30万円加算</strong>があります。</p><p><span class="marker">5年以内に転出した場合は返還</span>を求められることがあります。</p><div class="highlight-box">桐生市は近年「クリエイティブタウン桐生」としてアーティストやクリエイターの移住も増えています。ものづくりの伝統と新しい文化が融合する独特の雰囲気が魅力です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-nursing-home-reform',
    title: '桐生市 介護住宅改修上乗せ助成',
    organization: '桐生市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'nursing',
    prefecture: '群馬県',
    tags: ['桐生市', '介護住宅', '改修助成'],
    eligibility: '桐生市に住所を有する要介護・要支援認定を受けた方',
    applicationPeriod: '通年',
    description: '桐生市が実施する介護住宅改修上乗せ助成です。介護保険の住宅改修に上乗せして最大15万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 介護住宅改修上乗せ助成は、<span class="marker">介護保険の住宅改修費支給制度に上乗せ</span>して改修費用を助成する制度です。</p><p>桐生市は高齢化率が高く、在宅介護の環境整備は特に重要な課題です。介護保険制度だけではカバーしきれない改修ニーズに対応するため、市独自の上乗せ助成を行い、高齢者の在宅生活を支えています。</p><p>助成額は<strong>最大15万円</strong>で、<span class="marker-green">介護保険の住宅改修（上限20万円）とは別枠</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>桐生市に住民登録がある方で、要介護または要支援の認定を受けた方の住宅改修が対象です。</p><div class="summary-box" data-title="対象工事"><p>手すりの設置（廊下・階段・浴室等）</p><p>段差の解消</p><p>滑り防止の床材変更</p><p>引き戸への扉の取替え</p></div><p>桐生市役所介護高齢福祉課に事前相談の上、<span class="marker">工事着手前に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費用の9割（所得に応じて7〜8割）が助成され、<strong>上限15万円</strong>です。</p><p><span class="marker">介護保険の住宅改修と同時に申請</span>するのが効率的です。合計最大35万円の支援を受けられます。</p><div class="note-box">桐生市地域包括支援センターでは、住宅改修に関する相談や助言も行っています。適切な改修内容の検討にあたっては専門家の意見を取り入れましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-energy-support',
    title: '桐生市 住宅用太陽光発電設備設置補助金',
    organization: '桐生市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '群馬県',
    tags: ['桐生市', '太陽光発電', '補助金'],
    eligibility: '桐生市内の住宅に太陽光発電設備を設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '桐生市が実施する住宅用太陽光発電設備設置補助金です。太陽光パネルの設置に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 住宅用太陽光発電設備設置補助金は、<span class="marker">住宅に太陽光発電設備を新たに設置する方</span>に対して費用の一部を補助する制度です。</p><p>桐生市は群馬県の中でも日照時間が長い地域であり、太陽光発電に適した環境です。再生可能エネルギーの普及促進と光熱費の削減を目的に、住宅用太陽光パネルの設置を支援しています。</p><p>補助額は<strong>1kWあたり2万円、最大10万円（5kWまで）</strong>です。<span class="marker-green">蓄電池との同時設置でさらに加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>桐生市に住民登録がある住宅所有者</p><p>新たに太陽光発電設備を設置すること（増設含む）</p><p>出力10kW未満の住宅用設備であること</p><p>市税を滞納していないこと</p></div><p>桐生市役所環境課に設備設置前に申請書を提出します。</p><p><span class="marker">設置工事着手前の申請が必須</span>です。設置後は実績報告書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>太陽光発電設備1kWあたり2万円で<strong>最大10万円</strong>が補助されます。蓄電池を同時設置する場合は<strong>別途最大5万円の加算</strong>があります。</p><p><span class="marker">既存住宅・新築住宅ともに対象</span>です。ただし建売住宅への設置は対象外の場合があります。</p><div class="note-box">国や群馬県の太陽光発電関連補助金と併用できる場合があります。電力の自家消費により年間5万円〜10万円の光熱費削減効果が見込めます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kiryu-seismic-diagnosis',
    title: '桐生市 木造住宅耐震診断補助金',
    organization: '桐生市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '群馬県',
    tags: ['桐生市', '耐震診断', '補助金'],
    eligibility: '桐生市内に昭和56年以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜11月',
    description: '桐生市が実施する木造住宅耐震診断補助金です。旧耐震基準の木造住宅の耐震診断に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>桐生市 木造住宅耐震診断補助金は、<span class="marker">昭和56年5月31日以前に建築された木造住宅</span>の耐震診断費用を補助する制度です。</p><p>桐生市は北関東の内陸部に位置し、大規模地震への備えが重要です。旧耐震基準で建てられた住宅の安全性を把握し、必要に応じて耐震改修へつなげるため、診断費用を支援しています。</p><p>補助額は<strong>診断費用の2/3以内、最大5万円</strong>です。<span class="marker-green">市が紹介する耐震診断士による診断</span>が行われます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>2階建て以下の一戸建て住宅</p><p>在来軸組工法で建てられた住宅</p><p>過去にこの補助を受けていないこと</p></div><p>桐生市役所建築指導課に申請書を提出します。</p><p><span class="marker">先着順で受付</span>し、予算に達し次第終了します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用の2/3以内で<strong>最大5万円</strong>が補助されます。通常の診断費用は8万円〜12万円程度です。</p><p><span class="marker">耐震改修が必要な場合は別途改修補助制度</span>（最大100万円）も利用できます。</p><div class="highlight-box">桐生市は古い木造住宅が多い地域です。まずは耐震診断を受けて住宅の現状を把握することが、地震への備えの第一歩です。無料の耐震相談会も定期開催しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kiryu.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
