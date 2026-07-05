# Context Recovery Handoff 2026-07-03

## Why Codex kept stopping

The thread repeatedly hit the model context window because the working context became too large:

- `SAFE_CONTINUATION_PLAN.md` is about 678KB and 5,300+ lines.
- `tasks/todo.md` is about 228KB and 800+ lines.
- The active goal continuation also injects a large persistent objective and usage history.
- Some previous commands searched or printed broad ranges from large logs, producing tens of thousands of tokens.
- Web/Jina/search outputs for official-source research add more context quickly.

The codebase is not blocked. The issue is context management in this long-running thread.

## Immediate working rule

Do not read large continuation files wholesale.

Use these instead:

```bash
cat HANDOFF_CONTEXT_RECOVERY_2026-07-03.md
tail -40 tasks/todo.md
node scripts/audit-raw-verified-gaps.mjs --limit 25
git status --short --branch
```

If a large file must be searched, use narrow `rg` queries and cap output:

```bash
rg -n "Batch 141|次回候補|一関市" SAFE_CONTINUATION_PLAN.md tasks/todo.md
```

Avoid commands that print large file regions or broad search results across `SAFE_CONTINUATION_PLAN.md`.

## Current repository state

- Repository: `/Users/banseiyuuji/joseikin-navi-site`
- Branch: `main`, ahead of `origin/main` by 200+ commits after the latest completed local commits.
- Last completed grant-data commit: `git log -1` の最新助成金データ補正コミット
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 170 completed in progress:

- 仙台市2件・大崎市3件を公式補正
- 対象: `sendai-startup-support` / `sendai-telework-bonus` / `osaki-birth-bonus` / `osaki-bousai-equipment` / `osaki-childcare-subsidy`
- `sendai-startup-support` は特定創業支援等事業の支援証明書へ補正。
- `sendai-telework-bonus` は仙台市業務効率化支援事業補助金（業務効率化サポート枠）へ補正。
- `osaki-birth-bonus` は妊婦のための支援給付金へ補正。
- `osaki-bousai-equipment` は令和8年度エコ改善推進事業補助金（蓄電池・V2H等）へ補正。
- `osaki-childcare-subsidy` は物価高対応子育て応援手当の受付終了扱いへ補正。
- 宮城県 raw gap: `22 -> 17`
- 全国 raw gap: `2168 -> 2163`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,805件生成、`/grant/[slug]` は2,930件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 大崎市raw gap:
  - `osaki-housing-reform`
  - `osaki-newlywed-rent`
  - `osaki-nursing-home-reform`
  - `osaki-school-lunch`
  - `osaki-startup-support`
- 以降は `node scripts/audit-raw-verified-gaps.mjs --limit 25` で確認

## Current in-progress update

