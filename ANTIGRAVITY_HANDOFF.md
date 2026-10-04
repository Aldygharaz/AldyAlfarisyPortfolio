# Catatan Serah Terima untuk Antigravity

Disusun: 4 Oktober 2026 oleh Claude (sesi pemulihan dan revamp portofolio).
Branch kerja: `revamp/fase-0-1` (lokal, belum di-push). Berisi Fase 0, Fase 1, dan Fase 2.

Baca dokumen ini sampai habis sebelum mengubah kode di repo ini.

> **Pembaruan 4 Oktober 2026 (malam):** Tahap 1 sampai 3 rencana "portofolio flawless" sudah dikerjakan Claude di branch ini (tulisan, layout, teknis). Bagian 8 di bawah yang berlaku. Kalau ada isi bagian 3, 4.4, dan 5 yang bertentangan dengan bagian 8, ikuti bagian 8.

---

## 1. Aturan wajib

1. **Jangan `git push`** ke remote tanpa izin tertulis dari Aldy. Semua pekerjaan saat ini sengaja disimpan di lokal.
2. **Jangan deploy** ke Vercel sebelum Aldy mengizinkan.
3. Perintah npm di Windows PowerShell wajib diawali `cmd /c` (contoh: `cmd /c npm run build`).
4. **Commit pekerjaan Anda sebelum sesi berakhir.** Sesi Antigravity pada 3 Oktober malam meninggalkan perubahan yang belum di-commit (ThemeContext, poster video, video KAVANA). Perubahan itu sudah diamankan di commit `27c835d`, tetapi kebiasaan ini berisiko saling menimpa antar-agent.
5. Arah visual tetap seperti sekarang. Jangan mengganti warna, font, atau gaya tanpa arahan Aldy.
6. Aturan copy (berlaku untuk semua teks di website):
   - Sapaan hanya "Anda" dan "saya". Dilarang "kita", "kamu", "kalian".
   - Tanpa emoji, tanpa tanda pisah panjang (em dash atau en dash).
   - Tanpa klaim absolut ("zero", "100%", "dijamin", "terbaik" sebagai klaim) dan tanpa angka yang tidak tertulis di keputusan.
   - Semua cerita masalah dibingkai sebagai situasi yang sering terjadi, bukan testimoni.
   - Kalimat pendek, kata sehari-hari ("nggak" di kalimat ngobrol, "tidak" di label dan tombol).
   - Hindari pola tulisan AI: "Anda tidak perlu...", "Ini bukan X. Ini Y.", "Wajar kalau...", "Tidak apa-apa", "bukan sekadar X, tapi Y".
   - Format Rupiah memakai titik ribuan: `Rp 499.000`.
7. Persuasi hanya dengan cara jujur. Dilarang hitung mundur palsu, "slot tinggal 2" yang dikarang, testimoni karangan, dan harga coret palsu.
8. Setiap teks baru wajib ditambahkan ke `content.id` dan `content.en` sekaligus di `src/locales/content.ts`.

## 2. Keputusan terbaru (4 Oktober 2026)

- Positioning: pembuat aplikasi dan website custom untuk pemilik bisnis.
- Headline: "Usaha Anda punya cara sendiri. Aplikasinya yang ikut." (EN: "Your business has its own way. The app should follow it.")
- Harga: website usaha (profil usaha atau landing page satu halaman) mulai dari Rp 499.000. Paket aplikasi tampil "Hubungi saya untuk harga".
- Cara bayar: DP dulu, setelah gambaran solusi, ruang lingkup, dan harga final disepakati. Besaran DP tidak ditulis di website.
- Detail lengkap ada di bagian "Pembaruan Keputusan" di `../PORTFOLIO_KNOWLEDGE_BASE.md` (salinannya: `info.md`).
- Rencana lengkap ada di dokumen "Plan Improvement Portofolio Sokara untuk Pemilik Bisnis" di Claude Docs. Mintalah tautannya ke Aldy kalau perlu.

## 3. Yang sudah dikerjakan (Fase 0, 1, dan 2)

