'use client';

import React from 'react';
import { marqueeItems } from '../data/portfolioData';

const Marquee: React.FC = () => {
  return (
    <div className="py-4 overflow-hidden border-y border-white/5 bg-white/[0.01]">
      <div className="marquee-content flex gap-12 whitespace-nowrap w-max px-12">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/30 whitespace-nowrap">{item}</span>
            <span className="text-[#C8FF00] opacity-40">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
