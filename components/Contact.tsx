'use client';

import React from 'react';
import { contactInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-[clamp(6rem,15vw,15rem)] relative overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)] text-center">
        
        <div className="reveal mb-12 lg:mb-20">
          <p className="section-label mx-auto before:left-1/2 before:-translate-x-1/2">06 · Get in Touch</p>
          <h2 className="section-heading mb-8">
            Let's build <span className="text-[var(--accent)]">it.</span>
          </h2>
          <p className="text-lg font-light text-white/40 max-w-[600px] mx-auto">
            {contactInfo.sub}
          </p>
        </div>

        <div className="reveal flex flex-col items-center gap-12">
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-[clamp(1.25rem,4.5vw,4rem)] font-extrabold text-white underline decoration-white/10 hover:decoration-[#C8FF00] underline-offset-[12px] transition-all duration-500 magnetic break-all px-4"
          >
            {contactInfo.email}
          </a>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-12 w-full sm:w-auto px-6">
            <a href={contactInfo.cal} target="_blank" rel="noopener noreferrer" className="cta-primary magnetic w-full sm:w-auto py-4">
              Book a Free Call
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
