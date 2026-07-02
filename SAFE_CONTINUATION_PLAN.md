# SAFE_CONTINUATION_PLAN

作成日: 2026-07-01

## 絶対条件

- 隔離済みの古い助成金/補助金系チャットは開かない、unarchiveしない、復元しない。
- `node_repl`、Computer Use、browser/chrome/computer-use plugin は使わない。
- Chrome プロセスは保護する。`kill` / `pkill chrome` は禁止。
- Web確認が必要な場合は、通常のweb検索、公式サイトへのHTTP確認、PinchTab、chrome-devtoolsのいずれかに限定する。
- 公式一次情報を優先し、重複、期限切れ、出典不明の通常公開を避ける。

## 参照済みコンテキスト

- `/Users/banseiyuuji/.codex/handoff-from-claude/00-START-HERE.md`
- `/Users/banseiyuuji/.codex/handoff-from-claude/01-CLAUDE-global-rules.md`
- `/Users/banseiyuuji/.codex/handoff-from-claude/02-projects-inventory.md`
- `/Users/banseiyuuji/.codex/handoff-from-claude/03-memory/MEMORY.md`
- `/Users/banseiyuuji/.codex/memories/MEMORY.md`
- `/Users/banseiyuuji/.codex/memories/rollout_summaries/2026-06-26T00-37-12-z3yU-joseikin_navi_official_data_expansion_and_validation.md`
- `README.md`, `package.json`, `src/lib/grants.ts`, `src/lib/types.ts`, `scripts/audit-*.mjs`, `tasks/todo.md`, `tasks/lessons.md`, `tasks/nationwide-expansion-plan.md`

## KB検索結果

`kb search "助成金ナビ joseikin-navi-site"` は、このシェルでは `kb: command not found` で実行不可だった。

代替として、handoffファイル、Codex memories、rollout_summaries、repo内ドキュメントを直接読んで現在地を復元した。

## 現在の進捗

- 本体: `/Users/banseiyuuji/joseikin-navi-site`
- 関連: `/Users/banseiyuuji/joseikin-navi-maintenance`
- stack: Next.js 16.1.6 / React 19.2.3 / TypeScript / static export
- 現在ブランチ: `main`
- `main...origin/main` はローカルが106コミット先行。push / 公開反映は明示確認後に行う。
- `src/lib/grants.ts` は公式確認済みデータを旧生成データより前に読み込み、slug重複時に先勝ちdedupeする。旧生成データは削らず、公式確認済みデータで置換する運用。
- `npm run audit:coverage` は成功。2026-07-02 東京都Batch 65後の結果:
  - rawDefinitionsAfterDedupe: 5,098
  - activePublished: 4,916
  - expired: 182
  - officialLinkedActive: 1,693
  - manuallyVerifiedActive: 1,693
  - activeWithoutOfficialSource: 3,223
  - officialLinkedButNotManuallyVerified: 0
  - prefectureCoverage: 47/47 都道府県で公式リンクあり・手動確認済みあり
  - activeExpiredLeaks: 0

## 現在の未コミット状態

既存の未コミット差分があるため、今後も不用意に巻き戻さない。

- 今回の助成金データ継続で触るファイル:
  - `SAFE_CONTINUATION_PLAN.md`
  - `tasks/todo.md`
  - `src/data/grants/verified-tokyo-local-2026.ts`
  - `src/data/grants/verified-local-misc-2026.ts`
- 未ステージ:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
- 未追跡:
  - `DESIGN.md`
  - `public/pinterest/`
  - `scripts/*pinterest*.mjs`
  - `scripts/generate-pinterest-pins.py`
  - `src/app/pinterest/`
  - `src/data/pinterest.ts`
  - `tasks/pinterest-*`

Pinterest系の差分は今回の助成金データ継続とは別系統として扱い、触らない。

## 未完了タスク

1. 未公式確認3,219件を、公式一次情報ベースで順次置換する。
2. 次回は東京都町田市14件（`machida-birth-bonus` / `machida-block-wall-removal` / `machida-bousai-equipment` / `machida-childcare-subsidy` / `machida-disability-medical` / `machida-elderly-taxi` / `machida-energy-support` / `machida-health-checkup-subsidy` / `machida-nursing-home-reform` / `machida-school-lunch` / `machida-school-lunch-subsidy` / `machida-senior-support` / `machida-telework-bonus` / `machida-water-saving`）を公式一次情報で確認する。
3. 未公式確認の上位都道府県:
   - 北海道 163
   - 埼玉県 140
   - 東京都 129
   - 福岡県 127
   - 栃木県 121
   - 大阪府 119
   - 愛知県 112
   - 茨城県 91
   - 静岡県 91
   - 千葉県 91
4. カテゴリ別の未公式確認数は次回必要時に再集計する。2026-07-02時点の公式確認済みactiveは、生活支援782件、子育て640件、住宅418件、就職407件、医療379件、教育229件、介護193件、災害160件。

## 旧チャットに依存しない実行計画

1. 毎回、作業開始時に `git status --short --branch`、`git diff --stat`、`git diff --cached --stat` を確認する。
2. 既存の未コミット差分を巻き戻さない。助成金データ作業は原則 `src/data/grants/verified-*.ts` の1ファイル単位で進める。
3. 候補抽出は repo の現行データから行う。旧チャットの履歴は使わない。
4. 公式ページで、制度名、対象者、金額、申請期間、期限、出典URLを確認する。
5. 公式確認できた制度だけを通常公開にする。終了済み、募集停止、公式確認不可は `deadlineDate` や説明で通常一覧から外す。
6. 追加先は既存の sink に合わせる。
   - 東京ローカル: `src/data/grants/verified-tokyo-local-2026.ts`
   - 東京以外の自治体/都道府県: `src/data/grants/verified-local-misc-2026.ts`
   - 全国制度: `src/data/grants/verified-national-*.ts`
   - 民間/NPO: `src/data/grants/verified-ngo-*.ts`
7. 1バッチは小さくする。目安は3から10件。自治体公式サイトの確認品質を優先する。
8. 検証順序:
   - `npx eslint <追加ファイル> src/lib/grants.ts`
   - `npm run lint`
   - `npm run build`
   - `npm run audit:coverage`
   - `npm run audit:deadlines`
   - `npm run audit:links`
9. `audit:deadlines` と `audit:links` は `out/` が必要。先に `npm run build` を実行する。
10. `npm run build` が `ENOTEMPTY` で落ちた場合は、原因が stale `.next` / `out` か確認してから、必要最小限の生成物削除で再実行する。
11. 検証後、助成金データの差分だけを commit/push する。公開、課金、認証、削除、破壊的操作が必要な場合は事前確認を取る。

## 次に追加すべき候補

優先度は、未公式確認が多く、利用者需要が高く、公式ページ確認が比較的容易な自治体制度を上に置く。

### Batch 1: 東京都の教育・生活者向け制度

- `tokyo-private-school-support` / 東京都私立高校授業料軽減助成金
- `chuo-daycare-support` / 中央区 認証保育所等保育料助成金
- `nerima-education-scholarship` / 練馬区 奨学資金制度
- `suginami-scholarship` / 杉並区 次世代育成基金奨学金
- `ota-startup-support` / 大田区 創業支援補助金

### Batch 2: 埼玉県の奨学金返還・住宅耐震

- `kawagoe-scholarship-repayment` / 川越市 奨学金返還支援制度
- `tokorozawa-scholarship-repayment` / 所沢市 奨学金返還支援制度
- `kawaguchi-scholarship-repayment` / 川口市 奨学金返還支援制度
- `koshigaya-scholarship-repayment` / 越谷市 奨学金返還支援制度
- `saitama-housing-seismic` / さいたま市 木造住宅耐震改修補助金

### Batch 3: 神奈川・大阪の住宅耐震と創業支援

- `kawasaki-housing-seismic` / 川崎市 木造住宅耐震改修助成制度
- `yokohama-seismic-diagnosis` / 横浜市 木造住宅耐震診断・改修補助事業
- `yokosuka-startup-support` / 横須賀市 創業支援事業補助金
- `osaka-housing-seismic` / 大阪府住宅耐震化促進事業
- `toyonaka-housing-seismic` / 豊中市 住宅耐震改修補助制度

## 再開メモ

このファイルを読めば、隔離済み旧チャットを開かずに再開できる。次の安全な一手は、ステージ済み3件の検証完了、または Batch 1 の公式一次情報確認から開始すること。

## 2026-07-01 公式候補確認ログ

旧チャットには依存せず、現行データから抽出した候補を通常web検索で確認した。

一次情報として採用しやすい候補:

- `tokyo-private-school-support`: 東京都私学財団の「私立高等学校等授業料軽減助成金（都の制度）」ページを確認。令和8年度の上限額、対象者、注意点が確認できる。
- `chuo-daycare-support`: 中央区公式「認証保育所保育料の補助」ページを確認。令和8年4月から令和9年3月の補助対象期間、月額上限8万円等が確認できる。
- `ota-startup-support`: 大田区公式「中小企業融資あっせん制度 開業資金」ページを確認。候補名の「補助金」とは制度種別が違うため、置換時は「融資あっせん・利子補給」制度として扱う。
- `kawagoe-scholarship-repayment`: 川越市公式「川越市大学奨学金」ページを確認。候補名の「返還支援」とは違い、返済不要の給付型奨学金として扱う。
- 埼玉県の奨学金返還支援: 埼玉県公式報道発表で、令和8年6月1日から11月30日まで、中小企業等向けの奨学金返還支援事業補助金を確認。市別slugへ分散するより、県制度として公式確認済みデータ化する方が安全。
- `tokorozawa-scholarship-repayment`: 所沢市公式「保育士奨学金返済支援事業」を確認。保育士限定で最大90万円の返済支援であり、一般奨学金返還支援とは別制度として扱う。
- `saitama-housing-seismic`: さいたま市公式「令和8年度 耐震補強等助成事業（戸建住宅の耐震補強設計・工事）」を確認。木造住宅耐震改修系の公式置換候補。

慎重に扱う候補:

- `nerima-education-scholarship`: 練馬区公式ページでは高等教育の就学支援新制度や受験生チャレンジ支援貸付への案内は確認できたが、候補名どおりの区独自「奨学資金制度」は未確認。
- `suginami-scholarship`: 杉並区公式「次世代育成基金」は確認できたが、内容は子どもの体験事業・民間団体助成であり、候補名の「奨学金」とは一致しない。置換するなら制度名とカテゴリを修正する。

## 2026-07-01 検証・修正ログ

安全検証として以下を実行した。

- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。`/grant/kagoshima-city-premium-voucher-shopping-street-subsidy-2026` 等を含む静的ページ生成成功。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run lint`: エラー0、既知警告5件
- 初回 `npm run audit:deadlines`: failures 0
- 初回 `npm run audit:links`: broken 2
  - `grant/musashino-scholarship/index.html` から参照される武蔵野市PDFが404
  - `grant/onna-machinaka-homestay-study-support-2026/index.html` の恩納村個別ページが404

404修正:

- `src/data/grants/verified-tokyo-local-2026.ts`
  - `musashino-scholarship` の404 PDFを `sourceUrls` から除外。
  - 武蔵野市公式HTMLページはHTTP 200のため主出典として維持。
- `src/data/grants/verified-local-misc-2026.ts`
  - `onna-machinaka-homestay-study-support-2026` の404個別ページを除外。
  - HTTP 200を確認した恩納村公式「各種支援事業一覧」を `officialUrl` / `sourceUrls` の主出典に差し替え。

修正後の再検証:

- `npx eslint src/data/grants/verified-local-misc-2026.ts src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

注意:

- `src/data/grants/verified-local-misc-2026.ts` には、作業開始前からステージ済みの3件追加がある。今回の404修正により同ファイルには未ステージ差分も発生している。
- `src/data/grants/verified-tokyo-local-2026.ts` は今回のリンク監査修正で未ステージ変更あり。
- Vercel/GitHub自動デプロイにつながる可能性があるため、commit/push はまだ実行していない。

## 2026-07-01 Batch 1 追加ログ

東京都の未公式確認slugから、公式一次情報が確認できた3件を `src/data/grants/verified-tokyo-local-2026.ts` に追加した。

追加:

- `tokyo-private-school-support`: 東京都私学財団「令和8年度私立高等学校等授業料軽減助成金」。通常申請は2026年7月1日から2026年7月31日まで。就学支援金と合わせて最大年50万1,000円。
- `chuo-daycare-support`: 中央区「認証保育所保育料の補助」。令和8年4月から令和9年3月が補助対象期間。0歳児から2歳児クラスは月額上限8万円。
- `ota-startup-support`: 大田区「中小企業融資あっせん制度『開業資金』」。候補名の補助金ではなく、公式上は融資あっせん・利子補給制度。融資限度額2,000万円。

確認:

- 3件すべて現行公式URLを直接確認。
- `node` によるデータ層確認で、3slugが公式リンクあり・手動確認済みとして先勝ち反映されることを確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,320件から1,323件へ増加。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,494 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

未実行:

- push。公開反映につながる可能性があるため、明示確認があるまで実行しない。

## 2026-07-01 埼玉Batch追加ログ

埼玉県の未公式確認slugから、公式一次情報が確認できた4件を `src/data/grants/verified-local-misc-2026.ts` に追加した。

追加:

- `kawagoe-scholarship-repayment`: 川越市「大学奨学金」。候補名の返還支援ではなく、公式上は返済不要の給付型奨学金。入学準備金20万円、学資金月額37,500円、2026年8月31日必着。
- `tokorozawa-scholarship-repayment`: 所沢市「保育士奨学金返済支援事業」。保育士限定で、1人あたり最大90万円。
- `kawaguchi-scholarship-repayment`: 川口市「令和8年度 中小企業従業員等奨学金返還支援補助金」。市内在住者は最大年12万円、申請は2026年10月1日から11月30日必着。
- `saitama-housing-seismic`: さいたま市「令和8年度 耐震補強等助成事業（戸建住宅の耐震補強設計・工事）」。耐震補強工事は上限120万円、総合的耐震補強工事は上限140万円。

確認:

- 4件すべて現行公式URLを直接確認。
- 県制度の `saitama-company-scholarship-repayment` は既に公式確認済みとして存在するため重複追加しなかった。
- `node` によるデータ層確認で、4slugが公式リンクあり・手動確認済みとして先勝ち反映されることを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,323件から1,327件へ増加。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,504 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch追加ログ

千葉県の未公式確認slugから、公式一次情報が確認できた3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。

追加:

- `matsudo-housing-seismic`: 松戸市「木造住宅耐震改修助成事業」。旧生成データの上限50万円を、公式の上限100万円へ補正。受付は2026年5月7日から11月13日まで、予算額到達時は終了。
- `ichikawa-flood-prevention`: 市川市「あんしん住宅助成制度（防水板の設置等）」。候補名の止水板単独制度ではなく、公式上は住宅助成制度の防災性メニュー。通常上限10万円、耐震関連工事は条件により上限30万円。
- `narita-birth-bonus`: 成田市「妊婦のための支援給付」。旧生成データの出産祝い金・第1子10万円等を、現行公式制度の妊娠時5万円・出産後胎児1人あたり5万円へ補正。

確認:

- 3件すべて現行公式URLを直接確認し、HTTP 200を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,327件から1,330件へ増加。千葉県ローカル公式確認済みは49件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,510 件生成。
- 1回目の `npm run audit:links` は既存 `suzaki-fukushi-zaidan` の `https://swf.or.jp/josei/` が一時timeout。単体HEAD/GETはHTTP 200を確認。
- 2回目の `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 2 追加ログ

千葉県の未公式確認slugから、旧制度名のまま残っていた出産・子育て応援給付金系3件を、公式一次情報に基づき現行制度名へ補正して `src/data/grants/verified-local-misc-2026.ts` に追加した。

追加:

- `chiba-city-birth-bonus`: 千葉市「妊婦のための支援給付事業（妊婦支援給付金）」。妊婦支援給付金1回目は妊婦1人あたり5万円、2回目は胎児1人あたり5万円。
- `kashiwa-birth-bonus`: 柏市「妊婦支援給付金」。柏市出産・子育て応援給付金事業は妊婦支援給付金へ移行。1回目5万円、2回目は胎児の数×5万円。
- `funabashi-birth-bonus`: 船橋市「妊婦のための支援給付・妊婦等包括相談支援事業」。令和7年4月1日から旧出産・子育て応援事業に代わり開始。1回目は妊婦1人あたり現金5万円、2回目は胎児1人あたり現金5万円。

確認:

- 3件すべて現行公式URLを直接確認し、HTTP 200を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,330件から1,333件へ増加。千葉県ローカル公式確認済みは52件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,513 件生成。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 3 追加ログ

千葉県の未公式確認slugから、子ども医療費助成4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。

追加:

- `chiba-city-childcare-subsidy`: 千葉市「子ども医療費助成制度」。0歳から高校3年生相当年齢まで。通院1回300円、入院1日300円、調剤無料など。旧生成データの「高校卒業まで無料」を公式自己負担額へ補正。
- `ichikawa-child-medical`: 市川市「子ども医療費助成制度」。0歳から高校生相当年齢まで。入院1日300円、通院1回300円、調剤無料、所得制限なし。旧生成データの「高校卒業まで無料」を補正。
- `urayasu-child-medical`: 浦安市「子ども医療費助成」。高校3年生相当年齢まで。千葉県内で受給券とマイナ保険証等を提示すると保険診療分無料。
- `matsudo-child-medical`: 松戸市「子ども医療費助成制度」。0歳から高校3年生相当年齢まで。通院1回200円、入院1日200円、調剤無料。旧生成データの「18歳まで無料」を補正。

確認:

- 4件すべて現行公式URLを直接確認し、HTTP 200を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,333件から1,337件へ増加。千葉県ローカル公式確認済みは56件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,521 件生成。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 4 追加ログ

千葉県の未公式確認slugから、住宅・省エネ・耐震系3件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。不妊治療系候補は、現行公式ページと生成slugの制度名ずれが大きいため、このバッチでは採用しなかった。

追加:

- `chiba-city-housing-eco`: 千葉市「住宅用設備等脱炭素化促進事業補助金」。旧生成データの「省エネ住宅改修補助金・最大40万円」を、公式制度名と太陽光最大4.5万円、ZEH+・エネファーム10万円、蓄電池7万円、窓断熱最大8万円へ補正。申請は2026年5月1日から2027年1月29日必着。
- `kashiwa-energy-support`: 柏市「令和8年度ゼロカーボンシティ促進総合補助制度（家庭向け）」。エコ窓上限8万円、エネファーム10万円、蓄電池7万円、V2H上限25万円、EV/PHEV上限10万円または15万円、集合住宅用充電設備は条件により最大100万円×基数。申請は2026年5月1日から2027年2月26日まで。
- `funabashi-seismic-diagnosis`: 船橋市「木造住宅耐震診断助成事業」。旧生成データの上限5万円を、公式の耐震診断費3分の2・上限11万円へ補正。令和8年度分の締切は2027年1月29日。

確認:

- 3件すべて現行公式URLを直接確認し、HTTP 200を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,337件から1,340件へ増加。千葉県ローカル公式確認済みは59件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,524 件生成。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 5 追加ログ

千葉県の未公式確認slugから、就学援助制度4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの概算・抽象表記を、令和8年度の公式費目別金額へ補正した。

追加:

- `kashiwa-education-support`: 柏市「就学援助制度」。旧生成データの年間最大15万円相当を、公式の新入学学用品費 小57,060円・中63,000円、入学準備金 小6対象81,000円、学校給食費免除などへ補正。年度途中の収入減少等は2027年3月1日まで申請可能。
- `matsudo-school-aid`: 松戸市「就学援助制度について」。新入学用品費 小57,060円・中63,000円、学用品費等、学校給食費免除、修学旅行費実費などを公式確認。
- `ichikawa-school-aid`: 市川市「就学援助について」。HTML本文と令和8年度PDFを確認し、新入学児童生徒援助費 小57,060円・中63,000円、中3修学旅行費 実費上限10万円、随時受付条件などを反映。
- `abiko-education-support`: 我孫子市「就学援助制度」。令和8年度の準要保護所得基準が生活保護基準1.4倍未満に変更されたこと、入学準備金 新小1 57,060円・新中1 63,000円、中学校給食費 月5,750円などを公式確認。

確認:

- 4件すべて現行公式URLを直接確認し、HTTP 200を確認。市川市は公式ページ掲載PDFも確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,340件から1,344件へ増加。千葉県ローカル公式確認済みは63件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,528 件生成。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 6 追加ログ

千葉県の未公式確認slugから、福祉医療・在宅介護・耐震診断系4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。既存の子ども医療費候補は公式確認済みデータと重複していたため採用しなかった。

追加:

- `kashiwa-disability-medical`: 柏市「重度心身障害者医療費の助成」。旧生成データの自己負担分全額助成表記を、公式の「健康保険診療分の最終的な自己負担金を助成」「高額療養費等を除く」条件付き表現へ補正。
- `narita-disability-medical`: 成田市「重度心身障害者（児）医療費助成」。対象手帳等級、市町村民税所得割235,000円以上は対象外、65歳以上新規手帳交付者は原則対象外、経過的特例が令和9年3月31日まで延長されたことを確認。
- `noda-seismic-diagnosis`: 野田市「戸建て木造住宅の耐震診断費助成制度」。旧生成データの上限5万円を、公式PDF手引きの耐震診断費実支出額・上限8万円へ補正。契約後・着手後の申請不可、予算到達時終了。
- `funabashi-nursing-equipment`: 船橋市「介護用品（紙おむつ等）支給」。旧生成データの年間7万円相当を、公式の月額8,900円分まで毎月宅配へ補正。要介護3・4・5、市民税・県民税合計賦課額65,000円以下などを確認。

確認:

- 4件すべて現行公式URLを直接確認し、HTTP 200を確認。野田市は公式PDF手引きも確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,344件から1,348件へ増加。千葉県ローカル公式確認済みは67件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,532 件生成。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 7 追加ログ

千葉県の未公式確認slugから、学校給食費・在宅介護・高齢者緊急通報系4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの対象範囲や金額が公式とずれていたため、現行公式制度名・条件へ補正した。

追加:

- `kashiwa-school-lunch`: 柏市「第3子以降の学校給食費の無償化」。令和8年度は市立小学校給食費が完全無償化、市立中学校は扶養している子どものうち第3子以降が対象。年度当初入力期間は2026年5月1日から5月17日まで。
- `noda-nursing-equipment`: 野田市「介護用品支給事業」。旧生成データの年間6万円相当・要介護4/5中心表記を、公式の毎月4,700円相当分のおむつ配送、要介護/要支援認定とおむつ使用等の詳細要件へ補正。
- `noda-elderly-support`: 野田市「緊急通報システム」。旧生成データの一般的な見守り支援表記を、消防本部に直結する緊急通報システム、利用料無料、電話回線使用料は自己負担、対象要件ありへ補正。
- `narita-school-lunch`: 成田市「学校給食費無料化」。旧生成データの学校給食費補助制度を、2026年4月から市立小中義務教育学校の給食費すべて無料、保護者申請不要へ補正。

確認:

- 4件すべて現行公式URLを直接確認し、HTTP 200を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,348件から1,352件へ増加。千葉県ローカル公式確認済みは71件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,539 件生成。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 8 追加ログ

千葉県の未公式確認slugから、雨水貯留・雨水浸透・在宅介護用品系4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの制度名・上限額・対象条件にずれがあったため、現行公式制度へ補正した。

追加:

- `matsudo-rainwater-tank`: 松戸市「雨どい取付型雨水貯留タンク設置事業補助金」。100L以上300L未満は上限2万円、300L以上は上限3万円。交付決定前の購入・設置は対象外。
- `ichikawa-rainwater-tank`: 市川市「雨水浸透施設設置等助成金」。雨どい取付型タンクは上限2.5万円、浄化槽転用型は上限8万円、浸透施設は規格別単価。新築や条例義務設置は対象外。
- `ichikawa-home-care`: 市川市「紙おむつの給付」。要介護3から5で在宅介護、本人市民税非課税などの要件を満たす方へ、月額6,000円以内の紙おむつを自己負担なしで毎月配達。
- `matsudo-home-care`: 松戸市「介護用品（紙おむつ等）の支給」。要介護3は月1組、要介護4・5は世帯課税状況により月1組または月2組、費用無料。旧生成データの月額1万円手当表記を公式制度へ補正。

確認:

- 4件すべて現行公式URLを直接確認し、公式ページの制度名・対象・金額・申請条件を反映。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,352件から1,356件へ増加。千葉県ローカル公式確認済みは75件。
- `npm run audit:deadlines`: failures 0
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,548 件生成。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 9 追加ログ

千葉県の未公式確認slugから、浦安市の保育・学校給食・高齢者紙おむつ・学童FAQ系4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。うち1件は、公式FAQで減免制度なしと確認できたため、通常一覧から除外する抑止レコードとして追加した。

追加:

- `urayasu-nursery-support`: 浦安市「簡易保育所通園児補助金」。旧生成データの認可外保育施設利用者補助金・月額4万円を、公式の月額23,000円へ補正。1カ月64時間以上継続通園、住民税非課税世帯や3歳児クラス以上は対象外などを反映。
- `urayasu-school-lunch`: 浦安市「学校給食食物アレルギー等対応給付金」。令和6年度から学校給食費無償化、令和8年度から食物アレルギー等で給食をすべて停止し弁当を持参する場合に原則学校給食費月額と同額を給付。旧生成データの第3子以降給食費補助表記を現行公式制度へ補正。
- `urayasu-home-care`: 浦安市「紙おむつの給付（高齢者）」。旧生成データの在宅介護支援手当・月額1万円を、65歳以上で要介護3から5等を対象に注文代金6,000円以内を無料配送する公式制度へ補正。
- `urayasu-afterschool-care`: 浦安市公式FAQで、児童育成クラブ保護者負担金の減免はないことを確認。生成データの「放課後児童クラブ利用料助成制度」は現行公式制度として確認できないため、期限切れ扱いで通常一覧から除外。

補足:

- 既存の `chiba-migration-support` で出力されていた `https://www.chiba-chiikishigoto.jp/useful/` は、リンク監査で繰り返しtimeoutし、個別確認でも30秒無応答だったため `src/data/grants/link-audit-suppressions.ts` に追加した。南房総市公式URLは残るため、制度の公式出典リンクは維持される。

確認:

- 新規公式URL・PDF 6件はすべてHTTP 200を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/data/grants/link-audit-suppressions.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,356件から1,358件へ増加。千葉県ローカル公式確認済みは77件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,552 件生成。
- `npm run audit:deadlines`: failures 0。`urayasu-afterschool-care` は期限切れ扱いで詳細noindex・sitemap除外を確認。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 10 追加ログ

千葉県の未公式確認slugから、浦安市の妊婦歯科・省エネ/LED・新婚家賃系4件を公式一次情報と浦安市公式サイト内検索に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。通常公開は1件、3件は重複・公式確認不可の生成ページを通常一覧から除外する抑止レコード。

追加:

- `urayasu-maternity-dental`: 浦安市「妊婦歯科健康診査」。市内在住で妊娠している方を対象に、妊娠期間中1回無料で市内指定歯科医院の歯科健診を受けられることを公式確認。
- `urayasu-eco-reform`: 生成データの「省エネルギー住宅改修補助金」は単独制度として公式確認できず、既存の公式確認済み `urayasu-migration-support`（浦安市住宅用設備等脱炭素化促進事業補助金）と重複するため、期限切れ扱いで通常一覧から除外。
- `urayasu-led-subsidy`: 浦安市公式サイト内検索で「LED照明補助」を確認したが、現行の単独補助制度ページは確認できず。環境保全カテゴリの住宅向け補助は住宅用設備等脱炭素化促進事業補助金として案内されているため、通常一覧から除外。
- `urayasu-newlywed-rent`: 浦安市公式サイト内検索で「新婚 家賃 補助」を確認したが、現行の申請可能な制度ページは確認できず、市議会資料のみが検索結果に表示されたため、通常一覧から除外。

確認:

- 新規公式URL・PDF・公式サイト内検索URLはすべて到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,358件から1,359件へ増加。期限切れは100件、千葉県ローカル公式確認済みは78件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,558 件生成。
- `npm run audit:deadlines`: failures 0。`urayasu-eco-reform`、`urayasu-led-subsidy`、`urayasu-newlywed-rent` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 11 追加ログ

千葉県の未公式確認slugから、船橋市の高齢者見守り、柏市の感震ブレーカー、松戸市の浸水対策候補3件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。通常公開は2件、1件は公式確認不可の生成ページを通常一覧から除外する抑止レコード。

追加:

- `funabashi-elderly-support`: 船橋市「緊急通報装置の貸与」。旧生成データの一律無料表記を、常に安否確認が必要な65歳以上のひとり暮らし等は無料、75歳以上で緊急時の不安を理由に利用する場合は月1,100円または2,200円へ補正。
- `kashiwa-bousai-equipment`: 柏市「感震ブレーカー設置費用補助金」。旧生成データの防災用品購入費助成・上限2万円を、公式の簡易タイプ感震ブレーカー設置費用3分の2・上限3,000円、申請期間2026年6月1日から2027年1月29日へ補正。
- `matsudo-flood-prevention`: 松戸市公式サイトの防災・防犯カテゴリと公式サイト内検索で、止水板・防水壁・排水ポンプ等の設置費補助を確認できなかったため、期限切れ扱いで通常一覧から除外。

確認:

- 新規公式URL・PDF・公式サイト内検索URLはすべて到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,359件から1,361件へ増加。期限切れは101件、千葉県ローカル公式確認済みは80件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,563 件生成。
- `npm run audit:deadlines`: failures 0。`matsudo-flood-prevention` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 2 追加ログ

埼玉県の未公式確認slugから、さいたま市・所沢市の就学援助、川口市の紙おむつ支給3件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。いずれも令和8年度の公式HTML/PDFを確認し、生成データの概算・対象条件のずれを補正した。

追加:

- `saitama-education-support`: さいたま市「就学援助制度（学用品費等の援助）」。令和8年度申請期間は2026年2月13日から2027年1月29日。学用品費等 小1年13,230円、小2から6年15,500円、中1年25,040円、中2・3年27,310円、入学準備金・新入学用品費 小57,060円・中63,000円などを公式PDFで確認。
- `tokorozawa-school-aid`: 所沢市「令和8年度 就学援助」。市立小・中学校在籍世帯が対象。新入学学用品費 小64,300円・中81,000円、学用品費等の月額、林間学校・修学旅行・医療費、給食費原則無償化を公式HTML/PDFで確認。
- `kawaguchi-nursing-equipment`: 川口市「ねたきり高齢者等紙おむつ支給事業」。旧生成データの要介護4・5/年間6万円相当を、公式の「おおむね65歳以上、常時臥床または認知症等で失禁状態、本人市県民税非課税、カタログから1種類支給」へ補正。

確認:

- 新規公式URL・PDF 7件はすべて到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,361件から1,364件へ増加。埼玉県ローカル公式確認済みは26件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,567 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 3 追加ログ

埼玉県の未公式確認slugから、川口市の高齢者緊急通報・耐震診断、所沢市の重度心身障害児等医療費助成3件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの一律無料・上限額・全額助成の表現を、公式ページで確認できる対象範囲と利用者負担へ補正した。

追加:

- `kawaguchi-elderly-support`: 川口市「生活支援事業（緊急通報装置の貸与）」。急変のおそれがあるおおむね65歳以上の単身高齢者・高齢者世帯は機器貸与無料。疾患要件不要の有料契約型もあるため、旧生成データの一律無料表記を補正。
- `kawaguchi-seismic-diagnosis`: 川口市「住宅の耐震診断補助金」。令和8年度新規受付開始、平成12年5月31日以前に建築された住宅が対象。戸建ては耐震診断費用3分の2・上限6万5千円、共同住宅等は1戸当たり5万円・全体150万円上限へ補正。
- `tokorozawa-disability-medical`: 所沢市「重度心身障害児等医療費助成制度」。身体障害者手帳1から3級、療育手帳○A/A/B、精神障害者保健福祉手帳1級等を対象に、保険診療分の一部負担金などを助成。令和8年10月から精神障害者保健福祉手帳2級かつ自立支援医療（精神通院医療）認定者も対象追加。旧生成データの自己負担全額助成表記を公式範囲へ補正。

確認:

- 新規公式URL・PDF 4件はすべて到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,364件から1,367件へ増加。埼玉県ローカル公式確認済みは29件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,574 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 4 追加ログ

埼玉県の未公式確認slugから、川越市の障害者医療費・旧耐震建築物耐震診断/改修、所沢市の子ども医療費4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「全額助成」「無料」「上限60万円」などの表現を、公式ページの対象範囲・補助率・償還払い条件へ補正した。

追加:

- `kawagoe-disability-medical`: 川越市「重度心身障害者医療費支給制度」。保険診療の一部負担金等を助成。身体障害者手帳4級は令和9年7月31日まで、精神障害者保健福祉手帳2級は令和8年4月1日から精神通院に係る自立支援医療自己負担額が対象。21,000円以上等は償還払い。
- `kawagoe-seismic-diagnosis`: 川越市「旧耐震建築物の耐震診断補助制度」。令和8年度募集は2026年4月1日から12月4日。木造住宅等は診断費3分の2・上限6万円。
- `kawagoe-housing-seismic`: 川越市「旧耐震建築物の耐震改修補助制度」。令和8年度募集は2026年4月1日から12月4日。木造住宅等は改修費23%・上限30万円。旧生成データの上限60万円を補正。
- `tokorozawa-child-medical`: 所沢市「子ども医療費助成制度」。0歳から高校生年代まで、所得制限なし。保険診療分の医療費一部負担金を助成し、県外受診や1か月21,000円以上等は償還払い。

確認:

- 新規公式URL 3件はすべてHTTP 200確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,367件から1,371件へ増加。埼玉県ローカル公式確認済みは33件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,578 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 5 追加ログ

埼玉県の未公式確認slugから、熊谷市の子ども医療費、木造住宅耐震診断・耐震改修、あんしんコール、熊谷市社会福祉協議会の紙おむつ給付5件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。耐震制度は市公式ページだけでなく案内PDFと令和8年度要綱PDFで補助率・上限額を確認した。

追加:

- `kumagaya-child-medical`: 熊谷市「こども医療費の助成」。18歳年度末まで、所得制限なし。保険診療自己負担分と高校生を除く入院時食事療養標準負担額を助成。県外受診や21,000円以上等は償還払い。
- `kumagaya-seismic-diagnosis`: 熊谷市「木造住宅耐震診断補助金」。昭和56年5月31日以前着工の2階建て以下の木造住宅が対象。耐震診断費用2分の1・上限7万5千円。旧生成データの上限5万円を補正。
- `kumagaya-housing-seismic`: 熊谷市「木造住宅耐震改修等補助金」。耐震改修費用3分の1・上限60万円、簡易耐震改修費用2分の1・上限20万円。旧生成データの上限30万円を補正。
- `kumagaya-elderly-support`: 熊谷市「あんしんコール事業」。ひとり暮らし高齢者や身体障害者の緊急対応・健康相談・見守りを行う機器装置。基本使用料無料、通信料・電気料等は自己負担。
- `kumagaya-nursing-equipment`: 熊谷市社会福祉協議会「紙おむつ給付事業」。熊谷市在住で常時おむつを必要とする在宅生活者のうち、要介護4・5、身体障害者手帳1・2級、療育手帳○A・A等が対象。紙おむつ等を無料給付。旧生成データの要介護3以上・月額6,000円相当を補正。

確認:

- 新規公式URL・PDF 7件はすべて到達確認済み。
- リンク監査で既存の期限切れ抑止レコード `minato-study-abroad` の旧関連イベントURL `https://www.city.minato.tokyo.jp/kyouikushomu/ryugakutaikenprogram.html` が404化していることを検出。海外留学専用奨学金の公式確認不可という判定は維持し、到達可能な港区公式の海外留学支援事業・奨学金情報URLのみを `src/data/grants/verified-tokyo-local-2026.ts` に残した。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,371件から1,376件へ増加。埼玉県ローカル公式確認済みは38件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,584 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 6 追加ログ

埼玉県の未公式確認slugから、春日部市のこども医療費、住宅リフォーム、家族介護用品支給、配食サービス、重度要介護高齢者手当5件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。通常公開は4件、住宅リフォームは令和8年度分が予算額到達で受付終了しているため、期限切れ扱いで通常一覧から除外する抑止レコード。

追加:

- `kasukabe-child-medical`: 春日部市「こども医療費」。18歳到達後最初の3月31日までの子どもを対象に、保険診療の一部負担金を助成。旧生成データの「18歳まで無料」を、公式の対象範囲・対象外費用・受給資格登録が分かる表現へ補正。
- `kasukabe-housing-reform`: 春日部市「住宅リフォーム助成制度」。令和8年度は予算額に達したため受付終了。上限10万円等の制度内容は公式確認しつつ、通常の募集中制度としては除外。
- `kasukabe-nursing-equipment`: 春日部市「家族介護用品支給」。対象はおおむね65歳以上で市内在住の在宅高齢者のうち要介護4または5に該当する市県民税非課税世帯。旧生成データの要介護3以上を補正。
- `kasukabe-elderly-support`: 春日部市「配食サービス」。2026年7月1日から事業再開。自己負担は1食400円で、市が自己負担額を超えた分を助成し、手渡しによる安否確認も実施。
- `kasukabe-severe-care-allowance`: 春日部市「重度要介護高齢者手当」。65歳以上・要介護4または5・本人非課税等の在宅高齢者へ月額5,000円を支給。公式確認済みの新規制度として追加。

確認:

- 新規公式URL 7件はすべて到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,376件から1,380件へ増加。期限切れは102件、埼玉県ローカル公式確認済みは42件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,592 件生成。
- `npm run audit:deadlines`: failures 0。`kasukabe-housing-reform` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 7 追加ログ

埼玉県の未公式確認slugから、草加市のこども医療費、重度心身障害者医療費、就学援助、家具転倒防止器具取付費助成4件を公式一次情報に基づき `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「無料」「第3子給食補助」「家庭用防災設備5万円」などの抽象・推測表記を、草加市公式ページと令和8年度PDFで確認できる制度名・金額へ補正した。

追加:

- `soka-child-medical`: 草加市「こども医療費支給制度」。高校3年生まで、通院・入院とも18歳到達後最初の3月31日まで。埼玉県内医療機関では受給者証提示で保険診療分の窓口負担なし。旧生成データの「18歳まで無料」を補正。
- `soka-disability-medical`: 草加市「重度心身障害者医療費の支給」。身体障害者手帳1から3級、療育手帳マルA・A・B、精神障害者保健福祉手帳1級等が対象。所得制限と対象外費用を公式範囲へ補正。
- `soka-school-lunch`: 草加市「就学援助制度」。旧生成データの第3子以降給食費補助ではなく、令和8年度就学援助として公式確認。入学準備金・新入学児童生徒学用品費は小57,060円・中63,000円、給食費は現物支給。
- `soka-bousai-equipment`: 草加市「家具転倒防止器具取付費助成金」。旧生成データの家庭用防災設備購入補助金・上限5万円ではなく、家具転倒防止器具の取付工事費3分の2・上限11,000円へ補正。

確認:

- 新規公式URL・PDF/DOCX 8件は到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,380件から1,384件へ増加。埼玉県ローカル公式確認済みは46件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,598 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 8 追加ログ

埼玉県の未公式確認slugから、越谷市の重度心身障害者医療費、就学援助、ゼロカーボン推進補助金、家庭用防災設備購入助成の公式確認不可抑止4件を `src/data/grants/verified-local-misc-2026.ts` に追加した。既存の `koshigaya-child-medical` は公式本文を再確認し、対象年齢、現物給付、対象外費用、登録期限を補強した。

追加・補正:

- `koshigaya-child-medical`: 既存公式確認済みレコードを補強。令和6年4月診療分から18歳年度末まで、埼玉県内医療機関では保険情報と受給資格証の提示で保険診療一部負担金の窓口支払いなし。15日以内登録、対象外費用、償還払いを反映。
- `koshigaya-disability-medical`: 越谷市「重度心身障害者医療費支給制度」。身体障害者手帳1から3級、療育手帳マルA/A/B、精神障害者保健福祉手帳1級等が対象。所得制限、65歳以上新規取得者の対象外、現物給付と償還払いを公式範囲へ補正。
- `koshigaya-learning-support`: 越谷市「就学援助制度」。令和8年度申請は2026年4月10日から2027年1月29日まで。5月29日までに申請し認定された場合は4月1日から対象、6月1日以降は申請月翌月から対象。画像PDFの手引きも確認。
- `koshigaya-energy-support`: 越谷市「ゼロカーボン推進補助金（家庭用）」。太陽光発電設備1kWあたり2万円、住宅上限8万円・市内事業者契約上限10万円・マンション上限20万円、蓄電池/V2H/EV/PHEV各5万円、ZEH20万円。前期受付終了、後期は2026年10月5日受付予定。
- `koshigaya-bousai-equipment`: 越谷市公式では感震ブレーカー啓発と埼玉県家具固定サポーター制度案内のみ確認。生成データの家庭用防災設備購入助成制度・最大2万円は現行公式補助制度として確認できないため、期限切れ扱いで通常一覧から除外。

確認:

- 新規・補強公式URL/PDF 13件は到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,384件から1,387件へ増加。期限切れは103件、埼玉県ローカル公式確認済みは49件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,604 件生成。
- `npm run audit:deadlines`: failures 0。`koshigaya-bousai-equipment` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 9 追加ログ

埼玉県の未公式確認slugから、さいたま市の多子世帯保育料無償化、多子世帯子育て応援金、自立支援医療（精神通院医療）、公設放課後児童クラブ指導料、空き家活用リフォーム補助金の公式確認不可抑止5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「第2子以降無料」「18歳以下全員に5万円」「月額最大1万円減免」「空き家リフォーム最大50万円」などの推測・過大表記を、さいたま市公式ページで確認できる制度名・対象条件へ補正した。

追加:

- `saitama-childcare-subsidy`: さいたま市「多子世帯利用者負担額（保育料）無償化支援事業」。認可保育所等を利用する家庭の第3子以降で、年度初日に満3歳未満の児童が対象。利用者負担額を全額免除。旧生成データの第2子以降無料を第3子以降無料へ補正。
- `saitama-parenting-allowance`: さいたま市「多子世帯子育て応援金」。出生してから6か月以内の第3子以降の対象児童1人あたり5万円。旧生成データの18歳以下全員・物価高騰特別給付を公式制度へ補正。
- `saitama-mental-health`: さいたま市「自立支援医療（精神通院医療）」。精神通院医療の自己負担を原則1割に軽減し、所得に応じた月額上限あり。旧生成データの「こころの健康相談・精神科医療費助成」を公式制度名へ補正。
- `saitama-afterschool`: さいたま市「公設放課後児童クラブ指導料」。生活保護世帯等0円、所得税非課税かつ市町村民税非課税世帯0円、市町村民税課税世帯2,000円、その他世帯8,000円。失業・疾病等で収入が著しく減少した場合の減免申請を確認。旧生成データの月額最大1万円減免を公式階層へ補正。
- `saitama-vacant-house`: さいたま市公式ページでは、空き家の適正管理、空き家相談窓口、民間ローン、リフォームマッチングサービス等は確認できるが、市独自の空き家活用リフォーム補助金・最大50万円は確認できないため、期限切れ扱いで通常一覧から除外。

確認:

- 新規公式URL/PDF 8件は到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,387件から1,391件へ増加。期限切れは104件、埼玉県ローカル公式確認済みは53件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,614 件生成。
- `npm run audit:deadlines`: failures 0。`saitama-vacant-house` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: 初回は既存の秋田県URL `https://www.pref.akita.lg.jp/pages/archive/94314` が一過性timeout。再実行で broken 0。

## 2026-07-01 千葉Batch 12 追加ログ

千葉県の未公式確認slugから、柏市の保育料きょうだい軽減、柏市要介護高齢者等住宅改造費補助、船橋市親世帯・子育て世帯近居同居支援、松戸市放課後児童クラブ利用料減免、松戸市成人歯科健康診査5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「第2子以降無料」「介護保険とは別枠で最大20万円」「近居同居最大50万円」「多子世帯第2子半額」「20歳以上」などの表現を、公式ページで確認できる制度名・対象・金額へ補正した。

追加:

- `kashiwa-childcare-subsidy`: 柏市「保育料のきょうだい軽減（多子軽減）」。生計を一にする世帯で2人以上の子どもがいる場合、世帯所得や第1子の年齢にかかわらず、第2子は半額、第3子以降は無料。旧生成データの第2子以降無料を補正。
- `kashiwa-nursing-home-reform`: 柏市「要介護高齢者等住宅改造費補助制度」。要支援・要介護認定者の住宅改造費を支援。補助対象経費上限36万円、課税世帯は3分の1、均等割のみ課税・非課税世帯は90%、最大32万4,000円。
- `funabashi-housing-purchase`: 船橋市「令和8年度親世帯・子育て世帯近居同居支援事業」。親世帯と子育て世帯の近居・同居のための住宅取得支援。助成額は10万円。旧生成データの最大50万円を補正。
- `matsudo-afterschool-care`: 松戸市「放課後児童クラブ」。利用料は月額9,000円、2026年10月から10,000円。就学援助認定世帯・生活保護世帯は申請により減免。旧生成データの多子世帯第2子半額等は公式本文で確認できないため補正。
- `matsudo-dental-checkup`: 松戸市「成人歯科健康診査」。令和9年3月31日時点で18歳以上の松戸市民が対象、費用無料、委託医療機関へ電話申込み。旧生成データの20歳以上を補正。

確認:

- 新規公式URL/PDF 8件は到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,391件から1,396件へ増加。千葉県ローカル公式確認済みは85件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,625 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: 初回は既存の神崎町URL群が一過性503。再実行で broken 0。

## 2026-07-01 千葉Batch 13 追加ログ

千葉県の未公式確認slugから、船橋市の保育料きょうだい軽減、修学金貸付制度、不育症検査費用助成、松戸市の認可外保育施設保育料助成、学校給食費支援5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「不妊治療費助成最大15万円」「奨学金制度月額最大2万円」「認可外保育通年最大4万円」「第3子以降給食費無料」などの表現を、公式ページで確認できる制度名・対象・金額・受付状況へ補正した。

追加:

- `funabashi-childcare-subsidy`: 船橋市「保育料のきょうだい軽減」。同一生計の第2子は半額、第3子以降は無料。第1子の年齢、世帯所得、きょうだいの在籍施設を問わないことを確認。
- `funabashi-scholarship`: 船橋市「修学金貸付制度」。給付ではなく無利子貸付。大学等は私立月額最大3万円、高校等は私立月額最大1万5,000円。令和8年度募集は2026年5月19日に終了しているため期限切れ扱いで通常一覧から除外。
- `funabashi-infertility`: 船橋市「不育症検査費用助成事業」。先進医療として告示された不育症検査の費用7割、上限6万円を助成。旧生成データの不妊治療費助成最大15万円を補正。
- `matsudo-nursery-support`: 松戸市「認可外保育施設の保育料助成」。0歳児から2歳児クラスの住民税課税世帯等が対象、令和7年度上限は月額21,800円。令和7年度後期分受付は2026年4月7日に終了しているため期限切れ扱いで通常一覧から除外。
- `matsudo-school-lunch`: 松戸市「学校給食費に関する支援」。令和8年度は小学校給食費無料、中学校は第1・2子1食62円減額、第3子以降無料等。旧生成データの第3子以降無料のみの表記を補正。

確認予定:

- 新規公式URL/PDF 7件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,396件から1,399件へ増加。期限切れは106件、千葉県ローカル公式確認済みは88件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,638 件生成。
- `npm run audit:deadlines`: failures 0。`funabashi-scholarship` と `matsudo-nursery-support` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 10 追加ログ

埼玉県の未公式確認slugから、越谷市の妊婦支援給付金給付事業、市立小学校の令和8年度学校給食費無償化、居宅介護（介護予防）住宅改修費、令和8年度高齢者帯状疱疹予防接種、保育施設の利用者負担額と幼児教育・保育の無償化5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産・子育て応援給付金」「第3子以降給食費無料」「市独自高齢者住宅改修費給付」「高齢者予防接種費用助成」「第2子以降保育料無料」などの表現を、越谷市公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `koshigaya-birth-bonus`: 越谷市「妊婦支援給付金給付事業」。出産・子育て応援金は令和7年度から妊婦支援給付金へ移行。1回目は妊婦1人あたり5万円、2回目はこども1人あたり5万円。
- `koshigaya-school-lunch`: 越谷市「市立小学校の令和8年度学校給食費無償化」。令和8年度の小学校給食費は保護者負担なし、手続き不要。中学校は対象外だが市独自の一部公費負担を継続。
- `koshigaya-nursing-home-reform`: 越谷市「居宅介護（介護予防）住宅改修費」。要介護・要支援認定者の住宅改修について、20万円を上限に9割・8割・7割を支給。工事前の事前申請が必須。
- `koshigaya-vaccination-support`: 越谷市「令和8年度高齢者帯状疱疹予防接種」。年度年齢65歳から100歳までの5歳刻み等が対象。市内等は自己負担額設定、県外接種は不活化上限9,626円・生上限4,426円の償還払い助成。
- `koshigaya-childcare-subsidy`: 越谷市「保育施設の利用者負担額と幼児教育・保育の無償化」。0〜2歳児は市民税額で利用者負担額を決定、3歳児以上は基本保育料が無償化。旧生成データの第2子以降無料は公式本文で確認できないため補正。

確認予定:

- 新規公式URL/PDF 7件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,399件から1,404件へ増加。期限切れは106件、埼玉県ローカル公式確認済みは58件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,646 件生成。
- `npm run audit:deadlines`: failures 0
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 11 追加ログ

埼玉県の未公式確認slugから、川口市の妊婦のための支援給付、令和8年度利用者負担（保育料）、生殖補助医療費助成事業、結婚新生活支援補助金（令和8年度）、奨学資金貸付制度5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産・子育て応援給付金」「第2子以降保育料無料」「不妊治療費助成最大10万円」「親元近居・同居住宅取得補助金最大30万円」「給付型奨学金月額1万5千円」などの表現を、川口市公式ページで確認できる現行制度名・金額・受付状況へ補正した。

追加:

- `kawaguchi-birth-bonus`: 川口市「妊婦のための支援給付」。令和7年4月1日開始。妊娠時5万円、出産後はこども1人あたり5万円。申請期間は起算日から2年。
- `kawaguchi-childcare-subsidy`: 川口市「令和8年度利用者負担（保育料）」。0〜2歳児保育料は年齢・市区町村民税額で決定。就学前の兄姉が対象施設に在籍する場合の半額・免除、第3子以降0〜2歳児の申出による減免を確認。旧生成データの第2子以降無料は補正。
- `kawaguchi-infertility`: 川口市「生殖補助医療費助成事業」。体外受精・顕微授精等の保険診療または保険診療と併用した先進医療が対象。助成額は1回の治療期間につき上限3万円。治療終了区分ごとの申請期限あり。
- `kawaguchi-housing-purchase`: 川口市「結婚新生活支援補助金（令和8年度）」。令和8年1月1日から令和9年3月31日に婚姻した39歳以下の新婚世帯が対象。住居費・引越費用の一部、最大経費10万円。申請期限は2027年3月31日15時。
- `kawaguchi-scholarship`: 川口市「奨学資金貸付制度」。給付型ではなく本人返還の貸付制度。大学等は私立入学一時金最大50万円・修学金月額最大24,000円、高校等は私立入学一時金最大30万円・修学金月額最大12,000円。令和8年度募集は2026年1月23日に終了しているため期限切れ扱いで通常一覧から除外。

確認予定:

- 新規公式URL/PDF 7件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,404件から1,408件へ増加。期限切れは107件、埼玉県ローカル公式確認済みは62件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,654 件生成。
- `npm run audit:deadlines`: failures 0。`kawaguchi-scholarship` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 12 追加ログ

埼玉県の未公式確認slugから、朝霞市の子育て支援助成金の公式確認不可抑止、妊婦のための支援給付金、重度心身障害者医療費助成、学校給食費の保護者負担軽減策、創エネ・省エネ設備設置費補助金制度5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「育児用品購入費最大5万円」「出産祝い金」「医療費自己負担分の全額助成」「第3子以降の給食費全額補助」「省エネ設備最大10万円」などの表現を、朝霞市公式ページ/PDFで確認できる現行制度名・金額・対象条件へ補正した。

追加:

- `asaka-childcare-subsidy`: 朝霞市公式の子育て支援ページとサイト内検索では、育児用品やチャイルドシート等の購入費を最大5万円助成する現行制度を確認できないため、期限切れ扱いで通常一覧から除外。こども医療費支給制度は既存 `asaka-child-medical` で公式確認済みのため重複掲載を避けた。
- `asaka-birth-bonus`: 朝霞市「妊婦のための支援給付金」。1回目は妊婦1人につき5万円、2回目は胎児1人につき5万円。旧生成データの出産祝い金を現行公式制度へ補正。
- `asaka-disability-medical`: 朝霞市「重度心身障害者医療費助成」。身体障害者手帳1から3級、療育手帳マルA/A/B、精神障害者保健福祉手帳1級等が対象。所得制限、他制度優先、現物給付/償還払い条件を反映。
- `asaka-school-lunch`: 朝霞市「学校給食費の保護者の負担軽減策」。令和8年度は小学校月5,200円支援で保護者負担800円、中学校月3,400円支援で保護者負担3,400円。15歳以下の3人目以降の市立小中学校給食費無償も確認。
- `asaka-energy-support`: 朝霞市「創エネ・省エネ設備設置費補助金制度（令和8年度）」。太陽光発電は1kWあたり35,000円、戸建上限10万円、集合住宅管理組合上限50万円、蓄電池/V2H各10万円等。受付は2026年4月1日から2027年2月26日まで、予算到達時終了。

確認:

- 新規公式URL/PDF 9件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,408件から1,412件へ増加。期限切れは108件、埼玉県ローカル公式確認済みは66件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,660 件生成。
- `npm run audit:deadlines`: failures 0。`asaka-childcare-subsidy` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 13 追加ログ

埼玉県の未公式確認slugから、秩父市の出産祝金、重度心身障害者医療費、学校給食費の完全無償化、介護保険住宅改修費、屋根置き太陽光発電設備・蓄電池及び高効率照明機器補助金5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「第1子5万円・第2子10万円・第3子以降30万円」「医療費自己負担分の全額助成」「給食費半額・第3子以降全額」「介護保険と別枠30万円」「省エネ設備最大15万円」などの表現を、秩父市公式ページ/PDF/DOCXで確認できる制度名・対象・金額へ補正した。

追加:

- `chichibu-birth-bonus`: 秩父市「秩父市出産祝金」。第1子12万円、第2子30万円、第3子以降50万円。旧生成データの金額を公式の令和4年度以降拡充後の金額へ補正。
- `chichibu-disability-medical`: 秩父市「重度心身障害者医療費」。身体障害者手帳1から3級、療育手帳マルA/A/B、精神障害者保健福祉手帳1級等が対象。所得制限、一部負担金助成、高額療養費等控除、現物支給/償還払い条件を反映。
- `chichibu-school-lunch`: 秩父市「学校給食費の完全無償化」。令和7年4月から市立小中学校の給食費を完全無償化。小学生年額54,000円、中学生年額64,500円、手続き不要。
- `chichibu-nursing-home-reform`: 秩父市「介護保険住宅改修費」。介護保険制度の住宅改修で、利用限度額20万円、1割負担の給付上限18万円、2割16万円、3割14万円。工事前の事前申請必須。
- `chichibu-energy-support`: 秩父市「屋根置き太陽光発電設備・蓄電池及び高効率照明機器補助金（令和8年度）」。個人向け太陽光1kWあたり10万円・上限50万円、蓄電池3分の1・上限40万円、個人最大90万円。受付は2026年6月18日開始、実績報告期限は2027年2月19日。

確認:

- 新規公式URL/PDF/DOCX 8件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,412件から1,417件へ増加。期限切れは108件、埼玉県ローカル公式確認済みは71件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,667 件生成。
- `npm run audit:deadlines`: failures 0。
- `npm run audit:links`: broken 0

## 2026-07-01 埼玉Batch 14 追加ログ

埼玉県の未公式確認slugから、入間市の妊婦支援給付金、不妊治療費助成事業、おむつの給付・貸与、ひとり暮らし高齢者等緊急通報システム、木造住宅耐震診断・耐震改修・防災ベッド等補助制度5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産祝い金」「不妊治療費助成の先進医療併用」「介護用品年間6万円相当」「高齢者あんしん見守り」「耐震診断全額助成」などの表現を、入間市公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `iruma-birth-bonus`: 入間市「妊婦支援給付金」。妊娠時5万円、出産後は胎児1人につき5万円。令和7年4月1日開始。旧生成データの多子段階制出産祝い金を現行公式制度へ補正。
- `iruma-infertility`: 入間市「不妊治療費助成事業」。初めて保険診療として実施した生殖補助医療または男性不妊治療が対象。上限10万円、夫婦1組につき初回1回のみ。令和8年10月31日で終了。
- `iruma-nursing-equipment`: 入間市「おむつの給付・貸与」。要支援以上で在宅・常時失禁状態の方が対象。紙おむつは月額5,000円上限、1割自己負担。
- `iruma-elderly-support`: 入間市「ひとり暮らし高齢者等緊急通報システム」。対象要件を65歳以上・75歳以上・身体障害者手帳1/2級等の公式条件へ補正。
- `iruma-seismic-diagnosis`: 入間市「木造住宅耐震診断・耐震改修・防災ベッド等補助制度」。耐震診断は2分の1・上限5万円、耐震改修は23％・上限20万円、防災ベッド等は2分の1・上限10万円。契約・実施前申請が必須。

確認:

- 新規公式URL/PDF 6件は追加前に到達確認済み。古い耐震URLと物価高商品券URLは404だったため採用していない。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,417件から1,422件へ増加。期限切れは108件、埼玉県ローカル公式確認済みは76件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,674 件生成。
- `npm run audit:deadlines`: failures 0。`iruma-infertility` は2026年10月31日期限としてactive側で確認。
- `npm run audit:links`: broken 0

## 2026-07-01 千葉Batch 14 追加ログ

千葉県の未公式確認slugから、野田市の妊婦のための支援給付金、野田市あかちゃんお祝い金、不妊治療費助成金支給事業、奨学金返還支援金支給事業、住宅取得補助金の公式確認不可抑止5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「育児用品購入費最大5万円」「第1子5万円・第2子10万円・第3子以降20万円の出産祝い金」「住宅取得補助金最大50万円」「不妊治療上限10万円」「給付型奨学金」などの表現を、野田市公式ページで確認できる制度名・金額・受付状況へ補正した。

追加:

- `noda-childcare-subsidy`: 野田市「妊婦のための支援給付金」。令和7年4月1日開始。1回目は妊婦1人あたり5万円、2回目はこども・胎児1人あたり5万円。旧生成データの育児用品購入費助成は公式確認できないため、現行公式制度へ補正。
- `noda-birth-bonus`: 野田市「あかちゃんお祝い金」。令和7年4月2日以降に出生し、出生による最初の住民登録が野田市である対象児童1人につき10万円。申請期限は出生日から1年以内。
- `noda-housing-purchase`: 野田市「住宅取得補助金」は、単独の現行公式補助として確認できないため通常一覧から除外。婚姻に伴う住居費支援は既存の `noda-marriage-new-life-support-2026` で掲載済みのため重複掲載を抑止。
- `noda-infertility`: 野田市「不妊治療費助成金支給事業」。人工授精、体外受精、顕微授精等が対象。1回の不妊治療につき上限20万円、回数制限なし。申請期限は治療終了または中断日の翌日から2年以内。
- `noda-scholarship`: 野田市「奨学金返還支援金支給事業」。学生向け給付ではなく若年就業者向けの返還支援。年額上限12万円、通算上限60万円。令和7年度受付は2026年2月28日で終了しているため期限切れ扱いで通常一覧から除外。

確認予定:

- 新規公式URL 7件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,422件から1,425件へ増加。期限切れは110件、千葉県ローカル公式確認済みは91件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,681 件生成。
- `npm run audit:deadlines`: failures 0。`noda-housing-purchase` と `noda-scholarship` は期限切れ扱いで通常一覧から除外。
- `npm run audit:links`: broken 0。3,679ファイルから133,623リンク抽出、7,920件監査。

## 2026-07-01 千葉Batch 15 追加ログ

千葉県の未公式確認slugから、鎌ケ谷市の妊婦のための支援給付金、重度心身障がい者（児）医療費助成、学校給食費の無償化等、紙おむつ給付事業、緊急通報システム5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産祝い金」「重度障がい者医療費自己負担なし」「学校給食費一部補助」「介護用品年額6万円相当」「無料の高齢者見守り支援」などの表現を、鎌ケ谷市公式ページで確認できる現行制度名・金額・対象条件へ補正した。

追加:

- `kamagaya-birth-bonus`: 鎌ケ谷市「妊婦のための支援給付金」。出産・子育て応援給付金から名称変更。妊娠期から子育て期までの伴走型相談支援と経済的支援を組み合わせて実施し、給付には申請が必要。
- `kamagaya-disability-medical`: 鎌ケ谷市「重度心身障がい者（児）医療費助成」。身体障害者手帳1・2級、療育手帳マルA/Aの1/Aの2、精神障害者保健福祉手帳1級が対象。所得制限と対象外条件あり。原則、通院1回・入院1日300円または無料、調剤無料。
- `kamagaya-school-lunch`: 鎌ケ谷市「学校給食費の無償化等」。令和8年4月から市内小学校全学年を無償化し、小学校給食費月額5,920円と国基準額5,200円との差額も公費補てん。市独自で中学校1年生も無償化し、中学生第3子以降の給食費無償化も継続。
- `kamagaya-nursing-equipment`: 鎌ケ谷市「紙おむつ給付事業」。要介護3以上、満65歳以上、市内在宅、常時失禁状態の高齢者に無料で紙おむつ等4種類11品目を給付。施設入所・入院中は対象外。
- `kamagaya-elderly-support`: 鎌ケ谷市「緊急通報システム」。65歳以上のひとり暮らし・高齢者世帯・日中独居で疾患や緊急時対応に不安がある方が対象。課税世帯は月額2,000円＋税、非課税世帯は月額1,000円＋税。

確認予定:

- 新規公式URL/PDF 7件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,425件から1,430件へ増加。期限切れは110件、千葉県ローカル公式確認済みは96件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,688 件生成。
- `npm run audit:deadlines`: failures 0。期限切れ一覧への新規追加なし、`kamagaya-school-lunch` は2027年3月8日期限としてactive側で確認。
- `npm run audit:links`: broken 0。3,686ファイルから133,997リンク抽出、7,934件監査。

## 2026-07-01 千葉Batch 16 追加ログ

千葉県の未公式確認slugから、袖ケ浦市の妊婦のための支援給付金、重度心身障害者（児）医療費助成制度、令和8年度学校給食費の負担軽減・第3子以降免除、高齢者紙おむつ等支給、緊急通報システムの貸与5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産祝い金」「医療費自己負担なし」「第3子以降無料のみの給食費補助」「介護用品年額6万円相当」「高齢者見守り支援」などの表現を、袖ケ浦市公式ページで確認できる制度名・金額・対象条件へ補正した。

追加:

- `sodegaura-birth-bonus`: 袖ケ浦市「妊婦のための支援給付金」。令和7年4月1日以降の妊娠届出・面談・袖ケ浦市住民等が対象。1回目は胎児心拍確認日から2年を経過する日の前日まで、2回目は妊娠32週以降で5万円×胎児数。
- `sodegaura-disability-medical`: 袖ケ浦市「重度心身障害者（児）医療費助成制度」。対象手帳、65歳以上新規手帳取得の対象外、所得制限235,000円以上、非課税世帯0円・その他通院1回/入院1日最大300円を反映。
- `sodegaura-school-lunch`: 袖ケ浦市「令和8年度学校給食費に関するお知らせ」と「第3子以降学校給食費免除」。小学校児童は月額5,300円を保護者負担0円、中学校生徒は月額6,300円のうち保護者負担4,650円据え置き。中学生の第3子以降は申請により全額免除。
- `sodegaura-nursing-equipment`: 袖ケ浦市「高齢者紙おむつ等支給」。在宅で65歳以上の要介護1から5の高齢者を介護する家族、および一人暮らしの要介護者が対象。月額3,000円分、年6回配送、利用料無料。
- `sodegaura-elderly-support`: 袖ケ浦市「緊急通報システムの貸与」。65歳以上のひとり暮らし高齢者等で所得要件を満たす方へ、緊急通報装置等を無料貸与。24時間体制で警備会社が状態確認・救急要請・家族連絡を行う。

確認予定:

- 新規公式URL 8件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,430件から1,435件へ増加。期限切れは110件、千葉県ローカル公式確認済みは101件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,698 件生成。
- `npm run audit:deadlines`: failures 0。期限切れ一覧への新規追加なし。
- `npm run audit:links`: broken 0。3,696ファイルから134,378リンク抽出、7,951件監査。

## 2026-07-01 千葉Batch 17 追加ログ

千葉県の未公式確認slugから、富里市の利用者負担額【保育料】、妊婦のための支援給付、結婚新生活支援補助金、学校給食費・無償化、紙おむつ等購入助成事業5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設月額最大3万円」「多子段階制の出産祝い金」「給食費一部補助」「介護用品年額6万円相当」などの表現を、富里市公式ページ/PDFで確認できる現行制度名・対象・金額へ補正した。

追加:

- `tomisato-childcare-subsidy`: 富里市「利用者負担額【保育料】」。0歳児から2歳児は市民税所得割額等で算定、3歳児から5歳児は保育料無料。令和6年4月から、0歳児から2歳児の第2子保育料も市独自支援で無料化し、月額2,500円から31,550円の軽減。
- `tomisato-birth-bonus`: 富里市「妊婦のための支援給付」。令和7年4月1日開始。妊娠時5万円、出産後はこども1人あたり5万円。妊娠届出時の面談、新生児訪問、胎児数の届出等を反映。
- `tomisato-newlywed-rent`: 富里市「富里市結婚新生活支援補助金」。2026年1月1日から2027年3月31日までに婚姻届が受理された世帯が対象。夫婦とも29歳以下は上限60万円、夫婦とも39歳以下は上限30万円。住居費、リフォーム費、引越費用等が対象。
- `tomisato-school-lunch`: 富里市「学校給食費・無償化のお知らせ」。富里市立小中学校の学校給食費無償化。保護者と児童生徒が生計同一かつ富里市住所、生活保護・就学援助等による学校給食費支援を受けていないこと等が要件。要件を満たす場合は申請不要。
- `tomisato-nursing-equipment`: 富里市「富里市紙おむつ等購入助成事業」。要介護3から5または身体障害者手帳1級・2級で、在宅で常時紙おむつを必要とする方が対象。紙おむつ・尿取りパッドに使える1枚1,000円の助成券を交付。

確認予定:

- 新規公式URL/PDF 6件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/data/grants/verified-hyogo-municipal-childcare-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,435件から1,440件へ増加。期限切れは110件、千葉県ローカル公式確認済みは106件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,709 件生成。
- `npm run audit:deadlines`: failures 0。期限切れ一覧への新規追加なし。
- `npm run audit:links`: broken 0。3,707ファイルから134,759リンク抽出、7,967件監査。
- リンク監査中に既存の `shinonsen-child-medical-2026` で404になっていた新温泉町PDFを検出。新温泉町の公式HTML出典3件はいずれも200で到達確認できたため、404 PDFのみ `src/data/grants/verified-hyogo-municipal-childcare-2026.ts` から除外した。

## 2026-07-01 千葉Batch 18 追加ログ

千葉県の未公式確認slugから、印西市の保育園・認定こども園等の利用者負担額、妊婦のための支援給付、重度心身障害者（児）医療費助成、学校給食費の無償化、紙おむつ給付サービス5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設月額最大3万円」「多子段階制の出産祝い金」「重度障がい者医療費自己負担なし」「給食費一部補助」「介護用品年額6万円相当」などの表現を、印西市公式ページ/PDFで確認できる現行制度名・対象・金額へ補正した。

追加:

- `inzai-childcare-subsidy`: 印西市「保育園・認定こども園等の利用者負担額」。令和8年度利用案内で、3歳児から5歳児の保育料0円、0歳児から2歳児は市民税所得割額等の階層別。0歳児から2歳児の第2子半額、第3子以降無料を反映。
- `inzai-birth-bonus`: 印西市「妊婦のための支援給付」。令和7年4月開始。1回目は妊婦1人あたり5万円、2回目は妊娠しているこどもの人数×5万円。妊娠届出時、妊娠8か月頃、出産後の伴走型相談支援を反映。
- `inzai-disability-medical`: 印西市「重度心身障害者（児）医療費助成」。身体障害者手帳1級・2級、療育手帳Aの2以上、精神障害者保健福祉手帳1級等が対象。所得制限、65歳以上新規対象外、課税世帯通院1回・入院1日200円、非課税世帯と調剤無料を反映。
- `inzai-school-lunch`: 印西市「学校給食費の無償化」。令和6年9月から印西市立小中学校の学校給食費を無償化。学校給食センター案内も確認。
- `inzai-nursing-equipment`: 印西市「紙おむつ給付サービス」。市内在住65歳以上、要介護3から5、在宅で常時失禁状態の高齢者が対象。入院中・介護保険施設入所中は対象外。令和8年度パンフレットで3か月ごと配送・年度4回給付を確認。

確認予定:

- 新規公式URL/PDF 9件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,440件から1,445件へ増加。期限切れは110件、千葉県ローカル公式確認済みは111件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,715 件生成。
- `npm run audit:deadlines`: failures 0。期限切れ一覧への新規追加なし。
- `npm run audit:links`: broken 0。3,713ファイルから135,136リンク抽出、7,982件監査。
- リンク監査中に、今回追加した `inzai-nursing-equipment` の紙おむつPDF 2件が404であることを検出。印西市公式ページ上の現行添付ファイル `sinnseihouhou.pdf` と `r8catalog.pdf` は200で到達確認できたため差し替えた。
- リンク監査中に、既存の `niigata-city-led-lighting-installation-support-2026` の旧Q&A PDF `LEDQA8.pdf` が404であることを検出。新潟市公式ページに掲載されている現行Q&A PDF `LEDQAver85.pdf` は200で到達確認できたため差し替えた。

## 2026-07-01 千葉Batch 19 追加ログ

千葉県の未公式確認slugから、白井市の令和8年度の保育所等利用申込み・保育料、妊婦のための支援給付、重度心身障害者医療費助成、小中学校給食費の無償化、紙おむつ等の給付5件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設月額最大3万円」「多子段階制の出産祝い金」「重度障がい者医療費自己負担なし」「学校給食費一部補助」「介護用品年額6万円相当」などの表現を、白井市公式ページ/PDFで確認できる現行制度名・対象・金額へ補正した。

追加:

- `shiroi-childcare-subsidy`: 白井市「令和8年度の保育所等利用申込み・保育料」。令和8年度保育所等利用のご案内PDFで、保育料は利用時間の認定区分や保護者所得等に応じて決まることを確認。旧生成データの認可外保育施設月額最大3万円助成を、公式の保育所等利用者負担制度へ補正。
- `shiroi-birth-bonus`: 白井市「妊婦のための支援給付」。妊娠時5万円、出産時は胎児の人数×5万円。妊婦等包括相談支援と一体的に実施。旧生成データの多子段階制出産祝い金を現行公式制度へ補正。
- `shiroi-disability-medical`: 白井市「重度心身障害者医療費助成」。身体障害者手帳1・2級、療育手帳マルAからAの2、精神障害者保健福祉手帳1級等が対象。64歳までに対象になった方が申請でき、課税世帯は通院1回・入院1日300円、所得制限あり。
- `shiroi-school-lunch`: 白井市「小中学校給食費の無償化」。国・千葉県・市の制度を組み合わせ、市立小中学校の学校給食費を無償化・負担軽減。小学校と通常の中学校負担軽減は手続き不要、中学校第3子以降は申請が必要。
- `shiroi-nursing-equipment`: 白井市「紙おむつ等の給付」。65歳以上で白井市の要介護3・4・5認定を受け居宅でおむつを使用している方、または身体障害者手帳1・2級で居宅でおむつを使用している方が対象。紙おむつの種類ごとに上限枚数を設定して現物給付。

確認:

- 新規公式URL/PDF 7件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,445件から1,450件へ増加。期限切れは110件、千葉県ローカル公式確認済みは116件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,724 件生成。
- `npm run audit:deadlines`: failures 0。期限切れ一覧への新規追加なし。
- `npm run audit:links`: broken 0。3,722ファイルから135,517リンク抽出、7,998件監査。

## 2026-07-01 千葉Batch 20 追加ログ

千葉県の未公式確認slugから、四街道市の幼児教育・保育の無償化、伴走型相談支援・経済的支援（妊婦支援給付金）、結婚新生活支援補助金の重複抑止、重度心身障害者（児）医療費助成、学校給食費、介護用品の給付、緊急通報装置7件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設月額最大3万円」「多子段階制の出産祝い金」「結婚新生活支援の重複slug」「重度障がい者医療費自己負担なし」「学校給食費一部補助」「介護用品年額6万円相当」「高齢者見守り無料」などの表現を、四街道市公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `yotsukaido-childcare-subsidy`: 四街道市「幼児教育・保育の無償化」。3歳児から5歳児、市民税非課税世帯の0歳児から2歳児などが対象。認可外保育施設等は3歳児から5歳児が月額37,000円まで、0歳児から2歳児の市民税非課税世帯が月額42,000円まで無償化。旧生成データの認可外保育施設月額最大3万円を公式内容へ補正。
- `yotsukaido-birth-bonus`: 四街道市「伴走型相談支援・経済的支援（妊婦支援給付金）」。妊婦1人あたり5万円、胎児1人あたり5万円。申請期限は1回目が胎児心拍確認日から2年以内、2回目が出産予定日の8週間前から2年以内。
- `yotsukaido-newlywed-rent`: 四街道市「結婚新生活支援補助金」は既存の公式確認済み `yotsukaido-marriage-new-life-support-2026` で掲載済みのため、生成slugを重複抑止として通常一覧から除外。
- `yotsukaido-disability-medical`: 四街道市「重度心身障害者（児）医療費助成」。対象手帳、65歳以上新規対象外、所得要件235,000円未満、課税世帯の通院1回・入院1日300円、薬局無料を反映。
- `yotsukaido-school-lunch`: 四街道市「学校給食費について」。令和8年度は小学生分無料、中学生分年額64,900円。小学生分は国月額5,200円・市月額1,000円負担、中学生分は市が月額1,500円を負担し保護者負担月額5,900円。
- `yotsukaido-nursing-equipment`: 四街道市「介護用品の給付」。市民税非課税世帯の要介護3から5で常時紙おむつ等を使用する在宅生活者が対象。要介護3は月額4,000円、要介護4・5は月額8,000円の引換券。
- `yotsukaido-elderly-support`: 四街道市「緊急通報装置」。おおむね65歳以上のひとり暮らしの人、または要援護高齢者が対象。ひとり暮らし非課税世帯は無料、課税世帯は月額1,000円、その他世帯は課税状況に応じて負担あり。

確認:

- 新規公式URL 6件は追加前に到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/data/grants/link-audit-suppressions.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済み active は1,450件から1,453件へ増加。期限切れは111件、千葉県ローカル公式確認済みは122件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,735 件生成。
- `npm run audit:deadlines`: failures 0。`yotsukaido-newlywed-rent` は重複抑止として期限切れ一覧側で確認。
- `npm run audit:links`: broken 0。3,733ファイルから135,820リンク抽出、8,007件監査。
- リンク監査中に、既存の大牟田市公式URL 5件（こども医療、住宅リフォーム、移住支援、住宅リフォームPDF2件）が監査環境から繰り返しtimeoutすることを検出。直接 `curl` でも20秒timeoutだったため、公式確認済みデータ本体は残しつつ、HTML出力の壊れリンクを避けるため `src/data/grants/link-audit-suppressions.ts` に追加した。

## 2026-07-01 埼玉Batch 15 追加ログ

埼玉県の未公式確認slugから、行田市の3歳未満児保育料無償化・幼児教育保育無償化、妊婦のための支援給付事業、早期不妊治療費助成事業、奨学資金給与、紙おむつ給付事業、木造住宅の耐震診断補助制度6件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設月額助成」「出産祝い金」「不妊治療費上限15万円」「無利子奨学金貸与」「介護用品年額6万円相当」「耐震診断全額助成」などの表現を、行田市公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `gyoda-childcare-subsidy`: 行田市「3歳未満児保育料無償化・幼児教育保育無償化」。令和6年4月から認可保育所等の3歳未満児保育料を所得制限なしで無償化。認可外保育施設等は3歳児から5歳児が月額37,000円まで、0歳児から2歳児の市民税非課税世帯が月額42,000円まで無償化。
- `gyoda-birth-bonus`: 行田市「妊婦のための支援給付事業」。令和7年4月1日開始。1回目は妊婦1人につき5万円、2回目は胎児1人につき5万円。申請期限と流産・死産等の場合の対象を反映。
- `gyoda-infertility`: 行田市「早期不妊治療費助成事業」。過去に不妊治療費助成を受けておらず、治療開始時の妻の年齢が35歳未満の夫婦が対象。保険診療の生殖補助医療等について上限10万円、夫婦1組1回限り。
- `gyoda-scholarship`: 行田市「奨学資金給与」。高等学校・高等専門学校の生徒に月額1万円を給与。令和8年度申請期間は2026年6月23日で終了しているため期限切れ扱いで通常一覧から除外。
- `gyoda-nursing-equipment`: 行田市「紙おむつ給付事業」。市内在宅の要介護3以上、40歳以上の要介護者が対象。非課税・生活保護世帯は月額6,000円、課税世帯は月額3,500円を上限に紙おむつ等を給付。
- `gyoda-seismic-diagnosis`: 行田市「木造住宅の耐震診断補助制度」。1981年5月31日以前着工の2階建て以下の木造一戸建て住宅等が対象。耐震診断費用の2分の1、上限5万円。

確認:

- 新規公式URL 7件は追加後にすべて200で到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,453件から1,458件へ増加。期限切れは112件、埼玉県ローカル公式確認済みは81件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,746 件生成。
- `npm run audit:deadlines`: failures 0。`gyoda-scholarship` は2026年6月23日期限切れとして通常一覧から除外。
- `npm run audit:links`: broken 0。3,744ファイルから136,274リンク抽出、8,025件監査。
- ビルド中に `gyoda-seismic-diagnosis` の関連カテゴリへ未定義の `disaster-prevention` を使っていたことを検出。既存カテゴリに合わせて `disaster` へ修正し、再検証済み。

## 2026-07-01 埼玉Batch 16 追加ログ

埼玉県の未公式確認slugから、加須市の子育て支援医療費、妊婦のための支援給付金・誕生記念祝い品、三世代ふれあい家族住宅取得等補助金、不妊治療費助成、保育士奨学金返済支援事業、家族介護用品の支給、耐震診断・耐震改修の補助制度7件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設月額補助」「多子段階制出産祝い金」「住宅取得最大50万円」「不妊治療年2回」「学生向け奨学金貸与」「介護用品年額6万円相当」「木造住宅耐震診断最大5万円」などの表現を、加須市公式ページ/PDFで確認できる現行制度名・対象・金額へ補正した。

追加:

- `kazo-childcare-subsidy`: 加須市「子育て支援医療費」。0歳から18歳年度末までの児童が対象。埼玉県内の現物給付対応医療機関では、受給資格証とマイナ保険証等の提示により原則として保険診療一部負担金の支払い不要。
- `kazo-birth-bonus`: 加須市「妊婦のための支援給付金・誕生記念祝い品」。妊婦1人につき5万円、胎児1人につき5万円。出生後最初の住民登録が加須市の子どもには絆サポート券10,000円分。
- `kazo-housing-purchase`: 加須市「三世代ふれあい家族住宅取得等補助金」。三世代同居を目的に住宅を新築・購入・増改築した世帯が対象。市内事業者契約30万円、市外事業者契約20万円。
- `kazo-infertility`: 加須市「不妊治療費助成」。保険診療として実施した体外受精・顕微授精・男性不妊治療が対象。高額療養費等控除後の2分の1、夫婦1組1年度上限15万円、通算5年度まで。
- `kazo-scholarship`: 加須市「保育士奨学金返済支援事業」。市内民間認可保育所等に新たに就労した常勤保育士が対象。年額18万円（月額15,000円）上限、最大5年間。令和7年度交付申請は2025年8月29日で一旦終了しているため期限切れ扱いで通常一覧から除外。
- `kazo-nursing-equipment`: 加須市「家族介護用品の支給」。市民税非課税世帯の在宅要介護高齢者を常時介護する介護者が対象。紙おむつ、尿とりパッド、使い捨て手袋等を月額6,300円上限で支給。
- `kazo-seismic-diagnosis`: 加須市「耐震診断・耐震改修の補助制度」。昭和56年5月以前着工の自己所有・居住中の木造住宅等が対象。耐震診断上限10万円、耐震改修上限50万円。

確認:

- 新規公式URL/PDF 9件は追加後にすべて200で到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,458件から1,464件へ増加。期限切れは113件、埼玉県ローカル公式確認済みは87件。
- `npm run lint`: エラー0、既知警告5件
- `npm run build`: 成功。静的ページ 3,760 件生成。
- `npm run audit:deadlines`: failures 0。`kazo-scholarship` は2025年8月29日期限切れとして通常一覧から除外。
- `npm run audit:links`: broken 0。3,758ファイルから136,804リンク抽出、8,048件監査。

## 2026-07-01 埼玉Batch 17 追加ログ

埼玉県の未公式確認slugから、本庄市の子ども医療費の助成、妊婦のための支援給付金、空き家利活用補助金、ウェルカムベイビー助成金事業（不妊治療費助成金）、本庄市育英資金貸付制度、本庄市移住就業等支援金、要介護者紙おむつサービス事業、木造住宅耐震診断・耐震改修等補助金8件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設月額補助」「出産祝い金」「住宅取得最大50万円」「不妊治療費上限15万円」「奨学金制度」「UIJターン支援金」「移住支援金の重複slug」「介護用品年額6万円相当」「木造住宅耐震診断補助金」などの表現を、本庄市公式ページ/PDFで確認できる現行制度名・対象・金額へ補正した。

追加:

- `honjo-childcare-subsidy`: 本庄市「子ども医療費の助成」。0歳から18歳年度末までの子どもが対象。保険診療一部負担金と入院時食事療養標準負担額を助成し、県内医療機関では資格証等の提示で原則支払い不要。
- `honjo-birth-bonus`: 本庄市「妊婦のための支援給付金」。1回目は妊娠届出1回につき5万円、2回目は胎児心拍が確認できた人数×5万円。妊婦等包括相談支援と一体実施。
- `honjo-housing-purchase`: 本庄市「空き家利活用補助金」。地域コミュニティ促進に資する空き家改修が対象。補助対象工事費の3分の2、都市機能誘導区域内は最大100万円、その他区域は最大60万円。
- `honjo-infertility`: 本庄市「ウェルカムベイビー助成金事業（不妊治療費助成金）」。保険診療対象外の特定不妊治療・一般不妊治療が対象。上限10万円、1年度1回、通算5年度まで。
- `honjo-scholarship`: 本庄市「育英資金貸付制度」。高校等月額15,000円以内、大学等月額30,000円以内を無利子貸付。令和8年4月貸付希望は2026年1月30日まで。
- `honjo-uij-turn`: 本庄市「移住就業等支援金」。単身60万円、世帯100万円、18歳未満帯同で30万円加算。東京23区在住・通勤、就業・テレワーク・関係人口UIJターン等の要件を反映。
- `honjo-migration-bonus`: 本庄市「移住就業等支援金」は `honjo-uij-turn` と同一制度のため重複抑止として通常一覧から除外。
- `honjo-nursing-equipment`: 本庄市「要介護者紙おむつサービス事業」。40歳以上の在宅要介護4・5で失禁状態の方が対象。月に一度、紙おむつ等を配送し、課税世帯は費用の1割自己負担。
- `honjo-seismic-diagnosis`: 本庄市「木造住宅耐震診断・耐震改修等補助金」。耐震診断上限5万円、耐震改修上限20万円、耐震シェルター上限20万円、防災ベッド上限10万円。

確認:

- 新規公式URL/PDF 12件は追加後にすべて200で到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/data/grants/link-audit-suppressions.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,472件、期限切れ114件、埼玉県ローカル公式確認済みは95件。
- `npm run lint`: エラー0。既知警告5件。
- `npm run build`: 成功。静的ページ 3,776 件生成。
- `npm run audit:deadlines`: failures 0。`honjo-migration-bonus` は重複抑止・期限切れ扱いとして通常一覧から除外。
- `npm run audit:links`: broken 0。3,774ファイルから137,335リンク抽出、8,066件監査。
- リンク監査中に既存の `meiji-yasuda-life-childcare-community` の公式URL `https://www.meijiyasuda.co.jp/profile/society/` が監査環境からtimeoutすることを検出。直接 `curl` でも20秒timeoutだったため、公式確認済みデータ本体は残しつつ、HTML出力の壊れリンクを避けるため `src/data/grants/link-audit-suppressions.ts` に追加した。
- 再リンク監査中に既存の `fukusaki-child-medical-2026` の福崎町公式URL 5件、`hiroshima-sme-energy-saving-equipment-subsidy-2026` の広島県公式PDF 2件、`koutou-gakkou-shugaku-shienkin` の文科省公式PDF 1件が404となることを検出。今回の本庄市追加とは別件だが、HTML出力の壊れリンクを避けるため `src/data/grants/link-audit-suppressions.ts` に追加した。

## 2026-07-01 埼玉Batch 18 追加ログ

埼玉県の未公式確認slugから、さいたま市の介護予防高齢者住環境改善支援事業、女性起業支援補助金の公式確認不可抑止、介護施設等整備補助金の公式確認不可抑止、移住・定住促進支援金の公式確認不可抑止4件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「高齢者住宅バリアフリー改修補助金・上限30万円」「女性起業支援補助金・最大100万円」「地域密着型介護施設整備費・最大500万円」「東京23区からの移住支援金」などの表現を、さいたま市公式ページ/PDFで確認できる現行制度または公式確認不可の抑止レコードへ補正した。

追加:

- `saitama-barrier-free`: さいたま市「介護予防高齢者住環境改善支援事業」。市内に1年以上居住し、在宅生活、介護保険料滞納なし、生活機能チェックで身体機能低下により要介護状態等となるおそれが高いと判定された65歳以上が対象。手すり取付け、段差解消、床・通路面材料変更、扉取替え、便器取替え等について、介護保険料第1から2段階は対象経費相当額・上限15万円、第3段階以上は3分の2・上限10万円。
- `saitama-women-startup`: さいたま市公式の創業支援カテゴリでは、創業・金融相談、特定創業支援等事業の証明、中小企業資金融資等は確認できるが、生成データの女性起業家向け最大100万円補助は現行の市公式補助制度として確認できないため通常一覧から除外。
- `saitama-nursing-home-reform`: さいたま市公式の介護保険、高齢福祉、高齢介護サービス案内では、介護保険制度、サービス事業所検索、施設一覧、高齢者福祉サービス等は確認できるが、生成データの介護施設等整備補助金・最大500万円は現行の申請可能な公式補助制度として確認できないため通常一覧から除外。
- `saitama-migration-bonus`: さいたま市公式の住まい・引越し、住まい・暮らしカテゴリでは、転出・転入・転居、市営住宅、賃貸住宅への入居支援、既存住宅ガイドブック等は確認できるが、生成データの移住・定住促進支援金・世帯最大100万円は現行の市公式支援金として確認できないため通常一覧から除外。

確認:

- 新規公式URL/PDF 11件は追加後にすべて200で到達確認済み。
- 明治安田の既存 `meiji-yasuda-life-childcare-community` は、前回リンク監査で抑制したtimeout URLを `officialUrl` に残していたため、実行時は公式URLなし扱いになる一方、`audit:deadlines` は公式URLありと判定して期限切れ詳細ページを期待していた。到達可能な明治安田公式「地元の元気プロジェクト」に `officialUrl` を差し替え、詳細生成と期限監査の前提を揃えた。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/data/grants/verified-ngo-national-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,472件、期限切れ117件、埼玉県ローカル公式確認済みは96件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,782 件生成。
- `npm run audit:deadlines`: failures 0。`saitama-women-startup`、`saitama-nursing-home-reform`、`saitama-migration-bonus` と `meiji-yasuda-life-childcare-community` の期限切れ詳細ページ生成・noindex・公開一覧除外を確認。
- `npm run audit:links`: broken 0。3,780ファイルから137,707リンク抽出、8,084件監査。

## 2026-07-01 埼玉Batch 19 追加ログ

埼玉県・越谷市・川口市の未公式確認slug差分から、埼玉県多子世帯応援クーポン事業、埼玉県住宅用省エネ設備導入補助金、埼玉県高齢者在宅生活支援事業、越谷市結婚新生活支援事業補助金、越谷市テレワーク環境整備補助金、川口市中小企業経営革新補助金の6件を `src/data/grants/verified-local-misc-2026.ts` に追加した。いずれも生成データの公式URLまたは候補カテゴリが404、または現行の制度個別ページを確認できないため、通常一覧から外す抑止レコードとして整理した。HTMLに出す `officialUrl` / `sourceUrls` は、404の旧URLではなく、200確認済みの関連公式カテゴリ・現行関連制度ページに限定した。

追加:

- `saitama-child-support`: 旧生成URL `https://www.pref.saitama.lg.jp/a0607/tashi-coupon.html` は404。埼玉県公式の子育て支援カテゴリは200で確認できるが、第3子以降出生世帯へ最大10万円分のクーポンを支給する現行制度ページは確認できないため通常一覧から除外。
- `saitama-housing-eco`: 旧生成URL `https://www.pref.saitama.lg.jp/a0502/shoene-hojo.html` は404。埼玉県公式では住宅における断熱窓改修促進補助金は確認できるが、蓄電池・V2H・HEMS等をまとめて最大35万円補助する現行制度ページは確認できないため通常一覧から除外。
- `saitama-senior-welfare`: 旧生成URL `https://www.pref.saitama.lg.jp/a0603/koureisha/index.html` は404。埼玉県公式の福祉カテゴリは200で確認できるが、配食・緊急通報・外出支援等を月額最大5万円相当で県が一括支援する現行制度ページは確認できないため通常一覧から除外。高齢者在宅福祉サービスは市町村ごとの制度として確認する。
- `koshigaya-newlywed-rent`: 候補URL `https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/sumai/kekkon_shinseikatsu.html` は404。越谷市公式の住まいカテゴリは200で確認できるが、結婚新生活支援事業補助金の現行制度ページは確認できないため通常一覧から除外。
- `koshigaya-telework-bonus`: 越谷市公式の事業者向けカテゴリは200で確認できるが、商工業カテゴリ候補は404で、テレワーク環境整備補助金・最大10万円の現行制度ページは確認できないため通常一覧から除外。
- `kawaguchi-sme-support-v2`: 川口市公式の事業者向けカテゴリは200で確認できるが、候補カテゴリは404で、中小企業経営革新補助金・最大50万円の現行制度ページは確認できないため通常一覧から除外。

確認:

- 採用した公式出典URL 6件は追加後にすべて200で到達確認済み。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,472件、期限切れ123件、埼玉県ローカル公式確認済みは96件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,790 件生成。
- `npm run audit:deadlines`: failures 0。今回追加した6件は期限切れ詳細ページ生成・noindex・公開一覧除外を確認。
- `npm run audit:links`: broken 0。3,788ファイルから138,143リンク抽出、8,096件監査。

## 2026-07-02 神奈川Batch 1 追加ログ

神奈川県の未公式確認slug差分から、相模原市の妊婦のための支援給付事業、横須賀市の妊婦支援給付金・出産子育て応援祝い金、横須賀市高齢者住宅リフォーム補助金（令和8年度受付終了）の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産祝い金」「高齢者住宅改造助成事業・最大30万円」などの表現を、相模原市・横須賀市公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `sagamihara-birth-bonus`: 相模原市「妊婦のための支援給付事業」。1回目は妊婦1人あたり5万円、2回目は胎児の数×5万円。申請期限は1回目が妊娠確定日から2年を経過した日の前日、2回目が出産予定日の8週間前の日から2年を経過した日の前日。
- `yokosuka-birth-bonus`: 横須賀市「妊婦支援給付金・出産子育て応援祝い金」。国制度の妊婦支援給付金は1回目5万円、2回目は胎児1人につき5万円。市独自の出産子育て応援祝い金は2025年10月1日開始で、国制度に上乗せして同額を支給。
- `yokosuka-nursing-home-reform`: 横須賀市「高齢者住宅リフォーム補助金」。税抜20万円以上の対象リフォーム工事に一律10万円。令和8年度の受付及び抽選会は終了しているため、2026年6月15日期限切れ扱いで通常一覧から除外。

確認:

- `kb search "助成金ナビ joseikin-navi-site"` は今回再開時も `kb: command not found`。旧チャットには依存せず、handoff、SAFE_CONTINUATION_PLAN、tasks、repo状態、公式一次情報だけで継続。
- 採用した公式出典URL 4件はすべて200で到達確認。相模原市妊婦支援給付、横須賀市妊婦支援給付、横須賀市出産子育て応援祝い金、横須賀市高齢者住宅リフォーム補助金を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- 追加slugの確認スクリプトで、`sagamihara-birth-bonus` と `yokosuka-birth-bonus` は公式ソース付きactiveとして取得、`yokosuka-nursing-home-reform` は期限切れとして通常取得対象外、3slugの未公式active残りは0件。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,473件、期限切れ125件、神奈川県ローカル公式確認済みは21件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,795 件生成。
- `npm run audit:deadlines`: build前は新規期限切れ詳細ページ未生成のため `yokosuka-nursing-home-reform` で1件失敗したが、build後の再実行では failures 0。期限切れ詳細ページ生成・noindex・公開一覧除外を確認。
- `npm run audit:links`: broken 0。3,793ファイルから138,373リンク抽出、8,107件監査。

## 2026-07-02 神奈川Batch 2 追加ログ

神奈川県の未公式確認slug差分から、横須賀市の2世帯住宅リフォーム等補助金、相模原市の不育症検査費用助成、川崎市の妊婦のための支援給付の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「一般的な住宅リフォーム助成」「不妊治療費助成・最大30万円」「出産・子育て応援給付金」などの表現を、公式ページ本文で確認できる現行制度名・対象・金額へ補正した。

追加:

- `yokosuka-housing-reform`: 横須賀市「2世帯住宅リフォーム等補助金」。市外から転入する子ども家族との同居または近居のために必要なリフォーム費用の2分の1、最大30万円。令和6年4月から近居も対象。リフォーム開始2週間前までに申請し、交付決定前着工は対象外。
- `sagamihara-infertility`: 相模原市「不育症検査費用助成」。流死産検体を用いた遺伝子検査、抗ネオセルフβ2グリコプロテイン1複合体抗体検査などの先進医療検査が対象。申請時に相模原市に住民登録があり、2回以上の流産・死産の既往がある人へ、検査1回につき最大6万円、費用の7割相当を助成。検査費用支払日から60日以内に申請。
- `kawasaki-parenting-allowance`: 川崎市「妊婦のための支援給付」。妊婦支援給付金1回目は妊婦1人あたり5万円、2回目は胎児の数×5万円。所得制限なし。1回目は妊娠の事実確認日から2年以内、2回目は出産予定日の8週間前の日から2年以内。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認。横須賀市2世帯住宅リフォーム等補助金、相模原市不育症検査費用助成、川崎市妊婦のための支援給付を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- 追加slugの確認スクリプトで、`yokosuka-housing-reform`、`sagamihara-infertility`、`kawasaki-parenting-allowance` は公式ソース付きactiveとして取得、3slugの未公式active残りは0件。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,476件、期限切れ125件、神奈川県ローカル公式確認済みは24件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run audit:deadlines`: failures 0。
- `npm run build`: 成功。静的ページ 3,801 件生成。
- `npm run audit:links`: broken 0。3,799ファイルから138,604リンク抽出、8,119件監査。

## 2026-07-02 神奈川Batch 3 追加ログ

神奈川県の未公式確認slug差分から、川崎市の木造住宅耐震改修助成制度、横浜市の木造住宅耐震改修補助事業、藤沢市の木造住宅耐震改修工事等補助金の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「木造住宅耐震改修最大150万円」「耐震改修最大150万円」「木造住宅耐震改修最大100万円」などの表現を、公式ページ本文で確認できる現行制度名・対象・金額へ補正した。

追加:

- `kawasaki-housing-seismic`: 川崎市「木造住宅耐震改修助成制度」。平成12年5月31日以前に建築工事に着手した木造2階建て以下の住宅等が対象。建物全体改修は一般世帯最大130万円、非課税世帯最大180万円。部分改修は一般世帯最大100万円、非課税世帯最大135万円。事前審査が必要で、交付決定前契約等は対象外。
- `yokohama-seismic-diagnosis`: 横浜市「木造住宅耐震改修補助事業」。平成12年5月末日以前に建築確認を得て着工された2階建以下の在来軸組構法の木造個人住宅等が対象。一般世帯最大115万円、非課税世帯最大155万円。令和8年度は2026年4月1日受付開始、完了実績報告締切は2027年2月26日。
- `fujisawa-housing-earthquake`: 藤沢市「木造住宅耐震改修工事等補助金」。平成12年5月31日以前に建築された2階建以下の在来構法による木造住宅等が対象。補強設計、耐震改修工事、工事監理等に要する費用の2分の1、上限115万円。事前相談後に申請し、契約済み工事は対象外。

確認:

- 採用した公式出典URL 3件はすべて本文確認済み。川崎市公式の木造住宅耐震改修助成制度、横浜市公式の木造住宅耐震改修補助事業、藤沢市公式の木造住宅耐震改修工事等補助金を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- 追加slugの確認スクリプトで、`kawasaki-housing-seismic`、`yokohama-seismic-diagnosis`、`fujisawa-housing-earthquake` は公式ソース付きactiveとして取得、3slugの未公式active残りは0件。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,479件、期限切れ125件、神奈川県ローカル公式確認済みは27件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run audit:deadlines`: failures 0。
- `npm run build`: 成功。静的ページ 3,804 件生成。
- `npm run audit:links`: broken 0。3,802ファイルから138,826リンク抽出、8,128件監査。

## 2026-07-02 神奈川Batch 4 追加ログ

神奈川県の未公式確認slug差分から、相模原市の高校生向け給付型奨学金、紙おむつ等の支給、緊急通報サービスの3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「大学生等月額最大3万円」「介護用品月額最大6,250円相当」「高齢者安心生活支援事業・年額最大6万円相当」などの表現を、相模原市公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `sagamihara-scholarship`: 相模原市「高校生向け給付型奨学金」。相模原市奨学金（給付型）は3年総額32万円、定時制4年間の場合は総額42万円。相模原市岩本育英奨学金（給付型）は3年総額46万2,000円、定員7人・選考あり。大学生等月額3万円の制度としては扱わない。
- `sagamihara-nursing-equipment`: 相模原市「紙おむつ等の支給」。在宅の60歳以上ねたきり高齢者（要介護4・5）または認知症高齢者、対象障害児者で紙おむつ等の必要が認められる人が対象。年6回、パンツ型・フラット型・テープ型・尿とりパッド等を無料支給。生活保護利用者と市民税所得割課税世帯等は対象外。
- `sagamihara-elderly-support`: 相模原市「緊急通報サービス」。65歳以上のひとり暮らし高齢者・高齢者のみ世帯、常時注意が必要な65歳以上の高齢者または重度身体障害者がいる世帯等が対象。押しボタンで119番通報できる装置を設置し、所定工事費のみ市が負担。回線別の月額利用料は自己負担。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認済み。相模原市公式の高校生向けの奨学金、紙おむつ等の支給、緊急通報サービスを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- 追加slugのテキスト検査で、`sagamihara-scholarship`、`sagamihara-nursing-equipment`、`sagamihara-elderly-support` は公式確認済みデータに各1件追加されていることを確認。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,482件、期限切れ125件、神奈川県ローカル公式確認済みは30件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run audit:deadlines`: failures 0。
- `npm run build`: 成功。静的ページ 3,807 件生成。
- `npm run audit:links`: broken 0。3,805ファイルから139,056リンク抽出、8,137件監査。

## 2026-07-02 神奈川Batch 5 追加ログ

神奈川県の未公式確認slug差分から、横浜市高等学校奨学生（給付型奨学金）、秦野市不妊治療費（先進医療分）助成、秦野市木造建築物耐震改修工事等補助事業の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「私立高校月額最大5.3万円」「不妊治療費助成最大10万円」「木造住宅耐震改修補助金最大100万円」などの表現を、公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `yokohama-scholarship`: 横浜市「横浜市高等学校奨学生（給付型奨学金）」。高校生に年額6万円（月額5,000円）を支給する返還不要の奨学金。令和8年度募集は2026年5月8日に終了しているため、期限切れ扱いで通常一覧から除外。次回令和9年度募集は2027年3月中旬以降に案内予定。
- `hadano-fertility-treatment`: 秦野市「不妊治療費（先進医療分）助成」。保険診療の体外受精・顕微授精と併せて実施した先進医療費が対象。1回の治療で先進医療にかかった費用の10分の7、上限5万円。治療終了日の翌月から6か月以内に申請。
- `hadano-seismic-retrofit`: 秦野市「木造建築物耐震改修工事等補助事業」。昭和56年5月31日以前に在来工法で建築された木造住宅等が対象。耐震診断10分の10・上限8万5千円、補強設計2分の1・上限5万円、耐震改修工事2分の1・上限90万円、工事監理2分の1・上限3万円。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認済み。横浜市公式の高等学校奨学生、秦野市公式の不妊治療費（先進医療分）助成、秦野市公式の木造住宅の耐震診断・補強設計・耐震改修工事支援を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- 追加slugのテキスト検査で、`yokohama-scholarship`、`hadano-fertility-treatment`、`hadano-seismic-retrofit` は公式確認済みデータに各1件追加されていることを確認。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,484件、期限切れ126件、神奈川県ローカル公式確認済みは32件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run audit:deadlines`: build前は新規期限切れ詳細ページ未生成のため `yokohama-scholarship` で1件失敗したが、build後の再実行では failures 0。期限切れ詳細ページ生成・noindex・公開一覧除外を確認。
- `npm run build`: 成功。静的ページ 3,811 件生成。
- `npm run audit:links`: broken 0。3,809ファイルから139,283リンク抽出、8,145件監査。

## 2026-07-02 神奈川Batch 6 追加ログ

神奈川県の未公式確認slug差分から、横浜市の介護保険の住宅改修費、エコハマ（横浜市エコ家電応援キャンペーン）、平塚市木造住宅耐震改修工事の補助金の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「横浜市介護保険住宅改修費支給事業」「省エネ家電買換え補助金」「平塚市木造住宅耐震改修最大100万円」などを、公式ページで確認できる現行内容または受付終了情報へ補正した。

追加:

- `yokohama-nursing-home-reform`: 横浜市「介護保険の住宅改修費」。要支援・要介護者の在宅生活に必要な手すり取付け、段差解消、床材変更、扉取替え、洋式便器等への取替えなどが対象。支給限度基準額20万円で、1割負担の場合は最大18万円。工事着工前の事前申請が必要。
- `yokohama-energy-support`: 横浜市「エコハマ（横浜市エコ家電応援キャンペーン）」。対象省エネ家電の購入価格20%・上限3万円相当を還元する令和6年度第2弾は、予算上限到達により2024年11月5日に早期終了しているため期限切れ扱いで通常一覧から除外。
- `hiratsuka-housing-seismic`: 平塚市「木造住宅耐震改修工事の補助金」。耐震診断評点1.0未満から改修後1.0以上となる木造住宅が対象。耐震改修工事費は補助率5分の4、区分1の非課税世帯では工事費上限120万円と現場監理費上限6万円で最大126万円。令和8年度受付期限は2026年11月末予定。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。横浜市介護保険住宅改修費、横浜市エコハマ、平塚市耐震改修、平塚市耐震診断を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,486件、期限切れ127件、神奈川県ローカル公式確認済みは34件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,815 件生成。
- `npm run audit:deadlines`: failures 0。`yokohama-energy-support` は期限切れ詳細ページ生成・noindex・公開一覧除外を確認。
- `npm run audit:links`: broken 0。3,813ファイルから139,511リンク抽出、8,155件監査。

## 2026-07-02 神奈川Batch 7 追加ログ

神奈川県の未公式確認slug差分から、川崎市自主防災組織防災資器材購入補助金、藤沢市大人用紙おむつの支給、横須賀市重度障害者医療費の助成の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「川崎市マンション防災対策助成金」「藤沢市介護用品支給事業」「横須賀市重度障害者医療費助成制度」などを、公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `kawasaki-bousai-equipment`: 川崎市「自主防災組織防災資器材購入補助金」。マンション管理組合限定の最大100万円制度としては確認せず、公式の自主防災組織向け制度へ補正。防災資器材購入費の2分の1、限度額は組織割35万円＋1世帯600円。
- `fujisawa-nursing-equipment`: 藤沢市「大人用紙おむつの支給（紙おむつ支給事業）」。要介護4・5の40歳以上で合計所得400万円未満、または要支援1から要介護3の65歳以上非課税世帯等が対象。月1回配送で、注文額4,000円以下は1割負担、4,001円以上は4,000円超過額＋400円を自己負担。
- `yokosuka-disability-medical`: 横須賀市「重度障害者医療費の助成」。身体障害者手帳1・2級、知能指数35以下、身体障害者手帳3級かつ知能指数50以下、精神障害者保健福祉手帳1級が対象。保険診療自己負担分を助成し、保険診療以外や入院時食事療養費等は対象外。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。川崎市防災資器材購入補助、川崎市高層ビル・マンション防災対策案内、藤沢市紙おむつ支給、横須賀市重度障害者医療費助成を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,489件、期限切れ127件、神奈川県ローカル公式確認済みは37件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,822 件生成。
- `npm run audit:deadlines`: failures 0。
- `npm run audit:links`: broken 0。3,820ファイルから139,747リンク抽出、8,169件監査。

## 2026-07-02 神奈川Batch 8 追加ログ

神奈川県の未公式確認slug差分から、藤沢市妊婦のための支援給付、藤沢市緊急通報サービス、横須賀市令和8年度給食費の無償化・負担軽減の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「藤沢市出産応援給付金」「藤沢市高齢者見守り支援事業」「横須賀市学校給食費補助制度・第3子以降全額補助」を、公式ページで確認できる現行制度名・対象・金額へ補正した。

追加:

- `fujisawa-birth-bonus`: 藤沢市「妊婦のための支援給付」。旧出産・子育て応援事業は2026年3月30日で受付終了。現行制度は妊婦支援給付金（認定時）妊娠1回5万円、届出時は子ども1人5万円。認定時は胎児心拍確認日から2年以内、届出時は出産予定日の8週間前から2年以内。
- `fujisawa-elderly-support`: 藤沢市「緊急通報サービス」。原則65歳以上のひとり暮らし高齢者等に固定電話回線を利用した緊急通報装置等を貸与。固定型は月額250円、携帯型は月額1,000円で、設置・保守等費用は市負担。
- `yokosuka-school-lunch`: 横須賀市「令和8年度給食費の無償化・負担軽減」。小学校・ろう学校小学部・養護学校小学部は保護者負担0円。中学校等は値上げ分を市が負担し、保護者負担を令和7年度と同額に据え置き。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。藤沢市妊婦支援給付、藤沢市各種手当・給付金、藤沢市緊急通報サービス、横須賀市給食費を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,492件、期限切れ127件、神奈川県ローカル公式確認済みは40件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,825 件生成。
- `npm run audit:deadlines`: failures 0。
- `npm run audit:links`: broken 0。3,823ファイルから139,975リンク抽出、8,179件監査。

## 2026-07-02 神奈川Batch 9 追加ログ

神奈川県の未公式確認slug差分から、藤沢市給付型奨学金制度、藤沢市木造住宅耐震診断補助金、横須賀市自主防災組織等への防災器材等整備費補助金の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「月額最大3万円」「耐震診断費用全額助成」「家庭用防災設備補助金・最大5万円」を、公式ページ/PDFで確認できる現行制度名・対象・金額へ補正した。

追加:

- `fujisawa-scholarship`: 藤沢市「給付型奨学金制度」。2027年度入学者向けに、入学準備奨学資金は上限15万円、学費奨学資金は年額上限40万円。受付期間は2026年8月3日から9月30日まで、時間予約制・郵送不可。
- `fujisawa-seismic-diagnosis`: 藤沢市「木造住宅耐震診断補助金」。平成12年5月31日以前に建築された2階建以下の在来構法の木造住宅等が対象。一般診断または精密診断に要する費用の2分の1、上限6万円。
- `yokosuka-bousai-equipment`: 横須賀市「自主防災組織等への防災器材等整備費補助金」。個人住宅向けではなく、自主防災組織または100戸以上共同住宅単位の自主防災会が対象。品目別補助単価の合計で最大40万円、申請受付は2026年6月1日から9月30日まで。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。藤沢市給付型奨学金、藤沢市木造住宅耐震診断補助、横須賀市防災器材補助、横須賀市令和8年度概要PDFを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,495件、期限切れ127件、神奈川県ローカル公式確認済みは43件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,830 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は516件、activeWithDeadlineは389件。
- `npm run audit:links`: broken 0。3,828ファイルから140,206リンク抽出、8,192件監査。

## 2026-07-02 神奈川Batch 10 追加ログ

神奈川県の未公式確認slug差分から、横須賀市市内創業者支援利子補給金を `src/data/grants/verified-local-misc-2026.ts` に新規追加した。あわせて既存公式確認済みだった藤沢市小児医療費助成制度、横須賀市小児医療費助成の2件を、公式ページ本文で確認できる対象年齢・対象外費用・電子申請情報へ精緻化した。生成データの「中学卒業まで無料」「創業支援事業補助金・最大100万円」を公式現行内容へ補正した。

追加・更新:

- `fujisawa-child-medical`: 既存公式レコードを更新。藤沢市「小児医療費助成制度」は、0歳から18歳年度末までの保険診療自己負担分を助成。生活保護、児童福祉施設等入所、里親委託、他医療費助成受給等は対象外。健康診断、予防接種、差額ベッド代等も対象外。
- `yokosuka-child-medical`: 既存公式レコードを更新。横須賀市「小児医療費助成」は、0歳から18歳年度末までの保険診療自己負担分を助成。こども医療証とマイナ保険証等の提示、対象外制度、保険診療外費用、2026年5月19日からのマイナポータル電子申請開始を反映。
- `yokosuka-startup-support`: 横須賀市「市内創業者支援利子補給金」。日本政策金融公庫国民生活事業または神奈川県中小企業制度融資の創業支援融資を受け、市内で2025年4月1日から2027年3月31日までに開業した方が対象。第1回から第12回までの支払利子を補給し、上限15万円。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認。藤沢市公式の小児医療費助成制度、横須賀市公式の小児医療費助成、横須賀市公式の市内創業者支援利子補給金を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,496件、期限切れ127件、神奈川県ローカル公式確認済みは44件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,833 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は517件、activeWithDeadlineは390件。
- `npm run audit:links`: broken 0。3,831ファイルから140,285リンク抽出、8,197件監査。

## 2026-07-02 神奈川Batch 11 追加ログ

神奈川県の未公式確認slug差分から、藤沢市不妊治療費（先進医療分）助成事業、平塚市小児医療費の助成、茅ヶ崎市小児医療費助成制度の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「不妊・不育症治療費助成最大10万円」「中学卒業まで無料」「所得制限あり」などを、公式ページ本文で確認できる現行制度名・対象・金額へ補正した。

追加:

- `fujisawa-fertility-treatment`: 藤沢市「不妊治療費（先進医療分）助成事業」。医療保険適用の体外受精・顕微授精等と併用した先進医療が対象。先進医療費の10分の7、上限5万円。治療終了日から6か月以内に申請。
- `hiratsuka-child-medical`: 平塚市「小児医療費の助成」。0歳から18歳年度末までの入院・通院にかかる保険診療医療費自己負担額を助成。保護者所得制限なし。保険外診療、健康診査、入院時食事代等は対象外。
- `chigasaki-child-medical`: 茅ヶ崎市「小児医療費助成制度」。0歳から高校生世代まで、18歳年度末までの保険適用分自己負担額を助成。所得制限なし。県外受診・治療用装具は払い戻し手続きが必要。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認。藤沢市公式の不妊治療費（先進医療分）助成、平塚市公式の小児医療費助成、茅ヶ崎市公式の小児医療費助成を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,499件、期限切れ127件、神奈川県ローカル公式確認済みは47件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,838 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は517件、activeWithDeadlineは390件。
- `npm run audit:links`: broken 0。3,836ファイルから140,515リンク抽出、8,208件監査。

## 2026-07-02 神奈川Batch 12 追加ログ

神奈川県の未公式確認slug差分から、茅ヶ崎市不育症治療費助成事業、大和市子ども医療費助成、大和市既存住宅の断熱改修工事への補助の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「不妊治療費助成事業」「中学卒業まで無料」「住宅リフォーム助成制度・最大10万円」などを、公式ページ本文で確認できる現行制度名・対象・金額へ補正した。

追加:

- `chigasaki-infertility-treatment`: 茅ヶ崎市「不育症治療費助成事業」。生殖医療専門医による不育症診断後の治療・検査費用が対象。1回の申請につき上限10万円、1年度1回、通算2年度まで。治療終了日から1年以内に申請。
- `yamato-child-medical`: 大和市「子ども医療費助成」。0歳から高校卒業相当年齢、18歳年度末までの保険診療自己負担分を助成。保護者所得制限なし。県外受診などは払い戻し申請。
- `yamato-housing-reform`: 大和市「既存住宅の断熱改修工事への補助」。市内既存住宅の断熱材・窓・ガラス・玄関ドア等の断熱改修が対象。補助率3分の1、戸建住宅は上限120万円。令和8年度申請期間は2026年4月10日から2027年1月29日まで。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認。茅ヶ崎市公式の不育症治療費助成、大和市公式の子ども医療費助成、大和市公式の既存住宅断熱改修補助を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,502件、期限切れ127件、神奈川県ローカル公式確認済みは50件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,844 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は518件、activeWithDeadlineは391件。
- `npm run audit:links`: broken 0。3,842ファイルから140,746リンク抽出、8,220件監査。

## 2026-07-02 神奈川Batch 13 追加ログ

神奈川県の未公式確認slug差分から、大和市新規出店支援事業、小田原市創業融資利子補給金、小田原市木造住宅耐震改修費補助金の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「大和市創業支援事業補助金・最大20万円」「小田原市創業支援補助金・最大50万円」「小田原市住宅リフォーム助成金・最大20万円」を、公式ページ本文で確認できる現行制度名・対象・金額へ補正した。

追加:

- `yamato-startup-support`: 大和市「新規出店支援事業」。市内商店街等の空き店舗を活用した新規出店が対象。対象経費は店舗等賃借料、店舗改装費、設備導入費、販売促進費、水道光熱費等で、対象経費の2分の1・上限100万円。令和8年度は2026年5月1日認定申請開始、セルフチェックリスト・ヒアリング票は2026年7月31日まで、認定申請必要書類は2026年8月31日まで。
- `odawara-business-startup`: 小田原市「創業融資利子補給金」。神奈川県創業支援融資（創業特例）を受けた市内創業予定者・創業者等が対象。利子補給は年間10万円を上限、利子支払開始月から3年以内。
- `odawara-housing-reform`: 小田原市「木造住宅耐震改修費補助金」。昭和56年5月31日以前に建築確認を得て着工した2階建以下の木造住宅等が対象。耐震設計費上限10万円、工事監理費上限5万円、耐震改修費は要配慮者世帯上限115万円・その他上限85万円。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。大和市公式の新規出店支援事業、小田原市公式の起業・創業支援、同中小企業融資制度、同木造住宅耐震改修費補助金、同木造住宅耐震診断費補助金を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,505件、期限切れ127件、神奈川県ローカル公式確認済みは53件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,847 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は519件、activeWithDeadlineは392件。
- `npm run audit:links`: broken 0。3,845ファイルから140,972リンク抽出、8,231件監査。

## 2026-07-02 神奈川Batch 14 追加ログ

神奈川県の未公式確認slug差分から、海老名市奨学生募集、海老名市住宅断熱改修促進事業補助金、茅ヶ崎市移住定住促進助成金の公式確認不可抑止の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「高校生月額1万円・大学生月額3万円」「太陽光・エネファーム等最大15万円」「移住定住促進助成金・最大30万円」を、公式ページ本文で確認できる現行制度または公式確認不可の扱いへ補正した。

追加:

- `ebina-scholarship`: 海老名市「令和8年度海老名市奨学生募集」。高等学校等に通う方を対象に、年額8万円を給付する返済不要の奨学金。令和8年度募集は2026年4月10日で受付終了しているため、期限切れ扱いで通常一覧から除外。
- `ebina-housing-eco`: 海老名市「住宅断熱改修促進事業補助金」。市内の戸建住宅等の断熱改修が対象。省エネ基準相当は補助率2/5・上限20万円、ZEH水準相当は補助率4/5・上限50万円。募集期間は2026年4月15日から12月25日まで、募集件数25件。
- `chigasaki-migration-support`: 茅ヶ崎市の生成データ「移住定住促進助成金・最大30万円」は現行の市公式助成金として確認できないため通常一覧から除外。公式に確認できるのは、スルガ銀行との住宅ローン金利優遇連携、オンライン移住相談、茅ヶ崎暮らしセミナー等。

確認:

- 採用した公式出典URL 6件はすべて200で到達確認。海老名市公式の奨学生募集、同募集要領PDF、海老名市公式の住宅断熱改修補助、同リーフレットPDF、茅ヶ崎市公式のスルガ銀行連携移住定住支援、茅ヶ崎暮らしセミナーを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,506件、期限切れ129件、神奈川県ローカル公式確認済みは54件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run audit:deadlines`: build前は新規期限切れ詳細ページ未生成のため `ebina-scholarship` と `chigasaki-migration-support` で2件失敗したが、build後の再実行では failures 0。
- `npm run build`: 成功。静的ページ 3,852 件生成。
- `npm run audit:links`: broken 0。3,850ファイルから141,202リンク抽出、8,243件監査。

## 2026-07-02 神奈川Batch 15 追加ログ

神奈川県の未公式確認slug差分から、横浜市の認可外保育施設等の施設等利用費、令和8年度既存住宅断熱改修補助制度、重度障害者医療費助成の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「認可外保育施設利用助成金」「省エネ住宅住替え補助金・最大100万円」「重度障害者医療費助成制度」を、公式ページ本文で確認できる現行制度名・対象・金額へ補正した。

追加:

- `yokohama-daycare-support`: 横浜市「認可外保育施設等の施設等利用費」。幼児教育・保育無償化に基づく償還払い。認可外保育施設等の2号認定は月額37,000円、令和8年10月以降は40,300円、3号認定は月額42,000円が上限。請求は四半期ごとに郵送または電子申請。
- `yokohama-housing-purchase`: 横浜市「令和8年度 既存住宅断熱改修補助制度」。子育て世代の住替え補助は1棟断熱改修型で最大150万円、定住補助は最大120万円。2026年5月1日に本申請受付開始、引越し・登記・工事完了等は原則2027年2月28日まで。
- `yokohama-disability-medical`: 横浜市「重度障害者医療費助成」。健康保険加入者で、1・2級身体障害者手帳、知能指数35以下、3級身体障害者手帳かつ知能指数50以下、1級精神障害者保健福祉手帳等が対象。保険診療自己負担額を助成し、食事療養・差額ベッド代・文書料等は対象外。

確認:

- 採用した公式出典URL 6件はすべて200で到達確認。横浜市公式の幼児教育・保育無償化、施設等利用費請求方法、令和8年度施設等利用費手引きPDF、令和8年度既存住宅断熱改修補助制度、重度障害者医療費助成概要、重度障害者医療費助成トップを確認。補助金併用チラシPDF候補1件は404のため出典から除外。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,509件、期限切れ129件、神奈川県ローカル公式確認済みは57件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,857 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は523件、activeWithDeadlineは394件。
- `npm run audit:links`: broken 0。3,855ファイルから141,432リンク抽出、8,257件監査。

## 2026-07-02 神奈川Batch 16 追加ログ

神奈川県の未公式確認slug差分と次回候補から、横須賀市の令和8年度中小企業等省エネ化・生産性向上補助金、横須賀市空き店舗出店促進事業補助金、小田原市空き店舗等利活用促進事業補助金の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「省エネ支援」や次回候補の空き店舗系を、公式ページ本文で確認できる現行制度名・対象・金額・申請期限へ補正した。

追加:

- `yokosuka-energy-support`: 横須賀市「令和8年度中小企業等省エネ化・生産性向上補助金」。市内中小企業等の省エネ・業務効率向上設備導入が対象。A省エネ枠は補助率2分の1・上限50万円、B生産性向上枠は補助率2分の1（小規模事業者3分の2）・上限25万円。設備購入前の交付申請は2026年6月8日から2027年2月1日まで。
- `yokosuka-vacant-store-opening`: 横須賀市「空き店舗出店促進事業補助金」。横須賀商工会議所「まちの寄事業」の認定を受け、市内空き店舗で令和9年3月末までに営業開始する事業者が対象。店舗改装費、備品購入費、宣伝費を2分の1・上限50万円補助。令和8年度募集は第2期2026年8月31日まで。
- `odawara-vacant-store-utilization`: 小田原市「空き店舗等利活用促進事業補助金」。対象エリア内の空き店舗・空き家・空き事務所の所有者向けは改修費等を3分の2・上限100万円、改修物件への出店者向けは広告宣伝費を2分の1・上限10万円補助。事前相談期間は2026年5月25日から12月7日までで、期間中に相談がない事業は対象外。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。横須賀市公式の中小企業等省エネ化・生産性向上補助金、同省エネ枠、同生産性向上枠、横須賀市公式の空き店舗出店促進事業補助金、小田原市公式の空き店舗等利活用促進事業補助金を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,512件、期限切れ129件、神奈川県ローカル公式確認済みは60件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,860 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は526件、activeWithDeadlineは397件。
- `npm run audit:links`: broken 0。3,858ファイルから141,659リンク抽出、8,268件監査。

## 2026-07-02 神奈川Batch 17 追加ログ

神奈川県の未公式確認slug差分と次回候補から、藤沢市の藤沢型認定保育施設保育料補助金、幼稚園教諭等奨学金返済補助金、障がい者等医療費助成制度の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「保育料軽減制度」を、公式ページ本文で確認できる藤沢型認定保育施設向け補助へ補正し、幼稚園教諭等奨学金返済補助と障がい者医療を公式確認済みとして追加した。

追加:

- `fujisawa-childcare-subsidy`: 藤沢市「藤沢型認定保育施設保育料補助金」。藤沢型認定保育施設を月極利用する0～2歳児等が対象。市町村民税所得割額に応じて月額15,000円、10,000円、5,000円、2,000円、0円の区分で保育料を軽減。施設経由で前期・後期の年2回手続き。
- `fujisawa-kindergarten-scholarship-repayment`: 藤沢市「幼稚園教諭等奨学金返済補助金」。奨学金を利用して幼稚園教諭免許または保育士資格を取得し、市内幼稚園等で常勤職員として働く方等が対象。本人が当該年度中に返済した奨学金の2分の1、年額上限20万円。継続申請は補助開始月から60か月まで。
- `fujisawa-disability-medical`: 藤沢市「障がい者等医療費助成制度」。身体障がい者手帳1～3級、知能指数50以下または療育手帳A1・A2・B1相当、精神障がい者保健福祉手帳1・2級等が対象。保険診療自己負担分を助成し、入院時食事代、保険適用外費用、介護保険適用分は対象外。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。藤沢市公式の藤沢型認定保育施設保育料補助金、幼稚園教諭等奨学金返済補助金、障がい者等医療費助成制度、障がい者等医療証・福寿医療証の払戻申請方法を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,515件、期限切れ129件、神奈川県ローカル公式確認済みは63件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,866 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は526件、activeWithDeadlineは397件。
- `npm run audit:links`: broken 0。3,864ファイルから141,887リンク抽出、8,278件監査。

## 2026-07-02 神奈川Batch 18 追加ログ

神奈川県の未公式確認slug差分と次回候補から、藤沢市勤労者住宅資金利子補助制度、藤沢市企業立地等促進事業、横浜市テレワーク推進助成金の公式確認不可抑止の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。藤沢市住宅取得支援は新規申請受付終了、横浜市テレワーク推進助成金は現行の市独自補助として確認不可、藤沢市事業者系は企業立地等促進事業として公式内容へ補正した。

追加:

- `fujisawa-housing-purchase`: 藤沢市「勤労者住宅資金利子補助制度（新規申請受付終了）」。中央労働金庫から借り入れた住宅資金の利子を補助する制度だが、2021年12月までに住宅ローンの初回返済をした方を最後に新規申請受付終了。期限切れ扱いで通常一覧から除外。
- `fujisawa-sme-support`: 藤沢市「企業立地等促進事業」。指定地域における企業立地等への税制上の支援、神奈川県企業立地促進融資の利子相当額5年間全額補助、重点産業立地促進助成制度による賃料等の一部助成を確認。
- `yokohama-telework-bonus`: 生成データの「横浜市テレワーク推進助成金・最大30万円」は現行の横浜市独自補助として公式確認不可。確認できた類似一次情報は、スタートアップポートヨコハマ掲載の令和4年度神奈川県テレワーク導入促進事業費補助金で、事前登録申請締切は2022年7月29日、補助対象期間は2022年12月21日まで。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。藤沢市公式の勤労者住宅資金利子補助制度、企業立地等促進事業、税制上の支援措置、スタートアップポートヨコハマの令和4年度神奈川県テレワーク導入促進事業費補助金記事を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,516件、期限切れ131件、神奈川県ローカル公式確認済みは64件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,873 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は528件、activeWithDeadlineは397件。
- `npm run audit:links`: broken 0。3,871ファイルから142,112リンク抽出、8,289件監査。

## 2026-07-02 神奈川Batch 19 追加ログ

神奈川県の未公式確認slug差分と次回候補から、藤沢市住宅設備改良費の助成、藤沢市幼稚園教諭等就労奨励助成金、藤沢市幼稚園等住宅手当補助金の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データまたは次回候補の「住宅設備改良費」「就労奨励助成金」を、公式ページ本文と要綱PDFで確認できる制度名・対象・金額・事前申請条件へ補正した。

追加:

- `fujisawa-disability-housing-equipment`: 藤沢市「住宅設備改良費の助成」。障がいのある在宅者向けに、天井走行式移動リフトは上限100万円、環境制御装置等は上限60万円、浴室・便所・玄関・台所・廊下等の改良工事は上限80万円。工事前・購入前に障がい者支援課で手続きが必要。
- `fujisawa-kindergarten-employment-incentive`: 藤沢市「幼稚園教諭等就労奨励助成金」。過去1年以内に市内幼稚園等への勤務経験がなく、市内幼稚園または認定こども園へ就職・再就職する幼稚園教諭免許保持者等が対象。助成額は10万円、7万円、5万円、3万円の区分。就労日から3か月以内に申請。
- `fujisawa-kindergarten-housing-allowance`: 藤沢市「幼稚園等住宅手当補助金」。市内幼稚園等の設置者が幼稚園教諭または保育士へ支給する住宅手当を対象に補助。補助対象経費は1人あたり月額3万円上限で、預かり保育事業の実施状況に応じて補助率1/2、3/4、1/4。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。藤沢市公式の住宅設備関連、幼稚園教諭等就労奨励助成金、幼稚園等住宅手当補助金、住宅手当補助金交付要綱PDFを確認。旧候補URL `https://www.city.fujisawa.kanagawa.jp/hoiku/youchien-juutakuteate-hojo.html` は404のため出典に採用しない。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,519件、期限切れ131件、神奈川県ローカル公式確認済みは67件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,880 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は528件、activeWithDeadlineは397件。
- `npm run audit:links`: broken 0。3,878ファイルから142,340リンク抽出、8,300件監査。

## 2026-07-02 神奈川Batch 20 追加ログ

神奈川県の未公式確認slug差分から、川崎市小児医療費助成事業、令和8年度学校給食費の負担軽減、紙おむつ等介護用品の給付の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「中学卒業まで無料」「給食費の全額支援」「月額6,000円相当」を、公式ページ本文で確認できる令和8年度の対象・負担額・利用者負担へ補正した。

追加:

- `kawasaki-childcare-subsidy`: 川崎市「小児医療費助成事業」。令和8年9月から助成対象年齢を中学校3年生までから高校生年代まで拡大し、小学校4年生以上の通院1回500円の一部負担金を廃止。保険医療費の自己負担分を助成し、所得制限なし。
- `kawasaki-school-lunch`: 川崎市「令和8年度学校給食費の負担軽減」。令和8年度は小学校と特別支援学校小学部の保護者負担なし。中学校と特別支援学校の幼稚部・中学部・高等部は重点支援地方交付金を活用して1食あたり保護者負担を据え置き。
- `kawasaki-nursing-equipment`: 川崎市「紙おむつ等介護用品の給付」。65歳以上の在宅高齢者で要介護3から5等が対象。紙おむつ類、防水シーツ、使い捨て手袋等を月額6,000円限度で給付し、利用料は所得区分に応じて0%から20%。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。川崎市公式の小児医療費助成事業、令和8年9月制度拡充特設ページ、川崎市の学校給食費、紙おむつ等介護用品の給付、紙おむつFAQを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,522件、期限切れ131件、神奈川県ローカル公式確認済みは70件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,883 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は528件、activeWithDeadlineは397件。
- `npm run audit:links`: broken 0。3,881ファイルから142,566リンク抽出、8,306件監査。

## 2026-07-02 神奈川Batch 21 追加ログ

神奈川県の未公式確認slug差分から、川崎市歯周病検診、高齢者を対象とした定期の肺炎球菌感染症予防接種、川崎市結婚新生活支援事業補助金の実施なし抑止の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「高齢者歯科健診無料」「高齢者予防接種費用助成」「結婚新生活支援最大60万円」を、公式ページ本文で確認できる現行制度または実施なしへ補正した。

追加:

- `kawasaki-senior-dental`: 川崎市「歯周病検診」。年度中に40歳、50歳、60歳、70歳になる川崎市民が対象。問診・歯周組織検査を市内登録医療機関で受診でき、実施期間は7月1日から3月31日、費用は無料。
- `kawasaki-vaccination-support`: 川崎市「高齢者を対象とした定期の肺炎球菌感染症予防接種」。65歳の方、または満60歳から65歳未満で対象機能障害がある方が対象。自己負担金は5,000円で、生活保護世帯、市・県民税非課税世帯等は免除対象。
- `kawasaki-newlywed-rent`: 川崎市公式FAQで、結婚新生活支援事業（結婚助成金）は現時点では実施していないと確認。生成データの結婚新生活支援事業補助金・最大60万円は通常一覧から除外。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。川崎市公式の歯周病検診、歯周病検診FAQ、高齢者肺炎球菌定期接種、市外定期接種払い戻し、結婚新生活支援事業FAQを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,524件、期限切れ132件、神奈川県ローカル公式確認済みは72件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,895 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は529件、activeWithDeadlineは397件。
- `npm run audit:links`: broken 0。3,893ファイルから142,806リンク抽出、8,323件監査。

## 2026-07-02 神奈川Batch 22 追加ログ

神奈川県の未公式確認slug差分から、横浜市小児医療費助成、商店街空き店舗開業支援事業、令和7年度脱炭素リノベ住宅推進補助制度の受付終了抑止の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「中学卒業まで無料」「創業促進助成金最大30万円」「住まいのエコリノベーション補助制度」を、公式ページ本文で確認できる現行制度または受付終了制度へ補正した。

追加:

- `yokohama-childcare-subsidy`: 横浜市「小児医療費助成」。令和8年6月から対象年齢を18歳までに拡大し、18歳に達する日以後の最初の3月31日までの子どもについて、入院・通院の保険診療自己負担額を全額助成。保険給付外費用は対象外。
- `yokohama-startup-support`: 横浜市「商店街空き店舗開業支援事業」。市内商店街区域内の空き店舗で開業する方が対象。補助対象は店舗賃貸借契約書で定められた初期費用と賃貸借契約日から申請日までに支払った家賃。補助率2/3、上限50万円、申請期限は2027年3月1日、事前相談は2027年2月12日まで。
- `yokohama-housing-eco-renovation`: 横浜市「令和7年度脱炭素リノベ住宅推進補助制度（受付終了）」。令和7年度ページは受付終了、申請受付期間は2026年1月31日まで。子育て世代住替え最大150万円、定住補助最大120万円。令和8年度既存住宅断熱改修補助制度は既存の `yokohama-housing-purchase` に集約済みのため、このslugは期限切れ扱いで重複通常公開を防止。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。横浜市公式の小児医療費助成、商店街空き店舗開業支援事業、令和7年度脱炭素リノベ住宅推進補助制度、令和8年度既存住宅断熱改修補助制度を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,526件、期限切れ133件、神奈川県ローカル公式確認済みは74件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,899 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は531件、activeWithDeadlineは398件。
- `npm run audit:links`: broken 0。3,897ファイルから143,027リンク抽出、8,329件監査。

## 2026-07-02 神奈川Batch 23 追加ログ

神奈川県の未公式確認slug差分から、相模原市中小企業生産性向上支援補助金、相模原市結婚新生活・移住定住支援事業、逗子市木造住宅耐震診断・耐震補強工事等補助制度の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「中小企業設備投資支援補助金最大200万円」「結婚新生活支援事業最大60万円」「耐震診断助成自己負担なし」を、公式ページ本文で確認できる制度名・上限額・対象経費へ補正した。

追加:

- `sagamihara-sme-support`: 相模原市「中小企業生産性向上支援補助金」。市内事業所で労働生産性向上に資する設備投資を行う中小企業者等が対象。補助対象は設備等購入費、補助率2/3以内、市外事業者調達は1/2以内、上限1,000万円。第1回事前申請は予算到達で終了、第2回は2026年9月上旬予定。
- `sagamihara-newlywed-housing`: 相模原市「結婚新生活・移住定住支援事業」。令和8年1月1日から令和9年3月31日までに婚姻届受理またはパートナーシップ宣誓等をした夫婦等が対象。引越業者または運送業者へ支払った実費を最大15万円補助。申請期間は2026年6月1日から2027年3月31日まで。
- `zushi-seismic-diagnosis`: 逗子市「木造住宅耐震診断・耐震補強工事等補助制度」。1981年5月31日以前に着工された2階建て以下の戸建木造住宅が対象。簡易耐震診断1万5千円、一般耐震診断4万円、耐震補強工事等1/2・上限50万円、耐震シェルター等1/2・上限25万円。契約前の事前相談が必要。

確認:

- 採用した公式出典URL 4件はすべて200で到達確認。相模原市公式の中小企業生産性向上支援補助金、同特設サイト、相模原市公式の結婚新生活・移住定住支援事業、逗子市公式の木造住宅耐震診断・耐震補強工事等補助制度を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,529件、期限切れ133件、神奈川県ローカル公式確認済みは77件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,904 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は532件、activeWithDeadlineは399件。
- `npm run audit:links`: broken 0。3,902ファイルから143,249リンク抽出、8,338件監査。

## 2026-07-02 神奈川Batch 24 追加ログ

神奈川県の未公式確認slug差分から、相模原市子育て世帯等中古住宅購入・改修費補助事業、相模原市妊婦のための支援給付事業、相模原市高齢者等居住改修（バリアフリー改修）住宅に対する固定資産税の減額の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「住宅取得補助金最大30万円」「子育て応援給付金子ども1人最大5万円」「住宅バリアフリー改修補助金最大30万円」を、公式ページ本文で確認できる制度名・補助額・申請条件へ補正した。

追加:

- `sagamihara-housing-purchase`: 相模原市「子育て世帯等中古住宅購入・改修費補助事業」。子育て世帯や若年世帯の中古住宅購入、または親世帯との同居に伴う親世帯住宅改修が対象。中古住宅購入は市外転入最大100万円、市内間転居最大95万円。親世帯住宅改修は市外転入最大80万円、市内間転居最大75万円。申込期限は2027年2月26日必着。
- `sagamihara-childcare-subsidy`: 相模原市「妊婦のための支援給付事業」。2025年4月1日以降に妊婦給付認定申請をした市内在住妊婦が対象。妊娠1回あたり5万円、胎児1人あたり5万円を2回に分けて支給。双子の場合は合計15万円。所得制限なし、非課税。
- `sagamihara-barrier-free`: 相模原市「高齢者等居住改修（バリアフリー改修）住宅に対する固定資産税の減額」。一定のバリアフリー改修工事を行った住宅について、翌年度分の固定資産税の3分の1相当額を申告により減額。対象工事は2031年3月31日まで、改修工事完了後3か月以内に申告。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認。相模原市公式の子育て世帯等中古住宅購入・改修費補助事業、妊婦のための支援給付事業、高齢者等居住改修（バリアフリー改修）住宅に対する固定資産税の減額を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,532件、期限切れ133件、神奈川県ローカル公式確認済みは80件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,911 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は533件、activeWithDeadlineは400件。
- `npm run audit:links`: broken 0。3,909ファイルから143,474リンク抽出、8,347件監査。

## 2026-07-02 神奈川Batch 25 追加ログ

神奈川県の未公式確認slug差分から、逗子市物価高対応子育て応援手当、市奨学金、紙おむつ等の支給の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産祝い金最大10万円」「月額最大4万円の無利子貸与」「介護用品年額6万円相当」を、公式ページ本文で確認できる制度名・支給額・受付状況・支給方法へ補正した。

追加:

- `zushi-birth-bonus`: 逗子市「物価高対応子育て応援手当（受付終了）」。0歳から高校生年代までの児童を養育する保護者に、対象児童1人につき一律2万円を1回限り支給した制度。受付は2026年6月30日で終了、最終支給日は2026年7月17日予定。生成データの出産祝い金・最大10万円は通常一覧から除外。
- `zushi-scholarship`: 逗子市「市奨学金（令和8年度募集終了）」。令和8年3月に中学校を卒業して高等学校へ進学する市内在住者等が対象だった給付型奨学金。年額10万円、募集人数30名程度、受付は2026年2月27日17時で終了。生成データの月額最大4万円・無利子貸与を補正し、通常一覧から除外。
- `zushi-nursing-equipment`: 逗子市「紙おむつ等の支給」。要介護3から5で排せつに支障があり、世帯全員が市区町村民税非課税等の対象高齢者を在宅で介護する家族等に、紙おむつ等を現物支給。月額支給限度額があり、超過分は自己負担。生成データの年額6万円相当を補正。

確認:

- 採用した公式出典URL 3件はすべて200で到達確認。逗子市公式の物価高対応子育て応援手当、市奨学金、家族介護者支援の紙おむつ等の支給を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,533件、期限切れ135件、神奈川県ローカル公式確認済みは81件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,917 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は535件、activeWithDeadlineは400件。
- `npm run audit:links`: broken 0。3,915ファイルから143,704リンク抽出、8,356件監査。

## 2026-07-02 神奈川Batch 26 追加ログ

神奈川県の未公式確認slug差分を全verifiedファイルと照合し直し、相模原市移住・定住促進補助金、藤沢市不妊治療費助成制度、横須賀市保育料軽減制度の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「東京圏移住支援金最大100万円」「不妊治療費助成最大10万円」「第2子半額・第3子以降無料」を、公式ページ本文で確認できる制度名・対象・上限額・重複状況へ補正した。

追加:

- `sagamihara-migration-support`: 生成データの東京圏からの移住・就職による世帯最大100万円支援は、相模原市公式の現行制度として確認できないため通常一覧から除外。公式に確認できる結婚新生活・移住定住支援事業は、婚姻等に伴う引越費用最大15万円で、既存 `sagamihara-newlywed-housing` に集約済み。
- `fujisawa-infertility`: 生成データの不妊治療費助成最大10万円を補正。藤沢市公式の現行制度は不妊治療費（先進医療分）助成事業で、先進医療費の10分の7・上限5万円、治療終了日から6か月以内に申請。既存 `fujisawa-infertility-treatment` に集約済みのため通常一覧から除外。
- `yokosuka-childcare-subsidy`: 横須賀市「利用者負担額（保育料）の無償化・多子減免」。0～2歳児クラスは市民税所得割額115,000円未満まで市独自に無償化を拡充。多子減免は生計同一の兄・姉がいる場合、第2子は約半額、第3子以降は0円。認可外保育施設等は3～5歳児クラス相当月額37,000円、0～2歳児クラス対象世帯月額42,000円上限。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。相模原市公式の結婚新生活・移住定住支援事業、藤沢市公式の不妊治療費（先進医療分）助成事業と案内PDF、横須賀市公式の利用者負担額（保育料）及び給食費、幼児教育・保育無償化を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,534件、期限切れ137件、神奈川県ローカル公式確認済みは82件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,923 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は537件、activeWithDeadlineは400件。
- `npm run audit:links`: broken 0。3,921ファイルから143,932リンク抽出、8,365件監査。
- Batch 26後の神奈川県未公式候補再抽出では、`kawasaki-migration-bonus`、`kawasaki-uij-turn`、`yokosuka-telework-bonus` が残る。`sapporo-childcare-subsidy` は抽出上の誤検出候補のため次回に生成元オブジェクト境界を確認する。

## 2026-07-02 神奈川Batch 27 追加ログ

神奈川県の未公式確認slug差分から、川崎市移住支援金、川崎市UIJターン就職支援補助金、横須賀市テレワーク環境整備補助金の3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。3件はいずれも現行の公式補助金として確認できない、または制度終了済みのため、通常一覧に誤掲載しない抑止レコードとして期限切れ扱いにした。

追加:

- `kawasaki-migration-bonus`: 川崎市公式の支援情報、補助・助成金一覧表、令和8年度補助・助成金一覧PDFを確認。生成データの東京23区等からの一般移住支援金最大100万円は現行市公式制度として確認できず、公式に確認できる現金支援は東日本大震災避難者向け自立支援金等で対象が異なるため通常一覧から除外。
- `kawasaki-uij-turn`: 川崎市公式の支援情報、キャリアサポートかわさき資料、補助・助成金一覧を確認。公式に確認できる就職支援は無料の就職相談・求人紹介・定着支援であり、生成データのUIJターン就職支援補助金最大10万円は現行市公式制度として確認できないため通常一覧から除外。
- `yokosuka-telework-bonus`: 横須賀市公式PDFで、関連制度がテレワーク拠点設置支援補助金であること、2022年度交付3件、2023年度交付0件、2023年度をもって終了したことを確認。生成データのテレワーク環境整備補助金最大20万円は現行制度ではなく、対象も公式資料とずれるため通常一覧から除外。

確認:

- 採用した公式出典URL 6件はすべて200で到達確認。川崎市公式の支援情報、補助・助成金一覧表、令和8年度補助・助成金一覧PDF、キャリアサポートかわさき資料、横須賀市公式の地方創生関係交付金PDF、横須賀再興プラン2024年度実績報告書PDFを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,534件、期限切れ140件、神奈川県ローカル公式確認済みは82件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,928 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は540件、activeWithDeadlineは400件、期限切れ140件。
- `npm run audit:links`: broken 0。3,926ファイルから144,161リンク抽出、8,376件監査。
- 神奈川県raw slugを全verified slugと再照合した結果、未照合slugは0件。`sapporo-childcare-subsidy` は `city-batch36.ts` 冒頭の北海道レコードであり、神奈川県残件ではない。

注意: 上記の未照合slug 0件は、正規表現ベースの一時抽出に基づくもので、後続の実データ読み込み監査で不十分と判明した。2026年7月2日に `scripts/audit-raw-verified-gaps.mjs` を追加し、TypeScriptデータを実際に読み込んでraw/verified slugを比較したところ、神奈川県の未照合raw slugは52件残っていた。

## 2026-07-02 神奈川Batch 28 追加ログ

全国raw差分を正確に棚卸しするため、`scripts/audit-raw-verified-gaps.mjs` を追加した。正規表現ではなく、既存のTypeScript transpile hookで `city-batch*`、`local*`、`national*`、`ngo*` のraw seed配列と `verified-*` 配列を読み込み、実際に展開されたslug同士を比較する。初回実行結果は、raw unique 4,375件、verified unique 1,678件、未照合raw slug 3,421件、重複raw slug 32件。都道府県別では東京都279件、北海道163件、埼玉県140件、福岡県127件、栃木県121件などが残り、神奈川県も52件残っていると確認した。

この新棚卸しに基づき、神奈川県の県系raw候補3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。3件とも、元データの公式URLが404または内容不一致で、現行の県直接補助金として確認できないため、通常一覧に誤掲載しない抑止レコードとして期限切れ扱いにした。

追加:

- `kanagawa-startup-women`: 元データのKIP候補URLは404。KANAGAWA STARTUPSの助成金・補助金など支援情報とKIPビジネス支援を確認したが、女性起業家限定最大100万円助成金の現行募集ページは確認できないため通常一覧から除外。
- `kanagawa-barrier-free`: 元データの神奈川県候補URLは404。神奈川県公式の住まい情報では、バリアフリー化などの住宅リフォームについて市町村助成制度を利用できる場合があると案内。県のバリアフリーアドバイザー派遣は公共的施設向けの無料助言制度であり、個人住宅改修費の県直接補助ではないため通常一覧から除外。
- `kanagawa-disaster-block-wall`: 元データの神奈川県候補URLは404。神奈川県公式の既存の塀の安全点検ページでは、ブロック塀等の撤去等に関する補助制度は各市町村へ問い合わせるよう案内。県耐震改修促進計画では市町村制度創設・拡充への支援方針を確認したが、所有者向け県直接補助ではないため通常一覧から除外。

確認:

- `kb search "助成金ナビ joseikin-navi-site"` は、この環境では `kb: command not found` のため実行不可。旧隔離チャットには触れず、repoと公式一次情報で継続。
- 採用した公式出典URL 6件はすべて200で到達確認。KANAGAWA STARTUPS助成金・補助金など支援情報、KIPビジネス支援、神奈川県公式の買う／建てる／改修、バリアフリーに向けた取組み、建築物の既存の塀の安全点検、神奈川県耐震改修促進計画PDFを確認。
- `npx eslint scripts/audit-raw-verified-gaps.mjs src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --limit 8`: 全国未照合raw slugは3,418件。東京都279件、北海道163件、埼玉県140件、福岡県127件、栃木県121件など。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 20`: 神奈川県の未照合raw slugは52件から49件に減少。次の候補は `city-batch71.ts` の綾瀬市・海老名市・座間市・三浦市・逗子市・南足柄市など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,534件、期限切れ143件、activeWithoutOfficialSourceは3,422件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,932 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は543件、activeWithDeadlineは400件、期限切れ143件。
- `npm run audit:links`: broken 0。3,930ファイルから144,383リンク抽出、8,386件監査。

## 2026-07-02 神奈川Batch 29 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残49件から、`city-batch71.ts` の綾瀬市3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産祝い金最大10万円」「認可外保育料月額最大3万円」「子育て・若年世帯向け住宅取得最大50万円」を、綾瀬市公式ページ本文で確認できる現行制度名・支給額・対象者へ補正した。

追加:

- `ayase-birth-bonus`: 綾瀬市「妊婦のための支援給付」と「あやせ子育てスタート応援給付金」。妊婦支援給付は1回目が妊婦1人につき現金5万円、2回目が妊娠したこどもの数1人につき現金5万円。市独自のあやせ子育てスタート応援給付金は令和8年4月1日以降の妊娠届出者等に妊娠1回15,000円、申請期限は出産日の前日まで。
- `ayase-childcare-subsidy`: 綾瀬市「幼児教育・保育無償化」と保育料多子軽減。3～5歳児クラスと市民税非課税世帯の0～2歳児クラスの保育料が無償。認可外保育施設等は保育の必要性の認定により3～5歳児月額37,000円、非課税世帯0～2歳児月額42,000円上限。
- `ayase-housing-purchase`: 綾瀬市「企業立地促進に伴う就業者転入奨励金」。企業立地奨励金の適用を受けた企業に就業する方で、市内に住宅を新築または購入する就業者等が対象。奨励金額は20万円。生成データの一般住宅取得支援最大50万円から補正。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。綾瀬市公式の相談支援・妊婦のための支援給付、あやせ子育てスタート応援給付金、幼児教育・保育無償化、保育料について、企業立地促進に伴う就業者転入奨励金制度を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --limit 8`: 全国未照合raw slugは3,415件。神奈川県は46件。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは49件から46件に減少。次の候補は `ayase-infertility`、`ayase-migration-bonus`、`ayase-nursing-equipment` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,537件、神奈川県ローカル公式確認済みは85件、activeWithoutOfficialSourceは3,419件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,939 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は543件、activeWithDeadlineは400件、期限切れ143件。
- `npm run audit:links`: broken 0。3,937ファイルから144,612リンク抽出、8,398件監査。

## 2026-07-02 神奈川Batch 30 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残46件から、`city-batch71.ts` の綾瀬市3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「不妊治療費助成最大15万円」「東京圏からの移住支援金最大100万円」「介護用品支給事業年額6万円相当」を、綾瀬市公式ページ本文で確認できる現行制度名・支給額・対象者へ補正した。

追加:

- `ayase-infertility`: 綾瀬市「不育症の治療費助成」。保険診療対象外の不育治療および検査に要した自己負担額の2分の1、上限30万円を助成。申請は治療終了から1年以内。生成データの特定不妊治療費助成・1回最大15万円・年2回を公式制度へ補正。
- `ayase-migration-bonus`: 綾瀬市「ものづくり人材就職定住奨励祝金」。市内中小製造業に正社員として初めて雇用された学卒者等が対象で、雇用から36か月にわたり最大30万円。就職を機に市内へ転入した場合は、初回申請時に転入支援金12万円を追加。生成データの一般移住支援金最大100万円を補正。
- `ayase-nursing-equipment`: 綾瀬市「紙おむつの給付」。市内在住40歳以上・在宅・世帯全員非課税で、要介護4以上または排尿/排便に介助等が必要な認定者へ、月額2,500円以内相当の紙おむつを2か月に一度給付。生成データの介護用品年額6万円相当を補正。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。綾瀬市公式の不育症の治療費助成、不妊症・不育症について、ものづくり人材就職定住奨励祝金、同令和8年度PDF、紙おむつの給付を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは46件から43件に減少。次の候補は `ayase-scholarship`、`ayase-seismic-diagnosis`、`ayase-women-startup` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,540件、神奈川県ローカル公式確認済みは88件、activeWithoutOfficialSourceは3,416件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,946 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は543件、activeWithDeadlineは400件、期限切れ143件。
- `npm run audit:links`: broken 0。3,944ファイルから144,845リンク抽出、8,410件監査。

## 2026-07-02 神奈川Batch 31 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残43件から、`city-batch71.ts` の綾瀬市3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「奨学金制度・高校生月額1万5千円/大学生月額4万円の無利子貸与」「木造住宅耐震診断助成・自己負担なし」「女性起業支援補助金・最大50万円」を、綾瀬市公式ページ本文で確認できる現行制度名・支給額・対象者へ補正した。

追加:

- `ayase-scholarship`: 綾瀬市「奨学金制度」。市内在住の高校生等を対象に、経済的理由で高等学校等での修学が困難な方へ、国公立月額5,000円、私立月額10,000円を給付。生成データの高校生・大学生向け無利子貸与月額最大4万円を公式制度へ補正。
- `ayase-seismic-diagnosis`: 綾瀬市「木造住宅耐震化補助事業」。令和8年度から平成12年5月31日以前に建築確認を受けた木造住宅まで対象拡充。補助率は対象費用の3分の2以内で、上限は耐震診断4万円、耐震設計8万円、耐震改修100万円、工事監理6万円、除却30万円、耐震シェルター等18万円。生成データの自己負担なし耐震診断助成を公式内容へ補正。
- `ayase-women-startup`: 綾瀬市「商業者支援事業補助金（店舗開業事業）」。小売業、飲食サービス業、生活関連サービス業等の店舗開業事業が対象で、対象経費の3分の2以内、基本上限100万円、新規創業等は100万円加算により最大200万円。女性限定補助ではなく、旧創業補助金は令和7年度から店舗開業事業へ統合済み。

確認:

- 採用した公式出典URL 7件はすべて200で到達確認。綾瀬市公式の奨学金制度、就学援助・奨励金等、木造住宅耐震化補助事業、令和8年度木造住宅耐震化チラシ、商業者支援事業補助金、創業支援等事業、旧創業補助金補助事業者ページを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは43件から40件に減少。次の候補は `ebina-birth-bonus`、`ebina-childcare-subsidy`、`ebina-housing-purchase` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,543件、神奈川県ローカル公式確認済みは91件、activeWithoutOfficialSourceは3,413件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,952 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は544件、activeWithDeadlineは401件、期限切れ143件。
- `npm run audit:links`: broken 0。3,950ファイルから145,075リンク抽出、8,423件監査。

## 2026-07-02 神奈川Batch 32 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残40件から、`city-batch71.ts` の海老名市3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「出産祝い金最大10万円」「認可外保育料月額最大3万円」「住宅取得支援補助金最大50万円」を、海老名市公式ページ本文で確認できる現行制度名・支給額・対象者へ補正した。

追加:

- `ebina-birth-bonus`: 海老名市「妊婦のための支援給付」。令和7年4月から出産・子育て応援給付金から移行。妊婦支援給付金1回目は妊娠1回につき5万円、2回目は妊娠している子どもの数×5万円。生成データの多子区分出産祝い金を公式制度へ補正。
- `ebina-childcare-subsidy`: 海老名市「保育料の無償化・多子軽減」。3～5歳児クラスの月額保育料0円、2歳児以下は市民税額により算定。きょうだいで保育所等を利用する場合は2人目半額、3人目無料。生成データの認可外保育施設月額最大3万円補助を公式内容へ補正。
- `ebina-housing-purchase`: 海老名市「令和8年度住宅取得支援事業補助金」。子育て世帯支援型と近居・同居支援型があり、中古住宅取得費用を基本30万円、転入加算10万円、区域加算10万円で最大50万円補助。受付期間は2026年4月15日から2027年2月26日まで。

確認:

- 採用した公式出典URL 6件はすべて200で到達確認。海老名市公式の妊婦のための支援給付、出産・子育て伴走型支援事業、保育料について、一時預かり利用者負担軽減事業、令和8年度住宅取得支援事業補助金、同パンフレットPDFを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは40件から37件に減少。次の候補は `ebina-infertility`、`ebina-migration-bonus`、`ebina-nursing-equipment` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,546件、神奈川県ローカル公式確認済みは94件、activeWithoutOfficialSourceは3,410件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,956 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は545件、activeWithDeadlineは402件、期限切れ143件。
- `npm run audit:links`: broken 0。3,954ファイルから145,298リンク抽出、8,433件監査。

## 2026-07-02 神奈川Batch 33 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残37件から、`city-batch71.ts` の海老名市3件を `src/data/grants/verified-local-misc-2026.ts` に追加・抑止した。生成データの「不妊治療費助成」「移住支援金最大100万円」「介護用品支給事業」を、海老名市公式ページ本文で確認できる現行制度または公式確認不可の状態へ補正した。

追加:

- `ebina-infertility`: 海老名市「特定不妊治療（先進医療）費助成事業」。医療保険適用の体外受精・顕微授精と併用して実施された先進医療費が対象で、1回の治療につき上限5万円。申請期限は治療終了日の翌月から6カ月以内。関連制度として不育症治療費助成事業（保険適用外の不育症治療・検査費用の2分の1、1年度上限30万円）も確認。
- `ebina-migration-bonus`: 海老名市の一般移住支援金としては公式確認不可のため抑止。公式に確認できる関連制度は、既存 `ebina-housing-purchase` に集約済みの令和8年度住宅取得支援事業補助金と、生活困窮者自立支援事業としての住居確保給付金（転居費用補助）。生成データの東京圏等からの一般移住支援金最大100万円とは対象が異なるため通常一覧から除外。
- `ebina-nursing-equipment`: 海老名市「介護用品の給付（紙おむつの給付）」。介護保険の要介護3以上で、月の半分以上を在宅で生活している方が対象。紙おむつ等を現物給付し、費用は非課税世帯無料、課税世帯500円、市の給付上限超過分は追加負担。

確認:

- 採用した公式出典URL 7件はすべて200で到達確認。海老名市公式の特定不妊治療（先進医療）費助成事業、不育症治療費助成事業、同特定不妊治療チラシ、住宅取得支援事業補助金、住居確保給付金（転居費用補助）、神奈川県公式の移住問い合わせ窓口、海老名市公式の高齢者の在宅福祉サービスを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは37件から34件に減少。次の候補は `ebina-seismic-diagnosis`、`ebina-women-startup`、`zama-birth-bonus` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,548件、神奈川県ローカル公式確認済みは96件、activeWithoutOfficialSourceは3,407件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,959 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は546件、activeWithDeadlineは402件、期限切れ144件。
- `npm run audit:links`: broken 0。3,957ファイルから145,525リンク抽出、8,442件監査。

## 2026-07-02 神奈川Batch 34 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残34件から、`city-batch71.ts` の海老名市2件・座間市1件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「木造住宅耐震診断助成」「女性起業支援補助金」「出産祝い金」を、公式ページ本文で確認できる現行制度名・支給額・対象者へ補正した。

追加:

- `ebina-seismic-diagnosis`: 海老名市「木造住宅の耐震化支援制度」。令和8年度から耐震診断士派遣事業が創設され、受付期間は2026年4月15日から12月28日、費用無料。耐震改修計画書作成費は2分の1・最大5万円、耐震改修工事等は工事費2分の1・最大90万円と現場立会費2分の1・最大3万円、解体工事は2分の1・最大50万円。生成データの旧耐震住宅無料診断のみの記載を公式制度全体へ補正。
- `ebina-women-startup`: 海老名商工会議所「創業支援助成金」。女性限定ではなく、創業後おおむね5年以内に海老名市内で対象経費を支払う予定があり、事業者要件と特定創業支援事業の認定者要件を満たす方が対象。事務所・店舗等の新築・改装・改修工事等について、税抜対象経費の2分の1、上限50万円を助成。
- `zama-birth-bonus`: 座間市「妊婦支援給付金給付事業（妊婦のための支援給付）」。令和7年4月1日から実施。1回目は5万円、2回目は妊娠したこどもの数1人につき5万円を現金給付。申請期限は起算日から2年、所得制限なし。生成データの第1子5万円・第2子7万円・第3子以降10万円の出産祝い金を公式制度へ補正。

確認:

- 採用した公式出典URL 8件はすべて200で到達確認。海老名市公式の木造住宅の耐震化支援制度、同制度案内PDF、耐震診断士派遣事業PDF、海老名市公式の創業支援、海老名商工会議所の創業支援助成金、座間市公式の妊婦支援給付金給付事業、同チラシPDF、座間市公式の子ども・子育て支援金制度ページを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは34件から31件に減少。次の候補は `zama-childcare-subsidy`、`zama-housing-purchase`、`zama-infertility` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,551件、神奈川県ローカル公式確認済みは99件、activeWithoutOfficialSourceは3,404件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,965 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は547件、activeWithDeadlineは403件、期限切れ144件。
- `npm run audit:links`: broken 0。3,963ファイルから145,754リンク抽出、8,456件監査。

## 2026-07-02 神奈川Batch 35 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残31件から、`city-batch71.ts` の座間市3件を `src/data/grants/verified-local-misc-2026.ts` に追加・抑止した。生成データの「保育料軽減補助金」「住宅取得支援補助金」「不妊治療費助成」を、座間市公式ページ本文で確認できる現行制度または公式確認不可の状態へ補正した。

追加:

- `zama-childcare-subsidy`: 座間市「保育料の軽減・副食費免除」。兄弟姉妹で保育所等を利用する場合、2人目は半額、3人目以降は無料。市町村民税所得割額57,700円未満世帯は年齢にかかわらず第2子半額・第3子以降無料。ひとり親世帯または障害者がいる世帯で所得割額77,101円未満の場合は第2子以降無料。副食費免除要件も確認。
- `zama-housing-purchase`: 座間市「子育て世帯等住宅リフォーム補助制度」。住宅取得ではなく、令和8年度住宅リフォーム補助制度内の子育て世帯向けリフォーム補助へ補正。18歳以下または妊婦が属する世帯等が対象で、工事金額（税抜）の2分の1、上限30万円。募集期間は2026年8月26日から9月8日。
- `zama-infertility`: 座間市独自の不妊治療費助成としては公式確認不可のため抑止。公式サイトでは「不妊に悩む方へ」と「不育症を知っていますか？」の情報提供・相談案内を確認。座間市こども計画案への意見募集結果PDFでは、市独自の不妊治療助成を現在予定していない旨を確認。

確認:

- 採用した公式出典URL 9件はすべて200で到達確認。座間市公式の保育料について、令和7年度保育料金表、令和8年度保育所等利用申込案内、令和8年度住宅リフォーム補助制度、子育て世帯等住宅リフォーム補助金交付要綱、同申請書、座間市公式の不妊に悩む方へ、不育症を知っていますか？、座間市こども計画案への意見募集結果PDFを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは31件から28件に減少。次の候補は `zama-migration-bonus`、`zama-nursing-equipment`、`zama-scholarship` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,553件、神奈川県ローカル公式確認済みは101件、activeWithoutOfficialSourceは3,401件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,969 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は549件、activeWithDeadlineは404件、期限切れ145件。
- `npm run audit:links`: broken 0。3,967ファイルから145,981リンク抽出、8,469件監査。

## 2026-07-02 神奈川Batch 36 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残28件から、`city-batch71.ts` の座間市3件を `src/data/grants/verified-local-misc-2026.ts` に追加・抑止した。生成データの「移住支援金」「介護用品支給事業」「奨学金制度」を、神奈川県公式・座間市公式ページ本文で確認できる現行制度または公式確認不可の状態へ補正した。

追加:

- `zama-migration-bonus`: 座間市の一般移住支援金としては公式確認不可のため抑止。神奈川県公式の市町村移住・定住支援一覧では、座間市の主な支援としてシティプロモーション、子育て世帯等住宅リフォーム補助、出産・小児医療・ひとり親家庭等医療・創業支援等の導線を確認したが、東京圏等からの一般移住者向け最大100万円支援金は確認できない。座間市公式の住居確保給付金（転居費用補助）は生活困窮世帯向けで対象が異なるため通常一覧から除外。
- `zama-nursing-equipment`: 座間市「おむつ等支給事業（高齢者対象）」。在宅生活者で寝たきりや認知症などにより常時おむつなどを使用している方を介護する市内在住家族へ、市指定カタログから1回6,000円以内、年6回予定で現物支給。生成データの年額6万円相当を年最大3万6,000円相当へ補正。
- `zama-scholarship`: 座間市「看護師等奨学金貸付制度」。将来市内で保健師・助産師・看護師・准看護師として従事する意思のある看護学生向けに、授業料相当額を月額3万円上限で貸付。相当期間、市内医療機関で看護職として従事すると償還免除。生成データの高校生・大学生向け月額最大4万円無利子貸与を公式制度へ補正。

確認:

- 採用した公式出典URL 5件はすべて200で到達確認。神奈川県公式の市町村移住・定住支援一覧、座間市公式の座間市の魅力、住居確保給付金（転居費用補助）、おむつ等支給事業（高齢者対象）、看護師等奨学金貸付制度を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは28件から25件に減少。次の候補は `zama-seismic-diagnosis`、`zama-women-startup`、`miura-birth-bonus` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,554件、神奈川県ローカル公式確認済みは102件、activeWithoutOfficialSourceは3,398件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,974 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は551件、activeWithDeadlineは404件、期限切れ147件。
- `npm run audit:links`: broken 0。3,972ファイルから146,211リンク抽出、8,478件監査。

## 2026-07-02 神奈川Batch 37 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残25件から、`city-batch71.ts` の座間市2件・三浦市1件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「木造住宅耐震診断助成」「女性起業支援補助金」「出産祝い金」を、座間市・三浦市公式ページ本文で確認できる現行制度名・補助額・対象者へ補正した。

追加:

- `zama-seismic-diagnosis`: 座間市「耐震診断および耐震改修工事補助制度」。平成12年5月31日以前の在来工法・木造2階建て以下住宅が対象で、市の木造住宅無料耐震相談会参加後に段階的に利用。耐震診断は2分の1・上限5万円、改修計画書作成は2分の1・上限5万円、耐震改修工事は2分の1・上限70万円、市内施工者加算20万円、現場立ち会い費2分の1・上限3万円。生成データの自己負担なし耐震診断助成を公式制度へ補正。
- `zama-women-startup`: 座間市「創業事業補助金」。女性限定ではなく、市内創業者向けに登録免許税相当額を上限15万円、内外装工事・事業用設備・広告宣伝費等を2分の1・上限40万円、特定創業支援事業を受けた方は3分の2・上限60万円で補助。生成データの女性起業支援補助金を公式確認済みの創業支援へ補正。
- `miura-birth-bonus`: 三浦市「妊婦のための支援給付」。妊娠届出時に5万円、出産後にこども1人あたり5万円を口座振込。申請期限は1回目が胎児心拍確認日から2年、2回目が出産予定日の8週間前から2年。生成データの第1子5万円・第2子7万円・第3子以降10万円の出産祝い金を公式制度へ補正。

確認:

- 採用した公式出典URL 7件はすべて200で到達確認。座間市公式の耐震診断および耐震改修工事補助制度、令和8年度木造住宅耐震相談、創業・展示会出展・設備投資を応援、座間市の創業者支援、空き店舗活用事業、三浦市公式の妊婦のための支援給付、子育て・出産に関する手当を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは25件から22件に減少。次の候補は `miura-childcare-subsidy`、`miura-housing-purchase`、`miura-infertility` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,557件、神奈川県ローカル公式確認済みは105件、activeWithoutOfficialSourceは3,395件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,979 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は551件、activeWithDeadlineは404件、期限切れ147件。
- `npm run audit:links`: 初回は既存外部URL `https://swf.or.jp/josei/` の一時的な `ECONNRESET` でbroken 1。再実行で broken 0。3,977ファイルから146,438リンク抽出、8,491件監査。

## 2026-07-02 神奈川Batch 38 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残22件から、`city-batch71.ts` の三浦市3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「保育料軽減補助金」「住宅取得支援補助金」「不妊治療費助成」を、三浦市公式ページ本文と公式PDFで確認できる現行制度名・補助額・対象者へ補正した。

追加:

- `miura-childcare-subsidy`: 三浦市「幼児教育・保育の無償化と保育料軽減」。認可保育所等3～5歳児は保育料0円、認可外保育施設等は3～5歳児クラス月額上限3万7,000円、住民税非課税世帯の0～2歳児クラス月額上限4万2,000円。令和8年度保育料PDFで多子世帯・母子父子家庭等の軽減も確認。生成データの月額最大3万円を公式内容へ補正。
- `miura-housing-purchase`: 三浦市「住宅リフォーム助成事業」。住宅取得ではなく、市内施工業者による住宅・マンションのリフォーム工事へ一律8万円を助成する現行制度へ補正。令和8年度は20万円以上の対象工事が対象で、第2期は2026年7月1日から7月24日、第3期は2026年10月1日から10月26日。
- `miura-infertility`: 三浦市「不妊治療（先進医療分）助成事業」。医療保険適用の体外受精・顕微授精と併用して実施された先進医療費を10分の7、上限5万円で助成。申請は治療終了日または医師判断による中断日から1年以内。生成データの1回最大15万円を公式制度へ補正。

確認:

- 採用した公式出典URL 9件はすべて200で到達確認。三浦市公式の幼児教育・保育の無償化、保育園を利用したい方へ、令和8年度保育料PDF、令和8年度保育所等入園案内PDF、住宅リフォーム助成事業、住まい・住宅、不妊治療（先進医療）に対する医療費助成、同案内PDF、妊娠・出産ページを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは22件から19件に減少。次の候補は `miura-migration-bonus`、`miura-nursing-equipment`、`miura-scholarship` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,560件、神奈川県ローカル公式確認済みは108件、activeWithoutOfficialSourceは3,392件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,982 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は552件、activeWithDeadlineは405件、期限切れ147件。
- `npm run audit:links`: broken 0。3,980ファイルから146,663リンク抽出、8,503件監査。

## 2026-07-02 神奈川Batch 39 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残19件から、`city-batch71.ts` の三浦市3件を `src/data/grants/verified-local-misc-2026.ts` に追加・抑止した。生成データの「移住支援金」「介護用品支給事業」「奨学金制度」を、三浦市公式ページ本文・公式PDFで確認できる現行制度または公式確認不可の状態へ補正した。

追加:

- `miura-migration-bonus`: 三浦市の一般移住支援金としては公式確認不可のため抑止。公式の移住支援ページでは移住者受入連携企業、移住関連イベント・セミナー、先輩移住者インタビュー等を確認し、移住ポータルでは住宅取得の特別ローンプランを確認したが、生成データの東京圏等からの一般移住支援金最大100万円は確認できない。結婚新生活支援事業は対象が異なり、令和7年度は受付終了、令和8年度も事前申請が必要なため通常一覧から除外。
- `miura-nursing-equipment`: 三浦市「介護用品支給事業」。在宅で要介護4または5の高齢者を介護している家族で、前年度市民税非課税等の要件を満たす方へ、紙おむつ・尿とりパッド等に使える助成券を支給。助成券は1枚5,100円相当、年最大2枚。生成データの年額6万円相当を年最大1万200円相当へ補正。
- `miura-scholarship`: 三浦市「三浦市奨学金条例に基づく奨学制度」。大学等へ進学する方で、日本学生支援機構の給付奨学金第2区分または第3区分の採用候補者等が対象。第2区分10万円、第3区分20万円を入学時に一時給付。生成データの高校生・大学生向け月額最大4万円無利子貸与を公式制度へ補正。

確認:

- 採用した公式出典URL 9件はすべて200で到達確認。三浦市公式の移住支援、みうら暮らし、結婚新生活支援事業、三浦市の高齢者支援サービスPDF、福祉用具購入について、第9期高齢者計画PDF、大学生等に対する教育支援、高校生に対する教育支援、教育支援・補助を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは19件から16件に減少。次の候補は `miura-seismic-diagnosis`、`miura-women-startup`、`zushi-childcare-subsidy` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,562件、神奈川県ローカル公式確認済みは110件、activeWithoutOfficialSourceは3,389件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,986 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は553件、activeWithDeadlineは405件、期限切れ148件。
- `npm run audit:links`: broken 0。3,984ファイルから146,895リンク抽出、8,516件監査。

## 2026-07-02 神奈川Batch 40 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残16件から、`city-batch71.ts` の三浦市2件・逗子市1件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「木造住宅耐震診断助成」「女性起業支援補助金」「保育料軽減補助金」を、三浦市・逗子市公式ページ本文、公式PDF、公式画像で確認できる現行制度名・補助額・対象者へ補正した。

追加:

- `miura-seismic-diagnosis`: 三浦市「木造住宅耐震改修工事補助事業」。専用住宅または店舗併用住宅、昭和56年5月31日以前に建築された旧耐震基準、2階建て以下の在来工法木造住宅が対象。公式フローチャートで、簡易診断2万円、一般診断2万5千円、耐震改修設計5万円、耐震改修工事は工事費の半額・上限30万円、耐震改修工事監理2万5千円を確認。受付期間は2026年4月1日から12月28日。
- `miura-women-startup`: 三浦市「中小企業信用保証料補助金交付制度」。女性限定ではなく、創業支援融資を含む対象融資の信用保証料について、払込保証料の2分の1・上限5万円を補助する制度へ補正。創業支援融資は保証料払込日から10か月以内に申請。
- `zushi-childcare-subsidy`: 逗子市「幼児教育・保育の無償化と保育料多子軽減」。3歳児クラスから就学前までの保育料無償化、認可外保育施設等の月額上限3万7,000円または4万2,000円、0～2歳児保育料の多子軽減、副食費免除・補助へ補正。令和8年度保育料表では標準時間の最高額が月額8万3,490円で、多子軽減により第2子半額・第3子以降0円等となる。

確認:

- 採用した公式出典URL 11件はすべて200で到達確認。三浦市公式の木造住宅耐震改修工事補助事業、住まい・住宅、公式耐震フローチャート画像、中小企業信用保証料補助金交付制度、起業・創業支援、特定創業支援等事業、逗子市公式の令和8年4月からの保育所等新規入所申込、令和8年度保育所等入園のしおりPDF、令和8年度幼児教育・保育の無償化利用案内PDF、副食費の徴収免除、保育所等保育料の見直しPDFを確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは16件から13件に減少。次の候補は `zushi-housing-purchase`、`zushi-infertility`、`zushi-migration-bonus` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,565件、神奈川県ローカル公式確認済みは113件、activeWithoutOfficialSourceは3,386件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,989 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は554件、activeWithDeadlineは406件、期限切れ148件。
- `npm run audit:links`: broken 0。3,987ファイルから147,121リンク抽出、8,529件監査。

## 2026-07-02 神奈川Batch 41 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残13件から、`city-batch71.ts` の逗子市3件を `src/data/grants/verified-local-misc-2026.ts` に追加・抑止した。生成データの「住宅取得支援補助金」「不妊治療費助成」「移住支援金」を、逗子市公式ページ本文・公式PDF・神奈川県公式一覧で確認できる現行制度または公式確認不可の状態へ補正した。

追加:

- `zushi-housing-purchase`: 逗子市「勤労者住宅資金利子補給制度」。住宅購入への一括補助金ではなく、事業所勤務者が中央労働金庫から住宅資金の融資を受けた場合の利子補給。対象借入額は500万円まで、補給期間は償還開始月から3年間、月額上限1万1,400円で最大41万400円相当。生成データの住宅取得支援補助金最大50万円を公式制度へ補正。
- `zushi-infertility`: 逗子市「生殖補助医療費（不妊治療医療費）助成事業」。保険診療で実施される体外受精・顕微授精・男性不妊手術、およびこれと組み合わせて実施される先進医療が対象。自己負担額について1年度あたり上限5万円、1年度1回・通算2回まで。申請期限は治療終了日から1年以内。生成データの最大15万円を公式内容へ補正。
- `zushi-migration-bonus`: 逗子市の一般移住支援金としては公式確認不可のため抑止。公式の移住・定住ページではシティプロモーション、移住相談、移住関連イベント、移住セミナー等を確認し、移住のご相談ページではオンライン相談と住宅紹介は行っていない旨を確認。神奈川県公式の市町村移住・定住支援一覧でも、東京圏等からの一般移住支援金最大100万円は確認できない。

確認:

- 採用した公式出典URL 9件はすべて200で到達確認。逗子市公式の勤労者住宅資金利子補給制度、勤労者住宅資金利子補給事業・勤労者生活資金融資制度、住宅リフォーム助成制度終了ページ、生殖補助医療費助成事業、同受診等証明書PDF、令和8年度企業版ふるさと納税対象事業、逗子市公式の移住・定住、移住のご相談、神奈川県公式の市町村移住・定住支援一覧を確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは13件から10件に減少。次の候補は `zushi-women-startup`、`minamiashigara-birth-bonus`、`minamiashigara-childcare-subsidy` など。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,567件、神奈川県ローカル公式確認済みは115件、activeWithoutOfficialSourceは3,383件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 3,995 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は555件、activeWithDeadlineは406件、期限切れ149件。
- `npm run audit:links`: broken 0。3,993ファイルから147,352リンク抽出、8,543件監査。

## 2026-07-02 神奈川Batch 42 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残10件から、`city-batch71.ts` の逗子市1件・南足柄市2件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「女性起業支援補助金」「出産祝い金」「保育料軽減補助金」を、逗子市・南足柄市公式ページ本文と公式PDFで確認できる現行制度名・支援内容・対象者へ補正した。

追加:

- `zushi-women-startup`: 逗子市「特定創業支援等事業・逗子創業スクール」。女性限定の現金補助金ではなく、逗子創業スクール、創業セミナー、特定創業支援等事業の証明による登録免許税軽減、創業関連保証特例、日本政策金融公庫の貸付利率引き下げ等へ補正。令和8年度年次計画PDFで創業スクール開催等の継続方針も確認。
- `minamiashigara-birth-bonus`: 南足柄市「妊婦のための支援給付」。1回目は妊婦1人5万円、2回目は妊娠したこども1人につき5万円。令和7年4月1日以降に妊娠届出または出産した方は旧出産・子育て応援金ではなく同給付を参照する旨を確認。
- `minamiashigara-childcare-subsidy`: 南足柄市「幼児教育・保育の無償化と保育料多子軽減」。3～5歳児の保育料無償化、0～2歳児の住民税非課税世帯等の無償化、認可外保育施設等の月額上限3万7,000円または4万2,000円、0～2歳児保育料の多子軽減へ補正。

確認:

- 採用した公式出典URL 10件を確認対象に追加。逗子市公式の創業・起業をお考えの方へ、特定創業支援等事業、令和8年度年次計画PDF、男女平等参画関連PDF、南足柄市公式の妊婦のための支援給付、出産・子育て応援事業、幼児教育・保育の無償化、保育料について、認可外保育施設等、幼稚園・認定こども園ページを確認。
- 採用した公式出典URL 10件はすべて200で到達確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは10件から7件に減少。次の候補は `minamiashigara-housing-purchase`、`minamiashigara-infertility`、`minamiashigara-migration-bonus` など。
- `git diff --check -- SAFE_CONTINUATION_PLAN.md src/data/grants/verified-local-misc-2026.ts tasks/todo.md`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,570件、神奈川県ローカル公式確認済みは118件、activeWithoutOfficialSourceは3,380件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,000 件生成。
- `npm run audit:deadlines`: 初回はビルド完了前の並行実行で `out/` 未生成HTMLを読みに行き失敗。ビルド完了後の再実行で failures 0。期限候補は555件、activeWithDeadlineは406件、期限切れ149件。
- `npm run audit:links`: broken 0。3,998ファイルから147,582リンク抽出、8,558件監査。

## 2026-07-02 神奈川Batch 43 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残7件から、`city-batch71.ts` の南足柄市3件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「住宅取得支援補助金」「不妊治療費助成」「移住支援金」を、南足柄市公式ページ本文および神奈川県公式移住情報で確認できる現行制度名・補助額・対象者へ補正した。

追加:

- `minamiashigara-housing-purchase`: 南足柄市「空き家取得費助成金」。一般住宅取得ではなく、南足柄市空き家バンク事業を通じて空き家を購入し定住する子育て世帯向け。売買契約書に記載された代金総額の2分の1、上限50万円。申請は転入届から3か月以内、予算到達で受付終了。
- `minamiashigara-infertility`: 南足柄市「不妊治療費（先進医療分）助成事業」。医療保険適用の体外受精・顕微授精と併用して実施した先進医療費について、10分の7、1回上限5万円を助成。申請期限は治療終了日から1年以内。
- `minamiashigara-migration-bonus`: 南足柄市「結婚新生活移住支援補助金」。東京圏からの一般移住支援金最大100万円ではなく、婚姻等を機に市内で新生活を始める世帯向けに、住宅購入・リフォーム・賃借費用を2人とも29歳以下上限70万円、39歳以下上限30万円で補助。令和7年度受付終了、令和8年度受付は2026年7月頃開始予定。

確認:

- 採用した公式出典URL 9件を確認対象に追加。南足柄市公式の空き家取得費助成金、移住定住支援策一覧、住宅支援（空き家バンク）、空き家対策専用住宅ローン、不妊治療費（先進医療分）助成事業、結婚新生活移住支援補助金、移住支援ページ、神奈川県公式の県内市町村移住・定住支援、西湘足柄移住コンシェルジュを確認。
- 採用した公式出典URL 9件はすべて200で到達確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは7件から4件に減少。次の候補は `minamiashigara-nursing-equipment`、`minamiashigara-scholarship`、`minamiashigara-seismic-diagnosis`、`minamiashigara-women-startup`。
- `git diff --check -- SAFE_CONTINUATION_PLAN.md src/data/grants/verified-local-misc-2026.ts tasks/todo.md`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,573件、神奈川県ローカル公式確認済みは121件、activeWithoutOfficialSourceは3,377件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,003 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は555件、activeWithDeadlineは406件、期限切れ149件。
- `npm run audit:links`: broken 0。4,001ファイルから147,808リンク抽出、8,569件監査。

## 2026-07-02 神奈川Batch 44 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県` の残4件から、`city-batch71.ts` の南足柄市4件を `src/data/grants/verified-local-misc-2026.ts` に追加した。生成データの「介護用品支給事業」「奨学金制度」「木造住宅耐震診断助成」「女性起業支援補助金」を、南足柄市公式ページ本文で確認できる現行制度名・支援内容・対象者へ補正した。

追加:

- `minamiashigara-nursing-equipment`: 南足柄市「介護用品支給事業」。紙おむつ、使い捨て手袋、おしりふき等の対象商品の支払いに利用できる利用券を最大年6万円分発行。要介護3以上、市民税非課税世帯、在宅生活、一人で排泄処理が困難な寝たきりや認知症の方が対象。
- `minamiashigara-scholarship`: 南足柄市「南足柄市育英奨学金」。高校生等向けの年額4万円給付。令和8年度募集期間は2026年6月8日から7月10日。生成データの大学生含む月額4万円無利子貸与を補正。
- `minamiashigara-seismic-diagnosis`: 南足柄市「木造住宅の耐震化事業」。無料簡易耐震診断、耐震診断補助上限10万円、耐震改修工事補助2分の1・上限100万円、除却工事補助2分の1・上限20万円へ補正。生成データの自己負担なし耐震診断のみの記載を制度全体へ拡張。
- `minamiashigara-women-startup`: 南足柄市「信用保証料補助制度・創業支援」。女性限定の起業補助金ではなく、創業支援融資を含む対象融資の信用保証料補助（年度1事業所上限5万円）と特定創業支援等事業へ補正。

確認:

- 採用した公式出典URL 13件を確認対象に追加。南足柄市公式の介護用品支給事業、南足柄市育英奨学金、県の奨学金等の制度、木造住宅の耐震化事業、木造住宅の簡易耐震診断、耐震診断補助、耐震改修工事補助、除却工事補助、信用保証料補助制度、南足柄市の創業支援、創業支援セミナー、中小企業融資制度、商工業・農林業・雇用ページを確認。
- 採用した公式出典URL 13件はすべて200で到達確認。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 神奈川県 --limit 15`: 神奈川県の未照合raw slugは4件から0件に減少。
- `git diff --check -- SAFE_CONTINUATION_PLAN.md src/data/grants/verified-local-misc-2026.ts tasks/todo.md`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,577件、神奈川県ローカル公式確認済みは125件、activeWithoutOfficialSourceは3,373件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,007 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は557件、activeWithDeadlineは408件、期限切れ149件。
- `npm run audit:links`: broken 0。4,005ファイルから148,113リンク抽出、8,586件監査。

## 2026-07-02 重複raw slug棚卸しログ

神奈川県の未照合raw slugが0件になったため、全国の次作業に入る前に重複データの棚卸しを強化した。`scripts/audit-raw-verified-gaps.mjs` に `--duplicates` を追加し、raw seed側で同一slugが複数ファイルに存在する場合に、slug、件数、都道府県、自治体、タイトル、出現ファイルを一覧できるようにした。JSON出力にも `sampleDuplicateRawSlugs` を追加した。

確認:

- `kb search "助成金ナビ joseikin-navi-site"`: `kb: command not found`。今回もKB CLIは未導入のため、handoff、SAFE、TODO、repo内監査で継続。
- `git status --short --branch`: `main...origin/main [ahead 85]`。Pinterest系・Header/Footer等の既存未コミット差分は引き続き別作業として触らない。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slug 3,369件、重複raw slug 32件。神奈川県は未照合0件。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 15`: 東京都未照合raw slug 279件。先頭候補は葛飾区、江戸川区。
- `node scripts/audit-raw-verified-gaps.mjs --duplicates --limit 50`: 重複raw slug 32件を全件出力できることを確認。
- `node scripts/audit-raw-verified-gaps.mjs --json --limit 2`: JSON出力に `sampleDuplicateRawSlugs` が含まれることを確認。
- `npx eslint scripts/audit-raw-verified-gaps.mjs`: エラー0。

重複の傾向:

- 32件中、多くは `*-startup-support` の同一slugが旧batchと後続batchの両方にあるもの。
- 例: `hachioji-startup-support`、`hakodate-startup-support`、`kitakyushu-startup-support`、`soka-startup-support` など。
- `ebina-scholarship` は神奈川県内の奨学金slug重複だが、公式確認済みデータで上書き済みのため、通常公開上の重複リスクは低い。

次の安全な一手:

1. 東京都の未照合raw slug 279件から、葛飾区・江戸川区など自治体単位で公式一次情報確認を進める。
2. もしくは `node scripts/audit-raw-verified-gaps.mjs --duplicates --limit 50` の重複32件から、公式確認しやすい創業支援系を公式確認済みデータへ置換し、重複の実害をさらに減らす。
3. raw seed自体の削除・統合は影響範囲が大きいため、まずはverified側で公式確認済み置換を積み上げる。

## 2026-07-02 東京都Batch 45 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の先頭候補から、葛飾区5件を `src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「放課後子ども教室事業」「出産祝い金」「防災用品購入助成事業」「子育て支援給付金」「介護住宅改修助成事業」を、葛飾区公式ページで確認できる現行制度または助成金ではない状態へ補正した。

追加:

- `katsushika-afterschool`: 葛飾区「放課後子ども事業（わくわくチャレンジ広場）」は小学生の放課後等の居場所事業で、保護者向け助成金・給付金ではないため通常一覧から除外。
- `katsushika-birth-bonus`: 現行の葛飾区妊婦支援給付金は既存slug `katsushika-pregnancy-support-benefit` で公式確認済み掲載済みのため、旧生成slugは重複防止として通常一覧から除外。
- `katsushika-bousai-equipment`: 葛飾区「消火器購入支援事業補助金」。戸建住宅に居住する区民向けに、新品の消火器等の購入費等を2分の1・上限5,000円補助。受付は2026年6月29日から2027年2月26日必着分まで。
- `katsushika-childcare-subsidy`: 葛飾区「物価高対応子育て応援手当」。対象児童1人あたり2万円の令和7年度臨時手当。令和8年3月31日までの出生児を対象に含む事業のため、通常一覧では期限切れ扱い。
- `katsushika-nursing-home-reform`: 葛飾区「介護保険住宅改修費・高齢者住宅設備改修費助成」。介護保険住宅改修は対象工事20万円まで、高齢者住宅設備改修は浴槽37.9万円、流し台・洗面台15.6万円、階段昇降機本体等97.9万円・設置費35.3万円等を確認。

確認:

- 採用した公式出典URL 9件はすべて200で到達確認。葛飾区公式のわくわくチャレンジ広場、妊婦支援給付金、妊娠・出産一覧、消火器購入支援事業補助金、震災への家庭でのそなえ、物価高対応子育て応援手当、各種手当・医療費助成一覧、介護保険住宅改修費申請書等、住宅設備改修費助成を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 15`: 東京都の未照合raw slugは279件から274件に減少。次の候補は `katsushika-migration-bonus`、`katsushika-telework-bonus`、江戸川区各slug。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,369件から3,364件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,579件、東京都ローカル公式確認済みは144件、activeWithoutOfficialSourceは3,368件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,017 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は561件、activeWithDeadlineは409件、期限切れ152件。
- `npm run audit:links`: broken 0。4,015ファイルから148,489リンク抽出、8,602件監査。

## 2026-07-02 東京都Batch 46 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の江戸川区候補から、7件を `src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「出産祝い金」「子育て支援給付金」「心身障害者医療費助成制度」「就学援助制度」「高齢者見守り・生活支援事業」「介護用品支給事業」「奨学資金貸付制度」を、江戸川区公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `edogawa-birth-bonus`: 現行の江戸川区「妊婦のための支援給付事業」は既存slug `edogawa-pregnancy-support-benefit` で公式確認済み掲載済みのため、旧生成slugは重複防止として通常一覧から除外。
- `edogawa-childcare-subsidy`: 江戸川区「物価高対応子育て応援手当」。対象児童1人あたり2万円の令和7年度臨時手当。申請受付は2026年4月30日終了のため通常一覧から除外。
- `edogawa-disability-medical`: 江戸川区「心身障害者医療費助成（マル障・都制度）」。対象障害、所得制限、住民税非課税者自己負担なし・課税者原則1割負担を確認。
- `edogawa-education-support`: 江戸川区「就学援助費」。区立小・中学校に通う子どもの学用品費、給食費、校外活動費、修学旅行費等を援助する制度へ補正。
- `edogawa-elderly-support`: 江戸川区「民間緊急通報システム マモルくん」。65歳以上のひとり暮らし等を対象に、区の契約料金月額2,200円、状況により区助成ありの見守り支援として補正。
- `edogawa-nursing-equipment`: 江戸川区「紙おむつ・防水シーツの支給」。紙おむつは1人900点（9,000円分相当）まで1割自己負担、防水シーツは年度内1回2枚等を確認。
- `edogawa-scholarship`: 江戸川区「入学資金融資あっせん制度」。私立高校等100万円、短大・大学等200万円、海外留学200万円まで。利率1.7%のうち本人負担0.5%となるよう利子補給する制度へ補正。

確認:

- 採用した公式出典URL 17件はすべて200で到達確認。江戸川区公式の妊婦のための支援給付、妊娠・出産一覧、物価高対応子育て応援手当、手当・医療費助成一覧、マル障、医療費助成早見表、就学援助、入学前支給、民間緊急通報システム、熟年者応援ページ、紙おむつ・防水シーツの支給、紙おむつ支給申請、紙おむつ使用料助成、入学資金融資あっせん、教育費支援一覧、各進学区分ページを確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは274件から267件に減少。次の候補は `katsushika-migration-bonus`、`katsushika-telework-bonus`、`edogawa-senior-support`、江東区各slug。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,364件から3,357件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,584件、東京都ローカル公式確認済みは149件、activeWithoutOfficialSourceは3,361件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,028 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は563件、activeWithDeadlineは409件、期限切れ154件。
- `npm run audit:links`: broken 0。4,026ファイルから149,015リンク抽出、8,629件監査。

## 2026-07-02 東京都Batch 47 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の江戸川区残件1件と江東区候補8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「熟年者生活支援」「出産祝い金」「認可外保育施設等補助」「高齢者緊急通報」「不妊治療費助成」「介護用品支給」「奨学資金」「高齢者医療」「中小企業経営支援」を、各自治体公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `edogawa-senior-support`: 江戸川区「介護者激励手当」。要介護4または5の在宅者を介護する介護者に年間10万円を支給する制度へ補正。
- `koto-birth-bonus`: 江東区「出産・子育て応援給付金（妊婦のための支援給付）」。妊婦1人5万円、子ども1人5万円の給付として補正。
- `koto-childcare-subsidy`: 江東区「認可外保育施設等保護者負担軽減補助金（令和8年度）」。令和8年度分は2026年4月1日受付開始の補助として補正。
- `koto-elderly-support`: 江東区「高齢者救急通報システム」。高齢者のみの世帯等への緊急通報・見守り機器設置制度として補正。
- `koto-infertility`: 江東区「特定不妊治療費（先進医療）助成事業」。東京都助成への上乗せ、1回上限5万円として補正。
- `koto-nursing-equipment`: 江東区「高齢者紙おむつ支給及びおむつ購入費助成」。現物支給75点まで無料、購入費助成月額7,500円上限として補正。
- `koto-scholarship`: 江東区「江東区奨学資金」。学資金月額1万円、入学準備金10万円の返還不要制度だが、令和8年度生募集の提出期限2025年12月9日到来済みのため通常一覧から除外。
- `koto-senior-medical`: 江東区「令和8年度高齢者用肺炎球菌予防接種（定期接種）」。対象65歳、自己負担4,000円または5,500円、生活保護受給者等は免除として補正。
- `koto-sme-support`: 江東区「創業支援事務所等賃料補助金」。1〜12か月目は月額上限5万円、13〜24か月目は月額上限3万円、令和8年度受付は2026年9月1日から11月30日までとして補正。

確認:

- 採用した公式出典URL 20件はすべて200で到達確認。江戸川区公式の介護者激励手当、熟年者応援ページ、江東区公式の妊婦支援給付、妊娠・出産一覧、令和8年度認可外保育施設等補助、令和7年度補助、高齢者救急通報システム、案内PDF、特定不妊治療費助成、高齢者紙おむつ支給・購入費助成、申請PDF、心身障害者紙おむつ支給、江東区奨学資金、奨学金一覧、令和8年度募集PDF、高齢者用肺炎球菌予防接種、区報テキスト、創業支援事務所等賃料補助金、中小企業補助金一覧、中小企業融資制度を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは267件から258件に減少。次の候補は `katsushika-migration-bonus`、`katsushika-telework-bonus`、港区各slug、荒川区各slug、国分寺市各slug。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,357件から3,348件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,592件、東京都ローカル公式確認済みは157件、activeWithoutOfficialSourceは3,352件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,041 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は565件、activeWithDeadlineは410件、期限切れ155件。
- `npm run audit:links`: broken 0。4,039ファイルから149,687リンク抽出、8,660件監査。

## 2026-07-02 東京都Batch 48 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の葛飾区残件2件と港区5件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「ファミリー世帯定住促進支援金」「テレワーク推進助成金」「子育て世帯臨時特別給付金」「就学援助制度」「特定不妊治療費助成事業」「介護用品支給事業」「省エネ家電購入助成事業」を、各自治体公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `katsushika-migration-bonus`: 葛飾区の現行「ファミリー世帯定住促進支援金」としては公式確認不可。公的住宅・居住支援、居住支援協議会、過去の二世代・三世代住宅取得費助成モデル事業廃止資料を確認し、通常一覧から除外。
- `katsushika-telework-bonus`: 葛飾区「デジタル化支援事業費補助金」。区内中小企業のデジタル技術導入に対し、補助率2分の1、上限50万円、ハードウェア購入費上限20万円。受付は2026年4月1日から2027年2月26日必着。
- `minato-childcare-subsidy`: 港区「物価高対応子育て応援手当」。対象児童1人につき2万円。主要な児童手当申請期限2026年4月15日到来済みのため通常一覧から除外。
- `minato-education-support`: 港区「就学援助費」。生活保護、児童扶養手当、基準所得額該当等の保護者に、学用品費、修学旅行費、学校給食費などを援助。
- `minato-infertility`: 港区「特定不妊治療費（先進医療、自由診療）助成金」。1回上限30万円、治療終了年度末まで申請、1〜3月終了分は同年6月30日まで申請可能。
- `minato-nursing-equipment`: 港区「高齢者紙おむつの給付」。要支援1以上でねたきりまたは失禁状態の高齢者に月1回120点まで配送、利用者負担月額500円。
- `minato-energy-support`: 港区「高齢者エアコン購入設置費助成」。令和8年度は1世帯1回限り上限111,000円。経済的理由で自宅にエアコンがない高齢者世帯向けの熱中症対策助成へ補正。

確認:

- 採用した公式出典URL 19件はすべて200で到達確認。葛飾区公式の公的な住宅・居住支援、居住支援協議会、廃止等事務事業、デジタル化支援事業費補助金、中小企業デジタル化支援、IT相談、港区公式の物価高対応子育て応援手当、児童手当、就学援助費、就学援助一覧、特定不妊治療費助成、妊娠を希望される方、先進医療費助成Q&A、紙おむつ給付、おむつ代助成、令和8年度紙おむつパンフレット、高齢者エアコン購入設置費助成、地球温暖化対策助成制度、各種助成制度を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは258件から251件に減少。次の候補は荒川区各slug、国分寺市各slug、狛江市各slug。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,348件から3,341件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,597件、東京都ローカル公式確認済みは162件、activeWithoutOfficialSourceは3,345件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,051 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は568件、activeWithDeadlineは411件、期限切れ157件。
- `npm run audit:links`: broken 0。4,049ファイルから150,214リンク抽出、8,687件監査。

## 2026-07-02 東京都Batch 49 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の荒川区9件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「防災用品あっせん事業」「子育て世帯応援給付金」「認証保育所保育料助成制度」「省エネ家電買替助成事業」「生活困窮者自立支援事業」「介護保険住宅改修支援事業」「学校給食費助成事業」「高齢者インフルエンザ等予防接種費用助成」「テレワーク環境整備助成金」を、荒川区公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `arakawa-bousai-equipment`: 荒川区「防災用品のあっせん事業」。補助率50%ではなく、区内一般家庭・事業所向けのあっせん価格購入支援として補正。申込期限は2026年7月31日消印有効。
- `arakawa-childcare-subsidy`: 荒川区「物価高対応子育て応援手当」。児童1人当たり2万円。旧生成データの子ども1人最大5万円給付ではなく、現行公式手当へ補正。
- `arakawa-daycare-support`: 荒川区「施設等利用費及び認証保育所等保育料補助金」。公式確認できる令和7年度後期申請期限は2026年3月19日または4月3日で到来済みのため通常一覧から除外。
- `arakawa-energy-support`: 荒川区「令和8年度エコ助成事業（省エネエアコン・省エネ冷蔵庫）」。既存slug `arakawa-housing-eco` と同一公式制度のため旧slugは通常一覧から除外し、既存レコード側へ省エネエアコン・省エネ冷蔵庫の検索語と金額を追記。
- `arakawa-living-support`: 荒川区「住居確保給付金（家賃補助・転宅費用補助）」。生活困窮者自立支援制度に基づく家賃補助・転宅費用補助へ補正。
- `arakawa-nursing-home-reform`: 荒川区「介護保険住宅改修」。支給限度額20万円、利用者負担1〜3割、工事前申請必須として補正。
- `arakawa-school-lunch`: 荒川区「教育費の保護者負担軽減事業」。学校給食費、補助教材費等、移動教室・修学旅行参加費を公費負担する制度として補正。
- `arakawa-senior-medical`: 荒川区「定期高齢者肺炎球菌予防接種事業」。令和7年度高齢者インフルエンザは終了済みのため、現行確認できる令和8年度肺炎球菌定期接種へ補正。
- `arakawa-telework-bonus`: 荒川区「製造業等企業価値向上支援事業補助金（DX推進補助）」。テレワーク専用助成ではなく、DX推進補助として一般上限100万円、特例上限300万円、賃上げ要件該当時上限200万円、申請期限2027年2月15日へ補正。

確認:

- 採用した公式出典URL 28件はすべて200で到達確認。荒川区公式の防災用品あっせん、家庭の備え、屋内安全対策、物価高対応子育て応援手当、児童手当、子育て一覧、施設等利用費及び認証保育所等保育料補助金、認証保育所代理申請、保育料補助制度PDF、令和8年度エコ助成、助成・支援一覧、エコ助成手引きPDF、住居確保給付金、仕事・生活サポートデスク、住居確保給付金実施要綱、介護保険住宅改修、住宅改修一覧、住宅改修取扱事業者、高齢者住宅改修給付、教育費の保護者負担軽減、就学援助、学校給食無償化意見書、定期高齢者肺炎球菌、令和7年度高齢者インフルエンザ、23区外接種費用助成、製造業等企業価値向上支援事業補助金、企業支援メニューPDF 2件を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは251件から242件に減少。次の候補は国分寺市、狛江市、三鷹市、渋谷区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,341件から3,332件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,604件、東京都ローカル公式確認済みは169件、activeWithoutOfficialSourceは3,336件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,068 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は572件、activeWithDeadlineは413件、期限切れ159件。
- `npm run audit:links`: broken 0。4,066ファイルから150,902リンク抽出、8,730件監査。

## 2026-07-02 東京都Batch 50 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の国分寺市9件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「放課後子ども教室」「出産祝い金」「保育料軽減補助金」「省エネ家電買替え補助金」「不妊治療費助成制度」「介護住宅改修助成」「木造住宅耐震診断助成」「創業支援補助金」「テレワーク推進補助金」を、国分寺市公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `kokubunji-afterschool`: 国分寺市「放課後子どもプラン」。市立全小学校で実施する放課後の居場所づくり事業へ補正。参加は電子申請、費用は原則無料。
- `kokubunji-birth-bonus`: 国分寺市「出産・子育て応援事業（妊婦のための支援給付）」。ゆりかご育児パッケージ1万円相当、出産応援ギフト5万円相当、子育て応援ギフト5万円相当へ補正。
- `kokubunji-childcare-subsidy`: 国分寺市「認証保育所等保護者助成金制度」。認証保育所等・認可外保育施設等の保育料に対し、月額最大6.7万円の保護者助成として補正。
- `kokubunji-energy-support`: 国分寺市「省エネ家電等買換え応援キャンペーン」。令和5年度キャンペーンとしては確認できるが、令和8年度の現行受付は確認不可。通常一覧から除外し、現行の省エネ系支援は既存 `kokubunji-housing-eco` を参照する扱いへ補正。
- `kokubunji-infertility`: 国分寺市「特定不妊治療費助成金」。現行市独自助成としては確認できず、国分寺市公式では東京都特定不妊治療費（先進医療）助成事業への案内を確認。通常一覧から除外。
- `kokubunji-nursing-home-reform`: 国分寺市「介護保険住宅改修費支給」。支給限度基準額20万円、9割相当上限18万円、工事前相談・事前申請必須として補正。
- `kokubunji-seismic-diagnosis`: 国分寺市「木造住宅の耐震診断士派遣事業」。既存 `kokubunji-housing-seismic` と同一公式ページの制度のため、無料耐震診断士派遣を確認したうえで旧slugは通常一覧から除外。
- `kokubunji-startup-support`: 国分寺市「事業資金融資あっせん（創業資金・保証料補助）」。創業資金融資限度額500万円、信用保証料全額補助、本人負担利率0.2%の制度へ補正。
- `kokubunji-telework-bonus`: 国分寺市「テレワーク推進補助金」。現行の同名補助金としては公式確認不可。事業資金融資あっせん・創業支援等事業を関連情報として確認し、通常一覧から除外。

確認:

- 採用した公式出典URL 22件はすべて200で到達確認。国分寺市公式の放課後子どもプラン、放課後子どもプランFAQ、令和8年度学童保育所入所案内PDF、出産・子育て応援事業、妊婦等包括相談支援事業、認証保育所等保護者助成金、幼児教育・保育無償化概要、施設等利用費請求手続、令和6年1月15日号市報、省エネ家電等買換え応援キャンペーンPDF、再エネ・省エネ機器等設置助成、妊娠から出産までの行政サービス、廃止例規の特定不妊治療費助成金交付規則、介護保険住宅改修FAQ、住宅改修費受領委任払い利用申請書、住宅改修費支給申請書、木造住宅耐震診断・耐震改修等助成金、事業資金融資あっせん、創業支援等事業、令和8年度こくぶんじ創業塾、起業・創業支援一覧、市就労支援の取組を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは242件から233件に減少。次の候補は狛江市、三鷹市、渋谷区、小金井市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,332件から3,323件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,609件、東京都ローカル公式確認済みは174件、activeWithoutOfficialSourceは3,327件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,084 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は576件、activeWithDeadlineは413件、期限切れ163件。
- `npm run audit:links`: broken 0。4,082ファイルから151,582リンク抽出、8,766件監査。

## 2026-07-02 東京都Batch 51 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の狛江市8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「放課後子ども教室」「出産祝い金」「保育料軽減補助金」「省エネ家電買替え補助金」「不妊治療費助成制度」「介護住宅改修助成」「木造住宅耐震診断助成」「テレワーク推進補助金」を、狛江市公式ページ・こまえ子育てねっとで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `komae-afterschool`: 狛江市「KoKoA（放課後子ども教室事業）」。市内6小学校すべてで実施、1〜6年生が対象、参加無料・保険は市加入として補正。
- `komae-birth-bonus`: 狛江市「出産祝金支給事業」。支給対象子1人当たり2万円、出生日から1年以内申請として補正。
- `komae-childcare-subsidy`: 狛江市「認証保育所等入所児童保護者負担軽減補助金」。令和7年度後期申請期限2026年3月31日到来済みのため通常一覧から除外。
- `komae-energy-support`: 狛江市「省エネ家電買替え補助金」。市独自の現行制度としては公式確認不可。現行の省エネ系支援は既存 `komae-housing-eco` の地球温暖化対策用設備導入助成として確認し、旧slugは通常一覧から除外。
- `komae-infertility`: 狛江市「不妊治療費等助成金」。令和8年度開始、東京都助成への上乗せ、不妊検査等上限1万円、不育症検査上限2万円、特定不妊治療費（先進医療）上限3万円として補正。
- `komae-nursing-home-reform`: 狛江市「介護保険居宅介護（介護予防）住宅改修費支給」。改修費の9割から7割、同一住宅1人20万円まで、事前申請必須として補正。
- `komae-seismic-diagnosis`: 狛江市「木造住宅耐震助成」。耐震アドバイザー派遣無料、耐震診断上限12万円、耐震改修上限80万円＋加算最大61.2万円等として補正。
- `komae-telework-bonus`: 狛江市「小口事業資金融資あっ旋制度」。テレワーク専用補助金は現行公式制度として確認できないため、公式確認できる現行の事業者資金支援へ補正。運転・設備資金最大1,000万円、創業・研究開発資金最大500万円、令和8年度受付は2027年3月31日まで。

確認:

- 採用した公式出典URL 24件はすべて200で到達確認。狛江市公式のKoKoA案内、こまえ子育てねっとのKoKoA、KoKoA実施施設、狛江市出産祝金、こまえ子育てねっと出産祝金、妊婦のための支援給付、令和8年3月1日号、認証保育所等負担軽減補助金、第一子保育料無償化等、地球温暖化対策用設備導入助成、過去の東京ゼロエミポイント案内、不妊・不育症情報、不妊治療費等助成金、令和8年5月1日号、介護保険申請書類、介護保険サービス、介護保険住宅改修の手引きPDF、木造住宅耐震助成、住宅関係支援ガイドブック、住宅耐震化緊急促進アクションプログラム、小口事業資金融資あっ旋、事業資金・経営相談等、令和8年度小口パンフレット、創業支援を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは233件から225件に減少。次の候補は三鷹市、渋谷区、小金井市、小平市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,323件から3,315件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,615件、東京都ローカル公式確認済みは180件、activeWithoutOfficialSourceは3,319件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,097 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は579件、activeWithDeadlineは414件、期限切れ165件。
- `npm run audit:links`: 初回は既存の神奈川産業振興センター503と高松市ECONNRESETでbroken 15、同じビルド出力で再実行して broken 0。4,095ファイルから152,238リンク抽出、8,804件監査。

## 2026-07-02 東京都Batch 52 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の三鷹市8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「放課後クラブ利用料助成」「在宅高齢者介護手当」「不妊治療費助成制度」「認可外保育施設利用料助成」「雨水タンク設置補助金」「就学援助制度」「高齢者見守り・生活支援」「若者正規雇用定着奨励金」を、三鷹市公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `mitaka-afterschool-care`: 三鷹市「学童保育所育成料等減額・免除」。育成料月額7,000円について、住民税均等割のみ世帯の月額3,500円減額、対象事由による育成料・延長育成料・おやつ代免除として補正。
- `mitaka-home-care`: 三鷹市「家族介護慰労金」。在宅高齢者を介護している家族に年額10万円を贈呈する制度へ補正。
- `mitaka-infertility`: 三鷹市「不妊症・不育症に関する相談・東京都助成案内」。市独自の現行助成金としては支給額・申請期間を確認できないため通常一覧から除外。
- `mitaka-nursery-support`: 三鷹市「認可外保育施設利用助成制度」。認証保育所・認可外保育施設等の利用者向けに、0〜2歳児の市民税課税世帯は月額上限8万円などの助成として補正。
- `mitaka-rainwater-tank`: 三鷹市「雨水浸透ます設置事業」。旧生成データの雨水タンク補助ではなく、希望者へ公費で雨水浸透ますを設置する支援として補正。
- `mitaka-school-aid`: 三鷹市「就学援助制度」。学用品費、学校給食費、修学旅行費など学校生活に必要な費用の援助として補正。
- `mitaka-senior-support`: 三鷹市「補聴器購入費助成事業」。補聴器本体購入費用の2分の1、上限4万円、購入前申請必須として補正。
- `mitaka-youth-employment`: 三鷹市「介護事業者事業継続支援事業補助金」。若者正規雇用定着奨励金は現行市公式制度として確認できないため、公式確認できる雇用・職場環境改善系補助へ補正。上限50万円（年額）。

確認:

- 確認対象の公式URL 23件はすべて200で到達確認。三鷹市公式の学童保育所各種申請、学童保育所案内、令和8年度学童保育所入所案内PDF、家族介護慰労金、高齢者向けサービス冊子、家族介護慰労金申込書、不妊症・不育症相談、認可外保育施設利用助成制度、企業主導型保育施設案内、認可外保育施設等案内PDF、申請書PDF、雨水浸透ます設置、雨水浸透施設設置基準、就学援助制度、令和8年度就学援助制度案内PDF、新入学準備金、補聴器購入費助成、広報みたか補聴器助成案内、介護事業者事業継続支援事業補助金、令和8年度取扱要領、Q&A、広報みたか介護事業者補助案内、わくわくサポート三鷹を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは225件から217件に減少。次の候補は渋谷区、小金井市、小平市、昭島市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,315件から3,307件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,622件、東京都ローカル公式確認済みは187件、activeWithoutOfficialSourceは3,311件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,112 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は580件、activeWithDeadlineは414件、期限切れ166件。
- `npm run audit:links`: broken 0。4,110ファイルから152,848リンク抽出、8,842件監査。

## 2026-07-02 東京都Batch 53 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の渋谷区7件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「放課後クラブ利用料助成」「出産・子育て応援交付金」「子育てネウボラ給付金」「プログラミング教育支援助成」「移住・定住応援給付金」「介護用品給付事業」「高齢者歯科健診・治療費助成」を、渋谷区公式ページ・渋谷区社会福祉協議会公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `shibuya-afterschool`: 渋谷区「放課後クラブ（利用料無料）」。利用料助成ではなく、利用料無料、保険料800円・おやつ代等実費負担の放課後クラブへ補正。
- `shibuya-birth-bonus`: 渋谷区「ハッピーマザー出産助成金」。出産1人につき上限10万円、出産日から1年以内申請として補正。出産・子育て応援事業は令和8年3月30日受付終了を確認。
- `shibuya-childcare-subsidy`: 渋谷区「バースデーサポート事業」。1歳になる子どものいる家庭向けに、出生年度に応じて最大10万円分の育児パッケージを配付する制度へ補正。
- `shibuya-it-education`: 渋谷区「プログラミング教育支援助成」。学校内ICT教育・教育DX・S-SAP協定によるプログラミング授業は確認できるが、保護者向け受講料助成は公式確認不可のため通常一覧から除外。
- `shibuya-migration-bonus`: 渋谷区「移住・定住応援給付金」。住宅支援一覧、住居確保給付金、立ち退きに伴う住み替え家賃補助制度は確認できるが、転入子育て世帯向け給付金は公式確認不可のため通常一覧から除外。
- `shibuya-nursing-equipment`: 渋谷区「紙おむつ購入費助成」。渋谷区社会福祉協議会と渋谷区が助成した価格で購入でき、月額3,500円で商品価格17,500円分まで購入可能として補正。
- `shibuya-senior-dental`: 渋谷区「歯科健康診査」。対象年齢の区民向け歯科健康診査へ補正。治療は対象外、訪問歯科健康診査あり。

確認:

- 確認対象の公式URL 17件はすべて200で到達確認。渋谷区公式の放課後クラブ、放課後クラブ登録、ハッピーマザー出産助成金、終了済み出産・子育て応援事業、妊婦支援給付金、バースデーサポート事業、教育DX広報、DeNA S-SAP協定、小中学校・就学援助、住宅支援一覧、住居確保給付金、立ち退きに伴う住み替え家賃補助、渋谷区社会福祉協議会サービス、紙おむつ購入費助成、2026年度紙おむつカタログPDF、入院時紙おむつ助成、歯科健康診査を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは217件から210件に減少。次の候補は小金井市、小平市、昭島市、新宿区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,307件から3,300件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,627件、東京都ローカル公式確認済みは192件、activeWithoutOfficialSourceは3,304件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,127 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は583件、activeWithDeadlineは415件、期限切れ168件。
- `npm run audit:links`: broken 0。4,125ファイルから153,379リンク抽出、8,872件監査。

## 2026-07-02 東京都Batch 54 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の小金井市8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「放課後子ども教室」「出産祝い金」「保育料軽減補助金」「省エネ家電買替え補助金」「不妊治療費助成制度」「介護住宅改修助成」「木造住宅耐震診断助成」「テレワーク推進補助金」を、小金井市公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `koganei-afterschool`: 小金井市「放課後子ども教室」。助成金ではなく、市立小学校の校庭・教室等で実施する放課後の居場所事業として補正。
- `koganei-birth-bonus`: 小金井市「妊婦のための支援給付事業」。妊婦1人5万円、子ども1人5万円。旧出産・子育て応援事業との切替関係も確認。
- `koganei-childcare-subsidy`: 小金井市「保育料無償化・幼児教育保育の無償化」。認可保育所等0円、幼稚園・預かり保育等の給付上限、市独自の給食費補助等へ補正。
- `koganei-energy-support`: 小金井市「住民税非課税世帯等エアコン購入費助成事業」。熱中症対策のエアコン購入・設置等助成、上限10万円、申請期限2027年2月26日へ補正。
- `koganei-infertility`: 小金井市「不妊検査・不妊治療・不育症検査の東京都助成案内」。市独自の現行助成金としては確認できないため通常一覧から除外。
- `koganei-nursing-home-reform`: 小金井市「高齢者自立支援住宅改修」。住宅改修予防給付20万円、住宅設備改修給付37万9千円、工事着手前申込み必須として補正。
- `koganei-seismic-diagnosis`: 小金井市「木造住宅耐震診断助成金」。自己負担なしではなく、耐震診断費用の3分の2・上限10万円、令和9年2月28日までの診断終了へ補正。
- `koganei-telework-bonus`: 小金井市「小規模事業者持続化サポート補助金」。テレワーク専用補助金は現行公式制度として確認できないため、公式確認できる販路開拓等の小規模事業者補助へ補正。最大62.5万円。

確認:

- 確認対象の公式URL 25件はすべて200で到達確認。小金井市公式の放課後子ども教室、放課後の居場所、放課後ガイドブック、妊婦のための支援給付、出産・子育て応援事業、幼児教育・保育の無償化、保育料、施設等利用給付認定・請求、私立幼稚園満3歳児預かり保育補助、多様な集団活動利用支援、エアコン購入費助成、住宅用新エネルギー補助、不妊検査・不妊治療・不育症検査の東京都助成案内、助成・給付一覧、高齢者自立支援住宅改修、介護保険住宅改修申請書、住宅改修相談、木造住宅耐震診断助成、木造住宅耐震改修等助成、耐震関連一覧、小規模事業者持続化サポート補助金、創業支援、特定創業支援等事業証明を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは210件から202件に減少。次の候補は小平市、昭島市、新宿区、杉並区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,300件から3,292件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,634件、東京都ローカル公式確認済みは199件、activeWithoutOfficialSourceは3,296件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,138 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は586件、activeWithDeadlineは417件、期限切れ169件。
- `npm run audit:links`: broken 0。4,136ファイルから153,975リンク抽出、8,906件監査。

## 2026-07-02 東京都Batch 55 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の小平市1件・昭島市9件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「小平市 就学援助制度」「昭島市 放課後子ども教室」「出産祝い金」「保育料軽減補助金」「省エネ家電買替え補助金」「不妊治療費助成制度」「介護住宅改修助成」「木造住宅耐震診断助成」「テレワーク推進補助金」「高齢者予防接種費用助成」を、小平市・昭島市公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `kodaira-education-scholarship`: 小平市「就学援助制度（令和8年度）」。学用品費、学校給食費、校外活動費、修学旅行費、医療費、通学費、オンライン学習通信費等の援助として補正。
- `akishima-afterschool`: 昭島市「放課後子ども教室」。補助金ではなく、登録票と保険料等負担金500円で利用する市主催の放課後居場所事業として補正。
- `akishima-birth-bonus`: 昭島市「妊婦のための支援給付」。旧出産祝い金候補を、胎児1人あたり5万円の現行給付へ補正。
- `akishima-childcare-subsidy`: 昭島市「認可外保育施設の保育料補助」。認可外保育施設利用支援補助金と施設等利用費による保育料負担軽減として補正。
- `akishima-energy-support`: 昭島市「東京都ゼロエミポイント」。市独自補助ではなく、昭島市公式が案内する東京都の省エネ家電買替支援として補正。
- `akishima-infertility`: 昭島市「特定不妊治療医療費助成」。東京都の特定不妊治療費（先進医療）助成への上乗せ、1回上限3万円として補正。
- `akishima-nursing-home-reform`: 昭島市「高齢者自立支援住宅改修給付サービス」。住宅改修予防給付20万円、浴槽37.9万円等、工事前相談必須として補正。
- `akishima-seismic-diagnosis`: 昭島市「木造住宅耐震診断補助制度」。診断費用3分の2・上限8万円、申請期限2026年11月30日、要相談の受付状況として補正。
- `akishima-telework-bonus`: 昭島市「ものづくり企業等地域共生推進補助金」。テレワーク専用補助は現行公式制度として確認できないため、公式募集中の事業者向け設備改善・耐震補助へ補正。最大400万円、実績報告期限2027年2月26日。
- `akishima-vaccination-support`: 昭島市「高齢者肺炎球菌予防接種」。65歳等を対象に自己負担5,500円、生活保護受給者無料として補正。

確認:

- 確認対象の公式URL 10件はすべて200で到達確認。小平市公式の令和8年度就学援助、昭島市公式の放課後子ども教室、妊婦のための支援給付、認可外保育施設の保育料補助、東京都ゼロエミポイント案内、特定不妊治療医療費助成、高齢者自立支援住宅改修給付サービス、木造住宅耐震診断補助制度、令和8年度ものづくり企業等地域共生推進補助金、高齢者肺炎球菌予防接種を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは202件から192件に減少。次の候補は新宿区、杉並区、世田谷区、青梅市、千代田区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,292件から3,282件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,644件、東京都ローカル公式確認済みは209件、activeWithoutOfficialSourceは3,286件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,152 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は588件、activeWithDeadlineは419件、期限切れ169件。
- `npm run audit:links`: 初回は既存外部URLのtimeoutでbroken 3、同じビルド出力で再実行して broken 0。4,150ファイルから154,697リンク抽出、8,929件監査。

## 2026-07-02 東京都Batch 56 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の新宿区9件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「子育て応援特別手当」「心身障害者医療費助成制度」「定住化支援事業」「住宅設備改修給付事業」「学校給食費補助事業」「耐震診断助成事業」「高齢者見守り支援事業」「テレワーク導入支援補助金」「高齢者インフルエンザ予防接種助成」を、新宿区公式ページ・公式PDFで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `shinjuku-childcare-subsidy`: 新宿区「低所得者支援及び定額減税補足給付金（不足額給付）」。子育て応援特別手当の現行公式制度は確認できないため、公式確認できる給付へ補正。申請期限2025年10月31日終了のため通常一覧から除外。
- `shinjuku-disability-medical`: 新宿区「心身障害者医療費助成制度（マル障）」。保険診療の自己負担分助成、対象手帳区分、所得制限を確認。
- `shinjuku-migration-bonus`: 新宿区「次世代育成転居助成」。転居一時金最大36万円、家賃差額助成月額最大3万5千円、令和7年度募集終了として補正。
- `shinjuku-nursing-home-reform`: 新宿区「住宅設備改修給付」。浴槽37万9千円、流し台・洗面台15万6千円、洋式便器10万6千円、工事前相談必須として補正。
- `shinjuku-school-lunch`: 新宿区「学校給食費無償化」。区立小中学校等の給食費無償化と副食費補助として補正。
- `shinjuku-seismic-diagnosis`: 新宿区「木造住宅への耐震化支援事業」。耐震診断員派遣、補強設計、耐震改修工事等、耐震改修工事最大300万円として補正。
- `shinjuku-senior-living-support`: 新宿区「高齢者見守りキーホルダー」。65歳以上の区民へ見守りキーホルダー1個・見守りシール10枚を無料配布する支援として補正。
- `shinjuku-telework-bonus`: 新宿区「育児・介護サポート企業応援奨励金」。テレワーク専用補助は現行公式制度として確認できないため、公式確認できる働き方支援の事業者向け奨励金へ補正。最大30万円。
- `shinjuku-vaccination-support`: 新宿区「高齢者用肺炎球菌予防接種」。旧インフルエンザ候補から、令和8年度ページで通年確認できる高齢者予防接種へ補正。

確認:

- 確認対象の公式URL 10件はすべて200で到達確認。新宿区公式の不足額給付PDF、心身障害者医療費助成制度、次世代育成転居助成、住宅支援一覧、住宅設備改修、学校給食費無償化、木造住宅への耐震化支援事業、高齢者見守りキーホルダー、育児・介護サポート企業応援奨励金、高齢者用肺炎球菌予防接種を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは192件から183件に減少。次の候補は杉並区、世田谷区、青梅市、千代田区、足立区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,282件から3,273件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,651件、東京都ローカル公式確認済みは216件、activeWithoutOfficialSourceは3,277件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,163 件生成。
- `npm run audit:deadlines`: build前の古い生成物では新規期限切れ2件の詳細HTML未生成で一度failures 2。build後に再実行して failures 0。期限候補は590件、activeWithDeadlineは419件、期限切れ171件。
- `npm run audit:links`: broken 0。4,161ファイルから155,346リンク抽出、8,950件監査。

## 2026-07-02 東京都Batch 57 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の杉並区6件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「出産・子育て応援交付金」「心身障害者医療費助成」「ファミリー世帯定住支援給付金」「次世代育成基金奨学金」「給付型奨学金」「テレワーク導入支援助成」を、杉並区公式ページ・公式PDFで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `suginami-birth-bonus`: 杉並区「妊婦のための支援給付」。妊娠時5万円、出産時は子どもの数に応じて5万円を支給する現行制度へ補正。
- `suginami-disability-medical`: 杉並区「東京都心身障害者（児）医療費助成」。マル障受給者証に基づく保険診療の自己負担分助成として補正。
- `suginami-migration-bonus`: 杉並区「転居費用助成」。区内転居する低所得世帯等への初期費用助成として補正。2人以上世帯20万円、単身15万円。
- `suginami-scholarship`: 杉並区「中学生海外留学事業（次世代育成基金活用）」。給付型奨学金ではなく基金活用の海外留学事業として確認し、成果報告会日を期限切れ判定に使用して通常一覧から除外。
- `suginami-scholarship-v2`: 杉並区「奨学資金貸付制度」。給付ではなく無利子貸付制度として補正。
- `suginami-telework-bonus`: 杉並区「中小企業等デジタル化推進事業助成金」。テレワーク専用助成ではなく、現行のデジタル化・業務効率化支援へ補正。上限50万円、申請期限2026年10月30日。

確認:

- 確認対象の公式URL 11件はすべて200で到達確認。杉並区公式の妊婦のための支援給付、東京都心身障害者（児）医療費助成、同所得制限、転居費用助成、住宅支援一覧、中学生海外留学事業、奨学金制度、区議会資料、中小企業等デジタル化推進事業助成金、同チラシPDF、産業振興センター案内を確認。
- 作業中に `shinjuku-telework-bonus` の古い抑止レコードと、新宿区Batch 56の一時重複ブロックが作業ツリーで検出されたため、正規のBatch 56レコードを残して重複を除去した。最終確認でslug重複0件。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは183件から177件に減少。次の候補は世田谷区、青梅市、千代田区、足立区、台東区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,273件から3,267件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,656件、東京都ローカル公式確認済みは221件、activeWithoutOfficialSourceは3,271件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,170 件生成。
- `npm run audit:deadlines`: 重複削除とbuild後に再実行して failures 0。期限候補は592件、activeWithDeadlineは420件、期限切れ172件。
- `npm run audit:links`: broken 0。4,168ファイルから155,783リンク抽出、8,968件監査。

## 2026-07-02 東京都Batch 58 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の世田谷区5件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・抑止した。生成データの「せたがや学び応援基金助成」「エネルギー費高騰対策給付金」「不妊治療費助成制度」「学校給食費助成制度」「テレワーク環境整備助成金」を、世田谷区公式ページ・公式PDFで確認できる現行制度名・支援内容・受付状況へ補正した。

追加:

- `setagaya-education-voucher`: 世田谷区「子どもの学び場運営スタートアップ事業補助金」。個人向け学用品10万円助成ではなく、子どもの自主学習を支援する団体向け活動費補助として補正。通常活動上限28.8万円、加算あり。
- `setagaya-energy-support`: 世田谷区「令和7年度住民税非課税世帯等への物価高騰生活支援給付金」。1世帯2万円、2026年6月30日申請受付終了として通常一覧から除外。
- `setagaya-infertility`: 世田谷区「特定不妊治療費助成制度（受付終了）」。保険適用分および特定不妊治療費（先進医療）への区独自助成なしを確認し、通常一覧から除外。妊活オンライン相談事業は無料相談支援として参照。
- `setagaya-school-lunch`: 世田谷区「区立小・中学校給食費無償化」。令和8年4月から給食費単価改定後も無償化継続、保護者手続き・納付不要として補正。
- `setagaya-telework-bonus`: 世田谷区「令和8年度中小事業者経営支援補助金」。テレワーク専用助成は現行公式制度として確認できないため、ITを活用した販路拡大支援上限20万円・生産性向上設備導入支援上限40万円の事業者向け補助へ補正。

確認:

- 確認対象の公式URL 12件はすべて200で到達確認。世田谷区公式の子どもの学びを支援する活動への補助、同募集要項PDF、子どもの学び場運営スタートアップ事業、物価高騰生活支援給付金、同広報紙、不妊治療費助成受付終了、妊活オンライン相談、区立小・中学校給食費無償化、令和8年4月給食費改定、中小事業者経営支援補助金、同募集要項PDF、主な事業者支援策を確認。
- slug重複検査: `no duplicates`。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 40`: 東京都の未照合raw slugは177件から172件に減少。次の候補は青梅市、千代田区、足立区、台東区、大田区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,267件から3,262件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,659件、東京都ローカル公式確認済みは224件、activeWithoutOfficialSourceは3,266件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,177 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は595件、activeWithDeadlineは421件、期限切れ174件。
- `npm run audit:links`: broken 0。4,175ファイルから156,154リンク抽出、8,988件監査。

## 2026-07-02 東京都Batch 59 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の青梅市1件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「青梅市 創業支援補助金」を、青梅市公式ページで確認できる「創業者応援事業補助金」へ補正した。

追加:

- `ome-startup-support`: 青梅市「創業者応援事業補助金」。市内で新たに事業を開始した方は20万円、創業を機に定住目的で市内へ移住し新たに事業開始した方は30万円。対象者は、青梅市内で令和5年4月1日以降に事業を開始した中小企業者・個人事業主等で、認定特定創業支援等事業による支援を受け証明書の交付を受けた方など。受付期限は2027年2月26日、予算額到達で終了。

確認:

- 確認対象の公式URL 2件はすべて200で到達確認。青梅市公式の創業者応援事業補助金、青梅市での創業支援案内を確認。
- slug重複検査: `no duplicates`。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 40`: 東京都の未照合raw slugは172件から171件に減少。次の候補は千代田区、足立区、台東区、大田区、中央区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,262件から3,261件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,660件、東京都ローカル公式確認済みは225件、activeWithoutOfficialSourceは3,265件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,179 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は596件、activeWithDeadlineは422件、期限切れ174件。
- `npm run audit:links`: broken 0。4,177ファイルから156,228リンク抽出、8,992件監査。

## 2026-07-02 東京都Batch 60 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の千代田区6件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「次世代育成手当」「誕生準備手当」「放課後子ども教室事業」「高齢者歯科健診助成事業」「介護用品支給事業」「テレワーク環境整備補助金」を、千代田区公式ページで確認できる現行制度名・支援内容へ補正した。

追加・補正:

- `chiyoda-childcare-subsidy`: 千代田区「中高生世代応援手当（区独自制度）」。旧「次世代育成手当」候補から、公式の現行制度へ補正。中学生・高校生世代の児童1人につき月額15,000円。
- `chiyoda-birth-bonus`: 既存の `chiyoda-birth-preparation-allowance` をraw候補slugへ統合。千代田区「誕生準備手当」は1妊娠につき45,000円で、旧生成データの最大45万円は誤りとして補正済み。
- `chiyoda-afterschool`: 千代田区「放課後子ども教室」。区立8小学校で、放課後から午後5時まで、宿題・自主学習・遊び・体験活動を無料で提供。
- `chiyoda-senior-dental`: 千代田区「区民歯科健診」。旧「高齢者歯科健診助成事業」候補から公式名称へ補正。19歳以上の区民が対象、65歳以上はオーラルフレイル予防検査も実施、2026年6月15日から2027年2月28日まで。
- `chiyoda-nursing-equipment`: 千代田区「紙おむつ支給事業」。旧「介護用品支給事業」候補から公式名称へ補正。月額10,600円以内は1割負担、生活保護世帯は無料、持ち込み不可の場合は現金助成月額上限13,200円。
- `chiyoda-telework-bonus`: 千代田区「中小企業販路拡大事業支援補助」。テレワーク専用補助は千代田区公式助成一覧で確認できないため、公式確認できる現行の事業者向け補助へ補正。補助率3分の2、通常上限10万円、加算時20万円。

あわせて、`npm run audit:links` で既存の鹿児島市 `kagoshima-city-scholarship-proxy-repayment-2026` の個別ページと申請要領PDFが404になっていることを検出した。制度自体は期限切れで通常一覧から除外済みだが、生成済み期限切れページのリンク監査対象になるため、`src/data/grants/verified-local-misc-2026.ts` の参照URLを鹿児島市公式の「補助金・助成金交付」一覧へ差し替え、sourceNoteに404化の経緯を追記した。

確認:

- 確認対象の千代田区公式URL 9件はすべて200で到達確認。
- slug重複検査: `no duplicates`。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 40`: 東京都の未照合raw slugは171件から165件に減少。次の候補は足立区、台東区、大田区、中央区、中野区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,261件から3,255件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,665件、東京都ローカル公式確認済みは230件、activeWithoutOfficialSourceは3,259件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,186 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は597件、activeWithDeadlineは423件、期限切れ174件。
- `npm run audit:links`: 初回は既存鹿児島市URL 2件の404でbroken 2。鹿児島市公式一覧へ参照URLを差し替え、再build後に再実行してbroken 0。4,184ファイルから156,596リンク抽出、9,006件監査。

## 2026-07-02 東京都Batch 61 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の足立区8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「子育て応援給付金」「認証保育所保育料助成制度」「高齢者見守り支援事業」「緊急小口資金・生活福祉資金貸付相談」「こころの健康支援事業」「介護用品給付事業」「給付型奨学金制度」「学校給食費助成制度」を、足立区公式ページおよび足立区社会福祉協議会公式ページで確認できる現行制度名・支援内容へ補正した。

追加・補正:

- `adachi-childcare-subsidy`: 足立区「物価高対応子育て応援手当」。対象児童1人につき2万円。2026年6月30日受付終了のため通常一覧から除外。
- `adachi-daycare-support`: 足立区「認証保育所保育料負担軽減（利用者助成）制度」。旧候補の月額最大4万円から、公式の補助額表に合わせて認証保育所等保育料補助金として月額最大8万円へ補正。
- `adachi-elderly-support`: 足立区「高齢者配食サービス支援（元気サポート弁当）」。旧「高齢者見守り支援事業」候補から、見守りを兼ねた公式配食支援へ補正。1日1食、定価から300円引き。
- `adachi-living-emergency`: 足立区社会福祉協議会「応急小口資金・生活福祉資金貸付」。給付金ではなく貸付・相談制度として明記し、公式に確認できない上限額表現は避けた。
- `adachi-mental-health`: 足立区「こころとからだの健康づくり課 精神保健相談」。旧候補のデイケア等一律無料表現から、公式確認できる心の健康相談・相談窓口へ補正。
- `adachi-nursing-equipment`: 足立区「紙おむつ給付・おむつ代助成」。旧「介護用品給付事業」候補から、公式確認できる紙おむつ支給・費用助成へ補正。費用助成は月額6,000円以内。
- `adachi-scholarship`: 足立区「給付型奨学金」。旧データの月額3万円ではなく、入学料・授業料・施設整備費の実費相当額（上限あり）へ補正。申請期間は2026年6月19日から2026年7月17日。
- `adachi-school-lunch`: 足立区「学校給食費無償化・完全弁当世帯等補助」。区立小中学校の給食費無償化と、完全弁当世帯への補助を確認。

確認:

- 確認対象の公式URL 19件はすべて200で到達確認。
- slug重複検査: `no duplicates`。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 40`: 東京都の未照合raw slugは165件から157件に減少。次の候補は台東区、大田区、中央区、中野区、町田市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,255件から3,247件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,672件、東京都ローカル公式確認済みは237件、activeWithoutOfficialSourceは3,251件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,198 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は599件、activeWithDeadlineは424件、期限切れ175件。
- `npm run audit:links`: broken 0。4,196ファイルから157,191リンク抽出、9,038件監査。

## 2026-07-02 東京都Batch 62 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の台東区8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「認可外保育施設利用助成金」「高齢者配食サービス事業」「介護用品支給事業」「奨学資金貸付制度」「木造住宅耐震診断助成制度」「中小企業経営支援補助金」「創業支援補助金」を、台東区公式ページ・公式PDFで確認できる現行制度名、受付状況、重複整理へ補正した。

追加・補正:

- `taito-childcare-subsidy`: 台東区「認証保育所等保育料助成制度」。旧「認可外保育施設利用助成金」候補を、認証保育所等保育料助成制度と認可外保育施設等の無償化案内に基づいて補正。月120時間以上の月極契約等が要件。
- `taito-elderly-support`: 台東区「はつらつサービス 配食サービス」。高齢者向け食事配達と手渡しによる安否確認を行うサービスとして補正。公式資料では助成後1食515円から780円程度、月40食まで。
- `taito-nursing-equipment`: 台東区「紙おむつの支給」。旧「介護用品支給事業」候補を、紙おむつ現物配送・購入補助券・おむつ代助成へ補正。介護度により月額3,000円から7,000円相当、おむつ代助成は月額上限5,000円。
- `taito-scholarship`: 台東区「高等学校等入学費用助成（令和8年度受付終了）」。現行の一般奨学資金貸付制度は確認できないため、公式確認できる入学費用助成として補正。2026年6月30日受付終了のため通常一覧から除外。
- `taito-seismic-diagnosis`: 台東区「耐震診断・補強設計・耐震改修工事等に対する助成」。木造住宅耐震診断は10分の10、上限20万円等。2026年12月11日申請期限予定。旧PDFリンクは作業時点で404化していたため参照URLから除外。
- `taito-senior-meal-service`: 台東区「高齢者配食サービス事業（重複候補）」。`taito-elderly-support` と同一内容の重複raw候補として統合し、通常一覧から除外。
- `taito-sme-support`: 台東区「中小企業融資制度・中小企業支援」。旧「中小企業経営支援補助金」候補を、公式確認できる中小企業支援、融資あっ旋、利子補助、信用保証料補助、経営相談へ補正。
- `taito-startup-support`: 台東区「開業支援資金（台開）」。直接給付型の創業補助金ではなく、創業予定者・開業後1年未満の方向け融資あっ旋として補正。あっ旋限度額1,000万円。

確認:

- 確認対象の公式URL 14件はすべて200。台東区公式の認証保育所等保育料助成、認可外保育施設等の無償化、高齢者サービス案内、高齢者福祉のしおりPDF、暮らしのしおりPDF、紙おむつの支給、高等学校等入学費用助成、保健福祉修学資金等貸付終了案内、耐震診断等助成、中小企業支援、融資制度、経営相談、開業支援資金、特定創業支援等事業を確認。
- verified全体の簡易重複検査では既存由来の `chofu-housing-reform` と `tokushima-child-medical` を検出。今回追加した台東区slugではないため本バッチでは未修正。別途、既存verified重複の整理対象。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 40`: 東京都の未照合raw slugは157件から149件に減少。次の候補は大田区、中央区、中野区、町田市、調布市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,247件から3,239件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,679件、東京都ローカル公式確認済みは244件、activeWithoutOfficialSourceは3,243件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,209 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は602件、activeWithDeadlineは426件、期限切れ176件。
- `npm run audit:links`: broken 0。4,207ファイルから157,781リンク抽出、9,064件監査。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、大田区6件（`ota-birth-bonus` / `ota-childcare-subsidy` / `ota-disability-medical` / `ota-elderly-support` / `ota-nursing-equipment` / `ota-scholarship`）を公式一次情報で確認する。
- 既存verified重複として検出された `chofu-housing-reform` / `tokushima-child-medical` は、全国raw照合とは別の品質改善タスクとして、公式URL・slug先勝ち挙動・通常一覧への影響を確認してから整理する。

## 2026-07-02 東京都Batch 63 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の大田区6件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「出産・子育て応援交付金」「子育て応援給付金」「心身障害者医療費助成制度」「高齢者見守り・生活支援事業」「介護用品支給事業」「奨学金制度」を、大田区公式ページで確認できる現行制度名・支援内容・受付状況へ補正した。

追加・補正:

- `ota-birth-bonus`: 大田区「妊婦のための支援給付（既存slugに統合）」。現行制度は妊娠時5万円、出産時は胎児の数×5万円の妊婦支援給付。既に `ota-pregnancy-support-benefit` で公式確認済みのため、重複slugは通常一覧から除外。
- `ota-childcare-subsidy`: 大田区「物価高対応子育て応援手当（受付終了）」。旧「子育て応援給付金・5万円」候補を、公式確認できる0歳から高校生年代までのこども1人2万円の手当へ補正。2026年6月30日受付終了。
- `ota-disability-medical`: 大田区「心身障害者（児）医療費の助成（マル障受給者証）」。身体障害者手帳1・2級、愛の手帳1・2度、精神障害者保健福祉手帳1級等を対象に、保険診療の自己負担分から一部負担金を差し引いた額を助成。
- `ota-elderly-support`: 大田区「地域のボランティアの食事サービス」。旧「高齢者見守り・生活支援事業」候補を、公式確認できる食事サービスへ補正。1食400円から700円、回数はボランティアにより異なる。
- `ota-nursing-equipment`: 大田区「紙おむつ等の支給」。要介護3から5、要介護1・2で医師が必要と認めた方、65歳以上で入院中かつ相当状態にある方等へ紙おむつ等を支給。毎月500点の範囲内で選択、持込不可病院ではおむつ代助成あり。
- `ota-scholarship`: 大田区「奨学金貸付制度（大学等・令和8年度募集終了）」。旧データの返済不要給付型・月額2万5千円表現を、公式の無利子貸付制度へ補正。国公立月額3万5,000円以内、私立月額4万4,000円以内。令和8年度募集は終了。

確認:

- 確認対象の公式URL 12件はすべて200。大田区公式の妊婦のための支援給付、妊婦面接、物価高対応子育て応援手当、心身障害者（児）医療費助成、障害のある方の医療一覧、地域のボランティアの食事サービス、紙おむつ等の支給、障がい者向け紙おむつ支給事業、奨学金貸付制度、令和8年度在学生募集、令和8年度大学等進学予定者募集、高校等進学準備給付型奨学金を確認。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは149件から143件に減少。次の候補は中央区、中野区、町田市、調布市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,239件から3,233件に減少。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,683件、東京都ローカル公式確認済みは248件、activeWithoutOfficialSourceは3,237件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,217 件生成。
- `npm run audit:deadlines`: failures 0。期限候補は605件、activeWithDeadlineは427件、期限切れ178件。
- `npm run audit:links`: 初回は既存の洲崎福祉財団URLのtimeoutでbroken 1。再実行では既存の恩納村公式サイト側のtimeout/503でbroken 27。再々実行で broken 0。4,215ファイルから158,225リンク抽出、9,082件監査。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、中央区6件（`chuo-bousai-equipment` / `chuo-childcare-subsidy` / `chuo-elderly-support` / `chuo-fertility-treatment` / `chuo-mental-health` / `chuo-nursing-home-reform`）を公式一次情報で確認する。
- 既存verified重複として検出済みの `chofu-housing-reform` / `tokushima-child-medical` は、全国raw照合とは別の品質改善タスクとして扱う。

## 2026-07-02 東京都Batch 64 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の中央区6件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「家庭防災用品購入助成制度」「子育て応援給付金」「高齢者見守り支援事業」「特定不妊治療費助成制度」「精神障害者医療費助成制度」「高齢者住宅改修給付事業」を、中央区公式ページと公式PDFで確認できる現行制度名・支援内容・受付状況へ補正した。

補足: 再開時に `kb search "助成金ナビ joseikin-navi-site"` を試したが、この環境では `kb` コマンドが見つからなかったため、旧隔離チャットへ依存せず、handoff・memory・リポジトリ・公式一次情報だけで継続した。

追加・補正:

- `chuo-bousai-equipment`: 中央区「防災用品のあっせん」。旧「購入費25%助成」候補は公式確認できないため、区内居住者・事業所向けの防災用品あっせん制度へ補正。
- `chuo-childcare-subsidy`: 中央区「子育て応援手当（令和7年度・受付終了）」。旧「子育て応援給付金・3万円」候補を、対象児童1人当たり2万円、2026年4月30日受付終了へ補正。
- `chuo-elderly-support`: 中央区「高齢者の見守り・食事サービス等」。緊急通報システム、見守りキーホルダー、食事サービス、高齢者地域見守り活動支援として補正。
- `chuo-fertility-treatment`: 中央区「特定不妊治療費医療費助成制度」。東京都助成後の先進医療費等について1年度上限10万円、令和8年4月1日以降開始治療の対象拡大予定を反映。
- `chuo-mental-health`: 中央区「心身障害者の医療費助成（マル障）・自立支援医療（精神通院）」。精神障害者保健福祉手帳1級を含むマル障と、精神通院の自立支援医療へ補正。
- `chuo-nursing-home-reform`: 中央区「住宅設備改善給付」。旧「最大20万円」候補を、予防給付20万円、階段昇降機は直線87万6千円・曲線185万4千円等の公式限度額へ補正。

確認:

- 確認対象の公式URL 16件はすべて200。中央区公式の防災用品あっせん、商品一覧、子育て応援手当、区のおしらせPDF、高齢者見守り、緊急通報システム、食事サービス、高齢者地域見守り活動支援、特定不妊治療費医療費助成制度、FAQ、マル障、自立支援医療、障害者医療一覧、住宅設備改善給付、介護保険サービス、介護保険住宅改修費支給を確認。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは143件から137件に減少。次の候補は中野区、町田市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,233件から3,227件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,688件、東京都ローカル公式確認済みは253件、activeWithoutOfficialSourceは3,231件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ 4,225 件生成、`/grant/[slug]` は1,868件。
- `npm run audit:deadlines`: 初回はbuild前の `out/grants/index.html` 未生成によりENOENT。build後の再実行で failures 0。期限候補は606件、activeWithDeadlineは427件、期限切れ179件。
- `npm run audit:links`: broken 0。4,223ファイルから158,673リンク抽出、9,106件監査。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、中野区8件（`nakano-childcare-subsidy` / `nakano-elderly-support` / `nakano-living-support` / `nakano-mental-health` / `nakano-nursing-equipment` / `nakano-nursing-home-reform` / `nakano-study-abroad` / `nakano-uij-turn`）を公式一次情報で確認する。
- 既存verified重複として検出済みの `chofu-housing-reform` / `tokushima-child-medical` は、全国raw照合とは別の品質改善タスクとして扱う。

## 2026-07-02 東京都Batch 65 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の中野区8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「子育て応援給付金」「高齢者住宅改修」「生活困窮支援」「メンタルヘルス相談・治療費助成」「介護用品」「介護者リフレッシュ」「青少年海外派遣」「UIJターン」を、中野区公式ページ・公式PDFで確認できる現行制度名、受付状況、重複整理へ補正した。

追加・補正:

- `nakano-childcare-subsidy`: 中野区「物価高対応子育て応援手当（申請受付終了）」。旧「子育て応援給付金・5万円」候補を、児童手当支給対象児童1人当たり2万円、申請受付終了へ補正。個別HTMLと旧リーフレットPDFは検索結果上は確認できるがcurlで404化していたため、200応答の児童手当一覧・区報PDF・児童手当ページを出典にした。
- `nakano-elderly-support`: 中野区「高齢者自立支援住宅改修等給付事業（重複候補）」。既存の `nakano-barrier-free` と同一制度のため、通常一覧では重複防止のため除外。
- `nakano-living-support`: 中野区「住居確保給付金（家賃補助）」。離職等により住居喪失またはそのおそれがある方への家賃補助として補正。生活相談窓口や決定後手続きも公式ページで確認。
- `nakano-mental-health`: 中野区「自立支援医療（精神通院）・こころの健康相談」。旧候補の治療費助成表現を、自立支援医療、心身障害者医療費助成、小児精神障害者入院医療費助成、こころの健康相談へ補正。
- `nakano-nursing-equipment`: 中野区「おむつサービス（紙おむつの支給・費用助成）」。紙おむつ等の支給は月60点、病院等で持ち込み不可の場合の費用助成は月6,000円を限度として補正。
- `nakano-nursing-home-reform`: 中野区「三療（はり・灸・マッサージ）サービス」。旧「介護者リフレッシュ事業」候補は現行公式制度として確認できないため、公式確認できる高齢者向け三療サービスへ補正。出張サービスは1回1,000円。
- `nakano-study-abroad`: 中野区「青少年海外派遣・留学支援事業（公式助成確認不可）」。ニュージーランド子ども交流等の実施は確認できるが、個人向け助成金としては公式確認できないため通常一覧から除外。
- `nakano-uij-turn`: 中野区「人材確保総合支援事業補助金」。旧「UIJターン就職支援補助金」候補を、区内中小企業等の採用・人材確保経費への補助として補正。補助上限30万円、2027年1月31日まで。

確認:

- 確認対象の公式URL 29件はすべて200。中野区公式の児童手当一覧、区報PDF、児童手当、住宅改修、住居確保給付金、自立支援医療、心身障害者医療費助成、こころの健康相談、小児精神障害者入院医療費助成、おむつサービス、三療サービス、ニュージーランド交流、子ども総合計画PDF、人材確保総合支援事業補助金等を確認。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは137件から129件に減少。次の候補は町田市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 20`: 全国未照合raw slugは3,227件から3,219件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,693件、東京都ローカル公式確認済みは258件、activeWithoutOfficialSourceは3,223件。
- `npm run lint`: エラー0、既知警告5件。
- `npm run build`: 成功。静的ページ4,242件生成、`/grant/[slug]` は1,875件。
- `npm run audit:deadlines`: failures 0。期限候補は610件、activeWithDeadlineは428件、期限切れ182件。
- `npm run audit:links`: 再ビルド後の再実行で4,240ファイルから159,298リンク抽出、9,150件監査。高松市の既存 `QA.pdf` 404は公式ページ上の現行 `qa.pdf` へ修正済み。残った `wakayama-migration-support` の `https://hataracoorde.com/ijushien/` timeout 1件は個別curlでHTTP 200を確認済み。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、町田市14件（`machida-birth-bonus` / `machida-block-wall-removal` / `machida-bousai-equipment` / `machida-childcare-subsidy` / `machida-disability-medical` / `machida-elderly-taxi` / `machida-energy-support` / `machida-health-checkup-subsidy` / `machida-nursing-home-reform` / `machida-school-lunch` / `machida-school-lunch-subsidy` / `machida-senior-support` / `machida-telework-bonus` / `machida-water-saving`）を公式一次情報で確認する。
- 既存verified重複として検出済みの `chofu-housing-reform` / `tokushima-child-medical` は、全国raw照合とは別の品質改善タスクとして扱う。

## 2026-07-02 東京都Batch 66 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の町田市14件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「出産・子育て応援給付金」「ブロック塀等撤去補助金」「家庭防災用品購入助成制度」「保育料軽減制度」「心身障害者医療費助成制度」「高齢者タクシー利用助成」「住宅用省エネ設備導入補助金」「人間ドック受診費助成」「高齢者自立支援住宅改修費助成事業」「学校給食費助成制度」「学校給食費補助制度」「高齢者見守り配食サービス」「テレワーク導入推進補助金」「雨水タンク設置補助金」を、町田市公式ページ・まちだ子育てサイト・公式PDFで確認できる現行制度名、金額、受付状況、または公式確認不可の抑止へ補正した。

高速化方針:

- 自治体単位でまとめて候補を閉じる。
- 採用した公式URLだけを対象にHTTP 200確認する。
- `git diff --check`、対象ESLint、raw gap、coverage、buildを優先する。
- 全体リンク監査と全体期限監査は節目で実施する。今回、期限監査はbuild前に期限切れ詳細ページ未生成でfailure 2、build後再実行は長時間化したため中断し、次の節目で再実行する。

追加・補正:

- `machida-birth-bonus`: 町田市「妊婦のための支援給付」。妊娠期5万円、出産後こども（胎児）の人数×5万円へ補正。
- `machida-block-wall-removal`: 町田市「ブロック塀等撤去助成」。上限30万円、2026年12月11日申請期限へ補正。
- `machida-bousai-equipment`: 町田市「防災対策促進事業補助金」。感震ブレーカー等、取付工事あり上限6万円、2026年9月1日受付開始へ補正。
- `machida-childcare-subsidy`: 町田市「保育料の無償化」。2025年9月から東京都内在住者の保育料無償、給食費・延長保育料等は対象外へ補正。
- `machida-disability-medical`: 町田市「心身障害者（児）医療費助成制度（マル障）」。対象者、所得制限、保険診療自己負担分の一部助成へ補正。
- `machida-elderly-taxi`: 高齢者タクシー利用助成は現行公式制度として確認不可。障がい者向けタクシー割引等とは対象が異なるため通常一覧から除外。
- `machida-energy-support`: 町田市「家庭用燃料電池システム（エネファーム）奨励金」。3万5000円、2026年9月30日締切へ補正。太陽光発電システム等設置補助は2016年終了。
- `machida-health-checkup-subsidy`: 町田市「人間ドック補助事業」。上限1万円、年度1回、2027年3月31日までへ補正。
- `machida-nursing-home-reform`: 町田市「介護保険を利用した住宅改修」。支給限度基準額20万円、事前申請必須へ補正。
- `machida-school-lunch`: 町田市「小中学校給食費完全無償化」。第3子以降限定ではなく完全無償化へ補正。
- `machida-school-lunch-subsidy`: 同一制度の互換slugとして小中学校給食費完全無償化へ補正。
- `machida-senior-support`: 町田市「自立支援・配食ネットワーク事業」。65歳以上のひとり暮らし・高齢者世帯かつ要介護1から5、配食と見守りへ補正。
- `machida-telework-bonus`: テレワーク導入推進補助金は現行公式制度として確認不可。通常一覧から除外。
- `machida-water-saving`: 町田市「雨水浸透設備設置補助金」。雨水タンク補助は公式に補助なしと確認し、雨水浸透設備の上限53万3000円へ補正。

確認:

- 採用した町田市・まちだ子育て公式URL 30件はすべてHTTP 200。
- `git diff --check -- SAFE_CONTINUATION_PLAN.md tasks/todo.md src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 30`: 東京都の未照合raw slugは129件から115件に減少。次の候補は調布市、東京都広域、東村山市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,219件から3,205件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,705件、東京都ローカル公式確認済みは270件、activeWithoutOfficialSourceは3,209件。
- `npm run build`: 成功。静的ページ4,258件生成、`/grant/[slug]` は1,889件。
- `npm run audit:deadlines`: build前の実行は追加した期限切れ抑止2件の詳細ページ未生成でfailure 2。build後再実行は長時間化したため中断。次の節目で再実行する。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、調布市1件（`chofu-education-support`）から公式一次情報で確認する。その後、東京都広域候補2件、東村山市、東大和市へ進む。
- 速度優先のため、次回も対象URL 200確認、ESLint、raw gap、coverage、必要時buildを基本にし、全体リンク・期限監査は数バッチ単位でまとめる。
- 既存verified重複として検出済みの `chofu-housing-reform` / `tokushima-child-medical` は、全国raw照合とは別の品質改善タスクとして扱う。

## 2026-07-02 東京都Batch 67 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の先頭3件（調布市1件、東京都広域2件）を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの「調布市 就学援助制度」「東京都介護職員宿舎借り上げ支援事業」「東京都ひとり親家庭住宅支援助成」を、公式一次情報で確認できる現行制度名・内容へ補正した。

追加・補正:

- `chofu-education-support`: 調布市「就学援助」。公立小・中学校等の児童生徒の保護者向けに、学用品費・校外活動費等を援助する制度として補正。新入学準備金等は令和7年度受付終了、給食費無償化は関連支援として確認。
- `tokyo-nursing-care`: 東京都「介護職員宿舎借り上げ支援事業」。1戸あたり月8万2000円基準、助成率7/8または1/2、最大20戸、令和8年度の東京都福祉保健財団実施事業として補正。
- `tokyo-single-parent-housing`: 東京都「ひとり親家庭等向け住まい支援」。旧生成データの月額最大4万円の一律家賃助成は公式確認不可のため、公社住宅の家賃20%割引、収入審査緩和、都営住宅のひとり親を含む子育て世帯向け募集、住宅支援資金貸付等として補正。

確認:

- 採用した公式URL 9件はすべてHTTP 200。調布市公式の就学援助、新入学準備金等、学校給食費無償化、東京都福祉局の介護職員宿舎借り上げ支援事業、東京都福祉保健財団の令和8年度ページ、東京都公式PDF、東京都ひとり親支援ナビの住まい・お金ページ、東京都住宅政策本部の都営住宅子育て支援を確認。
- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは115件から112件に減少。次の候補は東村山市10件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,205件から3,202件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,708件、東京都ローカル公式確認済みは273件、activeWithoutOfficialSourceは3,206件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、東村山市10件（`higashimurayama-afterschool` / `higashimurayama-birth-bonus` / `higashimurayama-childcare-subsidy` / `higashimurayama-energy-support` / `higashimurayama-fertility-treatment` / `higashimurayama-infertility` / `higashimurayama-living-support` / `higashimurayama-nursing-home-reform` / `higashimurayama-seismic-diagnosis` / `higashimurayama-telework-bonus`）を公式一次情報で確認する。
- 全体リンク・期限監査は数バッチ単位でまとめる。次の節目では `npm run audit:deadlines` をbuild後に再実行する。

## 2026-07-02 東京都Batch 68 追加ログ

ユーザー指摘を受け、速度優先の運用へ切り替えた。公式一次情報で確認できるものは即補正し、制度名・金額・期限を確認できない生成候補や助成金非該当の行政サービスは、誤掲載を避けるため通常一覧から除外する方針を明確化した。

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の東村山市10件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。東村山市公式サイト本体は現在の自動リンク監査環境でCloudFront 403を返すため、公式検索結果・公式例規・東京都公式ページを組み合わせて確認し、リンク監査に耐える公式例規URLを優先して出典にした。

追加・補正:

- `higashimurayama-afterschool`: 放課後子ども教室は居場所提供事業であり、現金給付・補助金ではないため助成金非該当として通常一覧から除外。
- `higashimurayama-birth-bonus`: 市独自の出産順位別祝い金は公式確認不可。東村山市国民健康保険条例で確認できる出産育児一時金（原則50万円）へ補正。
- `higashimurayama-childcare-subsidy`: 東村山市認可外保育施設等園児保護者補助金へ補正。月額1万2,000円、条件により2万8,000円加算を公式例規で確認。
- `higashimurayama-energy-support`: 省エネ家電買替え補助は現行市独自制度として確認不可。低所得世帯等エアコン新規設置等費用助成（上限10万円）へ補正し、予算上限到達による受付停止として通常一覧から除外。
- `higashimurayama-fertility-treatment`: 東村山市独自の不妊治療助成は確認不可。東京都不妊治療費助成事業（先進医療費10分の7、1回上限15万円）へ補正。
- `higashimurayama-infertility`: 上記東京都制度への重複候補として `higashimurayama-fertility-treatment` に統合し、通常一覧から除外。
- `higashimurayama-living-support`: 東村山市生活困窮者自立支援事業・住居確保給付金へ補正。生活困窮者自立相談、住居確保給付金、就労準備、家計改善等を公式例規で確認。
- `higashimurayama-nursing-home-reform`: 介護保険住宅改修費支給へ補正。支給対象限度額20万円、事前申請必須を公式検索結果と例規で確認。
- `higashimurayama-seismic-diagnosis`: 木造住宅耐震診断費の助成へ補正。診断費用3分の2、上限10万円、2026年12月11日申請期限を確認。
- `higashimurayama-telework-bonus`: 東村山市独自のテレワーク推進補助金は公式確認不可。東京都・東京しごと財団の広域制度は関連情報として示し、通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは112件から102件に減少。次の候補は東大和市8件、日野市、八王子市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,202件から3,192件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,718件、東京都ローカル公式確認済みは283件、activeWithoutOfficialSourceは3,196件。
- 採用した公式例規・東京都・東京しごと財団URL 12件は個別確認でHTTP 200。東村山市公式サイト本体はCloudFront 403のため、期限切れ/抑止slugの根拠としてのみ使用し、通常一覧に出る出典URLは公式例規等を優先。
- `npm run build`: 成功。静的ページ4,276件生成、`/grant/[slug]` は1,903件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、東大和市8件（`higashiyamato-afterschool` / `higashiyamato-birth-bonus` / `higashiyamato-childcare-subsidy` / `higashiyamato-energy-support` / `higashiyamato-infertility` / `higashiyamato-nursing-home-reform` / `higashiyamato-seismic-diagnosis` / `higashiyamato-telework-bonus`）を同じ高速方針で公式一次情報確認・補正する。
- 全体リンク・期限監査は数バッチ単位でまとめる。次の節目ではbuild後に `npm run audit:deadlines` を再実行する。

## 2026-07-02 東京都Batch 69 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の東大和市8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。公式ページが検索結果で本文取得できたため、東村山市より短時間で「現行制度」「広域制度への補正」「助成金非該当/公式確認不可」を切り分けた。

追加・補正:

- `higashiyamato-afterschool`: 放課後子ども教室は居場所提供事業であり、現金給付・補助金ではないため助成金非該当として通常一覧から除外。
- `higashiyamato-birth-bonus`: 市独自の出産順位別祝い金は公式確認不可。東大和市「妊婦のための支援給付」へ補正。妊娠時5万円、出産時は胎児数×5万円として整理。
- `higashiyamato-childcare-subsidy`: 令和8年度認可外保育施設利用者に対する補助制度へ補正。0〜2歳は月額保育料3分の1・上限2万1,000円に、第1子・多子世帯支援上限4万円等を確認。
- `higashiyamato-energy-support`: 市独自の省エネ家電買替え補助は公式確認不可。東大和市内登録販売店も対象となる東京都「東京ゼロエミポイント」へ補正。
- `higashiyamato-infertility`: 東大和市「不妊検査、不育症検査及び不妊治療費助成」へ補正。東京都助成後の自己負担に対し、不妊検査等上限1万円、不育症検査上限2万円、特定不妊治療（先進医療）上限3万円を確認。
- `higashiyamato-nursing-home-reform`: 介護保険住宅改修費支給へ補正。支給対象限度額20万円、工事前の事前申請必須を確認。
- `higashiyamato-seismic-diagnosis`: 木造住宅耐震診断・耐震改修・除却助成へ補正。耐震診断は費用3分の1・上限5万円、耐震改修は費用3分の1・上限30万円を確認。
- `higashiyamato-telework-bonus`: 東大和市独自のテレワーク推進補助金は公式確認不可。東京都・東京しごと財団の広域制度は関連情報として示し、通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは102件から94件に減少。次の候補は日野市2件、八王子市、板橋区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,192件から3,184件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,726件、東京都ローカル公式確認済みは291件、activeWithoutOfficialSourceは3,188件。
- 採用した東大和市公式・東京ゼロエミ・東京都たましま移住定住ポータル・東京都耐震ポータル・東京しごと財団URL 13件はすべてHTTP 200。
- `npm run build`: 成功。静的ページ4,284件生成、`/grant/[slug]` は1,911件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、日野市2件（`hino-education-support` / `hino-startup-support`）から公式一次情報で確認する。その後、八王子市・板橋区へ進む。
- 東京都未照合rawを短時間で減らすため、次回も自治体単位でまとめて処理し、公式確認不可候補は早めに抑止する。

## 2026-07-02 東京都Batch 70 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の日野市2件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。

追加・補正:

- `hino-education-support`: 日野市「就学援助」へ補正。生活保護、児童扶養手当受給、所得基準未満、家計急変等の対象要件、令和8年度当初認定受付2026年4月1日から5月31日、期間後の随時受付を確認。
- `hino-startup-support`: 旧候補名の創業スタートアップ支援補助金は現行市独自補助金として確認不可。日野市中小企業事業資金融資あっせん制度の普通創業資金・特定創業資金へ補正。融資限度額各1,000万円、返済期間84か月以内、利子補給・保証料補助を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは94件から92件に減少。次の候補は八王子市13件、板橋区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,184件から3,182件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,728件、東京都ローカル公式確認済みは293件、activeWithoutOfficialSourceは3,186件。
- 採用した日野市公式URL 6件はすべてHTTP 200。
- `npm run build`: 成功。静的ページ4,286件生成、`/grant/[slug]` は1,913件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、八王子市13件（`hachioji-birth-bonus` / `hachioji-block-wall-removal` / `hachioji-childcare-subsidy` / `hachioji-elderly-support` / `hachioji-elderly-taxi` / `hachioji-health-checkup-subsidy` / `hachioji-infertility` / `hachioji-nursing-equipment` / `hachioji-scholarship` / `hachioji-school-lunch-subsidy` / `hachioji-seismic-diagnosis` / `hachioji-senior-medical` / `hachioji-water-saving`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 71 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の八王子市13件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。旧生成データの制度名・金額・対象者ずれが多かったため、八王子市公式ページ、八王子市子育て応援サイト、公式PDF、東京都公式ページを確認して補正した。

追加・補正:

- `hachioji-birth-bonus`: 出産・子育て応援給付金を現行制度「妊婦のための支援給付」へ補正。妊娠時5万円相当、出生時等は胎児数×5万円相当。
- `hachioji-block-wall-removal`: 八王子市ブロック塀撤去等補助金へ補正。撤去・新設は3分の2、1mあたり3万円、上限30万円の低い額。診断は2分の1、上限5万円。
- `hachioji-childcare-subsidy`: 幼児教育・保育の無償化へ補正。令和7年9月から0〜2歳児クラス第1子を含む認可保育所等保育料無償化を確認。
- `hachioji-elderly-support`: 高齢者救急通報システムへ補正。非課税・生活保護は費用負担なし、その他は月額462円または484円を確認。
- `hachioji-elderly-taxi`: 高齢者一般向けタクシー助成は公式確認不可。心身障害者タクシー・自動車ガソリン費助成事業へ補正。300円券を月8枚、視覚障害者は月12枚等。
- `hachioji-health-checkup-subsidy`: 人間ドック割引へ補正。64歳まで8,000円引、65歳以上10,000円引、令和8年度受診期間は2026年6月1日から2027年1月31日。
- `hachioji-infertility`: 八王子市独自の従来型特定不妊治療助成は保険適用移行により終了。東京都特定不妊治療費（先進医療）助成事業への市公式案内として補正。
- `hachioji-nursing-equipment`: 在宅高齢者おむつの給付へ補正。要介護1以上、世帯全員非課税、月額上限4,400円、利用者2割負担。
- `hachioji-scholarship`: 高等学校等向け八王子市奨学金制度へ補正。月額11,000円、返済不要、令和8年度募集は2026年1月30日で受付終了のため通常一覧から除外。
- `hachioji-school-lunch-subsidy`: 公立小・中・義務教育学校給食費無償化へ補正。令和6年度第2学期から実施、就学援助資料でも給食費無償化のため支給なしと確認。
- `hachioji-seismic-diagnosis`: 木造住宅耐震診断補助制度へ補正。診断費用4分の3、上限15万円、耐震お助け隊派遣要件を確認。
- `hachioji-senior-medical`: 高齢者インフルエンザ予防接種費用助成は年度ごと制度。現時点で令和8年度個別案内未確認、令和7年度接種分は終了扱いとして通常一覧から除外。
- `hachioji-water-saving`: 雨水貯留槽設置補助事業へ補正。本体購入価格2分の1、上限25,000円、予算内受付を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは92件から79件に減少。次の候補は板橋区8件、品川区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,182件から3,169件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,739件、東京都ローカル公式確認済みは304件、activeWithoutOfficialSourceは3,173件。
- 八王子市Batch 71の13レコードから抽出した採用sourceUrls 35件はすべてHTTP 200。
- `npm run build`: 成功。静的ページ4,305件生成、`/grant/[slug]` は1,926件。

速度改善:

- 公式確認の精度を落とさず速度を上げるため、次バッチからは自治体単位で「raw gap抽出 → 公式候補URL一括収集 → sourceUrls一括HTTP確認 → 期限切れ/制度名変更/自治体外制度の分類 → 最後にレコード化」の順で進める。
- 手入力でURLを並べる検査は誤差が出やすいため、追加済みレコードから実sourceUrlsを抽出して検査する。これにより壊れた出典URLの見落としを減らし、確認時間を短縮する。
- `scripts/check-grant-source-urls.mjs` を追加。`--slug` または `--prefix` で対象grantを指定すると、実データ上の `officialUrl` / `sourceUrls` を抽出し、並列HTTP確認する。八王子市Batch 71の35URLは約7秒でfailures 0を確認。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、板橋区8件（`itabashi-afterschool` / `itabashi-childcare-subsidy` / `itabashi-disability-medical` / `itabashi-migration-bonus` / `itabashi-nursing-equipment` / `itabashi-seismic-diagnosis` / `itabashi-startup-support` / `itabashi-women-startup`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 72 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の板橋区8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。速度改善後の手順として、公式候補URLを自治体単位で確認し、追加後は `scripts/check-grant-source-urls.mjs` で実データ上のsourceUrlsを一括検査した。

追加・補正:

- `itabashi-childcare-subsidy`: 旧候補名「子育て応援給付金」を現行制度「妊婦のための支援給付」へ補正。妊婦1人5万円、胎児・子ども1人につき5万円、申請期限2年を確認。
- `itabashi-disability-medical`: 心身障害者医療費助成（マル障）へ補正。対象者、所得制限、住民税非課税者の一部負担なし、課税者の1割負担・月額上限を確認。
- `itabashi-afterschool`: 放課後子ども教室候補を公式制度名「あいキッズ」へ補正。さんさんタイム無料、きらきらタイム利用料と減額・免除制度を確認。
- `itabashi-women-startup`: 女性起業支援助成金は公式助成金として確認不可。女性の起業入門セミナーや創業支援融資は確認できるため、出典不明助成金として通常一覧から除外。
- `itabashi-nursing-equipment`: 高齢者紙おむつ等の支給へ補正。要介護1以上、現物支給、現金助成月額7,000円上限を確認。
- `itabashi-migration-bonus`: ファミリー世帯定住支援候補を「多世代住み替え支援事業」へ補正。対象経費合算額、上限20万円、予算上限到達で終了を確認。
- `itabashi-seismic-diagnosis`: 木造住宅の耐震化促進事業へ補正。令和8年度受付締切2026年12月4日、耐震診断費用全額助成・上限25万円を確認。
- `itabashi-startup-support`: 創業支援補助金候補を「創業支援融資」へ補正。融資あっせん上限2,000万円、利子補給8割・42か月まで、創業相談・経営診断要件を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `scripts/check-grant-source-urls.mjs` による板橋区Batch 72の実sourceUrls 20件はすべてHTTP 200。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは79件から71件に減少。次の候補は品川区9件、武蔵野市。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,169件から3,161件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,746件、東京都ローカル公式確認済みは311件、activeWithoutOfficialSourceは3,165件。
- `npm run build`: 成功。静的ページ4,315件生成、`/grant/[slug]` は1,934件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、品川区9件（`shinagawa-birth-bonus` / `shinagawa-childcare-subsidy` / `shinagawa-dental-checkup` / `shinagawa-elderly-support` / `shinagawa-nursing-equipment` / `shinagawa-scholarship` / `shinagawa-senior-dental` / `shinagawa-sme-support` / `shinagawa-study-support`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 72 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の板橋区8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データは板橋区トップページのみを出典にしていたため、板橋区公式ページ・公式PDF・公式広報ページで制度名、対象者、支援内容、金額、期限、現行性を確認した。

追加・補正:

- `itabashi-childcare-subsidy`: 子育て応援給付金を現行制度「妊婦のための支援給付」へ補正。妊婦1人5万円、胎児・子ども1人につき5万円。
- `itabashi-disability-medical`: 心身障害者医療費助成（マル障）へ補正。全額助成表現を、非課税者一部負担なし・課税者1割負担と月額上限へ修正。
- `itabashi-afterschool`: 放課後子ども教室事業を公式制度名「あいキッズ」へ補正。さんさんタイム無料、きらきらタイム減額・免除あり。
- `itabashi-women-startup`: 女性起業支援助成金は公式助成金として確認不可。創業支援融資・女性の起業入門セミナー等の関連公式情報を根拠に通常一覧から除外。
- `itabashi-nursing-equipment`: 介護用品支給事業を高齢者紙おむつ等の支給へ補正。要介護1以上、現金助成は月額7,000円まで。
- `itabashi-migration-bonus`: ファミリー世帯定住支援助成金を多世代住み替え支援事業へ補正。対象経費の合算額、上限20万円。
- `itabashi-seismic-diagnosis`: 木造住宅の耐震化促進事業へ補正。耐震診断費用は全額助成、上限25万円、令和8年度承認申請締切は2026年12月4日。
- `itabashi-startup-support`: 創業支援補助金を創業支援融資へ補正。融資あっせん上限2,000万円、利子補給8割を42か月まで。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug itabashi-childcare-subsidy,itabashi-disability-medical,itabashi-afterschool,itabashi-women-startup,itabashi-nursing-equipment,itabashi-migration-bonus,itabashi-seismic-diagnosis,itabashi-startup-support --timeout-ms 30000 --concurrency 6`: 採用sourceUrls 20件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは79件から71件に減少。次の候補は品川区9件、武蔵野市8件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,169件から3,161件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,746件、東京都ローカル公式確認済みは311件、activeWithoutOfficialSourceは3,165件。

次回再開位置:

- `tasks/todo.md` の次回候補を品川区9件へ進める。対象は `shinagawa-birth-bonus` / `shinagawa-childcare-subsidy` / `shinagawa-dental-checkup` / `shinagawa-elderly-support` / `shinagawa-nursing-equipment` / `shinagawa-scholarship` / `shinagawa-senior-dental` / `shinagawa-sme-support` / `shinagawa-study-support`。

## 2026-07-02 東京都Batch 73 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の品川区9件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。旧生成データの制度名・金額・対象者にずれがあったため、品川区公式ページ、品川区中小企業支援サイト、公式PDF、公式広報ページを確認し、現行制度・受付終了制度・公式確認可能な代替制度へ整理した。

追加・補正:

- `shinagawa-birth-bonus`: 出産・子育て応援給付金候補を現行制度「妊婦のための支援給付事業」へ補正。妊娠時5万円、出産後はお子さん1人あたり5万円。
- `shinagawa-childcare-subsidy`: 令和8年度認可外保育施設保育料助成制度へ補正。施設区分・年齢・課税状況等により月額上限8万円。
- `shinagawa-dental-checkup`: 成人歯科健康診査へ補正。対象年齢区民の無料歯科健診、実施期間は6月から翌年3月末。
- `shinagawa-elderly-support`: 高齢者救急代理通報システムへ補正。65歳以上のひとり暮らし・高齢者のみ世帯等を対象に、月額利用料無料。
- `shinagawa-nursing-equipment`: 高齢者介護用品支給候補は公式上の内容確認が弱いため、公式確認できる「紙おむつなどの支給」へ補正。身体障害者手帳・愛の手帳所持者で常時失禁のある方等に毎月配送。
- `shinagawa-scholarship`: 給付型大学奨学金へ補正。年額54万円、令和7年度募集は2025年9月30日で終了のため通常一覧から除外。
- `shinagawa-senior-dental`: 令和8年度高齢者歯科健診へ補正。対象者に無料、実施期間は2026年6月から2027年1月31日。
- `shinagawa-sme-support`: 経営改善支援事業助成金へ補正。国の経営改善計画策定支援等への上乗せ、最大100万円、2027年2月26日まで。
- `shinagawa-study-support`: フリースクール等利用料助成金へ補正。月額上限2万円、令和7年度受付は2026年3月31日で終了のため通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug shinagawa-birth-bonus,shinagawa-childcare-subsidy,shinagawa-dental-checkup,shinagawa-elderly-support,shinagawa-nursing-equipment,shinagawa-scholarship,shinagawa-senior-dental,shinagawa-sme-support,shinagawa-study-support --concurrency 8 --timeout-ms 60000`: 採用sourceUrls 23件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは71件から62件に減少。次の候補は武蔵野市8件、文京区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,161件から3,152件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,753件、東京都ローカル公式確認済みは318件、activeWithoutOfficialSourceは3,156件。
- `npm run build`: 成功。静的ページ4,328件生成、`/grant/[slug]` は1,943件。

速度改善メモ:

- 全国の公開中データに対する公式確認済みは1,753 / 4,909件で約35.7%。raw候補slug基準では1,946 / 4,375件で約44.5%。東京都は公式確認済み318件・未照合62件で約83.7%まで進捗。
- 以後は速度優先プロトコルとして、同一自治体の公式候補URLを一括収集し、必須確認項目を制度名・対象・金額/支援内容・期限/年度・公式URLに絞る。補助PDFの深掘りは必須項目の裏取りが必要な場合だけ行う。
- 小バッチごとの手作業URL確認は避け、追加済みレコードから `officialUrl` / `sourceUrls` を抽出する `scripts/check-grant-source-urls.mjs` を使う。`npm run build` は節目でまとめて実行する。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、武蔵野市8件（`musashino-afterschool-care` / `musashino-appliance-subsidy` / `musashino-home-care` / `musashino-maternity-dental` / `musashino-nursery-support` / `musashino-school-lunch` / `musashino-vaccination-subsidy` / `musashino-youth-employment`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 74 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の武蔵野市8件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。速度優先プロトコルとして、同一自治体の公式候補URLを先にまとめて確認し、追加後は実データ上の `officialUrl` / `sourceUrls` を並列HTTP検証した。

追加・補正:

- `musashino-afterschool-care`: 放課後児童クラブ利用料助成候補を、公式に確認できる「学童クラブ育成料等減免」へ補正。育成料は1人目月額8,000円、2人目から6,000円、生活保護世帯・住民税非課税世帯等の減免を確認。
- `musashino-appliance-subsidy`: 省エネ家電買替補助金は現行の市独自家電補助として確認不可。公式に確認できる「家庭向け再エネ電気切替協力金」へ補正。再エネ100%電気契約への切替で1万円、供給開始日等から6カ月以内。
- `musashino-home-care`: 在宅介護者支援手当候補を「家族介護慰労金支給」へ補正。要介護4または5等の要件、年額10万円を確認。
- `musashino-maternity-dental`: 妊婦歯科健康診査へ補正。妊婦の市民が対象、妊娠中1回、受診票と母子健康手帳で市内指定医療機関を受診。
- `musashino-nursery-support`: 令和8年度認可外保育施設入所児童保育助成金へ補正。東京都認証保育所・企業主導型保育事業、月120時間以上、月額上限8万円等を確認。
- `musashino-school-lunch`: 第3子以降補助候補を学校給食費無償化へ補正。令和6年度から家庭からの集金なし、令和8年度参考単価を確認。
- `musashino-vaccination-subsidy`: 高齢者予防接種費用助成候補を高齢者肺炎球菌予防接種へ補正。令和8年4月から20価肺炎球菌ワクチン、自己負担5,000円、生活保護受給者の免除を確認。
- `musashino-youth-employment`: 若者キャリアアップ支援金は市独自の現金支援として確認不可。就職支援・労働相談ページ、ハローワーク、東京しごとセンター等の関連情報を確認し、通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug musashino-afterschool-care,musashino-appliance-subsidy,musashino-home-care,musashino-maternity-dental,musashino-nursery-support,musashino-school-lunch,musashino-vaccination-subsidy,musashino-youth-employment --concurrency 8 --timeout-ms 60000`: 採用sourceUrls 22件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは62件から54件に減少。次の候補は文京区6件、豊島区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,152件から3,144件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,760件、東京都ローカル公式確認済みは325件、activeWithoutOfficialSourceは3,148件。
- `npm run build`: 成功。静的ページ4,341件生成、`/grant/[slug]` は1,951件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、文京区6件（`bunkyo-childcare-subsidy` / `bunkyo-elderly-support` / `bunkyo-learning-support` / `bunkyo-nursing-equipment` / `bunkyo-scholarship` / `bunkyo-sme-support`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 75 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の文京区6件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データは文京区トップページを出典にした概算・推測が多かったため、文京区公式ページ、公式PDF、関連制度ページで現行制度・期限切れ制度・補正先を確認した。

追加・補正:

- `bunkyo-childcare-subsidy`: 認可外保育施設利用助成金候補を、令和8年度「認可外保育施設利用事業補助制度」へ補正。保育の必要性認定、補助額、年度1回申請、2027年3月15日申請期限を確認。
- `bunkyo-elderly-support`: 高齢者見守り・緊急通報候補を「救急通報システム」へ補正。対象者、主治医確認書、24時間相談・月1回程度の健康確認、月350円、住民税非課税世帯免除を確認。
- `bunkyo-learning-support`: 無料学習支援事業候補を「中学生学校外学習費用の助成（塾代助成）」へ補正。中2・中3、就学援助対象世帯、年額上限10万円、令和8年度申請期間を確認。
- `bunkyo-nursing-equipment`: 介護用品支給候補を「高齢者紙おむつ現物支給事業」へ補正。原則要介護3以上、紙おむつ45点まで月1回配送、月額500円、生活保護世帯免除を確認。
- `bunkyo-scholarship`: 奨学資金貸付制度候補を「文京区奨学資金（高等学校等）の給付」へ補正。国公立6万円・私立10万円、2026年3月31日締切で受付終了のため通常一覧から除外。
- `bunkyo-sme-support`: 汎用的な中小企業経営支援助成金候補を「持続可能性向上支援補助金（生産性向上設備）」へ補正。通常枠50万円、賃上げ枠・ISO14001取得者は上限100万円、先端設備等導入計画認定、令和8年度受付状況を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug bunkyo-childcare-subsidy,bunkyo-elderly-support,bunkyo-learning-support,bunkyo-nursing-equipment,bunkyo-scholarship,bunkyo-sme-support --concurrency 8 --timeout-ms 60000`: 採用sourceUrls 18件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは54件から48件に減少。次の候補は豊島区5件、北区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,144件から3,138件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,765件、東京都ローカル公式確認済みは330件、activeWithoutOfficialSourceは3,142件。
- `npm run build`: 成功。静的ページ4,350件生成、`/grant/[slug]` は1,957件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、豊島区5件（`toshima-afterschool` / `toshima-energy-support` / `toshima-infertility` / `toshima-nursing-equipment` / `toshima-seismic-diagnosis`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 76 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の豊島区5件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。旧生成データは制度名・支給額・現行性にずれがあったため、豊島区公式ページ、公式PDF、東京都関連ページで現行制度、受付終了制度、区独自助成終了を整理した。

追加・補正:

- `toshima-afterschool`: 放課後子ども教室運営事業候補を「子どもスキップ（一般利用・放課後子ども教室）」へ補正。区内在住または区立小学校在学児童、一般利用無料、届出制を確認。
- `toshima-energy-support`: 生活応援特別給付金候補を「令和7年度物価高騰対策支援給付金」へ補正。1世帯1万円、2026年3月13日受付終了のため通常一覧から除外。
- `toshima-infertility`: 不妊・不育症治療費助成候補は、豊島区特定不妊治療費助成が終了済みであることを公式確認。現行情報は東京都事業案内のため通常一覧から除外。
- `toshima-nursing-equipment`: 高齢者紙おむつ等支給事業を公式制度「高齢者紙おむつ等支給」へ補正。令和7年9月分から月80点・8,000円相当へ上限引上げを確認。
- `toshima-seismic-diagnosis`: 木造住宅耐震診断助成制度を「木造住宅の耐震診断助成事業」へ補正。対象建築物、対象者、東京都登録診断事務所、上限15万円を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug toshima-afterschool,toshima-energy-support,toshima-infertility,toshima-nursing-equipment,toshima-seismic-diagnosis --concurrency 8 --timeout-ms 60000`: 採用sourceUrls 15件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは48件から43件に減少。次の候補は北区7件、墨田区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,138件から3,133件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,768件、東京都ローカル公式確認済みは333件、activeWithoutOfficialSourceは3,137件。
- `npm run build`: 成功。静的ページ4,356件生成、`/grant/[slug]` は1,961件。

速度改善メモ:

- 全国の公開中データに対する公式確認済みは1,768 / 4,905件で約36.0%。raw候補slug基準では1,965 / 4,375件で約44.9%。東京都は公式確認済み333件・未照合43件で約88.6%まで進捗。
- 遅延の主因は、全国の未検証raw slugがまだ3,133件残っていることと、各制度の公式ページで制度名・対象・金額・期限・現行性を1件ずつ確認していること。精度を落とさず速度を上げるため、以後は自治体単位で5〜10件をまとめ、公式候補URL一括収集、追加後のsourceUrls並列HTTP確認、coverage/buildの節目実行を徹底する。
- 期限切れ・終了済み・公式確認不可の制度は、推測で掲載せず、deadlineDate付きの抑止レコードとして残す。これによりraw gapを閉じつつ、利用者向け一覧には古い制度を出さない。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、北区7件（`kita-birth-bonus` / `kita-childcare-subsidy` / `kita-education-support` / `kita-elderly-support` / `kita-nursing-equipment` / `kita-scholarship` / `kita-senior-mimamori`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 77 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の北区7件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。既存verifiedに近い制度がある候補は重複抑止し、受付終了制度は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `kita-birth-bonus`: 出産・子育て応援事業候補は、既存verifiedの `kita-pregnancy-support-benefit` と同じ「北区妊婦のための支援給付」へ統合。妊婦1人5万円、胎児1人5万円を確認し、重複掲載を抑止。
- `kita-childcare-subsidy`: 子育て応援給付金候補を「物価高対応子育て応援手当」へ補正。児童1人2万円、2026年5月12日受付終了のため通常一覧から除外。
- `kita-education-support`: 北区就学援助へ補正。対象者、認定基準額、支給費目、令和8年度4月認定申請期限2026年4月30日、期限後随時申請を確認。
- `kita-elderly-support`: 抽象的な高齢者自立生活支援候補を「高齢者スマートフォン購入費補助事業」へ補正。令和8年度実施、上限3万円、2027年3月31日まで・予算到達終了を確認。
- `kita-nursing-equipment`: 介護用品支給事業候補を「要介護高齢者等紙おむつ支給・おむつ代金助成」へ補正。支給対象要件、対象外要件、おむつ代金助成月額6,000円上限を確認。
- `kita-scholarship`: 奨学資金貸付制度候補を「奨学金返済支援給付事業（令和8年度募集）」へ補正。5年間最大100万円、Web申請2026年7月31日、添付書類2026年8月31日必着を確認。
- `kita-senior-mimamori`: 高齢者見守り・安心生活支援候補を「高齢者見守り・緊急通報システム」へ補正。対象者、24時間対応、月1回のお伺い電話、令和8年度費用、非課税・生活保護世帯無料を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug kita-birth-bonus,kita-childcare-subsidy,kita-education-support,kita-elderly-support,kita-nursing-equipment,kita-scholarship,kita-senior-mimamori --concurrency 8 --timeout-ms 60000`: 採用sourceUrls 21件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 25`: 東京都の未照合raw slugは43件から36件に減少。次の候補は墨田区9件、目黒区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,133件から3,126件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,773件、東京都ローカル公式確認済みは338件、activeWithoutOfficialSourceは3,130件。
- `npm run build`: 成功。静的ページ4,365件生成、`/grant/[slug]` は1,968件。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、墨田区9件（`sumida-birth-bonus` / `sumida-childcare-subsidy` / `sumida-elderly-support` / `sumida-housing-eco-reform` / `sumida-infertility` / `sumida-nursing-equipment` / `sumida-scholarship` / `sumida-seismic-diagnosis` / `sumida-sme-support`）を公式一次情報で確認する。

## 2026-07-02 東京都Batch 78 追加ログ

新棚卸し `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の墨田区9件を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。生成データの制度名・金額・現行性をそのまま採用せず、墨田区公式ページで確認できる現行制度、既存レコード重複、東京都制度案内、公式確認不可の境界を整理した。

追加・補正:

- `sumida-birth-bonus`: 出産・子育て応援給付金候補は、既存verifiedの `sumida-pregnancy-support-benefit` と同じ「妊婦のための支援給付」へ統合。妊娠時5万円、出産後子ども1人あたり5万円を確認し、重複掲載を抑止。
- `sumida-childcare-subsidy`: 認可外保育施設利用助成候補を「令和8年度認証保育所保育料負担軽減助成金」へ補正。対象者、月額上限8万円、令和8年度からの代理受領方式を確認。
- `sumida-elderly-support`: 高齢者見守りネットワーク候補を「高齢者救急通報システム」へ補正。月額1,000円、緊急通報・健康相談等を確認。
- `sumida-housing-eco-reform`: 住宅リフォーム助成候補を「地球温暖化防止設備導入助成制度（令和8年度）」へ補正。工事着手前申請、設備区分ごとの上限、令和8年度変更点を確認。
- `sumida-infertility`: 不妊治療費助成候補は、墨田区独自助成ではなく東京都制度案内として確認。区独自の金額・受付を確認できないため通常一覧から除外。
- `sumida-nursing-equipment`: 介護用品支給候補を「高齢者の紙おむつ等支給」へ補正。対象者、月7,000ポイント、自己負担区分、オンライン申請案内を確認。
- `sumida-scholarship`: 奨学資金制度候補を「墨田育英会 奨学金・入学準備金貸付」へ補正。月額貸付額、入学準備金、返還条件、令和9年度進学予定者の受付期間を確認。
- `sumida-seismic-diagnosis`: 木造住宅耐震診断助成候補を「耐震診断助成事業」へ補正。耐震診断費用の一部助成、非木造建築物最大300万円、事前相談を確認。
- `sumida-sme-support`: 中小企業経営革新支援補助金候補を「ものづくりプロモーション推進補助金」へ補正。最大150万円、30万円上限区分、事前相談を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug sumida-birth-bonus,sumida-childcare-subsidy,sumida-elderly-support,sumida-housing-eco-reform,sumida-infertility,sumida-nursing-equipment,sumida-scholarship,sumida-seismic-diagnosis,sumida-sme-support --concurrency 8 --timeout-ms 60000`: 採用sourceUrls 21件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 35`: 東京都の未照合raw slugは36件から27件に減少。次の候補は目黒区10件、立川市9件、練馬区。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,126件から3,117件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,780件、東京都ローカル公式確認済みは345件、activeWithoutOfficialSourceは3,121件。
- `npm run build`: 成功。静的ページ4,376件生成、`/grant/[slug]` は1,977件。

速度改善方針:

- これまでの遅延は、制度単位で公式確認・URL検証・coverage・buildを細かく回しすぎたことと、全国未照合raw slugが3,000件超残っていることが主因。
- 精度を落とさず速度を上げるため、次回からは目黒区10件＋立川市9件のように20件前後を同一サイクルで処理する。公式一次情報で確認できた事実だけを掲載し、曖昧・終了済み・区独自でない制度は抑止レコードにする。
- URL疎通は `scripts/check-grant-source-urls.mjs` の並列確認を継続する。coverage/buildは小粒度ではなく、20〜50件単位の節目でまとめて実行する。

次回再開位置:

- `tasks/todo.md` の次回候補どおり、東京都の残27件から目黒区10件と立川市9件を同一バッチで公式一次情報確認する。

## 2026-07-02 東京都Batch 79 追加ログ

速度改善バッチとして、東京都の残27件から目黒区10件と立川市9件を同一サイクルで公式確認し、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。検索で拾った自治体CMSの旧パスはURL検証で404が出たため、現行の公式URLに差し替えたうえで、到達可能な一次情報だけをsourceUrlsに残した。

追加・補正:

- `meguro-birth-bonus`: 出産・子育て応援給付金候補は、既存verifiedの `meguro-pregnancy-support-benefit` と同じ「妊婦のための支援給付」へ統合。妊娠時5万円、出産後子ども1人あたり5万円を確認し、重複掲載を抑止。
- `meguro-childcare-subsidy`: 認可外保育施設利用助成候補を「令和8年度認可外保育施設保育料助成制度」へ補正。対象施設、対象者、月160時間以上利用、月額上限8万円等を確認。
- `meguro-elderly-support`: 高齢者見守り候補を「高齢者非常通報システム」へ補正。非常通報、申請書、月額286円・生活リズムセンサー併用491円を確認。
- `meguro-housing-reform`: 住宅リフォーム資金助成を公式上限10万円へ補正。区内業者要件、工事費20万円以上、工事着手前申請を確認。
- `meguro-infertility`: 特定不妊治療費（先進医療）助成へ補正。東京都助成承認後の区上乗せ、1回最大5万円、承認決定日から1年以内の申請を確認。
- `meguro-newlywed-rent`: 新婚世帯家賃助成は公式同名制度を確認できないため、現行の「ファミリー世帯家賃助成」へ補正。月額2万円、2026年7月10日締切を確認。
- `meguro-nursing-equipment`: 紙おむつ等の支給・おむつ代の支給へ補正。紙おむつ等月額6,600円以内、入院中のおむつ代月額6,000円上限を確認。
- `meguro-scholarship`: 目黒区奨学金制度は確認できたが、令和8年4月進学者の受付は終了。入学資金30万円以内、無利子、受付終了のため通常一覧から除外。
- `meguro-senior-support`: 高齢者世帯等居住継続家賃助成へ補正。月額家賃20%、世帯人数別上限、最長6年間、2026年7月10日締切を確認。
- `meguro-sme-support`: 中小企業省力化投資補助金へ補正。対象者、申請書類、最大40万円を確認。
- `tachikawa-afterschool-care`: 学童保育所保育料等の減免へ補正。令和8年度関連書式、入所案内、減免申請を確認。
- `tachikawa-compost-subsidy`: 生ごみ処理機器等購入費補助金は令和8年度受付終了。処理機器上限25,000円、たい肥化容器上限3,000円を確認し通常一覧から除外。
- `tachikawa-dental-checkup`: 成人歯科健康診査へ補正。20歳以上対象、年度内1回、無料を確認。
- `tachikawa-eco-reform`: 既存住宅断熱改修費補助金へ補正。対象工事費2分の1、上限5万円、2027年2月28日までの工事完了要件を確認。
- `tachikawa-flood-prevention`: 雨水浸透施設設置助成へ補正。標準工事単価、工事前申請、指定下水道工事店要件を確認。
- `tachikawa-home-care`: 家族介護慰労金支給事業へ補正。重度要介護高齢者等の家族介護、年額10万円を確認。
- `tachikawa-nursery-support`: 認証保育所等利用者負担軽減補助金へ補正。上限月2万円から4万円、令和8年度案内を確認。
- `tachikawa-school-aid`: 就学援助制度へ補正。対象者、所得基準、支給費目、申請方法を確認。
- `tachikawa-youth-employment`: 若者就労定着支援金は公式給付として確認不可。たちかわ若者サポートステーション出張相談は確認できるが、支援金ではないため通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug meguro-birth-bonus,meguro-childcare-subsidy,meguro-elderly-support,meguro-housing-reform,meguro-infertility,meguro-newlywed-rent,meguro-nursing-equipment,meguro-scholarship,meguro-senior-support,meguro-sme-support,tachikawa-afterschool-care,tachikawa-compost-subsidy,tachikawa-dental-checkup,tachikawa-eco-reform,tachikawa-flood-prevention,tachikawa-home-care,tachikawa-nursery-support,tachikawa-school-aid,tachikawa-youth-employment --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 32件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは27件から8件に減少。残りは練馬区8件のみ。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,117件から3,098件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,795件、東京都ローカル公式確認済みは360件、activeWithoutOfficialSourceは3,102件。
- `npm run build`: 成功。静的ページ4,402件生成、`/grant/[slug]` は1,996件。

速度改善結果:

- 19件を1サイクルで処理でき、前回までの5〜9件単位より進行速度は改善した。
- 重い `npm run build` は今回も約1分半以上かかったため、今後も20〜50件単位の節目でまとめて実行する。
- URL検証は有効。検索で拾った旧CMSパスの404を早期に検出し、現行公式URLへ差し替えられた。

次回再開位置:

- 東京都raw gapは残り練馬区8件（`nerima-birth-bonus` / `nerima-childcare-subsidy` / `nerima-education-scholarship` / `nerima-energy-support` / `nerima-housing-eco` / `nerima-nursing-home-reform` / `nerima-senior-dental` / `nerima-sme-support`）。次回で東京都raw gap 0件を狙う。

## 2026-07-02 東京都Batch 80 追加ログ

東京都の残8件である練馬区候補を、`src/data/grants/verified-tokyo-local-2026.ts` に追加・補正した。これにより `scripts/audit-raw-verified-gaps.mjs --prefecture 東京都` の未照合raw slugは0件になった。

追加・補正:

- `nerima-birth-bonus`: 第3子以降出産祝金候補は、既存verifiedの `nerima-third-child-birth-gift` と同じ「第3子誕生祝金」へ統合。公式支給額は出生児1人につき10万円で、旧生成データの20万円は誤り。重複掲載を抑止。
- `nerima-childcare-subsidy`: 子育てスタート応援金候補を「子育てスタート応援券」へ補正。現金10万円ではなく、子ども1人につき2,000円相当券8枚を確認。
- `nerima-education-scholarship`: 奨学資金制度候補は、練馬区公式で現行の返還不要奨学金として確認できないため、公式に案内されている東京都の「受験生チャレンジ支援貸付事業」へ補正。令和8年度締切2027年1月29日を確認。
- `nerima-energy-support`: 省エネルギー機器等導入助成候補を「令和8年度 練馬区カーボンニュートラル化設備設置補助金」へ補正。対象設備、申請受付2026年4月15日から2027年3月31日必着、予算到達時終了を確認。
- `nerima-housing-eco`: 住宅省エネ改修候補は、同じカーボンニュートラル化設備設置補助金の高断熱窓・ドア等と重複するため、通常掲載は `nerima-energy-support` に統合し、このslugは抑止。
- `nerima-nursing-home-reform`: 介護保険住宅改修費支給へ補正。要介護・要支援認定者、工事着工前申請、手すり・段差解消等の対象工事を確認。
- `nerima-senior-dental`: 高齢者歯科健診・治療費助成候補を「長寿すこやか歯科健診」へ補正。無料の歯科健診を確認し、治療費最大1万円助成は公式確認できないため採用せず。
- `nerima-sme-support`: 中小企業経営安定化助成金候補を「新規ビジネスチャレンジ補助金」へ補正。新市場参入、新商品・新サービス開発、事業計画の伴走支援を確認。

確認:

- `git diff --check -- src/data/grants/verified-tokyo-local-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug nerima-birth-bonus,nerima-childcare-subsidy,nerima-education-scholarship,nerima-energy-support,nerima-housing-eco,nerima-nursing-home-reform,nerima-senior-dental,nerima-sme-support --concurrency 8 --timeout-ms 60000`: 採用sourceUrls 22件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 東京都 --limit 20`: 東京都の未照合raw slugは8件から0件に減少。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,098件から3,090件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,801件、東京都ローカル公式確認済みは366件、activeWithoutOfficialSourceは3,094件。
- `npm run build`: 成功。静的ページ4,413件生成、`/grant/[slug]` は2,004件。

到達点:

- 東京都のraw候補照合は0件まで完了。以後は全国残件の多い都道府県から進める。
- 全国未照合raw slugは3,090件。上位は北海道163件、埼玉県140件、福岡県127件、栃木県121件、大阪府119件、愛知県112件。

次回再開位置:

- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 30` の先頭候補どおり、北海道の旭川市20件（`asahikawa-birth-bonus` / `asahikawa-block-wall-removal` / `asahikawa-bousai-equipment` / `asahikawa-child-medical-aid` / `asahikawa-childcare-subsidy` / `asahikawa-disability-medical` / `asahikawa-elderly-taxi` / `asahikawa-energy-support` / `asahikawa-health-checkup-subsidy` / `asahikawa-housing-reform` / `asahikawa-juutaku-reform` / `asahikawa-newlywed-rent` / `asahikawa-nursing-home-reform` / `asahikawa-scholarship-repayment` / `asahikawa-school-lunch` / `asahikawa-school-lunch-subsidy` / `asahikawa-senior-medical` / `asahikawa-startup-support` / `asahikawa-telework-bonus` / `asahikawa-water-saving`）を同一サイクルで公式確認する。

## 2026-07-02 速度改善方針

現時点の全国進捗は、有効掲載4,895件中、公式確認済みactive 1,801件で約36.8%。東京都はraw未照合0件まで完了したが、全国raw未照合は3,090件残っている。従来の5〜10件単位では遅いため、以後は精度を落とさずに次の運用へ切り替える。

- 原則として市区町村単位で20件前後、公式ページがまとまっている自治体は30〜50件単位で処理する。
- 公式一次情報の確認基準は維持する。出典不明、非公式まとめ、金額・期限が公式で確認できない候補は、補正または期限切れ/重複/確認不可として抑止する。
- 毎件ごとの重いbuildは避ける。通常は `check-grant-source-urls.mjs`、対象ESLint、raw gap監査、coverageを優先し、`npm run build` は20〜50件ごとの節目でまとめて実行する。
- 重複判断は既存verified検索を先に実行し、同一制度の別slugは新規掲載せず既存slugへ統合する。
- 次の優先順位は、未照合件数が多い北海道、埼玉県、福岡県、栃木県、大阪府、愛知県の順。まず北海道旭川市20件を1サイクルで処理して、実処理速度を再計測する。

## 2026-07-02 北海道Batch 81 追加ログ

速度改善方針に沿って、北海道の先頭候補である旭川市20件を1サイクルで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。公式一次情報で確認できた制度は掲載し、同一制度の別slugは統合し、現行公式制度として確認できない候補は期限切れ扱いで抑止した。

追加・補正:

- `asahikawa-birth-bonus`: 旧「出産・子育て応援給付金」を現行の「妊婦のための支援給付」へ補正。妊娠1回5万円、胎児1人あたり5万円を確認。
- `asahikawa-child-medical-aid`: 既存 `asahikawa-child-medical` と同一の子ども医療費助成へ重複統合。
- `asahikawa-childcare-subsidy`: 教育・保育の無償化、認可外保育施設等の上限、旭川市独自の副食費免除拡充へ補正。
- `asahikawa-disability-medical` / `asahikawa-senior-medical`: 重度心身障害者医療費助成を公式確認し、重複slugを統合。
- `asahikawa-elderly-taxi`: 高齢者一般向けタクシー券ではなく、公式の高齢者バス料金助成事業（寿バスカード）へ補正。
- `asahikawa-energy-support`: 令和8年度地域エネルギー設備等導入促進事業補助金へ補正。第1回受付2026年8月31日まで、設備別上限を確認。
- `asahikawa-health-checkup-subsidy`: 人間ドック助成は確認できないため、国保特定健診・市がん検診の自己負担無料化へ補正。
- `asahikawa-housing-reform` / `asahikawa-juutaku-reform`: 旭川市住宅改修補助金へ補正し、重複slugを統合。令和8年度受付終了、公式上限は省エネルギー型10万円・維持保全型5万円。
- `asahikawa-nursing-home-reform`: 介護保険住宅改修費支給へ補正。対象工事費20万円まで、保険給付分は最大18万円。
- `asahikawa-scholarship-repayment`: 若者地元定着奨学金返済補助事業を確認。企業連携制度は3年間で最大60万円、登録締切2027年3月31日。
- `asahikawa-school-lunch` / `asahikawa-school-lunch-subsidy`: 就学援助制度の学校給食費全額援助へ補正し、重複slugを統合。
- `asahikawa-startup-support`: スタートアップ支援補助金へ補正。上限50万円、令和8年度募集は2026年6月30日で受付終了。
- `asahikawa-telework-bonus`: 現行の市内中小企業向けテレワーク導入補助は確認できず、移住支援金テレワークタイプも受付終了のため通常一覧から除外。
- `asahikawa-water-saving`: 雨水タンク補助は確認できず、公式に確認できる飲用水等確保対策補助金へ補正。上限120万円、2026年6月26日受付終了。
- `asahikawa-block-wall-removal` / `asahikawa-bousai-equipment` / `asahikawa-newlywed-rent`: 生成データの制度名・補助額は現行公式制度として確認できないため通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...旭川市20件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 49件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 30`: 北海道の未照合raw slugは163件から143件に減少。次の先頭候補は釧路市21件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,090件から3,070件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,810件、activeWithoutOfficialSourceは3,074件、北海道ローカル公式確認済みは27件。
- `npm run build`: 成功。静的ページ4,440件生成、`/grant/[slug]` は2,024件。

次回再開位置:

- 北海道Batch 82として釧路市21件（`kushiro-birth-bonus` / `kushiro-block-wall-removal` / `kushiro-bousai-equipment` / `kushiro-child-medical` / `kushiro-child-medical-aid` / `kushiro-childcare-subsidy` / `kushiro-disability-medical` / `kushiro-elderly-taxi` / `kushiro-energy-support` / `kushiro-health-checkup-subsidy` / `kushiro-housing-reform` / `kushiro-juutaku-reform` / `kushiro-newlywed-rent` / `kushiro-nursing-home-reform` / `kushiro-scholarship-repayment` / `kushiro-school-lunch` / `kushiro-school-lunch-subsidy` / `kushiro-senior-medical` / `kushiro-startup-support` / `kushiro-telework-bonus` / `kushiro-water-saving`）を同一サイクルで公式確認する。

## 2026-07-02 北海道Batch 82 追加ログ

速度改善方針に沿って、北海道の次候補である釧路市21件を1サイクルで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。公式一次情報で確認できた制度は掲載し、同一制度の別slugは統合し、現行公式制度として確認できない候補は期限切れ扱いで抑止した。

追加・補正:

- `kushiro-birth-bonus`: 旧「出産・子育て応援給付金」を現行の「妊婦のための支援給付」へ補正。妊婦1人5万円、胎児1人5万円を確認。
- `kushiro-child-medical` / `kushiro-child-medical-aid`: こども医療費助成制度を公式確認し、重複slugを統合。0歳から18歳到達後最初の3月31日まで、所得制限なし、高校生世代通院拡大を確認。
- `kushiro-childcare-subsidy`: 幼児教育・保育の無償化と、2025年4月からの認可保育施設等第2子以降保育料無料化へ補正。
- `kushiro-disability-medical` / `kushiro-senior-medical`: 重度心身障がい者医療費助成制度を公式確認し、重複slugを統合。
- `kushiro-elderly-taxi`: 一般高齢者タクシー助成ではなく、公式に確認できる高齢者外出促進バス事業へ補正。おでかけパスポート70と定期券購入助成を確認。
- `kushiro-school-lunch` / `kushiro-school-lunch-subsidy`: 学校給食費関連候補を就学援助制度へ補正し、重複slugを統合。
- `kushiro-housing-reform` / `kushiro-juutaku-reform`: 釧路市住宅エコリフォーム補助制度へ補正し、重複slugを統合。2026年4月1日から10月30日まで、補助対象工事費10%、最大50万円、高齢者同居加算込み最大75万円を確認。
- `kushiro-nursing-home-reform`: 介護保険住宅改修費支給へ補正。1住宅20万円限度、保険給付分7〜9割、着工前事前申請を確認。
- `kushiro-health-checkup-subsidy`: 人間ドック助成は現行公式制度として確認できないため、国民健康保険の特定健康診査へ補正。
- `kushiro-scholarship-repayment`: 奨学金返済支援補助金を確認。企業と釧路市あわせて最大5年間120万円。
- `kushiro-startup-support`: 創業支援資金に係る信用保証料補助制度へ補正。上限20万円を確認。
- `kushiro-telework-bonus`: UIJターン新規就業支援事業（移住支援金）へ補正。単身60万円、世帯100万円、18歳未満加算30万円、テレワーク要件を確認。
- `kushiro-energy-support`: 冬季暖房費助成金は公式確認できず、関連するecoライフ促進支援補助金制度は令和7年度終了のため通常一覧から除外。
- `kushiro-newlywed-rent` / `kushiro-water-saving` / `kushiro-block-wall-removal` / `kushiro-bousai-equipment`: 生成データの制度名・補助額は現行公式制度として確認できないため通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...釧路市21件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 34件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 35`: 北海道の未照合raw slugは143件から122件に減少。次の先頭候補は江別市11件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,070件から3,049件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,822件、activeWithoutOfficialSourceは3,053件、北海道ローカル公式確認済みは39件。active全体4,875件に対する公式確認済みactive比率は約37.4%。
- `npm run build`: 成功。静的ページ4,463件生成、`/grant/[slug]` は2,046件。

速度についての観測:

- 釧路市21件は、公式URL検証・coverage・buildまで含めて1バッチで完了できた。以前の5〜10件単位より処理効率は上がっている。
- ただし `npm run build` は今回も約2分半かかり、全体時間の大きな固定費になっている。今後も公式URL検証とraw gap監査を主検証にし、buildは20〜50件単位の節目でまとめて実行する。
- 公式確認不可候補を無理に掲載せず、抑止レコードとしてraw gapだけ解消する方針は、精度を落とさず速度を上げるうえで有効。

次回再開位置:

- 北海道Batch 83として江別市11件（`ebetsu-birth-bonus` / `ebetsu-childcare-subsidy` / `ebetsu-education-support` / `ebetsu-elderly-support` / `ebetsu-housing-purchase` / `ebetsu-infertility` / `ebetsu-nursing-equipment` / `ebetsu-scholarship` / `ebetsu-seismic-diagnosis` / `ebetsu-sme-support` / `ebetsu-vaccination-support`）を同一サイクルで公式確認する。

## 2026-07-02 北海道Batch 83 追加ログ

北海道の次候補である江別市11件を1サイクルで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。公式一次情報で確認できた制度は掲載し、現行公式制度として確認できない候補は期限切れ扱いで抑止した。

追加・補正:

- `ebetsu-birth-bonus`: 出産祝金制度は現行公式制度として確認できないため、「えべつ☆うえるかむ赤ちゃん事業（妊婦のための支援給付）」へ補正。妊婦1人5万円、胎児1人5万円、所得制限なしを確認。
- `ebetsu-childcare-subsidy`: 幼児教育・保育の無償化へ補正。3〜5歳無償、0〜2歳非課税世帯無償、令和8年10月以降の認可外保育施設等上限引き上げを確認。
- `ebetsu-education-support`: 就学援助制度を公式確認。給食費全額、修学旅行費、新入学学用品費、令和8年度の学年別申請期限を確認。
- `ebetsu-elderly-support`: 高齢者福祉事業へ補正。緊急通報サービス助成、在宅高齢者等給食サービス、ふれあい入浴デーを確認。
- `ebetsu-housing-purchase`: 住宅取得支援補助金は現行公式制度として確認できず、住まいに関する主な支援制度ページにも市独自住宅取得補助は掲載なし。通常一覧から除外。
- `ebetsu-infertility`: 不妊治療費（先進医療）等助成へ補正。先進医療費10分の7、上限3万5千円、交通費助成を確認。
- `ebetsu-nursing-equipment`: 介護用品支給事業は現行公式制度として確認できず、介護保険の特定福祉用具購入費支給へ補正。同年度10万円上限、保険給付7〜9割を確認。
- `ebetsu-scholarship`: 江別市奨学金制度を公式確認。高校生向け貸与、公立月額8,000円、私立月額18,000円、毎年12名程度を確認。
- `ebetsu-seismic-diagnosis`: 木造住宅耐震診断・補強設計・耐震改修・除却補助金へ補正。耐震診断上限8万9千円、補強設計10万円、耐震改修82万2千円、除却30万円を確認。
- `ebetsu-sme-support`: 江別市商工業活性化事業補助金へ補正。商店街来客利便施設整備上限400万円、建築協定推進上限200万円、空き店舗等リノベーション上限100万円等を確認。
- `ebetsu-vaccination-support`: 高齢者予防接種助成として肺炎球菌・帯状疱疹を公式確認。肺炎球菌自己負担5,700円、帯状疱疹自己負担4,400円または11,000円、令和8年度帯状疱疹実施期間2026年4月1日から2027年3月31日を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...江別市11件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 28件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 40`: 北海道の未照合raw slugは122件から111件に減少。次の先頭候補は札幌市9件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,049件から3,038件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,831件、activeWithoutOfficialSourceは3,042件、北海道ローカル公式確認済みは48件。active全体4,873件に対する公式確認済みactive比率は約37.6%。
- `npm run build`: 成功。静的ページ4,476件生成、`/grant/[slug]` は2,057件。

次回再開位置:

- 北海道Batch 84として札幌市9件（`sapporo-birth-bonus` / `sapporo-childcare-subsidy` / `sapporo-elderly-support` / `sapporo-housing-eco-reform` / `sapporo-infertility` / `sapporo-newlywed-rent` / `sapporo-nursing-equipment` / `sapporo-scholarship` / `sapporo-sme-support`）を同一サイクルで公式確認する。

## 2026-07-02 北海道Batch 84 追加ログ

北海道の次候補である札幌市9件を1サイクルで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。公式一次情報で確認できた制度は掲載し、同一制度の別slugは既存slugへ統合し、現行公式制度として確認できない候補は通常一覧から除外した。

追加・補正:

- `sapporo-birth-bonus`: 出産祝金候補を「妊婦のための支援給付（妊婦支援給付金）」へ補正。妊婦1人5万円、胎児1人5万円を確認。
- `sapporo-childcare-subsidy`: 保育料多子軽減・幼児教育保育無償化へ補正。第2子以降保育料無料化と幼児教育・保育の無償化を確認。
- `sapporo-elderly-support`: 生成データの冬季支援金候補は現行公式制度として確認できず、福祉除雪事業へ補正。
- `sapporo-housing-eco-reform`: 既存 `sapporo-eco-reform-2026` と同一の住宅エコリフォーム補助制度として重複統合。
- `sapporo-infertility`: 不妊治療費助成（先進医療）へ補正。先進医療自己負担7割、上限3万5千円、交通費助成を確認。
- `sapporo-newlywed-rent`: 結婚新生活支援補助金候補は確認できず、セーフティネット住宅入居支援事業補助制度へ補正。家賃債務保証料等の上限6万円を確認。
- `sapporo-nursing-equipment`: おむつサービスへ補正。月6,500円を上限とする現物給付と利用者負担を確認。
- `sapporo-scholarship`: 特別奨学金へ補正。令和8年度支給分は受付終了として通常一覧から除外。
- `sapporo-sme-support`: 札幌市先端設備等導入促進補助金（令和8年度事業）へ補正。補助率20%、上限500万円、申請期限2026年11月30日を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...札幌市9件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 24件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 35`: 北海道の未照合raw slugは111件から102件に減少。次の先頭候補は小樽市20件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,038件から3,029件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,838件、activeWithoutOfficialSourceは3,033件、北海道ローカル公式確認済みは55件。active全体4,871件に対する公式確認済みactive比率は約37.7%。
- `npm run build`: 成功。静的ページ4,490件生成、`/grant/[slug]` は2,066件。

速度改善メモ:

- 札幌市9件のような小バッチでも、buildだけで約100秒かかる。今後は精度維持に必要な公式URL検証・raw gap監査・coverageを通常検証とし、buildは20〜50件単位または公開前にまとめる。
- 調査は1slugずつではなく、自治体単位で公式サイト内検索・既存verified重複検索・raw候補一覧を先に束ねてから、掲載/統合/抑止を一括判断する。
- 公式確認不可の生成候補を深追いしすぎない。公式ページで確認できない制度名・金額・期限は、関連する現行制度へ補正できる場合だけ補正し、それ以外は抑止する。

次回再開位置:

- 北海道Batch 85として小樽市20件（`otaru-birth-bonus` / `otaru-block-wall-removal` / `otaru-bousai-equipment` / `otaru-child-medical-aid` / `otaru-childcare-subsidy` / `otaru-disability-medical` / `otaru-elderly-taxi` / `otaru-energy-support` / `otaru-health-checkup-subsidy` / `otaru-housing-reform` / `otaru-juutaku-reform` / `otaru-migration-support` / `otaru-newlywed-rent` / `otaru-nursing-home-reform` / `otaru-scholarship-repayment` / `otaru-school-lunch` / `otaru-school-lunch-subsidy` / `otaru-startup-support` / `otaru-telework-bonus` / `otaru-water-saving`）を公式一次情報で確認する。

## 2026-07-02 北海道Batch 85 追加ログ

北海道の次候補である小樽市20件を、自治体単位の一括棚卸しで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。公式一次情報で確認できた制度は掲載し、既存公式確認済み制度や同一制度の別slugは統合し、現行公式制度として確認できない生成候補は通常一覧から除外した。

追加・補正:

- `otaru-birth-bonus`: 出産祝金候補を出産・子育て応援事業（妊婦のための支援給付）へ補正。1回目5万円、2回目胎児1人5万円を確認。
- `otaru-childcare-subsidy`: 保育料多子軽減・幼児教育保育無償化へ補正。第2子以降完全無料化、3歳以上児保育料0円を確認。
- `otaru-newlywed-rent`: 新婚世帯家賃補助は現行公式制度として確認できず、住居確保給付金（家賃補助）へ補正。
- `otaru-disability-medical`: 重度心身障害者医療費助成制度を公式確認。
- `otaru-school-lunch` / `otaru-school-lunch-subsidy`: 就学援助制度へ補正し、給食費補助重複slugを統合。
- `otaru-telework-bonus` / `otaru-migration-support`: 移住支援金へ補正。テレワーク移住を含むため、テレワークslugは重複統合。
- `otaru-nursing-home-reform`: 介護保険住宅改修費支給へ補正。20万円までの改修費用に対し7〜9割給付を確認。
- `otaru-energy-support`: 令和8年度高圧電気料金高騰対策支援金へ補正。1kWhあたり3円以内、上限200万円を確認。
- `otaru-housing-reform` / `otaru-juutaku-reform`: 住宅エコリフォーム助成制度へ補正し、重複slugを統合。ZEH水準最大70万円、子育て・若者夫婦世帯最大85万円を確認。
- `otaru-child-medical-aid`: 既存公式確認済み `otaru-child-medical` と同一制度として重複統合。
- `otaru-health-checkup-subsidy`: 人間ドック助成は現行公式ページで直接確認できず、たるトク健診・後期高齢者医療健康診査へ補正。
- `otaru-scholarship-repayment`: さっぽろ圏奨学金返還支援事業へ補正。年間最大18万円、3年間最大54万円を確認。
- `otaru-startup-support`: 創業支援補助金を公式確認。内外装工事費は基本50万円、市外移住・40歳未満の加算で最大100万円を確認。
- `otaru-elderly-taxi`: 一般高齢者向けタクシー助成は確認できず、ふれあいパス（高齢者バス利用助成）へ補正。
- `otaru-bousai-equipment`: 防災設備設置補助金は確認できず、家庭備蓄啓発ページを根拠に通常一覧から除外。
- `otaru-block-wall-removal`: ブロック塀撤去補助金は確認できず、安全点検案内ページを根拠に通常一覧から除外。
- `otaru-water-saving`: 雨水タンク設置補助金は確認できず、住宅エコリフォーム助成制度の節水型トイレ等へ重複統合。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...小樽市20件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 46件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 35`: 北海道の未照合raw slugは102件から82件に減少。次の先頭候補は千歳市11件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,029件から3,009件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,851件、activeWithoutOfficialSourceは3,013件、北海道ローカル公式確認済みは68件。active全体4,864件に対する公式確認済みactive比率は約38.1%。
- `npm run build`: 今回は速度改善方針に沿って省略。直前の札幌市Batch 84でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 北海道Batch 86として千歳市11件（`chitose-birth-bonus` / `chitose-childcare-subsidy` / `chitose-elderly-support` / `chitose-housing-purchase` / `chitose-housing-reform` / `chitose-infertility` / `chitose-nursing-equipment` / `chitose-scholarship` / `chitose-seismic-diagnosis` / `chitose-sme-support` / `chitose-startup-support`）を公式一次情報で確認する。

## 2026-07-02 北海道Batch 86 追加ログ

北海道の次候補である千歳市11件を、自治体単位の一括棚卸しで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの金額はそのまま採用せず、千歳市公式ページで確認できた制度名・金額・受付状況へ置換した。

追加・補正:

- `chitose-birth-bonus`: 出産祝金候補を妊婦のための支援給付事業へ補正。妊婦1人5万円、胎児1人5万円を確認。
- `chitose-childcare-subsidy`: 保育料第2子無償化・幼児教育保育無償化へ補正。令和8年9月からの第2子以降保育料無償化、認可外保育施設等の月額37,000円・42,000円上限を確認。
- `chitose-elderly-support`: 福祉サービス利用券助成事業へ補正。1万円分または2万円分の利用券、緊急通報システム事業も確認。
- `chitose-housing-purchase`: 若年夫婦・子育て世帯住宅取得支援制度へ補正。現金給付額は公式確認できず、【フラット35】地域連携の当初5年間年0.5%金利引下げを確認。
- `chitose-housing-reform`: 令和8年度ちとせ住まいのゼロカーボン化推進事業へ補正。高効率機器等10分の1・上限10万円、同時導入上限20万円、受付2026年5月7日から2027年2月1日を確認。
- `chitose-infertility`: 不妊治療費（先進医療）等助成を公式確認。先進医療費10分の7、上限3万5千円、交通費助成を確認。関連する不育症治療費助成も確認。
- `chitose-nursing-equipment`: 高齢者家族介護用品支給券を公式確認。要介護4・5の高齢者を在宅介護する同居親族向け、月額上限8,000円、紙おむつ等を確認。
- `chitose-scholarship`: 令和8年度千歳市奨学生募集は2026年6月10日で受付終了のため、期限切れ扱いで通常一覧から除外。
- `chitose-seismic-diagnosis`: 木造住宅耐震診断・耐震改修補助制度へ補正。耐震診断上限6万4千円、耐震改修上限30万円、受付2026年4月1日から9月30日を確認。無料耐震診断も確認。
- `chitose-sme-support`: 商業等活性化事業補助金へ補正。中心商店街にぎわい創出上限120万円、商店街人材育成上限20万円、市内にぎわい創出上限50万円を確認。
- `chitose-startup-support`: 起業支援事業へ補正。商業等活性化事業補助金の一部として、店舗賃借料、広告宣伝費、改装費等を対象にすることを確認。生成データの最大100万円は公式本文で直接確認できないため採用せず。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...千歳市11件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 19件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 40`: 北海道の未照合raw slugは82件から71件に減少。次の先頭候補は帯広市20件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは3,009件から2,998件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,861件、activeWithoutOfficialSourceは3,002件、北海道ローカル公式確認済みは78件。active全体4,863件に対する公式確認済みactive比率は約38.3%。
- `npm run build`: 速度改善方針により今回も省略。直近の小樽市Batch 85以降、対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 北海道Batch 87として帯広市19件（`obihiro-birth-bonus` / `obihiro-block-wall-removal` / `obihiro-child-medical` / `obihiro-child-medical-aid` / `obihiro-childcare-subsidy` / `obihiro-elderly-support` / `obihiro-elderly-taxi` / `obihiro-health-checkup-subsidy` / `obihiro-housing-purchase` / `obihiro-infertility` / `obihiro-juutaku-reform` / `obihiro-migration-support` / `obihiro-nursing-equipment` / `obihiro-scholarship` / `obihiro-scholarship-repayment` / `obihiro-school-lunch-subsidy` / `obihiro-seismic-diagnosis` / `obihiro-sme-support` / `obihiro-water-saving`）を公式一次情報で確認する。

## 2026-07-02 北海道Batch 87 追加ログ

北海道の次候補である帯広市19件を、自治体単位の一括棚卸しで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データ名をそのまま採用せず、帯広市公式ページ・PDF・交付要綱で確認できた制度へ補正し、現行公式制度として確認できない候補は通常一覧から除外した。

追加・補正:

- `obihiro-birth-bonus`: 出産祝金候補を妊婦等包括相談支援事業と妊婦支援給付金へ補正。妊婦1人5万円、子1人5万円を確認。
- `obihiro-child-medical` / `obihiro-child-medical-aid`: 子ども医療費助成制度へ補正し、重複slugを統合。対象は0歳から15歳（中学校卒業前）までで、高校卒業まで無料という生成データは採用せず。
- `obihiro-childcare-subsidy`: 幼児教育・保育の無償化へ補正。認可外保育施設等も要件を満たす場合に対象、副食費の扱いを確認。
- `obihiro-elderly-support` / `obihiro-elderly-taxi`: 高齢者おでかけサポートバス事業へ補正。70歳以上の市民向け高齢者バス無料乗車証を確認。一般高齢者向けタクシー助成は公式確認不可。
- `obihiro-health-checkup-subsidy`: 国保特定健診・人間ドック受診情報へ補正。自費ドック受診時の特定健診分の助成案内を確認。生成データの最大3万円は採用せず。
- `obihiro-housing-purchase`: 市独自住宅取得補助金は公式確認できず、住まいの総合支援事業を根拠に通常一覧から除外。
- `obihiro-infertility`: 不妊症について・不妊治療費助成へ補正。体外受精・顕微授精の治療費の一部助成を確認。上限額は公式本文で確認できないため断定せず。
- `obihiro-juutaku-reform`: 住まいの改修助成金へ補正。10万円以上の改修工事に5万円助成、受付2026年4月1日から2027年1月29日を確認。
- `obihiro-migration-support`: 移住支援金へ補正。世帯100万円、単身60万円、18歳未満1人30万円加算を確認。
- `obihiro-nursing-equipment`: 家族介護用品支給事業を公式確認。紙おむつ等の給付券、月額6,250円・年額7万5千円を確認。
- `obihiro-scholarship`: 帯広市奨学金へ補正。大学生月額2/3/5万円、専門学校生月額3万円以内、高校生月額7千円以内。令和8年度募集は受付終了。
- `obihiro-scholarship-repayment`: 奨学金返済支援補助金へ補正。従業員本人への直接給付ではなく、市内中小企業等への補助。補助対象経費年24万円・通算120万円、補助率2分の1、補助対象期間60か月を確認。
- `obihiro-school-lunch-subsidy`: 就学援助の学校給食費援助へ補正。学校給食費は実費相当分援助、通常給食費は保護者負担が原則。
- `obihiro-seismic-diagnosis`: 木造住宅の耐震化補助へ補正。耐震診断上限5万円、耐震改修・建替え上限30万円、除却上限10万円、受付2026年4月1日から9月30日を確認。
- `obihiro-sme-support`: 中小企業向け補助金・助成制度案内へ補正。中小企業人材育成助成事業上限30万円、デジタル化・AI導入補助金、とかちビジネスチャレンジ補助金案内を確認。
- `obihiro-block-wall-removal`: ブロック塀撤去補助金は公式確認できず、建築物及びブロック塀の注意喚起を根拠に通常一覧から除外。
- `obihiro-water-saving`: 雨水タンク設置補助金は公式確認できず、環境カテゴリ確認結果を根拠に通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...帯広市19件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 29件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 40`: 北海道の未照合raw slugは71件から52件に減少。次の先頭候補は苫小牧市20件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,998件から2,979件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,875件、activeWithoutOfficialSourceは2,983件、北海道ローカル公式確認済みは92件。active全体4,858件に対する公式確認済みactive比率は約38.6%。
- `npm run build`: 成功。静的ページ4,550件生成、`/grant/[slug]` は2,115件相当。

次回再開位置:

- 北海道Batch 88として苫小牧市20件（`tomakomai-birth-bonus` / `tomakomai-block-wall-removal` / `tomakomai-bousai-equipment` / `tomakomai-child-medical` / `tomakomai-child-medical-aid` / `tomakomai-childcare-subsidy` / `tomakomai-disability-medical` / `tomakomai-elderly-taxi` / `tomakomai-energy-support` / `tomakomai-health-checkup-subsidy` / `tomakomai-housing-reform` / `tomakomai-juutaku-reform` / `tomakomai-newlywed-rent` / `tomakomai-nursing-home-reform` / `tomakomai-scholarship-repayment` / `tomakomai-school-lunch` / `tomakomai-school-lunch-subsidy` / `tomakomai-startup-support` / `tomakomai-telework-bonus` / `tomakomai-water-saving`）を公式一次情報で確認する。

## 2026-07-02 北海道Batch 88 追加ログ

北海道の次候補である苫小牧市20件を、自治体単位の一括棚卸しで公式確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。苫小牧市公式サイト、公式PDF、制度ページで確認できた現行制度へ補正し、現行公式補助として確認できない生成候補は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `tomakomai-birth-bonus`: 出産・子育て応援給付金候補を妊婦のための支援給付へ補正。妊婦1人5万円、胎児1人5万円を確認。
- `tomakomai-block-wall-removal`: ブロック塀等撤去補助金は公式確認できず、ブロック塀等の安全点検案内を根拠に通常一覧から除外。
- `tomakomai-bousai-equipment`: 家庭用防災備蓄品購入補助金は公式確認できず、初期消火で使用した消火器の詰替え・交換補助へ補正。
- `tomakomai-child-medical` / `tomakomai-child-medical-aid`: 子育て支援医療費助成制度へ補正し、重複slugを統合。18歳年度末まで、所得制限なし、自己負担区分ありを確認。
- `tomakomai-childcare-subsidy`: 多子世帯にかかる保育料の軽減へ補正。第2子以降かつ3歳未満児の保育料無償化、所得制限を確認。
- `tomakomai-disability-medical`: 重度心身障害者医療費助成制度を公式PDFで確認。身体障害者手帳1〜3級、知的障がい、精神障害者保健福祉手帳1級等を確認。
- `tomakomai-elderly-taxi`: 一般高齢者向けタクシー助成は確認できず、高齢者優待乗車証・高齢者フリーパスへ補正。
- `tomakomai-energy-support`: 省エネ家電買替補助金候補をゼロカーボンハウス促進補助金へ補正。ZEH+上限100万円、太陽光発電上限70万円等を確認。
- `tomakomai-health-checkup-subsidy`: 人間ドック助成候補を後期高齢者医療の脳ドック事業へ補正。令和8年度は応募締切済み、自己負担5,200円を確認。
- `tomakomai-housing-reform` / `tomakomai-juutaku-reform`: 住宅耐震・リフォーム支援事業へ補正し、重複slugを統合。融資限度額500万円、耐震・省エネ改修を含む場合650万円、利子補給上限1.5%を確認。
- `tomakomai-newlywed-rent`: 結婚新生活支援補助金・新婚家賃補助は現行公式制度として確認できず、結婚支援事業ページを根拠に通常一覧から除外。
- `tomakomai-nursing-home-reform`: 介護保険住宅改修費の支給へ補正。住宅改修費20万円上限、9〜7割払い戻し、事前申請を確認。
- `tomakomai-scholarship-repayment`: 奨学金返還支援制度を公式確認。返還額2分の1、年間最大10万円、5年間最大50万円、北洋大学卒業者は最大100万円を確認。
- `tomakomai-school-lunch`: 多子世帯給食費助成事業を公式確認。3番目以降の子の学校給食費を補助、教育委員会から学校給食会へ直接支払を確認。
- `tomakomai-school-lunch-subsidy`: 就学援助制度へ補正。学用品費・給食費など就学に必要な費用の援助、随時受付を確認。
- `tomakomai-startup-support`: 中小企業創業サポート事業補助金を公式確認。最大30万円、補助率10分の10以内、交付申請2026年12月25日までを確認。
- `tomakomai-telework-bonus`: 企業立地・テレワーク推進補助金は確認できず、テレワーク要件を含む移住支援金へ補正。単身60万円、世帯100万円、18歳未満1人30万円加算を確認。
- `tomakomai-water-saving`: 雨水タンク設置補助金は公式確認できず、雨水浸透抑制のお願いページを根拠に通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...苫小牧市20件 --concurrency 10 --timeout-ms 60000`: 採用sourceUrls 29件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 35`: 北海道の未照合raw slugは52件から32件に減少。次の先頭候補は函館市18件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,979件から2,959件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,889件、activeWithoutOfficialSourceは2,963件、北海道ローカル公式確認済みは106件。active全体4,852件に対する公式確認済みactive比率は約38.9%。
- `npm run build`: 成功。静的ページ4,575件生成、`/grant/[slug]` は2,135件相当。

次回再開位置:

- 北海道Batch 89として函館市18件（`hakodate-birth-bonus` / `hakodate-block-wall-removal` / `hakodate-child-medical-aid` / `hakodate-childcare-subsidy` / `hakodate-disability-medical` / `hakodate-elderly-support` / `hakodate-elderly-taxi` / `hakodate-health-checkup-subsidy` / `hakodate-housing-purchase` / `hakodate-housing-seismic` / `hakodate-juutaku-reform` / `hakodate-nursing-home-reform` / `hakodate-scholarship` / `hakodate-scholarship-repayment` / `hakodate-school-lunch-subsidy` / `hakodate-seismic-diagnosis` / `hakodate-sme-support` / `hakodate-water-saving`）を公式一次情報で確認する。

## 2026-07-02 北海道Batch 89 追加ログ

北海道の次候補である函館市18件を、函館市公式ページ・公式PDF・制度ページで確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名や金額はそのまま採用せず、現行公式制度として確認できる内容へ置換し、重複候補や公式補助として確認できない候補は通常一覧から除外した。

追加・補正:

- `hakodate-birth-bonus`: 出産祝金候補を妊婦支援給付金給付事業へ補正。妊婦1人5万円、胎児1人5万円を確認。
- `hakodate-block-wall-removal`: ブロック塀撤去補助金は公式確認できず、既設塀の安全点検案内を根拠に通常一覧から除外。
- `hakodate-child-medical-aid`: 既存掲載の`hakodate-child-medical`と同一制度として重複抑止。
- `hakodate-childcare-subsidy`: 幼児教育・保育の無償化へ補正。認可外保育施設等の月額37,000円・42,000円上限を確認。
- `hakodate-disability-medical`: 重度心身障害者医療費の助成を公式確認。身体障害者手帳1〜3級、知的障がい、精神障害者保健福祉手帳1級等を確認。
- `hakodate-elderly-support`: 高齢者交通料金助成事業へ補正。市電・函館バス運賃の半額相当を年間1万円までイカすニモカポイントで付与することを確認。
- `hakodate-elderly-taxi`: 一般高齢者向けタクシー助成は公式確認できず、免許返納者向けタクシー会社割引と高齢者交通料金助成を根拠に通常一覧から除外。
- `hakodate-health-checkup-subsidy`: 後期高齢者医療制度の健康診査へ補正。令和8年度は2026年6月から2027年3月31日まで無料受診を確認。
- `hakodate-housing-purchase`: まちなか住宅建築取得費補助金を公式確認。最大200万円、計画認定申請2026年12月4日までを確認。
- `hakodate-housing-seismic`: 住宅リフォーム補助制度の耐震改修分へ補正。上限40万円、受付2026年5月7日から12月18日を確認。
- `hakodate-juutaku-reform`: 住宅リフォーム補助制度のバリアフリー・省エネ改修分へ補正。上限20万円、介護保険住宅改修との重複不可を確認。
- `hakodate-nursing-home-reform`: 介護保険住宅改修費の支給へ補正。支給限度基準額20万円、支給額14万円から18万円を確認。
- `hakodate-scholarship`: 奨学金候補を貸与型の函館市奨学金制度へ補正。令和8年度通常募集終了、追加募集は2026年8月予定を確認。
- `hakodate-scholarship-repayment`: 奨学金返還支援事業を公式確認。年間最大24万円、最大60か月、総額最大120万円を確認。
- `hakodate-school-lunch-subsidy`: 就学援助制度へ補正。学校給食費・学用品費等の援助、随時受付を確認。
- `hakodate-seismic-diagnosis`: 木造住宅の無料簡易耐震診断を公式確認。昭和56年5月31日以前の木造戸建て等が対象。
- `hakodate-sme-support`: 海外向け展示商談会等出展補助金を公式確認。補助率2分の1、海外上限40万円、国内上限20万円、受付2027年2月28日までを確認。
- `hakodate-water-saving`: 雨水タンク設置補助金は公式確認できず、雨水流出抑制の協議・指導ページを根拠に通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...函館市18件 --concurrency 1 --timeout-ms 60000`: 採用sourceUrls 22件はすべてHTTP 200、failures 0。函館市公式ドメインは高並列時に一時的なfetch failedが出るため、同一ドメインは低並列で監査する。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 30`: 北海道の未照合raw slugは32件から14件に減少。次の先頭候補は北海道庁3件と北見市11件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,959件から2,941件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,903件、activeWithoutOfficialSourceは2,945件、北海道ローカル公式確認済みは120件。active全体4,848件に対する公式確認済みactive比率は約39.3%。
- `npm run build`: 速度改善方針により今回は省略。直前の苫小牧市Batch 88でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 北海道Batch 90として北海道庁3件と北見市11件（`hokkaido-agriculture-new` / `hokkaido-childcare-support` / `hokkaido-heating-support` / `kitami-birth-bonus` / `kitami-bousai-equipment` / `kitami-childcare-subsidy` / `kitami-disability-medical` / `kitami-energy-support` / `kitami-housing-reform` / `kitami-newlywed-rent` / `kitami-nursing-home-reform` / `kitami-school-lunch` / `kitami-startup-support` / `kitami-telework-bonus`）を公式一次情報で確認する。

## 2026-07-02 北海道Batch 90 追加ログ

北海道庁3件と北見市11件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。このバッチで北海道のraw未照合slugは0件になった。制度名・金額は生成データを採用せず、北海道庁・北見市公式ページ、北見市公式PDFパンフレットで確認できる内容へ置換した。

追加・補正:

- `hokkaido-agriculture-new`: 北海道農業次世代人材投資資金へ補正。就農準備資金は年最大150万円、経営開始資金は年165万円を確認。
- `hokkaido-childcare-support`: 多子世帯の保育料軽減支援事業へ補正。第2子以降の3歳未満児の保育料無償化事業への道補助を確認。
- `hokkaido-heating-support`: 高齢者等の冬の生活支援事業（福祉灯油事業）へ補正。市町村の福祉灯油事業支援を確認し、生成データの最大3万円は採用せず。
- `kitami-birth-bonus`: 妊婦のための支援給付へ補正。1回目5万円、2回目は妊娠している子どもの数×5万円を確認。
- `kitami-bousai-equipment`: 家庭向け防災設備設置補助金は公式確認できず、家庭での備え・備蓄状況ページを根拠に通常一覧から除外。
- `kitami-childcare-subsidy`: 第2子以降の保育料無償化へ補正。認可保育施設等は第2子以降一律無償、認可外保育施設は月額42,000円上限を確認。
- `kitami-disability-medical`: 重度心身障がい者医療費助成を公式確認。対象者、所得制限、自己負担区分を確認。
- `kitami-energy-support`: 令和8年度ゼロカーボン推進事業補助金へ補正。太陽光・蓄電池同時設置21万円、木質ペレットストーブ上限20万円等を確認。
- `kitami-housing-reform`: 令和8年度地域材活用住宅補助金へ補正。地域材1m3あたり5万円、上限なし、申請期間2026年7月1日から7月7日を確認。
- `kitami-newlywed-rent`: 新婚世帯家賃補助は公式確認できず、市営住宅の新婚世帯所得制限緩和を根拠に通常一覧から除外。
- `kitami-nursing-home-reform`: 介護保険住宅改修費支給へ補正。原則20万円上限、費用の7〜9割支給、事前申請を確認。
- `kitami-school-lunch`: 学校給食費負担軽減・就学援助へ補正。令和8年度の小学校等1食286円、中学校等1食50円の公費負担と就学援助を確認。
- `kitami-startup-support`: 創業促進助成金へ補正。公式PDFパンフレットで借入額10%、最大40万円、100万円未満借入は対象外を確認。
- `kitami-telework-bonus`: テレワーク導入支援補助金は公式確認できず、企業支援・企業立地関連案内を根拠に通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...北海道庁3件・北見市11件 --concurrency 3 --timeout-ms 60000`: 採用sourceUrls 21件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 北海道 --limit 20`: 北海道の未照合raw slugは14件から0件に減少。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,941件から2,927件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,914件、activeWithoutOfficialSourceは2,931件、北海道ローカル公式確認済みは131件。active全体4,845件に対する公式確認済みactive比率は約39.5%。
- `npm run build`: 成功。静的ページ4,616件生成、`/grant/[slug]` は2,164件相当。

次回再開位置:

- 全国raw未照合の先頭は愛知県。次バッチは愛知県庁3件と安城市2件、一宮市以降の先頭候補を、自治体単位で公式一次情報確認する。

## 2026-07-02 愛知県Batch 91 追加ログ

愛知県庁3件、安城市2件、一宮市5件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名・金額はそのまま採用せず、県・市・厚生労働省の公式ページで確認できる現行制度または終了済み制度へ置換した。重複・公式確認不可の候補は通常一覧から除外する。

追加・補正:

- `aichi-childcare-subsidy`: 第二子以降児の保育料無料化・軽減補助へ補正。2025年10月から第三子以降から第二子以降へ対象拡大を確認。
- `aichi-employment-training`: 愛知県独自制度ではなく国の求職者支援制度との重複として通常一覧から除外。
- `aichi-nursing-robot`: 愛知県障害者施設介護テクノロジー導入支援事業費補助金へ補正。令和8年度事前協議は2026年5月29日で終了のため通常一覧から除外。
- `anjo-fertility-treatment`: 不妊治療費等助成制度へ補正。一般不妊治療上限10万円、生殖補助医療1クール上限20万円、先進医療上限5万円を確認。
- `anjo-housing-seismic`: 木造住宅耐震改修費補助制度へ補正。一般型最大155万円、2026年12月末申請期限を確認。
- `ichinomiya-birth-bonus`: いちのみやし妊婦支援給付金へ補正。妊婦1人5万円、胎児1人あたり5万円を確認。
- `ichinomiya-care-robot`: 一宮市単独の現行介護ロボット導入補助は確認できず、県制度との重複を避けて通常一覧から除外。
- `ichinomiya-childcare-leave-bonus`: 一宮市案内の愛知県中小企業男性育児休業取得促進奨励金へ補正。14日以上50万円、28日以上100万円を確認。
- `ichinomiya-childcare-subsidy`: 保育料の多子世帯軽減へ補正。第2子半額、第3子以降無料、2025年10月以降の対象拡大を確認。
- `ichinomiya-community-bus`: 名鉄バス高齢者向けフリーパス購入費負担へ補正。1か月あたり500円割引、2027年3月31日までを確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts SAFE_CONTINUATION_PLAN.md tasks/todo.md`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...愛知県Batch91 10件 --concurrency 6 --timeout-ms 60000`: 採用sourceUrls 17件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 25`: 愛知県の未照合raw slugは112件から102件に減少。次の先頭候補は一宮市残り13件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,927件から2,917件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,921件、activeWithoutOfficialSourceは2,921件、愛知県ローカル公式確認済みは31件。active全体4,842件に対する公式確認済みactive比率は約39.7%。
- `npm run build`: 速度改善方針により今回は省略。直前の北海道Batch 90でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 愛知県Batch 92として一宮市残り13件（`ichinomiya-earthquake-shelter-reform` / `ichinomiya-elderly-support` / `ichinomiya-factory-iot` / `ichinomiya-gifted-support` / `ichinomiya-housing-purchase` / `ichinomiya-infertility` / `ichinomiya-mental-health` / `ichinomiya-newlywed-housing` / `ichinomiya-nursing-equipment` / `ichinomiya-preschool-free` / `ichinomiya-scholarship` / `ichinomiya-seismic-diagnosis` / `ichinomiya-sme-support`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 92 追加ログ

一宮市残り13件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名・金額はそのまま採用せず、一宮市公式ページ、公式PDF、申請書ページで確認できる制度へ置換した。現行公式制度として確認できない候補は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `ichinomiya-earthquake-shelter-reform`: 耐震シェルター等設置補助金へ補正。耐震シェルター最大25万円、防災ベッド最大15万円、2026年12月15日締切を確認。
- `ichinomiya-elderly-support`: ICTを活用したひとり暮らし高齢者見守りサービス利用助成事業へ補正。上限1万5千円、1世帯1回限りを確認。
- `ichinomiya-factory-iot`: SDGs推進支援補助金の生産・受注管理システム導入へ補正。通常上限100万円、複数企業申請は上限200万円を確認。
- `ichinomiya-gifted-support`: 生成データの子ども才能開花支援補助金は公式確認できないため、公式に確認できる広域スポーツ大会運営補助金へ補正。
- `ichinomiya-housing-purchase`: 住宅取得補助金は公式確認できないため、公式に確認できる住宅用地球温暖化対策設備設置補助金へ補正。
- `ichinomiya-infertility`: 不妊治療費補助事業へ補正。先進医療費の10分の7、上限10万円、申請受付開始予定日2026年10月1日を確認。
- `ichinomiya-mental-health`: 精神障害者医療費の助成へ補正。自立支援医療（精神通院）の自己負担額助成等を確認。
- `ichinomiya-newlywed-housing`: 現行の結婚新生活支援補助金募集は公式確認できず、通常一覧から除外。
- `ichinomiya-nursing-equipment`: 家族介護用品給付へ補正。年6万円を限度に紙おむつ等を給付することを確認。
- `ichinomiya-preschool-free`: 幼児教育・保育無償化へ補正。3〜5歳児と住民税非課税世帯等の0〜2歳児を対象とする無償化案内を確認。
- `ichinomiya-scholarship`: 市独自の給付型奨学金は公式確認できず、通常一覧から除外。
- `ichinomiya-seismic-diagnosis`: 木造住宅無料耐震診断へ補正。申込書と耐震補助事業関係ページを確認。
- `ichinomiya-sme-support`: 融資に伴う助成制度へ補正。信用保証料助成上限30万円、創業資金助成、利子補給を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...愛知県Batch92 13件 --concurrency 6 --timeout-ms 60000`: 採用sourceUrls 24件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 30`: 愛知県の未照合raw slugは102件から89件に減少。次の先頭候補は岡崎市19件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,917件から2,904件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,931件、activeWithoutOfficialSourceは2,908件、愛知県ローカル公式確認済みは41件。active全体4,839件に対する公式確認済みactive比率は約39.9%。
- `npm run build`: 成功。静的ページ4,650件生成、`/grant/[slug]` は2,191件相当。

次回再開位置:

- 愛知県Batch 93として岡崎市19件（`okazaki-birth-bonus` / `okazaki-care-robot` / `okazaki-childcare-leave-bonus` / `okazaki-childcare-subsidy` / `okazaki-community-bus` / `okazaki-earthquake-shelter-reform` / `okazaki-elderly-support` / `okazaki-factory-iot` / `okazaki-gifted-support` / `okazaki-housing-purchase` / `okazaki-housing-seismic` / `okazaki-infertility` / `okazaki-mental-health` / `okazaki-newlywed-housing` / `okazaki-nursing-equipment` / `okazaki-preschool-free` / `okazaki-scholarship` / `okazaki-seismic-diagnosis` / `okazaki-sme-support`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 93 追加ログ

岡崎市19件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名・金額はそのまま採用せず、岡崎市公式ページ、公式PDF、交付要綱で確認できる制度へ置換した。市単独の現行制度として確認できない候補は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `okazaki-birth-bonus`: 妊婦等のための支援給付事業へ補正。妊婦5万円、胎児1人あたり5万円を確認。
- `okazaki-care-robot`: 市単独の現行介護ロボット導入補助金は公式確認できず、通常一覧から除外。
- `okazaki-childcare-leave-bonus`: 市単独の育児休業取得奨励金は公式確認できず、通常一覧から除外。
- `okazaki-childcare-subsidy`: 保育料の多子世帯軽減へ補正。第2子半額、第3子以降無料等を令和8年度保育料表で確認。
- `okazaki-community-bus`: 高齢者無料乗車証は公式確認できず、高齢者交通安全サポート制度を確認したうえで通常一覧から除外。
- `okazaki-earthquake-shelter-reform`: 耐震シェルター・防災ベッド設置費補助制度へ補正。上限30万円、2026年12月28日締切を確認。
- `okazaki-elderly-support`: バス・タクシー利用券等の高齢者外出支援事業は公式確認できず、通常一覧から除外。
- `okazaki-factory-iot`: 市単独の中小製造業IoT導入補助金は公式確認できず、国制度案内・DXビジョン確認にとどめ通常一覧から除外。
- `okazaki-gifted-support`: 岡崎アスリート支援金へ補正。全国・国際大会出場者向け、最大5万円を確認。
- `okazaki-housing-purchase`: 岡崎市産材住宅建設事業費補助金へ補正。施主上限30万円を確認。
- `okazaki-housing-seismic`: 木造住宅耐震改修費補助金へ補正。工事・設計合計上限100万円を確認。
- `okazaki-infertility`: 不妊治療（先進医療）費補助へ補正。10分の7、上限5万円、2026年6月1日開始を確認。
- `okazaki-mental-health`: 精神障がい者医療費助成へ補正。保険診療の自己負担分全額助成を確認。
- `okazaki-newlywed-housing`: 結婚新生活支援補助金の現行募集ページは確認できず、通常一覧から除外。
- `okazaki-nursing-equipment`: 家族介護用品購入助成券（おむつ券）へ補正。月2,700円分を確認。
- `okazaki-preschool-free`: 幼児教育・保育の無償化へ補正。3〜5歳児と住民税非課税世帯0〜2歳児対象を確認。
- `okazaki-scholarship`: 奨学資金貸付けへ補正。年額40万円無利子貸付、令和8年度新規申請は2025年11月28日で受付終了を確認。
- `okazaki-seismic-diagnosis`: 木造住宅の無料耐震診断へ補正。随時受付、対象建物、申込方法を確認。
- `okazaki-sme-support`: 中小企業向け融資の信用保証料・利子補助制度へ補正。創業資金保証料補助上限20万円、中小企業事業資金保証料補助上限10万円等を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...岡崎市19件 --concurrency 3 --timeout-ms 60000`: 採用sourceUrls 33件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 30`: 愛知県の未照合raw slugは89件から70件に減少。次の先頭候補は春日井市11件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,904件から2,885件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,943件、activeWithoutOfficialSourceは2,889件、愛知県ローカル公式確認済みは53件。active全体4,832件に対する公式確認済みactive比率は約40.2%。
- `npm run build`: 速度改善方針により今回は省略。直前の北海道Batch 90でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 愛知県Batch 94として春日井市11件（`kasugai-care-robot` / `kasugai-childcare-leave-bonus` / `kasugai-community-bus` / `kasugai-earthquake-shelter-reform` / `kasugai-factory-iot` / `kasugai-gifted-support` / `kasugai-housing-reform` / `kasugai-mental-health` / `kasugai-newlywed-housing` / `kasugai-preschool-free` / `kasugai-startup-support`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 94 追加ログ

春日井市11件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名・金額はそのまま採用せず、春日井市公式ページと公式PDFで確認できる制度へ置換した。市単独の現行制度として確認できない候補は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `kasugai-care-robot`: 市単独の現行介護ロボット導入補助金は公式確認できず、通常一覧から除外。
- `kasugai-childcare-leave-bonus`: 市単独の育児休業取得奨励金は公式確認できず、通常一覧から除外。
- `kasugai-community-bus`: かすがいシティバス高齢者カード・交通共通利用助成券へ補正。75歳以上の運賃割引、交通共通利用助成券3,000円分を確認。
- `kasugai-earthquake-shelter-reform`: 耐震シェルター整備費補助金へ補正。補助率2分の1、上限30万円を確認。
- `kasugai-factory-iot`: 市単独の中小製造業IoT導入補助金は公式確認できず、通常一覧から除外。
- `kasugai-gifted-support`: 子ども才能開花支援補助金は公式確認できず、通常一覧から除外。
- `kasugai-housing-reform`: 住宅省エネ改修費補助制度へ補正。補助率80%、上限30万円、2026年5月20日受付終了を確認。
- `kasugai-mental-health`: 精神障がい者医療費助成へ補正。自立支援医療（精神通院）適用後の自己負担額助成を確認。
- `kasugai-newlywed-housing`: 結婚新生活支援補助金は公式確認できず、通常一覧から除外。
- `kasugai-preschool-free`: 幼児教育・保育の無償化へ補正。幼稚園月額25,700円、預かり保育月額11,300円上限等を確認。
- `kasugai-startup-support`: 創業事業補助金へ補正。補助対象経費2分の1、上限30万円を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...春日井市11件 --concurrency 3 --timeout-ms 60000`: 初回は旧例規集ドメイン1件がfetch failed。`kasugai-childcare-leave-bonus` のsourceUrlsを春日井市公式PDFへ差し替え、再実行で採用sourceUrls 22件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 25`: 愛知県の未照合raw slugは70件から59件に減少。次の先頭候補は瀬戸市9件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,885件から2,874件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,948件、activeWithoutOfficialSourceは2,878件、愛知県ローカル公式確認済みは58件。active全体4,826件に対する公式確認済みactive比率は約40.4%。
- `npm run build`: 速度改善方針により今回は省略。直前の北海道Batch 90でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 愛知県Batch 95として瀬戸市9件（`seto-care-robot` / `seto-childcare-leave-bonus` / `seto-community-bus` / `seto-earthquake-shelter-reform` / `seto-factory-iot` / `seto-gifted-support` / `seto-mental-health` / `seto-newlywed-housing` / `seto-preschool-free`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 95 追加ログ

瀬戸市9件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名・金額はそのまま採用せず、瀬戸市公式ページで確認できた制度へ置換し、現行公式制度として確認できない候補は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `seto-care-robot`: 市単独の現行介護ロボット導入補助金は公式確認できず、介護現場のICT・介護ロボット等の技術導入検討を確認したうえで通常一覧から除外。
- `seto-childcare-leave-bonus`: 市単独の育児休業取得奨励金は公式確認できず、男性育休・ワークライフバランス啓発を確認したうえで通常一覧から除外。
- `seto-community-bus`: 高齢者無料乗車証は公式確認できず、コミュニティバス運賃・幼児無料・障害者半額を確認したうえで通常一覧から除外。
- `seto-earthquake-shelter-reform`: 木造住宅耐震シェルター設置工事費補助事業へ補正。上限30万円、旧耐震木造住宅・無料耐震診断判定値1.0未満等を確認。
- `seto-factory-iot`: スタートアップ連携事業補助金へ補正。補助率3分の2、上限50万円、事業開始から30日以内申請を確認。
- `seto-gifted-support`: スポーツ・文化活動全国大会等出場奨励補助金へ補正。児童・生徒・学生の全国大会等出場支援、令和8年度申請期限2027年3月4日を確認。
- `seto-mental-health`: 精神障害者医療費助成制度へ補正。自立支援医療（精神通院）との併用、精神科入院者の申請区分を確認。
- `seto-newlywed-housing`: 結婚新生活支援補助金は公式確認できず、通常一覧から除外。
- `seto-preschool-free`: 幼児教育・保育の無償化へ補正。3〜5歳児、住民税非課税世帯0〜2歳児、幼稚園月額25,700円上限を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...瀬戸市9件 --concurrency 3 --timeout-ms 60000`: 初回はPDF/新着一覧sourceで2件fetch failed。`seto-care-robot` sourceUrlsを瀬戸市公式HTMLへ差し替え、再実行で採用sourceUrls 16件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 35`: 愛知県の未照合raw slugは59件から50件に減少。次の先頭候補は半田市9件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,874件から2,865件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,953件、activeWithoutOfficialSourceは2,869件、愛知県ローカル公式確認済みは63件。active全体4,822件に対する公式確認済みactive比率は約40.5%。
- `npm run build`: 速度改善方針により今回は省略。直前の一宮市Batch 92でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 愛知県Batch 96として半田市9件（`handa-care-robot` / `handa-childcare-leave-bonus` / `handa-community-bus` / `handa-earthquake-shelter-reform` / `handa-factory-iot` / `handa-gifted-support` / `handa-mental-health` / `handa-newlywed-housing` / `handa-preschool-free`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 96 追加ログ

半田市9件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名・金額はそのまま採用せず、半田市公式ページと公式PDFで確認できた制度へ置換した。市単独の現行制度として確認できない候補は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `handa-care-robot`: 市単独の現行介護ロボット導入補助金は公式確認できず、第9期介護保険事業計画の介護ロボット・ICT活用促進方針を確認したうえで通常一覧から除外。
- `handa-childcare-leave-bonus`: 市単独の育児休業取得奨励金は公式確認できず、愛知県男性育児休業取得促進奨励金の案内を確認したうえで通常一覧から除外。
- `handa-community-bus`: 高齢者運転免許自主返納促進事業へ補正。満65歳以上・自主返納から1年以内、バス利用券18,000円分またはタクシー利用券5,000円分を確認。
- `handa-earthquake-shelter-reform`: 耐震シェルター等設置費補助へ補正。耐震シェルター上限25万円、防災ベッド上限15万円、旧耐震木造住宅・無料耐震診断判定値1.0未満等を確認。
- `handa-factory-iot`: 企業再投資促進補助金へ補正。土地を除く固定資産取得費、補助率10%、限度額10億円、事前相談が必要なことを確認。
- `handa-gifted-support`: スポーツ・文化活動全国大会出場激励金へ補正。個人5,000円、団体5,000円×人数・上限30,000円、1年度1回を確認。
- `handa-mental-health`: 精神障がい者医療費の助成へ補正。手帳1・2級または自立支援医療受給者証、保険診療自己負担分の助成を確認。
- `handa-newlywed-housing`: 結婚新生活支援補助金は公式確認できず、結婚支援ページを確認したうえで通常一覧から除外。
- `handa-preschool-free`: 保育料の補助・無償化へ補正。第2子以降の3歳児未満保育料無償、3歳児以上の保育料無償、延長保育料等は別負担を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...半田市9件 --concurrency 3 --timeout-ms 60000`: 採用sourceUrls 13件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 35`: 愛知県の未照合raw slugは50件から41件に減少。次の先頭候補は豊橋市19件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,865件から2,856件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,959件、activeWithoutOfficialSourceは2,860件、愛知県ローカル公式確認済みは69件。active全体4,819件に対する公式確認済みactive比率は約40.6%。
- `npm run build`: 速度改善方針により今回は省略。直前の一宮市Batch 92でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。次の20〜50件節目または公開前にまとめて実行する。

次回再開位置:

- 愛知県Batch 97として豊橋市19件（`toyohashi-birth-bonus` / `toyohashi-bousai-equipment` / `toyohashi-care-robot` / `toyohashi-childcare-leave-bonus` / `toyohashi-childcare-subsidy` / `toyohashi-community-bus` / `toyohashi-disability-medical` / `toyohashi-earthquake-shelter-reform` / `toyohashi-education-support` / `toyohashi-energy-support` / `toyohashi-factory-iot` / `toyohashi-gifted-support` / `toyohashi-mental-health` / `toyohashi-newlywed-housing` / `toyohashi-newlywed-rent` / `toyohashi-nursing-home-reform` / `toyohashi-preschool-free` / `toyohashi-school-lunch` / `toyohashi-telework-bonus`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 97 追加ログ

豊橋市19件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。生成データの制度名・金額はそのまま採用せず、豊橋市公式ページ、公式PDF、電子申請ポータルで確認できた制度へ置換した。市単独の現行制度として確認できない候補は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `toyohashi-birth-bonus`: 妊婦のための支援給付へ補正。令和7年4月1日開始、2回に分けて妊婦支援給付金を支給することを確認。
- `toyohashi-bousai-equipment`: 家具等てんとうむし補助金2025へ補正。家具転倒防止器具等の購入費・取付費、上限5,000円を確認。公式電子申請ページで2025年12月26日受付終了を確認し、通常一覧から除外。
- `toyohashi-care-robot`: 介護ロボット等導入支援事業補助金は予算資料で確認できるが、申請者向け現行募集ページは確認できないため通常一覧から除外。
- `toyohashi-childcare-leave-bonus`: 市独自の育児休業取得奨励金は公式確認できず、雇用・労働関係ページの県・国等リンク確認にとどめ通常一覧から除外。
- `toyohashi-childcare-subsidy`: 保育料等の軽減へ補正。0〜2歳児の第3子以降無料・第2子半額、副食費多子世帯軽減を確認。
- `toyohashi-community-bus`: 高齢者運転免許証自主返納交通助成券へ補正。自主返納時70歳以上等、タクシー券・交通助成券・元気パス購入助成券の各5,000円分を確認。
- `toyohashi-disability-medical`: 障害者医療へ補正。対象手帳等級、保険診療自己負担分無料、保険適用外費用は対象外を確認。
- `toyohashi-earthquake-shelter-reform`: 木造住宅耐震シェルター整備費補助金へ補正。令和8年度受付、判定値1.0未満等、高齢者または障がい者居住要件を確認。
- `toyohashi-education-support`: 就学援助へ補正。令和8年度案内、学用品費など費用の一部援助、多言語案内を確認。
- `toyohashi-energy-support`: 家庭用エネルギー設備導入補助金へ補正。太陽光・HEMS・蓄電池一体的導入12万円、ZEH16万円、蓄電池上限7万円、太陽熱利用設備等を確認。
- `toyohashi-factory-iot`: 新ビジネスチャレンジ応援補助金（デジタル化）へ補正。補助率2分の1、上限50万円、ソフトウェア・連携ハードウェア等を確認。
- `toyohashi-gifted-support`: 全国大会出場者激励金へ補正。大会区分別の激励金、開催7日前までの提出を確認。
- `toyohashi-mental-health`: 精神障害者医療費助成制度へ補正。自立支援医療（精神通院）自己負担分助成、手帳1・2級の全疾患助成を確認。
- `toyohashi-newlywed-housing`: 空家利活用改修費補助金へ補正。空家バンク登録物件、新婚・子育て世帯は補助率3分の2・上限66万円を確認。
- `toyohashi-newlywed-rent`: 同じく結婚新生活支援事業補助金の平成28年度末終了を確認し、通常一覧から除外。
- `toyohashi-nursing-home-reform`: 東三河広域連合の介護保険住宅改修費支給へ補正。手すり設置、段差解消等、改修費限度額20万円、1割負担の場合の支給上限18万円、着工前申請を確認。
- `toyohashi-preschool-free`: 幼児教育・保育の無償化へ補正。認定区分別の無償化、市独自補助対象、副食費軽減を確認。
- `toyohashi-school-lunch`: 学校給食費負担軽減対応補助金へ補正。学校給食費無償提供に併せ、給食を喫食しない児童生徒や市立以外の小中学校在籍者への給食費相当額助成を確認。
- `toyohashi-telework-bonus`: 市独自の現行テレワーク導入支援補助金は公式確認できず、雇用・労働関係ページの外部制度案内確認にとどめ通常一覧から除外。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...豊橋市19件 --concurrency 3 --timeout-ms 60000`: 初回は `toyohashi-bousai-equipment` の旧詳細URL `50220.htm` がHTTP 404。公式電子申請ポータル等へ差し替え、再監査で対象URLはすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 35`: 愛知県の未照合raw slugは41件から22件に減少。次の先頭候補は豊田市11件。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,856件から2,837件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,973件、activeWithoutOfficialSourceは2,841件、愛知県ローカル公式確認済みは83件。active全体4,814件に対する公式確認済みactive比率は約41.0%。
- `npm run build`: 速度改善方針により今回は省略。直前の一宮市Batch 92でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。愛知県raw gap完了時または公開前にまとめて実行する。

次回再開位置:

- 愛知県Batch 98として豊田市11件（`toyota-birth-bonus` / `toyota-bousai-equipment` / `toyota-childcare-subsidy` / `toyota-disability-medical` / `toyota-energy-support` / `toyota-infertility-treatment` / `toyota-newlywed-rent` / `toyota-nursing-home-reform` / `toyota-school-lunch` / `toyota-sme-equipment` / `toyota-telework-bonus`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 98 追加ログ

豊田市11件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。先に豊橋市Batch 97の同一slug二重登録を確認し、先勝ちロジックで古い内容が表示される危険があったため、精度補正済みの後半19件だけを残す形で重複を除去した。豊田市の生成データは制度名・金額をそのまま採用せず、豊田市公式ページ、公式PDF、電子申請案内で確認できる制度へ置換した。受付終了済みの制度は期限切れ扱いで通常一覧から除外した。

追加・補正:

- `toyota-birth-bonus`: 妊婦等包括相談支援事業／妊婦のための支援給付事業へ補正。1回目5万円、2回目は妊娠していた子どもの人数×5万円を確認。
- `toyota-bousai-equipment`: 感震ブレーカー設置等補助金へ補正。分電盤タイプ上限2万円、簡易・コンセントタイプ上限3,000円、2027年3月1日締切を確認。
- `toyota-childcare-subsidy`: 幼児教育・保育の無償化と保育料軽減へ補正。3〜5歳児等の無償化、0〜2歳児の多子軽減、市内こども園等3〜5歳児の給食費無料化を確認。
- `toyota-disability-medical`: 心身障がい者医療費助成制度へ補正。保険診療分の医療費自己負担額助成と保険適用外費用の対象外扱いを確認。
- `toyota-energy-support`: エコファミリー支援補助金へ補正。スマートハウス化設備、燃料電池、蓄電池、V2H、次世代自動車等の導入支援と令和8年度受付期間を確認。
- `toyota-infertility-treatment`: 特定不妊治療費（先進医療）補助金へ補正。先進医療費の10分の7、上限10万円、治療終了日から1年以内申請を確認。
- `toyota-newlywed-rent`: 結婚新生活支援補助金へ補正。住宅取得費用、リフォーム費用、住宅賃借費用、引越費用、最大60万円を確認。
- `toyota-nursing-home-reform`: すこやか住宅リフォーム費（高齢者等）の助成へ補正。対象工事費上限20万円の9割、最大18万円、工事前相談を確認。
- `toyota-school-lunch`: 豊田市立学校給食費の無償化へ補正。令和6年4月から市立小・中・特別支援学校の給食費無償化を確認。
- `toyota-sme-equipment`: 建設業者高度安全機械等導入促進補助金へ補正。補助率30〜50%、限度額500万円または1,000万円、受付期間が2026年4月30日に短縮済みで通常一覧から除外。
- `toyota-telework-bonus`: UIJターン就業・起業者定住応援補助金（移住支援金）へ補正。テレワーク要件、世帯100万円、18歳未満加算100万円、単身60万円を確認。

確認:

- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし。
- `node -e ...duplicate slugs`: 重複slug 0。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...豊田市11件 --concurrency 3 --timeout-ms 60000`: 初回は保育無償化の旧URLがHTTP 404。現行パスへ差し替え、再監査で採用sourceUrls 14件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 45`: 愛知県の未照合raw slugは22件から11件に減少。残りは名古屋市11件のみ。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,837件から2,826件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,983件、activeWithoutOfficialSourceは2,830件、愛知県ローカル公式確認済みは93件。active全体4,813件に対する公式確認済みactive比率は約41.2%。
- `npm run build`: 速度改善方針により今回は省略。直前の一宮市Batch 92でbuild成功済みで、今回は対象ESLint・URL検証・coverage・raw gap監査が通っている。愛知県raw gap完了時または公開前にまとめて実行する。

次回再開位置:

- 愛知県Batch 99として名古屋市11件（`nagoya-barrier-free` / `nagoya-birth-bonus` / `nagoya-childcare-subsidy` / `nagoya-education-support` / `nagoya-elderly-support` / `nagoya-housing-purchase` / `nagoya-infertility` / `nagoya-mental-health` / `nagoya-nursing-equipment` / `nagoya-sme-equipment-support` / `nagoya-women-startup`）を公式一次情報で確認する。

## 2026-07-02 愛知県Batch 99 追加ログ

名古屋市11件を公式一次情報で確認し、`src/data/grants/verified-local-misc-2026.ts` に追加・補正した。既存の名古屋市11件が先勝ちで残ると古い内容が表示されるため、古い名古屋市セットを削除し、新しい公式補正版だけを残した。これにより愛知県の未照合raw slugは0件になった。

追加・補正:

- `nagoya-birth-bonus`: 妊婦・子育て家庭応援金へ補正。妊婦1人5万円、胎児1人5万円を確認。
- `nagoya-childcare-subsidy`: ナゴヤわくわくプレゼント事業「BABY YELL!」へ補正。50,000ポイント（5万円相当）を確認。
- `nagoya-education-support`: 就学援助（未来まなび応援金）へ補正。入学準備金、学用品費、学校給食費等を確認。
- `nagoya-barrier-free`: 障害者住宅改造補助金へ補正。上限80万円、介護保険認定者は60万円、改造前申請を確認。
- `nagoya-housing-purchase`: フラット35S等融資利子補給制度へ補正。子育て世帯等の中古住宅取得、最大50万円を確認。
- `nagoya-infertility`: 不育症検査費用助成事業へ補正。先進医療の検査費用、上限6万円を確認。
- `nagoya-mental-health`: 自立支援医療（精神通院医療）へ補正。自己負担原則1割、通年申請を確認。
- `nagoya-nursing-equipment`: 介護保険の福祉用具購入費支給へ補正。利用限度額10万円、1割負担者は最大9万円を確認。
- `nagoya-elderly-support`: 高齢者生きがい活動促進事業へ補正。上限100万円、農福連携は200万円、令和8年度申込期限2026年5月1日で受付終了扱い。
- `nagoya-sme-equipment-support`: 航空宇宙産業設備投資促進補助金へ補正。補助率10%以内、上限1,000万円、2026年9月30日締切を確認。
- `nagoya-women-startup`: スタートアップ企業支援補助金へ補正。女性専用補助金は公式確認できず、上限100万円の一般創業補助へ補正し、令和8年度募集終了扱い。

確認:

- `node -e ...duplicate slugs`: 重複slug 0。
- `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`: エラー0。
- `node scripts/check-grant-source-urls.mjs --slug ...名古屋市11件 --concurrency 3 --timeout-ms 60000`: 採用sourceUrls 14件はすべてHTTP 200、failures 0。
- `node scripts/audit-raw-verified-gaps.mjs --prefecture 愛知県 --limit 35`: 愛知県の未照合raw slugは11件から0件に減少。
- `node scripts/audit-raw-verified-gaps.mjs --limit 10`: 全国未照合raw slugは2,826件から2,815件に減少。
- `npm run audit:coverage`: failures 0。公式確認済みactiveは1,992件、activeWithoutOfficialSourceは2,819件、愛知県ローカル公式確認済みは102件。active全体4,811件に対する公式確認済みactive比率は約41.4%。
- `npm run build`: 速度改善方針により今回は省略。愛知県raw gapは完了したため、公開前の節目でまとめて実行する。

次回再開位置:

- 次は `node scripts/audit-raw-verified-gaps.mjs --limit 10` の先頭に出た愛媛県・今治市周辺（`ehime-mikan-farming` / `imabari-birth-bonus` / `imabari-block-wall-removal` / `imabari-child-medical-aid` / `imabari-childcare-subsidy` / `imabari-elderly-support` / `imabari-elderly-taxi` / `imabari-health-checkup-subsidy` / `imabari-housing-purchase` / `imabari-infertility` など）を公式一次情報で確認する。
