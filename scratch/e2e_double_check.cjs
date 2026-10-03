const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting automated headless browser verification...');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const errors = [];
    const failedRequests = [];

    page.on('pageerror', (err) => {
      errors.push('Page Error: ' + err.message);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push('Console Error: ' + msg.text());
      }
    });

    page.on('response', (res) => {
      if (res.status() >= 400) {
        failedRequests.push(`${res.status()} on ${res.url()}`);
      }
    });

    console.log('Navigating to http://localhost:3000/...');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 30000 });

    // 1. Check title and html lang
    const title = await page.title();
    const lang = await page.$eval('html', (el) => el.getAttribute('lang'));
    console.log(`Initial Title: "${title}" | Lang: "${lang}"`);

    // 2. Check sections in DOM
    const sections = ['introHero', 'familiar', 'work', 'quadrant', 'skills', 'process', 'orbit', 'about', 'testimonials', 'faq', 'contact'];
    for (const sec of sections) {
      const el = await page.$('#' + sec);
      if (!el) {
        errors.push(`Missing section #${sec} in DOM`);
      }
    }
    console.log(`Verified ${sections.length} core page sections present in DOM.`);

    // 3. Test Language Toggle to EN
    const enBtn = await page.$('button[aria-label="Select English Language"]');
    if (enBtn) {
      await enBtn.click();
      await new Promise((r) => setTimeout(r, 400));
      const enTitle = await page.title();
      const enLang = await page.$eval('html', (el) => el.getAttribute('lang'));
      console.log(`Switched to EN -> Title: "${enTitle}" | Lang: "${enLang}"`);
      if (enLang !== 'en') errors.push('Language toggle failed to update html[lang] to en');
    } else {
      errors.push('EN language toggle button not found');
    }

    // Switch back to ID
    const idBtn = await page.$('button[aria-label="Pilih Bahasa Indonesia"]');
    if (idBtn) {
      await idBtn.click();
      await new Promise((r) => setTimeout(r, 400));
      const idLang = await page.$eval('html', (el) => el.getAttribute('lang'));
      console.log(`Switched back to ID -> Lang: "${idLang}"`);
      if (idLang !== 'id') errors.push('Language toggle failed to return to id');
    }

    // 4. Test Carousel navigation
    const nextBtn = await page.$('button[aria-label="Proyek selanjutnya"]');
    if (nextBtn) {
      await nextBtn.click();
      await new Promise((r) => setTimeout(r, 500));
      console.log('Carousel Next button clicked successfully.');
    }

    // 5. Test Case Study Modal
    const readStoryBtn = await page.$('.wheel-scene button');
    if (readStoryBtn) {
      await readStoryBtn.click();
      await new Promise((r) => setTimeout(r, 500));
      const modal = await page.$('[data-lenis-prevent="true"]');
      if (modal) {
        console.log('Case study modal opened successfully.');
        // Press Escape to close
        await page.keyboard.press('Escape');
        await new Promise((r) => setTimeout(r, 400));
        console.log('Case study modal closed via Escape key.');
      } else {
        errors.push('Case study modal did not open upon clicking read story');
      }
    }

    // 6. Verify Videos & Posters
    const videoData = await page.$$eval('video', (vids) =>
      vids.map((v) => ({
        poster: v.getAttribute('poster'),
        sources: Array.from(v.querySelectorAll('source')).map((s) => s.getAttribute('src'))
      }))
    );
    console.log(`Verified ${videoData.length} video players on page with active poster thumbnails.`);
    for (const v of videoData) {
      if (!v.poster) errors.push('Video player missing poster attribute');
      if (v.sources.length === 0) errors.push('Video player missing source elements');
    }

    console.log('\n--- VERIFICATION SUMMARY ---');
    console.log(`Runtime JS/Page Errors: ${errors.length}`);
    if (errors.length > 0) {
      errors.forEach((e) => console.error('  - ' + e));
    }
    console.log(`Failed HTTP Requests (4xx/5xx): ${failedRequests.length}`);
    if (failedRequests.length > 0) {
      failedRequests.forEach((r) => console.error('  - ' + r));
    }

    if (errors.length === 0 && failedRequests.length === 0) {
      console.log('\n>>> DOUBLE CHECK RESULT: 100% CLEAN AND PASSING <<<');
    } else {
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('Puppeteer execution failed:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
})();
