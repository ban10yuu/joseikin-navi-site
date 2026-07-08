# Context Recovery Handoff 2026-07-03

## 2026-07-05 context overflow fix

Do not read this file from the top during normal resume. Start with `CONTEXT_START_HERE.md`, then use `tail -n 120 HANDOFF_CONTEXT_RECOVERY_2026-07-03.md` only if needed.

The long-running persistent goal was marked `blocked` on 2026-07-05 because it had accumulated 25M+ tokens and repeatedly caused context-window failures. Continue manually in small batches instead of relying on the old auto-continuation goal.

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

## Current progress update 2026-07-05 Batch 195

- Batch 195 completed:
- 対象: `kiryu-barrier-free` / `kiryu-birth-bonus` / `kiryu-birth-bonus-v2` / `kiryu-bousai-equipment` / `kiryu-childcare-subsidy` / `kiryu-childcare-subsidy-v2` / `kiryu-disability-medical` / `kiryu-disability-medical-v2` / `kiryu-elderly-support` / `kiryu-energy-support`
- `kiryu-barrier-free` は桐生市在宅高齢者環境整備事業（高齢者住宅改造補修助成）へ補正。
- `kiryu-birth-bonus` は桐生市妊婦のための支援給付事業へ補正。
- `kiryu-birth-bonus-v2` は出産祝い金としての独立制度を公式確認できないため、妊婦支援給付・国保出産育児一時金との重複として掲載停止。
- `kiryu-bousai-equipment` は家庭用防災資機材購入補助金として公式確認できないため掲載停止。地域防災計画上の自主防災組織向け資機材とは混同しない。
- `kiryu-childcare-subsidy` は幼児教育・保育の無償化へ補正。
- `kiryu-childcare-subsidy-v2` は独立した保育料軽減補助金として確認できず、幼児教育・保育無償化との重複として掲載停止。
- `kiryu-disability-medical` は桐生市福祉医療費の助成（重度心身障害者等）へ補正。
- `kiryu-disability-medical-v2` は重度障がい者医療費助成の重複として掲載停止。
- `kiryu-elderly-support` は地域自立生活支援事業「食」の自立支援事業へ補正。
- `kiryu-energy-support` は令和8年度環境都市推進補助金の蓄電池設備設置補助へ補正。
- 群馬県 raw gap: `48 -> 38`
- 全国 raw gap: `2029 -> 2019`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 14件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,629件、群馬県ローカル公式確認済みは48件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,059件生成、`/grant/[slug]` は3,074件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの桐生市残り `kiryu-housing-reform` / `kiryu-newlywed-rent` / `kiryu-nursing-equipment` / `kiryu-nursing-home-reform` / `kiryu-scholarship` など。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 196

- Batch 196 completed:
- 対象: `kiryu-housing-reform` / `kiryu-newlywed-rent` / `kiryu-nursing-equipment` / `kiryu-nursing-home-reform` / `kiryu-scholarship`
- `kiryu-housing-reform` は桐生市きりゅう暮らし応援事業（住宅リフォーム助成）補助金へ補正。
- `kiryu-newlywed-rent` は結婚新生活支援補助金・家賃補助として確認できないため、公式に確認できる黒保根地域定住促進奨励金の結婚祝金へ補正。
- `kiryu-nursing-equipment` は在宅の要介護（支援）者による福祉用具の購入へ補正。
- `kiryu-nursing-home-reform` は要介護（支援）者の住宅改修へ補正。市独自上乗せ最大15万円は確認不可。
- `kiryu-scholarship` は桐生市奨学資金制度へ補正。
- 群馬県 raw gap: `38 -> 33`
- 全国 raw gap: `2019 -> 2014`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 9件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,633件、群馬県ローカル公式確認済みは52件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,067件生成、`/grant/[slug]` は3,079件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの桐生市残り `kiryu-school-lunch` / `kiryu-seismic-diagnosis` / `kiryu-telework-bonus` / `kiryu-uij-turn`。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 197

