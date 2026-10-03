import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

export default function Familiar() {
  const { locale } = useLocale();
  const t = content[locale].familiar;

  return (
    <section className="section" id="familiar" style={{ padding: '80px 24px', maxWidth: '880px', margin: '0 auto' }}>
      <div className="reveal">
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: 'var(--text)', textAlign: 'center', marginBottom: '40px', lineHeight: 1.3 }}>
          {t.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
          {t.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '18px 24px',
                borderRadius: '16px',
                background: 'var(--surface)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)', flexShrink: 0, marginTop: '8px' }} />
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--text)' }}>
                {item}
              </p>
            </div>
          ))}
        </div>
        <div style={{ padding: '24px', borderRadius: '16px', background: 'var(--surface-2)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: 'var(--accent-strong)', lineHeight: 1.5 }}>
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
}