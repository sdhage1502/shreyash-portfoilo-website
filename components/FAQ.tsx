import React from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in Next.js web development, AI workflow automation (including custom MCP servers), and Headless CMS integration (like Sanity) coupled with n8n automated pipelines."
  },
  {
    question: "How long does a typical project take?",
    answer: "A typical project can take anywhere from 2 to 6 weeks, depending on the scope and complexity. Small MVP landing pages might take less time, whereas full end-to-end AI SaaS applications will require more."
  },
  {
    question: "Do you offer maintenance and support?",
    answer: "Yes, I offer ongoing maintenance retainers to ensure your application stays up to date with the latest Next.js features, security patches, and AI model upgrades."
  },
  {
    question: "Can you integrate AI into my existing application?",
    answer: "Absolutely. Using the Model Context Protocol (MCP) and APIs from OpenAI or Anthropic, I can integrate secure AI capabilities directly into your existing infrastructure without compromising data privacy."
  }
];

const FAQ: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="w-full px-[var(--gutter)] py-24 sm:py-32 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[0.9] tracking-[-0.04em] mb-12 text-center">
          Frequently Asked <span className="text-[#C8FF00]">Questions</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer flex items-center justify-between p-6 sm:p-8 font-medium text-lg sm:text-xl transition-colors hover:text-[#C8FF00]">
                {faq.question}
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180 text-white/50 group-hover:text-[#C8FF00]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-6 sm:p-8 pt-0 text-white/60 font-light leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
