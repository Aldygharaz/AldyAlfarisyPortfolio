import { Check, ArrowRight } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { content } from '../locales/content';
import { track } from '../lib/analytics';
import { scrollToSection } from '../lib/whatsapp';

export default function IntroHero() {
  const { locale } = useLocale();
  const hero = content[locale].hero;
  const nav = content[locale].nav;

  return (
    <section className="intro-hero" id="introHero" aria-labelledby="hero-title">
      <div className="intro-grid" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-byline animate-fade-up">
            <img
              src="/portrait.webp"
              alt=""
              width="44"
              height="44"
              className="hero-byline-avatar"
              decoding="async"
            />
            <span>{hero.byline}</span>
          </div>

          <span className="hero-eyebrow animate-fade-up">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1 id="hero-title" className="hero-title animate-fade-up delay-1">
            <span className="intro-line">{hero.headline1}</span>
            <span className="intro-line">{hero.headline2}</span>
          </h1>

          <p className="hero-offer animate-fade-up delay-2">{hero.offer}</p>

          <div className="hero-actions animate-fade-up delay-3">
            <a
              href={nav.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary magnetic hero-btn"
              onClick={() => track('wa_click', { location: 'hero' })}
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#segments"
              className="btn btn-ghost magnetic hero-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('segments');
              }}
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <a
            href="#paket"
            className="hero-price-link animate-fade-up delay-3"
            onClick={(e) => {
              e.preventDefault();
              track('hero_price_link');
              scrollToSection('paket');
            }}
          >
            {hero.priceLink}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <p className="hero-reassurance animate-fade-up delay-3">{hero.reassurance}</p>

          <ul className="hero-trust animate-fade-up delay-3">
            {hero.trust.map((item) => (
              <li key={item}>
                <span className="hero-trust-check" aria-hidden="true">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="hero-figure">
          <img
            src="/portrait.webp"
            alt={hero.portraitAlt}
            width="681"
            height="1024"
            className="hero-portrait"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>{hero.byline}</figcaption>
        </figure>
      </div>
    </section>
  );
}
