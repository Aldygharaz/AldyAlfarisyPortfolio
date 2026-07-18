import { forwardRef } from 'react';

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
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(32px) saturate(180%);
          -webkit-backdrop-filter: blur(32px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 100px;
          padding: 10px 16px 10px 32px;
          box-shadow: 0 4px 24px -4px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255,255,255,0.4);
          transition: all 0.3s ease;
        }

        .nav-wrapper.scrolled .nav-pill {
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255,255,255,0.6);
        }

        .nav-left {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .logo {
          font-family: var(--font-display, 'Inter', sans-serif);
          font-size: 16px;
          font-weight: 700;
          color: #000;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.2px;
        }

        .nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }

        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: #444;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #000;
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
          color: #444;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-login:hover {
          color: #000;
        }

        .nav-cta {
          background: #000;
          color: #fff !important;
          font-size: 13px;
          font-weight: 500;
          padding: 10px 24px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s, background 0.2s;
        }

        .nav-cta:hover {
          background: #222;
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2H6C3.79086 2 2 3.79086 2 6V11H11V2Z" />
              <path d="M13 2H18C20.2091 2 22 3.79086 22 6V11H13V2Z" />
              <path d="M11 13H2V18C2 20.2091 3.79086 22 6 22H11V13Z" />
              <path d="M13 13H22V18C22 20.2091 20.2091 22 18 22H13V13Z" />
            </svg>
            Aldy.
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

        {/* Right: Actions */}
        <div className="nav-right">
          <a href="#contact" className="nav-login" onClick={(e) => handleNavClick(e, 'contact')}>Kontak</a>
          <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>Mulai Proyek</a>
        </div>
      </div>
    </header>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
