import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  hasOverlongAmountExtraction,
  hasTruncatedApplicationPeriod,
} from './lib/content-audit-rules.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const targetPath = path.join(repositoryRoot, 'src/data/grants/verified-local-misc-2026.ts');
const shouldWrite = process.argv.includes('--write');
const targetArrays = ['aichiOfficial010Grants', 'aichiOfficial011Grants'];
const expectedAffectedCount = 135;

function findJsonArray(source, declarationName) {
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
let affectedCount = 0;
let applicationPeriodCount = 0;
let maxAmountCount = 0;

for (const declarationName of targetArrays) {
  const range = findJsonArray(source, declarationName);
  const records = JSON.parse(source.slice(range.start, range.end));

  for (const record of records) {
    let affected = false;
    if (hasTruncatedApplicationPeriod(record.applicationPeriod)) {
      record.applicationPeriod = '申請期限や手続きの時期は公式ページで確認';
      applicationPeriodCount += 1;
      affected = true;
    }
    if (hasOverlongAmountExtraction(record.maxAmount)) {
      record.maxAmount = '支援内容は公式ページで確認';
      record.maxAmountNum = 0;
      maxAmountCount += 1;
      affected = true;
    }
    if (affected) affectedCount += 1;
  }

  source = `${source.slice(0, range.start)}${JSON.stringify(records)}${source.slice(range.end)}`;
}

if (affectedCount !== 0 && affectedCount !== expectedAffectedCount) {
  throw new Error(`愛知県の抽出汚染対象件数が変わりました: ${affectedCount}/${expectedAffectedCount}`);
}

if (shouldWrite && affectedCount > 0) fs.writeFileSync(targetPath, source);

console.log(JSON.stringify({
  mode: shouldWrite ? 'write' : 'dry-run',
  affected: affectedCount,
  applicationPeriod: applicationPeriodCount,
  maxAmount: maxAmountCount,
  status: affectedCount === 0 ? `${expectedAffectedCount}件はすべて修正済みです。` : undefined,
}, null, 2));
