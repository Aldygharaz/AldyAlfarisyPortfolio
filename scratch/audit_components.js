import fs from 'fs';
import path from 'path';

const filesToCheck = [
  'src/App.tsx',
  'src/components/LanguageToggle.tsx',
  'src/components/SideNav.tsx',
  'src/sections/Navigation.tsx',
  'src/sections/IntroHero.tsx',
  'src/sections/Marquee.tsx',
  'src/sections/Familiar.tsx',
  'src/sections/Work.tsx',
  'src/sections/Quadrant.tsx',
  'src/sections/Skills.tsx',
  'src/sections/Process.tsx',
  'src/sections/Orbit.tsx',
  'src/sections/About.tsx',
  'src/sections/Testimonials.tsx',
  'src/sections/FAQ.tsx',
  'src/sections/Contact.tsx',
  'src/sections/Footer.tsx',
];

const dashRegex = /[\u2013\u2014]/;
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

let issues = [];

for (const relPath of filesToCheck) {
  const fullPath = path.resolve(relPath);
  if (!fs.existsSync(fullPath)) {
    issues.push(`File missing: ${relPath}`);
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Ignore imports and svg paths
    if (line.includes('import ') || line.includes('path d=') || line.includes('<path')) return;

    if (dashRegex.test(line)) {
      issues.push(`[Dash] ${relPath}:${index + 1}: ${line.trim()}`);
    }
    if (emojiRegex.test(line)) {
      issues.push(`[Emoji] ${relPath}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (issues.length > 0) {
  console.error(`Found ${issues.length} issues in components:`);
  issues.forEach(i => console.error('  - ' + i));
  process.exit(1);
} else {
  console.log('ALL COMPONENTS PASSED: 0 dashes, 0 emojis across all active files.');
}
