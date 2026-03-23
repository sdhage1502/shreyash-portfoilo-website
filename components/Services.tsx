'use client';

import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" aria-label="Services" className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        <div className="reveal mb-[clamp(3rem,6vw,5rem)]">
          <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/40 mb-4 inline-block border-b border-white/10 pb-1">
            What I Build
          </p>
          <h2 className="text-[clamp(32px,5vw,64px)] font-extrabold tracking-[-0.03em] text-white mb-6">
            Services
          </h2>
          <p className="text-[clamp(16px,1.2vw,20px)] font-light text-white/50 max-w-[600px] leading-relaxed">
            What clients hire me for — delivered with SEO, performance, and clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="service-card reveal">
            <div className="service-icon mb-4">🌐</div>
            <h3 className="service-title mb-3">Product Websites & Landing Pages</h3>
            <p className="service-desc mb-6">
              Fast, responsive product websites in Next.js and Tailwind.
              SEO-optimized from day one — meta tags, structured data, GA4,
              Google Search Console, Lighthouse above 90. Built with AI tools
              to keep delivery fast.
            </p>
            <div className="service-tags">
              <span>Next.js</span><span>Tailwind CSS</span>
              <span>SEO</span><span>GA4</span><span>Lighthouse 90+</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card reveal">
            <div className="service-icon mb-4">📝</div>
            <h3 className="service-title mb-3">Custom CMS & Content Automation</h3>
            <p className="service-desc mb-6">
              Your team publishes content without touching code. CMS built in
              Next.js with MongoDB, wired to n8n automation so posts distribute
              across platforms automatically.
            </p>
            <div className="service-tags">
              <span>Next.js</span><span>MongoDB</span>
              <span>n8n</span><span>REST API</span><span>Headless CMS</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card service-card--teal reveal">
            <div className="service-icon mb-4">⚡</div>
            <h3 className="service-title mb-3">n8n Workflow Automation</h3>
            <p className="service-desc mb-6">
              Connect your tools, automate the repetitive work. Blog posting,
              lead routing, content distribution, API-triggered alerts —
              set up once, runs forever. Shipped in production at Meru Technosoft.
            </p>
            <div className="service-tags">
              <span>n8n</span><span>REST API</span>
              <span>Webhooks</span><span>Firebase</span><span>Content Automation</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card service-card--purple reveal">
            <div className="service-icon mb-4">🔌</div>
            <h3 className="service-title mb-3">MCP Server Integration</h3>
            <p className="service-desc mb-6">
              I build MCP servers — the layer that connects AI tools to your
              real systems. Your AI tools can read your database, query your CMS,
              and trigger workflows through one integration layer.
            </p>
            <div className="service-tags">
              <span>MCP Servers</span><span>Firebase</span>
              <span>REST API</span><span>AI Integration</span><span>Next.js</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="service-card service-card--blue reveal">
            <div className="service-icon mb-4">🤖</div>
            <h3 className="service-title mb-3">AI-Powered Web Applications</h3>
            <p className="service-desc mb-6">
              AI features that work in production — not just demos. OpenRouter,
              Meta LLaMA 3.3, and other AI APIs: chat interfaces, smart summaries,
              Q&A layers. Proper rate limiting, caching, error handling.
            </p>
            <div className="service-tags">
              <span>OpenRouter</span><span>Meta LLaMA</span>
              <span>React</span><span>TypeScript</span><span>Firebase</span>
            </div>
          </div>

          {/* Card 6 (CTA) */}
          <div className="service-card service-card--cta reveal flex flex-col items-center justify-center text-center p-10 border-dashed">
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/40 mb-3">
              Have a project?
            </p>
            <h3 className="text-[28px] font-extrabold tracking-[-0.04em] text-white leading-tight mb-6">
              Let's build something.
            </h3>
            <a href="https://cal.com/shreyash_15"
               target="_blank" rel="noopener noreferrer"
               className="service-cta-btn magnetic inline-flex justify-center items-center gap-2 bg-[#C8FF00] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base w-full sm:w-auto touch-manipulation min-h-[48px] transition-transform hover:scale-105">
              Book a Free Call ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