| Area | File |
| --- | --- |
| Copy baru ID dan EN (hero, segmen, janji kerja, SideNav, footer, Tentang saya, pesan WhatsApp). `content.ts` diubah dari satu baris menjadi format rapi supaya mudah diedit | `src/locales/content.ts` |
| Hero: headline baru (tepat 2 baris mulai lebar 820 px), harga "mulai dari", baris kepercayaan, tombol kedua menuju Pilih jenis usaha | `src/sections/IntroHero.tsx`, `src/App.css` |
| Section baru Pilih jenis usaha (6 segmen, situasi, contoh yang cocok, WhatsApp per segmen) | `src/sections/Segments.tsx` |
| Konteks segmen bersama | `src/context/SegmentContext.tsx` |
| Contoh sistem: grid dengan saringan jenis usaha (menggantikan carousel 3D), kartu ajakan pengisi baris terakhir, di HP awalnya 3 kartu plus tombol "Lihat semua" | `src/sections/Work.tsx` |
| Tiga janji kerja di Langkah Kerja | `src/sections/Process.tsx` |
| Tombol WhatsApp melayang (HP saja), tombol kembali ke atas digeser naik | `src/components/FloatingWhatsApp.tsx`, `src/App.css` |
| Helper link WhatsApp dan gulir halus | `src/lib/whatsapp.ts` |
| Pelacakan event tanpa terikat penyedia (belum aktif) | `src/lib/analytics.ts` |
| Section dikeluarkan dari halaman: Marquee, Familiar, Skills (heksagon), Orbit, Testimonials. File komponennya masih ada | `src/App.tsx` |
| Meta SEO ID dan EN disesuaikan positioning baru | `index.html`, `src/context/LocaleContext.tsx` |
| Dokumen internal dibersihkan dari klaim "60%", "zero", "100%" | `../PORTFOLIO_KNOWLEDGE_BASE.md`, `info.md`, `../Deskripsi project.txt` |
| Fase 2: section Paket dan Harga (Website Usaha mulai dari Rp 499.000, Aplikasi Usaha dan Sistem Lengkap "Hubungi saya untuk harga", label opsi tengah, kotak cara bayar DP). Menggantikan "Yang bisa saya bantu" | `src/sections/Packages.tsx` |
| Fase 2: alur pesan 3 langkah (jenis usaha, kebutuhan, paket) dengan indikator "Langkah 1 dari 3 selesai", rekomendasi paket yang jujur, ringkasan, kolom masalah opsional, kirim ke WhatsApp | `src/sections/OrderFlow.tsx`, `src/context/OrderContext.tsx`, `src/lib/whatsapp.ts` |
| Fase 2: 3 pertanyaan umum baru (cara bayar DP, kepemilikan data, pindah vendor) dan jawaban biaya diperbarui | `src/locales/content.ts` |
| Fase 2: contoh website usaha untuk paket Rp 499.000 (kedai kopi fiktif, berlabel jelas, `noindex`) | `public/contoh/kedai-kopi/index.html` |
| Fase 2: navigasi atas menjadi Contoh Sistem, Harga, Pertanyaan; tombol WhatsApp melayang disembunyikan di section Pesan dan Kontak | `src/locales/content.ts`, `src/components/FloatingWhatsApp.tsx` |

Urutan halaman sekarang: Hero, Pilih jenis usaha, Contoh sistem, Langkah kerja, Paket dan harga, Pesan dalam 3 langkah, Tentang saya, Pertanyaan umum, Kontak. `Quadrant.tsx` (Yang bisa saya bantu) tidak lagi dipakai.

### Pelacakan event

`track(nama, properti)` di `src/lib/analytics.ts` sekarang memakai Vercel Web Analytics (`@vercel/analytics`). Skrip hanya dipasang di build produksi dan tidak di localhost. Saat dev, event hanya dicatat ke konsol. Tampilan halaman tercatat otomatis setelah Web Analytics diaktifkan di dashboard Vercel. Event kustom (`track`) hanya tercatat di paket Vercel Pro atau Enterprise; di Hobby panggilannya aman tetapi tidak tercatat. Batas Vercel Pro: maksimal 2 properti per event, jadi jangan menambah properti ketiga.

