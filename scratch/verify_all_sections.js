import fs from 'fs';
import path from 'path';
import { content } from '../src/locales/content.js';

const allIds = new Set();

// Collect all IDs from locales
['id', 'en'].forEach((loc) => {
  content[loc].nav.links.forEach((l) => allIds.add(l.id));
  content[loc].footer.links.forEach((l) => allIds.add(l.id));
  content[loc].sidenav.forEach((s) => allIds.add(s.id));
});

console.log('Unique Section IDs targeted by Nav, Footer, and SideNav:', Array.from(allIds));

const srcDir = path.resolve('src');
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(full);
    }
  });
  return results;
}

const files = getFiles(srcDir);
const foundIds = new Set();
const idRegex = /id=["']([a-zA-Z0-9_\-]+)["']/g;

files.forEach((f) => {
  const c = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = idRegex.exec(c)) !== null) {
    foundIds.add(m[1]);
  }
});

let missing = [];
allIds.forEach((id) => {
  if (!foundIds.has(id)) {
    missing.push(id);
  } else {
    console.log(`  [OK] Section id="${id}" exists in markup`);
  }
});

if (missing.length > 0) {
  console.error('\nERROR: Missing sections in DOM markup:', missing);
  process.exit(1);
} else {
  console.log('\nALL TARGETED SECTION IDs RESOLVE PERFECTLY IN JSX MARKUP!');
}
