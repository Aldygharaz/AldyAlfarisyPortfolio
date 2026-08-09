import { forwardRef } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const NAV_LINKS = [
  { id: 'work', label: 'Karya' },
  { id: 'quadrant', label: 'Solusi' },
  { id: 'skills', label: 'Skill' },
  { id: 'process', label: 'Proses' },
  { id: 'testimonials', label: 'Testimoni' },
  { id: 'faq', label: 'FAQ' },
];

const Navigation = forwardRef<HTMLElement>((_, ref) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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

        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text);
        }

        .nav-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 20px;
        }

        .nav-login {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-login:hover {
          color: var(--text);
        }

        .nav-cta {
          background: var(--text);
          color: var(--bg) !important;
          font-size: 13px;
          font-weight: 500;
          padding: 10px 24px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s, background 0.2s;
        }

        .nav-cta:hover {
          background: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .nav-center {
            display: none;
          }
          .nav-pill {
            padding: 10px 16px 10px 24px;
          }
        }
      `}</style>
      
      <div className="nav-pill">
        {/* Left: Logo */}
        <div className="nav-left">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/sokara-horizontal-light-bg.svg" alt="Sokara" className="logo-light" />
            <img src="/sokara-horizontal-dark-bg.svg" alt="Sokara" className="logo-dark" />
          </a>
        </div>

        {/* Center: Links mapped from array (Kaizen: Standardized & DRY) */}
        <nav className="nav-center">
          {NAV_LINKS.map(({ id, label }) => (
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

        {/* Right: Actions & Theme */}
        <div className="nav-right">
          <ThemeToggle />
          <a href="#contact" className="nav-login" onClick={(e) => handleNavClick(e, 'contact')}>Kontak</a>
          <a
            href="https://api.whatsapp.com/send?phone=6281410538887&text=Halo%20Aldy,%20saya%20tertarik%20untuk%20memulai%20proyek%20digital."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta magnetic"
          >
            Mulai Proyek
          </a>
        </div>
      </div>
    </header>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
