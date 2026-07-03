# 助成金ナビ 安全継続引き継ぎ 2026-07-03

このファイルは、クラッシュした旧チャットを開かずに `/Users/banseiyuuji/joseikin-navi-site` の助成金ナビ作業を安全に継続するための引き継ぎです。

## 2026-07-03 追記: コンテキスト溢れ対策

このファイルの作成後に作業が進み、`SAFE_CONTINUATION_PLAN.md` と `tasks/todo.md` が大きくなりました。これらを全文読むと Codex のコンテキストウィンドウを使い切り、`Codex ran out of room in the model's context window` で停止する原因になります。

次チャットでは、まず次の短い再開ファイルだけを読んでください。

```text
/Users/banseiyuuji/joseikin-navi-site/HANDOFF_CONTEXT_RECOVERY_2026-07-03.md
```

`SAFE_CONTINUATION_PLAN.md` と `tasks/todo.md` は全文を読まず、必要な場合だけ `tail` または狭い `rg` で参照してください。

```bash
tail -40 HANDOFF_SAFE_CONTINUATION_2026-07-03.md
tail -80 tasks/todo.md
rg -n "Batch 145|花巻市|次回候補" SAFE_CONTINUATION_PLAN.md tasks/todo.md
```

最短再開コマンド:

```bash
cd /Users/banseiyuuji/joseikin-navi-site
sed -n '1,220p' HANDOFF_CONTEXT_RECOVERY_2026-07-03.md
git status --short --branch
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

## 絶対条件

- 古い隔離済みチャットは開かない、unarchiveしない、復元しない。
- node_repl、Computer Use、browser/chrome/computer-use plugin は使わない。
- Web操作が必要な場合は、通常のweb検索、Jina Reader、curl等の通常Web取得、または許可されたPinchTab / chrome-devtoolsだけを使う。
- Chromeプロセス保護: `kill chrome` / `pkill chrome` / `killall chrome` は禁止。
- 危険操作、認証、課金、公開、削除、破壊的操作は確認を取る。
- push / 公開反映は明示確認後に実行する。
- 会話は日本語。
- 公式一次情報を最優先し、制度名、対象地域、対象者、申請期間、補助額、補助率、対象経費、申請条件、公式URL、更新日を正確に整理する。
- 重複、期限切れ、出典不明、対象外制度を避ける。公式確認不能な生成データは、同一slugで掲載停止扱いにするか、公式に確認できる近い制度へ明示的に補正する。

## 作業対象

- 本体: `/Users/banseiyuuji/joseikin-navi-site`
- 関連: `/Users/banseiyuuji/joseikin-navi-maintenance`
- 入口として読むファイル:
  - `/Users/banseiyuuji/.codex/handoff-from-claude/00-START-HERE.md`
  - `/Users/banseiyuuji/joseikin-navi-site/HANDOFF_CONTEXT_RECOVERY_2026-07-03.md`
  - `/Users/banseiyuuji/joseikin-navi-site/SAFE_CONTINUATION_PLAN.md` は全文ではなく `tail` / `rg` で必要箇所だけ読む
  - `/Users/banseiyuuji/joseikin-navi-site/tasks/todo.md` は全文ではなく `tail` / `rg` で必要箇所だけ読む
  - `/Users/banseiyuuji/joseikin-navi-site/src/data/grants/verified-local-misc-2026.ts`
  - 必要に応じて `/Users/banseiyuuji/joseikin-navi-site/src/lib/types.ts` と `/Users/banseiyuuji/joseikin-navi-site/src/lib/grants.ts`

## 現在のgit状態

作業ディレクトリ: `/Users/banseiyuuji/joseikin-navi-site`

最新コミット:

```text
5fc1587 加須市2件を公式補正
61c620c 越谷市9件を公式補正
cc4b779 羽生市9件を公式補正
af5fec1 津山市9件を公式補正
ad38655 総社市9件を公式補正
9bb1eb8 倉敷市18件を公式補正
c6ae975 玉野市9件を公式補正
8b3dc35 笠岡市9件を公式補正
2859964 岡山市残り8件を公式補正
827fa51 岡山市12件を公式補正
f3ba28b 日立市20件を公式補正
af88c13 土浦市残り8件を公式補正
933ecac 土浦市先頭12件を公式補正
a738ba7 水戸市9件を公式補正
934c1f1 古河市残り8件を公式補正
```

この引き継ぎ作成時点で、助成金ナビ公式補正作業としてコミット済みの最新は `5fc1587` です。この引き継ぎファイルは別コミットで保存します。熊谷市7件についてはWeb調査途中で、まだ `verified-local-misc-2026.ts` には追記していません。

現在の `git status --short` で見えている未コミット変更は、助成金補正作業とは別件のPinterest/UI周辺です。次チャットでは触らないでください。

```text
 M package.json
 M src/app/sitemap.ts
 M src/components/Footer.tsx
 M src/components/Header.tsx
 M src/components/JsonLd.tsx
