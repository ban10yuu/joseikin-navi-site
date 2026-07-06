import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import { createRequire } from 'node:module';

const root = process.cwd();
const dataRoot = path.join(root, 'src', 'data', 'grants');
const tasksRoot = path.join(root, 'tasks');
const markdownPath = path.join(tasksRoot, 'progress-checklist.md');
const csvPath = path.join(tasksRoot, 'progress-checklist.csv');
const require = createRequire(import.meta.url);
const ts = require('typescript');
const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
  if (request.startsWith('@/')) {
    return originalResolveFilename.call(
      this,
      path.join(root, 'src', request.slice(2)),
      parent,
      isMain,
      options,
    );
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};

require.extensions['.ts'] = function compileTypeScript(module, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2017,
      esModuleInterop: true,
      verbatimModuleSyntax: false,
    },
    fileName: filename,
  });

  module._compile(output.outputText, filename);
};

function listGrantFiles() {
  return fs
    .readdirSync(dataRoot)
    .filter((file) => file.endsWith('.ts'))
    .sort()
    .map((file) => path.join(dataRoot, file));
}

function isRawSeedFile(file) {
  const basename = path.basename(file);
  return (
    /^city-batch\d+\.ts$/.test(basename) ||
    /^local(?:-batch\d+)?\.ts$/.test(basename) ||
    /^national(?:-new\d*)?\.ts$/.test(basename) ||
    /^ngo(?:-new)?\.ts$/.test(basename)
  );
}

function isVerifiedFile(file) {
  return /^verified-.*\.ts$/.test(path.basename(file));
}

function collectGrantArrays(file) {
  const exports = require(file);
  const grants = [];

  for (const value of Object.values(exports)) {
    if (!Array.isArray(value)) continue;
    for (const item of value) {
      if (item && typeof item === 'object' && typeof item.slug === 'string') {
        grants.push(item);
      }
    }
  }

  return grants;
}

function normalizeCell(value) {
  return String(value ?? '').replaceAll('\n', ' ').replaceAll('|', '／').trim();
}

