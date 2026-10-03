import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

export default function Footer() {
  const { locale } = useLocale();
  const footer = content[locale].footer;

  return (
    <footer>
      <style>{`
        .footer-inner {
          max-width: var(--maxw);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
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
        .footer-identity {
          font-size: 13px;
          color: var(--text-muted);
          text-align: center;
          margin: 0;
        }
        .footer-copy {
          font-size: 12px;
          color: var(--text-muted);
          opacity: 0.8;
          text-align: center;
          margin: 0;
        }
      `}</style>
      <div className="footer-inner">
        <div className="footer-links">
          {footer.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="footer-identity">{footer.identity}</p>
        <p className="footer-copy">{footer.copyright}</p>
      </div>
    </footer>
  );
}