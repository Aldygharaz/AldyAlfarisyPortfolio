import React, { forwardRef } from 'react';
import LanguageToggle from '../components/LanguageToggle';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';
import { track } from '../lib/analytics';

const Navigation = forwardRef<HTMLElement>((_, ref) => {
  const { locale } = useLocale();
  const nav = content[locale].nav;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: string | HTMLElement, opts?: { duration?: number }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(`#${targetId}`, { duration: 1.2 });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header ref={ref} className="nav-wrapper transition-all duration-300" id="nav">
      <style>{`
        .nav-wrapper {
          position: fixed;
          top: 16px;
          left: 16px;
          right: 16px;
          z-index: 50;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
        
        .nav-pill {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1400px;
          background: color-mix(in srgb, var(--surface) 45%, transparent);
          backdrop-filter: blur(32px) saturate(180%);
          -webkit-backdrop-filter: blur(32px) saturate(180%);
          border: 1px solid color-mix(in srgb, var(--border-color) 40%, transparent);
          border-radius: 100px;
          padding: 10px 16px 10px 32px;
          box-shadow: 0 4px 24px -4px rgba(0, 0, 0, 0.05), inset 0 0 0 1px color-mix(in srgb, var(--surface) 20%, transparent);
          transition: all 0.3s ease;
        }

        .nav-wrapper.scrolled .nav-pill {
          background: color-mix(in srgb, var(--surface) 70%, transparent);
          box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.08), inset 0 0 0 1px color-mix(in srgb, var(--border-color) 40%, transparent);
        }

        .nav-left {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          min-height: 44px;
          text-decoration: none;
          gap: 8px;
        }
        
        .logo img {
          height: 44px;
          width: auto;
        }

        .logo-dark { display: none; }
        .logo-light { display: block; }
        
        .dark .logo-dark { display: block; }
        .dark .logo-light { display: none; }

        .nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }

        .nav-link,
        .nav-login {
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          padding: 0 4px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover,
        .nav-link:focus-visible {
          color: var(--text);
        }
        .nav-link:focus-visible,
        .nav-login:focus-visible,
        .logo:focus-visible {
          outline: 2px solid var(--accent-blue);
          outline-offset: 4px;
          border-radius: 6px;
        }

        .nav-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 16px;
        }

        .nav-login {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-login:hover,
        .nav-login:focus-visible {
          color: var(--text);
        }

        .nav-cta {
          background: var(--text);
          color: var(--bg) !important;
          font-size: 13px;
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 100px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s, background 0.2s;
        }

        .nav-cta:hover,
        .nav-cta:focus-visible {
          background: var(--text-muted);
          outline: 2px solid var(--accent-blue);
          outline-offset: 2px;
        }

        @media (max-width: 1024px) {
          .nav-center {
            display: none;
          }
          .nav-pill {
            padding: 10px 16px 10px 24px;
          }
        }

        @media (max-width: 640px) {
          .nav-pill {
            padding: 6px 10px 6px 14px;
          }
          .logo img {
            height: 32px;
          }
          .nav-login {
            display: none;
          }
          .nav-right {
            gap: 8px;
          }
          .nav-cta {
            display: inline-flex;
            align-items: center;
            min-height: 44px;
            padding: 0 14px;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="nav-pill">
        <div className="nav-left">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).lenis;
              if (lenis) {
                lenis.scrollTo(0, { duration: 1.2 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img src="/sokara-horizontal-light-bg.svg" alt="Sokara" className="logo-light" />
            <img src="/sokara-horizontal-dark-bg.svg" alt="Sokara" className="logo-dark" />
          </a>
        </div>

        <nav className="nav-center" aria-label={locale === 'en' ? 'Main navigation' : 'Navigasi utama'}>
          {nav.links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <div style={{ margin: '0 4px' }}>
            <LanguageToggle />
          </div>
          <a
            href="#contact"
            className="nav-login"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            {nav.contact}
          </a>
          <a
            href={nav.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta magnetic"
            onClick={() => track('wa_click', { location: 'nav' })}
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
});

export default Navigation;