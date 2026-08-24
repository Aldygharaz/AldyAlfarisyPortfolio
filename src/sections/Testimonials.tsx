import { useRef, useState } from 'react';
import { ShieldCheck, Zap, Database, ArrowUpRight } from 'lucide-react';
import './Testimonials.css';

const caseStudies = [
  {
    id: 'sokara-hrms',
    title: 'Sokara HRMS',
    category: 'State Management & Offline-First',
    headline: 'AI Shift Auto-Balance & Proteksi Fatigue Karyawan',
    description: 'Sistem HRMS cerdas dengan arsitektur Offline-First. Menghitung matriks jadwal dan menawarkan resolusi 1-klik untuk mencegah kelelahan staf shift malam berturut-turut.',
    features: ['1-Klik Resolve', 'Anti-Fatigue Otomatis', 'Offline-First Roster'],
    icon: <Zap size={20} className="text-amber-400" />,
    badgeColor: 'rgba(251, 191, 36, 0.12)',
    badgeBorder: 'rgba(251, 191, 36, 0.3)',
    badgeText: '#f59e0b',
    link: 'https://hrms.aldyalfarisy.my.id/',
  },
  {
    id: 'sokara-pos-evo',
    title: 'Sokara POS EVO',
    category: 'Local-First Enterprise PWA',
    headline: 'Response Time < 50ms Tanpa Ketergantungan Internet',
    description: 'Aplikasi kasir ritel 100% lokal berbasis IndexedDB dan Zustand. Mencegah antrean panjang dengan hardware barcode listener dan fitur Poka-Yoke auto-fix stok.',
    features: ['< 50ms Scan', '100% Offline', 'Zero Downtime'],
    icon: <ShieldCheck size={20} className="text-blue-400" />,
    badgeColor: 'rgba(59, 130, 246, 0.12)',
    badgeBorder: 'rgba(59, 130, 246, 0.3)',
    badgeText: '#3b82f6',
    link: 'https://pos.aldyalfarisy.my.id/',
  },
  {
    id: 'sokara-accounting',
    title: 'Sokara Accounting',
    category: 'Pure Double-Entry & Zero Backend',
    headline: 'Mesin Pembukuan PSAK di Browser, Server Cost Rp 0',
    description: 'Aplikasi akuntansi retail dengan mesin double-entry murni di browser menggunakan Decimal.js dan verifikasi SHA-256 anti-tamper untuk integritas buku besar.',
    features: ['0 Selisih Debit', 'SHA-256 Anti-Tamper', 'Rp 0 Server Cost'],
    icon: <Database size={20} className="text-emerald-400" />,
    badgeColor: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    badgeText: '#10b981',
    link: 'https://sokaraaccountingdemo.netlify.app/',
  },
];

function CaseStudyCard({ cs, i }: { cs: typeof caseStudies[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setStyle({
      '--mouse-x': `${x}px`,
      '--mouse-y': `${y}px`,
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'none',
      zIndex: 10,
    } as React.CSSProperties);
  };
  
  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      zIndex: 1,
    });
  };

  return (
    <div 
      className="case-study-card reveal"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transitionDelay: style.transform ? '0s' : `${i * 0.12}s` }}
    >
      <div className="testi-spotlight" />
      <div className="case-study-content">
        <div className="case-study-top">
          <div className="case-study-badge" style={{ backgroundColor: cs.badgeColor, borderColor: cs.badgeBorder, color: cs.badgeText }}>
            {cs.icon}
            <span>{cs.category}</span>
          </div>
          <a 
            href={cs.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="case-study-link-icon"
            aria-label={`Buka live demo ${cs.title}`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="case-study-body">
          <h3 className="case-study-title">{cs.title}</h3>
          <p className="case-study-headline">{cs.headline}</p>
          <p className="case-study-desc">{cs.description}</p>
        </div>

        <div className="case-study-features">
          {cs.features.map((feat, idx) => (
            <span key={idx} className="case-study-pill">
              <span className="case-study-pill-dot" />
              {feat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-head center reveal">
        <span className="eyebrow">Dampak Operasional</span>
        <h2>Studi Kasus <em>Solusi Nyata</em></h2>
        <p className="section-sub">Implementasi arsitektur sistem di produksi yang memangkas biaya server, meniadakan downtime, dan mengeliminasi kesalahan manusia.</p>
      </div>
      <div className="case-study-grid">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} i={i} />
        ))}
      </div>
    </section>
  );
}
