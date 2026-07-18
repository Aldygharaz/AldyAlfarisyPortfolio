const quadrants = [
  {
    cls: 'blue',
    icon: '✨',
    label: 'Full-Stack',
    title: '<em>Web & App</em> Development',
    desc: 'Membangun aplikasi web full-stack dari nol menggunakan React, Next.js, dan Electron. Cocok untuk landing page, sistem internal, maupun desktop app.',
  },
  {
    cls: 'pink',
    icon: '⚡',
    label: 'Automation',
    title: 'AI-Powered <em>Workflow</em>',
    desc: 'Integrasiin AI Agent ke proses development dan operasional bisnis kamu, biar kerjaan yang berulang gak makan waktu dan hasilnya tetap konsisten.',
  },
  {
    cls: 'amber',
    icon: '🏗️',
    label: 'Architecture',
    title: 'Sistem & Arsitektur <em>Custom</em>',
    desc: 'Merancang sistem berskala besar sejak awal. Mulai dari struktur database, sinkronisasi data, hingga keamanan transaksi, memastikan semuanya solid agar tidak perlu dibangun ulang saat bisnis makin berkembang.',
  },
  {
    cls: 'green',
    icon: '🚀',
    label: 'Transformation',
    title: 'Digitalisasi <em>UMKM ke SaaS</em>',
    desc: 'Bantu bisnis kecil naik level dari proses manual jadi sistem digital yang rapi, sampai ke skala produk SaaS kalau memang dibutuhkan.',
  },
];

export default function Quadrant() {
  return (
    <section className="section" id="quadrant" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="section-head reveal" style={{ alignItems: 'center', textAlign: 'center' }}>
        <span className="eyebrow">Solusi Terpadu</span>
        <h2>Apa yang Bisa Saya Kerjakan untuk Kamu</h2>
      </div>
      <div className="quad-frame reveal">
        <span className="quad-axis-label quad-axis-top">Fokus Pengguna</span>
        <span className="quad-axis-label quad-axis-bottom">Performa Sistem</span>
        <span className="quad-axis-label quad-axis-left">Interaksi Manusia</span>
        <span className="quad-axis-label quad-axis-right">Otomasi Mesin</span>
        <div className="quad-grid">
          {quadrants.map((q, i) => (
            <div className={`quad-cell ${q.cls}`} key={i}>
              <div className="quad-icon">{q.icon}</div>
              <span className="quad-label">{q.label}</span>
              <h3 dangerouslySetInnerHTML={{ __html: q.title }} />
              <p>{q.desc}</p>
            </div>
          ))}
        </div>
        <div className="quad-center-dot" />
      </div>
    </section>
  );
}