- Batch 172 completed:
- 対象: `osaki-telework-bonus` / `natori-birth-bonus` / `natori-childcare-subsidy` / `natori-education-support` / `natori-elderly-support`
- Batch 173 completed:
- 対象: `natori-housing-purchase` / `natori-infertility` / `natori-nursing-equipment` / `natori-scholarship` / `natori-seismic-diagnosis`
- `natori-housing-purchase` は新婚世帯等マイホーム応援事業補助金へ補正。
- `natori-infertility` は不妊治療費助成事業（先進医療）へ補正。
- `natori-nursing-equipment` は在宅ねたきり老人等紙おむつ支給事業へ補正。
- `natori-scholarship` は母子父子寡婦福祉資金（修学資金等）の案内へ補正。
- `natori-seismic-diagnosis` は木造住宅耐震診断助成事業へ補正。
- Batch 174 completed:
- 対象: `natori-sme-support` / `natori-vaccination-support`
- `natori-sme-support` は中小企業融資制度・事業継続力強化計画策定奨励金へ補正。
- `natori-vaccination-support` は高齢者向け予防接種費用助成へ補正。
- 宮城県 raw gap: `2 -> 0`
- 全国 raw gap: `2148 -> 2146`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 6件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,509件、宮城県ローカル公式確認済みは60件。
- `npm run build`: 成功。静的ページ5,831件生成、`/grant/[slug]` は2,947件相当。
- Batch 175 completed:
- 対象: `ayabe-aged-meal-delivery` / `ayabe-child-third-free` / `ayabe-culture-experience` / `ayabe-dementia-family` / `ayabe-landslide-sensor` / `ayabe-postpartum-care` / `ayabe-uij-housing`
- `ayabe-aged-meal-delivery` は在宅高齢者等配食サービス事業へ補正。
- `ayabe-child-third-free` は出産・子育て応援事業へ補正。
- `ayabe-culture-experience` は日本に伝わる文化体験フェアへ補正。
- `ayabe-dementia-family` は認知症高齢者支援事業（GPS機器の利用助成）へ補正。
- `ayabe-landslide-sensor` は木造住宅本格耐震改修事業へ補正。
- `ayabe-postpartum-care` は産後ケア事業へ補正。
- `ayabe-uij-housing` は定住促進事業費補助金・水源の里定住支援給付金へ補正。
- 京都府 raw gap: `63 -> 56`
- 全国 raw gap: `2146 -> 2139`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 13件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,516件、京都府ローカル公式確認済みは25件。
- `npm run build`: 成功。静的ページ5,847件生成、`/grant/[slug]` は2,954件相当。
- Batch 176 completed:
- 対象: `uji-aged-meal-delivery` / `uji-bicycle-helmet` / `uji-child-third-free` / `uji-culture-experience` / `uji-dementia-family` / `uji-elderly-medical` / `uji-landslide-sensor` / `uji-living-support` / `uji-postpartum-care` / `uji-tea-business` / `uji-uij-housing`
- `uji-aged-meal-delivery` は一人暮らし高齢者等給食サービス事業補助金へ補正。
- `uji-bicycle-helmet` は自転車ヘルメット購入補助の公式確認不可として掲載停止。
- `uji-child-third-free` は宇治市伴走型支援事業（妊婦支援給付金）へ補正。
- `uji-culture-experience` は宇治市少年少女合唱団体験入団会の終了扱いへ補正。
- `uji-dementia-family` は認知症高齢者等安心見守りGPS貸与事業へ補正。
- `uji-elderly-medical` は老人に対する宇治市福祉医療費支給事業へ補正。
- `uji-landslide-sensor` は木造住宅の耐震改修等工事補助へ補正。
- `uji-living-support` は生活困窮者自立支援制度へ補正。
- `uji-postpartum-care` は産後ケアサービスへ補正。
- `uji-tea-business` は宇治茶おもてなし推進事業へ補正。
- `uji-uij-housing` は新婚世帯住宅確保おうえん事業補助金へ補正。
- 京都府 raw gap: `56 -> 45`
- 全国 raw gap: `2139 -> 2128`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 26件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,526件、京都府ローカル公式確認済みは35件。
- `npm run build`: 成功。静的ページ5,875件生成、`/grant/[slug]` は2,965件相当。
- Batch 177 completed:
- 対象: `kameoka-aged-meal-delivery` / `kameoka-bicycle-helmet` / `kameoka-child-third-free` / `kameoka-culture-experience` / `kameoka-dementia-family` / `kameoka-landslide-sensor` / `kameoka-postpartum-care` / `kameoka-tea-business` / `kameoka-uij-housing`
- `kameoka-aged-meal-delivery` は高齢者配食サービス助成の公式確認不可・廃止記録ありとして掲載停止。
- `kameoka-bicycle-helmet` は自転車用ヘルメット購入補助金へ補正。
- `kameoka-child-third-free` は妊婦のための支援給付へ補正。
- `kameoka-culture-experience` は地球環境子ども村 かめおか自然アカデミー2026へ補正。
- `kameoka-dementia-family` は認知症高齢者等居場所確認専用端末機貸与事業へ補正。
- `kameoka-landslide-sensor` は木造住宅耐震改修事業費補助金へ補正。
- `kameoka-postpartum-care` は産後ケア事業へ補正。
- `kameoka-tea-business` は特産品小豆生産振興助成事業へ補正。
- `kameoka-uij-housing` は移住促進特別区域内の空き家活用支援へ補正。
- 京都府 raw gap: `45 -> 36`
- 全国 raw gap: `2128 -> 2119`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 24件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,535件、京都府ローカル公式確認済みは44件。
- `npm run build`: 初回code 137でOS側終了。`NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build` で再実行し成功。静的ページ5,891件生成、`/grant/[slug]` は2,974件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため保留し、京都市raw gap（`kyoto-city-birth-bonus`, `kyoto-city-energy-support`, `kyoto-city-housing-purchase`, `kyoto-city-scholarship`, `kyoto-city-study-abroad`）へ進む。
- Batch 178 completed:
- 対象: `kyoto-city-birth-bonus` / `kyoto-city-energy-support` / `kyoto-city-housing-purchase` / `kyoto-city-scholarship` / `kyoto-city-study-abroad`
- `kyoto-city-birth-bonus` は妊婦等支援事業（妊婦支援給付金）へ補正。
- `kyoto-city-energy-support` は令和8年度京都市住宅の自家消費型太陽光発電設備等設置補助金へ補正。
- `kyoto-city-housing-purchase` は京都安心すまい応援金へ補正。
- `kyoto-city-scholarship` は令和8年度京都市高校進学・修学支援金支給事業へ補正。
- `kyoto-city-study-abroad` は市立高校生「海外探Q留学」支援事業へ補正。
- 京都府 raw gap: `36 -> 31`
- 全国 raw gap: `2119 -> 2114`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 10件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,538件、京都府ローカル公式確認済みは47件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,902件生成、`/grant/[slug]` は2,979件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。京都府庁2件（`kyoto-education-global`, `kyoto-machiya-renovation`）または城陽市raw gapへ進む。
- Batch 179 completed:
- 対象: `kyoto-education-global` / `kyoto-machiya-renovation`
- `kyoto-education-global` は京の高校生「海外探Q留学」応援事業へ補正し、2026年度募集終了として整理。
- `kyoto-machiya-renovation` は令和8年度から拡充された京都市 京町家改修補助金へ補正。
- 京都府 raw gap: `31 -> 29`
- 全国 raw gap: `2114 -> 2112`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,539件、京都府ローカル公式確認済みは48件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,907件生成、`/grant/[slug]` は2,981件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。城陽市raw gap（`joyo-aged-meal-delivery`, `joyo-bicycle-helmet`, `joyo-child-third-free`, `joyo-culture-experience`, `joyo-dementia-family` など）へ進む。
- Batch 180 completed:
- 対象: `joyo-aged-meal-delivery` / `joyo-bicycle-helmet` / `joyo-child-third-free` / `joyo-culture-experience` / `joyo-dementia-family`
- `joyo-aged-meal-delivery` は高齢者配食サービス助成の公式確認不可として掲載停止。
- `joyo-bicycle-helmet` は自転車ヘルメット購入補助の公式確認不可として掲載停止。
- `joyo-child-third-free` は第3子以降出産祝い金の公式確認不可として掲載停止。
- `joyo-culture-experience` は個人向け補助金としての公式確認不可として掲載停止。
- `joyo-dementia-family` は徘徊高齢者家族支援サービス事業へ補正。
- 京都府 raw gap: `29 -> 24`
- 全国 raw gap: `2112 -> 2107`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 13件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,544件、京都府ローカル公式確認済みは53件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,917件生成、`/grant/[slug]` は2,986件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。城陽市残り4件（`joyo-landslide-sensor`, `joyo-postpartum-care`, `joyo-tea-business`, `joyo-uij-housing`）へ進む。

