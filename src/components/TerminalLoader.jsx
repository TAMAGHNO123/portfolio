import React, { useEffect, useState } from 'react';

const TerminalLoader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const rawLogs = [
    'Initializing Antigravity engine v2.9.1...',
    'Loading styling system and Glassmorphism tokens...',
    'Scanning active directory d:\\portfolio-update...',
    'Establishing Git repository history link...',
    'Restoring EmailJS variables (Service ID: service_i4jdu1c)...',
    'Pre-assembling full-stack and backend Bento components...',
    'Synthesizing Web Audio API Oscillators (90Hz / 880Hz)...',
    'Deploying responsive HTML5 Particle Canvas...',
    'Compiling React DOM nodes successfully.',
    'System ready. Launching portfolio environment...',
  ];

  useEffect(() => {
    let logIndex = 0;
    let currentProgress = 0;
    
    // Staggered log printing
    const logInterval = setInterval(() => {
      if (logIndex < rawLogs.length) {
        setLogs(prev => [...prev, `[SYSTEM_BOOT] ${rawLogs[logIndex]}`]);
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 150);

    // Progress counter
    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 4;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        
        // Stagger fade-out
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // match transition duration
        }, 500);
      }
      setProgress(currentProgress);
    }, 60);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-[#070913] z-[9999] flex flex-col items-center justify-center font-mono p-6 transition-all duration-700 ease-in-out select-none ${
      isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="w-full max-w-[650px] rounded-2xl bg-black/40 border border-white/5 p-6 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/8 pb-4 mb-6">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">tg-assembly.log</span>
        </div>

        {/* Terminal Screen Output */}
        <div className="h-[220px] overflow-y-auto mb-6 flex flex-col gap-2.5 text-left text-xs sm:text-sm custom-terminal-scrollbar">
          {logs.map((log, idx) => (
            <div key={idx} className="text-cyan-400 font-medium leading-relaxed">
              <span className="text-violet-500 select-none">➜</span> {log}
            </div>
          ))}
          <div className="text-slate-400">
            <span className="text-violet-500 select-none">➜</span> Compiling components...<span className="inline-block w-2.5 h-4 bg-slate-400 animate-blink ml-1.5 align-middle"></span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="flex flex-col gap-2.5 border-t border-white/8 pt-6">
          <div className="flex justify-between items-center text-xs sm:text-sm font-bold">
            <span className="text-slate-400 uppercase tracking-widest">Compiling Assets</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
          
          <div className="w-full h-2.5 bg-white/5 border border-white/8 rounded-full overflow-hidden p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Styles for blinking cursor */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 0.8s infinite steps(1);
        }
        .custom-terminal-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-terminal-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default TerminalLoader;
