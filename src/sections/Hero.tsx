
const stats = [
  { value: '5', label: 'Sistem Enterprise Live di Produksi' },
  { value: 'Rp 0', label: 'Biaya Server Bulanan untuk Klien (Zero-Backend Architecture)' },
  { value: '< 50ms', label: 'Response Time Transaksi Kasir Tanpa Internet' },
];

export default function Hero() {
  return (
    <section className="section" id="hero-stats" style={{ paddingTop: '0px' }}>
      <style>{`
        .stats-grid-styled {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .stat-item-styled {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .stat-value {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--accent-blue);
          line-height: 1;
        }
        .stat-label {
          font-size: 15px;
          color: var(--text-heading);
          font-weight: 600;
        }
      `}</style>
      <div className="stats-grid reveal stats-grid-styled">
        {stats.map((stat, i) => (
          <div className="stat-item stat-item-styled" key={i}>
            <>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </>
          </div>
        ))}
      </div>
    </section>
  );
}
