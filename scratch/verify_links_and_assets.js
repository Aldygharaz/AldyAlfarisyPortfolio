import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');
const publicDir = path.resolve('public');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      results.push(full);
    }
  });
  return results;
}

const files = getFiles(srcDir).concat([path.resolve('index.html')]);

const assetRegex = /\/(videos|images|assets)\/[a-zA-Z0-9_\-\.]+\.(webm|mp4|webp|png|jpg|svg)/g;
const rootAssetRegex = /\/(portrait|sokara-[a-z0-9\-]+|favicon[a-z0-9\-]*|apple-touch[a-z0-9\-]*|android-chrome[a-z0-9\-]*)\.(webp|svg|png|ico)/g;

let referencedAssets = new Set();
let referencedAnchors = new Set();
let declaredIds = new Set();

const anchorRegex = /href=["']#([a-zA-Z0-9_\-]+)["']/g;
const idRegex = /id=["']([a-zA-Z0-9_\-]+)["']/g;

files.forEach((f) => {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = assetRegex.exec(content)) !== null) {
    referencedAssets.add(m[0]);
  }
  while ((m = rootAssetRegex.exec(content)) !== null) {
    referencedAssets.add(m[0]);
  }
  while ((m = anchorRegex.exec(content)) !== null) {
    referencedAnchors.add(m[1]);
  }
  while ((m = idRegex.exec(content)) !== null) {
    declaredIds.add(m[1]);
  }
});

console.log('--- ASSET VERIFICATION ---');
console.log('Referenced assets found:', referencedAssets.size);
let missingAssets = [];
referencedAssets.forEach((a) => {
  const localPath = path.join(publicDir, a.replace(/^\//, ''));
  if (!fs.existsSync(localPath)) {
    missingAssets.push(a);
  } else {
    console.log(`  [OK] ${a}`);
  }
});

if (missingAssets.length > 0) {
  console.error('MISSING ASSETS:', missingAssets);
} else {
  console.log('ALL REFERENCED ASSETS VERIFIED ON DISK!');
}

console.log('\n--- ANCHOR LINK VERIFICATION ---');
console.log('Referenced anchors found:', referencedAnchors.size);
let missingAnchors = [];
referencedAnchors.forEach((a) => {
  if (!declaredIds.has(a)) {
    missingAnchors.push(a);
  } else {
    console.log(`  [OK] #${a} -> id="${a}"`);
  }
});

if (missingAnchors.length > 0) {
  console.error('MISSING ANCHOR TARGETS:', missingAnchors);
} else {
  console.log('ALL ANCHOR LINKS RESOLVE TO DECLARED DOM IDs!');
}

if (missingAssets.length > 0 || missingAnchors.length > 0) {
  process.exit(1);
} else {
  console.log('\nALL ASSETS & ANCHORS 100% HEALTHY!');
}
