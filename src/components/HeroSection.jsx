import React, { useEffect, useRef } from 'react';
import { motion } from 'https://esm.sh/framer-motion@12.23.12';
import HeroVisual from './HeroVisual';

const HeroSection = () => {
  const lottieContainerRef = useRef(null);
  const socialLinks = [
    { href: "https://linkedin.com/in/shreyashdhage", icon: "fab fa-linkedin-in", color: "from-[#a63e3e] to-[#57574f]", hoverColor: "from-[#57574f] to-[#a63e3e]" },
    { href: "https://github.com/sdhage1502", icon: "fab fa-github", color: "from-neutral-800 to-neutral-900", hoverColor: "from-black to-neutral-900" },
    { href: "mailto:sdhage1502@gmail.com", icon: "material-symbols-outlined", text: "mail", color: "from-[#57574f] to-[#a63e3e]", hoverColor: "from-[#a63e3e] to-[#57574f]" }
  ];

  useEffect(() => {
    let animationInstance;
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

    const initLottie = async () => {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js');
        if (!window.lottie || !lottieContainerRef.current) return;
        animationInstance = window.lottie.loadAnimation({
          container: lottieContainerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json',
        });
      } catch (error) {
        console.error('Failed to load Lottie', error);
      }
    };

    initLottie();
    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  return (
    <motion.section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 relative min-h-[80vh] section-reveal"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6 sm:space-y-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/70 dark:bg-neutral-900/60 px-4 py-2 shadow-lg">
            <span className="text-sm font-semibold tracking-[0.2em] text-[#57574f] dark:text-[#f9f9f9]">Portfolio</span>
            <span className="h-2 w-2 rounded-full bg-[#a63e3e]"></span>
            <span className="text-xs uppercase text-[#57574f]/70 dark:text-[#f9f9f9]/70">2025 Edition</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
            Shreyash Dhage
            <span className="block text-gradient">Digital Product Developer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto lg:mx-0">
            Building immersive web experiences with <span className="font-semibold text-[#a63e3e] dark:text-[#a63e3e]">React, Next.js, and modern UI motion</span>.
            I focus on thoughtful interaction design, performance, and storytelling through code.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <button className="px-6 py-3 rounded-full bg-[#a63e3e] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            View Case Studies
          </button>
          <button className="px-6 py-3 rounded-full border border-[#57574f]/30 text-[#57574f] dark:text-[#f9f9f9] font-semibold hover:border-[#a63e3e] hover:text-[#a63e3e] transition-all duration-300">
            Let&apos;s Collaborate
          </button>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : "_blank"}
              rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
              className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${social.color} hover:${social.hoverColor} rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 relative overflow-hidden`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              {social.text ? (
                <span className="material-symbols-outlined text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 relative z-10">{social.text}</span>
              ) : (
                <i className={`${social.icon} text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 relative z-10`}></i>
              )}
            </motion.a>
          ))}
        </div>

        <div className="overflow-hidden border-y border-[#57574f]/10 dark:border-[#f9f9f9]/10 py-4">
          <div className="hero-marquee animate-marquee">
            <span>GSAP</span>
            <span>Three.js</span>
            <span>Framer Motion</span>
            <span>Lottie</span>
            <span>React</span>
            <span>WebGL</span>
            <span aria-hidden="true">GSAP</span>
            <span aria-hidden="true">Three.js</span>
            <span aria-hidden="true">Framer Motion</span>
            <span aria-hidden="true">Lottie</span>
            <span aria-hidden="true">React</span>
            <span aria-hidden="true">WebGL</span>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center lg:justify-start">
          <div ref={lottieContainerRef} className="w-20 h-20"></div>
          <div className="text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-[#57574f]/60 dark:text-[#f9f9f9]/60">Scroll</p>
            <p className="text-base font-semibold text-[#57574f] dark:text-[#f9f9f9]">Discover the work</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5 mt-10 lg:mt-0">
        <HeroVisual />
      </div>
    </motion.section>
  );
};

export default HeroSection;
