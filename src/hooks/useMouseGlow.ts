import { useEffect, type RefObject } from 'react';

export const useMouseGlow = (glowRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const isTouch = () => {
      if (typeof window === 'undefined') return false;
      return window.innerWidth < 1024 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
    };

    let rafMouse: number | null = null;
    
    const updateMousePos = (e: MouseEvent) => {
      if (!glowRef.current) return;
      if (rafMouse) cancelAnimationFrame(rafMouse);
      
      rafMouse = requestAnimationFrame(() => {
        // Direct DOM manipulation bypasses React state and root style recalculation
        glowRef.current!.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      });
    };

    if (!isTouch()) {
      window.addEventListener('mousemove', updateMousePos, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      if (rafMouse) cancelAnimationFrame(rafMouse);
    };
  }, [glowRef]);
};
