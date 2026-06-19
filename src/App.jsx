import React, { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  useEffect(() => {
    // Select all cards, headers, and timeline events to reveal on scroll
    const revealElements = document.querySelectorAll(
      '.glass-card, #experience .relative.w-full, #about h2, #about p, #projects h2, #projects p, #experience h2, #experience p'
    );
    
    revealElements.forEach(el => {
      // Avoid breaking card glows
      el.style.opacity = '0';
      el.style.transform = 'translate3d(0, 20px, 0)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    // Inject active transition styling
    const styleId = 'scroll-reveal-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .reveal-active {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) !important;
        }
      `;
      document.head.appendChild(style);
    }

    const handleScrollReveal = () => {
      const triggerBottom = window.innerHeight * 0.88;
      
      revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
          el.classList.add('reveal-active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <>
      {/* Background Animated Blobs */}
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;