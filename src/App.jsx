import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { educationData, skillsData, projectsData, experienceData } from './assets/data.json';

const chapterLinks = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const stats = [
  { label: 'Projects Delivered', value: 15, suffix: '+' },
  { label: 'Internship Duration', value: 7, suffix: ' Months' },
  { label: 'Blogs Published', value: 50, suffix: '+' },
  { label: 'Performance Uplift', value: 40, suffix: '%' },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [counts, setCounts] = useState(stats.map(() => 0));
  const cardRefs = useRef([]);

  const topSkills = useMemo(() => skillsData.slice(0, 6), []);

  useEffect(() => {
    const scriptSrc = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';

    const initUnicornStudio = () => {
      if (window.UnicornStudio && window.UnicornStudio.init) {
        window.UnicornStudio.init();
      }
    };

    if (window.UnicornStudio && window.UnicornStudio.init) {
      initUnicornStudio();
      return;
    }

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
    }

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', initUnicornStudio);
      return () => existingScript.removeEventListener('load', initUnicornStudio);
    }

    const unicornScript = document.createElement('script');
    unicornScript.src = scriptSrc;
    unicornScript.onload = initUnicornStudio;
    (document.head || document.body).appendChild(unicornScript);

    return () => {
      unicornScript.onload = null;
    };
  }, []);

  useEffect(() => {
    let ctx;
    let cancelled = false;

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

    const setupAnimations = async () => {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js');

        if (cancelled || !window.gsap || !window.ScrollTrigger) return;

        window.gsap.registerPlugin(window.ScrollTrigger);

        ctx = window.gsap.context(() => {
          window.gsap.fromTo(
            '.hero-copy > *',
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
          );

          window.gsap.utils.toArray('.reveal-section').forEach((section) => {
            window.gsap.fromTo(
              section,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 82%',
                },
              },
            );
          });

          const sections = window.gsap.utils.toArray('section[id]');
          sections.forEach((section) => {
            window.ScrollTrigger.create({
              trigger: section,
              start: 'top 40%',
              end: 'bottom 40%',
              onToggle: (self) => self.isActive && setActiveSection(section.id),
            });
          });
        });
      } catch (error) {
        console.error('Animation library load failed:', error);
      }
    };

    setupAnimations();

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  useEffect(() => {
    let rafId;
    const start = performance.now();
    const duration = 1300;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 4;
      setCounts(stats.map((item) => Math.floor(item.value * eased)));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleTilt = (event, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const resetTilt = (index) => {
    const card = cardRefs.current[index];
    if (card) card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div className="portfolio-root">
      <header className="top-nav glass-panel">
        <a href="#hero" className="brand">Shreyash.dev</a>
        <nav>
          {chapterLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div data-us-project="XetyeigdK71yKvVDFhQy" className="hero-webgl" style={{ width: '1440px', height: '900px' }} />
          <div className="hero-overlay" />

          <div className="hero-copy glass-panel">
            <p className="chapter-label">Chapter 01 · Introduction</p>
            <h1>
              Building <span>modern</span>,
              <br />
              scroll-first digital experiences.
            </h1>
            <p>
              I am Shreyash Dhage, a frontend-focused developer crafting narrative portfolio and product experiences with React, animation systems, and performance-first architecture.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">Explore Work</a>
              <a href="#contact" className="btn-secondary">Let&apos;s Connect</a>
            </div>
          </div>
        </section>

        <section id="about" className="content-section reveal-section">
          <p className="chapter-label">Chapter 02 · About</p>
          <h2>From ideas to delightful interfaces.</h2>
          <p className="section-intro">
            Currently pursuing MCA while building high-impact web products. I combine UI storytelling, clear information hierarchy, and clean engineering to create portfolios and apps that feel alive.
          </p>
          <div className="education-grid">
            {educationData.map((item) => (
              <article key={item.title} className="glass-panel education-card">
                <p>{item.duration}</p>
                <h3>{item.title}</h3>
                <span>{item.school}</span>
                <strong>{item.gpa}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section reveal-section">
          <p className="chapter-label">Chapter 03 · Skills</p>
          <h2>Production-ready skill stack.</h2>
          <div className="skills-grid">
            {topSkills.map((skill) => (
              <article key={skill.title} className="glass-panel skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
                <div className="skill-meter">
                  <div style={{ width: `${skill.level}%` }} />
                </div>
                <small>{skill.level}% confidence</small>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section reveal-section">
          <p className="chapter-label">Chapter 04 · Selected Projects</p>
          <h2>Interactive builds with measurable outcomes.</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <article
                key={project.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="project-card"
                onMouseMove={(event) => handleTilt(event, index)}
                onMouseLeave={() => resetTilt(index)}
              >
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span>{project.date}</span>
                </div>
                <p>{project.description[0]}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-actions">
                  {project.links.live && <a href={project.links.live} target="_blank" rel="noreferrer">Live</a>}
                  {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section reveal-section">
          <p className="chapter-label">Chapter 05 · Experience & Stats</p>
          <h2>Building real products under real constraints.</h2>
          <div className="timeline glass-panel">
            <h3>{experienceData[0].title}</h3>
            <p>{experienceData[0].company} · {experienceData[0].duration}</p>
            <ul>
              {experienceData[0].achievements.slice(0, 3).map((item) => <li key={item.title}>{item.description}</li>)}
            </ul>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <article key={stat.label} className="stat-card glass-panel">
                <strong>{counts[index]}{stat.suffix}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section reveal-section">
          <p className="chapter-label">Chapter 06 · Contact</p>
          <h2>Let&apos;s build your next standout experience.</h2>
          <div className="contact-layout glass-panel">
            <div>
              <p>Open to frontend, React, and creative developer roles. Available for freelance portfolio/web-app builds.</p>
              <div className="contact-links">
                <a href="mailto:sdhage1502@gmail.com">sdhage1502@gmail.com</a>
                <a href="https://github.com/sdhage1502" target="_blank" rel="noreferrer">github.com/sdhage1502</a>
              </div>
            </div>
            <form>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <textarea rows="4" placeholder="Project brief" />
              <button type="button">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
