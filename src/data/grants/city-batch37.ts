import { Grant } from '@/lib/types';

export const cityGrantsBatch37: Grant[] = [
  // ────────────────────────────────────────────────
  // 相模原市（神奈川県）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'sagamihara-childcare-subsidy',
    title: '相模原市 子育て応援給付金',
    organization: '相模原市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['相模原市', '子育て支援', '給付金'],
    eligibility: '相模原市に住所を有し、0歳から2歳の子どもを養育する保護者',
    applicationPeriod: '通年（対象児童の年齢に達した翌月末まで）',
    description: '相模原市が実施する子育て応援給付金です。乳幼児の養育に係る経済的負担を軽減するため、子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 子育て応援給付金は、<span class="marker">0歳から2歳までの乳幼児を養育する保護者</span>に対し、子育てに係る経済的負担を軽減するための給付金です。</p><p>相模原市は神奈川県北西部に位置する政令指定都市で、人口約72万人を擁します。相模湖や丹沢山系などの豊かな自然と、橋本・相模大野エリアの都市機能が共存する街です。リニア中央新幹線の新駅設置が予定されるなど、今後のさらなる発展が期待されています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>相模原市に住民登録があり、0歳から2歳の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p><p>子どもとの関係を証明する書類</p></div><p>相模原市役所こども家庭課または各区役所の窓口、もしくは<strong>オンライン申請</strong>で手続きできます。対象児童が生まれた後に案内通知が届きますので、届いたら速やかに申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。双子以上の場合は人数分が支給されます。</p><p><span class="marker">申請期限は対象児童が2歳に達した日の翌月末まで</span>です。期限を過ぎると受給できませんので、早めの手続きを心がけてください。</p><div class="note-box">他の自治体から転入した場合、転入日以降に申請が可能です。転出した場合は転出日をもって受給資格を失います。生活保護を受給している世帯も申請可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-birth-bonus',
    title: '相模原市 出産祝い金',
    organization: '相模原市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['相模原市', '出産祝い金', '給付金'],
    eligibility: '相模原市に住所を有し、第3子以降の子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '相模原市が実施する出産祝い金制度です。第3子以降の出生に対し、10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 出産祝い金は、<span class="marker">第3子以降の子どもが生まれた世帯</span>に対して祝い金を支給する制度です。</p><p>少子化対策として多子世帯の経済的負担を軽減することを目的としています。相模原市では多子世帯への支援を重点施策の一つと位置づけ、出産から育児まで切れ目のないサポート体制を構築しています。</p><p>支給額は<strong>第3子以降1人につき10万円</strong>です。<span class="marker-green">出生届の提出とあわせて申請できるため、手続きの負担が軽い</span>のが特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>相模原市に住民登録があること</p><p>出生した子どもが第3子以降であること</p><p>出生届提出日時点で市内に住所があること</p><p>生後6か月以内に申請すること</p></div><p>出生届の提出時に各区役所の窓口で案内を受けることができます。申請書に必要事項を記入し、本人確認書類と振込先口座情報を提出します。</p><p><span class="marker">「第3子」のカウントは18歳年度末までの子どもを対象</span>に行われます。養子縁組の子どもも含まれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の子ども1人につき10万円</strong>が支給されます。申請から約1〜2か月で指定口座に振り込まれます。</p><p><span class="marker">生後6か月を過ぎると申請できなくなります</span>。出生届と同時に手続きするのが最も確実です。</p><div class="highlight-box">相模原市では出産祝い金のほか、妊婦健診費用の助成（14回分）や産後ケア事業（宿泊型・日帰り型）なども実施しています。子育て世代包括支援センターに相談すると、利用可能な制度をまとめて案内してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-housing-purchase',
    title: '相模原市 住宅取得補助金',
    organization: '相模原市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['相模原市', '住宅取得', '補助金'],
    eligibility: '相模原市内に新たに住宅を取得し定住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '相模原市が実施する住宅取得補助金です。市内への定住促進のため、住宅取得費用の一部を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 住宅取得補助金は、<span class="marker">市内に新たに住宅を取得して定住する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>相模原市は都心へのアクセスが良好でありながら、緑豊かな住環境が魅力の政令指定都市です。リニア中央新幹線の神奈川県駅（仮称）が橋本エリアに設置予定で、住宅需要の高まりが見込まれています。</p><p>補助額は<strong>基本額20万円</strong>で、子育て世帯は加算があり<strong>最大30万円</strong>となります。<span class="marker-green">新築・中古を問わず対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>相模原市内に住宅を新たに取得すること（新築・中古問わず）</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>相模原市役所住宅課に申請書と必要書類を提出します。不動産売買契約書、住民票、登記事項証明書などが必要です。</p><p><span class="marker">住宅の引渡しを受けた日から6か月以内に申請</span>してください。期限を過ぎると申請できません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>です。18歳未満の子どもがいる世帯は<strong>10万円が加算され最大30万円</strong>となります。</p><p><span class="marker">年間予算に限りがあるため、早めの申請をおすすめします</span>。先着順で受付終了となる場合があります。</p><div class="note-box">投資用物件や別荘は対象外です。住宅ローンの有無は問いませんが、取得した住宅に居住実態があることが求められます。5年以内に転出した場合は補助金の返還を求められることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-barrier-free',
    title: '相模原市 住宅バリアフリー改修補助金',
    organization: '相模原市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['相模原市', 'バリアフリー', '住宅改修'],
    eligibility: '相模原市に住所を有する高齢者または障がい者がいる世帯',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '相模原市が実施する住宅バリアフリー改修補助金です。高齢者や障がい者の安全な住環境整備のため最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 住宅バリアフリー改修補助金は、<span class="marker">高齢者や障がい者が安全に暮らせるよう住宅のバリアフリー改修</span>に対して費用の一部を補助する制度です。</p><p>相模原市は高齢化が進む中、住み慣れた住宅でいつまでも安心して暮らせる環境づくりに力を入れています。手すりの設置、段差の解消、浴室やトイレの改修など、日常生活の安全性を高める工事が対象です。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">介護保険の住宅改修費と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消（スロープ設置含む）</p><p>滑り止め床材への変更</p><p>浴室・トイレの改修</p><p>廊下・階段の幅員拡張</p></div><p>相模原市に住民登録があり、65歳以上の高齢者または身体障害者手帳を持つ方がいる世帯が対象です。市役所高齢・障害者福祉課に申請します。</p><p><span class="marker">必ず工事着手前に申請してください</span>。着工後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。介護保険制度の住宅改修費（上限20万円）との併用も可能です。</p><p><span class="marker">介護保険の住宅改修費と合わせると最大50万円の支援</span>が受けられる場合があります。</p><div class="highlight-box">ケアマネジャーに相談すると、介護保険の住宅改修費との併用手続きがスムーズです。工事業者の選定に迷う場合は、相模原市の住宅相談窓口で市内の登録業者リストを入手できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-infertility',
    title: '相模原市 不妊治療費助成事業',
    organization: '相模原市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['相模原市', '不妊治療', '助成金'],
    eligibility: '相模原市に住所を有する不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後3か月以内）',
    description: '相模原市が実施する不妊治療費助成事業です。特定不妊治療（体外受精・顕微授精）にかかる費用を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 不妊治療費助成事業は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対して治療費の一部を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、保険適用外の治療や自己負担分の経済的負担は依然として大きいのが現状です。相模原市では独自の上乗せ助成を実施し、不妊治療に取り組む夫婦を支援しています。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">保険適用後の自己負担分が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>相模原市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>特定不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>領収書の原本（コピー不可）</p><p>夫婦の住民票（続柄記載）</p><p>戸籍謄本（事実婚の場合は追加書類）</p></div><p>相模原市保健所健康増進課に申請書類を提出します。<strong>治療が終了した日から3か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大30万円</strong>です。男性不妊治療を行った場合は最大15万円が加算されます。</p><p><span class="marker">通算助成回数は治療開始時の妻の年齢が40歳未満の場合6回まで、40歳以上43歳未満の場合3回まで</span>です。</p><div class="note-box">保険適用となる治療は健康保険での対応が原則です。本助成は保険適用後の自己負担分や保険適用外の先進医療が対象となります。43歳以上で治療を開始した場合は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-scholarship',
    title: '相模原市 奨学金制度',
    organization: '相模原市',
    type: 'local',
    maxAmount: '月額最大3万円（給付型）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '神奈川県',
    tags: ['相模原市', '奨学金', '教育支援'],
    eligibility: '相模原市に住所を有する高校生・大学生等で経済的理由により就学が困難な方',
    applicationPeriod: '毎年4月〜5月（年度初め募集）',
    description: '相模原市が実施する奨学金制度です。経済的理由により就学が困難な高校生・大学生等に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 奨学金制度は、<span class="marker">経済的理由により就学が困難な高校生・大学生等</span>に対し、返還不要の給付型奨学金を支給する制度です。</p><p>相模原市は市内に複数の大学や専門学校が立地し、学生が多く暮らす街です。教育の機会均等を推進するため、家庭の経済状況にかかわらず意欲ある学生が学業を続けられるよう支援しています。</p><p>給付額は<strong>高校生月額1.5万円、大学生等月額3万円</strong>です。<span class="marker-green">返還不要の給付型で、卒業後の負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>相模原市に住民登録があること</p><p>高等学校、大学、短大、専門学校等に在学していること</p><p>世帯の所得が基準額以下であること</p><p>学業成績が一定以上であること</p><p>他の給付型奨学金を受給していないこと</p></div><p>毎年4月〜5月の募集期間中に相模原市教育委員会学務課へ申請します。成績証明書、世帯の所得証明書、在学証明書が必要です。</p><p><span class="marker">募集人数に限りがあるため、選考により決定</span>されます。学業成績と家計状況を総合的に審査します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生月額1.5万円、大学生・短大生・専門学校生月額3万円</strong>です。年額に換算すると最大36万円となります。</p><p><span class="marker">給付期間は正規の修業年限です</span>。留年した場合は給付が停止されることがあります。</p><div class="highlight-box">国の高等教育の修学支援新制度（給付型奨学金・授業料減免）との併用はできませんが、日本学生支援機構の貸与型奨学金とは併用可能です。まずは市の奨学金に申請し、不足分を貸与型で補う方法がおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-sme-support',
    title: '相模原市 中小企業設備投資支援補助金',
    organization: '相模原市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['相模原市', '中小企業支援', '設備投資'],
    eligibility: '相模原市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '相模原市が実施する中小企業設備投資支援補助金です。市内中小企業の生産性向上に資する設備投資に最大200万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 中小企業設備投資支援補助金は、<span class="marker">市内中小企業の生産性向上や事業革新に資する設備投資</span>に対して費用の一部を補助する制度です。</p><p>相模原市は神奈川県内でも有数の工業都市で、精密機械や電子部品の中小メーカーが数多く集積しています。JAXAの相模原キャンパスがあることでも知られ、先端技術と中小企業のものづくりが融合する産業基盤があります。</p><p>補助率は対象経費の3分の1以内で、<strong>上限は200万円</strong>です。<span class="marker-green">製造業だけでなくサービス業やIT企業も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備投資"><p>生産設備の導入・更新</p><p>IT機器・システムの導入</p><p>省エネ・環境対応設備の導入</p><p>品質管理・検査機器の購入</p></div><p>相模原市役所産業振興課に事業計画書と申請書を提出します。設備の見積書と導入効果の説明資料も必要です。</p><p><span class="marker">発注・購入前に申請し、交付決定を受けてから設備を導入</span>してください。決定前の購入は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の1以内で、<strong>上限200万円</strong>です。対象経費の下限は100万円です。</p><p><span class="marker">申請は審査制で、事業計画の内容や期待される効果により採否が決まります</span>。</p><div class="note-box">リース契約による設備導入は対象外です。また、人件費や消耗品費は補助対象経費に含まれません。国や県の類似補助金との併用はできませんので、最も有利な制度を選んで申請しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-nursing-equipment',
    title: '相模原市 介護用品支給事業',
    organization: '相模原市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '神奈川県',
    tags: ['相模原市', '介護用品', '在宅介護'],
    eligibility: '相模原市に住所を有する要介護認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '相模原市が実施する介護用品支給事業です。在宅で要介護者を介護する家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>在宅介護では紙おむつや尿取りパッドなど消耗品の出費が大きな負担となります。相模原市ではこうした介護用品を現物支給することで、介護する家族の経済的・精神的負担を軽減しています。</p><p>月額<strong>最大6,250円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯は自己負担なしで受け取れます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>以下の条件をすべて満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>相模原市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方が施設に入所していないこと</p><p>介護を受ける方および介護者が市民税非課税世帯であること（課税世帯は一部自己負担あり）</p></div><p>相模原市の各高齢者相談課または地域包括支援センターで申請できます。<strong>介護保険被保険者証</strong>の提示が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,250円相当</strong>の紙おむつ・尿取りパッド・清拭剤等が支給されます。カタログから必要な商品を選んで毎月届けてもらえます。</p><p><span class="marker">課税世帯の場合は費用の一部自己負担が発生します</span>。非課税世帯は無料で受け取れます。</p><div class="note-box">入院中や施設入所中は支給対象外となります。要介護度が3以下に変更になった場合も支給停止となりますので、介護認定の更新時にはご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sagamihara-elderly-support',
    title: '相模原市 高齢者安心生活支援事業',
    organization: '相模原市',
    type: 'local',
    maxAmount: '年額最大6万円相当',
    maxAmountNum: 6,
    category: 'living',
    prefecture: '神奈川県',
    tags: ['相模原市', '高齢者支援', '生活支援'],
    eligibility: '相模原市に住所を有する65歳以上の一人暮らし高齢者等',
    applicationPeriod: '通年',
    description: '相模原市が実施する高齢者安心生活支援事業です。一人暮らしの高齢者等に対し、緊急通報装置の貸与や配食サービスなどを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 高齢者安心生活支援事業は、<span class="marker">65歳以上の一人暮らし高齢者や高齢者のみの世帯</span>に対し、在宅生活の安全を支援する複数のサービスを提供する事業です。</p><p>相模原市では高齢化の進展に伴い、一人暮らしの高齢者が増加しています。緊急通報装置の設置、見守り訪問、配食サービスなど、日常生活の安心を支える包括的な支援体制を構築しています。</p><p><span class="marker-green">複数のサービスを組み合わせて利用することが可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="提供サービス一覧"><p>緊急通報装置の貸与（ペンダント型・据え置き型）</p><p>配食サービス（見守りを兼ねた弁当の配達）</p><p>軽度生活援助（ゴミ出し・電球交換などの日常支援）</p><p>見守り電話・訪問サービス</p></div><p>相模原市の各地域包括支援センターまたは高齢者相談課で申請できます。世帯状況と心身の状態に応じて、<strong>適切なサービスの組み合わせを提案</strong>してもらえます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置は<strong>月額の利用料が減免</strong>され、市民税非課税世帯は無料です。配食サービスは1食あたり自己負担400〜500円程度です。</p><p><span class="marker">サービスの内容によっては所得制限や要件が異なります</span>。まずは地域包括支援センターに相談しましょう。</p><div class="highlight-box">相模原市では民生委員による定期的な見守り活動も行われています。高齢者安心生活支援事業と地域の見守りネットワークを併用することで、より安心な在宅生活が実現できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 新潟市（新潟県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'niigata-city-childcare-subsidy',
    title: '新潟市 子育て応援給付金',
    organization: '新潟市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '新潟県',
    tags: ['新潟市', '子育て支援', '給付金'],
    eligibility: '新潟市に住所を有し、0歳から2歳の子どもを養育する保護者',
    applicationPeriod: '通年（対象児童の年齢条件を満たす期間内）',
    description: '新潟市が実施する子育て応援給付金です。乳幼児の養育に係る経済的負担を軽減するため、子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 子育て応援給付金は、<span class="marker">0歳から2歳までの乳幼児を養育する保護者</span>に対して給付金を支給する制度です。</p><p>新潟市は本州日本海側唯一の政令指定都市で、人口約78万人を擁する日本有数の穀倉地帯に位置しています。萬代橋や信濃川の河畔が美しい水の都でもあり、食文化の豊かさでも知られています。子育て世帯の定住促進と出生率向上を目指し、独自の給付制度を設けています。</p><p><span class="marker-green">所得制限なしですべての対象世帯が申請できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>新潟市に住民登録があり、0歳から2歳の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p><p>母子健康手帳の写し</p></div><p>新潟市役所こども政策課または各区役所健康福祉課の窓口で申請できます。出生届の提出後に<strong>案内通知が届きます</strong>ので、届いたら早めに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。多胎児（双子以上）の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>ので、案内通知が届いたら速やかに手続きを行ってください。</p><div class="note-box">新潟市外から転入した方は、転入日から申請が可能です。他の自治体で同種の給付金を受け取っている場合は対象外となることがありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-daycare-support',
    title: '新潟市 保育料軽減事業',
    organization: '新潟市',
    type: 'local',
    maxAmount: '第2子以降の保育料無償化',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '新潟県',
    tags: ['新潟市', '保育料', '子育て支援'],
    eligibility: '新潟市内の認可保育所等を利用する多子世帯の保護者',
    applicationPeriod: '通年（保育施設入所時に適用）',
    description: '新潟市が実施する保育料軽減事業です。多子世帯の保育料を軽減し、第2子以降の保育料を無償化します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 保育料軽減事業は、<span class="marker">多子世帯の保育料負担を軽減するため、第2子以降の保育料を無償化</span>する制度です。</p><p>新潟市では国の幼児教育・保育の無償化（3〜5歳児クラス）に加え、市独自の施策として0〜2歳児クラスの第2子以降の保育料を無償化しています。子どもを複数養育する世帯の経済的負担を大幅に軽減し、安心して子育てできる環境を整えています。</p><p><span class="marker-green">年齢制限のないきょうだいカウントにより、上の子が小学生以上でも第2子として算定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="軽減内容"><p>第1子：所得に応じた通常の保育料</p><p>第2子：保育料無償</p><p>第3子以降：保育料無償</p></div><p>新潟市内の認可保育所、認定こども園、地域型保育事業を利用している世帯が対象です。入所申請時に<strong>きょうだいの状況を申告</strong>することで自動的に適用されます。</p><p><span class="marker">特別な申請手続きは原則不要</span>です。入所申請書にきょうだいの情報を正確に記載してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が無償</strong>となります。通常であれば月額数万円かかる0〜2歳児の保育料が全額軽減されます。</p><p><span class="marker">きょうだいのカウントに年齢上限はありません</span>。例えば上の子が中学生でも、その子を第1子としてカウントし、下の子は第2子扱いとなります。</p><div class="highlight-box">認可外保育施設を利用している場合は、新潟市の保育料助成制度（別制度）が適用される場合があります。各区役所の保育課に相談して、最も有利な制度を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-vacant-house',
    title: '新潟市 空き家活用リフォーム補助金',
    organization: '新潟市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '新潟県',
    tags: ['新潟市', '空き家活用', '補助金'],
    eligibility: '新潟市内の空き家を取得しリフォームして居住する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '新潟市が実施する空き家活用リフォーム補助金です。空き家を取得・リフォームして居住する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 空き家活用リフォーム補助金は、<span class="marker">市内の空き家を取得してリフォームし、居住する方</span>に対して改修費用の一部を補助する制度です。</p><p>新潟市でも空き家の増加が社会問題となっており、特に旧市街地や農村部で顕著です。この制度は空き家の利活用を促進するとともに、移住・定住の受け皿として空き家を活用することを目的としています。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">新潟市空き家バンクに登録された物件は上限が引き上げ</span>られる場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>新潟市内の空き家を取得すること（1年以上空き家であった住宅）</p><p>リフォーム後に自ら居住すること</p><p>5年以上継続して居住する意思があること</p><p>市税を滞納していないこと</p><p>市内業者による50万円以上の改修工事であること</p></div><p>新潟市役所住環境政策課に申請書と工事見積書、物件の写真等を提出します。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから工事を開始</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限50万円</strong>です。子育て世帯や市外からの移住者は加算が適用される場合があります。</p><p><span class="marker">5年以内に転出した場合は補助金の返還を求められます</span>。長期的な居住計画のもとで活用してください。</p><div class="note-box">耐震性が不足している空き家は、耐震改修補助金（別制度）と併用できます。雪国である新潟市では、屋根の雪対策（落雪防止・融雪装置）の改修も対象に含まれる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-infertility',
    title: '新潟市 不妊治療費助成事業',
    organization: '新潟市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '新潟県',
    tags: ['新潟市', '不妊治療', '助成金'],
    eligibility: '新潟市に住所を有する不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後3か月以内）',
    description: '新潟市が実施する不妊治療費助成事業です。特定不妊治療に係る費用を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 不妊治療費助成事業は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対し、治療費の自己負担分を助成する制度です。</p><p>新潟市は出生率の向上を重要政策として掲げており、不妊治療への経済的支援もその一環です。保険適用後の自己負担分に加え、先進医療にかかる費用も助成対象としています。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">新潟県の助成制度に市独自の上乗せを加えた手厚い支援</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>新潟市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の原本</p><p>夫婦の住民票</p><p>戸籍謄本（事実婚の場合は追加書類）</p></div><p>新潟市保健所こども家庭課に申請書類を提出します。<strong>治療終了日から3か月以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大30万円</strong>です。男性不妊治療を併せて行った場合は最大15万円が加算されます。</p><p><span class="marker">助成回数は治療開始時の妻の年齢が40歳未満で6回、40歳以上43歳未満で3回が上限</span>です。</p><div class="highlight-box">新潟市では不妊治療に関する相談窓口「にいがた妊活サポートセンター」を設置しています。治療の進め方や費用の見通しについて、専門のスタッフに無料で相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-scholarship',
    title: '新潟市 奨学金制度',
    organization: '新潟市',
    type: 'local',
    maxAmount: '月額最大4万円（給付型）',
    maxAmountNum: 48,
    category: 'education',
    prefecture: '新潟県',
    tags: ['新潟市', '奨学金', '教育支援'],
    eligibility: '新潟市に住所を有する高校生・大学生等で経済的に就学困難な方',
    applicationPeriod: '毎年4月〜5月（年度初め募集）',
    description: '新潟市が実施する奨学金制度です。経済的に就学が困難な学生に対し、返還不要の給付型奨学金を月額最大4万円支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 奨学金制度は、<span class="marker">経済的理由により就学が困難な高校生・大学生等</span>に対し、返還不要の給付型奨学金を支給する制度です。</p><p>新潟市には新潟大学をはじめとする複数の高等教育機関が立地しており、多くの学生が学んでいます。家庭の経済状況に左右されず、意欲ある若者が教育を受けられるよう支援する仕組みです。</p><p>給付額は<strong>高校生月額1.5万円、大学生等月額4万円</strong>です。<span class="marker-green">返還不要のため卒業後の経済的負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>新潟市に住民登録があること</p><p>高等学校、大学、短大、専門学校等に在学していること</p><p>世帯の所得が基準額以下であること</p><p>学業に対する意欲があること</p></div><p>毎年4月〜5月に新潟市教育委員会学務課で募集を行います。成績証明書、世帯の所得証明書、在学証明書を添えて申請します。</p><p><span class="marker">選考は学業への意欲と家計状況を総合的に評価して行われます</span>。面接審査が実施される場合もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生月額1.5万円、大学生・短大生・専門学校生月額4万円</strong>です。年額で最大48万円の支援が受けられます。</p><p><span class="marker">正規の修業年限を超えた場合は給付が停止</span>されます。学業成績の著しい低下も停止事由となります。</p><div class="note-box">国の高等教育の修学支援新制度と本奨学金は併用できない場合があります。日本学生支援機構の貸与型奨学金との併用は可能ですので、組み合わせを検討してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-uij-turn',
    title: '新潟市 UIJターン就職支援補助金',
    organization: '新潟市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '新潟県',
    tags: ['新潟市', 'UIJターン', '就職支援'],
    eligibility: '東京圏から新潟市へ移住しUIJターン就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '新潟市が実施するUIJターン就職支援補助金です。東京圏から新潟市へ移住して就職した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 UIJターン就職支援補助金は、<span class="marker">東京23区に在住または東京圏から23区に通勤していた方が新潟市へ移住</span>し、マッチングサイト掲載企業等に就職した場合に支給される補助金です。</p><p>新潟市は日本海側最大の都市として、食品産業や金属加工業を中心とした産業基盤があります。新幹線で東京から約2時間というアクセスの良さと、豊かな食文化・自然環境が移住先として高い評価を得ています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円の加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区在住または東京圏から23区通勤</p><p>新潟市に転入後3か月以上1年以内に申請</p><p>新潟県マッチングサイト掲載企業への就職またはテレワーク移住</p><p>5年以上継続して新潟市に居住する意思</p></div><p>新潟市役所経済・国際部雇用政策課に申請書と必要書類を提出します。<strong>転入届を提出してから3か月以上経過後</strong>に申請できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子ども加算もあります。</p><p><span class="marker">5年以内に新潟市から転出した場合は、全額または半額の返還が求められます</span>。</p><div class="highlight-box">テレワーク移住も対象です。また、新潟市では移住に関するオンライン相談会や現地見学ツアーを定期的に開催しています。「にいがたで暮らす」ポータルサイトで最新の情報をチェックしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-nursing-equipment',
    title: '新潟市 介護用品支給事業',
    organization: '新潟市',
    type: 'local',
    maxAmount: '月額最大6,500円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '新潟県',
    tags: ['新潟市', '介護用品', '在宅介護'],
    eligibility: '新潟市に住所を有する要介護認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '新潟市が実施する介護用品支給事業です。在宅で要介護者を介護する家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>新潟市は広大な市域に約78万人が暮らす日本海側最大の都市です。高齢化率が全国平均を上回る中、在宅介護を支える家族の負担軽減は喫緊の課題です。消耗品である介護用品を現物支給することで、介護者の経済的負担を直接的に軽減しています。</p><p>月額<strong>最大6,500円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯は自己負担なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>新潟市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方が施設に入所していないこと</p><p>介護を受ける方が市民税非課税であること（課税世帯は一部自己負担）</p></div><p>新潟市の各区役所健康福祉課または地域包括支援センターで申請します。<strong>介護保険被保険者証</strong>の提示が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,500円相当</strong>の紙おむつ・尿取りパッド・使い捨て手袋等が支給されます。カタログから必要なものを選択できます。</p><p><span class="marker">入院中・施設入所中は支給対象外</span>です。退院・退所後に再度申請が必要となる場合があります。</p><div class="note-box">新潟市では冬季（12月〜3月）に除雪支援サービスも実施しており、在宅介護世帯は併せて利用できます。介護に関する総合的な相談は各区の地域包括支援センターが窓口です。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-energy-support',
    title: '新潟市 冬季エネルギー支援給付金',
    organization: '新潟市',
    type: 'local',
    maxAmount: '1世帯あたり最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '新潟県',
    tags: ['新潟市', 'エネルギー支援', '給付金'],
    eligibility: '新潟市に住所を有する住民税非課税世帯等',
    applicationPeriod: '毎年11月〜翌年2月',
    description: '新潟市が実施する冬季エネルギー支援給付金です。暖房費等の負担軽減のため、住民税非課税世帯等に最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 冬季エネルギー支援給付金は、<span class="marker">住民税非課税世帯等を対象に、冬季の暖房費やエネルギー費用の負担</span>を軽減するための給付金です。</p><p>日本海側に位置する新潟市は、冬季に多量の降雪があり、暖房費が家計の大きな負担となります。灯油やガス、電気料金の高騰が続く中、特に経済的に厳しい世帯の冬の暮らしを支えることを目的としています。</p><p>支給額は<strong>1世帯あたり最大3万円</strong>です。<span class="marker-green">申請手続きを簡素化し、対象世帯に直接案内通知を送付</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>世帯全員が住民税非課税であること</p><p>新潟市に住民登録があること</p><p>生活保護を受給していないこと（別途冬季加算あり）</p></div><p>対象と見込まれる世帯には新潟市から案内通知と申請書が届きます。必要事項を記入し、返信用封筒で返送するだけで申請が完了します。</p><p><span class="marker">オンライン申請にも対応</span>しており、スマートフォンから手軽に手続きできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり3万円</strong>です。申請から約1か月で指定口座に振り込まれます。</p><p><span class="marker">申請期限は毎年2月末日です</span>。期限を過ぎると受給できなくなりますので、案内通知が届いたら早めに手続きしてください。</p><div class="highlight-box">新潟市では冬季エネルギー支援のほかにも、除雪費助成や灯油購入助成など、冬の暮らしを支えるさまざまな制度があります。福祉総務課に相談すると利用可能な制度を案内してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'niigata-city-seismic-diagnosis',
    title: '新潟市 木造住宅耐震診断助成事業',
    organization: '新潟市',
    type: 'local',
    maxAmount: '診断費用の自己負担約5,000円',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '新潟県',
    tags: ['新潟市', '耐震診断', '防災'],
    eligibility: '新潟市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '新潟市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を大幅に助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>新潟市は2004年の新潟県中越地震、2007年の中越沖地震など、過去に大きな地震被害を経験しています。旧耐震基準の住宅は地震に対する脆弱性が高いため、まずは耐震診断を受けて住宅の安全性を確認することが重要です。</p><p><span class="marker-green">自己負担わずか約5,000円で専門家による耐震診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>新潟市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>自ら居住している住宅であること</p></div><p>新潟市役所建築行政課に申請書を提出します。市が派遣する耐震診断士が現地調査を行い、診断結果を報告します。</p><p><span class="marker">年間の受付件数に限りがあるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用（通常10万円程度）のうち、<strong>自己負担は約5,000円のみ</strong>です。残りは市が負担します。</p><p><span class="marker">診断の結果、耐震性が不足していた場合は耐震改修補助金（最大100万円）の利用が可能</span>です。</p><div class="note-box">新潟市では耐震診断から改修工事まで一貫した支援体制を整えています。2024年1月の能登半島地震を踏まえ、耐震化の重要性が改めて認識されています。鉄骨造やRC造の住宅は本制度の対象外ですのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 静岡市（静岡県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'shizuoka-city-childcare-subsidy',
    title: '静岡市 子育て応援給付金',
    organization: '静岡市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['静岡市', '子育て支援', '給付金'],
    eligibility: '静岡市に住所を有し、0歳から2歳の子どもを養育する保護者',
    applicationPeriod: '通年（対象児童の年齢条件を満たす期間内）',
    description: '静岡市が実施する子育て応援給付金です。乳幼児を養育する世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 子育て応援給付金は、<span class="marker">0歳から2歳までの乳幼児を養育する保護者</span>に対して給付金を支給する制度です。</p><p>静岡市は駿河湾と南アルプスに挟まれた温暖な気候の政令指定都市で、徳川家康ゆかりの駿府城公園や日本平からの富士山の眺望が有名です。人口約69万人を擁し、プラモデルやホビー産業の集積地としても知られています。</p><p><span class="marker-green">所得制限なしですべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>静岡市に住民登録があり、0歳から2歳の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p><p>母子健康手帳の写し</p></div><p>静岡市役所子ども未来課または各区役所の窓口で申請します。<strong>出生届の提出後に案内通知</strong>が届きますので、届いたら速やかに申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。多胎児の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限を過ぎると受給できません</span>。案内通知に記載の期限を必ず確認してください。</p><div class="note-box">静岡市では子育て応援給付金のほか、産前産後ヘルパー派遣事業やファミリーサポートセンター事業なども実施しています。子育て世代包括支援センター「ちゃむ」で各種制度を一括で相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-birth-bonus',
    title: '静岡市 出産祝い金',
    organization: '静岡市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['静岡市', '出産祝い金', '給付金'],
    eligibility: '静岡市に住所を有し、第3子以降の子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '静岡市が実施する出産祝い金制度です。第3子以降の出生に対し、10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 出産祝い金は、<span class="marker">第3子以降の子どもが生まれた世帯</span>に祝い金を支給する制度です。</p><p>静岡市では少子化対策として多子世帯への支援を強化しています。温暖な気候と適度な都市規模を持つ静岡市は、子育て環境の良さから移住先としても人気があります。出産から育児まで一貫した支援体制の一環として本制度を運用しています。</p><p>支給額は<strong>第3子以降1人につき10万円</strong>です。<span class="marker-green">出生届と同時に申請できるため手続きが簡便</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>静岡市に住民登録があること</p><p>出生した子どもが第3子以降であること</p><p>出生届提出時に市内に住所があること</p><p>生後6か月以内に申請すること</p></div><p>各区役所の戸籍住民課窓口で出生届と同時に案内を受けられます。申請書に必要事項を記入し、振込先口座情報を提出します。</p><p><span class="marker">「第3子」のカウントは18歳年度末までの子どもが対象</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降1人につき10万円</strong>が支給されます。申請後約1〜2か月で振り込まれます。</p><p><span class="marker">生後6か月を超えると申請不可</span>です。出生届の提出と同時に手続きを済ませましょう。</p><div class="highlight-box">静岡市では出産祝い金のほかにも、妊婦健診14回分の公費負担、産後ケア事業（宿泊型・日帰り型・訪問型）など、妊娠・出産に関する手厚い支援制度があります。子育て情報サイト「しずおか子育て情報ひろば」で確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-housing-purchase',
    title: '静岡市 住宅取得支援補助金',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['静岡市', '住宅取得', '補助金'],
    eligibility: '静岡市内に住宅を取得して定住する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '静岡市が実施する住宅取得支援補助金です。子育て世帯や若年世帯が市内に住宅を取得する際に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 住宅取得支援補助金は、<span class="marker">子育て世帯や若年世帯が市内に住宅を取得して定住する場合</span>に、取得費用の一部を補助する制度です。</p><p>静岡市は人口減少対策として、特に若い世代の定住促進に力を入れています。市街地から車で30分で海や山にアクセスできる恵まれた住環境と、東京・名古屋の中間に位置する利便性を活かし、移住・定住人口の増加を目指しています。</p><p>補助額は<strong>基本額30万円</strong>で、各種加算により<strong>最大50万円</strong>となります。<span class="marker-green">新築・中古、戸建て・マンションを問わず対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>申請者または配偶者が40歳未満、または18歳未満の子どもがいる世帯</p><p>静岡市内に住宅を新たに取得すること</p><p>5年以上継続して居住する意思があること</p><p>市税を滞納していないこと</p></div><p>静岡市役所住宅政策課に申請書と必要書類（売買契約書、住民票、登記事項証明書等）を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。市外からの転入世帯は10万円加算、18歳未満の子どもがいる世帯は10万円加算で、<strong>最大50万円</strong>となります。</p><p><span class="marker">年間予算に限りがあり、先着順で受付終了</span>となる場合があります。</p><div class="note-box">投資目的の物件や別荘は対象外です。5年以内に転出した場合は補助金の返還を求められることがあります。静岡市は中山間地域への定住支援も別途実施しており、より手厚い補助が受けられる場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-disability-medical',
    title: '静岡市 重度障がい者医療費助成制度',
    organization: '静岡市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '静岡県',
    tags: ['静岡市', '障がい者医療', '助成金'],
    eligibility: '静岡市に住所を有する重度の障がいのある方',
    applicationPeriod: '通年',
    description: '静岡市が実施する重度障がい者医療費助成制度です。重度の障がいのある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 重度障がい者医療費助成制度は、<span class="marker">重度の障がいのある方の医療費自己負担分を全額助成</span>する制度です。</p><p>障がいのある方は継続的な通院や治療が必要となることが多く、医療費の負担が大きくなりがちです。静岡市ではこうした負担を軽減し、誰もが安心して医療を受けられる環境を整備しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象で、保険診療の自己負担分が全額助成</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる障がいの程度"><p>身体障害者手帳1級・2級の方</p><p>療育手帳A（重度）の方</p><p>精神障害者保健福祉手帳1級の方</p><p>特別児童扶養手当1級該当の障がいのある方</p></div><p>静岡市役所障がい者福祉課または各区役所福祉事務所で申請できます。障害者手帳、健康保険証、振込先口座情報が必要です。</p><p><span class="marker">申請が完了すると「重度障がい者医療費受給者証」が交付</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。静岡県内の医療機関では受給者証を提示することで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦自己負担分を支払い後日償還払い</span>の手続きが必要です。</p><div class="note-box">一定以上の所得がある場合は対象外となることがあります。保険適用外の費用（差額ベッド代、文書料など）は助成対象外です。65歳以上で新たに障がい者手帳を取得した場合は、後期高齢者医療制度への加入が助成の条件となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-scholarship',
    title: '静岡市 奨学金制度',
    organization: '静岡市',
    type: 'local',
    maxAmount: '月額最大3万円（給付型）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '静岡県',
    tags: ['静岡市', '奨学金', '教育支援'],
    eligibility: '静岡市に住所を有する高校生・大学生等で経済的に就学が困難な方',
    applicationPeriod: '毎年4月〜5月',
    description: '静岡市が実施する奨学金制度です。経済的に就学が困難な学生に返還不要の給付型奨学金を月額最大3万円支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 奨学金制度は、<span class="marker">経済的理由により就学が困難な高校生・大学生等</span>に対して返還不要の給付型奨学金を支給する制度です。</p><p>静岡市には静岡大学や静岡県立大学などの高等教育機関があり、多くの学生が学んでいます。家庭の経済状況に左右されず、意欲と能力のある学生が学業を継続できるよう、独自の奨学金制度を設けています。</p><p>給付額は<strong>高校生月額1.5万円、大学生等月額3万円</strong>です。<span class="marker-green">返還不要の給付型で将来の負担がゼロ</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>静岡市に住民登録があること</p><p>高等学校、大学、短大、専門学校等に在学していること</p><p>世帯の所得が基準額以下であること</p><p>学業成績が一定水準以上であること</p></div><p>毎年4月〜5月の募集期間中に静岡市教育委員会に申請します。成績証明書、所得証明書、在学証明書の提出が必要です。</p><p><span class="marker">選考制のため、募集人数を超える応募があった場合は家計状況と成績により選考</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生月額1.5万円、大学生等月額3万円</strong>です。年額で最大36万円となります。</p><p><span class="marker">留年や休学の場合は給付が一時停止</span>されます。正規の修業年限内が支給期間です。</p><div class="highlight-box">日本学生支援機構の貸与型奨学金との併用は可能です。国の給付型奨学金との併用可否は要確認ですので、静岡市教育委員会の窓口でご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-telework-bonus',
    title: '静岡市 テレワーク移住支援補助金',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '静岡県',
    tags: ['静岡市', 'テレワーク', '移住支援'],
    eligibility: '首都圏等から静岡市へ移住しテレワークで勤務する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '静岡市が実施するテレワーク移住支援補助金です。テレワークで首都圏の仕事を続けながら静岡市に移住する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 テレワーク移住支援補助金は、<span class="marker">首都圏等の企業にテレワークで勤務しながら静岡市に移住する方</span>を対象に、移住に係る費用を補助する制度です。</p><p>静岡市は東京から新幹線で約1時間というアクセスの良さと、富士山・駿河湾の絶景を望む豊かな住環境が魅力です。コロナ禍以降のテレワーク普及を追い風に、都市部の仕事を維持しながら静岡の暮らしを楽しむライフスタイルを提案しています。</p><p>補助額は<strong>最大50万円</strong>です。<span class="marker-green">引越し費用やコワーキングスペースの利用料も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>首都圏（東京都・神奈川県・千葉県・埼玉県）等から静岡市へ転入すること</p><p>テレワークにより転入前の勤務先に継続して勤務すること</p><p>3年以上静岡市に居住する意思があること</p><p>市税の滞納がないこと</p></div><p>静岡市役所企画課に申請書と必要書類を提出します。勤務先のテレワーク証明書や転入前の住民票除票が必要です。</p><p><span class="marker">転入後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>最大50万円</strong>です。引越し費用、住居に係る初期費用、コワーキングスペース利用料などが対象経費となります。</p><p><span class="marker">3年以内に静岡市から転出した場合は、補助金の返還を求められます</span>。</p><div class="note-box">フリーランスや個人事業主の方もテレワーク移住の対象となる場合があります。静岡市では「まちづくりテレワークステーション」など、市内各所にコワーキングスペースを整備しています。移住前にお試し滞在プログラムを利用することも可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-nursing-home-reform',
    title: '静岡市 介護施設整備補助金',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'nursing',
    prefecture: '静岡県',
    tags: ['静岡市', '介護施設', '整備補助'],
    eligibility: '静岡市内で介護サービス事業所の開設・改修を行う事業者',
    applicationPeriod: '毎年4月〜9月（公募制）',
    description: '静岡市が実施する介護施設整備補助金です。市内の介護サービス事業所の開設・改修工事に最大500万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 介護施設整備補助金は、<span class="marker">市内で介護サービス事業所の新規開設や改修工事</span>を行う事業者に対して費用の一部を補助する制度です。</p><p>静岡市は高齢化の進展に伴い、介護サービスの供給体制の充実が求められています。特にグループホームやデイサービス事業所など地域密着型サービスの整備を重点的に推進しており、事業者の参入を支援しています。</p><p>補助額は<strong>最大500万円</strong>です。<span class="marker-green">新規開設だけでなく、既存施設のバリアフリー化や防災対策工事も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる事業"><p>地域密着型サービス事業所の新規開設</p><p>既存介護施設のバリアフリー改修</p><p>防災・安全対策のための設備工事</p><p>感染症対策のための改修工事</p></div><p>静岡市役所介護保険課に事業計画書と申請書を提出します。公募制のため、募集期間中に応募し、<strong>審査を経て交付が決定</strong>されます。</p><p><span class="marker">開設予定の1年前をめどに事前相談を行うこと</span>が推奨されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は事業内容に応じて異なり、<strong>新規開設で最大500万円、改修工事で最大200万円</strong>が目安です。</p><p><span class="marker">交付決定前に着工した工事は補助対象外</span>です。公募スケジュールを確認し、計画的に申請しましょう。</p><div class="highlight-box">国の地域医療介護総合確保基金を活用した補助制度と併用できる場合があります。静岡市の介護保険課に事前に相談することで、活用可能な制度を案内してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-migration-bonus',
    title: '静岡市 移住支援金',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '静岡県',
    tags: ['静岡市', '移住支援', '給付金'],
    eligibility: '東京圏から静岡市へ移住し就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '静岡市が実施する移住支援金です。東京圏から静岡市へ移住し就業・創業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 移住支援金は、<span class="marker">東京23区に在住または東京圏から23区に通勤していた方が静岡市に移住</span>し、就業または創業した場合に支給される支援金です。</p><p>静岡市は温暖な気候、富士山や駿河湾の美しい自然、新幹線で東京約1時間のアクセスなど、暮らしの魅力に溢れた街です。プラモデルやお茶の産地としても有名で、多様な産業が根付いています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円が加算</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区在住または東京圏から23区通勤</p><p>静岡市に転入後3か月以上1年以内に申請</p><p>静岡県マッチングサイト掲載企業への就職または創業</p><p>5年以上継続して静岡市に居住する意思</p></div><p>静岡市役所企画課に申請書と必要書類を提出します。<strong>転入届提出後3か月以上経過してから</strong>申請できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。子ども加算もあります。</p><p><span class="marker">5年以内に静岡市から転出した場合は、全額または半額の返還</span>が求められます。</p><div class="note-box">テレワーク移住も条件を満たせば対象となります。静岡市では移住希望者向けの「しずおか移住相談会」を定期的に開催しているほか、お試し移住プログラムも用意しています。まずは「静岡市移住・定住情報サイト」をチェックしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shizuoka-city-bousai-equipment',
    title: '静岡市 家庭用防災用品購入補助金',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '静岡県',
    tags: ['静岡市', '防災用品', '補助金'],
    eligibility: '静岡市に住所を有する世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '静岡市が実施する家庭用防災用品購入補助金です。家庭での防災対策に必要な用品の購入費用を最大2万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 家庭用防災用品購入補助金は、<span class="marker">家庭での防災対策に必要な用品の購入費用</span>を補助する制度です。</p><p>静岡市は南海トラフ巨大地震の想定被災エリアに位置しており、家庭レベルでの防災対策が極めて重要です。家具の転倒防止器具、非常用蓄電池、感震ブレーカーなど、命を守るための防災用品の普及を促進しています。</p><p>補助率は購入費用の2分の1以内で、<strong>上限は2万円</strong>です。<span class="marker-green">1世帯につき年度内1回利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災用品"><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>感震ブレーカー</p><p>非常用蓄電池・ポータブル電源</p><p>飛散防止フィルム</p><p>耐震ラッチ（食器棚用）</p></div><p>静岡市役所危機管理課に購入後の領収書と申請書を提出します。購入した商品の写真や設置状況の写真も必要です。</p><p><span class="marker">市内の販売店で購入した場合に限り対象</span>です。インターネット通販での購入は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限2万円</strong>です。1世帯につき年度内1回の利用に限られます。</p><p><span class="marker">食料品や飲料水などの消耗品は対象外</span>です。繰り返し使用できる防災設備・器具が対象となります。</p><div class="highlight-box">静岡市では地域の自主防災組織への防災資機材の補助制度も別途あります。個人の備えとあわせて、地域の防災力向上にも取り組むことが重要です。静岡市防災情報ポータルサイトで最新の防災情報を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 浜松市（静岡県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hamamatsu-childcare-subsidy',
    title: '浜松市 子育て応援給付金',
    organization: '浜松市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['浜松市', '子育て支援', '給付金'],
    eligibility: '浜松市に住所を有し、0歳から2歳の子どもを養育する保護者',
    applicationPeriod: '通年（対象児童の年齢条件を満たす期間内）',
    description: '浜松市が実施する子育て応援給付金です。乳幼児を養育する世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 子育て応援給付金は、<span class="marker">0歳から2歳までの乳幼児を養育する保護者</span>に対して給付金を支給する制度です。</p><p>浜松市は静岡県西部に位置する政令指定都市で、全国でも有数の広い市域面積を誇ります。ヤマハ・カワイなど世界的な楽器メーカーの本拠地であり、「音楽の都」として知られています。ものづくり産業が盛んな一方、浜名湖や天竜川など豊かな自然にも恵まれた街です。</p><p><span class="marker-green">所得制限なしですべての対象世帯が受給可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>浜松市に住民登録があり、0歳から2歳の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p><p>母子健康手帳の写し</p></div><p>浜松市役所こども家庭部または各区役所社会福祉課の窓口で申請します。<strong>出生届提出後に案内通知</strong>が届きますので、届いたら速やかに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。多胎児（双子以上）の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>。案内通知に記載の期限を必ずご確認ください。</p><div class="note-box">浜松市外から転入した方は、転入日から申請が可能です。浜松市では子育て情報サイト「ぴっぴ」で各種支援制度の情報を提供していますので、出産前後の手続きの確認にご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-parenting-allowance',
    title: '浜松市 多子世帯育児支援手当',
    organization: '浜松市',
    type: 'local',
    maxAmount: '第3子以降月額1万円',
    maxAmountNum: 12,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['浜松市', '育児手当', '多子世帯'],
    eligibility: '浜松市に住所を有し、第3子以降の0歳から2歳児を養育する保護者',
    applicationPeriod: '通年',
    description: '浜松市が実施する多子世帯育児支援手当です。第3子以降の0歳から2歳児を養育する世帯に月額1万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 多子世帯育児支援手当は、<span class="marker">第3子以降の0歳から2歳の子どもを養育する世帯</span>に対し、月額1万円を支給する制度です。</p><p>浜松市では多子世帯への支援を少子化対策の柱と位置づけ、国の児童手当に上乗せする形で独自の育児支援手当を設けています。多くの子どもを育てる家庭の日々の養育費負担を継続的にサポートする仕組みです。</p><p>支給額は<strong>第3子以降の対象児1人あたり月額1万円</strong>です。<span class="marker-green">所得制限なしで、第3子以降の乳幼児がいるすべての世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>浜松市に住民登録があること</p><p>第3子以降の子どもで0歳から2歳であること</p><p>子どもを養育している保護者であること</p></div><p>浜松市役所こども家庭部の窓口または各区役所で申請できます。児童手当の手続きと合わせて行うのが便利です。</p><p><span class="marker">「第3子」のカウントは18歳年度末までの子どもを含めて行います</span>。上の子が中高生でも第1子・第2子としてカウントされます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>対象児1人あたり月額1万円</strong>が支給されます。年額にすると12万円となります。支給は年3回（4月・8月・12月）にまとめて行われます。</p><p><span class="marker">対象の子どもが3歳に達した月の翌月から支給が終了</span>します。</p><div class="highlight-box">浜松市では多子世帯向けに、保育料の軽減（第2子以降無償）や放課後児童会の利用料減免なども実施しています。複数の制度を組み合わせることで、多子世帯の家計負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-housing-purchase',
    title: '浜松市 住宅取得支援補助金',
    organization: '浜松市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['浜松市', '住宅取得', '補助金'],
    eligibility: '浜松市内に住宅を取得して定住する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '浜松市が実施する住宅取得支援補助金です。子育て世帯や若年世帯の市内定住を促進するため最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 住宅取得支援補助金は、<span class="marker">子育て世帯や若年世帯が市内に住宅を取得して定住する場合</span>に費用の一部を補助する制度です。</p><p>浜松市は輸送機器やものづくり産業の集積地として発展し、スズキやヤマハ発動機の本拠地でもあります。浜名湖や天竜川の美しい景観、温暖な気候に恵まれた住みやすい環境で、若い世代の定住を積極的に推進しています。</p><p>補助額は<strong>基本額30万円</strong>、加算を含め<strong>最大50万円</strong>です。<span class="marker-green">新築・中古を問わず対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>申請者または配偶者が40歳未満、または18歳未満の子どもがいる世帯</p><p>浜松市内に住宅を新たに取得すること</p><p>5年以上継続して居住する意思があること</p><p>市税を滞納していないこと</p></div><p>浜松市役所住宅課に申請書と売買契約書、住民票、登記事項証明書等を提出します。</p><p><span class="marker">住宅引渡し後6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額は<strong>30万円</strong>です。市外からの転入世帯は10万円加算、子育て世帯は10万円加算で、<strong>最大50万円</strong>です。</p><p><span class="marker">予算に達し次第、年度途中でも受付終了</span>となります。早めの申請を心がけてください。</p><div class="note-box">中山間地域（天竜区等）への移住の場合は、さらに手厚い補助が受けられる別制度もあります。投資用物件や別荘は対象外です。5年以内に転出した場合は返還を求められる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-infertility',
    title: '浜松市 不妊治療費助成事業',
    organization: '浜松市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '静岡県',
    tags: ['浜松市', '不妊治療', '助成金'],
    eligibility: '浜松市に住所を有する不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後3か月以内）',
    description: '浜松市が実施する不妊治療費助成事業です。特定不妊治療に係る費用を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 不妊治療費助成事業は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対し、治療費の自己負担分を助成する制度です。</p><p>浜松市は子どもを望む夫婦への支援を積極的に行っており、保険適用後の自己負担分に対する市独自の上乗せ助成を実施しています。浜松医科大学附属病院をはじめ、市内には高度な不妊治療に対応できる医療機関が複数あります。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">県の助成に市独自の上乗せを加えた支援</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>浜松市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の原本</p><p>夫婦の住民票</p><p>戸籍謄本（必要に応じて）</p></div><p>浜松市保健所健康増進課に申請書類を提出します。<strong>治療終了日から3か月以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大30万円</strong>です。男性不妊治療を併せて行った場合は最大15万円の加算があります。</p><p><span class="marker">通算助成回数は妻の年齢が40歳未満で開始した場合6回、40歳以上43歳未満で3回が上限</span>です。</p><div class="highlight-box">浜松市では不妊・不育症に関する相談窓口「はままつ不妊・不育相談」を設置しています。治療費の見通しや利用できる制度について、専門スタッフに無料で相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-scholarship',
    title: '浜松市 奨学金制度',
    organization: '浜松市',
    type: 'local',
    maxAmount: '月額最大3万円（給付型）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '静岡県',
    tags: ['浜松市', '奨学金', '教育支援'],
    eligibility: '浜松市に住所を有する高校生・大学生等で経済的に就学が困難な方',
    applicationPeriod: '毎年4月〜5月',
    description: '浜松市が実施する奨学金制度です。経済的に就学が困難な学生に返還不要の給付型奨学金を月額最大3万円支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 奨学金制度は、<span class="marker">経済的理由により就学が困難な高校生・大学生等</span>に対し、返還不要の給付型奨学金を支給する制度です。</p><p>浜松市はものづくり産業の中心地として、技術者や専門人材の育成を重視しています。静岡大学工学部キャンパスや浜松医科大学など、理工系の高等教育機関が集積しており、次世代を担う若者の学びを支援する奨学金制度を整えています。</p><p>給付額は<strong>高校生月額1.5万円、大学生等月額3万円</strong>です。<span class="marker-green">返還不要で卒業後の負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>浜松市に住民登録があること</p><p>高等学校、大学、短大、専門学校等に在学していること</p><p>世帯の所得が基準額以下であること</p><p>学業に対する意欲があること</p></div><p>毎年4月〜5月の募集期間中に浜松市教育委員会教育総務課に申請します。成績証明書、所得証明書、在学証明書が必要です。</p><p><span class="marker">選考により支給者を決定します</span>。学業成績と家計状況を総合的に審査します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生月額1.5万円、大学生等月額3万円</strong>です。年額で最大36万円の支援が受けられます。</p><p><span class="marker">正規修業年限を超えた場合や成績が著しく低下した場合は給付停止</span>となります。</p><div class="note-box">日本学生支援機構の貸与型奨学金との併用は可能です。国の高等教育の修学支援新制度との併用可否は要確認です。浜松市教育委員会の窓口で、利用可能な制度の組み合わせを相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-sme-support',
    title: '浜松市 中小企業デジタル化支援補助金',
    organization: '浜松市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '静岡県',
    tags: ['浜松市', 'デジタル化', '中小企業'],
    eligibility: '浜松市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '浜松市が実施する中小企業デジタル化支援補助金です。ITツール導入やDX推進に取り組む中小企業に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 中小企業デジタル化支援補助金は、<span class="marker">ITツールの導入やDX推進に取り組む市内中小企業</span>に対して費用の一部を補助する制度です。</p><p>浜松市はヤマハやスズキなど世界的メーカーを生んだものづくりの街ですが、中小企業のデジタル化は全国的な課題です。製造現場のIoT化、業務管理システムの導入、ECサイトの構築など、幅広いデジタル投資を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">ソフトウェア導入からクラウドサービス利用まで幅広く対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となるデジタル投資"><p>業務管理・会計システムの導入</p><p>製造現場のIoT・自動化設備</p><p>ECサイト・Web予約システムの構築</p><p>クラウドサービスの導入（初年度分）</p><p>セキュリティ対策システムの導入</p></div><p>浜松市役所産業振興課に事業計画書と申請書を提出します。デジタル化による期待効果を明確に記載してください。</p><p><span class="marker">導入前に申請し交付決定を受けてから着手</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。対象経費の下限は20万円です。</p><p><span class="marker">交付決定前に契約・支払いした経費は補助対象外</span>です。年間予算に限りがあるため早めの申請をおすすめします。</p><div class="highlight-box">浜松市では無料のIT導入相談会も定期的に開催しています。「何を導入すべきかわからない」という段階からでも、専門アドバイザーに相談できますので、まずは気軽にご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-nursing-equipment',
    title: '浜松市 介護用品支給事業',
    organization: '浜松市',
    type: 'local',
    maxAmount: '月額最大6,000円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '静岡県',
    tags: ['浜松市', '介護用品', '在宅介護'],
    eligibility: '浜松市に住所を有する要介護認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '浜松市が実施する介護用品支給事業です。在宅で要介護者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>浜松市は市域が広く、中山間地域を含む多様な地域特性があります。在宅介護を続ける家庭にとって、介護用品の購入は継続的な経済的負担です。この制度により、月々の出費を軽減し、在宅介護の継続を支援しています。</p><p>月額<strong>最大6,000円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯は自己負担なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>浜松市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方が施設入所・入院中でないこと</p><p>介護を受ける方が市民税非課税であること（課税の場合は自己負担あり）</p></div><p>浜松市の各区役所長寿保険課または地域包括支援センターで申請します。<strong>介護保険被保険者証</strong>を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,000円相当</strong>の紙おむつ・尿取りパッド等が支給されます。カタログから選択して自宅に配送されます。</p><p><span class="marker">入院・施設入所中は支給停止</span>となります。退院後に再度手続きが必要です。</p><div class="note-box">浜松市では介護用品支給のほかに、在宅介護者への慰労金支給制度や介護者リフレッシュ事業なども実施しています。介護に関する総合的な相談は各区の地域包括支援センターが窓口です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-energy-support',
    title: '浜松市 省エネ家電購入支援補助金',
    organization: '浜松市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '静岡県',
    tags: ['浜松市', '省エネ', '家電補助'],
    eligibility: '浜松市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '浜松市が実施する省エネ家電購入支援補助金です。省エネ性能の高い家電への買い替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 省エネ家電購入支援補助金は、<span class="marker">省エネ性能の高いエアコン・冷蔵庫等への買い替え</span>に対して費用の一部を補助する制度です。</p><p>浜松市は「浜松市エネルギービジョン」を策定し、再生可能エネルギーの導入やエネルギー効率の向上に取り組んでいます。家庭でのエネルギー消費を削減するため、省エネ性能の高い家電への買い替えを促進するこの制度を設けています。</p><p>補助額は<strong>最大3万円</strong>です。<span class="marker-green">電気代の節約にもつながるため、中長期的に家計の負担を軽減</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる家電製品"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p><p>LED照明器具</p><p>エコキュート（高効率給湯器）</p></div><p>浜松市役所環境政策課に購入後の領収書と申請書を提出します。製品の省エネ性能がわかるカタログや保証書の写しも必要です。</p><p><span class="marker">市内の販売店で購入し、市内の住居に設置する場合が対象</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>エアコン・冷蔵庫は1台あたり最大2万円、エコキュートは最大3万円</strong>です。1世帯あたり年度内1回の申請に限られます。</p><p><span class="marker">先着順で予算に達し次第終了</span>します。年度初めに申請するのがおすすめです。</p><div class="highlight-box">古い家電から省エネ家電に買い替えると、年間で1万円以上の電気代節約になるケースもあります。浜松市の環境政策課では省エネ診断も無料で実施していますので、どの家電を優先的に買い替えるべきか相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hamamatsu-seismic-diagnosis',
    title: '浜松市 木造住宅耐震診断助成事業',
    organization: '浜松市',
    type: 'local',
    maxAmount: '診断費用の自己負担なし（無料）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '静岡県',
    tags: ['浜松市', '耐震診断', '防災'],
    eligibility: '浜松市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '浜松市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>浜松市は南海トラフ巨大地震の想定被災エリアに位置しており、住宅の耐震化は命に関わる重要課題です。静岡県は全国でもトップクラスの耐震化率を誇りますが、浜松市でもまだ旧耐震基準の住宅が残っており、その耐震診断を全額公費で支援しています。</p><p><span class="marker-green">自己負担なし（無料）で専門家による耐震診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>浜松市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>自ら居住している住宅であること</p></div><p>浜松市役所建築行政課に申請書を提出します。市が派遣する耐震診断士が現地を訪問し、<strong>壁量や基礎の状態などを調査して耐震性を判定</strong>します。</p><p><span class="marker">年間受付件数に限りがあるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用は<strong>全額浜松市が負担し、自己負担はありません</strong>。通常10万円以上かかる診断が無料で受けられます。</p><p><span class="marker">診断の結果、耐震性が不足していた場合は耐震補強工事の補助金（最大100万円）</span>も利用できます。</p><div class="note-box">浜松市は「プロジェクト TOUKAI-0」の対象地域として、住宅の耐震化を強力に推進しています。耐震補強工事を行うと、固定資産税の減額措置や地震保険料の割引が受けられる場合もあります。まずは無料の耐震診断から始めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 名古屋市（愛知県）9件: childcare×2, housing×2, medical×2, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'nagoya-childcare-subsidy',
    title: '名古屋市 子育て応援給付金',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['名古屋市', '子育て支援', '給付金'],
    eligibility: '名古屋市に住所を有し、0歳から2歳の子どもを養育する保護者',
    applicationPeriod: '通年（対象児童の年齢条件を満たす期間内）',
    description: '名古屋市が実施する子育て応援給付金です。乳幼児を養育する世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 子育て応援給付金は、<span class="marker">0歳から2歳までの乳幼児を養育する保護者</span>に対して給付金を支給する制度です。</p><p>名古屋市は人口約230万人を擁する日本第4の都市で、東海地方の経済・文化の中心です。トヨタ自動車を頂点とする自動車産業の集積地として世界的に知られ、名古屋城や熱田神宮など歴史的な観光資源も豊富です。子育て世帯への支援にも積極的に取り組んでいます。</p><p><span class="marker-green">所得制限なしですべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>名古屋市に住民登録があり、0歳から2歳の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p><p>母子健康手帳の写し</p></div><p>名古屋市各区役所民生子ども課の窓口で申請できます。<strong>出生届提出後に案内通知が届きます</strong>ので、届いたら速やかに手続きしましょう。オンライン申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。双子以上の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>。案内通知に記載の期限を確認してください。</p><div class="note-box">名古屋市外から転入した方は、転入日から申請が可能です。名古屋市の子育て支援情報は「なごやっ子あんしんネット」で一括して確認できます。出産・育児に関する各種制度を見落とさないようにチェックしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-birth-bonus',
    title: '名古屋市 出産祝い金',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['名古屋市', '出産祝い金', '給付金'],
    eligibility: '名古屋市に住所を有し、第3子以降の子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '名古屋市が実施する出産祝い金制度です。第3子以降の出生に対し、10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 出産祝い金は、<span class="marker">第3子以降の子どもが生まれた世帯</span>に祝い金を支給する制度です。</p><p>名古屋市は全国トップクラスの経済力を持つ大都市でありながら、東京や大阪と比べて住宅コストが抑えられ、子育てしやすい都市として知られています。多子世帯への経済的支援を通じて、出生率の向上と子育て環境の充実を図っています。</p><p>支給額は<strong>第3子以降1人につき10万円</strong>です。<span class="marker-green">出生届の提出と同時に申請手続きが可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>名古屋市に住民登録があること</p><p>出生した子どもが第3子以降であること</p><p>出生届提出日に市内に住所があること</p><p>生後6か月以内に申請すること</p></div><p>各区役所民生子ども課の窓口で出生届と同時に案内を受けられます。申請書と振込先口座情報を提出してください。</p><p><span class="marker">「第3子」のカウントは18歳年度末までの子どもを対象</span>に行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降1人につき10万円</strong>が支給されます。申請後約1〜2か月で指定口座に振り込まれます。</p><p><span class="marker">生後6か月を過ぎると申請できなくなります</span>。出生届の提出時に合わせて手続きしましょう。</p><div class="highlight-box">名古屋市では、出産祝い金に加え、産後ケア事業（宿泊型・日帰り型・訪問型）、新生児訪問指導、こんにちは赤ちゃん訪問事業なども充実しています。子育てコンシェルジュに相談すると、利用可能な支援制度をまとめて案内してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-housing-purchase',
    title: '名古屋市 住宅取得支援補助金',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['名古屋市', '住宅取得', '補助金'],
    eligibility: '名古屋市内に住宅を取得して定住する子育て世帯等',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '名古屋市が実施する住宅取得支援補助金です。子育て世帯等が市内に住宅を取得する際に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 住宅取得支援補助金は、<span class="marker">子育て世帯等が市内に住宅を取得して定住する場合</span>に費用の一部を補助する制度です。</p><p>名古屋市は東海道新幹線の停車駅であり、リニア中央新幹線の開業も予定される日本の交通の要衝です。都心部の再開発が進む一方、郊外には緑豊かな住宅地も広がり、多様な住まいの選択肢があります。人口の流出防止と若い世代の定住促進を目指しています。</p><p>補助額は<strong>基本額30万円</strong>で加算を含め<strong>最大50万円</strong>です。<span class="marker-green">新築・中古、戸建て・マンション問わず対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯、または申請者が40歳未満の世帯</p><p>名古屋市内に住宅を新たに取得すること</p><p>5年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>名古屋市住宅都市局住宅企画課に申請書と必要書類を提出します。売買契約書、住民票、登記事項証明書等が必要です。</p><p><span class="marker">住宅引渡し後6か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額<strong>30万円</strong>に、市外からの転入で10万円加算、子育て世帯で10万円加算、<strong>最大50万円</strong>です。</p><p><span class="marker">年間予算に限りがあり、先着順で受付終了</span>となる場合があります。</p><div class="note-box">投資用物件や別荘は対象外です。5年以内に名古屋市外へ転出した場合は返還を求められることがあります。名古屋市では住宅購入に関する無料相談会も開催していますので、購入前に利用することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-barrier-free',
    title: '名古屋市 住宅バリアフリー改修補助金',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['名古屋市', 'バリアフリー', '住宅改修'],
    eligibility: '名古屋市に住所を有する高齢者または障がい者がいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '名古屋市が実施する住宅バリアフリー改修補助金です。高齢者や障がい者の安全な住環境整備に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 住宅バリアフリー改修補助金は、<span class="marker">高齢者や障がい者が安全に暮らせるよう住宅のバリアフリー改修</span>に対して費用の一部を補助する制度です。</p><p>名古屋市では高齢者人口が増加を続けており、住み慣れた自宅での生活を長く続けられるよう、住環境の改善を支援しています。手すりの設置、段差解消、浴室・トイレの改修、廊下の拡幅など、日常生活の安全性を高める多様な工事が対象です。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限は40万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置（玄関・廊下・浴室・トイレ等）</p><p>段差の解消・スロープ設置</p><p>浴室・トイレの改修（洋式化含む）</p><p>滑り止め床材への変更</p><p>廊下・出入口の幅員拡張</p></div><p>名古屋市に住民登録があり、65歳以上の高齢者または身体障害者手帳を持つ方がいる世帯が対象です。各区役所福祉課に申請します。</p><p><span class="marker">工事着手前の申請が必須</span>です。着工後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限40万円</strong>です。介護保険の住宅改修費（上限20万円）と合わせると最大60万円の支援が可能です。</p><p><span class="marker">介護保険の住宅改修費を先に利用し、残りの自己負担分に本補助を活用する</span>のが一般的な流れです。</p><div class="highlight-box">名古屋市では住宅のバリアフリー改修に関する無料相談窓口を設けています。ケアマネジャーや建築士と連携した改修プランの提案も受けられますので、工事前に一度相談することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-infertility',
    title: '名古屋市 不妊治療費助成事業',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['名古屋市', '不妊治療', '助成金'],
    eligibility: '名古屋市に住所を有する不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後3か月以内）',
    description: '名古屋市が実施する不妊治療費助成事業です。特定不妊治療に係る費用を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 不妊治療費助成事業は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対し、治療費の自己負担分を助成する制度です。</p><p>名古屋市は市独自の不妊治療支援策を展開しており、保険適用後の自己負担分や先進医療に係る費用を幅広く助成しています。名古屋大学医学部附属病院や名古屋市立大学病院など、高度な生殖医療に対応できる医療機関が充実しています。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">愛知県の助成に名古屋市独自の上乗せを加えた手厚い支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>名古屋市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の原本</p><p>夫婦の住民票</p><p>戸籍謄本（事実婚の場合は追加書類）</p></div><p>名古屋市各区保健センターに申請書類を提出します。<strong>治療終了日から3か月以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大30万円</strong>です。男性不妊治療を併せて行った場合は最大15万円が加算されます。</p><p><span class="marker">通算助成回数は妻の年齢が40歳未満で6回、40歳以上43歳未満で3回が上限</span>です。43歳以上で治療を開始した場合は対象外です。</p><div class="note-box">名古屋市では「なごや不妊・不育相談」を設置し、治療の進め方や費用の見通しについて無料で相談を受け付けています。夫婦での相談も歓迎されていますので、お気軽にご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-mental-health',
    title: '名古屋市 こころの健康支援事業',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '相談・支援プログラム無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['名古屋市', 'メンタルヘルス', '健康支援'],
    eligibility: '名古屋市に住所を有する方',
    applicationPeriod: '通年',
    description: '名古屋市が実施するこころの健康支援事業です。メンタルヘルスに関する相談支援やリワークプログラムを無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 こころの健康支援事業は、<span class="marker">うつ病や不安障害などのメンタルヘルスの問題を抱える方</span>に対し、相談支援や回復プログラムを無料で提供する事業です。</p><p>名古屋市では働く世代を中心にメンタルヘルスの課題が深刻化しています。こころの健康センターを中心に、電話相談、面接相談、デイケアプログラム、家族支援など、包括的なメンタルヘルスケアを提供しています。</p><p><span class="marker-green">すべての相談・プログラムが無料で、秘密は厳守</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="提供サービス"><p>電話相談（こころの相談ダイヤル）</p><p>精神科医・臨床心理士による面接相談</p><p>デイケアプログラム（集団活動・リワーク）</p><p>家族向け相談会・学習会</p><p>自殺予防に関する相談</p></div><p>名古屋市こころの健康センターまたは各区保健センターに電話で予約します。<strong>まずは電話で状況を伝える</strong>ことで、適切な支援につなげてもらえます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>相談およびプログラムはすべて無料</strong>です。医療機関への紹介が必要な場合は、適切な専門医を案内してもらえます。</p><p><span class="marker">相談は予約制のため、事前に電話で予約が必要</span>です。緊急の場合は「こころの相談ダイヤル」に直接電話してください。</p><div class="highlight-box">名古屋市では企業向けのメンタルヘルス研修や、ゲートキーパー養成講座（自殺予防のための見守り人材育成）も実施しています。自分自身だけでなく、周囲の人のメンタルヘルスに気づいた場合にも相談窓口を活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-women-startup',
    title: '名古屋市 女性起業支援補助金',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['名古屋市', '女性起業', '補助金'],
    eligibility: '名古屋市内で新たに起業する女性、または起業後1年以内の女性',
    applicationPeriod: '毎年4月〜10月（公募制）',
    description: '名古屋市が実施する女性起業支援補助金です。女性の起業を後押しするため、創業に係る経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 女性起業支援補助金は、<span class="marker">市内で新たに起業する女性</span>を対象に、創業に係る経費を補助する制度です。</p><p>名古屋市は製造業が強い東海地方の中心都市ですが、近年はサービス業やIT分野での女性起業家が増加しています。女性ならではの視点を活かしたビジネスの創出を支援し、地域経済の多様化と活性化を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">市の起業セミナー受講者は審査で優遇</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>名古屋市内で起業する（または起業後1年以内である）女性</p><p>事業計画書を作成・提出できること</p><p>市税の滞納がないこと</p><p>名古屋市が実施する起業支援プログラムを受講済みであること（推奨）</p></div><p>名古屋市経済局イノベーション推進部に事業計画書と申請書を提出します。書類審査とプレゼン審査が行われます。</p><p><span class="marker">名古屋市女性起業支援ネットワーク「なごや女性起業支援ルーム」で無料の事前相談</span>が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。店舗改装費、設備費、広告宣伝費、法人設立費用等が対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定を受けてから経費を支出してください。</p><div class="note-box">名古屋市では女性起業家向けのコワーキングスペース利用支援やメンター制度なども用意しています。人件費や運転資金は補助対象外です。公募制のため審査があり、事業の社会的意義や成長性が重視されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-nursing-equipment',
    title: '名古屋市 介護用品支給事業',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '月額最大6,300円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '愛知県',
    tags: ['名古屋市', '介護用品', '在宅介護'],
    eligibility: '名古屋市に住所を有する要介護認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '名古屋市が実施する介護用品支給事業です。在宅で要介護者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>名古屋市は約230万人の人口を擁する大都市であり、在宅介護を行う世帯も多く存在します。消耗品である介護用品の費用は月々の家計に大きな負担となるため、現物支給により介護者の経済的負担を軽減しています。</p><p>月額<strong>最大6,300円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯は自己負担なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>名古屋市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方が施設入所・入院中でないこと</p><p>介護を受ける方が市民税非課税であること（課税世帯は自己負担あり）</p></div><p>各区役所福祉課またはいきいき支援センター（地域包括支援センター）で申請します。<strong>介護保険被保険者証</strong>を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,300円相当</strong>の紙おむつ・尿取りパッド・清拭剤等が支給されます。カタログから必要な商品を選んで自宅に届けてもらえます。</p><p><span class="marker">入院中や施設入所中は支給対象外</span>です。退院・退所後の再申請が必要となる場合があります。</p><div class="highlight-box">名古屋市では在宅介護者向けに「家族介護者交流事業」や「介護者リフレッシュ事業」なども実施しています。いきいき支援センターに相談すると、利用可能な介護支援サービスをまとめて案内してもらえます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagoya-elderly-support',
    title: '名古屋市 高齢者生きがい支援事業',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '各種サービス無料〜低額',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '愛知県',
    tags: ['名古屋市', '高齢者支援', '生きがい'],
    eligibility: '名古屋市に住所を有する65歳以上の方',
    applicationPeriod: '通年',
    description: '名古屋市が実施する高齢者生きがい支援事業です。高齢者の社会参加や健康増進を促進する各種プログラムを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 高齢者生きがい支援事業は、<span class="marker">65歳以上の高齢者の社会参加・健康増進・生きがいづくり</span>を支援する包括的な事業です。</p><p>名古屋市では超高齢社会を迎える中、高齢者が地域社会の中でいきいきと活動し続けられるよう、多彩なプログラムを提供しています。敬老パス（市バス・地下鉄の優待利用）をはじめ、高齢者向け講座やサロン活動など、さまざまなメニューが用意されています。</p><p><span class="marker-green">多くのサービスが無料または低額で利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>敬老パス（市バス・地下鉄の優待乗車証）</p><p>高齢者向け学習講座・健康教室</p><p>老人福祉センター・いきいきセンターの利用</p><p>シルバー人材センターによる就業機会の提供</p><p>見守り・安否確認サービス</p></div><p>各区役所福祉課やいきいき支援センターで利用登録や申請ができます。敬老パスは<strong>65歳になる月に案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>敬老パスは年間負担金（所得に応じて0〜5,000円程度）</strong>で市バス・地下鉄が利用できます。学習講座や健康教室の多くは無料です。</p><p><span class="marker">敬老パスの年間利用上限は一定回数となっています</span>。詳細は各区役所でご確認ください。</p><div class="note-box">名古屋市のシルバー人材センターでは、植木の手入れ、家事援助、事務作業など、さまざまな仕事の機会を提供しています。働くことで収入を得ながら社会参加を続けたい方におすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 京都市（京都府）9件: childcare×2, housing, medical, education×2, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'kyoto-city-childcare-subsidy',
    title: '京都市 子育て応援給付金',
    organization: '京都市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '京都府',
    tags: ['京都市', '子育て支援', '給付金'],
    eligibility: '京都市に住所を有し、0歳から2歳の子どもを養育する保護者',
    applicationPeriod: '通年（対象児童の年齢条件を満たす期間内）',
    description: '京都市が実施する子育て応援給付金です。乳幼児を養育する世帯に子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 子育て応援給付金は、<span class="marker">0歳から2歳までの乳幼児を養育する保護者</span>に対して給付金を支給する制度です。</p><p>京都市は千年の都として世界に知られる歴史文化都市で、人口約140万人を擁します。清水寺や金閣寺をはじめとする世界遺産が点在し、伝統産業と先端技術が融合する街です。子育て世帯の市外流出が課題となる中、経済的支援の充実に取り組んでいます。</p><p><span class="marker-green">所得制限なしですべての対象世帯が申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>京都市に住民登録があり、0歳から2歳の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>子どもの健康保険証の写し</p><p>振込先口座情報</p><p>母子健康手帳の写し</p></div><p>京都市各区役所・支所の子どもはぐくみ室の窓口で申請します。<strong>出生届提出後に案内通知</strong>が届きますので、届き次第手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>子ども1人あたり5万円</strong>です。多胎児の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限を過ぎると受給できません</span>。案内通知の期限を確認してください。</p><div class="note-box">京都市では子育て支援情報を「京都はぐくみアプリ」で配信しています。給付金のほか、予防接種スケジュールや健診のリマインド機能もありますので、インストールしておくと便利です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-birth-bonus',
    title: '京都市 出産祝い金',
    organization: '京都市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '京都府',
    tags: ['京都市', '出産祝い金', '給付金'],
    eligibility: '京都市に住所を有し、第3子以降の子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '京都市が実施する出産祝い金制度です。第3子以降の出生に対し、10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 出産祝い金は、<span class="marker">第3子以降の子どもが生まれた世帯</span>に祝い金を支給する制度です。</p><p>京都市では人口減少と少子化が喫緊の課題となっています。特に住宅費の高さが子育て世帯の市外流出の一因とされており、経済的な支援を通じて子育て世帯の定住を促進しています。多子世帯への祝い金は、出産に伴う費用の負担軽減を目的としています。</p><p>支給額は<strong>第3子以降1人につき10万円</strong>です。<span class="marker-green">出生届と同時に申請手続きが可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>京都市に住民登録があること</p><p>出生した子どもが第3子以降であること</p><p>出生届提出日に市内に住所があること</p><p>生後6か月以内に申請すること</p></div><p>各区役所・支所の戸籍課窓口で出生届と同時に案内を受けられます。申請書と振込先口座情報を提出してください。</p><p><span class="marker">「第3子」のカウントは18歳年度末までの子どもが対象</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降1人につき10万円</strong>が支給されます。申請後約1〜2か月で振り込まれます。</p><p><span class="marker">生後6か月を過ぎると申請不可</span>となります。出生届と同時の手続きを強くおすすめします。</p><div class="highlight-box">京都市では出産祝い金のほかにも、「子育てにやさしいまちづくり」の一環として、妊婦健診の公費負担、産後ケア事業、子育てサロン運営などを幅広く実施しています。各区の子どもはぐくみ室が総合窓口です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-housing-purchase',
    title: '京都市 子育て世帯住宅取得補助金',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '京都府',
    tags: ['京都市', '住宅取得', '補助金'],
    eligibility: '京都市内に住宅を取得して定住する子育て世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '京都市が実施する子育て世帯住宅取得補助金です。子育て世帯の市内定住を促進するため最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 子育て世帯住宅取得補助金は、<span class="marker">子育て世帯が市内に住宅を取得して定住する場合</span>に費用の一部を補助する制度です。</p><p>京都市は住宅価格や家賃が他の政令指定都市と比較して高い傾向にあり、子育て世帯の近隣市町への流出が課題となっています。この制度は市内での住宅取得を支援することで、子育て世帯の定住を促進し、地域の活力を維持することを目的としています。</p><p>補助額は<strong>基本額30万円</strong>で加算を含め<strong>最大50万円</strong>です。<span class="marker-green">京町家の取得にも対応</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯であること</p><p>京都市内に住宅を新たに取得すること</p><p>5年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>京都市都市計画局住宅室住宅政策課に申請書と必要書類を提出します。売買契約書、住民票、登記事項証明書等が必要です。</p><p><span class="marker">住宅引渡し後6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額<strong>30万円</strong>に、市外からの転入で10万円加算、京町家の取得で10万円加算、<strong>最大50万円</strong>です。</p><p><span class="marker">年間予算に限りがあり、先着順で受付終了</span>となります。</p><div class="note-box">京都市では京町家（伝統的な木造住宅）の保全・活用に力を入れており、京町家を取得する場合は本補助金に加えて京町家まちづくりファンドからの助成を受けられる場合もあります。投資目的の物件は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-infertility',
    title: '京都市 不妊治療費助成事業',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '京都府',
    tags: ['京都市', '不妊治療', '助成金'],
    eligibility: '京都市に住所を有する不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後3か月以内）',
    description: '京都市が実施する不妊治療費助成事業です。特定不妊治療に係る費用を1回あたり最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 不妊治療費助成事業は、<span class="marker">特定不妊治療（体外受精・顕微授精）を受ける夫婦</span>に対し、治療費の自己負担分を助成する制度です。</p><p>京都市は京都大学医学部附属病院をはじめ、高度な生殖医療に対応できる医療機関が充実しています。保険適用後の自己負担分や先進医療に係る費用を市独自に助成し、不妊治療に取り組む夫婦を支援しています。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">京都府の助成に市独自の上乗せを加えた支援体制</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>京都市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚の関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の原本</p><p>夫婦の住民票</p><p>戸籍謄本（事実婚の場合は追加書類）</p></div><p>京都市各区保健福祉センターに申請書類を提出します。<strong>治療終了日から3か月以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>1回の治療につき最大30万円</strong>です。男性不妊治療を併せて行った場合は最大15万円の加算があります。</p><p><span class="marker">通算助成回数は妻の年齢が40歳未満で6回、40歳以上43歳未満で3回が上限</span>です。</p><div class="highlight-box">京都市では不妊・不育症に関する相談窓口を各保健福祉センターに設置しています。治療の不安や費用の悩みについて、保健師に無料で相談できます。パートナーとの相談も受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-school-lunch',
    title: '京都市 学校給食費支援事業',
    organization: '京都市',
    type: 'local',
    maxAmount: '給食費の全額または一部免除',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '京都府',
    tags: ['京都市', '学校給食', '教育支援'],
    eligibility: '京都市立小中学校に在籍する児童生徒の保護者で経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '京都市が実施する学校給食費支援事業です。経済的に困難な世帯の学校給食費を全額または一部免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 学校給食費支援事業は、<span class="marker">経済的に困難な世帯の児童生徒の学校給食費を全額または一部免除</span>する制度です。</p><p>京都市では「食育」を教育の重要な柱と位置づけ、地産地消や伝統的な京料理の要素を取り入れた給食を提供しています。経済的な理由で給食費の支払いが困難な世帯に対し、就学援助制度の一環として給食費を支援しています。</p><p><span class="marker-green">生活保護世帯は全額免除、準要保護世帯も全額支給の対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>生活保護受給世帯：給食費全額免除</p><p>準要保護世帯（生活保護に準ずる所得の世帯）：給食費全額支給</p><p>その他特別な事情のある世帯：個別相談</p></div><p>毎年4月に学校を通じて案内・申請書が配布されます。必要事項を記入し、学校または京都市教育委員会に提出します。</p><p><span class="marker">年度途中の転入や家計急変の場合も随時申請を受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は<strong>月額約4,500円程度、中学校は月額約5,000円程度</strong>が免除・支給されます。</p><p><span class="marker">認定の可否は世帯の所得によって判定</span>されます。結果は通常6月頃に通知されます。</p><div class="note-box">給食費の支援は就学援助制度の一部です。就学援助では給食費のほかにも、学用品費、修学旅行費、通学費、医療費（学校保健安全法に定める疾病）なども支給されます。家計にお悩みの方はまず学校の事務室にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-study-abroad',
    title: '京都市 海外留学支援奨学金',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'education',
    prefecture: '京都府',
    tags: ['京都市', '留学支援', '奨学金'],
    eligibility: '京都市に住所を有し、海外留学を予定している学生',
    applicationPeriod: '毎年6月〜8月（年1回公募）',
    description: '京都市が実施する海外留学支援奨学金です。国際的視野を持つ人材育成のため、海外留学する学生に最大50万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 海外留学支援奨学金は、<span class="marker">海外の大学や研究機関に留学する学生</span>に対し、渡航費や生活費の一部を支給する制度です。</p><p>京都市は世界的な学術都市として、京都大学、同志社大学、立命館大学など多数の高等教育機関を擁しています。国際的な視野を持ち、京都と世界をつなぐグローバル人材の育成を目指し、海外留学への経済的支援を行っています。</p><p>支給額は<strong>最大50万円</strong>の一括支給です。<span class="marker-green">返還不要の給付型で、留学先の国・地域を問わず申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>京都市に住民登録があること</p><p>大学、大学院、短大、専門学校に在学していること</p><p>海外の教育機関に3か月以上留学する予定があること</p><p>留学先で学業に専念できること</p><p>帰国後に京都での活動に貢献する意思があること</p></div><p>京都市総合企画局国際交流課に申請書、留学計画書、在学証明書、成績証明書等を提出します。</p><p><span class="marker">書類審査と面接審査により選考</span>されます。応募倍率が高いため、留学計画の具体性が重要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>1人あたり最大50万円</strong>が一括で支給されます。渡航費、授業料、生活費など使途は自由です。</p><p><span class="marker">留学を中止した場合は奨学金の全額返還が求められます</span>。</p><div class="highlight-box">京都市では帰国後の留学報告会への参加が義務づけられています。後輩の留学希望者に経験を共有することで、国際交流の好循環を生み出しています。語学留学のみの場合は対象外となることがありますので、募集要項をよく確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-sme-support',
    title: '京都市 伝統産業後継者育成支援補助金',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '京都府',
    tags: ['京都市', '伝統産業', '後継者育成'],
    eligibility: '京都市内の伝統産業事業者で後継者を育成する方、または伝統産業に新たに従事する方',
    applicationPeriod: '毎年4月〜10月（公募制）',
    description: '京都市が実施する伝統産業後継者育成支援補助金です。京都の伝統産業の後継者育成に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 伝統産業後継者育成支援補助金は、<span class="marker">京都の伝統産業の後継者育成や新規参入</span>を支援するため、研修費や設備費の一部を補助する制度です。</p><p>京都市は西陣織、京友禅、清水焼、京漆器など74品目の伝統工芸品を有する日本最大の伝統産業都市です。しかし職人の高齢化と後継者不足が深刻な課題となっており、次世代への技術継承を支援するこの制度の重要性が高まっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">新たに伝統産業に参入する若手人材も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる経費"><p>技術研修・師匠のもとでの修業にかかる費用</p><p>道具・設備の購入費</p><p>展示会・見本市への出展費</p><p>販路開拓のための広報宣伝費</p><p>後継者の住居費補助（市外からの移住者の場合）</p></div><p>京都市産業観光局伝統産業課に事業計画書と申請書を提出します。公募制で、審査により採択されます。</p><p><span class="marker">京都市の「伝統産業後継者育成支援ネットワーク」に登録することが推奨</span>されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。新規参入者と既存事業者の後継者育成の両方が対象です。</p><p><span class="marker">交付決定前の経費は対象外</span>です。必ず交付決定後に経費を支出してください。</p><div class="note-box">京都市では伝統産業技術者研修制度や京都市伝統産業ふれあい館での体験プログラムなども運営しています。伝統産業への参入に興味がある方は、まず体験プログラムに参加して業界の雰囲気を知ることから始めるのがおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-nursing-equipment',
    title: '京都市 介護用品支給事業',
    organization: '京都市',
    type: 'local',
    maxAmount: '月額最大6,000円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '京都府',
    tags: ['京都市', '介護用品', '在宅介護'],
    eligibility: '京都市に住所を有する要介護認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '京都市が実施する介護用品支給事業です。在宅で要介護者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>京都市は高齢化率が全国平均を上回り、伝統的な町家が多い地域では在宅介護が中心となるケースが少なくありません。介護用品の現物支給により、日々の介護にかかる経済的負担を軽減し、在宅介護の継続を支えています。</p><p>月額<strong>最大6,000円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯は自己負担なし</span>で受け取れます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>京都市に住民登録があること</p><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方が施設入所・入院中でないこと</p><p>介護を受ける方が市民税非課税であること（課税の場合は一部自己負担）</p></div><p>京都市各区役所・支所の介護保険課または地域包括支援センター（高齢サポート）で申請します。<strong>介護保険被保険者証</strong>を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,000円相当</strong>の紙おむつ・尿取りパッド・使い捨て手袋等が支給されます。カタログから商品を選択できます。</p><p><span class="marker">入院中・施設入所中は支給停止</span>です。退院後に再度手続きが必要です。</p><div class="highlight-box">京都市では「介護者のつどい」や「家族介護教室」なども各地域で開催されています。介護の悩みを共有したり、介護技術を学んだりできる場として活用されていますので、地域包括支援センターにお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kyoto-city-energy-support',
    title: '京都市 省エネ・再エネ設備導入補助金',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '京都府',
    tags: ['京都市', '省エネ', '再エネ'],
    eligibility: '京都市に住所を有し、住宅に省エネ・再エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '京都市が実施する省エネ・再エネ設備導入補助金です。太陽光発電や蓄電池などの設置に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 省エネ・再エネ設備導入補助金は、<span class="marker">住宅に太陽光発電システムや蓄電池などの省エネ・再エネ設備を導入する方</span>に対して費用の一部を補助する制度です。</p><p>京都市は2050年までのCO2排出実質ゼロ（カーボンニュートラル）を目指す「京都市地球温暖化対策条例」を制定しています。家庭部門のエネルギー消費を削減するため、再生可能エネルギーの導入や省エネ設備の普及を積極的に推進しています。</p><p>補助額は設備の種類に応じて<strong>最大20万円</strong>です。<span class="marker-green">複数の設備を組み合わせて設置する場合は上限が引き上げ</span>られます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額の目安"><p>太陽光発電システム：最大10万円</p><p>家庭用蓄電池：最大10万円</p><p>エネファーム（家庭用燃料電池）：最大5万円</p><p>太陽熱利用システム：最大5万円</p><p>V2H充放電設備：最大5万円</p></div><p>京都市環境政策局地球温暖化対策室に申請書と見積書等を提出します。設備設置前の申請が原則ですが、一部事後申請も認められています。</p><p><span class="marker">設置工事完了後に実績報告書の提出も必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備の種類に応じて補助額が異なります。<strong>太陽光発電＋蓄電池の組み合わせで最大20万円</strong>が目安です。</p><p><span class="marker">先着順で予算に達し次第終了</span>します。年度初めの申請がおすすめです。</p><div class="note-box">京都市は景観条例により太陽光パネルの設置に関して地域によって制約がある場合があります。特に歴史的風致地区や景観地区では事前に景観審査が必要になることがありますので、設置前に京都市都市計画局に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
