import React, { useRef, useState, useEffect, Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function IntroHero() {
  const introHeroRef = useRef<HTMLElement>(null);
  const introContentRef = useRef<HTMLDivElement>(null);
  const introScrollRef = useRef<HTMLDivElement>(null);
  const introDecorRef = useRef<HTMLDivElement>(null);
  const [showSpline, setShowSpline] = useState(false);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    // Dynamically show/hide the heavy 3D Spline model based on screen size
    const handleResize = () => {
      setShowSpline(window.innerWidth >= 1024);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    
    if (introHeroRef.current) {
      observer.observe(introHeroRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={introHeroRef} className="intro-hero" id="introHero">
      <div className="intro-grid" aria-hidden="true" />
      
      {/* Robot positioned on the right */}
      <div
        ref={introDecorRef}
        className="spline-container absolute top-0 left-[40%] right-[-10%] bottom-[-60px] z-0 pointer-events-none"
        style={{ display: showSpline ? 'block' : 'none' }}
        aria-hidden="true"
      >
        {showSpline && isInView && (
          <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
            <Spline scene="https://prod.spline.design/uy4WJ7BqNgnoKwdm/scene.splinecode" />
          </Suspense>
        )}
      </div>

      <div className="intro-content pointer-events-none text-left w-full max-w-[1120px] px-8 mx-auto flex flex-col justify-center items-start z-10" ref={introContentRef}>
        <span className="intro-eyebrow animate-fade-up text-[var(--accent-blue)] mb-6 font-semibold flex items-center gap-3">
          <span className="intro-eyebrow-dot w-2 h-2 bg-[var(--accent-blue)] rounded-full"></span>
          PORTFOLIO 2026
        </span>
        <h1 className="intro-name animate-fade-up delay-1 text-[clamp(3rem,7vw,6rem)] leading-[1.1]">
          ALDY ALFARISY<em>.</em>
        </h1>
        <h2 className="animate-fade-up delay-1 text-[clamp(18px,3vw,24px)] font-semibold text-[var(--text-heading)] mt-3">
          Product Operator & Digital Solutions Architect
        </h2>
        <h3 className="animate-fade-up delay-2 text-[clamp(16px,2.5vw,20px)] font-medium text-[var(--text)] mt-3 leading-[1.4]">
          Mengubah Kebutuhan Bisnis Jadi Produk, Lewat Orkestrasi AI.
        </h3>
        <p className="intro-role animate-fade-up delay-2 mt-6 text-[clamp(16px,2vw,18px)] max-w-[600px] leading-[1.6] normal-case text-[var(--text)]">
          Saya merancang arsitektur dan alur kerja produk, lalu mengarahkan AI Agent untuk mengeksekusinya, mulai dari sistem Point of Sale hingga platform operasional <em>full-stack</em>. Hasilnya: produk nyata yang siap pakai, dengan proses pengembangan yang jauh lebih efisien.
        </p>
        <div className="animate-fade-up delay-3 mt-10 pointer-events-auto flex items-center gap-6">
          <a href="#work" className="btn btn-primary magnetic inline-flex items-center px-8 py-4" onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Lihat Portofolio
          </a>
          <div className="intro-social-wrap flex flex-col gap-1">
            <span className="intro-social-label text-xs text-[var(--text-muted)] font-medium">Terhubung juga di</span>
            <div className="intro-social-links flex gap-3">
              <a href="https://www.youtube.com/channel/UCiIKlj45e1euRR1Y-wxMz1w" target="_blank" rel="noopener noreferrer" className="intro-social-link text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://www.linkedin.com/in/aldyalfarisy/" target="_blank" rel="noopener noreferrer" className="intro-social-link text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]" aria-label="LinkedIn">
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
