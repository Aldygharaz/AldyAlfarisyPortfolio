const fs = require('fs');
const path = require('path');

const workJs = fs.readFileSync(path.join(__dirname, '../dist/assets/Work-o0Q8zxMl.js'), 'utf8');

console.log('Does Work bundle import content?:', workJs.includes('content') || workJs.includes('LocaleContext'));
console.log('Does Work bundle use locale?:', workJs.includes('useLocale') || workJs.includes('locale'));

// Check how projects array is defined in Work bundle
const posIdx = workJs.indexOf('Sokara POS EVO');
console.log('Sokara POS EVO found at:', posIdx);
if (posIdx !== -1) {
  console.log(workJs.substring(posIdx - 100, posIdx + 200));
}