| Event | Properti | Dipicu dari |
| --- | --- | --- |
| `wa_click` | `location` (hero, nav, segment, floating, contact, work_cta), `segment` | Semua tombol WhatsApp |
| `segment_select` | `segment`, `location` | Tombol segmen dan saringan grid |
| `demo_open` | `project`, `location` (card, modal) | Tombol "Coba langsung" |
| `story_open` | `project` | Tombol "Baca ceritanya" |
| `package_select` | `package`, `location` (packages, order_flow) | Pilih paket |
| `order_step` | `step` | Perpindahan langkah di alur pesan |
| `order_submit` | `segment`, `package` | Tombol "Kirim ringkasan ke WhatsApp" (isi masalah tidak pernah dikirim ke analytics) |
| `email_click` | `location` (contact) | Tautan email di section Kontak |
| `hero_price_link` | tanpa properti | Tautan "Lihat paket dan harga" di hero |

Jangan menghapus penanda `(web-<segmen>)` dan `(web-<segmen>-<paket>)` di akhir pesan WhatsApp. Aldy memakainya untuk menghitung chat yang datang dari website.

### Verifikasi yang sudah dilakukan

- `tsc -b`, ESLint (file yang diubah), dan `npm run build` lolos tanpa error.
- Screenshot desktop 1440 px dan HP 390 px, bahasa ID dan EN, tanpa error di konsol.
- Uji interaksi: tombol hero ke segmen, pilih segmen, grid tersaring, tombol melayang membawa penanda segmen, modal cerita buka dan tutup (Escape), "Lihat semua" di HP, ganti bahasa.
- Headline tepat 2 baris di lebar 820, 1024, 1280, 1366, 1440, dan 1920 px (ID dan EN). Tidak ada halaman yang meluber ke samping.
- Fase 2: alur pesan diuji dari awal sampai link WhatsApp (pilih segmen di section lain melompat ke langkah 2, rekomendasi paket, tombol Ubah kembali ke ringkasan, Ulangi dari awal, pilih paket dari section Paket), isi pesan WhatsApp sesuai template, guliran ke section Pesan sampai di HP dan desktop, tombol melayang tersembunyi di Pesan dan Kontak, contoh website tanpa luber di HP dan desktop.

## 4. Tugas yang paling cocok untuk Antigravity

### 4.1 Mode "Coba 2 menit" di aplikasi demo (repo terpisah, tidak ada di folder ini)

Tujuan: pemilik bisnis yang membuka demo langsung paham dalam 2 menit tanpa bingung.

Untuk masing-masing dari 7 demo (pos, kavana, sokaraaccountingdemo, hrms, crm, spa, lms):

1. Akun demo sudah terisi (tanpa harus mengetik email dan password), atau tombol "Masuk sebagai tamu".
2. Data contoh yang realistis untuk usaha Indonesia (nama produk, Rupiah bertitik).
3. Panduan 3 sampai 5 langkah yang bisa ditutup, berbahasa awam, menunjukkan "momen utama" demo itu (misalnya di POS: scan barang, matikan internet, transaksi tetap jalan, stok habis lalu perbaikan 1 klik).
4. Tombol kecil "Kembali ke portofolio" dan "Tanya di WhatsApp" (pakai pesan dengan penanda `(web-demo-<nama>)`).
5. Tanpa mengubah tampilan inti demo.

Setelah semua demo siap, kabari agar tombol "Coba langsung" di portofolio bisa diganti menjadi "Coba 2 menit".

### 4.2 Video demo bersuara (bersama Aldy)

Durasi 30 sampai 60 detik per project, suara Aldy, fokus pada satu masalah dan satu momen solusi. Poster video sudah ada di `public/videos/*-poster.webp`. Simpan video sebagai WebM dan MP4 (H.264) dengan nama yang sama. Sejak Tahap 3, MP4 di `public/videos/` ikut git (cadangan untuk Safari lama).

### 4.3 Fase 2 sudah selesai

Paket dan harga serta alur pesan sudah dikerjakan Claude (lihat bagian 3). Jangan membuat ulang. Kalau perlu mengubah, edit `Packages.tsx`, `OrderFlow.tsx`, dan teksnya di `content.ts`. Logika rekomendasi paket ada di `recommendPackage()` di `src/lib/whatsapp.ts`: hanya website menjadi Website Usaha, satu kebutuhan aplikasi menjadi Aplikasi Usaha, dua atau lebih menjadi Sistem Lengkap. Jaga agar rekomendasi tetap jujur, bukan mendorong ke paket termahal.

### 4.4 Lain-lain

