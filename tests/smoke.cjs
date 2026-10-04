// Tes asap (smoke test) untuk situs yang sudah di-build.
// Jalankan:  npm run build && npm run preview   (terminal 1)
//            npm run test:e2e                    (terminal 2)
// Opsi: BASE_URL (default http://127.0.0.1:4173), CHROME_PATH (jalur Chrome/Chromium).
const puppeteer = require('puppeteer');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4173';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'LULUS' : 'GAGAL'}  ${name}${detail ? '  -> ' + detail : ''}`);
};

async function open(browser, { w, h, mobile }) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
  const problems = [];
  page.on('pageerror', (e) => problems.push('pageerror: ' + e));
  page.on('console', (m) => m.type() === 'error' && problems.push('console: ' + m.text()));
  page.on('requestfailed', (r) => problems.push('requestfailed: ' + r.url()));
  page.on('response', (r) => r.status() >= 400 && problems.push(`http ${r.status()}: ${r.url()}`));
  await page.goto(BASE + '/', { waitUntil: 'networkidle0' });
  await sleep(800);
  // gulir sekali supaya section lazy dan animasi muncul
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += 500) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await sleep(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(300);
  return { page, problems };
}

const SECTIONS = ['introHero', 'segments', 'work', 'process', 'paket', 'pesan', 'about', 'faq', 'contact'];

async function structure(page, tag) {
  const info = await page.evaluate((ids) => {
    const text = document.body.innerText;
    return {
      missing: ids.filter((id) => !document.getElementById(id)),
      mains: document.querySelectorAll('main').length,
      h1s: document.querySelectorAll('h1').length,
      footers: document.querySelectorAll('footer').length,
      skip: !!document.querySelector('a.skip-link[href="#main"]'),
      overflow: document.documentElement.scrollWidth > innerWidth,
      heroText: document.getElementById('introHero')?.innerText || '',
      heroPrice: !!document.querySelector('#introHero a[href="#paket"]'),
      dash: /[–—]/.test(text),
      emoji: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(text),
      deadLinks: [...document.querySelectorAll('a[target="_blank"]')].filter((a) => a.getAttribute('href') === '#').length,
      fonts: document.fonts.check('16px "Jost Variable"') && document.fonts.check('16px "Inter Variable"'),
      waHrefs: [...document.querySelectorAll('a[href*="api.whatsapp.com"]')].map((a) => a.href),
    };
  }, SECTIONS);
  check(`${tag}: semua section ada`, info.missing.length === 0, info.missing.join(','));
  check(`${tag}: satu main, satu h1, satu footer, ada skip link`, info.mains === 1 && info.h1s === 1 && info.footers === 1 && info.skip);
  check(`${tag}: tidak ada scroll horizontal`, !info.overflow);
  check(`${tag}: hero tanpa angka harga, ada tautan ke paket`, !/Rp\s?\d/.test(info.heroText) && info.heroPrice);
  check(`${tag}: tanpa tanda pisah panjang (em/en dash) dan emoji`, !info.dash && !info.emoji);
  check(`${tag}: tidak ada tautan keluar dengan href "#"`, info.deadLinks === 0);
  check(`${tag}: font self-host termuat`, info.fonts);
  check(`${tag}: ada tautan WhatsApp dan semuanya punya penanda (web-...)`, info.waHrefs.length >= 3 && info.waHrefs.every((u) => decodeURIComponent(u).includes('(web-')), `${info.waHrefs.length} tautan`);
}

async function faq(page, tag) {
  const r = await page.evaluate(async () => {
    const qs = [...document.querySelectorAll('#faq .faq-q')];
    const open = () => qs.map((q) => q.getAttribute('aria-expanded') === 'true');
    const first = open();
    qs[1].click();
    await new Promise((res) => setTimeout(res, 500));
    const second = open();
    const a = document.getElementById(qs[1].getAttribute('aria-controls'));
    const inner = a.querySelector('.faq-a-inner');
    return { n: qs.length, firstOpen: first[0] && first.filter(Boolean).length === 1, secondOnly: second[1] && second.filter(Boolean).length === 1, fits: inner.scrollHeight <= inner.clientHeight + 1 };
  });
  check(`${tag}: FAQ pertama terbuka, klik membuka satu saja, jawaban tidak terpotong`, r.firstOpen && r.secondOnly && r.fits, `${r.n} pertanyaan`);
}

async function segmentFlow(page, tag) {
  const r = await page.evaluate(async () => {
    const b = [...document.querySelectorAll('#segments button')].find((x) => /Kafe|Cafe/i.test(x.textContent));
    if (!b) return { ok: false };
    b.click();
    await new Promise((res) => setTimeout(res, 900));
    const pressed = [...document.querySelectorAll('#work button[aria-pressed="true"]')].map((x) => x.textContent.trim());
    const status = document.querySelector('#work p[aria-live="polite"]')?.innerText || '';
    return { ok: true, pressed, status };
  });
  check(`${tag}: pilih jenis usaha menyaring Contoh Sistem dan menampilkan kalimat penjelas`, r.ok && r.pressed.length === 1 && r.status.length > 10, JSON.stringify(r.pressed) + ' | ' + (r.status || '').slice(0, 60));
}


