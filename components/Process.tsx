'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Layout, 
  Code2, 
  Rocket 
} from 'lucide-react';
import { processSteps } from '../data/portfolioData';

/**
 * Process Component - Refined Icon-Based Minimal Steppers
 * Uses high-quality Lucide icons instead of step numbers for a 
 * more professional, visual-first software product aesthetic.
 */
const Process: React.FC = () => {
  // Mapping of icons to process steps
  const stepIcons = [
    <MessageSquare key="icon-1" size={18} />,
    <Layout key="icon-2" size={18} />,
    <Code2 key="icon-3" size={18} />,
    <Rocket key="icon-4" size={18} />
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden bg-[#080808]">
      
      {/* Background Decor - Minimal Lime Fog */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30vw] h-[20vh] bg-[#C8FF00]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)] relative z-10">
        
        {/* Compact, Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-[500px]">
             <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#C8FF00] font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-4"
            >
              05 · THE WORKFLOW
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black italic tracking-tight text-white uppercase leading-none"
            >
              Streamlined <br/><span className="text-[#C8FF00]/40">Production.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[13px] md:text-[14px] font-medium text-white/30 max-w-[280px] leading-relaxed italic border-l border-white/10 pl-6 h-max"
          >
            "High-performance architecture delivered through a disciplined, minimal phase-based pipeline."
          </motion.div>
        </div>

        {/* ── Minimal Phase Steppers with Proper Icons ─────── */}
        
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-white/[0.05] pointer-events-none" />

          {processSteps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative group h-full flex flex-col items-start"
            >
              {/* Stepper Node (Technical-Luxury Style with Icons) */}
              <div className="relative mb-10 flex items-center justify-center">
                 {/* Outer Ring */}
                 <div className="w-14 h-14 rounded-full border border-white/[0.08] flex items-center justify-center transition-all duration-700 bg-white/[0.02] group-hover:bg-[#C8FF00]/5 group-hover:border-[#C8FF00]/30 group-hover:scale-110">
                    <span className="text-white/40 group-hover:text-[#C8FF00] transition-all duration-500">
                      {stepIcons[i]}
                    </span>
                 </div>
                 {/* Inner Glowing Point (Center) */}
                 <div className="absolute inset-0 m-auto w-1 h-1 bg-[#C8FF00] rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_#C8FF00]" />
              </div>

              {/* Content Body */}
              <div className="pl-1">
                <h3 className="text-[20px] md:text-[22px] font-black italic text-white tracking-tight mb-4 leading-tight group-hover:text-[#C8FF00] transition-colors duration-500">
                  {step.title}
                </h3>
                
                <p className="text-[13px] md:text-[14px] font-medium leading-[1.6] text-white/30 group-hover:text-white/50 transition-colors duration-500 max-w-[240px]">
                  {step.desc}
                </p>

                <div className="mt-10 flex items-center gap-3 opacity-[0.05] group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-white/[0.02] border border-white/[0.08] backdrop-blur-md transition-all group-hover:border-[#C8FF00]/20 group-hover:bg-[#C8FF00]/5">
                    <span className="font-mono text-[8px] md:text-[9px] text-[#C8FF00] font-black tracking-[0.25em] whitespace-nowrap">PHASE_0{i + 1}</span>
                  </div>
                  <div className="w-8 h-[1px] bg-gradient-to-r from-[#C8FF00]/30 to-transparent" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
