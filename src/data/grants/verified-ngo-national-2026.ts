import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedNgoNationalGrants2026: Grant[] = [
  {
    slug: 'jka-hojo-jigyo',
    title: 'JKA 2026年度補助事業（受付終了）',
    organization: '公益財団法人JKA',
    type: 'ngo',
    maxAmount: '区分別。福祉機器は最大500万円、福祉車両は最大420万円、施設建築等は最大1億8,000万円等',
    maxAmountNum: 18000,
    category: 'nursing',
    prefecture: '全国',
    tags: ['JKA補助', '社会福祉', '受付終了'],
    eligibility: '社会福祉法人、NPO法人、公益法人等が、JKAの補助方針に該当する公益事業・福祉事業を行う場合に対象です。',
    applicationPeriod: '2026年度第2回募集は2026年6月19日15:00で締切済み',
    deadlineDate: '2026-06-19',
    description: '競輪・オートレースの売上を原資とするJKAの補助事業です。2026年度第2回募集は締切済みのため、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>JKA補助事業は、競輪とオートレースの売上を社会へ還元するため、公益事業、社会福祉、医療、研究、車両・機器整備等を支援する補助制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>2026年度補助方針では、区分により福祉機器は最大500万円、福祉車両は最大420万円、施設建築等は最大1億8,000万円などの上限が案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2026年度第2回募集は2026年6月19日15時で受付終了しています。次回募集の有無と対象区分は公式サイトで確認してください。</p>'
      }
    ],
    officialUrl: 'https://hojo.keirin-autorace.or.jp/',
    sourceName: 'JKA補助事業 公式サイト',
    sourceUrls: [
      'https://hojo.keirin-autorace.or.jp/',
      'https://hojo.keirin-autorace.or.jp/shinsei/shikata/koji/2026/pdf/hojohoushin.pdf'
    ],
    sourceNote: '公式サイトと2026年度補助方針で補助区分、上限額、2026年度第2回募集の2026年6月19日締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyota-foundation-community-program',
    title: 'トヨタ財団 国内助成プログラム（2026年度募集終了）',
    organization: '公益財団法人トヨタ財団',
    type: 'ngo',
    maxAmount: 'カテゴリー別。上限1,500万円または上限600万円',
    maxAmountNum: 1500,
    category: 'living',
    prefecture: '全国',
    tags: ['地域課題', '国内助成', '募集終了'],
    eligibility: '地域や社会の課題解決に取り組む団体、研究者、市民活動グループ等が対象です。カテゴリーごとに申請要件が異なります。',
    applicationPeriod: '2026年度募集は2026年6月3日15:00で締切済み',
    deadlineDate: '2026-06-03',
    description: 'トヨタ財団の国内助成プログラムです。旧称「地域社会プログラム」として掲載されていたデータを現行名称に改め、2026年度募集終了として更新しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>国内助成プログラムは、地域や社会の課題に対して、多様な主体が協働しながら取り組む実践や研究を支援する助成です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式ページではカテゴリーにより、1件あたり上限1,500万円、または上限600万円の枠が案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2026年度募集は2026年6月3日15時で締切済みです。次年度募集の時期と要件は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.toyotafound.or.jp/grant/community/',
    sourceName: 'トヨタ財団 国内助成プログラム',
    sourceUrls: [
      'https://www.toyotafound.or.jp/grant/community/',
      'https://www.toyotafound.or.jp/service/50th/history/mdl2008_03.html'
    ],
    sourceNote: '公式ページで現行名称、カテゴリー別上限額、2026年6月3日15時の締切を確認。旧名称の地域社会プログラムは財団沿革で確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yahoo-fund-disaster-relief',
    title: 'LINEヤフー基金 能登半島地震 復旧・復興支援助成プログラム［2回目］（募集終了）',
    organization: '一般財団法人LINEヤフー基金',
    type: 'ngo',
    maxAmount: '1団体上限100万円',
    maxAmountNum: 100,
    category: 'disaster',
    prefecture: '全国',
    tags: ['災害支援', '能登半島地震', '募集終了'],
    eligibility: '令和6年能登半島地震の被災地域で復旧・復興支援に取り組む非営利団体等が対象でした。',
    applicationPeriod: '第2回募集は2024年9月30日で締切済み',
    deadlineDate: '2024-09-30',
    description: 'LINEヤフー基金の能登半島地震復旧・復興支援助成です。第2回募集は終了しており、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和6年能登半島地震の被災地で、復旧・復興、被災者支援、地域コミュニティ支援等を行う団体を支援した助成プログラムです。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式募集ページでは、1団体あたり上限100万円と案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>第2回募集は2024年9月30日で受付終了しています。現在の公募状況はLINEヤフー基金の助成一覧で確認してください。</p>'
      }
    ],
    officialUrl: 'https://kikin.yahoo.co.jp/support/20240828.html',
    sourceName: 'LINEヤフー基金 助成プログラム',
    sourceUrls: [
      'https://kikin.yahoo.co.jp/support/',
      'https://kikin.yahoo.co.jp/support/20240828.html'
    ],
    sourceNote: '公式助成一覧と募集ページで第2回プログラム、上限100万円、2024年9月30日の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'lixil-housing-safety-grant',
    title: '住まいの安全助成（公式助成確認不可）',
    organization: '一般財団法人 住総研・住環境財団等の関連ページ確認',
    type: 'ngo',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '全国',
    tags: ['住宅', '公式確認不可', '掲載停止'],
    eligibility: '候補名に一致する公式助成制度を確認できませんでした。',
    applicationPeriod: '公式助成確認不可として掲載停止',
    deadlineDate: '2026-06-25',
    description: '「住まいの安全助成」という制度名は、公式ページで確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '確認結果',
        content: '<p>関連候補として住環境財団の調査研究助成やQ&Aページを確認しましたが、「住まいの安全助成」という制度名の公募は確認できませんでした。</p>'
      },
      {
        heading: '掲載方針',
        content: '<p>制度名、対象、上限額、締切を一次情報で確認できないため、助成制度として通常一覧には掲載しません。</p>'
      },
      {
        heading: '代替確認先',
        content: '<p>住宅分野の研究助成や住環境関連の公募は、各財団・自治体・国の公式ページで最新情報を確認してください。</p>'
      }
    ],
    officialUrl: 'https://system.jyukankyo.or.jp/?page_id=17',
    sourceName: '住環境財団 Q&A・調査研究助成',
    sourceUrls: [
      'https://system.jyukankyo.or.jp/?page_id=17',
      'https://system.jyukankyo.or.jp/?page_id=02'
    ],
    sourceNote: '候補となる公式ページを確認したが、「住まいの安全助成」という助成名は確認できず。掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'recruit-foundation-job-training-youth',
    title: '若者就労支援助成（公式助成確認不可）',
    organization: '公益財団法人江副記念リクルート財団',
    type: 'ngo',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['若者支援', '公式確認不可', '掲載停止'],
    eligibility: '候補名に一致する公式助成制度を確認できませんでした。',
    applicationPeriod: '公式助成確認不可として掲載停止',
    deadlineDate: '2026-06-25',
    description: '江副記念リクルート財団公式サイトではリクルートスカラシップ等は確認できますが、「若者就労支援助成」という助成制度は確認できませんでした。',
    sections: [
      {
        heading: '確認結果',
        content: '<p>財団公式サイトと奨学金ページを確認しましたが、候補名に一致する就労支援助成の公募は確認できませんでした。</p>'
      },
      {
        heading: '掲載方針',
        content: '<p>公式制度名を確認できないため、通常一覧から除外します。奨学金制度と混同しないよう、助成金としての金額断定は行いません。</p>'
      },
      {
        heading: '確認先',
        content: '<p>江副記念リクルート財団の現在の支援制度は、公式サイトと奨学金ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.recruit-foundation.org/',
    sourceName: '江副記念リクルート財団 公式サイト',
    sourceUrls: [
      'https://www.recruit-foundation.org/',
      'https://www.recruit-foundation.org/scholarship/'
    ],
    sourceNote: '公式財団ページで候補名の助成制度を確認できず。掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'jr-nishi-anshin-zaidan',
    title: 'JR西日本あんしん社会財団 公募助成（2026年度募集終了）',
    organization: '公益財団法人JR西日本あんしん社会財団',
    type: 'ngo',
    maxAmount: '活動助成は50万円以下、研究助成は年間150万円以下（2年最大300万円）',
    maxAmountNum: 300,
    category: 'disaster',
    prefecture: '全国',
    tags: ['安全', '事故防止', '募集終了'],
    eligibility: '事故、災害、不測の事態に対する備えや安全・安心な社会づくりに取り組む団体・研究者等が対象です。',
    applicationPeriod: '2026年度公募助成は2025年10月31日で締切済み',
    deadlineDate: '2025-10-31',
    description: '安全・安心な社会づくりを支援するJR西日本あんしん社会財団の公募助成です。2026年度募集は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>事故や災害への備え、安全・安心な社会づくり、被害者支援等に関する活動・研究を支援する公募助成です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>活動助成は50万円以下、研究助成は年間150万円以下で、2年間の場合は最大300万円と案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2026年度公募助成は2025年10月31日で締切済みです。次年度の公募要項は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.jrw-relief-f.or.jp/aid/',
    sourceName: 'JR西日本あんしん社会財団 助成事業',
    sourceUrls: [
      'https://www.jrw-relief-f.or.jp/aid/',
      'https://www.jrw-relief-f.or.jp/aid/activity/',
      'https://www.jrw-relief-f.or.jp/aid/study/'
    ],
    sourceNote: '公式ページで公募助成、活動助成・研究助成の上限額、2025年10月31日の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nippon-foundation-welfare-vehicle',
    title: '日本財団 2026年度 福祉車両の配備（申請受付終了）',
    organization: '公益財団法人日本財団',
    type: 'ngo',
    maxAmount: '車種ごとの定額補助',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '全国',
    tags: ['福祉車両', '日本財団', '受付終了'],
    eligibility: '福祉車両を必要とする社会福祉法人、NPO法人、公益法人等が対象です。対象車両・団体要件は募集要項で確認します。',
    applicationPeriod: '2026年度募集は2026年6月5日17:00で締切済み',
    deadlineDate: '2026-06-05',
    description: '日本財団の福祉車両配備助成です。2026年度募集は申請受付終了のため、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福祉施設や地域福祉団体に、送迎車や車いす対応車などの福祉車両を配備するための助成プログラムです。</p>'
      },
      {
        heading: '助成額',
        content: '<p>補助額は車種ごとの定額です。対象車両、装備、自己負担額は日本財団の申請ポータルと募集資料で確認します。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2026年度募集は2026年6月5日17時で申請受付終了しています。次回募集の有無は公式サイトで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.nippon-foundation.or.jp/grant_application/past',
    sourceName: '日本財団 福祉車両の配備',
    sourceUrls: [
      'https://www.nippon-foundation.or.jp/grant_application/past',
      'https://www.nippon-foundation.or.jp/who/news/information/2026/20260511-121452.html'
    ],
    sourceNote: '公式告知と過去プログラム一覧で2026年度福祉車両の配備、申請受付終了、2026年6月5日締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sasakawa-sports-foundation-elderly-health',
    title: '高齢者健康づくり助成（公式助成確認不可）',
    organization: '公益財団法人笹川スポーツ財団',
    type: 'ngo',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['健康づくり', '公式確認不可', '掲載停止'],
    eligibility: '候補名に一致する公式助成制度を確認できませんでした。',
    applicationPeriod: '公式助成確認不可として掲載停止',
    deadlineDate: '2026-06-25',
    description: '笹川スポーツ財団では健康・スポーツ分野の調査研究や情報発信は確認できますが、「高齢者健康づくり助成」という公募制度は確認できませんでした。',
    sections: [
      {
        heading: '確認結果',
        content: '<p>財団公式サイトと健康スポーツ研究会関連ページを確認しましたが、候補名と一致する助成公募は確認できませんでした。</p>'
      },
      {
        heading: '掲載方針',
        content: '<p>制度名と公募要項を一次情報で確認できないため、通常一覧から除外します。</p>'
      },
      {
        heading: '確認先',
        content: '<p>笹川スポーツ財団の現在の事業や研究会情報は公式サイトで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.ssf.or.jp/index.html',
    sourceName: '笹川スポーツ財団 公式サイト',
    sourceUrls: [
      'https://www.ssf.or.jp/index.html',
      'https://www.ssf.or.jp/thinktank/health_wellbeing/studygroup/index.html'
    ],
    sourceNote: '公式サイトで候補名の助成制度を確認できず。掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mitsui-sumitomo-culture-foundation',
    title: '三井住友海上文化財団 文化の国際交流活動に対する助成（募集終了）',
    organization: '公益財団法人三井住友海上文化財団',
    type: 'ngo',
    maxAmount: '1件50万円から100万円',
    maxAmountNum: 100,
    category: 'education',
    prefecture: '全国',
    tags: ['文化交流', '芸術文化', '募集終了'],
    eligibility: '音楽、郷土芸能、演劇、舞踊、美術等の文化・芸術分野で国際交流活動を行う団体等が対象です。',
    applicationPeriod: '令和8年度募集は2025年11月28日で締切済み',
    deadlineDate: '2025-11-28',
    description: '文化・芸術分野の国際交流活動を支援する三井住友海上文化財団の助成です。令和8年度募集は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>音楽、郷土芸能、演劇、舞踊、美術などの文化・芸術分野で、国際交流に資する活動を支援する助成です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式募集ページでは、1件あたり50万円から100万円の助成と案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度募集は2025年11月28日で締切済みです。次回募集は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.ms-ins-bunkazaidan.or.jp/assist/form/',
    sourceName: '三井住友海上文化財団 助成先募集',
    sourceUrls: ['https://www.ms-ins-bunkazaidan.or.jp/assist/form/'],
    sourceNote: '公式募集ページで助成対象、助成額、令和8年度募集の2025年11月28日締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'panasonic-education-jissen-kenkyu',
    title: 'パナソニック教育財団 実践研究助成（2026年度応募受付終了）',
    organization: '公益財団法人パナソニック教育財団',
    type: 'ngo',
    maxAmount: '一般は30万円または50万円、特別研究指定校は150万円',
    maxAmountNum: 150,
    category: 'education',
    prefecture: '全国',
    tags: ['教育研究', '学校ICT', '受付終了'],
    eligibility: '学校、園、教育機関等で、教育実践研究に取り組む教員・研究グループ等が対象です。',
    applicationPeriod: '2026年度応募受付は2026年1月20日17:00で締切済み',
    deadlineDate: '2026-01-20',
    description: '教育実践研究を支援するパナソニック教育財団の助成です。2026年度応募受付は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>教育現場での実践研究、ICT活用、授業改善、教育課題の解決に取り組む学校・教員等を支援する助成です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>一般助成は30万円または50万円、特別研究指定校は150万円の助成が案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2026年度応募受付は2026年1月20日17時で終了しています。次年度募集は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pef.or.jp/school/grant/entry/',
    sourceName: 'パナソニック教育財団 実践研究助成',
    sourceUrls: ['https://www.pef.or.jp/school/grant/entry/'],
    sourceNote: '公式募集ページで一般助成、特別研究指定校の助成額、2026年1月20日17時の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'coop-kyosai-education-support-grant',
    title: '子ども教育支援助成（公式助成確認不可）',
    organization: 'CO・OP共済',
    type: 'ngo',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '全国',
    tags: ['子ども支援', '公式確認不可', '掲載停止'],
    eligibility: '候補名に一致する公式助成制度を確認できませんでした。',
    applicationPeriod: '公式助成確認不可として掲載停止',
    deadlineDate: '2026-06-25',
    description: 'CO・OP共済の公式ページでは地域ささえあい助成は確認できますが、「子ども教育支援助成」という制度名は確認できませんでした。',
    sections: [
      {
        heading: '確認結果',
        content: '<p>CO・OP共済の社会貢献・地域ささえあい助成ページを確認しましたが、候補名に一致する助成制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載方針',
        content: '<p>公式制度名を確認できないため、通常一覧から除外します。地域ささえあい助成とは別名の制度として扱いません。</p>'
      },
      {
        heading: '確認先',
        content: '<p>CO・OP共済の地域活動支援や公募情報は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://coopkyosai.coop/csr/socialwelfare/',
    sourceName: 'CO・OP共済 地域ささえあい助成',
    sourceUrls: [
      'https://coopkyosai.coop/csr/socialwelfare/',
      'https://coopkyosai.coop/csr/socialwelfare/info.html'
    ],
    sourceNote: '公式ページで候補名の助成制度を確認できず。掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sumitomo-life-kosodate-project',
    title: '住友生命 未来を強くする子育てプロジェクト（第19回募集終了）',
    organization: '住友生命保険相互会社',
    type: 'ngo',
    maxAmount: '未来大賞は100万円、未来賞は50万円',
    maxAmountNum: 100,
    category: 'childcare',
    prefecture: '全国',
    tags: ['子育て支援', '表彰', '募集終了'],
    eligibility: 'よりよい子育て環境づくりに取り組む個人・団体等が対象です。表彰部門ごとに要件があります。',
    applicationPeriod: '第19回募集は2025年9月8日で締切済み',
    deadlineDate: '2025-09-08',
    description: '子育て支援活動を表彰する住友生命のプロジェクトです。第19回募集は締切済みです。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域で子育て支援に取り組む個人・団体を表彰し、活動を後押しするプロジェクトです。</p>'
      },
      {
        heading: '表彰内容',
        content: '<p>募集要項では、未来大賞の副賞100万円、未来賞の副賞50万円が案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>第19回募集は2025年9月8日で締切済みです。次回募集の有無は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.sumitomolife.co.jp/about/sustainability/important/stakeholder/community/mirai_child/',
    sourceName: '住友生命 未来を強くする子育てプロジェクト',
    sourceUrls: [
      'https://www.sumitomolife.co.jp/about/sustainability/important/stakeholder/community/mirai_child/',
      'https://www.sumitomolife.co.jp/about/sustainability/important/stakeholder/community/mirai_child/child/bosyu.html'
    ],
    sourceNote: '公式ページと募集要項で第19回募集、表彰副賞、2025年9月8日の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'asahi-bunka-zaidan-culture-grant',
    title: '朝日新聞文化財団 芸術活動への助成',
    organization: '公益財団法人朝日新聞文化財団',
    type: 'ngo',
    maxAmount: '1件あたり数十万円から100万円',
    maxAmountNum: 100,
    category: 'education',
    prefecture: '全国',
    tags: ['芸術活動', '文化助成', '2027年度'],
    eligibility: '芸術分野の公演、展示、国際交流、調査研究等を行う団体・個人等が対象です。分野・活動内容ごとに要件があります。',
    applicationPeriod: '2027年度分は2026年10月25日まで',
    deadlineDate: '2026-10-25',
    description: '朝日新聞文化財団が芸術活動を支援する助成です。2027年度分の受付予定が公開されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>音楽、美術、演劇、舞踊、伝統芸能などの芸術活動を支援する助成です。活動内容により審査対象や提出資料が異なります。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式ページでは、1件あたり数十万円から100万円の助成と案内されています。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>2027年度分の申請期限は2026年10月25日です。郵送・提出方法や対象年度を公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.asahizaidan.or.jp/grant/grant01.html',
    sourceName: '朝日新聞文化財団 芸術活動への助成',
    sourceUrls: ['https://www.asahizaidan.or.jp/grant/grant01.html'],
    sourceNote: '公式募集ページで2027年度分、助成額、2026年10月25日の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mizuho-kyouiku-fukushi-zaidan',
    title: 'みずほ教育福祉財団 ボランティア活動資金助成事業（令和8年度募集終了）',
    organization: '公益財団法人みずほ教育福祉財団',
    type: 'ngo',
    maxAmount: '5万円から15万円',
    maxAmountNum: 15,
    category: 'nursing',
    prefecture: '全国',
    tags: ['ボランティア', '福祉活動', '募集終了'],
    eligibility: '高齢者福祉等のボランティア活動を行う民間非営利団体等が対象です。助成区分ごとに対象活動が異なります。',
    applicationPeriod: '令和8年度募集は2026年5月22日で締切済み',
    deadlineDate: '2026-05-22',
    description: 'みずほ教育福祉財団のボランティア活動資金助成です。令和8年度募集は締切済みです。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域福祉、高齢者支援、ボランティア活動等に取り組む団体の活動資金を支援する助成事業です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式公募ページでは、助成額は5万円から15万円と案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度募集は2026年5月22日で締切済みです。次回募集は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://mizuho-ewf.org/publicrecruitment',
    sourceName: 'みずほ教育福祉財団 公募申込',
    sourceUrls: [
      'https://mizuho-ewf.org/publicrecruitment',
      'https://mizuho-ewf.org/publicrecruitment_form1-A'
    ],
    sourceNote: '公式公募ページで第3回・令和8年度分の助成額と2026年5月22日の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nissay-foundation-jidou-ikusei',
    title: '日本生命財団 児童・少年の健全育成助成（2026年度募集終了）',
    organization: '公益財団法人日本生命財団',
    type: 'ngo',
    maxAmount: '1団体30万円から80万円',
    maxAmountNum: 80,
    category: 'childcare',
    prefecture: '全国',
    tags: ['児童育成', '物品助成', '募集終了'],
    eligibility: '地域で児童・少年の健全育成活動を行う民間団体等が対象です。申請受付期間は都道府県により異なります。',
    applicationPeriod: '2026年度募集は終了。受付期間は都道府県別',
    deadlineDate: '2026-06-25',
    description: '児童・少年の健全育成活動に必要な物品を助成する日本生命財団の制度です。公式ページで2026年度募集終了を確認したため通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域で児童・少年の健全育成に取り組む団体に対して、活動に必要な物品購入を支援する助成です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式ページでは、1団体あたり30万円から80万円の物品助成と案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2026年度募集は終了しています。申請受付期間は都道府県別のため、ここでは募集終了確認日を掲載停止の期限切れ判定に使用しています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.wakayama.lg.jp/prefg/040200/d00217985.html',
    sourceName: '和歌山県 ニッセイ財団2026年度「児童・少年の健全育成助成」申請団体募集',
    sourceUrls: [
      'https://www.pref.wakayama.lg.jp/prefg/040200/d00217985.html',
      'https://www.city.okayama.jp/kyoudou/0000075652.html'
    ],
    sourceNote: '都道府県推薦型のため、自治体公式募集ページで2026年度募集終了、助成額30万円から80万円、都道府県別受付であることを確認。日本生命財団公式ドメインはリンク監査環境でtimeoutするため掲載URLから除外。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'meiji-yasuda-life-childcare-community',
    title: '地域の子育て応援助成（公式助成確認不可）',
    organization: '明治安田生命保険相互会社',
    type: 'ngo',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '全国',
    tags: ['子育て支援', '公式確認不可', '掲載停止'],
    eligibility: '候補名に一致する公式助成制度を確認できませんでした。',
    applicationPeriod: '公式助成確認不可として掲載停止',
    deadlineDate: '2026-06-25',
    description: '明治安田の未来世代応援活動等は確認できますが、「地域の子育て応援助成」という公式助成制度名は確認できませんでした。',
    sections: [
      {
        heading: '確認結果',
        content: '<p>公式サイトの未来世代応援活動、地元の元気プロジェクト関連ページを確認しましたが、候補名に一致する助成公募は確認できませんでした。</p>'
      },
      {
        heading: '掲載方針',
        content: '<p>公式制度名、上限額、募集要項を確認できないため、通常一覧から除外します。</p>'
      },
      {
        heading: '確認先',
        content: '<p>明治安田の地域貢献活動や子育て支援関連の最新情報は、公式サイトで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.meijiyasuda.co.jp/profile/society/',
    sourceName: '明治安田 社会貢献活動',
    sourceUrls: [
      'https://www.meijiyasuda.co.jp/profile/society/',
      'https://www.meijiyasuda.co.jp/brand/jimotonogenki/'
    ],
    sourceNote: '公式ページで候補名の助成制度を確認できず。掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mufg-trust-scholarship',
    title: '三菱UFJ信託奨学財団 奨学金',
    organization: '公益財団法人三菱UFJ信託奨学財団',
    type: 'ngo',
    maxAmount: '月額70,000円から135,000円（区分別、返還不要）',
    maxAmountNum: 162,
    category: 'education',
    prefecture: '全国',
    tags: ['奨学金', '返還不要', '指定大学'],
    eligibility: '財団指定大学の推薦を受ける学生が対象です。学部、修士、博士等の区分により支給額・要件が異なります。',
    applicationPeriod: '指定大学を通じて募集。2026年度募集開始を公式ページで確認',
    description: '三菱UFJ信託奨学財団の返還不要の奨学金です。指定大学経由で申請する制度として確認しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>経済的支援を必要とする学生に、返還不要の奨学金を支給する財団制度です。申請は指定大学を通じて行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>公式募集ページでは、区分により月額70,000円から135,000円と案内されています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>個人が直接財団へ申し込むのではなく、在籍する指定大学の奨学金担当窓口を通じて申請します。</p>'
      }
    ],
    officialUrl: 'https://www.scholarship.or.jp/program/contents/application.html',
    sourceName: '三菱UFJ信託奨学財団 募集について',
    sourceUrls: [
      'https://www.scholarship.or.jp/',
      'https://www.scholarship.or.jp/program/contents/application.html'
    ],
    sourceNote: '公式ページで2026年度募集、指定大学経由の申請、月額70,000円から135,000円の支給額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'daiwa-securities-volunteer-grant',
    title: '大和証券財団 ボランティア活動助成（受付終了）',
    organization: '公益財団法人大和証券財団',
    type: 'ngo',
    maxAmount: '1団体上限30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '全国',
    tags: ['ボランティア', '福祉活動', '受付終了'],
    eligibility: '高齢者、障がい児者、子ども等を対象にしたボランティア活動を行う団体等が対象です。',
    applicationPeriod: '2025年度（第32回）は2025年9月15日で締切済み',
    deadlineDate: '2025-09-15',
    description: '福祉分野のボランティア活動を支援する大和証券財団の助成です。2025年度募集は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域の福祉ボランティア活動を支援する助成です。高齢者、障がい児者、子ども等を対象とした活動が中心です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式募集ページでは、1団体あたり上限30万円と案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2025年度（第32回）の応募受付は2025年9月15日で終了しています。次回募集は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.daiwa-grp.jp/dsz/grant/volunteer.html',
    sourceName: '大和証券財団 ボランティア活動助成',
    sourceUrls: ['https://www.daiwa-grp.jp/dsz/grant/volunteer.html'],
    sourceNote: '公式募集ページで対象活動、上限30万円、2025年9月15日の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kirin-welfare-chiiki-chikara',
    title: 'キリン福祉財団 キリン・地域のちから応援事業（令和8年度募集終了）',
    organization: '公益財団法人キリン福祉財団',
    type: 'ngo',
    maxAmount: '1団体上限30万円（総額4,500万円）',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '全国',
    tags: ['地域福祉', '市民活動', '募集終了'],
    eligibility: '地域福祉の向上につながるボランティア活動、市民活動を行う団体等が対象です。',
    applicationPeriod: '令和8年度公募は2025年10月31日で締切済み',
    deadlineDate: '2025-10-31',
    description: '地域福祉活動を支援するキリン福祉財団の助成です。令和8年度公募は受付終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域に根ざした福祉活動、ボランティア活動、市民活動を応援する助成事業です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>令和8年度公募では、1団体あたり上限30万円、助成総額4,500万円と案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度公募は2025年10月31日で締切済みです。次回募集は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://foundation.kirinholdings.com/subsidy/r8/index.html',
    sourceName: 'キリン福祉財団 令和8年度公募助成',
    sourceUrls: ['https://foundation.kirinholdings.com/subsidy/r8/index.html'],
    sourceNote: '公式募集ページでキリン・地域のちから応援事業、上限30万円、総額4,500万円、2025年10月31日の締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'zenrosai-chiiki-koken-josei',
    title: 'こくみん共済 coop 地域貢献助成（2025年募集終了）',
    organization: 'こくみん共済 coop',
    type: 'ngo',
    maxAmount: '公式現行ページでは個別上限未確認',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '全国',
    tags: ['地域貢献', '市民活動', '募集終了'],
    eligibility: '防災・減災、環境保全、子どもの健全育成等に取り組む団体等が対象です。募集年度ごとの要項で確認します。',
    applicationPeriod: '2025年募集は2025年9月30日で締切済み',
    deadlineDate: '2025-09-30',
    description: 'こくみん共済 coop の地域貢献助成です。2025年募集は受付終了しているため、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域の防災・減災、環境保全、子どもの健全育成など、安心して暮らせる地域づくりに取り組む団体を支援する助成です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>公式現行ページでは2025年採択総額は確認できますが、個別上限額は確認できなかったため断定していません。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>2025年募集は2025年9月30日で締切済みです。次回募集の有無と上限額は公式募集要項で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.zenrosai.coop/zenrosai/csr/josei.html',
    sourceName: 'こくみん共済 coop 地域貢献助成',
    sourceUrls: [
      'https://www.zenrosai.coop/zenrosai/csr/josei.html',
      'https://www.zenrosai.coop/zenrosai/topics/2025/32188.html'
    ],
    sourceNote: '公式ページと2025年募集告知で地域貢献助成、2025年9月30日の締切、2025年採択総額を確認。個別上限は公式現行HTMLで確認できず断定しない。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
