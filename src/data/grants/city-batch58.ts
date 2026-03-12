import { Grant } from '@/lib/types';

export const cityGrantsBatch58: Grant[] = [
  // ────────────────────────────────────────────────
  // 松戸市（千葉県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'matsudo-nursery-support',
    title: '松戸市 認可外保育施設利用者補助金',
    organization: '松戸市',
    type: 'local',
    maxAmount: '最大月額4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['松戸市', '認可外保育', '補助金'],
    eligibility: '松戸市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '松戸市が実施する認可外保育施設利用者補助金です。認可保育所に入所できず認可外保育施設を利用している世帯に対し、保育料の一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 認可外保育施設利用者補助金は、<span class="marker">認可保育所の待機児童となり、認可外保育施設を利用している世帯</span>に対して保育料の一部を補助する制度です。</p><p>松戸市は常磐線・新京成線沿線に広がる人口約50万人のベッドタウンで、都心への通勤者が多い街です。共働き世帯の増加に伴い保育需要が高まっており、待機児童対策として認可外保育施設利用者への経済的支援を行っています。</p><p><span class="marker-green">月額最大4万円が補助され、認可保育所との保育料の差額を大幅に軽減</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>松戸市に住民登録があること</p><p>認可保育所の利用申込みをしたが入所できなかったこと</p><p>市が認定する認可外保育施設を利用していること</p><p>保育の必要性の認定を受けていること</p></div><p>松戸市役所子ども部保育課に、四半期ごとに申請書と領収書を提出します。<strong>利用月の翌四半期末までに申請</strong>が必要です。</p><p><span class="marker">初回申請時には保育施設との利用契約書のコピーも必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大4万円</strong>が補助されます。実際の補助額は認可保育所の保育料との差額を上限とします。</p><p><span class="marker">幼児教育・保育の無償化の対象となる3〜5歳児は、無償化給付との差額が補助対象</span>となります。</p><div class="note-box">認可保育所への入所が決まった場合は、入所月の前月分までが補助対象です。入所が決まり次第、速やかに届出をしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-afterschool-care',
    title: '松戸市 放課後児童クラブ利用料減額制度',
    organization: '松戸市',
    type: 'local',
    maxAmount: '最大月額5,000円減額',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['松戸市', '放課後児童クラブ', '減額'],
    eligibility: '松戸市内の放課後児童クラブを利用する児童の保護者で、多子世帯または低所得世帯',
    applicationPeriod: '4月〜翌年3月（年度ごとに申請）',
    description: '松戸市が実施する放課後児童クラブ利用料減額制度です。多子世帯や住民税非課税世帯の利用料負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 放課後児童クラブ利用料減額制度は、<span class="marker">多子世帯や経済的に困難な世帯の放課後児童クラブ利用料を減額</span>する制度です。</p><p>松戸市では小学校の放課後に児童が安全に過ごせる「放課後児童クラブ（学童保育）」を市内各所で運営しています。共働き世帯やひとり親世帯にとって欠かせない施設ですが、利用料の負担が重い世帯もあります。</p><p><span class="marker-green">第2子以降は半額、住民税非課税世帯は全額免除</span>となり、安心して利用を継続できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="減額の対象"><p>同一世帯から2人以上が放課後児童クラブを利用している場合（第2子以降半額）</p><p>住民税非課税世帯（全額免除）</p><p>生活保護受給世帯（全額免除）</p></div><p>放課後児童クラブの入会申込時に、あわせて減額申請を行います。年度途中で世帯状況が変わった場合は随時申請できます。</p><p><span class="marker">課税証明書または非課税証明書が必要</span>です。マイナンバーによる情報連携を希望する場合は省略できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>減額内容は世帯状況により異なります。</p><p><strong>多子世帯：第2子以降の利用料が半額（月額約5,000円減額）、住民税非課税世帯：利用料全額免除</strong>です。</p><div class="highlight-box">おやつ代や教材費などの実費負担は減額の対象外です。また、長期休暇期間中の特別利用料についても同様の減額が適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-eco-reform',
    title: '松戸市 省エネ住宅改修補助金',
    organization: '松戸市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['松戸市', '省エネ改修', '補助金'],
    eligibility: '松戸市内の住宅に省エネ改修工事を行う所有者',
    applicationPeriod: '4月〜12月（予算に達し次第終了）',
    description: '松戸市が実施する省エネ住宅改修補助金です。断熱改修や高効率設備の導入など、住宅の省エネルギー化を推進するための工事費を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 省エネ住宅改修補助金は、<span class="marker">住宅の断熱改修や高効率給湯器の導入</span>など、省エネルギー化に資する改修工事の費用を補助する制度です。</p><p>松戸市はカーボンニュートラルの実現に向け、住宅部門のCO2排出削減に取り組んでいます。既存住宅の省エネ性能向上は温暖化対策の重要な柱であり、市民の改修工事を後押しするため補助制度を設けています。</p><p>補助率は対象工事費の<strong>3分の1</strong>で、<span class="marker-green">上限は20万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓・壁・天井・床の断熱改修</p><p>高効率給湯器（エコキュート等）の設置</p><p>LED照明への一括交換</p><p>太陽光発電システムの設置</p></div><p>松戸市役所環境政策課に<strong>工事着手前に</strong>申請書を提出します。交付決定後に工事を開始してください。</p><p><span class="marker">市内に事業所を有する施工業者による工事が対象</span>です。市外業者による施工は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の3分の1（上限20万円）</strong>です。太陽光発電システムの設置を含む場合は、<span class="marker">5万円の加算</span>があります。</p><div class="note-box">国の「住宅省エネキャンペーン」や千葉県の補助制度との併用が可能です。ただし、補助対象経費が重複する部分は対象外となりますので、事前に窓口で確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-dental-checkup',
    title: '松戸市 成人歯科健診費用助成制度',
    organization: '松戸市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['松戸市', '歯科健診', '助成'],
    eligibility: '松戸市に住所を有する20歳以上の方',
    applicationPeriod: '通年（年度内1回）',
    description: '松戸市が実施する成人歯科健診費用助成制度です。市内の協力歯科医院で年1回無料の歯科健診を受けることができます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 成人歯科健診費用助成制度は、<span class="marker">20歳以上の市民が市内の協力歯科医院で無料の歯科健診を受けられる</span>制度です。</p><p>歯周病は糖尿病や心疾患などの全身疾患と深い関わりがあることが明らかになっています。松戸市では市民の口腔健康維持と医療費抑制を目的に、定期的な歯科健診の受診を推奨しています。</p><p><span class="marker-green">年齢制限の上限がなく、20歳以上であればどなたでも利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松戸市に住民登録がある20歳以上の方が対象です。年度内に1回受診できます。</p><div class="summary-box" data-title="受診の流れ"><p>松戸市から届く受診券を確認（または窓口・電話で発行依頼）</p><p>市内の協力歯科医院に予約</p><p>受診券と健康保険証を持参して受診</p></div><p><strong>受診券がなくても、協力歯科医院の窓口で申し出れば受診できる場合があります</strong>。事前に医院にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>健診費用は全額を松戸市が負担</strong>するため、自己負担はありません。</p><p>健診の内容は、<span class="marker">むし歯チェック、歯周病検査、口腔内の状態確認、ブラッシング指導</span>です。</p><div class="note-box">健診の結果、治療が必要と判断された場合の治療費は自己負担（保険診療）となります。健診と治療は別の扱いですのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-school-lunch',
    title: '松戸市 学校給食費補助制度',
    organization: '松戸市',
    type: 'local',
    maxAmount: '第3子以降無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '千葉県',
    tags: ['松戸市', '給食費', '補助'],
    eligibility: '松戸市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '松戸市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額補助し、多子世帯の教育費負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 学校給食費補助制度は、<span class="marker">第3子以降の児童生徒の学校給食費を全額免除</span>する制度です。</p><p>松戸市は子育て世帯の教育費負担軽減に力を入れており、特に多子世帯への支援を手厚くしています。学校給食費は小学校で月額約4,500円、中学校で月額約5,200円と年間で大きな負担となるため、第3子以降の無料化により家計を支援します。</p><p><span class="marker-green">所得制限はなく、第3子以降であれば全世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>松戸市立小中学校に在籍する児童生徒であること</p><p>18歳未満の子どもが3人以上いる世帯の第3子以降であること</p><p>学校給食を喫食していること</p></div><p>年度当初に学校を通じて申請書が配布されます。必要事項を記入し、学校へ提出してください。</p><p><strong>年度途中の転入や出生による世帯変更の場合も随時申請可能</strong>です。<span class="marker">きょうだいの在学証明は学校間で確認されるため、保護者が別途書類を用意する必要はありません</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額補助</strong>されます。小学校で年間約5万4千円、中学校で年間約6万2千円の負担が軽減されます。</p><p><span class="marker">第1子・第2子の給食費は通常どおりの負担</span>となります。就学援助制度の対象世帯は、そちらが優先適用されます。</p><div class="highlight-box">アレルギー等で給食の一部を喫食できない場合は、喫食した分のみが補助対象です。完全に弁当持参の場合は対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-youth-employment',
    title: '松戸市 若者就労支援奨励金',
    organization: '松戸市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['松戸市', '若者就労', '奨励金'],
    eligibility: '松戸市に住所を有する39歳以下の求職者で、市の就労支援事業を経て正規雇用された方',
    applicationPeriod: '通年（雇用開始後6か月経過後に申請）',
    description: '松戸市が実施する若者就労支援奨励金です。市の就労支援プログラムを経て正規雇用に就いた若者に奨励金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 若者就労支援奨励金は、<span class="marker">市の就労支援事業を利用して正規雇用に就いた39歳以下の方</span>に奨励金を支給する制度です。</p><p>松戸市は東京への通勤圏にあり、市内には中小企業を中心に多様な事業所があります。しかし若年層の雇用のミスマッチが課題となっており、市独自の就労支援とあわせて正規雇用への定着を促進しています。</p><p><span class="marker-green">正規雇用後6か月の継続勤務で5万円、1年の継続勤務でさらに5万円、合計最大10万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>松戸市に住民登録がある39歳以下の方</p><p>松戸市の就労支援事業（キャリアカウンセリング等）を利用したこと</p><p>正規雇用（週30時間以上の無期雇用）に就いたこと</p><p>雇用開始から6か月以上継続勤務していること</p></div><p>松戸市役所商工振興課に申請書と雇用証明書を提出します。<span class="marker">雇用開始日から6か月経過後3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給は2段階に分かれています。</p><p><strong>6か月継続勤務で5万円、1年継続勤務でさらに5万円</strong>が支給されます。1年目の申請は別途行う必要があります。</p><div class="note-box">公務員や自営業は対象外です。また、過去にこの奨励金を受給した方の再度の申請はできません。雇用保険の加入が確認できる書類が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-home-care',
    title: '松戸市 在宅介護支援手当',
    organization: '松戸市',
    type: 'local',
    maxAmount: '月額1万円',
    maxAmountNum: 1,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['松戸市', '在宅介護', '手当'],
    eligibility: '松戸市に住所を有し、要介護3以上の高齢者を在宅で6か月以上介護している家族',
    applicationPeriod: '通年',
    description: '松戸市が実施する在宅介護支援手当です。重度の要介護高齢者を在宅で介護している家族に月額1万円の手当を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 在宅介護支援手当は、<span class="marker">要介護3以上の高齢者を在宅で介護している家族</span>に対して手当を支給する制度です。</p><p>松戸市では高齢化率が上昇しており、在宅で家族の介護を担う方の身体的・精神的・経済的負担は大きくなっています。施設入所に頼らず、住み慣れた地域で暮らし続けることを支援するため、在宅介護者への経済的支援を行っています。</p><p><span class="marker-green">月額1万円が支給され、介護用品の購入や介護者のリフレッシュ費用</span>に充てることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>松戸市に住民登録があること</p><p>要介護3〜5の認定を受けた65歳以上の高齢者と同居し、在宅で介護していること</p><p>6か月以上継続して在宅介護を行っていること</p><p>被介護者が介護保険施設に入所していないこと</p></div><p>松戸市役所高齢者支援課に申請書と介護保険証のコピーを提出します。<span class="marker">申請月の翌月分から支給開始</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額1万円</strong>が指定口座に振り込まれます。支給月は年3回（8月・12月・4月）で、前4か月分をまとめて支給します。</p><p><span class="marker">被介護者が入院した場合は、連続3か月以上の入院で支給が停止</span>されます。退院後に再度申請が必要です。</p><div class="note-box">ショートステイ（短期入所）の利用は在宅介護の継続とみなされます。ただし、月の半分以上をショートステイで過ごしている場合は、支給対象外となることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-rainwater-tank',
    title: '松戸市 雨水貯留施設設置補助金',
    organization: '松戸市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '千葉県',
    tags: ['松戸市', '雨水貯留', '補助金'],
    eligibility: '松戸市内の住宅に雨水貯留施設を設置する方',
    applicationPeriod: '4月〜翌年2月（予算に達し次第終了）',
    description: '松戸市が実施する雨水貯留施設設置補助金です。雨水タンクの設置費用を補助し、水資源の有効活用と浸水被害の軽減を図ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 雨水貯留施設設置補助金は、<span class="marker">住宅の敷地内に雨水タンクを設置する費用</span>を補助する制度です。</p><p>松戸市は坂川や国分川などの河川が市内を流れており、局地的豪雨による浸水被害が課題となっています。雨水貯留施設の設置は、雨水の一時的な貯留による浸水対策と、庭の水やりや洗車に雨水を活用する節水対策の両面で効果があります。</p><p><span class="marker-green">購入費と設置費の合計の2分の1（上限3万円）</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>松戸市内の住宅（戸建て・集合住宅の専有部分）に設置すること</p><p>容量80リットル以上の雨水貯留タンクであること</p><p>市税の滞納がないこと</p><p>設置前に申請すること</p></div><p>松戸市役所河川清流課に申請書と見積書を提出します。<strong>交付決定後に購入・設置</strong>してください。</p><p><span class="marker">設置後は完了届と領収書、設置状況の写真を提出</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>購入費・設置費の合計の2分の1（上限3万円）</strong>です。1住宅につき1基が補助対象です。</p><div class="highlight-box">雨水タンクは園芸用の水やりや災害時の生活用水としても活用できます。市では設置に関する相談も受け付けていますので、サイズ選びに迷った場合はお気軽にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-flood-prevention',
    title: '松戸市 浸水対策設備設置補助金',
    organization: '松戸市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'disaster',
    prefecture: '千葉県',
    tags: ['松戸市', '浸水対策', '補助金'],
    eligibility: '松戸市内の浸水想定区域に所在する住宅・事業所の所有者',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '松戸市が実施する浸水対策設備設置補助金です。止水板や防水壁などの浸水防止設備の設置費用を補助し、水害被害の軽減を図ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 浸水対策設備設置補助金は、<span class="marker">止水板・防水壁・排水ポンプなどの浸水防止設備の設置</span>に要する費用を補助する制度です。</p><p>松戸市は江戸川や坂川沿いに低地が広がり、近年のゲリラ豪雨により浸水被害が発生しています。行政によるインフラ整備とあわせて、個人レベルでの浸水対策を促進するため、設備設置費用の補助を行っています。</p><p>補助率は対象工事費の<strong>2分の1</strong>で、<span class="marker-green">上限は30万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>止水板（玄関・駐車場入口等に設置するもの）</p><p>防水壁・防水扉</p><p>排水ポンプの設置</p><p>逆流防止弁の設置</p></div><p>松戸市役所河川清流課に<strong>工事着手前に</strong>申請書・見積書・設置予定箇所の写真を提出します。</p><p><span class="marker">洪水ハザードマップの浸水想定区域内の建物が優先されます</span>が、過去に浸水被害を受けた建物も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の2分の1（上限30万円）</strong>です。複数設備の同時設置も1件として申請できます。</p><div class="note-box">設備の設置にあたっては建築基準法等の法令に適合する必要があります。マンション等の共用部分に設置する場合は、管理組合の同意書が必要です。国の「流域治水」関連の補助金と併用できる場合がありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 市川市（千葉県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'ichikawa-nursery-support',
    title: '市川市 認可外保育施設利用者補助金',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['市川市', '認可外保育', '補助金'],
    eligibility: '市川市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '市川市が実施する認可外保育施設利用者補助金です。認可保育所の待機児童となった世帯に対し、認可外保育施設の利用料の一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 認可外保育施設利用者補助金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用する世帯</span>に保育料の差額を補助する制度です。</p><p>市川市は総武線・東西線沿線に位置する人口約50万人の住宅都市で、都心へのアクセスが良く子育て世帯の流入が続いています。保育需要の高まりに対応し、認可外保育施設利用者への経済的支援を実施しています。</p><p><span class="marker-green">月額最大3万円が補助され、認可保育所利用時との差額負担を軽減</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>市川市に住民登録があること</p><p>認可保育所の利用調整で入所保留となったこと</p><p>市が認定する認可外保育施設に月64時間以上預けていること</p><p>保育の必要性の認定（2号・3号認定）を受けていること</p></div><p>市川市こども施設入園課に四半期ごとに申請します。<span class="marker">領収書の原本と施設の在籍証明書が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大3万円</strong>が補助されます。補助額は認可保育所保育料との差額と3万円の低い方です。</p><p><span class="marker">0〜2歳の住民税課税世帯が主な対象</span>です。3〜5歳児は幼児教育・保育の無償化により基本的に保育料が無料のため、補助は限定的です。</p><div class="note-box">企業主導型保育事業の利用者は、別途「企業主導型保育事業利用者補助金」の対象となる場合があります。制度の併用はできませんので、有利な方を選択してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-afterschool-care',
    title: '市川市 放課後児童クラブ利用料助成制度',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大月額5,000円',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['市川市', '放課後児童クラブ', '助成'],
    eligibility: '市川市内の放課後児童クラブを利用する多子世帯またはひとり親世帯の保護者',
    applicationPeriod: '4月〜翌年3月（年度ごとに申請）',
    description: '市川市が実施する放課後児童クラブ利用料助成制度です。多子世帯やひとり親世帯の利用料を軽減し、子育て支援を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 放課後児童クラブ利用料助成制度は、<span class="marker">多子世帯やひとり親世帯の放課後児童クラブ利用料を軽減</span>する制度です。</p><p>市川市は文教都市として知られ、教育環境の充実に力を入れています。放課後の安全な居場所確保は働く保護者にとって重要であり、経済的な理由で利用をためらうことのないよう支援を行っています。</p><p><span class="marker-green">第2子は半額、第3子以降は無料、ひとり親世帯は減額</span>となり、家庭の状況に応じた支援が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="減額の区分"><p>同時利用の第2子：利用料半額</p><p>同時利用の第3子以降：利用料無料</p><p>ひとり親世帯：利用料半額</p><p>住民税非課税世帯：利用料無料</p></div><p>入会申込時にあわせて申請します。<strong>ひとり親世帯は児童扶養手当証書のコピー</strong>を添付してください。</p><p><span class="marker">年度途中の世帯変更（離婚・出生等）も随時受け付け</span>ています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用料は月額約1万円であるため、<strong>半額で約5,000円の軽減</strong>となります。第3子以降・非課税世帯は全額免除です。</p><div class="highlight-box">夏休み等の長期休暇中は利用料が割増となりますが、減額制度も同様に適用されます。おやつ代や教材費などの実費は減額の対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-eco-reform',
    title: '市川市 住宅省エネルギー改修補助金',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['市川市', '省エネ改修', '補助金'],
    eligibility: '市川市内の住宅に省エネルギー改修工事を行う所有者',
    applicationPeriod: '4月〜11月（予算に達し次第終了）',
    description: '市川市が実施する住宅省エネルギー改修補助金です。断熱改修や高効率設備の導入により、住宅の省エネ性能向上を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 住宅省エネルギー改修補助金は、<span class="marker">既存住宅の断熱改修・高効率設備導入</span>にかかる費用を補助する制度です。</p><p>市川市は住宅密集地が多く、築年数の古い住宅も数多く存在します。住宅の省エネ化は地球温暖化対策に加え、居住者の光熱費削減やヒートショック防止など健康面でも効果があります。</p><p>補助率は対象工事費の<strong>4分の1</strong>で、<span class="marker-green">上限は25万円</span>です。子育て世帯・高齢者世帯は5万円加算されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（内窓設置・複層ガラス化）</p><p>外壁・屋根・天井・床の断熱改修</p><p>高効率給湯器（エコキュート・エネファーム等）の設置</p><p>家庭用蓄電池の設置</p></div><p>市川市環境部に<strong>工事着手前に</strong>申請書と工事見積書を提出します。</p><p><span class="marker">対象工事費が10万円以上（税抜）であることが条件</span>です。DIYによる改修は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の4分の1（上限25万円）</strong>です。子育て世帯（18歳未満の子がいる世帯）や65歳以上のみの世帯は<span class="marker">5万円が加算され最大30万円</span>となります。</p><div class="note-box">千葉県の「住宅用設備等脱炭素化促進事業補助金」との併用が可能です。ただし、国の「先進的窓リノベ事業」と対象工事が重複する場合は、重複部分を除いた額が補助対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-infertility',
    title: '市川市 不妊治療費助成制度',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['市川市', '不妊治療', '助成金'],
    eligibility: '市川市に住所を有し、不妊治療を受けている夫婦（事実婚を含む）',
    applicationPeriod: '治療終了後〜年度末まで',
    description: '市川市が実施する不妊治療費助成制度です。保険適用後の自己負担分や先進医療費を対象に、治療費の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる経済的負担を軽減</span>するため、治療費の一部を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、先進医療など保険適用外の治療を併用するケースも多く、経済的な負担は依然として大きいのが実情です。市川市では独自に上乗せ助成を行い、治療に取り組む夫婦を支援しています。</p><p><span class="marker-green">保険適用後の自己負担分に加え、先進医療にかかる費用も助成対象</span>で、1回の治療あたり最大20万円が助成されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>市川市に住民登録がある夫婦（事実婚を含む）</p><p>保険適用の特定不妊治療を受けていること</p><p>治療開始日に妻の年齢が43歳未満であること</p></div><p>市川市保健センターに申請書・医療機関の受診証明書・領収書を提出します。<strong>治療が終了した日の属する年度末までに申請</strong>してください。</p><p><span class="marker">オンラインでの事前予約制</span>で、窓口での待ち時間を短縮できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>1回の治療あたり最大20万円</strong>を助成します。通算回数は初めて助成を受けた際の妻の年齢により異なります（40歳未満：通算6回、40歳以上43歳未満：通算3回）。</p><div class="note-box">男性不妊治療（精子採取術等）を併せて行った場合は、別途最大10万円が加算されます。千葉県の助成制度と市の助成制度は併用可能ですが、助成額の合計が自己負担額を超えることはできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-school-aid',
    title: '市川市 就学援助制度',
    organization: '市川市',
    type: 'local',
    maxAmount: '学用品費等支給',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '千葉県',
    tags: ['市川市', '就学援助', '給付'],
    eligibility: '市川市立小中学校に通う児童生徒の保護者で、経済的に就学が困難な方',
    applicationPeriod: '4月〜随時（年度ごとに申請）',
    description: '市川市が実施する就学援助制度です。経済的に就学が困難な世帯に対し、学用品費・給食費・修学旅行費等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 就学援助制度は、<span class="marker">経済的理由により就学が困難な児童生徒の保護者</span>に対して、学校生活に必要な費用の一部を支給する制度です。</p><p>市川市は文教都市として教育環境の整備に力を入れており、すべての子どもが安心して学べる環境づくりを推進しています。家庭の経済状況にかかわらず、必要な教育を受けられるよう、国の就学援助制度に市独自の上乗せを行っています。</p><p><span class="marker-green">学用品費、給食費、修学旅行費、校外活動費、医療費など幅広い項目が支給対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる世帯"><p>生活保護を受けている世帯（要保護）</p><p>生活保護に準ずる程度に困窮している世帯（準要保護）</p><p>児童扶養手当を受給している世帯</p><p>世帯の所得が市の基準額以下の世帯</p></div><p>年度当初に学校を通じて申請書を提出します。<span class="marker">年度途中の申請も受け付けており、申請月からの支給</span>となります。</p><p><strong>前年の所得証明書や、該当する場合は児童扶養手当証書のコピー</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給される費目と概算額は以下のとおりです。</p><p><strong>学用品費：小学校年額約1万1千円、中学校年額約2万2千円。給食費：全額。修学旅行費：実費（上限あり）</strong></p><p><span class="marker">新入学用品費は入学前の3月に前倒し支給</span>が可能です。小学校約5万円、中学校約6万円が支給されます。</p><div class="highlight-box">市川市では就学援助の所得基準をやや高めに設定しているため、他市では対象外でも市川市では認定される場合があります。「対象外かもしれない」と思い込まず、まずは申請をご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-youth-employment',
    title: '市川市 若年者就職支援助成金',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['市川市', '若年者就職', '助成金'],
    eligibility: '市川市に住所を有する34歳以下の方で、市の就労支援セミナーを受講し正規雇用に就いた方',
    applicationPeriod: '通年（雇用後6か月経過後に申請）',
    description: '市川市が実施する若年者就職支援助成金です。市の就労支援を経て正規雇用された若者に助成金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 若年者就職支援助成金は、<span class="marker">市の就労支援セミナーを受講して正規雇用に就いた34歳以下の方</span>に助成金を支給する制度です。</p><p>市川市では若年層の安定した雇用を促進するため、キャリアカウンセリングや就労セミナーなどの支援事業を実施しています。就職後の定着を後押しするため、継続勤務に対する経済的インセンティブを設けています。</p><p><span class="marker-green">正規雇用後6か月の継続勤務で10万円を一括支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>市川市に住民登録がある34歳以下の方</p><p>市が実施する就労支援セミナー（年4回開催）を受講済みであること</p><p>正規雇用（期間の定めのない雇用）に就いたこと</p><p>6か月以上継続して勤務していること</p></div><p>市川市役所経済政策課に申請書と雇用証明書を提出します。<span class="marker">雇用開始日から6か月経過後、3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>10万円が一括で支給</strong>されます。口座振込で、申請後おおむね1〜2か月で支給されます。</p><div class="note-box">過去にこの助成金を受給した方は再度の申請はできません。国の特定求職者雇用開発助成金等とは異なり、労働者本人への支給です。公務員や自営業、家族経営の事業所への就職は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-home-care',
    title: '市川市 在宅高齢者介護用品支給事業',
    organization: '市川市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['市川市', '介護用品', '支給'],
    eligibility: '市川市に住所を有する要介護4・5の在宅高齢者を介護する家族',
    applicationPeriod: '通年',
    description: '市川市が実施する在宅高齢者介護用品支給事業です。重度の要介護高齢者を在宅で介護する家族に、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 在宅高齢者介護用品支給事業は、<span class="marker">要介護4・5の高齢者を在宅で介護する家族</span>に対して、紙おむつ等の介護用品を支給する事業です。</p><p>在宅介護では紙おむつやパッド、使い捨て手袋などの消耗品費が毎月大きな負担となります。市川市では介護する家族の経済的負担を軽減し、在宅介護の継続を支援するため、介護用品の現物支給を行っています。</p><p><span class="marker-green">月額6,250円相当の介護用品をカタログから選んで受け取る</span>ことができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>市川市に住民登録のある要介護4または5の認定を受けた65歳以上の方</p><p>在宅で生活していること（入院・入所中は対象外）</p><p>市民税非課税世帯であること</p></div><p>市川市役所介護福祉課に申請書と介護保険被保険者証のコピーを提出します。<span class="marker">認定後は毎月カタログから希望の介護用品を選んで注文</span>します。</p><p><strong>初回申請から約2週間で介護用品が届きます</strong>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額6,250円相当</strong>の介護用品が支給されます。紙おむつ・尿取りパッド・使い捨て手袋・清拭剤などから選択できます。</p><p><span class="marker">入院した場合は入院月の翌月から支給停止</span>となり、退院後に再度申請が必要です。</p><div class="note-box">要介護3以下の方や、課税世帯の方は対象外ですが、介護保険の「福祉用具購入費」の支給対象となる場合があります。地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-rainwater-tank',
    title: '市川市 雨水貯留施設設置補助金',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '千葉県',
    tags: ['市川市', '雨水貯留', '補助金'],
    eligibility: '市川市内の住宅に雨水貯留施設または雨水浸透施設を設置する方',
    applicationPeriod: '4月〜翌年2月（予算に達し次第終了）',
    description: '市川市が実施する雨水貯留施設設置補助金です。雨水タンクや浸透ますの設置費用を補助し、都市型水害の軽減と水資源の有効活用を促進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 雨水貯留施設設置補助金は、<span class="marker">雨水タンクや雨水浸透ますの設置費用</span>を補助する制度です。</p><p>市川市は真間川流域を中心に低地が広がり、都市型水害のリスクを抱えています。雨水を一時的に貯留・浸透させることで下水道への負荷を軽減し、浸水被害の防止に貢献します。また、貯留した雨水は庭の散水や災害時の生活用水として活用できます。</p><p><span class="marker-green">雨水貯留タンクは上限3万円、浸透ますは上限5万円</span>の補助が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>雨水貯留タンク（容量80リットル以上）：購入・設置費の2分の1（上限3万円）</p><p>雨水浸透ます（新設）：設置費の2分の1（上限5万円）</p></div><p>市川市下水道管理課に<strong>設置前に</strong>申請書と見積書を提出します。</p><p><span class="marker">交付決定通知を受けてから設置工事を行い、完了届を提出</span>してください。設置状況の現地確認を行う場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>雨水貯留タンク：上限3万円、雨水浸透ます：上限5万円</strong>です。両方を同時に設置する場合は、それぞれ申請可能です。</p><div class="highlight-box">雨水貯留タンクは200リットル程度のものがよく利用されており、ホームセンターでも購入可能です。設置スペースや用途に合わせて、窓口で相談に応じています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichikawa-flood-prevention',
    title: '市川市 止水板設置助成金',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'disaster',
    prefecture: '千葉県',
    tags: ['市川市', '止水板', '助成金'],
    eligibility: '市川市内の浸水被害が想定される地域に所在する建物の所有者',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '市川市が実施する止水板設置助成金です。浸水防止のための止水板や防水扉の設置費用を助成し、水害に強いまちづくりを推進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市川市 止水板設置助成金は、<span class="marker">浸水被害を防ぐための止水板・防水扉の設置工事費</span>を助成する制度です。</p><p>市川市は東京湾に面し、真間川・江戸川に囲まれた地形から、大雨時の浸水リスクが高い地域があります。近年の気候変動により局地的豪雨の頻度が増加しており、個々の建物での自衛策が重要となっています。</p><p>助成率は対象工事費の<strong>2分の1</strong>で、<span class="marker-green">上限は50万円</span>と手厚い助成内容です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>脱着式止水板（アルミ製・ステンレス製等）</p><p>防水扉・防水シャッター</p><p>逆流防止弁（排水管への設置）</p></div><p>市川市河川・下水道管理課に<strong>工事着手前に</strong>申請します。見積書、設置箇所の写真、建物の登記事項証明書が必要です。</p><p><span class="marker">洪水ハザードマップの浸水想定区域内の建物が優先</span>されますが、過去に浸水実績のある地域の建物も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>対象工事費の2分の1（上限50万円）</strong>です。止水板と逆流防止弁を同時に設置する場合もまとめて申請できます。</p><div class="note-box">止水板の高さや仕様は、ハザードマップの想定浸水深を参考に選定してください。設置後はメンテナンス方法も含め、施工業者から説明を受けておくことをおすすめします。国や県の補助制度との併用は、重複しない範囲で可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 浦安市（千葉県）9件
  // ────────────────────────────────────────────────
  {
    slug: 'urayasu-nursery-support',
    title: '浦安市 認可外保育施設利用者補助金',
    organization: '浦安市',
    type: 'local',
    maxAmount: '最大月額4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['浦安市', '認可外保育', '補助金'],
    eligibility: '浦安市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '浦安市が実施する認可外保育施設利用者補助金です。認可保育所の待機児童となり認可外保育施設を利用する世帯の保育料を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 認可外保育施設利用者補助金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用する世帯</span>に対して保育料の一部を補助する制度です。</p><p>浦安市は東京ディズニーリゾートで知られる人口約17万人のまちで、若い世帯が多く保育需要が高い地域です。待機児童対策の一環として、認可外保育施設を利用する世帯への経済的支援を行っています。</p><p><span class="marker-green">月額最大4万円が補助され、認可保育所との保育料差額を大幅に軽減</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>浦安市に住民登録があること</p><p>認可保育所の利用申込みをして入所保留となっていること</p><p>市が確認した認可外保育施設に月64時間以上預けていること</p><p>保育の必要性の認定を受けていること</p></div><p>浦安市こども課に四半期ごとに申請書・領収書を提出します。<span class="marker">オンライン申請にも対応</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大4万円</strong>が補助されます。補助額は認可保育所の保育料との差額が上限です。</p><p><span class="marker">幼児教育・保育の無償化対象の3〜5歳児は、無償化給付との差額部分が補助対象</span>となります。</p><div class="note-box">認可保育所への入所が決まった場合は、入所月の前月分までが補助の対象です。速やかにこども課へ届出をしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-afterschool-care',
    title: '浦安市 放課後児童クラブ利用料助成制度',
    organization: '浦安市',
    type: 'local',
    maxAmount: '最大月額5,000円',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['浦安市', '放課後児童クラブ', '助成'],
    eligibility: '浦安市内の放課後児童クラブを利用する多子世帯またはひとり親世帯の保護者',
    applicationPeriod: '4月〜翌年3月（年度ごとに申請）',
    description: '浦安市が実施する放課後児童クラブ利用料助成制度です。多子世帯やひとり親世帯の利用料負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 放課後児童クラブ利用料助成制度は、<span class="marker">多子世帯やひとり親世帯を対象に利用料を軽減</span>する制度です。</p><p>浦安市は東京湾に面した埋立地を中心に計画的なまちづくりが進められ、子育て世帯が多い特徴があります。放課後の安全な居場所として児童クラブの利用が多く、経済的な理由で利用を断念しないよう支援を行っています。</p><p><span class="marker-green">第2子は半額、第3子以降は全額免除、住民税非課税世帯は全額免除</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="減額の区分"><p>同時利用の第2子：利用料半額</p><p>同時利用の第3子以降：利用料全額免除</p><p>ひとり親世帯：利用料半額</p><p>住民税非課税世帯：利用料全額免除</p></div><p>放課後児童クラブの入会時にあわせて申請します。ひとり親世帯は<span class="marker">児童扶養手当証書のコピーが必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用料は月額約1万円のため、<strong>半額で約5,000円の軽減</strong>となります。第3子以降・非課税世帯は月額約1万円が全額免除されます。</p><div class="highlight-box">浦安市では民間学童クラブの利用者向けにも、別途補助制度を設けている場合があります。こども課窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-eco-reform',
    title: '浦安市 省エネルギー住宅改修補助金',
    organization: '浦安市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['浦安市', '省エネ改修', '補助金'],
    eligibility: '浦安市内の住宅に省エネルギー改修工事を行う所有者',
    applicationPeriod: '5月〜12月（予算に達し次第終了）',
    description: '浦安市が実施する省エネルギー住宅改修補助金です。住宅の断熱改修や高効率設備の導入を支援し、環境負荷の低減を図ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 省エネルギー住宅改修補助金は、<span class="marker">住宅の断熱改修や高効率給湯器の導入</span>などの省エネ改修工事費を補助する制度です。</p><p>浦安市は埋立地を中心に比較的新しい住宅が多いものの、1980年代に建てられた中町地区の住宅は築40年を迎え、断熱性能の向上が課題となっています。省エネ改修は光熱費の削減とCO2排出削減の両面で効果があります。</p><p>補助率は対象工事費の<strong>3分の1</strong>で、<span class="marker-green">上限は20万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓・壁・天井・床の断熱改修</p><p>高効率給湯器（エコキュート・エコジョーズ等）の設置</p><p>高断熱浴槽の設置</p><p>LED照明への一括交換</p></div><p>浦安市環境保全課に<strong>工事着手前に</strong>申請書と見積書を提出してください。交付決定後に着工となります。</p><p><span class="marker">対象工事費が10万円以上（税抜）の工事が対象</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の3分の1（上限20万円）</strong>です。</p><p><span class="marker">マンション専有部分の改修（内窓設置等）も対象</span>ですが、共用部分の改修は管理組合を通じての申請が必要です。</p><div class="note-box">国や千葉県の省エネ関連補助金との併用は可能ですが、同一の工事費に対して二重に補助を受けることはできません。事前に窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-newlywed-rent',
    title: '浦安市 新婚世帯家賃補助制度',
    organization: '浦安市',
    type: 'local',
    maxAmount: '最大月額3万円（最長2年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['浦安市', '新婚家賃', '補助'],
    eligibility: '浦安市内の賃貸住宅に居住する婚姻届提出後1年以内の新婚世帯',
    applicationPeriod: '通年（婚姻届提出後1年以内に申請）',
    description: '浦安市が実施する新婚世帯家賃補助制度です。市内の賃貸住宅に居住する新婚世帯の家賃を最長2年間補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 新婚世帯家賃補助制度は、<span class="marker">市内の賃貸住宅に居住する新婚世帯の家賃の一部</span>を補助する制度です。</p><p>浦安市は東京ディズニーリゾートの所在地として有名ですが、京葉線で東京駅まで約16分というアクセスの良さから、若い世帯にも人気のエリアです。しかし家賃相場は千葉県内でも高めであり、新婚世帯の住居費負担を軽減するため補助制度を設けています。</p><p><span class="marker-green">月額最大3万円が最長2年間支給され、総額最大72万円</span>の補助となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>婚姻届を提出してから1年以内であること</p><p>夫婦ともに浦安市に住民登録があること</p><p>世帯の合計所得が400万円未満であること</p><p>市税の滞納がないこと</p></div><p>浦安市役所住宅課に申請書・婚姻届受理証明書・賃貸借契約書のコピー・所得証明書を提出します。</p><p><span class="marker">申請は婚姻届提出後1年以内</span>に行う必要があります。申請月の翌月分から支給が開始されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>家賃（共益費・管理費除く）から5万円を差し引いた額で、月額上限3万円</strong>が最長2年間支給されます。</p><p><span class="marker">公営住宅や社宅、親族が所有する住宅は対象外</span>です。</p><div class="note-box">補助期間中に市外に転出した場合は、転出月の前月分をもって支給終了となります。また、住宅を購入した場合も支給は終了しますが、浦安市の住宅取得支援制度を別途利用できる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-maternity-dental',
    title: '浦安市 妊婦歯科健診助成制度',
    organization: '浦安市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['浦安市', '妊婦歯科', '助成'],
    eligibility: '浦安市に住所を有する妊婦',
    applicationPeriod: '通年（妊娠届出後〜産後1か月まで）',
    description: '浦安市が実施する妊婦歯科健診助成制度です。妊娠中に市内の協力歯科医院で無料の歯科健診を受けることができます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 妊婦歯科健診助成制度は、<span class="marker">妊娠中の方が市内の協力歯科医院で無料の歯科健診を受けられる</span>制度です。</p><p>妊娠中はホルモンバランスの変化により歯周病やむし歯のリスクが高まります。妊娠性歯肉炎は早産・低体重児出産のリスク因子とされており、口腔ケアは母子の健康に直結しています。浦安市では妊婦が安心して受診できるよう、歯科健診の費用を全額助成しています。</p><p><span class="marker-green">受診回数は妊娠期間中に2回まで無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="受診方法"><p>母子健康手帳の交付時に受診券が配布されます</p><p>市内の協力歯科医院に電話で予約</p><p>受診券と母子健康手帳を持参して受診</p></div><p>妊娠届出後から産後1か月までに受診できます。<strong>安定期（妊娠16週〜27週頃）の受診が推奨</strong>されています。</p><p><span class="marker">受診券を紛失した場合は、浦安市健康増進課で再発行</span>が可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>健診費用は全額を浦安市が負担</strong>するため、自己負担はありません。健診の内容は口腔内診査、歯周病検査、ブラッシング指導です。</p><div class="highlight-box">健診の結果、治療が必要と診断された場合の治療費は通常の保険診療となります。妊娠中は使用できる薬剤や治療に制限があるため、早期発見・早期治療が大切です。まずは安定期に入ったら1回目の健診をお受けください。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-school-lunch',
    title: '浦安市 学校給食費補助制度',
    organization: '浦安市',
    type: 'local',
    maxAmount: '第3子以降無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '千葉県',
    tags: ['浦安市', '給食費', '補助'],
    eligibility: '浦安市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '浦安市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額補助し、多子世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 学校給食費補助制度は、<span class="marker">第3子以降の児童生徒の学校給食費を全額免除</span>する制度です。</p><p>浦安市は財政力指数が全国トップクラスの自治体で、子育て支援に手厚い予算を割いています。学校給食費は小学校で月額約4,700円、中学校で月額約5,400円かかるため、多子世帯にとっては年間で大きな負担となります。第3子以降の無料化により家計を支えます。</p><p><span class="marker-green">所得制限はなく、第3子以降であれば全世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>浦安市立小中学校に在籍する児童生徒であること</p><p>18歳未満の子どもが3人以上いる世帯の第3子以降であること</p><p>学校給食を喫食していること</p></div><p>年度当初に学校を通じて申請書が配布されます。<span class="marker">必要事項を記入し学校へ提出するだけ</span>の簡便な手続きです。</p><p><strong>年度途中の転入や出生等による世帯変更があった場合も、随時申請が可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の学校給食費が全額補助</strong>されます。小学校で年間約5万6千円、中学校で年間約6万5千円の負担軽減です。</p><p><span class="marker">就学援助制度の認定を受けている世帯は、就学援助が優先適用</span>されます。</p><div class="note-box">食物アレルギー等により給食を喫食できない場合は、喫食した分のみが補助の対象です。給食センターのアレルギー対応食を利用している場合は全額補助の対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-youth-employment',
    title: '浦安市 UIJターン就職奨励金',
    organization: '浦安市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'employment',
    prefecture: '千葉県',
    tags: ['浦安市', 'UIJターン', '奨励金'],
    eligibility: '浦安市外から転入し、市内事業所に正規雇用された39歳以下の方',
    applicationPeriod: '通年（転入後6か月経過後に申請）',
    description: '浦安市が実施するUIJターン就職奨励金です。市外から転入し市内の事業所に就職した若者に奨励金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 UIJターン就職奨励金は、<span class="marker">市外から浦安市に転入し、市内の事業所に正規雇用された39歳以下の方</span>に奨励金を支給する制度です。</p><p>浦安市は観光・サービス業を中心に多くの事業所がありますが、人手不足が課題となっています。若い人材の獲得と定住促進を目的に、UIJターンで市内に移住・就職する方への経済的支援を行っています。</p><p><span class="marker-green">単身者は10万円、世帯での転入は15万円</span>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>浦安市外から転入し、住民登録があること</p><p>39歳以下であること</p><p>浦安市内の事業所に正規雇用（週30時間以上の無期雇用）されたこと</p><p>転入日から6か月以上継続して居住・勤務していること</p></div><p>浦安市役所商工観光課に申請書・雇用証明書・住民票を提出します。<span class="marker">転入日から6か月経過後、3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身者：10万円、世帯（配偶者または子と同居）：15万円</strong>です。</p><p><span class="marker">申請後5年以内に市外に転出した場合は、奨励金の返還を求められる</span>場合があります。</p><div class="note-box">国の「移住支援事業」（最大100万円）の対象要件を満たす場合は、そちらを優先的にご利用ください。両制度の併用はできませんが、国の制度の方が支給額が大きいです。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-home-care',
    title: '浦安市 在宅介護支援手当',
    organization: '浦安市',
    type: 'local',
    maxAmount: '月額1万円',
    maxAmountNum: 1,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['浦安市', '在宅介護', '手当'],
    eligibility: '浦安市に住所を有し、要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '浦安市が実施する在宅介護支援手当です。重度の要介護高齢者を在宅で介護する家族に月額1万円の手当を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 在宅介護支援手当は、<span class="marker">要介護3以上の高齢者を在宅で介護している家族</span>に手当を支給する制度です。</p><p>浦安市は比較的若い街ですが、新町地区を中心に高齢化が進みつつあります。在宅介護を行う家族の経済的・精神的負担を軽減し、住み慣れた地域で生活を続けられるよう支援しています。</p><p><span class="marker-green">月額1万円が支給され、介護者の自由に使える経費</span>として活用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>浦安市に住民登録があること</p><p>要介護3〜5の認定を受けた65歳以上の方を介護していること</p><p>被介護者と同居し、在宅で6か月以上介護を継続していること</p><p>被介護者が介護保険施設に入所していないこと</p></div><p>浦安市高齢者福祉課に申請書と介護保険被保険者証のコピーを提出します。<span class="marker">申請月の翌月分から支給</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額1万円</strong>が年3回（4月・8月・12月）にまとめて口座振込されます。</p><p><span class="marker">被介護者が3か月以上連続して入院した場合は支給が停止</span>されます。退院後は再度申請が必要です。</p><div class="highlight-box">浦安市では在宅介護支援手当のほか、介護者向けのリフレッシュ事業（マッサージ券の交付等）も実施しています。あわせてご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'urayasu-led-subsidy',
    title: '浦安市 LED照明導入補助金',
    organization: '浦安市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '千葉県',
    tags: ['浦安市', 'LED照明', '補助金'],
    eligibility: '浦安市内の住宅にLED照明を導入する市民',
    applicationPeriod: '4月〜翌年1月（予算に達し次第終了）',
    description: '浦安市が実施するLED照明導入補助金です。住宅の照明をLEDに交換する費用の一部を補助し、省エネルギーを推進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浦安市 LED照明導入補助金は、<span class="marker">住宅の既存照明をLEDに交換する費用</span>の一部を補助する制度です。</p><p>浦安市ではゼロカーボンシティの実現に向けて、家庭部門の省エネルギーを推進しています。LED照明は蛍光灯に比べて消費電力が約50%削減でき、寿命も約4万時間と長寿命です。初期費用の負担を軽減することで、LED化の普及を促進しています。</p><p><span class="marker-green">購入・設置費の3分の1（上限2万円）</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>浦安市に住民登録があること</p><p>市内の住宅（戸建て・マンション専有部分）に設置すること</p><p>照明器具ごとLED照明に交換すること（電球のみの交換は対象外）</p><p>購入費が1万円以上（税込）であること</p></div><p>浦安市環境保全課に申請書と領収書・製品カタログを提出します。<span class="marker">購入・設置後の事後申請方式</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>購入・設置費の3分の1（上限2万円）</strong>です。1世帯につき年度内1回限りです。</p><div class="note-box">LED電球への交換のみ（器具は既存のまま）は対象外です。シーリングライトやダウンライトなど、照明器具ごと交換する場合が補助の対象です。複数箇所を同時に交換する場合は、合計金額で申請できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 立川市（東京都）9件
  // ────────────────────────────────────────────────
  {
    slug: 'tachikawa-nursery-support',
    title: '立川市 認可外保育施設利用者補助金',
    organization: '立川市',
    type: 'local',
    maxAmount: '最大月額4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['立川市', '認可外保育', '補助金'],
    eligibility: '立川市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '立川市が実施する認可外保育施設利用者補助金です。認可保育所の待機児童となった世帯に保育料の一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 認可外保育施設利用者補助金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用する世帯</span>に保育料の差額を補助する制度です。</p><p>立川市は多摩地域の中心都市として商業施設やオフィスが集積し、人口約18万人が暮らしています。中央線・南武線・多摩モノレールが交差する交通の要衝であり、共働き世帯の保育需要が高い地域です。</p><p><span class="marker-green">月額最大4万円が補助され、認可保育所との保育料差額を軽減</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>立川市に住民登録があること</p><p>認可保育所の利用調整で入所保留となったこと</p><p>東京都が指導監督基準を満たす旨の証明書を交付した施設を利用していること</p><p>保育の必要性の認定を受けていること</p></div><p>立川市子ども家庭部に四半期ごとに申請書と領収書を提出します。<span class="marker">電子申請にも対応</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大4万円</strong>が補助されます。実際の補助額は認可保育所の保育料との差額が上限です。</p><p><span class="marker">東京都の「認可外保育施設利用者負担軽減事業」と合わせて利用</span>することで、さらに負担を軽減できます。</p><div class="note-box">ベビーホテルや事業所内保育施設は、東京都の指導監督基準を満たしている場合のみ対象となります。利用している施設が対象かどうかは事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-afterschool-care',
    title: '立川市 学童保育利用料減額制度',
    organization: '立川市',
    type: 'local',
    maxAmount: '最大月額5,000円減額',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['立川市', '学童保育', '減額'],
    eligibility: '立川市内の学童保育所を利用する多子世帯・ひとり親世帯・低所得世帯の保護者',
    applicationPeriod: '4月〜翌年3月（年度ごとに申請）',
    description: '立川市が実施する学童保育利用料減額制度です。多子世帯やひとり親世帯の利用料負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 学童保育利用料減額制度は、<span class="marker">多子世帯やひとり親世帯などの学童保育利用料を減額</span>する制度です。</p><p>立川市は昭和記念公園や多摩モノレール沿線の大型商業施設など、ファミリー層に人気のエリアです。放課後の安全な居場所として学童保育の需要が高く、経済的な理由で利用を諦めることのないよう支援を行っています。</p><p><span class="marker-green">第2子は半額、第3子以降は無料、住民税非課税世帯は全額免除</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="減額の区分"><p>同一世帯から2人以上が利用する場合の第2子：半額</p><p>第3子以降：無料</p><p>ひとり親世帯：半額</p><p>住民税非課税世帯・生活保護世帯：全額免除</p></div><p>学童保育所の入所申込時に減額申請書を提出します。<span class="marker">ひとり親世帯は児童扶養手当証書、非課税世帯は課税証明書が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用料は月額約1万円のため、<strong>半額で約5,000円の軽減、全額免除で約1万円の軽減</strong>です。</p><div class="highlight-box">立川市では民間学童クラブとの連携も進めており、市立学童保育所の利用が困難な場合は、民間学童クラブの利用に対する補助制度も利用できます。詳しくは子ども家庭支援センターにお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-eco-reform',
    title: '立川市 省エネ住宅改修助成金',
    organization: '立川市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['立川市', '省エネ改修', '助成金'],
    eligibility: '立川市内の住宅に省エネルギー改修工事を行う所有者',
    applicationPeriod: '4月〜12月（予算に達し次第終了）',
    description: '立川市が実施する省エネ住宅改修助成金です。住宅の断熱改修や高効率設備の導入を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 省エネ住宅改修助成金は、<span class="marker">住宅の断熱改修や高効率設備への更新</span>に対して費用の一部を助成する制度です。</p><p>立川市はゼロカーボンシティ宣言を行い、2050年までにCO2排出実質ゼロを目指しています。住宅の省エネ化はその重要な施策の一つで、既存住宅の断熱性能向上は光熱費の削減にもつながります。</p><p>助成率は対象工事費の<strong>3分の1</strong>で、<span class="marker-green">上限は20万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（内窓設置・複層ガラス化）</p><p>外壁・屋根・床の断熱改修</p><p>高効率給湯器（エコキュート・エネファーム等）の設置</p><p>太陽光発電システム・家庭用蓄電池の設置</p></div><p>立川市環境対策課に<strong>工事着手前に</strong>申請書と見積書を提出します。</p><p><span class="marker">市内業者による施工が条件</span>です。市外業者を利用する場合は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>対象工事費の3分の1（上限20万円）</strong>です。</p><p><span class="marker">東京都の「既存住宅における省エネ改修促進事業」との併用が可能</span>ですが、同一の工事費に対する二重助成はできません。</p><div class="note-box">太陽光発電システムの設置については、別途「立川市太陽光発電システム設置補助金」が利用できる場合があります。両制度の併用の可否については環境対策課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-dental-checkup',
    title: '立川市 成人歯科健診費用助成制度',
    organization: '立川市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['立川市', '歯科健診', '助成'],
    eligibility: '立川市に住所を有する20歳以上の方',
    applicationPeriod: '通年（年度内1回）',
    description: '立川市が実施する成人歯科健診費用助成制度です。市内の協力歯科医院で年1回、無料の歯科健診を受けることができます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 成人歯科健診費用助成制度は、<span class="marker">20歳以上の市民が年1回無料で歯科健診を受けられる</span>制度です。</p><p>歯周病は日本人が歯を失う最大の原因であり、糖尿病や心疾患とも関連が指摘されています。立川市では「8020運動（80歳で20本以上の歯を保つ）」の推進と医療費の適正化を目的に、定期的な歯科健診の受診を支援しています。</p><p><span class="marker-green">年齢制限の上限なし、所得制限なしで、20歳以上の全市民が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="受診方法"><p>市報やホームページで対象者情報を確認</p><p>市内の協力歯科医院に電話予約</p><p>健康保険証を持参して受診</p></div><p>年度内に1回受診可能です。<strong>特定の年齢の方には個別に受診券が郵送</strong>されますが、届かない場合も窓口で発行を依頼できます。</p><p><span class="marker">健診結果は書面で交付され、かかりつけ歯科医での継続管理に活用</span>できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>健診費用は全額を立川市が負担</strong>し、自己負担はありません。健診内容は、むし歯チェック・歯周組織検査・口腔衛生指導です。</p><div class="highlight-box">健診で治療が必要と判断された場合の治療費は自己負担（保険診療）です。健診と同日に治療を受けた場合も、治療費は別途発生しますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-school-aid',
    title: '立川市 就学援助制度',
    organization: '立川市',
    type: 'local',
    maxAmount: '学用品費等支給',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['立川市', '就学援助', '給付'],
    eligibility: '立川市立小中学校に通う児童生徒の保護者で、経済的に就学が困難な方',
    applicationPeriod: '4月〜随時（年度ごとに申請）',
    description: '立川市が実施する就学援助制度です。経済的に困難な世帯の児童生徒に対し、学用品費・給食費・修学旅行費等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 就学援助制度は、<span class="marker">経済的理由で就学が困難な児童生徒の保護者</span>に対して、学校生活に必要な費用を支給する制度です。</p><p>立川市では「すべての子どもが等しく学べる環境」の実現を目指し、国の制度に基づく就学援助に市独自の上乗せを行っています。家庭の経済状況にかかわらず、安心して学校生活を送れるよう支援しています。</p><p><span class="marker-green">学用品費、給食費、修学旅行費、校外活動費、医療費、新入学用品費</span>など幅広い費目が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>生活保護受給世帯（要保護）</p><p>生活保護基準の1.3倍以内の所得の世帯（準要保護）</p><p>児童扶養手当を全額受給している世帯</p><p>国民年金保険料の全額免除を受けている世帯</p></div><p>年度当初に学校を通じて全家庭に案内が配布されます。<span class="marker">申請は学校に提出するだけ</span>で、市役所へ行く必要はありません。</p><p><strong>年度途中でも随時申請可能で、申請月から支給が始まります</strong>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>主な支給費目と概算額です。<strong>学用品費：小学校年額約1万1千円・中学校年額約2万2千円、給食費：全額、修学旅行費：実費（上限あり）</strong></p><p><span class="marker">新入学用品費は入学前支給が可能</span>で、小学校約5万4千円、中学校約6万3千円が3月に支給されます。</p><div class="note-box">認定結果は6月頃に学校を通じて通知されます。不認定の場合でも、年度途中で家計状況が変化した場合は再申請が可能です。お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-youth-employment',
    title: '立川市 若者就労定着支援金',
    organization: '立川市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '東京都',
    tags: ['立川市', '若者就労', '支援金'],
    eligibility: '立川市に住所を有する34歳以下の方で、市の就労支援を経て正規雇用に就いた方',
    applicationPeriod: '通年（雇用後6か月経過後に申請）',
    description: '立川市が実施する若者就労定着支援金です。市の就労支援を経て正規雇用された若者に支援金を支給し、職場定着を促進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 若者就労定着支援金は、<span class="marker">市の就労支援プログラムを利用して正規雇用に就いた34歳以下の方</span>に支援金を支給する制度です。</p><p>立川市は多摩地域の商業・業務の中心地であり、多くの事業所が集積しています。しかし若年層の早期離職率の高さが課題であり、就職後の定着を経済的に後押しすることで、安定した雇用の実現を目指しています。</p><p><span class="marker-green">6か月の継続勤務で5万円、1年の継続勤務でさらに5万円、合計最大10万円</span>を支給します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>立川市に住民登録がある34歳以下の方</p><p>立川市若者サポートステーション等の就労支援を利用したこと</p><p>正規雇用（期間の定めのない雇用で週30時間以上）に就いたこと</p><p>6か月以上継続勤務していること</p></div><p>立川市産業文化スポーツ部に申請書と雇用証明書を提出します。<span class="marker">6か月経過後および1年経過後にそれぞれ申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>6か月継続勤務：5万円、1年継続勤務：追加5万円（合計最大10万円）</strong>です。</p><div class="note-box">自営業・家族経営の事業所への就職・公務員は対象外です。また、同一の雇用に対して国や都の類似支援金を受給している場合は併用できないことがあります。詳細は窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-home-care',
    title: '立川市 在宅高齢者介護手当',
    organization: '立川市',
    type: 'local',
    maxAmount: '月額1万円',
    maxAmountNum: 1,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['立川市', '在宅介護', '手当'],
    eligibility: '立川市に住所を有し、要介護4・5の高齢者を在宅で6か月以上介護している家族',
    applicationPeriod: '通年',
    description: '立川市が実施する在宅高齢者介護手当です。重度の要介護高齢者を在宅で介護する家族に月額1万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 在宅高齢者介護手当は、<span class="marker">要介護4・5の高齢者を在宅で介護している家族</span>に対して手当を支給する制度です。</p><p>立川市は多摩地域の中核都市として都市機能が充実していますが、高齢化の進行に伴い在宅介護の負担も増大しています。施設に入所できない、あるいは在宅での介護を希望する家族に対して、経済的な支援を行っています。</p><p><span class="marker-green">月額1万円が支給され、使途に制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>立川市に住民登録があること</p><p>要介護4または5の認定を受けた65歳以上の方と同居し介護していること</p><p>6か月以上継続して在宅介護を行っていること</p><p>被介護者が施設に入所していないこと</p></div><p>立川市介護保険課に申請書と介護保険被保険者証のコピーを提出します。<span class="marker">申請翌月分から支給開始</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額1万円</strong>が年3回（8月・12月・4月）にまとめて口座振込されます。</p><p><span class="marker">被介護者が連続して3か月以上入院した場合は支給停止</span>となります。</p><div class="highlight-box">立川市では在宅介護者向けの「介護者リフレッシュ事業」も実施しています。介護からの一時的な解放を図るため、ショートステイの利用費助成やリフレッシュ講座を提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-compost-subsidy',
    title: '立川市 生ごみ処理機購入補助金',
    organization: '立川市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '東京都',
    tags: ['立川市', '生ごみ処理機', '補助金'],
    eligibility: '立川市内に住所を有する方で、家庭用生ごみ処理機を購入した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '立川市が実施する生ごみ処理機購入補助金です。家庭用生ごみ処理機の購入費用を補助し、ごみの減量化とリサイクルを推進します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 生ごみ処理機購入補助金は、<span class="marker">家庭用生ごみ処理機（電動式・コンポスト容器）の購入費</span>の一部を補助する制度です。</p><p>立川市ではごみの減量化を重点施策に位置づけており、家庭から排出される燃やせるごみの約30%を占める生ごみの削減に取り組んでいます。生ごみ処理機を活用することで、ごみ出しの負担軽減と堆肥としての資源化が期待できます。</p><p><span class="marker-green">購入費の2分の1（上限2万円）</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象機器"><p>電動式生ごみ処理機（乾燥式・バイオ式）</p><p>コンポスト容器（回転式・密閉式等）</p><p>段ボールコンポスト用キット</p></div><p>立川市ごみ対策課に<strong>購入後</strong>に申請書・領収書・保証書のコピーを提出します。</p><p><span class="marker">購入日から6か月以内に申請</span>してください。オンラインでの申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>購入費の2分の1（上限2万円）</strong>です。1世帯につき5年間に1台が補助対象です。</p><div class="note-box">補助を受けた方は、市の調査に協力いただく場合があります。また、使い方に困った場合は、市が開催する「生ごみ減量講座」への参加をおすすめします。処理した堆肥の活用方法も学べます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tachikawa-flood-prevention',
    title: '立川市 雨水浸透施設設置助成金',
    organization: '立川市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['立川市', '雨水浸透', '助成金'],
    eligibility: '立川市内の住宅に雨水浸透施設を設置する所有者',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '立川市が実施する雨水浸透施設設置助成金です。雨水浸透ますや浸透トレンチの設置費用を助成し、都市型水害の防止を図ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市 雨水浸透施設設置助成金は、<span class="marker">雨水浸透ます・浸透トレンチなどの雨水浸透施設の設置費用</span>を助成する制度です。</p><p>立川市は武蔵野台地に位置し、都市化の進展により雨水の浸透面積が減少しています。局地的な豪雨時に下水道や河川への雨水流出を抑制するため、各家庭での雨水浸透を促進しています。地下水の涵養にも効果があり、環境面でも重要な施策です。</p><p>助成率は設置費の<strong>全額</strong>で、<span class="marker-green">上限は15万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象施設"><p>雨水浸透ます（既設の集水ますを浸透ますに改造する場合を含む）</p><p>浸透トレンチ</p><p>雨水貯留タンク（浸透機能付き）</p></div><p>立川市下水道課に<strong>設置前に</strong>申請書と見積書を提出します。現地確認後に交付決定が行われます。</p><p><span class="marker">工事は市が認定した施工業者に依頼する必要があります</span>。業者リストは下水道課で入手可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>設置費の全額（上限15万円）</strong>です。浸透ます1基あたりの標準工事費に基づいて算定されます。</p><div class="note-box">設置後は適切な維持管理が必要です。浸透ますは落ち葉やゴミが詰まると機能が低下するため、年に数回の清掃をお願いしています。維持管理方法については、設置時に施工業者から説明があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 武蔵野市（東京都）9件
  // ────────────────────────────────────────────────
  {
    slug: 'musashino-nursery-support',
    title: '武蔵野市 認可外保育施設利用者補助金',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '最大月額5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['武蔵野市', '認可外保育', '補助金'],
    eligibility: '武蔵野市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '武蔵野市が実施する認可外保育施設利用者補助金です。認可保育所に入所できず認可外保育施設を利用する世帯に保育料を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 認可外保育施設利用者補助金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用している世帯</span>に対して保育料の差額を補助する制度です。</p><p>武蔵野市は吉祥寺を中心に「住みたい街ランキング」で常に上位に入る人口約15万人のまちです。子育て世帯の人気が高く保育需要が逼迫しており、認可外保育施設利用者への手厚い支援を行っています。</p><p><span class="marker-green">月額最大5万円と、多摩地域でもトップクラスの補助額</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>武蔵野市に住民登録があること</p><p>認可保育所の利用調整で入所保留となったこと</p><p>東京都の指導監督基準を満たす認可外保育施設を利用していること</p><p>保育の必要性の認定を受けていること</p></div><p>武蔵野市子ども家庭部に四半期ごとに申請書と領収書を提出します。<span class="marker">窓口のほか郵送でも申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大5万円</strong>が補助されます。認可保育所の保育料との差額が上限です。</p><p><span class="marker">東京都の負担軽減事業と合算して利用</span>でき、実質的な保育料負担をさらに抑えることができます。</p><div class="note-box">認可保育所への入所が決まった場合は、入所月の前月分までが補助対象です。ベビーシッター利用支援事業との併用はできませんので、有利な方をお選びください。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-afterschool-care',
    title: '武蔵野市 放課後児童クラブ利用料助成制度',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '最大月額5,000円',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['武蔵野市', '放課後児童クラブ', '助成'],
    eligibility: '武蔵野市内の放課後児童クラブを利用する多子世帯・ひとり親世帯の保護者',
    applicationPeriod: '4月〜翌年3月（年度ごとに申請）',
    description: '武蔵野市が実施する放課後児童クラブ利用料助成制度です。多子世帯やひとり親世帯の利用料を減額し、放課後の安全な居場所を確保します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 放課後児童クラブ利用料助成制度は、<span class="marker">多子世帯やひとり親世帯の利用料を減額</span>する制度です。</p><p>武蔵野市は吉祥寺・三鷹・武蔵境の3駅を中心に住宅地が広がり、子育て世帯が多い地域です。市内の全小学校に設置された「あそべえ」（放課後子ども教室）と放課後児童クラブが連携し、放課後の子どもの居場所を確保しています。</p><p><span class="marker-green">第2子は半額、第3子以降は無料、非課税世帯は全額免除</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="減額の区分"><p>同時利用の第2子：利用料半額</p><p>第3子以降：利用料無料</p><p>ひとり親世帯：利用料半額</p><p>住民税非課税世帯：利用料全額免除</p></div><p>入会申込時に減額申請書を提出します。<span class="marker">マイナンバーを記載することで、課税証明書の提出を省略</span>できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用料は月額約1万円のため、<strong>半額で約5,000円の軽減</strong>です。第3子以降・非課税世帯は全額免除です。</p><div class="highlight-box">武蔵野市の放課後児童クラブは19時までの延長保育にも対応しています。延長保育料についても同様の減額が適用されます。長期休暇中の料金も同じ減額率です。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-eco-reform',
    title: '武蔵野市 省エネルギー住宅改修補助金',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '東京都',
    tags: ['武蔵野市', '省エネ改修', '補助金'],
    eligibility: '武蔵野市内の住宅に省エネルギー改修工事を行う所有者',
    applicationPeriod: '4月〜12月（予算に達し次第終了）',
    description: '武蔵野市が実施する省エネルギー住宅改修補助金です。住宅の断熱改修や高効率設備の導入を手厚く支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 省エネルギー住宅改修補助金は、<span class="marker">住宅の断熱改修や高効率設備への更新</span>に対して費用の一部を補助する制度です。</p><p>武蔵野市は環境先進都市として、早くからCO2削減に取り組んでいます。住宅の省エネ化は市の温暖化対策行動計画の柱であり、他市に比べて補助額が手厚く設定されています。</p><p>補助率は対象工事費の<strong>3分の1</strong>で、<span class="marker-green">上限は30万円</span>と多摩地域でもトップクラスです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（内窓設置・複層ガラス化・樹脂サッシ化）</p><p>外壁・屋根・天井・床の断熱改修</p><p>高効率給湯器・エネファームの設置</p><p>家庭用蓄電池の設置</p><p>高断熱浴槽の設置</p></div><p>武蔵野市環境政策課に<strong>工事着手前に</strong>申請書を提出してください。</p><p><span class="marker">省エネ診断（無料）を事前に受けると、補助金が5万円加算</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の3分の1（上限30万円）</strong>です。省エネ診断を受けた場合は<span class="marker">5万円が加算され、最大35万円</span>となります。</p><div class="note-box">東京都の「既存住宅における省エネ改修促進事業」や国の「住宅省エネキャンペーン」との併用が可能です。ただし、補助対象経費が重複する部分は差し引かれます。申請前に環境政策課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-newlywed-rent',
    title: '武蔵野市 新婚・子育て世帯家賃助成制度',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '最大月額3万円（最長3年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '東京都',
    tags: ['武蔵野市', '新婚家賃', '助成'],
    eligibility: '武蔵野市内の民間賃貸住宅に居住する新婚世帯または子育て世帯',
    applicationPeriod: '通年（婚姻届出後1年以内または末子が3歳未満の間に申請）',
    description: '武蔵野市が実施する新婚・子育て世帯家賃助成制度です。市内の賃貸住宅に居住する新婚・子育て世帯の家賃を最長3年間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 新婚・子育て世帯家賃助成制度は、<span class="marker">市内の民間賃貸住宅に居住する新婚世帯または子育て世帯</span>の家賃の一部を助成する制度です。</p><p>武蔵野市は吉祥寺を中心に家賃相場が東京都内でも高い地域です。若い世帯が住み続けられるよう、家賃負担の軽減を図っています。新婚世帯だけでなく、子育て中の世帯も対象とすることで、幅広い家族形態に対応しています。</p><p><span class="marker-green">月額最大3万円が最長3年間支給され、総額最大108万円</span>の支援となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>新婚世帯：婚姻届出後1年以内で夫婦ともに40歳未満</p><p>子育て世帯：3歳未満の子がいる世帯</p><p>世帯の合計所得が510万円未満</p><p>武蔵野市内の民間賃貸住宅に居住していること</p></div><p>武蔵野市住宅対策課に申請書・賃貸借契約書・所得証明書等を提出します。<span class="marker">申請月の翌月分から支給開始</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>家賃（共益費・管理費除く）から6万円を差し引いた額で、月額上限3万円</strong>です。最長3年間支給されます。</p><p><span class="marker">社宅・公営住宅・親族所有の住宅は対象外</span>です。</p><div class="highlight-box">助成期間中に市内で住宅を購入した場合は支給終了となりますが、武蔵野市の住宅取得補助制度を別途利用できます。転居して市内の別の賃貸住宅に移る場合は、届出により助成を継続できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-maternity-dental',
    title: '武蔵野市 妊婦歯科健診助成制度',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['武蔵野市', '妊婦歯科', '助成'],
    eligibility: '武蔵野市に住所を有する妊婦',
    applicationPeriod: '通年（妊娠届出後〜産後1か月まで）',
    description: '武蔵野市が実施する妊婦歯科健診助成制度です。妊娠中に市内の協力歯科医院で無料の歯科健診を受けることができます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 妊婦歯科健診助成制度は、<span class="marker">妊娠中の方が市内の協力歯科医院で無料の歯科健診を受けられる</span>制度です。</p><p>妊娠中はホルモンの変化やつわりによる歯磨き不足で、歯周病やむし歯のリスクが高まります。歯周病は早産のリスク因子としても知られており、母子の健康を守るために口腔ケアは重要です。武蔵野市では妊婦の歯科健診費用を全額助成しています。</p><p><span class="marker-green">妊娠期間中に2回まで無料で受診</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="受診方法"><p>母子健康手帳の交付時に受診券2枚を配布</p><p>市内の協力歯科医院に予約</p><p>受診券と母子健康手帳を持参</p></div><p>妊娠届出後から産後1か月までの間に受診可能です。<strong>安定期（16週〜27週頃）の受診をおすすめ</strong>しています。</p><p><span class="marker">受診券を紛失した場合は、武蔵野市健康課で再発行可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>健診費用は全額を武蔵野市が負担</strong>します。自己負担はありません。むし歯チェック・歯周病検査・ブラッシング指導が受けられます。</p><div class="note-box">健診の結果、治療が必要となった場合の費用は通常の保険診療（自己負担あり）です。妊娠中の治療はX線撮影や使用薬剤に制限があるため、早期に健診を受けて問題を発見することが大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-school-lunch',
    title: '武蔵野市 学校給食費補助制度',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '第3子以降無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['武蔵野市', '給食費', '補助'],
    eligibility: '武蔵野市立小中学校に通う第3子以降の児童生徒の保護者',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '武蔵野市が実施する学校給食費補助制度です。第3子以降の児童生徒の給食費を全額補助し、多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 学校給食費補助制度は、<span class="marker">第3子以降の児童生徒の学校給食費を全額免除</span>する制度です。</p><p>武蔵野市は財政力指数が全国でも上位にある自治体で、教育・子育て支援に手厚い予算を配分しています。自校調理方式の給食は評価が高い一方、小学校で月額約4,800円、中学校で月額約5,500円の負担があり、多子世帯の軽減を図っています。</p><p><span class="marker-green">所得制限なしで、第3子以降の全世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>武蔵野市立小中学校に在籍する児童生徒であること</p><p>18歳未満の子どもが3人以上いる世帯の第3子以降であること</p><p>学校給食を喫食していること</p></div><p>年度当初に学校から案内・申請書が配布されます。<span class="marker">必要事項を記入し学校に提出するだけの簡易な手続き</span>です。</p><p><strong>年度途中の出生や転入でも随時申請可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第3子以降の給食費が全額補助</strong>されます。年間約5万8千円（小学校）〜約6万6千円（中学校）の負担軽減です。</p><p><span class="marker">就学援助制度の認定世帯は就学援助が優先適用</span>されます。</p><div class="highlight-box">武蔵野市では給食の食材にこだわり、地産地消や有機食材の導入を進めています。第3子以降の無料化と質の高い給食で、多子世帯の子育てを応援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-youth-employment',
    title: '武蔵野市 若者キャリアアップ支援金',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '東京都',
    tags: ['武蔵野市', '若者キャリア', '支援金'],
    eligibility: '武蔵野市に住所を有する39歳以下の方で、市の就労支援を経て正規雇用に就いた方',
    applicationPeriod: '通年（雇用後6か月経過後に申請）',
    description: '武蔵野市が実施する若者キャリアアップ支援金です。市の就労支援事業を利用して正規雇用に就いた若者に支援金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 若者キャリアアップ支援金は、<span class="marker">市の就労支援事業を利用して正規雇用に就いた39歳以下の方</span>に支援金を支給する制度です。</p><p>武蔵野市は吉祥寺を中心に商業・サービス業が盛んですが、若年層の安定した雇用が課題となっています。市ではキャリアカウンセリングや職業訓練の紹介などの就労支援事業を実施し、正規雇用への移行と定着を後押ししています。</p><p><span class="marker-green">正規雇用後6か月の継続勤務で10万円を一括支給</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>武蔵野市に住民登録がある39歳以下の方</p><p>市の就労支援事業（キャリア相談・セミナー等）を利用したこと</p><p>正規雇用（週30時間以上の無期雇用）に就いたこと</p><p>雇用開始から6か月以上継続勤務していること</p></div><p>武蔵野市産業振興課に申請書と雇用証明書を提出します。<span class="marker">雇用開始日から6か月経過後、3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>10万円が一括で支給</strong>されます。申請後おおむね1〜2か月で口座に振り込まれます。</p><div class="note-box">公務員・自営業・家族経営の事業所への就職は対象外です。過去にこの支援金を受給した方は再度の申請はできません。東京都の就労支援関連の助成金と併用できる場合がありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-home-care',
    title: '武蔵野市 在宅介護者支援手当',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '月額1万5千円',
    maxAmountNum: 1,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['武蔵野市', '在宅介護', '手当'],
    eligibility: '武蔵野市に住所を有し、要介護3以上の高齢者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '武蔵野市が実施する在宅介護者支援手当です。重度の要介護高齢者を在宅で介護する家族に月額1万5千円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 在宅介護者支援手当は、<span class="marker">要介護3以上の高齢者を在宅で介護している家族</span>に手当を支給する制度です。</p><p>武蔵野市は独自の高齢者福祉政策に力を入れており、在宅介護者への支援も手厚く設定されています。月額1万5千円は多摩地域の自治体の中でも高い水準で、介護者の経済的負担を軽減しています。</p><p><span class="marker-green">月額1万5千円が支給され、使途の制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>武蔵野市に住民登録があること</p><p>要介護3〜5の認定を受けた65歳以上の方と同居し介護していること</p><p>6か月以上継続して在宅介護を行っていること</p><p>被介護者が施設に入所していないこと</p></div><p>武蔵野市高齢者支援課に申請書と介護保険被保険者証のコピーを提出します。<span class="marker">申請翌月分から支給開始</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額1万5千円</strong>が年3回（8月・12月・4月）にまとめて口座振込されます。年間で18万円の支援です。</p><p><span class="marker">被介護者が3か月以上連続で入院した場合は支給停止</span>となり、退院後は再申請が必要です。</p><div class="highlight-box">武蔵野市では在宅介護者向けの「ほっとサロン」（介護者交流会）を月1回開催しています。同じ立場の方との情報交換や、専門職への相談もできますので、ぜひご参加ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'musashino-appliance-subsidy',
    title: '武蔵野市 省エネ家電買替補助金',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '東京都',
    tags: ['武蔵野市', '省エネ家電', '補助金'],
    eligibility: '武蔵野市に住所を有する方で、省エネ基準を満たす家電に買い替えた方',
    applicationPeriod: '4月〜翌年1月（予算に達し次第終了）',
    description: '武蔵野市が実施する省エネ家電買替補助金です。省エネ性能の高い家電への買い替えを促進し、家庭のCO2排出削減を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>武蔵野市 省エネ家電買替補助金は、<span class="marker">省エネ性能の高いエアコン・冷蔵庫・給湯器への買い替え費用</span>の一部を補助する制度です。</p><p>武蔵野市はゼロカーボンシティの実現に向け、家庭部門の省エネを重点的に推進しています。特にエアコンと冷蔵庫は家庭の電力消費の約4割を占めるため、高効率機器への買い替えによるCO2削減効果が大きいとされています。</p><p><span class="marker-green">対象家電1台あたり最大2万円</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電"><p>エアコン：統一省エネラベル4つ星以上</p><p>冷蔵庫：統一省エネラベル4つ星以上</p><p>給湯器：エコキュート・エコジョーズ等の高効率機器</p></div><p>武蔵野市環境政策課に<strong>購入後</strong>に申請書・領収書・保証書コピー・旧機器のリサイクル券を提出します。</p><p><span class="marker">購入日から3か月以内に申請</span>してください。オンライン申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>1台あたり最大2万円</strong>です。エアコン・冷蔵庫・給湯器のそれぞれ1台ずつ、1世帯あたり年度内最大3台まで申請可能です。</p><div class="note-box">旧機器の適切なリサイクル（家電リサイクル法に基づく処分）が補助の条件です。不法投棄は絶対に行わないでください。東京都の「家庭における省エネ家電買い替え促進事業」の対象ポイントと併用することも可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 三鷹市（東京都）9件
  // ────────────────────────────────────────────────
  {
    slug: 'mitaka-nursery-support',
    title: '三鷹市 認可外保育施設利用者補助金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大月額4万円',
    maxAmountNum: 4,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['三鷹市', '認可外保育', '補助金'],
    eligibility: '三鷹市に住所を有し、認可外保育施設を利用する児童の保護者',
    applicationPeriod: '通年（四半期ごとに申請）',
    description: '三鷹市が実施する認可外保育施設利用者補助金です。認可保育所に入所できず認可外施設を利用する世帯の保育料を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 認可外保育施設利用者補助金は、<span class="marker">認可保育所に入所できず認可外保育施設を利用する世帯</span>に保育料の差額を補助する制度です。</p><p>三鷹市はジブリ美術館や太宰治ゆかりの地として知られる文教都市で、人口約19万人が暮らしています。住宅地として人気が高く子育て世帯も多いため、保育需要が高い状況が続いています。</p><p><span class="marker-green">月額最大4万円が補助され、認可保育所との保育料差額を軽減</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>三鷹市に住民登録があること</p><p>認可保育所の利用調整で入所保留となったこと</p><p>東京都の指導監督基準を満たす認可外施設を利用していること</p><p>保育の必要性の認定を受けていること</p></div><p>三鷹市子ども政策部に四半期ごとに申請書と領収書を提出します。<span class="marker">電子申請にも対応</span>しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額最大4万円</strong>が補助されます。認可保育所の保育料との差額が上限です。</p><p><span class="marker">東京都の認可外保育施設利用者負担軽減事業と合わせて利用可能</span>です。</p><div class="note-box">認可保育所への入所決定後は、入所月の前月分までが補助対象です。決定通知を受けたら速やかにこども課へ届出をしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-afterschool-care',
    title: '三鷹市 放課後児童クラブ利用料助成制度',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大月額5,000円',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['三鷹市', '放課後児童クラブ', '助成'],
    eligibility: '三鷹市内の放課後児童クラブ（学童保育所）を利用する多子世帯・ひとり親世帯の保護者',
    applicationPeriod: '4月〜翌年3月（年度ごとに申請）',
    description: '三鷹市が実施する放課後児童クラブ利用料助成制度です。多子世帯やひとり親世帯の利用料を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 放課後児童クラブ利用料助成制度は、<span class="marker">多子世帯やひとり親世帯の利用料を軽減</span>する制度です。</p><p>三鷹市は「コミュニティ・スクール」の先進地として知られ、学校を核としたまちづくりを推進しています。放課後児童クラブは地域の子育て支援の要であり、すべての子どもが利用できるよう経済的支援を行っています。</p><p><span class="marker-green">第2子は半額、第3子以降は無料、非課税世帯は全額免除</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="減額の区分"><p>同一世帯の第2子：利用料半額</p><p>第3子以降：利用料無料</p><p>ひとり親世帯：利用料半額</p><p>住民税非課税世帯・生活保護世帯：全額免除</p></div><p>学童保育所の入所申込時にあわせて減額申請を行います。<span class="marker">児童扶養手当証書や課税証明書等の添付が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利用料月額約1万円に対し、<strong>半額で約5,000円の軽減、全額免除で約1万円の軽減</strong>です。</p><div class="highlight-box">三鷹市では放課後児童クラブと「地域子どもクラブ」が連携しており、クラブ活動の幅が広いのが特徴です。おやつ代等の実費は減額の対象外ですが、長期休暇中の特別料金には同じ減額率が適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-eco-reform',
    title: '三鷹市 省エネルギー住宅改修補助金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['三鷹市', '省エネ改修', '補助金'],
    eligibility: '三鷹市内の住宅に省エネルギー改修工事を行う所有者',
    applicationPeriod: '4月〜12月（予算に達し次第終了）',
    description: '三鷹市が実施する省エネルギー住宅改修補助金です。断熱改修や高効率設備の導入を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 省エネルギー住宅改修補助金は、<span class="marker">住宅の断熱改修や高効率設備の導入</span>にかかる費用を補助する制度です。</p><p>三鷹市は井の頭恩賜公園をはじめとする緑豊かな住宅都市で、環境保全と住環境の質の向上に注力しています。既存住宅の省エネ化は、温暖化対策と住民の快適性向上を両立する施策として推進されています。</p><p>補助率は対象工事費の<strong>3分の1</strong>で、<span class="marker-green">上限は20万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>窓の断熱改修（内窓設置・複層ガラス化）</p><p>外壁・屋根・天井・床の断熱改修</p><p>高効率給湯器（エコキュート等）の設置</p><p>家庭用蓄電池の設置</p></div><p>三鷹市環境政策課に<strong>工事着手前に</strong>申請します。見積書と施工業者の情報が必要です。</p><p><span class="marker">市内に事業所を有する施工業者による工事が優先</span>されますが、市外業者でも申請は可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の3分の1（上限20万円）</strong>です。</p><p><span class="marker">東京都の省エネ改修促進事業との併用が可能</span>ですが、対象工事費の重複部分は除かれます。</p><div class="note-box">完了報告は工事完了後30日以内に提出してください。報告が遅れると補助金の交付が遅れる場合があります。工事前後の写真撮影をお忘れなく。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-housing-purchase',
    title: '三鷹市 住宅取得支援助成金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '東京都',
    tags: ['三鷹市', '住宅取得', '助成金'],
    eligibility: '三鷹市内に住宅を新築または購入する子育て世帯・若年夫婦世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '三鷹市が実施する住宅取得支援助成金です。子育て世帯や若年夫婦世帯が市内に住宅を取得する際の費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 住宅取得支援助成金は、<span class="marker">子育て世帯や若年夫婦世帯が市内に住宅を新築・購入する際</span>に費用の一部を助成する制度です。</p><p>三鷹市は中央線沿線の人気住宅地ですが、東京都心部に比べると住宅価格が手頃で、子育て環境も充実しています。若い世帯の定住を促進し、地域の活力を維持するため住宅取得を支援しています。</p><p>基本額は20万円で、<strong>子育て世帯・市外からの転入には加算</strong>があり、<span class="marker-green">最大40万円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>子育て世帯：18歳未満の子がいる世帯</p><p>若年夫婦世帯：夫婦ともに39歳以下の世帯</p><p>三鷹市内に住宅を新築・購入すること</p><p>取得した住宅に5年以上居住する意思があること</p></div><p>三鷹市都市整備部住宅課に申請書・売買契約書・登記事項証明書を提出します。<span class="marker">住宅の引渡しから6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>基本額20万円</strong>に加え、以下の加算があります。<span class="marker">子育て世帯加算：10万円、市外からの転入加算：10万円</span>で、最大40万円です。</p><div class="note-box">助成金の交付は1戸につき1回限りです。5年以内に市外に転出した場合、助成金の返還を求められることがあります。住宅ローン減税など国の制度との併用は可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-infertility',
    title: '三鷹市 不妊・不育症治療費助成制度',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '東京都',
    tags: ['三鷹市', '不妊治療', '助成金'],
    eligibility: '三鷹市に住所を有し、不妊治療または不育症治療を受けている方',
    applicationPeriod: '治療終了後〜年度末まで',
    description: '三鷹市が実施する不妊・不育症治療費助成制度です。不妊治療に加えて不育症治療にかかる費用も助成対象としています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 不妊・不育症治療費助成制度は、<span class="marker">不妊治療および不育症治療の自己負担分を助成</span>する制度です。</p><p>三鷹市は子育て支援に積極的な自治体として知られ、妊娠前の段階から切れ目のない支援を行っています。特に不育症（妊娠しても流産・死産を繰り返す状態）への支援を行う自治体はまだ少ない中、三鷹市では独自に助成対象としています。</p><p><span class="marker-green">不妊治療は1回あたり最大10万円、不育症治療は年間最大15万円</span>が助成されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>三鷹市に住民登録があること</p><p>不妊治療：保険適用の体外受精・顕微授精を受けていること</p><p>不育症治療：医師の診断に基づき治療を受けていること</p><p>不妊治療は治療開始時に妻が43歳未満であること</p></div><p>三鷹市健康推進課に申請書・医療機関の受診証明書・領収書を提出します。<span class="marker">治療が終了した日の属する年度末までに申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>不妊治療：1回あたり最大10万円（通算6回まで）、不育症治療：年間最大15万円</strong>です。</p><p><span class="marker">男性不妊治療も助成対象</span>で、精子採取術等を行った場合は別途最大5万円が加算されます。</p><div class="highlight-box">三鷹市では不妊・不育に関する相談窓口を設けており、治療に関する不安や悩みを専門の保健師に相談できます。助成制度の利用と合わせて、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-school-aid',
    title: '三鷹市 就学援助制度',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '学用品費等支給',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['三鷹市', '就学援助', '給付'],
    eligibility: '三鷹市立小中学校に通う児童生徒の保護者で、経済的に就学が困難な方',
    applicationPeriod: '4月〜随時（年度ごとに申請）',
    description: '三鷹市が実施する就学援助制度です。経済的に困難な世帯に学用品費・給食費・修学旅行費等を支給し、学びを支えます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 就学援助制度は、<span class="marker">経済的理由で就学が困難な児童生徒の保護者</span>に対して、学校生活に必要な費用を支給する制度です。</p><p>三鷹市は「コミュニティ・スクール」を全国に先駆けて導入し、地域ぐるみの教育を推進してきた自治体です。すべての子どもが家庭の事情にかかわらず充実した学校生活を送れるよう、手厚い就学援助制度を整備しています。</p><p><span class="marker-green">学用品費、給食費、修学旅行費、校外活動費、医療費など幅広い費目が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>生活保護受給世帯（要保護）</p><p>生活保護基準の1.4倍以内の所得の世帯（準要保護）</p><p>児童扶養手当を受給している世帯</p><p>国民年金保険料・国民健康保険料が全額免除の世帯</p></div><p>年度当初に学校を通じて案内が配布されます。<span class="marker">申請書は学校に提出するだけで、市役所への来庁は不要</span>です。</p><p><strong>年度途中でも随時申請でき、申請月から支給が開始</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>学用品費：小学校年額約1万1千円・中学校年額約2万2千円、給食費：全額、修学旅行費：実費</strong>が主な支給内容です。</p><p><span class="marker">新入学用品費の入学前支給に対応</span>しており、小学校約5万4千円、中学校約6万3千円が3月に前倒し支給されます。</p><div class="note-box">三鷹市は所得基準を生活保護基準の1.4倍に設定しており、多くの自治体（1.2〜1.3倍）より広い範囲の世帯が対象となります。「対象外かもしれない」と思わず、まずはお気軽に申請をご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-youth-employment',
    title: '三鷹市 若者正規雇用定着奨励金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '東京都',
    tags: ['三鷹市', '若者正規雇用', '奨励金'],
    eligibility: '三鷹市に住所を有する34歳以下の方で、市の就労支援を経て正規雇用に就いた方',
    applicationPeriod: '通年（雇用後6か月経過後に申請）',
    description: '三鷹市が実施する若者正規雇用定着奨励金です。市の就労支援を経て正規雇用に就いた若者に奨励金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 若者正規雇用定着奨励金は、<span class="marker">市の就労支援事業を利用して正規雇用に就いた34歳以下の方</span>に奨励金を支給する制度です。</p><p>三鷹市は住宅都市としての顔を持つ一方、ICT関連企業や研究機関も立地し、多様な就労機会があります。しかし若年層の早期離職が課題であり、市ではキャリア相談や職業訓練の紹介と合わせて、定着へのインセンティブを設けています。</p><p><span class="marker-green">正規雇用後6か月の継続勤務で5万円、1年でさらに5万円、合計最大10万円</span>を支給します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>三鷹市に住民登録がある34歳以下の方</p><p>市の就労支援事業（キャリア相談・就職セミナー等）を利用したこと</p><p>正規雇用（期間の定めのない雇用で週30時間以上）に就いたこと</p><p>6か月以上継続勤務していること</p></div><p>三鷹市生活経済課に申請書と雇用証明書を提出します。<span class="marker">6か月目・1年目のそれぞれで申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>6か月継続勤務：5万円、1年継続勤務：追加5万円（合計最大10万円）</strong>です。</p><div class="note-box">公務員・自営業・家族従業者は対象外です。同一の雇用に対して国や東京都の類似助成金を受給している場合は併用できない場合があります。過去にこの奨励金を受給した方の再度の申請はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-home-care',
    title: '三鷹市 在宅高齢者介護手当支給制度',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '月額1万円',
    maxAmountNum: 1,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['三鷹市', '在宅介護', '手当'],
    eligibility: '三鷹市に住所を有し、要介護4・5の高齢者を在宅で6か月以上介護している家族',
    applicationPeriod: '通年',
    description: '三鷹市が実施する在宅高齢者介護手当支給制度です。重度の要介護高齢者を在宅で介護する家族に月額1万円の手当を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 在宅高齢者介護手当支給制度は、<span class="marker">要介護4・5の高齢者を在宅で介護している家族</span>に対して手当を支給する制度です。</p><p>三鷹市は地域包括ケアシステムの構築に力を入れており、在宅での生活を続けたい高齢者とそれを支える家族を支援しています。介護者の負担を少しでも和らげるため、経済的支援を行っています。</p><p><span class="marker-green">月額1万円が支給され、使途は自由</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>三鷹市に住民登録があること</p><p>要介護4または5の認定を受けた65歳以上の方と同居し介護していること</p><p>6か月以上継続して在宅で介護を行っていること</p><p>被介護者が施設に入所していないこと</p></div><p>三鷹市介護保険課に申請書と介護保険被保険者証のコピーを提出します。<span class="marker">申請月の翌月分から支給</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>月額1万円</strong>が年3回（8月・12月・4月）にまとめて口座振込されます。年間で12万円です。</p><p><span class="marker">被介護者が3か月以上連続して入院した場合は支給が停止</span>されます。</p><div class="note-box">三鷹市では介護者向けの相談支援や、介護者サロンの運営も行っています。介護の悩みは一人で抱え込まず、地域包括支援センターや市の窓口にご相談ください。介護保険サービスの利用方法についてもアドバイスが受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mitaka-rainwater-tank',
    title: '三鷹市 雨水タンク設置補助金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '東京都',
    tags: ['三鷹市', '雨水タンク', '補助金'],
    eligibility: '三鷹市内の住宅に雨水タンクを設置する市民',
    applicationPeriod: '4月〜翌年2月（予算に達し次第終了）',
    description: '三鷹市が実施する雨水タンク設置補助金です。雨水の有効利用と浸水被害の軽減を目的に、設置費用の一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三鷹市 雨水タンク設置補助金は、<span class="marker">住宅の敷地内に雨水タンクを設置する費用</span>の一部を補助する制度です。</p><p>三鷹市は野川や仙川などの中小河川が流れ、近年のゲリラ豪雨による浸水リスクが懸念されています。雨水タンクの設置は下水道への雨水流出を抑制するとともに、庭の散水や災害時の生活用水確保にも役立ちます。</p><p><span class="marker-green">購入費と設置費の2分の1（上限3万円）</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>三鷹市に住民登録があること</p><p>市内の住宅（戸建て・集合住宅の専有部分）に設置すること</p><p>容量80リットル以上の雨水タンクであること</p><p>設置前に申請すること</p></div><p>三鷹市都市整備部水再生課に申請書と見積書を提出します。<strong>交付決定後に購入・設置</strong>してください。</p><p><span class="marker">設置完了後は写真付きの完了報告書を提出</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>購入費・設置費の合計の2分の1（上限3万円）</strong>です。1住宅につき1基が対象です。</p><div class="highlight-box">三鷹市では雨水タンクの設置に加え、浸透ますの設置補助も行っています。雨水の地下浸透は地下水の涵養にも効果があり、武蔵野台地の湧水を守ることにもつながります。庭のある住宅にお住まいの方は、ぜひご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
