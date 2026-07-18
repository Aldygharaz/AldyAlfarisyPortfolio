export default function Marquee() {
  const items = [
    'Sistem Kasir Real-Time', 
    'Otomasi dengan AI Agent', 
    'Website Cepat & Modern', 
    'Aplikasi Web Custom', 
    'Integrasi Google Workspace', 
    'Dashboard & Laporan Otomatis', 
    'Hosting & Deployment Aman', 
    'Sistem Desktop (Windows)'
  ];
  const allItems = [...items, ...items];

  return (
    <div style={{ textAlign: 'center', margin: '48px 0 0px', overflow: 'hidden' }}>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
        Solusi & Layanan Digital yang Biasa Saya Bangun
      </p>
      <div className="marquee-wrap" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="marquee-track">
          {allItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
