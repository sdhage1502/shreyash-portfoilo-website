'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 100);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header id="header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header-left">
          <a href="/" className={`nav-logo ${hasEntered ? 'in' : ''}`}>SD<span className="nav-dot">.</span></a>
          
          <div className={`nav-socials ${hasEntered ? 'in' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon social-icon--github">
              <FaGithub />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon social-icon--linkedin">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <nav className="nav-links" role="navigation" aria-label="Main navigation">
          {['work', 'services', 'about', 'contact'].map((id, i) => (
            <a key={id} href={`#${id}`} className={hasEntered ? 'in' : ''} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="/resume" className={hasEntered ? 'in' : ''} style={{ transitionDelay: '0.5s' }}>Resume</a>
        </nav>

        <div className="header-right">
          <a href="https://cal.com/shreyash_15"
             target="_blank" rel="noopener noreferrer"
             className={`nav-cta magnetic ${hasEntered ? 'in' : ''}`}
             style={{ transitionDelay: '0.6s' }}>
            <span className="nav-cta-dot" aria-hidden="true"></span>
            <span className="nav-cta-text">Book a Call</span>
          </a>

          <button 
            className="nav-burger" 
            aria-label="Toggle menu" 
            aria-expanded={isDrawerOpen}
            onClick={toggleDrawer}
          >
            <span style={{ transform: isDrawerOpen ? 'translateY(6px) rotate(45deg)' : '' }}></span>
            <span style={{ opacity: isDrawerOpen ? 0 : 1 }}></span>
            <span style={{ transform: isDrawerOpen ? 'translateY(-6px) rotate(-45deg)' : '' }}></span>
          </button>
        </div>
      </header>

      <div className={`nav-drawer ${isDrawerOpen ? 'open' : ''}`} aria-hidden={!isDrawerOpen}>
        {['work', 'services', 'about', 'contact'].map((id, i) => (
          <a 
            key={id} 
            href={`#${id}`} 
            onClick={closeDrawer}
            style={{ 
              transitionDelay: isDrawerOpen ? `${0.2 + i * 0.1}s` : '0s',
              opacity: isDrawerOpen ? 1 : 0,
              transform: isDrawerOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a 
          href="/resume" 
          onClick={closeDrawer}
          style={{ 
            transitionDelay: isDrawerOpen ? '0.6s' : '0s',
            opacity: isDrawerOpen ? 1 : 0,
            transform: isDrawerOpen ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Resume
        </a>
        <a href="https://cal.com/shreyash_15" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="drawer-cta"
           onClick={closeDrawer}
           style={{ 
             transitionDelay: isDrawerOpen ? '0.7s' : '0s',
             opacity: isDrawerOpen ? 1 : 0,
             transform: isDrawerOpen ? 'translateY(0)' : 'translateY(20px)'
           }}
        >
          Book a Call
        </a>
      </div>
    </>
  );
};

export default Header;

