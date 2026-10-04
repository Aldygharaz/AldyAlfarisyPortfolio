# Spesifikasi & Panduan Implementasi: Mode "Coba 2 Menit" untuk 7 Aplikasi Demo Sokara

Dokumen ini adalah cetak biru teknis dan operasional untuk mengimplementasikan **Mode "Coba 2 Menit"** pada 7 aplikasi demo Sokara. Tujuannya adalah agar pemilik bisnis yang membuka tautan demo dapat langsung memahami nilai operasional sistem dalam waktu maksimal 2 menit tanpa rasa bingung, tanpa harus mendaftar akun baru, dan tanpa harus mengetik kredensial manual.

---

## 1. Prinsip Utama "Coba 2 Menit"

1. **Akses Instan (Guest / 1-Click Login)**: Kredensial demo sudah terisi di form login, atau sediakan tombol tunggal "Masuk sebagai Tamu / Coba Demo".
2. **Data Realistis Usaha Indonesia**: Gunakan nama produk, nama karyawan, dan nominal Rupiah bertitik (`Rp 45.000`, `Rp 150.000`, bukan angka mentah atau mata uang asing).
3. **Panduan Berbahasa Awam (3-4 Langkah)**: Fokus pada *momen solusi* (pain point yang teratasi), bukan fitur teknis.
4. **Widget Mengambang (Non-Intrusif)**: Widget panduan berada di pojok kanan bawah, dapat diminimalkan (minimize/collapse), dan tidak menutupi tombol operasional inti aplikasi.
5. **Navigasi Balik & Konversi WhatsApp**: Selalu sertakan tombol "Kembali ke Portofolio" dan "Tanya di WhatsApp" dengan kode pelacakan `(web-demo-<nama>)`.

---

## 2. Rincian Panduan Langkah & WhatsApp untuk Tiap Demo

### 2.1 Sokara POS EVO (`pos.aldyalfarisy.my.id`)
- **Penanda WhatsApp**: `(web-demo-pos)`
- **Tautan WhatsApp**: `https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20sudah%20mencoba%20demo%20POS%20EVO.%20Saya%20tertarik%20untuk%20usaha%20saya.%20(web-demo-pos)`
- **Langkah Panduan**:
  1. *Pilih Produk*: Klik 1 atau 2 produk di layar kasir (contoh: Kopi Susu Aren Rp 18.000). Transaksi langsung masuk keranjang secara instan.
  2. *Simulasi Internet Putus*: Matikan Wi-Fi atau tekan tombol simulasi offline. Kasir tetap bisa memproses transaksi tanpa loading macet.
  3. *Perbaikan Stok 1-Klik*: Coba pilih barang yang habis; jendela perbaikan stok (auto-fix) muncul sehingga kasir tidak perlu keluar ke menu gudang.
  4. *Selesaikan Pembayaran*: Tekan Bayar, cetak struk virtual, kas tutup otomatis tercatat rapi.

### 2.2 KAVANA Lifestyle (`kavana.aldyalfarisy.my.id`)
- **Penanda WhatsApp**: `(web-demo-kavana)`
- **Tautan WhatsApp**: `https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20sudah%20mencoba%20demo%20toko%20online%20KAVANA.%20Saya%20tertarik%20bikin%20website%20serupa.%20(web-demo-kavana)`
- **Langkah Panduan**:
  1. *Pilih Koleksi*: Buka katalog produk dan pilih salah satu busana.
  2. *Pilih Varian & Ukuran*: Lihat bagaimana stok per ukuran dan warna terupdate otomatis tanpa refresh halaman.
  3. *Alur Checkout Instan*: Masuk ke keranjang dan lihat ringkasan ongkir serta pilihan pembayaran lokal Indonesia.

