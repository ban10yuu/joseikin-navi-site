import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const targetPath = path.join(repositoryRoot, 'src/data/grants/verified-local-misc-2026.ts');
const shouldWrite = process.argv.includes('--write');

const kihoTitles = [
  ['mie-official-006-056-2026', '新婚さんの新生活を応援します'],
  ['mie-official-006-057-2026', '予防接種（任意）'],
  ['mie-official-006-058-2026', '特別児童扶養手当・特別障害者手当・障害児福祉手当'],
  ['mie-official-006-059-2026', '出産祝い金事業'],
  ['mie-official-006-060-2026', '母乳ケア助成事業'],
  ['mie-official-006-061-2026', '特定不妊治療費助成'],
  ['mie-official-006-062-2026', 'スポーツ振興補助金'],
  ['mie-official-006-063-2026', 'チャイルドシート購入費補助事業'],
  ['mie-official-006-064-2026', '空き家バンク登録促進助成金について'],
  ['mie-official-006-065-2026', '空き家改修支援事業について'],
  ['mie-official-006-066-2026', '特殊詐欺等被害防止機器購入補助金について'],
  ['mie-official-006-067-2026', '紀宝町高齢者等おでかけ応援電動車等購入支援補助金について'],
  ['mie-official-006-068-2026', '耐震診断・耐震補強などの事業費の一部を補助'],
  ['mie-official-006-069-2026', '紀宝町住宅用火災警報器設置補助事業'],
  ['mie-official-006-070-2026', '若者定住促進奨学金返還支援事業について'],
  ['mie-official-006-071-2026', '活力あふれる若者定住応援事業について'],
  ['mie-official-006-072-2026', '紀宝町若者応援民間賃貸住宅家賃助成金の交付について'],
  ['mie-official-006-073-2026', '子ども医療費助成事業'],
  ['mie-official-006-074-2026', '紀宝町移住新生活応援事業'],
  ['mie-official-006-075-2026', '紀宝町商業活性化委員会「創業支援助成金」について'],
  ['mie-official-006-076-2026', '建物解体助成事業について'],
  ['mie-official-006-077-2026', '空き家除却に係る土地の固定資産税減免事業'],
];

const taijiTitles = [
  ['wakayama-official-006-020-2026', '防災対策への補助事業について'],
  ['wakayama-official-006-021-2026', 'チャイルドシート購入費補助金制度'],
  ['wakayama-official-006-022-2026', 'ひとり親家庭等医療費助成制度'],
  ['wakayama-official-006-023-2026', '児童扶養手当制度'],
  ['wakayama-official-006-024-2026', '児童手当制度'],
  ['wakayama-official-006-025-2026', '乳幼児医療費助成制度'],
  ['wakayama-official-006-026-2026', '就学児医療費助成制度'],
  ['wakayama-official-006-027-2026', '特別児童扶養手当'],
  ['wakayama-official-006-028-2026', '国民年金からの給付の種類'],
  ['wakayama-official-006-029-2026', '申請免除（全額・一部）、若年者納付猶予、学生納付特例'],
  ['wakayama-official-006-030-2026', '過疎地域における固定資産税の課税免除について'],
  ['wakayama-official-006-031-2026', '浄化槽の設置に対する補助制度について'],
  ['wakayama-official-006-032-2026', '高校生等通学定期補助事業'],
  ['wakayama-official-006-033-2026', '移住支援金'],
  ['wakayama-official-006-034-2026', '出産・子育て応援給付金'],
  ['wakayama-official-006-035-2026', '出産祝金'],
  ['wakayama-official-006-036-2026', '太地町一般不妊治療費助成事業について'],
  ['wakayama-official-006-037-2026', '太地町創業支援事業補助金'],
  ['wakayama-official-006-038-2026', '太地町経済対策商品券について'],
  ['wakayama-official-006-039-2026', '令和6年度新宮白浜区間旅客鉄道利用促進補助金について'],
  ['wakayama-official-006-040-2026', '紀勢本線新宮白浜区間通勤モニター助成事業について「令和8年7月10日～」'],
];

const allEntries = [
  ...kihoTitles.map(([slug, officialTitle]) => ({ slug, officialTitle, organization: '紀宝町', clearAmount: false })),
  ...taijiTitles.map(([slug, officialTitle]) => ({ slug, officialTitle, organization: '太地町', clearAmount: true })),
];

if (allEntries.length !== 43 || new Set(allEntries.map(({ slug }) => slug)).size !== 43) {
  throw new Error('修正対象は重複なしの43件である必要があります。');
}

const encode = (value) => JSON.stringify(value);

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

function publicTitle(organization, officialTitle) {
  return officialTitle.startsWith(organization) ? officialTitle : `${organization} ${officialTitle}`;
}

let source = fs.readFileSync(targetPath, 'utf8');
let foundCount = 0;
let changedCount = 0;

for (const { slug, officialTitle, organization, clearAmount } of allEntries) {
  const slugMarker = `"slug": "${slug}"`;
  const slugIndex = source.indexOf(slugMarker);
  if (slugIndex < 0) throw new Error(`${slug}が見つかりません。`);

  const objectStart = source.lastIndexOf('  {', slugIndex);
  const objectEndMarker = source.indexOf('\n  },', slugIndex);
  if (objectStart < 0 || objectEndMarker < 0) throw new Error(`${slug}のオブジェクト境界を特定できません。`);
  const objectEnd = objectEndMarker + '\n  },'.length;
  const originalBlock = source.slice(objectStart, objectEnd);
  foundCount += 1;

  let block = originalBlock;
  block = replaceStringField(block, 'title', publicTitle(organization, officialTitle));
  block = replaceStringField(block, 'eligibility', `${officialTitle}の対象条件は公式ページでご確認ください。`);
  block = replaceStringField(block, 'applicationPeriod', `${officialTitle}の申請時期・受付状況は公式ページでご確認ください。`);
  block = replaceStringField(
    block,
    'description',
    `${organization}が公式に案内する「${officialTitle}」です。対象・支援内容・申請条件は公式ページでご確認ください。`,
  );
  block = replaceStringField(block, 'overview', `${officialTitle}は、${organization}の公式ページに掲載されている制度です。`);
  block = replaceStringField(block, 'details', `${officialTitle}の対象・支援内容・申請条件は公式ページでご確認ください。`);
  block = replaceStringField(block, 'sourceName', officialTitle);

  if (clearAmount) {
    block = replaceStringField(block, 'maxAmount', '公式ページで確認');
    block = replaceNumberField(block, 'maxAmountNum', 0);
  }

  if (block === originalBlock) continue;
  source = `${source.slice(0, objectStart)}${block}${source.slice(objectEnd)}`;
  changedCount += 1;
}

if (foundCount !== allEntries.length) {
  throw new Error(`対象件数が一致しません: ${foundCount}/${allEntries.length}`);
}

if (shouldWrite) {
  fs.writeFileSync(targetPath, source);
  console.log(`${changedCount}件の制度名と公開本文を修正しました。`);
} else {
  console.log(changedCount > 0
    ? `${changedCount}件を修正できます。反映するには --write を指定してください。`
    : '43件はすべて修正済みです。');
}
