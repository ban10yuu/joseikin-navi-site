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
