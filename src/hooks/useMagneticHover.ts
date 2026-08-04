import { useEffect } from 'react';

export const useMagneticHover = () => {
  useEffect(() => {
    const isTouch = () => {
      if (typeof window === 'undefined') return false;
      return window.innerWidth < 1024 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
    };

    const magneticBtns = document.querySelectorAll<HTMLElement>('.magnetic');
    const magneticHandlers: { el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }[] = [];
    
    if (!isTouch()) {
      magneticBtns.forEach((btn) => {
        let rafId: number | null = null;
        
        const move = (e: MouseEvent) => {
          if (rafId) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.15}px)`;
          });
        };
        
        const leave = () => { 
          if (rafId) cancelAnimationFrame(rafId);
          btn.style.transform = 'translate(0,0)'; 
        };
        
        btn.addEventListener('mousemove', move, { passive: true });
        btn.addEventListener('mouseleave', leave);
        magneticHandlers.push({ el: btn, move, leave });
      });
    }

    return () => {
      magneticHandlers.forEach((h) => {
        h.el.removeEventListener('mousemove', h.move);
        h.el.removeEventListener('mouseleave', h.leave);
      });
    };
  }, []);
};
