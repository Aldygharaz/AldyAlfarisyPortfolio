import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target); // Unobserve after revealing once
          }
        });
      },
      { threshold: 0.15 }
    );
    
    revealEls.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);
};