- Batch 197 completed:
- 対象: `kiryu-school-lunch` / `kiryu-seismic-diagnosis` / `kiryu-uij-turn` / `kiryu-telework-bonus`
- `kiryu-school-lunch` は桐生市学校給食費相当額補助事業へ補正。令和8年度から市立小学校・義務教育学校の給食費無償化も確認。
- `kiryu-seismic-diagnosis` は木造住宅の耐震診断技術者派遣・耐震改修補助へ補正。耐震診断は無料、耐震改修は最大100万円。
- `kiryu-uij-turn` は桐生市移住支援補助金へ補正。単身60万円、世帯100万円、18歳未満1人100万円加算。
- `kiryu-telework-bonus` は桐生市移住支援補助金のテレワーク要件と重複するため掲載停止。生成データの独立したテレワーク環境整備費最大20万円は確認不可。
- 桐生市 raw gap 0件達成。
- 群馬県 raw gap: `33 -> 29`
- 全国 raw gap: `2014 -> 2010`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 10件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,637件、群馬県ローカル公式確認済みは56件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,072件生成、`/grant/[slug]` は3,083件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの高崎市 `takasaki-birth-bonus` / `takasaki-child-medical` / `takasaki-childcare-subsidy` / `takasaki-elderly-support` / `takasaki-infertility` など。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 198

- Batch 198 completed:
- 対象: `takasaki-birth-bonus` / `takasaki-child-medical` / `takasaki-childcare-subsidy` / `takasaki-elderly-support` / `takasaki-infertility`
- `takasaki-birth-bonus` は令和8年4月開始の高崎市出産お祝い金へ補正。新生児1人につき高崎通貨3万円分。
- `takasaki-child-medical` は高崎市福祉医療費助成の子ども医療へ補正。高校3年生世代までが対象。
- `takasaki-childcare-subsidy` は認可外保育施設第3子以降3歳未満児保育料等補助事業へ補正。月額上限24,000円。
- `takasaki-elderly-support` は高齢者等あんしん見守りシステムへ補正。緊急通報装置・見守りセンサーの設置と貸し出しは無料。
- `takasaki-infertility` は生殖補助医療費助成・一般不妊治療費等助成へ補正。
- 群馬県 raw gap: `29 -> 24`
- 全国 raw gap: `2010 -> 2005`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 11件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,642件、群馬県ローカル公式確認済みは61件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,080件生成、`/grant/[slug]` は3,088件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの高崎市残り `takasaki-nursing-equipment` / `takasaki-scholarship` / `takasaki-seismic-diagnosis` / `takasaki-sme-support`。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 199

- Batch 199 completed:
- 対象: `takasaki-nursing-equipment` / `takasaki-scholarship` / `takasaki-seismic-diagnosis` / `takasaki-sme-support`
- `takasaki-nursing-equipment` は高崎市おむつ給付サービス事業へ補正。65歳以上で常時おむつを必要とする要介護1以上等の人に、月額5,000円を上限におむつ配達。
- `takasaki-scholarship` は高崎市奨学資金制度へ補正。高校等は年額24万円、大学等は年額60万円の無利子貸与。令和8年度募集は2026年2月27日に受付終了。
- `takasaki-seismic-diagnosis` は高崎市緊急耐震対策事業の木造住宅耐震診断・補強設計・耐震改修等補助へ補正。耐震診断最大5万円、耐震改修最大140万円。
- `takasaki-sme-support` は高崎市中小企業経営安定化助成金へ補正。生成データの展示会・広告・IT導入等最大50万円は公式確認できず、事業所税負担軽減の現行公式制度を採用。
- 高崎市 raw gap 0件達成。
- 群馬県 raw gap: `24 -> 20`
- 全国 raw gap: `2005 -> 2001`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,645件、群馬県ローカル公式確認済みは64件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,087件生成、`/grant/[slug]` は3,093件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの前橋市 `maebashi-afterschool` / `maebashi-birth-bonus` / `maebashi-disability-medical` / `maebashi-elderly-support` / `maebashi-housing-acquisition` など。
- Context overflow mitigation: コンテキスト上限停止の主因は長い引き継ぎ文書・監査出力・ビルドログ・差分を会話へ蓄積しすぎたこと。次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。大きな出力はファイルへ記録し、会話には要約だけ返す。

## Current progress update 2026-07-05 Batch 200

