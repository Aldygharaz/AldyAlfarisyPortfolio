import { useEffect, useRef } from 'react';
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
import Lenis from 'lenis';

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = () => !window.matchMedia('(hover: hover)').matches;

    // Global mouse glow (throttled)
    let rafMouse: number | null = null;
    const updateMousePos = (e: MouseEvent) => {
      if (rafMouse) cancelAnimationFrame(rafMouse);
      rafMouse = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--global-mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--global-mouse-y', `${e.clientY}px`);
      });
    };
    if (!isTouch()) {
      window.addEventListener('mousemove', updateMousePos, { passive: true });
    }

    // Lenis smooth scroll
    if (!prefersReduced && !isTouch()) {
      lenisRef.current = new Lenis({
        duration: 1.1,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Scroll progress + nav shrink + back-to-top (throttled)
    let rafScroll: number | null = null;
    const updateChrome = () => {
      if (rafScroll) cancelAnimationFrame(rafScroll);
      rafScroll = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Nav
        navRef.current?.classList.toggle('scrolled', scrollY > 30);

        // Progress bar
        if (scrollProgressRef.current) {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? scrollY / docHeight : 0;
          scrollProgressRef.current.style.transform = `scaleX(${pct})`;
        }

        // Back to top
        backToTopRef.current?.classList.toggle('visible', scrollY > 480);
      });
    };

    window.addEventListener('scroll', updateChrome, { passive: true });
    updateChrome();

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('scroll', updateChrome);
      io.disconnect();
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      window.removeEventListener('mousemove', updateMousePos);
    };
  }, []);

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