### 2.3 Sokara Accounting (`sokaraaccountingdemo.netlify.app`)
- **Penanda WhatsApp**: `(web-demo-accounting)`
- **Tautan WhatsApp**: `https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20sudah%20mencoba%20demo%20Sokara%20Accounting.%20Mau%20konsultasi%20pembukuan%20usaha%20saya.%20(web-demo-accounting)`
- **Langkah Panduan**:
  1. *Input Transaksi Kas*: Tambahkan satu transaksi kas masuk atau biaya operasional.
  2. *Jurnal Double-Entry Otomatis*: Lihat tab Jurnal; debit dan kredit otomatis terbit seimbang mengikuti standar PSAK.
  3. *Laporan Laba Rugi Real-Time*: Buka laporan keuangan; laba kotor dan laba bersih langsung terhitung tanpa rumus Excel manual.

### 2.4 Sokara HRMS (`hrms.aldyalfarisy.my.id`)
- **Penanda WhatsApp**: `(web-demo-hrms)`
- **Tautan WhatsApp**: `https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20sudah%20mencoba%20demo%20Sokara%20HRMS.%20Mau%20tanya%20sistem%20jadwal%20shift%20karyawan.%20(web-demo-hrms)`
- **Langkah Panduan**:
  1. *Buka Roster Mingguan*: Lihat jadwal shift karyawan restoran/toko dalam satu tabel visual.
  2. *Peringatan Kelelahan (Fatigue)*: Perhatikan tanda merah pada karyawan yang kebagian shift malam berturut-turut.
  3. *Tukar Shift 1-Klik*: Gunakan rekomendasi otomatis untuk memindahkan jadwal ke karyawan yang masih luang secara adil.

### 2.5 Sokara CRM (`crm.aldyalfarisy.my.id`)
- **Penanda WhatsApp**: `(web-demo-crm)`
- **Tautan WhatsApp**: `https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20sudah%20mencoba%20demo%20Sokara%20CRM.%20Mau%20tanya%20pipeline%20sales%20untuk%20tim%20saya.%20(web-demo-crm)`
- **Langkah Panduan**:
  1. *Geser Kartu Deal*: Geser deal prospek dari 'Negosiasi' ke 'Deal Menang' di papan Kanban.
  2. *Tombol Nominal Cepat*: Ubah nilai kontrak menggunakan preset (+10 Juta, +50 Juta) tanpa ketik angka panjang.
  3. *Deal Inspector*: Klik kartu untuk melihat riwayat komunikasi pelanggan di panel samping tanpa berpindah halaman.

### 2.6 Sokara Sanctuary (`spa.aldyalfarisy.my.id`)
- **Penanda WhatsApp**: `(web-demo-spa)`
- **Tautan WhatsApp**: `https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20sudah%20mencoba%20demo%20booking%20Sanctuary.%20Mau%20sistem%20reservasi%20serupa.%20(web-demo-spa)`
- **Langkah Panduan**:
  1. *Pilih Perawatan*: Tentukan paket pijat/relaksasi dan durasi layanan.
  2. *Pilih Terapis & Jadwal*: Sistem langsung memeriksa ketersediaan terapis sekaligus ketersediaan ruang terapi.
  3. *Konfirmasi Reservasi*: Jadwal terkunci tanpa ada risiko bentrok (double booking).

### 2.7 Sokara LMS (`lms.aldyalfarisy.my.id`)
- **Penanda WhatsApp**: `(web-demo-lms)`
- **Tautan WhatsApp**: `https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy%2C%20saya%20sudah%20mencoba%20demo%20Sokara%20LMS.%20Mau%20tanya%20sistem%20pembelajaran%2Fkursus.%20(web-demo-lms)`
- **Langkah Panduan**:
  1. *Masuk sebagai Pengajar*: Akses portal kelas dengan 1 klik tanpa password rumit.
  2. *Kirim Materi & Tugas*: Bagikan bahan ajar digital ke seluruh siswa secara terjadwal.
  3. *Rekap Nilai Otomatis*: Buka buku nilai; nilai kuis dan tugas terisi otomatis tanpa entri manual.

