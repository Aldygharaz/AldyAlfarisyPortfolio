import { useState } from 'react';

const faqs = [
  {
    q: 'Apakah Anda beroperasi sebagai individual developer atau agency?',
    a: 'Saya beroperasi sebagai individual engineer (solopreneur) yang mengelola seluruh siklus, mulai dari strategi arsitektur hingga eksekusi kode. Dengan kapabilitas AI Agent, saya mampu melakukan orkestrasi development berskala enterprise secara efisien tanpa birokrasi agency besar.',
  },
  {
    q: 'Apa keunggulan bekerja dengan individual engineer dibanding tim besar?',
    a: 'Komunikasi langsung tanpa perantara project manager memastikan tidak ada gap antara kebutuhan bisnis dan eksekusi teknis. Semua keputusan desain sistem, keamanan, dan deployment ditangani dalam satu pintu untuk meminimalisir overhead dan miskomunikasi.',
  },
  {
    q: 'Jika menggunakan AI, apakah hasil akhirnya berupa template generik?',
    a: 'Sama sekali tidak. AI berfungsi sebagai akselerator penulisan kode, bukan pengambil keputusan arsitektur. Desain sistem (System Design) dan penyesuaian logika bisnis spesifik tetap dirancang secara kustom oleh saya untuk menjawab target operasional Anda secara unik.',
  },
  {
    q: 'Apakah sistem yang dibangun handal untuk jangka panjang? Bagaimana maintenance-nya?',
    a: 'Setiap sistem dibangun dengan arsitektur scalable dan praktik Defensive UX. Setelah rilis, saya menyediakan dokumentasi komprehensif dan layanan dukungan pasca-rilis (SLA) opsional untuk memastikan stabilitas saat skala bisnis Anda membesar.',
  },
  {
    q: 'Berapa lama estimasi pengerjaan untuk satu proyek utuh?',
    a: 'Estimasi berbanding lurus dengan kompleksitas sistem. Prototipe atau platform sederhana membutuhkan waktu 1-2 minggu, sementara sistem komprehensif (POS, HR, SaaS) dikerjakan dalam siklus iteratif yang disepakati bersama saat fase Discovery.',
  },
  {
    q: 'Apakah klien perlu memiliki pemahaman teknis sebelum bekerja sama?',
    a: 'Tidak perlu. Tugas utama saya adalah menerjemahkan obyektif bisnis Anda menjadi spesifikasi teknis yang tepat. Anda cukup fokus pada metrik keberhasilan bisnis, dan saya yang akan mengeksekusi teknologi di belakang layar.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="section-head center reveal">
        <span className="eyebrow">Pertanyaan umum</span>
        <h2>FAQ</h2>
        <p className="section-sub">Beberapa hal yang sering ditanyakan sebelum memulai proyek.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div className="reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className={`faq-item ${openIdx === i ? 'open' : ''}`}>
              <button
                className="faq-q"
                aria-expanded={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon" />
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
