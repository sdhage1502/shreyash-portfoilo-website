'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
          <a href="/" className="nav-logo">SD<span className="nav-dot">.</span></a>
          
          <div className="nav-socials">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <FaGithub />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <nav className="nav-links" role="navigation" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="/resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-right">
          <a href="https://cal.com/shreyash_15"
             target="_blank" rel="noopener noreferrer"
             className="nav-cta magnetic hidden md:flex">
            <span className="nav-cta-dot" aria-hidden="true"></span>
            Book a Call
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
        <a href="#work" onClick={closeDrawer}>Work</a>
        <a href="#services" onClick={closeDrawer}>Services</a>
        <a href="#about" onClick={closeDrawer}>About</a>
        <a href="/resume" onClick={closeDrawer}>Resume</a>
        <a href="#contact" onClick={closeDrawer}>Contact</a>
        <a href="https://cal.com/shreyash_15" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="drawer-cta"
           onClick={closeDrawer}>
          Book a Call
        </a>
      </div>
    </>
  );
};

export default Header;

