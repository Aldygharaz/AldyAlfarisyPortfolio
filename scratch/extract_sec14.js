import fs from 'fs';
import readline from 'readline';

const file = 'C:/Users/RDZ/.gemini/antigravity/brain/3cb3c73c-3587-4642-b7e7-f4fee0ec6a9b/.system_generated/logs/transcript.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(file) });
rl.on('line', (line) => {
  if (line.includes('SECTION 14: SIDE NAVIGATION')) {
    const idx = line.indexOf('SECTION 14: SIDE NAVIGATION');
    console.log(line.substring(idx, idx + 1200));
  }
});
