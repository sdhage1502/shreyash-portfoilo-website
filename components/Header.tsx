'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

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

  // Keyboard Focus Trap & Escape Handler for Mobile Drawer (WCAG compliance)
  useEffect(() => {
    if (!isDrawerOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement;

    // Move focus inside the drawer
    const drawer = drawerRef.current;
    if (drawer) {
      const focusable = drawer.querySelectorAll('a, button');
      if (focusable.length > 0) {
        (focusable[0] as HTMLElement).focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      }

      if (e.key === 'Tab') {
        if (!drawer) return;
        const focusable = drawer.querySelectorAll('a, button');
        if (focusable.length === 0) return;

        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to opening button
      if (previousActiveElement) {
        previousActiveElement.focus();
      } else if (burgerRef.current) {
        burgerRef.current.focus();
      }
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header id="header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header-left flex items-center gap-4 md:gap-8">
          <a 
            href="/" 
            className={`nav-logo ${hasEntered ? 'in' : ''}`}
            aria-label="Shreyash Dhage Home"
          >
            SD<span className="nav-dot" aria-hidden="true">.</span>
          </a>
          
          <div className={`nav-socials hidden lg:flex ${hasEntered ? 'in' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon social-icon--github">
              <FaGithub aria-hidden="true" />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon social-icon--linkedin">
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {['work', 'services', 'about', 'contact'].map((id, i) => (
            <a key={id} href={`#${id}`} className={hasEntered ? 'in' : ''} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="/resume" className={hasEntered ? 'in' : ''} style={{ transitionDelay: '0.5s' }}>Resume</a>
        </nav>

        <div className="header-right flex items-center gap-3 md:gap-6">
          <a href="https://cal.com/shreyash_15"
             target="_blank" rel="noopener noreferrer"
             className={`nav-cta magnetic hidden xs:flex ${hasEntered ? 'in' : ''}`}
             style={{ transitionDelay: '0.6s' }}>
            <span className="nav-cta-dot" aria-hidden="true"></span>
            <span className="nav-cta-text">Book a Call</span>
          </a>

          <button 
            ref={burgerRef}
            className="nav-burger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg transition-all" 
            aria-label={isDrawerOpen ? "Close menu" : "Open menu"} 
            aria-expanded={isDrawerOpen}
            onClick={toggleDrawer}
          >
            <span style={{ transform: isDrawerOpen ? 'translateY(6px) rotate(45deg)' : '' }} aria-hidden="true"></span>
            <span style={{ opacity: isDrawerOpen ? 0 : 1 }} aria-hidden="true"></span>
            <span style={{ transform: isDrawerOpen ? 'translateY(-6px) rotate(-45deg)' : '' }} aria-hidden="true"></span>
          </button>
        </div>
      </header>

      <div 
        ref={drawerRef}
        className={`nav-drawer ${isDrawerOpen ? 'open' : ''}`} 
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isDrawerOpen}
      >
        {['work', 'services', 'about', 'contact'].map((id, i) => (
          <a 
            key={id} 
            href={`#${id}`} 
            onClick={closeDrawer}
            tabIndex={isDrawerOpen ? 0 : -1}
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
          tabIndex={isDrawerOpen ? 0 : -1}
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
           tabIndex={isDrawerOpen ? 0 : -1}
           style={{ 
             transitionDelay: isDrawerOpen ? '0.7s' : '0s',
             opacity: isDrawerOpen ? 1 : 0,
             transform: isDrawerOpen ? 'translateY(0)' : 'translateY(20px)'
           }}
        >
          Book a Call
        </a>

        {/* Drawer Socials */}
        <div className="flex gap-10 mt-6" style={{ 
             transitionDelay: isDrawerOpen ? '0.8s' : '0s',
             opacity: isDrawerOpen ? 1 : 0,
             transform: isDrawerOpen ? 'translateY(0)' : 'translateY(20px)'
           }}>
          <a 
            href={contactInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            tabIndex={isDrawerOpen ? 0 : -1}
            className="text-3xl text-white/40 hover:text-[var(--accent)] transition-colors"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a 
            href={contactInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            tabIndex={isDrawerOpen ? 0 : -1}
            className="text-3xl text-white/40 hover:text-[var(--accent)] transition-colors"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
