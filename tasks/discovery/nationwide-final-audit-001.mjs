import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const discoveryDir = path.join(root, 'tasks', 'discovery');
const checklistPath = path.join(root, 'tasks', 'comprehensive-official-coverage-checklist.md');
const checkpointPath = path.join(root, 'tasks', 'official-coverage-checkpoint.json');

const files = fs.readdirSync(discoveryDir).sort();
const checklist = fs.readFileSync(checklistPath, 'utf8');
const checkpoint = JSON.parse(fs.readFileSync(checkpointPath, 'utf8'));

const PREFECTURE_BY_PREFIX = {
  hokkaido: '北海道',
  aomori: '青森県',
  iwate: '岩手県',
  miyagi: '宮城県',
  akita: '秋田県',
  yamagata: '山形県',
  fukushima: '福島県',
  ibaraki: '茨城県',
  tochigi: '栃木県',
  gunma: '群馬県',
  saitama: '埼玉県',
  chiba: '千葉県',
  tokyo: '東京都',
  kanagawa: '神奈川県',
  niigata: '新潟県',
  toyama: '富山県',
  ishikawa: '石川県',
  fukui: '福井県',
  yamanashi: '山梨県',
  nagano: '長野県',
  gifu: '岐阜県',
  shizuoka: '静岡県',
  aichi: '愛知県',
  mie: '三重県',
  shiga: '滋賀県',
  kyoto: '京都府',
  osaka: '大阪府',
  hyogo: '兵庫県',
  nara: '奈良県',
  wakayama: '和歌山県',
  tottori: '鳥取県',
  shimane: '島根県',
  okayama: '岡山県',
  hiroshima: '広島県',
  yamaguchi: '山口県',
  tokushima: '徳島県',
  kagawa: '香川県',
  ehime: '愛媛県',
  kochi: '高知県',
  fukuoka: '福岡県',
  saga: '佐賀県',
  nagasaki: '長崎県',
  kumamoto: '熊本県',
  oita: '大分県',
  miyazaki: '宮崎県',
  kagoshima: '鹿児島県',
  okinawa: '沖縄県',
};

function prefixOf(file) {
  if (file.startsWith('yamanashi-nagano-')) return 'yamanashi-nagano';
  if (file.startsWith('hyogo-nara-')) return 'hyogo-nara';
  if (file.startsWith('gifu-shizuoka-')) return 'gifu-shizuoka';
  return file.split('-official-coverage-')[0].replace(/-batch-\d+.*$/, '');
}

function readAdoptedCount(file) {
  const value = JSON.parse(fs.readFileSync(path.join(discoveryDir, file), 'utf8'));
  if (Array.isArray(value)) return value.length;
  if (Array.isArray(value.adopted)) return value.adopted.length;
  if (Array.isArray(value.entries)) return value.entries.length;
  if (Array.isArray(value.selected)) return value.selected.length;
  return 0;
}

const adoptedFiles = files.filter((file) => file.endsWith('-adopted.json'));
const outcomeFiles = files.filter((file) =>
  /(?:adopted|adopted-urls|entries|final-selected|selected-pages|ts-snippet|official-coverage|hokkaido-batch)/.test(file),
);
const urlStatusFiles = new Set(files.filter((file) => file.endsWith('-url-status.txt')));
const candidateFiles = files.filter((file) => file.endsWith('-candidates.json'));
const selectionFiles = files.filter((file) => file.endsWith('-selections.json') || file.includes('selected'));

const byPrefix = {};
for (const file of adoptedFiles) {
  const prefix = prefixOf(file);
  byPrefix[prefix] ??= { adoptedFiles: 0, adopted: 0, urlStatusFiles: 0, candidateFiles: 0, selectionFiles: 0 };
  byPrefix[prefix].adoptedFiles += 1;
  byPrefix[prefix].adopted += readAdoptedCount(file);
}
for (const file of urlStatusFiles) {
  const prefix = prefixOf(file);
  byPrefix[prefix] ??= { adoptedFiles: 0, adopted: 0, urlStatusFiles: 0, candidateFiles: 0, selectionFiles: 0 };
  byPrefix[prefix].urlStatusFiles += 1;
}
for (const file of candidateFiles) {
  const prefix = prefixOf(file);
  byPrefix[prefix] ??= { adoptedFiles: 0, adopted: 0, urlStatusFiles: 0, candidateFiles: 0, selectionFiles: 0 };
  byPrefix[prefix].candidateFiles += 1;
}
for (const file of selectionFiles) {
  const prefix = prefixOf(file);
  byPrefix[prefix] ??= { adoptedFiles: 0, adopted: 0, urlStatusFiles: 0, candidateFiles: 0, selectionFiles: 0 };
  byPrefix[prefix].selectionFiles += 1;
}

