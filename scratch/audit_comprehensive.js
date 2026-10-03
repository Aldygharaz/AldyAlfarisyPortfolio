import { content } from '../src/locales/content.js';

const forbiddenEn = [
  /\bwe\b/i,
  /\bour\b/i,
  /\bours\b/i,
  /\bus\b/i,
  /\bourselves\b/i,
  /\bguarantee\b/i,
  /\bguaranteed\b/i,
  /\b100%\b/i,
  /\b60%\b/i,
  /\bzero\b/i,
  /\berror-free\b/i,
  /\bseamless\b/i,
  /\brobust\b/i,
  /\bcutting-edge\b/i,
  /\bgame-changing\b/i,
  /\brevolutionize\b/i,
  /\bbest-in-class\b/i,
  /\btransformative\b/i,
];

const forbiddenId = [
  /\bkamu\b/i,
  /\bkalian\b/i,
  /\bkita\b/i,
  /\buntukmu\b/i,
  /\bkami\b/i,
  /\bgaransi\b/i,
  /\bdijamin\b/i,
  /\b100%\b/i,
  /\b60%\b/i,
  /\bbebas error\b/i,
  /\btanpa cela\b/i,
  /\bseamless\b/i,
  /\brobust\b/i,
  /\bcutting-edge\b/i,
  /\brevolusioner\b/i,
  /\bAnda tidak perlu\b/i,
  /\bIni bukan\b/i,
  /\bWajar kalau\b/i,
  /\bTidak apa-apa\b/i,
];

const dashRegex = /[\u2013\u2014]/;
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

let errors = [];

function checkText(str, locale, path) {
  if (typeof str !== 'string') return;

  if (dashRegex.test(str)) {
    errors.push(`[${locale}] [${path}] Contains em/en dash: "${str}"`);
  }
  if (emojiRegex.test(str)) {
    errors.push(`[${locale}] [${path}] Contains emoji: "${str}"`);
  }

  if (locale === 'en') {
    for (const rule of forbiddenEn) {
      if (rule.test(str)) {
        errors.push(`[EN] [${path}] Matched forbidden word ${rule}: "${str}"`);
      }
    }
  } else if (locale === 'id') {
    for (const rule of forbiddenId) {
      if (rule.test(str)) {
        errors.push(`[ID] [${path}] Matched forbidden word ${rule}: "${str}"`);
      }
    }
  }
}

function traverse(obj, locale, path = '') {
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const currentPath = path ? `${path}.${key}` : key;
    if (typeof val === 'string') {
      checkText(val, locale, currentPath);
    } else if (typeof val === 'object' && val !== null) {
      traverse(val, locale, currentPath);
    }
  }
}

traverse(content.id, 'id');
traverse(content.en, 'en');

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} errors:`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('STRICT AUDIT PASSED! All strings in content.ts strictly comply with the revised directive.');
}