?? DESIGN.md
?? public/pinterest/
?? scripts/check-pinterest-content.mjs
?? scripts/export-pinterest-plan.mjs
?? scripts/generate-pinterest-pins.py
?? scripts/pinterest-oauth.mjs
?? scripts/pinterest-post-daily.mjs
?? scripts/pinterest-token-check.mjs
?? src/app/pinterest/
?? src/data/pinterest.ts
?? tasks/pinterest-15pin-plan.csv
?? tasks/pinterest-analytics-template.csv
?? tasks/pinterest-api-setup.md
?? tasks/pinterest-demo-frames/
?? tasks/pinterest-joseikin-checklist-desktop.png
?? tasks/pinterest-joseikin-checklist-mobile.png
?? tasks/pinterest-standard-demo.mp4
```

注意:

- `SAFE_CONTINUATION_PLAN.md`、`tasks/todo.md`、`src/data/grants/verified-local-misc-2026.ts` は、加須市2件のコミット `5fc1587` まではクリーンです。
- この引き継ぎファイルは助成金データ本体とは別の保存用ドキュメントです。別件Pinterest変更はステージしないこと。

## 直近の完了済み範囲

岡山県:

- 岡山県Batch 113-119を実施済み。
- 岡山市、笠岡市、玉野市、倉敷市、総社市、津山市を公式補正済み。
- 岡山県raw gapは0件達成済み。
- 津山市完了後に `npm run build` 成功。静的ページ5,105件、`/grant/[slug]` は2,492件相当。

埼玉県:

- Batch 120 羽生市9件を公式補正済み、コミット `cc4b779`。
- Batch 121 越谷市9件を公式補正済み、コミット `61c620c`。
- Batch 122 加須市2件を公式補正済み、コミット `5fc1587`。
- 加須市完了後に20件節目として `npm run build` 成功。静的ページ5,129件、`/grant/[slug]` は表示分4件 + 2,508件で2,512件相当。
- 未コミットのPinterest系別変更が残っているため、buildサマリーには `/pinterest` と `/pinterest/joseikin-checklist` が含まれる。これは今回の助成金補正とは別件。

## 最新検証結果

`5fc1587` 時点の主な検証結果:

```text
node scripts/audit-raw-verified-gaps.mjs --prefecture 埼玉県 --limit 25
raw files: 108
verified files: 20
raw unique slugs: 4375
verified unique slugs: 2515
unverified raw slugs: 120
duplicate raw slugs: 32
unverified by prefecture:
- 埼玉県: 120
```

全国側:

```text
node scripts/audit-raw-verified-gaps.mjs --limit 12
unverified raw slugs: 2583
上位:
- 福岡県: 127
- 栃木県: 121
- 埼玉県: 120
- 大阪府: 119
- 静岡県: 91
- 千葉県: 91
- 山口県: 84
- 広島県: 83
- 新潟県: 80
- 長野県: 79
```

coverage:

```text
node scripts/audit-coverage.mjs
failures: 0
activePublished: 4759
expired: 339
officialLinkedActive: 2172
manuallyVerifiedActive: 2172
activeWithoutOfficialSource: 2587
officialLinkedButNotManuallyVerified: 0
埼玉県 localOfficial/localManuallyVerified: 114
active全体に対する公式確認済みactive比率: 約45.6%
```

加須市2件のURL監査:

```text
node scripts/check-grant-source-urls.mjs --slug kazo-migration-bonus --slug kazo-uij-turn --concurrency 2 --timeout-ms 120000
checked: 6
failures: 0
すべてHTTP 200
```

加須市後のbuild:

```text
npm run build
成功
Compiled successfully in 3.3min
Generated static pages: 5129/5129
/grant/[slug]: 表示4件 + 2508 more paths = 2512件相当
```

## 埼玉県Batch 120 羽生市9件の内容

コミット: `cc4b779 羽生市9件を公式補正`

追加・補正:

- `hanyu-birth-bonus`: 妊婦のための支援給付事業へ補正。妊婦1人5万円、胎児1人5万円、母子健康手帳交付時・乳児家庭全戸訪問時等の案内を確認。
- `hanyu-childcare-subsidy`: 幼児教育・保育の無償化と保育料軽減へ補正。新制度未移行幼稚園の月額25,700円上限、預かり保育1日450円上限、保育料の第2子半額・第3子以降無料等を確認。
- `hanyu-housing-purchase`: 住宅改修（リフォーム）補助金へ補正。住宅取得支援補助金は確認できず、工事費20万円以上、市内施工業者、補助率5%・上限10万円の公式制度を確認。
- `hanyu-infertility`: 不妊治療費（保険適用分）助成事業へ補正。一般不妊治療は自己負担額から付加給付金等を除いた額の1/2、上限10万円、申請期限を確認。
- `hanyu-migration-bonus`: 東京圏移住者向け単身60万円・世帯100万円の羽生市移住支援金は公式確認不可として掲載停止扱い。住まい支援や移住創業支援とは別制度として整理。
- `hanyu-nursing-equipment`: 家族介護用品支給事業へ補正。要介護4または5、同居家族介護、65歳以上、市民税非課税世帯、紙おむつ等の現物支給を確認。
- `hanyu-scholarship`: 育英資金・奨学資金給与制度へ補正。高校生月額1万円、大学生等月額2万円、令和7年度受付終了を確認。
- `hanyu-seismic-diagnosis`: 木造住宅耐震診断補助金へ補正。昭和56年5月31日以前着工、2階建以下の木造一戸建住宅、補助率1/2以内、上限5万円を確認。
- `hanyu-uij-turn`: 創業支援事業補助金（移住創業含む）へ補正。令和8年度、令和9年1月29日まで、市内創業1/2以内、女性・移住創業2/3以内、上限100万円を確認。

検証:

- 対象9件は全件取得、active 8件、掲載停止1件、全体slug重複0。
- 採用sourceUrls 26件はすべてHTTP 200。
- 埼玉県raw gap 140件から131件。
- 全国raw gap 2,603件から2,594件。

## 埼玉県Batch 121 越谷市9件の内容

コミット: `61c620c 越谷市9件を公式補正`

追加・補正:

- `koshigaya-block-wall-removal`: 住宅・店舗改修促進補助金（ブロック塀撤去含む）へ補正。独立したブロック塀等撤去補助ではなく、外構の門扉・ブロック塀・フェンス改修・設置、ブロック塀撤去のみも対象、補助率20%・上限10万円を確認。
- `koshigaya-child-medical-aid`: こども医療費支給制度へ補正。18歳年度末まで、令和6年4月診療分から拡大、食事療養費を除く健康保険の医療費給付対象分を確認。
- `koshigaya-elderly-taxi`: 越谷げんき de MaaS バス・タクシー運賃補助へ補正。75歳以上、バス100円/回・回数上限なし、タクシー500円/回・年度12回までを確認。
- `koshigaya-health-checkup-subsidy`: 人間ドック検診料助成へ補正。国保35歳以上・後期高齢者医療加入者、上限10,000円、一年度一回、特定健診等との重複不可を確認。
- `koshigaya-juutaku-reform`: 住宅・店舗改修促進補助金へ補正。市内施工業者、20万円以上、交付決定後着工、補助率20%・上限10万円、第1期受付終了・第2期11月予定を確認。
- `koshigaya-scholarship-repayment`: 看護師等就業支援助成金へ補正し、令和8年度交付要望受付終了扱い。奨学金返還支援金は年上限20万円・最長5年間を確認。
- `koshigaya-school-lunch-subsidy`: 小学校給食費無償化・中学校給食費一部公費負担へ補正。令和8年度小学校給食費は手続き不要で保護者負担なし、中学校は市独自一部公費負担を継続。
- `koshigaya-startup-support`: 創業者支援補助金へ補正。令和8年6月29日から7月10日まで、補助率1/2以内、上限100万円を確認。
- `koshigaya-water-saving`: 合併処理浄化槽の転換設置補助金へ補正。雨水タンク単独補助は確認できず、住宅・店舗改修促進補助金の対象工事には雨水貯留施設設置が含まれること、生活排水対策として合併処理浄化槽補助の上限92.5万円を確認。

検証:

- 対象9件は全件取得、active 8件、掲載停止1件、全体slug重複0。
- 採用sourceUrls 26件はすべてHTTP 200。
- 埼玉県raw gap 131件から122件。
- 全国raw gap 2,594件から2,585件。

## 埼玉県Batch 122 加須市2件の内容

コミット: `5fc1587 加須市2件を公式補正`

追加・補正:

- `kazo-migration-bonus`: 子育て世帯応援転入費用助成金へ補正。東京圏移住支援金・最大100万円ではなく、住宅を購入して中学生以下の子どもと転入する親子世帯向けに、引越し費用10%・上限2万円を助成する制度を確認。加須産米贈呈、三世代ふれあい家族住宅取得等補助金などの関連支援も確認。
- `kazo-uij-turn`: 創業支援補助金へ補正。創業予定者・創業後5年未満・事業承継による個人開業等、特定創業支援等事業の証明、市内事業所、対象経費の1/2・上限100万円を確認。

検証:

- 対象2件は全件取得、active 2件、全体slug重複0。
- 採用sourceUrls 6件はすべてHTTP 200。
- 埼玉県raw gap 122件から120件。
- 全国raw gap 2,585件から2,583件。
- 20件節目として `npm run build` 成功。

## 次にやること: 埼玉県Batch 123 熊谷市7件

次の未照合raw slug:

```text
- 埼玉県 熊谷市 kumagaya-birth-bonus: 熊谷市 出産祝い金支給制度 (src/data/grants/city-batch56.ts)
- 埼玉県 熊谷市 kumagaya-childcare-subsidy: 熊谷市 保育料軽減補助制度 (src/data/grants/city-batch56.ts)
- 埼玉県 熊谷市 kumagaya-housing-purchase: 熊谷市 住宅取得支援補助金 (src/data/grants/city-batch56.ts)
- 埼玉県 熊谷市 kumagaya-infertility: 熊谷市 不妊治療費助成制度 (src/data/grants/city-batch56.ts)
- 埼玉県 熊谷市 kumagaya-infertility-treatment: 熊谷市 不妊治療費助成事業 (src/data/grants/city-batch20.ts)
- 埼玉県 熊谷市 kumagaya-scholarship: 熊谷市 奨学金制度 (src/data/grants/city-batch56.ts)
- 埼玉県 熊谷市 kumagaya-sme-support: 熊谷市 中小企業経営革新支援補助金 (src/data/grants/city-batch56.ts)
```

熊谷市7件の公式調査は途中まで完了しています。まだファイルには追記していません。次チャットではこの調査結果を使って `src/data/grants/verified-local-misc-2026.ts` に7件追記してください。

### 熊谷市7件の補正方針

1. `kumagaya-birth-bonus`
   - 生成データ: 熊谷市 出産祝い金支給制度
   - 補正先候補: `熊谷市 妊婦のための支援給付`
   - 理由: 令和7年4月1日から、旧「出産・子育て応援給付金」は新制度「妊婦のための支援給付」に変更。現行公式制度として、妊婦1人5万円、胎児1人5万円を確認。
   - 公式URL:
     - `https://www.city.kumagaya.lg.jp/kosodate/ninshin_shussan/kodomo/ninsanpu/ninpu-shien.html`
     - `https://www.city.kumagaya.lg.jp/kosodate/ninshin_shussan/kodomo/ninsanpu/syusannkosodategift.html`
   - 旧制度ページでは、出産・子育て応援給付金は令和7年4月1日から妊婦のための支援給付に変わったと確認済み。

