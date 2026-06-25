# 助成金ナビ 構築タスク

## Phase 1: スキャフォールド
- [x] Next.js プロジェクト作成
- [x] @vercel/analytics インストール
- [x] next.config.ts (output: export)

## Phase 2: 型定義・データ構造
- [ ] src/lib/types.ts
- [ ] src/data/grants/ (助成金データ)
- [ ] src/lib/grants.ts (集約・フィルタ)

## Phase 3: CSS・テーマ
- [ ] src/app/globals.css (青/緑ライトテーマ)

## Phase 4: コンポーネント
- [ ] Header.tsx (ナビ、検索)
- [ ] Footer.tsx
- [ ] GrantCard.tsx (助成金カード、金額目立つ)
- [ ] FilterPanel.tsx (都道府県・カテゴリフィルタ)
- [ ] SubscribeForm.tsx (メール登録+パーソナライズ)
- [ ] AdBanner.tsx
- [ ] Sidebar.tsx
- [ ] JsonLd.tsx

## Phase 5: ページ
- [ ] layout.tsx (メタデータ、SEO)
- [ ] page.tsx (ホーム、助成金一覧+フィルタ)
- [ ] grant/[slug]/page.tsx (助成金詳細)
- [ ] category/[slug]/page.tsx (カテゴリ一覧)
- [ ] prefecture/[slug]/page.tsx (都道府県別)
- [ ] subscribe/page.tsx (メール登録)
- [ ] tag/[slug]/page.tsx (タグページ)
- [ ] privacy/page.tsx
- [ ] contact/page.tsx
- [ ] not-found.tsx
- [ ] sitemap.ts

## Phase 6: 助成金データ生成 (100件+)
- [ ] 全国制度 (~30件)
- [ ] 都道府県制度 (~50件)
- [ ] NGO・財団 (~20件)

## Phase 7: 静的ファイル
- [ ] public/favicon.svg
- [ ] public/robots.txt
- [ ] public/ads.txt

## Phase 8: ビルド・デプロイ
- [ ] npx next build 成功
- [ ] Git init & push
- [ ] Vercel デプロイ

---

## 2026-06-25 全国拡張・期限/リンク品質

- [x] 期限切れ制度を公開一覧・検索・sitemapから除外する共通判定を追加
- [x] 期限切れ詳細ページに「これは期限が切れています」と `noindex, follow` を追加
- [x] 期限切れ詳細ページからのタグリンク切れを防ぐため、期限切れ由来タグの静的生成を維持
- [x] 期限切れ制御の再実行可能な成果物監査 `npm run audit:deadlines` を追加
- [x] 全国拡張の現在地を測る再実行可能なカバレッジ監査 `npm run audit:coverage` を追加
- [x] `npm run lint`
- [x] `npm run build`
- [x] 生成HTML/XMLのリンク監査 1052件OK / broken 0
- [x] 子ども医療費助成の都道府県公式確認済みデータを8件追加（北海道、埼玉県、京都府、奈良県、広島県、沖縄県、富山県、新潟県）
- [x] 追加後の生成HTML/XMLリンク監査 1102件OK / broken 0
- [x] 子ども医療費助成の都道府県公式確認済みデータを8件追加（岩手県、宮城県、秋田県、栃木県、福井県、長野県、岐阜県、静岡県）
- [x] 追加後の生成HTML/XMLリンク監査 1137件OK / broken 0
- [x] 子ども医療費助成の都道府県公式確認済みデータを15件追加（青森県、三重県、兵庫県、鳥取県、島根県、徳島県、香川県、愛媛県、高知県、佐賀県、長崎県、熊本県、大分県、宮崎県、鹿児島県）
- [x] 子ども医療費助成の都道府県カバー 47/47 到達
- [x] 追加公式URL・補助ソースURL 19件すべてHTTP 200
- [x] `npm run lint`（既存警告5件、エラー0）
- [x] `npm run build`（640静的ページ）
- [x] 生成HTML/XMLリンク監査 1208件OK / broken 0
- [x] 再利用可能なリンク監査スクリプト `npm run audit:links` を追加
- [x] Tier5市町村の子ども医療費助成11件を公式確認版で追加・置換（弘前市、伊勢市、伊丹市、米子市、出雲市、丸亀市、新居浜市、唐津市、八代市、中津市、薩摩川内市）
- [x] 追加11件の公式URL・補助ソースURL 14件すべてHTTP 200
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（662静的ページ）
- [x] `npm run audit:links` 1254件OK / broken 0
- [x] Tier5市町村の子ども医療費助成24件を公式確認版で追加・置換（北見市、江別市、小樽市、千歳市、花巻市、大崎市、名取市、大仙市、酒田市、会津若松市、須賀川市、土浦市、古河市、足利市、佐野市、桐生市、館林市、秩父市、入間市、朝霞市、野田市、成田市、我孫子市、青梅市）
- [x] 追加24件の公式URL・補助ソースURL 44件すべてHTTP 200
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（710静的ページ）
- [x] `npm run audit:links` 1370件OK / broken 0
- [x] Tier5市町村の子ども医療費助成25件を公式確認版で追加・置換（昭島市、小平市、日野市、東村山市、国分寺市、小田原市、秦野市、海老名市、三条市、燕市、高岡市、白山市、上田市、飯田市、各務原市、沼津市、磐田市、春日井市、安城市、彦根市、宇治市、茨木市、池田市、橿原市、浦添市）
- [x] 追加25件の公式URL・補助ソースURL 62件すべてHTTP 200
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（758静的ページ）
- [x] `npm run audit:links` 1507件OK / broken 0
- [x] 東村山市公式サイトのbot向け403誤検知を避けるため、リンク監査のUser-Agentをブラウザ相当に更新
- [x] 全国支援カテゴリの公式確認済みデータ8件を追加・置換（住居確保給付金、高等教育の修学支援新制度、就学援助制度、生活福祉資金貸付制度、被災者生活再建支援金、災害援護資金2slug、介護休業給付金）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（764静的ページ）
- [x] `npm run audit:coverage`（手動公式確認済み193件、公式リンクあり未確認64件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ1件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1517件OK / broken 0
- [x] 終了済み全国制度の期限制御を追加（こどもエコすまい支援事業、事業再構築補助金）
- [x] 住民税非課税世帯給付金を現行の自治体実施・重点支援地方交付金ベースの記載に公式確認済み置換
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（768静的ページ）
- [x] `npm run audit:coverage`（期限切れ3件、手動公式確認済み194件、公式リンクあり未確認61件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ3件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1525件OK / broken 0
- [ ] 全国網羅の次段階: 公式確認済みデータを都道府県・市区町村単位で追加し、未確認LLM生成データを順次置換する
