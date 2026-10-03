import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let rafId: number;

      const lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      });

      lenisRef.current = lenisInstance;
      if (typeof window !== 'undefined') {
        (window as unknown as { lenis?: Lenis }).lenis = lenisInstance;
      }

      function raf(time: number) {
        lenisRef.current?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (typeof window !== 'undefined') {
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return lenisRef;
};
