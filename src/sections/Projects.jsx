import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const projectList = [
    {
      num: '01',
      title: 'SnapCook',
      desc: 'An AI-powered recipe generator application that allows users to upload refrigerator images, auto-detects existing ingredients using computer vision, and recommends delicious recipes dynamically.',
      tags: ['Next.js', 'React', 'Supabase', 'AI API'],
      github: 'https://github.com/TAMAGHNO123/SnapCook',
      demo: null
    },
    {
      num: '02',
      title: 'Whisper Web',
      desc: 'A secure, low-latency, real-time one-to-one chat application. Featuring real-time message state syncing, online/offline status signals, and full history caching via web sockets.',
      tags: ['Node.js', 'Express', 'Socket.IO', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/TAMAGHNO123/Whisper-Web',
      demo: null
    },
    {
      num: '03',
      title: 'Calmcove',
      desc: 'A clean, highly accessible mental wellness platform designed to provide a calming virtual sanctuary. Implements reusable accessibility components and an ultra-smooth, responsive UX/UI flow.',
      tags: ['React', 'Tailwind CSS'],
      github: 'https://github.com/TAMAGHNO123/Calmcove',
      demo: null
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
            A showcase of some recent full-stack & backend developments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div
              key={project.title}
              onMouseMove={handleMouseMove}
              className="glass-card group relative p-8 rounded-3xl flex flex-col justify-between h-full"
            >
              <div className="card-glow"></div>

              <div>
                {/* Project Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-plus-jakarta text-2xl font-extrabold text-white/5 group-hover:text-violet-500 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300">
                    {project.num}
                  </span>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-white/3 border border-white/8 text-slate-400 hover:text-white hover:bg-white/8 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github size={16} />
                    </a>
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-white/3 border border-white/8 text-slate-500/50 cursor-not-allowed"
                      title="Live Demo Offline"
                    >
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-plus-jakarta text-xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-white/2 border border-white/5 text-xs font-semibold text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;