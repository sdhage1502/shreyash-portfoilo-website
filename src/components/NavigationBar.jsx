import React, { useState } from 'react';
import ThemeToggleButton from '../components/ThemeToggle'; 

const NavigationBar = ({ isDarkTheme, setIsDarkTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#hero", icon: "home", text: "Home" },
    { href: "#education", icon: "school", text: "Education" },
    { href: "#skills", icon: "psychology", text: "Skills" },
    { href: "#experience", icon: "work", text: "Experience" },
    { href: "#projects", icon: "code", text: "Projects" }
  ];

  return (
    <nav className="glass-morphism shadow-2xl border-b border-neutral-200/50 dark:border-neutral-700/50 fixed  z-40 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-border rounded-full p-0.5">
              <div className="w-full h-full bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-base sm:text-lg">SD</span>
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#a63e3e] to-[#57574f] bg-clip-text text-transparent">
              Shreyash Dhage
            </h1>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="sm:hidden text-neutral-700 dark:text-neutral-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Navigation Links */}
          <div className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row items-center sm:space-x-6 lg:space-x-8 absolute sm:static top-full left-0 w-full sm:w-auto bg-white dark:bg-neutral-950 sm:bg-transparent dark:sm:bg-transparent border-t sm:border-t-0 border-neutral-200/50 dark:border-neutral-700/50 sm:p-0 p-4 transition-all duration-300`}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group flex items-center space-x-1 sm:space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-[#a63e3e] dark:hover:text-[#a63e3e] transition-all duration-300 font-medium relative py-2 sm:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="text-sm sm:text-base">{item.text}</span>
                <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#a63e3e] to-[#57574f] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <div className="mt-4 sm:mt-0">
              <ThemeToggleButton isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
