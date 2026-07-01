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
