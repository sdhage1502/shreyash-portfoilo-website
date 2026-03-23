'use client';

import React from 'react';
import { processSteps } from '../data/portfolioData';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-[clamp(5rem,10vw,10rem)] relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        <div className="reveal mb-[clamp(3rem,6vw,6rem)]">
          <p className="section-label">05 · My Process</p>
          <h2 className="section-heading">How I build.</h2>
          <p className="text-[clamp(16px,1.2vw,20px)] font-light text-white/40 max-w-[600px] leading-relaxed">
            I don&apos;t just code — I build production-ready systems that solve problems. 
            Here is how we get there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div 
              key={i} 
              className="reveal process-card p-10 bg-white/[0.03] border border-white/5 rounded-2xl relative group hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="text-[12px] font-mono text-[#C8FF00] tracking-[0.2em] mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {step.id}
              </div>
              <h3 className="text-[22px] font-extrabold text-white tracking-tight mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-[15px] font-light leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                {step.desc}
              </p>
              
              {/* Connector line for desktop */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
