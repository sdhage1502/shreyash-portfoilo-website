import React from 'react';

/* ── Components ── */
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import PageEffects from '../components/PageEffects';

export default function HomePage() {
  return (
    <>
      <Loader />
      
      <main id="main" className="min-h-screen relative z-0">
        <Header />
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
