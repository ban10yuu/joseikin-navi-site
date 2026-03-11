import { Grant } from '@/lib/types';

export const cityGrantsBatch10: Grant[] = [
  // ────────────────────────────────────────────────
  // 松江市（島根県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'matsue-child-medical',
    title: '松江市 子ども医療費助成制度',
    organization: '松江市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '島根県',
    tags: ['松江市', '子ども医療費', '助成金'],
    eligibility: '松江市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '松江市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>松江市は宍道湖のほとりに広がる城下町で、国宝松江城を擁する島根県の県庁所在地です。子育て世帯の経済的負担を軽減するため、通院・入院・調剤のすべてが助成対象となっています。</p><p><span class="marker-green">所得制限なし</span>で、松江市に住むすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松江市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>松江市役所子育て部子育て支援課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。島根県内の医療機関であれば受給資格証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関を受診した場合は、償還払い（後日申請で返金）</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。交通事故など第三者行為による傷病は届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.shimane.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-housing-reform',
    title: '松江市 住宅リフォーム助成制度',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '島根県',
    tags: ['松江市', '住宅リフォーム', '助成金'],
    eligibility: '松江市内に居住し、住宅の改修工事を行う方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '松江市が実施する住宅リフォーム助成制度です。市内業者を利用した住宅改修工事に対して最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 住宅リフォーム助成制度は、<span class="marker">市民が居住する住宅の改修工事を市内の施工業者に依頼する場合</span>に、費用の一部を助成する制度です。</p><p>宍道湖畔の気候は冬場の厳しい寒さが特徴で、断熱改修や窓の二重化は生活の質を大きく左右します。バリアフリー化や省エネ改修も対象となっており、住環境の向上と地域経済の活性化を同時に図っています。</p><p>補助率は対象工事費の<strong>10〜20%で、上限30万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>バリアフリー改修（手すり設置、段差解消、浴室改修等）</p><p>省エネ改修（断熱窓・壁の施工、高効率給湯器への交換）</p><p>屋根・外壁の修繕、内装の改修</p><p>耐震改修工事</p></div><p>松江市役所建築指導課に事前相談のうえ申請します。<span class="marker-green">必ず工事着手前に申請が必要</span>で、交付決定を受けてから工事を開始してください。</p><p>市内の施工業者による工事であることが助成の条件です。見積書を複数業者から取得することをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の10〜20%、<strong>上限30万円</strong>が助成されます。工事費が20万円以上の改修が対象です。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となります。年度前半に申請が集中する傾向があるため、早めの相談をおすすめします。</p><div class="highlight-box">松江市では耐震診断の無料実施や、空き家の利活用に関する補助制度も用意しています。住まいに関する支援策を幅広くチェックしてみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.shimane.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsue-startup-support',
    title: '松江市 創業支援補助金',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '島根県',
    tags: ['松江市', '創業支援', '補助金'],
    eligibility: '松江市内で新たに事業を開始する方、または開始して1年以内の方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '松江市が実施する創業支援補助金です。市内で新規創業する際にかかる経費の一部を最大100万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松江市 創業支援補助金は、<span class="marker">市内で新たに事業を始める方を対象に、創業にかかる初期経費を補助</span>する制度です。</p><p>松江市はRubyの聖地として知られるIT産業の集積地でもあり、プログラミング言語Rubyの開発者まつもとゆきひろ氏が在住する縁からIT企業の誘致・創業支援に力を入れています。店舗型ビジネスからIT系スタートアップまで幅広い業種が対象です。</p><p>補助率は対象経費の<strong>1/2で、上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>松江市内で新規創業する方、または創業後1年以内の方</p><p>市が認定する特定創業支援等事業を受けていること</p><p>個人事業主または中小企業者であること</p><p>市税の滞納がないこと</p></div><p>松江市産業経済部商工課に事業計画書を提出し、審査を受けます。</p><p><span class="marker-green">松江市のビジネス支援センター「まつえ産業支援センター」では事業計画の策定サポート</span>も行っています。無料相談を活用して計画を練りましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の1/2、<strong>上限100万円</strong>が補助されます。店舗・事務所の賃料、内装工事費、設備費、広告宣伝費などが対象です。</p><p><span class="marker">交付決定前に支払った経費は補助対象外</span>となります。必ず交付決定後に経費の支出を行ってください。</p><div class="note-box">松江市ではIT企業向けの立地補助金や、UIターン創業者向けの移住支援金との併用が可能な場合があります。複数の支援制度を組み合わせることで、創業時の資金面の負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsue.shimane.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 山口市（山口県）3件: childcare, medical, living
  // ────────────────────────────────────────────────
  {
    slug: 'yamaguchi-city-child-medical',
    title: '山口市 子ども医療費助成制度',
    organization: '山口市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['山口市', '子ども医療費', '助成金'],
    eligibility: '山口市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '山口市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>山口市は山口県の県庁所在地で、瑠璃光寺五重塔や湯田温泉など歴史と文化に恵まれた街です。子育て世帯の定住促進にも力を入れており、医療費助成は重要な子育て支援策の一つです。</p><p><span class="marker-green">所得制限なし</span>で、山口市に住むすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山口市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>山口市役所こども未来部こども家庭課の窓口で申請します。出生届や転入届と同時に手続きできます。申請後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。山口県内の医療機関であれば受給者証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関を受診した場合は、償還払い</span>の手続きが必要です。領収書を添えて市役所に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。入院時の食事代も一部自己負担が発生する場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-senior-medical',
    title: '山口市 高齢者肺炎球菌ワクチン接種費用助成',
    organization: '山口市',
    type: 'local',
    maxAmount: '自己負担約3,000円で接種可能',
    maxAmountNum: 1,
    category: 'medical',
    prefecture: '山口県',
    tags: ['山口市', '予防接種', '高齢者医療'],
    eligibility: '山口市に住所を有する65歳以上で、過去に肺炎球菌ワクチンを接種したことがない方',
    applicationPeriod: '通年（対象年齢の方に個別通知）',
    description: '山口市が実施する高齢者向け肺炎球菌ワクチン接種費用助成です。定期接種の対象者に接種費用を一部助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 高齢者肺炎球菌ワクチン接種費用助成は、<span class="marker">65歳以上の市民を対象に肺炎球菌ワクチンの接種費用を一部助成</span>する制度です。</p><p>肺炎は高齢者の死因として上位に位置しており、特に冬場のインフルエンザ感染後に肺炎を併発するリスクが高まります。予防接種により重症化を防ぐことができるため、山口市では接種費用の負担を軽減しています。</p><p>通常8,000円程度かかる接種費用が、<span class="marker-green">自己負担約3,000円</span>で受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>山口市に住所を有する65歳の方（定期接種対象年度に個別通知）</p><p>60〜64歳で心臓・腎臓・呼吸器に重い障がいのある方</p><p>過去に23価肺炎球菌ワクチンを接種したことがない方</p></div><p>市から届く個別通知に記載の指定医療機関に予約のうえ接種を受けてください。接種当日は<strong>健康保険証と届いた通知書</strong>を持参します。</p><p>事前の申請は不要で、指定医療機関であればその場で助成が適用されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通常8,000円程度の接種費用のうち、市が一部を助成するため<strong>自己負担は約3,000円</strong>です。生活保護受給者は自己負担が免除されます。</p><p><span class="marker">対象年度を逃すと全額自己負担（任意接種）</span>となります。通知が届いたら早めに接種を受けましょう。</p><div class="highlight-box">山口市では高齢者インフルエンザ予防接種の費用助成も別途実施しています。肺炎球菌ワクチンとインフルエンザワクチンを併せて接種することで、肺炎予防の効果がより高まるとされています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamaguchi-city-iju-support',
    title: '山口市 移住支援金',
    organization: '山口市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '山口県',
    tags: ['山口市', '移住支援', '定住促進'],
    eligibility: '東京圏から山口市へ移住し、就業または創業した方',
    applicationPeriod: '通年（転入後3ヶ月以上1年以内に申請）',
    description: '山口市が実施する移住支援金制度です。東京圏からの移住者に対し、世帯で最大100万円、単身で最大60万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口市 移住支援金は、<span class="marker">東京23区に在住または東京圏から東京23区に通勤していた方が山口市へ移住した場合</span>に支給される支援金です。</p><p>山口市は温暖な気候と豊かな自然環境に恵まれ、湯田温泉をはじめとする観光資源も豊富です。地方移住への関心が高まる中、UIターン者の受け入れを積極的に推進しています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京圏に在住していたこと</p><p>移住直前に連続して1年以上、東京23区に在住または通勤していたこと</p><p>山口市に転入後、山口県が運営するマッチングサイト掲載企業に就業、またはテレワーク・創業していること</p><p>5年以上継続して居住する意思があること</p></div><p>山口市役所定住促進課に申請書類を提出します。<span class="marker-green">転入後3ヶ月以上1年以内に申請</span>する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>世帯での移住は<strong>最大100万円</strong>、単身での移住は<strong>最大60万円</strong>が支給されます。18歳未満の子どもがいる場合は子ども1人あたり加算があります。</p><p><span class="marker">5年以内に山口市から転出した場合は、支援金の返還が必要</span>となります。長期的な定住を前提とした制度です。</p><div class="note-box">山口市では移住支援金のほか、お試し住宅の提供や移住相談会の開催なども行っています。移住を検討中の方は、まず「やまぐち暮らし総合支援センター」に相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 徳島市（徳島県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'tokushima-city-child-medical',
    title: '徳島市 子ども医療費助成制度',
    organization: '徳島市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '徳島県',
    tags: ['徳島市', '子ども医療費', '助成金'],
    eligibility: '徳島市に住所を有する0歳から15歳（中学卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '徳島市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 子ども医療費助成制度は、<span class="marker">0歳から15歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>徳島市は阿波おどりで全国的に知られる徳島県の県庁所在地です。吉野川の恵みを受けた豊かな自然環境の中で子育てができる街として、医療費助成をはじめとする子育て支援に取り組んでいます。</p><p><span class="marker-green">通院・入院ともに助成対象</span>で、子育て家庭の経済的な安心を支えています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>徳島市に住民登録のある中学卒業までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>徳島市役所子ども未来部子ども政策課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が助成</strong>されます。徳島県内の医療機関であれば受給者証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関で受診した場合は、償還払い</span>の手続きが必要です。領収書の原本を添えて申請してください。</p><div class="highlight-box">徳島市では子ども医療費助成のほか、出産・子育て応援給付金や産後ケア事業なども実施しています。妊娠期から子育て期まで切れ目のない支援を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-housing-seismic',
    title: '徳島市 木造住宅耐震改修補助制度',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '徳島県',
    tags: ['徳島市', '耐震改修', '住宅助成'],
    eligibility: '徳島市内に所在する昭和56年5月以前の木造住宅の所有者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '徳島市が実施する木造住宅耐震改修補助制度です。旧耐震基準の木造住宅の耐震化工事に対して最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 木造住宅耐震改修補助制度は、<span class="marker">昭和56年5月以前に建築された木造住宅の耐震改修工事費用</span>を補助する制度です。</p><p>徳島市は南海トラフ巨大地震の被害が想定されるエリアに位置しており、住宅の耐震化は喫緊の課題です。旧耐震基準の木造住宅を耐震化することで、地震による倒壊リスクを大幅に低減できます。</p><p>補助額は<strong>最大100万円</strong>で、耐震診断から改修工事まで一貫した支援を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>昭和56年5月31日以前に着工された木造住宅</p><p>耐震診断で「倒壊する可能性がある」と判定された住宅</p><p>所有者自らが居住していること</p><p>市税の滞納がないこと</p></div><p>まず徳島市の無料耐震診断を受けて、改修の必要性を確認します。その後、工事計画を作成し、<span class="marker-green">工事着手前に市役所都市建設部住宅課へ申請</span>してください。</p><p>耐震診断は無料で受けることができます。まずは市の窓口に相談しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事にかかる費用の一部を補助し、<strong>上限は100万円</strong>です。耐震診断の結果に基づく改修設計費も別途補助対象となる場合があります。</p><p><span class="marker">工事前に必ず交付決定を受けてから着工</span>してください。事後申請は認められません。</p><div class="note-box">徳島市では耐震改修のほか、耐震シェルターの設置補助や家具転倒防止器具の取付支援も行っています。南海トラフ地震への備えとして、できることから始めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokushima-city-education-support',
    title: '徳島市 就学援助制度',
    organization: '徳島市',
    type: 'local',
    maxAmount: '年間最大約15万円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '徳島県',
    tags: ['徳島市', '就学援助', '教育支援'],
    eligibility: '徳島市立小中学校に在籍する児童・生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '徳島市が実施する就学援助制度です。経済的に困難な世帯の児童・生徒に学用品費や給食費等を援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島市 就学援助制度は、<span class="marker">経済的理由により就学が困難な児童・生徒の保護者</span>に対し、学校生活に必要な費用の一部を援助する制度です。</p><p>学用品費、校外活動費、修学旅行費、学校給食費など、就学に必要な幅広い費用が援助対象です。入学前に必要な新入学用品費の前倒し支給にも対応しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護者）</p><p>生活保護に準ずる程度に経済的にお困りの世帯（準要保護者）</p><p>前年の世帯所得が徳島市の定める基準額以下の世帯</p></div><p>毎年4月に学校を通じて配布される申請書を記入し、学校または徳島市教育委員会に提出します。年度途中の転入や家計急変による申請も可能です。</p><p><span class="marker-green">申請は毎年度行う必要があります</span>。前年度の認定は自動継続されないため、忘れずに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>費目ごとに支給額が定められています。<strong>学用品費は小学校で年間約1万円、中学校で年間約2万円</strong>が目安です。</p><p><span class="marker">給食費は実費全額が支給</span>されるため、保護者の負担はありません。修学旅行費も実費支給です。</p><div class="highlight-box">新入学用品費は入学前の3月に前倒し支給が可能です。ランドセルや制服の購入に合わせて、早めに申請手続きを行いましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 高松市（香川県）3件: childcare, employment, medical
  // ────────────────────────────────────────────────
  {
    slug: 'takamatsu-child-medical',
    title: '高松市 子ども医療費助成制度',
    organization: '高松市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '香川県',
    tags: ['高松市', '子ども医療費', '助成金'],
    eligibility: '高松市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '高松市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>高松市は瀬戸内海に面した香川県の県庁所在地で、栗林公園やサンポート高松など魅力的なスポットに恵まれた街です。「子育てするなら高松で」をスローガンに、子育て支援の充実を図っています。</p><p><span class="marker-green">所得制限なし</span>で、高松市在住のすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高松市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>高松市役所こども未来局子育て支援課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。香川県内の医療機関であれば受給資格証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関で受診した場合は、償還払い</span>の手続きが必要です。領収書を保管して後日申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、薬の容器代など）は助成対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-startup-support',
    title: '高松市 創業者応援補助金',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '香川県',
    tags: ['高松市', '創業支援', '補助金'],
    eligibility: '高松市内で新たに事業を開始する方、または開始して1年以内の方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '高松市が実施する創業者応援補助金です。市内で新規創業する際にかかる経費の一部を最大50万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 創業者応援補助金は、<span class="marker">市内で新たに事業を始める方を対象に、創業にかかる初期経費を補助</span>する制度です。</p><p>高松市は四国の玄関口として交通アクセスに優れ、瀬戸内国際芸術祭の拠点としてクリエイティブ産業の集積も進んでいます。飲食業や小売業から IT・デザイン系まで幅広い業種の創業を応援しています。</p><p>補助率は対象経費の<strong>1/2で、上限50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>高松市内で新規創業する方、または創業後1年以内の方</p><p>市が認定する特定創業支援等事業を受けていること</p><p>個人事業主または中小企業者であること</p><p>市税の滞納がないこと</p></div><p>高松市産業振興課に事業計画書を提出し、審査を受けます。</p><p><span class="marker-green">高松市の創業支援施設「Setouchi-i-Base」では無料の創業相談</span>も実施しています。事業アイデアの段階から気軽に相談してみましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の1/2、<strong>上限50万円</strong>が補助されます。店舗・事務所の賃料、内装工事費、設備費、広告宣伝費、ウェブサイト制作費などが対象です。</p><p><span class="marker">交付決定前に支払った経費は補助対象外</span>となります。必ず交付決定後に支出を行ってください。</p><div class="highlight-box">高松市では創業融資の利子補給制度も用意しています。補助金と融資を組み合わせることで、創業時の資金面のハードルを大幅に下げることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takamatsu-fertility-treatment',
    title: '高松市 不妊治療費助成制度',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '香川県',
    tags: ['高松市', '不妊治療', '医療費助成'],
    eligibility: '高松市に住所を有する夫婦（事実婚含む）で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了後60日以内に申請）',
    description: '高松市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市 不妊治療費助成制度は、<span class="marker">保険適用の不妊治療にかかる自己負担分を助成する市独自の上乗せ制度</span>です。</p><p>2022年4月から不妊治療が保険適用となりましたが、体外受精や顕微授精などの高額治療では自己負担が大きくなります。高松市ではこの経済的負担を軽減するため、1回の治療につき<strong>最大10万円</strong>の助成を行っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成の要件"><p>夫婦のいずれかが高松市に住所を有すること</p><p>保険適用の不妊治療（体外受精・顕微授精等）を受けていること</p><p>治療終了日から60日以内に申請すること</p></div><p>高松市保健センターの窓口で申請します。医療機関の治療証明書と領収書が必要です。</p><p><span class="marker-green">事実婚のカップルも対象</span>です。申請期限を過ぎると助成を受けられなくなるため、治療が終了したら速やかに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき、保険適用後の自己負担額に対し<strong>最大10万円</strong>が助成されます。体外受精・顕微授精が主な対象です。</p><p><span class="marker">年度内の助成回数に上限がある場合があります</span>ので、詳細は市の窓口で確認してください。</p><div class="note-box">高松市では不妊・不育に関する相談窓口も設置しています。治療に関する不安や悩みがある場合は、一人で抱え込まず専門相談員に相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 松山市（愛媛県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'matsuyama-child-medical',
    title: '松山市 子ども医療費助成制度',
    organization: '松山市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛媛県',
    tags: ['松山市', '子ども医療費', '助成金'],
    eligibility: '松山市に住所を有する0歳から15歳（中学卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '松山市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 子ども医療費助成制度は、<span class="marker">0歳から15歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>松山市は道後温泉や松山城で知られる愛媛県の県庁所在地で、四国最大の人口を擁する中心都市です。文学の街としても名高く、子育てしやすい環境づくりにも積極的に取り組んでいます。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>で、子育て家庭の経済的負担を軽減しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松山市に住民登録のある中学卒業までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>松山市役所子ども総合相談センター（事務所）や各支所で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「乳幼児等医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が助成</strong>されます。愛媛県内の医療機関であれば受給資格証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関で受診した場合は、償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="highlight-box">松山市では子ども医療費助成のほか、子育て応援えひめっこ応援金や一時預かり事業なども実施しています。子育て支援制度を幅広く活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-housing-reform',
    title: '松山市 住宅リフォーム補助制度',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '愛媛県',
    tags: ['松山市', '住宅リフォーム', '補助金'],
    eligibility: '松山市内に居住し、住宅の改修工事を市内業者に依頼する方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '松山市が実施する住宅リフォーム補助制度です。市内業者を利用した住宅改修に対して最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 住宅リフォーム補助制度は、<span class="marker">市民が居住する住宅の改修工事を市内の施工業者に依頼する場合</span>に、費用の一部を補助する制度です。</p><p>松山市は温暖な気候に恵まれていますが、台風の通過ルートに位置するため、屋根や外壁の補修ニーズも多い地域です。バリアフリー化、省エネ改修、耐震化工事など幅広い改修工事が補助対象となっています。</p><p>補助率は対象工事費の<strong>10〜20%で、上限30万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>バリアフリー改修（手すり設置、段差解消、浴室・トイレ改修）</p><p>省エネ改修（断熱窓への交換、高効率給湯器設置）</p><p>屋根・外壁の修繕、内装リフォーム</p><p>耐震改修工事</p></div><p>松山市役所住宅課に事前相談のうえ申請します。<span class="marker-green">必ず工事着手前に申請が必要</span>で、交付決定後に工事を開始してください。</p><p>市内の施工業者による工事が補助の条件となります。複数業者から見積もりを取ることをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の10〜20%、<strong>上限30万円</strong>が補助されます。対象工事費が一定額以上の改修が補助の条件です。</p><p><span class="marker">先着順で予算がなくなり次第受付終了</span>となります。年度始めに申し込みが集中するため、早めの相談がおすすめです。</p><div class="note-box">松山市では耐震診断の無料実施も行っています。昭和56年以前に建てられた住宅にお住まいの方は、まず耐震診断を受けて住まいの安全性を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsuyama-iju-support',
    title: '松山市 移住支援金',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '愛媛県',
    tags: ['松山市', '移住支援', '定住促進'],
    eligibility: '東京圏から松山市へ移住し、就業または創業した方',
    applicationPeriod: '通年（転入後3ヶ月以上1年以内に申請）',
    description: '松山市が実施する移住支援金制度です。東京圏からの移住者に対し、世帯で最大100万円、単身で最大60万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松山市 移住支援金は、<span class="marker">東京23区に在住または東京圏から東京23区に通勤していた方が松山市へ移住した場合</span>に支給される支援金です。</p><p>松山市は道後温泉や瀬戸内の穏やかな気候に恵まれ、コンパクトシティとして生活の利便性も高い街です。路面電車が走る市街地は徒歩や自転車でも暮らしやすく、移住先として高い人気を誇ります。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京圏に在住していたこと</p><p>移住直前に連続して1年以上、東京23区に在住または通勤していたこと</p><p>愛媛県が運営するマッチングサイト掲載企業に就業、またはテレワーク・創業していること</p><p>5年以上継続して居住する意思があること</p></div><p>松山市役所まちづくり推進課に申請書類を提出します。<span class="marker-green">転入後3ヶ月以上1年以内</span>に申請する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>世帯での移住は<strong>最大100万円</strong>、単身は<strong>最大60万円</strong>が支給されます。18歳未満の子どもがいる場合は子ども1人あたり加算があります。</p><p><span class="marker">5年以内に松山市から転出した場合は、支援金の返還が必要</span>となります。長期的な定住を前提とした制度です。</p><div class="highlight-box">松山市では「いい、暮らし。まつやま」をテーマに移住促進に取り組んでいます。お試し移住体験や移住相談会も開催しているので、まずは気軽に情報収集してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 高知市（高知県）3件: childcare, employment, medical
  // ────────────────────────────────────────────────
  {
    slug: 'kochi-city-child-medical',
    title: '高知市 子ども医療費助成制度',
    organization: '高知市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '高知県',
    tags: ['高知市', '子ども医療費', '助成金'],
    eligibility: '高知市に住所を有する0歳から15歳（中学卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '高知市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 子ども医療費助成制度は、<span class="marker">0歳から15歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>高知市は太平洋に面した高知県の県庁所在地で、よさこい祭りや日曜市で知られる活気ある街です。坂本龍馬をはじめとする偉人を輩出した土地柄、次世代の子どもたちの育成にも力を入れています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>で、子育て家庭の医療費負担を軽減しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高知市に住民登録のある中学卒業までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>高知市役所子ども育成部子ども政策課の窓口で申請します。出生届や転入届と同時の手続きが便利です。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が助成</strong>されます。高知県内の医療機関であれば受給資格証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関で受診した場合は、償還払い</span>の手続きが必要です。領収書を添えて市役所に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。交通事故など第三者行為による傷病は届出が必要となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-startup-support',
    title: '高知市 創業支援補助金',
    organization: '高知市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '高知県',
    tags: ['高知市', '創業支援', '補助金'],
    eligibility: '高知市内で新たに事業を開始する方、または開始して1年以内の方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '高知市が実施する創業支援補助金です。市内での新規創業にかかる経費の一部を最大50万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 創業支援補助金は、<span class="marker">市内で新たに事業を始める方を対象に、創業にかかる初期経費を補助</span>する制度です。</p><p>高知市は日曜市に代表される商いの文化が根付いた街で、個人商店や飲食店の創業が盛んです。近年はリモートワーク拠点としての注目も高まり、IT系の創業も増えています。</p><p>補助率は対象経費の<strong>1/2で、上限50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>高知市内で新規創業する方、または創業後1年以内の方</p><p>市が認定する特定創業支援等事業を受けていること</p><p>個人事業主または中小企業者であること</p><p>市税の滞納がないこと</p></div><p>高知市商工振興課に事業計画書を提出し、審査を受けます。</p><p><span class="marker-green">高知市の創業支援拠点では無料の専門家相談</span>も利用できます。事業計画の作り方や資金調達のアドバイスをもらえるので、まずは気軽に訪ねてみましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の1/2、<strong>上限50万円</strong>が補助されます。店舗・事務所の賃料、内装工事費、設備費、広告宣伝費、ウェブサイト制作費などが対象です。</p><p><span class="marker">交付決定前に支払った経費は補助対象外</span>です。必ず交付決定を受けてから経費を支出してください。</p><div class="highlight-box">高知県と高知市の創業支援融資制度を活用すれば、低利率での借り入れも可能です。補助金と融資を併用して創業時の資金繰りを安定させましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kochi-city-senior-medical',
    title: '高知市 高齢者インフルエンザ予防接種費用助成',
    organization: '高知市',
    type: 'local',
    maxAmount: '自己負担1,000円で接種可能',
    maxAmountNum: 1,
    category: 'medical',
    prefecture: '高知県',
    tags: ['高知市', '予防接種', '高齢者医療'],
    eligibility: '高知市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月',
    description: '高知市が実施する高齢者向けインフルエンザ予防接種費用助成です。65歳以上の方が自己負担1,000円で接種を受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市 高齢者インフルエンザ予防接種費用助成は、<span class="marker">65歳以上の市民を対象にインフルエンザ予防接種の費用を助成</span>する制度です。</p><p>高知県は高齢化率が全国でも高い地域の一つであり、インフルエンザの重症化予防は重要な課題です。高知市では接種費用の大部分を助成することで、高齢者が経済的な心配なく予防接種を受けられるようにしています。</p><p>通常4,000〜5,000円程度の接種費用が、<span class="marker-green">自己負担わずか1,000円</span>で受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>高知市に住所を有する65歳以上の方</p><p>60〜64歳で心臓・腎臓・呼吸器に重い障がいのある方</p><p>接種を希望する方（任意）</p></div><p>高知市内の指定医療機関に予約のうえ、接種を受けてください。接種当日は<strong>健康保険証など住所が確認できる書類</strong>を持参します。</p><p>事前の申請は不要で、指定医療機関であればその場で助成が適用されます。自己負担1,000円を窓口で支払うだけです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>インフルエンザ予防接種の費用のうち、市の助成により<strong>自己負担はわずか1,000円</strong>です。生活保護受給者は自己負担が免除されます。</p><p><span class="marker">接種期間は毎年10月〜翌年1月頃まで</span>です。この期間を過ぎると助成が受けられなくなりますので、早めに接種を受けましょう。</p><div class="note-box">インフルエンザワクチンの効果が現れるまでに約2週間かかるため、流行が始まる前の10月〜11月中の接種が最も効果的です。体調が優れない場合は、かかりつけ医に相談してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/',
    publishedAt: '2026-03-12',
  },
];
