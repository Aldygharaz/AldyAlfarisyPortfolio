
export default function Hero() {
  return (
    <section className="section" id="hero-stats" style={{ paddingTop: '0px' }}>
      <div className="stats-grid reveal" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        padding: '32px 0', 
        borderTop: '1px solid var(--border-color)', 
        borderBottom: '1px solid var(--border-color)' 
      }}>
        
        <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent-blue)', lineHeight: 1 }}>3+</h3>
          <p style={{ fontSize: '15px', color: 'var(--text-heading)', fontWeight: 600 }}>Proyek Full-Stack Dibangun</p>
        </div>

        <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent-blue)', lineHeight: 1 }}>5+</h3>
          <p style={{ fontSize: '15px', color: 'var(--text-heading)', fontWeight: 600 }}>Tech Stack Dikuasai End-to-End</p>
        </div>

        <div className="stat-item" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent-blue)', lineHeight: 1 }}>2</h3>
          <p style={{ fontSize: '15px', color: 'var(--text-heading)', fontWeight: 600 }}>Jalur Bisnis Dijalankan (Lokal & Internasional)</p>
        </div>

      </div>
    </section>
  );
}
