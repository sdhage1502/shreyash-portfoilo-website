// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { educationData, skillsData, projectsData, experienceData } from "../src/assets/data.json";


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const bannerRef = useRef(null);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkTheme) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkTheme]);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let ctx;
    let isMounted = true;
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

    const initGsap = async () => {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js');
        if (!isMounted || !window.gsap || !window.ScrollTrigger) return;
        window.gsap.registerPlugin(window.ScrollTrigger);
        ctx = window.gsap.context(() => {
          window.gsap.utils.toArray('.section-reveal').forEach((section) => {
            window.gsap.fromTo(
              section,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 80%',
                },
              }
            );
          });
        });
      } catch (error) {
        console.error('Failed to load GSAP', error);
      }
    };

    initGsap();
    return () => {
      isMounted = false;
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <div id="webcrumbs">
      <div className="w-full min-h-screen page-shell transition-all duration-700 font-sans relative overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-72 h-72 bg-[#a63e3e]/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#57574f]/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#a63e3e]/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div style={{ paddingBottom: `${bannerHeight}px` }}>
          <NavigationBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

          <main className="relative px-6 py-10 space-y-28">
            <HeroSection />
            <EducationSection className="section-reveal" educationData={educationData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <SkillsSection className="section-reveal" skillsData={skillsData} />
            <ExperienceSection className="section-reveal" experienceData={experienceData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <ProjectsSection className="section-reveal" projectsData={projectsData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div ref={bannerRef} className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#57574f] via-[#a63e3e] to-[#57574f] text-white text-center shadow-2xl z-50">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 px-4 sm:px-0 py-2">
                <span className="material-symbols-outlined animate-pulse">construction</span>
                <p className="font-medium">This site is currently under active development. Check back for updates!</p>
                <span className="material-symbols-outlined animate-pulse">construction</span>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App; 
