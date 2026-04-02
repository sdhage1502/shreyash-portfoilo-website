import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Case Studies | Next.js & AI Portfolio | Shreyash Dhage',
  description: 'In-depth case studies on transforming client businesses with Next.js web development, custom CMS pipelines, and AI automation workflows.',
};

const caseStudies = [
  {
    title: "Enterprise Real Estate CMS",
    challenge: "A leading real estate agency struggled with a slow monolithic WordPress site that hampered their SEO and lead generation capabilities.",
    solution: "Re-architected the platform using Next.js App Router for instant page loads. Migrated property data to a Headless CMS (Sanity), and set up n8n webhooks to trigger static rebuilds instantly when listings change.",
    impact: "300% increase in Core Web Vitals score, 40% bounce rate reduction.",
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "n8n", "Tailwind CSS"],
    slug: "#"
  },
  {
    title: "LLM Customer Support Agent",
    challenge: "An e-commerce brand needed a robust 24/7 support bot that accurately referenced their internal inventory system and return policies.",
    solution: "Developed a custom MCP Server connected to their SQL database and Shopify API. Integrated securely with Claude 3.5 Sonnet to provide a chat agent capable of resolving 70% of tier 1 tickets autonomously.",
    impact: "70% ticket deflection, saving 20 hours of manual support time weekly.",
    techStack: ["Node.js", "MCP SDK", "Anthropic Claude", "Shopify API", "PostgreSQL"],
    slug: "#"
  },
  {
    title: "Logistics Dashboard Automation",
    challenge: "Operations team was manually copying shipping data across 4 different platforms, creating a bottleneck and data entry errors.",
    solution: "Built a centralized Next.js dashboard backed by a robust n8n workflow that orchestrates data synchronization between FedEx, Salesforce, and a custom PostgreSQL database in real-time.",
    impact: "Eliminated 100% of manual data entry, providing live tracking analytics.",
    techStack: ["Next.js", "React", "n8n", "Salesforce API", "Supabase"],
    slug: "#"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-between pt-20">
        <Header />
        <section className="flex-grow flex flex-col px-[var(--gutter)] py-32 max-w-[var(--container-max)] mx-auto w-full">
          <div className="reveal mb-12">
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] mb-6">
              Case <span className="text-[#C8FF00]">Studies</span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-white/50 max-w-[800px] leading-relaxed mb-16">
              Real-world examples of how I help businesses scale through high-performance web engineering and intelligent ops automation.
            </p>

            <div className="flex flex-col gap-12">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="group flex flex-col lg:flex-row gap-8 p-8 lg:p-12 border border-white/10 bg-white/5 rounded-2xl hover:border-[#C8FF00]/30 transition-all duration-300">
                  <div className="lg:w-2/3 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-[#C8FF00] transition-colors">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-[12px] font-mono text-white/40 tracking-widest uppercase mb-2">The Challenge</h4>
                      <p className="text-white/70 font-light leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-[12px] font-mono text-white/40 tracking-widest uppercase mb-2">The Solution</h4>
                      <p className="text-white/70 font-light leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/10">
                      {study.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 border border-white/10 rounded-full text-[11px] font-medium text-white/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 flex flex-col justify-center items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                    <div className="mb-6 w-full">
                      <h4 className="text-[12px] font-mono text-[#C8FF00] tracking-widest uppercase mb-3">Key Impact</h4>
                      <p className="text-white/90 text-lg lg:text-xl font-medium leading-tight">{study.impact}</p>
                    </div>
                    <a href={study.slug} className="mt-4 lg:mt-auto inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-[#C8FF00] hover:text-white transition-colors">
                      Read Full Case Study 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
