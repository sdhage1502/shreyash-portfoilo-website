import React from 'react';

const Footer = () => {
  const socialLinks = [
    { href: "https://linkedin.com/in/shreyashdhage", icon: "fab fa-linkedin-in", label: "LinkedIn" },
    { href: "https://github.com/sdhage1502", icon: "fab fa-github", label: "GitHub" },
    { href: "mailto:sdhage1502@gmail.com", icon: "material-symbols-outlined", text: "mail", label: "Email" },
  ];

  const navLinks = [
    { href: "#hero", text: "Home" },
    { href: "#education", text: "Education" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-morphism shadow-inner border-t border-neutral-200/50 dark:border-neutral-700/50 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24 relative">
      <div className="absolute inset-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#a63e3e] to-transparent animate-shimmer"></div>

      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left space-y-6 sm:space-y-0 gap-4 sm:gap-0">
        {/* Copyright Information */}
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Shreyash Dhage. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-[#a63e3e] dark:hover:text-[#a63e3e] transition-colors duration-300"
              aria-label={link.text}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Social Links and Back to Top */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="flex justify-center gap-3 sm:gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-[#a63e3e] to-[#57574f] rounded-full text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                {social.text ? (
                  <span className="material-symbols-outlined text-base sm:text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {social.text}
                  </span>
                ) : (
                  <i className={`${social.icon} text-base sm:text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300 relative z-10`}></i>
                )}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-[#a63e3e] to-[#57574f] rounded-full text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            <span className="material-symbols-outlined text-base sm:text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
