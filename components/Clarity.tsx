'use client';

import { useEffect } from 'react';

export default function ClaritySnippet() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

    // Bail early if no ID configured
    if (!clarityId || typeof window === 'undefined') return;

    // Dynamic import: if ad blockers block the @microsoft/clarity module,
    // the catch() handles it gracefully instead of crashing the component tree.
    import('@microsoft/clarity')
      .then((ClarityModule: any) => {
        const Clarity = ClarityModule?.default ?? ClarityModule;
        if (typeof Clarity?.init === 'function') {
          Clarity.init(clarityId);
        }
      })
      .catch(() => {
        // Silently fail — Clarity blocked by ad blocker or privacy extension.
        // This is expected for US users with uBlock Origin, Brave Shields, etc.
        if (process.env.NODE_ENV === 'development') {
          console.warn('[Clarity] SDK blocked or failed to load — analytics disabled.');
        }
      });
  }, []);

  return null;
}
