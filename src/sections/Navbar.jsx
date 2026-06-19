import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'));
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/8 ${
      isScrolled ? 'h-[65px] bg-[#070913]/85' : 'h-[75px] bg-[#070913]/65'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <a href="#" className="font-plus-jakarta text-2xl font-extrabold text-white flex items-center gap-2 tracking-tight">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_10px_#8b5cf6]"></span>
          Tamaghno
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors hover:text-white ${
                    activeSection === link.id ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-block px-5 py-2 text-sm font-semibold rounded-full text-white bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 hover:border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
          </a>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-0 right-0 w-[280px] h-screen bg-[#070913]/95 border-l border-white/8 p-10 pt-24 z-40 transition-all duration-300 md:hidden flex flex-col gap-8 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-medium transition-colors hover:text-white ${
                  activeSection === link.id ? 'text-white' : 'text-slate-400'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center px-5 py-3 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-violet-500 to-cyan-500"
        >
          Hire Me
        </a>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </header>
  );
};

export default Navbar;