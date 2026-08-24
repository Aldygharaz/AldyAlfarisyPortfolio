import { useRef } from 'react';
import { Suspense, lazy } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import IntroHero from './sections/IntroHero';
import Marquee from './sections/Marquee';
import SideNav from './components/SideNav';
import { useMouseGlow } from './hooks/useMouseGlow';
import { useLenisScroll } from './hooks/useLenisScroll';
import { useScrollChrome } from './hooks/useScrollChrome';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useMagneticHover } from './hooks/useMagneticHover';

// Lazy loaded components for below-the-fold content
const Work = lazy(() => import('./sections/Work'));
const Quadrant = lazy(() => import('./sections/Quadrant'));
const Skills = lazy(() => import('./sections/Skills'));
const Process = lazy(() => import('./sections/Process'));
const Orbit = lazy(() => import('./sections/Orbit'));
const About = lazy(() => import('./sections/About'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useMouseGlow(glowRef);
  const lenisRef = useLenisScroll();
  useScrollChrome(navRef, scrollProgressRef, backToTopRef);
  useScrollReveal();
  useMagneticHover();

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <div ref={glowRef} className="global-mouse-glow" aria-hidden="true" />
      <style>{`
        html.lenis { height: auto; }
      `}</style>
      <div ref={scrollProgressRef} className="scroll-progress" />
      <button ref={backToTopRef} className="back-to-top" onClick={scrollToTop} aria-label="Kembali ke atas">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

      <SideNav />

      <Navigation ref={navRef} />
      <IntroHero />
      <Marquee />
      <Suspense fallback={<div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--text-muted)' }}>Memuat bagian selanjutnya...</div>}>
        <Work />
        <Quadrant />
        <Skills />
        <Process />
        <Orbit />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
