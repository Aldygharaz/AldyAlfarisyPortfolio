import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';
import { scrollToSection } from '../lib/whatsapp';

const SOCIALS = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCiIKlj45e1euRR1Y-wxMz1w',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aldyalfarisy/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

export default function Footer() {
  const { locale } = useLocale();
  const footer = content[locale].footer;

  return (
    <footer>
      <div className="footer-inner">
        <nav className="footer-links" aria-label={footer.navLabel}>
          {footer.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-social">
          {SOCIALS.map((soc) => (
            <a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={soc.name}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={soc.path} />
              </svg>
            </a>
          ))}
        </div>
        <p className="footer-social-soon">{footer.socialSoon}</p>
        <p className="footer-identity">{footer.identity}</p>
        <p className="footer-copy">{footer.copyright}</p>
      </div>
    </footer>
  );
}
