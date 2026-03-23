import './globals.css';
import Script from 'next/script';
import FloatingBackground from '../components/FloatingBackground';

export const metadata = {
  metadataBase: new URL('https://portfoilo.shreyashdhage.in'),
  title: 'Shreyash Dhage — Next.js Developer | AI-Assisted Dev · n8n · MCP | Pune',
  description: 
    'Next.js developer from Pune. I build fast, SEO-optimized web apps using modern AI development practices, n8n automation, and MCP server integrations. Available for freelance and full-time roles.',
  keywords: [
    'Next.js developer', 'frontend developer India', 'React TypeScript developer',
    'AI-assisted web development', 'n8n automation developer', 'MCP server developer',
    'Firebase developer Pune', 'freelance Next.js developer', 'hire Next.js developer 2025',
    'custom CMS development', 'SEO optimized web app'
  ],
  authors: [{ name: 'Shreyash Dhage' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://portfoilo.shreyashdhage.in',
  },
  openGraph: {
    title: 'Shreyash Dhage — Next.js Developer',
    description: 'Next.js developer. AI-assisted dev, n8n automation, MCP servers. I ship.',
    url: 'https://portfoilo.shreyashdhage.in',
    siteName: 'Shreyash Dhage Portfolio',
    images: [
      {
        url: 'https://portfoilo.shreyashdhage.in/og-image.png',
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
    description: 'Next.js · TypeScript · n8n · MCP Servers · Firebase · Pune',
    images: ['https://portfoilo.shreyashdhage.in/og-image.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shreyash Dhage",
  "jobTitle": "Next.js Developer",
  "email": "sdhage1502@gmail.com",
  "url": "https://portfoilo.shreyashdhage.in",
  "sameAs": [
    "https://github.com/sdhage1502", // Placeholder: user should update or I keep
    "https://linkedin.com/in/shreyashdhage"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "knowsAbout": [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "AI-Assisted Development", "n8n Automation",
    "MCP Server Development", "Firebase", "Firestore",
    "SEO Optimization", "Google Analytics 4",
    "REST APIs", "MongoDB", "Azure Media Services"
  ],
  "offers": {
    "@type": "Offer",
    "name": "Freelance Web Development & AI Integration",
    "description": "Next.js web apps, CMS, SEO, GA4, n8n automation, MCP servers"
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