2. `kumagaya-childcare-subsidy`
   - 生成データ: 熊谷市 保育料軽減補助制度
   - 補正先候補: `熊谷市 保育料完全無償化`
   - 公式URL:
     - `https://www.city.kumagaya.lg.jp/kosodate/kodomoshisetsu/hoikunyusyo/R8musyoka.html`
     - `https://www.city.kumagaya.lg.jp/kosodate/kodomoshisetsu/hoikunyusyo/musyoka.html`
   - 確認済み内容:
     - 令和7年4月から、熊谷市内に住む保育を必要とする0歳から2歳児クラスの子どもの保育料を無償化。
     - 子どもの年齢、人数、世帯所得に関係なく、保育施設に入所する対象児童の保育料が無償化。
     - 認可外保育施設・一時預かり事業の場合、課税世帯の0歳から2歳児クラスで認可保育施設入所保留など条件を満たす場合、月額42,000円まで。

3. `kumagaya-housing-purchase`
   - 生成データ: 熊谷市 住宅取得支援補助金
   - 補正先候補: `熊谷市 三世代ふれあい家族住宅取得等応援事業`
   - 公式URL:
     - `https://www.city.kumagaya.lg.jp/kenkouhukushi/koureisya/shien/sansedaidoukyohozyo.html`
   - 確認済み内容:
     - 令和8年度、1戸あたり25万円を上限として地域電子マネー「クマPAY」で補助。
     - 親世帯と子世帯が市内で同居または近居し、住宅を新築・購入または増改築した場合に補助。
     - 市外からの転入を伴う新築・購入は市内全域が対象。
     - 転入を伴わない場合は同居または直線距離1.2km以内の近居が対象。
     - 募集開始は令和8年4月1日。予算到達で受付終了。
     - 補助対象費用の1%。市内事業者の場合上限25万円、それ以外は20万円。

