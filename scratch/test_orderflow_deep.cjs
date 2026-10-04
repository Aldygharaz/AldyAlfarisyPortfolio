const puppeteer = require('puppeteer');

(async () => {
  console.log('=== TESTING ORDERFLOW INTERACTION & WHATSAPP URL GENERATION ===\n');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    await page.goto('http://localhost:3000/#pesan', { waitUntil: 'networkidle2' });

    // Step 1: Check step indicator
    const stepLabel1 = await page.$eval('.order-progress-label', el => el.innerText);
    console.log('Step 1 indicator:', stepLabel1);

    // Select F&B in Step 1 (the 2nd .order-opt)
    const options1 = await page.$$('.order-opt');
    console.log(`Found ${options1.length} business options in Step 1.`);
    await options1[1].click(); // F&B
    await new Promise(r => setTimeout(r, 400));

    // Step 2: Verify in step 2
    const stepLabel2 = await page.$eval('.order-progress-label', el => el.innerText);
    console.log('Step 2 indicator:', stepLabel2);

    // Toggle 2 needs
    const needOptions = await page.$$('.order-opt');
    console.log(`Found ${needOptions.length} need options in Step 2.`);
    await needOptions[0].click(); // First need
    await new Promise(r => setTimeout(r, 150));
    await needOptions[1].click(); // Second need
    await new Promise(r => setTimeout(r, 150));

    // Click next to Step 3 (Packages)
    const nextBtn2 = await page.$('.order-next');
    await nextBtn2.click();
    await new Promise(r => setTimeout(r, 400));

    // Step 3: Packages
    const stepLabel3 = await page.$eval('.order-progress-label', el => el.innerText);
    console.log('Step 3 indicator:', stepLabel3);

    const pkgOptions = await page.$$('.order-pkg');
    console.log(`Found ${pkgOptions.length} package options in Step 3.`);
    // Select 2nd package (Aplikasi Usaha)
    await pkgOptions[1].click();
    await new Promise(r => setTimeout(r, 400));

    // Step 4: Summary (Ringkasan)
    const stepLabel4 = await page.$eval('.order-progress-label', el => el.innerText);
    console.log('Step 4 (Summary) indicator:', stepLabel4);

    const summaryText = await page.$eval('.order-summary', el => el.innerText);
    console.log('\nSummary content:\n', summaryText);

    // Type in problem textarea
    const textarea = await page.$('.order-textarea');
    if (textarea) {
      await textarea.type('Kasir sering macet pas jam makan siang.');
      await new Promise(r => setTimeout(r, 200));
    }

    // Inspect WhatsApp submit button URL
    const waLink = await page.$eval('a.order-send', el => el.getAttribute('href'));
    console.log('\nGenerated WhatsApp Link:\n', waLink);

    if (!waLink.startsWith('https://api.whatsapp.com/send?phone=6281410538887')) {
      throw new Error('Invalid WhatsApp phone/base URL');
    }
    const decodedWa = decodeURIComponent(waLink);
    console.log('\nDecoded WhatsApp Message:\n', decodedWa);

    if (!decodedWa.includes('Kasir sering macet pas jam makan siang.')) {
      throw new Error('User input problem was not included in WhatsApp message');
    }
    if (!decodedWa.includes('(web-')) {
      throw new Error('Missing tracking tag (web-...) in message');
    }

    // Test "Ubah" button (should go back to step 1)
    const changeBtn = await page.$('.order-row-edit');
    if (changeBtn) {
      await changeBtn.click();
      await new Promise(r => setTimeout(r, 300));
      const stepAfterChange = await page.$eval('.order-progress-label', el => el.innerText);
      console.log('After clicking Ubah ->', stepAfterChange);
    }

    // Test "Ulangi dari awal" button
    await page.reload({ waitUntil: 'networkidle2' });
    await page.waitForSelector('.order-opt');
    const optionsReset = await page.$$('.order-opt');
    await optionsReset[0].click(); // step 1 -> step 2
    
    await page.waitForSelector('.order-opt');
    await new Promise(r => setTimeout(r, 400));
    const needOptionsReset = await page.$$('.order-opt');
    if (needOptionsReset.length > 0) {
      await needOptionsReset[0].click();
      await new Promise(r => setTimeout(r, 300));
    }

    const nextBtnReset = await page.$('.order-next');
    if (nextBtnReset) {
      await nextBtnReset.click(); // step 2 -> step 3
      await new Promise(r => setTimeout(r, 400));
    }

    const pkgReset = await page.$$('.order-pkg');
    if (pkgReset.length > 0) {
      await pkgReset[0].click(); // step 3 -> step 4 (summary)
      await new Promise(r => setTimeout(r, 400));
    }

    const resetBtn = await page.$('.order-restart');
    if (resetBtn) {
      await resetBtn.click();
      await new Promise(r => setTimeout(r, 300));
      const stepAfterReset = await page.$eval('.order-progress-label', el => el.innerText);
      console.log('After clicking Ulangi ->', stepAfterReset);
    }

    console.log('\n>>> ORDERFLOW INTERACTION TEST PASSED 100% CLEAN! <<<');
  } catch (err) {
    console.error('OrderFlow test error:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
})();
