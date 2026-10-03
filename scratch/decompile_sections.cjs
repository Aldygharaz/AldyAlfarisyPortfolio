const fs = require('fs');
const path = require('path');

const distAssets = path.join(__dirname, '../dist/assets');

['FAQ-BaZH6JHl.js', 'Footer-BzkA-0IX.js', 'About-CckG0_nK.js', 'Quadrant-jHNUOG04.js', 'Process-B15XdquU.js', 'Orbit-DiAfj9K_.js', 'Skills-BUm-rDkU.js', 'Contact-BIiMN0_3.js'].forEach(f => {
  const code = fs.readFileSync(path.join(distAssets, f), 'utf8');
  fs.writeFileSync(path.join(__dirname, f + '.txt'), code, 'utf8');
  console.log('Saved:', f, 'size:', code.length);
});
