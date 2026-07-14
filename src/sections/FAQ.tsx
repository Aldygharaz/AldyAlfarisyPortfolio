import { useState } from 'react';

const faqs = [
  {
    q: 'Aldy ini developer, atau agency, atau gimana sih?',
    a: 'Saya kerja sebagai satu operator yang pegang penuh dari strategi sampai eksekusi teknis, tanpa birokrasi tim besar yang rumit. Dibantu AI Agent, saya bisa gerak lebih cepat tanpa ngorbanin kualitas hasil akhirnya.',
  },
  {
    q: 'Kenapa saya percaya satu orang, bukan tim/agency?',
    a: 'Justru karena satu orang, komunikasi lebih cepat, nggak ada lapisan project manager ke developer. Dan saya pegang dua sisi sekaligus: analisis bisnis dan eksekusi teknis, jadi nggak ada gap antara "yang diminta" dan "yang dibangun".',
  },
  {
    q: 'Kalau AI yang bantu bangun, apa hasilnya generik/template?',
    a: 'AI adalah alat eksekusi, tapi keputusan desainnya tetap dari saya, disesuaikan konteks bisnis Anda, termasuk kebiasaan yang cuma dipahami orang yang pernah langsung pegang bisnis di sini. Misalnya, integrasi notifikasi langsung ke WhatsApp alih-alih email, karena memang itu jalur komunikasi utama yang dipakai kebanyakan orang kita.',
  },
  {
    q: 'Sistem yang dibangun pakai AI, apa reliable jangka panjang? Nanti kalau ada bug siapa yang benerin?',
    a: 'Saya nggak cuma bangun lalu tinggal. Saya rancang sistemnya supaya bisa terus diperbarui tanpa mengganggu operasional harian Anda, dan saya rutin pastikan sistem tetap sesuai standar terbaru, bukan dibiarkan usang.',
  },
  {
    q: 'Berapa lama biasanya pengerjaan satu proyek?',
    a: 'Tergantung skala. Landing page atau web app sederhana bisa selesai dalam hitungan hari sampai satu-dua minggu. Buat sistem yang lebih kompleks kayak POS atau LMS, timeline-nya kita bahas dulu setelah scope-nya jelas.',
  },
  {
    q: 'Apakah saya harus paham teknis buat kerja sama sama Aldy?',
    a: 'Enggak sama sekali. Justru tugas saya nerjemahin kebutuhan kamu ke bahasa teknis. Kamu cukup fokus ke tujuan bisnisnya.',
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
