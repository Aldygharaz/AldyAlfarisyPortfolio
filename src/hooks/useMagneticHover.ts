import { useEffect } from 'react';

export const useMagneticHover = () => {
  useEffect(() => {
    const isTouch = () => {
      if (typeof window === 'undefined') return false;
      return window.innerWidth < 1024 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
    };

    if (isTouch()) return;

    let activeBtn: HTMLElement | null = null;
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('.magnetic') as HTMLElement | null;
      
      if (target) {
        activeBtn = target;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          if (!activeBtn) return;
          const rect = activeBtn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          activeBtn.style.transform = `translate(${x * 0.1}px, ${y * 0.15}px)`;
        });
      } else if (activeBtn) {
        if (rafId) cancelAnimationFrame(rafId);
        activeBtn.style.transform = 'translate(0,0)';
        activeBtn = null;
      }
    };

    const handleMouseLeave = () => {
      if (activeBtn) {
        if (rafId) cancelAnimationFrame(rafId);
        activeBtn.style.transform = 'translate(0,0)';
        activeBtn = null;
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
      if (activeBtn) {
        activeBtn.style.transform = 'translate(0,0)';
      }
    };
  }, []);
};
