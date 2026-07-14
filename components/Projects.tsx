/* Hallmark · component: Projects · genre: modern-minimal · theme: custom
 * states: default · hover · focus · active · disabled
 * contrast: pass
 */

'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  useEffect(() => {
    /* ── Project Parallax ── */
    const handleScroll = () => {
      const images = document.querySelectorAll('.project-img');
      images.forEach(img => {
        const wrap = img.closest('.project-visual') as HTMLElement | null;
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const vhMid = window.innerHeight / 2;
        const offset = (center - vhMid) * 0.08;
        (img as HTMLElement).style.transform = `translateY(${offset}px) scale(1.1)`;
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
        <div className="reveal mb-16 lg:mb-24">
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Featured Next.js <span className="text-[var(--accent)]">&</span> AI Projects</h2>
          <p className="text-lg font-light text-white/60 max-w-[600px] leading-relaxed mt-6">
            A curated showcase of high-impact systems, real-time dashboards, and decentralized architectures featuring full production-level metrics.
          </p>
        </div>

        {/* Projects list */}
        <div className="projects-list flex flex-col gap-20 md:gap-32 lg:gap-40">
          {(projects ?? []).map((project, i) => {
            // Safe destructuring with defaults for every field that could be undefined
            const {
              id = '',
              title = '',
              category = '',
              description = '',
              image = '/images/placeholder.png',
              link = '#',
              github,
              isPrivate = false,
              stack = [],
              stats,
            } = project ?? {};

            const safeStats = {
              speed: stats?.speed ?? '—',
              responsiveness: stats?.responsiveness ?? '—',
              reliability: stats?.reliability ?? '—',
            };

            return (
              <article 
                key={id || i} 
                className={`project-item reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
                data-index={id}
              >
                {/* Text column */}
                <div className={`flex flex-col gap-6 sm:gap-8 lg:col-span-6 ${
                  i % 2 !== 0 ? 'lg:order-2' : ''
                }`}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-[14px] font-mono text-white/30">[{id}]</span>
                    <span className="text-[10px] sm:text-[12px] font-bold text-[var(--accent)] tracking-widest uppercase">{category}</span>
                  </div>

                  <h3 className="text-[clamp(26px,3vw,42px)] font-black text-white leading-[1.1] tracking-[-0.03em]">
                    {title}
                  </h3>
                  
                  <p className="text-[16px] font-light leading-relaxed text-white/70">
                    {description}
                  </p>

                  {/* Stats Row — safely accessed with fallbacks */}
                  <div className="grid grid-cols-3 gap-4 py-4 sm:py-6 border-y border-white/10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-tight tabular-nums">{safeStats.speed}</span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">Performance</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-tight tabular-nums">{safeStats.responsiveness}</span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">UI / Architecture</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] sm:text-[17px] font-bold text-white tracking-tight tabular-nums">{safeStats.reliability}</span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">Reliability</span>
                    </div>
                  </div>

                  {/* Stack Capsules — safely mapped with fallback */}
                  <div className="flex flex-wrap gap-2">
                    {(stack ?? []).map(tech => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-sm text-[10px] font-mono tracking-wider text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-4 mt-2">
                    {!isPrivate ? (
                      <>
                        <a 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cta-primary magnetic py-3 px-6 text-center text-xs flex items-center justify-center gap-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[var(--accent)] outline-none"
                          aria-label={`Visit Live Demo of ${title}`}
                        >
                          <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                          Live Demo
                        </a>
                        {github && (
                          <a 
                            href={github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cta-secondary py-3 px-6 text-center text-xs flex items-center justify-center gap-2 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-white outline-none"
                            aria-label={`View GitHub Source Code of ${title}`}
                          >
                            <FaGithub className="text-sm" aria-hidden="true" />
                            Source Code
                          </a>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-2.5 py-2.5 px-5 rounded border border-white/5 bg-white/[0.01] text-white/30 text-xs font-mono tracking-wider uppercase select-none w-fit">
                        <FaLock className="text-[11px]" aria-hidden="true" />
                        Private Repository
                      </div>
                    )}
                  </div>
                </div>

                {/* Image column (Visual) */}
                <div className={`project-visual overflow-hidden rounded-2xl aspect-video bg-white/5 border border-white/10 group cursor-pointer relative lg:col-span-6 ${
                  i % 2 !== 0 ? 'lg:order-1' : ''
                } hover:border-white/20 transition-colors duration-500`}>
                  {!isPrivate ? (
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full h-full"
                      aria-label={`Visit Live Demo of ${title}`}
                    >
                      <div className="w-full h-full relative overflow-hidden">
                        <Image 
                          src={image} 
                          fill
                          className="project-img w-full h-full object-cover scale-[1.1] group-hover:scale-105 transition-transform duration-[800ms] opacity-80 group-hover:opacity-100" 
                          alt={`${title} — ${category} Preview`} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-mono text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FaExternalLinkAlt className="text-[8px]" aria-hidden="true" />
                          Launch Project
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="w-full h-full relative overflow-hidden">
                      <Image 
                        src={image} 
                        fill
                        className="project-img w-full h-full object-cover scale-[1.1] opacity-60" 
                        alt={`${title} — ${category} Preview`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2 bg-black/75 backdrop-blur-md border border-white/5 py-4 px-6 rounded-xl text-center">
                          <FaLock className="text-white/40 text-lg" aria-hidden="true" />
                          <span className="text-xs font-mono uppercase tracking-wider text-white/50">Internal IP / Restricted</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
