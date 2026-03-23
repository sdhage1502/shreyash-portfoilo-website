'use client';

import React from 'react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="work" className="py-[clamp(5rem,10vw,10rem)] relative overflow-hidden bg-black/20">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        <div className="reveal mb-[clamp(3rem,6vw,5rem)]">
          <p className="section-label">03 · Experience</p>
          <h2 className="section-heading">
            Building Real Products<br />Expertly.
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className="reveal relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group"
            >
              {/* Sidebar Info */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-[12px] font-mono text-white/20 uppercase tracking-[0.2em] mb-4">
                    {exp.period}
                  </div>
                  <h3 className="text-[32px] font-extrabold text-[#C8FF00] tracking-tight leading-none mb-4">
                    {exp.company}
                  </h3>
                  <div className="text-[18px] font-medium text-white/80">
                    {exp.role}
                  </div>
                </div>
              </div>

              {/* Main Description */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <p className="text-[clamp(16px,1.2vw,20px)] font-light leading-relaxed text-white/60">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[12px] font-mono text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Divider */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.05] -translate-y-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
