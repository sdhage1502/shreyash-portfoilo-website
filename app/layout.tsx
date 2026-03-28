import './globals.css';
import Script from 'next/script';
import FloatingBackground from '../components/FloatingBackground';
import ClaritySnippet from '../components/Clarity';

export const metadata = {
  metadataBase: new URL('https://portfolio.shreyashdhage.in'),
  title: 'Shreyash Dhage — Next.js Developer | AI Automation & MCP Expert',
  description: 
    'Shreyash Dhage is a high-performance Next.js developer from Pune. Specialized in AI automation, n8n workflows, and MCP servers. Shipping fast, SEO-ready web apps.',
  keywords: [
    'Shreyash Dhage', 'Next.js developer Pune', 'AI Automation developer', 'MCP server developer',
    'n8n workflow expert', 'frontend developer India', 'React TypeScript developer',
    'AI-assisted development', 'Freelance Next.js developer 2025', 'Hire Next.js developer Pune',
    'Technical SEO expert Pune', 'Custom CMS development', 'Web3 developer India'
  ],
  authors: [{ name: 'Shreyash Dhage' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://portfolio.shreyashdhage.in',
  },
  openGraph: {
    title: 'Shreyash Dhage — Next.js Developer & AI Automation Specialist',
    description: 'Next.js, AI automation, and MCP servers. I build fast, SEO-ready systems that scale.',
    url: 'https://portfolio.shreyashdhage.in',
    siteName: 'Shreyash Dhage Portfolio',
    images: [
      {
        url: 'https://portfolio.shreyashdhage.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shreyash Dhage — Next.js Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyash Dhage — Next.js Developer',
    description: 'Next.js · AI Automation · MCP Servers · n8n · Pune',
    images: ['https://portfolio.shreyashdhage.in/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shreyash Dhage",
  "jobTitle": "Full-Stack Next.js Developer",
  "email": "sdhage1502@gmail.com",
  "url": "https://portfolio.shreyashdhage.in",
  "sameAs": [
    "https://github.com/sdhage1502",
    "https://linkedin.com/in/shreyashdhage"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "knowsAbout": [
    "Next.js", "React", "TypeScript", "AI-Assisted Web Development",
    "n8n Workflow Automation", "MCP (Model Context Protocol) Server Development",
    "Firebase & Firestore", "SEO Optimization", "Web Performance & Core Web Vitals"
  ],
  "description": "Next.js developer specializing in high-performance web applications and AI-integrated systems.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Next.js Web Application Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI & n8n Automation"
        }
      }
    ]
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#080808] text-white">
        <ClaritySnippet />
        <FloatingBackground />
        <div id="scroll-bar" />
        {/* Custom Cursor for Desktop Only */}
        <div className="cursor" />
        <div className="cursor-ring" />
        {children}
        <Script
          src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
