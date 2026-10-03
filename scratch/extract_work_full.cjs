const fs = require('fs');
const path = require('path');

const workJs = fs.readFileSync(path.join(__dirname, '../dist/assets/Work-o0Q8zxMl.js'), 'utf8');

// Let's print the projects memoization and the entire component structure
const posIdx = workJs.indexOf('o[S].work,C=e.useMemo');
console.log(workJs.substring(posIdx, posIdx + 4000));
