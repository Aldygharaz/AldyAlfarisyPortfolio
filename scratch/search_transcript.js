import fs from 'fs';
import readline from 'readline';

const file = 'C:/Users/RDZ/.gemini/antigravity/brain/3cb3c73c-3587-4642-b7e7-f4fee0ec6a9b/.system_generated/logs/transcript.jsonl';
if (!fs.existsSync(file)) {
  console.log('File does not exist');
  process.exit(1);
}

const rl = readline.createInterface({ input: fs.createReadStream(file) });
rl.on('line', (line) => {
  if (line.includes('SIDE NAVIGATION') || line.includes('Side Navigation')) {
    const idx = line.indexOf('SIDE NAVIGATION');
    console.log(line.substring(idx - 50, idx + 450));
  }
});
