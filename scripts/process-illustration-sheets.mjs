import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const motifNames = [
  'childcare', 'housing', 'medical', 'education', 'employment', 'nursing',
  'living', 'disaster', 'startup', 'business-growth', 'digital-transformation', 'energy-saving',
  'wage-increase', 'welfare', 'regional-revitalization', 'research', 'student', 'disability-support',
  'loan', 'grant-payment', 'fee-reduction', 'voucher', 'application-documents', 'official-source-search',
];

const sceneNames = [
  'hero-community-search', 'audience-individual', 'audience-business',
  'application-guide', 'source-verification', 'region-search',
];

const runMagick = (args) => {
  const result = spawnSync('magick', args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

mkdirSync('public/images/illustrations/motifs', { recursive: true });
mkdirSync('public/images/illustrations/scenes', { recursive: true });

motifNames.forEach((name, index) => {
  const x = (index % 6) * 256;
  const y = Math.floor(index / 6) * 256;
  runMagick([
    'public/images/illustrations/source/support-motif-sheet.png',
    '-crop', `256x256+${x}+${y}`, '+repage',
    '-resize', '256x256', '-strip', '-quality', '84',
    `public/images/illustrations/motifs/${name}.webp`,
  ]);
});

sceneNames.forEach((name, index) => {
  const x = (index % 3) * 512;
  const y = Math.floor(index / 3) * 512;
  runMagick([
    'public/images/illustrations/source/people-scenes-sheet.png',
    '-crop', `512x512+${x}+${y}`, '+repage',
    '-resize', '640x640', '-strip', '-quality', '86',
    `public/images/illustrations/scenes/${name}.webp`,
  ]);
});

console.log(`Generated ${motifNames.length} motif assets and ${sceneNames.length} scene assets.`);
