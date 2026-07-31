import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { containsBrowserBoilerplate } from './lib/content-audit-rules.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const targetPath = path.join(repositoryRoot, 'src/data/grants/verified-local-misc-2026.ts');
const shouldWrite = process.argv.includes('--write');
const expectedAffectedCount = 23;

const encode = (value) => JSON.stringify(value);

function readStringField(block, field) {
  const match = block.match(new RegExp(`"${field}":\\s*("(?:[^"\\\\]|\\\\.)*")`));
  return match ? JSON.parse(match[1]) : '';
}

function replaceStringField(block, field, value) {
  const pattern = new RegExp(`^(\\s*)"${field}":\\s*"(?:[^"\\\\]|\\\\.)*",?\\s*$`, 'm');
  const match = block.match(pattern);
  const replacement = `${match?.[1] ?? '    '}"${field}": ${encode(value)},`;
  if (match) return block.replace(pattern, replacement);

  const officialUrlLine = /^(\s*)"officialUrl":/m;
  if (!officialUrlLine.test(block)) throw new Error(`${field}の挿入位置が見つかりません。`);
  return block.replace(officialUrlLine, `${replacement}\n$&`);
}

function replaceNumberField(block, field, value) {
  const pattern = new RegExp(`^(\\s*)"${field}":\\s*-?\\d+(?:\\.\\d+)?,?\\s*$`, 'm');
  if (!pattern.test(block)) throw new Error(`${field}が見つかりません。`);
  return block.replace(pattern, `$1"${field}": ${value},`);
}

function officialTitleFrom(block) {
  const title = readStringField(block, 'title').trim();
  const organization = readStringField(block, 'organization').trim();
  const sourceName = readStringField(block, 'sourceName').trim();

  if (sourceName && sourceName !== '公式支援制度') return sourceName;
  if (organization && title.startsWith(`${organization} `)) return title.slice(organization.length + 1).trim();
  return title;
}

let source = fs.readFileSync(targetPath, 'utf8');
const arrayStart = source.indexOf('const wakayamaOfficial006Grants:');
const arrayEnd = source.indexOf('\n];', arrayStart);
if (arrayStart < 0 || arrayEnd < 0) throw new Error('和歌山県第6配列を特定できません。');

const prefix = source.slice(0, arrayStart);
const suffix = source.slice(arrayEnd);
let arraySource = source.slice(arrayStart, arrayEnd);
const objectPattern = /^  \{\n[\s\S]*?^  \},?$/gm;
const affectedSlugs = [];

arraySource = arraySource.replace(objectPattern, (originalBlock) => {
  const publicFields = [
    readStringField(originalBlock, 'maxAmount'),
    readStringField(originalBlock, 'eligibility'),
    readStringField(originalBlock, 'applicationPeriod'),
    readStringField(originalBlock, 'description'),
    readStringField(originalBlock, 'overview'),
    readStringField(originalBlock, 'details'),
  ].join('\n');

  if (!containsBrowserBoilerplate(publicFields)) return originalBlock;

  const slug = readStringField(originalBlock, 'slug');
  const organization = readStringField(originalBlock, 'organization').trim();
  const officialTitle = officialTitleFrom(originalBlock);
  if (!slug || !organization || !officialTitle) throw new Error('修正対象の識別情報が不足しています。');
  affectedSlugs.push(slug);

  let block = originalBlock;
  block = replaceStringField(block, 'maxAmount', '公式ページで確認');
  block = replaceNumberField(block, 'maxAmountNum', 0);
  block = replaceStringField(block, 'eligibility', `${officialTitle}の対象条件は公式ページでご確認ください。`);
  block = replaceStringField(block, 'applicationPeriod', `${officialTitle}の申請時期・受付状況は公式ページでご確認ください。`);
  block = replaceStringField(
    block,
    'description',
    `${organization}が公式に案内する「${officialTitle}」です。対象・支援内容・申請条件は公式ページでご確認ください。`,
  );
  block = replaceStringField(block, 'overview', `${officialTitle}は、${organization}の公式ページに掲載されている制度です。`);
  block = replaceStringField(block, 'details', `${officialTitle}の対象・支援内容・申請条件は公式ページでご確認ください。`);
  return block;
});

if (affectedSlugs.length !== 0 && affectedSlugs.length !== expectedAffectedCount) {
  throw new Error(`ブラウザ案内文の対象件数が変わりました: ${affectedSlugs.length}/${expectedAffectedCount}`);
}

const nextSource = `${prefix}${arraySource}${suffix}`;
const changed = nextSource !== source;
if (shouldWrite) {
  if (changed) fs.writeFileSync(targetPath, nextSource);
  console.log(changed
    ? `${affectedSlugs.length}件のブラウザ案内文を公開項目から除去しました。`
    : `${affectedSlugs.length}件はすべて修正済みです。`);
} else {
  console.log(changed
    ? `${affectedSlugs.length}件を修正できます。反映するには --write を指定してください。`
    : `${expectedAffectedCount}件はすべて修正済みです。`);
}