const officialHeadings = [...checklist.matchAll(/^### (.+?公式棚卸し[^\n]*)$/gm)].map((match) => match[1]);
const prefecturesInChecklist = new Set();
for (const heading of officialHeadings) {
  const name = heading.match(/^(.+?)公式棚卸し/)?.[1]?.replace(/[（(].*$/, '').trim();
  if (name) prefecturesInChecklist.add(name);
}

const unresolvedPatterns = [
  '未反映',
  '要判定',
  '掲載保留',
  '次巡候補',
  '第2巡',
  '未完了',
  '不足',
  '保留',
];
const unresolvedLines = checklist
  .split('\n')
  .map((line, index) => ({ lineNumber: index + 1, text: line }))
  .filter(({ text }) => unresolvedPatterns.some((pattern) => text.includes(pattern)));

const nationalOrPublicDiscoveryFiles = files.filter((file) =>
  /national|public|agency|ministry|koku|meti|mhlw|mlit|maff|soumu|jfc|smrj|j-net|go\.jp/i.test(file),
);
const nationalVerifiedDataFiles = fs
  .readdirSync(path.join(root, 'src', 'data', 'grants'))
  .filter((file) => /national|ngo|public|agency/i.test(file));

const expectedPrefectures = Object.values(PREFECTURE_BY_PREFIX);
const checklistHeadingNameMissingPrefectures = expectedPrefectures.filter((prefecture) => !prefecturesInChecklist.has(prefecture));
const outcomePrefixes = new Set(outcomeFiles.map(prefixOf));
const noOutcomeArtifactPrefixes = Object.keys(PREFECTURE_BY_PREFIX).filter((prefix) => !outcomePrefixes.has(prefix));
const noStructuredAdoptedJsonPrefixes = Object.keys(PREFECTURE_BY_PREFIX).filter((prefix) => !byPrefix[prefix]?.adoptedFiles);

const summary = {
  generatedAt: new Date().toISOString(),
  headCheckpoint: {
    updatedAt: checkpoint.updatedAt,
    lastCompleted: checkpoint.lastCompleted?.code,
    next: checkpoint.next?.code,
  },
  completionJudgement: {
    nationwideComplete: false,
    blockers: [
      'チェックリスト先頭が未完了のまま',
      '未反映・要判定・掲載保留・第2巡候補の記録が残存',
      '国・公的機関の公式棚卸し成果物が自治体棚卸しと同等の粒度で確認できない',
      '都道府県別成果物の命名がadopted.json/adopted-urls/entries/TS直書きで揺れており、最終監査前に正規化が必要',
      'npm run audit:coverage は別件 grant-copy.ts TypeError で停止中',
    ],
  },
  discoveryInventory: {
    adoptedFiles: adoptedFiles.length,
    outcomeFiles: outcomeFiles.length,
    candidateFiles: candidateFiles.length,
    selectionFiles: selectionFiles.length,
    urlStatusFiles: urlStatusFiles.size,
    totalAdoptedInAdoptedJson: Object.values(byPrefix).reduce((sum, row) => sum + row.adopted, 0),
  },
  checklistInventory: {
    officialCoverageHeadings: officialHeadings.length,
    prefecturesWithOfficialCoverageHeading: prefecturesInChecklist.size,
    checklistHeadingNameMissingPrefectures,
    unresolvedLineCount: unresolvedLines.length,
    unresolvedSamples: [
      ...unresolvedLines.slice(0, 12),
      ...unresolvedLines.slice(-12),
    ],
  },
  nationalAndPublicInstitutionInventory: {
    discoveryFiles: nationalOrPublicDiscoveryFiles,
    verifiedDataFiles: nationalVerifiedDataFiles,
  },
  byPrefix,
  noOutcomeArtifactPrefixes,
  noStructuredAdoptedJsonPrefixes,
};

const outJson = path.join(discoveryDir, 'nationwide-final-audit-001.json');
const outTsv = path.join(discoveryDir, 'nationwide-final-audit-001-prefecture-summary.tsv');
fs.writeFileSync(outJson, `${JSON.stringify(summary, null, 2)}\n`);
fs.writeFileSync(
  outTsv,
  [
    'prefix\tprefecture\tadoptedFiles\tadopted\tcandidateFiles\tselectionFiles\turlStatusFiles',
    ...Object.entries(byPrefix).map(([prefix, row]) =>
      [
        prefix,
        PREFECTURE_BY_PREFIX[prefix] || '',
        row.adoptedFiles,
        row.adopted,
        row.candidateFiles,
        row.selectionFiles,
        row.urlStatusFiles,
      ].join('\t'),
    ),
    '',
  ].join('\n'),
);

console.log(JSON.stringify({
  output: path.relative(root, outJson),
  tsv: path.relative(root, outTsv),
  adoptedFiles: summary.discoveryInventory.adoptedFiles,
  outcomeFiles: summary.discoveryInventory.outcomeFiles,
  totalAdoptedInAdoptedJson: summary.discoveryInventory.totalAdoptedInAdoptedJson,
  unresolvedLineCount: summary.checklistInventory.unresolvedLineCount,
  nationwideComplete: false,
}, null, 2));
