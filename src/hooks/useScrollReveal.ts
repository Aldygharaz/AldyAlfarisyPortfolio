import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
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
    
    // Function to observe all current .reveal elements
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => {
        io.observe(el);
      });
    };

    // Initial observation
    observeAll();

    // Debounce MutationObserver to prevent stalling the main thread on every tiny DOM change
    let timeoutId: number | null = null;
    const mutationObserver = new MutationObserver(() => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        observeAll();
        timeoutId = null;
      }, 300);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mutationObserver.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
};
