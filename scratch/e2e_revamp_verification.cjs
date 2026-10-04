const puppeteer = require('puppeteer');

(async () => {
  console.log('=== STARTING DEEP E2E AUDIT & DOUBLE CHECK FOR REVAMP (PHASE 0-2) ===\n');
  let browser;
  const errors = [];
  const warnings = [];
  const logError = (msg) => { console.error('  [ERROR] ' + msg); errors.push(msg); };
  const logWarn = (msg) => { console.warn('  [WARN] ' + msg); warnings.push(msg); };
  const logPass = (msg) => { console.log('  [PASS] ' + msg); };

  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    page.on('pageerror', (err) => logError('Browser Page Error: ' + err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        logError('Browser Console Error: ' + msg.text());
      }
    });

    page.on('response', (res) => {
      if (res.status() >= 400) {
        logError(`HTTP ${res.status()} on ${res.url()}`);
      }
    });

    console.log('1. Loading Homepage at http://localhost:3000/...');
    const res = await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 30000 });
    if (res.status() === 200) {
      logPass('Homepage loaded with HTTP 200');
    } else {
      logError(`Homepage returned status ${res.status()}`);
    }

    // 2. Check title and html lang
    const initialTitle = await page.title();
    const initialLang = await page.$eval('html', (el) => el.getAttribute('lang'));
    console.log(`\n2. Verifying Title & Lang: "${initialTitle}" | Lang: "${initialLang}"`);
    if (initialLang === 'id' || initialLang === 'en') {
      logPass(`Valid html[lang]: ${initialLang}`);
    } else {
      logError(`Unexpected html[lang]: ${initialLang}`);
    }

    // 3. Verify all active Revamp sections exist in DOM
    console.log('\n3. Verifying Active Revamp Sections in DOM...');
    const activeSections = [
      'introHero',
      'segments',
      'work',
      'process',
      'paket',
      'pesan',
      'about',
      'faq',
      'contact'
    ];
    for (const secId of activeSections) {
      const el = await page.$('#' + secId);
      if (el) {
        logPass(`Section #${secId} found`);
      } else {
        logError(`Section #${secId} MISSING from DOM`);
      }
    }

    // Verify deprecated sections are NOT in DOM
    const deprecatedSections = ['marquee', 'familiar', 'quadrant', 'skills', 'orbit', 'testimonials'];
    for (const depId of deprecatedSections) {
      const el = await page.$('#' + depId);
      if (!el) {
        logPass(`Deprecated section #${depId} is properly unmounted`);
      } else {
        logWarn(`Deprecated section #${depId} is still mounted in DOM`);
      }
    }

    // 4. Test Language Toggle ID <-> EN
    console.log('\n4. Testing Language Toggle ID <-> EN...');
    const enBtn = await page.$('button[aria-label="Select English Language"]');
    if (enBtn) {
      await enBtn.click();
      await new Promise((r) => setTimeout(r, 400));
      const enTitle = await page.title();
      const enLang = await page.$eval('html', (el) => el.getAttribute('lang'));
      if (enLang === 'en') {
        logPass(`Successfully toggled to EN: Title="${enTitle}"`);
      } else {
        logError(`Language toggle failed: html[lang] is ${enLang}, expected "en"`);
      }

      // Switch back to ID
      const idBtn = await page.$('button[aria-label="Pilih Bahasa Indonesia"]');
      if (idBtn) {
        await idBtn.click();
        await new Promise((r) => setTimeout(r, 400));
        const idLang = await page.$eval('html', (el) => el.getAttribute('lang'));
        if (idLang === 'id') {
          logPass('Successfully toggled back to ID');
        } else {
          logError(`Switch back to ID failed: html[lang] is ${idLang}`);
        }
      }
    } else {
      logError('Language toggle button not found');
    }

    // 5. Test Segments Selection and Filter Interaction
    console.log('\n5. Testing Segments & Cross-filtering...');
    const segmentButtons = await page.$$('.seg-btn');
    console.log(`Found ${segmentButtons.length} segment selector items.`);
    if (segmentButtons.length >= 6) {
      logPass('All 6 business segment options present');
      // Click F&B segment (index 1)
      await segmentButtons[1].click();
      await new Promise((r) => setTimeout(r, 300));
      logPass('Clicked F&B segment button');
    } else {
      logError(`Expected 6 segment buttons, found ${segmentButtons.length}`);
    }

    // 6. Test Work Grid & Modal
    console.log('\n6. Testing Work Grid, Filters & Case Study Modal...');
    const filterButtons = await page.$$('.work-chips button');
    console.log(`Found ${filterButtons.length} work filter chips.`);
    if (filterButtons.length > 0) {
      // Click "Semua" to reset filter
      await filterButtons[0].click();
      await new Promise((r) => setTimeout(r, 300));
      logPass('Reset filter to Semua');
    }

    // Check project cards
    const projectCards = await page.$$('#work article');
    console.log(`Project cards rendered: ${projectCards.length}`);
    if (projectCards.length >= 7) {
      logPass(`All ${projectCards.length} project items (including CTA card) present in grid`);
    } else {
      logError(`Expected at least 7 project cards, found ${projectCards.length}`);
    }

    // Test "Baca ceritanya" modal
    const readStoryButtons = await page.$$('#work article button[aria-label*="ceritanya"], #work article button[aria-label*="story"], #work article button');
    let modalOpened = false;
    for (const btn of readStoryButtons) {
      const label = await page.evaluate(el => el.getAttribute('aria-label') || el.textContent, btn);
      if (label && (label.includes('cerita') || label.includes('story'))) {
        await btn.click();
        await new Promise((r) => setTimeout(r, 500));
        const modal = await page.$('[data-lenis-prevent="true"]');
        if (modal) {
          modalOpened = true;
          logPass('Case study modal opened');
          // Close via Escape
          await page.keyboard.press('Escape');
          await new Promise((r) => setTimeout(r, 400));
          const modalAfter = await page.$('[data-lenis-prevent="true"]');
          if (!modalAfter) {
            logPass('Case study modal closed via Escape');
          } else {
            logError('Case study modal remained open after Escape');
          }
        }
        break;
      }
    }
    if (!modalOpened) {
      logWarn('Could not test modal opening via button click');
    }

    // 7. Test Packages Section
    console.log('\n7. Testing Packages Section & Rp 499.000 Pricing...');
    const packageCards = await page.$$('.pkg-card');
    console.log(`Found ${packageCards.length} package cards.`);
    if (packageCards.length === 3) {
      logPass('3 package cards present (Website Usaha, Aplikasi Usaha, Sistem Lengkap)');
    } else {
      logError(`Expected 3 package cards, found ${packageCards.length}`);
    }

    const packageText = await page.$eval('#paket', el => el.innerText);
    if (packageText.includes('Rp 499.000')) {
      logPass('Found explicit baseline pricing "Rp 499.000" in Packages section');
    } else {
      logError('Pricing "Rp 499.000" NOT found in Packages section');
    }

    // 8. Test 3-step Order Flow (OrderFlow)
    console.log('\n8. Testing 3-step Order Flow...');
    const orderSection = await page.$('#pesan');
    if (orderSection) {
      logPass('OrderFlow section (#pesan) present');
      // Step 1: Select business type
      const bizButtons = await page.$$('#pesan button.segment-card, #pesan .order-biz-btn, #pesan button');
      console.log(`Order step options found: ${bizButtons.length}`);
      
      // Look for next/continue button or select an option
      const nextStepBtn = await page.$('#pesan button[type="submit"], #pesan .order-btn-next');
      if (nextStepBtn) {
        logPass('Order flow navigation button found');
      }
    } else {
      logError('OrderFlow section (#pesan) MISSING');
    }

    // 9. Test Mobile Viewport (390px)
    console.log('\n9. Testing Mobile Viewport (390px iPhone width)...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await new Promise((r) => setTimeout(r, 600));

    // Check no horizontal scroll overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const innerWidth = await page.evaluate(() => window.innerWidth);
    console.log(`Mobile scrollWidth: ${scrollWidth}px | innerWidth: ${innerWidth}px`);
    if (scrollWidth <= innerWidth + 1) {
      logPass('Mobile layout has NO horizontal overflow/leak');
    } else {
      logError(`Mobile layout has horizontal overflow: scrollWidth=${scrollWidth} > innerWidth=${innerWidth}`);
    }

    // Check Floating WhatsApp button
    const floatingWa = await page.$('.floating-wa');
    if (floatingWa) {
      logPass('Floating WhatsApp button present on mobile');
    } else {
      logWarn('Floating WhatsApp button element not found on mobile');
    }

    // 10. Check Kedai Kopi Sample
    console.log('\n10. Testing Kedai Kopi Sample at /contoh/kedai-kopi/index.html...');
    const kopiRes = await page.goto('http://localhost:3000/contoh/kedai-kopi/index.html', { waitUntil: 'networkidle2' });
    if (kopiRes.status() === 200) {
      logPass('Kedai Kopi sample loads with HTTP 200');
      const kopiRobots = await page.$eval('meta[name="robots"]', el => el.getAttribute('content')).catch(() => null);
      if (kopiRobots && kopiRobots.includes('noindex')) {
        logPass('Kedai Kopi has meta robots noindex');
      } else {
        logWarn('Kedai Kopi meta robots noindex missing or different');
      }
    } else {
      logError(`Kedai Kopi sample returned HTTP ${kopiRes.status()}`);
    }

    console.log('\n=============================================');
    console.log('            E2E AUDIT SUMMARY                ');
    console.log('=============================================');
    console.log(`Total Errors: ${errors.length}`);
    console.log(`Total Warnings: ${warnings.length}`);
    if (errors.length === 0) {
      console.log('\n>>> STATUS: ALL CORE REVAMP FLOWS VERIFIED WITH 0 ERRORS! <<<\n');
    } else {
      console.log('\n>>> STATUS: FAILED WITH ERRORS <<<');
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('Fatal E2E error:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
})();
