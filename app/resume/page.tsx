'use client';

import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';

export default function ResumePage() {
  useEffect(() => {
    /* ── Custom Cursor Ring ─────────────────────── */
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const ring = document.querySelector('.cursor-ring') as HTMLElement;
    const cursorHandler = (e: MouseEvent) => {
      if (cursor && ring) {
        cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
        ring.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    };
    window.addEventListener('mousemove', cursorHandler);

    /* ── Scroll Progress Bar ────────────────────── */
    const scrollHandler = () => {
      const bar = document.getElementById('scroll-bar');
      if (bar) {
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = pct + '%';
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      window.removeEventListener('mousemove', cursorHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <main className="bg-transparent min-h-screen text-white overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-20 px-[var(--gutter)] max-w-[var(--container-max)] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="reveal in-view">
            <a href="/" className="flex items-center gap-2 text-white/50 hover:text-[#C8FF00] transition-colors mb-4 group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
            <h1 className="section-heading">My Resume</h1>
            <p className="text-white/40 mt-4 max-w-[500px]">
              A comprehensive overview of my technical skills, experience, and projects in the Next.js and AI ecosystem.
            </p>
          </div>
          
          <div className="reveal in-view">
            <a 
              href="/resume.pdf" 
              download 
              className="cta-primary magnetic flex items-center gap-3"
            >
              <FaDownload />
              Download PDF
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-[1/1.414] bg-white/5 rounded-2xl border border-white/10 overflow-hidden reveal in-view shadow-2xl">
          <iframe 
            src="/resume.pdf" 
            className="w-full h-full border-none"
            title="Shreyash Dhage Resume"
          />
          {/* Fallback for when PDF doesn't load or browser plugin issues */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#0c0c0c]">
             <div className="text-center p-8">
               <p className="text-xl font-bold mb-4">PDF Preview</p>
               <p className="text-white/50 mb-8">If the resume doesn't load, you can download it directly.</p>
               <a href="/resume.pdf" download className="cta-secondary">Download Resume</a>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
