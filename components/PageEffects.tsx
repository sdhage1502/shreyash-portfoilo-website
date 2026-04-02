'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    /* ── Scroll Reveal (IntersectionObserver) ───── */
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.12 });

    // Set a small timeout to allow DOM to update after path change
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
      });
    }, 100);

    /* ── Magnetic buttons ───────────────────────── */
    const magnetics = document.querySelectorAll('.magnetic');
    magnetics.forEach((btn) => {
      btn.addEventListener('mousemove', (e: any) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.25;
        (btn as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        (btn as HTMLElement).style.transform = '';
      });
    });

    /* ── Scroll Progress Bar ────────────────────── */
    const scrollHandler = () => {
      const bar = document.getElementById('scroll-bar');
      if (bar) {
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = pct + '%';
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    /* ── Custom Cursor Ring ─────────────────────── */
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const ring = document.querySelector('.cursor-ring') as HTMLElement;
    const cursorHandler = (e: MouseEvent) => {
      if (cursor && ring) {
        cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
        ring.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    };
    window.addEventListener('mousemove', cursorHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousemove', cursorHandler);
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
