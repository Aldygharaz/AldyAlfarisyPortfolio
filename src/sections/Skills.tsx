import { useEffect, useRef, useState } from 'react';
import { Bot, Globe, Monitor, Database, Palette, PenTool, ShieldAlert, Link, Rocket, WifiOff } from 'lucide-react';

const skills = [
  { name: 'Orkestrasi AI', icon: <Bot size={22} />, color: '#10A37F', description: 'Antigravity, alur multi-agent', caption: 'Multi-agent untuk eksekusi kode paralel' },
  { name: 'App Web Modern', icon: <Globe size={22} />, color: '#3B82F6', description: 'React, Next.js, Tailwind', caption: 'Antarmuka cepat, responsif & scalable' },
  { name: 'App Desktop', icon: <Monitor size={22} />, color: '#47848F', description: 'Electron, native IPC', caption: 'Aplikasi kasir & desktop native IPC' },
  { name: 'Database & API', icon: <Database size={22} />, color: '#3ECF8E', description: 'Supabase, Apps Script', caption: 'Query relasional & integrasi data' },
  { name: 'Desain UI/UX', icon: <Palette size={22} />, color: '#9333EA', description: 'Antarmuka intuitif & modern', caption: 'Layout intuitif standar Apple HIG' },
  { name: 'UX Copywriting', icon: <PenTool size={22} />, color: '#F43F5E', description: 'Microcopy teknis & persuasif', caption: 'Panduan teks jelas tanpa ambiguitas' },
  { name: 'Defensive UX', icon: <ShieldAlert size={22} />, color: '#E44D26', description: 'Poka-Yoke, error prevention', caption: 'Cegah salah input sebelum tersimpan' },
  { name: 'Integrasi Sistem', icon: <Link size={22} />, color: '#00C389', description: 'Payment gateway, Webhooks', caption: 'Sinkronisasi payment & webhook' },
  { name: 'Infrastruktur', icon: <Rocket size={22} />, color: '#F58025', description: 'Vercel, DNS, CI/CD', caption: 'Deployment instan zero-downtime' },
  { name: 'Offline-First', icon: <WifiOff size={22} />, color: '#EAB308', description: 'PWA, IndexedDB sync', caption: 'Transaksi tetap jalan tanpa koneksi' },
];

const HEX_MASK_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M22 12C22 12.7 21.8 13.4 21.5 14L18 20C17.3 21.2 16 22 14.6 22H7.4C6 22 4.7 21.2 4 20L0.5 14C-0.2 12.8 -0.2 11.2 0.5 10L4 4C4.7 2.8 6 2 7.4 2H14.6C16 2 17.3 2.8 18 4L21.5 10C21.8 10.6 22 11.3 22 12Z'/%3E%3C/svg%3E")`;

function shade(hex: string, amount: number) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.floor(((n >> 16) & 255) * (1 - amount)));
  const g = Math.max(0, Math.floor(((n >> 8) & 255) * (1 - amount)));
  const b = Math.max(0, Math.floor((n & 255) * (1 - amount)));
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Skills() {
  const hiveRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const hive = hiveRef.current;
    if (!hive) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(hive);

    return () => {
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const docClick = () => {
      setActiveIndex(null);
    };
    document.addEventListener('click', docClick);
    return () => document.removeEventListener('click', docClick);
  }, []);

  const isTouch = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 1024 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
  };

  const handleHexClick = (e: React.MouseEvent, idx: number) => {
    if (!isTouch()) return;
    e.stopPropagation();
    setActiveIndex(prev => prev === idx ? null : idx);
  };

  const rows = [
    skills.slice(0, 2),
    skills.slice(2, 5),
    skills.slice(5, 8),
    skills.slice(8, 10)
  ];


  return (
    <section className="section" id="skills">
      <div className="section-head center reveal">
        <span className="eyebrow">Kapabilitas Teknis</span>
        <h2>Fokus pada <em>Eksekusi</em> dan Hasil Terukur</h2>
        <p className="section-sub">Dirancang agar mudah dipahami oleh pengambil keputusan, namun tetap memiliki kedalaman bagi audiens teknis.</p>
      </div>
      <div
        className={`skills-hive ${isHovering ? 'has-hover' : ''} ${activeIndex !== null ? 'has-active' : ''} ${isInView ? 'in-view' : ''}`}
        ref={hiveRef}
        id="skillsHive"
      >
        {rows.map((row, ri) => (
          <div className="hive-row" key={ri}>
            {row.map((skill) => {
              const idx = skills.indexOf(skill);
              return (
                <button
                  type="button"
                  className={`hex ${activeIndex === idx ? 'is-active' : ''}`}
                  key={skill.name}
                  style={{ '--enter-delay': `${idx * 0.055}s` } as React.CSSProperties}
                  aria-label={`${skill.name}: ${skill.description}`}
                  onMouseEnter={() => !isTouch() && setIsHovering(true)}
                  onMouseLeave={() => !isTouch() && setIsHovering(false)}
                  onClick={(e) => handleHexClick(e, idx)}
                >
                  <span className="hex-hitbox" />
                  <span
                    className="hex-glow"
                    style={{ background: skill.color }}
                  />
                  <span
                    className="hex-clip"
                    style={{ background: `linear-gradient(155deg, ${skill.color}, ${shade(skill.color, 0.4)})` }}
                  />
                  <span className="hex-face">
                    <span className="hex-icon" aria-hidden="true">{skill.icon}</span>
                    <span className="hex-name">{skill.name}</span>
                    <span className="hex-subline" style={{ fontSize: '8px', lineHeight: '1.2', color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: '2px', maxWidth: '100px', fontWeight: 500 }}>
                      {skill.caption}
                    </span>
                  </span>
                  <span
                    className="hex-desc"
                    style={{
                      background: `linear-gradient(155deg, ${shade(skill.color, 0.05)}, ${shade(skill.color, 0.5)})`,
                      WebkitMaskImage: HEX_MASK_URL,
                      WebkitMaskSize: '100% 100%',
                      maskImage: HEX_MASK_URL,
                      maskSize: '100% 100%',
                    }}
                  >
                    {skill.description}
                  </span>
                  <span className="hex-ring" />
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <p className="skills-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74" />
          <path d="M13.5 7.5v-1a2.5 2.5 0 0 1 5 0v5" />
          <path d="M18.5 11.5a2.5 2.5 0 0 1 5 0v3a8 8 0 0 1-8 8h-2.5a7 7 0 0 1-5.6-2.8L3.4 15a2 2 0 0 1 3-2.6l1.6 1.5" />
        </svg>
        Arahkan kursor atau sentuh tiap sel
      </p>
    </section>
  );
}
