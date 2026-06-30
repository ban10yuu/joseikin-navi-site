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
  - activePublished: 4,995
  - expired: 96
  - officialLinkedActive: 1,320
  - manuallyVerifiedActive: 1,320
  - activeWithoutOfficialSource: 3,675
  - officialLinkedButNotManuallyVerified: 0
  - prefectureCoverage: 47/47 都道府県で公式リンクあり・手動確認済みあり
  - activeExpiredLeaks: 0

## 現在の未コミット状態

既存の未コミット差分があるため、今後も不用意に巻き戻さない。

- ステージ済み:
  - `src/data/grants/verified-local-misc-2026.ts`
  - 追加内容: 鹿児島県「かごしまの稼ぐ力」、鹿児島市「プレミアム付商品券」、沖縄県「稼ぐ海外展開モデル」の3件。
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
