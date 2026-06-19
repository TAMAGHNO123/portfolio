import React, { useState } from 'react';
import { Github, ExternalLink, X, Cpu, GitBranch, ArrowUpRight } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    const w = rect.width;
    const h = rect.height;
    const rotateY = ((x - w / 2) / (w / 2)) * 12;
    const rotateX = -((y - h / 2) / (h / 2)) * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.transition = 'transform 0.08s ease-out';
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    card.style.transition = 'transform 0.4s ease-out';
  };

  const handleCardClick = (project) => {
    audioSystem.playClick();
    setActiveProject(project);
  };

  const handleCloseModal = () => {
    audioSystem.playClick();
    setActiveProject(null);
  };

  const projectList = [
    {
      id: 'snapcook',
      num: '01',
      title: 'SnapCook',
      desc: 'An AI-powered recipe generator application that allows users to upload refrigerator images, auto-detects existing ingredients using computer vision, and recommends delicious recipes dynamically.',
      tags: ['Next.js', 'React', 'Supabase', 'AI API'],
      github: 'https://github.com/TAMAGHNO123/SnapCook',
      bentoClass: 'md:col-span-2',
      telemetry: {
        title: 'System Telemetry Map',
        nodes: [
          { name: 'Upload Image', desc: 'User camera input' },
          { name: 'AI Vision API', desc: 'Ingredient analysis' },
          { name: 'Supabase Log', desc: 'Secure database storage' },
          { name: 'Gemini Pro API', desc: 'Dynamic recipe logic' },
          { name: 'Frontend Display', desc: 'Responsive user view' }
        ]
      }
    },
    {
      id: 'whisperweb',
      num: '02',
      title: 'Whisper Web',
      desc: 'A secure, low-latency, real-time one-to-one chat application. Featuring real-time message state syncing, online/offline status signals, and full history caching via web sockets.',
      tags: ['Node.js', 'Express', 'Socket.IO', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/TAMAGHNO123/Whisper-Web',
      bentoClass: 'md:col-span-1',
      telemetry: {
        title: 'System Telemetry Map',
        nodes: [
          { name: 'Client Input', desc: 'Secure text entry' },
          { name: 'Express Server', desc: 'Routing & JWT verify' },
          { name: 'Socket.IO Hub', desc: 'Low-latency broadcast' },
          { name: 'MongoDB Server', desc: 'NoSQL history logs' },
          { name: 'Client Sync', desc: 'State update' }
        ]
      }
    },
    {
      id: 'calmcove',
      num: '03',
      title: 'Calmcove',
      desc: 'A clean, highly accessible mental wellness platform designed to provide a calming virtual sanctuary. Implements reusable accessibility components and an ultra-smooth, responsive UX/UI flow.',
      tags: ['React', 'Tailwind CSS'],
      github: 'https://github.com/TAMAGHNO123/Calmcove',
      bentoClass: 'md:col-span-1',
      telemetry: {
        title: 'System Telemetry Map',
        nodes: [
          { name: 'Component Render', desc: 'Reusable modular elements' },
          { name: 'Accessibility Audit', desc: 'ARIA standard compliance' },
          { name: 'React Hooks', desc: 'Active audio/timer states' },
          { name: 'Tailwind Styles', desc: 'Premium colors & filters' },
          { name: 'User Viewport', desc: 'Accessible sanctuary' }
        ]
      }
    }
  ];

  return (
    <section id="projects" className="section-padding select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-plus-jakarta text-4xl font-bold tracking-tight mb-3 section-text-gradient">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-[600px] mx-auto">
            A bento showcase of full-stack, AI, and low-latency developments (click to morph cards)
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => audioSystem.playHover()}
              onClick={() => handleCardClick(project)}
              className={`glass-card group relative p-8 rounded-3xl flex flex-col justify-between h-full cursor-pointer transition-all duration-300 ${project.bentoClass}`}
            >
              <div className="card-glow"></div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-plus-jakarta text-2xl font-extrabold text-white/5 group-hover:text-violet-500 transition-all duration-300">
                    {project.num}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/5 bg-white/2 text-slate-400 flex items-center justify-center group-hover:border-cyan-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <h3 className="font-plus-jakarta text-xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-black/40 border border-white/10 text-xs font-semibold text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* GitHub Bento Brick */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => audioSystem.playHover()}
            onClick={() => audioSystem.playClick()}
            className="glass-card group relative p-8 rounded-3xl flex flex-col justify-between h-full cursor-pointer md:col-span-2 border-dashed border-violet-500/30"
          >
            <div className="card-glow"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500">
                <GitBranch size={24} />
              </div>
              <a
                href="https://github.com/TAMAGHNO123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/2 text-slate-400 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>

            <div>
              <h3 className="font-plus-jakarta text-xl font-bold text-white mb-2 tracking-tight">
                More Repository Architecture
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[500px]">
                Explore backend libraries, system performance configurations, and algorithmic problem-solving packages directly on my GitHub repository profile.
              </p>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
              Browse Github Repositories <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Morphing Telemetry Node Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-6 transition-all duration-300 animate-fadeIn">
          <div className="glass-card max-w-[850px] w-full p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-8 relative max-h-[90vh] overflow-y-auto custom-terminal-scrollbar">
            
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              onMouseEnter={() => audioSystem.playHover()}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/8 bg-white/3 text-slate-400 hover:text-white hover:border-violet-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] flex items-center justify-center transition-all duration-300"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col gap-4 text-left">
              <span className="font-plus-jakarta text-sm font-semibold uppercase tracking-wider text-violet-400">
                Project Detail
              </span>
              <h3 className="font-plus-jakarta text-3xl font-extrabold text-white tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeProject.desc}
              </p>
            </div>

            {/* Interactive Telemetry Node Graph */}
            <div className="border border-white/8 bg-black/30 rounded-2xl p-6 flex flex-col gap-6 text-left relative overflow-hidden select-none">
              <h4 className="flex items-center gap-2 text-white font-bold text-sm sm:text-base uppercase tracking-widest text-cyan-400">
                <Cpu size={16} />
                {activeProject.telemetry.title}
              </h4>

              {/* Graphic Nodes layout */}
              <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 py-6 md:py-8 mt-2">
                {/* Connecting SVGs Line */}
                <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line 
                      x1="10%" y1="50%" x2="90%" y2="50%" 
                      stroke="url(#node-grad)" strokeWidth="3" 
                      strokeDasharray="8 6" className="animate-dash" 
                    />
                    <defs>
                      <linearGradient id="node-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {activeProject.telemetry.nodes.map((node, index) => (
                  <div key={index} className="flex flex-col items-center text-center max-w-[130px] z-10 relative">
                    {/* Node Dot */}
                    <div className="w-10 h-10 rounded-full border border-cyan-500/50 bg-black/60 shadow-[0_0_12px_rgba(6,182,212,0.3)] flex items-center justify-center text-cyan-400 font-extrabold text-xs mb-3 animate-pulse">
                      0{index + 1}
                    </div>
                    {/* Node Info */}
                    <span className="text-white font-bold text-[11px] sm:text-xs tracking-tight">
                      {node.name}
                    </span>
                    <span className="text-slate-500 text-[9px] sm:text-[10px] mt-1 leading-snug">
                      {node.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Links Footer */}
            <div className="flex gap-4 border-t border-white/8 pt-6 mt-2 justify-end">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioSystem.playClick()}
                onMouseEnter={() => audioSystem.playHover()}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Github size={16} /> Repository
              </a>
              <span
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-500 border border-white/5 bg-white/2 cursor-not-allowed"
                title="Live demo offline"
              >
                <ExternalLink size={16} /> Live Demo
              </span>
            </div>

          </div>
        </div>
      )}

      {/* Styles for Modal Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-dash {
          animation: dash 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;