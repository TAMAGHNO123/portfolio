import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Loader } from 'lucide-react';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCopy = async (text, type) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate sending latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Clear success banner after 5s
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="section-padding select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div
          onMouseMove={handleMouseMove}
          className="contact-container-glow glass-card group relative p-8 sm:p-14 rounded-3xl max-w-[900px] mx-auto"
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
              className="flex items-center gap-5 p-5 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
              className="flex items-center gap-5 p-5 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
                  className="w-full bg-white/2 border border-white/5 focus:border-violet-500 focus:bg-white/4 rounded-xl px-4 py-3 text-sm sm:text-base text-white outline-none focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300"
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
                  className="w-full bg-white/2 border border-white/5 focus:border-violet-500 focus:bg-white/4 rounded-xl px-4 py-3 text-sm sm:text-base text-white outline-none focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300"
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
                className="w-full bg-white/2 border border-white/5 focus:border-violet-500 focus:bg-white/4 rounded-xl px-4 py-3 text-sm sm:text-base text-white outline-none focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="self-center flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-violet-500 to-cyan-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
    </section>
  );
};

export default Contact;