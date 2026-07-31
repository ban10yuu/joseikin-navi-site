import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { hasTruncatedApplicationPeriod } from './lib/content-audit-rules.mjs';

const writeChanges = process.argv.includes('--write');
const root = process.cwd();
const reportPath = path.join(root, 'reports', 'content-audit.json');
const grantsDirectory = path.join(root, 'src', 'data', 'grants');
const report = JSON.parse(await readFile(reportPath, 'utf8'));
const targetSlugs = report.issues
  .filter((issue) => issue.code === 'TRUNCATED_APPLICATION_PERIOD')
  .map((issue) => issue.slug);
const fileNames = (await readdir(grantsDirectory)).filter((fileName) => fileName.endsWith('.ts'));
const sourceFiles = new Map();

for (const fileName of fileNames) {
  const filePath = path.join(grantsDirectory, fileName);
  sourceFiles.set(filePath, await readFile(filePath, 'utf8'));
}

const changedFiles = new Set();
const repaired = [];

for (const slug of targetSlugs) {
  const slugPatterns = [`"slug": "${slug}"`, `"slug":"${slug}"`, `slug:"${slug}"`];
  const matchingFiles = [...sourceFiles.entries()].filter(([, source]) =>
    slugPatterns.some((pattern) => source.includes(pattern)),
  );
  if (matchingFiles.length !== 1) {
    throw new Error(`${slug}: 対象レコードが${matchingFiles.length}件見つかりました。`);
  }

  const [filePath, source] = matchingFiles[0];
  const slugIndex = Math.min(
    ...slugPatterns.map((pattern) => source.indexOf(pattern)).filter((index) => index >= 0),
  );
  const nextSlugIndexes = ['"slug": "', '"slug":"', 'slug:"']
    .map((pattern) => source.indexOf(pattern, slugIndex + 1))
    .filter((index) => index >= 0);
  const recordEnd = nextSlugIndexes.length > 0 ? Math.min(...nextSlugIndexes) : source.length;
  const record = source.slice(slugIndex, recordEnd);
  const fieldPattern = /("?applicationPeriod"?\s*:\s*)("(?:\\.|[^"\\])*")/;
  const match = record.match(fieldPattern);
  if (!match) throw new Error(`${slug}: applicationPeriodが見つかりません。`);

  const currentValue = JSON.parse(match[2]);
  if (!hasTruncatedApplicationPeriod(currentValue)) {
    throw new Error(`${slug}: 申請期間が監査結果と一致しません。`);
  }
  const updatedRecord = record.replace(
    fieldPattern,
    `$1${JSON.stringify('申請期限や手続きの時期は公式ページで確認')}`,
  );
  const updatedSource = `${source.slice(0, slugIndex)}${updatedRecord}${source.slice(recordEnd)}`;
  sourceFiles.set(filePath, updatedSource);
  changedFiles.add(filePath);
  repaired.push(slug);
}

if (writeChanges) {
  for (const filePath of changedFiles) {
    await writeFile(filePath, sourceFiles.get(filePath), 'utf8');
  }
}

console.log(JSON.stringify({
  mode: writeChanges ? 'write' : 'dry-run',
  repaired: repaired.length,
  changedFiles: [...changedFiles].map((filePath) => path.relative(root, filePath)),
}, null, 2));
