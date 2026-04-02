import React from 'react';
import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'AI Automation & MCP Services | Shreyash Dhage',
  description: 'Specialist in AI Automation workflows, LLM integration, and custom MCP (Model Context Protocol) Server development.',
  keywords: ['ai automation developer', 'mcp server developer', 'LLM integration', 'AI workflow expert'],
};

export default function AiAutomationPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-between pt-20">
        <Header />
        <section className="flex-grow flex flex-col justify-center px-[var(--gutter)] py-32 max-w-[var(--container-max)] mx-auto w-full">
          <div className="reveal mb-12 lg:mb-20">
            <p className="text-[12px] sm:text-[14px] font-mono text-[#C8FF00] tracking-widest uppercase mb-4">Service: AI & Intelligence</p>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] mb-6">
              Intelligent AI Automation
            </h1>
            <p className="text-lg sm:text-xl font-light text-white/50 max-w-[800px] leading-relaxed mb-12">
              Transform your business operations with autonomous AI agents. I build custom Model Context Protocol (MCP) servers and agentic workflows that securely connect Large Language Models to your enterprise data.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              {['MCP Servers', 'Agentic Workflows', 'LLM Integration', 'OpenAI / Anthropic'].map((kw) => (
                <span key={kw} className="px-4 py-2 border border-white/10 rounded-sm text-[10px] font-mono tracking-widest text-[#C8FF00] bg-[#C8FF00]/5">
                  {kw}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="p-8 border border-white/10 bg-white/5 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#C8FF00]">Custom MCP Servers</h3>
                <p className="text-white/60 font-light leading-relaxed">I develop MCP servers that act as secure bridges, giving Claude and other models real-time, isolated access to your custom APIs and databases.</p>
              </div>
              <div className="p-8 border border-white/10 bg-white/5 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#C8FF00]">Agentic Workflows</h3>
                <p className="text-white/60 font-light leading-relaxed">Deploy multi-agent systems designed to break down complex business processes into autonomous tasks with self-correction capabilities.</p>
              </div>
              <div className="p-8 border border-white/10 bg-white/5 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#C8FF00]">Secure LLM Integration</h3>
                <p className="text-white/60 font-light leading-relaxed">Connect powerful models like GPT-4 or Claude 3.5 Sonnet to your tech stack while ensuring strict data privacy and access controls.</p>
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
