export default function Footer() {
  return (
    <footer>
      <style>{`
        .footer-inner {
          max-width: var(--maxw);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .footer-socials {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .footer-socials a {
          color: var(--text-muted);
          transition: color 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-socials a:hover {
          color: var(--accent-blue);
          transform: translateY(-2px);
        }
        .footer-links {
          display: flex;
          gap: 24px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: var(--accent-blue);
        }
      `}</style>
      <div className="footer-inner">
        <div className="footer-links">
          <a href="#work" onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>Karya</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>Skill</a>
          <a href="#process" onClick={(e) => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }); }}>Proses</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>FAQ</a>
        </div>

        <p>&copy; 2026 Aldy Alfarisy. Sokara | Digital Solutions Builder.</p>
      </div>
    </footer>
  );
}
