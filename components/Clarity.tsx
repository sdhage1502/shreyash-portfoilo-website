'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClaritySnippet() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  useEffect(() => {
    if (clarityId && typeof window !== 'undefined') {
      try {
        Clarity.init(clarityId);
      } catch (error) {
        console.error('Clarity init failed:', error);
      }
    }
  }, [clarityId]);

  return null;
}
