import { useEffect, useState } from 'react';

const sections = [
  { id: 'introHero', label: 'INTRO' },
  { id: 'work', label: 'KARYA' },
  { id: 'quadrant', label: 'SOLUSI' },
  { id: 'skills', label: 'SKILL' },
  { id: 'process', label: 'PROSES' },
  { id: 'orbit', label: 'EKOSISTEM' },
  { id: 'testimonials', label: 'TESTIMONI' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'KONTAK' }
];

export default function SideNav() {
  const [activeId, setActiveId] = useState('introHero');

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
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="side-nav">
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
