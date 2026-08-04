import { useEffect, type RefObject } from 'react';

export const useScrollChrome = (
  navRef: RefObject<HTMLElement | null>,
  scrollProgressRef: RefObject<HTMLDivElement | null>,
  backToTopRef: RefObject<HTMLButtonElement | null>
) => {
  useEffect(() => {
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
    updateChrome(); // Initial check

    return () => {
      window.removeEventListener('scroll', updateChrome);
      if (rafScroll) cancelAnimationFrame(rafScroll);
    };
  }, [navRef, scrollProgressRef, backToTopRef]);
};
