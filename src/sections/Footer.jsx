import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-[#070913]/90 py-8 select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Terms/Privacy */}
        <div className="flex gap-4 text-xs sm:text-sm text-slate-500">
          <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
          <span>|</span>
          <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-slate-500 order-last md:order-none">
          &copy; 2026 Tamaghno Ghosh. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/TAMAGHNO123"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/2 border border-white/5 text-slate-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://x.com/tamaghno_G"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/2 border border-white/5 text-slate-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all duration-300"
            aria-label="Twitter/X"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/tamaghno-ghosh-1b3b612a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/2 border border-white/5 text-slate-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;