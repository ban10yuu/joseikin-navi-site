import { Grant } from '@/lib/types';

export const cityGrantsBatch53: Grant[] = [
  // ────────────────────────────────────────────────
  // 下関市（山口県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'shimonoseki-childcare-subsidy',
    title: '下関市 子育て応援給付金',
    organization: '下関市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['下関市', '子育て支援', '給付金'],
    eligibility: '下関市に住所を有し、18歳未満の子どもを養育している保護者',
    applicationPeriod: '毎年4月〜翌年3月（通年）',
    description: '下関市が実施する子育て応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 子育て応援給付金は、<span class="marker">18歳未満の子どもを養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金を支給する制度です。</p><p>本州最西端に位置し関門海峡を挟んで九州と向き合う下関市は、フグの水揚げ日本一として知られる港町です。人口減少対策として子育て環境の充実に力を入れており、この給付金もその一環として設けられています。</p><p><span class="marker-green">所得制限が設けられており、一定所得以下の世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>下関市に住民登録があり、18歳未満の子どもを養育している保護者で、世帯の所得が基準額以下の方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市から送付または窓口で配布）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p><p>所得を証明する書類（必要に応じて）</p></div><p>下関市役所こども未来部の窓口で申請を受け付けています。<strong>対象者には市から案内通知</strong>が届きますので、届いた書類に必要事項を記入して提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>子ども1人あたり最大5万円</strong>が支給されます。多子世帯では子どもの人数に応じた加算がある場合があります。</p><p><span class="marker">申請期限を過ぎると受給できなくなるため、案内通知が届いたら早めに手続き</span>をしてください。</p><div class="note-box">他の自治体から同種の給付金を受給している場合は対象外となることがあります。転入・転出のタイミングによって支給額が異なる場合がありますので、詳しくは窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-birth-bonus',
    title: '下関市 出産祝い金',
    organization: '下関市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['下関市', '出産祝い金', '子育て支援'],
    eligibility: '下関市に住所を有し、第3子以降の子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '下関市が実施する出産祝い金制度です。第3子以降の出産に対して10万円を支給し、多子世帯の子育てを応援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 出産祝い金は、<span class="marker">第3子以降の子どもが生まれた世帯</span>に対し、出産を祝い子育てを応援するための祝い金を支給する制度です。</p><p>下関市は関門海峡に面し、壇ノ浦の戦いや巌流島など歴史的名所が数多く残る街です。少子化対策の一環として、多子世帯への支援を手厚くすることで、安心して子どもを産み育てられる環境づくりを推進しています。</p><p><span class="marker-green">出生届の提出と同時に窓口で手続き可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>下関市に住民登録があり、第3子以降の子どもが出生した世帯の保護者が対象です。上の子2人以上が18歳未満であることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出生届の写し</p><p>保護者の本人確認書類</p><p>振込先口座情報</p><p>上の子の続柄を確認できる書類</p></div><p>下関市役所こども未来部の窓口で申請します。<strong>出生届と同時に手続きするのがスムーズ</strong>です。郵送での申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の出産1件につき10万円</strong>が支給されます。双子以上の場合はそれぞれの子どもについて支給対象となります。</p><p><span class="marker">生後6か月以内に申請しないと受給資格を失います</span>ので、出産後は早めに手続きを行ってください。</p><div class="highlight-box">下関市では出産祝い金のほか、妊婦健診費用の助成や産後ケア事業も実施しています。妊娠期から出産後まで切れ目のない支援を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-housing-purchase',
    title: '下関市 定住促進住宅取得補助金',
    organization: '下関市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '山口県',
    tags: ['下関市', '住宅取得', '定住促進'],
    eligibility: '下関市内に新たに住宅を取得して定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '下関市が実施する定住促進住宅取得補助金です。市内への定住を目的とした住宅取得に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 定住促進住宅取得補助金は、<span class="marker">市内に新たに住宅を取得して定住する方</span>に対し、住宅取得費用の一部を補助する制度です。</p><p>関門海峡の本州側に位置する下関市は、九州への玄関口として古くから栄えてきました。近年は人口流出が課題となっており、住宅取得支援を通じて若い世代の定住促進を図っています。新築・中古住宅の購入どちらも対象です。</p><p>基本補助額は30万円で、<strong>子育て世帯や市外からの転入者には加算</strong>があります。<span class="marker-green">最大50万円まで補助を受けることが可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>下関市内に住宅を取得し、住民登録を行うこと</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>下関市役所住宅政策課に申請書と必要書類を提出します。売買契約書の写し、登記事項証明書、住民票などが必要です。</p><p><span class="marker">住宅取得後1年以内に申請が必要</span>です。取得前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、以下の加算があります。子育て世帯加算：10万円、市外からの転入加算：10万円。合計で<strong>最大50万円</strong>です。</p><p><span class="marker">5年以内に転出した場合は補助金の返還</span>が求められます。定住を前提とした制度ですのでご注意ください。</p><div class="note-box">投資用物件や別荘としての取得は対象外です。中古住宅の場合、築年数や建物の状態によって追加書類が必要になることがあります。フラット35や住宅ローン減税との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-infertility',
    title: '下関市 不妊治療費助成事業',
    organization: '下関市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '山口県',
    tags: ['下関市', '不妊治療', '助成金'],
    eligibility: '下関市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内に申請）',
    description: '下関市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して1回あたり最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減</span>するため、治療費の一部を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、それでも自己負担額は大きく、複数回の治療を重ねると家計への影響は少なくありません。下関市では独自の上乗せ助成を行い、子どもを望む夫婦を支援しています。</p><p><span class="marker-green">保険適用の治療・保険適用外の先進医療のいずれも助成対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>下関市に住民登録がある法律上の夫婦またはパートナーで、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関発行の治療証明書</p><p>領収書の原本または写し</p><p>夫婦の住民票（続柄記載）</p><p>健康保険証の写し</p></div><p>下関市保健部健康推進課の窓口に申請書類を提出します。<strong>治療が終了した日から6か月以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対して、<strong>1回の治療あたり最大10万円</strong>を助成します。年間の回数制限がある場合がありますので事前にご確認ください。</p><p><span class="marker">山口県の不妊治療費助成制度との併用が可能</span>ですが、助成額の合計が実際の自己負担額を超えることはできません。</p><div class="highlight-box">下関市では不妊治療に関する相談窓口も設置しています。治療に関する不安や悩みを専門スタッフに相談できますので、一人で抱え込まずにご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-scholarship',
    title: '下関市 奨学金返還支援補助金',
    organization: '下関市',
    type: 'local',
    maxAmount: '年間最大18万円（最長3年）',
    maxAmountNum: 18,
    category: 'education',
    prefecture: '山口県',
    tags: ['下関市', '奨学金返還', '若者支援'],
    eligibility: '下関市内に居住し、奨学金を返還中の若年者（概ね35歳以下）',
    applicationPeriod: '毎年4月〜6月頃',
    description: '下関市が実施する奨学金返還支援補助金です。市内に定住する若者の奨学金返還を年間最大18万円支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 奨学金返還支援補助金は、<span class="marker">市内に居住し奨学金を返還中の若年者</span>に対し、返還額の一部を補助する制度です。</p><p>下関市は水産業や造船業で栄えた歴史を持ち、下関市立大学をはじめとする教育機関も立地しています。若者の地元定着を促進し、奨学金返還による経済的負担を軽減することで、市内での就職・定住を後押ししています。</p><p>補助額は年間の奨学金返還額の2分の1以内で、<strong>年間上限18万円・最長3年間</strong>です。<span class="marker-green">市内の中小企業等に就職している方は優先的に採択</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>下関市内に住民登録があること</p><p>日本学生支援機構等の奨学金を返還中であること</p><p>概ね35歳以下であること</p><p>市内に事業所のある企業等に正規雇用されていること</p><p>市税の滞納がないこと</p></div><p>下関市役所企画課に申請書と奨学金の返還証明書、雇用証明書などを提出します。</p><p><span class="marker">毎年度の申請が必要</span>です。継続して補助を受けるには、各年度に改めて申請手続きを行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は年間の奨学金返還額の2分の1以内で、<strong>年間上限18万円</strong>です。最長3年間の補助で<strong>合計最大54万円</strong>を受給できます。</p><p><span class="marker">補助期間中に市外へ転出した場合は、当該年度分の補助が打ち切り</span>となります。</p><div class="note-box">延滞中の奨学金は対象外です。正常に返還している実績が求められます。公務員は対象外となる場合がありますので、詳細は窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-sme-support',
    title: '下関市 中小企業設備投資補助金',
    organization: '下関市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '山口県',
    tags: ['下関市', '中小企業', '設備投資'],
    eligibility: '下関市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '下関市が実施する中小企業設備投資補助金です。市内中小企業の生産性向上に向けた設備投資を最大200万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 中小企業設備投資補助金は、<span class="marker">市内の中小企業が行う生産性向上のための設備投資</span>を支援する制度です。</p><p>下関市はフグをはじめとする水産加工業、造船業、化学工業など多様な産業が集積しています。人手不足や国際競争の激化に対応するため、生産設備の更新やIT化・DX推進にかかる投資を後押ししています。</p><p>補助率は対象経費の3分の1以内で、<strong>上限は200万円</strong>です。<span class="marker-green">製造業だけでなくサービス業・小売業も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備投資"><p>生産機械・装置の導入・更新</p><p>ITシステム・ソフトウェアの導入</p><p>省エネルギー設備への更新</p><p>品質管理機器の導入</p></div><p>下関市役所産業振興部商工振興課に事業計画書と申請書を提出します。設備の見積書、会社概要、直近の決算書などが必要です。</p><p><span class="marker">設備の発注・購入前に申請が必要</span>です。交付決定を受ける前に発注した設備は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の1以内で、<strong>上限200万円</strong>です。対象経費が60万円以上の設備投資が対象となります。</p><p><span class="marker">導入した設備は5年以上使用する義務</span>があり、処分制限期間内に売却等した場合は補助金の返還が求められます。</p><div class="highlight-box">国や県の補助金との併用はできない場合があります。下関市の産業支援相談窓口では、最適な補助制度の組み合わせについてアドバイスを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-nursing-equipment',
    title: '下関市 介護用品支給事業',
    organization: '下関市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '山口県',
    tags: ['下関市', '介護用品', '在宅介護'],
    eligibility: '下関市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '下関市が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 介護用品支給事業は、<span class="marker">在宅で要介護4または5の高齢者を介護している家族</span>に対し、紙おむつなどの介護用品を支給する制度です。</p><p>在宅介護を続ける家族にとって、消耗品である介護用品の費用は大きな負担となります。下関市では月額6,250円相当の介護用品を現物支給することで、介護する家族の経済的・精神的負担の軽減を図っています。</p><p><span class="marker-green">市民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>下関市に住民登録がある在宅の要介護4・5の高齢者を介護している同居家族で、世帯全員が市民税非課税の方が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ止め・パンツ型）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭剤・ドライシャンプー</p></div><p>下関市役所介護保険課または各総合支所の窓口で申請します。介護保険被保険者証と<strong>担当ケアマネジャーの意見書</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額6,250円相当</strong>の介護用品が支給されます。カタログから必要な用品を選択し、自宅へ配送されます。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。在宅での介護が支給の条件となります。</p><div class="note-box">介護保険の福祉用具貸与・購入制度とは別の制度です。両方を組み合わせて利用することで、在宅介護の環境をより充実させることができます。申請は毎年度更新が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-elderly-support',
    title: '下関市 高齢者見守り・生活支援事業',
    organization: '下関市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '山口県',
    tags: ['下関市', '高齢者見守り', '生活支援'],
    eligibility: '下関市に住所を有する65歳以上の一人暮らし高齢者等',
    applicationPeriod: '通年',
    description: '下関市が実施する高齢者見守り・生活支援事業です。一人暮らし高齢者等に緊急通報装置の貸与や配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 高齢者見守り・生活支援事業は、<span class="marker">65歳以上の一人暮らし高齢者や高齢者のみの世帯</span>に対し、緊急通報装置の貸与や配食サービスなどの生活支援を提供する制度です。</p><p>三方を海に囲まれた下関市は広大な面積を有し、中山間地域では高齢化が特に進んでいます。住み慣れた地域で安心して暮らし続けられるよう、見守りと生活支援を組み合わせたサービスを展開しています。</p><p><span class="marker-green">緊急通報装置の利用料は市民税非課税世帯の場合は無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="提供されるサービス"><p>緊急通報装置の貸与（ボタン一つで消防本部へ通報）</p><p>配食サービス（安否確認を兼ねた食事の宅配）</p><p>乳酸菌飲料の配達による定期見守り</p><p>ごみ出し支援</p></div><p>下関市役所長寿支援課、各総合支所、または地域包括支援センターの窓口で申請できます。</p><p><span class="marker">担当の民生委員や地域包括支援センターを通じた申請も可能</span>です。まずはお近くの相談窓口にご連絡ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置は<strong>市民税非課税世帯は無料、課税世帯は月額数百円程度の負担</strong>で貸与されます。配食サービスは1食あたりの自己負担があります。</p><p><span class="marker">サービスの利用にあたっては、緊急連絡先として親族や近隣の協力者の登録</span>が必要です。</p><div class="highlight-box">下関市では地域の民生委員やボランティアによる見守りネットワークも整備されています。介護保険サービスと組み合わせることで、在宅生活をより安心なものにできます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-seismic-diagnosis',
    title: '下関市 木造住宅耐震診断補助制度',
    organization: '下関市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円のみ',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '山口県',
    tags: ['下関市', '耐震診断', '防災'],
    eligibility: '下関市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃（予定戸数に達し次第終了）',
    description: '下関市が実施する木造住宅耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断を自己負担3,000円で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 木造住宅耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を市が補助する制度です。</p><p>下関市は活断層が確認されている地域もあり、地震への備えが重要です。通常数万円かかる耐震診断を自己負担わずか3,000円で受けることができ、住宅の安全性を確認する第一歩として利用されています。</p><p><span class="marker-green">市が派遣する耐震診断士が自宅を訪問して診断</span>を行います。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>下関市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の戸建て住宅であること</p><p>過去にこの制度で耐震診断を受けていないこと</p></div><p>下関市役所建築指導課に申込書を提出します。申込み後、市が耐震診断士を派遣し、現地調査を行います。</p><p><span class="marker">毎年度の予定戸数に限りがあるため、早めの申込みをおすすめ</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用のうち、<strong>自己負担は3,000円のみ</strong>です。残りの費用は市が負担します。</p><p><span class="marker">診断結果で耐震性が不足していると判定された場合は、耐震改修工事の補助制度</span>を利用できます（別途申請が必要）。</p><div class="note-box">耐震診断は建物の構造的な安全性を評価するもので、リフォームの提案ではありません。診断結果に基づいて改修が必要かどうかを判断してください。鉄骨造や鉄筋コンクリート造の住宅は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 久留米市（福岡県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kurume-childcare-subsidy',
    title: '久留米市 子育て世帯生活支援給付金',
    organization: '久留米市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['久留米市', '子育て支援', '給付金'],
    eligibility: '久留米市に住所を有する住民税非課税世帯等の子育て世帯',
    applicationPeriod: '通年（対象者へ案内送付）',
    description: '久留米市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 子育て世帯生活支援給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、生活の安定を図るための給付金を支給する制度です。</p><p>福岡県南部に位置する久留米市は、ブリヂストン発祥の地としてゴム産業で栄え、現在は医療都市としても知られています。筑後地方の中心都市として子育て支援の充実にも注力しており、経済的に困難な世帯への支援を行っています。</p><p><span class="marker-green">児童扶養手当受給世帯は申請不要で自動支給</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>久留米市に住民登録があり、18歳未満の子どもを養育する住民税非課税世帯または家計急変世帯が対象です。</p><div class="summary-box" data-title="支給パターン"><p>児童扶養手当受給者：申請不要（プッシュ型支給）</p><p>住民税非課税のひとり親世帯：簡易申請</p><p>家計急変世帯：収入申立書による申請</p></div><p>久留米市役所子ども未来部の窓口で申請を受け付けています。<strong>対象となる可能性のある方には市から案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>子ども1人あたり5万円</strong>が支給されます。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変を理由に申請する場合は、収入の減少を証明する書類</span>が必要です。直近の給与明細や離職票などをご準備ください。</p><div class="note-box">生活保護受給世帯もこの給付金の対象となります。同種の国の給付金と重複受給はできませんので、すでに国の給付金を受け取っている場合はご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-birth-bonus',
    title: '久留米市 出産・子育て応援給付金',
    organization: '久留米市',
    type: 'local',
    maxAmount: '合計10万円（出産応援5万円＋子育て応援5万円）',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['久留米市', '出産応援', '子育て応援'],
    eligibility: '久留米市に住所を有する妊婦および出生した子どもの養育者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '久留米市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>久留米市は筑後川の恵みを受けた豊かな農業地帯と都市機能が調和した街です。全国的な伴走型相談支援と経済的支援の一体的実施として、妊娠期から出産・子育て期にわたる切れ目のない支援を行っています。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・子育て世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>久留米市に住民登録がある妊婦（出産応援）および出生した子どもの養育者（子育て応援）が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>妊娠届出時：保健師等との面談後、出産応援給付金5万円を申請</p><p>出生届出後：赤ちゃん訪問（乳児家庭全戸訪問）時に子育て応援給付金5万円を申請</p></div><p>久留米市役所健康推進課または各保健センターで手続きできます。<strong>面談・訪問を受けることが支給の条件</strong>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎妊娠の場合は子育て応援給付金が子どもの人数分支給されます。</p><p><span class="marker">面談を受けずに申請だけを行っても支給されません</span>。必ず保健師等との面談を受けてください。</p><div class="highlight-box">この制度は経済的支援だけでなく、妊娠・出産・育児に関する相談支援も兼ねています。不安や悩みがあれば面談時に相談でき、必要な支援サービスにつないでもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-newlywed-rent',
    title: '久留米市 新婚世帯家賃補助事業',
    organization: '久留米市',
    type: 'local',
    maxAmount: '月額最大2万円（最長2年間）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['久留米市', '新婚世帯', '家賃補助'],
    eligibility: '久留米市内に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '久留米市が実施する新婚世帯家賃補助事業です。新婚世帯の家賃負担を軽減するため、月額最大2万円を最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 新婚世帯家賃補助事業は、<span class="marker">婚姻届提出後3年以内の新婚世帯</span>に対し、市内の賃貸住宅の家賃を一部補助する制度です。</p><p>久留米市は福岡県南部の中核市として、商業施設や医療機関が充実した住みやすい街です。結婚を機に久留米市で新生活をスタートする世帯を応援し、若い世代の定住を促進しています。</p><p>補助額は月額最大2万円で、<strong>最長2年間（合計最大48万円）</strong>の補助が受けられます。<span class="marker-green">夫婦ともに39歳以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出から3年以内であること</p><p>夫婦ともに39歳以下であること</p><p>久留米市内の賃貸住宅に居住していること</p><p>世帯の合計所得が基準額以下であること</p><p>市税の滞納がないこと</p></div><p>久留米市役所住宅政策課に申請書と婚姻届受理証明書、賃貸借契約書の写し、所得証明書などを提出します。</p><p><span class="marker">転入前の事前申請はできません</span>。久留米市に住民登録を行った後に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた実質負担額に対し、<strong>月額最大2万円</strong>を補助します。最長2年間で<strong>合計最大48万円</strong>です。</p><p><span class="marker">公営住宅や社宅に入居している場合は対象外</span>です。また、親族が所有する物件への入居も対象外となります。</p><div class="note-box">補助期間中に市外へ転出した場合は、転出月分をもって補助が終了します。世帯所得が基準額を超えた場合も同様に補助が打ち切られますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-disability-medical',
    title: '久留米市 重度障がい者医療費助成制度',
    organization: '久留米市',
    type: 'local',
    maxAmount: '医療費自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['久留米市', '障がい者医療', '助成金'],
    eligibility: '久留米市に住所を有する重度の障がいのある方',
    applicationPeriod: '通年',
    description: '久留米市が実施する重度障がい者医療費助成制度です。重度の障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 重度障がい者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A判定、精神障害者保健福祉手帳1級</span>などの重度の障がいのある方を対象に、医療費の自己負担分を助成する制度です。</p><p>久留米市は久留米大学病院をはじめとする医療機関が充実した医療都市です。重度の障がいのある方が安心して必要な医療を受けられるよう、経済的な負担を軽減しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>久留米市に住民登録があり、健康保険に加入している以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定（重度）</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳B判定の重複障がい</p></div><p>久留米市役所障害者福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>本人名義の振込先口座情報</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が助成</strong>されます。福岡県内の医療機関では受給者証を提示することで窓口負担が軽減されます。</p><p><span class="marker">一定以上の所得がある場合は助成対象外</span>となります。所得制限の基準額は扶養人数等によって異なりますので窓口でご確認ください。</p><div class="note-box">入院時の食事療養費や差額ベッド代は助成対象外です。65歳以上で後期高齢者医療制度に加入している方は、別の助成制度が適用される場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-school-lunch',
    title: '久留米市 学校給食費補助制度',
    organization: '久留米市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '福岡県',
    tags: ['久留米市', '学校給食', '教育支援'],
    eligibility: '久留米市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度ごとに申請）',
    description: '久留米市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額免除し、多子世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 学校給食費補助制度は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>久留米市は教育環境の充実に力を入れており、子どもたちが安心して学校生活を送れるよう食育の推進にも取り組んでいます。多子世帯の家計負担を軽減することで、子どもを産み育てやすい環境づくりを進めています。</p><p><span class="marker-green">所得制限なしで、すべての多子世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>久留米市立小中学校に在籍する児童生徒のうち、扶養している子どもの中で第3子以降にあたる子どもの保護者が対象です。</p><div class="summary-box" data-title="第3子のカウント方法"><p>保護者が扶養している18歳以下の子どもを年齢順にカウント</p><p>3番目以降の子どもが対象</p><p>市外在住の上の子もカウントに含まれる</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要事項を記入し、<strong>学校経由で提出</strong>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の児童生徒の学校給食費が<strong>全額免除</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円程度の負担軽減となります。</p><p><span class="marker">年度途中の転入・転出の場合は月割り</span>で計算されます。転入時には速やかに学校へ届け出てください。</p><div class="highlight-box">就学援助制度の対象世帯は、第1子・第2子の給食費も別途支給されます。両制度を組み合わせることで、給食費の負担をさらに軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-telework-bonus',
    title: '久留米市 テレワーク環境整備補助金',
    organization: '久留米市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['久留米市', 'テレワーク', '働き方改革'],
    eligibility: '久留米市内に事業所を有する中小企業等',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '久留米市が実施するテレワーク環境整備補助金です。市内中小企業のテレワーク導入にかかる経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 テレワーク環境整備補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する際の経費</span>を補助する制度です。</p><p>久留米市は福岡市へのアクセスが良好でありながら住環境に優れた都市です。テレワークの普及により、久留米市に住みながら福岡市や東京の企業で働くスタイルが広がっており、市内企業のテレワーク対応力の強化を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">新規導入だけでなく、既存環境の拡充も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる経費"><p>テレワーク用PC・タブレット等の端末購入費</p><p>VPN・クラウドサービス等の初期設定費用</p><p>Web会議システムの導入費</p><p>セキュリティ対策ソフトの導入費</p></div><p>久留米市役所商工観光労働部の窓口に申請書と見積書、事業計画書を提出します。</p><p><span class="marker">導入前に申請が必要</span>です。交付決定を受ける前に購入・契約した経費は対象外となりますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業所あたり1回の利用に限られます。</p><p><span class="marker">個人事業主も対象ですが、従業員のいない一人事業者は対象外</span>となる場合があります。</p><div class="note-box">テレワーク用の通信回線の月額利用料や、在宅勤務手当などのランニングコストは対象外です。導入にあたって就業規則の改定が必要な場合は、久留米市の労働相談窓口で無料のアドバイスを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-nursing-home-reform',
    title: '久留米市 高齢者住宅改造助成事業',
    organization: '久留米市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['久留米市', '住宅改造', '介護予防'],
    eligibility: '久留米市に住所を有する要介護・要支援認定を受けた高齢者がいる世帯',
    applicationPeriod: '通年',
    description: '久留米市が実施する高齢者住宅改造助成事業です。介護が必要な高齢者の住宅のバリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 高齢者住宅改造助成事業は、<span class="marker">要介護・要支援認定を受けた高齢者が暮らす住宅のバリアフリー改修</span>に対し、工事費の一部を助成する制度です。</p><p>久留米市は医療機関が充実した地域で、在宅医療・在宅介護の環境整備にも力を入れています。住み慣れた自宅で安全に暮らし続けられるよう、住宅のバリアフリー化を支援しています。</p><p>助成額は対象工事費の一部で、<strong>上限は30万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの取り付け</p><p>段差の解消</p><p>床材の滑り止め加工</p><p>引き戸への変更</p><p>浴室・トイレの改修</p></div><p>久留米市役所長寿支援課に申請書、工事見積書、改修箇所の図面・写真を提出します。担当ケアマネジャーの意見書も必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。事前に市の担当者と工事内容について打ち合わせを行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費から介護保険の給付額を差し引いた額の一部で、<strong>上限30万円</strong>です。世帯の所得に応じて助成率が異なります。</p><p><span class="marker">介護保険の住宅改修費と合わせると、最大50万円の支援</span>を受けることが可能です。</p><div class="note-box">賃貸住宅の場合は家主の承諾書が必要です。新築・増築工事や、美観を目的とした改修は対象外です。1回限りの利用となりますので、ケアマネジャーと相談のうえ必要な改修を計画的に行いましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-energy-support',
    title: '久留米市 省エネ家電買替補助金',
    organization: '久留米市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '福岡県',
    tags: ['久留米市', '省エネ', '生活支援'],
    eligibility: '久留米市に住所を有する世帯',
    applicationPeriod: '毎年6月〜翌年1月頃（予算に達し次第終了）',
    description: '久留米市が実施する省エネ家電買替補助金です。省エネ性能の高いエアコンや冷蔵庫への買替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 省エネ家電買替補助金は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買替え</span>にかかる費用の一部を補助する制度です。</p><p>久留米市は筑後平野に位置し、夏季は全国有数の猛暑地域として知られています。エネルギー価格の高騰が家計を圧迫する中、省エネ家電への買替えを促進することで、光熱費の削減と温室効果ガスの排出削減の両立を図っています。</p><p><span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>久留米市に住民登録がある世帯の世帯主が申請できます。</p><div class="summary-box" data-title="対象製品"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p><p>古い製品からの買替えであること（新規購入は対象外）</p></div><p>久留米市役所環境部の窓口またはオンラインで申請します。購入時のレシート・領収書、製品の型番がわかる書類、<strong>古い製品のリサイクル券の写し</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>エアコン・冷蔵庫それぞれ<strong>1台あたり最大1.5万円</strong>で、1世帯あたり<strong>合計最大3万円</strong>が補助されます。</p><p><span class="marker">市内の販売店で購入した場合は補助額に上乗せがある</span>場合があります。詳細は窓口でご確認ください。</p><div class="highlight-box">買替え前の古い家電は適切にリサイクルする必要があります。家電リサイクル法に基づき、リサイクル料金と収集運搬料金が別途かかりますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-bousai-equipment',
    title: '久留米市 家庭用防災設備購入補助金',
    organization: '久留米市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '福岡県',
    tags: ['久留米市', '防災設備', '水害対策'],
    eligibility: '久留米市内の浸水想定区域に居住する世帯',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '久留米市が実施する家庭用防災設備購入補助金です。浸水想定区域の世帯が防水板や止水パネルなどを設置する費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 家庭用防災設備購入補助金は、<span class="marker">浸水想定区域に居住する世帯が家庭用の防災設備を購入・設置する費用</span>の一部を補助する制度です。</p><p>久留米市は筑後川流域に位置し、過去にたびたび大規模な水害に見舞われてきました。近年もゲリラ豪雨や線状降水帯による浸水被害が発生しており、各家庭での自衛策が重要視されています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">止水板・防水シート・土のう袋・排水ポンプなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>止水板（防水パネル）</p><p>防水シート・防水壁</p><p>家庭用排水ポンプ</p><p>逆流防止弁の設置</p></div><p>久留米市役所防災対策課に申請書と見積書・カタログなどを提出します。浸水想定区域内の住所であることが要件です。</p><p><span class="marker">購入・設置前の事前申請が必要</span>です。交付決定を受けてから購入・設置を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。1世帯あたり1回の利用に限られます。</p><p><span class="marker">久留米市のハザードマップで浸水想定区域に該当するかどうかを事前に確認</span>してください。区域外の場合は対象外となります。</p><div class="note-box">この補助金の対象は家庭用の防災設備に限られ、事業用の設備は対象外です。久留米市ではこのほかにも、自主防災組織への防災資機材の助成や防災訓練への支援も行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大牟田市（福岡県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'omuta-childcare-subsidy',
    title: '大牟田市 子育て応援手当',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '子ども1人あたり最大3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['大牟田市', '子育て支援', '手当'],
    eligibility: '大牟田市に住所を有し、小学校就学前の子どもを養育している保護者',
    applicationPeriod: '通年',
    description: '大牟田市が実施する子育て応援手当です。就学前の子どもを養育する低所得世帯に子ども1人あたり最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 子育て応援手当は、<span class="marker">小学校就学前の子どもを養育する低所得世帯</span>に対し、子育てにかかる費用を補助するための手当を支給する制度です。</p><p>大牟田市は三池炭鉱で栄えた歴史を持ち、世界文化遺産「明治日本の産業革命遺産」の構成資産を有する街です。炭鉱閉山後の人口減少に歯止めをかけるべく、子育て世帯への支援を充実させています。</p><p><span class="marker-green">住民税非課税世帯およびそれに準ずる世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大牟田市に住民登録があり、小学校就学前の子どもを養育している保護者で、世帯が住民税非課税またはそれに準ずる所得の方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市から送付または窓口配布）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p><p>所得を証明する書類（必要に応じて）</p></div><p>大牟田市役所子ども家庭課の窓口で申請を受け付けています。<strong>該当する方には市から個別に案内</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>子ども1人あたり3万円</strong>が支給されます。年度内に1回の支給です。</p><p><span class="marker">申請期限は年度末までですが、早めの手続きが推奨</span>されます。期限を過ぎると受給できません。</p><div class="note-box">生活保護世帯はこの手当と併給可能です。他の自治体から同種の手当を受給している場合は対象外となることがありますので、転入前に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-birth-bonus',
    title: '大牟田市 出産祝い金',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['大牟田市', '出産祝い金', '子育て支援'],
    eligibility: '大牟田市に住所を有し、子どもが出生した世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '大牟田市が実施する出産祝い金制度です。出産した世帯に第1子5万円、第2子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 出産祝い金は、<span class="marker">子どもが生まれた世帯</span>に対し、出産を祝い子育てを応援する祝い金を支給する制度です。</p><p>かつて日本最大の炭鉱都市として20万人以上の人口を誇った大牟田市は、現在も「有明の月」と称される美しい夕日と世界遺産・三池炭鉱関連施設で知られています。少子化対策として第1子から手厚い出産祝い金を設けています。</p><p>支給額は<strong>第1子5万円、第2子以降は10万円</strong>です。<span class="marker-green">所得制限はなく、すべての世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大牟田市に住民登録があり、子どもが出生した世帯の保護者が対象です。出生日に大牟田市に住民登録があることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出生届の受理証明書または母子手帳</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>大牟田市役所子ども家庭課の窓口で申請します。<strong>出生届と同時に手続きするのがスムーズ</strong>です。郵送での申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子：5万円、第2子以降：10万円</strong>が支給されます。双子以上の場合はそれぞれの子どもについて支給されます。</p><p><span class="marker">生後6か月以内に申請しないと受給資格を失います</span>ので、早めの手続きをお願いします。</p><div class="highlight-box">大牟田市では出産祝い金のほか、産後ケア事業（宿泊型・日帰り型）や子育て支援センターでの育児相談も充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-housing-purchase',
    title: '大牟田市 定住促進住宅取得奨励金',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['大牟田市', '住宅取得', '定住促進'],
    eligibility: '大牟田市内に住宅を取得して新たに定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大牟田市が実施する定住促進住宅取得奨励金です。市内への定住を目的とした住宅取得に最大50万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 定住促進住宅取得奨励金は、<span class="marker">市内に住宅を新築または購入して定住する方</span>に対し、奨励金を支給する制度です。</p><p>大牟田市は有明海に面した温暖な気候の街で、世界遺産・三池炭鉱の歴史遺産や動物園「大牟田市動物園」が市民に親しまれています。人口減少への対策として、市外からの転入者を中心に住宅取得支援を行っています。</p><p>基本奨励金は30万円で、<strong>子育て世帯や市外転入者には加算</strong>があります。<span class="marker-green">最大50万円の奨励金を受けることが可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>大牟田市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p><p>過去にこの奨励金を受けていないこと</p></div><p>大牟田市役所都市整備部住宅課に申請書と必要書類を提出します。売買契約書、登記事項証明書、住民票などが求められます。</p><p><span class="marker">住宅取得後1年以内に申請する必要</span>があります。取得前の事前相談も歓迎されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本奨励金<strong>30万円</strong>に加え、子育て世帯加算10万円、市外からの転入加算10万円で<strong>最大50万円</strong>です。</p><p><span class="marker">5年以内に市外へ転出した場合は奨励金の返還</span>が求められます。定住を前提とした制度です。</p><div class="note-box">投資用物件や別荘の取得は対象外です。中古住宅の取得も対象ですが、親族間の売買は対象外となる場合があります。住宅ローン減税との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-infertility',
    title: '大牟田市 不妊治療費助成事業',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '1回あたり最大5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['大牟田市', '不妊治療', '助成金'],
    eligibility: '大牟田市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内に申請）',
    description: '大牟田市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して1回あたり最大5万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担</span>を軽減するため、治療費の一部を助成する制度です。</p><p>大牟田市では少子化対策の一環として、子どもを望む夫婦への支援を充実させています。2022年の保険適用拡大後も自己負担が残る治療に対し、市独自の上乗せ助成を行っています。</p><p><span class="marker-green">保険適用の生殖補助医療（体外受精・顕微授精）の自己負担分が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大牟田市に住民登録がある法律上の夫婦またはパートナーで、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関発行の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p><p>健康保険証の写し</p></div><p>大牟田市保健センターの窓口に申請書類を提出します。<strong>治療終了後6か月以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対して、<strong>1回の治療あたり最大5万円</strong>を助成します。年度内の回数制限がありますので事前にご確認ください。</p><p><span class="marker">福岡県の不妊治療費助成制度との併用が可能</span>ですが、助成額の合計が実際の自己負担額を超えることはできません。</p><div class="note-box">不妊検査費用の助成は別制度として設けられている場合があります。まずは大牟田市保健センターに相談し、利用できる制度を確認することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-scholarship',
    title: '大牟田市 奨学金制度',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '月額最大3万円（高校）・5万円（大学）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '福岡県',
    tags: ['大牟田市', '奨学金', '教育支援'],
    eligibility: '大牟田市に住所を有する高校生・大学生等で、経済的に就学困難な方',
    applicationPeriod: '毎年3月〜4月頃',
    description: '大牟田市が実施する奨学金制度です。経済的理由で就学困難な高校生・大学生等に月額最大5万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 奨学金制度は、<span class="marker">経済的な理由で就学が困難な高校生・大学生等</span>に対し、学資を貸与する制度です。</p><p>大牟田市は教育の機会均等の理念のもと、向学心がありながら経済的事情で進学が困難な若者を支援しています。石炭産業の歴史を持つ大牟田市では、次世代の人材育成を重要な施策として位置づけています。</p><p>貸与額は高校生が月額最大3万円、大学生等が<strong>月額最大5万円</strong>です。<span class="marker-green">無利子での貸与</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大牟田市に住民登録がある保護者の子であること</p><p>高校・大学・短大・専門学校等に在籍または進学予定であること</p><p>学業成績が良好であること</p><p>経済的に就学困難であること（所得基準あり）</p></div><p>大牟田市教育委員会学校教育課に申請書と成績証明書、所得証明書などを提出します。</p><p><span class="marker">申請期間は毎年3月〜4月頃で、選考により決定</span>されます。期日を過ぎないようご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額貸与額は<strong>高校生：最大3万円、大学生等：最大5万円</strong>です。卒業後に返還の義務があります。</p><p><span class="marker">卒業後1年間の据置期間の後、10年以内に月賦で返還</span>します。経済的に返還が困難な場合は猶予制度もあります。</p><div class="highlight-box">日本学生支援機構の奨学金との併用も可能ですが、返還時の負担を考慮して計画的に利用しましょう。大牟田市では奨学金の返還に関する相談も受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-sme-support',
    title: '大牟田市 中小企業振興補助金',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['大牟田市', '中小企業', '振興補助'],
    eligibility: '大牟田市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜10月頃（予算に達し次第終了）',
    description: '大牟田市が実施する中小企業振興補助金です。市内中小企業の新分野進出や販路開拓にかかる経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 中小企業振興補助金は、<span class="marker">市内の中小企業が取り組む新分野進出や販路開拓</span>にかかる経費を補助する制度です。</p><p>大牟田市は石炭産業から環境・リサイクル産業への転換を進めてきた実績を持ち、エコタウン事業の先進地として知られています。この補助金は、地域の中小企業がさらなる事業展開を図るための後押しとして活用されています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">環境関連分野への進出は補助率が優遇</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる事業"><p>新製品・新技術の開発</p><p>新たな販路の開拓（展示会出展等）</p><p>新分野への事業進出</p><p>生産性向上のための設備投資</p></div><p>大牟田市役所産業経済部商工労政課に事業計画書と申請書を提出します。審査会による審査が行われます。</p><p><span class="marker">事業開始前の申請が必須</span>です。交付決定前に着手した事業は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。展示会出展費、広告宣伝費、外注加工費、設備購入費などが対象です。</p><p><span class="marker">事業完了後に実績報告書の提出が必要</span>で、報告内容に基づいて補助金額が確定します。</p><div class="note-box">人件費やランニングコストは対象外です。大牟田市では商工会議所と連携した経営相談も行っていますので、事業計画の策定段階から活用することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-nursing-equipment',
    title: '大牟田市 介護用品支給事業',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['大牟田市', '介護用品', '在宅介護'],
    eligibility: '大牟田市に住所を有する要介護3以上の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '大牟田市が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 介護用品支給事業は、<span class="marker">在宅で要介護3以上の高齢者を介護している家族</span>に対し、紙おむつなどの介護用品を支給する制度です。</p><p>大牟田市は「認知症ケアのまち」として全国的に知られ、認知症当事者とその家族を地域全体で支える先進的な取り組みを行っています。この制度も在宅介護を支える重要な柱の一つです。</p><p><span class="marker-green">世帯全員が市民税非課税であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大牟田市に住民登録がある在宅の要介護3〜5の高齢者を介護している同居家族で、世帯全員が市民税非課税の方が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（各種タイプ）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭用品</p></div><p>大牟田市役所高齢者支援課の窓口で申請します。介護保険被保険者証と<strong>担当ケアマネジャーの確認書</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額6,250円相当</strong>の介護用品が支給されます。カタログから必要な用品を選択でき、自宅に配送されます。</p><p><span class="marker">入院中や介護施設に入所中の方は対象外</span>です。在宅での介護が支給条件です。</p><div class="highlight-box">大牟田市は「認知症SOSネットワーク」など、認知症高齢者を地域で見守る仕組みも整備しています。介護に関する相談は地域包括支援センターへお気軽にどうぞ。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-elderly-support',
    title: '大牟田市 高齢者外出支援事業',
    organization: '大牟田市',
    type: 'local',
    maxAmount: 'タクシー券年間最大12,000円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '福岡県',
    tags: ['大牟田市', '高齢者支援', '外出支援'],
    eligibility: '大牟田市に住所を有する75歳以上で公共交通の利用が困難な方',
    applicationPeriod: '通年',
    description: '大牟田市が実施する高齢者外出支援事業です。公共交通の利用が困難な高齢者にタクシー券を年間最大12,000円分交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 高齢者外出支援事業は、<span class="marker">75歳以上で公共交通機関の利用が困難な高齢者</span>に対し、タクシー利用券を交付して外出を支援する制度です。</p><p>大牟田市は南北に長い市域を有し、炭鉱住宅が点在する丘陵部など公共交通が不便な地域もあります。高齢者が通院や買い物などの日常生活に必要な外出を安心して行えるよう、タクシー券を交付しています。</p><p><span class="marker-green">自動車運転免許を持たない方（返納した方を含む）が優先</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大牟田市に住民登録がある75歳以上の方で、自ら公共交通機関を利用することが困難な方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書</p><p>本人確認書類</p><p>運転免許返納証明書（該当者のみ）</p></div><p>大牟田市役所高齢者支援課または各地区公民館の窓口で申請できます。<strong>申請後、タクシー利用券が交付</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>年間最大12,000円分</strong>のタクシー利用券が交付されます。1回の乗車につき500円券を複数枚使用できます。</p><p><span class="marker">利用できるのは大牟田市内のタクシー事業者に限られます</span>。利用券には有効期限がありますので期限内にお使いください。</p><div class="note-box">介護タクシーの利用には別途介護保険制度の利用が必要です。この事業は通常のタクシー利用が対象です。障がいのある方向けの移動支援事業も別途設けられています。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-seismic-diagnosis',
    title: '大牟田市 木造住宅耐震診断補助事業',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '診断費用の自己負担5,000円のみ',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '福岡県',
    tags: ['大牟田市', '耐震診断', '防災'],
    eligibility: '大牟田市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜11月頃（予定戸数に達し次第終了）',
    description: '大牟田市が実施する木造住宅耐震診断補助事業です。旧耐震基準の木造住宅の耐震診断を自己負担5,000円で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 木造住宅耐震診断補助事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を市が補助する制度です。</p><p>大牟田市は比較的地震が少ない地域とされていますが、2016年の熊本地震では震度5弱を観測し、建物被害も発生しました。いつ起きるかわからない大地震に備え、住宅の耐震性を確認することの重要性が高まっています。</p><p><span class="marker-green">市が認定する耐震診断士による専門的な診断</span>を受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>大牟田市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の戸建て住宅であること</p><p>過去にこの制度で耐震診断を受けていないこと</p></div><p>大牟田市役所都市整備部建築住宅課に申込書を提出します。申込み後、市が耐震診断士を派遣します。</p><p><span class="marker">年間の予定戸数に限りがあるため、早めの申込みをおすすめ</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち、<strong>自己負担は5,000円のみ</strong>です。残りの費用は市が負担します。</p><p><span class="marker">診断で耐震性が不足と判定された場合は、耐震改修工事の補助制度</span>を利用できます（別途申請が必要）。</p><div class="note-box">診断結果が出るまでに通常2〜3週間程度かかります。鉄骨造や鉄筋コンクリート造の住宅は対象外です。併用住宅（店舗兼住宅等）の場合は、居住部分の面積が過半であることが条件です。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 佐世保市（長崎県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'sasebo-childcare-subsidy',
    title: '佐世保市 子育て世帯応援給付金',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['佐世保市', '子育て支援', '給付金'],
    eligibility: '佐世保市に住所を有する低所得の子育て世帯',
    applicationPeriod: '通年（対象者へ案内送付）',
    description: '佐世保市が実施する子育て世帯応援給付金です。低所得の子育て世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 子育て世帯応援給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金を支給する制度です。</p><p>長崎県北部に位置する佐世保市は、佐世保港を中心に発展した港町で、ハウステンボスや九十九島など観光資源にも恵まれています。自衛隊や米軍基地が所在する独特の都市構造を持ちながら、子育て支援の充実にも注力しています。</p><p><span class="marker-green">児童扶養手当受給世帯は申請不要で自動的に支給</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐世保市に住民登録があり、18歳未満の子どもを養育する住民税非課税世帯または家計急変世帯が対象です。</p><div class="summary-box" data-title="申請区分"><p>児童扶養手当受給者：プッシュ型（申請不要）</p><p>住民税非課税のひとり親世帯：簡易申請</p><p>家計急変世帯：収入申立書による申請</p></div><p>佐世保市役所子ども未来部の窓口で申請できます。<strong>対象となる可能性のある方には市から案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>子ども1人あたり5万円</strong>が支給されます。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変の場合は直近の収入を証明する書類</span>（給与明細、離職票等）が必要です。</p><div class="note-box">国の同種の給付金と重複受給はできません。既に受給済みの場合はご注意ください。生活保護受給世帯も本給付金の対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-birth-bonus',
    title: '佐世保市 出産・子育て応援給付金',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '合計10万円（出産応援5万円＋子育て応援5万円）',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['佐世保市', '出産応援', '子育て応援'],
    eligibility: '佐世保市に住所を有する妊婦および出生した子どもの養育者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '佐世保市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生後に5万円の計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>佐世保市は九十九島の美しい景観に恵まれた長崎県第2の都市です。伴走型相談支援と経済的支援を一体的に実施し、妊娠期から子育て期まで切れ目のない支援体制を構築しています。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・子育て世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐世保市に住民登録がある妊婦（出産応援）および出生した子どもの養育者（子育て応援）が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>妊娠届出時：保健師との面談後、出産応援給付金5万円を申請</p><p>出生届出後：こんにちは赤ちゃん訪問時に子育て応援給付金5万円を申請</p></div><p>佐世保市役所子ども保健課または各支所で手続きできます。<strong>面談を受けることが支給の条件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>です。多胎の場合、子育て応援給付金は子どもの人数分支給されます。</p><p><span class="marker">面談を受けずに申請のみを行っても支給されません</span>。必ず保健師等との面談を受けてください。</p><div class="highlight-box">佐世保市では産後ケア事業（宿泊型・日帰り型・訪問型）も実施しています。面談時に産後の不安や悩みを相談でき、必要な支援につないでもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-newlywed-rent',
    title: '佐世保市 結婚新生活支援事業',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '長崎県',
    tags: ['佐世保市', '新婚支援', '家賃補助'],
    eligibility: '佐世保市内で新生活を始める新婚世帯（夫婦ともに39歳以下）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '佐世保市が実施する結婚新生活支援事業です。新婚世帯の住居費・引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 結婚新生活支援事業は、<span class="marker">市内で新生活を始める新婚世帯</span>に対し、住居費（家賃や住宅購入費）と引越し費用を補助する制度です。</p><p>佐世保市は佐世保バーガーや九十九島せんぺいなど独自の食文化でも知られる港町です。結婚を機に佐世保市で新生活を始める若い世帯を経済的に支援し、人口の定着と地域の活力向上を目指しています。</p><p>補助上限は夫婦ともに29歳以下の場合は<strong>60万円</strong>、それ以外は<strong>30万円</strong>です。<span class="marker-green">世帯所得が500万円未満であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届を提出して1年以内であること</p><p>夫婦ともに39歳以下であること</p><p>世帯の合計所得が500万円未満であること</p><p>佐世保市内に居住していること</p></div><p>佐世保市役所企画部地域政策課に申請書、婚姻届受理証明書、住居にかかる費用の領収書などを提出します。</p><p><span class="marker">対象となる費用は婚姻届の前後1年以内に支払ったもの</span>に限られます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下の場合は<strong>上限60万円</strong>、30〜39歳の場合は<strong>上限30万円</strong>です。住居費（家賃・敷金・礼金・住宅購入費）と引越し費用が対象です。</p><p><span class="marker">公営住宅への入居や親族が所有する物件への入居は対象外</span>です。</p><div class="note-box">勤務先から住居手当が支給されている場合は、その分を差し引いた額が補助対象となります。同一年度内に他の自治体で同種の補助を受けている場合は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-disability-medical',
    title: '佐世保市 重度障がい者医療費助成制度',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '医療費自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '長崎県',
    tags: ['佐世保市', '障がい者医療', '助成金'],
    eligibility: '佐世保市に住所を有する重度の障がいのある方',
    applicationPeriod: '通年',
    description: '佐世保市が実施する重度障がい者医療費助成制度です。重度の障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 重度障がい者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A判定、精神障害者保健福祉手帳1級</span>などの重度の障がいのある方を対象に、医療費の自己負担分を助成する制度です。</p><p>佐世保市は長崎県北部の中核市として、医療・福祉の拠点機能を担っています。障がいのある方が必要な医療を安心して受けられるよう、経済的負担の軽減に取り組んでいます。</p><p><span class="marker-green">通院・入院・調剤のいずれも助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐世保市に住民登録があり、健康保険に加入している以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい"><p>身体障害者手帳1級・2級</p><p>療育手帳A判定（重度）</p><p>精神障害者保健福祉手帳1級</p><p>特別児童扶養手当1級に該当する障がい</p></div><p>佐世保市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>本人名義の口座情報</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が助成</strong>されます。長崎県内の医療機関では福祉医療費受給資格者証の提示で窓口負担が軽減されます。</p><p><span class="marker">一定以上の所得がある場合は対象外</span>となります。所得制限の基準は扶養人数等によって異なります。</p><div class="note-box">入院時の食事療養費や差額ベッド代は助成対象外です。県外の医療機関で受診した場合は、償還払いの手続きが必要となります。領収書は必ず保管してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-school-lunch',
    title: '佐世保市 学校給食費無償化事業',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額無償',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '長崎県',
    tags: ['佐世保市', '学校給食', '無償化'],
    eligibility: '佐世保市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度ごとに届出）',
    description: '佐世保市が実施する学校給食費無償化事業です。第3子以降の児童生徒の給食費を全額無償化し、多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 学校給食費無償化事業は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額無償化する制度です。</p><p>佐世保市は長崎県北部の中心都市で、佐世保港に面した坂の多い美しい街並みが特徴です。多子世帯の教育費負担を軽減し、安心して子育てできる環境づくりの一環として給食費の無償化を実施しています。</p><p><span class="marker-green">所得制限なしで、すべての多子世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐世保市立小中学校に在籍する児童生徒のうち、保護者が扶養する子どもの中で第3子以降にあたる子どもが対象です。</p><div class="summary-box" data-title="第3子のカウント方法"><p>保護者が扶養する18歳以下の子どもを年齢順にカウント</p><p>3番目以降の子どもが対象</p><p>私立学校に通う上の子もカウントに含まれる</p></div><p>毎年4月に学校を通じて案内が配布されます。届出書に必要事項を記入し、<strong>学校へ提出</strong>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の児童生徒の学校給食費が<strong>全額無償</strong>となります。年間約5万円前後の負担軽減です。</p><p><span class="marker">年度途中の転入・転出の場合は月割り</span>で適用されます。転入時は速やかに学校へ届け出てください。</p><div class="highlight-box">就学援助制度の対象世帯は、第1子・第2子の給食費も別途支給されます。制度を組み合わせることで、給食費の負担をさらに軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-telework-bonus',
    title: '佐世保市 テレワーク移住支援補助金',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '長崎県',
    tags: ['佐世保市', 'テレワーク', '移住支援'],
    eligibility: 'テレワークで仕事を続けながら佐世保市に移住した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '佐世保市が実施するテレワーク移住支援補助金です。テレワーク移住者のコワーキングスペース利用料等を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 テレワーク移住支援補助金は、<span class="marker">テレワークで現在の仕事を続けながら佐世保市に移住した方</span>に対し、テレワーク環境の整備にかかる費用を補助する制度です。</p><p>佐世保市は九十九島の絶景や温泉、新鮮な海の幸に恵まれた魅力的な街です。都市機能と自然環境のバランスが良く、ワーケーションの拠点としても注目されています。場所にとらわれない働き方をする方の移住を積極的に受け入れています。</p><p>補助額は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">コワーキングスペース利用料、通信環境整備費、住居費の一部が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>佐世保市外から転入して1年以内であること</p><p>テレワークにより市外の企業の業務を行っていること</p><p>佐世保市に3年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>佐世保市役所地域政策課に申請書、テレワークを証明する書類（雇用証明書等）、対象経費の領収書などを提出します。</p><p><span class="marker">転入後1年以内に申請する必要</span>があります。事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。コワーキングスペース利用料、インターネット回線工事費、デスク等の購入費が対象です。</p><p><span class="marker">3年以内に佐世保市から転出した場合は補助金の返還</span>が求められます。</p><div class="note-box">フリーランスの方も、一定の収入を証明できれば対象となる場合があります。佐世保市では移住体験プログラムも実施しているので、移住前に試しに滞在してみることも可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-nursing-home-reform',
    title: '佐世保市 高齢者住宅改造助成事業',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '長崎県',
    tags: ['佐世保市', '住宅改造', '介護支援'],
    eligibility: '佐世保市に住所を有する要介護・要支援認定を受けた高齢者がいる世帯',
    applicationPeriod: '通年',
    description: '佐世保市が実施する高齢者住宅改造助成事業です。介護が必要な高齢者の住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 高齢者住宅改造助成事業は、<span class="marker">要介護・要支援認定を受けた高齢者が暮らす住宅のバリアフリー改修</span>に対し、費用の一部を助成する制度です。</p><p>佐世保市は坂道が多い地形で、高齢者の移動や生活動作に困難を伴うケースが少なくありません。住み慣れた自宅で安全に暮らし続けられるよう、手すりの設置や段差解消などの住宅改造を支援しています。</p><p>助成額の上限は<strong>30万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの取り付け</p><p>段差の解消・スロープ設置</p><p>床材の変更（滑り止め）</p><p>引き戸への交換</p><p>浴室・トイレの改修</p></div><p>佐世保市役所長寿社会課に申請書、工事見積書、改修図面、写真を提出します。担当ケアマネジャーの理由書も必要です。</p><p><span class="marker">工事着手前に必ず申請し、交付決定を受けてから着工</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。世帯の課税状況に応じて助成率が異なります。</p><p><span class="marker">介護保険の住宅改修費と合わせると、最大50万円の支援</span>が可能です。</p><div class="note-box">賃貸住宅の場合は家主の承諾書が必要です。新築工事や美観向上を目的とした改修は対象外です。ケアマネジャーと相談のうえ、生活に本当に必要な改修を計画しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-energy-support',
    title: '佐世保市 省エネルギー設備導入補助金',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '長崎県',
    tags: ['佐世保市', '省エネ', '太陽光'],
    eligibility: '佐世保市に住所を有する世帯で、住宅に省エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '佐世保市が実施する省エネルギー設備導入補助金です。住宅用太陽光発電システムや蓄電池の導入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 省エネルギー設備導入補助金は、<span class="marker">住宅に太陽光発電システムや蓄電池などの省エネルギー設備を導入する世帯</span>に対し、設置費用の一部を補助する制度です。</p><p>佐世保市は日照条件に恵まれた地域で、太陽光発電の導入に適しています。エネルギー価格の上昇対策と温室効果ガスの削減を両立するため、家庭での再生可能エネルギーの利用を推進しています。</p><p><span class="marker-green">太陽光発電と蓄電池の同時導入で補助額が加算</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限7万円）</p><p>家庭用蓄電池：一律3万円</p><p>合計上限10万円</p></div><p>佐世保市役所環境部の窓口に申請書と見積書、設備の仕様書を提出します。</p><p><span class="marker">設備の設置工事着手前に申請が必要</span>です。交付決定前に工事に着手した場合は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>太陽光発電と蓄電池の同時導入で<strong>最大10万円</strong>の補助が受けられます。太陽光発電のみの場合は上限7万円です。</p><p><span class="marker">設置後に実績報告書の提出が必要</span>で、設置完了を確認したうえで補助金が交付されます。</p><div class="highlight-box">国や長崎県の補助制度との併用が可能な場合があります。複数の補助制度を活用することで、初期費用をさらに抑えることができます。設置業者にも相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-bousai-equipment',
    title: '佐世保市 自主防災組織資機材購入補助金',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '1組織あたり最大20万円',
    maxAmountNum: 20,
    category: 'disaster',
    prefecture: '長崎県',
    tags: ['佐世保市', '防災資機材', '自主防災'],
    eligibility: '佐世保市内の自主防災組織',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '佐世保市が実施する自主防災組織資機材購入補助金です。自主防災組織の防災資機材購入費を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 自主防災組織資機材購入補助金は、<span class="marker">市内の自主防災組織が防災活動に必要な資機材を購入する費用</span>の一部を補助する制度です。</p><p>佐世保市は急傾斜地が多く、台風や豪雨による土砂災害のリスクを抱えています。地域住民による自主的な防災活動を支援し、「自助・共助」の体制づくりを推進しています。</p><p>補助率は対象経費の3分の2以内で、<strong>1組織あたり上限20万円</strong>です。<span class="marker-green">新規結成の組織には初期整備費として増額</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる資機材"><p>発電機・投光器</p><p>救助用工具セット（バール、ジャッキ等）</p><p>担架・救急箱</p><p>防災倉庫</p><p>ヘルメット・防災ベスト</p></div><p>佐世保市役所防災危機管理局に申請書と見積書を提出します。自主防災組織としての届出が事前に必要です。</p><p><span class="marker">購入前に申請し、交付決定を受けてから購入</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>1組織あたり上限20万円</strong>です。1組織につき年度内1回の申請に限られます。</p><p><span class="marker">購入した資機材は適切に管理・保管し、防災訓練や災害時に使用</span>することが求められます。</p><div class="note-box">個人での申請はできません。町内会や自治会単位で自主防災組織を結成し、市に届出を行ったうえで申請してください。組織の結成については防災危機管理局で相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 別府市（大分県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'beppu-childcare-subsidy',
    title: '別府市 子育て世帯生活支援給付金',
    organization: '別府市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '大分県',
    tags: ['別府市', '子育て支援', '給付金'],
    eligibility: '別府市に住所を有する低所得の子育て世帯',
    applicationPeriod: '通年（対象者へ案内送付）',
    description: '別府市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 子育て世帯生活支援給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、生活の安定を図るための給付金を支給する制度です。</p><p>「おんせん県おおいた」を代表する温泉都市・別府市は、源泉数・湧出量ともに日本一を誇ります。温泉観光業で栄える一方、サービス業中心の産業構造から子育て世帯への経済的支援ニーズも高く、きめ細かな支援を行っています。</p><p><span class="marker-green">児童扶養手当受給世帯はプッシュ型で申請不要</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>別府市に住民登録があり、18歳未満の子どもを養育する住民税非課税世帯または家計急変世帯が対象です。</p><div class="summary-box" data-title="申請区分"><p>児童扶養手当受給者：申請不要（自動支給）</p><p>住民税非課税のひとり親世帯：簡易申請</p><p>家計急変世帯：収入申立書による申請</p></div><p>別府市役所子育て支援課の窓口で申請を受け付けています。<strong>対象となる方には個別に案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>子ども1人あたり5万円</strong>が支給されます。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変を理由に申請する場合は、収入減少を証明する書類</span>が必要です。</p><div class="note-box">国の同種の給付金と重複受給はできません。申請期限を過ぎると受給できなくなりますので、案内が届いたら早めの手続きをお願いします。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-birth-bonus',
    title: '別府市 出産・子育て応援給付金',
    organization: '別府市',
    type: 'local',
    maxAmount: '合計10万円（出産応援5万円＋子育て応援5万円）',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大分県',
    tags: ['別府市', '出産応援', '子育て応援'],
    eligibility: '別府市に住所を有する妊婦および出生した子どもの養育者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '別府市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生後に5万円の計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>別府市は「地獄めぐり」で知られる世界有数の温泉リゾート地であり、留学生の受入れも多い国際色豊かな街です。伴走型相談支援と経済的支援を一体的に提供し、すべての妊婦・子育て世帯を支えています。</p><p><span class="marker-green">所得制限なしで、すべての対象者が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>別府市に住民登録がある妊婦（出産応援）および出生した子どもの養育者（子育て応援）が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>妊娠届出時：保健師との面談後、出産応援給付金5万円を申請</p><p>出生届出後：赤ちゃん訪問時に子育て応援給付金5万円を申請</p></div><p>別府市役所健康づくり推進課で手続きできます。<strong>保健師等との面談が支給の条件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>合計10万円</strong>（出産応援5万円＋子育て応援5万円）が支給されます。多胎の場合は子育て応援給付金が子どもの人数分です。</p><p><span class="marker">面談を受けることが必須条件</span>です。面談なしでの申請では支給されません。</p><div class="highlight-box">別府市では産後ケア事業や子育て短期支援事業（ショートステイ）も実施しています。面談時に利用可能な支援サービスの案内を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-housing-purchase',
    title: '別府市 移住者住宅取得支援補助金',
    organization: '別府市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '大分県',
    tags: ['別府市', '住宅取得', '移住支援'],
    eligibility: '市外から別府市に移住し、住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '別府市が実施する移住者住宅取得支援補助金です。市外から移住し住宅を取得する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 移住者住宅取得支援補助金は、<span class="marker">市外から別府市に移住し、新たに住宅を取得する方</span>に対し、住宅取得費用の一部を補助する制度です。</p><p>別府市は温泉の恵みに加え、山と海に囲まれた温暖な気候が魅力の都市です。立命館アジア太平洋大学（APU）の開学により国際性も高まり、移住先として全国から注目されています。新築・中古住宅の購入どちらも対象です。</p><p>基本補助額は30万円で、<strong>子育て世帯には加算</strong>があります。<span class="marker-green">最大50万円まで補助を受けることが可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>別府市外から転入して住宅を取得すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>別府市役所企画戦略部に申請書、売買契約書の写し、登記事項証明書、住民票などを提出します。</p><p><span class="marker">住宅取得後1年以内に申請が必要</span>です。移住前の事前相談も歓迎しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額<strong>30万円</strong>に、子育て世帯加算（子ども1人あたり10万円、上限20万円）で<strong>最大50万円</strong>です。</p><p><span class="marker">5年以内に別府市から転出した場合は補助金の返還</span>が求められます。長期的な定住を前提とした制度です。</p><div class="note-box">投資用物件や別荘の取得は対象外です。中古住宅の場合でも対象となりますが、親族間の売買は対象外です。住宅ローン減税や大分県の移住支援金との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-infertility',
    title: '別府市 不妊治療費助成事業',
    organization: '別府市',
    type: 'local',
    maxAmount: '1回あたり最大5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '大分県',
    tags: ['別府市', '不妊治療', '助成金'],
    eligibility: '別府市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内に申請）',
    description: '別府市が実施する不妊治療費助成事業です。不妊治療の自己負担額に対して1回あたり最大5万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担</span>を軽減するため、治療費の一部を助成する制度です。</p><p>別府市は古くから「子宝の湯」として温泉の効能が信じられてきた土地柄です。現代の医療技術と組み合わせた支援として、不妊治療にかかる自己負担額の軽減に取り組んでいます。</p><p><span class="marker-green">保険適用の体外受精・顕微授精の自己負担分が主な助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>別府市に住民登録がある法律上の夫婦またはパートナーで、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関発行の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p><p>健康保険証の写し</p></div><p>別府市保健センターの窓口に書類を提出します。<strong>治療終了後6か月以内</strong>の申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対して、<strong>1回の治療あたり最大5万円</strong>を助成します。年度内の回数に制限がある場合があります。</p><p><span class="marker">大分県の不妊治療費助成制度との併用が可能</span>ですが、助成額合計が自己負担額を超えることはできません。</p><div class="highlight-box">別府市では不妊に関する相談窓口も設けています。治療への不安や精神的な負担を感じたら、専門の相談員に気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-scholarship',
    title: '別府市 給付型奨学金制度',
    organization: '別府市',
    type: 'local',
    maxAmount: '月額最大2万円',
    maxAmountNum: 2,
    category: 'education',
    prefecture: '大分県',
    tags: ['別府市', '奨学金', '教育支援'],
    eligibility: '別府市に住所を有する高校生・大学生等で、経済的に就学困難な方',
    applicationPeriod: '毎年3月〜4月頃',
    description: '別府市が実施する給付型奨学金制度です。経済的に就学困難な高校生・大学生等に月額最大2万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 給付型奨学金制度は、<span class="marker">経済的な理由で就学が困難な高校生・大学生等</span>に対し、返還不要の奨学金を給付する制度です。</p><p>別府市は立命館アジア太平洋大学（APU）をはじめとする高等教育機関が立地し、教育環境が充実しています。経済的事情にかかわらず教育の機会を確保するため、返還義務のない給付型奨学金を設けています。</p><p>給付額は月額最大2万円で、<strong>返還の必要はありません</strong>。<span class="marker-green">成績要件と所得要件の両方を満たす必要</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>別府市に住民登録がある保護者の子であること</p><p>高校・大学・短大・専門学校等に在籍または進学予定であること</p><p>学業成績が優秀であること</p><p>世帯の所得が基準額以下であること</p></div><p>別府市教育委員会教育政策課に申請書、成績証明書、所得証明書などを提出します。</p><p><span class="marker">選考により奨学生が決定され、人数に限りがあります</span>。早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>高校生：1万円、大学生等：2万円</strong>が給付されます。返還の必要はありません。</p><p><span class="marker">年度ごとに継続審査があり、成績が基準を下回った場合は給付が停止</span>されることがあります。</p><div class="note-box">日本学生支援機構の奨学金との併用も可能です。別府市ではこのほかにも入学準備金の貸付制度も用意していますので、必要に応じてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-sme-support',
    title: '別府市 中小企業経営革新補助金',
    organization: '別府市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '大分県',
    tags: ['別府市', '中小企業', '経営革新'],
    eligibility: '別府市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜10月頃（予算に達し次第終了）',
    description: '別府市が実施する中小企業経営革新補助金です。市内中小企業の新事業展開や業態転換にかかる経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 中小企業経営革新補助金は、<span class="marker">市内の中小企業が取り組む経営革新や新事業展開</span>にかかる経費を補助する制度です。</p><p>別府市は温泉を核とした観光業が基幹産業ですが、宿泊業・飲食業以外にも温泉熱を利用した農業やコスメ産業など、温泉資源を活かした新事業が生まれています。地域の中小企業がさらなる経営革新に挑戦するための後押しをしています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">温泉資源を活用した事業は審査で加点</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる事業"><p>新商品・新サービスの開発</p><p>新たな販路の開拓（展示会出展等）</p><p>業態転換・事業多角化</p><p>デジタル化・DXの推進</p></div><p>別府市役所産業政策課に事業計画書と申請書を提出します。審査委員会による審査で採否が決定されます。</p><p><span class="marker">事業開始前の申請が必須</span>です。交付決定前に着手した事業は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。広告宣伝費、外注費、設備購入費、展示会出展費などが対象です。</p><p><span class="marker">事業完了後に実績報告書を提出し、検査を受ける必要</span>があります。</p><div class="highlight-box">別府市商工会議所と連携した経営相談サービスも利用できます。事業計画の策定段階から専門家のアドバイスを受けることで、より実効性の高い計画を立てましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-nursing-equipment',
    title: '別府市 介護用品支給事業',
    organization: '別府市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '大分県',
    tags: ['別府市', '介護用品', '在宅介護'],
    eligibility: '別府市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '別府市が実施する介護用品支給事業です。在宅で要介護高齢者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 介護用品支給事業は、<span class="marker">在宅で要介護4または5の高齢者を介護している家族</span>に対し、紙おむつなどの介護用品を支給する制度です。</p><p>温泉と共に暮らす別府市では、温泉のバリアフリー化など高齢者に優しいまちづくりが進んでいます。在宅介護を続ける家族の負担軽減も重要な施策の一つで、消耗品である介護用品の現物支給を行っています。</p><p><span class="marker-green">市民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>別府市に住民登録がある在宅の要介護4・5の高齢者を介護している同居家族で、世帯全員が市民税非課税の方が対象です。</p><div class="summary-box" data-title="支給される介護用品"><p>紙おむつ（テープ止め・パンツ型）</p><p>尿取りパッド</p><p>使い捨て手袋</p><p>清拭用品</p></div><p>別府市役所高齢者福祉課の窓口で申請します。介護保険被保険者証と<strong>ケアマネジャーの確認書</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額6,250円相当</strong>の介護用品が自宅に配送されます。カタログから必要な用品を選択できます。</p><p><span class="marker">入院中や施設入所中は対象外</span>です。在宅での介護が条件となります。</p><div class="note-box">この制度は毎年度の更新申請が必要です。介護保険の福祉用具レンタルや購入制度とは別の制度ですので、両方を組み合わせて活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-elderly-support',
    title: '別府市 高齢者温泉療養支援事業',
    organization: '別府市',
    type: 'local',
    maxAmount: '入浴券年間最大12,000円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '大分県',
    tags: ['別府市', '温泉療養', '高齢者支援'],
    eligibility: '別府市に住所を有する70歳以上の方',
    applicationPeriod: '通年',
    description: '別府市が実施する高齢者温泉療養支援事業です。70歳以上の高齢者に市営温泉の入浴券を年間最大12,000円分交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 高齢者温泉療養支援事業は、<span class="marker">70歳以上の高齢者に市営温泉施設の入浴券</span>を交付し、温泉を活用した健康増進と介護予防を支援する制度です。</p><p>源泉数・湧出量日本一を誇る別府市ならではの制度で、温泉の持つ療養効果を高齢者の健康維持に活用しています。温泉入浴は筋肉痛や関節痛の緩和、血行促進、リラクゼーション効果が期待でき、介護予防にもつながります。</p><p><span class="marker-green">市内に100以上ある市営・共同温泉の多くで利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>別府市に住民登録がある70歳以上の方が対象です。</p><div class="summary-box" data-title="利用の流れ"><p>別府市役所高齢者福祉課または各出張所で申請</p><p>入浴券が交付される</p><p>市営温泉施設で入浴券を提示して利用</p></div><p>本人確認書類を持参のうえ窓口で申請してください。<strong>毎年度の申請が必要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>年間最大12,000円分</strong>の入浴券が交付されます。1回あたり100円の入浴券を120枚程度受け取ることができます。</p><p><span class="marker">利用できるのは別府市が指定する市営温泉施設に限られます</span>。民間の温泉旅館やホテルでは使用できません。</p><div class="highlight-box">別府市には温泉を活用した健康プログラム「オンパク（温泉泊覧会）」もあります。入浴券の利用と合わせて、温泉を活かした健康づくりに取り組んでみてはいかがでしょうか。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-seismic-diagnosis',
    title: '別府市 木造住宅耐震診断補助制度',
    organization: '別府市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円のみ',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '大分県',
    tags: ['別府市', '耐震診断', '防災'],
    eligibility: '別府市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃（予定戸数に達し次第終了）',
    description: '別府市が実施する木造住宅耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断を自己負担3,000円で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 木造住宅耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を市が補助する制度です。</p><p>別府市は別府-万年山断層帯が通る地震リスクの高い地域で、2016年の熊本地震でも震度6弱を観測しました。温泉地特有の地盤条件もあるため、住宅の耐震性確認は特に重要です。</p><p><span class="marker-green">市が派遣する耐震診断士による専門的な診断</span>を自己負担3,000円で受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>別府市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の戸建て住宅であること</p><p>過去にこの制度で耐震診断を受けていないこと</p></div><p>別府市役所建築指導課に申込書を提出します。市が耐震診断士を派遣し、現地調査を行います。</p><p><span class="marker">年間の予定戸数に限りがありますので、早めの申込みを</span>おすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち、<strong>自己負担は3,000円のみ</strong>です。残りは市が負担します。</p><p><span class="marker">診断で耐震性不足と判定された場合は、耐震改修工事の補助制度</span>を利用できます（別途申請）。</p><div class="note-box">別府市は温泉の影響で地盤が軟弱な箇所もあるため、耐震診断では地盤の状況も考慮されます。鉄骨造・鉄筋コンクリート造の住宅は対象外です。マンション等の共同住宅は別途相談してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 松本市（長野県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'matsumoto-childcare-subsidy',
    title: '松本市 子育て世帯応援給付金',
    organization: '松本市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '長野県',
    tags: ['松本市', '子育て支援', '給付金'],
    eligibility: '松本市に住所を有する低所得の子育て世帯',
    applicationPeriod: '通年（対象者へ案内送付）',
    description: '松本市が実施する子育て世帯応援給付金です。低所得の子育て世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 子育て世帯応援給付金は、<span class="marker">住民税非課税世帯等の子育て世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金を支給する制度です。</p><p>国宝松本城を擁する松本市は、北アルプスの麓に広がる長野県第2の都市です。「三ガク都（学都・楽都・岳都）」を標榜し、教育・文化・自然が調和した暮らしやすい街として知られています。子育て環境の充実にも力を入れています。</p><p><span class="marker-green">児童扶養手当受給世帯は申請不要で自動支給</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松本市に住民登録があり、18歳未満の子どもを養育する住民税非課税世帯または家計急変世帯が対象です。</p><div class="summary-box" data-title="申請区分"><p>児童扶養手当受給者：プッシュ型（申請不要）</p><p>住民税非課税のひとり親世帯：簡易申請</p><p>家計急変世帯：収入申立書による申請</p></div><p>松本市役所こども部の窓口で申請を受け付けています。<strong>対象となる可能性のある方には市から案内</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>子ども1人あたり5万円</strong>が支給されます。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変を理由に申請する場合は、収入減少を証明する書類</span>が必要です。</p><div class="note-box">国の同種の給付金と重複受給はできません。生活保護受給世帯もこの給付金の対象となりますが、収入認定の取扱いについては生活保護担当にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-birth-bonus',
    title: '松本市 出産・子育て応援給付金',
    organization: '松本市',
    type: 'local',
    maxAmount: '合計10万円（出産応援5万円＋子育て応援5万円）',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '長野県',
    tags: ['松本市', '出産応援', '子育て応援'],
    eligibility: '松本市に住所を有する妊婦および出生した子どもの養育者',
    applicationPeriod: '通年（妊娠届出時・出生届出後）',
    description: '松本市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生後に5万円の計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>北アルプスを望む松本市は、上高地や美ヶ原高原などの大自然に囲まれた「岳都」です。信州大学や松本市美術館など文化・教育施設も充実しており、豊かな環境の中で子育てができる街として人気があります。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・子育て世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松本市に住民登録がある妊婦（出産応援）および出生した子どもの養育者（子育て応援）が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>妊娠届出時：保健師との面談後、出産応援給付金5万円を申請</p><p>出生届出後：赤ちゃん訪問時に子育て応援給付金5万円を申請</p></div><p>松本市役所健康づくり課または各保健センターで手続きできます。<strong>保健師等との面談が支給条件</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>合計10万円</strong>（出産応援5万円＋子育て応援5万円）が支給されます。多胎の場合、子育て応援給付金は子どもの人数分です。</p><p><span class="marker">面談を受けずに申請のみでは支給されません</span>。必ず保健師等との面談を受けてください。</p><div class="highlight-box">松本市では「まつもと子育て応援アプリ」を通じた情報提供や、地域の子育て支援センターでの交流事業も充実しています。面談時に必要な支援サービスを案内してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-newlywed-rent',
    title: '松本市 結婚新生活支援事業',
    organization: '松本市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '長野県',
    tags: ['松本市', '新婚支援', '住居費補助'],
    eligibility: '松本市内で新生活を始める新婚世帯（夫婦ともに39歳以下）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '松本市が実施する結婚新生活支援事業です。新婚世帯の住居費・引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 結婚新生活支援事業は、<span class="marker">市内で新生活を始める新婚世帯</span>に対し、住居費（家賃・住宅購入費）と引越し費用を補助する制度です。</p><p>松本市は国宝松本城の城下町として発展し、「蔵の街」とも呼ばれる歴史的な街並みが残る魅力的な都市です。結婚を機に松本市で新生活を始める若い世帯を経済的に支援し、地域の活性化を図っています。</p><p>補助上限は夫婦ともに29歳以下で<strong>60万円</strong>、30〜39歳で<strong>30万円</strong>です。<span class="marker-green">世帯所得500万円未満が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出から1年以内であること</p><p>夫婦ともに39歳以下であること</p><p>世帯の合計所得が500万円未満であること</p><p>松本市内に居住していること</p></div><p>松本市役所市民課に申請書、婚姻届受理証明書、住居費の領収書・契約書の写しなどを提出します。</p><p><span class="marker">対象費用は婚姻届の前後1年以内に支払ったもの</span>に限られます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに29歳以下：<strong>上限60万円</strong>、30〜39歳：<strong>上限30万円</strong>です。家賃・敷金・礼金・住宅購入費・引越し費用が対象です。</p><p><span class="marker">公営住宅や社宅への入居、親族所有物件への入居は対象外</span>です。</p><div class="note-box">勤務先からの住居手当が支給されている場合は差し引いた額が対象となります。松本市では空き家バンク制度も運用しており、中古物件の情報も提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-disability-medical',
    title: '松本市 福祉医療費給付金制度（障がい者）',
    organization: '松本市',
    type: 'local',
    maxAmount: '医療費自己負担分の給付',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '長野県',
    tags: ['松本市', '障がい者医療', '福祉医療'],
    eligibility: '松本市に住所を有する重度の障がいのある方',
    applicationPeriod: '通年',
    description: '松本市が実施する福祉医療費給付金制度（障がい者）です。重度の障がいのある方の医療費自己負担分を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 福祉医療費給付金制度は、<span class="marker">身体障害者手帳1〜3級、療育手帳A1・A2判定、精神障害者保健福祉手帳1・2級</span>などの障がいのある方を対象に、医療費の自己負担分を給付する制度です。</p><p>松本市は長野県の福祉医療制度に基づき、障がいのある方が安心して必要な医療を受けられるよう支援しています。長野県は全国的にも福祉医療の対象範囲が広く、松本市でもその恩恵を受けることができます。</p><p><span class="marker-green">通院・入院・調剤のすべてが給付対象で、受給者負担金は1レセプトあたり500円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松本市に住民登録があり、健康保険に加入している以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障がい"><p>身体障害者手帳1級・2級・3級</p><p>療育手帳A1・A2判定</p><p>精神障害者保健福祉手帳1級・2級</p></div><p>松本市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>本人名義の振込先口座情報</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分から<strong>受給者負担金（1レセプトあたり500円）を差し引いた額が給付</strong>されます。長野県内の医療機関では受給者証の提示で窓口負担が軽減されます。</p><p><span class="marker">一定以上の所得がある場合は対象外</span>となることがあります。所得制限の基準は障がいの等級や扶養人数により異なります。</p><div class="note-box">入院時の食事療養費は給付対象外です。県外の医療機関で受診した場合は、後日償還払いの手続きが必要となります。領収書は必ず保管してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-school-lunch',
    title: '松本市 学校給食費補助制度',
    organization: '松本市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '長野県',
    tags: ['松本市', '学校給食', '教育支援'],
    eligibility: '松本市立小中学校に在籍する第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度ごとに申請）',
    description: '松本市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額免除し、多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 学校給食費補助制度は、<span class="marker">市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を全額免除する制度です。</p><p>松本市は「学都」を掲げる教育熱心な街で、地元産の食材を積極的に取り入れた学校給食は高い評価を受けています。多子世帯の教育費負担を軽減することで、子育てしやすい環境の整備を推進しています。</p><p><span class="marker-green">所得制限なしで、すべての多子世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松本市立小中学校に在籍する児童生徒のうち、保護者が扶養する子どもの中で第3子以降にあたる子どもの保護者が対象です。</p><div class="summary-box" data-title="第3子のカウント方法"><p>保護者が扶養する18歳以下の子どもを年齢順にカウント</p><p>3番目以降の子どもが対象</p><p>市外の学校に通う上の子もカウントに含まれる</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書を記入し、<strong>学校経由で提出</strong>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の児童生徒の学校給食費が<strong>全額免除</strong>されます。年間約5万円前後の負担軽減となります。</p><p><span class="marker">年度途中の転入の場合は月割りで適用</span>されます。転入時に速やかに学校へ届け出てください。</p><div class="highlight-box">松本市の学校給食は信州の新鮮な野菜や果物を使用し、食育にも力を入れています。就学援助制度との併用で、第1子・第2子の給食費も支援を受けられる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-telework-bonus',
    title: '松本市 テレワーク移住支援補助金',
    organization: '松本市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '長野県',
    tags: ['松本市', 'テレワーク', '移住支援'],
    eligibility: 'テレワークで仕事を続けながら松本市に移住した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '松本市が実施するテレワーク移住支援補助金です。テレワーク移住者のワーキングスペース利用料等を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 テレワーク移住支援補助金は、<span class="marker">テレワークで現在の仕事を続けながら松本市に移住した方</span>に対し、テレワーク環境の整備にかかる費用を補助する制度です。</p><p>松本市は東京から特急で約2時間半のアクセスで、北アルプスや上高地などの壮大な自然と、松本城を中心とした歴史文化の両方を日常的に楽しめる街です。ワーケーションの聖地としても注目され、テレワーク移住者が年々増加しています。</p><p>補助額は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">コワーキングスペース利用料や通信環境整備費が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>松本市外から転入して1年以内であること</p><p>テレワークにより市外の企業等の業務を行っていること</p><p>松本市に3年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>松本市役所移住推進課に申請書、テレワーク証明書類、対象経費の領収書などを提出します。</p><p><span class="marker">転入後1年以内に申請が必要</span>です。移住前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。コワーキングスペース利用料、通信回線工事費、テレワーク用家具購入費などが対象です。</p><p><span class="marker">3年以内に松本市から転出した場合は補助金の返還</span>が求められます。</p><div class="highlight-box">松本市では市内にコワーキングスペースが複数整備されており、移住者同士の交流の場にもなっています。移住体験ツアーも定期的に開催されていますので、まずは試しに訪れてみてはいかがでしょうか。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-nursing-home-reform',
    title: '松本市 高齢者にやさしい住まいづくり助成金',
    organization: '松本市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '長野県',
    tags: ['松本市', 'バリアフリー', '介護予防'],
    eligibility: '松本市に住所を有する65歳以上の方がいる世帯',
    applicationPeriod: '通年',
    description: '松本市が実施する高齢者にやさしい住まいづくり助成金です。高齢者世帯の住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 高齢者にやさしい住まいづくり助成金は、<span class="marker">65歳以上の高齢者が暮らす住宅のバリアフリー改修</span>に対し、工事費の一部を助成する制度です。</p><p>松本市は冬季の積雪や路面凍結により、高齢者の転倒リスクが高い地域です。住宅内の段差解消や手すりの設置など、安全に暮らすための住宅改修を支援しています。介護予防の観点からも重要な制度です。</p><p>助成額は対象工事費の一部で、<strong>上限は30万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの取り付け</p><p>段差の解消</p><p>床暖房・断熱改修（ヒートショック対策）</p><p>滑りにくい床材への変更</p><p>浴室・トイレの改修</p></div><p>松本市役所高齢福祉課に申請書、工事見積書、改修図面を提出します。要介護認定を受けている方はケアマネジャーの意見書も必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。世帯の課税状況に応じて助成率が異なります。</p><p><span class="marker">要介護認定を受けている方は介護保険の住宅改修費（上限20万円）と合算で最大50万円</span>の支援を受けられます。</p><div class="note-box">松本市の冬は厳しいため、ヒートショック対策としての浴室暖房やトイレ暖房の設置も助成対象となる場合があります。賃貸住宅の場合は家主の承諾書が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-energy-support',
    title: '松本市 住宅用太陽光発電・蓄電池導入補助金',
    organization: '松本市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '長野県',
    tags: ['松本市', '太陽光発電', '省エネ'],
    eligibility: '松本市に住所を有する世帯で、住宅に太陽光発電・蓄電池を導入する方',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '松本市が実施する住宅用太陽光発電・蓄電池導入補助金です。太陽光発電システムと蓄電池の導入に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 住宅用太陽光発電・蓄電池導入補助金は、<span class="marker">住宅に太陽光発電システムや蓄電池を新たに導入する世帯</span>に対し、設置費用の一部を補助する制度です。</p><p>松本市は内陸性気候で日照時間が長く、太陽光発電に適した立地条件を備えています。2050年のゼロカーボンシティ宣言のもと、家庭での再生可能エネルギーの普及を積極的に推進しています。</p><p><span class="marker-green">太陽光発電と蓄電池の同時導入で補助額が最大化</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限10万円）</p><p>家庭用蓄電池：一律5万円</p><p>合計上限15万円</p></div><p>松本市役所環境エネルギー課の窓口に申請書と見積書、設備の仕様書を提出します。</p><p><span class="marker">設備の設置工事着手前に申請が必要</span>です。交付決定前に着工した場合は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>太陽光発電と蓄電池の同時導入で<strong>最大15万円</strong>の補助が受けられます。太陽光発電のみの場合は上限10万円です。</p><p><span class="marker">設置完了後に実績報告書の提出が必要</span>です。設置状況の確認を経て補助金が交付されます。</p><div class="highlight-box">松本市は日照時間が長い内陸性気候のため、太陽光発電の発電効率が高い地域です。国や長野県の補助制度と併用することで、さらに初期費用を抑えることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-bousai-equipment',
    title: '松本市 家庭用防災資機材購入補助金',
    organization: '松本市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '長野県',
    tags: ['松本市', '防災資機材', '地震対策'],
    eligibility: '松本市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '松本市が実施する家庭用防災資機材購入補助金です。家具転倒防止器具や感震ブレーカーなどの購入費を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 家庭用防災資機材購入補助金は、<span class="marker">家庭での地震対策に必要な防災資機材の購入費</span>の一部を補助する制度です。</p><p>松本市は糸魚川-静岡構造線断層帯の近くに位置し、大規模地震のリスクが指摘されています。2014年の長野県神城断層地震でも被害が発生しており、各家庭での備えの重要性が高まっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">家具転倒防止器具、感震ブレーカー、飛散防止フィルムなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災資機材"><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>感震ブレーカー</p><p>窓ガラス飛散防止フィルム</p><p>家庭用消火器</p><p>防災用蓄電池・非常用電源</p></div><p>松本市役所危機管理課に申請書と購入予定品の見積書を提出します。</p><p><span class="marker">購入前に申請が必要</span>です。交付決定を受けてから購入してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。1世帯あたり1回の利用に限られます。</p><p><span class="marker">購入した資機材は適切に設置・使用し、防災力の向上に役立てて</span>ください。</p><div class="note-box">松本市では自主防災組織への支援や防災訓練の実施も積極的に行っています。個人の備えと地域の備えを組み合わせることで、災害時の被害を最小限に抑えることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
];
