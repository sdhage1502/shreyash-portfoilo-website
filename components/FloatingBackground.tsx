'use client';
import React from 'react';
import FloatingLines from './FloatingLines';

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none mix-blend-screen overflow-hidden">
      <FloatingLines 
          enabledWaves={["middle"]}
          lineCount={[3]}
          lineDistance={[15]}
          linesGradient={['#0F766E', '#C8FF00', '#7C3AED']}
          topWavePosition={{ x: 0, y: 0, rotate: 0 }}
          middleWavePosition={{ x: 2, y: -0.2, rotate: -0.1 }}
          interactive={false}
          animationSpeed={0.3}
          parallax={true}
          parallaxStrength={0.05}
      />
    </div>
  );
}
