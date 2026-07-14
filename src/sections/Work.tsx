const projects = [
  {
    title: 'Sokara POS',
    desc: 'Sistem kasir offline-first untuk apotek, dibangun pakai Electron dengan laporan PDF dan Excel otomatis serta print dialog native. Fokusnya stabilitas operasional harian.',
    tag: 'Desktop App, Point of Sale',
    image: '/images/project-dashboard.jpg', // Temporarily using existing images
  },
  {
    title: 'POS EVO',
    desc: 'Arsitektur POS dengan prinsip data immutability (transaksi tidak bisa dihapus permanen) demi menjaga keamanan audit, dilengkapi sinkronisasi real-time ke Google Sheets.',
    tag: 'Web App, Enterprise Architecture',
    image: '/images/project-fintech.jpg',
  },
  {
    title: 'Sokara Student Portal',
    desc: 'Portal belajar serverless berbasis Next.js dengan Google Apps Script sebagai database no-code, dilengkapi solusi custom buat nampilin konten Google Drive tanpa kena blokir.',
    tag: 'Web App, LMS',
    image: '/images/project-photographer.jpg',
  },
];

export default function Work() {
  return (
    <section className="section" id="work" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-head reveal">
        <span className="eyebrow">Karya Terpilih</span>
        <h2>Studi kasus lengkap masih saya rapikan. Ini beberapa sistem yang udah dibangun lewat Sokara.</h2>
      </div>
      <div className="grid-work">
        {projects.map((p, i) => (
          <article className="card-work reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="card-img">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="tag">{p.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
