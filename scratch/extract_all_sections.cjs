const fs = require('fs');
const path = require('path');

const appBase = path.resolve(__dirname, '..');
const distAssets = path.join(appBase, 'dist/assets');

const files = fs.readdirSync(distAssets).filter(f => f.endsWith('.js') && !f.endsWith('.gz') && !f.endsWith('.br'));

files.forEach(f => {
  const code = fs.readFileSync(path.join(distAssets, f), 'utf8');
  console.log('File:', f, 'size:', code.length);
  // Check code paths
  const paths = [...code.matchAll(/code-path["']:["']([^"']+)["']/g)].map(m => m[1]);
  const uniquePaths = [...new Set(paths)];
  console.log('  Target paths:', uniquePaths);
});