- Batch 200 completed:
- 対象: `maebashi-afterschool` / `maebashi-birth-bonus` / `maebashi-disability-medical` / `maebashi-elderly-support` / `maebashi-housing-acquisition`
- `maebashi-afterschool` は前橋市全体の放課後児童クラブ利用料減免制度として公式確認できないため掲載停止。公式ページでは利用料金はクラブや学年等によって異なり、各クラブへ直接問い合わせる案内。
- `maebashi-birth-bonus` は妊婦のための支援給付へ補正。令和7年4月から旧まえばし出産・子育て応援給付金事業が移行し、妊娠時5万円、出産後こども1人5万円。
- `maebashi-disability-medical` は福祉医療制度の重度心身障害者・高齢重度障害者医療費助成へ補正。
- `maebashi-elderly-support` は緊急通報システム事業へ補正。所得段階1〜3は無料、4〜15は月額1,000円。
- `maebashi-housing-acquisition` は令和8年度移住支援金へ補正。住宅取得単体補助としては公式確認できず、世帯100万円、単身60万円、18歳未満1人50万円加算の移住支援制度を採用。
- 群馬県 raw gap: `20 -> 15`
- 全国 raw gap: `2001 -> 1996`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 9件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,650件、群馬県ローカル公式確認済みは69件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,092件生成、`/grant/[slug]` は3,098件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの前橋市残り `maebashi-infertility-treatment` / `maebashi-parenting-allowance` / `maebashi-vacant-house` / `maebashi-women-startup`。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 201

- Batch 201 completed:
- 対象: `maebashi-infertility-treatment` / `maebashi-parenting-allowance` / `maebashi-vacant-house` / `maebashi-women-startup`
- `maebashi-infertility-treatment` は前橋市令和8年度不妊治療費助成事業へ補正。不妊治療は最大15万円、男性不妊治療は最大5万円上乗せ、申請期限は2027年2月26日。
- `maebashi-parenting-allowance` は物価高対応子育て応援手当へ補正。対象児童1人あたり2万円、申請が必要な公務員等の期限は2026年6月30日で受付終了扱い。
- `maebashi-vacant-house` は令和8年度空き家活用リフォーム補助へ補正。基本上限50万円、加算最大50万円。新規事前相談は予算上限到達により受付終了。
- `maebashi-women-startup` は女性起業家限定補助として公式確認できないため、公式のスタートアップオフィス支援補助金へ補正。月額上限3万円、最大12か月、申請期間は2026年9月1日から9月30日。
- 前橋市 raw gap 0件達成。
- 群馬県 raw gap: `15 -> 11`
- 全国 raw gap: `1996 -> 1992`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,653件、群馬県ローカル公式確認済みは72件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,097件生成、`/grant/[slug]` は3,102件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は群馬県raw gapの太田市 `ota-city-birth-bonus` / `ota-city-childcare-subsidy` / `ota-city-elderly-support` / `ota-city-housing-purchase` / `ota-city-housing-seismic` など。
- Context overflow mitigation: 停止の主因は、長い会話履歴・引き継ぎ文書全文・巨大な監査/ビルド出力が同じスレッドへ蓄積したこと。以後はこのファイル末尾120行、`node scripts/audit-raw-verified-gaps.mjs --limit 25`、必要な差分だけで再開する。`SAFE_CONTINUATION_PLAN.md` と `tasks/todo.md` は全文を読まない。

## Current progress update 2026-07-05 Batch 202