## Recommended execution pattern

For the next batch, keep each turn small:

1. Research at most 5 to 8 related official pages at a time.
2. Store concise facts in the working response, not full scraped page text.
3. Add verified records in one patch.
4. Run targeted validation before broad validation.
5. Commit only:
   - `src/data/grants/verified-local-misc-2026.ts`
   - `SAFE_CONTINUATION_PLAN.md`
   - `tasks/todo.md`
   - this recovery file only if edited.

## Current progress update 2026-07-05 Batch 181

- Batch 181 completed:
- 対象: `joyo-landslide-sensor` / `joyo-postpartum-care` / `joyo-tea-business` / `joyo-uij-housing`
- `joyo-landslide-sensor` は土砂災害警戒区域安全対策補助金としての現行公式補助確認不可として掲載停止。
- `joyo-postpartum-care` は産後ケア事業の利用助成へ補正。
- `joyo-tea-business` はアクティブ事業所おうえん補助金（新商品開発事業）へ補正。
- `joyo-uij-housing` は三世代近居・同居住宅支援事業補助金へ補正。
- 京都府 raw gap: `24 -> 20`
- 全国 raw gap: `2107 -> 2103`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 12件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,548件、京都府ローカル公式確認済みは57件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,924件生成、`/grant/[slug]` は2,990件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は舞鶴市raw gapへ進む。

## Current progress update 2026-07-05 Batch 182

