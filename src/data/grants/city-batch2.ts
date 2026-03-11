import { Grant } from '@/lib/types';

export const cityGrantsBatch2: Grant[] = [
  // ────────────────────────────────────────────────
  // 新潟市（新潟県）3件: childcare, employment, housing
  // ────────────────────────────────────────────────
  {
    slug: 'niigata-city-child-medical',
    title: '新潟市 子ども医療費助成制度',
    organization: '新潟市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '新潟県',
    tags: ['新潟市', '子ども医療費', '助成金'],
    eligibility: '新潟市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '新潟市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>日本海側最大の政令指定都市である新潟市では、子育て世帯の定住促進を重要政策として掲げており、医療費助成はその中核となる施策です。通院・入院・調剤のいずれも対象で、<span class="marker-green">所得制限なし</span>で利用できます。</p><p>かつては中学卒業までが対象でしたが、段階的に対象年齢が拡大され、現在は高校卒業相当まで助成されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>新潟市に住民登録のある18歳までの子どもの保護者が申請できます。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>お住まいの区の区役所区民生活課で手続きします。出生届や転入届と同時に申請するのが便利です。<strong>「子ども医療費受給者証」</strong>が交付されたら、県内の医療機関で保険証と一緒に提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。新潟県内の医療機関であれば、窓口負担なしで受診可能です。</p><p><span class="marker">県外の医療機関を受診した場合は償還払い</span>となります。領収書を保管し、区役所で払い戻し手続きを行ってください。申請期限は受診月の翌月から1年以内です。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。学校でのケガで日本スポーツ振興センターの給付対象となる場合も対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'niigata-city-startup-support',
    title: '新潟市 創業支援補助金',
    organization: '新潟市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '新潟県',
    tags: ['新潟市', '創業支援', '補助金'],
    eligibility: '新潟市内で新たに創業する方または創業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年5月〜7月頃（年1回）',
    description: '新潟市が実施する創業支援補助金です。市内での新規創業にかかる経費の一部を最大100万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 創業支援補助金は、<span class="marker">新潟市内で新たにビジネスを始める方を資金面で支援</span>する制度です。食の都・新潟の強みを活かした飲食業や農業関連ビジネスはもちろん、IT・サービス業など幅広い業種が対象です。</p><p>補助対象となる経費は、店舗・事務所の賃借料、設備購入費、広告宣伝費、ホームページ制作費などです。補助率は対象経費の1/2で、<strong>上限100万円</strong>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>新潟市内で創業予定、または創業後1年未満であること</p><p>新潟市が認定する創業支援等事業を受講していること</p><p>実現性のある事業計画書を提出できること</p></div><p>新潟市経済部産業政策課に申請書と事業計画書を提出します。書類審査と面接審査を経て採択が決定します。</p><p><span class="marker-green">新潟IPC財団や新潟商工会議所の創業相談を事前に利用しておく</span>と、事業計画の精度が上がり採択の可能性が高まります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、<strong>上限100万円</strong>です。UIJターンで新潟市に移住して創業する場合は、さらに加算が受けられるケースもあります。</p><p><span class="marker">補助金は後払い方式</span>です。事業完了後に実績報告書を提出し、審査を経て補助金が振り込まれます。領収書等の証拠書類はすべて保管してください。</p><div class="highlight-box">新潟市は移住支援金との組み合わせも可能です。東京圏からの移住を検討している方は、両方の制度を活用すると初期費用を大幅に抑えられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'niigata-city-housing-reform',
    title: '新潟市 住宅リフォーム補助金',
    organization: '新潟市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '新潟県',
    tags: ['新潟市', '住宅リフォーム', '補助金'],
    eligibility: '新潟市内に所在する住宅の所有者で、市内業者によるリフォーム工事を行う方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '新潟市が実施する住宅リフォーム補助金です。市内業者を利用した住宅改修工事に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟市 住宅リフォーム補助金は、<span class="marker">市内業者を利用した住宅の改修工事費用の一部を補助</span>する制度です。雪国・新潟では屋根や外壁の劣化が早いため、リフォーム需要が特に高い地域です。</p><p>断熱改修、バリアフリー工事、屋根・外壁の修繕、水回りの改修など、幅広い工事が対象です。補助率は対象工事費の10%で、<strong>上限30万円</strong>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>新潟市内に所在する自己所有の住宅であること</p><p>市内に本店を有する施工業者が工事を行うこと</p><p>対象工事費が30万円以上であること</p><p>工事着手前に申請すること</p></div><p>新潟市建築部住環境政策課に申請書を提出します。見積書、住宅の図面、工事内容がわかる資料を添付してください。</p><p><span class="marker-green">必ず工事着手前に申請が必要</span>です。交付決定を受けてから工事に着手してください。申請から決定まで約3週間かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限は30万円</strong>です。子育て世帯や三世代同居世帯は補助率が15%に引き上げられる優遇があります。</p><p><span class="marker">毎年予算に達し次第、受付が終了</span>します。例年、申請開始から数か月で予算上限に達するため、早めの申請がおすすめです。</p><div class="note-box">新築や増築は対象外です。また、過去にこの補助金を受けた住宅は、一定期間再申請できない場合があります。詳細は市のホームページで確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 静岡市（静岡県）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'shizuoka-city-child-medical',
    title: '静岡市 こども医療費助成制度',
    organization: '静岡市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['静岡市', '子ども医療費', '助成金'],
    eligibility: '静岡市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '静岡市が実施するこども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>静岡市は温暖な気候と豊かな自然に恵まれた政令指定都市で、駿河湾の海の幸や富士山の景観で知られています。子育て世帯の定住を促進するため、医療費助成をはじめとした子育て支援策を積極的に展開しています。</p><p>通院・入院・調剤のすべてが対象で、<span class="marker-green">所得制限なし</span>で利用可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>静岡市に住民登録のある18歳までの子どもの保護者が申請できます。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>印鑑</p></div><p>各区の区役所子育て支援課で申請します。出生届・転入届と同時に手続きが可能です。申請後、<strong>「こども医療費受給者証」</strong>が交付されます。県内の医療機関で保険証と一緒に提示して利用します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1回あたり500円の自己負担</strong>で受診でき、残りの自己負担分は市が助成します。入院については自己負担なしで助成されます。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担で支払い、後日払い戻し申請</span>を行ってください。領収書の保管をお忘れなく。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、入院時の食事代など）は助成対象外です。ひとり親家庭の方は別途「ひとり親家庭医療費助成」も利用できる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shizuoka-city-housing-seismic',
    title: '静岡市 木造住宅耐震補強助成事業',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['静岡市', '耐震補強', '住宅補助'],
    eligibility: '静岡市内の昭和56年5月以前に建築された木造住宅の所有者',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '静岡市が実施する木造住宅耐震補強助成事業です。旧耐震基準の木造住宅の補強工事に最大100万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 木造住宅耐震補強助成事業は、<span class="marker">昭和56年5月以前に建築された旧耐震基準の木造住宅</span>を対象に、耐震補強工事費の一部を助成する制度です。</p><p>静岡県は南海トラフ巨大地震の想定震源域に位置しており、住宅の耐震化は命を守る最重要課題です。静岡市では全国的にも先進的な耐震化施策を推進しており、<strong>補助上限100万円</strong>と充実した助成内容を用意しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>静岡市内に所在すること</p><p>無料耐震診断で「倒壊する可能性がある」と判定されたもの</p><p>補強後の評点が1.0以上になる工事計画であること</p></div><p>まず静岡市の<span class="marker-green">無料耐震診断（わが家の専門家診断）</span>を受けてください。診断結果をもとに補強計画を作成し、静岡市建築指導課に申請書を提出します。</p><p>補強設計と工事を一括で申請することもできます。工事着手前に必ず交付決定を受けてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は補強工事費の<strong>最大100万円</strong>です。高齢者世帯や障害者世帯など要配慮者がいる場合は、さらに上乗せされるケースもあります。</p><p><span class="marker">静岡市では耐震診断が無料</span>で実施されています。まだ診断を受けていない方は、まず診断から始めましょう。市の窓口に連絡すれば診断士が自宅を訪問してくれます。</p><div class="highlight-box">静岡市では耐震シェルターや防災ベッドの設置にも補助制度があります。全体改修が費用的に難しい場合は、部分的な対策も検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shizuoka-city-fertility-treatment',
    title: '静岡市 不妊治療費助成制度',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '静岡県',
    tags: ['静岡市', '不妊治療', '医療費助成'],
    eligibility: '静岡市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了後60日以内に申請）',
    description: '静岡市が独自に実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分を市独自に助成</span>する制度です。2022年4月から不妊治療に保険が適用されましたが、それでも高額な費用がかかるケースがあります。</p><p>静岡市ではこうした経済的負担を軽減するため、1回の治療あたり<strong>最大10万円</strong>の助成を行っています。体外受精や顕微授精だけでなく、人工授精も助成対象に含まれます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦の一方または双方が静岡市に住所を有すること</p><p>保険適用の不妊治療を受けていること</p><p>治療終了日から60日以内に申請すること</p></div><p>静岡市各区の子育て支援課で申請します。医療機関が発行する治療証明書、領収書、健康保険証が必要です。</p><p><span class="marker-green">事実婚のカップルも対象</span>です。申請期限を過ぎると助成が受けられませんので、治療が一区切りついたら早めに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大10万円</strong>が助成されます。保険適用治療の自己負担分（3割負担）が対象で、保険適用外の費用は含まれません。</p><p><span class="marker">年度内の助成回数に上限はありません</span>が、1治療ごとに申請が必要です。</p><div class="highlight-box">静岡市では不妊に関する専門相談窓口「不妊・不育相談」も開設されています。費用面だけでなく、精神的なサポートも受けられますので、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 浜松市（静岡県）3件: childcare, employment, housing
  // ────────────────────────────────────────────────
  {
    slug: 'hamamatsu-child-medical',
    title: '浜松市 こども医療費助成制度',
    organization: '浜松市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['浜松市', '子ども医療費', '助成金'],
    eligibility: '浜松市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '浜松市が実施するこども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>浜松市は「やらまいか精神」で知られるものづくりの都市で、楽器やオートバイなどの産業が盛んです。子育て世帯にとっても住みやすいまちを目指し、医療費助成制度を充実させています。通院・入院・調剤のすべてが対象です。</p><p><span class="marker-green">所得制限なし</span>で、浜松市に住むすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>浜松市に住民登録のある18歳までの子どもの保護者が申請できます。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>各区の区役所社会福祉課で申請します。出生届・転入届と同時に手続きが可能です。申請後に<strong>「こども医療費受給者証」</strong>が交付されます。県内の医療機関で保険証と一緒に窓口に提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1回あたり500円の自己負担</strong>で受診でき、入院は自己負担なしです。調剤についても自己負担はありません。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担で支払い後に償還払い</span>の手続きが必要です。領収書を保管し、区役所で申請してください。</p><div class="note-box">保険適用外の費用（予防接種、健康診断、差額ベッド代など）は助成対象外です。入院時の食事代も自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'hamamatsu-startup-support',
    title: '浜松市 創業支援補助金',
    organization: '浜松市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '静岡県',
    tags: ['浜松市', '創業支援', '補助金'],
    eligibility: '浜松市内で新たに創業する方または創業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年4月〜8月頃（年1回）',
    description: '浜松市が実施する創業支援補助金です。市内での新規創業にかかる経費の一部を最大50万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 創業支援補助金は、<span class="marker">浜松市内で新たにビジネスを立ち上げる方</span>を経済的に支援する制度です。「やらまいか精神」の通り、チャレンジを応援する風土がある浜松市ならではの支援制度です。</p><p>補助対象経費は、店舗・事務所の賃借料、設備購入費、広告宣伝費、許認可取得費用などです。補助率は対象経費の1/2で、<strong>上限50万円</strong>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>浜松市内で創業予定、または創業後1年未満</p><p>浜松市の特定創業支援等事業（セミナー等）を受講済み</p><p>事業計画書の提出が必要</p></div><p>浜松市産業部産業振興課に申請書類を提出します。書類審査とプレゼン審査を経て、採択が決定されます。</p><p><span class="marker-green">浜松商工会議所や浜松イノベーションキューブ（HI-Cube）の創業相談を事前に利用</span>することが推奨されています。事業計画のブラッシュアップにもつながります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、<strong>上限50万円</strong>です。製造業やIT関連での創業にはさらに優遇がある場合もあります。</p><p><span class="marker">補助金は後払い方式</span>で、事業完了報告書を提出した後に振り込まれます。経費の支出を証明する領収書や請求書はすべて保管してください。</p><div class="highlight-box">浜松市はスタートアップ支援に積極的で、コワーキングスペースやインキュベーション施設も充実しています。補助金と合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'hamamatsu-housing-eco-reform',
    title: '浜松市 省エネ住宅改修補助金',
    organization: '浜松市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['浜松市', '省エネ改修', '住宅リフォーム'],
    eligibility: '浜松市内の住宅の所有者で、省エネリフォームを行う方',
    applicationPeriod: '毎年5月〜翌年1月頃（予算に達し次第終了）',
    description: '浜松市が実施する省エネ住宅改修補助金です。住宅の断熱改修や省エネ設備導入に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>浜松市 省エネ住宅改修補助金は、<span class="marker">住宅の省エネルギー化を推進するため、断熱改修や省エネ設備の導入を支援</span>する制度です。</p><p>浜松市は日照時間が長く太陽光発電の適地としても知られていますが、夏の暑さも厳しいため、断熱改修による冷暖房効率の向上は光熱費削減に直結します。窓の断熱、外壁・屋根の断熱材追加、高効率エアコンの導入などが対象で、<strong>最大30万円</strong>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>窓の断熱改修（内窓設置・複層ガラス）</p><p>外壁・屋根・天井の断熱改修</p><p>高効率給湯器（エコキュート等）への交換</p><p>HEMS（家庭用エネルギー管理システム）の導入</p></div><p>浜松市環境部環境政策課に申請書を提出します。<span class="marker-green">工事着手前に申請が必須</span>です。施工業者の見積書や工事計画書を添付してください。</p><p>交付決定後に工事に着手し、完了後に実績報告書を提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事内容に応じて設定されており、<strong>上限は30万円</strong>です。太陽光発電システムの設置と組み合わせると、さらに別枠の補助を受けられる場合があります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となりますので、早めの申請をおすすめします。例年夏頃には予算が残り少なくなるケースが多いです。</p><div class="note-box">国の住宅省エネ補助金との併用が可能な場合があります。同じ工事に対して二重に補助を受けることはできませんが、異なる工事であれば組み合わせが可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 名古屋市（愛知県）3件: childcare, education, employment
  // ────────────────────────────────────────────────
  {
    slug: 'nagoya-child-medical',
    title: '名古屋市 子ども医療費助成制度',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['名古屋市', '子ども医療費', '助成金'],
    eligibility: '名古屋市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '名古屋市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>中部地方最大の都市・名古屋市は約230万人の人口を擁し、子育て支援にも力を入れています。この制度により通院・入院・調剤の自己負担分が助成され、子育て世帯の経済的負担を大きく軽減しています。</p><p><span class="marker-green">所得制限はなく、名古屋市在住の全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>名古屋市に住民登録のある18歳までの子どもの保護者が申請対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>申請書（区役所に備え付け）</p></div><p>お住まいの区の区役所保険年金課で手続きします。出生届や転入届の提出と同時に申請できます。<strong>「子ども医療証」</strong>が交付されたら、愛知県内の医療機関で保険証と一緒に提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関なら窓口負担はありません。</p><div class="highlight-box">名古屋市は全国の政令指定都市の中でも子ども医療費助成が手厚い自治体の一つです。18歳まで所得制限なしで助成される点は大きなメリットです。</div><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担で支払い後に区役所で払い戻し手続き</span>を行います。領収書は必ず保管してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'nagoya-education-support',
    title: '名古屋市 就学援助制度',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '愛知県',
    tags: ['名古屋市', '就学援助', '教育支援'],
    eligibility: '名古屋市立の小中学校に通う児童生徒の保護者で、経済的に困難な方',
    targetIncome: '生活保護基準の約1.5倍程度',
    applicationPeriod: '毎年4月（年度途中の申請も可能）',
    description: '名古屋市が実施する就学援助制度です。経済的に困難な家庭の小中学生の学用品費や給食費などが支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 就学援助制度は、<span class="marker">経済的な理由で就学に困難を抱える児童生徒の保護者</span>に対し、学校生活に必要な費用を支給する制度です。</p><p>学用品費、学校給食費、修学旅行費、通学費などが支給の対象となります。名古屋市では所得基準を<strong>生活保護基準の約1.5倍</strong>に設定しており、比較的広い範囲の世帯をカバーしています。義務教育に伴う家庭の経済的負担を軽減し、すべての子どもが安心して学べる環境を整えることを目的としています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護）</p><p>生活保護基準の約1.5倍以下の所得の世帯（準要保護）</p><p>児童扶養手当を受給している世帯</p><p>その他、経済的に困難と認められる世帯</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要事項を記入し、学校へ提出します。</p><p><span class="marker-green">年度途中での申請も可能</span>です。失業や離婚など家計状況が変わった場合は、すぐに学校へ相談してください。認定された月の翌月分から支給が開始されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>主な支給項目と金額は以下の通りです。</p><div class="summary-box" data-title="主な支給内容"><p>学用品費：年額約11,000〜22,000円</p><p>学校給食費：実費</p><p>修学旅行費：実費（上限あり）</p><p>新入学用品費：約50,000〜60,000円（入学前支給も可）</p></div><p><span class="marker">毎年度認定審査が行われるため、継続して利用する場合は毎年申請が必要</span>です。所得状況は前年の課税情報に基づいて判定されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'nagoya-sme-equipment-support',
    title: '名古屋市 中小企業設備投資補助金',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '最大300万円',
    maxAmountNum: 300,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['名古屋市', '設備投資', '中小企業支援'],
    eligibility: '名古屋市内に事業所を有する中小企業者',
    targetOccupation: '中小企業経営者',
    applicationPeriod: '毎年5月〜9月頃（年1回）',
    description: '名古屋市が実施する中小企業設備投資補助金です。生産性向上のための設備導入に最大300万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>名古屋市 中小企業設備投資補助金は、<span class="marker">市内中小企業の生産性向上を目的とした設備投資を支援</span>する制度です。日本を代表するものづくりの拠点・名古屋ならではの手厚い産業支援策です。</p><p>製造設備の更新、IT機器・ソフトウェアの導入、省エネ設備への入替えなど、事業の効率化や競争力強化に資する設備投資が対象です。補助率は対象経費の1/3で、<strong>上限300万円</strong>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>名古屋市内に主たる事業所を有する中小企業者</p><p>対象設備の導入額が100万円以上</p><p>導入により生産性向上が見込まれること</p><p>市税の滞納がないこと</p></div><p>名古屋市経済局産業労働部に申請書と事業計画書を提出します。書類審査を経て採択が決定されます。</p><p><span class="marker-green">名古屋市新事業支援センターの経営相談</span>を事前に利用すると、事業計画の策定支援を受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の1/3で、<strong>上限300万円</strong>です。デジタル化やDXに関連する設備投資には補助率が1/2に引き上げられる場合もあります。</p><p><span class="marker">交付決定前に設備を発注・導入した場合は対象外</span>となります。必ず申請→交付決定→発注の順で進めてください。</p><div class="note-box">補助金は後払い方式です。設備導入後に実績報告書を提出し、確認を経て補助金が振り込まれます。中古設備は原則対象外ですので、新品の導入を計画してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 京都市（京都府）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'kyoto-city-child-medical',
    title: '京都市 子ども医療費支給制度',
    organization: '京都市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '京都府',
    tags: ['京都市', '子ども医療費', '助成金'],
    eligibility: '京都市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '京都市が実施する子ども医療費支給制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 子ども医療費支給制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもの保険診療にかかる自己負担分を支給する制度です。</p><p>千年の都・京都市は約140万人が暮らす政令指定都市で、観光都市としての側面だけでなく、子育て支援にも力を入れています。通院・入院・調剤のすべてが対象で、子育て家庭の医療費負担を軽減しています。</p><p><span class="marker-green">3歳未満の子どもには所得制限がなく</span>、3歳以上は一定の所得基準が設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>京都市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>所得証明書（転入の場合）</p></div><p>お住まいの区の区役所・支所の保健福祉センターで申請します。出生届や転入届と同時に手続きが可能です。<strong>「子ども医療費受給者証」</strong>が交付されたら、府内の医療機関で保険証と一緒に提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>3歳未満は<strong>自己負担なし（全額助成）</strong>、3歳以上は通院1回あたり<strong>200円の自己負担</strong>で受診できます。入院は年齢を問わず自己負担なしです。</p><p><span class="marker">京都府外の医療機関を受診した場合は償還払い</span>となります。領収書を保管し、区役所等で払い戻し手続きを行ってください。</p><div class="note-box">3歳以上の子どもについては所得制限があり、保護者の所得が一定額を超える場合は対象外となります。所得基準については区役所に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kyoto-city-machiya-reform',
    title: '京都市 京町家改修助成金',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'housing',
    prefecture: '京都府',
    tags: ['京都市', '京町家', '改修助成'],
    eligibility: '京都市内の京町家の所有者で、保全・活用のための改修を行う方',
    applicationPeriod: '毎年4月〜6月頃（年1回）',
    description: '京都市が実施する京町家改修助成金です。京都の伝統的な町家の保全・活用のための改修工事に最大500万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 京町家改修助成金は、<span class="marker">京都の歴史的景観を構成する京町家の保全・活用を支援</span>する独自の制度です。京町家は京都の文化的資産であり、その数は減少の一途をたどっています。</p><p>この制度では、外観の修景（格子・土壁の復元など）、構造補強、設備の近代化といった改修工事に対して<strong>最大500万円</strong>を助成します。住居としての利用はもちろん、店舗やゲストハウスへの活用も対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>京都市が定める京町家に該当する建物であること</p><p>建物の所有者または所有者の同意を得た使用者</p><p>改修後も京町家としての外観を維持すること</p><p>工事着手前に申請すること</p></div><p>京都市都市計画局まち再生・創造推進室に申請書と改修計画を提出します。専門家委員会での審査を経て採択が決定されます。</p><p><span class="marker-green">京町家の認定を受けていることが前提</span>です。認定の有無がわからない場合は、まず市の窓口に相談してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は改修内容に応じて異なり、<strong>外観修景で最大200万円、構造補強で最大300万円、合計で最大500万円</strong>まで助成されます。</p><p><span class="marker">助成金の交付には条件があり、改修後10年間は京町家としての外観を維持する義務</span>が生じます。外観を大幅に変更する場合は返還を求められることがあります。</p><div class="highlight-box">京都市では京町家の改修に関する無料相談窓口を設けています。建物の状態や改修の進め方に不安がある方は、まず相談窓口を利用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kyoto-city-scholarship',
    title: '京都市 給付型奨学金制度',
    organization: '京都市',
    type: 'local',
    maxAmount: '年額最大20万円',
    maxAmountNum: 20,
    category: 'education',
    prefecture: '京都府',
    tags: ['京都市', '奨学金', '教育支援'],
    eligibility: '京都市に住所を有する高校生で、経済的な支援が必要な方',
    targetIncome: '住民税非課税世帯またはそれに準ずる世帯',
    applicationPeriod: '毎年4月〜5月頃（年1回）',
    description: '京都市が実施する給付型奨学金制度です。経済的に困難な高校生に対し、返済不要の奨学金を年額最大20万円支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生を対象に、返済不要の奨学金を支給</span>する制度です。</p><p>高校は義務教育ではないため、授業料以外にも教科書代、通学費、制服代など多くの費用がかかります。京都市ではこうした費用負担を軽減するため、市独自の給付型奨学金を設けています。<strong>年額最大20万円</strong>が返済不要で支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>京都市に住所を有する高校生（全日制・定時制・通信制）</p><p>住民税非課税世帯またはそれに準ずる世帯</p><p>学業に真剣に取り組んでいること</p></div><p>毎年4月〜5月に募集が行われます。在学する高校を通じて申請書を提出します。京都市教育委員会で審査が行われ、採否が通知されます。</p><p><span class="marker-green">私立高校に通う生徒も対象</span>です。国の高等学校等就学支援金や京都府の授業料減免制度と併用することも可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は世帯の経済状況に応じて決まり、<strong>年額最大20万円</strong>です。年2回（前期・後期）に分けて振り込まれます。</p><p><span class="marker">毎年度申請が必要</span>で、前年度に受給していても自動的に継続されるわけではありません。成績要件は厳しくありませんが、出席日数が著しく少ない場合は支給停止となることがあります。</p><div class="note-box">大学進学を見据えた奨学金（JASSO等）とは別制度です。高校在学中の費用を支援する制度ですので、大学の学費には充てられません。</div>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 大阪市（大阪府）3件: childcare, medical, employment
  // ────────────────────────────────────────────────
  {
    slug: 'osaka-city-child-medical',
    title: '大阪市 こども医療費助成制度',
    organization: '大阪市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['大阪市', '子ども医療費', '助成金'],
    eligibility: '大阪市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大阪市が実施するこども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>西日本最大の都市・大阪市は約275万人が暮らす政令指定都市です。子育て世帯への支援を重点施策として位置づけ、医療費助成の対象年齢を段階的に拡大してきました。通院・入院・調剤のすべてが対象です。</p><p><span class="marker-green">所得制限なし</span>で、大阪市に住む全対象世帯が利用可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大阪市に住民登録のある18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請方法"><p>お住まいの区の区役所保険年金課で申請</p><p>子どもの健康保険証を持参</p><p>出生届・転入届と同時に手続き可能</p></div><p>申請後、<strong>「こども医療証」</strong>が交付されます。大阪府内の医療機関で保険証と一緒に提示することで、窓口での自己負担が軽減されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1医療機関あたり月額最大500円の自己負担</strong>で受診でき、それ以上の自己負担分は市が助成します。入院は自己負担なしです。</p><p><span class="marker">大阪府外の医療機関を受診した場合は、一旦全額を支払い後に償還払い</span>の手続きが必要です。領収書を持って区役所で手続きしてください。</p><div class="highlight-box">大阪市では同一月に複数の医療機関を受診した場合でも、1医療機関あたり500円が上限です。頻繁に通院が必要なお子さんのいる家庭にとって大きな支えとなります。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'osaka-city-senior-medical',
    title: '大阪市 重度障害者医療費助成制度',
    organization: '大阪市',
    type: 'local',
    maxAmount: '医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['大阪市', '障害者医療', '助成金'],
    eligibility: '大阪市に住所を有する重度の身体障害・知的障害・精神障害のある方',
    applicationPeriod: '通年',
    description: '大阪市が実施する重度障害者医療費助成制度です。重度障害のある方の医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 重度障害者医療費助成制度は、<span class="marker">重度の障害がある方の医療費自己負担分を助成</span>する制度です。身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級のいずれかをお持ちの方が対象です。</p><p>大阪市では障害のある方が安心して医療を受けられるよう、保険診療の自己負担分を公費で助成しています。通院・入院・調剤のすべてが対象で、経済的な不安なく必要な医療にアクセスできます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級または2級をお持ちの方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p><p>特定医療費（指定難病）受給者証をお持ちの方の一部</p></div><p>お住まいの区の区役所保健福祉課で申請します。障害者手帳と健康保険証を持参してください。</p><p>申請後、<span class="marker-green">「重度障害者医療証」</span>が交付されます。府内の医療機関で保険証と一緒に提示して利用します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1医療機関あたり<strong>1日最大500円（月2日限度）</strong>の自己負担で受診できます。3日目以降の同一医療機関での受診は自己負担なしです。</p><p><span class="marker">大阪府外の医療機関を受診した場合は償還払い</span>となります。領収書を保管し、区役所で払い戻し手続きを行ってください。</p><div class="note-box">所得制限があります。本人や配偶者・扶養義務者の所得が一定額を超える場合は対象外となることがあります。詳細は区役所にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'osaka-city-startup-support',
    title: '大阪市 スタートアップ支援補助金',
    organization: '大阪市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['大阪市', 'スタートアップ', '創業支援'],
    eligibility: '大阪市内で新たに創業する方または創業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年4月〜7月頃（年1回）',
    description: '大阪市が実施するスタートアップ支援補助金です。市内での新規創業にかかる経費の一部を最大100万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪市 スタートアップ支援補助金は、<span class="marker">大阪市内で新たにビジネスを立ち上げる起業家を支援</span>する制度です。商人の街・大阪は古くからビジネスの中心地であり、新しいチャレンジを応援する文化が根付いています。</p><p>補助対象経費には、店舗・オフィスの賃借料、設備購入費、広告宣伝費、ウェブサイト制作費、専門家への謝金などが含まれます。補助率は対象経費の1/2で、<strong>上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大阪市内で創業予定、または創業後1年未満</p><p>大阪市の認定する創業支援等事業を受講済み</p><p>事業の実現性が見込まれる事業計画書を提出</p></div><p>大阪市経済戦略局に申請書と事業計画書を提出します。書類審査と面接審査を経て採択が決定されます。</p><p><span class="marker-green">大阪産業創造館の創業相談や各種セミナーの受講</span>が採択の有力な要件となります。計画的に準備を進めましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の1/2で、<strong>上限100万円</strong>です。女性・若者（39歳以下）・シニア（60歳以上）の起業には加算がある場合もあります。</p><p><span class="marker">補助金は後払い方式</span>です。事業完了後に実績報告書と証拠書類を提出し、確認を経て補助金が振り込まれます。</p><div class="highlight-box">大阪市は大阪産業創造館を中心に、インキュベーション施設やメンタリングプログラムなど手厚い創業支援を展開しています。補助金だけでなく総合的な支援を活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 堺市（大阪府）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'sakai-child-medical',
    title: '堺市 子ども医療費助成制度',
    organization: '堺市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['堺市', '子ども医療費', '助成金'],
    eligibility: '堺市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '堺市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>堺市は大阪府で唯一大阪市以外の政令指定都市で、世界遺産の百舌鳥古墳群で知られる歴史ある都市です。子育て支援にも積極的に取り組んでおり、この医療費助成制度は多くの家庭に利用されています。</p><p>通院・入院・調剤が対象で、<span class="marker-green">所得制限なし</span>で利用可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>堺市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>印鑑</p></div><p>各区の区役所保険年金課で申請します。出生届・転入届と同時に手続きが可能です。申請後、<strong>「子ども医療証」</strong>が交付されます。大阪府内の医療機関で保険証と一緒に提示して利用します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1医療機関あたり月額最大500円の自己負担</strong>で受診でき、入院は自己負担なしです。調剤についても自己負担はありません。</p><p><span class="marker">大阪府外の医療機関を受診した場合は、一旦全額を支払い後に償還払い</span>の手続きが必要です。領収書を持って区役所で申請してください。</p><div class="note-box">保険適用外の費用（予防接種、健康診断、差額ベッド代など）は助成対象外です。学校でのケガでスポーツ振興センターの給付が受けられる場合も対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sakai-housing-reform',
    title: '堺市 住宅リフォーム補助金',
    organization: '堺市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['堺市', '住宅リフォーム', '補助金'],
    eligibility: '堺市内の住宅の所有者で、市内業者によるリフォーム工事を行う方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '堺市が実施する住宅リフォーム補助金です。市内業者を利用した住宅改修工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 住宅リフォーム補助金は、<span class="marker">市内業者を利用した住宅の改修・修繕工事に対して費用の一部を補助</span>する制度です。地域経済の活性化と住環境の向上を同時に図ることを目的としています。</p><p>バリアフリー改修、省エネ改修、外壁・屋根の修繕、水回りの改修など幅広い工事が対象です。補助率は対象工事費の10%で、<strong>上限20万円</strong>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>堺市内に所在する自己所有の住宅であること</p><p>堺市内に本店を有する施工業者が工事を行うこと</p><p>対象工事費が20万円以上であること</p><p>工事着手前に申請すること</p></div><p>堺市建築都市局住宅政策課に申請書を提出します。見積書と工事計画書を添付してください。</p><p><span class="marker-green">必ず工事着手前に申請が必要</span>です。交付決定通知を受け取ってから工事に着手してください。申請から決定まで約2〜3週間かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限は20万円</strong>です。子育て世帯や高齢者世帯は補助率が引き上げられる優遇措置がある場合もあります。</p><p><span class="marker">予算に達し次第、受付が終了</span>します。例年、受付開始から数か月で予算枠に達することが多いため、早めの申請をおすすめします。</p><div class="highlight-box">耐震改修工事を同時に行う場合は、堺市の耐震改修補助金との併用も可能です。築年数の古い住宅にお住まいの方は、あわせて検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sakai-senior-support',
    title: '堺市 高齢者外出支援制度',
    organization: '堺市',
    type: 'local',
    maxAmount: '年間最大12,000円分',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '大阪府',
    tags: ['堺市', '高齢者支援', '外出支援'],
    eligibility: '堺市に住所を有する65歳以上の方',
    applicationPeriod: '通年（毎年度更新）',
    description: '堺市が実施する高齢者外出支援制度です。65歳以上の方にバスや電車で使える乗車券を年間最大12,000円分支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>堺市 高齢者外出支援制度は、<span class="marker">65歳以上の市民の外出を支援するため、公共交通機関の乗車券を支給</span>する制度です。</p><p>高齢者の社会参加や健康維持には外出機会の確保が重要です。堺市ではバスや電車で利用できる乗車券を支給することで、買い物・通院・趣味活動など日常的な外出をサポートしています。<strong>年間最大12,000円分</strong>の乗車券が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>堺市に住民登録のある65歳以上の方</p><p>介護施設等に入所していないこと</p><p>所得制限あり（市民税非課税世帯等）</p></div><p>お住まいの区の区役所地域福祉課で申請します。本人確認書類と印鑑を持参してください。</p><p><span class="marker-green">毎年度申請が必要</span>です。対象となる方には区役所から案内が届く場合もありますが、届かない場合は自分から申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>年間最大12,000円分</strong>の交通系ICカードへのチャージまたは乗車券です。利用できる交通機関は南海バス・南海電鉄・阪堺電車などです。</p><p><span class="marker">所得に応じて支給額が異なります</span>。市民税非課税世帯の方は満額支給、課税世帯の方は減額となる場合があります。</p><div class="note-box">タクシーの利用は対象外です。また、年度途中で申請した場合は月割りで支給額が計算されます。4月の早い時期に申請するのがお得です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/',
    publishedAt: '2026-03-11',
  },
];
