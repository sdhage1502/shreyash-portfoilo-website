'use client';

import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" aria-label="Services" className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--gutter)]">
        
        <div className="reveal mb-12 lg:mb-20">
          <p className="section-label">What I Build</p>
          <h2 className="section-heading">Full-Stack <span className="text-[var(--accent)]">&</span> AI Services</h2>
          <p className="text-lg font-light text-white/50 max-w-[600px] leading-relaxed mt-6">
            High-performance solutions delivered with SEO, automation, and clean architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Card 1 */}
          <div className="service-card reveal flex flex-col h-full">
            <div className="flex-grow">
              <div className="service-icon mb-4">🌐</div>
              <h3 className="service-title mb-3">Product Websites</h3>
              <p className="service-desc mb-6">
                Fast, responsive product websites in Next.js and Tailwind.
                SEO-optimized from day one — meta tags, structured data, GA4,
                Google Search Console, Lighthouse above 90.
              </p>
            </div>
            <div className="service-tags mt-auto pt-4">
              <span>Next.js</span><span>Tailwind CSS</span>
              <span>SEO</span><span>GA4</span>
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
          <div className="service-card reveal flex flex-col items-center justify-center text-center p-8 sm:p-10 border-dashed border-white/20 bg-white/[0.02] min-h-[320px]">
            <p className="section-label !mb-3 !before:hidden mx-auto">Have a project?</p>
            <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-white leading-tight mb-8">
              Let's build something.
            </h3>
            <a href="https://cal.com/shreyash_15"
               target="_blank" rel="noopener noreferrer"
               className="cta-primary magnetic w-full py-4">
              Book a Free Call
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
