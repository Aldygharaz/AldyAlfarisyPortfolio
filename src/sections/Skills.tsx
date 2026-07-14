import { useEffect, useRef } from 'react';

const skills = [
  { name: 'Orkestrasi AI', icon: '🤖', color: '#10A37F', description: 'Antigravity, alur multi-agent' },
  { name: 'Prompt Eng', icon: '💬', color: '#61DAFB', description: 'Brief presisi untuk AI' },
  { name: 'App Web Modern', icon: '🌐', color: '#3B82F6', description: 'React, Next.js, Tailwind' },
  { name: 'App Desktop', icon: '🖥️', color: '#47848F', description: 'Electron, native IPC' },
  { name: 'Database & API', icon: '🗄️', color: '#3ECF8E', description: 'Supabase, Apps Script' },
  { name: 'Desain UI/UX', icon: '🎨', color: '#9333EA', description: 'Antarmuka intuitif & modern' },
  { name: 'Anti-error', icon: '🛡️', color: '#E44D26', description: 'Validasi & error handling' },
  { name: 'Integrasi Bisnis', icon: '🔗', color: '#00C389', description: 'lynk.id checkout' },
  { name: 'Infrastruktur', icon: '🚀', color: '#F58025', description: 'Vercel, DNS, webhooks' },
];

function shade(hex: string, amount: number) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.floor(((n >> 16) & 255) * (1 - amount)));
  const g = Math.max(0, Math.floor(((n >> 8) & 255) * (1 - amount)));
  const b = Math.max(0, Math.floor((n & 255) * (1 - amount)));
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Skills() {
  const hiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hive = hiveRef.current;
    if (!hive) return;

    const hexes = Array.from(hive.querySelectorAll<HTMLElement>('.hex'));
    const isTouch = () => !window.matchMedia('(hover: hover)').matches;

    // Intersection observer for entrance
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(hive);

    // Hover/active handlers
    const enterHandlers: (() => void)[] = [];
    const leaveHandlers: (() => void)[] = [];
    const clickHandlers: ((e: Event) => void)[] = [];

    hexes.forEach((hex) => {
      const enter = () => { if (!isTouch()) hive.classList.add('has-hover'); };
      const leave = () => { if (!isTouch()) hive.classList.remove('has-hover'); };
      const click = (e: Event) => {
        if (!isTouch()) return;
        e.stopPropagation();
        const wasActive = hex.classList.contains('is-active');
        hexes.forEach((h) => h.classList.remove('is-active'));
        hive.classList.remove('has-active');
        if (!wasActive) {
          hex.classList.add('is-active');
          hive.classList.add('has-active');
        }
      };

      hex.addEventListener('mouseenter', enter);
      hex.addEventListener('mouseleave', leave);
      hex.addEventListener('click', click);
      enterHandlers.push(enter);
      leaveHandlers.push(leave);
      clickHandlers.push(click);
    });

    const docClick = () => {
      if (!isTouch()) return;
      hexes.forEach((h) => h.classList.remove('is-active'));
      hive.classList.remove('has-active');
    };
    document.addEventListener('click', docClick);

    return () => {
      io.disconnect();
      hexes.forEach((hex, i) => {
        hex.removeEventListener('mouseenter', enterHandlers[i]);
        hex.removeEventListener('mouseleave', leaveHandlers[i]);
        hex.removeEventListener('click', clickHandlers[i]);
      });
      document.removeEventListener('click', docClick);
    };
  }, []);

  const rows = [
    skills.slice(0, 1),
    skills.slice(1, 3),
    skills.slice(3, 6),
    skills.slice(6, 8),
    skills.slice(8, 9)
  ];
  let globalIndex = 0;

  return (
    <section className="section" id="skills">
      <div className="section-head center reveal">
        <span className="eyebrow">Kapabilitas & Solusi</span>
        <h2>Fokus pada <em>Hasil</em>, Bukan Sekadar Tools</h2>
        <p className="section-sub">Detail penjelasan akan muncul saat disentuh. Orang awam bisa menangkap intinya sekilas, dan yang butuh rincian teknis tinggal tap atau arahkan kursor.</p>
      </div>
      <div className="skills-hive" ref={hiveRef} id="skillsHive">
        {rows.map((row, ri) => (
          <div className="hive-row" key={ri}>
            {row.map((skill) => {
              const idx = globalIndex++;
              return (
                <button
                  type="button"
                  className="hex"
                  key={skill.name}
                  style={{ '--enter-delay': `${idx * 0.055}s` } as React.CSSProperties}
                  aria-label={`${skill.name}: ${skill.description}`}
                >
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
                  </span>
                  <span
                    className="hex-desc"
                    style={{
                      background: `linear-gradient(155deg, ${shade(skill.color, 0.05)}, ${shade(skill.color, 0.5)})`,
                      WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M22 12C22 12.7 21.8 13.4 21.5 14L18 20C17.3 21.2 16 22 14.6 22H7.4C6 22 4.7 21.2 4 20L0.5 14C-0.2 12.8 -0.2 11.2 0.5 10L4 4C4.7 2.8 6 2 7.4 2H14.6C16 2 17.3 2.8 18 4L21.5 10C21.8 10.6 22 11.3 22 12Z'/%3E%3C/svg%3E")`,
                      WebkitMaskSize: '100% 100%',
                      maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M22 12C22 12.7 21.8 13.4 21.5 14L18 20C17.3 21.2 16 22 14.6 22H7.4C6 22 4.7 21.2 4 20L0.5 14C-0.2 12.8 -0.2 11.2 0.5 10L4 4C4.7 2.8 6 2 7.4 2H14.6C16 2 17.3 2.8 18 4L21.5 10C21.8 10.6 22 11.3 22 12Z'/%3E%3C/svg%3E")`,
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
