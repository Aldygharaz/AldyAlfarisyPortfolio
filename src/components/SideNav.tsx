import { useEffect, useState } from 'react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

export default function SideNav() {
  const [activeId, setActiveId] = useState('introHero');
  const { locale } = useLocale();
  const sections = content[locale].sidenav;

  useEffect(() => {
    // Determine which section is currently on screen
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentId = 'introHero';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          currentId = section.id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: string | HTMLElement, opts?: { duration?: number }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(`#${id}`, { duration: 1.2 });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="side-nav" aria-label={locale === 'en' ? 'Page sections' : 'Bagian halaman'}>
      <div className="side-nav-inner">
        {sections.map((section, index) => {
          const isActive = activeId === section.id;
          const num = index.toString().padStart(2, '0');
          
          return (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`side-nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="side-nav-num">{num}</span>
              <span className="side-nav-line"></span>
              <span className="side-nav-label">{section.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