4. `kumagaya-infertility`
   - 生成データ: 熊谷市 不妊治療費助成制度
   - 補正先候補: `熊谷市 不妊治療費等助成事業`
   - 公式URL:
     - `https://www.city.kumagaya.lg.jp/about/soshiki/kodomokennkou/kenkosuisin/oshirase/huninntiryou.html`
     - `https://www.city.kumagaya.lg.jp/kurashi/service/hojyojyoseikin/ninshinsyussan/jyoseizigyo/index.html`
   - 確認済み内容:
     - 特定不妊治療、男性不妊治療が対象。
     - 令和4年4月から保険適用移行後の治療も助成対象。年齢要件等で保険適用外となる治療も申請可能。
     - 先進医療は対象外。
     - 治療費助成は自己負担額、1年度あたり上限10万円、通算5年度。
     - 交通費加算あり。県外隣接市町除く医療機関1万円、県内本市・隣接市町除く医療機関5千円、隣接市町2千円。
     - 申請期限は治療終了日の翌日から2年以内。

5. `kumagaya-infertility-treatment`
   - 生成データ: 熊谷市 不妊治療費助成事業
   - 補正先候補: `熊谷市 早期不妊検査費等助成事業`
   - 理由: `kumagaya-infertility` と同一制度にすると内容重複するため、同じ不妊・不育症支援カテゴリ内で公式確認済みの別制度に補正するのがよい。
   - 公式URL:
     - `https://www.city.kumagaya.lg.jp/about/soshiki/kodomokennkou/kenkosuisin/oshirase/huninkensa.html`
     - `https://www.city.kumagaya.lg.jp/kurashi/service/hojyojyoseikin/ninshinsyussan/jyoseizigyo/index.html`
   - 確認済み内容:
     - 令和8年4月1日以降に終了した検査が対象。
     - 不妊検査、不育症検査とも妻の年齢43歳未満。
     - 夫婦一組につき3万円まで、千円未満切捨て、それぞれの検査ごとに1回限り。
     - 夫婦の双方または一方が熊谷市の住民票に記載されていること、市税完納などが条件。
     - 申請期限は検査終了日の属する年度末。令和8年1月1日から令和8年3月31日終了分は令和8年6月30日まで。

