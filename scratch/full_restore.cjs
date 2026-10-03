const fs = require('fs');
const path = require('path');

const repoBase = 'C:/Users/RDZ/.gemini/antigravity/brain/010ecad8-592c-4f94-a6b9-d139d6c4ea20/scratch/repo';
const appBase = path.resolve(__dirname, '..');

console.log('App base:', appBase);
console.log('1. Copying clean static assets and ui components from clean repo...');

// Copy UI components
const uiDir = path.join(appBase, 'src/components/ui');
const repoUiDir = path.join(repoBase, 'src/components/ui');
fs.readdirSync(repoUiDir).forEach(f => {
  const dest = path.join(uiDir, f);
  const src = path.join(repoUiDir, f);
  const buf = fs.existsSync(dest) ? fs.readFileSync(dest) : null;
  if (!buf || (buf.length > 0 && buf[0] === 0)) {
    fs.copyFileSync(src, dest);
    console.log('  Restored UI component:', f);
  }
});

// Copy public assets (videos, images, icons)
function copyDirIfCorrupt(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir, { withFileTypes: true }).forEach(e => {
    const s = path.join(srcDir, e.name);
    const d = path.join(destDir, e.name);
    if (e.isDirectory()) {
      copyDirIfCorrupt(s, d);
    } else {
      const isCorrupt = !fs.existsSync(d) || (fs.statSync(d).size > 0 && fs.readFileSync(d)[0] === 0);
      if (isCorrupt) {
        fs.copyFileSync(s, d);
        console.log('  Restored asset:', path.relative(appBase, d));
      }
    }
  });
}
copyDirIfCorrupt(path.join(repoBase, 'public'), path.join(appBase, 'public'));

// Restore App.css and index.css and useScrollReveal.ts
['src/App.css', 'src/index.css', 'src/hooks/useScrollReveal.ts'].forEach(rel => {
  const dest = path.join(appBase, rel);
  const src = path.join(repoBase, rel);
  const buf = fs.readFileSync(dest);
  if (buf.length > 0 && buf[0] === 0) {
    fs.copyFileSync(src, dest);
    console.log('  Restored base file from repo:', rel);
  }
});

console.log('Clean assets and UI components restored!');
