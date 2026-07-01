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
