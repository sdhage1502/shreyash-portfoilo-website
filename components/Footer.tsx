import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 text-center">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        <p className="text-[13px] font-mono tracking-[0.05em] text-white/20">
          © 2025 Shreyash Dhage · Hand-crafted with Next.js & AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
