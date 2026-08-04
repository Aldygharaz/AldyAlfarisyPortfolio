import { useEffect } from 'react';

export const useMouseGlow = () => {
  useEffect(() => {
    const isTouch = () => {
      if (typeof window === 'undefined') return false;
      return window.innerWidth < 1024 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
    };

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

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      if (rafMouse) cancelAnimationFrame(rafMouse);
    };
  }, []);
};
