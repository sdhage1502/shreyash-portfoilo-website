import React from 'react';

const resourceGroups = [
  {
    title: 'WebGL & Shader Libraries',
    items: [
      { name: 'Three.js', href: 'https://threejs.org/examples/', note: 'GPU-accelerated 3D scenes, custom shader workflows, and immersive interactions.' },
      { name: 'VFX-JS', href: 'https://tympanus.net/codrops/2025/01/20/vfx-js-webgl-effects-made-easy/', note: 'Lightweight DOM-focused WebGL effects for distortion, glitch, and glass style overlays.' },
      { name: 'liquidGL', href: 'https://github.com/naughtyduk/liquidGL', note: 'Real-time refraction, gloss, and tilt for liquid-glass interface treatments.' },
      { name: 'Unicorn Studio', href: 'https://www.unicorn.studio/', note: 'No-code WebGL motion editor with export options for modern site builders.' },
    ],
  },
  {
    title: 'Inspiration & Galleries',
    items: [
      { name: 'Awwwards WebGL', href: 'https://www.awwwards.com/websites/webgl/', note: 'Production-grade references for immersive motion and interaction language.' },
      { name: 'CSS Design Awards WebGL', href: 'https://www.cssdesignawards.com/website-gallery?feature=webgl', note: 'A broad catalog of WebGL-led visual systems across website categories.' },
      { name: 'Dribbble WebGL Search', href: 'https://dribbble.com/search/webgl', note: 'UI concept exploration for shaders, glassmorphism, and VFX direction.' },
    ],
  },
  {
    title: 'Animation & Motion Assets',
    items: [
      { name: 'LottieFiles Liquid Glass', href: 'https://lottiefiles.com/free-animations/liquid-glass', note: 'Ready-to-embed JSON/GIF/MP4 loops for fluid and glass-inspired micro-interactions.' },
      { name: 'GSAP + ScrollTrigger', href: 'https://gsap.com/scrolltrigger/', note: 'Timeline and scroll choreography for sections, cards, and hover states.' },
      { name: 'Lenis Smooth Scroll', href: 'https://www.lenis.dev/', note: 'Inertial scrolling to support cinematic transitions and parallax behavior.' },
    ],
  },
];

const promptExamples = [
  'High-resolution liquid glass background with dynamic refractive surface, soft color gradients, abstract fluid motion, UHD 4K wallpaper, cinematic lighting, clean aesthetic, high detail, WebGL shader style.',
  'Seamless fractal noise shader texture with animated refraction and chromatic distortion, 4K resolution, modern cyberpunk palette, suitable for cursor-reactive WebGL use.',
  'Seamless fluid particle motion loop in HD, slow drifting gelatinous waves, layered refractions, cinematic 60fps, deep color contrast for an interactive website background.',
];

const VfxToolkitSection = () => {
  return (
    <section id="vfx-toolkit" className="section-reveal max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#57574f]/60 dark:text-[#f9f9f9]/60">Creative Stack</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#57574f] dark:text-[#f9f9f9]">WebGL + VFX Toolkit for the Next Redesign</h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#57574f]/80 dark:text-[#f9f9f9]/80">
          A curated stack of animation libraries, visual references, and asset pipelines for liquid-glass surfaces,
          shader-heavy hero sections, and polished scroll/hover motion.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {resourceGroups.map((group) => (
          <article key={group.title} className="glass-card rounded-3xl p-6 space-y-4 border border-white/20 dark:border-white/10">
            <h3 className="text-lg font-semibold text-[#57574f] dark:text-[#f9f9f9]">{group.title}</h3>
            <ul className="space-y-3 text-sm">
              {group.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#a63e3e] dark:text-[#f4a7a7] hover:underline"
                  >
                    {item.name}
                  </a>
                  <p className="text-[#57574f]/80 dark:text-[#f9f9f9]/80">{item.note}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="glass-card rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-xl font-semibold text-[#57574f] dark:text-[#f9f9f9]">AI Prompt Pack for Visual Asset Generation</h3>
          <span className="text-xs uppercase tracking-[0.25em] text-[#57574f]/60 dark:text-[#f9f9f9]/60">Ready to copy</span>
        </div>
        <div className="space-y-3">
          {promptExamples.map((prompt, index) => (
            <p key={prompt} className="bg-white/40 dark:bg-black/20 rounded-2xl p-4 text-sm text-[#57574f]/90 dark:text-[#f9f9f9]/90">
              <span className="font-semibold mr-2">Prompt {index + 1}:</span>
              {prompt}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default VfxToolkitSection;
