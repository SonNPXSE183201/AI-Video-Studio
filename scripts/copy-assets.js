import fs from 'node:fs';
import path from 'node:path';

const brainDir = 'C:\\Users\\nguyen.son\\.gemini\\antigravity-ide\\brain\\46b1599d-7a24-4353-b2ec-7df2430bd755';
const targetDir = 'd:\\EXE201\\Picket-Social-Studio\\public\\truong-khac';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);

const mapping = [
  { prefix: 'scene_01_awakening', out: 'scene_01.jpg' },
  { prefix: 'scene_02_dormitory', out: 'scene_02.jpg' },
  { prefix: 'scene_03_haizhou_street', out: 'scene_03.jpg' },
  { prefix: 'scene_04_tea_stall', out: 'scene_04.jpg' },
  { prefix: 'scene_05_aidat_blueprints', out: 'scene_05.jpg' },
  { prefix: 'scene_06_with_huasi', out: 'scene_06.jpg' },
  { prefix: 'scene_07_paper_mill', out: 'scene_07.jpg' },
  { prefix: 'scene_08_shatian_planning', out: 'scene_08.jpg' },
  { prefix: 'scene_09_political_chessboard', out: 'scene_09.jpg' },
  { prefix: 'scene_10_cctv_auction', out: 'scene_10.jpg' },
  { prefix: 'scene_11_shanghai_gala', out: 'scene_11.jpg' },
  { prefix: 'scene_12_financial_crisis', out: 'scene_12.jpg' },
  { prefix: 'scene_13_danjing_courtyard', out: 'scene_13.jpg' },
  { prefix: 'scene_11_shanghai_gala', out: 'scene_14.jpg' },
];

for (const item of mapping) {
  const match = files.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
  if (match) {
    fs.copyFileSync(path.join(brainDir, match), path.join(targetDir, item.out));
    console.log(`Copied ${match} -> ${item.out}`);
  } else {
    console.warn(`Could not find ${item.prefix}`);
  }
}

// Master thumbnail for scene 15
const userUploadDir = path.join(brainDir, '.user_uploaded');
const masterFile = path.join(userUploadDir, 'media_1791820986484.jpg');
if (fs.existsSync(masterFile)) {
  fs.copyFileSync(masterFile, path.join(targetDir, 'scene_15.jpg'));
  console.log('Copied master thumbnail -> scene_15.jpg');
}
