import React from 'react';

const Experience = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const timelineEvents = [
    {
      side: 'left',
      type: 'Education',
      date: '2022 - 2026',
      title: 'Bachelor of Technology',
      subtitle: 'Dr. Sudhir Chandra Sur Institute of Technology, Kolkata',
      desc: 'Computer Science and Engineering',
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'DBMS',
        'Computer Networks',
        'OOP',
        'Software Engineering'
      ]
    },
    {
      side: 'right',
      type: 'Achievement',
      date: 'Project Exhibition',
      title: 'Winner of Inter-College Project Exhibition',
      subtitle: '',
      desc: 'Awarded first place for showcasing an innovative software solution featuring real-time data visualization and efficient backend management.',
      coursework: null
    },
    {
      side: 'left',
      type: 'Achievement',
      date: 'Hackathon',
      title: 'HackerRank Sustainable Environment',
      subtitle: '',
      desc: 'Shortlisted among top participants in the HackerRank Hackathon on Sustainable Environment, designing and presenting a green technology resource management algorithm.',
      coursework: null
    },
    {
      side: 'right',
      type: 'Activity',
      date: 'National Hackathon',
      title: 'Smart India Hackathon (SIH)',
      subtitle: '',
      desc: 'Selected and participated in the national Smart India Hackathon. Worked closely with a dynamic team to prototype an automated, public-infrastructure reporting dashboard.',
      coursework: null
    }
  ];

  const getTagColor = (type) => {
    switch (type) {
      case 'Education':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'Achievement':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'Activity':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      default:
        return 'bg-white/5 text-slate-400 border-white/10';
    }
  };

  return (
    <section id="experience" className="section-padding select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-plus-jakarta text-4xl font-bold tracking-tight mb-3 section-text-gradient">
            Timeline & Activities
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-[600px] mx-auto">
            Education, achievements, and competitive events
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-[1000px] mx-auto py-10">
          {/* Vertical Center Line */}
          <div className="timeline-line"></div>

          <div className="flex flex-col gap-10 md:gap-0">
            {timelineEvents.map((item, idx) => (
              <div
                key={idx}
                className={`relative w-full md:w-1/2 px-0 md:px-10 mb-0 md:mb-10 last:mb-0 flex flex-col ${
                  item.side === 'left'
                    ? 'md:left-0 md:items-end md:text-right'
                    : 'md:left-1/2 md:items-start md:text-left'
                }`}
              >
                {/* Timeline Connector Dot */}
                <div
                  className={`absolute top-6 w-[18px] h-[18px] rounded-full bg-[#070913] border-4 z-10 transition-all duration-300 ${
                    item.side === 'left'
                      ? 'md:-right-[9px] border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.4)]'
                      : 'md:-left-[9px] border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                  } hidden md:block`}
                ></div>

                {/* Mobile-only Left Dot */}
                <div className="absolute left-[15px] top-6 w-[18px] h-[18px] rounded-full bg-[#070913] border-4 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.4)] md:hidden"></div>

                {/* Card Container */}
                <div
                  onMouseMove={handleMouseMove}
                  className="glass-card group relative p-6 sm:p-8 rounded-3xl w-full max-w-[480px] pl-[54px] pr-6 md:px-8"
                >
                  <div className="card-glow"></div>

                  {/* Category Tag */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-3 ${getTagColor(
                      item.type
                    )}`}
                  >
                    {item.type}
                  </span>

                  {/* Date */}
                  <span className="block text-slate-500 font-bold text-xs sm:text-sm mb-2">
                    {item.date}
                  </span>

                  {/* Title */}
                  <h3 className="font-plus-jakarta text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  {/* Subtitle / Institution */}
                  {item.subtitle && (
                    <h4 className="text-sm font-semibold text-slate-200 mb-1 leading-snug">
                      {item.subtitle}
                    </h4>
                  )}

                  {/* Specialty Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Coursework list */}
                  {item.coursework && (
                    <div className="border-t border-white/8 pt-4 mt-4 text-left">
                      <h5 className="text-white font-bold text-xs sm:text-sm mb-2.5">
                        Relevant Coursework:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded bg-white/2 border border-white/5 text-[10px] sm:text-xs font-semibold text-slate-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