- Batch 202 completed:
- 対象: `ota-city-birth-bonus` / `ota-city-childcare-subsidy` / `ota-city-elderly-support` / `ota-city-housing-purchase` / `ota-city-housing-seismic` / `ota-city-infertility` / `ota-city-nursing-equipment` / `ota-city-scholarship` / `ota-city-seismic-diagnosis` / `ota-city-sme-support` / `ota-city-startup-support`
- `ota-city-birth-bonus` は妊婦のための支援給付へ補正。妊娠時5万円、出産後5万円×胎児数。
- `ota-city-childcare-subsidy` はベーシックサービス（幼保給食費助成事業）へ補正。給食費月額上限4,400円をOTACOで支給。
- `ota-city-elderly-support` は高齢者支援サービス（緊急通報装置貸与等）へ補正。
- `ota-city-housing-purchase` は移住者まちなか住宅取得支援金へ補正。基本10万円、18歳未満同居で20万円加算。
- `ota-city-housing-seismic` は令和8年度木造住宅耐震改修補助金へ補正。全部改修最大100万円、耐震シェルター等最大60万円。
- `ota-city-infertility` は不妊治療費助成へ補正。生殖補助医療最大10万円、その他の不妊治療最大5万円。
- `ota-city-nursing-equipment` は介護用紙おむつの給付へ補正。
- `ota-city-scholarship` は太田市みらい給付型奨学金へ補正。月額5万円、年間60万円。令和8年度採用受付は終了。
- `ota-city-seismic-diagnosis` は令和8年度木造住宅耐震診断へ補正。自己負担1,000円。
- `ota-city-sme-support` は令和8年度DX推進補助金へ補正。上限100万円。
- `ota-city-startup-support` は空き店舗対策家賃支援事業補助金へ補正。月額上限3万円、6か月。
- 太田市 raw gap 0件、群馬県 raw gap 0件達成。
- 群馬県 raw gap: `11 -> 0`
- 全国 raw gap: `1992 -> 1981`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 21件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,663件、群馬県ローカル公式確認済みは82件。
- `NEXT_PRIVATE_BUILD_WORKER_COUNT=4 NODE_OPTIONS=--max-old-space-size=4096 npm run build`: 成功。静的ページ6,114件生成、`/grant/[slug]` は3,112件相当。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は広島県raw gapの呉市 `kure-birth-bonus` / `kure-block-wall-removal` / `kure-child-medical-aid` / `kure-childcare-subsidy` など。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 203

- Batch 203 completed:
- 対象: `kure-birth-bonus` / `kure-childcare-subsidy` / `kure-newlywed-rent` / `kure-disability-medical` / `kure-school-lunch` / `kure-sme-support` / `kure-nursing-home-reform` / `kure-energy-support` / `kure-seismic-diagnosis`
- `kure-birth-bonus` は妊婦のための支援給付金へ補正。妊娠時5万円、出産後5万円×胎児数。
- `kure-childcare-subsidy` は令和8年10月開始予定の0〜2歳児保育料無償化へ補正。
- `kure-newlywed-rent` は新婚・子育て世帯定住支援事業へ補正。基本30万円、加算込み最大100万円。
- `kure-disability-medical` は重度心身障害者医療費支給制度へ補正。
- `kure-school-lunch` は令和8年度学校給食費の実質無償化へ補正。
- `kure-sme-support` は令和8年度地域産品開発支援事業へ補正。上限50万円。
- `kure-nursing-home-reform` は介護保険住宅改修へ補正。利用上限20万円。
- `kure-energy-support` は省エネ家電・省エネ設備導入助成へ補正。
- `kure-seismic-diagnosis` は木造住宅耐震診断・耐震改修補助へ補正。耐震診断上限3万円、耐震改修上限115万円。
- 広島県 raw gap: `83 -> 74`
- 全国 raw gap: `1981 -> 1972`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 15件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,672件、広島県ローカル公式確認済みは31件。
- Buildは今回は未実行。前回Batch 202で成功済みのため、次の県完了時または大きめの節目で再実行する。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は呉市残り `kure-block-wall-removal` / `kure-child-medical-aid` / `kure-elderly-taxi` / `kure-health-checkup-subsidy` / `kure-juutaku-reform` / `kure-scholarship-repayment` / `kure-school-lunch-subsidy` / `kure-water-saving` など。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-05 Batch 204

