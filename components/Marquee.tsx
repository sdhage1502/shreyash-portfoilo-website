'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { marqueeItems } from '../data/portfolioData';

/**
 * Marquee Component - Redesigned using Stitch MCP "Cyber Editorial" System
 * Features: Kinetic typography, geometric separators, and neon-architect glows.
 */
const Marquee: React.FC = () => {
  // Triple items to ensure seamless infinite scrolling on all screen sizes
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full py-16 md:py-24 overflow-hidden bg-[#080808] border-y border-white/[0.03] group">
      
      {/* ── Stitch Visual Accents ─────────────────────────── */}
      
      {/* Background Ambient Glows (Neon Lime & Electric Purple) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[20vh] bg-[#C8FF00]/5 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[40vw] h-[20vh] bg-[#7C3AED]/5 blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Cyber Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]" 
           style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px)' }} />

      {/* Editorial Edge Masks (Fade Out) */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#080808] via-[#080808]/90 to-transparent z-10 pointer-events-none" />

      {/* ── Kinetic Marquee Content ────────────────────────── */}
      
      <motion.div 
        className="flex gap-20 md:gap-32 whitespace-nowrap items-center"
        animate={{
          x: [0, -2800], // Continuous linear scroll
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={i} className="flex items-center gap-20 md:gap-32">
            
            {/* Kinetic Architect Typography: Italic, Max-Weight, High-Impact */}
            <span className="text-[42px] md:text-[84px] font-[900] italic tracking-[-0.06em] uppercase text-white/[0.06] transition-all duration-700 hover:text-white hover:scale-110 cursor-default select-none">
              {item}
            </span>
            
            {/* Geometric Technical Separator (Stitch Style) */}
            <div className="flex items-center gap-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <span className="text-[#C8FF00] font-mono text-sm md:text-lg font-bold">/</span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_10px_#C8FF00]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
              </div>
              <span className="text-[#7C3AED] font-mono text-sm md:text-lg font-bold">/</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
};

export default Marquee;
