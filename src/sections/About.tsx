import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

const HoverText = ({ text }: { text: string }) => (
  <>
    {text.split('').map((char, i) => (
      <span key={i} className="hover-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

export default function About() {
  const { locale } = useLocale();
  const about = content[locale].about;

  return (
    <section className="section" id="about">
      <div className="about-grid-new">
        <div className="about-text-col reveal">
          <div className="about-intro">
            <span
              className="eyebrow"
              style={{ display: 'inline-block', marginBottom: '16px', letterSpacing: '0.15em' }}
            >
              {about.eyebrow}
            </span>
            <h2 className="interactive-title">
              <span className="line">
                <HoverText text={about.titlePart1} />
                <em>
                  <HoverText text={about.titlePart2} />
                </em>
              </span>
              <span className="line">
                <HoverText text={about.titlePart3} />
              </span>
            </h2>
            <p>{about.p1}</p>
            <br />
            <p>{about.p2}</p>
            <br />
            <p>{about.p3}</p>
            <br />
            <p>{about.p4}</p>
          </div>

          <hr className="about-divider" />

          <div className="about-title-row">
            <h3>/ Aldy Alfarisy</h3>
            <span>{about.roleRow}</span>
          </div>

          <div className="about-timeline-section">
            <h4 className="timeline-heading">{about.timelineHeading}</h4>
            <ul className="timeline-list">
              {about.timeline.map((item, idx) => (
                <li key={idx}>
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-desc">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-visual-col reveal" style={{ transitionDelay: '0.1s' }}>
          <img
            src="/portrait.webp"
            alt={`Aldy Alfarisy - ${about.roleRow}`}
            className="about-portrait"
            loading="lazy"
            decoding="async"
          />

          <div className="vitals-section">
            <div className="vitals-header">
              <h3>{about.vitalsHeader}</h3>
              <span>SOKARA</span>
            </div>

            {about.vitals.map((vital: { label: string; content: string; sub?: string }, idx) => (
              <div key={idx} className="vital-row">
                <div className="vital-label">{vital.label}</div>
                <div className="vital-content">
                  <h4>{vital.content}</h4>
                  {vital.sub && (
                    <p style={{ fontSize: '13px', marginTop: '4px', opacity: 0.8 }}>
                      {vital.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}