- Batch 204 completed:
- 対象: `kure-block-wall-removal` / `kure-child-medical-aid` / `kure-elderly-taxi` / `kure-health-checkup-subsidy` / `kure-juutaku-reform` / `kure-scholarship-repayment` / `kure-school-lunch-subsidy` / `kure-water-saving`
- `kure-block-wall-removal` はブロック塀等安全確保事業へ補正。撤去上限15万円、建替上限30万円。
- `kure-child-medical-aid` は既存 `kure-child-medical` と同じこども医療費助成制度として公式確認済み追加。
- `kure-elderly-taxi` は高齢者タクシー助成として確認できないため、生活バス路線等優待制度へ補正。
- `kure-health-checkup-subsidy` は人間ドック助成の現行公式確認が弱いため、特定健診・がん検診へ補正。
- `kure-juutaku-reform` は一般住宅リフォーム助成として確認できないため、新婚・子育て世帯定住支援事業へ補正。
- `kure-scholarship-repayment` は一般向け奨学金返還支援として確認できないため、呉市職員奨学金返還支援制度へ補正。
- `kure-school-lunch-subsidy` は既存 `kure-school-lunch` と同じ令和8年度学校給食費の実質無償化として公式確認済み追加。
- `kure-water-saving` は雨水タンク設置補助として確認できないため、省エネ家電・省エネ設備導入助成へ補正。
- 呉市 raw gap 0件達成。
- 広島県 raw gap: `74 -> 66`
- 全国 raw gap: `1972 -> 1964`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 15件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,680件、広島県ローカル公式確認済みは39件。
- Buildは今回は未実行。次の県完了時または大きめの節目で再実行する。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は広島県庁 `hiroshima-education-ict` / `hiroshima-migration-family` または広島市 `hiroshima-block-wall-removal` / `hiroshima-child-medical-aid` など。
- Context overflow mitigation: 次回以降も全文ログを読まず、このファイル末尾120行と `node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-06 Batch 205

- Batch 205 completed:
- 対象: `hiroshima-migration-family` / `hiroshima-education-ict`
- `hiroshima-migration-family` は広島県 令和8年度移住支援金制度へ補正。公式ページでは令和8年度は国の年度当初予算の交付決定前で受付開始前、令和7年度内容として単身60万円・2人以上世帯100万円・18歳未満1人100万円加算を確認。
- `hiroshima-education-ict` は旧登録URLが404で、1校最大300万円の補助制度としては公式確認できないため掲載停止。公式に確認できる広島県学校教育情報化推進計画（令和8年度〜令和10年度）へ補正。
- 広島県 raw gap: `66 -> 64`
- 全国 raw gap: `1964 -> 1962`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 4件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,651件、広島県ローカル公式確認済みは39件。
- Buildは今回は未実行。前回Batch 202で成功済みのため、広島県の大きめ節目または県完了時に再実行する。
- Next candidates after commit: 綾部市残り2件（`ayabe-bicycle-helmet`, `ayabe-tea-business`）は現行公式確認が弱いため引き続き保留。次は広島市 `hiroshima-block-wall-removal` / `hiroshima-child-medical-aid` / `hiroshima-city-birth-bonus` など。
- Context overflow mitigation: 次回以降も全文ログを読まず、`CONTEXT_START_HERE.md`、このファイル末尾120行、`node scripts/audit-raw-verified-gaps.mjs --limit 25` のみで再開する。

## Current progress update 2026-07-06 Batch 206

- Batch 206 completed:
- 対象: `hiroshima-block-wall-removal` / `hiroshima-child-medical-aid` / `hiroshima-city-birth-bonus` / `hiroshima-city-bousai-equipment` / `hiroshima-city-childcare-subsidy`
- `hiroshima-block-wall-removal` は広島市民間ブロック塀等撤去工事補助事業へ補正。撤去費用3分の2、上限15万円、2027年1月29日まで。
- `hiroshima-child-medical-aid` は既存 `hiroshima-city-child-medical` と同じ広島市こども医療費補助として公式確認済み追加。
- `hiroshima-city-birth-bonus` は広島市妊婦支援給付金へ補正。妊婦1人5万円、胎児数1人5万円。
- `hiroshima-city-bousai-equipment` は住宅・建築物土砂災害対策改修補助金へ補正。補助率23%、上限77万2千円。
- `hiroshima-city-childcare-subsidy` は令和8年度保育料・副食費の多子軽減へ補正。
- 広島県 raw gap: `64 -> 59`
- 全国 raw gap: `1962 -> 1957`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 6件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,656件、広島県ローカル公式確認済みは44件。
- `node scripts/generate-progress-checklist.mjs`: 成功。広島市残り18件から13件へ減少。
- Buildは今回は未実行。広島市または広島県の大きめ節目で再実行する。
- Next candidates after commit: 綾部市残り2件は引き続き保留。次は広島市 `hiroshima-city-elderly-support` / `hiroshima-city-housing-purchase` / `hiroshima-city-infertility` など。

## Current progress update 2026-07-07 Batch 207

- Batch 207 completed:
- 対象: `hiroshima-city-elderly-support` / `hiroshima-city-housing-purchase` / `hiroshima-city-infertility` / `hiroshima-city-scholarship` / `hiroshima-city-sme-support`
- `hiroshima-city-elderly-support` は高齢者いきいき活動ポイント事業へ補正。1ポイント100円、最大1万円相当。
- `hiroshima-city-housing-purchase` は三世代同居・近居支援事業へ補正。住替え費用2分の1、上限10万円。
- `hiroshima-city-infertility` は不育症検査費用助成事業へ補正。検査費用7割、上限6万円。
- `hiroshima-city-scholarship` は広島市独自の一般奨学金制度なしを公式FAQで確認し掲載停止。
- `hiroshima-city-sme-support` は2026広島市生産性向上等チャレンジ応援金へ補正。上限200万円、申請期間は2026年6月19日で終了。
- 広島県 raw gap: `59 -> 54`
- 全国 raw gap: `1957 -> 1952`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 11件はすべてHTTP 200
- `npm run audit:coverage`: failures 0。公式確認済みactiveは2,657件、広島県ローカル公式確認済みは47件。
- `node scripts/generate-progress-checklist.mjs`: 成功。広島市残り13件から8件へ減少。
- Buildは今回は未実行。広島市完了時または広島県の大きめ節目で再実行する。
- Next candidates after commit: 綾部市残り2件は引き続き保留。次は広島市 `hiroshima-city-startup-support` / `hiroshima-juutaku-reform` / `hiroshima-health-checkup-subsidy` など。

## Current progress update 2026-07-08 石川県完了時 build 検証課題

- 石川県は白山市9件追加後に raw gap 0 を確認。
- 県完了節目として `NEXT_TELEMETRY_DISABLED=1 CI=1 NODE_OPTIONS=--max-old-space-size=4096 timeout 180s npm run build` を実行。
- 結果: code 124。最後の出力は `Creating an optimized production build ...`。Next.js 16.1.6 (Turbopack) の production optimization 前半で180秒進行ログなし。
- 代替検証: `npx eslint src/data/grants/verified-local-misc-2026.ts`、`git diff --check`、対象URL到達確認、`node scripts/audit-raw-verified-gaps.mjs --prefecture 石川県 --limit 25`、`npm run audit:coverage` は通過。
- 次に見る候補: Turbopack/Next.js最適化、静的生成対象増加、巨大な助成金データ、メモリ、外部URL参照や未関係のPinterest系変更。全国公式確認の本線は止めず、次の節目で上限付き build または `next build --debug` 相当を再確認する。

## Current progress update 2026-07-08 千葉県完了時 build 検証課題

- 千葉県は野田市3件追加後に `node scripts/audit-raw-verified-gaps.mjs --prefecture 千葉県 --limit 25` で raw gap 0 を確認。
- 県完了節目として `NEXT_TELEMETRY_DISABLED=1 CI=1 NODE_OPTIONS=--max-old-space-size=4096 timeout 180s npm run build` を実行。
- 結果: code 124。最後の出力は `Creating an optimized production build ...`。Next.js 16.1.6 (Turbopack) の production optimization 開始後、180秒間追加ログなし。
- 代替検証: `npx eslint src/data/grants/verified-local-misc-2026.ts`、`git diff --check`、対象URL到達確認、`node scripts/audit-raw-verified-gaps.mjs --prefecture 千葉県 --limit 25`、`npm run audit:coverage` は通過。
- 次に見る候補は前回同様、Turbopack/Next.js最適化、静的生成対象増加、巨大な助成金データ、メモリ、外部URL参照、未関係のPinterest系変更。全国公式確認の本線は止めず、大きな節目で上限付き build または `next build --debug` 相当を短時間で再確認する。

## Current progress update 2026-07-09 大阪府完了時 build 検証課題

- 大阪府は枚方市10件追加後に `node scripts/audit-raw-verified-gaps.mjs --prefecture 大阪府 --limit 25` で raw gap 0 を確認。
- 県完了節目として `NEXT_TELEMETRY_DISABLED=1 CI=1 NODE_OPTIONS=--max-old-space-size=4096 timeout 180s npm run build` を実行。
- 結果: code 124。最後の出力は `Creating an optimized production build ...`。Next.js 16.1.6 (Turbopack) の production optimization 開始後、180秒間追加ログなし。
- 代替検証: `npx eslint src/data/grants/verified-local-misc-2026.ts`、`git diff --check`、対象URL到達確認、`node scripts/audit-raw-verified-gaps.mjs --prefecture 大阪府 --limit 25`、`npm run audit:coverage` は通過。
- 次に見る候補は前回同様、Turbopack/Next.js最適化、静的生成対象増加、巨大な助成金データ、メモリ、外部URL参照、未関係のPinterest系変更。全国公式確認の本線は止めず、大きな節目で上限付き build または `next build --debug` 相当を短時間で再確認する。

## Current progress update 2026-07-09 大分県完了時 build 検証課題

- 大分県は別府市18件追加後に `node scripts/audit-raw-verified-gaps.mjs --prefecture 大分県 --limit 25` で raw gap 0 を確認。
- 県完了節目として `NEXT_TELEMETRY_DISABLED=1 CI=1 NODE_OPTIONS=--max-old-space-size=4096 timeout 180s npm run build` を実行。
- 結果: code 124。最後の出力は `Creating an optimized production build ...`。Next.js 16.1.6 (Turbopack) の production optimization 開始後、180秒間追加ログなし。
- 代替検証: `npx eslint src/data/grants/verified-local-misc-2026.ts`、`git diff --check`、別府市18件のURL到達確認、`node scripts/audit-raw-verified-gaps.mjs --prefecture 大分県 --limit 25`、`npm run audit:coverage` は通過。
- 次に見る候補は前回同様、Turbopack/Next.js最適化、静的生成対象増加、巨大な助成金データ、メモリ、外部URL参照、未関係のPinterest系変更。全国公式確認の本線は止めず、大きな節目で上限付き build または `next build --debug` 相当を短時間で再確認する。

## Current progress update 2026-07-09 長崎県再開地点

- Completed commits in this continuation:
  - `d534e5d 別府市18件を公式補正`
  - `5f6f005 佐世保市17件を公式補正`
  - `5fa99de 長崎県1件を公式補正`
- Current totals after `node scripts/generate-progress-checklist.mjs`: remaining raw slugs 537, completed municipalities 377/434.
- Latest validations passed:
  - 別府市18件: eslint, diff-check, URL 18/18, 大分県 raw gap 0, `npm run audit:coverage` failures 0.
  - 大分県 completion build: `NEXT_TELEMETRY_DISABLED=1 CI=1 NODE_OPTIONS=--max-old-space-size=4096 timeout 180s npm run build` exited 124 at `Creating an optimized production build ...`.
  - 佐世保市17件: eslint, diff-check, URL 17/17, `npm run audit:coverage` failures 0.
  - 長崎県庁1件: eslint, diff-check, URL 1/1, `npm run audit:coverage` failures 0.
- Next restart point: 長崎県 長崎市 18件:
  `nagasaki-city-fertility-treatment`, `nagasaki-city-childcare-subsidy`, `nagasaki-city-birth-bonus`, `nagasaki-city-housing-purchase`, `nagasaki-city-infertility`, `nagasaki-city-school-lunch`, `nagasaki-city-nursing-equipment`, `nagasaki-city-energy-support`, `nagasaki-city-seismic-diagnosis`, `nagasaki-child-medical-aid`, `nagasaki-juutaku-reform`, `nagasaki-health-checkup-subsidy`, `nagasaki-scholarship-repayment`, `nagasaki-startup-support`, `nagasaki-elderly-taxi`, `nagasaki-water-saving`, `nagasaki-block-wall-removal`, `nagasaki-school-lunch-subsidy`.
- Already inspected for 長崎市:
  - Existing verified entries include `nagasaki-city-child-medical`, `nagasaki-comfortable-home-renovation-2026`, `nagasaki-pregnant-support-benefit-2026`, `nagasaki-startup-growth-support-2026`, `nagasaki-city-housing-seismic`, `nagasaki-city-sme-support`, `nagasaki-city-energy-saving-appliance-2026`, `nagasaki-city-company-scholarship-repayment-support-subsidy-2026`.
  - Run next:
    `node scripts/audit-raw-verified-gaps.mjs --prefecture 長崎県 --limit 25`
    then official source checks for 長崎市18件.
