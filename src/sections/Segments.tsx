import { Store, Coffee, Sparkles, Truck, GraduationCap, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { useSegment, type SegmentId } from '../context/SegmentContext';
import { useOrder } from '../context/OrderContext';
import { content } from '../locales/content';
import { buildWaUrl, scrollToSection } from '../lib/whatsapp';
import { track } from '../lib/analytics';

const ICONS: Record<SegmentId, LucideIcon> = {
  toko: Store,
  fnb: Coffee,
  klinik: Sparkles,
  distributor: Truck,
  sekolah: GraduationCap,
  online: ShoppingBag,
};

// Nama tampilan + kunci teks project, untuk kartu kecil "Contoh yang cocok".
const PROJECTS: Record<string, { title: string; key: 'pos' | 'kavana' | 'accounting' | 'hrms' | 'crm' | 'sanctuary' | 'lms' }> = {
  'sokara-pos-evo': { title: 'Sokara POS EVO', key: 'pos' },
  'kavana-lifestyle': { title: 'KAVANA', key: 'kavana' },
  'sokara-accounting': { title: 'Sokara Accounting', key: 'accounting' },
  'sokara-hrms': { title: 'Sokara HRMS', key: 'hrms' },
  'sokara-crm': { title: 'Sokara CRM', key: 'crm' },
  'sokara-sanctuary': { title: 'Sokara Sanctuary', key: 'sanctuary' },
  'sokara-lms': { title: 'Sokara LMS', key: 'lms' },
};

export default function Segments() {
  const { locale } = useLocale();
  const { segment, setSegment } = useSegment();
  const { onBusinessChosen, setOtherBusiness } = useOrder();
  const t = content[locale].segments;
  const projectTexts = content[locale].work.projects;
  const active = t.items.find((i) => i.id === segment) ?? null;

  const choose = (id: SegmentId) => {
    setSegment(id);
    setOtherBusiness(false);
    onBusinessChosen();
    track('segment_select', { segment: id });
  };

  return (
    <section className="section seg-section" id="segments">
      <style>{`
        .seg-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        @media (min-width: 768px) {
          .seg-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        }
        .seg-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 64px;
          padding: 14px 16px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          background: var(--surface);
          color: var(--text);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .seg-btn:hover { border-color: var(--accent-blue); transform: translateY(-1px); }
        .seg-btn:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 2px; }
        .seg-btn[aria-pressed='true'] {
          border-color: var(--accent-blue);
          background: var(--accent-wash);
          box-shadow: 0 0 0 1px var(--accent-blue) inset;
        }
        .seg-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--surface-2);
          color: var(--accent-blue);
        }
        .seg-btn[aria-pressed='true'] .seg-icon { background: var(--accent-blue); color: #fff; }
        .seg-panel {
          margin-top: 24px;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background: var(--surface);
          display: grid;
          gap: 24px;
        }
        @media (min-width: 900px) {
          .seg-panel { grid-template-columns: 1.1fr 1fr; padding: 32px; gap: 40px; }
        }
        .seg-label {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-strong);
          margin-bottom: 14px;
          font-weight: 600;
        }
        .seg-situation {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 17px;
          line-height: 1.55;
          color: var(--text);
          padding: 10px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .seg-situation:last-child { border-bottom: none; }
        .seg-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-blue); flex-shrink: 0; margin-top: 10px; }
        .seg-note { font-size: 13px; color: var(--text-muted); opacity: 0.8; margin-top: 12px; }
        .seg-demo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          min-height: 56px;
          padding: 12px 16px;
          border-radius: 14px;
          border: 1px solid var(--border-color);
          background: var(--bg);
          color: var(--text);
          text-align: left;
          cursor: pointer;
          margin-bottom: 10px;
          transition: border-color 0.2s ease;
        }
        .seg-demo:hover { border-color: var(--accent-blue); }
        .seg-demo-title { font-weight: 600; font-size: 16px; }
        .seg-demo-sub { font-size: 14px; color: var(--text-muted); line-height: 1.4; }
        .seg-cta { margin-top: 8px; width: 100%; justify-content: center; min-height: 52px; font-size: 16px; }
        @media (min-width: 900px) { .seg-cta { width: auto; } }
      `}</style>

      <div className="section-head reveal">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p className="section-sub">{t.subtitle}</p>
      </div>

      <div className="seg-grid" role="group" aria-label={t.title}>
        {t.items.map((item) => {
          const Icon = ICONS[item.id as SegmentId];
          const pressed = segment === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className="seg-btn"
              aria-pressed={pressed}
              onClick={() => choose(item.id as SegmentId)}
            >
              <span className="seg-icon" aria-hidden="true">
                {pressed ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {active && (
        <div className="seg-panel" aria-live="polite">
          <div>
            <p className="seg-label">{t.situationsLabel}</p>
            {active.situations.map((s) => (
              <div className="seg-situation" key={s}>
                <span className="seg-dot" aria-hidden="true" />
                <span>{s}</span>
              </div>
            ))}
            <p className="seg-note">{t.note}</p>
          </div>

          <div>
            <p className="seg-label">{t.demosLabel}</p>
            {active.projects.map((pid) => {
              const p = PROJECTS[pid];
              if (!p) return null;
              return (
                <button
                  key={pid}
                  type="button"
                  className="seg-demo"
                  onClick={() => scrollToSection('work')}
                >
                  <span>
                    <span className="seg-demo-title" style={{ display: 'block' }}>{p.title}</span>
                    <span className="seg-demo-sub">{projectTexts[p.key].summary}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" aria-label={t.seeDemos} />
                </button>
              );
            })}
            <a
              href={buildWaUrl(locale, active.id as SegmentId)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary seg-cta"
              onClick={() => track('wa_click', { location: 'segment', segment: active.id })}
            >
              {t.cta}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
