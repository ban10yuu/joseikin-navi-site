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
- [x] 国の基幹福祉・教育・医療制度13件を公式確認済みデータで追加・置換（高校就学支援金、JASSO奨学金、出産育児一時金、育児休業給付金、高額療養費、自立支援医療、難病医療費助成、小児慢性特定疾病医療費助成、生活保護、生活困窮者自立支援、年金生活者支援給付金、補装具費、高額介護サービス費）
- [x] 追加後の `npx eslint src/data/grants/verified-national-core-welfare-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（783静的ページ）
- [x] `npm run audit:coverage`（期限切れ3件、手動公式確認済み207件、公式リンクあり未確認48件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ3件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1558件OK / broken 0
- [x] MHLW/ハローワーク系の雇用・職業訓練制度9件を公式確認済みデータで追加・置換（人材開発支援助成金、キャリアアップ助成金、両立支援等助成金、トライアル雇用助成金、特定求職者雇用開発助成金、職業訓練受講給付金、専門実践教育訓練給付金、失業給付、雇用調整助成金）
- [x] 追加後の `npx eslint src/data/grants/verified-national-employment-support-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（787静的ページ）
- [x] `npm run audit:coverage`（期限切れ3件、手動公式確認済み216件、公式リンクあり未確認39件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ3件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1568件OK / broken 0
- [x] 恒常的な全国支援制度7件を公式確認済みデータで追加・置換（地域おこし協力隊、住宅ローン減税、災害障害見舞金、障害者雇用納付金関係助成金、介護保険負担限度額認定、幼児教育・保育無償化、妊婦のための支援給付）
- [x] 追加後の `npx eslint src/data/grants/verified-national-continuous-support-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（796静的ページ）
- [x] `npm run audit:coverage`（期限切れ3件、手動公式確認済み223件、公式リンクあり未確認32件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ3件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1584件OK / broken 0
- [x] 国の事業者・住宅系3件を公式確認済みデータで追加・置換（デジタル化・AI導入補助金2026、ものづくり補助金第23次受付終了、長期優良住宅化リフォーム推進事業令和7年度受付終了）
- [x] 追加後の `npx eslint src/data/grants/verified-national-business-legacy-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（793静的ページ）
- [x] `npm run audit:coverage`（期限切れ5件、手動公式確認済み224件、公式リンクあり未確認29件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ5件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1584件OK / broken 0
- [x] 自治体・地方公的制度10件を公式確認済みデータで追加・置換（東京都創業助成、群馬県技術革新チャレンジ受付終了、鳥取県体験型観光、奈良県県産材住宅助成、群馬県/鳥取県/高知県移住支援金、東京都ベビーシッター、大阪府後期高齢者高額療養費、秋田県福祉医療）
- [x] 追加後の `npx eslint src/data/grants/verified-local-misc-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（789静的ページ）
- [x] `npm run audit:coverage`（期限切れ6件、手動公式確認済み233件、公式リンクあり未確認19件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ6件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1588件OK / broken 0
- [x] 民間・NPO系19件を公式確認済みデータで追加・置換（赤い羽根、住友財団、洲崎福祉財団、正力厚生会、電通育英会、太陽生命厚生財団、つなぐいのち基金を通常公開。締切済み・公式確認不可12件は通常一覧から除外）
- [x] 追加後の `npx eslint src/data/grants/verified-ngo-misc-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（783静的ページ）
- [x] `npm run audit:coverage`（期限切れ18件、手動公式確認済み240件、公式リンクあり未確認0件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ18件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1584件OK / broken 0
- [x] 全国・国制度11件を公式確認済みデータで追加・置換（年金生活者支援給付金の旧slug互換、先進的窓リノベ2026、給湯省エネ2026、介護福祉士修学資金等貸付、障害基礎年金、教育訓練給付制度、傷病手当金、ひとり親家庭学び直し支援、職業訓練受講給付金の互換slug、介護職員等処遇改善加算、すまい給付金受付終了）
- [x] 追加後の `npx eslint src/data/grants/verified-national-misc-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（813静的ページ）
- [x] `npm run audit:coverage`（期限切れ19件、手動公式確認済み250件、公式リンクあり未確認0件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ19件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1635件OK / broken 0
- [x] 全国・民間/財団系20件を公式確認済みデータで追加・置換（通常公開: 朝日新聞文化財団、三菱UFJ信託奨学財団。締切済み13件と公式助成確認不可5件、都道府県別締切で募集終了1件は通常一覧から除外）
- [x] 追加後の `npx eslint src/data/grants/verified-ngo-national-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（858静的ページ）
- [x] `npm run audit:coverage`（期限切れ37件、手動公式確認済み252件、公式リンクあり未確認0件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ37件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1717件OK / broken 0
- [x] 本番デプロイ `joseikin-navi-site-jl5pxb7ee-banjo-yujis-projects.vercel.app` / alias `https://joseikin-navi-site.vercel.app`
- [x] 本番HTMLスポット確認（通常公開2件はsitemap掲載、期限切れ/公式確認不可18件は警告表示・noindex・sitemap除外）
- [x] 実ブラウザ確認（home、grants一覧、通常公開詳細、期限切れ詳細、mobile home。重大console error 0）
- [x] 競合サイト比較を `tasks/competitor-comparison.md` に記録
- [x] 全国拡張計画を `tasks/nationwide-expansion-plan.md` に記録
- [x] 東京都ローカル20件を公式確認済みデータで追加・置換（通常公開17件、期限切れ/募集なし3件は通常一覧から除外）
- [x] 追加前に対象公式URL 27件の到達確認（全件HTTP 200）
- [x] 追加後の `npx eslint src/data/grants/verified-tokyo-local-2026.ts src/lib/grants.ts`（エラー0）
- [x] 追加後の `npm run lint`（既存警告5件、エラー0）
- [x] 追加後の `npm run build`（912静的ページ）
- [x] `npm run audit:coverage`（期限切れ40件、手動公式確認済み269件、公式リンクあり未確認0件、failures 0）
- [x] `npm run audit:deadlines`（期限切れ40件を通常一覧から除外、failures 0）
- [x] `npm run audit:links` 1815件OK / broken 0
- [x] 生成HTMLスポット確認（通常公開17件はsitemap掲載、期限切れ/募集なし3件は警告表示・noindex・sitemap除外）
- [ ] 全国網羅の次段階: 公式確認済みデータを都道府県・市区町村単位で追加し、未確認LLM生成データを順次置換する
