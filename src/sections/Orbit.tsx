import { useEffect, useRef, useMemo } from 'react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';
import { Atom, FileCode2, MonitorSmartphone, CloudCog, Bot, Database } from 'lucide-react';

const ORBIT_BASE_CARDS = [
  { pos: 'top', icon: <Atom size={32} strokeWidth={1.5} /> },
  { pos: 'top-right', icon: <FileCode2 size={32} strokeWidth={1.5} /> },
  { pos: 'bottom-right', icon: <MonitorSmartphone size={32} strokeWidth={1.5} /> },
  { pos: 'bottom', icon: <CloudCog size={32} strokeWidth={1.5} /> },
  { pos: 'bottom-left', icon: <Bot size={32} strokeWidth={1.5} /> },
  { pos: 'top-left', icon: <Database size={32} strokeWidth={1.5} /> },
];

const POS_MAP: Record<string, number> = {
  top: -90,
  'top-right': -30,
  'bottom-right': 30,
  bottom: 90,
  'bottom-left': 150,
  'top-left': 210,
};

export default function Orbit() {
  const { locale } = useLocale();
  const orbit = content[locale].orbit;
  const stageRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const lastTimeRef = useRef<number | null>(null);
  const reqIdRef = useRef<number>(0);

  const cards = useMemo(
    () =>
      ORBIT_BASE_CARDS.map((card, idx) => ({
        ...card,
        title: orbit.cards[idx].title,
        tagline: orbit.cards[idx].tagline,
        popupLabel: orbit.cards[idx].tagline,
        popupText: orbit.cards[idx].desc,
      })),
    [orbit]
  );

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const cardEls = Array.from(stage.querySelectorAll<HTMLDivElement>('.orbit-card'));
    isPausedRef.current = false;
    let dims = { rx: 0, ry: 0, cx: 0, cy: 0 };

    const compute = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      dims = { rx: 0.4 * w, ry: 0.4 * h, cx: w / 2, cy: h / 2 };
    };

    const update = () => {
      cardEls.forEach((card) => {
        const p = card.dataset.pos || 'top';
        const rad = ((POS_MAP[p] + angleRef.current) * Math.PI) / 180;
        const x = dims.cx + dims.rx * Math.cos(rad);
        const y = dims.cy + dims.ry * Math.sin(rad);
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
        card.style.transform = 'translate(-50%, -50%)';
        card.classList.toggle('flip', x > dims.cx);
      });
    };

    const tick = (time: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      if (!isPausedRef.current) {
        angleRef.current = (angleRef.current + (12 * delta) / 1000) % 360;
        update();
      }
      reqIdRef.current = requestAnimationFrame(tick);
    };

    compute();
    update();

    const onResize = () => {
      compute();
      update();
    };
    window.addEventListener('resize', onResize);

    const onEnter = () => {
      isPausedRef.current = true;
    };
    const onLeave = () => {
      isPausedRef.current = false;
      lastTimeRef.current = null;
    };
    stage.addEventListener('mouseenter', onEnter);
    stage.addEventListener('mouseleave', onLeave);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reqIdRef.current) {
            lastTimeRef.current = null;
            reqIdRef.current = requestAnimationFrame(tick);
          }
        } else if (reqIdRef.current) {
          cancelAnimationFrame(reqIdRef.current);
          reqIdRef.current = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(stage);

    const cleanupFns: Array<{ el: HTMLElement; fn: (e: Event) => void }> = [];
    cardEls.forEach((card) => {
      const clickHandler = (e: Event) => {
        if (window.matchMedia('(hover: hover)').matches) return;
        e.stopPropagation();
        const isOpen = card.classList.contains('popup-open');
        cardEls.forEach((c) => c.classList.remove('popup-open'));
        if (!isOpen) card.classList.add('popup-open');
      };
      card.addEventListener('click', clickHandler);
      cleanupFns.push({ el: card, fn: clickHandler });
    });

    const docClick = () => {
      cardEls.forEach((c) => c.classList.remove('popup-open'));
    };
    document.addEventListener('click', docClick);

    return () => {
      window.removeEventListener('resize', onResize);
      stage.removeEventListener('mouseenter', onEnter);
      stage.removeEventListener('mouseleave', onLeave);
      cleanupFns.forEach(({ el, fn }) => el.removeEventListener('click', fn));
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      io.disconnect();
      document.removeEventListener('click', docClick);
    };
  }, [cards]);

  return (
    <section className="section" id="orbit" style={{ paddingBottom: '160px' }}>
      <div className="section-head center reveal">
        <span className="eyebrow">{orbit.eyebrow}</span>
        <h2>{orbit.title}</h2>
        <p className="section-sub">{orbit.subtitle}</p>
      </div>

      <div className="orbit-stage reveal" ref={stageRef} id="orbitStage">
        <div className="orbit-ring" style={{ width: '88%', height: '88%' }} />
        <div className="orbit-center">
          <div className="orbit-center-dot" />
        </div>

        {cards.map((card, idx) => (
          <div key={idx} className="orbit-card" data-pos={card.pos} tabIndex={0}>
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
        {cards.map((card, idx) => (
          <div key={idx} className="orbit-card reveal" style={{ transitionDelay: `${0.08 * idx}s` }}>
            <div className="orbit-icon">{card.icon}</div>
            <h4 dangerouslySetInnerHTML={{ __html: card.title }} />
            <p className="orbit-tagline">{card.tagline}</p>
            <div className="orbit-popup">
              <p>{card.popupText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}