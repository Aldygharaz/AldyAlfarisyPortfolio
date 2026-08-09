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

    // Use MutationObserver to watch for new lazy-loaded elements
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
