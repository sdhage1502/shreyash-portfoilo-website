'use client';

import React from 'react';
import { contactInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-[clamp(6rem,15vw,15rem)] relative overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)] text-center">
        
        <div className="reveal mb-16">
          <p className="section-label mb-6">06 · Get in Touch</p>
          <h2 className="text-[clamp(42px,7vw,96px)] font-black text-white leading-tight tracking-[-0.04em] mb-4">
            {contactInfo.heading}
          </h2>
          <p className="text-[clamp(16px,1.2vw,20px)] font-light text-white/40">
            {contactInfo.sub}
          </p>
        </div>

        <div className="reveal flex flex-col items-center gap-12">
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-[clamp(20px,4.5vw,64px)] font-extrabold text-white underline decoration-white/10 hover:decoration-[#C8FF00] underline-offset-[12px] transition-all duration-500 magnetic"
          >
            {contactInfo.email}
          </a>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-12 w-full sm:w-auto">
            <a href={contactInfo.cal} target="_blank" rel="noopener noreferrer" className="magnetic cta-primary text-center text-lg px-10 py-5 w-full sm:w-auto touch-manipulation min-h-[48px] flex items-center justify-center">
              Book a Free Call ↗
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {Object.entries({
              GitHub: contactInfo.github,
              LinkedIn: contactInfo.linkedin
            }).map(([label, href]) => (
              <a 
                key={label}
                href={href} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[clamp(14px,1vw,16px)] font-mono uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors magnetic"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
