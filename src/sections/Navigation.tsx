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
    <header ref={ref} className="nav sticky top-0 z-50 py-5 transition-all duration-300" id="nav">
      <style>{`
        .nav { border-bottom: 1px solid transparent; }
        .nav.scrolled {
          padding: 14px 0;
          background: rgba(247,250,253,0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 1px 2px rgba(16,26,38,0.04), 0 1px 1px rgba(16,26,38,0.03);
        }
        .nav-inner {
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
        }
        .logo span { color: var(--accent-blue); }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          font-size: 14px;
          color: var(--text-muted);
        }
        .nav-links a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-links a:not(.nav-cta):hover { color: var(--text); }
        .nav-cta {
          color: #fff !important;
          background: var(--accent-blue);
          padding: 9px 20px;
          border-radius: 100px;
          font-weight: 500;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .nav-cta:hover { background: var(--accent-strong); }
      `}</style>
      <div className="nav-inner">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          A<span>.</span>
        </a>
        <nav className="nav-links">
          <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Karya</a>
          <a href="#quadrant" onClick={(e) => handleNavClick(e, 'quadrant')}>Solusi</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skill</a>
          <a href="#process" onClick={(e) => handleNavClick(e, 'process')}>Proses</a>
          <a href="#orbit" onClick={(e) => handleNavClick(e, 'orbit')}>Ekosistem</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimoni</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a>
          <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>Kontak</a>
        </nav>
      </div>
    </header>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
