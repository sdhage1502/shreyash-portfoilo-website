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
        <div className="reveal mb-12 lg:mb-20">
          <p className="section-label">The Workflow</p>
          <h2 className="section-heading">Pipeline <span className="text-[var(--accent)]">&</span> Process</h2>
          <p className="text-lg font-light text-white/50 max-w-[600px] mt-6">
            A disciplined, phase-based pipeline focused on performance and industrial-grade quality.
          </p>
        </div>

        {/* ── Minimal Phase Steppers with Proper Icons ─────── */}
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-16">
          
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
                
                <p className="text-[13px] md:text-[14px] font-medium leading-[1.6] text-white/30 group-hover:text-white/50 transition-colors duration-500 max-w-[280px]">
                  {step.desc}
                </p>

                <div className="mt-10 flex items-center gap-3 opacity-[0.05] group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-white/[0.02] border border-white/10 rounded-sm backdrop-blur-md transition-all group-hover:border-[#C8FF00]/20 group-hover:bg-[#C8FF00]/5">
                    <span className="font-mono text-[9px] text-[var(--accent)] font-black tracking-[0.25em] whitespace-nowrap">PHASE_0{i + 1}</span>
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
