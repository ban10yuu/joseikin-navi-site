import { Grant } from '@/lib/types';

export const cityGrantsBatch38: Grant[] = [
  // ────────────────────────────────────────────────
  // 大阪市（大阪府）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'osaka-city-childcare-subsidy',
    title: '大阪市 保育料軽減助成制度',
    organization: '大阪市',
    type: 'local',
    maxAmount: '第2子以降無償化',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['大阪市', '保育料軽減', '助成金'],
    eligibility: '大阪市に住所を有し、認可保育施設等に子どもを通わせている保護者',
    applicationPeriod: '通年',
    description: '大阪市が実施する保育料軽減助成制度です。第2子以降の保育料が無償化されるほか、第1子についても所得に応じた軽減措置があります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・小規模保育施設等に通う子どもの保育料</span>を軽減する制度です。</p><p>人口約275万人を擁する西日本最大の都市・大阪市は、共働き世帯の増加に伴い待機児童解消と保育料負担の軽減を重点施策に掲げています。国の幼児教育・保育無償化（3〜5歳児）に加え、市独自の上乗せ支援を実施しています。</p><p><span class="marker-green">第2子以降は年齢や所得に関係なく保育料が無償</span>です。第1子についても市民税所得割額に応じて段階的に軽減されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大阪市内に住民登録があり、認可保育施設等を利用している世帯が対象です。</p><div class="summary-box" data-title="軽減の内容"><p>0〜2歳児クラスの第1子：所得に応じた軽減</p><p>0〜2歳児クラスの第2子以降：保育料無償</p><p>3〜5歳児クラス：国の無償化制度により無償</p></div><p>保育料の軽減は、入所申請時の世帯情報に基づいて<strong>自動的に適用</strong>されます。特別な申請は原則不要ですが、年度途中の世帯構成変更や収入変動がある場合は各区役所へ届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子以降の保育料は<strong>完全無償</strong>です。第1子については世帯の市民税所得割額に基づく階層区分により保育料が決定されます。</p><p><span class="marker">認可外保育施設を利用している場合は別途「認可外保育施設利用料補助」の申請が必要</span>です。補助上限額は認可保育所の保育料相当額となります。</p><div class="note-box">保育料以外の費用（給食費の副食費、延長保育料、教材費等）は軽減の対象外です。副食費については別途免除制度がありますので、各区役所の保健福祉課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-birth-bonus',
    title: '大阪市 出産祝い金・こども誕生祝い事業',
    organization: '大阪市',
    type: 'local',
    maxAmount: '子ども1人あたり10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['大阪市', '出産祝い金', '給付金'],
    eligibility: '大阪市に住所を有し、新生児を出産した保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '大阪市が実施する出産祝い金事業です。新生児1人につき10万円のギフトカード等が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 こども誕生祝い事業は、<span class="marker">大阪市内で新生児が誕生した世帯に対し、子ども1人あたり10万円相当の支援</span>を行う制度です。</p><p>大阪市は2025年の大阪・関西万博の開催を契機に、子育て支援策を大幅に拡充しました。出産に伴う経済的負担を軽減し、安心して子どもを産み育てられる環境づくりを推進しています。</p><p><span class="marker-green">国の出産・子育て応援交付金（計10万円）とは別の、大阪市独自の上乗せ支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大阪市に住民登録があり、新生児が出生した世帯の保護者が対象です。出生届と同時に案内が配布されます。</p><div class="summary-box" data-title="申請の流れ"><p>出生届提出時に案内書類を受け取る</p><p>各区役所の窓口またはオンラインで申請</p><p>面談（乳児家庭全戸訪問等）を受ける</p><p>ギフトカード等が交付される</p></div><p><strong>生後6か月以内</strong>に申請を行う必要があります。申請には保護者の本人確認書類と振込先口座情報が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>子ども1人あたり<strong>10万円相当</strong>がギフトカードまたは電子マネー等で支給されます。双子の場合は20万円相当となります。</p><p><span class="marker">国の出産・子育て応援交付金（妊娠届出時5万円＋出生届出時5万円）と併せて受け取ることが可能</span>です。</p><div class="highlight-box">大阪市では本制度のほか、妊婦健診の公費負担や産後ケア事業、新生児聴覚検査の助成なども実施しています。出産前から産後まで切れ目のない支援が受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-housing-purchase',
    title: '大阪市 新婚・子育て世帯向け住宅購入支援',
    organization: '大阪市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['大阪市', '住宅購入', '補助金'],
    eligibility: '大阪市内で住宅を購入する新婚世帯または子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '大阪市が実施する住宅購入支援制度です。新婚世帯・子育て世帯が市内で住宅を取得する際に最大50万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 新婚・子育て世帯向け住宅購入支援は、<span class="marker">市内で初めて住宅を購入する新婚世帯または子育て世帯</span>に対し、取得費用の一部を補助する制度です。</p><p>大阪市は都心回帰の流れの中で若年世帯の定住促進を重要施策としています。特に子育て世帯については、市内の教育・福祉インフラを活用しながら住み続けてもらうことで、持続的なまちづくりにつなげることを目指しています。</p><p>補助額は<strong>最大50万円</strong>で、<span class="marker-green">市内の特定エリア（市営住宅建替に伴う創出用地周辺等）での購入には加算あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大阪市内で初めて住宅を取得すること</p><p>新婚世帯（婚姻届出から5年以内）または18歳未満の子どもがいる世帯</p><p>世帯所得が一定基準以下であること</p><p>5年以上継続して居住する意思があること</p></div><p>大阪市都市整備局住宅政策課に申請書と必要書類を提出します。売買契約書、住民票、婚姻届受理証明書または戸籍謄本が必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請してください</span>。申請前に購入予定の住宅が対象となるか事前確認を行うことをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、市内の重点エリアでの購入には<strong>20万円が加算</strong>され最大50万円となります。</p><p><span class="marker">中古住宅の購入も対象ですが、親族間売買や競売物件は対象外</span>です。</p><div class="note-box">住宅ローン減税や すまい給付金など国の制度との併用は可能です。ただし、5年以内に転出した場合は補助金の返還が求められることがありますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-newlywed-rent',
    title: '大阪市 新婚世帯向け家賃補助制度',
    organization: '大阪市',
    type: 'local',
    maxAmount: '月額最大3万円（最長3年間）',
    maxAmountNum: 108,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['大阪市', '新婚家賃補助', '補助金'],
    eligibility: '大阪市内に居住する婚姻届出から2年以内の新婚世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大阪市が実施する新婚世帯向け家賃補助制度です。婚姻届出から2年以内の世帯に月額最大3万円の家賃補助を最長3年間支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 新婚世帯向け家賃補助制度は、<span class="marker">婚姻届出から2年以内の新婚世帯が市内の民間賃貸住宅に居住する場合</span>に家賃の一部を補助する制度です。</p><p>大阪市は若年層の市外流出を抑制するため、結婚を機に新生活を始める世帯への経済的支援を充実させています。家賃負担は新婚世帯にとって大きな支出項目であり、その軽減を通じて市内での定住を促進しています。</p><p>補助額は<strong>月額最大3万円で、最長3年間</strong>の支給です。<span class="marker-green">合計で最大108万円の家賃支援を受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出から2年以内であること</p><p>夫婦の合計年齢が80歳未満であること</p><p>世帯年収が一定基準以下であること</p><p>大阪市内の民間賃貸住宅に居住していること</p></div><p>大阪市都市整備局住宅政策課または各区役所窓口で申請できます。婚姻届受理証明書、賃貸借契約書、所得証明書などが必要です。</p><p><span class="marker">申請月の翌月分から補助が開始</span>されますので、入居後早めに申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から共益費等を除いた額のうち、<strong>月額3万円を上限として補助</strong>されます。年度ごとに継続申請が必要です。</p><p><span class="marker">市営住宅・UR賃貸住宅・社宅・親族所有物件への入居は対象外</span>です。</p><div class="highlight-box">出産や子どもの成長に合わせて住み替えを検討する場合でも、市内の別の賃貸住宅への転居であれば引き続き補助を受けられます。住み替え後は変更届の提出を忘れないようにしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-infertility',
    title: '大阪市 不妊治療費助成制度',
    organization: '大阪市',
    type: 'local',
    maxAmount: '1回あたり最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['大阪市', '不妊治療', '助成金'],
    eligibility: '大阪市に住所を有し、保険適用の不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後3か月以内）',
    description: '大阪市が実施する不妊治療費助成制度です。保険適用後の自己負担分について1回あたり最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 不妊治療費助成制度は、<span class="marker">体外受精・顕微授精等の特定不妊治療にかかる自己負担費用</span>を助成する制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、保険適用後も3割の自己負担が発生し、高額な治療費の負担は依然として大きい状況です。大阪市では保険適用後の自己負担分をさらに軽減することで、不妊に悩む夫婦を経済的に支援しています。</p><p><span class="marker-green">保険診療と併せて実施する先進医療の費用も助成対象</span>となる場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大阪市に住民登録がある法律上の婚姻関係にある夫婦または事実婚のカップルが対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の受診等証明書</p><p>領収書（原本）</p><p>住民票（夫婦連名）</p><p>健康保険証の写し</p></div><p>大阪市保健所または各区保健福祉センターの窓口で申請します。<strong>治療が終了した日から3か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>特定不妊治療1回あたりの自己負担額のうち、<strong>最大30万円</strong>が助成されます。男性不妊治療を併せて実施した場合は別途加算があります。</p><p><span class="marker">助成回数は治療開始時の妻の年齢が40歳未満の場合は通算6回まで、40歳以上43歳未満の場合は通算3回まで</span>です。</p><div class="note-box">大阪市では不妊・不育専門相談センターを設置しており、治療に関する悩みや不安について無料で相談できます。助成制度の詳細についてもセンターで案内を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-scholarship',
    title: '大阪市 奨学金制度（大阪市奨学費）',
    organization: '大阪市',
    type: 'local',
    maxAmount: '月額最大5万円',
    maxAmountNum: 60,
    category: 'education',
    prefecture: '大阪府',
    tags: ['大阪市', '奨学金', '教育支援'],
    eligibility: '大阪市内に住所を有する高校生・大学生等の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜5月',
    description: '大阪市が実施する奨学金制度です。経済的な理由で修学が困難な高校生・大学生に月額最大5万円の奨学費を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 奨学金制度（大阪市奨学費）は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、奨学費を支給する制度です。</p><p>大阪市は政令指定都市の中でも教育支援に力を入れており、学校教育の充実だけでなく経済的支援にも積極的に取り組んでいます。本制度は返還不要の給付型奨学金であり、意欲ある学生の進学・修学を後押ししています。</p><p><span class="marker-green">返還不要の給付型で、日本学生支援機構の奨学金との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大阪市内に住所を有すること</p><p>高等学校・大学等に在学していること</p><p>世帯の所得が一定基準以下であること</p><p>学業成績が一定の基準を満たすこと</p></div><p>毎年4月から5月にかけて申請を受け付けています。在学する学校を通じて申請書を提出する場合と、大阪市教育委員会に直接申請する場合があります。</p><p><span class="marker">申請書のほか、所得証明書・在学証明書・成績証明書の提出が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は課程ごとに異なり、<strong>高校生で月額約1万円、大学生で月額最大5万円</strong>です。私立学校への進学者には増額される場合があります。</p><p><span class="marker">毎年度の継続申請が必要で、成績や出席状況によっては支給が停止される</span>ことがあります。</p><div class="highlight-box">大阪市ではこの奨学費のほか、高校授業料無償化制度（大阪府の制度）や就学援助制度も活用できます。複数の制度を組み合わせることで教育費の負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-sme-support',
    title: '大阪市 中小企業チャレンジ補助金',
    organization: '大阪市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['大阪市', '中小企業支援', '補助金'],
    eligibility: '大阪市内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年4月〜6月（公募期間）',
    description: '大阪市が実施する中小企業チャレンジ補助金です。新事業展開やDX推進に取り組む市内中小企業に最大200万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 中小企業チャレンジ補助金は、<span class="marker">新製品開発・新サービス展開・DX推進など新たな挑戦に取り組む市内中小企業</span>を支援する制度です。</p><p>大阪市は日本屈指の商業都市であり、約20万の事業所が集積する経済の中心地です。大企業のお膝元でもありつつ、独自の技術やサービスで勝負する中小企業が多数存在します。本補助金は、これらの企業の新たなチャレンジを後押しし、大阪経済の活性化につなげることを目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限200万円</strong>です。<span class="marker-green">DX関連事業については補助率が3分の2に引き上げられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大阪市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p></div><p>大阪市経済戦略局産業振興課に事業計画書・申請書を提出します。書類審査およびプレゼンテーション審査により採択が決定します。</p><p><span class="marker">大阪産業創造館の経営相談を活用して事業計画を練ることをおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限200万円</strong>です。DX推進事業は補助率3分の2（上限200万円）となります。</p><p><span class="marker">設備費・外注費・広告宣伝費・展示会出展費等が対象で、人件費や土地取得費は対象外</span>です。</p><div class="note-box">採択後は定期的な進捗報告と事業完了報告が必要です。交付決定前に着手した経費は補助対象外となります。大阪市の産業振興アドバイザーによる伴走支援も受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-nursing-equipment',
    title: '大阪市 介護用品支給事業',
    organization: '大阪市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['大阪市', '介護用品', '助成金'],
    eligibility: '大阪市に住所を有する要介護認定を受けた在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '大阪市が実施する介護用品支給事業です。在宅で介護を行う家族に対し、紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた在宅高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>大阪市では高齢化の進展に伴い、在宅介護を行う家族の経済的・身体的負担の軽減を図っています。介護用品の購入費は毎月の出費として家計を圧迫するため、現物支給により負担を和らげることを目的としています。</p><p><span class="marker-green">市民税非課税世帯が優先対象ですが、課税世帯でも利用可能な場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大阪市に住民登録がある要介護4または5の在宅高齢者を常時介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>介護保険被保険者証の写し</p><p>介護者の本人確認書類</p></div><p>各区役所の保健福祉課窓口で申請できます。申請後、<strong>カタログから必要な介護用品を選択</strong>して自宅に配送されます。定期的な配送サービスも利用可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大10万円相当</strong>の介護用品が支給されます。紙おむつ、尿取りパッド、清拭剤、使い捨て手袋などが対象です。</p><p><span class="marker">入院中や施設入所中の方は支給対象外</span>です。在宅介護に限定された制度である点にご注意ください。</p><div class="highlight-box">大阪市では本制度のほか、介護保険サービスの福祉用具貸与・購入費の支給、住宅改修費の助成なども利用できます。ケアマネジャーに相談して最適な支援の組み合わせを検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'osaka-city-elderly-support',
    title: '大阪市 高齢者見守り・生活支援事業',
    organization: '大阪市',
    type: 'local',
    maxAmount: '月額最大5,000円相当のサービス',
    maxAmountNum: 6,
    category: 'living',
    prefecture: '大阪府',
    tags: ['大阪市', '高齢者見守り', '生活支援'],
    eligibility: '大阪市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '大阪市が実施する高齢者見守り・生活支援事業です。ひとり暮らし高齢者等に緊急通報装置の貸与や配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 高齢者見守り・生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、安否確認や生活支援サービスを提供する制度です。</p><p>大阪市は政令指定都市の中でもひとり暮らし高齢者の割合が高く、社会的孤立の防止と安心・安全な生活の確保が喫緊の課題です。緊急通報装置の貸与、見守り訪問、配食サービスなど複数のメニューを組み合わせた包括的な支援を行っています。</p><p><span class="marker-green">多くのサービスが無料または低額で利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>緊急通報装置の貸与（急病時にボタンひとつで通報）</p><p>見守り訪問活動（地域ボランティアによる定期訪問）</p><p>配食サービス（栄養バランスの取れた食事の配達と安否確認）</p><p>ふれあい収集（ごみ出し困難な高齢者宅への訪問収集）</p></div><p>各区役所の高齢者支援担当窓口で申請・相談できます。地域包括支援センターでも相談を受け付けています。</p><p><span class="marker">まずは最寄りの地域包括支援センターに相談し、必要なサービスを一緒に検討するのがおすすめ</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置の貸与は<strong>月額0〜500円程度</strong>の自己負担で利用できます。配食サービスは1食あたり数百円の自己負担です。</p><p><span class="marker">介護保険サービスとの併用が可能で、要介護認定を受けていなくても利用できるサービスが多い</span>のが特長です。</p><div class="note-box">緊急通報装置には固定電話回線が不要なタイプも用意されています。携帯電話のみの世帯でも利用可能ですので、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 堺市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'sakai-childcare-subsidy',
    title: '堺市 保育料軽減制度',
    organization: '堺市',
    type: 'local',
    maxAmount: '第2子以降無償化',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['堺市', '保育料軽減', '助成金'],
    eligibility: '堺市に住所を有し、認可保育施設等に子どもを通わせている保護者',
    applicationPeriod: '通年',
    description: '堺市が実施する保育料軽減制度です。第2子以降の保育料が無償化されるほか、所得に応じた軽減措置があります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園等に通う0〜2歳児クラスの子どもの保育料</span>を軽減する制度です。</p><p>堺市は大阪府第2の都市として約82万人の人口を有し、世界遺産・百舌鳥古墳群を擁する歴史と文化の街です。子育て世帯の経済的負担を軽減し、安心して子育てできる環境づくりに力を入れています。</p><p><span class="marker-green">第2子以降は所得に関わらず保育料が無償</span>で、第1子についても国基準よりも大幅に軽減された独自の保育料体系を採用しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>堺市に住民登録があり、認可保育施設等を利用している世帯が対象です。3〜5歳児は国の制度により無償化されています。</p><div class="summary-box" data-title="堺市独自の軽減ポイント"><p>第2子以降：年齢・所得制限なしで保育料無償</p><p>第1子：国基準の約7割程度に軽減</p><p>ひとり親世帯：さらに優遇される階層区分を適用</p></div><p>保育料の軽減は入所申請時の世帯情報に基づき<strong>自動適用</strong>されます。特別な申請は原則不要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子以降は<strong>保育料が完全に無償</strong>となります。第1子は世帯の市民税所得割額に応じて保育料が段階的に設定されています。</p><p><span class="marker">認可外保育施設の利用者は別途「認可外保育施設利用者補助金」を申請する必要があります</span>。</p><div class="note-box">副食費（おかず代）は保育料とは別に実費負担となりますが、年収360万円未満相当の世帯や第3子以降は免除されます。延長保育料も軽減の対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-birth-bonus',
    title: '堺市 出産祝い金支給事業',
    organization: '堺市',
    type: 'local',
    maxAmount: '子ども1人あたり10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['堺市', '出産祝い金', '給付金'],
    eligibility: '堺市に住所を有し、新生児を出産した保護者',
    applicationPeriod: '出生届提出後〜生後4か月以内',
    description: '堺市が実施する出産祝い金支給事業です。新生児1人あたり10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 出産祝い金支給事業は、<span class="marker">堺市で新生児が誕生した世帯に子ども1人あたり10万円</span>を支給する制度です。</p><p>世界遺産の百舌鳥古墳群を有する堺市は、歴史と文化に彩られたものづくりの街でありながら、子育て支援策の充実にも積極的です。出産に伴う経済的負担を軽減し、次世代を担う子どもたちの健やかな成長を応援しています。</p><p><span class="marker-green">国の出産・子育て応援交付金とは別の堺市独自の上乗せ支援</span>です。多胎児の場合は人数分が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>堺市に住民登録があり、新生児を出産した保護者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>出生届提出時に案内を受け取る</p><p>各区役所子育て支援課の窓口で申請</p><p>新生児訪問等の面談を受ける</p><p>指定口座に祝い金が振り込まれる</p></div><p><strong>出生日から4か月以内</strong>に申請してください。申請には保護者の本人確認書類、振込先口座情報が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>子ども1人あたり<strong>10万円</strong>が支給されます。双子の場合は20万円、三つ子の場合は30万円となります。</p><p><span class="marker">堺市に出生届を提出し、支給決定時点で堺市に住民登録があることが条件</span>です。申請後に市外へ転出した場合は支給されない場合があります。</p><div class="highlight-box">堺市では出産祝い金のほか、妊婦健診の公費負担（14回分）、産後ケア事業（宿泊型・デイサービス型・訪問型）なども充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-housing-purchase',
    title: '堺市 子育て世帯住宅取得支援補助金',
    organization: '堺市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['堺市', '住宅購入', '補助金'],
    eligibility: '堺市内で住宅を取得する子育て世帯',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '堺市が実施する子育て世帯向け住宅取得支援補助金です。市内で住宅を購入する子育て世帯に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 子育て世帯住宅取得支援補助金は、<span class="marker">18歳未満の子どもがいる世帯が堺市内で住宅を取得する場合</span>に費用の一部を補助する制度です。</p><p>堺市は大阪都心へのアクセスが良好でありながら、ゆとりある住環境を実現できるエリアとして人気があります。子育て世帯の定住を促進し、地域コミュニティの活性化を図ることを目的としています。</p><p>基本補助額は<strong>最大30万円</strong>で、<span class="marker-green">市外からの転入世帯には10万円が加算</span>され最大40万円となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯（妊娠中を含む）</p><p>堺市内で新たに住宅を取得すること</p><p>取得する住宅に5年以上居住する意思があること</p><p>世帯の年間所得が一定基準以下であること</p></div><p>堺市建築都市局住宅政策課に申請書と必要書類を提出します。売買契約書の写し、住民票、所得証明書などが必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請してください</span>。事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、市外からの転入の場合は<strong>10万円が加算</strong>されます。新築・中古とも対象です。</p><p><span class="marker">親族間売買や相続による取得は対象外</span>です。また、5年以内に転出した場合は補助金の返還を求められることがあります。</p><div class="note-box">堺市は南海電鉄・JR阪和線など複数の鉄道路線が通る交通利便性の高い街です。住宅購入の際は、国の住宅ローン減税制度や大阪府の制度との併用についても不動産業者や税理士にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-disability-medical',
    title: '堺市 重度障害者医療費助成制度',
    organization: '堺市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['堺市', '障害者医療', '助成金'],
    eligibility: '堺市に住所を有する重度の身体・知的・精神障害のある方',
    applicationPeriod: '通年',
    description: '堺市が実施する重度障害者医療費助成制度です。重度障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 重度障害者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級</span>等の重度障害のある方の医療費自己負担分を助成する制度です。</p><p>堺市は「障害のある人もない人も共に暮らしやすい堺のまちづくり」を理念に掲げ、障害者支援策を総合的に推進しています。本制度により医療費の心配を軽減し、必要な治療を安心して受けられる環境を整えています。</p><p><span class="marker-green">一定の所得以下の方は、医療機関窓口での自己負担がゼロ</span>になります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>堺市に住民登録があり、重度の障害認定を受けている方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A（重度）</p><p>精神障害者保健福祉手帳1級</p><p>特定疾患医療受給者証をお持ちの方（一部）</p></div><p>各区役所の障害福祉課窓口で申請します。障害者手帳、健康保険証、所得証明書が必要です。申請後、<strong>「重度障害者医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>原則全額助成</strong>されます。一部所得制限により一定の自己負担が発生する場合があります。</p><p><span class="marker">大阪府内の医療機関であれば医療証を提示するだけで窓口負担が軽減</span>されます。府外受診の場合は後日償還払いとなります。</p><div class="note-box">入院時の食事療養費や差額ベッド代等は助成対象外です。65歳以上の方で後期高齢者医療制度に加入している場合は、そちらの制度が優先される場合がありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-scholarship',
    title: '堺市 奨学金制度',
    organization: '堺市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '大阪府',
    tags: ['堺市', '奨学金', '教育支援'],
    eligibility: '堺市内に住所を有する高校生・大学生の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜5月',
    description: '堺市が実施する奨学金制度です。経済的理由で修学困難な高校生・大学生に月額最大3万円の奨学金を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対し、返還不要の給付型奨学金を支給する制度です。</p><p>堺市は千利休ゆかりの茶の湯文化や世界遺産・百舌鳥古墳群を有する歴史文化都市であり、教育の充実にも力を入れています。意欲ある若者が経済的な理由で進学を断念することのないよう、奨学金制度を運営しています。</p><p><span class="marker-green">返還不要の給付型で、他の奨学金との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>堺市内に住所を有すること</p><p>高等学校・大学等に在学または入学予定であること</p><p>世帯の所得が一定基準以下であること</p><p>学業・人物ともに優れていること</p></div><p>毎年4月から5月にかけて募集が行われます。堺市教育委員会学校教育課に申請書と必要書類を提出してください。</p><p><span class="marker">成績証明書・所得証明書・在学証明書のほか、推薦書が必要な場合があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は、<strong>高校生で月額約1万円、大学生で月額最大3万円</strong>です。私立学校への在学者には増額される場合があります。</p><p><span class="marker">毎年度の更新手続きが必要で、学業成績や出席状況が基準を下回ると支給停止</span>となることがあります。</p><div class="highlight-box">堺市の奨学金に加えて、大阪府の授業料無償化制度や日本学生支援機構の奨学金を組み合わせることで、教育費の大幅な負担軽減が可能です。進学前に複数の制度を比較検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-sme-support',
    title: '堺市 ものづくり中小企業成長支援補助金',
    organization: '堺市',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['堺市', '中小企業支援', '補助金'],
    eligibility: '堺市内に事業所を有する中小製造業者',
    applicationPeriod: '毎年5月〜7月（公募期間）',
    description: '堺市が実施するものづくり中小企業成長支援補助金です。市内製造業の新技術開発や販路開拓に最大150万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 ものづくり中小企業成長支援補助金は、<span class="marker">市内のものづくり中小企業が行う新技術開発・新製品開発・販路開拓</span>の取り組みを支援する制度です。</p><p>堺市は刃物・自転車・線香など伝統産業から最先端のシャープ液晶工場まで、多様なものづくり産業が集積する都市です。この補助金は中小製造業の技術革新と事業成長を後押しし、堺のものづくりの強みをさらに発展させることを目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限150万円</strong>です。<span class="marker-green">脱炭素・GX関連の取り組みには補助率が3分の2に優遇</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>堺市内に本店または主たる事業所があること</p><p>製造業を営む中小企業者であること</p><p>新技術・新製品の開発または新市場への販路開拓に取り組むこと</p><p>市税の滞納がないこと</p></div><p>堺市産業振興局産業政策課に事業計画書・申請書を提出します。外部有識者による審査会で採択が決定されます。</p><p><span class="marker">堺市産業振興センターの技術相談や経営相談を活用して計画を練ることをおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限150万円</strong>です。設備費・材料費・外注費・展示会出展費等が対象です。</p><p><span class="marker">交付決定前に着手した経費は補助対象外</span>となります。事業完了後に実績報告書の提出が必要です。</p><div class="note-box">堺市は「堺刃物」や「堺打刃物」などの伝統産業の後継者育成にも取り組んでいます。伝統技術を活かした新製品開発は審査で高く評価される傾向があります。人件費・光熱水費は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-nursing-equipment',
    title: '堺市 介護用品給付事業',
    organization: '堺市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['堺市', '介護用品', '助成金'],
    eligibility: '堺市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '堺市が実施する介護用品給付事業です。在宅で介護を行う家族に紙おむつ等の介護用品を月額最大6,250円相当給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 介護用品給付事業は、<span class="marker">要介護4・5の認定を受けた在宅高齢者を介護する家族</span>に対し、紙おむつ等の介護用品を給付する制度です。</p><p>堺市では高齢化率の上昇に伴い、在宅介護を行う家族の負担軽減が重要な課題となっています。消耗品である介護用品の費用は毎月の家計に大きな影響を与えるため、現物給付により経済的負担を和らげています。</p><p><span class="marker-green">市民税非課税世帯を主な対象としていますが、条件により課税世帯も利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>堺市に住民登録がある要介護4または5の在宅高齢者を常時介護している同居家族等が対象です。</p><div class="summary-box" data-title="給付の対象となる介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤・ドライシャンプー</p><p>使い捨て手袋・防水シーツ</p></div><p>各区役所の高齢介護課窓口で申請します。介護保険被保険者証と介護者の本人確認書類が必要です。<strong>カタログから必要な用品を選択</strong>して毎月配送されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,250円相当</strong>の介護用品が給付されます。年間では最大75,000円相当の支援を受けられます。</p><p><span class="marker">入院中や介護施設に入所中の方は給付対象外</span>です。在宅介護に限定された制度です。</p><div class="highlight-box">堺市では本制度のほか、介護保険の福祉用具貸与・購入費支給（年間10万円上限）や住宅改修費助成（20万円上限）なども利用できます。ケアマネジャーと相談して最適なサービスを組み合わせましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-energy-support',
    title: '堺市 省エネ家電購入支援事業',
    organization: '堺市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '大阪府',
    tags: ['堺市', '省エネ家電', '補助金'],
    eligibility: '堺市に住所を有する市民',
    applicationPeriod: '毎年6月〜翌年1月（予算に達し次第終了）',
    description: '堺市が実施する省エネ家電購入支援事業です。省エネ性能の高い家電への買い替えに最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 省エネ家電購入支援事業は、<span class="marker">省エネ性能の高いエアコン・冷蔵庫・LED照明等への買い替え</span>に対して費用の一部を補助する制度です。</p><p>堺市は「堺市地球温暖化対策実行計画」のもと、2050年カーボンニュートラルの実現を目指しています。家庭部門のCO2排出削減を促進するため、省エネ家電への買い替えを経済的に支援しています。</p><p>補助額は購入費用の一部で、<strong>1世帯あたり最大5万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる家電"><p>エアコン（統一省エネラベル3つ星以上）：上限2万円</p><p>冷蔵庫（統一省エネラベル3つ星以上）：上限3万円</p><p>LED照明器具：上限1万円</p></div><p>堺市環境局環境政策課に申請書と必要書類を提出します。購入レシート・保証書のコピー、古い家電のリサイクル券の写しが必要です。</p><p><span class="marker">購入後3か月以内に申請してください</span>。オンライン申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1世帯あたり<strong>最大5万円</strong>（各製品の上限額の合計）が補助されます。複数台の買い替えも対象です。</p><p><span class="marker">市内の販売店での購入が条件で、ネット通販は対象外</span>となる場合があります。詳細は堺市の窓口にご確認ください。</p><div class="note-box">古い家電からの買い替えが条件のため、新規購入（買い替えでない場合）は対象外です。家電リサイクル法に基づく適正な処分を行ったことを証明する書類が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sakai-seismic-diagnosis',
    title: '堺市 木造住宅耐震診断補助制度',
    organization: '堺市',
    type: 'local',
    maxAmount: '診断費用の全額補助（上限5万円）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['堺市', '耐震診断', '補助金'],
    eligibility: '堺市内に旧耐震基準（1981年5月以前）で建てられた木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '堺市が実施する木造住宅耐震診断補助制度です。旧耐震基準の木造住宅の耐震診断費用が全額補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 木造住宅耐震診断補助制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造戸建住宅</span>の耐震診断費用を補助する制度です。</p><p>2018年の大阪府北部地震や南海トラフ巨大地震の発生リスクを踏まえ、堺市では旧耐震基準で建てられた住宅の耐震化を積極的に推進しています。まずは自宅の耐震性を知ることが防災の第一歩であり、その診断費用を全額補助しています。</p><p><span class="marker-green">耐震診断費用が実質無料で受けられます</span>。診断結果を踏まえた耐震改修工事への補助制度もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の要件"><p>堺市内に所在する木造戸建住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>地上2階建て以下であること</p><p>住宅の所有者または居住者が申請すること</p></div><p>堺市建築都市局建築安全課に申請書を提出します。市が登録する耐震診断員が自宅を訪問し診断を行います。</p><p><span class="marker">診断は市が手配するため、自分で診断員を探す必要はありません</span>。申請から診断実施まで1〜2か月程度かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用が<strong>全額補助（上限5万円）</strong>されます。自己負担は実質ゼロです。</p><p><span class="marker">診断の結果、耐震性が不足していると判定された場合は、耐震改修工事補助（最大100万円）も利用可能</span>です。</p><div class="note-box">耐震診断は住宅の壁や基礎の状態を確認する非破壊検査が中心で、所要時間は2〜3時間程度です。賃貸住宅や共同住宅（マンション等）は本制度の対象外ですが、別途相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 神戸市（兵庫県）9件: childcare×2, housing×2, medical, education, employment, nursing, living
  // ────────────────────────────────────────────────
  {
    slug: 'kobe-childcare-subsidy',
    title: '神戸市 保育料軽減助成制度',
    organization: '神戸市',
    type: 'local',
    maxAmount: '第2子以降無償化',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['神戸市', '保育料軽減', '助成金'],
    eligibility: '神戸市に住所を有し、認可保育施設等に子どもを通わせている保護者',
    applicationPeriod: '通年',
    description: '神戸市が実施する保育料軽減助成制度です。第2子以降の保育料を無償化し、子育て世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園等に通う子どもの保育料</span>を軽減する制度です。</p><p>人口約150万人の国際港湾都市・神戸市は、六甲山と瀬戸内海に囲まれた美しい自然環境を活かした子育て環境の充実に力を入れています。国の幼保無償化に加え、市独自の上乗せ支援を実施しています。</p><p><span class="marker-green">第2子以降は年齢や所得に関係なく保育料が無償</span>です。第1子は国基準よりも低い市独自の保育料体系を採用しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>神戸市に住民登録があり、認可保育施設等を利用している世帯が対象です。</p><div class="summary-box" data-title="神戸市独自の軽減内容"><p>0〜2歳児の第2子以降：保育料完全無償</p><p>0〜2歳児の第1子：国基準より軽減された市独自の保育料</p><p>3〜5歳児：国の無償化制度により無償</p></div><p>保育料の軽減は入所手続き時の情報に基づき<strong>自動的に適用</strong>されます。別途申請は原則不要です。世帯構成の変更時は各区役所への届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子以降の保育料は<strong>完全に無償</strong>です。第1子は世帯の課税状況に応じた階層別保育料が適用されます。</p><p><span class="marker">認可外保育施設を利用している場合は別途「認可外保育施設利用助成」の申請が必要</span>です。</p><div class="highlight-box">神戸市では副食費（おかず代等）についても年収360万円未満相当の世帯と第3子以降は免除しています。延長保育料は別途負担となりますが、ひとり親世帯への軽減措置も設けられています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-birth-bonus',
    title: '神戸市 こども誕生祝い金',
    organization: '神戸市',
    type: 'local',
    maxAmount: '子ども1人あたり10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['神戸市', '出産祝い金', '給付金'],
    eligibility: '神戸市に住所を有し、新生児を出産した保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '神戸市が実施するこども誕生祝い金です。新生児1人あたり10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 こども誕生祝い金は、<span class="marker">神戸市内で新生児が誕生した世帯に子ども1人あたり10万円</span>を支給する制度です。</p><p>港町・神戸は異国情緒漂う街並みと六甲山の自然が調和する魅力的な都市です。少子化対策として出産・子育て世帯への経済的支援を強化しており、本制度は出産時の直接的な支援として設けられました。</p><p><span class="marker-green">国の出産・子育て応援交付金（計10万円）とは別に、神戸市独自の上乗せとして支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>神戸市に住民登録があり、新生児を出産した保護者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>出生届提出時に案内を受け取る</p><p>各区役所こども家庭支援課で申請</p><p>保健師等による新生児訪問（こんにちは赤ちゃん事業）を受ける</p><p>口座振込で祝い金を受け取る</p></div><p><strong>生後6か月以内</strong>に申請が必要です。保護者の本人確認書類・振込先口座情報を持参してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>子ども1人あたり<strong>10万円</strong>が支給されます。双子の場合は20万円です。</p><p><span class="marker">支給決定時点で神戸市に住民登録があることが必要</span>です。申請後に市外へ転出した場合は支給されないことがあります。</p><div class="note-box">神戸市では出産祝い金のほか、妊婦健診（14回分の公費負担）、産後ケア事業、新生児聴覚スクリーニング検査の助成なども実施しています。「KOBEこどもプラン」に基づく包括的な子育て支援を展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-housing-purchase',
    title: '神戸市 住みかえーるローン利子補給事業',
    organization: '神戸市',
    type: 'local',
    maxAmount: '最大50万円（利子補給総額）',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['神戸市', '住宅購入', '補助金'],
    eligibility: '神戸市内の特定エリアで住宅を購入する若年・子育て世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '神戸市が実施する住宅取得支援制度です。市内特定エリアでの住宅購入に対し住宅ローンの利子補給を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 住みかえーるローン利子補給事業は、<span class="marker">市内の特定エリア（住み替え促進地区）で住宅を購入する若年・子育て世帯</span>に対し、住宅ローンの利子の一部を補助する制度です。</p><p>神戸市は2025年に市制130年を迎え、次世代の定住促進と地域活性化を重点施策に掲げています。特にニュータウン地域の高齢化対策として若い世帯の流入を促進するため、住宅取得の初期費用負担を軽減しています。</p><p>補助は<strong>最長5年間、利子補給総額最大50万円</strong>です。<span class="marker-green">子育て世帯には加算措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦のいずれかが40歳未満、または18歳未満の子がいる世帯</p><p>神戸市が指定する住み替え促進地区で住宅を取得すること</p><p>住宅ローンを利用して購入すること</p><p>5年以上継続して居住する意思があること</p></div><p>神戸市住宅都市局住宅政策課に申請書と必要書類を提出します。売買契約書、住宅ローンの契約書、住民票などが必要です。</p><p><span class="marker">住宅取得後6か月以内に申請してください</span>。対象エリアの確認は事前に市の窓口で行えます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>住宅ローンの年間支払利子額の一部が補助され、<strong>最長5年間で最大50万円</strong>が支給されます。</p><p><span class="marker">対象エリアは主にニュータウン地域（西区・北区の一部）が中心</span>です。中心市街地は対象外となる場合があります。</p><div class="note-box">神戸市ではこの利子補給のほか、空き家バンクの運営や住宅リフォーム補助など、多様な住宅支援策を展開しています。対象エリア外でも利用できる制度がありますので、住宅政策課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-newlywed-rent',
    title: '神戸市 新婚世帯家賃補助事業',
    organization: '神戸市',
    type: 'local',
    maxAmount: '月額最大3万円（最長3年間）',
    maxAmountNum: 108,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['神戸市', '新婚家賃補助', '補助金'],
    eligibility: '神戸市内に居住する婚姻届出から2年以内の新婚世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '神戸市が実施する新婚世帯向け家賃補助事業です。新婚世帯に月額最大3万円の家賃補助を最長3年間支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 新婚世帯家賃補助事業は、<span class="marker">婚姻届出から2年以内の新婚世帯が市内の民間賃貸住宅に居住する場合</span>に家賃の一部を補助する制度です。</p><p>神戸市は「若者に選ばれるまち」を目指し、結婚を機に新生活をスタートする世帯への支援を充実させています。三宮の再整備やウォーターフロントの開発が進む中、若い世代の市内定住を促進することが重要テーマとなっています。</p><p>補助額は<strong>月額最大3万円、最長3年間</strong>の支給です。<span class="marker-green">合計で最大108万円の家賃支援が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届出日から2年以内であること</p><p>夫婦の合計年齢が一定基準未満であること</p><p>世帯年収が一定基準以下であること</p><p>神戸市内の民間賃貸住宅に居住していること</p></div><p>各区役所まちづくり課または神戸市住宅都市局で申請できます。婚姻届受理証明書、賃貸借契約書の写し、所得証明書等が必要です。</p><p><span class="marker">申請月の翌月分から補助が適用</span>されるため、できるだけ早めの申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から共益費等を除いた額のうち、<strong>月額3万円を上限</strong>として補助されます。年度ごとに更新手続きが必要です。</p><p><span class="marker">市営住宅・社宅・親族所有の物件は対象外</span>です。同一市内での転居は可能ですが、変更届の提出が必要です。</p><div class="highlight-box">神戸市は「結婚新生活支援事業」（国の制度）にも参加しており、住宅取得費用や引越し費用の補助（最大60万円）も別途利用可能です。家賃補助との併用条件については窓口で確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-senior-dental',
    title: '神戸市 高齢者歯科健診助成事業',
    organization: '神戸市',
    type: 'local',
    maxAmount: '歯科健診費用の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['神戸市', '歯科健診', '高齢者医療'],
    eligibility: '神戸市に住所を有する70歳・75歳・80歳の方',
    applicationPeriod: '対象年齢の年度内',
    description: '神戸市が実施する高齢者歯科健診助成事業です。節目年齢の高齢者に無料で歯科健診を実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 高齢者歯科健診助成事業は、<span class="marker">70歳・75歳・80歳の節目年齢を迎える高齢者</span>に無料で歯科健診を実施する制度です。</p><p>神戸市は「8020運動」（80歳で20本以上の歯を保つ）を推進し、高齢者の口腔機能の維持・向上に力を入れています。歯周病や口腔機能の低下は全身の健康に大きく影響するため、定期的な歯科健診を通じた予防が重要です。</p><p><span class="marker-green">受診料は無料で、市内の協力歯科医院で受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>神戸市に住民登録がある70歳・75歳・80歳の方が対象です。対象年度の4月に受診券が郵送されます。</p><div class="summary-box" data-title="健診の内容"><p>虫歯・歯周病の有無の検査</p><p>口腔内の粘膜異常の確認</p><p>咀嚼機能・嚥下機能の評価</p><p>義歯の適合状態の確認</p><p>口腔衛生指導</p></div><p>届いた受診券を持参して、<strong>市内の協力歯科医院に直接予約</strong>して受診します。事前申請は不要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>歯科健診費用は<strong>全額公費負担で自己負担はゼロ</strong>です。治療が必要な場合は健診後に別途治療を受けてください。</p><p><span class="marker">受診券の有効期間は対象年度の末日（3月31日）まで</span>です。期限を過ぎると受診できなくなりますのでお早めに。</p><div class="note-box">健診で異常が見つかった場合の治療費は通常の保険診療となります（自己負担あり）。神戸市では歯科健診のほか、口腔機能向上プログラムや訪問歯科診療の紹介なども行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-scholarship',
    title: '神戸市 奨学金制度',
    organization: '神戸市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['神戸市', '奨学金', '教育支援'],
    eligibility: '神戸市内に住所を有する高校生・大学生等の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜5月',
    description: '神戸市が実施する奨学金制度です。経済的理由で修学困難な高校生・大学生に月額最大4万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対し、奨学金を支給する制度です。</p><p>神戸市は国際都市としての教育環境の充実を重視しており、多様な背景を持つ子どもたちの学びを支援しています。1995年の阪神・淡路大震災の経験から、困難な状況にある家庭への教育支援の重要性を深く認識し、給付型奨学金制度を運営しています。</p><p><span class="marker-green">返還不要の給付型で、他の奨学金との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>神戸市内に住所を有すること</p><p>高等学校・大学等に在学していること</p><p>世帯の所得が一定基準以下であること</p><p>学業成績が一定の水準を満たすこと</p></div><p>毎年4月から5月にかけて募集が行われます。神戸市教育委員会学校教育課に申請書と必要書類を提出します。</p><p><span class="marker">所得証明書・在学証明書・成績証明書の提出が必要</span>です。学校を通じて申請する場合もあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は課程により異なり、<strong>高校生で月額約1万円、大学生で月額最大4万円</strong>です。</p><p><span class="marker">毎年度の更新手続きが必要で、成績・出席状況が基準を下回ると支給が停止</span>されることがあります。</p><div class="highlight-box">神戸市では奨学金のほか、兵庫県の高校授業料無償化制度や就学援助制度も利用できます。また、震災遺児等を対象とした特別な奨学金制度もありますので、教育委員会に相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-sme-support',
    title: '神戸市 中小企業新事業展開支援補助金',
    organization: '神戸市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['神戸市', '中小企業支援', '補助金'],
    eligibility: '神戸市内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年4月〜7月（公募期間）',
    description: '神戸市が実施する中小企業新事業展開支援補助金です。新分野展開やDX推進に取り組む市内中小企業に最大200万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 中小企業新事業展開支援補助金は、<span class="marker">新分野への進出・業態転換・DX推進など新たな事業展開に挑戦する市内中小企業</span>を支援する制度です。</p><p>神戸市は港湾業・造船業を基盤に、ファッション・IT・医療産業クラスター（神戸医療産業都市）など多様な産業が発展しています。中小企業の新たなチャレンジを後押しし、神戸経済の多角化と持続的成長を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限200万円</strong>です。<span class="marker-green">医療・ヘルスケア分野への展開にはさらに優遇措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>神戸市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>新事業展開の具体的な事業計画を有すること</p><p>市税の滞納がないこと</p></div><p>神戸市経済観光局経済政策課に事業計画書を提出します。書類審査とプレゼンテーション審査で採択が決定されます。</p><p><span class="marker">神戸市産業振興財団の経営相談や専門家派遣を事前に活用することをおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限200万円</strong>です。設備費・外注費・広告宣伝費・展示会出展費などが対象です。</p><p><span class="marker">交付決定前に着手した経費は補助対象外</span>です。採択後の計画変更には事前承認が必要です。</p><div class="note-box">神戸市では「神戸医療産業都市」への企業進出支援や、スタートアップ向けのアクセラレーションプログラムなど多様な産業支援策を展開しています。人件費や家賃等の固定費は補助対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-nursing-equipment',
    title: '神戸市 介護用品支給事業',
    organization: '神戸市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['神戸市', '介護用品', '助成金'],
    eligibility: '神戸市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '神戸市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大10万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた在宅高齢者を介護する家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>神戸市は阪神・淡路大震災後の復興の中で、高齢者支援の重要性を改めて認識し、在宅介護を行う家族への支援策を充実させてきました。介護用品の継続的な購入は家計への負担が大きく、本制度で経済的負担の軽減を図っています。</p><p><span class="marker-green">市民税非課税世帯が主な対象ですが、一定の条件で課税世帯も利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>神戸市に住民登録がある要介護4または5の在宅高齢者を常時介護している家族が対象です。</p><div class="summary-box" data-title="支給対象の介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤・ウェットティッシュ</p><p>使い捨て手袋・防水シーツ</p></div><p>各区役所のあんしんすこやか係の窓口で申請します。介護保険被保険者証の写しと介護者の本人確認書類が必要です。<strong>カタログから選択した介護用品が定期配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大10万円相当</strong>の介護用品が支給されます。月額に換算すると約8,300円相当です。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。退院後に在宅介護に移行した場合は改めて申請できます。</p><div class="highlight-box">神戸市では「KOBEシニアサポート」として、介護用品支給のほか、配食サービス、緊急通報装置の貸与、家族介護者交流事業なども実施しています。介護に関する悩みは地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kobe-elderly-support',
    title: '神戸市 高齢者自立支援配食サービス',
    organization: '神戸市',
    type: 'local',
    maxAmount: '1食あたり最大400円助成',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['神戸市', '配食サービス', '高齢者支援'],
    eligibility: '神戸市に住所を有する65歳以上のひとり暮らし・高齢者世帯等',
    applicationPeriod: '通年',
    description: '神戸市が実施する高齢者自立支援配食サービスです。ひとり暮らし高齢者等に栄養バランスの取れた食事を配達し安否確認も行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 高齢者自立支援配食サービスは、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、栄養バランスの取れた食事を自宅に配達するとともに安否確認を行うサービスです。</p><p>阪神・淡路大震災の教訓を活かし、神戸市は高齢者の孤立防止と健康維持に力を入れています。配食サービスは栄養面の支援だけでなく、配達員による見守り機能も担う重要な福祉サービスです。</p><p><span class="marker-green">1食あたり自己負担は数百円程度で、週5回まで利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用の条件"><p>神戸市に住民登録がある65歳以上の方</p><p>ひとり暮らしまたは高齢者のみの世帯</p><p>調理が困難で栄養バランスの確保が難しい方</p><p>要介護認定の有無は問わない</p></div><p>各区役所のあんしんすこやか係または地域包括支援センターで申請・相談を受け付けています。担当者が生活状況を確認した上で利用が決定されます。</p><p><span class="marker">要介護認定を受けていなくても利用できるのが本サービスの特長</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1食あたりの費用のうち、市が<strong>最大400円を助成</strong>し、自己負担額は1食あたり数百円です。昼食・夕食から選択できます。</p><p><span class="marker">食事制限（糖尿病食・腎臓病食等）に対応したメニューも用意</span>されています。ただし、メニューの種類は配食事業者により異なります。</p><div class="note-box">配食サービスは生活支援と見守りを兼ねた事業のため、食事の配達時に応答がない場合は緊急連絡先への連絡や安否確認が行われます。入院中や施設入所中は利用を中断してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 岡山市（岡山県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'okayama-city-childcare-subsidy',
    title: '岡山市 保育料軽減制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '第2子半額・第3子以降無償',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岡山県',
    tags: ['岡山市', '保育料軽減', '助成金'],
    eligibility: '岡山市に住所を有し、認可保育施設等に子どもを通わせている保護者',
    applicationPeriod: '通年',
    description: '岡山市が実施する保育料軽減制度です。多子世帯の保育料を軽減し、第3子以降は無償化されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園等に通う子どもの保育料</span>を多子世帯向けに軽減する制度です。</p><p>「晴れの国おかやま」の県都である岡山市は、温暖な気候と充実した都市機能を兼ね備え、子育て世帯にとって住みやすい街として注目されています。保育料の軽減を通じて、多子世帯の経済的負担を和らげ、出生率の向上を目指しています。</p><p><span class="marker-green">第2子は半額、第3子以降は保育料が完全に無償</span>となります。3〜5歳児は国の制度により全員無償化されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡山市に住民登録があり、認可保育施設等を利用している世帯が対象です。</p><div class="summary-box" data-title="保育料の軽減内容"><p>0〜2歳児の第1子：所得に応じた保育料</p><p>0〜2歳児の第2子：第1子の半額</p><p>0〜2歳児の第3子以降：無償</p><p>3〜5歳児：国の無償化制度により全員無償</p></div><p>保育料の軽減は入所申請時の世帯情報に基づき<strong>自動適用</strong>されます。別途の申請は原則不要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子は<strong>第1子の保育料の半額</strong>、第3子以降は<strong>保育料無償</strong>です。年齢制限なくきょうだいをカウントします。</p><p><span class="marker">認可外保育施設を利用している場合は別途補助制度の申請が必要</span>です。</p><div class="note-box">副食費（おかず・おやつ代）は保育料とは別に実費負担となります。年収360万円未満相当の世帯や第3子以降は副食費も免除されます。詳細は岡山市のこども福祉課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-birth-bonus',
    title: '岡山市 出産お祝い金支給事業',
    organization: '岡山市',
    type: 'local',
    maxAmount: '子ども1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '岡山県',
    tags: ['岡山市', '出産祝い金', '給付金'],
    eligibility: '岡山市に住所を有し、新生児を出産した保護者',
    applicationPeriod: '出生届提出後〜生後3か月以内',
    description: '岡山市が実施する出産お祝い金支給事業です。新生児1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 出産お祝い金支給事業は、<span class="marker">岡山市内で新生児が誕生した世帯に子ども1人あたり5万円</span>を支給する制度です。</p><p>岡山市は「桃太郎のまち」として知られ、後楽園や岡山城など豊かな文化遺産に恵まれた中四国地方の交通の要衝です。子育て支援の一環として出産時の経済的負担を軽減し、安心して出産・育児に臨める環境を整えています。</p><p><span class="marker-green">国の出産・子育て応援交付金に加えた岡山市独自の上乗せ支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡山市に住民登録があり、新生児を出産した保護者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>出生届提出時に案内書類を受け取る</p><p>各区役所市民保険年金課で申請</p><p>こんにちは赤ちゃん訪問等を受ける</p><p>指定口座に振り込まれる</p></div><p><strong>出生日から3か月以内</strong>に申請してください。保護者の本人確認書類と振込先口座情報が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>子ども1人あたり<strong>5万円</strong>が支給されます。多胎児の場合は人数分が支給されます。</p><p><span class="marker">支給決定時に岡山市に住民登録があることが条件</span>です。申請後に転出した場合は支給されないことがあります。</p><div class="highlight-box">岡山市では出産祝い金のほか、産前産後サポート事業（ヘルパー派遣）、産後ケア事業、乳幼児健診の充実など、妊娠期から子育て期まで切れ目のない支援を展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-housing-purchase',
    title: '岡山市 子育て世帯住宅取得支援補助金',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '岡山県',
    tags: ['岡山市', '住宅購入', '補助金'],
    eligibility: '岡山市内で住宅を取得する子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '岡山市が実施する子育て世帯向け住宅取得支援補助金です。市内で住宅を購入する子育て世帯に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 子育て世帯住宅取得支援補助金は、<span class="marker">18歳未満の子どもがいる世帯が岡山市内で住宅を取得する場合</span>に費用の一部を補助する制度です。</p><p>中四国地方の拠点都市である岡山市は、新幹線・高速道路の結節点として交通利便性が高く、「晴れの国」の温暖な気候も相まって移住先としての人気が高まっています。子育て世帯の定住を促進し、活力あるまちづくりにつなげることを目的としています。</p><p>基本補助額は<strong>最大20万円</strong>で、<span class="marker-green">市外からの転入世帯には10万円が加算</span>され最大30万円となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>18歳未満の子どもがいる世帯（妊娠中を含む）</p><p>岡山市内で初めて住宅を取得すること</p><p>取得する住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>岡山市都市整備局住宅課に申請書と必要書類を提出します。売買契約書の写し、住民票、所得証明書が必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請</span>してください。中古住宅の取得も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>、市外からの転入加算で<strong>10万円が上乗せ</strong>されます。新築・中古とも対象です。</p><p><span class="marker">親族間売買や相続による取得は対象外</span>です。5年以内の転出は補助金返還の対象となります。</p><div class="note-box">岡山市は「コンパクトシティおかやま」の実現に向けて公共交通沿線での居住を推進しています。路面電車やバス路線沿線のエリアは生活利便性も高く、住宅購入の候補地として検討する価値があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-disability-medical',
    title: '岡山市 重度心身障害者医療費助成制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '岡山県',
    tags: ['岡山市', '障害者医療', '助成金'],
    eligibility: '岡山市に住所を有する重度の身体・知的・精神障害のある方',
    applicationPeriod: '通年',
    description: '岡山市が実施する重度心身障害者医療費助成制度です。重度障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 重度心身障害者医療費助成制度は、<span class="marker">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級</span>等の重度障害のある方の医療費を助成する制度です。</p><p>岡山市は「ノーマライゼーション」の理念のもと、障害のある方が地域で安心して暮らせるまちづくりを推進しています。医療機関が充実した医療都市でもあり、重度障害のある方が必要な医療を経済的負担なく受けられる環境を整えています。</p><p><span class="marker-green">所得制限はあるものの、多くの対象者が自己負担なしで医療を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡山市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳A（重度）</p><p>精神障害者保健福祉手帳1級</p><p>身体障害者手帳3級かつ療育手帳B（中度）の重複障害</p></div><p>各区役所の福祉事務所窓口で申請します。障害者手帳、健康保険証が必要です。申請後、<strong>「重度心身障害者医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>原則全額助成</strong>されます。通院・入院・調剤のすべてが対象です。</p><p><span class="marker">岡山県内の医療機関では受給資格者証を提示するだけで窓口負担が軽減</span>されます。県外受診の場合は後日償還払いとなります。</p><div class="note-box">入院時の食事療養費や差額ベッド代、保険適用外の費用は助成対象外です。65歳以上の方は後期高齢者医療制度への加入が必要な場合がありますのでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-scholarship',
    title: '岡山市 奨学金制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '岡山県',
    tags: ['岡山市', '奨学金', '教育支援'],
    eligibility: '岡山市内に住所を有する高校生・大学生の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜5月',
    description: '岡山市が実施する奨学金制度です。経済的理由で修学困難な高校生・大学生に月額最大3万円の奨学金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対し、奨学金を支給する制度です。</p><p>岡山市は岡山大学をはじめ多くの高等教育機関が集積する学術都市です。「教育のまちおかやま」を掲げ、経済的事情に関わらず意欲ある若者が学び続けられるよう、給付型奨学金制度を運営しています。</p><p><span class="marker-green">返還不要の給付型で、他の奨学金制度との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>岡山市内に住所を有すること</p><p>高等学校・大学等に在学していること</p><p>世帯の所得が一定基準以下であること</p><p>学業成績が一定の水準を満たすこと</p></div><p>毎年4月から5月にかけて募集されます。岡山市教育委員会学校教育課に申請書と必要書類を提出してください。</p><p><span class="marker">在学する学校を通じた申請も可能</span>です。所得証明書・在学証明書・成績証明書が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は課程により異なり、<strong>高校生で月額約1万円、大学生で月額最大3万円</strong>です。</p><p><span class="marker">年度ごとの更新手続きが必要で、成績や出席状況が基準を下回ると支給停止</span>となることがあります。</p><div class="highlight-box">岡山市では奨学金のほか、就学援助制度（小中学生対象）や高等学校等就学支援金（国の制度）も利用できます。岡山大学では地元学生向けの独自奨学金も用意されていますので、あわせて確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-sme-support',
    title: '岡山市 中小企業経営革新支援補助金',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '岡山県',
    tags: ['岡山市', '中小企業支援', '補助金'],
    eligibility: '岡山市内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年5月〜7月（公募期間）',
    description: '岡山市が実施する中小企業経営革新支援補助金です。新事業展開や生産性向上に取り組む市内中小企業に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 中小企業経営革新支援補助金は、<span class="marker">新製品開発・新サービス展開・生産性向上に取り組む市内中小企業</span>を支援する制度です。</p><p>岡山市は瀬戸内の交通の結節点として、製造業・商業・サービス業など多様な産業が発展しています。特に近年はIT・デジタル関連企業の進出も増えており、既存の中小企業の経営革新を後押しする施策が重要となっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">デジタル化・DX関連の取り組みには優先採択の措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>岡山市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>経営革新の具体的な事業計画を有すること</p><p>市税の滞納がないこと</p></div><p>岡山市産業観光局産業振興課に事業計画書・申請書を提出します。外部有識者を含む審査会で採択が決定されます。</p><p><span class="marker">岡山商工会議所や岡山県産業振興財団の経営相談を活用して事業計画を策定することをおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。機械装置費・外注費・広告費・展示会出展費などが対象です。</p><p><span class="marker">交付決定前に着手した経費は補助対象外</span>です。事業完了後に実績報告書を提出する必要があります。</p><div class="note-box">岡山市では本補助金のほか、中小企業向けの低利融資制度や専門家派遣制度も実施しています。人件費・家賃・光熱費等の経常経費は対象外ですのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-nursing-equipment',
    title: '岡山市 家族介護用品支給事業',
    organization: '岡山市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '岡山県',
    tags: ['岡山市', '介護用品', '助成金'],
    eligibility: '岡山市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '岡山市が実施する家族介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を月額最大6,250円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 家族介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた在宅高齢者を介護する家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>岡山市は「健康市民おかやま21」のもと、高齢者が住み慣れた地域で暮らし続けられるよう在宅介護の支援に力を入れています。温暖な気候で災害が少なく住みやすい環境の中、在宅介護を行う家族の経済的負担軽減を図っています。</p><p><span class="marker-green">市民税非課税世帯が主な対象ですが、一定条件のもと課税世帯も利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡山市に住民登録がある要介護4または5の在宅高齢者を常時介護している家族等が対象です。</p><div class="summary-box" data-title="支給対象の介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤・ドライシャンプー</p><p>使い捨て手袋</p></div><p>各区役所の福祉事務所窓口で申請します。介護保険被保険者証と介護者の本人確認書類が必要です。申請後、<strong>カタログから介護用品を選択し毎月配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,250円相当</strong>の介護用品が支給されます。年間で最大75,000円相当です。</p><p><span class="marker">入院中や施設入所中は支給対象外</span>です。在宅に復帰した際は再申請できます。</p><div class="highlight-box">岡山市では介護用品支給のほか、家族介護者の交流事業（介護者のつどい）や介護者向けの相談窓口も設けています。介護の悩みをひとりで抱え込まず、地域包括支援センターに相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-energy-support',
    title: '岡山市 省エネ設備導入補助金',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '岡山県',
    tags: ['岡山市', '省エネ設備', '補助金'],
    eligibility: '岡山市に住所を有し、省エネ設備を導入する市民',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '岡山市が実施する省エネ設備導入補助金です。太陽光発電・蓄電池・高効率給湯器等の導入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 省エネ設備導入補助金は、<span class="marker">住宅に太陽光発電システム・家庭用蓄電池・高効率給湯器等の省エネ設備を導入する市民</span>を支援する制度です。</p><p>「晴れの国」岡山は日照時間が全国トップクラスであり、太陽光発電との相性が非常に良い地域です。岡山市は2050年カーボンニュートラルの実現に向けて、家庭部門のCO2排出削減を推進しており、省エネ設備の普及促進に取り組んでいます。</p><p><span class="marker-green">太陽光発電と蓄電池を同時に導入すると補助額が加算</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：上限5万円</p><p>家庭用蓄電池：上限5万円</p><p>高効率給湯器（エコキュート等）：上限3万円</p><p>HEMS（ホームエネルギー管理システム）：上限2万円</p></div><p>岡山市環境局環境保全課に申請書と見積書等を提出します。設備の設置前に申請が必要です。</p><p><span class="marker">必ず設備の設置工事前に申請・交付決定を受けてください</span>。設置後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>設備ごとに補助上限額が設定されており、<strong>1世帯あたり合計最大10万円</strong>です。</p><p><span class="marker">毎年度予算に限りがあり、先着順で受付終了</span>となります。特に年度前半での申請をおすすめします。</p><div class="note-box">FIT（固定価格買取制度）の認定を受けた太陽光発電設備も対象ですが、全量売電型は除外されます。自家消費型の導入が推奨されています。国や岡山県の補助制度との併用が可能な場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okayama-city-bousai-equipment',
    title: '岡山市 防災資機材整備補助金',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'disaster',
    prefecture: '岡山県',
    tags: ['岡山市', '防災資機材', '補助金'],
    eligibility: '岡山市内の自主防災組織・町内会等',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '岡山市が実施する防災資機材整備補助金です。自主防災組織が購入する防災資機材に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 防災資機材整備補助金は、<span class="marker">市内の自主防災組織や町内会等が防災活動に必要な資機材を整備する際</span>に費用の一部を補助する制度です。</p><p>岡山市は2018年の西日本豪雨で甚大な被害を受けた経験から、地域の防災力向上を最重要課題として位置づけています。自助・共助の取り組みを強化するため、各地域の自主防災組織による防災資機材の整備を積極的に支援しています。</p><p>補助率は購入費用の2分の1以内で、<strong>1団体あたり最大30万円</strong>です。<span class="marker-green">2018年の豪雨被災地域には補助率の引き上げ措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の資機材例"><p>発電機・投光器・ヘッドライト</p><p>非常用飲料水タンク・浄水器</p><p>担架・救急セット</p><p>防災倉庫・テント</p><p>拡声器・トランシーバー</p></div><p>岡山市危機管理室に申請書と見積書を提出します。自主防災組織の規約や活動計画書の添付が必要です。</p><p><span class="marker">購入前の申請が必須</span>です。交付決定を受けてから資機材を購入してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>1団体あたり最大30万円</strong>です。複数年にわたって計画的に申請することも可能です。</p><p><span class="marker">食料・飲料水等の消耗品は補助対象外</span>です。耐久性のある資機材の購入に限定されています。</p><div class="highlight-box">岡山市では防災資機材の整備と合わせて、自主防災組織の結成支援や防災訓練の指導、防災リーダー育成講座なども実施しています。地域の防災力を総合的に高める取り組みを推進しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 広島市（広島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hiroshima-city-childcare-subsidy',
    title: '広島市 保育料軽減助成制度',
    organization: '広島市',
    type: 'local',
    maxAmount: '第2子以降無償化',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['広島市', '保育料軽減', '助成金'],
    eligibility: '広島市に住所を有し、認可保育施設等に子どもを通わせている保護者',
    applicationPeriod: '通年',
    description: '広島市が実施する保育料軽減助成制度です。第2子以降の保育料が無償化されるほか、多子世帯への支援が充実しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園等に通う子どもの保育料</span>を軽減する制度です。</p><p>中四国地方最大の都市である広島市は、平和都市としての理念のもと、すべての子どもが健やかに育つ環境づくりに力を入れています。人口約120万人を擁する政令指定都市として、国の幼保無償化制度に加え、市独自の上乗せ支援を実施しています。</p><p><span class="marker-green">第2子以降は年齢・所得制限なしで保育料が無償</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>広島市に住民登録があり、認可保育施設等を利用している世帯が対象です。</p><div class="summary-box" data-title="保育料軽減の内容"><p>0〜2歳児の第1子：市独自の軽減保育料を適用</p><p>0〜2歳児の第2子以降：保育料無償</p><p>3〜5歳児：国の制度により全員無償</p></div><p>保育料の軽減は入所手続き時の世帯情報に基づき<strong>自動適用</strong>されます。特別な申請は原則不要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子以降は<strong>保育料完全無償</strong>です。第1子は世帯の市民税所得割額に基づく階層別保育料が適用されます。</p><p><span class="marker">認可外保育施設を利用している場合は「認可外保育施設利用者助成制度」を別途申請する必要があります</span>。</p><div class="note-box">副食費は保育料とは別に実費負担ですが、年収360万円未満相当の世帯や第3子以降は免除されます。延長保育料や特別保育の費用は軽減の対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-birth-bonus',
    title: '広島市 出産お祝い金支給事業',
    organization: '広島市',
    type: 'local',
    maxAmount: '子ども1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['広島市', '出産祝い金', '給付金'],
    eligibility: '広島市に住所を有し、新生児を出産した保護者',
    applicationPeriod: '出生届提出後〜生後4か月以内',
    description: '広島市が実施する出産お祝い金支給事業です。新生児1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 出産お祝い金支給事業は、<span class="marker">広島市内で新生児が誕生した世帯に子ども1人あたり5万円</span>を支給する制度です。</p><p>世界平和を祈念する国際都市・広島市は、次世代を担う子どもたちの誕生を祝福し、出産に伴う経済的負担の軽減を図っています。平和記念公園に象徴される「いのち」を大切にする精神が、子育て支援策にも反映されています。</p><p><span class="marker-green">国の出産・子育て応援交付金に上乗せする広島市独自の支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>広島市に住民登録があり、新生児を出産した保護者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>出生届提出時に案内を受け取る</p><p>各区役所厚生部で申請</p><p>こんにちは赤ちゃん訪問を受ける</p><p>指定口座に祝い金が振り込まれる</p></div><p><strong>出生日から4か月以内</strong>に申請してください。保護者の本人確認書類と振込先口座情報をお持ちください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>子ども1人あたり<strong>5万円</strong>が支給されます。多胎児の場合は人数分が支給されます。</p><p><span class="marker">支給決定時に広島市に住民登録があることが条件</span>です。申請期限を過ぎた場合は支給を受けられません。</p><div class="highlight-box">広島市では出産祝い金のほか、妊婦健診の公費負担、産後ケア事業（宿泊型・デイサービス型）、育児支援ヘルパー派遣など、妊娠から産後まで切れ目のない支援体制を整えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-housing-purchase',
    title: '広島市 若年・子育て世帯住宅取得支援事業',
    organization: '広島市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '広島県',
    tags: ['広島市', '住宅購入', '補助金'],
    eligibility: '広島市内で住宅を取得する40歳未満の若年世帯または子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '広島市が実施する若年・子育て世帯住宅取得支援事業です。市内での住宅購入に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 若年・子育て世帯住宅取得支援事業は、<span class="marker">40歳未満の若年世帯や子育て世帯が市内で住宅を取得する場合</span>に費用の一部を補助する制度です。</p><p>広島市は太田川デルタに広がる水の都であり、中四国地方の中枢都市として都市機能が充実しています。近年の都心再開発とあわせて、若い世代の市内定住を促進するための住宅取得支援に力を入れています。</p><p>基本補助額は<strong>最大30万円</strong>で、<span class="marker-green">市外からの転入世帯は10万円が加算</span>され最大40万円となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦のいずれかが40歳未満、または18歳未満の子がいる世帯</p><p>広島市内で初めて住宅を取得すること</p><p>取得する住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p></div><p>広島市都市整備局住宅政策課に申請書と売買契約書、住民票等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請してください</span>。新築・中古とも対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>、市外からの転入加算で<strong>最大40万円</strong>です。</p><p><span class="marker">親族間売買・競売物件の取得・相続による取得は対象外</span>です。5年以内の転出は返還対象です。</p><div class="note-box">広島市は路面電車やアストラムラインなど公共交通が充実しています。立地適正化計画に基づく居住誘導区域内での住宅取得は、将来的な資産価値の維持にも有利と考えられています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-infertility',
    title: '広島市 不妊治療費助成制度',
    organization: '広島市',
    type: 'local',
    maxAmount: '1回あたり最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '広島県',
    tags: ['広島市', '不妊治療', '助成金'],
    eligibility: '広島市に住所を有し、保険適用の不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後3か月以内）',
    description: '広島市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し1回あたり最大15万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 不妊治療費助成制度は、<span class="marker">体外受精・顕微授精等の特定不妊治療にかかる保険適用後の自己負担費用</span>を助成する制度です。</p><p>広島市は「こども未来プラン」のもと、少子化対策として不妊に悩む夫婦への支援を充実させています。2022年の保険適用開始後も治療費の自己負担は高額になるケースが多く、市独自の上乗せ助成により経済的なハードルを下げています。</p><p><span class="marker-green">保険診療と併用する先進医療の費用も一部助成の対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>広島市に住民登録がある法律上の婚姻関係にある夫婦（事実婚を含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の受診等証明書</p><p>領収書の写し</p><p>住民票（夫婦連名）</p><p>健康保険証の写し</p></div><p>広島市各区保健センターの窓口で申請します。<strong>治療終了日から3か月以内</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>特定不妊治療1回あたりの自己負担額のうち、<strong>最大15万円</strong>が助成されます。</p><p><span class="marker">助成回数は妻の年齢が40歳未満の場合は通算6回まで、40歳以上43歳未満は通算3回まで</span>です。</p><div class="note-box">広島市では不妊専門相談センター（広島市こども未来局）を設置しており、治療や助成制度に関する相談を無料で受けられます。精神的なサポートも含めた支援を行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-scholarship',
    title: '広島市 奨学金制度',
    organization: '広島市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'education',
    prefecture: '広島県',
    tags: ['広島市', '奨学金', '教育支援'],
    eligibility: '広島市内に住所を有する高校生・大学生等で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜5月',
    description: '広島市が実施する奨学金制度です。経済的理由で修学困難な高校生・大学生に月額最大4万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対し、奨学金を支給する制度です。</p><p>広島市は被爆からの復興を遂げた都市として、教育の力を重視しています。広島大学をはじめとする高等教育機関が集積し、平和教育と学術研究の拠点としての役割を担っています。すべての若者に学びの機会を保障するため、給付型奨学金制度を運営しています。</p><p><span class="marker-green">返還不要の給付型で、他の奨学金との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>広島市内に住所を有すること</p><p>高等学校・大学等に在学していること</p><p>世帯の所得が一定基準以下であること</p><p>学業成績が一定の水準を満たすこと</p></div><p>毎年4月から5月にかけて募集されます。広島市教育委員会学事課に申請書を提出してください。</p><p><span class="marker">所得証明書・在学証明書・成績証明書が必要</span>です。学校経由での申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生で月額約1万円、大学生で月額最大4万円</strong>です。</p><p><span class="marker">毎年度の更新手続きが必要で、成績や出席状況が基準を下回ると支給停止</span>の可能性があります。</p><div class="highlight-box">広島市では被爆者の孫世代を対象とした特別奨学金や、ひとり親世帯向けの修学支援制度もあります。広島県の高校授業料無償化制度とも併用可能ですので、複数の制度を比較検討してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-sme-support',
    title: '広島市 中小企業イノベーション促進補助金',
    organization: '広島市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '広島県',
    tags: ['広島市', '中小企業支援', '補助金'],
    eligibility: '広島市内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年4月〜6月（公募期間）',
    description: '広島市が実施する中小企業イノベーション促進補助金です。新事業展開やDX推進に取り組む中小企業に最大200万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 中小企業イノベーション促進補助金は、<span class="marker">新製品開発・新サービス創出・DX推進など革新的な取り組みに挑戦する市内中小企業</span>を支援する制度です。</p><p>広島市はマツダをはじめとする自動車産業を中核に、精密機械・造船・IT産業など多様な製造業が発展しています。大企業のサプライチェーンを支える中小企業の技術革新を促進し、広島経済の持続的成長を目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限200万円</strong>です。<span class="marker-green">自動車関連のCASE対応やカーボンニュートラル関連事業には優先採択措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>広島市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>革新的な事業計画を有すること</p><p>市税の滞納がないこと</p></div><p>広島市経済観光局産業振興課に事業計画書を提出します。書類審査とプレゼン審査で採択が決定されます。</p><p><span class="marker">広島市中小企業支援センターの無料経営相談を活用して事業計画を磨き上げることをおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限200万円</strong>です。機械装置費・外注費・広告費・展示会出展費等が対象です。</p><p><span class="marker">交付決定前に着手した経費は補助対象外</span>です。採択後は進捗報告と完了報告が必要です。</p><div class="note-box">広島市は「ひろしまサンドボックス」事業など、イノベーション創出の取り組みを推進しています。人件費や家賃等の固定費は対象外ですが、試作品製作費やプロトタイプ開発費は対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-nursing-equipment',
    title: '広島市 介護用品給付事業',
    organization: '広島市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '広島県',
    tags: ['広島市', '介護用品', '助成金'],
    eligibility: '広島市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '広島市が実施する介護用品給付事業です。在宅介護を行う家族に紙おむつ等の介護用品を月額最大6,250円相当給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 介護用品給付事業は、<span class="marker">要介護4・5の認定を受けた在宅高齢者を介護する家族</span>に対し、紙おむつ等の介護用品を給付する制度です。</p><p>広島市は「地域包括ケアシステム」の構築を推進し、高齢者が住み慣れた地域で安心して暮らせる体制づくりに取り組んでいます。在宅介護を行う家族の経済的・身体的負担の軽減は、在宅介護の継続に不可欠な支援です。</p><p><span class="marker-green">市民税非課税世帯が主な対象ですが、条件により課税世帯も利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>広島市に住民登録がある要介護4または5の在宅高齢者を常時介護している家族が対象です。</p><div class="summary-box" data-title="給付対象の介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤・ウェットティッシュ</p><p>使い捨て手袋・防水シーツ</p></div><p>各区役所厚生部の高齢福祉係で申請します。介護保険被保険者証の写しと介護者の身分証明書が必要です。<strong>カタログから選択した用品が毎月配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,250円相当</strong>の介護用品が給付されます。年間で最大75,000円相当の支援です。</p><p><span class="marker">入院中や施設入所中の期間は給付停止</span>となります。退院・退所後に再開の届出をしてください。</p><div class="highlight-box">広島市では介護用品給付のほか、家族介護者リフレッシュ事業（介護者の一時的休息支援）や認知症カフェなど、介護する家族を支える多様な事業を展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-elderly-support',
    title: '広島市 高齢者いきいき活動支援事業',
    organization: '広島市',
    type: 'local',
    maxAmount: '年間最大5,000円分のポイント',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '広島県',
    tags: ['広島市', '高齢者支援', '生活支援'],
    eligibility: '広島市に住所を有する65歳以上の高齢者',
    applicationPeriod: '通年',
    description: '広島市が実施する高齢者いきいき活動支援事業です。ボランティア活動等に参加する高齢者にポイントを付与し、活動を奨励します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 高齢者いきいき活動支援事業は、<span class="marker">65歳以上の高齢者がボランティア活動や介護予防活動に参加した場合にポイントを付与</span>し、そのポイントを交付金に換金できる制度です。</p><p>広島市は「元気な高齢者が支え手になる共助のまちづくり」を推進しています。高齢者が社会参加することで生きがいを持ち、心身の健康を維持することは、本人の介護予防にも地域の活性化にもつながります。</p><p><span class="marker-green">ポイントは年間最大5,000円分まで換金可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="ポイント付与の対象活動"><p>介護施設でのボランティア活動</p><p>地域の介護予防教室への参加</p><p>見守り・配食サービスへの協力</p><p>地域サロン・通いの場の運営支援</p></div><p>各区役所の高齢福祉係または地域包括支援センターで登録手続きを行います。登録後、活動に参加するとポイントスタンプが押印されます。</p><p><span class="marker">登録は65歳の誕生日以降に随時可能</span>です。年度末にポイントの換金申請を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>活動1回につきポイントが付与され、<strong>年間最大5,000円分</strong>まで換金できます。ポイントの繰り越しはできません。</p><p><span class="marker">活動参加は任意で、ノルマや義務はありません</span>。自分のペースで無理なく参加できます。</p><div class="note-box">本事業は介護保険制度の「介護予防・日常生活支援総合事業」の一環として実施されています。活動中のケガには保険が適用される場合がありますが、事前に確認しておくことをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiroshima-city-bousai-equipment',
    title: '広島市 土砂災害対策支援補助金',
    organization: '広島市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'disaster',
    prefecture: '広島県',
    tags: ['広島市', '防災対策', '補助金'],
    eligibility: '広島市内の土砂災害警戒区域等に居住する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '広島市が実施する土砂災害対策支援補助金です。土砂災害警戒区域内の住宅の防災工事に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 土砂災害対策支援補助金は、<span class="marker">土砂災害警戒区域や土砂災害特別警戒区域内にある住宅の防災対策工事</span>に対し費用の一部を補助する制度です。</p><p>広島市は2014年8月の広島土砂災害で大きな被害を受けた経験を持ちます。山地が市街地に迫る地形から土砂災害リスクが高く、住民の命を守るための防災対策が最重要課題の一つです。がけ崩れ防止工事や擁壁の設置など、個人住宅の防災力向上を経済的に支援しています。</p><p>補助率は工事費の3分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">特別警戒区域（レッドゾーン）内の住宅は補助率が引き上げられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の工事"><p>がけ崩れ防止のための擁壁設置・補強</p><p>排水施設の新設・改良</p><p>土砂の流入を防ぐ防護壁・防護柵の設置</p><p>のり面保護工事</p></div><p>広島市都市整備局宅地防災課に申請書と工事計画書を提出します。現地調査の上、補助の適否が判断されます。</p><p><span class="marker">工事着手前の申請が必須</span>です。まずは窓口で対象となるかどうかの事前相談を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事費の3分の1以内で、<strong>上限50万円</strong>です。特別警戒区域内の住宅は補助率が2分の1に引き上げられます。</p><p><span class="marker">単なる外構工事や造園工事は対象外</span>です。防災効果が認められる工事に限定されています。</p><div class="highlight-box">広島市では土砂災害ハザードマップの配布や、防災メール（広島市防災情報メール）の配信サービスも行っています。ハード対策と合わせて、避難計画の確認などソフト対策も重要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 北九州市（福岡県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kitakyushu-childcare-subsidy',
    title: '北九州市 保育料軽減制度',
    organization: '北九州市',
    type: 'local',
    maxAmount: '第2子以降無償化',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['北九州市', '保育料軽減', '助成金'],
    eligibility: '北九州市に住所を有し、認可保育施設等に子どもを通わせている保護者',
    applicationPeriod: '通年',
    description: '北九州市が実施する保育料軽減制度です。第2子以降の保育料を無償化し、子育て世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園等に通う0〜2歳児クラスの子どもの保育料</span>を軽減する制度です。</p><p>北九州市は政令指定都市の中でも物価が比較的低く、住みやすい街として評価されています。人口約93万人の工業都市であり、子育て支援の充実による若い世代の定住促進を重要施策に位置づけています。</p><p><span class="marker-green">第2子以降は年齢・所得制限なしで保育料が無償</span>です。第1子の保育料も国基準より大幅に軽減されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北九州市に住民登録があり、認可保育施設等を利用している世帯が対象です。</p><div class="summary-box" data-title="北九州市の保育料軽減内容"><p>0〜2歳児の第2子以降：保育料無償</p><p>0〜2歳児の第1子：国基準の約6〜7割に軽減</p><p>3〜5歳児：国の無償化制度により全員無償</p><p>ひとり親世帯：さらに手厚い軽減措置</p></div><p>保育料は入所手続き時の世帯情報に基づき<strong>自動計算</strong>されます。特別な申請は原則不要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子以降は<strong>保育料完全無償</strong>です。第1子は世帯の課税状況に応じて保育料が決まります。</p><p><span class="marker">認可外保育施設を利用中の場合は「認可外保育施設利用者補助」を別途申請してください</span>。</p><div class="note-box">副食費（おかず代等）は保育料とは別に負担が必要ですが、年収360万円未満相当の世帯や第3子以降は免除されます。北九州市は待機児童ゼロを達成しており、保育サービスの量・質ともに充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-birth-bonus',
    title: '北九州市 出産・子育て応援祝い金',
    organization: '北九州市',
    type: 'local',
    maxAmount: '子ども1人あたり10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['北九州市', '出産祝い金', '給付金'],
    eligibility: '北九州市に住所を有し、新生児を出産した保護者',
    applicationPeriod: '出生届提出後〜生後4か月以内',
    description: '北九州市が実施する出産・子育て応援祝い金です。新生児1人あたり10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 出産・子育て応援祝い金は、<span class="marker">北九州市で新生児が誕生した世帯に子ども1人あたり10万円</span>を支給する制度です。</p><p>かつて四大工業地帯の一角として栄えた北九州市は、環境モデル都市への転換を果たし、現在は「子育てしやすいまち」としてのブランド構築に注力しています。手厚い出産支援を通じて、若い世代の市内定住を促進しています。</p><p><span class="marker-green">国の出産・子育て応援交付金に加えた北九州市独自の上乗せ支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北九州市に住民登録があり、新生児を出産した保護者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>出生届提出時に案内を受け取る</p><p>各区役所子育て支援課で申請</p><p>新生児訪問等の面談を受ける</p><p>指定口座に祝い金が振り込まれる</p></div><p><strong>出生日から4か月以内</strong>に申請が必要です。保護者の本人確認書類と振込先口座情報をご用意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>子ども1人あたり<strong>10万円</strong>が支給されます。双子の場合は20万円です。</p><p><span class="marker">支給決定時に北九州市に住民登録があることが条件</span>です。申請期限を過ぎると受け取れませんのでご注意ください。</p><div class="highlight-box">北九州市は「子育て日本一」を目指す取り組みの一環として、出産祝い金のほか、産前産後ヘルパー派遣、産後ケア事業、ファミリー・サポート・センター事業なども展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-housing-purchase',
    title: '北九州市 定住・移住促進住宅取得補助金',
    organization: '北九州市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['北九州市', '住宅購入', '補助金'],
    eligibility: '北九州市内で住宅を取得する若年・子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '北九州市が実施する定住・移住促進住宅取得補助金です。市内で住宅を購入する若年・子育て世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 定住・移住促進住宅取得補助金は、<span class="marker">若年世帯（40歳未満）や子育て世帯が北九州市内で住宅を取得する場合</span>に費用の一部を補助する制度です。</p><p>北九州市は政令指定都市の中でも住宅取得コストが低く、自然環境と都市機能のバランスが良い街です。人口減少対策として若い世代の定住促進を図るため、住宅取得に対する手厚い支援を実施しています。</p><p>基本補助額は<strong>最大30万円</strong>で、<span class="marker-green">市外からの転入世帯は20万円が加算</span>され最大50万円となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦のいずれかが40歳未満、または18歳未満の子がいる世帯</p><p>北九州市内で住宅を新たに取得すること</p><p>5年以上継続して居住する意思があること</p><p>市税の滞納がないこと</p></div><p>北九州市建築都市局住宅計画課に申請書と必要書類を提出します。売買契約書の写し、住民票、所得証明書が必要です。</p><p><span class="marker">住宅の引渡し後6か月以内に申請してください</span>。新築・中古とも対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、市外からの転入加算<strong>20万円</strong>を含め最大50万円です。</p><p><span class="marker">親族間売買・相続による取得は対象外</span>です。5年以内に転出した場合は補助金の返還が求められます。</p><div class="note-box">北九州市は福岡市に比べて住宅価格が大幅に低く、同じ予算でも広い住宅を取得できるのが魅力です。JR鹿児島本線や北九州モノレールなど公共交通も充実しており、通勤利便性の高いエリアで住宅を探してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-senior-dental',
    title: '北九州市 後期高齢者歯科健診事業',
    organization: '北九州市',
    type: 'local',
    maxAmount: '歯科健診費用の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['北九州市', '歯科健診', '高齢者医療'],
    eligibility: '北九州市に住所を有する76歳の方（後期高齢者医療被保険者）',
    applicationPeriod: '対象年齢の年度内',
    description: '北九州市が実施する後期高齢者歯科健診事業です。76歳の方に無料で歯科健診を実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 後期高齢者歯科健診事業は、<span class="marker">76歳の後期高齢者医療被保険者</span>を対象に、無料で歯科健診を実施する制度です。</p><p>北九州市は高齢化率が政令指定都市の中でも高く、高齢者の健康寿命の延伸が重要な課題です。口腔機能の低下はフレイル（虚弱）や誤嚥性肺炎のリスクを高めるため、歯科健診による早期発見・早期対応を推進しています。</p><p><span class="marker-green">受診料は無料で、市内約600か所の協力歯科医院で受診可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北九州市に住民登録がある76歳の方が対象です。対象者には受診券が郵送で届きます。</p><div class="summary-box" data-title="健診の内容"><p>虫歯・歯周疾患の検査</p><p>口腔機能評価（咀嚼力・嚥下機能）</p><p>口腔粘膜の異常チェック</p><p>義歯の適合状態確認</p><p>口腔衛生指導</p></div><p>届いた受診券と後期高齢者医療被保険者証を持参し、<strong>市内の協力歯科医院に直接予約</strong>して受診します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>歯科健診費用は<strong>全額公費負担で自己負担ゼロ</strong>です。治療が必要な場合は別途保険診療で治療を受けます。</p><p><span class="marker">受診券の有効期限は年度末（3月31日）まで</span>です。届いたら早めに受診予約をしてください。</p><div class="note-box">北九州市では歯科健診のほか、口腔機能向上プログラムや在宅高齢者への訪問歯科診療の紹介も行っています。健診で異常が見つかった場合の治療費は通常の保険診療扱いとなります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-scholarship',
    title: '北九州市 奨学金制度',
    organization: '北九州市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'education',
    prefecture: '福岡県',
    tags: ['北九州市', '奨学金', '教育支援'],
    eligibility: '北九州市内に住所を有する高校生・大学生等の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜5月',
    description: '北九州市が実施する奨学金制度です。経済的理由で修学困難な高校生・大学生に月額最大4万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対し、奨学金を支給する制度です。</p><p>北九州市は北九州市立大学をはじめ、九州工業大学、北九州工業高等専門学校など高等教育機関が充実しています。ものづくりの街としての伝統を活かし、技術系人材の育成にも力を入れており、経済的な事情に関わらず学び続けられる環境の整備を進めています。</p><p><span class="marker-green">返還不要の給付型奨学金で、他の奨学金との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>北九州市内に住所を有すること</p><p>高等学校・大学等に在学していること</p><p>世帯の所得が一定基準以下であること</p><p>学業・人物ともに優れていること</p></div><p>毎年4月から5月に募集が行われます。北九州市教育委員会学務課に申請書と必要書類を提出してください。</p><p><span class="marker">所得証明書・在学証明書・成績証明書が必要</span>です。学校を通じた申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生で月額約1万円、大学生で月額最大4万円</strong>です。私立学校在学者には増額される場合があります。</p><p><span class="marker">毎年度の更新手続きが必要で、成績・出席状況が基準を下回ると支給停止</span>の可能性があります。</p><div class="highlight-box">北九州市では奨学金のほか、福岡県の高校授業料無償化制度や就学援助制度も利用可能です。北九州市立大学には市内出身者向けの授業料減免制度もありますので、進学先に応じて最適な支援を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-sme-support',
    title: '北九州市 中小企業技術革新支援補助金',
    organization: '北九州市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['北九州市', '中小企業支援', '補助金'],
    eligibility: '北九州市内に事業所を有する中小企業・個人事業主',
    applicationPeriod: '毎年4月〜7月（公募期間）',
    description: '北九州市が実施する中小企業技術革新支援補助金です。新技術開発やDX推進に取り組む中小企業に最大200万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 中小企業技術革新支援補助金は、<span class="marker">新技術開発・新製品開発・DX推進・カーボンニュートラル対応など技術革新に挑戦する市内中小企業</span>を支援する制度です。</p><p>北九州市は官営八幡製鐵所を発祥とする日本有数の工業都市であり、鉄鋼・化学・機械など重厚長大産業の集積地です。近年はロボット・環境・リサイクル産業への転換も進んでおり、中小企業の技術力向上を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限200万円</strong>です。<span class="marker-green">ロボット・DX・環境関連の事業には補助率が3分の2に優遇</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>北九州市内に本店または主たる事業所があること</p><p>中小企業基本法に定める中小企業者であること</p><p>技術革新に関する具体的な事業計画を有すること</p><p>市税の滞納がないこと</p></div><p>北九州市産業経済局新産業振興課に事業計画書と申請書を提出します。外部有識者による審査会で採択が決定されます。</p><p><span class="marker">北九州テクノパークやFAIS（北九州産業学術推進機構）の技術相談を活用して事業計画を練りましょう</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限200万円</strong>です。ロボット・DX・環境分野は補助率3分の2（上限200万円）です。</p><p><span class="marker">交付決定前に着手した経費は補助対象外</span>です。事業完了後の実績報告が必須です。</p><div class="note-box">北九州市は「北九州ロボット・DX推進センター」を設置しており、ロボット導入やDX推進に関する無料相談・実証実験の場を提供しています。人件費や家賃等の固定費は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-nursing-equipment',
    title: '北九州市 介護用品支給事業',
    organization: '北九州市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['北九州市', '介護用品', '助成金'],
    eligibility: '北九州市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '北九州市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を月額最大6,250円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 介護用品支給事業は、<span class="marker">要介護4・5の認定を受けた在宅高齢者を介護する家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>北九州市は政令指定都市の中でも高齢化率が高く、在宅介護を行う家族への支援が喫緊の課題です。介護用品の購入費は月々の出費として家計に大きな影響を及ぼすため、現物支給により家族の経済的負担を軽減しています。</p><p><span class="marker-green">市民税非課税世帯を中心に、一定の条件で課税世帯も利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北九州市に住民登録がある要介護4または5の在宅高齢者を常時介護している家族等が対象です。</p><div class="summary-box" data-title="支給対象の介護用品"><p>紙おむつ（テープ式・パンツ式）</p><p>尿取りパッド</p><p>清拭剤・ドライシャンプー</p><p>使い捨て手袋・防水シーツ</p></div><p>各区役所の高齢者・障害者相談コーナーで申請します。介護保険被保険者証と介護者の本人確認書類が必要です。<strong>カタログから用品を選んで毎月配送</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>最大6,250円相当</strong>の介護用品が支給されます。年間では最大75,000円相当です。</p><p><span class="marker">入院中や施設入所中は支給対象外</span>です。在宅に戻った際に再申請できます。</p><div class="highlight-box">北九州市は「地域包括ケアシステム」の先進都市として知られ、介護予防・日常生活支援総合事業を充実させています。介護用品支給のほか、介護者の相談窓口や介護者のつどいなども開催されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-energy-support',
    title: '北九州市 省エネ住宅設備導入支援事業',
    organization: '北九州市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '福岡県',
    tags: ['北九州市', '省エネ設備', '補助金'],
    eligibility: '北九州市に住所を有し、省エネ設備を導入する市民',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '北九州市が実施する省エネ住宅設備導入支援事業です。太陽光発電・蓄電池・高効率給湯器の導入に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 省エネ住宅設備導入支援事業は、<span class="marker">住宅に太陽光発電システム・家庭用蓄電池・高効率給湯器等の省エネ設備を導入する市民</span>を支援する制度です。</p><p>北九州市は日本初の「環境モデル都市」に選定された環境先進都市です。八幡製鐵所に象徴される工業都市から環境都市への転換を果たし、SDGsの達成にも積極的に取り組んでいます。家庭部門のCO2排出削減を促進するため、省エネ設備の普及を推進しています。</p><p><span class="marker-green">太陽光発電と蓄電池のセット導入で補助額が増額</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：上限7万円</p><p>家庭用蓄電池：上限7万円</p><p>高効率給湯器（エコキュート等）：上限3万円</p><p>V2H（電気自動車充放電設備）：上限5万円</p></div><p>北九州市環境局環境学習課に申請書と設備の見積書を提出します。</p><p><span class="marker">設備の設置工事前に申請・交付決定を受けることが必須</span>です。設置後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>各設備の補助上限額の合計で、<strong>1世帯あたり最大15万円</strong>です。</p><p><span class="marker">毎年度予算に限りがあり、先着順で受付終了</span>となります。年度前半の申請をおすすめします。</p><div class="note-box">北九州市は「北九州市地球温暖化対策実行計画」に基づき、2050年脱炭素社会の実現を目指しています。国や福岡県の補助制度との併用が可能な場合がありますので、窓口にてご確認ください。全量売電型の太陽光発電は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitakyushu-seismic-diagnosis',
    title: '北九州市 木造住宅耐震診断助成制度',
    organization: '北九州市',
    type: 'local',
    maxAmount: '診断費用の全額助成（上限6万円）',
    maxAmountNum: 6,
    category: 'disaster',
    prefecture: '福岡県',
    tags: ['北九州市', '耐震診断', '補助金'],
    eligibility: '北九州市内に旧耐震基準（1981年5月以前）で建てられた木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '北九州市が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用が全額助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造戸建住宅</span>の耐震診断費用を助成する制度です。</p><p>北九州市は福岡県西方沖地震（2005年）の経験を踏まえ、住宅の耐震化を推進しています。旧耐震基準で建てられた住宅は大地震で倒壊するリスクが高く、まずは耐震診断で自宅の安全性を確認することが重要です。</p><p><span class="marker-green">診断費用が実質無料で受けられる制度</span>です。診断結果に基づく耐震改修工事への補助制度もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成対象の要件"><p>北九州市内に所在する木造戸建住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>地上2階建て以下であること</p><p>住宅の所有者または居住者が申請すること</p></div><p>北九州市建築都市局住宅計画課に申請書を提出します。市が手配する耐震診断員が訪問して診断を行います。</p><p><span class="marker">自分で診断員を探す必要はなく、市が専門家を派遣</span>します。申請から診断まで1〜2か月程度です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用が<strong>全額助成（上限6万円）</strong>されます。実質的な自己負担はありません。</p><p><span class="marker">診断の結果、耐震性が不足していた場合は耐震改修工事費の補助（最大90万円）も利用可能</span>です。</p><div class="highlight-box">北九州市では耐震診断・改修のほか、ブロック塀の撤去補助や、がけ地近接等危険住宅移転事業なども実施しています。地域の防災力向上に向けた総合的な取り組みを推進しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