- Bantu Aldy memasang balasan otomatis WhatsApp Business (teks di bagian 6).
- Analytics: Aldy memilih Vercel. Paket sudah terpasang di kode (bagian 8). Tinggal mengaktifkan Web Analytics di dashboard Vercel setelah deploy.
- File section yang tidak dipakai dan folder `scratch/` sudah dihapus pada Tahap 3 (bagian 8).

## 5. Hal teknis yang perlu diingat

- Hero sekarang dua kolom (tulisan dan foto) di layar 1024 px ke atas. Headline memakai `text-wrap: balance` dan tidak lagi dipaksa `nowrap`.
- `Work.tsx` sekarang memakai grid. Kartu memutar video hanya saat di-hover (desktop); di HP hanya poster, demi kecepatan.
- Sumber video KAVANA: `Sokara-Kavana.webm`, lalu `Sokara-Kavana.mp4`. Salinan ganda `Video-Kavana.*` sudah dihapus.
- Blok teks section yang dikeluarkan (marquee, familiar, quadrant, skills, orbit, testimonials) sudah dihapus dari `content.ts`.
- Situs live (www.aldyalfarisy.my.id) masih versi lama sebelum revamp.

## 6. Template balasan otomatis WhatsApp Business (untuk dipasang Aldy)

Pasang di WhatsApp Business > Alat bisnis > Pesan salam. Template ini tidak menjanjikan waktu balas tertentu.

```
Halo, terima kasih sudah menghubungi Sokara. Saya Aldy.

Pesan Anda sudah masuk. Saya balas dengan beberapa pertanyaan supaya bisa kasih gambaran solusi yang pas untuk usaha Anda.

Kalau belum sempat mengisi dari website, boleh ceritakan dulu:
1. Usaha Anda bergerak di bidang apa?
2. Bagian mana yang paling bikin capek sekarang?

Belum ada biaya apa pun di tahap ini.
```

Versi Inggris:

```
Hi, thanks for reaching out to Sokara. I'm Aldy.

Your message is in. I'll reply with a few questions so I can sketch a solution that fits your business.

If you haven't filled in the form on the website, feel free to share:
1. What kind of business do you run?
2. Which part wears you out the most right now?

There is no cost at this stage.
```

---

## 7. Catatan Pembaruan untuk Agent Claude (Sesi Antigravity - 4 Oktober 2026)

Bagian ini mencatat pekerjaan lanjutan, perbaikan teknis, dan audit yang telah diselesaikan oleh Antigravity pada branch `revamp/fase-0-1` (commit `35ea727` dan lanjutannya).

### 7.1 Hasil Audit dan Perbaikan Kode
1. **Zero Lint Warnings (`eslint .`)**:
   - `eslint.config.js`: Menambahkan pengecualian aturan `react-refresh/only-export-components` khusus untuk folder `src/components/ui/**/*.{ts,tsx}` dan `src/context/**/*.{ts,tsx}` karena komponen UI shadcn dan konteks aplikasi secara sah mengekspor varian CVA dan custom hooks pendamping.
   - `src/components/ui/carousel.tsx`: Menambahkan penanganan disable warning untuk pemanggilan sinkron awal `onSelect(api)`.
   - `src/context/OrderContext.tsx` & `src/context/SegmentContext.tsx`: Membersihkan komentar disable inline yang sudah tidak terpakai.
   - **Status**: `eslint .` kini menghasilkan **0 error dan 0 warning**.
2. **Penyempurnaan Aksesibilitas (WCAG 2.1 AA Focus States)**:
   - `src/App.css`: Menambahkan styling `.btn:focus-visible` dengan outline biru semantik dan offset 3px.
   - `src/sections/Navigation.tsx`: Menambahkan penanganan `:focus-visible` pada `.nav-link`, `.nav-login`, dan `.nav-cta` agar navigasi keyboard terlihat jelas.
3. **Pembersihan Copywriting Sesuai Aturan Ketat**:
   - `src/locales/content.ts`: Mengganti frasa "karyawan terbaik Anda resign" menjadi "karyawan andalan Anda resign" pada data situasi HRMS (`content.id.work.projects.hrms.situation`) agar kata "terbaik" tereliminasi 100% dari seluruh copy website.
   - Diverifikasi melalui deep-diff otomatis: key dan panjang array `content.id` dan `content.en` identik 100%.
4. **Relatif Path Contoh Kedai Kopi**:
   - `public/contoh/kedai-kopi/index.html`: Mengubah tautan kembali pada pita atas dari `/#paket` menjadi `../../#paket` agar aman saat situs dimuat pada root domain maupun subfolder.

