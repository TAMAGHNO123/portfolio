import React, { useEffect, useRef } from 'react';

const CanvasParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle viewport resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse tracking
    const mouse = { x: null, y: null, radius: 160 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Scroll tracking for speed amplification
    let lastScrollTop = window.scrollY;
    let scrollDelta = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      scrollDelta = Math.abs(currentScrollTop - lastScrollTop);
      lastScrollTop = currentScrollTop;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // size between 1px and 3px
        
        // Base drift speed
        this.baseVx = (Math.random() - 0.5) * 0.3;
        this.baseVy = (Math.random() - 0.5) * 0.3 - 0.1; // slight upward drift
        
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.color = Math.random() > 0.5 ? 'rgba(139, 92, 246,' : 'rgba(6, 182, 212,'; // violet or cyan base
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        // Friction and recovery to base velocity
        this.vx += (this.baseVx - this.vx) * 0.05;
        this.vy += (this.baseVy - this.vy) * 0.05;

        // Apply scroll-induced gravity (pull downward)
        if (scrollDelta > 0) {
          this.vy += scrollDelta * 0.03;
        }

        // Mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const repelStrength = force * 3.5;
            
            // Push away
            this.vx += Math.cos(angle) * repelStrength;
            this.vy += Math.sin(angle) * repelStrength;
          }
        }

        // Apply velocities
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 14000));
    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Loop
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Decay scroll delta
      scrollDelta *= 0.92;
      if (scrollDelta < 0.05) scrollDelta = 0;

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    // Cleanups
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-[#070913]/30"
    />
  );
};

export default CanvasParticles;
