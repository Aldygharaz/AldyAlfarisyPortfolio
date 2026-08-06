
const stats = [
  { value: '3+', label: 'Proyek Full-Stack Live di Produksi' },
  { value: '5+', label: 'Tech Stack Dikuasai End-to-End (Next.js → Supabase → Vercel)' },
  { value: 'Karya Terpilih', label: 'Sistem POS Offline-First · Sokara HR Management · Sokara CRM' },
];

export default function Hero() {
  return (
    <section className="section pt-0" id="hero-stats">
      <div className="stats-grid reveal grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 py-8 border-y border-[var(--border-color)]">
        {stats.map((stat, i) => (
          <div className="stat-item flex flex-col gap-2" key={i}>
            {i === 2 ? (
              <>
                <h3 className="stat-label text-[13px] mb-1 text-[var(--text-muted)] uppercase tracking-widest font-semibold">
                  {stat.value}
                </h3>
                <p className="stat-value text-[16px] text-[var(--text-heading)] leading-snug font-semibold">
                  {stat.label}
                </p>
              </>
            ) : (
              <>
                <h3 className="stat-value text-[clamp(2rem,4vw,3rem)] text-[var(--accent-blue)] leading-none">{stat.value}</h3>
                <p className="stat-label text-[15px] text-[var(--text-heading)] font-semibold">{stat.label}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