- Batch 182 completed:
- 対象: `maizuru-aged-meal-delivery` / `maizuru-bicycle-helmet` / `maizuru-child-third-free` / `maizuru-culture-experience` / `maizuru-dementia-family` / `maizuru-landslide-sensor` / `maizuru-postpartum-care` / `maizuru-tea-business` / `maizuru-uij-housing`
- `maizuru-aged-meal-delivery` は高齢者配食サービス助成の公式助成額確認不可として掲載停止。
- `maizuru-bicycle-helmet` は舞鶴市自転車乗車用ヘルメット購入費補助金へ補正。
- `maizuru-child-third-free` は第3子以降出産祝い金の公式確認不可として掲載停止。
- `maizuru-culture-experience` は個人向け補助金としての公式確認不可として掲載停止。
- `maizuru-dementia-family` は認知症高齢者等位置探索サービス（GPS）利用支援事業へ補正。
- `maizuru-landslide-sensor` は危険住宅等土砂災害対策改修支援事業補助金へ補正。
- `maizuru-postpartum-care` は令和8年度 舞鶴市産後ケア事業へ補正。
- `maizuru-tea-business` はまいづる産品ブランド力向上支援事業補助金へ補正。
- `maizuru-uij-housing` はまちなかエリア定住促進事業補助金へ補正。
- 京都府 raw gap: `20 -> 11`
- 全国 raw gap: `2103 -> 2094`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 27件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,557件、京都府ローカル公式確認済みは66件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,941件生成、`/grant/[slug]` は2,999件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は福知山市raw gapへ進む。

## If the current thread keeps overflowing

Start a fresh thread and read only this file plus the current repository state. Do not replay the whole old chat.

Minimum commands in a fresh thread:

