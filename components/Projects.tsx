'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  useEffect(() => {
    /* ── Project Parallax ── */
    const handleScroll = () => {
      const images = document.querySelectorAll('.project-img');
      images.forEach(img => {
        const wrap = img.closest('.project-visual') as HTMLElement;
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const vhMid = window.innerHeight / 2;
        const offset = (center - vhMid) * 0.12;
        (img as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="work" aria-label="Selected Work" className="py-[clamp(5rem,10vw,10rem)] bg-transparent">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        {/* Section header */}
        <div className="reveal mb-12 lg:mb-20">
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Featured Next.js <span className="text-[var(--accent)]">&</span> AI Projects</h2>
          <p className="text-lg font-light text-white/50 max-w-[600px] leading-relaxed mt-6">
            From blockchain backends to AI assistants — real metrics, real users, clean architecture.
          </p>
        </div>

        {/* Projects list */}
        <div className="projects-list flex flex-col gap-16 md:gap-24 lg:gap-32">
          {projects.map((project, i) => (
            <article 
              key={project.id} 
              className={`project-item reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
              data-index={project.id}
            >
              {/* Text column */}
              <div className={`flex flex-col gap-6 sm:gap-8 ${
                i % 2 !== 0 ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-6'
              }`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-[14px] font-mono text-white/20">[{project.id}]</span>
                  <span className="text-[10px] sm:text-[12px] font-bold text-[#C8FF00] tracking-widest uppercase">{project.category}</span>
                </div>

                <h3 className="text-[clamp(28px,3.5vw,48px)] font-extrabold text-white leading-[1.1] tracking-[-0.04em]">
                  {project.title}
                </h3>
                
                <p className="text-[clamp(16px,1.1vw,19px)] font-light leading-relaxed text-white/60">
                  {project.description}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 py-6 sm:py-8 border-y border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl lg:text-[20px] font-bold text-white tracking-tight">{project.stats.speed}</span>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/30">Performance</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl lg:text-[20px] font-bold text-white tracking-tight">{project.stats.responsiveness}</span>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/30">UI / Core</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl lg:text-[20px] font-bold text-white tracking-tight">{project.stats.reliability}</span>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/30">Stability</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-sm text-[10px] font-mono tracking-widest text-white/40">{tech}</span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-4 w-full sm:w-auto">
                  {!project.isPrivate ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-primary magnetic w-full sm:w-auto py-3.5">
                      View Project
                    </a>
                  ) : (
                    <span className="w-full sm:w-auto text-center px-8 py-3.5 rounded-sm border border-white/10 text-white/20 text-[10px] font-mono tracking-widest uppercase">
                      Private Project
                    </span>
                  )}
                </div>
              </div>

              {/* Image column (Visual) */}
              <div className={`project-visual overflow-hidden rounded-2xl aspect-video bg-white/5 border border-white/10 group cursor-pointer ${
                i % 2 !== 0 ? 'lg:col-start-1 lg:col-span-6 lg:row-start-1' : 'lg:col-span-6'
              }`}>
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    fill
                    className="project-img w-full h-full object-cover scale-[1.1] group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" 
                    alt={`${project.title} — ${project.category} Portfolio Piece`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