### 7.2 Tindak Lanjut Tugas 4.1: Mode "Coba 2 Menit"
- Telah dibuat cetak biru arsitektur dan spesifikasi operasional di `docs/COBA_2_MENIT_SPEC.md`.
- Berisi skenario panduan 3 sampai 4 langkah untuk 7 demo (`pos`, `kavana`, `accounting`, `hrms`, `crm`, `spa`, `lms`), pemetaan penanda WhatsApp (`web-demo-<nama>`), dan kode komponen siap pakai `DemoTourWidget.tsx` (React/TypeScript) yang dapat langsung di-copas ke repo masing-masing demo.
- Ketika ketujuh demo sudah disematkan panduan tersebut, teks tombol pada kartu portofolio di `src/locales/content.ts` tinggal dialihkan dari `"Coba langsung"` menjadi `"Coba 2 menit"`.

### 7.3 Otomasi Pengujian E2E (Puppeteer Headless)
Telah disediakan dua skrip audit di folder `scratch/`:
1. `scratch/e2e_revamp_verification.cjs`: Memvalidasi keberadaan 9 section aktif, ketiadaan 6 section usang, toggle bahasa ID/EN, saringan segmen usaha di grid, pembukaan dan penutupan modal cerita (Escape key), kehadiran harga Rp 499.000, viewport HP (390 px) bebas horizontal overflow, serta status HTTP 200 contoh kedai kopi.
2. `scratch/test_orderflow_deep.cjs`: Memvalidasi alur interaktif formulir pemesanan 3 langkah dari langkah 1 (pilih jenis usaha), langkah 2 (pilih kebutuhan & kalkulasi dinamis rekomendasi paket), langkah 3 (pilih paket), langkah 4 (ringkasan, textarea masalah, pembentukan link WhatsApp dengan tracking tag `web-<segmen>-<paket>`), tombol Ubah, dan tombol Ulangi dari awal.

### 7.4 Status Branch dan Git
- Seluruh perubahan di-commit di lokal pada branch `revamp/fase-0-1`.
- Sesuai aturan wajib nomor 1, **tidak ada `git push` ke remote**.

---

## 8. Pembaruan Tahap 1 sampai 3 (Claude, 4 Oktober 2026 malam)

Dikerjakan lokal di branch `revamp/fase-0-1`. Tidak ada push dan tidak ada deploy.

### 8.1 Setelah menarik branch ini, jalankan dulu

```
cmd /c npm install
cmd /c npm run build
cmd /c npm run preview
cmd /c npm run test:e2e
```

Banyak dependensi tidak terpakai sudah dihapus dari `package.json` (paket Radix, recharts, react-router, dan lain-lain), jadi `node_modules` lama perlu diperbarui. `npm run test:e2e` butuh `npm run preview` berjalan di terminal lain (alamat bawaan `http://127.0.0.1:4173`, bisa diganti lewat `BASE_URL`).

### 8.2 Yang berubah

