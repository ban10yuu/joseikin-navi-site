import { Grant } from '@/lib/types';

export const cityGrantsBatch59: Grant[] = [
  // ────────────────────────────────────────────────
  // 上越市（新潟県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'joetsu-childcare-subsidy',
    title: '上越市 子育て世帯応援給付金',
    organization: '上越市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '新潟県',
    tags: ['上越市', '子育て支援', '給付金'],
    eligibility: '上越市に住所を有し、18歳以下の児童を養育する世帯',
    applicationPeriod: '毎年4月〜翌年3月（通年）',
    description: '上越市が実施する子育て世帯応援給付金です。18歳以下の児童を養育する世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 子育て世帯応援給付金は、<span class="marker">18歳以下の児童を養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>上越市は新潟県南西部に位置し、日本有数の豪雪地帯として知られています。上杉謙信ゆかりの春日山城跡や直江津港を擁し、歴史と自然に恵まれた街です。冬季の暖房費や除雪費など、雪国ならではの子育てコストを考慮した支援を行っています。</p><p><span class="marker-green">所得制限なしで、上越市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>上越市に住民登録があり、18歳以下（18歳到達後の最初の3月31日まで）の児童を養育している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>児童の健康保険証または住民票</p><p>振込先口座情報</p></div><p>上越市役所こども課の窓口または郵送で申請できます。<strong>対象世帯には市から案内通知</strong>が届きますので、届いたら速やかに手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>児童1人あたり最大5万円</strong>が支給されます。多子世帯では第3子以降の加算がある場合もあります。</p><p><span class="marker">申請期限を過ぎると受給できなくなります</span>ので、通知が届いたら早めに手続きを行いましょう。</p><div class="note-box">給付金の支給時期は申請受理後約1か月程度です。DV避難中の方など、特別な事情がある場合は個別に対応しますので窓口にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-birth-bonus',
    title: '上越市 出産祝い金',
    organization: '上越市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '新潟県',
    tags: ['上越市', '出産祝い金', '子育て支援'],
    eligibility: '上越市に住所を有し、新たに子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '上越市が実施する出産祝い金制度です。新たにお子さんが生まれた世帯に、出生順に応じた祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 出産祝い金は、<span class="marker">上越市内で新たにお子さんが誕生した世帯</span>に対し、出産を祝福するとともに子育てにかかる初期費用を支援する制度です。</p><p>上越市は上杉謙信の城下町として栄えた歴史都市で、高田の桜や妙高連山の雄大な自然を望む暮らしやすい地域です。人口減少対策と子育て支援の一環として、出生児数に応じた段階的な祝い金を設けています。</p><p><span class="marker-green">第3子以降は20万円と手厚い支給額</span>が設定されており、多子世帯を積極的に応援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給額"><p>第1子：5万円</p><p>第2子：10万円</p><p>第3子以降：20万円</p></div><p>上越市に住民登録がある方で、出生届を提出した保護者が対象です。出生届の提出時に窓口で案内があります。</p><p><span class="marker">生後6か月以内に申請が必要</span>です。上越市役所こども課の窓口で、出生届と合わせて手続きすると効率的です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>出生順は<strong>同一世帯における養育児童数</strong>でカウントされます。双子の場合はそれぞれに支給されます。</p><p><span class="marker">申請日時点で上越市に住民登録があることが条件</span>です。出生届提出後に転出した場合は対象外となります。</p><div class="highlight-box">上越市では出産祝い金のほか、妊婦健診費用の助成や産後ケア事業も充実しています。特に豪雪期の通院支援として、冬季の妊婦タクシー利用助成も実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-housing-purchase',
    title: '上越市 住宅取得支援補助金',
    organization: '上越市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '新潟県',
    tags: ['上越市', '住宅取得', '補助金'],
    eligibility: '上越市内に新たに住宅を取得する方（新築・中古を含む）',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '上越市が実施する住宅取得支援補助金です。市内での住宅取得に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 住宅取得支援補助金は、<span class="marker">上越市内に新たに住宅を取得する方</span>に対して費用の一部を補助する制度です。</p><p>上越市は北陸新幹線の上越妙高駅が開業し、首都圏へのアクセスが大幅に向上しました。広大な市域に多様な居住エリアがあり、海沿いの直江津地区から山間の中郷地区まで、ライフスタイルに合った住まい選びが可能です。</p><p>補助額は基本30万円で、<strong>子育て世帯や市外からの転入者には加算</strong>があり、<span class="marker-green">最大50万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>上越市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>上越市役所都市整備課に申請書と売買契約書（または建築請負契約書）、住民票などを提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。新築・中古ともに対象ですが、親族間売買は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、以下の加算があります。子育て世帯加算10万円、市外からの転入加算10万円で、<strong>最大50万円</strong>です。</p><p><span class="marker">豪雪地帯ならではの克雪住宅（屋根融雪設備付き等）も対象</span>となります。雪下ろしの負担が少ない住宅を選ぶのも上越暮らしのポイントです。</p><div class="note-box">5年以内に転出した場合は補助金の返還が求められます。また、住宅ローン減税など国の制度とは併用可能ですが、県の類似補助との併用は制限がある場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-infertility',
    title: '上越市 不妊治療費助成制度',
    organization: '上越市',
    type: 'local',
    maxAmount: '1回あたり最大10万円（年2回まで）',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '新潟県',
    tags: ['上越市', '不妊治療', '助成金'],
    eligibility: '上越市に住所を有し、不妊治療を受けている夫婦（事実婚含む）',
    applicationPeriod: '治療終了後3か月以内（通年受付）',
    description: '上越市が実施する不妊治療費助成制度です。不妊治療にかかる費用の一部を、1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 不妊治療費助成制度は、<span class="marker">不妊治療を受けている夫婦（事実婚含む）</span>に対し、治療費の自己負担を軽減する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、保険適用外の先進医療や、保険診療の自己負担分は依然として大きな経済的負担となります。上越市では、安心して治療に取り組めるよう独自の上乗せ助成を行っています。</p><p><span class="marker-green">所得制限は設けられておらず、上越市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦のいずれかが上越市に住民登録があり、医療機関で不妊治療を受けていることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>領収書の原本</p><p>夫婦の住民票（事実婚の場合は戸籍謄本も）</p></div><p>上越市役所健康づくり推進課に申請します。<span class="marker">治療が終了した日から3か月以内</span>に提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用治療の自己負担分および先進医療費に対し、<strong>1回の治療あたり最大10万円</strong>を助成します。年2回まで申請可能です。</p><p><span class="marker">新潟県の不妊治療費助成との併用が可能</span>ですが、助成額の合計が実際の自己負担額を超えないよう調整されます。</p><div class="highlight-box">上越市では不妊治療に関する相談窓口も設けており、治療の悩みや経済的不安について専門スタッフに相談できます。男性不妊治療も助成の対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-scholarship',
    title: '上越市 奨学金制度',
    organization: '上越市',
    type: 'local',
    maxAmount: '月額最大3万円（返還不要）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '新潟県',
    tags: ['上越市', '奨学金', '教育支援'],
    eligibility: '上越市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '上越市が実施する給付型奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、給付型の奨学金を支給する制度です。</p><p>上越市には上越教育大学をはじめとする教育機関があり、教育を重視する風土が根づいています。上杉謙信の「義」の精神を受け継ぎ、次世代の人材育成に投資する取り組みの一つがこの奨学金制度です。</p><p><span class="marker-green">返還不要の給付型</span>で、学業に専念できるよう経済的な不安を解消します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が上越市に住所を有すること</p><p>高等学校、大学、短大、専門学校等に在学または入学予定であること</p><p>学業成績が一定以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年3月〜4月に上越市教育委員会に申請します。在学証明書、成績証明書、所得証明書などの提出が必要です。</p><p><span class="marker">募集人数には定員があるため、早めの申請をおすすめします</span>。選考は書類審査により行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生：月額1万円、大学生等：月額3万円</strong>が目安です。正規の修業年限まで受給できます。</p><p><span class="marker">他の給付型奨学金との併用は制限される場合があります</span>。日本学生支援機構の貸与型奨学金との併用は可能です。</p><div class="note-box">休学・退学した場合は奨学金の支給が停止されます。成績の著しい低下があった場合も見直しの対象となりますので、学業に励んでください。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-sme-support',
    title: '上越市 中小企業振興補助金',
    organization: '上越市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '新潟県',
    tags: ['上越市', '中小企業支援', '補助金'],
    eligibility: '上越市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '上越市が実施する中小企業振興補助金です。設備投資や販路開拓にかかる費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 中小企業振興補助金は、<span class="marker">市内中小企業の設備投資や販路開拓</span>にかかる経費を補助する制度です。</p><p>上越市は直江津港を拠点とした物流業や、地酒・味噌などの食品加工業、精密機器製造業が集積する産業都市です。北陸新幹線の開業で首都圏との結びつきが強まり、新たなビジネスチャンスが生まれています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">製造業の生産性向上設備やDX推進のためのIT導入も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>上越市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>対象事業の実施計画書を提出できること</p><p>事業完了後に実績報告書を提出すること</p></div><p>上越市役所産業政策課に申請書と事業計画書を提出します。審査により交付が決定されます。</p><p><span class="marker">交付決定前に着手した事業は対象外</span>です。必ず交付決定を受けてから事業を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。生産設備、IT機器、展示会出展費、広告宣伝費などが対象です。</p><p><span class="marker">年度内に事業を完了し、実績報告を行う必要があります</span>。事業の遅延が見込まれる場合は早めに相談しましょう。</p><div class="highlight-box">上越市商工会議所や上越市産業振興センターでは、経営相談や専門家派遣事業も実施しています。補助金申請のサポートも受けられますので、まずは相談窓口を活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-nursing-equipment',
    title: '上越市 介護用品支給事業',
    organization: '上越市',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '新潟県',
    tags: ['上越市', '介護用品', '支給事業'],
    eligibility: '上越市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '上越市が実施する介護用品支給事業です。在宅介護を行う家族に対し、紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつや尿取りパッドなどの介護用品を支給する制度です。</p><p>上越市は広大な市域を持ち、中山間地域では通所介護施設へのアクセスが困難な地域もあります。在宅介護の負担を少しでも軽減するため、日常的に必要な消耗品を現物支給しています。</p><p><span class="marker-green">市民税非課税世帯が優先的に支給対象</span>となり、在宅介護を支える大切な支援です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>上越市に住民登録がある方で、在宅で要介護4または5の認定を受けた高齢者を常時介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書の写し</p><p>世帯の課税状況がわかる書類</p></div><p>上越市役所高齢者支援課または各区総合事務所で申請できます。<strong>年度途中からの申請も可能</strong>ですが、支給額は月割り計算となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>紙おむつ、尿取りパッド、使い捨て手袋などを<strong>年間最大6万円相当</strong>まで支給します。カタログから必要な商品を選択できます。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。在宅介護に戻った場合は再度申請できます。</p><div class="note-box">介護用品のほか、上越市では家族介護慰労金や介護リフレッシュ事業（介護者の一時休息支援）も実施しています。冬季の除雪支援と組み合わせることで、雪国での在宅介護をトータルで支えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-elderly-support',
    title: '上越市 高齢者見守り・生活支援事業',
    organization: '上越市',
    type: 'local',
    maxAmount: '緊急通報装置無償貸与・除雪費助成最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '新潟県',
    tags: ['上越市', '高齢者支援', '見守り'],
    eligibility: '上越市に住所を有する65歳以上の一人暮らし高齢者等',
    applicationPeriod: '通年',
    description: '上越市が実施する高齢者見守り・生活支援事業です。一人暮らし高齢者に緊急通報装置の貸与や除雪費の助成を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 高齢者見守り・生活支援事業は、<span class="marker">65歳以上の一人暮らし高齢者や高齢者のみ世帯</span>に対し、安心して在宅生活を送れるよう支援する事業です。</p><p>上越市は日本有数の豪雪地帯であり、冬季の除雪は高齢者にとって大きな負担です。本事業では緊急通報装置の無償貸与に加え、屋根の雪下ろしや玄関前の除雪にかかる費用の助成も行っています。</p><p><span class="marker-green">見守りサービスと除雪支援を組み合わせた、雪国ならではの総合的な高齢者支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援メニュー"><p>緊急通報装置の無償貸与（ボタン一つで消防・救急に通報）</p><p>除雪費助成（屋根雪下ろし・生活道路確保）最大5万円</p><p>配食サービス（安否確認を兼ねた食事の配達）</p><p>軽度生活支援（ごみ出し・買い物代行等）</p></div><p>上越市役所高齢者支援課または地域包括支援センターで申請を受け付けています。民生委員を通じての申請も可能です。</p><p><span class="marker">まずは地域包括支援センターにご相談ください</span>。必要な支援を総合的にコーディネートしてもらえます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>除雪費助成は<strong>1シーズンあたり最大5万円</strong>です。緊急通報装置は無償貸与で、月額利用料もかかりません。</p><p><span class="marker">除雪費助成は市民税非課税世帯が優先</span>されます。生活保護受給世帯は別途制度がありますのでご確認ください。</p><div class="highlight-box">上越市では地域の見守りネットワーク（新聞配達員・郵便局員等との連携）も構築されています。異変に気づいた際の通報体制が整っており、安心して暮らせる環境づくりを進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-seismic-diagnosis',
    title: '上越市 木造住宅耐震診断助成事業',
    organization: '上越市',
    type: 'local',
    maxAmount: '耐震診断費用の自己負担ほぼ無料（最大5万円助成）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '新潟県',
    tags: ['上越市', '耐震診断', '防災'],
    eligibility: '上越市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '上越市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用をほぼ全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>上越市は2004年の中越地震、2007年の中越沖地震など、過去に大きな地震被害を経験した新潟県に位置しています。積雪荷重を考慮した耐震性の確保が特に重要であり、まず現状を把握するための耐震診断を推進しています。</p><p><span class="marker-green">診断費用の自己負担はわずか数千円程度</span>で、気軽に耐震性を確認できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建物の要件"><p>上越市内に所在する木造住宅（在来軸組工法）であること</p><p>1981年5月31日以前に着工されたものであること</p><p>2階建て以下であること</p><p>所有者が居住していること</p></div><p>上越市役所建築住宅課に申請します。市が派遣する耐震診断士が訪問し、建物の調査を行います。</p><p><span class="marker">年間の受付件数に限りがありますので、早めにお申し込みください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用のうち、<strong>最大5万円を市が助成</strong>します。実質的な自己負担は数千円程度です。</p><p><span class="marker">診断の結果、耐震性が不足している場合は耐震改修補助金（別制度）の利用が可能</span>です。</p><div class="note-box">豪雪地帯である上越市では、積雪荷重が建物に与える影響も大きな課題です。耐震診断では雪の荷重も考慮した評価が行われます。診断結果をもとに、まずは簡易な補強から始めることも可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 岐阜市（岐阜県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'gifu-city-childcare-subsidy',
    title: '岐阜市 子育て世帯応援給付金',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '岐阜県',
    tags: ['岐阜市', '子育て支援', '給付金'],
    eligibility: '岐阜市に住所を有し、18歳以下の児童を養育する世帯',
    applicationPeriod: '毎年4月〜翌年3月（通年）',
    description: '岐阜市が実施する子育て世帯応援給付金です。18歳以下の児童を養育する世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 子育て世帯応援給付金は、<span class="marker">18歳以下の児童を養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>岐阜市は岐阜県の県庁所在地で、金華山の岐阜城や長良川の鵜飼で全国的に知られています。名古屋市へのアクセスも良好で、豊かな自然と都市機能が両立する子育てしやすい環境が整っています。</p><p><span class="marker-green">所得制限なしで、岐阜市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岐阜市に住民登録があり、18歳以下（18歳到達後の最初の3月31日まで）の児童を養育している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>児童の健康保険証または住民票</p><p>振込先口座情報</p></div><p>岐阜市役所子ども支援課の窓口または郵送で申請できます。<strong>対象世帯には市から案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>児童1人あたり最大5万円</strong>が支給されます。多子世帯には追加の加算がある場合もあります。</p><p><span class="marker">申請期限を過ぎると受給できなくなりますので、通知が届いたら早めに手続き</span>を行いましょう。</p><div class="note-box">支給時期は申請受理後約1か月程度です。岐阜市では子育て世帯向けの情報を「ぎふし子育て応援アプリ」でも配信しており、給付金の案内もアプリで確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-birth-bonus',
    title: '岐阜市 出産祝い金',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '岐阜県',
    tags: ['岐阜市', '出産祝い金', '子育て支援'],
    eligibility: '岐阜市に住所を有し、新たに子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '岐阜市が実施する出産祝い金制度です。新たにお子さんが生まれた世帯に、出生順に応じた祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 出産祝い金は、<span class="marker">岐阜市内で新たにお子さんが誕生した世帯</span>に対し、出産の祝福と子育て費用の支援を行う制度です。</p><p>岐阜市は1300年以上の歴史を持つ長良川鵜飼の伝統が息づく城下町です。織田信長が天下統一の足がかりとした岐阜城を見上げながら、次世代を担う子どもたちの誕生を祝い、支援する取り組みを充実させています。</p><p><span class="marker-green">第3子以降は20万円の手厚い支給額</span>で、多子世帯を積極的に応援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給額"><p>第1子：5万円</p><p>第2子：10万円</p><p>第3子以降：20万円</p></div><p>岐阜市に住民登録がある方で、出生届を提出した保護者が対象です。出生届の提出時に窓口で案内を受けられます。</p><p><span class="marker">生後6か月以内に申請が必要</span>です。岐阜市役所子ども支援課の窓口で手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>出生順は<strong>同一世帯における養育児童数</strong>でカウントされます。双子以上の多胎児はそれぞれに支給されます。</p><p><span class="marker">申請日時点で岐阜市に住民登録があることが条件</span>です。出生届提出後に市外へ転出した場合は対象外となります。</p><div class="highlight-box">岐阜市では出産祝い金のほか、「ぎふっこカード」による子育て割引サービスや、産前産後のヘルパー派遣事業も実施しています。子育ての総合的なサポートが充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-newlywed-rent',
    title: '岐阜市 新婚世帯家賃補助制度',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '月額最大3万円（最長2年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '岐阜県',
    tags: ['岐阜市', '新婚支援', '家賃補助'],
    eligibility: '岐阜市内の賃貸住宅に居住する婚姻届提出後1年以内の新婚世帯',
    applicationPeriod: '婚姻届提出後6か月以内（通年受付）',
    description: '岐阜市が実施する新婚世帯家賃補助制度です。新婚世帯の家賃を月額最大3万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 新婚世帯家賃補助制度は、<span class="marker">婚姻届を提出して1年以内の新婚世帯</span>に対し、市内の賃貸住宅の家賃を補助する制度です。</p><p>岐阜市は名古屋駅からJRで約20分というアクセスの良さに加え、長良川沿いの豊かな自然環境や充実した子育て支援があり、若い世帯に人気の居住エリアです。新婚期の住居費負担を軽減し、岐阜市への定住を促進する狙いがあります。</p><p>月額最大3万円を<strong>最長2年間</strong>補助し、<span class="marker-green">夫婦の合計所得が基準額以下の世帯</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出後1年以内であること</p><p>夫婦ともに岐阜市内の賃貸住宅に居住していること</p><p>夫婦の合計所得が400万円未満であること</p><p>市税を滞納していないこと</p></div><p>岐阜市役所住宅課に申請書、婚姻届受理証明書、賃貸借契約書の写し、所得証明書を提出します。</p><p><span class="marker">婚姻届の提出後6か月以内に申請が必要</span>です。遡っての申請はできませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃（共益費を除く）に対して<strong>月額最大3万円</strong>を補助します。補助期間は<strong>最長2年間</strong>です。</p><p><span class="marker">市内転居した場合は新しい住所で再申請が必要</span>です。市外に転出した場合は補助が終了します。</p><div class="note-box">家賃が3万円以下の場合は実際の家賃額が上限となります。公営住宅に入居している場合は対象外です。岐阜市では新婚世帯向けの住宅購入補助制度もあり、将来的なマイホーム取得もサポートしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-disability-medical',
    title: '岐阜市 障がい者医療費助成制度',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '岐阜県',
    tags: ['岐阜市', '障がい者医療', '助成金'],
    eligibility: '岐阜市に住所を有する身体障害者手帳1〜3級、療育手帳A・B判定等の方',
    applicationPeriod: '通年',
    description: '岐阜市が実施する障がい者医療費助成制度です。障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 障がい者医療費助成制度は、<span class="marker">身体障害者手帳や療育手帳をお持ちの方</span>を対象に、保険診療の自己負担分を助成する制度です。</p><p>岐阜市はバリアフリーのまちづくりを推進しており、障がいのある方が安心して暮らせる環境整備に力を入れています。医療費の経済的負担を取り除くことで、必要な治療を躊躇なく受けられるよう支援しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>で、窓口での負担が大幅に軽減されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1〜3級の方</p><p>療育手帳A・B判定の方</p><p>精神障害者保健福祉手帳1・2級の方</p><p>自閉症状群と診断された方</p></div><p>岐阜市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、振込先口座情報が必要です。</p><p><span class="marker">手帳の交付と同時に手続きするのがスムーズ</span>です。転入の方は転入届と合わせて申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。岐阜県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は一旦支払い後、償還払いの手続き</span>が必要です。領収書を保管してください。</p><div class="note-box">65歳以上で新たに障害者手帳を取得した方は、後期高齢者医療制度への加入が条件となる場合があります。保険適用外の費用（差額ベッド代、文書料等）は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-school-lunch',
    title: '岐阜市 学校給食費補助制度',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '給食費の半額〜全額補助（年間最大約5万円）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '岐阜県',
    tags: ['岐阜市', '給食費', '教育支援'],
    eligibility: '岐阜市立小中学校に在籍する児童生徒の保護者で、多子世帯または経済的に困窮する世帯',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '岐阜市が実施する学校給食費補助制度です。多子世帯や経済的に困窮する世帯の給食費を半額〜全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 学校給食費補助制度は、<span class="marker">多子世帯や経済的に困窮する世帯</span>に対し、市立小中学校の給食費を補助する制度です。</p><p>岐阜市は「食育」に力を入れており、地元産の食材を活用した栄養バランスの良い学校給食を提供しています。長良川の鮎や美濃地方の野菜など、地域の豊かな食文化を子どもたちに伝える大切な場でもあります。</p><p><span class="marker-green">第3子以降の児童生徒は給食費が全額補助</span>されるなど、多子世帯への支援が手厚くなっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の区分"><p>第3子以降の児童生徒：給食費全額補助</p><p>就学援助認定世帯：給食費全額補助</p><p>第2子の児童生徒：給食費半額補助（所得要件あり）</p></div><p>毎年4月に学校を通じて案内が配布されます。多子世帯の補助は申請書を学校に提出するだけで手続きが完了します。</p><p><span class="marker">年度途中の転入や家計急変の場合も随時申請可能</span>です。岐阜市教育委員会学校給食課にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は月額約4,500円、中学校は月額約5,200円で、<strong>全額補助の場合は年間約5万円〜6万円相当</strong>の負担軽減となります。</p><p><span class="marker">「第何子」のカウントは、18歳以下の児童で同一世帯にいる子どもの人数</span>で判定されます。</p><div class="highlight-box">岐阜市では給食費補助のほか、食物アレルギーへの対応や、学校給食のレシピ公開など、給食を通じた子育て支援を幅広く展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-telework-bonus',
    title: '岐阜市 テレワーク推進補助金',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '岐阜県',
    tags: ['岐阜市', 'テレワーク', '補助金'],
    eligibility: '岐阜市内に事業所を有する中小企業で、テレワーク環境を新たに整備する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '岐阜市が実施するテレワーク推進補助金です。中小企業のテレワーク環境整備に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 テレワーク推進補助金は、<span class="marker">市内中小企業がテレワーク環境を新たに整備する際の費用</span>を補助する制度です。</p><p>岐阜市は名古屋市への通勤圏内でありながら自然豊かな居住環境を備えており、テレワークとの親和性が高い都市です。柔軟な働き方を推進することで、人材確保や生産性向上、ワークライフバランスの改善を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">VPN、クラウドサービス、Web会議システム等が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>岐阜市内に事業所を有する中小企業であること</p><p>新たにテレワーク環境を整備すること（既存設備の更新は対象外）</p><p>テレワーク実施計画を策定していること</p><p>市税を滞納していないこと</p></div><p>岐阜市役所商工課に申請書とテレワーク実施計画書を提出します。</p><p><span class="marker">導入前の申請が必須</span>です。すでに購入・契約済みの機器やサービスは対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。パソコン、タブレット、通信機器、ソフトウェアライセンス料（初年度分）が対象です。</p><p><span class="marker">個人事業主も対象</span>ですが、従業員のいない一人親方の場合は対象外となることがあります。</p><div class="note-box">岐阜市では市内のコワーキングスペースの利用促進事業も行っており、テレワークに適した施設の紹介も受けられます。岐阜商工会議所でもDX推進の相談が可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-nursing-home-reform',
    title: '岐阜市 介護住宅改修補助金',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '岐阜県',
    tags: ['岐阜市', '介護改修', '補助金'],
    eligibility: '岐阜市に住所を有し、要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年（事前申請制）',
    description: '岐阜市が実施する介護住宅改修補助金です。バリアフリー改修に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 介護住宅改修補助金は、<span class="marker">要介護・要支援認定を受けた方の自宅をバリアフリーに改修する費用</span>を補助する制度です。</p><p>岐阜市は高齢化率が上昇する中、住み慣れた自宅で安心して生活を続けられるよう、住環境の改善を支援しています。手すりの設置や段差解消、引き戸への変更など、日常生活の安全性を高める改修が対象です。</p><p>介護保険の住宅改修費（上限20万円）に<strong>市独自の上乗せ補助</strong>を行い、<span class="marker-green">合わせて最大40万円</span>の住宅改修が可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置等）</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取替え</p><p>洋式便器等への便器の取替え</p></div><p>岐阜市役所介護保険課に事前に相談し、改修計画を提出します。ケアマネジャーとの連携が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。事後申請は認められません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の補助として<strong>上限20万円</strong>が支給されます。介護保険の住宅改修費と合わせて利用できます。</p><p><span class="marker">1つの住宅につき1回の利用が原則</span>ですが、要介護度が3段階以上上がった場合は再度利用できることがあります。</p><div class="highlight-box">改修工事はケアマネジャーや理学療法士のアドバイスを受けながら計画するのが効果的です。岐阜市では住宅改修の事業者紹介も行っていますので、窓口でお尋ねください。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-energy-support',
    title: '岐阜市 省エネ家電買替支援事業',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '岐阜県',
    tags: ['岐阜市', '省エネ', '家電補助'],
    eligibility: '岐阜市に住所を有し、省エネ性能の高い家電に買い替える個人',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '岐阜市が実施する省エネ家電買替支援事業です。省エネ性能の高いエアコンや冷蔵庫への買替えに最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 省エネ家電買替支援事業は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買替え</span>にかかる費用の一部を補助する制度です。</p><p>岐阜市は夏場の気温が非常に高く、全国の最高気温を記録することもある猛暑の街です。エアコンは生活必需品であり、電気代の負担も大きくなります。最新の省エネ家電への買替えを支援し、光熱費の削減とCO2排出量の抑制を同時に実現する取り組みです。</p><p><span class="marker-green">統一省エネラベル4つ星以上の製品が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電と補助額"><p>エアコン（統一省エネラベル4つ星以上）：最大3万円</p><p>冷蔵庫（統一省エネラベル4つ星以上）：最大2万円</p><p>合計で1世帯あたり最大5万円</p></div><p>岐阜市内の販売店で対象製品を購入し、領収書と製品のカタログを添えて岐阜市役所環境政策課に申請します。</p><p><span class="marker">購入後3か月以内の申請が必要</span>です。先着順で予算に達し次第終了します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額はエアコンが<strong>最大3万円</strong>、冷蔵庫が<strong>最大2万円</strong>で、合計最大5万円です。</p><p><span class="marker">岐阜市内の販売店での購入に限ります</span>（ネット通販は対象外）。市内の経済循環にも貢献する制度設計です。</p><div class="note-box">買替え前の古い家電のリサイクル費用は補助対象外です。省エネ家電の選び方がわからない場合は、販売店のスタッフに省エネラベルの見方を教えてもらいましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-bousai-equipment',
    title: '岐阜市 家庭用防災設備購入補助金',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '岐阜県',
    tags: ['岐阜市', '防災', '設備補助'],
    eligibility: '岐阜市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '岐阜市が実施する家庭用防災設備購入補助金です。感震ブレーカーや家具転倒防止器具等の購入に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 家庭用防災設備購入補助金は、<span class="marker">家庭における地震・水害等の防災対策</span>として設備を購入する費用の一部を補助する制度です。</p><p>岐阜市は長良川をはじめとする河川沿いに市街地が広がっており、水害リスクへの備えが重要です。また、南海トラフ巨大地震への備えとして、家庭内の安全対策を推進しています。感震ブレーカーや家具転倒防止器具、止水板などが補助対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">高齢者世帯・障がい者世帯には補助率の優遇</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>感震ブレーカー（地震時に自動で電源を遮断）</p><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>止水板（浸水防止用）</p><p>蓄電池・ポータブル電源</p></div><p>岐阜市役所防災対策課に申請書と見積書（または領収書）を提出します。購入前・購入後のいずれでも申請可能です。</p><p><span class="marker">1世帯1回の利用に限られます</span>。設置工事が必要な場合は施工費も対象となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。高齢者のみ世帯は補助率が3分の2に引き上げられます。</p><p><span class="marker">感震ブレーカーは消防庁が推奨する型式のものが対象</span>です。事前に対象機種を確認してから購入しましょう。</p><div class="note-box">岐阜市では自主防災組織向けの防災資機材購入補助も別途実施しています。個人の備えと地域の備えの両面から防災力を高める取り組みが進んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大垣市（岐阜県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'ogaki-childcare-subsidy',
    title: '大垣市 子育て世帯応援給付金',
    organization: '大垣市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '岐阜県',
    tags: ['大垣市', '子育て支援', '給付金'],
    eligibility: '大垣市に住所を有し、18歳以下の児童を養育する世帯',
    applicationPeriod: '毎年4月〜翌年3月（通年）',
    description: '大垣市が実施する子育て世帯応援給付金です。18歳以下の児童を養育する世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 子育て世帯応援給付金は、<span class="marker">18歳以下の児童を養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>大垣市は「水の都」として知られ、市内各所に湧き水スポットがある美しい街です。松尾芭蕉の「奥の細道」むすびの地としても有名で、歴史と水に恵まれた環境の中で子育て支援を充実させています。</p><p><span class="marker-green">所得制限なしで、大垣市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大垣市に住民登録があり、18歳以下（18歳到達後の最初の3月31日まで）の児童を養育している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>児童の健康保険証または住民票</p><p>振込先口座情報</p></div><p>大垣市役所子育て支援課の窓口または郵送で申請できます。<strong>対象世帯には市から案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>児童1人あたり最大5万円</strong>が支給されます。多子世帯への追加加算がある場合もあります。</p><p><span class="marker">申請期限を過ぎると受給権が消滅します</span>ので、通知が届いたら早めに手続きしてください。</p><div class="note-box">大垣市では「子育て日本一のまち」を目指し、この給付金のほかにも多様な子育て支援策を実施しています。大垣市子育て総合支援センターでワンストップの相談が可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-birth-bonus',
    title: '大垣市 出産祝い金',
    organization: '大垣市',
    type: 'local',
    maxAmount: '第1子3万円・第2子5万円・第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '岐阜県',
    tags: ['大垣市', '出産祝い金', '子育て支援'],
    eligibility: '大垣市に住所を有し、新たに子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '大垣市が実施する出産祝い金制度です。新たにお子さんが生まれた世帯に、出生順に応じた祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 出産祝い金は、<span class="marker">大垣市内で新たにお子さんが誕生した世帯</span>に対し、出産を祝福し子育て費用の一部を支援する制度です。</p><p>大垣市は良質な地下水が豊富で、「水の都」として古くから人々に親しまれてきました。芭蕉も旅の終着地としたこの街で、新しい命の誕生をお祝いする温かい支援制度が用意されています。</p><p><span class="marker-green">第3子以降は10万円と手厚い支給額</span>で、多子世帯を応援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給額"><p>第1子：3万円</p><p>第2子：5万円</p><p>第3子以降：10万円</p></div><p>大垣市に住民登録がある方で、出生届を提出した保護者が対象です。出生届の提出と同時に窓口で案内を受けられます。</p><p><span class="marker">生後6か月以内に申請が必要</span>です。大垣市役所子育て支援課で手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>出生順は<strong>同一世帯で養育する児童数</strong>でカウントされます。双子の場合はそれぞれに支給されます。</p><p><span class="marker">申請日時点で大垣市に住民登録があることが条件</span>です。出生後に転出した場合は対象外となります。</p><div class="highlight-box">大垣市では出産祝い金のほか、産後ヘルパー派遣事業や子育て支援アプリ「おおがき子育てナビ」など、出産前後の総合的なサポートが充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-housing-purchase',
    title: '大垣市 住宅取得支援補助金',
    organization: '大垣市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '岐阜県',
    tags: ['大垣市', '住宅取得', '補助金'],
    eligibility: '大垣市内に新たに住宅を取得する方（新築・中古を含む）',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '大垣市が実施する住宅取得支援補助金です。市内での住宅取得に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 住宅取得支援補助金は、<span class="marker">大垣市内に新たに住宅を取得する方</span>に対して費用の一部を補助する制度です。</p><p>大垣市は名古屋市から東海道本線で約30分の距離にあり、通勤利便性と居住環境の良さを兼ね備えたベッドタウンです。水の都らしく市内各所に湧き水があり、水辺の散策路も整備されています。</p><p>補助額は基本20万円で、<strong>子育て世帯加算や市外からの転入加算</strong>があり、<span class="marker-green">最大30万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大垣市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>大垣市役所都市計画課に申請書と売買契約書、住民票等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。新築・中古いずれも対象ですが、親族間取引は除外されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>です。子育て世帯加算5万円、市外からの転入加算5万円で、<strong>最大30万円</strong>となります。</p><p><span class="marker">5年以内に転出した場合は補助金の返還</span>が求められます。</p><div class="note-box">大垣市は市街化区域内に空き家が増加しており、中古住宅の取得やリノベーションにも力を入れています。空き家バンクとの併用で、お得に住宅を取得できるケースもあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-infertility',
    title: '大垣市 不妊治療費助成制度',
    organization: '大垣市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '岐阜県',
    tags: ['大垣市', '不妊治療', '助成金'],
    eligibility: '大垣市に住所を有し、不妊治療を受けている夫婦（事実婚含む）',
    applicationPeriod: '治療終了後3か月以内（通年受付）',
    description: '大垣市が実施する不妊治療費助成制度です。不妊治療にかかる費用の一部を、1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 不妊治療費助成制度は、<span class="marker">不妊治療を受けている夫婦（事実婚含む）</span>に対し、治療費の自己負担を軽減する制度です。</p><p>大垣市は「子育て日本一」を掲げ、妊娠前の段階から切れ目のない支援を行っています。保険適用の治療に加え、先進医療にかかる費用も助成の対象とし、安心して治療に専念できる環境を整えています。</p><p><span class="marker-green">所得制限なしで、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦のいずれかが大垣市に住民登録がある方で、医療機関で不妊治療を受けていることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>領収書の原本</p><p>夫婦の住民票</p></div><p>大垣市役所健康推進課に申請します。<span class="marker">治療終了日から3か月以内</span>に提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用治療の自己負担分および先進医療費に対し、<strong>1回の治療あたり最大10万円</strong>を助成します。</p><p><span class="marker">岐阜県の不妊治療費助成制度との併用が可能</span>ですが、合計が自己負担額を超えない範囲で調整されます。</p><div class="highlight-box">大垣市では不妊・不育症に関する専門相談窓口を設けています。治療の悩みだけでなく、仕事と治療の両立についても相談可能です。男性不妊治療も対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-scholarship',
    title: '大垣市 奨学金制度',
    organization: '大垣市',
    type: 'local',
    maxAmount: '月額最大3万円（返還不要）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '岐阜県',
    tags: ['大垣市', '奨学金', '教育支援'],
    eligibility: '大垣市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '大垣市が実施する給付型奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、給付型の奨学金を支給する制度です。</p><p>大垣市は情報工房や図書館など文化教育施設が充実しており、学びの環境づくりに積極的な街です。「水の都」の名の通り、清らかな水のように澄んだ学びの機会を次世代に提供することを目指しています。</p><p><span class="marker-green">返還不要の給付型奨学金</span>で、学業への集中を経済面からサポートします。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が大垣市に住所を有すること</p><p>高等学校、大学、短大、専門学校等に在学または入学予定であること</p><p>学業成績が一定以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年3月〜4月に大垣市教育委員会に申請します。成績証明書、所得証明書等の提出が必要です。</p><p><span class="marker">定員があり選考制</span>です。早めに準備して申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生：月額1万5千円、大学生等：月額3万円</strong>が目安です。正規の修業年限まで受給できます。</p><p><span class="marker">他の給付型奨学金との併用は制限される場合があります</span>。</p><div class="note-box">休学・退学した場合は支給が停止されます。大垣市では奨学金のほか、入学準備金の貸付制度もあり、経済的な事情で進学を諦めなくてよい環境づくりを進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-sme-support',
    title: '大垣市 中小企業経営支援補助金',
    organization: '大垣市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '岐阜県',
    tags: ['大垣市', '中小企業支援', '補助金'],
    eligibility: '大垣市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '大垣市が実施する中小企業経営支援補助金です。設備投資や販路開拓に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 中小企業経営支援補助金は、<span class="marker">市内中小企業の設備投資や販路開拓</span>にかかる費用を補助する制度です。</p><p>大垣市は「ソフトピアジャパン」を中心としたIT産業の集積地であり、ものづくり企業も多数立地する産業都市です。中小企業の生産性向上やDX推進を支援し、地域経済の競争力強化を図っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">IT導入や生産設備の更新も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>大垣市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>年度内に事業を完了すること</p></div><p>大垣市役所商工観光課に申請書と事業計画書を提出します。</p><p><span class="marker">交付決定前に着手した事業は対象外</span>です。必ず交付決定後に事業を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。設備購入費、IT導入費、展示会出展費、広告宣伝費が対象です。</p><p><span class="marker">人件費や運転資金は対象外</span>です。消費税も補助対象外となります。</p><div class="highlight-box">大垣市商工会議所では経営相談や専門家派遣を無料で実施しています。ソフトピアジャパンではIT企業向けの創業・経営支援も行っており、補助金と合わせて活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-nursing-equipment',
    title: '大垣市 介護用品支給事業',
    organization: '大垣市',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '岐阜県',
    tags: ['大垣市', '介護用品', '支給事業'],
    eligibility: '大垣市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '大垣市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつや尿取りパッドなどの介護用品を支給する制度です。</p><p>大垣市は高齢者が住み慣れた地域で安心して暮らし続けられるよう、在宅介護への支援を充実させています。水の都ならではの温かいコミュニティの力を活かしながら、介護する家族の負担軽減に取り組んでいます。</p><p><span class="marker-green">市民税非課税世帯が優先</span>で、在宅介護を支える重要な支援です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大垣市に住民登録がある方で、在宅で要介護4または5の高齢者を常時介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書の写し</p><p>世帯の課税状況がわかる書類</p></div><p>大垣市役所介護保険課または各地域事務所で申請します。<strong>年度途中からの申請も可能</strong>ですが、支給額は月割りとなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>紙おむつ、尿取りパッド、使い捨て手袋等を<strong>年間最大6万円相当</strong>まで支給します。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。退院後に在宅介護に戻った場合は再申請できます。</p><div class="note-box">大垣市では介護用品支給のほか、家族介護者のリフレッシュ事業（介護者の休息支援）や認知症カフェの運営も行っています。介護の悩みは地域包括支援センターに気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-elderly-support',
    title: '大垣市 高齢者生活支援事業',
    organization: '大垣市',
    type: 'local',
    maxAmount: '緊急通報装置無償貸与・配食サービス等（年間最大3万円相当）',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '岐阜県',
    tags: ['大垣市', '高齢者支援', '生活支援'],
    eligibility: '大垣市に住所を有する65歳以上の一人暮らし高齢者等',
    applicationPeriod: '通年',
    description: '大垣市が実施する高齢者生活支援事業です。一人暮らし高齢者に緊急通報装置の貸与や配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 高齢者生活支援事業は、<span class="marker">65歳以上の一人暮らし高齢者や高齢者のみの世帯</span>に対し、安心して在宅生活を送れるよう支援する事業です。</p><p>大垣市は古くからの地域コミュニティが根付いた街で、地域の見守り活動が盛んです。それでもカバーしきれない部分を行政サービスで補い、緊急通報装置の貸与や安否確認を兼ねた配食サービスなどを提供しています。</p><p><span class="marker-green">複数の支援メニューを組み合わせて利用することが可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援メニュー"><p>緊急通報装置の無償貸与（24時間対応）</p><p>配食サービス（栄養バランスの取れた食事を配達・安否確認付き）</p><p>軽度生活支援（買い物代行、ゴミ出し支援等）</p></div><p>大垣市役所高齢介護課または地域包括支援センターで申請を受け付けています。</p><p><span class="marker">まずは地域包括支援センターに相談してください</span>。必要な支援を一緒に考えてもらえます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置は<strong>無償貸与</strong>（月額利用料も無料）です。配食サービスは1食あたりの自己負担が数百円程度に抑えられています。</p><p><span class="marker">生活保護受給世帯は別途制度がありますのでご確認ください</span>。</p><div class="highlight-box">大垣市では地域のボランティアによる見守り訪問や、民生委員との連携による安否確認体制も整備されています。行政サービスと地域の支え合いで、安心して暮らせる環境づくりを進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-seismic-diagnosis',
    title: '大垣市 木造住宅耐震診断助成事業',
    organization: '大垣市',
    type: 'local',
    maxAmount: '耐震診断費用の自己負担ほぼ無料（最大5万円助成）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '岐阜県',
    tags: ['大垣市', '耐震診断', '防災'],
    eligibility: '大垣市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '大垣市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>大垣市は揖斐川・杭瀬川沿いの低地に位置し、南海トラフ巨大地震が発生した場合には液状化のリスクも指摘されています。まず現状の耐震性を把握することが防災の第一歩であり、診断費用のほぼ全額を市が負担する形で推進しています。</p><p><span class="marker-green">自己負担はわずか数千円程度</span>で、気軽に診断を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建物の要件"><p>大垣市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された建物であること</p><p>2階建て以下であること</p><p>所有者が居住していること</p></div><p>大垣市役所都市計画課に申請書を提出します。市が派遣する耐震診断士が現地調査を行います。</p><p><span class="marker">年間の受付件数に上限がありますので、お早めにお申し込みください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断にかかる費用のうち<strong>最大5万円を市が助成</strong>し、自己負担は数千円程度です。</p><p><span class="marker">診断結果で耐震性不足と判定された場合は、耐震改修補助金（別制度）が利用可能</span>です。</p><div class="note-box">大垣市は水害リスクも高い地域のため、耐震対策と合わせて水害対策（止水板設置等）もご検討ください。市のハザードマップで自宅周辺のリスクを確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 四日市市（三重県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'yokkaichi-childcare-subsidy',
    title: '四日市市 子育て世帯応援給付金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '三重県',
    tags: ['四日市市', '子育て支援', '給付金'],
    eligibility: '四日市市に住所を有し、18歳以下の児童を養育する世帯',
    applicationPeriod: '毎年4月〜翌年3月（通年）',
    description: '四日市市が実施する子育て世帯応援給付金です。18歳以下の児童を養育する世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 子育て世帯応援給付金は、<span class="marker">18歳以下の児童を養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>四日市市は三重県最大の都市で、石油化学コンビナートを有する工業都市として発展してきました。かつての公害問題を克服し、現在は環境と産業が調和するまちづくりを進めています。充実した税収を背景に、子育て支援施策にも積極的に取り組んでいます。</p><p><span class="marker-green">所得制限なしで、四日市市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>四日市市に住民登録があり、18歳以下（18歳到達後の最初の3月31日まで）の児童を養育している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>児童の健康保険証または住民票</p><p>振込先口座情報</p></div><p>四日市市役所こども未来課の窓口または郵送で申請します。<strong>対象世帯には市から案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>児童1人あたり最大5万円</strong>が支給されます。多子世帯への追加加算がある場合もあります。</p><p><span class="marker">申請期限を過ぎると受給できません</span>。通知が届いたら速やかに手続きしてください。</p><div class="note-box">四日市市は中京工業地帯の中核都市として雇用環境が安定しており、子育て世帯の転入も増加傾向にあります。給付金のほかにも多様な子育て支援が用意されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-birth-bonus',
    title: '四日市市 出産祝い金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '三重県',
    tags: ['四日市市', '出産祝い金', '子育て支援'],
    eligibility: '四日市市に住所を有し、新たに子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '四日市市が実施する出産祝い金制度です。新たにお子さんが生まれた世帯に、出生順に応じた祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 出産祝い金は、<span class="marker">四日市市内で新たにお子さんが誕生した世帯</span>に対し、出産を祝福するとともに子育て費用を支援する制度です。</p><p>四日市市は万古焼（ばんこやき）の産地としても知られ、伝統工芸と先端産業が共存する個性的な都市です。名古屋へは近鉄特急で約30分と交通至便で、若い世帯の定住を促進するための出産支援を充実させています。</p><p><span class="marker-green">第3子以降は20万円と手厚い支給額</span>で、多子世帯を積極的に応援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給額"><p>第1子：5万円</p><p>第2子：10万円</p><p>第3子以降：20万円</p></div><p>四日市市に住民登録がある方で、出生届を提出した保護者が対象です。出生届の提出時に窓口で案内があります。</p><p><span class="marker">生後6か月以内に申請が必要</span>です。四日市市役所こども未来課で手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>出生順は<strong>同一世帯で養育する児童数</strong>でカウントされます。双子以上の場合はそれぞれに支給されます。</p><p><span class="marker">申請日時点で四日市市に住民登録があることが条件</span>です。出生後に転出した場合は対象外です。</p><div class="highlight-box">四日市市では出産祝い金のほか、妊産婦タクシー利用助成や産後ケア事業も実施しています。四日市市子育て支援センターで各種制度のワンストップ案内を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-newlywed-rent',
    title: '四日市市 新婚世帯家賃補助制度',
    organization: '四日市市',
    type: 'local',
    maxAmount: '月額最大3万円（最長2年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '三重県',
    tags: ['四日市市', '新婚支援', '家賃補助'],
    eligibility: '四日市市内の賃貸住宅に居住する婚姻届提出後1年以内の新婚世帯',
    applicationPeriod: '婚姻届提出後6か月以内（通年受付）',
    description: '四日市市が実施する新婚世帯家賃補助制度です。新婚世帯の家賃を月額最大3万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 新婚世帯家賃補助制度は、<span class="marker">婚姻届を提出して1年以内の新婚世帯</span>に対し、市内の賃貸住宅の家賃を補助する制度です。</p><p>四日市市は三重県最大の人口を有し、名古屋へのアクセスも良好な住みやすい都市です。充実した雇用環境と生活インフラを背景に、新婚世帯の定住を促進するための住居費支援を行っています。</p><p>月額最大3万円を<strong>最長2年間</strong>補助し、<span class="marker-green">夫婦の合計所得が基準額以下の世帯</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出後1年以内であること</p><p>夫婦ともに四日市市内の賃貸住宅に居住していること</p><p>夫婦の合計所得が400万円未満であること</p><p>市税を滞納していないこと</p></div><p>四日市市役所住宅政策課に申請書、婚姻届受理証明書、賃貸借契約書の写し等を提出します。</p><p><span class="marker">婚姻届提出後6か月以内の申請が必要</span>です。遡及申請はできません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃（共益費を除く）に対して<strong>月額最大3万円</strong>を補助します。補助期間は<strong>最長2年間</strong>です。</p><p><span class="marker">市外へ転出した場合は補助が終了</span>します。市内での転居は再申請で継続可能です。</p><div class="note-box">公営住宅入居者は対象外です。四日市市では新婚世帯向けの住宅取得支援も別途実施しており、賃貸から持ち家への移行もサポートしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-disability-medical',
    title: '四日市市 障がい者医療費助成制度',
    organization: '四日市市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '三重県',
    tags: ['四日市市', '障がい者医療', '助成金'],
    eligibility: '四日市市に住所を有する身体障害者手帳1〜3級、療育手帳A判定等の方',
    applicationPeriod: '通年',
    description: '四日市市が実施する障がい者医療費助成制度です。障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 障がい者医療費助成制度は、<span class="marker">身体障害者手帳や療育手帳をお持ちの方</span>を対象に、保険診療の自己負担分を助成する制度です。</p><p>四日市市はかつて深刻な公害を経験した歴史から、市民の健康と福祉を守ることに強い使命感を持っています。障がいのある方が経済的な心配なく必要な医療を受けられるよう、充実した助成制度を整備しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1〜3級の方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1・2級の方</p><p>特定疾患医療受給者証をお持ちの方</p></div><p>四日市市役所障害福祉課の窓口で申請します。障害者手帳、健康保険証、振込先口座情報をご持参ください。</p><p><span class="marker">手帳の交付と同時に手続きするのがスムーズ</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。三重県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は一旦支払い後、償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。四日市市では障がい者の就労支援や日常生活用具の給付事業も充実しており、総合的な自立支援を行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-school-lunch',
    title: '四日市市 学校給食費補助制度',
    organization: '四日市市',
    type: 'local',
    maxAmount: '給食費の半額〜全額補助（年間最大約5万円）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '三重県',
    tags: ['四日市市', '給食費', '教育支援'],
    eligibility: '四日市市立小中学校に在籍する児童生徒の保護者で、多子世帯または経済的に困窮する世帯',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '四日市市が実施する学校給食費補助制度です。多子世帯や経済的に困窮する世帯の給食費を半額〜全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 学校給食費補助制度は、<span class="marker">多子世帯や経済的に困窮する世帯</span>に対し、市立小中学校の給食費を補助する制度です。</p><p>四日市市は地元の農産物を積極的に活用した学校給食を提供しています。三重県産の食材や四日市特産の万古焼の食器を使うなど、食育にも力を入れています。すべての子どもが安心して給食を食べられるよう、経済的支援を充実させています。</p><p><span class="marker-green">第3子以降の児童生徒は給食費が全額免除</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の区分"><p>第3子以降の児童生徒：給食費全額補助</p><p>就学援助認定世帯：給食費全額補助</p><p>第2子の児童生徒：給食費半額補助（所得要件あり）</p></div><p>学校を通じて配布される申請書に記入し、学校に提出します。多子世帯の補助は申請書の提出のみで手続き完了です。</p><p><span class="marker">転入・家計急変の場合は年度途中の申請も受け付けています</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は月額約4,600円、中学校は月額約5,300円です。<strong>全額補助の場合、年間約5万円〜6万円</strong>の負担軽減になります。</p><p><span class="marker">「第何子」のカウントは同一世帯の18歳以下の児童数</span>で判定されます。</p><div class="highlight-box">四日市市では食物アレルギーのある児童生徒への代替食提供や、栄養教諭による食育指導も充実しています。給食を通じた子どもの健やかな成長をサポートしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-telework-bonus',
    title: '四日市市 テレワーク推進補助金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '三重県',
    tags: ['四日市市', 'テレワーク', '補助金'],
    eligibility: '四日市市内に事業所を有する中小企業で、テレワーク環境を新たに整備する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '四日市市が実施するテレワーク推進補助金です。中小企業のテレワーク環境整備に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 テレワーク推進補助金は、<span class="marker">市内中小企業がテレワーク環境を新たに整備する際の費用</span>を補助する制度です。</p><p>四日市市は石油化学をはじめとする大企業の下請け・関連企業が多く、中小企業の働き方改革が地域経済全体の競争力向上に直結します。テレワーク導入により多様な人材の確保と生産性向上を同時に実現することを目指しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">クラウドサービスやセキュリティ対策費用も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>四日市市内に事業所を有する中小企業であること</p><p>新たにテレワーク環境を整備すること</p><p>テレワーク実施計画を策定していること</p><p>市税を滞納していないこと</p></div><p>四日市市役所商工課に申請書とテレワーク実施計画書を提出します。</p><p><span class="marker">導入前の申請が必須</span>です。既に購入済みの機器は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。パソコン、通信機器、VPN構築費用、ソフトウェアライセンス料が対象です。</p><p><span class="marker">個人事業主も申請可能</span>ですが、従業員がいない場合は対象外となることがあります。</p><div class="note-box">四日市市では市内のコワーキングスペースの利用促進や、テレワークに関するセミナーも開催しています。四日市商工会議所のIT相談窓口も活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-nursing-home-reform',
    title: '四日市市 介護住宅改修補助金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '三重県',
    tags: ['四日市市', '介護改修', '補助金'],
    eligibility: '四日市市に住所を有し、要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年（事前申請制）',
    description: '四日市市が実施する介護住宅改修補助金です。バリアフリー改修に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 介護住宅改修補助金は、<span class="marker">要介護・要支援認定を受けた方の自宅をバリアフリーに改修する費用</span>を補助する制度です。</p><p>四日市市は高齢者が住み慣れた自宅で安全に暮らし続けられるよう、住環境の改善を支援しています。手すりの設置や段差の解消、浴室の改修など、転倒や事故を防ぐための改修工事が対象です。</p><p>介護保険の住宅改修費に<strong>市独自の上乗せ補助</strong>を行い、<span class="marker-green">合わせて最大40万円</span>の改修が可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取り付け</p><p>段差の解消・スロープの設置</p><p>床材の滑り防止加工</p><p>引き戸への変更</p><p>洋式便器への取替え</p></div><p>四日市市役所介護保険課に事前相談のうえ、改修計画を提出します。ケアマネジャーの意見書が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。事後申請は認められません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の上乗せ補助として<strong>上限20万円</strong>です。介護保険の住宅改修費と合わせて利用できます。</p><p><span class="marker">1住宅につき原則1回</span>ですが、要介護度が大きく変わった場合は再度利用できる場合があります。</p><div class="highlight-box">四日市市では高齢者の在宅生活を支えるため、福祉用具の貸与・購入支援や、訪問リハビリテーションも充実しています。ケアマネジャーと相談しながら最適な改修計画を立てましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-energy-support',
    title: '四日市市 省エネ家電買替支援事業',
    organization: '四日市市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '三重県',
    tags: ['四日市市', '省エネ', '家電補助'],
    eligibility: '四日市市に住所を有し、省エネ性能の高い家電に買い替える個人',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '四日市市が実施する省エネ家電買替支援事業です。省エネ性能の高い家電への買替えに最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 省エネ家電買替支援事業は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買替え</span>に対し費用の一部を補助する制度です。</p><p>四日市市はかつての公害問題を教訓に、環境先進都市を目指しています。四日市公害と環境未来館の運営をはじめ、脱炭素社会の実現に向けた取り組みを市全体で推進しており、家庭部門のCO2削減も重要な柱としています。</p><p><span class="marker-green">統一省エネラベル4つ星以上の製品が対象</span>で、電気代の節約と環境負荷の低減を両立します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電と補助額"><p>エアコン（統一省エネラベル4つ星以上）：最大3万円</p><p>冷蔵庫（統一省エネラベル4つ星以上）：最大2万円</p><p>1世帯あたり合計最大5万円</p></div><p>四日市市内の販売店で対象製品を購入し、領収書等を添えて四日市市役所環境政策課に申請します。</p><p><span class="marker">購入後3か月以内の申請が必要</span>です。先着順で予算終了次第受付終了です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>エアコンが<strong>最大3万円</strong>、冷蔵庫が<strong>最大2万円</strong>で、合計最大5万円の補助です。</p><p><span class="marker">四日市市内の販売店での購入に限ります</span>（ネット通販は対象外）。</p><div class="note-box">買替え前の古い家電のリサイクル料は補助対象外です。四日市市では太陽光パネルや蓄電池の設置補助も実施しており、家庭のエネルギー効率を総合的に改善するサポートが充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-bousai-equipment',
    title: '四日市市 家庭用防災設備購入補助金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '三重県',
    tags: ['四日市市', '防災', '設備補助'],
    eligibility: '四日市市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '四日市市が実施する家庭用防災設備購入補助金です。感震ブレーカーや家具転倒防止器具等の購入に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 家庭用防災設備購入補助金は、<span class="marker">家庭の地震・津波対策</span>として防災設備を購入する費用の一部を補助する制度です。</p><p>四日市市は伊勢湾に面しており、南海トラフ巨大地震が発生した場合には津波被害も想定されています。1959年の伊勢湾台風の経験も踏まえ、家庭レベルでの防災対策を強化するための補助制度を設けています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限5万円</strong>です。<span class="marker-green">高齢者世帯・障がい者世帯には補助率の優遇</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>感震ブレーカー（揺れを感知して自動遮断）</p><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>蓄電池・ポータブル電源</p><p>止水板・防水シート</p></div><p>四日市市役所危機管理室に申請書と見積書（または領収書）を提出します。購入前・購入後いずれも申請可能です。</p><p><span class="marker">1世帯1回の利用に限られます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。高齢者のみ世帯は補助率3分の2まで引き上げられます。</p><p><span class="marker">消防庁推奨型式の感震ブレーカーが対象</span>です。設置工事費も含められます。</p><div class="note-box">四日市市ではコンビナート地区周辺の防災対策にも力を入れています。家庭の備えと合わせて、市が配布する防災マップで避難経路や津波浸水想定区域を確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.mie.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 草津市（滋賀県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kusatsu-childcare-subsidy',
    title: '草津市 子育て世帯応援給付金',
    organization: '草津市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '滋賀県',
    tags: ['草津市', '子育て支援', '給付金'],
    eligibility: '草津市に住所を有し、18歳以下の児童を養育する世帯',
    applicationPeriod: '毎年4月〜翌年3月（通年）',
    description: '草津市が実施する子育て世帯応援給付金です。18歳以下の児童を養育する世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 子育て世帯応援給付金は、<span class="marker">18歳以下の児童を養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>草津市は琵琶湖の南東岸に位置し、滋賀県で最も人口が増加している活力ある都市です。立命館大学びわこ・くさつキャンパス（BKC）を擁する学園都市でもあり、若い子育て世帯が多く住む街として知られています。</p><p><span class="marker-green">所得制限なしで、草津市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>草津市に住民登録があり、18歳以下の児童を養育している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>児童の健康保険証または住民票</p><p>振込先口座情報</p></div><p>草津市役所子ども家庭課の窓口または郵送で申請できます。<strong>対象世帯には市から案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>児童1人あたり最大5万円</strong>が支給されます。多子世帯への加算がある場合もあります。</p><p><span class="marker">申請期限を過ぎると受給できませんので、通知が届いたら早めに手続き</span>を行いましょう。</p><div class="note-box">草津市は関西圏で最も住みやすい街の一つとして評価されており、子育て支援の充実度が高い自治体です。この給付金のほか、保育料の軽減や放課後児童クラブの充実など、多角的な支援が用意されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-birth-bonus',
    title: '草津市 出産祝い金',
    organization: '草津市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '滋賀県',
    tags: ['草津市', '出産祝い金', '子育て支援'],
    eligibility: '草津市に住所を有し、新たに子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '草津市が実施する出産祝い金制度です。新たにお子さんが生まれた世帯に、出生順に応じた祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 出産祝い金は、<span class="marker">草津市内で新たにお子さんが誕生した世帯</span>に対し、出産を祝福し子育て費用の一部を支援する制度です。</p><p>草津市は東海道と中山道が交わる「草津宿」として歴史ある街道の街であり、現在はJR草津駅を中心に商業・住宅地が発展しています。人口増加が続く若々しい都市で、出産を機にさらに定住を促進するための支援です。</p><p><span class="marker-green">第3子以降は20万円と手厚い支給</span>で、多子世帯を応援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給額"><p>第1子：5万円</p><p>第2子：10万円</p><p>第3子以降：20万円</p></div><p>草津市に住民登録がある方で、出生届を提出した保護者が対象です。</p><p><span class="marker">生後6か月以内に申請が必要</span>です。草津市役所子ども家庭課の窓口で手続きしてください。出生届と同時に案内があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>出生順は<strong>同一世帯で養育する児童数</strong>でカウントされます。双子の場合はそれぞれに支給されます。</p><p><span class="marker">申請日時点で草津市に住民登録があることが条件</span>です。</p><div class="highlight-box">草津市では出産祝い金のほか、妊婦健診費用の全額助成や産後ケアセンターの運営など、妊娠期から切れ目のないサポートを提供しています。琵琶湖畔の豊かな環境で子育てを楽しめる街です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-housing-purchase',
    title: '草津市 住宅取得支援補助金',
    organization: '草津市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '滋賀県',
    tags: ['草津市', '住宅取得', '補助金'],
    eligibility: '草津市内に新たに住宅を取得する方（新築・中古を含む）',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '草津市が実施する住宅取得支援補助金です。市内での住宅取得に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 住宅取得支援補助金は、<span class="marker">草津市内に新たに住宅を取得する方</span>に対して費用の一部を補助する制度です。</p><p>草津市はJR琵琶湖線で京都駅まで約20分、大阪駅まで約50分というアクセスの良さが魅力です。琵琶湖を望む自然環境と都市機能が両立しており、関西圏の住みたい街ランキングで常に上位にランクインしています。</p><p>補助額は基本20万円で、<strong>子育て世帯・市外転入者への加算</strong>があり、<span class="marker-green">最大30万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>草津市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの補助金を受けていないこと</p></div><p>草津市役所都市計画課に申請書と売買契約書等を提出します。</p><p><span class="marker">住宅の引渡し後6か月以内に申請が必要</span>です。新築・中古とも対象ですが、親族間売買は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額<strong>20万円</strong>に、子育て世帯加算5万円、市外転入加算5万円で、<strong>最大30万円</strong>です。</p><p><span class="marker">5年以内に転出した場合は返還が求められます</span>。</p><div class="note-box">草津市は人口増加に伴い新築マンションや分譲住宅の供給も増えています。中古住宅のリノベーション支援もあり、多様な住まい方を選択できる環境が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-infertility',
    title: '草津市 不妊治療費助成制度',
    organization: '草津市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '滋賀県',
    tags: ['草津市', '不妊治療', '助成金'],
    eligibility: '草津市に住所を有し、不妊治療を受けている夫婦（事実婚含む）',
    applicationPeriod: '治療終了後3か月以内（通年受付）',
    description: '草津市が実施する不妊治療費助成制度です。不妊治療にかかる費用の一部を、1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 不妊治療費助成制度は、<span class="marker">不妊治療を受けている夫婦（事実婚含む）</span>に対し、治療費の自己負担を軽減する制度です。</p><p>草津市は若い世帯が多く、人口増加が続く活力ある都市です。不妊治療への経済的支援を通じて、子どもを望むすべてのカップルを応援しています。保険適用後の自己負担分や先進医療費が助成の対象です。</p><p><span class="marker-green">所得制限なしで、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦のいずれかが草津市に住民登録がある方で、不妊治療を受けていることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書の原本</p><p>夫婦の住民票</p></div><p>草津市役所健康増進課に申請します。<span class="marker">治療終了日から3か月以内</span>に提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用治療の自己負担分と先進医療費に対し、<strong>1回あたり最大10万円</strong>を助成します。年度内2回まで申請可能です。</p><p><span class="marker">滋賀県の不妊治療費助成との併用が可能</span>ですが、合計が自己負担額を超えない範囲で調整されます。</p><div class="highlight-box">草津市では不妊・不育症に関する相談窓口を設置しています。草津市立の健康センターで、治療と仕事の両立に関する相談も受けられます。男性不妊治療も助成対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-scholarship',
    title: '草津市 奨学金制度',
    organization: '草津市',
    type: 'local',
    maxAmount: '月額最大3万円（返還不要）',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '滋賀県',
    tags: ['草津市', '奨学金', '教育支援'],
    eligibility: '草津市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月',
    description: '草津市が実施する給付型奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、給付型の奨学金を支給する制度です。</p><p>草津市には立命館大学BKCや滋賀医科大学など高等教育機関が集積しており、学びの街としての側面も持っています。経済的な事情で進学を諦めることがないよう、次世代の人材育成を支援しています。</p><p><span class="marker-green">返還不要の給付型</span>で、学業に専念できる環境を整えます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が草津市に住所を有すること</p><p>高等学校、大学、短大、専門学校等に在学または入学予定であること</p><p>学業成績が一定基準以上であること</p><p>世帯所得が基準額以下であること</p></div><p>毎年3月〜4月に草津市教育委員会に申請します。成績証明書・所得証明書の提出が必要です。</p><p><span class="marker">定員があり選考制</span>です。早めの準備をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>高校生：月額1万5千円、大学生等：月額3万円</strong>が目安です。正規の修業年限まで受給できます。</p><p><span class="marker">他の給付型奨学金との併用は制限されることがあります</span>。</p><div class="note-box">休学・退学した場合は支給停止となります。草津市では奨学金のほか、入学準備金の貸付制度もあり、経済的な理由で学びの機会を失わない環境づくりを進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-sme-support',
    title: '草津市 中小企業振興補助金',
    organization: '草津市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '滋賀県',
    tags: ['草津市', '中小企業支援', '補助金'],
    eligibility: '草津市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '草津市が実施する中小企業振興補助金です。設備投資や販路開拓に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 中小企業振興補助金は、<span class="marker">市内中小企業の設備投資や販路開拓</span>にかかる費用を補助する制度です。</p><p>草津市は琵琶湖南部の交通の要衝に位置し、製造業やIT企業、サービス業が集積する産業都市でもあります。立命館大学BKCとの産学連携も盛んで、イノベーション創出の土壌が整っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">DX推進や生産性向上のためのIT導入も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>草津市内に主たる事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p><p>年度内に事業完了すること</p></div><p>草津市役所商工観光労政課に申請書と事業計画書を提出します。</p><p><span class="marker">交付決定前に着手した事業は対象外</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。設備購入費、IT導入費、展示会出展費が対象です。</p><p><span class="marker">人件費や運転資金は対象外</span>です。</p><div class="highlight-box">草津市商工会議所では経営相談や専門家派遣を無料で利用できます。大学との共同研究の橋渡しも行っており、技術力向上と補助金を組み合わせた経営強化が可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-nursing-equipment',
    title: '草津市 介護用品支給事業',
    organization: '草津市',
    type: 'local',
    maxAmount: '年間最大6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '滋賀県',
    tags: ['草津市', '介護用品', '支給事業'],
    eligibility: '草津市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '草津市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を年間最大6万円相当支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつや尿取りパッドなどの介護用品を支給する制度です。</p><p>草津市は高齢者福祉の充実にも力を入れており、琵琶湖畔の温暖な気候の中で安心して暮らせるまちづくりを推進しています。在宅介護を続ける家族の経済的・心理的負担を軽減する取り組みの一つです。</p><p><span class="marker-green">市民税非課税世帯が優先</span>で、介護を支える家族を応援します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>草津市に住民登録がある方で、在宅で要介護4または5の高齢者を常時介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定の結果通知書の写し</p><p>世帯の課税状況がわかる書類</p></div><p>草津市役所長寿いきがい課で申請します。<strong>年度途中からの申請も可能</strong>で、支給額は月割り計算です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>紙おむつ、尿取りパッド、使い捨て手袋等を<strong>年間最大6万円相当</strong>まで支給します。</p><p><span class="marker">入院中や施設入所中の方は対象外</span>です。</p><div class="note-box">草津市では介護用品支給のほか、認知症カフェの運営や家族介護者交流事業も実施しています。介護の悩みは地域包括支援センター「おおぞら」にお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-elderly-support',
    title: '草津市 高齢者生活支援事業',
    organization: '草津市',
    type: 'local',
    maxAmount: '緊急通報装置無償貸与・配食サービス等（年間最大3万円相当）',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '滋賀県',
    tags: ['草津市', '高齢者支援', '生活支援'],
    eligibility: '草津市に住所を有する65歳以上の一人暮らし高齢者等',
    applicationPeriod: '通年',
    description: '草津市が実施する高齢者生活支援事業です。一人暮らし高齢者に緊急通報装置の貸与や配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 高齢者生活支援事業は、<span class="marker">65歳以上の一人暮らし高齢者や高齢者のみの世帯</span>に対し、安心して在宅生活を送れるよう支援する事業です。</p><p>草津市は人口が増加する若い都市ですが、高齢化も同時に進行しています。マンション住まいの高齢単身世帯も増えており、地域のつながりが希薄になりがちな環境での見守り支援が重要になっています。</p><p><span class="marker-green">複数の支援メニューを組み合わせて利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援メニュー"><p>緊急通報装置の無償貸与（24時間対応）</p><p>配食サービス（安否確認付き食事配達）</p><p>軽度生活支援（ゴミ出し、買い物代行等）</p><p>外出支援サービス（通院等の送迎）</p></div><p>草津市役所長寿いきがい課または地域包括支援センターで申請します。</p><p><span class="marker">まずは地域包括支援センターに相談してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置は<strong>無償貸与</strong>です。配食サービスは1食あたり自己負担数百円程度です。</p><p><span class="marker">生活保護受給世帯は別制度の利用となります</span>。</p><div class="highlight-box">草津市では学区ごとのまちづくり協議会を通じた見守り活動も活発です。草津市社会福祉協議会と連携したふれあいサロンなど、地域の居場所づくりも進んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-seismic-diagnosis',
    title: '草津市 木造住宅耐震診断助成事業',
    organization: '草津市',
    type: 'local',
    maxAmount: '耐震診断費用の自己負担ほぼ無料（最大5万円助成）',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '滋賀県',
    tags: ['草津市', '耐震診断', '防災'],
    eligibility: '草津市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '草津市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>草津市は琵琶湖西岸断層帯をはじめとする活断層の影響が懸念される地域です。南海トラフ巨大地震への備えと合わせて、住宅の耐震化を進めることが重要な防災課題となっています。</p><p><span class="marker-green">自己負担わずか数千円</span>で耐震性を確認できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象建物の要件"><p>草津市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたものであること</p><p>2階建て以下であること</p><p>所有者が居住していること</p></div><p>草津市役所建築政策課に申請します。市が派遣する耐震診断士が現地調査を実施します。</p><p><span class="marker">年間の受付件数に上限がありますので、お早めに</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用のうち<strong>最大5万円を市が助成</strong>し、自己負担は数千円程度です。</p><p><span class="marker">診断結果で耐震性不足の場合は耐震改修補助金（別制度）が利用可能</span>です。</p><div class="note-box">草津市は琵琶湖に近い低地も多く、液状化のリスクがある地域もあります。耐震診断とあわせて、市のハザードマップで自宅周辺のリスクを確認しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 八尾市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'yao-childcare-subsidy',
    title: '八尾市 子育て世帯応援給付金',
    organization: '八尾市',
    type: 'local',
    maxAmount: '児童1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['八尾市', '子育て支援', '給付金'],
    eligibility: '八尾市に住所を有し、18歳以下の児童を養育する世帯',
    applicationPeriod: '毎年4月〜翌年3月（通年）',
    description: '八尾市が実施する子育て世帯応援給付金です。18歳以下の児童を養育する世帯に対し、児童1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 子育て世帯応援給付金は、<span class="marker">18歳以下の児童を養育する世帯</span>に対し、子育てにかかる経済的負担を軽減するための給付金です。</p><p>八尾市は大阪府の中河内地域に位置し、ものづくりのまちとして全国に知られています。歯ブラシ生産量日本一をはじめ、中小製造業が集積する工業都市であり、河内音頭発祥の地としても親しまれています。</p><p><span class="marker-green">所得制限なしで、八尾市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八尾市に住民登録があり、18歳以下の児童を養育している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請者の本人確認書類</p><p>児童の健康保険証または住民票</p><p>振込先口座情報</p></div><p>八尾市役所こども若者政策課の窓口または郵送で申請します。<strong>対象世帯には市から案内通知</strong>が届きます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>児童1人あたり最大5万円</strong>が支給されます。多子世帯への追加加算がある場合もあります。</p><p><span class="marker">通知が届いたら申請期限内に手続き</span>してください。期限超過は受給不可です。</p><div class="note-box">八尾市は大阪市に隣接しながら比較的家賃や住宅価格が手頃で、子育て世帯に人気のエリアです。近鉄八尾駅前のリノアス等の商業施設も充実しており、子育て環境が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-birth-bonus',
    title: '八尾市 出産祝い金',
    organization: '八尾市',
    type: 'local',
    maxAmount: '第1子5万円・第2子10万円・第3子以降20万円',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['八尾市', '出産祝い金', '子育て支援'],
    eligibility: '八尾市に住所を有し、新たに子どもが生まれた世帯',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '八尾市が実施する出産祝い金制度です。新たにお子さんが生まれた世帯に、出生順に応じた祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 出産祝い金は、<span class="marker">八尾市内で新たにお子さんが誕生した世帯</span>に対し、出産のお祝いと子育て費用の支援を行う制度です。</p><p>八尾市は河内音頭や八尾天満宮など伝統文化が息づく街で、地域の結びつきが強いコミュニティが特徴です。大阪市内への通勤利便性と下町の温かさを兼ね備えた環境で、安心して子育てできるよう出産支援を充実させています。</p><p><span class="marker-green">第3子以降は20万円の手厚い支給</span>で、多子世帯を応援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給額"><p>第1子：5万円</p><p>第2子：10万円</p><p>第3子以降：20万円</p></div><p>八尾市に住民登録がある方で、出生届を提出した保護者が対象です。</p><p><span class="marker">生後6か月以内の申請が必要</span>です。八尾市役所こども若者政策課の窓口で手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>出生順は<strong>同一世帯で養育する児童数</strong>でカウントされます。多胎児はそれぞれに支給されます。</p><p><span class="marker">申請日時点で八尾市に住民登録があること</span>が条件です。</p><div class="highlight-box">八尾市では出産祝い金のほか、産後ケア事業（ショートステイ・デイサービス）や新生児訪問指導も充実しています。「やおっこ」子育てアプリで各種支援情報をまとめて確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-newlywed-rent',
    title: '八尾市 新婚世帯家賃補助制度',
    organization: '八尾市',
    type: 'local',
    maxAmount: '月額最大3万円（最長2年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['八尾市', '新婚支援', '家賃補助'],
    eligibility: '八尾市内の賃貸住宅に居住する婚姻届提出後1年以内の新婚世帯',
    applicationPeriod: '婚姻届提出後6か月以内（通年受付）',
    description: '八尾市が実施する新婚世帯家賃補助制度です。新婚世帯の家賃を月額最大3万円、最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 新婚世帯家賃補助制度は、<span class="marker">婚姻届を提出して1年以内の新婚世帯</span>に対し、市内の賃貸住宅の家賃を補助する制度です。</p><p>八尾市は大阪市内へ近鉄やJRで約15分と通勤に便利でありながら、大阪市内に比べて家賃水準が手頃な住みやすい都市です。新婚期の住居費負担を軽減し、八尾市への定住を促進しています。</p><p>月額最大3万円を<strong>最長2年間</strong>補助し、<span class="marker-green">夫婦の合計所得が基準額以下の世帯</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出後1年以内であること</p><p>夫婦ともに八尾市内の賃貸住宅に居住していること</p><p>夫婦の合計所得が400万円未満であること</p><p>市税を滞納していないこと</p></div><p>八尾市役所住宅政策課に申請書、婚姻届受理証明書、賃貸借契約書の写し等を提出します。</p><p><span class="marker">婚姻届提出後6か月以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃（共益費除く）に対して<strong>月額最大3万円</strong>を補助します。補助期間は<strong>最長2年間</strong>です。</p><p><span class="marker">市外へ転出した場合は補助終了</span>です。市内での転居は再申請で継続可能です。</p><div class="note-box">公営住宅入居者は対象外です。八尾市では新婚世帯向けの住宅購入補助も別途あり、賃貸から持ち家へのステップアップもサポートしています。ものづくりのまちならではの充実した住宅関連産業も魅力です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-disability-medical',
    title: '八尾市 障がい者医療費助成制度',
    organization: '八尾市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['八尾市', '障がい者医療', '助成金'],
    eligibility: '八尾市に住所を有する身体障害者手帳1〜3級、療育手帳A判定等の方',
    applicationPeriod: '通年',
    description: '八尾市が実施する障がい者医療費助成制度です。障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 障がい者医療費助成制度は、<span class="marker">身体障害者手帳や療育手帳をお持ちの方</span>を対象に、保険診療の自己負担分を助成する制度です。</p><p>八尾市は福祉のまちづくりにも力を入れており、障がいのある方が安心して医療を受けられる環境整備を進めています。ものづくりのまちとして障がい者就労支援にも積極的で、医療と就労の両面から自立を支援しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1〜3級の方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p><p>特定疾患医療受給者証をお持ちの方</p></div><p>八尾市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、振込先口座情報が必要です。</p><p><span class="marker">手帳交付と同時に申請するのがスムーズ</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。大阪府内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">府外受診の場合は一旦支払い後、償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代等）は対象外です。八尾市では障がい者の日常生活用具給付事業や移動支援サービスも充実しており、包括的な自立支援を行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-school-lunch',
    title: '八尾市 学校給食費補助制度',
    organization: '八尾市',
    type: 'local',
    maxAmount: '給食費の半額〜全額補助（年間最大約5万円）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '大阪府',
    tags: ['八尾市', '給食費', '教育支援'],
    eligibility: '八尾市立小中学校に在籍する児童生徒の保護者で、多子世帯または経済的に困窮する世帯',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '八尾市が実施する学校給食費補助制度です。多子世帯や経済的に困窮する世帯の給食費を半額〜全額補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 学校給食費補助制度は、<span class="marker">多子世帯や経済的に困窮する世帯</span>に対し、市立小中学校の給食費を補助する制度です。</p><p>八尾市は地産地消の推進と食育を重視しており、大阪の農業産地としての一面も持っています。河内地方の伝統的な食材を取り入れた栄養バランスの良い給食を提供し、すべての子どもが安心して食べられるよう経済的支援を行っています。</p><p><span class="marker-green">第3子以降の児童生徒は給食費が全額免除</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の区分"><p>第3子以降の児童生徒：給食費全額補助</p><p>就学援助認定世帯：給食費全額補助</p><p>第2子の児童生徒：給食費半額補助（所得要件あり）</p></div><p>学校を通じて配布される申請書に記入し、学校に提出します。</p><p><span class="marker">転入や家計急変の場合は年度途中でも随時申請可能</span>です。八尾市教育委員会学務給食課にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は月額約4,700円、中学校は月額約5,400円です。<strong>全額補助で年間約5万〜6万円</strong>の負担軽減となります。</p><p><span class="marker">「第何子」は同一世帯の18歳以下の児童数</span>で判定されます。</p><div class="highlight-box">八尾市では小学校全校に自校調理場を設置しており、できたての温かい給食を提供しています。食物アレルギーへの個別対応も充実しており、安心して給食を食べられる環境が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-telework-bonus',
    title: '八尾市 テレワーク推進補助金',
    organization: '八尾市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['八尾市', 'テレワーク', '補助金'],
    eligibility: '八尾市内に事業所を有する中小企業で、テレワーク環境を新たに整備する事業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '八尾市が実施するテレワーク推進補助金です。中小企業のテレワーク環境整備に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 テレワーク推進補助金は、<span class="marker">市内中小企業がテレワーク環境を新たに整備する際の費用</span>を補助する制度です。</p><p>八尾市は「ものづくりのまち」として約3,000もの製造業事業所が集積しており、中小企業の働き方改革が地域経済の課題です。テレワークの導入により、事務部門の効率化や多様な人材確保を支援し、ものづくり企業の競争力向上を後押ししています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">クラウド型業務管理ツールやセキュリティ対策も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>八尾市内に事業所を有する中小企業であること</p><p>新たにテレワーク環境を整備すること</p><p>テレワーク実施計画を策定していること</p><p>市税を滞納していないこと</p></div><p>八尾市役所産業政策課に申請書とテレワーク実施計画書を提出します。</p><p><span class="marker">導入前の申請が必須</span>です。既に契約済みのサービスは対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。パソコン、通信機器、VPN構築、ソフトウェアが対象です。</p><p><span class="marker">個人事業主も対象</span>ですが、従業員のいない場合は対象外となることがあります。</p><div class="note-box">八尾市では「みせるばやお」等のコワーキングスペースや、ものづくり企業向けのIT相談窓口も整備されています。八尾商工会議所でも経営のデジタル化に関する相談が可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-nursing-home-reform',
    title: '八尾市 介護住宅改修補助金',
    organization: '八尾市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['八尾市', '介護改修', '補助金'],
    eligibility: '八尾市に住所を有し、要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年（事前申請制）',
    description: '八尾市が実施する介護住宅改修補助金です。バリアフリー改修に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 介護住宅改修補助金は、<span class="marker">要介護・要支援認定を受けた方の自宅をバリアフリーに改修する費用</span>を補助する制度です。</p><p>八尾市は木造住宅が密集する地域もあり、高齢者の住環境改善が重要な課題です。住み慣れた自宅で安全に暮らし続けられるよう、手すり設置や段差解消などの改修工事を支援しています。</p><p>介護保険の住宅改修費に<strong>市独自の上乗せ補助</strong>を行い、<span class="marker-green">合わせて最大40万円</span>の改修が可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの取り付け</p><p>段差の解消・スロープ設置</p><p>滑り防止のための床材変更</p><p>引き戸への扉の取替え</p><p>洋式便器への取替え</p></div><p>八尾市役所高齢介護課に事前相談し、改修計画を提出します。ケアマネジャーの意見書が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市独自の上乗せ補助として<strong>上限20万円</strong>です。介護保険の住宅改修費と合わせて利用可能です。</p><p><span class="marker">原則1住宅1回</span>ですが、要介護度が大幅に変わった場合は再度利用可能な場合があります。</p><div class="highlight-box">八尾市はものづくりのまちだけに、バリアフリー改修を手がける地元の建築業者も多数あります。市の事業者紹介制度も利用でき、安心して改修工事を依頼できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-energy-support',
    title: '八尾市 省エネ家電買替支援事業',
    organization: '八尾市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '大阪府',
    tags: ['八尾市', '省エネ', '家電補助'],
    eligibility: '八尾市に住所を有し、省エネ性能の高い家電に買い替える個人',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '八尾市が実施する省エネ家電買替支援事業です。省エネ性能の高い家電への買替えに最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 省エネ家電買替支援事業は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買替え</span>にかかる費用の一部を補助する制度です。</p><p>八尾市は大阪平野の内陸部に位置し、夏場は厳しい暑さとなることが多い地域です。省エネ家電への買替えを支援することで、家庭の電気代削減とCO2排出量の抑制を同時に実現するゼロカーボンシティの取り組みの一環です。</p><p><span class="marker-green">統一省エネラベル4つ星以上の製品が補助対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電と補助額"><p>エアコン（省エネラベル4つ星以上）：最大3万円</p><p>冷蔵庫（省エネラベル4つ星以上）：最大2万円</p><p>1世帯あたり合計最大5万円</p></div><p>八尾市内の販売店で対象製品を購入し、領収書等を添えて八尾市役所環境保全課に申請します。</p><p><span class="marker">購入後3か月以内の申請が必要</span>で、先着順で予算に達し次第終了です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>エアコン<strong>最大3万円</strong>、冷蔵庫<strong>最大2万円</strong>で、合計最大5万円です。</p><p><span class="marker">八尾市内の販売店での購入が条件</span>（ネット通販不可）です。</p><div class="note-box">古い家電のリサイクル料は補助対象外です。八尾市では太陽光発電設備の設置補助やEV充電設備の補助なども実施しており、家庭のエネルギー効率を総合的に改善するサポートが充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-bousai-equipment',
    title: '八尾市 家庭用防災設備購入補助金',
    organization: '八尾市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['八尾市', '防災', '設備補助'],
    eligibility: '八尾市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '八尾市が実施する家庭用防災設備購入補助金です。感震ブレーカーや家具転倒防止器具等の購入に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 家庭用防災設備購入補助金は、<span class="marker">家庭の地震対策として防災設備を購入する費用</span>の一部を補助する制度です。</p><p>八尾市は生駒山地の麓から大阪平野にかけて広がっており、上町断層帯や生駒断層帯の影響が懸念されています。2018年の大阪北部地震の経験も踏まえ、家庭レベルでの防災力強化を推進しています。木造住宅密集地域が多いことから、特に感震ブレーカーの設置を積極的に推奨しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限5万円</strong>です。<span class="marker-green">高齢者世帯には補助率の優遇</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる設備"><p>感震ブレーカー（地震時の通電火災を防止）</p><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>蓄電池・ポータブル電源</p><p>ガラス飛散防止フィルム</p></div><p>八尾市役所危機管理課に申請書と見積書（または領収書）を提出します。購入前後いずれの申請も可能です。</p><p><span class="marker">1世帯1回の利用</span>に限られます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限5万円</strong>です。高齢者のみ世帯は補助率3分の2に優遇されます。</p><p><span class="marker">消防庁推奨型式の感震ブレーカーが対象</span>です。設置工事費も含めて補助対象となります。</p><div class="note-box">八尾市は木造住宅密集地域の不燃化・耐震化にも取り組んでいます。家庭の防災対策とあわせて、地域の自主防災組織の活動にも参加し、共助の力を高めましょう。八尾市防災マップで避難場所と経路を確認しておくことが大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
];
