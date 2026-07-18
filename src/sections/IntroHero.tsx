import { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function IntroHero() {
  const introHeroRef = useRef<HTMLElement>(null);
  const introContentRef = useRef<HTMLDivElement>(null);
  const introScrollRef = useRef<HTMLDivElement>(null);
  const introDecorRef = useRef<HTMLDivElement>(null);
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    // Dynamically show/hide the heavy 3D Spline model based on screen size
    const handleResize = () => {
      setShowSpline(window.innerWidth >= 1024);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={introHeroRef} className="intro-hero" id="introHero">
      <div className="intro-grid" aria-hidden="true" />
      
      <style>{`
        .spline-container-styled {
          position: absolute;
          top: 0;
          left: 40%;
          right: -10%;
          bottom: -60px;
          z-index: 0;
          mix-blend-mode: multiply;
        }
        
        .intro-content-styled {
          pointer-events: none;
          text-align: left;
          width: 100%;
          max-width: 1120px;
          padding: 0 32px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          z-index: 1;
        }

        .intro-eyebrow-styled {
          color: var(--accent-blue);
          margin-bottom: 24px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .intro-eyebrow-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-blue);
          border-radius: 50%;
        }

        .intro-name-styled {
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 1.1;
        }

        .intro-title-styled {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 600;
          color: var(--text-heading);
          margin-top: 12px;
        }

        .intro-role-styled {
          margin-top: 24px;
          font-size: clamp(16px, 2vw, 18px);
          max-width: 600px;
          line-height: 1.6;
          text-transform: none;
          color: var(--text);
        }

        .intro-actions-styled {
          margin-top: 40px;
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .intro-btn-styled {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
        }

        .intro-social-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .intro-social-label {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .intro-social-links {
          display: flex;
          gap: 12px;
        }

        .intro-social-link {
          color: var(--text-muted);
          transition: color 0.2s;
        }
        
        .intro-social-link:hover {
          color: var(--text);
        }
      `}</style>
      
      {/* Robot positioned on the right */}
      <div
        ref={introDecorRef}
        className="spline-container spline-container-styled"
        style={{ display: showSpline ? 'block' : 'none' }}
        aria-hidden="true"
      >
        {showSpline && <Spline scene="https://prod.spline.design/uy4WJ7BqNgnoKwdm/scene.splinecode" />}
      </div>

      <div className="intro-content intro-content-styled" ref={introContentRef}>
        <span className="intro-eyebrow animate-fade-up intro-eyebrow-styled">
          <span className="intro-eyebrow-dot"></span>
          PORTFOLIO 2026
        </span>
        <h1 className="intro-name animate-fade-up delay-1 intro-name-styled">
          ALDY ALFARISY<em>.</em>
        </h1>
        <h2 className="animate-fade-up delay-1 intro-title-styled">
          Digital Solutions Builder (AI-Powered) @ Sokara
        </h2>
        <p className="intro-role animate-fade-up delay-2 intro-role-styled">
          Saya bantu ide kamu jadi produk digital nyata yang siap menghasilkan profit. Mulai dari aplikasi web, sistem POS, hingga produk full-stack lainnya, semuanya dibangun secara efisien dengan bantuan AI Agent tanpa mengorbankan kualitas.
        </p>
        <div className="animate-fade-up delay-3 intro-actions-styled">
          <a href="#work" className="btn btn-primary magnetic intro-btn-styled" onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Lihat Karya Saya
          </a>
          <div className="intro-social-wrap">
            <span className="intro-social-label">Terhubung juga di</span>
            <div className="intro-social-links">
              <a href="https://www.youtube.com/channel/UCiIKlj45e1euRR1Y-wxMz1w" target="_blank" rel="noopener noreferrer" className="intro-social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://www.linkedin.com/in/aldyalfarisy/" target="_blank" rel="noopener noreferrer" className="intro-social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="intro-scroll" ref={introScrollRef}>
        <span>Scroll</span>
        <div className="intro-scroll-track">
          <div className="intro-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
