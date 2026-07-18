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
      <style>{`
        .card-work.span-full {
          grid-column: 1 / -1;
        }
        @media (min-width: 768px) {
          .card-work.span-full .card-img {
            height: 320px; /* Make the featured image taller */
          }
        }
      `}</style>
      <div className="section-head reveal">
        <span className="eyebrow">Karya Terpilih</span>
        <h2>Studi kasus lengkap masih saya rapikan. Ini beberapa sistem yang udah dibangun lewat Sokara.</h2>
      </div>
      <div className="grid-work">
        {projects.map((p, i) => {
          // If it's the last item and the total count is odd, make it span full width
          const isOddLast = i === projects.length - 1 && projects.length % 2 !== 0;
          return (
            <article 
              className={`card-work reveal ${isOddLast ? 'span-full' : ''}`} 
              key={i} 
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="card-img">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="tag">{p.tag}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