| Tahap | Perubahan | File |
| --- | --- | --- |
| 1 Tulisan | Semua copy ID dan EN ditulis ulang untuk pemilik bisnis: hero tanpa angka harga (harga hanya di kartu paket dan FAQ), tombol WhatsApp memakai kata "Tanya di WhatsApp", paket Website lebih jelas, kotak "Yang menentukan harga aplikasi", aturan berhenti di tengah jalan, FAQ dikelompokkan jadi tiga (Harga dan pembayaran, Proses dan dukungan, Soal kepercayaan) dan ditambah pertanyaan refund, dukungan 30 hari, kepemilikan data, pindah vendor | `src/locales/content.ts`, `src/sections/FAQ.tsx`, `index.html`, `src/context/LocaleContext.tsx` |
| 2 Layout | Hero dua kolom dengan foto, tautan "Lihat paket dan harga", judul bukan huruf besar semua. Langkah Kerja dua kolom dengan kartu "Tiga hal yang saya pegang" di samping. Paket: dua kotak di bawah kartu. Tentang saya: foto di atas pada HP, ukuran teks kecil dinaikkan. FAQ tanpa batas tinggi tetap. Kontak: penutup gelap, hanya tombol WhatsApp dan email. Footer: ikon YouTube dan LinkedIn pindah ke sini. Contoh Sistem: kalimat "Menampilkan contoh untuk: X. Ganti" saat disaring. Latar selang-seling (Paket, Tentang) | `src/sections/*.tsx`, `src/App.css` |
| 3 Teknis | Font di-host sendiri (`@fontsource-variable`, tanpa Google Fonts). Landmark `main`, tautan lompat, label navigasi, fokus keyboard terlihat, target sentuh 44 px di HP. Gambar pratinjau tautan 1200x630 (`public/og-image.jpg`, dibuat lewat `scripts/make-og-image.cjs`). Canonical, JSON-LD ProfessionalService tanpa harga, sitemap diperbarui, theme-color mengikuti warna merek. `vercel.json` (cache panjang untuk aset ber-hash, header keamanan). Vercel Analytics terpasang. MP4 cadangan untuk semua video. CSS mati dibersihkan (123 KB menjadi 44 KB), 53 komponen UI dan dependensi tidak terpakai, `scratch/`, plugin kimi, kompresi ganda, dan router dihapus | `index.html`, `vercel.json`, `vite.config.ts`, `package.json`, `src/**` |
| Tes | `tests/smoke.cjs` (struktur, bahasa, FAQ, filter, modal, paket, tap target, meta) dan `tests/orderflow.cjs` (alur pesan sampai tautan WhatsApp). Keduanya melanjutkan skrip Antigravity di `scratch/` yang sudah dihapus | `tests/` |

Hasil verifikasi saat commit: `tsc -b` dan `eslint .` bersih, 56 pemeriksaan smoke dan 14 pemeriksaan alur pesan lulus, axe 0 pelanggaran (desktop dan HP), CLS 0, muatan awal sekitar 294 KB.

### 8.3 Tugas baru untuk Antigravity (repo demo, di luar folder ini)

1. **Poster dan video lebih tajam.** Sumber video sekarang 640x360 sehingga poster di kartu Contoh Sistem terlihat lembut. Rekam ulang atau ekspor demo di 1280x720 atau lebih, lalu buat `*-poster.webp` 1280x720 (target di bawah 80 KB), `*.webm` (VP9) dan `*.mp4` (H.264, `-crf 27 -movflags +faststart`) dengan nama yang sama di `public/videos/`.
2. **Demo POS memakai Rupiah.** Thumbnail dan data demo POS masih menampilkan dolar. Ganti ke Rupiah bertitik dan nama produk Indonesia.
3. **Mode "Coba 2 menit"** untuk 7 demo, sesuai `docs/COBA_2_MENIT_SPEC.md` (bagian 4.1).
4. Setelah Aldy deploy: aktifkan Web Analytics di dashboard Vercel, bagikan tautan ke WhatsApp untuk memeriksa pratinjau gambar, kirim `sitemap.xml` ke Google Search Console.

### 8.4 Keputusan yang perlu dikonfirmasi Aldy

Angka dan kebijakan di bawah diisi Claude dengan usulan bawaan supaya halaman tidak kosong. Semuanya tertulis di `content.ts`. Jangan diubah tanpa Aldy, dan kabari Aldy supaya memastikan atau menggantinya:

- Dukungan 30 hari tanpa biaya tambahan setelah sistem berjalan.
- Balasan WhatsApp "biasanya dalam satu hari kerja".
- Website usaha "biasanya selesai dalam beberapa hari kerja" dan satu putaran revisi besar.
- Kode dan akun diserahkan setelah pelunasan.
- Aturan berhenti di tengah jalan: bagian yang belum dikerjakan dikembalikan, yang sudah dikerjakan dihitung apa adanya.
- Contoh sistem adalah contoh buatan sendiri, bukan hasil kerja untuk klien.

Semua poin di atas sudah dikonfirmasi Aldy pada 4 Oktober 2026 (lihat bagian 9.1). Cerita usaha F&B cukup gambaran besar, tidak perlu fakta tambahan.

## 9. Pembaruan Putaran 3 (Claude, 4 Oktober 2026, siang)

Dikerjakan lokal di branch `revamp/fase-0-1`. Tidak ada push dan tidak ada deploy.

### 9.1 Keputusan Aldy (4 Oktober 2026)

