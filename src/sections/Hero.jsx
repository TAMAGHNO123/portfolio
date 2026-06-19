import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, ChevronDown, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex justify-center items-center overflow-hidden pt-[75px] px-6 text-center select-none">
      <div className="max-w-[800px] z-10 flex flex-col items-center">
        {/* Available Badge */}
        <span className="animate-pulse bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide shadow-[0_0_15px_rgba(139,92,246,0.1)]">
          Available for Internships & Projects
        </span>

        {/* Title */}
        <h1 className="font-plus-jakarta text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Hi, I'm <span className="gradient-text font-extrabold">Tamaghno Ghosh</span>
        </h1>

        {/* Sub-headline */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-6 max-w-[650px]">
          Computer Science Undergraduate | Full-Stack & Backend Developer
        </h2>

        {/* Pitch */}
        <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-[600px] leading-relaxed">
          Passionate about building scalable web applications with a strong focus on performance, clean architecture, and modern backend infrastructure.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_#8b5cf6] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Connect <Mail size={18} />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/TAMAGHNO123"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex justify-center items-center bg-white/3 border border-white/8 text-slate-400 hover:text-white hover:bg-white/8 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://x.com/tamaghno_G"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex justify-center items-center bg-white/3 border border-white/8 text-slate-400 hover:text-white hover:bg-white/8 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            aria-label="Twitter Profile"
          >
            <Twitter size={20} strokeWidth={2.2} />
          </a>
          <a
            href="https://www.linkedin.com/in/tamaghno-ghosh-1b3b612a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex justify-center items-center bg-white/3 border border-white/8 text-slate-400 hover:text-white hover:bg-white/8 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Down Chevron Trigger */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce transition-colors hover:text-white"
        aria-label="Scroll Down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;