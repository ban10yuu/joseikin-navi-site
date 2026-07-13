import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appRoot = path.join(root, '.next', 'server', 'app');
if (!fs.existsSync(appRoot)) throw new Error('.next/server/app がありません。先に npm run build を実行してください。');

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : entry.name.endsWith('.html') ? [absolute] : [];
  });
}

function routeFor(file) {
  const relative = path.relative(appRoot, file).replaceAll(path.sep, '/').replace(/\.html$/, '');
  return relative === 'index' ? '/' : `/${relative}/`;
}

function decodeHtml(value = '') {
  return value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
}

function normalizeRoute(value) {
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    // 不正なエンコードは後段で未生成リンクとして検出する。
  }
  const compact = decoded.replace(/\/+/g, '/');
  return compact.endsWith('/') || path.extname(compact) ? compact : `${compact}/`;
}

const files = walk(appRoot);
const pages = files.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  return {
    file,
    route: routeFor(file),
    html,
    title: decodeHtml(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? ''),
    description: decodeHtml(html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? ''),
    noindex: /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),
  };
});
const routes = new Set(pages.map((page) => normalizeRoute(page.route)));
const issues = [];
const add = (severity, code, route, message) => issues.push({ severity, code, route, message });
const dynamicPrefixes = ['/grants/', '/grant/', '/tag/'];
const assetsPrefixes = ['/_next/', '/images/', '/favicon', '/api/'];

for (const page of pages) {
  if (!page.title) add('critical', 'MISSING_TITLE', page.route, 'titleがありません。');
  if (!page.description) add('warning', 'MISSING_DESCRIPTION', page.route, 'descriptionがありません。');
  if (/助成金診断クイズ|全国2,500件以上|必ず受給できる|条件を満たせばほぼ確実|生成データ|HTTP 200|Last-Modified|補正理由/.test(page.html)) add('critical', 'FORBIDDEN_PUBLIC_COPY', page.route, '生成HTMLに禁止表現があります。');
  for (const match of page.html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const href = match[1].replace(/\/+/g, '/');
    if (assetsPrefixes.some((prefix) => href.startsWith(prefix))) continue;
    const normalized = normalizeRoute(href);
    if (!routes.has(normalized) && !dynamicPrefixes.some((prefix) => normalized.startsWith(prefix))) add('critical', 'BROKEN_INTERNAL_LINK', page.route, `リンク先が生成されていません：${normalized}`);
  }
  for (const match of page.html.matchAll(/data-ad-label[^>]*>\s*(広告|PR)\s*</g)) {
    const nearby = page.html.slice(match.index, match.index + 800);
    if (!/adsbygoogle|affiliate_impression|sponsored/.test(nearby)) add('critical', 'EMPTY_AD_LABEL', page.route, `${match[1]}ラベルの後に広告本体がありません。`);
  }
}

for (const field of ['title', 'description']) {
  const map = new Map();
  pages.filter((page) => !page.noindex && page[field]).forEach((page) => map.set(page[field], [...(map.get(page[field]) ?? []), page.route]));
  for (const [value, duplicatedRoutes] of map) if (duplicatedRoutes.length > 1) add('warning', `DUPLICATE_META_${field.toUpperCase()}`, duplicatedRoutes[0], `${duplicatedRoutes.length}ページで重複：${value.slice(0, 100)}`);
}

const summary = {
  generatedAt: new Date().toISOString(),
  htmlPages: pages.length,
  indexablePages: pages.filter((page) => !page.noindex).length,
  critical: issues.filter((issue) => issue.severity === 'critical').length,
  warnings: issues.filter((issue) => issue.severity === 'warning').length,
};
const reportDir = path.join(root, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, 'build-audit.json'), `${JSON.stringify({ summary, issues }, null, 2)}\n`);
fs.writeFileSync(path.join(reportDir, 'build-audit.md'), `# ビルド成果物監査\n\n| 指標 | 件数 |\n|---|---:|\n| HTMLページ | ${summary.htmlPages.toLocaleString('ja-JP')} |\n| index可能 | ${summary.indexablePages.toLocaleString('ja-JP')} |\n| 重大エラー | ${summary.critical.toLocaleString('ja-JP')} |\n| 警告 | ${summary.warnings.toLocaleString('ja-JP')} |\n\n## 指摘\n\n${issues.length ? issues.slice(0, 500).map((issue) => `- ${issue.severity} / ${issue.code} / ${issue.route}: ${issue.message}`).join('\n') : '- 指摘なし'}\n`);
console.log(JSON.stringify(summary, null, 2));
if (summary.critical > 0) process.exitCode = 1;
