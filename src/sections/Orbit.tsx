import { useEffect, useRef } from 'react';
import { Atom, FileCode2, MonitorSmartphone, CloudCog, Bot, Database } from 'lucide-react';

const cards = [
  {
    pos: 'top',
    icon: <Atom size={32} strokeWidth={1.5} />,
    title: 'React & <em>Next.js</em>',
    tagline: 'Antarmuka Cepat & Responsif',
    popupLabel: 'Frontend',
    popupText: 'Membangun antarmuka pengguna interaktif yang langsung merespons input tanpa jeda, memastikan kenyamanan operasional tingkat tinggi.',
  },
  {
    pos: 'top-right',
    icon: <FileCode2 size={32} strokeWidth={1.5} />,
    title: '<em>TypeScript</em>',
    tagline: 'Jaminan Kode Anti-Error',
    popupLabel: 'Quality Assurance',
    popupText: 'Menghindari bug tersembunyi dengan sistem penulisan kode terstruktur, menjamin stabilitas sistem bahkan saat bisnis melaju kencang.',
  },
  {
    pos: 'bottom-right',
    icon: <MonitorSmartphone size={32} strokeWidth={1.5} />,
    title: '<em>Electron</em>',
    tagline: 'Aplikasi Desktop Mandiri',
    popupLabel: 'Desktop Apps',
    popupText: 'Menghadirkan performa sekelas aplikasi native di Windows/Mac, memastikan software kasir/operasional jalan terus meski internet terputus.',
  },
  {
    pos: 'bottom',
    icon: <CloudCog size={32} strokeWidth={1.5} />,
    title: 'Google <em>Apps Script</em>',
    tagline: 'Infrastruktur Tanpa Server',
    popupLabel: 'Serverless Backend',
    popupText: 'Memangkas tagihan server bulanan menjadi Rp0 dengan memanfaatkan ekosistem Google Workspace yang tangguh dan aman.',
  },
  {
    pos: 'bottom-left',
    icon: <Bot size={32} strokeWidth={1.5} />,
    title: '<em>AI Agent</em>',
    tagline: 'Otomatisasi Proses Kerja',
    popupLabel: 'AI Automation',
    popupText: 'Mengorkestrasi sistem pintar yang mengambil alih tugas manual repetitif, membebaskan tim Anda untuk fokus pada pertumbuhan bisnis.',
  },
  {
    pos: 'top-left',
    icon: <Database size={32} strokeWidth={1.5} />,
    title: 'Zustand & <em>IndexedDB</em>',
    tagline: 'Sinkronisasi Data Offline',
    popupLabel: 'State & Local DB',
    popupText: 'Menyimpan setiap transaksi secara aman tanpa koneksi, lalu menyinkronkannya ke server pusat secara otomatis begitu sinyal kembali.',
  },
];

const angleMap: Record<string, number> = {
  'top': -90,
  'top-right': -30,
  'bottom-right': 30,
  'bottom': 90,
  'bottom-left': 150,
  'top-left': 210,
};

export default function Orbit() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const cardEls = Array.from(stage.querySelectorAll<HTMLElement>('.orbit-card'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const DEGREES_PER_SECOND = 12; // Increased from 8 for better UX
    pausedRef.current = reduceMotion;

    let dims = { w: 0, h: 0, rx: 0, ry: 0, cx: 0, cy: 0 };

    const measure = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      dims = { w, h, rx: w * 0.40, ry: h * 0.40, cx: w / 2, cy: h / 2 };
    };

    const position = () => {
      cardEls.forEach((card) => {
        const pos = card.dataset.pos || 'top';
        const angleDeg = angleMap[pos] + rotationRef.current;
        const rad = (angleDeg * Math.PI) / 180;
        const x = dims.cx + dims.rx * Math.cos(rad);
        const y = dims.cy + dims.ry * Math.sin(rad);
        card.style.left = '0px';
        card.style.top = '0px';
        card.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        card.classList.toggle('flip', x > dims.cx);
      });
    };

    const frame = (t: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = t;
      const dt = t - lastTimeRef.current;
      lastTimeRef.current = t;
      if (!pausedRef.current) {
        rotationRef.current = (rotationRef.current + (DEGREES_PER_SECOND * dt) / 1000) % 360;
        position();
      }
      rafRef.current = requestAnimationFrame(frame);
    };

    measure();
    position();
    
    const handleResize = () => { measure(); position(); };
    window.addEventListener('resize', handleResize);

    let observer: IntersectionObserver | null = null;
    
    if (!reduceMotion) {
      stage.addEventListener('mouseenter', () => { pausedRef.current = true; });
      stage.addEventListener('mouseleave', () => { pausedRef.current = false; lastTimeRef.current = null; });
      
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (!rafRef.current) {
            lastTimeRef.current = null;
            rafRef.current = requestAnimationFrame(frame);
          }
        } else {
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = 0;
          }
        }
      }, { threshold: 0 });
      
      observer.observe(stage);
    }

    // Tap-to-toggle for touch
    cardEls.forEach((card) => {
      card.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: hover)').matches) return;
        e.stopPropagation();
        const wasOpen = card.classList.contains('popup-open');
        cardEls.forEach((c) => c.classList.remove('popup-open'));
        if (!wasOpen) card.classList.add('popup-open');
      });
    });

    const docClick = () => { cardEls.forEach((c) => c.classList.remove('popup-open')); };
    document.addEventListener('click', docClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (observer) observer.disconnect();
      document.removeEventListener('click', docClick);
    };
  }, []);

  return (
    <section className="section" id="orbit" style={{ paddingBottom: '160px' }}>
      <div className="section-head center reveal">
        <span className="eyebrow">Teknologi Teruji</span>
        <h2>Tools Battle-Tested di Produksi Nyata</h2>
      </div>

      <div className="orbit-stage reveal" ref={stageRef} id="orbitStage">
        <div className="orbit-ring" style={{ width: '88%', height: '88%' }} />
        <div className="orbit-center">
          <div className="orbit-center-dot" />
        </div>

        {cards.map((card, i) => (
          <div className="orbit-card" data-pos={card.pos} key={i} tabIndex={0}>
            <div className="orbit-icon">{card.icon}</div>
            <h4 dangerouslySetInnerHTML={{ __html: card.title }} />
            <p className="orbit-tagline">{card.tagline}</p>
            <div className="orbit-popup">
              <span className="orbit-popup-label">{card.popupLabel}</span>
              <p>{card.popupText}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="orbit-fallback">
        {cards.map((card, i) => (
          <div className="orbit-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="orbit-icon">{card.icon}</div>
            <h4 dangerouslySetInnerHTML={{ __html: card.title }} />
            <p className="orbit-tagline">{card.tagline}</p>
            <div className="orbit-popup"><p>{card.popupText}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
