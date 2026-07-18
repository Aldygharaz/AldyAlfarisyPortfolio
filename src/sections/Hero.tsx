
const stats = [
  { value: '3+', label: 'Proyek Full-Stack Dibangun' },
  { value: '5+', label: 'Tech Stack Dikuasai End-to-End' },
  { value: '2', label: 'Jalur Bisnis Dijalankan (Lokal & Internasional)' },
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
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
