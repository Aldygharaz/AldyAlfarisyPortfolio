import { useState } from 'react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(-1);
  const { locale } = useLocale();
  const faq = content[locale].faq;

  return (
    <section className="section" id="faq">
      <div className="section-head center reveal">
        <span className="eyebrow">{faq.eyebrow}</span>
        <h2>{faq.title}</h2>
      </div>
      <div className="faq-list">
        {faq.items.map((item, idx) => (
          <div className="reveal" key={idx} style={{ transitionDelay: `${0.08 * idx}s` }}>
            <div className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
              <button
                className="faq-q"
                aria-expanded={openIdx === idx}
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span>{item.q}</span>
                <span className="faq-icon" />
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}