'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Lenis: any;
  }
}

const SmoothScroll: React.FC = () => {
  const rafIdRef = useRef<number | null>(null);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initLenis = () => {
      // Lenis is loaded via CDN script in layout.tsx.
      // If the CDN is blocked by an ad blocker, window.Lenis won't exist.
      const checkLenis = (): boolean => {
        if (typeof window.Lenis === 'function') {
          try {
            const lenis = new window.Lenis({
              duration: 1.4,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              smooth: true,
            });

            lenisRef.current = lenis;

            const raf = (time: number) => {
              lenis.raf(time);
              rafIdRef.current = requestAnimationFrame(raf);
            };
            rafIdRef.current = requestAnimationFrame(raf);
            return true;
          } catch {
            // Lenis constructor failed — degrade gracefully to native scroll.
            if (process.env.NODE_ENV === 'development') {
              console.warn('[SmoothScroll] Lenis initialization failed — falling back to native scroll.');
            }
            return true; // Stop retrying
          }
        }
        return false;
      };

      if (!checkLenis()) {
        // Poll for Lenis availability (CDN may load late)
        const interval = setInterval(() => {
          if (checkLenis()) clearInterval(interval);
        }, 100);
        // Give up after 5 seconds — CDN is likely blocked
        setTimeout(() => clearInterval(interval), 5000);
      }
    };

    initLenis();

    return () => {
      // Cancel the animation frame loop
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      // Destroy Lenis instance if it exists
      if (lenisRef.current?.destroy) {
        try {
          lenisRef.current.destroy();
        } catch {
          // Ignore cleanup errors
        }
        lenisRef.current = null;
      }
    };
  }, []);

  return null;
};

export default SmoothScroll;