---

## 3. Komponen Drop-In: `DemoTourWidget.tsx` (React & TypeScript)

Komponen berikut dapat disalin langsung ke folder `src/components/` di repositori React/Vite mana pun:

```tsx
import React, { useState } from 'react';

interface Step {
  title: string;
  desc: string;
}

interface DemoTourWidgetProps {
  appName: string;
  appCode: 'pos' | 'kavana' | 'accounting' | 'hrms' | 'crm' | 'spa' | 'lms';
  steps: Step[];
  portfolioUrl?: string;
}

export const DemoTourWidget: React.FC<DemoTourWidgetProps> = ({
  appName,
  appCode,
  steps,
  portfolioUrl = 'https://www.aldyalfarisy.my.id/#work'
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const waUrl = `https://api.whatsapp.com/send?phone=6281410538887&text=${encodeURIComponent(
    `Halo Aldy, saya sudah mencoba demo ${appName}. Saya mau tanya sistem untuk usaha saya. (web-demo-${appCode})`
  )}`;

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999,
          background: '#1D4ED8',
          color: '#ffffff',
          border: 'none',
          borderRadius: '100px',
          padding: '10px 18px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(29, 78, 216, 0.35)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>💡 Panduan 2 Menit</span>
      </button>
    );
  }

  const step = steps[currentStep] || steps[0];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 99999,
        width: '320px',
        maxWidth: 'calc(100vw - 40px)',
        background: '#ffffff',
        color: '#111827',
        borderRadius: '16px',
        border: '1px solid #DCE7F2',
        boxShadow: '0 16px 40px -10px rgba(15, 23, 42, 0.25)',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1D4ED8' }}>
          Mode Coba 2 Menit · Langkah {currentStep + 1}/{steps.length}
        </span>
        <button
          onClick={() => setIsOpen(false)}
          style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#6B7280', lineHeight: 1 }}
          aria-label="Tutup panduan"
        >
          ×
        </button>
      </div>

      <div>
        <h4 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: '#111827' }}>{step.title}</h4>
        <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.45, color: '#4B5563' }}>{step.desc}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
        <button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          style={{
            flex: 1,
            padding: '7px 12px',
            fontSize: '12px',
            fontWeight: 500,
            borderRadius: '8px',
            border: '1px solid #DCE7F2',
            background: currentStep === 0 ? '#F3F4F6' : '#ffffff',
            color: currentStep === 0 ? '#9CA3AF' : '#111827',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Sebelumnya
        </button>
        <button
          disabled={currentStep === steps.length - 1}
          onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
          style={{
            flex: 1,
            padding: '7px 12px',
            fontSize: '12px',
            fontWeight: 600,
            borderRadius: '8px',
            border: 'none',
            background: currentStep === steps.length - 1 ? '#F3F4F6' : '#1D4ED8',
            color: currentStep === steps.length - 1 ? '#9CA3AF' : '#ffffff',
            cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Selanjutnya
        </button>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #EEF2F6', margin: '4px 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '8px 12px',
            borderRadius: '8px',
            background: '#16A34A',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          💬 Tanya di WhatsApp
        </a>
        <a
          href={portfolioUrl}
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '6px 12px',
            fontSize: '11px',
            color: '#6B7280',
            textDecoration: 'underline'
          }}
        >
          ← Kembali ke Portofolio
        </a>
      </div>
    </div>
  );
};
```

---

## 4. Alur Integrasi ke Portofolio Utama

Setelah widget ini disematkan pada ketujuh demo langsung di repo masing-masing:
1. Label tombol pada kartu di `src/sections/Work.tsx` dapat diubah dari:
   - ID: `"Coba langsung"` → `"Coba 2 menit"`
   - EN: `"Try live"` → `"2-min demo"`
2. Perubahan dilakukan secara seragam di `src/locales/content.ts` pada objek `content.id.work.btnTryLive` dan `content.en.work.btnTryLive`.
