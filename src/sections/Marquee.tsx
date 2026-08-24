export default function Marquee() {
  const tier1 = [
    'Sistem POS Anti-Ribet', 
    'Dashboard Bisnis Real-Time', 
    'Platform Belajar Online', 
    'Otomasi Kerja Berulang', 
    'Website & Aplikasi Custom'
  ];
  
  const tier2 = [
    'Multi-Agent AI Orchestration',
    'Serverless Architecture',
    'Offline-First Sync',
    'API & Microservices Integration',
    'Zero-Downtime Deployment'
  ];

  const allItems = [...tier1, ...tier1, ...tier1]; // Triple for smooth continuous scroll if items are short

  return (
    <div style={{ textAlign: 'center', margin: '48px 0 0px', overflow: 'hidden' }}>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
        Infrastruktur & Solusi Digital Untuk Skalabilitas Bisnis
      </p>
      
      {/* Tier 1 - Main Marquee */}
      <div className="marquee-wrap" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="marquee-track">
          {allItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Tier 2 - Technical Tags (Static, Subdued) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '12px', 
        padding: '16px 24px', 
        borderBottom: '1px solid var(--border-color)',
        background: 'rgba(255, 255, 255, 0.6)'
      }}>
        {tier2.map((item, i) => (
          <span key={i} style={{ 
            fontSize: '12px', 
            color: 'var(--text-muted)', 
            padding: '4px 12px', 
            border: '1px solid rgba(220, 231, 242, 0.8)',
            borderRadius: '100px',
            background: 'var(--surface-2)'
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
