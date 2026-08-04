import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  architecture: string[];
  businessImpact: string;
}

const projects: Project[] = [
  {
    id: 'pos-evo',
    number: '01',
    category: 'Enterprise Retail & POS',
    title: 'Sokara POS EVO',
    tagline: 'Sistem Kasir Offline-First dengan Proteksi Manipulasi 100%',
    problem: 'Banyak bisnis retail merugi akibat selisih kasir yang tak terlacak, manipulasi stok oleh staf, dan operasional toko yang lumpuh total saat koneksi internet terputus.',
    solution: 'Membangun arsitektur POS offline-first dengan mekanisme audit immutability (data tidak bisa dihapus). Semua transaksi tersimpan aman secara lokal saat offline dan otomatis tersinkronisasi tanpa celah saat online.',
    highlights: [
      'Global Barcode (<50ms)',
      'Transaction Immutability',
      'Auto-Rounding (Rp100)',
      'Offline-First Sync'
    ],
    metrics: [
      { label: 'Kecepatan Scan', value: '< 50ms' },
      { label: 'Audit Security', value: '100% Aman' },
      { label: 'Uptime Sync', value: '99.9%' }
    ],
    tags: ['Electron', 'React', 'Zustand', 'IndexedDB', 'Sheets API'],
    image: '/images/pos-evo.jpg',
    architecture: [
      'Zustand State Engine dengan LocalStorage Persistence & Version Migration Guard',
      'IndexedDB Offline Mutation Queue untuk antrean transaksi saat internet mati',
      'Native Print Dialog & Automatic PDF/Excel Inventory Export Engine'
    ],
    businessImpact: 'Menghilangkan selisih kasir hingga 0%, menghentikan kecurangan stok internal, dan menjamin transaksi apotek berjalan 24/7 tanpa henti walau internet bermasalah.'
  },
  {
    id: 'hr-app',
    number: '02',
    category: 'HR Management & Ops',
    title: 'Sokara HR Operations',
    tagline: 'Platform HR Multi-Role dengan Engine Keadilan Shift',
    problem: 'Tingkat kelelahan karyawan tinggi akibat bentrok jadwal shift (waktu istirahat < 8 jam), rumitnya hitungan pajak TER PMK 168, dan maraknya kecurangan presensi lokasi palsu.',
    solution: 'Mengembangkan sistem manajemen SDM dengan fitur Poka-Yoke (pencegah kesalahan 1-klik) untuk memastikan shift berkeadilan, kalkulator pajak otomatis, dan inspektur geofence anti-lokasi palsu.',
    highlights: [
      'Poka-Yoke (Auto-Fix)',
      'Geofence Inspector',
      'Pajak TER PMK 168',
      'Shift Fairness Index'
    ],
    metrics: [
      { label: 'Akurasi Pajak', value: '100% Valid' },
      { label: 'Human Error Guard', value: '98% Defended' },
      { label: 'Export Roster', value: 'A4 Ready' }
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'PWA Queue', 'Playwright'],
    image: '/images/hr-app.jpg',
    architecture: [
      'Multi-Role RBAC State Engine (Mode Manager & Karyawan)',
      'Algoritma Fairness Index Score untuk distribusi jam kerja dan shift malam yang adil',
      'Playwright E2E Test Hooks untuk memastikan kestabilan fitur vital'
    ],
    businessImpact: 'Menjamin kepatuhan regulasi waktu istirahat secara otomatis, menghapus pusingnya perhitungan pajak TER terbaru, dan mengunci kedisiplinan presensi.'
  },
  {
    id: 'student-portal',
    number: '03',
    category: 'Serverless LMS & Streaming',
    title: 'Sokara Student Portal',
    tagline: 'LMS Serverless dengan Zero-Latency Drive Streaming',
    problem: 'Lembaga kursus sering terbebani tagihan server bulanan puluhan juta rupiah dan menghadapi masalah pembajakan link video premium mereka secara masif.',
    solution: 'Merancang platform LMS 100% serverless yang memotong server cost menjadi Rp0 menggunakan Google Apps Script, dipadukan dengan custom proxy stream tersandi untuk melindungi video.',
    highlights: [
      'Custom Video Proxy',
      'Idempotent GAS Engine',
      'Token Protected',
      'Mobile-First UI'
    ],
    metrics: [
      { label: 'Biaya Server', value: 'Rp0 / Bulan' },
      { label: 'Play Latency', value: '< 200ms' },
      { label: 'Proteksi Media', value: '100% Secured' }
    ],
    tags: ['Next.js', 'Apps Script', 'Serverless', 'React', 'CSS Modules'],
    image: '/images/project-photographer.jpg',
    architecture: [
      'Idempotent Code.gs API backend setup untuk mencegah duplikasi sheet',
      'Streaming proxy route untuk mentransformasi Google Drive File ID menjadi chunked video terlindungi',
      'Local Storage progress persistence untuk riwayat quiz interaktif'
    ],
    businessImpact: 'Memangkas tagihan server VOD/LMS hingga 90% secara drastis sambil memberikan kecepatan putar sekelas platform enterprise tanpa buffering.'
  },
  {
    id: 'ai-orchestrator',
    number: '04',
    category: 'AI Workflow & Automation',
    title: 'AI Agent Orchestrator',
    tagline: 'Automasi Bisnis dengan Orkestrasi Multi-Agent AI',
    problem: 'Proses pengembangan produk sering molor berbulan-bulan karena tim kehabisan waktu melakukan tugas teknis repetitif, debugging manual, dan riset dokumen panjang.',
    solution: 'Membangun infrastruktur orkestrasi AI (Multi-Agent System) yang mengotomatiskan penulisan koding dasar, review kode (QA), dan sinkronisasi standar desain agar tim manusia fokus pada logika bisnis inti.',
    highlights: [
      'Task Delegation',
      'Quality Guard',
      'Custom MCP Tools',
      'Real-Time Telemetry'
    ],
    metrics: [
      { label: 'Dev Velocity', value: '10x Speedup' },
      { label: 'Standar Kode', value: 'Zero-Bug' },
      { label: 'Automasi Tugas', value: '85% Covered' }
    ],
    tags: ['Python', 'TypeScript', 'AI Agents', 'MCP', 'Automated QA'],
    image: '/images/project-fintech.jpg',
    architecture: [
      'Multi-agent role specialization (Researcher, Builder, QA Gatekeeper)',
      'Automated fallback logic & performance budgeting (60fps mobile guard)',
      'Contextual persistent memory graph & prompt orchestration'
    ],
    businessImpact: 'Mempercepat siklus rilis fitur dari hitungan bulan menjadi beberapa hari saja, menjaga kualitas kode tetap pada standar enterprise tertinggi, dan menekan biaya overhead R&D.'
  }
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section className="section" id="work" style={{ position: 'relative' }}>
      <div className="section-head reveal">
        <span className="eyebrow">Karya Terpilih & Studi Kasus</span>
        <h2>Infrastruktur Nyata Penyelamat Bisnis</h2>
        <p className="section-sub">
          Eksplorasi portofolio di bawah ini untuk melihat masalah fundamental bisnis yang saya selesaikan, detail arsitektur, dan dampak efisiensi operasionalnya.
        </p>
      </div>

      <div className="work-stack-wrap">
        {projects.map((project, index) => (
          <article 
            key={project.id} 
            className="work-card-sticky reveal"
            style={{ 
              '--card-index': index,
              transitionDelay: `${index * 0.05}s` 
            } as React.CSSProperties}
          >
            <div className="work-card-inner">
              <div className="work-card-info">
                <div className="work-card-header">
                  <span className="work-card-num">{project.number}</span>
                  <span className="work-card-cat">{project.category}</span>
                </div>

                <h3 className="work-card-title">{project.title}</h3>
                <div className="work-card-tagline">{project.tagline}</div>
                <div className="work-card-desc">
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ display: 'inline-block', color: 'var(--accent-strong)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>⚠️ Tantangan Bisnis</span>
                    <p style={{ margin: 0 }}>{project.problem}</p>
                  </div>
                  <div>
                    <span style={{ display: 'inline-block', color: 'var(--success-text)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>💡 Solusi Infrastruktur</span>
                    <p style={{ margin: 0 }}>{project.solution}</p>
                  </div>
                </div>

                <div className="work-highlights-grid">
                  {project.highlights.map((h, i) => (
                    <span key={i} className="work-highlight-chip">{h}</span>
                  ))}
                </div>

                <div className="work-metrics-row">
                  {project.metrics.map((m, i) => {
                    const isPositive = m.value.includes('%') || m.value.includes('<') || m.value.includes('Rp0') || m.value.includes('10x') || m.value.includes('Zero');
                    return (
                      <div key={i} className="work-metric-item">
                        <span className={`work-metric-val ${isPositive ? 'positive' : ''}`}>{m.value}</span>
                        <span className="work-metric-lbl">{m.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="work-actions">
                  <button 
                    className="btn btn-primary magnetic"
                    onClick={() => setSelectedProject(project)}
                  >
                    Detail Studi Kasus
                  </button>
                </div>
              </div>

              <div 
                className="work-img-frame" 
                onClick={() => setSelectedProject(project)}
                title="Klik untuk membuka studi kasus"
              >
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="work-img-overlay">
                  <span className="work-img-badge">Pratinjau Studi Kasus</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && createPortal(
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div 
            className="project-modal-content" 
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            <button 
              className="project-modal-close" 
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup modal"
            >
              ✕
            </button>

            <div style={{ marginBottom: '20px' }}>
              <span className="work-card-num">{selectedProject.number}</span>
              <span className="work-card-cat">{selectedProject.category}</span>
            </div>

            <h2 style={{ fontSize: '26px', marginBottom: '12px', color: 'var(--text)' }}>
              {selectedProject.title}
            </h2>

            <div style={{ color: 'var(--accent-strong)', fontWeight: 600, marginBottom: '20px', fontSize: '15px' }}>
              {selectedProject.tagline}
            </div>

            <div style={{ marginBottom: '24px', borderRadius: '16px', overflow: 'hidden', background: 'var(--surface-2)' }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '400px', objectFit: 'cover' }} 
              />
            </div>

            <h4 style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '8px' }}>Tantangan Bisnis</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.65, marginBottom: '20px' }}>
              {selectedProject.problem}
            </p>

            <h4 style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '8px' }}>Solusi Infrastruktur</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.65, marginBottom: '20px' }}>
              {selectedProject.solution}
            </p>

            <h4 style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '8px' }}>Ringkasan Sistem & Dampak Bisnis</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.65, marginBottom: '20px' }}>
              {selectedProject.businessImpact}
            </p>

            <h4 style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '10px' }}>Arsitektur & Implementasi Kunci</h4>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedProject.architecture.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
              ))}
            </ul>

            <h4 style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '10px' }}>Tech Stack Utama</h4>
            <div className="work-highlights-grid" style={{ marginBottom: '28px' }}>
              {selectedProject.tags.map((t, idx) => (
                <span key={idx} className="tag">{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button className="btn btn-ghost" onClick={() => setSelectedProject(null)}>
                Tutup
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  alert(`Sistem "${selectedProject.title}" siap didemonstrasikan. Silakan hubungi via WhatsApp/Kontak untuk demo langsung.`);
                }}
              >
                Minta Demo Sistem
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
