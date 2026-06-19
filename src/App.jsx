import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import TerminalLoader from './components/TerminalLoader';
import CanvasParticles from './components/CanvasParticles';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    // Staggered reveal layout components using GSAP
    const tl = gsap.timeline();

    tl.fromTo('header', 
      { y: -60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    );

    tl.fromTo('#hero span',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' },
      '-=0.3'
    );

    tl.fromTo('#hero h1, #hero h2, #hero p',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power4.out' },
      '-=0.4'
    );

    tl.fromTo('#hero a, #hero .hero-socials a',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' },
      '-=0.5'
    );

    // Stagger reveal scroll-indicator
    tl.fromTo('#hero .scroll-down',
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    );
  }, [isLoaded]);

  // Set up secondary scroll spy for other sections
  useEffect(() => {
    if (!isLoaded) return;

    const revealElements = document.querySelectorAll(
      '#about h2, #about p, #about .glass-card, #projects h2, #projects p, #projects .glass-card, #experience h2, #experience p, #experience .glass-card, #contact h2, #contact p, #contact .glass-card'
    );

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target); // trigger once
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      el.classList.add('reveal-element');
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [isLoaded]);

  return (
    <>
      {/* Interactive Particles Background */}
      <CanvasParticles />

      {/* Retro Boot Loader */}
      {!isLoaded && <TerminalLoader onComplete={() => setIsLoaded(true)} />}

      {/* Main Content (faded out until loader finishes) */}
      <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sticky Header */}
        <Navbar />

        {/* Sections Wrapper */}
        <main className="max-w-7xl mx-auto relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;