import React from 'react';
import { User, CheckCircle2, Code2, Layout, Server, Database, Cpu } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

const About = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set custom coordinates properties for spotlight border
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // Symmetrical 3D tilt
    const w = rect.width;
    const h = rect.height;
    const rotateY = ((x - w / 2) / (w / 2)) * 12; // max 12 deg
    const rotateX = -((y - h / 2) / (h / 2)) * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.transition = 'transform 0.08s ease-out'; // snappy follow
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    card.style.transition = 'transform 0.4s ease-out'; // smooth recovery
  };

  const handlePillHover = () => {
    audioSystem.playHover();
  };

  const coreAttributes = [
    'Problem Solving (DSA)',
    'Backend Architecture Thinking',
    'Efficient Debugging & Testing',
    'Team Collaboration & Version Control'
  ];

  const skillGroups = [
    {
      title: 'Languages',
      icon: <Code2 size={20} className="text-violet-500" />,
      skills: ['JavaScript', 'C++', 'SQL'],
      gridSpan: 'sm:col-span-1'
    },
    {
      title: 'Frontend',
      icon: <Layout size={20} className="text-violet-500" />,
      skills: ['React (Vite)', 'Next.js', 'Tailwind CSS'],
      gridSpan: 'sm:col-span-1'
    },
    {
      title: 'Backend & APIs',
      icon: <Server size={20} className="text-violet-500" />,
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      gridSpan: 'sm:col-span-2' // wide bento block
    },
    {
      title: 'Databases & Services',
      icon: <Database size={20} className="text-violet-500" />,
      skills: ['MongoDB', 'PostgreSQL', 'Firestore', 'Supabase'],
      gridSpan: 'sm:col-span-1'
    },
    {
      title: 'Tools & Cloud',
      icon: <Cpu size={20} className="text-violet-500" />,
      skills: ['Git', 'GitHub', 'Firebase', 'Google Cloud Platform'],
      gridSpan: 'sm:col-span-1'
    }
  ];

  return (
    <section id="about" className="section-padding select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-plus-jakarta text-4xl font-bold tracking-tight mb-3 section-text-gradient">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-[600px] mx-auto">
            My background, technical strengths, and toolkit
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Intro Card */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => audioSystem.playHover()}
            onClick={() => audioSystem.playClick()}
            className="glass-card group relative lg:col-span-5 p-8 sm:p-10 rounded-3xl flex flex-col gap-6 h-fit cursor-default"
          >
            <div className="card-glow"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 flex items-center justify-center">
              <User size={26} className="text-violet-500" />
            </div>

            <h3 className="font-plus-jakarta text-2xl font-bold text-white tracking-tight">
              Engineering the Future
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I am a final-year Computer Science Engineering student dedicated to mastering modern software engineering principles. My expertise lies in architecting fast, secure backend APIs and building visually stunning, accessible frontend interfaces.
            </p>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              With a strong foundation in database design, caching, system design, and algorithmic problem solving, I thrive on engineering elegant solutions to complex technical challenges.
            </p>

            <div className="border-t border-white/8 pt-6 mt-2">
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Core Attributes</h4>
              <ul className="flex flex-col gap-3">
                {coreAttributes.map((attr) => (
                  <li 
                    key={attr} 
                    onMouseEnter={handlePillHover}
                    className="flex items-center gap-3 text-slate-400 text-sm sm:text-base"
                  >
                    <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                    {attr}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white tracking-tight mb-2">
              Technical Arsenal
            </h3>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => audioSystem.playHover()}
                  onClick={() => audioSystem.playClick()}
                  className={`glass-card group relative p-6 rounded-2xl flex flex-col gap-4 cursor-default ${group.gridSpan}`}
                >
                  <div className="card-glow"></div>

                  <h4 className="flex items-center gap-2.5 text-white font-bold text-base sm:text-lg">
                    {group.icon}
                    {group.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        onMouseEnter={handlePillHover}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-400 border border-white/5 bg-white/2 hover:bg-violet-500/15 hover:border-violet-500/40 hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;