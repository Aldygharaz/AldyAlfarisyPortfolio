import { useEffect, useRef } from 'react';

const cards = [
  {
    pos: 'top',
    icon: '⚛️',
    title: 'React & <em>Next.js</em>',
    tagline: 'Buat fondasi frontend',
    popupLabel: 'Frontend',
    popupText: 'Kombinasi terbaik untuk membangun antarmuka interaktif dan performa website yang cepat dengan Server-Side Rendering.',
  },
  {
    pos: 'top-right',
    icon: '⚡',
    title: '<em>Supabase</em>',
    tagline: 'Buat database & autentikasi',
    popupLabel: 'Backend as a Service',
    popupText: 'Menyediakan database real-time dan sistem autentikasi yang aman untuk menyimpan data pengguna dan aplikasi.',
  },
  {
    pos: 'bottom-right',
    icon: 'E',
    title: '<em>Electron</em>',
    tagline: 'Buat distribusi desktop',
    popupLabel: 'Desktop Apps',
    popupText: 'Membawa teknologi web ke platform desktop (Windows/Mac) sehingga aplikasi bisa berjalan native dan offline.',
  },
  {
    pos: 'bottom',
    icon: 'GAS',
    title: 'Google <em>Apps Script</em>',
    tagline: 'Buat backend ringan',
    popupLabel: 'No-Code Database',
    popupText: 'Solusi backend tanpa server yang terintegrasi langsung dengan ekosistem Google (Sheets, Drive, dll).',
  },
  {
    pos: 'bottom-left',
    icon: '🤖',
    title: '<em>AI Agent</em>',
    tagline: 'Buat percepatan development',
    popupLabel: 'AI Automation',
    popupText: 'Mengorkestrasi tugas berulang dengan kecerdasan buatan untuk mempercepat proses koding dan operasional.',
  },
  {
    pos: 'top-left',
    icon: 'V',
    title: '<em>Vercel</em>',
    tagline: 'Buat deployment',
    popupLabel: 'Hosting',
    popupText: 'Platform hosting modern yang menjamin website selalu online dengan cepat di seluruh dunia.',
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
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
        card.style.transform = 'translate(-50%, -50%)';
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
    window.addEventListener('resize', () => { measure(); position(); });

    if (!reduceMotion) {
      stage.addEventListener('mouseenter', () => { pausedRef.current = true; });
      stage.addEventListener('mouseleave', () => { pausedRef.current = false; lastTimeRef.current = null; });
      rafRef.current = requestAnimationFrame(frame);
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
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('click', docClick);
    };
  }, []);

  return (
    <section className="section" id="orbit" style={{ paddingBottom: '160px' }}>
      <div className="section-head center reveal">
        <span className="eyebrow">Sistem & Tools</span>
        <h2>Ekosistem yang Saya Pakai untuk Bangun Solusi</h2>
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
