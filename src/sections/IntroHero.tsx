import { useRef } from 'react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';
import { track } from '../lib/analytics';
import { scrollToSection } from '../lib/whatsapp';

export default function IntroHero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();
  const hero = content[locale].hero;
  const nav = content[locale].nav;

  return (
    <section ref={heroRef} className="intro-hero" id="introHero">
      <div className="intro-grid" aria-hidden="true" />
      <style>{`
        .intro-content-styled {
          text-align: left;
          width: 100%;
          max-width: 1120px;
          padding: 0 32px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          z-index: 1;
        }

        .intro-eyebrow-styled {
          color: var(--accent-blue);
          margin-bottom: 24px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          letter-spacing: 0.08em;
        }

        .intro-eyebrow-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-blue);
          border-radius: 50%;
        }

        .intro-name-styled {
          color: var(--text);
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .intro-actions-styled {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .intro-btn-styled {
          min-width: 180px;
          justify-content: center;
        }

        .intro-social-links {
          display: flex;
          gap: 8px;
        }

        .intro-social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          background: var(--surface);
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .intro-social-link:hover {
          border-color: var(--accent-blue);
          color: var(--text);
        }

        .intro-reassurance {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 20px;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .intro-reassurance {
            white-space: nowrap;
          }
        }

        .intro-trust {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
        }

        .intro-trust li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--intro-muted, var(--text-muted));
        }

        .intro-trust-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--accent-wash);
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        @media (max-width: 767px) {
          .intro-btn-styled { width: 100%; min-height: 52px; font-size: 16px; }
          .intro-reassurance { font-size: 15px; }
          .intro-trust { flex-direction: column; gap: 10px; }
          .intro-trust li { font-size: 15px; }
        }
      `}</style>
      <div className="intro-content intro-content-styled" ref={contentRef}>
        <span className="intro-eyebrow animate-fade-up intro-eyebrow-styled">
          <span className="intro-eyebrow-dot" />
          {hero.eyebrow}
        </span>
        <h1
          className="intro-name animate-fade-up delay-1 intro-name-styled"
          style={{ fontSize: 'clamp(2.3rem, 3.9vw, 3.2rem)', lineHeight: 1.12 }}
        >
          <span className="intro-line">{hero.headline1}</span>
          <span className="intro-line">{hero.headline2}</span>
        </h1>
        <p
          className="animate-fade-up delay-2"
          style={{
            fontSize: 'clamp(17px, 1.8vw, 19px)',
            color: 'var(--text)',
            lineHeight: 1.6,
            maxWidth: '780px',
            marginTop: '16px',
            marginBottom: '24px'
          }}
        >
          {hero.offer}
        </p>
        <div className="animate-fade-up delay-3 intro-actions-styled">
          <a
            href={nav.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary magnetic intro-btn-styled"
            onClick={() => track('wa_click', { location: 'hero' })}
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#segments"
            className="btn btn-ghost magnetic intro-btn-styled"
            style={{ padding: '16px 24px' }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('segments');
            }}
          >
            {hero.ctaSecondary}
          </a>
          <div className="intro-social-links" style={{ marginLeft: '4px' }}>
            <a
              href="https://www.youtube.com/channel/UCiIKlj45e1euRR1Y-wxMz1w"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-social-link"
              aria-label="YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aldyalfarisy/"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-social-link"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <p className="animate-fade-up delay-3 intro-reassurance">
          {hero.reassurance}
        </p>
        <ul className="animate-fade-up delay-3 intro-trust">
          {hero.trust.map((item) => (
            <li key={item}>
              <span className="intro-trust-check" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="intro-scroll" ref={scrollRef}>
        <span>Scroll</span>
        <div className="intro-scroll-track">
          <div className="intro-scroll-dot" />
        </div>
      </div>
    </section>
  );
}