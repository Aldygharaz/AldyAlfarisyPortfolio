const fs = require('fs');
const path = require('path');

const appBase = path.resolve(__dirname, '..');
const raw = fs.readFileSync(path.join(appBase, 'scratch/extracted_content.json'), 'utf8');

const tsContent = `export type Locale = 'id' | 'en';\n\nexport const content = ${raw} as const;\n`;
fs.writeFileSync(path.join(appBase, 'src/locales/content.ts'), tsContent, 'utf8');
console.log('src/locales/content.ts generated successfully! Size:', tsContent.length);
