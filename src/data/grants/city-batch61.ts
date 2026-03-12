import { Grant } from '@/lib/types';

export const cityGrantsBatch61: Grant[] = [
  // ────────────────────────────────────────────────
  // 今治市（愛媛県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'imabari-childcare-subsidy',
    title: '今治市 子育て応援給付金',
    organization: '今治市',
    type: 'local',
    maxAmount: '児童1人あたり年間3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '愛媛県',
    tags: ['今治市', '子育て支援', '給付金'],
    eligibility: '今治市に住所を有し、18歳未満の児童を養育している保護者',
    applicationPeriod: '毎年4月〜6月（現況届の提出時期）',
    description: '今治市が実施する子育て応援給付金です。18歳未満の児童を養育する世帯に対し、児童1人あたり年間3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 子育て応援給付金は、<span class="marker">18歳未満の児童を養育する保護者</span>に対し、子育てにかかる経済的負担を軽減するための独自給付金です。</p><p>しまなみ海道の四国側起点として知られる今治市は、タオル製造と造船業が盛んな産業都市です。近年は子育て世帯の定住促進に力を入れており、本給付金もその一環として創設されました。</p><p><span class="marker-green">所得制限はなく、今治市に住むすべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>今治市に住民登録があり、18歳未満の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市から送付される案内に同封）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>毎年4月頃に今治市から対象世帯へ案内が送付されます。必要事項を記入して今治市役所子育て支援課へ提出してください。<strong>転入世帯は転入届提出後に随時申請</strong>できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり年間3万円</strong>です。第3子以降はさらに加算がある場合があります。</p><p><span class="marker">支給は年1回で、10月頃に指定口座へ振り込まれます</span>。申請期限を過ぎると当該年度分は受給できませんのでご注意ください。</p><div class="note-box">児童手当とは別の制度ですので、児童手当と併せて受給できます。生活保護受給世帯も対象となります。年度途中の転出の場合は月割計算となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-birth-bonus',
    title: '今治市 出産祝い金',
    organization: '今治市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '愛媛県',
    tags: ['今治市', '出産祝い金', '給付金'],
    eligibility: '今治市に住所を有し、出産した方（出産日に6か月以上居住）',
    applicationPeriod: '出産後60日以内',
    description: '今治市が実施する出産祝い金です。出産した保護者に対し、第1子5万円から第3子以降20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 出産祝い金は、<span class="marker">今治市で新たにお子さんが誕生した世帯</span>に対して支給されるお祝い金です。</p><p>今治市は瀬戸内海に面し、大島・伯方島・大三島などの島しょ部を含む広大な市域を持つ都市です。少子化対策として、出産に伴う経済的負担の軽減を目的に本制度を設けています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。<span class="marker-green">多子世帯ほど手厚い支給額が設定されています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日において今治市に6か月以上住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>出生届の提出後、今治市役所子育て支援課の窓口で申請してください。<span class="marker">出産後60日以内の申請が必要</span>です。郵送での申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順に応じて異なります。<strong>第1子5万円、第2子10万円、第3子以降は1人につき20万円</strong>が支給されます。</p><p><span class="marker">多胎児（双子・三つ子など）の場合は、それぞれの出生順に応じた額が加算</span>されます。</p><div class="note-box">出生順の数え方は、申請者が養育している18歳未満の児童の数で判定します。申請期限（出産後60日以内）を過ぎた場合は受給できませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-housing-purchase',
    title: '今治市 住宅取得支援補助金',
    organization: '今治市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '愛媛県',
    tags: ['今治市', '住宅取得', '補助金'],
    eligibility: '今治市内に新たに住宅を取得し居住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '今治市が実施する住宅取得支援補助金です。市内に住宅を新築または購入した方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 住宅取得支援補助金は、<span class="marker">今治市内に新たに住宅を取得し定住する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>タオルと造船の街・今治市は、しまなみ海道を通じた観光誘客と並行して、定住人口の確保に取り組んでいます。本補助金は、新築・中古を問わず住宅取得を支援し、市内への移住・定住を促進するものです。</p><p>補助額は<strong>基本額30万円</strong>で、子育て世帯や市外からの転入者には<span class="marker-green">最大20万円の加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>今治市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>今治市役所建築指導課に申請書と売買契約書等を提出します。住民票の異動後に申請が可能となります。</p><p><span class="marker">住宅の引渡し後6か月以内に申請してください</span>。期限を過ぎた場合は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。以下の加算要件を満たす場合はさらに上乗せされます。</p><p><span class="marker">子育て世帯加算（18歳未満の子がいる世帯）：10万円、市外からの転入加算：10万円</span>で、最大50万円となります。</p><div class="highlight-box">島しょ部（大島・伯方島・大三島等）での住宅取得にはさらに優遇措置がある場合があります。今治市の移住相談窓口で事前に確認しておくとよいでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-infertility',
    title: '今治市 不妊治療費助成事業',
    organization: '今治市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '愛媛県',
    tags: ['今治市', '不妊治療', '助成金'],
    eligibility: '今治市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '治療終了日から60日以内',
    description: '今治市が実施する不妊治療費助成事業です。不妊治療にかかる費用の一部を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦</span>に対して、治療費の一部を助成する制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、保険適用外の先進医療や自己負担分は依然として高額です。今治市では独自の上乗せ助成を行い、子どもを望む夫婦の経済的負担を軽減しています。</p><p><span class="marker-green">保険適用治療の自己負担分に加え、先進医療の費用も助成対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが今治市に住民登録があることが要件です。事実婚の方も対象となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関が発行する治療証明書</p><p>領収書の写し</p><p>夫婦の住民票（事実婚の場合は戸籍謄本も）</p></div><p>今治市役所健康推進課に申請書類を提出してください。<span class="marker">治療が終了した日から60日以内に申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用治療の自己負担分および先進医療費に対して、<strong>1回の治療あたり最大10万円</strong>です。</p><p><span class="marker">年間の助成回数に制限がある場合がありますので、事前に窓口でご確認ください</span>。</p><div class="note-box">愛媛県の不妊治療費助成制度との併用が可能です。県の助成を受けた後の自己負担分に対して、今治市の助成が適用されます。通院にかかる交通費は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-scholarship',
    title: '今治市 奨学金制度',
    organization: '今治市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '愛媛県',
    tags: ['今治市', '奨学金', '教育支援'],
    eligibility: '今治市に住所を有する世帯の子で、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '今治市が実施する奨学金制度です。経済的理由で修学が困難な学生に対し、月額最大3万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 奨学金制度は、<span class="marker">経済的理由で修学が困難な学生</span>に対して奨学金を貸与する制度です。</p><p>今治市は海事都市として知られ、今治明徳短期大学や愛媛大学の地域連携拠点など教育環境の整備にも取り組んでいます。地元の優秀な人材が経済的理由で学業を断念することのないよう、本奨学金制度を運営しています。</p><p>貸与月額は<strong>高校生1.5万円、大学生・専門学校生3万円</strong>です。<span class="marker-green">無利子での貸与</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が今治市に住民登録を有すること</p><p>高等学校・大学・専門学校等に在学中または入学予定であること</p><p>学業成績が一定以上であること</p><p>経済的に修学が困難であること</p></div><p>毎年3月から4月にかけて今治市教育委員会で申請を受け付けます。申請書に成績証明書と保護者の所得証明書を添えて提出してください。</p><p><span class="marker">選考は書類審査で行われ、5月頃に結果が通知されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生：月額1.5万円、大学生・専門学校生：月額3万円</strong>です。無利子で卒業後に返還します。</p><p><span class="marker">返還期間は貸与期間の3倍以内とされており、卒業後1年間の猶予期間</span>があります。</p><div class="note-box">日本学生支援機構の奨学金や他の奨学金との併用は原則可能ですが、事前にご確認ください。今治市に就職して一定期間居住した場合、返還免除の特例がある場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-sme-support',
    title: '今治市 中小企業振興補助金',
    organization: '今治市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '愛媛県',
    tags: ['今治市', '中小企業支援', '補助金'],
    eligibility: '今治市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '今治市が実施する中小企業振興補助金です。販路開拓や設備導入などの経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 中小企業振興補助金は、<span class="marker">市内中小企業の経営基盤強化や販路開拓</span>を支援するための補助金です。</p><p>今治市はタオル製造業や造船関連産業を中心とした製造業が集積しており、中小企業が地域経済を支えています。展示会への出展費用、新製品開発、IT導入による業務効率化など、幅広い経営課題に対応する補助メニューが用意されています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">今治タオルブランドの認定企業には優遇措置</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>今治市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>補助対象事業を年度内に完了できること</p></div><p>今治市役所産業振興課に事業計画書と申請書を提出します。審査は随時行われ、約1か月で結果が通知されます。</p><p><span class="marker">今治商工会議所の経営相談を受けてから申請すると採択率が高まります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。展示会出展費、広告宣伝費、設備導入費、IT導入費などが対象となります。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>です。必ず交付決定を受けてから事業を実施してください。</p><div class="highlight-box">今治市は「今治タオル」のブランド力を活かした海外展開支援も行っています。海外展示会への出展には別途上乗せ補助がある場合がありますので、窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-nursing-equipment',
    title: '今治市 介護用品支給事業',
    organization: '今治市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '愛媛県',
    tags: ['今治市', '介護用品', '支給事業'],
    eligibility: '今治市に住所を有する要介護4・5の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '今治市が実施する介護用品支給事業です。重度の要介護者を在宅介護している家族に、年間6万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた方を在宅で介護している家族</span>に対して、紙おむつなどの介護用品を支給する制度です。</p><p>在宅介護は介護者の身体的・精神的負担が大きく、日常的に使用する介護用品の費用も家計を圧迫します。今治市では介護用品の現物支給またはクーポン券の交付により、在宅介護を続ける家族を経済面から支援しています。</p><p><span class="marker-green">市民税非課税世帯を対象とし、年間6万円相当の介護用品が支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>以下のすべてに該当する方が対象です。</p><div class="summary-box" data-title="支給要件"><p>今治市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方と介護者がともに市民税非課税世帯であること</p><p>介護を受ける方が病院や施設に入所していないこと</p></div><p>今治市役所介護保険課の窓口で申請します。介護保険被保険者証と世帯の課税状況がわかる書類が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間6万円相当</strong>（月額5,000円相当）の介護用品です。紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などが対象です。</p><p><span class="marker">支給方法は市指定の事業者からの配達またはクーポン券の交付</span>のいずれかです。</p><div class="note-box">入院や施設入所中は支給対象外となります。要介護度が変更になった場合は再申請が必要です。他の介護関連サービスとの併用が可能ですので、ケアマネジャーにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-elderly-support',
    title: '今治市 高齢者見守り支援事業',
    organization: '今治市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '愛媛県',
    tags: ['今治市', '高齢者支援', '見守り'],
    eligibility: '今治市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '今治市が実施する高齢者見守り支援事業です。ひとり暮らし高齢者に緊急通報装置を無料で貸与し、見守り体制を整備します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対して、緊急通報装置の貸与と見守りサービスを提供する制度です。</p><p>今治市は島しょ部を含む広い市域を持ち、高齢化率も高い地域です。急病や転倒などの緊急時にボタン一つで消防や協力員に通報できる体制を整え、高齢者が安心して在宅生活を続けられるよう支援しています。</p><p><span class="marker-green">装置の設置費用・月額利用料ともに市が負担するため、利用者の費用負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>今治市に住民登録がある65歳以上の方</p><p>ひとり暮らし、または高齢者のみの世帯</p><p>身体上の慢性疾患等により日常生活に注意が必要な方</p></div><p>今治市役所高齢介護課の窓口で申請します。民生委員の意見書が必要となる場合がありますので、まずは担当の民生委員または地域包括支援センターにご相談ください。</p><p><span class="marker">申請から装置の設置まで約2〜3週間</span>かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の設置費用・月額利用料は全額市が負担</strong>します。利用者の自己負担はありません。</p><p><span class="marker">緊急ボタンを押すと消防署に自動通報されるとともに、あらかじめ登録した近隣協力員にも連絡</span>が入ります。</p><div class="note-box">装置の利用にあたっては固定電話回線が必要です。携帯電話のみの世帯には別途対応方法がありますので窓口でご相談ください。入院中・施設入所中は利用を一時停止する必要があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'imabari-seismic-diagnosis',
    title: '今治市 木造住宅耐震診断助成事業',
    organization: '今治市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '愛媛県',
    tags: ['今治市', '耐震診断', '防災'],
    eligibility: '今治市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月（予算に達し次第終了）',
    description: '今治市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>今治市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>今治市は南海トラフ地震の被害想定地域に含まれており、住宅の耐震化は喫緊の課題です。市では耐震診断の自己負担を大幅に軽減することで、住宅の耐震化率向上を図っています。</p><p>耐震診断にかかる費用のうち、<span class="marker-green">自己負担はわずか3,000円程度で、残りは市と県が補助</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>今治市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>在来軸組工法で建築されたこと</p></div><p>今治市役所建築指導課に申請書を提出します。市が派遣する耐震診断士が現地調査を行います。</p><p><span class="marker">申請は先着順で、毎年度予算に達し次第終了</span>します。早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用（通常5〜8万円程度）のうち、<strong>自己負担はわずか3,000円程度</strong>です。残りは今治市と愛媛県の補助で賄われます。</p><p><span class="marker">診断の結果、耐震性が不足していると判定された場合は、耐震改修補助制度（別制度）</span>も利用できます。</p><div class="highlight-box">南海トラフ地震では今治市でも震度6強以上が想定されています。まずは耐震診断で自宅の安全性を確認し、必要に応じて耐震改修に進むことが大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 春日市（福岡県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'kasuga-childcare-subsidy',
    title: '春日市 子育て世帯応援給付金',
    organization: '春日市',
    type: 'local',
    maxAmount: '児童1人あたり年間2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['春日市', '子育て支援', '給付金'],
    eligibility: '春日市に住所を有し、18歳未満の児童を養育している保護者',
    applicationPeriod: '毎年4月〜6月',
    description: '春日市が実施する子育て世帯応援給付金です。18歳未満の児童を養育する世帯に対し、児童1人あたり年間2万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 子育て世帯応援給付金は、<span class="marker">18歳未満の児童を養育する保護者</span>に対し、子育てにかかる経済的負担を軽減するための独自給付金です。</p><p>春日市は福岡市の南隣に位置し、人口密度が福岡県内でもトップクラスのコンパクトシティです。多くの子育て世帯が住む住宅都市として、切れ目のない子育て支援策の一環として本給付金を設けています。</p><p><span class="marker-green">所得制限なしで、春日市に住むすべての対象世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>春日市に住民登録があり、18歳未満の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市から送付される案内に同封）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>毎年4月頃に春日市から対象世帯へ案内が送付されます。必要事項を記入して春日市役所こども未来課へ提出してください。<strong>転入世帯は転入届提出後に随時申請</strong>可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり年間2万円</strong>です。第3子以降は加算がある場合があります。</p><p><span class="marker">支給は年1回で、9月頃に指定口座へ振り込まれます</span>。申請期限を過ぎると当該年度分は受給できません。</p><div class="note-box">児童手当とは別の制度で、併せて受給できます。年度途中に転出した場合は月割計算で精算されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-birth-bonus',
    title: '春日市 出産祝い金',
    organization: '春日市',
    type: 'local',
    maxAmount: '第1子3万円・第2子5万円・第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['春日市', '出産祝い金', '給付金'],
    eligibility: '春日市に住所を有し、出産した方（出産日に3か月以上居住）',
    applicationPeriod: '出産後90日以内',
    description: '春日市が実施する出産祝い金です。出産した保護者に対し、第1子3万円から第3子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 出産祝い金は、<span class="marker">春日市で新たにお子さんが誕生した世帯</span>に対して支給されるお祝い金です。</p><p>春日市は面積約14km²とコンパクトながら人口11万人超を擁する、福岡都市圏の代表的なベッドタウンです。子育て世帯に選ばれる街を目指し、出産から育児までの切れ目ない支援を展開しています。</p><p>支給額は<strong>第1子3万円、第2子5万円、第3子以降10万円</strong>です。<span class="marker-green">多子世帯ほど手厚い給付が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日において春日市に3か月以上住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>出生届の提出後、春日市役所こども未来課の窓口で申請してください。<span class="marker">出産後90日以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子3万円、第2子5万円、第3子以降1人につき10万円</strong>です。</p><p><span class="marker">多胎児の場合はそれぞれの出生順に応じた額が支給されます</span>。双子で第1子・第2子の場合は合計8万円となります。</p><div class="note-box">出生順は申請者が現に養育している18歳未満の児童数で判定します。申請期限を過ぎた場合は受給できませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-housing-purchase',
    title: '春日市 住宅取得奨励補助金',
    organization: '春日市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['春日市', '住宅取得', '補助金'],
    eligibility: '春日市内に新たに住宅を取得し居住する子育て世帯・若年夫婦世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '春日市が実施する住宅取得奨励補助金です。子育て世帯や若年夫婦世帯が市内に住宅を取得した場合に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 住宅取得奨励補助金は、<span class="marker">子育て世帯や若年夫婦世帯が春日市内に住宅を取得</span>した場合に、費用の一部を補助する制度です。</p><p>春日市はJR・西鉄の鉄道路線が通り福岡市中心部へのアクセスが良好な住宅都市です。定住人口の維持・増加を図るため、若い世代の住宅取得を積極的に支援しています。</p><p>補助額は<strong>基本額20万円</strong>で、<span class="marker-green">子育て世帯には最大10万円の加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>春日市内に住宅を新築または購入すること</p><p>夫婦のいずれかが40歳未満、または18歳未満の子がいる世帯</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>春日市役所都市計画課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。住民票の異動が完了してから申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>です。18歳未満の子がいる世帯には<strong>子育て世帯加算10万円</strong>が上乗せされ、最大30万円となります。</p><p><span class="marker">中古住宅の購入も対象ですが、親族間売買は対象外</span>です。</p><div class="highlight-box">春日市は福岡市に隣接しながら比較的住宅価格が抑えめで、コストパフォーマンスの高い住宅取得が可能です。市内には公園や緑地も多く、子育て環境として人気があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-infertility',
    title: '春日市 不妊治療費助成事業',
    organization: '春日市',
    type: 'local',
    maxAmount: '1回あたり最大5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['春日市', '不妊治療', '助成金'],
    eligibility: '春日市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '治療終了日から90日以内',
    description: '春日市が実施する不妊治療費助成事業です。不妊治療にかかる自己負担分を1回あたり最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦</span>に対して、保険適用治療の自己負担分や先進医療費の一部を助成する制度です。</p><p>春日市は子育て世帯が多く住む住宅都市であり、子どもを望む夫婦への支援を重要施策と位置付けています。2022年の保険適用拡大後も残る自己負担分に対して、市独自の上乗せ助成を行っています。</p><p><span class="marker-green">保険適用治療の自己負担分に加え、先進医療の費用も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが春日市に住民登録があることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>春日市役所健康スポーツ課に申請書類を提出します。<span class="marker">治療終了日から90日以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療あたり最大5万円</strong>です。年間の回数に制限がありますので事前にご確認ください。</p><p><span class="marker">福岡県の不妊治療費助成制度との併用が可能</span>です。県の助成を受けた後の自己負担に対して市の助成が適用されます。</p><div class="note-box">通院にかかる交通費や、保険適用外の検査（一部を除く）は対象外です。申請前に窓口で対象範囲をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-scholarship',
    title: '春日市 奨学資金貸付制度',
    organization: '春日市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '福岡県',
    tags: ['春日市', '奨学金', '教育支援'],
    eligibility: '春日市に住所を有する世帯の子で、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '春日市が実施する奨学資金貸付制度です。経済的理由で修学が困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 奨学資金貸付制度は、<span class="marker">経済的理由で修学が困難な学生</span>に対して奨学資金を無利子で貸与する制度です。</p><p>春日市は教育環境の充実に力を入れており、市内には良好な学校施設が整備されています。経済的な理由で学びの機会を逃すことのないよう、本奨学金制度を通じて学生を支援しています。</p><p>貸与月額は<strong>高校生1.8万円、大学生・専門学校生3万円</strong>です。<span class="marker-green">無利子での貸与</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が春日市に住民登録を有すること</p><p>高等学校・大学・専門学校等に在学中または入学予定であること</p><p>学業成績が一定以上であること</p><p>経済的に修学が困難であること</p></div><p>毎年3月から4月にかけて春日市教育委員会で申請を受け付けます。成績証明書と保護者の所得証明書を添えて申請書を提出してください。</p><p><span class="marker">選考結果は5月頃に通知されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生：月額1.8万円、大学生・専門学校生：月額3万円</strong>です。無利子で卒業後に返還します。</p><p><span class="marker">返還は卒業後1年の猶予期間を経て、貸与期間の3倍以内に完了</span>する必要があります。</p><div class="note-box">他の奨学金との併用は原則可能です。春日市に就職して定住した場合の返還免除制度についてはお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-sme-support',
    title: '春日市 中小企業経営支援補助金',
    organization: '春日市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['春日市', '中小企業支援', '補助金'],
    eligibility: '春日市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '春日市が実施する中小企業経営支援補助金です。販路開拓やIT導入などの経費を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 中小企業経営支援補助金は、<span class="marker">市内中小企業の経営改善や販路拡大</span>を支援するための補助金です。</p><p>春日市は福岡都市圏に位置し、サービス業や小売業を中心とした中小企業が多く立地しています。展示会への出展、ホームページの作成・改修、IT導入による業務効率化など、経営力の強化に資する取り組みを支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">市内の商工会を通じた申請も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>春日市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>補助対象事業を当該年度内に完了できること</p></div><p>春日市役所地域づくり課に事業計画書と申請書を提出します。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>となりますので、必ず事前に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。展示会出展費、広告宣伝費、ウェブサイト構築費、IT機器導入費などが対象です。</p><p><span class="marker">1事業者あたり年度内1回の申請に限られます</span>。</p><div class="note-box">人件費や飲食費は対象外です。福岡県の中小企業支援制度との併用が可能な場合がありますので、事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-nursing-equipment',
    title: '春日市 介護用品支給事業',
    organization: '春日市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['春日市', '介護用品', '支給事業'],
    eligibility: '春日市に住所を有する要介護4・5の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '春日市が実施する介護用品支給事業です。重度の要介護者を在宅介護している家族に年間6万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた方を在宅で介護している家族</span>に対して、紙おむつなどの介護用品を支給する制度です。</p><p>春日市は高齢化率が比較的低い都市ですが、在宅介護を支える家族への支援は重要課題と位置づけています。介護用品の現物支給により、経済的負担と購入の手間を軽減します。</p><p><span class="marker-green">市民税非課税世帯を対象に、年間6万円相当の介護用品が支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>春日市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方・介護者がともに市民税非課税世帯であること</p><p>介護を受ける方が施設に入所していないこと</p></div><p>春日市役所高齢課に介護保険被保険者証を持参して申請します。ケアマネジャーを通じた申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間6万円相当</strong>（月額5,000円相当）です。紙おむつ、尿取りパッド、使い捨て手袋などが支給されます。</p><p><span class="marker">支給は毎月、市が指定する事業者から自宅へ配達されます</span>。</p><div class="note-box">入院中や施設入所中は支給停止となります。要介護度が変更になった場合は再判定が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-elderly-support',
    title: '春日市 高齢者配食サービス事業',
    organization: '春日市',
    type: 'local',
    maxAmount: '1食あたり自己負担400円',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '福岡県',
    tags: ['春日市', '高齢者支援', '配食サービス'],
    eligibility: '春日市に住所を有する65歳以上のひとり暮らし高齢者等で、調理が困難な方',
    applicationPeriod: '通年',
    description: '春日市が実施する高齢者配食サービス事業です。調理が困難なひとり暮らし高齢者に栄養バランスの取れた食事を配達します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 高齢者配食サービス事業は、<span class="marker">調理が困難な65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対して、栄養バランスの取れた食事を自宅に配達するサービスです。</p><p>配食を通じた安否確認も兼ねており、配達時にご利用者の様子を確認します。春日市はコンパクトな市域を活かし、きめ細かな高齢者支援体制を構築しています。</p><p><span class="marker-green">利用者の自己負担は1食あたり400円で、残りは市が助成</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用要件"><p>春日市に住民登録がある65歳以上の方</p><p>ひとり暮らしまたは高齢者のみの世帯</p><p>心身の状況等により自ら調理することが困難な方</p></div><p>春日市役所高齢課または地域包括支援センターで申請します。利用希望日や食事の種類（普通食・治療食等）を相談のうえ決定します。</p><p><span class="marker">利用可能な日数は週5日まで（昼食または夕食）</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用者の自己負担は<strong>1食あたり400円</strong>です。食事の実費との差額は春日市が補助します。</p><p><span class="marker">配達時には安否確認が行われ、異変があった場合は関係機関に連絡</span>されます。</p><div class="note-box">食物アレルギーや治療食（減塩食・糖尿食等）にも対応可能です。入院中は利用を停止する必要がありますので、事前にご連絡ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasuga-seismic-diagnosis',
    title: '春日市 木造住宅耐震診断補助事業',
    organization: '春日市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '福岡県',
    tags: ['春日市', '耐震診断', '防災'],
    eligibility: '春日市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '春日市が実施する木造住宅耐震診断補助事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日市 木造住宅耐震診断補助事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>2005年の福岡県西方沖地震では春日市でも被害が発生しており、住宅の耐震化は重要な防災課題です。市では耐震診断を受けやすくすることで、住宅の安全性向上を促進しています。</p><p>耐震診断費用のうち、<span class="marker-green">自己負担はわずか3,000円程度で、残りは市と県が補助</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>春日市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p><p>過去にこの制度を利用していないこと</p></div><p>春日市役所都市計画課に申請書を提出します。市が派遣する耐震診断士が現地を調査します。</p><p><span class="marker">先着順で受付し、予算に達し次第終了</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち、<strong>自己負担は3,000円程度</strong>です。残りの費用は春日市と福岡県が負担します。</p><p><span class="marker">診断結果で耐震性不足と判定された場合は、耐震改修補助制度（別制度）の利用も検討</span>できます。</p><div class="highlight-box">福岡県西方沖地震（2005年）では警固断層帯の活動が確認されています。春日市周辺でも今後大きな地震が発生する可能性があるため、早めの耐震診断をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大野城市（福岡県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'onojo-childcare-subsidy',
    title: '大野城市 子育て支援給付金',
    organization: '大野城市',
    type: 'local',
    maxAmount: '児童1人あたり年間2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['大野城市', '子育て支援', '給付金'],
    eligibility: '大野城市に住所を有し、18歳未満の児童を養育している保護者',
    applicationPeriod: '毎年4月〜6月',
    description: '大野城市が実施する子育て支援給付金です。18歳未満の児童を養育する世帯に年間2万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 子育て支援給付金は、<span class="marker">18歳未満の児童を養育する保護者</span>に対し、経済的負担を軽減するための独自給付金です。</p><p>大野城市は福岡市の南に位置し、古代の水城跡や大野城跡などの史跡に囲まれた歴史あるコンパクトシティです。子育て世帯に住みやすい街づくりを推進しており、本給付金もその柱の一つです。</p><p><span class="marker-green">所得制限なく、すべての対象世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大野城市に住民登録があり、18歳未満の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（対象世帯に送付）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>毎年4月頃に大野城市から案内が届きます。大野城市役所こども部こども未来課へ必要書類を提出してください。<strong>転入世帯は随時申請可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり年間2万円</strong>です。</p><p><span class="marker">支給は年1回、10月頃に指定口座へ振り込まれます</span>。申請期限を過ぎると当該年度分は受給できません。</p><div class="note-box">児童手当とは別制度で併給可能です。年度途中に転出した場合は月割計算となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-birth-bonus',
    title: '大野城市 出産祝い金',
    organization: '大野城市',
    type: 'local',
    maxAmount: '第1子3万円・第2子5万円・第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['大野城市', '出産祝い金', '給付金'],
    eligibility: '大野城市に住所を有し、出産した方（出産日に3か月以上居住）',
    applicationPeriod: '出産後90日以内',
    description: '大野城市が実施する出産祝い金です。出産した保護者に対し、第1子3万円から第3子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 出産祝い金は、<span class="marker">大野城市で新たにお子さんが誕生した世帯</span>に対して支給されるお祝い金です。</p><p>大野城市は古代に築かれた日本最古の山城「大野城」の名を冠し、歴史と現代が共存する住みよい都市です。出産に伴う経済的負担を軽減し、安心して子育てできる環境づくりを進めています。</p><p>支給額は<strong>第1子3万円、第2子5万円、第3子以降10万円</strong>です。<span class="marker-green">多子世帯ほど手厚い支給</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日において大野城市に3か月以上住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>出生届提出後、大野城市役所こども部こども未来課で申請します。<span class="marker">出産後90日以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子3万円、第2子5万円、第3子以降10万円</strong>です。</p><p><span class="marker">多胎児の場合はそれぞれの出生順に応じた額を合算して支給</span>されます。</p><div class="note-box">出生順は申請者が養育する18歳未満の児童数で判定します。期限を過ぎた場合は受給できませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-housing-purchase',
    title: '大野城市 住宅取得支援補助金',
    organization: '大野城市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['大野城市', '住宅取得', '補助金'],
    eligibility: '大野城市内に新たに住宅を取得し居住する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大野城市が実施する住宅取得支援補助金です。子育て世帯等が市内に住宅を取得した場合に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 住宅取得支援補助金は、<span class="marker">子育て世帯や若年夫婦世帯が大野城市内に住宅を取得</span>した場合に費用の一部を補助する制度です。</p><p>大野城市は西鉄・JRの鉄道路線が通り、福岡市中心部まで約15分の好立地です。利便性の高さと落ち着いた住環境を兼ね備えた都市として、若い世代の定住を促進しています。</p><p>補助額は<strong>基本額20万円</strong>に、<span class="marker-green">子育て世帯加算・転入加算で最大30万円</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>大野城市内に住宅を新築または購入すること</p><p>夫婦のいずれかが40歳未満、または18歳未満の子がいる世帯</p><p>5年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>大野城市役所建設環境部に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅引渡し後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>で、子育て世帯加算（18歳未満の子がいる場合）5万円、市外からの転入加算5万円で、<strong>最大30万円</strong>です。</p><p><span class="marker">中古住宅も対象ですが、親族間売買は対象外</span>です。</p><div class="highlight-box">大野城市は大型商業施設や公園も充実しており、子育て世帯に人気の住宅エリアです。まどかぴあ（生涯学習センター）など公共施設も充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-infertility',
    title: '大野城市 不妊治療費助成事業',
    organization: '大野城市',
    type: 'local',
    maxAmount: '1回あたり最大5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['大野城市', '不妊治療', '助成金'],
    eligibility: '大野城市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '治療終了日から90日以内',
    description: '大野城市が実施する不妊治療費助成事業です。不妊治療の自己負担分を1回あたり最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦</span>の経済的負担を軽減するための助成制度です。</p><p>大野城市は子育て世帯が多く住む住宅都市であり、子どもを望む夫婦への支援に積極的に取り組んでいます。保険適用後もなお高額となる治療費に対して、市独自の上乗せ助成を行います。</p><p><span class="marker-green">保険適用治療の自己負担分と先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが大野城市に住民登録があることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>大野城市役所健康課に書類を提出します。<span class="marker">治療終了日から90日以内に申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療あたり最大5万円</strong>です。</p><p><span class="marker">福岡県の不妊治療費助成制度との併用が可能</span>です。県の助成後の自己負担分に対して市の助成が適用されます。</p><div class="note-box">通院にかかる交通費は対象外です。年間の助成回数に制限がありますので、窓口で事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-scholarship',
    title: '大野城市 奨学金貸付制度',
    organization: '大野城市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '福岡県',
    tags: ['大野城市', '奨学金', '教育支援'],
    eligibility: '大野城市に住所を有する世帯の子で、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '大野城市が実施する奨学金貸付制度です。経済的理由で修学困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 奨学金貸付制度は、<span class="marker">経済的理由で修学が困難な学生</span>に対し、無利子で奨学金を貸与する制度です。</p><p>大野城市は教育に力を入れており、ICT教育の推進や小中一貫教育など先進的な取り組みで知られています。経済的事情に左右されず学び続けられるよう、本制度を通じて学生を応援しています。</p><p>貸与月額は<strong>高校生1.5万円、大学生・専門学校生3万円</strong>で、<span class="marker-green">無利子</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が大野城市に住民登録を有すること</p><p>高等学校・大学・専門学校等に在学中または入学予定であること</p><p>学業成績が一定水準以上であること</p><p>経済的に修学が困難であること</p></div><p>大野城市教育委員会教育政策課に申請書を提出します。成績証明書と所得証明書を添付してください。</p><p><span class="marker">選考は書類審査で行われ、5月頃に結果通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生：月額1.5万円、大学生・専門学校生：月額3万円</strong>です。</p><p><span class="marker">返還は卒業後1年の猶予期間を経て、貸与期間の3倍以内に完了</span>します。</p><div class="note-box">他の奨学金との併用は原則可能です。大野城市内に就職して一定期間定住した場合の返還免除措置があるかどうかは窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-sme-support',
    title: '大野城市 中小企業振興補助金',
    organization: '大野城市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['大野城市', '中小企業支援', '補助金'],
    eligibility: '大野城市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '大野城市が実施する中小企業振興補助金です。販路開拓やIT導入などの経費を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 中小企業振興補助金は、<span class="marker">市内の中小企業者の経営基盤強化</span>を目的とした補助金です。</p><p>大野城市は福岡都市圏南部の交通結節点に位置し、小売業・サービス業を中心とした中小企業が数多く事業を営んでいます。展示会出展やホームページ構築、新商品開発など幅広い経営課題を支援します。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">大野城市商工会の推薦を受けると採択で有利</span>になります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>大野城市内に主たる事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p><p>年度内に事業を完了できること</p></div><p>大野城市役所ふるさとにぎわい課に事業計画書と申請書を提出します。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。展示会出展費、広告宣伝費、IT導入費などが対象です。</p><p><span class="marker">1事業者あたり年度内1回</span>の利用に限られます。</p><div class="note-box">人件費・飲食費は対象外です。採択後は事業実施報告書の提出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-nursing-equipment',
    title: '大野城市 介護用品支給事業',
    organization: '大野城市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['大野城市', '介護用品', '支給事業'],
    eligibility: '大野城市に住所を有する要介護4・5の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '大野城市が実施する介護用品支給事業です。重度の要介護者を在宅介護する家族に年間6万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた方を在宅で介護している家族</span>に対して、紙おむつなどの介護用品を支給する制度です。</p><p>大野城市は高齢化が進む中でも在宅介護を続ける家族を支援するため、介護用品の現物支給を通じて経済的負担を軽減しています。</p><p><span class="marker-green">市民税非課税世帯を対象に、年間6万円相当の介護用品を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>大野城市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護者・被介護者がともに市民税非課税世帯であること</p><p>被介護者が施設に入所していないこと</p></div><p>大野城市役所長寿支援課に介護保険被保険者証を持参して申請します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間6万円相当</strong>（月額5,000円相当）の介護用品です。</p><p><span class="marker">紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などから選択</span>できます。</p><div class="note-box">入院中・施設入所中は支給対象外となります。要介護度の変更時は再申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-elderly-support',
    title: '大野城市 高齢者見守り・緊急通報サービス',
    organization: '大野城市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '福岡県',
    tags: ['大野城市', '高齢者支援', '見守り'],
    eligibility: '大野城市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '大野城市が実施する高齢者見守り・緊急通報サービスです。ひとり暮らし高齢者に緊急通報装置を無料で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 高齢者見守り・緊急通報サービスは、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に緊急通報装置を無料で貸与するサービスです。</p><p>大野城市は住宅地が広がるコンパクトな都市で、地域の見守りネットワークの構築に力を入れています。緊急ボタンを押すだけでコールセンターや消防に通報される仕組みで、高齢者の安心な暮らしを守ります。</p><p><span class="marker-green">設置費用・月額利用料は市が全額負担</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>大野城市に住民登録がある65歳以上の方</p><p>ひとり暮らし、または高齢者のみの世帯</p><p>心身上の理由により日常生活に不安がある方</p></div><p>大野城市役所長寿支援課または地域包括支援センターで申請します。民生委員の推薦が必要な場合があります。</p><p><span class="marker">申請から設置まで約2〜3週間</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の設置費・月額利用料は市の負担</strong>で、利用者の自己負担はありません。</p><p><span class="marker">緊急ボタンを押すとコールセンターに通報され、状況に応じて救急車の手配や近隣協力員への連絡</span>が行われます。</p><div class="note-box">固定電話回線が必要ですが、携帯回線対応の機器もあります。詳細は窓口にご相談ください。入院中・施設入所中は一時停止が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'onojo-seismic-diagnosis',
    title: '大野城市 木造住宅耐震診断補助事業',
    organization: '大野城市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '福岡県',
    tags: ['大野城市', '耐震診断', '防災'],
    eligibility: '大野城市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '大野城市が実施する木造住宅耐震診断補助事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大野城市 木造住宅耐震診断補助事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>福岡県西方沖地震（2005年）の教訓から、大野城市では住宅の耐震化を重点的に推進しています。耐震診断の自己負担を大幅に軽減し、市民が気軽に自宅の安全性を確認できる環境を整えています。</p><p><span class="marker-green">自己負担3,000円程度で専門家による耐震診断を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>大野城市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p></div><p>大野城市役所建設環境部都市計画課に申請書を提出します。市が派遣する耐震診断士が現地調査を行います。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち、<strong>自己負担は3,000円程度</strong>です。</p><p><span class="marker">診断で耐震性不足と判定された場合、耐震改修工事の補助制度（別制度）も利用可能</span>です。</p><div class="highlight-box">大野城市は水城跡などの歴史的遺構が多い地域ですが、地盤特性を踏まえた耐震対策が重要です。まずは診断で自宅の状況を把握しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.onojo.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 飯塚市（福岡県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'iizuka-childcare-subsidy',
    title: '飯塚市 子育て応援給付金',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '児童1人あたり年間2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['飯塚市', '子育て支援', '給付金'],
    eligibility: '飯塚市に住所を有し、18歳未満の児童を養育している保護者',
    applicationPeriod: '毎年4月〜6月',
    description: '飯塚市が実施する子育て応援給付金です。18歳未満の児童を養育する世帯に年間2万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 子育て応援給付金は、<span class="marker">18歳未満の児童を養育する保護者</span>に対し、子育ての経済的負担を軽減するための独自給付金です。</p><p>かつて筑豊炭田の中心地として栄えた飯塚市は、近年e-ZUKAトライバレー構想のもとIT企業の集積が進む変革の街です。若い世代の定住を促すため、子育て支援策を積極的に展開しています。</p><p><span class="marker-green">所得制限なしで、飯塚市内のすべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>飯塚市に住民登録があり、18歳未満の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（対象世帯に送付）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>毎年4月頃に飯塚市から案内が届きます。飯塚市役所こども育成課に提出してください。<strong>年度途中の転入者も随時申請可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり年間2万円</strong>です。</p><p><span class="marker">年1回、10月頃に指定口座へ振り込まれます</span>。申請期限を過ぎた場合は当該年度分を受給できません。</p><div class="note-box">児童手当とは別制度で併給可能です。年度途中の転出は月割計算で精算されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-birth-bonus',
    title: '飯塚市 出産祝い金',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['飯塚市', '出産祝い金', '給付金'],
    eligibility: '飯塚市に住所を有し、出産した方（出産日に6か月以上居住）',
    applicationPeriod: '出産後60日以内',
    description: '飯塚市が実施する出産祝い金です。出産した保護者に対し、第1子5万円から第3子以降20万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 出産祝い金は、<span class="marker">飯塚市で新たにお子さんが誕生した世帯</span>に対して支給されるお祝い金です。</p><p>飯塚市は筑豊地域の中心都市で、九州工業大学情報工学部のキャンパスを擁する学術都市でもあります。若い世代の定住と少子化対策の一環として、出産祝い金制度を設けています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降20万円</strong>です。<span class="marker-green">多子世帯に手厚い支給設計</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日において飯塚市に6か月以上住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>出生届提出後に飯塚市役所こども育成課で申請します。<span class="marker">出産後60日以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降は1人につき20万円</strong>です。</p><p><span class="marker">多胎児の場合、それぞれの出生順に応じた額が支給されます</span>。</p><div class="note-box">出生順は養育している18歳未満の児童数で判定します。申請期限を過ぎると受給できません。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-housing-purchase',
    title: '飯塚市 住宅取得支援補助金',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['飯塚市', '住宅取得', '補助金'],
    eligibility: '飯塚市内に新たに住宅を取得し居住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '飯塚市が実施する住宅取得支援補助金です。市内に住宅を取得した方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 住宅取得支援補助金は、<span class="marker">飯塚市内に新たに住宅を取得し定住する方</span>を対象に取得費用の一部を補助する制度です。</p><p>飯塚市は筑豊地域の中核都市で、福岡市から車で約40分の距離にあります。近年はIT企業の誘致や大学連携による街づくりが進んでおり、住宅取得支援を通じて人口の維持・増加を図っています。</p><p>補助額は<strong>基本額30万円</strong>で、<span class="marker-green">子育て世帯加算や市外からの転入加算で最大50万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>飯塚市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>飯塚市役所都市建設部に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅引渡し後6か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額<strong>30万円</strong>に以下の加算があります：子育て世帯加算10万円、市外転入加算10万円で、<strong>最大50万円</strong>です。</p><p><span class="marker">中古住宅も対象ですが、親族間売買は除きます</span>。</p><div class="highlight-box">飯塚市は福岡都市圏に比べて住宅価格が割安で、広い敷地に戸建住宅を建てやすい環境です。IT企業でのリモートワークと組み合わせた移住先として注目されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-infertility',
    title: '飯塚市 不妊治療費助成事業',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['飯塚市', '不妊治療', '助成金'],
    eligibility: '飯塚市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '治療終了日から60日以内',
    description: '飯塚市が実施する不妊治療費助成事業です。不妊治療にかかる費用を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦</span>の経済的負担を軽減するための助成制度です。</p><p>飯塚市は少子化対策を重要施策と位置づけ、子どもを望む夫婦への支援を手厚く行っています。保険適用後も残る高額な自己負担に対して、市独自の上乗せ助成を実施しています。</p><p><span class="marker-green">保険適用治療の自己負担分と先進医療費の両方が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが飯塚市に住民登録があることが要件です。事実婚も対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>飯塚市役所健康増進課に書類を提出します。<span class="marker">治療終了日から60日以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回あたり最大10万円</strong>です。年間の回数制限がありますので事前にご確認ください。</p><p><span class="marker">福岡県の不妊治療費助成との併用が可能</span>です。</p><div class="note-box">通院交通費は対象外です。飯塚市内には高度な不妊治療に対応する医療機関があり、地元での治療も検討できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-scholarship',
    title: '飯塚市 奨学金制度',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '月額3.5万円（大学生）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '福岡県',
    tags: ['飯塚市', '奨学金', '教育支援'],
    eligibility: '飯塚市に住所を有する世帯の子で、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '飯塚市が実施する奨学金制度です。経済的理由で修学困難な学生に月額最大3.5万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 奨学金制度は、<span class="marker">経済的理由で修学が困難な学生</span>に対して無利子で奨学金を貸与する制度です。</p><p>飯塚市には九州工業大学情報工学部や近畿大学産業理工学部が立地し、多くの学生が学んでいます。地元からの進学者が経済的理由で学業を断念しないよう、充実した奨学金制度を整備しています。</p><p>貸与月額は<strong>高校生2万円、大学生・専門学校生3.5万円</strong>で、<span class="marker-green">無利子</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が飯塚市に住民登録を有すること</p><p>高校・大学・専門学校等に在学中または入学予定であること</p><p>学業成績が一定水準以上であること</p><p>経済的に修学困難であること</p></div><p>飯塚市教育委員会に申請書、成績証明書、所得証明書を提出します。</p><p><span class="marker">選考結果は5月頃に通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生：月額2万円、大学生・専門学校生：月額3.5万円</strong>です。</p><p><span class="marker">返還は卒業後1年の猶予を経て、貸与期間の3倍以内に完了</span>する必要があります。</p><div class="note-box">飯塚市に就職して定住した場合、返還免除の特例がある場合があります。IT産業の集積地である飯塚市での就職は選択肢が広がっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-sme-support',
    title: '飯塚市 中小企業経営革新補助金',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['飯塚市', '中小企業支援', '補助金'],
    eligibility: '飯塚市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '飯塚市が実施する中小企業経営革新補助金です。IT導入や販路拡大などの経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 中小企業経営革新補助金は、<span class="marker">市内中小企業のIT活用や経営革新</span>を支援するための補助金です。</p><p>飯塚市はe-ZUKAトライバレー構想のもと、IT産業の集積が進む筑豊地域の中心都市です。従来型の製造業・商業からIT活用による経営効率化まで、幅広い業種の経営革新を後押しします。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">IT導入関連の申請は優先的に採択</span>される傾向があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>飯塚市内に主たる事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>経営革新に資する事業計画書を提出できること</p><p>年度内に事業を完了できること</p></div><p>飯塚市役所商工観光課に事業計画書と申請書を提出します。</p><p><span class="marker">飯塚市IT推進協議会の支援を受けた計画は審査で高く評価されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。IT導入費、設備導入費、展示会出展費、広告宣伝費が対象です。</p><p><span class="marker">交付決定前の支出は対象外</span>です。</p><div class="note-box">飯塚市は国のデジタル田園都市構想にも参画しており、IT活用による地域課題解決に積極的です。補助金活用とあわせてIT推進拠点の利用も検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-nursing-equipment',
    title: '飯塚市 介護用品支給事業',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '年間7.5万円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['飯塚市', '介護用品', '支給事業'],
    eligibility: '飯塚市に住所を有する要介護3以上の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '飯塚市が実施する介護用品支給事業です。重度の要介護者を在宅介護する家族に年間7.5万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 介護用品支給事業は、<span class="marker">要介護3以上の認定を受けた方を在宅で介護している家族</span>に対して介護用品を支給する制度です。</p><p>飯塚市は高齢化率が福岡県平均を上回る地域であり、在宅介護を支える家族への支援は重要課題です。紙おむつなどの消耗品を現物支給し、介護家族の経済的負担と買い物の手間を軽減します。</p><p><span class="marker-green">要介護3以上が対象で、市民税非課税世帯に年間7.5万円相当を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>飯塚市に住民登録があること</p><p>要介護3・4・5の認定を受けた方を在宅介護していること</p><p>介護者・被介護者がともに市民税非課税世帯であること</p><p>被介護者が施設に入所していないこと</p></div><p>飯塚市役所介護保険課に介護保険被保険者証を持参して申請します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間7.5万円相当</strong>（月額約6,250円相当）です。紙おむつ・尿取りパッド・清拭剤等が対象です。</p><p><span class="marker">毎月、市が指定する事業者から自宅へ配達</span>されます。</p><div class="note-box">入院中・施設入所中は支給停止です。要介護度の変更時は再申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-elderly-support',
    title: '飯塚市 高齢者外出支援事業',
    organization: '飯塚市',
    type: 'local',
    maxAmount: 'タクシー券年間1.2万円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '福岡県',
    tags: ['飯塚市', '高齢者支援', '外出支援'],
    eligibility: '飯塚市に住所を有する75歳以上で、自動車運転免許を持たない方',
    applicationPeriod: '毎年4月〜（随時受付）',
    description: '飯塚市が実施する高齢者外出支援事業です。75歳以上の方にタクシー利用券を年間1.2万円分交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 高齢者外出支援事業は、<span class="marker">75歳以上で自動車運転免許を持たない方</span>に対してタクシー利用券を交付し、日常の外出を支援する制度です。</p><p>飯塚市は筑豊地域の広い市域を持ち、公共交通が十分でない地区もあります。高齢者が通院や買い物などで外出する際の移動手段を確保し、社会参加を促進することを目的としています。</p><p><span class="marker-green">年間1.2万円分のタクシー利用券が交付</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用要件"><p>飯塚市に住民登録がある75歳以上の方</p><p>自動車運転免許証を所持していないこと</p><p>市民税非課税世帯であること</p></div><p>飯塚市役所高齢者支援課に申請書と保険証等を持参して申請します。運転免許証返納済みの方はその証明書もお持ちください。</p><p><span class="marker">申請後、タクシー利用券が交付されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>1.2万円分（500円券×24枚）</strong>のタクシー利用券が交付されます。1回の乗車につき1枚使用できます。</p><p><span class="marker">利用できるタクシー会社は飯塚市が指定する事業者</span>に限られます。</p><div class="note-box">利用券は年度末（3月31日）が有効期限です。バス路線の利用が可能な場合はバスとの併用も検討しましょう。年度途中の申請は月割での交付となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iizuka-seismic-diagnosis',
    title: '飯塚市 木造住宅耐震診断補助事業',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '福岡県',
    tags: ['飯塚市', '耐震診断', '防災'],
    eligibility: '飯塚市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月（予算に達し次第終了）',
    description: '飯塚市が実施する木造住宅耐震診断補助事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>飯塚市 木造住宅耐震診断補助事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>飯塚市は旧産炭地に多く残る古い住宅の耐震化が課題となっています。南海トラフ地震や内陸直下型地震に備え、まずは耐震診断で自宅の安全性を確認することを推奨しています。</p><p><span class="marker-green">自己負担3,000円程度で専門家による耐震診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>飯塚市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p></div><p>飯塚市役所都市建設部建築住宅課に申請書を提出します。市が派遣する耐震診断士が現地調査を実施します。</p><p><span class="marker">先着順で受付し、予算に達し次第終了</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち、<strong>自己負担は3,000円程度</strong>です。残りは飯塚市と福岡県が負担します。</p><p><span class="marker">診断で耐震性不足と判定された場合は、耐震改修工事の補助制度（別制度）も利用可能</span>です。</p><div class="highlight-box">筑豊地域には昭和期に建設された住宅が多く残っています。耐震診断は住まいの安全を確認する第一歩です。費用負担が少ないうちにぜひご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 諫早市（長崎県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'isahaya-childcare-subsidy',
    title: '諫早市 子育て応援給付金',
    organization: '諫早市',
    type: 'local',
    maxAmount: '児童1人あたり年間3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['諫早市', '子育て支援', '給付金'],
    eligibility: '諫早市に住所を有し、18歳未満の児童を養育している保護者',
    applicationPeriod: '毎年4月〜6月',
    description: '諫早市が実施する子育て応援給付金です。18歳未満の児童を養育する世帯に年間3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 子育て応援給付金は、<span class="marker">18歳未満の児童を養育する保護者</span>に対し、子育てにかかる経済的負担を軽減するための独自給付金です。</p><p>長崎県のほぼ中央に位置する諫早市は、諫早湾干拓地や轟峡の清流など豊かな自然環境に恵まれた交通の要衝です。子育て世帯の定住促進に向けて、手厚い支援策を展開しています。</p><p><span class="marker-green">所得制限なしで、すべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>諫早市に住民登録があり、18歳未満の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（対象世帯に送付）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>毎年4月頃に諫早市から案内が届きます。諫早市役所こども支援課に提出してください。<strong>転入世帯は随時申請可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり年間3万円</strong>です。</p><p><span class="marker">支給は年1回、10月頃に指定口座へ振り込まれます</span>。</p><div class="note-box">児童手当とは別制度で併給可能です。年度途中の転出は月割計算となります。申請期限を過ぎると当該年度分は受給できません。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-birth-bonus',
    title: '諫早市 出産祝い金',
    organization: '諫早市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降30万円',
    maxAmountNum: 30,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['諫早市', '出産祝い金', '給付金'],
    eligibility: '諫早市に住所を有し、出産した方（出産日に6か月以上居住）',
    applicationPeriod: '出産後60日以内',
    description: '諫早市が実施する出産祝い金です。出産した保護者に対し、第1子5万円から第3子以降30万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 出産祝い金は、<span class="marker">諫早市で新たにお子さんが誕生した世帯</span>に対して支給されるお祝い金です。</p><p>諫早市はJR長崎本線・大村線・島原鉄道が交差する長崎県の交通結節点で、西九州新幹線の開業により利便性がさらに向上しました。少子化対策として、特に第3子以降の支給額を手厚くしています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降30万円</strong>です。<span class="marker-green">第3子以降は長崎県内でもトップクラスの支給額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日において諫早市に6か月以上住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>出生届提出後に諫早市役所こども支援課で申請します。<span class="marker">出産後60日以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降は1人につき30万円</strong>です。</p><p><span class="marker">多胎児の場合はそれぞれの出生順に応じた額が合算</span>されます。</p><div class="note-box">出生順は養育している18歳未満の児童数で判定します。期限を過ぎると受給できませんのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-housing-purchase',
    title: '諫早市 住宅取得支援補助金',
    organization: '諫早市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '長崎県',
    tags: ['諫早市', '住宅取得', '補助金'],
    eligibility: '諫早市内に新たに住宅を取得し居住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '諫早市が実施する住宅取得支援補助金です。市内に住宅を取得し定住する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 住宅取得支援補助金は、<span class="marker">諫早市内に新たに住宅を取得し定住する方</span>を対象に、費用の一部を補助する制度です。</p><p>西九州新幹線の開業で長崎市・佐賀市へのアクセスが向上した諫早市は、移住先としての注目度が高まっています。温暖な気候と充実した生活環境を活かし、定住人口の増加を図っています。</p><p>補助額は<strong>基本額30万円</strong>で、<span class="marker-green">子育て世帯加算・転入加算で最大50万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>諫早市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>諫早市役所建築住宅課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅引渡し後6か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額<strong>30万円</strong>に加え、子育て世帯加算10万円、市外転入加算10万円で<strong>最大50万円</strong>です。</p><p><span class="marker">中古住宅も対象ですが、親族間売買は対象外</span>です。</p><div class="highlight-box">諫早市は長崎市のベッドタウンとしても機能しており、住宅価格は長崎市中心部に比べて割安です。西九州新幹線の恩恵で通勤圏がさらに広がっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-infertility',
    title: '諫早市 不妊治療費助成事業',
    organization: '諫早市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '長崎県',
    tags: ['諫早市', '不妊治療', '助成金'],
    eligibility: '諫早市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '治療終了日から60日以内',
    description: '諫早市が実施する不妊治療費助成事業です。不妊治療にかかる費用を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦</span>の経済的負担を軽減するための助成制度です。</p><p>諫早市は子育て支援を重要施策と位置づけ、妊娠前からの支援にも力を入れています。保険適用後も残る自己負担や先進医療費に対して、市独自の上乗せ助成を行っています。</p><p><span class="marker-green">保険適用治療の自己負担分と先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが諫早市に住民登録があることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>諫早市役所健康づくり課に書類を提出します。<span class="marker">治療終了日から60日以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回あたり最大10万円</strong>です。</p><p><span class="marker">長崎県の不妊治療費助成との併用が可能</span>です。県の助成後の自己負担に対して市の助成が適用されます。</p><div class="note-box">通院交通費は対象外です。年間の回数制限がありますので事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-scholarship',
    title: '諫早市 奨学金貸付制度',
    organization: '諫早市',
    type: 'local',
    maxAmount: '月額3万円（大学生）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '長崎県',
    tags: ['諫早市', '奨学金', '教育支援'],
    eligibility: '諫早市に住所を有する世帯の子で、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '諫早市が実施する奨学金貸付制度です。経済的理由で修学困難な学生に月額最大3万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 奨学金貸付制度は、<span class="marker">経済的理由で修学が困難な学生</span>に対して無利子で奨学金を貸与する制度です。</p><p>諫早市には長崎県立大学や長崎ウエスレヤン大学など複数の高等教育機関があり、教育に対する市民の関心が高い地域です。経済的事情で進学を諦めることがないよう、本制度を通じて学生の学びを支援しています。</p><p>貸与月額は<strong>高校生1.5万円、大学生・専門学校生3万円</strong>で、<span class="marker-green">無利子</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が諫早市に住民登録を有すること</p><p>高校・大学・専門学校等に在学中または入学予定であること</p><p>学業成績が一定水準以上であること</p><p>経済的に修学困難であること</p></div><p>諫早市教育委員会に申請書と成績証明書、所得証明書を提出します。</p><p><span class="marker">選考は書類審査で、5月頃に結果が通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生：月額1.5万円、大学生・専門学校生：月額3万円</strong>です。</p><p><span class="marker">返還は卒業後1年の猶予を経て、貸与期間の3倍以内に完了</span>します。</p><div class="note-box">他の奨学金との併用は原則可能です。諫早市内に就職して定住した場合の返還減免制度については窓口でお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-sme-support',
    title: '諫早市 中小企業振興補助金',
    organization: '諫早市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '長崎県',
    tags: ['諫早市', '中小企業支援', '補助金'],
    eligibility: '諫早市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '諫早市が実施する中小企業振興補助金です。販路開拓や設備導入などの経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 中小企業振興補助金は、<span class="marker">市内中小企業の販路拡大や経営基盤強化</span>を支援するための補助金です。</p><p>諫早市は長崎県の交通の要衝に位置し、製造業・農林水産業・サービス業など多様な産業が発展しています。西九州新幹線の開業を契機とした経済活性化に向けて、中小企業の競争力強化を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">新幹線開業に関連する事業は優先的に採択</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>諫早市内に主たる事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p><p>年度内に事業を完了できること</p></div><p>諫早市役所商工振興課に事業計画書と申請書を提出します。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。展示会出展費、広告宣伝費、設備導入費、IT導入費が対象です。</p><p><span class="marker">1事業者あたり年度内1回の利用</span>に限られます。</p><div class="note-box">長崎県の中小企業支援制度との併用が可能な場合があります。事前に窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-nursing-equipment',
    title: '諫早市 介護用品支給事業',
    organization: '諫早市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '長崎県',
    tags: ['諫早市', '介護用品', '支給事業'],
    eligibility: '諫早市に住所を有する要介護4・5の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '諫早市が実施する介護用品支給事業です。重度の要介護者を在宅介護する家族に年間6万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた方を在宅で介護している家族</span>に対して介護用品を支給する制度です。</p><p>諫早市は高齢化が進む長崎県の中でも在宅介護支援に力を入れている自治体です。紙おむつなどの介護用品の現物支給を通じて、介護家族の経済的負担を軽減します。</p><p><span class="marker-green">市民税非課税世帯を対象に、年間6万円相当の介護用品を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>諫早市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅介護していること</p><p>介護者・被介護者がともに市民税非課税世帯であること</p><p>被介護者が施設に入所していないこと</p></div><p>諫早市役所高齢介護課に介護保険被保険者証を持参して申請します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間6万円相当</strong>（月額5,000円相当）の介護用品です。</p><p><span class="marker">紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などから選択</span>できます。</p><div class="note-box">入院中・施設入所中は支給停止となります。要介護度変更時は再申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-elderly-support',
    title: '諫早市 高齢者見守りネットワーク事業',
    organization: '諫早市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '長崎県',
    tags: ['諫早市', '高齢者支援', '見守り'],
    eligibility: '諫早市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '諫早市が実施する高齢者見守りネットワーク事業です。ひとり暮らし高齢者に緊急通報装置を無料で貸与し見守り体制を構築します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 高齢者見守りネットワーク事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に緊急通報装置を貸与し、地域全体で見守る仕組みを構築する事業です。</p><p>諫早市は中山間地域を含む広い市域を持ち、高齢者の孤立防止が重要課題です。緊急通報装置に加え、民生委員やボランティアによる定期訪問など、重層的な見守り体制を整えています。</p><p><span class="marker-green">装置の設置費・月額利用料は市が負担し、利用者負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>諫早市に住民登録がある65歳以上の方</p><p>ひとり暮らしまたは高齢者のみの世帯</p><p>身体上の理由で日常生活に不安がある方</p></div><p>諫早市役所高齢介護課または地域包括支援センターで申請します。</p><p><span class="marker">申請から装置設置まで約2〜3週間</span>かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の設置費・月額利用料は全額市負担</strong>で、利用者負担はありません。</p><p><span class="marker">緊急ボタンを押すとコールセンターに自動通報され、状況に応じて救急車手配や協力員への連絡</span>が行われます。</p><div class="note-box">固定電話回線が必要ですが、携帯回線対応機器の導入も進んでいます。入院中・施設入所中は利用を一時停止します。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isahaya-seismic-diagnosis',
    title: '諫早市 木造住宅耐震診断助成事業',
    organization: '諫早市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '長崎県',
    tags: ['諫早市', '耐震診断', '防災'],
    eligibility: '諫早市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月（予算に達し次第終了）',
    description: '諫早市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>諫早市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>長崎県は雲仙普賢岳の火山活動や過去の地震被害の経験から、防災意識の高い地域です。諫早市でも住宅の耐震化を促進するため、耐震診断の自己負担を大幅に軽減しています。</p><p><span class="marker-green">自己負担3,000円程度で専門家による耐震診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>諫早市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p></div><p>諫早市役所建築住宅課に申請書を提出します。市が派遣する耐震診断士が現地調査を実施します。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち、<strong>自己負担は3,000円程度</strong>です。残りは諫早市と長崎県が補助します。</p><p><span class="marker">診断で耐震性不足と判定された場合は、耐震改修補助制度（別制度）も利用可能</span>です。</p><div class="highlight-box">長崎県は雲仙・島原地域の火山活動に加え、活断層による地震リスクもあります。まずは耐震診断で住まいの安全性を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.isahaya.nagasaki.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 都城市（宮崎県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'miyakonojo-childcare-subsidy',
    title: '都城市 子育て応援給付金',
    organization: '都城市',
    type: 'local',
    maxAmount: '児童1人あたり年間3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '宮崎県',
    tags: ['都城市', '子育て支援', '給付金'],
    eligibility: '都城市に住所を有し、18歳未満の児童を養育している保護者',
    applicationPeriod: '毎年4月〜6月',
    description: '都城市が実施する子育て応援給付金です。18歳未満の児童を養育する世帯に年間3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 子育て応援給付金は、<span class="marker">18歳未満の児童を養育する保護者</span>に対し、子育ての経済的負担を軽減するための独自給付金です。</p><p>宮崎県第2の都市・都城市は、ふるさと納税で日本一を複数回達成した実績のある自治体です。その財源を活かし、子育て世帯への経済的支援を充実させています。宮崎牛や都城産焼酎で知られる豊かな農畜産業の街で、子育て環境の整備にも積極的です。</p><p><span class="marker-green">所得制限なしで、すべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>都城市に住民登録があり、18歳未満の児童を養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（対象世帯に送付）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>毎年4月頃に都城市から案内が届きます。都城市役所こども政策課へ提出してください。<strong>年度途中の転入者も随時申請可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり年間3万円</strong>です。</p><p><span class="marker">支給は年1回、10月頃に指定口座へ振り込まれます</span>。</p><div class="note-box">児童手当とは別制度で併給可能です。年度途中の転出は月割計算となります。申請期限を過ぎると受給できません。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-birth-bonus',
    title: '都城市 出産祝い金',
    organization: '都城市',
    type: 'local',
    maxAmount: '第1子10万円・第2子15万円・第3子以降30万円',
    maxAmountNum: 30,
    category: 'childcare',
    prefecture: '宮崎県',
    tags: ['都城市', '出産祝い金', '給付金'],
    eligibility: '都城市に住所を有し、出産した方（出産日に6か月以上居住）',
    applicationPeriod: '出産後60日以内',
    description: '都城市が実施する出産祝い金です。出産した保護者に対し、第1子10万円から第3子以降30万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 出産祝い金は、<span class="marker">都城市で新たにお子さんが誕生した世帯</span>に対して支給されるお祝い金です。</p><p>都城市はふるさと納税日本一の実績を持ち、その財源を活かした手厚い出産支援を実施しています。畜産業と焼酎製造で全国的に知られる豊かな街で、安心して子育てできる環境づくりに注力しています。</p><p>支給額は<strong>第1子10万円、第2子15万円、第3子以降30万円</strong>と、<span class="marker-green">宮崎県内でもトップクラスの支給額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日において都城市に6か月以上住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝い金申請書</p><p>母子健康手帳の写し</p><p>申請者の本人確認書類</p><p>振込先口座情報</p></div><p>出生届提出後に都城市役所こども政策課で申請します。<span class="marker">出産後60日以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子10万円、第2子15万円、第3子以降は1人につき30万円</strong>です。</p><p><span class="marker">多胎児の場合はそれぞれの出生順に応じた額が合算して支給</span>されます。</p><div class="note-box">出生順は養育している18歳未満の児童数で判定します。期限を過ぎた場合は受給できませんのでご注意ください。都城市は子育て関連のイベントや相談窓口も充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-housing-purchase',
    title: '都城市 住宅取得支援補助金',
    organization: '都城市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '宮崎県',
    tags: ['都城市', '住宅取得', '補助金'],
    eligibility: '都城市内に新たに住宅を取得し居住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '都城市が実施する住宅取得支援補助金です。市内に住宅を取得した方に最大60万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 住宅取得支援補助金は、<span class="marker">都城市内に新たに住宅を取得し定住する方</span>を対象に取得費用の一部を補助する制度です。</p><p>都城市は霧島連山の麓に広がる自然豊かな都市で、宮崎県第2の人口を擁します。ふるさと納税の財源を活用した手厚い住宅取得支援で、移住・定住を促進しています。</p><p>補助額は<strong>基本額30万円</strong>で、<span class="marker-green">子育て世帯加算・転入加算・地元産木材使用加算で最大60万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>都城市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>都城市役所建築課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅引渡し後6か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額<strong>30万円</strong>に以下の加算があります：子育て世帯加算10万円、市外転入加算10万円、地元産木材使用加算10万円で<strong>最大60万円</strong>です。</p><p><span class="marker">都城産の杉・檜を一定量使用した新築住宅には木材使用加算が適用</span>されます。</p><div class="highlight-box">都城市は土地価格が手頃で、広い敷地に余裕のある住宅を建てやすい環境です。鹿児島空港にも近く、温暖な気候が魅力の移住先です。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-infertility',
    title: '都城市 不妊治療費助成事業',
    organization: '都城市',
    type: 'local',
    maxAmount: '1回あたり最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '宮崎県',
    tags: ['都城市', '不妊治療', '助成金'],
    eligibility: '都城市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '治療終了日から60日以内',
    description: '都城市が実施する不妊治療費助成事業です。不妊治療にかかる費用を1回あたり最大15万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦</span>の経済的負担を軽減するための助成制度です。</p><p>都城市はふるさと納税の財源を活かし、少子化対策に積極的に取り組んでいます。1回あたり最大15万円と、宮崎県内でも手厚い助成額を設定し、子どもを望む夫婦を強力にサポートしています。</p><p><span class="marker-green">保険適用治療の自己負担分と先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが都城市に住民登録があることが要件です。事実婚も対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>都城市役所健康課に書類を提出します。<span class="marker">治療終了日から60日以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回あたり最大15万円</strong>です。年間の回数制限がありますのでご確認ください。</p><p><span class="marker">宮崎県の不妊治療費助成との併用が可能</span>です。県の助成後の自己負担に対して市の助成が適用されます。</p><div class="note-box">通院交通費は対象外です。都城市から鹿児島市や宮崎市の専門医療機関への通院が必要な場合もありますが、交通費は自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-scholarship',
    title: '都城市 奨学金制度',
    organization: '都城市',
    type: 'local',
    maxAmount: '月額3.5万円（大学生）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '宮崎県',
    tags: ['都城市', '奨学金', '教育支援'],
    eligibility: '都城市に住所を有する世帯の子で、高校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '都城市が実施する奨学金制度です。経済的理由で修学困難な学生に月額最大3.5万円を無利子で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 奨学金制度は、<span class="marker">経済的理由で修学が困難な学生</span>に対して無利子で奨学金を貸与する制度です。</p><p>都城市は南九州大学をはじめとした教育機関が立地し、農業・畜産分野の専門教育に強みを持っています。地元から進学する学生が経済的理由で学業を断念しないよう、充実した奨学金制度を運用しています。</p><p>貸与月額は<strong>高校生2万円、大学生・専門学校生3.5万円</strong>で、<span class="marker-green">無利子</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が都城市に住民登録を有すること</p><p>高校・大学・専門学校等に在学中または入学予定であること</p><p>学業成績が一定水準以上であること</p><p>経済的に修学困難であること</p></div><p>都城市教育委員会に申請書と成績証明書、所得証明書を提出します。</p><p><span class="marker">選考結果は5月頃に通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生：月額2万円、大学生・専門学校生：月額3.5万円</strong>です。</p><p><span class="marker">返還は卒業後1年の猶予を経て、貸与期間の3倍以内に完了</span>します。</p><div class="note-box">都城市に就職して定住した場合の返還免除制度についてはお問い合わせください。農畜産業や食品加工業の就職先が豊富で、地元就職のチャンスが広がっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-sme-support',
    title: '都城市 中小企業経営強化補助金',
    organization: '都城市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '宮崎県',
    tags: ['都城市', '中小企業支援', '補助金'],
    eligibility: '都城市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '都城市が実施する中小企業経営強化補助金です。販路開拓や設備導入などの経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 中小企業経営強化補助金は、<span class="marker">市内中小企業の経営力強化や販路拡大</span>を支援するための補助金です。</p><p>都城市は畜産業・農業をベースとした食品加工業が強く、焼酎メーカーや精肉加工業者などの中小企業が多数立地しています。6次産業化やブランド力強化など、地域産業の付加価値向上を後押しします。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">ふるさと納税返礼品の品質向上に資する事業は優先採択</span>される傾向があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>都城市内に主たる事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p><p>年度内に事業を完了できること</p></div><p>都城市役所商工政策課に事業計画書と申請書を提出します。</p><p><span class="marker">都城商工会議所で事前相談を受けると採択に有利</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備導入費、展示会出展費、広告宣伝費、IT導入費、パッケージデザイン費が対象です。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>です。</p><div class="highlight-box">都城市はふるさと納税で全国から注目される返礼品の産地です。品質向上やブランディングに関する補助は採択実績が多く、地域産品の競争力強化に貢献しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-nursing-equipment',
    title: '都城市 介護用品支給事業',
    organization: '都城市',
    type: 'local',
    maxAmount: '年間7.5万円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '宮崎県',
    tags: ['都城市', '介護用品', '支給事業'],
    eligibility: '都城市に住所を有する要介護3以上の方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '都城市が実施する介護用品支給事業です。重度の要介護者を在宅介護する家族に年間7.5万円相当の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 介護用品支給事業は、<span class="marker">要介護3以上の認定を受けた方を在宅で介護している家族</span>に対して介護用品を支給する制度です。</p><p>都城市は宮崎県内でも高齢化が進む地域であり、在宅介護の支援は重要施策です。紙おむつなどの消耗品を支給することで、介護家族の経済的負担と購入の手間を軽減しています。</p><p><span class="marker-green">要介護3以上が対象で、市民税非課税世帯に年間7.5万円相当を支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>都城市に住民登録があること</p><p>要介護3・4・5の認定を受けた方を在宅介護していること</p><p>介護者・被介護者がともに市民税非課税世帯であること</p><p>被介護者が施設に入所していないこと</p></div><p>都城市役所介護保険課に介護保険被保険者証を持参して申請します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間7.5万円相当</strong>（月額約6,250円相当）です。紙おむつ、尿取りパッド、清拭剤等が対象です。</p><p><span class="marker">毎月、指定事業者から自宅へ配達</span>されます。</p><div class="note-box">入院中・施設入所中は支給停止です。要介護度の変更時は再申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-elderly-support',
    title: '都城市 高齢者外出支援事業',
    organization: '都城市',
    type: 'local',
    maxAmount: 'タクシー券年間1.8万円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '宮崎県',
    tags: ['都城市', '高齢者支援', '外出支援'],
    eligibility: '都城市に住所を有する75歳以上で、自動車運転免許を持たない方',
    applicationPeriod: '毎年4月〜（随時受付）',
    description: '都城市が実施する高齢者外出支援事業です。75歳以上の方にタクシー利用券を年間1.8万円分交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 高齢者外出支援事業は、<span class="marker">75歳以上で自動車運転免許を持たない方</span>に対してタクシー利用券を交付し、外出を支援する制度です。</p><p>都城市は広大な市域を持ち、公共交通機関が十分でない地区も多くあります。高齢者が通院や買い物などで安心して外出できるよう、タクシー利用の経済的負担を軽減しています。</p><p><span class="marker-green">年間1.8万円分のタクシー利用券が交付</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用要件"><p>都城市に住民登録がある75歳以上の方</p><p>自動車運転免許証を所持していないこと</p><p>市民税非課税世帯であること</p></div><p>都城市役所福祉課に申請書と保険証等を持参して申請します。運転免許証返納済みの方はその証明書もお持ちください。</p><p><span class="marker">申請後、タクシー利用券が交付</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>1.8万円分（500円券×36枚）</strong>のタクシー利用券が交付されます。1回の乗車につき1〜2枚使用できます。</p><p><span class="marker">利用できるタクシー会社は都城市が指定する事業者</span>に限られます。</p><div class="note-box">利用券は年度末（3月31日）が有効期限です。年度途中の申請は月割での交付です。都城市ではデマンド交通の実証実験も行っており、将来的な交通手段の多様化も進んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'miyakonojo-seismic-diagnosis',
    title: '都城市 木造住宅耐震診断助成事業',
    organization: '都城市',
    type: 'local',
    maxAmount: '診断費用の自己負担3,000円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '宮崎県',
    tags: ['都城市', '耐震診断', '防災'],
    eligibility: '都城市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月（予算に達し次第終了）',
    description: '都城市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都城市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>都城市は霧島連山に近接する地域であり、火山活動や地震への備えが欠かせません。南海トラフ地震の被害想定地域にも含まれるため、住宅の耐震化促進は防災上の最重要課題です。</p><p><span class="marker-green">自己負担3,000円程度で専門家による耐震診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>都城市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下の在来軸組工法であること</p></div><p>都城市役所建築課に申請書を提出します。市が派遣する耐震診断士が現地調査を行います。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち、<strong>自己負担は3,000円程度</strong>です。残りは都城市と宮崎県が負担します。</p><p><span class="marker">診断で耐震性不足と判定された場合は、耐震改修補助制度（別制度）も利用可能</span>です。</p><div class="highlight-box">都城市は霧島山の火山活動に加え、日向灘の地震リスクも抱えています。まずは耐震診断で自宅の安全性を確認し、必要に応じて耐震改修を検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.miyakonojo.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
