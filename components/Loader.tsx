'use client';

import React, { useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

declare global {
  interface Window {
    animateHeroEntrance: () => void;
  }
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(true);

  useEffect(() => {
    /* ── Loader Config (Change 2) ────────────────── */
    const WORDS: string[] = [
      'NEXT.JS',
      'TYPESCRIPT',
      'REACT',
      'AI TOOLS',
      'n8n',
      'MCP SERVERS',
      'FIREBASE',
      'MONGODB',
      'AZURE',
      'BLOCKCHAIN',
      'BUILDER',
      'PUNE',
    ];
    const FADE_DURATION = 180;  
    const HOLD_DURATION = 320;  
    const GAP_DURATION = 60;   
    const EXIT_DELAY = 380;  
    const PANEL_DURATION = 1100;

    const loader = document.getElementById('loader');
    const wordEl = document.getElementById('loader-word');
    const barEl = document.getElementById('loader-bar');
    const total = WORDS.length;
    let index = 0;

    if (!loader || !wordEl || !barEl) return;

    function showWord() {
      if (index >= total) {
        setTimeout(exitLoader, EXIT_DELAY);
        return;
      }

      if (barEl) barEl.style.width = ((index + 1) / total * 100) + '%';
      if (wordEl) wordEl.classList.remove('visible');

      setTimeout(() => {
        if (wordEl) {
          wordEl.textContent = WORDS[index++];
          wordEl.classList.add('visible');
        }

        setTimeout(() => {
          if (wordEl) wordEl.classList.remove('visible');
          setTimeout(showWord, GAP_DURATION);
        }, HOLD_DURATION);
      }, FADE_DURATION);
    }

    function exitLoader() {
      if (barEl) barEl.style.width = '100%';

      setTimeout(() => {
        if (loader) loader.classList.add('exit');

        if (window.animateHeroEntrance) {
          window.animateHeroEntrance();
        }

        setTimeout(() => {
          if (loader) loader.classList.add('done');
          onComplete(); 
          setIsMounted(false);
        }, PANEL_DURATION + 200);
      }, 200);
    }

    showWord();
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <div id="loader" aria-hidden="true" role="status">
      <div id="loader-panel-top"></div>
      <div id="loader-panel-bottom"></div>

      <div id="loader-center" className="flex items-center justify-center w-full relative z-[2]">
        <span id="loader-word"></span>
      </div>

      <div id="loader-bar-track">
        <div id="loader-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