async function content(page, tag) {
  const r = await page.evaluate(async () => {
    const paket = document.getElementById('paket')?.innerText || '';
    const cards = document.querySelectorAll('#paket .pkg-card').length;
    const deprecated = ['marquee', 'familiar', 'quadrant', 'skills', 'orbit', 'testimonials'].filter((id) => document.getElementById(id));
    const projects = document.querySelectorAll('#work article').length;
    // modal cerita: buka lewat tombol kartu pertama, tutup dengan Escape
    const btn = document.querySelector('#work article button');
    btn.click();
    await new Promise((res) => setTimeout(res, 600));
    const opened = !!document.querySelector('[data-lenis-prevent="true"]');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await new Promise((res) => setTimeout(res, 500));
    const closed = !document.querySelector('[data-lenis-prevent="true"]');
    return { price: /Rp\s?499\.000/.test(paket), cards, deprecated, projects, opened, closed };
  });
  check(`${tag}: 3 kartu paket dan harga Rp 499.000 hanya di section Paket`, r.cards === 3 && r.price);
  check(`${tag}: section lama (marquee, quadrant, skills, dst.) tidak ada`, r.deprecated.length === 0, r.deprecated.join(','));
  check(`${tag}: 7 contoh sistem tampil di grid`, r.projects >= 7, `${r.projects} kartu`);
  check(`${tag}: modal cerita terbuka dan tertutup dengan Escape`, r.opened && r.closed);
}

async function tapTargets(page, tag, minH) {
  // Di HP target minimal 44px tinggi (anjuran Apple/Google); di desktop minimal 24px (WCAG 2.2 AA).
  const small = await page.evaluate((min) => {
    const out = [];
    const sel = '.nav-cta, .lang-btn, .footer-links a, .footer-social a, .hero-btn, .hero-price-link, .cta-wa, .faq-q, .floating-wa.is-visible';
    for (const el of document.querySelectorAll(sel)) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.height < min || r.width < 24) out.push(`${el.tagName.toLowerCase()} "${(el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 18)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
    }
    return out;
  }, minH);
  check(`${tag}: target sentuh utama minimal ${minH}px tinggi`, small.length === 0, small.slice(0, 5).join('; '));
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || undefined,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });

  for (const [tag, vp] of [['desktop', { w: 1440, h: 900, mobile: false }], ['hp', { w: 390, h: 844, mobile: true }]]) {
    const { page, problems } = await open(browser, vp);
    await structure(page, `${tag} ID`);
    await faq(page, `${tag} ID`);
    await content(page, `${tag} ID`);
    await segmentFlow(page, `${tag} ID`);
    if (vp.mobile) {
      await page.evaluate(() => window.scrollTo(0, 2400));
      await sleep(600);
    }
    await tapTargets(page, `${tag} ID`, vp.mobile ? 44 : 24);
    check(`${tag} ID: tanpa error konsol atau permintaan gagal`, problems.length === 0, problems.slice(0, 3).join(' | '));

    // Bahasa Inggris
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.evaluate(() => [...document.querySelectorAll('.lang-btn')].find((b) => b.textContent.trim() === 'EN').click());
    await sleep(600);
    const en = await page.evaluate(() => ({ lang: document.documentElement.lang, h1: document.querySelector('h1').innerText, title: document.title }));
    check(`${tag} EN: bahasa dan judul berganti`, en.lang === 'en' && /business/i.test(en.h1 + en.title), en.h1.replace(/\n/g, ' '));
    await structure(page, `${tag} EN`);
    check(`${tag} EN: tanpa error konsol atau permintaan gagal`, problems.length === 0, problems.slice(0, 3).join(' | '));
    await page.close();
  }

  // Meta untuk pratinjau tautan
  const page = await browser.newPage();
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  const meta = await page.evaluate(() => ({
    og: document.querySelector('meta[property="og:image"]')?.content,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    ld: !!document.querySelector('script[type="application/ld+json"]'),
    desc: document.querySelector('meta[name="description"]')?.content || '',
  }));
  check('meta: og:image absolut ke og-image.jpg, canonical, JSON-LD', /^https:\/\/.+\/og-image\.jpg$/.test(meta.og || '') && !!meta.canonical && meta.ld);
  check('meta: deskripsi tanpa angka harga', !/Rp\s?\d/.test(meta.desc));
  const og = await page.evaluate(async (u) => (await fetch(new URL(u).pathname)).status, meta.og);
  check('meta: og-image.jpg bisa diunduh', og === 200, String(og));
  const sample = await browser.newPage();
  const res = await sample.goto(BASE + '/contoh/kedai-kopi/', { waitUntil: 'domcontentloaded' });
  const robots = await sample.$eval('meta[name="robots"]', (el) => el.content).catch(() => '');
  check('contoh website: terbuka (200) dan berlabel noindex', res.status() === 200 && /noindex/.test(robots), `${res.status()} ${robots}`);
  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} lulus`);
  process.exit(failed.length ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
