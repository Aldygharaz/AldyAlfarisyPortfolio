// Tes alur pesan 3 langkah sampai tautan WhatsApp (awalnya ditulis Antigravity, dirapikan Claude).
// Jalankan setelah `npm run build && npm run preview`: node tests/orderflow.cjs
// Opsi: BASE_URL (default http://127.0.0.1:4173), CHROME_PATH.
const puppeteer = require('puppeteer');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4173';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failed = 0;
const check = (name, ok, detail = '') => {
  if (!ok) failed += 1;
  console.log(`${ok ? 'LULUS' : 'GAGAL'}  ${name}${detail ? '  -> ' + detail : ''}`);
};

(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || undefined,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const problems = [];
  page.on('pageerror', (e) => problems.push(String(e)));
  page.on('console', (m) => m.type() === 'error' && problems.push(m.text()));

  await page.goto(BASE + '/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.getElementById('pesan')?.scrollIntoView());
  await page.waitForSelector('.order-opt', { timeout: 10000 });

  const label = () => page.$eval('.order-progress-label', (el) => el.innerText);
  const l1 = await label();
  check('langkah 1 tampil', /1/.test(l1), l1);

  const biz = await page.$$('.order-opt');
  check('ada pilihan jenis usaha', biz.length >= 6, `${biz.length} pilihan`);
  await biz[1].click(); // Kafe, resto, F&B
  await sleep(500);
  const l2 = await label();
  check('pilih jenis usaha membawa ke langkah 2 ("Langkah 1 dari 3 selesai")', /1 dari 3 selesai/.test(l2), l2);

  const needs = await page.$$('.order-opt');
  check('ada pilihan kebutuhan', needs.length >= 2, `${needs.length} pilihan`);
  await needs[0].click();
  await sleep(150);
  await needs[1].click();
  await sleep(150);
  await (await page.$('.order-next')).click();
  await sleep(500);
  const l3 = await label();
  check('lanjut membawa ke langkah 3 ("Langkah 2 dari 3 selesai")', /2 dari 3 selesai/.test(l3), l3);

  const pkgs = await page.$$('.order-pkg');
  check('ada 3 pilihan paket', pkgs.length === 3, `${pkgs.length} pilihan`);
  await pkgs[1].click(); // Aplikasi Usaha
  await sleep(500);

  const summary = await page.$eval('.order-summary', (el) => el.innerText);
  check('ringkasan tampil', summary.length > 20);

  await (await page.$('.order-textarea')).type('Kasir sering macet pas jam makan siang.');
  await sleep(200);
  const wa = await page.$eval('a.order-send', (el) => el.getAttribute('href'));
  const decoded = decodeURIComponent(wa);
  check('tautan WhatsApp memakai nomor yang benar', wa.startsWith('https://api.whatsapp.com/send?phone=6281410538887'));
  check('pesan memuat isi masalah dari pengunjung', decoded.includes('Kasir sering macet pas jam makan siang.'));
  check('pesan memuat penanda (web-<segmen>-<paket>)', /\(web-[a-z-]+\)/.test(decoded), (decoded.match(/\(web-[^)]*\)/) || [''])[0]);

  const edit = await page.$('.order-row-edit');
  if (edit) {
    await edit.click();
    await sleep(400);
    const afterEdit = await label();
    check('tombol Ubah kembali ke langkah sebelumnya', !!afterEdit, afterEdit);
  } else {
    check('tombol Ubah tersedia di ringkasan', false);
  }

  // Ulangi dari awal
  await page.reload({ waitUntil: 'networkidle0' });
  await page.evaluate(() => document.getElementById('pesan')?.scrollIntoView());
  await page.waitForSelector('.order-opt');
  await (await page.$$('.order-opt'))[0].click();
  await sleep(500);
  await (await page.$$('.order-opt'))[0].click();
  await sleep(300);
  await (await page.$('.order-next')).click();
  await sleep(500);
  await (await page.$$('.order-pkg'))[0].click();
  await sleep(500);
  const restart = await page.$('.order-restart');
  check('tombol Ulangi dari awal tersedia', !!restart);
  if (restart) {
    await restart.click();
    await sleep(400);
    const afterReset = await label();
    check('Ulangi dari awal kembali ke langkah 1', /1/.test(afterReset), afterReset);
  }

  check('tanpa error konsol', problems.length === 0, problems.slice(0, 2).join(' | '));
  await browser.close();
  console.log(failed ? `\n${failed} pemeriksaan gagal` : '\nSemua lulus');
  process.exit(failed ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
