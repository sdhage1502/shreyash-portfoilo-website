import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const socialLinks = [
    { href: "https://linkedin.com/in/shreyashdhage", icon: "fab fa-linkedin-in", color: "from-[#7b112c] to-[#a1162f]", hoverColor: "from-[#5a0b1f] to-[#7b112c]" },
    { href: "https://github.com/sdhage1502", icon: "fab fa-github", color: "from-neutral-800 to-neutral-900", hoverColor: "from-black to-neutral-900" },
    { href: "mailto:sdhage1502@gmail.com", icon: "material-symbols-outlined", text: "mail", color: "from-[#a1162f] to-[#d23b55]", hoverColor: "from-[#7b112c] to-[#a1162f]" }
  ];

  return (
    <motion.section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative min-h-[80vh]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full lg:w-2/3 text-center lg:text-left space-y-6 sm:space-y-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="inline-block">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#f6e7eb] to-[#f1d6dd] dark:from-[#2a0a12] dark:to-[#3a0f1a] text-[#7b112c] dark:text-[#f2c7d0] rounded-full text-xs sm:text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-[#7b112c] via-[#a1162f] to-[#d23b55] bg-clip-text text-transparent animate-pulse-slow">Shreyash Dhage</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-[#7b112c] to-[#a1162f] mx-auto lg:mx-0 rounded-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#a1162f] to-[#d23b55] rounded-full blur-sm"></div>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto lg:mx-0">
          Software Developer Intern proficient in building
          responsive web applications with <span className="font-semibold text-[#7b112c] dark:text-[#d23b55]">React, Next.js, and Tailwind CSS</span>.
          Experienced in <span className="font-semibold text-[#7b112c] dark:text-[#d23b55]">RESTful APIs, CI/CD, and collaborative development</span>.
        </p>

        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : "_blank"}
              rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
              className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${social.color} hover:${social.hoverColor} rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 relative overflow-hidden`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              {social.text ? (
                <span className="material-symbols-outlined text-lg sm:text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">{social.text}</span>
              ) : (
                <i className={`${social.icon} text-lg sm:text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10`}></i>
              )}
            </motion.a>
          ))}
        </div>
      </div>
      {/* Placeholder for potential image or visual elements */}
      <div className="hidden lg:block lg:w-1/3 mt-8 lg:mt-0">
        {/* Add responsive image or visual element here if needed */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
