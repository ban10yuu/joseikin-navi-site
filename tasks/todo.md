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
