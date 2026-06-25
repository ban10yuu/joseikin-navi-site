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
- [x] `npm run lint`
- [x] `npm run build`
- [x] 生成HTML/XMLのリンク監査 1052件OK / broken 0
- [x] 子ども医療費助成の都道府県公式確認済みデータを8件追加（北海道、埼玉県、京都府、奈良県、広島県、沖縄県、富山県、新潟県）
- [x] 追加後の生成HTML/XMLリンク監査 1102件OK / broken 0
- [x] 子ども医療費助成の都道府県公式確認済みデータを8件追加（岩手県、宮城県、秋田県、栃木県、福井県、長野県、岐阜県、静岡県）
- [x] 追加後の生成HTML/XMLリンク監査 1137件OK / broken 0
- [ ] 全国網羅の次段階: 公式確認済みデータを都道府県・市区町村単位で追加し、未確認LLM生成データを順次置換する
