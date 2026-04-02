import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 text-center">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)] flex flex-col items-center gap-8">
        
        {/* Useful SEO Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm font-light text-white/50">
          <a href="/services/nextjs-development" className="hover:text-[#C8FF00] transition-colors">Next.js Development</a>
          <a href="/services/ai-automation" className="hover:text-[#C8FF00] transition-colors">AI Automation</a>
          <a href="/services/cms-automation" className="hover:text-[#C8FF00] transition-colors">Headless CMS</a>
          <a href="/blog" className="hover:text-[#C8FF00] transition-colors">Developer Blog</a>
          <a href="/case-studies" className="hover:text-[#C8FF00] transition-colors">Case Studies</a>
        </div>

        <p className="text-[13px] font-mono tracking-[0.05em] text-white/20 mt-4">
          © {new Date().getFullYear()} Shreyash Dhage · Hand-crafted with Next.js & AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
