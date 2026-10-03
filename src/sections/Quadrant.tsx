import { Sparkles, Zap, Building2, Rocket } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

const ICONS = [
  <Sparkles size={28} key="0" />,
  <Zap size={28} key="1" />,
  <Building2 size={28} key="2" />,
  <Rocket size={28} key="3" />,
];

const CLASSES = ['blue', 'pink', 'amber', 'green'];

export default function Quadrant() {
  const { locale } = useLocale();
  const t = content[locale].quadrant;

  return (
    <section className="section" id="quadrant" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="section-head reveal" style={{ alignItems: 'center', textAlign: 'center' }}>
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p className="section-sub" style={{ maxWidth: '700px', margin: '16px auto 0' }}>
          {t.subtitle}
        </p>
      </div>
      <div className="quad-frame reveal">
        <div className="quad-grid">
          {t.cells.map((cell, i) => (
            <div className={`quad-cell ${CLASSES[i]}`} key={i}>
              <div className="quad-icon">{ICONS[i]}</div>
              <span className="quad-label">{cell.tag}</span>
              <h3 dangerouslySetInnerHTML={{ __html: cell.title }} />
              <p>{cell.desc}</p>
            </div>
          ))}
        </div>
        <div className="quad-center-dot" />
      </div>
    </section>
  );
}
