'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Lenis: any;
  }
}

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initLenis = async () => {
      // Lenis is loaded via script in layout.js, so we check for window.Lenis
      const checkLenis = () => {
        if (window.Lenis) {
          const lenis = new window.Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
          });

          const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);
          return true;
        }
        return false;
      };

      if (!checkLenis()) {
        const interval = setInterval(() => {
          if (checkLenis()) clearInterval(interval);
        }, 100);
        setTimeout(() => clearInterval(interval), 5000); // 5s timeout
      }
    };

    initLenis();
  }, []);

  return null;
};

export default SmoothScroll;
