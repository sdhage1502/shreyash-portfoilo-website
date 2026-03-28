import React from 'react';
import Image from 'next/image';
import { aboutCopy, stats } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-[clamp(5rem,10vw,10rem)] relative overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        <div className="reveal mb-12 lg:mb-24">
          <p className="section-label">01 · About Me</p>
          <h2 className="section-heading">Next.js Expert <span className="text-[var(--accent)]">&</span> AI Automation Builder</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,5vw,6rem)] items-start">
          
          {/* Left: Image / Branding */}
          <div className="lg:col-span-5 reveal relative">
            <div className="overflow-hidden rounded-2xl relative aspect-[4/5] group bg-white/5 border border-white/10">
              <Image 
                src="/images/profile.png" 
                alt="Shreyash Dhage — Next.js Developer Pune" 
                fill
                priority
                className="w-full h-full object-cover scale-[1.1] transition-transform duration-1000 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60"></div>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-white/[0.03] border border-white/10 rounded-sm">
                  <div className="text-3xl font-extrabold text-[var(--accent)] tracking-tighter">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Humanized Copy */}
          <div className="lg:col-span-7 reveal flex flex-col gap-8 pt-4">
            {aboutCopy.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-[clamp(16px,1.3vw,21px)] font-light leading-[1.7] text-white/70">
                {para}
              </p>
            ))}

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <a href="https://cal.com/shreyash_15" 
                 target="_blank" rel="noopener noreferrer"
                 className="magnetic cta-primary inline-flex justify-center items-center gap-2 w-full sm:w-auto touch-manipulation min-h-[48px]">
                Book a Free Call ↗
              </a>
              <a href="mailto:sdhage1502@gmail.com" 
                 className="magnetic py-3 px-8 rounded-full border border-white/10 text-white/60 text-sm font-semibold hover:bg-white/5 hover:text-white transition-all text-center w-full sm:w-auto touch-manipulation min-h-[48px] flex items-center justify-center">
                sdhage1502@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
