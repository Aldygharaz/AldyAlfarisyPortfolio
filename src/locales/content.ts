export type Locale = 'id' | 'en';

export const content = {
  "id": {
    "nav": {
      "links": [
        {
          "id": "work",
          "label": "Contoh Sistem"
        },
        {
          "id": "process",
          "label": "Langkah Kerja"
        },
        {
          "id": "faq",
          "label": "Pertanyaan"
        }
      ],
      "contact": "Kontak",
      "cta": "Ceritakan Usaha Anda",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20pemilik%20usaha.%20Saya%20mau%20tanya%20soal%20aplikasi%20atau%20website%20untuk%20usaha%20saya.%20(web-umum)"
    },
    "hero": {
      "eyebrow": "PEMBUAT APLIKASI DAN WEBSITE UNTUK USAHA",
      "headline1": "Usaha Anda punya cara sendiri.",
      "headline2": "Aplikasinya yang ikut.",
      "offer": "Saya bikin aplikasi dan website custom yang mengikuti cara kerja usaha Anda. Website usaha mulai dari Rp 499.000.",
      "ctaPrimary": "Ceritakan Usaha Anda",
      "ctaSecondary": "Lihat contoh untuk usaha saya",
      "reassurance": "Gratis ngobrol dulu, tanpa kewajiban. Kalau saya nggak bisa bantu, saya bilang.",
      "trust": [
        "Pernah punya usaha F&B sendiri",
        "Sarjana Ekonomi Universitas Diponegoro",
        "7 contoh sistem bisa dicoba"
      ]
    },
    "marquee": {
      "tier1": [
        "Kasir tetap jalan walau internet mati",
        "Laporan keuangan tanpa hitung manual",
        "Jadwal karyawan yang lebih adil",
        "Toko online lengkap dengan pembayaran"
      ]
    },
    "familiar": {
      "title": "Kenal situasi ini?",
      "items": [
        "Kas tutup toko selisih lagi, dan nggak ketahuan bocornya di mana.",
        "Internet mati pas jam ramai. Antrean panjang, kasir bengong.",
        "Tiap akhir bulan bingung: ini untung atau cuma muter?"
      ],
      "closing": "Bukan karena Anda kurang rajin. Alatnya yang nggak cocok."
    },
    "work": {
      "eyebrow": "Contoh Sistem",
      "title": "Sistem yang sudah saya buat",
      "subtitle": "Semuanya contoh sistem yang bisa langsung dicoba. Belum semuanya dipakai bisnis sungguhan.",
      "cardLabel": "Contoh sistem, bisa dicoba langsung",
      "btnReadStory": "Baca ceritanya",
      "btnTryLive": "Coba langsung",
      "modal": {
        "headingSituation": "Situasi yang sering terjadi",
        "headingMade": "Yang saya buat",
        "headingAftermath": "Hidup setelahnya",
        "headingSuitable": "Cocok untuk",
        "headingTryLive": "Coba langsung",
        "headingTech": "Untuk yang penasaran"
      },
      "projects": {
        "pos": {
          "summary": "Kasir yang tetap jalan walau internet mati",
          "role": "Cocok untuk toko, minimarket, kafe",
          "metrics": [
            "Scan langsung tercatat",
            "Jalan tanpa internet",
            "Tanpa nunggu server"
          ],
          "situation": "Jam makan siang, antrean mengular. Terus internet putus. Kasir cuma bisa mandangin layar, pelanggan mulai gelisah, dan Anda berdiri di belakang sambil berharap sinyalnya balik.",
          "made": "Kasir yang jalan penuh di perangkatnya sendiri. Ada internet atau nggak, transaksi jalan terus. Barcode di-scan langsung tercatat, nggak perlu klik kolom pencarian dulu. Kalau stok kurang, ada tombol satu klik buat benerin.",
          "aftermath": "Jam ramai nggak lagi bikin deg-degan. Kasir baru juga cepat paham, karena sistemnya nuntun, bukan nyalahin.",
          "suitable": "Toko, minimarket, kafe, warung makan.",
          "liveNote": "",
          "techDetails": "Offline-First PWA; React 19, Zustand, IndexedDB, TailwindCSS; global barcode scanner listener; Poka-Yoke Auto-Fix Restock."
        },
        "kavana": {
          "summary": "Toko online yang lengkap sampai pengiriman",
          "role": "Dari daftar akun sampai nomor resi",
          "metrics": [
            "Dari daftar sampai kirim",
            "Kode promo dihitung akurat",
            "Tanpa biaya server bulanan"
          ],
          "situation": "Banyak toko online contoh cuma berhenti di etalase. Barang bisa dipilih, tapi bayar dan kirimnya nggak lengkap. Jadi susah membayangkan rasanya jalanin toko online yang sungguhan.",
          "made": "Toko online yang bisa dicoba dari awal sampai akhir: daftar akun, pakai kode promo, bayar (simulasi), baca email konfirmasi, sampai pesanan dikirim lengkap dengan nomor resi. Pemilik toko juga bisa lihat grafik penjualan mingguan.",
          "aftermath": "Anda bisa ngerasain sendiri gimana toko online berjalan, sebelum memutuskan bikin. Nggak perlu bayangin.",
          "suitable": "Brand lokal, toko fashion, produk gaya hidup.",
          "liveNote": "Coba kode promo KAVANA10 atau GRATISONGKIR.",
          "techDetails": "Next.js 16, TypeScript, Tailwind CSS, Prisma ORM, SQLite, Recharts; mock payment state-machine deterministik (BCA VA, Mandiri VA, QRIS, kartu kredit); snapshot harga OrderItem; mesin voucher isomorfik evaluatePromo; email transaksional di tabel EmailLog; replikasi SQLite ke /tmp/custom.db saat cold start Vercel; useHydrated pada keranjang."
        },
        "accounting": {
          "summary": "Pembukuan yang hitung sendiri",
          "role": "Cocok untuk distributor dan grosir",
          "metrics": [
            "Catatan tidak seimbang langsung ditolak",
            "Catatan tidak bisa diubah diam-diam",
            "Tetap lancar dengan ribuan baris"
          ],
          "situation": "Tutup buku. Angka kasir, gudang, dan catatan akuntan nggak ada yang sama. Semalaman nyari selisihnya, dan sebagian dari diri Anda takut sama jawabannya.",
          "made": "Tiap penjualan dan pembelian langsung masuk pembukuan. Kalau ada catatan yang nggak seimbang, langsung ditolak dan ditunjukkan salahnya di mana, sebelum sempat jadi masalah. Catatan yang sudah tersimpan nggak bisa diubah diam-diam.",
          "aftermath": "Untung bersih bulan ini kelihatan tanpa nunggu tanggal 10. Dan nggak perlu curiga sama siapa pun.",
          "suitable": "Distributor, toko grosir, retail yang punya gudang.",
          "liveNote": "",
          "techDetails": "React 19, Zustand 5, Decimal.js (standar PSAK), SHA-256 chain pada buku besar; double-entry di browser; validasi keseimbangan debit dan kredit; virtualisasi DOM."
        },
        "hrms": {
          "summary": "Jadwal karyawan yang menjaga mereka tetap sehat",
          "role": "Cocok untuk usaha dengan banyak shift",
          "metrics": [
            "Beresin jadwal sekali klik",
            "Ada peringatan sebelum karyawan kelelahan",
            "Jadwal tidak hilang saat internet putus"
          ],
          "situation": "Nyusun shift itu kayak main puzzle, selalu ada yang kecewa. Terus suatu hari karyawan terbaik Anda resign, gara-gara tiga minggu berturut-turut kebagian shift malam. Anda baru sadar setelah semuanya terlambat.",
          "made": "Sistem yang nyusun jadwal dan kasih peringatan sebelum ada karyawan yang kelelahan, sekalian ada usulan tukar shift sekali klik. Jadwal tersimpan di perangkat, jadi nggak hilang kalau internet putus di tengah nyusun.",
          "aftermath": "Karyawan merasa diperhatikan. Anda juga nggak lagi jadi tempat semua keluhan soal jadwal.",
          "suitable": "Restoran, klinik, pabrik, toko dengan banyak shift.",
          "liveNote": "",
          "techDetails": "React, TypeScript, TailwindCSS, Zustand; atomic selectors; persistensi memori lokal; Poka-Yoke Smart Suggestion untuk memindahkan shift dari staf berisiko tinggi."
        },
        "crm": {
          "summary": "Pantau calon pelanggan tanpa ribet ngetik",
          "role": "Cocok untuk tim penjualan",
          "metrics": [
            "Nominal terisi pakai tombol cepat",
            "Geser kartu tanpa nunggu",
            "Lihat riwayat tanpa pindah halaman"
          ],
          "situation": "Tim sales males update data, karena harus ngetik nominal besar satu-satu. Lama-lama datanya basi, dan Anda nggak tahu calon pelanggan mana yang sebenarnya hampir deal.",
          "made": "Papan kartu yang tinggal digeser dari tahap ke tahap. Nominal otomatis rapi, plus tombol cepat (+10 Juta, +50 Juta). Kalau ada deal yang lama nggak gerak, ada tombol satu klik buat memperpanjang masa negosiasinya.",
          "aftermath": "Tim sales mau pakai karena nggak ribet, dan Anda lihat kondisi penjualan yang sebenarnya.",
          "suitable": "Tim sales, agensi, bisnis B2B.",
          "liveNote": "",
          "techDetails": "Next.js, dnd-kit, framer-motion, SWR; kanban drag-and-drop; optimistic updates SWR dan Zustand; Deal Inspector slide-over dengan 3D tilt; Poka-Yoke modal deal usang."
        },
        "sanctuary": {
          "summary": "Booking yang nggak bentrok terapis dan ruangan",
          "role": "Cocok untuk spa, salon, klinik",
          "metrics": [
            "Cek terapis, ruangan, antrean sekaligus",
            "Daftar tunggu otomatis",
            "Jadwal bentrok dicegah"
          ],
          "situation": "Tamu datang dengan harapan bisa tenang, tapi terapisnya bentrok atau ruangannya masih dipakai. Anda minta maaf lagi. Dan tamu itu belum tentu balik.",
          "made": "Booking yang ngecek terapis, ruangan atau alat, dan antrean sekaligus. Kalau ada yang batal, tamu berikutnya di daftar tunggu otomatis dapat slot. Tampilan untuk tamunya dibuat tenang dan mewah, pas dengan suasana spa.",
          "aftermath": "Tamu datang, semuanya siap. Nggak ada lagi minta maaf yang bikin malu.",
          "suitable": "Spa, salon, klinik kecantikan, tempat pijat.",
          "liveNote": "",
          "techDetails": "WebGL, Zustand, Framer Motion; double-sided state engine; evaluasi 3 variabel (terapis, ruangan atau mesin, antrean); promosi waitlist otomatis."
        },
        "lms": {
          "summary": "Ujian online yang jawabannya nggak hilang",
          "role": "Cocok untuk sekolah dan lembaga kursus",
          "metrics": [
            "Jawaban ujian tersimpan saat koneksi putus",
            "Dirancang untuk mempercepat koreksi",
            "Bisa dipakai tanpa internet"
          ],
          "situation": "Ujian lagi jalan, internet sekolah putus, jawaban siswa hilang. Anak nangis, guru bingung, orang tua marah.",
          "made": "Ujian online yang menyimpan jawaban di perangkat siswa kalau koneksi putus. Guru koreksi lewat tampilan terbagi yang dirancang untuk mempercepat koreksi, lengkap dengan pintasan keyboard. Orang tua bisa lihat nilai, rapor, dan tagihan SPP sendiri. Ada empat jenis akses: admin, guru, siswa, orang tua.",
          "aftermath": "Guru punya lebih banyak waktu buat mengajar. Orang tua juga nggak perlu nebak-nebak.",
          "suitable": "Sekolah, lembaga kursus, bimbel.",
          "liveNote": "",
          "techDetails": "Hono, tRPC v11, React 19, Drizzle ORM, SQLite, PWA; RBAC 4 level; SpeedGrader split-view dengan pintasan J/K/Ctrl+Enter; CBT Player anti-cheat dengan deteksi blur window; Workbox precaching."
        }
      },
      "filterAll": "Semua",
      "filterLabel": "Tampilkan contoh untuk",
      "ctaCard": {
        "title": "Usaha Anda nggak ada di daftar?",
        "desc": "Contoh di atas cuma sebagian. Ceritakan cara kerja usaha Anda, nanti saya kasih gambaran sistemnya.",
        "button": "Ceritakan di WhatsApp"
      },
      "showAll": "Lihat semua contoh ({n})"
    },
    "quadrant": {
      "eyebrow": "Yang Bisa Saya Bantu",
      "title": "Apa yang bisa saya buatkan?",
      "subtitle": "Empat jenis pekerjaan yang paling sering diminta pemilik bisnis.",
      "cells": [
        {
          "tag": "UNTUK KASIR & TOKO",
          "title": "Aplikasi buat bisnis Anda",
          "desc": "Kasir, portal internal, toko online, atau aplikasi khusus yang dipakai tim Anda tiap hari."
        },
        {
          "tag": "UNTUK KERJAAN BERULANG",
          "title": "Otomatisasi kerjaan berulang",
          "desc": "Rekap, laporan, input data. Kerjaan yang tiap hari diulang-ulang, dibikin jalan sendiri."
        },
        {
          "tag": "UNTUK BISNIS YANG BERKEMBANG",
          "title": "Sistem yang ikut tumbuh",
          "desc": "Dirancang supaya nggak perlu dibongkar ulang waktu bisnis Anda membesar."
        },
        {
          "tag": "UNTUK CITRA BRAND",
          "title": "Website yang bikin orang tertarik",
          "desc": "Halaman untuk brand Anda, dengan tampilan dan animasi yang diingat orang."
        }
      ]
    },
    "skills": {
      "eyebrow": "Cara Kerja Saya",
      "title": "Cara kerja saya",
      "subtitle": "Sepuluh hal yang saya pegang waktu bikin sistem untuk Anda.",
      "hint": "Arahkan kursor atau sentuh tiap sel",
      "items": [
        {
          "name": "Dibantu AI",
          "description": "Saya pakai AI supaya lebih cepat. Keputusan penting tetap dari saya."
        },
        {
          "name": "Aplikasi yang cepat dibuka",
          "description": "Jalan di browser HP atau komputer."
        },
        {
          "name": "Software kasir yang mandiri",
          "description": "Dipasang di komputer toko, jalan tanpa internet."
        },
        {
          "name": "Data yang rapi",
          "description": "Catatan tertata, bisa disambungkan ke aplikasi lain."
        },
        {
          "name": "Tampilan yang gampang dimengerti",
          "description": "Karyawan baru langsung bisa pakai."
        },
        {
          "name": "Tulisan di layar yang jelas",
          "description": "Bahasa sehari-hari, bukan istilah teknis."
        },
        {
          "name": "Salah input langsung ketahuan",
          "description": "Sistem menahan, lalu menawarkan cara benerinnya."
        },
        {
          "name": "Nyambung ke pembayaran dan aplikasi lain",
          "description": "Data mengalir sendiri, nggak perlu input dua kali."
        },
        {
          "name": "Sistem online dan terurus",
          "description": "Pemasangan dan pengaturan saya yang urus."
        },
        {
          "name": "Tetap jalan tanpa internet",
          "description": "Datanya nyambung lagi begitu internet balik."
        }
      ]
    },
    "process": {
      "eyebrow": "Langkah Kerja",
      "title": "Dari cerita Anda sampai sistem jalan",
      "subtitle": "Empat langkah. Anda selalu tahu lagi sampai mana.",
      "steps": [
        {
          "num": "01",
          "title": "Ngobrol dulu",
          "desc": "Saya tanya cara kerja Anda sehari-hari. Bagian mana yang paling capek? Di mana uang atau waktu sering bocor? Nggak perlu siapin apa-apa."
        },
        {
          "num": "02",
          "title": "Lihat rancangannya",
          "desc": "Sebelum dibangun, Anda lihat dulu gambaran tampilan dan alurnya. Kalau nggak cocok, bilang saja. Belum ada biaya besar yang keluar."
        },
        {
          "num": "03",
          "title": "Sistem dibangun",
          "desc": "Saya bangun dengan bantuan AI supaya lebih cepat. Versi awal yang bisa dicoba biasanya siap dalam 1 sampai 2 minggu."
        },
        {
          "num": "04",
          "title": "Dipasang dan diajarkan",
          "desc": "Sistem dipasang, tim Anda dilatih. Saya mendampingi setelah sistem berjalan."
        }
      ],
      "promisesTitle": "Tiga hal yang saya pegang",
      "promises": [
        {
          "title": "Lihat rancangannya dulu",
          "desc": "Sebelum dibangun, Anda lihat tampilan dan alurnya. Belum cocok, bilang saja."
        },
        {
          "title": "Bahasa sehari-hari",
          "desc": "Tulisan di layar pakai bahasa tim Anda, bukan istilah teknis."
        },
        {
          "title": "Harga jelas sebelum mulai",
          "desc": "Harga final ditulis dan disepakati dulu, baru Anda bayar DP."
        }
      ]
    },
    "orbit": {
      "eyebrow": "Alat",
      "title": "Alat di balik layar",
      "subtitle": "Nggak perlu dihafal. Ini cuma biar Anda tahu pilihannya sudah dipikirkan.",
      "cards": [
        {
          "title": "Layar yang responsif",
          "tagline": "React dan Next.js",
          "desc": "Layar langsung bereaksi waktu diketuk atau diklik, tanpa jeda yang mengganggu."
        },
        {
          "title": "Kode yang lebih jarang error",
          "tagline": "TypeScript",
          "desc": "Membantu menangkap salah tulis sebelum sampai ke tangan Anda."
        },
        {
          "title": "Aplikasi komputer yang mandiri",
          "tagline": "Electron",
          "desc": "Dipasang di komputer toko, dan nggak bergantung pada koneksi internet."
        },
        {
          "title": "Tanpa biaya server bulanan",
          "tagline": "Google Apps Script",
          "desc": "Pakai Google Workspace, jadi untuk sistem tertentu nggak ada tagihan server tambahan."
        },
        {
          "title": "Asisten AI untuk kerjaan berulang",
          "tagline": "AI Agent",
          "desc": "Tugas yang tiap hari Anda ulang, dikerjakan otomatis."
        },
        {
          "title": "Data aman di perangkat",
          "tagline": "Zustand dan IndexedDB",
          "desc": "Transaksi tetap tercatat waktu internet mati, lalu tersambung lagi begitu sinyal balik."
        }
      ]
    },
    "about": {
      "eyebrow": "Tentang Saya",
      "titlePart1": "Saya pernah ",
      "titlePart2": "di posisi",
      "titlePart3": "Anda.",
      "p1": "Tahun 2019, saya buka usaha F&B sendiri. Dari nol.",
      "p2": "Saya tahu rasanya ngitung kas tutup yang nggak pernah pas. Nyusun jadwal karyawan sambil takut ada yang keluar. Pulang malam tanpa tahu hari itu untung atau nggak.",
      "p3": "Waktu itu nggak ada alat yang benar-benar cocok untuk bisnis sekecil punya saya.",
      "p4": "Setelahnya saya belajar ekonomi, lalu jadi analis data. Dari situ kelihatan polanya sama di banyak bisnis: masalahnya jarang di orangnya, hampir selalu di alat yang dipakai. Sekarang saya yang bikin alatnya.",
      "timelineHeading": "PERJALANAN",
      "timeline": [
        {
          "year": "2019",
          "desc": "Buka dan jalankan usaha F&B sendiri"
        },
        {
          "year": "2022",
          "desc": "Lulus Sarjana Ekonomi, Universitas Diponegoro"
        },
        {
          "year": "2024",
          "desc": "Analisis data transaksi dan arus kas bisnis"
        },
        {
          "year": "2026",
          "desc": "Mendirikan Sokara, bikin sistem untuk pemilik bisnis"
        }
      ],
      "roleRow": "PEMBUAT APLIKASI DAN WEBSITE UNTUK USAHA",
      "vitalsHeader": "Data Diri",
      "vitals": [
        {
          "label": "PERAN",
          "content": "Pembuat aplikasi dan website untuk usaha, Sokara"
        },
        {
          "label": "PENGALAMAN",
          "content": "Pemilik usaha F&B (2019), analis data (2024)"
        },
        {
          "label": "PENDIDIKAN",
          "content": "Sarjana Ekonomi, Universitas Diponegoro (2022)",
          "sub": "IPK 3,31/4,00"
        },
        {
          "label": "LOKASI",
          "content": "Bandung, Jawa Barat"
        },
        {
          "label": "YANG SAYA KERJAKAN",
          "content": "Sistem kasir, pembukuan, booking, jadwal karyawan, sistem sekolah, toko online, dan website usaha"
        }
      ]
    },
    "testimonials": {
      "eyebrow": "Masalah yang Sering Muncul",
      "title": "Tiga masalah yang paling sering saya temui",
      "subtitle": "Bukan testimoni. Ini gambaran yang umum dialami pemilik bisnis, dan cara sistem buatan saya menjawabnya.",
      "cards": [
        {
          "category": "Jadwal & Shift",
          "title": "Karyawan kelelahan, baru ketahuan setelah dia resign.",
          "desc": "Sistem kasih peringatan lebih awal, dan menawarkan tukar shift sekali klik."
        },
        {
          "category": "Kasir & Toko",
          "title": "Internet mati pas ramai, antrean numpuk.",
          "desc": "Kasir jalan penuh di perangkatnya sendiri, jadi transaksi nggak berhenti."
        },
        {
          "category": "Kas & Pembukuan",
          "title": "Kas dan catatan nggak sama, selisihnya entah di mana.",
          "desc": "Tiap transaksi otomatis masuk pembukuan, dan yang nggak seimbang langsung ditolak."
        }
      ]
    },
    "faq": {
      "eyebrow": "Pertanyaan Umum",
      "title": "Pertanyaan yang sering muncul",
      "items": [
        {
          "q": "Berapa biayanya? Takut mahal.",
          "a": "Mulai dari versi kecil yang bisa dicoba dulu, harganya menyesuaikan kebutuhan. Cerita dulu masalahnya, nanti saya kasih gambaran yang jelas. Nggak perlu langsung komit besar."
        },
        {
          "q": "Sudah pernah coba aplikasi, hasilnya bikin kecewa. Ini bakal beda?",
          "a": "Kebanyakan aplikasi dibuat untuk semua orang, jadi nggak pas buat siapa pun. Di sini saya mulai dari cerita cara kerja Anda, terus Anda lihat rancangannya dulu. Lanjut atau nggak, terserah Anda."
        },
        {
          "q": "Saya gaptek. Nanti dianggap bodoh?",
          "a": "Nggak. Yang perlu paham bisnisnya itu Anda, dan itu bagian paling susah. Urusan teknis saya yang pegang. Pertanyaan apa pun boleh."
        },
        {
          "q": "Berapa lama jadinya?",
          "a": "Versi awal yang bisa dicoba biasanya selesai 1 sampai 2 minggu. Sistem yang lebih besar dikerjakan bertahap, jadi hasilnya sudah bisa dilihat di tengah jalan."
        },
        {
          "q": "Kenapa nggak pakai aplikasi yang sudah ada aja?",
          "a": "Aplikasi jadi bikin Anda yang menyesuaikan diri dengan aplikasinya. Sistem buatan sendiri kebalikannya: sistemnya yang mengikuti cara kerja Anda. Kalau aplikasi yang sudah ada memang cocok, saya bilang apa adanya."
        },
        {
          "q": "Kalau sistemnya bermasalah dan saya nggak bisa apa-apa?",
          "a": "Sistemnya dibuat dengan dokumentasi, dan saya mendampingi setelah sistem berjalan."
        },
        {
          "q": "Karyawan nanti bingung, atau malah nolak?",
          "a": "Sistemnya dibuat gampang dipelajari, dan saya bantu melatih tim Anda. Sistem yang bagus terasa membantu, bukan mengawasi."
        },
        {
          "q": "Kerja sendirian dan pakai AI, gimana caranya percaya hasilnya bisa diandalkan?",
          "a": "Saya pakai AI supaya nulis kodenya lebih cepat, jadi kerjanya lebih singkat dan lebih murah. Rancangan sistem, aturan bisnis, dan keputusan penting saya yang pegang. Contoh sistemnya juga bisa Anda coba dulu sebelum memutuskan apa pun."
        }
      ]
    },
    "contact": {
      "eyebrow": "Kontak",
      "headline": "Apa satu hal yang paling bikin capek di bisnis Anda?",
      "supporting": "Kirim pesan singkat aja. Nggak perlu siapin apa-apa, nggak perlu ngerti istilah teknis. Saya balas dengan beberapa pertanyaan dan gambaran awal solusinya. Kalau saya nggak bisa bantu, saya bilang terus terang.",
      "btnWa": "Ceritakan Masalah Anda di WhatsApp",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20pemilik%20usaha.%20Saya%20mau%20tanya%20soal%20aplikasi%20atau%20website%20untuk%20usaha%20saya.%20(web-kontak)",
      "socialLabel": "Lebih nyaman lewat kanal lain? Pilih yang paling enak."
    },
    "footer": {
      "links": [
        {
          "id": "segments",
          "label": "Jenis Usaha"
        },
        {
          "id": "work",
          "label": "Contoh Sistem"
        },
        {
          "id": "process",
          "label": "Langkah Kerja"
        },
        {
          "id": "faq",
          "label": "Pertanyaan Umum"
        }
      ],
      "identity": "Aldy Alfarisy, pembuat aplikasi dan website untuk usaha. Bandung, Indonesia.",
      "copyright": "© 2026 Aldy Alfarisy. Sokara."
    },
    "sidenav": [
      {
        "id": "introHero",
        "label": "Awal"
      },
      {
        "id": "segments",
        "label": "Jenis Usaha"
      },
      {
        "id": "work",
        "label": "Contoh Sistem"
      },
      {
        "id": "quadrant",
        "label": "Yang Bisa Saya Bantu"
      },
      {
        "id": "process",
        "label": "Langkah Kerja"
      },
      {
        "id": "about",
        "label": "Tentang Saya"
      },
      {
        "id": "faq",
        "label": "Pertanyaan"
      },
      {
        "id": "contact",
        "label": "Kontak"
      }
    ],
    "segments": {
      "eyebrow": "Jenis Usaha",
      "title": "Usaha Anda yang mana?",
      "subtitle": "Pilih satu. Saya tunjukkan situasi yang sering terjadi dan contoh sistem yang cocok.",
      "situationsLabel": "Situasi yang sering terjadi",
      "demosLabel": "Contoh yang cocok",
      "note": "Ini gambaran umum, bukan cerita klien.",
      "cta": "Ceritakan usaha Anda di WhatsApp",
      "seeDemos": "Lihat contohnya",
      "waTemplate": "Halo Aldy, saya punya usaha {usaha}. Saya mau tanya soal aplikasi atau website untuk usaha saya.",
      "items": [
        {
          "id": "toko",
          "label": "Toko & minimarket",
          "waName": "toko/minimarket",
          "projects": [
            "sokara-pos-evo",
            "sokara-accounting"
          ],
          "situations": [
            "Internet mati pas toko ramai, kasir ikut berhenti.",
            "Stok di catatan dan di rak nggak pernah sama.",
            "Tutup toko, kas selisih lagi, entah bocor di mana."
          ]
        },
        {
          "id": "fnb",
          "label": "Kafe, resto & F&B",
          "waName": "kafe/resto",
          "projects": [
            "sokara-pos-evo",
            "sokara-hrms"
          ],
          "situations": [
            "Jam makan siang antrean numpuk, pesanan salah catat.",
            "Nyusun shift tiap minggu bikin pusing.",
            "Karyawan andalan kecapekan, baru ketahuan pas dia pamit."
          ]
        },
        {
          "id": "klinik",
          "label": "Klinik, spa & salon",
          "waName": "klinik/spa/salon",
          "projects": [
            "sokara-sanctuary",
            "sokara-hrms"
          ],
          "situations": [
            "Terapis atau ruangan bentrok, tamu terpaksa nunggu.",
            "Ada yang batal mendadak, slotnya kosong begitu saja.",
            "Jadwal staf masih diatur lewat grup chat."
          ]
        },
        {
          "id": "distributor",
          "label": "Distributor & grosir",
          "waName": "distributor/grosir",
          "projects": [
            "sokara-accounting",
            "sokara-crm"
          ],
          "situations": [
            "Angka kasir, gudang, dan pembukuan nggak pernah sama.",
            "Tutup buku makan waktu berhari-hari.",
            "Untung bersih baru ketahuan tanggal 10."
          ]
        },
        {
          "id": "sekolah",
          "label": "Sekolah & kursus",
          "waName": "sekolah/kursus",
          "projects": [
            "sokara-lms"
          ],
          "situations": [
            "Internet putus pas ujian online, jawaban siswa hilang.",
            "Guru koreksi ratusan tugas satu per satu.",
            "Orang tua tanya nilai lewat chat pribadi guru."
          ]
        },
        {
          "id": "online",
          "label": "Brand & toko online",
          "waName": "brand/toko online",
          "projects": [
            "kavana-lifestyle"
          ],
          "situations": [
            "Pesanan masuk lewat DM, gampang tercecer.",
            "Belum punya website yang bikin pembeli yakin.",
            "Cek pembayaran dan ongkir masih manual."
          ]
        }
      ]
    },
    "floatingWa": {
      "label": "Chat di WhatsApp"
    }
  },
  "en": {
    "nav": {
      "links": [
        {
          "id": "work",
          "label": "Sample Systems"
        },
        {
          "id": "process",
          "label": "The Process"
        },
        {
          "id": "faq",
          "label": "FAQ"
        }
      ],
      "contact": "Contact",
      "cta": "Tell Me About Your Business",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Hi%20Aldy%2C%20I%20run%20a%20business.%20I'd%20like%20to%20ask%20about%20an%20app%20or%20website%20for%20it.%20(web-general)"
    },
    "hero": {
      "eyebrow": "APPS AND WEBSITES FOR BUSINESSES",
      "headline1": "Your business has its own way.",
      "headline2": "The app should follow it.",
      "offer": "I build custom apps and websites around how your business works. Business websites start from Rp 499.000.",
      "ctaPrimary": "Tell Me About Your Business",
      "ctaSecondary": "See samples for my business",
      "reassurance": "Free to talk first, no strings attached. If I can't help, I'll say so.",
      "trust": [
        "Ran my own F&B business",
        "Economics degree, Universitas Diponegoro",
        "7 sample systems you can try"
      ]
    },
    "marquee": {
      "tier1": [
        "Cash register keeps working when the internet is down",
        "Financial reports without manual counting",
        "Staff schedules that are fairer",
        "Online store with payments included"
      ]
    },
    "familiar": {
      "title": "Sound familiar?",
      "items": [
        "Closing cash is off again, and you can't tell where it leaked.",
        "The internet drops at the busiest hour. Long line, idle cashier.",
        "Every month end you wonder: profit, or just money moving around?"
      ],
      "closing": "It's not that you're not working hard enough. The tools don't fit."
    },
    "work": {
      "eyebrow": "Sample Systems",
      "title": "Systems I've built",
      "subtitle": "All of these are sample systems you can try right now. Not all are used by real businesses yet.",
      "cardLabel": "Sample system, try it live",
      "btnReadStory": "Read the story",
      "btnTryLive": "Try it live",
      "modal": {
        "headingSituation": "A situation that often happens",
        "headingMade": "What I built",
        "headingAftermath": "Life afterward",
        "headingSuitable": "Good for",
        "headingTryLive": "Try it live",
        "headingTech": "For the curious"
      },
      "projects": {
        "pos": {
          "summary": "A cash register that keeps working when the internet is down",
          "role": "Good for shops, minimarkets, cafes",
          "metrics": [
            "Scans are recorded instantly",
            "Works without internet",
            "No waiting on a server"
          ],
          "situation": "Lunch rush. A long line. Then the internet drops and the cashier can only stare at the screen. Customers get restless, staff start to panic, and all you can do is stand at the back hoping the signal returns.",
          "made": "A cash register that runs entirely on its own device. Internet on or off, transactions keep going. Scanning a barcode records it right away, with no need to click a search box. If stock runs short, the system offers a one-click button to fix it.",
          "aftermath": "Busy hours stop being scary. A new cashier can learn quickly because the system guides them instead of blaming them.",
          "suitable": "Retail shops, minimarkets, cafes, small eateries.",
          "liveNote": "",
          "techDetails": "Offline-First PWA; React 19, Zustand, IndexedDB, TailwindCSS; global barcode scanner listener; Poka-Yoke Auto-Fix Restock."
        },
        "kavana": {
          "summary": "An online store that goes all the way to shipping",
          "role": "From sign-up to tracking number",
          "metrics": [
            "From sign-up to shipping",
            "Promo codes calculated accurately",
            "No monthly server cost"
          ],
          "situation": "Many sample online stores stop at the storefront. Customers can pick items, but the payment and shipping flow is incomplete, so you can't picture what running the store would really feel like.",
          "made": "An online store you can try from start to finish: create an account, claim a promo code, pay (simulated), read the confirmation email, and see the order ship with a tracking number. The owner can also read a weekly sales chart.",
          "aftermath": "You can feel how an online store runs before deciding to build one. No imagining required.",
          "suitable": "Local brands, fashion shops, lifestyle products.",
          "liveNote": "Try promo code KAVANA10 or GRATISONGKIR.",
          "techDetails": "Next.js 16, TypeScript, Tailwind CSS, Prisma ORM, SQLite, Recharts; deterministic mock payment state-machine (BCA VA, Mandiri VA, QRIS, credit card); OrderItem price snapshot; isomorphic voucher engine evaluatePromo; transactional email in the EmailLog table; SQLite replication to /tmp/custom.db on Vercel cold start; useHydrated on the cart."
        },
        "accounting": {
          "summary": "Bookkeeping that does its own math",
          "role": "Good for distributors and wholesalers",
          "metrics": [
            "Unbalanced entries rejected automatically",
            "Records can't be changed quietly",
            "Stays smooth with thousands of rows"
          ],
          "situation": "Closing the books. The numbers from the register, the warehouse, and the accountant's records don't match. You spend the night hunting for the gap, and part of you is afraid of what you'll find.",
          "made": "Every sale and purchase goes into the books automatically. If an entry doesn't balance, the system rejects it on the spot and shows where the mistake is, before it becomes a problem. Saved records can't be changed quietly.",
          "aftermath": "You know this month's net profit without waiting until the 10th, and without having to suspect anyone.",
          "suitable": "Distributors, wholesale shops, retail businesses with a warehouse.",
          "liveNote": "",
          "techDetails": "React 19, Zustand 5, Decimal.js (PSAK standard), SHA-256 chain on the ledger; double-entry in the browser; strict debit and credit balance validation; DOM virtualization."
        },
        "hrms": {
          "summary": "Staff schedules that keep people from burning out",
          "role": "Good for businesses with many shifts",
          "metrics": [
            "Fix a schedule in one click",
            "Warning before staff burn out",
            "Schedules aren't lost when the internet drops"
          ],
          "situation": "Building a shift schedule is like a puzzle where someone always ends up unhappy. Then one day your best employee resigns because they got night shifts three weeks in a row, and you only realize it when it is too late.",
          "made": "A system that builds the schedule and warns you before anyone burns out, with a one-click shift swap suggestion. Schedules are saved on the device, so nothing is lost if the internet drops mid-planning.",
          "aftermath": "Staff feel looked after, and you're no longer the place every schedule complaint lands.",
          "suitable": "Restaurants, clinics, factories, shops with many shifts.",
          "liveNote": "",
          "techDetails": "React, TypeScript, TailwindCSS, Zustand; atomic selectors; local memory persistence; Poka-Yoke Smart Suggestion for moving shifts away from high-risk staff."
        },
        "crm": {
          "summary": "Track prospects without endless typing",
          "role": "Good for sales teams",
          "metrics": [
            "Amounts filled with quick buttons",
            "Drag cards with no waiting",
            "See history without leaving the page"
          ],
          "situation": "Sales teams put off updating records because they have to type big amounts one by one. Before long the data is stale, and you can't tell which prospects are really close to closing.",
          "made": "A board of cards you drag from stage to stage. Amounts format themselves, with quick buttons (+10 million, +50 million). If a deal has gone quiet for too long, the system offers a one-click button to extend the negotiation window.",
          "aftermath": "The sales team actually uses it because it is easy, and you see the real state of sales.",
          "suitable": "Sales teams, agencies, B2B businesses.",
          "liveNote": "",
          "techDetails": "Next.js, dnd-kit, framer-motion, SWR; kanban drag-and-drop; optimistic updates with SWR and Zustand; slide-over Deal Inspector with 3D tilt; Poka-Yoke modal for stale deals."
        },
        "sanctuary": {
          "summary": "Bookings that never clash therapist and room",
          "role": "Good for spas, salons, clinics",
          "metrics": [
            "Checks therapist, room, and queue at once",
            "Automatic waitlist",
            "Booking clashes prevented"
          ],
          "situation": "A guest arrives hoping for calm, but the therapist has a clash or the room is still in use. You apologize again, and that guest may not come back.",
          "made": "A booking system that checks therapist, room or equipment, and the queue all at once. If someone cancels, the next guest on the waitlist automatically gets the slot. The guest-facing side is designed to feel calm and luxurious, matching the spa atmosphere.",
          "aftermath": "The guest arrives, everything is ready, and there are no embarrassing apologies.",
          "suitable": "Spas, salons, beauty clinics, massage places.",
          "liveNote": "",
          "techDetails": "WebGL, Zustand, Framer Motion; double-sided state engine; evaluation of 3 variables (therapist, room or machine, queue); automatic waitlist promotion."
        },
        "lms": {
          "summary": "Online exams whose answers don't get lost",
          "role": "Good for schools and course providers",
          "metrics": [
            "Exam answers saved when the connection drops",
            "Designed to speed up grading",
            "Works without internet"
          ],
          "situation": "An exam is underway, the school's internet drops, and the students' answers are lost. A child cries, the teacher is stuck, and the parents are angry.",
          "made": "An online exam that saves answers on the student device when the connection drops. Teachers grade in a split-screen view designed to speed up grading, with keyboard shortcuts. Parents can see grades, report cards, and school fee bills on their own. There are four kinds of access: admin, teacher, student, and parent.",
          "aftermath": "Teachers get more time to teach, and parents don't have to wonder.",
          "suitable": "Schools, course providers, tutoring centers.",
          "liveNote": "",
          "techDetails": "Hono, tRPC v11, React 19, Drizzle ORM, SQLite, PWA; 4-level RBAC; SpeedGrader split-view with J/K/Ctrl+Enter shortcuts; anti-cheat CBT Player with window blur detection; Workbox precaching."
        }
      },
      "filterAll": "All",
      "filterLabel": "Show samples for",
      "ctaCard": {
        "title": "Don't see your kind of business?",
        "desc": "These samples are only a few. Tell me how your business runs and I'll sketch the system for you.",
        "button": "Tell me on WhatsApp"
      },
      "showAll": "See all samples ({n})"
    },
    "quadrant": {
      "eyebrow": "What I Can Help With",
      "title": "What can I help you build?",
      "subtitle": "The four kinds of work business owners ask for most.",
      "cells": [
        {
          "tag": "FOR CHECKOUT & SHOPS",
          "title": "Apps for your business",
          "desc": "Cash registers, internal portals, online stores, or custom apps your team uses every day."
        },
        {
          "tag": "FOR REPETITIVE WORK",
          "title": "Automation for repetitive work",
          "desc": "Work you repeat every day, like recaps, reports, and data entry, set to run on its own."
        },
        {
          "tag": "FOR GROWING BUSINESSES",
          "title": "A system that grows with your business",
          "desc": "Designed so it doesn't need to be torn down and rebuilt when your business gets bigger."
        },
        {
          "tag": "FOR BRAND IMAGE",
          "title": "A website that draws people in",
          "desc": "Pages for your brand with a look and animation people remember."
        }
      ]
    },
    "skills": {
      "eyebrow": "How I Work",
      "title": "How I work",
      "subtitle": "Ten things I hold to when I build a system for you.",
      "hint": "Hover or tap each cell",
      "items": [
        {
          "name": "Working with AI help",
          "description": "I use AI to move faster. Important decisions stay with me."
        },
        {
          "name": "Apps that open fast",
          "description": "Runs in the browser on a phone or computer."
        },
        {
          "name": "Standalone cash register software",
          "description": "Installed on the shop computer, works without internet."
        },
        {
          "name": "Data kept in order",
          "description": "Records stay organized and can connect to other apps."
        },
        {
          "name": "Screens that are easy to understand",
          "description": "A new employee can use it right away."
        },
        {
          "name": "Clear writing on screen",
          "description": "Everyday language, not technical terms."
        },
        {
          "name": "Mistakes caught right away",
          "description": "The system holds it, then offers a fix."
        },
        {
          "name": "Connected to payments and other apps",
          "description": "Data flows on its own, so you never enter it twice."
        },
        {
          "name": "A system that stays online and looked after",
          "description": "I handle the setup and configuration."
        },
        {
          "name": "Works without internet",
          "description": "Data syncs again once the internet is back."
        }
      ]
    },
    "process": {
      "eyebrow": "The Process",
      "title": "From your story to a working system",
      "subtitle": "Four steps. You always know where you are.",
      "steps": [
        {
          "num": "01",
          "title": "Talk, and understand your business",
          "desc": "I ask about how you work day to day. Which part is the most exhausting? Where does money or time tend to leak? You don't need to prepare anything."
        },
        {
          "num": "02",
          "title": "See the design first",
          "desc": "Before the system is built, you see a picture of the screens and the flow. You can say \"this doesn't fit\" before any big cost is spent."
        },
        {
          "num": "03",
          "title": "The system gets built",
          "desc": "I build the system with AI help so it's faster. A first version you can try is usually ready in 1 to 2 weeks."
        },
        {
          "num": "04",
          "title": "Installed and taught",
          "desc": "The system is installed and your team is trained. I support you after the system is running."
        }
      ],
      "promisesTitle": "Three things I stick to",
      "promises": [
        {
          "title": "See the design first",
          "desc": "Before anything is built, you see the screens and the flow. If it does not fit, just say so."
        },
        {
          "title": "Everyday language",
          "desc": "Screens use the words your team already uses, not tech jargon."
        },
        {
          "title": "A clear price before any work",
          "desc": "The final price is written down and agreed before you pay the deposit."
        }
      ]
    },
    "orbit": {
      "eyebrow": "Tools",
      "title": "The tools I use behind the scenes",
      "subtitle": "You don't need to memorize these. This is just so you know the choices were thought through.",
      "cards": [
        {
          "title": "A responsive interface",
          "tagline": "React and Next.js",
          "desc": "The screen reacts quickly when tapped or clicked, without annoying lag."
        },
        {
          "title": "Code that's less likely to break",
          "tagline": "TypeScript",
          "desc": "A tool that helps catch writing mistakes before they reach you."
        },
        {
          "title": "A standalone computer app",
          "tagline": "Electron",
          "desc": "Software installed on the shop computer that doesn't depend on an internet connection."
        },
        {
          "title": "No monthly server cost",
          "tagline": "Google Apps Script",
          "desc": "Uses Google Workspace, so certain systems add no monthly server bill."
        },
        {
          "title": "AI assistant for repetitive work",
          "tagline": "AI Agent",
          "desc": "Tasks you repeat every day get done automatically."
        },
        {
          "title": "Data stored safely on the device",
          "tagline": "Zustand and IndexedDB",
          "desc": "Transactions are still recorded when the internet is down, then sync when the signal returns."
        }
      ]
    },
    "about": {
      "eyebrow": "About Me",
      "titlePart1": "I've been ",
      "titlePart2": "where you",
      "titlePart3": "are.",
      "p1": "In 2019, I opened my own food and beverage business, from scratch.",
      "p2": "I know what it's like to count closing cash that never adds up. To build staff schedules while worrying someone will quit. To go home late without knowing whether the day made money.",
      "p3": "Back then, nobody had built a tool that really fit a business as small as mine.",
      "p4": "After that I studied economics and worked as a data analyst. From there I saw the same pattern in many businesses: the problem is rarely the people, it is almost always the tools they use. Now I build those tools.",
      "timelineHeading": "CAREER TIMELINE",
      "timeline": [
        {
          "year": "2019",
          "desc": "Opened and ran my own food and beverage business"
        },
        {
          "year": "2022",
          "desc": "Graduated with a Bachelor of Economics, Diponegoro University"
        },
        {
          "year": "2024",
          "desc": "Analyzed transaction data and business cash flow"
        },
        {
          "year": "2026",
          "desc": "Founded Sokara, building systems for business owners"
        }
      ],
      "roleRow": "APPS AND WEBSITES FOR BUSINESSES",
      "vitalsHeader": "Vitals",
      "vitals": [
        {
          "label": "ROLE",
          "content": "Apps and websites for businesses, Sokara"
        },
        {
          "label": "EXPERIENCE",
          "content": "Food and beverage business owner (2019), data analyst (2024)"
        },
        {
          "label": "EDUCATION",
          "content": "Bachelor of Economics, Diponegoro University (2022)",
          "sub": "GPA 3.31/4.00"
        },
        {
          "label": "LOCATION",
          "content": "Bandung, West Java"
        },
        {
          "label": "WHAT I TAKE ON",
          "content": "Point of sale, bookkeeping, bookings, staff scheduling, school systems, online stores, and business websites"
        }
      ]
    },
    "testimonials": {
      "eyebrow": "Business Problems",
      "title": "The three problems I see most often",
      "subtitle": "These are not testimonials. They describe situations business owners commonly face, and how the systems I build respond.",
      "cards": [
        {
          "category": "Staff Schedules",
          "title": "An employee burns out, and you only notice after they resign.",
          "desc": "The system warns you early and offers a one-click shift swap."
        },
        {
          "category": "Cashier & Shops",
          "title": "The internet drops during the rush and the line backs up.",
          "desc": "The register runs fully on its own device, so transactions don't stop."
        },
        {
          "category": "Cash & Bookkeeping",
          "title": "Cash and records don't match, and you don't know where the gap is.",
          "desc": "Every transaction goes into the books automatically, and anything unbalanced is rejected right away."
        }
      ]
    },
    "faq": {
      "eyebrow": "FAQ",
      "title": "Questions people often ask",
      "items": [
        {
          "q": "How much does it cost? I'm afraid it's expensive.",
          "a": "Systems start as a small version you can try first, and the price is set to fit your needs. Tell me your problem first, then I'll give you a clear picture. You don't have to commit to anything big at the start."
        },
        {
          "q": "I tried an app before and it was disappointing. Why would this be different?",
          "a": "It's fair to be doubtful. Most apps are built for everyone, so they fit no one well. Here, I start from the story of how you work, and you see the design first. You only continue if it feels right."
        },
        {
          "q": "I don't understand technology. Will you think I'm stupid?",
          "a": "No. You don't need to understand technology. You only need to understand your business, and that's the hardest part. The rest is my job. No question is too small."
        },
        {
          "q": "How long will it take?",
          "a": "A first version you can try is usually done in 1 to 2 weeks. For larger systems, the work is split into stages so you can see results along the way."
        },
        {
          "q": "Why not just use an app that already exists?",
          "a": "Off-the-shelf apps make you adjust how your business works to fit the app. A system built for you goes the other way: the app adapts to how you work. If an off-the-shelf app already suits you, I'll tell you so."
        },
        {
          "q": "What if the system has a problem and I can't do anything?",
          "a": "A reasonable fear. The system is built with documentation, and I support you after the system is running."
        },
        {
          "q": "What if my staff get confused, or refuse to use it?",
          "a": "The system is designed to be easy to learn, and I help train your team. A good system feels like help, not like surveillance."
        },
        {
          "q": "You work alone and use AI. How do I know the result is reliable?",
          "a": "A good question, and you have every right to ask it. I use AI to write code faster, which makes the work quicker and more affordable. The system design, business rules, and important decisions are mine. You can also try the sample systems that already exist before deciding anything."
        }
      ]
    },
    "contact": {
      "eyebrow": "Contact",
      "headline": "Tell me the one thing that wears you out most in your business.",
      "supporting": "Just send a short message. You don't need to prepare anything or understand technical terms. I'll reply with questions and a first picture of a possible solution. If I can't help, I'll tell you straight.",
      "btnWa": "Tell Me Your Problem on WhatsApp",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Hi%20Aldy%2C%20I%20run%20a%20business.%20I'd%20like%20to%20ask%20about%20an%20app%20or%20website%20for%20it.%20(web-contact)",
      "socialLabel": "Prefer another channel? Pick whichever is most comfortable."
    },
    "footer": {
      "links": [
        {
          "id": "segments",
          "label": "Your Business"
        },
        {
          "id": "work",
          "label": "Sample Systems"
        },
        {
          "id": "process",
          "label": "The Process"
        },
        {
          "id": "faq",
          "label": "FAQ"
        }
      ],
      "identity": "Aldy Alfarisy, apps and websites for businesses. Bandung, Indonesia.",
      "copyright": "© 2026 Aldy Alfarisy. Sokara."
    },
    "sidenav": [
      {
        "id": "introHero",
        "label": "Start"
      },
      {
        "id": "segments",
        "label": "Your Business"
      },
      {
        "id": "work",
        "label": "Sample Systems"
      },
      {
        "id": "quadrant",
        "label": "What I Can Help With"
      },
      {
        "id": "process",
        "label": "The Process"
      },
      {
        "id": "about",
        "label": "About Me"
      },
      {
        "id": "faq",
        "label": "Questions"
      },
      {
        "id": "contact",
        "label": "Contact"
      }
    ],
    "segments": {
      "eyebrow": "Your Business",
      "title": "Which one is your business?",
      "subtitle": "Pick one. I will show you what usually goes wrong and the sample systems that fit.",
      "situationsLabel": "What often happens",
      "demosLabel": "Samples that fit",
      "note": "These are common situations, not client stories.",
      "cta": "Tell me about your business on WhatsApp",
      "seeDemos": "See the samples",
      "waTemplate": "Hi Aldy, I run a {usaha} business. I'd like to ask about an app or website for it.",
      "items": [
        {
          "id": "toko",
          "label": "Shops & minimarkets",
          "waName": "shop/minimarket",
          "projects": [
            "sokara-pos-evo",
            "sokara-accounting"
          ],
          "situations": [
            "The internet drops during a rush and the register stops too.",
            "Stock on paper never matches stock on the shelf.",
            "Closing time, the cash is off again and nobody knows why."
          ]
        },
        {
          "id": "fnb",
          "label": "Cafes, restaurants & F&B",
          "waName": "cafe/restaurant",
          "projects": [
            "sokara-pos-evo",
            "sokara-hrms"
          ],
          "situations": [
            "Lunch rush, the queue piles up and orders get written down wrong.",
            "Planning shifts every week is a headache.",
            "Your best staff burn out, and you only find out when they quit."
          ]
        },
        {
          "id": "klinik",
          "label": "Clinics, spas & salons",
          "waName": "clinic/spa/salon",
          "projects": [
            "sokara-sanctuary",
            "sokara-hrms"
          ],
          "situations": [
            "Therapists or rooms clash, and guests end up waiting.",
            "Someone cancels last minute and the slot just sits empty.",
            "Staff schedules still live in a group chat."
          ]
        },
        {
          "id": "distributor",
          "label": "Distributors & wholesalers",
          "waName": "distribution/wholesale",
          "projects": [
            "sokara-accounting",
            "sokara-crm"
          ],
          "situations": [
            "Register, warehouse, and books never show the same numbers.",
            "Closing the books takes days.",
            "You only know your real profit around the 10th of next month."
          ]
        },
        {
          "id": "sekolah",
          "label": "Schools & courses",
          "waName": "school/course",
          "projects": [
            "sokara-lms"
          ],
          "situations": [
            "The internet drops mid exam and student answers disappear.",
            "Teachers grade hundreds of assignments one by one.",
            "Parents ask about grades through teachers’ personal chats."
          ]
        },
        {
          "id": "online",
          "label": "Brands & online stores",
          "waName": "brand/online store",
          "projects": [
            "kavana-lifestyle"
          ],
          "situations": [
            "Orders come in through DMs and get lost.",
            "No website yet that makes buyers feel safe.",
            "Payments and shipping costs are still checked by hand."
          ]
        }
      ]
    },
    "floatingWa": {
      "label": "Chat on WhatsApp"
    }
  }
} as const;
