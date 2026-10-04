// Membuat gambar pratinjau tautan (1200x630) untuk WhatsApp, LinkedIn, dan Facebook.
// Jalankan: node scripts/make-og-image.cjs
// Hasil: public/og-image.jpg. Butuh Chrome/Chromium (puppeteer) dan sharp.
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const b64 = (p) => fs.readFileSync(path.join(root, p)).toString('base64');

const jost = b64('node_modules/@fontsource-variable/jost/files/jost-latin-wght-normal.woff2');
const inter = b64('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2');
const portrait = b64('public/portrait.webp');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'JostV';src:url(data:font/woff2;base64,${jost}) format('woff2');font-weight:100 900}
@font-face{font-family:'InterV';src:url(data:font/woff2;base64,${inter}) format('woff2');font-weight:100 900}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:'InterV',sans-serif;color:#fff;
 background:radial-gradient(900px 500px at 85% 20%,#1D4ED8 0%,rgba(29,78,216,0) 70%),#0F1B3D;position:relative}
.brand{position:absolute;left:72px;top:60px;font:800 34px 'JostV';letter-spacing:-0.02em}
.brand span{display:inline-block;width:14px;height:14px;border-radius:50%;background:#60A5FA;margin-right:12px}
.copy{position:absolute;left:72px;top:160px;width:620px}
.eyebrow{font:600 20px 'InterV';letter-spacing:.12em;color:#93C5FD;margin-bottom:22px}
h1{font:800 58px/1.08 'JostV';letter-spacing:-0.03em;margin-bottom:26px;text-wrap:balance}
p{font:500 26px/1.4 'InterV';color:#CBD5E1;text-wrap:balance}
.name{position:absolute;left:72px;bottom:56px;font:600 26px 'InterV';color:#fff}
.card{position:absolute;right:72px;top:72px;width:400px;height:486px;border-radius:28px;overflow:hidden;
 box-shadow:0 30px 60px -20px rgba(0,0,0,.55);border:1px solid rgba(255,255,255,.18);background:#fff}
.card img{width:100%;height:100%;object-fit:cover;object-position:50% 10%}
</style></head><body>
<div class="brand"><span></span>Sokara</div>
<div class="copy">
 <div class="eyebrow">APLIKASI DAN WEBSITE UNTUK USAHA</div>
 <h1>Usaha Anda punya cara sendiri. Aplikasinya yang ikut.</h1>
 <p>Harga final jelas sebelum Anda bayar apa pun.</p>
</div>
<div class="name">Aldy Alfarisy, pembuat Sokara</div>
<div class="card"><img src="data:image/webp;base64,${portrait}"></div>
</body></html>`;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || undefined,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: 'png' });
  await browser.close();
  const out = path.join(root, 'public/og-image.jpg');
  await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(out);
  console.log('ditulis', out, fs.statSync(out).size, 'byte');
})();