function escapeCsv(value) {
  const text = String(value ?? '');
  if (!/[",\n]/.test(text)) return text;
  return `"${text.replaceAll('"', '""')}"`;
}

function statusLabel(remainingCount) {
  return remainingCount === 0 ? '完了' : '未完了';
}

function sortJapanese(left, right) {
  return String(left).localeCompare(String(right), 'ja');
}

function firstSlugList(slugs, limit = 8) {
  const selected = slugs.slice(0, limit);
  const suffix = slugs.length > limit ? ` 他${slugs.length - limit}件` : '';
  return `${selected.join(' / ')}${suffix}`;
}

function buildProgress() {
  const files = listGrantFiles();
  const rawFiles = files.filter(isRawSeedFile);
  const verifiedFiles = files.filter(isVerifiedFile);
  const verifiedSlugs = new Set();
  const rawBySlug = new Map();

  for (const file of verifiedFiles) {
    for (const grant of collectGrantArrays(file)) {
      verifiedSlugs.add(grant.slug);
    }
  }

  for (const file of rawFiles) {
    const relativeFile = path.relative(root, file);
    for (const grant of collectGrantArrays(file)) {
      if (!rawBySlug.has(grant.slug)) {
        rawBySlug.set(grant.slug, {
          slug: grant.slug,
          title: grant.title || '',
          organization: grant.organization || '',
          prefecture: grant.prefecture || '',
          category: grant.category || '',
          file: relativeFile,
        });
      }
    }
  }

  const rawUnique = [...rawBySlug.values()];
  const municipalityMap = new Map();
  const prefectureMap = new Map();

  for (const grant of rawUnique) {
    const prefecture = grant.prefecture || '(未設定)';
    const municipality = grant.organization || '(未設定)';
    const municipalityKey = `${prefecture}\u0000${municipality}`;

    if (!municipalityMap.has(municipalityKey)) {
      municipalityMap.set(municipalityKey, {
        prefecture,
        municipality,
        rawCount: 0,
        verifiedCount: 0,
        remainingCount: 0,
        remainingSlugs: [],
        remainingTitles: [],
      });
    }

    if (!prefectureMap.has(prefecture)) {
      prefectureMap.set(prefecture, {
        prefecture,
        rawCount: 0,
        verifiedCount: 0,
        remainingCount: 0,
        remainingSlugs: [],
      });
    }

    const municipalityEntry = municipalityMap.get(municipalityKey);
    const prefectureEntry = prefectureMap.get(prefecture);
    const verified = verifiedSlugs.has(grant.slug);

    municipalityEntry.rawCount += 1;
    prefectureEntry.rawCount += 1;

    if (verified) {
      municipalityEntry.verifiedCount += 1;
      prefectureEntry.verifiedCount += 1;
    } else {
      municipalityEntry.remainingCount += 1;
      municipalityEntry.remainingSlugs.push(grant.slug);
      municipalityEntry.remainingTitles.push(grant.title);
      prefectureEntry.remainingCount += 1;
      prefectureEntry.remainingSlugs.push(grant.slug);
    }
  }

  const municipalities = [...municipalityMap.values()].sort((left, right) =>
    sortJapanese(left.prefecture, right.prefecture) ||
    sortJapanese(left.municipality, right.municipality),
  );
  const prefectures = [...prefectureMap.values()].sort((left, right) =>
    right.remainingCount - left.remainingCount ||
    sortJapanese(left.prefecture, right.prefecture),
  );
  const nextMunicipalities = municipalities
    .filter((entry) => entry.remainingCount > 0)
    .sort((left, right) =>
      sortJapanese(left.prefecture, right.prefecture) ||
      sortJapanese(left.municipality, right.municipality),
    );

  return {
    generatedAt: new Date().toISOString(),
    rawFiles: rawFiles.length,
    verifiedFiles: verifiedFiles.length,
    rawUnique: rawUnique.length,
    verifiedUnique: verifiedSlugs.size,
    remainingUnique: rawUnique.filter((grant) => !verifiedSlugs.has(grant.slug)).length,
    rawVerifiedUnique: rawUnique.filter((grant) => verifiedSlugs.has(grant.slug)).length,
    completedMunicipalities: municipalities.filter((entry) => entry.remainingCount === 0).length,
    totalMunicipalities: municipalities.length,
    prefectures,
    municipalities,
    nextMunicipalities,
  };
}

function renderMarkdown(progress) {
  const lines = [];
  const localPrefectures = progress.prefectures.filter((entry) => entry.prefecture !== '全国');
  const completedPrefectures = localPrefectures.filter((entry) => entry.remainingCount === 0).length;

  lines.push('# 助成金ナビ 公式確認進捗チェックリスト');
  lines.push('');
  lines.push('このファイルは `node scripts/generate-progress-checklist.mjs` で自動生成します。手書き更新しないでください。');
  lines.push('');
  lines.push('## サマリー');
  lines.push('');
  lines.push(`- 生成日時: ${progress.generatedAt}`);
  lines.push(`- raw unique slugs: ${progress.rawUnique}`);
  lines.push(`- verified unique slugs: ${progress.verifiedUnique}`);
  lines.push(`- raw内の公式確認済み slugs: ${progress.rawVerifiedUnique}`);
  lines.push(`- 未照合 raw slugs: ${progress.remainingUnique}`);
  lines.push(`- 完了自治体/団体: ${progress.completedMunicipalities} / ${progress.totalMunicipalities}`);
  lines.push(`- raw gap 0 の都道府県: ${completedPrefectures} / ${localPrefectures.length}`);
  lines.push('');
  lines.push('## 次に進める候補');
  lines.push('');

  for (const entry of progress.nextMunicipalities.slice(0, 20)) {
    lines.push(
      `- ${entry.prefecture} ${entry.municipality}: 残り${entry.remainingCount}件（${firstSlugList(entry.remainingSlugs, 5)}）`,
    );
  }

  lines.push('');
  lines.push('## 都道府県別');
  lines.push('');
  lines.push('| 状態 | 都道府県 | raw | verified | 残り | 次のslug |');
  lines.push('|---|---:|---:|---:|---:|---|');

  for (const entry of progress.prefectures) {
    lines.push(
      `| ${statusLabel(entry.remainingCount)} | ${normalizeCell(entry.prefecture)} | ${entry.rawCount} | ${entry.verifiedCount} | ${entry.remainingCount} | ${normalizeCell(firstSlugList(entry.remainingSlugs, 5))} |`,
    );
  }

  lines.push('');
  lines.push('## 自治体・団体別');
  lines.push('');
  lines.push('| 状態 | 都道府県 | 自治体・団体 | raw | verified | 残り | 次のslug |');
  lines.push('|---|---|---|---:|---:|---:|---|');

  for (const entry of progress.municipalities) {
    lines.push(
      `| ${statusLabel(entry.remainingCount)} | ${normalizeCell(entry.prefecture)} | ${normalizeCell(entry.municipality)} | ${entry.rawCount} | ${entry.verifiedCount} | ${entry.remainingCount} | ${normalizeCell(firstSlugList(entry.remainingSlugs, 5))} |`,
    );
  }

  lines.push('');
  return `${lines.join('\n')}\n`;
}

function renderCsv(progress) {
  const rows = [
    [
      'status',
      'prefecture',
      'municipality',
      'raw_count',
      'verified_count',
      'remaining_count',
      'remaining_slugs',
      'remaining_titles',
    ],
  ];

  for (const entry of progress.municipalities) {
    rows.push([
      statusLabel(entry.remainingCount),
      entry.prefecture,
      entry.municipality,
      entry.rawCount,
      entry.verifiedCount,
      entry.remainingCount,
      entry.remainingSlugs.join(' '),
      entry.remainingTitles.join(' / '),
    ]);
  }

  return `${rows.map((row) => row.map(escapeCsv).join(',')).join('\n')}\n`;
}

function main() {
  const progress = buildProgress();
  fs.mkdirSync(tasksRoot, { recursive: true });
  fs.writeFileSync(markdownPath, renderMarkdown(progress));
  fs.writeFileSync(csvPath, renderCsv(progress));

  console.log(`wrote ${path.relative(root, markdownPath)}`);
  console.log(`wrote ${path.relative(root, csvPath)}`);
  console.log(`remaining raw slugs: ${progress.remainingUnique}`);
  console.log(`completed municipalities: ${progress.completedMunicipalities}/${progress.totalMunicipalities}`);
}

main();