- Angka dan kebijakan di bagian 8.4: disetujui apa adanya.
- Cerita usaha F&B: cukup gambaran besar. Teks Tentang tidak diubah.
- Keamanan data tidak perlu dijelaskan ke pengunjung. Pertanyaan FAQ diganti menjadi "Data usaha saya nanti punya siapa?" dan jawabannya tetap soal kepemilikan.
- IPK dihapus dari Data Diri (ID dan EN).
- Program klien pertama dibuka. Besaran potongan sengaja tidak ditulis, dibahas di chat. Tampil sebagai strip di bawah kotak "Cara bayar" dengan tautan WhatsApp bertanda `(web-klien-pertama)` atau `(web-first-client)`. Testimoni hanya ditampilkan kalau klien setuju. Jangan menambah hitung mundur, jumlah slot, atau testimoni karangan.
- Akun sosial lain (TikTok, Instagram, Threads, X) ada tetapi URL belum siap. Footer menampilkan "Akun sosial lain menyusul." Jangan menambah ikon sebelum ada URL asli.
- Deploy tetap menunggu izin eksplisit dari Aldy. Aldy menyerahkan urutan kerja ke Claude.

### 9.2 Yang berubah

| Area | Perubahan | File |
| --- | --- | --- |
| Video | Di layar sentuh (`hover: none`) video kartu Contoh Sistem diputar otomatis saat kartu terlihat jelas (60 persen), satu kartu sekaligus, yang paling dekat ke tengah layar, dengan jeda 250 ms. Tidak diputar kalau pengunjung memilih gerak dikurangi atau mode hemat data. Di desktop tetap saat hover. Video tetap `preload="none"`, jadi file baru diunduh saat mulai diputar | `src/sections/Work.tsx` |
| Tulisan | IPK dihapus. Kalimat "Setelah sistemnya jalan" di kartu demo tidak lagi menjanjikan hasil pasti. Pengulangan di kartu LMS dibuang. FAQ biaya menyebut domain dan hosting dihitung terpisah. Kalimat FAQ "aplikasi siap pakai" diperjelas. Strip program klien pertama. Keterangan sosial menyusul | `src/locales/content.ts`, `src/sections/Packages.tsx`, `src/sections/Footer.tsx`, `src/App.css` |
| Layout | Daftar fitur kartu Website dirapikan (satu butir yang mengulang deskripsi dibuang), kartu Aplikasi dan Sistem Lengkap mendapat butir "Harga final tertulis sebelum DP" sehingga ruang kosong di kartu berkurang. Kartu "Usaha Anda nggak ada di daftar?" tidak lagi ditarik setinggi kartu di sebelahnya | `src/locales/content.ts`, `src/sections/Work.tsx` |
| Tes | Bahasa di-reset per skenario (sebelumnya tes "hp ID" sebenarnya berjalan dalam bahasa Inggris karena bahasa tersimpan di `localStorage`). Pemeriksaan baru: bahasa halaman benar, IPK tidak tampil, tautan program klien pertama bertanda, tautan sosial footer nyata, video diputar otomatis satu sekaligus di profil HP, dan tidak diputar saat gerak dikurangi | `tests/smoke.cjs` |

Hasil verifikasi: `tsc -b` dan `eslint .` bersih, 68 pemeriksaan smoke dan 14 pemeriksaan alur pesan lulus, axe 0 pelanggaran, CLS 0, muatan awal desktop 154 KB. Gulir dengan dan tanpa video otomatis diukur di simulasi HP 4x lebih lambat: rata-rata sekitar 20 ms vs 18 ms per frame. Belum diuji di perangkat sungguhan.

### 9.3 Catatan untuk Antigravity

1. Karena video sekarang diputar otomatis di HP, ketajaman dan ukuran video lebih berpengaruh dari sebelumnya. Saat rekam ulang (bagian 8.3 nomor 1), jaga mp4 di bawah sekitar 600 KB per video.
2. Demo Accounting masih di `sokaraaccountingdemo.netlify.app`, sedangkan enam demo lain di subdomain `aldyalfarisy.my.id`. Pindahkan ke subdomain yang sama atau konfirmasi ke Aldy bahwa dibiarkan. Alamatnya ada di `src/sections/Work.tsx`.
3. Enam mp4 dan `og-image.jpg` di laptop membawa label asal-file (C2PA, sekitar 6 KB per file) dari proses kirim file. Tidak berbahaya. Kalau Antigravity mengekspor ulang video, labelnya hilang dengan sendirinya.
