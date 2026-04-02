import React from 'react';
import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Next.js Development Services | Shreyash Dhage',
  description: 'Hire an expert Next.js developer for high-performance websites, Server-Side Rendering (SSR), and Static Site Generation (SSG).',
  keywords: ['hire next.js developer', 'next.js development services', 'SSR developer', 'React Next.js expert'],
};

export default function NextJsDevelopmentPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-between pt-20">
        <Header />
        <section className="flex-grow flex flex-col justify-center px-[var(--gutter)] py-32 max-w-[var(--container-max)] mx-auto w-full">
          <div className="reveal mb-12 lg:mb-20">
            <p className="text-[12px] sm:text-[14px] font-mono text-[#C8FF00] tracking-widest uppercase mb-4">Service: Web Development</p>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] mb-6">
              High-Performance Next.js Development
            </h1>
            <p className="text-lg sm:text-xl font-light text-white/50 max-w-[800px] leading-relaxed mb-12">
              Deliver blazing fast web experiences with modern architecture. I specialize in building SEO-optimized, highly scalable web applications using the Next.js App Router, combining the best of Server-Side Rendering (SSR) and Edge Computing.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              {['App Router', 'Server Components', 'SSR & SSG', 'Image Optimization'].map((kw) => (
                <span key={kw} className="px-4 py-2 border border-white/10 rounded-sm text-[10px] font-mono tracking-widest text-[#C8FF00] bg-[#C8FF00]/5">
                  {kw}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="p-8 border border-white/10 bg-white/5 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#C8FF00]">SEO Dominance</h3>
                <p className="text-white/60 font-light leading-relaxed">Server-side rendering ensures search engines can fully index your content instantly, driving organic traffic.</p>
              </div>
              <div className="p-8 border border-white/10 bg-white/5 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#C8FF00]">Speed & Core Web Vitals</h3>
                <p className="text-white/60 font-light leading-relaxed">Top-tier Lighthouse scores through aggressive code splitting, edge caching, and optimized media delivery.</p>
              </div>
              <div className="p-8 border border-white/10 bg-white/5 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#C8FF00]">Scalable Architecture</h3>
                <p className="text-white/60 font-light leading-relaxed">Built on a solid React & TypeScript foundation to easily accommodate new features and increasing traffic.</p>
              </div>
            </div>

            <a href="https://cal.com/shreyash_15" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-[#C8FF00] text-black font-bold tracking-wide uppercase hover:bg-white transition-colors duration-300">
              Book a Free Call
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
