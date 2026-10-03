import { useRef } from 'react';
import { ShieldCheck, Zap, Database, ArrowUpRight } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';
import './Testimonials.css';

const cardMeta = [
  {
    id: 'masalah-shift',
    icon: <Zap size={20} className="text-amber-400" />,
    badgeColor: 'rgba(251, 191, 36, 0.12)',
    badgeBorder: 'rgba(251, 191, 36, 0.3)',
    badgeText: '#f59e0b',
    link: 'https://hrms.aldyalfarisy.my.id/',
  },
  {
    id: 'masalah-kasir',
    icon: <ShieldCheck size={20} className="text-blue-400" />,
    badgeColor: 'rgba(59, 130, 246, 0.12)',
    badgeBorder: 'rgba(59, 130, 246, 0.3)',
    badgeText: '#3b82f6',
    link: 'https://pos.aldyalfarisy.my.id/',
  },
  {
    id: 'masalah-pembukuan',
    icon: <Database size={20} className="text-emerald-400" />,
    badgeColor: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    badgeText: '#10b981',
    link: 'https://sokaraaccountingdemo.netlify.app/',
  },
];

interface CardData {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeColor: string;
  badgeBorder: string;
  badgeText: string;
  link: string;
}

function CaseStudyCard({ cs, i, locale }: { cs: CardData; i: number; locale: 'id' | 'en' }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
      card.style.transition = 'none';
      card.style.zIndex = '10';
    });
  };
  
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.zIndex = '1';
  };

  return (
    <div 
      className="case-study-card reveal"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${i * 0.12}s` }}
    >
      <div className="testi-spotlight" />
      <div className="case-study-content">
        <div className="case-study-top">
          <div className="case-study-badge" style={{ backgroundColor: cs.badgeColor, borderColor: cs.badgeBorder, color: cs.badgeText }}>
            {cs.icon}
            <span>{cs.category}</span>
          </div>
          <a 
            href={cs.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="case-study-link-icon"
            aria-label={locale === 'en' ? `Open sample system for ${cs.category}` : `Buka contoh sistem ${cs.category}`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="case-study-body" style={{ marginTop: '16px' }}>
          <h3 className="case-study-title" style={{ fontSize: '1.15rem', lineHeight: '1.4', marginBottom: '12px' }}>{cs.title}</h3>
          <p className="case-study-desc" style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>{cs.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { locale } = useLocale();
  const t = content[locale].testimonials;

  const cards: CardData[] = t.cards.map((c, idx) => ({
    ...cardMeta[idx],
    category: c.category,
    title: c.title,
    description: c.desc,
  }));

  return (
    <section className="section" id="testimonials">
      <div className="section-head center reveal">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p className="section-sub">{t.subtitle}</p>
      </div>
      <div className="case-study-grid">
        {cards.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} i={i} locale={locale} />
        ))}
      </div>
    </section>
  );
}
