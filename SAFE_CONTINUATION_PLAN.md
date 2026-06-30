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
- `main...origin/main` は同期状態。
- `src/lib/grants.ts` は公式確認済みデータを旧生成データより前に読み込み、slug重複時に先勝ちdedupeする。旧生成データは削らず、公式確認済みデータで置換する運用。
- `npm run audit:coverage` は成功。2026-07-01時点の結果:
  - rawDefinitionsAfterDedupe: 5,091
  - activePublished: 4,994
  - expired: 97
  - officialLinkedActive: 1,358
  - manuallyVerifiedActive: 1,358
  - activeWithoutOfficialSource: 3,636
  - officialLinkedButNotManuallyVerified: 0
  - prefectureCoverage: 47/47 都道府県で公式リンクあり・手動確認済みあり
  - activeExpiredLeaks: 0

## 現在の未コミット状態

既存の未コミット差分があるため、今後も不用意に巻き戻さない。

- 今回の助成金データ継続で触るファイル:
  - `SAFE_CONTINUATION_PLAN.md`
  - `tasks/todo.md`
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

1. ステージ済みの鹿児島・沖縄3件について、必要なら公式URLの再到達確認、`npm run build`、`npm run audit:deadlines`、`npm run audit:links` まで通してから isolated commit/push する。
2. 未公式確認3,675件を、公式一次情報ベースで順次置換する。
3. 未公式確認の上位都道府県:
   - 東京都 282
   - 埼玉県 233
   - 千葉県 178
   - 北海道 163
   - 福岡県 127
   - 神奈川県 124
   - 栃木県 121
   - 大阪府 119
   - 愛知県 112
   - 静岡県 91
4. 未公式確認の上位カテゴリ:
   - 子育て・出産 737
   - 住宅・リフォーム 463
   - 医療・健康 444
   - 教育・資格 435
   - 就職・転職・起業 432
   - 生活支援 427
   - 介護・福祉 379
   - 災害・緊急 358

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
