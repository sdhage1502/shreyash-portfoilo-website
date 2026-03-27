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
      "I build and maintain the company's main product website — Next.js, TypeScript, Tailwind, fully responsive and SEO-optimized. On the same product I built the frontend platform: MongoDB handles the data, Azure Media Services handles video streaming. I also built a custom CMS from scratch so the non-technical team can publish blog posts and manage SEO metadata without touching code. And I wrote the REST APIs that feed into n8n automation workflows for automated content distribution. Day to day: Agile, Git, GitHub, code reviews, continuous deployment.",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Azure Media Services', 'REST API', 'n8n', 'CI/CD']
  },
  {
    company: 'Hexadecimal Software',
    role: 'Software Developer Intern',
    period: 'Sep 2024 – Apr 2025 | Remote',
    description: 
      "Built React components in TypeScript and Tailwind, wired up to REST APIs via NodeJS. Delivered 50+ features across Agile sprints. Deployment time dropped 90% after setting up proper CI/CD pipelines. Performance optimization with Chrome DevTools got us a 20% speed improvement. Wrote Jest unit tests across the codebase. Translated Figma designs into accessible, reusable components.",
    tags: ['React', 'TypeScript', 'NodeJS', 'Tailwind CSS', 'MySQL', 'Firebase', 'Jest', 'Webpack', 'CI/CD']
  }
];

/* ── Projects Data ─────────────────────────────────── */
export const projects = [
  {
    id: '01',
    title: 'Decentralized Crowdfunding Platform',
    category: 'Blockchain · Web3 · Next.js',
    status: 'Live · Dec 2024 – Present',
    stats: { speed: '40% faster', responsiveness: '100% cross-device', reliability: '25% fewer bugs' },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Ethers.js', 'Firebase Firestore', 'MetaMask'],
    description: "Solo project. Full frontend for a blockchain crowdfunding app — MetaMask wallet connect via Ethers.js, real-time Firestore sync for live dashboards, 40% perf gains from query optimization. Fixed cross-browser UI issues with Chrome DevTools — compatibility problems cut 25%.",
    image: '/images/project-1.png',
    link: 'https://defund.shreyashdhage.in/'
  },
  {
  id: '02',
  title: 'Crypto Dashboard',
  category: 'Blockchain · Web3 · TypeScript',
  status: 'Live · Aug 2025 – Present',
  stats: { speed: 'Optimized performance', responsiveness: '100% cross-device', reliability: 'Production-ready' },
  stack: ['TypeScript', 'Next.js','Axios', 'React 18','Tailwind CSS v3','React Hot Toast','Vercel'],
  description: "Real-time cryptocurrency tracking dashboard. Built with TypeScript and Next.js for type-safe development. Deployed on Vercel with optimized performance and responsive design across all devices.",
  image: '/images/project-3.png',
  link: 'https://crypto-dashboard-inky-one.vercel.app'
},
  {
    id: '03',
    title: 'Smart Weather + AI Assistant',
    category: 'AI · React · API Integration',
    status: 'Live · May 2024 – Present',
    stats: { speed: '95 Lighthouse', responsiveness: '30% faster API', reliability: '100% AI reliability' },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API', 'Meta LLaMA 3.3', 'OpenRouter', 'Axios', 'Jest'],
    description: "Weather app with an AI chat layer. Live data from OpenWeatherMap, localStorage caching, Meta LLaMA 3.3 via OpenRouter for contextual summaries and Q&A. 95 Lighthouse score. Response time cut 30% after Axios optimization and proper caching.",
    image: '/images/project-2.png',
    link: 'https://live-weather-dash-board.vercel.app/'
  },
  {
    id: '04',
    title: 'Payload CMS + Automation Platform',
    category: 'CMS · Next.js · Automation',
    status: 'Live · Nov 2025 – Present',
    stats: { speed: '0 manual steps', responsiveness: 'Payload CMS', reliability: 'Azure' },
    stack: ['Payload CMS', 'Next.js', 'TypeScript', 'MongoDB', 'Azure Media Services', 'REST API', 'n8n'],
    description: "Built at Meru Technosoft. A premium content platform leveraging Payload CMS for headless management. REST APIs feed n8n automation workflows for scheduled publishing and cross-platform content distribution.",
    image: '/images/project-4.svg',
    isPrivate: true // Show "Private Project" badge instead of link
  }
];

/* ── About Copy ───────────────────────────────────── */
export const aboutCopy = {
  body: "I'm a Next.js developer from Pune. I build product websites, custom CMSs, and AI-powered web apps — fast, SEO-optimized, and built to convert. \n\nRight now I'm at Meru Technosoft building a full content platform: custom CMS, Azure media streaming, and n8n automation for content distribution. I use AI tools throughout development to ship faster without cutting corners. \n\nI also build MCP servers when projects need AI tools connected to real systems — databases, CMSs, internal tools. And I set up GA4, Google Search Console, and structured data for the sites I build, so you don't need a separate SEO agency. \n\nIf you have a project, I'm probably already thinking about how I'd build it."
};

/* ── Process Steps (4-Step) ───────────────────────── */
export const processSteps = [
  {
    id: 'Step 01',
    title: 'Discovery (30 min)',
    desc: 'We talk. I understand your goal, stack, timeline, and budget. I ask the questions most developers skip.'
  },
  {
    id: 'Step 02',
    title: 'Design + Prototype',
    desc: 'I use AI tools and Firebase Studio to prototype fast. You see something real within days, not weeks.'
  },
  {
    id: 'Step 03',
    title: 'Build + Automate',
    desc: 'I develop the full app — Next.js, TypeScript, Firebase. I wire up n8n automation and MCP integrations where they genuinely add value.'
  },
  {
    id: 'Step 04',
    title: 'Ship + SEO + Handoff',
    desc: 'Deployed, tested, SEO-wired (GA4, Search Console, JSON-LD). You get the code, the docs, and I stay on for bugs.'
  }
];

/* ── Contact Info ─────────────────────────────────── */
export const contactInfo = {
  heading: "Got a project? Let's talk.",
  sub: "I typically reply within 12 hours.",
  email: "sdhage1502@gmail.com",
  cal: "https://cal.com/shreyash_15",
  github: "https://github.com/sdhage1502",
  linkedin: "https://linkedin.com/in/shreyashdhage"
};
