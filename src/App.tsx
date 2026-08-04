import { useRef } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import IntroHero from './sections/IntroHero';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Work from './sections/Work';
import Quadrant from './sections/Quadrant';
import Skills from './sections/Skills';
import Process from './sections/Process';
import Orbit from './sections/Orbit';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import SideNav from './components/SideNav';
import { useMouseGlow } from './hooks/useMouseGlow';
import { useLenisScroll } from './hooks/useLenisScroll';
import { useScrollChrome } from './hooks/useScrollChrome';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useMagneticHover } from './hooks/useMagneticHover';

function App() {
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useMouseGlow();
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
      <div className="global-mouse-glow" aria-hidden="true" />
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
      <Hero />
      <Marquee />
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
    </div>
  );
}

export default App;
