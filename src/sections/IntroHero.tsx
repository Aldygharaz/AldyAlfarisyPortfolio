import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function IntroHero() {
  const introHeroRef = useRef<HTMLElement>(null);
  const introContentRef = useRef<HTMLDivElement>(null);
  const introScrollRef = useRef<HTMLDivElement>(null);
  const introDecorRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={introHeroRef} className="intro-hero" id="introHero">
      <div className="intro-grid" aria-hidden="true" />
      
      {/* Robot positioned on the right */}
      <div
        ref={introDecorRef}
        className="spline-container"
        style={{
          position: 'absolute',
          top: 0,
          left: '40%', /* Offset from the left to place it on the right side */
          right: '-10%', /* Push it slightly to the right to match "agak kanan dikit" */
          bottom: '-60px', /* Hide Spline logo */
          zIndex: 0,
          mixBlendMode: 'multiply', /* This makes the Spline's solid background blend seamlessly and reveals the grid */
        }}
        aria-hidden="true"
      >
        <Spline scene="https://prod.spline.design/uy4WJ7BqNgnoKwdm/scene.splinecode" />
      </div>

      <div className="intro-content" ref={introContentRef} style={{ pointerEvents: 'none', textAlign: 'left', width: '100%', maxWidth: '1120px', padding: '0 32px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', zIndex: 1 }}>
        <span className="intro-eyebrow animate-fade-up" style={{ color: 'var(--accent-blue)', marginBottom: '24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '50%' }}></span>
          PORTFOLIO 2026
        </span>
        <h1 className="intro-name animate-fade-up delay-1" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.1 }}>
          ALDY ALFARISY<em>.</em>
        </h1>
        <h2 className="animate-fade-up delay-1" style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 600, color: 'var(--text-heading)', marginTop: '12px' }}>
          Digital Solutions Builder (AI-Powered) @ Sokara
        </h2>
        <p className="intro-role animate-fade-up delay-2" style={{ marginTop: '24px', fontSize: 'clamp(16px, 2vw, 18px)', maxWidth: '600px', lineHeight: 1.6, textTransform: 'none', color: 'var(--text)' }}>
          Saya bantu ide kamu jadi produk digital nyata yang siap menghasilkan profit. Mulai dari aplikasi web, sistem POS, hingga produk full-stack lainnya, semuanya dibangun secara efisien dengan bantuan AI Agent tanpa mengorbankan kualitas.
        </p>
        <div style={{ marginTop: '40px', pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '24px' }} className="animate-fade-up delay-3">
          <a href="#work" className="btn btn-primary magnetic" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 32px' }} onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Lihat Karya Saya
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>Terhubung juga di</span>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.youtube.com/channel/UCiIKlj45e1euRR1Y-wxMz1w" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://www.linkedin.com/in/aldyalfarisy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="LinkedIn">
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
