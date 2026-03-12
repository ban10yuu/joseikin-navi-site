import { Grant } from '@/lib/types';

export const cityGrantsBatch62: Grant[] = [
  // ────────────────────────────────────────────────
  // 霧島市（鹿児島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kirishima-childcare-subsidy',
    title: '霧島市 保育料助成制度',
    organization: '霧島市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '鹿児島県',
    tags: ['霧島市', '保育料', '助成金'],
    eligibility: '霧島市に住所を有し、保育所・認定こども園等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '霧島市が実施する保育料助成制度です。第2子以降の保育料が無償化され、子育て世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 保育料助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業</span>を利用する世帯に対し、保育料の一部または全額を助成する制度です。</p><p>霧島連山の麓に広がる霧島市は、霧島温泉郷や霧島神宮で知られる自然豊かな観光都市です。鹿児島空港が所在する交通の要衝でもあり、若い世帯の定住促進に向けた子育て支援を積極的に展開しています。</p><p><span class="marker-green">第2子以降の保育料は完全無償化されており、きょうだいの年齢制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>霧島市に住民登録があり、認可保育施設を利用している子どもの保護者が対象です。</p><div class="summary-box" data-title="助成内容"><p>第1子：国基準の保育料から市独自の軽減あり</p><p>第2子以降：保育料無料</p><p>3歳以上児（幼児教育・保育の無償化対象）：保育料無料</p></div><p>保育所入所の手続き時に自動的に適用されます。<strong>特別な申請は原則不要</strong>ですが、世帯状況に変更があった場合は霧島市役所子育て支援課への届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>3歳未満の第1子の保育料</strong>は、世帯の市民税所得割額に応じて決定されます。国基準より低い市独自の保育料表が適用されます。</p><p><span class="marker">副食費（おかず代）は別途負担が必要</span>ですが、年収360万円未満相当の世帯や第3子以降は免除されます。</p><div class="note-box">認可外保育施設を利用している場合は、別途「認可外保育施設利用料補助」の制度があります。詳しくは霧島市役所の子育て支援課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-birth-bonus',
    title: '霧島市 出産祝金制度',
    organization: '霧島市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '鹿児島県',
    tags: ['霧島市', '出産祝金', '給付金'],
    eligibility: '霧島市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '霧島市が実施する出産祝金制度です。お子さんの誕生を祝い、出産にかかる経済的負担を軽減するための祝金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 出産祝金制度は、<span class="marker">霧島市に住民登録のある方が出産した際</span>に、出産を祝い子育てを応援するための祝金を支給する制度です。</p><p>霧島市は温泉と神話の里として知られ、豊かな自然環境の中で子育てできる魅力的な地域です。少子化対策の一環として、出産時の経済的支援を通じて安心して子どもを産み育てられるまちづくりを目指しています。</p><p><span class="marker-green">第1子から支給対象で、第3子以降は増額</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日に霧島市に住民登録があり、引き続き霧島市に居住する意思のある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝金申請書（市窓口で入手）</p><p>母子健康手帳</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>出生届の提出後6か月以内に、霧島市役所子育て支援課の窓口で申請してください。<strong>出生届と同時に手続きするのがスムーズ</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順に応じて段階的に設定されています。<strong>第1子・第2子は5万円、第3子以降は10万円</strong>が支給されます。</p><p><span class="marker">多胎児（双子・三つ子など）の場合は、それぞれの子について支給</span>されます。</p><div class="note-box">申請期限（出生後6か月以内）を過ぎると受給できませんのでご注意ください。国の出産育児一時金（50万円）や鹿児島県の出産・子育て応援給付金とは別に受給可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-housing-purchase',
    title: '霧島市 住宅取得支援補助金',
    organization: '霧島市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '鹿児島県',
    tags: ['霧島市', '住宅取得', '補助金'],
    eligibility: '霧島市内に新築または中古住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '霧島市が実施する住宅取得支援補助金です。市内での住宅取得にかかる費用の一部を補助し、定住を促進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 住宅取得支援補助金は、<span class="marker">霧島市内に新築住宅を建築、または中古住宅を購入して定住する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>霧島市は鹿児島空港に隣接し、鹿児島市内へのアクセスも良好な立地が魅力です。温泉資源に恵まれた環境で暮らせることから、移住・定住先として人気が高まっています。</p><p>補助額は<strong>基本額30万円</strong>で、子育て世帯や市外からの転入者などには<span class="marker-green">加算措置があり、最大50万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>霧島市内に住宅を取得し、5年以上定住する意思があること</p><p>取得する住宅の延べ床面積が50㎡以上であること</p><p>市税の滞納がないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>霧島市役所建築住宅課に申請書と売買契約書の写し等を提出します。住宅の引き渡し後6か月以内に申請が必要です。</p><p><span class="marker">市外からの転入者には10万円、子育て世帯（18歳未満の子がいる世帯）には10万円の加算</span>があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、以下の加算があります。市外転入加算10万円、子育て世帯加算10万円を合わせると最大50万円です。</p><p><span class="marker">5年以内に転出した場合は補助金の返還が求められます</span>。長期的な定住計画を立てた上で申請しましょう。</p><div class="highlight-box">霧島市では住宅取得支援のほか、空き家バンク制度も運営しています。中古住宅を空き家バンク経由で取得した場合、さらに有利な条件が適用される場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-infertility',
    title: '霧島市 不妊治療費助成制度',
    organization: '霧島市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '鹿児島県',
    tags: ['霧島市', '不妊治療', '助成金'],
    eligibility: '霧島市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '霧島市が実施する不妊治療費助成制度です。特定不妊治療（体外受精・顕微授精）や一般不妊治療の費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 不妊治療費助成制度は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減する</span>ための助成制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、保険適用外の先進医療や自己負担分が依然として大きな負担となっています。霧島市では、子どもを望む夫婦を応援するため、市独自の上乗せ助成を行っています。</p><p><span class="marker-green">保険適用後の自己負担分に加え、先進医療の費用も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが霧島市に住民登録があり、医療機関で不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>医療費の領収書の写し</p><p>夫婦の住民票・戸籍謄本</p></div><p>治療が終了した日から3か月以内に、霧島市役所健康増進課へ申請してください。<strong>1年度につき1回の申請</strong>が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額および先進医療費に対し、<strong>1回の治療につき最大30万円</strong>が助成されます。</p><p><span class="marker">鹿児島県の不妊治療費助成制度との併用が可能</span>で、県の助成を受けた後の残額に対して市の助成が適用されます。</p><div class="note-box">事実婚のカップルも対象となります。治療開始前に霧島市の助成制度について確認し、必要書類を準備しておくことをおすすめします。男性不妊治療も助成対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-scholarship',
    title: '霧島市 奨学金制度',
    organization: '霧島市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'education',
    prefecture: '鹿児島県',
    tags: ['霧島市', '奨学金', '教育支援'],
    eligibility: '霧島市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '霧島市が実施する奨学金制度です。経済的理由により修学が困難な学生に対し、返還不要の給付型と貸与型の奨学金を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、奨学金を支給・貸与する制度です。</p><p>霧島市は教育環境の充実を重視しており、将来を担う若者が経済的な理由で進学を諦めることのないよう支援を行っています。給付型奨学金は返還の必要がなく、安心して学業に専念できます。</p><p><span class="marker-green">給付型と貸与型の2種類があり、併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募要件"><p>保護者が霧島市に住民登録があること</p><p>高等学校・大学・専修学校等に在学または入学予定であること</p><p>学業成績が一定基準以上であること</p><p>経済的に修学が困難であること</p></div><p>毎年3月から4月にかけて募集が行われます。霧島市教育委員会に申請書と成績証明書、世帯の所得証明書等を提出してください。</p><p><span class="marker">定員に限りがあるため、選考により決定</span>されます。早めの準備をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付型奨学金は<strong>高校生：月額1万円、大学生等：月額3万円</strong>が支給されます。貸与型は高校生：月額2万円、大学生等：月額4万円です。</p><p><span class="marker">貸与型は卒業後に返還が必要ですが、無利子で返還期間にも猶予制度</span>があります。</p><div class="note-box">日本学生支援機構（JASSO）の奨学金との併用が可能です。給付型は他の給付型奨学金との併給制限がある場合がありますので、事前に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-sme-support',
    title: '霧島市 中小企業振興補助金',
    organization: '霧島市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '鹿児島県',
    tags: ['霧島市', '中小企業', '補助金'],
    eligibility: '霧島市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '霧島市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路拡大にかかる経費を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う設備投資や販路拡大</span>に対して費用の一部を補助する制度です。</p><p>霧島市は温泉観光業に加え、農畜産物の加工業や焼酎醸造業など多様な産業が集積しています。鹿児島空港周辺には工業団地もあり、製造業の振興にも力を入れています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">新規設備の導入や展示会出展費用などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象事業"><p>生産性向上のための設備導入</p><p>展示会・商談会への出展</p><p>新商品・新サービスの開発</p><p>ECサイト構築等の販路拡大</p></div><p>霧島市役所商工振興課に事業計画書と申請書を提出します。審査を経て交付決定が行われます。</p><p><span class="marker">霧島商工会議所や各商工会を通じた事前相談がおすすめ</span>です。計画の段階から支援が受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備費、広告費、展示会出展費などが対象となります。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず交付決定を受けてから事業を実施してください。</p><div class="highlight-box">霧島市は「6次産業化」を推進しており、農産物の加工・販売に取り組む中小企業には特に手厚い支援があります。国や県の補助金との併用が可能な場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-nursing-equipment',
    title: '霧島市 介護用品支給事業',
    organization: '霧島市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '鹿児島県',
    tags: ['霧島市', '介護用品', '支給事業'],
    eligibility: '霧島市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '霧島市が実施する介護用品支給事業です。在宅で介護をしている家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>霧島市は高齢者が住み慣れた地域で安心して暮らし続けられるよう、在宅介護を支援するさまざまな事業を展開しています。介護者の経済的・身体的負担の軽減を図ることが目的です。</p><p><span class="marker-green">市民税非課税世帯が対象で、月額6,250円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>霧島市に住民登録があり、以下の要件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けている方を在宅で介護していること</p><p>介護を受ける方・介護をする方ともに市民税非課税世帯であること</p><p>介護を受ける方が在宅で生活していること（入院・入所中は対象外）</p></div><p>霧島市役所長寿・障害福祉課に申請書と介護保険被保険者証の写しを提出します。<strong>申請月の翌月分から支給開始</strong>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当</strong>の介護用品（紙おむつ、尿取りパッド、使い捨て手袋等）が支給されます。カタログから必要な商品を選択する方式です。</p><p><span class="marker">毎月の配達日は地域ごとに決まっており、届け先の変更も可能</span>です。</p><div class="note-box">入院や施設入所となった場合は支給が停止されます。要介護度が3以下に変更になった場合も対象外となりますので、介護認定の更新結果にご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-elderly-support',
    title: '霧島市 高齢者生活支援事業',
    organization: '霧島市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '鹿児島県',
    tags: ['霧島市', '高齢者支援', '生活支援'],
    eligibility: '霧島市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '霧島市が実施する高齢者生活支援事業です。ひとり暮らし高齢者等に対し、配食サービスや緊急通報システムの提供を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、日常生活を支援するさまざまなサービスを提供する制度です。</p><p>霧島市は山間部から市街地まで広範な地域に高齢者が暮らしており、見守りや生活支援のニーズが高い地域です。配食サービス、緊急通報システム、外出支援など複数のメニューで在宅生活を支えています。</p><p><span class="marker-green">配食サービスでは栄養バランスのとれた食事を1食あたり400円の補助付きで利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>配食サービス：栄養バランスのとれた食事の宅配と安否確認</p><p>緊急通報システム：ボタンひとつで消防署等に通報できる機器の設置</p><p>軽度生活援助：ゴミ出し、電球交換等の日常的な困りごと支援</p></div><p>霧島市役所長寿・障害福祉課または各総合支所の窓口で申請します。民生委員を通じた申請も可能です。</p><p><span class="marker">要介護認定を受けていない方でも利用できるサービスがあります</span>。まずはお気軽にご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり400円の補助</strong>があり、利用者負担は300〜400円程度です。緊急通報システムは月額利用料が所得に応じて0〜500円程度です。</p><p><span class="marker">サービスの利用には事前の申請・登録が必要</span>です。必要に応じて職員が自宅を訪問し、利用状況の確認を行います。</p><div class="note-box">霧島市では地域包括支援センターが総合的な相談窓口となっています。介護保険サービスとの組み合わせや、適切なサービスの選択について相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kirishima-seismic-diagnosis',
    title: '霧島市 住宅耐震診断助成制度',
    organization: '霧島市',
    type: 'local',
    maxAmount: '診断費用の全額補助',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '鹿児島県',
    tags: ['霧島市', '耐震診断', '防災'],
    eligibility: '霧島市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃',
    description: '霧島市が実施する住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>霧島市 住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>霧島市は活火山・霧島山を擁する地域であり、新燃岳の噴火活動も記憶に新しいところです。火山性地震への備えとして住宅の耐震性の確認は極めて重要です。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>霧島市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>所有者が居住していること</p></div><p>霧島市役所建築住宅課に申請書を提出すると、市が耐震診断士を派遣します。診断は<strong>1〜2時間程度の現地調査</strong>で完了します。</p><p><span class="marker">毎年の募集戸数に限りがあるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額市が負担</strong>するため、所有者の自己負担はありません。診断結果の報告書も無料で交付されます。</p><p><span class="marker">診断の結果、耐震性が不足と判定された場合は、耐震改修補助金（最大100万円）</span>を活用して改修工事を行うことができます。</p><div class="highlight-box">耐震診断は改修の第一歩です。霧島市では診断から改修まで一貫した支援体制を整えています。火山地域にお住まいの方は、まず診断を受けて自宅の耐震性を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city-kirishima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 北見市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kitami-childcare-subsidy',
    title: '北見市 保育料助成制度',
    organization: '北見市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['北見市', '保育料', '助成金'],
    eligibility: '北見市に住所を有し、保育所・認定こども園等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '北見市が実施する保育料助成制度です。第2子以降の保育料を無償化し、子育て世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 保育料助成制度は、<span class="marker">認可保育所・認定こども園等を利用する世帯</span>に対し、保育料の一部を助成する制度です。</p><p>オホーツク圏の中核都市である北見市は、ハッカ（薄荷）の生産地として世界的に知られた歴史を持ち、現在はたまねぎ生産量日本一の農業都市です。カーリングの街としても有名で、子育て環境の充実にも力を入れています。</p><p><span class="marker-green">第2子以降の保育料は無償化されており、きょうだいの年齢制限なく適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北見市に住民登録があり、認可保育施設を利用している子どもの保護者が対象です。</p><div class="summary-box" data-title="助成内容"><p>第1子：国基準の保育料から市独自の軽減あり</p><p>第2子以降：保育料無料</p><p>3歳以上児（幼児教育・保育の無償化対象）：保育料無料</p></div><p>保育所入所の手続き時に自動的に適用されるため、<strong>特別な申請手続きは原則不要</strong>です。世帯の変更がある場合は北見市役所子ども未来部に届出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>3歳未満の第1子の保育料</strong>は、世帯の市民税所得割額に基づき決定されます。国基準よりも低い北見市独自の保育料表が適用されます。</p><p><span class="marker">副食費（おかず代）は別途負担が必要ですが、年収360万円未満相当の世帯や第3子以降は免除</span>されます。</p><div class="note-box">北見市は広大な市域を持つため、保育施設へのアクセスに配慮した送迎バスの運行や、へき地保育所の維持にも取り組んでいます。認可外保育施設利用者向けの補助制度もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-birth-bonus',
    title: '北見市 出産祝金制度',
    organization: '北見市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['北見市', '出産祝金', '給付金'],
    eligibility: '北見市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '北見市が実施する出産祝金制度です。お子さんの誕生を祝い、出産にかかる経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 出産祝金制度は、<span class="marker">北見市に住民登録のある方が出産した際</span>に、子育て応援として祝金を支給する制度です。</p><p>北見市はオホーツク海に面した広大な市域を持ち、冬の厳しい寒さの中でも温かいコミュニティが育まれている街です。少子化対策として出産を祝い、子育ての初期費用を支援することで、安心して子どもを産み育てられる環境づくりに取り組んでいます。</p><p><span class="marker-green">第1子から支給対象で、第3子以降は増額</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日に北見市に住民登録があり、引き続き北見市に居住する意思のある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝金申請書（市窓口で入手）</p><p>母子健康手帳</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>出生届の提出後6か月以内に、北見市役所子ども未来部の窓口で申請してください。<strong>出生届と同時に手続きするのがスムーズ</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順に応じて設定されています。<strong>第1子・第2子は5万円、第3子以降は10万円</strong>が支給されます。</p><p><span class="marker">多胎児（双子・三つ子等）の場合は、それぞれの子について支給</span>されます。</p><div class="note-box">申請期限（出生後6か月以内）を過ぎると受給できませんのでご注意ください。国の出産育児一時金（50万円）や北海道の出産・子育て応援給付金とは別に受給可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-newlywed-rent',
    title: '北見市 新婚世帯家賃補助制度',
    organization: '北見市',
    type: 'local',
    maxAmount: '月額最大2万円（最長2年）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '北海道',
    tags: ['北見市', '新婚家賃', '補助金'],
    eligibility: '北見市内の賃貸住宅に居住する婚姻届提出後3年以内の世帯',
    applicationPeriod: '通年',
    description: '北見市が実施する新婚世帯家賃補助制度です。新婚世帯の家賃の一部を最長2年間補助し、定住を促進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 新婚世帯家賃補助制度は、<span class="marker">婚姻届を提出して3年以内の新婚世帯</span>に対し、市内の賃貸住宅の家賃の一部を補助する制度です。</p><p>北見市は北海道東部の中核都市として、若い世帯の定住促進に力を入れています。結婚を機に北見市での新生活をスタートする世帯の住居費負担を軽減し、安心して家庭を築けるよう支援しています。</p><p>補助額は<strong>月額最大2万円で、最長2年間（合計最大48万円）</strong>の支給です。<span class="marker-green">夫婦の合計年収が一定基準以下の世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出後3年以内であること</p><p>夫婦ともに北見市に住民登録があること</p><p>夫婦の合計年収が400万円未満であること</p><p>市内の民間賃貸住宅に居住していること</p><p>市税の滞納がないこと</p></div><p>北見市役所都市建設部住宅課に申請書と賃貸借契約書の写し、婚姻届受理証明書等を提出します。</p><p><span class="marker">年度ごとの申請が必要</span>で、毎年度更新の手続きを行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた額の<strong>2分の1以内で、月額上限2万円</strong>を最長2年間補助します。</p><p><span class="marker">公営住宅や社宅に居住している場合は対象外</span>です。また、親族が所有する住宅の賃貸も対象外となります。</p><div class="highlight-box">北見市では新婚世帯向けに住宅取得補助制度もあります。将来的にマイホームの購入を検討している新婚世帯は、賃貸の間はこの家賃補助を利用し、購入時には住宅取得補助を活用するプランがおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-disability-medical',
    title: '北見市 重度障害者医療費助成制度',
    organization: '北見市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['北見市', '障害者医療', '助成金'],
    eligibility: '北見市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '北見市が実施する重度障害者医療費助成制度です。重度の障害がある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 重度障害者医療費助成制度は、<span class="marker">重度の障害がある方の医療費自己負担分</span>を助成する制度です。</p><p>北見市では、障害のある方が安心して必要な医療を受けられるよう、医療費の助成を行っています。オホーツク圏の中核病院が集まる北見市は、医療アクセスの面で重要な役割を担っており、障害者の医療を支える体制を整えています。</p><p><span class="marker-green">通院・入院ともに保険診療の自己負担分が助成され、初診時一部負担金のみの負担</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北見市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級・2級・内部障害3級の方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p><p>65歳以上で後期高齢者医療に加入し、障害認定を受けた方</p></div><p>北見市役所保健福祉部障がい福祉課に申請書と障害者手帳、健康保険証を提出します。<strong>「重度障害者医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>医療機関ごとに<strong>初診時一部負担金（医科580円、歯科510円、柔整270円）のみ</strong>で受診できます。それ以上の自己負担分は市が助成します。</p><p><span class="marker">北海道内の医療機関では受給者証を提示するだけで助成が適用</span>されます。道外受診の場合は償還払いの手続きが必要です。</p><div class="note-box">入院時の食事療養費の自己負担は助成対象外です。所得が一定以上の方は助成の対象外となる場合がありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-school-lunch',
    title: '北見市 学校給食費助成制度',
    organization: '北見市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額無償',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '北海道',
    tags: ['北見市', '給食費', '教育支援'],
    eligibility: '北見市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '北見市が実施する学校給食費助成制度です。多子世帯の給食費を無償化し、子育て世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 学校給食費助成制度は、<span class="marker">北見市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を無償化する制度です。</p><p>北見市は広大な面積を持つ北海道東部の都市で、たまねぎをはじめとする農業が盛んな地域です。子育て世帯の経済的負担を軽減するため、多子世帯に対する給食費の助成を実施しています。</p><p><span class="marker-green">第3子以降の給食費が全額無償となり、出生順のカウントに上の子の年齢制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>北見市立小中学校に在籍する児童生徒の保護者であること</p><p>3人以上の子を扶養していること</p><p>第3子以降の子が市立小中学校で給食を喫食していること</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要事項を記入し、学校または北見市教育委員会学校教育部に提出してください。</p><p><span class="marker">年度途中の転入や出生による世帯構成変更の場合も随時申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の児童生徒の<strong>学校給食費が全額無償</strong>となります。小学校は月額約4,500円、中学校は月額約5,200円程度の給食費が免除されます。</p><p><span class="marker">就学援助制度との併用はできません</span>。就学援助を受給中の方は、就学援助での給食費支給が優先されます。</p><div class="note-box">アレルギー等により給食の提供を受けていない場合は対象外となります。北見市では地場産食材を使った給食づくりに力を入れており、北見産たまねぎは給食の人気メニューです。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-telework-bonus',
    title: '北見市 テレワーク導入支援補助金',
    organization: '北見市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '北海道',
    tags: ['北見市', 'テレワーク', '補助金'],
    eligibility: '北見市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '北見市が実施するテレワーク導入支援補助金です。テレワーク環境の整備にかかる経費を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 テレワーク導入支援補助金は、<span class="marker">市内の中小企業がテレワーク環境を整備する際の経費</span>を補助する制度です。</p><p>北見市は北海道東部の広域な市域を持ち、冬季の通勤が困難になるケースも少なくありません。テレワークの導入は従業員の働きやすさ向上だけでなく、人材確保や事業継続計画（BCP）の観点からも重要です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信機器やソフトウェア、セキュリティ対策費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象経費"><p>テレワーク用のパソコン・タブレット等の購入費</p><p>Web会議システムやクラウドサービスの導入費</p><p>VPN構築等のセキュリティ対策費</p><p>テレワーク就業規則の整備にかかるコンサルティング費</p></div><p>北見市役所商工観光部商工労政課に申請書と見積書を提出します。交付決定後に事業を実施してください。</p><p><span class="marker">事業完了後に実績報告書と領収書の提出が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者につき1回限りの利用となります。</p><p><span class="marker">交付決定前に購入した機器やサービスは補助対象外</span>です。必ず交付決定を受けてから経費を支出してください。</p><div class="highlight-box">北見市ではサテライトオフィスの設置支援やコワーキングスペースの運営も行っています。テレワーク導入と合わせて活用することで、柔軟な働き方環境をより充実させることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-nursing-home-reform',
    title: '北見市 介護住宅改修支援事業',
    organization: '北見市',
    type: 'local',
    maxAmount: '最大20万円（介護保険外）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['北見市', '介護住宅改修', '補助金'],
    eligibility: '北見市に住所を有する要介護・要支援認定を受けた方の家族',
    applicationPeriod: '通年',
    description: '北見市が実施する介護住宅改修支援事業です。介護保険の住宅改修費に上乗せして、バリアフリー改修を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 介護住宅改修支援事業は、<span class="marker">介護保険の住宅改修費制度に上乗せして</span>、在宅介護に必要な住宅のバリアフリー改修を支援する制度です。</p><p>北見市は冬場の積雪・凍結により高齢者の転倒リスクが高まる地域です。玄関の段差解消や手すりの設置、浴室・トイレの改修など、安全な在宅生活のための住宅改修を支援しています。</p><p>介護保険の住宅改修費（上限20万円・自己負担1〜3割）とは<span class="marker-green">別枠で最大20万円の補助</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取付け・段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器等への便器の取替え</p><p>浴室・脱衣所の改修</p></div><p>北見市役所保健福祉部介護福祉課に事前申請が必要です。ケアマネジャーと相談の上、改修計画を作成してください。</p><p><span class="marker">必ず工事着手前に申請してください</span>。事後申請は受付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の<strong>自己負担分を除いた額で、上限20万円</strong>です。介護保険の住宅改修費とあわせると、最大40万円の支援が受けられます。</p><p><span class="marker">市民税非課税世帯が優先的に適用されます</span>。課税世帯の場合は補助額が異なる場合があります。</p><div class="note-box">改修工事は北見市内の事業者に依頼することが推奨されています。北見市の冬季に対応した改修（玄関風除室の設置、暖房効率の改善等）についても相談可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-energy-support',
    title: '北見市 省エネルギー設備導入補助金',
    organization: '北見市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '北海道',
    tags: ['北見市', '省エネ', '補助金'],
    eligibility: '北見市に住所を有し、省エネルギー設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '北見市が実施する省エネルギー設備導入補助金です。太陽光発電や高効率給湯器等の導入費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 省エネルギー設備導入補助金は、<span class="marker">住宅に太陽光発電システムや高効率給湯器等の省エネ設備を導入する</span>市民に対し、費用の一部を補助する制度です。</p><p>北見市は冬季の暖房費が大きな家計負担となる寒冷地です。省エネ設備の普及により光熱費の削減と温室効果ガスの排出抑制を同時に実現することを目指しています。</p><p>補助額は設備の種類に応じて設定され、<strong>上限は20万円</strong>です。<span class="marker-green">太陽光発電、蓄電池、高効率給湯器が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限8万円）</p><p>家庭用蓄電池：上限10万円</p><p>高効率給湯器（エコキュート等）：上限5万円</p><p>ペレットストーブ：上限10万円</p></div><p>北見市役所市民環境部環境課に申請書と見積書を提出します。設備の設置前に申請が必要です。</p><p><span class="marker">年度ごとに予算が設定されており、先着順で受付</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>複数の設備を組み合わせて申請可能で、<strong>合計の上限は20万円</strong>です。設備設置後に実績報告書を提出し、補助金が交付されます。</p><p><span class="marker">設備の設置は市内の事業者に依頼することが条件</span>の場合があります。事前に確認してください。</p><div class="note-box">北見市は日照時間が比較的長い地域で、太陽光発電に適しています。国の補助金（住宅省エネキャンペーン等）と併用可能な場合もありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kitami-bousai-equipment',
    title: '北見市 防災設備設置補助金',
    organization: '北見市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['北見市', '防災設備', '補助金'],
    eligibility: '北見市に住所を有する住宅の所有者',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '北見市が実施する防災設備設置補助金です。住宅用火災警報器や感震ブレーカー等の防災設備の設置費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北見市 防災設備設置補助金は、<span class="marker">住宅に防災設備を新たに設置する際の費用</span>を補助する制度です。</p><p>北見市は広大な市域に市街地と農村地域が混在しており、災害時の対応力強化が課題です。特に冬季は暖房器具の使用による火災リスクが高まるため、住宅の防災設備の充実が重要です。</p><p>補助率は設置費用の2分の1で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカーや住宅用消火器等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備"><p>感震ブレーカー（分電盤タイプ）</p><p>住宅用消火器・エアゾール式簡易消火具</p><p>住宅用火災警報器（取替え含む）</p><p>家具転倒防止器具</p></div><p>北見市役所総務部防災危機管理課に申請書と見積書を提出します。設備の購入・設置前に申請が必要です。</p><p><span class="marker">1世帯につき年度内1回の申請</span>が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設置費用の2分の1以内で、<strong>上限5万円</strong>です。複数の防災設備を組み合わせて申請できます。</p><p><span class="marker">購入・設置のみで取付工事が不要なもの（消火器等）も対象</span>です。領収書を保管してください。</p><div class="note-box">北見市では自主防災組織への活動支援補助金も別途用意しています。地域の防災力を高めるため、個人の設備整備と合わせて地域活動への参加もおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitami.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 江別市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'ebetsu-childcare-subsidy',
    title: '江別市 保育料助成制度',
    organization: '江別市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['江別市', '保育料', '助成金'],
    eligibility: '江別市に住所を有し、保育所・認定こども園等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '江別市が実施する保育料助成制度です。第2子以降の保育料を無償化し、子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 保育料助成制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業</span>を利用する世帯に対し、保育料の一部を助成する制度です。</p><p>江別市は札幌市に隣接するベッドタウンで、レンガのまち・江別小麦のまちとして知られています。酪農学園大学や北翔大学など複数の大学が立地する学園都市でもあり、若い世帯の居住が多い地域です。</p><p><span class="marker-green">第2子以降の保育料は無償化されており、きょうだいの年齢に関係なく適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江別市に住民登録があり、認可保育施設を利用している子どもの保護者が対象です。</p><div class="summary-box" data-title="助成内容"><p>第1子：国基準の保育料から市独自の軽減あり</p><p>第2子以降：保育料無料</p><p>3歳以上児（幼児教育・保育の無償化対象）：保育料無料</p></div><p>保育所入所の手続き時に自動適用されるため、<strong>原則として特別な申請は不要</strong>です。世帯構成に変更があった場合は江別市役所子育て支援室へ届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>3歳未満の第1子の保育料</strong>は、世帯の市民税所得割額に応じて決定されます。江別市独自の保育料表が適用され、国基準より低い設定です。</p><p><span class="marker">副食費（おかず代）は別途負担が必要</span>ですが、年収360万円未満相当の世帯や第3子以降は免除されます。</p><div class="note-box">江別市は札幌市への通勤・通学が便利な立地で、市内にも複数の保育施設があります。待機児童解消のため、保育施設の整備も進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-birth-bonus',
    title: '江別市 出産祝金制度',
    organization: '江別市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['江別市', '出産祝金', '給付金'],
    eligibility: '江別市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '江別市が実施する出産祝金制度です。お子さんの誕生を祝い、出産費用の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 出産祝金制度は、<span class="marker">江別市に住民登録のある方が出産した際</span>に、祝金を支給する制度です。</p><p>江別市は札幌都市圏に位置しながら、自然環境に恵まれた子育てしやすい街です。野幌森林公園をはじめとする豊かな緑と、充実した子育て支援施設が魅力です。出産を祝い、安心して子育てに臨めるよう経済的な支援を行っています。</p><p><span class="marker-green">第1子から支給対象で、第3子以降は増額</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日に江別市に住民登録があり、引き続き江別市に居住する意思のある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝金申請書</p><p>母子健康手帳</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>出生届の提出後6か月以内に、江別市役所子育て支援室の窓口で申請してください。<strong>出生届と同時に手続きするのがおすすめ</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は出生順に応じて設定されています。<strong>第1子・第2子は5万円、第3子以降は10万円</strong>が支給されます。</p><p><span class="marker">多胎児の場合は、それぞれの子について支給</span>されます。</p><div class="note-box">申請期限（出生後6か月以内）を過ぎると受給できません。国の出産育児一時金や北海道の出産・子育て応援給付金とは別に受給可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-housing-purchase',
    title: '江別市 住宅取得支援補助金',
    organization: '江別市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '北海道',
    tags: ['江別市', '住宅取得', '補助金'],
    eligibility: '江別市内に新築または中古住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '江別市が実施する住宅取得支援補助金です。市内での住宅取得費用の一部を補助し、定住促進を図ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 住宅取得支援補助金は、<span class="marker">江別市内に新築住宅を建築または中古住宅を購入して定住する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>江別市は札幌市のベッドタウンとして発展し、JR函館本線で札幌駅まで約20分のアクセスの良さが魅力です。レンガ造りの歴史的景観と緑豊かな住環境を兼ね備えた、住みやすいまちとして人気があります。</p><p>基本補助額は<strong>30万円</strong>で、<span class="marker-green">子育て世帯や市外からの転入者には加算措置があり、最大50万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>江別市内に住宅を取得し、5年以上定住する意思があること</p><p>住宅の延べ床面積が50㎡以上であること</p><p>市税の滞納がないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>江別市役所建設部都市計画課に申請書と売買契約書の写し等を提出します。住宅の引き渡し後6か月以内の申請が必要です。</p><p><span class="marker">市外からの転入加算10万円、子育て世帯加算10万円で最大50万円</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額<strong>30万円</strong>に、市外転入加算10万円、子育て世帯加算10万円を加え、最大50万円です。</p><p><span class="marker">5年以内に転出した場合は補助金の返還が求められます</span>。</p><div class="highlight-box">江別市では「えべつ暮らしサポートセンター」が住まいの相談窓口となっています。空き家バンクも活用でき、中古住宅の取得でも補助を受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-infertility',
    title: '江別市 不妊治療費助成制度',
    organization: '江別市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '北海道',
    tags: ['江別市', '不妊治療', '助成金'],
    eligibility: '江別市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '江別市が実施する不妊治療費助成制度です。不妊治療にかかる費用の一部を助成し、子どもを望む夫婦を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 不妊治療費助成制度は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減する</span>ための助成制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、自己負担分や保険適用外の先進医療費は依然として家計の大きな負担です。江別市では、子どもを望む夫婦を市独自に支援するため、上乗せ助成を実施しています。</p><p><span class="marker-green">保険適用後の自己負担分および先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが江別市に住民登録があり、医療機関で不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の治療証明書</p><p>医療費の領収書の写し</p><p>夫婦の住民票</p></div><p>治療が終了した日から3か月以内に、江別市役所健康推進室に申請します。<strong>1年度につき1回の申請</strong>が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額と先進医療費に対し、<strong>1回の治療につき最大15万円</strong>が助成されます。</p><p><span class="marker">北海道の不妊治療費助成制度との併用が可能</span>です。道の助成を差し引いた残額が市の助成対象となります。</p><div class="note-box">事実婚のカップルも対象です。江別市は札幌市内の不妊治療専門クリニックへのアクセスが良く、通院の負担が比較的少ない立地です。男性不妊治療も助成対象に含まれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-scholarship',
    title: '江別市 奨学金制度',
    organization: '江別市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'education',
    prefecture: '北海道',
    tags: ['江別市', '奨学金', '教育支援'],
    eligibility: '江別市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '江別市が実施する奨学金制度です。経済的に修学が困難な学生に奨学金を支給・貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、奨学金を支給・貸与する制度です。</p><p>江別市は酪農学園大学、北翔大学、札幌学院大学など複数の大学が立地する学園都市です。教育環境の充実を重視しており、経済的な理由で進学を諦めることのないよう支援を行っています。</p><p><span class="marker-green">給付型と貸与型の2種類があり、学業成績と家計の状況により選考</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募要件"><p>保護者が江別市に住民登録があること</p><p>高等学校・大学・専修学校等に在学または入学予定であること</p><p>学業成績が一定基準以上であること</p><p>経済的に修学が困難であること</p></div><p>毎年3月から4月にかけて募集が行われます。江別市教育委員会に申請書と成績証明書、世帯の所得証明書等を提出してください。</p><p><span class="marker">定員に限りがあるため選考により決定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付型は<strong>高校生：月額1万円、大学生等：月額3万円</strong>が支給されます。貸与型は高校生：月額2万円、大学生等：月額4万円です。</p><p><span class="marker">貸与型は無利子で、卒業後の返還期間に猶予制度</span>があります。</p><div class="note-box">JASSOの奨学金との併用が可能です。江別市内の大学に通う場合は、各大学独自の奨学金制度も確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-sme-support',
    title: '江別市 中小企業振興補助金',
    organization: '江別市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '北海道',
    tags: ['江別市', '中小企業', '補助金'],
    eligibility: '江別市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '江別市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路拡大を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う設備投資や販路拡大事業</span>に対して費用の一部を補助する制度です。</p><p>江別市はレンガ産業の伝統を受け継ぎながら、食品加工業やIT産業も集積する多様な産業基盤を持っています。「江別小麦」を使ったパンや菓子の製造など、地域ブランドを活かした事業展開が盛んです。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">展示会出展費や新商品開発費が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象事業"><p>展示会・見本市への出展</p><p>新商品・新サービスの開発</p><p>ECサイト構築等の販路拡大</p><p>生産性向上のための設備導入</p></div><p>江別市役所経済部商工労働課に事業計画書と申請書を提出します。</p><p><span class="marker">江別商工会議所での事前相談がおすすめ</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定を受けてから事業を実施してください。</p><div class="highlight-box">江別市は「フード特区」として食関連産業の振興に注力しており、食品関連の新規事業には特に手厚い支援があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-nursing-equipment',
    title: '江別市 介護用品支給事業',
    organization: '江別市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['江別市', '介護用品', '支給事業'],
    eligibility: '江別市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '江別市が実施する介護用品支給事業です。在宅で介護をしている家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>江別市は札幌都市圏に位置し、地域包括ケアシステムの構築を進めています。在宅介護を行う家族の経済的負担を軽減し、住み慣れた地域で安心して暮らし続けられるよう支援しています。</p><p><span class="marker-green">市民税非課税世帯が対象で、月額6,250円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けている方を在宅で介護していること</p><p>介護を受ける方・介護をする方ともに市民税非課税世帯であること</p><p>介護を受ける方が在宅で生活していること</p></div><p>江別市役所健康福祉部介護保険課に申請書と介護保険被保険者証の写しを提出します。<strong>申請月の翌月分から支給開始</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当</strong>の介護用品（紙おむつ、尿取りパッド等）がカタログから選択して支給されます。</p><p><span class="marker">入院・施設入所中は支給が停止</span>されます。要介護度が3以下に変更になった場合も対象外です。</p><div class="note-box">江別市では地域包括支援センターが介護に関する総合相談窓口となっています。介護用品以外にも利用できるサービスの相談ができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-elderly-support',
    title: '江別市 高齢者生活支援事業',
    organization: '江別市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '北海道',
    tags: ['江別市', '高齢者支援', '生活支援'],
    eligibility: '江別市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '江別市が実施する高齢者生活支援事業です。ひとり暮らし高齢者等に配食サービスや緊急通報システムを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、日常生活を支援するサービスを提供する制度です。</p><p>江別市は札幌都市圏に位置しながらも、郊外には高齢化が進む地域もあります。冬季は積雪により外出が困難になることもあるため、配食サービスや緊急通報システムなどの生活支援が重要な役割を果たしています。</p><p><span class="marker-green">配食サービスでは安否確認を兼ねた食事の宅配が1食400円の補助付きで利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス：栄養バランスのとれた食事の宅配と安否確認</p><p>緊急通報システム：ボタンひとつで消防等に通報できる機器の設置</p><p>除雪サービス：冬季の自宅前除雪の支援</p></div><p>江別市役所健康福祉部介護保険課または地域包括支援センターで申請します。</p><p><span class="marker">要介護認定を受けていない方でも利用可能なサービスがあります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり400円の補助</strong>があり、利用者負担は300〜400円程度です。緊急通報システムは所得に応じて月額0〜500円程度です。</p><p><span class="marker">冬季の除雪サービスは江別市の特色ある支援</span>で、ひとり暮らし高齢者世帯に特に好評です。</p><div class="note-box">江別市では地域包括支援センターが総合的な相談窓口です。介護保険サービスとの組み合わせについても相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ebetsu-seismic-diagnosis',
    title: '江別市 住宅耐震診断助成制度',
    organization: '江別市',
    type: 'local',
    maxAmount: '診断費用の全額補助',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['江別市', '耐震診断', '防災'],
    eligibility: '江別市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃',
    description: '江別市が実施する住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江別市 住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>2018年の北海道胆振東部地震では江別市でも大きな揺れを観測し、住宅の耐震性への関心が高まりました。特に古い木造住宅の耐震性を確認し、必要な対策を講じることが重要です。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>江別市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>所有者が居住していること</p></div><p>江別市役所建設部建築指導課に申請書を提出します。市が耐震診断士を派遣し、<strong>1〜2時間程度の現地調査</strong>を実施します。</p><p><span class="marker">毎年の募集戸数に限りがあるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額市が負担</strong>するため、所有者の自己負担はありません。</p><p><span class="marker">診断の結果、耐震性不足と判定された場合は、耐震改修補助金を活用して改修工事を行うことができます</span>。</p><div class="highlight-box">北海道胆振東部地震の経験を踏まえ、江別市では液状化対策についても相談窓口を設けています。耐震診断と合わせて、地盤の状況も確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ebetsu.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 小樽市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'otaru-childcare-subsidy',
    title: '小樽市 保育料助成制度',
    organization: '小樽市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['小樽市', '保育料', '助成金'],
    eligibility: '小樽市に住所を有し、保育所・認定こども園等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '小樽市が実施する保育料助成制度です。第2子以降の保育料を無償化し、子育て世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 保育料助成制度は、<span class="marker">認可保育所・認定こども園等を利用する世帯</span>に対し、保育料の一部を助成する制度です。</p><p>北海道を代表する港町・小樽市は、小樽運河やガラス工芸、寿司の街として国内外から観光客が訪れる美しい街です。歴史的建造物が並ぶ街並みの中で、子育て世帯の定住促進に向けた支援にも力を入れています。</p><p><span class="marker-green">第2子以降の保育料は無償化され、きょうだいの年齢制限なく適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>小樽市に住民登録があり、認可保育施設を利用している子どもの保護者が対象です。</p><div class="summary-box" data-title="助成内容"><p>第1子：国基準の保育料から市独自の軽減あり</p><p>第2子以降：保育料無料</p><p>3歳以上児：保育料無料（国の無償化）</p></div><p>保育所入所手続き時に自動適用されるため、<strong>特別な申請は原則不要</strong>です。世帯構成の変更がある場合は小樽市役所こども未来部に届け出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>3歳未満の第1子の保育料</strong>は、世帯の市民税所得割額に基づき決定されます。小樽市独自の保育料表が適用されます。</p><p><span class="marker">副食費は別途負担が必要ですが、年収360万円未満相当の世帯や第3子以降は免除</span>されます。</p><div class="note-box">小樽市は坂の多い地形が特徴で、保育施設へのアクセスに配慮した送迎支援の充実にも取り組んでいます。認可外保育施設利用者向けの補助制度もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-birth-bonus',
    title: '小樽市 出産祝金制度',
    organization: '小樽市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['小樽市', '出産祝金', '給付金'],
    eligibility: '小樽市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '小樽市が実施する出産祝金制度です。出産を祝い、子育ての初期費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 出産祝金制度は、<span class="marker">小樽市に住民登録のある方が出産した際</span>に、祝金を支給する制度です。</p><p>小樽市は北海道有数の歴史的港町で、明治・大正期の建造物が多く残る情緒豊かな街です。人口減少・少子化対策として、出産時の経済的支援を通じて若い世帯が安心して子どもを産み育てられる環境づくりに取り組んでいます。</p><p><span class="marker-green">第1子から支給され、第3子以降は増額</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日に小樽市に住民登録があり、引き続き居住する意思のある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝金申請書</p><p>母子健康手帳</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>出生届の提出後6か月以内に、小樽市役所こども未来部の窓口で申請してください。<strong>出生届と同時の手続きが便利</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子・第2子は5万円、第3子以降は10万円</strong>です。</p><p><span class="marker">多胎児の場合はそれぞれの子について支給</span>されます。</p><div class="note-box">申請期限（出生後6か月以内）を過ぎると受給できません。国の出産育児一時金や北海道の出産・子育て応援給付金とは別に受給可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-newlywed-rent',
    title: '小樽市 新婚世帯家賃補助制度',
    organization: '小樽市',
    type: 'local',
    maxAmount: '月額最大2万円（最長2年）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '北海道',
    tags: ['小樽市', '新婚家賃', '補助金'],
    eligibility: '小樽市内の賃貸住宅に居住する婚姻届提出後3年以内の世帯',
    applicationPeriod: '通年',
    description: '小樽市が実施する新婚世帯家賃補助制度です。新婚世帯の家賃の一部を最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 新婚世帯家賃補助制度は、<span class="marker">婚姻届を提出して3年以内の新婚世帯</span>に対し、市内賃貸住宅の家賃の一部を補助する制度です。</p><p>小樽市はロマンチックな運河と歴史的建造物が美しい港町で、新生活のスタートにふさわしい魅力的な街です。若い世帯の定住を促進し、まちの活力を維持するため、住居費の負担軽減に取り組んでいます。</p><p>補助額は<strong>月額最大2万円で、最長2年間</strong>の支給です。<span class="marker-green">夫婦の合計年収が一定基準以下の世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出後3年以内であること</p><p>夫婦ともに小樽市に住民登録があること</p><p>夫婦の合計年収が400万円未満であること</p><p>市内の民間賃貸住宅に居住していること</p><p>市税の滞納がないこと</p></div><p>小樽市役所建設部住宅都市政策課に申請書と賃貸借契約書の写し等を提出します。</p><p><span class="marker">年度ごとの更新手続きが必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた額の<strong>2分の1以内で、月額上限2万円</strong>を最長2年間補助します。</p><p><span class="marker">公営住宅や社宅、親族所有の住宅は対象外</span>です。</p><div class="highlight-box">小樽市では歴史的建造物を活用したリノベーション住宅の取り組みも進んでいます。個性的な住まいを探している新婚世帯にとって、小樽ならではの魅力的な物件が見つかるかもしれません。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-disability-medical',
    title: '小樽市 重度障害者医療費助成制度',
    organization: '小樽市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['小樽市', '障害者医療', '助成金'],
    eligibility: '小樽市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '小樽市が実施する重度障害者医療費助成制度です。重度障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 重度障害者医療費助成制度は、<span class="marker">重度の障害がある方の医療費自己負担分</span>を助成する制度です。</p><p>小樽市は坂の多い地形が特徴で、障害のある方にとって移動のバリアが大きい地域です。医療費の負担を軽減することで、安心して必要な医療を受けられる環境を整えています。</p><p><span class="marker-green">通院・入院ともに初診時一部負担金のみで受診可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級・2級・内部障害3級の方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>小樽市役所福祉部障害福祉課に申請書と障害者手帳、健康保険証を提出します。<strong>「重度障害者医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>医療機関ごとに<strong>初診時一部負担金（医科580円、歯科510円、柔整270円）のみ</strong>で受診できます。</p><p><span class="marker">北海道内の医療機関では受給者証の提示で助成が適用</span>されます。道外受診は償還払いです。</p><div class="note-box">入院時の食事療養費は助成対象外です。所得が一定以上の方は助成対象外となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-school-lunch',
    title: '小樽市 学校給食費助成制度',
    organization: '小樽市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額無償',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '北海道',
    tags: ['小樽市', '給食費', '教育支援'],
    eligibility: '小樽市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '小樽市が実施する学校給食費助成制度です。多子世帯の給食費を無償化し、子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 学校給食費助成制度は、<span class="marker">小樽市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を無償化する制度です。</p><p>小樽市は寿司をはじめとする食文化が豊かな街で、学校給食にも地場産の新鮮な食材を活用しています。多子世帯の経済的負担を軽減し、すべての子どもが安心して学校生活を送れるよう支援しています。</p><p><span class="marker-green">第3子以降の給食費が全額無償で、上の子の年齢制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>小樽市立小中学校に在籍する児童生徒の保護者であること</p><p>3人以上の子を扶養していること</p><p>第3子以降の子が給食を喫食していること</p></div><p>毎年4月に学校を通じて案内されます。申請書を学校または小樽市教育委員会に提出してください。</p><p><span class="marker">年度途中の転入等でも随時申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の<strong>学校給食費が全額無償</strong>となります。小学校は月額約4,500円、中学校は月額約5,200円程度の免除です。</p><p><span class="marker">就学援助制度との併用はできません</span>。就学援助が優先されます。</p><div class="note-box">小樽市では地場産の海産物や野菜を使った給食づくりが特色です。アレルギー等で給食を喫食していない場合は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-telework-bonus',
    title: '小樽市 テレワーク導入支援補助金',
    organization: '小樽市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '北海道',
    tags: ['小樽市', 'テレワーク', '補助金'],
    eligibility: '小樽市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '小樽市が実施するテレワーク導入支援補助金です。テレワーク環境整備にかかる経費を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 テレワーク導入支援補助金は、<span class="marker">市内の中小企業がテレワーク環境を整備する際の経費</span>を補助する制度です。</p><p>小樽市は札幌市に隣接しながらも、冬季の積雪や坂道の多い地形により通勤の負担が大きい地域です。テレワークの導入により従業員の通勤負担を軽減し、人材確保と事業継続力の向上を図ります。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信機器、セキュリティ対策費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象経費"><p>テレワーク用パソコン・タブレット等の購入費</p><p>Web会議システムの導入費</p><p>VPN構築等のセキュリティ対策費</p><p>テレワーク就業規則のコンサルティング費</p></div><p>小樽市役所産業港湾部商業労政課に申請書と見積書を提出します。</p><p><span class="marker">交付決定後に事業を実施し、実績報告書を提出</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者1回限りです。</p><p><span class="marker">交付決定前の購入は補助対象外</span>です。</p><div class="highlight-box">小樽市では歴史的建造物を活用したコワーキングスペースやサテライトオフィスの整備も進めています。テレワーク環境と合わせて活用してみてはいかがでしょうか。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-nursing-home-reform',
    title: '小樽市 介護住宅改修支援事業',
    organization: '小樽市',
    type: 'local',
    maxAmount: '最大20万円（介護保険外）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['小樽市', '介護住宅改修', '補助金'],
    eligibility: '小樽市に住所を有する要介護・要支援認定を受けた方の家族',
    applicationPeriod: '通年',
    description: '小樽市が実施する介護住宅改修支援事業です。介護保険に上乗せして住宅のバリアフリー改修を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 介護住宅改修支援事業は、<span class="marker">介護保険の住宅改修費制度に上乗せして</span>、在宅介護に必要なバリアフリー改修を支援する制度です。</p><p>小樽市は坂の多い地形が特徴で、住宅内の段差や階段が高齢者にとって大きな障壁となっています。手すりの設置や段差解消など、安全な在宅生活のための改修を支援します。</p><p>介護保険の住宅改修費とは<span class="marker-green">別枠で最大20万円の補助</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取付け・段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>浴室・トイレの改修</p></div><p>小樽市役所福祉部介護保険課に事前申請が必要です。ケアマネジャーと相談の上、改修計画を作成してください。</p><p><span class="marker">必ず工事着手前に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の<strong>自己負担分を除いた額で、上限20万円</strong>です。</p><p><span class="marker">市民税非課税世帯が優先</span>されます。</p><div class="note-box">小樽市特有の坂道対策として、玄関アプローチの改修や冬季の凍結防止対策なども相談可能です。地域包括支援センターで総合的な相談ができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-energy-support',
    title: '小樽市 省エネルギー設備導入補助金',
    organization: '小樽市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '北海道',
    tags: ['小樽市', '省エネ', '補助金'],
    eligibility: '小樽市に住所を有し、省エネルギー設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '小樽市が実施する省エネルギー設備導入補助金です。太陽光発電や高効率給湯器等の導入費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 省エネルギー設備導入補助金は、<span class="marker">住宅に省エネ設備を導入する市民</span>に対し、費用の一部を補助する制度です。</p><p>小樽市は冬季の暖房費が大きな家計負担となる寒冷地です。高効率給湯器や断熱改修により光熱費の削減を図りながら、カーボンニュートラルの実現にも貢献できます。</p><p>補助額は設備の種類に応じて設定され、<strong>上限は20万円</strong>です。<span class="marker-green">高効率給湯器、ペレットストーブ、太陽光発電が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限8万円）</p><p>家庭用蓄電池：上限10万円</p><p>高効率給湯器（エコキュート等）：上限5万円</p><p>ペレットストーブ：上限10万円</p></div><p>小樽市役所生活環境部環境課に申請書と見積書を提出します。設備設置前の申請が必要です。</p><p><span class="marker">先着順で予算に達し次第終了</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>複数の設備を組み合わせて申請可能で、<strong>合計上限は20万円</strong>です。</p><p><span class="marker">設備設置後に実績報告書を提出</span>し、補助金が交付されます。</p><div class="note-box">国の住宅省エネキャンペーン等との併用が可能な場合があります。小樽市は海風の影響で冬の暖房負荷が大きいため、断熱改修との組み合わせが効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otaru-bousai-equipment',
    title: '小樽市 防災設備設置補助金',
    organization: '小樽市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['小樽市', '防災設備', '補助金'],
    eligibility: '小樽市に住所を有する住宅の所有者',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '小樽市が実施する防災設備設置補助金です。住宅の防災設備設置費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小樽市 防災設備設置補助金は、<span class="marker">住宅に防災設備を新たに設置する際の費用</span>を補助する制度です。</p><p>小樽市は急傾斜地が多く、豪雨や地震時の土砂災害リスクがある地域です。また、歴史的建造物が多い市街地では火災への備えも重要です。住宅の防災設備を充実させることで、市民の安全を守ります。</p><p>補助率は設置費用の2分の1で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカー、住宅用消火器、家具転倒防止器具が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備"><p>感震ブレーカー（分電盤タイプ）</p><p>住宅用消火器・エアゾール式簡易消火具</p><p>住宅用火災警報器（取替え含む）</p><p>家具転倒防止器具</p></div><p>小樽市役所総務部防災担当に申請書と見積書を提出します。設備の購入・設置前に申請が必要です。</p><p><span class="marker">1世帯年度内1回の申請</span>が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設置費用の2分の1以内で、<strong>上限5万円</strong>です。</p><p><span class="marker">複数設備の組み合わせ申請も可能</span>です。領収書の保管をお忘れなく。</p><div class="note-box">小樽市では急傾斜地の崩壊対策や津波ハザードマップの作成にも取り組んでいます。防災設備の設置と合わせて、お住まいの地域のハザードマップを確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.otaru.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 千歳市（北海道）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'chitose-childcare-subsidy',
    title: '千歳市 保育料助成制度',
    organization: '千歳市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['千歳市', '保育料', '助成金'],
    eligibility: '千歳市に住所を有し、保育所・認定こども園等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '千歳市が実施する保育料助成制度です。第2子以降の保育料を無償化し、子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 保育料助成制度は、<span class="marker">認可保育所・認定こども園等を利用する世帯</span>に対し、保育料の一部を助成する制度です。</p><p>新千歳空港を擁する千歳市は、北海道の空の玄関口として発展を続ける活力あるまちです。自衛隊の駐屯地があることでも知られ、若い世帯が多く住む人口増加傾向の都市です。支笏湖をはじめとする豊かな自然環境の中で、充実した子育て支援を提供しています。</p><p><span class="marker-green">第2子以降の保育料は無償化され、きょうだいの年齢に関係なく適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>千歳市に住民登録があり、認可保育施設を利用している子どもの保護者が対象です。</p><div class="summary-box" data-title="助成内容"><p>第1子：国基準から市独自の軽減あり</p><p>第2子以降：保育料無料</p><p>3歳以上児：保育料無料（国の無償化）</p></div><p>保育所入所手続き時に自動適用されるため、<strong>特別な申請は原則不要</strong>です。世帯構成の変更がある場合は千歳市役所こども福祉部に届出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>3歳未満の第1子の保育料</strong>は、世帯の市民税所得割額に基づき千歳市独自の保育料表で決定されます。</p><p><span class="marker">副食費は別途負担ですが、年収360万円未満相当の世帯や第3子以降は免除</span>されます。</p><div class="note-box">千歳市は人口増加が続く北海道内でも珍しい自治体で、保育施設の整備にも積極的に取り組んでいます。待機児童解消に向けた取り組みも進行中です。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-birth-bonus',
    title: '千歳市 出産祝金制度',
    organization: '千歳市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['千歳市', '出産祝金', '給付金'],
    eligibility: '千歳市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '千歳市が実施する出産祝金制度です。出産を祝い、子育ての初期費用を経済的に支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 出産祝金制度は、<span class="marker">千歳市に住民登録のある方が出産した際</span>に、祝金を支給する制度です。</p><p>千歳市は新千歳空港の所在地として全国とつながる利便性を持ちながら、支笏湖の美しい自然にも恵まれた住みやすい街です。北海道内でも高い出生率を誇り、さらなる子育て支援の充実を図っています。</p><p><span class="marker-green">第1子から支給対象で、第3子以降は増額</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日に千歳市に住民登録があり、引き続き居住する意思のある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝金申請書</p><p>母子健康手帳</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>出生届の提出後6か月以内に、千歳市役所こども福祉部こども政策課の窓口で申請してください。<strong>出生届と同時に手続きが可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子・第2子は5万円、第3子以降は10万円</strong>です。</p><p><span class="marker">多胎児はそれぞれの子について支給</span>されます。</p><div class="note-box">申請期限（出生後6か月以内）を過ぎると受給できません。国の出産育児一時金や北海道の給付金とは別に受給可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-housing-purchase',
    title: '千歳市 住宅取得支援補助金',
    organization: '千歳市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '北海道',
    tags: ['千歳市', '住宅取得', '補助金'],
    eligibility: '千歳市内に新築または中古住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '千歳市が実施する住宅取得支援補助金です。市内での住宅取得費用の一部を補助し、定住促進を図ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 住宅取得支援補助金は、<span class="marker">千歳市内に新築住宅を建築または中古住宅を購入して定住する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>千歳市は新千歳空港に隣接する交通利便性の高い都市で、半導体工場（ラピダス）の進出により大きな注目を集めています。住宅需要の増加に対応しつつ、多様な世帯の定住を促進するための支援を行っています。</p><p>基本補助額は<strong>30万円</strong>で、<span class="marker-green">子育て世帯加算・市外転入加算を含めると最大50万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>千歳市内に住宅を取得し、5年以上定住する意思があること</p><p>住宅の延べ床面積が50㎡以上であること</p><p>市税の滞納がないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>千歳市役所建設部都市整備課に申請書と関連書類を提出します。住宅引き渡し後6か月以内の申請が必要です。</p><p><span class="marker">市外転入加算10万円、子育て世帯加算10万円</span>があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額<strong>30万円</strong>に加算措置を加え、最大50万円です。</p><p><span class="marker">5年以内の転出は補助金返還の対象</span>です。</p><div class="highlight-box">千歳市はラピダスの進出により住宅需要が急増しています。早めの情報収集と住宅取得計画をおすすめします。空き家バンクも活用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-infertility',
    title: '千歳市 不妊治療費助成制度',
    organization: '千歳市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '北海道',
    tags: ['千歳市', '不妊治療', '助成金'],
    eligibility: '千歳市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '千歳市が実施する不妊治療費助成制度です。不妊治療費の一部を助成し、子どもを望む夫婦を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 不妊治療費助成制度は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減する</span>ための助成制度です。</p><p>千歳市は若い世帯の多い活力ある都市であり、子どもを望む夫婦への支援にも力を入れています。保険適用後の自己負担分や先進医療費について、市独自の上乗せ助成を行っています。</p><p><span class="marker-green">保険適用後の自己負担分および先進医療費が助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦の双方またはいずれかが千歳市に住民登録があり、不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の治療証明書</p><p>領収書の写し</p><p>住民票</p></div><p>治療終了後3か月以内に、千歳市役所健康こども部健康づくり課に申請します。<strong>年度内1回</strong>の申請が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>1回の治療につき最大15万円</strong>が助成されます。</p><p><span class="marker">北海道の助成制度との併用が可能</span>で、道の助成を差し引いた残額が市の助成対象です。</p><div class="note-box">事実婚のカップルも対象です。千歳市は札幌市内の不妊治療専門クリニックへのアクセスが良好です。男性不妊治療も助成対象に含まれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-scholarship',
    title: '千歳市 奨学金制度',
    organization: '千歳市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 48,
    category: 'education',
    prefecture: '北海道',
    tags: ['千歳市', '奨学金', '教育支援'],
    eligibility: '千歳市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '千歳市が実施する奨学金制度です。経済的に修学が困難な学生に奨学金を支給・貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 奨学金制度は、<span class="marker">経済的理由で修学が困難な高校生・大学生等</span>に対し、奨学金を支給・貸与する制度です。</p><p>千歳市には千歳科学技術大学や航空関連の専門学校があり、理工系の学びの機会が豊富です。経済的な理由で進学を諦めることのないよう、給付型・貸与型の奨学金を用意しています。</p><p><span class="marker-green">給付型と貸与型の2種類があり、学業成績と家計状況により選考</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募要件"><p>保護者が千歳市に住民登録があること</p><p>高等学校・大学・専修学校等に在学または入学予定であること</p><p>学業成績が一定基準以上であること</p><p>経済的に修学が困難であること</p></div><p>毎年3月〜4月に募集されます。千歳市教育委員会に申請書類を提出してください。</p><p><span class="marker">定員に限りがあり、選考により決定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付型は<strong>高校生：月額1万円、大学生等：月額3万円</strong>。貸与型は高校生：月額2万円、大学生等：月額4万円です。</p><p><span class="marker">貸与型は無利子で、返還期間に猶予制度</span>があります。</p><div class="note-box">JASSOの奨学金との併用が可能です。千歳科学技術大学への進学を検討している場合は、大学独自の奨学金制度も確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-sme-support',
    title: '千歳市 中小企業振興補助金',
    organization: '千歳市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '北海道',
    tags: ['千歳市', '中小企業', '補助金'],
    eligibility: '千歳市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '千歳市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路拡大を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う設備投資や販路拡大事業</span>に対して費用の一部を補助する制度です。</p><p>千歳市は新千歳空港を核とした物流拠点であり、半導体関連企業の集積が急速に進む産業都市です。ラピダスの進出に伴うサプライチェーン構築の機会を活かし、地元中小企業の成長を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">設備導入、展示会出展、新商品開発が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象事業"><p>生産性向上のための設備導入</p><p>展示会・商談会への出展</p><p>新商品・新サービスの開発</p><p>ECサイト構築等の販路拡大</p></div><p>千歳市役所産業振興部商業労働課に事業計画書と申請書を提出します。</p><p><span class="marker">千歳商工会議所での事前相談がおすすめ</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。</p><p><span class="marker">交付決定前の経費支出は対象外</span>です。</p><div class="highlight-box">千歳市はラピダス関連の半導体産業で注目されており、関連サプライチェーンへの参入を目指す中小企業には特に有益な補助金です。国や道の補助金との併用も検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-nursing-equipment',
    title: '千歳市 介護用品支給事業',
    organization: '千歳市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['千歳市', '介護用品', '支給事業'],
    eligibility: '千歳市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '千歳市が実施する介護用品支給事業です。在宅介護家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>千歳市は比較的若い世帯が多い都市ですが、高齢化の進行に伴い在宅介護のニーズも増加しています。介護者の経済的負担を軽減し、在宅介護を支援します。</p><p><span class="marker-green">市民税非課税世帯が対象で、月額6,250円相当の介護用品が支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>要介護4または5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方・する方ともに市民税非課税世帯であること</p><p>介護を受ける方が在宅生活していること</p></div><p>千歳市役所保健福祉部高齢者支援課に申請書と介護保険被保険者証の写しを提出します。<strong>翌月分から支給開始</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当</strong>の介護用品をカタログから選択して支給されます。</p><p><span class="marker">入院・施設入所中は支給停止</span>です。要介護度が3以下になった場合も対象外です。</p><div class="note-box">千歳市では地域包括支援センターが介護の総合相談窓口です。介護用品以外の支援についても相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-elderly-support',
    title: '千歳市 高齢者生活支援事業',
    organization: '千歳市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '北海道',
    tags: ['千歳市', '高齢者支援', '生活支援'],
    eligibility: '千歳市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '千歳市が実施する高齢者生活支援事業です。ひとり暮らし高齢者等に配食サービスや緊急通報システムを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、生活支援サービスを提供する制度です。</p><p>千歳市は自衛隊関係者の転出入が多い都市特性があり、定年退職後にひとり暮らしとなる高齢者への見守り支援が重要です。配食サービスや緊急通報システムにより、安心して暮らせる環境を整えています。</p><p><span class="marker-green">配食サービスは安否確認を兼ね、1食400円の補助付きで利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス：栄養バランスのとれた食事の宅配と安否確認</p><p>緊急通報システム：ボタンひとつで消防等に通報できる機器の設置</p><p>除雪サービス：冬季の自宅前除雪支援</p></div><p>千歳市役所保健福祉部高齢者支援課または地域包括支援センターで申請します。</p><p><span class="marker">要介護認定を受けていない方も利用可能なサービスがあります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり400円の補助</strong>があります。緊急通報システムは所得に応じた月額負担です。</p><p><span class="marker">冬季の除雪サービスは千歳市の特色ある支援</span>で、高齢者の冬の生活を支えています。</p><div class="note-box">千歳市では支笏湖地区など市域の広い地域にも対応した支援体制を整えています。地域包括支援センターで総合的にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chitose-seismic-diagnosis',
    title: '千歳市 住宅耐震診断助成制度',
    organization: '千歳市',
    type: 'local',
    maxAmount: '診断費用の全額補助',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '北海道',
    tags: ['千歳市', '耐震診断', '防災'],
    eligibility: '千歳市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃',
    description: '千歳市が実施する住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千歳市 住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>2018年の北海道胆振東部地震では千歳市でも震度6弱を観測し、住宅の耐震性への関心が大きく高まりました。旧耐震基準の木造住宅の安全性を確認し、必要な対策を講じることが急務です。</p><p><span class="marker-green">市が派遣する耐震診断士による無料診断が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>千歳市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>所有者が居住していること</p></div><p>千歳市役所建設部建築課に申請書を提出します。<strong>1〜2時間程度の現地調査</strong>で診断が完了します。</p><p><span class="marker">毎年の募集戸数に限りがあります</span>。早めの申請を。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断費用は全額市負担</strong>で、所有者の自己負担はありません。</p><p><span class="marker">耐震性不足と判定された場合は、耐震改修補助金を活用して改修工事が可能</span>です。</p><div class="highlight-box">北海道胆振東部地震では千歳市内でも液状化被害が発生しました。耐震診断と合わせて、地盤の状況も確認しておくことをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.chitose.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 弘前市（青森県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hirosaki-childcare-subsidy',
    title: '弘前市 保育料助成制度',
    organization: '弘前市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['弘前市', '保育料', '助成金'],
    eligibility: '弘前市に住所を有し、保育所・認定こども園等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '弘前市が実施する保育料助成制度です。第2子以降の保育料を無償化し、子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 保育料助成制度は、<span class="marker">認可保育所・認定こども園等を利用する世帯</span>に対し、保育料の一部を助成する制度です。</p><p>津軽地方の中心都市・弘前市は、弘前城の桜まつりとりんごの生産で全国的に知られています。弘前大学を擁する学術都市でもあり、若い世帯の定住と子育て支援に力を入れています。</p><p><span class="marker-green">第2子以降の保育料は無償化され、きょうだいの年齢制限なく適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>弘前市に住民登録があり、認可保育施設を利用している子どもの保護者が対象です。</p><div class="summary-box" data-title="助成内容"><p>第1子：国基準の保育料から市独自の軽減あり</p><p>第2子以降：保育料無料</p><p>3歳以上児：保育料無料（国の無償化）</p></div><p>保育所入所手続き時に自動適用されるため、<strong>特別な申請は原則不要</strong>です。世帯構成変更時は弘前市役所こども家庭課に届出てください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>3歳未満の第1子の保育料</strong>は世帯の市民税所得割額に基づき、弘前市独自の保育料表で決定されます。</p><p><span class="marker">副食費は別途負担ですが、年収360万円未満相当の世帯や第3子以降は免除</span>されます。</p><div class="note-box">弘前市はりんご農家をはじめとする農業従事者が多く、繁忙期の一時保育や病児保育の充実にも取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-birth-bonus',
    title: '弘前市 出産祝金制度',
    organization: '弘前市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['弘前市', '出産祝金', '給付金'],
    eligibility: '弘前市に住所を有し、出産した方',
    applicationPeriod: '出生届提出後〜6か月以内',
    description: '弘前市が実施する出産祝金制度です。出産を祝い、子育ての初期費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 出産祝金制度は、<span class="marker">弘前市に住民登録のある方が出産した際</span>に、祝金を支給する制度です。</p><p>弘前市は津軽富士と呼ばれる岩木山を望む城下町で、四季折々の美しい自然と伝統文化に恵まれた街です。人口減少・少子化への対策として、出産を祝い子育ての初期費用を支援することで、安心して子どもを産み育てられるまちづくりを推進しています。</p><p><span class="marker-green">第1子から支給対象で、第3子以降は増額</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出産日に弘前市に住民登録があり、引き続き居住する意思のある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>出産祝金申請書</p><p>母子健康手帳</p><p>振込先口座情報</p><p>本人確認書類</p></div><p>出生届の提出後6か月以内に、弘前市役所こども家庭課の窓口で申請してください。<strong>出生届と同時の手続きがスムーズ</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子・第2子は5万円、第3子以降は10万円</strong>です。</p><p><span class="marker">多胎児はそれぞれの子について支給</span>されます。</p><div class="note-box">申請期限（出生後6か月以内）を過ぎると受給できません。国の出産育児一時金や青森県の出産・子育て応援給付金とは別に受給可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-newlywed-rent',
    title: '弘前市 新婚世帯家賃補助制度',
    organization: '弘前市',
    type: 'local',
    maxAmount: '月額最大2万円（最長2年）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '青森県',
    tags: ['弘前市', '新婚家賃', '補助金'],
    eligibility: '弘前市内の賃貸住宅に居住する婚姻届提出後3年以内の世帯',
    applicationPeriod: '通年',
    description: '弘前市が実施する新婚世帯家賃補助制度です。新婚世帯の家賃の一部を最長2年間補助し、若い世帯の定住を促進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 新婚世帯家賃補助制度は、<span class="marker">婚姻届を提出して3年以内の新婚世帯</span>に対し、市内賃貸住宅の家賃の一部を補助する制度です。</p><p>弘前市は弘前城や桜まつりで知られる歴史と文化のまちです。弘前大学の学生が卒業後も弘前市に定住するケースを増やすべく、結婚を機に市内での新生活をスタートする世帯の住居費負担を軽減しています。</p><p>補助額は<strong>月額最大2万円で、最長2年間</strong>の支給です。<span class="marker-green">夫婦の合計年収が一定基準以下の世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出後3年以内であること</p><p>夫婦ともに弘前市に住民登録があること</p><p>夫婦の合計年収が400万円未満であること</p><p>市内の民間賃貸住宅に居住していること</p><p>市税の滞納がないこと</p></div><p>弘前市役所建設部建築住宅課に申請書と賃貸借契約書の写し等を提出します。</p><p><span class="marker">年度ごとの更新手続きが必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた額の<strong>2分の1以内で、月額上限2万円</strong>を最長2年間補助します。</p><p><span class="marker">公営住宅や社宅、親族所有の住宅は対象外</span>です。</p><div class="highlight-box">弘前市は城下町の趣ある物件から、りんご園に囲まれた郊外の住宅まで、多様な住まいの選択肢があります。弘前市の空き家バンクも合わせてチェックしてみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-disability-medical',
    title: '弘前市 重度障害者医療費助成制度',
    organization: '弘前市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '青森県',
    tags: ['弘前市', '障害者医療', '助成金'],
    eligibility: '弘前市に住所を有する重度障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '弘前市が実施する重度障害者医療費助成制度です。重度障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 重度障害者医療費助成制度は、<span class="marker">重度の障害がある方の医療費自己負担分</span>を助成する制度です。</p><p>弘前市は弘前大学医学部附属病院をはじめとする医療機関が集積する津軽地方の医療拠点です。障害のある方が経済的な不安なく必要な医療を受けられるよう、医療費の助成を行っています。</p><p><span class="marker-green">通院・入院ともに保険診療の自己負担分が助成されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級・2級の方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p><p>特別児童扶養手当1級の対象児</p></div><p>弘前市役所福祉部障がい福祉課に申請書と障害者手帳、健康保険証を提出します。<strong>「重度障害者医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が助成</strong>され、医療機関窓口での負担が軽減されます。</p><p><span class="marker">青森県内の医療機関では受給資格証の提示で助成が適用</span>されます。県外受診は償還払いです。</p><div class="note-box">入院時の食事療養費は助成対象外です。所得制限がある場合がありますので、詳しくは窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-school-lunch',
    title: '弘前市 学校給食費助成制度',
    organization: '弘前市',
    type: 'local',
    maxAmount: '第3子以降の給食費全額無償',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '青森県',
    tags: ['弘前市', '給食費', '教育支援'],
    eligibility: '弘前市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '弘前市が実施する学校給食費助成制度です。多子世帯の給食費を無償化し、教育費の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 学校給食費助成制度は、<span class="marker">弘前市立小中学校に在籍する第3子以降の児童生徒</span>の学校給食費を無償化する制度です。</p><p>弘前市は日本一のりんご生産地として知られ、学校給食にも地元産のりんごや津軽の食材がふんだんに使われています。多子世帯の教育費負担を軽減し、すべての子どもが健やかに育つ環境を整えています。</p><p><span class="marker-green">第3子以降の給食費が全額無償で、上の子の年齢制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>弘前市立小中学校に在籍する児童生徒の保護者であること</p><p>3人以上の子を扶養していること</p><p>第3子以降の子が給食を喫食していること</p></div><p>毎年4月に学校を通じて案内されます。申請書を学校または弘前市教育委員会に提出してください。</p><p><span class="marker">年度途中の転入等でも随時申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第3子以降の<strong>学校給食費が全額無償</strong>です。小学校は月額約4,500円、中学校は月額約5,200円程度の免除になります。</p><p><span class="marker">就学援助制度との併用はできません</span>。就学援助が優先されます。</p><div class="note-box">弘前市の給食では津軽の郷土料理や地場産りんごを使ったメニューが人気です。アレルギー等で給食を喫食していない場合は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-telework-bonus',
    title: '弘前市 テレワーク導入支援補助金',
    organization: '弘前市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '青森県',
    tags: ['弘前市', 'テレワーク', '補助金'],
    eligibility: '弘前市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '弘前市が実施するテレワーク導入支援補助金です。テレワーク環境整備の経費を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 テレワーク導入支援補助金は、<span class="marker">市内の中小企業がテレワーク環境を整備する際の経費</span>を補助する制度です。</p><p>弘前市は冬季に豪雪に見舞われる地域で、通勤が困難になるケースが少なくありません。テレワークの導入は従業員の安全確保と事業継続の観点から重要です。また、弘前大学の学生が地元企業にリモートで就職するきっかけにもなっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">通信機器やセキュリティ対策費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象経費"><p>テレワーク用パソコン・タブレット等の購入費</p><p>Web会議システムの導入費</p><p>VPN構築等のセキュリティ対策費</p><p>就業規則整備のコンサルティング費</p></div><p>弘前市役所商工労政課に申請書と見積書を提出します。</p><p><span class="marker">交付決定後に事業を実施し、実績報告書を提出</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。1事業者1回限りです。</p><p><span class="marker">交付決定前の購入は対象外</span>です。</p><div class="highlight-box">弘前市ではヒロロスクエアなど市内のコワーキングスペースの整備も進んでいます。冬季の豪雪時でもリモートワークができる環境があれば、事業の継続性が大きく向上します。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-nursing-home-reform',
    title: '弘前市 介護住宅改修支援事業',
    organization: '弘前市',
    type: 'local',
    maxAmount: '最大20万円（介護保険外）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '青森県',
    tags: ['弘前市', '介護住宅改修', '補助金'],
    eligibility: '弘前市に住所を有する要介護・要支援認定を受けた方の家族',
    applicationPeriod: '通年',
    description: '弘前市が実施する介護住宅改修支援事業です。介護保険に上乗せして住宅のバリアフリー改修を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 介護住宅改修支援事業は、<span class="marker">介護保険の住宅改修費制度に上乗せして</span>、在宅介護に必要なバリアフリー改修を支援する制度です。</p><p>弘前市は冬季の積雪が多く、住宅内の寒さや段差が高齢者にとって大きなリスクとなります。手すりの設置、段差解消、暖房設備の改善など、安全で快適な在宅生活のための改修を支援しています。</p><p>介護保険の住宅改修費とは<span class="marker-green">別枠で最大20万円の補助</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取付け・段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>浴室・トイレの改修</p><p>玄関の風除室設置</p></div><p>弘前市役所福祉部介護福祉課に事前申請が必要です。ケアマネジャーと相談の上、改修計画を作成してください。</p><p><span class="marker">必ず工事着手前に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の自己負担分を除いた額で、上限20万円</strong>です。</p><p><span class="marker">市民税非課税世帯が優先的に適用</span>されます。</p><div class="note-box">弘前市特有の寒冷地対策として、玄関風除室の設置や暖房効率の改善なども相談可能です。冬場のヒートショック対策は命に関わる重要な改修です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-energy-support',
    title: '弘前市 省エネルギー設備導入補助金',
    organization: '弘前市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '青森県',
    tags: ['弘前市', '省エネ', '補助金'],
    eligibility: '弘前市に住所を有し、省エネルギー設備を導入する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '弘前市が実施する省エネルギー設備導入補助金です。太陽光発電や高効率給湯器等の導入費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 省エネルギー設備導入補助金は、<span class="marker">住宅に省エネルギー設備を導入する市民</span>に対し、費用の一部を補助する制度です。</p><p>弘前市は冬季の暖房費が大きな家計負担となる豪雪地帯です。高効率給湯器やペレットストーブなど、暖房コストを削減できる設備の導入を促進しています。地元産の木質バイオマスを活用したペレットストーブは、りんご剪定枝の有効利用にもつながっています。</p><p>補助額は設備の種類に応じて設定され、<strong>上限は20万円</strong>です。<span class="marker-green">ペレットストーブ、太陽光発電、高効率給湯器が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限8万円）</p><p>家庭用蓄電池：上限10万円</p><p>高効率給湯器（エコキュート等）：上限5万円</p><p>ペレットストーブ：上限10万円</p></div><p>弘前市役所環境課に申請書と見積書を提出します。設備設置前の申請が必要です。</p><p><span class="marker">先着順で予算に達し次第終了</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>複数設備の組み合わせ申請が可能で、<strong>合計上限は20万円</strong>です。</p><p><span class="marker">設備設置後に実績報告書を提出</span>し、補助金が交付されます。</p><div class="note-box">弘前市ではりんご剪定枝を原料とした木質ペレットの製造が行われており、ペレットストーブは地産地消のエネルギー循環を実現する設備として注目されています。国の補助金との併用も検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirosaki-bousai-equipment',
    title: '弘前市 防災設備設置補助金',
    organization: '弘前市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '青森県',
    tags: ['弘前市', '防災設備', '補助金'],
    eligibility: '弘前市に住所を有する住宅の所有者',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '弘前市が実施する防災設備設置補助金です。住宅の防災設備設置費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>弘前市 防災設備設置補助金は、<span class="marker">住宅に防災設備を新たに設置する際の費用</span>を補助する制度です。</p><p>弘前市は豪雪地帯として知られ、冬季の暖房器具使用による火災リスクが高い地域です。また、岩木山の火山活動への備えも必要です。住宅の防災設備を充実させることで、市民の安全を確保します。</p><p>補助率は設置費用の2分の1で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカー、住宅用消火器、火災警報器が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象設備"><p>感震ブレーカー（分電盤タイプ）</p><p>住宅用消火器・エアゾール式簡易消火具</p><p>住宅用火災警報器（取替え含む）</p><p>家具転倒防止器具</p></div><p>弘前市役所総務部防災課に申請書と見積書を提出します。設備の購入・設置前に申請が必要です。</p><p><span class="marker">1世帯年度内1回の申請</span>が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は設置費用の2分の1以内で、<strong>上限5万円</strong>です。</p><p><span class="marker">複数設備の組み合わせ申請も可能</span>です。</p><div class="note-box">弘前市では冬季の暖房器具による火災が毎年発生しています。火災警報器の設置義務化から年数が経ち、電池切れや故障が増えていますので、この機会に取替えを検討しましょう。岩木山の火山防災マップも確認しておくことをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirosaki.aomori.jp/',
    publishedAt: '2026-03-12',
  },
];
