import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { containsBrowserBoilerplate } from './lib/content-audit-rules.mjs';

const writeChanges = process.argv.includes('--write');
const root = process.cwd();
const reportPath = path.join(root, 'reports', 'content-audit.json');
const grantsDir = path.join(root, 'src', 'data', 'grants');
const replacementByField = {
  maxAmount: '支援内容は公式ページで確認',
  eligibility: '公式ページ記載の対象要件を満たす方',
  applicationPeriod: '申請期限や手続きの時期は公式ページで確認',
  description: '制度の概要、対象、支援内容は公式ページでご確認ください。',
  overview: 'この制度は自治体の公式ページに掲載されている支援制度です。',
  details: '対象、支援内容、申請方法は公式ページでご確認ください。',
};

const report = JSON.parse(await readFile(reportPath, 'utf8'));
const targetSlugs = [
  ...new Set(
    report.issues
      .filter((issue) => issue.code === 'PUBLIC_BROWSER_BOILERPLATE')
      .map((issue) => issue.slug),
  ),
];
const fileNames = (await readdir(grantsDir)).filter((fileName) => fileName.endsWith('.ts'));
const sourceFiles = new Map();

for (const fileName of fileNames) {
  const filePath = path.join(grantsDir, fileName);
  sourceFiles.set(filePath, await readFile(filePath, 'utf8'));
}

const changedFiles = new Set();
const repaired = [];
const alreadyRepaired = [];
const replacedFields = {};

for (const slug of targetSlugs) {
  const slugPatterns = [
    `"slug": "${slug}"`,
    `"slug":"${slug}"`,
    `slug: "${slug}"`,
    `slug:"${slug}"`,
    `'slug': '${slug}'`,
    `'slug':'${slug}'`,
    `slug: '${slug}'`,
    `slug:'${slug}'`,
  ];
  const matchingFiles = [...sourceFiles.entries()].filter(([, source]) =>
    slugPatterns.some((pattern) => source.includes(pattern)),
  );

  if (matchingFiles.length !== 1) {
    throw new Error(`${slug}: 対象レコードが${matchingFiles.length}件見つかりました。`);
  }

  const [filePath, source] = matchingFiles[0];
  const slugIndex = Math.min(
    ...slugPatterns
      .map((pattern) => source.indexOf(pattern))
      .filter((index) => index >= 0),
  );
  const nextSlugIndexes = [
    '"slug": "',
    '"slug":"',
    'slug: "',
    'slug:"',
    "'slug': '",
    "'slug':'",
    "slug: '",
    "slug:'",
  ]
    .map((pattern) => source.indexOf(pattern, slugIndex + 1))
    .filter((index) => index >= 0);
  const recordEnd = nextSlugIndexes.length > 0 ? Math.min(...nextSlugIndexes) : source.length;
  const record = source.slice(slugIndex, recordEnd);
  let updatedRecord = record;
  const repairedFields = [];

  for (const [field, replacement] of Object.entries(replacementByField)) {
    const fieldPattern = new RegExp(
      `((?:"${field}"|'${field}'|${field})\\s*:\\s*)("(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*')`,
    );
    updatedRecord = updatedRecord.replace(fieldPattern, (match, prefix, quotedValue) => {
      if (!containsBrowserBoilerplate(quotedValue)) return match;
      repairedFields.push(field);
      replacedFields[field] = (replacedFields[field] ?? 0) + 1;
      return `${prefix}${JSON.stringify(replacement)}`;
    });
  }

  if (repairedFields.includes('maxAmount')) {
    updatedRecord = updatedRecord.replace(
      /("?maxAmountNum"?\s*:\s*)-?\d+/,
      (_match, prefix) => `${prefix}0`,
    );
  }

  if (repairedFields.length === 0) {
    alreadyRepaired.push(slug);
    continue;
  }

  const updatedSource = `${source.slice(0, slugIndex)}${updatedRecord}${source.slice(recordEnd)}`;
  sourceFiles.set(filePath, updatedSource);
  changedFiles.add(filePath);
  repaired.push({ slug, fields: repairedFields });
}

if (writeChanges) {
  for (const filePath of changedFiles) {
    await writeFile(filePath, sourceFiles.get(filePath), 'utf8');
  }
}

console.log(JSON.stringify({
  mode: writeChanges ? 'write' : 'dry-run',
  repaired: repaired.length,
  alreadyRepaired: alreadyRepaired.length,
  replacedFields,
  changedFiles: [...changedFiles].map((filePath) => path.relative(root, filePath)),
}, null, 2));
