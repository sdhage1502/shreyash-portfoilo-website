import React from 'react';

/* ── Loader & Marquee items ─────────────────────────── */
export const loaderWords = [
  'DESIGNING',
  'BUILDING',
  'AUTOMATING',
  'SCALING',
  'SHIPPING',
  'NEXT.JS',
  'TYPESCRIPT',
  'AI TOOLS',
  'n8n',
  'MCP SERVERS',
  'FIREBASE',
  'PUNE',
];

export const marqueeItems = [
  'NEXT.JS EXPERT', 'AI-DRIVEN DEV', 'n8n AUTOMATION', 'MCP SUPERPOWERS',
  'TYPESCRIPT', 'FIREBASE', 'MONGODB', 'AZURE MEDIA',
  'SEO FIRST', 'AVAILABLE FOR PROJECTS', 'MADE IN PUNE'
];

/* ── Stats data (About Section) ─────────────────────── */
export const stats = [
  { label: 'Impactful features shipped', value: 50, suffix: '+' },
  { label: 'Partnerships built', value: 2, suffix: '' },
  { label: 'Years in the trenches', value: 1, suffix: '+' },
  { label: 'Performance-obsessed', value: 95, suffix: '%' },
];

/* ── Skills bento items (8 Cards) ──────────────────── */
export const bentoSkills = [
  {
    category: 'Card 1',
    accent: 'lime',
    title: 'Modern Frontend',
    items: [
      { name: 'Next.js 15', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React 19', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
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
    title: 'AI Superpowers',
    items: [
      { name: 'Cursor AI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cursor.svg' },
      { name: 'GitHub Copilot', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubcopilot.svg' },
      { name: 'MCP Servers', icon: 'https://raw.githubusercontent.com/modelcontextprotocol/docs/main/favicon.svg' },
      { name: 'OpenRouter API', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg' },
      { name: 'Llama 3.3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg' }
    ],
    span: false
  },
  {
    category: 'Card 3',
    accent: 'teal',
    title: 'Workflow Magic',
    items: [
      { name: 'n8n Workflows', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg' },
      { name: 'Custom MCPs', icon: 'https://raw.githubusercontent.com/modelcontextprotocol/docs/main/favicon.svg' },
      { name: 'Automation', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webhooks.svg' },
      { name: 'API Design', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg' }
    ],
    span: false
  },
  {
    category: 'Card 4',
    title: 'The Backbone',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' }
    ],
    span: false
  },
  {
    category: 'Card 5',
    title: 'Cloud & Data',
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
    title: 'Daily Tools',
    items: [
      { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ],
    span: false
  },
  {
    category: 'Card 7',
    title: 'Visible Growth',
    items: [
      { name: 'SEO Strategy', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlesearchconsole.svg' },
      { name: 'Analytics', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googleanalytics.svg' },
      { name: 'Optimization', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg' },
      { name: 'Data Structuring', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/json.svg' }
    ],
    span: false
  },
  {
    category: 'Card 8',
    title: 'How I Work',
    items: [
      { name: 'Agile Flow', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jira.svg' },
      { name: 'CI/CD Life', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg' },
      { name: 'Quality First', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' }
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
    role: 'Software Developer (Intern)',
    period: 'Sep 2024 – Apr 2025',
    description: 
      "Started as a developer focused on building reusable UI components and ended up streamlining our entire deployment process. I cut down manual deployment times by almost 90% by setting up automated pipelines. I spent a lot of time in Figma, turning designs into pixel-perfect React components while making sure everything was lightning fast and accessible for everyone.",
    tags: ['React', 'TypeScript', 'Node.js', 'Performance', 'Testing']
  }
];

/* ── Projects Data ─────────────────────────────────── */
export const projects = [
  {
    id: '01',
    title: 'Decentralized Crowdfunding Platform',
    category: 'Blockchain · Web3 · Next.js',
    status: 'Live & Growing',
    stats: { speed: '40% Faster', responsiveness: 'Universal', reliability: 'Solid' },
    stack: ['Next.js', 'Ethers.js', 'Tailwind CSS', 'Firebase'],
    description: "Built a bridge for the decentralised world. I handled the full frontend for this crowdfunding platform, integrating MetaMask for secure transactions and real-time data sync to keep contributors updated instantly. Optimized for speed and cross-browser reliability.",
    image: '/images/project-1.png',
    link: 'https://defund.shreyashdhage.in/'
  },
  {
    id: '02',
    title: 'The Crypto Hub',
    category: 'Finance · Web3 · TypeScript',
    status: 'Operational',
    stats: { speed: 'Real-time', responsiveness: 'Adaptive', reliability: 'Production Grade' },
    stack: ['TypeScript', 'Next.js', 'Axios', 'React 19'],
    description: "A clean, minimalist dashboard for tracking the pulse of the crypto market. Built with type-safety at its core, ensuring the data you see is accurate and delivered in real-time. Minimal latency, maximum clarity.",
    image: '/images/project-3.png',
    link: 'https://crypto-dashboard-inky-one.vercel.app'
  },
  {
    id: '03',
    title: 'AI Weather Companion',
    category: 'AI · React · Utilities',
    status: 'Live',
    stats: { speed: 'Lighthouse 95+', responsiveness: '30% Faster', reliability: 'AI Powered' },
    stack: ['React', 'TypeScript', 'Llama 3.3', 'OpenWeather API'],
    description: "What if your weather app could actually talk to you? I built this weather assistant that uses AI to provide contextual summaries and helpful advice based on live meteorological data. Fast, smart, and built with modern caching patterns.",
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
    isPrivate: true
  }
];

/* ── About Copy ───────────────────────────────────── */
export const aboutCopy = {
  body: "I'm a developer who believes technology should be helpful, not confusing. Based in Pune, I've spent the last few years mastering the art of building web applications that are as fast as they are beautiful. I don't just write code; I build solutions that save people time and effort. \n\nCurrently, I'm at Meru Technosoft, where I'm deep into building a full-scale content platform. I'm obsessed with performance, automation, and finding new ways to use AI to make development smoother. Whether it's setting up complex n8n workflows or crafting a custom CMS, my goal is always the same: make it work perfectly. \n\nI treat every project like my own. I don't just hand over the code and disappear; I make sure everything from SEO to analytics is properly set up so you're ready for growth from day one. If you're looking for someone who cares about the details just as much as you do, let's talk."
};

/* ── Process Steps (4-Step) ───────────────────────── */
export const processSteps = [
  {
    id: 'Step 01',
    title: 'The Conversation',
    desc: "We start by talking about your vision. I'll ask the deep questions to understand exactly what you need, your goals, and who you're building for."
  },
  {
    id: 'Step 02',
    title: 'Speed Prototyping',
    desc: "I don't believe in waiting weeks to see progress. I use modern AI tools to get a functional prototype in your hands as quickly as possible."
  },
  {
    id: 'Step 03',
    title: 'Building for Scale',
    desc: "This is where the magic happens. I build out the full application with clean, maintainable code, integrating automation where it makes sense."
  },
  {
    id: 'Step 04',
    title: 'The Perfect Launch',
    desc: "Shipping is just the beginning. I handle the SEO, analytics, and documentation, staying by your side to make sure everything runs smoothly."
  }
];

/* ── Contact Info ─────────────────────────────────── */
export const contactInfo = {
  heading: "Have a great idea? Let's build it together.",
  sub: "I'm always open to interesting projects and collaborations.",
  email: "sdhage1502@gmail.com",
  cal: "https://cal.com/shreyash_15",
  github: "https://github.com/sdhage1502",
  linkedin: "https://linkedin.com/in/shreyashdhage"
};
