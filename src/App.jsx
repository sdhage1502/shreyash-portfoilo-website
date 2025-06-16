// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'; // Import useRef
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
  const bannerRef = useRef(null); // Create a ref for the banner
  const [bannerHeight, setBannerHeight] = useState(0); // State to store banner height

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkTheme) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkTheme]);

  // Effect to measure the banner's height after rendering
  // and re-measure on window resize to ensure correct padding for content below.
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
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount and on unmount for cleanup


  return (
    <div id="webcrumbs">
      {/* Global styles (consider moving these to a global CSS file) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        body { font-family: 'Inter', sans-serif; }

        /* ... remaining global animations and glass-morphism styles ... */
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .gradient-border {
          background: linear-gradient(45deg, #10b981, #14b8a6, #06b6d4, #3b82f6);
          background-size: 400% 400%;
          animation: gradientShift 4s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .glass-morphism {
          backdrop-filter: blur(16px) saturate(180%);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }

        .dark .glass-morphism {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Animations for Experience Section */
        @keyframes pulse-ring {
          0% { transform: scale(0.33); }
          40%, 50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.2); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-gray-100 transition-all duration-700 font-sans relative overflow-x-hidden">

        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float"></div>
        </div>

 
       

        {/* This div adds dynamic padding-top to prevent content from going under the fixed banner */}
        <div style={{ paddingBottom: `${bannerHeight}px` }}>
          <NavigationBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

          <main className="relative px-6 py-12 space-y-32">
            <HeroSection />
            <EducationSection educationData={educationData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <SkillsSection skillsData={skillsData} />
            <ExperienceSection experienceData={experienceData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <ProjectsSection projectsData={projectsData} activeTab={activeTab} setActiveTab={setActiveTab} />
                {/* Development Banner - Now fixed at the bottom */}
             <div ref={bannerRef} className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-center  shadow-2xl z-50">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 px-4 sm:px-0">
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