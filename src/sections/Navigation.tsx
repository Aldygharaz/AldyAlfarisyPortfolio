import { forwardRef } from 'react';

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
          top: 24px;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
        
        .nav-pill {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 40px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 100px;
          padding: 8px 10px 8px 20px;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .nav-wrapper.scrolled .nav-pill {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.08);
          border-color: rgba(0, 0, 0, 0.08);
        }

        .logo {
          font-family: var(--font-display, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 700;
          color: #000;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: -0.2px;
        }

        .nav-center {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #000;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-login {
          font-size: 13px;
          font-weight: 500;
          color: #555;
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
          padding: 10px 20px;
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
            gap: 20px;
          }
        }
      `}</style>
      
      <div className="nav-pill">
        {/* Left: Logo */}
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2H6C3.79086 2 2 3.79086 2 6V11H11V2Z" />
            <path d="M13 2H18C20.2091 2 22 3.79086 22 6V11H13V2Z" />
            <path d="M11 13H2V18C2 20.2091 3.79086 22 6 22H11V13Z" />
            <path d="M13 13H22V18C22 20.2091 20.2091 22 18 22H13V13Z" />
          </svg>
          Aldy.
        </a>

        {/* Center: Links */}
        <nav className="nav-center">
          <a href="#work" className="nav-link" onClick={(e) => handleNavClick(e, 'work')}>Karya</a>
          <a href="#quadrant" className="nav-link" onClick={(e) => handleNavClick(e, 'quadrant')}>Solusi</a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>Skill</a>
          <a href="#process" className="nav-link" onClick={(e) => handleNavClick(e, 'process')}>Proses</a>
          <a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimoni</a>
          <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a>
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
