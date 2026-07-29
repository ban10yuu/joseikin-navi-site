import { build } from 'esbuild';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { buildExactDuplicateRedirects } from './lib/exact-duplicate-redirects.mjs';

const root = process.cwd();
const bundlePath = path.join(root, '.tmp-exact-duplicate-grants.mjs');
const redirectsPath = path.join(root, 'data', 'redirects.json');
const redirectMapPath = path.join(root, 'docs', 'redirect-map.csv');
const opportunitiesPath = path.join(root, 'src', 'config', 'search-console-opportunities.ts');

function csvCell(value) {
  const text = String(value);
  return /[",\n]/u.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function extractPreferredSlugs(source) {
  const preferred = new Set();
  for (const match of source.matchAll(/grantSlugs:\s*\[([^\]]+)\]/gu)) {
    for (const slugMatch of match[1].matchAll(/['"]([^'"]+)['"]/gu)) {
      preferred.add(slugMatch[1]);
    }
  }
  return preferred;
}

await build({
  entryPoints: [path.join(root, 'src', 'lib', 'grants-source.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile: bundlePath,
  tsconfig: path.join(root, 'tsconfig.json'),
  logLevel: 'warning',
});

try {
  const [source, redirectsJson, opportunitiesSource] = await Promise.all([
    import(`${pathToFileURL(bundlePath).href}?t=${Date.now()}`),
    readFile(redirectsPath, 'utf8'),
    readFile(opportunitiesPath, 'utf8'),
  ]);
  const existingRedirects = JSON.parse(redirectsJson);
  const preferredSlugs = extractPreferredSlugs(opportunitiesSource);
  const additions = buildExactDuplicateRedirects(
    source.getAllGrantsUnfiltered(),
    existingRedirects,
    preferredSlugs,
  );
  const redirects = [...existingRedirects, ...additions];

  await mkdir(path.dirname(redirectMapPath), { recursive: true });
  await writeFile(redirectsPath, `${JSON.stringify(redirects, null, 2)}\n`, 'utf8');
  await writeFile(
    redirectMapPath,
    [
      'old_url,new_url,status_code,reason',
      ...redirects.map((redirect) => [
        redirect.source,
        redirect.destination,
        redirect.statusCode,
        redirect.reason,
      ].map(csvCell).join(',')),
      '',
    ].join('\n'),
    'utf8',
  );

  console.log(`完全重複の301転送を追加: ${additions.length.toLocaleString('ja-JP')}件`);
  console.log(`転送総数: ${redirects.length.toLocaleString('ja-JP')}件`);
} finally {
  await rm(bundlePath, { force: true });
}
