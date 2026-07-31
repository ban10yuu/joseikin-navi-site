import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { hasOverlongAmountExtraction } from './lib/content-audit-rules.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const targetPath = path.join(repositoryRoot, 'src/data/grants/verified-local-misc-2026.ts');
const shouldWrite = process.argv.includes('--write');
const declarationName = 'aichiOfficial009Grants';
const expectedAffectedCount = 28;

function findJsonArray(source) {
  const declarationStart = source.indexOf(`const ${declarationName}:`);
  const assignmentStart = source.indexOf('=', declarationStart);
  const arrayStart = source.indexOf('[', assignmentStart);
  if (declarationStart < 0 || assignmentStart < 0 || arrayStart < 0) {
    throw new Error(`${declarationName}の配列開始位置が見つかりません。`);
  }

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = arrayStart; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === '[') depth += 1;
    else if (character === ']' && --depth === 0) {
      return { start: arrayStart, end: index + 1 };
    }
  }
  throw new Error(`${declarationName}の配列終了位置が見つかりません。`);
}

let source = fs.readFileSync(targetPath, 'utf8');
const range = findJsonArray(source);
const records = JSON.parse(source.slice(range.start, range.end));
const repairedSlugs = [];

for (const record of records) {
  if (!hasOverlongAmountExtraction(record.maxAmount)) continue;
  record.maxAmount = '支援内容は公式ページで確認';
  record.maxAmountNum = 0;
  repairedSlugs.push(record.slug);
}

if (repairedSlugs.length !== 0 && repairedSlugs.length !== expectedAffectedCount) {
  throw new Error(`愛知県009の金額抽出汚染対象件数が変わりました: ${repairedSlugs.length}/${expectedAffectedCount}`);
}

if (shouldWrite && repairedSlugs.length > 0) {
  source = `${source.slice(0, range.start)}${JSON.stringify(records)}${source.slice(range.end)}`;
  fs.writeFileSync(targetPath, source);
}

console.log(JSON.stringify({
  mode: shouldWrite ? 'write' : 'dry-run',
  repaired: repairedSlugs.length,
  slugs: repairedSlugs,
  status: repairedSlugs.length === 0 ? `${expectedAffectedCount}件はすべて修正済みです。` : undefined,
}, null, 2));
