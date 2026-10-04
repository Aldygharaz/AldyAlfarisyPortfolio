import { useState } from 'react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

export default function FAQ() {
  // Pertanyaan pertama terbuka supaya pengunjung langsung tahu isinya bisa dibaca.
  const [openKey, setOpenKey] = useState<string>('0-0');
  const { locale } = useLocale();
  const faq = content[locale].faq;

  return (
    <section className="section" id="faq">
      <div className="section-head center reveal">
        <span className="eyebrow">{faq.eyebrow}</span>
        <h2>{faq.title}</h2>
      </div>
      <div className="faq-list">
        {faq.groups.map((group, g) => (
          <div className="faq-group reveal" key={group.title}>
            <h3 className="faq-group-title">{group.title}</h3>
            {group.items.map((item, i) => {
              const key = `${g}-${i}`;
              const isOpen = openKey === key;
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={key}>
                  <h4 className="faq-heading">
                    <button
                      type="button"
                      className="faq-q"
                      id={`faq-q-${key}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${key}`}
                      onClick={() => setOpenKey(isOpen ? '' : key)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon" aria-hidden="true" />
                    </button>
                  </h4>
                  <div
                    className="faq-a"
                    id={`faq-a-${key}`}
                    role="region"
                    aria-labelledby={`faq-q-${key}`}
                  >
                    <div className="faq-a-inner">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
