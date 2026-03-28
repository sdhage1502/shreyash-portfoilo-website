'use client';

import React from 'react';
import { bentoSkills } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-[clamp(5rem,12vw,12rem)] relative overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        <div className="reveal mb-12 lg:mb-20">
          <p className="section-label">02 · Technical Stack</p>
          <h2 className="section-heading">Skills</h2>
          <p className="text-lg font-light text-white/50 max-w-[500px] mt-6">
            Engineering excellence using a modern, performance-first toolset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bentoSkills.map((skill, i) => (
            <div 
              key={i} 
              className={`service-card reveal flex flex-col gap-6 p-8 h-full bg-white/[0.03] border border-white/10 rounded-sm transition-all duration-500 hover:bg-white/[0.05] ${
                skill.span ? 'lg:col-span-2' : ''
              }`}
              style={{
                borderTop: skill.accent ? `1px solid ${
                  skill.accent === 'lime' ? 'var(--accent)' : 
                  skill.accent === 'purple' ? '#7C3AED' : 
                  skill.accent === 'teal' ? '#0F766E' : 'transparent'
                }` : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-between">
                {skill.title}
                {/* <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{skill.category}</span> */}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.items.map((tech, j) => (
                  <div key={j} className="group/item flex items-center gap-2 px-3 py-2 bg-white/5 rounded-sm border border-white/5 hover:bg-white hover:border-white transition-all duration-300">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-4 h-4 object-contain group-hover/item:grayscale-0 group-hover/item:invert-0 grayscale invert brightness-200 group-hover:brightness-100 transition-all duration-300"
                    />
                    <span className="text-[11px] font-mono tracking-widest text-white/40 group-hover/item:text-black transition-colors whitespace-nowrap">
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
