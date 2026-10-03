# Catatan Serah Terima untuk Antigravity

Disusun: 4 Oktober 2026 oleh Claude (sesi pemulihan dan revamp portofolio).
Branch kerja: `revamp/fase-0-1` (lokal, belum di-push). Berisi Fase 0, Fase 1, dan Fase 2.

Baca dokumen ini sampai habis sebelum mengubah kode di repo ini.

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

`track(nama, properti)` di `src/lib/analytics.ts` mengirim ke `window.plausible` atau `window.va` (Vercel Analytics) kalau salah satunya terpasang. Saat ini belum ada yang terpasang, jadi fungsi ini diam di produksi dan hanya mencatat ke konsol saat dev.

| Event | Properti | Dipicu dari |
| --- | --- | --- |
| `wa_click` | `location` (hero, nav, segment, floating, contact, work_cta), `segment` | Semua tombol WhatsApp |
| `segment_select` | `segment`, `location` | Tombol segmen dan saringan grid |
| `demo_open` | `project`, `location` (card, modal) | Tombol "Coba langsung" |
| `story_open` | `project` | Tombol "Baca ceritanya" |
| `package_select` | `package`, `location` (packages, order_flow) | Pilih paket |
| `order_step` | `step` | Perpindahan langkah di alur pesan |
| `order_submit` | `segment`, `package`, `needs_count`, `has_problem` | Tombol "Kirim ringkasan ke WhatsApp" (isi masalah tidak pernah dikirim ke analytics) |

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

Durasi 30 sampai 60 detik per project, suara Aldy, fokus pada satu masalah dan satu momen solusi. Poster video sudah ada di `public/videos/*-poster.webp`. Simpan video sebagai WebM. File `.mp4` diabaikan git.

### 4.3 Fase 2 sudah selesai

Paket dan harga serta alur pesan sudah dikerjakan Claude (lihat bagian 3). Jangan membuat ulang. Kalau perlu mengubah, edit `Packages.tsx`, `OrderFlow.tsx`, dan teksnya di `content.ts`. Logika rekomendasi paket ada di `recommendPackage()` di `src/lib/whatsapp.ts`: hanya website menjadi Website Usaha, satu kebutuhan aplikasi menjadi Aplikasi Usaha, dua atau lebih menjadi Sistem Lengkap. Jaga agar rekomendasi tetap jujur, bukan mendorong ke paket termahal.

### 4.4 Lain-lain

- Bantu Aldy memasang balasan otomatis WhatsApp Business (teks di bagian 6).
- Pasang penyedia analytics setelah Aldy memilih (Vercel Analytics atau Plausible). Tidak perlu mengubah pemanggilan `track()`.
- Setelah Aldy meninjau, file section yang tidak dipakai (`Marquee.tsx`, `Familiar.tsx`, `Skills.tsx`, `Orbit.tsx`, `Testimonials.tsx`, `Testimonials.css`, `Quadrant.tsx`) dan folder `scratch/` boleh dihapus.

## 5. Hal teknis yang perlu diingat

- Headline dipaksa 2 baris di layar 1024 px ke atas lewat `.intro-line { white-space: nowrap; }`. Kalau headline diganti, jaga tiap baris maksimal sekitar 30 karakter.
- `Work.tsx` sekarang memakai grid. Kartu memutar video hanya saat di-hover (desktop); di HP hanya poster, demi kecepatan.
- Sumber video KAVANA: `Sokara-Kavana.webm` lalu `Video-Kavana.webm` sebagai cadangan.
- Section yang dikeluarkan masih punya teksnya di `content.ts`. Biarkan sampai Aldy memutuskan file-filenya dihapus.
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
