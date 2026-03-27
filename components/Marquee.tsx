'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { marqueeItems } from '../data/portfolioData';

/**
 * Marquee Component - "Technical-Luxury Ticker" 
 * Redesigned for a more high-end, minimal, and refined feel.
 * Focuses on precision typography and subtle high-tech interactions.
 */
const Marquee: React.FC = () => {
  // Multiply items for a dense, seamless horizontal flow
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full py-10 md:py-14 overflow-hidden bg-[#080808] border-y border-white/[0.03]">
      
      {/* Premium Gradient Edge Masks (High-Fidelity Fade) */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#080808] via-[#080808]/90 to-transparent z-10 pointer-events-none" />

      {/* Subtle Background Glow Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[10vh] bg-[#C8FF00]/5 blur-[100px] pointer-events-none opacity-40" />

      <motion.div 
        className="flex gap-16 md:gap-24 whitespace-nowrap items-center"
        animate={{
          x: [0, -2500], // Controlled, high-fidelity linear scroll
        }}
        transition={{
          duration: 60, // Slower, more elegant motion
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={i} className="flex items-center gap-16 md:gap-24 group">
            
            {/* Technical Typography: Mono-spaced, Precise, High-Contrast */}
            <div className="flex flex-col items-start gap-1">
               {/* <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-white/10 group-hover:text-[#C8FF00]/40 transition-colors uppercase">
                 SYS.VERSION_2.0
               </span> */}
               <span className="text-[18px] md:text-[24px] font-black tracking-[0.1em] uppercase text-white/30 group-hover:text-white group-hover:scale-[1.05] transition-all duration-700 cursor-default select-none group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                 {item}
               </span>
            </div>
            
            {/* Minimalist Tech-Stepper (Separator) */}
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-6 bg-white/[0.05] group-hover:bg-[#C8FF00]/30 transition-colors" />
              <div className="flex flex-col gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/[0.08] group-hover:bg-[#C8FF00] group-hover:shadow-[0_0_10px_#C8FF00] transition-colors" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/[0.03] group-hover:bg-[#7C3AED] group-hover:shadow-[0_0_10px_#7C3AED] transition-colors" />
              </div>
              <div className="h-[2px] w-6 bg-white/[0.05] group-hover:bg-[#C8FF00]/30 transition-colors" />
            </div>

          </div>
        ))}
      </motion.div>

      {/* Nano Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8FF00]/5 to-transparent" />
    </div>
  );
};

export default Marquee;
