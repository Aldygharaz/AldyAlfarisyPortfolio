# BASIS PENGETAHUAN & DOKUMENTASI SISTEM WEBSITE PORTOFOLIO ALDY ALFARISY (SOKARA)

Dokumen ini adalah Single Source of Truth (SSOT) dan System Knowledge Base komprehensif dari website portofolio Aldy Alfarisy (Sokara). Dokumen ini dirancang khusus agar AI Agent dan pengembang memahami seluruh filosofi komunikasi bisnis, arsitektur teknis, sistem lokalisasi ganda (ID/EN), komponen interaktif, dan aturan operasional tanpa perlu menebak atau menelusuri ulang seluruh basis kode.

---

## Pembaruan Keputusan (4 Oktober 2026)

Bagian ini menggantikan isi lama di dokumen ini yang bertentangan dengannya.

- Positioning halaman utama: pembuat aplikasi dan website custom untuk pemilik bisnis. Label "AI Orchestration Specialist" dan "Product Operator" tidak dipakai di halaman utama.
- Headline hero: "Usaha Anda punya cara sendiri. Aplikasinya yang ikut." Versi Inggris: "Your business has its own way. The app should follow it."
- Harga: ditampilkan sebagai "mulai dari". Website usaha (profil usaha atau landing page satu halaman) mulai dari Rp 499.000. Paket aplikasi ditampilkan "Hubungi saya untuk harga". Ini mengganti keputusan lama "tanpa angka Rupiah"; konfirmasi Aldy masih ditunggu.
- Cara bayar: DP dulu, setelah gambaran solusi, ruang lingkup, dan harga final disepakati. Besaran DP dijelaskan lewat chat, tidak ditulis di website.
- Arah visual: tetap seperti sekarang.
- Struktur halaman setelah Fase 2: Hero, Pilih jenis usaha, Contoh sistem (grid dengan saringan), Langkah kerja dengan tiga janji, Paket dan harga, Pesan dalam 3 langkah (berakhir di WhatsApp), Tentang saya, Pertanyaan umum, Kontak. Marquee, Kenal situasi ini, Cara kerja saya (heksagon), Alat di balik layar, Masalah yang sering muncul, dan Yang bisa saya bantu dikeluarkan dari halaman; file komponennya masih ada di src/sections.
- Navigasi atas: Contoh Sistem, Harga, Pertanyaan.
- Paket: Website Usaha mulai dari Rp 499.000 (contoh: /contoh/kedai-kopi/, usaha fiktif); Aplikasi Usaha dan Sistem Lengkap tampil "Hubungi saya untuk harga". Paket tengah berlabel "Cocok untuk kebanyakan usaha".
- Pesan WhatsApp dari alur pesan memakai penanda (web-<segmen>-<paket>) untuk pencatatan.
- Persuasi hanya dengan cara yang jujur. Dilarang hitung mundur palsu, slot karangan, testimoni karangan, dan harga coret palsu.
- Klaim di website memakai bahasa awam tanpa angka atau klaim absolut. Angka "60%" pada LMS sudah dihapus dari semua dokumen.
- Rencana lengkap: dokumen "Plan Improvement Portofolio Sokara untuk Pemilik Bisnis" (Claude Docs) dan app/ANTIGRAVITY_HANDOFF.md (termasuk template balasan otomatis WhatsApp Business).

---

## 1. Profil, Brand Identity, dan Filosofi Bisnis

### 1.1 Profil Personal dan Profesional
- Nama Lengkap: Aldy Alfarisy
- Brand / Studio: Sokara (Sokara AI)
- Peran: Pembuat Sistem Bisnis & AI Orchestration Specialist
- Lokasi: Bandung, Jawa Barat, Indonesia (WIB / UTC+7)
- Kontak WhatsApp: +62 814-1053-8887
  - URL WhatsApp ID: https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy,%20saya%20pemilik%20usaha.%20Saya%20mau%20tanya%20soal%20sistem%20untuk%20bisnis%20saya.
  - URL WhatsApp EN: https://api.whatsapp.com/send?phone=6281410538887&text=Hi%20Aldy,%20I%20own%20a%20business.%20I%27d%20like%20to%20ask%20about%20a%20system%20for%20my%20business.
- Email: aldyalfarisy24@gmail.com
- LinkedIn: https://www.linkedin.com/in/aldyalfarisy/
- YouTube: https://www.youtube.com/channel/UCiIKlj45e1euRR1Y-wxMz1w