6. `kumagaya-scholarship`
   - 生成データ: 熊谷市 奨学金制度
   - 補正先候補: `熊谷市 育英資金制度と入学準備金制度`
   - 公式URL:
     - `https://www.city.kumagaya.lg.jp/kosodate/teate/ikuei.html`
     - `https://www.city.kumagaya.lg.jp/faq/3/31/ta220301_20100120115808281.html`
   - 確認済み内容:
     - 熊谷市育英資金と熊谷市入学準備金は、経済的理由で就学困難な人を対象に無利子で学資を貸与する制度。
     - 育英資金: 高校等 月額1万5千円以内、大学等 月額3万円以内。
     - 返還は貸与終了月の翌月から6か月経過後、貸与月額の半分以上を毎月返還。
     - 令和8年度受付期間は令和8年2月2日から4月6日まで。
     - 入学準備金は高等学校等25万円以内、大学等50万円以内。

7. `kumagaya-sme-support`
   - 生成データ: 熊谷市 中小企業経営革新支援補助金
   - 補正先候補: `熊谷発スタートアップ支援補助金`
   - 理由: 「経営革新計画策定奨励金」も存在するが、検索時の生成データの「中小企業支援」「補助金」文脈では、現行性・金額・対象経費が明確なスタートアップ支援補助金の方が実用情報として強い。必要なら `sourceNote` に補助金関係一覧上で経営革新計画策定奨励金等も確認した旨を書く。
   - 公式URL:
     - `https://www.city.kumagaya.lg.jp/about/soshiki/sangyo/kigyokatsudo/hojyokin/startup-kumagaya.html`
     - `https://www.city.kumagaya.lg.jp/about/soshiki/sangyo/kigyokatsudo/hojyokin/index.html`
     - `https://www.city.kumagaya.lg.jp/about/soshiki/sangyo/kigyokatsudo/hojyokin/sdgs_jgk.html`
   - 確認済み内容:
     - 熊谷スマートシティの趣旨に賛同し、デジタル先端技術などを活用した起業や新事業立上げにチャレンジする事業者を支援。
     - 令和8年度募集期間は令和8年8月31日まで。
     - 令和8年度募集テーマはクライメートテック、ロボット・ドローンなど先端技術活用による社会課題解決、その他市長が認めたもの。
     - 応募対象者は市内に事業所を有し、または設置しようとする中小企業者。
     - 補助率: 通常1/2、若者40歳未満2/3、創業後5年未満2/3。
     - 上限: 1年度500万円、3年度で最大1,000万円。
     - 対象経費: 機械装置・システム構築費、建物費、原材料費・消耗品費、外注費、知的財産関連費、専門家謝金・コンサルティング費、クラウドサービス利用費、広報・マーケティング費。
   - 参考で確認した熊谷市中小企業SDGs経営・ジギョケイ策定支援奨励金:
     - `https://www.city.kumagaya.lg.jp/about/soshiki/sangyo/kigyokatsudo/hojyokin/sdgs_jgk.html`
     - 市内中小企業者、埼玉県SDGsパートナー登録、ジギョケイ策定・経産大臣認定などが条件。

