import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';
import { Bot, Globe, Monitor, Database, Palette, PenTool, ShieldAlert, Link, Rocket, WifiOff } from 'lucide-react';

const SKILL_ICONS = [
  { icon: <Bot size={22} />, color: '#10A37F' },
  { icon: <Globe size={22} />, color: '#3B82F6' },
  { icon: <Monitor size={22} />, color: '#47848F' },
  { icon: <Database size={22} />, color: '#3ECF8E' },
  { icon: <Palette size={22} />, color: '#9333EA' },
  { icon: <PenTool size={22} />, color: '#F43F5E' },
  { icon: <ShieldAlert size={22} />, color: '#E44D26' },
  { icon: <Link size={22} />, color: '#00C389' },
  { icon: <Rocket size={22} />, color: '#F58025' },
  { icon: <WifiOff size={22} />, color: '#EAB308' },
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
  const { locale } = useLocale();
  const skillsData = content[locale].skills;
  const hiveRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  const skills = useMemo(
    () =>
      SKILL_ICONS.map((item, idx) => ({
        ...item,
        name: skillsData.items[idx].name,
        description: skillsData.items[idx].description,
      })),
    [skillsData]
  );

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

  const isMobile = () =>
    typeof window !== 'undefined' &&
    (window.innerWidth < 1024 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0));

  const handleHexClick = (e: React.MouseEvent, index: number) => {
    if (!isMobile()) return;
    e.stopPropagation();
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const rows = [skills.slice(0, 2), skills.slice(2, 5), skills.slice(5, 8), skills.slice(8, 10)];

  return (
    <section className="section" id="skills">
      <div className="section-head center reveal">
        <span className="eyebrow">{skillsData.eyebrow}</span>
        <h2>{skillsData.title}</h2>
        <p className="section-sub">{skillsData.subtitle}</p>
      </div>

      <div
        className={`skills-hive ${isHovering ? 'has-hover' : ''} ${activeIndex !== null ? 'has-active' : ''} ${isInView ? 'in-view' : ''}`}
        ref={hiveRef}
        id="skillsHive"
      >
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="hive-row">
            {row.map((skill) => {
              const globalIndex = skills.indexOf(skill);
              return (
                <button
                  type="button"
                  key={skill.name}
                  className={`hex ${activeIndex === globalIndex ? 'is-active' : ''}`}
                  style={{ '--enter-delay': `${globalIndex * 0.055}s` } as React.CSSProperties}
                  aria-label={`${skill.name}: ${skill.description}`}
                  onMouseEnter={() => !isMobile() && setIsHovering(true)}
                  onMouseLeave={() => !isMobile() && setIsHovering(false)}
                  onClick={(e) => handleHexClick(e, globalIndex)}
                >
                  <span className="hex-hitbox" />
                  <span className="hex-glow" style={{ background: skill.color }} />
                  <span
                    className="hex-clip"
                    style={{ background: `linear-gradient(155deg, ${skill.color}, ${shade(skill.color, 0.4)})` }}
                  />
                  <span className="hex-face">
                    <span className="hex-icon" aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span className="hex-name">{skill.name}</span>
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
        {skillsData.hint}
      </p>
    </section>
  );
}