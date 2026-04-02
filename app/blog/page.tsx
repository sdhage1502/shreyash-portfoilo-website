import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Next.js & AI Insights | Shreyash Dhage',
  description: 'Read technical deep dives on Next.js App Router, Model Context Protocol (MCP), and n8n workflow automation by Shreyash Dhage.',
};

const articles = [
  {
    title: "Why Next.js App Router is the Future of Web Development",
    excerpt: "Exploring Server Components, advanced routing, and how it drastically improves Core Web Vitals.",
    category: "Next.js",
    readTime: "5 min",
    slug: "#"
  },
  {
    title: "Building Custom MCP Servers for Secure Enterprise AI",
    excerpt: "A guide to the Model Context Protocol and how to connect legacy APIs to Claude effectively.",
    category: "AI Automation",
    readTime: "7 min",
    slug: "#"
  },
  {
    title: "Scaling Programmatic SEO with Sanity CMS and n8n",
    excerpt: "How to automate thousands of landing pages using headless CMS webhook triggers and n8n orchestration.",
    category: "Automation",
    readTime: "6 min",
    slug: "#"
  },
  {
    title: "React vs Next.js vs Vite: Choosing the Right Tool",
    excerpt: "A definitive comparison of modern frontend architectures and when to use SSR vs SPA approaches.",
    category: "Frontend",
    readTime: "8 min",
    slug: "#"
  }
];

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-between pt-20">
        <Header />
        <section className="flex-grow flex flex-col px-[var(--gutter)] py-32 max-w-[var(--container-max)] mx-auto w-full">
          <div className="reveal mb-12">
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] mb-6">
              Developer <span className="text-[#C8FF00]">Insights</span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-white/50 max-w-[800px] leading-relaxed mb-16">
              Technical deep dives and practical tutorials on high-performance web development and intelligent automation systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, idx) => (
                <a key={idx} href={article.slug} className="group block p-8 border border-white/10 bg-white/5 rounded-xl hover:border-[#C8FF00]/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 border border-[#C8FF00]/30 rounded-sm text-[10px] font-mono tracking-widest text-[#C8FF00] bg-[#C8FF00]/5">
                      {article.category}
                    </span>
                    <span className="text-xs text-white/40 font-mono">{article.readTime} read</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C8FF00] transition-colors">{article.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{article.excerpt}</p>
                </a>
              ))}
            </div>
            
            <div className="mt-16 text-center text-white/40 font-mono text-sm">
              More articles coming soon...
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