### 1.2 Filosofi Bisnis & Komunikasi
- Pendekatan Berbasis Masalah Nyata: Berfokus pada penderitaan operasional pemilik usaha (selisih kas harian, antrean kasir saat internet putus, jadwal shift bentrok, kerumitan pencatatan manual, stok bocor).
- Komunikasi Langsung: Menghilangkan perantara birokrasi agency. Pemilik usaha berkomunikasi langsung dengan pembuat sistem.
- Model Harga: Mulai dari versi kecil, harga disesuaikan dengan kebutuhan nyata bisnis.
- Pendampingan Pasca-Rilis: Memberikan pendampingan langsung setelah sistem berjalan operasional.
- Nada Komunikasi: Hangat, jujur, menggunakan kata sehari-hari (nggak, bikin, beres, ribet, pas, capek). Bukan nada developer ke developer, melainkan pembuat sistem yang memahami beban pemilik usaha.

---

## 2. Standar Brand Sokara & Desain Antarmuka

### 2.1 Aset Resmi Brand
- Horizontal Logo Light BG (Navbar Terang): public/sokara-horizontal-light-bg.svg (Dark Squircle Container #1c1c1c ke #0a0a0a, Wordmark #141414 Poppins 600).
- Horizontal Logo Dark BG (Navbar Gelap): public/sokara-horizontal-dark-bg.svg (Text & Mark #F5F5F5 Poppins 600).
- Web App Icons & Favicon: favicon-32x32.png, apple-touch-icon-180x180.png, android-chrome-192x192.png.
- Tipografi:
  - Brand Wordmark: Poppins (Font Weight 600, letter-spacing 1px).
  - Judul Display: Jost (Font Weight 600, 700, 800).
  - Teks Body & Kontrol UI: Inter (Font Weight 400, 500, 600).
  - Aksen Editorial: Playfair Display (Italic, Font Weight 600, 700).
  - Kode & Metrik Teknis: JetBrains Mono (Font Weight 400, 500).

### 2.2 Sistem Desain & Token Warna
- Background Utama (--bg): #F7FAFD
- Permukaan Canvas (--surface): #FFFFFF
- Permukaan Sekunder (--surface-2): #EEF4FA
- Garis Batas (--border-color): #DCE7F2
- Aksen Biru Utama (--accent-blue): #1D4ED8
- Aksen Biru Tegas (--accent-strong): #1E3A8A
- Teks Utama (--text): #000000
- Teks Muted (--text-muted): #111827
- Indikator Hijau (--success-text): #34C759
- Lebar Kontainer Maksimal (--maxw): 1120px

---

## 3. Tumpukan Teknologi & Arsitektur Aplikasi

### 3.1 Framework dan Runtime
- React 19 (^19.2.0): Komponen UI deklaratif dengan concurrent rendering.
- Vite 7 (^7.2.4 - ^7.3.6): Bundler ESM ultra-cepat dengan Hot Module Replacement (HMR).
- TypeScript (~5.9.3): Pengetikan statis ketat untuk mencegah runtime error.
- Tailwind CSS (^3.4.19): Utility CSS framework.
- Lenis (^1.3.25): Mesin scroll inersia halus 60fps melalui custom hook useLenisScroll.
- Lucide React (^0.562.0): Ikon vektor SVG.

### 3.2 Sistem Lokalisasi Ganda (ID / EN)
- Context Provider: src/context/LocaleContext.tsx
- Sumber String: src/locales/content.ts (ekspor objek `content.id` dan `content.en`).
- Deteksi Otomatis Pengunjung (saat pertama kali membuka situs):
  1. Cek pilihan bahasa yang tersimpan di localStorage (`sokara_lang`). Jika bernilai `id` atau `en`, pilihan itu dipakai.
  2. Jika belum ada pilihan, sistem membaca bahasa browser (`navigator.language`) dan zona waktu (`Intl.DateTimeFormat`). Bahasa berawalan `id` atau zona waktu Jakarta, Makassar, Jayapura, atau Pontianak menghasilkan Bahasa Indonesia; selain itu Bahasa Inggris.
  3. Jika deteksi gagal, default ke Bahasa Indonesia.
- Pergantian Bahasa: tombol `ID | EN` di navbar (`src/components/LanguageToggle.tsx`) memanggil `setLocale`, menyimpan pilihan ke `sokara_lang`, dan mengganti seluruh teks tanpa reload.
- Sinkronisasi SEO: setiap pergantian bahasa memperbarui atribut `<html lang>`, `document.title`, meta description, Open Graph, dan Twitter Card.
  - Judul ID: Aldy Alfarisy | Pembuat Sistem untuk Bisnis
  - Judul EN: Aldy Alfarisy | System Builder for Businesses
- Aturan Konten: setiap teks baru WAJIB ditambahkan ke `content.id` dan `content.en` sekaligus. Komponen tidak boleh menyimpan teks statis di luar `content.ts`, kecuali nama produk, nama teknologi, dan URL.

<!-- DIREKONSTRUKSI 2026-10-03: bab 3.3 sampai bab 7 project 2 disusun ulang dari kode sumber setelah file rusak. Mohon direview. -->

### 3.3 Build, Optimasi, dan Deployment
- Perintah (Windows PowerShell, wajib diawali `cmd /c`):
  - `cmd /c npm run dev` untuk server pengembangan (port 3000).
  - `cmd /c npm run build` menjalankan `tsc -b` lalu `vite build`, hasil di folder `dist/`.
  - `cmd /c npm run preview` untuk melihat hasil build.
- Konfigurasi `vite.config.ts`:
  - `base: './'` agar aset bisa dimuat dari subfolder mana pun.
  - Alias `@` mengarah ke `./src`.
  - Minifikasi Terser dengan `drop_console` dan `drop_debugger`.
  - Kompresi ganda gzip dan Brotli (`vite-plugin-compression`), menghasilkan file `.gz` dan `.br` di samping setiap aset.
  - Pemecahan chunk vendor: `vendor-react`, `vendor-icons` (lucide-react), `vendor-radix`, `vendor-3d-motion`, dan `vendor`.
- Lazy Loading: semua section di bawah lipatan pertama (Work sampai Footer) dimuat dengan `React.lazy` dan `Suspense`, dengan teks fallback dua bahasa.
- Aset Media: gambar memakai format WebP (`public/images/`), video demo memakai WebM (`public/videos/`). File `.mp4` mentah diabaikan oleh git (`.gitignore`).
- SEO Statis: `public/robots.txt` dan `public/sitemap.xml` mengarah ke https://www.aldyalfarisy.my.id/.

### 3.4 Struktur Direktori Utama
- `src/App.tsx`: susunan section dan pemanggilan hook global.
- `src/sections/`: satu file per section halaman.
- `src/components/`: `SideNav`, `LanguageToggle`, `ThemeToggle`, dan komponen UI shadcn (`components/ui/`).
- `src/hooks/`: hook interaksi global (lihat bab 5).
- `src/context/LocaleContext.tsx` dan `src/locales/content.ts`: sistem dua bahasa.
- `public/`: logo, favicon, portrait, gambar project, dan video demo.

---

## 4. Struktur Halaman dan Urutan Section

Catatan: tabel di bawah adalah struktur sebelum 4 Oktober 2026. Struktur terbaru ada di bagian Pembaruan Keputusan di awal dokumen.

Halaman tunggal (single page) dengan urutan section berikut. Nomor mengikuti SideNav di sisi kiri layar.

| No | Section | File | Isi Utama |
| --- | --- | --- | --- |
| 00 | Awal | `Navigation.tsx`, `IntroHero.tsx` | Navbar (Contoh Sistem, Langkah Kerja, Pertanyaan, toggle ID/EN, Kontak, CTA). Hero: eyebrow "PEMBUAT SISTEM UNTUK BISNIS", headline "Bisnis jalan terus. Anda bisa tenang.", CTA WhatsApp dan "Lihat Contoh Sistem", catatan "Gratis, tanpa kewajiban". |
| - | Marquee | `Marquee.tsx` | Pita berjalan berisi empat manfaat utama (kasir tetap jalan walau internet mati, laporan keuangan tanpa hitung manual, jadwal karyawan lebih adil, toko online lengkap dengan pembayaran). |
| - | Kenal situasi ini? | `Familiar.tsx` | Tiga situasi sakit pemilik usaha dan penutup "Bukan karena Anda kurang rajin. Alatnya yang nggak cocok." |
| 01 | Contoh Sistem | `Work.tsx` | Carousel 7 sistem demo dengan tab, kartu mockup, tombol "Baca ceritanya" (modal) dan "Coba langsung" (link live). |
| 02 | Yang Bisa Saya Bantu | `Quadrant.tsx` | Empat jenis pekerjaan: aplikasi bisnis, otomatisasi kerjaan berulang, sistem yang ikut tumbuh, website brand. |
| 03 | Cara Kerja Saya | `Skills.tsx` | Sarang heksagon berisi 10 prinsip kerja; detail muncul saat kursor diarahkan atau sel disentuh. |
| 04 | Langkah Kerja | `Process.tsx` | Empat langkah: Ngobrol dulu, Lihat rancangannya, Sistem dibangun, Dipasang dan diajarkan. |
| 05 | Alat | `Orbit.tsx` | Enam kartu teknologi yang mengorbit, masing-masing dijelaskan dari sisi manfaat bagi pemilik usaha. |
| 06 | Tentang Saya | `About.tsx` | Judul "Saya pernah di posisi Anda.", cerita F&B 2019, timeline 2019, 2022, 2024, 2026, dan panel Data Diri. |
| - | Masalah yang Sering Muncul | `Testimonials.tsx` | Tiga masalah umum (Jadwal & Shift, Kasir & Toko, Kas & Pembukuan) beserta jawaban sistem. Diberi label jelas: bukan testimoni. |
| 07 | Pertanyaan | `FAQ.tsx` | Delapan pertanyaan akordeon seputar biaya, pengalaman buruk sebelumnya, kekhawatiran gaptek, durasi, aplikasi jadi, dukungan, karyawan, dan penggunaan AI. |
| 08 | Kontak | `Contact.tsx`, `Footer.tsx` | Headline "Apa satu hal yang paling bikin capek di bisnis Anda?", tombol WhatsApp, 7 kanal sosial (YouTube, LinkedIn, Email, TikTok, Threads, Instagram, X), footer dengan tautan cepat. |

---

## 5. Komponen Interaktif dan Custom Hooks

- `useLenisScroll`: scroll inersia halus berbasis Lenis; juga dipakai tombol "Kembali ke atas" (durasi 1,2 detik).
- `useScrollChrome`: mengatur tampilan navbar saat scroll, progress bar di atas layar, dan kemunculan tombol kembali ke atas.
- `useScrollReveal`: animasi kemunculan elemen saat masuk viewport (IntersectionObserver menambahkan class `in-view`).
- `useMagneticHover`: efek tombol "magnetik" yang mengikuti kursor (hanya aktif di layar 1024px ke atas).
- `useMouseGlow`: cahaya lembut yang mengikuti kursor di latar halaman (hanya aktif di layar 1024px ke atas).
- `use-mobile`: deteksi lebar layar mobile.
- `SideNav`: navigasi vertikal bernomor 00 sampai 08 yang menandai section aktif.
- Modal Case Study (`Work.tsx`): berisi "Situasi yang sering terjadi", "Yang saya buat", "Hidup setelahnya", "Cocok untuk", "Coba langsung", dan "Untuk yang penasaran" (detail teknis). Saat modal terbuka, scroll halaman dikunci.
- Carousel Work: dapat digeser dengan drag atau swipe, tombol panah, dan tab nama project; indikator posisi "01 / 07".
- Orbit dan Skills memakai IntersectionObserver sehingga animasi hanya berjalan saat terlihat di layar.

---

## 6. Pedoman Konten dan Copywriting

- Sasaran Pembaca: pemilik usaha (UMKM, toko, F&B, klinik, sekolah), bukan developer. Istilah teknis hanya muncul di bagian "Untuk yang penasaran" dan kartu Alat.
- Struktur Cerita Project: Situasi yang sering terjadi (rasa sakit) lalu Yang saya buat (solusi) lalu Hidup setelahnya (hasil emosional) lalu Cocok untuk (segmen usaha).
- Kejujuran: setiap sistem disebut "contoh sistem yang bisa langsung dicoba"; subjudul Work menegaskan belum semuanya dipakai bisnis sungguhan. Section masalah umum diberi label "Bukan testimoni".
- Ajakan Bertindak: semua CTA utama mengarah ke WhatsApp dengan pesan pembuka yang sudah terisi (versi ID dan EN berbeda).
- Bahasa Inggris: terjemahan bukan kata per kata, tetapi menjaga nada hangat dan langsung yang sama.

---

## 7. Portofolio Showcase (7 Contoh Sistem)

Data project berada di `src/sections/Work.tsx` (stack, link, video, mockup) dan `src/locales/content.ts` (semua teks cerita dua bahasa).

### 1. Sokara POS EVO
- **Kategori / Client:** Retail & F&B (toko, minimarket, kafe, warung makan)
- **Role Arsitektur:** Local-First Enterprise PWA
- **Tumpukan Teknologi:** `React 19`, `Zustand`, `IndexedDB`, `TailwindCSS`
- **Metrik Utama:** `Scan langsung tercatat` | `Jalan tanpa internet` | `Tanpa nunggu server`
- **Tautan Live:** `https://pos.aldyalfarisy.my.id/`
- **Aset Video:** `/videos/Sokara-pos-preview.webm`
- **Problem:** Aplikasi kasir tradisional lumpuh saat koneksi internet toko tidak stabil, menyebabkan antrean panjang dan kehilangan penjualan. Aplikasi kasir offline umumnya kaku, lambat, dan tidak sinkron dengan pelaporan pusat.
- **Approach:** Arsitektur Local-First PWA. Seluruh state dan logika transaksi berjalan di sisi klien dengan Zustand yang terintegrasi dengan IndexedDB (wrapper `idb`), sehingga login, pencarian produk, pemindaian barcode, dan penyelesaian transaksi terjadi tanpa network request. Antarmuka keyboard-first dengan micro-animation GSAP.
- **Result:** Global Hardware Barcode Scanner Listener memantau buffer keyboard dengan toleransi jeda di bawah 50ms dan langsung memasukkan barang ke keranjang tanpa perlu mengklik kolom pencarian. Saat stok habis, modal Poka-Yoke Auto-Fix Restock menawarkan penyesuaian stok 1-klik di tempat tanpa pindah ke halaman inventaris.

### 2. KAVANA
- **Kategori / Client:** Lifestyle E-Commerce (brand lokal, fashion, produk gaya hidup)
- **Role Arsitektur:** Full-Stack Single-Vendor E-Commerce
- **Tumpukan Teknologi:** `Next.js 16`, `TypeScript`, `Tailwind CSS`, `Prisma ORM`, `SQLite`, `Recharts`
- **Metrik Utama:** `Dari daftar sampai kirim` | `Kode promo dihitung akurat` | `Tanpa biaya server bulanan`
- **Tautan Live:** `https://kavana.aldyalfarisy.my.id/`
- **Aset Video:** `/videos/Video-Kavana.webm` (CATATAN 2026-10-03: file video ini hilang dan belum tersedia di `public/videos/`)
- **Problem:** Banyak demo toko online berhenti di etalase. Produk bisa dipilih, tetapi alur pembayaran, konfirmasi, dan pengiriman tidak lengkap, sehingga calon klien sulit membayangkan toko online yang benar-benar berjalan.
- **Approach:** Aplikasi full-stack Next.js 16 dengan Prisma ORM dan SQLite. Mock payment state-machine deterministik (BCA VA, Mandiri VA, QRIS, kartu kredit), snapshot harga pada setiap OrderItem, mesin voucher isomorfik `evaluatePromo` yang dipakai di klien dan server, email transaksional yang tercatat di tabel `EmailLog`, serta replikasi SQLite ke `/tmp/custom.db` saat cold start Vercel.
- **Result:** Alur belanja end-to-end dapat dicoba penuh oleh pengunjung: registrasi akun, klaim kupon `KAVANA10` atau `GRATISONGKIR`, pembayaran simulator, pelacakan email HTML di admin, pembaruan status order menjadi SHIPPED dengan nomor resi, review produk berperingkat rating, perlindungan hydration safety (`useHydrated`) pada keranjang belanja, dan visualisasi analitik omzet mingguan bertenaga Recharts.

### 3. Sokara Accounting
- **Kategori / Client:** Retail & Distribution
- **Role Arsitektur:** Pure Double-Entry Engine
- **Tumpukan Teknologi:** `React 19`, `Zustand 5`, `Decimal.js`, `SHA-256`
- **Metrik Utama:** `Catatan tidak seimbang langsung ditolak` | `Catatan tidak bisa diubah diam-diam` | `Tetap lancar dengan ribuan baris`
- **Tautan Live:** `https://sokaraaccountingdemo.netlify.app/`
- **Aset Video:** `/videos/Sokara-Accounting.webm`
- **Problem:** Pada bisnis retail dan distribusi, sistem kasir, gudang, dan pembukuan sering terpisah. Akuntan menghitung ulang HPP manual, memicu selisih persediaan, jurnal tidak seimbang, dan keterlambatan laporan laba rugi aktual.
- **Approach:** Sistem akuntansi double-entry yang berjalan penuh di browser tanpa kalkulasi backend. Menggunakan `Decimal.js` untuk perhitungan standar PSAK anti-floating point bug. Reaktivitas dijaga via Deep Mutation Proxy & Zustand 5. Menerapkan struktur data berantai kriptografis SHA-256 untuk integritas buku besar anti-tamper.
- **Result:** Strict Balance Validation menolak otomatis transaksi jika ada selisih debit/kredit. Intervensi kesalahan operasional melalui modal 1-klik auto-fix. DOM Virtualization menjaga rendering ribuan baris pembukuan tetap mulus saat di-scroll cepat.

### 4. Sokara HRMS
- **Kategori / Client:** Enterprise Operations
- **Role Arsitektur:** State Management & Offline Roster
- **Tumpukan Teknologi:** `React`, `TypeScript`, `TailwindCSS`, `Zustand`
- **Metrik Utama:** `Beresin jadwal sekali klik` | `Ada peringatan sebelum karyawan kelelahan` | `Jadwal tidak hilang saat internet putus`
- **Tautan Live:** `https://hrms.aldyalfarisy.my.id/`
- **Aset Video:** `/videos/Sokara-HRMS.webm`
- **Problem:** Menyusun jadwal shift mingguan rawan kesalahan manusia. Karyawan kerap menerima shift malam berturut-turut hingga menembus batas kelelahan (*fatigue*). HRIS biasa tidak memiliki proteksi ini, dan data roster sering hilang jika koneksi putus saat penyusunan.
- **Approach:** Arsitektur Offline-First menggunakan Zustand Atomic Selectors dan persistensi memori lokal. Setiap mutasi jadwal tersimpan seketika di memory klien. Merancang Poka-Yoke Defensive UX dengan fitur Smart Suggestion.
- **Result:** Co-pilot AI Shift Auto-Balance menghitung ulang matriks jadwal dan menawarkan resolusi 1-klik memindahkan shift lembur dari staf berisiko tinggi secara real-time tanpa beban re-render berat.

### 5. Sokara CRM
- **Kategori / Client:** Sales & Operations
- **Role Arsitektur:** Pipeline Management & Deal Inspector
- **Tumpukan Teknologi:** `Next.js`, `dnd-kit`, `framer-motion`, `SWR`
- **Metrik Utama:** `Nominal terisi pakai tombol cepat` | `Geser kartu tanpa nunggu` | `Lihat riwayat tanpa pindah halaman`
- **Tautan Live:** `https://crm.aldyalfarisy.my.id/`
- **Aset Video:** `/videos/Sokara-CRM.webm`
- **Problem:** Sales rep enggan memperbarui status deal karena input form yang repetitif (mengetik manual nominal besar) dan sistem yang sekadar memblokir deal usang tanpa memberikan jalan keluar cepat.
- **Approach:** Kanban drag-and-drop dinamis dengan auto-formatting nominal real-time dan tombol Quick Preset (+10 Juta, +50 Juta). Menahan deal usang melalui Poka-Yoke Modal dengan opsi 1-klik perpanjang masa negosiasi.
- **Result:** Manipulasi data besar terjadi tanpa loading berkat kombinasi optimistic updates via SWR dan Zustand. Detail menggunakan slide-over Deal Inspector berefek 3D Tilt Card mencegah sales berpindah halaman untuk meninjau riwayat klien.

### 6. Sokara Sanctuary
- **Kategori / Client:** Luxury Wellness
- **Role Arsitektur:** Multi-Constraint Booking Engine
- **Tumpukan Teknologi:** `WebGL`, `Zustand`, `Framer Motion`
- **Metrik Utama:** `Cek terapis, ruangan, antrean sekaligus` | `Daftar tunggu otomatis` | `Jadwal bentrok dicegah`
- **Tautan Live:** `https://spa.aldyalfarisy.my.id/`
- **Aset Video:** `/videos/Sokara-SPA.webm`
- **Problem:** Aplikasi booking standar gagal memenuhi estetika luxury spa. Secara operasional, sistem gagal mendeteksi bentrok sumber daya sekunder (misal: terapis tersedia, tetapi mesin terapi sedang digunakan oleh ruangan lain), memicu pembatalan manual.
- **Approach:** Double-Sided State Engine: Antarmuka cinematic motion di sisi tamu dan constraint engine berlapis menggunakan Zustand di sisi backend klien untuk kehandalan offline-first.
- **Result:** Multi-Layer Constraint Engine mengevaluasi 3 variabel simultan (Terapis, Ruangan/Mesin, dan Antrean). Pembatalan jadwal otomatis mempromosikan antrean waitlist terdekat secara reaktif sambil mencegah jadwal ganda.

### 7. Sokara LMS
- **Kategori / Client:** School & Institution
- **Role Arsitektur:** Type-Safe Full-Stack & PWA
- **Tumpukan Teknologi:** `Hono`, `tRPC v11`, `React 19`, `Drizzle ORM`, `PWA`
- **Metrik Utama:** `Jawaban ujian tersimpan saat koneksi putus` | `Dirancang untuk mempercepat koreksi` | `Bisa dipakai tanpa internet`
- **Tautan Live:** `https://lms.aldyalfarisy.my.id/`
- **Aset Video:** `/videos/Sokara-LMS.webm`
- **Problem:** LMS konvensional lambat, rentan kehilangan lembar jawaban siswa saat koneksi putus di tengah ujian CBT, dan menyulitkan guru dalam mengoreksi ratusan tugas secara berulang. Orang tua juga terisolasi dari transparansi nilai dan pembayaran SPP.
- **Approach:** Arsitektur full-stack end-to-end type-safe (Hono + tRPC v11 + SQLite + Drizzle ORM) dengan 4 level otorisasi RBAC (Admin, Guru, Siswa, Orang Tua). Di sisi frontend, dibangun SpeedGrader™ split-view bertenaga keyboard shortcut (J/K/Ctrl+Enter), CBT Player anti-cheat, dan Workbox service worker precaching.
- **Result:** Tampilan koreksi dirancang untuk mempercepat kerja guru. Ujian CBT tetap aman saat koneksi putus berkat local persistence dan deteksi blur window. Dashboard terpadu menyajikan rapor berkala dan administrasi SPP berformat IDR universal.

---

## 8. Panduan Teknis & Batasan Operasional AI Agent

Setiap AI Agent yang bekerja pada repositori ini **WAJIB** tunduk pada batasan berikut tanpa pengecualian:

1. **Gaya Komunikasi & Persona:**
   - DILARANG menggunakan emoji atau emotikon dalam bentuk apa pun.
   - Hapus semua basa-basi pengisi (*filler* seperti "Tentu", "Siap", "Halo", "Semoga membantu").
   - Gunakan kata ganti formal tunggal: **"Anda"** / **"bisnis Anda"** (jangan gunakan *"kamu"*, *"untukmu"*, atau *"kita"*).
   - Jawaban teknis wajib berbobot, komprehensif, menyebutkan file spesifik, dan membedah mekanisme akar masalah.
2. **Git Push Guardrail:**
   - **DILARANG KERAS** melakukan `git push` ke GitHub / remote repository tanpa persetujuan atau instruksi eksplisit tertulis dari pengguna. Selalu tampilkan ringkasan commit terlebih dahulu jika diminta push.
3. **Format Mata Uang Rupiah (Universal IDR Guardrail):**
   - Setiap kali menampilkan atau menginput nominal mata uang IDR, WAJIB menggunakan pemisah titik ribuan otomatis (contoh: `Rp 4.800.000`, `Rp 50.000`), bukan deretan angka mentah tanpa pemisah.
   - Nonaktifkan browser spinner bawaan (`::-webkit-inner-spin-button`).
4. **Google Sheets / Apps Script Backend:**
   - Jika membuat endpoint backend Google Apps Script (`Code.gs`), fungsi `setupDatabase()` wajib bersifat **idempotent** (mengecek keberadaan sheet dan baris header sebelum membuat baru untuk mencegah duplikasi data).
5. **Perintah Terminal Windows:**
   - Sistem operasi berjalan pada Windows PowerShell. Semua eksekusi `npm` atau binary npm wajib diawali dengan `cmd /c` (contoh: `cmd /c npm run dev`, `cmd /c npm run build`).
