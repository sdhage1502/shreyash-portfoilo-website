'use client';

import React, { useEffect } from 'react';
import FloatingLines from './FloatingLines';

declare global {
  interface Window {
    animateHeroEntrance: () => void;
  }
}

const Hero: React.FC = () => {
  useEffect(() => {
    /* ── Hero entrance (called by loader on exit) ─────── */
    window.animateHeroEntrance = () => {
      function reveal(selector: string, delay: number, childDelay?: number) {
        setTimeout(() => {
          document.querySelectorAll(selector).forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), i * (childDelay || 0));
          });
        }, delay);
      }
      reveal('.hero-name .word',   0,   130);
      reveal('.hero-tagline',      480);
      reveal('.hero-keywords',     620);
      reveal('.hero-body',         720);
      reveal('.hero-ctas',         860);
      reveal('.hero-badge',        980);
      reveal('.scroll-indicator',  1100);
      reveal('#header .nav-logo',  1180);
      reveal('#header .nav-socials', 1180);
      reveal('#header .nav-burger',  1180);
      reveal('#header .nav-links a', 1220, 80);
      reveal('#header .nav-cta',   1500);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-[var(--gutter)] relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-[1] opacity-50">
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          lineCount={[5, 5, 5]}
          lineDistance={[5, 5, 5]}
          linesGradient={['#C8FF00', '#7C3AED', '#0F766E']}
          topWavePosition={{ x: 10, y: 0.5, rotate: -0.4 }}
          middleWavePosition={{ x: 5, y: 0, rotate: 0.2 }}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      <div className="max-w-[var(--container-max)] mx-auto w-full relative z-[2] hero-content">
        
        <h1 className="hero-name text-[clamp(48px,10vw,140px)] sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] 2xl:text-[160px] font-extrabold leading-[0.85] tracking-[-0.05em] mb-6 sm:mb-8 md:mb-10 xl:mb-12">
          <span className="word">Shreyash</span>
          <br className="md:hidden" />
          <span className="word ml-0 md:ml-4 lg:ml-6">Dhage</span>
        </h1>

        <p className="hero-tagline text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium leading-[1.3] text-white/90 max-w-[90%] sm:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] mb-6 sm:mb-8 md:mb-10">
          Next.js developer who builds fast, SEO-optimized web apps —
          with AI tools, n8n automation, and MCP integration built in.
        </p>

        {/* Keyword pills — visible to users AND search bots */}
        <div className="hero-keywords flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <span className="hero-kw text-xs sm:text-sm">Next.js</span>
          <span className="hero-kw-sep hidden sm:inline">·</span>
          <span className="hero-kw text-xs sm:text-sm">TypeScript</span>
          <span className="hero-kw-sep hidden sm:inline">·</span>
          <span className="hero-kw text-xs sm:text-sm">AI-Assisted Dev</span>
          <span className="hero-kw-sep hidden md:inline">·</span>
          <span className="hero-kw text-xs sm:text-sm">n8n Automation</span>
          <span className="hero-kw-sep hidden lg:inline">·</span>
          <span className="hero-kw text-xs sm:text-sm">MCP Servers</span>
          <span className="hero-kw-sep hidden xl:inline">·</span>
          <span className="hero-kw text-xs sm:text-sm">Firebase</span>
          <span className="hero-kw-sep hidden xl:inline">·</span>
          <span className="hero-kw text-xs sm:text-sm">SEO Ready</span>
        </div>

        <p className="hero-body text-sm sm:text-base md:text-lg lg:text-xl font-light leading-[1.65] text-white/50 max-w-full sm:max-w-[640px] md:max-w-[720px] lg:max-w-[800px] mb-10 sm:mb-12 lg:mb-16">
          Next.js developer from Pune. 1+ year in production.<br className="hidden sm:block" />
          I build product websites, custom CMSs, and AI-powered tools —
          using modern AI development practices, n8n for automation,
          and Firebase for backend. SEO and GA4 built in from day one.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-start sm:items-center w-full sm:w-auto">
          <a href="https://cal.com/shreyash_15"
             target="_blank" rel="noopener noreferrer"
             className="cta-primary magnetic w-full sm:w-auto text-center touch-manipulation min-h-[48px] px-8 sm:px-10 py-3 sm:py-4">
            Book a Free Call
          </a>
          <a href="#work" className="cta-secondary magnetic w-full sm:w-auto text-center touch-manipulation min-h-[48px] px-8 sm:px-10 py-3 sm:py-4 mt-2 sm:mt-0">
            View My Work ↓
          </a>
        </div>
      </div>

      <div className="hero-badge absolute left-[var(--gutter)] bottom-32 flex items-center gap-3">
        <span className="badge-dot"></span>
        <span className="text-[11px] font-mono tracking-[0.1em] text-white/30 truncate">
          Currently @ Meru Technosoft · Available for freelance 2025
        </span>
      </div>

      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
