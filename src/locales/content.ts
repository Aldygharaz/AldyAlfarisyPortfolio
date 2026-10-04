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
          "id": "paket",
          "label": "Harga"
        },
        {
          "id": "faq",
          "label": "Pertanyaan"
        }
      ],
      "contact": "Kontak",
      "cta": "Tanya di WhatsApp",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20pemilik%20usaha.%20Saya%20mau%20tanya%20soal%20aplikasi%20atau%20website%20untuk%20usaha%20saya.%20(web-umum)"
    },
    "hero": {
      "eyebrow": "APLIKASI DAN WEBSITE UNTUK USAHA",
      "headline1": "Usaha Anda punya cara sendiri.",
      "headline2": "Aplikasinya yang ikut.",
      "offer": "Saya bikin aplikasi dan website yang mengikuti cara kerja usaha Anda. Harga final jelas sebelum Anda bayar apa pun.",
      "ctaPrimary": "Tanya di WhatsApp",
      "ctaSecondary": "Lihat contoh untuk usaha saya",
      "reassurance": "Gratis ngobrol dulu, tanpa kewajiban. Kalau saya nggak bisa bantu, saya bilang.",
      "trust": [
        "Pernah punya usaha F&B sendiri",
        "Sarjana Ekonomi Universitas Diponegoro",
        "7 contoh sistem yang bisa Anda coba sendiri"
      ],
      "priceLink": "Lihat paket dan harga",
      "byline": "Aldy Alfarisy, pembuat Sokara",
      "portraitAlt": "Aldy Alfarisy, pembuat aplikasi dan website untuk usaha"
    },
    "work": {
      "eyebrow": "Contoh Sistem",
      "title": "Sistem yang sudah saya buat",
      "subtitle": "Ini contoh sistem, bukan hasil kerja untuk klien. Semuanya bisa Anda coba sendiri dan nilai langsung.",
      "cardLabel": "Contoh sistem, bisa dicoba langsung",
      "btnReadStory": "Baca ceritanya",
      "btnTryLive": "Coba langsung",
      "modal": {
        "headingSituation": "Situasi yang sering terjadi",
        "headingMade": "Yang saya buat",
        "headingAftermath": "Setelah sistemnya jalan",
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
            "Bayar dan kirim disimulasikan"
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
          "situation": "Tutup buku. Angka kasir, gudang, dan catatan akuntan nggak ada yang sama. Semalaman nyari selisihnya, dan Anda mulai khawatir sama jawabannya.",
          "made": "Tiap penjualan dan pembelian langsung masuk pembukuan. Kalau ada catatan yang nggak seimbang, langsung ditolak dan ditunjukkan salahnya di mana, sebelum sempat jadi masalah. Catatan yang sudah tersimpan nggak bisa diubah diam-diam.",
          "aftermath": "Untung bersih bulan ini kelihatan tanpa nunggu tanggal 10. Anda nggak perlu menebak-nebak lagi.",
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
          "situation": "Nyusun shift itu kayak main puzzle, sering ada yang kecewa. Terus suatu hari karyawan andalan Anda resign, gara-gara tiga minggu berturut-turut kebagian shift malam. Anda baru tahu setelah dia pamit.",
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
          "summary": "Booking yang mencegah bentrok terapis dan ruangan",
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
            "Orang tua lihat nilai dan tagihan sendiri"
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
        "button": "Tanya di WhatsApp"
      },
      "showAll": "Lihat semua contoh ({n})",
      "filterShowing": "Menampilkan contoh untuk",
      "filterChange": "Ganti"
    },
    "process": {
      "eyebrow": "Langkah Kerja",
      "title": "Dari cerita Anda sampai sistem jalan",
      "subtitle": "Empat langkah. Di tiap langkah Anda tahu lagi sampai mana.",
      "steps": [
        {
          "num": "01",
          "title": "Ngobrol dulu",
          "desc": "Saya tanya cara kerja Anda sehari-hari. Bagian mana yang paling capek? Di mana uang atau waktu sering bocor? Nggak perlu siapin apa-apa."
        },
        {
          "num": "02",
          "title": "Lihat rancangannya",
          "desc": "Sebelum dibangun, Anda lihat dulu gambaran tampilan dan alurnya. Kalau cocok, kita sepakati harga final, baru DP. Kalau nggak cocok, bilang saja."
        },
        {
          "num": "03",
          "title": "Sistem dibangun",
          "desc": "Saya bangun dengan bantuan AI supaya lebih cepat. Versi awal yang bisa dicoba biasanya siap dalam 1 sampai 2 minggu."
        },
        {
          "num": "04",
          "title": "Dipasang dan diajarkan",
          "desc": "Sistem dipasang dan tim Anda dilatih. Setelah berjalan, saya mendampingi 30 hari tanpa biaya tambahan."
        }
      ],
      "promisesTitle": "Tiga hal yang saya pegang",
      "promises": [
        {
          "title": "Belum bayar sebelum setuju",
          "desc": "DP baru diminta setelah rancangan, ruang lingkup, dan harga final Anda setujui."
        },
        {
          "title": "Bahasa sehari-hari",
          "desc": "Tulisan di layar pakai bahasa tim Anda, bukan istilah teknis."
        },
        {
          "title": "Boleh berhenti di tengah jalan",
          "desc": "Bagian yang belum dikerjakan dikembalikan, yang sudah dikerjakan dihitung apa adanya. Aturannya tertulis di kesepakatan."
        }
      ]
    },
    "about": {
      "eyebrow": "Tentang Saya",
      "titlePart1": "Saya pernah ",
      "titlePart2": "di posisi",
      "titlePart3": "Anda.",
      "p1": "Tahun 2019, saya buka usaha F&B sendiri. Dari nol.",
      "p2": "Saya tahu rasanya ngitung kas tutup yang sering nggak pas. Nyusun jadwal karyawan sambil takut ada yang keluar. Pulang malam tanpa tahu hari itu untung atau nggak.",
      "p3": "Waktu itu saya nggak nemu alat yang pas untuk bisnis sekecil punya saya.",
      "p4": "Setelahnya saya belajar ekonomi, lalu jadi analis data. Dari situ kelihatan polanya sama di banyak bisnis: masalahnya sering bukan di orangnya, tapi di alat yang dipakai. Sekarang saya yang bikin alatnya.",
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
      ],
      "portraitAlt": "Aldy Alfarisy, pembuat aplikasi dan website untuk usaha"
    },
    "faq": {
      "eyebrow": "Pertanyaan Umum",
      "title": "Pertanyaan yang sering muncul",
      "groups": [
        {
          "title": "Harga dan pembayaran",
          "items": [
            {
              "q": "Berapa biayanya? Takut mahal.",
              "a": "Website usaha mulai dari Rp 499.000. Untuk aplikasi, harganya tergantung kebutuhan, jadi saya kasih gambaran setelah dengar cerita Anda. Bisa mulai dari versi kecil dulu, nggak perlu langsung komit besar."
            },
            {
              "q": "Bayarnya gimana? Harus lunas di depan?",
              "a": "Nggak. Mulainya dengan DP, dan DP baru diminta setelah gambaran solusi, ruang lingkup, dan harga final disepakati. Besaran DP dan jadwal pelunasan saya jelaskan di chat."
            },
            {
              "q": "Kalau sudah DP lalu merasa tidak cocok?",
              "a": "Bilang saja. Bagian yang belum dikerjakan dikembalikan, dan bagian yang sudah dikerjakan dihitung apa adanya. Aturannya ditulis di kesepakatan sebelum Anda bayar DP."
            }
          ]
        },
        {
          "title": "Proses dan dukungan",
          "items": [
            {
              "q": "Berapa lama jadinya?",
              "a": "Versi awal yang bisa dicoba biasanya selesai 1 sampai 2 minggu. Sistem yang lebih besar dikerjakan bertahap, jadi hasilnya sudah bisa dilihat di tengah jalan."
            },
            {
              "q": "Kalau sistemnya bermasalah dan saya nggak bisa apa-apa?",
              "a": "Setelah sistem berjalan, saya mendampingi 30 hari tanpa biaya tambahan. Kirim pesan ke saya, biasanya saya balas dalam satu hari kerja. Setelah itu, perawatan dibahas terpisah dan harganya jelas di depan. Sistem juga diserahkan dengan catatan tertulis cara pakai dan cara kerjanya."
            },
            {
              "q": "Karyawan nanti bingung, atau malah nolak?",
              "a": "Sistemnya dibuat gampang dipelajari, dan saya bantu melatih tim Anda. Sistem yang bagus terasa membantu, bukan mengawasi."
            },
            {
              "q": "Saya gaptek. Nanti dianggap bodoh?",
              "a": "Nggak. Yang perlu paham bisnisnya itu Anda, dan itu bagian paling susah. Urusan teknis saya yang pegang. Pertanyaan apa pun boleh."
            }
          ]
        },
        {
          "title": "Soal kepercayaan",
          "items": [
            {
              "q": "Sudah pernah coba aplikasi, hasilnya bikin kecewa. Ini bakal beda?",
              "a": "Banyak aplikasi dibuat untuk semua orang, jadi sering nggak pas buat usaha tertentu. Di sini saya mulai dari cerita cara kerja Anda, terus Anda lihat rancangannya dulu. Lanjut atau nggak, terserah Anda."
            },
            {
              "q": "Kerja sendirian dan pakai AI, gimana caranya percaya hasilnya bisa diandalkan?",
              "a": "Saya pakai AI supaya nulis kodenya lebih cepat, jadi kerjanya lebih singkat dan lebih murah. Rancangan sistem, aturan bisnis, dan keputusan penting saya yang pegang. Contoh sistemnya juga bisa Anda coba dulu sebelum memutuskan apa pun."
            },
            {
              "q": "Kenapa nggak pakai aplikasi yang sudah ada saja?",
              "a": "Aplikasi jadi bikin Anda yang menyesuaikan diri dengan aplikasinya. Sistem buatan sendiri kebalikannya: sistemnya yang mengikuti cara kerja Anda. Kalau aplikasi yang sudah ada memang cocok, saya bilang apa adanya."
            },
            {
              "q": "Data usaha saya aman? Nanti punya siapa?",
              "a": "Data usaha tetap milik Anda. Kode, akun hosting, dan domain diserahkan setelah pelunasan, dan ini ditulis di kesepakatan sebelum mulai kerja."
            },
            {
              "q": "Kalau nanti mau pindah ke vendor lain, bisa?",
              "a": "Bisa. Karena kode dan akun diserahkan setelah pelunasan, dan sistemnya punya catatan tertulis, orang lain bisa melanjutkannya. Hal ini saya bicarakan sejak awal."
            }
          ]
        }
      ]
    },
    "contact": {
      "eyebrow": "Kontak",
      "headline": "Apa satu hal yang paling bikin capek di bisnis Anda?",
      "supporting": "Kirim pesan singkat saja. Nggak perlu siapin apa-apa, nggak perlu ngerti istilah teknis. Saya balas dengan beberapa pertanyaan dan gambaran awal solusinya. Kalau saya nggak bisa bantu, saya bilang terus terang.",
      "btnWa": "Tanya di WhatsApp",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20pemilik%20usaha.%20Saya%20mau%20tanya%20soal%20aplikasi%20atau%20website%20untuk%20usaha%20saya.%20(web-kontak)",
      "emailLabel": "Lebih nyaman lewat email?",
      "email": "aldyalfarisy24@gmail.com"
    },
    "footer": {
      "links": [
        {
          "id": "work",
          "label": "Contoh Sistem"
        },
        {
          "id": "paket",
          "label": "Paket dan Harga"
        },
        {
          "id": "pesan",
          "label": "Pesan"
        },
        {
          "id": "faq",
          "label": "Pertanyaan Umum"
        }
      ],
      "identity": "Aldy Alfarisy, pembuat aplikasi dan website untuk usaha. Bandung, Indonesia.",
      "copyright": "© 2026 Aldy Alfarisy. Sokara.",
      "navLabel": "Tautan cepat"
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
        "id": "process",
        "label": "Langkah Kerja"
      },
      {
        "id": "paket",
        "label": "Paket dan Harga"
      },
      {
        "id": "pesan",
        "label": "Pesan"
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
      "cta": "Tanya di WhatsApp",
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
            "Stok di catatan dan di rak sering beda.",
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
            "Angka kasir, gudang, dan pembukuan jarang cocok.",
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
      "label": "Tanya di WhatsApp"
    },
    "packages": {
      "eyebrow": "Paket dan Harga",
      "title": "Mulai dari yang paling Anda butuhkan",
      "subtitle": "Harga final disepakati dulu di chat, setelah saya dengar cara kerja usaha Anda.",
      "from": "Mulai dari",
      "contactPrice": "Hubungi saya untuk harga",
      "contactPriceShort": "harga dibahas di chat",
      "choose": "Pilih paket ini",
      "example": "Lihat contoh website",
      "middleTag": "Untuk satu masalah utama",
      "payTitle": "Cara bayar",
      "payText": "DP dulu. DP baru diminta setelah gambaran solusi, ruang lingkup, dan harga final disepakati. Besaran DP dan pelunasannya saya jelaskan di chat. Kalau di tengah jalan Anda memutuskan berhenti, bagian yang belum dikerjakan dikembalikan dan yang sudah dikerjakan dihitung apa adanya. Aturannya ditulis di kesepakatan.",
      "items": [
        {
          "id": "website",
          "name": "Website Usaha",
          "price": "Rp 499.000",
          "desc": "Profil usaha atau landing page satu halaman, supaya pembeli percaya dan gampang menghubungi Anda.",
          "features": [
            "Satu halaman profil usaha atau promosi",
            "Rapi di layar HP, ada tombol WhatsApp dan lokasi usaha",
            "Satu putaran revisi besar sebelum diserahkan",
            "Biasanya selesai dalam beberapa hari kerja",
            "Domain dan hosting dibahas terpisah, harganya jelas di depan",
            "Bisa dikembangkan jadi toko online nanti"
          ]
        },
        {
          "id": "aplikasi",
          "name": "Aplikasi Usaha",
          "price": null,
          "desc": "Satu sistem untuk operasional harian, misalnya kasir, pembukuan, booking, atau jadwal karyawan.",
          "features": [
            "Satu sistem inti sesuai cara kerja Anda",
            "Lihat rancangannya dulu sebelum dibangun",
            "Versi awal yang bisa dicoba biasanya 1 sampai 2 minggu",
            "Tim Anda dilatih, lalu saya dampingi 30 hari setelah berjalan"
          ]
        },
        {
          "id": "lengkap",
          "name": "Sistem Lengkap",
          "price": null,
          "desc": "Beberapa sistem yang saling nyambung, untuk usaha dengan cabang atau tim yang lebih besar.",
          "features": [
            "Beberapa modul yang saling terhubung",
            "Bisa untuk lebih dari satu cabang",
            "Nyambung ke pembayaran dan aplikasi lain",
            "Dikerjakan bertahap, hasilnya terlihat di tengah jalan"
          ]
        }
      ],
      "driversTitle": "Yang menentukan harga aplikasi",
      "drivers": [
        "Jumlah fitur yang Anda perlukan",
        "Berapa orang yang memakainya",
        "Sambungan ke pembayaran atau aplikasi lain"
      ],
      "driversNote": "Saya hitung bersama Anda di chat. Harga finalnya tertulis sebelum DP."
    },
    "orderFlow": {
      "eyebrow": "Pesan dalam 3 Langkah",
      "title": "Ceritakan kebutuhan Anda, tanpa ribet",
      "subtitle": "Pilih saja, nggak perlu ngetik panjang. Di akhir, ringkasannya langsung terkirim ke WhatsApp saya.",
      "stepOf": "Langkah {n} dari 3",
      "stepDone": "Langkah {n} dari 3 selesai",
      "doneLabel": "Ringkasan siap",
      "steps": [
        "Jenis usaha",
        "Kebutuhan",
        "Paket"
      ],
      "q1": "Usaha Anda yang mana?",
      "otherBusiness": "Usaha lain",
      "q2": "Apa yang Anda butuhkan?",
      "q2hint": "Boleh pilih lebih dari satu.",
      "q3": "Paket mana yang paling dekat?",
      "recommended": "Disarankan dari pilihan Anda",
      "next": "Lanjut",
      "back": "Kembali",
      "change": "Ubah",
      "summaryTitle": "Ringkasan untuk Aldy",
      "summaryBusiness": "Jenis usaha",
      "summaryNeeds": "Kebutuhan",
      "summaryPackage": "Paket",
      "problemLabel": "Masalah utama Anda (boleh dikosongkan)",
      "problemPlaceholder": "Contoh: stok sering selisih dan kasir lambat pas ramai",
      "send": "Kirim ringkasan ke WhatsApp",
      "sendNote": "Belum ada biaya apa pun. Saya balas dengan beberapa pertanyaan dan gambaran awal solusinya.",
      "restart": "Ulangi dari awal",
      "needs": [
        {
          "id": "website",
          "label": "Website profil usaha",
          "kind": "web"
        },
        {
          "id": "landing",
          "label": "Landing page untuk promosi",
          "kind": "web"
        },
        {
          "id": "toko-online",
          "label": "Toko online",
          "kind": "app"
        },
        {
          "id": "kasir",
          "label": "Aplikasi kasir",
          "kind": "app"
        },
        {
          "id": "pembukuan",
          "label": "Pembukuan dan stok",
          "kind": "app"
        },
        {
          "id": "booking",
          "label": "Booking dan jadwal tamu",
          "kind": "app"
        },
        {
          "id": "karyawan",
          "label": "Jadwal karyawan",
          "kind": "app"
        },
        {
          "id": "sekolah",
          "label": "Sistem sekolah atau kursus",
          "kind": "app"
        },
        {
          "id": "pelanggan",
          "label": "Data calon pelanggan",
          "kind": "app"
        },
        {
          "id": "konsultasi",
          "label": "Belum tahu, mau konsultasi dulu",
          "kind": "unknown"
        }
      ],
      "wa": {
        "greeting": "Halo Aldy, saya pemilik {usaha}.",
        "greetingOther": "Halo Aldy, saya pemilik usaha.",
        "needs": "Saya butuh: {needs}.",
        "packagePrice": "Paket yang saya lihat: {paket}, mulai dari {harga}.",
        "packageChat": "Paket yang saya lihat: {paket} (harga dibahas di chat).",
        "problem": "Masalah utama saya: {masalah}",
        "businessName": "usaha {usaha}"
      }
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
          "id": "paket",
          "label": "Pricing"
        },
        {
          "id": "faq",
          "label": "FAQ"
        }
      ],
      "contact": "Contact",
      "cta": "Ask on WhatsApp",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Hi%20Aldy%2C%20I%20run%20a%20business.%20I'd%20like%20to%20ask%20about%20an%20app%20or%20website%20for%20it.%20(web-general)"
    },
    "hero": {
      "eyebrow": "APPS AND WEBSITES FOR BUSINESSES",
      "headline1": "Your business has its own way.",
      "headline2": "The app should follow it.",
      "offer": "I build apps and websites that follow how your business already works. The final price is clear before you pay anything.",
      "ctaPrimary": "Ask on WhatsApp",
      "ctaSecondary": "See samples for my business",
      "reassurance": "Free to talk first, no strings attached. If I can't help, I'll say so.",
      "trust": [
        "Ran my own F&B business",
        "Economics degree, Universitas Diponegoro",
        "7 sample systems you can try yourself"
      ],
      "priceLink": "See packages and pricing",
      "byline": "Aldy Alfarisy, builder of Sokara",
      "portraitAlt": "Aldy Alfarisy, builder of apps and websites for businesses"
    },
    "work": {
      "eyebrow": "Sample Systems",
      "title": "Systems I've built",
      "subtitle": "These are sample systems, not work done for clients. You can try each one yourself and judge directly.",
      "cardLabel": "Sample system, try it live",
      "btnReadStory": "Read the story",
      "btnTryLive": "Try it live",
      "modal": {
        "headingSituation": "A situation that often happens",
        "headingMade": "What I built",
        "headingAftermath": "Once it is running",
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
            "Payment and shipping are simulated"
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
          "situation": "Closing the books. The numbers from the register, the warehouse, and the accountant's records don't match. You spend the night hunting for the gap, and you start to worry about what you'll find.",
          "made": "Every sale and purchase goes into the books automatically. If an entry doesn't balance, the system rejects it on the spot and shows where the mistake is, before it becomes a problem. Saved records can't be changed quietly.",
          "aftermath": "You know this month's net profit without waiting until the 10th. No more guessing.",
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
          "situation": "Building a shift schedule is like a puzzle where someone often ends up unhappy. Then one day your best employee resigns because they got night shifts three weeks in a row, and you only find out once they are leaving.",
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
          "summary": "Bookings that prevent therapist and room clashes",
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
            "Parents see grades and bills themselves"
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
        "button": "Ask on WhatsApp"
      },
      "showAll": "See all samples ({n})",
      "filterShowing": "Showing samples for",
      "filterChange": "Change"
    },
    "process": {
      "eyebrow": "The Process",
      "title": "From your story to a working system",
      "subtitle": "Four steps. At each one, you know where you are.",
      "steps": [
        {
          "num": "01",
          "title": "Talk, and understand your business",
          "desc": "I ask about how you work day to day. Which part is the most exhausting? Where does money or time tend to leak? You don't need to prepare anything."
        },
        {
          "num": "02",
          "title": "See the design first",
          "desc": "Before the system is built, you see a picture of the screens and the flow. If it fits, we agree the final price, and only then comes the deposit. If it does not fit, just say so."
        },
        {
          "num": "03",
          "title": "The system gets built",
          "desc": "I build the system with AI help so it's faster. A first version you can try is usually ready in 1 to 2 weeks."
        },
        {
          "num": "04",
          "title": "Installed and taught",
          "desc": "The system is installed and your team is trained. Once it is running, I support you for 30 days at no extra cost."
        }
      ],
      "promisesTitle": "Three things I stick to",
      "promises": [
        {
          "title": "No payment before you agree",
          "desc": "The deposit is only requested after you approve the design, the scope, and the final price."
        },
        {
          "title": "Everyday language",
          "desc": "Screens use the words your team already uses, not tech jargon."
        },
        {
          "title": "You can stop midway",
          "desc": "Work not yet done is refunded, and finished work is counted as it is. The rules are written in the agreement."
        }
      ]
    },
    "about": {
      "eyebrow": "About Me",
      "titlePart1": "I've been ",
      "titlePart2": "where you",
      "titlePart3": "are.",
      "p1": "In 2019, I opened my own food and beverage business, from scratch.",
      "p2": "I know what it's like to count closing cash that so often doesn't add up. To build staff schedules while worrying someone will quit. To go home late without knowing whether the day made money.",
      "p3": "Back then, I couldn't find a tool that fit a business as small as mine.",
      "p4": "After that I studied economics and worked as a data analyst. From there I saw the same pattern in many businesses: the problem is often not the people, but the tools they use. Now I build those tools.",
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
      "vitalsHeader": "Quick facts",
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
      ],
      "portraitAlt": "Aldy Alfarisy, builder of apps and websites for businesses"
    },
    "faq": {
      "eyebrow": "FAQ",
      "title": "Questions people often ask",
      "groups": [
        {
          "title": "Price and payment",
          "items": [
            {
              "q": "How much does it cost? I'm afraid it's expensive.",
              "a": "Business websites start from Rp 499.000. For apps, the price depends on what you need, so I'll give you a clear picture after hearing your story. You can start with a small version, no big commitment up front."
            },
            {
              "q": "How do I pay? Do I pay everything up front?",
              "a": "No. It starts with a deposit, and I only ask for it after the solution sketch, the scope, and the final price are agreed. I explain the deposit amount and the payment schedule in chat."
            },
            {
              "q": "What if I paid the deposit and it doesn't feel right?",
              "a": "Just say so. The part not yet done is refunded, and the part already done is counted as it is. The rules are written into the agreement before you pay the deposit."
            }
          ]
        },
        {
          "title": "Process and support",
          "items": [
            {
              "q": "How long will it take?",
              "a": "A first version you can try is usually done in 1 to 2 weeks. For larger systems, the work is split into stages so you can see results along the way."
            },
            {
              "q": "What if the system has a problem and I can't do anything?",
              "a": "Once the system is running, I support you for 30 days at no extra cost. Send me a message, and I usually reply within one working day. After that, maintenance is discussed separately with a clear price up front. The system is also handed over with written notes on how to use it and how it works."
            },
            {
              "q": "What if my staff get confused, or refuse to use it?",
              "a": "The system is designed to be easy to learn, and I help train your team. A good system feels like help, not like surveillance."
            },
            {
              "q": "I don't understand technology. Will you think I'm stupid?",
              "a": "No. You don't need to understand technology. You only need to understand your business, and that's the hardest part. The rest is my job. No question is too small."
            }
          ]
        },
        {
          "title": "Trust",
          "items": [
            {
              "q": "I tried an app before and it was disappointing. Why would this be different?",
              "a": "It's fair to be doubtful. Many apps are built for everyone, so they often fit one particular business poorly. Here, I start from the story of how you work, and you see the design first. You only continue if it feels right."
            },
            {
              "q": "You work alone and use AI. How do I know the result is reliable?",
              "a": "A good question, and you have every right to ask it. I use AI to write code faster, which makes the work quicker and more affordable. The system design, business rules, and important decisions are mine. You can also try the sample systems that already exist before deciding anything."
            },
            {
              "q": "Why not just use an app that already exists?",
              "a": "Off-the-shelf apps make you adjust how your business works to fit the app. A system built for you goes the other way: the app adapts to how you work. If an off-the-shelf app already suits you, I'll tell you so."
            },
            {
              "q": "Is my business data safe? Who owns it?",
              "a": "Your business data stays yours. Code, hosting accounts, and domain are handed over after final payment, and this is written into the agreement before any work begins."
            },
            {
              "q": "Can I move to another vendor later?",
              "a": "Yes. Because the code and accounts are handed over after final payment, and the system comes with written notes, someone else can pick it up. I discuss this from the start."
            }
          ]
        }
      ]
    },
    "contact": {
      "eyebrow": "Contact",
      "headline": "Tell me the one thing that wears you out most in your business.",
      "supporting": "Just send a short message. You don't need to prepare anything or understand technical terms. I'll reply with questions and a first picture of a possible solution. If I can't help, I'll tell you straight.",
      "btnWa": "Ask on WhatsApp",
      "waUrl": "https://api.whatsapp.com/send?phone=6281410538887&text=Hi%20Aldy%2C%20I%20run%20a%20business.%20I'd%20like%20to%20ask%20about%20an%20app%20or%20website%20for%20it.%20(web-contact)",
      "emailLabel": "Prefer email?",
      "email": "aldyalfarisy24@gmail.com"
    },
    "footer": {
      "links": [
        {
          "id": "work",
          "label": "Sample Systems"
        },
        {
          "id": "paket",
          "label": "Pricing"
        },
        {
          "id": "pesan",
          "label": "Order"
        },
        {
          "id": "faq",
          "label": "FAQ"
        }
      ],
      "identity": "Aldy Alfarisy, apps and websites for businesses. Bandung, Indonesia.",
      "copyright": "© 2026 Aldy Alfarisy. Sokara.",
      "navLabel": "Quick links"
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
        "id": "process",
        "label": "The Process"
      },
      {
        "id": "paket",
        "label": "Pricing"
      },
      {
        "id": "pesan",
        "label": "Order"
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
      "cta": "Ask on WhatsApp",
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
            "Stock on paper often differs from stock on the shelf.",
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
            "Register, warehouse, and books rarely show the same numbers.",
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
      "label": "Ask on WhatsApp"
    },
    "packages": {
      "eyebrow": "Packages and Pricing",
      "title": "Start with what you need most",
      "subtitle": "The final price is agreed in chat first, after I've heard how your business runs.",
      "from": "Starts from",
      "contactPrice": "Contact me for pricing",
      "contactPriceShort": "price discussed in chat",
      "choose": "Choose this package",
      "example": "See a sample website",
      "middleTag": "For one main problem",
      "payTitle": "How payment works",
      "payText": "Deposit first. I only ask for the deposit after the solution sketch, the scope, and the final price are agreed. I explain the deposit amount and the remaining payment in chat. If you decide to stop partway, the part not yet done is refunded and the part already done is counted as it is. The rules are written into the agreement.",
      "items": [
        {
          "id": "website",
          "name": "Business Website",
          "price": "Rp 499.000",
          "desc": "A one-page business profile or landing page, so buyers trust you and can reach you easily.",
          "features": [
            "One profile or promo page",
            "Looks clean on phones, with a WhatsApp button and business location",
            "One round of major revisions before handover",
            "Usually done within a few working days",
            "Domain and hosting are discussed separately, with a clear price up front",
            "Can grow into an online store later"
          ]
        },
        {
          "id": "aplikasi",
          "name": "Business App",
          "price": null,
          "desc": "One system for daily operations, such as point of sale, bookkeeping, bookings, or staff schedules.",
          "features": [
            "One core system built around how you work",
            "See the design before anything is built",
            "A first version to try usually takes 1 to 2 weeks",
            "Your team is trained, then I support you for 30 days after launch"
          ]
        },
        {
          "id": "lengkap",
          "name": "Complete System",
          "price": null,
          "desc": "Several connected systems, for businesses with branches or bigger teams.",
          "features": [
            "Several connected modules",
            "Works across more than one branch",
            "Connects to payments and other apps",
            "Built in stages, with progress you can see along the way"
          ]
        }
      ],
      "driversTitle": "What sets the price of an app",
      "drivers": [
        "How many features you need",
        "How many people use it",
        "Connections to payments or other apps"
      ],
      "driversNote": "We work it out together in chat. The final price is written down before the deposit."
    },
    "orderFlow": {
      "eyebrow": "Order in 3 Steps",
      "title": "Tell me what you need, no hassle",
      "subtitle": "Just tap, no long typing. At the end, the summary goes straight to my WhatsApp.",
      "stepOf": "Step {n} of 3",
      "stepDone": "Step {n} of 3 done",
      "doneLabel": "Summary ready",
      "steps": [
        "Business",
        "Needs",
        "Package"
      ],
      "q1": "Which one is your business?",
      "otherBusiness": "Other business",
      "q2": "What do you need?",
      "q2hint": "You can pick more than one.",
      "q3": "Which package is closest?",
      "recommended": "Suggested from your choices",
      "next": "Next",
      "back": "Back",
      "change": "Change",
      "summaryTitle": "Summary for Aldy",
      "summaryBusiness": "Business",
      "summaryNeeds": "Needs",
      "summaryPackage": "Package",
      "problemLabel": "Your main problem (optional)",
      "problemPlaceholder": "Example: stock often does not match and checkout is slow during rush hour",
      "send": "Send the summary on WhatsApp",
      "sendNote": "No cost yet. I'll reply with a few questions and an early sketch of the solution.",
      "restart": "Start over",
      "needs": [
        {
          "id": "website",
          "label": "Business profile website",
          "kind": "web"
        },
        {
          "id": "landing",
          "label": "Promo landing page",
          "kind": "web"
        },
        {
          "id": "toko-online",
          "label": "Online store",
          "kind": "app"
        },
        {
          "id": "kasir",
          "label": "Point of sale app",
          "kind": "app"
        },
        {
          "id": "pembukuan",
          "label": "Bookkeeping and stock",
          "kind": "app"
        },
        {
          "id": "booking",
          "label": "Bookings and guest schedule",
          "kind": "app"
        },
        {
          "id": "karyawan",
          "label": "Staff schedules",
          "kind": "app"
        },
        {
          "id": "sekolah",
          "label": "School or course system",
          "kind": "app"
        },
        {
          "id": "pelanggan",
          "label": "Sales leads tracking",
          "kind": "app"
        },
        {
          "id": "konsultasi",
          "label": "Not sure yet, want to talk first",
          "kind": "unknown"
        }
      ],
      "wa": {
        "greeting": "Hi Aldy, I run a {usaha} business.",
        "greetingOther": "Hi Aldy, I run a business.",
        "needs": "I need: {needs}.",
        "packagePrice": "The package I looked at: {paket}, starting from {harga}.",
        "packageChat": "The package I looked at: {paket} (price to discuss in chat).",
        "problem": "My main problem: {masalah}",
        "businessName": "{usaha}"
      }
    }
  }
} as const;
