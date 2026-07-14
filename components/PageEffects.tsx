'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Bail if running in a non-browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    /* ── Scroll Reveal (IntersectionObserver) ───── */
    let revealObserver: IntersectionObserver | null = null;

    // Guard: IntersectionObserver may not exist in old browsers
    // or privacy-hardened US corporate environments
    if (typeof IntersectionObserver !== 'undefined') {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.12 });

      // Set a small timeout to allow DOM to update after path change
      setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((el) => {
          revealObserver?.observe(el);
        });
      }, 100);
    } else {
      // Fallback: if IntersectionObserver is unavailable, reveal all elements immediately
      setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((el) => {
          el.classList.add('in-view');
        });
      }, 100);
    }

    /* ── Magnetic buttons ───────────────────────── */
    const magnetics = document.querySelectorAll('.magnetic');
    const magneticHandlers: Array<{ el: Element; move: (e: Event) => void; leave: () => void }> = [];

    magnetics.forEach((btn) => {
      const moveHandler = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const r = btn.getBoundingClientRect();
        const x = (mouseEvent.clientX - r.left - r.width / 2) * 0.25;
        const y = (mouseEvent.clientY - r.top - r.height / 2) * 0.25;
        (btn as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      };
      const leaveHandler = () => {
        (btn as HTMLElement).style.transform = '';
      };

      btn.addEventListener('mousemove', moveHandler);
      btn.addEventListener('mouseleave', leaveHandler);
      magneticHandlers.push({ el: btn, move: moveHandler, leave: leaveHandler });
    });

    /* ── Scroll Progress Bar ────────────────────── */
    const scrollHandler = () => {
      const bar = document.getElementById('scroll-bar');
      if (bar) {
        const scrollableHeight = document.body.scrollHeight - window.innerHeight;
        // Guard against division by zero (page shorter than viewport)
        const pct = scrollableHeight > 0
          ? (window.scrollY / scrollableHeight) * 100
          : 0;
        bar.style.width = pct + '%';
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    /* ── Custom Cursor Ring ─────────────────────── */
    const cursor = document.querySelector('.cursor') as HTMLElement | null;
    const ring = document.querySelector('.cursor-ring') as HTMLElement | null;
    const cursorHandler = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      if (ring) {
        ring.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    };
    window.addEventListener('mousemove', cursorHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousemove', cursorHandler);
      revealObserver?.disconnect();

      // Clean up magnetic event listeners
      magneticHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [pathname]);

  return null;
}
