import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

export default function Marquee() {
  const { locale } = useLocale();
  const { tier1 } = content[locale].marquee;

  const allItems = [...tier1, ...tier1, ...tier1, ...tier1]; // Quadruple for smooth continuous loop with 4 items

  return (
    <div style={{ textAlign: 'center', margin: '48px 0 0px', overflow: 'hidden' }}>
      {/* Tier 1 - Main Marquee */}
      <div className="marquee-wrap" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="marquee-track">
          {allItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
