import { Grant } from '@/lib/types';

export const cityGrantsBatch49: Grant[] = [
  // ────────────────────────────────────────────────
  // 川口市（埼玉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kawaguchi-childcare-subsidy',
    title: '川口市 保育料軽減助成制度',
    organization: '川口市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['川口市', '保育料軽減', '助成金'],
    eligibility: '川口市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '川口市が実施する保育料軽減助成制度です。第2子以降の保育料を無料化し、多子世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・小規模保育事業所に通う子どもの保育料</span>を軽減する制度です。</p><p>荒川を挟んで東京都に隣接する川口市は、かつて「キューポラのある街」として鋳物産業で栄え、現在は人口約60万人を擁する埼玉県最大の都市です。東京へのアクセスの良さから子育て世帯の流入が続いており、保育ニーズの高まりに対応した支援策を拡充しています。</p><p><span class="marker-green">第2子以降の保育料が無料となり、きょうだいの年齢制限も撤廃されています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川口市に住民登録があり、認可保育施設に在籍する子どもの保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：所得に応じた通常の保育料</p><p>第2子：無料</p><p>第3子以降：無料</p></div><p>保育料の軽減は、<strong>保育所入所時の手続きの中で自動的に適用</strong>されます。別途の申請は原則不要ですが、世帯構成の変更があった場合は川口市役所保育入所課へ届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料が全額免除</strong>されます。第1子の保育料は世帯の市民税所得割額に応じて決定されます。</p><p><span class="marker">3歳児クラス以上は幼児教育・保育の無償化により全員無料</span>です。本制度は主に0〜2歳児クラスの保育料軽減に効果を発揮します。</p><div class="note-box">認可外保育施設を利用している場合は、別途「認可外保育施設利用料補助金」の対象となる場合があります。延長保育料や給食費は軽減の対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-birth-bonus',
    title: '川口市 出産・子育て応援給付金',
    organization: '川口市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['川口市', '出産祝い金', '給付金'],
    eligibility: '川口市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '川口市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出後に5万円の合計10万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出生届出後に5万円（子育て応援給付金）</span>の合計10万円を支給する制度です。</p><p>川口市は東京都北区・足立区に隣接し、JR京浜東北線や埼玉高速鉄道で都心へ直結する利便性の高い街です。若い世帯の転入が多く、年間の出生数も県内トップクラスを維持しています。この給付金は、妊娠・出産期の経済的負担を軽減し、安心して子育てをスタートできるよう支援するものです。</p><p><span class="marker-green">所得制限はなく、川口市に住むすべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川口市に住民登録がある妊婦（出産応援給付金）および出産後の養育者（子育て応援給付金）が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>妊娠届出時に保健師等と面談 → 出産応援給付金（5万円）の申請</p><p>出生届出後に保健師等の新生児訪問 → 子育て応援給付金（5万円）の申請</p></div><p>川口市保健センターまたは各支所で面談を受けた後、<strong>申請書を提出</strong>します。オンライン申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。双子以上の場合、子育て応援給付金は子どもの人数分が支給されます。</p><p><span class="marker">面談の実施が給付の条件</span>となっており、面談を受けずに申請書のみ提出しても支給されません。</p><div class="highlight-box">川口市では、この給付金のほかにも産後ケア事業や子育て支援センターの利用など、妊娠期から切れ目のない支援体制を整備しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-housing-purchase',
    title: '川口市 親元近居・同居住宅取得補助金',
    organization: '川口市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['川口市', '住宅取得', '補助金'],
    eligibility: '川口市内で親世帯の近くに住宅を取得する子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '川口市が実施する親元近居・同居住宅取得補助金です。親世帯の近くに住宅を購入する子育て世帯に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 親元近居・同居住宅取得補助金は、<span class="marker">子育て世帯が親世帯の近くに新たに住宅を取得する場合</span>に費用の一部を補助する制度です。</p><p>川口市は東京に隣接しながらも住宅価格が比較的手頃で、子育て世帯に人気の住宅地です。三世代で支え合う子育て環境を促進するため、親世帯との近居・同居を後押しする補助金を設けています。</p><p>補助額は<strong>近居で最大20万円、同居で最大30万円</strong>です。<span class="marker-green">市外からの転入の場合は加算措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる（または妊娠中の）世帯であること</p><p>親世帯が川口市内に1年以上居住していること</p><p>新たに住宅を取得（購入・新築）すること</p><p>市税の滞納がないこと</p></div><p>川口市役所住宅政策課に申請書と必要書類を提出します。住宅の売買契約書・登記事項証明書・親世帯との関係を証明する書類が必要です。</p><p><span class="marker">住宅取得後1年以内に申請してください</span>。取得前の事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>近居（直線距離2km以内）で20万円、同居で30万円</strong>です。市外からの転入の場合は10万円が加算されます。</p><p><span class="marker">中古住宅の取得も対象</span>ですが、親族間の売買は対象外です。</p><div class="note-box">本補助金は住宅ローン減税など国の制度との併用が可能です。川口市は都心へのアクセスが良好で、親世帯の子育てサポートを受けながら通勤できる環境が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-infertility',
    title: '川口市 不妊治療費助成制度',
    organization: '川口市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['川口市', '不妊治療', '助成金'],
    eligibility: '川口市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から1年以内）',
    description: '川口市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担額</span>を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、体外受精や顕微授精などの高度な治療では自己負担が依然として大きな負担となっています。川口市では、子どもを望む夫婦が経済的な理由で治療を諦めることのないよう、独自の助成制度を設けています。</p><p><span class="marker-green">保険適用の不妊治療であれば、一般不妊治療・生殖補助医療のいずれも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川口市に住民登録がある法律上の婚姻関係にある夫婦、または事実婚関係にある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>領収書（保険適用分の自己負担額がわかるもの）</p><p>夫婦の住民票・健康保険証</p></div><p>川口市保健センターに申請書類を提出します。<strong>治療が終了した日の属する年度の末日まで</strong>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対して、<strong>1年度あたり最大10万円</strong>が助成されます。</p><p><span class="marker">助成回数に上限がある場合がありますので、事前に窓口で確認してください</span>。</p><div class="highlight-box">川口市では不妊治療に関する相談窓口も設置しています。治療と仕事の両立に関する情報提供や、精神的なサポートも受けられますので、一人で悩まずご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-scholarship',
    title: '川口市 給付型奨学金制度',
    organization: '川口市',
    type: 'local',
    maxAmount: '月額1万5千円',
    maxAmountNum: 18,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['川口市', '奨学金', '教育支援'],
    eligibility: '川口市に住所を有する高校生・大学生等の保護者で経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '川口市が実施する給付型奨学金制度です。経済的な理由で修学が困難な高校生・大学生等に月額1万5千円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、返済不要の奨学金を給付する制度です。</p><p>川口市は教育に熱心な家庭が多く、市内には県立・私立の高校も多数立地しています。しかし、家庭の経済事情により進学や修学の継続が難しいケースもあり、将来を担う若者の学びを地域全体で支える仕組みとしてこの奨学金制度が運営されています。</p><p><span class="marker-green">返済不要の給付型であり、卒業後の負担が一切ありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>川口市内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>学業成績が一定基準を満たしていること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて、川口市教育委員会学務課で申請を受け付けます。在学証明書、成績証明書、所得証明書などの提出が必要です。</p><p><span class="marker">選考は書類審査により行われ、結果は6月頃に通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>奨学金は<strong>月額1万5千円で、年額18万円</strong>が給付されます。毎月指定口座に振り込まれます。</p><p><span class="marker">他の奨学金制度との併用が可能な場合があります</span>が、重複受給に制限がある場合もあるため事前にご確認ください。</p><div class="note-box">給付型のため返済の必要はありませんが、退学や長期休学の場合は給付が停止されます。毎年度の継続申請が必要ですので、手続き時期を忘れないようにしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-sme-support-v2',
    title: '川口市 中小企業経営革新補助金',
    organization: '川口市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['川口市', '中小企業支援', '補助金'],
    eligibility: '川口市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '川口市が実施する中小企業経営革新補助金です。市内中小企業の設備投資やDX推進に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 中小企業経営革新補助金は、<span class="marker">市内の中小企業が行う経営革新や生産性向上のための設備投資</span>に対して費用の一部を補助する制度です。</p><p>川口市は江戸時代から続く鋳物産業をはじめ、多様な製造業が集積するものづくりの街です。近年はDX化やカーボンニュートラルへの対応など、経営環境の変化に直面する中小企業を支援するため、この補助制度を設けています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">製造業だけでなく、サービス業・小売業なども対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>川口市内に事業所（本店または主たる事業所）があること</p><p>中小企業基本法に規定する中小企業者であること</p><p>市税の滞納がないこと</p><p>経営革新計画または事業計画書を提出できること</p></div><p>川口市役所経済部産業振興課に申請書と事業計画書を提出します。審査では事業の実現性と経営革新の効果が評価されます。</p><p><span class="marker">川口商工会議所で無料の経営相談を受けてから計画を策定する</span>のがおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備購入費、システム導入費、専門家謝金などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定を受けてから経費を支出してください。</p><div class="highlight-box">川口市は鋳物や機械金属産業の伝統を持ちながらも、IT関連企業の進出も増えています。ものづくりとデジタル技術の融合を目指す事業計画は審査で高く評価される傾向があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-nursing-equipment',
    title: '川口市 介護用品支給事業',
    organization: '川口市',
    type: 'local',
    maxAmount: '年間6万円相当',
    maxAmountNum: 6,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['川口市', '介護用品', '支給'],
    eligibility: '川口市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '川口市が実施する介護用品支給事業です。在宅介護を行う家族に対し、紙おむつ等の介護用品を年間6万円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>川口市は高齢化が進む中でも在宅介護を選択する家庭が多く、介護する家族の負担軽減が課題となっています。この事業では、日常的に必要となる介護用品の費用を市が負担することで、在宅介護の継続を支援しています。</p><p><span class="marker-green">市民税非課税世帯が主な対象で、介護用品のカタログから必要な商品を選択できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川口市に住民登録があり、以下の条件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>在宅で生活する要介護4または5の認定を受けた高齢者を介護していること</p><p>介護を受ける方が市民税非課税であること</p><p>介護を受ける方が病院・施設に入院・入所していないこと</p></div><p>川口市役所長寿支援課または各地域包括支援センターに申請します。<strong>介護保険被保険者証</strong>と申請書の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額5,000円相当の介護用品が支給され、<strong>年間で最大6万円相当</strong>となります。紙おむつ、尿取りパッド、使い捨て手袋などが対象です。</p><p><span class="marker">入院中や施設入所中は支給が一時停止</span>されます。在宅に戻った際は届出により支給が再開されます。</p><div class="note-box">介護保険サービスで紙おむつの支給を受けている場合は、本事業との重複支給はできません。どちらの制度を利用するか、ケアマネジャーに相談して決めるのがよいでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-elderly-support',
    title: '川口市 高齢者見守りサービス事業',
    organization: '川口市',
    type: 'local',
    maxAmount: '無料（市が費用負担）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '埼玉県',
    tags: ['川口市', '高齢者見守り', '生活支援'],
    eligibility: '川口市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '川口市が実施する高齢者見守りサービス事業です。ひとり暮らし高齢者等を対象に、緊急通報装置の貸与や定期的な安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 高齢者見守りサービス事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、安心して在宅生活を続けられるよう見守り支援を行う事業です。</p><p>川口市は人口約60万人の大都市でありながら、高齢者の孤立防止に積極的に取り組んでいます。緊急通報装置の貸与や配食サービスによる安否確認など、複数のメニューで見守りを行っています。</p><p><span class="marker-green">利用料は無料で、市が費用を全額負担します</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>川口市内に住所を有する65歳以上の方</p><p>ひとり暮らし、または高齢者のみの世帯</p><p>日中独居になる高齢者</p><p>慢性疾患等により常に注意を必要とする方</p></div><p>川口市役所長寿支援課または最寄りの地域包括支援センターに申請します。民生委員を通じた申請も可能です。</p><p><span class="marker">申請後、職員が訪問調査を行い、適切なサービスを決定</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与は無料</strong>で、ボタン一つで消防署や協力員に通報できます。配食サービスでは食事の配達とあわせて安否確認を行います。</p><p><span class="marker">固定電話回線が必要な機種もありますので、申請前にご確認ください</span>。携帯電話回線対応の装置も導入が進んでいます。</p><div class="highlight-box">川口市では民生委員やボランティアによる訪問見守り活動も実施しています。複数の見守りサービスを組み合わせることで、より安心な生活環境を整えることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-seismic-diagnosis',
    title: '川口市 木造住宅耐震診断助成制度',
    organization: '川口市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '埼玉県',
    tags: ['川口市', '耐震診断', '助成金'],
    eligibility: '川口市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '川口市が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>川口市は荒川沿いの沖積低地に位置し、地震発生時には液状化のリスクも指摘されています。旧耐震基準の木造住宅は耐震性が不足している可能性が高く、まず耐震診断を受けて現状を把握することが防災の第一歩です。</p><p><span class="marker-green">診断費用の一部を市が負担し、住宅の耐震化を促進します</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>川口市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>自己の居住用であること</p></div><p>川口市役所建築安全課に申請書を提出します。建築年が確認できる書類（建築確認通知書や登記事項証明書等）が必要です。</p><p><span class="marker">必ず診断実施前に申請してください</span>。すでに診断を受けた後の申請は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用の一部として、<strong>最大5万円</strong>が助成されます。市が指定する耐震診断士による診断が条件です。</p><p><span class="marker">耐震診断の結果、補強が必要と判定された場合は、別途「耐震改修補助金」</span>の利用も検討できます。</p><div class="note-box">マンションなどの非木造住宅は本制度の対象外です。川口市では防災に関する出前講座も実施しているため、地域の防災力向上にもぜひご参加ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 越谷市（埼玉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'koshigaya-childcare-subsidy',
    title: '越谷市 保育料軽減制度',
    organization: '越谷市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['越谷市', '保育料軽減', '助成金'],
    eligibility: '越谷市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '越谷市が実施する保育料軽減制度です。第2子以降の保育料を無料化し、多子世帯の子育て負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する子どもの保育料</span>を軽減する制度です。</p><p>越谷市は埼玉県南東部に位置し、イオンレイクタウンをはじめとする大型商業施設で知られる人口約34万人の街です。元荒川や中川が流れる水辺の豊かな環境の中で、子育て世帯の増加に対応した保育料軽減策を講じています。</p><p><span class="marker-green">第2子以降の保育料が無料となり、世帯の経済的負担を大幅に軽減</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>越谷市に住民登録があり、認可保育施設を利用している子どもの保護者が対象です。</p><div class="summary-box" data-title="保育料の軽減内容"><p>第1子：所得に応じた通常の保育料</p><p>第2子：無料</p><p>第3子以降：無料</p></div><p>軽減は<strong>入所手続きの際に自動的に適用</strong>されるため、別途の申請は原則不要です。きょうだいの在籍状況に変更があった場合は、越谷市役所子ども育成課への届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の0〜2歳児クラスの保育料が全額免除</strong>されます。3歳児クラス以上は幼児教育・保育の無償化により全員が無料です。</p><p><span class="marker">認可外保育施設を利用している場合は本制度の対象外</span>ですが、別途の補助制度が用意されている場合があります。</p><div class="note-box">延長保育料、給食費（副食費）、教材費等は軽減の対象外です。副食費については、年収360万円未満相当の世帯や第3子以降は免除される国の制度があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-birth-bonus',
    title: '越谷市 出産・子育て応援給付金',
    organization: '越谷市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['越谷市', '出産祝い金', '給付金'],
    eligibility: '越谷市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '越谷市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後にそれぞれ5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>越谷市は日光街道の宿場町として栄えた歴史を持ち、現在は東武スカイツリーラインやJR武蔵野線で都心にアクセスしやすい住宅都市として発展しています。レイクタウンの開発とともに若い世帯の転入が増加しており、出産・子育て期のサポート充実に力を入れています。</p><p><span class="marker-green">所得制限なしで、越谷市に住むすべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>越谷市に住民登録がある妊婦および出産後の養育者が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師等との面談 → 出産応援給付金（5万円）の申請</p><p>出生届出後にこんにちは赤ちゃん訪問 → 子育て応援給付金（5万円）の申請</p></div><p>越谷市保健センターまたは各地域の保健ステーションで面談を受けた後、<strong>申請書を提出</strong>します。面談はオンラインでも実施しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎の場合は子育て応援給付金が子どもの人数分支給されます。</p><p><span class="marker">面談の実施が支給の必須条件</span>です。面談を受けずに申請だけでは給付されません。</p><div class="note-box">越谷市では産後ケア事業（宿泊型・デイサービス型・訪問型）も充実しています。給付金の申請と併せて、各種子育て支援サービスについても相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-newlywed-rent',
    title: '越谷市 結婚新生活支援事業補助金',
    organization: '越谷市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['越谷市', '新婚家賃補助', '補助金'],
    eligibility: '越谷市内で新生活を始める新婚世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '越谷市が実施する結婚新生活支援事業補助金です。新婚世帯の住居費や引越費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 結婚新生活支援事業補助金は、<span class="marker">新たに婚姻届を提出した世帯の住居費（家賃・住宅購入費）や引越費用</span>を補助する制度です。</p><p>越谷市はレイクタウンの街びらきを契機に若い世帯に人気の住宅地となっており、新婚カップルの定住を促進するため、新生活にかかる経済的負担を軽減する施策を展開しています。</p><p>補助上限は<strong>夫婦ともに29歳以下の場合は60万円、それ以外は30万円</strong>です。<span class="marker-green">夫婦の合計所得が500万円未満であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届を提出した日において夫婦ともに39歳以下であること</p><p>夫婦の合計所得が500万円未満であること</p><p>越谷市内に新居があること</p><p>過去にこの補助金を受けていないこと</p></div><p>越谷市役所市民協働部市民活動支援課に申請書と必要書類を提出します。婚姻届受理証明書、住民票、賃貸借契約書または売買契約書、所得証明書等が必要です。</p><p><span class="marker">婚姻届提出から1年以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>住居費（家賃、敷金・礼金、共益費）と引越費用の合計額</strong>が補助対象です。上限は夫婦ともに29歳以下で60万円、それ以外は30万円です。</p><p><span class="marker">住居費は婚姻日から申請日までに支払った分が対象</span>で、婚姻前の費用は含まれません。</p><div class="highlight-box">越谷市はレイクタウン地区を中心に新築マンションや戸建ての供給が続いており、住宅購入費にも本補助金を充当できます。住宅ローン減税との併用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-disability-medical',
    title: '越谷市 重度心身障害者医療費助成制度',
    organization: '越谷市',
    type: 'local',
    maxAmount: '自己負担分を全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['越谷市', '障害者医療', '助成金'],
    eligibility: '越谷市に住所を有する重度の身体・知的・精神障害のある方',
    applicationPeriod: '通年',
    description: '越谷市が実施する重度心身障害者医療費助成制度です。重度障害のある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 重度心身障害者医療費助成制度は、<span class="marker">重度の身体障害・知的障害・精神障害のある方</span>の保険診療にかかる自己負担分を助成する制度です。</p><p>越谷市は埼玉県の中核市として、障害のある方が安心して暮らせる福祉のまちづくりを推進しています。この制度は、障害のある方が必要な医療を経済的な心配なく受けられるよう設けられた重要な支援です。</p><p><span class="marker-green">通院・入院・調剤のいずれも助成対象で、窓口負担がなくなります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>越谷市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級・3級</p><p>療育手帳 ○A・A・B</p><p>精神障害者保健福祉手帳1級</p><p>後期高齢者医療制度の障害認定を受けた方</p></div><p>越谷市役所障害福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類、<strong>振込先口座情報</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関では受給資格証を提示することで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">65歳以上で新たに障害認定を受けた方は、一部対象外となる場合があります。また、一定の所得がある方は所得制限により助成対象外となることがありますので、窓口で事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-school-lunch',
    title: '越谷市 学校給食費補助制度',
    organization: '越谷市',
    type: 'local',
    maxAmount: '第3子以降の給食費無料',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['越谷市', '給食費補助', '教育支援'],
    eligibility: '越谷市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の転入も随時受付）',
    description: '越谷市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を無償化し、多子世帯の教育費負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 学校給食費補助制度は、<span class="marker">市立小中学校に通う第3子以降の児童生徒の学校給食費</span>を全額補助する制度です。</p><p>越谷市は「水郷こしがや」として知られる埼玉県東部の中核市で、子育て支援を重要施策に位置づけています。多子世帯にとって大きな負担となる給食費について、第3子以降を無償化することで、安心して子どもを育てられる環境を整えています。</p><p><span class="marker-green">所得制限はなく、第3子以降であれば全世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>越谷市立小中学校に在籍していること</p><p>高校生以下の子どものうち3人目以降であること</p><p>保護者が越谷市内に住所を有すること</p></div><p>年度初めに学校を通じて案内が配布されます。申請書を学校に提出すると、越谷市教育委員会学務課で審査が行われます。</p><p><span class="marker">年度途中の転入や出生による対象変更の場合も随時申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額免除</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円程度の負担軽減になります。</p><p><span class="marker">就学援助制度で給食費が支給されている場合は、本制度との重複支給はありません</span>。</p><div class="highlight-box">越谷市の学校給食は地産地消を推進しており、越谷産の野菜やお米を積極的に使用しています。給食費の無償化により、栄養バランスのとれた食事をすべての子どもが安心して食べられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-telework-bonus',
    title: '越谷市 テレワーク環境整備補助金',
    organization: '越谷市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['越谷市', 'テレワーク', '補助金'],
    eligibility: '越谷市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '越谷市が実施するテレワーク環境整備補助金です。中小企業のテレワーク導入にかかる費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 テレワーク環境整備補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する場合</span>の費用を補助する制度です。</p><p>越谷市は東京のベッドタウンとして発展しており、多くの市民が都心への通勤を行っています。テレワークの推進は、通勤時間の削減や多様な働き方の実現に加え、地域内での消費活動の増加にもつながるため、市が積極的に支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は10万円</strong>です。<span class="marker-green">就業規則等にテレワーク制度を規定することが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用パソコン・タブレット等の機器購入費</p><p>VPN・クラウドサービス等のシステム導入費</p><p>Web会議ツールのライセンス費</p><p>就業規則変更に伴う社会保険労務士等への謝金</p></div><p>越谷市役所経済振興課に申請書と事業計画書を提出します。</p><p><span class="marker">テレワーク制度を就業規則等に規定済み、または導入予定であること</span>が必要です。交付決定前の経費は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限10万円</strong>です。1事業者につき1回限りの利用です。</p><p><span class="marker">個人事業主も対象</span>ですが、自宅兼事業所の場合は事業用途分のみが対象経費となります。</p><div class="note-box">テレワークの導入に関する無料相談は、越谷商工会議所でも受けられます。国や県の類似補助金との併用はできない場合がありますので、事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-nursing-home-reform',
    title: '越谷市 高齢者住宅改修費給付事業',
    organization: '越谷市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['越谷市', '介護リフォーム', '給付金'],
    eligibility: '越谷市に住所を有する65歳以上の要介護・要支援認定者',
    applicationPeriod: '通年',
    description: '越谷市が実施する高齢者住宅改修費給付事業です。介護のためのバリアフリー改修工事に最大20万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 高齢者住宅改修費給付事業は、<span class="marker">要介護・要支援認定を受けた高齢者が在宅で安全に暮らせるよう、住宅のバリアフリー改修</span>にかかる費用を給付する制度です。</p><p>越谷市は高齢化が進む中、住み慣れた地域で安心して暮らし続けられる環境づくりを推進しています。手すりの設置や段差の解消、浴室・トイレの改修など、転倒防止や介護負担軽減のための工事が対象です。</p><p><span class="marker-green">介護保険の住宅改修費とは別枠で利用できる市独自の制度</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>越谷市に住民登録がある65歳以上で、要介護・要支援認定を受けている方が対象です。</p><div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消</p><p>滑り止めの設置</p><p>浴室・トイレの改修（バリアフリー化）</p></div><p>越谷市役所地域包括ケア課に申請書と工事見積書を提出します。ケアマネジャーに相談の上、<strong>工事着手前に申請が必要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の一部として、<strong>最大20万円</strong>が給付されます。所得に応じて自己負担割合が異なります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と合わせて利用することで、より大規模なバリアフリー改修が可能</span>です。</p><div class="note-box">新築や増築は対象外です。賃貸住宅の場合は家主の承諾書が必要となります。工事完了後に実績報告書と領収書の提出が必要ですので、書類の保管を忘れないでください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-energy-support',
    title: '越谷市 住宅用省エネ設備導入補助金',
    organization: '越谷市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '埼玉県',
    tags: ['越谷市', '省エネ', '補助金'],
    eligibility: '越谷市内の自己居住用住宅に省エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '越谷市が実施する住宅用省エネ設備導入補助金です。太陽光発電や蓄電池等の導入に最大10万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 住宅用省エネ設備導入補助金は、<span class="marker">市内の住宅に太陽光発電システム・蓄電池・エネファーム等の省エネ設備を導入する場合</span>の費用を補助する制度です。</p><p>越谷市は平坦な地形で日照条件に恵まれており、太陽光発電の導入に適した環境です。地球温暖化対策とエネルギーコストの削減を両立するため、市が省エネ設備の普及促進を図っています。</p><p><span class="marker-green">個人住宅だけでなく、集合住宅の共用部分への設置も対象となる場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり1万円（上限4万円）</p><p>家庭用蓄電池：上限5万円</p><p>エネファーム（燃料電池）：上限5万円</p><p>HEMS（ホームエネルギーマネジメントシステム）：上限1万円</p></div><p>越谷市役所環境政策課に申請書と見積書を提出します。設備の設置前に申請が必要です。</p><p><span class="marker">組み合わせて導入する場合、複数の補助を同時に受けられます</span>（上限10万円）。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>各設備の補助額を合算して、<strong>1住宅あたり最大10万円</strong>が補助されます。</p><p><span class="marker">設備の設置完了後に実績報告書と領収書の提出が必要</span>です。設置業者の選定は自由ですが、設備の仕様が一定基準を満たしている必要があります。</p><div class="highlight-box">国の補助金（ZEH補助金等）や埼玉県の補助金との併用が可能な場合があります。併用することで導入コストを大幅に抑えることができますので、各制度の要件を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-bousai-equipment',
    title: '越谷市 家庭用防災設備購入助成制度',
    organization: '越谷市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '埼玉県',
    tags: ['越谷市', '防災設備', '助成金'],
    eligibility: '越谷市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '越谷市が実施する家庭用防災設備購入助成制度です。感震ブレーカーや家具転倒防止器具の購入費用を最大2万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 家庭用防災設備購入助成制度は、<span class="marker">地震災害に備えるための感震ブレーカーや家具転倒防止器具</span>などの購入費用を助成する制度です。</p><p>越谷市は中川・元荒川流域の低地に位置し、2013年には竜巻被害も経験しています。地震時の通電火災防止や家具の転倒防止は、家庭でできる重要な防災対策です。市では家庭の防災力向上を支援するため、この助成制度を設けています。</p><p><span class="marker-green">全世帯が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家具転倒防止器具（突っ張り棒・L字金具等）</p><p>ガラス飛散防止フィルム</p></div><p>越谷市役所危機管理課に申請書と領収書を提出します。購入後の事後申請方式です。</p><p><span class="marker">市内の販売店で購入した場合のみ対象</span>となります。ネット通販での購入は対象外の場合がありますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費用の2分の1以内で、<strong>1世帯あたり最大2万円</strong>が助成されます。</p><p><span class="marker">1世帯につき1回限り</span>の利用です。同一年度内に複数の防災設備を購入した場合はまとめて申請できます。</p><div class="note-box">越谷市では自主防災組織への防災資器材の助成制度も別途設けています。地域の防災訓練への参加もあわせて、日頃から災害への備えを心がけましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 船橋市（千葉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'funabashi-childcare-subsidy',
    title: '船橋市 保育料軽減助成制度',
    organization: '船橋市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['船橋市', '保育料軽減', '助成金'],
    eligibility: '船橋市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '船橋市が実施する保育料軽減助成制度です。第2子以降の保育料を無料化し、多子世帯の子育て費用を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 保育料軽減助成制度は、<span class="marker">認可保育所・認定こども園・小規模保育事業所に通う子どもの保育料</span>を軽減する制度です。</p><p>船橋市は千葉県北西部に位置する人口約64万人の中核市で、東京湾に面した地域からJR総武線・京成線沿線にかけて広大な市域を持っています。都心へのアクセスの良さと住宅価格のバランスから子育て世帯に人気が高く、保育需要の増加に対応した支援策を充実させています。</p><p><span class="marker-green">第2子以降の保育料が無料となり、きょうだいの年齢制限も撤廃されています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>船橋市に住民登録があり、認可保育施設を利用している保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：所得に応じた保育料</p><p>第2子：無料</p><p>第3子以降：無料</p></div><p><strong>入所手続き時に自動適用</strong>されるため、別途の申請は原則不要です。世帯構成に変更があった場合は、船橋市役所保育認定課へ届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の0〜2歳児クラスの保育料が全額免除</strong>されます。3歳児クラス以上は幼児教育・保育の無償化により全員無料です。</p><p><span class="marker">船橋市独自の認可外保育施設利用料補助制度も別途あります</span>ので、認可外施設利用者もご確認ください。</p><div class="note-box">延長保育料、副食費、教材費等は軽減の対象外です。船橋市は梨の生産地としても有名で、地元の梨が給食に提供されることもあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-birth-bonus',
    title: '船橋市 出産・子育て応援給付金',
    organization: '船橋市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['船橋市', '出産祝い金', '給付金'],
    eligibility: '船橋市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '船橋市が実施する出産・子育て応援給付金です。妊娠届出時と出産後にそれぞれ5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出生届出後に5万円（子育て応援給付金）</span>の合計10万円を支給する制度です。</p><p>船橋市は千葉県内最大の人口を誇る中核市で、JR総武線や東武アーバンパークライン、京成線など複数の鉄道路線が通る交通の要衝です。年間の出生数も県内トップクラスで、妊娠から出産・子育てまで切れ目のない支援体制を構築しています。</p><p><span class="marker-green">所得制限なしですべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>船橋市に住民登録がある妊婦・養育者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>妊娠届出時に保健師との面談 → 出産応援給付金（5万円）申請</p><p>出生届出後に新生児訪問（こんにちは赤ちゃん事業） → 子育て応援給付金（5万円）申請</p></div><p>船橋市保健所地域保健課、各保健センター、または船橋駅前総合窓口センターで面談と申請ができます。<strong>オンライン申請にも対応</strong>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>出産応援給付金5万円＋子育て応援給付金5万円＝合計10万円</strong>が支給されます。多胎の場合は、子育て応援給付金が人数分支給されます。</p><p><span class="marker">保健師等との面談を受けることが支給の必須条件</span>です。</p><div class="highlight-box">船橋市は「ふなばし子育てナビゲーション」を発行しており、子育て支援サービスの情報をワンストップで入手できます。給付金の申請時に各種支援制度の案内も受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-housing-purchase',
    title: '船橋市 三世代同居・近居住宅取得補助金',
    organization: '船橋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['船橋市', '住宅取得', '補助金'],
    eligibility: '船橋市内で親世帯の近くに住宅を取得する子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '船橋市が実施する三世代同居・近居住宅取得補助金です。親世帯の近くに住宅を取得する子育て世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 三世代同居・近居住宅取得補助金は、<span class="marker">子育て世帯が親世帯の近くに新たに住宅を取得（購入・新築）する場合</span>に費用の一部を補助する制度です。</p><p>船橋市は東京湾岸部から内陸部にかけて多様な住宅地が広がり、マンションから戸建てまで幅広い選択肢があります。三世代での子育て環境を整えることで、地域の活力維持と子育て世帯の安心を同時に実現する施策です。</p><p>補助額は<strong>同居で最大50万円、近居で最大30万円</strong>です。<span class="marker-green">市外からの転入の場合は加算措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる世帯（または妊娠中）であること</p><p>親世帯が船橋市内に1年以上居住していること</p><p>新たに住宅を取得すること</p><p>市税の滞納がないこと</p></div><p>船橋市役所住宅政策課に申請書類を提出します。住宅の売買契約書、登記事項証明書、親子関係を証する戸籍謄本等が必要です。</p><p><span class="marker">住宅取得後1年以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>同居で50万円、近居（市内の別住所）で30万円</strong>です。市外からの転入を伴う場合は10万円が加算されます。</p><p><span class="marker">中古住宅も対象</span>ですが、親族間の売買は対象外です。</p><div class="note-box">住宅ローン減税や国のすまい給付金との併用が可能です。船橋市は東京湾岸エリアの再開発や北部の住宅地開発が進んでおり、住宅選びの幅が広がっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-infertility',
    title: '船橋市 不妊治療費助成制度',
    organization: '船橋市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['船橋市', '不妊治療', '助成金'],
    eligibility: '船橋市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日の属する年度末まで）',
    description: '船橋市が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大15万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担額</span>を助成する制度です。</p><p>船橋市は中核市として保健所を設置しており、不妊・不育症に関する相談や治療費の助成を独自に行っています。体外受精や顕微授精などの生殖補助医療から一般不妊治療まで幅広く対象としており、子どもを望む夫婦を経済面から支援しています。</p><p><span class="marker-green">保険適用の不妊治療すべてが対象で、治療回数の上限は設けていません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>船橋市に住民登録があり、法律上の婚姻関係または事実婚関係にある夫婦が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の受診等証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票と健康保険証の写し</p></div><p>船橋市保健所地域保健課に書類を提出します。<strong>治療が終了した日の属する年度の末日まで</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対して、<strong>1年度あたり最大15万円</strong>が助成されます。</p><p><span class="marker">千葉県の特定不妊治療費助成を受けている場合は、その額を差し引いた残額が市の助成対象</span>です。</p><div class="highlight-box">船橋市保健所では不妊専門相談員による無料相談を実施しています。治療に関する不安や夫婦間のコミュニケーション、仕事との両立についても相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-scholarship',
    title: '船橋市 奨学金制度',
    organization: '船橋市',
    type: 'local',
    maxAmount: '月額2万円（大学生）',
    maxAmountNum: 24,
    category: 'education',
    prefecture: '千葉県',
    tags: ['船橋市', '奨学金', '教育支援'],
    eligibility: '船橋市に住所を有する高校生・大学生等の保護者で経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '船橋市が実施する奨学金制度です。経済的理由で修学が困難な学生に給付型の奨学金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に返済不要の奨学金を給付する制度です。</p><p>船橋市は中核市として独自の教育支援に力を入れており、市内には多くの高等学校や大学が立地する文教都市の一面も持っています。この奨学金は給付型であり、卒業後の返済負担がないことが大きな特徴です。</p><p><span class="marker-green">高校生は月額1万円、大学生等は月額2万円が給付</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>船橋市内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>学業成績が一定以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月に船橋市教育委員会学務課で受付を行います。在学証明書、成績証明書、世帯全員の所得証明書等の提出が必要です。</p><p><span class="marker">選考は書類審査によって行われ、6月頃に結果が通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>高校生は月額1万円（年額12万円）、大学生等は月額2万円（年額24万円）</strong>が給付されます。</p><p><span class="marker">他の給付型奨学金との併用が制限される場合があります</span>ので、事前にご確認ください。</p><div class="note-box">退学や長期休学の場合は給付が停止されます。毎年度の継続審査がありますので、学業成績の維持が求められます。船橋市では就学援助制度も併設しているため、小中学生のお子さんがいる場合はそちらもご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-sme-support',
    title: '船橋市 中小企業事業転換支援補助金',
    organization: '船橋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['船橋市', '中小企業支援', '補助金'],
    eligibility: '船橋市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '船橋市が実施する中小企業事業転換支援補助金です。新分野展開やDX推進等の経営革新に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 中小企業事業転換支援補助金は、<span class="marker">市内中小企業が新分野展開・業態転換・デジタル化推進等の経営革新</span>に取り組む際の費用を補助する制度です。</p><p>船橋市は東京湾岸の工業地域から内陸部の商業地域まで多様な産業が集積しており、約2万の中小企業が市内経済を支えています。経営環境の変化に対応した事業転換やDX推進を後押しし、地域経済の活性化を図っています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は50万円</strong>です。<span class="marker-green">個人事業主も申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>新規設備・機器の購入費</p><p>システム・ソフトウェアの導入費</p><p>ホームページ・ECサイトの構築費</p><p>専門家への謝金・コンサルティング費用</p></div><p>船橋市役所商工振興課に事業計画書と申請書を提出します。書類審査で事業の実現性と革新性が評価されます。</p><p><span class="marker">船橋商工会議所の経営指導を受けてから計画を策定する</span>のが推奨されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。1事業者につき1回の利用に限られます。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定を受けてから事業を開始してください。</p><div class="note-box">人件費、家賃、光熱費等の運転資金は対象外です。国や県の類似補助金との併用はできない場合がありますので、申請前にご確認ください。船橋市では商工業者向けの融資あっせん制度も設けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-nursing-equipment',
    title: '船橋市 介護用品支給事業',
    organization: '船橋市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['船橋市', '介護用品', '支給'],
    eligibility: '船橋市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '船橋市が実施する介護用品支給事業です。在宅で介護を行う家族に紙おむつ等の介護用品を月額6,250円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>船橋市は人口約64万人の中核市であり、高齢化率の上昇とともに在宅介護を行う家庭が増加しています。日常的に必要となる介護用品の費用を市が負担することで、介護する家族の経済的・身体的負担の軽減を図っています。</p><p><span class="marker-green">要介護4・5で市民税非課税の方を介護している家族が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>船橋市に住民登録があり、以下の条件を満たす方が対象です。</p><div class="summary-box" data-title="支給の要件"><p>在宅で生活する要介護4または5の認定を受けた高齢者を介護していること</p><p>介護を受ける方が市民税非課税であること</p><p>介護を受ける方が病院・施設に入院・入所していないこと</p></div><p>船橋市役所高齢者福祉課または各出張所で申請します。<strong>介護保険被保険者証</strong>と申請書の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額6,250円相当の介護用品が支給され、<strong>年間で最大約7.5万円相当</strong>となります。紙おむつ、尿取りパッド、使い捨て手袋等から選択できます。</p><p><span class="marker">入院中や施設入所中は支給が停止</span>されます。在宅に戻った際は届出により支給再開が可能です。</p><div class="note-box">船橋市は地域包括ケアシステムの構築に力を入れており、介護用品支給のほかにも家族介護教室や認知症カフェなど、介護者を支えるサービスが充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-elderly-support',
    title: '船橋市 高齢者緊急通報システム事業',
    organization: '船橋市',
    type: 'local',
    maxAmount: '無料（市が費用負担）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '千葉県',
    tags: ['船橋市', '高齢者見守り', '生活支援'],
    eligibility: '船橋市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '船橋市が実施する高齢者緊急通報システム事業です。ひとり暮らし高齢者等に緊急通報装置を無料で貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 高齢者緊急通報システム事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、緊急通報装置を無料で貸与する事業です。</p><p>船橋市は千葉県最大の人口を有する都市であり、高齢者の孤立防止と安全確保に力を入れています。緊急通報装置のボタンを押すだけで、24時間対応のコールセンターに通報でき、必要に応じて救急車の手配や協力員への連絡が行われます。</p><p><span class="marker-green">利用料は無料で、設置費用も市が全額負担</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>船橋市に住所を有する65歳以上のひとり暮らし高齢者</p><p>高齢者のみの世帯</p><p>日中独居となる高齢者</p><p>慢性疾患等で健康上の不安がある方</p></div><p>船橋市役所高齢者福祉課、各出張所、または地域包括支援センターに申請します。民生委員を通じた申請も可能です。</p><p><span class="marker">申請後に自宅訪問が行われ、設置場所の確認と使い方の説明</span>が実施されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与・設置は無料</strong>です。ペンダント型の携帯用通報ボタンも利用できます。</p><p><span class="marker">固定電話回線のない家庭でも携帯電話回線対応機種で利用可能</span>です。</p><div class="highlight-box">船橋市では緊急通報システムのほかにも、配食サービスによる安否確認や、ふれあい・いきいきサロンなど地域での見守り活動も充実しています。複数のサービスを組み合わせることで、より安心な生活を送ることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'funabashi-seismic-diagnosis',
    title: '船橋市 木造住宅耐震診断助成制度',
    organization: '船橋市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '千葉県',
    tags: ['船橋市', '耐震診断', '助成金'],
    eligibility: '船橋市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '船橋市が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>船橋市 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>船橋市は東京湾岸の埋立地から内陸部の台地まで多様な地盤条件を持ち、2011年の東日本大震災では湾岸部で液状化被害が発生しました。旧耐震基準の住宅は耐震性が不足している可能性が高く、まず診断を受けて現状を把握することが重要です。</p><p><span class="marker-green">診断費用の一部を市が助成し、住宅の耐震化を促進</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>船橋市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>自己居住用であること</p></div><p>船橋市役所建築指導課に申請書を提出します。建築年を確認できる書類が必要です。</p><p><span class="marker">診断実施前の申請が必須</span>です。すでに実施済みの診断は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用の3分の2以内で、<strong>最大5万円</strong>が助成されます。船橋市が指定する耐震診断士による診断が条件です。</p><p><span class="marker">診断の結果、補強が必要と判定された場合は耐震改修補助金（別制度）</span>の利用も可能です。</p><div class="note-box">船橋市は東日本大震災での液状化被害を教訓に、液状化対策に関する相談窓口も設置しています。耐震診断と合わせて地盤の状況も確認するのがおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.funabashi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 柏市（千葉県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kashiwa-childcare-subsidy',
    title: '柏市 保育料軽減制度',
    organization: '柏市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['柏市', '保育料軽減', '助成金'],
    eligibility: '柏市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '柏市が実施する保育料軽減制度です。第2子以降の保育料を無料とし、多子世帯の子育て負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する子どもの保育料</span>を軽減する制度です。</p><p>柏市は千葉県北西部に位置する中核市で、つくばエクスプレス沿線の「柏の葉キャンパス」地区はスマートシティとして国内外から注目を集めています。先進的なまちづくりの一環として、子育て支援にも積極的に取り組んでいます。</p><p><span class="marker-green">第2子以降の保育料が無料となり、多子世帯の経済的負担を大幅に軽減</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>柏市に住民登録があり、認可保育施設に在籍する子どもの保護者が対象です。</p><div class="summary-box" data-title="保育料の軽減内容"><p>第1子：所得に応じた通常の保育料</p><p>第2子：無料</p><p>第3子以降：無料</p></div><p><strong>入所手続き時に自動適用</strong>されるため、別途の申請は原則不要です。世帯構成に変更があった場合は柏市役所こども部保育運営課に届出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の0〜2歳児クラスの保育料が全額免除</strong>されます。3歳児クラス以上は国の無償化制度により全員無料です。</p><p><span class="marker">認可外保育施設を利用する場合は別途の補助制度をご確認ください</span>。</p><div class="note-box">延長保育料、副食費、教材費は軽減の対象外です。柏の葉キャンパス地区では先進的な保育施設も整備されており、保育の質の向上にも力を入れています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-birth-bonus',
    title: '柏市 出産・子育て応援給付金',
    organization: '柏市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['柏市', '出産祝い金', '給付金'],
    eligibility: '柏市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '柏市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後にそれぞれ5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>柏市はつくばエクスプレスの開通を契機に、柏の葉キャンパス地区を中心に先端的なまちづくりが進んでいます。東京大学・千葉大学のキャンパスが所在する学術都市の一面も持ち、子育て環境の充実に向けた取り組みも活発です。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>柏市に住民登録がある妊婦および出産後の養育者が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師との面談 → 出産応援給付金（5万円）申請</p><p>出生届出後にこんにちは赤ちゃん訪問 → 子育て応援給付金（5万円）申請</p></div><p>柏市保健所地域保健課またはウェルネス柏（柏地域医療連携センター）で面談と申請ができます。<strong>面談はオンラインでも実施</strong>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>合計10万円</strong>が支給されます。多胎の場合、子育て応援給付金は子どもの人数分が支給されます。</p><p><span class="marker">保健師等との面談が必須条件</span>で、面談なしでの支給はできません。</p><div class="highlight-box">柏市は「はぐはぐ柏」という子育てポータルサイトを運営しており、各種子育て支援制度の情報を一元的に提供しています。給付金申請時に併せて他の支援も確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-newlywed-rent',
    title: '柏市 結婚新生活支援補助金',
    organization: '柏市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['柏市', '新婚家賃補助', '補助金'],
    eligibility: '柏市内で新生活を始める新婚世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '柏市が実施する結婚新生活支援補助金です。新婚世帯の住居費や引越費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 結婚新生活支援補助金は、<span class="marker">新たに婚姻届を提出した世帯の住居費（家賃・住宅取得費用）や引越費用</span>を補助する制度です。</p><p>柏市はつくばエクスプレスやJR常磐線で都心・つくばの双方にアクセスしやすい交通利便性を持ち、若いカップルの定住先として注目されています。結婚に伴う新生活の経済的負担を軽減することで、市内定住を促進しています。</p><p>補助上限は<strong>夫婦ともに29歳以下で60万円、それ以外は30万円</strong>です。<span class="marker-green">夫婦の合計所得が500万円未満であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出日に夫婦ともに39歳以下であること</p><p>夫婦の合計所得が500万円未満であること</p><p>柏市内に新居を構えていること</p><p>過去にこの補助金を受給していないこと</p></div><p>柏市役所地域づくり推進部に申請書と必要書類を提出します。婚姻届受理証明書、住民票、家賃の賃貸借契約書または売買契約書、所得証明書等が必要です。</p><p><span class="marker">婚姻届提出から1年以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>住居費と引越費用の合計額</strong>が補助対象です。夫婦ともに29歳以下で上限60万円、それ以外は上限30万円です。</p><p><span class="marker">住居費の対象は婚姻日以降に支払った家賃・敷金・礼金・共益費</span>です。婚姻前の費用は含まれません。</p><div class="note-box">柏の葉キャンパス地区では新築マンションの供給が続いており、住宅取得費用にも本補助金を充当できます。国のすまい給付金や住宅ローン減税との併用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-disability-medical',
    title: '柏市 重度心身障害者医療費助成制度',
    organization: '柏市',
    type: 'local',
    maxAmount: '自己負担分を全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['柏市', '障害者医療', '助成金'],
    eligibility: '柏市に住所を有する重度の身体・知的・精神障害のある方',
    applicationPeriod: '通年',
    description: '柏市が実施する重度心身障害者医療費助成制度です。重度障害のある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 重度心身障害者医療費助成制度は、<span class="marker">重度の身体障害・知的障害・精神障害のある方</span>の保険診療にかかる自己負担分を助成する制度です。</p><p>柏市は中核市として保健所を設置し、障害者支援を包括的に行っています。柏の葉キャンパス地区ではユニバーサルデザインのまちづくりが進んでおり、障害の有無にかかわらず安心して暮らせる環境づくりを目指しています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象です</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>柏市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級</p><p>療育手帳 ○A・Aの1・Aの2</p><p>精神障害者保健福祉手帳1級</p><p>特別児童扶養手当1級相当の障害児</p></div><p>柏市役所障害福祉課の窓口で申請します。障害者手帳、健康保険証、本人確認書類、<strong>振込先口座情報</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が助成</strong>されます。千葉県内の医療機関では受給券を提示することで窓口負担が軽減されます。</p><p><span class="marker">県外受診の場合は一旦自己負担を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">65歳以上で新たに障害認定を受けた方や、一定以上の所得がある方は対象外となる場合があります。入院時の食事代は助成対象外です。詳しくは柏市役所障害福祉課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-school-lunch',
    title: '柏市 学校給食費助成制度',
    organization: '柏市',
    type: 'local',
    maxAmount: '第3子以降の給食費無料',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '千葉県',
    tags: ['柏市', '給食費助成', '教育支援'],
    eligibility: '柏市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中も随時受付）',
    description: '柏市が実施する学校給食費助成制度です。第3子以降の給食費を全額免除し、多子世帯の教育費負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 学校給食費助成制度は、<span class="marker">市立小中学校に通う第3子以降の児童生徒の学校給食費</span>を全額免除する制度です。</p><p>柏市は千葉県北西部の中核市で、東京大学・千葉大学の研究拠点がある学術都市の一面を持ちます。教育環境の充実は市の重点施策の一つであり、多子世帯が安心して子育てできるよう、給食費の無償化を実施しています。</p><p><span class="marker-green">所得制限なしで、第3子以降の全世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>柏市立小中学校に在籍していること</p><p>18歳以下の子どものうち3人目以降であること</p><p>保護者が柏市内に住所を有すること</p></div><p>年度初めに学校を通じて申請書が配布されます。必要事項を記入して学校へ提出してください。</p><p><span class="marker">年度途中の転入や出生による対象変更の場合も随時申請可能</span>です。柏市教育委員会学校教育課で受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額免除</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円程度の負担軽減となります。</p><p><span class="marker">就学援助制度の給食費支給と重複する場合は調整</span>が行われます。</p><div class="highlight-box">柏市の学校給食はアレルギー対応にも力を入れており、栄養士と連携した個別対応を行っています。給食費無償化により、安全で栄養バランスの取れた食事がより多くの子どもに届きます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-telework-bonus',
    title: '柏市 テレワーク推進補助金',
    organization: '柏市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['柏市', 'テレワーク', '補助金'],
    eligibility: '柏市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '柏市が実施するテレワーク推進補助金です。中小企業のテレワーク導入にかかる費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 テレワーク推進補助金は、<span class="marker">市内の中小企業がテレワーク環境を新規に整備する場合</span>の費用を補助する制度です。</p><p>柏市はつくばエクスプレスの沿線開発を契機にスマートシティ構想を推進しており、柏の葉キャンパス地区には先進的なコワーキングスペースやサテライトオフィスが立地しています。テレワークの普及は市の都市戦略にも合致しており、中小企業の働き方改革を積極的に支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">テレワーク制度を就業規則等に規定することが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用のPC・タブレット・モニター等の機器購入費</p><p>VPN・リモートアクセスツールの導入費</p><p>Web会議システムのライセンス費</p><p>セキュリティ対策費用</p></div><p>柏市役所経済産業部商工振興課に申請書と事業計画書を提出します。</p><p><span class="marker">就業規則等にテレワーク制度を規定済みまたは導入予定であること</span>が必須です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者あたり1回限りの利用です。</p><p><span class="marker">交付決定前の経費は対象外</span>です。必ず交付決定を受けてから機器の購入やサービスの契約を行ってください。</p><div class="note-box">柏の葉キャンパス地区にはシェアオフィスやコワーキングスペースが整備されています。自社でテレワーク環境を整えるほか、こうした共有施設の利用も有効な選択肢です。柏商工会議所でもテレワーク導入に関する相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-nursing-home-reform',
    title: '柏市 高齢者住宅改修費支給事業',
    organization: '柏市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['柏市', '介護リフォーム', '支給'],
    eligibility: '柏市に住所を有する65歳以上の要介護・要支援認定者',
    applicationPeriod: '通年',
    description: '柏市が実施する高齢者住宅改修費支給事業です。介護のためのバリアフリー改修工事費用を最大20万円支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 高齢者住宅改修費支給事業は、<span class="marker">要介護・要支援認定を受けた高齢者が安全に在宅生活を送るための住宅改修</span>にかかる費用を支給する市独自の制度です。</p><p>柏市は「柏モデル」と呼ばれる地域包括ケアシステムの先進地として全国的に知られており、高齢者が住み慣れた地域で安心して暮らし続けられる環境づくりを推進しています。この事業はその取り組みの一環です。</p><p><span class="marker-green">介護保険の住宅改修費とは別枠で利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>柏市に住民登録がある65歳以上で、要介護・要支援認定を受けている方が対象です。</p><div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消・スロープの設置</p><p>滑り止めの設置</p><p>トイレ・浴室のバリアフリー改修</p></div><p>柏市役所高齢者支援課または地域包括支援センターに相談のうえ申請します。<strong>工事着手前の事前申請が必要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費に対して、<strong>最大20万円</strong>が支給されます。所得に応じた自己負担があります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）との併用で、最大40万円の改修が可能</span>です。</p><div class="note-box">新築・増築は対象外です。賃貸住宅の場合は家主の同意が必要です。工事完了後には実績報告書と領収書、改修後の写真の提出が求められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-energy-support',
    title: '柏市 住宅用省エネルギー設備等補助金',
    organization: '柏市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '千葉県',
    tags: ['柏市', '省エネ', '補助金'],
    eligibility: '柏市内の住宅に省エネルギー設備を導入する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '柏市が実施する住宅用省エネルギー設備等補助金です。太陽光発電・蓄電池等の導入費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 住宅用省エネルギー設備等補助金は、<span class="marker">市内の住宅に太陽光発電システム・蓄電池・高効率給湯器等を導入する場合</span>の費用を補助する制度です。</p><p>柏市は柏の葉キャンパス地区で「環境共生都市」の実現に取り組んでおり、エネルギーの地産地消やカーボンニュートラルの推進を掲げています。家庭の省エネ化は市の環境政策の重要な柱です。</p><p><span class="marker-green">太陽光発電と蓄電池の同時導入で補助額が加算されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり1万円（上限4万円）</p><p>家庭用蓄電池：上限5万円</p><p>エネファーム（家庭用燃料電池）：上限5万円</p><p>V2H（電気自動車充放電設備）：上限5万円</p></div><p>柏市役所環境政策課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置前に申請が必要</span>です。設置後の事後申請は受け付けていません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>各設備の補助額を合算して、<strong>1住宅あたり最大10万円</strong>が補助されます。</p><p><span class="marker">設置完了後に実績報告書・領収書・設置写真の提出が必要</span>です。</p><div class="highlight-box">柏の葉スマートシティでは、街区全体でのエネルギーマネジメントシステム（AEMS）が稼働しています。個人の省エネ設備導入とあわせて、まち全体でのエネルギー最適化が進んでいます。国の補助金との併用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-bousai-equipment',
    title: '柏市 防災用品購入費助成制度',
    organization: '柏市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '千葉県',
    tags: ['柏市', '防災用品', '助成金'],
    eligibility: '柏市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '柏市が実施する防災用品購入費助成制度です。感震ブレーカーや家具転倒防止器具の購入費を最大2万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 防災用品購入費助成制度は、<span class="marker">地震災害に備えた感震ブレーカーや家具転倒防止器具等</span>の購入費用を助成する制度です。</p><p>柏市は利根川水系の河川が多く、水害対策と合わせて地震への備えも重要な防災課題です。各家庭での防災対策を促進するため、市が防災用品の購入費用の一部を助成しています。</p><p><span class="marker-green">全世帯が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災用品"><p>感震ブレーカー（簡易型・分電盤タイプ）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>ガラス飛散防止フィルム</p><p>転倒防止マット・ストッパー</p></div><p>柏市役所防災安全課に領収書と申請書を提出します。購入後の事後申請方式です。</p><p><span class="marker">市内の販売店で購入した場合に限ります</span>。インターネット通販は対象外の場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費用の2分の1以内で、<strong>1世帯あたり最大2万円</strong>が助成されます。</p><p><span class="marker">1世帯につき1回限り</span>の利用です。複数の防災用品をまとめて購入してもOKです。</p><div class="note-box">柏市では自主防災組織への資器材助成や、防災士資格取得費用の補助も行っています。自宅の備えだけでなく、地域の防災活動にも参加して、災害に強いまちづくりに貢献しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 八王子市（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'hachioji-childcare-subsidy',
    title: '八王子市 保育料軽減制度',
    organization: '八王子市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['八王子市', '保育料軽減', '助成金'],
    eligibility: '八王子市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '八王子市が実施する保育料軽減制度です。第2子以降の保育料を無料とし、多子世帯の子育て費用を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する子どもの保育料</span>を軽減する制度です。</p><p>八王子市は東京都西部に位置する人口約58万人の中核市で、21の大学・短大が立地する日本有数の学園都市です。高尾山をはじめとする豊かな自然に囲まれながら、都心へのアクセスも確保できる住環境が特徴で、子育て世帯の定住に向けた支援策を積極的に展開しています。</p><p><span class="marker-green">第2子以降の保育料が無料で、東京都の独自施策と合わせた手厚い軽減</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八王子市に住民登録があり、認可保育施設に在籍する子どもの保護者が対象です。</p><div class="summary-box" data-title="軽減の仕組み"><p>第1子：所得に応じた通常の保育料</p><p>第2子：無料</p><p>第3子以降：無料</p></div><p><strong>入所手続き時に自動適用</strong>されるため、別途の申請は不要です。世帯構成に変更がある場合は八王子市役所保育幼稚園課へ届出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の0〜2歳児クラスの保育料が全額免除</strong>されます。3歳児クラス以上は国の無償化制度と東京都の施策により全員無料です。</p><p><span class="marker">東京都の「018サポート」など都独自の子育て支援制度も併用可能</span>です。</p><div class="note-box">延長保育料、副食費、教材費は軽減の対象外です。八王子市は自然が豊かで、園庭が広い保育施設が多いことも子育て世帯に人気の理由です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-birth-bonus',
    title: '八王子市 出産・子育て応援給付金',
    organization: '八王子市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['八王子市', '出産祝い金', '給付金'],
    eligibility: '八王子市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '八王子市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後にそれぞれ5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>八王子市は多摩地域の拠点都市であり、JR中央線や京王線で新宿方面へ直通する交通網を持っています。21の大学が集まる学園都市として若者が多い一方、子育て世帯の定住促進も重要施策に位置づけており、出産から子育てまで切れ目のない支援を行っています。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八王子市に住民登録がある妊婦・養育者が対象です。</p><div class="summary-box" data-title="給付の流れ"><p>妊娠届出時に保健師との面談 → 出産応援給付金（5万円）申請</p><p>出生届出後に新生児訪問 → 子育て応援給付金（5万円）申請</p></div><p>八王子市保健所または各保健福祉センターで面談と申請を受け付けています。<strong>電子申請にも対応</strong>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>合計10万円</strong>が支給されます。多胎の場合は子育て応援給付金が人数分支給されます。</p><p><span class="marker">面談を受けることが必須条件</span>で、面談なしの支給はできません。</p><div class="highlight-box">八王子市では東京都の「赤ちゃんファースト」（出産応援事業）のギフトも受け取れます。国・都・市の三層の支援を組み合わせた手厚いサポート体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-housing-purchase',
    title: '八王子市 親元近居・同居住宅取得支援補助金',
    organization: '八王子市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '東京都',
    tags: ['八王子市', '住宅取得', '補助金'],
    eligibility: '八王子市内で親世帯の近くに住宅を取得する子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '八王子市が実施する親元近居・同居住宅取得支援補助金です。親世帯の近くに住宅を取得する子育て世帯に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 親元近居・同居住宅取得支援補助金は、<span class="marker">子育て世帯が親世帯の近くに新たに住宅を取得する場合</span>に費用の一部を補助する制度です。</p><p>八王子市は東京都内でも最大の面積を持つ都市で、JR八王子駅周辺の都市エリアから高尾山麓の自然豊かなエリアまで多様な住環境を提供しています。三世代での子育て環境を整えることで、地域コミュニティの活性化と子育て世帯の安心を両立しています。</p><p>補助額は<strong>同居で最大30万円、近居で最大20万円</strong>です。<span class="marker-green">市外からの転入の場合は加算措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる世帯であること</p><p>親世帯が八王子市内に1年以上居住していること</p><p>新たに住宅を取得（購入・新築）すること</p><p>市税の滞納がないこと</p></div><p>八王子市役所住宅政策課に申請書類を提出します。住宅の売買契約書、登記事項証明書、戸籍謄本等が必要です。</p><p><span class="marker">住宅取得後1年以内の申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>同居で30万円、近居で20万円</strong>が基本です。市外からの転入を伴う場合は10万円が加算されます。</p><p><span class="marker">中古住宅の取得も対象</span>ですが、親族間の売買や相続による取得は対象外です。</p><div class="note-box">八王子市は多摩ニュータウンの一部を含んでおり、良質な中古住宅ストックも豊富です。住宅ローン減税や東京都の住宅関連補助との併用も可能ですので、各制度を組み合わせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-infertility',
    title: '八王子市 不妊検査・治療費助成制度',
    organization: '八王子市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['八王子市', '不妊治療', '助成金'],
    eligibility: '八王子市に住所を有し、不妊検査・治療を受けている夫婦',
    applicationPeriod: '通年（検査・治療終了日から1年以内）',
    description: '八王子市が実施する不妊検査・治療費助成制度です。保険適用後の自己負担分に対し最大5万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 不妊検査・治療費助成制度は、<span class="marker">不妊検査および不妊治療にかかる保険適用後の自己負担額</span>を助成する制度です。</p><p>八王子市は多摩地域の中核都市として、市民の健康支援に力を入れています。不妊治療は精神的・肉体的な負担に加え、経済的負担も大きいため、市では独自の助成制度を設けて子どもを望む夫婦を支援しています。東京都の助成制度と合わせて利用できます。</p><p><span class="marker-green">不妊検査から治療まで一貫して助成の対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八王子市に住民登録がある法律上の婚姻関係にある夫婦または事実婚の方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊検査・治療費助成申請書</p><p>医療機関発行の受診証明書</p><p>医療費の領収書</p><p>夫婦の住民票・健康保険証の写し</p></div><p>八王子市保健所に申請書類を提出します。<strong>検査・治療終了日から1年以内</strong>に申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対し、<strong>最大5万円</strong>が助成されます。</p><p><span class="marker">東京都の不妊検査等助成事業（上限5万円）との併用が可能</span>で、合わせて最大10万円の助成を受けられます。</p><div class="highlight-box">八王子市保健所では不妊・不育に関する専門相談を実施しています。治療のこと、仕事との両立、パートナーとの関係など、一人で悩まず専門スタッフにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-scholarship',
    title: '八王子市 奨学資金制度',
    organization: '八王子市',
    type: 'local',
    maxAmount: '月額1万8千円（大学生）',
    maxAmountNum: 21,
    category: 'education',
    prefecture: '東京都',
    tags: ['八王子市', '奨学金', '教育支援'],
    eligibility: '八王子市に住所を有する高校生・大学生等の保護者で経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月',
    description: '八王子市が実施する奨学資金制度です。経済的理由で修学が困難な学生に給付型奨学金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 奨学資金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、返済不要の奨学金を給付する制度です。</p><p>八王子市は21の大学・短大を有する日本最大級の学園都市であり、約10万人の学生が学んでいます。この街で学ぶ若者を支えるため、市独自の給付型奨学金制度を設けており、家庭の経済事情にかかわらず教育の機会均等を目指しています。</p><p><span class="marker-green">返済不要の給付型で、卒業後の負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>八王子市内に住所を有すること</p><p>高等学校・大学・専門学校等に在学中であること</p><p>学業成績が一定基準を満たしていること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて八王子市教育委員会学事課で申請を受け付けます。在学証明書、成績証明書、所得証明書の提出が必要です。</p><p><span class="marker">書類審査により選考が行われ、6月頃に結果通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>高校生は月額1万円（年額12万円）、大学生等は月額1万8千円（年額21万6千円）</strong>が給付されます。</p><p><span class="marker">他の奨学金制度との併用が可能な場合がありますが、重複制限がある場合も</span>ありますので事前にご確認ください。</p><div class="note-box">退学や長期休学の場合は給付が停止されます。毎年度の継続審査があり、学業成績の維持が求められます。八王子市では就学援助制度も併設していますので、小中学生のお子さんがいる場合はそちらもご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-sme-support',
    title: '八王子市 中小企業新製品・新技術開発補助金',
    organization: '八王子市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '東京都',
    tags: ['八王子市', '中小企業支援', '補助金'],
    eligibility: '八王子市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜10月（予算に達し次第終了）',
    description: '八王子市が実施する中小企業新製品・新技術開発補助金です。市内中小企業の新製品開発や技術革新に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 中小企業新製品・新技術開発補助金は、<span class="marker">市内中小企業が行う新製品・新技術の研究開発</span>に対して費用の一部を補助する制度です。</p><p>八王子市は精密機械工業や電子部品産業が集積するものづくりの街であり、工学系の大学・研究機関も多数立地しています。産学連携による新技術開発を後押しし、地域産業の競争力強化を図るため、この補助制度を設けています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">製造業だけでなくIT・サービス業の技術開発も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>八王子市内に事業所（本店または主たる事業所）があること</p><p>中小企業基本法に規定する中小企業者であること</p><p>市税の滞納がないこと</p><p>開発計画書を提出できること</p></div><p>八王子市役所産業振興部に開発計画書と申請書を提出します。専門家による審査会で計画の革新性と実現可能性が評価されます。</p><p><span class="marker">市内大学との連携による開発計画は審査で高く評価</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。原材料費、試作費、技術指導費、知的財産権の出願費用等が対象です。</p><p><span class="marker">交付決定前に発生した経費は対象外</span>です。必ず交付決定を受けてから開発を開始してください。</p><div class="highlight-box">八王子市はサイバーシルクロード八王子などの産業支援機関を持ち、技術相談や販路開拓支援も充実しています。大学との共同研究マッチングも支援してもらえますので、ぜひ活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-nursing-equipment',
    title: '八王子市 介護用品支給事業',
    organization: '八王子市',
    type: 'local',
    maxAmount: '年間7万5千円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['八王子市', '介護用品', '支給'],
    eligibility: '八王子市に住所を有し、在宅で要介護者を介護している家族',
    applicationPeriod: '通年',
    description: '八王子市が実施する介護用品支給事業です。在宅で介護を行う家族に紙おむつ等の介護用品を年間7万5千円相当まで支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の高齢者を介護している家族</span>に対し、紙おむつ等の介護用品を支給する事業です。</p><p>八王子市は面積が広く、山間部を含む地域で在宅介護を行う家庭も少なくありません。日常的に必要となる介護用品の負担を軽減し、在宅介護の継続を支援するため、この事業を実施しています。</p><p><span class="marker-green">市民税非課税世帯が主な対象で、介護用品カタログから必要な商品を選択</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八王子市に住民登録があり、以下の条件を満たす方が対象です。</p><div class="summary-box" data-title="支給要件"><p>在宅生活の要介護4または5の認定を受けた高齢者を介護していること</p><p>介護を受ける方が市民税非課税であること</p><p>介護を受ける方が入院・入所していないこと</p></div><p>八王子市役所高齢者いきいき課または各地域包括支援センターに申請します。<strong>介護保険被保険者証</strong>と申請書の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額約6,250円相当の介護用品が支給され、<strong>年間で最大約7万5千円相当</strong>となります。紙おむつ、尿取りパッド、使い捨て手袋などが対象です。</p><p><span class="marker">入院中や施設入所中は支給が停止</span>されます。退院・退所後は届出により再開されます。</p><div class="note-box">八王子市では家族介護者教室や家族介護者交流事業なども実施しています。介護用品支給とあわせて、介護者自身の心身のケアにもぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-elderly-support',
    title: '八王子市 高齢者見守り支援事業',
    organization: '八王子市',
    type: 'local',
    maxAmount: '無料（市が費用負担）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['八王子市', '高齢者見守り', '生活支援'],
    eligibility: '八王子市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '八王子市が実施する高齢者見守り支援事業です。ひとり暮らし高齢者等に緊急通報装置の貸与や安否確認サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>に対し、緊急通報装置の貸与や安否確認サービスを提供する事業です。</p><p>八王子市は面積が約186平方キロメートルと東京都内の市で最大で、山間部を含む広い市域に高齢者が分散して生活しています。地理的な事情から孤立しやすい高齢者も少なくないため、ICTを活用した見守り体制の構築に力を入れています。</p><p><span class="marker-green">利用料は無料で、24時間365日対応の見守り体制</span>が整っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>八王子市内に住所を有する65歳以上の方</p><p>ひとり暮らし、または高齢者のみの世帯</p><p>日中独居となる高齢者</p><p>持病があり健康上の不安がある方</p></div><p>八王子市役所高齢者いきいき課、各事務所、または地域包括支援センターに申請します。</p><p><span class="marker">民生委員や自治会を通じた申請も可能</span>で、地域の見守りネットワークと連携しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報装置の貸与は無料</strong>です。ボタン一つでコールセンターに通報でき、救急車の手配や近隣協力員への連絡が行われます。</p><p><span class="marker">携帯電話回線対応の装置も利用可能</span>で、固定電話のない家庭でもサービスを受けられます。</p><div class="highlight-box">八王子市は高尾山の登山口がある街としても知られ、活動的な高齢者が多い反面、山間部での孤立リスクもあります。見守りサービスに加え、地域のサロンや老人クラブへの参加も社会的なつながりを保つために効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-seismic-diagnosis',
    title: '八王子市 木造住宅耐震診断助成制度',
    organization: '八王子市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['八王子市', '耐震診断', '助成金'],
    eligibility: '八王子市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '八王子市が実施する木造住宅耐震診断助成制度です。旧耐震基準の木造住宅の耐震診断費用を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 木造住宅耐震診断助成制度は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を助成する制度です。</p><p>八王子市は多摩丘陵や高尾山系の地形を含み、立川断層帯に近接する地域もあることから、地震への備えが重要です。旧耐震基準の住宅は現行基準を満たしていない可能性が高く、まずは耐震診断で建物の安全性を確認することが大切です。</p><p><span class="marker-green">東京都の助成と合わせて手厚い支援を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>八王子市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>自己居住用であること</p></div><p>八王子市役所まちなみ整備部住宅政策課に申請書を提出します。建築年が確認できる書類が必要です。</p><p><span class="marker">診断実施前の申請が必須</span>です。既に実施済みの診断は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断費用の一部として、<strong>最大10万円</strong>が助成されます。八王子市が指定する耐震診断士による診断が条件です。</p><p><span class="marker">診断の結果、補強が必要と判定された場合は、耐震改修補助金（別制度）も利用可能</span>です。</p><div class="note-box">八王子市では無料の耐震相談会も定期的に開催しています。まずは相談会に参加して、自宅の耐震性について専門家のアドバイスを受けるのがおすすめです。多摩地域では直下型地震への備えが特に重要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 町田市（東京都）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'machida-childcare-subsidy',
    title: '町田市 保育料軽減制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['町田市', '保育料軽減', '助成金'],
    eligibility: '町田市に住所を有し、認可保育所等に子どもを預けている保護者',
    applicationPeriod: '通年',
    description: '町田市が実施する保育料軽減制度です。第2子以降の保育料を無料とし、多子世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 保育料軽減制度は、<span class="marker">認可保育所・認定こども園・地域型保育事業を利用する子どもの保育料</span>を軽減する制度です。</p><p>町田市は東京都南部に位置する人口約43万人の都市で、小田急線とJR横浜線の結節点として商業が発達しています。神奈川県との県境に位置し、多摩丘陵の自然豊かな環境の中で子育てができることが魅力です。子育て世帯の増加に対応した手厚い保育料軽減を実施しています。</p><p><span class="marker-green">第2子以降の保育料が無料で、東京都の施策と合わせた充実した支援</span>を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>町田市に住民登録があり、認可保育施設を利用している保護者が対象です。</p><div class="summary-box" data-title="保育料の軽減内容"><p>第1子：所得に応じた通常の保育料</p><p>第2子：無料</p><p>第3子以降：無料</p></div><p><strong>入所手続き時に自動適用</strong>されるため、別途の申請は原則不要です。世帯構成の変更がある場合は町田市子ども生活部保育・幼稚園課に届出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の0〜2歳児クラスの保育料が全額免除</strong>されます。3歳児クラス以上は国の無償化と東京都の施策により全員無料です。</p><p><span class="marker">認可外保育施設を利用する場合は別途補助制度をご確認ください</span>。</p><div class="note-box">延長保育料・副食費・教材費は軽減対象外です。町田市は公園や緑地が多く、自然の中での保育活動が盛んな施設も多いのが特徴です。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-birth-bonus',
    title: '町田市 出産・子育て応援給付金',
    organization: '町田市',
    type: 'local',
    maxAmount: '合計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['町田市', '出産祝い金', '給付金'],
    eligibility: '町田市に住所を有する妊婦および出産後の養育者',
    applicationPeriod: '通年',
    description: '町田市が実施する出産・子育て応援給付金です。妊娠届出時と出生届出後にそれぞれ5万円、合計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に出産応援給付金5万円、出生届出後に子育て応援給付金5万円</span>の合計10万円を支給する制度です。</p><p>町田市は小田急線・JR横浜線で都心や横浜へアクセスしやすく、駅前の商業施設が充実した暮らしやすい街です。丘陵地の住宅地には子育てファミリーが多く住んでおり、妊娠期から子育て期への継続的な支援体制を構築しています。</p><p><span class="marker-green">所得制限なしで、すべての妊婦・養育者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>町田市に住民登録がある妊婦・養育者が対象です。</p><div class="summary-box" data-title="申請の流れ"><p>妊娠届出時に保健師との面談 → 出産応援給付金（5万円）申請</p><p>出生届出後にこんにちは赤ちゃん訪問 → 子育て応援給付金（5万円）申請</p></div><p>町田市保健所または各健康福祉会館で面談と申請を受け付けています。<strong>オンライン申請にも対応</strong>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>合計10万円</strong>が支給されます。多胎の場合は子育て応援給付金が子どもの人数分支給されます。</p><p><span class="marker">面談の実施が支給の必須条件</span>です。</p><div class="note-box">町田市では東京都の「赤ちゃんファースト」事業のギフトも受け取れます。国・都・市の各制度を合わせると、妊娠・出産期に手厚い経済的サポートを受けることができます。子育てに関する相談も随時受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-newlywed-rent',
    title: '町田市 結婚新生活支援事業補助金',
    organization: '町田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '東京都',
    tags: ['町田市', '新婚家賃補助', '補助金'],
    eligibility: '町田市内で新生活を始める新婚世帯',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '町田市が実施する結婚新生活支援事業補助金です。新婚世帯の住居費や引越費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 結婚新生活支援事業補助金は、<span class="marker">新たに婚姻届を提出した世帯の住居費（家賃・住宅取得費）や引越費用</span>を補助する制度です。</p><p>町田市は東京都と神奈川県の境に位置し、小田急線の急行停車駅を中心に大型商業施設が集積する賑やかな街です。駅前の利便性と郊外の住環境の良さを兼ね備えており、新婚カップルの新生活の場として人気があります。</p><p>補助上限は<strong>夫婦ともに29歳以下で60万円、それ以外は30万円</strong>です。<span class="marker-green">夫婦の合計所得500万円未満が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出時に夫婦ともに39歳以下であること</p><p>夫婦の合計所得が500万円未満であること</p><p>町田市内に新居があること</p><p>過去に同様の補助金を受けていないこと</p></div><p>町田市役所市民協働推進課に申請書と必要書類を提出します。婚姻届受理証明書、住民票、賃貸借契約書または売買契約書、所得証明書が必要です。</p><p><span class="marker">婚姻届提出から1年以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>住居費と引越費用の合計額</strong>が補助対象です。上限は夫婦ともに29歳以下で60万円、それ以外は30万円です。</p><p><span class="marker">対象となる住居費は婚姻日以降に支払った分</span>のみです。婚姻前の費用は含まれません。</p><div class="highlight-box">町田市は都心・横浜の両方にアクセスが良く、共働き夫婦にとって通勤の選択肢が広いのが魅力です。南町田グランベリーパーク駅周辺では新たな住宅開発も進んでおり、住宅取得費用にも本補助金を充当できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-disability-medical',
    title: '町田市 心身障害者医療費助成制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '自己負担分を全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['町田市', '障害者医療', '助成金'],
    eligibility: '町田市に住所を有する重度の身体・知的・精神障害のある方',
    applicationPeriod: '通年',
    description: '町田市が実施する心身障害者医療費助成制度です。重度障害のある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 心身障害者医療費助成制度（マル障）は、<span class="marker">重度の身体障害・知的障害・精神障害のある方</span>の保険診療にかかる自己負担分を助成する制度です。</p><p>町田市は東京都のマル障制度を基盤としながら、独自の支援策も組み合わせて障害のある方の医療アクセスを保障しています。町田駅周辺にはバリアフリー対応の医療機関が多く、安心して受診できる環境が整っています。</p><p><span class="marker-green">通院・入院・調剤のすべてが助成対象で、住民税非課税者は自己負担なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>町田市に住民登録があり、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級・2級（内部障害は3級まで）</p><p>愛の手帳（療育手帳）1度・2度</p><p>精神障害者保健福祉手帳1級</p></div><p>町田市役所障がい福祉課の窓口で申請します。障害者手帳、健康保険証、<strong>本人名義の口座情報</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>住民税非課税者は自己負担なし、課税者は1割負担</strong>（マル障医療証を提示）で医療が受けられます。</p><p><span class="marker">都外の医療機関で受診した場合は一旦自己負担を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">65歳以上で新たに障害認定を受けた方は、後期高齢者医療制度への加入が要件となる場合があります。入院時の食事代や差額ベッド代は助成対象外です。詳細は町田市障がい福祉課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-school-lunch',
    title: '町田市 学校給食費助成制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '第3子以降の給食費無料',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '東京都',
    tags: ['町田市', '給食費助成', '教育支援'],
    eligibility: '町田市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中も随時受付）',
    description: '町田市が実施する学校給食費助成制度です。第3子以降の給食費を全額免除し、多子世帯の教育費負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 学校給食費助成制度は、<span class="marker">市立小中学校に通う第3子以降の児童生徒の学校給食費</span>を全額免除する制度です。</p><p>町田市は多摩丘陵に広がる住宅都市で、多くの子育て世帯が暮らしています。市内には42の小学校と20の中学校があり、地域に根差した教育環境が整っています。多子世帯の教育費負担を軽減することで、安心して子育てできるまちづくりを推進しています。</p><p><span class="marker-green">所得制限なしで、第3子以降の全世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>町田市立小中学校に在籍していること</p><p>18歳以下の子どものうち3人目以降であること</p><p>保護者が町田市内に住所を有すること</p></div><p>年度初めに学校を通じて案内が配布されます。申請書を学校へ提出してください。</p><p><span class="marker">年度途中の転入や出生による対象変更も随時申請可能</span>です。町田市教育委員会学校教育部で受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額免除</strong>されます。小学校で年間約5万円、中学校で年間約5.5万円の負担軽減です。</p><p><span class="marker">就学援助制度の給食費支給との重複支給はありません</span>。</p><div class="highlight-box">町田市は中学校給食の実施方式を見直し、全校で温かい給食を提供する取り組みを進めています。給食費の負担軽減と質の向上の両面から、子どもたちの食育環境を整えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-telework-bonus',
    title: '町田市 テレワーク導入推進補助金',
    organization: '町田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['町田市', 'テレワーク', '補助金'],
    eligibility: '町田市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '町田市が実施するテレワーク導入推進補助金です。中小企業のテレワーク環境整備費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 テレワーク導入推進補助金は、<span class="marker">市内中小企業がテレワーク環境を新たに整備する場合</span>の費用を補助する制度です。</p><p>町田市は小田急線で新宿から約30分、JR横浜線で横浜にも直通するベッドタウンであり、多くの市民が都心方面へ通勤しています。テレワークの普及は通勤負担の軽減だけでなく、地域内での経済活動の活性化にもつながるため、市が中小企業の導入を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">就業規則等へのテレワーク制度規定が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象経費"><p>テレワーク用PC・タブレット等の機器購入費</p><p>VPN・クラウドサービス等のシステム導入費</p><p>Web会議ツールのライセンス費用</p><p>セキュリティ対策ソフト・機器の費用</p></div><p>町田市役所経済観光部産業政策課に申請書と事業計画書を提出します。</p><p><span class="marker">テレワーク制度を就業規則等に規定済みまたは規定予定であること</span>が必要です。交付決定前の経費は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。1事業者につき1回限りです。</p><p><span class="marker">個人事業主も対象</span>ですが、自宅兼事業所の場合は事業用途の按分が必要です。</p><div class="note-box">東京都のテレワーク関連補助金との併用ができない場合があります。町田市では南町田グランベリーパーク地区にコワーキングスペースも整備されています。町田商工会議所での経営相談も無料で利用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-nursing-home-reform',
    title: '町田市 高齢者自立支援住宅改修費助成事業',
    organization: '町田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['町田市', '介護リフォーム', '助成金'],
    eligibility: '町田市に住所を有する65歳以上の要介護・要支援認定者',
    applicationPeriod: '通年',
    description: '町田市が実施する高齢者自立支援住宅改修費助成事業です。介護のためのバリアフリー改修に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 高齢者自立支援住宅改修費助成事業は、<span class="marker">要介護・要支援認定を受けた高齢者が安全に在宅生活を送るためのバリアフリー改修</span>にかかる費用を助成する制度です。</p><p>町田市は多摩丘陵の起伏に富んだ地形が特徴で、坂道や段差の多い住宅地があります。住宅内のバリアフリー化は、高齢者の転倒事故防止と自立した生活の継続に欠かせません。この事業は介護保険の住宅改修費とは別枠の市独自の支援です。</p><p><span class="marker-green">介護保険の住宅改修費と合わせて利用でき、より大規模な改修が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>町田市に住民登録がある65歳以上で、要介護・要支援認定を受けている方が対象です。</p><div class="summary-box" data-title="対象工事"><p>手すりの設置</p><p>段差の解消・スロープ設置</p><p>浴室・トイレのバリアフリー化</p><p>滑りにくい床材への変更</p></div><p>町田市役所高齢者福祉課または地域包括支援センターで申請します。ケアマネジャーと相談のうえ、<strong>工事着手前に申請が必要</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費に対して、<strong>最大20万円</strong>が助成されます。所得に応じた自己負担割合があります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）との併用で、合わせて最大40万円の改修が可能</span>です。</p><div class="note-box">新築・増築は対象外です。賃貸住宅の場合は家主の承諾書が必要です。町田市は丘陵地が多いため、玄関アプローチのスロープ化や手すり設置の需要が高い傾向にあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-energy-support',
    title: '町田市 住宅用省エネ設備導入補助金',
    organization: '町田市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'living',
    prefecture: '東京都',
    tags: ['町田市', '省エネ', '補助金'],
    eligibility: '町田市内の自己居住用住宅に省エネ設備を導入する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '町田市が実施する住宅用省エネ設備導入補助金です。太陽光発電・蓄電池等の導入費用を最大15万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 住宅用省エネ設備導入補助金は、<span class="marker">市内住宅に太陽光発電システム・蓄電池・高効率給湯器等を導入する場合</span>の費用を補助する制度です。</p><p>町田市は「ゼロカーボンシティまちだ」を宣言し、2050年までに温室効果ガス排出量実質ゼロを目指しています。住宅部門のエネルギー消費削減は重要な施策であり、家庭での省エネ設備の普及を後押ししています。</p><p><span class="marker-green">太陽光発電と蓄電池のセット導入で補助額が加算</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備と補助額"><p>太陽光発電システム：1kWあたり2万円（上限8万円）</p><p>家庭用蓄電池：上限7万円</p><p>エネファーム：上限5万円</p><p>V2H充放電設備：上限5万円</p></div><p>町田市役所環境資源部環境政策課に申請書と見積書を提出します。</p><p><span class="marker">設備の設置前に申請が必要</span>です。設置後の事後申請は受け付けていません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>各設備の補助額を合算して、<strong>1住宅あたり最大15万円</strong>が補助されます。</p><p><span class="marker">設置完了後に実績報告書・領収書・設置写真の提出が必要</span>です。年間の予算枠に限りがあるため、早めの申請をおすすめします。</p><div class="highlight-box">東京都の「災害にも強く健康にも資する断熱・太陽光住宅普及拡大事業」との併用が可能です。国・都・市の補助を組み合わせると、設備導入費用を大幅に抑えることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-bousai-equipment',
    title: '町田市 家庭防災用品購入助成制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['町田市', '防災用品', '助成金'],
    eligibility: '町田市に住所を有する世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '町田市が実施する家庭防災用品購入助成制度です。感震ブレーカーや家具転倒防止器具等の購入費を最大3万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 家庭防災用品購入助成制度は、<span class="marker">地震災害に備える感震ブレーカー・家具転倒防止器具・簡易トイレ等</span>の購入費用を助成する制度です。</p><p>町田市は多摩丘陵に位置し、多摩直下地震や南関東直下地震では大きな被害が想定されています。木造住宅密集地域もあることから、各家庭での防災対策の強化が重要課題です。市が防災用品の購入費を助成することで、家庭の防災力向上を後押ししています。</p><p><span class="marker-green">全世帯が対象で、所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災用品"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>ガラス飛散防止フィルム</p><p>簡易トイレ・携帯トイレ</p></div><p>町田市役所防災安全部防災課に申請書と領収書を提出します。購入後の事後申請方式です。</p><p><span class="marker">市内・市外を問わず販売店での購入が対象</span>ですが、中古品は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費用の2分の1以内で、<strong>1世帯あたり最大3万円</strong>が助成されます。</p><p><span class="marker">1世帯につき1回限り</span>の利用です。複数の防災用品をまとめて申請することも可能です。</p><div class="note-box">町田市では防災マップの配布や地域防災訓練の実施にも力を入れています。家庭での備蓄とあわせて、最寄りの避難所や避難経路の確認もしておきましょう。自主防災組織への参加も地域の防災力向上に効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
];
