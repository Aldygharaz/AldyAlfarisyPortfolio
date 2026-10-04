import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';

const HoverText = ({ text }: { text: string }) => (
  <span aria-hidden="true">
    {text.split('').map((char, i) => (
      <span key={i} className="hover-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

export default function About() {
  const { locale } = useLocale();
  const about = content[locale].about;

  return (
    <section className="section section-band" id="about">
      <div className="about-grid-new">
        <div className="about-text-col reveal">
          <div className="about-intro">
            <span
              className="eyebrow"
              style={{ display: 'inline-block', marginBottom: '16px', letterSpacing: '0.15em' }}
            >
              {about.eyebrow}
            </span>
            <h2 className="interactive-title" aria-label={`${about.titlePart1}${about.titlePart2} ${about.titlePart3}`}>
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
            <p>{about.p2}</p>
            <p>{about.p3}</p>
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

        <figure className="about-photo reveal" style={{ transitionDelay: '0.1s' }}>
          <img
            src="/portrait.webp"
            alt={about.portraitAlt}
            className="about-portrait"
            width="681"
            height="1024"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="vitals-section reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="vitals-header">
            <h3>{about.vitalsHeader}</h3>
            <span>SOKARA</span>
          </div>

          {about.vitals.map((vital: { label: string; content: string; sub?: string }, idx) => (
            <div key={idx} className="vital-row">
              <div className="vital-label">{vital.label}</div>
              <div className="vital-content">
                <h4>{vital.content}</h4>
                {vital.sub && <p className="vital-sub">{vital.sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}