import { Check, Wallet, ArrowUpRight, Calculator } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { useOrder, type PackageId } from '../context/OrderContext';
import { useSegment } from '../context/SegmentContext';
import { content } from '../locales/content';
import { scrollToSection } from '../lib/whatsapp';
import { track } from '../lib/analytics';

const SAMPLE_WEBSITE_URL = '/contoh/kedai-kopi/';

export default function Packages() {
  const { locale } = useLocale();
  const { pkg, onPackageChosen, otherBusiness } = useOrder();
  const { segment } = useSegment();
  const t = content[locale].packages;

  const choose = (id: PackageId) => {
    onPackageChosen(id, segment !== null || otherBusiness);
    track('package_select', { package: id, location: 'packages' });
    scrollToSection('pesan');
  };

  return (
    <section className="section section-band pkg-section" id="paket">
      <style>{`
        .pkg-grid {
          display: grid;
          gap: 20px;
        }
        @media (min-width: 900px) {
          .pkg-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: stretch; }
        }
        .pkg-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 28px 24px 24px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background: var(--surface);
        }
        .pkg-card.is-middle {
          border: 2px solid var(--accent-blue);
          box-shadow: 0 24px 48px -24px rgba(29, 78, 216, 0.35);
        }
        .pkg-card.is-selected { outline: 3px solid var(--accent-soft); outline-offset: 2px; }
        .pkg-tag {
          position: absolute;
          top: -13px;
          left: 24px;
          padding: 4px 12px;
          border-radius: 100px;
          background: var(--accent-blue);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .pkg-name { font-size: 22px; margin: 0 0 8px; }
        .pkg-desc { font-size: 16px; line-height: 1.55; color: var(--text-muted); margin: 0 0 20px; }
        .pkg-price-box {
          padding: 14px 16px;
          border-radius: 14px;
          background: var(--surface-2);
          margin-bottom: 20px;
        }
        .pkg-from { font-size: 13px; color: var(--text-muted); margin: 0; }
        .pkg-price { font-family: var(--font-display); font-size: 30px; font-weight: 700; color: var(--text); margin: 0; line-height: 1.2; }
        .pkg-contact { font-size: 17px; font-weight: 600; color: var(--text); margin: 4px 0; line-height: 1.35; }
        .pkg-features { list-style: none; padding: 0; margin: 0 0 24px; display: grid; gap: 10px; }
        .pkg-features li { display: flex; gap: 10px; align-items: flex-start; font-size: 16px; line-height: 1.5; color: var(--text); }
        .pkg-check { flex-shrink: 0; margin-top: 3px; color: var(--accent-blue); }
        .pkg-actions { margin-top: auto; display: grid; gap: 10px; }
        .pkg-actions .btn { width: 100%; justify-content: center; }
        .pkg-example {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 44px;
          font-size: 15px;
          font-weight: 500;
          color: var(--accent-blue);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .pkg-info {
          margin-top: 24px;
          display: grid;
          gap: 20px;
        }
        @media (min-width: 900px) {
          .pkg-info { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .pkg-note {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px;
          border-radius: 18px;
          border: 1px dashed var(--border-color);
          background: var(--surface);
        }
        .pkg-note-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--accent-wash);
          color: var(--accent-blue);
        }
        .pkg-note-title { font-weight: 600; font-size: 17px; margin: 0 0 8px; color: var(--text); }
        .pkg-note-text { font-size: 16px; line-height: 1.55; margin: 0; color: var(--text-muted); }
        .pkg-drivers { list-style: disc; padding-left: 20px; margin: 0 0 12px; display: grid; gap: 4px; font-size: 16px; line-height: 1.5; color: var(--text); }
      `}</style>

      <div className="section-head reveal">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p className="section-sub">{t.subtitle}</p>
      </div>

      <div className="pkg-grid">
        {t.items.map((item, idx) => {
          const isMiddle = idx === 1;
          return (
            <article
              key={item.id}
              className={`pkg-card ${isMiddle ? 'is-middle' : ''} ${pkg === item.id ? 'is-selected' : ''}`}
            >
              {isMiddle && <span className="pkg-tag">{t.middleTag}</span>}
              <h3 className="pkg-name">{item.name}</h3>
              <p className="pkg-desc">{item.desc}</p>
              <div className="pkg-price-box">
                {item.price ? (
                  <>
                    <p className="pkg-from">{t.from}</p>
                    <p className="pkg-price">{item.price}</p>
                  </>
                ) : (
                  <p className="pkg-contact">{t.contactPrice}</p>
                )}
              </div>
              <ul className="pkg-features">
                {item.features.map((f) => (
                  <li key={f}>
                    <Check className="pkg-check w-4 h-4" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pkg-actions">
                <button
                  type="button"
                  className={`btn ${isMiddle ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => choose(item.id as PackageId)}
                >
                  {t.choose}
                </button>
                {item.id === 'website' && (
                  <a className="pkg-example" href={SAMPLE_WEBSITE_URL} target="_blank" rel="noopener noreferrer">
                    {t.example} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="pkg-info reveal">
        <div className="pkg-note">
          <span className="pkg-note-icon" aria-hidden="true">
            <Calculator className="w-5 h-5" />
          </span>
          <div>
            <p className="pkg-note-title">{t.driversTitle}</p>
            <ul className="pkg-drivers">
              {t.drivers.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="pkg-note-text">{t.driversNote}</p>
          </div>
        </div>
        <div className="pkg-note">
          <span className="pkg-note-icon" aria-hidden="true">
            <Wallet className="w-5 h-5" />
          </span>
          <div>
            <p className="pkg-note-title">{t.payTitle}</p>
            <p className="pkg-note-text">{t.payText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
