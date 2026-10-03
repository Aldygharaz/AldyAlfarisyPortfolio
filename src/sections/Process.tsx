import { useEffect, useRef } from 'react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

export default function Process() {
  const { locale } = useLocale();
  const t = content[locale].process;

  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathBaseRef = useRef<SVGPathElement>(null);
  const pathGlowRef = useRef<SVGPathElement>(null);
  const pathLengthRef = useRef(0);

  useEffect(() => {
    const processWrap = wrapRef.current;
    const svg = svgRef.current;
    const pathBase = pathBaseRef.current;
    const pathGlow = pathGlowRef.current;
    if (!processWrap || !svg || !pathBase || !pathGlow) return;

    const stepEls = Array.from(processWrap.querySelectorAll('.process-step'));

    const isDesktopLine = () => window.matchMedia('(min-width: 801px)').matches;

    const buildPath = () => {
      if (!isDesktopLine()) return;
      const wrapRect = processWrap.getBoundingClientRect();
      svg.setAttribute('width', String(wrapRect.width));
      svg.setAttribute('height', String(wrapRect.height));
      svg.setAttribute('viewBox', `0 0 ${wrapRect.width} ${wrapRect.height}`);

      const dots = stepEls.map((s) => s.querySelector('.step-dot')!.getBoundingClientRect());
      const points = dots.map((d) => ({
        x: d.left - wrapRect.left + d.width / 2,
        y: d.top - wrapRect.top + d.height / 2,
      }));

      const sway = 26;
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const midY = (p0.y + p1.y) / 2;
        const dir = i % 2 === 0 ? 1 : -1;
        const c1x = p0.x + sway * dir;
        const c2x = p1.x - sway * dir;
        d += ` C ${c1x} ${midY}, ${c2x} ${midY}, ${p1.x} ${p1.y}`;
      }

      pathBase.setAttribute('d', d);
      pathGlow.setAttribute('d', d);
      pathLengthRef.current = pathGlow.getTotalLength();
      pathGlow.style.strokeDasharray = `${pathLengthRef.current} ${pathLengthRef.current}`;
      updateGlowProgress();
    };

    const updateGlowProgress = () => {
      const rect = processWrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.25 - rect.height;
      const raw = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, raw));

      if (isDesktopLine() && pathLengthRef.current) {
        pathGlow.style.strokeDashoffset = `${pathLengthRef.current * (1 - progress)}`;
      }

      const perStep = 1 / stepEls.length;
      stepEls.forEach((step, i) => {
        step.classList.toggle('lit', progress > i * perStep + perStep * 0.4);
      });
    };

    buildPath();

    let rafScroll: number | null = null;
    const onScroll = () => {
      if (rafScroll) return;
      rafScroll = requestAnimationFrame(() => {
        updateGlowProgress();
        rafScroll = null;
      });
    };

    window.addEventListener('resize', buildPath);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', buildPath);
      window.removeEventListener('scroll', onScroll);
      if (rafScroll) cancelAnimationFrame(rafScroll);
    };
  }, []);

  return (
    <section className="section" id="process">
      <div className="section-head reveal">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p className="section-sub">{t.subtitle}</p>
      </div>
      <div className="process-wrap" ref={wrapRef} id="processWrap">
        <svg className="process-line-svg" ref={svgRef} preserveAspectRatio="none">
          <path className="process-line-path" ref={pathBaseRef} d="" />
          <path className="process-line-glow" ref={pathGlowRef} d="" />
        </svg>
        <div className="process-line" id="processLine">
          {t.steps.map((step, i) => (
            <div className="process-step" data-step={i} key={i}>
              <span className="step-dot" />
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
