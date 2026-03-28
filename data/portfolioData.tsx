import React from 'react';

/* ── Loader & Marquee items ─────────────────────────── */
export const loaderWords = [
  'NEXT.JS',
  'TYPESCRIPT',
  'REACT',
  'AI TOOLS',
  'n8n',
  'MCP SERVERS',
  'FIREBASE',
  'MONGODB',
  'AZURE',
  'BLOCKCHAIN',
  'BUILDER',
  'PUNE',
];

export const marqueeItems = [
  'NEXT.JS DEVELOPER', 'AI-ASSISTED DEV', 'n8n AUTOMATION', 'MCP SERVERS',
  'TYPESCRIPT', 'FIREBASE', 'MONGODB', 'AZURE MEDIA SERVICES',
  'SEO OPTIMIZED', 'AVAILABLE FOR FREELANCE', 'PUNE'
];

/* ── Stats data (About Section) ─────────────────────── */
export const stats = [
  { label: 'Features shipped', value: 50, suffix: '+' },
  { label: 'Companies', value: 2, suffix: '—' },
  { label: 'Production exp.', value: 1, suffix: 'yr+' },
  { label: 'Website Performance score', value: "95+", suffix: '—' },
];

/* ── Skills bento items (8 Cards) ──────────────────── */
export const bentoSkills = [
  {
    category: 'Card 1', // Labelled for my reference in implementation
    accent: 'lime',
    title: 'Next.js & Frontend',
    items: [
      { name: 'Next.js 14+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React 18', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5/CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'React Query', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tanstack.svg' }
    ],
    span: true
  },
  {
    category: 'Card 2',
    accent: 'purple',
    title: 'AI-Assisted Development',
    items: [
      { name: 'Cursor AI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cursor.svg' },
      { name: 'GitHub Copilot', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubcopilot.svg' },
      { name: 'MCP Servers', icon: 'https://raw.githubusercontent.com/modelcontextprotocol/docs/main/favicon.svg' },
      { name: 'OpenRouter API', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg' },
      { name: 'Meta LLaMA 3.3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg' }
    ],
    span: false
  },
  {
    category: 'Card 3',
    accent: 'teal',
    title: 'Automation & Integrations',
    items: [
      { name: 'n8n Workflow', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg' },
      { name: 'MCP Server Dev', icon: 'https://raw.githubusercontent.com/modelcontextprotocol/docs/main/favicon.svg' },
      { name: 'Webhook design', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webhooks.svg' },
      { name: 'REST API integration', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg' }
    ],
    span: false
  },
  {
    category: 'Card 4',
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'REST API Design', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' }
    ],
    span: false
  },
  {
    category: 'Card 5',
    title: 'Databases & Cloud',
    items: [
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
      { name: 'Firestore', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg' }
    ],
    span: false
  },
  {
    category: 'Card 6',
    title: 'Dev Tools',
    items: [
      { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Firebase Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ],
    span: false
  },
  {
    category: 'Card 7',
    title: 'SEO & Analytics',
    items: [
      { name: 'Search Console', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlesearchconsole.svg' },
      { name: 'GA4', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googleanalytics.svg' },
      { name: 'Technical SEO', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg' },
      { name: 'Structured Data', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/json.svg' }
    ],
    span: false
  },
  {
    category: 'Card 8',
    title: 'Methodology',
    items: [
      { name: 'Agile/Sprint', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jira.svg' },
      { name: 'CI/CD Pipelines', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg' },
      { name: 'Unit Testing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' }
    ],
    span: false
  }
];

/* ── Experience Data ───────────────────────────────── */
export const experiences = [
  {
    company: 'Meru Technosoft',
    role: 'Next.js Developer Intern',
    period: 'Nov 2025 – Present | Remote',
    description: 
      "I build and maintain high-performance product websites using Next.js, TypeScript, and Tailwind CSS. As a lead frontend developer on the core product, I implement SEO best practices and technical optimizations from scratch. I built a custom Headless CMS backed by MongoDB and Azure Media Services, enabling non-technical teams to manage content and SEO metadata. I also architected REST APIs for n8n automation workflows to streamline content distribution and AI-driven processes.",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Azure Media Services', 'REST API', 'n8n', 'SEO Optimization']
  },
  {
    company: 'Hexadecimal Software',
    role: 'Software Developer Intern',
    period: 'Sep 2024 – Apr 2025 | Remote',
    description: 
      "Developed responsive React components with absolute precision in TypeScript and Tailwind. Optimized web performance using Chrome DevTools, achieving a 20% speed improvement and significantly reducing LCP. Spearheaded the implementation of automated CICD pipelines on GitHub Actions, cutting manual deployment time by 90%. Focused on building reusable, accessible UI components and writing robust Jest unit tests for mission-critical features.",
    tags: ['React', 'TypeScript', 'NodeJS', 'Tailwind CSS', 'MySQL', 'Firebase', 'Jest', 'CI/CD', 'Web Performance']
  }
];

/* ── Projects Data ─────────────────────────────────── */
export const projects = [
  {
    id: '01',
    title: 'Web3 Crowdfunding Platform',
    category: 'Blockchain · Next.js · Smart Contract',
    status: 'Live · Dec 2024 – Present',
    stats: { speed: '40% faster', responsiveness: '100% Core Web Vitals', reliability: '25% fewer bugs' },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Ethers.js', 'Firebase Firestore', 'MetaMask'],
    description: "Architected a high-performance decentralized crowdfunding platform. Optimized Web3 queries and state management for 40% faster loading. Implemented responsive design ensuring 100% compliance with mobile SEO and Core Web Vitals.",
    image: '/images/project-1.png',
    link: 'https://defund.shreyashdhage.in/'
  },
  {
    id: '02',
    title: 'Crypto Market Dashboard',
    category: 'Real-time Data · Next.js · API',
    status: 'Live · Aug 2025 – Present',
    stats: { speed: 'Optimized LCP', responsiveness: '100% Mobile Ready', reliability: 'Type-Safe' },
    stack: ['TypeScript', 'Next.js','Axios', 'React 18','Tailwind CSS v3','React Hot Toast','Vercel'],
    description: "Real-time cryptocurrency analytics dashboard. Built with Next.js App Router for server-side rendering and SEO efficiency. Deployed on Vercel with automated performance monitoring and edge caching.",
    image: '/images/project-3.png',
    link: 'https://crypto-dashboard-inky-one.vercel.app'
  },
  {
    id: '03',
    title: 'Smart Weather AI Assistant',
    category: 'AI Integration · React · Automation',
    status: 'Live · May 2024 – Present',
    stats: { speed: '95 Lighthouse', responsiveness: '30% faster API', reliability: 'AI Reliable' },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API', 'Meta LLaMA 3.3', 'OpenRouter', 'Axios', 'Jest'],
    description: "AI-integrated weather intelligence platform. Leveraged Meta LLaMA 3.3 via OpenRouter for contextual summaries. Optimized API response times by 30% through advanced caching and high-performance React patterns.",
    image: '/images/project-2.png',
    link: 'https://live-weather-dash-board.vercel.app/'
  },
  {
    id: '04',
    title: 'CMS & Content Automation',
    category: 'Headless CMS · n8n · Next.js',
    status: 'Live · Nov 2025 – Present',
    stats: { speed: 'Automated SEO', responsiveness: 'Payload CMS', reliability: 'Azure S3' },
    stack: ['Payload CMS', 'Next.js', 'TypeScript', 'MongoDB', 'Azure Media Services', 'REST API', 'n8n'],
    description: "Custom content automation platform built at Meru Technosoft. Integrates Payload CMS with n8n workflows for automated cross-platform distribution and SEO metadata management.",
    image: '/images/project-4.svg',
    isPrivate: true
  }
];

/* ── About Copy ───────────────────────────────────── */
export const aboutCopy = {
  body: "I am a results-driven Next.js Developer from Pune, specializing in high-performance web systems and AI-powered automation. I bridge the gap between complex engineering and seamless user experience, ensuring sites are fast, accessible, and SEO-optimized from day one. \n\nCurrently, I'm architecting full-stack solutions at Meru Technosoft, where I built a custom content platform featuring headless CMS, integrated AI, and n8n automation for global content distribution. My development process is powered by modern AI tools, allowing me to deliver production-ready code with extreme efficiency. \n\nBeyond building UI, I specialize in MCP server development, connecting AI ecosystems to databases and internal APIs. Every project I ship includes Google Search Console setups, GA4 tracking, and rich structured data (JSON-LD) to ensure organic growth and measurable results. \n\nIf you need a developer who understands both the 'how' of code and the 'why' of SEO performance, let's build something exceptional."
};

/* ── Process Steps (4-Step) ───────────────────────── */
export const processSteps = [
  {
    id: 'Step 01',
    title: 'Discovery & SEO Audit',
    desc: 'We discuss your goals, target keywords, and technical stack. I analyze your niche to find the highest-ROI opportunities.'
  },
  {
    id: 'Step 02',
    title: 'Design & Prototype',
    desc: 'Fast prototyping using AI-assisted design and Firebase for a real-time feedback loop. You see the product take shape within days.'
  },
  {
    id: 'Step 03',
    title: 'Build & Automate',
    desc: 'I develop the full stack — Next.js, Node.js, and multi-platform integrations. I connect n8n workflows and AI MCP layers for genuine business value.'
  },
  {
    id: 'Step 04',
    title: 'Launch & SEO Wiring',
    desc: 'Fully tested, SEO-optimized (GA4, JSON-LD, Sitemap), and launched. I provide complete handoff docs and ongoing performance support.'
  }
];

/* ── Contact Info ─────────────────────────────────── */
export const contactInfo = {
  sub: "I typically reply within 12 hours.",
  email: "sdhage1502@gmail.com",
  cal: "https://cal.com/shreyash_15",
  github: "https://github.com/sdhage1502",
  linkedin: "https://linkedin.com/in/shreyashdhage"
};
