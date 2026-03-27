'use client';

import React from 'react';
import { bentoSkills } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-[clamp(5rem,12vw,12rem)] relative overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        <div className="reveal mb-[clamp(3rem,6vw,5rem)]">
          <p className="section-label">02 · Technical Stack</p>
          <h2 className="section-heading text-[clamp(42px,8vw,100px)] lg:text-[140px] leading-[0.8] mb-8">
            Skills.
          </h2>
          <p className="text-[clamp(16px,1.2vw,20px)] font-light text-white/40 max-w-[500px]">
            Engineering excellence using a modern, performance-first toolset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bentoSkills.map((skill, i) => (
            <div 
              key={i} 
              className={`service-card reveal flex flex-col gap-6 p-8 h-full bg-white/[0.03] border border-white/5 rounded-2xl transition-all duration-500 hover:bg-white/[0.05] ${
                skill.span ? 'lg:col-span-2' : ''
              }`}
              style={{
                borderTop: skill.accent ? `2px solid ${
                  skill.accent === 'lime' ? '#C8FF00' : 
                  skill.accent === 'purple' ? '#7C3AED' : 
                  skill.accent === 'teal' ? '#0F766E' : 'transparent'
                }` : undefined,
                background: skill.accent === 'purple' ? 'rgba(109,40,217,0.04)' : 
                            skill.accent === 'teal' ? 'rgba(15,118,110,0.04)' : undefined
              }}
            >
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-between">
                {skill.title}
                {/* <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{skill.category}</span> */}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.items.map((tech, j) => (
                  <div key={j} className="group/item flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white hover:border-white transition-all duration-300">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-5 h-5 object-contain group-hover/item:grayscale-0 group-hover/item:invert-0 grayscale invert brightness-200 group-hover:brightness-100 transition-all duration-300"
                    />
                    <span className="text-[12px] font-medium text-white/60 group-hover/item:text-black transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
