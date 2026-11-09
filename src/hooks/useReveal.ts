import { useEffect } from 'react';

// Content is visible by default. Only `.reveal` blocks below the fold at load are
// hidden, then slide in once they enter the viewport.
export const useReveal = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('is-waiting');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight - 20) {
        el.classList.add('is-waiting');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
};
