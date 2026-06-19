import React, { useState, useEffect } from 'react';
import { Mail, Phone, Copy, Check, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { audioSystem } from '../utils/audioSystem';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your Public Key
    emailjs.init("34q4YlVsldG2z5aqk");
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    const w = rect.width;
    const h = rect.height;
    // Subtle tilt for this larger container
    const rotateY = ((x - w / 2) / (w / 2)) * 6; // max 6 deg
    const rotateX = -((y - h / 2) / (h / 2)) * 6;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.transition = 'transform 0.08s ease-out';
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    card.style.transition = 'transform 0.4s ease-out';
  };

  const handleCopy = async (text, type) => {
    audioSystem.playClick();
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    audioSystem.playClick();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setShowToast(false);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Tamaghno',
    };

    try {
      const response = await emailjs.send(
        'service_i4jdu1c', // Service ID
        'template_kee7t2j', // Template ID 
        templateParams,
        '34q4YlVsldG2z5aqk' // Public Key
      );

      if (response.status === 200) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setShowToast(false);
          setSubmitStatus(null);
        }, 4000);
      }
    } catch (error) {
      console.error('Email error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-padding select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => audioSystem.playHover()}
          className="contact-container-glow glass-card group relative p-8 sm:p-14 rounded-3xl max-w-[900px] mx-auto cursor-default"
        >
          <div className="contact-glow"></div>

          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="font-plus-jakarta text-4xl font-bold tracking-tight mb-4 section-text-gradient">
              Let's Collaborate
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-[650px] mx-auto leading-relaxed">
              Whether you're looking for a dedicated full-stack developer, want to discuss a project, or just want to connect—reach out! I am currently open to exciting opportunities.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {/* Email Card */}
            <div
              onClick={() => handleCopy('tamaghnog@gmail.com', 'email')}
              onMouseEnter={() => audioSystem.playHover()}
              className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500">
                <Mail size={22} />
              </div>
              <div className="flex-grow flex flex-col items-start">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email Me
                </span>
                <span className="text-sm sm:text-base font-semibold text-white break-all">
                  tamaghnog@gmail.com
                </span>
              </div>
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div
              onClick={() => handleCopy('+918420269984', 'phone')}
              onMouseEnter={() => audioSystem.playHover()}
              className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500">
                <Phone size={22} />
              </div>
              <div className="flex-grow flex flex-col items-start">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                  Call Me
                </span>
                <span className="text-sm sm:text-base font-semibold text-white break-all">
                  +91 8420269984
                </span>
              </div>
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Simple Form */}
          <form onSubmit={handleSubmit} className="border-t border-white/8 pt-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="form-name" className="text-xs sm:text-sm font-semibold text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  onFocus={() => audioSystem.playClick()}
                  className="w-full glass-input rounded-xl px-4 py-3 text-sm sm:text-base placeholder-slate-400/80 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="form-email" className="text-xs sm:text-sm font-semibold text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  id="form-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  required
                  onFocus={() => audioSystem.playClick()}
                  className="w-full glass-input rounded-xl px-4 py-3 text-sm sm:text-base placeholder-slate-400/80 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="form-message" className="text-xs sm:text-sm font-semibold text-slate-400">
                Message
              </label>
              <textarea
                id="form-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                placeholder="Your Message..."
                required
                onFocus={() => audioSystem.playClick()}
                className="w-full glass-input rounded-xl px-4 py-3 text-sm sm:text-base placeholder-slate-400/80 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              onMouseEnter={() => audioSystem.playHover()}
              className="self-center flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-violet-500 to-cyan-500 btn-hover-premium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  Sending... <Loader size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="text-center font-semibold text-sm sm:text-base text-green-400 mt-2 animate-pulse">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out transform ${
        showToast ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="glass-card flex items-center gap-3.5 px-6 py-4.5 rounded-2xl border border-green-500/30 bg-green-950/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(74,222,128,0.15)] max-w-sm">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
            <Check size={18} />
          </div>
          <div className="flex flex-col text-left">
            <h5 className="text-white font-bold text-sm">Message Sent!</h5>
            <p className="text-slate-300 text-xs mt-0.5">Thank you, Tamaghno will get back to you soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;