## 熊谷市7件を追記するときの推奨データ設計

- 追記先: `/Users/banseiyuuji/joseikin-navi-site/src/data/grants/verified-local-misc-2026.ts`
- 既存パターンに合わせて、配列末尾の `];` の直前に追加する。
- 各オブジェクトには最低限以下を入れる:
  - `slug`
  - `title`
  - `organization: '熊谷市'`
  - `type: 'local'`
  - `maxAmount`
  - `maxAmountNum`
  - `category`
  - 必要なら `relatedCategories`
  - `prefecture: '埼玉県'`
  - `tags`
  - `eligibility`
  - `applicationPeriod`
  - 必要なら `deadlineDate`
  - `description`
  - `sections`
  - `officialUrl`
  - `sourceName`
  - `sourceUrls`
  - `sourceNote`
  - `verifiedAt: '2026-07-03'`
  - `publishedAt: '2026-07-03'`
- 現在日付はこの引き継ぎ時点で2026-07-03。次チャットの実行日が変わっている場合は、`verifiedAt` と `publishedAt` はその日のISO日付に合わせる。
- 締切が過去・受付終了の場合は `deadlineDate` を過去日にして通常一覧から除外する。ただし熊谷市7件の候補は現時点では全件active扱いでよさそう。
- `maxAmountNum` は万円単位:
  - 妊婦支援給付: 10万円想定。ただし胎児数で変動するので `maxAmount: '妊婦1人5万円・胎児1人5万円'`, `maxAmountNum: 10` が妥当。
  - 保育料完全無償化: 認可外上限月額42,000円を基準に `maxAmountNum: 4.2` が妥当。
  - 三世代住宅: `maxAmountNum: 25`。
  - 不妊治療費等助成: 治療費10万円 + 交通費最大1万円なので、厳密には11万円。表示は「治療費最大10万円・交通費最大1万円」。`maxAmountNum: 11`。
  - 早期不妊検査費等助成: `maxAmountNum: 3`。
  - 育英資金: 大学等月額3万円なので `maxAmountNum: 3`。入学準備金まで含めるなら `maxAmount: '育英資金 大学等月額3万円・入学準備金 大学等50万円以内'`, `maxAmountNum: 50` も可能だが、奨学金slugとしては月額3万円を優先する方が既存の表示に近い。
  - 熊谷発スタートアップ: `maxAmountNum: 1000`。