```bash
cd /Users/banseiyuuji/joseikin-navi-site
cat HANDOFF_CONTEXT_RECOVERY_2026-07-03.md
git status --short --branch
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

## Current progress update 2026-07-05 Batch 183

- Batch 183 completed:
- 対象: `fukuchiyama-aged-meal-delivery` / `fukuchiyama-bicycle-helmet` / `fukuchiyama-child-third-free` / `fukuchiyama-culture-experience` / `fukuchiyama-dementia-family` / `fukuchiyama-landslide-sensor` / `fukuchiyama-postpartum-care` / `fukuchiyama-tea-business` / `fukuchiyama-uij-housing`
- `fukuchiyama-aged-meal-delivery` は福知山市在宅高齢者配食サービスへ補正。
- `fukuchiyama-bicycle-helmet` は福知山市自転車通学生徒用ヘルメット補助金へ補正。
- `fukuchiyama-child-third-free` は第3子以降出産祝い金の公式確認不可として掲載停止。
- `fukuchiyama-culture-experience` は個人向け子ども文化芸術体験助成の公式確認不可として掲載停止。
- `fukuchiyama-dementia-family` は福知山市認知症高齢者等見守りサービス事業補助金へ補正。
- `fukuchiyama-landslide-sensor` は土砂災害警戒区域安全対策補助金の公式確認不可として掲載停止。
- `fukuchiyama-postpartum-care` は福知山市産後ケア事業へ補正。
- `fukuchiyama-tea-business` は福知山市農業者販路開拓事業補助金へ補正。
- `fukuchiyama-uij-housing` は福知山市農山村地域空き家改修費補助金へ補正。
- 京都府 raw gap: `11 -> 2`
- 全国 raw gap: `2094 -> 2085`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 25件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,566件、京都府ローカル公式確認済みは75件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,956件生成、`/grant/[slug]` は3,008件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は熊本県raw gapへ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 184

- Batch 184 completed:
- 対象: `kumamoto-nursing-care-robot` / `kumamoto-block-wall-removal` / `kumamoto-child-medical-aid` / `kumamoto-city-birth-bonus` / `kumamoto-city-childcare-subsidy`
- `kumamoto-nursing-care-robot` は熊本県介護テクノロジー定着支援事業費補助金へ補正。
- `kumamoto-block-wall-removal` は熊本市公道等に面するブロック塀等の撤去補助へ補正。
- `kumamoto-child-medical-aid` は熊本市こども医療費助成（ひまわりカード）へ補正。
- `kumamoto-city-birth-bonus` は熊本市ようこそ赤ちゃんプロジェクト妊婦支援給付金へ補正。
- `kumamoto-city-childcare-subsidy` は熊本市物価高対応子育て応援手当へ補正。
- 熊本県 raw gap: `35 -> 30`
- 全国 raw gap: `2085 -> 2080`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 15件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,571件、熊本県ローカル公式確認済みは26件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,963件生成、`/grant/[slug]` は3,013件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は熊本県raw gapの `kumamoto-city-housing-eco` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 185

- Batch 185 completed:
- 対象: `kumamoto-city-housing-eco` / `kumamoto-city-housing-reconstruction` / `kumamoto-city-school-lunch` / `kumamoto-city-seismic-diagnosis` / `kumamoto-city-senior-medical`
- `kumamoto-city-housing-eco` は熊本市省エネルギー機器等導入推進事業補助金へ補正。
- `kumamoto-city-housing-reconstruction` は熊本市空き家のリフォーム補助へ補正。
- `kumamoto-city-school-lunch` は熊本市令和8年度就学援助へ補正。
- `kumamoto-city-seismic-diagnosis` は熊本市戸建木造住宅の耐震改修等事業（改修一括）へ補正。
- `kumamoto-city-senior-medical` は熊本市重度心身障がい者（児）医療費助成へ補正。
- 熊本県 raw gap: `30 -> 25`
- 全国 raw gap: `2080 -> 2075`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 15件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,576件、熊本県ローカル公式確認済みは31件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,969件生成、`/grant/[slug]` は3,018件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は熊本県raw gapの `kumamoto-city-uij-turn` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 186

- Batch 186 completed:
- 対象: `kumamoto-city-uij-turn` / `kumamoto-elderly-taxi` / `kumamoto-health-checkup-subsidy` / `kumamoto-juutaku-reform` / `kumamoto-scholarship-repayment`
- `kumamoto-city-uij-turn` は熊本市転居費等支援金へ補正。
- `kumamoto-elderly-taxi` は高齢者のみ対象のタクシー利用助成を公式確認できないため掲載停止。
- `kumamoto-health-checkup-subsidy` は熊本市特定健診・特定保健指導へ補正。
- `kumamoto-juutaku-reform` は一般住宅リフォーム助成金として公式確認できないため掲載停止。
- `kumamoto-scholarship-repayment` は熊本市独自奨学金返還支援制度として公式確認できないため掲載停止。
- 熊本県 raw gap: `25 -> 20`
- 全国 raw gap: `2075 -> 2070`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 15件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,581件、熊本県ローカル公式確認済みは36件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,976件生成、`/grant/[slug]` は3,023件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は熊本県raw gapの `kumamoto-school-lunch-subsidy` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 187

- Batch 187 completed:
- 対象: `kumamoto-school-lunch-subsidy` / `kumamoto-startup-support` / `kumamoto-water-saving` / `amakusa-block-wall-removal` / `amakusa-child-medical-aid`
- `kumamoto-school-lunch-subsidy` は既存の熊本市令和8年度就学援助と重複し、生成データの第3子以降給食費補助として公式確認できないため掲載停止。
- `kumamoto-startup-support` は熊本市商店街出店支援事業へ補正。
- `kumamoto-water-saving` は熊本市雨水貯留施設補助制度へ補正。
- `amakusa-block-wall-removal` は天草市危険ブロック塀等安全確保支援事業へ補正。
- `amakusa-child-medical-aid` は天草市子ども医療費助成制度へ補正。
- 熊本県 raw gap: `20 -> 15`
- 全国 raw gap: `2070 -> 2065`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 10件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,586件、熊本県ローカル公式確認済みは41件。
- 初回 `npm run build` は `relatedCategories` の不正値 `business` でTypeScript停止したため `living` に修正。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,982件生成、`/grant/[slug]` は3,028件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は熊本県raw gapの `amakusa-elderly-taxi` / `amakusa-health-checkup-subsidy` / `amakusa-scholarship-repayment` / `amakusa-school-lunch-subsidy` / `amakusa-water-saving` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 188

- Batch 188 completed:
- 対象: `amakusa-elderly-taxi` / `amakusa-health-checkup-subsidy` / `amakusa-scholarship-repayment` / `amakusa-school-lunch-subsidy` / `amakusa-water-saving`
- `amakusa-elderly-taxi` は天草市福祉タクシー利用券・介護タクシー利用券へ補正。
- `amakusa-health-checkup-subsidy` は天草市国保加入者限定（30～74歳の奇数年齢）人間ドックへ補正。
- `amakusa-scholarship-repayment` は一般的な奨学金返還支援制度として公式確認できないため掲載停止。公式の奨学金貸与制度・看護師等修学資金貸与制度を根拠として整理。
- `amakusa-school-lunch-subsidy` は令和8年度天草市就学援助制度へ補正。
- `amakusa-water-saving` は雨水タンク設置補助金として公式確認できないため掲載停止。合併浄化槽補助とは混同しない。
- 熊本県 raw gap: `15 -> 10`
- 全国 raw gap: `2065 -> 2060`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 12件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,590件、熊本県ローカル公式確認済みは45件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,991件生成、`/grant/[slug]` は3,033件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は熊本県raw gapの `yatsushiro-block-wall-removal` / `yatsushiro-child-medical-aid` / `yatsushiro-elderly-taxi` / `yatsushiro-health-checkup-subsidy` / `yatsushiro-juutaku-reform` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 189

- Batch 189 completed:
- 対象: `yatsushiro-block-wall-removal` / `yatsushiro-child-medical-aid` / `yatsushiro-elderly-taxi` / `yatsushiro-health-checkup-subsidy` / `yatsushiro-juutaku-reform`
- `yatsushiro-block-wall-removal` は八代市危険ブロック塀等除却促進事業へ補正。
- `yatsushiro-child-medical-aid` は八代市こども医療費助成制度へ補正。
- `yatsushiro-elderly-taxi` は八代市高齢者外出支援事業へ補正。
- `yatsushiro-health-checkup-subsidy` は八代市人間ドックの情報提供報奨金事業へ補正。
- `yatsushiro-juutaku-reform` は八代市空き家バンク活用促進事業補助金へ補正。
- 熊本県 raw gap: `10 -> 5`
- 全国 raw gap: `2060 -> 2055`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 12件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,595件、熊本県ローカル公式確認済みは50件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ5,999件生成、`/grant/[slug]` は3,038件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は熊本県raw gap残り5件 `yatsushiro-migration-support` / `yatsushiro-scholarship-repayment` / `yatsushiro-school-lunch-subsidy` / `yatsushiro-startup-support` / `yatsushiro-water-saving`。これで熊本県raw gap 0件予定。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 190

- Batch 190 completed:
- 対象: `yatsushiro-migration-support` / `yatsushiro-scholarship-repayment` / `yatsushiro-school-lunch-subsidy` / `yatsushiro-startup-support` / `yatsushiro-water-saving`
- `yatsushiro-migration-support` は八代市移住・定住促進補助金へ補正。
- `yatsushiro-scholarship-repayment` は一般的な奨学金返還支援制度として公式確認できないため掲載停止。公式の奨学資金貸付制度へ誘導。
- `yatsushiro-school-lunch-subsidy` は令和8年度八代市学校給食費負担軽減事業へ補正。
- `yatsushiro-startup-support` は八代市ふるさとスタートアップ支援事業補助金へ補正。令和8年度募集記事はブラウザ検索で確認できるがHTTP検査では404となるため、sourceUrlsは200応答する交付要綱と公式案内ページに限定。
- `yatsushiro-water-saving` は雨水タンク設置補助金として公式確認できないため掲載停止。浄化槽補助・水道施設補助とは混同しない。
- 熊本県 raw gap: `5 -> 0`
- 全国 raw gap: `2055 -> 2050`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 11件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,599件、熊本県ローカル公式確認済みは54件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,006件生成、`/grant/[slug]` は3,043件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの `isesaki-birth-bonus` / `isesaki-bousai-equipment` / `isesaki-childcare-subsidy` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 191

- Batch 191 completed:
- 対象: `isesaki-birth-bonus` / `isesaki-bousai-equipment` / `isesaki-childcare-subsidy` / `isesaki-disability-medical` / `isesaki-energy-support`
- `isesaki-birth-bonus` は伊勢崎市第3子以降出産祝金へ補正。
- `isesaki-bousai-equipment` は伊勢崎市消防本部の住宅用火災警報器の取付け・取替え支援事業へ補正。購入補助金ではない。
- `isesaki-childcare-subsidy` は令和8年度利用者負担（保育料）の多子軽減へ補正。
- `isesaki-disability-medical` は伊勢崎市福祉医療制度（重度心身障害者等）へ補正。
- `isesaki-energy-support` は伊勢崎市家庭用脱炭素化設備導入補助金へ補正。省エネ家電購入補助ではない。
- 群馬県 raw gap: `69 -> 64`
- 全国 raw gap: `2050 -> 2045`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,604件、群馬県ローカル公式確認済みは23件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,016件生成、`/grant/[slug]` は3,048件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの伊勢崎市残り5件 `isesaki-newlywed-rent` / `isesaki-nursing-home-reform` / `isesaki-school-lunch` / `isesaki-startup-support` / `isesaki-telework-bonus`。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 192

- Batch 192 completed:
- 対象: `isesaki-newlywed-rent` / `isesaki-nursing-home-reform` / `isesaki-school-lunch` / `isesaki-startup-support` / `isesaki-telework-bonus`
- `isesaki-newlywed-rent` は新婚世帯向け家賃補助制度として公式確認できないため掲載停止。市営住宅の新婚世帯区分とは混同しない。
- `isesaki-nursing-home-reform` は伊勢崎市住宅改造費の補助へ補正。
- `isesaki-school-lunch` は伊勢崎市学校給食費無償化及び学校給食費助成金事業へ補正。
- `isesaki-startup-support` は伊勢崎市創業促進・事業承継サポート補助金へ補正。
- `isesaki-telework-bonus` は市独自テレワーク推進補助金として公式確認できないため掲載停止。国の人材確保等支援助成金（テレワークコース）案内とは混同しない。
- 群馬県 raw gap: `64 -> 59`
- 全国 raw gap: `2045 -> 2040`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,609件、群馬県ローカル公式確認済みは28件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,025件生成、`/grant/[slug]` は3,053件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの館林市 `tatebayashi-birth-bonus` / `tatebayashi-childcare-subsidy` / `tatebayashi-elderly-support` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 193

- Batch 193 completed:
- 対象: `tatebayashi-birth-bonus` / `tatebayashi-childcare-subsidy` / `tatebayashi-elderly-support` / `tatebayashi-housing-purchase` / `tatebayashi-housing-reform`
- `tatebayashi-birth-bonus` は館林市こども誕生祝金へ補正。
- `tatebayashi-childcare-subsidy` は館林市妊婦等包括相談支援事業及び妊婦のための支援給付へ補正。
- `tatebayashi-elderly-support` は館林市認知症高齢者等事前登録事業（どこシル伝言板見守りシール）へ補正。
- `tatebayashi-housing-purchase` は館林市移住定住ウェルカム支援金へ補正。
- `tatebayashi-housing-reform` は館林市住宅リフォーム資金助成金へ補正。
- 群馬県 raw gap: `59 -> 54`
- 全国 raw gap: `2040 -> 2035`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 10件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,614件、群馬県ローカル公式確認済みは33件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,035件生成、`/grant/[slug]` は3,058件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの館林市残り5件 `tatebayashi-infertility` / `tatebayashi-migration-support` / `tatebayashi-nursing-equipment` / `tatebayashi-scholarship` / `tatebayashi-seismic-diagnosis`。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 194

- Batch 194 completed:
- 対象: `tatebayashi-infertility` / `tatebayashi-migration-support` / `tatebayashi-nursing-equipment` / `tatebayashi-scholarship` / `tatebayashi-seismic-diagnosis` / `tatebayashi-sme-support`
- `tatebayashi-infertility` は館林市不妊治療費等助成事業へ補正。
- `tatebayashi-migration-support` は館林市わくわく地方生活実現支援金へ補正。令和7年度受付終了、令和8年度受付開始時期未定として整理。
- `tatebayashi-nursing-equipment` は館林市高齢者福祉サービスの尿漏れパット給付へ補正。
- `tatebayashi-scholarship` は館林市奨学資金へ補正。
- `tatebayashi-seismic-diagnosis` は館林市木造住宅耐震診断・耐震改修補助へ補正。
- `tatebayashi-sme-support` は館林市展示会活用支援助成金へ補正。
- 館林市 raw gap 0件達成。
- 群馬県 raw gap: `54 -> 48`
- 全国 raw gap: `2035 -> 2029`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 11件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,619件、群馬県ローカル公式確認済みは38件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,045件生成、`/grant/[slug]` は3,064件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの桐生市 `kiryu-barrier-free` / `kiryu-birth-bonus` / `kiryu-birth-bonus-v2` / `kiryu-bousai-equipment` / `kiryu-childcare-subsidy` 以降へ進む。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。