## 熊谷市7件の次に続く候補

熊谷市7件後の埼玉県未照合候補は、現在のgap順では行田市3件、鴻巣市9件、春日部市が続く見込みです。熊谷市完了後に必ず以下で再計算してください。

```bash
node scripts/audit-raw-verified-gaps.mjs --prefecture 埼玉県 --limit 30
node scripts/audit-raw-verified-gaps.mjs --limit 12
```

## 熊谷市7件追加後に実行する検証コマンド

熊谷市7件を追加したら、以下を実行してください。

```bash
npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts
git diff --check -- src/data/grants/verified-local-misc-2026.ts SAFE_CONTINUATION_PLAN.md tasks/todo.md
node scripts/check-grant-source-urls.mjs --slug kumagaya-birth-bonus --slug kumagaya-childcare-subsidy --slug kumagaya-housing-purchase --slug kumagaya-infertility --slug kumagaya-infertility-treatment --slug kumagaya-scholarship --slug kumagaya-sme-support --concurrency 2 --timeout-ms 120000
node scripts/audit-raw-verified-gaps.mjs --prefecture 埼玉県 --limit 30
node scripts/audit-raw-verified-gaps.mjs --limit 12
node scripts/audit-coverage.mjs
```

熊谷市7件は前回build後7件分に相当します。20件節目にはまだ達しないので、速度優先なら `npm run build` は省略してよいです。次の市区町村を合わせて20件前後に達した時点、県完了時、または公開前にbuildしてください。

## コミット時の注意

熊谷市7件を実装・検証したら、以下3ファイルだけをステージしてコミットしてください。

```bash
git add SAFE_CONTINUATION_PLAN.md tasks/todo.md src/data/grants/verified-local-misc-2026.ts
git commit -m "熊谷市7件を公式補正"
```

Pinterest系やUI系の未コミット変更は、助成金補正作業ではステージしないでください。

## 作業速度を上げるための運用方針

- 1バッチは原則、市区町村単位で9件前後、または20件節目でまとめる。
- 毎バッチで必ずやる:
  - 公式URL確認
  - `eslint`
  - `git diff --check`
  - `check-grant-source-urls`
  - `audit-raw-verified-gaps`
  - `audit-coverage`
  - `SAFE_CONTINUATION_PLAN.md` と `tasks/todo.md` 更新
  - 対象3ファイルだけコミット
- `npm run build` は毎バッチではなく、20〜50件節目、県完了時、または公開前に実行する。
- Web調査は自治体公式ページと公式PDFを優先し、民間まとめサイトは制度探索の補助に留める。`sourceUrls` には原則として公式URLだけを採用する。
- URL監査で外部ポータルや一時的に不安定なURLがfetch failedになった場合、公式自治体URLへ差し替える。

## 最後に確認した外部調査の状態

`agent-reach doctor --json` は以前に実行済み。webはJina Readerで利用可能、Exaは未設定。今回の熊谷市調査は通常web検索と公式ページ閲覧で実施。SNSやログインが必要なサービスは使っていない。

最後に `agent-reach check-update` を大きな調査の締めに実行する運用だったが、熊谷市7件はまだ実装前なので、次チャットで熊谷市Batch 123をコミットする前後に必要なら実行してください。

## 引き継ぎ直後の最短再開手順

1. `/Users/banseiyuuji/joseikin-navi-site` に移動。
2. `git status --short` を確認し、Pinterest系別件だけがdirtyであることを確認。
3. `node scripts/audit-raw-verified-gaps.mjs --prefecture 埼玉県 --limit 25` を実行し、熊谷市7件が先頭であることを確認。
4. このファイルの「熊谷市7件の補正方針」に従い、`src/data/grants/verified-local-misc-2026.ts` へ7件追加。
5. 検証コマンドを実行。
6. `SAFE_CONTINUATION_PLAN.md` と `tasks/todo.md` にBatch 123の結果を記録。
7. 3ファイルだけをコミット: `git commit -m "熊谷市7件を公式補正"`。
8. 続ける場合は、次のgap候補を再計算し、行田市・鴻巣市・春日部市などへ進む。
